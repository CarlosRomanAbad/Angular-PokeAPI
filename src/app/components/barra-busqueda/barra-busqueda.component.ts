import { Component, Input } from '@angular/core';
import { PokemonServiceService } from '../../services/pokemon-service.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-barra-busqueda',
  templateUrl: './barra-busqueda.component.html',
  styleUrl: './barra-busqueda.component.css'
})
export class BarraBusquedaComponent {
  @Input() pokeId: number = 0;

  constructor(private pokemonService: PokemonServiceService, private router: Router) { }

  searchPokemonId() {
   

    let id = (document.getElementById('search-input') as HTMLInputElement).value;
    

    if (!isNaN(+id)) {
      this.router.navigate(['/pokemon', id]);
    } else {
      console.log('No es un número');
    }
  }
}