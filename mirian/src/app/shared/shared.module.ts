import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MenuComponent } from '@app/shared/components/menu/menu.component';
import { DirectivesModule } from '@app/shared/directives/directives.module';
import { PipesModule } from '@app/shared/pipes/pipes.module';
import { MaterialModule } from '@app/core/material/material.module';

@NgModule({
  imports: [
    CommonModule,
    DirectivesModule,
    PipesModule,
    MaterialModule
  ],
  declarations: [
    MenuComponent
  ],
  exports: [
    MenuComponent,
    DirectivesModule,
    PipesModule,
    MaterialModule
  ]
})
export class SharedModule { }
