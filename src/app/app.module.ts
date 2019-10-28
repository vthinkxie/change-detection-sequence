import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { ContentCheckComponent } from './content-check/content-check.component';
import { ObserversModule } from '@angular/cdk/observers';

@NgModule({
  declarations: [
    AppComponent,
    ContentCheckComponent
  ],
  imports: [
    BrowserModule,
    ObserversModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
