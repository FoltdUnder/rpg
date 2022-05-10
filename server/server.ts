import * as express from 'express';
import {Application} from 'express';

import {loginUser} from './auth.route';
import {
  createCharacter,
  deleteCharacter,
  getCharacterBuilder,
  getCharacterList,
  updateCharacter,
} from './character.route';

const bodyParser = require('body-parser');


const app: Application = express();

app.use(bodyParser.json());

app.route('/api/characters').get(getCharacterList);

app.route('/api/characters').post(createCharacter);

app.route('/api/characters/:id').delete(deleteCharacter);

app.route('/api/characters/:id').patch(updateCharacter);

app.route('/api/login').post(loginUser);

app.route('/api/builder').get(getCharacterBuilder);

const httpServer:any = app.listen(9000, () => {
  console.log("HTTP REST API Server running at http://localhost:" + httpServer.address().port);
});
