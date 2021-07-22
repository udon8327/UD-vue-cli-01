/*
==================== Vue組件庫(Basic)目錄 ====================
Form
  Button 按鈕 -----> ud-button
  Input 輸入框 -----> ud-input
  Textarea 多行輸入框 -----> ud-textarea
  Radio 單選框 -----> ud-radio
  Checkbox 多選框 -----> ud-checkbox
  Select 下拉框 -----> ud-select
  SelectMultiple 下拉多選框 -----> ud-select-multiple
  SelectLink 連動下拉框 -----> ud-select-link
  SelectDate 日期連動下拉框 -----> ud-select-date
  SelectTwzip 台灣行政區連動下拉框 -----> ud-select-twzip
  Switch 開關 -----> ud-switch
  DatePicker 日期選擇器 -----> ud-date-picker
  Captcha 圖形驗證碼 -----> ud-captcha
  FormItem 表單驗證容器 -----> ud-form-item
  Form 表單驗證 -----> ud-form

Layout
  Flex 通用排版容器 -----> ud-flex
  Arrow CSS箭頭 -----> ud-arrow
  Collapse 摺疊容器 -----> ud-collapse
  Ratio 等比例自適應容器 -----> ud-ratio

Notice
  Alert 警告彈窗 -----> ud-alert
  Modal 通用彈窗 -----> ud-modal
  Loading 載入中 -----> ud-loading

Tools
  Html 用戶自定義訊息 -----> ud-html
  Backtop 回到頂部 -----> ud-backtop
  Ellipsis 文字省略 -----> ud-ellipsis
  Phone 撥打電話 -----> ud-phone
  Countdown 倒數計時 -----> ud-countdown
  QrCode 取得QRcode圖片 -----> ud-qrcode
*/

import Vue from 'vue'
import udAxios from '@/services/ud-axios'
import * as udUtils from '@/utils/ud-utils'

import UdAlert from './UdAlert'
import UdArrow from './UdArrow'
import UdBacktop from './UdBacktop'
import UdButton from "./UdButton"
import UdCaptcha from "./UdCaptcha"
import UdCheckbox from "./UdCheckbox"
import UdCollapse from "./UdCollapse"
import UdCountdown from "./UdCountdown"
import UdDatePicker from "./UdDatePicker"
import UdEllipsis from "./UdEllipsis"
import UdFlex from "./UdFlex"
import UdForm from "./UdForm"
import UdFormItem from "./UdFormItem"
import UdHtml from "./UdHtml"
import UdInput from "./UdInput"
import UdLoading from "./UdLoading"
import UdModal from "./UdModal"
import UdPhone from "./UdPhone"
import UdQrcode from "./UdQrcode"
import UdRadio from "./UdRadio"
import UdRatio from "./UdRatio"
import UdSelect from "./UdSelect"
import UdSelectMultiple from "./UdSelectMultiple"
import UdSelectDate from "./UdSelectDate"
import UdSelectLink from "./UdSelectLink"
import UdSelectTwzip from "./UdSelectTwzip"
import UdSwitch from "./UdSwitch"
import UdTextarea from "./UdTextarea"

// 組件註冊列表
const udComponents = [
  UdAlert,
  UdArrow,
  UdBacktop,
  UdButton,
  UdCaptcha,
  UdCheckbox,
  UdCollapse,
  UdCountdown,
  UdDatePicker,
  UdEllipsis,
  UdFlex,
  UdForm,
  UdFormItem,
  UdHtml,
  UdInput,
  UdLoading,
  UdModal,
  UdPhone,
  UdQrcode,
  UdRadio,
  UdRatio,
  UdSelect,
  UdSelectMultiple,
  UdSelectDate,
  UdSelectLink,
  UdSelectTwzip,
  UdSwitch,
  UdTextarea,
]

// 組件呼叫方法
const udAlertExtend = Vue.extend(UdAlert);
const udAlert = options => {
  let instance = new udAlertExtend();
  typeof options === 'string' ? instance.msg = options : Object.assign(instance, options);
  document.body.appendChild(instance.$mount().$el);
  return instance.show();
};
export { udAlert }

const udLoadingExtend = Vue.extend(UdLoading);
const udLoading = {
  instance: null,
  open: (options = {}) => {
    udLoading.instance = new udLoadingExtend({
      el: document.createElement("div"),
      data() { return options }
    })
    if(udLoading.instance.fixed) document.body.style.overflowY = 'hidden';
    document.body.appendChild(udLoading.instance.$el);
  },
  close: () => udLoading.instance.destroy()
};
export { udLoading }

// UdonUI插件註冊方法
const install = Vue => {
  Object.keys(udUtils).forEach(item => Vue.prototype[item] = udUtils[item]);
  udComponents.forEach(item => Vue.component(item.name, item));
  Vue.prototype.udAxios = udAxios;
  Vue.prototype.udAlert = udAlert;
  Vue.prototype.udLoading = udLoading;
}

export default install;