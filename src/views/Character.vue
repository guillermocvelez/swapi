<template>
    <div>
        <p>{{ character.name }}</p>
        <p>{{ character.gender }}</p>

        <router-link to="/">Volver</router-link>
    </div>
</template>


<script>
import api from '@/api';

export default {
    name: 'Character',



    data(){
        return {
            character: {},
        }
    },

    created(){
       console.log(this.getChar()) ;
    },

    methods: {
        getChar(){
            console.log("Se llama")
            const id = this.$route.params.id;
            console.log(id);
            api.getCharacter(id)
                .then(character => (this.character = character))
            
            
        }
    },
}
</script>