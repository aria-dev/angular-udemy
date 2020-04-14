import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";
import { FormsModule } from "@angular/forms";
import { HttpModule } from "@angular/http";

import { AppComponent } from "./app.component";
import { ShopComponent } from "./shop/shop.component";
import { AppRoutingModule } from "./app.routing";
import { AboutComponent } from "./about/about.component";
import { ContactComponent } from "./contact/contact.component";

@NgModule({
  declarations: [AppComponent, ShopComponent, AboutComponent, ContactComponent],
  imports: [BrowserModule, FormsModule, HttpModule, AppRoutingModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
