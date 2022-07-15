<template>
    <nav class="navbar navbar-expand-sm navbar-secondary" id="bidNav">
        <div class="container-fluid">
          <div class="container-fluid me-auto my-2">
            <span class="navbar-text text-dark fw-bold"> {{ title }}</span>
          </div>
        </div>
    </nav>
</template>

<script>
export default {
  name: 'side-nav',
  props: ['title']
}
</script>

<style>

</style>
