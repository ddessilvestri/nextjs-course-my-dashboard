import { PokemonsResponse, SimplePokemon } from "@/app/pokemons";
import Image from "next/image";

const getPokemons = async(limit = 150,offset=150):Promise<SimplePokemon[]> =>{
    const data:PokemonsResponse = await fetch(`https://pokeapi.co/api/v2/pokemon?offset=${offset}&limit=${limit}'`)
    .then(res=>res.json());

    const pokemons = data.results.map(pokemon =>({
        id:pokemon.url.split('/').at(-2)!,
        name: pokemon.name
    }))
    return pokemons;
}

export default async function PokemonsPage(){
    const pokemons = await getPokemons(150);
    return(
        <div className="flex flex-col">
            <div className="flex flex-wrap grap-10 items-container justify-center">                
            {
                pokemons.map((p)=>(
                        <Image
                            key={p.id}
                            src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/${p.id}.svg`}
                            width={100}
                            height={100}
                            alt={`p.name`}
                        />
                    ))
                }
            </div>    

        
            
        </div>
    )
}