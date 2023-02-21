import { NgModule } from '@angular/core';
import { SharedModule } from 'src/shared/shared.module';
import { ExamComponent } from './exam.component';
import { ExamRoutingModule } from './exam.routes';
import { QuestionGroupComponent } from './question-group/question-group.component';
import { RaComponent } from './modalities/ra/ra.component';
import { EmComponent } from './modalities/em/em.component';
import { Ra2Component } from './modalities/ra2/ra2.component';
import { Ra3Component } from './modalities/ra3/ra3.component';
import { ModalityEmComponent } from './modalities/modality-em/modality-em.component';
import { ModalityEmiComponent } from './modalities/modality-emi/modality-emi.component';
import { ModalityEmjComponent } from './modalities/modality-emj/modality-emj.component';
import { ModalityEmmComponent } from './modalities/modality-emm/modality-emm.component';
import { ModalityOrComponent } from './modalities/modality-or/modality-or.component';
import { ModalityVfComponent } from './modalities/modality-vf/modality-vf.component';
import { ModalityDgComponent } from './modalities/modality-dg/modality-dg.component';
import { ModalityDdComponent } from './modalities/modality-dd/modality-dd.component';
import { ModalityEqComponent } from './modalities/modality-eq/modality-eq.component';
import { DrawableModule } from 'src/app/components/drawable/drawable.component';
import { ChooseExamComponent } from './choose-exam/choose-exam.component';
import { DragDropModule } from '@angular/cdk/drag-drop';

@NgModule({
  declarations: [
    ExamComponent,
    QuestionGroupComponent,
    RaComponent,
    EmComponent,
    Ra2Component,
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
