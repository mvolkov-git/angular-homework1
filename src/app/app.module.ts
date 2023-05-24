import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { FirstComponent } from './components/first/first.component';
import { ResumeComponent } from './components/resume/resume.component';
import { ResumeDetailsComponent } from './components/resume-details/resume-details.component';
import { ResumeTextComponent } from './components/resume-text/resume-text.component';

@NgModule({
  declarations: [
    AppComponent,
    FirstComponent,
    ResumeComponent,
    ResumeDetailsComponent,
    ResumeTextComponent

  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
