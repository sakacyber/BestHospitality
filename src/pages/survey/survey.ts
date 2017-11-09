import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

@IonicPage()
@Component({
  selector: 'page-survey',
  templateUrl: 'survey.html',
})
export class SurveyPage {
  selectedLogo: any;
  selectedOrganization: any;
  selectedLang: any;
  click: boolean;
  showq1: boolean;
  showq2: boolean;
  showq3: boolean;
  showq4: boolean;
  showq5: boolean;
  showq6: boolean;
  question1_kh: string[];
  question2_kh: string[];
  question3_kh: string[];
  question4_kh: string[];
  question5_kh: string[];
  question6_kh: string[];
  answer_emoji: string[];
  answer_text: string[];
  answer_choice: Array<{
    text: string,
    emoji: string
  }>;
  info: string[];

  constructor(public navCtrl: NavController, public navParams: NavParams) {
    this.selectedLogo = navParams.get('logo');
    this.selectedOrganization = navParams.get('organization');
    this.selectedLang = navParams.get('lang');
    this.click = false;
    this.showq1 = true;
    this.showq2 = false;
    this.showq3 = false;
    this.showq4 = false;
    this.showq5 = false;
    this.showq6 = false;
    this.answer_emoji = [
      "../../assets/imgs/cbh/4.png", "../../assets/imgs/cbh/3.png",
      "../../assets/imgs/cbh/2.png", "../../assets/imgs/cbh/1.png"];
    this.answer_text = ["ល្អបំផុត"​, "ល្អ", "ធម្មតា", "អន់"];
    this.question1_kh = [
      "១) ការស្វាគមន៍ និងភាពរួសរាយរាក់ទាក់របស់បុគ្គលិក",
      "២) ការយកចិត្តទុកដាក់ និងភាពរហ័សរហួន",
      "៣) ការរៀបចំខ្លួនរបស់បុគ្គលិក (ឯកសណ្ឋានត្រឹមត្រូវ)",
      "៤) មន្ដ្រីមានជំនាញច្បាស់លាស់"
    ];
    this.question2_kh = [
      "១) ការស្វាគមន៍ និងភាពរួសរាយរាក់ទាក់របស់មន្ត្រី",
      "២) ការយកចិត្តទុកដាក់ និងភាពរហ័សរហួន",
      "៣) ការរៀបចំខ្លួនរបស់មន្ដ្រី (ឯកសណ្ឋានត្រឹមត្រូវ)",
      "៤) ឆ្លើយតបករណីមានបញ្ហា",
      "៥) សុច្ចរិតភាពរបស់មន្ដ្រី"
    ];
    this.question3_kh = [
      "១) ការស្វាគមន៍ និងភាពរួសរាយរាក់ទាក់របស់បុគ្គលិក",
      "២) ការយកចិត្តទុកដាក់ និងភាពរហ័សរហួន",
      "៣) ការរៀបចំខ្លួនរបស់បុគ្គលិក (ឯកសណ្ឋានត្រឹមត្រូវ)",
      "៤) ភាពរហ័សក្នុងការត្រួតពិនិត្យឥវ៉ាន់"
    ];
    this.question4_kh = [
      "១) ការស្វាគមន៍ និងភាពរួសរាយរាក់ទាក់របស់បុគ្គលិក",
      "២) ការយកចិត្តទុកដាក់ និងភាពរហ័សរហួន",
      "៣) ការរៀបចំខ្លួនរបស់បុគ្គលិក (ឯកសណ្ឋានត្រឹមត្រូវ)",
      "៤) ភាពរហ័សក្នុងការត្រួតពិនិត្យឥវ៉ាន់/មនុស្ស",
      "៥) មន្ដ្រីមានជំនាញវិជ្ជាជីវៈច្បាស់លាស់ក្នុងពេលបំពេញការងារ",
      "៦) ភាពស្មុគស្មាញក្នុងការត្រួតពិនិត្យឥវ៉ាន់",
      "៧) ឆ្លើយតបករណីមានបញ្ហា"
    ];
    this.question5_kh = [
      "១) ការស្វាគមន៍ និងភាពរួសរាយរាក់ទាក់របស់មន្ត្រី",
      "២) ការយកចិត្តទុកដាក់ និងភាពរហ័សរហួន",
      "៣) ការរៀបចំខ្លួនរបស់មន្ដ្រី (ឯកសណ្ឋានត្រឹមត្រូវ)",
      "៤) ឆ្លើយតបករណីមានបញ្ហា",
      "៥) មន្ដ្រីមានជំនាញច្បាស់លាស់"
    ];
    this.question6_kh = [
      "១) ភេទ",
      "២) អាយុ",
      "៣) ប្រទេស",
      "៤) ខេត្ត​/ក្រុង",
      "៥) កំរិតសិក្សា",
      "៦) មុខរបរ",
      "៧) មតិ"
    ];
    this.info = [
      "ជ្រើសរើស",
      "ប្រុស",
      "ស្រី"
    ];

    this.answer_choice = [];
    for (let i = 0; i < 4; i++) {
      this.answer_choice.push({
        text: this.answer_text[i],
        emoji: this.answer_emoji[i]
      });
    }

  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad SurveyPage');
  }

  toggle() {

  }

}
