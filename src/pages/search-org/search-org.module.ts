import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { SearchOrgPage } from './search-org';

@NgModule({
  declarations: [
    SearchOrgPage,
  ],
  imports: [
    IonicPageModule.forChild(SearchOrgPage),
  ],
})
  
export class SearchOrgPageModule {}
