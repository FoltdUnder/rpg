import { Component, OnInit } from '@angular/core';
import {CharacterBuilderComponent} from '../character-builder.component';
import {FormBuilder} from '@angular/forms';
import {select, Store} from '@ngrx/store';
import {CharacterState} from '../../reducers';
import {ActivatedRoute, Router} from '@angular/router';
import {CharacterActions} from '../../action-types';
import {Character} from '../../character.model';
import {Subject, takeUntil} from 'rxjs';
import {selectCharacterById, selectTotalCharacters} from '../../character-list/character-list.selectors';
import {selectCurrentCharacter} from '../../character.selectors';

@Component({
  selector: 'app-create-character',
  templateUrl: '../character-builder.component.html',
  styleUrls: ['../character-builder.component.scss']
})
export class CreateCharacterComponent extends CharacterBuilderComponent{

  constructor(formBuilder: FormBuilder,
              store: Store<CharacterState>,
              router: Router,
              activatedRoute: ActivatedRoute) {
    super(formBuilder, store, router, activatedRoute);
  }

  override ngOnInit() {
    super.ngOnInit();

    const storeSubscription = this.store.pipe(select(selectCurrentCharacter)).subscribe((character) => {
      if (character) {
        this.form.patchValue(character);
      }
    });
    storeSubscription.unsubscribe();
  }

  override onSubmit() {
    this.store.dispatch(CharacterActions.createCharacter({payload: this.getCharacter()}));
    super.onSubmit();
  }

  override getCharacter(): Character {
    const destroy$ = new Subject();
    let newCharacterId = 0;
    this.store.pipe(select(selectTotalCharacters)).pipe(
      takeUntil(destroy$)
    ).subscribe((total) => {
      newCharacterId = total;
      destroy$.next(null);
      destroy$.complete();
    })
    return {
      id: newCharacterId,
      name: this.form.controls['name'].value,
      view: this.form.get('view')?.value
    }
  }
}
