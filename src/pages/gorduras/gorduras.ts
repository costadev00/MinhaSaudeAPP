import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';



@IonicPage()
@Component({
  selector: 'page-gorduras',
  templateUrl: 'gorduras.html',
})
export class GordurasPage {

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

gordmelhorred(){
	this.navCtrl.push('GordurasmelhoresPage');
}
gordpiorred(){
	this.navCtrl.push('GorduraspioresPage');
}

}
