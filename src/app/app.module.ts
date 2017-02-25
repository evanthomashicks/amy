import { NgModule, ErrorHandler } from '@angular/core';
import { IonicApp, IonicModule, IonicErrorHandler } from 'ionic-angular';
import { MyApp } from './app.component';
import { LoginPage } from '../pages/login/login';
import { UserPage } from '../pages/user/user';
import { HomePage } from '../pages/home/home';
import { ThejudgesPage } from '../pages/thejudges/thejudges';
import { AngularFireModule } from 'angularfire2';
import { ScholarshipPage } from '../pages/scholarship/scholarship';
import { AboutamysPage } from '../pages/aboutamys/aboutamys';
import { TheredpencilPage } from '../pages/theredpencil/theredpencil';
import { MasterofcermoniesPage } from '../pages/masterofcermonies/masterofcermonies';
import { SocialMediaPage } from '../pages/social-media/social-media';
import { TwitterUtils } from '../providers/twitter-utils';
@NgModule({
  declarations: [
    MyApp,
    LoginPage,
    UserPage,
    HomePage,
    ThejudgesPage,
    ScholarshipPage,
    AboutamysPage,
    TheredpencilPage,
    MasterofcermoniesPage,
    SocialMediaPage,
    TwitterUtils
  
    
  ],
  imports: [
    IonicModule.forRoot(MyApp),
    AngularFireModule.initializeApp({
      apiKey: "AIzaSyD68VOPYCTpkH-lPgcKXhtg-xB2xCBQMVk",
      authDomain: "amywards-b0086.firebaseapp.com",
      databaseURL: "https://amywards-b0086.firebaseio.com",
      storageBucket: "amywards-b0086.appspot.com",
      messagingSenderId: "771414551064"
    }),
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    LoginPage,
    UserPage,
    HomePage,
    ThejudgesPage,
    ScholarshipPage,
    AboutamysPage,
    TheredpencilPage,
    MasterofcermoniesPage,
    SocialMediaPage,
    TwitterUtils
  
  ],
  providers: [{provide: ErrorHandler, useClass: IonicErrorHandler},TwitterUtils]
})
export class AppModule {}
