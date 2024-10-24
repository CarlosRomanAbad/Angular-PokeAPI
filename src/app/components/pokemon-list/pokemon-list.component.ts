import { Component, OnInit } from '@angular/core';
import { Pokemon, PokemonResponse } from '../../interfaces/ipokemon';
import { PokemonServiceService } from '../../services/pokemon-service.service';

@Component({
  selector: 'app-pokemon-list',
  templateUrl: './pokemon-list.component.html',
  styleUrl: './pokemon-list.component.css'
})
export class PokemonListComponent implements OnInit{

pokemonList: Pokemon[] = [];

offset: number = 12;

constructor(private pokemonService: PokemonServiceService ) { }

ngOnInit(): void {

  this.pokemonService.getPokemonList().subscribe((x: PokemonResponse) => {

    this.pokemonList = x.results;

  });

}

concatNextPage(): void{

  this.pokemonService.getPokemonList(this.offset).subscribe((x: PokemonResponse) => {

    this.pokemonList.push(...x.results);

  });

  this.offset += 12;

}

getPokemonId(url: string): number{
  
  return this.pokemonService.getPokemonId(url);

  }

  createImgUrl(id: number): string{

  return this.pokemonService.createImgUrl(id);

  }


}
