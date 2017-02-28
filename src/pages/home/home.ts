import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';

/*
  Generated class for the Home page.

  See http://ionicframework.com/docs/v2/components/#navigation for more info on
  Ionic pages and navigation.
*/
@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  constructor(public navCtrl: NavController, public navParams: NavParams) {
    this.nav = navCtrl;
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad HomePage');
  }
  
  goToAgenda(){
    console.log("Going to agenda page");
  }

  goToSocial(){
    console.log("Going to soccial page")
  }

  goToVoting(){
    console.log("Going to live voteing page");
  }

  goToTrivia(){
    console.log("Going to the trivia page");
  }

  goToPresidentsWelcome(){
    console.log("Going to pres welcome page");
  }

  goToAboutAma(){
    console.log("Going to about AMAs");
  }

  goToMasterOfCermonies(){
    console.log("Going to master of ceremonies page")
  }
  
  goToJudges(){
    console.log("Going to judges page");
  }

  goToScholarships(){
    console.log("Going to scholarships page");
  }

  goToRedPencil(){
    console.log("Going to the red pencil page");
  }

  goToAboutAmys(){
    console.log("Going to about the AMYs");
  }

  goToAmyFinalist(){
    console.log("Going to amys finalist page");
  }

  goToMarketingForGood(){
    console.log("Go to marketing for good page");
  }

  goToLifeTimeAchievement(){
    console.log("Go to life time achievement awards")
  }
  goToMarketerOfTheYear(){
    console.log("Going to mareketer of the year page");
  }

  goToAgencyMarketerOfTheYear(){
    console.log("Going to agency marketer of the year page");
  }

  goToSponsors(){
    console.log("Going to sponsors page");
  }


}
