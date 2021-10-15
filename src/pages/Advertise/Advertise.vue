<template>
    <div class="box">
        <header-app/>
        <div class="form_advertise">
            <div v-if="typeVehicle === 'cars'" class="title_carro">
                <h1 class="title">Vamos anunciar seu carro</h1>
                <h3 class="subtitle">Conte mais detalhes do seu carro</h3>
            </div>
            <div v-else-if="typeVehicle === 'motorcycles'" class="title_motorcycle">
                <h1 class="title">Vamos anunciar sua motocicleta</h1>
                <h3 class="subtitle">Conte mais detalhes da sua motocicleta</h3>
            </div>

            <label class="label_switch" for="select_vehicle">Qual veículo quer anunciar? </label>
            <select class="switch_vehicles" id="select_vehicle">
                <option value="cars">Carro</option>
                <option value="motorcycles">Motocicleta</option>
            </select>

            <form class="form_advertise_car" v-if="typeVehicle === 'cars'" @submit.prevent="advertiseCar()">
                <label class="label_advertise" for="brand_car">Marca: </label>
                <input class="input_advertise" id="brand_car" type="text" placeholder="Ex: ford">

                <label class="label_advertise" for="model_car">Modelo: </label>
                <input class="input_advertise" id="model_car" type="text" placeholder="Ex: ka">

                <label class="label_advertise" for="description_car">Descrição: </label>
                <input class="input_advertise" id="description_car" type="text">

                <label class="label_advertise" for="engine_car">Motor: </label>
                <input class="input_advertise" id="engine_car" type="tel" placeholder="Ex: 1.0">

                <label class="label_advertise" for="year_car">Ano: </label>
                <input class="input_advertise" id="year_car" type="number" placeholder="Ex: 2015">

                <label class="label_advertise" for="price_car">Preço: </label>
                <input class="input_advertise" id="price_car" type="number" placeholder="Ex: 28000">

                <label class="label_advertise" for="picture_car">Nos mande uma foto: </label>
                <input class="button_image" type="file" multiple ref="filescar">

                <button class="button_advertise" type="submit">Anunciar</button>
            </form>

            <form class="form_advertise_motorcycle" v-else-if="typeVehicle === 'motorcycles'" @submit.prevent="advertiseMotorcycle()">
                <label class="label_advertise" for="brand_motorcycle">Marca: </label>
                <input class="input_advertise" id="brand_motorcycle" type="text" placeholder="Ex: honda">

                <label class="label_advertise" for="model_motorcycle">Modelo: </label>
                <input class="input_advertise" id="model_motorcycle" type="text" placeholder="Ex: cb1000">

                <label class="label_advertise" for="description_motorcycle">Descrição: </label>
                <input class="input_advertise" id="description_motorcycle" type="text">

                <label class="label_advertise" for="category_motorcycle">Categoria: </label>
                <select class="switch_vehicles" id="category_motorcycle">
                    <option value="naked">Naked</option>
                    <option value="sport">Carenada</option>
                    <option value="semi_naked">Semi-carenada</option>
                    <option value="custom">Custom</option>
                </select>

                <label class="label_advertise" for="capacity_motorcycle">Cilindrada: </label>
                <input class="input_advertise" id="capacity_motorcycle" type="number" placeholder="Ex: 1000">

                <label class="label_advertise" for="year_motorcycle">Ano: </label>
                <input class="input_advertise" id="year_motorcycle" type="number" placeholder="Ex: 2015">

                <label class="label_advertise" for="price_motorcycle">Preço: </label>
                <input class="input_advertise" id="price_motorcycle" type="number" placeholder="Ex: 35000">

                <label class="label_advertise" for="picture_motorcycle">Nos mande uma foto: </label>
                <input class="button_image" type="file" multiple ref="files">
                <p v-for="image in this.images" :key="image.name">{{ image }}</p>

                <button class="button_advertise" type="submit">Anunciar</button>
            </form>
        </div>
    </div>
</template>

<script>
import MenuHeader from '../../components/MenuHeader/MenuHeader.vue'
import image from '@/scripts/image'
import Swal from 'sweetalert2'

