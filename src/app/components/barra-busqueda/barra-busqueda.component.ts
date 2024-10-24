import { Component } from '@angular/core';
import { PokemonServiceService } from '../../services/pokemon-service.service';
import { Pokemon } from '../../interfaces/ipokemon';

@Component({
  selector: 'app-barra-busqueda',
  templateUrl: './barra-busqueda.component.html',
  styleUrl: './barra-busqueda.component.css'
})
export class BarraBusquedaComponent {


  pokemon : Pokemon = ''  ;

  constructor(private pokemonService: PokemonServiceService ) { }


  buscarPokemonById(id : number){
    this.pokemonService.getPokemonId(id).subscribe((x: PokemonResponse) => {
      this.pokemonList = x.results;
    }
  }
}
