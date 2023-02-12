import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ModalityEmjComponent } from './modality-emj.component';

describe('ModalityEmjComponent', () => {
  let component: ModalityEmjComponent;
  let fixture: ComponentFixture<ModalityEmjComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ModalityEmjComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ModalityEmjComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
