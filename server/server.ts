import * as express from 'express';
import {Application} from 'express';

import {loginUser} from './auth.route';
import {getCharacterList, } from './character.route';

const bodyParser = require('body-parser');


const app: Application = express();

//todo отключение кеширования, почему приходит 304
app.disable('etag');

app.use(bodyParser.json());

app.route('/api/getCharacterList').get(getCharacterList);

// app.route('/api/createCharacter').post(createCharacter);

app.route('/api/login').post(loginUser);

const httpServer:any = app.listen(9000, () => {
  console.log("HTTP REST API Server running at http://localhost:" + httpServer.address().port);
});
