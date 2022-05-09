import {ChangeDetectionStrategy, Component, OnInit} from '@angular/core';
import {FormBuilder, FormGroup} from '@angular/forms';
import {Character, CharacterBuilder} from '../character.model';
import {select, Store} from '@ngrx/store';
import {CharacterActions} from '../action-types';
import {CharacterState} from '../reducers';
import {CharacterHttpService} from '../services/character-http.service';
import {Observable, Subject, takeUntil} from 'rxjs';
import {
  selectCharacterById,
  selectTotalCharacters
} from '../character-list/character-list.selectors';
import {ActivatedRoute, Router} from '@angular/router';
import {selectCharacterBuilder} from '../character.selectors';

@Component({
  selector: 'app-character-builder',
  templateUrl: './character-builder.component.html',
  styleUrls: ['./character-builder.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class CharacterBuilderComponent implements OnInit {
  form!: FormGroup;
  characterBuilderOptions = new Observable<CharacterBuilder>();

  constructor(private formBuilder: FormBuilder,
              private characterHttpService: CharacterHttpService,
              private store: Store<CharacterState>,
              private router: Router,
              private activatedRoute: ActivatedRoute) {
  }

  ngOnInit() {
    this.characterBuilderOptions = this.store.pipe(select(selectCharacterBuilder));
    this.form = this.formBuilder.group({
      name: '',
      view: this.formBuilder.group({
        hat: 'none',
        eyeColor: 'none',
        body: 'none',
        legs: 'none',
        foot: 'none'
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
    this.store.dispatch(CharacterActions.createCharacter({payload: this.getCharacter()}));
    this.router.navigateByUrl('/list');
  }

  randomizeCharacter() {
    const destroy$ = new Subject();

    this.characterBuilderOptions.pipe(takeUntil(destroy$))
      .subscribe({
        next: (builderOptions) => {
          this.form.patchValue({
            view: {
              hat: builderOptions.hats[Math.floor(Math.random() * builderOptions.hats.length)],
              eyeColor: builderOptions.eyeColors[Math.floor(Math.random() * builderOptions.eyeColors.length)],
              body: builderOptions.bodies[Math.floor(Math.random() * builderOptions.bodies.length)],
              legs: builderOptions.legs[Math.floor(Math.random() * builderOptions.legs.length)],
              foot: builderOptions.foots[Math.floor(Math.random() * builderOptions.foots.length)],
            }
          });
          this.store.dispatch(
            CharacterActions.updateCurrentCharacterStore({payload: this.getCharacter()})
          );
          destroy$.next(null);
          destroy$.complete();
        }
      });
  }

  private getCharacter(): Character {
    const destroy$ = new Subject();
    let newCharacterId = 0;
    this.store.pipe(select(selectTotalCharacters)).pipe(
      takeUntil(destroy$)
    ).subscribe((total) => {
      newCharacterId = ++total;
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
