<template>
  <div>
    <v-row v-if="oldPrice.length > 0" class="old-price-section" justify="center" align="center">
      <v-col class="price-height" cols="6" align="center" justify="center">
        <p class="old-price">
          <del>{{ Math.round(oldPrice) }} rsd/mes.</del>
        </p>
      </v-col>
      <v-col class="price-height" cols="6" align="start" justify="center">
        <p class="current-price">
          {{ Math.round(currentPrice) }} rsd/mes.
        </p>
      </v-col>
      <v-col class="price-height" cols="12" align="center" justify="center">
        <p v-html="promoPriceText" class="price-promo-text" />
      </v-col>
    </v-row>

    <v-row v-else class="current-price-section">
      <v-col cols="12" align="center" justify="center">
        <p class="current-price">
          {{ Math.round(currentPrice) }} rsd/mes.
        </p>
      </v-col>
    </v-row>

    <v-row>
      <v-col class="mb-6" cols="12" align="center" justify="center">
        <Button value="Narucite" />
      </v-col>
    </v-row>
  </div>
</template>

<script>
import Button from '../../UI/Button'

export default {
  components: {
    Button
  },
  props: {
    oldPrice: {
      type: String,
      require: true
    },
    currentPrice: {
      type: String,
      require: true
    },
    promoPriceText: {
      type: String,
      require: true
    }
  }
}
</script>
