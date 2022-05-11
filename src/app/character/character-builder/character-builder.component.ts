import {ChangeDetectionStrategy, Component, OnInit} from '@angular/core';
import {FormBuilder, FormGroup} from '@angular/forms';
import {Character, CharacterBuilder} from '../character.model';
import {select, Store} from '@ngrx/store';
import {CharacterActions} from '../action-types';
import {CharacterState} from '../reducers';
import {Observable, Subject, takeUntil} from 'rxjs';
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
  characterId = 0;

  constructor(protected formBuilder: FormBuilder,
              protected store: Store<CharacterState>,
              protected router: Router,
              protected activatedRoute: ActivatedRoute) {
  }

  ngOnInit(): void {
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
    });
  }

  onSubmit(): void {
    this.router.navigateByUrl('/list');
  }

  randomizeCharacter(): void {
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

  protected getCharacter(): Character {
    return {
      id: this.characterId,
      name: this.form.controls['name'].value,
      view: this.form.get('view')?.value
    }
  }
}
