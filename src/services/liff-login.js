var lineApp = {
  localUrl: LOCAL_URL,
  loginChannelId: LOGIN_CHANNEL_ID, // login ChannelId
  msgChannelId: MSG_CHANNEL_ID,     // 活動 channelID
  lineUid: null,                    // 使用者Uid
  displayName: null,                // 使用者暱稱
  pictureUrl: null,                 // 使用者頭像
  login: function (liffID) {
    var _this = this;
    return new Promise(function (resolve) {
      liff.init({
        liffId: liffID
      }).then(function () {
        if (!liff.isLoggedIn()) {
          liff.login({redirectUri: LOCAL_URL});
          return;
        }
        liff.getFriendship().then(function (data) {
          if (data.friendFlag) {
            liff.getProfile().then(function (profile) {
              _this.lineUid = profile.userId;
              _this.displayName = profile.displayName;
              _this.pictureUrl = profile.pictureUrl;
              sessionStorage.setItem("lineUid", profile.userId);
              resolve();
            }).catch(function (err) {
              _this.doLog('getProfile', err);
            });
          }
          else {
            location.href = LINE_LOGIN_URL;
          }
        }).catch(function (err) {
          _this.doLog('getFriendship', err);
        });
      }).catch(function (err) {
        _this.doLog('login', err);
      });
    });
  },
  doLog: function (functionName, err) {
    let errMsg = err.message;
    axios.post(HOSTNAME + '/line/web/frontend-error/doLog', {
      'line_uuid': '',
      'method': functionName,
      'error' : errMsg
    }).then(function (response) {
      alert({title: "系統錯誤", msg: response.data.data.errorCode});
    }).catch(function (errData) {
      alert({title: "系統錯誤", msg: 'LINE授權登入失敗'});
    });
  }
};