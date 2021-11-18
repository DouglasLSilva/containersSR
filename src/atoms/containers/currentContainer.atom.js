import { v4 as uuid } from 'uuid';
import { atom } from 'recoil';

import { currentContainerInitialState } from './containers.states'

export const currentContainerAtom = atom({
  key: uuid(),
  default: currentContainerInitialState,
});
