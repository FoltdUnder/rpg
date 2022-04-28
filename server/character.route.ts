import {Request, Response} from 'express';
import {Character, USERS} from './db-data';

export function getCharacterList(req: Request, res: Response) {
  console.log("Retrieving character list data ...");

  const userId: number = +(req.query['userId'] as string);
  setTimeout(() => {
    res.status(200).json(Object.values(USERS[userId].characters));
  }, 1000);

}

// export function createCharacter(req: Request, res: Response) {
//   console.log('Saving character ...');
//
//   const userId: number = +req.params['userId'];
//   const newCharacter: Character = {
//     ...req.params['character'],
//     id: Object.keys(USERS[userId].characters).length,
//   };
//
//   USERS[userId].characters[newCharacter.id] = newCharacter;
// }
