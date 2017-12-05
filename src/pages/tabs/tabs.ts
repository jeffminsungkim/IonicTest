import { Component } from '@angular/core';
import { IonicPage, NavController } from 'ionic-angular';

import { AboutPage } from '../about/about';
import { ContactPage } from '../contact/contact';
import { HomePage } from '../home/home';

@IonicPage()
@Component({
  selector: 'page-tabs',
  templateUrl: 'tabs.html'
})
export class TabsPage {

  homePageRoot = HomePage;
  aboutPageRoot = AboutPage;
  contactPageRoot = ContactPage;


  constructor(public navCtrl: NavController) {}

}
