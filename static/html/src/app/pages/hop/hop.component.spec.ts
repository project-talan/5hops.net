import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { NO_ERRORS_SCHEMA } from '@angular/core';

import { HopComponent } from './hop.component';
import { Content } from './../../app.toc';

describe('HopComponent', () => {
  let component: HopComponent;
  let fixture: ComponentFixture<HopComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HopComponent ],
      schemas: [ NO_ERRORS_SCHEMA ],
      imports: [ RouterTestingModule ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HopComponent);
    component = fixture.componentInstance;
    component.section = Content.sections[0];
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
