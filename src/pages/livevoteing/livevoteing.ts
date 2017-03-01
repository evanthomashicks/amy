import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';

/*
  Generated class for the Livevoteing page.

  See http://ionicframework.com/docs/v2/components/#navigation for more info on
  Ionic pages and navigation.
*/
@Component({
  selector: 'page-livevoteing',
  templateUrl: 'livevoteing.html'
})
export class LivevoteingPage {
 
  constructor(public navCtrl: NavController, public navParams: NavParams) {
    
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad LivevoteingPage');
  }

  seeDetails(){
    console.log("Showing details for: ");
  }
  
  castVote(){
    console.log("Casting vote for: ");
  }

}
