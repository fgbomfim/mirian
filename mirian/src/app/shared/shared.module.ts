import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MenuComponent } from '@app/shared/components/menu/menu.component';
import { DirectivesModule } from '@app/shared/directives/directives.module';
import { PipesModule } from '@app/shared/pipes/pipes.module';

@NgModule({
  imports: [
    CommonModule,
    DirectivesModule,
    PipesModule
  ],
  declarations: [
    MenuComponent
  ],
  exports: [
    MenuComponent,
    DirectivesModule,
    PipesModule
  ]
})
export class SharedModule { }
