import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { CarboPage } from './carbo';

@NgModule({
  declarations: [
    CarboPage,
  ],
  imports: [
    IonicPageModule.forChild(CarboPage),
  ],
})
export class CarboPageModule {}
