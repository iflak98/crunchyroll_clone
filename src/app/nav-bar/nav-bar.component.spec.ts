// @ts-nocheck
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import {
  Pipe,
  PipeTransform,
  Injectable,
  CUSTOM_ELEMENTS_SCHEMA,
  NO_ERRORS_SCHEMA,
  Directive,
  Input,
  Output,
} from '@angular/core';
import { isPlatformBrowser } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { By } from '@angular/platform-browser';
import { Observable, of as observableOf, throwError } from 'rxjs';

import { Component } from '@angular/core';
import { NavBarComponent } from './nav-bar.component';
import { AnimeService } from '../services/anime.service';
import { Router } from '@angular/router';
import { UserService } from '../services/user.service';

@Injectable()
class MockAnimeService {}

@Injectable()
class MockRouter {
  navigate() {}
}

@Injectable()
class MockUserService {}

@Directive({ selector: '[myCustom]' })
class MyCustomDirective {
  @Input() myCustom;
}

@Pipe({ name: 'translate' })
class TranslatePipe implements PipeTransform {
  transform(value) {
    return value;
  }
}

@Pipe({ name: 'phoneNumber' })
class PhoneNumberPipe implements PipeTransform {
  transform(value) {
    return value;
  }
}

@Pipe({ name: 'safeHtml' })
class SafeHtmlPipe implements PipeTransform {
  transform(value) {
    return value;
  }
}

describe('NavBarComponent', () => {
  let fixture;
  let component;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [FormsModule, ReactiveFormsModule],
      declarations: [
        NavBarComponent,
        TranslatePipe,
        PhoneNumberPipe,
        SafeHtmlPipe,
        MyCustomDirective,
      ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA, NO_ERRORS_SCHEMA],
      providers: [
        { provide: AnimeService, useClass: MockAnimeService },
        { provide: Router, useClass: MockRouter },
        { provide: UserService, useClass: MockUserService },
      ],
    })
      .overrideComponent(NavBarComponent, {})
      .compileComponents();
    fixture = TestBed.createComponent(NavBarComponent);
    component = fixture.debugElement.componentInstance;
  });

  afterEach(() => {
    component.ngOnDestroy = function () {};
    fixture.destroy();
  });

  it('should run #constructor()', async () => {
    expect(component).toBeTruthy();
  });

  it('should run #ngOnInit()', async () => {
    spyOn(component, 'loginstatus');
    component.ngOnInit();
    // expect(component.loginstatus).toHaveBeenCalled();
  });

  it('should run #loginstatus()', async () => {
    component.userservice = component.userservice || { reset() {} };
    spyOn(component.userservice, 'getloginauth').and.returnValue(
      observableOf({})
    );
    component.loginstatus();
    // expect(component.userservice.getloginauth).toHaveBeenCalled();
  });

  it('should run #signout()', async () => {
    spyOn(window.location, 'reload');
    component.signout();
    // expect(window.location.reload).toHaveBeenCalled();
  });

  it('should run #undefined()', async () => {
    // Error: ERROR this JS code is invalid, "anime.genres.forEach((genre)"
    //     at Util.getFuncReturn (C:\Users\IYOUSUFM\AppData\Roaming\npm\node_modules\ngentest\lib\util.js:325:13)
    //     at C:\Users\IYOUSUFM\AppData\Roaming\npm\node_modules\ngentest\lib\util.js:413:30
    //     at Array.forEach (<anonymous>)
    //     at Util.getFuncParamObj (C:\Users\IYOUSUFM\AppData\Roaming\npm\node_modules\ngentest\lib\util.js:396:26)
    //     at Util.getFuncArguments (C:\Users\IYOUSUFM\AppData\Roaming\npm\node_modules\ngentest\lib\util.js:347:30)
    //     at Util.getFuncReturn (C:\Users\IYOUSUFM\AppData\Roaming\npm\node_modules\ngentest\lib\util.js:332:34)
    //     at FuncTestGen.setMockData (C:\Users\IYOUSUFM\AppData\Roaming\npm\node_modules\ngentest\lib\func-test-gen.js:159:31)
    //     at FuncTestGen.setMockData (C:\Users\IYOUSUFM\AppData\Roaming\npm\node_modules\ngentest\lib\func-test-gen.js:90:12)
    //     at C:\Users\IYOUSUFM\AppData\Roaming\npm\node_modules\ngentest\lib\func-test-gen.js:80:14
    //     at Array.forEach (<anonymous>)
  });

  it('should run #togglenews()', async () => {
    component.togglenews();
  });

  it('should run #search()', async () => {
    component.animeservice = component.animeservice || { reset() {} };
    spyOn(component.animeservice, 'setgenreSelected');
    spyOn(component.animeservice, 'setSearchBar');
    component.router = component.router || { reset() {} };
    component.router.url = 'url';
    spyOn(component, 'reloadpage');
    component.search();
    // expect(component.animeservice.setgenreSelected).toHaveBeenCalled();
    // expect(component.animeservice.setSearchBar).toHaveBeenCalled();
    // expect(component.reloadpage).toHaveBeenCalled();
  });

  it('should run #genreSelected()', async () => {
    component.animeservice = component.animeservice || { reset() {} };
    spyOn(component.animeservice, 'setgenreSelected');
    spyOn(component.animeservice, 'setSearchBar');
    spyOn(component.animeservice, 'getSearchbar');
    spyOn(component, 'reloadpage');
    component.genreSelected({}, {});
    // expect(component.animeservice.setgenreSelected).toHaveBeenCalled();
    // expect(component.animeservice.setSearchBar).toHaveBeenCalled();
    // expect(component.animeservice.getSearchbar).toHaveBeenCalled();
    // expect(component.reloadpage).toHaveBeenCalled();
  });

  it('should run #reloadpage()', async () => {
    component.router = component.router || { reset() {} };
    component.router.url = 'url';
    spyOn(component.router, 'navigateByUrl').and.returnValue({
      then: function () {},
    });
    spyOn(component.router, 'navigate');
    component.reloadpage({});
    // expect(component.router.navigateByUrl).toHaveBeenCalled();
    // expect(component.router.navigate).toHaveBeenCalled();
  });

  it('should run #change()', async () => {
    spyOn(component, 'reloadpage');
    component.change();
    // expect(component.reloadpage).toHaveBeenCalled();
  });

  it('should run #togglelogin()', async () => {
    component.togglelogin();
  });

  it('should run #closeDropdown()', async () => {
    component.closeDropdown();
  });
});
