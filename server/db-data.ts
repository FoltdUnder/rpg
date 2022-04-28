
interface User {
  id: number;
  login: string;
  password: string;
  characters: {[key: number]: Character}
}

export interface Character {
  id: number;
  name: string;
  hat: string;
  eyeColor: string;
  body: string;
  legs: string;
  foot: string;
}

export const USERS: {[key: number]: User} = {
  1: {
    id: 1,
    login: 'tempo',
    password: 'pass',
    characters: {
      1: {
        id: 1,
        name: 'Лёлик',
        hat: 'hat',
        eyeColor: 'blue',
        body: 'jacket',
        legs: 'none',
        foot: 'boots',
      },
      2: {
        id: 2,
        name: 'Болик',
        hat: 'hat',
        eyeColor: 'green',
        body: 'jacket',
        legs: 'none',
        foot: 'sandals',
      }
    }
  }
};

interface Class {
  name: string;
}

export const HATS = ['none', 'hat', 'cap', 'turban'];
export const EYE_COLORS = ['none', 'blue', 'brown', 'green'];
export const BODIES = ['none', 'undershirt', 'jacket', 't-shirt'];
export const LEGS = ['none', 'pants', 'shorts', 'underpants'];
export const FOOTS = ['none', 'sandals', 'sneakers', 'boots'];


export function authenticate(login: string, password: string) {
  const user: any = Object.values(USERS).find(user => user.login === login);

  if (user && user.password == password) {
    return user;
  }
  return null;
}
