import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

import { AuthServiceProvider } from '../../providers/auth-service/auth-service';

@IonicPage()
@Component({
  selector: 'page-home',
  templateUrl: 'home.html',
})
export class HomePage {

  constructor(public navCtrl: NavController, public navParams: NavParams, public authService: AuthServiceProvider) {
  }

  logout() {
    console.log('home.ts logout');
    this.authService.logout();
  }

  swipeLeft(event: any) {
    console.log("Swipe Left", event);
  }

  swipeDown(event: any) {
    console.log('Swipe Down', event);
  }

}
