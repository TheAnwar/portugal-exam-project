import { Directive, Input, TemplateRef, ViewContainerRef } from '@angular/core';
import { UserService } from './user.service';

@Directive({
  selector: '[isLogged]',
})
export class IsLoggedDirective {
  constructor(
    private templateRef: TemplateRef<any>,
    private user: UserService,
    private viewContainer: ViewContainerRef
  ) {}

  @Input() isLogged!: boolean;

  ngOnInit(): void {
    this.user.isLoggedIn.subscribe((isLoggedIn) => {
      if (isLoggedIn === this.isLogged) {
        this.viewContainer.createEmbeddedView(this.templateRef);
      } else {
        this.viewContainer.clear();
      }
    });
  }
}
