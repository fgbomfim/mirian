import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from '@app/modules/home/page/home/home.component';

const routers: Routes = [
  {
    path: '',
    component: HomeComponent
  }
];
@NgModule({
  imports: [RouterModule.forChild(routers)],
  exports: [RouterModule]
})
export class HomeRoutingModule { }
