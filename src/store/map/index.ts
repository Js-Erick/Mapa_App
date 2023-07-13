import {Module } from 'vuex';
import { StateInterface } from '../index';

import state, { MapState } from './state';
import mutations from './mutations';
import actions from './actions';
import getters from './getters';

const mapModule: Module<MapState, StateInterface> = {
    namespaced: true,
    actions,
    getters,
    mutations,
    state
}
export default mapModule;