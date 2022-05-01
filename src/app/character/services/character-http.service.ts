import { Injectable } from '@angular/core';
import {HttpClient, HttpParams} from '@angular/common/http';
import {map, Observable} from 'rxjs';
import {Character} from '../character.model';

export interface SaveCharacter extends Character {
  id: number;
}

@Injectable({
  providedIn: 'root'
})
export class CharacterHttpService {

  constructor(private httpClient: HttpClient) { }

  createCharacter(character: SaveCharacter): Observable<Boolean> {
    return this.httpClient.post<Boolean>('api/character', {character: character});
  }

  getCharacterList(): Observable<Character[]> {
    return this.httpClient.get<Character[]>('/api/characters', {
      params: new HttpParams().set('userId', JSON.parse(localStorage.getItem('user')!).id.toString())
    })
      .pipe(
        map((res) => {
          return res;
        })
      );
  }
}
