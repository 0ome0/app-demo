import { Component, OnInit } from '@angular/core';
import { UniqueDeviceID } from '@ionic-native/unique-device-id/ngx';

@Component({
  selector: 'app-device',
  templateUrl: './device.page.html',
  styleUrls: ['./device.page.scss'],
})
export class DevicePage implements OnInit {

  deviceID: any;
  userPostData = {
    firstname: '',
    lastname: ''
  };

  constructor(private uniqueDeviceID: UniqueDeviceID) {
  }

  ngOnInit() {
    const data = JSON.parse(localStorage.getItem('userData'));
    this.userPostData.firstname = JSON.stringify(data.name);
    this.userPostData.lastname = JSON.stringify(data.emp_lastname);
    console.log('Local Storage Data' + JSON.stringify(data.name));
  }

  getDeviceID() {
    this.uniqueDeviceID.get()
    .then((uuid: any) => this.deviceID = uuid)
    //  console.log(uuid))
    .catch((error: any) => console.log(error));
  }
}
