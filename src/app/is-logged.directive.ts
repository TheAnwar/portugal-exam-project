import { Directive, Input, TemplateRef, ViewContainerRef } from '@angular/core';
import { AuthService } from './shared/services/auth.service';

@Directive({
  selector: '[isLogged]',
})
export class IsLoggedDirective {
  constructor(
    private templateRef: TemplateRef<any>,
    private auth: AuthService,
    private viewContainer: ViewContainerRef
  ) {}

  @Input() isLogged!: boolean;

  ngOnInit(): void {
    this.auth.loggedIn$.subscribe((isLoggedIn) => {
      if (isLoggedIn === this.isLogged) {
        this.viewContainer.createEmbeddedView(this.templateRef);
      } else {
        this.viewContainer.clear();
      }
    });
  }
}
