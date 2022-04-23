import * as express from 'express';
import {Application} from 'express';

import {getCharacterBuilder} from "./character-builder";



const app: Application = express();

app.route('/api/getCharacterBuilder').get(getCharacterBuilder);

const httpServer:any = app.listen(9000, () => {
  console.log("HTTP REST API Server running at http://localhost:" + httpServer.address().port);
});
