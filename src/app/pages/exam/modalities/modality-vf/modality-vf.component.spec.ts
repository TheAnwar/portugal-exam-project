import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ModalityVfComponent } from './modality-vf.component';

describe('ModalityVfComponent', () => {
  let component: ModalityVfComponent;
  let fixture: ComponentFixture<ModalityVfComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ModalityVfComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ModalityVfComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
