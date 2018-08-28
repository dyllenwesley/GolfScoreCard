import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { SelectCourseComponent } from './select-course/select-course.component';
import { SelectTeeComponent } from './select-tee/select-tee.component';

@NgModule({
  declarations: [
    AppComponent,
    SelectCourseComponent,
    SelectTeeComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
