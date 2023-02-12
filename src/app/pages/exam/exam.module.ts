import { NgModule } from '@angular/core';
import { SharedModule } from 'src/shared/shared.module';
import { ExamComponent } from './exam.component';
import { ExamRoutingModule } from './exam.routes';

@NgModule({
  declarations: [ExamComponent],
  imports: [SharedModule, ExamRoutingModule],
})
export class ExamModule {}
