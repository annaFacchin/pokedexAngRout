import { Component, OnInit, Input } from '@angular/core';
import { TypeUrl } from 'src/app/model/type-url';

@Component({
  selector: 'app-selected-list',
  templateUrl: './selected-list.component.html',
  styleUrls: ['./selected-list.component.css']
})
export class SelectedListComponent implements OnInit {

  @Input() typeUrl: TypeUrl;
  @Input() selectedList: TypeUrl[];

  loading: boolean;

  constructor() { }

  ngOnInit(): void {}

}
