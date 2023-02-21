import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ChooseExamComponent } from './choose-exam/choose-exam.component';
import { ExamComponent } from './exam.component';

const routes: Routes = [
  {
    path: 'choose',
    component: ChooseExamComponent,
  },
  {
    path: '',
    component: ExamComponent,
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ExamRoutingModule {}
