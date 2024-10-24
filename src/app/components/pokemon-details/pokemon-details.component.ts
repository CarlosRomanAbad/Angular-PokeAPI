import { Component, OnInit } from '@angular/core';
import { PokemonServiceService } from '../../services/pokemon-service.service';
import { PokemonDetails } from '../../interfaces/ipokemon-details';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-pokemon-details',
  templateUrl: './pokemon-details.component.html',
  styleUrl: './pokemon-details.component.css'
})
export class PokemonDetailsComponent implements OnInit {

  pokemonDetails: PokemonDetails = {} as PokemonDetails;
  
  constructor(private pokemonService: PokemonServiceService , private activeRoute: ActivatedRoute , private router: Router) { }
  
  id: number = 0;

  abilities: string[] = [];

  types: string[] = [];

  ngOnInit(): void {

    this.activeRoute.paramMap.subscribe(x => {

      const idParam = x.get('id');

      if (idParam !== null && !isNaN(+idParam)) {

        this.id = +idParam;
        this.pokemonService.getPokemonDetails(this.id).subscribe((x: PokemonDetails) => {

          this.pokemonDetails = x;

          this.abilities = this.pokemonDetails.abilities.map(x => x.ability.name);

          if (this.abilities.length > 3){

            this.abilities = this.abilities.slice(0, 3);

          }

          this.types = this.pokemonDetails.types.map(x => x.type.name);

        });

      } else {

        this.router.navigate(['/notFound']);

      }
      
    });
  }

  createImgUrl() {

    return this.pokemonService.createImgUrl(this.id);

    }

}
