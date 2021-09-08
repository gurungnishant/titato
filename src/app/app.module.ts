import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SquarecellComponent } from './squarecell/squarecell.component';
import { BoardgridComponent } from './boardgrid/boardgrid.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

//modules for styling
import {MatToolbarModule} from '@angular/material/toolbar';
import { FlexLayoutModule } from '@angular/flex-layout';

import { MatGridListModule } from '@angular/material/grid-list';
import { MatCardModule } from '@angular/material/card';
import { MatButtonModule } from '@angular/material/button';
import { PlaymenuComponent } from './playmenu/playmenu.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatDialogModule } from '@angular/material/dialog';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';


@NgModule({
  declarations: [
    AppComponent,
    SquarecellComponent,
    BoardgridComponent,
    PlaymenuComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatToolbarModule,
    FlexLayoutModule,
    MatGridListModule,
    MatCardModule,
    MatButtonModule,
    FormsModule,
    MatDialogModule,
    MatFormFieldModule, 
    MatInputModule,
    ReactiveFormsModule,
  ],
  providers: [],
  entryComponents: [
    PlaymenuComponent
],
  bootstrap: [AppComponent]
})
export class AppModule { }
