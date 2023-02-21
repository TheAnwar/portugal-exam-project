import {
  Component,
  ElementRef,
  ViewChild,
  AfterViewInit,
  NgModule,
} from '@angular/core';

@Component({
  selector: 'app-drawable',
  templateUrl: './drawable.component.html',
  styleUrls: ['./drawable.component.scss'],
})
export class DrawableComponent {
  @ViewChild('myCanvas') canvasRef!: ElementRef;
  private ctx!: CanvasRenderingContext2D;

  ngAfterViewInit(): void {
    const canvas = this.canvasRef.nativeElement;
    this.ctx = canvas.getContext('2d');
    this.ctx.strokeStyle = '#000000';
    this.ctx.lineWidth = 2;

    let x = 0;
    let y = 0;

    canvas.addEventListener('mousedown', (e: MouseEvent) => {
      x = e.offsetX;
      y = e.offsetY;
      this.ctx.beginPath();
      this.ctx.moveTo(x, y);
    });

    canvas.addEventListener('mousemove', (e: MouseEvent) => {
      if (e.buttons !== 1) return;
      x = e.offsetX;
      y = e.offsetY;
      this.ctx.lineTo(x, y);
      this.ctx.stroke();
    });

    canvas.addEventListener('mouseup', () => {
      x = 0;
      y = 0;
    });
  }
}

@NgModule({
  declarations: [DrawableComponent],
  exports: [DrawableComponent],
})
export class DrawableModule {}
