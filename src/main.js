import { createApp } from 'vue'
import { createPinia } from 'pinia'
import axios from 'axios'
import VueAxios from 'vue-axios'
import 'bootstrap';

// import { defineRule, Form, Field, ErrorMessage, configure } from "vee-validate";
// import AllRules from '@vee-validate/rules';

// // import { required, email, min } from '@vee-validate/rules'
// import { localize, setLocale } from '@vee-validate/i18n'
// import zhTW from '@vee-validate/i18n/dist/locale/zh_TW.json'



import App from './App.vue'
import router from './router'

// Object.keys(AllRules).forEach(rule => {
//   defineRule(rule, AllRules[rule]);
// });


// // defineRule('required', required)
// // defineRule('email', email)
// // defineRule('min', min)
// configure({
//   // Generates an English message locale generator
//   generateMessage: localize({ zh_TW: zhTW }),
//   validateOnInput: true
// })
// setLocale('zh_TW')

const app = createApp(App)

app.use(createPinia())
app.use(router)
app.use(VueAxios, axios)

// app.component('VForm', Form);
// app.component('VField', Field);
// app.component('ErrorMessage', ErrorMessage);

app.mount('#app')
