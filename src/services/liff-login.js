const liffLogin = {
  loginChannelId: process.env.VUE_APP_LINE_LOGIN_CHANNEL_ID, // login ChannelId
  messageChannelId: process.env.VUE_APP_LINE_MESSAGE_CHANNEL_ID, // 活動 channelID
  lineUid: null, // 使用者Uid
  displayName: null, // 使用者暱稱
  pictureUrl: null, // 使用者頭像
  accessToken: null,
  login: function (liffID) {
    return new Promise(resolve => {
      liff.init({
        liffId: liffID
      }).then(() => {
        if (!liff.isLoggedIn()) {
          liff.login({redirectUri: location.href});
          return;
        }
        liff.getFriendship().then(data => {
          if (data.friendFlag) {
            liff.getProfile().then(profile => {
              this.lineUid = profile.userId;
              this.displayName = profile.displayName;
              this.pictureUrl = profile.pictureUrl;
              this.accessToken = liff.getAccessToken();
              sessionStorage.setItem("lineUid", profile.userId);
              sessionStorage.setItem("accessToken", this.accessToken);
              resolve();
            }).catch(err => {
              // this.doLog('getProfile', err);
            });
          } else {
            location.href = process.env.VUE_APP_LINE_ADD_FRIEND_LINK;
          }
        }).catch(err => {
          // this.doLog('getFriendship', err);
        });
      }).catch(err => {
        // this.doLog('login', err);
      });
    });
  },
};

export default liffLogin;