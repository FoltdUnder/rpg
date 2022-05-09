import {Request, Response} from 'express';
import {BODIES, Character, EYE_COLORS, FOOTS, getDbData, HATS, LEGS, setDbData} from './db-helpers';

export function getCharacterList(req: Request, res: Response) {
  console.log("Retrieving character list data ...");

  const userId: number = +(req.query['userId'] as string);
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
