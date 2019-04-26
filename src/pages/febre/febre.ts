import { Component ,ViewChild} from '@angular/core';
import { IonicPage, NavController,ToastController} from 'ionic-angular';


@IonicPage()
@Component({
  selector: 'page-febre',
  templateUrl: 'febre.html',
})
export class FebrePage {
	@ViewChild('nome') nome;
	@ViewChild('febre') febre;
	name:string;
	resultado:number;

  constructor(public navCtrl: NavController,public toastCtrl: ToastController) {
  }

CalcularFebre(){
	 let toast = this.toastCtrl.create(({duration: 8000,
        showCloseButton: true,
        closeButtonText: "OK",
        position :'bottom'}));

	 var febre =  this.febre.value;
	 this.name = this.nome.value;
	 this.resultado = febre;

	 if (febre>=36.5 && febre<=37.6)
	{
		toast.setMessage("Sua temperatura está normal, " + this.nome.value);
		toast.present();
	
	}
	else if (febre>=37.7 && febre<=38.6) 
	{
		toast.setMessage("Sua temperatura está moderada, fique atento! " + this.nome.value);
		toast.present();
	}

	else if (febre>38.6 )
	{
		toast.setMessage("ATENÇÃO! Sua temperatura pode estar elevada. Procure um médico, " + this.nome.value);
		toast.present();
	}

}
AlimentosPage(){
	 this.navCtrl.push('NutrientesPage');
}

}


