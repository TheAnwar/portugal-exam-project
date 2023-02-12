import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ModalityEmiComponent } from './modality-emi.component';

describe('ModalityEmiComponent', () => {
  let component: ModalityEmiComponent;
  let fixture: ComponentFixture<ModalityEmiComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ModalityEmiComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ModalityEmiComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
