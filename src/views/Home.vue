<template>
  <div>
    <px-characters v-bind:characters="characters"></px-characters>
  </div>
</template>

<script>
import api from '@/api';
import PxCharacters from "@/components/PxCharacters";
export default {
  name: "Home",

  components: {
    PxCharacters,
  },

  data(){
      return{
          characters: [],
          page: 1,
          pages: 9,
      }
  },

  //Se ejecuta cuando se crea el componente  
  created(){
      api.getCharacters()
        .then(characters => this.characters = characters)
  }
};
</script>
