import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { HemoPage } from './hemo';

@NgModule({
  declarations: [
    HemoPage,
  ],
  imports: [
    IonicPageModule.forChild(HemoPage),
  ],
})
export class HemoPageModule {}
