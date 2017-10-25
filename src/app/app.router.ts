import { ModuleWithProviders } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AppComponent } from './app.component';
import { AboutComponent } from './about/about.component';
import { HomeComponent } from './home/home.component';
import { IssRetComponent } from './iss-ret/iss-ret.component';
import { MBooksComponent } from './m-books/m-books.component';
import { MStudsComponent } from './m-studs/m-studs.component';
import { SearchRecComponent } from './search-rec/search-rec.component';

export const router : Routes = [
    {path:'', redirectTo: 'home', pathMatch: "full"},
    {path: 'home' , component: HomeComponent},
    {path: 'm-books' , component: MBooksComponent},
    {path: 'm-studs' , component: MStudsComponent},
    {path: 'search-rec' , component: SearchRecComponent},
    {path: 'iss-ret' , component: IssRetComponent},
    {path: 'about' , component: AboutComponent},
];

export const routes : ModuleWithProviders = RouterModule.forRoot(router);