import { Component, ViewChild } from '@angular/core';
import { IonicPage, NavController, ToastController} from 'ionic-angular';



@IonicPage()
@Component({
  selector: 'page-frequenciacard',
  templateUrl: 'frequenciacard.html',
})
export class FrequenciacardPage {
	@ViewChild('nome') nome;
	@ViewChild('freqcard') freqcard;
	name:string;
	resultado:number;

  constructor(public navCtrl: NavController,public toastCtrl: ToastController) {
  }

calcularfreqcard(){
	 let toast = this.toastCtrl.create(({duration: 8000,
        showCloseButton: true,
        closeButtonText: "OK",
        position :'bottom'}));
	 
	 let freq =  this.freqcard.value;
	 this.name = this.nome.value;
	 this.resultado = freq;

	if (freq<60)
	{
		toast.setMessage("Sua frequência cardíaca pode estar baixa" + ", " + this.nome.value);
		toast.present();
	
	}
	else if (freq>=60 && freq<=100) 
	{
		toast.setMessage("Sua frequência cardíaca está normal" + ", " + this.nome.value);
		toast.present();
	}

	else if (freq>100)
	{
		toast.setMessage("ATENÇÃO! Sua frequência cardíaca pode estar alta" + ", " + this.nome.value);
		toast.present();
	}

}

AlimentosPage(){
	 this.navCtrl.push('NutrientesPage');
}

}
