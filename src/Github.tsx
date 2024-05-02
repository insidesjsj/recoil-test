import {useRecoilValue} from 'recoil';
import {githubRepo} from './recoilState';

const Github = () => {
    const githubId = 'Dawon00';
    const githubRepos = useRecoilValue(githubRepo(githubId));

    return(
        <>
            <div>Repos : {githubRepos}</div>
        </>
    )

}
export default Github;