import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';


@IonicPage()
@Component({
  selector: 'page-proteinas',
  templateUrl: 'proteinas.html',
})
export class ProteinasPage {

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

animalred(){
	this.navCtrl.push('ProteinasanimaisPage');
}
vegetalred(){
	this.navCtrl.push('ProteinasvegetaisPage');
}
}
