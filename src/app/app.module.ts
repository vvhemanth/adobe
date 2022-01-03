import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { JavascriptComponent } from './javascript/javascript.component';
import { Javascript1Component1 } from './javascript1/javascript1.component';
import { SampleComponent } from './sample/sample.component';
@NgModule({
  declarations: [
    AppComponent,
    JavascriptComponent,
    SampleComponent,
    Javascript1Component1
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
