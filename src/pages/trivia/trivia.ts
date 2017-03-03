import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';

/*
  Generated class for the Trivia page.

  See http://ionicframework.com/docs/v2/components/#navigation for more info on
  Ionic pages and navigation.
*/
@Component({
  selector: 'page-trivia',
  templateUrl: 'trivia.html'
})
export class TriviaPage {
  answer_one: number = 0;
  answer_two: number = 0;
  answer_three: number = 0;
  answer_four: number = 0;
  answer_five: number = 0;
  answer_six: number = 0;
  answer_seven: number = 0;
  answer_eight: number = 0;
  answer_nine: number = 0;
  constructor(public navCtrl: NavController, public navParams: NavParams) {}

  ionViewDidLoad() {
    console.log('ionViewDidLoad TriviaPage');
    console.log("answer one: " + this.answer_one)
  }

}
