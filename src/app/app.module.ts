import { RouterModule } from '@angular/router';
import { NgModule, Component } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { TeamviewerListComponent } from './teamviewer/teamviewer-list/teamviewer-list.component';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
    TeamviewerListComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot([
      {path: 'teamviewer', component: TeamviewerListComponent},
      {path: '', component: TeamviewerListComponent}
    ]),
    AppRoutingModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
