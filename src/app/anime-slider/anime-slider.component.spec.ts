// @ts-nocheck
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { Pipe, PipeTransform, Injectable, CUSTOM_ELEMENTS_SCHEMA, NO_ERRORS_SCHEMA, Directive, Input, Output } from '@angular/core';
import { isPlatformBrowser } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { By } from '@angular/platform-browser';
import { Observable, of as observableOf, throwError } from 'rxjs';

import { Component } from '@angular/core';
import { AnimeSliderComponent } from './anime-slider.component';
import { AnimeService } from '../services/anime.service';
import { UserService } from '../services/user.service';

@Injectable()
class MockAnimeService {}

@Injectable()
class MockUserService {}

@Directive({ selector: '[myCustom]' })
class MyCustomDirective {
  @Input() myCustom;
}

@Pipe({name: 'translate'})
class TranslatePipe implements PipeTransform {
  transform(value) { return value; }
}

@Pipe({name: 'phoneNumber'})
class PhoneNumberPipe implements PipeTransform {
  transform(value) { return value; }
}

@Pipe({name: 'safeHtml'})
class SafeHtmlPipe implements PipeTransform {
  transform(value) { return value; }
}

fdescribe('AnimeSliderComponent', () => {
  let fixture;
  let component;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [ FormsModule, ReactiveFormsModule ],
      declarations: [
        AnimeSliderComponent,
        TranslatePipe, PhoneNumberPipe, SafeHtmlPipe,
        MyCustomDirective
      ],
      schemas: [ CUSTOM_ELEMENTS_SCHEMA, NO_ERRORS_SCHEMA ],
      providers: [
        { provide: AnimeService, useClass: MockAnimeService },
        { provide: UserService, useClass: MockUserService }
      ]
    }).overrideComponent(AnimeSliderComponent, {

    }).compileComponents();
    fixture = TestBed.createComponent(AnimeSliderComponent);
    component = fixture.debugElement.componentInstance;
  });

  afterEach(() => {
    component.ngOnDestroy = function() {};
    fixture.destroy();
  });

  it('should run #constructor()', async () => {
    expect(component).toBeTruthy();
  });

  it('should run #ngOnInit()', async () => {
    component.userservice = component.userservice || {reset(){}};
    spyOn(component.userservice, 'getloginauth').and.returnValue(observableOf({}));
    spyOn(component, 'showSlides');
    component.ngOnInit();
    // expect(component.userservice.getloginauth).toHaveBeenCalled();
    // expect(component.showSlides).toHaveBeenCalled();
  });

  it('should run #ngOnDestroy()', async () => {
    component.subscription = component.subscription || {reset(){}};
    spyOn(component.subscription, 'unsubscribe');
    component.ngOnDestroy();
    // expect(component.subscription.unsubscribe).toHaveBeenCalled();
  });

  it('should run #undefined()', async () => {
    // Error: Invalid function argument type, AssignmentExpression, "this.showSlides((this.slideIndex += n))"
    //     at C:\Users\IYOUSUFM\AppData\Roaming\npm\node_modules\ngentest\lib\util.js:258:15
    //     at Array.map (<anonymous>)
    //     at Util.getFuncArgNames (C:\Users\IYOUSUFM\AppData\Roaming\npm\node_modules\ngentest\lib\util.js:234:37)
    //     at Util.getExprMembers (C:\Users\IYOUSUFM\AppData\Roaming\npm\node_modules\ngentest\lib\util.js:205:44)
    //     at Util.getObjectFromExpression (C:\Users\IYOUSUFM\AppData\Roaming\npm\node_modules\ngentest\lib\util.js:282:30)
    //     at FuncTestGen.setPropsOrParams (C:\Users\IYOUSUFM\AppData\Roaming\npm\node_modules\ngentest\lib\func-test-gen.js:243:18)
    //     at FuncTestGen.setMockData (C:\Users\IYOUSUFM\AppData\Roaming\npm\node_modules\ngentest\lib\func-test-gen.js:161:12)
    //     at FuncTestGen.setMockData (C:\Users\IYOUSUFM\AppData\Roaming\npm\node_modules\ngentest\lib\func-test-gen.js:90:12)
    //     at C:\Users\IYOUSUFM\AppData\Roaming\npm\node_modules\ngentest\lib\index.js:189:17
    //     at Array.forEach (<anonymous>)
  });

  it('should run #undefined()', async () => {
    // Error: Invalid function argument type, AssignmentExpression, "this.showSlides((this.slideIndex = n))"
    //     at C:\Users\IYOUSUFM\AppData\Roaming\npm\node_modules\ngentest\lib\util.js:258:15
    //     at Array.map (<anonymous>)
    //     at Util.getFuncArgNames (C:\Users\IYOUSUFM\AppData\Roaming\npm\node_modules\ngentest\lib\util.js:234:37)
    //     at Util.getExprMembers (C:\Users\IYOUSUFM\AppData\Roaming\npm\node_modules\ngentest\lib\util.js:205:44)
    //     at Util.getObjectFromExpression (C:\Users\IYOUSUFM\AppData\Roaming\npm\node_modules\ngentest\lib\util.js:282:30)
    //     at FuncTestGen.setPropsOrParams (C:\Users\IYOUSUFM\AppData\Roaming\npm\node_modules\ngentest\lib\func-test-gen.js:243:18)
    //     at FuncTestGen.setMockData (C:\Users\IYOUSUFM\AppData\Roaming\npm\node_modules\ngentest\lib\func-test-gen.js:161:12)
    //     at FuncTestGen.setMockData (C:\Users\IYOUSUFM\AppData\Roaming\npm\node_modules\ngentest\lib\func-test-gen.js:90:12)
    //     at C:\Users\IYOUSUFM\AppData\Roaming\npm\node_modules\ngentest\lib\index.js:189:17
    //     at Array.forEach (<anonymous>)
  });

  it('should run #showSlides()', async () => {

    component.showSlides({});

  });

});