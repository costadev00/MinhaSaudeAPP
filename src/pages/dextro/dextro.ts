import { Component , ViewChild} from '@angular/core';
import { IonicPage, NavController, ToastController, AlertController } from 'ionic-angular';



@IonicPage()
@Component({
  selector: 'page-dextro',
  templateUrl: 'dextro.html',
})
export class DextroPage {

	@ViewChild('nome') nome;
	@ViewChild('gli') gli;
	gli1 : number;
	name : string;
	jejum1 : boolean;

  constructor(public alertCtrl: AlertController,public navCtrl: NavController,  public toastCtrl: ToastController) {
  }


 showConfirm(): Promise<boolean> {
    return new Promise((resolve, reject) =>{
       this.alertCtrl.create({
        title : 'Você está medindo:',
        buttons: [
          {
            text: 'Depois da refeição',
            handler:_=> resolve(false)
          },
          {
            text: 'Antes da refeição',
            handler:_=> resolve(true)
          }
        ]
      }).present();
    })
  }

glicemia(gli:number)
	{
		this.showConfirm().then((jejum) => {
		var toast = this.toastCtrl.create(({duration: 8000,
        showCloseButton: true,
        closeButtonText: "OK",
        position :'bottom'}));

		var gli = this.gli.value;
		this.gli1 = gli;
		this.name = this.nome.value;
		this.jejum1 = jejum;

		if (jejum && gli>=70 && gli<=130) {
			toast.setMessage("Sua glicemia está normal" + ", " +  this.nome.value);
			toast.present();
		}

	else if (jejum && gli>130)
	{
		toast.setMessage("ATENÇÃO! Sua glicemia está elevada, " + this.nome.value + "  fique atento(a)");
		toast.present();
	}

	else if (!jejum && gli>=180)
	{
		toast.setMessage("ATENÇÃO! Sua glicemia está elevada, " + this.nome.value + "  fique atento(a)");
		toast.present();
	}
	else if (!jejum && gli<180)
	{
		toast.setMessage("Sua glicemia está normal, " +  this.nome.value);
		toast.present();
	}


	})
}
AlimentosPage(){
	 this.navCtrl.push('NutrientesPage');
}



}
