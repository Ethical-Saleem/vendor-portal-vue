<template>
  <Header />
  <Navbar />
  <Sidenav title="Change Password" />
  <div class="container-sm">
    <div class="col-sm-7 mx-auto">
      <div class="card" id="bidNav2">
        <div class="card-body">
          <div class="conatiner-sm m-5">
            <form>
              <div class="row">
                <formInput
                  v-model="event.oldPassword"
                  type="password"
                  label="Old Password:"
                  class="form-input"
                />
              </div>
              <div class="row">
                <formInput
                  v-model="event.newPassword"
                  type="password"
                  label="New Password:"
                  class="form-input"
                />
              </div>
              <div class="row">
                <formInput
                  v-model="event.confirmPassword"
                  type="password"
                  label="Confirm Password:"
                  class="form-input"
                />
              </div>
              <div class="my-4 mx-3">
                <button class="btn btn-block shadow" id="whiteButton">Back</button>
                <button class="btn btn-block mx-3 shadow" id="rgbButton" @click.prevent="handleSubmit">Save</button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import Header from '@/components/Header.vue'
import Navbar from '@/components/Navbar.vue'
import Sidenav from '@/components/SideNav.vue'
import formInput from '@/components/FormInput.vue'

export default {
  name: 'password-reset',
  components: {
    Header,
    Navbar,
    Sidenav,
    formInput
  },
  data () {
    return {
      event: {
        oldPassword: '',
        newPassword: '',
        confirmPassword: ''
      }
    }
  },
  methods: {
    handleSubmit () {
      console.log('Password has been successfully changed')
    }
  }
}
</script>

<style scoped>
.form-input {
    margin: 4px;
}
</style>
