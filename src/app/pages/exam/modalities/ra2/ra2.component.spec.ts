import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Ra2Component } from './ra2.component';

describe('Ra2Component', () => {
  let component: Ra2Component;
  let fixture: ComponentFixture<Ra2Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Ra2Component ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Ra2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
