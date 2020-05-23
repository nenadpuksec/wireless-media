<template>
  <v-btn class="main-button">
    {{ value }}
  </v-btn>
</template>

<script>
export default {
  props: {
    value: {
      type: String,
      require: true
    }
  }
}
</script>
