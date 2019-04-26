import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { VitaminasPage } from './vitaminas';

@NgModule({
  declarations: [
    VitaminasPage,
  ],
  imports: [
    IonicPageModule.forChild(VitaminasPage),
  ],
})
export class VitaminasPageModule {}
