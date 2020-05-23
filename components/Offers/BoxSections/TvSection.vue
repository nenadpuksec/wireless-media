<template>
  <v-row class="tv-section" justify="center" align="center">
    <v-col cols="3" class="pa-9" align="center" justify="center">
      <Icon :src="tvImage" />
    </v-col>
    <v-col cols="9" align="start" justify="start">
      <ul v-for="(i, index) in tvData" :key="index">
        <li v-if="i.product_category === 'tv'" v-html="replaceKeys(i.long_name, i.attributes.attribute_value)" class="included-text" />
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
    tvImage: {
      type: String,
      require: true
    },
    tvData: {
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
