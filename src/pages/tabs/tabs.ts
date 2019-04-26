import { Component } from '@angular/core';
import { HomePage } from './../home/home';
import { NutrientesPage } from './../nutrientes/nutrientes';
import { FundadoresPage } from './../fundadores/fundadores';


@Component({
  templateUrl: 'tabs.html'
})
export class TabsPage {

  tab1Root = HomePage;
  tab2Root = NutrientesPage;
  tab3Root = FundadoresPage;

  constructor() {

  }
}
