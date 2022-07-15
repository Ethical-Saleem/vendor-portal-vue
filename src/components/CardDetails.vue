<template>
    <div class="card" id="card1" style="height:103px;">
      <div class="card-body">
        <slot></slot>
      </div>
    </div>
</template>

<script>
export default {
  name: 'card-details',
  props: ['cardText']
}
</script>

<style>

</style>
