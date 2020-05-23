<template>
  <v-row>
    <v-col cols="12" class="promo">
      <p v-if="isFeatured === 1" class="promo-promo-text">
        {{ promoTxt }}
      </p>
    </v-col>
  </v-row>
</template>

<script>
export default {
  props: {
    promoTxt: {
      type: String,
      require: true
    },
    isFeatured: {
      type: Number,
      require: true
    }
  }
}
</script>
