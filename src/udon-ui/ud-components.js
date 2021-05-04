import Vue from 'vue'
import UdAlert from './components/UdAlert'
import UdLoading from "./components/UdLoading"

// udAlert 呼叫方法
let udAlertExtend = Vue.extend(UdAlert);
let udAlert = options => {
  let udAlertInstance = new udAlertExtend();
  if(typeof options === 'string') {
    udAlertInstance.msg = options;
  }else if(typeof options === 'object') {
    Object.assign(udAlertInstance, options);
  }
  document.body.appendChild(udAlertInstance.$mount().$el);
  return udAlertInstance.show();
};
Vue.prototype.udAlert = udAlert;
export { udAlert }

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
Vue.prototype.udLoading = udLoading;
export { udLoading }