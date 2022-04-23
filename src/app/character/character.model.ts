
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



export interface CharacterBuilder {
  hats: string[],
  eyeColors: string[],
  bodies: string[],
  legs: string[],
  foots: string[],
}










export const HATS = ['none', 'hat', 'cap', 'turban'];
export const EYE_COLORS = ['none', 'blue', 'brown', 'green'];
export const BODIES = ['none', 'undershirt', 'jacket', 't-shirt'];
export const LEGS = ['none', 'pants', 'shorts', 'underpants'];
export const FOOTS = ['none', 'sandals', 'sneakers', 'boots'];

