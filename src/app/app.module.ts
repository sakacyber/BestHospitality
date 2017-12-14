import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { HttpModule } from '@angular/http';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';
import { SplashScreen } from '@ionic-native/splash-screen';
import { StatusBar } from '@ionic-native/status-bar';
import { IonicStorageModule } from "@ionic/storage";

import { MyApp } from './app.component';
import { HomePage } from '../pages/home/home';
import { SearchOrgPage } from '../pages/search-org/search-org';
import { ChooseLangPage } from '../pages/choose-lang/choose-lang';
import { SurveyPage } from '../pages/survey/survey';
import { Survey2Page } from '../pages/survey2/survey2';
import { Survey3Page } from '../pages/survey3/survey3';
import { Survey4Page } from '../pages/survey4/survey4';
import { Survey5Page } from '../pages/survey5/survey5';
import { Survey6Page } from '../pages/survey6/survey6';
import { ThankPage } from '../pages/thank/thank';

@NgModule({
  declarations: [
    MyApp,
    HomePage,
    SearchOrgPage,
    ChooseLangPage,
    SurveyPage,
    Survey2Page,
    Survey3Page,
    Survey4Page,
    Survey5Page,
    Survey6Page,
    ThankPage
  ],
  imports: [
    BrowserModule,
    HttpModule,
    IonicModule.forRoot(MyApp),
    IonicStorageModule.forRoot()
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage,
    SearchOrgPage,
    ChooseLangPage,
    SurveyPage,
    Survey2Page,
    Survey3Page,
    Survey4Page,
    Survey5Page,
    Survey6Page, 
    ThankPage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler}
  ]
})
export class AppModule {}
