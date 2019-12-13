import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NameInputComponent } from './name-input/name-input.component';
import { OutputComponent } from './output/output.component';

@NgModule({
  declarations: [
    AppComponent,
    NameInputComponent,
    OutputComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
