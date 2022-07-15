<template>
    <nav class="navbar navbar-expand-sm navbar-info m-0 p-0" id="secondNav">
      <button class="navbar-toggler text-white ms-auto" type="button" data-bs-toggle="collapse" data-bs-target="#sideNav"
          aria-controls="sideNav" aria-expanded="false" aria-label="Toggle side navigation">
          <i class="fa-solid fa-bars"></i>
      </button>
     <!-- <div class="container"> -->
      <div class="collapse navbar-collapse m-0 p-0" id="sideNav">
        <ul class="navbar-nav w-100 mx-3 d-flex flex-row justify-content-between" id="sideNav">
          <li class="nav-item"><router-link to="/" class="nav-link" id="sideNavLink"><small>DASHBOARD</small></router-link></li>
          <li class="nav-item"><router-link to="/request-for-quotes" class="nav-link" id="sideNavLink"><small>REQUEST FOR QUOTES</small></router-link></li>
          <li class="nav-item"><router-link to="/purchase-order" class="nav-link small" id="sideNavLink"><small>PURCHASE ORDER</small></router-link></li>
          <li class="nav-item"><router-link to="/complaint-resolve" class="nav-link small" id="sideNavLink"><small>ISSUE RESOLUTION</small></router-link></li>
          <li class="nav-item"><router-link to="/complaint-resolve" class="nav-link small" id="sideNavLink"><small>REPORT</small></router-link></li>
          <li class="nav-item"><router-link to="/profile" class="nav-link small" id="sideNavLink"><small>PROFILE</small></router-link></li>
        </ul>
      </div>
    </nav>
</template>

<script>
export default {
  name: 'nav-bar'
}
</script>

<style>

</style>
