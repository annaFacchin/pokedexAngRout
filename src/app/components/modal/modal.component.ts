import { Component, OnInit, Input } from '@angular/core';
import { Pokemon } from 'src/app/model/pokemon';

@Component({
  selector: 'app-modal',
  templateUrl: './modal.component.html',
  styleUrls: ['./modal.component.css']
})
export class ModalComponent implements OnInit {

  @Input() singlePkmn: Pokemon;

  constructor() { }

  ngOnInit(): void { }

}