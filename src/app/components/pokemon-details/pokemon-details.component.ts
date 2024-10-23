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

          console.log(this.pokemonDetails);
          this.abilities = this.pokemonDetails.abilities.map(x => x.abilityDetails.name);

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
