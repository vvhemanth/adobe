/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { Javascript1Component } from './javascript1.component';

describe('Javascript1Component', () => {
  let component: Javascript1Component;
  let fixture: ComponentFixture<Javascript1Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Javascript1Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Javascript1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
