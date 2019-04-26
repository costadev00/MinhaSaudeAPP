import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { DextroPage } from './dextro';

@NgModule({
  declarations: [
    DextroPage,
  ],
  imports: [
    IonicPageModule.forChild(DextroPage),
  ],
})
export class DextroPageModule {}
