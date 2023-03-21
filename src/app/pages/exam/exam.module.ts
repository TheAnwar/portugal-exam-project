import { DragDropModule } from '@angular/cdk/drag-drop';
import { NgModule } from '@angular/core';
import { DrawableModule } from 'src/app/components/drawable/drawable.component';
import { SharedModule } from 'src/shared/shared.module';
import { ChooseExamComponent } from './choose-exam/choose-exam.component';
import { ExamComponent } from './exam.component';
import { ExamRoutingModule } from './exam.routes';
import { ModalityDdComponent } from './modalities/modality-dd/modality-dd.component';
import { ModalityDgComponent } from './modalities/modality-dg/modality-dg.component';
import { ModalityEmComponent } from './modalities/modality-em/modality-em.component';
import { ModalityEmiComponent } from './modalities/modality-emi/modality-emi.component';
import { ModalityEmjComponent } from './modalities/modality-emj/modality-emj.component';
import { ModalityEmmComponent } from './modalities/modality-emm/modality-emm.component';
import { ModalityEqComponent } from './modalities/modality-eq/modality-eq.component';
import { ModalityOrComponent } from './modalities/modality-or/modality-or.component';
import { ModalityVfComponent } from './modalities/modality-vf/modality-vf.component';
import { RaComponent } from './modalities/ra/ra.component';
import { Ra3Component } from './modalities/ra3/ra3.component';
import { QuestionGroupComponent } from './question-group/question-group.component';

@NgModule({
  declarations: [
    ExamComponent,
    QuestionGroupComponent,
    RaComponent,

    Ra3Component,
    ModalityEmComponent,
    ModalityEmiComponent,
    ModalityEmjComponent,
    ModalityEmmComponent,
    ModalityOrComponent,
    ModalityVfComponent,
    ModalityDgComponent,
    ModalityDdComponent,
    ModalityEqComponent,
    ChooseExamComponent,
  ],
  imports: [SharedModule, DrawableModule, DragDropModule, ExamRoutingModule],
})
export class ExamModule {}
