import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { Storage } from '@ionic/storage';
import { Http } from '@angular/http';

import { Survey4Page } from '../survey4/survey4';
// import { ContentType } from '@angular/http/src/enums';

@IonicPage()
@Component({
  selector: 'page-survey3',
  templateUrl: 'survey3.html',
})
export class Survey3Page {
  click: boolean;
  selectedLogo: string;
  selectedOrganization: string;

  question3_title: string;
  question3_en: string[];
  question3_kh: string[];
  answer_text: string[];
  usr_ans3: any = {}
  get_answer2: any = {}
  get_answer1: any = {}

  constructor(public navCtrl: NavController, public navParams: NavParams, public storage: Storage, public https: Http) {

    this.question3_title = "គ. កន្លែងពិនិត្យឥវ៉ាន់យួរដៃ និងរាងកាយ (X-Ray)";
    this.question3_en = [
      "1) Welcoming and friendly staff",
      "2) Attention and promptness",
      "3) Staff’s Appearance (appropriate uniform)",
      "4) Swiftness of checking procedure"
    ];

    this.question3_kh = [
      "១) ការស្វាគមន៍ និងភាពរួសរាយរាក់ទាក់របស់បុគ្គលិក",
      "២) ការយកចិត្តទុកដាក់ និងភាពរហ័សរហួន",
      "៣) ការរៀបចំខ្លួនរបស់បុគ្គលិក (ឯកសណ្ឋានត្រឹមត្រូវ)",
      "៤) ភាពរហ័សក្នុងការត្រួតពិនិត្យឥវ៉ាន់"
    ];

    this.click = false;

    //get answer2 from navParams and set to storage
    // this.get_answer1 = navParams.get('answer1');
    this.get_answer2 = navParams.get('answer2');
    this.storage.set('answer2', JSON.stringify(this.get_answer2));

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


    this.storage.get('answer1').then(data => {
      this.get_answer1 = JSON.parse(data)
      // console.log(this.get_answer1);
      
    })
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad Survey3Page');
    // console.log(this.get_answer1);
    
    for (let val in this.get_answer2) {
      console.log("key: " + val + ", value: " + this.get_answer2[val]);
    }
  }

  nextPage() {
    this.navCtrl.push(Survey4Page, {
      // answer1: this.get_answer1,
      // answer2: this.get_answer2,
      answer3: this.usr_ans3
    });
  }

  mcqAnswer(question, answer) {
    let qid = "g3-" + question;
    this.usr_ans3[qid] = answer;
    console.log(this.usr_ans3);
  }

}
