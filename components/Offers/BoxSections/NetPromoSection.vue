<template>
  <v-row justify="center" align="center">
    <v-col cols="4" class="pl-0" style="z-index: 100">
      <img :src="netPromoImage" style="width: 90px;">
    </v-col>
    <v-col cols="8" class="mr-0 mb-2 pt-4 pb-2 pr-0 net-promo-background" align="center">
      <p v-html="netPromoText" class="net-promo-text" />
    </v-col>
  </v-row>
</template>

<script>
export default {
  props: {
    netPromoImage: {
      type: String,
      require: true
    },
    netPromoText: {
      type: String,
      require: true
    }
  }
}
</script>
