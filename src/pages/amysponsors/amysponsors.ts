import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';

/*
  Generated class for the Amysponsors page.

  See http://ionicframework.com/docs/v2/components/#navigation for more info on
  Ionic pages and navigation.
*/
@Component({
  selector: 'page-amysponsors',
  templateUrl: 'amysponsors.html'
})
export class AmysponsorsPage {
  sponsors:Array<{id:number,name:string,
  pic:string,descripion:string,linkToSite:string}>;
  constructor(public navCtrl: NavController, public navParams: NavParams) {
    this.sponsors = [
      {
        id:0,
        name: "360i",
        pic: 'assets/pictures/sponsors/360i_logo.jpg',
        descripion:"360i’s vision is to move forward: our clients, the industry, and ourselves. This means making a positive impact on our clients’ business, helping them adapt to change and giving them tools to become better marketers in the digital era. We push the industry through thought leadership and creative technological innovation.",
        linkToSite: "https://360i.com/"
      },
      {
        id:1,
        name: "Angel Auctions",
        pic: 'assets/pictures/sponsors/angel_auctions.jpg',
        descripion:"Angel Auctions was founded to help; Non-Profits, Charities, Corporate Foundations, and Local Organizations, raise funds and awareness in their communities.  We started by specializing in Sports Memorabilia, but offer a wide variety of Framed Prints, Jewelry, and other hard to find items for your next auction.  We make it our goal to help your next fundraiser look bigger and better, while raising needed donations that otherwise might not occur.  And the best part, we are 100% FREE to your Organization! Angel Auctions has worked with over 300 different charities, non-profits, and organizations over the past ten years, so contact us today to see how we can help you with your next event!",
        linkToSite: "http://www.myangelauctions.com/"
      },
      {
        id:2,
        name: "Assembly",
        pic: '',
        descripion:"Assembly is a fast-growing, modern media agency that provides brands with innovative media solutions, powered by sophisticated planning and buying technologies.  We combine creative media minds and advertising technologists in a new breed model that unlocks true value for clients.",
        linkToSite: ""
      },
      {
        id:3,
        name: "The College Football Hall of Fame",
        pic: 'assets/pictures/sponsors/cfhof.png',
        descripion:"The College Football Hall of Fame and Chick-fil-A Fan Experience is much more than a museum. Immerse yourself in Atlanta’s most engaging experience from the moment you step foot into our 95,000 square feet of awesome.",
        linkToSite: "http://www.cfbhall.com/"
      },
      {
        id:4,
        name: "Clear Channel",
        pic: 'assets/pictures/sponsors/clear_channel.png',
        descripion:"",
        linkToSite: "http://clearchanneloutdoor.com/"
      },
      {
        id:5,
        name: "Friendly Human",
        pic: 'assets/pictures/sponsors/clear_channel.png',
        descripion:"Friendly Human provides persuasive storytelling for human centric brands. Leveraging the power of storytelling, we have the ability to craft narratives that move people to action. Whether working with agencies or clients, we believe remarkable people deserve to be celebrated.",
        linkToSite: ""
      },
      


    ]
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad AmysponsorsPage');
  }

}
