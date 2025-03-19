import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';
import { SettingsComponent } from './settings/settings.component';
import { MaingameComponent } from './maingame/maingame.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, SettingsComponent, MaingameComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'taiko';
}
