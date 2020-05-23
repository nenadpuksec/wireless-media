<template>
  <v-col
    ref="mainBox"
    cols="12"
    md="4"
    sm="12"
    xs="12"
  >
    <v-card
      v-bind:style="{ 'margin-top': marginTop, 'margin-bottom' : marginBottom }"
      class="mx-auto my-12 box"
      max-width="374"
      style="width: 340px; border-radius: 10px; box-shadow: none"
    >
      <PromoSection v-if="singleData.is_featured === 1" :promoTxt="promoText" :isFeatured="singleData.is_featured" />
      <v-divider v-if="singleData.is_featured === 1" class="mx-4" />
      <TitleSection :title="singleData.name" />
      <v-divider class="mx-4" />
      <TvSection
        :tvImage="tvCategory"
        :tvData="singleData.included"
      />
      <v-divider class="mx-4" />
      <NetSection
        :netImage="netCategory"
        :netData="singleData.included"
      />
      <NetPromoSection
        v-if="singleData.promotions[0].discount_variations == selectedBoxType"
        :netPromoImage="singleData.promotions[0].promotion_image"
        :netPromoText="singleData.promotions[0].promo_text"
      />
      <v-divider class="mx-4" />
      <PriceSection
        :oldPrice="singleData.prices.old_price_recurring[selectedBoxType]"
        :currentPrice="singleData.prices.price_recurring[selectedBoxType]"
        :promoPriceText="singleData.prices.old_price_promo_text"
      />
    </v-card>
  </v-col>
</template>

<script>
import PromoSection from '../Offers/BoxSections/PromoSection'
import TitleSection from '../Offers/BoxSections/TitleSection'
import TvSection from '../Offers/BoxSections/TvSection'
import NetSection from '../Offers/BoxSections/NetSection'
import NetPromoSection from '../Offers/BoxSections/NetPromoSection'
import PriceSection from '../Offers/BoxSections/PriceSection'

export default {
  components: {
    PromoSection,
    TitleSection,
    TvSection,
    NetSection,
    NetPromoSection,
    PriceSection
  },
  props: [
    'singleData',
    'promoText',
    'netCategory',
    'tvCategory',
    'selectedBoxType'
  ],
  data () {
    return {
      marginTop: '',
      marginBottom: '',
      tvHeight: ''
    }
  },
  mounted () {
    this.addMargin()
  },
  methods: {
    addMargin () {
      if (this.singleData.is_featured === 0) {
        if (this.$refs.mainBox.clientWidth !== 364) {
          console.log(this.$refs.mainBox.clientWidth)
          this.marginTop = '100px !important'
        } else {
          this.marginTop = '30px !important'
          this.marginBottom = '0px !important'
        }
      }
    }
  }
}
</script>
