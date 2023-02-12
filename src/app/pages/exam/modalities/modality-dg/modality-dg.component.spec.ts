import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ModalityDgComponent } from './modality-dg.component';

describe('ModalityDgComponent', () => {
  let component: ModalityDgComponent;
  let fixture: ComponentFixture<ModalityDgComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ModalityDgComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ModalityDgComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
