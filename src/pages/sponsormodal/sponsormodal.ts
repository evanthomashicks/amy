import { Component } from '@angular/core';
import { NavController, NavParams, ViewController } from 'ionic-angular';

/*
  Generated class for the Sponsormodal page.

  See http://ionicframework.com/docs/v2/components/#navigation for more info on
  Ionic pages and navigation.
*/
@Component({
  selector: 'page-sponsormodal',
  templateUrl: 'sponsormodal.html'
})
export class SponsormodalPage {
  sponsorName: string;
  sponsorPic: string; 
  sponsorDescription: string;
  sponsorLink: string;

  constructor(public navCtrl: NavController, public navParams: NavParams,public viewCtrl: ViewController) {

  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad SponsormodalPage');
      this.sponsorName = this.navParams.get('sponsorName');
      this.sponsorPic = this.navParams.get('sponsorPic');
      this.sponsorDescription = this.navParams.get('sponsorDescription');
      this.sponsorLink = this.navParams.get('sponsorLink');
  }
    dismiss(){
    console.log("Dismissing judge modal");
    this.viewCtrl.dismiss();
  }

}
