import { Component, OnInit, Input } from '@angular/core';
import { PokemonUrl } from 'src/app/model/pokemon-url';
import { PokemonService } from 'src/app/services/pokemon.service';

@Component({
  selector: 'app-pokemon-list',
  templateUrl: './pokemon-list.component.html',
  styleUrls: ['./pokemon-list.component.css']
})
export class PokemonListComponent implements OnInit {

  currPage: number;
  loading: boolean;
  offset: number;
  limit: number = 100;
  urlList: PokemonUrl[];
  singlePokemon: PokemonUrl;

  @Input() selectedList: PokemonUrl[]; 

  constructor(private pkmnService: PokemonService) { }
  
  ngOnInit(): void { 
    this.selectPage(1);
  }

  selectPage(page) {
  this.urlList = [];
  this.loading = true;

  this.currPage = page;
  this.offset = (this.currPage - 1) * 100;
  let resp = this.pkmnService.getPokedex(this.limit, this.offset);
  resp.subscribe((data) => {
    for (let i of data["results"]) {
      this.singlePokemon = new PokemonUrl();

      this.singlePokemon.url = i["url"];
      
      if (data != undefined) {
        this.urlList.push(this.singlePokemon);
      }
    }
    this.loading = false;
  });
}

}
