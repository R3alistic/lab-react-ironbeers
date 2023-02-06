import { useEffect, useState } from "react";
import { getRandomBeer } from "../api";

function RandomBeer() {
    const [randomBeer, setRandomBeer] = useState();

    useEffect(() => {
        async function handleGetRandomBeer() {
            const response = await getRandomBeer();
            setRandomBeer(response.data);
        }
        handleGetRandomBeer();
    }, []);

    return randomBeer ? (
        <>
            <img width="10%" src={randomBeer.image_url} alt={randomBeer.name} />
            <div>
                <h1>{randomBeer.name}</h1>
                <h3>{randomBeer.tagline}</h3>
                <p>{randomBeer.attenuation_level}</p>
                <p>{randomBeer.first_brewed}</p>
                <p>{randomBeer.description}</p>
                <p>{randomBeer.contributed_by}</p>
            </div>
        </>
    ) : (
        <p>Getting a random beer!</p>
    );
}

export default RandomBeer;