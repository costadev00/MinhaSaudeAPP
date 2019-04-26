import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { VitkPage } from './vitk';

@NgModule({
  declarations: [
    VitkPage,
  ],
  imports: [
    IonicPageModule.forChild(VitkPage),
  ],
})
export class VitkPageModule {}
