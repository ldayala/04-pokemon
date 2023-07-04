import getPokemonOptions, { getPokemons, getPokemonsNames } from "@/helpers/getPokemonOptions";

describe('getPokemonOptions Helpers', () => {

    test('Debe regresar un arreglo de números', () => {
        const pokemons = getPokemons()
        //comprobamos que pokemos es un arreglo de las siguientes maneras
        expect(pokemons.length).toBe(650)
        expect(pokemons[0]).toBe(1)
        expect(pokemons[500]).toBe(501)
        expect(pokemons[649]).toBe(650)
    });

    test('Debe retornar un arreglo de 4 elementos con nombre de pokemones', async () => {
        const pokemons = await getPokemonsNames([1, 2, 3, 4])
        /*expect(pokemons[0].name).toBe('bulbasaur')
        expect(pokemons[0].id).toBe(1)
        expect(pokemons[2].name).toBe('venusaur')
        expect(pokemons[2].id).toBe(3)*/

        //con toStrictEqual podemos comparar objetos ya que en javascript los objetos son diferentes
        expect(pokemons).toStrictEqual([
            { name: 'bulbasaur', id: 1 },
            { name: 'ivysaur', id: 2 },
            { name: 'venusaur', id: 3 },
            { name: 'charmander', id: 4 }
        ])

    });
    test('getPokemonsOptions debe retornar un arreglo mesclado ', async () => {
        const pokemons = await getPokemonOptions()
        const pokemons1= await getPokemonOptions()
        expect(pokemons.length).toBe(4);

        expect(pokemons).toEqual([
            {
                name: expect.any(String),
                id: expect.any(Number)
            },
            {
                name: expect.any(String),
                id: expect.any(Number)
            },
            {
                name: expect.any(String),
                id: expect.any(Number)
            },
            {
                name: expect.any(String),
                id: expect.any(Number)
            }
        ])

        expect(pokemons).not.toStrictEqual(pokemons1)
    });
});