import { Component, OnInit, Input } from '@angular/core';
import { TypeService } from 'src/app/services/type.service';
import { PokemonUrl } from 'src/app/model/pokemon-url';
import { TypeUrl } from 'src/app/model/type-url';


@Component({
  selector: 'app-type-button',
  templateUrl: './type-button.component.html',
  styleUrls: ['./type-button.component.css']
})
export class TypeButtonComponent implements OnInit {

  selectedType: string;
  loading: boolean;
  selectedList: PokemonUrl[];
  singlePokemon: PokemonUrl;

  @Input() typeUrl: TypeUrl;

  constructor(private typeService: TypeService) { }

  ngOnInit(): void { }

  getByType(typeName) {
    this.selectedList = [];
    this.loading = true;
  
    this.selectedType = typeName;
    let resp = this.typeService.getByType(this.selectedType);
    resp.subscribe((data) => {

        for (let i of data["pokemon"]) {
          this.singlePokemon = new PokemonUrl();
    
          this.singlePokemon.url = i["url"];
          this.singlePokemon.name = i["name"];
          
          if (data != undefined) {
            this.selectedList.push(this.singlePokemon);
          }
        }
        console.log("found " + this.selectedList.length + " pokemon");
      this.loading = false;
    });
  }

}
