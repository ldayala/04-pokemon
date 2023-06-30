<template>
  <div class="pokemon-container">
    <div class="vidas">
      <h2>Vidas</h2>
      <span>{{vidas}}</span>
       <h2>Puntos</h2>
       <span>{{puntos}}</span>
    </div>
    <img :src="imgSrc" alt="pokemon" class="hidden-pokemon" />
    <img
      :src="imgSrc"
      alt="pokemon"
      class="fade-in"
      v-if="showPokemon"
    />
  </div>
</template>

<script>
export default {
  //number , required
  props:{
    pokemonId:{
      type:Number,
      required:true
    },
    vidas:{
      type:Number
    },
    puntos:Number,
    showPokemon:false
  },

  computed: {
    imgSrc() {
      return `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/${this.pokemonId}.svg`;
    },
  },
};
</script>

<style scoped>
/* Pokemon Picture */
.pokemon-container {
  height: 200px;
  display: flex;
  justify-content: center;
}
.vidas{
  position: absolute;
  top: 60px;
  right: 300px;
  
}
.vidas h2{
  text-transform: uppercase;
  color:darkorange ;
}
.vidas span{
font-size: 32px;
font-weight: 600;
color: darkorange;
}

img {
  height: 200px;
  position: absolute;

  user-select: none;
  -moz-user-select: none;
  -ms-user-select: none;
  -webkit-user-drag: none;
  -webkit-user-select: none;
}
.hidden-pokemon {
  filter: brightness(0);
}
</style>