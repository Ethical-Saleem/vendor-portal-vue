<template>
  <label class="col-sm-4"> {{ label }} </label>
  <div class="col-sm-8">
    <input
      class="form-control"
      :value="modelValue"
      @input="$emit('update:modelValue', $event.target.value)"
      v-bind="$attrs"
    >
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

<style scoped>
input {
  background: rgb(218, 218, 218);
  border: 1px solid grey;
}
</style>
