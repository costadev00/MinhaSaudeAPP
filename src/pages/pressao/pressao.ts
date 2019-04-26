import { Component , ViewChild} from '@angular/core';
import { IonicPage, NavController, NavParams,ToastController } from 'ionic-angular';


@IonicPage()
@Component({
  selector: 'page-pressao',
  templateUrl: 'pressao.html',
})
export class PressaoPage {
 	@ViewChild('pres1') pres1;
	@ViewChild('pres2') pres2;
	@ViewChild('nome') nome;
	normal: boolean;
	pre: boolean;
	resultado1 : string;
	resultado2 : string;
	resultado: string;
	name : string;
  constructor(public navCtrl: NavController, public navParams: NavParams, public toastCtrl: ToastController) {
  }


pressao(){
	 var toast = this.toastCtrl.create(({duration: 6000,showCloseButton: true,closeButtonText: "OK", position :'bottom'}));
	 var pres1 =  this.pres1.value;
	 var pres2 = this.pres2.value;
	//  this.resultado1 = pres1;
	//  this.resultado2 = pres2;
	 this.resultado = '';
	 this.name = this.nome.value;

// if (pres1 >= 140) {
// 	pres1 = true;
// }
// if (pres2 >= 90) {
// 	pres2 = true;
// } 

if (pres1 < 90 || pres2 < 60){
this.resultado = 'BAIXA';
toast.setMessage("Sua pressão arterial pode estar baixa" + ", " + this.nome.value + " procure um médico");
toast.present();
}

if ((pres1 >= 90 && pres1 <= 120) || (pres2<=80 && pres2 >= 60)) {
this.resultado = 'NORMAL';
toast.setMessage("Sua pressão arterial está normal" + ", " + this.nome.value);
toast.present();
}

if ( (pres1 >=121 && pres1<=139) || (pres2>=81 && pres2<=89) ) {
this.resultado = 'PRÉ HIPERTENSÃO';
toast.setMessage("Cuidado! Você pode estar com pré-hipertensão" + ", " + this.nome.value);
toast.present();
}

if ((pres1 >=140 && pres1<=159) || (pres2>=90 && pres2<=99)) {
this.resultado = 'HIPERTENSÃO ESTÁGIO 1';
toast.setMessage("Cuidado! Você pode estar com Hipertensão estágio 1" + ", " + this.nome.value);
toast.present();
}

if ((pres1 >=160 && pres1<=179) || (pres2>=100 && pres2<=109)) {
this.resultado = 'HIPERTENSÃO ESTÁGIO 2';
toast.setMessage("Cuidado! Você pode estar com Hipertensão estágio 2 " + ", " + this.nome.value);
toast.present();
}

if (pres1>=180 || pres2>=110) {
this.resultado = 'HIPERTENSÃO ESTÁGIO 3';
toast.setMessage("Cuidado! Você pode estar com Hipertensão estágio 3" + ", " + this.nome.value);
toast.present();
}


// else if(pres1>=140 || pres2>=90){
// 	toast.setMessage("Cuidado! Você pode estar com Hipertensão" + ", " + this.nome.value);
// 	toast.present();
// }

}
AlimentosPage(){
	 this.navCtrl.push('NutrientesPage');
}

}
