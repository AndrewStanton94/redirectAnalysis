// index.js

import Vue from 'vue';
import App from './components/App.vue';
import fileInput from './components/file-input';

Vue.component('file-input', fileInput);
new Vue({ render: (createElement) => createElement(App) }).$mount('#app');
