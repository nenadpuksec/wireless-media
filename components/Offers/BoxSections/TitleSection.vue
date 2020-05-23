<template>
  <v-container bg fill-height grid-list-md text-xs-center>
    <v-layout row wrap align-center class="box-title-main">
      <v-flex class="box-title">
        {{ title }}
      </v-flex>
    </v-layout>
  </v-container>
</template>

<script>
export default {
  props: {
    title: {
      type: String,
      require: true
    }
  }
}
</script>
