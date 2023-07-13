import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import mapboxgl from 'mapbox-gl'; // or "const mapboxgl = require('mapbox-gl');"
 
mapboxgl.accessToken = 'pk.eyJ1IjoiZXJpY2swMDkiLCJhIjoiY2xqcHN1anFkMDF5ODNsbm50cjJ5eXc2aSJ9.iZjrJjly1_bfR8j1rPRZYA';

if( !navigator.geolocation) {
    alert('Tu navegador no soporta el Geolocation')
    throw new Error('Tu naviegador no soporta el Geolocation')
}


createApp(App)
    .use(store)
    .use(router)
    .mount('#app')
