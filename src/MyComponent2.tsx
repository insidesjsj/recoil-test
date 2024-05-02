import {FC} from 'react';
import {useRecoilState, useRecoilValueLoadable} from 'recoil';
import {dataSelector, greetingsState} from './recoilState';

const MyComponent2: FC = () => {
    const dataLoaded = useRecoilValueLoadable(dataSelector)

    switch (dataLoaded.state) {
        case "loading":
            return <div>Loading...</div>
        case "hasValue":
            const data = dataLoaded.contents
            return (
                <div>
                    <p>Data: {data}</p>
                </div>
            )
        case "hasError":
            return <div>Error: {dataLoaded.contents.message}</div>
        default:
            return null
    }
}

export default MyComponent2