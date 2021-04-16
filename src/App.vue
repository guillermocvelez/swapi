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
@import url('https://fonts.googleapis.com/css2?family=Lato:wght@400;700&display=swap');

:root{
  --main-black: #0d0d0d;
  --main-gray: #b8bebf;
  --dark-green: #253b40;
  --light: #f0f1f2;
  --light-green: #4f6573;
  --shadow: 3px 3px 4px rgba(0,0,0,0.3);
}

* {
  margin: 0;
  padding: 0;
  font-family: 'Lato', sans-serif;
  text-decoration: none;  
  
}

body{
  background-color: var(--light);
}

#app {
  width: 100%;
  display: flex;
  justify-content: center;
}
</style>
