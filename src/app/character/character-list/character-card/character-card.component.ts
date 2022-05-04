import {Component, Input, OnInit} from '@angular/core';
import {Character} from '../../character.model';
import {Router} from '@angular/router';
import {Store} from '@ngrx/store';
import {CharacterActions} from '../../action-types';

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
  constructor(private router: Router,
              private store: Store) { }

  ngOnInit(): void {
  }

  customizeCharacter() {
    this.store.dispatch(CharacterActions.updateCurrentCharacterStore({payload: this.character}))
    this.router.navigateByUrl('character/' + this.character.id);
  }
}
