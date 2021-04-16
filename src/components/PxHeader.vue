<template>
  <header class="header">
      <div class="header-container">
        <px-logo></px-logo>
        <input class="header-search" type="text" placeholder="buscar">
        <router-link  class="header-link" to="/about">About</router-link>
      </div>
  </header>
</template>

<script>
import PxLogo from '@/components/PxLogo'

export default{
    name: "PxHeader",
    components:{
        PxLogo,
    }
}
</script>

<style scoped>
.header {    
  display: flex;
  justify-content: center;
  padding:32px 0;
  background-color: var(--main-black);
  box-shadow: var(--shadow);
}
.header-container{
    width:80%;
    display: flex;
    justify-content: space-between;
    align-items: center;
}
.header-search{
    width: 30%;
    height: 30px;
    border-radius: 100px;
    border:none;
    outline: none;
    padding-left: 16px;
}
.header-link{
    padding: 8px 16px;
    color: var(--main-black);
    background-color: var(--light);
    border-radius: 8px;
    transition: background-color 300ms ease-in-out,color 300ms ease-in-out;
}
.header-link:hover{
    background-color: var(--main-gray);
    color: var(--light);
}
.header-link:active{
    transform:scale(0.9)
}


</style>
