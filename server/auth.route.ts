import {authenticate} from './db-helpers';
import {Request, Response} from 'express';


export function loginUser(req: Request, res: Response) {

  console.log("User login attempt ...");
  const {login, password} = req.body;
  const user = authenticate(login, password);

  if (user) {
    res.status(200).json({id:user.id, login: user.login});
  }
  else {
    res.sendStatus(401);
  }

}
