import UdAlert from "@/components/UdAlert"
import UdAlertCall from '@/components/UdAlertCall'
import UdButton from "@/components/UdButton"
import UdCheckbox from "@/components/UdCheckbox"
import UdCollapse from "@/components/UdCollapse"
import UdConfirm from "@/components/UdConfirm"
import UdEllipsis from "@/components/UdEllipsis"
import UdFlex from "@/components/UdFlex"
import UdForm from "@/components/UdForm"
import UdFormItem from "@/components/UdFormItem"
import UdHtml from "@/components/UdHtml"
import UdInput from "@/components/UdInput"
import UdLoading from "@/components/UdLoading"
import UdModal from "@/components/UdModal"
import UdRadio from "@/components/UdRadio"
import UdSelect from "@/components/UdSelect"
import UdSelectDate from "@/components/UdSelectDate"
import UdSelectLink from "@/components/UdSelectLink"
import UdSwitch from "@/components/UdSwitch"
import UdTextarea from "@/components/UdTextarea"

// 插件匯出
function plugins(Vue) {
  Vue.component("UdAlert", UdAlert)
  Vue.component("UdButton", UdButton)
  Vue.component("UdCheckbox", UdCheckbox)
  Vue.component("UdCollapse", UdCollapse)
  Vue.component("UdConfirm", UdConfirm)
  Vue.component("UdEllipsis", UdEllipsis)
  Vue.component("UdFlex", UdFlex)
  Vue.component("UdForm", UdForm)
  Vue.component("UdFormItem", UdFormItem)
  Vue.component("UdHtml", UdHtml)
  Vue.component("UdInput", UdInput)
  Vue.component("UdLoading", UdLoading)
  Vue.component("UdModal", UdModal)
  Vue.component("UdRadio", UdRadio)
  Vue.component("UdSelect", UdSelect)
  Vue.component("UdSelectDate", UdSelectDate)
  Vue.component("UdSelectLink", UdSelectLink)
  Vue.component("UdSwitch", UdSwitch)
  Vue.component("UdTextarea", UdTextarea)

  const UdAlertExtend = Vue.extend(UdAlertCall);
  const UdAlertFn = (options = {}) => {
    const UdAlertInstance = new UdAlertExtend({ data: options }).$mount();
    document.body.appendChild(UdAlertInstance.$el);
  };
  Vue.prototype.UdAlert = UdAlertFn;
}

export default plugins;