import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { InMemoryWebApiModule } from 'angular-in-memory-web-api';
import { MatCardModule } from "@angular/material/card";
import { MatIconModule } from "@angular/material/icon";

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ItemComponent } from './features/item/components/item/item.component';
import { ItemsListComponent } from './features/item/pages/items-list/items-list.component';
import { DataService } from './services/data/data.service';

@NgModule({
  declarations: [
    AppComponent,
    ItemComponent,
    ItemsListComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,

    HttpClientModule,

    // material
    MatCardModule,
    MatIconModule,
    InMemoryWebApiModule.forRoot(DataService),

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
