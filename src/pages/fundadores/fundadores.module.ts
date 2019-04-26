import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { FundadoresPage } from './fundadores';

@NgModule({
  declarations: [
    FundadoresPage,
  ],
  imports: [
    IonicPageModule.forChild(FundadoresPage),
  ],
})
export class FundadoresPageModule {}
