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
    content: ContentService
  ) {
    this.chaptersForm = new FormGroup({
      chapterOptions: new FormArray(this.chapters.map((val, ix, arr) => {
        return new FormControl('');
      }))
    });
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

  chaptersForm: FormGroup;




  get chapterOptions() {
    return this.chaptersForm.get("chapterOptions") as FormArray;
  }
}
