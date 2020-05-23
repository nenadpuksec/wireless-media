<template>
  <v-row class="net-section" justify="center" align="center">
    <v-col cols="3" class="pl-9" align="center" justify="center">
      <Icon :src="netImage" />
    </v-col>
    <v-col cols="9">
      <ul v-for="(k, index2) in netData" :key="index2">
        <li v-if="k.product_category === 'net'" v-html="replaceKeys(k.long_name, k.attributes.attribute_value)" class="included-text" />
      </ul>
    </v-col>
  </v-row>
</template>

<script>
import Icon from '../../UI/Icon'

export default {
  components: {
    Icon
  },
  props: {
    netImage: {
      type: String,
      require: true
    },
    netData: {
      type: Array,
      require: true
    }
  },
  methods: {
    replaceKeys (string, boldText) {
      const placeholder = '!!'
      let s = string.replace(new RegExp(/bold>/gi), placeholder)
      // const t = boldText
      if (boldText) { s = s.replace(new RegExp(boldText, 'gi'), '<' + placeholder + boldText + '</' + placeholder) }
      return s.replace(new RegExp(placeholder, 'g'), 'bold style="font-weight: 700">')
    }
  }
}
</script>
