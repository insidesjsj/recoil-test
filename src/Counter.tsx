import {FC} from 'react';
import {useRecoilState, useRecoilValue, useSetRecoilState} from 'recoil';
import {countState} from './recoilState';

const Counter: FC = () => {
    const count = useRecoilValue(countState)
    const setCount = useSetRecoilState(countState)

    const increment = () => {
        setCount(count + 1)
    }
    const decrement = () => {
        setCount(count - 1)
    }

    return (
        <div>
            <p>count: {count}</p>
            <button onClick={increment}>Increment</button>
            <button onClick={decrement}>Decrement</button>
        </div>
    )
}

export default Counter