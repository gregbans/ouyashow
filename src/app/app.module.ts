import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { RouterModule, Routes } from '@angular/router';

import { AppComponent } from './app.component';
import { UiModule } from './ui/ui.module';
import { FormulaireComponent } from './formulaire/formulaire.component';
import { AcceuilComponent } from './acceuil/acceuil.component';

const appRoutes: Routes =[
  { path: 'acceuil', component: AcceuilComponent },
  { path: 'formulaire',      component: FormulaireComponent },
  { path : '', component: AcceuilComponent }
]

@NgModule({
  declarations: [
    AppComponent,
    FormulaireComponent,
    AcceuilComponent
  ],
  imports: [
    BrowserModule,
    UiModule,
    RouterModule.forRoot(appRoutes,{ enableTracing: true })
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
