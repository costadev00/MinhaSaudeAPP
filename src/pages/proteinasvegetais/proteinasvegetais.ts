import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';



@IonicPage()
@Component({
  selector: 'page-proteinasvegetais',
  templateUrl: 'proteinasvegetais.html',
})
export class ProteinasvegetaisPage {

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad ProteinasvegetaisPage');
  }

}
