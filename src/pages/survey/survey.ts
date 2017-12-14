import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

import { Storage } from '@ionic/storage';
import { Survey2Page } from '../survey2/survey2'

@IonicPage()
@Component({
  selector: 'page-survey',
  templateUrl: 'survey.html',
})
export class SurveyPage {
  click: boolean
  selectedLogo: string;
  selectedLang: string;
  selectedOrganization: string;

  question1_title: string;
  question1: string[];
  answer_text: string[];
  usr_ans: any = {}

  constructor(public navCtrl: NavController, public navParams: NavParams, public storage: Storage) {
    this.click = false
    this.question1_title = "ក.កន្លែង Check-in";
    this.question1 = [
      "១) ការស្វាគមន៍ និងភាពរួសរាយរាក់ទាក់របស់បុគ្គលិក",
      "២) ការយកចិត្តទុកដាក់ និងភាពរហ័សរហួន",
      "៣) ការរៀបចំខ្លួនរបស់បុគ្គលិក (ឯកសណ្ឋានត្រឹមត្រូវ)",
      "៤) មន្ដ្រីមានជំនាញច្បាស់លាស់"
    ];

    // get selected language and set to storage
    this.selectedLang = navParams.get('selectedLang');
    this.storage.set('selectedLang', this.selectedLang);

    // get selected params
    this.storage.get("selectedLogo").then(val => {
      this.selectedLogo = val;
    })
    this.storage.get("selectedOrganization").then(val => {
      this.selectedOrganization = val;
    })
    this.storage.get('answer_text').then(data => {
      this.answer_text = JSON.parse(data);
    })
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad SurveyPage');
    console.log(this.selectedLang);
  }

  nextPage() {
    this.navCtrl.push(Survey2Page, {
      answer1: this.usr_ans
    });
  }

  mcqAnswer(question, answer) {
    var qid = "g1-" + question;
    console.log("g1-" + question + "-" + answer);
    this.usr_ans[qid] = answer;
    console.log(this.usr_ans);
  }

}
