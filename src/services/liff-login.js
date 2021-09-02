import { udAlert } from '@/components/UdonUI'

const liffLogin = {
  userId: null, // 使用者Uid
  displayName: null, // 使用者暱稱
  pictureUrl: null, // 使用者頭像
  email: null, // 使用者email
  accessToken: null,
  login: function() {
    return new Promise((resolve, reject) => {
      liff.init({
        liffId: process.env.VUE_APP_LINE_LIFF_ID
      }).then(() => {
        if(!liff.isLoggedIn()) {
          liff.login({
            redirectUri: location.href
          });
          return;
        }
        liff.getFriendship().then(data => {
          if(data.friendFlag) {
            liff.getProfile().then(profile => {
              this.userId = profile.userId;
              this.displayName = profile.displayName;
              this.pictureUrl = profile.pictureUrl;
              this.email = liff.getDecodedIDToken().email;
              this.accessToken = liff.getAccessToken();
              sessionStorage.setItem("lineUid", profile.userId);
              sessionStorage.setItem("accessToken", this.accessToken);
              resolve(profile);
            }).catch(err => {
              udAlert('取得資料失敗，請稍候再試').then(() => liff.closeWindow());
              reject(err);
            });
          }else {
            location.href = process.env.VUE_APP_LINE_ADD_FRIEND_LINK;
          }
        }).catch(err => {
          udAlert('取得好友狀態失敗，請稍候再試').then(() => liff.closeWindow());
          reject(err);
        });
      }).catch(err => {
        udAlert('應用程式初始化失敗，請稍候再試').then(() => liff.closeWindow());
        reject(err);
      });
    });
  },
};

export default liffLogin;