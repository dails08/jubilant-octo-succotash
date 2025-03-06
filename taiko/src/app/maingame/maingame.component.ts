import { Component } from '@angular/core';
import { ContentService } from '../content.service';
import { GrammarPoint, VocabularyPoint } from '../interfaces';

@Component({
  selector: 'app-maingame',
  standalone: true,
  imports: [],
  templateUrl: './maingame.component.html',
  styleUrl: './maingame.component.scss'
})
export class MaingameComponent {

  constructor(
    protected cs: ContentService
  ){

    this.readingHidden = true;
    this.meaningHidden = true;
  }

  readingHidden: Boolean;
  meaningHidden: Boolean;


  summonListMenu(){
    console.log("Not implemented: summon list menu")
  }

  toggleReadingVisibility(){
    this.readingHidden = !this.readingHidden;
    // console.log("Not implemented: toggle reading visibility")
  }

  toggleMeaningVisibility(){
    this.meaningHidden = !this.meaningHidden;
    // console.log("Not implemented: toggle meaning visibility")
  }

  hideReadingAndMeaning(){
    this.readingHidden = true;
    this.meaningHidden = true;
  }


}
