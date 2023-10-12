import { AppState } from "../AppState.js";
import { Pokemon } from "../models/Pokemon.js";
import { PokemonApi } from "./AxiosService.js"

class PokedexService {
    async pokemonEncounter(pokemon) {
        const res = await PokemonApi.get(pokemon)
        // console.log(res.data);
        const madePokemon = new Pokemon(res.data)
        // @ts-ignore
        AppState.activePokemon = madePokemon
        // console.log('active pokemon', AppState.activePokemon);
    }


    async getPokemon() {
        const res = await PokemonApi.get('pokemon')
        // console.log('my pokemon', res.data.results);
        AppState.wildPokemon = res.data.results
        // console.log('wild pokemon', AppState.wildPokemon);

    }

}

export const pokedexService = new PokedexService()