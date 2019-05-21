import { Component, ViewChild } from '@angular/core';
import { IonicPage, NavController, ToastController } from 'ionic-angular';
import { AlertController } from 'ionic-angular';

@IonicPage()
@Component({
	selector: 'page-circunferencia',
	templateUrl: 'circunferencia.html'
})
export class CircunferenciaPage {
	@ViewChild('nome') nome;
	@ViewChild('circ') circ;
	circ1: any;
	name: string;
	masc1: any;
	isInputing = '';

	constructor(public alertCtrl: AlertController, public navCtrl: NavController, public toastCtrl: ToastController) {}

	showConfirm(): Promise<boolean> {
		return new Promise((resolve, reject) => {
			this.alertCtrl
				.create({
					title: 'Qual o seu sexo?',
					buttons: [
						{
							text: 'Masculino',
							handler: (_) => resolve(true)
						},
						{
							text: 'Feminino',
							handler: (_) => resolve(false)
						}
					]
				})
				.present();
		});
	}

	circfunc(circ: number) {
		this.showConfirm().then((masc) => {
			const toast = this.toastCtrl.create({
				duration: 8000,
				showCloseButton: true,
				closeButtonText: 'OK',
				position: 'bottom'
			});

			let circ = this.circ.value;
			this.circ1 = circ;
			this.name = this.nome.value;
			this.masc1 = masc;

			if (masc && circ <= 102) {
				toast.setMessage('Sua circunferência abdominal está normal!' + ', ' + this.nome.value);
				toast.present();
			} else if (masc && circ > 102) {
				toast.setMessage('Sua circunferência abdominal está acima do esperado' + ', ' + this.nome.value);
				toast.present();
			} else if (!masc && circ <= 88) {
				toast.setMessage('Sua circunferência abdominal está normal!' + ', ' + this.nome.value);
				toast.present();
			} else if (!masc && circ > 88) {
				toast.setMessage('Sua circunferência abdominal está acima do esperado' + ', ' + this.nome.value);
				toast.present();
			}
		});
	}

	AlimentosPage() {
		this.navCtrl.push('NutrientesPage');
	}
}
