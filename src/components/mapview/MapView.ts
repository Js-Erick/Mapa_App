import { defineComponent, onMounted, ref, watch } from 'vue'
import { usePlacesStore } from '@/composables/usePlacesStore';
import mapboxgl from 'mapbox-gl';
import { useMapStore } from '@/composables';


export default defineComponent({
    name: 'MapView',
    setup() {
        const mapElement = ref<HTMLDivElement>();
        const { userLocation, isUserLocationReady } = usePlacesStore();
        const { setMap } = useMapStore();

        const initMap = async () => {
            if(!mapElement.value) throw new Error('Div Element no existe')
            if(!userLocation.value) throw new Error('user Location no existe')

            await Promise.resolve()
            
            const map = new mapboxgl.Map({
                container: mapElement.value,
                style: 'mapbox://styles/mapbox/streets-v12', // style URL
                center: userLocation.value, // starting position [lng, lat]
                zoom: 15, // starting zoom
                });

                const myLocationpopup = new mapboxgl.Popup()
                    .setLngLat(userLocation.value)
                    .setHTML(`
                    <h4>Aquí estoy</h4>
                    <p>Santiago de Chile</p>
                    `)

                const myLocationmarker = new mapboxgl.Marker({ color: '#590000', offset:[0,-25] })
                    .setLngLat( userLocation.value )
                    .setPopup( myLocationpopup )
                    .addTo( map )
                    
        // todo : establecer el mapa en Vuex
        setMap( map ) ;
        }

       


        onMounted(() => {
            if(isUserLocationReady.value)
             return initMap()
        })

        watch (isUserLocationReady, (newVal) => {
            if(isUserLocationReady.value) initMap() 
        })
        
        return {  
            isUserLocationReady,
            mapElement,
            initMap
        }

    },
})