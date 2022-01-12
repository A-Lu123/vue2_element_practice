import Vue from 'vue';
import Vuex from 'vuex';
import getters from './getters';

Vue.use(Vuex);

const files = require.context('./modules', true, /\.js$/);
const modules = files.keys().reduce((modules, filePath) => {
    const fileName = filePath.replace(/^\.\/(.*)\.\w+$/, '$1');
    console.log('FILENAME:', fileName);
    const value = files(filePath);
    modules[fileName] = value.default;
    return modules;
}, {});

export default new Vuex.Store({
    modules,
    getters
})
