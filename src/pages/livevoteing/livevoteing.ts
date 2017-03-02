import { Component } from '@angular/core';
import { NavController, NavParams, AlertController } from 'ionic-angular';
import {AngularFire, FirebaseListObservable, FirebaseObjectObservable } from 'angularfire2';
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
  hasVoted: boolean = false;
  voteButtonText: string = "Cast Vote";
  subFromDb: FirebaseObjectObservable<any>;
  firebaseSub: FirebaseListObservable<any>;
  submissions: FirebaseListObservable<any>;
  //create list for submissions
  constructor(public alertCtrl: AlertController,
  public navCtrl: NavController, public navParams: NavParams,
  public af: AngularFire) {
    this.submissions= this.af.database.list('/submissions');

    // this.submissions = [
    //   {
    //     id: 0,
    //     title: "EcoLink",
    //     pic:" ",
    //     descripion:" ",
    //     video:""
    //   },
    //   {
    //     id: 1,
    //     title:"Relish Marketing",
    //     pic:" ",
    //     descripion: " ",
    //     video:""
    //   },
    //   {
    //     id: 2,
    //     title:"Inbox Pros",
    //     pic:" ",
    //     descripion: " ",
    //     video:""
    //   },
    //   {
    //     id: 3,
    //     title:"Porsche Presents the Power 30 Under 30® Awards",
    //     pic:" ",
    //     descripion:" ",
    //     video:""
    //   },
    //   {
    //     id: 4,
    //     title:"22Squared",
    //     pic:" ",
    //     descripion:" ",
    //     video:""
    //   },
    //   {
    //     id: 5,
    //     title:"Terminus",
    //     pic:" ",
    //     descripion:" ",
    //     video:""
    //   },
    //   {
    //     id: 6,
    //     title:"Definition 6- El Rey: LuchaYourself",
    //     pic:" ",
    //     descripion:" ",
    //     video:""
    //   }
    // ]
    
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad LivevoteingPage');
  }

  seeDetails(){
    console.log("Showing details for: ");
  }

  castVote(admissionKey: string, votes:number){
    console.log("Submitting vote for: " + admissionKey);
    //connect to db where submisson is
    // var dbString : string = "submissions/" + submission.title;
    // var votes;
    let prompt = this.alertCtrl.create({
    title: 'Cast Vote',
    message: "Are you sure you want to cast your vote? You can only vote once",
    buttons: [
      {
        text: 'Cancel',
        handler: data => {
          console.log("cancel vote submit")
        }
      },
      {
        text: 'Submit Vote',
        handler: data => {
          this.hasVoted = true;
          this.addVotes(admissionKey,votes);
          // this.subFromDb = this.af.database.object(dbString, { preserveSnapshot: true });
          // // subscribe to db to get # of votes
          // this.subFromDb.subscribe(snapshot => {
          //   this.subVotesFromDb = snapshot.val();
          //   console.log("votes from db: " + this.subVotesFromDb.votes);
          // });
          // this.numberOfVotes = this.subVotesFromDb.votes;
          // this.addVotes(submission.title,this.numberOfVotes);
        }
      }
    ]
  });
      prompt.present();
  }

  addVotes(admissionKey: string, votes:number){
    console.log("adding vote");
    this.submissions.update(admissionKey, { votes: votes +1});
  }



}
