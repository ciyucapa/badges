import useCharacter from "../../hooks/useCharacter";

import CharactersApi from "./characters";

const Characters = () => {
    const hook = useCharacter();
    return <CharactersApi {...hook} />
};

export default Characters;
