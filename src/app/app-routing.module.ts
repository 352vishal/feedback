import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './Components/home/home.component';
import { SubmitComponent } from './Components/submit/submit.component';
import { CustomerListComponent } from './Components/customer-list/customer-list.component';

const routes: Routes = [
  {
    component:HomeComponent,
    path:"",
  },
  {
    component:SubmitComponent,
    path:"submit",
  },
  {
    component:CustomerListComponent,
    path:"customer-list",
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
