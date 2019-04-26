import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { NutrientesPage } from './nutrientes';

@NgModule({
  declarations: [
    NutrientesPage,
  ],
  imports: [
    IonicPageModule.forChild(NutrientesPage),
  ],
})
export class NutrientesPageModule {}
