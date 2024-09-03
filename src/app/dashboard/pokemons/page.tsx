import { PokemonsGrid, PokemonsResponse, SimplePokemon } from "@/app/pokemons";
import Image from "next/image";

const getPokemons = async(limit = 150,offset=150):Promise<SimplePokemon[]> =>{
    const data:PokemonsResponse = await fetch(`https://pokeapi.co/api/v2/pokemon?offset=${offset}&limit=${limit}'`)
    .then(res=>res.json());

    const pokemons = data.results.map(pokemon =>({
        id:pokemon.url.split('/').at(-2)!,
        name: pokemon.name
    }))
    // throw new Error('Error found'); //Simulate an error
    return pokemons;
}

export default async function PokemonsPage(){
    const pokemons = await getPokemons(150);
    return(
        <div className="flex flex-col">
            <span className="text-5xl my-2">
                Pokemon List <small>Static</small>
            </span>
            <PokemonsGrid pokemons={pokemons}/>
        </div>
    )
}