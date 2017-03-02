import { Component } from '@angular/core';
import { SponsormodalPage } from '../sponsormodal/sponsormodal';
import { NavController, NavParams,ModalController  } from 'ionic-angular';

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
  constructor(public navCtrl: NavController, public navParams: NavParams,
  public modalCtrl: ModalController) {
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
        pic: 'assets/pictures/sponsors/friendly.png',
        descripion:"Friendly Human provides persuasive storytelling for human centric brands. Leveraging the power of storytelling, we have the ability to craft narratives that move people to action. Whether working with agencies or clients, we believe remarkable people deserve to be celebrated.",
        linkToSite: ""
      },
      {
        id:6,
        name: "FSI",
        pic: 'assets/pictures/sponsors/fsi.jpg',
        descripion:"FSI makes shipping merchandise orders to a variety of sales channels Simple and Worry Free! Orders for E-Commerce, to small stores or major retailers, sales support or corporate material all flow to FSI via seamless integration. Here, they are picked, packed and shipped to anywhere in the world on time to meet the most rigid delivery schedules. Powerful technology, order fulfillment, returns, inventory management and kit assembly combine at FSI to make your supply chain flow smoothly…isn’t that the way it should be?",
        linkToSite: ""
      },
      {
        id:7,
        name: "Headshot Ventures",
        pic: 'assets/pictures/sponsors/headshot.png',
        descripion:"In today’s digital age, everyone deserves a professional headshot that captures their personality and does not cost a fortune. Whether for LinkedIn, social media, professional bios, a company website, or even dating apps, your headshot should be your best first impression. Unlike a traditional studio, each shoot takes less than 5 minutes and you only pay for the pictures if you like them. We offer monthly open photo shoots throughout Atlanta and can set up at events, offices, and college campuses.",
        linkToSite: "https://www.headshotventures.com/"
      },
      {
        id:8,
        name: "McCullouch + Company",
        pic: 'assets/pictures/sponsors/mccullouch.png',
        descripion:"McCulloch+Company is an advertising media services company that integrates the innovation of digital media with the strengths of traditional paths. Founded in 1994, McCulloch+Company is regarded as one of the Southeast's preeminent media agencies, providing our client partners with inspired ideas, peerless campaign implementation and unexpected client service.",
        linkToSite: ""
      },
      {
        id:9,
        name: "Nebo",
        pic: 'assets/pictures/sponsors/nebo.png',
        descripion:"Nebo is a human-centered digital agency. We believe that great work comes from understanding the needs, wants and perceptions of your audience. This human-centered approach informs everything we do. With expertise in digital marketing strategy, web design, user experience, SEO, paid media, digital public relations, social media marketing and analytics, Nebo has helped its clients achieve their digital goals.",
        linkToSite: ""
      },
      {
        id:10,
        name: "Periscope",
        pic: 'assets/pictures/sponsors/persicope.png',
        descripion:"At Periscope, our mission is simple: Do Things People Love. We are design thinkers and problem solvers who develop brand strategies and go-to-market plans that push the limits of creativity and innovation. We are business-minded and results-driven, and our independent ownership allows for strategic investment that drives performance and efficiency.",
        linkToSite: ""
      },
      {
        id:11,
        name: "Pivot",
        pic: 'assets/pictures/sponsors/pivot.png',
        descripion:"Pivot is a consulting and digital strategy firm that fills the gaps within brand and agency relationships. The results are more rewarding engagements that create practical and measurable success.",
        linkToSite: "www.wearepivot.com"
      },
      {
        id:12,
        name: "Uber",
        pic: 'assets/pictures/sponsors/uber.png',
        descripion:"Ready anywhere, anytime, Uber moves Atlanta, and the Uber Atlanta team is proud to support the 2017 AMY Awards and the Atlanta Marketing Association.",
        linkToSite: "https://www.uber.com/"
      },
      {
        id:13,
        name: "Zambezi",
        pic: 'assets/pictures/sponsors/zambezi.png',
        descripion:"Zambezi, LLC is an independent creative agency working with clients to put extraordinary into culture. Founded in 2006, Zambezi is headquartered in Los Angeles, CA. It’s been named to Inc. Magazine's list of 500/500 Fastest Growing Private Companies, LA Business Journal's list of 100 Largest Women-Owned Businesses, and named Ad Age’s 2016 Small Agency of the Year",
        linkToSite: "http://zambezi-la.com/"
      },
      {
        id:14,
        name: "Mobile App Hero",
        pic: 'assets/pictures/sponsors/mobileapphero.png',
        descripion:"DISCOVERY. DESIGN. BUILD. In three phases, we removed the barriers that stand between you and launching your idea. We’ll focus on the details so you can guide the big picture.",
        linkToSite: "http://www.mobileapphero.com/"
      }
    ]
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad AmysponsorsPage');
  }

  presentJudgeModal(sponsor){
    console.log("Opening judge modal");
    console.log("Sending this judge to modal: " + sponsor.name);
    let modal = this.modalCtrl.create( SponsormodalPage, {
      sponsorName: sponsor.name,
      sponsorPic: sponsor.pic,
      sponsorDescription: sponsor.descripion,
      sponsorLink: sponsor.linkToSite
    });

    modal.present();
  }


}
