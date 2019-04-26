import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

@IonicPage()
@Component({
  selector: 'page-colesterol',
  templateUrl: 'colesterol.html',
})
export class ColesterolPage {

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad ColesterolPage');
  }
totalred(){
this.navCtrl.push('TotalPage');
}
ldlred(){
this.navCtrl.push('LdlPage');
}
hdlred(){
this.navCtrl.push('HdlPage');
}
trired(){
this.navCtrl.push('TriPage');
}
}
