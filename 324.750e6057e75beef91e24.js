(self.webpackChunkmoviebd_app=self.webpackChunkmoviebd_app||[]).push([[324],{324:(e,t,i)=>{"use strict";i.r(t),i.d(t,{MovieDetailsModule:()=>l});var s=i(116),a=i(319),o=i(619),r=i(727);function n(e,t){if(1&e&&o._UZ(0,"img",12),2&e){const e=o.oxw();o.MGl("alt","",e.title," "),o.s9C("src",e.IMG_URL+e.poster_path,o.LSH)}}function c(e,t){if(1&e&&(o.TgZ(0,"span",13),o._uU(1),o.qZA()),2&e){const e=t.$implicit;o.xp6(1),o.hij(" ",e.name," ")}}const g=[{path:"",component:(()=>{class e{constructor(e,t){this.route=e,this.Service=t,this.title="",this.poster_path="",this.vote_average=0,this.overview="",this.release_date="",this.vote_count=0,this.adult=!1,this.IMG_URL="https://image.tmdb.org/t/p/w500"}ngOnInit(){this.route.paramMap.subscribe(e=>{this.id=e.get("id"),this.Service.getMovieDetails(this.id).subscribe(e=>{this.title=e.title,this.poster_path=e.poster_path,this.vote_average=e.vote_average,this.overview=e.overview,this.genres=e.genres,this.release_date=e.release_date,this.vote_count=e.vote_count,this.adult=e.adult})})}}return e.\u0275fac=function(t){return new(t||e)(o.Y36(a.gz),o.Y36(r.b))},e.\u0275cmp=o.Xpm({type:e,selectors:[["movie-details"]],decls:26,vars:8,consts:[[1,"navbar","navbar-light","bg-light"],[1,"container-fluid"],[1,"navbar-brand","mb-0","h1"],[1,"container"],[1,"row","pt-3"],[1,"col-lg-3"],["class","card-img-top img",3,"alt","src",4,"ngIf"],[1,"col-lg-9","mt-5"],[1,"col-lg-4","d-flex","flex-column"],[1,"col-lg-4"],[1,"pt-2"],["class","badge bg-secondary m-1 ",4,"ngFor","ngForOf"],[1,"card-img-top","img",3,"alt","src"],[1,"badge","bg-secondary","m-1"]],template:function(e,t){1&e&&(o.TgZ(0,"nav",0),o.TgZ(1,"div",1),o.TgZ(2,"span",2),o._uU(3),o.qZA(),o.qZA(),o.qZA(),o.TgZ(4,"div",3),o.TgZ(5,"div",4),o.TgZ(6,"div",5),o.YNc(7,n,1,2,"img",6),o.qZA(),o.TgZ(8,"div",7),o.TgZ(9,"h5"),o._uU(10),o.qZA(),o.TgZ(11,"div",4),o.TgZ(12,"div",8),o.TgZ(13,"span"),o._uU(14),o.qZA(),o.TgZ(15,"span"),o._uU(16),o.qZA(),o.qZA(),o.TgZ(17,"div",9),o.TgZ(18,"span"),o._uU(19),o.qZA(),o.qZA(),o.TgZ(20,"div",9),o.TgZ(21,"span"),o._uU(22),o.qZA(),o.qZA(),o.qZA(),o.TgZ(23,"H5",10),o._uU(24," genres : "),o.YNc(25,c,2,1,"span",11),o.qZA(),o.qZA(),o.qZA(),o.qZA()),2&e&&(o.xp6(3),o.Oqu(t.title),o.xp6(4),o.Q6J("ngIf",t.poster_path),o.xp6(3),o.Oqu(t.overview),o.xp6(4),o.hij(" vote count : ",t.vote_count," "),o.xp6(2),o.hij(" average vote : ",t.vote_average," "),o.xp6(3),o.hij(" release date : ",t.release_date,""),o.xp6(3),o.hij(" ",t.adult?"+18":"family movie",""),o.xp6(3),o.Q6J("ngForOf",t.genres))},directives:[s.O5,s.sg],styles:[""]}),e})()}];let p=(()=>{class e{}return e.\u0275fac=function(t){return new(t||e)},e.\u0275mod=o.oAB({type:e}),e.\u0275inj=o.cJS({imports:[[a.Bz.forChild(g)],a.Bz]}),e})(),l=(()=>{class e{}return e.\u0275fac=function(t){return new(t||e)},e.\u0275mod=o.oAB({type:e}),e.\u0275inj=o.cJS({imports:[[s.ez,p]]}),e})()}}]);