import {ChangeDetectionStrategy, Component, OnInit} from '@angular/core';
import {FormBuilder, FormGroup} from '@angular/forms';
import {BODIES, EYE_COLORS, FOOTS, HATS, LEGS} from '../character.model';
import {select, Store} from '@ngrx/store';
import {CharacterActions} from '../action-types';
import {CharacterState} from '../reducers';
import {selectCharacterState} from '../character.selectors';

@Component({
  selector: 'app-character-builder',
  templateUrl: './character-builder.component.html',
  styleUrls: ['./character-builder.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class CharacterBuilderComponent implements OnInit {
  readonly spritePath = '/assets/sprites/character-builder-sprite.svg#';
  readonly hats = HATS;
  readonly eyeColors = EYE_COLORS;
  readonly bodies = BODIES;
  readonly legs = LEGS;
  readonly foots = FOOTS;
  form!: FormGroup;

  constructor(private formBuilder: FormBuilder,
              public store: Store<CharacterState>) {
  }

  ngOnInit() {
    const storeSubscription = this.store.pipe(select(selectCharacterState)).subscribe((characterState) => {
      this.form = this.formBuilder.group(characterState);
    });
    storeSubscription.unsubscribe();
  }

  onSubmit() {

    this.store.dispatch(
      CharacterActions.LocalSaveCharacter(this.form.value)
    )
  }

  randomizeCharacter() {
    this.form.patchValue({
      hat: this.hats[Math.floor(Math.random() * this.hats.length)],
      eyeColor: this.eyeColors[Math.floor(Math.random() * this.eyeColors.length)],
      body: this.bodies[Math.floor(Math.random() * this.bodies.length)],
      legs: this.legs[Math.floor(Math.random() * this.legs.length)],
      foot: this.foots[Math.floor(Math.random() * this.foots.length)],
    });
  }
}
