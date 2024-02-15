import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TempdevelopingComponent } from './tempdeveloping.component';

describe('TempdevelopingComponent', () => {
  let component: TempdevelopingComponent;
  let fixture: ComponentFixture<TempdevelopingComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [TempdevelopingComponent]
    });
    fixture = TestBed.createComponent(TempdevelopingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
