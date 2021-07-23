/*
==================== 工具函數目錄 ====================
String
  將字串內換行符\n轉為<br> -----> nl2br
  取得隨機字串 -----> randomString
  複製文字至剪貼簿 -----> copyTextToClipboard
  
Number
  取得範圍內隨機整數 -----> getRandom
  四捨五入到指定位數 -----> round
  數字加入千分位逗號 -----> formatNumber
  數字補零 -----> padStart
  
Image
  預載單張圖片 -----> imageLoaded
  預載多張圖片 -----> imageAllLoaded
  下載Img圖片 -----> imageDownload
  下載Canvas圖片 -----> canvasImageDownload

Array
  陣列是否有重複值(不分型別) -----> isArrayRepeat
  移除陣列中的重複元素 -----> removeArrayRepeat
  二維陣列扁平化(第二參數可指定深度) -----> flatArray
  返回陣列中某值的所有索引 -----> indexOfAll
  兩陣列的交集 -----> intersectionArray
  洗牌陣列 -----> shuffleArray

Object
  精準型別判斷 -----> typeOf
  過濾物件鍵值 -----> filterObj
  刪除物件鍵值 -----> deleteObj
  深拷貝(簡易版) -----> deepCloneSimple
  深拷貝(完全版) -----> deepClone

Time
  檢查是否為閏年 -----> isLeapYear
  檢查日期是否存在 -----> isExistDate
  返回當前24小時制時間的字符串 -----> getColonTimeFromDate
  返回日期間的天數 -----> getDaysDiffBetweenDates
  檢查是否在某日期後 -----> isAfterDate
  檢查是否在某日期前 -----> isBeforeDate
  返回幾天前後的日期 -----> getDiffDate
  隨機數時間戳 -----> uniqueId
  時間格式化 -----> Date.prototype.format

DOM
  滾動至指定位置 -----> scrollTo
  取得頁面當前捲動高度(寬度) -----> getPageScroll
  取得頁面長寬度 -----> getPageInfo

Verify
  常用驗證函式 -----> isVerify
  精準數字驗證 -----> isNumber
  未填入驗證 -----> isEmpty

Web
  取得Cookie的值 -----> getCookie
  函式防抖 -----> debounce
  函式節流 -----> throttle
  查詢網址所帶參數 -----> queryString
  解析網址 -----> parseUrl
  網址跳轉 -----> toUrl
  跳頁重整 -----> jumpReload
  判斷是否移動裝置 -----> isMobile

//-----------------------String-----------------------
/**
 * 將字串內換行符\n轉為<br>
 * @param  {String} val 傳入值
 * @param  {Boolean} is_xhtml 是否為xhtml
 */
function nl2br(val = '', is_xhtml = false) {
  if(val == null) return val;
  let breakTag = (is_xhtml || typeof is_xhtml === 'undefined') ? '<br />' : '<br>';
  return (val + '').replace(/([^>\r\n]?)(\r\n|\n\r|\r|\n)/g, '$1' + breakTag + '$2');
}

/**
 * 取得隨機字串
 * @param  {Number} length 指定字串長度
 */
function randomString(length = 10) {
  let chars = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ1234567890";
  let temp = "";
  for (let i = 0; i < length; i++) {
    temp += chars.charAt(Math.floor(Math.random() * chars.length));
  }
  return temp;
}

/**
 * 複製文字至剪貼簿
 * @param  {String} id 要複製文字的元素id
 * 例：copyTextToClipboard('id').then(res => udAlert(`已複製\n${ res }`))
 */
function copyTextToClipboard(id) {
  return new Promise(resolve => {
    let textRange = document.createRange();
    textRange.selectNode(document.getElementById(id));
    let sel = window.getSelection();
    sel.removeAllRanges();
    sel.addRange(textRange);
    document.execCommand("copy");
    resolve(textRange);
  })
}

//-----------------------Number-----------------------
/**
 * 取得範圍內隨機整數
 * @param {Number} min 隨機數最小值 預設為0
 * @param {Number} max 隨機數最小值 預設為100
 */
