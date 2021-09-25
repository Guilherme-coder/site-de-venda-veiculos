<template>
  <div class="menu_header">
      <router-link class="link_title" to="/">
        <h2 class="title_header">Site de venda de veículos</h2>
      </router-link>
      <div>
          <ul class="items_header">
              <li class="item_header"><router-link class="link_header" to="/">Home</router-link></li>
              
              <li v-if="this.email" class="item_header" @click="logOut()">{{ showEmail() }}</li>
              <li v-else class="item_header"><router-link class="link_header" to="/login">Login</router-link></li>
              
          </ul>
      </div>
  </div>
</template>

<script>
export default {
    data() {
        return{
            email: localStorage.getItem('email') ? localStorage.getItem('email') : null
        }
    },
    methods: {
        showEmail() {
            const indice = this.email.indexOf('@')
            return this.email.substr(0, indice)
        },
        logOut() {
            localStorage.removeItem('token')
            localStorage.removeItem('email')
            this.email = null
            console.log('você fez logout');
        }
    }
}
</script>

<style scoped>
    .menu_header{
        background-color: #bcbcbc;
        padding: 2em;
        border-radius: 0 0 5px 5px;
        display: flex;
        justify-content: space-between;
        align-items: center;
    }
    .link_title{
        text-decoration: none;
        color: black;
    }
    .link_title:hover{
        text-decoration: underline;
    }
    .title_header{
        font-size: 2em;
        color: #222;
    }
    .items_header{
        display: flex;
        justify-content: space-between;
    }
    .item_header{
        cursor: pointer;
        list-style: none;
        margin-left: 2.5em;
        font-size: 1.3em;
    }
    .link_header{
        text-decoration: none;
        color: #222;
    }
    .link_header:hover{
        text-decoration: underline;
    }
    
</style>