export default {
    data() {
        return {
            typeVehicle: localStorage.getItem('typeVehicle'),
            categoryMotorcycle: 'naked',
            token: localStorage.getItem('token'),
            images: []
        }
    },
    components: {
        'header-app': MenuHeader
    },
    mounted() {
        var select = document.getElementById('select_vehicle');
        select.addEventListener('change', () => {
            this.typeVehicle = select.options[select.selectedIndex].value;
            console.log(this.typeVehicle);
        })
        select.value = this.typeVehicle
    },
    methods: {
        async advertiseCar() {
            var picturesCar = this.$refs.filescar.files
            var arrayPicturesCar = []

            arrayPicturesCar = await image.exec(picturesCar)

            this.images = arrayPicturesCar

            if(arrayPicturesCar.length > 3) {
                Swal.fire({
                    title: 'Oops!',
                    text: 'Só é permitido adicionar até 3 fotos',
                    icon: 'warning',
                    confirmButtonText: 'Ok'
                })
                picturesCar = null
                return
            }

            console.log('anunciar carro');
            const brandc = document.getElementById('brand_car').value
            const modelc = document.getElementById('model_car').value
            const descriptionc = document.getElementById('description_car').value
            const enginec = document.getElementById('engine_car').value
            const yearc = document.getElementById('year_car').value
            const pricec = document.getElementById('price_car').value

            const json =
            {
                brand: brandc,
                model: modelc,
                description: descriptionc,
                engine: Number(enginec),
                year: Number(yearc),
                price: Number(pricec),
                picture_one: arrayPicturesCar[0],
                picture_two: arrayPicturesCar[1],
                picture_three: arrayPicturesCar[2],
                picture_four: arrayPicturesCar[3],
                picture_five: arrayPicturesCar[4],
                picture_six: arrayPicturesCar[5]
            }
            this.$http.post('https://adonisjs-vehicles.herokuapp.com/cars/', json)
                .then(() => {
                    console.log('Carro cadastrado com sucesso. ')
                    this.$router.push({ name: 'home' })
                    localStorage.setItem('typeVehicle', 'cars')
                })
        },
        async advertiseMotorcycle(){
            var pictures = this.$refs.files.files
            var arrayPictures = []

            arrayPictures = await image.exec(pictures)

            if(arrayPictures.length > 3) {
                Swal.fire({
                    title: 'Oops!',
                    text: 'Só é permitido adicionar até 3 fotos',
                    icon: 'warning',
                    confirmButtonText: 'Ok'
                })
                pictures = null
                return
            }

            console.log('anunciar moto');
            const brandm = document.getElementById('brand_motorcycle').value
            const modelm = document.getElementById('model_motorcycle').value
            const descriptionm = document.getElementById('description_motorcycle').value
            const capacitym = document.getElementById('capacity_motorcycle').value
            const yearm = document.getElementById('year_motorcycle').value
            const pricem = document.getElementById('price_motorcycle').value

            var typeMoto = document.getElementById('category_motorcycle');
            typeMoto.addEventListener('change', () => {
                this.categoryMotorcycle = typeMoto.options[typeMoto.selectedIndex].value;
                console.log(this.categoryMotorcycle);
            })

            const json =
            {
                brand: brandm,
                model: modelm,
                description: descriptionm,
                category: this.categoryMotorcycle,
                capacity: Number(capacitym),
                year: Number(yearm),
                price: Number(pricem),
                picture_one: arrayPictures[0],
                picture_two: arrayPictures[1],
                picture_three: arrayPictures[2],
                picture_four: arrayPictures[3],
                picture_five: arrayPictures[4],
                picture_six: arrayPictures[5]
            }
            this.$http.post('https://adonisjs-vehicles.herokuapp.com/motorcycles/', json )
                .then(() => {
                    console.log('Carro cadastrado com sucesso. ')
                    localStorage.setItem('typeVehicle', 'motorcycles')

                    this.$router.push('/')
                })
        }
    }
}
</script>

<style scoped>
    .box{
        background-color: #ccc;
        padding-bottom: 5em;
    }
    .form_advertise{
        background-color: #bcbcbc;
        width: 70%;
        margin: 0 auto;
        margin-top: 5em;
        padding: .3em 1em;
        padding-bottom: 5em;
    }
    .title{
        font-size: 2.3em;
        margin-top: 1em;
    }
    .subtitle{
        font-size: 1.3em;
        margin-bottom: 1.5em;
    }
    .label_switch{
        font-size: 1.4em;
        display: block;
    }
    .switch_vehicles{
        padding: .8em 1.2em;
        margin: 1em;
        background-color: #aaa;
        border-radius: 5px;
        font-size: 1em;
        outline: none;
        transition: .5s;
    }
    .label_advertise{
        display: block;
        font-size: 1.5em;
        margin: 1.2em 0 .3em .8em;
    }
    .switch_vehicles:hover{
        cursor: pointer;
        background-color: #999;
        transition: .5s;
    }
    .input_advertise{
        width: 80%;
        outline: none;
        padding: .3em .7em;
        margin-left: 1em;
        font-size: 1.2em;
        border-radius: 5px;
        border: 1px;
    }
    .button_advertise{
        display: block;
        margin: 0 auto;
        margin-top: 2em;
        padding: .8em;
        width: 25%;
        background-color: #aaa;
        border-radius: 5px;
        font-size: 1.1em;
        transition: .5s;
    }
    .button_advertise:hover{
        cursor: pointer;
        background-color: #999;
        transition: .5s;
    }
    .button_image{
        display: block;
        margin-top: 1em;
        padding: .5em;
        width: 25%;
        padding: 1em;
        background-color: #aaa;
        border-radius: 5px;
        font-size: .9em;
        transition: .5s;
    }
    .button_image:hover{
        cursor: pointer;
        background-color: #999;
        transition: .5s;
    }
</style>