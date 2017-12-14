import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { Storage } from '@ionic/storage';
import { Http } from '@angular/http'

import { HomePage } from '../home/home';

@IonicPage()
@Component({
  selector: 'page-thank',
  templateUrl: 'thank.html',
})
export class ThankPage {
  selectedLogo: string;
  selectedOrganization: string;

  get_answer1: any = {};
  get_answer2: any = {};
  get_answer3: any = {};
  get_answer4: any = {};
  get_answer5: any = {};
  get_answer6: any = {};

  constructor(public navCtrl: NavController, public navParams: NavParams, public storage: Storage, public https: Http) {

    storage.get('selectedLogo').then((val) => {
      this.selectedLogo = val
    })
    storage.get('selectedOrganization').then(data => {
      this.selectedOrganization = data
    })
    this.get_answer6 = navParams.get('answer6')

    this.sendDataToDb()  
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad ThankPage');
    for (let val in this.get_answer6) {
      console.log("key:" + val + ",value:" + this.get_answer6[val])
    }
  }

  homePage() {
    this.navCtrl.setRoot(HomePage);
  }

  sendDataToDb() {
    // get user answer from storage
    this.storage.get('answer1').then(data => {
      this.get_answer1 = JSON.parse(data)
      for (let key in this.get_answer1) {
        var keys = key.split('-')
        console.log("key:" + key + ",gid:" + keys[0] + ",qid:" + keys[1] + ",val:" + this.get_answer1[key]);
        this.https.post('http://localhost/ionic_api/answer', {
          group_id: keys[0],
          qid: keys[1],
          answer: this.get_answer1[key],
          organization: this.selectedOrganization
        }).subscribe(dt => {
          console.log(dt)
        })
      }
    })

    this.storage.get('answer2').then(data => {
      this.get_answer2 = JSON.parse(data)
      console.log(this.get_answer2);
      for (let key in this.get_answer2) {
        var keys = key.split('-')
        console.log("key:" + key + ",gid:" + keys[0] + ",qid:" + keys[1] + ",val:" + this.get_answer2[key]);
        this.https.post('http://localhost/ionic_api/answer', {
          group_id: keys[0],
          qid: keys[1],
          answer: this.get_answer2[key],
          organization: this.selectedOrganization
        }).subscribe(dt => {
          console.log(dt)
        })
      }
    })

    this.storage.get('answer3').then(data => {
      this.get_answer3 = JSON.parse(data)
      console.log(this.get_answer3);
      for (let key in this.get_answer3) {
        var keys = key.split('-')
        console.log("key:" + key + ",gid:" + keys[0] + ",qid:" + keys[1] + ",val:" + this.get_answer3[key]);
        this.https.post('http://localhost/ionic_api/answer', {
          group_id: keys[0],
          qid: keys[1],
          answer: this.get_answer3[key],
          organization: this.selectedOrganization
        }).subscribe(dt => {
          console.log(dt)
        })
      }
    })

    this.storage.get('answer4').then(data => {
      this.get_answer4 = JSON.parse(data)
      console.log(this.get_answer4);
      for (let key in this.get_answer4) {
        var keys = key.split('-')
        console.log("key:" + key + ",gid:" + keys[0] + ",qid:" + keys[1] + ",val:" + this.get_answer4[key]);
        this.https.post('http://localhost/ionic_api/answer', {
          group_id: keys[0],
          qid: keys[1],
          answer: this.get_answer4[key],
          organization: this.selectedOrganization
        }).subscribe(dt => {
          console.log(dt)
        })
      }
    })

    this.storage.get('answer5').then(data => {
      this.get_answer5 = JSON.parse(data)
      console.log(this.get_answer5);
      for (let key in this.get_answer5) {
        var keys = key.split('-')
        console.log("key:" + key + ",gid:" + keys[0] + ",qid:" + keys[1] + ",val:" + this.get_answer5[key]);
        this.https.post('http://localhost/ionic_api/answer', {
          group_id: keys[0],
          qid: keys[1],
          answer: this.get_answer5[key],
          organization: this.selectedOrganization
        }).subscribe(dt => {
          console.log(dt)
        })
      }
    })


    this.storage.get('answer6').then(data => {
      this.get_answer6 = JSON.parse(data)
      for (let key in this.get_answer6) {
        var keys = key.split('-')
        console.log("key:" + key + ",gid:" + keys[0] + ",qid:" + keys[1] + ",val:" + this.get_answer6[key]);
        this.https.post('http://localhost/ionic_api/answer', {
          group_id: keys[0],
          qid: keys[1],
          answer: this.get_answer6[key],
          organization: this.selectedOrganization
        }).subscribe(dt => {
          console.log(dt)
        })
      }
    })

  }


}
