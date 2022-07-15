<template>
  <div class="card mx-auto" id="bidCard">
    <div class="card-body">
      <h5 class="card-title">{{ cardTitle }}</h5>
      <p class="card-text">{{cardText }}</p>
    </div>
  </div>
</template>

<script>
export default {
  props: [
    'cardTitle',
    'cardText'
  ]

}
</script>

<style scoped>
.card {
  width: 75%;
}
#bidCard {
  background: rgb(9, 168, 197);
  color: white;
}
</style>
