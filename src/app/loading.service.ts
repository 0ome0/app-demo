import { Injectable } from '@angular/core';
import { LoadingController } from '@ionic/angular';

@Injectable({
  providedIn: 'root'
})
export class LoadingService {

  public loader: any;

  constructor(public loadingCtrl: LoadingController) { }

  presentLoading() {
    // this.loader = this.loadingCtrl.create({message: 'Please wait ...'});
    // this.loader.present();

    // this.loader = this.loadingCtrl.create({
    //   message: 'Loading please wait',
    //   // showBackdrop: true,
    // }).then((res) => {
    //   res.present();
    //   // res.onDidDismiss().then((dis) => {
    //   //     console.log('Loading dismissed!');
    //   //   });
    //   });
    this.loader = this.loadingCtrl.create({
      message: 'Please wait ...'
    }).then((res) => {
      res.present();

      res.onDidDismiss().then((dis) => {
        console.log('Loading dismissed! after 2 Seconds');
      });
    });
    // this.closeLoading();

    }

   closeLoading() {
    // this.loader.dismiss();
    setTimeout(() => {
      this.loadingCtrl.dismiss();
    }, 1000);
   }

}
