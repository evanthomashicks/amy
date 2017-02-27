import { Component } from '@angular/core';
import { NavController, NavParams, ViewController } from 'ionic-angular';

/*
  Generated class for the Judgemodal page.

  See http://ionicframework.com/docs/v2/components/#navigation for more info on
  Ionic pages and navigation.
*/
@Component({
  selector: 'page-judgemodal',
  templateUrl: 'judgemodal.html'
})
export class JudgemodalPage {

  constructor(public navCtrl: NavController,
  public navParams: NavParams,public viewCtrl: ViewController) {

  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad JudgemodalPage');
  }
  dismiss(){
    console.log("Dismissing judge modal");
    this.viewCtrl.dismiss();
  }

}
