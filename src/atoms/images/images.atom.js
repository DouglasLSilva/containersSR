import { v4 as uuid } from 'uuid';
import { atom } from 'recoil';

import { imagesInitialState } from './images.states'

export const imagesAtom = atom({
  key: uuid(),
  default: imagesInitialState,
});
