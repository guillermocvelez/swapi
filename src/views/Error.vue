<template>
  <div class="error-container">
    <div class="error">
      <h2>PÁGINA NO ENCONTRADA</h2>
    </div>
    <router-link class="home-link" to="/">Volver al inicio</router-link>
  </div>
</template>

<style scoped>
.error-container {
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
}
.error {
  margin-top: 32px;
  width: 80%;
}
.home-link {
  margin-top: 32px;
  background-color: var(--main-black);
  color: var(--light);
  padding: 8px 16px;
  border-radius: 8px;
  cursor: pointer;
}
</style>
