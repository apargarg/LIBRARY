import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {FormsModule} from '@angular/forms';
import { routes } from './app.router';
import { AppComponent } from './app.component';
import { MBooksComponent } from './m-books/m-books.component';
import { MStudsComponent } from './m-studs/m-studs.component';
import { IssRetComponent } from './iss-ret/iss-ret.component';
import { HomeComponent } from './home/home.component';
import { SearchRecComponent } from './search-rec/search-rec.component';
import { AboutComponent } from './about/about.component';

@NgModule({
  declarations: [
    AppComponent,
    MBooksComponent,
    MStudsComponent,
    IssRetComponent,
    HomeComponent,
    SearchRecComponent,
    AboutComponent
    
  ],
  imports: [
    BrowserModule,
    routes,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
