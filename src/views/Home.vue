<template>
  <div class="container">
    <px-characters v-bind:characters="characters"></px-characters>

    <div class="buttons">
      <button
        v-bind:class="prevPage == null ? 'disabled' : ''"
        v-on:click="getPrevPage"
      >
        Anterior
      </button>
      <button
        v-bind:class="nextPage == null ? 'disabled' : ''"
        v-on:click="getNextPage"
      >
        Siguiente
      </button>
    </div>
  </div>
</template>

<script>
import api from "@/api";
import PxCharacters from "@/components/PxCharacters";
export default {
  name: "Home",

  components: {
    PxCharacters,
  },

  data() {
    return {
      characters: [],
      page: 1,
      prevPage: "",
      nextPage: "",
    };
  },

  //Se ejecuta cuando se crea el componente
  created() {
    api.getCharacters().then((characters) => (this.characters = characters));
    api.getPages().then((nextPage) => (this.nextPage = nextPage));
    api.getPrevPage().then((prevPage) => (this.prevPage = prevPage));
  },

  methods: {
    getNextPage() {
      api
        .getNextPageChars(this.nextPage)
        .then((characters) => (this.characters = characters));
      this.prevPage = this.nextPage;
      api
        .getNextPageUrl(this.nextPage)
        .then((nextPage) => (this.nextPage = nextPage));
    },

    getPrevPage() {
      api
        .getNextPageChars(this.prevPage)
        .then((characters) => (this.characters = characters));
      this.nextPage = this.prevPage;
      api
        .getPrevtPageUrl(this.prevPage)
        .then((prevPage) => (this.prevPage = prevPage));
    },
  },
};
</script>

<style scoped>
.container {
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-bottom: 32px;
}

.buttons {
  margin: 0 auto;
  display: flex;
  justify-content: space-between;
  margin-top: 32px;
  margin-bottom: 64px;
  width: 30%;
}

button {
  padding: 8px 16px;
  background-color: var(--main-black);
  color: var(--light);
  border: none;
  border-radius: 8px;
  cursor: pointer;
  outline: none;  
}
button:hover{
  background-color: var(--main-gray);
  color: black;
}
button:active{
  transform: scale(0.9);
  outline: none;
}

.disabled {
  background-color: gainsboro;
  cursor: not-allowed;
}

</style>
