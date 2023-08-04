import { useState, useEffect } from 'react';
import axios from 'axios';

import '../../assets/Poke.css';

interface Pokemon {
  name: string;
  height: number;
  id: number;
  img: string;
  types: string[];
}

const PokedexApp: React.FC = () => {
  const [pokemonList, setPokemonList] = useState<Pokemon[]>([]);

  useEffect(() => {
    async function fetchPokemonData() {
      try {
        const response = await axios.get("https://pokeapi.co/api/v2/pokemon/?offset=0&limit=30");
        const results = response.data.results;

        const fetchedPokemonList: Pokemon[] = await Promise.all(
          results.map(async (pokemon: { url: string }) => {
            const pokemonDataResponse = await axios.get(pokemon.url);
            return {
              name: pokemonDataResponse.data.name,
              height: pokemonDataResponse.data.height,
              id: pokemonDataResponse.data.id,
              img: pokemonDataResponse.data.sprites.other['official-artwork'].front_default,
              types: pokemonDataResponse.data.types.map((type: { type: { name: string } }) => type.type.name),
            };
          })
        );

        setPokemonList(fetchedPokemonList);
      } catch (error) {
        console.error("Error fetching Pokemon data:", error);
      }
    }

    fetchPokemonData();
  }, []);

  return (
    <div className="pokedex">
      <div className="poke-header" style={{color: "black", fontSize: '120px' }}>
        <img src="./Pokédex_logo.png" alt="Pokedex Logo" />
      </div>
      <div className="poke-image">
        {pokemonList.map((pokemon) => (
          <div className='poke-container' key={pokemon.id}>
            <img src={pokemon.img} alt={pokemon.name} className='poke-img' />
            <div>
              <div style={{textTransform: 'uppercase' }}>
                No. {pokemon.id}. - {pokemon.name}
              </div>
            </div>
            <div style={{ paddingTop: '10px' }}>
              <button type='submit' style={{ color: 'white', backgroundColor: '#5a0707' }}>
                View Details
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default PokedexApp;
