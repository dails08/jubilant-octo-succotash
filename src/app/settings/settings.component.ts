import { Component } from '@angular/core';
import { ReactiveFormsModule, FormControl, FormGroup, FormArray } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { ContentService } from '../content.service';
@Component({
  selector: 'app-settings',
  standalone: true,
  imports: [ReactiveFormsModule, CommonModule],
  templateUrl: './settings.component.html',
  styleUrl: './settings.component.scss'
})
export class SettingsComponent {

  constructor(
    cs: ContentService
  ) {

    this.chaptersForm.valueChanges.subscribe(formContent => {
        console.log("Values changed");
        console.log(this.chaptersForm.value.chapterOptions);
        const newChapters: number[] = [];
        for (const [ix, elem] of this.chaptersForm.value.chapterOptions!.entries()) {
          if (elem) {
            newChapters.push(ix + 1)
          }
        }
        cs.updateChapters(newChapters);
      })

  }
  chapters = [
    "日本の地理",
    "日本語のスピーチスタイル",
    "日本のテクノロジー",
    "日本のスポーツ",
    "日本の食べ物",
    "日本人と宗教",
    "日本のポップカルチャー",
    "日本の伝統芸能",
    "日本の教育",
    "日本の便利な店",
    "日本の歴史",
    "日本の伝統工芸",
    "日本人の自然",
    "日本の政治",
    "世界と私の国の未来"
  ];

  // chaptersForm: FormGroup;
  chaptersForm = new FormGroup({
    chapterOptions: new FormArray(this.chapters.map((val, ix, arr) => {
      return new FormControl('');
    }))
  });





  get chapterOptions() {
    return this.chaptersForm.get("chapterOptions") as FormArray;
  }
}
