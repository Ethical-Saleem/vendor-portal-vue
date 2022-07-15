<template>
  <label class="my-2 mx-auto">{{ label }}</label>
  <select class="form-select mx-auto" v-model="selectOption">
    <option
    class="option"
    v-for="option in selectOptions"
    :value="option"
    :key="option"
    :selected="option === selectOption"
    > {{ option }} </option>
  </select>
</template>

<script>
export default {
  props: {
    label: {
      type: String,
      default: ''
    }
  },
  data () {
    return {
      selectOption: '',
      selectOptions: ['']
    }
  }
}
</script>

<style>
.form-select {
  width: 75%;
}
</style>
