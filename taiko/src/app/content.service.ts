import { Injectable } from '@angular/core';
import { GrammarPoint, VocabularyPoint } from "./interfaces";
import * as grammarData from "../assets/grammar.json";
import * as vocabData from "../assets/vocab.json";

@Injectable({
  providedIn: 'root'
})
export class ContentService {

  constructor() {

    this.vocabularyList = vocabData.map(elem => {return elem as VocabularyPoint})
    this.grammarList = grammarData.map(elem => {
      return {
        chapter: parseInt(elem.chapter) ,
        point: parseInt(elem.point),
        grammar: elem.grammar
      };
    });

    console.log(vocabData);
   }

   vocabularyList: VocabularyPoint[];
   grammarList: GrammarPoint[];

   getGrammarByChapterList(chapters: number[]): GrammarPoint[] {
    return this.grammarList.filter(elem => {return chapters.includes(elem.chapter)});
   }

   getVocabularyByChapterList(chapters: number[]): VocabularyPoint[] {
    return this.vocabularyList.filter(elem => {return chapters.includes(elem.chapter)});
   }
}
