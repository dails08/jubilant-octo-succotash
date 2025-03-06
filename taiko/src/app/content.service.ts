import { Injectable } from '@angular/core';
import { GrammarPoint, VocabularyPoint } from "./interfaces";
import grammarData from "../assets/grammar.json";
import vocabData from "../assets/vocab.json";

@Injectable({
  providedIn: 'root'
})
export class ContentService {

  constructor() {

    this.totalVocabularyList = vocabData;
    this.totalGrammarList = grammarData;

    this.currentGrammarList = this.totalGrammarList;
    this.currentVocabList = this.totalVocabularyList;

    this.currentVocab = {
      kanji: "ようこそ",
      reading: "ようこそ",
      meaning: "Welcome!",
      chapter: 0
    };

    this.currentGrammar = {
      chapter: 0,
      point: 0,
      grammar: "masu-stem + 始める"
    }

   }

   totalVocabularyList: VocabularyPoint[];
   totalGrammarList: GrammarPoint[];

   currentVocabList: VocabularyPoint[];
   currentGrammarList: GrammarPoint[];

   currentVocab: VocabularyPoint;
   currentGrammar: GrammarPoint;


   getGrammarByChapterList(chapters: number[]): GrammarPoint[] {
    return this.totalGrammarList.filter(elem => {return chapters.includes(elem.chapter)});
   }

   getVocabularyByChapterList(chapters: number[]): VocabularyPoint[] {
    return this.totalVocabularyList.filter(elem => {return chapters.includes(elem.chapter)});
   }

   getRandomElement<T>(arr: T[]): T{
    return arr[Math.floor(Math.random() * arr.length)]
   }


   cycleGrammar(){
    this.currentGrammar = this.getRandomElement(this.currentGrammarList);
    // console.log("Not implemented: Cycle Grammar")
  }

  cycleVocab(){
    this.currentVocab = this.getRandomElement(this.currentVocabList);
    // console.log("Not implemented: Cycle Vocab")
  }



}
