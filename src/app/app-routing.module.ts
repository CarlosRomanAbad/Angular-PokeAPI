import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PokemonListComponent } from './components/pokemon-list/pokemon-list.component';
import { PageNotFoundComponent } from './components/page-not-found/page-not-found.component';
import { PokemonDetailsComponent } from './components/pokemon-details/pokemon-details.component';
import { ItemListComponent } from './components/item-list/item-list.component';


const routes: Routes = [

{ path : 'pokemon' , component : PokemonListComponent },
{ path : 'pokemon/:id', component : PokemonDetailsComponent , pathMatch : 'full' },
{ path : 'pokemon/:name', component : PokemonDetailsComponent , pathMatch : 'full' },
{ path : 'items' , component : ItemListComponent},
{ path : '' , redirectTo : '/pokemon', pathMatch : 'full' },
{ path : '**', component : PageNotFoundComponent }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],  
  exports: [RouterModule]
})
export class AppRoutingModule { }
