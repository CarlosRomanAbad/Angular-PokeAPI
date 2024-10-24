import { Component, OnInit } from '@angular/core';
import { Pokemon, PokemonResponse } from '../../interfaces/ipokemon';
import { PokemonServiceService } from '../../services/pokemon-service.service';
import { BarraBusquedaComponent } from '../barra-busqueda/barra-busqueda.component';

@Component({
  selector: 'app-pokemon-list',
  templateUrl: './pokemon-list.component.html',
  styleUrl: './pokemon-list.component.css'
})
export class PokemonListComponent implements OnInit{

pokemonList: Pokemon[] = [];

constructor(private pokemonService: PokemonServiceService ) { }

ngOnInit(): void {

  this.pokemonService.getPokemonList(12).subscribe((x: PokemonResponse) => {

    this.pokemonList = x.results;

  });

}

getPokemonId(url: string): number{
  
  return this.pokemonService.getPokemonId(url);

  }

  createImgUrl(id: number): string{

  return this.pokemonService.createImgUrl(id);

  }


}
