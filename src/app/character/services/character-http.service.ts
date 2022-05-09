import { Injectable } from '@angular/core';
import {HttpClient, HttpParams} from '@angular/common/http';
import {map, Observable} from 'rxjs';
import {Character, CharacterBuilder} from '../character.model';

@Injectable({
  providedIn: 'root'
})
export class CharacterHttpService {

  constructor(private httpClient: HttpClient) { }

  createCharacter(character: Character): Observable<Boolean> {
    return this.httpClient.post<Boolean>('api/characters', {character: character})
      .pipe(map((res) =>  res));
  }

  deleteCharacter(characterId: number): Observable<boolean> {
    return this.httpClient.delete<boolean>('api/characters/' + characterId)
      .pipe(map((res) =>  res));
  }

  getCharacterList(): Observable<Character[]> {
    return this.httpClient.get<Character[]>('/api/characters', {
      params: new HttpParams().set('userId', JSON.parse(localStorage.getItem('user')!).id.toString())
    })
      .pipe(map((res) => res));
  }

  getCharacterBuilder(): Observable<CharacterBuilder> {
    return this.httpClient.get<CharacterBuilder>('/api/builder')
      .pipe(map(res => res));
  }
}
