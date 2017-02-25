import { Component, ViewChild } from '@angular/core';
import { Nav, Platform } from 'ionic-angular';
import { StatusBar, Splashscreen } from 'ionic-native';
import { NativeStorage } from 'ionic-native';

import { Page1 } from '../pages/page1/page1';
import { Page2 } from '../pages/page2/page2';
import { LoginPage } from '../pages/login/login';
import { UserPage } from '../pages/user/user';
import { HomePage } from '../pages/home/home';
import { ThejudgesPage } from '../pages/thejudges/thejudges';
import { ScholarshipPage } from '../pages/scholarship/scholarship';
import { AboutamysPage } from '../pages/aboutamys/aboutamys';
import { TheredpencilPage } from '../pages/theredpencil/theredpencil';
import { MasterofcermoniesPage } from '../pages/masterofcermonies/masterofcermonies';
import { SocialMediaPage } from '../pages/social-media/social-media';


@Component({
  templateUrl: 'app.html'
})
export class MyApp {
  @ViewChild(Nav) nav: Nav;

  rootPage: any = HomePage;

  pages: Array<{title: string, component: any}>;

  constructor(public platform: Platform) {
    this.initializeApp();
    // used for an example of ngFor and navigation
    this.pages = [
      { title: 'Home', component: HomePage },
      { title: 'The Judges', component: ThejudgesPage },
      { title: 'Collegiate Scholarship', component: ScholarshipPage},
      { title: 'About AMA Atlanta', component: AboutamysPage},
      { title: 'The Red Pencil', component: TheredpencilPage},
      { title: 'Master Of Cermonies', component: MasterofcermoniesPage},
      { title: 'Social Media', component: SocialMediaPage}
    ];

  }

  initializeApp() {
    //   this.platform.ready().then(() => {
    //     // Here we will check if the user is already logged in
    //   // because we don't want to ask users to log in each time they open the app
    //   let env = this;
    //   NativeStorage.getItem('user')
    //   .then( function (data) { 
    //   }, function (error) {
    //     env.nav.push(LoginPage);
    //     Splashscreen.hide();
    //   });
    //   NativeStorage.getItem('user')
    //   .then( function (data) {
    //     // user is previously logged and we have his data
    //     // we will let him access the app
    //     env.nav.push(HomePage);
    //     Splashscreen.hide();
    //   }, function (error) {
    //     //we don't have the user data so we will ask him to log in
    //     env.nav.push(LoginPage);
    //     Splashscreen.hide();
    //   });
    // });
  }

  openPage(page) {
    // Reset the content nav to have just this page
    // we wouldn't want the back button to show in this scenario
    this.nav.setRoot(page.component);
  }
}
