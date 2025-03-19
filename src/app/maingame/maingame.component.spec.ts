import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MaingameComponent } from './maingame.component';

describe('MaingameComponent', () => {
  let component: MaingameComponent;
  let fixture: ComponentFixture<MaingameComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [MaingameComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(MaingameComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
