import { Component ,ViewChild} from '@angular/core';
import { IonicPage, NavController, NavParams,ToastController } from 'ionic-angular';

@IonicPage()
@Component({
  selector: 'page-hdl',
  templateUrl: 'hdl.html',
})
export class HdlPage {
	@ViewChild('nome') nome;
	@ViewChild('total') total;
	name:string;
	resultado:number;
  constructor(public navCtrl: NavController, public navParams: NavParams,public toastCtrl: ToastController) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad HdlPage');
  }
CalcularTotalHDL(){
	 let toast = this.toastCtrl.create(({duration: 8000,
        showCloseButton: true,
        closeButtonText: "OK",
        position :'bottom'}));
	 let total =  this.total.value;
	 this.name = this.nome.value;
	 this.resultado = total;

	if (total>=60)
	{
		toast.setMessage("Parabéns! seu colesterol HDL está no nível protetor, "   + this.nome.value);
		toast.present();
	
	}
	else if (total>=40 && total<=59) 
	{
		toast.setMessage("Seu colesterol HDL está normal! " + this.nome.value);
		toast.present();
	}

	else if (total<40)
	{
		toast.setMessage("ATENÇÃO!Seu colesterol HDL está em risco, "  + this.nome.value);
		toast.present();
	}

}
AlimentosPage(){
	 this.navCtrl.push('NutrientesPage');
}
}
