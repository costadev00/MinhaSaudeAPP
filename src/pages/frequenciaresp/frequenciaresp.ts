import { Component, ViewChild } from '@angular/core';
import { IonicPage, NavController, ToastController } from 'ionic-angular';

@IonicPage()
@Component({
	selector: 'page-frequenciaresp',
	templateUrl: 'frequenciaresp.html'
})
export class FrequenciarespPage {
	@ViewChild('nome') nome;
	@ViewChild('freqcard') freqcard;
	name: string;
	resultado: number;
	isInputing = '';

	constructor(public navCtrl: NavController, public toastCtrl: ToastController) {}

	calcularfreqresp() {
		let toast = this.toastCtrl.create({
			duration: 8000,
			showCloseButton: true,
			closeButtonText: 'OK',
			position: 'bottom'
		});

		let freq = this.freqcard.value;
		this.name = this.nome.value;
		this.resultado = freq;

		if (freq < 12) {
			toast.setMessage(
				'CUIDADO! Você pode estar com bradipneia (frequência muito baixa). Procure um médico ' + this.nome.value
			);
			toast.present();
		} else if (freq >= 12 && freq <= 20) {
			toast.setMessage('Sua frequência respiratória está normal, ' + this.nome.value);
			toast.present();
		} else if (freq > 20) {
			toast.setMessage(
				'ATENÇÃO! Você pode estar com taquipneia (frequência muito alta). Procure um médico, ' + this.nome.value
			);
			toast.present();
		}
	}

	AlimentosPage() {
		this.navCtrl.push('NutrientesPage');
	}
}
