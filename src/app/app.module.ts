import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { CopyComponent } from './copy/copy.component';
import { CopyDirective } from './copy/copy.directive';
import { TabsetComponent } from './tabset/tabset.component';
import { TabComponent } from './tab/tab.component';
import { EagerComponent } from './eager/eager.component';

@NgModule({
  declarations: [
    AppComponent,
    CopyComponent,
    CopyDirective,
    TabsetComponent,
    TabComponent,
    EagerComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
