import {Component, Input, OnInit} from '@angular/core';
import {Character} from '../../character.model';

@Component({
  selector: 'app-character-card[character]',
  templateUrl: './character-card.component.html',
  styleUrls: ['./character-card.component.scss']
})
export class CharacterCardComponent implements OnInit {

  @Input() character: Character = {
    id: 0,
    name: 'none',
    view: {
      hat: 'none',
      eyeColor: 'none',
      body: 'none',
      legs: 'none',
      foot: 'none',
    }
  };
  constructor() { }

  ngOnInit(): void {
    console.log(this.character)
  }

}
