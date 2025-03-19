import { Component, inject } from '@angular/core';
import { ContentService } from '../content.service';
import { GrammarPoint, VocabularyPoint } from '../interfaces';
import { MatBottomSheet, MatBottomSheetContainer, MatBottomSheetModule, MatBottomSheetRef } from "@angular/material/bottom-sheet";
import { SettingsComponent } from '../settings/settings.component';

@Component({
  selector: 'app-maingame',
  standalone: true,
  imports: [MatBottomSheetModule],
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

  private _bottomSheet = inject(MatBottomSheet);


  summonListMenu(){
    this._bottomSheet
    const bottomSheetRef = this._bottomSheet.open(SettingsComponent);
    bottomSheetRef.afterDismissed().subscribe(()=> {
      this.cs.cycleGrammar();
      this.cs.cycleVocab();
    })
    // console.log("Not implemented: summon list menu")
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
