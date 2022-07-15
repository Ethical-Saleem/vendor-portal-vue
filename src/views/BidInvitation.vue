<template>
  <Header />
  <Navbar />
  <Sidenav title="Bid Invitation" />
  <div class="container-fluid d-sm-flex">
    <div class="col-sm-3 h-100 my-3">
      <div class="card" id="bidNav">
        <div class="row pt-2">
          <bidCard
            cardTitle="Accepted"
            cardText="25"
          />
        </div>
        <div class="row pt-2">
          <bidCard
            cardTitle="Rejected"
            cardText="10"
          />
        </div>
        <div class="row pt-2">
          <bidCard
            cardTitle="Pending"
            cardText="5"
          />
        </div>
        <div class="row pt-2">
          <baseSelect
          class="base-select"
          label="Status"
          />
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import Header from '@/components/Header.vue'
import Navbar from '@/components/Navbar.vue'
import Sidenav from '@/components/SideNav.vue'
import bidCard from '@/components/BidCard.vue'
import baseSelect from '@/components/BaseSelect.vue'
export default {
  name: 'bid-invitation',
  components: {
    Header,
    Navbar,
    Sidenav,
    bidCard,
    baseSelect
  }
}
</script>

<style>
.base-select {
  width: 75%;
}
</style>
