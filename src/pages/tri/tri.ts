import { Component, ViewChild } from '@angular/core';
import { IonicPage, NavController,ToastController} from 'ionic-angular';



@IonicPage()
@Component({
  selector: 'page-tri',
  templateUrl: 'tri.html',
})
export class TriPage {
	@ViewChild('nome') nome;
	@ViewChild('total') total;
	name:string;
	resultado:number;
  constructor(public navCtrl: NavController, public toastCtrl: ToastController) {
  }


CalcularTotalTRI(){
	 let toast = this.toastCtrl.create(({duration: 8000,
        showCloseButton: true,
        closeButtonText: "OK",
        position :'bottom'}));
	 
	 let total =  this.total.value;
	 this.name = this.nome.value;
	 this.resultado = total

	if (total<150)
	{
		toast.setMessage("Parabéns! seu triglicerídios está normal, " + this.nome.value);
		toast.present();
	
	}
	else if (total>=150 && total<=200) 
	{
		toast.setMessage("Seu triglicerídios está no limite, " + this.nome.value);
		toast.present();
	}

	else if (total>200)
	{
		toast.setMessage("ATENÇÃO! Seu triglicerídios está alto, "+ this.nome.value);
		toast.present();
	}


}
AlimentosPage(){
	 this.navCtrl.push('NutrientesPage');
}
}
