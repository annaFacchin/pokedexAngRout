import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';


import { NavbarComponent } from './components/navbar/navbar.component';
import { NavigatorComponent } from './components/navigator/navigator.component';
import { PokemonListComponent } from './components/pokemon-list/pokemon-list.component';
import { PokemonCardComponent } from './components/pokemon-card/pokemon-card.component';
import { ModalComponent } from './components/modal/modal.component';
import { SpinnerComponent } from './components/spinner/spinner.component';
import { TypesDashboardComponent } from './components/types-dashboard/types-dashboard.component';

import { PokemonService } from './services/pokemon.service';
import { SidebarComponent } from './components/sidebar/sidebar.component';
import { TypeButtonComponent } from './components/type-button/type-button.component';
import { SelectedListComponent } from './components/selected-list/selected-list.component';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    NavigatorComponent,
    PokemonListComponent,
    PokemonCardComponent,
    ModalComponent,
    SpinnerComponent,
    TypesDashboardComponent,
    SidebarComponent,
    TypeButtonComponent,
    SelectedListComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    AppRoutingModule
  ],
  providers: [PokemonService],
  bootstrap: [AppComponent]
})
export class AppModule { }
