import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AddGrupoComponent } from './components/add-grupo/add-grupo.component';
import { GrupoDetailsComponent } from './components/grupo-details/grupo-details.component';
import { GrupoListComponent } from './components/grupo-list/grupo-list.component';

@NgModule({
  declarations: [
    AppComponent,
    AddGrupoComponent,
    GrupoDetailsComponent,
    GrupoListComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
