import {FC} from 'react';
import {useRecoilState, useRecoilValue, useResetRecoilState, useSetRecoilState} from 'recoil';
import {countState} from './recoilState';

const Counter: FC = () => {
    const count = useRecoilValue(countState)
    const setCount = useSetRecoilState(countState)
    const resetCount = useResetRecoilState(countState)

    const increment = () => {
        setCount(count + 1)
    }
    const decrement = () => {
        setCount(count - 1)
    }
    const reset = () => {
        resetCount()
    }

    return (
        <div>
            <p>count: {count}</p>
            <button onClick={increment}>Increment</button>
            <button onClick={reset}>Reset</button>
            <button onClick={decrement}>Decrement</button>
        </div>
    )
}

export default Counter