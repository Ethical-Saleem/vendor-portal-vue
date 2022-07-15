<template>
  <Header />
  <Navbar />
  <Sidenav title="Complaint Form" />
  <div class="container-fluid">
    <div class="card m-3" id="bidNav">
      <div class="card-body">
        <div class="col-8 mx-auto">
          <form>
            <div class="mb-3">
              <p class="lead mb-2 me-3">
                Please fill out the following form with your complaint.
                We will review your request and follow up with you as soon as possible.
              </p>
              <div class="row">
                <div class="col">
                  <formInputTwo
                    v-model="event.firstName"
                    type="text"
                    label="First Name"
                    placeholder="First Name"
                />
                </div>
                <div class="col">
                  <formInputTwo
                    v-model="event.lastName"
                    type="text"
                    label="Last Name"
                    placeholder="Last Name"
                />
                </div>
              </div>
              <div>
                <formInputTwo
                    v-model="event.email"
                    type="email"
                    label="Email Address"
                    placeholder="Email Address"
                />
              </div>
              <div>
                <formInputTwo
                    v-model="event.phoneNumber"
                    type="number"
                    label="Phone Number"
                    placeholder="Phone Number"
                />
              </div>
              <div>
                <label class="my-2">Reason for Complaint</label>
                <select class="form-select" v-model="event.complaint">
                  <option
                    class="option"
                    v-for="option in complaints"
                    :value="option"
                    :key="option"
                    :selected="option === event.complaint"
                  > {{ option }} </option>
                </select>
              </div>
              <div>
                <label class="my-2">Please provide more details</label>
                <textarea class="form-control" cols="30" rows="8" v-model="textArea"></textarea>
              </div>
              <div class="my-4">
                <button class="btn btn-block shadow" id="rgbButton" @click.prevent="handleSubmit">Submit</button>
                <button class="btn btn-block mx-3 shadow" id="whiteButton" @click.prevent="cancelForm">Cancel</button>
              </div>
            </div>
          </form>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import Header from '@/components/Header.vue'
import Navbar from '@/components/Navbar.vue'
import Sidenav from '@/components/SideNav.vue'
import formInputTwo from '@/components/FormInputTwo.vue'
export default {
  name: 'complaint-resolve',
  components: {
    Header,
    Navbar,
    Sidenav,
    formInputTwo
  },
  data () {
    return {
      textArea: '',
      event: {
        firstName: '',
        lastName: '',
        email: '',
        phoneNumber: '',
        complaint: ''
      },
      complaints: [
        'Late Supply',
        'Payment Issue',
        'Product Quality',
        'Others'
      ]
    }
  },
  methods: {
    handleSubmit () {
      console.log('Complaint successfully submitted')
    },
    cancelForm () {
      console.log('Cancelled')
    }
  }
}
</script>

<style scoped>
p {
    font-size: 16px;
}
::placeholder {
    font-size: 14px;
}
.option {
    width: 100%;
    background: rgb(218, 218, 218);
}
</style>