function getRandom(min = 0, max = 100) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

/**
 * 四捨五入到指定位數
 * @param  {Number} val 傳入值 預設為0
 * @param  {Number} decimals 指定位數 預設為0
 * 例：round(1.235, 2) -> 1.24
 */
function round(val, decimals = 0) {
  if(val == null) return val;
  return Number(`${Math.round(`${val}e${decimals}`)}e-${decimals}`);
}

/**
 * 數字加入千分位逗號
 * 例：formatNumber(99999) -> 99,999
 * @param  {Number} val 傳入值
 */
function formatNumber(val) {
  if(val == null) return val;
  let temp = val.toString();
  let pattern = /(-?\d+)(\d{3})/;
  while(pattern.test(temp)){
    temp = temp.replace(pattern, "$1,$2");
  }
  return temp;
}

/**
 * 數字補零
 * 例：padStart(5) -> '05'
 * 例：padStart(5, 4) -> '0005'
 * 例：padStart(5, 4, 2) -> '2225'
 * @param  {Number, String} val 原數值
 * @param  {Number} length 要補到幾位
 * @param  {Number, String} string 要補的值
 */
function padStart(val, length = 2, string = '0') {
  if(val == null) return val;
  if(!String.prototype.padStart) {
    String.prototype.padStart = function padStart(targetLength, padString) {
      targetLength = targetLength >> 0;
      padString = String(typeof padString !== 'undefined' ? padString : ' ');
      if(this.length > targetLength) {
        return String(this);
      }else {
        targetLength = targetLength - this.length;
        if(targetLength > padString.length) {
          padString += padString.repeat(targetLength / padString.length);
        }
        return padString.slice(0, targetLength) + String(this);
      }
    };
  }
  return val.toString().padStart(length, string);
}

//-----------------------Image-----------------------
/**
 * 預載單張圖片
 * @param  {String} url 圖片路徑
 * imageLoaded('imgUrl').then(...);
 * 圖片讀取完成時返回Image物件
 */
function imageLoaded(url) {
  let img = new Image();
  img.src = url;
  return new Promise((resolve, reject) => {
    if(img.complete) {
      resolve(img);
    }else {
      img.onload = () => resolve(img);
      img.onerror = (e) => reject(e);
    }
  })
}

/**
 * 預載多張圖片
 * @param  {Array} arr 多張圖片路徑陣列
 * imageAllLoaded(['imgUrl1','imgUrl2']).then(...);
 * 全部圖片都讀取完成時返回Image物件組成的陣列
 */
function imageAllLoaded(arr) {
  let result = [];
  arr.forEach(item => {
    result.push(imageLoaded(item));
  });
  return new Promise((resolve, reject) => {
    Promise.all(result)
      .then(res => resolve(res))
      .catch(err => reject(err));
  })
}

/**
 * 下載Img圖片
 * @param  {String} selector 選擇器，代表img標籤
 * @param  {String} name 圖片名稱，可選 
 * imageDownload('#image', '自訂下載圖片名稱')
 */
function imageDownload(selector, name = '下載圖片') { 
  let image = new Image();
  image.setAttribute('crossOrigin', 'anonymous'); // 解決跨域 Canvas 污染問題
  image.src = document.querySelector(selector).src;
  image.onload = function() {
    let canvas = document.createElement('canvas');
    canvas.width = image.width;
    canvas.height = image.height;
    let context = canvas.getContext('2d');
    context.drawImage(image, 0, 0, image.width, image.height);
    let url = canvas.toDataURL('image/jpg');
    let a = document.createElement('a'); // 生成一個a元素
    let event = new MouseEvent('click'); // 創建一個單擊事件
    a.download = name; // 將a的download屬性設置為我們想要下載的圖片名稱，若name不存在則使用『下載圖片』作為默認名稱
    a.href = url; // 將生成的URL設置為a.href屬性
    a.dispatchEvent(event); // 觸發a的單擊事件
  }
}

