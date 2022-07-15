<template>
  <Header />
  <Navbar />
  <Sidenav title="Purchase Order" />
</template>

<script>
import Header from '@/components/Header.vue'
import Navbar from '@/components/Navbar.vue'
import Sidenav from '@/components/SideNav.vue'
export default {
  name: 'purchase-order',
  components: {
    Header,
    Navbar,
    Sidenav
  }
}
</script>

<style>

</style>
