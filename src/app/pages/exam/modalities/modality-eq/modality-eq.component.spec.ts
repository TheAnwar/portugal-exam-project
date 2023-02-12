import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ModalityEqComponent } from './modality-eq.component';

describe('ModalityEqComponent', () => {
  let component: ModalityEqComponent;
  let fixture: ComponentFixture<ModalityEqComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ModalityEqComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ModalityEqComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
