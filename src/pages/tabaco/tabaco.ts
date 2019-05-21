import { Component, ViewChild } from '@angular/core';
import { IonicPage, NavController, ToastController } from 'ionic-angular';

@IonicPage()
@Component({
	selector: 'page-tabaco',
	templateUrl: 'tabaco.html'
})
export class TabacoPage {
	@ViewChild('cigarros') cigarros;
	@ViewChild('tempo') tempo;
	@ViewChild('nome') nome;
	resultado: string;
	name: string;
	isInputing = '';

	constructor(public navCtrl: NavController, public toastCtrl: ToastController) {}
	calcular() {
		const toast = this.toastCtrl.create({
			duration: 8000,
			showCloseButton: true,
			closeButtonText: 'OK',
			position: 'bottom'
		});

		let cigarros = this.cigarros.value;
		let tempo = this.tempo.value;

		let total = cigarros / 20 * tempo;
		this.resultado = total.toFixed(1);
		this.name = this.nome.value;

		toast.setMessage('Sua carga tabágica é ' + total + ' anos-maço' + ', ' + this.nome.value);
		toast.present();
	}
	AlimentosPage() {
		this.navCtrl.push('NutrientesPage');
	}
}
