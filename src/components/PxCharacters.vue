<template>
  <div>
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
            <img
              class="avatar-img"
              v-bind:src="`https://ui-avatars.com/api/?name=${a.name}`"
              alt=""
            />
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
  </div>
</template>

<script>
import api from "@/api";
export default {
  name: "pxCharacters",

  data() {
    return {
      page: 1,
    };
  },

  props: {
    characters: {
      type: Array,
      default: () => [],
    },
  },

  methods: {
    getPage(pg) {
      api.getPages(pg).then((page) => (this.page = page));
    },
  },
};
</script>

<style scoped>
.main-container {
  width: 100%;
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
.main-character__detail {
  display: flex;
  justify-content: space-between;
}
.avatar-img {
  width: 100px;
  border-radius: 50%;
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
