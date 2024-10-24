import { Component } from '@angular/core';
import { PokemonServiceService } from '../../services/pokemon-service.service';
import { Router } from '@angular/router';
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
    let input = (document.getElementById('search-input') as HTMLInputElement).value;

    if (input === '') {
      alert('Ingrese el ID de un Pokémon o su nombre');
    } else if (!isNaN(+input)) {

      this.pokemonService.comprobarIdPokemon(+input).subscribe(isValid => {
        if (!isValid) {
          alert('El ID ingresado no es válido');
        } else {
          this.router.navigate(['/pokemon', +input]);
        }
      });
    } else {

      this.pokemonService.comprobarNombrePokemon(input).subscribe(isValid => {
        if (!isValid) {
          alert('El nombre ingresado no es válido');
        } else {
          this.pokemonService.getPokemonDetailsByName(input).subscribe(
            (data) => {
              this.router.navigate(['/pokemon', data.id]);
            }
          );
        }
      });
    }
  }
}
