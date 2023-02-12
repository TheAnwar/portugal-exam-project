import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ModalityDdComponent } from './modality-dd.component';

describe('ModalityDdComponent', () => {
  let component: ModalityDdComponent;
  let fixture: ComponentFixture<ModalityDdComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ModalityDdComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ModalityDdComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
