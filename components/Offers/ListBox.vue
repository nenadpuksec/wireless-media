<template>
  <v-row
    md="4"
    sm="12"
    xs="12"
    style="margin-left: -28px !important"
  >
    <div
      v-for="(i, index) in allData.items"
      :key="index"
      style="margin: 0px auto !important"
    >
      <MainBox
        :singleData="i"
        :promoText="allData.promo_text"
        :netCategory="allData.assets.net_category"
        :tvCategory="allData.assets.tv_category"
        :selectedBoxType="selectedBox"
      />
    </div>
  </v-row>
</template>

<script>
import { mapState } from 'vuex'
import MainBox from '../../components/Offers/MainBox'

export default {
  components: {
    MainBox
  },
  props: {
    selectedBox: {
      type: String,
      require: true
    }
  },
  created () {
    this.$store.dispatch('fetchAll')
  },
  computed: {
    ...mapState([
      'allData'
    ])
  }
}
</script>
