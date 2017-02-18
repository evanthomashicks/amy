import { Component } from '@angular/core';
import { NavController, LoadingController,NavParams } from 'ionic-angular';
import { Facebook,NativeStorage, TwitterConnect } from 'ionic-native';
import { LoginPage } from '../login/login';
// import { UserModel } from './user.model';

@Component({
  selector: 'page-user',
  templateUrl: 'user.html'
})

export class UserPage {

  user:any;
  public isFacebook: boolean = false;
  public isTwitter: boolean = false;
  userReady: boolean = false;

  constructor(public navCtrl: NavController,
    public loadingCtrl: LoadingController,
    private params: NavParams) {
      this.isFacebook = params.get('isFacebook');
      this.isTwitter = params.get('isTwitter');
      if(this.isFacebook == true && this.isTwitter == false){
       this.enterFacebook();
      }
      else if(this.isTwitter == true && this.isFacebook == false){
        this.enterTwitter();
      }
      else{
        
      }
    }

  enterTwitter(){
    console.log("twitter loggin");
    let env = this;
    let loading = this.loadingCtrl.create({
      content: 'Please wait...'
    });

    loading.present();
    NativeStorage.getItem('user')
    .then(function (data){
      env.user = {
        name: data.name,
        userName: data.userName,
        picture: data.picture,
        followers: data.followers
      };
      loading.dismiss();
    }, function(error){
      console.log(error);
      loading.dismiss();
    });
  }
    
  enterFacebook(){
    console.log("Facebook loggin");
    let env = this;
    NativeStorage.getItem('user')
    .then(function (data){
      console.log("user: " + data.name + " " + 
      + " " + data.gender);
      env.user = {
        name: data.name,
        gender: data.gender,
        picture: data.picture
      };
        env.userReady = true;
    }, function(error){
      console.log(error);
    });
  }

  doFbLogout(){
    var nav = this.navCtrl;
    this.isFacebook = false;
    Facebook.logout()
    .then(function(response) {
      //user logged out so we will remove him from the NativeStorage
      console.log(response);
      NativeStorage.remove('user');
      nav.push(LoginPage);
    }, function(error){
      console.log(error);
    });
  }

  doTwLogout(){
    var nav = this.navCtrl;
    this.isTwitter = false;
    TwitterConnect.logout().then(function(response)
    {
      NativeStorage.remove('user');
      nav.push(LoginPage);
    }, function (error) {
      console.log(error);
    });
  }
}