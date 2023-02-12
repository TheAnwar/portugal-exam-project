import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Ra3Component } from './ra3.component';

describe('Ra3Component', () => {
  let component: Ra3Component;
  let fixture: ComponentFixture<Ra3Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Ra3Component ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Ra3Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
