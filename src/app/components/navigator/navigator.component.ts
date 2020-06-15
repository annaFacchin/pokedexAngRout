import { Component, OnInit, Output, EventEmitter, Input } from '@angular/core';
import { PokemonService } from 'src/app/services/pokemon.service';

@Component({
  selector: 'app-navigator',
  templateUrl: './navigator.component.html',
  styleUrls: ['./navigator.component.css']
})
export class NavigatorComponent implements OnInit {
  
  pagesToGenerate: number;
  loading: boolean;
  pages = [];

  @Input() currPage: number;
  @Output() pageEmitter = new EventEmitter<number>();

  constructor(private PkmnService: PokemonService) { }

  ngOnInit(): void {
    this.loading= true;
    let resp = this.PkmnService.getPokedex(100, 0);
    resp.subscribe((data) => this.getPokemonCountResponse(data)
    )
  }
  
  getPokemonCountResponse(data: any) {
    let numberOfPokemons = data["count"]
    this.pagesToGenerate = Math.floor(numberOfPokemons / 100 + 1)
    for (let i = 0; i < this.pagesToGenerate; i++) {
      this.pages.push(i + 1)
    }
    this.loading = false;
  }

  selectPage(page){
    this.pageEmitter.emit(page);
  }

  previous(){
    if (this.currPage!=1) {
      this.currPage--;
      this.pageEmitter.emit(this.currPage);
    }
  }

  next(){
    if (this.currPage!=10) {
      this.currPage++;
      this.pageEmitter.emit(this.currPage);
    }
  }

}
