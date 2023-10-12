import { AppState } from "../AppState.js";
import { pokedexService } from "../services/PokedexService.js";
import { Pop } from "../utils/Pop.js";
import { setHTML } from "../utils/Writer.js";

function _drawWildPokemon() {
    let content = ''
    AppState.wildPokemon.forEach(pokemon => content += `<div  class="d-flex fw-bold">
    <i type="button" onclick="app.PokedexController.pokemonEncounter('${pokemon.url}')" class="mdi mdi-pokeball p-3 ps-5"></i>
    <p type="button" onclick="app.PokedexController.pokemonEncounter('${pokemon.url}')" class="py-3 mb-0 ">${pokemon.name}</p>
    </div>` )
    setHTML('wildPokemon', content)
}

function _drawActivePokemon() {
    // @ts-ignore
    setHTML('activePokemon', AppState.activePokemon.activePokemonTemplate)
}

export class PokedexController {
    constructor() {
        // console.log('pokedex controller');
        this.getPokemon()
        AppState.on('wildPokemon', _drawWildPokemon)
        AppState.on('activePokemon', _drawActivePokemon)
    }

    async pokemonEncounter(pokemon) {
        // console.log('encountered', pokemon);
        try {
            await pokedexService.pokemonEncounter(pokemon)
        } catch (error) {
            Pop.error
            console.log(error);
        }
    }


    async getPokemon() {
        try {

            await pokedexService.getPokemon()
        } catch (error) {
            Pop.error
            console.log(error);
        }
    }

}