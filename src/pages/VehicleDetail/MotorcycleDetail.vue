<template>
    <div class="box">
        <header-app/>
        <div class="motorcycle">
            <div class="title_price">
                <h1 class="title_vehicle">{{ this.motorcycle.brand }} {{ this.motorcycle.model }}</h1>
                <h1 class="price_vehicle">R$ {{ this.motorcycle.price }}</h1>
            </div>
            <img class="picture" :src="this.motorcycle.picture" alt="foto da motocicleta">
            
            <div class="info">
                <h3 class="title_description">Descrição:</h3>
                <p class="description">{{ this.motorcycle.description || 'O anunciante não deu descrição da motocicleta :(' }}</p>
                <h3 class="title_info">Informações Gerais: </h3>
                <ul class="metrics">
                    <li class="item_metrics">{{ formatCapacity() }}</li>
                    <li class="item_metrics">Ano: {{ this.motorcycle.year }}</li>
                    <li class="item_metrics">Quilometragem: {{ calcMileage() }}</li>
                </ul>
            </div>
        </div>

  </div>
</template>

<script>
import MenuHeader from '../../components/MenuHeader/MenuHeader.vue'

export default {
    components: {
        'header-app': MenuHeader
    },

    data(){
        return{
            id: this.$route.params.id,
            motorcycle: []
        }
    },

    mounted() {
        const token = localStorage.getItem('token')
        this.$http.get(`https://adonisjs-vehicles.herokuapp.com/motorcycles/${this.id}`, { headers: { 'Authorization': token } })
            .then(res => this.motorcycle = res.body)
    },

    methods: {
        formatCapacity(){
            return this.motorcycle.capacity + ' cilindradas'
        },
        calcMileage(){
            if(this.motorcycle.mileage)
                return `${this.motorcycle.mileage} km`
            return 'O anunciante não nos contou a quilometragem da motocicleta :('
        }
    }

}
</script>

<style scoped>
    .box{
        background-color: #ccc;
        padding-bottom: 9em;
    }
    .motorcycle{
        padding: 0 3em;
    }
    .title_price{
        display: flex;
        justify-content: space-between;
        align-items: center;
    }
    .title_vehicle{
        font-size: 3em;
        margin: 1em 0 1em 0;
        text-transform: capitalize;
    }
    .price_vehicle{
        font-size: 2em;
    }
    .picture{
        width: 50%;
    }
    .title_description{
        font-size: 2em;
        margin-top: 1em;
    }
    .description{
        font-size: 1.3em;
        margin: 1em 0 2em 2em;
    }
    .title_info{
        font-size: 2em;
    }
    .item_metrics{
        font-size: 1.3em;
        margin: 1em 0 0 2em;
        list-style: disc;
    }
</style>