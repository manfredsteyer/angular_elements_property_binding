import { BrowserModule } from '@angular/platform-browser';
import { NgModule, Injector } from '@angular/core';

import { AppComponent } from './app.component';
import { createCustomElement } from '@angular/elements';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: []
})
export class AppModule {

  constructor(private injector: Injector) {

    customElements.define(
      'demo-widget',
      createCustomElement(AppComponent, { injector })
    );

  }

  ngDoBootstrap() {}

}
