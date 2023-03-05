import {
  Directive,
  EmbeddedViewRef,
  Input,
  TemplateRef,
  ViewContainerRef,
} from '@angular/core';
import { AuthService } from './shared/services/auth.service';

@Directive({
  selector: '[isLogged]',
})
export class IsLoggedDirective {
  el!: EmbeddedViewRef<any>;
  constructor(
    private templateRef: TemplateRef<any>,
    private auth: AuthService,
    private viewContainer: ViewContainerRef
  ) {}

  @Input() isLogged!: boolean;

  ngOnInit(): void {
    this.auth.loggedIn$.subscribe((isLoggedIn) => {
      if ((isLoggedIn && this.isLogged) || (!isLoggedIn && !this.isLogged)) {
        this.el = this.viewContainer.createEmbeddedView(this.templateRef);
      } else {
        this.viewContainer.clear();
      }
    });
  }

  ngOnDestroy(): void {
    this.viewContainer.clear();
  }
}
