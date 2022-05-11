import {TestBed} from '@angular/core/testing';

import {CharacterHttpService} from './character-http.service';
import {HttpClientTestingModule, HttpTestingController} from '@angular/common/http/testing';
import {Character, CharacterBuilder} from '../character.model';

describe('CharacterHttpService', () => {
  let service: CharacterHttpService;
  let httpMock: HttpTestingController;
  const mockCharacter: Character = {
    id: 0,
    view: {
      hat: 'hat',
      eyeColor: 'blue',
      body: 'jacket',
      foot: 'none',
      legs: 'underpants'
    },
    name: 'noname'
  };
  const mockCharacterList = [mockCharacter];
  const mockCharacterBuilder: CharacterBuilder = {
    bodies: [],
    eyeColors: [],
    foots: [],
    hats: [],
    legs: []
  }

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
      providers: [CharacterHttpService]
    });

    service = TestBed.inject(CharacterHttpService);
    httpMock = TestBed.inject(HttpTestingController);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('should create character', () => {
    service.createCharacter(mockCharacter).subscribe((res) => {
      expect(res).toEqual(true);
    });

    const testRequest = httpMock.expectOne('api/characters');
    expect(testRequest.request.body).toEqual({character: mockCharacter});
    expect(testRequest.request.method).toBe('POST');
    testRequest.flush(true);
  });

  it('should delete character', () => {
    service.deleteCharacter(mockCharacter.id).subscribe((res) => {
      expect(res).toEqual(true);
    });

    const testRequest = httpMock.expectOne('api/characters/' + mockCharacter.id);
    expect(testRequest.request.method).toBe('DELETE');
    testRequest.flush(true);
  });

  it('should update character', () => {
    service.updateCharacter(mockCharacter).subscribe((res) => {
      expect(res).toEqual(true);
    });

    const testRequest = httpMock.expectOne('api/characters/' + mockCharacter.id);
    expect(testRequest.request.body).toEqual({character: mockCharacter});
    expect(testRequest.request.method).toBe('PATCH');
    testRequest.flush(true);
  });

  it('should return character list', () => {
    service.getCharacterList().subscribe((res) => {
      expect(res).toEqual(mockCharacterList);
    });

    const testRequest = httpMock.expectOne('api/characters');
    expect(testRequest.request.method).toBe('GET');
    testRequest.flush(mockCharacterList);
  });

  it('should return character builder', () => {
    service.getCharacterBuilder().subscribe((res) => {
      expect(res).toEqual(mockCharacterBuilder);
    });

    const testRequest = httpMock.expectOne('api/builder');
    expect(testRequest.request.method).toBe('GET');
    testRequest.flush(mockCharacterBuilder);
  });
});
