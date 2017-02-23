import { Component } from '@angular/core';
import { NavController, NavParams,LoadingController, Platform} from 'ionic-angular';
import { TwitterConnect, NativeStorage, Facebook} from 'ionic-native';
import { UserPage } from '../user/user';
import {
  AngularFire, AuthProviders,
  AuthMethods
} from 'angularfire2';

/*
  Generated class for the Login page.

  See http://ionicframework.com/docs/v2/components/#navigation for more info on
  Ionic pages and navigation.
*/
@Component({
  selector: 'page-login',
  templateUrl: 'login.html'
})

export class LoginPage {

  userProfile: any = null;

  constructor(public navCtrl: NavController, public navParams: NavParams
  ,public loadingCtrl: LoadingController,public af: AngularFire, platform: Platform) {
     platform.ready().then(() => {
      this.af = af;
    });  
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad LoginPage');

  }

  facebookLogin(){
    Facebook.login(['email']).then( (response) => {
        const facebookCredential = firebase.auth.FacebookAuthProvider
            .credential(response.authResponse.accessToken);

        firebase.auth().signInWithCredential(facebookCredential)
        .then((success) => {
            console.log("Firebase success: " + JSON.stringify(success));
            this.userProfile = success;
        })
        .catch((error) => {
            console.log("Firebase failure: " + JSON.stringify(error));
        });

    }).catch((error) => { console.log(error) });
  }



}
