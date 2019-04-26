import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { FebrePage } from './febre';

@NgModule({
  declarations: [
    FebrePage,
  ],
  imports: [
    IonicPageModule.forChild(FebrePage),
  ],
})
export class FebrePageModule {}
