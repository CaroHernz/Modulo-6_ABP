<h2 align=center > Módulo 6</h2>
<h1 align=center > Desarrollo de Interfaces Interactivas con Framework Vue </h1>

<p>Repositorio que contiene todas las actividades prácticas del Módulo 6, desarrolladas utilizando el framework Vue.js para la creación de interfaces interactivas y modernas.
</p>

<p align="center"> 
  <a href="#actividad1">Actividad 1</a> | 
	<a href="#actividad2">Actividad 2</a> | 
	<a href="#actividad3">Actividad 3</a> 
</p>

-----

## 🚀 Características Técnicas

### Tecnologías Utilizadas
- **Vue 3** - Framework principal con Composition API
- **Vuetify** - Biblioteca de componentes Material Design
- **Bootstrap 5** - Framework CSS para estilos responsivos

### Estructura del Proyecto
```
src/
├── components/          # Componentes reutilizables
│   ├── AppNavBar.vue   # Barra de navegación responsive
│   ├── AppFooter.vue   # Pie de página
│   ├── ABP1.vue        # Actividad 1 - Tabla de usuarios
│   ├── ABP2.vue        # Actividad 2 - Formularios
│   └── ABP3.vue        # Actividad 3 - Aplicación completa
└── App.vue             # Componente principal
```

### 🛠️ Instalación y Uso
- Prerrequisitos
  * Node.js (versión 16 o superior)
  * npm o yarn

- Instalación
```
# Clonar el repositorio
git clone https://github.com/CaroHernz/Modulo-6_ABP.git

# Navegar al directorio
cd Modulo-6_ABP

# Instalar dependencias
npm install

# Servidor de desarrollo
npm run dev

# Compilar para producción
npm run build
```

<a name="actividad1">

## Actividad Práctica 1: Intrudicción al Framework VueJS</a>
#### Aprendizaje esperado:
Describir los aspectos fundamentales de un framework orientado a componentes para el desarrollo de una aplicación Front-End

### Actividad: 
Para comenzar con nuestro aprendizaje de VueJS, vamos a realizar un proyecto simple, vamos a instalar Vue cómo lo aprendimos en clase.
Este mini proyecto, consiste en mostrar una tabla de usuarios, en donde deberás mostrar una tabla con los datos de tres (3) personas (pueden ser datos ficticios), estos datos deben ser:

- Nombre.
- Apellido.
- Fecha de Nacimiento.
- Edad.
  
### 🛠️ Requerimientos:
- Utiliza bootstrap para darle estilo a la tabla.
- Todos estos datos deben estar almacenados en la data de la instancia de VueJS y ser renderizados en la tabla directamente.
- Si utilizas arreglos y objetos en las variables dentro de la `data` de la instancia de Vue, serán menos líneas de programación

----

<a name="actividad2">

## Actividad Práctica 2: Templates y rendering en Vue</a>
#### Aprendizaje esperado:
Utilizar la sintaxis de templates de Vuex para el despliegue de valores y variables que den solución a un requerimiento

### Actividad: 
Para continuar con nuestro aprendizaje con Vue JS, debemos realizar la siguiente aplicación.
Queremos mostrar una lista de personajes ficticios con un nombre y
descripción.
  
### 🛠️ Requerimientos:
- Utilizar Vue y sus directivas
- Crear una estructura Vue
- Usar un arreglo que recorra (nombre, descripción)
- Los datos deberan estar definidos en un objeto

----

<a name="actividad3">

## Actividad Práctica 3: Binding de Formularios</a>
#### Aprendizaje esperado:
Implementar un formulario de datos interactivo utilizando form binding de Vue para dar solución a un requerimiento.

### Actividad: 
Veremos cómo administrar en Vue un conjunto de controles input (radio) para identificar la opción seleccionada.
Para trabajar un conjunto de controles radio debemos definir en el modelo de datos una única propiedad que almacenará el valor de la seleccionada.
Es importante decir que debemos fijar en el modelo cuál es la que se
encuentra seleccionada inicialmente, no rescata los valores iniciales
definidos en un control como podría ser:

```
<input checked type="radio" value="universitarios" v-model="estudios" id="universitarios">
```

Luego deberíamos iniciar el modelo: `estudios: 'universitarios'`

### 🛠️ Requerimientos:
- Crear 4 controles de tipo radio que permitan seleccionar que tipo de estudios tiene el visitante.
- Mostrar en la parte inferior cuañ se encuentra actualmente seleccionado
- Mostrar en un control tipo 'select' los días de la semana. Cuando el operador lo selecciona debe mostrar cuál seleccionó.

----
#### Creado por
<p align="center"> 
  <a href="https://github.com/CaroHernz">Carolina Hernández</a>
</p>
<div align="center"> ¡Si te gusta este proyecto, no olvides darle una ⭐! </div>
