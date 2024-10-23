import { Component } from '@angular/core';
import { PokemonServiceService } from '../../services/pokemon-service.service';
import { PokemonDetails } from '../../interfaces/ipokemon-details';

@Component({
  selector: 'app-pokemon-details',
  templateUrl: './pokemon-details.component.html',
  styleUrl: './pokemon-details.component.css'
})
export class PokemonDetailsComponent{

  pokemonDetails: PokemonDetails = {} as PokemonDetails;
  
  constructor(private pokemonService: PokemonServiceService ) { }
  
  numeroPokemon: number = 0;

}
