import { Component } from '@angular/core';
import { IonicPage, NavController } from 'ionic-angular';

import { TabsPage } from '../tabs/tabs';

@IonicPage()
@Component({
  selector: 'page-intro',
  templateUrl: 'intro.html',
})
export class IntroPage {

  constructor(public navCtrl: NavController) {
  }


avancar(){
	this.navCtrl.setRoot(TabsPage);
	localStorage.setItem('keyName', 'done');
}

}
