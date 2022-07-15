<template>
    <nav class="navbar navbar-expand-sm navbar-dark bg-dark m-0 p-0" id="firstNav">
      <!-- Container wrapper -->
      <div class="container-fluid">
        <div class="container-fluid me-auto">
          <span class="navbar-brand text-white"><i class="fa-solid fa-house"></i></span>
          <span class="navbar-text text-white">VENDOR PORTAL</span>
          <button class="navbar-toggler text-white ms-auto" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
          <i class="fa-solid fa-bars"></i>
        </button>
        </div>
        <!-- Collapsible wrapper -->
        <div class="collapse navbar-collapse w-50" id="navbarSupportedContent">
          <!-- Right links -->
          <ul class="navbar-nav ms-auto d-flex flex-row w-100 mt-lg-0" id="firstList">
            <li class="nav-item dropdown text-center mx-lg-1" id="navItem">
                <a class="nav-link dropdown-toggle text-white" href="#" id="navbarDropdown" role="button" data-bs-toggle="dropdown"
                aria-expanded="false">
                <i class="fa-solid fa-circle-plus"></i>
                </a>
                <!-- Dropdown menu -->
                <ul class="dropdown-menu dropdown-menu-dark dropdown-menu-center border p-1" aria-labelledby="navbarDropdown" style="width:99%">
                  <small><li>
                    <a class="dropdown-item" href="#" type="button" data-bs-toggle="modal" data-bs-target="#navbarModal">
                      Waybill</a>
                  </li></small>
                  <small><li>
                    <a class="dropdown-item btn" href="#" type="button" data-bs-toggle="modal" data-bs-target="#navbarModal">
                      Invoice</a>
                  </li></small>
                  <small><li>
                    <a class="dropdown-item btn" href="#" type="button" data-bs-toggle="modal" data-bs-target="#navbarModal">
                      Payment Receipt</a>
                  </li></small>
                  <small><li>
                    <a href="#" class="dropdown-item btn" type="button" data-bs-toggle="modal" data-bs-target="#navbarModal">
                      Certificate of Completion</a>
                  </li></small>
                  <li><router-link to="/add-new-user" class="dropdown-item"><small>add new user</small></router-link></li>
                </ul>
            </li>
            <li class="nav-item text-center mx-lg-1" id="navItem">
                <a class="nav-link text-white" href="notifications.html">
                <i class="fas fa-bell fa-lg mb-1"></i>
                </a>
            </li>
            <li class="nav-item dropdown text-center mx-lg-1 text-white" id="navItem">
                <a class="nav-link dropdown-toggle text-white" href="#" id="navbarDropdown" role="button" data-bs-toggle="dropdown"
                    aria-expanded="false">
                <i class="fa-solid fa-user"></i>
                </a>
                <ul class="dropdown-menu dropdown-menu-dark dropdown-menu-center" aria-labelledby="navbarDropdown" style="width:99%;">
                <li><small><a class="dropdown-item" href="companyProfile.html">Company Profile</a></small></li>
                <li><small><router-link to="/profile" class="dropdown-item">User Profile</router-link></small></li>
                <li><small><router-link to="/password-reset" class="dropdown-item">Change Password</router-link></small></li>
                <li><small><router-link to="/login" class="dropdown-item">Sign Out</router-link></small></li>
                </ul>
            </li>
          </ul>
        </div>
        <!-- Collapsible wrapper -->
      </div>
      <!-- Container wrapper -->
    </nav>
</template>

<script>
export default {
  name: 'Header-comp'
}
</script>

<style>

</style>
