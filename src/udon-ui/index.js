import { udAxios } from './ud-axios'
import * as udUtils from './ud-utils'
import * as udComponents from './components'

let install = Vue => {
  Vue.prototype.udAxios = udAxios;
  Object.keys(udUtils).forEach(item => Vue.prototype[item] = udUtils[item]);
  Object.keys(udComponents).forEach(item => Vue.component(item, udComponents[item]));
}

export default install;