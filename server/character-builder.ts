import {Request, Response} from 'express';
import {CHARACTER_BUILDER} from './db-data';


export function getCharacterBuilder(req: Request, res: Response) {
  res.status(200).json({
    payload: CHARACTER_BUILDER
  })
}
