<template>
  <div class="box">
      <header-app/>
      <div class="advertise_vehicle">
          <router-link to="/anunciar">
            <button class="advertise_button">Anuncie já seu veículo</button>
          </router-link>
      </div>
      <div class="search">
          <label class="label_vehicles" for="search_vehicle">Busque o veículo que deseja: </label>
          <input class="input_vehicles" id="search_vehicle" type="text">
      </div>
      <div class="list_vehicles">
          <select class="switch_vehicles" id="select_vehicels">
              <option value="cars">Carros</option>
              <option value="motorcycles">Motocicletas</option>
          </select>
            <ul v-if="typeVehicle === 'cars'">
                <card-vehicle v-for="vehicle in cars" :key="vehicle.picture"
                    vehicle="carros"
                    :id="vehicle.id"
                    :brand="vehicle.brand"
                    :model="vehicle.model"
                    :year="vehicle.year"
                    :price="vehicle.price"
                    :engine="vehicle.engine"
                    :datas="vehicle.created_at"
                    :picture="vehicle.picture"></card-vehicle>
            </ul>
            <ul v-else-if="typeVehicle === 'motorcycles'">
                <card-vehicle v-for="vehicle in motorcycles" :key="vehicle.picture"
                    vehicle="motocicletas"
                    :id="vehicle.id"
                    :brand="vehicle.brand"
                    :model="vehicle.model"
                    :category="vehicle.category" 
                    :year="vehicle.year"
                    :price="vehicle.price"
                    :capacity="vehicle.capacity"
                    :datas="vehicle.created_at"
                    :picture="vehicle.picture"></card-vehicle>
            </ul>
      </div>
  </div>
</template>

<script>
import MenuHeader from '../../components/MenuHeader/MenuHeader.vue';
import CardVehicle from '../../components/CardVehicle/CardVehicle.vue';
import axios from 'axios';

export default {
    components: {
        'header-app': MenuHeader,
        'card-vehicle': CardVehicle
    },
    data() {
        return {
            vehicles: [],
            cars: [],
            motorcycles: [],
            typeVehicle: localStorage.getItem('typeVehicle') || 'cars'
        }
    },
    mounted() {
        const token = localStorage.getItem('token')
        // this.$http.get('https://adonisjs-vehicles.herokuapp.com/cars/', { headers: { 'Authorization': token } })
        //     .then(res => {
        //         this.cars = res.body
        //     })
        axios.get('https://adonisjs-vehicles.herokuapp.com/cars/', { headers: { 'Authorization': token } })
            .then(res => {
                this.cars = res.data
                console.log(res);
            })
        this.$http.get('https://adonisjs-vehicles.herokuapp.com/motorcycles/', { headers: { 'Authorization': token } })
            .then(res => {
                this.motorcycles = res.body
            })


        var select = document.getElementById('select_vehicels');
        select.addEventListener('change', () => {
            this.typeVehicle = select.options[select.selectedIndex].value
            console.log(this.typeVehicle)
            localStorage.setItem('typeVehicle', `${this.typeVehicle}`)
        })
        select.value = this.typeVehicle
        console.log(this.typeVehicle);
    }

}
</script>

<style scoped>
    .box{
        background-color: #cccccc;
        text-align: center;
    }
    .advertise_button{
        position: absolute;
        right: 5em;
        margin-top: 2em;
        padding: .8em;
        background-color: #aaa;
        border-radius: 5px;
        font-size: 1.1em;
        transition: .5s;
    }
    .advertise_button:hover{
        cursor: pointer;
        background-color: #999;
        transition: .5s;
    }
    .search{
        display: flex;
        flex-direction: column;
        margin-bottom: 2em;
    }
    .label_vehicles{
        font-size: 2.3em;
        margin-top: 2.4em;
    }
    .input_vehicles{
        width: 25%;
        padding: .3em 1em;
        font-size: 1.2em;
        margin: 1em auto;
        outline: none;
        border: none;
        border-radius: 4px;
    }
    .list_vehicles{
        background-color: #bebebe;
        width: 70%;
        margin: 0 auto;
        padding: 2em 0;
    }
    .switch_vehicles{
        padding: .8em 1.2em;
        background-color: #aaa;
        border-radius: 5px;
        font-size: 1em;
        outline: none;
        transition: .5s;
    }
    .switch_vehicles:hover{
        cursor: pointer;
        background-color: #999;
        transition: .5s;
    }

</style>