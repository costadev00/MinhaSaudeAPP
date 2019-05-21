import { Component, ViewChild } from '@angular/core';
import { IonicPage, NavController, NavParams, ToastController } from 'ionic-angular';

@IonicPage()
@Component({
	selector: 'page-pressao',
	templateUrl: 'pressao.html'
})
export class PressaoPage {
	@ViewChild('pres1') pres1;
	@ViewChild('pres2') pres2;
	@ViewChild('nome') nome;
	resultado: string;
	name: string;
	resultado_alto_baixo: string;
	isInputingSistolica = '';
	isInputingDiastolica = '';

	constructor(public navCtrl: NavController, public navParams: NavParams, public toastCtrl: ToastController) {}

	pressao() {
		const toast = this.toastCtrl.create({
			duration: 6000,
			showCloseButton: true,
			closeButtonText: 'OK',
			position: 'bottom'
		});
		let pres1 = this.pres1.value;
		let pres2 = this.pres2.value;

		this.resultado = '';
		this.resultado_alto_baixo = '';
		this.name = this.nome.value;
		this.isInputingSistolica = this.pres1.value;
		this.isInputingDiastolica = this.pres2.value;

		if (pres1 < 90 || pres2 < 60) {
			this.resultado = 'BAIXA';
			this.resultado_alto_baixo = 'baixa';
			toast.setMessage('Sua pressão arterial pode estar baixa' + ', ' + this.nome.value + ' procure um médico');
			toast.present();
		}

		if ((pres1 >= 90 && pres1 <= 120) || (pres2 >= 60 && pres2 <= 80)) {
			this.resultado = 'NORMAL';
			this.resultado_alto_baixo = 'normal';
			toast.setMessage('Sua pressão arterial está normal' + ', ' + this.nome.value);
			toast.present();
		}

		if ((pres1 >= 121 && pres1 <= 139) || (pres2 >= 81 && pres2 <= 89)) {
			this.resultado = 'PRÉ HIPERTENSÃO';
			this.resultado_alto_baixo = 'um pouco elevada';
			toast.setMessage('Cuidado! Você pode estar com pré-hipertensão' + ', ' + this.nome.value);
			toast.present();
		}

		if ((pres1 >= 140 && pres1 <= 159) || (pres2 >= 90 && pres2 <= 99)) {
			this.resultado = 'HIPERTENSÃO ESTÁGIO 1';
			this.resultado_alto_baixo = 'elevada';
			toast.setMessage('Cuidado! Você pode estar com Hipertensão estágio 1' + ', ' + this.nome.value);
			toast.present();
		}

		if ((pres1 >= 160 && pres1 <= 179) || (pres2 >= 100 && pres2 <= 109)) {
			this.resultado = 'HIPERTENSÃO ESTÁGIO 2';
			this.resultado_alto_baixo = 'muito elevada';
			toast.setMessage('Cuidado! Você pode estar com Hipertensão estágio 2 ' + ', ' + this.nome.value);
			toast.present();
		}

		if (pres1 >= 180 || pres2 >= 110) {
			this.resultado = 'HIPERTENSÃO ESTÁGIO 3';
			this.resultado_alto_baixo = 'muitíssimo elevada';
			toast.setMessage('Cuidado! Você pode estar com Hipertensão estágio 3' + ', ' + this.nome.value);
			toast.present();
		}
	}
	AlimentosPage() {
		this.navCtrl.push('NutrientesPage');
	}
}
