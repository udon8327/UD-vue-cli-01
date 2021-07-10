import * as udAxios from '@/services/ud-axios'
import * as udUtils from '@/utils/ud-utils'
import * as udCalls from '@/components/udon-ui/ud-calls'
import * as udComponents from '@/components/udon-ui/ud-components'

const install = Vue => {
  Object.keys(udAxios).forEach(item => Vue.prototype[item] = udAxios[item]);
  Object.keys(udUtils).forEach(item => Vue.prototype[item] = udUtils[item]);
  Object.keys(udCalls).forEach(item => Vue.prototype[item] = udCalls[item]);
  Object.keys(udComponents).forEach(item => Vue.component(item, udComponents[item]));
}

export default install;