import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { TotalPage } from './total';

@NgModule({
  declarations: [
    TotalPage,
  ],
  imports: [
    IonicPageModule.forChild(TotalPage),
  ],
})
export class TotalPageModule {}
