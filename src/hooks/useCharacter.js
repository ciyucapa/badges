import {useState, useEffect} from 'react';
import servicePersonajes from "../service/servicePersonajes";

const useCharacter = () => {
    const [characters, setCharacters] = useState([]);

    useEffect(() => {
        let isFetch = true;

        (async () => {
            try {
                const response = await servicePersonajes.getPersonajes();
                const {data:{results}} = response;
                setCharacters(results);
                console.log(results)
            } catch (e) {
                console.log("error", e)
            }
        })()

        return () => {
            isFetch = false;
        }
    }, [])

    return {
        characters,
    };
};

export default useCharacter;
