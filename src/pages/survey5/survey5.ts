import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { Storage } from '@ionic/storage';

import { Survey6Page } from "../survey6/survey6";

@IonicPage()
@Component({
  selector: 'page-survey5',
  templateUrl: 'survey5.html',
})
export class Survey5Page {
  click: boolean;
  selectedLogo: string;
  selectedOrganization: string;

  question5_title: string;
  question5: string[];
  answer_text: string[];
  user_ans5: any = {};
  get_answer4: any = {};

  constructor(public navCtrl: NavController, public navParams: NavParams, public storage: Storage) {
    this.question5_title = "ង. ចត្តាឡីសក្ដិ";
    this.question5 = [
      "១) ការស្វាគមន៍ និងភាពរួសរាយរាក់ទាក់របស់មន្ត្រី",
      "២) ការយកចិត្តទុកដាក់ និងភាពរហ័សរហួន",
      "៣) ការរៀបចំខ្លួនរបស់មន្ដ្រី (ឯកសណ្ឋានត្រឹមត្រូវ)",
      "៤) ឆ្លើយតបករណីមានបញ្ហា",
      "៥) មន្ដ្រីមានជំនាញច្បាស់លាស់"
    ];

    this.click = false;

    //get answer4 from navParams and set to storage
    this.get_answer4 = navParams.get('answer4');
    this.storage.set('answer4', JSON.stringify(this.get_answer4));

    //get selected params
    storage.get('selectedLogo').then((val) => {
      this.selectedLogo = val;
    });
    storage.get('selectedOrganization').then((val) => {
      this.selectedOrganization = val;
    });
    storage.get('answer_text').then((val) => {
      this.answer_text = JSON.parse(val);
    });
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad Survey5Page');
    for (let val in this.get_answer4) {
      console.log("key: " + val + ", value: " + this.get_answer4[val]);
    }
  }

  nextPage() {
    this.navCtrl.push(Survey6Page, {
      answer5: this.user_ans5,
    });
  }

  mcqAnswer(question, answer) {
    let qid = "g5-" + question;
    this.user_ans5[qid] = answer;
    console.log(this.user_ans5);
  }

}
