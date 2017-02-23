import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';

/*
  Generated class for the Thejudges page.

  See http://ionicframework.com/docs/v2/components/#navigation for more info on
  Ionic pages and navigation.
*/
@Component({
  selector: 'page-thejudges',
  templateUrl: 'thejudges.html'
})
export class ThejudgesPage {

  judges:Array<{id:number,name:string,title:string,
  pic:string,descripion:string}>;
  constructor(public navCtrl: NavController, public navParams: NavParams) {
    this.judges = [
      {
        id: 0,
        name: "Glen Caruso",
        title:"Chief Revenue & Marketing Officer",
        pic: '../assets/pictures/judges/glencaruso.png',
        descripion: ""
      },
      {
        id:1,
        name:"Elizabeth Clubb",
        title:"Founder of Kismet Associates",
        pic:'../assets/pictures/judges/elizabethcubb.png',
        descripion:""
      },
      {
        id:2,
        name:"Rob Crews",
        title:"CMO- Rob Crew Marketing LLC",
        pic:'../assets/pictures/judges/robcrew.png',
        descripion:""
      },
      {
        id:3,
        name:"Russ Davis",
        title:"CMO- Rob Crew Marketing LLC",
        pic:'../assets/pictures/judges/robcrew.png',
        descripion:""
      },
      {
        id:4,
        name:"Daryl Evans",
        title:"Senior Vice President--Mobile, Media and Advertising Strategy MediaLink",
        pic:'../assets/pictures/judges/darylevans.png',
        descripion:""
      },
      {
        id:5,
        name:"Cindy Giller",
        title:"Managing Partner, Leader Mindshare",
        pic:'../assets/pictures/judges/giller.png',
        descripion:""
      },
      {
        id:6,
        name:"Jarod J. Greene",
        title:"Managing Partner, Leader Mindshare",
        pic:'',
        descripion:""
      },
      {
        id:7,
        name:"Jo Ann Herold",
        title:"Managing Partner, Leader Mindshare",
        pic:'../assets/pictures/judges/herold.png',
        descripion:""
      },
      {
        id:8,
        name:"Jack Jessen",
        title:"President Northeast Region Clear Channel Outdoor ",
        pic:'../assets/pictures/judges/jensen.png',
        descripion:""
      },
      {
        id:9,
        name:"Vicky Jones",
        title:"Brand Strategy & Creative Phase 3",
        pic:'../assets/pictures/judges/jones.png',
        descripion:""
      },
      {
        id:10,
        name:"Michael Kogon",
        title:"Brand Strategy & Creative Phase 3",
        pic:'../assets/pictures/judges/jones.png',
        descripion:""
      },
      {
        id:11,
        name:"Shari Neumann",
        title:"Sr. Director, Content Center Lead for Georgia-Pacific",
        pic:'../assets/pictures/judges/neumann.png',
        descripion:""
      },
      {
        id:12,
        name:"William Pate",
        title:"Sr. Director, Content Center Lead for Georgia-Pacific",
        pic:'../assets/pictures/judges/neumann.png',
        descripion:""
      },
      {
        id:13,
        name:"Brian Pruitt",
        title:"Senior Director, Brand Media for Arby’s Restaurant Group, Inc.",
        pic:'../assets/pictures/judges/pruitt.png',
        descripion:""
      },
      {
        id:14,
        name:"David Randolph",
        title:"Chief Strategy Officer for BKV",
        pic:'../assets/pictures/judges/randolph.png',
        descripion:""
      },
      {
        id:15,
        name:"Scot Safon",
        title:"Chief Marketing Officer of CNN Worldwide",
        pic:'../assets/pictures/judges/safon.png',
        descripion:""
      },
      {
        id:16,
        name:"Liz Ward",
        title:"the Chief Marketing Officer for United Way of Greater Atlanta",
        pic:'../assets/pictures/judges/ward.png',
        descripion:""
      },
      {
        id:17,
        name:"Barton Wood",
        title:"President at Frirefly Creative, Inc.",
        pic:'../assets/pictures/judges/wood.png',
        descripion:""
      }
      

    ]
  }
  // Jack Jessen 

  ionViewDidLoad() {
    console.log('ionViewDidLoad ThejudgesPage');
  }


}
