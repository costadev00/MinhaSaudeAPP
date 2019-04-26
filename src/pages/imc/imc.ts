import { Component, ViewChild } from '@angular/core';
import { IonicPage, NavController,ToastController } from 'ionic-angular';

@IonicPage()
@Component({
  selector: 'page-imc',
  templateUrl: 'imc.html',
})
export class ImcPage {

 	@ViewChild('peso') peso;
	@ViewChild('altura') altura;
	@ViewChild('nome') nome;
	resultado : string;
	name : string;

  constructor(public navCtrl: NavController , public toastCtrl: ToastController) {

  }



calcular() 
{
 	var toast = this.toastCtrl.create(({ 
	duration: 7000,
    showCloseButton: true,
    closeButtonText: "OK",
    position :'bottom'}));
        
	var peso =  this.peso.value;
	var altura = this.altura.value;
	var imc = peso / (altura * altura); 
	this.resultado = imc.toFixed(2);
	this.name = this.nome.value;

	if (imc<18.5)
	{
		toast.setMessage("Você está com baixo peso" + ", " + this.nome.value);
		toast.present();
	
	}
		else if (imc>18.5 && imc<=25.0) 
		{
			toast.setMessage("Parabéns, você está no peso ideal" + ", " + this.nome.value);
			toast.present();
		}
		else if (imc>25.0 && imc<=30.0) 
		{
			toast.setMessage("Você está com sobrepeso" + ", " + this.nome.value);
			toast.present();
		}
		else if (imc>30.0 && imc<=35.0)
		{
			toast.setMessage("Você está com obesidade grau 1" + ", " + this.nome.value);
			toast.present();
		}
		else if (imc>35.0 && imc<=39.9)
		{
			toast.setMessage("Você está com obesidade grau 2"  + ", "+ this.nome.value);
			toast.present();
		}

		else if (imc>39.9)
		{
			toast.setMessage("Você está com obesidade grau 3" + ", " + this.nome.value);
			toast.present();
		}
}	

glicemiared(){
	this.navCtrl.push('NutrientesPage');
}

}