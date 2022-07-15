<template>
  <label> {{ label }}</label>
  <input
    class="form-control my-2"
    :placeholder="placeholder"
    :value="modelValue"
    @input="$emit('update:modelValue', $event.target.value)"
    v-bind="$attrs"
  >
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
    },
    placeholder: {
      type: String,
      default: ''
    }
  }

}
</script>

<style>
::placeholder {
  font-size: 14px;
  color: rgb(234, 234, 234);
}
</style>
