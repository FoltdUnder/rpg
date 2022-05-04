import { Injectable } from '@angular/core';
import {HttpClient, HttpParams} from '@angular/common/http';
import {map, Observable} from 'rxjs';
import {Character} from '../character.model';

@Injectable({
  providedIn: 'root'
})
export class CharacterHttpService {

  constructor(private httpClient: HttpClient) { }

  createCharacter(character: Character): Observable<Boolean> {
    return this.httpClient.post<Boolean>('api/characters', {character: character})
      .pipe(map((res) =>  res));
  }

  getCharacterList(): Observable<Character[]> {
    return this.httpClient.get<Character[]>('/api/characters', {
      params: new HttpParams().set('userId', JSON.parse(localStorage.getItem('user')!).id.toString())
    })
      .pipe(map((res) => res));
  }
}
