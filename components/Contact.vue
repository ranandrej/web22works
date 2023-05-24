<script setup>
import {ref} from "vue"
import axios from "axios"
import PopupMail from "../components/PopupMail.vue"
import Error from "./Error.vue";
const email=ref("")
const text=ref("")
const show=ref(false)
const showErr=ref(false)
const sendmail=()=>{
    if(email.value!="" && text.value!=""){ 
   axios.get("https://new-email-api.onrender.com/sendmail",{
    params:{
        param1:email.value,
        param2:text.value
    }
   }).then((response,err)=>{
    console.log(response)
    email.value=""
    text.value=""
    if(!err){ 
    show.value=true
    setTimeout(()=>{
        show.value=false
    },2500)
    }
   })
}else{
    showErr.value=true
    setTimeout(()=>{
        showErr.value=false
    },2500)

}
}

</script>
<template>
    <PopupMail v-if="show"/>
   <Error v-if="showErr"/>
<div class="form box">
    <h2><span>Contact us</span> if you have any questions</h2>
<input type="text" class="input is-primary is-rounded" placeholder="Your E-mail" v-model="email">
<textarea name="" id="" cols="30" rows="10" class="input is-primary" placeholder="Your question" v-model="text"></textarea>
<button class="button is-primary" @click="sendmail">Send</button>
</div>
</template>
<style scoped>
.form{
    max-width: 30%;
    margin: 0 auto;
    padding: 30px;
    margin-bottom: 40px;
    margin-top: 30px;
}
.form h2{
    color: rgb(60, 56, 56);
    margin-bottom: 20px;
    max-width: 100%;
    font-size: 25px;
    text-align: center;
}
.form input{
    margin-bottom: 20px;
}
.form textarea{
    margin-bottom: 20px;
    min-height: 200px;
    border-radius: 10px;
    padding: 10px;
}
.form span{
    color: #00d1b2;
}
@media screen and (max-width:600px){
    .form{
        max-width: 80%;
    }
}
</style>