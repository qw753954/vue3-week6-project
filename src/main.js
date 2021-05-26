import { createApp } from 'vue';

import Loading from 'vue3-loading-overlay';
import 'vue3-loading-overlay/dist/vue3-loading-overlay.css';

import axios from 'axios';
import VueAxios from 'vue-axios';

import {
  Form, Field, ErrorMessage, defineRule, configure,
} from 'vee-validate';
import {
  required, min, email,
} from '@vee-validate/rules';

import { localize, setLocale } from '@vee-validate/i18n';
import zhTW from '@vee-validate/i18n/dist/locale/zh_TW.json';

import App from './App.vue';
import router from './router';
// import Feedback from './components/FeedbackModal.vue';

defineRule('required', required);
defineRule('min', min);
defineRule('email', email);
configure({
  generateMessage: localize({ zh_TW: zhTW }), // 載入繁體中文語系
  velidateOnInput: true, // 當輸入任何內容直接進行驗證
});
setLocale('zh_TW');

const app = createApp(App);
app.use(router);
app.use(Loading);
app.use(VueAxios, axios);
app.component('Loading', Loading);
app.component('Form', Form);
app.component('Field', Field);
app.component('ErrorMessage', ErrorMessage);
app.mount('#app');
