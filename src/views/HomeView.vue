<template>
  <Header></Header>
  <Navbar></Navbar>
  <div class="container-fluid-sm mx-3">
    <h4 class="px-1 mt-1"> Activity Cues</h4>
    <div class="row px-1">
      <div class="col-sm-8">
        <div class="row">
          <div class="col-6 col-sm-3" id="col">
            <Card id="cardOne">
              <h5 class="card-title"><i class="fa-solid fa-file-pen"></i> 54</h5>
              <p class="card-text">Quotes</p>
              <router-link to="/request-for-quotes" class="stretched-link"></router-link>
            </Card>
          </div>
          <div class="col-6 col-sm-3" id="col">
            <Card id="cardTwo">
              <h5 class="card-title"><i class="fa-solid fa-triangle-exclamation"></i> 54</h5>
              <p class="card-text">Pending Quotes</p>
              <router-link to="/request-for-quotes" class="stretched-link"></router-link>
            </Card>
          </div>
          <div class="col-6 col-sm-3" id="col">
            <Card id="cardThree">
              <h5 class="card-title"><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-check-circle">
                <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"></path><polyline points="22 4 12 14.01 9 11.01"></polyline></svg> 54</h5>
              <p class="card-text">Approved Quotes</p>
              <router-link to="/request-for-quotes" class="stretched-link"></router-link>
            </Card>
          </div>
          <div class="col-6 col-sm-3" id="col">
            <Card id="cardFour">
              <h5 class="card-title"><i class="fa-solid fa-circle-xmark"></i> 54</h5>
              <p class="card-text">Rejected Quotes</p>
              <router-link to="/request-for-quotes" class="stretched-link"></router-link>
            </Card>
          </div>
        </div>
        <div class="row">
          <div class="col-6 col-sm-3" id="col">
            <Card id="cardOne">
              <h5 class="card-title"><i class="fa-solid fa-folder"></i> 54</h5>
              <p class="card-text">Purchase Orders</p>
              <router-link to="/purchase-order" class="stretched-link"></router-link>
            </Card>
          </div>
          <div class="col-6 col-sm-3" id="col">
            <Card id="cardTwo">
              <h5 class="card-title"><i class="fa-solid fa-folder-open"></i> 54</h5>
              <p class="card-text">Opened Purchase Orders</p>
              <router-link to="/purchase-order" class="stretched-link"></router-link>
            </Card>
          </div>
          <div class="col-6 col-sm-3" id="col">
            <Card id="cardThree">
              <h5 class="card-title"><i class="fa-solid fa-file-circle-check"></i> 54</h5>
              <p class="card-text">Accepted Purchase Orders</p>
              <router-link to="/purchase-order" class="stretched-link"></router-link>
            </Card>
          </div>
          <div class="col-6 col-sm-3" id="col">
            <Card id="cardFour">
              <h5 class="card-title"><i class="fa-solid fa-file-circle-xmark"></i> 54</h5>
              <p class="card-text">Closed Purchase Orders</p>
              <router-link to="/purchase-order" class="stretched-link"></router-link>
            </Card>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import Header from '@/components/Header.vue'
import Navbar from '@/components/Navbar.vue'
import Card from '@/components/CardDetails.vue'
export default {
  name: 'HomeView',
  components: {
    Header,
    Navbar,
    Card
  }
}
</script>
