import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {map, Observable} from 'rxjs';
import {CharacterBuilder} from '../../character.model';

@Injectable({
  providedIn: 'root'
})
export class CharacterBuilderHttpService {

  constructor(private httpClient: HttpClient) { }

  getCharacterBuilder(): Observable<CharacterBuilder> {
    return this.httpClient.get<CharacterBuilder>('api/getCharacterBuilder');
  }
}
