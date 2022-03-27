import { atom, selector } from 'recoil';
import Data from '../src/data/dummyData.json';

export const DummyData = atom({
  // atom 은 두가지를 요구한다.
  // 첫번째로는 key로 유일한 값이여한다.
  key: 'data',
  // 두번째로 dafault value 가 필요하다.
  default: Data,
});

export const Toggle = atom({
  key: 'Toggle',
  default: false,
});

export const Update = selector({
  key: 'UpdataData',
  get: ({ get }) => {
    const Updata = get(DummyData);
    console.log(Updata);
    return Updata;
  },
});
