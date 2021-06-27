import Badge from '../components/badge';
import Header from '../components/header';

import useCharacter from "../hooks/useCharacter";

const Home = () => {
    const hook = useCharacter();
    return (
        <div>
            <Header />
            <div style={{display:"flex", flexDirection:"row", flexWrap:"wrap", backgroundColor:"red"}}>
                <Badge {...hook} />
            </div>
        </div>
    )
}

export default Home;
