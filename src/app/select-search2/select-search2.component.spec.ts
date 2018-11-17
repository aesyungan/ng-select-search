import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SelectSearch2Component } from './select-search2.component';

describe('SelectSearch2Component', () => {
  let component: SelectSearch2Component;
  let fixture: ComponentFixture<SelectSearch2Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SelectSearch2Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SelectSearch2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
