import { Component } from '@angular/core';
import { NavController, NavParams,LoadingController} from 'ionic-angular';
import { TwitterConnect, NativeStorage, Facebook} from 'ionic-native';
import { UserPage } from '../user/user';

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

  FB_APP_ID: number = 374731072899296;
  public isFacebook: boolean = false;
  public isTwitter: boolean = false;
  

  constructor(public navCtrl: NavController, public navParams: NavParams
  ,public loadingCtrl: LoadingController) {
    Facebook.browserInit(this.FB_APP_ID, "v2.8");
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad LoginPage');

  }

  loginTwitter(){
    let val = true;
    let nav = this.navCtrl;
    let loading = this.loadingCtrl.create({
      content: 'Please wait...'
    });

    loading.present();

    //Request for login
    TwitterConnect.login().then(function(result) {
      //Get user data
      TwitterConnect.showUser().then(function(user){
        //Save the user data in NativeStorage
        NativeStorage.setItem('user',
        {
          name: user.name,
          userName: user.screen_name,
          followers: user.followers_count,
          picture: user.profile_image_url_https
        }).then(function() {
          nav.push(UserPage,{
            isTwitter: this.isTwitter,
            isFacebook: this.isFaceBook
          });
        })
      }, function(error){
        loading.dismiss();
      });
    });
  }

  loginFacebook(){
    this.isFacebook = true;
    console.log("loggin in useing Facebook");
     let permissions = new Array();
    let nav = this.navCtrl;
    //the permissions your facebook app needs from the user
    permissions = ["public_profile"];


    Facebook.login(permissions)
    .then(function(response){
      let userId = response.authResponse.userID;
      let params = new Array();

      //Getting name and gender properties
      Facebook.api("/me?fields=name,gender", params)
      .then(function(user) {
        user.picture = "https://graph.facebook.com/" + userId + "/picture?type=large";
        //now we have the users info, let's save it in the NativeStorage
        NativeStorage.setItem('user',
        {
          name: user.name,
          gender: user.gender,
          picture: user.picture
        })
        .then(function(){
          nav.push(UserPage,{
            isTwitter: this.isTwitter,
            isFacebook: this.isFaceBook
          });
        }, function (error) {
          console.log(error);
        })
      })
    }, function(error){
      console.log(error);
    });
  }


}