/**
 * 下載Canvas元素圖片
 * @param  {String} selector 選擇器，代表canvas
 * @param  {String} name 圖片名稱，可選 
 * canvasImageDownload('canvas', '圖片名稱')
 */
function canvasImageDownload(selector, name) {
  let canvas = document.querySelector(selector); // 通過選擇器獲取canvas元素
  let url = canvas.toDataURL('image/png'); // 使用toDataURL方法將圖像轉換被base64編碼的URL字符串
  let a = document.createElement('a'); // 生成一個a元素
  let event = new MouseEvent('click'); // 創建一個單擊事件
  a.download = name || '下載圖片名稱'; // 將a的download屬性設置為我們想要下載的圖片名稱，若name不存在則使用『下載圖片名稱』作為默認名稱
  a.href = url; // 將生成的URL設置為a.href屬性
  a.dispatchEvent(event); // 觸發a的單擊事件
}

//-----------------------Array-----------------------
/**
 * 陣列是否有重複值(不分型別)
 * @param  {Array} arr 傳入值
 * 例：isArrayRepeat([1, 2, 2, 3]) -> true
 */
function isArrayRepeat(arr) {
  let obj = {};
  for(let i in arr) {
    if(obj[arr[i]]) return true;
    obj[arr[i]] = true;
  }
  return false;
}

/**
 * 移除陣列中的重複元素
 * @param  {Array} arr 傳入值
 * 例：removeArrayRepeat([1, 2, 2, 3]) -> [1, 2, 3]
 */
function removeArrayRepeat(arr) {
  let newArr = arr.filter((el, i, arr) => arr.indexOf(el) === i);
  return newArr;
}

/**
 * 二維陣列扁平化(第二參數可指定深度)
 * @param  {Array} arr 傳入值
 * @param  {Number} depth 指定深度
 * flatArray([1, [2], 3, 4]); -> [1, 2, 3, 4]
 * flatArray([1, [2, [3, [4, 5], 6], 7], 8], 2); -> [1, 2, 3, [4, 5], 6, 7, 8]
 */
function flatArray(arr, depth = 1) {
  return arr.reduce((a, v) => a.concat(depth > 1 && Array.isArray(v) ? flatArray(v, depth - 1) : v), []);
}

/**
 * 返回陣列中某值的所有索引
 * @param  {Array} arr 傳入值
 * @param  {Number} val 指定值
 * indexOfAll([1, 2, 3, 1, 2, 3], 1); -> [0,3]
 * indexOfAll([1, 2, 3], 4); -> []
 */
function indexOfAll(arr, val) {
  return arr.reduce((acc, el, i) => (el === val ? [...acc, i] : acc), []);
}

/**
 * 兩陣列的交集
 * @param  {Array} a 陣列A
 * @param  {Array} b 陣列B
 * intersectionArray([1, 2, 3], [4, 3, 2]); -> [2, 3]
 */
function intersectionArray(a, b) {
  const s = new Set(b);
  return a.filter(x => s.has(x));
};

/**
 * 洗牌陣列
 * @param  {Array} a 陣列A
 * @param  {Array} b 陣列B
 * shuffleArray([1, 2, 3]); -> [2, 3, 1];
 */
function shuffleArray([...arr]) {
  let m = arr.length;
  while (m) {
    const i = Math.floor(Math.random() * m--);
    [arr[m], arr[i]] = [arr[i], arr[m]];
  }
  return arr;
};

//-----------------------Object-----------------------
/**
 * 精準型別判斷
 * @param  {Any} val 傳入值
 */
function typeOf(val) {
  return val === undefined ? 'undefined' : val === null ? 'null' : val.constructor.name.toLowerCase();
}

/**
 * 過濾物件鍵值
 * @param  {Object} val 傳入值
 * @param  {Array} arr 過濾值的陣列
 * filterObj(obj, ["name", "gender"]);
 */
function filterObj(val, arr) {
  if(val == null) return val;
  let tempObj = JSON.parse(JSON.stringify(val));
  for(let i in tempObj){
    if(arr.indexOf(i) === -1) delete tempObj[i];
  }
  return tempObj;
}

