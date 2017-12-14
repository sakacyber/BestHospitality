import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { Storage } from '@ionic/storage';

import { ChooseLangPage } from '../choose-lang/choose-lang';

@IonicPage()
@Component({
  selector: 'page-search-org',
  templateUrl: 'search-org.html',
  })
  
export class SearchOrgPage {
  selectedLogo: any;
  orgName_kh: string[];
  orgName_en: string[];
  items: Array<{
    name: string,
    qr: string
  }>;

  constructor(public navCtrl: NavController, public navParams: NavParams, public storage: Storage) {
    this.orgName_kh = [
      "អាកាសយានដ្ឋានអន្តរជាតិភ្នំពេញ",
      "អាកាសយានដ្ឋានអន្តរជាតិសៀមរាប",
      "អាកាសយានដ្ឋានអន្តរជាតិខេត្តព្រះសីហនុ",
      "កំពង់ផែអន្តរជាតិខេត្តព្រះសីហនុ",
      "កំពង់ផែអន្តរជាតិស្ទឹងហាវ",
      "កំពង់ផែអន្តរជាតិឧកញ៉ាម៉ុង",
      "កំពង់ផែអន្តរជាតិភ្នំពេញ",
      "ព្រំដែនប្រទេសកម្ពុជា-វៀតណាម",
      "ព្រំដែនប្រទេសកម្ពុជា-ថៃ",
      "ព្រំដែនប្រទេសកម្ពុជា-ឡាវ"
    ];
    this.orgName_en = [
      "PHNOM PENH INTERNATIONAL AIRPORT",
      "SIEM REAP INTERNATIONAL AIRPORT",
      "SIHANOUK INTERNATIONAL AIRPORT",
      "SIHANOUK INTERNATIONAL PORT",
      "EXCELLENCY MONG INTERNATIONAL PORT",
      "PHNOM PENH INTERNATIONAL PORT",
      "CAMBODIA-VIETNAM BORDER",
      "CAMBODIA-THAI BORDER",
      "CAMBODIA-LAOS BORDER"
    ];

    this.items = [];
    for (let i = 0; i < 10; i++){
      this.items.push({
        name: this.orgName_kh[i],
        qr: "../../assets/imgs/qr_code.png"
      });
    }  
    
    this.selectedLogo = navParams.get('logo');
    this.storage.set("selectedLogo", this.selectedLogo);
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad SearchOrgPage');
    // console.log(this.selectedLogo);
  }

  itemTapped(selectedOrganization) {
    this.navCtrl.push(ChooseLangPage, {
      organization: selectedOrganization
    });
  }

}
