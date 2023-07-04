import pokemonApi from "@/api/pokemonApi";

describe('Api de pokemon', () => {
    
    test('Axios debe recibir la api de pokemon', () => {
       expect(pokemonApi.defaults.baseURL).toBe('https://pokeapi.co/api/v2/pokemon')
    });
});