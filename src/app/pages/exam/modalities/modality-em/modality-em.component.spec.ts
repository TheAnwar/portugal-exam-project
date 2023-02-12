import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ModalityEmComponent } from './modality-em.component';

describe('ModalityEmComponent', () => {
  let component: ModalityEmComponent;
  let fixture: ComponentFixture<ModalityEmComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ModalityEmComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ModalityEmComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
