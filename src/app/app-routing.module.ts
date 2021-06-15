import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MovieDetailsComponent } from './movie-details/movie-details.component';
import { PopularMovieComponent } from './popular-movie/popular-movie.component';

const routes: Routes = [
  { path: '', component: PopularMovieComponent },
  // { path: 'details/:id', component: MovieDetailsComponent },
  {
    path: 'details/:id',
    loadChildren: () =>
      import('./movie-details/movie-details.module').then(
        (m) => m.MovieDetailsModule
      ),
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
