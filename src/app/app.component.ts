import { Component } from '@angular/core';
import { Platform } from 'ionic-angular';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import { AuthServiceProvider } from '../providers/auth-service/auth-service';

import { LoginPage } from '../pages/login/login';
import { TabsPage } from './../pages/tabs/tabs';

@Component({
  templateUrl: 'app.html'
})
export class MyApp {
  rootPage:any = LoginPage;

  constructor(platform: Platform, statusBar: StatusBar, splashScreen: SplashScreen, authService: AuthServiceProvider) {
    platform.ready().then(() => {
      // Okay, so the platform is ready and our plugins are available.
      // Here you can do any higher level native things you might need.
      statusBar.styleDefault();
      splashScreen.hide();

       authService.authNotifier.subscribe((authed) => {
        console.log('app.component.ts: auth.authNotifier =', authed);
        if (authed) {
          console.log('set rootPage to Tabs');
          this.rootPage = TabsPage;
        } else {
          console.log('set rootPage to Login');
          this.rootPage = LoginPage;
        }
      });


    });
  }
}

