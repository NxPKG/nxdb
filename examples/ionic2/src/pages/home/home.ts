import {Component} from "@angular/core";
import {RxDocument} from "nxdb";

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  editedHero: RxDocument;

  constructor() {
  }

  editHero(hero) {
    this.editedHero = hero;
  }
}
