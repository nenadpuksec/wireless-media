<template>
  <img :src="src" class="icon">
</template>

<script>
export default {
  props: {
    src: {
      type: String,
      require: true
    }
  }
}
</script>
