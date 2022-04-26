import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutComponent } from './about/about.component';
import { Elem1Component } from './elem1/elem1.component';
import { Elem2Component } from './elem2/elem2.component';

import { HomeComponent } from './home/home.component';
import { ListpublisherComponent } from './master/listpublisher/listpublisher.component';

const routes: Routes = [
  {path:"beranda", component:HomeComponent},
  {path:"aboutus", component: AboutComponent},
  {path:"elem1", component: Elem1Component},
  {path:"editelem1/:id", component: Elem1Component},
  {path:"editelem2", component: Elem2Component},
  {path:"publisher", component:ListpublisherComponent},
  {path:"author", component:ListpublisherComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
