import {ChangeDetectionStrategy, Component, OnInit} from '@angular/core';
import {FormBuilder, FormGroup} from '@angular/forms';
import {BODIES, Character, EYE_COLORS, FOOTS, HATS, LEGS} from '../character.model';
import {select, Store} from '@ngrx/store';
import {CharacterActions} from '../action-types';
import {CharacterState} from '../reducers';
import {CharacterHttpService} from '../services/character-http.service';
import {Subject, takeUntil} from 'rxjs';
import {
  selectCharacterById,
  selectTotalCharacters
} from '../character-list/character-list.selectors';
import {ActivatedRoute} from '@angular/router';

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
              private characterHttpService: CharacterHttpService,
              private store: Store<CharacterState>,
              private activatedRoute: ActivatedRoute) {
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
    const characterId = this.activatedRoute.snapshot.params['id'];
    const storeSubscription = this.store.pipe(select(selectCharacterById(characterId))).subscribe((character) => {
      if (character) {
        this.form.patchValue(character);
      }
    });
    storeSubscription.unsubscribe();
  }

  onSubmit() {
    const destroy$ = new Subject();
    let newCharacterId = 0;
    this.store.pipe(select(selectTotalCharacters)).pipe(
      takeUntil(destroy$)
    ).subscribe((total) => {
      newCharacterId = total;
      destroy$.next(null);
      destroy$.complete();
    })
    this.store.dispatch(CharacterActions.createCharacter({payload: {...this.getCharacter(), id: newCharacterId}}));
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
    this.store.dispatch(
      CharacterActions.updateCurrentCharacterStore({payload: this.getCharacter()})
    );
  }

  private getCharacter(): Character {
    return {
      name: this.form.controls['name'].value,
      view: this.form.get('view')?.value
    }
  }
}
