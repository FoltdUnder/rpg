import { Component, OnInit } from '@angular/core';
import {select, Store} from '@ngrx/store';
import {selectCharacterList} from './character-list.selectors';
import {Observable} from 'rxjs';
import {Character} from '../character.model';
import {Router} from '@angular/router';

@Component({
  selector: 'app-character-list',
  templateUrl: './character-list.component.html',
  styleUrls: ['./character-list.component.scss']
})
export class CharacterListComponent implements OnInit {
  characterList$ = new Observable<Character[]>();
  constructor(private store: Store,
              private router: Router) { }

  ngOnInit(): void {
    this.characterList$ = this.store.pipe(select(selectCharacterList));
  }

  createCharacter() {
    this.router.navigateByUrl('create');
  }
}
