<template>
  <Header />
  <Navbar />
  <Sidenav title="Add New User" />
  <div class="container-fluid">
    <div class="card m-3" id="bidNav">
      <div class="card-body">
        <form @submit.prevent="handleSubmit">
          <div>
            <h5 class="fw-bold pb-3">New User Creation Request Form</h5>
            <div class="row" id="rowWrap">
              <div class="col-sm-4">
                <div class="row">
                  <label class="col-sm-4">Gender:</label>
                  <div class="col-sm-8">
                    <select class="form-select" v-model="event.gender">
                      <option
                        v-for="option in genders"
                        :value="option"
                        :key="option"
                        :selected="option === event.gender"
                      > {{ option }} </option>
                    </select>
                  </div>
                </div>
              </div>
              <div class="col-sm-4">
                <div class="row">
                  <label class="col-sm-4">User Permission Group:</label>
                  <div class="col-sm-8">
                    <select class="form-select" v-model="event.userGroup">
                        <option
                        v-for="option in userGroups"
                        :value="option"
                        :key="option"
                        :selected="option === event.userGroup"
                        > {{ option }} </option>
                    </select>
                  </div>
                </div>
              </div>
            </div>
            <div class="row" id="rowWrap">
              <div class="col-sm-4">
                <div class="row">
                  <formInputThree
                    v-model="event.lastName"
                    type="text"
                    label="Last Name:"
                  />
                </div>
              </div>
              <div class="col-sm-4">
                <div class="row">
                  <formInputThree
                    v-model="event.firstName"
                    type="text"
                    label="First Name:"
                  />
                </div>
              </div>
              <div class="col-sm-4">
                <div class="row">
                  <formInputThree
                    v-model="event.middleName"
                    type="text"
                    label="Middle Name:"
                  />
                </div>
              </div>
            </div>
            <div class="row" id="rowWrap">
              <div class="col-sm-4">
                <div class="row">
                  <formInputThree
                    v-model="event.telephone"
                    type="number"
                    label="Telephone:"
                  />
                </div>
              </div>
              <div class="col-sm-4">
                <div class="row">
                  <formInputThree
                    v-model="event.jobTitle"
                    type="text"
                    label="Job Title:"
                  />
                </div>
              </div>
              <div class="col-sm-4">
                <div class="row">
                  <formInputThree
                    v-model="event.manager"
                    type="text"
                    label="Manager:"
                  />
                </div>
              </div>
            </div>
            <div class="row" id="rowWrap">
              <div class="col-sm-4">
                <div class="row">
                  <formInputThree
                    v-model="event.requestBy"
                    type="text"
                    label="Requested By:"
                  />
                </div>
              </div>
              <div class="col-sm-4">
                <div class="row">
                  <formInputThree
                    v-model="event.userType"
                    type="text"
                    label="User Type:"
                  />
                </div>
              </div>
            </div>
            <div class="row" id="rowWrap">
              <div class="col-sm-4">
                <div class="row">
                  <formInputThree
                    v-model="event.companyMail"
                    type="email"
                    label="Company Email:"
                  />
                </div>
              </div>
              <div class="col-sm-4">
                <div class="row">
                  <formInputThree
                    v-model="event.companyName"
                    type="text"
                    label="Company Name:"
                  />
                </div>
              </div>
            </div>
            <div class="row" id="rowWrap">
              <div class="col-sm-4">
                <div class="row">
                  <formInputThree
                    v-model="event.userMail"
                    type="email"
                    label="User Email:"
                  />
                </div>
              </div>
              <div class="col-sm-4">
                <div class="row">
                  <formInputThree
                    v-model="event.companyID"
                    type="text"
                    label="Company ID:"
                  />
                </div>
              </div>
            </div>
          </div>
          <button class="btn btn-block my-3" id="rgbButton">Request User Creation</button>
        </form>
      </div>
    </div>
  </div>
</template>

<script>
import Header from '@/components/Header.vue'
import Navbar from '@/components/Navbar.vue'
import Sidenav from '@/components/SideNav.vue'
import formInputThree from '@/components/FormInputThree'
export default {
  name: 'new-profile',
  components: {
    Header,
    Navbar,
    Sidenav,
    formInputThree
  },
  data () {
    return {
      event: {
        lastName: '',
        firstName: '',
        middleName: '',
        telephone: '',
        jobTitle: '',
        manager: '',
        requestBy: '',
        userType: '',
        companyMail: '',
        companyName: '',
        userMail: '',
        companyID: '',
        gender: '',
        userGroup: ''
      },
      genders: [
        'Male',
        'Female'
      ],
      userGroups: ['']
    }
  },
  methods: {
    handleSubmit () {
      console.log('New User has been successfully created')
    }
  }

}
</script>

<style scoped>
#rowWrap {
  margin-top: 20px;
  padding-bottom: 20px;
}
select {
  background: rgb(218, 218, 218);
  border: 1px solid grey;
}
</style>
