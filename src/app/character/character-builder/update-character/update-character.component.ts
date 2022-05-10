import { Component } from '@angular/core';
import {CharacterBuilderComponent} from '../character-builder.component';
import {FormBuilder} from '@angular/forms';
import {Store} from '@ngrx/store';
import {CharacterState} from '../../reducers';
import {ActivatedRoute, Router} from '@angular/router';
import {CharacterListActions} from '../../character-list/action-types';

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


}
