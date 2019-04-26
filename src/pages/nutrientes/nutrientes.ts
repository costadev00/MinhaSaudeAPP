import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';


@IonicPage()
@Component({
  selector: 'page-nutrientes',
  templateUrl: 'nutrientes.html',
})
export class NutrientesPage {

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }
carbored(){
this.navCtrl.push('CarboPage');
}
gordred(){
this.navCtrl.push('GordurasPage');
}

proteinasred(){
this.navCtrl.push('ProteinasPage');
}

vitred(){
this.navCtrl.push('VitaminasPage');
}

}
