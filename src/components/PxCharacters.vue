<template>
  <main>
    <h2>Personajes</h2>
    <div
        v-for="(a,idx) in characters"
        v-bind:key="a[idx]">
        <h3> {{a.name }}</h3>
        <p> {{ a.gender }}</p>
        <p>{{ idx+1 }}</p>
        <router-link :to="{name: 'character', params: { id: idx+1} }">Detalle</router-link>
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
      }
  }
};
</script>
