import { Component, ViewChild } from '@angular/core';
import { IonicPage, NavController, ToastController } from 'ionic-angular';

@IonicPage()
@Component({
	selector: 'page-total',
	templateUrl: 'total.html'
})
export class TotalPage {
	@ViewChild('nome') nome;
	@ViewChild('total') total;
	name: string;
	resultado: number;
	isInputing = '';

	constructor(public navCtrl: NavController, public toastCtrl: ToastController) {}

	CalcularTotal() {
		let toast = this.toastCtrl.create({
			duration: 8000,
			showCloseButton: true,
			closeButtonText: 'OK',
			position: 'bottom'
		});

		let total = this.total.value;
		this.name = this.nome.value;
		this.resultado = total;

		if (total < 200) {
			toast.setMessage('Parabéns! seu colesterol está otimo ' + this.nome.value);
			toast.present();
		} else if (total > 200 && total <= 239) {
			toast.setMessage('Seu colesterol está no limite, ' + this.nome.value);
			toast.present();
		} else if (total >= 240) {
			toast.setMessage('ATENÇÃO!Seu colesterol está elevado, ' + this.nome.value);
			toast.present();
		}
	}
	AlimentosPage() {
		this.navCtrl.push('NutrientesPage');
	}
}
