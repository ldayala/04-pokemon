<template>
  <h1 v-if="!pokemon">Espere por favor....</h1>
  <div v-else>
    <h1>¿Quien es este pokemon?</h1>
    <PokemonPicture :pokemonId="pokemon.id" :showPokemon="showPokemon"  :vidas="vidas"/>
    <PokemonOptions :pokemons="pokemonArr" @selection="getAnswer" />
    <div v-if="showAnswer">
      <h2>{{ message }}</h2>
      <button @click="newGame">Nuevo Juego</button>
    </div>
  </div>
</template>

<script>
import PokemonOptions from "@/components/PokemonOptions.vue";
import PokemonPicture from "@/components/PokemonPicture.vue";

import getPokemonOptions from "@/helpers/getPokemonOptions";

export default {
  components: { PokemonOptions, PokemonPicture },
  data() {
    return {
      pokemonArr: [],
      pokemon: null,
      showPokemon: false,
      showAnswer: false,
      message: "",
      vidas:5,
      puntos:0
    };
  },
  methods: {

    async mixPokemonArray() {
      this.pokemonArr = await getPokemonOptions();
      //obtengo un nuemero aleatorio del 0-3
      const rndInt = Math.floor(Math.random() * 4);
      this.pokemon = this.pokemonArr[rndInt];
    },

    getAnswer(e) {
      if (this.pokemon.id == e) {
        this.message = `Correctly the pokemon's name id ${this.pokemon.name}`;
      } else {
        this.message = `Uppps the pokemon's name id ${this.pokemon.name}`;
      }
      this.showAnswer = true;
      this.showPokemon = true;
    },
    
    newGame(){
      this.pokemonArr= []
      this.pokemon= null
      this.showPokemon= false
      this.showAnswer= false
      this.message= ""
      this.mixPokemonArray()
    }

  },
  mounted() {
    this.mixPokemonArray();
  },
};
</script>

<style>
</style>