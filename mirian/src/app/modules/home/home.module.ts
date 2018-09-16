import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeComponent } from '@app/modules/home/page/home/home.component';
import { HomeRoutingModule } from '@app/modules/home/home.routing.module';
import { SharedModule } from '@app/shared/shared.module';

@NgModule({
  imports: [
    CommonModule,
    HomeRoutingModule,
    SharedModule
  ],
  declarations: [
    HomeComponent
  ],
  exports: [HomeComponent]
})
export class HomeModule { }
