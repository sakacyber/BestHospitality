import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { Storage } from "@ionic/storage";
import { Http } from '@angular/http';

import { Survey3Page } from '../survey3/survey3';

@IonicPage()
@Component({
  selector: 'page-survey2',
  templateUrl: 'survey2.html',
})
export class Survey2Page {
  click: boolean;
  selectedLogo: string;
  selectedOrganization: string;
  selectedLang: string;

  question2_title: string;
  question2: string[];
  answer_text: string[];
  usr_ans2: any = {}
  get_answer1: any = {}

  constructor(public navCtrl: NavController, public navParams: NavParams, public storage: Storage, public https: Http) {

    this.click = false;
    this.selectedLang = navParams.get('lang');

    // title and question
    this.question2_title = "ខ. អន្ដោប្រវេសន៍";
    this.question2 = [
      "១) ការស្វាគមន៍ និងភាពរួសរាយរាក់ទាក់របស់មន្ត្រី",
      "២) ការយកចិត្តទុកដាក់ និងភាពរហ័សរហួន",
      "៣) ការរៀបចំខ្លួនរបស់មន្ដ្រី (ឯកសណ្ឋានត្រឹមត្រូវ)",
      "៤) ឆ្លើយតបករណីមានបញ្ហា",
      "៥) សុច្ចរិតភាពរបស់មន្ដ្រី",
    ];

    //get answer1 from navParams and set to storage
    this.get_answer1 = navParams.get('answer1');
    this.storage.set('answer1', JSON.stringify(this.get_answer1));

    // get answer choice from storage
    storage.get("answer_text").then((val) => {
      this.answer_text = JSON.parse(val);
    });

     // get selected params
    storage.get("selectedLogo").then((val) => {
      this.selectedLogo = val;
    });
    storage.get("selectedOrganization").then((val) => {
      this.selectedOrganization = val;
    });
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad Survey2Page');
    for (let key in this.get_answer1) {
      console.log("key:"+key+",val:"+this.get_answer1[key]);
    }
  }

  nextPage() {
    this.navCtrl.push(Survey3Page, {
      answer2: this.usr_ans2
    });
  }

  mcqAnswer(question, answer) {
    let qid = "g2-" + question;
    this.usr_ans2[qid] = answer;
    console.log(this.usr_ans2);
  }
}
