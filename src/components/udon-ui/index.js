import * as udAxios from '@/services/ud-axios'
import * as udUtils from '@/utils/ud-utils'
import * as udComponents from '@/components/udon-ui/ud-components'

const install = Vue => {
  Object.keys(udAxios).forEach(item => Vue.prototype[item] = udAxios[item]);
  Object.keys(udUtils).forEach(item => Vue.prototype[item] = udUtils[item]);
  Object.keys(udComponents).forEach(item => {
    item[0] === 'U' ? Vue.component(item, udComponents[item]) : Vue.prototype[item] = udComponents[item];
  });
}

export default install;