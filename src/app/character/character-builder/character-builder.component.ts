import {ChangeDetectionStrategy, Component, OnInit} from '@angular/core';
import {FormBuilder, FormGroup} from '@angular/forms';
import {BODIES, CharacterView, EYE_COLORS, FOOTS, HATS, LEGS} from '../character.model';
import {select, Store} from '@ngrx/store';
import {CharacterActions} from '../action-types';
import {CharacterState} from '../reducers';
import {selectCharacterState, selectCharacterView} from '../character.selectors';

@Component({
  selector: 'app-character-builder',
  templateUrl: './character-builder.component.html',
  styleUrls: ['./character-builder.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class CharacterBuilderComponent implements OnInit {
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
    this.form = this.formBuilder.group({
      name: '',
      view: this.formBuilder.group({
        hat: '',
        eyeColor: '',
        body: '',
        legs: '',
        foot: ''
      })
    })
    const storeSubscription = this.store.pipe(select(selectCharacterState)).subscribe((characterState) => {
      console.log(characterState)
      this.form.patchValue(characterState)
    });
    storeSubscription.unsubscribe();
  }

  onSubmit() {
    let {name, view} = this.form.value;
    console.log(name, view);
    this.store.dispatch(
      CharacterActions.LocalSaveCharacter({
        name: this.form.controls['name'].value,
        view: this.form.get('view')?.value
      })
    )
  }

  randomizeCharacter() {
    this.form.patchValue({
      view: {
        hat: this.hats[Math.floor(Math.random() * this.hats.length)],
        eyeColor: this.eyeColors[Math.floor(Math.random() * this.eyeColors.length)],
        body: this.bodies[Math.floor(Math.random() * this.bodies.length)],
        legs: this.legs[Math.floor(Math.random() * this.legs.length)],
        foot: this.foots[Math.floor(Math.random() * this.foots.length)],
      }
    });
  }
}
