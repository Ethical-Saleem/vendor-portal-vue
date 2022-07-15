<template>
  <div class="container-fluid h-100">
    <div class="row d-flex justify-content-center align-items-center h-100">
      <div class="col-md-6 align-items-center justify-content-center h-100 mx-auto" id="welcomeCol">
        <div class="col-6 col-sm-6 text-align-center justify-content-center mx-auto" id="imgCol">
          <img :src="image" class="img-fluid" alt="Sample image">
          <div class="text-center text-white">
            <h3 class="col-text text-white mx-auto text-align-center" id="colText"> {{ greeting }} </h3>
            <p class="col-text text-white mx-auto fw-light"> {{ welcomeText }} </p>
          </div>
        </div>
      </div>
      <div class="col-md-6 col-lg-6 col-xl-6 h-100">
        <div class="col col-8 mx-auto" id="formCol">
          <form>
            <p class="lead fw-bold mb-0 me-3">{{ title }}</p> <br>
            <p class="mb-0 me-3">{{ instruction }}</p> <br>
            <div class="form-outline">
              <formInputTwo
               v-model="userMail"
               type="email"
               label="Email Address*"
               placeholder="Enter email address"
              />
            </div>
            <router-link to="/" class="btn btn-block text-center w-100">Reset Password</router-link>
          </form>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import formInputTwo from '@/components/FormInputTwo.vue'
export default {
  name: 'forget-password',
  components: {
    formInputTwo
  },
  data () {
    return {
      /* image: require('@/assets/Capture.PNG'), */
      greeting: 'Welcome Back',
      welcomeText: 'Just a couple of clicks and you are in',
      title: 'Reset Password',
      instruction: 'Enter the email address associated to your account, and we\'ll send you a link to reset your password',
      userMail: ''
    }
  }
}
</script>

<style>
html, body {
    height: 100%;
    width: 100%;
    overflow: hidden;
}
#welcomeCol {
    background: rgb(9, 168, 197);
}
#imgCol {
    padding-top: 25%;
    padding-bottom: 50%;
}
img {
    height: 400px;
    width: 300px;
    display: block;
    margin: auto;
    /*padding-top: 300px;*/
}
#formCol {
    padding-top: 25%;
    padding-bottom: 50%;
    padding-right: 50px;
}
#colText {
    margin: auto;
}
.col-text {
    margin: auto;
    display: block;
}
form a {
    text-decoration: none;
    font-size: 12px;
}
a:hover {
    text-decoration: none;
}
.btn.btn-block {
    border-radius: 5px;
    background-color:rgb(9, 168, 197);
    color: white;
}
.btn.btn-block:hover {
    background-color: white;
    border-color:rgb(9, 168, 197);
    color: rgb(9, 168, 197);
}
</style>
