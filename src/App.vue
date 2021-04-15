<template>
  <main>
    <px-header></px-header>

    <router-view />
  </main>
</template>

<script>
import PxHeader from "@/components/PxHeader";

export default {
  name: "App",
  components: {
    PxHeader,
  },
};
</script>

<style>
* {
  margin: 0;
  padding: 0;
}

#app {
  width: 100%;
  display: flex;
  justify-content: center;
}
</style>
