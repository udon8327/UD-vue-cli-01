import Vue from 'vue'
import { UdAlert, UdLoading } from './components'

// udAlert 呼叫方法
let udAlertExtend = Vue.extend(UdAlert);
let udAlert = options => {
  let udAlertInstance = new udAlertExtend();
  typeof options === 'string' ? udAlertInstance.msg = options : Object.assign(udAlertInstance, options);
  document.body.appendChild(udAlertInstance.$mount().$el);
  return udAlertInstance.show();
};

// udLoading 呼叫方法
let udLoadingExtend = Vue.extend(UdLoading);
let udLoadingFn;
let udLoading = {
  open: (options = {}) => {
    udLoadingFn = new udLoadingExtend({
      el: document.createElement("div"),
      data() { return options }
    })
    if(udLoadingFn.fixed) document.body.style.overflowY = 'hidden';
    document.body.appendChild(udLoadingFn.$el);
  },
  close: () => udLoadingFn.destroy()
};

export { 
  udLoading,
  udAlert
}