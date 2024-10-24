import { Component, Input } from '@angular/core';
import { PokemonServiceService } from '../../services/pokemon-service.service';
import { Router } from '@angular/router';
import { PokemonResponse } from '../../interfaces/ipokemon';
import { PokemonDetails } from '../../interfaces/ipokemon-details';

@Component({
  selector: 'app-barra-busqueda',
  templateUrl: './barra-busqueda.component.html',
  styleUrls: ['./barra-busqueda.component.css']
})
export class BarraBusquedaComponent {

  pokeList: PokemonDetails[] = [];
  constructor(private pokemonService: PokemonServiceService, private router: Router) { }

  searchPokemonId() {
    let input = (document.getElementById('search-input') as HTMLInputElement).value.trim();

    if (input === '') {
      alert('Ingrese el ID de un Pokemon o su nombre');
      return;
    }

    if (!isNaN(+input)) {
      this.pokemonService.comprobarIdPokemon(+input).subscribe(isValid => {
        if (!isValid) {
          alert('El ID ingresado no es válido');
          return;
        }
        this.router.navigate(['/pokemon', +input]);
      });
    } else {
      this.pokemonService.comprobarNombrePokemon(input).subscribe(isValid => {
        if (!isValid) {
          alert('El nombre ingresado no es válido');
          return;
        }
        this.pokemonService.getPokemonDetailsByName(input).subscribe(
          (data) => {
            this.router.navigate(['/pokemon', data.id]);
          }
        );
      });
    }
  }
}