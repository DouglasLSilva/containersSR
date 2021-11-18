import { atom } from 'recoil';
import { v4 as uuid } from 'uuid';

export const headerTitleAtom = atom({
  key: uuid(),
  default: 'Docker Manager',
});
