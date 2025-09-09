<template>
  <v-container fluid class="main-content bg-light p-5">
    <div class="container my-3 rounded p-5 bg-white shadow">
      <h1 class="text-center mb-4">ABP4: Manejo de Eventos en VUE</h1>
      <hr>
      <p>El ejercicio consiste en hacer una lista de pokemones con un buscador.</p>
      <p><strong>Requerimientos:</strong></p>
      <div>
        <ul>
          <li>Crear proyecto vue.js</li>
          <li>Usar métodos para validar formularios</li>
          <li>Usar Bootstrap</li>
          <li>Si no existen pokemones según la búsqueda, mostrar un mensaje "El pokémon que desea buscar no existe"</li>
        </ul>
      </div>
      <hr>
      <div class="mb-4">
        <h2 class="mb-3 text-center fw-bold text-danger">Enciclopedia Pokémon</h2>
        <div class="input-group">
          <span class="input-group-text"><i class="fas fa-search"></i></span>
          <input type="text" class="form-control" placeholder="Busca tu pokemón..." v-model.lazy="busqueda"
            @input="filtrarPokemones">
        </div>
        <div class="alert alert-warning mt-3" v-if="pokemonesFiltrados.length === 0 && busqueda">
          <i class="fas fa-exclamation-triangle me-2"></i>
          El pokémon "{{ busqueda }}" que desea buscar no existe
        </div>
        <div class="row mt-5">
          <div class="col-md-6 col-lg-4 mb-4 col-6" v-for="pokemon in pokemonesFiltrados" :key="pokemon.id">
            <div class="card h-100 pokemon-card shadow-sm border-0">
              <div class="card-img d-flex justify-content-center align-items-center py-3">
                <img :src="pokemon.img" :alt="pokemon.nombre" class="img-fluid"
                  style="max-height:150px; object-fit:contain">
                <i class="fa-2x p-2 position-absolute top-0 start-0 opacity-50" :class="obtenerIcono(pokemon.tipo)"
                  :style="{ color: obtenerColor(pokemon.tipo) }"></i>
              </div>

              <div class="card-body">
                <h5 class="card-title text-center fw-bold mb-0">{{ pokemon.nombre }}</h5>
              </div>
              <div class="card-footer bg-light border-0 pt-0 text-end">
                <small class="card-id">#{{ pokemon.id }}</small>
              </div>
            </div>
          </div>
        </div>

      </div>
    </div>
  </v-container>
</template>

