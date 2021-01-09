import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { ItemsComponent } from './items/items.component';
import { CardComponent } from './items/card/card.component';
import { BtnModule } from 'btn';

@NgModule({
  declarations: [
    AppComponent,
    ItemsComponent,
    CardComponent
  ],
  imports: [
    BrowserModule,
    BtnModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
