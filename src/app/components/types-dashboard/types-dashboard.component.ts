import { Component, OnInit, Input } from '@angular/core';
import { TypeUrl } from 'src/app/model/type-url';
import { PokemonUrl } from 'src/app/model/pokemon-url';
import { TypeService } from 'src/app/services/type.service';

@Component({
  selector: 'app-types-dashboard',
  templateUrl: './types-dashboard.component.html',
  styleUrls: ['./types-dashboard.component.css']
})
export class TypesDashboardComponent implements OnInit {

  loading: boolean;
  typeList: TypeUrl[];
  singleType: TypeUrl;

  @Input() typeUrl: TypeUrl;

  selectedType: string;
  selectedList: PokemonUrl[];
  singlePokemon: PokemonUrl;

  constructor(private typeService: TypeService) { }

  ngOnInit(): void {
    this.getTypes();
  }

  getTypes() {
    this.typeList = [];
    this.loading = true;

    let resp = this.typeService.getTypes();
    resp.subscribe((data) => {
      for (let i of data["results"]) {
        this.singleType = new TypeUrl();

        this.singleType.url = i["url"];
        this.singleType.name = i["name"];

        if (data != undefined) {
          this.typeList.push(this.singleType);
          console.log("loaded type: " + this.singleType.name);
        }
      }
      this.loading = false;
    });
  }
  
}
