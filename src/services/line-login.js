const token = sessionStorage.getItem('data');

if (token) {
  // sessionStorage 有 token 直接轉導至目的頁
  if (to.name === undefined || to.name === 'Home') {
    next('/error/404');
  } else {
    const urlParams = new URLSearchParams(window.location.search);
    window.sessionStorage.setItem('sa_id', urlParams.get('sa_id'));
    window.sessionStorage.setItem('store_id', urlParams.get('store_id'));
    next();
  }
} else {
  // 沒有 token 轉至 line login 取 token
  const responseType = 'code';
  const lineMessageChannelId = process.env.VUE_APP_LINE_MESSAGE_CHANNEL_ID;
  const lineLoginChannelId = process.env.VUE_APP_LINE_LOGIN_CHANNEL_ID;
  const redirectUri = encodeURIComponent(process.env.VUE_APP_LINE_LOGIN_REDIRECT_URL); // LINE Login 轉導至的後端 url
  // 後端轉導回前端的過渡頁 url
  const base_url = process.env.VUE_APP_BASE_URL ? process.env.VUE_APP_BASE_URL : '';
  const middleUrl = encodeURIComponent(`${window.location.protocol}//${window.location.host}${base_url}/login/index`);
  const scope = 'openid profile email';
  // 取得網址原本的 query (如果有的話)
  const queryString = window.location.href.split('?')[1];
  let state = `channel_id=${lineMessageChannelId}|login_channel_id=${lineLoginChannelId}|middle_url=${middleUrl}|final_route_name=${to.name}`;
  if (queryString !== undefined) state += `|query_string=${queryString}`;
  state = encodeURIComponent(state);
  const lineLoginUrl = `https://access.line.me/oauth2/v2.1/authorize?response_type=${responseType}&client_id=${lineLoginChannelId}&redirect_uri=${redirectUri}&scope=${scope}&bot_prompt=aggressive&state=${state}`;
  // 轉址
  window.location = lineLoginUrl;
}