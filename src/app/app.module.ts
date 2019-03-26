import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";

import { AppRoutingModule } from "./app-routing.module";
import { AppComponent } from "./app.component";

//Entry Point to Angular - Meeting Place for Components
//Declarations - Components
//Imports - Additional Modules
//Providers - Services
//Bootstrap - Root Component Inserted Into Index.html Page
@NgModule({
  declarations: [AppComponent],
  imports: [BrowserModule, AppRoutingModule],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