<script>
export default {
  name: 'ABP4View',
  data() {
    return {
      busqueda: '',
      pokemonData: {
        "pokemones": [
          {
            "id": "1",
            "img": "https://www.pokemon.com/static-assets/content-assets/cms2/img/pokedex/full/001.png",
            "nombre": "Bulbasaur",
            "tipo": "planta"
          },
          {
            "id": "2",
            "img": "https://www.pokemon.com/static-assets/content-assets/cms2/img/pokedex/full/002.png",
            "nombre": "Ivysaur",
            "tipo": "planta"
          },
          {
            "id": "3",
            "img": "https://www.pokemon.com/static-assets/content-assets/cms2/img/pokedex/full/003.png",
            "nombre": "Venusaur",
            "tipo": "planta"
          },
          {
            "id": "4",
            "img": "https://www.pokemon.com/static-assets/content-assets/cms2/img/pokedex/full/004.png",
            "nombre": "Charmander",
            "tipo": "fuego"
          },
          {
            "id": "5",
            "img": "https://www.pokemon.com/static-assets/content-assets/cms2/img/pokedex/full/005.png",
            "nombre": "Charmeleon",
            "tipo": "fuego"
          },
          {
            "id": "6",
            "img": "https://www.pokemon.com/static-assets/content-assets/cms2/img/pokedex/full/006.png",
            "nombre": "Charizard",
            "tipo": "fuego"
          },
          {
            "id": "7",
            "img": "https://www.pokemon.com/static-assets/content-assets/cms2/img/pokedex/full/007.png",
            "nombre": "Squirtle",
            "tipo": "agua"
          },
          {
            "id": "8",
            "img": "https://www.pokemon.com/static-assets/content-assets/cms2/img/pokedex/full/008.png",
            "nombre": "Wartortle",
            "tipo": "agua"
          },
          {
            "id": "9",
            "img": "https://www.pokemon.com/static-assets/content-assets/cms2/img/pokedex/full/009.png",
            "nombre": "Blastoise",
            "tipo": "agua"
          },
          {
            "id": "10",
            "img": "https://www.pokemon.com/static-assets/content-assets/cms2/img/pokedex/full/010.png",
            "nombre": "Caterpie",
            "tipo": "insecto"
          },
          {
            "id": "11",
            "img": "https://www.pokemon.com/static-assets/content-assets/cms2/img/pokedex/full/011.png",
            "nombre": "Metapod",
            "tipo": "insecto"
          },
          {
            "id": "12",
            "img": "https://www.pokemon.com/static-assets/content-assets/cms2/img/pokedex/full/012.png",
            "nombre": "Butterfree",
            "tipo": "insecto"
          },
          {
            "id": "13",
            "img": "https://www.pokemon.com/static-assets/content-assets/cms2/img/pokedex/full/013.png",
            "nombre": "Weedle",
            "tipo": "insecto"
          },
          {
            "id": "14",
            "img": "https://www.pokemon.com/static-assets/content-assets/cms2/img/pokedex/full/014.png",
            "nombre": "Kakuna",
            "tipo": "insecto"
          },
          {
            "id": "15",
            "img": "https://www.pokemon.com/static-assets/content-assets/cms2/img/pokedex/full/015.png",
            "nombre": "Beedrill",
            "tipo": "insecto"
          },
          {
            "id": "16",
            "img": "https://www.pokemon.com/static-assets/content-assets/cms2/img/pokedex/full/016.png",
            "nombre": "Pidgey",
            "tipo": "aire"
          },
          {
            "id": "17",
            "img": "https://www.pokemon.com/static-assets/content-assets/cms2/img/pokedex/full/017.png",
            "nombre": "Pidgeotto",
            "tipo": "aire"
          },
          {
            "id": "18",
            "img": "https://www.pokemon.com/static-assets/content-assets/cms2/img/pokedex/full/018.png",
            "nombre": "Pidgeot",
            "tipo": "aire"
          },
          {
            "id": "19",
            "img": "https://www.pokemon.com/static-assets/content-assets/cms2/img/pokedex/full/019.png",
            "nombre": "Rattata",
            "tipo": "normal"
          },
          {
            "id": "20",
            "img": "https://www.pokemon.com/static-assets/content-assets/cms2/img/pokedex/full/020.png",
            "nombre": "Raticate",
            "tipo": "normal"
          },
          {
            "id": "21",
            "img": "https://www.pokemon.com/static-assets/content-assets/cms2/img/pokedex/full/021.png",
            "nombre": "Spearow",
            "tipo": "aire"
          },
          {
            "id": "22",
            "img": "https://www.pokemon.com/static-assets/content-assets/cms2/img/pokedex/full/022.png",
            "nombre": "Raticate",
            "tipo": "aire"
          },
          {
            "id": "23",
            "img": "https://www.pokemon.com/static-assets/content-assets/cms2/img/pokedex/full/023.png",
            "nombre": "Ekans",
            "tipo": "veneno"
          },
          {
            "id": "24",
            "img": "https://www.pokemon.com/static-assets/content-assets/cms2/img/pokedex/full/024.png",
            "nombre": "Arbok",
            "tipo": "veneno"
          },
          {
            "id": "25",
            "img": "https://www.pokemon.com/static-assets/content-assets/cms2/img/pokedex/full/025.png",
            "nombre": "Pikachu",
            "tipo": "electrico"
          },
          {
            "id": "26",
            "img": "https://www.pokemon.com/static-assets/content-assets/cms2/img/pokedex/full/026.png",
            "nombre": "Raichu",
            "tipo": "electrico"
          },
          {
            "id": "27",
            "img": "https://www.pokemon.com/static-assets/content-assets/cms2/img/pokedex/full/027.png",
            "nombre": "Sandshrew",
            "tipo": "tierra"
          },
          {
            "id": "28",
            "img": "https://www.pokemon.com/static-assets/content-assets/cms2/img/pokedex/full/028.png",
            "nombre": "Sandslash",
            "tipo": "tierra"
          },
          {
            "id": "29",
            "img": "https://www.pokemon.com/static-assets/content-assets/cms2/img/pokedex/full/029.png",
            "nombre": "Nidoran",
            "tipo": "veneno"
          },
          {
            "id": "30",
            "img": "https://www.pokemon.com/static-assets/content-assets/cms2/img/pokedex/full/030.png",
            "nombre": "Nidorina",
            "tipo": "veneno"
          }
        ]
      }
    }
  },
  computed: {
    pokemonesFiltrados() {
      if (!this.pokemonData || !this.pokemonData.pokemones) {
        return [];
      }
      if (!this.busqueda) {
        return this.pokemonData.pokemones;
      }
      const busquedaLower = this.busqueda.toLowerCase();
      return this.pokemonData.pokemones.filter(pokemon => pokemon && pokemon.nombre &&
        pokemon.nombre.toLowerCase().includes(busquedaLower) 
      );
    }
  },
  methods: {
    obtenerIcono(tipo) {
      const iconos = {
        'fuego': 'fas fa-fire',
        'agua': 'fas fa-droplet',
        'planta': 'fas fa-leaf',
        'electrico': 'fas fa-bolt',
        'aire': 'fas fa-wind',
        'insecto': 'fas fa-bug',
        'normal': 'fas fa-paw',
        'veneno': 'fas fa-skull',
        'tierra': 'fas fa-hill-rockslide'

      };
      return iconos[tipo] || 'fas fa-question';
    },
    obtenerColor(tipo) {
      const colors = {
        'fuego': 'red',
        'agua': 'blue',
        'planta': 'green',
        'electrico': 'orange',
        'aire': 'lightblue',
        'insecto': 'lightgreen',
        'normal': 'lightgray',
        'veneno':'purple',
        'tierra': 'brown'
      };
      return colors[tipo] || '#6c757d';
    },
    filtrarPokemones() {
    }
  }
};
</script>
<style scoped>
.container {
  flex: 1;
  overflow-y: auto;
  padding: 20px;
}

.pokemon-card {
  transition: transform 0.3s ease, box-shadow 0.3s ease;
  border-radius: 12px;
}

.pokemon-card:hover {
  transform: translateY(-5px);
  box-shadow: 0 10px 20px rgba(0, 0, 0, 0.15);
}
</style>
