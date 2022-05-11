import {Component, Input} from '@angular/core';
import {Character} from '../../character.model';
import {Store} from '@ngrx/store';
import {CharacterListActions} from '../action-types';

@Component({
  selector: 'app-character-card[character]',
  templateUrl: './character-card.component.html',
  styleUrls: ['./character-card.component.scss']
})
export class CharacterCardComponent {

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
  constructor(private store: Store) { }

  deleteCharacter() {
    this.store.dispatch(CharacterListActions.deleteCharacter({id: this.character.id}))
  }
}
