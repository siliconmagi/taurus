import Vue from 'vue'
import Vuelidate from 'vuelidate'

if (process.BROWSER_BUILD) {
  Vue.use(Vuelidate)
}
