<template>
  <Header />
  <Navbar />
  <Sidenav title="Personal Information" />
  <div class="container-fluid">
    <div class="card m-3" id="bidNav">
      <div class="card-body">
        <form @submit.prevent="handleSubmit">
        <div>
          <h5 class="mb-3">Personal Details</h5>
          <div class="row pb-2" id="main">
            <div class="col-sm-6">
              <div class="row">
                <label class="col-sm-3 mb-2">User no.:</label>
                <div class="col-sm-9 mb-2">
                  <input type="text" class="form-control" v-model="userNo">
                </div>
                <label class="col-sm-3 mb-2">First Name:</label>
                <div class="col-sm-9 mb-2">
                  <input type="text" class="form-control" v-model="firstName">
                </div>
                <label class="col-sm-3 mb-2">Date of Birth:</label>
                <div class="col-sm-9 mb-2">
                  <input type="text" class="form-control" v-model="birthDate">
                </div>
              </div>
            </div>
            <div class="col-sm-6">
              <div class="row">
                <label class="col-sm-3 mb-2">Last Name:</label>
                <div class="col-sm-9 mb-2">
                  <input type="text" class="form-control" v-model="lastName">
                </div>
                <label class="col-sm-3 mb-2">Middle Name:</label>
                <div class="col-sm-9 mb-2">
                  <input type="text" class="form-control" v-model="middleName">
                </div>
                <label class="col-sm-3 mb-2">Gender:</label>
                <div class="col-sm-9 mb-2">
                  <input type="text" class="form-control" v-model="gender">
                </div>
              </div>
            </div>
          </div>
          <div class="row pb-2" id="main">
            <div class="col-sm-6">
              <div class="row">
                <label class="col-sm-3 mb-2">Job Title:</label>
                <div class="col-sm-9 mb-2">
                  <input type="text" class="form-control" v-model="jobTitle">
                </div>
                <label class="col-sm-3 mb-2">Cadre:</label>
                <div class="col-sm-9 mb-2">
                  <input type="text" class="form-control" v-model="cadre">
                </div>
              </div>
            </div>
            <div class="col-sm-6">
              <div class="row">
                <label class="col-sm-3 mb-2">Designation:</label>
                <div class="col-sm-9 mb-2">
                  <input type="text" class="form-control" v-model="designation">
                </div>
              </div>
            </div>
          </div>
          <div class="row pb-2" id="main">
            <div class="col-sm-6">
              <div class="row">
                <label class="col-sm-3 mb-2">Personal Email:</label>
                <div class="col-sm-9 mb-2">
                  <input type="text" class="form-control" v-model="email">
                </div>
                <label class="col-sm-3 mb-2">Mobile Number:</label>
                <div class="col-sm-9 mb-2">
                  <input type="text" class="form-control" v-model="mobileNumber">
                </div>
                <label class="col-sm-3 mb-2">Address 2:</label>
                <div class="col-sm-9 mb-2">
                  <input type="text" class="form-control" v-model="addressTwo">
                </div>
                <label class="col-sm-3 mb-2">Post Code:</label>
                <div class="col-sm-9 mb-2">
                  <input type="text" class="form-control" v-model="postCode">
                </div>
              </div>
            </div>
            <div class="col-sm-6">
              <div class="row">
                <label class="col-sm-3 mb-2">Phone Number:</label>
                <div class="col-sm-9 mb-2">
                  <input type="text" class="form-control" v-model="phoneNumber">
                </div>
                <label class="col-sm-3 mb-2">Address 1:</label>
                <div class="col-sm-9 mb-2">
                  <input type="text" class="form-control" v-model="addressOne">
                </div>
                <label class="col-sm-3 mb-2">City:</label>
                <div class="col-sm-9 mb-2">
                  <input type="text" class="form-control" v-model="city">
                </div>
                <label class="col-sm-3 mb-2">Company ID:</label>
                <div class="col-sm-9 mb-2">
                  <input type="text" class="form-control" v-model="companyIdentity">
                </div>
              </div>
            </div>
          </div>
        </div>
        <button class="btn btn-block my-2">Save</button>
        </form>
      </div>
    </div>
  </div>
</template>

<script>
import Header from '@/components/Header.vue'
import Navbar from '@/components/Navbar.vue'
import Sidenav from '@/components/SideNav.vue'

export default {
  name: 'user-profile',
  components: {
    Header,
    Navbar,
    Sidenav
  },
  data () {
    return {
      userNo: '',
      birthDate: '',
      firstName: '',
      lastName: '',
      middleName: '',
      gender: '',
      jobTitle: '',
      cadre: '',
      designation: '',
      email: '',
      mobileNumber: '',
      addressTwo: '',
      postCode: '',
      city: '',
      phoneNumber: '',
      addressOne: '',
      companyIdentity: ''
    }
  },
  methods: {
    handleSubmit () {
      console.log('Profile Updated')
    }
  }
}
</script>

<style scoped>
#main {
    margin-bottom: 4px;
    margin-top: 2px;
}
input {
    background: rgb(218, 218, 218);
    border: 1px solid grey;
}
button {
    background: rgb(9, 168, 197);
    color: white;
}
button:hover {
    background: white;
    color: rgb(9, 168, 197);
}
</style>
