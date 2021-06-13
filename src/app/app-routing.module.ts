import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MovieDelailsComponent } from './movie-delails/movie-delails.component';
import { PopularMovieComponent } from './popular-movie/popular-movie.component';

const routes: Routes = [
  { path: '', component: PopularMovieComponent },
  { path: 'details/:id', component: MovieDelailsComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
