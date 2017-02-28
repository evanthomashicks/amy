import { Component } from '@angular/core';
import { NavController, NavParams, ViewController } from 'ionic-angular';

@Component({
  selector: 'page-judgemodal',
  templateUrl: 'judgemodal.html'
})
export class JudgemodalPage {

  judgeName: string;
  judgeTitle: string;
  judgePic: string;
  judgeDescription: string;
  constructor(public navCtrl: NavController,
  public navParams: NavParams,public viewCtrl: ViewController) {

  }

  ionViewDidLoad() {
    this.judgeName = this.navParams.get('judgeName');
    this.judgeTitle = this.navParams.get('judgeTitle');
    this.judgePic = this.navParams.get('judgePic');
    this.judgeDescription = this.navParams.get('judgeDescription');
    console.log("Judge sent to the modal: " + this.judgeName);
    console.log('ionViewDidLoad JudgemodalPage');
  }

  dismiss(){
    console.log("Dismissing judge modal");
    this.viewCtrl.dismiss();
  }

}
