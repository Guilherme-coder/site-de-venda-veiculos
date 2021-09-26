<template>
    <div class="card">
        <img class="image_vehicle" :src="this.picture" alt="Foto Veículo">
        <div class="texts_vehicle">
            <div class="title_and_price">
                <h4 class="title_vehicle">{{ this.brand }} {{ this.model }}</h4>
                <p class="price_vehicle">R$ {{ this.price }}</p>
            </div>
            <!-- <p class="description_vehicle"></p> -->
            <p class="engine_vehicle">{{ formatEngine() }}{{ formatCapacity() }}</p>
            <p class="year_vehicle">Ano: {{ this.year }}</p>
            <p class="data_vehicle">Anunciado em: {{ convertData() }}</p>
            <router-link v-if="this.vehicle === 'carros'" :to="{ name: 'showCar', params: { id : this.id }}">
                <button class="button_details">VER DETALHES</button>
            </router-link>
            <router-link v-else-if="this.vehicle === 'motocicletas'" :to="{ name: 'showMotorcycle', params: { id : this.id}, query: { vehicle: this.vehicle }}">
                <button class="button_details">VER DETALHES</button>
            </router-link>
        </div>
    </div>
</template>

<script>
export default {
    props: {
        vehicle: String,
        id: Number,
        brand: String,
        model: String,
        category: String,
        year: Number,
        price: Number,
        engine: Number,
        capacity: Number,
        datas: String,
        picture: String
    },
    methods: {
        convertData(){
            var hora = this.datas.substr(11, 2) -3
            var dia = this.datas.substr(8, 2)
            if(hora < 0){
                hora = 21 + Number(this.datas.substr(11, 2))
                dia -= 1
                if(dia < 10){
                    dia = `0${dia}`
                }
            }
            return `${dia}/${this.datas.substr(5, 2)}/${this.datas.substr(0, 4)} às ${hora}h${this.datas.substr(14, 2)}`;        
        },
        formatEngine(){
            if(this.engine){
                let engineString = this.engine.toString();
                if(engineString.length === 1)
                    return `Motor: ${engineString}.0`;
                return 'Motor: ' + engineString;
            }
            return
        },
        formatCapacity(){
            if(this.capacity)
                return this.capacity + ' cilindradas'
            return
        }
    }
}
</script>

<style scoped>
    .texts_vehicle{
        text-decoration: none
    }
    .card{
        width: 60%;
        margin: 3em auto 3em auto;
        border: 2px solid #555;
        padding: .3em;
        background-color: #898989;
    }
    .image_vehicle{
        width: 100%;
    }
    .texts_vehicle{
        background-color: #999;
        padding: 1.3em;
    }
    .title_and_price{
        display: flex;
        justify-content: space-between;
        align-items: center;
    }
    .title_vehicle{
        font-size: 2.5em;
        text-transform: capitalize;
    }
    .engine_vehicle{
        font-size: 1.5em;
        text-align: start;
    }
    .price_vehicle{
        font-size: 1.5em;
        text-transform: capitalize;
    }
    .year_vehicle{
        font-size: 1.5em;
        text-align: start;
        text-transform: capitalize;
    }
    .data_vehicle{
        font-size: 1em;
        text-align: start;
    }
    .button_details{
        padding: .3em .7em;
        background-color: #aaa;
        transition: .4s;
    }
    .button_details:hover{
        cursor: pointer;
        background-color: #a2a2a2;
        transition: .4s;
    }
</style>