import {atom} from 'recoil';

export const countState = atom({
    key: 'countState',  // 상태를 식별하는 고유한 키
    default: 0,         // 초기값
})