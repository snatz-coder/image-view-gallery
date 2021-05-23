import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AppComponent } from './app.component';
import { GalleryComponent } from './gallery/gallery.component' ;
import { NgImageSliderModule } from 'ng-image-slider';


@NgModule({
  imports: [
    BrowserModule,
    CommonModule,
    RouterModule.forRoot([
      { path: '', component: GalleryComponent }
    ]),
    BrowserAnimationsModule,
    NgImageSliderModule
  ],
  declarations: [
    AppComponent,
    GalleryComponent
  ],
  bootstrap: [AppComponent],
  providers: []
})
export class AppModule { }
