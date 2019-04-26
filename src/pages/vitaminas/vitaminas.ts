import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';


@IonicPage()
@Component({
  selector: 'page-vitaminas',
  templateUrl: 'vitaminas.html',
})
export class VitaminasPage {

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

vitared(){
this.navCtrl.push('VitAPage');
}

vitb1red(){
this.navCtrl.push('Vitb1Page');
}

vitb2red(){
this.navCtrl.push('Vitb2Page');
}

vitb3red(){
this.navCtrl.push('Vitb3Page');
}

vitb5red(){
this.navCtrl.push('Vitb5Page');
}

vitb6red(){
this.navCtrl.push('Vitb6Page');
}

vitb12red(){
this.navCtrl.push('Vitb12Page');
}

vitcred(){
this.navCtrl.push('VitcPage');
}

vitdred(){
this.navCtrl.push('VitdPage');
}

vitkred(){
this.navCtrl.push('VitkPage');
}

}
