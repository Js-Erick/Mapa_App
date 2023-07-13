import { createStore } from 'vuex';

// My custom modules
import PlacesModule from './places';
import { PlacesState } from './places/state';

import mapModule from './map';
import { MapState } from './map/state';


export interface StateInterface {
  places: PlacesState,
  map: MapState
}

export default createStore<StateInterface>({
  modules: {
    places: PlacesModule,
    map: mapModule

  }
})
