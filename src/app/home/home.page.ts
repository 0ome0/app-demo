import { Component } from '@angular/core';
import { Geolocation } from '@ionic-native/geolocation/ngx';
// import { LoadingController } from '@ionic/angular';
import { LoadingService } from './../loading.service';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})


export class HomePage {
  long: number;
  lat: number;
  loaderToShow: any;
  // loading: any;
  timer: any;
  displayTimer: any;
  officeLat = 13.616862396076701;
  officeLong = 100.60058804599092;
  diffLat: number;
  diffLong: number;
  result: string;
  buttonDisabled = true;

  constructor(private geolocation: Geolocation, public loading: LoadingService ) {
     this.timer = setInterval(() => {
      this.timer += 1;
      this.displayTimer = new Date();
      }, 1000);
  }
  // tslint:disable-next-line:no-inferrable-types
  // myForce: string = 'The force is with me!';

  // updateMyValue() {
  //   this.myForce = 'The force be with you';
  // }

  // updateMyValueToMe() {
  //   this.myForce = 'The force is with me';
  // }

  getCurrentLocation() {

    this.loading.presentLoading();
    // this.myForce = 'The force is with me!';
    // alert('Checking your location click ok and please wait');
    this.lat = null;
    this.long = null;
    this.buttonDisabled = false;

    this.geolocation.getCurrentPosition().then((resp) => {
      // resp.coords.latitude
      // resp.coords.longitude
      this.lat = resp.coords.latitude;
      this.long = resp.coords.longitude;


      this.diffLat = Math.abs(this.lat - this.officeLat);
      this.diffLong = Math.abs(this.long - this.officeLong);

      this.loading.closeLoading();

      if (this.diffLat > 0.001 || this.diffLong > 0.004) {
        this.result = 'Out of Office/Can not checkin';
        this.buttonDisabled = true;
      } else {
        this.result = 'You are at Office/Checkin';
        this.buttonDisabled = false;
      }

     }).catch((error) => {
       console.log('Error getting location', error);
     });

    const watch = this.geolocation.watchPosition();
    watch.subscribe((data) => {
      console.log(data);
     });
  }

  checkInWork() {
    alert('Check in Completed! ' + this.displayTimer);
  }
}
