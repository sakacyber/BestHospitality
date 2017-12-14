import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { Http } from '@angular/http';
import 'rxjs/add/operator/map';

import { SearchOrgPage } from '../search-org/search-org';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
  
export class HomePage {
  logos: string[];
  users: any;

  constructor(public navCtrl: NavController, public https: Http) {
    this.logos = ["../../assets/imgs/cbh_logo_private.png", "../../assets/imgs/cbh_logo_public_border.png", "../../assets/imgs/cbh_logo_public.png"];
  }

  secondPage(selectedLogo) {
    this.navCtrl.push(SearchOrgPage, {
      logo: selectedLogo
    });
    console.log("home page is here");
  }

}
