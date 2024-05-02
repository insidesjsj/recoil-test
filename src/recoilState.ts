import {atom, selector, selectorFamily} from 'recoil';
import axios from 'axios';

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

export const dataState = atom({
    key: 'dataState',
    default: null,
})

export const dataSelector = selector({
    key: 'dataSelector',
    get: async ({ get}) => {
        try {
            // 비동기 API 호출을 실행
            const response = await fetch('https://api.example.com/data')
            const data = await response.json()
            return data
        } catch (error) {
            throw new Error('Failed to fetch data')
        }
    },
})

export const githubRepo = selectorFamily({
    key: "github/get",
    get: (githubId) => async () => {
        if (!githubId) return ""

        const { data } = await axios.get(
            `https://api.github.com/repos/${String(githubId)}`
        )
        return data
    },
})