import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { ImageComponent } from './image-component/image.component';
import { Feature } from './featured-component/feature.component';
import { FeaturedItem } from './featured-component/featured-item/item.component';
import { DatingComponent } from './dating-component/dating.component';
import { SimilarSearchesComponent } from './similar-searches-component/similarsearches.component';
import { SearchItemComponent } from './similar-searches-component/search-component/searchitem.component';
import { NameLabel } from './pipes/name-label.pipe';

@NgModule({
  declarations: [
    AppComponent,
    DatingComponent,
    SimilarSearchesComponent,
    SearchItemComponent,
    NameLabel
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
