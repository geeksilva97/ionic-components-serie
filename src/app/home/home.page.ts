import { Component } from '@angular/core';
import { ModalController } from '@ionic/angular';
import { ModalPage } from '../modal/modal.page';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {

  constructor(
    private modalCtrl: ModalController
  ) {}


  async showModal() {
    console.log('showModal()');
    const modal = await this.modalCtrl.create({
      component: ModalPage,
      cssClass: 'my-custom-modal-css',
      componentProps: {
        name: 'Edy Silva',
        email: 'edigleyssonsilva@codesilva.github.io'
      }
    });

    // will present

    await modal.present();

    // didpresent

    // desestruturação
    //
    const { data } = await modal.onDidDismiss();
    console.log({data});
  }

}
