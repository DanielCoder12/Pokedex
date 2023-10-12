import { AppState } from "../AppState.js";
import { sandboxPokemonService } from "../services/SandboxPokemonService.js";
import { Pop } from "../utils/Pop.js";
import { setHTML } from "../utils/Writer.js";

function _drawMyPokemon() {
    let content = ''
    AppState.myPokemon.forEach(pokemon => content += `<div class="col-12">
<div>pokemon ${pokemon.name}</div>
</div>`)
    setHTML('myPokemon', content)
}

export class SandboxPokemonController {
    constructor() {
        console.log('long name controller loaded');
        AppState.on('account', this.getPokemon)
        AppState.on('account', _drawMyPokemon)
    }

    async getPokemon() {
        try {
            console.log('pokemon got');
            await sandboxPokemonService.getPokemon()
        } catch (error) {
            Pop.error(error)
            console.log(error);
        }
    }

    async catchPokemon(pokemonId) {
        try {
            await sandboxPokemonService.catchPokemon(pokemonId)
        } catch (error) {
            Pop.error(error)
            console.log(error);
        }
    }
}