/**
 * 刪除物件鍵值
 * @param  {Object} obj 傳入值
 * @param  {Array} arr 刪除值的陣列
 * deleteObj(test,["name","gender"]);
 */
function deleteObj(obj, arr) {
  let tempObj = JSON.parse(JSON.stringify(obj));
  for(let i in tempObj){
    if(arr.indexOf(i) !== -1) delete tempObj[i];
  }
  return tempObj;
}

/**
 * 深拷貝(簡易版)
 * @param  {Object} obj 傳入值
 * 無法拷貝特殊類型值與funciton
 */
function deepCloneSimple(obj) {
  return JSON.parse(JSON.stringify(obj));
}

/**
 * 深拷貝(完全版)
 * @param  {Object} obj 傳入值
 */
function deepClone(obj, hash = new WeakMap()) {
  if(obj == null){
    return obj;
  }
  if (obj instanceof RegExp) {
    return new RegExp(obj);
  }
  if (obj instanceof Date) {
    return new Date(obj);
  }
  if(obj instanceof Error) {
    return new Error(obj);
  }
  if(typeof obj !== 'object'){
    return obj;
  }
  if(hash.get(obj)) return hash.get(obj); 
  let cloneObj = new obj.constructor;
  hash.set(obj, cloneObj);
  for(let key in obj) {
    if (obj.hasOwnProperty(key)) {
      cloneObj[key] = deepClone(obj[key], hash);
    }
  }
  return cloneObj;
}

//-----------------------Time-----------------------
/**
 * 檢查是否為閏年
 * @param  {Number} year 年份
 */
function isLeapYear(year) {
  return new Date(year, 1, 29).getDate() === 29;
}

/**
 * 檢查日期是否存在
 * @param  {String} dateStr 日期字串
 * @param  {String} split 分割符 預設為"-"
 * isExistDate("2020-02-29"); -> true
 * isExistDate("2019/02/29","/"); -> false
 */
function isExistDate(dateStr, split = "-") {
  let dateArr = dateStr.split(split);
  let limitInMonth = [31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31];
  let theYear = parseInt(dateArr[0]);
  let theMonth = parseInt(dateArr[1]);
  let theDay = parseInt(dateArr[2]);
  let isLeap = new Date(theYear, 1, 29).getDate() === 29; 
  if (isLeap) limitInMonth[1] = 29;
  return theDay > 0 && theDay <= limitInMonth[theMonth - 1];
}

/**
 * 返回當前24小時制時間的字符串
 * @param  {Any} date 時間物件
 * getColonTimeFromDate(new Date()); -> "08:38:00"
 */
function getColonTimeFromDate(date) {
  return date.toTimeString().slice(0, 8);
}

/**
 * 返回日期間的天數
 * @param  {Any} dateInitial 開始時間物件
 * @param  {Any} dateFinal 結束時間物件
 * getDaysDiffBetweenDates(new Date('2019-01-01'), new Date('2019-10-14')); -> 286
 */
function getDaysDiffBetweenDates(dateInitial, dateFinal) {
  return (dateFinal - dateInitial) / (1000 * 3600 * 24);
}

/**
 * 檢查是否在某日期後
 * @param  {Any} dateA 時間物件A
 * @param  {Any} dateB 時間物件B
 * isAfterDate(new Date(2010, 10, 21), new Date(2010, 10, 20)); -> true
 */
function isAfterDate(dateA, dateB) {
  return dateA > dateB;
}

/**
 * 檢查是否在某日期前
 * @param  {Any} dateA 時間物件A
 * @param  {Any} dateB 時間物件B
 * isBeforeDate(new Date(2010, 10, 20), new Date(2010, 10, 21)); -> true
 */
function isBeforeDate(dateA, dateB) {
  return dateA < dateB;
}

/**
 * 返回幾天前後的日期
 * @param  {Number} days 指定天數 可為負值
 * getDiffDate(1); -> "2020-07-01"
 * getDiffDate(0); -> "2020-06-30"
 * getDiffDate(-2); -> "2020-06-28"
 */
