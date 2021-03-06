import { atom, selector } from 'recoil';
import Data from './data/dummyData.json';

export const FullDummyData = atom({
  key: 'Fulldata',
  default: Data,
});

export const DummyData = atom({
  key: 'data',
  default: Data.renderings,
});

export const Update: any = selector({
  key: 'UpdataData',
  get: ({ get }) => {
    const Updata = get(DummyData);
    localStorage.setItem('updataData', JSON.stringify(Updata));
    return Updata;
  },
});

export const Toggle = atom({
  key: 'Toggle',
  default: false,
});
