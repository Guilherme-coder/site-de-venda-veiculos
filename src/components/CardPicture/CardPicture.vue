<template>
  <div class="container">
      <img class="imgCard" :src="this.picture" alt="Foto do veículo">
  </div>
</template>

<script>
export default {
    props: {
        picture: String
    }
}
</script>

<style>
    .container{
        padding: .2em;
        width: 40%;
        height: 40%;
    }
    .imgCard{
        width: 100%;
        height: 100%;
    }

</style>