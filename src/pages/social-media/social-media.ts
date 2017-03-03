import { Component } from '@angular/core';
import { NavController, AlertController,
LoadingController, Loading, ToastController } from 'ionic-angular';
import { Http } from '@angular/http';
import { InAppBrowser,TwitterConnect } from 'ionic-native';
import { TwitterService } from 'ng2-twitter';



/*
  Generated class for the SocialMedia page.

  See http://ionicframework.com/docs/v2/components/#navigation for more info on
  Ionic pages and navigation.
*/
@Component({
  selector: 'page-social-media',
  templateUrl: 'social-media.html'
})
export class SocialMediaPage {
  title = 'app works!';
  result = '';
  constructor(public navCtrl: NavController,
  private loadingCtrl: LoadingController,private toastCtrl: ToastController,
  private alertCtrl: AlertController,
  public twitter: TwitterService) {

  }

  //   getHomeTimeline(){
  //     this.twitter.get(
  //       'https://api.twitter.com/1.1/search/tweets.json?q=%23amyawards',
  //       {
  //         count: 5
  //       },
  //       {
  //         consumerKey: 'PjVsfSRwUq0k9X5bemcpMKNC5',
  //         consumerSecret: 'zN3903Az3ImT7svTTikii5XEmpB5Thns6GyIqfYftHKpRUVv0V'
  //       },
  //       {
  //         token: '40990530-j5heoBQQq0KBWQ6yt52r2teSde3PJ1sxysQwQCNFH',
  //         tokenSecret: 'V1PyWy3MsJeTKcPMEFrfaMzYEQgx0jcokbXYt2CayLjva'
  //       }
  //   ).subscribe((res)=>{
  //       this.result = res.json().map(tweet => tweet.text);
  //       console.log(this.result);
  //   });
  // }


  // public loginWithTwitter() {
  //   this.showLoading();
  //   TwitterConnect.login().then((data) => {
  //     this.onSuccess(data);
  //   }, error => {
  //     this.onError(error);
  //   });
  // }


  // public onSuccess(response) {
  //   console.log("success:", response);
  //   setTimeout(() => {
  //       this.loading.dismiss();
  //     });
  //   this.twitterUtils.configureUtils('PjVsfSRwUq0k9X5bemcpMKNC5',
  //   'zN3903Az3ImT7svTTikii5XEmpB5Thns6GyIqfYftHKpRUVv0V', response.token,
  //    response.secret);
  // }


  // public onError(response) {
  //   this.showError(response);
  // }
  // public dateForTweet(dateString) {
  //   console.log("my string: ", dateString);
  //   let d = new Date(Date.parse(dateString));
  //   // http://stackoverflow.com/questions/3552461/how-to-format-a-javascript-date
  //   var datestring = ("0" + d.getDate()).slice(-2) + "-" + ("0"+(d.getMonth()+1)).slice(-2) + "-" +
  //   d.getFullYear() + " " + ("0" + d.getHours()).slice(-2) + ":" + ("0" + d.getMinutes()).slice(-2);
  //   return datestring;
  // }




  // public openLinkUrl(url) {
  //   let browser = new InAppBrowser(url, 'blank');
  //   browser.show();
  // }

  // public loadTimeline(refresher?) {
  //   this.showLoading();
  //   let url = 'https://api.twitter.com/1.1/search/tweets.json?q=%23amyawards';
  //   let params = {count: 10};
  //   this.twitterUtils.performGetRequest(url, params).subscribe((data) => {
  //     this.tweets = data;
  //     this.loading.dismiss();
  //     refresher.complete();
  //   }, error => {
  //     refresher.complete();
  //     this.showError(error);
  //   });
  // }
  //   private showLoading() {
  //   this.loading = this.loadingCtrl.create({
  //     content: 'Please wait...'
  //   });
  //   this.loading.present();
  // }


  // private showError(text) {
  //   this.loading.dismiss();
  //   let alert = this.alertCtrl.create({
  //     title: 'Error',
  //     message: text,
  //     buttons: ['OK']
  //   });
  //   alert.present(prompt);
  // }

  ionViewDidLoad() {
    // console.log('ionViewDidLoad SocialMediaPage');
    // console.log("Getting tweets from twitter");
    // this.http.get('https://api.twitter.com/1.1/search/tweets.json?q=%23amyawards').subscribe(
    //   data => {
    //     console.log(data);
    //   }
    // );
    // https://api.twitter.com/1.1/search/tweets.json?q=%23amyawards
  }

}
