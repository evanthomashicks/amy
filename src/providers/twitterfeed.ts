import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import 'rxjs/add/operator/map';

/*
  Generated class for the Twitterfeed provider.

  See https://angular.io/docs/ts/latest/guide/dependency-injection.html
  for more info on providers and Angular 2 DI.
*/
@Injectable()
export class Twitterfeed {

  constructor(public http: Http) {
    console.log('Hello Twitterfeed Provider');
  }
  
  getTweets(){
    console.log("Getting tweets from twitter");
    this.http.get('https://api.twitter.com/1.1/search/tweets.json?q=%23amyawards').subscribe(
      data => {
        console.log(data);
      }
    );
    // https://api.twitter.com/1.1/search/tweets.json?q=%23amyawards
  }

}
