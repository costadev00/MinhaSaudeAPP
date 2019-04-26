import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { VitcPage } from './vitc';

@NgModule({
  declarations: [
    VitcPage,
  ],
  imports: [
    IonicPageModule.forChild(VitcPage),
  ],
})
export class VitcPageModule {}
