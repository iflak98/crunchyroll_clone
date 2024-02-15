import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PopularanimeComponent } from './popularanime.component';

describe('PopularanimeComponent', () => {
  let component: PopularanimeComponent;
  let fixture: ComponentFixture<PopularanimeComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [PopularanimeComponent]
    });
    fixture = TestBed.createComponent(PopularanimeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
