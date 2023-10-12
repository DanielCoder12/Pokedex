import { AppState } from "../AppState.js";
import { api } from "./AxiosService.js";

class SandboxPokemonService {
    async getPokemon() {
        const res = await api.get('api/pokemon')
        // console.log('my pokemon?', res.data);
        AppState.myPokemon = res.data
        // console.log('my pokemon', AppState.myPokemon);
    }


    async catchPokemon(pokemonId) {
        console.log('id in the service', pokemonId);
        const activePokemon = AppState.activePokemon
        console.log('active pokemon', activePokemon);
        const res = await api.post('api/pokemon', activePokemon)
        console.log('res ', res.data);
    }

}

export const sandboxPokemonService = new SandboxPokemonService()