import {atom, selector} from 'recoil';

export const countState = atom({
    key: 'countState',  // 상태를 식별하는 고유한 키
    default: 0,         // 초기값
})

export const everOrOddState = selector({
    key: 'evenOrOddState',
    get: ({ get }) => {
        const count = get(countState)
        return count % 2 === 0 ? '짝수' : '홀수'
    },
})

export const nameState = atom({
    key: 'nameState',
    default: 'John',
})

export const greetingsState = selector({
    key: 'greetingsState',
    get: ({ get }) => {
        const name = get(nameState)
        return `Hello, ${name}!`
    },
    set: ({ set }, newValue) => {
        const newName = (newValue as String).replace('Hello, ', '').replace('!', '');
        set(nameState, newName);
    },
})