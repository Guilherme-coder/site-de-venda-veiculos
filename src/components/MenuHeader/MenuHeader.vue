<template>
  <div class="menu_header">
      <h2 class="title_header">Site de Carros</h2>
      <div>
          <ul class="items_header">
              <li class="item_header"><router-link class="link_header" to="/">Home</router-link></li>
              <li class="item_header"><router-link class="link_header" to="/login">Login</router-link></li>
          </ul>
      </div>
  </div>
</template>

<script>
export default {

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
    .title_header{
        font-size: 2em;
        color: #222;
    }
    .items_header{
        display: flex;
        justify-content: space-between;
    }
    .item_header{
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