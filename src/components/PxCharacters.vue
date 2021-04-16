<template>
  <main class="main-container">
    <div
      class="character-card"
      v-for="(a, idx) in characters"
      v-bind:key="a[idx]"
    >
      <div class="main-character__detail">
        <div class="details">
          <h3>Nombre:</h3>
          <h5>{{ a.name }}</h5>
          <h3>Género:</h3>
          <h5>{{ a.gender }}</h5>
          <h3>Id:</h3>
          <h5>{{ idx + 1 }}</h5>
        </div>
        <div class="img">
          <img src="" alt="" />
        </div>
      </div>
      <div class="main-deatil__link">
        <router-link
          class="link"
          :to="{ name: 'character', params: { id: idx + 1 } }"
          >Detalle</router-link
        >
      </div>
    </div>
  </main>
</template>

<script>
export default {
  name: "pxCharacters",

  props: {
    characters: {
      type: Array,
      default: () => [],
    },
  },
};
</script>

<style scoped>
.main-container {
  width: 80%;
  display: grid;
  justify-content: center;
  grid-template-columns: repeat(3, 1fr);
  column-gap: 16px;
  grid-template-rows: auto;
  row-gap: 16px;
  margin-top: 32px;
}
h3 {
  font-weight: 700;
}
h5 {
  font-weight: 400;
  margin-bottom: 8px;
}
.character-card {
  padding: 16px;
  color: var(--light);
  background-color: var(--dark-green);
  border-radius: 16px;
  box-shadow: var(--shadow);
}
.main-charaner__details {
  display: flex;
}
.main-deatil__link {
  padding: 8px;
  width: 100%;
  display: flex;
  justify-content: flex-end;
}
.link {
  background-color: var(--light);
  color: var(--main-black);
  padding: 8px;
  margin-right: 8px;
  border-radius: 8px;
  transition: background-color 300ms ease-in-out, color 300ms ease-in-out;
}
.link:hover {
  background-color: var(--light-green);
  color: var(--light);
}
</style>
