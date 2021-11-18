import { v4 as uuid } from 'uuid';
import { atom } from 'recoil';

import { containersInitialState } from './containers.states'

export const containersAtom = atom({
  key: uuid(),
  default: containersInitialState,
});
