import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { provideAnimationsAsync } from '@angular/platform-browser/animations/async';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { provideHttpClient } from '@angular/common/http';
import { PokemonListComponent } from './components/pokemon-list/pokemon-list.component';
import { HeaderComponent } from './components/header/header.component';
import { PageNotFoundComponent } from './components/page-not-found/page-not-found.component';
import { PokemonDetailsComponent } from './components/pokemon-details/pokemon-details.component';
import { ItemListComponent } from './components/item-list/item-list.component';
import { BarraBusquedaComponent } from './components/barra-busqueda/barra-busqueda.component';

@NgModule({
  declarations: [
    AppComponent,
    PokemonListComponent,
    HeaderComponent,
    PageNotFoundComponent,
    PokemonDetailsComponent,
    ItemListComponent,
    BarraBusquedaComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgbModule
  ],
  providers: [
    provideAnimationsAsync(),
    provideHttpClient()
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
