import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LayoutComponent } from './layout/layout.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
//Ajouté par nico
import { RouterModule, Routes } from '@angular/router';
@NgModule({
  imports: [
    CommonModule,
    //ajout nico
    RouterModule

  ],
  declarations: [LayoutComponent, HeaderComponent, FooterComponent],
  exports: [LayoutComponent]
})
export class UiModule { }
