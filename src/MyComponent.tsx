import {FC} from 'react';
import {useRecoilState} from 'recoil';
import {greetingsState} from './recoilState';

const MyComponent: FC = () => {
    const [greetings, setGreetings] = useRecoilState(greetingsState)

    const handleChangeGreetings = () => {
        setGreetings('Hello, Alice')
    }
    return (
        <div>
            <p>Greetings: {greetings}</p>
            <button onClick={handleChangeGreetings}>Change Greetings</button>
        </div>
    )
}

export default MyComponent