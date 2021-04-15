//Importanmos a vue y a vue-router
import Vue from "vue";
import Router from "vue-router";

//Importamos todas las vistas que van en la implementación del router
import Home from "@/views/Home";
import About from "@/views/About";
import Character from "@/views/Character"


//Le decimos a Vue que use Router
Vue.use(Router);

//Exportamos una nueva instancia de router
export default new Router({
  //Usamos el modo History de HTML
  mode: "history",

  //Definimos el arreglo de rutas
  routes: [
    {
      path: "/",
      name: "home",
      component: Home,
    },
    {
      path: "/about",
      name: "about",
      component: About,
    },

    {
        path: "/character/:id",
        name: "character",
        component: Character
    },
    
    
  ],
});
