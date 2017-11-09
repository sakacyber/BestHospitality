import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';
import { SplashScreen } from '@ionic-native/splash-screen';
import { StatusBar } from '@ionic-native/status-bar';

import { MyApp } from './app.component';
import { HomePage } from '../pages/home/home';
import { SearchOrgPage } from '../pages/search-org/search-org';
import { ChooseLangPage } from '../pages/choose-lang/choose-lang';
import { SurveyPage } from '../pages/survey/survey';

@NgModule({
  declarations: [
    MyApp,
    HomePage,
    SearchOrgPage,
    ChooseLangPage,
    SurveyPage
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp)
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage,
    SearchOrgPage,
    ChooseLangPage,
    SurveyPage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler}
  ]
})
export class AppModule {}
