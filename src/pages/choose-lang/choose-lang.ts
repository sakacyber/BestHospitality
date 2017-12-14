import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { Storage } from '@ionic/storage';
import { Http } from '@angular/http';

import { SurveyPage } from '../survey/survey'
// import { DIRECTION_FORWARD } from 'ionic-angular/navigation/nav-util';

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
  answer_text: string[];

  constructor(public navCtrl: NavController, public navParams: NavParams, public storage: Storage, public https: Http) {
    this.language = [];
    this.click = false;
    this.lang_name = ['kh', 'en', 'fr', 'cn', 'ja'];
    this.lang_icon = [
      '../../assets/imgs/kh.png', '../../assets/imgs/en.png', '../../assets/imgs/fr.png', '../../assets/imgs/cn.png', '../../assets/imgs/ja.png',];
    this.answer_text = [
      "ល្អបំផុត",
      "ល្អ",
      "ធម្មតា",
      "អន់"
    ];

    //get selected Organization and set to storage
    this.selectedOrganization = navParams.get("organization");
    this.storage.set('selectedOrganization', this.selectedOrganization);

    this.storage.set('answer_text', JSON.stringify(this.answer_text));
    for (let i = 0; i < 5; i++) {
      this.language.push({
        name: this.lang_name[i],
        icon: this.lang_icon[i]
      });

    }
    this.storage.get("selectedLogo").then(val => {
      this.selectedLogo = val;
    })
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad ChooseLangPage');
    console.log(this.selectedOrganization);
  }

  itemTapped(selectedLang) {
    this.navCtrl.push(SurveyPage, {
      selectedLang: selectedLang
    });
  }

}
