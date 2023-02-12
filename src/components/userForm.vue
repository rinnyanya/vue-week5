<template>
    <Form v-slot="{ errors }" @submit="onSubmit">
        
        <div>
            <label for="phone" class="form-label">姓名</label>
            <Field id="name" 
            name="姓名" 
            type="text" 
            class="form-control"  
            placeholder="請輸入姓名" 
            rules="required"  
            v-model="user.name" 
            :class="{ 'is-invalid': errors.姓名 }"/>
            <error-message name="姓名" class="invalid-feedback"></error-message>
        </div>

        <div>
            <label for="phone" class="form-label">e-mail</label>
           

            <Field id="email" 
            name="email" 
            type="email" 
            class="form-control"  
            placeholder="請輸入email" 
            rules="required|email"  
            v-model="user.email" 
            :class="{ 'is-invalid': errors.email }"/>
        
            <error-message name="email" class="invalid-feedback" ></error-message>
        </div>

        <div>
            <label for="phone" class="form-label">電話</label>

            <Field id="phone" name="電話" type="text" class="form-control" :class="{ 'is-invalid': errors['電話'] }"
                placeholder="請輸入電話" :rules="isPhone" v-model="user.phone" />
            <error-message name="電話" class="invalid-feedback"></error-message>
        </div>

        <button type="onSubmit" class="btn btn-primary"  >按我</button>

    </Form>

    <loading v-model:active="isLoading"></loading>
                 
               
</template>

<script>
import { defineRule, Form, Field, ErrorMessage, configure } from 'vee-validate'
import { required, email } from '@vee-validate/rules'
import { localize, setLocale } from '@vee-validate/i18n'
import zhTW from '@vee-validate/i18n/dist/locale/zh_TW.json'

import Loading from 'vue-loading-overlay';
import 'vue-loading-overlay/dist/css/index.css';


defineRule('required', required)
defineRule('email', email)

configure({ 
    generateMessage: localize({ zh_TW: zhTW }), 
    validateOnInput: true 
})

setLocale('zh_TW')

export default {
    data() {
        return {
            isLoading: false,
            user: {
                name: '',
                tel: '',
                email: ''
            }
        }
    },
    components: {
        Form,
        Field,
        ErrorMessage,
        Loading
        
    },
    methods: {
        onSubmit() {
            console.log(this.user)
        },
        isPhone(value) {
            const phoneNumber = /^(09)[0-9]{8}$/
            return phoneNumber.test(value) ? true : '需為正確的電話號碼'
        }
    },
};

</script>