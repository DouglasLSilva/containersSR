import { v4 as uuid } from 'uuid';
import { atom } from 'recoil';

import { currentImageInitialState } from './images.states'

export const currentImageAtom = atom({
  key: uuid(),
  default: currentImageInitialState,
});
