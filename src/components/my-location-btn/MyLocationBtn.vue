<template>
    <div>
        <button v-if="isBtnReady"
                class="btn btn-primary"
                @click="onMyLocationClicked">
            Ir a mi ubicacion
        </button>
    </div>
</template>

<script lang="ts">
import { computed, defineComponent } from 'vue';
import { usePlacesStore, useMapStore } from '../../composables';

export default defineComponent({
    name: 'MyLocationBtn',
    setup(){
          
        const { userLocation, isUserLocationReady} = usePlacesStore();
        const { map, isMapReady } = useMapStore();

        return{
            isBtnReady: computed<boolean>(()=> isUserLocationReady.value && isMapReady.value),

            onMyLocationClicked: () => {
                map.value?.flyTo({
                    center:userLocation.value!,
                    zoom:14
                })
            }    
        }
    }
})
</script>

<style scooped>
button {
    position: absolute;
    top:30px;
    right:30px;
}
</style>