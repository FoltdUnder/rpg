import {Request, Response} from 'express';
import {BODIES, Character, EYE_COLORS, FOOTS, getDbData, HATS, LEGS, setDbData} from './db-helpers';

export function getCharacterList(req: Request, res: Response) {
  console.log("Retrieving character list data ...");

  const userId = +req.headers['user-id']!;

  setTimeout(() => {
    res.status(200).json(Object.values(getDbData()[userId].characters));
  }, 1000);

}

export function createCharacter(req: Request, res: Response) {
  console.log('Saving character ...');
  if (!req.headers['user-id'] || req.headers['user-id'] === '0') {
    res.sendStatus(403);
  }
  const userId = +req.headers['user-id']!;
  const USERS = getDbData();
  const newCharacter: Character = {
    ...req.body['character'],
  };

  USERS[userId].characters.push(newCharacter);

  setDbData(USERS);

  res.status(200).json();
}

export function deleteCharacter(req: Request, res: Response) {
  console.log('delete character ...');

  if (!req.headers['user-id'] || req.headers['user-id'] === '0') {
    res.sendStatus(403);
  }
  const userId = +req.headers['user-id']!;
  const characterId = +req.params['id'];
  let USERS = getDbData();

  USERS[userId].characters = USERS[userId].characters.filter((value) => value.id !== characterId)

  setDbData((USERS));

  res.status(200).json();

}

export function updateCharacter(req: Request, res: Response) {
  console.log('update character ...');

  if (!req.headers['user-id'] || req.headers['user-id'] === '0') {
    res.sendStatus(403);
  }
  const userId = +req.headers['user-id']!;
  const newCharacter: Character = {
    ...req.body['character'],
  };
  let USERS = getDbData();
  USERS[userId].characters[newCharacter.id] = {...newCharacter}

  setDbData((USERS));

  res.status(200).json();
}

export function getCharacterBuilder(req: Request, res: Response) {
  console.log('Retrieving character builder data...');

  res.status(200).json({
    hats: HATS,
    eyeColors: EYE_COLORS,
    bodies: BODIES,
    legs: LEGS,
    foots: FOOTS
  })
}
