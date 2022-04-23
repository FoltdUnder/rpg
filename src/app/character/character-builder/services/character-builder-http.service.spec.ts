import { TestBed } from '@angular/core/testing';

import { CharacterBuilderHttpService } from './character-builder-http.service';

describe('CharacterBuilderHttpService', () => {
  let service: CharacterBuilderHttpService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CharacterBuilderHttpService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
