import { atom, selector } from 'recoil';
import Data from '../src/data/dummyData.json';

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
