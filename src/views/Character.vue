<template>
  <div class="character-container">
    <section class="character-all__details">
      <h2>Información General</h2>
      <div class="basic-details">
        <div class="detail-wrapper">
          <h3>Nombre:</h3>
          <p>{{ character.name }}</p>
        </div>

        <div class="detail-wrapper">
          <h3>Género:</h3>
          <p>{{ character.gender }}</p>
        </div>

        <div class="detail-wrapper">
          <h3>Peso:</h3>
          <p>{{ character.mass }} kg</p>
        </div>

        <div class="detail-wrapper">
          <h3>Altura:</h3>
          <p>{{ character.height }} mt</p>
        </div>

        <div class="detail-wrapper">
          <h3>Color de cabello:</h3>
          <p>{{ character.hair_color }}</p>
        </div>

        <div class="detail-wrapper">
          <h3>Color de ojos:</h3>
          <p>{{ character.eye_color }}</p>
        </div>

        <div class="detail-wrapper">
          <h3>Año de nacimiento:</h3>
          <p>{{ character.birth_year }}</p>
        </div>
        <div class="detail-wrapper">
          <h3>Planeta:</h3>
          <p>{{ character.homeworld }}</p>
        </div>
      </div>
    </section>

    <router-link class="back-link" to="/">Volver</router-link>
  </div>
</template>

<script>
import api from "@/api";

export default {
  name: "Character",

  data() {
    return {
      character: {},
    };
  },

  created() {
    console.log(this.getChar());
  },

  methods: {
    getChar() {
      console.log("Se llama");
      const id = this.$route.params.id;
      console.log(id);
      api.getCharacter(id).then((character) => (this.character = character));
    },
  },
};
</script>

<style scoped>
h2 {
  color: var(--light);
  margin-bottom: 32px;
}
.character-container {
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
}
.character-all__details {
  width: 80%;
  margin-top: 32px;
  background-color: var(--light-green);
  padding: 16px;
  border-radius: 8px;
}
.basic-details {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
}
.detail-wrapper {
  color: var(--light);
  margin-bottom: 8px;
}
.back-link {
  margin-top: 32px;
  justify-self: flex-end;
  background-color: var(--main-black);
  color: var(--light);
  padding: 8px 16px;
  border-radius: 8px;
  transition: all 300ms ease-in-out;
}
.back-link:hover {
  background-color: var(--main-gray);
  color: var(--main-black);
}
</style>
