import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { AgendaPage } from '../agenda/agenda'
import { ThejudgesPage } from '../thejudges/thejudges';
import { ScholarshipPage } from '../scholarship/scholarship';
import { AboutamysPage } from '../aboutamys/aboutamys';
import { TheredpencilPage } from '../theredpencil/theredpencil';
import { MasterofcermoniesPage } from '../masterofcermonies/masterofcermonies';
import { SocialMediaPage } from '../social-media/social-media';
import { LivevoteingPage } from '../livevoteing/livevoteing';
import { TriviaPage } from '../trivia/trivia';
import { PresidentsletterPage } from '../presidentsletter/presidentsletter';
import { AmysponsorsPage } from '../amysponsors/amysponsors';
import { AmyfinalistsPage } from '../amyfinalists/amyfinalists';
import { MarketingforgoodPage } from '../marketingforgood/marketingforgood';
import { LifetimeachievementPage } from '../lifetimeachievement/lifetimeachievement';
import { CorporatemarketeroftheyearPage } from '../corporatemarketeroftheyear/corporatemarketeroftheyear';
import { AgencymarketeroftheyearPage } from '../agencymarketeroftheyear/agencymarketeroftheyear';

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

  constructor(public navCtrl: NavController, public navParams: NavParams) {}

  ionViewDidLoad() {
    console.log('ionViewDidLoad HomePage');
  }
  
  goToAgenda(){
    console.log("Going to agenda page");
    this.navCtrl.push(AgendaPage);
  }

  goToSocial(){
    console.log("Going to soccial page")
    this.navCtrl.push(SocialMediaPage);
  }

  goToVoting(){
    console.log("Going to live voteing page");
    this.navCtrl.push(LivevoteingPage);
  }

  goToTrivia(){
    console.log("Going to the trivia page");
    this.navCtrl.push(TriviaPage);
  }

  goToPresidentsWelcome(){
    console.log("Going to pres welcome page");
    this.navCtrl.push(PresidentsletterPage);
  }

  goToAboutAma(){
    console.log("Going to about AMAs");
    this.navCtrl.push(AboutamysPage);
  }

  goToMasterOfCermonies(){
    console.log("Going to master of ceremonies page")
    this.navCtrl.push(MasterofcermoniesPage);
  }
  
  goToJudges(){
    console.log("Going to judges page");
    this.navCtrl.push(ThejudgesPage);
  }

  goToScholarships(){
    console.log("Going to scholarships page");
    this.navCtrl.push(ScholarshipPage);
  }

  goToRedPencil(){
    console.log("Going to the red pencil page");
    this.navCtrl.push(TheredpencilPage);
  }

  goToAboutAmys(){
    console.log("Going to about the AMYs");
    this.navCtrl.push(AboutamysPage);
  }

  goToAmyFinalist(){
    console.log("Going to amys finalist page");
    this.navCtrl.push(AmyfinalistsPage);
  }

  goToMarketingForGood(){
    console.log("Go to marketing for good page");
    this.navCtrl.push(MarketingforgoodPage);
  }

  goToLifeTimeAchievement(){
    console.log("Go to life time achievement awards")
    this.navCtrl.push(LifetimeachievementPage);
  }
  goToMarketerOfTheYear(){
    console.log("Going to mareketer of the year page");
    this.navCtrl.push(CorporatemarketeroftheyearPage);
  }

  goToAgencyMarketerOfTheYear(){
    console.log("Going to agency marketer of the year page");
    this.navCtrl.push(AgencymarketeroftheyearPage);
  }

  goToSponsors(){
    console.log("Going to sponsors page");
    this.navCtrl.push(AmysponsorsPage);
  }


}
