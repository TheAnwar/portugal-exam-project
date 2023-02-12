import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ModalityEmmComponent } from './modality-emm.component';

describe('ModalityEmmComponent', () => {
  let component: ModalityEmmComponent;
  let fixture: ComponentFixture<ModalityEmmComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ModalityEmmComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ModalityEmmComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
