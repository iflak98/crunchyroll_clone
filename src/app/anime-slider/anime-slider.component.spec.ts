import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AnimeSliderComponent } from './anime-slider.component';

describe('AnimeSliderComponent', () => {
  let component: AnimeSliderComponent;
  let fixture: ComponentFixture<AnimeSliderComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [AnimeSliderComponent]
    });
    fixture = TestBed.createComponent(AnimeSliderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
