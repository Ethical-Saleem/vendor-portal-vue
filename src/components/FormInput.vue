<template>
  <div class="row">
    <div class="col-4 col-sm-4 fw-bold">
      <label> {{ label }} </label>
    </div>
    <div class="col-8 col-sm-8">
      <input
        class="form-control"
        :value="modelValue"
        @input="$emit('update:modelValue', $event.target.value)"
        v-bind="$attrs"
      >
    </div>
  </div>
</template>

<script>
export default {
  props: {
    label: {
      type: String,
      default: ''
    },
    modelValue: {
      type: [String, Number],
      default: ''
    }
  }
}
</script>

<style>

</style>
