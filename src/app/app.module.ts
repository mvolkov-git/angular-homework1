import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { FirstComponent } from './components/first/first.component';
import { ResumeComponent } from './components/resume/resume.component';
import { ResumeDetailsComponent } from './components/resume-details/resume-details.component';
import { ResumeTextComponent } from './components/resume-text/resume-text.component';
import { ArrNumComponent } from './components/arr-num/arr-num.component';
import { SecondComponent } from './components/second/second.component';
import { ImagesComponent } from './components/images/images.component';


@NgModule({
  declarations: [
    AppComponent,
    FirstComponent,
    ResumeComponent,
    ResumeDetailsComponent,
    ResumeTextComponent,
    ArrNumComponent,
    SecondComponent,
    ImagesComponent,

  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