function getDiffDate(days) {
  let t = new Date();
  t.setDate(t.getDate() + days);
  return t.toISOString().split('T')[0];
};

/**
 * 隨機數時間戳
 */
function uniqueId() {
  return (
    Number(new Date()).toString() + parseInt(10 * Math.random()) + parseInt(10 * Math.random()) + parseInt(10 * Math.random())
  );
}

/**
 * 時間格式化
 * @param  {Any} format 轉換格式
 * new Date().format('yyyyMMdd') -> "20200921"
 * new Date().format('yyyy-MM-dd') -> "2020-09-21"
 * new Date().format('yyyy-MM-dd hh:mm:ss') -> "2020-09-21 16:07:59"
 */
// function parseTime(date = new Date(), format = "yyyy-MM-dd hh:mm:ss"){
Date.prototype.format = function(format = "yyyy-MM-dd hh:mm:ss") {
  let o = {
    "M+": this.getMonth() + 1, // 月份
    "d+": this.getDate(), // 日
    "H+": this.getHours(), // 小時
    "h+": this.getHours(), // 小時
    "m+": this.getMinutes(), // 分
    "s+": this.getSeconds(), // 秒
    "q+": Math.floor((this.getMonth() + 3) / 3), // 季度
    "S": this.getMilliseconds() // 毫秒
  };
  if(/(y+)/.test(format)) {
    format = format.replace(RegExp.$1, (this.getFullYear() + "").substr(4 - RegExp.$1.length));
  }
  for (var k in o) {
    if(new RegExp("(" + k + ")").test(format)) {
      format = format.replace(RegExp.$1, RegExp.$1.length == 1 ? o[k] : ("00" + o[k]).substr(("" + o[k]).length));
    }
  }
  return format;
};

//-----------------------DOM-----------------------
/**
 * 滾動至指定位置
 * @param  {String, Number} el 滾動位置('top': 頂部, 'bottom': 底部, '.foobar': 元素, 300: 像素)
 * @param  {Number} speed 滾動時間(瞬移為1,請勿設為0)
 * @param  {Number} offset 自定偏移(可接受正負數字)
 * @param  {Function} callback 回調函式
 * scrollTo();
 * scrollTo('top', 1);
 * scrollTo('.foobar', 10, -30, () => {console.log('滾動完成')});
 */
function scrollTo(el = "top", speed = 5, offset = 0, callback = () => {}) {
  let scrollTop = document.scrollingElement.scrollTop;
  let top = 0;
  if(typeof el === 'number') {
    top = el + offset;
  }else {
    if(el === 'top') {
      top = 0 + offset;
    }else if(el === 'bottom') {
      top = document.body.scrollHeight - document.body.clientHeight + offset;
    }else {
      top = document.querySelector(el).offsetTop + offset;
    }
  }
  function scroll() {
    scrollTop = scrollTop + (top - scrollTop) / speed;
    if (Math.abs(scrollTop - top) <= 1) {
      document.scrollingElement.scrollTop = top;
      callback && callback();
      return;
    }
    document.scrollingElement.scrollTop = scrollTop;
    requestAnimationFrame(scroll);
  };
  scroll();
};

/**
 * 取得頁面當前捲動長寬度
 * @param  {String} type 類型(width: 寬度, height: 高度)
 */
function getPageScroll(type = 'height') {
  if(type === 'width') {
    return document.documentElement.scrollLeft || document.body.scrollLeft;
  }
  if(type === 'height') {
    let bodyTop = 0;
    if(typeof window.pageYOffset != "undefined") {
      bodyTop = window.pageYOffset;
    }else if(typeof document.compatMode != "undefined" && document.compatMode != "BackCompat") {
      bodyTop = document.documentElement.scrollTop;
    }else if(typeof document.body != "undefined") {
      bodyTop = document.body.scrollTop;
    }
    return bodyTop;
  }
}

/**
 * 取得頁面長寬度
 * @param  {String} type 類型(width: 寬度, height: 高度)
 * @param  {String} scope 範圍(view: 可視頁面, all: 完整頁面)
 */
