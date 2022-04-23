import {ChangeDetectionStrategy, Component, OnInit} from '@angular/core';
import {FormBuilder, FormControl, FormGroup} from '@angular/forms';
import {BODIES, EYE_COLORS, FOOTS, HATS, LEGS} from '../character.model';
import {Store} from '@ngrx/store';
import {CharacterActions} from '../action-types';
import {CharacterState} from '../reducers';

@Component({
  selector: 'app-character-builder',
  templateUrl: './character-builder.component.html',
  styleUrls: ['./character-builder.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class CharacterBuilderComponent implements OnInit {
  readonly spritePath = '/assets/sprites/character-builder-sprite.svg#';
  form!: FormGroup;
  readonly hats = HATS;
  readonly eyeColors = EYE_COLORS;
  readonly bodies = BODIES;
  readonly legs = LEGS;
  readonly foots = FOOTS;


  constructor(private fb: FormBuilder,
              public store: Store<CharacterState>) {
  }

  ngOnInit() {
    this.form = this.fb.group({
      hat: new FormControl(''),
      eyeColor: new FormControl(''),
      body: new FormControl(''),
      legs: new FormControl(''),
      foot: new FormControl(''),
    });
  }

  onSubmit() {
    console.log(this.form.value);

    this.store.dispatch(
      CharacterActions.LocalSaveCharacter(this.form.value)
    )
  }

  randomizeCharacter() {

  }
}
