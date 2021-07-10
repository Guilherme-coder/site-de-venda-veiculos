<template>
    <div class="box">
        <header-app/>
        <div class="car">
            <div class="title_price">
                <h1 class="title_vehicle">{{ this.car.brand }} {{ this.car.model }}</h1>
                <h1 class="price_vehicle">R$ {{ this.car.price }},00</h1>
            </div>
            <img class="picture" :src="this.car.picture" alt="foto do carro">
            
            <div class="info">
                <h3 class="title_description">Descrição:</h3>
                <p class="description">
                    Carro muito conservado, usei com muito carinho.
                </p>
                <h3 class="title_info">Informações Gerais: </h3>
                <ul class="metrics">
                    <li class="item_metrics">{{ formatEngine() }}</li>
                    <li class="item_metrics">Ano: {{ this.car.year }}</li>
                    <li class="item_metrics">Quilometragem: 100000 km</li>
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
            car: []
        }
    },

    mounted() {
        this.$http.get(`http://localhost:3000/api/carros/${this.id}`)
            .then(res => this.car = res.body[0])
    },

    methods: {
        formatEngine(){
            if(this.car.engine){
                let engineString = this.car.engine.toString();
                if(engineString.length === 1)
                    return `Motor: ${engineString}.0`;
                return 'Motor: ' + engineString;
            }
        },
    }

}
</script>

<style scoped>
    .box{
        background-color: #ccc;
        padding-bottom: 9em;
    }
    .car{
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