import { Component } from '@angular/core';
import {CharacterBuilderComponent} from '../character-builder.component';
import {FormBuilder} from '@angular/forms';
import {select, Store} from '@ngrx/store';
import {CharacterState} from '../../reducers';
import {ActivatedRoute, Router} from '@angular/router';
import {CharacterListActions} from '../../character-list/action-types';
import {selectCharacterById} from '../../character-list/character-list.selectors';

@Component({
  selector: 'app-update-character',
  templateUrl: '../character-builder.component.html',
  styleUrls: ['../character-builder.component.scss']
})
export class UpdateCharacterComponent extends CharacterBuilderComponent {

  constructor(formBuilder: FormBuilder,
              store: Store<CharacterState>,
              router: Router,
              activatedRoute: ActivatedRoute) {
    super(formBuilder, store, router, activatedRoute);
  }

  override onSubmit() {
    this.store.dispatch(CharacterListActions.updateCharacter({payload: this.getCharacter()}));
    super.onSubmit();
  }

  override ngOnInit() {
    super.ngOnInit();

    this.characterId = +this.activatedRoute.snapshot.params['id'];
    const storeSubscription = this.store.pipe(select(selectCharacterById(this.characterId))).subscribe((character) => {
      if (character) {
        this.form.patchValue(character);
      }
    });
    storeSubscription.unsubscribe();
  }

}
