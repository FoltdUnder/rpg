
export interface Character {
  hat: Hats;
  eyeColor: EyeColor;
  body: Body;
  legs: Legs;
  foot: Foots;
}

export type Body = 'none' | 'undershirt' | 'jacket' | 't-shirt';
export type Hats = 'none' | 'hat' | 'cap' | 'turban';
export type EyeColor = 'none' | 'blue' | 'green' | 'brown';
export type Legs = 'none' | 'pants' | 'shorts' | 'underpants';
export type Foots = 'none' | 'sandals' | 'sneakers' | 'boots';




export const HATS: Hats[] = ['none', 'hat', 'cap', 'turban'];
export const EYE_COLORS: EyeColor[] = ['none', 'blue', 'brown', 'green'];
export const BODIES: Body[] = ['none', 'undershirt', 'jacket', 't-shirt'];
export const LEGS: Legs[] = ['none', 'pants', 'shorts', 'underpants'];
export const FOOTS: Foots[] = ['none', 'sandals', 'sneakers', 'boots'];

export interface CharacterBuilder {
  hats: string[],
  eyeColors: string[],
  bodies: string[],
  legs: string[],
  foots: string[],
}









