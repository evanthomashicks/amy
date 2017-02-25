import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { Http } from '@angular/http';



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

  constructor(public navCtrl: NavController,
  public navParams: NavParams,public http: Http) {

  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad SocialMediaPage');
    console.log("Getting tweets from twitter");
    this.http.get('https://api.twitter.com/1.1/search/tweets.json?q=%23amyawards').subscribe(
      data => {
        console.log(data);
      }
    );
    // https://api.twitter.com/1.1/search/tweets.json?q=%23amyawards
  }

}