function getPageInfo(type = 'width', scope = 'view') {
  let el = document.compatMode == "BackCompat" ? document.body : document.documentElement;
  if(scope === 'view') {
    if(type === 'width') return el.clientWidth;
    if(type === 'height') return el.clientHeight;
  }
  if(scope === 'all') {
    if(type === 'width') return Math.max(document.documentElement.scrollWidth, document.body.scrollWidth, el.clientWidth);
    if(type === 'height') return Math.max(document.documentElement.scrollHeight, document.body.scrollHeight, el.clientHeight);
  }
}

//-----------------------Verify-----------------------
/**
 * 常用驗證函式
 * @param  {Any} val 傳入值
 * @param  {String, Regex} type 驗證類型(可接受正則表達式)
 * 例：isVerify('1988-05-27', 'date') -> true
 * 例：isVerify('ABC', /[A-Z]/) -> true
 */
function isVerify(val, type) {
  if(val == null) return val;
  switch (type) {
    // 姓名驗證
    case "name":
      return /^[a-zA-Z0-9_\u4e00-\u9fa5]+$/.test(val);
    // 電話驗證
    case "phone":
      return /^09[0-9]{8}$/.test(val);
    // 電子郵件驗證
    case "email":
      return /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/.test(val);
    // 日期驗證
    case "date":
      return /^(?:(?!0000)[0-9]{4}-(?:(?:0[1-9]|1[0-2])-(?:0[1-9]|1[0-9]|2[0-8])|(?:0[13-9]|1[0-2])-(?:29|30)|(?:0[13578]|1[02])-31)|(?:[0-9]{2}(?:0[48]|[2468][048]|[13579][26])|(?:0[48]|[2468][048]|[13579][26])00)-02-29)$/.test(val);
    // 數字驗證
    case "number":
      return !isNaN(val);
    // 網址驗證
    case "url":
      return /^((https?|ftp|file):\/\/)?([\da-z\.-]+)\.([a-z\.]{2,6})([\/\w \.-]*)*\/?$/.test(val);
    // IP地址驗證
    case "ip":
      return /^(?:(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)\.){3}(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)$/.test(val);
    // Hex色碼驗證
    case "hex":
      return /^#?([a-fA-F0-9]{6}|[a-fA-F0-9]{3})$/.test(val);
    // 身分證字號驗證
    case "id":
      let letters = new Array('A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'J', 'K', 'L', 'M', 'N', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'X', 'Y', 'W', 'Z', 'I', 'O');
      let multiply = new Array(1, 9, 8, 7, 6, 5, 4, 3, 2, 1);
      let nums = new Array(2);
      let firstChar;
      let firstNum;
      let lastNum;
      let total = 0;
      let regExpID=/^[a-z](1|2)\d{8}$/i; 
      if(val.search(regExpID)==-1) {
        return false;
      }else {
        firstChar = val.charAt(0).toUpperCase();
        lastNum = val.charAt(9);
      }
      for(var i=0; i<26; i++) {
        if(firstChar == letters[i]) {
          firstNum = i + 10;
          nums[0] = Math.floor(firstNum / 10);
          nums[1] = firstNum - (nums[0] * 10);
          break;
        } 
      }
      for(var i=0; i<multiply.length; i++){
        if(i<2) {
          total += nums[i] * multiply[i];
        }else {
          total += parseInt(val.charAt(i-1)) * multiply[i];
        }
      }
      if((10 - (total % 10))!= lastNum) {
        return false;
      } 
      return true;
    // 正則表達式驗證
    default:
      let regexMode = new RegExp(type);
      return regexMode.test(val);
  }
}

/**
 * 精準數字驗證
 * @param  {Any} val 傳入值
 */
function isNumber(val) {
  return typeOf(val) !== "number" ? false : !isNaN(val);
}

/**
 * 未填入驗證
 * @param  {Any} val 傳入值
 */
function isEmpty(val) {
  switch(typeOf(val)) {
    case "string":
      return (val.trim().length === 0) ? true : false;
    case "number":
      return false;
    case "boolean":
      return val ? false : true;
    case "array":
      if(val.length === 0) return true;
      return val.some(i => i.length === 0) ? true : false;
    case "object":
      return false;
    case "null":
      return true;
    case "undefined":
      return true;
    default:
      return false;
  }
}

//-----------------------Web-----------------------
/**
 * 取得Cookie的值
 * @param  {String} key 傳入值
 */
function getCookie(key) {
  let arr = document.cookie.match(new RegExp("(^| )" + key + "=([^;]*)(;|$)"));
  if (arr != null) return unescape(arr[2]);
  return null;
}

/**
 * 函式防抖
 * @description 將幾次操作合併為一次操作進行
 * @param  {Function} fn 處理函式
 * @param  {Number} wait 停止後等待時間 預設為200ms
 * 例：window.addEventListener('scroll', debounce(() => console.log(getRandom), 500));
 */
function debounce(fn, wait = 200) {
  let timeout = null;
  return () => {
    if(timeout !== null)
      clearTimeout(timeout);
    timeout = setTimeout(fn, wait);
  }
}

/**
 * 函式節流
 * @description 一定時間內只觸發一次函式
 * @param  {Function} fn 處理函式
 * @param  {Number} delay 處理間隔時間 預設為1000ms
 * 例：window.addEventListener('scroll', throttle(() => console.log(getRandom), 2000));
 */
function throttle(fn, delay = 1000) {
  let prev = Date.now();
  return () => {
    let context = this;
    let args = arguments;
    let now = Date.now();
    if (now - prev >= delay) {
      fn.apply(context, args);
      prev = Date.now();
    }
  }
}

/**
 * 查詢網址所帶參數
 * @param  {String} key 鍵值
 * @param  {String} url 網址
 * 例：queryString('id', https://foo?id=123) -> "123"
 */
function queryString(key = "", url = location.href) {
  let parseUrl = new URL(url);
  return parseUrl.searchParams.get(key);
}

/**
 * 解析網址
 * @param  {String} url 網址
 */
function parseUrl(url = location.href) {
  if(url == null) return url;
  let parseUrl = new URL(url);
  return parseUrl;
}

/**
 * 網址跳轉
 * @param  {String} url 欲跳轉的網址
 */
function toUrl(url) {
  if(url == null) return url;
  window.location.href = url;
}

/**
 * 跳頁重整
 */
function jumpReload() {
  window.onpageshow = event => {
    if(event.persisted) window.location.reload();
  };
}

/**
 * 判斷是否移動裝置
 * @param  {String} os 作業系統('': 所有機型, apple: 蘋果, android: 安卓)
 */
function isMobile(os = '') {
  switch (os) {
    case 'apple':
      return /iphone|ipod|ipad|Macintosh/i.test(navigator.userAgent.toLowerCase());
    case 'android':
      return /android/i.test(navigator.userAgent.toLowerCase());
    default:
      return /iphone|ipod|android.*mobile|windows.*phone|blackberry.*mobile/i.test(window.navigator.userAgent.toLowerCase());
  }
}

export {
  nl2br,
  randomString,
  copyTextToClipboard,
  getRandom,
  round,
  formatNumber,
  padStart,
  imageLoaded,
  imageAllLoaded,
  imageDownload,
  canvasImageDownload,
  isArrayRepeat,
  removeArrayRepeat,
  flatArray,
  indexOfAll,
  intersectionArray,
  shuffleArray,
  typeOf,
  filterObj,
  deleteObj,
  deepCloneSimple,
  deepClone,
  isLeapYear,
  isExistDate,
  getColonTimeFromDate,
  getDaysDiffBetweenDates,
  isAfterDate,
  isBeforeDate,
  getDiffDate,
  uniqueId,
  scrollTo,
  getPageScroll,
  getPageInfo,
  isVerify,
  isNumber,
  isEmpty,
  getCookie,
  debounce,
  throttle,
  queryString,
  parseUrl,
  toUrl,
  jumpReload,
  isMobile,
};