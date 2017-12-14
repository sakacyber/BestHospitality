import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { Storage } from '@ionic/storage';

import { Survey5Page } from "../survey5/survey5";

@IonicPage()
@Component({
  selector: 'page-survey4',
  templateUrl: 'survey4.html',
})
export class Survey4Page {
  click: boolean;
  selectedLogo: string;
  selectedOrganization: string;

  question4_title: string;
  question4_kh: string[];
  answer_text: string[];
  user_ans4: any = {}
  get_answer3: any = {}
  get_answer2: any = {}
  get_answer1: any = {}

  constructor(public navCtrl: NavController, public navParams: NavParams, public storage: Storage) {

    this.question4_title = "ឃ. មន្ត្រីគយ";
    this.question4_kh = [
      "១) ការស្វាគមន៍ និងភាពរួសរាយរាក់ទាក់របស់បុគ្គលិក",
      "២) ការយកចិត្តទុកដាក់ និងភាពរហ័សរហួន",
      "៣) ការរៀបចំខ្លួនរបស់បុគ្គលិក (ឯកសណ្ឋានត្រឹមត្រូវ)",
      "៤) ភាពរហ័សក្នុងការត្រួតពិនិត្យឥវ៉ាន់/មនុស្ស",
      "៥) មន្ដ្រីមានជំនាញវិជ្ជាជីវៈច្បាស់លាស់ក្នុងពេលបំពេញការងារ",
      "៦) ភាពស្មុគស្មាញក្នុងការត្រួតពិនិត្យឥវ៉ាន់",
      "៧) ឆ្លើយតបករណីមានបញ្ហា"
    ];

    this.click = false;

    //get answer3 from navParams and set to storage
    this.get_answer3 = navParams.get('answer3');
    // this.get_answer2 = navParams.get('answer2');
    // this.get_answer1 = navParams.get('answer1')
    this.storage.set('answer3', JSON.stringify(this.get_answer3));

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
    console.log('ionViewDidLoad Survey4Page');
    for (let val in this.get_answer3) {
      console.log("key: " + val + ", value: " + this.get_answer3[val]);
    }
  }

  nextPage() {
    this.navCtrl.push(Survey5Page, {
      answer4: this.user_ans4,
      // answer3: this.get_answer3,
      // answer2: this.get_answer2,
      // answer1: this.get_answer1
    });
  }

  mcqAnswer(question, answer) {
    let qid = "g4-" + question;
    this.user_ans4[qid] = answer;
    console.log(this.user_ans4);
  }

}
