import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { PokemonResponse } from '../interfaces/ipokemon';
import { PokemonDetails } from '../interfaces/ipokemon-details';
import { Router } from '@angular/router';
import { map, catchError } from 'rxjs/operators';
import { of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class PokemonServiceService {

  constructor(private http: HttpClient) { }

  getPokemonList(limit ?: number): Observable<PokemonResponse> {

    return this.http.get<PokemonResponse>(`https://pokeapi.co/api/v2/pokemon${limit ? `?limit=${limit}` : ''}`);

  }

  getPokemonId(url: string): number{

    return parseInt(url.split('/').filter(x => x).pop() || '0');

  };



  createImgUrl(id: number): string{

    return `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${id}.png`;

  }

  getPokemonDetails(id: number): Observable<PokemonDetails>{

    return this.http.get<PokemonDetails>(`https://pokeapi.co/api/v2/pokemon/${id}`);

  }

  getPokemon(id : number) : Observable<PokemonDetails>{

    
    return this.http.get<PokemonDetails>(`https://pokeapi.co/api/v2/pokemon/${id}`);
  }

  getPokemonDetailsByName(name : string): Observable<PokemonDetails>{
    
    return this.http.get<PokemonDetails>(`https://pokeapi.co/api/v2/pokemon/${name}`);

  }

  comprobarIdPokemon(id: number): Observable<boolean> {
    return this.http.get<PokemonDetails>(`https://pokeapi.co/api/v2/pokemon/${id}`).pipe(
      map(() => true),
      catchError(() => of(false))
    )
  }

  comprobarNombrePokemon(name: string): Observable<boolean> {
    return this.http.get<PokemonDetails>(`https://pokeapi.co/api/v2/pokemon/${name}`).pipe(
      map(() => true),
      catchError(() => of(false))
    )
  }


}
