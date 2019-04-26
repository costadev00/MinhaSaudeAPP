import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

@IonicPage()
@Component({
  selector: 'page-carbo',
  templateUrl: 'carbo.html',
})
export class CarboPage {

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

carbomelhorred(){
this.navCtrl.push('CarbomelhoresPage');
}

carbopiorred(){
this.navCtrl.push('CarbopioresPage');
}

}
