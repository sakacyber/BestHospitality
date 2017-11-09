import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

import { SurveyPage } from '../survey/survey'

@IonicPage()
@Component({
  selector: 'page-choose-lang',
  templateUrl: 'choose-lang.html',
})
export class ChooseLangPage {
  selectedLogo: any;
  selectedOrganization: any;
  click: boolean;
  lang_name: string[];
  lang_icon: string[];
  language: Array<{
    name: string,
    icon: string,
  }>

  constructor(public navCtrl: NavController, public navParams: NavParams) {

    this.selectedLogo = navParams.get("logo");
    this.selectedOrganization = navParams.get("organization")
    this.click = false;
    this.lang_name = ['Khmer', 'English', 'Francise', 'China', 'Japan'];
    this.lang_icon = ['../../assets/imgs/cbh/kh.png', '../../assets/imgs/cbh/en.png', '../../assets/imgs/cbh/fr.png', '../../assets/imgs/cbh/cn.png', '../../assets/imgs/cbh/ja.png',];

    this.language = [];
    for (let i = 0; i < 5; i++) {
      this.language.push({
        name: this.lang_name[i],
        icon: this.lang_icon[i]
      });
    }
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad ChooseLangPage');
    // console.log(this.selectedLogo);
    console.log(this.selectedOrganization);
  }

  itemTapped(selectedLang) {
    this.navCtrl.push(SurveyPage, {
      logo: this.selectedLogo,
      organization: this.selectedOrganization,
      lang: selectedLang
    });
  }

}
