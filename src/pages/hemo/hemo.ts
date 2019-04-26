import { Component, ViewChild} from '@angular/core';
import { IonicPage, NavController, ToastController,AlertController } from 'ionic-angular';


@IonicPage()
@Component({
  selector: 'page-hemo',
  templateUrl: 'hemo.html',
})
export class HemoPage {

	@ViewChild('nome') nome;
	@ViewChild('hemo') hemo;
	hemo1 : number;
	name : string;

  constructor(public alertCtrl: AlertController,public navCtrl: NavController,  public toastCtrl: ToastController) {

  }
  

hemoglobina()
	{
		var toast = this.toastCtrl.create(({duration: 8000,
        showCloseButton: true,
        closeButtonText: "OK",
        position :'bottom'}));

		var hemo = this.hemo.value;
		this.hemo1 = hemo;
		this.name = this.nome.value;

		if (hemo<5.7) {
			toast.setMessage("Sua hemoglobina está normal" + ", " +  this.nome.value);
			toast.present();
		}
	else if (hemo>=5.7 && hemo<=6.4)
	{
		toast.setMessage("Cuidado, você pode estar com pré diabetes! Procure um médico" + ", " + this.nome.value);
		toast.present();
	}
	else if (hemo>=6.5)
	{
		toast.setMessage("ATENÇÃO! Você pode estar com diabetes, Procure um médico"+ ", " + this.nome.value);
		toast.present();
	}

}
AlimentosPage(){
	 this.navCtrl.push('NutrientesPage');
}

}
