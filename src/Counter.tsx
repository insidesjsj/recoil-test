import {FC} from 'react';
import {useRecoilState, useRecoilValue, useResetRecoilState, useSetRecoilState} from 'recoil';
import {countState, everOrOddState} from './recoilState';

const Counter: FC = () => {
    const count = useRecoilValue(countState)
    const setCount = useSetRecoilState(countState)
    const resetCount = useResetRecoilState(countState)
    const evenOrOdd = useRecoilValue(everOrOddState)

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
            <p>Even or Odd : {evenOrOdd}</p> {/* 파생 상태 출력 */}
            <button onClick={increment}>Increment</button>
            <button onClick={reset}>Reset</button>
            <button onClick={decrement}>Decrement</button>
        </div>
    )
}

export default Counter