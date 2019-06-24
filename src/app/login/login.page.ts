import { LoadingService } from './../loading.service';
import { Component, OnInit } from '@angular/core';
import { ApiService } from './../api.service';
import { NavController } from '@ionic/angular';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {

  resposeData: any;
  userData = {username: '', password: ''};

  constructor(public loading: LoadingService , public apiService: ApiService , public navCtrl: NavController) { }

  ngOnInit() {
  }

  goToCheckLocationPage() {
    this.navCtrl.navigateForward('/home');
  }

  goToDeviceIdPage() {
    this.navCtrl.navigateForward('/device');
  }

  goToPostPage() {
    this.navCtrl.navigateForward('/post');
  }
  gotoUserPage() {
    this.navCtrl.navigateForward('/user-list');
  }
}
