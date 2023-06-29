import pokemonApi from "@/api/pokemonApi";

const getPokemons = () => {
  const pokemonsArr = Array.from(Array(650)); //crear un array vacio de 650 posiciones

  return pokemonsArr.map((_, index) => index + 1);
};

const getPokemonOptions = async () => {
  //short ordena asc o des en dependecia de la funcion se negativa o +, random da un numero x>0 y x <1 y al restarle .5 puede ser tanto positivo como negativo

  const mixedPokemons = getPokemons().sort(() => Math.random() - 0.5);
  const pokemons = await getPokemonsNames(mixedPokemons.splice(0, 4));
  
  return pokemons;
};

const getPokemonsNames = async ([a, b, c, d] = []) => {
  const promiseArr = [
    pokemonApi.get(`/${a}`),
    pokemonApi.get(`/${b}`),
    pokemonApi.get(`/${c}`),
    pokemonApi.get(`/${d}`),
  ];
  
  const [p1, p2, p3, p4] = await Promise.all(promiseArr);
  return [
    { name: p1.data.name, id: p1.data.id },
    { name: p2.data.name, id: p2.data.id },
    { name: p3.data.name, id: p3.data.id },
    { name: p4.data.name, id: p4.data.id },
  ];
};

export default getPokemonOptions;
