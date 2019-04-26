import { Component,ViewChild } from '@angular/core';
import { IonicPage, NavController, NavParams,ToastController } from 'ionic-angular';



@IonicPage()
@Component({
  selector: 'page-ldl',
  templateUrl: 'ldl.html',
})
export class LdlPage {
	@ViewChild('nome') nome;
	@ViewChild('total') total;
	name:string;
	resultado:number;
  constructor(public navCtrl: NavController, public navParams: NavParams,public toastCtrl: ToastController) {
  }

CalcularTotalLDL(){
	 let toast = this.toastCtrl.create(({duration: 8000,
        showCloseButton: true,
        closeButtonText: "OK",
        position :'bottom'}));
	 let total =  this.total.value;
	 this.name = this.nome.value;
	 this.resultado = total;

	if (total>160)
	{
		toast.setMessage("ATENÇÃO! Seu LDL está em alto risco. Procure um médico " + ", " + this.nome.value);
		toast.present();
	
	}
	else if (total>=130 && total<=160) 
	{
		toast.setMessage("Seu colesterol LDL está em médio risco. Procure um médico" + ", " + this.nome.value);
		toast.present();
	}

	else if (total>=100 && total<=130)
	{
		toast.setMessage("Seu colesterol LDL está normal! " + this.nome.value);
		toast.present();
	}

}
AlimentosPage(){
	 this.navCtrl.push('NutrientesPage');
}
}
