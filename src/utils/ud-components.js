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
  Confirm 確認彈窗 -----> ud-confirm
  AlertConfirm 警告確認彈窗(調用式) -----> ud-alertConfirm
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

import UdAlert from '@/components/UdAlert'
import UdArrow from '@/components/UdArrow'
import UdBacktop from '@/components/UdBacktop'
import UdButton from "@/components/UdButton"
import UdCaptcha from "@/components/UdCaptcha"
import UdCheckbox from "@/components/UdCheckbox"
import UdCollapse from "@/components/UdCollapse"
import UdConfirm from "@/components/UdConfirm"
import UdCountdown from "@/components/UdCountdown"
import UdEllipsis from "@/components/UdEllipsis"
import UdFlex from "@/components/UdFlex"
import UdForm from "@/components/UdForm"
import UdFormItem from "@/components/UdFormItem"
import UdHtml from "@/components/UdHtml"
import UdInput from "@/components/UdInput"
import UdLoading from "@/components/UdLoading"
import UdModal from "@/components/UdModal"
import UdPhone from "@/components/UdPhone"
import UdQrcode from "@/components/UdQrcode"
import UdRadio from "@/components/UdRadio"
import UdRatio from "@/components/UdRatio"
import UdSelect from "@/components/UdSelect"
import UdSelectDate from "@/components/UdSelectDate"
import UdSelectLink from "@/components/UdSelectLink"
import UdSelectTwzip from "@/components/UdSelectTwzip"
import UdSwitch from "@/components/UdSwitch"
import UdTextarea from "@/components/UdTextarea"

// 組件註冊
Vue.component("UdAlert", UdAlert)
Vue.component("UdArrow", UdArrow)
Vue.component("UdBacktop", UdBacktop)
Vue.component("UdButton", UdButton)
Vue.component("UdCaptcha", UdCaptcha)
Vue.component("UdCheckbox", UdCheckbox)
Vue.component("UdCollapse", UdCollapse)
Vue.component("UdConfirm", UdConfirm)
Vue.component("UdCountdown", UdCountdown)
Vue.component("UdEllipsis", UdEllipsis)
Vue.component("UdFlex", UdFlex)
Vue.component("UdForm", UdForm)
Vue.component("UdFormItem", UdFormItem)
Vue.component("UdHtml", UdHtml)
Vue.component("UdInput", UdInput)
Vue.component("UdLoading", UdLoading)
Vue.component("UdModal", UdModal)
Vue.component("UdPhone", UdPhone)
Vue.component("UdQrcode", UdQrcode)
Vue.component("UdRadio", UdRadio)
Vue.component("UdRatio", UdRatio)
Vue.component("UdSelect", UdSelect)
Vue.component("UdSelectDate", UdSelectDate)
Vue.component("UdSelectLink", UdSelectLink)
Vue.component("UdSelectTwzip", UdSelectTwzip)
Vue.component("UdSwitch", UdSwitch)
Vue.component("UdTextarea", UdTextarea)

// udAlert 呼叫方法
let udAlert;
let udAlertExtend = Vue.extend(UdAlert);
udAlert = (options = {}) => {
  document.body.appendChild(new udAlertExtend({ data: options }).$mount().$el);
};
Vue.prototype.udAlert = udAlert;
export { udAlert }

// udLoading 呼叫方法
let udLoading;
let udLoadingExtend = Vue.extend(UdLoading);
let udLoadingFn;
udLoading = {
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