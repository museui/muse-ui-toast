import 'muse-ui/dist/muse-ui.css';
import Vue from 'vue';
import MuseUI from 'muse-ui';
import MuseUIToast from '../dist/muse-ui-toast.esm';
import App from './App';
Vue.use(MuseUI);
Vue.use(MuseUIToast);

const app = new Vue({
  ...App
});

app.$mount('#app');
