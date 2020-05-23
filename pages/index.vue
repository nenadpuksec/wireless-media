<template>
  <v-app>
    <v-layout column justify-center align-center>
      <v-flex>
        <v-container id="dropdown-example" fluid>
          <v-row>
            <v-col
              md="3"
              offset-md="9"
              class="dropdown-style"
            >
              <v-select
                v-model="preselectedContract"
                :items="allContract"

                return-object
                solo
              />
            </v-col>
          </v-row>
          <ListBox :selectedBox="preselectedContract" />
        </v-container>
      </v-flex>
    </v-layout>
  </v-app>
</template>

<script>
import Axios from 'axios'
import ListBox from '../components/Offers/ListBox'

export default {
  // title: 'Box paketi',
  components: {
    ListBox
  },
  data () {
    return {
      allContract: [],
      preselectedContract: ''
    }
  },
  beforeCreate () {
    Axios.get('http://www.mocky.io/v2/5e8465c23000008400cf4395')
      .then((res) => {
        const allBoxType = res.data.contract_length.contract_length_options
        this.allContract = allBoxType
        this.preselectedContract = res.data.contract_length.preselected_contract_length
      })
      .catch(error => console.log(error))
  }
}
</script>
