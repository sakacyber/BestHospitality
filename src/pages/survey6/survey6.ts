import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { Storage } from '@ionic/storage';

import { ThankPage } from "../thank/thank";

@IonicPage()
@Component({
  selector: 'page-survey6',
  templateUrl: 'survey6.html',
})
export class Survey6Page {
  selectedLogo: string;
  selectedOrganization: string;

  question6_title: string;
  question6: string[];
  
  option1: string[];
  option2: string[];
  option3: string[];
  option4: string[];
  option5: string[];
  option6: string[];
  option7: string;

  user_ans: any = {}
  user_ans6: any = {}

  get_answer5: any = {}
  get_answer4: any = {}
  get_answer3: any = {}
  get_answer2: any = {}
  get_answer1: any = {}

  constructor(public navCtrl: NavController, public navParams: NavParams, public storage: Storage) {

    //get answer5 from navParams and set to storage
    this.get_answer5 = navParams.get('answer5');
    this.storage.set('answer5', JSON.stringify(this.get_answer5));

    //get selected params
    storage.get('selectedLogo').then((val) => {
      this.selectedLogo = val;
    })
    storage.get('selectedOrganization').then((val) => {
      this.selectedOrganization = val;
    })

    this.question6_title = "ច. ព័ត៌មានអំពីអ្នក (ចាំបាច់បំពេញ)";
    this.question6 = [
      "១) ភេទ",
      "២) អាយុ",
      "៣) ប្រទេស",
      "៤) ខេត្ត​/ក្រុង",
      "៥) កំរិតសិក្សា",
      "៦) មុខរបរ",
      "៧) មតិរបស់អ្នក"
    ];

    this.option1 = [
      "ប្រុស",
      "ស្រី"
    ];

    this.option2 = [
      "១៨-២៥",
      "២៥-៣៥",
      "៣៦-៥០",
      "៥៩-៦៥",
      "៦៥+"
    ];

    this.option3 = [
      "កម្ពុជា",
      "វៀតណាម",
      "ថៃ",
      "ឡាវ",
      "មីយ៉ាន់ម៉ា",
      "ម៉ាឡេសុី",
      "ឥណ្ឌូនេស៊ី",
      "សឹង្ហបុរី",
      "ហ្វីលីពីន",
      "ប្រុយណេ",
      "អង់គ្លេស",
      "បារាំង",
      "ចិន",
      "ជប៉ុន",
      "កូរ៉េ",
      "ផ្សេងៗ"
    ];

    this.option4 = [
      " ភ្នំពេញ",
      " បន្ទាយមានជ័យ",
      " បាត់ដំបង",
      " កំពង់ចាម",
      " កំពង់ឆ្នាំង",
      " កំពង់ស្ពឺ",
      " កំពង់ធំ",
      " កំពត",
      " កណ្ដាល",
      " កោះកុង",
      " ក្រចេះ",
      " មណ្ឌលគិរី",
      " ព្រះវិហារ",
      " ព្រៃវែង",
      " ពោធិ៍សាត់",
      " រតនគិរី",
      " សៀមរាប",
      " ព្រះសីហនុ",
      " ស្ទឹងត្រែង",
      " ស្វាយរៀង",
      " តាកែវ",
      " ឧត្ដរមានជ័យ",
      " កែប",
      " ប៉ៃលិន",
      " ត្បួងឃ្មុំ",
      " ផ្សេងៗ"
    ];

    this.option5 = [
      "បឋមសិក្សា",
      "វិទ្យាល័យ",
      "ថ្នាក់ឧត្តមសិក្សា",
      "ថ្នាក់ក្រោយឧត្តមសិក្សា",
      "វិទ្យាស្ថាន សាលាបណ្តុះបណ្តាលវិជ្ជាជីវៈ",
      "ផ្សេងៗ"
    ];
    
    this.option6 = [
      "សិស្ស និស្សិត",
      "មន្ត្រីស្ថាប័នរដ្ឋ",
      "បុគ្គលិកឯកជន",
      "បុគ្គលិកអង្គការក្រៅរដ្ឋាភិបាល",
      "មានអាជីវកម្មផ្ទាល់ខ្លួន",
      "ផ្សេងៗ"
    ];
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad Survey6Page');
    for (let val in this.get_answer5) {
      console.log("key: " + val + ", value: " + this.get_answer5[val]);
    }
    console.log("selectedOrganization: "+this.selectedOrganization);
  }

  nextPage(answer5) {
    this.user_ans6['q6-1'] = this.user_ans.opt1
    this.user_ans6['q6-2'] = this.user_ans.opt2
    this.user_ans6['q6-3'] = this.user_ans.opt3
    this.user_ans6['q6-4'] = this.user_ans.opt4
    this.user_ans6['q6-5'] = this.user_ans.opt5
    this.user_ans6['q6-6'] = this.user_ans.opt6
    this.user_ans6['q6-7'] = this.user_ans.opt7
    this.storage.set('answer6', JSON.stringify(this.user_ans6));
    this.navCtrl.push(ThankPage);
  }

}
