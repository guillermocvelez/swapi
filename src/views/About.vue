<template>
  <div class="about-container">
    <div class="about-info">
      <h2>Sobre la aplicación</h2>
      <p class="info">
        SPA para prueba de selccion en
        <a href="https://www.direktio.com/empresa">DIREKTIO</a>
      </p>

      <h2>Realizado Por</h2>
      <p>Guillermo Castaño Vélez</p>
      <p>Diseñador UI/UX - FrontEnd Developer</p>
      <a href="https://guillermocv.com">Web personal</a>
    </div>
    <router-link class="home-link" to="/">Volver al inicio</router-link>
  </div>
</template>

<style scoped>
h2 {
  margin-bottom: 8px;
}
.info {
  margin-bottom: 16px;
}
p {
  margin-bottom: 8px;
}
.about-container {
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
}
.about-info {
  width: 80%;
  margin-top: 32px;
}
.home-link {
  margin-top: 32px;
  background-color: var(--main-black);
  color: var(--light);
  padding: 8px 16px;
  border-radius: 8px;
  cursor: pointer;
  transition: all 300ms ease-in-out;
}
.home-link:hover {
  background-color: var(--main-gray);
  color: var(--main-black);
}
</style>
