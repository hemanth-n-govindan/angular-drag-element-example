import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";

import { DragElementModule } from "angular-drag-element";

import { AppComponent } from "./app.component";

@NgModule({
  declarations: [AppComponent],
  imports: [BrowserModule, DragElementModule],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
