import { Component, ViewChild } from '@angular/core';
import { IonicPage, NavController, ToastController, AlertController } from 'ionic-angular';

@IonicPage()
@Component({
	selector: 'page-glicemia',
	templateUrl: 'glicemia.html'
})
export class GlicemiaPage {
	@ViewChild('nome') nome;
	@ViewChild('gli') gli;
	gli1: any;
	name: string;
	jejum1: any;
	isInputing = '';

	constructor(public alertCtrl: AlertController, public navCtrl: NavController, public toastCtrl: ToastController) {}

	showConfirm(): Promise<boolean> {
		return new Promise((resolve) => {
			this.alertCtrl
				.create({
					title: 'Você está em jejum?',
					enableBackdropDismiss: false,
					buttons: [
						{
							text: 'Sim',
							handler: () => resolve(true)
						},
						{
							text: 'Não',
							handler: () => resolve(false)
						}
					]
				})
				.present();
		});
	}

	glicemia(gli: number) {
		this.showConfirm().then((jejum) => {
			const toast = this.toastCtrl.create({
				duration: 8000,
				showCloseButton: true,
				closeButtonText: 'OK',
				position: 'bottom'
			});

			let gli = this.gli.value;
			this.gli1 = gli;
			this.name = this.nome.value;
			this.jejum1 = jejum;

			if (jejum && gli < 100) {
				toast.setMessage('Sua glicemia está normal,' + ' ' + this.nome.value);
				toast.present();
			} else if (jejum && gli >= 100 && gli < 126) {
				toast.setMessage('Cuidado você pode estar com pré diabetes! Procure um médico' + ' ' + this.nome.value);
				toast.present();
			} else if (jejum && gli >= 126) {
				toast.setMessage('ATENÇÃO! Você pode estar com diabetes, Procure um médico' + ' ' + this.nome.value);
				toast.present();
			} else if (!jejum && gli < 140) {
				toast.setMessage('Sua glicemia está normal!' + ' ' + this.nome.value);
				toast.present();
			} else if (!jejum && gli >= 140 && gli < 200) {
				toast.setMessage('Cuidado você pode estar com pré diabetes! Procure um médico' + ' ' + this.nome.value);
				toast.present();
			} else if (!jejum && gli >= 200) {
				toast.setMessage('ATENÇÃO! Você pode estar com diabetes, Procure um médico' + ' ' + this.nome.value);
				toast.present();
			}
		});
	}
	AlimentosPage() {
		this.navCtrl.push('NutrientesPage');
	}

	DextroPage() {
		this.navCtrl.push('DextroPage');
	}

	HemoPage() {
		this.navCtrl.push('HemoPage');
	}
}
