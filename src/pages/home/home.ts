import { Component  } from '@angular/core';
import { IonicPage, NavController} from 'ionic-angular';

@IonicPage()
@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  constructor(public navCtrl: NavController) {

  }
glicemiared(){
	 this.navCtrl.push('GlicemiaPage');
}
imcred(){
	 this.navCtrl.push('ImcPage');
}
colesterolred(){
	this.navCtrl.push('ColesterolPage');
}
pressaored(){
	this.navCtrl.push('PressaoPage');
}

circred(){
	this.navCtrl.push('CircunferenciaPage');
}

febrered(){
	this.navCtrl.push('FebrePage');
}

freqcardred(){
	this.navCtrl.push('FrequenciacardPage');
}

freqrespred(){
	this.navCtrl.push('FrequenciarespPage');
}
tabacored(){
	this.navCtrl.push('TabacoPage');
}
}
