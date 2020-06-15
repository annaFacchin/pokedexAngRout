import { Component, OnInit, Input } from '@angular/core';
import { Pokemon } from 'src/app/model/pokemon';
import { PokemonUrl } from 'src/app/model/pokemon-url';

import { PokemonService } from 'src/app/services/pokemon.service';

@Component({
  selector: 'app-pokemon-card',
  templateUrl: './pokemon-card.component.html',
  styleUrls: ['./pokemon-card.component.css']
})
export class PokemonCardComponent implements OnInit {

  @Input() pokedex: Pokemon[];
  @Input() pkmnUrl: PokemonUrl;
  
  loadingCard: boolean;
  singlePkmn: Pokemon;

  constructor(private pkmnService: PokemonService) { }

  ngOnInit(): void {
    this.loadingCard = true;
    this.singlePkmn = new Pokemon;

    let resp = this.pkmnService.getDetails(this.pkmnUrl.url)
    resp.subscribe((data) => {

      let strTypes = "";

      this.singlePkmn = {
        id: data["id"],
        name: data["name"],
        height: data["height"],
        weight: data["weight"],
        picFront: data["sprites"]["front_default"],
        picBack: data["sprites"]["back_default"],
        picShiny: data["sprites"]["front_shiny"],
        types: data["types"],
      }

      for (let t of this.singlePkmn.types) {
        strTypes += t["type"]["name"] + " ";
      }

      this.singlePkmn.types = strTypes;

    })
    this.loadingCard = false;
  }

  getDetails(url) {
    let resp = this.pkmnService.getDetails(url)
    resp.subscribe((data) => {

      this.singlePkmn = new Pokemon();

      let strTypes = "";

      this.singlePkmn = {
        id: data["id"],
        name: data["name"],
        height: data["height"],
        weight: data["weight"],
        picFront: data["sprites"]["front_default"],
        picBack: data["sprites"]["back_default"],
        picShiny: data["sprites"]["front_shiny"],
        types: data["types"],
      }

      for (let t of this.singlePkmn.types) {
        strTypes += t["type"]["name"] + " ";
      }

      this.singlePkmn.types = strTypes;

      console.log("click!");
      console.log("name: " + this.singlePkmn.name);

  })
  }
}
