
export const USERS = {
  1: {
    id: 1,
    login: 'tempo',
    password: 'pass'
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

export const CHARACTER_BUILDER = {
  hats: HATS,
  eyeColor: EYE_COLORS,
  bodies: BODIES,
  legs: LEGS,
  foots: FOOTS
};


export function authenticate(login: string, password: string) {
  const user: any = Object.values(USERS).find(user => user.login === login);

  if (user && user.password == password) {
    return user;
  }
  return null;
}
