import * as fs from 'fs';

interface User {
  id: number;
  login: string;
  password: string;
  characters: {[key: number]: Character}
}

export interface Character {
  id: number;
  name: string;
  view: CharacterView;
}

interface CharacterView {
  hat: string;
  eyeColor: string;
  body: string;
  legs: string;
  foot: string;
}

export const HATS = ['none', 'hat', 'cap', 'turban'];
export const EYE_COLORS = ['none', 'blue', 'brown', 'green'];
export const BODIES = ['none', 'undershirt', 'jacket', 't-shirt'];
export const LEGS = ['none', 'pants', 'shorts', 'underpants'];
export const FOOTS = ['none', 'sandals', 'sneakers', 'boots'];


export function authenticate(login: string, password: string) {
  const user: any = Object.values(getDbData()).find(user => user.login === login);

  if (user && user.password == password) {
    return user;
  }
  return null;
}

export function getDbData(): { [key: number]: User } {
  return JSON.parse(fs.readFileSync(__dirname + '/db-data.json',  'utf8'));
}

export function setDbData(content: { [key: number]: User }): void {
  fs.writeFile(__dirname + '/db-data.json', JSON.stringify(content), (error) => {
    console.log(error)
  });
}
