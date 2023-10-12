export class Pokemon {
    constructor(data) {
        this.name = data.name
        this.img = data.sprites.front_default
        this.nickName = data.nickName || null
        this.weight = data.weight
        this.height = data.height
        this.types = data.types
        this.id = data.id || null
    }


    get activePokemonTemplate() {
        return `
    <div class="d-flex justify-content-center">
              <div
                class="border border-dark border-rounded bg-danger p-4 rounded text-center d-flex justify-content-center w-75">
                <div class="bg-white w-50 fw-bold rounded fs-1 p-3">${this.name}
                </div>
              </div>
            </div>
            <div>
              <img class="pokemon-image"
                src="${this.img}"
                alt="${this.name}">
            </div>
            <div>


            </div>
            <div class="justify-content-center d-flex">
              <div class="border border-dark border-rounded bg-danger p-3 rounded d-flex justify-content-center w-75">
                <div class="bg-white w-50 fw-bold rounded fs-3 p-2">
                  <div class="p-4">
                    <div class="d-flex justify-content-between">
                      <p>height: ${this.height}</p>
                      <p>weight: ${this.weight}</p>
                    </div>
                    <p class="text-start">types: ${this.pokemonType}</p>
                    <div class="text-end">
                      <button onclick="app.SandboxPokemonController.catchPokemon(${this.id})" class="btn btn-danger">catch</button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
    `
    }

    get pokemonType() {
        let content = ''
        this.types.forEach(type => content += type.type.name += ' ')
        return content

    }

}

