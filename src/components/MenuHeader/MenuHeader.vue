<template>
  <div class="menu_header">
      <router-link class="link_title" to="/">
        <h2 class="title_header">Site de venda de veículos</h2>
      </router-link>
      <div>
          <ul class="items_header">
              <li class="item_header"><router-link class="link_header" to="/">Home</router-link></li>

              <li v-show="getUser" class="item_header" @click="logOut()">{{ getUser }}</li>
              <li v-show="!getUser" class="item_header"><router-link class="link_header" to="/login">Login</router-link></li>

          </ul>
      </div>
  </div>
</template>

<script>
import { mapActions, mapGetters } from 'vuex'

export default {
    data() {
        return{
        }
    },
    methods: {
        ...mapActions([
            'doLogout'
        ]),
        logOut() {
            this.doLogout()
            this.$router.push('/login')
        }
    },
    computed: {
        ...mapGetters([
            'getUser'
        ])
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