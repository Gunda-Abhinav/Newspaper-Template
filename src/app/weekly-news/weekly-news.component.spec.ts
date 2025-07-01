import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WeeklyNewsComponent } from './weekly-news.component';

describe('WeeklyNewsComponent', () => {
  let component: WeeklyNewsComponent;
  let fixture: ComponentFixture<WeeklyNewsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ WeeklyNewsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(WeeklyNewsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
