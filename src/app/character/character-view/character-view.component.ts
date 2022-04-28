import {ChangeDetectionStrategy, Component, Input, OnInit} from '@angular/core';
import {Character} from '../character.model';

@Component({
  selector: 'app-character-view',
  templateUrl: './character-view.component.html',
  styleUrls: ['./character-view.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class CharacterViewComponent implements OnInit {
  readonly spritePath = '/assets/sprites/character-builder-sprite.svg#';
  @Input() view: Character = {
    body: 'none',
    eyeColor: 'none',
    foot: 'none',
    hat: 'none',
    legs: 'none',
    name: 'noname'
  };

  constructor() {
  }

  ngOnInit(): void {
  }

}
