import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { GlicemiaPage } from './glicemia';

@NgModule({
  declarations: [
    GlicemiaPage,
  ],
  imports: [
    IonicPageModule.forChild(GlicemiaPage),
  ],
})
export class GlicemiaPageModule {}
