import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';

import { SearchOrgPage } from '../search-org/search-org';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
  
export class HomePage {
  logos: string[];

  constructor(public navCtrl: NavController) {
    this.logos = ["../../assets/imgs/cbh/cbh_logo_private.png", "../../assets/imgs/cbh/cbh_logo_public_border.png", "../../assets/imgs/cbh/cbh_logo_public.png"];

  }

  secondPage(selectedLogo) {
    this.navCtrl.push(SearchOrgPage, {
      logo: selectedLogo
    });
    console.log(selectedLogo + " sent");
  }

}
