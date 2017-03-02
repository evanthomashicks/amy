import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';

/*
  Generated class for the Agencymarketeroftheyear page.

  See http://ionicframework.com/docs/v2/components/#navigation for more info on
  Ionic pages and navigation.
*/
@Component({
  selector: 'page-agencymarketeroftheyear',
  templateUrl: 'agencymarketeroftheyear.html'
})
export class AgencymarketeroftheyearPage {
  persons:Array<{name:string,title:string,
  pic:string}>;
  constructor(public navCtrl: NavController, public navParams: NavParams) {
    this.persons = [
      {
        name: "Chris Arrendale",
        title: "Inbox Pros",
        pic: "assets/pictures/judges/chris.png"
      },
      {
        name: "Kimm Lincoln",
        title: "Nebo",
        pic: "assets/pictures/judges/kimm.png"
      },
      {
        name: "Mike Gustafson",
        title: "Search Discovery",
        pic: "assets/pictures/judges/mike.png"
      }
    ]
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad AgencymarketeroftheyearPage');
  }

}
