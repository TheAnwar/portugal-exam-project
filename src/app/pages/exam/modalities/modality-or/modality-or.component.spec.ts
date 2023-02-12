import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ModalityOrComponent } from './modality-or.component';

describe('ModalityOrComponent', () => {
  let component: ModalityOrComponent;
  let fixture: ComponentFixture<ModalityOrComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ModalityOrComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ModalityOrComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
