//Wed Aug 07 2024 13:33:34 GMT+0000 (Coordinated Universal Time)
//Base:https://github.com/echo094/decode-js
//Modify:https://github.com/smallfawn/decode_action
(function (e) {
  function n(n) {
    for (var t, r, u = n[0], l = n[1], s = n[2], d = 0, c = []; d < u.length; d++) r = u[d], Object.prototype.hasOwnProperty.call(a, r) && a[r] && c.push(a[r][0]), a[r] = 0;
    for (t in l) Object.prototype.hasOwnProperty.call(l, t) && (e[t] = l[t]);
    m && m(n);
    while (c.length) c.shift()();
    return i.push.apply(i, s || []), o();
  }
  function o() {
    for (var e, n = 0; n < i.length; n++) {
      for (var o = i[n], t = !0, u = 1; u < o.length; u++) {
        var l = o[u];
        0 !== a[l] && (t = !1);
      }
      t && (i.splice(n--, 1), e = r(r.s = o[0]));
    }
    return e;
  }
  var t = {},
    a = {
      index: 0
    },
    i = [];
  function r(n) {
    if (t[n]) return t[n].exports;
    var o = t[n] = {
      i: n,
      l: !1,
      exports: {}
    };
    return e[n].call(o.exports, o, o.exports, r), o.l = !0, o.exports;
  }
  r.e = function (e) {
    var n = [],
      o = a[e];
    if (0 !== o) if (o) n.push(o[2]);else {
      var t = new Promise(function (n, t) {
        o = a[e] = [n, t];
      });
      n.push(o[2] = t);
      var i,
        u = document.createElement("script");
      u.charset = "utf-8", u.timeout = 120, r.nc && u.setAttribute("nonce", r.nc), u.src = function (e) {
        return r.p + "static/js/" + ({
          "module-activity-home-home~module-ai-face-fusion-home-home~module-answer-answer-log-answer-log~module~f7b76ac1": "module-activity-home-home~module-ai-face-fusion-home-home~module-answer-answer-log-answer-log~module~f7b76ac1",
          "module-activity-home-home~module-answer-home-home~module-answer-question-question~module-article-tas~3c43a7bb": "module-activity-home-home~module-answer-home-home~module-answer-question-question~module-article-tas~3c43a7bb",
          "module-activity-home-home~module-answer-home-home~module-answer-question-question~module-article-tas~edb4023f": "module-activity-home-home~module-answer-home-home~module-answer-question-question~module-article-tas~edb4023f",
          "module-activity-home-home~module-answer-home-home~module-answer-question-question~module-article-tas~5a13cc39": "module-activity-home-home~module-answer-home-home~module-answer-question-question~module-article-tas~5a13cc39",
          "module-activity-home-home": "module-activity-home-home",
          "module-answer-home-home": "module-answer-home-home",
          "module-answer-question-question": "module-answer-question-question",
          "module-article-task-home-home": "module-article-task-home-home",
          "module-booking-lottery-home-home": "module-booking-lottery-home-home",
          "module-checkers-home-home": "module-checkers-home-home",
          "module-clockin-home-home": "module-clockin-home-home",
          "module-collect-card-home-home": "module-collect-card-home-home",
          "module-customer-fjdaily-home": "module-customer-fjdaily-home",
          "module-dilate-home-home": "module-dilate-home-home",
          "module-ecnyform-home-home": "module-ecnyform-home-home",
          "module-farm-home-home": "module-farm-home-home",
          "module-farm-kinds-home-home": "module-farm-kinds-home-home",
          "module-footmark-home-home": "module-footmark-home-home",
          "module-guandan-home-home": "module-guandan-home-home",
          "module-guandan-home-home-two": "module-guandan-home-home-two",
          "module-guess-home-home": "module-guess-home-home",
          "module-guess-home-pk": "module-guess-home-pk",
          "module-help-home-home": "module-help-home-home",
          "module-info-pub-home-detail": "module-info-pub-home-detail",
          "module-info-pub-home-mine": "module-info-pub-home-mine",
          "module-info-pub-home-publish": "module-info-pub-home-publish",
          "module-invite-home-home": "module-invite-home-home",
          "module-invite-invite-invite": "module-invite-invite-invite",
          "module-live-detail-detail": "module-live-detail-detail",
          "module-lottery-home-home": "module-lottery-home-home",
          "module-mall-business-business-detail": "module-mall-business-business-detail",
          "module-mall-business-business-home": "module-mall-business-business-home",
          "module-mall-business-business-home-style-three": "module-mall-business-business-home-style-three",
          "module-mall-coupon-coupon-center": "module-mall-coupon-coupon-center",
          "module-mall-goods-detail-goods-detail": "module-mall-goods-detail-goods-detail",
          "module-mall-goods-detail-goods-detail-style-three": "module-mall-goods-detail-goods-detail-style-three",
          "module-mall-goodslist-goodslist": "module-mall-goodslist-goodslist",
          "module-mall-home-home": "module-mall-home-home",
          "module-mall-home-home-style-four": "module-mall-home-home-style-four",
          "module-mall-home-home-style-three": "module-mall-home-home-style-three",
          "module-mall-home-home-style-two": "module-mall-home-home-style-two",
          "module-mall-hongbao-bill": "module-mall-hongbao-bill",
          "module-mall-hongbao-pay": "module-mall-hongbao-pay",
          "module-mall-notify-wechat-notify": "module-mall-notify-wechat-notify",
          "module-mall-offline-pay": "module-mall-offline-pay",
          "module-mall-seckill-seckill": "module-mall-seckill-seckill",
          "module-mall-writeoff-bill": "module-mall-writeoff-bill",
          "module-neurocat-home-home": "module-neurocat-home-home",
          "module-nschool-home-home": "module-nschool-home-home",
          "module-nschool-subject-subject-info-detail": "module-nschool-subject-subject-info-detail",
          "module-page-home-home": "module-page-home-home",
          "module-photo-home-home": "module-photo-home-home",
          "module-poetry-home-home": "module-poetry-home-home",
          "module-poetry-home-home-two": "module-poetry-home-home-two",
          "module-poetry-question-question": "module-poetry-question-question",
          "module-poetry-question-question-two": "module-poetry-question-question-two",
          "module-query-home-home": "module-query-home-home",
          "module-signin-home-home": "module-signin-home-home",
          "module-signup-home-home": "module-signup-home-home",
          "module-signup-home-update-home": "module-signup-home-update-home",
          "module-stepsport-home-home": "module-stepsport-home-home",
          "module-study-home-home": "module-study-home-home",
          "module-study-pass-detail-pass-detail": "module-study-pass-detail-pass-detail",
          "module-supertopic-detail-detail": "module-supertopic-detail-detail",
          "module-supertopic-home-home": "module-supertopic-home-home",
          "module-venue-clockin-home-home": "module-venue-clockin-home-home",
          "module-vote-home-home": "module-vote-home-home",
          "module-vote-score-detail": "module-vote-score-detail",
          "module-vote-score-home": "module-vote-score-home",
          "module-vote-vote-detail-vote-detail": "module-vote-vote-detail-vote-detail",
          "module-whipped-eggs-home-home": "module-whipped-eggs-home-home",
          "module-wish-home-home": "module-wish-home-home",
          "module-word-home-home": "module-word-home-home",
          "pages-home-index": "pages-home-index",
          "pages-member-task-center": "pages-member-task-center",
          "pages-member-user-center": "pages-member-user-center",
          "pages-shopping-mall-home": "pages-shopping-mall-home",
          "module-clockin-cert-get-cert~module-cms-news-detail~module-cms-video-detail~module-customer-fjdaily-~4f8830ac": "module-clockin-cert-get-cert~module-cms-news-detail~module-cms-video-detail~module-customer-fjdaily-~4f8830ac",
          "module-screen-interact-home-home": "module-screen-interact-home-home",
          "module-answer-answer-log-answer-detail~module-customer-fhtvn-no-rank-list~module-customer-fhtvn-rank~27a720c1": "module-answer-answer-log-answer-detail~module-customer-fhtvn-no-rank-list~module-customer-fhtvn-rank~27a720c1",
          "module-farm-game-game~module-farm-goods-exchange-goods-exchange~module-farm-goods-list-goods-list": "module-farm-game-game~module-farm-goods-exchange-goods-exchange~module-farm-goods-list-goods-list",
          "module-farm-game-game": "module-farm-game-game",
          "module-clockin-log-log~module-cms-news-detail~module-cms-video-detail~module-customer-fjdaily-clocki~540cf0d6": "module-clockin-log-log~module-cms-news-detail~module-cms-video-detail~module-customer-fjdaily-clocki~540cf0d6",
          "module-cms-news-detail": "module-cms-news-detail",
          "module-cms-video-detail": "module-cms-video-detail",
          "module-customer-fjdaily-clockin": "module-customer-fjdaily-clockin",
          "module-mall-confirm-order-confirm-order": "module-mall-confirm-order-confirm-order",
          "module-mall-confirm-order-confirm-order-cart": "module-mall-confirm-order-confirm-order-cart",
          "module-neurocat-game-game": "module-neurocat-game-game",
          "module-venue-clockin-detail-detail": "module-venue-clockin-detail-detail",
          "module-word-game-game": "module-word-game-game",
          "module-member-cashout-cashout": "module-member-cashout-cashout",
          "module-ai-face-fusion-home-home": "module-ai-face-fusion-home-home",
          "module-clockin-cert-get-cert~module-customer-xmtv-flowers~module-guandan-rank-rank-detail~module-lot~911add6f": "module-clockin-cert-get-cert~module-customer-xmtv-flowers~module-guandan-rank-rank-detail~module-lot~911add6f",
          "module-guandan-rank-rank-detail": "module-guandan-rank-rank-detail",
          "module-ecnyform-activity-log-my-log-list~module-ecnyform-business-list~module-guess-log-pk-log~modul~3d0ba33b": "module-ecnyform-activity-log-my-log-list~module-ecnyform-business-list~module-guess-log-pk-log~modul~3d0ba33b",
          "module-mall-writeoff-manage-refund": "module-mall-writeoff-manage-refund",
          "module-customer-fhtvn-no-rank-list~module-customer-fhtvn-rank-list": "module-customer-fhtvn-no-rank-list~module-customer-fhtvn-rank-list",
          "module-customer-fhtvn-no-rank-list": "module-customer-fhtvn-no-rank-list",
          "module-customer-fhtvn-rank-list": "module-customer-fhtvn-rank-list",
          "module-mall-business-offline-business": "module-mall-business-offline-business",
          "module-mall-comment-comment-center": "module-mall-comment-comment-center",
          "module-mall-writeoff-manage-goods": "module-mall-writeoff-manage-goods",
          "module-mall-writeoff-manage-order": "module-mall-writeoff-manage-order",
          "module-live-home-home": "module-live-home-home",
          "module-lottery-writeoff-loglist": "module-lottery-writeoff-loglist",
          "module-mall-coupon-coupon-list": "module-mall-coupon-coupon-list",
          "module-mall-exchange-log-exchange-log": "module-mall-exchange-log-exchange-log",
          "module-mall-exchange-log-exchange-log-style-four": "module-mall-exchange-log-exchange-log-style-four",
          "module-mall-refund-list": "module-mall-refund-list",
          "module-mall-writeoff-coupon-loglist": "module-mall-writeoff-coupon-loglist",
          "module-mall-writeoff-loglist": "module-mall-writeoff-loglist",
          "module-mall-writeoff-order-list": "module-mall-writeoff-order-list",
          "module-mall-zone-home": "module-mall-zone-home",
          "module-member-integral-detail-integral-detail": "module-member-integral-detail-integral-detail",
          "module-member-integral-rank-integral-rank": "module-member-integral-rank-integral-rank",
          "module-member-message-message": "module-member-message-message",
          "module-vote-result-result": "module-vote-result-result",
          "module-whipped-eggs-rank-history-rank": "module-whipped-eggs-rank-history-rank",
          "pages-activity-list": "pages-activity-list",
          "module-answer-answer-log-answer-log": "module-answer-answer-log-answer-log",
          "module-clockin-cert-get-cert~module-lottery-win-record-win-record~module-mall-address-address-detail~3fd23a5f": "module-clockin-cert-get-cert~module-lottery-win-record-win-record~module-mall-address-address-detail~3fd23a5f",
          "module-clockin-cert-get-cert": "module-clockin-cert-get-cert",
          "module-lottery-win-record-win-record": "module-lottery-win-record-win-record",
          "module-customer-xmtv-flowers": "module-customer-xmtv-flowers",
          "module-farm-goods-exchange-goods-exchange~module-farm-goods-list-goods-list": "module-farm-goods-exchange-goods-exchange~module-farm-goods-list-goods-list",
          "module-farm-goods-exchange-goods-exchange": "module-farm-goods-exchange-goods-exchange",
          "module-farm-kinds-goods-exchange-goods-exchange~module-farm-kinds-goods-list-goods-list": "module-farm-kinds-goods-exchange-goods-exchange~module-farm-kinds-goods-list-goods-list",
          "module-farm-kinds-goods-exchange-goods-exchange": "module-farm-kinds-goods-exchange-goods-exchange",
          "module-mall-address-address-list": "module-mall-address-address-list",
          "module-supertopic-detail-mylog~module-supertopic-me-me": "module-supertopic-detail-mylog~module-supertopic-me-me",
          "module-supertopic-me-me": "module-supertopic-me-me",
          "module-mall-address-address-detail~module-mall-business-apply": "module-mall-address-address-detail~module-mall-business-apply",
          "module-mall-address-address-detail": "module-mall-address-address-detail",
          "module-clockin-log-log": "module-clockin-log-log",
          "module-supertopic-detail-mylog": "module-supertopic-detail-mylog",
          "module-clockin-member-join-list": "module-clockin-member-join-list",
          "module-clockin-member-rank-list": "module-clockin-member-rank-list",
          "module-cms-atlas-detail": "module-cms-atlas-detail",
          "module-customer-fhtvn-main-map": "module-customer-fhtvn-main-map",
          "module-customer-xmtv-publicize~module-customer-xmtv-short-videos": "module-customer-xmtv-publicize~module-customer-xmtv-short-videos",
          "module-customer-xmtv-short-videos": "module-customer-xmtv-short-videos",
          "module-ecnyform-activity-log-my-log-list": "module-ecnyform-activity-log-my-log-list",
          "module-ecnyform-business-list": "module-ecnyform-business-list",
          "module-guess-log-pk-log": "module-guess-log-pk-log",
          "module-mall-business-business": "module-mall-business-business",
          "module-mall-business-business-new": "module-mall-business-business-new",
          "module-mall-business-business-new-style-four": "module-mall-business-business-new-style-four",
          "module-mall-comment-comment": "module-mall-comment-comment",
          "module-mall-writeoff-manage-customer": "module-mall-writeoff-manage-customer",
          "module-farm-goods-list-goods-list": "module-farm-goods-list-goods-list",
          "module-farm-kinds-goods-list-goods-list": "module-farm-kinds-goods-list-goods-list",
          "module-footmark-log-detail-log-detail": "module-footmark-log-detail-log-detail",
          "module-guess-log-activity-log": "module-guess-log-activity-log",
          "module-info-pub-report-report~module-live-report-report~module-mall-business-apply~module-mall-comme~f4ab7752": "module-info-pub-report-report~module-live-report-report~module-mall-business-apply~module-mall-comme~f4ab7752",
          "module-mall-business-apply": "module-mall-business-apply",
          "module-info-pub-report-report": "module-info-pub-report-report",
          "module-live-report-report": "module-live-report-report",
          "module-mall-comment-comment-create": "module-mall-comment-comment-create",
          "module-mall-refund-apply": "module-mall-refund-apply",
          "module-lottery-win-record-detail-win-record-detail~module-lottery-writeoff-confirm~module-lottery-wr~345e859a": "module-lottery-win-record-detail-win-record-detail~module-lottery-writeoff-confirm~module-lottery-wr~345e859a",
          "module-signup-activity-log-log-detail": "module-signup-activity-log-log-detail",
          "module-signup-writeoff-confirm": "module-signup-writeoff-confirm",
          "module-lottery-win-record-detail-win-record-detail~module-mall-order-detail-order-detail~module-mall~4e6aba87": "module-lottery-win-record-detail-win-record-detail~module-mall-order-detail-order-detail~module-mall~4e6aba87",
          "module-lottery-win-record-detail-win-record-detail": "module-lottery-win-record-detail-win-record-detail",
          "module-mall-order-detail-order-detail~module-mall-order-detail-order-detail-businessmen": "module-mall-order-detail-order-detail~module-mall-order-detail-order-detail-businessmen",
          "module-mall-order-detail-order-detail": "module-mall-order-detail-order-detail",
          "module-mall-order-detail-order-detail-businessmen": "module-mall-order-detail-order-detail-businessmen",
          "module-lottery-writeoff-confirm": "module-lottery-writeoff-confirm",
          "module-lottery-writeoff-logdetail": "module-lottery-writeoff-logdetail",
          "module-mall-coupon-coupon-detail": "module-mall-coupon-coupon-detail",
          "module-mall-hongbao-pay-detail": "module-mall-hongbao-pay-detail",
          "module-mall-writeoff-confirm": "module-mall-writeoff-confirm",
          "module-mall-writeoff-coupon-confirm": "module-mall-writeoff-coupon-confirm",
          "module-mall-writeoff-coupon-logdetail": "module-mall-writeoff-coupon-logdetail",
          "module-mall-writeoff-logdetail": "module-mall-writeoff-logdetail",
          "module-mall-writeoff-receive-money": "module-mall-writeoff-receive-money",
          "module-mall-writeoff-order-detail": "module-mall-writeoff-order-detail",
          "module-lottery-writeoff-home": "module-lottery-writeoff-home",
          "module-lottery-writeoff-success": "module-lottery-writeoff-success",
          "module-mall-bind-auth-bind": "module-mall-bind-auth-bind",
          "module-mall-cart-cart": "module-mall-cart-cart",
          "module-mall-coupon-coupon-show-list": "module-mall-coupon-coupon-show-list",
          "module-mall-customer-business-customer~module-mall-customer-customer": "module-mall-customer-business-customer~module-mall-customer-customer",
          "module-mall-customer-business-customer": "module-mall-customer-business-customer",
          "module-mall-customer-customer": "module-mall-customer-customer",
          "module-mall-customer-pre-sales-customer": "module-mall-customer-pre-sales-customer",
          "module-mall-goods-activity-goods-activity": "module-mall-goods-activity-goods-activity",
          "module-mall-goodslist-goods-class-list": "module-mall-goodslist-goods-class-list",
          "module-mall-offline-pay-log-detail": "module-mall-offline-pay-log-detail",
          "module-mall-offline-pay-log-list": "module-mall-offline-pay-log-list",
          "module-mall-order-result-order-result": "module-mall-order-result-order-result",
          "module-mall-refund-detail": "module-mall-refund-detail",
          "module-mall-user-user-center": "module-mall-user-user-center",
          "module-mall-user-user-center-style-four": "module-mall-user-user-center-style-four",
          "module-mall-writeoff-coupon-home": "module-mall-writeoff-coupon-home",
          "module-mall-writeoff-coupon-success": "module-mall-writeoff-coupon-success",
          "module-mall-writeoff-home": "module-mall-writeoff-home",
          "module-mall-writeoff-login": "module-mall-writeoff-login",
          "module-mall-writeoff-manage-home": "module-mall-writeoff-manage-home",
          "module-mall-writeoff-pay-detail": "module-mall-writeoff-pay-detail",
          "module-mall-writeoff-success": "module-mall-writeoff-success",
          "module-mall-writeoff-type-select": "module-mall-writeoff-type-select",
          "module-member-cashout-cashout-log": "module-member-cashout-cashout-log",
          "module-member-currency-rule-currency-rule": "module-member-currency-rule-currency-rule",
          "module-member-level-info-level-info": "module-member-level-info-level-info",
          "module-member-medal-medal": "module-member-medal-medal",
          "module-member-medal-medal-detail": "module-member-medal-medal-detail",
          "module-member-message-message-sort": "module-member-message-message-sort",
          "module-member-signin-signin-rule": "module-member-signin-signin-rule",
          "module-member-welfare-welfare": "module-member-welfare-welfare",
          "module-poetry-rank-list-rank-list": "module-poetry-rank-list-rank-list",
          "module-query-search-search-results": "module-query-search-search-results",
          "module-screen-interact-win-record-detail-win-record-detail": "module-screen-interact-win-record-detail-win-record-detail",
          "module-sdk-demo-cmstopv3sdk": "module-sdk-demo-cmstopv3sdk",
          "module-sdk-demo-fluttersdk": "module-sdk-demo-fluttersdk",
          "module-sdk-demo-jssdk": "module-sdk-demo-jssdk",
          "module-sdk-demo-tianmusdk": "module-sdk-demo-tianmusdk",
          "module-sdk-demo-unisdk": "module-sdk-demo-unisdk",
          "module-sdk-demo-xiuzhousdk": "module-sdk-demo-xiuzhousdk",
          "module-sdk-demo-yantaisdk": "module-sdk-demo-yantaisdk",
          "module-sdk-demo-ziyangsdk": "module-sdk-demo-ziyangsdk",
          "module-signup-activity-log-log-list": "module-signup-activity-log-log-list",
          "module-signup-activity-log-my-log-list": "module-signup-activity-log-my-log-list",
          "module-signup-writeoff-auth-bind": "module-signup-writeoff-auth-bind",
          "module-signup-writeoff-writeoff-list": "module-signup-writeoff-writeoff-list",
          "pages-home-sdk": "pages-home-sdk",
          "pages-home-sdk-activity": "pages-home-sdk-activity",
          "module-answer-answer-log-answer-detail": "module-answer-answer-log-answer-detail",
          "module-article-task-single-single-task": "module-article-task-single-single-task",
          "module-booking-lottery-task-task": "module-booking-lottery-task-task",
          "module-customer-fjdaily-guide": "module-customer-fjdaily-guide",
          "module-customer-kannh-game": "module-customer-kannh-game",
          "module-customer-xmtv-publicize": "module-customer-xmtv-publicize",
          "module-customer-xstv-guide": "module-customer-xstv-guide",
          "module-mall-bind-login": "module-mall-bind-login",
          "module-mall-order-detail-no-order-deatil": "module-mall-order-detail-no-order-deatil",
          "module-member-bind-bind-wechat": "module-member-bind-bind-wechat",
          "module-sdk-demo-cmstopnewsdk": "module-sdk-demo-cmstopnewsdk",
          "module-sdk-demo-cmstopsdk": "module-sdk-demo-cmstopsdk",
          "module-sdk-demo-fangzhengsdk": "module-sdk-demo-fangzhengsdk",
          "module-sdk-demo-injssdk": "module-sdk-demo-injssdk",
          "module-sdk-demo-nbtvsdk": "module-sdk-demo-nbtvsdk",
          "module-sdk-demo-smartcitysdk": "module-sdk-demo-smartcitysdk",
          "module-sdk-demo-tianmasdk": "module-sdk-demo-tianmasdk",
          "module-sdk-demo-trssdk": "module-sdk-demo-trssdk",
          "module-sdk-demo-xingkongyunsdk": "module-sdk-demo-xingkongyunsdk",
          "module-sdk-demo-yongpaisdk": "module-sdk-demo-yongpaisdk",
          "pages-download-close-page": "pages-download-close-page",
          "pages-download-tianmu-download": "pages-download-tianmu-download",
          "pages-home-callback": "pages-home-callback",
          "pages-home-error": "pages-home-error",
          "pages-home-sdk-me": "pages-home-sdk-me",
          "pages-setting-clear": "pages-setting-clear"
        }[e] || e) + "." + {
          "module-activity-home-home~module-ai-face-fusion-home-home~module-answer-answer-log-answer-log~module~f7b76ac1": "5b6d3c0c",
          "module-activity-home-home~module-answer-home-home~module-answer-question-question~module-article-tas~3c43a7bb": "f2786d02",
          "module-activity-home-home~module-answer-home-home~module-answer-question-question~module-article-tas~edb4023f": "aaa472cd",
          "module-activity-home-home~module-answer-home-home~module-answer-question-question~module-article-tas~5a13cc39": "f62595e0",
          "module-activity-home-home": "13aa9261",
          "module-answer-home-home": "1cef6e8d",
          "module-answer-question-question": "c374d35c",
          "module-article-task-home-home": "1f7f229e",
          "module-booking-lottery-home-home": "d35c177a",
          "module-checkers-home-home": "f906acc3",
          "module-clockin-home-home": "78bd6742",
          "module-collect-card-home-home": "b1bd50bc",
          "module-customer-fjdaily-home": "4ed392bc",
          "module-dilate-home-home": "184cf63e",
          "module-ecnyform-home-home": "60a0aa01",
          "module-farm-home-home": "89533664",
          "module-farm-kinds-home-home": "afb40790",
          "module-footmark-home-home": "4d882a7f",
          "module-guandan-home-home": "10d9636b",
          "module-guandan-home-home-two": "788a17c9",
          "module-guess-home-home": "085d3ea7",
          "module-guess-home-pk": "cd92d83e",
          "module-help-home-home": "f10c1662",
          "module-info-pub-home-detail": "e99ca4f8",
          "module-info-pub-home-mine": "745b4e1c",
          "module-info-pub-home-publish": "7a7ce92c",
          "module-invite-home-home": "1d86a5cf",
          "module-invite-invite-invite": "892849ac",
          "module-live-detail-detail": "f9df04b7",
          "module-lottery-home-home": "3793be4c",
          "module-mall-business-business-detail": "de821a8c",
          "module-mall-business-business-home": "a71bb612",
          "module-mall-business-business-home-style-three": "9a71e905",
          "module-mall-coupon-coupon-center": "9d948b3d",
          "module-mall-goods-detail-goods-detail": "dee95b5b",
          "module-mall-goods-detail-goods-detail-style-three": "1d826662",
          "module-mall-goodslist-goodslist": "618b5c41",
          "module-mall-home-home": "8049f4a7",
          "module-mall-home-home-style-four": "482ee3af",
          "module-mall-home-home-style-three": "056a4f47",
          "module-mall-home-home-style-two": "c758743c",
          "module-mall-hongbao-bill": "f516e1cb",
          "module-mall-hongbao-pay": "2d1d89dd",
          "module-mall-notify-wechat-notify": "2f2369ae",
          "module-mall-offline-pay": "4e9a027f",
          "module-mall-seckill-seckill": "9ce10385",
          "module-mall-writeoff-bill": "a63d14fa",
          "module-neurocat-home-home": "ef9d718a",
          "module-nschool-home-home": "f8b81372",
          "module-nschool-subject-subject-info-detail": "8eaad840",
          "module-page-home-home": "051ccd39",
          "module-photo-home-home": "3c8972b3",
          "module-poetry-home-home": "3c587b6b",
          "module-poetry-home-home-two": "01c186a8",
          "module-poetry-question-question": "1b3773a5",
          "module-poetry-question-question-two": "4bb1f99b",
          "module-query-home-home": "766ee9f0",
          "module-signin-home-home": "6f0c2f4b",
          "module-signup-home-home": "08638a04",
          "module-signup-home-update-home": "a293d6f2",
          "module-stepsport-home-home": "2cd998d7",
          "module-study-home-home": "35e279ee",
          "module-study-pass-detail-pass-detail": "6c9cfe0a",
          "module-supertopic-detail-detail": "7e8628e8",
          "module-supertopic-home-home": "69012e06",
          "module-venue-clockin-home-home": "1b9c4063",
          "module-vote-home-home": "d1dd8ed9",
          "module-vote-score-detail": "efe6d438",
          "module-vote-score-home": "0e570fc8",
          "module-vote-vote-detail-vote-detail": "335dd1f1",
          "module-whipped-eggs-home-home": "055f1f5f",
          "module-wish-home-home": "91e48ffa",
          "module-word-home-home": "230b7b55",
          "pages-home-index": "1726325e",
          "pages-member-task-center": "aa5578b7",
          "pages-member-user-center": "8596f065",
          "pages-shopping-mall-home": "3320d5b2",
          "module-clockin-cert-get-cert~module-cms-news-detail~module-cms-video-detail~module-customer-fjdaily-~4f8830ac": "fb0c22d4",
          "module-screen-interact-home-home": "3b9d6958",
          "module-answer-answer-log-answer-detail~module-customer-fhtvn-no-rank-list~module-customer-fhtvn-rank~27a720c1": "c36eb74c",
          "module-farm-game-game~module-farm-goods-exchange-goods-exchange~module-farm-goods-list-goods-list": "0871f5e2",
          "module-farm-game-game": "16cd6c35",
          "module-clockin-log-log~module-cms-news-detail~module-cms-video-detail~module-customer-fjdaily-clocki~540cf0d6": "221b2e47",
          "module-cms-news-detail": "fc761855",
          "module-cms-video-detail": "6c310f30",
          "module-customer-fjdaily-clockin": "1f1aed77",
          "module-mall-confirm-order-confirm-order": "05c8bc3b",
          "module-mall-confirm-order-confirm-order-cart": "1afa4279",
          "module-neurocat-game-game": "9a7cc0e8",
          "module-venue-clockin-detail-detail": "a145f666",
          "module-word-game-game": "50b7342f",
          "module-member-cashout-cashout": "fd08e702",
          "module-ai-face-fusion-home-home": "8aecfb71",
          "module-clockin-cert-get-cert~module-customer-xmtv-flowers~module-guandan-rank-rank-detail~module-lot~911add6f": "88a60129",
          "module-guandan-rank-rank-detail": "028b038b",
          "module-ecnyform-activity-log-my-log-list~module-ecnyform-business-list~module-guess-log-pk-log~modul~3d0ba33b": "da22190a",
          "module-mall-writeoff-manage-refund": "9767c808",
          "module-customer-fhtvn-no-rank-list~module-customer-fhtvn-rank-list": "bc8aab9b",
          "module-customer-fhtvn-no-rank-list": "db2d92bc",
          "module-customer-fhtvn-rank-list": "f24d49ff",
          "module-mall-business-offline-business": "81e7be81",
          "module-mall-comment-comment-center": "94359da1",
          "module-mall-writeoff-manage-goods": "87d0cdb4",
          "module-mall-writeoff-manage-order": "22b7bd5a",
          "module-live-home-home": "e9be1e34",
          "module-lottery-writeoff-loglist": "b96851a3",
          "module-mall-coupon-coupon-list": "cf67bf33",
          "module-mall-exchange-log-exchange-log": "41ba36c9",
          "module-mall-exchange-log-exchange-log-style-four": "35483dcc",
          "module-mall-refund-list": "a602b3ca",
          "module-mall-writeoff-coupon-loglist": "4fd21371",
          "module-mall-writeoff-loglist": "c79b531b",
          "module-mall-writeoff-order-list": "9d20bf6e",
          "module-mall-zone-home": "d6b1993f",
          "module-member-integral-detail-integral-detail": "3fca4caf",
          "module-member-integral-rank-integral-rank": "d649140d",
          "module-member-message-message": "3e26f3bf",
          "module-vote-result-result": "56ddf019",
          "module-whipped-eggs-rank-history-rank": "7c12626a",
          "pages-activity-list": "e988d02d",
          "module-answer-answer-log-answer-log": "4b3ec846",
          "module-clockin-cert-get-cert~module-lottery-win-record-win-record~module-mall-address-address-detail~3fd23a5f": "86997d61",
          "module-clockin-cert-get-cert": "cdc1275b",
          "module-lottery-win-record-win-record": "1989d53f",
          "module-customer-xmtv-flowers": "c7b69b64",
          "module-farm-goods-exchange-goods-exchange~module-farm-goods-list-goods-list": "1492d5c3",
          "module-farm-goods-exchange-goods-exchange": "c8bc5469",
          "module-farm-kinds-goods-exchange-goods-exchange~module-farm-kinds-goods-list-goods-list": "826477dd",
          "module-farm-kinds-goods-exchange-goods-exchange": "473421a1",
          "module-mall-address-address-list": "699cd6bf",
          "module-supertopic-detail-mylog~module-supertopic-me-me": "82a62030",
          "module-supertopic-me-me": "3e25cbac",
          "module-mall-address-address-detail~module-mall-business-apply": "9e56ec3d",
          "module-mall-address-address-detail": "28009d40",
          "module-clockin-log-log": "1ea93ae1",
          "module-supertopic-detail-mylog": "7daf6933",
          "module-clockin-member-join-list": "c47b9f47",
          "module-clockin-member-rank-list": "64fafbce",
          "module-cms-atlas-detail": "7e07f809",
          "module-customer-fhtvn-main-map": "3eaa18ce",
          "module-customer-xmtv-publicize~module-customer-xmtv-short-videos": "9f030f87",
          "module-customer-xmtv-short-videos": "fdd44e8f",
          "module-ecnyform-activity-log-my-log-list": "4fe2ebc4",
          "module-ecnyform-business-list": "6869045d",
          "module-guess-log-pk-log": "3426c496",
          "module-mall-business-business": "7546291d",
          "module-mall-business-business-new": "989d914a",
          "module-mall-business-business-new-style-four": "fc41fb83",
          "module-mall-comment-comment": "8a882c24",
          "module-mall-writeoff-manage-customer": "b0cd42f4",
          "module-farm-goods-list-goods-list": "5f398f8c",
          "module-farm-kinds-goods-list-goods-list": "a9f76f32",
          "module-footmark-log-detail-log-detail": "8847cd70",
          "module-guess-log-activity-log": "07d68113",
          "module-info-pub-report-report~module-live-report-report~module-mall-business-apply~module-mall-comme~f4ab7752": "6d027337",
          "module-mall-business-apply": "9f4d0e1a",
          "module-info-pub-report-report": "0a0bf4af",
          "module-live-report-report": "1adc0e4f",
          "module-mall-comment-comment-create": "00eff896",
          "module-mall-refund-apply": "ced8f4fc",
          "module-lottery-win-record-detail-win-record-detail~module-lottery-writeoff-confirm~module-lottery-wr~345e859a": "adf5be07",
          "module-signup-activity-log-log-detail": "8648b879",
          "module-signup-writeoff-confirm": "f64e3a8e",
          "module-lottery-win-record-detail-win-record-detail~module-mall-order-detail-order-detail~module-mall~4e6aba87": "c3f91e71",
          "module-lottery-win-record-detail-win-record-detail": "f85e55e7",
          "module-mall-order-detail-order-detail~module-mall-order-detail-order-detail-businessmen": "6c26cf7c",
          "module-mall-order-detail-order-detail": "4e7d9cdb",
          "module-mall-order-detail-order-detail-businessmen": "c8806e76",
          "module-lottery-writeoff-confirm": "c1e2b7f9",
          "module-lottery-writeoff-logdetail": "be24d82c",
          "module-mall-coupon-coupon-detail": "39dfe91e",
          "module-mall-hongbao-pay-detail": "8253514b",
          "module-mall-writeoff-confirm": "5d2d2ae3",
          "module-mall-writeoff-coupon-confirm": "f0403a39",
          "module-mall-writeoff-coupon-logdetail": "966d16c8",
          "module-mall-writeoff-logdetail": "cf7f28f7",
          "module-mall-writeoff-receive-money": "39b3e1d8",
          "module-mall-writeoff-order-detail": "2c446c4d",
          "module-lottery-writeoff-home": "90aaf665",
          "module-lottery-writeoff-success": "277a7eff",
          "module-mall-bind-auth-bind": "ad4bfcfb",
          "module-mall-cart-cart": "2783af03",
          "module-mall-coupon-coupon-show-list": "8c11a250",
          "module-mall-customer-business-customer~module-mall-customer-customer": "3ab990ca",
          "module-mall-customer-business-customer": "7a1e08f4",
          "module-mall-customer-customer": "e77813a6",
          "module-mall-customer-pre-sales-customer": "1ffb6d07",
          "module-mall-goods-activity-goods-activity": "18666f97",
          "module-mall-goodslist-goods-class-list": "3c72df58",
          "module-mall-offline-pay-log-detail": "9fc9032b",
          "module-mall-offline-pay-log-list": "e8098bcb",
          "module-mall-order-result-order-result": "5b402e62",
          "module-mall-refund-detail": "a800cd4f",
          "module-mall-user-user-center": "000824f5",
          "module-mall-user-user-center-style-four": "4b9a7e17",
          "module-mall-writeoff-coupon-home": "e414f39b",
          "module-mall-writeoff-coupon-success": "a94a457d",
          "module-mall-writeoff-home": "bb04b04d",
          "module-mall-writeoff-login": "e21564bc",
          "module-mall-writeoff-manage-home": "8c83220a",
          "module-mall-writeoff-pay-detail": "e1e77522",
          "module-mall-writeoff-success": "6bc61a58",
          "module-mall-writeoff-type-select": "5cbe12b4",
          "module-member-cashout-cashout-log": "a807add0",
          "module-member-currency-rule-currency-rule": "43919c49",
          "module-member-level-info-level-info": "b7d51fac",
          "module-member-medal-medal": "ce96a705",
          "module-member-medal-medal-detail": "e6b07a26",
          "module-member-message-message-sort": "364e8a2f",
          "module-member-signin-signin-rule": "525c69a9",
          "module-member-welfare-welfare": "e89b66c8",
          "module-poetry-rank-list-rank-list": "ed7e502b",
          "module-query-search-search-results": "39f0b157",
          "module-screen-interact-win-record-detail-win-record-detail": "e5c2f217",
          "module-sdk-demo-cmstopv3sdk": "40457d60",
          "module-sdk-demo-fluttersdk": "efccbd6f",
          "module-sdk-demo-jssdk": "a1db8344",
          "module-sdk-demo-tianmusdk": "55a75b85",
          "module-sdk-demo-unisdk": "35766d65",
          "module-sdk-demo-xiuzhousdk": "4008d838",
          "module-sdk-demo-yantaisdk": "b27da057",
          "module-sdk-demo-ziyangsdk": "0b75689a",
          "module-signup-activity-log-log-list": "f6046bec",
          "module-signup-activity-log-my-log-list": "26a7ab8b",
          "module-signup-writeoff-auth-bind": "636223ce",
          "module-signup-writeoff-writeoff-list": "b2b0fe1e",
          "pages-home-sdk": "0078f7b7",
          "pages-home-sdk-activity": "8e428832",
          "module-answer-answer-log-answer-detail": "aecde535",
          "module-article-task-single-single-task": "b8b715e5",
          "module-booking-lottery-task-task": "f44a15de",
          "module-customer-fjdaily-guide": "8aa8bf34",
          "module-customer-kannh-game": "fe88159f",
          "module-customer-xmtv-publicize": "d28fa7f7",
          "module-customer-xstv-guide": "23a47eda",
          "module-mall-bind-login": "a00a4996",
          "module-mall-order-detail-no-order-deatil": "525a9ccd",
          "module-member-bind-bind-wechat": "83410229",
          "module-sdk-demo-cmstopnewsdk": "f2e55df2",
          "module-sdk-demo-cmstopsdk": "8a609b62",
          "module-sdk-demo-fangzhengsdk": "953bcdc9",
          "module-sdk-demo-injssdk": "4fc4c6d4",
          "module-sdk-demo-nbtvsdk": "81aaebf8",
          "module-sdk-demo-smartcitysdk": "d65c203a",
          "module-sdk-demo-tianmasdk": "fb8a7ed8",
          "module-sdk-demo-trssdk": "08864bc4",
          "module-sdk-demo-xingkongyunsdk": "6ec7867b",
          "module-sdk-demo-yongpaisdk": "b0ecfb87",
          "pages-download-close-page": "ebd8024f",
          "pages-download-tianmu-download": "5856b2d4",
          "pages-home-callback": "a6a847d5",
          "pages-home-error": "d0e44bac",
          "pages-home-sdk-me": "12419744",
          "pages-setting-clear": "d69341de"
        }[e] + ".js";
      }(e);
      var l = new Error();
      i = function (n) {
        u.onerror = u.onload = null, clearTimeout(s);
        var o = a[e];
        if (0 !== o) {
          if (o) {
            var t = n && ("load" === n.type ? "missing" : n.type),
              i = n && n.target && n.target.src;
            l.message = "Loading chunk " + e + " failed.\n(" + t + ": " + i + ")", l.name = "ChunkLoadError", l.type = t, l.request = i, o[1](l);
          }
          a[e] = void 0;
        }
      };
      var s = setTimeout(function () {
        i({
          type: "timeout",
          target: u
        });
      }, 120000);
      u.onerror = u.onload = i, document.head.appendChild(u);
    }
    return Promise.all(n);
  }, r.m = e, r.c = t, r.d = function (e, n, o) {
    r.o(e, n) || Object.defineProperty(e, n, {
      enumerable: !0,
      get: o
    });
  }, r.r = function (e) {
    "undefined" !== typeof Symbol && Symbol.toStringTag && Object.defineProperty(e, Symbol.toStringTag, {
      value: "Module"
    }), Object.defineProperty(e, "__esModule", {
      value: !0
    });
  }, r.t = function (e, n) {
    if (1 & n && (e = r(e)), 8 & n) return e;
    if (4 & n && "object" === typeof e && e && e.__esModule) return e;
    var o = Object.create(null);
    if (r.r(o), Object.defineProperty(o, "default", {
      enumerable: !0,
      value: e
    }), 2 & n && "string" != typeof e) for (var t in e) r.d(o, t, function (n) {
      return e[n];
    }.bind(null, t));
    return o;
  }, r.n = function (e) {
    var n = e && e.__esModule ? function () {
      return e["default"];
    } : function () {
      return e;
    };
    return r.d(n, "a", n), n;
  }, r.o = function (e, n) {
    return Object.prototype.hasOwnProperty.call(e, n);
  }, r.p = "/", r.oe = function (e) {
    throw console.error(e), e;
  };
  var u = window["webpackJsonp"] = window["webpackJsonp"] || [],
    l = u.push.bind(u);
  u.push = n, u = u.slice();
  for (var s = 0; s < u.length; s++) n(u[s]);
  var m = l;
  i.push([0, "chunk-vendors"]), o();
})({
  0: function (e, n, o) {
    e.exports = o("406e");
  },
  "040d": function (e, n, o) {
    "use strict";

    o("6a54"), Object.defineProperty(n, "__esModule", {
      value: !0
    }), n.default = void 0, o("5c47"), o("0506"), o("7628");
    var t = !1,
      a = navigator.userAgent.toLowerCase();
    /mediacloudclientv3/gi.test(a) && window.mcSdk && (window.mcSdk.config({}), window.mcSdk.ready(function () {
      t = !0;
    }));
    var i = {
        isInApp: function () {
          var e = navigator.userAgent.toLowerCase();
          return !!/mediacloudclientv3/gi.test(e);
        },
        getSystemInfo: function (e) {},
        getUserInfo: function (e) {
          var n = this;
          t ? window.mcSdk.getUserInfo({
            callbacks: {
              success: function (n) {
                if (n && n.user_id && "anonymous" != n.user_id) {
                  var o = {
                    user_id: n.user_id,
                    user_name: n.alias || "",
                    portrait_url: n.avatar || "",
                    phone: n.tel || "",
                    wx_openid: "",
                    wx_unionid: "",
                    app_user_token: n.token || ""
                  };
                  e && e(o);
                } else e && e(!1);
              },
              fail: function (n) {
                e && e(!1);
              }
            }
          }) : setTimeout(function () {
            n.getUserInfo(e);
          }, 200);
        },
        getLocation: function (e) {},
        shareTo: function () {},
        goToLoginPage: function () {
          window.mcSdk && window.mcSdk.login({
            callbacks: {
              success: function () {
                window.location.reload();
              },
              fail: function () {},
              complete: function () {}
            }
          });
        },
        goToBindPage: function () {},
        saveImage: function () {},
        linkTo: function () {},
        jumpToNews: function () {
          var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : "";
          if (e) {
            var n = e.split("#"),
              o = "article",
              t = 0;
            n[0] && (t = n[0]), n[1] && (o = n[1]), window.mcSdk.pushContent({
              params: {
                series: o,
                id: t,
                mp: "0"
              }
            });
          }
        },
        goUcenter: function () {},
        playAudio: function () {},
        showShare: function () {
          var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {};
          window.mcSdk && window.mcSdk.share({
            params: {
              url: e.link_url,
              title: e.title,
              dec: e.brief,
              thumb: e.indexpic
            },
            callbacks: {
              success: function () {},
              fail: function () {},
              complete: function () {}
            }
          });
        },
        openpaper: function () {}
      },
      r = i;
    n.default = r;
  },
  "08c5": function (e, n, o) {
    "use strict";

    function t(e, n, o) {
      if ("kxzAppBridge" in window) {
        if (kxzAppBridge.checkJsApi(e)) {
          var t;
          if (n) {
            var a = "call_back_" + function () {
              var e = new Date().getTime(),
                n = "xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx".replace(/[xy]/g, function (n) {
                  var o = (e + 16 * Math.random()) % 16 | 0;
                  return e = Math.floor(e / 16), ("x" == n ? o : 3 & o | 8).toString(16);
                });
              return n;
            }();
            window[a] = n.success, n["call_back_name"] = a, t = kxzAppBridge[e](JSON.stringify(n));
          } else t = kxzAppBridge[e]();
          o(t);
        } else alert("\u5BA2\u6237\u7AEF\u7248\u672C\u8FC7\u4F4E\uFF0C\u8BF7\u5347\u7EA7\u5230\u6700\u65B0\u7248\u672C\uFF01"), o(!1);
      } else (function (e) {
        if (window.WebViewJavascriptBridge) return e(WebViewJavascriptBridge);
        if (window.WVJBCallbacks) return window.WVJBCallbacks.push(e);
        window.WVJBCallbacks = [e];
        var n = document.createElement("iframe");
        n.style.display = "none", n.src = "https://__bridge_loaded__", document.documentElement.appendChild(n), setTimeout(function () {
          document.documentElement.removeChild(n);
        }, 0);
      })(function (t) {
        t.callHandler("checkJsApi", {
          param: e
        }, function (a) {
          0 == a ? (alert("\u5BA2\u6237\u7AEF\u7248\u672C\u8FC7\u4F4E\uFF0C\u8BF7\u5347\u7EA7\u5230\u6700\u65B0\u7248\u672C\uFF01"), o(!1)) : t.callHandler("jsCallOC", {
            param: n,
            fun: e
          }, function (e) {
            o(e);
          });
        });
      });
    }
    o("6a54"), Object.defineProperty(n, "__esModule", {
      value: !0
    }), n.default = void 0, o("aa9c"), o("5c47"), o("a1c1"), o("c9b5"), o("bf0f"), o("ab80"), o("d4b5");
    var a = {
      getUserInfo: function (e) {
        t("getUserInfo", !1, function (n) {
          !1 !== n && e.success(JSON.parse(n));
        });
      },
      getLocation: function (e) {
        t("getLocation", e, function (n) {
          !1 !== n && ("kxzAppBridge" in window ? e : e.success(JSON.parse(n)));
        });
      },
      chooseImage: function (e) {
        t("chooseImage", e, function (n) {
          !1 !== n && ("kxzAppBridge" in window ? e : e.success(JSON.parse(n)));
        });
      },
      startRecord: function () {
        t("startRecord", !1, function (e) {});
      },
      stopRecord: function (e) {
        t("stopRecord", !1, function (n) {
          !1 !== n && ("kxzAppBridge" in window ? e : e.success(JSON.parse(n)));
        });
      },
      onVoiceRecordEnd: function (e) {
        e;
      },
      closeWindow: function () {
        t("closeWindow", !1, function (e) {});
      },
      setShareData: function (e) {
        t("setShareData", e, function (e) {});
      },
      showShareDialog: function (e) {
        t("showShareDialog", e, function (e) {});
      },
      goTo: function (e) {
        t("goTo", e, function (e) {});
      },
      scanQRCode: function (e) {
        t("scanQRCode", e, function (n) {
          !1 !== n && ("kxzAppBridge" in window ? e : e.success(JSON.parse(n)));
        });
      },
      goLogin: function (e) {
        t("goLogin", e, function (n) {
          !1 !== n && ("kxzAppBridge" in window ? e : e.success(JSON.parse(n)));
        });
      },
      playVoice: function (e) {
        t("playVoice", e, function (n) {
          !1 !== n && ("kxzAppBridge" in window ? e : e.success(JSON.parse(n)));
        });
      },
      setShareBtn: function (e) {
        t("setShareBtn", e, function (n) {
          !1 !== n && e.success(JSON.parse(n));
        });
      },
      pauseVoice: function (e) {
        t("pauseVoice", e, function (e) {});
      },
      resumeVoice: function (e) {
        t("resumeVoice", e, function (e) {});
      },
      muteVoice: function (e) {
        t("muteVoice", e, function (e) {});
      },
      unmuteVoice: function (e) {
        t("unmuteVoice", e, function (e) {});
      }
    };
    var i = a;
    n.default = i;
  },
  "0949": function (e, n, o) {
    "use strict";

    o("6a54");
    var t = o("f5bd").default;
    Object.defineProperty(n, "__esModule", {
      value: !0
    }), n.default = void 0;
    var a = t(o("1bf0")),
      i = {
        isInApp: function () {
          return !!a.default.isInApp();
        },
        getSystemInfo: function (e) {},
        getUserInfo: function (e) {
          a.default.getUserInfo(function (n) {
            if (n && n.data) {
              var o = n.data.id ? n.data.thirdToken + "|" + n.data.token : n.data.token,
                t = {
                  user_id: n.data.userId || n.data.id || "",
                  user_name: n.data.name || n.data.nickName || "",
                  portrait_url: n.data.icon || n.data.avatar || "",
                  phone: n.data.phone || "",
                  wx_openid: "",
                  wx_unionid: "",
                  app_user_token: o || ""
                };
              e && e(t);
            } else e && e(!1);
          });
        },
        getLocation: function (e) {},
        shareTo: function () {
          var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {};
          a.default.shareTo({
            is_set: 1,
            title: e.title,
            brief: e.brief,
            link_url: e.link_url,
            indexpic: e.indexpic
          });
        },
        goToLoginPage: function () {
          window.userLoginCallback = function (e) {
            window.location.reload();
          }, a.default.goToLoginPage();
        },
        goToBindPage: function () {},
        saveImage: function () {},
        linkTo: function () {},
        jumpToNews: function () {
          var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : "";
          if (e) {
            var n = e.split("#"),
              o = 0;
            n[0] && (o = n[0]);
            var t = "";
            n[1] && (t = n[1]), a.default.jumpToNews(o, t);
          }
        },
        goUcenter: function () {},
        playAudio: function () {},
        showShare: function () {
          var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {};
          a.default.shareTo({
            is_set: 0,
            title: e.title,
            brief: e.brief,
            link_url: e.link_url,
            indexpic: e.indexpic
          });
        },
        loadPayUrl: function (e) {
          a.default.loadPayUrl(e.oid, e.payUrl, e.callbackUrl);
        },
        goToRealnamePage: function () {
          a.default.goToRealnamePage();
        },
        openpaper: function () {}
      },
      r = i;
    n.default = r;
  },
  1: function (e, n) {},
  1209: function (e, n, o) {
    "use strict";

    o("6a54");
    var t = o("f5bd").default;
    Object.defineProperty(n, "__esModule", {
      value: !0
    }), n.default = void 0;
    var a = t(o("b7c7"));
    o("5c47"), o("a1c1"), o("e966"), o("64aa"), o("c9b5"), o("bf0f"), o("ab80");
    var i = o("9219"),
      r = t(o("671e")),
      u = function (e) {
        var n = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : "YYYY-MM-DD HH:mm:ss";
        return (0, r.default)(1000 * e).format(n);
      },
      l = function (e) {
        return e = e.replace(/-/g, "/"), new Date(e).getTime() / 1000;
      },
      s = {
        filterImageUrl: function (e) {
          var n = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0,
            o = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 0,
            t = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : "",
            a = arguments.length > 4 && void 0 !== arguments[4] && arguments[4];
          try {
            return e ? ("string" === typeof e && (e = JSON.parse(e)), Array.isArray(e) && e.length && e[0] && (e = e[0]), e ? (0, i.getImageUrl)(e, n, o, t, a) : "") : "";
          } catch (r) {
            return "";
          }
        },
        filterMediaUrl: function (e) {
          try {
            return "string" === typeof e && (e = JSON.parse(e)), Array.isArray(e) && e.length && e[0] && (e = e[0]), e ? (e.detail && (e = e.detail), e.host + e.file) : "";
          } catch (n) {
            return "";
          }
        },
        filterRatio: function (e) {
          var n = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : "";
          if (!n) return e;
          var o = (0, a.default)(n.split(":")),
            t = o[0],
            i = o[1];
          t = parseInt(t), i = parseInt(i);
          var r = parseInt(e * i / t);
          return r;
        },
        filterDateFormat: u,
        filterTimeStamp: l,
        filterTimeFrom: function () {
          var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : null,
            n = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : "YYYY-MM-DD";
          "string" == typeof e && (e = l(e)), null == e && (e = Number(new Date())), e = parseInt(e), 10 == e.toString().length && (e *= 1000);
          var o = new Date().getTime() - e;
          o = parseInt(o / 1000);
          var t = "";
          switch (!0) {
            case o < 300:
              t = "\u521A\u521A";
              break;
            case o >= 300 && o < 3600:
              t = "".concat(parseInt(o / 60), "\u5206\u949F\u524D");
              break;
            case o >= 3600 && o < 86400:
              t = "".concat(parseInt(o / 3600), "\u5C0F\u65F6\u524D");
              break;
            case o >= 86400 && o < 2592000:
              t = "".concat(parseInt(o / 86400), "\u5929\u524D");
              break;
            default:
              t = !1 === n ? o >= 2592000 && o < 31536000 ? "".concat(parseInt(o / 2592000), "\u4E2A\u6708\u524D") : "".concat(parseInt(o / 31536000), "\u5E74\u524D") : u(e / 1000, n);
          }
          return t;
        }
      };
    n.default = s;
  },
  "1bf0": function (e, n, o) {
    "use strict";

    o("6a54");
    var t = o("f5bd").default;
    Object.defineProperty(n, "__esModule", {
      value: !0
    }), n.default = void 0;
    var a = t(o("9b1b"));
    o("5c47"), o("0506");
    var i = {
        successinfo: {
          code: 0,
          message: "\u83B7\u53D6\u6210\u529F"
        },
        errorinfo: {
          code: 1,
          message: "\u672A\u83B7\u53D6\u5230"
        },
        isappback: null,
        huiyuanback: null,
        shebeiback: null,
        phoneType: function () {
          var e = navigator.userAgent || navigator.vendor || window.opera;
          return /iPhone|iPad|iPod/.test(e) ? "IOS" : /Android/.test(e) ? "Android" : "Unknow";
        },
        isInApp: function () {
          var e = navigator.userAgent || navigator.vendor || window.opera;
          return !!/yanhaiapp/.test(e);
        },
        isInAppCallBack: function (e) {
          i.resultcallback(e, i.isappback);
        },
        resultcallback: function (e, n) {
          null != e && e && n ? ("Android" == this.phoneType() && (e = JSON.parse(e)), n((0, a.default)((0, a.default)({}, i.successinfo), {}, {
            data: e
          }))) : n && n(i.errorinfo);
        },
        getUserInfo: function (e) {
          if ("IOS" == this.phoneType()) window.webkit.messageHandlers.getUserInfo.postMessage({
            functionName: "getUserInfoCallBack"
          }), window.getUserInfoCallBack = i.getUserInfoCallBack, i.huiyuanback = e;else {
            if ("Android" != this.phoneType()) return e(i.errorinfo);
            var n = window.app.getUserInfo();
            i.resultcallback(n, e);
          }
        },
        getUserInfoCallBack: function (e) {
          null != e.phone && e.phone && 0 != e.phone.length || (e = null), i.resultcallback(e, i.huiyuanback);
        },
        shareTo: function (e) {
          "IOS" == this.phoneType() ? window.webkit.messageHandlers.shareTo.postMessage(e) : "Android" == this.phoneType() && window.app.shareTo(e.is_set, e.title, e.brief, e.link_url, e.indexpic);
        },
        goToLoginPage: function () {
          "IOS" == this.phoneType() ? window.webkit.messageHandlers.goToLoginPage.postMessage({}) : "Android" == this.phoneType() && window.app.goToLoginPage();
        },
        getSystemInfo: function (e) {
          if ("IOS" == this.phoneType()) window.webkit.messageHandlers.getSystemInfo.postMessage({
            functionName: "getSystemInfoCallBack"
          }), window.getSystemInfoCallBack = i.getSystemInfoCallBack, i.shebeiback = e;else {
            if ("Android" != this.phoneType()) return e(i.errorinfo);
            var n = window.app.getSystemInfo();
            i.resultcallback(n, e);
          }
        },
        getSystemInfoCallBack: function (e) {
          i.resultcallback(e, i.shebeiback);
        },
        jumpToNews: function (e, n) {
          var o = {
            newsId: e,
            newsJsonUrl: n
          };
          "IOS" == this.phoneType() ? window.webkit.messageHandlers.jumpToNews.postMessage(o) : "Android" == this.phoneType() && window.app.jumpToNews(e, n);
        },
        jumpToWxApp: function (e, n) {
          var o = {
            appId: e,
            path: n
          };
          "IOS" == this.phoneType() ? window.webkit.messageHandlers.jumpToWxApp.postMessage(o) : "Android" == this.phoneType() && window.app.jumpToWxApp(e, n);
        },
        jumpToRealnameVerify: function () {
          "IOS" == this.phoneType() ? window.webkit.messageHandlers.jumpToRealnameVerify.postMessage({}) : "Android" == this.phoneType() && window.app.jumpToRealnameVerify();
        },
        loadPayUrl: function (e, n, o) {
          var t = {
            pay_seq_num: e,
            url: n,
            callback_url: o
          };
          "IOS" == this.phoneType() ? window.webkit.messageHandlers.loadPayUrl.postMessage(t) : "Android" == this.phoneType() && window.app.loadPayUrl(e, n, o);
        },
        goToRealnamePage: function () {
          "IOS" == this.phoneType() ? window.webkit.messageHandlers.goToRealnamePage.postMessage({}) : "Android" == this.phoneType() && window.app.goToRealnamePage();
        }
      },
      r = i;
    n.default = r;
  },
  "23d4": function (e, n, o) {
    var t = o("7b0c");
    t.__esModule && (t = t.default), "string" === typeof t && (t = [[e.i, t, ""]]), t.locals && (e.exports = t.locals);
    var a = o("967d").default;
    a("5b2ef97b", t, !0, {
      sourceMap: !1,
      shadowMode: !1
    });
  },
  "2cfc": function (e, n, o) {
    "use strict";

    o("6a54");
    var t = o("f5bd").default;
    Object.defineProperty(n, "__esModule", {
      value: !0
    }), n.default = void 0;
    var a = t(o("9527"));
    var i = {
        communityApiDomain: "ya-community.iyunxh.com",
        apiBaseDomain: "yapi.y-h5.iyunxh.com",
        voteApiBaseDomain: "yapi.y-h5.iyunxh.com",
        staticApiBaseDomain: "static-ya.y-h5.iyunxh.com",
        ydPlatformDomain: "https://mz1xv.y-h5.iyunxh.com",
        thirdPlatforms: {
          hg: {
            sdk: "hg-jssdk.js"
          },
          cmstop: {
            sdk: "cmstop-jssdk.js"
          },
          newcmstop: {
            sdk: "newcmstop-jssdk.js"
          },
          cmstopv3: {
            sdk: "cmstopv3-jssdk.js"
          },
          jinhua: {
            sdk: "jinhua-jssdk.js",
            payRedirectUrls: {
              jinhua: "https://jinhua.y-h5.iyunxh.com/pages/home/callback?frompage=jincaiapp%3A%2F%2Fcom.hoge.android.jinhua%2Fjincaiapp"
            }
          },
          yongpai: {
            sdk: "yongpai-jssdk.js",
            apps: ["watchninghai", "yongpai"]
          },
          nbtv: {
            sdk: "nbtv-jssdk.js",
            appkey: "yggyn6n809HqNECkBX0Nz6uspeN7abwQ",
            appsecret: "eWeqne9E"
          },
          tianmu: {
            sdk: "tianmu-jssdk.js",
            apps: ["xsb_yaojie", "xsb_yueqing", "xsb_fenghua", "xsb_dujia", "xsb_quzhou", "xsb_xiaoshanfabu", "xsb_aitongxiang", "xsb_zhenhai", "xsb_yongkang", "xsb_linpin", "xsb_yijujiande", "xsb_linan", "xsb_iwenling", "xsb_liandu", "xsb_aihaiyan", "xsb_jingzhou", "xsb_lanjingling", "xsb_aishangfuyang", "xsb_longwan", "xsb_shangyu", "xsb_ouhai", "xsb_wuyi", "xsb_yinxiang", "xsb_kxz", "xsb_kanxiuzhou", "xsb_ruian", "xsb_xiangshan", "xsb_wangchao", "xsb_beilun", "xsb_jiaojiang"],
            tenantIds: {
              xsb_yueqing: 41,
              xsb_fenghua: 71,
              xsb_dujia: 46,
              xsb_quzhou: 55,
              xsb_xiaoshanfabu: 66,
              xsb_aitongxiang: 84,
              xsb_zhenhai: 86,
              xsb_yongkang: 36,
              xsb_linpin: 45,
              xsb_yijujiande: 53,
              xsb_linan: 56,
              xsb_iwenling: 3,
              xsb_liandu: 90,
              xsb_aihaiyan: 60,
              xsb_jingzhou: 92,
              xsb_lanjingling: 72,
              xsb_aishangfuyang: 93,
              xsb_longwan: 51,
              xsb_shangyu: 44,
              xsb_ouhai: 78,
              xsb_wuyi: 73,
              xsb_yinxiang: 61,
              xsb_kxz: 97,
              xsb_kanxiuzhou: 97,
              xsb_ruian: 48,
              xsb_xiangshan: 76,
              xsb_wangchao: 64,
              xsb_beilun: 18,
              xsb_jiaojiang: 23
            },
            sharePageDomains: {
              default: "https://app.tmuyun.com",
              xsb_dujia: "https://app.jiaxingren.com",
              xsb_quzhou: "https://app.qz123.com",
              xsb_zhenhai: "https://appshare.zhxww.net",
              xsb_linpin: "https://news.hi-lp.cn",
              xsb_ouhai: "https://app.ohnews.cn",
              xsb_wangchao: "https://tzapp.taizhou.com.cn",
              xsb_beilun: "https://share.blnews.com.cn",
              xsb_jiaojiang: "https://app.jiaojiangnews.com"
            },
            newsDetailPage: "/webDetails/{page_type}?gaze_open=1&id="
          },
          trs: {
            sdk: "trs-jssdk.js"
          },
          injs: {
            sdk: "injs-jssdk.js",
            appid: "nHjcMIHGn8oD09yb",
            appsecret: "4d1ee7c7d038dba5c887e4d5d5d9198cee7ad9fd"
          },
          fangzheng: {
            sdk: "fangzheng-jssdk.js"
          },
          xingkongyun: {
            sdk: "xingkongyun-jssdk.js"
          },
          xiuzhou: {
            sdk: "xiuzhou-jssdk.js"
          },
          ziyang: {
            sdk: "ziyang-jssdk.js"
          },
          yantai: {
            sdk: "yantai-jssdk.js"
          },
          tianma: {
            sdk: "tianma-jssdk.js"
          }
        },
        schemaList: ["weixin://"],
        resDomains: {
          image: "https://ydoss.iyunxh.com/pics",
          media: "https://ydoss.iyunxh.com/medias"
        },
        proResDomains: {
          image: "https://yoss.iyunxh.com/pics",
          media: "https://yoss.iyunxh.com/medias",
          file: "https://yoss.iyunxh.com/files"
        },
        platformTypes: {
          android: 1,
          ios: 2,
          h5: 3,
          mpWeixin: 4,
          web: 5
        },
        payClients: {
          official: "wx_official",
          web: "wx_web"
        },
        globalEvents: {
          pageLoadMore: "pageLoadMore",
          nschoolPullDownRefresh: "nschoolPullDownRefresh",
          cartChange: "cartChange",
          couponSelect: "couponSelect",
          addressSelect: "addressSelect",
          addressDetail: "addressDetail",
          orderOperation: "orderOperation",
          lotteryNumChange: "lotteryNumChange",
          lotteryRedpacketRainClick: "lotteryRedpacketRainClick",
          lotteryRedpacketRainEnd: "lotteryRedpacketRainEnd",
          scanLoginSuccess: "scanLoginSuccess",
          voteChangeSelect: "voteChangeSelect",
          voteChangePlayVideo: "voteChangePlayVideo",
          voteScoreChange: "voteScoreChange",
          inviteInfoChange: "userPlaybillInfo",
          activityTaskFinish: "activityTaskFinish",
          activityTaskSubmit: "activityTaskSubmit",
          clockinContentCommentAdd: "clockinContentCommentAdd",
          clockinContentCommentDelete: "clockinContentCommentDelete",
          clockinLoadMoreData: "clockinLoadMoreData",
          supertopicContentCommentAdd: "supertopicContentCommentAdd",
          supertopicContentCommentDelete: "supertopicContentCommentDelete",
          guessContentCommentAdd: "guessContentCommentAdd",
          guessContentCommentDelete: "guessContentCommentDelete",
          studyLoadMoreData: "studyLoadMoreData",
          yidunVerifyShow: "yidunVerifyShow",
          yidunVerifyClose: "yidunVerifyClose",
          photoLoadMoreData: "photoLoadMoreData",
          photoRefreshLoadNewData: "photoRefreshLoadNewData",
          photoPullDownRefresh: "photoPullDownRefresh",
          photoTabStickyTop: "photoTabStickyTop",
          photoPageScroll: "photoPageScroll",
          businessListLoadMore: "businessListLoadMore",
          businessListPullDownRefresh: "businessListPullDownRefresh",
          articleTaskBackToHomePage: "articleTaskBackToHomePage",
          activityTaskCheckFinish: "activityTaskCheckFinish",
          activityTaskGetNum: "activityTaskGetNum",
          nschoolLoadMoreData: "nschoolLoadMoreData",
          pageDesignPullDownRefresh: "pageDesignPullDownRefresh",
          pageDesignLoadMore: "pageDesignLoadMore"
        },
        localStorageKeys: {
          thirdPrefix: "_thirdparty_",
          accessToken: "access_token",
          userInfo: "_user_info",
          memberSetting: "_member_setting",
          cart: "_shopping_cart",
          cartSelected: "_shopping_cart_selected",
          businessAccessToken: "business_access_token",
          businessAccountInfo: "_business_account_info",
          tenantSettingInfo: "_tenant_setting_info",
          userinfoCollection: "_userinfo_collection",
          mallOrderUserinfoCollection: "_mall_order_userinfo_collection",
          voteSelectTempStore: "_vote_select_temp_store_",
          voteSelectClassOptionMap: "_vote_select_class_option_map_",
          liveCommentTime: "_live_comment_time_",
          liveLikeTime: "_live_like_time_",
          liveNoticeFirstAlert: "_live_notice_first_alert_",
          guessLotteryAlert: "_guess_lottery_alert",
          passwordInputOk: "_password_input_ok_",
          verifyCodePassOk: "_verify_code_pass_ok_",
          phoneLocalVerifyTime: "_phone_local_verify_time_",
          localDeviceToken: "_local_auth_d_t_",
          shoppingMallOpenNav: "_shopping_mall_open_nav_",
          answerCloseToast: "_answer_close_toast_",
          supertopicLikeLog: "_supertopic_like_log_",
          mallHomePath: "_mall_home_path"
        },
        actionEvents: a.default,
        version: "1.0.0",
        qqMapIpLocationLink: "https://apis.map.qq.com/ws/location/v1/ip",
        qqMapKey: "PFOBZ-LFYWQ-EZ55N-BNPRL-OUVWK-WAFOO",
        qqMapKeyList: ["S3OBZ-3QVLW-DPFR2-YH2G5-SFXWK-OOBUZ", "APJBZ-BSBRA-SSIKL-CUIDQ-VPAOZ-UXB7E", "N3MBZ-RXN6Z-T22XU-T47F6-FITAJ-JRFU2", "IYHBZ-CORWU-IOTVM-GG6VV-MBNDH-UJFF5", "34OBZ-CECCJ-XG5FO-XHA4O-6UR2H-OZF7O", "GPHBZ-N6MKW-LPBR5-YI3K2-RMNWS-G6BES", "OW4BZ-KKKKW-UHBRW-YJKJ2-6Y4WJ-43F6G", "FHYBZ-YNNK4-PIKUM-FN5MO-AACY5-LLBS3", "JGCBZ-V7E6T-CJAXS-VAFCS-QW3X3-JXFBP", "C2TBZ-LJJCV-ZSZPJ-5S5GN-PO6K3-BAFY2"],
        qqMapReferer: "yundian",
        systemH5Domain: "https://y-h5.iyunxh.com",
        wechatAuthorizeLink: "https://open.weixin.qq.com/connect/oauth2/authorize?appid={APPID}&redirect_uri={REDIRECT_URI}&response_type=code&scope=snsapi_userinfo&state=STATE&component_appid={COMPONENT_APPID}#wechat_redirect",
        wechatCallbackPath: "/pages/home/callback",
        wechatLoginAuthorizeLink: "https://open.weixin.qq.com/connect/qrconnect?appid={APPID}&redirect_uri={REDIRECT_URI}&response_type=code&scope=snsapi_login&state=STATE#wechat_redirect",
        aliyunVerifyParams: {
          appkey: "FFFF0N0000000000B282",
          scene: "nc_activity_h5"
        },
        yidunVerifyParams: {
          3: "1111111",
          4: "2222222"
        },
        aesParams: {
          dev: {
            aesKey: "5053lwNDablbfcABMdQWl4H6CrpYJZNK",
            aesIv: "6mvP3OlpsGqcOSR3"
          },
          pro: {
            aesKey: "7Pf0cfZPHy1L7PS2PfCfP8r2BGi461LG",
            aesIv: "8RsVKSCH8mQ4l7cu"
          }
        },
        moduleMap: {
          login: "40102",
          content: "30103",
          answer: "40405",
          vote: "40502",
          lottery: "40602",
          signup: "40702",
          supertopic: "40802",
          shoppingmall: "40202",
          comment: "40109",
          signin: "41002",
          launch: "40903",
          help: "41202",
          checkers: "41102",
          poetry: "41302",
          live: "41402",
          invite: "41502",
          footmark: "41602",
          footmarkpass: "41603",
          wish: "41802",
          clockin: "41902",
          guess: "42002",
          pagedesign: "30105",
          report: "41403",
          ecnyform: "42102",
          screeninteract: "42202",
          aiimage: "42302",
          farm: "42402",
          farmkinds: "42502",
          cashout: "40124",
          word: "42802",
          dilate: "42602",
          articletask: "42702",
          stepsport: "42902",
          venueclockin: "43002",
          collectcard: "43302",
          query: "43202",
          bookinglottery: "43402",
          whippedeggs: "43502",
          guandan: "43702",
          school: "43602",
          discipline: "43603",
          coupon: "40219",
          info_pub: "44004",
          smallgame: "44005"
        },
        routeMap: {
          home: {
            url: "/pages/home/index",
            is_tabbar: 0
          },
          activity_list: {
            url: "/pages/activity/list",
            is_tabbar: 0
          },
          member_task_center: {
            url: "/pages/member/task-center",
            is_tabbar: 0
          },
          shoppingmall: {
            url: "/pages/shopping-mall/home",
            is_tabbar: 0
          },
          member: {
            url: "/pages/member/user-center",
            is_tabbar: 0
          },
          news: {
            url: "/module-cms/news/detail",
            is_tabbar: 0
          },
          video: {
            url: "/module-cms/video/detail",
            is_tabbar: 0
          },
          tuji: {
            url: "/module-cms/atlas/detail",
            is_tabbar: 0
          },
          goodslist: {
            url: "/module-mall/goodslist/goodslist",
            is_tabbar: 0
          },
          goods_cart: {
            url: "/module-mall/cart/cart",
            is_tabbar: 0
          },
          lottery: {
            url: "/module-lottery/home/home",
            is_tabbar: 0
          },
          vote: {
            url: "/module-vote/home/home",
            is_tabbar: 0
          },
          signup: {
            url: "/module-signup/home/home",
            is_tabbar: 0
          },
          answer: {
            url: "/module-answer/home/home",
            is_tabbar: 0
          },
          supertopic: {
            url: "/module-supertopic/home/home",
            is_tabbar: 0
          },
          live: {
            url: "/module-live/home/home",
            is_tabbar: 0
          },
          checkers: {
            url: "/module-checkers/home/home",
            is_tabbar: 0
          },
          help: {
            url: "/module-help/home/home",
            is_tabbar: 0
          },
          member_rights: {
            url: "/module-member/welfare/welfare",
            is_tabbar: 0
          }
        },
        statTypes: {
          click: "click",
          share: "share",
          like: "like",
          collect: "collect",
          comment: "comment"
        },
        stateColors: {
          0: "#fa8c16",
          1: "#52c41a",
          2: "#f5222d",
          3: "#722ed1",
          4: "#3742fa",
          5: "#ff4757",
          6: "#eccc68"
        },
        websocketUrls: {
          heart: "wss://yapi.y-h5.iyunxh.com/api-alive/front",
          live: "wss://yapi.y-h5.iyunxh.com/api-alive/front/_live"
        },
        paySettings: {
          clients: {
            app: "wx_app",
            official: "wx_official",
            minipro: "wx_minipro",
            web: "wx_web"
          },
          payTypes: {
            integral: 1,
            gold: 2,
            appMiniPro: 3,
            wxWebH5: 4,
            wxOfficial: 5,
            wxMiniPro: 6,
            alipayMiniPro: 7,
            alipayH5: 8,
            appAlipay: 9,
            abcEcny: 10,
            ytbank: 12
          },
          cashPayTypes: {
            wechatPay: "wechat_pay",
            aliPay: "alipay",
            abcEcnyPay: "abc_ecny",
            ytbankPay: "ytbank"
          }
        }
      },
      r = i;
    n.default = r;
  },
  "2d98": function (e, n, o) {
    "use strict";

    (function (e) {
      o("6a54");
      var t = o("f5bd").default;
      Object.defineProperty(n, "__esModule", {
        value: !0
      }), n.default = void 0;
      var a = t(o("2634")),
        i = t(o("2fdc")),
        r = t(o("df56")),
        u = t(o("f473")),
        l = {
          globalData: {
            app: {
              open: 0,
              button_color: "#ff0000",
              bg_image: null,
              android: {
                app_name: "",
                app_brief: "",
                app_logo: null,
                package_name: "",
                download_url: ""
              },
              ios: {
                app_name: "",
                app_brief: "",
                app_logo: null,
                package_name: "",
                download_url: ""
              }
            },
            ori_producer: "hg",
            oss_platform: "obs",
            appid: "es1nv",
            appkey: "eb856ddb8c1694138e1116294c515caf",
            tianmu_open: 0,
            tianmu_appid: "",
            h5_domain: "",
            t_id: 1,
            t_id_in: 1,
            component_appid: "",
            wx_minipro_appid: "",
            wx_official_appid: "wx2e8dbf63a6b345fb",
            wx_official_auth_mode: 1,
            wx_web_appid: "",
            is_open_pc_scan_login: 0,
            pc_login_mode: 1,
            style: {
              is_grayscale: 0
            }
          },
          onShow: function () {
            return (0, i.default)((0, a.default)().mark(function n() {
              var o;
              return (0, a.default)().wrap(function (n) {
                while (1) switch (n.prev = n.next) {
                  case 0:
                    return n.prev = 0, n.next = 3, r.default.tenantInitSetting();
                  case 3:
                    o = n.sent, o && o.style && o.style.is_grayscale && (document.getElementsByTagName("html")[0].className = "global-gray"), n.next = 10;
                    break;
                  case 7:
                    n.prev = 7, n.t0 = n["catch"](0), e.log("global app err:" + n.t0);
                  case 10:
                  case "end":
                    return n.stop();
                }
              }, n, null, [[0, 7]]);
            }))();
          },
          onLaunch: function () {
            return (0, i.default)((0, a.default)().mark(function e() {
              return (0, a.default)().wrap(function (e) {
                while (1) switch (e.prev = e.next) {
                  case 0:
                    return e.next = 2, u.default.init();
                  case 2:
                    u.default.autoTrack();
                  case 3:
                  case "end":
                    return e.stop();
                }
              }, e);
            }))();
          }
        };
      n.default = l;
    }).call(this, o("ba7c")["default"]);
  },
  "2f9a": function (e, n, o) {
    "use strict";

    o("6a54");
    var t = o("f5bd").default;
    Object.defineProperty(n, "__esModule", {
      value: !0
    }), n.default = void 0, o("5ef2");
    var a = t(o("ceb7")),
      i = {
        isInApp: function () {
          return navigator.userAgent.indexOf("TMAppName") > -1;
        },
        getSystemInfo: function (e) {},
        getUserInfo: function (e) {
          this.isInApp() ? a.default.getTMUserInfo(function (n) {
            var o = n ? JSON.parse(n) : null;
            if (o) {
              var t = {
                user_id: o.member_id || "",
                user_name: o.member_name || o.member_nickname || "",
                portrait_url: o.head_pic || "",
                phone: o.mobile || "",
                wx_openid: o.wxopenid || "",
                wx_unionid: "",
                app_user_token: o.token || ""
              };
              e && e(t);
            } else e && e(!1);
          }) : e && e(!1);
        },
        getLocation: function (e) {},
        shareTo: function () {
          var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {};
          this.isInApp() && a.default.createShareFunctionButton({
            title: e.title,
            content: e.brief,
            url: e.link_url || "",
            thumbna: e.indexpic || ""
          });
        },
        goToLoginPage: function () {
          this.isInApp() && a.default.goToLogin();
        },
        goToBindPage: function () {},
        saveImage: function () {},
        linkTo: function () {},
        jumpToNews: function () {},
        goUcenter: function () {},
        playAudio: function () {},
        showShare: function () {
          var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {};
          this.isInApp() && a.default.goToShare({
            title: e.title,
            content: e.brief,
            url: e.link_url || "",
            thumbna: e.indexpic || ""
          });
        },
        openpaper: function () {}
      },
      r = i;
    n.default = r;
  },
  3036: function (e, n, o) {
    "use strict";

    o("6a54"), Object.defineProperty(n, "__esModule", {
      value: !0
    }), n.default = void 0, o("5c47"), o("0506");
    var t = !1;
    window.addEventListener("flutterInAppWebViewPlatformReady", function () {
      t = !0;
    }), window.init = function () {
      t = !0;
    };
    var a = {
        isInApp: function () {
          var e = navigator.userAgent.toLowerCase();
          return !!/jinhua/gi.test(e);
        },
        getSystemInfo: function (e) {
          window.flutter_inappwebview && window.flutter_inappwebview.callHandler("getSystemInfo").then(function (n) {
            "string" == typeof n && (n = JSON.parse(n)), e && e(n);
          });
        },
        getUserInfo: function (e) {
          var n = this;
          window.flutter_inappwebview && t ? window.flutter_inappwebview.callHandler("getUserInfo", {
            isShowLoginDialog: "0"
          }).then(function (n) {
            if (n) {
              "string" == typeof n && (n = JSON.parse(n));
              var o = {
                user_id: n.user_id || "",
                user_name: n.user_name || "",
                portrait_url: n.avatar_url || "",
                phone: n.phone || "",
                wx_openid: n.wx_openid || "",
                wx_unionid: n.wx_unionid || "",
                app_user_token: n.token || ""
              };
              e && e(o);
            } else e && e(!1);
          }) : setTimeout(function () {
            n.getUserInfo(e);
          }, 200);
        },
        getLocation: function (e) {
          window.flutter_inappwebview && window.flutter_inappwebview.callHandler("getLocation").then(function (n) {
            "string" == typeof n && (n = JSON.parse(n)), e && e(n);
          });
        },
        shareTo: function () {
          var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {};
          window.flutter_inappwebview && (e.hasOwnProperty("is_set") || (e.is_set = 1), window.flutter_inappwebview.callHandler("shareTo", e));
        },
        goToLoginPage: function () {
          window.flutter_inappwebview && window.flutter_inappwebview.callHandler("goToLoginPage");
        },
        goToBindPage: function () {
          window.flutter_inappwebview && window.flutter_inappwebview.callHandler("goToBindPage");
        },
        saveImage: function () {
          var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {};
          e.url && window.flutter_inappwebview && window.flutter_inappwebview.callHandler("saveImage", {
            url: e.url
          });
        },
        linkTo: function () {
          var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : "";
          e && window.flutter_inappwebview && window.flutter_inappwebview.callHandler("linkTo", {
            url: e
          });
        },
        jumpToNews: function () {
          var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 0;
          e && window.flutter_inappwebview && window.flutter_inappwebview.callHandler("jumpToNews", {
            id: e
          });
        },
        goUcenter: function () {},
        playAudio: function () {},
        showShare: function () {
          var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {};
          window.flutter_inappwebview && window.flutter_inappwebview.callHandler("shareTo", e);
        },
        openpaper: function () {}
      },
      i = a;
    n.default = i;
  },
  "33cd": function (e, n, o) {
    "use strict";

    o("6a54"), Object.defineProperty(n, "__esModule", {
      value: !0
    }), n.default = void 0, o("4766");
    var t = {
        isInApp: function () {
          return SmartCity.isSmartCityApp();
        },
        getSystemInfo: function (e) {
          SmartCity.getSystemInfo(function (n) {
            e && e(n);
          });
        },
        getUserInfo: function (e) {
          SmartCity.getUserInfo(function (n) {
            if (n && n.userInfo) {
              var o = {
                user_id: n.userInfo.userid || "",
                user_name: n.userInfo.username || "",
                portrait_url: n.userInfo.picurl || "",
                phone: n.userInfo.telephone || "",
                wx_openid: n.userInfo.weixin_open_id || "",
                wx_unionid: "",
                app_user_token: n.userInfo.userTokenKey || ""
              };
              e && e(o);
            } else e && e(!1);
          });
        },
        getLocation: function (e) {
          SmartCity.getLocation(function (n) {
            e && e(n);
          });
        },
        shareTo: function () {
          var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {};
          SmartCity.shareTo({
            showShareButton: "1",
            updateShareData: "1",
            title: e.title || "",
            brief: e.brief || "",
            contentURL: e.link_url || "",
            imageLink: e.indexpic || ""
          });
        },
        goToLoginPage: function () {
          SmartCity.goLogin();
        },
        goToBindPage: function () {},
        saveImage: function () {
          var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {};
          SmartCity.saveImage({
            url: e.url
          });
        },
        linkTo: function () {
          var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : "";
          SmartCity.linkTo({
            innerLink: e
          });
        },
        jumpToNews: function () {
          var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : "";
          this.linkTo(e);
        },
        goUcenter: function () {
          SmartCity.goUcenter();
        },
        playAudio: function () {},
        showShare: function () {
          var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {};
          SmartCity.shareTo({
            showShareButton: "1",
            title: e.title || "",
            brief: e.brief || "",
            contentURL: e.link_url || "",
            imageLink: e.indexpic || ""
          });
        },
        openpaper: function () {}
      },
      a = t;
    n.default = a;
  },
  "36ad": function (e, n, o) {
    "use strict";

    o("6a54");
    var t = o("f5bd").default;
    Object.defineProperty(n, "__esModule", {
      value: !0
    }), n.default = void 0, o("5c47"), o("a1c1");
    var a = t(o("9cf4")),
      i = t(o("2cfc")),
      r = o("9219"),
      u = {
        isInApp: function () {
          return !!a.default.checkUserAgent();
        },
        getSystemInfo: function (e) {},
        getUserInfo: function (e) {
          a.default.dkAccessToken("nbtvAccessTokenCallback"), window.nbtvAccessTokenCallback = function (n) {
            if (n) {
              var o = JSON.parse(n),
                t = o.accesstoken;
              if (t && "0" != t) {
                var r = getApp().globalData.h5_domain.replace("http://", "");
                r = r.replace("https://", ""), a.default.thirdLogin(i.default.thirdPlatforms.nbtv.appkey, i.default.thirdPlatforms.nbtv.appsecret, t, r).then(function (n) {
                  if (n.success && n.result) {
                    var o = {
                      user_id: n.result.id || "",
                      user_name: n.result.nickname || "",
                      portrait_url: n.result.avatar || "",
                      phone: n.result.cellphone || "",
                      wx_openid: "",
                      wx_unionid: n.result.wx_unionid || "",
                      app_user_token: t
                    };
                    e && e(o);
                  } else e && e(!1);
                });
              } else e && e(!1);
            } else e && e(!1);
          };
        },
        getLocation: function (e) {},
        shareTo: function () {
          var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {};
          a.default.dkShare({
            title: e.title || "",
            img: e.indexpic || "",
            description: e.brief || "",
            url: e.link_url || ""
          });
        },
        goToLoginPage: function () {
          var e = getApp().globalData.h5_domain + (0, r.getCurrentPagePath)();
          e = (0, r.removeURLParameter)(e, "access_token"), e = (0, r.removeURLParameter)(e, "timestamp"), a.default.dkLogin(e);
        },
        goToBindPage: function () {},
        saveImage: function () {},
        linkTo: function () {},
        jumpToNews: function () {},
        goUcenter: function () {},
        playAudio: function () {},
        showShare: function () {},
        openpaper: function () {}
      },
      l = u;
    n.default = l;
  },
  "406e": function (e, n, o) {
    "use strict";

    o("6a54");
    var t = o("3639").default,
      a = o("f5bd").default;
    Object.defineProperty(n, "__esModule", {
      value: !0
    }), n.default = void 0;
    var i = a(o("9b1b"));
    o("3dde"), o("a8b2"), o("1480"), o("6e4a"), o("75c8"), o("d6b2");
    var r = a(o("9b8e"));
    o("da7b");
    var u = a(o("b8e7")),
      l = a(o("6fbf")),
      s = t(o("f41d")),
      m = a(o("2cfc")),
      d = a(o("df56"));
    o("619a"), o("d111");
    var c = a(o("f473"));
    o("2fac");
    var g = a(o("4015"));
    r.default.use(g.default), r.default.use(l.default), r.default.config.productionTip = !1, u.default.mpType = "app", r.default.prototype.$api = s, r.default.prototype.$sys = d.default, r.default.prototype.$cnf = m.default, r.default.prototype.$tianmu = c.default;
    var f = new r.default((0, i.default)({}, u.default));
    f.$mount();
    var p = f;
    n.default = p;
  },
  "45fa": function (e, n, o) {
    o("aa9c"), o("d4b5"), o("8f71"), o("bf0f"), o("c9b5"), o("ab80"), o("23f4"), o("7d2f"), o("5c47"), o("9c4e"), o("0506"), o("2c10"), function () {
      var e, n, o;
      function t(e, n, o) {
        e.off(n).on(n, function (t) {
          o(t), e.off(n);
        });
      }
      e = function () {
        var e,
          t = this;
        if (this.debug = !1, this._shakeEnable = !1, this._event = new n(), this._request = function (n, o) {
          var a = "cloudjs://" + n,
            i = {};
          for (var r in o) i[r] = o[r];
          if (i) {
            for (var u in i) if (i.hasOwnProperty(u)) if ("thumbs" == u) {
              for (var l = [], s = 0; s < i[u].length; s++) l.push(encodeURIComponent(i[u][s]));
              i[u] = l;
            } else i[u] = "url" == u ? decodeURIComponent(i[u]) : encodeURIComponent(i[u]);
            a += "?params=" + JSON.stringify(i);
          }
          e.src = a, t._event.trigger("request");
        }, this._callback = function (e) {
          if (0 !== +e.errId) return t._event.trigger("error", e.errId), void (t.debug && alert("errId:" + e.errId));
          t._event.trigger(e.method, e.data);
        }, this._transStatusWatch = new o(this._event), e = document.createElement("iframe"), e.style.position = "fixed", e.style.left = "-9999px", e.style.width = "0", e.style.height = "0", document.body) document.body.appendChild(e);else {
          var a = window.onload || function () {};
          window.onload = function () {
            document.body.appendChild(e), a();
          };
        }
      }, n = function () {
        var e = {},
          n = this;
        this.on = function (o, t) {
          o = o.toLocaleLowerCase().split(".");
          return type = o[1] || "default", o = o[0], e[o] || (e[o] = []), e[o].push({
            type: type,
            func: t
          }), n;
        }, this.off = function (o) {
          var t;
          o = o.toLocaleLowerCase().split(".");
          if (type = o[1] || "default", o = o[0], e[o] && e[o].length) for (t in e) t === o && (e[t] = e[t].filter(function (e, n) {
            return type && type !== e;
          }), e[t].length && delete e[t]);
          return n;
        }, this.trigger = function (o, t) {
          var a, i;
          if (o = o.toLocaleLowerCase(), e[o]) {
            for (i = e[o].length, a = i - 1; a >= 0; a--) e[o][a].func.call(null, t);
            return n;
          }
        };
      }, o = function (e) {
        var n = {};
        e.on("transStatusQuery", function (e) {
          "function" === typeof n[e.id] && (n[e.id]({
            status: e.status
          }), delete n[e.id]);
        }), this.add = function (e, o) {
          n[e] = o;
        };
      }, e.prototype.userGetInfo = function (e) {
        t(this._event, "userGetInfo", e), this._request("userGetInfo");
      }, e.prototype.userLogin = function (e) {
        t(this._event, "userLogin", e), this._request("userLogin");
      }, e.prototype.attentionAttr = function (e) {
        this._request("attentionAttr", e);
      }, e.prototype.attrDetail = function (e) {
        this._request("attrDetail", e);
      }, e.prototype.linkOpen = function (e) {
        this._request("linkOpen", {
          url: e
        });
      }, e.prototype.sharePanel = function (e) {
        e = e || {}, e.type = 0, this._request("sharePanel", e);
      }, e.prototype.shareWeChat = function (e) {
        e = e || {}, e.type = 22, this._request("sharePanel", e);
      }, e.prototype.shareTimeline = function (e) {
        e = e || {}, e.type = 23, this._request("sharePanel", e);
      }, e.prototype.shareQQMessage = function (e) {
        e = e || {}, e.type = 24, this._request("sharePanel", e);
      }, e.prototype.shareQzone = function (e) {
        e = e || {}, e.type = 6, this._request("sharePanel", e);
      }, e.prototype.shareWeibo = function (e) {
        e = e || {}, e.type = 1, this._request("sharePanel", e);
      }, e.prototype.locationGetInfo = function (e) {
        t(this._event, "locationGetInfo", e), this._request("locationGetInfo");
      }, e.prototype.locationMap = function (e, n, o, t) {
        e = e.toString(), n = n.toString(), this._request("locationMap", {
          latitude: e,
          longitude: n,
          address: o || ""
        });
      }, e.prototype.deviceGetInfo = function (e) {
        t(this._event, "deviceGetInfo", e), this._request("deviceGetInfo");
      }, e.prototype.networkGetInfo = function (e) {
        t(this._event, "networkGetInfo", e), this._request("networkGetInfo");
      }, e.prototype.networkWatch = function (e) {
        this._event.on("networkWatch", e);
      }, e.prototype.qrcodeScan = function (e) {
        t(this._event, "qrcodeScan", e), this._request("qrcodeScan");
      }, e.prototype.photoPreview = function (e, n) {
        this._request("photoPreview", {
          imgs: e,
          id: n || 0
        });
      }, e.prototype.photoSelect = function (e, n) {
        e = Math.min(9, Math.max(1, +e)), t(this._event, "photoSelect", n), this._request("photoSelect", {
          max: e
        });
      }, e.prototype.audioRecord = function (e) {
        t(this._event, "audioRecord", e), this._request("audioRecord");
      }, e.prototype.audioStatusQuery = function (e, n) {
        this._transStatusWatch.add(e, n), this._request("transStatusQuery", {
          id: e
        });
      }, e.prototype.videoSelect = function (e) {
        var n = e;
        e = function (e) {
          e && "complete" === e.status && (e.thumb = "data:image/*;base64," + e.thumb), n(e);
        }, t(this._event, "videoSelect", e), this._request("videoSelect");
      }, e.prototype.videoStatusQuery = function (e, n) {
        this._transStatusWatch.add(e, n), this._request("transStatusQuery", {
          id: e
        });
      }, e.prototype.shakeWatch = function (e) {
        this._event.on("shakeEnable", function (n) {
          e(n.status);
        }), this._shakeEnable || (this._request("shakeEnable"), this._shakeEnable = !0);
      }, e.prototype.pushLiveViewController = function (e, n, o) {
        this._request("pushLiveViewController", {
          contentid: e,
          title: n || "",
          sharesiteid: o || 0
        });
      }, e.prototype.pushTvStreamController = function (e, n) {
        this._request("pushTvStreamController", {
          title: e || "",
          sharesiteid: n || 0
        });
      }, e.prototype.pushBrokeViewController = function (e) {
        this._request("pushBrokeViewController", {
          title: e || ""
        });
      }, e.prototype.pushPoliticsViewController = function (e) {
        this._request("pushPoliticsViewController", {
          title: e || ""
        });
      }, e.prototype.push2WeiViewController = function (e) {
        this._request("push2WeiViewController", {
          title: e || ""
        });
      }, e.prototype.pushLinkViewController = function (e, n) {
        this._request("pushLinkViewController", {
          url: e || "",
          title: n || ""
        });
      }, e.prototype.isClient = function () {
        var e = !1,
          n = new RegExp("mediacloudclient");
        return n.test(navigator.userAgent) && (e = !0), e;
      }, e.prototype.userGetEncryptInfo = function (e) {
        t(this._event, "userGetEncryptInfo", e), this._request("userGetEncryptInfo");
      }, e.prototype.readContentController = function (e) {
        this._request("readContentController", {
          op: e || 1
        });
      }, e.prototype.reLogin = function (e) {
        t(this._event, "reLogin", e), this._request("reLogin");
      }, e.prototype.openContentView = function (e) {
        e = e || {}, this._request("openContentView", e);
      }, e.prototype.getMobileParams = function (e) {
        t(this._event, "getMobileParams", e), this._request("getMobileParams");
      }, e.prototype.downloadResource = function (e, n) {
        var o = navigator.userAgent,
          t = !!o.match(/\(i[^;]+;( U;)? CPU.+Mac OS X/);
        if (this.isClient() && t) this._request("downloadResource", {
          url: e,
          alias: n
        });else {
          var a = document.createElement("a");
          a.style.display = "none", a.setAttribute("download", n), a.setAttribute("href", e), a.click();
        }
      }, window.mc = new e(), window.mediaCloudCallback = mc._callback;
    }();
  },
  4766: function (e, n, o) {
    var t = o("4550").default;
    o("aa9c"), o("5c47"), o("0506"), function (e) {
      var n,
        o = !1;
      function a() {}
      function i() {
        var e = navigator.userAgent.toLowerCase();
        return !!/m2osmartcity/gi.test(e);
      }
      function r(e, n, t) {
        i() && function (e) {
          if (window.WebViewJavascriptBridge) return e(WebViewJavascriptBridge);
          if (document.addEventListener("WebViewJavascriptBridgeReady", function () {
            return e(WebViewJavascriptBridge);
          }, !1), window.WVJBCallbacks) return window.WVJBCallbacks.push(e);
          window.WVJBCallbacks = [e];
          var n = document.createElement("iframe");
          n.style.display = "none", n.src = "https://__bridge_loaded__", document.documentElement.appendChild(n), setTimeout(function () {
            document.documentElement.removeChild(n);
          }, 0);
        }(function (a) {
          "undefined" != typeof a.init && a.init instanceof Function && (o || (a.init(function (e, n) {}), o = !0)), "getLocation" == e && a.registerHandler("getLocation", function (e, n) {
            e = "string" === typeof e ? JSON.parse(e) : e, t && t(e), n("success");
          }), a.callHandler(e, n, function (e) {
            e = "string" === typeof e ? JSON.parse(e) : e, t && t(e);
          });
        });
      }
      a.prototype = (n = {
        constructor: this,
        isSmartCityApp: function () {
          return i();
        },
        getUserInfo: function (e) {
          r("getUserInfo", null, function (n) {
            e && e(n);
          });
        },
        getSystemInfo: function (e) {
          r("getSystemInfo", null, function (n) {
            e && e(n);
          });
        },
        getLocation: function (e) {
          r("getLocation", null, function (n) {
            e && e(n);
          });
        },
        goLogin: function () {
          r("goLogin", null, null);
        },
        goBack: function () {
          r("goBack", null, null);
        },
        makeCall: function (e) {
          r("makeCall", e, null);
        },
        sendMail: function (e) {
          r("sendMail", e, null);
        },
        makeMsm: function (e) {
          r("makeMsm", e, null);
        },
        goUcenter: function () {
          r("goUcenter", null, null);
        },
        goAbort: function () {
          r("goAbort", null, null);
        },
        goRoot: function () {
          r("goRoot", null, null);
        },
        shareTo: function (e) {
          r("shareTo", e, null);
        },
        onShareSuccess: function (e) {
          r("onShareSuccess", null, function (n) {
            e && e(n);
          });
        },
        showKakuAnimations: function (e) {
          r("showKakuAnimations", null, function (n) {
            e && e(n);
          });
        },
        linkTo: function (e) {
          r("linkTo", e, null);
        },
        goMap: function (e) {
          r("goMap", e, null);
        },
        clickImage: function (e) {
          r("clickImage", e, null);
        },
        showBigImage: function (e) {
          r("showBigImage", e, null);
        },
        saveImage: function (e) {
          r("saveImage", e, null);
        },
        showShareBtn: function (e) {
          r("showShareBtn", e, null);
        },
        hideTopView: function (e) {
          r("hideTopView", e, null);
        },
        fullScreenPlay: function (e) {
          r("fullScreenPlay", e, null);
        },
        clearHistory: function () {
          r("clearHistory", null, null);
        },
        getRequestHeader: function (e) {
          r("getRequestHeader", null, function (n) {
            e && e(n);
          });
        },
        chooseImage: function (e, n) {
          r("chooseImage", e, function (e) {
            n && n(e);
          });
        },
        openSmartDialog: function (e, n) {
          r("openSmartDialog", e, function (e) {
            n && n(e);
          });
        },
        previewImage: function (e) {
          r("previewImage", e, null);
        },
        scanQRCode: function (e) {
          r("scanQRCode", null, function (n) {
            e && e(n);
          });
        },
        goBind: function () {
          r("goBind", null, null);
        },
        goToAuthentication: function (e) {
          r("goToAuthentication", null, function (n) {
            e && e(n);
          });
        },
        goToJXMealCardLivingStyle: function (e) {
          r("goToJXMealCardLivingStyle", null, function (n) {
            e && e(n);
          });
        },
        goToJXMealCardSafetyKeyboard: function (e) {
          r("goToJXMealCardSafetyKeyboard", null, function (n) {
            e && e(n);
          });
        },
        chooseVideo: function (e) {
          r("chooseVideo", null, function (n) {
            e && e(n);
          });
        },
        goToRealPersionAuth: function (e, n) {
          r("goToRealPersionAuth", e, function (e) {
            n && n(e);
          });
        },
        getStepDayData: function (e, n) {
          r("getStepDayData", e, function (e) {
            n && n(e);
          });
        },
        getHealthDayData: function (e, n) {
          r("getHealthDayData", e, function (e) {
            n && n(e);
          });
        },
        goToCamera: function (e, n) {
          r("goToCamera", e, function (e) {
            n && n(e);
          });
        },
        optionalAreaForPhotos: function (e, n) {
          r("optionalAreaForPhotos", e, function (e) {
            n && n(e);
          });
        },
        goToLivingStyle: function (e) {
          r("goToLivingStyle", null, function (n) {
            e && e(n);
          });
        },
        requestApi: function (e, n) {
          r("requestApi", e, function (e) {
            n && n(e);
          });
        },
        interactivePopDisabled: function (e) {
          r("interactivePopDisabled", e, null);
        },
        sendAnalysisData: function (e) {
          r("sendAnalysisData", e, null);
        },
        linkToSubApp: function (e) {
          r("linkToSubApp", e, null);
        },
        goVRPlayer: function (e) {
          r("goVRPlayer", e, null);
        },
        embedVideoPlayer: function (e) {
          r("embedVideoPlayer", e, null);
        },
        destroyVideoPlayer: function () {
          r("destroyVideoPlayer", null, null);
        },
        goUniWallet: function (e) {
          r("goUniWallet", e, null);
        },
        loadBarrageData: function (e) {
          r("loadBarrageData", e, null);
        },
        getRelateNews: function (e) {
          r("getRelateNews", null, function (n) {
            e && e(n);
          });
        },
        goSubscription: function (e, n) {
          r("goSubscription", e, function (e) {
            n && n(e);
          });
        },
        getPraiseInfo: function (e) {
          r("getPraiseInfo", null, function (n) {
            e && e(n);
          });
        },
        goPraise: function () {
          r("goPraise", null, null);
        },
        getMyPraise: function (e) {
          r("getMyPraise", null, function (n) {
            e && e(n);
          });
        },
        getDiggInfo: function (e) {
          r("getDiggInfo", null, function (n) {
            e && e(n);
          });
        },
        getCommentList: function (e) {
          r("getCommentList", null, function (n) {
            e && e(n);
          });
        },
        getCommentCount: function (e) {
          r("getCommentCount", null, function (n) {
            e && e(n);
          });
        },
        getMoreComment: function () {
          r("getMoreComment", null, null);
        },
        showCommentInput: function (e) {
          r("showCommentInput", e, null);
        },
        getSubsInfo: function (e) {
          r("getSubsInfo", null, function (n) {
            e && e(n);
          });
        },
        newsZan: function (e) {
          r("newsZan", null, function (n) {
            e && e(n);
          });
        },
        commentZan: function (e, n) {
          r("commentZan", e, function (e) {
            n && n(e);
          });
        },
        commentReply: function (e) {
          r("commentReply", e, null);
        },
        digg: function (e, n) {
          r("digg", e, function (e) {
            n && n(e);
          });
        },
        getNewsDetailCDSPAd: function (e) {
          r("getNewsDetailCDSPAd", null, function (n) {
            e && e(n);
          });
        },
        readNewsContent: function (e) {
          r("readNewsContent", e, null);
        },
        setFontSize: function (e) {
          r("setFontSize", e, null);
        },
        getNightStatus: function (e) {
          r("getNightStatus", null, function (n) {
            e && e(n);
          });
        },
        getSubsInfoOfPlus: function (e) {
          r("getSubsInfoOfPlus", e, null);
        },
        goSubscriptionOfPlus: function (e, n) {
          r("goSubscriptionOfPlus", e, function (e) {
            n && n(e);
          });
        },
        getPraiseNum: function (e) {
          r("getPraiseNum", null, function (n) {
            e && e(n);
          });
        }
      }, t(n, "getPraiseNum", function (e) {
        r("getClickNum", null, function (n) {
          e && e(n);
        });
      }), t(n, "goToReward", function () {
        r("goToReward", null, null);
      }), t(n, "getViewPagerInfo", function (e) {
        r("getViewPagerInfo", e, null);
      }), t(n, "startRecord", function (e) {
        r("startRecord", null, function (n) {
          e && e(n);
        });
      }), t(n, "stopRecord", function (e) {
        r("stopRecord", null, function (n) {
          e && e(n);
        });
      }), t(n, "playVoice", function (e) {
        r("playVoice", e, null);
      }), t(n, "pauseVoice", function (e) {
        r("pauseVoice", e, null);
      }), t(n, "uploadFile", function (e, n) {
        r("uploadFile", e, function (e) {
          n && n(e);
        });
      }), t(n, "appTLUnifyAllinpay", function (e) {
        r("appTLUnifyAllinpay", e, null);
      }), t(n, "stopUnload", function (e, n) {
        r("stopUnload", e, function (e) {
          n && n(e);
        });
      }), t(n, "vibrateFeedback", function (e, n) {
        r("vibrateFeedback", e, function (e) {
          n && n(e);
        });
      }), t(n, "applicationState", function (e) {
        r("applicationState", null, function (n) {
          e && e(n);
        });
      }), t(n, "videoRecording", function (e, n) {
        r("videoRecording", e, function (e) {
          n && n(e);
        });
      }), t(n, "closeWebViewBounces", function (e) {
        r("closeWebViewBounces", e, null);
      }), t(n, "createShortCut", function (e) {
        r("createShortCut", e, null);
      }), t(n, "getServicePage", function (e) {
        r("getServicePage", e, null);
      }), t(n, "creditRulesUpdate", function (e) {
        r("creditRulesUpdate", e, null);
      }), t(n, "canScreenshot", function (e) {
        r("canScreenshot", e, null);
      }), t(n, "appCCBPay", function (e) {
        r("appCCBPay", e, null);
      }), n), window.SmartCity = new a();
    }();
  },
  5120: function (e, n, o) {
    (function (t) {
      var a,
        i,
        r,
        u = o("bdbb").default;
      o("4085"), o("5c47"), o("a1c1"), o("5ef2"), o("2c10"), o("bf0f"), o("d4b5"), o("6a54"), function (o, t) {
        "object" === u(n) && "undefined" !== typeof e ? t(n) : (i = [n], a = t, r = "function" === typeof a ? a.apply(n, i) : a, void 0 === r || (e.exports = r));
      }(0, function (e) {
        "use strict";

        function n() {
          var e = navigator.userAgent,
            n = {
              appVersion: "",
              clientId: "",
              deviceType: "",
              deviceVersion: ""
            };
          if (-1 !== e.indexOf("android")) {
            n.deviceType = "android";
            var o = e.match(/android:(\S*);version/);
            n.deviceVersion = o ? o[1] : "";
          } else if (-1 !== e.indexOf("ios")) {
            n.deviceType = "ios";
            o = e.match(/ios:(\S*);version/);
            n.deviceVersion = o ? o[1] : "";
          }
          var t = e.match(/version:(\S*);clientid/);
          n.appVersion = t ? t[1] : "";
          var a = e.match(/clientid:(\S*)/);
          return n.clientId = a ? a[1] : "", n;
        }
        function o(e, o) {
          var a = function () {
            for (var e = [], n = 0; n < 36; n++) e[n] = "0123456789abcdef".substr(Math.floor(16 * Math.random()), 1);
            return e[14] = "4", e[19] = "0123456789abcdef".substr(3 & e[19] | 8, 1), e[8] = e[13] = e[18] = e[23] = "-", e.join("").replace(/-/g, "");
          }();
          return new Promise(function (i, r) {
            window[e + "_" + a] = function (n) {
              try {
                n = JSON.parse(n);
              } catch (o) {
                t.error(o);
              }
              0 === n.code ? i(n) : r(n), delete window[e + "_" + a];
            };
            if ("ios" === n().deviceType) (function () {
              var n = window.webkit.messageHandlers.cloud_jiashan;
              n ? n.postMessage(JSON.stringify({
                ability: e,
                callId: a,
                args: o || {}
              })) : t.warn("[JSSDK:abilityInvoke->" + e + "] invoke native failed");
            })();else if ("android" === n().deviceType) (function () {
              var n = window.cloud_jiashan;
              n ? n.abilityInvoke(e, a, JSON.stringify(o || {})) : t.warn("[JSSDK:abilityInvoke->" + e + "] invoke native failed");
            })();else {
              t.warn("fail fallback >> ", e, a);
              window[e + "_" + a](JSON.stringify({
                code: 412,
                message: "fail",
                data: null
              }));
            }
          });
        }
        var a = {
          appAccessToken: ""
        };
        e.amapGps = function () {
          return o("amap_gps", {
            appAccessToken: a.appAccessToken
          });
        }, e.getAppAccessToken = function () {
          return a.appAccessToken;
        }, e.getOpenId = function () {
          return o("get_open_id", {
            appAccessToken: a.appAccessToken
          });
        }, e.getSafeAreaBottom = function () {
          return o("nav_bar_height", {
            appAccessToken: a.appAccessToken
          });
        }, e.getSafeAreaTop = function () {
          return o("status_bar_height", {
            appAccessToken: a.appAccessToken
          });
        }, e.getUserIdentityInfo = function () {
          return o("get_user_identity_info", {
            appAccessToken: a.appAccessToken
          });
        }, e.getUserInfo = function () {
          return o("get_user_info", {
            appAccessToken: a.appAccessToken
          });
        }, e.goShanHeadLine = function () {
          return o("shan_headline", {
            appAccessToken: a.appAccessToken
          });
        }, e.openAlipay = function (e) {
          return o("open_alipay", {
            appAccessToken: a.appAccessToken,
            alipay_parameter: e
          });
        }, e.openArticle = function (e) {
          return o("open_article", {
            appAccessToken: a.appAccessToken,
            id: e
          });
        }, e.openZjnxcode = function () {
          return o("open_zjnxcode", {
            appAccessToken: a.appAccessToken
          });
        }, e.openZjnxpay = function () {
          return o("open_zjnxpay", {
            appAccessToken: a.appAccessToken
          });
        }, e.saveImage = function (e) {
          return o("save_image", {
            appAccessToken: a.appAccessToken,
            imgurl: e
          });
        }, e.scanQrCode = function () {
          return o("scan_qr_code", {
            appAccessToken: a.appAccessToken
          });
        }, e.setAppAccessToken = function (e) {
          a.appAccessToken = e;
        }, e.setNavigationBarColor = function (e) {
          return o("set_navigation_bar_background_color", {
            appAccessToken: a.appAccessToken,
            navigationBarBackgroundColor: e
          });
        }, e.setStatusBarColor = function (e) {
          return o("set_status_bar_background_color", {
            appAccessToken: a.appAccessToken,
            statusBarBackgroundColor: e
          });
        }, e.share = function (e, n, t, i) {
          return o("share_tinyapp", {
            appAccessToken: a.appAccessToken,
            title: e,
            summary: n,
            link: t,
            picture: i
          });
        }, e.shareClose = function () {
          return o("share_tinyapp_close", {
            appAccessToken: a.appAccessToken
          });
        }, e.statusBarColorToDark = function (e) {
          return o("status_bar_text_color", {
            appAccessToken: a.appAccessToken,
            isDark: e
          });
        }, e.vibrate = function () {
          return o("vibrate", {
            appAccessToken: a.appAccessToken
          });
        }, Object.defineProperty(e, "__esModule", {
          value: !0
        });
      });
    }).call(this, o("ba7c")["default"]);
  },
  "583c": function (e, n, o) {
    "use strict";

    o("6a54"), Object.defineProperty(n, "__esModule", {
      value: !0
    }), n.default = void 0, o("d4b5");
    var t = {
        isInApp: function () {
          try {
            var e = uni.getSystemInfoSync();
            if ("ios" === e.platform) return !!window.webkit.messageHandlers.originFunction;
            if ("android" === e.platform) return !!MediaClient.originFunction;
          } catch (n) {
            return !1;
          }
        },
        getSystemInfo: function (e) {},
        getUserInfo: function (e) {
          var n = JSON.stringify({
            funcType: "jsGetUserInfo"
          });
          this.callAppMethod(n), window.appCallBack = function (n) {
            if (n) {
              if ("string" == typeof n && (n = JSON.parse(n)), "-1" != n.code && n.data) {
                n = n.data;
                var o = {
                  user_id: n.uid || "",
                  user_name: n.nickname || "",
                  portrait_url: n.avatar || "",
                  phone: "",
                  wx_openid: "",
                  wx_unionid: "",
                  app_user_token: ""
                };
                e && e(o);
              } else e && e(!1);
            } else e && e(!1);
          };
        },
        getLocation: function (e) {},
        shareTo: function () {
          var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {},
            n = JSON.stringify({
              funcType: "jsSettingShare",
              param: {
                url: e.link_url || "",
                title: e.title || "",
                desc: e.brief || "",
                thumb: e.indexpic || ""
              }
            });
          this.callAppMethod(n);
        },
        goToLoginPage: function () {
          var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : null,
            n = JSON.stringify({
              funcType: "jsLogin"
            });
          this.callAppMethod(n), window.appCallBack = function (n) {
            "string" == typeof n && (n = JSON.parse(n)), n = !("-1" == n.code || !n.data) && n.data, e && e(n);
          };
        },
        goToBindPage: function () {},
        saveImage: function () {},
        linkTo: function () {},
        jumpToNews: function () {},
        goUcenter: function () {},
        playAudio: function () {},
        callAppMethod: function (e) {
          if (this.isInApp()) {
            var n = uni.getSystemInfoSync();
            "ios" === n.platform ? window.webkit.messageHandlers.originFunction.postMessage(e) : "android" === n.platform && MediaClient.originFunction(e);
          }
        },
        goToTaskCenter: function () {
          var e = JSON.stringify({
            funcType: "jsTaskCenter"
          });
          this.callAppMethod(e);
        },
        showShare: function () {},
        openpaper: function () {}
      },
      a = t;
    n.default = a;
  },
  "5fac": function (e, n, o) {
    "use strict";

    o("6a54");
    var t = o("f5bd").default;
    Object.defineProperty(n, "__esModule", {
      value: !0
    }), n.default = void 0, o("bf0f"), o("5c47"), o("af8f"), o("d4b5"), o("5ef2");
    var a = t(o("2cfc"));
    function i(e) {
      var n = uni.getSystemInfoSync();
      return n.platform === e;
    }
    var r = {
        isInApp: function () {
          var e = navigator.userAgent.toLowerCase(),
            n = a.default.thirdPlatforms.yongpai.apps.some(function (n) {
              return -1 != e.search(n);
            });
          return n;
        },
        getSystemInfo: function (e) {},
        getUserInfo: function (e) {
          var n = i("android"),
            o = i("ios");
          o ? window.webkit.messageHandlers.Native.postMessage({
            method: "userJson",
            data: {
              isLogin: "true"
            }
          }) : n && window.Native.postMessage("{\"method\":\"userJson\",data:{\"isLogin\":\"true\"}}"), window.callBack = function (n) {
            if (n) {
              "string" == typeof n && (n = JSON.parse(n)), n && (n.nickname = n.nickname || n.nikeName);
              var o = {
                user_id: n.userId || "",
                user_name: n.nickname || "",
                portrait_url: "",
                phone: "",
                wx_openid: "",
                wx_unionid: "",
                app_user_token: n.token || ""
              };
              e && e(o);
            } else e && e(!1);
          };
        },
        getLocation: function (e) {},
        shareTo: function () {
          var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {},
            n = i("android"),
            o = i("ios"),
            t = {
              method: "webShare",
              data: {
                shareUrl: e.link_url,
                shareTitle: e.title,
                shareSubTitle: e.brief,
                shareIcon: e.indexpic
              }
            },
            a = JSON.stringify(t);
          o ? window.webkit.messageHandlers.Native.postMessage(t) : n && window.Native.postMessage(a);
        },
        goToLoginPage: function () {},
        goToBindPage: function () {},
        saveImage: function () {},
        linkTo: function () {},
        openpaper: function () {
          var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : "";
          if (e) {
            var n = i("android"),
              o = i("ios"),
              t = {
                method: "openPaper",
                data: {
                  to: e
                }
              },
              a = JSON.stringify(t);
            o ? window.webkit.messageHandlers.Native.postMessage(t) : n && window.Native.postMessage(a);
          }
        },
        jumpToNews: function () {
          var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : "";
          if (e) {
            var n = "",
              o = e.indexOf("yp://");
            n = -1 != o ? e : "yp://app?type=news&modetype=0&id=" + e, this.openpaper(n);
          }
        },
        goUcenter: function () {},
        playAudio: function () {},
        showShare: function () {
          var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {},
            n = i("android"),
            o = i("ios"),
            t = {
              method: "webShare",
              data: {
                isOpenBoard: !0,
                shareUrl: e.link_url,
                shareTitle: e.title,
                shareSubTitle: e.brief,
                shareIcon: e.indexpic
              }
            },
            a = JSON.stringify(t);
          o ? window.webkit.messageHandlers.Native.postMessage(t) : n && window.Native.postMessage(a);
        }
      },
      u = r;
    n.default = u;
  },
  "619a": function (e, n, o) {
    "use strict";

    var t = o("f5bd").default;
    o("bf0f"), o("2797"), o("dc8a"), o("8f71");
    var a = t(o("9b8e")),
      i = t(o("1209"));
    Object.keys(i.default).forEach(function (e) {
      a.default.filter(e, i.default[e]);
    });
  },
  "628f": function (e, n, o) {
    "use strict";

    o.d(n, "b", function () {
      return t;
    }), o.d(n, "c", function () {
      return a;
    }), o.d(n, "a", function () {});
    var t = function () {
        var e = this.$createElement,
          n = this._self._c || e;
        return n("App", {
          attrs: {
            keepAliveInclude: this.keepAliveInclude
          }
        });
      },
      a = [];
  },
  "6d09": function (e, n, o) {
    "use strict";

    o("6a54"), Object.defineProperty(n, "__esModule", {
      value: !0
    }), n.default = void 0, o("45fa");
    var t = {
        isInApp: function () {
          return mc.isClient();
        },
        getSystemInfo: function (e) {},
        getUserInfo: function (e) {
          mc.userGetInfo(function (n) {
            if (n && n.data) {
              var o = {
                user_id: n.data.id || "",
                user_name: n.data.nickname || "",
                portrait_url: n.data.profileImage || "",
                phone: "",
                wx_openid: "",
                wx_unionid: "",
                app_user_token: ""
              };
              e && e(o);
            } else e && e(!1);
          });
        },
        getLocation: function (e) {
          mc.locationGetInfo(function (n) {
            e && e(n);
          });
        },
        shareTo: function () {},
        goToLoginPage: function () {
          mc.userLogin();
        },
        goToBindPage: function () {},
        saveImage: function () {},
        linkTo: function () {},
        jumpToNews: function () {},
        goUcenter: function () {},
        playAudio: function () {},
        showShare: function () {},
        openpaper: function () {}
      },
      a = t;
    n.default = a;
  },
  "75c8": function (e, n, o) {
    "use strict";

    (function (e) {
      var n = o("f5bd").default;
      o("473f"), o("bf0f"), o("de6c"), o("5c47"), o("a1c1");
      var t = n(o("9b8e")),
        a = {
          keys: function () {
            return [];
          }
        };
      e["____7B8F155____"] = !0, delete e["____7B8F155____"], e.__uniConfig = {
        easycom: {
          "^u-(.*)": "uview-ui/components/u-$1/u-$1.vue",
          "^unicloud-db$": "@dcloudio/uni-cli-shared/components/unicloud-db.vue",
          "^uniad$": "@dcloudio/uni-cli-shared/components/uniad.vue",
          "^ad-rewarded-video$": "@dcloudio/uni-cli-shared/components/ad-rewarded-video.vue",
          "^ad-fullscreen-video$": "@dcloudio/uni-cli-shared/components/ad-fullscreen-video.vue",
          "^ad-interstitial$": "@dcloudio/uni-cli-shared/components/ad-interstitial.vue",
          "^ad-interactive$": "@dcloudio/uni-cli-shared/components/ad-interactive.vue",
          "^page-meta$": "@dcloudio/uni-cli-shared/components/page-meta.vue",
          "^navigation-bar$": "@dcloudio/uni-cli-shared/components/navigation-bar.vue",
          "^uni-match-media$": "@dcloudio/uni-cli-shared/components/uni-match-media.vue"
        },
        tabBar: {
          color: "#515A6E",
          selectedColor: "#515A6E",
          borderStyle: "black",
          backgroundColor: "#ffffff",
          iconWidth: "20px",
          spacing: "5px",
          list: [{
            current: 0,
            pagePath: "module-mall/home/home-style-four",
            iconPath: "static/tabbar/home.png",
            selectedIconPath: "static/tabbar/home-selected.png",
            text: "\u9996\u9875",
            visible: !1,
            redDot: !1,
            badge: ""
          }, {
            current: 1,
            pagePath: "module-mall/business/business-new-style-four",
            iconPath: "static/tabbar/business.png",
            selectedIconPath: "static/tabbar/business-selected.png",
            text: "\u5546\u5BB6",
            visible: !1,
            redDot: !1,
            badge: ""
          }, {
            current: 2,
            pagePath: "module-mall/exchange-log/exchange-log-style-four",
            iconPath: "static/tabbar/order.png",
            selectedIconPath: "static/tabbar/order-selected.png",
            text: "\u8BA2\u5355",
            visible: !1,
            redDot: !1,
            badge: ""
          }, {
            current: 3,
            pagePath: "module-mall/user/user-center-style-four",
            iconPath: "static/tabbar/my.png",
            selectedIconPath: "static/tabbar/my-selected.png",
            text: "\u6211\u7684",
            visible: !1,
            redDot: !1,
            badge: ""
          }]
        },
        globalStyle: {
          navigationBarTextStyle: "black",
          navigationBarTitleText: "\u4E91\u9704\u4E4B\u5DC5",
          navigationBarBackgroundColor: "#F8F8F8",
          backgroundColor: "#F8F8F8"
        }
      }, e.__uniConfig.compilerVersion = "4.24", e.__uniConfig.darkmode = !1, e.__uniConfig.themeConfig = {}, e.__uniConfig.uniPlatform = "h5", e.__uniConfig.appId = "__UNI__7B8F155", e.__uniConfig.appName = "", e.__uniConfig.appVersion = "1.0.0", e.__uniConfig.appVersionCode = "100", e.__uniConfig.router = {
        mode: "history",
        base: "/"
      }, e.__uniConfig.publicPath = "/", e.__uniConfig["async"] = {
        loading: "AsyncLoading",
        error: "AsyncError",
        delay: 200,
        timeout: 60000
      }, e.__uniConfig.debug = !1, e.__uniConfig.networkTimeout = {
        request: 60000,
        connectSocket: 60000,
        uploadFile: 600000,
        downloadFile: 60000
      }, e.__uniConfig.sdkConfigs = {}, e.__uniConfig.qqMapKey = void 0, e.__uniConfig.googleMapKey = void 0, e.__uniConfig.aMapKey = void 0, e.__uniConfig.aMapSecurityJsCode = void 0, e.__uniConfig.aMapServiceHost = void 0, e.__uniConfig.locale = "", e.__uniConfig.fallbackLocale = void 0, e.__uniConfig.locales = a.keys().reduce(function (e, n) {
        var o = n.replace(/\.\/(uni-app.)?(.*).json/, "$2"),
          t = a(n);
        return Object.assign(e[o] || (e[o] = {}), t.common || t), e;
      }, {}), e.__uniConfig.nvue = {
        "flex-direction": "column"
      }, e.__uniConfig.__webpack_chunk_load__ = o.e, t.default.component("pages-home-sdk", function (e) {
        var n = {
          component: Promise.all([o.e("module-activity-home-home~module-ai-face-fusion-home-home~module-answer-answer-log-answer-log~module~f7b76ac1"), o.e("pages-home-sdk")]).then(function () {
            return e(o("360d"));
          }.bind(null, o)).catch(o.oe),
          delay: __uniConfig["async"].delay,
          timeout: __uniConfig["async"].timeout
        };
        return __uniConfig["async"]["loading"] && (n.loading = {
          name: "SystemAsyncLoading",
          render: function (e) {
            return e(__uniConfig["async"]["loading"]);
          }
        }), __uniConfig["async"]["error"] && (n.error = {
          name: "SystemAsyncError",
          render: function (e) {
            return e(__uniConfig["async"]["error"]);
          }
        }), n;
      }), t.default.component("pages-home-index", function (e) {
        var n = {
          component: Promise.all([o.e("module-activity-home-home~module-ai-face-fusion-home-home~module-answer-answer-log-answer-log~module~f7b76ac1"), o.e("module-activity-home-home~module-answer-home-home~module-answer-question-question~module-article-tas~3c43a7bb"), o.e("module-activity-home-home~module-answer-home-home~module-answer-question-question~module-article-tas~edb4023f"), o.e("module-activity-home-home~module-answer-home-home~module-answer-question-question~module-article-tas~5a13cc39"), o.e("pages-home-index")]).then(function () {
            return e(o("c72e"));
          }.bind(null, o)).catch(o.oe),
          delay: __uniConfig["async"].delay,
          timeout: __uniConfig["async"].timeout
        };
        return __uniConfig["async"]["loading"] && (n.loading = {
          name: "SystemAsyncLoading",
          render: function (e) {
            return e(__uniConfig["async"]["loading"]);
          }
        }), __uniConfig["async"]["error"] && (n.error = {
          name: "SystemAsyncError",
          render: function (e) {
            return e(__uniConfig["async"]["error"]);
          }
        }), n;
      }), t.default.component("pages-home-callback", function (e) {
        var n = {
          component: o.e("pages-home-callback").then(function () {
            return e(o("f492"));
          }.bind(null, o)).catch(o.oe),
          delay: __uniConfig["async"].delay,
          timeout: __uniConfig["async"].timeout
        };
        return __uniConfig["async"]["loading"] && (n.loading = {
          name: "SystemAsyncLoading",
          render: function (e) {
            return e(__uniConfig["async"]["loading"]);
          }
        }), __uniConfig["async"]["error"] && (n.error = {
          name: "SystemAsyncError",
          render: function (e) {
            return e(__uniConfig["async"]["error"]);
          }
        }), n;
      }), t.default.component("pages-activity-list", function (e) {
        var n = {
          component: Promise.all([o.e("module-activity-home-home~module-ai-face-fusion-home-home~module-answer-answer-log-answer-log~module~f7b76ac1"), o.e("module-answer-answer-log-answer-detail~module-customer-fhtvn-no-rank-list~module-customer-fhtvn-rank~27a720c1"), o.e("pages-activity-list")]).then(function () {
            return e(o("b3f2"));
          }.bind(null, o)).catch(o.oe),
          delay: __uniConfig["async"].delay,
          timeout: __uniConfig["async"].timeout
        };
        return __uniConfig["async"]["loading"] && (n.loading = {
          name: "SystemAsyncLoading",
          render: function (e) {
            return e(__uniConfig["async"]["loading"]);
          }
        }), __uniConfig["async"]["error"] && (n.error = {
          name: "SystemAsyncError",
          render: function (e) {
            return e(__uniConfig["async"]["error"]);
          }
        }), n;
      }), t.default.component("pages-member-task-center", function (e) {
        var n = {
          component: Promise.all([o.e("module-activity-home-home~module-ai-face-fusion-home-home~module-answer-answer-log-answer-log~module~f7b76ac1"), o.e("module-activity-home-home~module-answer-home-home~module-answer-question-question~module-article-tas~3c43a7bb"), o.e("module-activity-home-home~module-answer-home-home~module-answer-question-question~module-article-tas~edb4023f"), o.e("module-activity-home-home~module-answer-home-home~module-answer-question-question~module-article-tas~5a13cc39"), o.e("pages-member-task-center")]).then(function () {
            return e(o("0d8b"));
          }.bind(null, o)).catch(o.oe),
          delay: __uniConfig["async"].delay,
          timeout: __uniConfig["async"].timeout
        };
        return __uniConfig["async"]["loading"] && (n.loading = {
          name: "SystemAsyncLoading",
          render: function (e) {
            return e(__uniConfig["async"]["loading"]);
          }
        }), __uniConfig["async"]["error"] && (n.error = {
          name: "SystemAsyncError",
          render: function (e) {
            return e(__uniConfig["async"]["error"]);
          }
        }), n;
      }), t.default.component("pages-shopping-mall-home", function (e) {
        var n = {
          component: Promise.all([o.e("module-activity-home-home~module-ai-face-fusion-home-home~module-answer-answer-log-answer-log~module~f7b76ac1"), o.e("module-activity-home-home~module-answer-home-home~module-answer-question-question~module-article-tas~3c43a7bb"), o.e("module-activity-home-home~module-answer-home-home~module-answer-question-question~module-article-tas~edb4023f"), o.e("module-activity-home-home~module-answer-home-home~module-answer-question-question~module-article-tas~5a13cc39"), o.e("pages-shopping-mall-home")]).then(function () {
            return e(o("0aa9"));
          }.bind(null, o)).catch(o.oe),
          delay: __uniConfig["async"].delay,
          timeout: __uniConfig["async"].timeout
        };
        return __uniConfig["async"]["loading"] && (n.loading = {
          name: "SystemAsyncLoading",
          render: function (e) {
            return e(__uniConfig["async"]["loading"]);
          }
        }), __uniConfig["async"]["error"] && (n.error = {
          name: "SystemAsyncError",
          render: function (e) {
            return e(__uniConfig["async"]["error"]);
          }
        }), n;
      }), t.default.component("pages-member-user-center", function (e) {
        var n = {
          component: Promise.all([o.e("module-activity-home-home~module-ai-face-fusion-home-home~module-answer-answer-log-answer-log~module~f7b76ac1"), o.e("module-activity-home-home~module-answer-home-home~module-answer-question-question~module-article-tas~3c43a7bb"), o.e("module-activity-home-home~module-answer-home-home~module-answer-question-question~module-article-tas~edb4023f"), o.e("module-activity-home-home~module-answer-home-home~module-answer-question-question~module-article-tas~5a13cc39"), o.e("pages-member-user-center")]).then(function () {
            return e(o("2dab"));
          }.bind(null, o)).catch(o.oe),
          delay: __uniConfig["async"].delay,
          timeout: __uniConfig["async"].timeout
        };
        return __uniConfig["async"]["loading"] && (n.loading = {
          name: "SystemAsyncLoading",
          render: function (e) {
            return e(__uniConfig["async"]["loading"]);
          }
        }), __uniConfig["async"]["error"] && (n.error = {
          name: "SystemAsyncError",
          render: function (e) {
            return e(__uniConfig["async"]["error"]);
          }
        }), n;
      }), t.default.component("pages-home-sdk-activity", function (e) {
        var n = {
          component: Promise.all([o.e("module-activity-home-home~module-ai-face-fusion-home-home~module-answer-answer-log-answer-log~module~f7b76ac1"), o.e("pages-home-sdk-activity")]).then(function () {
            return e(o("f28c"));
          }.bind(null, o)).catch(o.oe),
          delay: __uniConfig["async"].delay,
          timeout: __uniConfig["async"].timeout
        };
        return __uniConfig["async"]["loading"] && (n.loading = {
          name: "SystemAsyncLoading",
          render: function (e) {
            return e(__uniConfig["async"]["loading"]);
          }
        }), __uniConfig["async"]["error"] && (n.error = {
          name: "SystemAsyncError",
          render: function (e) {
            return e(__uniConfig["async"]["error"]);
          }
        }), n;
      }), t.default.component("pages-home-sdk-me", function (e) {
        var n = {
          component: o.e("pages-home-sdk-me").then(function () {
            return e(o("b382a"));
          }.bind(null, o)).catch(o.oe),
          delay: __uniConfig["async"].delay,
          timeout: __uniConfig["async"].timeout
        };
        return __uniConfig["async"]["loading"] && (n.loading = {
          name: "SystemAsyncLoading",
          render: function (e) {
            return e(__uniConfig["async"]["loading"]);
          }
        }), __uniConfig["async"]["error"] && (n.error = {
          name: "SystemAsyncError",
          render: function (e) {
            return e(__uniConfig["async"]["error"]);
          }
        }), n;
      }), t.default.component("pages-home-error", function (e) {
        var n = {
          component: o.e("pages-home-error").then(function () {
            return e(o("7a5c"));
          }.bind(null, o)).catch(o.oe),
          delay: __uniConfig["async"].delay,
          timeout: __uniConfig["async"].timeout
        };
        return __uniConfig["async"]["loading"] && (n.loading = {
          name: "SystemAsyncLoading",
          render: function (e) {
            return e(__uniConfig["async"]["loading"]);
          }
        }), __uniConfig["async"]["error"] && (n.error = {
          name: "SystemAsyncError",
          render: function (e) {
            return e(__uniConfig["async"]["error"]);
          }
        }), n;
      }), t.default.component("pages-download-tianmu-download", function (e) {
        var n = {
          component: o.e("pages-download-tianmu-download").then(function () {
            return e(o("5b05"));
          }.bind(null, o)).catch(o.oe),
          delay: __uniConfig["async"].delay,
          timeout: __uniConfig["async"].timeout
        };
        return __uniConfig["async"]["loading"] && (n.loading = {
          name: "SystemAsyncLoading",
          render: function (e) {
            return e(__uniConfig["async"]["loading"]);
          }
        }), __uniConfig["async"]["error"] && (n.error = {
          name: "SystemAsyncError",
          render: function (e) {
            return e(__uniConfig["async"]["error"]);
          }
        }), n;
      }), t.default.component("pages-setting-clear", function (e) {
        var n = {
          component: o.e("pages-setting-clear").then(function () {
            return e(o("a8f2"));
          }.bind(null, o)).catch(o.oe),
          delay: __uniConfig["async"].delay,
          timeout: __uniConfig["async"].timeout
        };
        return __uniConfig["async"]["loading"] && (n.loading = {
          name: "SystemAsyncLoading",
          render: function (e) {
            return e(__uniConfig["async"]["loading"]);
          }
        }), __uniConfig["async"]["error"] && (n.error = {
          name: "SystemAsyncError",
          render: function (e) {
            return e(__uniConfig["async"]["error"]);
          }
        }), n;
      }), t.default.component("pages-download-close-page", function (e) {
        var n = {
          component: o.e("pages-download-close-page").then(function () {
            return e(o("9d16"));
          }.bind(null, o)).catch(o.oe),
          delay: __uniConfig["async"].delay,
          timeout: __uniConfig["async"].timeout
        };
        return __uniConfig["async"]["loading"] && (n.loading = {
          name: "SystemAsyncLoading",
          render: function (e) {
            return e(__uniConfig["async"]["loading"]);
          }
        }), __uniConfig["async"]["error"] && (n.error = {
          name: "SystemAsyncError",
          render: function (e) {
            return e(__uniConfig["async"]["error"]);
          }
        }), n;
      }), t.default.component("module-mall-home-home", function (e) {
        var n = {
          component: Promise.all([o.e("module-activity-home-home~module-ai-face-fusion-home-home~module-answer-answer-log-answer-log~module~f7b76ac1"), o.e("module-activity-home-home~module-answer-home-home~module-answer-question-question~module-article-tas~3c43a7bb"), o.e("module-activity-home-home~module-answer-home-home~module-answer-question-question~module-article-tas~edb4023f"), o.e("module-activity-home-home~module-answer-home-home~module-answer-question-question~module-article-tas~5a13cc39"), o.e("module-mall-home-home")]).then(function () {
            return e(o("0186"));
          }.bind(null, o)).catch(o.oe),
          delay: __uniConfig["async"].delay,
          timeout: __uniConfig["async"].timeout
        };
        return __uniConfig["async"]["loading"] && (n.loading = {
          name: "SystemAsyncLoading",
          render: function (e) {
            return e(__uniConfig["async"]["loading"]);
          }
        }), __uniConfig["async"]["error"] && (n.error = {
          name: "SystemAsyncError",
          render: function (e) {
            return e(__uniConfig["async"]["error"]);
          }
        }), n;
      }), t.default.component("module-mall-customer-customer", function (e) {
        var n = {
          component: Promise.all([o.e("module-activity-home-home~module-ai-face-fusion-home-home~module-answer-answer-log-answer-log~module~f7b76ac1"), o.e("module-mall-customer-business-customer~module-mall-customer-customer"), o.e("module-mall-customer-customer")]).then(function () {
            return e(o("00da"));
          }.bind(null, o)).catch(o.oe),
          delay: __uniConfig["async"].delay,
          timeout: __uniConfig["async"].timeout
        };
        return __uniConfig["async"]["loading"] && (n.loading = {
          name: "SystemAsyncLoading",
          render: function (e) {
            return e(__uniConfig["async"]["loading"]);
          }
        }), __uniConfig["async"]["error"] && (n.error = {
          name: "SystemAsyncError",
          render: function (e) {
            return e(__uniConfig["async"]["error"]);
          }
        }), n;
      }), t.default.component("module-mall-customer-business-customer", function (e) {
        var n = {
          component: Promise.all([o.e("module-activity-home-home~module-ai-face-fusion-home-home~module-answer-answer-log-answer-log~module~f7b76ac1"), o.e("module-mall-customer-business-customer~module-mall-customer-customer"), o.e("module-mall-customer-business-customer")]).then(function () {
            return e(o("e357"));
          }.bind(null, o)).catch(o.oe),
          delay: __uniConfig["async"].delay,
          timeout: __uniConfig["async"].timeout
        };
        return __uniConfig["async"]["loading"] && (n.loading = {
          name: "SystemAsyncLoading",
          render: function (e) {
            return e(__uniConfig["async"]["loading"]);
          }
        }), __uniConfig["async"]["error"] && (n.error = {
          name: "SystemAsyncError",
          render: function (e) {
            return e(__uniConfig["async"]["error"]);
          }
        }), n;
      }), t.default.component("module-mall-customer-pre-sales-customer", function (e) {
        var n = {
          component: Promise.all([o.e("module-activity-home-home~module-ai-face-fusion-home-home~module-answer-answer-log-answer-log~module~f7b76ac1"), o.e("module-mall-customer-pre-sales-customer")]).then(function () {
            return e(o("e377"));
          }.bind(null, o)).catch(o.oe),
          delay: __uniConfig["async"].delay,
          timeout: __uniConfig["async"].timeout
        };
        return __uniConfig["async"]["loading"] && (n.loading = {
          name: "SystemAsyncLoading",
          render: function (e) {
            return e(__uniConfig["async"]["loading"]);
          }
        }), __uniConfig["async"]["error"] && (n.error = {
          name: "SystemAsyncError",
          render: function (e) {
            return e(__uniConfig["async"]["error"]);
          }
        }), n;
      }), t.default.component("module-mall-home-home-style-two", function (e) {
        var n = {
          component: Promise.all([o.e("module-activity-home-home~module-ai-face-fusion-home-home~module-answer-answer-log-answer-log~module~f7b76ac1"), o.e("module-activity-home-home~module-answer-home-home~module-answer-question-question~module-article-tas~3c43a7bb"), o.e("module-activity-home-home~module-answer-home-home~module-answer-question-question~module-article-tas~edb4023f"), o.e("module-activity-home-home~module-answer-home-home~module-answer-question-question~module-article-tas~5a13cc39"), o.e("module-mall-home-home-style-two")]).then(function () {
            return e(o("7359"));
          }.bind(null, o)).catch(o.oe),
          delay: __uniConfig["async"].delay,
          timeout: __uniConfig["async"].timeout
        };
        return __uniConfig["async"]["loading"] && (n.loading = {
          name: "SystemAsyncLoading",
          render: function (e) {
            return e(__uniConfig["async"]["loading"]);
          }
        }), __uniConfig["async"]["error"] && (n.error = {
          name: "SystemAsyncError",
          render: function (e) {
            return e(__uniConfig["async"]["error"]);
          }
        }), n;
      }), t.default.component("module-mall-business-offline-business", function (e) {
        var n = {
          component: Promise.all([o.e("module-activity-home-home~module-ai-face-fusion-home-home~module-answer-answer-log-answer-log~module~f7b76ac1"), o.e("module-answer-answer-log-answer-detail~module-customer-fhtvn-no-rank-list~module-customer-fhtvn-rank~27a720c1"), o.e("module-ecnyform-activity-log-my-log-list~module-ecnyform-business-list~module-guess-log-pk-log~modul~3d0ba33b"), o.e("module-mall-business-offline-business")]).then(function () {
            return e(o("f3f1"));
          }.bind(null, o)).catch(o.oe),
          delay: __uniConfig["async"].delay,
          timeout: __uniConfig["async"].timeout
        };
        return __uniConfig["async"]["loading"] && (n.loading = {
          name: "SystemAsyncLoading",
          render: function (e) {
            return e(__uniConfig["async"]["loading"]);
          }
        }), __uniConfig["async"]["error"] && (n.error = {
          name: "SystemAsyncError",
          render: function (e) {
            return e(__uniConfig["async"]["error"]);
          }
        }), n;
      }), t.default.component("module-mall-business-business", function (e) {
        var n = {
          component: Promise.all([o.e("module-activity-home-home~module-ai-face-fusion-home-home~module-answer-answer-log-answer-log~module~f7b76ac1"), o.e("module-ecnyform-activity-log-my-log-list~module-ecnyform-business-list~module-guess-log-pk-log~modul~3d0ba33b"), o.e("module-mall-business-business")]).then(function () {
            return e(o("1497"));
          }.bind(null, o)).catch(o.oe),
          delay: __uniConfig["async"].delay,
          timeout: __uniConfig["async"].timeout
        };
        return __uniConfig["async"]["loading"] && (n.loading = {
          name: "SystemAsyncLoading",
          render: function (e) {
            return e(__uniConfig["async"]["loading"]);
          }
        }), __uniConfig["async"]["error"] && (n.error = {
          name: "SystemAsyncError",
          render: function (e) {
            return e(__uniConfig["async"]["error"]);
          }
        }), n;
      }), t.default.component("module-mall-business-business-new", function (e) {
        var n = {
          component: Promise.all([o.e("module-activity-home-home~module-ai-face-fusion-home-home~module-answer-answer-log-answer-log~module~f7b76ac1"), o.e("module-ecnyform-activity-log-my-log-list~module-ecnyform-business-list~module-guess-log-pk-log~modul~3d0ba33b"), o.e("module-mall-business-business-new")]).then(function () {
            return e(o("286a"));
          }.bind(null, o)).catch(o.oe),
          delay: __uniConfig["async"].delay,
          timeout: __uniConfig["async"].timeout
        };
        return __uniConfig["async"]["loading"] && (n.loading = {
          name: "SystemAsyncLoading",
          render: function (e) {
            return e(__uniConfig["async"]["loading"]);
          }
        }), __uniConfig["async"]["error"] && (n.error = {
          name: "SystemAsyncError",
          render: function (e) {
            return e(__uniConfig["async"]["error"]);
          }
        }), n;
      }), t.default.component("module-mall-business-business-new-style-four", function (e) {
        var n = {
          component: Promise.all([o.e("module-activity-home-home~module-ai-face-fusion-home-home~module-answer-answer-log-answer-log~module~f7b76ac1"), o.e("module-ecnyform-activity-log-my-log-list~module-ecnyform-business-list~module-guess-log-pk-log~modul~3d0ba33b"), o.e("module-mall-business-business-new-style-four")]).then(function () {
            return e(o("53de"));
          }.bind(null, o)).catch(o.oe),
          delay: __uniConfig["async"].delay,
          timeout: __uniConfig["async"].timeout
        };
        return __uniConfig["async"]["loading"] && (n.loading = {
          name: "SystemAsyncLoading",
          render: function (e) {
            return e(__uniConfig["async"]["loading"]);
          }
        }), __uniConfig["async"]["error"] && (n.error = {
          name: "SystemAsyncError",
          render: function (e) {
            return e(__uniConfig["async"]["error"]);
          }
        }), n;
      }), t.default.component("module-mall-business-apply", function (e) {
        var n = {
          component: Promise.all([o.e("module-activity-home-home~module-ai-face-fusion-home-home~module-answer-answer-log-answer-log~module~f7b76ac1"), o.e("module-info-pub-report-report~module-live-report-report~module-mall-business-apply~module-mall-comme~f4ab7752"), o.e("module-clockin-cert-get-cert~module-lottery-win-record-win-record~module-mall-address-address-detail~3fd23a5f"), o.e("module-mall-address-address-detail~module-mall-business-apply"), o.e("module-mall-business-apply")]).then(function () {
            return e(o("5b17"));
          }.bind(null, o)).catch(o.oe),
          delay: __uniConfig["async"].delay,
          timeout: __uniConfig["async"].timeout
        };
        return __uniConfig["async"]["loading"] && (n.loading = {
          name: "SystemAsyncLoading",
          render: function (e) {
            return e(__uniConfig["async"]["loading"]);
          }
        }), __uniConfig["async"]["error"] && (n.error = {
          name: "SystemAsyncError",
          render: function (e) {
            return e(__uniConfig["async"]["error"]);
          }
        }), n;
      }), t.default.component("module-mall-goodslist-goodslist", function (e) {
        var n = {
          component: Promise.all([o.e("module-activity-home-home~module-ai-face-fusion-home-home~module-answer-answer-log-answer-log~module~f7b76ac1"), o.e("module-activity-home-home~module-answer-home-home~module-answer-question-question~module-article-tas~3c43a7bb"), o.e("module-activity-home-home~module-answer-home-home~module-answer-question-question~module-article-tas~edb4023f"), o.e("module-activity-home-home~module-answer-home-home~module-answer-question-question~module-article-tas~5a13cc39"), o.e("module-mall-goodslist-goodslist")]).then(function () {
            return e(o("9349"));
          }.bind(null, o)).catch(o.oe),
          delay: __uniConfig["async"].delay,
          timeout: __uniConfig["async"].timeout
        };
        return __uniConfig["async"]["loading"] && (n.loading = {
          name: "SystemAsyncLoading",
          render: function (e) {
            return e(__uniConfig["async"]["loading"]);
          }
        }), __uniConfig["async"]["error"] && (n.error = {
          name: "SystemAsyncError",
          render: function (e) {
            return e(__uniConfig["async"]["error"]);
          }
        }), n;
      }), t.default.component("module-mall-goodslist-goods-class-list", function (e) {
        var n = {
          component: Promise.all([o.e("module-activity-home-home~module-ai-face-fusion-home-home~module-answer-answer-log-answer-log~module~f7b76ac1"), o.e("module-mall-goodslist-goods-class-list")]).then(function () {
            return e(o("86a9"));
          }.bind(null, o)).catch(o.oe),
          delay: __uniConfig["async"].delay,
          timeout: __uniConfig["async"].timeout
        };
        return __uniConfig["async"]["loading"] && (n.loading = {
          name: "SystemAsyncLoading",
          render: function (e) {
            return e(__uniConfig["async"]["loading"]);
          }
        }), __uniConfig["async"]["error"] && (n.error = {
          name: "SystemAsyncError",
          render: function (e) {
            return e(__uniConfig["async"]["error"]);
          }
        }), n;
      }), t.default.component("module-mall-goods-detail-goods-detail", function (e) {
        var n = {
          component: Promise.all([o.e("module-activity-home-home~module-ai-face-fusion-home-home~module-answer-answer-log-answer-log~module~f7b76ac1"), o.e("module-activity-home-home~module-answer-home-home~module-answer-question-question~module-article-tas~3c43a7bb"), o.e("module-activity-home-home~module-answer-home-home~module-answer-question-question~module-article-tas~edb4023f"), o.e("module-activity-home-home~module-answer-home-home~module-answer-question-question~module-article-tas~5a13cc39"), o.e("module-mall-goods-detail-goods-detail")]).then(function () {
            return e(o("3efb"));
          }.bind(null, o)).catch(o.oe),
          delay: __uniConfig["async"].delay,
          timeout: __uniConfig["async"].timeout
        };
        return __uniConfig["async"]["loading"] && (n.loading = {
          name: "SystemAsyncLoading",
          render: function (e) {
            return e(__uniConfig["async"]["loading"]);
          }
        }), __uniConfig["async"]["error"] && (n.error = {
          name: "SystemAsyncError",
          render: function (e) {
            return e(__uniConfig["async"]["error"]);
          }
        }), n;
      }), t.default.component("module-mall-goods-detail-goods-detail-style-three", function (e) {
        var n = {
          component: Promise.all([o.e("module-activity-home-home~module-ai-face-fusion-home-home~module-answer-answer-log-answer-log~module~f7b76ac1"), o.e("module-activity-home-home~module-answer-home-home~module-answer-question-question~module-article-tas~3c43a7bb"), o.e("module-activity-home-home~module-answer-home-home~module-answer-question-question~module-article-tas~edb4023f"), o.e("module-activity-home-home~module-answer-home-home~module-answer-question-question~module-article-tas~5a13cc39"), o.e("module-mall-goods-detail-goods-detail-style-three")]).then(function () {
            return e(o("afa4"));
          }.bind(null, o)).catch(o.oe),
          delay: __uniConfig["async"].delay,
          timeout: __uniConfig["async"].timeout
        };
        return __uniConfig["async"]["loading"] && (n.loading = {
          name: "SystemAsyncLoading",
          render: function (e) {
            return e(__uniConfig["async"]["loading"]);
          }
        }), __uniConfig["async"]["error"] && (n.error = {
          name: "SystemAsyncError",
          render: function (e) {
            return e(__uniConfig["async"]["error"]);
          }
        }), n;
      }), t.default.component("module-mall-goods-activity-goods-activity", function (e) {
        var n = {
          component: Promise.all([o.e("module-activity-home-home~module-ai-face-fusion-home-home~module-answer-answer-log-answer-log~module~f7b76ac1"), o.e("module-mall-goods-activity-goods-activity")]).then(function () {
            return e(o("1b03"));
          }.bind(null, o)).catch(o.oe),
          delay: __uniConfig["async"].delay,
          timeout: __uniConfig["async"].timeout
        };
        return __uniConfig["async"]["loading"] && (n.loading = {
          name: "SystemAsyncLoading",
          render: function (e) {
            return e(__uniConfig["async"]["loading"]);
          }
        }), __uniConfig["async"]["error"] && (n.error = {
          name: "SystemAsyncError",
          render: function (e) {
            return e(__uniConfig["async"]["error"]);
          }
        }), n;
      }), t.default.component("module-mall-confirm-order-confirm-order", function (e) {
        var n = {
          component: Promise.all([o.e("module-activity-home-home~module-ai-face-fusion-home-home~module-answer-answer-log-answer-log~module~f7b76ac1"), o.e("module-activity-home-home~module-answer-home-home~module-answer-question-question~module-article-tas~3c43a7bb"), o.e("module-clockin-cert-get-cert~module-cms-news-detail~module-cms-video-detail~module-customer-fjdaily-~4f8830ac"), o.e("module-clockin-log-log~module-cms-news-detail~module-cms-video-detail~module-customer-fjdaily-clocki~540cf0d6"), o.e("module-mall-confirm-order-confirm-order")]).then(function () {
            return e(o("d40d"));
          }.bind(null, o)).catch(o.oe),
          delay: __uniConfig["async"].delay,
          timeout: __uniConfig["async"].timeout
        };
        return __uniConfig["async"]["loading"] && (n.loading = {
          name: "SystemAsyncLoading",
          render: function (e) {
            return e(__uniConfig["async"]["loading"]);
          }
        }), __uniConfig["async"]["error"] && (n.error = {
          name: "SystemAsyncError",
          render: function (e) {
            return e(__uniConfig["async"]["error"]);
          }
        }), n;
      }), t.default.component("module-mall-confirm-order-confirm-order-cart", function (e) {
        var n = {
          component: Promise.all([o.e("module-activity-home-home~module-ai-face-fusion-home-home~module-answer-answer-log-answer-log~module~f7b76ac1"), o.e("module-activity-home-home~module-answer-home-home~module-answer-question-question~module-article-tas~3c43a7bb"), o.e("module-clockin-cert-get-cert~module-cms-news-detail~module-cms-video-detail~module-customer-fjdaily-~4f8830ac"), o.e("module-clockin-log-log~module-cms-news-detail~module-cms-video-detail~module-customer-fjdaily-clocki~540cf0d6"), o.e("module-mall-confirm-order-confirm-order-cart")]).then(function () {
            return e(o("5dcd"));
          }.bind(null, o)).catch(o.oe),
          delay: __uniConfig["async"].delay,
          timeout: __uniConfig["async"].timeout
        };
        return __uniConfig["async"]["loading"] && (n.loading = {
          name: "SystemAsyncLoading",
          render: function (e) {
            return e(__uniConfig["async"]["loading"]);
          }
        }), __uniConfig["async"]["error"] && (n.error = {
          name: "SystemAsyncError",
          render: function (e) {
            return e(__uniConfig["async"]["error"]);
          }
        }), n;
      }), t.default.component("module-mall-exchange-log-exchange-log", function (e) {
        var n = {
          component: Promise.all([o.e("module-activity-home-home~module-ai-face-fusion-home-home~module-answer-answer-log-answer-log~module~f7b76ac1"), o.e("module-answer-answer-log-answer-detail~module-customer-fhtvn-no-rank-list~module-customer-fhtvn-rank~27a720c1"), o.e("module-mall-exchange-log-exchange-log")]).then(function () {
            return e(o("ce51"));
          }.bind(null, o)).catch(o.oe),
          delay: __uniConfig["async"].delay,
          timeout: __uniConfig["async"].timeout
        };
        return __uniConfig["async"]["loading"] && (n.loading = {
          name: "SystemAsyncLoading",
          render: function (e) {
            return e(__uniConfig["async"]["loading"]);
          }
        }), __uniConfig["async"]["error"] && (n.error = {
          name: "SystemAsyncError",
          render: function (e) {
            return e(__uniConfig["async"]["error"]);
          }
        }), n;
      }), t.default.component("module-mall-exchange-log-exchange-log-style-four", function (e) {
        var n = {
          component: Promise.all([o.e("module-activity-home-home~module-ai-face-fusion-home-home~module-answer-answer-log-answer-log~module~f7b76ac1"), o.e("module-answer-answer-log-answer-detail~module-customer-fhtvn-no-rank-list~module-customer-fhtvn-rank~27a720c1"), o.e("module-mall-exchange-log-exchange-log-style-four")]).then(function () {
            return e(o("ccf7"));
          }.bind(null, o)).catch(o.oe),
          delay: __uniConfig["async"].delay,
          timeout: __uniConfig["async"].timeout
        };
        return __uniConfig["async"]["loading"] && (n.loading = {
          name: "SystemAsyncLoading",
          render: function (e) {
            return e(__uniConfig["async"]["loading"]);
          }
        }), __uniConfig["async"]["error"] && (n.error = {
          name: "SystemAsyncError",
          render: function (e) {
            return e(__uniConfig["async"]["error"]);
          }
        }), n;
      }), t.default.component("module-mall-order-detail-order-detail", function (e) {
        var n = {
          component: Promise.all([o.e("module-activity-home-home~module-ai-face-fusion-home-home~module-answer-answer-log-answer-log~module~f7b76ac1"), o.e("module-lottery-win-record-detail-win-record-detail~module-lottery-writeoff-confirm~module-lottery-wr~345e859a"), o.e("module-lottery-win-record-detail-win-record-detail~module-mall-order-detail-order-detail~module-mall~4e6aba87"), o.e("module-mall-order-detail-order-detail~module-mall-order-detail-order-detail-businessmen"), o.e("module-mall-order-detail-order-detail")]).then(function () {
            return e(o("3309"));
          }.bind(null, o)).catch(o.oe),
          delay: __uniConfig["async"].delay,
          timeout: __uniConfig["async"].timeout
        };
        return __uniConfig["async"]["loading"] && (n.loading = {
          name: "SystemAsyncLoading",
          render: function (e) {
            return e(__uniConfig["async"]["loading"]);
          }
        }), __uniConfig["async"]["error"] && (n.error = {
          name: "SystemAsyncError",
          render: function (e) {
            return e(__uniConfig["async"]["error"]);
          }
        }), n;
      }), t.default.component("module-mall-order-detail-order-detail-businessmen", function (e) {
        var n = {
          component: Promise.all([o.e("module-activity-home-home~module-ai-face-fusion-home-home~module-answer-answer-log-answer-log~module~f7b76ac1"), o.e("module-lottery-win-record-detail-win-record-detail~module-lottery-writeoff-confirm~module-lottery-wr~345e859a"), o.e("module-lottery-win-record-detail-win-record-detail~module-mall-order-detail-order-detail~module-mall~4e6aba87"), o.e("module-mall-order-detail-order-detail~module-mall-order-detail-order-detail-businessmen"), o.e("module-mall-order-detail-order-detail-businessmen")]).then(function () {
            return e(o("ce46"));
          }.bind(null, o)).catch(o.oe),
          delay: __uniConfig["async"].delay,
          timeout: __uniConfig["async"].timeout
        };
        return __uniConfig["async"]["loading"] && (n.loading = {
          name: "SystemAsyncLoading",
          render: function (e) {
            return e(__uniConfig["async"]["loading"]);
          }
        }), __uniConfig["async"]["error"] && (n.error = {
          name: "SystemAsyncError",
          render: function (e) {
            return e(__uniConfig["async"]["error"]);
          }
        }), n;
      }), t.default.component("module-mall-order-detail-order-detail-businessmen", function (e) {
        var n = {
          component: Promise.all([o.e("module-activity-home-home~module-ai-face-fusion-home-home~module-answer-answer-log-answer-log~module~f7b76ac1"), o.e("module-lottery-win-record-detail-win-record-detail~module-lottery-writeoff-confirm~module-lottery-wr~345e859a"), o.e("module-lottery-win-record-detail-win-record-detail~module-mall-order-detail-order-detail~module-mall~4e6aba87"), o.e("module-mall-order-detail-order-detail~module-mall-order-detail-order-detail-businessmen"), o.e("module-mall-order-detail-order-detail-businessmen")]).then(function () {
            return e(o("ce46"));
          }.bind(null, o)).catch(o.oe),
          delay: __uniConfig["async"].delay,
          timeout: __uniConfig["async"].timeout
        };
        return __uniConfig["async"]["loading"] && (n.loading = {
          name: "SystemAsyncLoading",
          render: function (e) {
            return e(__uniConfig["async"]["loading"]);
          }
        }), __uniConfig["async"]["error"] && (n.error = {
          name: "SystemAsyncError",
          render: function (e) {
            return e(__uniConfig["async"]["error"]);
          }
        }), n;
      }), t.default.component("module-mall-order-detail-no-order-deatil", function (e) {
        var n = {
          component: o.e("module-mall-order-detail-no-order-deatil").then(function () {
            return e(o("a84c"));
          }.bind(null, o)).catch(o.oe),
          delay: __uniConfig["async"].delay,
          timeout: __uniConfig["async"].timeout
        };
        return __uniConfig["async"]["loading"] && (n.loading = {
          name: "SystemAsyncLoading",
          render: function (e) {
            return e(__uniConfig["async"]["loading"]);
          }
        }), __uniConfig["async"]["error"] && (n.error = {
          name: "SystemAsyncError",
          render: function (e) {
            return e(__uniConfig["async"]["error"]);
          }
        }), n;
      }), t.default.component("module-mall-order-result-order-result", function (e) {
        var n = {
          component: Promise.all([o.e("module-activity-home-home~module-ai-face-fusion-home-home~module-answer-answer-log-answer-log~module~f7b76ac1"), o.e("module-mall-order-result-order-result")]).then(function () {
            return e(o("726f"));
          }.bind(null, o)).catch(o.oe),
          delay: __uniConfig["async"].delay,
          timeout: __uniConfig["async"].timeout
        };
        return __uniConfig["async"]["loading"] && (n.loading = {
          name: "SystemAsyncLoading",
          render: function (e) {
            return e(__uniConfig["async"]["loading"]);
          }
        }), __uniConfig["async"]["error"] && (n.error = {
          name: "SystemAsyncError",
          render: function (e) {
            return e(__uniConfig["async"]["error"]);
          }
        }), n;
      }), t.default.component("module-mall-address-address-list", function (e) {
        var n = {
          component: Promise.all([o.e("module-activity-home-home~module-ai-face-fusion-home-home~module-answer-answer-log-answer-log~module~f7b76ac1"), o.e("module-clockin-cert-get-cert~module-cms-news-detail~module-cms-video-detail~module-customer-fjdaily-~4f8830ac"), o.e("module-mall-address-address-list")]).then(function () {
            return e(o("b38b"));
          }.bind(null, o)).catch(o.oe),
          delay: __uniConfig["async"].delay,
          timeout: __uniConfig["async"].timeout
        };
        return __uniConfig["async"]["loading"] && (n.loading = {
          name: "SystemAsyncLoading",
          render: function (e) {
            return e(__uniConfig["async"]["loading"]);
          }
        }), __uniConfig["async"]["error"] && (n.error = {
          name: "SystemAsyncError",
          render: function (e) {
            return e(__uniConfig["async"]["error"]);
          }
        }), n;
      }), t.default.component("module-mall-address-address-detail", function (e) {
        var n = {
          component: Promise.all([o.e("module-activity-home-home~module-ai-face-fusion-home-home~module-answer-answer-log-answer-log~module~f7b76ac1"), o.e("module-clockin-log-log~module-cms-news-detail~module-cms-video-detail~module-customer-fjdaily-clocki~540cf0d6"), o.e("module-clockin-cert-get-cert~module-lottery-win-record-win-record~module-mall-address-address-detail~3fd23a5f"), o.e("module-mall-address-address-detail~module-mall-business-apply"), o.e("module-mall-address-address-detail")]).then(function () {
            return e(o("70c6"));
          }.bind(null, o)).catch(o.oe),
          delay: __uniConfig["async"].delay,
          timeout: __uniConfig["async"].timeout
        };
        return __uniConfig["async"]["loading"] && (n.loading = {
          name: "SystemAsyncLoading",
          render: function (e) {
            return e(__uniConfig["async"]["loading"]);
          }
        }), __uniConfig["async"]["error"] && (n.error = {
          name: "SystemAsyncError",
          render: function (e) {
            return e(__uniConfig["async"]["error"]);
          }
        }), n;
      }), t.default.component("module-mall-coupon-coupon-list", function (e) {
        var n = {
          component: Promise.all([o.e("module-activity-home-home~module-ai-face-fusion-home-home~module-answer-answer-log-answer-log~module~f7b76ac1"), o.e("module-answer-answer-log-answer-detail~module-customer-fhtvn-no-rank-list~module-customer-fhtvn-rank~27a720c1"), o.e("module-mall-coupon-coupon-list")]).then(function () {
            return e(o("f5e0"));
          }.bind(null, o)).catch(o.oe),
          delay: __uniConfig["async"].delay,
          timeout: __uniConfig["async"].timeout
        };
        return __uniConfig["async"]["loading"] && (n.loading = {
          name: "SystemAsyncLoading",
          render: function (e) {
            return e(__uniConfig["async"]["loading"]);
          }
        }), __uniConfig["async"]["error"] && (n.error = {
          name: "SystemAsyncError",
          render: function (e) {
            return e(__uniConfig["async"]["error"]);
          }
        }), n;
      }), t.default.component("module-mall-coupon-coupon-detail", function (e) {
        var n = {
          component: Promise.all([o.e("module-activity-home-home~module-ai-face-fusion-home-home~module-answer-answer-log-answer-log~module~f7b76ac1"), o.e("module-lottery-win-record-detail-win-record-detail~module-lottery-writeoff-confirm~module-lottery-wr~345e859a"), o.e("module-mall-coupon-coupon-detail")]).then(function () {
            return e(o("946f"));
          }.bind(null, o)).catch(o.oe),
          delay: __uniConfig["async"].delay,
          timeout: __uniConfig["async"].timeout
        };
        return __uniConfig["async"]["loading"] && (n.loading = {
          name: "SystemAsyncLoading",
          render: function (e) {
            return e(__uniConfig["async"]["loading"]);
          }
        }), __uniConfig["async"]["error"] && (n.error = {
          name: "SystemAsyncError",
          render: function (e) {
            return e(__uniConfig["async"]["error"]);
          }
        }), n;
      }), t.default.component("module-mall-coupon-coupon-show-list", function (e) {
        var n = {
          component: Promise.all([o.e("module-activity-home-home~module-ai-face-fusion-home-home~module-answer-answer-log-answer-log~module~f7b76ac1"), o.e("module-mall-coupon-coupon-show-list")]).then(function () {
            return e(o("7874"));
          }.bind(null, o)).catch(o.oe),
          delay: __uniConfig["async"].delay,
          timeout: __uniConfig["async"].timeout
        };
        return __uniConfig["async"]["loading"] && (n.loading = {
          name: "SystemAsyncLoading",
          render: function (e) {
            return e(__uniConfig["async"]["loading"]);
          }
        }), __uniConfig["async"]["error"] && (n.error = {
          name: "SystemAsyncError",
          render: function (e) {
            return e(__uniConfig["async"]["error"]);
          }
        }), n;
      }), t.default.component("module-mall-coupon-coupon-center", function (e) {
        var n = {
          component: Promise.all([o.e("module-activity-home-home~module-ai-face-fusion-home-home~module-answer-answer-log-answer-log~module~f7b76ac1"), o.e("module-activity-home-home~module-answer-home-home~module-answer-question-question~module-article-tas~3c43a7bb"), o.e("module-activity-home-home~module-answer-home-home~module-answer-question-question~module-article-tas~edb4023f"), o.e("module-activity-home-home~module-answer-home-home~module-answer-question-question~module-article-tas~5a13cc39"), o.e("module-mall-coupon-coupon-center")]).then(function () {
            return e(o("1bd3"));
          }.bind(null, o)).catch(o.oe),
          delay: __uniConfig["async"].delay,
          timeout: __uniConfig["async"].timeout
        };
        return __uniConfig["async"]["loading"] && (n.loading = {
          name: "SystemAsyncLoading",
          render: function (e) {
            return e(__uniConfig["async"]["loading"]);
          }
        }), __uniConfig["async"]["error"] && (n.error = {
          name: "SystemAsyncError",
          render: function (e) {
            return e(__uniConfig["async"]["error"]);
          }
        }), n;
      }), t.default.component("module-mall-cart-cart", function (e) {
        var n = {
          component: Promise.all([o.e("module-activity-home-home~module-ai-face-fusion-home-home~module-answer-answer-log-answer-log~module~f7b76ac1"), o.e("module-mall-cart-cart")]).then(function () {
            return e(o("a3db"));
          }.bind(null, o)).catch(o.oe),
          delay: __uniConfig["async"].delay,
          timeout: __uniConfig["async"].timeout
        };
        return __uniConfig["async"]["loading"] && (n.loading = {
          name: "SystemAsyncLoading",
          render: function (e) {
            return e(__uniConfig["async"]["loading"]);
          }
        }), __uniConfig["async"]["error"] && (n.error = {
          name: "SystemAsyncError",
          render: function (e) {
            return e(__uniConfig["async"]["error"]);
          }
        }), n;
      }), t.default.component("module-mall-writeoff-login", function (e) {
        var n = {
          component: Promise.all([o.e("module-activity-home-home~module-ai-face-fusion-home-home~module-answer-answer-log-answer-log~module~f7b76ac1"), o.e("module-mall-writeoff-login")]).then(function () {
            return e(o("4b51"));
          }.bind(null, o)).catch(o.oe),
          delay: __uniConfig["async"].delay,
          timeout: __uniConfig["async"].timeout
        };
        return __uniConfig["async"]["loading"] && (n.loading = {
          name: "SystemAsyncLoading",
          render: function (e) {
            return e(__uniConfig["async"]["loading"]);
          }
        }), __uniConfig["async"]["error"] && (n.error = {
          name: "SystemAsyncError",
          render: function (e) {
            return e(__uniConfig["async"]["error"]);
          }
        }), n;
      }), t.default.component("module-mall-writeoff-type-select", function (e) {
        var n = {
          component: Promise.all([o.e("module-activity-home-home~module-ai-face-fusion-home-home~module-answer-answer-log-answer-log~module~f7b76ac1"), o.e("module-mall-writeoff-type-select")]).then(function () {
            return e(o("b524"));
          }.bind(null, o)).catch(o.oe),
          delay: __uniConfig["async"].delay,
          timeout: __uniConfig["async"].timeout
        };
        return __uniConfig["async"]["loading"] && (n.loading = {
          name: "SystemAsyncLoading",
          render: function (e) {
            return e(__uniConfig["async"]["loading"]);
          }
        }), __uniConfig["async"]["error"] && (n.error = {
          name: "SystemAsyncError",
          render: function (e) {
            return e(__uniConfig["async"]["error"]);
          }
        }), n;
      }), t.default.component("module-mall-writeoff-home", function (e) {
        var n = {
          component: Promise.all([o.e("module-activity-home-home~module-ai-face-fusion-home-home~module-answer-answer-log-answer-log~module~f7b76ac1"), o.e("module-mall-writeoff-home")]).then(function () {
            return e(o("eec1"));
          }.bind(null, o)).catch(o.oe),
          delay: __uniConfig["async"].delay,
          timeout: __uniConfig["async"].timeout
        };
        return __uniConfig["async"]["loading"] && (n.loading = {
          name: "SystemAsyncLoading",
          render: function (e) {
            return e(__uniConfig["async"]["loading"]);
          }
        }), __uniConfig["async"]["error"] && (n.error = {
          name: "SystemAsyncError",
          render: function (e) {
            return e(__uniConfig["async"]["error"]);
          }
        }), n;
      }), t.default.component("module-mall-writeoff-confirm", function (e) {
        var n = {
          component: Promise.all([o.e("module-activity-home-home~module-ai-face-fusion-home-home~module-answer-answer-log-answer-log~module~f7b76ac1"), o.e("module-lottery-win-record-detail-win-record-detail~module-lottery-writeoff-confirm~module-lottery-wr~345e859a"), o.e("module-mall-writeoff-confirm")]).then(function () {
            return e(o("92c1"));
          }.bind(null, o)).catch(o.oe),
          delay: __uniConfig["async"].delay,
          timeout: __uniConfig["async"].timeout
        };
        return __uniConfig["async"]["loading"] && (n.loading = {
          name: "SystemAsyncLoading",
          render: function (e) {
            return e(__uniConfig["async"]["loading"]);
          }
        }), __uniConfig["async"]["error"] && (n.error = {
          name: "SystemAsyncError",
          render: function (e) {
            return e(__uniConfig["async"]["error"]);
          }
        }), n;
      }), t.default.component("module-mall-writeoff-logdetail", function (e) {
        var n = {
          component: Promise.all([o.e("module-activity-home-home~module-ai-face-fusion-home-home~module-answer-answer-log-answer-log~module~f7b76ac1"), o.e("module-lottery-win-record-detail-win-record-detail~module-lottery-writeoff-confirm~module-lottery-wr~345e859a"), o.e("module-mall-writeoff-logdetail")]).then(function () {
            return e(o("92d8"));
          }.bind(null, o)).catch(o.oe),
          delay: __uniConfig["async"].delay,
          timeout: __uniConfig["async"].timeout
        };
        return __uniConfig["async"]["loading"] && (n.loading = {
          name: "SystemAsyncLoading",
          render: function (e) {
            return e(__uniConfig["async"]["loading"]);
          }
        }), __uniConfig["async"]["error"] && (n.error = {
          name: "SystemAsyncError",
          render: function (e) {
            return e(__uniConfig["async"]["error"]);
          }
        }), n;
      }), t.default.component("module-mall-writeoff-success", function (e) {
        var n = {
          component: Promise.all([o.e("module-activity-home-home~module-ai-face-fusion-home-home~module-answer-answer-log-answer-log~module~f7b76ac1"), o.e("module-mall-writeoff-success")]).then(function () {
            return e(o("fbcb"));
          }.bind(null, o)).catch(o.oe),
          delay: __uniConfig["async"].delay,
          timeout: __uniConfig["async"].timeout
        };
        return __uniConfig["async"]["loading"] && (n.loading = {
          name: "SystemAsyncLoading",
          render: function (e) {
            return e(__uniConfig["async"]["loading"]);
          }
        }), __uniConfig["async"]["error"] && (n.error = {
          name: "SystemAsyncError",
          render: function (e) {
            return e(__uniConfig["async"]["error"]);
          }
        }), n;
      }), t.default.component("module-mall-writeoff-loglist", function (e) {
        var n = {
          component: Promise.all([o.e("module-activity-home-home~module-ai-face-fusion-home-home~module-answer-answer-log-answer-log~module~f7b76ac1"), o.e("module-answer-answer-log-answer-detail~module-customer-fhtvn-no-rank-list~module-customer-fhtvn-rank~27a720c1"), o.e("module-mall-writeoff-loglist")]).then(function () {
            return e(o("7e04"));
          }.bind(null, o)).catch(o.oe),
          delay: __uniConfig["async"].delay,
          timeout: __uniConfig["async"].timeout
        };
        return __uniConfig["async"]["loading"] && (n.loading = {
          name: "SystemAsyncLoading",
          render: function (e) {
            return e(__uniConfig["async"]["loading"]);
          }
        }), __uniConfig["async"]["error"] && (n.error = {
          name: "SystemAsyncError",
          render: function (e) {
            return e(__uniConfig["async"]["error"]);
          }
        }), n;
      }), t.default.component("module-mall-writeoff-order-list", function (e) {
        var n = {
          component: Promise.all([o.e("module-activity-home-home~module-ai-face-fusion-home-home~module-answer-answer-log-answer-log~module~f7b76ac1"), o.e("module-answer-answer-log-answer-detail~module-customer-fhtvn-no-rank-list~module-customer-fhtvn-rank~27a720c1"), o.e("module-mall-writeoff-order-list")]).then(function () {
            return e(o("efda"));
          }.bind(null, o)).catch(o.oe),
          delay: __uniConfig["async"].delay,
          timeout: __uniConfig["async"].timeout
        };
        return __uniConfig["async"]["loading"] && (n.loading = {
          name: "SystemAsyncLoading",
          render: function (e) {
            return e(__uniConfig["async"]["loading"]);
          }
        }), __uniConfig["async"]["error"] && (n.error = {
          name: "SystemAsyncError",
          render: function (e) {
            return e(__uniConfig["async"]["error"]);
          }
        }), n;
      }), t.default.component("module-mall-writeoff-order-detail", function (e) {
        var n = {
          component: Promise.all([o.e("module-activity-home-home~module-ai-face-fusion-home-home~module-answer-answer-log-answer-log~module~f7b76ac1"), o.e("module-lottery-win-record-detail-win-record-detail~module-mall-order-detail-order-detail~module-mall~4e6aba87"), o.e("module-mall-writeoff-order-detail")]).then(function () {
            return e(o("e211"));
          }.bind(null, o)).catch(o.oe),
          delay: __uniConfig["async"].delay,
          timeout: __uniConfig["async"].timeout
        };
        return __uniConfig["async"]["loading"] && (n.loading = {
          name: "SystemAsyncLoading",
          render: function (e) {
            return e(__uniConfig["async"]["loading"]);
          }
        }), __uniConfig["async"]["error"] && (n.error = {
          name: "SystemAsyncError",
          render: function (e) {
            return e(__uniConfig["async"]["error"]);
          }
        }), n;
      }), t.default.component("module-mall-refund-apply", function (e) {
        var n = {
          component: Promise.all([o.e("module-activity-home-home~module-ai-face-fusion-home-home~module-answer-answer-log-answer-log~module~f7b76ac1"), o.e("module-info-pub-report-report~module-live-report-report~module-mall-business-apply~module-mall-comme~f4ab7752"), o.e("module-mall-refund-apply")]).then(function () {
            return e(o("366b"));
          }.bind(null, o)).catch(o.oe),
          delay: __uniConfig["async"].delay,
          timeout: __uniConfig["async"].timeout
        };
        return __uniConfig["async"]["loading"] && (n.loading = {
          name: "SystemAsyncLoading",
          render: function (e) {
            return e(__uniConfig["async"]["loading"]);
          }
        }), __uniConfig["async"]["error"] && (n.error = {
          name: "SystemAsyncError",
          render: function (e) {
            return e(__uniConfig["async"]["error"]);
          }
        }), n;
      }), t.default.component("module-mall-refund-list", function (e) {
        var n = {
          component: Promise.all([o.e("module-activity-home-home~module-ai-face-fusion-home-home~module-answer-answer-log-answer-log~module~f7b76ac1"), o.e("module-answer-answer-log-answer-detail~module-customer-fhtvn-no-rank-list~module-customer-fhtvn-rank~27a720c1"), o.e("module-mall-refund-list")]).then(function () {
            return e(o("0938c"));
          }.bind(null, o)).catch(o.oe),
          delay: __uniConfig["async"].delay,
          timeout: __uniConfig["async"].timeout
        };
        return __uniConfig["async"]["loading"] && (n.loading = {
          name: "SystemAsyncLoading",
          render: function (e) {
            return e(__uniConfig["async"]["loading"]);
          }
        }), __uniConfig["async"]["error"] && (n.error = {
          name: "SystemAsyncError",
          render: function (e) {
            return e(__uniConfig["async"]["error"]);
          }
        }), n;
      }), t.default.component("module-mall-refund-detail", function (e) {
        var n = {
          component: Promise.all([o.e("module-activity-home-home~module-ai-face-fusion-home-home~module-answer-answer-log-answer-log~module~f7b76ac1"), o.e("module-mall-refund-detail")]).then(function () {
            return e(o("147e"));
          }.bind(null, o)).catch(o.oe),
          delay: __uniConfig["async"].delay,
          timeout: __uniConfig["async"].timeout
        };
        return __uniConfig["async"]["loading"] && (n.loading = {
          name: "SystemAsyncLoading",
          render: function (e) {
            return e(__uniConfig["async"]["loading"]);
          }
        }), __uniConfig["async"]["error"] && (n.error = {
          name: "SystemAsyncError",
          render: function (e) {
            return e(__uniConfig["async"]["error"]);
          }
        }), n;
      }), t.default.component("module-mall-writeoff-coupon-home", function (e) {
        var n = {
          component: Promise.all([o.e("module-activity-home-home~module-ai-face-fusion-home-home~module-answer-answer-log-answer-log~module~f7b76ac1"), o.e("module-mall-writeoff-coupon-home")]).then(function () {
            return e(o("1c1f"));
          }.bind(null, o)).catch(o.oe),
          delay: __uniConfig["async"].delay,
          timeout: __uniConfig["async"].timeout
        };
        return __uniConfig["async"]["loading"] && (n.loading = {
          name: "SystemAsyncLoading",
          render: function (e) {
            return e(__uniConfig["async"]["loading"]);
          }
        }), __uniConfig["async"]["error"] && (n.error = {
          name: "SystemAsyncError",
          render: function (e) {
            return e(__uniConfig["async"]["error"]);
          }
        }), n;
      }), t.default.component("module-mall-writeoff-coupon-confirm", function (e) {
        var n = {
          component: Promise.all([o.e("module-activity-home-home~module-ai-face-fusion-home-home~module-answer-answer-log-answer-log~module~f7b76ac1"), o.e("module-lottery-win-record-detail-win-record-detail~module-lottery-writeoff-confirm~module-lottery-wr~345e859a"), o.e("module-mall-writeoff-coupon-confirm")]).then(function () {
            return e(o("c15b"));
          }.bind(null, o)).catch(o.oe),
          delay: __uniConfig["async"].delay,
          timeout: __uniConfig["async"].timeout
        };
        return __uniConfig["async"]["loading"] && (n.loading = {
          name: "SystemAsyncLoading",
          render: function (e) {
            return e(__uniConfig["async"]["loading"]);
          }
        }), __uniConfig["async"]["error"] && (n.error = {
          name: "SystemAsyncError",
          render: function (e) {
            return e(__uniConfig["async"]["error"]);
          }
        }), n;
      }), t.default.component("module-mall-writeoff-coupon-logdetail", function (e) {
        var n = {
          component: Promise.all([o.e("module-activity-home-home~module-ai-face-fusion-home-home~module-answer-answer-log-answer-log~module~f7b76ac1"), o.e("module-lottery-win-record-detail-win-record-detail~module-lottery-writeoff-confirm~module-lottery-wr~345e859a"), o.e("module-mall-writeoff-coupon-logdetail")]).then(function () {
            return e(o("1f24"));
          }.bind(null, o)).catch(o.oe),
          delay: __uniConfig["async"].delay,
          timeout: __uniConfig["async"].timeout
        };
        return __uniConfig["async"]["loading"] && (n.loading = {
          name: "SystemAsyncLoading",
          render: function (e) {
            return e(__uniConfig["async"]["loading"]);
          }
        }), __uniConfig["async"]["error"] && (n.error = {
          name: "SystemAsyncError",
          render: function (e) {
            return e(__uniConfig["async"]["error"]);
          }
        }), n;
      }), t.default.component("module-mall-writeoff-coupon-success", function (e) {
        var n = {
          component: Promise.all([o.e("module-activity-home-home~module-ai-face-fusion-home-home~module-answer-answer-log-answer-log~module~f7b76ac1"), o.e("module-mall-writeoff-coupon-success")]).then(function () {
            return e(o("8d60"));
          }.bind(null, o)).catch(o.oe),
          delay: __uniConfig["async"].delay,
          timeout: __uniConfig["async"].timeout
        };
        return __uniConfig["async"]["loading"] && (n.loading = {
          name: "SystemAsyncLoading",
          render: function (e) {
            return e(__uniConfig["async"]["loading"]);
          }
        }), __uniConfig["async"]["error"] && (n.error = {
          name: "SystemAsyncError",
          render: function (e) {
            return e(__uniConfig["async"]["error"]);
          }
        }), n;
      }), t.default.component("module-mall-writeoff-coupon-loglist", function (e) {
        var n = {
          component: Promise.all([o.e("module-activity-home-home~module-ai-face-fusion-home-home~module-answer-answer-log-answer-log~module~f7b76ac1"), o.e("module-answer-answer-log-answer-detail~module-customer-fhtvn-no-rank-list~module-customer-fhtvn-rank~27a720c1"), o.e("module-mall-writeoff-coupon-loglist")]).then(function () {
            return e(o("57c9"));
          }.bind(null, o)).catch(o.oe),
          delay: __uniConfig["async"].delay,
          timeout: __uniConfig["async"].timeout
        };
        return __uniConfig["async"]["loading"] && (n.loading = {
          name: "SystemAsyncLoading",
          render: function (e) {
            return e(__uniConfig["async"]["loading"]);
          }
        }), __uniConfig["async"]["error"] && (n.error = {
          name: "SystemAsyncError",
          render: function (e) {
            return e(__uniConfig["async"]["error"]);
          }
        }), n;
      }), t.default.component("module-mall-home-home-style-three", function (e) {
        var n = {
          component: Promise.all([o.e("module-activity-home-home~module-ai-face-fusion-home-home~module-answer-answer-log-answer-log~module~f7b76ac1"), o.e("module-activity-home-home~module-answer-home-home~module-answer-question-question~module-article-tas~3c43a7bb"), o.e("module-activity-home-home~module-answer-home-home~module-answer-question-question~module-article-tas~edb4023f"), o.e("module-activity-home-home~module-answer-home-home~module-answer-question-question~module-article-tas~5a13cc39"), o.e("module-mall-home-home-style-three")]).then(function () {
            return e(o("afcd"));
          }.bind(null, o)).catch(o.oe),
          delay: __uniConfig["async"].delay,
          timeout: __uniConfig["async"].timeout
        };
        return __uniConfig["async"]["loading"] && (n.loading = {
          name: "SystemAsyncLoading",
          render: function (e) {
            return e(__uniConfig["async"]["loading"]);
          }
        }), __uniConfig["async"]["error"] && (n.error = {
          name: "SystemAsyncError",
          render: function (e) {
            return e(__uniConfig["async"]["error"]);
          }
        }), n;
      }), t.default.component("module-mall-home-home-style-four", function (e) {
        var n = {
          component: Promise.all([o.e("module-activity-home-home~module-ai-face-fusion-home-home~module-answer-answer-log-answer-log~module~f7b76ac1"), o.e("module-activity-home-home~module-answer-home-home~module-answer-question-question~module-article-tas~3c43a7bb"), o.e("module-activity-home-home~module-answer-home-home~module-answer-question-question~module-article-tas~edb4023f"), o.e("module-activity-home-home~module-answer-home-home~module-answer-question-question~module-article-tas~5a13cc39"), o.e("module-mall-home-home-style-four")]).then(function () {
            return e(o("4f80"));
          }.bind(null, o)).catch(o.oe),
          delay: __uniConfig["async"].delay,
          timeout: __uniConfig["async"].timeout
        };
        return __uniConfig["async"]["loading"] && (n.loading = {
          name: "SystemAsyncLoading",
          render: function (e) {
            return e(__uniConfig["async"]["loading"]);
          }
        }), __uniConfig["async"]["error"] && (n.error = {
          name: "SystemAsyncError",
          render: function (e) {
            return e(__uniConfig["async"]["error"]);
          }
        }), n;
      }), t.default.component("module-mall-business-business-home", function (e) {
        var n = {
          component: Promise.all([o.e("module-activity-home-home~module-ai-face-fusion-home-home~module-answer-answer-log-answer-log~module~f7b76ac1"), o.e("module-activity-home-home~module-answer-home-home~module-answer-question-question~module-article-tas~3c43a7bb"), o.e("module-activity-home-home~module-answer-home-home~module-answer-question-question~module-article-tas~edb4023f"), o.e("module-activity-home-home~module-answer-home-home~module-answer-question-question~module-article-tas~5a13cc39"), o.e("module-mall-business-business-home")]).then(function () {
            return e(o("8750"));
          }.bind(null, o)).catch(o.oe),
          delay: __uniConfig["async"].delay,
          timeout: __uniConfig["async"].timeout
        };
        return __uniConfig["async"]["loading"] && (n.loading = {
          name: "SystemAsyncLoading",
          render: function (e) {
            return e(__uniConfig["async"]["loading"]);
          }
        }), __uniConfig["async"]["error"] && (n.error = {
          name: "SystemAsyncError",
          render: function (e) {
            return e(__uniConfig["async"]["error"]);
          }
        }), n;
      }), t.default.component("module-mall-business-business-home-style-three", function (e) {
        var n = {
          component: Promise.all([o.e("module-activity-home-home~module-ai-face-fusion-home-home~module-answer-answer-log-answer-log~module~f7b76ac1"), o.e("module-activity-home-home~module-answer-home-home~module-answer-question-question~module-article-tas~3c43a7bb"), o.e("module-activity-home-home~module-answer-home-home~module-answer-question-question~module-article-tas~edb4023f"), o.e("module-activity-home-home~module-answer-home-home~module-answer-question-question~module-article-tas~5a13cc39"), o.e("module-mall-business-business-home-style-three")]).then(function () {
            return e(o("861b"));
          }.bind(null, o)).catch(o.oe),
          delay: __uniConfig["async"].delay,
          timeout: __uniConfig["async"].timeout
        };
        return __uniConfig["async"]["loading"] && (n.loading = {
          name: "SystemAsyncLoading",
          render: function (e) {
            return e(__uniConfig["async"]["loading"]);
          }
        }), __uniConfig["async"]["error"] && (n.error = {
          name: "SystemAsyncError",
          render: function (e) {
            return e(__uniConfig["async"]["error"]);
          }
        }), n;
      }), t.default.component("module-mall-business-business-detail", function (e) {
        var n = {
          component: Promise.all([o.e("module-activity-home-home~module-ai-face-fusion-home-home~module-answer-answer-log-answer-log~module~f7b76ac1"), o.e("module-activity-home-home~module-answer-home-home~module-answer-question-question~module-article-tas~3c43a7bb"), o.e("module-activity-home-home~module-answer-home-home~module-answer-question-question~module-article-tas~edb4023f"), o.e("module-activity-home-home~module-answer-home-home~module-answer-question-question~module-article-tas~5a13cc39"), o.e("module-mall-business-business-detail")]).then(function () {
            return e(o("4804"));
          }.bind(null, o)).catch(o.oe),
          delay: __uniConfig["async"].delay,
          timeout: __uniConfig["async"].timeout
        };
        return __uniConfig["async"]["loading"] && (n.loading = {
          name: "SystemAsyncLoading",
          render: function (e) {
            return e(__uniConfig["async"]["loading"]);
          }
        }), __uniConfig["async"]["error"] && (n.error = {
          name: "SystemAsyncError",
          render: function (e) {
            return e(__uniConfig["async"]["error"]);
          }
        }), n;
      }), t.default.component("module-mall-user-user-center", function (e) {
        var n = {
          component: Promise.all([o.e("module-activity-home-home~module-ai-face-fusion-home-home~module-answer-answer-log-answer-log~module~f7b76ac1"), o.e("module-mall-user-user-center")]).then(function () {
            return e(o("0ad4"));
          }.bind(null, o)).catch(o.oe),
          delay: __uniConfig["async"].delay,
          timeout: __uniConfig["async"].timeout
        };
        return __uniConfig["async"]["loading"] && (n.loading = {
          name: "SystemAsyncLoading",
          render: function (e) {
            return e(__uniConfig["async"]["loading"]);
          }
        }), __uniConfig["async"]["error"] && (n.error = {
          name: "SystemAsyncError",
          render: function (e) {
            return e(__uniConfig["async"]["error"]);
          }
        }), n;
      }), t.default.component("module-mall-user-user-center-style-four", function (e) {
        var n = {
          component: Promise.all([o.e("module-activity-home-home~module-ai-face-fusion-home-home~module-answer-answer-log-answer-log~module~f7b76ac1"), o.e("module-mall-user-user-center-style-four")]).then(function () {
            return e(o("8b20"));
          }.bind(null, o)).catch(o.oe),
          delay: __uniConfig["async"].delay,
          timeout: __uniConfig["async"].timeout
        };
        return __uniConfig["async"]["loading"] && (n.loading = {
          name: "SystemAsyncLoading",
          render: function (e) {
            return e(__uniConfig["async"]["loading"]);
          }
        }), __uniConfig["async"]["error"] && (n.error = {
          name: "SystemAsyncError",
          render: function (e) {
            return e(__uniConfig["async"]["error"]);
          }
        }), n;
      }), t.default.component("module-mall-bind-auth-bind", function (e) {
        var n = {
          component: Promise.all([o.e("module-activity-home-home~module-ai-face-fusion-home-home~module-answer-answer-log-answer-log~module~f7b76ac1"), o.e("module-mall-bind-auth-bind")]).then(function () {
            return e(o("9d83"));
          }.bind(null, o)).catch(o.oe),
          delay: __uniConfig["async"].delay,
          timeout: __uniConfig["async"].timeout
        };
        return __uniConfig["async"]["loading"] && (n.loading = {
          name: "SystemAsyncLoading",
          render: function (e) {
            return e(__uniConfig["async"]["loading"]);
          }
        }), __uniConfig["async"]["error"] && (n.error = {
          name: "SystemAsyncError",
          render: function (e) {
            return e(__uniConfig["async"]["error"]);
          }
        }), n;
      }), t.default.component("module-mall-bind-login", function (e) {
        var n = {
          component: o.e("module-mall-bind-login").then(function () {
            return e(o("5ac75"));
          }.bind(null, o)).catch(o.oe),
          delay: __uniConfig["async"].delay,
          timeout: __uniConfig["async"].timeout
        };
        return __uniConfig["async"]["loading"] && (n.loading = {
          name: "SystemAsyncLoading",
          render: function (e) {
            return e(__uniConfig["async"]["loading"]);
          }
        }), __uniConfig["async"]["error"] && (n.error = {
          name: "SystemAsyncError",
          render: function (e) {
            return e(__uniConfig["async"]["error"]);
          }
        }), n;
      }), t.default.component("module-mall-zone-home", function (e) {
        var n = {
          component: Promise.all([o.e("module-activity-home-home~module-ai-face-fusion-home-home~module-answer-answer-log-answer-log~module~f7b76ac1"), o.e("module-answer-answer-log-answer-detail~module-customer-fhtvn-no-rank-list~module-customer-fhtvn-rank~27a720c1"), o.e("module-mall-zone-home")]).then(function () {
            return e(o("0458"));
          }.bind(null, o)).catch(o.oe),
          delay: __uniConfig["async"].delay,
          timeout: __uniConfig["async"].timeout
        };
        return __uniConfig["async"]["loading"] && (n.loading = {
          name: "SystemAsyncLoading",
          render: function (e) {
            return e(__uniConfig["async"]["loading"]);
          }
        }), __uniConfig["async"]["error"] && (n.error = {
          name: "SystemAsyncError",
          render: function (e) {
            return e(__uniConfig["async"]["error"]);
          }
        }), n;
      }), t.default.component("module-mall-seckill-seckill", function (e) {
        var n = {
          component: Promise.all([o.e("module-activity-home-home~module-ai-face-fusion-home-home~module-answer-answer-log-answer-log~module~f7b76ac1"), o.e("module-activity-home-home~module-answer-home-home~module-answer-question-question~module-article-tas~3c43a7bb"), o.e("module-activity-home-home~module-answer-home-home~module-answer-question-question~module-article-tas~edb4023f"), o.e("module-activity-home-home~module-answer-home-home~module-answer-question-question~module-article-tas~5a13cc39"), o.e("module-mall-seckill-seckill")]).then(function () {
            return e(o("5ab6"));
          }.bind(null, o)).catch(o.oe),
          delay: __uniConfig["async"].delay,
          timeout: __uniConfig["async"].timeout
        };
        return __uniConfig["async"]["loading"] && (n.loading = {
          name: "SystemAsyncLoading",
          render: function (e) {
            return e(__uniConfig["async"]["loading"]);
          }
        }), __uniConfig["async"]["error"] && (n.error = {
          name: "SystemAsyncError",
          render: function (e) {
            return e(__uniConfig["async"]["error"]);
          }
        }), n;
      }), t.default.component("module-mall-comment-comment", function (e) {
        var n = {
          component: Promise.all([o.e("module-activity-home-home~module-ai-face-fusion-home-home~module-answer-answer-log-answer-log~module~f7b76ac1"), o.e("module-ecnyform-activity-log-my-log-list~module-ecnyform-business-list~module-guess-log-pk-log~modul~3d0ba33b"), o.e("module-mall-comment-comment")]).then(function () {
            return e(o("2534"));
          }.bind(null, o)).catch(o.oe),
          delay: __uniConfig["async"].delay,
          timeout: __uniConfig["async"].timeout
        };
        return __uniConfig["async"]["loading"] && (n.loading = {
          name: "SystemAsyncLoading",
          render: function (e) {
            return e(__uniConfig["async"]["loading"]);
          }
        }), __uniConfig["async"]["error"] && (n.error = {
          name: "SystemAsyncError",
          render: function (e) {
            return e(__uniConfig["async"]["error"]);
          }
        }), n;
      }), t.default.component("module-mall-comment-comment-center", function (e) {
        var n = {
          component: Promise.all([o.e("module-activity-home-home~module-ai-face-fusion-home-home~module-answer-answer-log-answer-log~module~f7b76ac1"), o.e("module-answer-answer-log-answer-detail~module-customer-fhtvn-no-rank-list~module-customer-fhtvn-rank~27a720c1"), o.e("module-ecnyform-activity-log-my-log-list~module-ecnyform-business-list~module-guess-log-pk-log~modul~3d0ba33b"), o.e("module-mall-comment-comment-center")]).then(function () {
            return e(o("a7f4"));
          }.bind(null, o)).catch(o.oe),
          delay: __uniConfig["async"].delay,
          timeout: __uniConfig["async"].timeout
        };
        return __uniConfig["async"]["loading"] && (n.loading = {
          name: "SystemAsyncLoading",
          render: function (e) {
            return e(__uniConfig["async"]["loading"]);
          }
        }), __uniConfig["async"]["error"] && (n.error = {
          name: "SystemAsyncError",
          render: function (e) {
            return e(__uniConfig["async"]["error"]);
          }
        }), n;
      }), t.default.component("module-mall-comment-comment-create", function (e) {
        var n = {
          component: Promise.all([o.e("module-activity-home-home~module-ai-face-fusion-home-home~module-answer-answer-log-answer-log~module~f7b76ac1"), o.e("module-info-pub-report-report~module-live-report-report~module-mall-business-apply~module-mall-comme~f4ab7752"), o.e("module-mall-comment-comment-create")]).then(function () {
            return e(o("fe8b"));
          }.bind(null, o)).catch(o.oe),
          delay: __uniConfig["async"].delay,
          timeout: __uniConfig["async"].timeout
        };
        return __uniConfig["async"]["loading"] && (n.loading = {
          name: "SystemAsyncLoading",
          render: function (e) {
            return e(__uniConfig["async"]["loading"]);
          }
        }), __uniConfig["async"]["error"] && (n.error = {
          name: "SystemAsyncError",
          render: function (e) {
            return e(__uniConfig["async"]["error"]);
          }
        }), n;
      }), t.default.component("module-mall-notify-wechat-notify", function (e) {
        var n = {
          component: Promise.all([o.e("module-activity-home-home~module-ai-face-fusion-home-home~module-answer-answer-log-answer-log~module~f7b76ac1"), o.e("module-activity-home-home~module-answer-home-home~module-answer-question-question~module-article-tas~3c43a7bb"), o.e("module-activity-home-home~module-answer-home-home~module-answer-question-question~module-article-tas~edb4023f"), o.e("module-activity-home-home~module-answer-home-home~module-answer-question-question~module-article-tas~5a13cc39"), o.e("module-mall-notify-wechat-notify")]).then(function () {
            return e(o("0fa2"));
          }.bind(null, o)).catch(o.oe),
          delay: __uniConfig["async"].delay,
          timeout: __uniConfig["async"].timeout
        };
        return __uniConfig["async"]["loading"] && (n.loading = {
          name: "SystemAsyncLoading",
          render: function (e) {
            return e(__uniConfig["async"]["loading"]);
          }
        }), __uniConfig["async"]["error"] && (n.error = {
          name: "SystemAsyncError",
          render: function (e) {
            return e(__uniConfig["async"]["error"]);
          }
        }), n;
      }), t.default.component("module-mall-hongbao-pay", function (e) {
        var n = {
          component: Promise.all([o.e("module-activity-home-home~module-ai-face-fusion-home-home~module-answer-answer-log-answer-log~module~f7b76ac1"), o.e("module-activity-home-home~module-answer-home-home~module-answer-question-question~module-article-tas~3c43a7bb"), o.e("module-activity-home-home~module-answer-home-home~module-answer-question-question~module-article-tas~edb4023f"), o.e("module-activity-home-home~module-answer-home-home~module-answer-question-question~module-article-tas~5a13cc39"), o.e("module-mall-hongbao-pay")]).then(function () {
            return e(o("b3e1"));
          }.bind(null, o)).catch(o.oe),
          delay: __uniConfig["async"].delay,
          timeout: __uniConfig["async"].timeout
        };
        return __uniConfig["async"]["loading"] && (n.loading = {
          name: "SystemAsyncLoading",
          render: function (e) {
            return e(__uniConfig["async"]["loading"]);
          }
        }), __uniConfig["async"]["error"] && (n.error = {
          name: "SystemAsyncError",
          render: function (e) {
            return e(__uniConfig["async"]["error"]);
          }
        }), n;
      }), t.default.component("module-mall-hongbao-bill", function (e) {
        var n = {
          component: Promise.all([o.e("module-activity-home-home~module-ai-face-fusion-home-home~module-answer-answer-log-answer-log~module~f7b76ac1"), o.e("module-activity-home-home~module-answer-home-home~module-answer-question-question~module-article-tas~3c43a7bb"), o.e("module-activity-home-home~module-answer-home-home~module-answer-question-question~module-article-tas~edb4023f"), o.e("module-activity-home-home~module-answer-home-home~module-answer-question-question~module-article-tas~5a13cc39"), o.e("module-mall-hongbao-bill")]).then(function () {
            return e(o("0398"));
          }.bind(null, o)).catch(o.oe),
          delay: __uniConfig["async"].delay,
          timeout: __uniConfig["async"].timeout
        };
        return __uniConfig["async"]["loading"] && (n.loading = {
          name: "SystemAsyncLoading",
          render: function (e) {
            return e(__uniConfig["async"]["loading"]);
          }
        }), __uniConfig["async"]["error"] && (n.error = {
          name: "SystemAsyncError",
          render: function (e) {
            return e(__uniConfig["async"]["error"]);
          }
        }), n;
      }), t.default.component("module-mall-hongbao-pay-detail", function (e) {
        var n = {
          component: Promise.all([o.e("module-activity-home-home~module-ai-face-fusion-home-home~module-answer-answer-log-answer-log~module~f7b76ac1"), o.e("module-lottery-win-record-detail-win-record-detail~module-lottery-writeoff-confirm~module-lottery-wr~345e859a"), o.e("module-mall-hongbao-pay-detail")]).then(function () {
            return e(o("3056"));
          }.bind(null, o)).catch(o.oe),
          delay: __uniConfig["async"].delay,
          timeout: __uniConfig["async"].timeout
        };
        return __uniConfig["async"]["loading"] && (n.loading = {
          name: "SystemAsyncLoading",
          render: function (e) {
            return e(__uniConfig["async"]["loading"]);
          }
        }), __uniConfig["async"]["error"] && (n.error = {
          name: "SystemAsyncError",
          render: function (e) {
            return e(__uniConfig["async"]["error"]);
          }
        }), n;
      }), t.default.component("module-mall-writeoff-pay-detail", function (e) {
        var n = {
          component: Promise.all([o.e("module-activity-home-home~module-ai-face-fusion-home-home~module-answer-answer-log-answer-log~module~f7b76ac1"), o.e("module-mall-writeoff-pay-detail")]).then(function () {
            return e(o("afe1"));
          }.bind(null, o)).catch(o.oe),
          delay: __uniConfig["async"].delay,
          timeout: __uniConfig["async"].timeout
        };
        return __uniConfig["async"]["loading"] && (n.loading = {
          name: "SystemAsyncLoading",
          render: function (e) {
            return e(__uniConfig["async"]["loading"]);
          }
        }), __uniConfig["async"]["error"] && (n.error = {
          name: "SystemAsyncError",
          render: function (e) {
            return e(__uniConfig["async"]["error"]);
          }
        }), n;
      }), t.default.component("module-mall-writeoff-receive-money", function (e) {
        var n = {
          component: Promise.all([o.e("module-activity-home-home~module-ai-face-fusion-home-home~module-answer-answer-log-answer-log~module~f7b76ac1"), o.e("module-lottery-win-record-detail-win-record-detail~module-lottery-writeoff-confirm~module-lottery-wr~345e859a"), o.e("module-mall-writeoff-receive-money")]).then(function () {
            return e(o("34f8"));
          }.bind(null, o)).catch(o.oe),
          delay: __uniConfig["async"].delay,
          timeout: __uniConfig["async"].timeout
        };
        return __uniConfig["async"]["loading"] && (n.loading = {
          name: "SystemAsyncLoading",
          render: function (e) {
            return e(__uniConfig["async"]["loading"]);
          }
        }), __uniConfig["async"]["error"] && (n.error = {
          name: "SystemAsyncError",
          render: function (e) {
            return e(__uniConfig["async"]["error"]);
          }
        }), n;
      }), t.default.component("module-mall-writeoff-bill", function (e) {
        var n = {
          component: Promise.all([o.e("module-activity-home-home~module-ai-face-fusion-home-home~module-answer-answer-log-answer-log~module~f7b76ac1"), o.e("module-activity-home-home~module-answer-home-home~module-answer-question-question~module-article-tas~3c43a7bb"), o.e("module-activity-home-home~module-answer-home-home~module-answer-question-question~module-article-tas~edb4023f"), o.e("module-activity-home-home~module-answer-home-home~module-answer-question-question~module-article-tas~5a13cc39"), o.e("module-mall-writeoff-bill")]).then(function () {
            return e(o("6dd8"));
          }.bind(null, o)).catch(o.oe),
          delay: __uniConfig["async"].delay,
          timeout: __uniConfig["async"].timeout
        };
        return __uniConfig["async"]["loading"] && (n.loading = {
          name: "SystemAsyncLoading",
          render: function (e) {
            return e(__uniConfig["async"]["loading"]);
          }
        }), __uniConfig["async"]["error"] && (n.error = {
          name: "SystemAsyncError",
          render: function (e) {
            return e(__uniConfig["async"]["error"]);
          }
        }), n;
      }), t.default.component("module-mall-writeoff-manage-goods", function (e) {
        var n = {
          component: Promise.all([o.e("module-activity-home-home~module-ai-face-fusion-home-home~module-answer-answer-log-answer-log~module~f7b76ac1"), o.e("module-answer-answer-log-answer-detail~module-customer-fhtvn-no-rank-list~module-customer-fhtvn-rank~27a720c1"), o.e("module-ecnyform-activity-log-my-log-list~module-ecnyform-business-list~module-guess-log-pk-log~modul~3d0ba33b"), o.e("module-mall-writeoff-manage-goods")]).then(function () {
            return e(o("8235"));
          }.bind(null, o)).catch(o.oe),
          delay: __uniConfig["async"].delay,
          timeout: __uniConfig["async"].timeout
        };
        return __uniConfig["async"]["loading"] && (n.loading = {
          name: "SystemAsyncLoading",
          render: function (e) {
            return e(__uniConfig["async"]["loading"]);
          }
        }), __uniConfig["async"]["error"] && (n.error = {
          name: "SystemAsyncError",
          render: function (e) {
            return e(__uniConfig["async"]["error"]);
          }
        }), n;
      }), t.default.component("module-mall-writeoff-manage-order", function (e) {
        var n = {
          component: Promise.all([o.e("module-activity-home-home~module-ai-face-fusion-home-home~module-answer-answer-log-answer-log~module~f7b76ac1"), o.e("module-answer-answer-log-answer-detail~module-customer-fhtvn-no-rank-list~module-customer-fhtvn-rank~27a720c1"), o.e("module-ecnyform-activity-log-my-log-list~module-ecnyform-business-list~module-guess-log-pk-log~modul~3d0ba33b"), o.e("module-mall-writeoff-manage-order")]).then(function () {
            return e(o("119b"));
          }.bind(null, o)).catch(o.oe),
          delay: __uniConfig["async"].delay,
          timeout: __uniConfig["async"].timeout
        };
        return __uniConfig["async"]["loading"] && (n.loading = {
          name: "SystemAsyncLoading",
          render: function (e) {
            return e(__uniConfig["async"]["loading"]);
          }
        }), __uniConfig["async"]["error"] && (n.error = {
          name: "SystemAsyncError",
          render: function (e) {
            return e(__uniConfig["async"]["error"]);
          }
        }), n;
      }), t.default.component("module-mall-writeoff-manage-refund", function (e) {
        var n = {
          component: Promise.all([o.e("module-activity-home-home~module-ai-face-fusion-home-home~module-answer-answer-log-answer-log~module~f7b76ac1"), o.e("module-answer-answer-log-answer-detail~module-customer-fhtvn-no-rank-list~module-customer-fhtvn-rank~27a720c1"), o.e("module-clockin-log-log~module-cms-news-detail~module-cms-video-detail~module-customer-fjdaily-clocki~540cf0d6"), o.e("module-ecnyform-activity-log-my-log-list~module-ecnyform-business-list~module-guess-log-pk-log~modul~3d0ba33b"), o.e("module-mall-writeoff-manage-refund")]).then(function () {
            return e(o("58ce"));
          }.bind(null, o)).catch(o.oe),
          delay: __uniConfig["async"].delay,
          timeout: __uniConfig["async"].timeout
        };
        return __uniConfig["async"]["loading"] && (n.loading = {
          name: "SystemAsyncLoading",
          render: function (e) {
            return e(__uniConfig["async"]["loading"]);
          }
        }), __uniConfig["async"]["error"] && (n.error = {
          name: "SystemAsyncError",
          render: function (e) {
            return e(__uniConfig["async"]["error"]);
          }
        }), n;
      }), t.default.component("module-mall-writeoff-manage-customer", function (e) {
        var n = {
          component: Promise.all([o.e("module-activity-home-home~module-ai-face-fusion-home-home~module-answer-answer-log-answer-log~module~f7b76ac1"), o.e("module-ecnyform-activity-log-my-log-list~module-ecnyform-business-list~module-guess-log-pk-log~modul~3d0ba33b"), o.e("module-mall-writeoff-manage-customer")]).then(function () {
            return e(o("eb21"));
          }.bind(null, o)).catch(o.oe),
          delay: __uniConfig["async"].delay,
          timeout: __uniConfig["async"].timeout
        };
        return __uniConfig["async"]["loading"] && (n.loading = {
          name: "SystemAsyncLoading",
          render: function (e) {
            return e(__uniConfig["async"]["loading"]);
          }
        }), __uniConfig["async"]["error"] && (n.error = {
          name: "SystemAsyncError",
          render: function (e) {
            return e(__uniConfig["async"]["error"]);
          }
        }), n;
      }), t.default.component("module-mall-writeoff-manage-home", function (e) {
        var n = {
          component: Promise.all([o.e("module-activity-home-home~module-ai-face-fusion-home-home~module-answer-answer-log-answer-log~module~f7b76ac1"), o.e("module-mall-writeoff-manage-home")]).then(function () {
            return e(o("99f4"));
          }.bind(null, o)).catch(o.oe),
          delay: __uniConfig["async"].delay,
          timeout: __uniConfig["async"].timeout
        };
        return __uniConfig["async"]["loading"] && (n.loading = {
          name: "SystemAsyncLoading",
          render: function (e) {
            return e(__uniConfig["async"]["loading"]);
          }
        }), __uniConfig["async"]["error"] && (n.error = {
          name: "SystemAsyncError",
          render: function (e) {
            return e(__uniConfig["async"]["error"]);
          }
        }), n;
      }), t.default.component("module-mall-offline-pay", function (e) {
        var n = {
          component: Promise.all([o.e("module-activity-home-home~module-ai-face-fusion-home-home~module-answer-answer-log-answer-log~module~f7b76ac1"), o.e("module-activity-home-home~module-answer-home-home~module-answer-question-question~module-article-tas~3c43a7bb"), o.e("module-activity-home-home~module-answer-home-home~module-answer-question-question~module-article-tas~edb4023f"), o.e("module-activity-home-home~module-answer-home-home~module-answer-question-question~module-article-tas~5a13cc39"), o.e("module-mall-offline-pay")]).then(function () {
            return e(o("caaa"));
          }.bind(null, o)).catch(o.oe),
          delay: __uniConfig["async"].delay,
          timeout: __uniConfig["async"].timeout
        };
        return __uniConfig["async"]["loading"] && (n.loading = {
          name: "SystemAsyncLoading",
          render: function (e) {
            return e(__uniConfig["async"]["loading"]);
          }
        }), __uniConfig["async"]["error"] && (n.error = {
          name: "SystemAsyncError",
          render: function (e) {
            return e(__uniConfig["async"]["error"]);
          }
        }), n;
      }), t.default.component("module-mall-offline-pay-log-list", function (e) {
        var n = {
          component: Promise.all([o.e("module-activity-home-home~module-ai-face-fusion-home-home~module-answer-answer-log-answer-log~module~f7b76ac1"), o.e("module-mall-offline-pay-log-list")]).then(function () {
            return e(o("0854"));
          }.bind(null, o)).catch(o.oe),
          delay: __uniConfig["async"].delay,
          timeout: __uniConfig["async"].timeout
        };
        return __uniConfig["async"]["loading"] && (n.loading = {
          name: "SystemAsyncLoading",
          render: function (e) {
            return e(__uniConfig["async"]["loading"]);
          }
        }), __uniConfig["async"]["error"] && (n.error = {
          name: "SystemAsyncError",
          render: function (e) {
            return e(__uniConfig["async"]["error"]);
          }
        }), n;
      }), t.default.component("module-mall-offline-pay-log-detail", function (e) {
        var n = {
          component: Promise.all([o.e("module-activity-home-home~module-ai-face-fusion-home-home~module-answer-answer-log-answer-log~module~f7b76ac1"), o.e("module-mall-offline-pay-log-detail")]).then(function () {
            return e(o("5660"));
          }.bind(null, o)).catch(o.oe),
          delay: __uniConfig["async"].delay,
          timeout: __uniConfig["async"].timeout
        };
        return __uniConfig["async"]["loading"] && (n.loading = {
          name: "SystemAsyncLoading",
          render: function (e) {
            return e(__uniConfig["async"]["loading"]);
          }
        }), __uniConfig["async"]["error"] && (n.error = {
          name: "SystemAsyncError",
          render: function (e) {
            return e(__uniConfig["async"]["error"]);
          }
        }), n;
      }), t.default.component("module-member-level-info-level-info", function (e) {
        var n = {
          component: Promise.all([o.e("module-activity-home-home~module-ai-face-fusion-home-home~module-answer-answer-log-answer-log~module~f7b76ac1"), o.e("module-member-level-info-level-info")]).then(function () {
            return e(o("1868"));
          }.bind(null, o)).catch(o.oe),
          delay: __uniConfig["async"].delay,
          timeout: __uniConfig["async"].timeout
        };
        return __uniConfig["async"]["loading"] && (n.loading = {
          name: "SystemAsyncLoading",
          render: function (e) {
            return e(__uniConfig["async"]["loading"]);
          }
        }), __uniConfig["async"]["error"] && (n.error = {
          name: "SystemAsyncError",
          render: function (e) {
            return e(__uniConfig["async"]["error"]);
          }
        }), n;
      }), t.default.component("module-member-integral-detail-integral-detail", function (e) {
        var n = {
          component: Promise.all([o.e("module-activity-home-home~module-ai-face-fusion-home-home~module-answer-answer-log-answer-log~module~f7b76ac1"), o.e("module-answer-answer-log-answer-detail~module-customer-fhtvn-no-rank-list~module-customer-fhtvn-rank~27a720c1"), o.e("module-member-integral-detail-integral-detail")]).then(function () {
            return e(o("5421"));
          }.bind(null, o)).catch(o.oe),
          delay: __uniConfig["async"].delay,
          timeout: __uniConfig["async"].timeout
        };
        return __uniConfig["async"]["loading"] && (n.loading = {
          name: "SystemAsyncLoading",
          render: function (e) {
            return e(__uniConfig["async"]["loading"]);
          }
        }), __uniConfig["async"]["error"] && (n.error = {
          name: "SystemAsyncError",
          render: function (e) {
            return e(__uniConfig["async"]["error"]);
          }
        }), n;
      }), t.default.component("module-member-integral-rank-integral-rank", function (e) {
        var n = {
          component: Promise.all([o.e("module-activity-home-home~module-ai-face-fusion-home-home~module-answer-answer-log-answer-log~module~f7b76ac1"), o.e("module-answer-answer-log-answer-detail~module-customer-fhtvn-no-rank-list~module-customer-fhtvn-rank~27a720c1"), o.e("module-member-integral-rank-integral-rank")]).then(function () {
            return e(o("4ede"));
          }.bind(null, o)).catch(o.oe),
          delay: __uniConfig["async"].delay,
          timeout: __uniConfig["async"].timeout
        };
        return __uniConfig["async"]["loading"] && (n.loading = {
          name: "SystemAsyncLoading",
          render: function (e) {
            return e(__uniConfig["async"]["loading"]);
          }
        }), __uniConfig["async"]["error"] && (n.error = {
          name: "SystemAsyncError",
          render: function (e) {
            return e(__uniConfig["async"]["error"]);
          }
        }), n;
      }), t.default.component("module-member-medal-medal", function (e) {
        var n = {
          component: Promise.all([o.e("module-activity-home-home~module-ai-face-fusion-home-home~module-answer-answer-log-answer-log~module~f7b76ac1"), o.e("module-member-medal-medal")]).then(function () {
            return e(o("52dc"));
          }.bind(null, o)).catch(o.oe),
          delay: __uniConfig["async"].delay,
          timeout: __uniConfig["async"].timeout
        };
        return __uniConfig["async"]["loading"] && (n.loading = {
          name: "SystemAsyncLoading",
          render: function (e) {
            return e(__uniConfig["async"]["loading"]);
          }
        }), __uniConfig["async"]["error"] && (n.error = {
          name: "SystemAsyncError",
          render: function (e) {
            return e(__uniConfig["async"]["error"]);
          }
        }), n;
      }), t.default.component("module-member-medal-medal-detail", function (e) {
        var n = {
          component: Promise.all([o.e("module-activity-home-home~module-ai-face-fusion-home-home~module-answer-answer-log-answer-log~module~f7b76ac1"), o.e("module-member-medal-medal-detail")]).then(function () {
            return e(o("51a9"));
          }.bind(null, o)).catch(o.oe),
          delay: __uniConfig["async"].delay,
          timeout: __uniConfig["async"].timeout
        };
        return __uniConfig["async"]["loading"] && (n.loading = {
          name: "SystemAsyncLoading",
          render: function (e) {
            return e(__uniConfig["async"]["loading"]);
          }
        }), __uniConfig["async"]["error"] && (n.error = {
          name: "SystemAsyncError",
          render: function (e) {
            return e(__uniConfig["async"]["error"]);
          }
        }), n;
      }), t.default.component("module-member-message-message-sort", function (e) {
        var n = {
          component: Promise.all([o.e("module-activity-home-home~module-ai-face-fusion-home-home~module-answer-answer-log-answer-log~module~f7b76ac1"), o.e("module-member-message-message-sort")]).then(function () {
            return e(o("eb6f"));
          }.bind(null, o)).catch(o.oe),
          delay: __uniConfig["async"].delay,
          timeout: __uniConfig["async"].timeout
        };
        return __uniConfig["async"]["loading"] && (n.loading = {
          name: "SystemAsyncLoading",
          render: function (e) {
            return e(__uniConfig["async"]["loading"]);
          }
        }), __uniConfig["async"]["error"] && (n.error = {
          name: "SystemAsyncError",
          render: function (e) {
            return e(__uniConfig["async"]["error"]);
          }
        }), n;
      }), t.default.component("module-member-message-message", function (e) {
        var n = {
          component: Promise.all([o.e("module-activity-home-home~module-ai-face-fusion-home-home~module-answer-answer-log-answer-log~module~f7b76ac1"), o.e("module-answer-answer-log-answer-detail~module-customer-fhtvn-no-rank-list~module-customer-fhtvn-rank~27a720c1"), o.e("module-member-message-message")]).then(function () {
            return e(o("e2fb"));
          }.bind(null, o)).catch(o.oe),
          delay: __uniConfig["async"].delay,
          timeout: __uniConfig["async"].timeout
        };
        return __uniConfig["async"]["loading"] && (n.loading = {
          name: "SystemAsyncLoading",
          render: function (e) {
            return e(__uniConfig["async"]["loading"]);
          }
        }), __uniConfig["async"]["error"] && (n.error = {
          name: "SystemAsyncError",
          render: function (e) {
            return e(__uniConfig["async"]["error"]);
          }
        }), n;
      }), t.default.component("module-member-welfare-welfare", function (e) {
        var n = {
          component: Promise.all([o.e("module-activity-home-home~module-ai-face-fusion-home-home~module-answer-answer-log-answer-log~module~f7b76ac1"), o.e("module-member-welfare-welfare")]).then(function () {
            return e(o("7bb0"));
          }.bind(null, o)).catch(o.oe),
          delay: __uniConfig["async"].delay,
          timeout: __uniConfig["async"].timeout
        };
        return __uniConfig["async"]["loading"] && (n.loading = {
          name: "SystemAsyncLoading",
          render: function (e) {
            return e(__uniConfig["async"]["loading"]);
          }
        }), __uniConfig["async"]["error"] && (n.error = {
          name: "SystemAsyncError",
          render: function (e) {
            return e(__uniConfig["async"]["error"]);
          }
        }), n;
      }), t.default.component("module-member-currency-rule-currency-rule", function (e) {
        var n = {
          component: Promise.all([o.e("module-activity-home-home~module-ai-face-fusion-home-home~module-answer-answer-log-answer-log~module~f7b76ac1"), o.e("module-member-currency-rule-currency-rule")]).then(function () {
            return e(o("3cc6"));
          }.bind(null, o)).catch(o.oe),
          delay: __uniConfig["async"].delay,
          timeout: __uniConfig["async"].timeout
        };
        return __uniConfig["async"]["loading"] && (n.loading = {
          name: "SystemAsyncLoading",
          render: function (e) {
            return e(__uniConfig["async"]["loading"]);
          }
        }), __uniConfig["async"]["error"] && (n.error = {
          name: "SystemAsyncError",
          render: function (e) {
            return e(__uniConfig["async"]["error"]);
          }
        }), n;
      }), t.default.component("module-member-signin-signin-rule", function (e) {
        var n = {
          component: Promise.all([o.e("module-activity-home-home~module-ai-face-fusion-home-home~module-answer-answer-log-answer-log~module~f7b76ac1"), o.e("module-member-signin-signin-rule")]).then(function () {
            return e(o("c3f1"));
          }.bind(null, o)).catch(o.oe),
          delay: __uniConfig["async"].delay,
          timeout: __uniConfig["async"].timeout
        };
        return __uniConfig["async"]["loading"] && (n.loading = {
          name: "SystemAsyncLoading",
          render: function (e) {
            return e(__uniConfig["async"]["loading"]);
          }
        }), __uniConfig["async"]["error"] && (n.error = {
          name: "SystemAsyncError",
          render: function (e) {
            return e(__uniConfig["async"]["error"]);
          }
        }), n;
      }), t.default.component("module-member-cashout-cashout", function (e) {
        var n = {
          component: Promise.all([o.e("module-activity-home-home~module-ai-face-fusion-home-home~module-answer-answer-log-answer-log~module~f7b76ac1"), o.e("module-activity-home-home~module-answer-home-home~module-answer-question-question~module-article-tas~3c43a7bb"), o.e("module-member-cashout-cashout")]).then(function () {
            return e(o("0059c"));
          }.bind(null, o)).catch(o.oe),
          delay: __uniConfig["async"].delay,
          timeout: __uniConfig["async"].timeout
        };
        return __uniConfig["async"]["loading"] && (n.loading = {
          name: "SystemAsyncLoading",
          render: function (e) {
            return e(__uniConfig["async"]["loading"]);
          }
        }), __uniConfig["async"]["error"] && (n.error = {
          name: "SystemAsyncError",
          render: function (e) {
            return e(__uniConfig["async"]["error"]);
          }
        }), n;
      }), t.default.component("module-member-cashout-cashout-log", function (e) {
        var n = {
          component: Promise.all([o.e("module-activity-home-home~module-ai-face-fusion-home-home~module-answer-answer-log-answer-log~module~f7b76ac1"), o.e("module-member-cashout-cashout-log")]).then(function () {
            return e(o("ac69"));
          }.bind(null, o)).catch(o.oe),
          delay: __uniConfig["async"].delay,
          timeout: __uniConfig["async"].timeout
        };
        return __uniConfig["async"]["loading"] && (n.loading = {
          name: "SystemAsyncLoading",
          render: function (e) {
            return e(__uniConfig["async"]["loading"]);
          }
        }), __uniConfig["async"]["error"] && (n.error = {
          name: "SystemAsyncError",
          render: function (e) {
            return e(__uniConfig["async"]["error"]);
          }
        }), n;
      }), t.default.component("module-member-bind-bind-wechat", function (e) {
        var n = {
          component: o.e("module-member-bind-bind-wechat").then(function () {
            return e(o("fbf0"));
          }.bind(null, o)).catch(o.oe),
          delay: __uniConfig["async"].delay,
          timeout: __uniConfig["async"].timeout
        };
        return __uniConfig["async"]["loading"] && (n.loading = {
          name: "SystemAsyncLoading",
          render: function (e) {
            return e(__uniConfig["async"]["loading"]);
          }
        }), __uniConfig["async"]["error"] && (n.error = {
          name: "SystemAsyncError",
          render: function (e) {
            return e(__uniConfig["async"]["error"]);
          }
        }), n;
      }), t.default.component("module-answer-home-home", function (e) {
        var n = {
          component: Promise.all([o.e("module-activity-home-home~module-ai-face-fusion-home-home~module-answer-answer-log-answer-log~module~f7b76ac1"), o.e("module-activity-home-home~module-answer-home-home~module-answer-question-question~module-article-tas~3c43a7bb"), o.e("module-activity-home-home~module-answer-home-home~module-answer-question-question~module-article-tas~edb4023f"), o.e("module-activity-home-home~module-answer-home-home~module-answer-question-question~module-article-tas~5a13cc39"), o.e("module-answer-home-home")]).then(function () {
            return e(o("d8d3"));
          }.bind(null, o)).catch(o.oe),
          delay: __uniConfig["async"].delay,
          timeout: __uniConfig["async"].timeout
        };
        return __uniConfig["async"]["loading"] && (n.loading = {
          name: "SystemAsyncLoading",
          render: function (e) {
            return e(__uniConfig["async"]["loading"]);
          }
        }), __uniConfig["async"]["error"] && (n.error = {
          name: "SystemAsyncError",
          render: function (e) {
            return e(__uniConfig["async"]["error"]);
          }
        }), n;
      }), t.default.component("module-answer-question-question", function (e) {
        var n = {
          component: Promise.all([o.e("module-activity-home-home~module-ai-face-fusion-home-home~module-answer-answer-log-answer-log~module~f7b76ac1"), o.e("module-activity-home-home~module-answer-home-home~module-answer-question-question~module-article-tas~3c43a7bb"), o.e("module-activity-home-home~module-answer-home-home~module-answer-question-question~module-article-tas~edb4023f"), o.e("module-activity-home-home~module-answer-home-home~module-answer-question-question~module-article-tas~5a13cc39"), o.e("module-answer-question-question")]).then(function () {
            return e(o("4011"));
          }.bind(null, o)).catch(o.oe),
          delay: __uniConfig["async"].delay,
          timeout: __uniConfig["async"].timeout
        };
        return __uniConfig["async"]["loading"] && (n.loading = {
          name: "SystemAsyncLoading",
          render: function (e) {
            return e(__uniConfig["async"]["loading"]);
          }
        }), __uniConfig["async"]["error"] && (n.error = {
          name: "SystemAsyncError",
          render: function (e) {
            return e(__uniConfig["async"]["error"]);
          }
        }), n;
      }), t.default.component("module-answer-answer-log-answer-log", function (e) {
        var n = {
          component: Promise.all([o.e("module-activity-home-home~module-ai-face-fusion-home-home~module-answer-answer-log-answer-log~module~f7b76ac1"), o.e("module-answer-answer-log-answer-log")]).then(function () {
            return e(o("70fa"));
          }.bind(null, o)).catch(o.oe),
          delay: __uniConfig["async"].delay,
          timeout: __uniConfig["async"].timeout
        };
        return __uniConfig["async"]["loading"] && (n.loading = {
          name: "SystemAsyncLoading",
          render: function (e) {
            return e(__uniConfig["async"]["loading"]);
          }
        }), __uniConfig["async"]["error"] && (n.error = {
          name: "SystemAsyncError",
          render: function (e) {
            return e(__uniConfig["async"]["error"]);
          }
        }), n;
      }), t.default.component("module-answer-answer-log-answer-detail", function (e) {
        var n = {
          component: Promise.all([o.e("module-answer-answer-log-answer-detail~module-customer-fhtvn-no-rank-list~module-customer-fhtvn-rank~27a720c1"), o.e("module-answer-answer-log-answer-detail")]).then(function () {
            return e(o("7e74"));
          }.bind(null, o)).catch(o.oe),
          delay: __uniConfig["async"].delay,
          timeout: __uniConfig["async"].timeout
        };
        return __uniConfig["async"]["loading"] && (n.loading = {
          name: "SystemAsyncLoading",
          render: function (e) {
            return e(__uniConfig["async"]["loading"]);
          }
        }), __uniConfig["async"]["error"] && (n.error = {
          name: "SystemAsyncError",
          render: function (e) {
            return e(__uniConfig["async"]["error"]);
          }
        }), n;
      }), t.default.component("module-live-home-home", function (e) {
        var n = {
          component: Promise.all([o.e("module-activity-home-home~module-ai-face-fusion-home-home~module-answer-answer-log-answer-log~module~f7b76ac1"), o.e("module-answer-answer-log-answer-detail~module-customer-fhtvn-no-rank-list~module-customer-fhtvn-rank~27a720c1"), o.e("module-live-home-home")]).then(function () {
            return e(o("2ccf"));
          }.bind(null, o)).catch(o.oe),
          delay: __uniConfig["async"].delay,
          timeout: __uniConfig["async"].timeout
        };
        return __uniConfig["async"]["loading"] && (n.loading = {
          name: "SystemAsyncLoading",
          render: function (e) {
            return e(__uniConfig["async"]["loading"]);
          }
        }), __uniConfig["async"]["error"] && (n.error = {
          name: "SystemAsyncError",
          render: function (e) {
            return e(__uniConfig["async"]["error"]);
          }
        }), n;
      }), t.default.component("module-live-detail-detail", function (e) {
        var n = {
          component: Promise.all([o.e("module-activity-home-home~module-ai-face-fusion-home-home~module-answer-answer-log-answer-log~module~f7b76ac1"), o.e("module-activity-home-home~module-answer-home-home~module-answer-question-question~module-article-tas~3c43a7bb"), o.e("module-activity-home-home~module-answer-home-home~module-answer-question-question~module-article-tas~edb4023f"), o.e("module-activity-home-home~module-answer-home-home~module-answer-question-question~module-article-tas~5a13cc39"), o.e("module-live-detail-detail")]).then(function () {
            return e(o("0295"));
          }.bind(null, o)).catch(o.oe),
          delay: __uniConfig["async"].delay,
          timeout: __uniConfig["async"].timeout
        };
        return __uniConfig["async"]["loading"] && (n.loading = {
          name: "SystemAsyncLoading",
          render: function (e) {
            return e(__uniConfig["async"]["loading"]);
          }
        }), __uniConfig["async"]["error"] && (n.error = {
          name: "SystemAsyncError",
          render: function (e) {
            return e(__uniConfig["async"]["error"]);
          }
        }), n;
      }), t.default.component("module-live-report-report", function (e) {
        var n = {
          component: Promise.all([o.e("module-activity-home-home~module-ai-face-fusion-home-home~module-answer-answer-log-answer-log~module~f7b76ac1"), o.e("module-info-pub-report-report~module-live-report-report~module-mall-business-apply~module-mall-comme~f4ab7752"), o.e("module-live-report-report")]).then(function () {
            return e(o("171f"));
          }.bind(null, o)).catch(o.oe),
          delay: __uniConfig["async"].delay,
          timeout: __uniConfig["async"].timeout
        };
        return __uniConfig["async"]["loading"] && (n.loading = {
          name: "SystemAsyncLoading",
          render: function (e) {
            return e(__uniConfig["async"]["loading"]);
          }
        }), __uniConfig["async"]["error"] && (n.error = {
          name: "SystemAsyncError",
          render: function (e) {
            return e(__uniConfig["async"]["error"]);
          }
        }), n;
      }), t.default.component("module-activity-home-home", function (e) {
        var n = {
          component: Promise.all([o.e("module-activity-home-home~module-ai-face-fusion-home-home~module-answer-answer-log-answer-log~module~f7b76ac1"), o.e("module-activity-home-home~module-answer-home-home~module-answer-question-question~module-article-tas~3c43a7bb"), o.e("module-activity-home-home~module-answer-home-home~module-answer-question-question~module-article-tas~edb4023f"), o.e("module-activity-home-home~module-answer-home-home~module-answer-question-question~module-article-tas~5a13cc39"), o.e("module-activity-home-home")]).then(function () {
            return e(o("2d11"));
          }.bind(null, o)).catch(o.oe),
          delay: __uniConfig["async"].delay,
          timeout: __uniConfig["async"].timeout
        };
        return __uniConfig["async"]["loading"] && (n.loading = {
          name: "SystemAsyncLoading",
          render: function (e) {
            return e(__uniConfig["async"]["loading"]);
          }
        }), __uniConfig["async"]["error"] && (n.error = {
          name: "SystemAsyncError",
          render: function (e) {
            return e(__uniConfig["async"]["error"]);
          }
        }), n;
      }), t.default.component("module-vote-home-home", function (e) {
        var n = {
          component: Promise.all([o.e("module-activity-home-home~module-ai-face-fusion-home-home~module-answer-answer-log-answer-log~module~f7b76ac1"), o.e("module-activity-home-home~module-answer-home-home~module-answer-question-question~module-article-tas~3c43a7bb"), o.e("module-activity-home-home~module-answer-home-home~module-answer-question-question~module-article-tas~edb4023f"), o.e("module-activity-home-home~module-answer-home-home~module-answer-question-question~module-article-tas~5a13cc39"), o.e("module-vote-home-home")]).then(function () {
            return e(o("281b"));
          }.bind(null, o)).catch(o.oe),
          delay: __uniConfig["async"].delay,
          timeout: __uniConfig["async"].timeout
        };
        return __uniConfig["async"]["loading"] && (n.loading = {
          name: "SystemAsyncLoading",
          render: function (e) {
            return e(__uniConfig["async"]["loading"]);
          }
        }), __uniConfig["async"]["error"] && (n.error = {
          name: "SystemAsyncError",
          render: function (e) {
            return e(__uniConfig["async"]["error"]);
          }
        }), n;
      }), t.default.component("module-vote-vote-detail-vote-detail", function (e) {
        var n = {
          component: Promise.all([o.e("module-activity-home-home~module-ai-face-fusion-home-home~module-answer-answer-log-answer-log~module~f7b76ac1"), o.e("module-activity-home-home~module-answer-home-home~module-answer-question-question~module-article-tas~3c43a7bb"), o.e("module-activity-home-home~module-answer-home-home~module-answer-question-question~module-article-tas~edb4023f"), o.e("module-activity-home-home~module-answer-home-home~module-answer-question-question~module-article-tas~5a13cc39"), o.e("module-vote-vote-detail-vote-detail")]).then(function () {
            return e(o("e21e"));
          }.bind(null, o)).catch(o.oe),
          delay: __uniConfig["async"].delay,
          timeout: __uniConfig["async"].timeout
        };
        return __uniConfig["async"]["loading"] && (n.loading = {
          name: "SystemAsyncLoading",
          render: function (e) {
            return e(__uniConfig["async"]["loading"]);
          }
        }), __uniConfig["async"]["error"] && (n.error = {
          name: "SystemAsyncError",
          render: function (e) {
            return e(__uniConfig["async"]["error"]);
          }
        }), n;
      }), t.default.component("module-vote-result-result", function (e) {
        var n = {
          component: Promise.all([o.e("module-activity-home-home~module-ai-face-fusion-home-home~module-answer-answer-log-answer-log~module~f7b76ac1"), o.e("module-answer-answer-log-answer-detail~module-customer-fhtvn-no-rank-list~module-customer-fhtvn-rank~27a720c1"), o.e("module-vote-result-result")]).then(function () {
            return e(o("cf7b"));
          }.bind(null, o)).catch(o.oe),
          delay: __uniConfig["async"].delay,
          timeout: __uniConfig["async"].timeout
        };
        return __uniConfig["async"]["loading"] && (n.loading = {
          name: "SystemAsyncLoading",
          render: function (e) {
            return e(__uniConfig["async"]["loading"]);
          }
        }), __uniConfig["async"]["error"] && (n.error = {
          name: "SystemAsyncError",
          render: function (e) {
            return e(__uniConfig["async"]["error"]);
          }
        }), n;
      }), t.default.component("module-vote-score-home", function (e) {
        var n = {
          component: Promise.all([o.e("module-activity-home-home~module-ai-face-fusion-home-home~module-answer-answer-log-answer-log~module~f7b76ac1"), o.e("module-activity-home-home~module-answer-home-home~module-answer-question-question~module-article-tas~3c43a7bb"), o.e("module-activity-home-home~module-answer-home-home~module-answer-question-question~module-article-tas~edb4023f"), o.e("module-activity-home-home~module-answer-home-home~module-answer-question-question~module-article-tas~5a13cc39"), o.e("module-vote-score-home")]).then(function () {
            return e(o("7735"));
          }.bind(null, o)).catch(o.oe),
          delay: __uniConfig["async"].delay,
          timeout: __uniConfig["async"].timeout
        };
        return __uniConfig["async"]["loading"] && (n.loading = {
          name: "SystemAsyncLoading",
          render: function (e) {
            return e(__uniConfig["async"]["loading"]);
          }
        }), __uniConfig["async"]["error"] && (n.error = {
          name: "SystemAsyncError",
          render: function (e) {
            return e(__uniConfig["async"]["error"]);
          }
        }), n;
      }), t.default.component("module-vote-score-detail", function (e) {
        var n = {
          component: Promise.all([o.e("module-activity-home-home~module-ai-face-fusion-home-home~module-answer-answer-log-answer-log~module~f7b76ac1"), o.e("module-activity-home-home~module-answer-home-home~module-answer-question-question~module-article-tas~3c43a7bb"), o.e("module-activity-home-home~module-answer-home-home~module-answer-question-question~module-article-tas~edb4023f"), o.e("module-activity-home-home~module-answer-home-home~module-answer-question-question~module-article-tas~5a13cc39"), o.e("module-vote-score-detail")]).then(function () {
            return e(o("541c"));
          }.bind(null, o)).catch(o.oe),
          delay: __uniConfig["async"].delay,
          timeout: __uniConfig["async"].timeout
        };
        return __uniConfig["async"]["loading"] && (n.loading = {
          name: "SystemAsyncLoading",
          render: function (e) {
            return e(__uniConfig["async"]["loading"]);
          }
        }), __uniConfig["async"]["error"] && (n.error = {
          name: "SystemAsyncError",
          render: function (e) {
            return e(__uniConfig["async"]["error"]);
          }
        }), n;
      }), t.default.component("module-lottery-home-home", function (e) {
        var n = {
          component: Promise.all([o.e("module-activity-home-home~module-ai-face-fusion-home-home~module-answer-answer-log-answer-log~module~f7b76ac1"), o.e("module-activity-home-home~module-answer-home-home~module-answer-question-question~module-article-tas~3c43a7bb"), o.e("module-activity-home-home~module-answer-home-home~module-answer-question-question~module-article-tas~edb4023f"), o.e("module-activity-home-home~module-answer-home-home~module-answer-question-question~module-article-tas~5a13cc39"), o.e("module-lottery-home-home")]).then(function () {
            return e(o("6083"));
          }.bind(null, o)).catch(o.oe),
          delay: __uniConfig["async"].delay,
          timeout: __uniConfig["async"].timeout
        };
        return __uniConfig["async"]["loading"] && (n.loading = {
          name: "SystemAsyncLoading",
          render: function (e) {
            return e(__uniConfig["async"]["loading"]);
          }
        }), __uniConfig["async"]["error"] && (n.error = {
          name: "SystemAsyncError",
          render: function (e) {
            return e(__uniConfig["async"]["error"]);
          }
        }), n;
      }), t.default.component("module-lottery-win-record-win-record", function (e) {
        var n = {
          component: Promise.all([o.e("module-activity-home-home~module-ai-face-fusion-home-home~module-answer-answer-log-answer-log~module~f7b76ac1"), o.e("module-clockin-cert-get-cert~module-cms-news-detail~module-cms-video-detail~module-customer-fjdaily-~4f8830ac"), o.e("module-clockin-cert-get-cert~module-customer-xmtv-flowers~module-guandan-rank-rank-detail~module-lot~911add6f"), o.e("module-clockin-cert-get-cert~module-lottery-win-record-win-record~module-mall-address-address-detail~3fd23a5f"), o.e("module-lottery-win-record-win-record")]).then(function () {
            return e(o("0b24"));
          }.bind(null, o)).catch(o.oe),
          delay: __uniConfig["async"].delay,
          timeout: __uniConfig["async"].timeout
        };
        return __uniConfig["async"]["loading"] && (n.loading = {
          name: "SystemAsyncLoading",
          render: function (e) {
            return e(__uniConfig["async"]["loading"]);
          }
        }), __uniConfig["async"]["error"] && (n.error = {
          name: "SystemAsyncError",
          render: function (e) {
            return e(__uniConfig["async"]["error"]);
          }
        }), n;
      }), t.default.component("module-lottery-win-record-detail-win-record-detail", function (e) {
        var n = {
          component: Promise.all([o.e("module-activity-home-home~module-ai-face-fusion-home-home~module-answer-answer-log-answer-log~module~f7b76ac1"), o.e("module-lottery-win-record-detail-win-record-detail~module-lottery-writeoff-confirm~module-lottery-wr~345e859a"), o.e("module-lottery-win-record-detail-win-record-detail~module-mall-order-detail-order-detail~module-mall~4e6aba87"), o.e("module-lottery-win-record-detail-win-record-detail")]).then(function () {
            return e(o("acf5"));
          }.bind(null, o)).catch(o.oe),
          delay: __uniConfig["async"].delay,
          timeout: __uniConfig["async"].timeout
        };
        return __uniConfig["async"]["loading"] && (n.loading = {
          name: "SystemAsyncLoading",
          render: function (e) {
            return e(__uniConfig["async"]["loading"]);
          }
        }), __uniConfig["async"]["error"] && (n.error = {
          name: "SystemAsyncError",
          render: function (e) {
            return e(__uniConfig["async"]["error"]);
          }
        }), n;
      }), t.default.component("module-lottery-writeoff-home", function (e) {
        var n = {
          component: Promise.all([o.e("module-activity-home-home~module-ai-face-fusion-home-home~module-answer-answer-log-answer-log~module~f7b76ac1"), o.e("module-lottery-writeoff-home")]).then(function () {
            return e(o("b3bb"));
          }.bind(null, o)).catch(o.oe),
          delay: __uniConfig["async"].delay,
          timeout: __uniConfig["async"].timeout
        };
        return __uniConfig["async"]["loading"] && (n.loading = {
          name: "SystemAsyncLoading",
          render: function (e) {
            return e(__uniConfig["async"]["loading"]);
          }
        }), __uniConfig["async"]["error"] && (n.error = {
          name: "SystemAsyncError",
          render: function (e) {
            return e(__uniConfig["async"]["error"]);
          }
        }), n;
      }), t.default.component("module-lottery-writeoff-confirm", function (e) {
        var n = {
          component: Promise.all([o.e("module-activity-home-home~module-ai-face-fusion-home-home~module-answer-answer-log-answer-log~module~f7b76ac1"), o.e("module-lottery-win-record-detail-win-record-detail~module-lottery-writeoff-confirm~module-lottery-wr~345e859a"), o.e("module-lottery-writeoff-confirm")]).then(function () {
            return e(o("e8f7"));
          }.bind(null, o)).catch(o.oe),
          delay: __uniConfig["async"].delay,
          timeout: __uniConfig["async"].timeout
        };
        return __uniConfig["async"]["loading"] && (n.loading = {
          name: "SystemAsyncLoading",
          render: function (e) {
            return e(__uniConfig["async"]["loading"]);
          }
        }), __uniConfig["async"]["error"] && (n.error = {
          name: "SystemAsyncError",
          render: function (e) {
            return e(__uniConfig["async"]["error"]);
          }
        }), n;
      }), t.default.component("module-lottery-writeoff-logdetail", function (e) {
        var n = {
          component: Promise.all([o.e("module-activity-home-home~module-ai-face-fusion-home-home~module-answer-answer-log-answer-log~module~f7b76ac1"), o.e("module-lottery-win-record-detail-win-record-detail~module-lottery-writeoff-confirm~module-lottery-wr~345e859a"), o.e("module-lottery-writeoff-logdetail")]).then(function () {
            return e(o("5784"));
          }.bind(null, o)).catch(o.oe),
          delay: __uniConfig["async"].delay,
          timeout: __uniConfig["async"].timeout
        };
        return __uniConfig["async"]["loading"] && (n.loading = {
          name: "SystemAsyncLoading",
          render: function (e) {
            return e(__uniConfig["async"]["loading"]);
          }
        }), __uniConfig["async"]["error"] && (n.error = {
          name: "SystemAsyncError",
          render: function (e) {
            return e(__uniConfig["async"]["error"]);
          }
        }), n;
      }), t.default.component("module-lottery-writeoff-success", function (e) {
        var n = {
          component: Promise.all([o.e("module-activity-home-home~module-ai-face-fusion-home-home~module-answer-answer-log-answer-log~module~f7b76ac1"), o.e("module-lottery-writeoff-success")]).then(function () {
            return e(o("4ebe"));
          }.bind(null, o)).catch(o.oe),
          delay: __uniConfig["async"].delay,
          timeout: __uniConfig["async"].timeout
        };
        return __uniConfig["async"]["loading"] && (n.loading = {
          name: "SystemAsyncLoading",
          render: function (e) {
            return e(__uniConfig["async"]["loading"]);
          }
        }), __uniConfig["async"]["error"] && (n.error = {
          name: "SystemAsyncError",
          render: function (e) {
            return e(__uniConfig["async"]["error"]);
          }
        }), n;
      }), t.default.component("module-lottery-writeoff-loglist", function (e) {
        var n = {
          component: Promise.all([o.e("module-activity-home-home~module-ai-face-fusion-home-home~module-answer-answer-log-answer-log~module~f7b76ac1"), o.e("module-answer-answer-log-answer-detail~module-customer-fhtvn-no-rank-list~module-customer-fhtvn-rank~27a720c1"), o.e("module-lottery-writeoff-loglist")]).then(function () {
            return e(o("0f23"));
          }.bind(null, o)).catch(o.oe),
          delay: __uniConfig["async"].delay,
          timeout: __uniConfig["async"].timeout
        };
        return __uniConfig["async"]["loading"] && (n.loading = {
          name: "SystemAsyncLoading",
          render: function (e) {
            return e(__uniConfig["async"]["loading"]);
          }
        }), __uniConfig["async"]["error"] && (n.error = {
          name: "SystemAsyncError",
          render: function (e) {
            return e(__uniConfig["async"]["error"]);
          }
        }), n;
      }), t.default.component("module-signup-home-home", function (e) {
        var n = {
          component: Promise.all([o.e("module-activity-home-home~module-ai-face-fusion-home-home~module-answer-answer-log-answer-log~module~f7b76ac1"), o.e("module-activity-home-home~module-answer-home-home~module-answer-question-question~module-article-tas~3c43a7bb"), o.e("module-activity-home-home~module-answer-home-home~module-answer-question-question~module-article-tas~edb4023f"), o.e("module-activity-home-home~module-answer-home-home~module-answer-question-question~module-article-tas~5a13cc39"), o.e("module-signup-home-home")]).then(function () {
            return e(o("844c"));
          }.bind(null, o)).catch(o.oe),
          delay: __uniConfig["async"].delay,
          timeout: __uniConfig["async"].timeout
        };
        return __uniConfig["async"]["loading"] && (n.loading = {
          name: "SystemAsyncLoading",
          render: function (e) {
            return e(__uniConfig["async"]["loading"]);
          }
        }), __uniConfig["async"]["error"] && (n.error = {
          name: "SystemAsyncError",
          render: function (e) {
            return e(__uniConfig["async"]["error"]);
          }
        }), n;
      }), t.default.component("module-signup-home-update-home", function (e) {
        var n = {
          component: Promise.all([o.e("module-activity-home-home~module-ai-face-fusion-home-home~module-answer-answer-log-answer-log~module~f7b76ac1"), o.e("module-activity-home-home~module-answer-home-home~module-answer-question-question~module-article-tas~3c43a7bb"), o.e("module-activity-home-home~module-answer-home-home~module-answer-question-question~module-article-tas~edb4023f"), o.e("module-activity-home-home~module-answer-home-home~module-answer-question-question~module-article-tas~5a13cc39"), o.e("module-signup-home-update-home")]).then(function () {
            return e(o("97f9"));
          }.bind(null, o)).catch(o.oe),
          delay: __uniConfig["async"].delay,
          timeout: __uniConfig["async"].timeout
        };
        return __uniConfig["async"]["loading"] && (n.loading = {
          name: "SystemAsyncLoading",
          render: function (e) {
            return e(__uniConfig["async"]["loading"]);
          }
        }), __uniConfig["async"]["error"] && (n.error = {
          name: "SystemAsyncError",
          render: function (e) {
            return e(__uniConfig["async"]["error"]);
          }
        }), n;
      }), t.default.component("module-signup-activity-log-my-log-list", function (e) {
        var n = {
          component: Promise.all([o.e("module-activity-home-home~module-ai-face-fusion-home-home~module-answer-answer-log-answer-log~module~f7b76ac1"), o.e("module-signup-activity-log-my-log-list")]).then(function () {
            return e(o("bfd2"));
          }.bind(null, o)).catch(o.oe),
          delay: __uniConfig["async"].delay,
          timeout: __uniConfig["async"].timeout
        };
        return __uniConfig["async"]["loading"] && (n.loading = {
          name: "SystemAsyncLoading",
          render: function (e) {
            return e(__uniConfig["async"]["loading"]);
          }
        }), __uniConfig["async"]["error"] && (n.error = {
          name: "SystemAsyncError",
          render: function (e) {
            return e(__uniConfig["async"]["error"]);
          }
        }), n;
      }), t.default.component("module-signup-activity-log-log-list", function (e) {
        var n = {
          component: Promise.all([o.e("module-activity-home-home~module-ai-face-fusion-home-home~module-answer-answer-log-answer-log~module~f7b76ac1"), o.e("module-signup-activity-log-log-list")]).then(function () {
            return e(o("6be3"));
          }.bind(null, o)).catch(o.oe),
          delay: __uniConfig["async"].delay,
          timeout: __uniConfig["async"].timeout
        };
        return __uniConfig["async"]["loading"] && (n.loading = {
          name: "SystemAsyncLoading",
          render: function (e) {
            return e(__uniConfig["async"]["loading"]);
          }
        }), __uniConfig["async"]["error"] && (n.error = {
          name: "SystemAsyncError",
          render: function (e) {
            return e(__uniConfig["async"]["error"]);
          }
        }), n;
      }), t.default.component("module-signup-activity-log-log-detail", function (e) {
        var n = {
          component: Promise.all([o.e("module-activity-home-home~module-ai-face-fusion-home-home~module-answer-answer-log-answer-log~module~f7b76ac1"), o.e("module-lottery-win-record-detail-win-record-detail~module-lottery-writeoff-confirm~module-lottery-wr~345e859a"), o.e("module-clockin-cert-get-cert~module-customer-xmtv-flowers~module-guandan-rank-rank-detail~module-lot~911add6f"), o.e("module-signup-activity-log-log-detail")]).then(function () {
            return e(o("24ae"));
          }.bind(null, o)).catch(o.oe),
          delay: __uniConfig["async"].delay,
          timeout: __uniConfig["async"].timeout
        };
        return __uniConfig["async"]["loading"] && (n.loading = {
          name: "SystemAsyncLoading",
          render: function (e) {
            return e(__uniConfig["async"]["loading"]);
          }
        }), __uniConfig["async"]["error"] && (n.error = {
          name: "SystemAsyncError",
          render: function (e) {
            return e(__uniConfig["async"]["error"]);
          }
        }), n;
      }), t.default.component("module-signup-writeoff-auth-bind", function (e) {
        var n = {
          component: Promise.all([o.e("module-activity-home-home~module-ai-face-fusion-home-home~module-answer-answer-log-answer-log~module~f7b76ac1"), o.e("module-signup-writeoff-auth-bind")]).then(function () {
            return e(o("c6ed"));
          }.bind(null, o)).catch(o.oe),
          delay: __uniConfig["async"].delay,
          timeout: __uniConfig["async"].timeout
        };
        return __uniConfig["async"]["loading"] && (n.loading = {
          name: "SystemAsyncLoading",
          render: function (e) {
            return e(__uniConfig["async"]["loading"]);
          }
        }), __uniConfig["async"]["error"] && (n.error = {
          name: "SystemAsyncError",
          render: function (e) {
            return e(__uniConfig["async"]["error"]);
          }
        }), n;
      }), t.default.component("module-signup-writeoff-confirm", function (e) {
        var n = {
          component: Promise.all([o.e("module-activity-home-home~module-ai-face-fusion-home-home~module-answer-answer-log-answer-log~module~f7b76ac1"), o.e("module-lottery-win-record-detail-win-record-detail~module-lottery-writeoff-confirm~module-lottery-wr~345e859a"), o.e("module-clockin-cert-get-cert~module-customer-xmtv-flowers~module-guandan-rank-rank-detail~module-lot~911add6f"), o.e("module-signup-writeoff-confirm")]).then(function () {
            return e(o("8619"));
          }.bind(null, o)).catch(o.oe),
          delay: __uniConfig["async"].delay,
          timeout: __uniConfig["async"].timeout
        };
        return __uniConfig["async"]["loading"] && (n.loading = {
          name: "SystemAsyncLoading",
          render: function (e) {
            return e(__uniConfig["async"]["loading"]);
          }
        }), __uniConfig["async"]["error"] && (n.error = {
          name: "SystemAsyncError",
          render: function (e) {
            return e(__uniConfig["async"]["error"]);
          }
        }), n;
      }), t.default.component("module-signup-writeoff-writeoff-list", function (e) {
        var n = {
          component: Promise.all([o.e("module-activity-home-home~module-ai-face-fusion-home-home~module-answer-answer-log-answer-log~module~f7b76ac1"), o.e("module-signup-writeoff-writeoff-list")]).then(function () {
            return e(o("2b52"));
          }.bind(null, o)).catch(o.oe),
          delay: __uniConfig["async"].delay,
          timeout: __uniConfig["async"].timeout
        };
        return __uniConfig["async"]["loading"] && (n.loading = {
          name: "SystemAsyncLoading",
          render: function (e) {
            return e(__uniConfig["async"]["loading"]);
          }
        }), __uniConfig["async"]["error"] && (n.error = {
          name: "SystemAsyncError",
          render: function (e) {
            return e(__uniConfig["async"]["error"]);
          }
        }), n;
      }), t.default.component("module-supertopic-home-home", function (e) {
        var n = {
          component: Promise.all([o.e("module-activity-home-home~module-ai-face-fusion-home-home~module-answer-answer-log-answer-log~module~f7b76ac1"), o.e("module-activity-home-home~module-answer-home-home~module-answer-question-question~module-article-tas~3c43a7bb"), o.e("module-activity-home-home~module-answer-home-home~module-answer-question-question~module-article-tas~edb4023f"), o.e("module-activity-home-home~module-answer-home-home~module-answer-question-question~module-article-tas~5a13cc39"), o.e("module-supertopic-home-home")]).then(function () {
            return e(o("4656"));
          }.bind(null, o)).catch(o.oe),
          delay: __uniConfig["async"].delay,
          timeout: __uniConfig["async"].timeout
        };
        return __uniConfig["async"]["loading"] && (n.loading = {
          name: "SystemAsyncLoading",
          render: function (e) {
            return e(__uniConfig["async"]["loading"]);
          }
        }), __uniConfig["async"]["error"] && (n.error = {
          name: "SystemAsyncError",
          render: function (e) {
            return e(__uniConfig["async"]["error"]);
          }
        }), n;
      }), t.default.component("module-supertopic-detail-detail", function (e) {
        var n = {
          component: Promise.all([o.e("module-activity-home-home~module-ai-face-fusion-home-home~module-answer-answer-log-answer-log~module~f7b76ac1"), o.e("module-activity-home-home~module-answer-home-home~module-answer-question-question~module-article-tas~3c43a7bb"), o.e("module-activity-home-home~module-answer-home-home~module-answer-question-question~module-article-tas~edb4023f"), o.e("module-activity-home-home~module-answer-home-home~module-answer-question-question~module-article-tas~5a13cc39"), o.e("module-supertopic-detail-detail")]).then(function () {
            return e(o("69c9"));
          }.bind(null, o)).catch(o.oe),
          delay: __uniConfig["async"].delay,
          timeout: __uniConfig["async"].timeout
        };
        return __uniConfig["async"]["loading"] && (n.loading = {
          name: "SystemAsyncLoading",
          render: function (e) {
            return e(__uniConfig["async"]["loading"]);
          }
        }), __uniConfig["async"]["error"] && (n.error = {
          name: "SystemAsyncError",
          render: function (e) {
            return e(__uniConfig["async"]["error"]);
          }
        }), n;
      }), t.default.component("module-supertopic-detail-mylog", function (e) {
        var n = {
          component: Promise.all([o.e("module-activity-home-home~module-ai-face-fusion-home-home~module-answer-answer-log-answer-log~module~f7b76ac1"), o.e("module-clockin-log-log~module-cms-news-detail~module-cms-video-detail~module-customer-fjdaily-clocki~540cf0d6"), o.e("module-supertopic-detail-mylog~module-supertopic-me-me"), o.e("module-supertopic-detail-mylog")]).then(function () {
            return e(o("ab26"));
          }.bind(null, o)).catch(o.oe),
          delay: __uniConfig["async"].delay,
          timeout: __uniConfig["async"].timeout
        };
        return __uniConfig["async"]["loading"] && (n.loading = {
          name: "SystemAsyncLoading",
          render: function (e) {
            return e(__uniConfig["async"]["loading"]);
          }
        }), __uniConfig["async"]["error"] && (n.error = {
          name: "SystemAsyncError",
          render: function (e) {
            return e(__uniConfig["async"]["error"]);
          }
        }), n;
      }), t.default.component("module-supertopic-me-me", function (e) {
        var n = {
          component: Promise.all([o.e("module-activity-home-home~module-ai-face-fusion-home-home~module-answer-answer-log-answer-log~module~f7b76ac1"), o.e("module-clockin-cert-get-cert~module-customer-xmtv-flowers~module-guandan-rank-rank-detail~module-lot~911add6f"), o.e("module-supertopic-detail-mylog~module-supertopic-me-me"), o.e("module-supertopic-me-me")]).then(function () {
            return e(o("b6b8"));
          }.bind(null, o)).catch(o.oe),
          delay: __uniConfig["async"].delay,
          timeout: __uniConfig["async"].timeout
        };
        return __uniConfig["async"]["loading"] && (n.loading = {
          name: "SystemAsyncLoading",
          render: function (e) {
            return e(__uniConfig["async"]["loading"]);
          }
        }), __uniConfig["async"]["error"] && (n.error = {
          name: "SystemAsyncError",
          render: function (e) {
            return e(__uniConfig["async"]["error"]);
          }
        }), n;
      }), t.default.component("module-checkers-home-home", function (e) {
        var n = {
          component: Promise.all([o.e("module-activity-home-home~module-ai-face-fusion-home-home~module-answer-answer-log-answer-log~module~f7b76ac1"), o.e("module-activity-home-home~module-answer-home-home~module-answer-question-question~module-article-tas~3c43a7bb"), o.e("module-activity-home-home~module-answer-home-home~module-answer-question-question~module-article-tas~edb4023f"), o.e("module-activity-home-home~module-answer-home-home~module-answer-question-question~module-article-tas~5a13cc39"), o.e("module-checkers-home-home")]).then(function () {
            return e(o("8277"));
          }.bind(null, o)).catch(o.oe),
          delay: __uniConfig["async"].delay,
          timeout: __uniConfig["async"].timeout
        };
        return __uniConfig["async"]["loading"] && (n.loading = {
          name: "SystemAsyncLoading",
          render: function (e) {
            return e(__uniConfig["async"]["loading"]);
          }
        }), __uniConfig["async"]["error"] && (n.error = {
          name: "SystemAsyncError",
          render: function (e) {
            return e(__uniConfig["async"]["error"]);
          }
        }), n;
      }), t.default.component("module-help-home-home", function (e) {
        var n = {
          component: Promise.all([o.e("module-activity-home-home~module-ai-face-fusion-home-home~module-answer-answer-log-answer-log~module~f7b76ac1"), o.e("module-activity-home-home~module-answer-home-home~module-answer-question-question~module-article-tas~3c43a7bb"), o.e("module-activity-home-home~module-answer-home-home~module-answer-question-question~module-article-tas~edb4023f"), o.e("module-activity-home-home~module-answer-home-home~module-answer-question-question~module-article-tas~5a13cc39"), o.e("module-help-home-home")]).then(function () {
            return e(o("cc5e"));
          }.bind(null, o)).catch(o.oe),
          delay: __uniConfig["async"].delay,
          timeout: __uniConfig["async"].timeout
        };
        return __uniConfig["async"]["loading"] && (n.loading = {
          name: "SystemAsyncLoading",
          render: function (e) {
            return e(__uniConfig["async"]["loading"]);
          }
        }), __uniConfig["async"]["error"] && (n.error = {
          name: "SystemAsyncError",
          render: function (e) {
            return e(__uniConfig["async"]["error"]);
          }
        }), n;
      }), t.default.component("module-poetry-home-home", function (e) {
        var n = {
          component: Promise.all([o.e("module-activity-home-home~module-ai-face-fusion-home-home~module-answer-answer-log-answer-log~module~f7b76ac1"), o.e("module-activity-home-home~module-answer-home-home~module-answer-question-question~module-article-tas~3c43a7bb"), o.e("module-activity-home-home~module-answer-home-home~module-answer-question-question~module-article-tas~edb4023f"), o.e("module-activity-home-home~module-answer-home-home~module-answer-question-question~module-article-tas~5a13cc39"), o.e("module-poetry-home-home")]).then(function () {
            return e(o("b46c"));
          }.bind(null, o)).catch(o.oe),
          delay: __uniConfig["async"].delay,
          timeout: __uniConfig["async"].timeout
        };
        return __uniConfig["async"]["loading"] && (n.loading = {
          name: "SystemAsyncLoading",
          render: function (e) {
            return e(__uniConfig["async"]["loading"]);
          }
        }), __uniConfig["async"]["error"] && (n.error = {
          name: "SystemAsyncError",
          render: function (e) {
            return e(__uniConfig["async"]["error"]);
          }
        }), n;
      }), t.default.component("module-poetry-question-question", function (e) {
        var n = {
          component: Promise.all([o.e("module-activity-home-home~module-ai-face-fusion-home-home~module-answer-answer-log-answer-log~module~f7b76ac1"), o.e("module-activity-home-home~module-answer-home-home~module-answer-question-question~module-article-tas~3c43a7bb"), o.e("module-activity-home-home~module-answer-home-home~module-answer-question-question~module-article-tas~edb4023f"), o.e("module-activity-home-home~module-answer-home-home~module-answer-question-question~module-article-tas~5a13cc39"), o.e("module-poetry-question-question")]).then(function () {
            return e(o("0939"));
          }.bind(null, o)).catch(o.oe),
          delay: __uniConfig["async"].delay,
          timeout: __uniConfig["async"].timeout
        };
        return __uniConfig["async"]["loading"] && (n.loading = {
          name: "SystemAsyncLoading",
          render: function (e) {
            return e(__uniConfig["async"]["loading"]);
          }
        }), __uniConfig["async"]["error"] && (n.error = {
          name: "SystemAsyncError",
          render: function (e) {
            return e(__uniConfig["async"]["error"]);
          }
        }), n;
      }), t.default.component("module-poetry-rank-list-rank-list", function (e) {
        var n = {
          component: Promise.all([o.e("module-activity-home-home~module-ai-face-fusion-home-home~module-answer-answer-log-answer-log~module~f7b76ac1"), o.e("module-poetry-rank-list-rank-list")]).then(function () {
            return e(o("ec01"));
          }.bind(null, o)).catch(o.oe),
          delay: __uniConfig["async"].delay,
          timeout: __uniConfig["async"].timeout
        };
        return __uniConfig["async"]["loading"] && (n.loading = {
          name: "SystemAsyncLoading",
          render: function (e) {
            return e(__uniConfig["async"]["loading"]);
          }
        }), __uniConfig["async"]["error"] && (n.error = {
          name: "SystemAsyncError",
          render: function (e) {
            return e(__uniConfig["async"]["error"]);
          }
        }), n;
      }), t.default.component("module-poetry-question-question-two", function (e) {
        var n = {
          component: Promise.all([o.e("module-activity-home-home~module-ai-face-fusion-home-home~module-answer-answer-log-answer-log~module~f7b76ac1"), o.e("module-activity-home-home~module-answer-home-home~module-answer-question-question~module-article-tas~3c43a7bb"), o.e("module-activity-home-home~module-answer-home-home~module-answer-question-question~module-article-tas~edb4023f"), o.e("module-activity-home-home~module-answer-home-home~module-answer-question-question~module-article-tas~5a13cc39"), o.e("module-poetry-question-question-two")]).then(function () {
            return e(o("ef4e"));
          }.bind(null, o)).catch(o.oe),
          delay: __uniConfig["async"].delay,
          timeout: __uniConfig["async"].timeout
        };
        return __uniConfig["async"]["loading"] && (n.loading = {
          name: "SystemAsyncLoading",
          render: function (e) {
            return e(__uniConfig["async"]["loading"]);
          }
        }), __uniConfig["async"]["error"] && (n.error = {
          name: "SystemAsyncError",
          render: function (e) {
            return e(__uniConfig["async"]["error"]);
          }
        }), n;
      }), t.default.component("module-poetry-home-home-two", function (e) {
        var n = {
          component: Promise.all([o.e("module-activity-home-home~module-ai-face-fusion-home-home~module-answer-answer-log-answer-log~module~f7b76ac1"), o.e("module-activity-home-home~module-answer-home-home~module-answer-question-question~module-article-tas~3c43a7bb"), o.e("module-activity-home-home~module-answer-home-home~module-answer-question-question~module-article-tas~edb4023f"), o.e("module-activity-home-home~module-answer-home-home~module-answer-question-question~module-article-tas~5a13cc39"), o.e("module-poetry-home-home-two")]).then(function () {
            return e(o("94bb"));
          }.bind(null, o)).catch(o.oe),
          delay: __uniConfig["async"].delay,
          timeout: __uniConfig["async"].timeout
        };
        return __uniConfig["async"]["loading"] && (n.loading = {
          name: "SystemAsyncLoading",
          render: function (e) {
            return e(__uniConfig["async"]["loading"]);
          }
        }), __uniConfig["async"]["error"] && (n.error = {
          name: "SystemAsyncError",
          render: function (e) {
            return e(__uniConfig["async"]["error"]);
          }
        }), n;
      }), t.default.component("module-cms-news-detail", function (e) {
        var n = {
          component: Promise.all([o.e("module-activity-home-home~module-ai-face-fusion-home-home~module-answer-answer-log-answer-log~module~f7b76ac1"), o.e("module-activity-home-home~module-answer-home-home~module-answer-question-question~module-article-tas~3c43a7bb"), o.e("module-clockin-cert-get-cert~module-cms-news-detail~module-cms-video-detail~module-customer-fjdaily-~4f8830ac"), o.e("module-clockin-log-log~module-cms-news-detail~module-cms-video-detail~module-customer-fjdaily-clocki~540cf0d6"), o.e("module-cms-news-detail")]).then(function () {
            return e(o("02ad"));
          }.bind(null, o)).catch(o.oe),
          delay: __uniConfig["async"].delay,
          timeout: __uniConfig["async"].timeout
        };
        return __uniConfig["async"]["loading"] && (n.loading = {
          name: "SystemAsyncLoading",
          render: function (e) {
            return e(__uniConfig["async"]["loading"]);
          }
        }), __uniConfig["async"]["error"] && (n.error = {
          name: "SystemAsyncError",
          render: function (e) {
            return e(__uniConfig["async"]["error"]);
          }
        }), n;
      }), t.default.component("module-cms-atlas-detail", function (e) {
        var n = {
          component: Promise.all([o.e("module-activity-home-home~module-ai-face-fusion-home-home~module-answer-answer-log-answer-log~module~f7b76ac1"), o.e("module-cms-atlas-detail")]).then(function () {
            return e(o("274c"));
          }.bind(null, o)).catch(o.oe),
          delay: __uniConfig["async"].delay,
          timeout: __uniConfig["async"].timeout
        };
        return __uniConfig["async"]["loading"] && (n.loading = {
          name: "SystemAsyncLoading",
          render: function (e) {
            return e(__uniConfig["async"]["loading"]);
          }
        }), __uniConfig["async"]["error"] && (n.error = {
          name: "SystemAsyncError",
          render: function (e) {
            return e(__uniConfig["async"]["error"]);
          }
        }), n;
      }), t.default.component("module-cms-video-detail", function (e) {
        var n = {
          component: Promise.all([o.e("module-activity-home-home~module-ai-face-fusion-home-home~module-answer-answer-log-answer-log~module~f7b76ac1"), o.e("module-activity-home-home~module-answer-home-home~module-answer-question-question~module-article-tas~3c43a7bb"), o.e("module-clockin-cert-get-cert~module-cms-news-detail~module-cms-video-detail~module-customer-fjdaily-~4f8830ac"), o.e("module-clockin-log-log~module-cms-news-detail~module-cms-video-detail~module-customer-fjdaily-clocki~540cf0d6"), o.e("module-cms-video-detail")]).then(function () {
            return e(o("8bcb"));
          }.bind(null, o)).catch(o.oe),
          delay: __uniConfig["async"].delay,
          timeout: __uniConfig["async"].timeout
        };
        return __uniConfig["async"]["loading"] && (n.loading = {
          name: "SystemAsyncLoading",
          render: function (e) {
            return e(__uniConfig["async"]["loading"]);
          }
        }), __uniConfig["async"]["error"] && (n.error = {
          name: "SystemAsyncError",
          render: function (e) {
            return e(__uniConfig["async"]["error"]);
          }
        }), n;
      }), t.default.component("module-page-home-home", function (e) {
        var n = {
          component: Promise.all([o.e("module-activity-home-home~module-ai-face-fusion-home-home~module-answer-answer-log-answer-log~module~f7b76ac1"), o.e("module-activity-home-home~module-answer-home-home~module-answer-question-question~module-article-tas~3c43a7bb"), o.e("module-activity-home-home~module-answer-home-home~module-answer-question-question~module-article-tas~edb4023f"), o.e("module-activity-home-home~module-answer-home-home~module-answer-question-question~module-article-tas~5a13cc39"), o.e("module-page-home-home")]).then(function () {
            return e(o("fa8a"));
          }.bind(null, o)).catch(o.oe),
          delay: __uniConfig["async"].delay,
          timeout: __uniConfig["async"].timeout
        };
        return __uniConfig["async"]["loading"] && (n.loading = {
          name: "SystemAsyncLoading",
          render: function (e) {
            return e(__uniConfig["async"]["loading"]);
          }
        }), __uniConfig["async"]["error"] && (n.error = {
          name: "SystemAsyncError",
          render: function (e) {
            return e(__uniConfig["async"]["error"]);
          }
        }), n;
      }), t.default.component("module-invite-home-home", function (e) {
        var n = {
          component: Promise.all([o.e("module-activity-home-home~module-ai-face-fusion-home-home~module-answer-answer-log-answer-log~module~f7b76ac1"), o.e("module-activity-home-home~module-answer-home-home~module-answer-question-question~module-article-tas~3c43a7bb"), o.e("module-activity-home-home~module-answer-home-home~module-answer-question-question~module-article-tas~edb4023f"), o.e("module-activity-home-home~module-answer-home-home~module-answer-question-question~module-article-tas~5a13cc39"), o.e("module-invite-home-home")]).then(function () {
            return e(o("4ad1"));
          }.bind(null, o)).catch(o.oe),
          delay: __uniConfig["async"].delay,
          timeout: __uniConfig["async"].timeout
        };
        return __uniConfig["async"]["loading"] && (n.loading = {
          name: "SystemAsyncLoading",
          render: function (e) {
            return e(__uniConfig["async"]["loading"]);
          }
        }), __uniConfig["async"]["error"] && (n.error = {
          name: "SystemAsyncError",
          render: function (e) {
            return e(__uniConfig["async"]["error"]);
          }
        }), n;
      }), t.default.component("module-invite-invite-invite", function (e) {
        var n = {
          component: Promise.all([o.e("module-activity-home-home~module-ai-face-fusion-home-home~module-answer-answer-log-answer-log~module~f7b76ac1"), o.e("module-activity-home-home~module-answer-home-home~module-answer-question-question~module-article-tas~3c43a7bb"), o.e("module-activity-home-home~module-answer-home-home~module-answer-question-question~module-article-tas~edb4023f"), o.e("module-activity-home-home~module-answer-home-home~module-answer-question-question~module-article-tas~5a13cc39"), o.e("module-invite-invite-invite")]).then(function () {
            return e(o("f93f"));
          }.bind(null, o)).catch(o.oe),
          delay: __uniConfig["async"].delay,
          timeout: __uniConfig["async"].timeout
        };
        return __uniConfig["async"]["loading"] && (n.loading = {
          name: "SystemAsyncLoading",
          render: function (e) {
            return e(__uniConfig["async"]["loading"]);
          }
        }), __uniConfig["async"]["error"] && (n.error = {
          name: "SystemAsyncError",
          render: function (e) {
            return e(__uniConfig["async"]["error"]);
          }
        }), n;
      }), t.default.component("module-footmark-home-home", function (e) {
        var n = {
          component: Promise.all([o.e("module-activity-home-home~module-ai-face-fusion-home-home~module-answer-answer-log-answer-log~module~f7b76ac1"), o.e("module-activity-home-home~module-answer-home-home~module-answer-question-question~module-article-tas~3c43a7bb"), o.e("module-activity-home-home~module-answer-home-home~module-answer-question-question~module-article-tas~edb4023f"), o.e("module-activity-home-home~module-answer-home-home~module-answer-question-question~module-article-tas~5a13cc39"), o.e("module-footmark-home-home")]).then(function () {
            return e(o("2d2e"));
          }.bind(null, o)).catch(o.oe),
          delay: __uniConfig["async"].delay,
          timeout: __uniConfig["async"].timeout
        };
        return __uniConfig["async"]["loading"] && (n.loading = {
          name: "SystemAsyncLoading",
          render: function (e) {
            return e(__uniConfig["async"]["loading"]);
          }
        }), __uniConfig["async"]["error"] && (n.error = {
          name: "SystemAsyncError",
          render: function (e) {
            return e(__uniConfig["async"]["error"]);
          }
        }), n;
      }), t.default.component("module-footmark-log-detail-log-detail", function (e) {
        var n = {
          component: Promise.all([o.e("module-activity-home-home~module-ai-face-fusion-home-home~module-answer-answer-log-answer-log~module~f7b76ac1"), o.e("module-footmark-log-detail-log-detail")]).then(function () {
            return e(o("74e9"));
          }.bind(null, o)).catch(o.oe),
          delay: __uniConfig["async"].delay,
          timeout: __uniConfig["async"].timeout
        };
        return __uniConfig["async"]["loading"] && (n.loading = {
          name: "SystemAsyncLoading",
          render: function (e) {
            return e(__uniConfig["async"]["loading"]);
          }
        }), __uniConfig["async"]["error"] && (n.error = {
          name: "SystemAsyncError",
          render: function (e) {
            return e(__uniConfig["async"]["error"]);
          }
        }), n;
      }), t.default.component("module-signin-home-home", function (e) {
        var n = {
          component: Promise.all([o.e("module-activity-home-home~module-ai-face-fusion-home-home~module-answer-answer-log-answer-log~module~f7b76ac1"), o.e("module-activity-home-home~module-answer-home-home~module-answer-question-question~module-article-tas~3c43a7bb"), o.e("module-activity-home-home~module-answer-home-home~module-answer-question-question~module-article-tas~edb4023f"), o.e("module-activity-home-home~module-answer-home-home~module-answer-question-question~module-article-tas~5a13cc39"), o.e("module-signin-home-home")]).then(function () {
            return e(o("25342"));
          }.bind(null, o)).catch(o.oe),
          delay: __uniConfig["async"].delay,
          timeout: __uniConfig["async"].timeout
        };
        return __uniConfig["async"]["loading"] && (n.loading = {
          name: "SystemAsyncLoading",
          render: function (e) {
            return e(__uniConfig["async"]["loading"]);
          }
        }), __uniConfig["async"]["error"] && (n.error = {
          name: "SystemAsyncError",
          render: function (e) {
            return e(__uniConfig["async"]["error"]);
          }
        }), n;
      }), t.default.component("module-wish-home-home", function (e) {
        var n = {
          component: Promise.all([o.e("module-activity-home-home~module-ai-face-fusion-home-home~module-answer-answer-log-answer-log~module~f7b76ac1"), o.e("module-activity-home-home~module-answer-home-home~module-answer-question-question~module-article-tas~3c43a7bb"), o.e("module-activity-home-home~module-answer-home-home~module-answer-question-question~module-article-tas~edb4023f"), o.e("module-activity-home-home~module-answer-home-home~module-answer-question-question~module-article-tas~5a13cc39"), o.e("module-wish-home-home")]).then(function () {
            return e(o("4a09"));
          }.bind(null, o)).catch(o.oe),
          delay: __uniConfig["async"].delay,
          timeout: __uniConfig["async"].timeout
        };
        return __uniConfig["async"]["loading"] && (n.loading = {
          name: "SystemAsyncLoading",
          render: function (e) {
            return e(__uniConfig["async"]["loading"]);
          }
        }), __uniConfig["async"]["error"] && (n.error = {
          name: "SystemAsyncError",
          render: function (e) {
            return e(__uniConfig["async"]["error"]);
          }
        }), n;
      }), t.default.component("module-clockin-home-home", function (e) {
        var n = {
          component: Promise.all([o.e("module-activity-home-home~module-ai-face-fusion-home-home~module-answer-answer-log-answer-log~module~f7b76ac1"), o.e("module-activity-home-home~module-answer-home-home~module-answer-question-question~module-article-tas~3c43a7bb"), o.e("module-activity-home-home~module-answer-home-home~module-answer-question-question~module-article-tas~edb4023f"), o.e("module-activity-home-home~module-answer-home-home~module-answer-question-question~module-article-tas~5a13cc39"), o.e("module-clockin-home-home")]).then(function () {
            return e(o("15c0"));
          }.bind(null, o)).catch(o.oe),
          delay: __uniConfig["async"].delay,
          timeout: __uniConfig["async"].timeout
        };
        return __uniConfig["async"]["loading"] && (n.loading = {
          name: "SystemAsyncLoading",
          render: function (e) {
            return e(__uniConfig["async"]["loading"]);
          }
        }), __uniConfig["async"]["error"] && (n.error = {
          name: "SystemAsyncError",
          render: function (e) {
            return e(__uniConfig["async"]["error"]);
          }
        }), n;
      }), t.default.component("module-clockin-member-join-list", function (e) {
        var n = {
          component: Promise.all([o.e("module-activity-home-home~module-ai-face-fusion-home-home~module-answer-answer-log-answer-log~module~f7b76ac1"), o.e("module-clockin-member-join-list")]).then(function () {
            return e(o("daef"));
          }.bind(null, o)).catch(o.oe),
          delay: __uniConfig["async"].delay,
          timeout: __uniConfig["async"].timeout
        };
        return __uniConfig["async"]["loading"] && (n.loading = {
          name: "SystemAsyncLoading",
          render: function (e) {
            return e(__uniConfig["async"]["loading"]);
          }
        }), __uniConfig["async"]["error"] && (n.error = {
          name: "SystemAsyncError",
          render: function (e) {
            return e(__uniConfig["async"]["error"]);
          }
        }), n;
      }), t.default.component("module-clockin-member-rank-list", function (e) {
        var n = {
          component: Promise.all([o.e("module-activity-home-home~module-ai-face-fusion-home-home~module-answer-answer-log-answer-log~module~f7b76ac1"), o.e("module-clockin-member-rank-list")]).then(function () {
            return e(o("9153"));
          }.bind(null, o)).catch(o.oe),
          delay: __uniConfig["async"].delay,
          timeout: __uniConfig["async"].timeout
        };
        return __uniConfig["async"]["loading"] && (n.loading = {
          name: "SystemAsyncLoading",
          render: function (e) {
            return e(__uniConfig["async"]["loading"]);
          }
        }), __uniConfig["async"]["error"] && (n.error = {
          name: "SystemAsyncError",
          render: function (e) {
            return e(__uniConfig["async"]["error"]);
          }
        }), n;
      }), t.default.component("module-clockin-log-log", function (e) {
        var n = {
          component: Promise.all([o.e("module-activity-home-home~module-ai-face-fusion-home-home~module-answer-answer-log-answer-log~module~f7b76ac1"), o.e("module-clockin-log-log~module-cms-news-detail~module-cms-video-detail~module-customer-fjdaily-clocki~540cf0d6"), o.e("module-clockin-log-log")]).then(function () {
            return e(o("50f2"));
          }.bind(null, o)).catch(o.oe),
          delay: __uniConfig["async"].delay,
          timeout: __uniConfig["async"].timeout
        };
        return __uniConfig["async"]["loading"] && (n.loading = {
          name: "SystemAsyncLoading",
          render: function (e) {
            return e(__uniConfig["async"]["loading"]);
          }
        }), __uniConfig["async"]["error"] && (n.error = {
          name: "SystemAsyncError",
          render: function (e) {
            return e(__uniConfig["async"]["error"]);
          }
        }), n;
      }), t.default.component("module-clockin-cert-get-cert", function (e) {
        var n = {
          component: Promise.all([o.e("module-activity-home-home~module-ai-face-fusion-home-home~module-answer-answer-log-answer-log~module~f7b76ac1"), o.e("module-clockin-cert-get-cert~module-cms-news-detail~module-cms-video-detail~module-customer-fjdaily-~4f8830ac"), o.e("module-clockin-cert-get-cert~module-customer-xmtv-flowers~module-guandan-rank-rank-detail~module-lot~911add6f"), o.e("module-clockin-cert-get-cert~module-lottery-win-record-win-record~module-mall-address-address-detail~3fd23a5f"), o.e("module-clockin-cert-get-cert")]).then(function () {
            return e(o("ba5b"));
          }.bind(null, o)).catch(o.oe),
          delay: __uniConfig["async"].delay,
          timeout: __uniConfig["async"].timeout
        };
        return __uniConfig["async"]["loading"] && (n.loading = {
          name: "SystemAsyncLoading",
          render: function (e) {
            return e(__uniConfig["async"]["loading"]);
          }
        }), __uniConfig["async"]["error"] && (n.error = {
          name: "SystemAsyncError",
          render: function (e) {
            return e(__uniConfig["async"]["error"]);
          }
        }), n;
      }), t.default.component("module-study-home-home", function (e) {
        var n = {
          component: Promise.all([o.e("module-activity-home-home~module-ai-face-fusion-home-home~module-answer-answer-log-answer-log~module~f7b76ac1"), o.e("module-activity-home-home~module-answer-home-home~module-answer-question-question~module-article-tas~3c43a7bb"), o.e("module-activity-home-home~module-answer-home-home~module-answer-question-question~module-article-tas~edb4023f"), o.e("module-activity-home-home~module-answer-home-home~module-answer-question-question~module-article-tas~5a13cc39"), o.e("module-study-home-home")]).then(function () {
            return e(o("2c58"));
          }.bind(null, o)).catch(o.oe),
          delay: __uniConfig["async"].delay,
          timeout: __uniConfig["async"].timeout
        };
        return __uniConfig["async"]["loading"] && (n.loading = {
          name: "SystemAsyncLoading",
          render: function (e) {
            return e(__uniConfig["async"]["loading"]);
          }
        }), __uniConfig["async"]["error"] && (n.error = {
          name: "SystemAsyncError",
          render: function (e) {
            return e(__uniConfig["async"]["error"]);
          }
        }), n;
      }), t.default.component("module-study-pass-detail-pass-detail", function (e) {
        var n = {
          component: Promise.all([o.e("module-activity-home-home~module-ai-face-fusion-home-home~module-answer-answer-log-answer-log~module~f7b76ac1"), o.e("module-activity-home-home~module-answer-home-home~module-answer-question-question~module-article-tas~3c43a7bb"), o.e("module-activity-home-home~module-answer-home-home~module-answer-question-question~module-article-tas~edb4023f"), o.e("module-activity-home-home~module-answer-home-home~module-answer-question-question~module-article-tas~5a13cc39"), o.e("module-study-pass-detail-pass-detail")]).then(function () {
            return e(o("d5783"));
          }.bind(null, o)).catch(o.oe),
          delay: __uniConfig["async"].delay,
          timeout: __uniConfig["async"].timeout
        };
        return __uniConfig["async"]["loading"] && (n.loading = {
          name: "SystemAsyncLoading",
          render: function (e) {
            return e(__uniConfig["async"]["loading"]);
          }
        }), __uniConfig["async"]["error"] && (n.error = {
          name: "SystemAsyncError",
          render: function (e) {
            return e(__uniConfig["async"]["error"]);
          }
        }), n;
      }), t.default.component("module-guess-home-home", function (e) {
        var n = {
          component: Promise.all([o.e("module-activity-home-home~module-ai-face-fusion-home-home~module-answer-answer-log-answer-log~module~f7b76ac1"), o.e("module-activity-home-home~module-answer-home-home~module-answer-question-question~module-article-tas~3c43a7bb"), o.e("module-activity-home-home~module-answer-home-home~module-answer-question-question~module-article-tas~edb4023f"), o.e("module-activity-home-home~module-answer-home-home~module-answer-question-question~module-article-tas~5a13cc39"), o.e("module-guess-home-home")]).then(function () {
            return e(o("567c"));
          }.bind(null, o)).catch(o.oe),
          delay: __uniConfig["async"].delay,
          timeout: __uniConfig["async"].timeout
        };
        return __uniConfig["async"]["loading"] && (n.loading = {
          name: "SystemAsyncLoading",
          render: function (e) {
            return e(__uniConfig["async"]["loading"]);
          }
        }), __uniConfig["async"]["error"] && (n.error = {
          name: "SystemAsyncError",
          render: function (e) {
            return e(__uniConfig["async"]["error"]);
          }
        }), n;
      }), t.default.component("module-guess-log-activity-log", function (e) {
        var n = {
          component: Promise.all([o.e("module-activity-home-home~module-ai-face-fusion-home-home~module-answer-answer-log-answer-log~module~f7b76ac1"), o.e("module-guess-log-activity-log")]).then(function () {
            return e(o("d17f"));
          }.bind(null, o)).catch(o.oe),
          delay: __uniConfig["async"].delay,
          timeout: __uniConfig["async"].timeout
        };
        return __uniConfig["async"]["loading"] && (n.loading = {
          name: "SystemAsyncLoading",
          render: function (e) {
            return e(__uniConfig["async"]["loading"]);
          }
        }), __uniConfig["async"]["error"] && (n.error = {
          name: "SystemAsyncError",
          render: function (e) {
            return e(__uniConfig["async"]["error"]);
          }
        }), n;
      }), t.default.component("module-guess-home-pk", function (e) {
        var n = {
          component: Promise.all([o.e("module-activity-home-home~module-ai-face-fusion-home-home~module-answer-answer-log-answer-log~module~f7b76ac1"), o.e("module-activity-home-home~module-answer-home-home~module-answer-question-question~module-article-tas~3c43a7bb"), o.e("module-activity-home-home~module-answer-home-home~module-answer-question-question~module-article-tas~edb4023f"), o.e("module-activity-home-home~module-answer-home-home~module-answer-question-question~module-article-tas~5a13cc39"), o.e("module-guess-home-pk")]).then(function () {
            return e(o("db5f"));
          }.bind(null, o)).catch(o.oe),
          delay: __uniConfig["async"].delay,
          timeout: __uniConfig["async"].timeout
        };
        return __uniConfig["async"]["loading"] && (n.loading = {
          name: "SystemAsyncLoading",
          render: function (e) {
            return e(__uniConfig["async"]["loading"]);
          }
        }), __uniConfig["async"]["error"] && (n.error = {
          name: "SystemAsyncError",
          render: function (e) {
            return e(__uniConfig["async"]["error"]);
          }
        }), n;
      }), t.default.component("module-guess-log-pk-log", function (e) {
        var n = {
          component: Promise.all([o.e("module-activity-home-home~module-ai-face-fusion-home-home~module-answer-answer-log-answer-log~module~f7b76ac1"), o.e("module-ecnyform-activity-log-my-log-list~module-ecnyform-business-list~module-guess-log-pk-log~modul~3d0ba33b"), o.e("module-guess-log-pk-log")]).then(function () {
            return e(o("f6de"));
          }.bind(null, o)).catch(o.oe),
          delay: __uniConfig["async"].delay,
          timeout: __uniConfig["async"].timeout
        };
        return __uniConfig["async"]["loading"] && (n.loading = {
          name: "SystemAsyncLoading",
          render: function (e) {
            return e(__uniConfig["async"]["loading"]);
          }
        }), __uniConfig["async"]["error"] && (n.error = {
          name: "SystemAsyncError",
          render: function (e) {
            return e(__uniConfig["async"]["error"]);
          }
        }), n;
      }), t.default.component("module-photo-home-home", function (e) {
        var n = {
          component: Promise.all([o.e("module-activity-home-home~module-ai-face-fusion-home-home~module-answer-answer-log-answer-log~module~f7b76ac1"), o.e("module-activity-home-home~module-answer-home-home~module-answer-question-question~module-article-tas~3c43a7bb"), o.e("module-activity-home-home~module-answer-home-home~module-answer-question-question~module-article-tas~edb4023f"), o.e("module-activity-home-home~module-answer-home-home~module-answer-question-question~module-article-tas~5a13cc39"), o.e("module-photo-home-home")]).then(function () {
            return e(o("c593"));
          }.bind(null, o)).catch(o.oe),
          delay: __uniConfig["async"].delay,
          timeout: __uniConfig["async"].timeout
        };
        return __uniConfig["async"]["loading"] && (n.loading = {
          name: "SystemAsyncLoading",
          render: function (e) {
            return e(__uniConfig["async"]["loading"]);
          }
        }), __uniConfig["async"]["error"] && (n.error = {
          name: "SystemAsyncError",
          render: function (e) {
            return e(__uniConfig["async"]["error"]);
          }
        }), n;
      }), t.default.component("module-ecnyform-home-home", function (e) {
        var n = {
          component: Promise.all([o.e("module-activity-home-home~module-ai-face-fusion-home-home~module-answer-answer-log-answer-log~module~f7b76ac1"), o.e("module-activity-home-home~module-answer-home-home~module-answer-question-question~module-article-tas~3c43a7bb"), o.e("module-activity-home-home~module-answer-home-home~module-answer-question-question~module-article-tas~edb4023f"), o.e("module-activity-home-home~module-answer-home-home~module-answer-question-question~module-article-tas~5a13cc39"), o.e("module-ecnyform-home-home")]).then(function () {
            return e(o("3062"));
          }.bind(null, o)).catch(o.oe),
          delay: __uniConfig["async"].delay,
          timeout: __uniConfig["async"].timeout
        };
        return __uniConfig["async"]["loading"] && (n.loading = {
          name: "SystemAsyncLoading",
          render: function (e) {
            return e(__uniConfig["async"]["loading"]);
          }
        }), __uniConfig["async"]["error"] && (n.error = {
          name: "SystemAsyncError",
          render: function (e) {
            return e(__uniConfig["async"]["error"]);
          }
        }), n;
      }), t.default.component("module-ecnyform-business-list", function (e) {
        var n = {
          component: Promise.all([o.e("module-activity-home-home~module-ai-face-fusion-home-home~module-answer-answer-log-answer-log~module~f7b76ac1"), o.e("module-ecnyform-activity-log-my-log-list~module-ecnyform-business-list~module-guess-log-pk-log~modul~3d0ba33b"), o.e("module-ecnyform-business-list")]).then(function () {
            return e(o("2745"));
          }.bind(null, o)).catch(o.oe),
          delay: __uniConfig["async"].delay,
          timeout: __uniConfig["async"].timeout
        };
        return __uniConfig["async"]["loading"] && (n.loading = {
          name: "SystemAsyncLoading",
          render: function (e) {
            return e(__uniConfig["async"]["loading"]);
          }
        }), __uniConfig["async"]["error"] && (n.error = {
          name: "SystemAsyncError",
          render: function (e) {
            return e(__uniConfig["async"]["error"]);
          }
        }), n;
      }), t.default.component("module-ecnyform-activity-log-my-log-list", function (e) {
        var n = {
          component: Promise.all([o.e("module-activity-home-home~module-ai-face-fusion-home-home~module-answer-answer-log-answer-log~module~f7b76ac1"), o.e("module-ecnyform-activity-log-my-log-list~module-ecnyform-business-list~module-guess-log-pk-log~modul~3d0ba33b"), o.e("module-ecnyform-activity-log-my-log-list")]).then(function () {
            return e(o("625a"));
          }.bind(null, o)).catch(o.oe),
          delay: __uniConfig["async"].delay,
          timeout: __uniConfig["async"].timeout
        };
        return __uniConfig["async"]["loading"] && (n.loading = {
          name: "SystemAsyncLoading",
          render: function (e) {
            return e(__uniConfig["async"]["loading"]);
          }
        }), __uniConfig["async"]["error"] && (n.error = {
          name: "SystemAsyncError",
          render: function (e) {
            return e(__uniConfig["async"]["error"]);
          }
        }), n;
      }), t.default.component("module-screen-interact-home-home", function (e) {
        var n = {
          component: Promise.all([o.e("module-activity-home-home~module-ai-face-fusion-home-home~module-answer-answer-log-answer-log~module~f7b76ac1"), o.e("module-activity-home-home~module-answer-home-home~module-answer-question-question~module-article-tas~3c43a7bb"), o.e("module-activity-home-home~module-answer-home-home~module-answer-question-question~module-article-tas~edb4023f"), o.e("module-clockin-cert-get-cert~module-cms-news-detail~module-cms-video-detail~module-customer-fjdaily-~4f8830ac"), o.e("module-screen-interact-home-home")]).then(function () {
            return e(o("9deb"));
          }.bind(null, o)).catch(o.oe),
          delay: __uniConfig["async"].delay,
          timeout: __uniConfig["async"].timeout
        };
        return __uniConfig["async"]["loading"] && (n.loading = {
          name: "SystemAsyncLoading",
          render: function (e) {
            return e(__uniConfig["async"]["loading"]);
          }
        }), __uniConfig["async"]["error"] && (n.error = {
          name: "SystemAsyncError",
          render: function (e) {
            return e(__uniConfig["async"]["error"]);
          }
        }), n;
      }), t.default.component("module-screen-interact-win-record-detail-win-record-detail", function (e) {
        var n = {
          component: Promise.all([o.e("module-activity-home-home~module-ai-face-fusion-home-home~module-answer-answer-log-answer-log~module~f7b76ac1"), o.e("module-screen-interact-win-record-detail-win-record-detail")]).then(function () {
            return e(o("7dcc"));
          }.bind(null, o)).catch(o.oe),
          delay: __uniConfig["async"].delay,
          timeout: __uniConfig["async"].timeout
        };
        return __uniConfig["async"]["loading"] && (n.loading = {
          name: "SystemAsyncLoading",
          render: function (e) {
            return e(__uniConfig["async"]["loading"]);
          }
        }), __uniConfig["async"]["error"] && (n.error = {
          name: "SystemAsyncError",
          render: function (e) {
            return e(__uniConfig["async"]["error"]);
          }
        }), n;
      }), t.default.component("module-ai-face-fusion-home-home", function (e) {
        var n = {
          component: Promise.all([o.e("module-activity-home-home~module-ai-face-fusion-home-home~module-answer-answer-log-answer-log~module~f7b76ac1"), o.e("module-ai-face-fusion-home-home")]).then(function () {
            return e(o("93d51"));
          }.bind(null, o)).catch(o.oe),
          delay: __uniConfig["async"].delay,
          timeout: __uniConfig["async"].timeout
        };
        return __uniConfig["async"]["loading"] && (n.loading = {
          name: "SystemAsyncLoading",
          render: function (e) {
            return e(__uniConfig["async"]["loading"]);
          }
        }), __uniConfig["async"]["error"] && (n.error = {
          name: "SystemAsyncError",
          render: function (e) {
            return e(__uniConfig["async"]["error"]);
          }
        }), n;
      }), t.default.component("module-farm-home-home", function (e) {
        var n = {
          component: Promise.all([o.e("module-activity-home-home~module-ai-face-fusion-home-home~module-answer-answer-log-answer-log~module~f7b76ac1"), o.e("module-activity-home-home~module-answer-home-home~module-answer-question-question~module-article-tas~3c43a7bb"), o.e("module-activity-home-home~module-answer-home-home~module-answer-question-question~module-article-tas~edb4023f"), o.e("module-activity-home-home~module-answer-home-home~module-answer-question-question~module-article-tas~5a13cc39"), o.e("module-farm-home-home")]).then(function () {
            return e(o("5ca4"));
          }.bind(null, o)).catch(o.oe),
          delay: __uniConfig["async"].delay,
          timeout: __uniConfig["async"].timeout
        };
        return __uniConfig["async"]["loading"] && (n.loading = {
          name: "SystemAsyncLoading",
          render: function (e) {
            return e(__uniConfig["async"]["loading"]);
          }
        }), __uniConfig["async"]["error"] && (n.error = {
          name: "SystemAsyncError",
          render: function (e) {
            return e(__uniConfig["async"]["error"]);
          }
        }), n;
      }), t.default.component("module-farm-game-game", function (e) {
        var n = {
          component: Promise.all([o.e("module-activity-home-home~module-ai-face-fusion-home-home~module-answer-answer-log-answer-log~module~f7b76ac1"), o.e("module-activity-home-home~module-answer-home-home~module-answer-question-question~module-article-tas~3c43a7bb"), o.e("module-answer-answer-log-answer-detail~module-customer-fhtvn-no-rank-list~module-customer-fhtvn-rank~27a720c1"), o.e("module-farm-game-game~module-farm-goods-exchange-goods-exchange~module-farm-goods-list-goods-list"), o.e("module-farm-game-game")]).then(function () {
            return e(o("8cee"));
          }.bind(null, o)).catch(o.oe),
          delay: __uniConfig["async"].delay,
          timeout: __uniConfig["async"].timeout
        };
        return __uniConfig["async"]["loading"] && (n.loading = {
          name: "SystemAsyncLoading",
          render: function (e) {
            return e(__uniConfig["async"]["loading"]);
          }
        }), __uniConfig["async"]["error"] && (n.error = {
          name: "SystemAsyncError",
          render: function (e) {
            return e(__uniConfig["async"]["error"]);
          }
        }), n;
      }), t.default.component("module-farm-goods-list-goods-list", function (e) {
        var n = {
          component: Promise.all([o.e("module-activity-home-home~module-ai-face-fusion-home-home~module-answer-answer-log-answer-log~module~f7b76ac1"), o.e("module-farm-game-game~module-farm-goods-exchange-goods-exchange~module-farm-goods-list-goods-list"), o.e("module-farm-goods-exchange-goods-exchange~module-farm-goods-list-goods-list"), o.e("module-farm-goods-list-goods-list")]).then(function () {
            return e(o("8670"));
          }.bind(null, o)).catch(o.oe),
          delay: __uniConfig["async"].delay,
          timeout: __uniConfig["async"].timeout
        };
        return __uniConfig["async"]["loading"] && (n.loading = {
          name: "SystemAsyncLoading",
          render: function (e) {
            return e(__uniConfig["async"]["loading"]);
          }
        }), __uniConfig["async"]["error"] && (n.error = {
          name: "SystemAsyncError",
          render: function (e) {
            return e(__uniConfig["async"]["error"]);
          }
        }), n;
      }), t.default.component("module-farm-goods-exchange-goods-exchange", function (e) {
        var n = {
          component: Promise.all([o.e("module-activity-home-home~module-ai-face-fusion-home-home~module-answer-answer-log-answer-log~module~f7b76ac1"), o.e("module-clockin-cert-get-cert~module-cms-news-detail~module-cms-video-detail~module-customer-fjdaily-~4f8830ac"), o.e("module-farm-game-game~module-farm-goods-exchange-goods-exchange~module-farm-goods-list-goods-list"), o.e("module-farm-goods-exchange-goods-exchange~module-farm-goods-list-goods-list"), o.e("module-farm-goods-exchange-goods-exchange")]).then(function () {
            return e(o("0244"));
          }.bind(null, o)).catch(o.oe),
          delay: __uniConfig["async"].delay,
          timeout: __uniConfig["async"].timeout
        };
        return __uniConfig["async"]["loading"] && (n.loading = {
          name: "SystemAsyncLoading",
          render: function (e) {
            return e(__uniConfig["async"]["loading"]);
          }
        }), __uniConfig["async"]["error"] && (n.error = {
          name: "SystemAsyncError",
          render: function (e) {
            return e(__uniConfig["async"]["error"]);
          }
        }), n;
      }), t.default.component("module-farm-kinds-home-home", function (e) {
        var n = {
          component: Promise.all([o.e("module-activity-home-home~module-ai-face-fusion-home-home~module-answer-answer-log-answer-log~module~f7b76ac1"), o.e("module-activity-home-home~module-answer-home-home~module-answer-question-question~module-article-tas~3c43a7bb"), o.e("module-activity-home-home~module-answer-home-home~module-answer-question-question~module-article-tas~edb4023f"), o.e("module-activity-home-home~module-answer-home-home~module-answer-question-question~module-article-tas~5a13cc39"), o.e("module-farm-kinds-home-home")]).then(function () {
            return e(o("99db"));
          }.bind(null, o)).catch(o.oe),
          delay: __uniConfig["async"].delay,
          timeout: __uniConfig["async"].timeout
        };
        return __uniConfig["async"]["loading"] && (n.loading = {
          name: "SystemAsyncLoading",
          render: function (e) {
            return e(__uniConfig["async"]["loading"]);
          }
        }), __uniConfig["async"]["error"] && (n.error = {
          name: "SystemAsyncError",
          render: function (e) {
            return e(__uniConfig["async"]["error"]);
          }
        }), n;
      }), t.default.component("module-farm-kinds-goods-list-goods-list", function (e) {
        var n = {
          component: Promise.all([o.e("module-activity-home-home~module-ai-face-fusion-home-home~module-answer-answer-log-answer-log~module~f7b76ac1"), o.e("module-farm-kinds-goods-exchange-goods-exchange~module-farm-kinds-goods-list-goods-list"), o.e("module-farm-kinds-goods-list-goods-list")]).then(function () {
            return e(o("4307"));
          }.bind(null, o)).catch(o.oe),
          delay: __uniConfig["async"].delay,
          timeout: __uniConfig["async"].timeout
        };
        return __uniConfig["async"]["loading"] && (n.loading = {
          name: "SystemAsyncLoading",
          render: function (e) {
            return e(__uniConfig["async"]["loading"]);
          }
        }), __uniConfig["async"]["error"] && (n.error = {
          name: "SystemAsyncError",
          render: function (e) {
            return e(__uniConfig["async"]["error"]);
          }
        }), n;
      }), t.default.component("module-farm-kinds-goods-exchange-goods-exchange", function (e) {
        var n = {
          component: Promise.all([o.e("module-activity-home-home~module-ai-face-fusion-home-home~module-answer-answer-log-answer-log~module~f7b76ac1"), o.e("module-clockin-cert-get-cert~module-cms-news-detail~module-cms-video-detail~module-customer-fjdaily-~4f8830ac"), o.e("module-farm-kinds-goods-exchange-goods-exchange~module-farm-kinds-goods-list-goods-list"), o.e("module-farm-kinds-goods-exchange-goods-exchange")]).then(function () {
            return e(o("849a"));
          }.bind(null, o)).catch(o.oe),
          delay: __uniConfig["async"].delay,
          timeout: __uniConfig["async"].timeout
        };
        return __uniConfig["async"]["loading"] && (n.loading = {
          name: "SystemAsyncLoading",
          render: function (e) {
            return e(__uniConfig["async"]["loading"]);
          }
        }), __uniConfig["async"]["error"] && (n.error = {
          name: "SystemAsyncError",
          render: function (e) {
            return e(__uniConfig["async"]["error"]);
          }
        }), n;
      }), t.default.component("module-word-home-home", function (e) {
        var n = {
          component: Promise.all([o.e("module-activity-home-home~module-ai-face-fusion-home-home~module-answer-answer-log-answer-log~module~f7b76ac1"), o.e("module-activity-home-home~module-answer-home-home~module-answer-question-question~module-article-tas~3c43a7bb"), o.e("module-activity-home-home~module-answer-home-home~module-answer-question-question~module-article-tas~edb4023f"), o.e("module-activity-home-home~module-answer-home-home~module-answer-question-question~module-article-tas~5a13cc39"), o.e("module-word-home-home")]).then(function () {
            return e(o("3f4c"));
          }.bind(null, o)).catch(o.oe),
          delay: __uniConfig["async"].delay,
          timeout: __uniConfig["async"].timeout
        };
        return __uniConfig["async"]["loading"] && (n.loading = {
          name: "SystemAsyncLoading",
          render: function (e) {
            return e(__uniConfig["async"]["loading"]);
          }
        }), __uniConfig["async"]["error"] && (n.error = {
          name: "SystemAsyncError",
          render: function (e) {
            return e(__uniConfig["async"]["error"]);
          }
        }), n;
      }), t.default.component("module-word-game-game", function (e) {
        var n = {
          component: Promise.all([o.e("module-activity-home-home~module-ai-face-fusion-home-home~module-answer-answer-log-answer-log~module~f7b76ac1"), o.e("module-activity-home-home~module-answer-home-home~module-answer-question-question~module-article-tas~3c43a7bb"), o.e("module-clockin-cert-get-cert~module-cms-news-detail~module-cms-video-detail~module-customer-fjdaily-~4f8830ac"), o.e("module-clockin-log-log~module-cms-news-detail~module-cms-video-detail~module-customer-fjdaily-clocki~540cf0d6"), o.e("module-word-game-game")]).then(function () {
            return e(o("d9a1"));
          }.bind(null, o)).catch(o.oe),
          delay: __uniConfig["async"].delay,
          timeout: __uniConfig["async"].timeout
        };
        return __uniConfig["async"]["loading"] && (n.loading = {
          name: "SystemAsyncLoading",
          render: function (e) {
            return e(__uniConfig["async"]["loading"]);
          }
        }), __uniConfig["async"]["error"] && (n.error = {
          name: "SystemAsyncError",
          render: function (e) {
            return e(__uniConfig["async"]["error"]);
          }
        }), n;
      }), t.default.component("module-article-task-home-home", function (e) {
        var n = {
          component: Promise.all([o.e("module-activity-home-home~module-ai-face-fusion-home-home~module-answer-answer-log-answer-log~module~f7b76ac1"), o.e("module-activity-home-home~module-answer-home-home~module-answer-question-question~module-article-tas~3c43a7bb"), o.e("module-activity-home-home~module-answer-home-home~module-answer-question-question~module-article-tas~edb4023f"), o.e("module-activity-home-home~module-answer-home-home~module-answer-question-question~module-article-tas~5a13cc39"), o.e("module-article-task-home-home")]).then(function () {
            return e(o("e53c"));
          }.bind(null, o)).catch(o.oe),
          delay: __uniConfig["async"].delay,
          timeout: __uniConfig["async"].timeout
        };
        return __uniConfig["async"]["loading"] && (n.loading = {
          name: "SystemAsyncLoading",
          render: function (e) {
            return e(__uniConfig["async"]["loading"]);
          }
        }), __uniConfig["async"]["error"] && (n.error = {
          name: "SystemAsyncError",
          render: function (e) {
            return e(__uniConfig["async"]["error"]);
          }
        }), n;
      }), t.default.component("module-article-task-single-single-task", function (e) {
        var n = {
          component: o.e("module-article-task-single-single-task").then(function () {
            return e(o("3625"));
          }.bind(null, o)).catch(o.oe),
          delay: __uniConfig["async"].delay,
          timeout: __uniConfig["async"].timeout
        };
        return __uniConfig["async"]["loading"] && (n.loading = {
          name: "SystemAsyncLoading",
          render: function (e) {
            return e(__uniConfig["async"]["loading"]);
          }
        }), __uniConfig["async"]["error"] && (n.error = {
          name: "SystemAsyncError",
          render: function (e) {
            return e(__uniConfig["async"]["error"]);
          }
        }), n;
      }), t.default.component("module-venue-clockin-home-home", function (e) {
        var n = {
          component: Promise.all([o.e("module-activity-home-home~module-ai-face-fusion-home-home~module-answer-answer-log-answer-log~module~f7b76ac1"), o.e("module-activity-home-home~module-answer-home-home~module-answer-question-question~module-article-tas~3c43a7bb"), o.e("module-activity-home-home~module-answer-home-home~module-answer-question-question~module-article-tas~edb4023f"), o.e("module-activity-home-home~module-answer-home-home~module-answer-question-question~module-article-tas~5a13cc39"), o.e("module-venue-clockin-home-home")]).then(function () {
            return e(o("bc80"));
          }.bind(null, o)).catch(o.oe),
          delay: __uniConfig["async"].delay,
          timeout: __uniConfig["async"].timeout
        };
        return __uniConfig["async"]["loading"] && (n.loading = {
          name: "SystemAsyncLoading",
          render: function (e) {
            return e(__uniConfig["async"]["loading"]);
          }
        }), __uniConfig["async"]["error"] && (n.error = {
          name: "SystemAsyncError",
          render: function (e) {
            return e(__uniConfig["async"]["error"]);
          }
        }), n;
      }), t.default.component("module-venue-clockin-detail-detail", function (e) {
        var n = {
          component: Promise.all([o.e("module-activity-home-home~module-ai-face-fusion-home-home~module-answer-answer-log-answer-log~module~f7b76ac1"), o.e("module-activity-home-home~module-answer-home-home~module-answer-question-question~module-article-tas~3c43a7bb"), o.e("module-clockin-cert-get-cert~module-cms-news-detail~module-cms-video-detail~module-customer-fjdaily-~4f8830ac"), o.e("module-clockin-log-log~module-cms-news-detail~module-cms-video-detail~module-customer-fjdaily-clocki~540cf0d6"), o.e("module-venue-clockin-detail-detail")]).then(function () {
            return e(o("2eaa"));
          }.bind(null, o)).catch(o.oe),
          delay: __uniConfig["async"].delay,
          timeout: __uniConfig["async"].timeout
        };
        return __uniConfig["async"]["loading"] && (n.loading = {
          name: "SystemAsyncLoading",
          render: function (e) {
            return e(__uniConfig["async"]["loading"]);
          }
        }), __uniConfig["async"]["error"] && (n.error = {
          name: "SystemAsyncError",
          render: function (e) {
            return e(__uniConfig["async"]["error"]);
          }
        }), n;
      }), t.default.component("module-booking-lottery-home-home", function (e) {
        var n = {
          component: Promise.all([o.e("module-activity-home-home~module-ai-face-fusion-home-home~module-answer-answer-log-answer-log~module~f7b76ac1"), o.e("module-activity-home-home~module-answer-home-home~module-answer-question-question~module-article-tas~3c43a7bb"), o.e("module-activity-home-home~module-answer-home-home~module-answer-question-question~module-article-tas~edb4023f"), o.e("module-activity-home-home~module-answer-home-home~module-answer-question-question~module-article-tas~5a13cc39"), o.e("module-booking-lottery-home-home")]).then(function () {
            return e(o("525d"));
          }.bind(null, o)).catch(o.oe),
          delay: __uniConfig["async"].delay,
          timeout: __uniConfig["async"].timeout
        };
        return __uniConfig["async"]["loading"] && (n.loading = {
          name: "SystemAsyncLoading",
          render: function (e) {
            return e(__uniConfig["async"]["loading"]);
          }
        }), __uniConfig["async"]["error"] && (n.error = {
          name: "SystemAsyncError",
          render: function (e) {
            return e(__uniConfig["async"]["error"]);
          }
        }), n;
      }), t.default.component("module-booking-lottery-task-task", function (e) {
        var n = {
          component: o.e("module-booking-lottery-task-task").then(function () {
            return e(o("e22a"));
          }.bind(null, o)).catch(o.oe),
          delay: __uniConfig["async"].delay,
          timeout: __uniConfig["async"].timeout
        };
        return __uniConfig["async"]["loading"] && (n.loading = {
          name: "SystemAsyncLoading",
          render: function (e) {
            return e(__uniConfig["async"]["loading"]);
          }
        }), __uniConfig["async"]["error"] && (n.error = {
          name: "SystemAsyncError",
          render: function (e) {
            return e(__uniConfig["async"]["error"]);
          }
        }), n;
      }), t.default.component("module-sdk-demo-unisdk", function (e) {
        var n = {
          component: Promise.all([o.e("module-activity-home-home~module-ai-face-fusion-home-home~module-answer-answer-log-answer-log~module~f7b76ac1"), o.e("module-sdk-demo-unisdk")]).then(function () {
            return e(o("bea6"));
          }.bind(null, o)).catch(o.oe),
          delay: __uniConfig["async"].delay,
          timeout: __uniConfig["async"].timeout
        };
        return __uniConfig["async"]["loading"] && (n.loading = {
          name: "SystemAsyncLoading",
          render: function (e) {
            return e(__uniConfig["async"]["loading"]);
          }
        }), __uniConfig["async"]["error"] && (n.error = {
          name: "SystemAsyncError",
          render: function (e) {
            return e(__uniConfig["async"]["error"]);
          }
        }), n;
      }), t.default.component("module-sdk-demo-jssdk", function (e) {
        var n = {
          component: Promise.all([o.e("module-activity-home-home~module-ai-face-fusion-home-home~module-answer-answer-log-answer-log~module~f7b76ac1"), o.e("module-sdk-demo-jssdk")]).then(function () {
            return e(o("e324"));
          }.bind(null, o)).catch(o.oe),
          delay: __uniConfig["async"].delay,
          timeout: __uniConfig["async"].timeout
        };
        return __uniConfig["async"]["loading"] && (n.loading = {
          name: "SystemAsyncLoading",
          render: function (e) {
            return e(__uniConfig["async"]["loading"]);
          }
        }), __uniConfig["async"]["error"] && (n.error = {
          name: "SystemAsyncError",
          render: function (e) {
            return e(__uniConfig["async"]["error"]);
          }
        }), n;
      }), t.default.component("module-sdk-demo-smartcitysdk", function (e) {
        var n = {
          component: o.e("module-sdk-demo-smartcitysdk").then(function () {
            return e(o("b14b"));
          }.bind(null, o)).catch(o.oe),
          delay: __uniConfig["async"].delay,
          timeout: __uniConfig["async"].timeout
        };
        return __uniConfig["async"]["loading"] && (n.loading = {
          name: "SystemAsyncLoading",
          render: function (e) {
            return e(__uniConfig["async"]["loading"]);
          }
        }), __uniConfig["async"]["error"] && (n.error = {
          name: "SystemAsyncError",
          render: function (e) {
            return e(__uniConfig["async"]["error"]);
          }
        }), n;
      }), t.default.component("module-sdk-demo-cmstopsdk", function (e) {
        var n = {
          component: o.e("module-sdk-demo-cmstopsdk").then(function () {
            return e(o("4d0a"));
          }.bind(null, o)).catch(o.oe),
          delay: __uniConfig["async"].delay,
          timeout: __uniConfig["async"].timeout
        };
        return __uniConfig["async"]["loading"] && (n.loading = {
          name: "SystemAsyncLoading",
          render: function (e) {
            return e(__uniConfig["async"]["loading"]);
          }
        }), __uniConfig["async"]["error"] && (n.error = {
          name: "SystemAsyncError",
          render: function (e) {
            return e(__uniConfig["async"]["error"]);
          }
        }), n;
      }), t.default.component("module-sdk-demo-cmstopnewsdk", function (e) {
        var n = {
          component: o.e("module-sdk-demo-cmstopnewsdk").then(function () {
            return e(o("67267"));
          }.bind(null, o)).catch(o.oe),
          delay: __uniConfig["async"].delay,
          timeout: __uniConfig["async"].timeout
        };
        return __uniConfig["async"]["loading"] && (n.loading = {
          name: "SystemAsyncLoading",
          render: function (e) {
            return e(__uniConfig["async"]["loading"]);
          }
        }), __uniConfig["async"]["error"] && (n.error = {
          name: "SystemAsyncError",
          render: function (e) {
            return e(__uniConfig["async"]["error"]);
          }
        }), n;
      }), t.default.component("module-sdk-demo-fluttersdk", function (e) {
        var n = {
          component: Promise.all([o.e("module-activity-home-home~module-ai-face-fusion-home-home~module-answer-answer-log-answer-log~module~f7b76ac1"), o.e("module-sdk-demo-fluttersdk")]).then(function () {
            return e(o("a18b"));
          }.bind(null, o)).catch(o.oe),
          delay: __uniConfig["async"].delay,
          timeout: __uniConfig["async"].timeout
        };
        return __uniConfig["async"]["loading"] && (n.loading = {
          name: "SystemAsyncLoading",
          render: function (e) {
            return e(__uniConfig["async"]["loading"]);
          }
        }), __uniConfig["async"]["error"] && (n.error = {
          name: "SystemAsyncError",
          render: function (e) {
            return e(__uniConfig["async"]["error"]);
          }
        }), n;
      }), t.default.component("module-sdk-demo-yongpaisdk", function (e) {
        var n = {
          component: o.e("module-sdk-demo-yongpaisdk").then(function () {
            return e(o("4678"));
          }.bind(null, o)).catch(o.oe),
          delay: __uniConfig["async"].delay,
          timeout: __uniConfig["async"].timeout
        };
        return __uniConfig["async"]["loading"] && (n.loading = {
          name: "SystemAsyncLoading",
          render: function (e) {
            return e(__uniConfig["async"]["loading"]);
          }
        }), __uniConfig["async"]["error"] && (n.error = {
          name: "SystemAsyncError",
          render: function (e) {
            return e(__uniConfig["async"]["error"]);
          }
        }), n;
      }), t.default.component("module-sdk-demo-nbtvsdk", function (e) {
        var n = {
          component: o.e("module-sdk-demo-nbtvsdk").then(function () {
            return e(o("c9da"));
          }.bind(null, o)).catch(o.oe),
          delay: __uniConfig["async"].delay,
          timeout: __uniConfig["async"].timeout
        };
        return __uniConfig["async"]["loading"] && (n.loading = {
          name: "SystemAsyncLoading",
          render: function (e) {
            return e(__uniConfig["async"]["loading"]);
          }
        }), __uniConfig["async"]["error"] && (n.error = {
          name: "SystemAsyncError",
          render: function (e) {
            return e(__uniConfig["async"]["error"]);
          }
        }), n;
      }), t.default.component("module-sdk-demo-tianmusdk", function (e) {
        var n = {
          component: Promise.all([o.e("module-activity-home-home~module-ai-face-fusion-home-home~module-answer-answer-log-answer-log~module~f7b76ac1"), o.e("module-sdk-demo-tianmusdk")]).then(function () {
            return e(o("251f"));
          }.bind(null, o)).catch(o.oe),
          delay: __uniConfig["async"].delay,
          timeout: __uniConfig["async"].timeout
        };
        return __uniConfig["async"]["loading"] && (n.loading = {
          name: "SystemAsyncLoading",
          render: function (e) {
            return e(__uniConfig["async"]["loading"]);
          }
        }), __uniConfig["async"]["error"] && (n.error = {
          name: "SystemAsyncError",
          render: function (e) {
            return e(__uniConfig["async"]["error"]);
          }
        }), n;
      }), t.default.component("module-sdk-demo-trssdk", function (e) {
        var n = {
          component: o.e("module-sdk-demo-trssdk").then(function () {
            return e(o("6627"));
          }.bind(null, o)).catch(o.oe),
          delay: __uniConfig["async"].delay,
          timeout: __uniConfig["async"].timeout
        };
        return __uniConfig["async"]["loading"] && (n.loading = {
          name: "SystemAsyncLoading",
          render: function (e) {
            return e(__uniConfig["async"]["loading"]);
          }
        }), __uniConfig["async"]["error"] && (n.error = {
          name: "SystemAsyncError",
          render: function (e) {
            return e(__uniConfig["async"]["error"]);
          }
        }), n;
      }), t.default.component("module-sdk-demo-tianmasdk", function (e) {
        var n = {
          component: o.e("module-sdk-demo-tianmasdk").then(function () {
            return e(o("d999"));
          }.bind(null, o)).catch(o.oe),
          delay: __uniConfig["async"].delay,
          timeout: __uniConfig["async"].timeout
        };
        return __uniConfig["async"]["loading"] && (n.loading = {
          name: "SystemAsyncLoading",
          render: function (e) {
            return e(__uniConfig["async"]["loading"]);
          }
        }), __uniConfig["async"]["error"] && (n.error = {
          name: "SystemAsyncError",
          render: function (e) {
            return e(__uniConfig["async"]["error"]);
          }
        }), n;
      }), t.default.component("module-sdk-demo-injssdk", function (e) {
        var n = {
          component: o.e("module-sdk-demo-injssdk").then(function () {
            return e(o("80f1"));
          }.bind(null, o)).catch(o.oe),
          delay: __uniConfig["async"].delay,
          timeout: __uniConfig["async"].timeout
        };
        return __uniConfig["async"]["loading"] && (n.loading = {
          name: "SystemAsyncLoading",
          render: function (e) {
            return e(__uniConfig["async"]["loading"]);
          }
        }), __uniConfig["async"]["error"] && (n.error = {
          name: "SystemAsyncError",
          render: function (e) {
            return e(__uniConfig["async"]["error"]);
          }
        }), n;
      }), t.default.component("module-sdk-demo-fangzhengsdk", function (e) {
        var n = {
          component: o.e("module-sdk-demo-fangzhengsdk").then(function () {
            return e(o("a957"));
          }.bind(null, o)).catch(o.oe),
          delay: __uniConfig["async"].delay,
          timeout: __uniConfig["async"].timeout
        };
        return __uniConfig["async"]["loading"] && (n.loading = {
          name: "SystemAsyncLoading",
          render: function (e) {
            return e(__uniConfig["async"]["loading"]);
          }
        }), __uniConfig["async"]["error"] && (n.error = {
          name: "SystemAsyncError",
          render: function (e) {
            return e(__uniConfig["async"]["error"]);
          }
        }), n;
      }), t.default.component("module-sdk-demo-xingkongyunsdk", function (e) {
        var n = {
          component: o.e("module-sdk-demo-xingkongyunsdk").then(function () {
            return e(o("b6b5"));
          }.bind(null, o)).catch(o.oe),
          delay: __uniConfig["async"].delay,
          timeout: __uniConfig["async"].timeout
        };
        return __uniConfig["async"]["loading"] && (n.loading = {
          name: "SystemAsyncLoading",
          render: function (e) {
            return e(__uniConfig["async"]["loading"]);
          }
        }), __uniConfig["async"]["error"] && (n.error = {
          name: "SystemAsyncError",
          render: function (e) {
            return e(__uniConfig["async"]["error"]);
          }
        }), n;
      }), t.default.component("module-sdk-demo-cmstopv3sdk", function (e) {
        var n = {
          component: Promise.all([o.e("module-activity-home-home~module-ai-face-fusion-home-home~module-answer-answer-log-answer-log~module~f7b76ac1"), o.e("module-sdk-demo-cmstopv3sdk")]).then(function () {
            return e(o("1154"));
          }.bind(null, o)).catch(o.oe),
          delay: __uniConfig["async"].delay,
          timeout: __uniConfig["async"].timeout
        };
        return __uniConfig["async"]["loading"] && (n.loading = {
          name: "SystemAsyncLoading",
          render: function (e) {
            return e(__uniConfig["async"]["loading"]);
          }
        }), __uniConfig["async"]["error"] && (n.error = {
          name: "SystemAsyncError",
          render: function (e) {
            return e(__uniConfig["async"]["error"]);
          }
        }), n;
      }), t.default.component("module-sdk-demo-xiuzhousdk", function (e) {
        var n = {
          component: Promise.all([o.e("module-activity-home-home~module-ai-face-fusion-home-home~module-answer-answer-log-answer-log~module~f7b76ac1"), o.e("module-sdk-demo-xiuzhousdk")]).then(function () {
            return e(o("3a15"));
          }.bind(null, o)).catch(o.oe),
          delay: __uniConfig["async"].delay,
          timeout: __uniConfig["async"].timeout
        };
        return __uniConfig["async"]["loading"] && (n.loading = {
          name: "SystemAsyncLoading",
          render: function (e) {
            return e(__uniConfig["async"]["loading"]);
          }
        }), __uniConfig["async"]["error"] && (n.error = {
          name: "SystemAsyncError",
          render: function (e) {
            return e(__uniConfig["async"]["error"]);
          }
        }), n;
      }), t.default.component("module-sdk-demo-ziyangsdk", function (e) {
        var n = {
          component: Promise.all([o.e("module-activity-home-home~module-ai-face-fusion-home-home~module-answer-answer-log-answer-log~module~f7b76ac1"), o.e("module-sdk-demo-ziyangsdk")]).then(function () {
            return e(o("6325"));
          }.bind(null, o)).catch(o.oe),
          delay: __uniConfig["async"].delay,
          timeout: __uniConfig["async"].timeout
        };
        return __uniConfig["async"]["loading"] && (n.loading = {
          name: "SystemAsyncLoading",
          render: function (e) {
            return e(__uniConfig["async"]["loading"]);
          }
        }), __uniConfig["async"]["error"] && (n.error = {
          name: "SystemAsyncError",
          render: function (e) {
            return e(__uniConfig["async"]["error"]);
          }
        }), n;
      }), t.default.component("module-sdk-demo-yantaisdk", function (e) {
        var n = {
          component: Promise.all([o.e("module-activity-home-home~module-ai-face-fusion-home-home~module-answer-answer-log-answer-log~module~f7b76ac1"), o.e("module-sdk-demo-yantaisdk")]).then(function () {
            return e(o("4ecc"));
          }.bind(null, o)).catch(o.oe),
          delay: __uniConfig["async"].delay,
          timeout: __uniConfig["async"].timeout
        };
        return __uniConfig["async"]["loading"] && (n.loading = {
          name: "SystemAsyncLoading",
          render: function (e) {
            return e(__uniConfig["async"]["loading"]);
          }
        }), __uniConfig["async"]["error"] && (n.error = {
          name: "SystemAsyncError",
          render: function (e) {
            return e(__uniConfig["async"]["error"]);
          }
        }), n;
      }), t.default.component("module-customer-xmtv-flowers", function (e) {
        var n = {
          component: Promise.all([o.e("module-activity-home-home~module-ai-face-fusion-home-home~module-answer-answer-log-answer-log~module~f7b76ac1"), o.e("module-clockin-cert-get-cert~module-cms-news-detail~module-cms-video-detail~module-customer-fjdaily-~4f8830ac"), o.e("module-clockin-log-log~module-cms-news-detail~module-cms-video-detail~module-customer-fjdaily-clocki~540cf0d6"), o.e("module-clockin-cert-get-cert~module-customer-xmtv-flowers~module-guandan-rank-rank-detail~module-lot~911add6f"), o.e("module-customer-xmtv-flowers")]).then(function () {
            return e(o("a884"));
          }.bind(null, o)).catch(o.oe),
          delay: __uniConfig["async"].delay,
          timeout: __uniConfig["async"].timeout
        };
        return __uniConfig["async"]["loading"] && (n.loading = {
          name: "SystemAsyncLoading",
          render: function (e) {
            return e(__uniConfig["async"]["loading"]);
          }
        }), __uniConfig["async"]["error"] && (n.error = {
          name: "SystemAsyncError",
          render: function (e) {
            return e(__uniConfig["async"]["error"]);
          }
        }), n;
      }), t.default.component("module-customer-xmtv-short-videos", function (e) {
        var n = {
          component: Promise.all([o.e("module-activity-home-home~module-ai-face-fusion-home-home~module-answer-answer-log-answer-log~module~f7b76ac1"), o.e("module-customer-xmtv-publicize~module-customer-xmtv-short-videos"), o.e("module-customer-xmtv-short-videos")]).then(function () {
            return e(o("a84a"));
          }.bind(null, o)).catch(o.oe),
          delay: __uniConfig["async"].delay,
          timeout: __uniConfig["async"].timeout
        };
        return __uniConfig["async"]["loading"] && (n.loading = {
          name: "SystemAsyncLoading",
          render: function (e) {
            return e(__uniConfig["async"]["loading"]);
          }
        }), __uniConfig["async"]["error"] && (n.error = {
          name: "SystemAsyncError",
          render: function (e) {
            return e(__uniConfig["async"]["error"]);
          }
        }), n;
      }), t.default.component("module-customer-xmtv-publicize", function (e) {
        var n = {
          component: Promise.all([o.e("module-customer-xmtv-publicize~module-customer-xmtv-short-videos"), o.e("module-customer-xmtv-publicize")]).then(function () {
            return e(o("78ec"));
          }.bind(null, o)).catch(o.oe),
          delay: __uniConfig["async"].delay,
          timeout: __uniConfig["async"].timeout
        };
        return __uniConfig["async"]["loading"] && (n.loading = {
          name: "SystemAsyncLoading",
          render: function (e) {
            return e(__uniConfig["async"]["loading"]);
          }
        }), __uniConfig["async"]["error"] && (n.error = {
          name: "SystemAsyncError",
          render: function (e) {
            return e(__uniConfig["async"]["error"]);
          }
        }), n;
      }), t.default.component("module-customer-kannh-game", function (e) {
        var n = {
          component: o.e("module-customer-kannh-game").then(function () {
            return e(o("5838"));
          }.bind(null, o)).catch(o.oe),
          delay: __uniConfig["async"].delay,
          timeout: __uniConfig["async"].timeout
        };
        return __uniConfig["async"]["loading"] && (n.loading = {
          name: "SystemAsyncLoading",
          render: function (e) {
            return e(__uniConfig["async"]["loading"]);
          }
        }), __uniConfig["async"]["error"] && (n.error = {
          name: "SystemAsyncError",
          render: function (e) {
            return e(__uniConfig["async"]["error"]);
          }
        }), n;
      }), t.default.component("module-customer-fjdaily-guide", function (e) {
        var n = {
          component: o.e("module-customer-fjdaily-guide").then(function () {
            return e(o("fe8a"));
          }.bind(null, o)).catch(o.oe),
          delay: __uniConfig["async"].delay,
          timeout: __uniConfig["async"].timeout
        };
        return __uniConfig["async"]["loading"] && (n.loading = {
          name: "SystemAsyncLoading",
          render: function (e) {
            return e(__uniConfig["async"]["loading"]);
          }
        }), __uniConfig["async"]["error"] && (n.error = {
          name: "SystemAsyncError",
          render: function (e) {
            return e(__uniConfig["async"]["error"]);
          }
        }), n;
      }), t.default.component("module-customer-fjdaily-home", function (e) {
        var n = {
          component: Promise.all([o.e("module-activity-home-home~module-ai-face-fusion-home-home~module-answer-answer-log-answer-log~module~f7b76ac1"), o.e("module-activity-home-home~module-answer-home-home~module-answer-question-question~module-article-tas~3c43a7bb"), o.e("module-activity-home-home~module-answer-home-home~module-answer-question-question~module-article-tas~edb4023f"), o.e("module-activity-home-home~module-answer-home-home~module-answer-question-question~module-article-tas~5a13cc39"), o.e("module-customer-fjdaily-home")]).then(function () {
            return e(o("b2e0"));
          }.bind(null, o)).catch(o.oe),
          delay: __uniConfig["async"].delay,
          timeout: __uniConfig["async"].timeout
        };
        return __uniConfig["async"]["loading"] && (n.loading = {
          name: "SystemAsyncLoading",
          render: function (e) {
            return e(__uniConfig["async"]["loading"]);
          }
        }), __uniConfig["async"]["error"] && (n.error = {
          name: "SystemAsyncError",
          render: function (e) {
            return e(__uniConfig["async"]["error"]);
          }
        }), n;
      }), t.default.component("module-customer-fjdaily-clockin", function (e) {
        var n = {
          component: Promise.all([o.e("module-activity-home-home~module-ai-face-fusion-home-home~module-answer-answer-log-answer-log~module~f7b76ac1"), o.e("module-activity-home-home~module-answer-home-home~module-answer-question-question~module-article-tas~3c43a7bb"), o.e("module-clockin-cert-get-cert~module-cms-news-detail~module-cms-video-detail~module-customer-fjdaily-~4f8830ac"), o.e("module-clockin-log-log~module-cms-news-detail~module-cms-video-detail~module-customer-fjdaily-clocki~540cf0d6"), o.e("module-customer-fjdaily-clockin")]).then(function () {
            return e(o("6ed96"));
          }.bind(null, o)).catch(o.oe),
          delay: __uniConfig["async"].delay,
          timeout: __uniConfig["async"].timeout
        };
        return __uniConfig["async"]["loading"] && (n.loading = {
          name: "SystemAsyncLoading",
          render: function (e) {
            return e(__uniConfig["async"]["loading"]);
          }
        }), __uniConfig["async"]["error"] && (n.error = {
          name: "SystemAsyncError",
          render: function (e) {
            return e(__uniConfig["async"]["error"]);
          }
        }), n;
      }), t.default.component("module-customer-fhtvn-rank-list", function (e) {
        var n = {
          component: Promise.all([o.e("module-activity-home-home~module-ai-face-fusion-home-home~module-answer-answer-log-answer-log~module~f7b76ac1"), o.e("module-answer-answer-log-answer-detail~module-customer-fhtvn-no-rank-list~module-customer-fhtvn-rank~27a720c1"), o.e("module-customer-fhtvn-no-rank-list~module-customer-fhtvn-rank-list"), o.e("module-customer-fhtvn-rank-list")]).then(function () {
            return e(o("69c3"));
          }.bind(null, o)).catch(o.oe),
          delay: __uniConfig["async"].delay,
          timeout: __uniConfig["async"].timeout
        };
        return __uniConfig["async"]["loading"] && (n.loading = {
          name: "SystemAsyncLoading",
          render: function (e) {
            return e(__uniConfig["async"]["loading"]);
          }
        }), __uniConfig["async"]["error"] && (n.error = {
          name: "SystemAsyncError",
          render: function (e) {
            return e(__uniConfig["async"]["error"]);
          }
        }), n;
      }), t.default.component("module-customer-fhtvn-no-rank-list", function (e) {
        var n = {
          component: Promise.all([o.e("module-activity-home-home~module-ai-face-fusion-home-home~module-answer-answer-log-answer-log~module~f7b76ac1"), o.e("module-answer-answer-log-answer-detail~module-customer-fhtvn-no-rank-list~module-customer-fhtvn-rank~27a720c1"), o.e("module-customer-fhtvn-no-rank-list~module-customer-fhtvn-rank-list"), o.e("module-customer-fhtvn-no-rank-list")]).then(function () {
            return e(o("323a"));
          }.bind(null, o)).catch(o.oe),
          delay: __uniConfig["async"].delay,
          timeout: __uniConfig["async"].timeout
        };
        return __uniConfig["async"]["loading"] && (n.loading = {
          name: "SystemAsyncLoading",
          render: function (e) {
            return e(__uniConfig["async"]["loading"]);
          }
        }), __uniConfig["async"]["error"] && (n.error = {
          name: "SystemAsyncError",
          render: function (e) {
            return e(__uniConfig["async"]["error"]);
          }
        }), n;
      }), t.default.component("module-customer-fhtvn-main-map", function (e) {
        var n = {
          component: Promise.all([o.e("module-activity-home-home~module-ai-face-fusion-home-home~module-answer-answer-log-answer-log~module~f7b76ac1"), o.e("module-customer-fhtvn-main-map")]).then(function () {
            return e(o("e36c1"));
          }.bind(null, o)).catch(o.oe),
          delay: __uniConfig["async"].delay,
          timeout: __uniConfig["async"].timeout
        };
        return __uniConfig["async"]["loading"] && (n.loading = {
          name: "SystemAsyncLoading",
          render: function (e) {
            return e(__uniConfig["async"]["loading"]);
          }
        }), __uniConfig["async"]["error"] && (n.error = {
          name: "SystemAsyncError",
          render: function (e) {
            return e(__uniConfig["async"]["error"]);
          }
        }), n;
      }), t.default.component("module-customer-xstv-guide", function (e) {
        var n = {
          component: o.e("module-customer-xstv-guide").then(function () {
            return e(o("8fe0"));
          }.bind(null, o)).catch(o.oe),
          delay: __uniConfig["async"].delay,
          timeout: __uniConfig["async"].timeout
        };
        return __uniConfig["async"]["loading"] && (n.loading = {
          name: "SystemAsyncLoading",
          render: function (e) {
            return e(__uniConfig["async"]["loading"]);
          }
        }), __uniConfig["async"]["error"] && (n.error = {
          name: "SystemAsyncError",
          render: function (e) {
            return e(__uniConfig["async"]["error"]);
          }
        }), n;
      }), t.default.component("module-dilate-home-home", function (e) {
        var n = {
          component: Promise.all([o.e("module-activity-home-home~module-ai-face-fusion-home-home~module-answer-answer-log-answer-log~module~f7b76ac1"), o.e("module-activity-home-home~module-answer-home-home~module-answer-question-question~module-article-tas~3c43a7bb"), o.e("module-activity-home-home~module-answer-home-home~module-answer-question-question~module-article-tas~edb4023f"), o.e("module-activity-home-home~module-answer-home-home~module-answer-question-question~module-article-tas~5a13cc39"), o.e("module-dilate-home-home")]).then(function () {
            return e(o("304d"));
          }.bind(null, o)).catch(o.oe),
          delay: __uniConfig["async"].delay,
          timeout: __uniConfig["async"].timeout
        };
        return __uniConfig["async"]["loading"] && (n.loading = {
          name: "SystemAsyncLoading",
          render: function (e) {
            return e(__uniConfig["async"]["loading"]);
          }
        }), __uniConfig["async"]["error"] && (n.error = {
          name: "SystemAsyncError",
          render: function (e) {
            return e(__uniConfig["async"]["error"]);
          }
        }), n;
      }), t.default.component("module-query-home-home", function (e) {
        var n = {
          component: Promise.all([o.e("module-activity-home-home~module-ai-face-fusion-home-home~module-answer-answer-log-answer-log~module~f7b76ac1"), o.e("module-activity-home-home~module-answer-home-home~module-answer-question-question~module-article-tas~3c43a7bb"), o.e("module-activity-home-home~module-answer-home-home~module-answer-question-question~module-article-tas~edb4023f"), o.e("module-activity-home-home~module-answer-home-home~module-answer-question-question~module-article-tas~5a13cc39"), o.e("module-query-home-home")]).then(function () {
            return e(o("76a9"));
          }.bind(null, o)).catch(o.oe),
          delay: __uniConfig["async"].delay,
          timeout: __uniConfig["async"].timeout
        };
        return __uniConfig["async"]["loading"] && (n.loading = {
          name: "SystemAsyncLoading",
          render: function (e) {
            return e(__uniConfig["async"]["loading"]);
          }
        }), __uniConfig["async"]["error"] && (n.error = {
          name: "SystemAsyncError",
          render: function (e) {
            return e(__uniConfig["async"]["error"]);
          }
        }), n;
      }), t.default.component("module-query-search-search-results", function (e) {
        var n = {
          component: Promise.all([o.e("module-activity-home-home~module-ai-face-fusion-home-home~module-answer-answer-log-answer-log~module~f7b76ac1"), o.e("module-query-search-search-results")]).then(function () {
            return e(o("daf0"));
          }.bind(null, o)).catch(o.oe),
          delay: __uniConfig["async"].delay,
          timeout: __uniConfig["async"].timeout
        };
        return __uniConfig["async"]["loading"] && (n.loading = {
          name: "SystemAsyncLoading",
          render: function (e) {
            return e(__uniConfig["async"]["loading"]);
          }
        }), __uniConfig["async"]["error"] && (n.error = {
          name: "SystemAsyncError",
          render: function (e) {
            return e(__uniConfig["async"]["error"]);
          }
        }), n;
      }), t.default.component("module-collect-card-home-home", function (e) {
        var n = {
          component: Promise.all([o.e("module-activity-home-home~module-ai-face-fusion-home-home~module-answer-answer-log-answer-log~module~f7b76ac1"), o.e("module-activity-home-home~module-answer-home-home~module-answer-question-question~module-article-tas~3c43a7bb"), o.e("module-activity-home-home~module-answer-home-home~module-answer-question-question~module-article-tas~edb4023f"), o.e("module-activity-home-home~module-answer-home-home~module-answer-question-question~module-article-tas~5a13cc39"), o.e("module-collect-card-home-home")]).then(function () {
            return e(o("be1ad"));
          }.bind(null, o)).catch(o.oe),
          delay: __uniConfig["async"].delay,
          timeout: __uniConfig["async"].timeout
        };
        return __uniConfig["async"]["loading"] && (n.loading = {
          name: "SystemAsyncLoading",
          render: function (e) {
            return e(__uniConfig["async"]["loading"]);
          }
        }), __uniConfig["async"]["error"] && (n.error = {
          name: "SystemAsyncError",
          render: function (e) {
            return e(__uniConfig["async"]["error"]);
          }
        }), n;
      }), t.default.component("module-stepsport-home-home", function (e) {
        var n = {
          component: Promise.all([o.e("module-activity-home-home~module-ai-face-fusion-home-home~module-answer-answer-log-answer-log~module~f7b76ac1"), o.e("module-activity-home-home~module-answer-home-home~module-answer-question-question~module-article-tas~3c43a7bb"), o.e("module-activity-home-home~module-answer-home-home~module-answer-question-question~module-article-tas~edb4023f"), o.e("module-activity-home-home~module-answer-home-home~module-answer-question-question~module-article-tas~5a13cc39"), o.e("module-stepsport-home-home")]).then(function () {
            return e(o("f734"));
          }.bind(null, o)).catch(o.oe),
          delay: __uniConfig["async"].delay,
          timeout: __uniConfig["async"].timeout
        };
        return __uniConfig["async"]["loading"] && (n.loading = {
          name: "SystemAsyncLoading",
          render: function (e) {
            return e(__uniConfig["async"]["loading"]);
          }
        }), __uniConfig["async"]["error"] && (n.error = {
          name: "SystemAsyncError",
          render: function (e) {
            return e(__uniConfig["async"]["error"]);
          }
        }), n;
      }), t.default.component("module-whipped-eggs-home-home", function (e) {
        var n = {
          component: Promise.all([o.e("module-activity-home-home~module-ai-face-fusion-home-home~module-answer-answer-log-answer-log~module~f7b76ac1"), o.e("module-activity-home-home~module-answer-home-home~module-answer-question-question~module-article-tas~3c43a7bb"), o.e("module-activity-home-home~module-answer-home-home~module-answer-question-question~module-article-tas~edb4023f"), o.e("module-activity-home-home~module-answer-home-home~module-answer-question-question~module-article-tas~5a13cc39"), o.e("module-whipped-eggs-home-home")]).then(function () {
            return e(o("c6db4"));
          }.bind(null, o)).catch(o.oe),
          delay: __uniConfig["async"].delay,
          timeout: __uniConfig["async"].timeout
        };
        return __uniConfig["async"]["loading"] && (n.loading = {
          name: "SystemAsyncLoading",
          render: function (e) {
            return e(__uniConfig["async"]["loading"]);
          }
        }), __uniConfig["async"]["error"] && (n.error = {
          name: "SystemAsyncError",
          render: function (e) {
            return e(__uniConfig["async"]["error"]);
          }
        }), n;
      }), t.default.component("module-whipped-eggs-rank-history-rank", function (e) {
        var n = {
          component: Promise.all([o.e("module-activity-home-home~module-ai-face-fusion-home-home~module-answer-answer-log-answer-log~module~f7b76ac1"), o.e("module-answer-answer-log-answer-detail~module-customer-fhtvn-no-rank-list~module-customer-fhtvn-rank~27a720c1"), o.e("module-whipped-eggs-rank-history-rank")]).then(function () {
            return e(o("0dbc"));
          }.bind(null, o)).catch(o.oe),
          delay: __uniConfig["async"].delay,
          timeout: __uniConfig["async"].timeout
        };
        return __uniConfig["async"]["loading"] && (n.loading = {
          name: "SystemAsyncLoading",
          render: function (e) {
            return e(__uniConfig["async"]["loading"]);
          }
        }), __uniConfig["async"]["error"] && (n.error = {
          name: "SystemAsyncError",
          render: function (e) {
            return e(__uniConfig["async"]["error"]);
          }
        }), n;
      }), t.default.component("module-nschool-home-home", function (e) {
        var n = {
          component: Promise.all([o.e("module-activity-home-home~module-ai-face-fusion-home-home~module-answer-answer-log-answer-log~module~f7b76ac1"), o.e("module-activity-home-home~module-answer-home-home~module-answer-question-question~module-article-tas~3c43a7bb"), o.e("module-activity-home-home~module-answer-home-home~module-answer-question-question~module-article-tas~edb4023f"), o.e("module-activity-home-home~module-answer-home-home~module-answer-question-question~module-article-tas~5a13cc39"), o.e("module-nschool-home-home")]).then(function () {
            return e(o("84de"));
          }.bind(null, o)).catch(o.oe),
          delay: __uniConfig["async"].delay,
          timeout: __uniConfig["async"].timeout
        };
        return __uniConfig["async"]["loading"] && (n.loading = {
          name: "SystemAsyncLoading",
          render: function (e) {
            return e(__uniConfig["async"]["loading"]);
          }
        }), __uniConfig["async"]["error"] && (n.error = {
          name: "SystemAsyncError",
          render: function (e) {
            return e(__uniConfig["async"]["error"]);
          }
        }), n;
      }), t.default.component("module-nschool-subject-subject-info-detail", function (e) {
        var n = {
          component: Promise.all([o.e("module-activity-home-home~module-ai-face-fusion-home-home~module-answer-answer-log-answer-log~module~f7b76ac1"), o.e("module-activity-home-home~module-answer-home-home~module-answer-question-question~module-article-tas~3c43a7bb"), o.e("module-activity-home-home~module-answer-home-home~module-answer-question-question~module-article-tas~edb4023f"), o.e("module-activity-home-home~module-answer-home-home~module-answer-question-question~module-article-tas~5a13cc39"), o.e("module-nschool-subject-subject-info-detail")]).then(function () {
            return e(o("36d4"));
          }.bind(null, o)).catch(o.oe),
          delay: __uniConfig["async"].delay,
          timeout: __uniConfig["async"].timeout
        };
        return __uniConfig["async"]["loading"] && (n.loading = {
          name: "SystemAsyncLoading",
          render: function (e) {
            return e(__uniConfig["async"]["loading"]);
          }
        }), __uniConfig["async"]["error"] && (n.error = {
          name: "SystemAsyncError",
          render: function (e) {
            return e(__uniConfig["async"]["error"]);
          }
        }), n;
      }), t.default.component("module-guandan-home-home", function (e) {
        var n = {
          component: Promise.all([o.e("module-activity-home-home~module-ai-face-fusion-home-home~module-answer-answer-log-answer-log~module~f7b76ac1"), o.e("module-activity-home-home~module-answer-home-home~module-answer-question-question~module-article-tas~3c43a7bb"), o.e("module-activity-home-home~module-answer-home-home~module-answer-question-question~module-article-tas~edb4023f"), o.e("module-activity-home-home~module-answer-home-home~module-answer-question-question~module-article-tas~5a13cc39"), o.e("module-guandan-home-home")]).then(function () {
            return e(o("c7b7"));
          }.bind(null, o)).catch(o.oe),
          delay: __uniConfig["async"].delay,
          timeout: __uniConfig["async"].timeout
        };
        return __uniConfig["async"]["loading"] && (n.loading = {
          name: "SystemAsyncLoading",
          render: function (e) {
            return e(__uniConfig["async"]["loading"]);
          }
        }), __uniConfig["async"]["error"] && (n.error = {
          name: "SystemAsyncError",
          render: function (e) {
            return e(__uniConfig["async"]["error"]);
          }
        }), n;
      }), t.default.component("module-guandan-home-home-two", function (e) {
        var n = {
          component: Promise.all([o.e("module-activity-home-home~module-ai-face-fusion-home-home~module-answer-answer-log-answer-log~module~f7b76ac1"), o.e("module-activity-home-home~module-answer-home-home~module-answer-question-question~module-article-tas~3c43a7bb"), o.e("module-activity-home-home~module-answer-home-home~module-answer-question-question~module-article-tas~edb4023f"), o.e("module-activity-home-home~module-answer-home-home~module-answer-question-question~module-article-tas~5a13cc39"), o.e("module-guandan-home-home-two")]).then(function () {
            return e(o("79b28"));
          }.bind(null, o)).catch(o.oe),
          delay: __uniConfig["async"].delay,
          timeout: __uniConfig["async"].timeout
        };
        return __uniConfig["async"]["loading"] && (n.loading = {
          name: "SystemAsyncLoading",
          render: function (e) {
            return e(__uniConfig["async"]["loading"]);
          }
        }), __uniConfig["async"]["error"] && (n.error = {
          name: "SystemAsyncError",
          render: function (e) {
            return e(__uniConfig["async"]["error"]);
          }
        }), n;
      }), t.default.component("module-guandan-rank-rank-detail", function (e) {
        var n = {
          component: Promise.all([o.e("module-activity-home-home~module-ai-face-fusion-home-home~module-answer-answer-log-answer-log~module~f7b76ac1"), o.e("module-answer-answer-log-answer-detail~module-customer-fhtvn-no-rank-list~module-customer-fhtvn-rank~27a720c1"), o.e("module-clockin-cert-get-cert~module-cms-news-detail~module-cms-video-detail~module-customer-fjdaily-~4f8830ac"), o.e("module-clockin-cert-get-cert~module-customer-xmtv-flowers~module-guandan-rank-rank-detail~module-lot~911add6f"), o.e("module-guandan-rank-rank-detail")]).then(function () {
            return e(o("72e5"));
          }.bind(null, o)).catch(o.oe),
          delay: __uniConfig["async"].delay,
          timeout: __uniConfig["async"].timeout
        };
        return __uniConfig["async"]["loading"] && (n.loading = {
          name: "SystemAsyncLoading",
          render: function (e) {
            return e(__uniConfig["async"]["loading"]);
          }
        }), __uniConfig["async"]["error"] && (n.error = {
          name: "SystemAsyncError",
          render: function (e) {
            return e(__uniConfig["async"]["error"]);
          }
        }), n;
      }), t.default.component("module-neurocat-home-home", function (e) {
        var n = {
          component: Promise.all([o.e("module-activity-home-home~module-ai-face-fusion-home-home~module-answer-answer-log-answer-log~module~f7b76ac1"), o.e("module-activity-home-home~module-answer-home-home~module-answer-question-question~module-article-tas~3c43a7bb"), o.e("module-activity-home-home~module-answer-home-home~module-answer-question-question~module-article-tas~edb4023f"), o.e("module-activity-home-home~module-answer-home-home~module-answer-question-question~module-article-tas~5a13cc39"), o.e("module-neurocat-home-home")]).then(function () {
            return e(o("040e"));
          }.bind(null, o)).catch(o.oe),
          delay: __uniConfig["async"].delay,
          timeout: __uniConfig["async"].timeout
        };
        return __uniConfig["async"]["loading"] && (n.loading = {
          name: "SystemAsyncLoading",
          render: function (e) {
            return e(__uniConfig["async"]["loading"]);
          }
        }), __uniConfig["async"]["error"] && (n.error = {
          name: "SystemAsyncError",
          render: function (e) {
            return e(__uniConfig["async"]["error"]);
          }
        }), n;
      }), t.default.component("module-neurocat-game-game", function (e) {
        var n = {
          component: Promise.all([o.e("module-activity-home-home~module-ai-face-fusion-home-home~module-answer-answer-log-answer-log~module~f7b76ac1"), o.e("module-activity-home-home~module-answer-home-home~module-answer-question-question~module-article-tas~3c43a7bb"), o.e("module-clockin-cert-get-cert~module-cms-news-detail~module-cms-video-detail~module-customer-fjdaily-~4f8830ac"), o.e("module-clockin-log-log~module-cms-news-detail~module-cms-video-detail~module-customer-fjdaily-clocki~540cf0d6"), o.e("module-neurocat-game-game")]).then(function () {
            return e(o("f248"));
          }.bind(null, o)).catch(o.oe),
          delay: __uniConfig["async"].delay,
          timeout: __uniConfig["async"].timeout
        };
        return __uniConfig["async"]["loading"] && (n.loading = {
          name: "SystemAsyncLoading",
          render: function (e) {
            return e(__uniConfig["async"]["loading"]);
          }
        }), __uniConfig["async"]["error"] && (n.error = {
          name: "SystemAsyncError",
          render: function (e) {
            return e(__uniConfig["async"]["error"]);
          }
        }), n;
      }), t.default.component("module-info-pub-home-detail", function (e) {
        var n = {
          component: Promise.all([o.e("module-activity-home-home~module-ai-face-fusion-home-home~module-answer-answer-log-answer-log~module~f7b76ac1"), o.e("module-activity-home-home~module-answer-home-home~module-answer-question-question~module-article-tas~3c43a7bb"), o.e("module-activity-home-home~module-answer-home-home~module-answer-question-question~module-article-tas~edb4023f"), o.e("module-activity-home-home~module-answer-home-home~module-answer-question-question~module-article-tas~5a13cc39"), o.e("module-info-pub-home-detail")]).then(function () {
            return e(o("b407"));
          }.bind(null, o)).catch(o.oe),
          delay: __uniConfig["async"].delay,
          timeout: __uniConfig["async"].timeout
        };
        return __uniConfig["async"]["loading"] && (n.loading = {
          name: "SystemAsyncLoading",
          render: function (e) {
            return e(__uniConfig["async"]["loading"]);
          }
        }), __uniConfig["async"]["error"] && (n.error = {
          name: "SystemAsyncError",
          render: function (e) {
            return e(__uniConfig["async"]["error"]);
          }
        }), n;
      }), t.default.component("module-info-pub-home-publish", function (e) {
        var n = {
          component: Promise.all([o.e("module-activity-home-home~module-ai-face-fusion-home-home~module-answer-answer-log-answer-log~module~f7b76ac1"), o.e("module-activity-home-home~module-answer-home-home~module-answer-question-question~module-article-tas~3c43a7bb"), o.e("module-activity-home-home~module-answer-home-home~module-answer-question-question~module-article-tas~edb4023f"), o.e("module-activity-home-home~module-answer-home-home~module-answer-question-question~module-article-tas~5a13cc39"), o.e("module-info-pub-home-publish")]).then(function () {
            return e(o("2d51"));
          }.bind(null, o)).catch(o.oe),
          delay: __uniConfig["async"].delay,
          timeout: __uniConfig["async"].timeout
        };
        return __uniConfig["async"]["loading"] && (n.loading = {
          name: "SystemAsyncLoading",
          render: function (e) {
            return e(__uniConfig["async"]["loading"]);
          }
        }), __uniConfig["async"]["error"] && (n.error = {
          name: "SystemAsyncError",
          render: function (e) {
            return e(__uniConfig["async"]["error"]);
          }
        }), n;
      }), t.default.component("module-info-pub-home-mine", function (e) {
        var n = {
          component: Promise.all([o.e("module-activity-home-home~module-ai-face-fusion-home-home~module-answer-answer-log-answer-log~module~f7b76ac1"), o.e("module-activity-home-home~module-answer-home-home~module-answer-question-question~module-article-tas~3c43a7bb"), o.e("module-activity-home-home~module-answer-home-home~module-answer-question-question~module-article-tas~edb4023f"), o.e("module-activity-home-home~module-answer-home-home~module-answer-question-question~module-article-tas~5a13cc39"), o.e("module-info-pub-home-mine")]).then(function () {
            return e(o("a398"));
          }.bind(null, o)).catch(o.oe),
          delay: __uniConfig["async"].delay,
          timeout: __uniConfig["async"].timeout
        };
        return __uniConfig["async"]["loading"] && (n.loading = {
          name: "SystemAsyncLoading",
          render: function (e) {
            return e(__uniConfig["async"]["loading"]);
          }
        }), __uniConfig["async"]["error"] && (n.error = {
          name: "SystemAsyncError",
          render: function (e) {
            return e(__uniConfig["async"]["error"]);
          }
        }), n;
      }), t.default.component("module-info-pub-report-report", function (e) {
        var n = {
          component: Promise.all([o.e("module-activity-home-home~module-ai-face-fusion-home-home~module-answer-answer-log-answer-log~module~f7b76ac1"), o.e("module-info-pub-report-report~module-live-report-report~module-mall-business-apply~module-mall-comme~f4ab7752"), o.e("module-info-pub-report-report")]).then(function () {
            return e(o("812e"));
          }.bind(null, o)).catch(o.oe),
          delay: __uniConfig["async"].delay,
          timeout: __uniConfig["async"].timeout
        };
        return __uniConfig["async"]["loading"] && (n.loading = {
          name: "SystemAsyncLoading",
          render: function (e) {
            return e(__uniConfig["async"]["loading"]);
          }
        }), __uniConfig["async"]["error"] && (n.error = {
          name: "SystemAsyncError",
          render: function (e) {
            return e(__uniConfig["async"]["error"]);
          }
        }), n;
      }), e.__uniRoutes = [{
        path: "/",
        alias: "/pages/home/sdk",
        component: {
          render: function (e) {
            return e("Page", {
              props: Object.assign({
                isQuit: !0,
                isEntry: !0
              }, __uniConfig.globalStyle, {
                navigationBarTitleText: "\u4E91\u70B9\u5E94\u7528",
                navigationStyle: "custom"
              })
            }, [e("pages-home-sdk", {
              slot: "page"
            })]);
          }
        },
        meta: {
          id: 1,
          name: "pages-home-sdk",
          isNVue: !1,
          maxWidth: 0,
          pagePath: "pages/home/sdk",
          isQuit: !0,
          isEntry: !0,
          windowTop: 0
        }
      }, {
        path: "/pages/home/index",
        component: {
          render: function (e) {
            return e("Page", {
              props: Object.assign({}, __uniConfig.globalStyle, {
                navigationBarTitleText: "\u4E91\u70B9\u5E94\u7528",
                enablePullDownRefresh: !0,
                navigationStyle: "custom"
              })
            }, [e("pages-home-index", {
              slot: "page"
            })]);
          }
        },
        meta: {
          name: "pages-home-index",
          isNVue: !1,
          maxWidth: 0,
          pagePath: "pages/home/index",
          windowTop: 0
        }
      }, {
        path: "/pages/home/callback",
        component: {
          render: function (e) {
            return e("Page", {
              props: Object.assign({}, __uniConfig.globalStyle, {
                navigationBarTitleText: "",
                enablePullDownRefresh: !1,
                navigationStyle: "custom"
              })
            }, [e("pages-home-callback", {
              slot: "page"
            })]);
          }
        },
        meta: {
          name: "pages-home-callback",
          isNVue: !1,
          maxWidth: 0,
          pagePath: "pages/home/callback",
          windowTop: 0
        }
      }, {
        path: "/pages/activity/list",
        component: {
          render: function (e) {
            return e("Page", {
              props: Object.assign({}, __uniConfig.globalStyle, {
                navigationBarTitleText: "\u6D3B\u52A8\u5217\u8868",
                navigationBarBackgroundColor: "#fca235",
                navigationBarTextStyle: "white",
                enablePullDownRefresh: !0
              })
            }, [e("pages-activity-list", {
              slot: "page"
            })]);
          }
        },
        meta: {
          name: "pages-activity-list",
          isNVue: !1,
          maxWidth: 0,
          pagePath: "pages/activity/list",
          windowTop: 44
        }
      }, {
        path: "/pages/member/task-center",
        component: {
          render: function (e) {
            return e("Page", {
              props: Object.assign({}, __uniConfig.globalStyle, {
                navigationBarTitleText: "\u4EFB\u52A1\u4E2D\u5FC3",
                enablePullDownRefresh: !0,
                navigationStyle: "custom"
              })
            }, [e("pages-member-task-center", {
              slot: "page"
            })]);
          }
        },
        meta: {
          name: "pages-member-task-center",
          isNVue: !1,
          maxWidth: 0,
          pagePath: "pages/member/task-center",
          windowTop: 0
        }
      }, {
        path: "/pages/shopping-mall/home",
        component: {
          render: function (e) {
            return e("Page", {
              props: Object.assign({}, __uniConfig.globalStyle, {
                navigationBarTitleText: "\u5546\u57CE",
                navigationBarBackgroundColor: "#f85d68",
                navigationBarTextStyle: "white",
                enablePullDownRefresh: !0
              })
            }, [e("pages-shopping-mall-home", {
              slot: "page"
            })]);
          }
        },
        meta: {
          name: "pages-shopping-mall-home",
          isNVue: !1,
          maxWidth: 0,
          pagePath: "pages/shopping-mall/home",
          windowTop: 44
        }
      }, {
        path: "/pages/member/user-center",
        component: {
          render: function (e) {
            return e("Page", {
              props: Object.assign({}, __uniConfig.globalStyle, {
                navigationBarTitleText: "\u7528\u6237\u4E2D\u5FC3",
                enablePullDownRefresh: !0,
                navigationStyle: "custom"
              })
            }, [e("pages-member-user-center", {
              slot: "page"
            })]);
          }
        },
        meta: {
          name: "pages-member-user-center",
          isNVue: !1,
          maxWidth: 0,
          pagePath: "pages/member/user-center",
          windowTop: 0
        }
      }, {
        path: "/pages/home/sdk-activity",
        component: {
          render: function (e) {
            return e("Page", {
              props: Object.assign({}, __uniConfig.globalStyle, {
                navigationBarTitleText: "\u4E92\u52A8\u6D3B\u52A8"
              })
            }, [e("pages-home-sdk-activity", {
              slot: "page"
            })]);
          }
        },
        meta: {
          name: "pages-home-sdk-activity",
          isNVue: !1,
          maxWidth: 0,
          pagePath: "pages/home/sdk-activity",
          windowTop: 44
        }
      }, {
        path: "/pages/home/sdk-me",
        component: {
          render: function (e) {
            return e("Page", {
              props: Object.assign({}, __uniConfig.globalStyle, {
                navigationBarTitleText: "\u4E2A\u4EBA\u4E2D\u5FC3"
              })
            }, [e("pages-home-sdk-me", {
              slot: "page"
            })]);
          }
        },
        meta: {
          name: "pages-home-sdk-me",
          isNVue: !1,
          maxWidth: 0,
          pagePath: "pages/home/sdk-me",
          windowTop: 44
        }
      }, {
        path: "/pages/home/error",
        component: {
          render: function (e) {
            return e("Page", {
              props: Object.assign({}, __uniConfig.globalStyle, {
                navigationBarTitleText: "\u627E\u4E0D\u5230\u7F51\u7EDC\u5566"
              })
            }, [e("pages-home-error", {
              slot: "page"
            })]);
          }
        },
        meta: {
          name: "pages-home-error",
          isNVue: !1,
          maxWidth: 0,
          pagePath: "pages/home/error",
          windowTop: 44
        }
      }, {
        path: "/pages/download/tianmu-download",
        component: {
          render: function (e) {
            return e("Page", {
              props: Object.assign({}, __uniConfig.globalStyle, {
                navigationBarTitleText: "\u4E0B\u8F7DAPP",
                navigationStyle: "custom"
              })
            }, [e("pages-download-tianmu-download", {
              slot: "page"
            })]);
          }
        },
        meta: {
          name: "pages-download-tianmu-download",
          isNVue: !1,
          maxWidth: 0,
          pagePath: "pages/download/tianmu-download",
          windowTop: 0
        }
      }, {
        path: "/pages/setting/clear",
        component: {
          render: function (e) {
            return e("Page", {
              props: Object.assign({}, __uniConfig.globalStyle, {
                navigationBarTitleText: "\u4E00\u952E\u6E05\u626B",
                navigationStyle: "custom"
              })
            }, [e("pages-setting-clear", {
              slot: "page"
            })]);
          }
        },
        meta: {
          name: "pages-setting-clear",
          isNVue: !1,
          maxWidth: 0,
          pagePath: "pages/setting/clear",
          windowTop: 0
        }
      }, {
        path: "/pages/download/close-page",
        component: {
          render: function (e) {
            return e("Page", {
              props: Object.assign({}, __uniConfig.globalStyle, {
                navigationBarTitleText: "\u5173\u95ED\u9875\u9762",
                navigationStyle: "custom"
              })
            }, [e("pages-download-close-page", {
              slot: "page"
            })]);
          }
        },
        meta: {
          name: "pages-download-close-page",
          isNVue: !1,
          maxWidth: 0,
          pagePath: "pages/download/close-page",
          windowTop: 0
        }
      }, {
        path: "/module-mall/home/home",
        component: {
          render: function (e) {
            return e("Page", {
              props: Object.assign({}, __uniConfig.globalStyle, {
                navigationBarTitleText: "",
                enablePullDownRefresh: !1,
                navigationStyle: "custom"
              })
            }, [e("module-mall-home-home", {
              slot: "page"
            })]);
          }
        },
        meta: {
          name: "module-mall-home-home",
          isNVue: !1,
          maxWidth: 0,
          pagePath: "module-mall/home/home",
          windowTop: 0
        }
      }, {
        path: "/module-mall/customer/customer",
        component: {
          render: function (e) {
            return e("Page", {
              props: Object.assign({}, __uniConfig.globalStyle, {
                navigationBarTitleText: "\u5BA2\u670D",
                enablePullDownRefresh: !1
              })
            }, [e("module-mall-customer-customer", {
              slot: "page"
            })]);
          }
        },
        meta: {
          name: "module-mall-customer-customer",
          isNVue: !1,
          maxWidth: 0,
          pagePath: "module-mall/customer/customer",
          windowTop: 44
        }
      }, {
        path: "/module-mall/customer/business-customer",
        component: {
          render: function (e) {
            return e("Page", {
              props: Object.assign({}, __uniConfig.globalStyle, {
                navigationBarTitleText: "",
                enablePullDownRefresh: !1
              })
            }, [e("module-mall-customer-business-customer", {
              slot: "page"
            })]);
          }
        },
        meta: {
          name: "module-mall-customer-business-customer",
          isNVue: !1,
          maxWidth: 0,
          pagePath: "module-mall/customer/business-customer",
          windowTop: 44
        }
      }, {
        path: "/module-mall/customer/pre-sales-customer",
        component: {
          render: function (e) {
            return e("Page", {
              props: Object.assign({}, __uniConfig.globalStyle, {
                navigationBarTitleText: "",
                enablePullDownRefresh: !1
              })
            }, [e("module-mall-customer-pre-sales-customer", {
              slot: "page"
            })]);
          }
        },
        meta: {
          name: "module-mall-customer-pre-sales-customer",
          isNVue: !1,
          maxWidth: 0,
          pagePath: "module-mall/customer/pre-sales-customer",
          windowTop: 44
        }
      }, {
        path: "/module-mall/home/home-style-two",
        component: {
          render: function (e) {
            return e("Page", {
              props: Object.assign({}, __uniConfig.globalStyle, {
                navigationBarTitleText: "",
                enablePullDownRefresh: !1,
                navigationStyle: "custom"
              })
            }, [e("module-mall-home-home-style-two", {
              slot: "page"
            })]);
          }
        },
        meta: {
          name: "module-mall-home-home-style-two",
          isNVue: !1,
          maxWidth: 0,
          pagePath: "module-mall/home/home-style-two",
          windowTop: 0
        }
      }, {
        path: "/module-mall/business/offline-business",
        component: {
          render: function (e) {
            return e("Page", {
              props: Object.assign({}, __uniConfig.globalStyle, {
                navigationBarTitleText: "\u5546\u5BB6\u5217\u8868",
                enablePullDownRefresh: !1
              })
            }, [e("module-mall-business-offline-business", {
              slot: "page"
            })]);
          }
        },
        meta: {
          name: "module-mall-business-offline-business",
          isNVue: !1,
          maxWidth: 0,
          pagePath: "module-mall/business/offline-business",
          windowTop: 44
        }
      }, {
        path: "/module-mall/business/business",
        component: {
          render: function (e) {
            return e("Page", {
              props: Object.assign({}, __uniConfig.globalStyle, {
                navigationBarTitleText: "\u5546\u5BB6\u5217\u8868",
                enablePullDownRefresh: !1
              })
            }, [e("module-mall-business-business", {
              slot: "page"
            })]);
          }
        },
        meta: {
          name: "module-mall-business-business",
          isNVue: !1,
          maxWidth: 0,
          pagePath: "module-mall/business/business",
          windowTop: 44
        }
      }, {
        path: "/module-mall/business/business-new",
        component: {
          render: function (e) {
            return e("Page", {
              props: Object.assign({}, __uniConfig.globalStyle, {
                navigationBarTitleText: "\u5546\u5BB6\u5217\u8868",
                enablePullDownRefresh: !0
              })
            }, [e("module-mall-business-business-new", {
              slot: "page"
            })]);
          }
        },
        meta: {
          name: "module-mall-business-business-new",
          isNVue: !1,
          maxWidth: 0,
          pagePath: "module-mall/business/business-new",
          windowTop: 44
        }
      }, {
        path: "/module-mall/business/business-new-style-four",
        component: {
          render: function (e) {
            return e("Page", {
              props: Object.assign({
                isQuit: !0,
                isTabBar: !0,
                tabBarIndex: 1
              }, __uniConfig.globalStyle, {
                navigationBarTitleText: "\u5546\u5BB6\u5217\u8868",
                enablePullDownRefresh: !0
              })
            }, [e("module-mall-business-business-new-style-four", {
              slot: "page"
            })]);
          }
        },
        meta: {
          id: 2,
          name: "module-mall-business-business-new-style-four",
          isNVue: !1,
          maxWidth: 0,
          pagePath: "module-mall/business/business-new-style-four",
          isQuit: !0,
          isTabBar: !0,
          tabBarIndex: 1,
          windowTop: 44
        }
      }, {
        path: "/module-mall/business/apply",
        component: {
          render: function (e) {
            return e("Page", {
              props: Object.assign({}, __uniConfig.globalStyle, {
                navigationBarTitleText: "\u5546\u5BB6\u5165\u9A7B",
                enablePullDownRefresh: !1,
                navigationStyle: "custom"
              })
            }, [e("module-mall-business-apply", {
              slot: "page"
            })]);
          }
        },
        meta: {
          name: "module-mall-business-apply",
          isNVue: !1,
          maxWidth: 0,
          pagePath: "module-mall/business/apply",
          windowTop: 0
        }
      }, {
        path: "/module-mall/goodslist/goodslist",
        component: {
          render: function (e) {
            return e("Page", {
              props: Object.assign({}, __uniConfig.globalStyle, {
                navigationBarTitleText: "\u5546\u54C1\u5217\u8868",
                enablePullDownRefresh: !1
              })
            }, [e("module-mall-goodslist-goodslist", {
              slot: "page"
            })]);
          }
        },
        meta: {
          name: "module-mall-goodslist-goodslist",
          isNVue: !1,
          maxWidth: 0,
          pagePath: "module-mall/goodslist/goodslist",
          windowTop: 44
        }
      }, {
        path: "/module-mall/goodslist/goods-class-list",
        component: {
          render: function (e) {
            return e("Page", {
              props: Object.assign({}, __uniConfig.globalStyle, {
                navigationBarTitleText: "\u5546\u54C1\u5217\u8868",
                enablePullDownRefresh: !1,
                navigationStyle: "custom"
              })
            }, [e("module-mall-goodslist-goods-class-list", {
              slot: "page"
            })]);
          }
        },
        meta: {
          name: "module-mall-goodslist-goods-class-list",
          isNVue: !1,
          maxWidth: 0,
          pagePath: "module-mall/goodslist/goods-class-list",
          windowTop: 0
        }
      }, {
        path: "/module-mall/goods-detail/goods-detail",
        component: {
          render: function (e) {
            return e("Page", {
              props: Object.assign({}, __uniConfig.globalStyle, {
                navigationBarTitleText: "\u5546\u54C1\u8BE6\u60C5",
                enablePullDownRefresh: !1
              })
            }, [e("module-mall-goods-detail-goods-detail", {
              slot: "page"
            })]);
          }
        },
        meta: {
          name: "module-mall-goods-detail-goods-detail",
          isNVue: !1,
          maxWidth: 0,
          pagePath: "module-mall/goods-detail/goods-detail",
          windowTop: 44
        }
      }, {
        path: "/module-mall/goods-detail/goods-detail-style-three",
        component: {
          render: function (e) {
            return e("Page", {
              props: Object.assign({}, __uniConfig.globalStyle, {
                navigationBarTitleText: "\u5546\u54C1\u8BE6\u60C5",
                enablePullDownRefresh: !1
              })
            }, [e("module-mall-goods-detail-goods-detail-style-three", {
              slot: "page"
            })]);
          }
        },
        meta: {
          name: "module-mall-goods-detail-goods-detail-style-three",
          isNVue: !1,
          maxWidth: 0,
          pagePath: "module-mall/goods-detail/goods-detail-style-three",
          windowTop: 44
        }
      }, {
        path: "/module-mall/goods-activity/goods-activity",
        component: {
          render: function (e) {
            return e("Page", {
              props: Object.assign({}, __uniConfig.globalStyle, {
                navigationBarTitleText: "\u6D3B\u52A8\u8BE6\u60C5",
                enablePullDownRefresh: !1,
                navigationStyle: "custom"
              })
            }, [e("module-mall-goods-activity-goods-activity", {
              slot: "page"
            })]);
          }
        },
        meta: {
          name: "module-mall-goods-activity-goods-activity",
          isNVue: !1,
          maxWidth: 0,
          pagePath: "module-mall/goods-activity/goods-activity",
          windowTop: 0
        }
      }, {
        path: "/module-mall/confirm-order/confirm-order",
        component: {
          render: function (e) {
            return e("Page", {
              props: Object.assign({}, __uniConfig.globalStyle, {
                navigationBarTitleText: "\u786E\u8BA4\u8BA2\u5355",
                enablePullDownRefresh: !1
              })
            }, [e("module-mall-confirm-order-confirm-order", {
              slot: "page"
            })]);
          }
        },
        meta: {
          name: "module-mall-confirm-order-confirm-order",
          isNVue: !1,
          maxWidth: 0,
          pagePath: "module-mall/confirm-order/confirm-order",
          windowTop: 44
        }
      }, {
        path: "/module-mall/confirm-order/confirm-order-cart",
        component: {
          render: function (e) {
            return e("Page", {
              props: Object.assign({}, __uniConfig.globalStyle, {
                navigationBarTitleText: "\u786E\u8BA4\u8BA2\u5355",
                enablePullDownRefresh: !1
              })
            }, [e("module-mall-confirm-order-confirm-order-cart", {
              slot: "page"
            })]);
          }
        },
        meta: {
          name: "module-mall-confirm-order-confirm-order-cart",
          isNVue: !1,
          maxWidth: 0,
          pagePath: "module-mall/confirm-order/confirm-order-cart",
          windowTop: 44
        }
      }, {
        path: "/module-mall/exchange-log/exchange-log",
        component: {
          render: function (e) {
            return e("Page", {
              props: Object.assign({}, __uniConfig.globalStyle, {
                navigationBarTitleText: "\u8BA2\u5355\u5217\u8868",
                enablePullDownRefresh: !0,
                navigationStyle: "custom"
              })
            }, [e("module-mall-exchange-log-exchange-log", {
              slot: "page"
            })]);
          }
        },
        meta: {
          name: "module-mall-exchange-log-exchange-log",
          isNVue: !1,
          maxWidth: 0,
          pagePath: "module-mall/exchange-log/exchange-log",
          windowTop: 0
        }
      }, {
        path: "/module-mall/exchange-log/exchange-log-style-four",
        component: {
          render: function (e) {
            return e("Page", {
              props: Object.assign({
                isQuit: !0,
                isTabBar: !0,
                tabBarIndex: 2
              }, __uniConfig.globalStyle, {
                navigationBarTitleText: "\u8BA2\u5355\u5217\u8868",
                enablePullDownRefresh: !0,
                navigationStyle: "custom"
              })
            }, [e("module-mall-exchange-log-exchange-log-style-four", {
              slot: "page"
            })]);
          }
        },
        meta: {
          id: 3,
          name: "module-mall-exchange-log-exchange-log-style-four",
          isNVue: !1,
          maxWidth: 0,
          pagePath: "module-mall/exchange-log/exchange-log-style-four",
          isQuit: !0,
          isTabBar: !0,
          tabBarIndex: 2,
          windowTop: 0
        }
      }, {
        path: "/module-mall/order-detail/order-detail",
        component: {
          render: function (e) {
            return e("Page", {
              props: Object.assign({}, __uniConfig.globalStyle, {
                navigationBarTitleText: "\u8BA2\u5355\u8BE6\u60C5",
                enablePullDownRefresh: !1,
                navigationStyle: "custom"
              })
            }, [e("module-mall-order-detail-order-detail", {
              slot: "page"
            })]);
          }
        },
        meta: {
          name: "module-mall-order-detail-order-detail",
          isNVue: !1,
          maxWidth: 0,
          pagePath: "module-mall/order-detail/order-detail",
          windowTop: 0
        }
      }, {
        path: "/module-mall/order-detail/order-detail-businessmen",
        component: {
          render: function (e) {
            return e("Page", {
              props: Object.assign({}, __uniConfig.globalStyle, {
                navigationBarTitleText: "\u8BA2\u5355\u8BE6\u60C5",
                enablePullDownRefresh: !1,
                navigationStyle: "custom"
              })
            }, [e("module-mall-order-detail-order-detail-businessmen", {
              slot: "page"
            })]);
          }
        },
        meta: {
          name: "module-mall-order-detail-order-detail-businessmen",
          isNVue: !1,
          maxWidth: 0,
          pagePath: "module-mall/order-detail/order-detail-businessmen",
          windowTop: 0
        }
      }, {
        path: "/module-mall/order-detail/order-detail-businessmen",
        component: {
          render: function (e) {
            return e("Page", {
              props: Object.assign({}, __uniConfig.globalStyle, {
                navigationBarTitleText: "\u8BA2\u5355\u8BE6\u60C5",
                enablePullDownRefresh: !1,
                navigationStyle: "custom"
              })
            }, [e("module-mall-order-detail-order-detail-businessmen", {
              slot: "page"
            })]);
          }
        },
        meta: {
          name: "module-mall-order-detail-order-detail-businessmen",
          isNVue: !1,
          maxWidth: 0,
          pagePath: "module-mall/order-detail/order-detail-businessmen",
          windowTop: 0
        }
      }, {
        path: "/module-mall/order-detail/no-order-deatil",
        component: {
          render: function (e) {
            return e("Page", {
              props: Object.assign({}, __uniConfig.globalStyle, {
                navigationBarTitleText: "",
                enablePullDownRefresh: !1,
                navigationStyle: "custom"
              })
            }, [e("module-mall-order-detail-no-order-deatil", {
              slot: "page"
            })]);
          }
        },
        meta: {
          name: "module-mall-order-detail-no-order-deatil",
          isNVue: !1,
          maxWidth: 0,
          pagePath: "module-mall/order-detail/no-order-deatil",
          windowTop: 0
        }
      }, {
        path: "/module-mall/order-result/order-result",
        component: {
          render: function (e) {
            return e("Page", {
              props: Object.assign({}, __uniConfig.globalStyle, {
                navigationBarTitleText: "\u4E0B\u5355\u7ED3\u679C\u9875",
                enablePullDownRefresh: !1,
                navigationStyle: "custom"
              })
            }, [e("module-mall-order-result-order-result", {
              slot: "page"
            })]);
          }
        },
        meta: {
          name: "module-mall-order-result-order-result",
          isNVue: !1,
          maxWidth: 0,
          pagePath: "module-mall/order-result/order-result",
          windowTop: 0
        }
      }, {
        path: "/module-mall/address/address-list",
        component: {
          render: function (e) {
            return e("Page", {
              props: Object.assign({}, __uniConfig.globalStyle, {
                navigationBarTitleText: "\u5730\u5740\u7BA1\u7406",
                enablePullDownRefresh: !1
              })
            }, [e("module-mall-address-address-list", {
              slot: "page"
            })]);
          }
        },
        meta: {
          name: "module-mall-address-address-list",
          isNVue: !1,
          maxWidth: 0,
          pagePath: "module-mall/address/address-list",
          windowTop: 44
        }
      }, {
        path: "/module-mall/address/address-detail",
        component: {
          render: function (e) {
            return e("Page", {
              props: Object.assign({}, __uniConfig.globalStyle, {
                navigationBarTitleText: "\u5730\u5740\u8BE6\u60C5",
                enablePullDownRefresh: !1
              })
            }, [e("module-mall-address-address-detail", {
              slot: "page"
            })]);
          }
        },
        meta: {
          name: "module-mall-address-address-detail",
          isNVue: !1,
          maxWidth: 0,
          pagePath: "module-mall/address/address-detail",
          windowTop: 44
        }
      }, {
        path: "/module-mall/coupon/coupon-list",
        component: {
          render: function (e) {
            return e("Page", {
              props: Object.assign({}, __uniConfig.globalStyle, {
                navigationBarTitleText: "\u4F18\u60E0\u5238",
                enablePullDownRefresh: !1
              })
            }, [e("module-mall-coupon-coupon-list", {
              slot: "page"
            })]);
          }
        },
        meta: {
          name: "module-mall-coupon-coupon-list",
          isNVue: !1,
          maxWidth: 0,
          pagePath: "module-mall/coupon/coupon-list",
          windowTop: 44
        }
      }, {
        path: "/module-mall/coupon/coupon-detail",
        component: {
          render: function (e) {
            return e("Page", {
              props: Object.assign({}, __uniConfig.globalStyle, {
                navigationBarTitleText: "\u4F18\u60E0\u5238",
                enablePullDownRefresh: !1
              })
            }, [e("module-mall-coupon-coupon-detail", {
              slot: "page"
            })]);
          }
        },
        meta: {
          name: "module-mall-coupon-coupon-detail",
          isNVue: !1,
          maxWidth: 0,
          pagePath: "module-mall/coupon/coupon-detail",
          windowTop: 44
        }
      }, {
        path: "/module-mall/coupon/coupon-show-list",
        component: {
          render: function (e) {
            return e("Page", {
              props: Object.assign({}, __uniConfig.globalStyle, {
                navigationBarTitleText: "\u4F18\u60E0\u5238\u9886\u53D6",
                enablePullDownRefresh: !1,
                navigationStyle: "custom"
              })
            }, [e("module-mall-coupon-coupon-show-list", {
              slot: "page"
            })]);
          }
        },
        meta: {
          name: "module-mall-coupon-coupon-show-list",
          isNVue: !1,
          maxWidth: 0,
          pagePath: "module-mall/coupon/coupon-show-list",
          windowTop: 0
        }
      }, {
        path: "/module-mall/coupon/coupon-center",
        component: {
          render: function (e) {
            return e("Page", {
              props: Object.assign({}, __uniConfig.globalStyle, {
                navigationBarTitleText: "\u9886\u5238\u4E2D\u5FC3",
                enablePullDownRefresh: !1,
                navigationStyle: "custom"
              })
            }, [e("module-mall-coupon-coupon-center", {
              slot: "page"
            })]);
          }
        },
        meta: {
          name: "module-mall-coupon-coupon-center",
          isNVue: !1,
          maxWidth: 0,
          pagePath: "module-mall/coupon/coupon-center",
          windowTop: 0
        }
      }, {
        path: "/module-mall/cart/cart",
        component: {
          render: function (e) {
            return e("Page", {
              props: Object.assign({}, __uniConfig.globalStyle, {
                navigationBarTitleText: "\u8D2D\u7269\u8F66",
                enablePullDownRefresh: !0
              })
            }, [e("module-mall-cart-cart", {
              slot: "page"
            })]);
          }
        },
        meta: {
          name: "module-mall-cart-cart",
          isNVue: !1,
          maxWidth: 0,
          pagePath: "module-mall/cart/cart",
          windowTop: 44
        }
      }, {
        path: "/module-mall/writeoff/login",
        component: {
          render: function (e) {
            return e("Page", {
              props: Object.assign({}, __uniConfig.globalStyle, {
                navigationBarTitleText: "\u6838\u9500\u767B\u9646",
                enablePullDownRefresh: !1,
                navigationStyle: "custom"
              })
            }, [e("module-mall-writeoff-login", {
              slot: "page"
            })]);
          }
        },
        meta: {
          name: "module-mall-writeoff-login",
          isNVue: !1,
          maxWidth: 0,
          pagePath: "module-mall/writeoff/login",
          windowTop: 0
        }
      }, {
        path: "/module-mall/writeoff/type-select",
        component: {
          render: function (e) {
            return e("Page", {
              props: Object.assign({}, __uniConfig.globalStyle, {
                navigationBarTitleText: "\u6838\u9500\u7C7B\u578B\u9009\u62E9",
                enablePullDownRefresh: !1
              })
            }, [e("module-mall-writeoff-type-select", {
              slot: "page"
            })]);
          }
        },
        meta: {
          name: "module-mall-writeoff-type-select",
          isNVue: !1,
          maxWidth: 0,
          pagePath: "module-mall/writeoff/type-select",
          windowTop: 44
        }
      }, {
        path: "/module-mall/writeoff/home",
        component: {
          render: function (e) {
            return e("Page", {
              props: Object.assign({}, __uniConfig.globalStyle, {
                navigationBarTitleText: "\u8BA2\u5355\u6838\u9500",
                enablePullDownRefresh: !0
              })
            }, [e("module-mall-writeoff-home", {
              slot: "page"
            })]);
          }
        },
        meta: {
          name: "module-mall-writeoff-home",
          isNVue: !1,
          maxWidth: 0,
          pagePath: "module-mall/writeoff/home",
          windowTop: 44
        }
      }, {
        path: "/module-mall/writeoff/confirm",
        component: {
          render: function (e) {
            return e("Page", {
              props: Object.assign({}, __uniConfig.globalStyle, {
                navigationBarTitleText: "\u786E\u8BA4\u6838\u9500",
                enablePullDownRefresh: !1
              })
            }, [e("module-mall-writeoff-confirm", {
              slot: "page"
            })]);
          }
        },
        meta: {
          name: "module-mall-writeoff-confirm",
          isNVue: !1,
          maxWidth: 0,
          pagePath: "module-mall/writeoff/confirm",
          windowTop: 44
        }
      }, {
        path: "/module-mall/writeoff/logdetail",
        component: {
          render: function (e) {
            return e("Page", {
              props: Object.assign({}, __uniConfig.globalStyle, {
                navigationBarTitleText: "\u6838\u9500\u8BE6\u60C5",
                enablePullDownRefresh: !1
              })
            }, [e("module-mall-writeoff-logdetail", {
              slot: "page"
            })]);
          }
        },
        meta: {
          name: "module-mall-writeoff-logdetail",
          isNVue: !1,
          maxWidth: 0,
          pagePath: "module-mall/writeoff/logdetail",
          windowTop: 44
        }
      }, {
        path: "/module-mall/writeoff/success",
        component: {
          render: function (e) {
            return e("Page", {
              props: Object.assign({}, __uniConfig.globalStyle, {
                navigationBarTitleText: "\u6838\u9500\u6210\u529F",
                enablePullDownRefresh: !1
              })
            }, [e("module-mall-writeoff-success", {
              slot: "page"
            })]);
          }
        },
        meta: {
          name: "module-mall-writeoff-success",
          isNVue: !1,
          maxWidth: 0,
          pagePath: "module-mall/writeoff/success",
          windowTop: 44
        }
      }, {
        path: "/module-mall/writeoff/loglist",
        component: {
          render: function (e) {
            return e("Page", {
              props: Object.assign({}, __uniConfig.globalStyle, {
                navigationBarTitleText: "\u6211\u7684\u6838\u9500\u5217\u8868",
                enablePullDownRefresh: !0
              })
            }, [e("module-mall-writeoff-loglist", {
              slot: "page"
            })]);
          }
        },
        meta: {
          name: "module-mall-writeoff-loglist",
          isNVue: !1,
          maxWidth: 0,
          pagePath: "module-mall/writeoff/loglist",
          windowTop: 44
        }
      }, {
        path: "/module-mall/writeoff/order-list",
        component: {
          render: function (e) {
            return e("Page", {
              props: Object.assign({}, __uniConfig.globalStyle, {
                navigationBarTitleText: "\u8BA2\u5355\u5217\u8868",
                enablePullDownRefresh: !0,
                navigationStyle: "custom"
              })
            }, [e("module-mall-writeoff-order-list", {
              slot: "page"
            })]);
          }
        },
        meta: {
          name: "module-mall-writeoff-order-list",
          isNVue: !1,
          maxWidth: 0,
          pagePath: "module-mall/writeoff/order-list",
          windowTop: 0
        }
      }, {
        path: "/module-mall/writeoff/order-detail",
        component: {
          render: function (e) {
            return e("Page", {
              props: Object.assign({}, __uniConfig.globalStyle, {
                navigationBarTitleText: "\u8BA2\u5355\u8BE6\u60C5",
                enablePullDownRefresh: !1,
                navigationStyle: "custom"
              })
            }, [e("module-mall-writeoff-order-detail", {
              slot: "page"
            })]);
          }
        },
        meta: {
          name: "module-mall-writeoff-order-detail",
          isNVue: !1,
          maxWidth: 0,
          pagePath: "module-mall/writeoff/order-detail",
          windowTop: 0
        }
      }, {
        path: "/module-mall/refund/apply",
        component: {
          render: function (e) {
            return e("Page", {
              props: Object.assign({}, __uniConfig.globalStyle, {
                navigationBarTitleText: "\u7533\u8BF7\u9000\u6B3E",
                enablePullDownRefresh: !1
              })
            }, [e("module-mall-refund-apply", {
              slot: "page"
            })]);
          }
        },
        meta: {
          name: "module-mall-refund-apply",
          isNVue: !1,
          maxWidth: 0,
          pagePath: "module-mall/refund/apply",
          windowTop: 44
        }
      }, {
        path: "/module-mall/refund/list",
        component: {
          render: function (e) {
            return e("Page", {
              props: Object.assign({}, __uniConfig.globalStyle, {
                navigationBarTitleText: "\u9000\u6B3E\u8BB0\u5F55",
                enablePullDownRefresh: !0
              })
            }, [e("module-mall-refund-list", {
              slot: "page"
            })]);
          }
        },
        meta: {
          name: "module-mall-refund-list",
          isNVue: !1,
          maxWidth: 0,
          pagePath: "module-mall/refund/list",
          windowTop: 44
        }
      }, {
        path: "/module-mall/refund/detail",
        component: {
          render: function (e) {
            return e("Page", {
              props: Object.assign({}, __uniConfig.globalStyle, {
                navigationBarTitleText: "\u9000\u6B3E\u8BE6\u60C5",
                enablePullDownRefresh: !1
              })
            }, [e("module-mall-refund-detail", {
              slot: "page"
            })]);
          }
        },
        meta: {
          name: "module-mall-refund-detail",
          isNVue: !1,
          maxWidth: 0,
          pagePath: "module-mall/refund/detail",
          windowTop: 44
        }
      }, {
        path: "/module-mall/writeoff-coupon/home",
        component: {
          render: function (e) {
            return e("Page", {
              props: Object.assign({}, __uniConfig.globalStyle, {
                navigationBarTitleText: "\u4F18\u60E0\u5238\u6838\u9500",
                enablePullDownRefresh: !0
              })
            }, [e("module-mall-writeoff-coupon-home", {
              slot: "page"
            })]);
          }
        },
        meta: {
          name: "module-mall-writeoff-coupon-home",
          isNVue: !1,
          maxWidth: 0,
          pagePath: "module-mall/writeoff-coupon/home",
          windowTop: 44
        }
      }, {
        path: "/module-mall/writeoff-coupon/confirm",
        component: {
          render: function (e) {
            return e("Page", {
              props: Object.assign({}, __uniConfig.globalStyle, {
                navigationBarTitleText: "\u786E\u8BA4\u6838\u9500",
                enablePullDownRefresh: !1
              })
            }, [e("module-mall-writeoff-coupon-confirm", {
              slot: "page"
            })]);
          }
        },
        meta: {
          name: "module-mall-writeoff-coupon-confirm",
          isNVue: !1,
          maxWidth: 0,
          pagePath: "module-mall/writeoff-coupon/confirm",
          windowTop: 44
        }
      }, {
        path: "/module-mall/writeoff-coupon/logdetail",
        component: {
          render: function (e) {
            return e("Page", {
              props: Object.assign({}, __uniConfig.globalStyle, {
                navigationBarTitleText: "\u6838\u9500\u8BE6\u60C5",
                enablePullDownRefresh: !1
              })
            }, [e("module-mall-writeoff-coupon-logdetail", {
              slot: "page"
            })]);
          }
        },
        meta: {
          name: "module-mall-writeoff-coupon-logdetail",
          isNVue: !1,
          maxWidth: 0,
          pagePath: "module-mall/writeoff-coupon/logdetail",
          windowTop: 44
        }
      }, {
        path: "/module-mall/writeoff-coupon/success",
        component: {
          render: function (e) {
            return e("Page", {
              props: Object.assign({}, __uniConfig.globalStyle, {
                navigationBarTitleText: "\u6838\u9500\u6210\u529F",
                enablePullDownRefresh: !1
              })
            }, [e("module-mall-writeoff-coupon-success", {
              slot: "page"
            })]);
          }
        },
        meta: {
          name: "module-mall-writeoff-coupon-success",
          isNVue: !1,
          maxWidth: 0,
          pagePath: "module-mall/writeoff-coupon/success",
          windowTop: 44
        }
      }, {
        path: "/module-mall/writeoff-coupon/loglist",
        component: {
          render: function (e) {
            return e("Page", {
              props: Object.assign({}, __uniConfig.globalStyle, {
                navigationBarTitleText: "\u6838\u9500\u5217\u8868",
                enablePullDownRefresh: !0
              })
            }, [e("module-mall-writeoff-coupon-loglist", {
              slot: "page"
            })]);
          }
        },
        meta: {
          name: "module-mall-writeoff-coupon-loglist",
          isNVue: !1,
          maxWidth: 0,
          pagePath: "module-mall/writeoff-coupon/loglist",
          windowTop: 44
        }
      }, {
        path: "/module-mall/home/home-style-three",
        component: {
          render: function (e) {
            return e("Page", {
              props: Object.assign({}, __uniConfig.globalStyle, {
                navigationBarTitleText: "\u5546\u57CE\u9996\u9875",
                enablePullDownRefresh: !1,
                navigationStyle: "custom"
              })
            }, [e("module-mall-home-home-style-three", {
              slot: "page"
            })]);
          }
        },
        meta: {
          name: "module-mall-home-home-style-three",
          isNVue: !1,
          maxWidth: 0,
          pagePath: "module-mall/home/home-style-three",
          windowTop: 0
        }
      }, {
        path: "/module-mall/home/home-style-four",
        component: {
          render: function (e) {
            return e("Page", {
              props: Object.assign({
                isQuit: !0,
                isTabBar: !0,
                tabBarIndex: 0
              }, __uniConfig.globalStyle, {
                navigationBarTitleText: "\u5546\u57CE\u9996\u9875",
                enablePullDownRefresh: !1,
                navigationStyle: "custom"
              })
            }, [e("module-mall-home-home-style-four", {
              slot: "page"
            })]);
          }
        },
        meta: {
          id: 4,
          name: "module-mall-home-home-style-four",
          isNVue: !1,
          maxWidth: 0,
          pagePath: "module-mall/home/home-style-four",
          isQuit: !0,
          isTabBar: !0,
          tabBarIndex: 0,
          windowTop: 0
        }
      }, {
        path: "/module-mall/business/business-home",
        component: {
          render: function (e) {
            return e("Page", {
              props: Object.assign({}, __uniConfig.globalStyle, {
                navigationBarTitleText: "\u5546\u5BB6\u4E3B\u9875",
                enablePullDownRefresh: !1,
                navigationStyle: "custom"
              })
            }, [e("module-mall-business-business-home", {
              slot: "page"
            })]);
          }
        },
        meta: {
          name: "module-mall-business-business-home",
          isNVue: !1,
          maxWidth: 0,
          pagePath: "module-mall/business/business-home",
          windowTop: 0
        }
      }, {
        path: "/module-mall/business/business-home-style-three",
        component: {
          render: function (e) {
            return e("Page", {
              props: Object.assign({}, __uniConfig.globalStyle, {
                navigationBarTitleText: "\u5546\u5BB6\u4E3B\u9875",
                enablePullDownRefresh: !1,
                navigationStyle: "custom"
              })
            }, [e("module-mall-business-business-home-style-three", {
              slot: "page"
            })]);
          }
        },
        meta: {
          name: "module-mall-business-business-home-style-three",
          isNVue: !1,
          maxWidth: 0,
          pagePath: "module-mall/business/business-home-style-three",
          windowTop: 0
        }
      }, {
        path: "/module-mall/business/business-detail",
        component: {
          render: function (e) {
            return e("Page", {
              props: Object.assign({}, __uniConfig.globalStyle, {
                navigationBarTitleText: "\u5546\u5BB6\u8BE6\u60C5",
                enablePullDownRefresh: !1,
                navigationStyle: "custom"
              })
            }, [e("module-mall-business-business-detail", {
              slot: "page"
            })]);
          }
        },
        meta: {
          name: "module-mall-business-business-detail",
          isNVue: !1,
          maxWidth: 0,
          pagePath: "module-mall/business/business-detail",
          windowTop: 0
        }
      }, {
        path: "/module-mall/user/user-center",
        component: {
          render: function (e) {
            return e("Page", {
              props: Object.assign({}, __uniConfig.globalStyle, {
                navigationBarTitleText: "\u6211\u7684",
                enablePullDownRefresh: !1,
                navigationStyle: "custom"
              })
            }, [e("module-mall-user-user-center", {
              slot: "page"
            })]);
          }
        },
        meta: {
          name: "module-mall-user-user-center",
          isNVue: !1,
          maxWidth: 0,
          pagePath: "module-mall/user/user-center",
          windowTop: 0
        }
      }, {
        path: "/module-mall/user/user-center-style-four",
        component: {
          render: function (e) {
            return e("Page", {
              props: Object.assign({
                isQuit: !0,
                isTabBar: !0,
                tabBarIndex: 3
              }, __uniConfig.globalStyle, {
                navigationBarTitleText: "\u6211\u7684",
                enablePullDownRefresh: !1,
                navigationStyle: "custom"
              })
            }, [e("module-mall-user-user-center-style-four", {
              slot: "page"
            })]);
          }
        },
        meta: {
          id: 5,
          name: "module-mall-user-user-center-style-four",
          isNVue: !1,
          maxWidth: 0,
          pagePath: "module-mall/user/user-center-style-four",
          isQuit: !0,
          isTabBar: !0,
          tabBarIndex: 3,
          windowTop: 0
        }
      }, {
        path: "/module-mall/bind/auth-bind",
        component: {
          render: function (e) {
            return e("Page", {
              props: Object.assign({}, __uniConfig.globalStyle, {
                navigationBarTitleText: "\u6388\u6743\u7ED1\u5B9A",
                enablePullDownRefresh: !1,
                navigationStyle: "custom"
              })
            }, [e("module-mall-bind-auth-bind", {
              slot: "page"
            })]);
          }
        },
        meta: {
          name: "module-mall-bind-auth-bind",
          isNVue: !1,
          maxWidth: 0,
          pagePath: "module-mall/bind/auth-bind",
          windowTop: 0
        }
      }, {
        path: "/module-mall/bind/login",
        component: {
          render: function (e) {
            return e("Page", {
              props: Object.assign({}, __uniConfig.globalStyle, {
                navigationBarTitleText: "\u6B63\u5728\u767B\u5F55",
                enablePullDownRefresh: !1,
                navigationStyle: "custom"
              })
            }, [e("module-mall-bind-login", {
              slot: "page"
            })]);
          }
        },
        meta: {
          name: "module-mall-bind-login",
          isNVue: !1,
          maxWidth: 0,
          pagePath: "module-mall/bind/login",
          windowTop: 0
        }
      }, {
        path: "/module-mall/zone/home",
        component: {
          render: function (e) {
            return e("Page", {
              props: Object.assign({}, __uniConfig.globalStyle, {
                navigationBarTitleText: "\u5546\u54C1\u4E13\u533A",
                enablePullDownRefresh: !1,
                navigationStyle: "custom"
              })
            }, [e("module-mall-zone-home", {
              slot: "page"
            })]);
          }
        },
        meta: {
          name: "module-mall-zone-home",
          isNVue: !1,
          maxWidth: 0,
          pagePath: "module-mall/zone/home",
          windowTop: 0
        }
      }, {
        path: "/module-mall/seckill/seckill",
        component: {
          render: function (e) {
            return e("Page", {
              props: Object.assign({}, __uniConfig.globalStyle, {
                navigationBarTitleText: "",
                enablePullDownRefresh: !1,
                navigationStyle: "custom"
              })
            }, [e("module-mall-seckill-seckill", {
              slot: "page"
            })]);
          }
        },
        meta: {
          name: "module-mall-seckill-seckill",
          isNVue: !1,
          maxWidth: 0,
          pagePath: "module-mall/seckill/seckill",
          windowTop: 0
        }
      }, {
        path: "/module-mall/comment/comment",
        component: {
          render: function (e) {
            return e("Page", {
              props: Object.assign({}, __uniConfig.globalStyle, {
                navigationBarTitleText: "\u8BC4\u4EF7\u5217\u8868",
                enablePullDownRefresh: !0
              })
            }, [e("module-mall-comment-comment", {
              slot: "page"
            })]);
          }
        },
        meta: {
          name: "module-mall-comment-comment",
          isNVue: !1,
          maxWidth: 0,
          pagePath: "module-mall/comment/comment",
          windowTop: 44
        }
      }, {
        path: "/module-mall/comment/comment-center",
        component: {
          render: function (e) {
            return e("Page", {
              props: Object.assign({}, __uniConfig.globalStyle, {
                navigationBarTitleText: "\u8BC4\u4EF7\u4E2D\u5FC3",
                enablePullDownRefresh: !0
              })
            }, [e("module-mall-comment-comment-center", {
              slot: "page"
            })]);
          }
        },
        meta: {
          name: "module-mall-comment-comment-center",
          isNVue: !1,
          maxWidth: 0,
          pagePath: "module-mall/comment/comment-center",
          windowTop: 44
        }
      }, {
        path: "/module-mall/comment/comment-create",
        component: {
          render: function (e) {
            return e("Page", {
              props: Object.assign({}, __uniConfig.globalStyle, {
                navigationBarTitleText: "\u53D1\u8868\u8BC4\u4EF7",
                enablePullDownRefresh: !1
              })
            }, [e("module-mall-comment-comment-create", {
              slot: "page"
            })]);
          }
        },
        meta: {
          name: "module-mall-comment-comment-create",
          isNVue: !1,
          maxWidth: 0,
          pagePath: "module-mall/comment/comment-create",
          windowTop: 44
        }
      }, {
        path: "/module-mall/notify/wechat-notify",
        component: {
          render: function (e) {
            return e("Page", {
              props: Object.assign({}, __uniConfig.globalStyle, {
                navigationBarTitleText: "\u5F00\u542F\u5FAE\u4FE1\u901A\u77E5",
                enablePullDownRefresh: !1,
                navigationStyle: "custom"
              })
            }, [e("module-mall-notify-wechat-notify", {
              slot: "page"
            })]);
          }
        },
        meta: {
          name: "module-mall-notify-wechat-notify",
          isNVue: !1,
          maxWidth: 0,
          pagePath: "module-mall/notify/wechat-notify",
          windowTop: 0
        }
      }, {
        path: "/module-mall/hongbao/pay",
        component: {
          render: function (e) {
            return e("Page", {
              props: Object.assign({}, __uniConfig.globalStyle, {
                navigationBarTitleText: "\u4ED8\u6B3E",
                enablePullDownRefresh: !1
              })
            }, [e("module-mall-hongbao-pay", {
              slot: "page"
            })]);
          }
        },
        meta: {
          name: "module-mall-hongbao-pay",
          isNVue: !1,
          maxWidth: 0,
          pagePath: "module-mall/hongbao/pay",
          windowTop: 44
        }
      }, {
        path: "/module-mall/hongbao/bill",
        component: {
          render: function (e) {
            return e("Page", {
              props: Object.assign({}, __uniConfig.globalStyle, {
                navigationBarTitleText: "\u8D26\u5355",
                enablePullDownRefresh: !0
              })
            }, [e("module-mall-hongbao-bill", {
              slot: "page"
            })]);
          }
        },
        meta: {
          name: "module-mall-hongbao-bill",
          isNVue: !1,
          maxWidth: 0,
          pagePath: "module-mall/hongbao/bill",
          windowTop: 44
        }
      }, {
        path: "/module-mall/hongbao/pay-detail",
        component: {
          render: function (e) {
            return e("Page", {
              props: Object.assign({}, __uniConfig.globalStyle, {
                navigationBarTitleText: "\u4ED8\u6B3E\u8BE6\u60C5",
                enablePullDownRefresh: !1
              })
            }, [e("module-mall-hongbao-pay-detail", {
              slot: "page"
            })]);
          }
        },
        meta: {
          name: "module-mall-hongbao-pay-detail",
          isNVue: !1,
          maxWidth: 0,
          pagePath: "module-mall/hongbao/pay-detail",
          windowTop: 44
        }
      }, {
        path: "/module-mall/writeoff/pay-detail",
        component: {
          render: function (e) {
            return e("Page", {
              props: Object.assign({}, __uniConfig.globalStyle, {
                navigationBarTitleText: "\u4ED8\u6B3E\u8BE6\u60C5",
                enablePullDownRefresh: !1
              })
            }, [e("module-mall-writeoff-pay-detail", {
              slot: "page"
            })]);
          }
        },
        meta: {
          name: "module-mall-writeoff-pay-detail",
          isNVue: !1,
          maxWidth: 0,
          pagePath: "module-mall/writeoff/pay-detail",
          windowTop: 44
        }
      }, {
        path: "/module-mall/writeoff/receive-money",
        component: {
          render: function (e) {
            return e("Page", {
              props: Object.assign({}, __uniConfig.globalStyle, {
                navigationBarTitleText: "\u4E8C\u7EF4\u7801\u6536\u6B3E",
                enablePullDownRefresh: !1
              })
            }, [e("module-mall-writeoff-receive-money", {
              slot: "page"
            })]);
          }
        },
        meta: {
          name: "module-mall-writeoff-receive-money",
          isNVue: !1,
          maxWidth: 0,
          pagePath: "module-mall/writeoff/receive-money",
          windowTop: 44
        }
      }, {
        path: "/module-mall/writeoff/bill",
        component: {
          render: function (e) {
            return e("Page", {
              props: Object.assign({}, __uniConfig.globalStyle, {
                navigationBarTitleText: "\u6536\u6B3E\u8BB0\u5F55",
                enablePullDownRefresh: !0
              })
            }, [e("module-mall-writeoff-bill", {
              slot: "page"
            })]);
          }
        },
        meta: {
          name: "module-mall-writeoff-bill",
          isNVue: !1,
          maxWidth: 0,
          pagePath: "module-mall/writeoff/bill",
          windowTop: 44
        }
      }, {
        path: "/module-mall/writeoff/manage/goods",
        component: {
          render: function (e) {
            return e("Page", {
              props: Object.assign({}, __uniConfig.globalStyle, {
                navigationBarTitleText: "\u5546\u54C1\u5217\u8868",
                enablePullDownRefresh: !0
              })
            }, [e("module-mall-writeoff-manage-goods", {
              slot: "page"
            })]);
          }
        },
        meta: {
          name: "module-mall-writeoff-manage-goods",
          isNVue: !1,
          maxWidth: 0,
          pagePath: "module-mall/writeoff/manage/goods",
          windowTop: 44
        }
      }, {
        path: "/module-mall/writeoff/manage/order",
        component: {
          render: function (e) {
            return e("Page", {
              props: Object.assign({}, __uniConfig.globalStyle, {
                navigationBarTitleText: "\u8BA2\u5355\u5217\u8868",
                enablePullDownRefresh: !0
              })
            }, [e("module-mall-writeoff-manage-order", {
              slot: "page"
            })]);
          }
        },
        meta: {
          name: "module-mall-writeoff-manage-order",
          isNVue: !1,
          maxWidth: 0,
          pagePath: "module-mall/writeoff/manage/order",
          windowTop: 44
        }
      }, {
        path: "/module-mall/writeoff/manage/refund",
        component: {
          render: function (e) {
            return e("Page", {
              props: Object.assign({}, __uniConfig.globalStyle, {
                navigationBarTitleText: "\u9000\u6B3E\u7BA1\u7406",
                enablePullDownRefresh: !0
              })
            }, [e("module-mall-writeoff-manage-refund", {
              slot: "page"
            })]);
          }
        },
        meta: {
          name: "module-mall-writeoff-manage-refund",
          isNVue: !1,
          maxWidth: 0,
          pagePath: "module-mall/writeoff/manage/refund",
          windowTop: 44
        }
      }, {
        path: "/module-mall/writeoff/manage/customer",
        component: {
          render: function (e) {
            return e("Page", {
              props: Object.assign({}, __uniConfig.globalStyle, {
                navigationBarTitleText: "\u5BA2\u670D\u7BA1\u7406",
                enablePullDownRefresh: !0
              })
            }, [e("module-mall-writeoff-manage-customer", {
              slot: "page"
            })]);
          }
        },
        meta: {
          name: "module-mall-writeoff-manage-customer",
          isNVue: !1,
          maxWidth: 0,
          pagePath: "module-mall/writeoff/manage/customer",
          windowTop: 44
        }
      }, {
        path: "/module-mall/writeoff/manage/home",
        component: {
          render: function (e) {
            return e("Page", {
              props: Object.assign({}, __uniConfig.globalStyle, {
                navigationBarTitleText: "\u5546\u5BB6\u4E3B\u9875",
                enablePullDownRefresh: !1
              })
            }, [e("module-mall-writeoff-manage-home", {
              slot: "page"
            })]);
          }
        },
        meta: {
          name: "module-mall-writeoff-manage-home",
          isNVue: !1,
          maxWidth: 0,
          pagePath: "module-mall/writeoff/manage/home",
          windowTop: 44
        }
      }, {
        path: "/module-mall/offline/pay",
        component: {
          render: function (e) {
            return e("Page", {
              props: Object.assign({}, __uniConfig.globalStyle, {
                navigationBarTitleText: "\u5411\u5546\u5BB6\u4ED8\u6B3E",
                enablePullDownRefresh: !1,
                navigationStyle: "custom"
              })
            }, [e("module-mall-offline-pay", {
              slot: "page"
            })]);
          }
        },
        meta: {
          name: "module-mall-offline-pay",
          isNVue: !1,
          maxWidth: 0,
          pagePath: "module-mall/offline/pay",
          windowTop: 0
        }
      }, {
        path: "/module-mall/offline/pay-log-list",
        component: {
          render: function (e) {
            return e("Page", {
              props: Object.assign({}, __uniConfig.globalStyle, {
                navigationBarTitleText: "\u4EA4\u6613\u660E\u7EC6\u5217\u8868",
                enablePullDownRefresh: !0
              })
            }, [e("module-mall-offline-pay-log-list", {
              slot: "page"
            })]);
          }
        },
        meta: {
          name: "module-mall-offline-pay-log-list",
          isNVue: !1,
          maxWidth: 0,
          pagePath: "module-mall/offline/pay-log-list",
          windowTop: 44
        }
      }, {
        path: "/module-mall/offline/pay-log-detail",
        component: {
          render: function (e) {
            return e("Page", {
              props: Object.assign({}, __uniConfig.globalStyle, {
                navigationBarTitleText: "\u4EA4\u6613\u660E\u7EC6\u8BE6\u60C5",
                enablePullDownRefresh: !1
              })
            }, [e("module-mall-offline-pay-log-detail", {
              slot: "page"
            })]);
          }
        },
        meta: {
          name: "module-mall-offline-pay-log-detail",
          isNVue: !1,
          maxWidth: 0,
          pagePath: "module-mall/offline/pay-log-detail",
          windowTop: 44
        }
      }, {
        path: "/module-member/level-info/level-info",
        component: {
          render: function (e) {
            return e("Page", {
              props: Object.assign({}, __uniConfig.globalStyle, {
                navigationBarTitleText: "\u7B49\u7EA7\u8BF4\u660E",
                enablePullDownRefresh: !1
              })
            }, [e("module-member-level-info-level-info", {
              slot: "page"
            })]);
          }
        },
        meta: {
          name: "module-member-level-info-level-info",
          isNVue: !1,
          maxWidth: 0,
          pagePath: "module-member/level-info/level-info",
          windowTop: 44
        }
      }, {
        path: "/module-member/integral-detail/integral-detail",
        component: {
          render: function (e) {
            return e("Page", {
              props: Object.assign({}, __uniConfig.globalStyle, {
                navigationBarTitleText: "\u79EF\u5206\u660E\u7EC6",
                enablePullDownRefresh: !0
              })
            }, [e("module-member-integral-detail-integral-detail", {
              slot: "page"
            })]);
          }
        },
        meta: {
          name: "module-member-integral-detail-integral-detail",
          isNVue: !1,
          maxWidth: 0,
          pagePath: "module-member/integral-detail/integral-detail",
          windowTop: 44
        }
      }, {
        path: "/module-member/integral-rank/integral-rank",
        component: {
          render: function (e) {
            return e("Page", {
              props: Object.assign({}, __uniConfig.globalStyle, {
                navigationBarTitleText: "\u79EF\u5206\u6392\u884C",
                enablePullDownRefresh: !1,
                navigationStyle: "custom"
              })
            }, [e("module-member-integral-rank-integral-rank", {
              slot: "page"
            })]);
          }
        },
        meta: {
          name: "module-member-integral-rank-integral-rank",
          isNVue: !1,
          maxWidth: 0,
          pagePath: "module-member/integral-rank/integral-rank",
          windowTop: 0
        }
      }, {
        path: "/module-member/medal/medal",
        component: {
          render: function (e) {
            return e("Page", {
              props: Object.assign({}, __uniConfig.globalStyle, {
                navigationBarTitleText: "\u52CB\u7AE0",
                enablePullDownRefresh: !1,
                navigationStyle: "custom"
              })
            }, [e("module-member-medal-medal", {
              slot: "page"
            })]);
          }
        },
        meta: {
          name: "module-member-medal-medal",
          isNVue: !1,
          maxWidth: 0,
          pagePath: "module-member/medal/medal",
          windowTop: 0
        }
      }, {
        path: "/module-member/medal/medal-detail",
        component: {
          render: function (e) {
            return e("Page", {
              props: Object.assign({}, __uniConfig.globalStyle, {
                navigationBarTitleText: "\u52CB\u7AE0\u8BE6\u60C5",
                enablePullDownRefresh: !1
              })
            }, [e("module-member-medal-medal-detail", {
              slot: "page"
            })]);
          }
        },
        meta: {
          name: "module-member-medal-medal-detail",
          isNVue: !1,
          maxWidth: 0,
          pagePath: "module-member/medal/medal-detail",
          windowTop: 44
        }
      }, {
        path: "/module-member/message/message-sort",
        component: {
          render: function (e) {
            return e("Page", {
              props: Object.assign({}, __uniConfig.globalStyle, {
                navigationBarTitleText: "\u6D88\u606F\u901A\u77E5\u5206\u7C7B",
                enablePullDownRefresh: !1
              })
            }, [e("module-member-message-message-sort", {
              slot: "page"
            })]);
          }
        },
        meta: {
          name: "module-member-message-message-sort",
          isNVue: !1,
          maxWidth: 0,
          pagePath: "module-member/message/message-sort",
          windowTop: 44
        }
      }, {
        path: "/module-member/message/message",
        component: {
          render: function (e) {
            return e("Page", {
              props: Object.assign({}, __uniConfig.globalStyle, {
                navigationBarTitleText: "\u6D88\u606F\u901A\u77E5\u5217\u8868",
                enablePullDownRefresh: !1
              })
            }, [e("module-member-message-message", {
              slot: "page"
            })]);
          }
        },
        meta: {
          name: "module-member-message-message",
          isNVue: !1,
          maxWidth: 0,
          pagePath: "module-member/message/message",
          windowTop: 44
        }
      }, {
        path: "/module-member/welfare/welfare",
        component: {
          render: function (e) {
            return e("Page", {
              props: Object.assign({}, __uniConfig.globalStyle, {
                navigationBarTitleText: "\u4EAB\u6743\u76CA",
                enablePullDownRefresh: !0,
                navigationStyle: "custom"
              })
            }, [e("module-member-welfare-welfare", {
              slot: "page"
            })]);
          }
        },
        meta: {
          name: "module-member-welfare-welfare",
          isNVue: !1,
          maxWidth: 0,
          pagePath: "module-member/welfare/welfare",
          windowTop: 0
        }
      }, {
        path: "/module-member/currency-rule/currency-rule",
        component: {
          render: function (e) {
            return e("Page", {
              props: Object.assign({}, __uniConfig.globalStyle, {
                navigationBarTitleText: "\u89C4\u5219\u8BF4\u660E",
                enablePullDownRefresh: !1
              })
            }, [e("module-member-currency-rule-currency-rule", {
              slot: "page"
            })]);
          }
        },
        meta: {
          name: "module-member-currency-rule-currency-rule",
          isNVue: !1,
          maxWidth: 0,
          pagePath: "module-member/currency-rule/currency-rule",
          windowTop: 44
        }
      }, {
        path: "/module-member/signin/signin-rule",
        component: {
          render: function (e) {
            return e("Page", {
              props: Object.assign({}, __uniConfig.globalStyle, {
                navigationBarTitleText: "\u7B7E\u5230\u89C4\u5219",
                enablePullDownRefresh: !1
              })
            }, [e("module-member-signin-signin-rule", {
              slot: "page"
            })]);
          }
        },
        meta: {
          name: "module-member-signin-signin-rule",
          isNVue: !1,
          maxWidth: 0,
          pagePath: "module-member/signin/signin-rule",
          windowTop: 44
        }
      }, {
        path: "/module-member/cashout/cashout",
        component: {
          render: function (e) {
            return e("Page", {
              props: Object.assign({}, __uniConfig.globalStyle, {
                navigationBarTitleText: "\u63D0\u73B0",
                enablePullDownRefresh: !1
              })
            }, [e("module-member-cashout-cashout", {
              slot: "page"
            })]);
          }
        },
        meta: {
          name: "module-member-cashout-cashout",
          isNVue: !1,
          maxWidth: 0,
          pagePath: "module-member/cashout/cashout",
          windowTop: 44
        }
      }, {
        path: "/module-member/cashout/cashout-log",
        component: {
          render: function (e) {
            return e("Page", {
              props: Object.assign({}, __uniConfig.globalStyle, {
                navigationBarTitleText: "\u5151\u6362\u8BB0\u5F55",
                enablePullDownRefresh: !0
              })
            }, [e("module-member-cashout-cashout-log", {
              slot: "page"
            })]);
          }
        },
        meta: {
          name: "module-member-cashout-cashout-log",
          isNVue: !1,
          maxWidth: 0,
          pagePath: "module-member/cashout/cashout-log",
          windowTop: 44
        }
      }, {
        path: "/module-member/bind/bind-wechat",
        component: {
          render: function (e) {
            return e("Page", {
              props: Object.assign({}, __uniConfig.globalStyle, {
                navigationBarTitleText: "\u7ED1\u5B9A\u5FAE\u4FE1",
                enablePullDownRefresh: !1,
                navigationStyle: "custom"
              })
            }, [e("module-member-bind-bind-wechat", {
              slot: "page"
            })]);
          }
        },
        meta: {
          name: "module-member-bind-bind-wechat",
          isNVue: !1,
          maxWidth: 0,
          pagePath: "module-member/bind/bind-wechat",
          windowTop: 0
        }
      }, {
        path: "/module-answer/home/home",
        component: {
          render: function (e) {
            return e("Page", {
              props: Object.assign({}, __uniConfig.globalStyle, {
                navigationBarTitleText: "",
                enablePullDownRefresh: !0,
                navigationStyle: "custom"
              })
            }, [e("module-answer-home-home", {
              slot: "page"
            })]);
          }
        },
        meta: {
          name: "module-answer-home-home",
          isNVue: !1,
          maxWidth: 0,
          pagePath: "module-answer/home/home",
          windowTop: 0
        }
      }, {
        path: "/module-answer/question/question",
        component: {
          render: function (e) {
            return e("Page", {
              props: Object.assign({}, __uniConfig.globalStyle, {
                navigationBarTitleText: "\u9898\u76EE\u9875\u9762",
                enablePullDownRefresh: !1,
                navigationStyle: "custom"
              })
            }, [e("module-answer-question-question", {
              slot: "page"
            })]);
          }
        },
        meta: {
          name: "module-answer-question-question",
          isNVue: !1,
          maxWidth: 0,
          pagePath: "module-answer/question/question",
          windowTop: 0
        }
      }, {
        path: "/module-answer/answer-log/answer-log",
        component: {
          render: function (e) {
            return e("Page", {
              props: Object.assign({}, __uniConfig.globalStyle, {
                navigationBarTitleText: "\u7B54\u9898\u8BB0\u5F55",
                enablePullDownRefresh: !0
              })
            }, [e("module-answer-answer-log-answer-log", {
              slot: "page"
            })]);
          }
        },
        meta: {
          name: "module-answer-answer-log-answer-log",
          isNVue: !1,
          maxWidth: 0,
          pagePath: "module-answer/answer-log/answer-log",
          windowTop: 44
        }
      }, {
        path: "/module-answer/answer-log/answer-detail",
        component: {
          render: function (e) {
            return e("Page", {
              props: Object.assign({}, __uniConfig.globalStyle, {
                navigationBarTitleText: "\u7B54\u9898\u8BE6\u60C5",
                enablePullDownRefresh: !1
              })
            }, [e("module-answer-answer-log-answer-detail", {
              slot: "page"
            })]);
          }
        },
        meta: {
          name: "module-answer-answer-log-answer-detail",
          isNVue: !1,
          maxWidth: 0,
          pagePath: "module-answer/answer-log/answer-detail",
          windowTop: 44
        }
      }, {
        path: "/module-live/home/home",
        component: {
          render: function (e) {
            return e("Page", {
              props: Object.assign({}, __uniConfig.globalStyle, {
                navigationBarTitleText: "\u76F4\u64AD\u9996\u9875",
                enablePullDownRefresh: !0
              })
            }, [e("module-live-home-home", {
              slot: "page"
            })]);
          }
        },
        meta: {
          name: "module-live-home-home",
          isNVue: !1,
          maxWidth: 0,
          pagePath: "module-live/home/home",
          windowTop: 44
        }
      }, {
        path: "/module-live/detail/detail",
        component: {
          render: function (e) {
            return e("Page", {
              props: Object.assign({}, __uniConfig.globalStyle, {
                navigationBarTitleText: "\u76F4\u64AD\u8BE6\u60C5",
                enablePullDownRefresh: !1,
                navigationStyle: "custom"
              })
            }, [e("module-live-detail-detail", {
              slot: "page"
            })]);
          }
        },
        meta: {
          name: "module-live-detail-detail",
          isNVue: !1,
          maxWidth: 0,
          pagePath: "module-live/detail/detail",
          windowTop: 0
        }
      }, {
        path: "/module-live/report/report",
        component: {
          render: function (e) {
            return e("Page", {
              props: Object.assign({}, __uniConfig.globalStyle, {
                navigationBarTitleText: "\u76F4\u64AD\u4E3E\u62A5",
                enablePullDownRefresh: !1,
                navigationStyle: "custom"
              })
            }, [e("module-live-report-report", {
              slot: "page"
            })]);
          }
        },
        meta: {
          name: "module-live-report-report",
          isNVue: !1,
          maxWidth: 0,
          pagePath: "module-live/report/report",
          windowTop: 0
        }
      }, {
        path: "/module-activity/home/home",
        component: {
          render: function (e) {
            return e("Page", {
              props: Object.assign({}, __uniConfig.globalStyle, {
                navigationBarTitleText: "\u6D3B\u52A8",
                enablePullDownRefresh: !0,
                navigationStyle: "custom"
              })
            }, [e("module-activity-home-home", {
              slot: "page"
            })]);
          }
        },
        meta: {
          name: "module-activity-home-home",
          isNVue: !1,
          maxWidth: 0,
          pagePath: "module-activity/home/home",
          windowTop: 0
        }
      }, {
        path: "/module-vote/home/home",
        component: {
          render: function (e) {
            return e("Page", {
              props: Object.assign({}, __uniConfig.globalStyle, {
                navigationBarTitleText: "",
                enablePullDownRefresh: !0,
                navigationStyle: "custom"
              })
            }, [e("module-vote-home-home", {
              slot: "page"
            })]);
          }
        },
        meta: {
          name: "module-vote-home-home",
          isNVue: !1,
          maxWidth: 0,
          pagePath: "module-vote/home/home",
          windowTop: 0
        }
      }, {
        path: "/module-vote/vote-detail/vote-detail",
        component: {
          render: function (e) {
            return e("Page", {
              props: Object.assign({}, __uniConfig.globalStyle, {
                navigationBarTitleText: "",
                enablePullDownRefresh: !1
              })
            }, [e("module-vote-vote-detail-vote-detail", {
              slot: "page"
            })]);
          }
        },
        meta: {
          name: "module-vote-vote-detail-vote-detail",
          isNVue: !1,
          maxWidth: 0,
          pagePath: "module-vote/vote-detail/vote-detail",
          windowTop: 44
        }
      }, {
        path: "/module-vote/result/result",
        component: {
          render: function (e) {
            return e("Page", {
              props: Object.assign({}, __uniConfig.globalStyle, {
                navigationBarTitleText: "\u6295\u7968\u7ED3\u679C",
                enablePullDownRefresh: !0
              })
            }, [e("module-vote-result-result", {
              slot: "page"
            })]);
          }
        },
        meta: {
          name: "module-vote-result-result",
          isNVue: !1,
          maxWidth: 0,
          pagePath: "module-vote/result/result",
          windowTop: 44
        }
      }, {
        path: "/module-vote/score/home",
        component: {
          render: function (e) {
            return e("Page", {
              props: Object.assign({}, __uniConfig.globalStyle, {
                navigationBarTitleText: "\u8BC4\u59D4\u9996\u9875",
                enablePullDownRefresh: !0,
                navigationStyle: "custom"
              })
            }, [e("module-vote-score-home", {
              slot: "page"
            })]);
          }
        },
        meta: {
          name: "module-vote-score-home",
          isNVue: !1,
          maxWidth: 0,
          pagePath: "module-vote/score/home",
          windowTop: 0
        }
      }, {
        path: "/module-vote/score/detail",
        component: {
          render: function (e) {
            return e("Page", {
              props: Object.assign({}, __uniConfig.globalStyle, {
                navigationBarTitleText: "",
                enablePullDownRefresh: !1
              })
            }, [e("module-vote-score-detail", {
              slot: "page"
            })]);
          }
        },
        meta: {
          name: "module-vote-score-detail",
          isNVue: !1,
          maxWidth: 0,
          pagePath: "module-vote/score/detail",
          windowTop: 44
        }
      }, {
        path: "/module-lottery/home/home",
        component: {
          render: function (e) {
            return e("Page", {
              props: Object.assign({}, __uniConfig.globalStyle, {
                navigationBarTitleText: "",
                enablePullDownRefresh: !1,
                navigationStyle: "custom"
              })
            }, [e("module-lottery-home-home", {
              slot: "page"
            })]);
          }
        },
        meta: {
          name: "module-lottery-home-home",
          isNVue: !1,
          maxWidth: 0,
          pagePath: "module-lottery/home/home",
          windowTop: 0
        }
      }, {
        path: "/module-lottery/win-record/win-record",
        component: {
          render: function (e) {
            return e("Page", {
              props: Object.assign({}, __uniConfig.globalStyle, {
                navigationBarTitleText: "\u4E2D\u5956\u8BB0\u5F55",
                enablePullDownRefresh: !0,
                navigationStyle: "custom"
              })
            }, [e("module-lottery-win-record-win-record", {
              slot: "page"
            })]);
          }
        },
        meta: {
          name: "module-lottery-win-record-win-record",
          isNVue: !1,
          maxWidth: 0,
          pagePath: "module-lottery/win-record/win-record",
          windowTop: 0
        }
      }, {
        path: "/module-lottery/win-record-detail/win-record-detail",
        component: {
          render: function (e) {
            return e("Page", {
              props: Object.assign({}, __uniConfig.globalStyle, {
                navigationBarTitleText: "\u5956\u54C1\u8BE6\u60C5",
                enablePullDownRefresh: !1
              })
            }, [e("module-lottery-win-record-detail-win-record-detail", {
              slot: "page"
            })]);
          }
        },
        meta: {
          name: "module-lottery-win-record-detail-win-record-detail",
          isNVue: !1,
          maxWidth: 0,
          pagePath: "module-lottery/win-record-detail/win-record-detail",
          windowTop: 44
        }
      }, {
        path: "/module-lottery/writeoff/home",
        component: {
          render: function (e) {
            return e("Page", {
              props: Object.assign({}, __uniConfig.globalStyle, {
                navigationBarTitleText: "\u5956\u54C1\u6838\u9500",
                enablePullDownRefresh: !0
              })
            }, [e("module-lottery-writeoff-home", {
              slot: "page"
            })]);
          }
        },
        meta: {
          name: "module-lottery-writeoff-home",
          isNVue: !1,
          maxWidth: 0,
          pagePath: "module-lottery/writeoff/home",
          windowTop: 44
        }
      }, {
        path: "/module-lottery/writeoff/confirm",
        component: {
          render: function (e) {
            return e("Page", {
              props: Object.assign({}, __uniConfig.globalStyle, {
                navigationBarTitleText: "\u786E\u8BA4\u6838\u9500",
                enablePullDownRefresh: !1
              })
            }, [e("module-lottery-writeoff-confirm", {
              slot: "page"
            })]);
          }
        },
        meta: {
          name: "module-lottery-writeoff-confirm",
          isNVue: !1,
          maxWidth: 0,
          pagePath: "module-lottery/writeoff/confirm",
          windowTop: 44
        }
      }, {
        path: "/module-lottery/writeoff/logdetail",
        component: {
          render: function (e) {
            return e("Page", {
              props: Object.assign({}, __uniConfig.globalStyle, {
                navigationBarTitleText: "\u6838\u9500\u8BE6\u60C5",
                enablePullDownRefresh: !1
              })
            }, [e("module-lottery-writeoff-logdetail", {
              slot: "page"
            })]);
          }
        },
        meta: {
          name: "module-lottery-writeoff-logdetail",
          isNVue: !1,
          maxWidth: 0,
          pagePath: "module-lottery/writeoff/logdetail",
          windowTop: 44
        }
      }, {
        path: "/module-lottery/writeoff/success",
        component: {
          render: function (e) {
            return e("Page", {
              props: Object.assign({}, __uniConfig.globalStyle, {
                navigationBarTitleText: "\u6838\u9500\u6210\u529F",
                enablePullDownRefresh: !1
              })
            }, [e("module-lottery-writeoff-success", {
              slot: "page"
            })]);
          }
        },
        meta: {
          name: "module-lottery-writeoff-success",
          isNVue: !1,
          maxWidth: 0,
          pagePath: "module-lottery/writeoff/success",
          windowTop: 44
        }
      }, {
        path: "/module-lottery/writeoff/loglist",
        component: {
          render: function (e) {
            return e("Page", {
              props: Object.assign({}, __uniConfig.globalStyle, {
                navigationBarTitleText: "\u6211\u7684\u6838\u9500\u5217\u8868",
                enablePullDownRefresh: !0
              })
            }, [e("module-lottery-writeoff-loglist", {
              slot: "page"
            })]);
          }
        },
        meta: {
          name: "module-lottery-writeoff-loglist",
          isNVue: !1,
          maxWidth: 0,
          pagePath: "module-lottery/writeoff/loglist",
          windowTop: 44
        }
      }, {
        path: "/module-signup/home/home",
        component: {
          render: function (e) {
            return e("Page", {
              props: Object.assign({}, __uniConfig.globalStyle, {
                navigationBarTitleText: "",
                enablePullDownRefresh: !1,
                navigationStyle: "custom"
              })
            }, [e("module-signup-home-home", {
              slot: "page"
            })]);
          }
        },
        meta: {
          name: "module-signup-home-home",
          isNVue: !1,
          maxWidth: 0,
          pagePath: "module-signup/home/home",
          windowTop: 0
        }
      }, {
        path: "/module-signup/home/update-home",
        component: {
          render: function (e) {
            return e("Page", {
              props: Object.assign({}, __uniConfig.globalStyle, {
                navigationBarTitleText: "",
                enablePullDownRefresh: !1,
                navigationStyle: "custom"
              })
            }, [e("module-signup-home-update-home", {
              slot: "page"
            })]);
          }
        },
        meta: {
          name: "module-signup-home-update-home",
          isNVue: !1,
          maxWidth: 0,
          pagePath: "module-signup/home/update-home",
          windowTop: 0
        }
      }, {
        path: "/module-signup/activity-log/my-log-list",
        component: {
          render: function (e) {
            return e("Page", {
              props: Object.assign({}, __uniConfig.globalStyle, {
                navigationBarTitleText: "\u6211\u7684\u8BB0\u5F55\u5217\u8868",
                enablePullDownRefresh: !0
              })
            }, [e("module-signup-activity-log-my-log-list", {
              slot: "page"
            })]);
          }
        },
        meta: {
          name: "module-signup-activity-log-my-log-list",
          isNVue: !1,
          maxWidth: 0,
          pagePath: "module-signup/activity-log/my-log-list",
          windowTop: 44
        }
      }, {
        path: "/module-signup/activity-log/log-list",
        component: {
          render: function (e) {
            return e("Page", {
              props: Object.assign({}, __uniConfig.globalStyle, {
                navigationBarTitleText: "\u6D3B\u52A8\u8BB0\u5F55\u5217\u8868",
                enablePullDownRefresh: !0
              })
            }, [e("module-signup-activity-log-log-list", {
              slot: "page"
            })]);
          }
        },
        meta: {
          name: "module-signup-activity-log-log-list",
          isNVue: !1,
          maxWidth: 0,
          pagePath: "module-signup/activity-log/log-list",
          windowTop: 44
        }
      }, {
        path: "/module-signup/activity-log/log-detail",
        component: {
          render: function (e) {
            return e("Page", {
              props: Object.assign({}, __uniConfig.globalStyle, {
                navigationBarTitleText: "\u6D3B\u52A8\u8BB0\u5F55\u8BE6\u60C5",
                enablePullDownRefresh: !1
              })
            }, [e("module-signup-activity-log-log-detail", {
              slot: "page"
            })]);
          }
        },
        meta: {
          name: "module-signup-activity-log-log-detail",
          isNVue: !1,
          maxWidth: 0,
          pagePath: "module-signup/activity-log/log-detail",
          windowTop: 44
        }
      }, {
        path: "/module-signup/writeoff/auth-bind",
        component: {
          render: function (e) {
            return e("Page", {
              props: Object.assign({}, __uniConfig.globalStyle, {
                navigationBarTitleText: "\u6388\u6743\u7ED1\u5B9A",
                enablePullDownRefresh: !1,
                navigationStyle: "custom"
              })
            }, [e("module-signup-writeoff-auth-bind", {
              slot: "page"
            })]);
          }
        },
        meta: {
          name: "module-signup-writeoff-auth-bind",
          isNVue: !1,
          maxWidth: 0,
          pagePath: "module-signup/writeoff/auth-bind",
          windowTop: 0
        }
      }, {
        path: "/module-signup/writeoff/confirm",
        component: {
          render: function (e) {
            return e("Page", {
              props: Object.assign({}, __uniConfig.globalStyle, {
                navigationBarTitleText: "\u786E\u8BA4\u6838\u9500",
                enablePullDownRefresh: !1,
                navigationStyle: "custom"
              })
            }, [e("module-signup-writeoff-confirm", {
              slot: "page"
            })]);
          }
        },
        meta: {
          name: "module-signup-writeoff-confirm",
          isNVue: !1,
          maxWidth: 0,
          pagePath: "module-signup/writeoff/confirm",
          windowTop: 0
        }
      }, {
        path: "/module-signup/writeoff/writeoff-list",
        component: {
          render: function (e) {
            return e("Page", {
              props: Object.assign({}, __uniConfig.globalStyle, {
                navigationBarTitleText: "\u5DF2\u6838\u9500\u5217\u8868",
                enablePullDownRefresh: !0
              })
            }, [e("module-signup-writeoff-writeoff-list", {
              slot: "page"
            })]);
          }
        },
        meta: {
          name: "module-signup-writeoff-writeoff-list",
          isNVue: !1,
          maxWidth: 0,
          pagePath: "module-signup/writeoff/writeoff-list",
          windowTop: 44
        }
      }, {
        path: "/module-supertopic/home/home",
        component: {
          render: function (e) {
            return e("Page", {
              props: Object.assign({}, __uniConfig.globalStyle, {
                navigationBarTitleText: "",
                enablePullDownRefresh: !0,
                navigationStyle: "custom",
                onReachBottomDistance: 200
              })
            }, [e("module-supertopic-home-home", {
              slot: "page"
            })]);
          }
        },
        meta: {
          name: "module-supertopic-home-home",
          isNVue: !1,
          maxWidth: 0,
          pagePath: "module-supertopic/home/home",
          windowTop: 0
        }
      }, {
        path: "/module-supertopic/detail/detail",
        component: {
          render: function (e) {
            return e("Page", {
              props: Object.assign({}, __uniConfig.globalStyle, {
                navigationBarTitleText: "\u8BE6\u60C5",
                enablePullDownRefresh: !1
              })
            }, [e("module-supertopic-detail-detail", {
              slot: "page"
            })]);
          }
        },
        meta: {
          name: "module-supertopic-detail-detail",
          isNVue: !1,
          maxWidth: 0,
          pagePath: "module-supertopic/detail/detail",
          windowTop: 44
        }
      }, {
        path: "/module-supertopic/detail/mylog",
        component: {
          render: function (e) {
            return e("Page", {
              props: Object.assign({}, __uniConfig.globalStyle, {
                navigationBarTitleText: "",
                enablePullDownRefresh: !1
              })
            }, [e("module-supertopic-detail-mylog", {
              slot: "page"
            })]);
          }
        },
        meta: {
          name: "module-supertopic-detail-mylog",
          isNVue: !1,
          maxWidth: 0,
          pagePath: "module-supertopic/detail/mylog",
          windowTop: 44
        }
      }, {
        path: "/module-supertopic/me/me",
        component: {
          render: function (e) {
            return e("Page", {
              props: Object.assign({}, __uniConfig.globalStyle, {
                navigationBarTitleText: "\u6211\u7684",
                enablePullDownRefresh: !1
              })
            }, [e("module-supertopic-me-me", {
              slot: "page"
            })]);
          }
        },
        meta: {
          name: "module-supertopic-me-me",
          isNVue: !1,
          maxWidth: 0,
          pagePath: "module-supertopic/me/me",
          windowTop: 44
        }
      }, {
        path: "/module-checkers/home/home",
        component: {
          render: function (e) {
            return e("Page", {
              props: Object.assign({}, __uniConfig.globalStyle, {
                navigationBarTitleText: "\u8DF3\u68CB",
                enablePullDownRefresh: !1,
                navigationStyle: "custom"
              })
            }, [e("module-checkers-home-home", {
              slot: "page"
            })]);
          }
        },
        meta: {
          name: "module-checkers-home-home",
          isNVue: !1,
          maxWidth: 0,
          pagePath: "module-checkers/home/home",
          windowTop: 0
        }
      }, {
        path: "/module-help/home/home",
        component: {
          render: function (e) {
            return e("Page", {
              props: Object.assign({}, __uniConfig.globalStyle, {
                navigationBarTitleText: "\u52A9\u529B",
                enablePullDownRefresh: !0,
                navigationStyle: "custom"
              })
            }, [e("module-help-home-home", {
              slot: "page"
            })]);
          }
        },
        meta: {
          name: "module-help-home-home",
          isNVue: !1,
          maxWidth: 0,
          pagePath: "module-help/home/home",
          windowTop: 0
        }
      }, {
        path: "/module-poetry/home/home",
        component: {
          render: function (e) {
            return e("Page", {
              props: Object.assign({}, __uniConfig.globalStyle, {
                navigationBarTitleText: "",
                enablePullDownRefresh: !1,
                navigationStyle: "custom"
              })
            }, [e("module-poetry-home-home", {
              slot: "page"
            })]);
          }
        },
        meta: {
          name: "module-poetry-home-home",
          isNVue: !1,
          maxWidth: 0,
          pagePath: "module-poetry/home/home",
          windowTop: 0
        }
      }, {
        path: "/module-poetry/question/question",
        component: {
          render: function (e) {
            return e("Page", {
              props: Object.assign({}, __uniConfig.globalStyle, {
                navigationBarTitleText: "",
                enablePullDownRefresh: !0,
                navigationStyle: "custom"
              })
            }, [e("module-poetry-question-question", {
              slot: "page"
            })]);
          }
        },
        meta: {
          name: "module-poetry-question-question",
          isNVue: !1,
          maxWidth: 0,
          pagePath: "module-poetry/question/question",
          windowTop: 0
        }
      }, {
        path: "/module-poetry/rank-list/rank-list",
        component: {
          render: function (e) {
            return e("Page", {
              props: Object.assign({}, __uniConfig.globalStyle, {
                navigationBarTitleText: "\u6392\u884C\u699C",
                enablePullDownRefresh: !0
              })
            }, [e("module-poetry-rank-list-rank-list", {
              slot: "page"
            })]);
          }
        },
        meta: {
          name: "module-poetry-rank-list-rank-list",
          isNVue: !1,
          maxWidth: 0,
          pagePath: "module-poetry/rank-list/rank-list",
          windowTop: 44
        }
      }, {
        path: "/module-poetry/question/question-two",
        component: {
          render: function (e) {
            return e("Page", {
              props: Object.assign({}, __uniConfig.globalStyle, {
                navigationBarTitleText: "",
                enablePullDownRefresh: !0,
                navigationStyle: "custom"
              })
            }, [e("module-poetry-question-question-two", {
              slot: "page"
            })]);
          }
        },
        meta: {
          name: "module-poetry-question-question-two",
          isNVue: !1,
          maxWidth: 0,
          pagePath: "module-poetry/question/question-two",
          windowTop: 0
        }
      }, {
        path: "/module-poetry/home/home-two",
        component: {
          render: function (e) {
            return e("Page", {
              props: Object.assign({}, __uniConfig.globalStyle, {
                navigationBarTitleText: "",
                enablePullDownRefresh: !1,
                navigationStyle: "custom"
              })
            }, [e("module-poetry-home-home-two", {
              slot: "page"
            })]);
          }
        },
        meta: {
          name: "module-poetry-home-home-two",
          isNVue: !1,
          maxWidth: 0,
          pagePath: "module-poetry/home/home-two",
          windowTop: 0
        }
      }, {
        path: "/module-cms/news/detail",
        component: {
          render: function (e) {
            return e("Page", {
              props: Object.assign({}, __uniConfig.globalStyle, {
                navigationBarTitleText: "",
                enablePullDownRefresh: !1,
                navigationStyle: "custom"
              })
            }, [e("module-cms-news-detail", {
              slot: "page"
            })]);
          }
        },
        meta: {
          name: "module-cms-news-detail",
          isNVue: !1,
          maxWidth: 0,
          pagePath: "module-cms/news/detail",
          windowTop: 0
        }
      }, {
        path: "/module-cms/atlas/detail",
        component: {
          render: function (e) {
            return e("Page", {
              props: Object.assign({}, __uniConfig.globalStyle, {
                navigationBarTitleText: "",
                enablePullDownRefresh: !1
              })
            }, [e("module-cms-atlas-detail", {
              slot: "page"
            })]);
          }
        },
        meta: {
          name: "module-cms-atlas-detail",
          isNVue: !1,
          maxWidth: 0,
          pagePath: "module-cms/atlas/detail",
          windowTop: 44
        }
      }, {
        path: "/module-cms/video/detail",
        component: {
          render: function (e) {
            return e("Page", {
              props: Object.assign({}, __uniConfig.globalStyle, {
                navigationBarTitleText: "",
                enablePullDownRefresh: !1,
                navigationBarBackgroundColor: "#000",
                navigationBarTextStyle: "white"
              })
            }, [e("module-cms-video-detail", {
              slot: "page"
            })]);
          }
        },
        meta: {
          name: "module-cms-video-detail",
          isNVue: !1,
          maxWidth: 0,
          pagePath: "module-cms/video/detail",
          windowTop: 44
        }
      }, {
        path: "/module-page/home/home",
        component: {
          render: function (e) {
            return e("Page", {
              props: Object.assign({}, __uniConfig.globalStyle, {
                navigationBarTitleText: "",
                enablePullDownRefresh: !1,
                navigationStyle: "custom"
              })
            }, [e("module-page-home-home", {
              slot: "page"
            })]);
          }
        },
        meta: {
          name: "module-page-home-home",
          isNVue: !1,
          maxWidth: 0,
          pagePath: "module-page/home/home",
          windowTop: 0
        }
      }, {
        path: "/module-invite/home/home",
        component: {
          render: function (e) {
            return e("Page", {
              props: Object.assign({}, __uniConfig.globalStyle, {
                navigationBarTitleText: "",
                enablePullDownRefresh: !1,
                navigationStyle: "custom"
              })
            }, [e("module-invite-home-home", {
              slot: "page"
            })]);
          }
        },
        meta: {
          name: "module-invite-home-home",
          isNVue: !1,
          maxWidth: 0,
          pagePath: "module-invite/home/home",
          windowTop: 0
        }
      }, {
        path: "/module-invite/invite/invite",
        component: {
          render: function (e) {
            return e("Page", {
              props: Object.assign({}, __uniConfig.globalStyle, {
                navigationBarTitleText: "",
                enablePullDownRefresh: !1,
                navigationStyle: "custom"
              })
            }, [e("module-invite-invite-invite", {
              slot: "page"
            })]);
          }
        },
        meta: {
          name: "module-invite-invite-invite",
          isNVue: !1,
          maxWidth: 0,
          pagePath: "module-invite/invite/invite",
          windowTop: 0
        }
      }, {
        path: "/module-footmark/home/home",
        component: {
          render: function (e) {
            return e("Page", {
              props: Object.assign({}, __uniConfig.globalStyle, {
                navigationBarTitleText: "",
                enablePullDownRefresh: !1,
                navigationStyle: "custom"
              })
            }, [e("module-footmark-home-home", {
              slot: "page"
            })]);
          }
        },
        meta: {
          name: "module-footmark-home-home",
          isNVue: !1,
          maxWidth: 0,
          pagePath: "module-footmark/home/home",
          windowTop: 0
        }
      }, {
        path: "/module-footmark/log-detail/log-detail",
        component: {
          render: function (e) {
            return e("Page", {
              props: Object.assign({}, __uniConfig.globalStyle, {
                navigationBarTitleText: "",
                enablePullDownRefresh: !1
              })
            }, [e("module-footmark-log-detail-log-detail", {
              slot: "page"
            })]);
          }
        },
        meta: {
          name: "module-footmark-log-detail-log-detail",
          isNVue: !1,
          maxWidth: 0,
          pagePath: "module-footmark/log-detail/log-detail",
          windowTop: 44
        }
      }, {
        path: "/module-signin/home/home",
        component: {
          render: function (e) {
            return e("Page", {
              props: Object.assign({}, __uniConfig.globalStyle, {
                navigationBarTitleText: "",
                enablePullDownRefresh: !1,
                navigationStyle: "custom"
              })
            }, [e("module-signin-home-home", {
              slot: "page"
            })]);
          }
        },
        meta: {
          name: "module-signin-home-home",
          isNVue: !1,
          maxWidth: 0,
          pagePath: "module-signin/home/home",
          windowTop: 0
        }
      }, {
        path: "/module-wish/home/home",
        component: {
          render: function (e) {
            return e("Page", {
              props: Object.assign({}, __uniConfig.globalStyle, {
                navigationBarTitleText: "",
                enablePullDownRefresh: !1,
                navigationStyle: "custom"
              })
            }, [e("module-wish-home-home", {
              slot: "page"
            })]);
          }
        },
        meta: {
          name: "module-wish-home-home",
          isNVue: !1,
          maxWidth: 0,
          pagePath: "module-wish/home/home",
          windowTop: 0
        }
      }, {
        path: "/module-clockin/home/home",
        component: {
          render: function (e) {
            return e("Page", {
              props: Object.assign({}, __uniConfig.globalStyle, {
                navigationBarTitleText: "",
                enablePullDownRefresh: !1,
                navigationStyle: "custom"
              })
            }, [e("module-clockin-home-home", {
              slot: "page"
            })]);
          }
        },
        meta: {
          name: "module-clockin-home-home",
          isNVue: !1,
          maxWidth: 0,
          pagePath: "module-clockin/home/home",
          windowTop: 0
        }
      }, {
        path: "/module-clockin/member/join-list",
        component: {
          render: function (e) {
            return e("Page", {
              props: Object.assign({}, __uniConfig.globalStyle, {
                navigationBarTitleText: "\u53C2\u4E0E\u6210\u5458",
                enablePullDownRefresh: !0
              })
            }, [e("module-clockin-member-join-list", {
              slot: "page"
            })]);
          }
        },
        meta: {
          name: "module-clockin-member-join-list",
          isNVue: !1,
          maxWidth: 0,
          pagePath: "module-clockin/member/join-list",
          windowTop: 44
        }
      }, {
        path: "/module-clockin/member/rank-list",
        component: {
          render: function (e) {
            return e("Page", {
              props: Object.assign({}, __uniConfig.globalStyle, {
                navigationBarTitleText: "\u6392\u884C\u699C",
                enablePullDownRefresh: !0
              })
            }, [e("module-clockin-member-rank-list", {
              slot: "page"
            })]);
          }
        },
        meta: {
          name: "module-clockin-member-rank-list",
          isNVue: !1,
          maxWidth: 0,
          pagePath: "module-clockin/member/rank-list",
          windowTop: 44
        }
      }, {
        path: "/module-clockin/log/log",
        component: {
          render: function (e) {
            return e("Page", {
              props: Object.assign({}, __uniConfig.globalStyle, {
                navigationBarTitleText: "\u6211\u7684\u6253\u5361\u8BB0\u5F55",
                enablePullDownRefresh: !0
              })
            }, [e("module-clockin-log-log", {
              slot: "page"
            })]);
          }
        },
        meta: {
          name: "module-clockin-log-log",
          isNVue: !1,
          maxWidth: 0,
          pagePath: "module-clockin/log/log",
          windowTop: 44
        }
      }, {
        path: "/module-clockin/cert/get-cert",
        component: {
          render: function (e) {
            return e("Page", {
              props: Object.assign({}, __uniConfig.globalStyle, {
                navigationBarTitleText: "",
                enablePullDownRefresh: !1,
                navigationStyle: "custom"
              })
            }, [e("module-clockin-cert-get-cert", {
              slot: "page"
            })]);
          }
        },
        meta: {
          name: "module-clockin-cert-get-cert",
          isNVue: !1,
          maxWidth: 0,
          pagePath: "module-clockin/cert/get-cert",
          windowTop: 0
        }
      }, {
        path: "/module-study/home/home",
        component: {
          render: function (e) {
            return e("Page", {
              props: Object.assign({}, __uniConfig.globalStyle, {
                navigationBarTitleText: "",
                enablePullDownRefresh: !1,
                navigationStyle: "custom"
              })
            }, [e("module-study-home-home", {
              slot: "page"
            })]);
          }
        },
        meta: {
          name: "module-study-home-home",
          isNVue: !1,
          maxWidth: 0,
          pagePath: "module-study/home/home",
          windowTop: 0
        }
      }, {
        path: "/module-study/pass-detail/pass-detail",
        component: {
          render: function (e) {
            return e("Page", {
              props: Object.assign({}, __uniConfig.globalStyle, {
                navigationBarTitleText: "",
                enablePullDownRefresh: !1,
                navigationStyle: "custom"
              })
            }, [e("module-study-pass-detail-pass-detail", {
              slot: "page"
            })]);
          }
        },
        meta: {
          name: "module-study-pass-detail-pass-detail",
          isNVue: !1,
          maxWidth: 0,
          pagePath: "module-study/pass-detail/pass-detail",
          windowTop: 0
        }
      }, {
        path: "/module-guess/home/home",
        component: {
          render: function (e) {
            return e("Page", {
              props: Object.assign({}, __uniConfig.globalStyle, {
                navigationBarTitleText: "",
                enablePullDownRefresh: !1,
                navigationStyle: "custom"
              })
            }, [e("module-guess-home-home", {
              slot: "page"
            })]);
          }
        },
        meta: {
          name: "module-guess-home-home",
          isNVue: !1,
          maxWidth: 0,
          pagePath: "module-guess/home/home",
          windowTop: 0
        }
      }, {
        path: "/module-guess/log/activity-log",
        component: {
          render: function (e) {
            return e("Page", {
              props: Object.assign({}, __uniConfig.globalStyle, {
                navigationBarTitleText: "\u6D3B\u52A8\u8BB0\u5F55",
                enablePullDownRefresh: !1
              })
            }, [e("module-guess-log-activity-log", {
              slot: "page"
            })]);
          }
        },
        meta: {
          name: "module-guess-log-activity-log",
          isNVue: !1,
          maxWidth: 0,
          pagePath: "module-guess/log/activity-log",
          windowTop: 44
        }
      }, {
        path: "/module-guess/home/pk",
        component: {
          render: function (e) {
            return e("Page", {
              props: Object.assign({}, __uniConfig.globalStyle, {
                navigationBarTitleText: "",
                enablePullDownRefresh: !1,
                navigationStyle: "custom"
              })
            }, [e("module-guess-home-pk", {
              slot: "page"
            })]);
          }
        },
        meta: {
          name: "module-guess-home-pk",
          isNVue: !1,
          maxWidth: 0,
          pagePath: "module-guess/home/pk",
          windowTop: 0
        }
      }, {
        path: "/module-guess/log/pk-log",
        component: {
          render: function (e) {
            return e("Page", {
              props: Object.assign({}, __uniConfig.globalStyle, {
                navigationBarTitleText: "",
                enablePullDownRefresh: !0
              })
            }, [e("module-guess-log-pk-log", {
              slot: "page"
            })]);
          }
        },
        meta: {
          name: "module-guess-log-pk-log",
          isNVue: !1,
          maxWidth: 0,
          pagePath: "module-guess/log/pk-log",
          windowTop: 44
        }
      }, {
        path: "/module-photo/home/home",
        component: {
          render: function (e) {
            return e("Page", {
              props: Object.assign({}, __uniConfig.globalStyle, {
                navigationBarTitleText: "",
                enablePullDownRefresh: !0,
                navigationStyle: "custom"
              })
            }, [e("module-photo-home-home", {
              slot: "page"
            })]);
          }
        },
        meta: {
          name: "module-photo-home-home",
          isNVue: !1,
          maxWidth: 0,
          pagePath: "module-photo/home/home",
          windowTop: 0
        }
      }, {
        path: "/module-ecnyform/home/home",
        component: {
          render: function (e) {
            return e("Page", {
              props: Object.assign({}, __uniConfig.globalStyle, {
                navigationBarTitleText: "",
                enablePullDownRefresh: !1,
                navigationStyle: "custom"
              })
            }, [e("module-ecnyform-home-home", {
              slot: "page"
            })]);
          }
        },
        meta: {
          name: "module-ecnyform-home-home",
          isNVue: !1,
          maxWidth: 0,
          pagePath: "module-ecnyform/home/home",
          windowTop: 0
        }
      }, {
        path: "/module-ecnyform/business/list",
        component: {
          render: function (e) {
            return e("Page", {
              props: Object.assign({}, __uniConfig.globalStyle, {
                navigationBarTitleText: "\u5546\u5BB6\u5217\u8868",
                enablePullDownRefresh: !1
              })
            }, [e("module-ecnyform-business-list", {
              slot: "page"
            })]);
          }
        },
        meta: {
          name: "module-ecnyform-business-list",
          isNVue: !1,
          maxWidth: 0,
          pagePath: "module-ecnyform/business/list",
          windowTop: 44
        }
      }, {
        path: "/module-ecnyform/activity-log/my-log-list",
        component: {
          render: function (e) {
            return e("Page", {
              props: Object.assign({}, __uniConfig.globalStyle, {
                navigationBarTitleText: "\u6211\u7684\u8BB0\u5F55",
                enablePullDownRefresh: !0
              })
            }, [e("module-ecnyform-activity-log-my-log-list", {
              slot: "page"
            })]);
          }
        },
        meta: {
          name: "module-ecnyform-activity-log-my-log-list",
          isNVue: !1,
          maxWidth: 0,
          pagePath: "module-ecnyform/activity-log/my-log-list",
          windowTop: 44
        }
      }, {
        path: "/module-screen-interact/home/home",
        component: {
          render: function (e) {
            return e("Page", {
              props: Object.assign({}, __uniConfig.globalStyle, {
                navigationBarTitleText: "",
                enablePullDownRefresh: !1,
                navigationStyle: "custom"
              })
            }, [e("module-screen-interact-home-home", {
              slot: "page"
            })]);
          }
        },
        meta: {
          name: "module-screen-interact-home-home",
          isNVue: !1,
          maxWidth: 0,
          pagePath: "module-screen-interact/home/home",
          windowTop: 0
        }
      }, {
        path: "/module-screen-interact/win-record-detail/win-record-detail",
        component: {
          render: function (e) {
            return e("Page", {
              props: Object.assign({}, __uniConfig.globalStyle, {
                navigationBarTitleText: "\u5956\u54C1\u8BE6\u60C5",
                enablePullDownRefresh: !1
              })
            }, [e("module-screen-interact-win-record-detail-win-record-detail", {
              slot: "page"
            })]);
          }
        },
        meta: {
          name: "module-screen-interact-win-record-detail-win-record-detail",
          isNVue: !1,
          maxWidth: 0,
          pagePath: "module-screen-interact/win-record-detail/win-record-detail",
          windowTop: 44
        }
      }, {
        path: "/module-ai/face-fusion/home/home",
        component: {
          render: function (e) {
            return e("Page", {
              props: Object.assign({}, __uniConfig.globalStyle, {
                navigationBarTitleText: "",
                enablePullDownRefresh: !1,
                navigationStyle: "custom"
              })
            }, [e("module-ai-face-fusion-home-home", {
              slot: "page"
            })]);
          }
        },
        meta: {
          name: "module-ai-face-fusion-home-home",
          isNVue: !1,
          maxWidth: 0,
          pagePath: "module-ai/face-fusion/home/home",
          windowTop: 0
        }
      }, {
        path: "/module-farm/home/home",
        component: {
          render: function (e) {
            return e("Page", {
              props: Object.assign({}, __uniConfig.globalStyle, {
                navigationBarTitleText: "",
                enablePullDownRefresh: !1,
                navigationStyle: "custom"
              })
            }, [e("module-farm-home-home", {
              slot: "page"
            })]);
          }
        },
        meta: {
          name: "module-farm-home-home",
          isNVue: !1,
          maxWidth: 0,
          pagePath: "module-farm/home/home",
          windowTop: 0
        }
      }, {
        path: "/module-farm/game/game",
        component: {
          render: function (e) {
            return e("Page", {
              props: Object.assign({}, __uniConfig.globalStyle, {
                navigationBarTitleText: "",
                enablePullDownRefresh: !1,
                navigationStyle: "custom"
              })
            }, [e("module-farm-game-game", {
              slot: "page"
            })]);
          }
        },
        meta: {
          name: "module-farm-game-game",
          isNVue: !1,
          maxWidth: 0,
          pagePath: "module-farm/game/game",
          windowTop: 0
        }
      }, {
        path: "/module-farm/goods-list/goods-list",
        component: {
          render: function (e) {
            return e("Page", {
              props: Object.assign({}, __uniConfig.globalStyle, {
                navigationBarTitleText: "\u5546\u54C1\u5217\u8868",
                enablePullDownRefresh: !1,
                navigationStyle: "custom"
              })
            }, [e("module-farm-goods-list-goods-list", {
              slot: "page"
            })]);
          }
        },
        meta: {
          name: "module-farm-goods-list-goods-list",
          isNVue: !1,
          maxWidth: 0,
          pagePath: "module-farm/goods-list/goods-list",
          windowTop: 0
        }
      }, {
        path: "/module-farm/goods-exchange/goods-exchange",
        component: {
          render: function (e) {
            return e("Page", {
              props: Object.assign({}, __uniConfig.globalStyle, {
                navigationBarTitleText: "\u5546\u54C1\u5151\u6362",
                enablePullDownRefresh: !1,
                navigationStyle: "custom"
              })
            }, [e("module-farm-goods-exchange-goods-exchange", {
              slot: "page"
            })]);
          }
        },
        meta: {
          name: "module-farm-goods-exchange-goods-exchange",
          isNVue: !1,
          maxWidth: 0,
          pagePath: "module-farm/goods-exchange/goods-exchange",
          windowTop: 0
        }
      }, {
        path: "/module-farm-kinds/home/home",
        component: {
          render: function (e) {
            return e("Page", {
              props: Object.assign({}, __uniConfig.globalStyle, {
                navigationBarTitleText: "",
                enablePullDownRefresh: !1,
                navigationStyle: "custom"
              })
            }, [e("module-farm-kinds-home-home", {
              slot: "page"
            })]);
          }
        },
        meta: {
          name: "module-farm-kinds-home-home",
          isNVue: !1,
          maxWidth: 0,
          pagePath: "module-farm-kinds/home/home",
          windowTop: 0
        }
      }, {
        path: "/module-farm-kinds/goods-list/goods-list",
        component: {
          render: function (e) {
            return e("Page", {
              props: Object.assign({}, __uniConfig.globalStyle, {
                navigationBarTitleText: "\u5546\u54C1\u5217\u8868",
                enablePullDownRefresh: !1,
                navigationStyle: "custom"
              })
            }, [e("module-farm-kinds-goods-list-goods-list", {
              slot: "page"
            })]);
          }
        },
        meta: {
          name: "module-farm-kinds-goods-list-goods-list",
          isNVue: !1,
          maxWidth: 0,
          pagePath: "module-farm-kinds/goods-list/goods-list",
          windowTop: 0
        }
      }, {
        path: "/module-farm-kinds/goods-exchange/goods-exchange",
        component: {
          render: function (e) {
            return e("Page", {
              props: Object.assign({}, __uniConfig.globalStyle, {
                navigationBarTitleText: "\u5546\u54C1\u5151\u6362",
                enablePullDownRefresh: !1,
                navigationStyle: "custom"
              })
            }, [e("module-farm-kinds-goods-exchange-goods-exchange", {
              slot: "page"
            })]);
          }
        },
        meta: {
          name: "module-farm-kinds-goods-exchange-goods-exchange",
          isNVue: !1,
          maxWidth: 0,
          pagePath: "module-farm-kinds/goods-exchange/goods-exchange",
          windowTop: 0
        }
      }, {
        path: "/module-word/home/home",
        component: {
          render: function (e) {
            return e("Page", {
              props: Object.assign({}, __uniConfig.globalStyle, {
                navigationBarTitleText: "",
                enablePullDownRefresh: !1,
                navigationStyle: "custom"
              })
            }, [e("module-word-home-home", {
              slot: "page"
            })]);
          }
        },
        meta: {
          name: "module-word-home-home",
          isNVue: !1,
          maxWidth: 0,
          pagePath: "module-word/home/home",
          windowTop: 0
        }
      }, {
        path: "/module-word/game/game",
        component: {
          render: function (e) {
            return e("Page", {
              props: Object.assign({}, __uniConfig.globalStyle, {
                navigationBarTitleText: "\u627E\u5B57\u6E38\u620F",
                enablePullDownRefresh: !1,
                navigationStyle: "custom"
              })
            }, [e("module-word-game-game", {
              slot: "page"
            })]);
          }
        },
        meta: {
          name: "module-word-game-game",
          isNVue: !1,
          maxWidth: 0,
          pagePath: "module-word/game/game",
          windowTop: 0
        }
      }, {
        path: "/module-article-task/home/home",
        component: {
          render: function (e) {
            return e("Page", {
              props: Object.assign({}, __uniConfig.globalStyle, {
                navigationBarTitleText: "",
                enablePullDownRefresh: !1,
                navigationStyle: "custom"
              })
            }, [e("module-article-task-home-home", {
              slot: "page"
            })]);
          }
        },
        meta: {
          name: "module-article-task-home-home",
          isNVue: !1,
          maxWidth: 0,
          pagePath: "module-article-task/home/home",
          windowTop: 0
        }
      }, {
        path: "/module-article-task/single/single-task",
        component: {
          render: function (e) {
            return e("Page", {
              props: Object.assign({}, __uniConfig.globalStyle, {
                navigationBarTitleText: "",
                enablePullDownRefresh: !1,
                navigationStyle: "custom"
              })
            }, [e("module-article-task-single-single-task", {
              slot: "page"
            })]);
          }
        },
        meta: {
          name: "module-article-task-single-single-task",
          isNVue: !1,
          maxWidth: 0,
          pagePath: "module-article-task/single/single-task",
          windowTop: 0
        }
      }, {
        path: "/module-venue-clockin/home/home",
        component: {
          render: function (e) {
            return e("Page", {
              props: Object.assign({}, __uniConfig.globalStyle, {
                navigationBarTitleText: "",
                enablePullDownRefresh: !1,
                navigationStyle: "custom"
              })
            }, [e("module-venue-clockin-home-home", {
              slot: "page"
            })]);
          }
        },
        meta: {
          name: "module-venue-clockin-home-home",
          isNVue: !1,
          maxWidth: 0,
          pagePath: "module-venue-clockin/home/home",
          windowTop: 0
        }
      }, {
        path: "/module-venue-clockin/detail/detail",
        component: {
          render: function (e) {
            return e("Page", {
              props: Object.assign({}, __uniConfig.globalStyle, {
                navigationBarTitleText: "",
                enablePullDownRefresh: !1,
                navigationStyle: "custom"
              })
            }, [e("module-venue-clockin-detail-detail", {
              slot: "page"
            })]);
          }
        },
        meta: {
          name: "module-venue-clockin-detail-detail",
          isNVue: !1,
          maxWidth: 0,
          pagePath: "module-venue-clockin/detail/detail",
          windowTop: 0
        }
      }, {
        path: "/module-booking-lottery/home/home",
        component: {
          render: function (e) {
            return e("Page", {
              props: Object.assign({}, __uniConfig.globalStyle, {
                navigationBarTitleText: "",
                enablePullDownRefresh: !1,
                navigationStyle: "custom"
              })
            }, [e("module-booking-lottery-home-home", {
              slot: "page"
            })]);
          }
        },
        meta: {
          name: "module-booking-lottery-home-home",
          isNVue: !1,
          maxWidth: 0,
          pagePath: "module-booking-lottery/home/home",
          windowTop: 0
        }
      }, {
        path: "/module-booking-lottery/task/task",
        component: {
          render: function (e) {
            return e("Page", {
              props: Object.assign({}, __uniConfig.globalStyle, {
                navigationBarTitleText: "",
                enablePullDownRefresh: !1,
                navigationStyle: "custom"
              })
            }, [e("module-booking-lottery-task-task", {
              slot: "page"
            })]);
          }
        },
        meta: {
          name: "module-booking-lottery-task-task",
          isNVue: !1,
          maxWidth: 0,
          pagePath: "module-booking-lottery/task/task",
          windowTop: 0
        }
      }, {
        path: "/module-sdk/demo/unisdk",
        component: {
          render: function (e) {
            return e("Page", {
              props: Object.assign({}, __uniConfig.globalStyle, {
                navigationBarTitleText: "YD-UNISDK DEMO",
                enablePullDownRefresh: !1
              })
            }, [e("module-sdk-demo-unisdk", {
              slot: "page"
            })]);
          }
        },
        meta: {
          name: "module-sdk-demo-unisdk",
          isNVue: !1,
          maxWidth: 0,
          pagePath: "module-sdk/demo/unisdk",
          windowTop: 44
        }
      }, {
        path: "/module-sdk/demo/jssdk",
        component: {
          render: function (e) {
            return e("Page", {
              props: Object.assign({}, __uniConfig.globalStyle, {
                navigationBarTitleText: "YD-JSSDK DEMO",
                enablePullDownRefresh: !1
              })
            }, [e("module-sdk-demo-jssdk", {
              slot: "page"
            })]);
          }
        },
        meta: {
          name: "module-sdk-demo-jssdk",
          isNVue: !1,
          maxWidth: 0,
          pagePath: "module-sdk/demo/jssdk",
          windowTop: 44
        }
      }, {
        path: "/module-sdk/demo/smartcitysdk",
        component: {
          render: function (e) {
            return e("Page", {
              props: Object.assign({}, __uniConfig.globalStyle, {
                navigationBarTitleText: "YD-SMARTCITY-SDK DEMO",
                enablePullDownRefresh: !1
              })
            }, [e("module-sdk-demo-smartcitysdk", {
              slot: "page"
            })]);
          }
        },
        meta: {
          name: "module-sdk-demo-smartcitysdk",
          isNVue: !1,
          maxWidth: 0,
          pagePath: "module-sdk/demo/smartcitysdk",
          windowTop: 44
        }
      }, {
        path: "/module-sdk/demo/cmstopsdk",
        component: {
          render: function (e) {
            return e("Page", {
              props: Object.assign({}, __uniConfig.globalStyle, {
                navigationBarTitleText: "YD-CMSTOP-SDK DEMO",
                enablePullDownRefresh: !1
              })
            }, [e("module-sdk-demo-cmstopsdk", {
              slot: "page"
            })]);
          }
        },
        meta: {
          name: "module-sdk-demo-cmstopsdk",
          isNVue: !1,
          maxWidth: 0,
          pagePath: "module-sdk/demo/cmstopsdk",
          windowTop: 44
        }
      }, {
        path: "/module-sdk/demo/cmstopnewsdk",
        component: {
          render: function (e) {
            return e("Page", {
              props: Object.assign({}, __uniConfig.globalStyle, {
                navigationBarTitleText: "YD-CMSTOP-NEW-SDK DEMO",
                enablePullDownRefresh: !1
              })
            }, [e("module-sdk-demo-cmstopnewsdk", {
              slot: "page"
            })]);
          }
        },
        meta: {
          name: "module-sdk-demo-cmstopnewsdk",
          isNVue: !1,
          maxWidth: 0,
          pagePath: "module-sdk/demo/cmstopnewsdk",
          windowTop: 44
        }
      }, {
        path: "/module-sdk/demo/fluttersdk",
        component: {
          render: function (e) {
            return e("Page", {
              props: Object.assign({}, __uniConfig.globalStyle, {
                navigationBarTitleText: "YD-FLUTTER-SDK DEMO",
                enablePullDownRefresh: !1
              })
            }, [e("module-sdk-demo-fluttersdk", {
              slot: "page"
            })]);
          }
        },
        meta: {
          name: "module-sdk-demo-fluttersdk",
          isNVue: !1,
          maxWidth: 0,
          pagePath: "module-sdk/demo/fluttersdk",
          windowTop: 44
        }
      }, {
        path: "/module-sdk/demo/yongpaisdk",
        component: {
          render: function (e) {
            return e("Page", {
              props: Object.assign({}, __uniConfig.globalStyle, {
                navigationBarTitleText: "YD-YONGPAI-SDK DEMO",
                enablePullDownRefresh: !1
              })
            }, [e("module-sdk-demo-yongpaisdk", {
              slot: "page"
            })]);
          }
        },
        meta: {
          name: "module-sdk-demo-yongpaisdk",
          isNVue: !1,
          maxWidth: 0,
          pagePath: "module-sdk/demo/yongpaisdk",
          windowTop: 44
        }
      }, {
        path: "/module-sdk/demo/nbtvsdk",
        component: {
          render: function (e) {
            return e("Page", {
              props: Object.assign({}, __uniConfig.globalStyle, {
                navigationBarTitleText: "YD-NBTV-SDK DEMO",
                enablePullDownRefresh: !1
              })
            }, [e("module-sdk-demo-nbtvsdk", {
              slot: "page"
            })]);
          }
        },
        meta: {
          name: "module-sdk-demo-nbtvsdk",
          isNVue: !1,
          maxWidth: 0,
          pagePath: "module-sdk/demo/nbtvsdk",
          windowTop: 44
        }
      }, {
        path: "/module-sdk/demo/tianmusdk",
        component: {
          render: function (e) {
            return e("Page", {
              props: Object.assign({}, __uniConfig.globalStyle, {
                navigationBarTitleText: "YD-TIANMU-SDK DEMO",
                enablePullDownRefresh: !1
              })
            }, [e("module-sdk-demo-tianmusdk", {
              slot: "page"
            })]);
          }
        },
        meta: {
          name: "module-sdk-demo-tianmusdk",
          isNVue: !1,
          maxWidth: 0,
          pagePath: "module-sdk/demo/tianmusdk",
          windowTop: 44
        }
      }, {
        path: "/module-sdk/demo/trssdk",
        component: {
          render: function (e) {
            return e("Page", {
              props: Object.assign({}, __uniConfig.globalStyle, {
                navigationBarTitleText: "YD-TRS-SDK DEMO",
                enablePullDownRefresh: !1
              })
            }, [e("module-sdk-demo-trssdk", {
              slot: "page"
            })]);
          }
        },
        meta: {
          name: "module-sdk-demo-trssdk",
          isNVue: !1,
          maxWidth: 0,
          pagePath: "module-sdk/demo/trssdk",
          windowTop: 44
        }
      }, {
        path: "/module-sdk/demo/tianmasdk",
        component: {
          render: function (e) {
            return e("Page", {
              props: Object.assign({}, __uniConfig.globalStyle, {
                navigationBarTitleText: "YD-TIANMA-SDK DEMO",
                enablePullDownRefresh: !1
              })
            }, [e("module-sdk-demo-tianmasdk", {
              slot: "page"
            })]);
          }
        },
        meta: {
          name: "module-sdk-demo-tianmasdk",
          isNVue: !1,
          maxWidth: 0,
          pagePath: "module-sdk/demo/tianmasdk",
          windowTop: 44
        }
      }, {
        path: "/module-sdk/demo/injssdk",
        component: {
          render: function (e) {
            return e("Page", {
              props: Object.assign({}, __uniConfig.globalStyle, {
                navigationBarTitleText: "YD-INJS-SDK DEMO",
                enablePullDownRefresh: !1
              })
            }, [e("module-sdk-demo-injssdk", {
              slot: "page"
            })]);
          }
        },
        meta: {
          name: "module-sdk-demo-injssdk",
          isNVue: !1,
          maxWidth: 0,
          pagePath: "module-sdk/demo/injssdk",
          windowTop: 44
        }
      }, {
        path: "/module-sdk/demo/fangzhengsdk",
        component: {
          render: function (e) {
            return e("Page", {
              props: Object.assign({}, __uniConfig.globalStyle, {
                navigationBarTitleText: "YD-FANG-ZHENG-SDK DEMO",
                enablePullDownRefresh: !1
              })
            }, [e("module-sdk-demo-fangzhengsdk", {
              slot: "page"
            })]);
          }
        },
        meta: {
          name: "module-sdk-demo-fangzhengsdk",
          isNVue: !1,
          maxWidth: 0,
          pagePath: "module-sdk/demo/fangzhengsdk",
          windowTop: 44
        }
      }, {
        path: "/module-sdk/demo/xingkongyunsdk",
        component: {
          render: function (e) {
            return e("Page", {
              props: Object.assign({}, __uniConfig.globalStyle, {
                navigationBarTitleText: "YD-XING-KONG-YUN-SDK DEMO",
                enablePullDownRefresh: !1
              })
            }, [e("module-sdk-demo-xingkongyunsdk", {
              slot: "page"
            })]);
          }
        },
        meta: {
          name: "module-sdk-demo-xingkongyunsdk",
          isNVue: !1,
          maxWidth: 0,
          pagePath: "module-sdk/demo/xingkongyunsdk",
          windowTop: 44
        }
      }, {
        path: "/module-sdk/demo/cmstopv3sdk",
        component: {
          render: function (e) {
            return e("Page", {
              props: Object.assign({}, __uniConfig.globalStyle, {
                navigationBarTitleText: "YD-CMSTOP-V3-SDK DEMO",
                enablePullDownRefresh: !1
              })
            }, [e("module-sdk-demo-cmstopv3sdk", {
              slot: "page"
            })]);
          }
        },
        meta: {
          name: "module-sdk-demo-cmstopv3sdk",
          isNVue: !1,
          maxWidth: 0,
          pagePath: "module-sdk/demo/cmstopv3sdk",
          windowTop: 44
        }
      }, {
        path: "/module-sdk/demo/xiuzhousdk",
        component: {
          render: function (e) {
            return e("Page", {
              props: Object.assign({}, __uniConfig.globalStyle, {
                navigationBarTitleText: "YD-XIUZHOU-SDK DEMO",
                enablePullDownRefresh: !1
              })
            }, [e("module-sdk-demo-xiuzhousdk", {
              slot: "page"
            })]);
          }
        },
        meta: {
          name: "module-sdk-demo-xiuzhousdk",
          isNVue: !1,
          maxWidth: 0,
          pagePath: "module-sdk/demo/xiuzhousdk",
          windowTop: 44
        }
      }, {
        path: "/module-sdk/demo/ziyangsdk",
        component: {
          render: function (e) {
            return e("Page", {
              props: Object.assign({}, __uniConfig.globalStyle, {
                navigationBarTitleText: "YD-ZIYANG-SDK DEMO",
                enablePullDownRefresh: !1
              })
            }, [e("module-sdk-demo-ziyangsdk", {
              slot: "page"
            })]);
          }
        },
        meta: {
          name: "module-sdk-demo-ziyangsdk",
          isNVue: !1,
          maxWidth: 0,
          pagePath: "module-sdk/demo/ziyangsdk",
          windowTop: 44
        }
      }, {
        path: "/module-sdk/demo/yantaisdk",
        component: {
          render: function (e) {
            return e("Page", {
              props: Object.assign({}, __uniConfig.globalStyle, {
                navigationBarTitleText: "YD-YANTAI-SDK DEMO",
                enablePullDownRefresh: !1
              })
            }, [e("module-sdk-demo-yantaisdk", {
              slot: "page"
            })]);
          }
        },
        meta: {
          name: "module-sdk-demo-yantaisdk",
          isNVue: !1,
          maxWidth: 0,
          pagePath: "module-sdk/demo/yantaisdk",
          windowTop: 44
        }
      }, {
        path: "/module-customer/xmtv/flowers",
        component: {
          render: function (e) {
            return e("Page", {
              props: Object.assign({}, __uniConfig.globalStyle, {
                navigationBarTitleText: "\u82B1\u82B1\u53A6\u95E8",
                enablePullDownRefresh: !1,
                navigationStyle: "custom"
              })
            }, [e("module-customer-xmtv-flowers", {
              slot: "page"
            })]);
          }
        },
        meta: {
          name: "module-customer-xmtv-flowers",
          isNVue: !1,
          maxWidth: 0,
          pagePath: "module-customer/xmtv/flowers",
          windowTop: 0
        }
      }, {
        path: "/module-customer/xmtv/short-videos",
        component: {
          render: function (e) {
            return e("Page", {
              props: Object.assign({}, __uniConfig.globalStyle, {
                navigationBarTitleText: "\u804C\u5DE5\u8FBE\u4EBA\u79C0",
                enablePullDownRefresh: !1,
                navigationStyle: "custom"
              })
            }, [e("module-customer-xmtv-short-videos", {
              slot: "page"
            })]);
          }
        },
        meta: {
          name: "module-customer-xmtv-short-videos",
          isNVue: !1,
          maxWidth: 0,
          pagePath: "module-customer/xmtv/short-videos",
          windowTop: 0
        }
      }, {
        path: "/module-customer/xmtv/publicize",
        component: {
          render: function (e) {
            return e("Page", {
              props: Object.assign({}, __uniConfig.globalStyle, {
                navigationBarTitleText: "\u804C\u5DE5\u8FBE\u4EBA\u79C0",
                enablePullDownRefresh: !1,
                navigationStyle: "custom"
              })
            }, [e("module-customer-xmtv-publicize", {
              slot: "page"
            })]);
          }
        },
        meta: {
          name: "module-customer-xmtv-publicize",
          isNVue: !1,
          maxWidth: 0,
          pagePath: "module-customer/xmtv/publicize",
          windowTop: 0
        }
      }, {
        path: "/module-customer/kannh/game",
        component: {
          render: function (e) {
            return e("Page", {
              props: Object.assign({}, __uniConfig.globalStyle, {
                navigationBarTitleText: "",
                enablePullDownRefresh: !1,
                navigationStyle: "custom"
              })
            }, [e("module-customer-kannh-game", {
              slot: "page"
            })]);
          }
        },
        meta: {
          name: "module-customer-kannh-game",
          isNVue: !1,
          maxWidth: 0,
          pagePath: "module-customer/kannh/game",
          windowTop: 0
        }
      }, {
        path: "/module-customer/fjdaily/guide",
        component: {
          render: function (e) {
            return e("Page", {
              props: Object.assign({}, __uniConfig.globalStyle, {
                navigationBarTitleText: "",
                enablePullDownRefresh: !1,
                navigationStyle: "custom"
              })
            }, [e("module-customer-fjdaily-guide", {
              slot: "page"
            })]);
          }
        },
        meta: {
          name: "module-customer-fjdaily-guide",
          isNVue: !1,
          maxWidth: 0,
          pagePath: "module-customer/fjdaily/guide",
          windowTop: 0
        }
      }, {
        path: "/module-customer/fjdaily/home",
        component: {
          render: function (e) {
            return e("Page", {
              props: Object.assign({}, __uniConfig.globalStyle, {
                navigationBarTitleText: "",
                enablePullDownRefresh: !1,
                navigationStyle: "custom"
              })
            }, [e("module-customer-fjdaily-home", {
              slot: "page"
            })]);
          }
        },
        meta: {
          name: "module-customer-fjdaily-home",
          isNVue: !1,
          maxWidth: 0,
          pagePath: "module-customer/fjdaily/home",
          windowTop: 0
        }
      }, {
        path: "/module-customer/fjdaily/clockin",
        component: {
          render: function (e) {
            return e("Page", {
              props: Object.assign({}, __uniConfig.globalStyle, {
                navigationBarTitleText: "",
                enablePullDownRefresh: !1,
                navigationStyle: "custom"
              })
            }, [e("module-customer-fjdaily-clockin", {
              slot: "page"
            })]);
          }
        },
        meta: {
          name: "module-customer-fjdaily-clockin",
          isNVue: !1,
          maxWidth: 0,
          pagePath: "module-customer/fjdaily/clockin",
          windowTop: 0
        }
      }, {
        path: "/module-customer/fhtvn/rank-list",
        component: {
          render: function (e) {
            return e("Page", {
              props: Object.assign({}, __uniConfig.globalStyle, {
                navigationBarTitleText: "",
                enablePullDownRefresh: !1,
                navigationStyle: "custom"
              })
            }, [e("module-customer-fhtvn-rank-list", {
              slot: "page"
            })]);
          }
        },
        meta: {
          name: "module-customer-fhtvn-rank-list",
          isNVue: !1,
          maxWidth: 0,
          pagePath: "module-customer/fhtvn/rank-list",
          windowTop: 0
        }
      }, {
        path: "/module-customer/fhtvn/no-rank-list",
        component: {
          render: function (e) {
            return e("Page", {
              props: Object.assign({}, __uniConfig.globalStyle, {
                navigationBarTitleText: "",
                enablePullDownRefresh: !1,
                navigationStyle: "custom"
              })
            }, [e("module-customer-fhtvn-no-rank-list", {
              slot: "page"
            })]);
          }
        },
        meta: {
          name: "module-customer-fhtvn-no-rank-list",
          isNVue: !1,
          maxWidth: 0,
          pagePath: "module-customer/fhtvn/no-rank-list",
          windowTop: 0
        }
      }, {
        path: "/module-customer/fhtvn/main-map",
        component: {
          render: function (e) {
            return e("Page", {
              props: Object.assign({}, __uniConfig.globalStyle, {
                navigationBarTitleText: "",
                enablePullDownRefresh: !1,
                navigationStyle: "custom"
              })
            }, [e("module-customer-fhtvn-main-map", {
              slot: "page"
            })]);
          }
        },
        meta: {
          name: "module-customer-fhtvn-main-map",
          isNVue: !1,
          maxWidth: 0,
          pagePath: "module-customer/fhtvn/main-map",
          windowTop: 0
        }
      }, {
        path: "/module-customer/xstv/guide",
        component: {
          render: function (e) {
            return e("Page", {
              props: Object.assign({}, __uniConfig.globalStyle, {
                navigationBarTitleText: "",
                enablePullDownRefresh: !1,
                navigationStyle: "custom"
              })
            }, [e("module-customer-xstv-guide", {
              slot: "page"
            })]);
          }
        },
        meta: {
          name: "module-customer-xstv-guide",
          isNVue: !1,
          maxWidth: 0,
          pagePath: "module-customer/xstv/guide",
          windowTop: 0
        }
      }, {
        path: "/module-dilate/home/home",
        component: {
          render: function (e) {
            return e("Page", {
              props: Object.assign({}, __uniConfig.globalStyle, {
                navigationBarTitleText: "",
                enablePullDownRefresh: !1,
                navigationStyle: "custom"
              })
            }, [e("module-dilate-home-home", {
              slot: "page"
            })]);
          }
        },
        meta: {
          name: "module-dilate-home-home",
          isNVue: !1,
          maxWidth: 0,
          pagePath: "module-dilate/home/home",
          windowTop: 0
        }
      }, {
        path: "/module-query/home/home",
        component: {
          render: function (e) {
            return e("Page", {
              props: Object.assign({}, __uniConfig.globalStyle, {
                navigationBarTitleText: "",
                navigationStyle: "custom",
                enablePullDownRefresh: !1
              })
            }, [e("module-query-home-home", {
              slot: "page"
            })]);
          }
        },
        meta: {
          name: "module-query-home-home",
          isNVue: !1,
          maxWidth: 0,
          pagePath: "module-query/home/home",
          windowTop: 0
        }
      }, {
        path: "/module-query/search/search-results",
        component: {
          render: function (e) {
            return e("Page", {
              props: Object.assign({}, __uniConfig.globalStyle, {
                navigationBarTitleText: "\u67E5\u8BE2\u7ED3\u679C",
                navigationStyle: "custom",
                enablePullDownRefresh: !1
              })
            }, [e("module-query-search-search-results", {
              slot: "page"
            })]);
          }
        },
        meta: {
          name: "module-query-search-search-results",
          isNVue: !1,
          maxWidth: 0,
          pagePath: "module-query/search/search-results",
          windowTop: 0
        }
      }, {
        path: "/module-collect-card/home/home",
        component: {
          render: function (e) {
            return e("Page", {
              props: Object.assign({}, __uniConfig.globalStyle, {
                navigationBarTitleText: "",
                enablePullDownRefresh: !0,
                navigationStyle: "custom"
              })
            }, [e("module-collect-card-home-home", {
              slot: "page"
            })]);
          }
        },
        meta: {
          name: "module-collect-card-home-home",
          isNVue: !1,
          maxWidth: 0,
          pagePath: "module-collect-card/home/home",
          windowTop: 0
        }
      }, {
        path: "/module-stepsport/home/home",
        component: {
          render: function (e) {
            return e("Page", {
              props: Object.assign({}, __uniConfig.globalStyle, {
                navigationBarTitleText: "",
                enablePullDownRefresh: !1,
                navigationStyle: "custom"
              })
            }, [e("module-stepsport-home-home", {
              slot: "page"
            })]);
          }
        },
        meta: {
          name: "module-stepsport-home-home",
          isNVue: !1,
          maxWidth: 0,
          pagePath: "module-stepsport/home/home",
          windowTop: 0
        }
      }, {
        path: "/module-whipped-eggs/home/home",
        component: {
          render: function (e) {
            return e("Page", {
              props: Object.assign({}, __uniConfig.globalStyle, {
                navigationBarTitleText: "\u63BC\u86CB",
                enablePullDownRefresh: !0,
                navigationStyle: "custom"
              })
            }, [e("module-whipped-eggs-home-home", {
              slot: "page"
            })]);
          }
        },
        meta: {
          name: "module-whipped-eggs-home-home",
          isNVue: !1,
          maxWidth: 0,
          pagePath: "module-whipped-eggs/home/home",
          windowTop: 0
        }
      }, {
        path: "/module-whipped-eggs/rank/history-rank",
        component: {
          render: function (e) {
            return e("Page", {
              props: Object.assign({}, __uniConfig.globalStyle, {
                navigationBarTitleText: "\u5386\u53F2\u6392\u884C",
                enablePullDownRefresh: !0,
                navigationStyle: "custom"
              })
            }, [e("module-whipped-eggs-rank-history-rank", {
              slot: "page"
            })]);
          }
        },
        meta: {
          name: "module-whipped-eggs-rank-history-rank",
          isNVue: !1,
          maxWidth: 0,
          pagePath: "module-whipped-eggs/rank/history-rank",
          windowTop: 0
        }
      }, {
        path: "/module-nschool/home/home",
        component: {
          render: function (e) {
            return e("Page", {
              props: Object.assign({}, __uniConfig.globalStyle, {
                navigationBarTitleText: "",
                enablePullDownRefresh: !0,
                navigationStyle: "custom"
              })
            }, [e("module-nschool-home-home", {
              slot: "page"
            })]);
          }
        },
        meta: {
          name: "module-nschool-home-home",
          isNVue: !1,
          maxWidth: 0,
          pagePath: "module-nschool/home/home",
          windowTop: 0
        }
      }, {
        path: "/module-nschool/subject/subject-info-detail",
        component: {
          render: function (e) {
            return e("Page", {
              props: Object.assign({}, __uniConfig.globalStyle, {
                navigationBarTitleText: "\u8BFE\u7A0B\u4FE1\u606F\u8BE6\u60C5",
                enablePullDownRefresh: !1,
                navigationStyle: "custom"
              })
            }, [e("module-nschool-subject-subject-info-detail", {
              slot: "page"
            })]);
          }
        },
        meta: {
          name: "module-nschool-subject-subject-info-detail",
          isNVue: !1,
          maxWidth: 0,
          pagePath: "module-nschool/subject/subject-info-detail",
          windowTop: 0
        }
      }, {
        path: "/module-guandan/home/home",
        component: {
          render: function (e) {
            return e("Page", {
              props: Object.assign({}, __uniConfig.globalStyle, {
                navigationBarTitleText: "\u63BC\u86CB",
                enablePullDownRefresh: !0,
                navigationStyle: "custom"
              })
            }, [e("module-guandan-home-home", {
              slot: "page"
            })]);
          }
        },
        meta: {
          name: "module-guandan-home-home",
          isNVue: !1,
          maxWidth: 0,
          pagePath: "module-guandan/home/home",
          windowTop: 0
        }
      }, {
        path: "/module-guandan/home/home-two",
        component: {
          render: function (e) {
            return e("Page", {
              props: Object.assign({}, __uniConfig.globalStyle, {
                navigationBarTitleText: "\u63BC\u86CB",
                enablePullDownRefresh: !0,
                navigationStyle: "custom"
              })
            }, [e("module-guandan-home-home-two", {
              slot: "page"
            })]);
          }
        },
        meta: {
          name: "module-guandan-home-home-two",
          isNVue: !1,
          maxWidth: 0,
          pagePath: "module-guandan/home/home-two",
          windowTop: 0
        }
      }, {
        path: "/module-guandan/rank/rank-detail",
        component: {
          render: function (e) {
            return e("Page", {
              props: Object.assign({}, __uniConfig.globalStyle, {
                navigationBarTitleText: "\u8D5B\u4E8B\u6392\u884C",
                enablePullDownRefresh: !0,
                navigationStyle: "custom"
              })
            }, [e("module-guandan-rank-rank-detail", {
              slot: "page"
            })]);
          }
        },
        meta: {
          name: "module-guandan-rank-rank-detail",
          isNVue: !1,
          maxWidth: 0,
          pagePath: "module-guandan/rank/rank-detail",
          windowTop: 0
        }
      }, {
        path: "/module-neurocat/home/home",
        component: {
          render: function (e) {
            return e("Page", {
              props: Object.assign({}, __uniConfig.globalStyle, {
                navigationBarTitleText: "\u56F4\u4F4F\u795E\u7ECF\u732B",
                enablePullDownRefresh: !1,
                navigationStyle: "custom"
              })
            }, [e("module-neurocat-home-home", {
              slot: "page"
            })]);
          }
        },
        meta: {
          name: "module-neurocat-home-home",
          isNVue: !1,
          maxWidth: 0,
          pagePath: "module-neurocat/home/home",
          windowTop: 0
        }
      }, {
        path: "/module-neurocat/game/game",
        component: {
          render: function (e) {
            return e("Page", {
              props: Object.assign({}, __uniConfig.globalStyle, {
                navigationBarTitleText: "\u56F4\u4F4F\u795E\u7ECF\u732B",
                enablePullDownRefresh: !1,
                navigationStyle: "custom"
              })
            }, [e("module-neurocat-game-game", {
              slot: "page"
            })]);
          }
        },
        meta: {
          name: "module-neurocat-game-game",
          isNVue: !1,
          maxWidth: 0,
          pagePath: "module-neurocat/game/game",
          windowTop: 0
        }
      }, {
        path: "/module-info-pub/home/detail",
        component: {
          render: function (e) {
            return e("Page", {
              props: Object.assign({}, __uniConfig.globalStyle, {
                navigationBarTitleText: "",
                enablePullDownRefresh: !0,
                navigationStyle: "custom"
              })
            }, [e("module-info-pub-home-detail", {
              slot: "page"
            })]);
          }
        },
        meta: {
          name: "module-info-pub-home-detail",
          isNVue: !1,
          maxWidth: 0,
          pagePath: "module-info-pub/home/detail",
          windowTop: 0
        }
      }, {
        path: "/module-info-pub/home/publish",
        component: {
          render: function (e) {
            return e("Page", {
              props: Object.assign({}, __uniConfig.globalStyle, {
                navigationBarTitleText: "\u53D1\u5E03\u4FE1\u606F",
                enablePullDownRefresh: !1
              })
            }, [e("module-info-pub-home-publish", {
              slot: "page"
            })]);
          }
        },
        meta: {
          name: "module-info-pub-home-publish",
          isNVue: !1,
          maxWidth: 0,
          pagePath: "module-info-pub/home/publish",
          windowTop: 44
        }
      }, {
        path: "/module-info-pub/home/mine",
        component: {
          render: function (e) {
            return e("Page", {
              props: Object.assign({}, __uniConfig.globalStyle, {
                navigationBarTitleText: "\u4E2A\u4EBA\u4E3B\u9875",
                enablePullDownRefresh: !0
              })
            }, [e("module-info-pub-home-mine", {
              slot: "page"
            })]);
          }
        },
        meta: {
          name: "module-info-pub-home-mine",
          isNVue: !1,
          maxWidth: 0,
          pagePath: "module-info-pub/home/mine",
          windowTop: 44
        }
      }, {
        path: "/module-info-pub/report/report",
        component: {
          render: function (e) {
            return e("Page", {
              props: Object.assign({}, __uniConfig.globalStyle, {
                navigationBarTitleText: "\u5185\u5BB9\u4E3E\u62A5",
                enablePullDownRefresh: !1,
                navigationStyle: "custom"
              })
            }, [e("module-info-pub-report-report", {
              slot: "page"
            })]);
          }
        },
        meta: {
          name: "module-info-pub-report-report",
          isNVue: !1,
          maxWidth: 0,
          pagePath: "module-info-pub/report/report",
          windowTop: 0
        }
      }, {
        path: "/choose-location",
        component: {
          render: function (e) {
            return e("Page", {
              props: {
                navigationStyle: "custom"
              }
            }, [e("system-choose-location", {
              slot: "page"
            })]);
          }
        },
        meta: {
          name: "choose-location",
          pagePath: "/choose-location"
        }
      }, {
        path: "/open-location",
        component: {
          render: function (e) {
            return e("Page", {
              props: {
                navigationStyle: "custom"
              }
            }, [e("system-open-location", {
              slot: "page"
            })]);
          }
        },
        meta: {
          name: "open-location",
          pagePath: "/open-location"
        }
      }], e.UniApp && new e.UniApp();
    }).call(this, o("0ee4"));
  },
  7628: function (e, n, o) {
    (function (e) {
      var n = o("883d").default,
        t = o("4db6").default,
        a = o("bdbb").default;
      o("6a54"), o("aa9c"), o("8f71"), o("bf0f"), o("2797"), o("5c47"), o("0506"), o("c223"), o("d4b5");
      var i = Object.defineProperty,
        r = function (e, n, o) {
          return function (e, n, o) {
            n in e ? i(e, n, {
              enumerable: !0,
              configurable: !0,
              writable: !0,
              value: o
            }) : e[n] = o;
          }(e, "symbol" != a(n) ? n + "" : n, o), o;
        },
        u = function () {
          "use strict";

          function e() {
            n(this, e), r(this, "handlers", {});
          }
          return t(e, [{
            key: "on",
            value: function (e, n) {
              this.handlers[e] || (this.handlers[e] = []), this.handlers[e].push(n);
            }
          }, {
            key: "off",
            value: function (e, n) {
              this.handlers[e] && (this.handlers[e] = this.handlers[e].filter(function (e) {
                return e !== n;
              }));
            }
          }, {
            key: "clear",
            value: function (e) {
              this.handlers[e] && delete this.handlers[e];
            }
          }, {
            key: "invoke",
            value: function (e, n) {
              var o = this.handlers[e];
              o && o.forEach(function (e) {
                return e(n);
              });
            }
          }]), e;
        }(),
        l = navigator.userAgent.toLowerCase(),
        s = /ios|iphone|ipod|ipad|android/.test(l),
        m = /micromessenger/.test(l),
        d = /android/.test(l),
        c = /iphone|ipod|ipad/.test(l),
        g = /cmstop/.test(l),
        f = {
          shareInviteCode: "shareInviteCode",
          downloadInviteCode: "downloadInviteCode",
          share: "share",
          collectVideo: "jsCollectContent",
          diggVideo: "jsDiggContent",
          starMpUser: "starMpUser",
          login: "login",
          backHome: "backHome",
          closePage: "closePage",
          updateUser: "updateUser",
          toastMessage: "toastMessage",
          pushUserAgreement: "pushUserAgreement",
          pushPrivacyNotice: "pushPrivacyNotice",
          pushTaskCenter: "pushTaskCenter",
          pushApplyForm: "pushApplyForm",
          pushMpUser: "pushMpUser",
          pushMpHome: "pushMpHome",
          pushBuildinApp: "pushBuildinApp",
          pushCategoryList: "pushCategoryList",
          pushH5: "pushH5",
          openBrowser: "openBrowser",
          pushWXMiniApp: "pushWXMiniApp",
          toNextContent: "toNextContent",
          pushContent: "pushContent",
          pushPoliticalDetail: "pushPoliticalDetail",
          getNoticeDetail: "getNoticeDetail",
          getUserInfo: "getUserInfo",
          phonologicalReading: "phonologicalReading",
          mapLocationPoint: "mapLocationPoint",
          imagePreview: "imagePreview",
          photography: "photography",
          shootVideo: "shootVideo",
          recording: "recording",
          getMediaStatus: "getMediaStatus",
          mcJssdkBridgeReady: "mcJssdkBridgeReady"
        },
        p = {
          onThemeChange: "onThemeChange",
          onPhoneShaking: "onPhoneShaking",
          onNetworkChange: "onNetworkChange"
        },
        h = function () {
          "use strict";

          function o() {
            n(this, o), r(this, "i", 0), r(this, "e", new u()), r(this, "completes", []), r(this, "state", 0), r(this, "c");
          }
          return t(o, [{
            key: "config",
            value: function (n) {
              var o = this;
              this.c = n, this.mcJssdkBridgeReady(this.c, {
                success: function () {
                  var n;
                  o.state = 1, o.completes.forEach(function (e) {
                    e();
                  }), null != (n = o.c) && n.debug && e.log("McJSBridgeReady::success");
                },
                fail: function (n) {
                  var t;
                  null != (t = o.c) && t.debug && e.log("McJSBridgeReady::fail", n);
                },
                complete: function () {
                  var n;
                  null != (n = o.c) && n.debug && e.log("McJSBridgeReady::complete");
                }
              });
            }
          }, {
            key: "ready",
            value: function (e) {
              1 === this.state ? e() : this.completes.push(e);
            }
          }, {
            key: "invoke",
            value: function (e, n, o) {
              var t = "".concat(e, "::").concat(++this.i);
              return this.on(t, o, !0), this.send(e, n, t), t;
            }
          }, {
            key: "send",
            value: function (n, o, t) {
              var a;
              null != (a = this.c) && a.debug && e.log("invoke send::", n, o, t);
              var i = JSON.stringify(o);
              try {
                d ? window.MediaClient.__mcJssdkBridge(n, i, t) : c && window.webkit.messageHandlers.__mcJssdkBridge.postMessage({
                  method: n,
                  params: i,
                  callback: t
                });
              } catch (r) {
                e.error(r);
              }
            }
          }, {
            key: "on",
            value: function (n, o, t) {
              var a,
                i = this;
              null != (a = this.c) && a.debug && e.log("listen on::", n), this.e.on(n, function (a) {
                var r;
                null != (r = i.c) && r.debug && e.log("callback on::", n, a);
                try {
                  var u;
                  u = "string" == typeof a ? JSON.parse(a) : a, ~~u.code && 200 !== ~~u.code ? o && o.fail && o.fail(u.msg) : o && o.success && o.success(u.data);
                } catch (u) {
                  e.error(u), o && o.fail && o.fail(u);
                } finally {
                  o && o.complete && o.complete(a), t && i.e.clear(n);
                }
              });
            }
          }, {
            key: "trigger",
            value: function (e, n) {
              this.e.invoke(e, n);
            }
          }, {
            key: "getUAInfo",
            value: function () {
              return {
                isAndroid: d,
                isIOS: c,
                isMobile: s,
                isWechat: m,
                isCmstop: g
              };
            }
          }, {
            key: "mcJssdkBridgeReady",
            value: function (e, n) {
              return this.invoke(f.mcJssdkBridgeReady, e, n);
            }
          }]), o;
        }(),
        y = {};
      for (var _ in f) Object.prototype.hasOwnProperty.call(h.prototype, _) || function () {
        var e = f[_];
        y[e] = function (n) {
          var o = n.params,
            t = n.callbacks;
          return this.invoke(e, o, t);
        };
      }();
      Object.assign(h.prototype, y);
      var w = {};
      for (var b in p) Object.prototype.hasOwnProperty.call(h.prototype, b) || function () {
        var e = p[b];
        w[e] = function (n) {
          this.on(e, n);
        };
      }();
      Object.assign(h.prototype, w), window.mcSdk = new h();
    }).call(this, o("ba7c")["default"]);
  },
  "7b0c": function (e, n, o) {
    var t = o("c86c");
    n = t(!1), n.push([e.i, "@charset \"UTF-8\";\n/**\n * \u8FD9\u91CC\u662Funi-app\u5185\u7F6E\u7684\u5E38\u7528\u6837\u5F0F\u53D8\u91CF\n *\n * uni-app \u5B98\u65B9\u6269\u5C55\u63D2\u4EF6\u53CA\u63D2\u4EF6\u5E02\u573A\uFF08https://ext.dcloud.net.cn\uFF09\u4E0A\u5F88\u591A\u4E09\u65B9\u63D2\u4EF6\u5747\u4F7F\u7528\u4E86\u8FD9\u4E9B\u6837\u5F0F\u53D8\u91CF\n * \u5982\u679C\u4F60\u662F\u63D2\u4EF6\u5F00\u53D1\u8005\uFF0C\u5EFA\u8BAE\u4F60\u4F7F\u7528scss\u9884\u5904\u7406\uFF0C\u5E76\u5728\u63D2\u4EF6\u4EE3\u7801\u4E2D\u76F4\u63A5\u4F7F\u7528\u8FD9\u4E9B\u53D8\u91CF\uFF08\u65E0\u9700 import \u8FD9\u4E2A\u6587\u4EF6\uFF09\uFF0C\u65B9\u4FBF\u7528\u6237\u901A\u8FC7\u642D\u79EF\u6728\u7684\u65B9\u5F0F\u5F00\u53D1\u6574\u4F53\u98CE\u683C\u4E00\u81F4\u7684App\n *\n */\n/**\n * \u5982\u679C\u4F60\u662FApp\u5F00\u53D1\u8005\uFF08\u63D2\u4EF6\u4F7F\u7528\u8005\uFF09\uFF0C\u4F60\u53EF\u4EE5\u901A\u8FC7\u4FEE\u6539\u8FD9\u4E9B\u53D8\u91CF\u6765\u5B9A\u5236\u81EA\u5DF1\u7684\u63D2\u4EF6\u4E3B\u9898\uFF0C\u5B9E\u73B0\u81EA\u5B9A\u4E49\u4E3B\u9898\u529F\u80FD\n *\n * \u5982\u679C\u4F60\u7684\u9879\u76EE\u540C\u6837\u4F7F\u7528\u4E86scss\u9884\u5904\u7406\uFF0C\u4F60\u4E5F\u53EF\u4EE5\u76F4\u63A5\u5728\u4F60\u7684 scss \u4EE3\u7801\u4E2D\u4F7F\u7528\u5982\u4E0B\u53D8\u91CF\uFF0C\u540C\u65F6\u65E0\u9700 import \u8FD9\u4E2A\u6587\u4EF6\n */\n/* \u989C\u8272\u53D8\u91CF */\n/* \u884C\u4E3A\u76F8\u5173\u989C\u8272 */\n/* \u6587\u5B57\u57FA\u672C\u989C\u8272 */\n/* \u80CC\u666F\u989C\u8272 */\n/* \u8FB9\u6846\u989C\u8272 */\n/* \u5C3A\u5BF8\u53D8\u91CF */\n/* \u6587\u5B57\u5C3A\u5BF8 */\n/* \u56FE\u7247\u5C3A\u5BF8 */\n/* Border Radius */\n/* \u6C34\u5E73\u95F4\u8DDD */\n/* \u5782\u76F4\u95F4\u8DDD */\n/* \u900F\u660E\u5EA6 */\n/* \u6587\u7AE0\u573A\u666F\u76F8\u5173 */\n/* \u81EA\u5B9A\u4E49\u76F8\u5173\u53D8\u91CF */\n/* uview-ui */body{max-width:750px;margin:auto!important}.u-relative,\n.u-rela{position:relative}.u-absolute,\n.u-abso{position:absolute}uni-image{display:inline-block}uni-view,\nuni-text{box-sizing:border-box}.u-font-xs{font-size:%?22?%}.u-font-sm{font-size:%?26?%}.u-font-md{font-size:%?28?%}.u-font-lg{font-size:%?30?%}.u-font-xl{font-size:%?34?%}.u-flex{display:flex;flex-direction:row;align-items:center}.u-flex-wrap{flex-wrap:wrap}.u-flex-nowrap{flex-wrap:nowrap}.u-col-center{align-items:center}.u-col-top{align-items:flex-start}.u-col-bottom{align-items:flex-end}.u-row-center{justify-content:center}.u-row-left{justify-content:flex-start}.u-row-right{justify-content:flex-end}.u-row-between{justify-content:space-between}.u-row-around{justify-content:space-around}.u-text-left{text-align:left}.u-text-center{text-align:center}.u-text-right{text-align:right}.u-flex-col{display:flex;flex-direction:column}.u-flex-0{flex:0}.u-flex-1{flex:1}.u-flex-2{flex:2}.u-flex-3{flex:3}.u-flex-4{flex:4}.u-flex-5{flex:5}.u-flex-6{flex:6}.u-flex-7{flex:7}.u-flex-8{flex:8}.u-flex-9{flex:9}.u-flex-10{flex:10}.u-flex-11{flex:11}.u-flex-12{flex:12}.u-font-9{font-size:9px}.u-font-10{font-size:10px}.u-font-11{font-size:11px}.u-font-12{font-size:12px}.u-font-13{font-size:13px}.u-font-14{font-size:14px}.u-font-15{font-size:15px}.u-font-16{font-size:16px}.u-font-17{font-size:17px}.u-font-18{font-size:18px}.u-font-19{font-size:19px}.u-font-20{font-size:%?20?%}.u-font-21{font-size:%?21?%}.u-font-22{font-size:%?22?%}.u-font-23{font-size:%?23?%}.u-font-24{font-size:%?24?%}.u-font-25{font-size:%?25?%}.u-font-26{font-size:%?26?%}.u-font-27{font-size:%?27?%}.u-font-28{font-size:%?28?%}.u-font-29{font-size:%?29?%}.u-font-30{font-size:%?30?%}.u-font-31{font-size:%?31?%}.u-font-32{font-size:%?32?%}.u-font-33{font-size:%?33?%}.u-font-34{font-size:%?34?%}.u-font-35{font-size:%?35?%}.u-font-36{font-size:%?36?%}.u-font-37{font-size:%?37?%}.u-font-38{font-size:%?38?%}.u-font-39{font-size:%?39?%}.u-font-40{font-size:%?40?%}.u-margin-0, .u-m-0{margin:%?0?%!important}.u-padding-0, .u-p-0{padding:%?0?%!important}.u-m-l-0{margin-left:%?0?%!important}.u-p-l-0{padding-left:%?0?%!important}.u-margin-left-0{margin-left:%?0?%!important}.u-padding-left-0{padding-left:%?0?%!important}.u-m-t-0{margin-top:%?0?%!important}.u-p-t-0{padding-top:%?0?%!important}.u-margin-top-0{margin-top:%?0?%!important}.u-padding-top-0{padding-top:%?0?%!important}.u-m-r-0{margin-right:%?0?%!important}.u-p-r-0{padding-right:%?0?%!important}.u-margin-right-0{margin-right:%?0?%!important}.u-padding-right-0{padding-right:%?0?%!important}.u-m-b-0{margin-bottom:%?0?%!important}.u-p-b-0{padding-bottom:%?0?%!important}.u-margin-bottom-0{margin-bottom:%?0?%!important}.u-padding-bottom-0{padding-bottom:%?0?%!important}.u-margin-2, .u-m-2{margin:%?2?%!important}.u-padding-2, .u-p-2{padding:%?2?%!important}.u-m-l-2{margin-left:%?2?%!important}.u-p-l-2{padding-left:%?2?%!important}.u-margin-left-2{margin-left:%?2?%!important}.u-padding-left-2{padding-left:%?2?%!important}.u-m-t-2{margin-top:%?2?%!important}.u-p-t-2{padding-top:%?2?%!important}.u-margin-top-2{margin-top:%?2?%!important}.u-padding-top-2{padding-top:%?2?%!important}.u-m-r-2{margin-right:%?2?%!important}.u-p-r-2{padding-right:%?2?%!important}.u-margin-right-2{margin-right:%?2?%!important}.u-padding-right-2{padding-right:%?2?%!important}.u-m-b-2{margin-bottom:%?2?%!important}.u-p-b-2{padding-bottom:%?2?%!important}.u-margin-bottom-2{margin-bottom:%?2?%!important}.u-padding-bottom-2{padding-bottom:%?2?%!important}.u-margin-4, .u-m-4{margin:%?4?%!important}.u-padding-4, .u-p-4{padding:%?4?%!important}.u-m-l-4{margin-left:%?4?%!important}.u-p-l-4{padding-left:%?4?%!important}.u-margin-left-4{margin-left:%?4?%!important}.u-padding-left-4{padding-left:%?4?%!important}.u-m-t-4{margin-top:%?4?%!important}.u-p-t-4{padding-top:%?4?%!important}.u-margin-top-4{margin-top:%?4?%!important}.u-padding-top-4{padding-top:%?4?%!important}.u-m-r-4{margin-right:%?4?%!important}.u-p-r-4{padding-right:%?4?%!important}.u-margin-right-4{margin-right:%?4?%!important}.u-padding-right-4{padding-right:%?4?%!important}.u-m-b-4{margin-bottom:%?4?%!important}.u-p-b-4{padding-bottom:%?4?%!important}.u-margin-bottom-4{margin-bottom:%?4?%!important}.u-padding-bottom-4{padding-bottom:%?4?%!important}.u-margin-5, .u-m-5{margin:%?5?%!important}.u-padding-5, .u-p-5{padding:%?5?%!important}.u-m-l-5{margin-left:%?5?%!important}.u-p-l-5{padding-left:%?5?%!important}.u-margin-left-5{margin-left:%?5?%!important}.u-padding-left-5{padding-left:%?5?%!important}.u-m-t-5{margin-top:%?5?%!important}.u-p-t-5{padding-top:%?5?%!important}.u-margin-top-5{margin-top:%?5?%!important}.u-padding-top-5{padding-top:%?5?%!important}.u-m-r-5{margin-right:%?5?%!important}.u-p-r-5{padding-right:%?5?%!important}.u-margin-right-5{margin-right:%?5?%!important}.u-padding-right-5{padding-right:%?5?%!important}.u-m-b-5{margin-bottom:%?5?%!important}.u-p-b-5{padding-bottom:%?5?%!important}.u-margin-bottom-5{margin-bottom:%?5?%!important}.u-padding-bottom-5{padding-bottom:%?5?%!important}.u-margin-6, .u-m-6{margin:%?6?%!important}.u-padding-6, .u-p-6{padding:%?6?%!important}.u-m-l-6{margin-left:%?6?%!important}.u-p-l-6{padding-left:%?6?%!important}.u-margin-left-6{margin-left:%?6?%!important}.u-padding-left-6{padding-left:%?6?%!important}.u-m-t-6{margin-top:%?6?%!important}.u-p-t-6{padding-top:%?6?%!important}.u-margin-top-6{margin-top:%?6?%!important}.u-padding-top-6{padding-top:%?6?%!important}.u-m-r-6{margin-right:%?6?%!important}.u-p-r-6{padding-right:%?6?%!important}.u-margin-right-6{margin-right:%?6?%!important}.u-padding-right-6{padding-right:%?6?%!important}.u-m-b-6{margin-bottom:%?6?%!important}.u-p-b-6{padding-bottom:%?6?%!important}.u-margin-bottom-6{margin-bottom:%?6?%!important}.u-padding-bottom-6{padding-bottom:%?6?%!important}.u-margin-8, .u-m-8{margin:%?8?%!important}.u-padding-8, .u-p-8{padding:%?8?%!important}.u-m-l-8{margin-left:%?8?%!important}.u-p-l-8{padding-left:%?8?%!important}.u-margin-left-8{margin-left:%?8?%!important}.u-padding-left-8{padding-left:%?8?%!important}.u-m-t-8{margin-top:%?8?%!important}.u-p-t-8{padding-top:%?8?%!important}.u-margin-top-8{margin-top:%?8?%!important}.u-padding-top-8{padding-top:%?8?%!important}.u-m-r-8{margin-right:%?8?%!important}.u-p-r-8{padding-right:%?8?%!important}.u-margin-right-8{margin-right:%?8?%!important}.u-padding-right-8{padding-right:%?8?%!important}.u-m-b-8{margin-bottom:%?8?%!important}.u-p-b-8{padding-bottom:%?8?%!important}.u-margin-bottom-8{margin-bottom:%?8?%!important}.u-padding-bottom-8{padding-bottom:%?8?%!important}.u-margin-10, .u-m-10{margin:%?10?%!important}.u-padding-10, .u-p-10{padding:%?10?%!important}.u-m-l-10{margin-left:%?10?%!important}.u-p-l-10{padding-left:%?10?%!important}.u-margin-left-10{margin-left:%?10?%!important}.u-padding-left-10{padding-left:%?10?%!important}.u-m-t-10{margin-top:%?10?%!important}.u-p-t-10{padding-top:%?10?%!important}.u-margin-top-10{margin-top:%?10?%!important}.u-padding-top-10{padding-top:%?10?%!important}.u-m-r-10{margin-right:%?10?%!important}.u-p-r-10{padding-right:%?10?%!important}.u-margin-right-10{margin-right:%?10?%!important}.u-padding-right-10{padding-right:%?10?%!important}.u-m-b-10{margin-bottom:%?10?%!important}.u-p-b-10{padding-bottom:%?10?%!important}.u-margin-bottom-10{margin-bottom:%?10?%!important}.u-padding-bottom-10{padding-bottom:%?10?%!important}.u-margin-12, .u-m-12{margin:%?12?%!important}.u-padding-12, .u-p-12{padding:%?12?%!important}.u-m-l-12{margin-left:%?12?%!important}.u-p-l-12{padding-left:%?12?%!important}.u-margin-left-12{margin-left:%?12?%!important}.u-padding-left-12{padding-left:%?12?%!important}.u-m-t-12{margin-top:%?12?%!important}.u-p-t-12{padding-top:%?12?%!important}.u-margin-top-12{margin-top:%?12?%!important}.u-padding-top-12{padding-top:%?12?%!important}.u-m-r-12{margin-right:%?12?%!important}.u-p-r-12{padding-right:%?12?%!important}.u-margin-right-12{margin-right:%?12?%!important}.u-padding-right-12{padding-right:%?12?%!important}.u-m-b-12{margin-bottom:%?12?%!important}.u-p-b-12{padding-bottom:%?12?%!important}.u-margin-bottom-12{margin-bottom:%?12?%!important}.u-padding-bottom-12{padding-bottom:%?12?%!important}.u-margin-14, .u-m-14{margin:%?14?%!important}.u-padding-14, .u-p-14{padding:%?14?%!important}.u-m-l-14{margin-left:%?14?%!important}.u-p-l-14{padding-left:%?14?%!important}.u-margin-left-14{margin-left:%?14?%!important}.u-padding-left-14{padding-left:%?14?%!important}.u-m-t-14{margin-top:%?14?%!important}.u-p-t-14{padding-top:%?14?%!important}.u-margin-top-14{margin-top:%?14?%!important}.u-padding-top-14{padding-top:%?14?%!important}.u-m-r-14{margin-right:%?14?%!important}.u-p-r-14{padding-right:%?14?%!important}.u-margin-right-14{margin-right:%?14?%!important}.u-padding-right-14{padding-right:%?14?%!important}.u-m-b-14{margin-bottom:%?14?%!important}.u-p-b-14{padding-bottom:%?14?%!important}.u-margin-bottom-14{margin-bottom:%?14?%!important}.u-padding-bottom-14{padding-bottom:%?14?%!important}.u-margin-15, .u-m-15{margin:%?15?%!important}.u-padding-15, .u-p-15{padding:%?15?%!important}.u-m-l-15{margin-left:%?15?%!important}.u-p-l-15{padding-left:%?15?%!important}.u-margin-left-15{margin-left:%?15?%!important}.u-padding-left-15{padding-left:%?15?%!important}.u-m-t-15{margin-top:%?15?%!important}.u-p-t-15{padding-top:%?15?%!important}.u-margin-top-15{margin-top:%?15?%!important}.u-padding-top-15{padding-top:%?15?%!important}.u-m-r-15{margin-right:%?15?%!important}.u-p-r-15{padding-right:%?15?%!important}.u-margin-right-15{margin-right:%?15?%!important}.u-padding-right-15{padding-right:%?15?%!important}.u-m-b-15{margin-bottom:%?15?%!important}.u-p-b-15{padding-bottom:%?15?%!important}.u-margin-bottom-15{margin-bottom:%?15?%!important}.u-padding-bottom-15{padding-bottom:%?15?%!important}.u-margin-16, .u-m-16{margin:%?16?%!important}.u-padding-16, .u-p-16{padding:%?16?%!important}.u-m-l-16{margin-left:%?16?%!important}.u-p-l-16{padding-left:%?16?%!important}.u-margin-left-16{margin-left:%?16?%!important}.u-padding-left-16{padding-left:%?16?%!important}.u-m-t-16{margin-top:%?16?%!important}.u-p-t-16{padding-top:%?16?%!important}.u-margin-top-16{margin-top:%?16?%!important}.u-padding-top-16{padding-top:%?16?%!important}.u-m-r-16{margin-right:%?16?%!important}.u-p-r-16{padding-right:%?16?%!important}.u-margin-right-16{margin-right:%?16?%!important}.u-padding-right-16{padding-right:%?16?%!important}.u-m-b-16{margin-bottom:%?16?%!important}.u-p-b-16{padding-bottom:%?16?%!important}.u-margin-bottom-16{margin-bottom:%?16?%!important}.u-padding-bottom-16{padding-bottom:%?16?%!important}.u-margin-18, .u-m-18{margin:%?18?%!important}.u-padding-18, .u-p-18{padding:%?18?%!important}.u-m-l-18{margin-left:%?18?%!important}.u-p-l-18{padding-left:%?18?%!important}.u-margin-left-18{margin-left:%?18?%!important}.u-padding-left-18{padding-left:%?18?%!important}.u-m-t-18{margin-top:%?18?%!important}.u-p-t-18{padding-top:%?18?%!important}.u-margin-top-18{margin-top:%?18?%!important}.u-padding-top-18{padding-top:%?18?%!important}.u-m-r-18{margin-right:%?18?%!important}.u-p-r-18{padding-right:%?18?%!important}.u-margin-right-18{margin-right:%?18?%!important}.u-padding-right-18{padding-right:%?18?%!important}.u-m-b-18{margin-bottom:%?18?%!important}.u-p-b-18{padding-bottom:%?18?%!important}.u-margin-bottom-18{margin-bottom:%?18?%!important}.u-padding-bottom-18{padding-bottom:%?18?%!important}.u-margin-20, .u-m-20{margin:%?20?%!important}.u-padding-20, .u-p-20{padding:%?20?%!important}.u-m-l-20{margin-left:%?20?%!important}.u-p-l-20{padding-left:%?20?%!important}.u-margin-left-20{margin-left:%?20?%!important}.u-padding-left-20{padding-left:%?20?%!important}.u-m-t-20{margin-top:%?20?%!important}.u-p-t-20{padding-top:%?20?%!important}.u-margin-top-20{margin-top:%?20?%!important}.u-padding-top-20{padding-top:%?20?%!important}.u-m-r-20{margin-right:%?20?%!important}.u-p-r-20{padding-right:%?20?%!important}.u-margin-right-20{margin-right:%?20?%!important}.u-padding-right-20{padding-right:%?20?%!important}.u-m-b-20{margin-bottom:%?20?%!important}.u-p-b-20{padding-bottom:%?20?%!important}.u-margin-bottom-20{margin-bottom:%?20?%!important}.u-padding-bottom-20{padding-bottom:%?20?%!important}.u-margin-22, .u-m-22{margin:%?22?%!important}.u-padding-22, .u-p-22{padding:%?22?%!important}.u-m-l-22{margin-left:%?22?%!important}.u-p-l-22{padding-left:%?22?%!important}.u-margin-left-22{margin-left:%?22?%!important}.u-padding-left-22{padding-left:%?22?%!important}.u-m-t-22{margin-top:%?22?%!important}.u-p-t-22{padding-top:%?22?%!important}.u-margin-top-22{margin-top:%?22?%!important}.u-padding-top-22{padding-top:%?22?%!important}.u-m-r-22{margin-right:%?22?%!important}.u-p-r-22{padding-right:%?22?%!important}.u-margin-right-22{margin-right:%?22?%!important}.u-padding-right-22{padding-right:%?22?%!important}.u-m-b-22{margin-bottom:%?22?%!important}.u-p-b-22{padding-bottom:%?22?%!important}.u-margin-bottom-22{margin-bottom:%?22?%!important}.u-padding-bottom-22{padding-bottom:%?22?%!important}.u-margin-24, .u-m-24{margin:%?24?%!important}.u-padding-24, .u-p-24{padding:%?24?%!important}.u-m-l-24{margin-left:%?24?%!important}.u-p-l-24{padding-left:%?24?%!important}.u-margin-left-24{margin-left:%?24?%!important}.u-padding-left-24{padding-left:%?24?%!important}.u-m-t-24{margin-top:%?24?%!important}.u-p-t-24{padding-top:%?24?%!important}.u-margin-top-24{margin-top:%?24?%!important}.u-padding-top-24{padding-top:%?24?%!important}.u-m-r-24{margin-right:%?24?%!important}.u-p-r-24{padding-right:%?24?%!important}.u-margin-right-24{margin-right:%?24?%!important}.u-padding-right-24{padding-right:%?24?%!important}.u-m-b-24{margin-bottom:%?24?%!important}.u-p-b-24{padding-bottom:%?24?%!important}.u-margin-bottom-24{margin-bottom:%?24?%!important}.u-padding-bottom-24{padding-bottom:%?24?%!important}.u-margin-25, .u-m-25{margin:%?25?%!important}.u-padding-25, .u-p-25{padding:%?25?%!important}.u-m-l-25{margin-left:%?25?%!important}.u-p-l-25{padding-left:%?25?%!important}.u-margin-left-25{margin-left:%?25?%!important}.u-padding-left-25{padding-left:%?25?%!important}.u-m-t-25{margin-top:%?25?%!important}.u-p-t-25{padding-top:%?25?%!important}.u-margin-top-25{margin-top:%?25?%!important}.u-padding-top-25{padding-top:%?25?%!important}.u-m-r-25{margin-right:%?25?%!important}.u-p-r-25{padding-right:%?25?%!important}.u-margin-right-25{margin-right:%?25?%!important}.u-padding-right-25{padding-right:%?25?%!important}.u-m-b-25{margin-bottom:%?25?%!important}.u-p-b-25{padding-bottom:%?25?%!important}.u-margin-bottom-25{margin-bottom:%?25?%!important}.u-padding-bottom-25{padding-bottom:%?25?%!important}.u-margin-26, .u-m-26{margin:%?26?%!important}.u-padding-26, .u-p-26{padding:%?26?%!important}.u-m-l-26{margin-left:%?26?%!important}.u-p-l-26{padding-left:%?26?%!important}.u-margin-left-26{margin-left:%?26?%!important}.u-padding-left-26{padding-left:%?26?%!important}.u-m-t-26{margin-top:%?26?%!important}.u-p-t-26{padding-top:%?26?%!important}.u-margin-top-26{margin-top:%?26?%!important}.u-padding-top-26{padding-top:%?26?%!important}.u-m-r-26{margin-right:%?26?%!important}.u-p-r-26{padding-right:%?26?%!important}.u-margin-right-26{margin-right:%?26?%!important}.u-padding-right-26{padding-right:%?26?%!important}.u-m-b-26{margin-bottom:%?26?%!important}.u-p-b-26{padding-bottom:%?26?%!important}.u-margin-bottom-26{margin-bottom:%?26?%!important}.u-padding-bottom-26{padding-bottom:%?26?%!important}.u-margin-28, .u-m-28{margin:%?28?%!important}.u-padding-28, .u-p-28{padding:%?28?%!important}.u-m-l-28{margin-left:%?28?%!important}.u-p-l-28{padding-left:%?28?%!important}.u-margin-left-28{margin-left:%?28?%!important}.u-padding-left-28{padding-left:%?28?%!important}.u-m-t-28{margin-top:%?28?%!important}.u-p-t-28{padding-top:%?28?%!important}.u-margin-top-28{margin-top:%?28?%!important}.u-padding-top-28{padding-top:%?28?%!important}.u-m-r-28{margin-right:%?28?%!important}.u-p-r-28{padding-right:%?28?%!important}.u-margin-right-28{margin-right:%?28?%!important}.u-padding-right-28{padding-right:%?28?%!important}.u-m-b-28{margin-bottom:%?28?%!important}.u-p-b-28{padding-bottom:%?28?%!important}.u-margin-bottom-28{margin-bottom:%?28?%!important}.u-padding-bottom-28{padding-bottom:%?28?%!important}.u-margin-30, .u-m-30{margin:%?30?%!important}.u-padding-30, .u-p-30{padding:%?30?%!important}.u-m-l-30{margin-left:%?30?%!important}.u-p-l-30{padding-left:%?30?%!important}.u-margin-left-30{margin-left:%?30?%!important}.u-padding-left-30{padding-left:%?30?%!important}.u-m-t-30{margin-top:%?30?%!important}.u-p-t-30{padding-top:%?30?%!important}.u-margin-top-30{margin-top:%?30?%!important}.u-padding-top-30{padding-top:%?30?%!important}.u-m-r-30{margin-right:%?30?%!important}.u-p-r-30{padding-right:%?30?%!important}.u-margin-right-30{margin-right:%?30?%!important}.u-padding-right-30{padding-right:%?30?%!important}.u-m-b-30{margin-bottom:%?30?%!important}.u-p-b-30{padding-bottom:%?30?%!important}.u-margin-bottom-30{margin-bottom:%?30?%!important}.u-padding-bottom-30{padding-bottom:%?30?%!important}.u-margin-32, .u-m-32{margin:%?32?%!important}.u-padding-32, .u-p-32{padding:%?32?%!important}.u-m-l-32{margin-left:%?32?%!important}.u-p-l-32{padding-left:%?32?%!important}.u-margin-left-32{margin-left:%?32?%!important}.u-padding-left-32{padding-left:%?32?%!important}.u-m-t-32{margin-top:%?32?%!important}.u-p-t-32{padding-top:%?32?%!important}.u-margin-top-32{margin-top:%?32?%!important}.u-padding-top-32{padding-top:%?32?%!important}.u-m-r-32{margin-right:%?32?%!important}.u-p-r-32{padding-right:%?32?%!important}.u-margin-right-32{margin-right:%?32?%!important}.u-padding-right-32{padding-right:%?32?%!important}.u-m-b-32{margin-bottom:%?32?%!important}.u-p-b-32{padding-bottom:%?32?%!important}.u-margin-bottom-32{margin-bottom:%?32?%!important}.u-padding-bottom-32{padding-bottom:%?32?%!important}.u-margin-34, .u-m-34{margin:%?34?%!important}.u-padding-34, .u-p-34{padding:%?34?%!important}.u-m-l-34{margin-left:%?34?%!important}.u-p-l-34{padding-left:%?34?%!important}.u-margin-left-34{margin-left:%?34?%!important}.u-padding-left-34{padding-left:%?34?%!important}.u-m-t-34{margin-top:%?34?%!important}.u-p-t-34{padding-top:%?34?%!important}.u-margin-top-34{margin-top:%?34?%!important}.u-padding-top-34{padding-top:%?34?%!important}.u-m-r-34{margin-right:%?34?%!important}.u-p-r-34{padding-right:%?34?%!important}.u-margin-right-34{margin-right:%?34?%!important}.u-padding-right-34{padding-right:%?34?%!important}.u-m-b-34{margin-bottom:%?34?%!important}.u-p-b-34{padding-bottom:%?34?%!important}.u-margin-bottom-34{margin-bottom:%?34?%!important}.u-padding-bottom-34{padding-bottom:%?34?%!important}.u-margin-35, .u-m-35{margin:%?35?%!important}.u-padding-35, .u-p-35{padding:%?35?%!important}.u-m-l-35{margin-left:%?35?%!important}.u-p-l-35{padding-left:%?35?%!important}.u-margin-left-35{margin-left:%?35?%!important}.u-padding-left-35{padding-left:%?35?%!important}.u-m-t-35{margin-top:%?35?%!important}.u-p-t-35{padding-top:%?35?%!important}.u-margin-top-35{margin-top:%?35?%!important}.u-padding-top-35{padding-top:%?35?%!important}.u-m-r-35{margin-right:%?35?%!important}.u-p-r-35{padding-right:%?35?%!important}.u-margin-right-35{margin-right:%?35?%!important}.u-padding-right-35{padding-right:%?35?%!important}.u-m-b-35{margin-bottom:%?35?%!important}.u-p-b-35{padding-bottom:%?35?%!important}.u-margin-bottom-35{margin-bottom:%?35?%!important}.u-padding-bottom-35{padding-bottom:%?35?%!important}.u-margin-36, .u-m-36{margin:%?36?%!important}.u-padding-36, .u-p-36{padding:%?36?%!important}.u-m-l-36{margin-left:%?36?%!important}.u-p-l-36{padding-left:%?36?%!important}.u-margin-left-36{margin-left:%?36?%!important}.u-padding-left-36{padding-left:%?36?%!important}.u-m-t-36{margin-top:%?36?%!important}.u-p-t-36{padding-top:%?36?%!important}.u-margin-top-36{margin-top:%?36?%!important}.u-padding-top-36{padding-top:%?36?%!important}.u-m-r-36{margin-right:%?36?%!important}.u-p-r-36{padding-right:%?36?%!important}.u-margin-right-36{margin-right:%?36?%!important}.u-padding-right-36{padding-right:%?36?%!important}.u-m-b-36{margin-bottom:%?36?%!important}.u-p-b-36{padding-bottom:%?36?%!important}.u-margin-bottom-36{margin-bottom:%?36?%!important}.u-padding-bottom-36{padding-bottom:%?36?%!important}.u-margin-38, .u-m-38{margin:%?38?%!important}.u-padding-38, .u-p-38{padding:%?38?%!important}.u-m-l-38{margin-left:%?38?%!important}.u-p-l-38{padding-left:%?38?%!important}.u-margin-left-38{margin-left:%?38?%!important}.u-padding-left-38{padding-left:%?38?%!important}.u-m-t-38{margin-top:%?38?%!important}.u-p-t-38{padding-top:%?38?%!important}.u-margin-top-38{margin-top:%?38?%!important}.u-padding-top-38{padding-top:%?38?%!important}.u-m-r-38{margin-right:%?38?%!important}.u-p-r-38{padding-right:%?38?%!important}.u-margin-right-38{margin-right:%?38?%!important}.u-padding-right-38{padding-right:%?38?%!important}.u-m-b-38{margin-bottom:%?38?%!important}.u-p-b-38{padding-bottom:%?38?%!important}.u-margin-bottom-38{margin-bottom:%?38?%!important}.u-padding-bottom-38{padding-bottom:%?38?%!important}.u-margin-40, .u-m-40{margin:%?40?%!important}.u-padding-40, .u-p-40{padding:%?40?%!important}.u-m-l-40{margin-left:%?40?%!important}.u-p-l-40{padding-left:%?40?%!important}.u-margin-left-40{margin-left:%?40?%!important}.u-padding-left-40{padding-left:%?40?%!important}.u-m-t-40{margin-top:%?40?%!important}.u-p-t-40{padding-top:%?40?%!important}.u-margin-top-40{margin-top:%?40?%!important}.u-padding-top-40{padding-top:%?40?%!important}.u-m-r-40{margin-right:%?40?%!important}.u-p-r-40{padding-right:%?40?%!important}.u-margin-right-40{margin-right:%?40?%!important}.u-padding-right-40{padding-right:%?40?%!important}.u-m-b-40{margin-bottom:%?40?%!important}.u-p-b-40{padding-bottom:%?40?%!important}.u-margin-bottom-40{margin-bottom:%?40?%!important}.u-padding-bottom-40{padding-bottom:%?40?%!important}.u-margin-42, .u-m-42{margin:%?42?%!important}.u-padding-42, .u-p-42{padding:%?42?%!important}.u-m-l-42{margin-left:%?42?%!important}.u-p-l-42{padding-left:%?42?%!important}.u-margin-left-42{margin-left:%?42?%!important}.u-padding-left-42{padding-left:%?42?%!important}.u-m-t-42{margin-top:%?42?%!important}.u-p-t-42{padding-top:%?42?%!important}.u-margin-top-42{margin-top:%?42?%!important}.u-padding-top-42{padding-top:%?42?%!important}.u-m-r-42{margin-right:%?42?%!important}.u-p-r-42{padding-right:%?42?%!important}.u-margin-right-42{margin-right:%?42?%!important}.u-padding-right-42{padding-right:%?42?%!important}.u-m-b-42{margin-bottom:%?42?%!important}.u-p-b-42{padding-bottom:%?42?%!important}.u-margin-bottom-42{margin-bottom:%?42?%!important}.u-padding-bottom-42{padding-bottom:%?42?%!important}.u-margin-44, .u-m-44{margin:%?44?%!important}.u-padding-44, .u-p-44{padding:%?44?%!important}.u-m-l-44{margin-left:%?44?%!important}.u-p-l-44{padding-left:%?44?%!important}.u-margin-left-44{margin-left:%?44?%!important}.u-padding-left-44{padding-left:%?44?%!important}.u-m-t-44{margin-top:%?44?%!important}.u-p-t-44{padding-top:%?44?%!important}.u-margin-top-44{margin-top:%?44?%!important}.u-padding-top-44{padding-top:%?44?%!important}.u-m-r-44{margin-right:%?44?%!important}.u-p-r-44{padding-right:%?44?%!important}.u-margin-right-44{margin-right:%?44?%!important}.u-padding-right-44{padding-right:%?44?%!important}.u-m-b-44{margin-bottom:%?44?%!important}.u-p-b-44{padding-bottom:%?44?%!important}.u-margin-bottom-44{margin-bottom:%?44?%!important}.u-padding-bottom-44{padding-bottom:%?44?%!important}.u-margin-45, .u-m-45{margin:%?45?%!important}.u-padding-45, .u-p-45{padding:%?45?%!important}.u-m-l-45{margin-left:%?45?%!important}.u-p-l-45{padding-left:%?45?%!important}.u-margin-left-45{margin-left:%?45?%!important}.u-padding-left-45{padding-left:%?45?%!important}.u-m-t-45{margin-top:%?45?%!important}.u-p-t-45{padding-top:%?45?%!important}.u-margin-top-45{margin-top:%?45?%!important}.u-padding-top-45{padding-top:%?45?%!important}.u-m-r-45{margin-right:%?45?%!important}.u-p-r-45{padding-right:%?45?%!important}.u-margin-right-45{margin-right:%?45?%!important}.u-padding-right-45{padding-right:%?45?%!important}.u-m-b-45{margin-bottom:%?45?%!important}.u-p-b-45{padding-bottom:%?45?%!important}.u-margin-bottom-45{margin-bottom:%?45?%!important}.u-padding-bottom-45{padding-bottom:%?45?%!important}.u-margin-46, .u-m-46{margin:%?46?%!important}.u-padding-46, .u-p-46{padding:%?46?%!important}.u-m-l-46{margin-left:%?46?%!important}.u-p-l-46{padding-left:%?46?%!important}.u-margin-left-46{margin-left:%?46?%!important}.u-padding-left-46{padding-left:%?46?%!important}.u-m-t-46{margin-top:%?46?%!important}.u-p-t-46{padding-top:%?46?%!important}.u-margin-top-46{margin-top:%?46?%!important}.u-padding-top-46{padding-top:%?46?%!important}.u-m-r-46{margin-right:%?46?%!important}.u-p-r-46{padding-right:%?46?%!important}.u-margin-right-46{margin-right:%?46?%!important}.u-padding-right-46{padding-right:%?46?%!important}.u-m-b-46{margin-bottom:%?46?%!important}.u-p-b-46{padding-bottom:%?46?%!important}.u-margin-bottom-46{margin-bottom:%?46?%!important}.u-padding-bottom-46{padding-bottom:%?46?%!important}.u-margin-48, .u-m-48{margin:%?48?%!important}.u-padding-48, .u-p-48{padding:%?48?%!important}.u-m-l-48{margin-left:%?48?%!important}.u-p-l-48{padding-left:%?48?%!important}.u-margin-left-48{margin-left:%?48?%!important}.u-padding-left-48{padding-left:%?48?%!important}.u-m-t-48{margin-top:%?48?%!important}.u-p-t-48{padding-top:%?48?%!important}.u-margin-top-48{margin-top:%?48?%!important}.u-padding-top-48{padding-top:%?48?%!important}.u-m-r-48{margin-right:%?48?%!important}.u-p-r-48{padding-right:%?48?%!important}.u-margin-right-48{margin-right:%?48?%!important}.u-padding-right-48{padding-right:%?48?%!important}.u-m-b-48{margin-bottom:%?48?%!important}.u-p-b-48{padding-bottom:%?48?%!important}.u-margin-bottom-48{margin-bottom:%?48?%!important}.u-padding-bottom-48{padding-bottom:%?48?%!important}.u-margin-50, .u-m-50{margin:%?50?%!important}.u-padding-50, .u-p-50{padding:%?50?%!important}.u-m-l-50{margin-left:%?50?%!important}.u-p-l-50{padding-left:%?50?%!important}.u-margin-left-50{margin-left:%?50?%!important}.u-padding-left-50{padding-left:%?50?%!important}.u-m-t-50{margin-top:%?50?%!important}.u-p-t-50{padding-top:%?50?%!important}.u-margin-top-50{margin-top:%?50?%!important}.u-padding-top-50{padding-top:%?50?%!important}.u-m-r-50{margin-right:%?50?%!important}.u-p-r-50{padding-right:%?50?%!important}.u-margin-right-50{margin-right:%?50?%!important}.u-padding-right-50{padding-right:%?50?%!important}.u-m-b-50{margin-bottom:%?50?%!important}.u-p-b-50{padding-bottom:%?50?%!important}.u-margin-bottom-50{margin-bottom:%?50?%!important}.u-padding-bottom-50{padding-bottom:%?50?%!important}.u-margin-52, .u-m-52{margin:%?52?%!important}.u-padding-52, .u-p-52{padding:%?52?%!important}.u-m-l-52{margin-left:%?52?%!important}.u-p-l-52{padding-left:%?52?%!important}.u-margin-left-52{margin-left:%?52?%!important}.u-padding-left-52{padding-left:%?52?%!important}.u-m-t-52{margin-top:%?52?%!important}.u-p-t-52{padding-top:%?52?%!important}.u-margin-top-52{margin-top:%?52?%!important}.u-padding-top-52{padding-top:%?52?%!important}.u-m-r-52{margin-right:%?52?%!important}.u-p-r-52{padding-right:%?52?%!important}.u-margin-right-52{margin-right:%?52?%!important}.u-padding-right-52{padding-right:%?52?%!important}.u-m-b-52{margin-bottom:%?52?%!important}.u-p-b-52{padding-bottom:%?52?%!important}.u-margin-bottom-52{margin-bottom:%?52?%!important}.u-padding-bottom-52{padding-bottom:%?52?%!important}.u-margin-54, .u-m-54{margin:%?54?%!important}.u-padding-54, .u-p-54{padding:%?54?%!important}.u-m-l-54{margin-left:%?54?%!important}.u-p-l-54{padding-left:%?54?%!important}.u-margin-left-54{margin-left:%?54?%!important}.u-padding-left-54{padding-left:%?54?%!important}.u-m-t-54{margin-top:%?54?%!important}.u-p-t-54{padding-top:%?54?%!important}.u-margin-top-54{margin-top:%?54?%!important}.u-padding-top-54{padding-top:%?54?%!important}.u-m-r-54{margin-right:%?54?%!important}.u-p-r-54{padding-right:%?54?%!important}.u-margin-right-54{margin-right:%?54?%!important}.u-padding-right-54{padding-right:%?54?%!important}.u-m-b-54{margin-bottom:%?54?%!important}.u-p-b-54{padding-bottom:%?54?%!important}.u-margin-bottom-54{margin-bottom:%?54?%!important}.u-padding-bottom-54{padding-bottom:%?54?%!important}.u-margin-55, .u-m-55{margin:%?55?%!important}.u-padding-55, .u-p-55{padding:%?55?%!important}.u-m-l-55{margin-left:%?55?%!important}.u-p-l-55{padding-left:%?55?%!important}.u-margin-left-55{margin-left:%?55?%!important}.u-padding-left-55{padding-left:%?55?%!important}.u-m-t-55{margin-top:%?55?%!important}.u-p-t-55{padding-top:%?55?%!important}.u-margin-top-55{margin-top:%?55?%!important}.u-padding-top-55{padding-top:%?55?%!important}.u-m-r-55{margin-right:%?55?%!important}.u-p-r-55{padding-right:%?55?%!important}.u-margin-right-55{margin-right:%?55?%!important}.u-padding-right-55{padding-right:%?55?%!important}.u-m-b-55{margin-bottom:%?55?%!important}.u-p-b-55{padding-bottom:%?55?%!important}.u-margin-bottom-55{margin-bottom:%?55?%!important}.u-padding-bottom-55{padding-bottom:%?55?%!important}.u-margin-56, .u-m-56{margin:%?56?%!important}.u-padding-56, .u-p-56{padding:%?56?%!important}.u-m-l-56{margin-left:%?56?%!important}.u-p-l-56{padding-left:%?56?%!important}.u-margin-left-56{margin-left:%?56?%!important}.u-padding-left-56{padding-left:%?56?%!important}.u-m-t-56{margin-top:%?56?%!important}.u-p-t-56{padding-top:%?56?%!important}.u-margin-top-56{margin-top:%?56?%!important}.u-padding-top-56{padding-top:%?56?%!important}.u-m-r-56{margin-right:%?56?%!important}.u-p-r-56{padding-right:%?56?%!important}.u-margin-right-56{margin-right:%?56?%!important}.u-padding-right-56{padding-right:%?56?%!important}.u-m-b-56{margin-bottom:%?56?%!important}.u-p-b-56{padding-bottom:%?56?%!important}.u-margin-bottom-56{margin-bottom:%?56?%!important}.u-padding-bottom-56{padding-bottom:%?56?%!important}.u-margin-58, .u-m-58{margin:%?58?%!important}.u-padding-58, .u-p-58{padding:%?58?%!important}.u-m-l-58{margin-left:%?58?%!important}.u-p-l-58{padding-left:%?58?%!important}.u-margin-left-58{margin-left:%?58?%!important}.u-padding-left-58{padding-left:%?58?%!important}.u-m-t-58{margin-top:%?58?%!important}.u-p-t-58{padding-top:%?58?%!important}.u-margin-top-58{margin-top:%?58?%!important}.u-padding-top-58{padding-top:%?58?%!important}.u-m-r-58{margin-right:%?58?%!important}.u-p-r-58{padding-right:%?58?%!important}.u-margin-right-58{margin-right:%?58?%!important}.u-padding-right-58{padding-right:%?58?%!important}.u-m-b-58{margin-bottom:%?58?%!important}.u-p-b-58{padding-bottom:%?58?%!important}.u-margin-bottom-58{margin-bottom:%?58?%!important}.u-padding-bottom-58{padding-bottom:%?58?%!important}.u-margin-60, .u-m-60{margin:%?60?%!important}.u-padding-60, .u-p-60{padding:%?60?%!important}.u-m-l-60{margin-left:%?60?%!important}.u-p-l-60{padding-left:%?60?%!important}.u-margin-left-60{margin-left:%?60?%!important}.u-padding-left-60{padding-left:%?60?%!important}.u-m-t-60{margin-top:%?60?%!important}.u-p-t-60{padding-top:%?60?%!important}.u-margin-top-60{margin-top:%?60?%!important}.u-padding-top-60{padding-top:%?60?%!important}.u-m-r-60{margin-right:%?60?%!important}.u-p-r-60{padding-right:%?60?%!important}.u-margin-right-60{margin-right:%?60?%!important}.u-padding-right-60{padding-right:%?60?%!important}.u-m-b-60{margin-bottom:%?60?%!important}.u-p-b-60{padding-bottom:%?60?%!important}.u-margin-bottom-60{margin-bottom:%?60?%!important}.u-padding-bottom-60{padding-bottom:%?60?%!important}.u-margin-62, .u-m-62{margin:%?62?%!important}.u-padding-62, .u-p-62{padding:%?62?%!important}.u-m-l-62{margin-left:%?62?%!important}.u-p-l-62{padding-left:%?62?%!important}.u-margin-left-62{margin-left:%?62?%!important}.u-padding-left-62{padding-left:%?62?%!important}.u-m-t-62{margin-top:%?62?%!important}.u-p-t-62{padding-top:%?62?%!important}.u-margin-top-62{margin-top:%?62?%!important}.u-padding-top-62{padding-top:%?62?%!important}.u-m-r-62{margin-right:%?62?%!important}.u-p-r-62{padding-right:%?62?%!important}.u-margin-right-62{margin-right:%?62?%!important}.u-padding-right-62{padding-right:%?62?%!important}.u-m-b-62{margin-bottom:%?62?%!important}.u-p-b-62{padding-bottom:%?62?%!important}.u-margin-bottom-62{margin-bottom:%?62?%!important}.u-padding-bottom-62{padding-bottom:%?62?%!important}.u-margin-64, .u-m-64{margin:%?64?%!important}.u-padding-64, .u-p-64{padding:%?64?%!important}.u-m-l-64{margin-left:%?64?%!important}.u-p-l-64{padding-left:%?64?%!important}.u-margin-left-64{margin-left:%?64?%!important}.u-padding-left-64{padding-left:%?64?%!important}.u-m-t-64{margin-top:%?64?%!important}.u-p-t-64{padding-top:%?64?%!important}.u-margin-top-64{margin-top:%?64?%!important}.u-padding-top-64{padding-top:%?64?%!important}.u-m-r-64{margin-right:%?64?%!important}.u-p-r-64{padding-right:%?64?%!important}.u-margin-right-64{margin-right:%?64?%!important}.u-padding-right-64{padding-right:%?64?%!important}.u-m-b-64{margin-bottom:%?64?%!important}.u-p-b-64{padding-bottom:%?64?%!important}.u-margin-bottom-64{margin-bottom:%?64?%!important}.u-padding-bottom-64{padding-bottom:%?64?%!important}.u-margin-65, .u-m-65{margin:%?65?%!important}.u-padding-65, .u-p-65{padding:%?65?%!important}.u-m-l-65{margin-left:%?65?%!important}.u-p-l-65{padding-left:%?65?%!important}.u-margin-left-65{margin-left:%?65?%!important}.u-padding-left-65{padding-left:%?65?%!important}.u-m-t-65{margin-top:%?65?%!important}.u-p-t-65{padding-top:%?65?%!important}.u-margin-top-65{margin-top:%?65?%!important}.u-padding-top-65{padding-top:%?65?%!important}.u-m-r-65{margin-right:%?65?%!important}.u-p-r-65{padding-right:%?65?%!important}.u-margin-right-65{margin-right:%?65?%!important}.u-padding-right-65{padding-right:%?65?%!important}.u-m-b-65{margin-bottom:%?65?%!important}.u-p-b-65{padding-bottom:%?65?%!important}.u-margin-bottom-65{margin-bottom:%?65?%!important}.u-padding-bottom-65{padding-bottom:%?65?%!important}.u-margin-66, .u-m-66{margin:%?66?%!important}.u-padding-66, .u-p-66{padding:%?66?%!important}.u-m-l-66{margin-left:%?66?%!important}.u-p-l-66{padding-left:%?66?%!important}.u-margin-left-66{margin-left:%?66?%!important}.u-padding-left-66{padding-left:%?66?%!important}.u-m-t-66{margin-top:%?66?%!important}.u-p-t-66{padding-top:%?66?%!important}.u-margin-top-66{margin-top:%?66?%!important}.u-padding-top-66{padding-top:%?66?%!important}.u-m-r-66{margin-right:%?66?%!important}.u-p-r-66{padding-right:%?66?%!important}.u-margin-right-66{margin-right:%?66?%!important}.u-padding-right-66{padding-right:%?66?%!important}.u-m-b-66{margin-bottom:%?66?%!important}.u-p-b-66{padding-bottom:%?66?%!important}.u-margin-bottom-66{margin-bottom:%?66?%!important}.u-padding-bottom-66{padding-bottom:%?66?%!important}.u-margin-68, .u-m-68{margin:%?68?%!important}.u-padding-68, .u-p-68{padding:%?68?%!important}.u-m-l-68{margin-left:%?68?%!important}.u-p-l-68{padding-left:%?68?%!important}.u-margin-left-68{margin-left:%?68?%!important}.u-padding-left-68{padding-left:%?68?%!important}.u-m-t-68{margin-top:%?68?%!important}.u-p-t-68{padding-top:%?68?%!important}.u-margin-top-68{margin-top:%?68?%!important}.u-padding-top-68{padding-top:%?68?%!important}.u-m-r-68{margin-right:%?68?%!important}.u-p-r-68{padding-right:%?68?%!important}.u-margin-right-68{margin-right:%?68?%!important}.u-padding-right-68{padding-right:%?68?%!important}.u-m-b-68{margin-bottom:%?68?%!important}.u-p-b-68{padding-bottom:%?68?%!important}.u-margin-bottom-68{margin-bottom:%?68?%!important}.u-padding-bottom-68{padding-bottom:%?68?%!important}.u-margin-70, .u-m-70{margin:%?70?%!important}.u-padding-70, .u-p-70{padding:%?70?%!important}.u-m-l-70{margin-left:%?70?%!important}.u-p-l-70{padding-left:%?70?%!important}.u-margin-left-70{margin-left:%?70?%!important}.u-padding-left-70{padding-left:%?70?%!important}.u-m-t-70{margin-top:%?70?%!important}.u-p-t-70{padding-top:%?70?%!important}.u-margin-top-70{margin-top:%?70?%!important}.u-padding-top-70{padding-top:%?70?%!important}.u-m-r-70{margin-right:%?70?%!important}.u-p-r-70{padding-right:%?70?%!important}.u-margin-right-70{margin-right:%?70?%!important}.u-padding-right-70{padding-right:%?70?%!important}.u-m-b-70{margin-bottom:%?70?%!important}.u-p-b-70{padding-bottom:%?70?%!important}.u-margin-bottom-70{margin-bottom:%?70?%!important}.u-padding-bottom-70{padding-bottom:%?70?%!important}.u-margin-72, .u-m-72{margin:%?72?%!important}.u-padding-72, .u-p-72{padding:%?72?%!important}.u-m-l-72{margin-left:%?72?%!important}.u-p-l-72{padding-left:%?72?%!important}.u-margin-left-72{margin-left:%?72?%!important}.u-padding-left-72{padding-left:%?72?%!important}.u-m-t-72{margin-top:%?72?%!important}.u-p-t-72{padding-top:%?72?%!important}.u-margin-top-72{margin-top:%?72?%!important}.u-padding-top-72{padding-top:%?72?%!important}.u-m-r-72{margin-right:%?72?%!important}.u-p-r-72{padding-right:%?72?%!important}.u-margin-right-72{margin-right:%?72?%!important}.u-padding-right-72{padding-right:%?72?%!important}.u-m-b-72{margin-bottom:%?72?%!important}.u-p-b-72{padding-bottom:%?72?%!important}.u-margin-bottom-72{margin-bottom:%?72?%!important}.u-padding-bottom-72{padding-bottom:%?72?%!important}.u-margin-74, .u-m-74{margin:%?74?%!important}.u-padding-74, .u-p-74{padding:%?74?%!important}.u-m-l-74{margin-left:%?74?%!important}.u-p-l-74{padding-left:%?74?%!important}.u-margin-left-74{margin-left:%?74?%!important}.u-padding-left-74{padding-left:%?74?%!important}.u-m-t-74{margin-top:%?74?%!important}.u-p-t-74{padding-top:%?74?%!important}.u-margin-top-74{margin-top:%?74?%!important}.u-padding-top-74{padding-top:%?74?%!important}.u-m-r-74{margin-right:%?74?%!important}.u-p-r-74{padding-right:%?74?%!important}.u-margin-right-74{margin-right:%?74?%!important}.u-padding-right-74{padding-right:%?74?%!important}.u-m-b-74{margin-bottom:%?74?%!important}.u-p-b-74{padding-bottom:%?74?%!important}.u-margin-bottom-74{margin-bottom:%?74?%!important}.u-padding-bottom-74{padding-bottom:%?74?%!important}.u-margin-75, .u-m-75{margin:%?75?%!important}.u-padding-75, .u-p-75{padding:%?75?%!important}.u-m-l-75{margin-left:%?75?%!important}.u-p-l-75{padding-left:%?75?%!important}.u-margin-left-75{margin-left:%?75?%!important}.u-padding-left-75{padding-left:%?75?%!important}.u-m-t-75{margin-top:%?75?%!important}.u-p-t-75{padding-top:%?75?%!important}.u-margin-top-75{margin-top:%?75?%!important}.u-padding-top-75{padding-top:%?75?%!important}.u-m-r-75{margin-right:%?75?%!important}.u-p-r-75{padding-right:%?75?%!important}.u-margin-right-75{margin-right:%?75?%!important}.u-padding-right-75{padding-right:%?75?%!important}.u-m-b-75{margin-bottom:%?75?%!important}.u-p-b-75{padding-bottom:%?75?%!important}.u-margin-bottom-75{margin-bottom:%?75?%!important}.u-padding-bottom-75{padding-bottom:%?75?%!important}.u-margin-76, .u-m-76{margin:%?76?%!important}.u-padding-76, .u-p-76{padding:%?76?%!important}.u-m-l-76{margin-left:%?76?%!important}.u-p-l-76{padding-left:%?76?%!important}.u-margin-left-76{margin-left:%?76?%!important}.u-padding-left-76{padding-left:%?76?%!important}.u-m-t-76{margin-top:%?76?%!important}.u-p-t-76{padding-top:%?76?%!important}.u-margin-top-76{margin-top:%?76?%!important}.u-padding-top-76{padding-top:%?76?%!important}.u-m-r-76{margin-right:%?76?%!important}.u-p-r-76{padding-right:%?76?%!important}.u-margin-right-76{margin-right:%?76?%!important}.u-padding-right-76{padding-right:%?76?%!important}.u-m-b-76{margin-bottom:%?76?%!important}.u-p-b-76{padding-bottom:%?76?%!important}.u-margin-bottom-76{margin-bottom:%?76?%!important}.u-padding-bottom-76{padding-bottom:%?76?%!important}.u-margin-78, .u-m-78{margin:%?78?%!important}.u-padding-78, .u-p-78{padding:%?78?%!important}.u-m-l-78{margin-left:%?78?%!important}.u-p-l-78{padding-left:%?78?%!important}.u-margin-left-78{margin-left:%?78?%!important}.u-padding-left-78{padding-left:%?78?%!important}.u-m-t-78{margin-top:%?78?%!important}.u-p-t-78{padding-top:%?78?%!important}.u-margin-top-78{margin-top:%?78?%!important}.u-padding-top-78{padding-top:%?78?%!important}.u-m-r-78{margin-right:%?78?%!important}.u-p-r-78{padding-right:%?78?%!important}.u-margin-right-78{margin-right:%?78?%!important}.u-padding-right-78{padding-right:%?78?%!important}.u-m-b-78{margin-bottom:%?78?%!important}.u-p-b-78{padding-bottom:%?78?%!important}.u-margin-bottom-78{margin-bottom:%?78?%!important}.u-padding-bottom-78{padding-bottom:%?78?%!important}.u-margin-80, .u-m-80{margin:%?80?%!important}.u-padding-80, .u-p-80{padding:%?80?%!important}.u-m-l-80{margin-left:%?80?%!important}.u-p-l-80{padding-left:%?80?%!important}.u-margin-left-80{margin-left:%?80?%!important}.u-padding-left-80{padding-left:%?80?%!important}.u-m-t-80{margin-top:%?80?%!important}.u-p-t-80{padding-top:%?80?%!important}.u-margin-top-80{margin-top:%?80?%!important}.u-padding-top-80{padding-top:%?80?%!important}.u-m-r-80{margin-right:%?80?%!important}.u-p-r-80{padding-right:%?80?%!important}.u-margin-right-80{margin-right:%?80?%!important}.u-padding-right-80{padding-right:%?80?%!important}.u-m-b-80{margin-bottom:%?80?%!important}.u-p-b-80{padding-bottom:%?80?%!important}.u-margin-bottom-80{margin-bottom:%?80?%!important}.u-padding-bottom-80{padding-bottom:%?80?%!important}.u-reset-nvue{flex-direction:row;align-items:center}.u-type-primary-light{color:#ecf5ff}.u-type-warning-light{color:#fdf6ec}.u-type-success-light{color:#dbf1e1}.u-type-error-light{color:#fef0f0}.u-type-info-light{color:#f4f4f5}.u-type-primary-light-bg{background-color:#ecf5ff}.u-type-warning-light-bg{background-color:#fdf6ec}.u-type-success-light-bg{background-color:#dbf1e1}.u-type-error-light-bg{background-color:#fef0f0}.u-type-info-light-bg{background-color:#f4f4f5}.u-type-primary-dark{color:#2b85e4}.u-type-warning-dark{color:#f29100}.u-type-success-dark{color:#18b566}.u-type-error-dark{color:#dd6161}.u-type-info-dark{color:#82848a}.u-type-primary-dark-bg{background-color:#2b85e4}.u-type-warning-dark-bg{background-color:#f29100}.u-type-success-dark-bg{background-color:#18b566}.u-type-error-dark-bg{background-color:#dd6161}.u-type-info-dark-bg{background-color:#82848a}.u-type-primary-disabled{color:#a0cfff}.u-type-warning-disabled{color:#fcbd71}.u-type-success-disabled{color:#71d5a1}.u-type-error-disabled{color:#fab6b6}.u-type-info-disabled{color:#c8c9cc}.u-type-primary{color:#2979ff}.u-type-warning{color:#f90}.u-type-success{color:#19be6b}.u-type-error{color:#fa3534}.u-type-info{color:#909399}.u-type-primary-bg{background-color:#2979ff}.u-type-warning-bg{background-color:#f90}.u-type-success-bg{background-color:#19be6b}.u-type-error-bg{background-color:#fa3534}.u-type-info-bg{background-color:#909399}.u-main-color{color:#303133}.u-content-color{color:#606266}.u-tips-color{color:#909399}.u-light-color{color:#c0c4cc}uni-page-body{color:#303133;font-size:%?28?%}\n/* start--\u53BB\u9664webkit\u7684\u9ED8\u8BA4\u6837\u5F0F--start */.u-fix-ios-appearance{-webkit-appearance:none}\n/* end--\u53BB\u9664webkit\u7684\u9ED8\u8BA4\u6837\u5F0F--end */\n/* start--icon\u56FE\u6807\u5916\u5C42\u5957\u4E00\u4E2Aview\uFF0C\u8BA9\u5176\u8FBE\u5230\u66F4\u597D\u7684\u5782\u76F4\u5C45\u4E2D\u7684\u6548\u679C--start */.u-icon-wrap{display:flex;align-items:center}\n/* end-icon\u56FE\u6807\u5916\u5C42\u5957\u4E00\u4E2Aview\uFF0C\u8BA9\u5176\u8FBE\u5230\u66F4\u597D\u7684\u5782\u76F4\u5C45\u4E2D\u7684\u6548\u679C--end */\n/* start--iPhoneX\u5E95\u90E8\u5B89\u5168\u533A\u5B9A\u4E49--start */.safe-area-inset-bottom{padding-bottom:0;padding-bottom:constant(safe-area-inset-bottom);padding-bottom:env(safe-area-inset-bottom)}\n/* end-iPhoneX\u5E95\u90E8\u5B89\u5168\u533A\u5B9A\u4E49--end */\n/* start--\u5404\u79CDhover\u70B9\u51FB\u53CD\u9988\u76F8\u5173\u7684\u7C7B\u540D-start */.u-hover-class{opacity:.6}.u-cell-hover{background-color:#f7f8f9!important}\n/* end--\u5404\u79CDhover\u70B9\u51FB\u53CD\u9988\u76F8\u5173\u7684\u7C7B\u540D--end */\n/* start--\u6587\u672C\u884C\u6570\u9650\u5236--start */.u-line-1{overflow:hidden;white-space:nowrap;text-overflow:ellipsis}.u-line-2{-webkit-line-clamp:2}.u-line-3{-webkit-line-clamp:3}.u-line-4{-webkit-line-clamp:4}.u-line-5{-webkit-line-clamp:5}.u-line-2, .u-line-3, .u-line-4, .u-line-5{overflow:hidden;word-break:break-all;text-overflow:ellipsis;display:-webkit-box;-webkit-box-orient:vertical}\n/* end--\u6587\u672C\u884C\u6570\u9650\u5236--end */\n/* start--Retina \u5C4F\u5E55\u4E0B\u7684 1px \u8FB9\u6846--start */.u-border,\n.u-border-bottom,\n.u-border-left,\n.u-border-right,\n.u-border-top,\n.u-border-top-bottom{position:relative}.u-border-bottom:after,\n.u-border-left:after,\n.u-border-right:after,\n.u-border-top-bottom:after,\n.u-border-top:after,\n.u-border:after{content:\" \";position:absolute;left:0;top:0;pointer-events:none;box-sizing:border-box;-webkit-transform-origin:0 0;transform-origin:0 0;width:199.8%;height:199.7%;-webkit-transform:scale(.5);transform:scale(.5);border:0 solid #e4e7ed;z-index:2}.u-border-top:after{border-top-width:1px}.u-border-left:after{border-left-width:1px}.u-border-right:after{border-right-width:1px}.u-border-bottom:after{border-bottom-width:1px}.u-border-top-bottom:after{border-width:1px 0}.u-border:after{border-width:1px}\n/* end--Retina \u5C4F\u5E55\u4E0B\u7684 1px \u8FB9\u6846--end */\n/* start--clearfix--start */.u-clearfix:after,\n.clearfix:after{content:\"\";display:table;clear:both}\n/* end--clearfix--end */\n/* start--\u9AD8\u65AF\u6A21\u7CCAtabbar\u5E95\u90E8\u5904\u7406--start */.u-blur-effect-inset{width:%?750?%;height:var(--window-bottom);background-color:#fff}\n/* end--\u9AD8\u65AF\u6A21\u7CCAtabbar\u5E95\u90E8\u5904\u7406--end */\n/* start--\u63D0\u5347H5\u7AEFuni.toast()\u7684\u5C42\u7EA7\uFF0C\u907F\u514D\u88ABuView\u7684modal\u7B49\u906E\u76D6--start */uni-toast{z-index:10090}uni-toast .uni-toast{z-index:10090}\n/* end--\u63D0\u5347H5\u7AEFuni.toast()\u7684\u5C42\u7EA7\uFF0C\u907F\u514D\u88ABuView\u7684modal\u7B49\u906E\u76D6--end */\n/* start--\u53BB\u9664button\u7684\u6240\u6709\u9ED8\u8BA4\u6837\u5F0F--start */.u-reset-button{padding:0;font-size:inherit;line-height:inherit;background-color:initial;color:inherit}.u-reset-button::after{border:none}\n/* end--\u53BB\u9664button\u7684\u6240\u6709\u9ED8\u8BA4\u6837\u5F0F--end */\n/* H5\u7684\u65F6\u5019\uFF0C\u9690\u85CF\u6EDA\u52A8\u6761 */::-webkit-scrollbar{display:none;width:0!important;height:0!important;-webkit-appearance:none;background:transparent}\n/*\u6BCF\u4E2A\u9875\u9762\u516C\u5171css */.w-20{width:%?40?%!important}.w-30{width:%?60?%!important}.w-40{width:%?80?%!important}.w-50{width:%?100?%!important}.w-60{width:%?120?%!important}.w-70{width:%?140?%!important}.w-80{width:%?160?%!important}.w-90{width:%?180?%!important}.w-100{width:%?200?%!important}.w-120{width:%?240?%!important}.w-130{width:%?260?%!important}.w-140{width:%?280?%!important}.w-150{width:%?300?%!important}.w-160{width:%?320?%!important}.w-180{width:%?360?%!important}.w-200{width:%?400?%!important}.w-220{width:%?440?%!important}.w-240{width:%?480?%!important}.w-300{width:%?600?%!important}.h30{height:%?60?%!important}.h40{height:%?80?%!important}.h45{height:%?90?%!important}.h60{height:%?120?%!important}.h80{height:%?160?%!important}.ml5{margin-left:%?10?%!important}.ml10{margin-left:%?20?%!important}.ml20{margin-left:%?40?%!important}.mr0{margin-right:%?0?%!important}.mr2{margin-right:%?4?%!important}.mr4{margin-right:%?8?%!important}.mr5{margin-right:%?10?%!important}.mr8{margin-right:%?8?%!important}.mr10{margin-right:%?20?%!important}.mr20{margin-right:%?40?%!important}.mr25{margin-right:%?50?%!important}.mr30{margin-right:%?60?%!important}.mr40{margin-right:%?80?%!important}.mr50{margin-right:%?100?%!important}.mt5{margin-top:%?10?%!important}.mt10{margin-top:%?20?%!important}.mt15{margin-top:%?30?%!important}.mt20{margin-top:%?40?%!important}.mt50{margin-top:%?100?%!important}.mb5{margin-bottom:%?10?%!important}.mb10{margin-bottom:%?20?%!important}.mb15{margin-bottom:%?30?%!important}.mb16{margin-bottom:%?32?%!important}.mb20{margin-bottom:%?40?%!important}.mb24{margin-bottom:%?48?%!important}.mb40{margin-bottom:%?80?%!important}.mb50{margin-bottom:%?100?%!important}.mb100{margin-bottom:%?200?%!important}.d-none{display:none!important}.d-inline{display:inline!important}.d-inline-block{display:inline-block!important}.d-block{display:block!important}.d-table{display:table!important}.d-table-cell{display:table-cell!important}.d-flex{display:flex!important}.d-inline-flex{display:inline-flex!important}.fl{float:left!important}.fr{float:right!important}.fn{float:none!important}.bold{font-weight:700}.pd25{padding:%?50?%}.text-center{text-align:center!important}.text-right{text-align:right!important}.hide{display:none}.show{display:block}.vertical-middle{display:inline-block;vertical-align:middle}.flex{display:flex!important}.flex-column{display:flex;flex-direction:column}.flex-center{display:flex!important;justify-content:center!important;align-items:center!important}.flex-h-center{display:flex!important;justify-content:center!important}.flex-v-center{display:flex!important;align-items:center!important}.flex-no-grow{flex-grow:0!important}.flex-between{display:flex;justify-content:space-between!important}.flex-around{justify-content:space-around!important}.flex-no-shrink{flex-shrink:0!important}.flex-start{display:flex;justify-content:flex-start!important}.flex-end{display:flex;justify-content:flex-end!important}.align-end{display:flex;align-items:flex-end!important}.flex-one{flex:1!important;min-width:0!important;min-height:0!important}.flex-wrap{flex-wrap:wrap}.full-width{width:100%!important}.full-height{height:100%!important}.pointer{cursor:pointer}.disabled{pointer-events:none;cursor:default}.ellipsis{overflow:hidden;text-overflow:ellipsis;display:-webkit-box;-webkit-line-clamp:1;-webkit-box-orient:vertical}.ellipsis-2{overflow:hidden;text-overflow:ellipsis;display:-webkit-box;-webkit-line-clamp:2;-webkit-box-orient:vertical}.required:before{display:inline-block;margin-right:4px;color:#f5222d;font-size:14px;font-family:SimSun,sans-serif;line-height:1;content:\"*\"}.pre{white-space:pre}.round{border-radius:50%}.pr{position:relative}.pa{position:absolute}.f12{font-size:%?24?%!important}.f13{font-size:%?26?%!important}.f14{font-size:%?28?%!important}.f15{font-size:%?30?%!important}.f16{font-size:%?32?%!important}.f17{font-size:%?34?%!important}.f18{font-size:%?36?%!important}.overhidden{white-space:nowrap;overflow:hidden;text-overflow:ellipsis}.no-border-t{border-top:0!important}.no-border-r{border-right:0!important}.no-border-b{border-bottom:0!important}.no-border-l{border-left:0!important}.gray-bg{background:#a9a9a9!important}.gray-color{color:#a9a9a9!important}.view-disabled{pointer-events:none;color:rgba(0,0,0,.3)!important;background-color:#f7f7f7!important}.uni-system-preview-image{z-index:999999}uni-modal{z-index:999999!important}uni-toast{z-index:999999!important}.global-gray{-webkit-filter:grayscale(100%)!important;filter:grayscale(100%)!important}", ""]), e.exports = n;
  },
  8963: function (e, n, o) {
    "use strict";

    o("6a54");
    var t = o("f5bd").default;
    Object.defineProperty(n, "__esModule", {
      value: !0
    }), n.getThirdAppMark = n.default = void 0, o("5c47"), o("2c10");
    var a = t(o("33cd")),
      i = t(o("6d09")),
      r = t(o("3036")),
      u = t(o("5fac")),
      l = t(o("36ad")),
      s = t(o("aa40")),
      m = t(o("583c")),
      d = t(o("f635")),
      c = t(o("cc55")),
      g = t(o("fd6f")),
      f = t(o("b7ec")),
      p = t(o("040d")),
      h = t(o("eb93")),
      y = t(o("fa1b")),
      _ = t(o("0949")),
      w = t(o("2f9a"));
    n.getThirdAppMark = function () {
      var e = navigator.userAgent.toLowerCase();
      return "micromessenger" != e.match(/MicroMessenger/i) && (a.default.isInApp() ? "hg" : i.default.isInApp() ? p.default.isInApp() ? "cmstopv3" : m.default.isInApp() ? "newcmstop" : "cmstop" : u.default.isInApp() ? "yongpai" : l.default.isInApp() ? "nbtv" : r.default.isInApp() ? "jinhua" : s.default.isInApp() ? "tianmu" : d.default.isInApp() ? "trs" : c.default.isInApp() ? "injs" : g.default.isInApp() ? "fangzheng" : f.default.isInApp() ? "xingkongyun" : h.default.isInApp() ? "xiuzhou" : y.default.isInApp() ? "ziyang" : _.default.isInApp() ? "yantai" : !!w.default.isInApp() && "tianma");
    };
    var b = {
        hg: a.default,
        cmstop: i.default,
        newcmstop: m.default,
        cmstopv3: p.default,
        jinhua: r.default,
        yongpai: u.default,
        nbtv: l.default,
        tianmu: s.default,
        trs: d.default,
        injs: c.default,
        fangzheng: g.default,
        xingkongyun: f.default,
        xiuzhou: h.default,
        ziyang: y.default,
        yantai: _.default,
        tianma: w.default
      },
      v = b;
    n.default = v;
  },
  9219: function (e, n, o) {
    "use strict";

    o("6a54");
    var t = o("f5bd").default;
    Object.defineProperty(n, "__esModule", {
      value: !0
    }), n.urlencode = n.strToTimeStamp = n.sleep = n.removeURLParameter = n.randomString = n.pxToRpx = n.objToQueryParams = n.mergeObject = n.kSort = n.hidePhoneNum = n.hidePageNavInBrowser = n.hideIdCardNum = n.hideFormatUserName = n.hexToRgba = n.getYdModulePath = n.getWechatReqClientType = n.getUrlLinkParams = n.getTenantId = n.getRandomElementFromArray = n.getPlatform = n.getObsImageUrl = n.getLocalImageUrl = n.getImageUrl = n.getImageSize = n.getFileType = n.getCurrentPagePath = n.getAASkey = n.durationFormat = n.diffTimeFormat = n.copyText = n.checkTimeState = n.checkIsYdSdkBrowser = n.checkIsWechatMiniProgram = n.checkIsWechatBrowser = n.checkIsShowShoppingMallNav = n.checkIsInThirdBrowser = n.checkIsInApp = n.checkIsHidePageNavBack = n.calcTimer = n.base64EncodeUnicode = n.aesEncrypt = n.addParamsToCurrentPageLink = void 0, o("e966"), o("c223"), o("5c47"), o("a1c1"), o("2c10"), o("bf0f"), o("af8f"), o("aa9c"), o("f7a5"), o("dc8a"), o("4100"), o("2797"), o("c9b5"), o("ab80"), o("20f3"), o("5ef2"), o("23f4"), o("7d2f"), o("9c4e"), o("d4b5"), o("dfcf"), o("dd2b"), o("0506"), o("d5c6"), o("5a56"), o("f074"), o("4db2"), o("c976"), o("4d8f"), o("7b97"), o("668a"), o("c5b7"), o("8ff5"), o("2378"), o("641a"), o("64e0"), o("cce3"), o("efba"), o("d009"), o("bd7d"), o("7edd"), o("d798"), o("f547"), o("5e54"), o("b60a"), o("8c18"), o("12973"), o("f991"), o("198e"), o("8557"), o("63b1"), o("1954"), o("1cf1");
    var a = t(o("2634")),
      i = t(o("2fdc")),
      r = t(o("b7c7")),
      u = t(o("406e")),
      l = o("8963"),
      s = t(o("eac1")),
      m = t(o("1d0e")),
      d = t(o("2cfc")),
      c = t(o("7539"));
    n.getImageUrl = function () {
      var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {},
        n = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0,
        o = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 0,
        t = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : "",
        a = arguments.length > 4 && void 0 !== arguments[4] && arguments[4];
      return "obs" === getApp().globalData.oss_platform ? g(e, n, o, t, a) : f(e, n, o, t, a);
    };
    var g = function (e, n, o, t, a) {
      if (!e || !e.host && !e.hostp) return "";
      if (t && n) {
        var i = (0, r.default)(t.split(":")),
          u = i[0],
          l = i[1];
        u = parseInt(u), l = parseInt(l), o = parseInt(n * l / u);
      }
      var s = "",
        m = "?x-image-process=image/resize,limit_0";
      return n && o ? s = m + ",m_fill,w_".concat(n, ",h_").concat(o) : n ? s = m + ",w_".concat(n) : o && (s = m + ",h_".concat(o)), e["hostp"] && (e["host"] = e["hostp"].replace("${@I}", "").replace("${@M}", "").replace("${@F}", "")), a && (s = s ? s + ",gs_1" : "?gs_1"), e["host"] + e["file"] + s;
    };
    n.getObsImageUrl = g;
    var f = function (e, n, o, t, a) {
      if (!e || !e.host && !e.hostp) return "";
      if (t && n) {
        var i = (0, r.default)(t.split(":")),
          u = i[0],
          l = i[1];
        u = parseInt(u), l = parseInt(l), o = parseInt(n * l / u);
      }
      var s = n && o ? "?x-image-process=w_".concat(n, ",h_").concat(o) : "";
      return e["hostp"] && (e["host"] = e["hostp"].replace("${@I}", "").replace("${@M}", "").replace("${@F}", "")), a && (s = s ? s + ",gs_1" : "?gs_1"), e["host"] + e["file"] + s;
    };
    n.getLocalImageUrl = f;
    n.diffTimeFormat = function (e) {
      var n = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0,
        o = arguments.length > 2 && void 0 !== arguments[2] && arguments[2];
      n || (n = parseInt(new Date().getTime() / 1000));
      var t = Math.abs(n - e);
      return p(t, o);
    };
    var p = function (e) {
      var n = arguments.length > 1 && void 0 !== arguments[1] && arguments[1],
        o = parseInt(e / 86400),
        t = parseInt(e / 3600) - 24 * o,
        a = parseInt(e % 3600 / 60),
        i = parseInt(e % 60),
        r = "";
      return o && (r += o + "\u5929"), t ? r += t + "\u65F6" : r && (r += "0\u65F6"), a ? r += a + "\u5206" : r && n && i && (r += "0\u5206"), n && i && (r += i + "\u79D2"), r;
    };
    n.durationFormat = p;
    n.calcTimer = function (e) {
      if (0 === e || "number" !== typeof e) return "00:00";
      var n = Math.floor(e / 60),
        o = Math.floor(e % 60);
      return n < 10 && (n = "0" + n), o < 10 && (o = "0" + o), n + ":" + o;
    };
    var h = function () {
      return 3, 3;
    };
    n.getPlatform = h;
    n.getWechatReqClientType = function () {
      return v() || b() || w() ? "wx_app" : "wx_official";
    };
    var y = function () {
      var e = h();
      return 3 === e && "micromessenger" == navigator.userAgent.toLowerCase().match(/MicroMessenger/i);
    };
    n.checkIsWechatBrowser = y;
    var _ = function () {
      var e = (0, i.default)((0, a.default)().mark(function e() {
        var n;
        return (0, a.default)().wrap(function (e) {
          while (1) switch (e.prev = e.next) {
            case 0:
              if (n = h(), 3 !== n) {
                e.next = 9;
                break;
              }
              if ("micromessenger" != navigator.userAgent.toLowerCase().match(/MicroMessenger/i)) {
                e.next = 6;
                break;
              }
              return e.abrupt("return", new Promise(function (e) {
                c.default.miniProgram.getEnv(function (n) {
                  n.miniprogram ? e(!0) : e(!1);
                });
              }));
            case 6:
              return e.abrupt("return", !1);
            case 7:
              e.next = 10;
              break;
            case 9:
              return e.abrupt("return", !1);
            case 10:
            case "end":
              return e.stop();
          }
        }, e);
      }));
      return function () {
        return e.apply(this, arguments);
      };
    }();
    n.checkIsWechatMiniProgram = _;
    var w = function () {
      var e = h();
      return 3 === e && "yunxh-ydapp" == navigator.userAgent.toLowerCase().match(/YUNXH-YDAPP/i);
    };
    n.checkIsYdSdkBrowser = w;
    var b = function () {
      var e = h();
      return 3 === e && (0, l.getThirdAppMark)();
    };
    n.checkIsInThirdBrowser = b;
    var v = function () {
      var e = h();
      return 1 === e || 2 === e;
    };
    n.checkIsInApp = v;
    n.checkIsHidePageNavBack = function () {
      return !k() && !(!y() && !b());
    };
    var k = function () {
      if (b()) {
        var e = getCurrentPages(),
          n = e[e.length - 1];
        if (-1 != n.route.search("module-mall")) {
          var o = uni.getStorageSync(d.default.localStorageKeys.shoppingMallOpenNav);
          if (o) {
            var t = JSON.parse(o);
            if (t.data) return !0;
          }
        }
      }
      return !1;
    };
    n.checkIsShowShoppingMallNav = k;
    n.hidePageNavInBrowser = function () {
      if (!k() && (y() || b())) {
        var e = document.getElementsByTagName("uni-page-head");
        e && e[0] && (e[0].style.display = "none");
      }
    };
    n.getTenantId = function () {
      var e = h();
      if (3 === e) {
        var n = location.hostname.split(".");
        if (4 === n.length) {
          for (var o = {
              a: 1,
              b: 2,
              c: 3,
              d: 4,
              e: 5,
              f: 6,
              g: 7,
              h: 8,
              i: 9,
              j: 0
            }, t = n[0], a = [], i = 0; i < t.length; i++) {
            if (!o[t[i]]) return 0;
            a.push(o[t[i]]);
          }
          return parseInt(a.join(""));
        }
        return 1;
      }
      return 1;
    };
    n.getYdModulePath = function () {
      var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : "";
      if (!e) return "";
      var n = e;
      return "/" == n[0] && (n = n.slice(1)), "yd://" + n;
    };
    n.randomString = function (e) {
      e = e || 32;
      for (var n = "ABCDEFGHJKMNPQRSTWXYZabcdefhijkmnprstwxyz2345678", o = n.length, t = "", a = 0; a < e; a++) t += n.charAt(Math.floor(Math.random() * o));
      return t;
    };
    n.kSort = function (e) {
      var n = {},
        o = Object.keys(e);
      return o.sort(), o.forEach(function (o) {
        n[o] = e[o];
      }), n;
    };
    var C = function () {
      var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {},
        n = !(arguments.length > 1 && void 0 !== arguments[1]) || arguments[1],
        o = n ? "?" : "",
        t = [];
      for (var a in e) {
        var i = e[a];
        t.push(a + "=" + S(i));
      }
      return t.length ? o + t.join("&") : "";
    };
    n.objToQueryParams = C;
    var S = function (e) {
      return e = (e + "").toString(), encodeURIComponent(e).replace(/!/g, "%21").replace(/'/g, "%27").replace(/\(/g, "%28").replace(/\)/g, "%29").replace(/\*/g, "%2A").replace(/%20/g, "+").replace(/~/g, "%7E");
    };
    n.urlencode = S;
    n.hexToRgba = function (e, n) {
      return "rgba(" + parseInt("0x" + e.slice(1, 3)) + "," + parseInt("0x" + e.slice(3, 5)) + "," + parseInt("0x" + e.slice(5, 7)) + "," + n + ")";
    };
    n.checkTimeState = function (e, n) {
      var o = Date.parse(new Date()) / 1000,
        t = {};
      return o < e ? (t["state"] = 1, t["msg"] = "\u6D3B\u52A8\u672A\u5F00\u59CB\uFF01") : o >= e && o < n ? (t["state"] = 2, t["msg"] = "\u6D3B\u52A8\u8FDB\u884C\u4E2D") : (t["state"] = 3, t["msg"] = "\u6D3B\u52A8\u5DF2\u7ED3\u675F\uFF01"), t;
    };
    n.strToTimeStamp = function () {
      var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : "";
      return e ? (e = e.replace(/-/g, "/"), new Date(e).getTime() / 1000) : Date.parse(new Date()) / 1000;
    };
    n.getFileType = function (e) {
      var n,
        o = e.lastIndexOf(".");
      return n = e.substr(o + 1), -1 !== ["gif", "jpg", "png", "bmp", "jpeg", "ico", "webp"].indexOf(n.toLowerCase()) ? "image" : -1 !== ["wmv", "asf", "asx", "rm", "rmvb", "mp4", "3gp", "mov", "m4v", "avi", "dat", "mkv", "flv", "vob"].indexOf(n.toLowerCase()) ? "video" : -1 !== ["mp3", "aac", "flac", "wav", "wma", "vqf", "cda", "cd"].indexOf(n.toLowerCase()) ? "audio" : void 0;
    };
    n.getUrlLinkParams = function () {
      var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : "",
        n = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : "";
      if (!e || !n) return "";
      var o = new RegExp("^.*[?&]" + n + "=([^&=?]*)&?.*$", ""),
        t = e.replace(o, "$1");
      return t;
    };
    n.copyText = function () {
      var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : "",
        n = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : null;
      if (e) {
        var o = uni.getSystemInfoSync();
        "ios" === o.platform ? setTimeout(function () {
          u.default.$copyText(e).then(function (e) {
            n && n();
          }, function (e) {
            u.default.$u.toast("\u590D\u5236\u5931\u8D25");
          });
        }) : u.default.$copyText(e).then(function (e) {
          n && n();
        }, function (e) {
          u.default.$u.toast("\u590D\u5236\u5931\u8D25");
        });
      }
    };
    n.pxToRpx = function () {
      var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 0,
        n = !(arguments.length > 1 && void 0 !== arguments[1]) || arguments[1],
        o = e / (uni.upx2px(100) / 100);
      return n && (o += "rpx"), o;
    };
    n.mergeObject = function e() {
      var n = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {},
        o = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {},
        t = JSON.parse(JSON.stringify(n));
      for (var a in o) try {
        o[a].constructor == Object ? t[a] = e(t[a], o[a]) : t[a] = o[a];
      } catch (i) {
        t[a] = o[a];
      }
      return t;
    };
    n.getAASkey = function () {
      var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : "";
      if (!e) return "";
      for (var n = [], o = [], t = 0; t < e["length"]; t++) t % 2 == 0 ? o["push"](e[t]) : n["push"](e[t]);
      return s.default["md5"](o["join"]("") + n["join"](""));
    };
    n.hidePhoneNum = function (e) {
      var n = e.replace(/(\d{3})\d{4}(\d{4})/, "$1****$2");
      return n;
    };
    n.hideIdCardNum = function (e) {
      var n = e.replace(/(\d{3})\d{11}(\d{4})/, "$1***********$2");
      return n;
    };
    var P = function (e, n) {
      var o = e.split("?");
      if (o.length >= 2) {
        for (var t = encodeURIComponent(n) + "=", a = o[1].split(/[&;]/g), i = a.length; i-- > 0;) -1 !== a[i].lastIndexOf(t, 0) && a.splice(i, 1);
        return o[0] + (a.length > 0 ? "?" + a.join("&") : "");
      }
      return e;
    };
    n.removeURLParameter = P;
    var T = function () {
      var e = (0, i.default)((0, a.default)().mark(function e(n) {
        return (0, a.default)().wrap(function (e) {
          while (1) switch (e.prev = e.next) {
            case 0:
              return e.abrupt("return", new Promise(function (e) {
                return setTimeout(e, n);
              }));
            case 1:
            case "end":
              return e.stop();
          }
        }, e);
      }));
      return function (n) {
        return e.apply(this, arguments);
      };
    }();
    n.sleep = T;
    var x = function () {
      var e = (0, i.default)((0, a.default)().mark(function e(n) {
        return (0, a.default)().wrap(function (e) {
          while (1) switch (e.prev = e.next) {
            case 0:
              return e.abrupt("return", new Promise(function (e) {
                uni.getImageInfo({
                  src: n.path,
                  success: function (n) {
                    e({
                      width: n.width,
                      height: n.height
                    });
                  },
                  fail: function () {
                    e(!1);
                  }
                });
              }));
            case 1:
            case "end":
              return e.stop();
          }
        }, e);
      }));
      return function (n) {
        return e.apply(this, arguments);
      };
    }();
    n.getImageSize = x;
    var A = function () {
      var e = "",
        n = getCurrentPages(),
        o = n[n.length - 1];
      return o && o.route && (e = "/" + o.route, u.default.$u.test.isEmpty(o.options) || (e += C(o.options, !0))), e;
    };
    n.getCurrentPagePath = A;
    n.hideFormatUserName = function (e) {
      var n;
      if (2 === e.length) n = e.substr(0, 1) + "*";else if (e.length > 2) {
        for (var o = "", t = 0, a = e.length - 2; t < a; t++) o += "*";
        n = e.substr(0, 1) + o + e.substr(-1, 1);
      } else n = e;
      return n;
    };
    n.addParamsToCurrentPageLink = function (e, n) {
      var o = A();
      o = P(o, e);
      var t = getCurrentPages(),
        a = t[t.length - 1];
      return u.default.$u.test.isEmpty(a.options) ? o + "?" + e + "=" + n : o + "&" + e + "=" + n;
    };
    n.aesEncrypt = function (e, n, o) {
      var t = m.default.enc.Utf8.parse(n),
        a = m.default.enc.Utf8.parse(o),
        i = m.default.enc.Utf8.parse(e),
        r = m.default.AES.encrypt(i, t, {
          iv: a,
          mode: m.default.mode.CBC,
          padding: m.default.pad.Pkcs7
        });
      return m.default.enc.Base64.stringify(r.ciphertext);
    };
    n.getRandomElementFromArray = function (e) {
      if (0 === e.length) return null;
      var n = Math.floor(Math.random() * e.length),
        o = e[n];
      return e.splice(n, 1), o;
    };
    n.base64EncodeUnicode = function (e) {
      var n = new TextEncoder(),
        o = n.encode(e);
      return btoa(String.fromCharCode.apply(null, new Uint8Array(o)));
    };
  },
  9225: function (e, n, o) {
    var t = {
      "./af": "6ad6",
      "./af.js": "6ad6",
      "./ar": "5336",
      "./ar-dz": "6b23",
      "./ar-dz.js": "6b23",
      "./ar-kw": "1d8e",
      "./ar-kw.js": "1d8e",
      "./ar-ly": "1712",
      "./ar-ly.js": "1712",
      "./ar-ma": "c7ca",
      "./ar-ma.js": "c7ca",
      "./ar-sa": "60e9",
      "./ar-sa.js": "60e9",
      "./ar-tn": "9a7d",
      "./ar-tn.js": "9a7d",
      "./ar.js": "5336",
      "./az": "07ac",
      "./az.js": "07ac",
      "./be": "1257",
      "./be.js": "1257",
      "./bg": "b9cb",
      "./bg.js": "b9cb",
      "./bm": "9c9b",
      "./bm.js": "9c9b",
      "./bn": "9fb3",
      "./bn-bd": "a187",
      "./bn-bd.js": "a187",
      "./bn.js": "9fb3",
      "./bo": "e7f1",
      "./bo.js": "e7f1",
      "./br": "752a",
      "./br.js": "752a",
      "./bs": "5c06",
      "./bs.js": "5c06",
      "./ca": "2d29",
      "./ca.js": "2d29",
      "./cs": "a211",
      "./cs.js": "a211",
      "./cv": "fe70",
      "./cv.js": "fe70",
      "./cy": "3c81",
      "./cy.js": "3c81",
      "./da": "19fc",
      "./da.js": "19fc",
      "./de": "3e1f",
      "./de-at": "e906",
      "./de-at.js": "e906",
      "./de-ch": "ba39",
      "./de-ch.js": "ba39",
      "./de.js": "3e1f",
      "./dv": "0bf7",
      "./dv.js": "0bf7",
      "./el": "af2d",
      "./el.js": "af2d",
      "./en-au": "86af",
      "./en-au.js": "86af",
      "./en-ca": "3efa",
      "./en-ca.js": "3efa",
      "./en-gb": "8872",
      "./en-gb.js": "8872",
      "./en-ie": "0e1f",
      "./en-ie.js": "0e1f",
      "./en-il": "68fe",
      "./en-il.js": "68fe",
      "./en-in": "b30d",
      "./en-in.js": "b30d",
      "./en-nz": "cc44",
      "./en-nz.js": "cc44",
      "./en-sg": "c648",
      "./en-sg.js": "c648",
      "./eo": "5010",
      "./eo.js": "5010",
      "./es": "bf9d",
      "./es-do": "4d70",
      "./es-do.js": "4d70",
      "./es-mx": "d186",
      "./es-mx.js": "d186",
      "./es-us": "e155",
      "./es-us.js": "e155",
      "./es.js": "bf9d",
      "./et": "04bf",
      "./et.js": "04bf",
      "./eu": "6f54",
      "./eu.js": "6f54",
      "./fa": "e3b7",
      "./fa.js": "e3b7",
      "./fi": "b9e6",
      "./fi.js": "b9e6",
      "./fil": "3c51",
      "./fil.js": "3c51",
      "./fo": "8b22",
      "./fo.js": "8b22",
      "./fr": "bdb4",
      "./fr-ca": "33b67",
      "./fr-ca.js": "33b67",
      "./fr-ch": "11db",
      "./fr-ch.js": "11db",
      "./fr.js": "bdb4",
      "./fy": "fc65",
      "./fy.js": "fc65",
      "./ga": "8bb6",
      "./ga.js": "8bb6",
      "./gd": "10ef",
      "./gd.js": "10ef",
      "./gl": "cda2",
      "./gl.js": "cda2",
      "./gom-deva": "f77e",
      "./gom-deva.js": "f77e",
      "./gom-latn": "507e",
      "./gom-latn.js": "507e",
      "./gu": "0915",
      "./gu.js": "0915",
      "./he": "a88e",
      "./he.js": "a88e",
      "./hi": "e9b4",
      "./hi.js": "e9b4",
      "./hr": "4169",
      "./hr.js": "4169",
      "./hu": "62b6",
      "./hu.js": "62b6",
      "./hy-am": "f742",
      "./hy-am.js": "f742",
      "./id": "37f2",
      "./id.js": "37f2",
      "./is": "a168",
      "./is.js": "a168",
      "./it": "dff9",
      "./it-ch": "e9a0",
      "./it-ch.js": "e9a0",
      "./it.js": "dff9",
      "./ja": "a936",
      "./ja.js": "a936",
      "./jv": "6fef",
      "./jv.js": "6fef",
      "./ka": "f863",
      "./ka.js": "f863",
      "./kk": "f5bf",
      "./kk.js": "f5bf",
      "./km": "10cd",
      "./km.js": "10cd",
      "./kn": "7904",
      "./kn.js": "7904",
      "./ko": "58c2",
      "./ko.js": "58c2",
      "./ku": "8596",
      "./ku.js": "8596",
      "./ky": "88ec",
      "./ky.js": "88ec",
      "./lb": "66ca",
      "./lb.js": "66ca",
      "./lo": "217c",
      "./lo.js": "217c",
      "./lt": "9fff",
      "./lt.js": "9fff",
      "./lv": "4471",
      "./lv.js": "4471",
      "./me": "89b3",
      "./me.js": "89b3",
      "./mi": "a3c5",
      "./mi.js": "a3c5",
      "./mk": "a3a3",
      "./mk.js": "a3a3",
      "./ml": "b5db",
      "./ml.js": "b5db",
      "./mn": "78c0",
      "./mn.js": "78c0",
      "./mr": "3ceb",
      "./mr.js": "3ceb",
      "./ms": "fcf1",
      "./ms-my": "ff1c",
      "./ms-my.js": "ff1c",
      "./ms.js": "fcf1",
      "./mt": "d833",
      "./mt.js": "d833",
      "./my": "6726",
      "./my.js": "6726",
      "./nb": "78d6",
      "./nb.js": "78d6",
      "./ne": "faec",
      "./ne.js": "faec",
      "./nl": "553f",
      "./nl-be": "6ea6",
      "./nl-be.js": "6ea6",
      "./nl.js": "553f",
      "./nn": "abd5",
      "./nn.js": "abd5",
      "./oc-lnc": "01b7",
      "./oc-lnc.js": "01b7",
      "./pa-in": "d597",
      "./pa-in.js": "d597",
      "./pl": "7d7e",
      "./pl.js": "7d7e",
      "./pt": "9c23",
      "./pt-br": "ef03",
      "./pt-br.js": "ef03",
      "./pt.js": "9c23",
      "./ro": "241a",
      "./ro.js": "241a",
      "./ru": "385d",
      "./ru.js": "385d",
      "./sd": "887a",
      "./sd.js": "887a",
      "./se": "4c3f",
      "./se.js": "4c3f",
      "./si": "321f",
      "./si.js": "321f",
      "./sk": "ef5e",
      "./sk.js": "ef5e",
      "./sl": "7d79",
      "./sl.js": "7d79",
      "./sq": "512a",
      "./sq.js": "512a",
      "./sr": "b77f",
      "./sr-cyrl": "183a",
      "./sr-cyrl.js": "183a",
      "./sr.js": "b77f",
      "./ss": "afd8",
      "./ss.js": "afd8",
      "./sv": "446b",
      "./sv.js": "446b",
      "./sw": "91bd",
      "./sw.js": "91bd",
      "./ta": "06a6",
      "./ta.js": "06a6",
      "./te": "7ca0",
      "./te.js": "7ca0",
      "./tet": "0dba",
      "./tet.js": "0dba",
      "./tg": "a3d5",
      "./tg.js": "a3d5",
      "./th": "94cc",
      "./th.js": "94cc",
      "./tk": "e77c",
      "./tk.js": "e77c",
      "./tl-ph": "ef21",
      "./tl-ph.js": "ef21",
      "./tlh": "a3bd",
      "./tlh.js": "a3bd",
      "./tr": "03a9",
      "./tr.js": "03a9",
      "./tzl": "61ea",
      "./tzl.js": "61ea",
      "./tzm": "4e58",
      "./tzm-latn": "1029",
      "./tzm-latn.js": "1029",
      "./tzm.js": "4e58",
      "./ug-cn": "625d",
      "./ug-cn.js": "625d",
      "./uk": "8afb",
      "./uk.js": "8afb",
      "./ur": "d2d4",
      "./ur.js": "d2d4",
      "./uz": "ccc0",
      "./uz-latn": "a5c6c",
      "./uz-latn.js": "a5c6c",
      "./uz.js": "ccc0",
      "./vi": "9515",
      "./vi.js": "9515",
      "./x-pseudo": "b3b3",
      "./x-pseudo.js": "b3b3",
      "./yo": "891e",
      "./yo.js": "891e",
      "./zh-cn": "7be1",
      "./zh-cn.js": "7be1",
      "./zh-hk": "59ef",
      "./zh-hk.js": "59ef",
      "./zh-mo": "a437",
      "./zh-mo.js": "a437",
      "./zh-tw": "d7f4",
      "./zh-tw.js": "d7f4"
    };
    function a(e) {
      var n = i(e);
      return o(n);
    }
    function i(e) {
      if (!o.o(t, e)) {
        var n = new Error("Cannot find module '" + e + "'");
        throw n.code = "MODULE_NOT_FOUND", n;
      }
      return t[e];
    }
    a.keys = function () {
      return Object.keys(t);
    }, a.resolve = i, e.exports = a, a.id = "9225";
  },
  9527: function (e, n, o) {
    "use strict";

    o("6a54"), Object.defineProperty(n, "__esModule", {
      value: !0
    }), n.default = void 0;
    n.default = {
      newsClick: {
        event: "newsClick",
        title: "\u8D44\u8BAF\u6D4F\u89C8",
        action: "click"
      },
      newsShare: {
        event: "newsShare",
        title: "\u8D44\u8BAF\u5206\u4EAB",
        action: "share"
      },
      newsLike: {
        event: "newsLike",
        title: "\u8D44\u8BAF\u70B9\u8D5E",
        action: "like"
      },
      newsCollection: {
        event: "newsCollection",
        title: "\u8D44\u8BAF\u6536\u85CF",
        action: "collection"
      },
      newsComment: {
        event: "newsComment",
        title: "\u8D44\u8BAF\u8BC4\u8BBA",
        action: "comment"
      },
      voteClick: {
        event: "voteClick",
        title: "\u6295\u7968\u6D4F\u89C8",
        action: "click"
      },
      voteShare: {
        event: "voteShare",
        title: "\u6295\u7968\u5206\u4EAB",
        action: "share"
      },
      voteTake: {
        event: "voteTake",
        title: "\u6295\u7968\u63D0\u4EA4",
        action: "take"
      },
      lotteryClick: {
        event: "lotteryClick",
        title: "\u62BD\u5956\u6D4F\u89C8",
        action: "click"
      },
      lotteryShare: {
        event: "lotteryShare",
        title: "\u62BD\u5956\u5206\u4EAB",
        action: "share"
      },
      lotteryTake: {
        event: "lotteryTake",
        title: "\u62BD\u5956\u63D0\u4EA4",
        action: "take"
      },
      formClick: {
        event: "formClick",
        title: "\u62A5\u540D\u6D4F\u89C8",
        action: "click"
      },
      formShare: {
        event: "formShare",
        title: "\u62A5\u540D\u5206\u4EAB",
        action: "share"
      },
      formTake: {
        event: "formTake",
        title: "\u62A5\u540D\u63D0\u4EA4",
        action: "take"
      },
      answerClick: {
        event: "answerClick",
        title: "\u7B54\u9898\u6D4F\u89C8",
        action: "click"
      },
      answerShare: {
        event: "answerShare",
        title: "\u7B54\u9898\u5206\u4EAB",
        action: "share"
      },
      answerTake: {
        event: "answerTake",
        title: "\u7B54\u9898\u63D0\u4EA4",
        action: "take"
      },
      userLogin: {
        event: "userLogin",
        title: "\u4F1A\u5458\u767B\u5F55",
        action: "login"
      },
      newsReadTime: {
        event: "newsReadTime",
        title: "\u8D44\u8BAF\u9605\u8BFB\u65F6\u957F",
        action: "readtime"
      },
      stayTime: {
        event: "stayTime",
        title: "\u505C\u7559\u65F6\u957F",
        action: "staytime"
      },
      mallBuy: {
        event: "mallBuy",
        title: "\u4E0B\u5355",
        action: "take"
      },
      mallClick: {
        event: "mallClick",
        title: "\u5546\u54C1\u6D4F\u89C8",
        action: "click"
      },
      mallShare: {
        event: "mallShare",
        title: "\u5546\u54C1\u5206\u4EAB",
        action: "share"
      },
      mallHomeClick: {
        event: "mallHomeClick",
        title: "\u5546\u57CE\u9996\u9875\u6D4F\u89C8",
        action: "click"
      },
      signinClick: {
        event: "signinClick",
        title: "\u7B7E\u5230\u6D4F\u89C8",
        action: "click"
      },
      signinTake: {
        event: "signinTake",
        title: "\u7B7E\u5230\u63D0\u4EA4",
        action: "take"
      },
      launchShow: {
        event: "launchShow",
        title: "\u6295\u653E\u663E\u793A",
        action: "show"
      },
      launchClick: {
        event: "launchClick",
        title: "\u6295\u653E\u70B9\u51FB",
        action: "click"
      },
      supertopicClick: {
        event: "supertopicClick",
        title: "\u8D85\u8BDD\u6D3B\u52A8\u6D4F\u89C8",
        action: "click"
      },
      supertopicComment: {
        event: "supertopicComment",
        title: "\u8D85\u8BDD\u8BC4\u8BBA",
        action: "comemnt"
      },
      supertopicCommentLike: {
        event: "supertopicCommentLike",
        title: "\u8D85\u8BDD\u8BC4\u8BBA\u70B9\u8D5E",
        action: "like"
      },
      helpClick: {
        event: "helpClick",
        title: "\u52A9\u529B\u6D4F\u89C8",
        action: "click"
      },
      helpShare: {
        event: "helpShare",
        title: "\u52A9\u529B\u5206\u4EAB",
        action: "share"
      },
      helpTake: {
        event: "helpTake",
        title: "\u52A9\u529B\u63D0\u4EA4",
        action: "take"
      },
      checkersClick: {
        event: "checkersClick",
        title: "\u8DF3\u68CB\u6D4F\u89C8",
        action: "click"
      },
      checkersShare: {
        event: "checkersShare",
        title: "\u8DF3\u68CB\u5206\u4EAB",
        action: "share"
      },
      poetryClick: {
        event: "poetryClick",
        title: "\u8BD7\u8BCD\u6D4F\u89C8",
        action: "click"
      },
      poetryShare: {
        event: "poetryShare",
        title: "\u8BD7\u8BCD\u5206\u4EAB",
        action: "share"
      },
      poetryTake: {
        event: "poetryTake",
        title: "\u8BD7\u8BCD\u63D0\u4EA4",
        action: "take"
      },
      liveClick: {
        event: "liveClick",
        title: "\u76F4\u64AD\u6D4F\u89C8",
        action: "click"
      },
      liveShare: {
        event: "liveShare",
        title: "\u76F4\u64AD\u5206\u4EAB",
        action: "share"
      },
      inviteClick: {
        event: "inviteClick",
        title: "\u9080\u8BF7\u6D4F\u89C8",
        action: "click"
      },
      inviteShare: {
        event: "inviteShare",
        title: "\u9080\u8BF7\u5206\u4EAB",
        action: "share"
      },
      footmarkClick: {
        event: "footmarkClick",
        title: "\u5B66\u4E60\u8DB3\u8FF9\u6D4F\u89C8",
        action: "click"
      },
      footmarkShare: {
        event: "footmarkShare",
        title: "\u5B66\u4E60\u8DB3\u8FF9\u5206\u4EAB",
        action: "share"
      },
      wishClick: {
        event: "wishClick",
        title: "\u795D\u798F\u6D4F\u89C8",
        action: "click"
      },
      wishShare: {
        event: "wishShare",
        title: "\u795D\u798F\u5206\u4EAB",
        action: "share"
      },
      clockinClick: {
        event: "clockinClick",
        title: "\u6253\u5361\u6D4F\u89C8",
        action: "click"
      },
      clockinShare: {
        event: "clockinShare",
        title: "\u6253\u5361\u5206\u4EAB",
        action: "share"
      },
      guessClick: {
        event: "guessClick",
        title: "\u7ADE\u731C\u6D4F\u89C8",
        action: "click"
      },
      guessShare: {
        event: "guessShare",
        title: "\u7ADE\u731C\u5206\u4EAB",
        action: "share"
      },
      ecnyformClick: {
        event: "ecnyformClick",
        title: "\u6570\u5B57\u5E01\u62A5\u540D\u6D4F\u89C8",
        action: "click"
      },
      ecnyformShare: {
        event: "ecnyformShare",
        title: "\u6570\u5B57\u5E01\u62A5\u540D\u5206\u4EAB",
        action: "share"
      },
      ecnyformTake: {
        event: "ecnyformTake",
        title: "\u6570\u5B57\u5E01\u62A5\u540D\u63D0\u4EA4",
        action: "take"
      },
      screeninteractClick: {
        event: "screeninteractClick",
        title: "\u5927\u5C4F\u4E92\u52A8\u6D4F\u89C8",
        action: "click"
      },
      screeninteractShare: {
        event: "screeninteractShare",
        title: "\u5927\u5C4F\u4E92\u52A8\u5206\u4EAB",
        action: "share"
      },
      screeninteractTake: {
        event: "screeninteractTake",
        title: "\u5927\u5C4F\u4E92\u52A8\u63D0\u4EA4",
        action: "take"
      },
      farmClick: {
        event: "farmClick",
        title: "\u519C\u573A\u6D4F\u89C8",
        action: "click"
      },
      farmKindsClick: {
        event: "farmKindsClick",
        title: "\u7267\u573A\u6D4F\u89C8",
        action: "click"
      },
      cashoutClick: {
        event: "cashoutClick",
        title: "\u63D0\u73B0\u9875\u9762\u6D4F\u89C8",
        action: "click"
      },
      cashoutTake: {
        event: "cashoutTake",
        title: "\u63D0\u73B0\u63D0\u4EA4\u7533\u8BF7",
        action: "take"
      },
      wordClick: {
        event: "wordClick",
        title: "\u627E\u5B57\u6E38\u620F\u9875\u9762\u6D4F\u89C8",
        action: "click"
      },
      wordTake: {
        event: "wordTake",
        title: "\u627E\u5B57\u6E38\u620F\u63D0\u4EA4",
        action: "take"
      },
      dilateClick: {
        event: "dilateClick",
        title: "\u81A8\u80C0\u6D4F\u89C8",
        action: "click"
      },
      dilateTake: {
        event: "dilateTake",
        title: "\u81A8\u80C0\u9080\u8BF7",
        action: "take"
      },
      articletaskClick: {
        event: "articletaskClick",
        title: "\u8D44\u8BAF\u4E92\u52A8\u6D4F\u89C8",
        action: "click"
      },
      clockinTake: {
        event: "clockinTake",
        title: "\u6253\u5361\u5708\u63D0\u4EA4",
        action: "take"
      },
      venueClockinClick: {
        event: "venueClockinClick",
        title: "\u573A\u9986\u6253\u5361\u6D4F\u89C8",
        action: "click"
      },
      venueClockinTake: {
        event: "venueClockinTake",
        title: "\u573A\u9986\u6253\u5361\u63D0\u4EA4",
        action: "take"
      },
      couponCenterClick: {
        event: "couponCenterClick",
        title: "\u9886\u5238\u4E2D\u5FC3\u6D4F\u89C8",
        action: "click"
      },
      queryClick: {
        event: "queryClick",
        title: "\u67E5\u8BE2\u6D4F\u89C8",
        action: "click"
      },
      queryTake: {
        event: "queryTake",
        title: "\u67E5\u8BE2\u63D0\u4EA4",
        action: "take"
      },
      collectCardClick: {
        event: "collectCardClick",
        title: "\u96C6\u5361\u6D4F\u89C8",
        action: "click"
      },
      collectCardTake: {
        event: "collectCardTake",
        title: "\u96C6\u5361\u62BD\u5361\u63D0\u4EA4",
        action: "take"
      },
      whippedEggsClick: {
        event: "whippedEggsClick",
        title: "\u63BC\u86CB\u6D4F\u89C8",
        action: "click"
      },
      whippedEggsTake: {
        event: "whippedEggsTake",
        title: "\u63BC\u86CB\u6E38\u620F\u8FDB\u5165",
        action: "take"
      },
      guanDanClick: {
        event: "guanDanClick",
        title: "\u63BC\u86CB\u6D4F\u89C8",
        action: "click"
      },
      schoolClick: {
        event: "schoolClick",
        title: "\u5B66\u6821\u6D4F\u89C8",
        action: "click"
      },
      disciplineClick: {
        event: "disciplineClick",
        title: "\u5B66\u79D1\u6D4F\u89C8",
        action: "click"
      },
      bookingLotteryClick: {
        event: "bookingLotteryClick",
        title: "\u9884\u7EA6\u62BD\u5956\u6D4F\u89C8",
        action: "click"
      },
      bookingLotteryTake: {
        event: "bookingLotteryTake",
        title: "\u9884\u7EA6\u62BD\u5956\u9884\u7EA6",
        action: "take"
      },
      stepsportClick: {
        event: "stepsportClick",
        title: "\u6B65\u6570\u6253\u5361\u6D4F\u89C8",
        action: "click"
      },
      stepsportShare: {
        event: "stepsportShare",
        title: "\u6B65\u6570\u6253\u5361\u5206\u4EAB",
        action: "share"
      },
      smallGameClick: {
        event: "smallGameClick",
        title: "\u5C0F\u6E38\u620F\u9875\u9762\u6D4F\u89C8",
        action: "click"
      },
      smallGameTake: {
        event: "smallGameTake",
        title: "\u5C0F\u6E38\u620F\u63D0\u4EA4",
        action: "take"
      }
    };
  },
  "9cf4": function (e, n, o) {
    "use strict";

    (function (e) {
      var t = o("f5bd").default;
      Object.defineProperty(n, "__esModule", {
        value: !0
      }), n.default = void 0, o("01a2"), o("e39c"), o("bf0f"), o("844d"), o("18f7"), o("de6c"), o("6a54"), o("7a76"), o("c9b5"), o("f7a5"), o("08eb"), o("5c47"), o("0506"), o("23f4"), o("7d2f"), o("9c4e"), o("ab80"), o("2c10"), o("af8f"), o("5ef2"), o("22b6"), o("d4b5"), o("aa9c"), o("b229");
      var a = t(o("1d0e"));
      function i(e) {
        return "function" === typeof Symbol && "symbol" === typeof Symbol.iterator ? function (e) {
          return typeof e;
        } : function (e) {
          return e && "function" === typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e;
        }, i(e);
      }
      function r(e, n, o) {
        return n in e ? Object.defineProperty(e, n, {
          value: o,
          enumerable: !0,
          configurable: !0,
          writable: !0
        }) : e[n] = o, e;
      }
      function u(e) {
        return function (e) {
          if (Array.isArray(e)) return l(e);
        }(e) || function (e) {
          if ("undefined" !== typeof Symbol && Symbol.iterator in Object(e)) return Array.from(e);
        }(e) || function (e, n) {
          if (!e) return;
          if ("string" === typeof e) return l(e, n);
          var o = Object.prototype.toString.call(e).slice(8, -1);
          "Object" === o && e.constructor && (o = e.constructor.name);
          if ("Map" === o || "Set" === o) return Array.from(e);
          if ("Arguments" === o || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(o)) return l(e, n);
        }(e) || function () {
          throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
        }();
      }
      function l(e, n) {
        (null == n || n > e.length) && (n = e.length);
        for (var o = 0, t = new Array(n); o < n; o++) t[o] = e[o];
        return t;
      }
      function s(e) {
        var n = new RegExp("(^|&)" + e + "=([^&]*)(&|$)", "i"),
          o = window.location.search.substr(1).match(n);
        return null != o && 0 !== o[2] && unescape(o[2]);
      }
      function m() {
        var e = navigator.userAgent,
          n = e.indexOf("dknbandroid"),
          o = e.indexOf("dknbios");
        return o >= 0 ? 1 : n >= 0 ? 2 : 0;
      }
      function d(e, n) {
        n = n || null;
        var o = setTimeout(function () {
          if (function () {
            var e = navigator.userAgent,
              n = e.indexOf("njios");
            return n >= 0;
          }()) window.webkit.messageHandlers[e].postMessage(n);else if (n) {
            var t,
              a = Object.values(n);
            (t = native)[e].apply(t, u(a));
          } else native[e]();
          clearTimeout(o);
        }, 0);
      }
      var c = {
        getUrlParam: s,
        thirdLogin: function (e, n, o, t) {
          var i = Math.round(Date.now() / 1000),
            r = 9999 * Math.random();
          return new Promise(function (u, l) {
            $.ajax({
              type: "POST",
              url: "https://third.nj.nbtv.cn/v2/open/user/get",
              data: {
                access_token: o,
                host: t,
                timestamp: i
              },
              headers: {
                appkey: e,
                nonce: r,
                curtime: i,
                checksum: a.default.SHA1(n + r + i)
              },
              dataType: "json",
              success: function (e) {
                u(e);
              }
            });
          });
        },
        dkWeboauth: function (n) {
          var o = m();
          1 == o ? d("dkWeboauth", {
            url: n
          }) : 2 == o ? android.dkWeboauth(n) : e.log("dkWeboauth");
        },
        checkUserAgent: m,
        dkLogin: function (e, n) {
          e = void 0 == arguments[0] ? "" : e, n = void 0 == arguments[1] ? "1" : n;
          var o = m();
          1 == o ? d("dkLogin", r({
            url: e,
            type: n
          }, "type", n)) : 2 == o && android.dkLogin(e, n);
        },
        dkShare: function (e, n) {
          n = void 0 == arguments[1] ? 0 : n;
          var o = m();
          1 == o ? d("dkShare", r({
            info: e,
            type: n
          }, "type", n)) : 2 == o && android.dkShare(JSON.stringify(e), n);
        },
        dkAccessToken: function (e) {
          var n = m();
          1 == n ? d("dkAccessToken", {
            callback: e
          }) : 2 == n && android.dkAccessToken(e);
        }
      };
      n.default = c;
    }).call(this, o("ba7c")["default"]);
  },
  aa40: function (e, n, o) {
    "use strict";

    (function (e) {
      o("6a54");
      var t = o("f5bd").default;
      Object.defineProperty(n, "__esModule", {
        value: !0
      }), n.default = void 0;
      var a = t(o("9b1b")),
        i = t(o("2634")),
        r = t(o("2fdc"));
      o("bf0f"), o("5c47"), o("af8f"), o("e966"), o("a1c1");
      var u = t(o("2cfc")),
        l = !1,
        s = "";
      (function () {
        var n = navigator.userAgent.toLowerCase(),
          o = u.default.thirdPlatforms.tianmu.apps.some(function (e) {
            return -1 != n.search(e) && (s = e, l = !0, !0);
          });
        if (o) {
          var t = document.createElement("script");
          t.async = "async", t.src = "https://cdn-cp.tmuyun.com/jssdk/v1/zjrb-cp.v1.min.js", document.body.appendChild(t), t.onload = function () {
            CP && "function" === typeof CP.ready && CP.ready({
              debug: !1,
              es6Require: !1,
              ready: function (n) {
                e.log("======tianmu_client_info==========="), e.log(n), e.log("======tianmu_client_info==========="), n && n.is_client && parseInt(n.is_client) && (l = !0);
              },
              error: function (e) {}
            });
          };
        }
      })();
      var m = {
          isInApp: function () {
            return l;
          },
          getSystemInfo: function (e) {},
          getUserInfo: function (e) {
            if (CP) {
              var n = this;
              CP.getCustomerInfo({
                completed: function () {
                  var o = (0, r.default)((0, i.default)().mark(function o(t) {
                    var a, r;
                    return (0, i.default)().wrap(function (o) {
                      while (1) switch (o.prev = o.next) {
                        case 0:
                          if (!t || !t.account_id || "-1" == t.account_id) {
                            o.next = 8;
                            break;
                          }
                          return o.next = 3, n.getUniqueId();
                        case 3:
                          a = o.sent, r = {
                            user_id: t.account_id || "",
                            user_name: t.nick_name || "",
                            portrait_url: t.head_img || "",
                            phone: t.mobile || "",
                            wx_openid: "",
                            wx_unionid: "",
                            app_user_token: a
                          }, e && e(r), o.next = 9;
                          break;
                        case 8:
                          e && e(!1);
                        case 9:
                        case "end":
                          return o.stop();
                      }
                    }, o);
                  }));
                  return function (e) {
                    return o.apply(this, arguments);
                  };
                }(),
                cpIncompatible: function (n) {
                  e && e(!1);
                }
              });
            } else e && e(!1);
          },
          getUniqueId: function () {
            return (0, r.default)((0, i.default)().mark(function e() {
              return (0, i.default)().wrap(function (e) {
                while (1) switch (e.prev = e.next) {
                  case 0:
                    if (CP) {
                      e.next = 2;
                      break;
                    }
                    return e.abrupt("return", "");
                  case 2:
                    return e.abrupt("return", new Promise(function (e) {
                      CP.getUniqueId({
                        completed: function (n) {
                          n && n.unique_id ? e(n.unique_id) : e("");
                        },
                        cpIncompatible: function () {
                          e("");
                        }
                      });
                    }));
                  case 3:
                  case "end":
                    return e.stop();
                }
              }, e);
            }))();
          },
          getLocation: function (e) {
            var n = {
              latitude: 0,
              longitude: 0
            };
            CP ? CP.getLocationInfo({
              completed: function (o) {
                n.latitude = o.lat || 0, n.longitude = o.lon || 0, n = (0, a.default)((0, a.default)({}, n), o), e && e(n);
              },
              cpIncompatible: function (o) {
                e && e(n);
              }
            }) : e && e(n);
          },
          shareTo: function () {
            var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {};
            CP && CP.setShare({
              completed: function (e) {
                CP.tools.writelog("set_share", e);
              },
              cpIncompatible: function () {
                CP.tools.writelog("", "\u6B64\u73AF\u5883\u4E0D\u652F\u6301\u6B64\u65B9\u6CD5");
              },
              title: e.title || "",
              shareTo: "Timeline",
              link: e.link_url || "",
              imgUrl: e.indexpic || "",
              shareSummary: e.brief || ""
            });
          },
          goToLoginPage: function () {
            CP && CP.showLogin({
              completed: function (e) {
                window.location.reload();
              },
              cpIncompatible: function () {
                CP.tools.writelog("", "\u6B64\u73AF\u5883\u4E0D\u652F\u6301\u6B64\u65B9\u6CD5");
              }
            });
          },
          goToBindPage: function () {},
          saveImage: function () {},
          linkTo: function () {},
          jumpToNews: function () {
            var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : "";
            if (e) {
              var n = e.split("#"),
                o = "news",
                t = 0;
              n[0] && (t = n[0]), n[1] && (o = n[1]);
              var a = u.default.thirdPlatforms.tianmu.newsDetailPage.replace("{page_type}", o),
                i = u.default.thirdPlatforms.tianmu.sharePageDomains.default;
              u.default.thirdPlatforms.tianmu.sharePageDomains[s] && (i = u.default.thirdPlatforms.tianmu.sharePageDomains[s]), a = i + a;
              var r = a + t + "&tenantId=" + u.default.thirdPlatforms.tianmu.tenantIds[s];
              window.location.href = r;
            }
          },
          goUcenter: function () {},
          playAudio: function () {
            CP;
          },
          showShare: function () {
            var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {};
            CP && CP.showShare({
              completed: function (e) {
                CP.tools.writelog("show_share", e);
              },
              cpIncompatible: function () {
                CP.tools.writelog("", "\u6B64\u73AF\u5883\u4E0D\u652F\u6301\u6B64\u65B9\u6CD5");
              },
              title: e.title || "",
              shareTo: "Timeline",
              link: e.link_url || "",
              imgUrl: e.indexpic || "",
              shareSummary: e.brief || ""
            });
          },
          chooseImage: function () {
            var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 9,
              n = arguments.length > 1 ? arguments[1] : void 0;
            CP && CP.selectMedia({
              once: !0,
              completed: function (e) {
                n && n(e);
              },
              cpIncompatible: function () {
                CP.tools.writelog("", "\u6B64\u73AF\u5883\u4E0D\u652F\u6301\u6B64\u65B9\u6CD5");
              },
              size: "10240",
              count: e > 9 ? 9 : e,
              type: "image"
            });
          },
          openpaper: function () {}
        },
        d = m;
      n.default = d;
    }).call(this, o("ba7c")["default"]);
  },
  b229: function (e, n, o) {
    var t = o("bdbb").default;
    o("0c26"), o("5c47"), o("a1c1"), o("473f"), o("bf0f"), o("7a76"), o("c9b5"), o("c223"), o("23f4"), o("7d2f"), o("9c4e"), o("ab80"), o("fd3c"), o("8f71"), o("64aa"), o("0506"), o("f7a5"), o("5ef2"), o("aa77"), o("2797"), o("aa9c"), o("4100"), o("dfcf"), o("e838"), o("2c10"), function (e) {
      String.prototype.trim === e && (String.prototype.trim = function () {
        return this.replace(/^\s+|\s+$/g, "");
      }), Array.prototype.reduce === e && (Array.prototype.reduce = function (n) {
        if (void 0 === this || null === this) throw new TypeError();
        var o,
          t = Object(this),
          a = t.length >>> 0,
          i = 0;
        if ("function" != typeof n) throw new TypeError();
        if (0 == a && 1 == arguments.length) throw new TypeError();
        if (arguments.length >= 2) o = arguments[1];else for (;;) {
          if (i in t) {
            o = t[i++];
            break;
          }
          if (++i >= a) throw new TypeError();
        }
        for (; a > i;) i in t && (o = n.call(e, o, t[i], i, t)), i++;
        return o;
      });
    }();
    var a = function () {
      function e(e) {
        return null == e ? String(e) : H[J.call(e)] || "object";
      }
      function n(n) {
        return "function" == e(n);
      }
      function o(e) {
        return null != e && e == e.window;
      }
      function a(e) {
        return null != e && e.nodeType == e.DOCUMENT_NODE;
      }
      function i(n) {
        return "object" == e(n);
      }
      function r(e) {
        return i(e) && !o(e) && e.__proto__ == Object.prototype;
      }
      function u(e) {
        return e instanceof Array;
      }
      function l(e) {
        return "number" == typeof e.length;
      }
      function s(e) {
        return e.replace(/::/g, "/").replace(/([A-Z]+)([A-Z][a-z])/g, "$1_$2").replace(/([a-z\d])([A-Z])/g, "$1_$2").replace(/_/g, "-").toLowerCase();
      }
      function m(e) {
        return e in I ? I[e] : I[e] = new RegExp("(^|\\s)" + e + "(\\s|$)");
      }
      function d(e, n) {
        return "number" != typeof n || j[s(e)] ? n : n + "px";
      }
      function c(e) {
        return "children" in e ? x.call(e.children) : k.map(e.childNodes, function (e) {
          return 1 == e.nodeType ? e : void 0;
        });
      }
      function g(e, n, o) {
        for (v in n) o && (r(n[v]) || u(n[v])) ? (r(n[v]) && !r(e[v]) && (e[v] = {}), u(n[v]) && !u(e[v]) && (e[v] = []), g(e[v], n[v], o)) : n[v] !== b && (e[v] = n[v]);
      }
      function f(e, n) {
        return n === b ? k(e) : k(e).filter(n);
      }
      function p(e, o, t, a) {
        return n(o) ? o.call(e, t, a) : o;
      }
      function h(e, n, o) {
        null == o ? e.removeAttribute(n) : e.setAttribute(n, o);
      }
      function y(e, n) {
        var o = e.className,
          t = o && o.baseVal !== b;
        return n === b ? t ? o.baseVal : o : void (t ? o.baseVal = n : e.className = n);
      }
      function _(e) {
        var n;
        try {
          return e ? "true" == e || "false" != e && ("null" == e ? null : isNaN(n = Number(e)) ? /^[\[\{]/.test(e) ? k.parseJSON(e) : e : n) : e;
        } catch (o) {
          return e;
        }
      }
      function w(e, n) {
        for (var o in n(e), e.childNodes) w(e.childNodes[o], n);
      }
      var b,
        v,
        k,
        C,
        S,
        P,
        T = [],
        x = T.slice,
        A = T.filter,
        q = window.document,
        L = {},
        I = {},
        O = q.defaultView.getComputedStyle,
        j = {
          "column-count": 1,
          columns: 1,
          "font-weight": 1,
          "line-height": 1,
          opacity: 1,
          "z-index": 1,
          zoom: 1
        },
        D = /^\s*<(\w+|!)[^>]*>/,
        B = /<(?!area|br|col|embed|hr|img|input|link|meta|param)(([\w:]+)[^>]*)\/>/gi,
        N = /^(?:body|html)$/i,
        M = ["val", "css", "html", "text", "data", "width", "height", "offset"],
        E = q.createElement("table"),
        R = q.createElement("tr"),
        W = {
          tr: q.createElement("tbody"),
          tbody: E,
          thead: E,
          tfoot: E,
          td: R,
          th: R,
          "*": q.createElement("div")
        },
        U = /complete|loaded|interactive/,
        V = /^\.([\w-]+)$/,
        F = /^#([\w-]*)$/,
        z = /^[\w-]+$/,
        H = {},
        J = H.toString,
        K = {},
        G = q.createElement("div");
      return K.matches = function (e, n) {
        if (!e || 1 !== e.nodeType) return !1;
        var o = e.webkitMatchesSelector || e.mozMatchesSelector || e.oMatchesSelector || e.matchesSelector;
        if (o) return o.call(e, n);
        var t,
          a = e.parentNode,
          i = !a;
        return i && (a = G).appendChild(e), t = ~K.qsa(a, n).indexOf(e), i && G.removeChild(e), t;
      }, S = function (e) {
        return e.replace(/-+(.)?/g, function (e, n) {
          return n ? n.toUpperCase() : "";
        });
      }, P = function (e) {
        return A.call(e, function (n, o) {
          return e.indexOf(n) == o;
        });
      }, K.fragment = function (e, n, o) {
        e.replace && (e = e.replace(B, "<$1></$2>")), n === b && (n = D.test(e) && RegExp.$1), n in W || (n = "*");
        var t,
          a,
          i = W[n];
        return i.innerHTML = "" + e, a = k.each(x.call(i.childNodes), function () {
          i.removeChild(this);
        }), r(o) && (t = k(a), k.each(o, function (e, n) {
          M.indexOf(e) > -1 ? t[e](n) : t.attr(e, n);
        })), a;
      }, K.Z = function (e, n) {
        return e = e || [], e.__proto__ = k.fn, e.selector = n || "", e;
      }, K.isZ = function (e) {
        return e instanceof K.Z;
      }, K.init = function (e, o) {
        if (e) {
          if (n(e)) return k(q).ready(e);
          if (K.isZ(e)) return e;
          var t;
          if (u(e)) t = function (e) {
            return A.call(e, function (e) {
              return null != e;
            });
          }(e);else if (i(e)) t = [r(e) ? k.extend({}, e) : e], e = null;else if (D.test(e)) t = K.fragment(e.trim(), RegExp.$1, o), e = null;else {
            if (o !== b) return k(o).find(e);
            t = K.qsa(q, e);
          }
          return K.Z(t, e);
        }
        return K.Z();
      }, k = function (e, n) {
        return K.init(e, n);
      }, k.extend = function (e) {
        var n,
          o = x.call(arguments, 1);
        return "boolean" == typeof e && (n = e, e = o.shift()), o.forEach(function (o) {
          g(e, o, n);
        }), e;
      }, K.qsa = function (e, n) {
        var o;
        return a(e) && F.test(n) ? (o = e.getElementById(RegExp.$1)) ? [o] : [] : 1 !== e.nodeType && 9 !== e.nodeType ? [] : x.call(V.test(n) ? e.getElementsByClassName(RegExp.$1) : z.test(n) ? e.getElementsByTagName(n) : e.querySelectorAll(n));
      }, k.contains = function (e, n) {
        return e !== n && e.contains(n);
      }, k.type = e, k.isFunction = n, k.isWindow = o, k.isArray = u, k.isPlainObject = r, k.isEmptyObject = function (e) {
        var n;
        for (n in e) return !1;
        return !0;
      }, k.inArray = function (e, n, o) {
        return T.indexOf.call(n, e, o);
      }, k.camelCase = S, k.trim = function (e) {
        return e.trim();
      }, k.uuid = 0, k.support = {}, k.expr = {}, k.map = function (e, n) {
        var o,
          t,
          a,
          i = [];
        if (l(e)) for (t = 0; t < e.length; t++) o = n(e[t], t), null != o && i.push(o);else for (a in e) o = n(e[a], a), null != o && i.push(o);
        return function (e) {
          return e.length > 0 ? k.fn.concat.apply([], e) : e;
        }(i);
      }, k.each = function (e, n) {
        var o, t;
        if (l(e)) {
          for (o = 0; o < e.length; o++) if (!1 === n.call(e[o], o, e[o])) return e;
        } else for (t in e) if (!1 === n.call(e[t], t, e[t])) return e;
        return e;
      }, k.grep = function (e, n) {
        return A.call(e, n);
      }, window.JSON && (k.parseJSON = JSON.parse), k.each("Boolean Number String Function Array Date RegExp Object Error".split(" "), function (e, n) {
        H["[object " + n + "]"] = n.toLowerCase();
      }), k.fn = {
        forEach: T.forEach,
        reduce: T.reduce,
        push: T.push,
        sort: T.sort,
        indexOf: T.indexOf,
        concat: T.concat,
        map: function (e) {
          return k(k.map(this, function (n, o) {
            return e.call(n, o, n);
          }));
        },
        slice: function () {
          return k(x.apply(this, arguments));
        },
        ready: function (e) {
          return U.test(q.readyState) ? e(k) : q.addEventListener("DOMContentLoaded", function () {
            e(k);
          }, !1), this;
        },
        get: function (e) {
          return e === b ? x.call(this) : this[e >= 0 ? e : e + this.length];
        },
        toArray: function () {
          return this.get();
        },
        size: function () {
          return this.length;
        },
        remove: function () {
          return this.each(function () {
            null != this.parentNode && this.parentNode.removeChild(this);
          });
        },
        each: function (e) {
          return T.every.call(this, function (n, o) {
            return !1 !== e.call(n, o, n);
          }), this;
        },
        filter: function (e) {
          return n(e) ? this.not(this.not(e)) : k(A.call(this, function (n) {
            return K.matches(n, e);
          }));
        },
        add: function (e, n) {
          return k(P(this.concat(k(e, n))));
        },
        is: function (e) {
          return this.length > 0 && K.matches(this[0], e);
        },
        not: function (e) {
          var o = [];
          if (n(e) && e.call !== b) this.each(function (n) {
            e.call(this, n) || o.push(this);
          });else {
            var t = "string" == typeof e ? this.filter(e) : l(e) && n(e.item) ? x.call(e) : k(e);
            this.forEach(function (e) {
              t.indexOf(e) < 0 && o.push(e);
            });
          }
          return k(o);
        },
        has: function (e) {
          return this.filter(function () {
            return i(e) ? k.contains(this, e) : k(this).find(e).size();
          });
        },
        eq: function (e) {
          return -1 === e ? this.slice(e) : this.slice(e, +e + 1);
        },
        first: function () {
          var e = this[0];
          return e && !i(e) ? e : k(e);
        },
        last: function () {
          var e = this[this.length - 1];
          return e && !i(e) ? e : k(e);
        },
        find: function (e) {
          var n = this;
          return "object" == t(e) ? k(e).filter(function () {
            var e = this;
            return T.some.call(n, function (n) {
              return k.contains(n, e);
            });
          }) : 1 == this.length ? k(K.qsa(this[0], e)) : this.map(function () {
            return K.qsa(this, e);
          });
        },
        closest: function (e, n) {
          var o = this[0],
            i = !1;
          for ("object" == t(e) && (i = k(e)); o && !(i ? i.indexOf(o) >= 0 : K.matches(o, e));) o = o !== n && !a(o) && o.parentNode;
          return k(o);
        },
        parents: function (e) {
          for (var n = [], o = this; o.length > 0;) o = k.map(o, function (e) {
            return (e = e.parentNode) && !a(e) && n.indexOf(e) < 0 ? (n.push(e), e) : void 0;
          });
          return f(n, e);
        },
        parent: function (e) {
          return f(P(this.pluck("parentNode")), e);
        },
        children: function (e) {
          return f(this.map(function () {
            return c(this);
          }), e);
        },
        contents: function () {
          return this.map(function () {
            return x.call(this.childNodes);
          });
        },
        siblings: function (e) {
          return f(this.map(function (e, n) {
            return A.call(c(n.parentNode), function (e) {
              return e !== n;
            });
          }), e);
        },
        empty: function () {
          return this.each(function () {
            this.innerHTML = "";
          });
        },
        pluck: function (e) {
          return k.map(this, function (n) {
            return n[e];
          });
        },
        show: function () {
          return this.each(function () {
            "none" == this.style.display && (this.style.display = null), "none" == O(this, "").getPropertyValue("display") && (this.style.display = function (e) {
              var n, o;
              return L[e] || (n = q.createElement(e), q.body.appendChild(n), o = O(n, "").getPropertyValue("display"), n.parentNode.removeChild(n), "none" == o && (o = "block"), L[e] = o), L[e];
            }(this.nodeName));
          });
        },
        replaceWith: function (e) {
          return this.before(e).remove();
        },
        wrap: function (e) {
          var o = n(e);
          if (this[0] && !o) var t = k(e).get(0),
            a = t.parentNode || this.length > 1;
          return this.each(function (n) {
            k(this).wrapAll(o ? e.call(this, n) : a ? t.cloneNode(!0) : t);
          });
        },
        wrapAll: function (e) {
          if (this[0]) {
            k(this[0]).before(e = k(e));
            for (var n; (n = e.children()).length;) e = n.first();
            k(e).append(this);
          }
          return this;
        },
        wrapInner: function (e) {
          var o = n(e);
          return this.each(function (n) {
            var t = k(this),
              a = t.contents(),
              i = o ? e.call(this, n) : e;
            a.length ? a.wrapAll(i) : t.append(i);
          });
        },
        unwrap: function () {
          return this.parent().each(function () {
            k(this).replaceWith(k(this).children());
          }), this;
        },
        clone: function () {
          return this.map(function () {
            return this.cloneNode(!0);
          });
        },
        hide: function () {
          return this.css("display", "none");
        },
        toggle: function (e) {
          return this.each(function () {
            var n = k(this);
            (e === b ? "none" == n.css("display") : e) ? n.show() : n.hide();
          });
        },
        prev: function (e) {
          return k(this.pluck("previousElementSibling")).filter(e || "*");
        },
        next: function (e) {
          return k(this.pluck("nextElementSibling")).filter(e || "*");
        },
        html: function (e) {
          return e === b ? this.length > 0 ? this[0].innerHTML : null : this.each(function (n) {
            var o = this.innerHTML;
            k(this).empty().append(p(this, e, n, o));
          });
        },
        text: function (e) {
          return e === b ? this.length > 0 ? this[0].textContent : null : this.each(function () {
            this.textContent = e;
          });
        },
        attr: function (e, n) {
          var o;
          return "string" == typeof e && n === b ? 0 == this.length || 1 !== this[0].nodeType ? b : "value" == e && "INPUT" == this[0].nodeName ? this.val() : !(o = this[0].getAttribute(e)) && e in this[0] ? this[0][e] : o : this.each(function (o) {
            if (1 === this.nodeType) if (i(e)) for (v in e) h(this, v, e[v]);else h(this, e, p(this, n, o, this.getAttribute(e)));
          });
        },
        removeAttr: function (e) {
          return this.each(function () {
            1 === this.nodeType && h(this, e);
          });
        },
        prop: function (e, n) {
          return n === b ? this[0] && this[0][e] : this.each(function (o) {
            this[e] = p(this, n, o, this[e]);
          });
        },
        data: function (e, n) {
          var o = this.attr("data-" + s(e), n);
          return null !== o ? _(o) : b;
        },
        val: function (e) {
          return e === b ? this[0] && (this[0].multiple ? k(this[0]).find("option").filter(function () {
            return this.selected;
          }).pluck("value") : this[0].value) : this.each(function (n) {
            this.value = p(this, e, n, this.value);
          });
        },
        offset: function (e) {
          if (e) return this.each(function (n) {
            var o = k(this),
              t = p(this, e, n, o.offset()),
              a = o.offsetParent().offset(),
              i = {
                top: t.top - a.top,
                left: t.left - a.left
              };
            "static" == o.css("position") && (i.position = "relative"), o.css(i);
          });
          if (0 == this.length) return null;
          var n = this[0].getBoundingClientRect();
          return {
            left: n.left + window.pageXOffset,
            top: n.top + window.pageYOffset,
            width: Math.round(n.width),
            height: Math.round(n.height)
          };
        },
        css: function (n, o) {
          if (arguments.length < 2 && "string" == typeof n) return this[0] && (this[0].style[S(n)] || O(this[0], "").getPropertyValue(n));
          var t = "";
          if ("string" == e(n)) o || 0 === o ? t = s(n) + ":" + d(n, o) : this.each(function () {
            this.style.removeProperty(s(n));
          });else for (v in n) n[v] || 0 === n[v] ? t += s(v) + ":" + d(v, n[v]) + ";" : this.each(function () {
            this.style.removeProperty(s(v));
          });
          return this.each(function () {
            this.style.cssText += ";" + t;
          });
        },
        index: function (e) {
          return e ? this.indexOf(k(e)[0]) : this.parent().children().indexOf(this[0]);
        },
        hasClass: function (e) {
          return T.some.call(this, function (e) {
            return this.test(y(e));
          }, m(e));
        },
        addClass: function (e) {
          return this.each(function (n) {
            C = [];
            var o = y(this),
              t = p(this, e, n, o);
            t.split(/\s+/g).forEach(function (e) {
              k(this).hasClass(e) || C.push(e);
            }, this), C.length && y(this, o + (o ? " " : "") + C.join(" "));
          });
        },
        removeClass: function (e) {
          return this.each(function (n) {
            return e === b ? y(this, "") : (C = y(this), p(this, e, n, C).split(/\s+/g).forEach(function (e) {
              C = C.replace(m(e), " ");
            }), void y(this, C.trim()));
          });
        },
        toggleClass: function (e, n) {
          return this.each(function (o) {
            var t = k(this),
              a = p(this, e, o, y(this));
            a.split(/\s+/g).forEach(function (e) {
              (n === b ? !t.hasClass(e) : n) ? t.addClass(e) : t.removeClass(e);
            });
          });
        },
        scrollTop: function () {
          return this.length ? "scrollTop" in this[0] ? this[0].scrollTop : this[0].scrollY : void 0;
        },
        position: function () {
          if (this.length) {
            var e = this[0],
              n = this.offsetParent(),
              o = this.offset(),
              t = N.test(n[0].nodeName) ? {
                top: 0,
                left: 0
              } : n.offset();
            return o.top -= parseFloat(k(e).css("margin-top")) || 0, o.left -= parseFloat(k(e).css("margin-left")) || 0, t.top += parseFloat(k(n[0]).css("border-top-width")) || 0, t.left += parseFloat(k(n[0]).css("border-left-width")) || 0, {
              top: o.top - t.top,
              left: o.left - t.left
            };
          }
        },
        offsetParent: function () {
          return this.map(function () {
            for (var e = this.offsetParent || q.body; e && !N.test(e.nodeName) && "static" == k(e).css("position");) e = e.offsetParent;
            return e;
          });
        }
      }, k.fn.detach = k.fn.remove, ["width", "height"].forEach(function (e) {
        k.fn[e] = function (n) {
          var t,
            i = this[0],
            r = e.replace(/./, function (e) {
              return e[0].toUpperCase();
            });
          return n === b ? o(i) ? i["inner" + r] : a(i) ? i.documentElement["offset" + r] : (t = this.offset()) && t[e] : this.each(function (o) {
            i = k(this), i.css(e, p(this, n, o, i[e]()));
          });
        };
      }), ["after", "prepend", "before", "append"].forEach(function (n, o) {
        var t = o % 2;
        k.fn[n] = function () {
          var n,
            a,
            i = k.map(arguments, function (o) {
              return n = e(o), "object" == n || "array" == n || null == o ? o : K.fragment(o);
            }),
            r = this.length > 1;
          return i.length < 1 ? this : this.each(function (e, n) {
            a = t ? n : n.parentNode, n = 0 == o ? n.nextSibling : 1 == o ? n.firstChild : 2 == o ? n : null, i.forEach(function (e) {
              if (r) e = e.cloneNode(!0);else if (!a) return k(e).remove();
              w(a.insertBefore(e, n), function (e) {
                null == e.nodeName || "SCRIPT" !== e.nodeName.toUpperCase() || e.type && "text/javascript" !== e.type || e.src || window.eval.call(window, e.innerHTML);
              });
            });
          });
        }, k.fn[t ? n + "To" : "insert" + (o ? "Before" : "After")] = function (e) {
          return k(e)[n](this), this;
        };
      }), K.Z.prototype = k.fn, K.uniq = P, K.deserializeValue = _, k.zepto = K, k;
    }();
    window.Zepto = a, "$" in window || (window.$ = a), function (e) {
      function n(e) {
        var n = this.os = {},
          o = this.browser = {},
          t = e.match(/WebKit\/([\d.]+)/),
          a = e.match(/(Android)\s+([\d.]+)/),
          i = e.match(/(iPad).*OS\s([\d_]+)/),
          r = !i && e.match(/(iPhone\sOS)\s([\d_]+)/),
          u = e.match(/(webOS|hpwOS)[\s\/]([\d.]+)/),
          l = u && e.match(/TouchPad/),
          s = e.match(/Kindle\/([\d.]+)/),
          m = e.match(/Silk\/([\d._]+)/),
          d = e.match(/(BlackBerry).*Version\/([\d.]+)/),
          c = e.match(/(BB10).*Version\/([\d.]+)/),
          g = e.match(/(RIM\sTablet\sOS)\s([\d.]+)/),
          f = e.match(/PlayBook/),
          p = e.match(/Chrome\/([\d.]+)/) || e.match(/CriOS\/([\d.]+)/),
          h = e.match(/Firefox\/([\d.]+)/);
        (o.webkit = !!t) && (o.version = t[1]), a && (n.android = !0, n.version = a[2]), r && (n.ios = n.iphone = !0, n.version = r[2].replace(/_/g, ".")), i && (n.ios = n.ipad = !0, n.version = i[2].replace(/_/g, ".")), u && (n.webos = !0, n.version = u[2]), l && (n.touchpad = !0), d && (n.blackberry = !0, n.version = d[2]), c && (n.bb10 = !0, n.version = c[2]), g && (n.rimtabletos = !0, n.version = g[2]), f && (o.playbook = !0), s && (n.kindle = !0, n.version = s[1]), m && (o.silk = !0, o.version = m[1]), !m && n.android && e.match(/Kindle Fire/) && (o.silk = !0), p && (o.chrome = !0, o.version = p[1]), h && (o.firefox = !0, o.version = h[1]), n.tablet = !!(i || f || a && !e.match(/Mobile/) || h && e.match(/Tablet/)), n.phone = !(n.tablet || !(a || r || u || d || c || p && e.match(/Android/) || p && e.match(/CriOS\/([\d.]+)/) || h && e.match(/Mobile/)));
      }
      n.call(e, navigator.userAgent), e.__detect = n;
    }(a), function (e) {
      function n(e) {
        return e._zid || (e._zid = d++);
      }
      function o(e, o, a, i) {
        if (o = t(o), o.ns) var r = function (e) {
          return new RegExp("(?:^| )" + e.replace(" ", " .* ?") + "(?: |$)");
        }(o.ns);
        return (m[n(e)] || []).filter(function (e) {
          return !(!e || o.e && e.e != o.e || o.ns && !r.test(e.ns) || a && n(e.fn) !== n(a) || i && e.sel != i);
        });
      }
      function t(e) {
        var n = ("" + e).split(".");
        return {
          e: n[0],
          ns: n.slice(1).sort().join(" ")
        };
      }
      function a(n, o, t) {
        "string" != e.type(n) ? e.each(n, t) : n.split(/\s/).forEach(function (e) {
          t(e, o);
        });
      }
      function i(e, n) {
        return e.del && ("focus" == e.e || "blur" == e.e) || !!n;
      }
      function r(e) {
        return g[e] || e;
      }
      function u(o, u, l, s, d, c) {
        var f = n(o),
          p = m[f] || (m[f] = []);
        a(u, l, function (n, a) {
          var u = t(n);
          u.fn = a, u.sel = s, u.e in g && (a = function (n) {
            var o = n.relatedTarget;
            return !o || o !== this && !e.contains(this, o) ? u.fn.apply(this, arguments) : void 0;
          }), u.del = d && d(a, n);
          var l = u.del || a;
          u.proxy = function (e) {
            var n = l.apply(o, [e].concat(e.data));
            return !1 === n && (e.preventDefault(), e.stopPropagation()), n;
          }, u.i = p.length, p.push(u), o.addEventListener(r(u.e), u.proxy, i(u, c));
        });
      }
      function l(e, t, u, l, s) {
        var d = n(e);
        a(t || "", u, function (n, t) {
          o(e, n, t, l).forEach(function (n) {
            delete m[d][n.i], e.removeEventListener(r(n.e), n.proxy, i(n, s));
          });
        });
      }
      function s(n) {
        var o,
          t = {
            originalEvent: n
          };
        for (o in n) h.test(o) || void 0 === n[o] || (t[o] = n[o]);
        return e.each(y, function (e, o) {
          t[e] = function () {
            return this[o] = f, n[e].apply(n, arguments);
          }, t[o] = p;
        }), t;
      }
      var m = (e.zepto.qsa, {}),
        d = 1,
        c = {},
        g = {
          mouseenter: "mouseover",
          mouseleave: "mouseout"
        };
      c.click = c.mousedown = c.mouseup = c.mousemove = "MouseEvents", e.event = {
        add: u,
        remove: l
      }, e.proxy = function (o, t) {
        if (e.isFunction(o)) {
          var a = function () {
            return o.apply(t, arguments);
          };
          return a._zid = n(o), a;
        }
        if ("string" == typeof t) return e.proxy(o[t], o);
        throw new TypeError("expected function");
      }, e.fn.bind = function (e, n) {
        return this.each(function () {
          u(this, e, n);
        });
      }, e.fn.unbind = function (e, n) {
        return this.each(function () {
          l(this, e, n);
        });
      }, e.fn.one = function (e, n) {
        return this.each(function (o, t) {
          u(this, e, n, null, function (e, n) {
            return function () {
              var o = e.apply(t, arguments);
              return l(t, n, e), o;
            };
          });
        });
      };
      var f = function () {
          return !0;
        },
        p = function () {
          return !1;
        },
        h = /^([A-Z]|layer[XY]$)/,
        y = {
          preventDefault: "isDefaultPrevented",
          stopImmediatePropagation: "isImmediatePropagationStopped",
          stopPropagation: "isPropagationStopped"
        };
      e.fn.delegate = function (n, o, t) {
        return this.each(function (a, i) {
          u(i, o, t, n, function (o) {
            return function (t) {
              var a,
                r = e(t.target).closest(n, i).get(0);
              return r ? (a = e.extend(s(t), {
                currentTarget: r,
                liveFired: i
              }), o.apply(r, [a].concat([].slice.call(arguments, 1)))) : void 0;
            };
          });
        });
      }, e.fn.undelegate = function (e, n, o) {
        return this.each(function () {
          l(this, n, o, e);
        });
      }, e.fn.live = function (n, o) {
        return e(document.body).delegate(this.selector, n, o), this;
      }, e.fn.die = function (n, o) {
        return e(document.body).undelegate(this.selector, n, o), this;
      }, e.fn.on = function (n, o, t) {
        return !o || e.isFunction(o) ? this.bind(n, o || t) : this.delegate(o, n, t);
      }, e.fn.off = function (n, o, t) {
        return !o || e.isFunction(o) ? this.unbind(n, o || t) : this.undelegate(o, n, t);
      }, e.fn.trigger = function (n, o) {
        return ("string" == typeof n || e.isPlainObject(n)) && (n = e.Event(n)), function (e) {
          if (!("defaultPrevented" in e)) {
            e.defaultPrevented = !1;
            var n = e.preventDefault;
            e.preventDefault = function () {
              this.defaultPrevented = !0, n.call(this);
            };
          }
        }(n), n.data = o, this.each(function () {
          "dispatchEvent" in this && this.dispatchEvent(n);
        });
      }, e.fn.triggerHandler = function (n, t) {
        var a, i;
        return this.each(function (r, u) {
          a = s("string" == typeof n ? e.Event(n) : n), a.data = t, a.target = u, e.each(o(u, n.type || n), function (e, n) {
            return i = n.proxy(a), !a.isImmediatePropagationStopped() && void 0;
          });
        }), i;
      }, "focusin focusout load resize scroll unload click dblclick mousedown mouseup mousemove mouseover mouseout mouseenter mouseleave change select keydown keypress keyup error".split(" ").forEach(function (n) {
        e.fn[n] = function (e) {
          return e ? this.bind(n, e) : this.trigger(n);
        };
      }), ["focus", "blur"].forEach(function (n) {
        e.fn[n] = function (e) {
          return e ? this.bind(n, e) : this.each(function () {
            try {
              this[n]();
            } catch (e) {}
          }), this;
        };
      }), e.Event = function (e, n) {
        "string" != typeof e && (n = e, e = n.type);
        var o = document.createEvent(c[e] || "Events"),
          t = !0;
        if (n) for (var a in n) "bubbles" == a ? t = !!n[a] : o[a] = n[a];
        return o.initEvent(e, t, !0, null, null, null, null, null, null, null, null, null, null, null, null), o.isDefaultPrevented = function () {
          return this.defaultPrevented;
        }, o;
      };
    }(a), function (e) {
      function n(n, o, t) {
        var a = e.Event(o);
        return e(n).trigger(a, t), !a.defaultPrevented;
      }
      function o(e, o, t, a) {
        return e.global ? n(o || y, t, a) : void 0;
      }
      function t(n) {
        n.global && 0 === e.active++ && o(n, null, "ajaxStart");
      }
      function a(n) {
        n.global && ! --e.active && o(n, null, "ajaxStop");
      }
      function i(e, n) {
        var t = n.context;
        return !1 !== n.beforeSend.call(t, e, n) && !1 !== o(n, t, "ajaxBeforeSend", [e, n]) && void o(n, t, "ajaxSend", [e, n]);
      }
      function r(e, n, t) {
        var a = t.context,
          i = "success";
        t.success.call(a, e, i, n), o(t, a, "ajaxSuccess", [n, t, e]), l(i, n, t);
      }
      function u(e, n, t, a) {
        var i = a.context;
        a.error.call(i, t, n, e), o(a, i, "ajaxError", [t, a, e]), l(n, t, a);
      }
      function l(e, n, t) {
        var i = t.context;
        t.complete.call(i, n, e), o(t, i, "ajaxComplete", [n, t]), a(t);
      }
      function s() {}
      function m(e) {
        return e && (e = e.split(";", 2)[0]), e && (e == k ? "html" : e == v ? "json" : w.test(e) ? "script" : b.test(e) && "xml") || "text";
      }
      function d(e, n) {
        return (e + "&" + n).replace(/[&?]{1,2}/, "?");
      }
      function c(n, o, t, a) {
        var i = !e.isFunction(o);
        return {
          url: n,
          data: i ? o : void 0,
          success: i ? e.isFunction(t) ? t : void 0 : o,
          dataType: i && a || t
        };
      }
      function g(n, o, t, a) {
        var i,
          r = e.isArray(o);
        e.each(o, function (o, u) {
          i = e.type(u), a && (o = t ? a : a + "[" + (r ? "" : o) + "]"), !a && r ? n.add(u.name, u.value) : "array" == i || !t && "object" == i ? g(n, u, t, o) : n.add(o, u);
        });
      }
      var f,
        p,
        h = 0,
        y = window.document,
        _ = /<script\b[^<]*(?:(?!<\/script>)<[^<]*)*<\/script>/gi,
        w = /^(?:text|application)\/javascript/i,
        b = /^(?:text|application)\/xml/i,
        v = "application/json",
        k = "text/html",
        C = /^\s*$/;
      e.active = 0, e.ajaxJSONP = function (n) {
        if (!("type" in n)) return e.ajax(n);
        var o,
          t = "jsonp" + ++h,
          a = y.createElement("script"),
          l = function () {
            clearTimeout(o), e(a).remove(), delete window[t];
          },
          m = function (e) {
            l(), e && "timeout" != e || (window[t] = s), u(null, e || "abort", d, n);
          },
          d = {
            abort: m
          };
        return !1 === i(d, n) ? (m("abort"), !1) : (window[t] = function (e) {
          l(), r(e, d, n);
        }, a.onerror = function () {
          m("error");
        }, a.src = n.url.replace(/=\?/, "=" + t), e("head").append(a), n.timeout > 0 && (o = setTimeout(function () {
          m("timeout");
        }, n.timeout)), d);
      }, e.ajaxSettings = {
        type: "GET",
        beforeSend: s,
        success: s,
        error: s,
        complete: s,
        context: null,
        global: !0,
        xhr: function () {
          return new window.XMLHttpRequest();
        },
        accepts: {
          script: "text/javascript, application/javascript",
          json: v,
          xml: "application/xml, text/xml",
          html: k,
          text: "text/plain"
        },
        crossDomain: !1,
        timeout: 0,
        processData: !0,
        cache: !0
      }, e.ajax = function (n) {
        var o = e.extend({}, n || {});
        for (f in e.ajaxSettings) void 0 === o[f] && (o[f] = e.ajaxSettings[f]);
        t(o), o.crossDomain || (o.crossDomain = /^([\w-]+:)?\/\/([^\/]+)/.test(o.url) && RegExp.$2 != window.location.host), o.url || (o.url = window.location.toString()), function (n) {
          n.processData && n.data && "string" != e.type(n.data) && (n.data = e.param(n.data, n.traditional)), !n.data || n.type && "GET" != n.type.toUpperCase() || (n.url = d(n.url, n.data));
        }(o), !1 === o.cache && (o.url = d(o.url, "_=" + Date.now()));
        var a = o.dataType,
          l = /=\?/.test(o.url);
        if ("jsonp" == a || l) return l || (o.url = d(o.url, "callback=?")), e.ajaxJSONP(o);
        var c,
          g = o.accepts[a],
          h = {},
          y = /^([\w-]+:)\/\//.test(o.url) ? RegExp.$1 : window.location.protocol,
          _ = o.xhr();
        o.crossDomain || (h["X-Requested-With"] = "XMLHttpRequest"), g && (h.Accept = g, g.indexOf(",") > -1 && (g = g.split(",", 2)[0]), _.overrideMimeType && _.overrideMimeType(g)), (o.contentType || !1 !== o.contentType && o.data && "GET" != o.type.toUpperCase()) && (h["Content-Type"] = o.contentType || "application/x-www-form-urlencoded"), o.headers = e.extend(h, o.headers || {}), _.onreadystatechange = function () {
          if (4 == _.readyState) {
            _.onreadystatechange = s, clearTimeout(c);
            var n,
              t = !1;
            if (_.status >= 200 && _.status < 300 || 304 == _.status || 0 == _.status && "file:" == y) {
              a = a || m(_.getResponseHeader("content-type")), n = _.responseText;
              try {
                "script" == a ? (0, eval)(n) : "xml" == a ? n = _.responseXML : "json" == a && (n = C.test(n) ? null : e.parseJSON(n));
              } catch (i) {
                t = i;
              }
              t ? u(t, "parsererror", _, o) : r(n, _, o);
            } else u(null, _.status ? "error" : "abort", _, o);
          }
        };
        var w = !("async" in o) || o.async;
        for (p in _.open(o.type, o.url, w), o.headers) _.setRequestHeader(p, o.headers[p]);
        return !1 === i(_, o) ? (_.abort(), !1) : (o.timeout > 0 && (c = setTimeout(function () {
          _.onreadystatechange = s, _.abort(), u(null, "timeout", _, o);
        }, o.timeout)), _.send(o.data ? o.data : null), _);
      }, e.get = function () {
        return e.ajax(c.apply(null, arguments));
      }, e.post = function () {
        var n = c.apply(null, arguments);
        return n.type = "POST", e.ajax(n);
      }, e.getJSON = function () {
        var n = c.apply(null, arguments);
        return n.dataType = "json", e.ajax(n);
      }, e.fn.load = function (n, o, t) {
        if (!this.length) return this;
        var a,
          i = this,
          r = n.split(/\s/),
          u = c(n, o, t),
          l = u.success;
        return r.length > 1 && (u.url = r[0], a = r[1]), u.success = function (n) {
          i.html(a ? e("<div>").html(n.replace(_, "")).find(a) : n), l && l.apply(i, arguments);
        }, e.ajax(u), this;
      };
      var S = encodeURIComponent;
      e.param = function (e, n) {
        var o = [];
        return o.add = function (e, n) {
          this.push(S(e) + "=" + S(n));
        }, g(o, e, n), o.join("&").replace(/%20/g, "+");
      };
    }(a), function (e) {
      e.fn.serializeArray = function () {
        var n,
          o = [];
        return e(Array.prototype.slice.call(this.get(0).elements)).each(function () {
          n = e(this);
          var t = n.attr("type");
          "fieldset" != this.nodeName.toLowerCase() && !this.disabled && "submit" != t && "reset" != t && "button" != t && ("radio" != t && "checkbox" != t || this.checked) && o.push({
            name: n.attr("name"),
            value: n.val()
          });
        }), o;
      }, e.fn.serialize = function () {
        var e = [];
        return this.serializeArray().forEach(function (n) {
          e.push(encodeURIComponent(n.name) + "=" + encodeURIComponent(n.value));
        }), e.join("&");
      }, e.fn.submit = function (n) {
        if (n) this.bind("submit", n);else if (this.length) {
          var o = e.Event("submit");
          this.eq(0).trigger(o), o.defaultPrevented || this.get(0).submit();
        }
        return this;
      };
    }(a), function (e, n) {
      function o(e) {
        return a(e.replace(/([a-z])([A-Z])/, "$1-$2"));
      }
      function a(e) {
        return e.toLowerCase();
      }
      function i(e) {
        return r ? r + e : a(e);
      }
      var r,
        u,
        l,
        s,
        m,
        d,
        c,
        g,
        f = "",
        p = window.document,
        h = p.createElement("div"),
        y = /^((translate|rotate|scale)(X|Y|Z|3d)?|matrix(3d)?|perspective|skew(X|Y)?)$/i,
        _ = {};
      e.each({
        Webkit: "webkit",
        Moz: "",
        O: "o",
        ms: "MS"
      }, function (e, o) {
        return h.style[e + "TransitionProperty"] !== n ? (f = "-" + a(e) + "-", r = o, !1) : void 0;
      }), u = f + "transform", _[l = f + "transition-property"] = _[s = f + "transition-duration"] = _[m = f + "transition-timing-function"] = _[d = f + "animation-name"] = _[c = f + "animation-duration"] = _[g = f + "animation-timing-function"] = "", e.fx = {
        off: r === n && h.style.transitionProperty === n,
        speeds: {
          _default: 400,
          fast: 200,
          slow: 600
        },
        cssPrefix: f,
        transitionEnd: i("TransitionEnd"),
        animationEnd: i("AnimationEnd")
      }, e.fn.animate = function (n, o, t, a) {
        return e.isPlainObject(o) && (t = o.easing, a = o.complete, o = o.duration), o && (o = ("number" == typeof o ? o : e.fx.speeds[o] || e.fx.speeds._default) / 1000), this.anim(n, o, t, a);
      }, e.fn.anim = function (a, i, r, f) {
        var p,
          h,
          w,
          b = {},
          v = "",
          k = this,
          C = e.fx.transitionEnd;
        if (i === n && (i = 0.4), e.fx.off && (i = 0), "string" == typeof a) b[d] = a, b[c] = i + "s", b[g] = r || "linear", C = e.fx.animationEnd;else {
          for (p in h = [], a) y.test(p) ? v += p + "(" + a[p] + ") " : (b[p] = a[p], h.push(o(p)));
          v && (b[u] = v, h.push(u)), i > 0 && "object" == t(a) && (b[l] = h.join(", "), b[s] = i + "s", b[m] = r || "linear");
        }
        return w = function (n) {
          if ("undefined" != typeof n) {
            if (n.target !== n.currentTarget) return;
            e(n.target).unbind(C, w);
          }
          e(this).css(_), f && f.call(this);
        }, i > 0 && this.bind(C, w), this.size() && this.get(0).clientLeft, this.css(b), 0 >= i && setTimeout(function () {
          k.each(function () {
            w.call(this);
          });
        }, 0), this;
      }, h = null;
    }(a);
  },
  b7ec: function (e, n, o) {
    "use strict";

    o("6a54");
    var t = o("f5bd").default;
    Object.defineProperty(n, "__esModule", {
      value: !0
    }), n.default = void 0;
    var a = t(o("9b1b"));
    function i(e) {
      if (e) {
        var n = JSON.parse(e);
        if (n) {
          var o = {
            user_id: n.userID || 0,
            user_name: n.nickName || "",
            portrait_url: n.faceUrl || "",
            phone: n.userPhone || "",
            wx_openid: n.openID || "",
            wx_unionid: "",
            app_user_token: ""
          };
          return o;
        }
        return !1;
      }
      return !1;
    }
    o("5c47"), o("0506"), o("c223");
    var r = null;
    window.postUserInfo = function (e) {
      var n = i(e);
      n && (r = n);
    };
    var u = {
        isInApp: function () {
          var e = navigator.userAgent.toLowerCase();
          return !!/xkyApp/gi.test(e);
        },
        getSystemInfo: function (e) {},
        getUserInfo: function (e) {
          r ? e && e(r) : (this.goToLoginPage(), window.postUserInfo = function (n) {
            var o = i(n);
            o ? (r = o, e && e(r)) : e && e(!1);
          });
        },
        getLocation: function (e) {
          window.location.href = "getLocationInfo:///";
          var n = {
            latitude: 0,
            longitude: 0
          };
          window.getLocationInfo = function (o) {
            var t = JSON.parse(o);
            t ? (n.latitude = t.lat || 0, n.longitude = t.lon || 0, n = (0, a.default)((0, a.default)({}, n), t), e && e(n)) : e && e(n);
          };
        },
        shareTo: function () {},
        goToLoginPage: function () {
          window.syncUserInfo = function () {}, window.location.href = "checkuserlogin:///";
        },
        goToBindPage: function () {},
        saveImage: function () {},
        linkTo: function () {},
        jumpToNews: function () {},
        goUcenter: function () {},
        playAudio: function () {},
        showShare: function () {
          var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {},
            n = encodeURIComponent(e.link_url),
            o = "xkyApp://appShare?xky_ti=".concat(e.title, "&xky_des=").concat(e.brief, "&xky_img=").concat(e.indexpic, "&xky_url=").concat(n);
          window.location.href = o;
        },
        openpaper: function () {}
      },
      l = u;
    n.default = l;
  },
  b8e7: function (e, n, o) {
    "use strict";

    o.r(n);
    var t = o("628f"),
      a = o("fcef");
    for (var i in a) ["default"].indexOf(i) < 0 && function (e) {
      o.d(n, e, function () {
        return a[e];
      });
    }(i);
    o("bda2");
    var r = o("828b"),
      u = Object(r["a"])(a["default"], t["b"], t["c"], !1, null, null, null, !1, t["a"], void 0);
    n["default"] = u.exports;
  },
  bda2: function (e, n, o) {
    "use strict";

    var t = o("23d4"),
      a = o.n(t);
    a.a;
  },
  beb5: function (e, n, o) {
    "use strict";

    (function (e) {
      o("6a54");
      var t = o("f5bd").default;
      Object.defineProperty(n, "__esModule", {
        value: !0
      }), n.requestAuthDeviceToken = n.requestApiNoAuth = n.requestApi = n.getBusinessAccessApiHeaders = n.getAccessApiHeaders = void 0;
      var a = t(o("9b1b")),
        i = t(o("2634")),
        r = t(o("2fdc"));
      o("bf0f");
      var u = t(o("df56")),
        l = t(o("8963"));
      n.requestApi = function (n) {
        var o = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {},
          t = arguments.length > 2 ? arguments[2] : void 0,
          a = arguments.length > 3 && void 0 !== arguments[3] && arguments[3];
        if (a) {
          var d = u.default.getUserInfoFromLocalStorage();
          if (!d) return {
            code: "1001",
            msg: "\u672A\u767B\u5F55",
            data: []
          };
        }
        return new Promise(function () {
          var a = (0, r.default)((0, i.default)().mark(function a(r) {
            var d, c, g;
            return (0, i.default)().wrap(function (a) {
              while (1) switch (a.prev = a.next) {
                case 0:
                  if (u.default.openVConsole(), u.default.checkIsPreviewMode() && (o["_from_ydpreview"] = 1), d = {}, c = u.default.checkIsInBusinessWriteOffEnv(), !c) {
                    a.next = 12;
                    break;
                  }
                  return g = u.default.getMallBusinessAccess(), g && g.sign && (o.sign = g.sign), a.next = 9, m();
                case 9:
                  d = a.sent, a.next = 15;
                  break;
                case 12:
                  return a.next = 14, s();
                case 14:
                  d = a.sent;
                case 15:
                  uni.request({
                    url: n,
                    data: o || {},
                    method: t || "GET",
                    header: d,
                    success: function (n) {
                      if (n.data && "1001" === n.data.code) {
                        if (u.default.clearLoginToken(), u.default.checkIsNeedLoginTip()) {
                          var o = u.default.checkIsInThirdBrowser();
                          o ? uni.showModal({
                            title: "\u53CB\u60C5\u63D0\u793A",
                            content: "\u8BF7\u60A8\u5148\u767B\u5F55",
                            success: function (n) {
                              n.confirm ? l.default[o].goToLoginPage() : n.cancel && e.log("\u7528\u6237\u70B9\u51FB\u53D6\u6D88");
                            }
                          }) : uni.showToast({
                            title: "\u8BF7\u91CD\u65B0\u767B\u5F55",
                            icon: "error"
                          });
                        }
                      } else n.data && "1002" === n.data.code ? (u.default.clearLoginInfo(), u.default.checkUser()) : !n.data || "1010" !== n.data.code && "110110" !== n.data.code || uni.showToast({
                        title: n.data.msg || "\u53C2\u4E0E\u4EBA\u6570\u8F83\u591A\uFF0C\u8BF7\u7A0D\u540E\u518D\u8BD5",
                        duration: 2000
                      });
                      r(n.data);
                    },
                    fail: function (e) {
                      var n = {
                        code: -1,
                        msg: "\u54CE\u5440\uFF0C\u7F51\u7EDC\u5F02\u5E38\u5566\uFF01",
                        data: e
                      };
                      r(n);
                    }
                  });
                case 16:
                case "end":
                  return a.stop();
              }
            }, a);
          }));
          return function (e) {
            return a.apply(this, arguments);
          };
        }());
      };
      n.requestApiNoAuth = function (e) {
        var n = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {},
          o = arguments.length > 2 ? arguments[2] : void 0;
        return new Promise(function (t) {
          uni.request({
            url: e,
            data: n || {},
            method: o || "GET",
            success: function (e) {
              t(e.data);
            },
            fail: function (e) {
              var n = {
                code: -1,
                msg: "\u54CE\u5440\uFF0C\u7F51\u7EDC\u5F02\u5E38\u5566\uFF01",
                data: e
              };
              t(n);
            }
          });
        });
      };
      var s = function () {
        var e = (0, r.default)((0, i.default)().mark(function e() {
          var n, o, t, r, l, s, m, d;
          return (0, i.default)().wrap(function (e) {
            while (1) switch (e.prev = e.next) {
              case 0:
                return n = uni.getStorageSync("access_token"), o = uni.getStorageSync("_user_info"), t = 0, o && (o = JSON.parse(o), t = o.id), e.next = 6, u.default.tenantInitSetting();
              case 6:
                return r = e.sent, l = {
                  "Access-Token": n || "",
                  "Access-User-Id": t,
                  "Access-T-Id": r.t_id || "",
                  "Access-T-Id-In": r.t_id_in || "",
                  "Access-Api-Unique-Token": 1
                }, s = u.default.getWechatReqClientType(), e.next = 11, u.default.getHeadAS();
              case 11:
                return m = e.sent, e.next = 14, u.default.getServerAuthDeviceToken();
              case 14:
                return d = e.sent, l = (0, a.default)((0, a.default)({}, l), {}, {
                  "Access-Wxclient-Type": s,
                  "Access-Api-Signature": m,
                  "Access-Api-Dt": d
                }), e.abrupt("return", l);
              case 17:
              case "end":
                return e.stop();
            }
          }, e);
        }));
        return function () {
          return e.apply(this, arguments);
        };
      }();
      n.getAccessApiHeaders = s;
      var m = function () {
        var e = (0, r.default)((0, i.default)().mark(function e() {
          var n, o, t, a;
          return (0, i.default)().wrap(function (e) {
            while (1) switch (e.prev = e.next) {
              case 0:
                return n = u.default.getMallBusinessAccess(), o = u.default.getWechatReqClientType(), e.next = 4, u.default.getHeadAS();
              case 4:
                return t = e.sent, a = {
                  "Access-Token": n && n.access_token ? n.access_token : "",
                  "Access-User-Id": n && n.user_id ? n.user_id : 0,
                  "Access-T-Id": n && n.t_id ? n.t_id : 1,
                  "Access-T-Id-In": n && n.t_id_in ? n.t_id_in : 1,
                  "Access-Api-Unique-Token": 1,
                  "Access-Wxclient-Type": o,
                  "Access-Api-Signature": t
                }, e.abrupt("return", a);
              case 7:
              case "end":
                return e.stop();
            }
          }, e);
        }));
        return function () {
          return e.apply(this, arguments);
        };
      }();
      n.getBusinessAccessApiHeaders = m;
      var d = function () {
        var e = (0, r.default)((0, i.default)().mark(function e(n) {
          var o, t, a;
          return (0, i.default)().wrap(function (e) {
            while (1) switch (e.prev = e.next) {
              case 0:
                return e.next = 2, u.default.tenantInitSetting();
              case 2:
                return o = e.sent, t = uni.getSystemInfoSync(), a = {
                  "Access-T-Id": o.t_id || "",
                  "Access-T-Id-In": o.t_id_in || "",
                  "Access-Api-Unique-Token": 1,
                  "Access-Api-Dt": t.deviceId
                }, e.abrupt("return", new Promise(function (e) {
                  uni.request({
                    url: n,
                    method: "GET",
                    header: a,
                    success: function (n) {
                      e(n.data);
                    },
                    fail: function (n) {
                      var o = {
                        code: -1,
                        msg: "\u54CE\u5440\uFF0C\u7F51\u7EDC\u5F02\u5E38\u5566\uFF01",
                        data: n
                      };
                      e(o);
                    }
                  });
                }));
              case 6:
              case "end":
                return e.stop();
            }
          }, e);
        }));
        return function (n) {
          return e.apply(this, arguments);
        };
      }();
      n.requestAuthDeviceToken = d;
    }).call(this, o("ba7c")["default"]);
  },
  c447: function (e, n, o) {
    o("23f4"), o("7d2f"), o("5c47"), o("9c4e"), o("ab80"), o("0506"), o("7a76"), o("c9b5"), o("aa9c"), window.qq = window.qq || {}, qq.maps = qq.maps || {}, window.soso || (window.soso = qq), soso.maps || (soso.maps = qq.maps), qq.maps.Geolocation = function () {
      "use strict";

      var e = [],
        n = null,
        o = 0,
        t = "_geoIframe_" + Math.ceil(10000000 * Math.random()),
        a = document.createElement("iframe"),
        i = null,
        r = null,
        u = null,
        l = null,
        s = function (s, m) {
          if (s) {
            if (m) {
              var d = document.getElementById(t);
              if (!d) {
                a.setAttribute("id", t), a.setAttribute("allow", "geolocation");
                a.setAttribute("src", "https://apis.map.qq.com/tools/geolocation?key=" + s + "&referer=" + m), a.setAttribute("style", "display: none; width: 100%; height: 30%"), document.body ? document.body.appendChild(a) : document.write(a.outerHTML);
                var c = this;
                window.addEventListener("message", function (t) {
                  var a = t.data;
                  if (a && "geolocation" == a.module) {
                    if (clearTimeout(l), e.length > 0) {
                      var s = e.shift();
                      s.sucCb && s.sucCb(a);
                    }
                    o = 2, c.executeNextGeo(), n && n(a);
                  } else {
                    r = new Date().getTime();
                    var m = r - i;
                    if (m >= u) {
                      if (e.length > 0 && "geo" === e[0].type) {
                        s = e.shift();
                        var d = {
                          type: "fail",
                          code: 5,
                          message: "The request"
                        };
                        s.errCb && s.errCb(d);
                      }
                      clearTimeout(l), o = -1, c.executeNextGeo();
                    }
                    if (e.length > 0 && "ip" === e[0].type) {
                      s = e.shift();
                      s.errCb && s.errCb(d);
                    }
                  }
                }, !1);
              }
            } else alert("\u8BF7\u8F93\u5165referer\uFF01");
          } else alert("\u8BF7\u8F93\u5165key\uFF01");
        };
      return s.prototype.executeNextGeo = function () {
        1 !== o && e.length > 0 && (o = 1, e[0].geoprocess());
      }, s.prototype.getLocation = function (n, t, a) {
        if (a && a.timeout) {
          var i = new RegExp("^[0-9]*$");
          if (!i.test(a.timeout)) return void alert("timeout \u8BF7\u8F93\u5165\u6570\u5B57");
        }
        if (e.length > 10) throw new Error("geolocation queue must be lass than 10");
        e.push({
          sucCb: n,
          errCb: t,
          option: a,
          geoprocess: this.getOnceLocation,
          type: "geo"
        }), 1 !== o && (o = 1, this.getOnceLocation());
      }, s.prototype.getOnceLocation = function () {
        var n = e[0] && e[0].option;
        i = new Date().getTime(), u = n && n.timeout ? +n.timeout : 10000, clearTimeout(l), l = setTimeout(function () {
          if (e.length > 0) {
            var n = e.shift();
            n.errCb && n.errCb();
          }
        }, u), document.getElementById(t).contentWindow.postMessage("getLocation", "*");
      }, s.prototype.getIpLocation = function (n, t) {
        if (e.length > 10) throw new Error("geolocation queue mast be lass than 10");
        e.push({
          sucCb: n,
          errCb: t,
          geoprocess: this.getOnceIpLocation,
          type: "ip"
        }), 1 !== o && (o = 1, this.getOnceIpLocation());
      }, s.prototype.getOnceIpLocation = function () {
        document.getElementById(t).contentWindow.postMessage("getLocation.robust", "*");
      }, s.prototype.watchPosition = function (e) {
        n = e, document.getElementById(t).contentWindow.postMessage("watchPosition", "*");
      }, s.prototype.clearWatch = function () {
        n = null, document.getElementById(t).contentWindow.postMessage("clearWatch", "*");
      }, s;
    }();
  },
  cc55: function (e, n, o) {
    "use strict";

    o("6a54");
    var t = o("f5bd").default;
    Object.defineProperty(n, "__esModule", {
      value: !0
    }), n.default = void 0, o("bf0f"), o("5c47"), o("0506");
    var a = t(o("2634")),
      i = t(o("2fdc")),
      r = o("f41d"),
      u = o("5120"),
      l = {
        _accessToken: "",
        _isInitOk: !1,
        getAppAccessToken: function () {
          return (0, i.default)((0, a.default)().mark(function e() {
            var n;
            return (0, a.default)().wrap(function (e) {
              while (1) switch (e.prev = e.next) {
                case 0:
                  return e.next = 2, (0, r.getInJsAccessToken)();
                case 2:
                  if (n = e.sent, "0" !== n.code) {
                    e.next = 7;
                    break;
                  }
                  return e.abrupt("return", n.data);
                case 7:
                  return e.abrupt("return", "");
                case 8:
                case "end":
                  return e.stop();
              }
            }, e);
          }))();
        },
        getAppOpenId: function () {
          return (0, i.default)((0, a.default)().mark(function e() {
            return (0, a.default)().wrap(function (e) {
              while (1) switch (e.prev = e.next) {
                case 0:
                  return e.abrupt("return", new Promise(function (e) {
                    try {
                      u.getOpenId().then(function (n) {
                        0 == n.code && n.data && n.data.openid && n.data.ticket ? e(n.data.openid + "." + n.data.ticket) : e("");
                      }).catch(function (n) {
                        e("");
                      });
                    } catch (n) {
                      e("");
                    }
                  }));
                case 1:
                case "end":
                  return e.stop();
              }
            }, e);
          }))();
        },
        initJssdk: function () {
          var e = this;
          return (0, i.default)((0, a.default)().mark(function n() {
            return (0, a.default)().wrap(function (n) {
              while (1) switch (n.prev = n.next) {
                case 0:
                  if (!e._isInitOk) {
                    n.next = 2;
                    break;
                  }
                  return n.abrupt("return", !0);
                case 2:
                  if (e._accessToken) {
                    n.next = 6;
                    break;
                  }
                  return n.next = 5, e.getAppAccessToken();
                case 5:
                  e._accessToken = n.sent;
                case 6:
                  if (!e._accessToken) {
                    n.next = 12;
                    break;
                  }
                  return u.setAppAccessToken(e._accessToken), e._isInitOk = !0, n.abrupt("return", !0);
                case 12:
                  return n.abrupt("return", !1);
                case 13:
                case "end":
                  return n.stop();
              }
            }, n);
          }))();
        },
        isInApp: function () {
          var e = navigator.userAgent.toLowerCase();
          return !!/injs;/gi.test(e);
        },
        getSystemInfo: function (e) {},
        getUserInfo: function (e) {
          var n = this;
          return (0, i.default)((0, a.default)().mark(function o() {
            var t, i;
            return (0, a.default)().wrap(function (o) {
              while (1) switch (o.prev = o.next) {
                case 0:
                  return o.next = 2, n.initJssdk();
                case 2:
                  if (t = o.sent, !t) {
                    o.next = 10;
                    break;
                  }
                  return o.next = 6, n.getAppOpenId();
                case 6:
                  i = o.sent, u.getUserInfo().then(function (n) {
                    if (0 == n.code && n.data) {
                      var o = n.data,
                        t = {
                          user_id: o.id || 0,
                          user_name: o.nickname || "",
                          portrait_url: o.avatarUrl || "",
                          phone: o.phoneNumber || "",
                          wx_openid: "",
                          wx_unionid: "",
                          app_user_token: i
                        };
                      e && e(t);
                    } else e && e(!1);
                  }).catch(function (n) {
                    e && e(!1);
                  }), o.next = 11;
                  break;
                case 10:
                  e && e(!1);
                case 11:
                case "end":
                  return o.stop();
              }
            }, o);
          }))();
        },
        getLocation: function (e) {},
        shareTo: function () {
          var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {};
          u.share(e.title, e.brief, e.link_url, e.indexpic);
        },
        goToLoginPage: function () {},
        goToBindPage: function () {},
        saveImage: function () {},
        linkTo: function () {},
        jumpToNews: function () {
          var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : "";
          u.openArticle(e);
        },
        goUcenter: function () {},
        playAudio: function () {},
        showShare: function () {},
        openpaper: function () {}
      },
      s = l;
    n.default = s;
  },
  ceb7: function (e, n, o) {
    "use strict";

    (function (e) {
      o("6a54"), Object.defineProperty(n, "__esModule", {
        value: !0
      }), n.default = void 0, o("5ef2"), o("5c47"), o("2c10"), o("aa9c"), o("d4b5");
      var t = {
        browser: {
          trident: navigator.userAgent.indexOf("Trident") > -1,
          presto: navigator.userAgent.indexOf("Presto") > -1,
          webKit: navigator.userAgent.indexOf("AppleWebKit") > -1,
          gecko: navigator.userAgent.indexOf("Gecko") > -1 && -1 == navigator.userAgent.indexOf("KHTML"),
          mobile: !!navigator.userAgent.match(/AppleWebKit.*Mobile.*/),
          ios: !!navigator.userAgent.match(/\(i[^;]+;( U;)? CPU.+Mac OS X/),
          android: navigator.userAgent.indexOf("Android") > -1 || navigator.userAgent.indexOf("Adr") > -1,
          iPhone: navigator.userAgent.indexOf("iPhone") > -1,
          iPad: navigator.userAgent.indexOf("iPad") > -1,
          webApp: -1 == navigator.userAgent.indexOf("Safari"),
          weixin: navigator.userAgent.indexOf("MicroMessenger") > -1,
          qq: " qq" == navigator.userAgent.match(/\sQQ/i),
          isTMApp: navigator.userAgent.indexOf("TMAppName") > -1
        }
      };
      navigator.userAgent.match(/\(i[^;]+;( U;)? CPU.+Mac OS X/) && t.browser.isTMApp && function (e) {
        if (window.WebViewJavascriptBridge) return e(WebViewJavascriptBridge);
        if (window.WVJBCallbacks) return window.WVJBCallbacks.push(e);
        window.WVJBCallbacks = [e];
        var n = document.createElement("iframe");
        n.style.display = "none", n.src = "wvjbscheme://__bridge_loaded__", document.documentElement.appendChild(n), setTimeout(function () {
          document.documentElement.removeChild(n);
        }, 0);
      }(function (e) {
        window.ios = e;
      });
      var a = {
          ready: function (e) {
            var n = !1,
              o = null,
              t = 0;
            setTimeout(function () {
              (function i() {
                a.getHeadInfo(function () {
                  if (n) return !1;
                  clearTimeout(o), n = !0, e();
                }), o = setTimeout(function () {
                  if (t > 2) return !1;
                  i(), t++;
                }, 2000);
              })();
            }, 500);
          },
          exitApp: function () {
            if (e.log("call exitApp"), t.browser.android) {
              window.android && window.android.postMessage(JSON.stringify({
                fcName: "exitApp",
                data: {}
              }));
            } else window.ios && window.ios.callHandler("exitApp", {});
          },
          setNoticeFunName: function (n, o) {
            if (e.log("call setNoticeFunName"), t.browser.android) {
              window.setNoticeFunNameCallback = o;
              var a = {
                fcName: "setNoticeFunName",
                data: n
              };
              window.android && window.android.postMessage(JSON.stringify(a));
            } else window.ios && window.ios.callHandler("setNoticeFunName", n, o);
          },
          goToShare: function (n, o) {
            if (e.log("call goToShare"), t.browser.android) {
              window.goToShareCallback = o;
              var a = {
                fcName: "goToShare",
                data: n
              };
              window.android && window.android.postMessage(JSON.stringify(a));
            } else window.ios && window.ios.callHandler("goToShare", n, o);
          },
          homeBackClicked: function () {
            if (e.log("call homeBackClicked"), t.browser.android) {
              window.android && window.android.postMessage(JSON.stringify({
                fcName: "homeBackClicked",
                data: {}
              }));
            } else window.ios && window.ios.callHandler("homeBackClicked", {});
          },
          getTitleBarParam: function (n) {
            if (e.log("call getTitleBarParam"), t.browser.android) {
              window.getTitleBarParamCallback = n;
              window.android && window.android.postMessage(JSON.stringify({
                fcName: "getTitleBarParam",
                data: {}
              }));
            } else window.ios && window.ios.callHandler("getTitleBarParam", {}, n);
          },
          getHomePageLevel: function (n) {
            if (e.log("call getHomePageLevel"), t.browser.android) {
              window.getHomePageLevelCallback = n;
              window.android && window.android.postMessage(JSON.stringify({
                fcName: "getHomePageLevel",
                data: {}
              }));
            } else window.ios && window.ios.callHandler("getHomePageLevel", {}, n);
          },
          changePageLevel: function (n) {
            if (e.log("call changePageLevel:" + n), t.browser.android) {
              var o = {
                fcName: "changePageLevel",
                data: {
                  level: n
                }
              };
              window.android && window.android.postMessage(JSON.stringify(o));
            } else window.ios && window.ios.callHandler("changePageLevel", {
              level: n
            }, null);
          },
          getTMToken: function (n) {
            if (e.log("call getTMToken"), t.browser.android) {
              window.getTMTokenCallback = n;
              window.android && window.android.postMessage(JSON.stringify({
                fcName: "getTMToken",
                data: {}
              }));
            } else window.ios && window.ios.callHandler("getTMToken", {}, n);
          },
          goToLogin: function (n) {
            if (e.log("call goToLogin"), t.browser.android) {
              window.goToLoginCallback = n;
              window.android && window.android.postMessage(JSON.stringify({
                fcName: "goToLogin",
                data: {}
              }));
            } else window.ios && window.ios.callHandler("goToLogin", {}, n);
          },
          getTMUserInfo: function (n) {
            if (e.log("call getTMUserInfo"), t.browser.android) {
              window.getTMUserInfoCallback = n;
              window.android && window.android.postMessage(JSON.stringify({
                fcName: "getTMUserInfo",
                data: {}
              }));
            } else window.ios && window.ios.callHandler("getTMUserInfo", {}, n);
          },
          getTMLocationInfo: function (n) {
            if (e.log("call getTMLocationInfo"), t.browser.android) {
              window.getTMLocationInfoCallback = n;
              window.android && window.android.postMessage(JSON.stringify({
                fcName: "getTMLocationInfo",
                data: {}
              }));
            } else window.ios && window.ios.callHandler("getTMLocationInfo", {}, n);
          },
          checkTMLogin: function (n) {
            if (e.log("call checkTMLogin"), t.browser.android) {
              window.checkTMLoginCallback = n;
              window.android && window.android.postMessage(JSON.stringify({
                fcName: "checkTMLogin",
                data: {}
              }));
            } else window.ios && window.ios.callHandler("checkTMLogin", {}, n);
          },
          goToQRcode: function (n) {
            if (e.log("call goToQRcode"), t.browser.android) {
              window.goToQRcodeCallback = n;
              window.android && window.android.postMessage(JSON.stringify({
                fcName: "goToQRcode",
                data: {}
              }));
            } else window.ios && window.ios.callHandler("goToQRcode", {}, n);
          },
          goToNativeComponents: function (n, o) {
            if (e.log("call goToNativeComponents"), t.browser.android) {
              window.goToNativeComponentsCallback = o;
              var a = {
                fcName: "goToNativeComponents",
                data: n
              };
              window.android && window.android.postMessage(JSON.stringify(a));
            } else window.ios && window.ios.callHandler("goToNativeComponents", n, o);
          },
          getHeadInfo: function (e) {
            if (t.browser.android) {
              window.getHeadInfoCallback = e;
              window.android && window.android.postMessage(JSON.stringify({
                fcName: "getHeadInfo",
                data: {}
              }));
            } else window.ios && window.ios.callHandler("getHeadInfo", e);
          },
          gotoWXMiniProgram: function (n, o) {
            if (e.log("call gotoWXMiniProgram"), t.browser.android) {
              window.gotoWXMiniProgramCallback = o;
              var a = {
                fcName: "gotoWXMiniProgram",
                data: n
              };
              window.android && window.android.postMessage(JSON.stringify(a));
            } else window.ios && window.ios.callHandler("gotoWXMiniProgram", JSON.stringify(n), o);
          },
          startRecordAudio: function (n, o) {
            if (e.log("call startRecordAudio"), t.browser.android) {
              window.startRecordAudioCallback = o;
              var a = {
                fcName: "startRecordAudio",
                data: n
              };
              window.android && window.android.postMessage(JSON.stringify(a));
            } else window.ios && window.ios.callHandler("startRecordAudio", n, o);
          },
          stopRecordAudio: function (n) {
            if (e.log("call stopRecordAudio"), t.browser.android) {
              window.stopRecordAudioCallback = n;
              window.android && window.android.postMessage(JSON.stringify({
                fcName: "stopRecordAudio",
                data: {}
              }));
            } else window.ios && window.ios.callHandler("stopRecordAudio", n);
          },
          callbackRecordAudio: function (e) {
            window.TM_AutoStopRecordAudio = function (n) {
              e("string" == typeof n ? n : JSON.stringify(n));
            };
          },
          TMEncryptionData: function (n, o) {
            if (e.log("call TMEncryptionData"), t.browser.android) {
              window.encryptionDataCallback = o;
              var a = {
                fcName: "encryptionData",
                data: n
              };
              window.android && window.android.postMessage(JSON.stringify(a));
            } else window.ios && window.ios.callHandler("encryptionData", n, o);
          },
          TMDecryptData: function (n, o) {
            if (e.log("call TMDecryptData"), t.browser.android) {
              window.decryptDataCallback = o;
              var a = {
                fcName: "decryptData",
                data: n
              };
              window.android && window.android.postMessage(JSON.stringify(a));
            } else window.ios && window.ios.callHandler("decryptData", n, o);
          },
          TMOpenBrowser: function (n, o) {
            if (e.log("call TMOpenBrowser"), t.browser.android) {
              window.openBrowserCallback = o;
              var a = {
                fcName: "openBrowser",
                data: n
              };
              window.android && window.android.postMessage(JSON.stringify(a));
            } else window.ios && window.ios.callHandler("openBrowser", n, o);
          },
          tmScreenSecure: function (n, o) {
            if (e.log("call tmScreenSecure"), t.browser.android) {
              window.tmScreenSecureCallback = o;
              var a = {
                fcName: "tmScreenSecure",
                data: n
              };
              window.android && window.android.postMessage(JSON.stringify(a));
            } else window.ios && window.ios.callHandler("tmScreenSecure", n, o);
          },
          tmJumpNavigationAPP: function (n, o) {
            if (e.log("call tmJumpNavigationAPP"), t.browser.android) {
              window.tmJumpNavigationAPPCallback = o;
              var a = {
                fcName: "tmJumpNavigationAPP",
                data: n
              };
              window.android && window.android.postMessage(JSON.stringify(a));
            } else window.ios && window.ios.callHandler("tmJumpNavigationAPP", n, o);
          },
          tmBecomeActiveShowPage: function (n, o) {
            if (e.log("call tmBecomeActiveShowPage"), t.browser.android) {
              window.tmBecomeActiveShowPageCallback = o;
              var a = {
                fcName: "tmBecomeActiveShowPage",
                data: n
              };
              window.android && window.android.postMessage(JSON.stringify(a));
            } else window.ios && window.ios.callHandler("tmBecomeActiveShowPage", n, o);
          },
          createShareFunctionButton: function (n, o) {
            if (e.log("call createShareFunctionButton"), t.browser.android) {
              window.createShareFunctionButtonCallback = o;
              var a = {
                fcName: "createShareFunctionButton",
                data: n
              };
              window.android && window.android.postMessage(JSON.stringify(a));
            } else window.ios && window.ios.callHandler("createShareFunctionButton", n, o);
          },
          clearTMUserInfo: function (n) {
            if (e.log("call clearTMUserInfo"), t.browser.android) {
              window.clearTMUserInfoCallback = n;
              window.android && window.android.postMessage(JSON.stringify({
                fcName: "clearTMUserInfo",
                data: {}
              }));
            } else window.ios && window.ios.callHandler("clearTMUserInfo", {}, n);
          },
          tmInterceptScroll: function (n, o) {
            if (e.log("call tmInterceptScroll"), t.browser.android) {
              window.tmInterceptScrollCallback = o;
              var a = {
                fcName: "tmInterceptScroll",
                data: n
              };
              window.android && window.android.postMessage(JSON.stringify(a));
            } else window.ios && window.ios.callHandler("tmInterceptScroll", n, o);
          },
          tmSavePictureToAlbum: function (n, o) {
            if (e.log("call tmSavePictureToAlbum"), t.browser.android) {
              window.tmSavePictureToAlbumCallback = o;
              var a = {
                fcName: "tmSavePictureToAlbum",
                data: n
              };
              window.android && window.android.postMessage(JSON.stringify(a));
            } else window.ios && window.ios.callHandler("tmSavePictureToAlbum", n, o);
          }
        },
        i = a;
      n.default = i;
    }).call(this, o("ba7c")["default"]);
  },
  d111: function (e, n, o) {
    "use strict";

    var t = o("f5bd").default;
    t(o("9b8e"));
  },
  d84b: function (e, n, o) {
    "use strict";

    o("6a54"), Object.defineProperty(n, "__esModule", {
      value: !0
    }), n.default = void 0;
    var t = 52.35987755982988,
      a = 3.141592653589793,
      i = 6378245,
      r = 0.006693421622965943,
      u = {
        transformLon: function (e, n) {
          var o = 300 + e + 2 * n + 0.1 * e * e + 0.1 * e * n + 0.1 * Math.sqrt(Math.abs(e));
          return o += 2 * (20 * Math.sin(6 * e * a) + 20 * Math.sin(2 * e * a)) / 3, o += 2 * (20 * Math.sin(e * a) + 40 * Math.sin(e / 3 * a)) / 3, o += 2 * (150 * Math.sin(e / 12 * a) + 300 * Math.sin(e / 30 * a)) / 3, o;
        },
        transformLat: function (e, n) {
          var o = 2 * e - 100 + 3 * n + 0.2 * n * n + 0.1 * e * n + 0.2 * Math.sqrt(Math.abs(e));
          return o += 2 * (20 * Math.sin(6 * e * a) + 20 * Math.sin(2 * e * a)) / 3, o += 2 * (20 * Math.sin(n * a) + 40 * Math.sin(n / 3 * a)) / 3, o += 2 * (160 * Math.sin(n / 12 * a) + 320 * Math.sin(n * a / 30)) / 3, o;
        },
        outOfChina: function (e, n) {
          return n < 72.004 || n > 137.8347 || e < 0.8293 || e > 55.8271;
        },
        wgs2gcj: function (e, n) {
          var o = {};
          if (this.outOfChina(e, n)) return o.latitude = e, o.lng = n, o;
          var t = this.transformLat(n - 105, e - 35),
            u = this.transformLon(n - 105, e - 35),
            l = e / 180 * a,
            s = Math.sin(l);
          s = 1 - r * s * s;
          var m = Math.sqrt(s);
          t = 180 * t / (i * (1 - r) / (s * m) * a), u = 180 * u / (i / m * Math.cos(l) * a);
          var d = e + t,
            c = n + u;
          return o.latitude = d, o.longitude = c, o;
        },
        bd2gcj: function (e, n) {
          var o = {},
            a = n - 0.0065,
            i = e - 0.006,
            r = Math.sqrt(a * a + i * i) - 0.00002 * Math.sin(i * t),
            u = Math.atan2(i, a) - 0.000003 * Math.cos(a * t),
            l = r * Math.cos(u),
            s = r * Math.sin(u);
          return o.latitude = s, o.longitude = l, o;
        },
        gcj2bd: function (e, n) {
          var o = {},
            a = n,
            i = e,
            r = Math.sqrt(a * a + i * i) + 0.00002 * Math.sin(i * t),
            u = Math.atan2(i, a) + 0.000003 * Math.cos(a * t),
            l = r * Math.cos(u) + 0.0065,
            s = r * Math.sin(u) + 0.006;
          return o.latitude = s, o.longitude = l, o;
        },
        gcj2wgs: function (e, n) {
          var o = {};
          if (this.outOfChina(e, n)) return o.latitude = e, o.lng = n, o;
          var t = this.transformLat(n - 105, e - 35),
            u = this.transformLon(n - 105, e - 35),
            l = e / 180 * a,
            s = Math.sin(l);
          s = 1 - r * s * s;
          var m = Math.sqrt(s);
          t = 180 * t / (i * (1 - r) / (s * m) * a), u = 180 * u / (i / m * Math.cos(l) * a);
          var d = t,
            c = u;
          return o.latitude = d, o.longitude = c, o;
        }
      },
      l = u;
    n.default = l;
  },
  da7b: function (e, n, o) {
    o("5c47"), o("2c10"), o("5ef2"), function () {
      var e = navigator.userAgent;
      (!e.match(/AppleWebKit.*Mobile.*/) || e.indexOf("iPad") > -1) && (window.innerWidth = 750);
    }();
  },
  df05: function (e, n, o) {
    "use strict";

    o("6a54"), Object.defineProperty(n, "__esModule", {
      value: !0
    }), n.default = void 0, o("aa9c"), o("5c47"), o("2c10");
    var t = !1;
    function a(e) {
      if (window.WebViewJavascriptBridge) return e(WebViewJavascriptBridge);
      if (document.addEventListener("WebViewJavascriptBridgeReady", function () {
        return e(WebViewJavascriptBridge);
      }, !1), window.WVJBCallbacks) return window.WVJBCallbacks.push(e);
      window.WVJBCallbacks = [e];
      var n = document.createElement("iframe");
      n.style.display = "none", n.src = "https://__bridge_loaded__", document.documentElement.appendChild(n), setTimeout(function () {
        document.documentElement.removeChild(n);
      }, 0);
    }
    function i() {
      return "yunxh-ydapp" == navigator.userAgent.toLowerCase().match(/YUNXH-YDAPP/i);
    }
    function r(e) {
      var n = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : null,
        o = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : null;
      i() ? a(function (a) {
        "undefined" != typeof a.init && a.init instanceof Function && (t || (a.init(function (e, n) {}), t = !0)), "getLocation" == e && a.registerHandler("getLocation", function (e, n) {
          e = "string" === typeof e ? JSON.parse(e) : e, o && o(e), n("success");
        }), a.callHandler(e, n, function (e) {
          e = "string" === typeof e ? JSON.parse(e) : e, o && o(e);
        });
      }) : alert("\u8BF7\u5728app\u4E2D\u6253\u5F00");
    }
    var u = {
        getBaseInfo: function (e) {
          r("getBaseInfo", null, function (n) {
            e && e(n);
          });
        },
        getUserInfo: function (e) {
          r("getUserInfo", {
            needlogin: 1
          }, function (n) {
            e && e(n);
          });
        },
        getHeaderInfo: function (e) {
          r("getHeaderInfo", null, function (n) {
            e && e(n);
          });
        },
        navigateTo: function (e) {
          r("navigateTo", e);
        },
        goShare: function (e) {
          r("goShare", e);
        }
      },
      l = u;
    n.default = l;
  },
  df56: function (e, n, o) {
    "use strict";

    (function (e) {
      o("6a54");
      var t = o("f5bd").default;
      Object.defineProperty(n, "__esModule", {
        value: !0
      }), n.default = void 0, o("5c47"), o("0506"), o("d4b5"), o("bf0f"), o("a1c1"), o("f7a5"), o("af8f"), o("5ef2"), o("9db6"), o("22b6"), o("aa9c"), o("e838"), o("e966"), o("c9b5"), o("15d1"), o("d5c6"), o("5a56"), o("f074"), o("4626"), o("5ac7"), o("dfcf"), o("20f3"), o("c223"), o("fd3c"), o("aa77"), o("2c10"), o("4db2"), o("c976"), o("4d8f"), o("7b97"), o("668a"), o("c5b7"), o("8ff5"), o("2378"), o("641a"), o("64e0"), o("cce3"), o("efba"), o("d009"), o("bd7d"), o("7edd"), o("d798"), o("f547"), o("5e54"), o("b60a"), o("8c18"), o("12973"), o("f991"), o("198e"), o("8557"), o("63b1"), o("1954"), o("1cf1"), o("18f7"), o("de6c"), o("dc89"), o("2425");
      var a = t(o("2634")),
        i = t(o("9b1b")),
        r = t(o("2fdc")),
        u = t(o("406e")),
        l = o("9219"),
        s = t(o("671e")),
        m = t(o("2cfc")),
        d = t(o("e3c0")),
        c = t(o("eac1")),
        g = o("f41d"),
        f = t(o("df05")),
        p = t(o("8963")),
        h = t(o("d84b"));
      o("c447");
      var y = t(o("6337")),
        _ = o("4aa9"),
        w = null,
        b = 0,
        v = {
          getCurrentPagePath: l.getCurrentPagePath,
          sleep: l.sleep,
          getImageUrl: l.getImageUrl,
          pxToRpx: l.pxToRpx,
          copyText: l.copyText,
          getWechatReqClientType: l.getWechatReqClientType,
          getPlatform: l.getPlatform,
          checkTimeState: l.checkTimeState,
          checkIsInApp: l.checkIsInApp,
          checkIsYdSdkBrowser: l.checkIsYdSdkBrowser,
          checkIsWechatBrowser: l.checkIsWechatBrowser,
          checkIsWechatMiniProgram: l.checkIsWechatMiniProgram,
          checkIsInThirdBrowser: l.checkIsInThirdBrowser,
          hidePageNavInBrowser: l.hidePageNavInBrowser,
          checkIsHidePageNavBack: l.checkIsHidePageNavBack,
          mergeObject: l.mergeObject,
          moduleMap: m.default.moduleMap,
          routeMap: m.default.routeMap,
          getMemberGlobalSetting: function () {
            var e = arguments,
              n = this;
            return (0, r.default)((0, a.default)().mark(function o() {
              var t, r, l, s;
              return (0, a.default)().wrap(function (o) {
                while (1) switch (o.prev = o.next) {
                  case 0:
                    if (t = e.length > 0 && void 0 !== e[0] && e[0], t) {
                      o.next = 5;
                      break;
                    }
                    if (r = n.getCache(m.default.localStorageKeys.memberSetting), u.default.$u.test.isEmpty(r)) {
                      o.next = 5;
                      break;
                    }
                    return o.abrupt("return", r);
                  case 5:
                    if (b++, 1 != b) {
                      o.next = 25;
                      break;
                    }
                    return o.next = 9, n.tenantInitSetting();
                  case 9:
                    return l = o.sent, o.next = 12, u.default.$api.getMemberGlobalSetting(l.appid);
                  case 12:
                    if (s = o.sent, "0" !== s.code || u.default.$u.test.isEmpty(s.data)) {
                      o.next = 21;
                      break;
                    }
                    return s.data.integral_config && s.data.integral_config.title || (s.data.integral_config = (0, i.default)({}, d.default.integral_config)), s.data.gold_config && s.data.gold_config.title || (s.data.gold_config = (0, i.default)({}, d.default.gold_config)), s.data.experience_config && s.data.experience_config.title || (s.data.experience_config = (0, i.default)({}, d.default.experience_config)), n.setCache(m.default.localStorageKeys.memberSetting, s.data, 86400), o.abrupt("return", s.data);
                  case 21:
                    return n.setCache(m.default.localStorageKeys.memberSetting, d.default, 86400), o.abrupt("return", d.default);
                  case 23:
                    o.next = 26;
                    break;
                  case 25:
                    return o.abrupt("return", d.default);
                  case 26:
                  case "end":
                    return o.stop();
                }
              }, o);
            }))();
          },
          checkUser: function () {
            var e = arguments,
              n = this;
            return (0, r.default)((0, a.default)().mark(function o() {
              var t, i, r, u;
              return (0, a.default)().wrap(function (o) {
                while (1) switch (o.prev = o.next) {
                  case 0:
                    return t = !(e.length > 0 && void 0 !== e[0]) || e[0], i = e.length > 1 && void 0 !== e[1] && e[1], o.next = 4, n.getUserInfo(t, "", i);
                  case 4:
                    if (r = o.sent, !r) {
                      o.next = 9;
                      break;
                    }
                    return o.abrupt("return", r);
                  case 9:
                    return o.next = 11, n.weixinOALoginFlow();
                  case 11:
                    return u = o.sent, setTimeout(function () {
                      n.reportActionEventData({
                        event: "userLogin",
                        content_type: "login"
                      });
                    }, 500), o.abrupt("return", u);
                  case 14:
                  case "end":
                    return o.stop();
                }
              }, o);
            }))();
          },
          getUserInfo: function () {
            var e = arguments,
              n = this;
            return (0, r.default)((0, a.default)().mark(function o() {
              var t, i, r, l, s, d, c;
              return (0, a.default)().wrap(function (o) {
                while (1) switch (o.prev = o.next) {
                  case 0:
                    if (t = !(e.length > 0 && void 0 !== e[0]) || e[0], i = e.length > 1 && void 0 !== e[1] ? e[1] : "", r = e.length > 2 && void 0 !== e[2] && e[2], l = n.checkIsInThirdBrowser(), !l) {
                      o.next = 11;
                      break;
                    }
                    if (!t) {
                      o.next = 9;
                      break;
                    }
                    return o.next = 8, n.checkIsLoggedYd(l);
                  case 8:
                    return o.abrupt("return", o.sent);
                  case 9:
                    o.next = 12;
                    break;
                  case 11:
                    t = !1;
                  case 12:
                    if (t) {
                      o.next = 16;
                      break;
                    }
                    if (s = uni.getStorageSync(m.default.localStorageKeys.userInfo), !s) {
                      o.next = 16;
                      break;
                    }
                    return o.abrupt("return", JSON.parse(s));
                  case 16:
                    if (d = i || uni.getStorageSync(m.default.localStorageKeys.accessToken), d) {
                      o.next = 19;
                      break;
                    }
                    return o.abrupt("return", !1);
                  case 19:
                    return o.next = 21, u.default.$api.getUserInfo({
                      access_token: d,
                      infos: r ? 1 : 0
                    });
                  case 21:
                    if (c = o.sent, "0" !== c.code) {
                      o.next = 27;
                      break;
                    }
                    return uni.setStorageSync(m.default.localStorageKeys.userInfo, JSON.stringify(c.data)), o.abrupt("return", c.data);
                  case 27:
                    return uni.removeStorageSync(m.default.localStorageKeys.accessToken), uni.removeStorageSync(m.default.localStorageKeys.userInfo), o.abrupt("return", !1);
                  case 30:
                  case "end":
                    return o.stop();
                }
              }, o);
            }))();
          },
          getUserAllInfo: function () {
            return (0, r.default)((0, a.default)().mark(function e() {
              var n, o;
              return (0, a.default)().wrap(function (e) {
                while (1) switch (e.prev = e.next) {
                  case 0:
                    if (n = uni.getStorageSync(m.default.localStorageKeys.accessToken), n) {
                      e.next = 3;
                      break;
                    }
                    return e.abrupt("return", !1);
                  case 3:
                    return e.next = 5, u.default.$api.getUserInfo({
                      access_token: n,
                      infos: 1
                    });
                  case 5:
                    if (o = e.sent, "0" !== o.code) {
                      e.next = 11;
                      break;
                    }
                    return uni.setStorageSync(m.default.localStorageKeys.userInfo, JSON.stringify(o.data)), e.abrupt("return", o.data);
                  case 11:
                    return e.abrupt("return", !1);
                  case 12:
                  case "end":
                    return e.stop();
                }
              }, e);
            }))();
          },
          weixinMiniLoginFlow: function () {
            var e = this;
            return (0, r.default)((0, a.default)().mark(function n() {
              var o, t, i, u;
              return (0, a.default)().wrap(function (n) {
                while (1) switch (n.prev = n.next) {
                  case 0:
                    if (o = uni.getStorageSync(m.default.localStorageKeys.accessToken), o) {
                      n.next = 7;
                      break;
                    }
                    return t = e, i = {}, n.abrupt("return", new Promise(function (e) {
                      uni.login({
                        provider: "weixin",
                        success: function (n) {
                          return (0, r.default)((0, a.default)().mark(function o() {
                            return (0, a.default)().wrap(function (o) {
                              while (1) switch (o.prev = o.next) {
                                case 0:
                                  i.code = n.code, uni.showModal({
                                    title: "\u6E29\u99A8\u63D0\u793A",
                                    content: "\u4EB2\uFF0C\u6388\u6743\u5FAE\u4FE1\u767B\u5F55\u540E\u624D\u80FD\u6B63\u5E38\u4F7F\u7528\u5C0F\u7A0B\u5E8F\u529F\u80FD",
                                    success: function (n) {
                                      return (0, r.default)((0, a.default)().mark(function o() {
                                        return (0, a.default)().wrap(function (o) {
                                          while (1) switch (o.prev = o.next) {
                                            case 0:
                                              n.confirm ? uni.getUserProfile({
                                                desc: "\u83B7\u53D6\u60A8\u7684\u6635\u79F0\u3001\u5934\u50CF\u3001\u5730\u533A\u53CA\u6027\u522B",
                                                success: function (n) {
                                                  return (0, r.default)((0, a.default)().mark(function o() {
                                                    var r, u;
                                                    return (0, a.default)().wrap(function (o) {
                                                      while (1) switch (o.prev = o.next) {
                                                        case 0:
                                                          return i.data = n, o.next = 3, t.weixinMiniLogin(i);
                                                        case 3:
                                                          if (r = o.sent, !r) {
                                                            o.next = 11;
                                                            break;
                                                          }
                                                          return o.next = 7, t.getUserInfo();
                                                        case 7:
                                                          u = o.sent, e(u), o.next = 13;
                                                          break;
                                                        case 11:
                                                          uni.showToast({
                                                            title: "\u767B\u5F55\u5931\u8D25",
                                                            icon: "error",
                                                            duration: 2000
                                                          }), e(!1);
                                                        case 13:
                                                        case "end":
                                                          return o.stop();
                                                      }
                                                    }, o);
                                                  }))();
                                                },
                                                fail: function (n) {
                                                  uni.showToast({
                                                    title: "\u60A8\u62D2\u7EDD\u4E86\u8BF7\u6C42,\u4E0D\u80FD\u6B63\u5E38\u4F7F\u7528\u5C0F\u7A0B\u5E8F",
                                                    icon: "error",
                                                    duration: 2000
                                                  }), e(!1);
                                                }
                                              }) : n.cancel && (uni.showToast({
                                                title: "\u60A8\u62D2\u7EDD\u4E86\u8BF7\u6C42,\u4E0D\u80FD\u6B63\u5E38\u4F7F\u7528\u5C0F\u7A0B\u5E8F",
                                                icon: "error",
                                                duration: 2000
                                              }), e(!1));
                                            case 1:
                                            case "end":
                                              return o.stop();
                                          }
                                        }, o);
                                      }))();
                                    }
                                  });
                                case 2:
                                case "end":
                                  return o.stop();
                              }
                            }, o);
                          }))();
                        }
                      });
                    }));
                  case 7:
                    return n.next = 9, e.getUserInfo();
                  case 9:
                    return u = n.sent, n.abrupt("return", u);
                  case 11:
                  case "end":
                    return n.stop();
                }
              }, n);
            }))();
          },
          weixinMiniLogin: function (e) {
            return (0, r.default)((0, a.default)().mark(function n() {
              var o, t;
              return (0, a.default)().wrap(function (n) {
                while (1) switch (n.prev = n.next) {
                  case 0:
                    return o = {
                      code: e.code,
                      profiledata: e.data.encryptedData,
                      profileiv: e.data.iv
                    }, n.next = 3, u.default.$api.wxminiLogin(o);
                  case 3:
                    if (t = n.sent, "0" !== t.code || !t.data.access_token) {
                      n.next = 9;
                      break;
                    }
                    return uni.setStorageSync(m.default.localStorageKeys.accessToken, t.data.access_token), n.abrupt("return", !0);
                  case 9:
                    return n.abrupt("return", !1);
                  case 10:
                  case "end":
                    return n.stop();
                }
              }, n);
            }))();
          },
          weixinOALoginFlow: function () {
            var e = this;
            return (0, r.default)((0, a.default)().mark(function n() {
              var o, t, i, r, u, s, d, c, g, f, p, h, y, _, w, b, v, k, C, S, P;
              return (0, a.default)().wrap(function (n) {
                while (1) switch (n.prev = n.next) {
                  case 0:
                    if (o = e.checkIsLoginByLinkParams(), !o) {
                      n.next = 13;
                      break;
                    }
                    return n.next = 4, e.autoLoginByLoginParams(o);
                  case 4:
                    if (t = n.sent, !t) {
                      n.next = 12;
                      break;
                    }
                    return n.next = 8, e.getUserInfo();
                  case 8:
                    return i = n.sent, n.abrupt("return", i);
                  case 12:
                    return n.abrupt("return", !1);
                  case 13:
                    if (r = "", u = (0, l.checkIsWechatBrowser)(), !u) {
                      n.next = 47;
                      break;
                    }
                    return n.next = 18, e.tenantInitSetting();
                  case 18:
                    if (s = n.sent, s.wx_official_appid) {
                      n.next = 21;
                      break;
                    }
                    return n.abrupt("return", !1);
                  case 21:
                    if (d = getCurrentPages(), c = d[d.length - 1], g = c.options.code || "", !g || !document.referrer) {
                      n.next = 39;
                      break;
                    }
                    return n.next = 27, e.weixinOALogin(g);
                  case 27:
                    if (f = n.sent, !f) {
                      n.next = 35;
                      break;
                    }
                    return n.next = 31, e.getUserInfo();
                  case 31:
                    return p = n.sent, n.abrupt("return", p);
                  case 35:
                    return uni.showToast({
                      title: "\u767B\u5F55\u5931\u8D25",
                      icon: "error",
                      duration: 2000
                    }), n.abrupt("return", !1);
                  case 37:
                    n.next = 45;
                    break;
                  case 39:
                    h = c.__page__.fullPath, h = h.replace(/[?&]code=[^&]*&?/g, "&"), "&" == h[h.length - 1] && (h = h.slice(0, h.length - 1)), y = "", y = h && "/" == h[0] ? window.location.protocol + "//" + location.hostname + h : window.location.protocol + "//" + location.hostname + "/" + h, e.jumpToWechatAuthorizePage(y, s.wx_official_appid, s.component_appid);
                  case 45:
                    n.next = 92;
                    break;
                  case 47:
                    if (!(r = e.checkIsInThirdBrowser())) {
                      n.next = 66;
                      break;
                    }
                    if (!m.default.thirdPlatforms[r]) {
                      n.next = 63;
                      break;
                    }
                    return n.next = 51, e.ydLogin(r);
                  case 51:
                    if (_ = n.sent, !_) {
                      n.next = 59;
                      break;
                    }
                    return n.next = 55, e.getUserInfo(!1);
                  case 55:
                    return w = n.sent, n.abrupt("return", w);
                  case 59:
                    return uni.showToast({
                      title: "\u767B\u5F55\u5931\u8D25",
                      icon: "error",
                      duration: 2000
                    }), n.abrupt("return", !1);
                  case 61:
                    n.next = 64;
                    break;
                  case 63:
                    return n.abrupt("return", !1);
                  case 64:
                    n.next = 92;
                    break;
                  case 66:
                    return n.next = 68, e.tenantInitSetting();
                  case 68:
                    if (b = n.sent, 2 != b.pc_login_mode) {
                      n.next = 91;
                      break;
                    }
                    if (v = getCurrentPages(), k = v[v.length - 1], C = k.options.code || "", !C) {
                      n.next = 88;
                      break;
                    }
                    return n.next = 76, e.weixinWebLogin(C);
                  case 76:
                    if (S = n.sent, !S) {
                      n.next = 84;
                      break;
                    }
                    return n.next = 80, e.getUserInfo();
                  case 80:
                    return P = n.sent, n.abrupt("return", P);
                  case 84:
                    return uni.showToast({
                      title: "\u767B\u5F55\u5931\u8D25",
                      icon: "error",
                      duration: 2000
                    }), n.abrupt("return", !1);
                  case 86:
                    n.next = 89;
                    break;
                  case 88:
                    return n.abrupt("return", 0);
                  case 89:
                    n.next = 92;
                    break;
                  case 91:
                    return n.abrupt("return", 0);
                  case 92:
                  case "end":
                    return n.stop();
                }
              }, n);
            }))();
          },
          weixinOALogin: function (e) {
            return (0, r.default)((0, a.default)().mark(function n() {
              var o;
              return (0, a.default)().wrap(function (n) {
                while (1) switch (n.prev = n.next) {
                  case 0:
                    return n.next = 2, u.default.$api.wxoaLogin({
                      code: e
                    });
                  case 2:
                    if (o = n.sent, "0" !== o.code || !o.data.access_token) {
                      n.next = 8;
                      break;
                    }
                    return uni.setStorageSync(m.default.localStorageKeys.accessToken, o.data.access_token), n.abrupt("return", !0);
                  case 8:
                    return n.abrupt("return", !1);
                  case 9:
                  case "end":
                    return n.stop();
                }
              }, n);
            }))();
          },
          jumpToWechatAuthorizePage: function (e, n, o) {
            var t = 1 == getApp().globalData.wx_official_auth_mode ? m.default.systemH5Domain : window.location.protocol + "//" + location.hostname,
              a = t + m.default.wechatCallbackPath + "?frompage=" + encodeURIComponent(e),
              i = m.default.wechatAuthorizeLink.replace("{APPID}", n).replace("{COMPONENT_APPID}", o).replace("{REDIRECT_URI}", encodeURIComponent(a));
            window.location.href = i;
          },
          jumpToWechatLoginAuthorizePage: function () {
            var e = this;
            return (0, r.default)((0, a.default)().mark(function n() {
              var o, t, i, r, u, l, s;
              return (0, a.default)().wrap(function (n) {
                while (1) switch (n.prev = n.next) {
                  case 0:
                    return n.next = 2, e.tenantInitSetting();
                  case 2:
                    o = n.sent, t = getCurrentPages(), i = t[t.length - 1], r = i.__page__.fullPath, u = "", u = r && "/" == r[0] ? window.location.protocol + "//" + location.hostname + r : window.location.protocol + "//" + location.hostname + "/" + r, l = window.location.protocol + "//" + location.hostname + m.default.wechatCallbackPath + "?frompage=" + encodeURIComponent(u), s = m.default.wechatLoginAuthorizeLink.replace("{APPID}", o.wx_web_appid).replace("{REDIRECT_URI}", encodeURIComponent(l)), window.location.href = s;
                  case 11:
                  case "end":
                    return n.stop();
                }
              }, n);
            }))();
          },
          weixinWebLogin: function (e) {
            return (0, r.default)((0, a.default)().mark(function n() {
              var o;
              return (0, a.default)().wrap(function (n) {
                while (1) switch (n.prev = n.next) {
                  case 0:
                    return n.next = 2, u.default.$api.wxwebLogin({
                      code: e
                    });
                  case 2:
                    if (o = n.sent, "0" !== o.code || !o.data.access_token) {
                      n.next = 8;
                      break;
                    }
                    return uni.setStorageSync(m.default.localStorageKeys.accessToken, o.data.access_token), n.abrupt("return", !0);
                  case 8:
                    return n.abrupt("return", !1);
                  case 9:
                  case "end":
                    return n.stop();
                }
              }, n);
            }))();
          },
          autoLoginByLoginParams: function (e) {
            return (0, r.default)((0, a.default)().mark(function n() {
              var o;
              return (0, a.default)().wrap(function (n) {
                while (1) switch (n.prev = n.next) {
                  case 0:
                    return n.next = 2, u.default.$api.autoLoginByLoginParams({
                      _ydautologin: e
                    });
                  case 2:
                    if (o = n.sent, "0" !== o.code || !o.data.access_token) {
                      n.next = 8;
                      break;
                    }
                    return uni.setStorageSync(m.default.localStorageKeys.accessToken, o.data.access_token), n.abrupt("return", !0);
                  case 8:
                    return n.abrupt("return", !1);
                  case 9:
                  case "end":
                    return n.stop();
                }
              }, n);
            }))();
          },
          checkIsLoginByLinkParams: function () {
            var e = getCurrentPages(),
              n = e[e.length - 1],
              o = n.options._ydautologin || "";
            return o || !1;
          },
          checkIsAllowOutLink: function (e) {
            if (u.default.$u.test.url(e)) return !0;
            var n = m.default.schemaList.some(function (n) {
              return -1 != e.search(n);
            });
            return n;
          },
          routeJump: function (e) {
            if (e) if (e && "string" === typeof e) {
              var n = "";
              if (this.checkIsAllowOutLink(e)) window.location.href = e;else if (n = this.checkIsThirdAppInnerLink(e)) {
                var o = this.checkIsInThirdBrowser();
                o && p.default[o].jumpToNews(n);
              } else if (this.checkIsThirdAppLink(e)) {
                var t = this.checkIsInThirdBrowser();
                t && p.default[t].openpaper(e);
              } else {
                var a = "",
                  i = "";
                if (0 === e.indexOf("yd://")) {
                  var r = e.slice(5),
                    u = r.split("?");
                  i = u[0];
                  var s = u[1] || "";
                  a = this.routeMap[i] && this.routeMap[i].url ? this.routeMap[i].url : "", a && s && (a = a + "?" + s);
                } else {
                  var m = e.split("#");
                  i = m[0];
                  var d = m[1] || "";
                  a = this.routeMap[i] && this.routeMap[i].url ? this.routeMap[i].url : "", a && d && (a = a + "?id=" + d);
                }
                a && i && this.routeMap[i] ? this.routeMap[i].is_tabbar ? uni.switchTab({
                  url: a
                }) : this.checkIsYdSdkBrowser() ? f.default.navigateTo({
                  uri: (0, l.getYdModulePath)(a)
                }) : uni.navigateTo({
                  url: a,
                  fail: function () {
                    uni.switchTab({
                      url: a
                    });
                  }
                }) : this.checkIsYdSdkBrowser() ? f.default.navigateTo({
                  uri: (0, l.getYdModulePath)(e)
                }) : uni.navigateTo({
                  url: e,
                  fail: function () {
                    uni.switchTab({
                      url: e
                    });
                  }
                });
              }
            } else e.type && (1 === e.type ? this.routeJump("news#" + e.id) : 2 === e.type ? this.routeJump("tuji#" + e.id) : 3 === e.type ? this.routeJump("video#" + e.id) : 4 === e.type && this.routeJump(e.outlink));
          },
          checkIsThirdAppInnerLink: function () {
            var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : "";
            if (!e) return !1;
            var n = "appinner://",
              o = e.startsWith(n);
            if (o) {
              var t = e.replace(n, "");
              return t;
            }
            return !1;
          },
          checkIsThirdAppLink: function () {
            var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : "";
            if (!e) return !1;
            var n = ["yp://"];
            return n.some(function (n) {
              return e.startsWith(n);
            });
          },
          reportActionEventData: function () {
            var e = arguments,
              n = this;
            return (0, r.default)((0, a.default)().mark(function o() {
              var t, i, r, s, d, c, g, f, p, h, y, _, w;
              return (0, a.default)().wrap(function (o) {
                while (1) switch (o.prev = o.next) {
                  case 0:
                    if (t = e.length > 0 && void 0 !== e[0] ? e[0] : {}, i = e.length > 1 && void 0 !== e[1] ? e[1] : null, t.event) {
                      o.next = 4;
                      break;
                    }
                    return o.abrupt("return");
                  case 4:
                    return r = getCurrentPages(), s = r[r.length - 1], o.next = 8, n.getNetworkType();
                  case 8:
                    return d = o.sent, c = {
                      longitude: 0,
                      latitude: 0,
                      province: "",
                      city: "",
                      area: "",
                      street: "",
                      address: ""
                    }, g = (0, l.getPlatform)(), f = uni.getSystemInfoSync(), p = {
                      id: 0,
                      name: "",
                      phone_num: ""
                    }, h = n.getUserInfoFromLocalStorage(!1), h && (p = h), y = n.moduleMap[t.content_type] || "", _ = {
                      _need_stat: t.hasOwnProperty("_need_stat") ? t._need_stat : 1,
                      _need_task: t.hasOwnProperty("_need_task") ? t._need_task : 0,
                      _need_behavior: t.hasOwnProperty("_need_behavior") ? t._need_behavior : 1,
                      event: t.event,
                      action: t.action || m.default.actionEvents[t.event].action,
                      brief: t.brief || m.default.actionEvents[t.event].title,
                      client_type: g,
                      module_id: y,
                      content_id: t.content_id || 0,
                      num: t.num || 1,
                      duration: t.duration || 0,
                      column_id: t.column_id || 0,
                      column_title: t.column_title || "",
                      title: t.title || "",
                      device_token: f.deviceId,
                      user_id: p.id || 0,
                      user_name: p.name || "",
                      phone_num: p.phone_num || "",
                      page_path: s.route || "",
                      version: m.default.version,
                      network: d,
                      client_model: f.platform,
                      system_version: f.system,
                      resolution: "",
                      baidu_longitude: "",
                      baidu_latitude: "",
                      longitude: c.longitude,
                      latitude: c.latitude,
                      province: c.province,
                      city: c.city,
                      area: c.area,
                      street: c.street,
                      address: c.address
                    }, o.next = 19, u.default.$api.reportActionEventData(_);
                  case 19:
                    w = o.sent, "0" === w.code && i && i(w.data);
                  case 21:
                  case "end":
                    return o.stop();
                }
              }, o);
            }))();
          },
          getNetworkType: function () {
            return (0, r.default)((0, a.default)().mark(function e() {
              return (0, a.default)().wrap(function (e) {
                while (1) switch (e.prev = e.next) {
                  case 0:
                    return e.abrupt("return", new Promise(function (e) {
                      uni.getNetworkType({
                        success: function (n) {
                          e(n.networkType);
                        },
                        fail: function () {
                          e("unknown");
                        }
                      });
                    }));
                  case 1:
                  case "end":
                    return e.stop();
                }
              }, e);
            }))();
          },
          getLocationInfo: function () {
            var e = this;
            return (0, r.default)((0, a.default)().mark(function n() {
              return (0, a.default)().wrap(function (n) {
                while (1) switch (n.prev = n.next) {
                  case 0:
                    return n.abrupt("return", new Promise(function (n) {
                      var o = {
                        longitude: 0,
                        latitude: 0,
                        province: "",
                        city: "",
                        area: "",
                        street: "",
                        address: ""
                      };
                      (0, l.checkIsWechatBrowser)() ? e.initWeixinSdkConfig(function () {
                        _.ready(function () {
                          _.getLocation({
                            type: "gcj02",
                            success: function (e) {
                              o.longitude = e.longitude, o.latitude = e.latitude, n(o);
                            },
                            fail: function (e) {
                              n(o);
                            }
                          });
                        });
                      }) : navigator.geolocation.getCurrentPosition(function (e) {
                        o.longitude = e.coords.longitude, o.latitude = e.coords.latitude, n(o);
                      }, function (e) {
                        n(o);
                      });
                    }));
                  case 1:
                  case "end":
                    return n.stop();
                }
              }, n);
            }))();
          },
          setMemberStatData: function () {
            var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : "",
              n = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : "",
              o = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 0;
            if (e && n && o) {
              var t = uni.getSystemInfoSync(),
                a = t.deviceId,
                i = [a, e, n].join(":"),
                r = uni.getStorageSync(i),
                u = {};
              r ? (u = JSON.parse(r), u[o] ? delete u[o] : u[o] = o) : u[o] = o, uni.setStorageSync(i, JSON.stringify(u));
            }
          },
          getMemberStatData: function () {
            var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : "",
              n = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : "",
              o = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 0;
            if (!e || !n) return 0;
            var t = uni.getSystemInfoSync(),
              a = t.deviceId,
              i = [a, e, n].join(":"),
              r = uni.getStorageSync(i);
            if (r) {
              var u = JSON.parse(r);
              return o ? u[o] ? u[o] : 0 : Object.values(u);
            }
            return o ? 0 : [];
          },
          initWeixinShareConfig: function () {
            var e = arguments,
              n = this;
            return (0, r.default)((0, a.default)().mark(function o() {
              var t, i;
              return (0, a.default)().wrap(function (o) {
                while (1) switch (o.prev = o.next) {
                  case 0:
                    if (t = e.length > 0 && void 0 !== e[0] ? e[0] : {}, i = e.length > 1 && void 0 !== e[1] ? e[1] : null, (0, l.checkIsWechatBrowser)()) {
                      o.next = 4;
                      break;
                    }
                    return o.abrupt("return");
                  case 4:
                    n.initWeixinSdkConfig(function () {
                      var e = window.location.href.split("#")[0];
                      _.ready(function () {
                        var n = {
                          title: t.title || "",
                          desc: t.desc || "",
                          link: t.linkUrl || e,
                          imgUrl: t.imageUrl || "",
                          success: function (e) {}
                        };
                        _.updateAppMessageShareData(n), _.updateTimelineShareData(n), i && i();
                      });
                    });
                  case 5:
                  case "end":
                    return o.stop();
                }
              }, o);
            }))();
          },
          initWeixinSdkConfig: function () {
            var e = arguments;
            return (0, r.default)((0, a.default)().mark(function n() {
              var o, t, i;
              return (0, a.default)().wrap(function (n) {
                while (1) switch (n.prev = n.next) {
                  case 0:
                    if (o = e.length > 0 && void 0 !== e[0] ? e[0] : null, (0, l.checkIsWechatBrowser)()) {
                      n.next = 3;
                      break;
                    }
                    return n.abrupt("return");
                  case 3:
                    return t = window.location.href.split("#")[0], n.next = 6, u.default.$api.getwxjsConfig({
                      url: encodeURIComponent(t)
                    });
                  case 6:
                    i = n.sent, i && (_.config({
                      debug: !!i.debug,
                      appId: i.appId,
                      timestamp: i.timestamp,
                      nonceStr: i.nonceStr,
                      signature: i.signature,
                      jsApiList: i.jsApiList,
                      openTagList: ["wx-open-launch-app"]
                    }), o && o(i));
                  case 8:
                  case "end":
                    return n.stop();
                }
              }, n);
            }))();
          },
          getHeaderInfoByYdJssdk: function () {
            return (0, r.default)((0, a.default)().mark(function e() {
              return (0, a.default)().wrap(function (e) {
                while (1) switch (e.prev = e.next) {
                  case 0:
                    return e.abrupt("return", new Promise(function (e) {
                      f.default.getHeaderInfo(function (n) {
                        e(n);
                      });
                    }));
                  case 1:
                  case "end":
                    return e.stop();
                }
              }, e);
            }))();
          },
          getUserInfoByYdJssdk: function () {
            return (0, r.default)((0, a.default)().mark(function e() {
              return (0, a.default)().wrap(function (e) {
                while (1) switch (e.prev = e.next) {
                  case 0:
                    return e.abrupt("return", new Promise(function (e) {
                      f.default.getUserInfo(function (n) {
                        "0" === n.code ? e(n.data) : e(!1);
                      });
                    }));
                  case 1:
                  case "end":
                    return e.stop();
                }
              }, e);
            }))();
          },
          getHeaderInfoByYdNativeSdk: function () {
            return (0, r.default)((0, a.default)().mark(function e() {
              return (0, a.default)().wrap(function (e) {
                while (1) switch (e.prev = e.next) {
                  case 0:
                    return e.abrupt("return", new Promise(function (e) {
                      YDNativeSDK.getHeaderInfo(function (n) {
                        var o = n ? JSON.parse(n) : {};
                        e(o);
                      });
                    }));
                  case 1:
                  case "end":
                    return e.stop();
                }
              }, e);
            }))();
          },
          getUserInfoByYdNativeSdk: function () {
            return (0, r.default)((0, a.default)().mark(function e() {
              return (0, a.default)().wrap(function (e) {
                while (1) switch (e.prev = e.next) {
                  case 0:
                    return e.abrupt("return", new Promise(function (e) {
                      YDNativeSDK.getUserInfo({
                        needlogin: 1
                      }, function (n) {
                        if (n) {
                          var o = JSON.parse(n);
                          "0" === o.code ? e(o.data) : e(!1);
                        } else e(!1);
                      });
                    }));
                  case 1:
                  case "end":
                    return e.stop();
                }
              }, e);
            }))();
          },
          setCache: function (e, n) {
            var o = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 0,
              t = {
                data: n,
                time: Date.now() / 1000,
                expire: o
              };
            uni.setStorageSync(e, JSON.stringify(t));
          },
          getCache: function (e) {
            var n = uni.getStorageSync(e);
            return n ? (n = JSON.parse(n), n.expire && Date.now() / 1000 - n.time > n.expire ? (uni.removeStorageSync(e), null) : n.data) : null;
          },
          goodsPriceFormat: function (e) {
            var n = arguments.length > 1 && void 0 !== arguments[1] && arguments[1],
              o = arguments.length > 2 ? arguments[2] : void 0,
              t = [];
            e.integral && t.push(e.integral + o.integral_config.title), e.gold && t.push(e.gold + o.gold_config.title);
            var a = e.price ? parseFloat(e.price) : 0;
            return n && (a += parseFloat(e.courier_price)), a > 0 && (a = Math.floor(100 * a) / 100, t.push(a + "\u5143")), t.length ? t.join("+") : "0\u5143";
          },
          checkIsInBusinessWriteOffEnv: function () {
            var e = getCurrentPages(),
              n = e[e.length - 1];
            return -1 !== n.route.indexOf("module-mall/writeoff") || -1 !== n.route.indexOf("module-lottery/writeoff") || -1 !== n.route.indexOf("module-mall/customer/pre-sales-customer") || -1 !== n.route.indexOf("module-mall/customer/customer-new") || -1 !== n.route.indexOf("module-mall/writeoff/manage");
          },
          getMallBusinessAccess: function () {
            return this.getCache(m.default.localStorageKeys.businessAccessToken);
          },
          getBusinessAccountInfo: function () {
            var e = this;
            return (0, r.default)((0, a.default)().mark(function n() {
              var o, t, i, r;
              return (0, a.default)().wrap(function (n) {
                while (1) switch (n.prev = n.next) {
                  case 0:
                    if (o = e.getMallBusinessAccess(), o) {
                      n.next = 3;
                      break;
                    }
                    return n.abrupt("return", !1);
                  case 3:
                    if (t = e.getCache(m.default.localStorageKeys.businessAccountInfo), !t) {
                      n.next = 6;
                      break;
                    }
                    return n.abrupt("return", t);
                  case 6:
                    return n.next = 8, u.default.$api.getBusinessAccountInfo({
                      access_token: o.access_token
                    });
                  case 8:
                    if (i = n.sent, "0" !== i.code) {
                      n.next = 15;
                      break;
                    }
                    return r = {
                      account: i.data,
                      access: o
                    }, e.setCache(m.default.localStorageKeys.businessAccountInfo, r, 7200), n.abrupt("return", r);
                  case 15:
                    return uni.removeStorageSync(m.default.localStorageKeys.businessAccessToken), uni.removeStorageSync(m.default.localStorageKeys.businessAccountInfo), n.abrupt("return", !1);
                  case 18:
                  case "end":
                    return n.stop();
                }
              }, n);
            }))();
          },
          ydSignParams: function () {
            var e = arguments,
              n = this;
            return (0, r.default)((0, a.default)().mark(function o() {
              var t, r, s, m;
              return (0, a.default)().wrap(function (o) {
                while (1) switch (o.prev = o.next) {
                  case 0:
                    return t = e.length > 0 && void 0 !== e[0] ? e[0] : {}, r = (0, i.default)({}, t), r.noncestr = u.default.$u.guid(6, !1), r.timestamp = parseInt(new Date().getTime() / 1000), o.next = 6, n.tenantInitSetting();
                  case 6:
                    return s = o.sent, r.appid = s.appid, r = (0, l.kSort)(r), m = c.default.md5((0, l.objToQueryParams)(r, !1) + "&appkey=" + s.appkey), r.signature = m, o.abrupt("return", r);
                  case 12:
                  case "end":
                    return o.stop();
                }
              }, o);
            }))();
          },
          ydUserInit: function (e, n) {
            var o = arguments,
              t = this;
            return (0, r.default)((0, a.default)().mark(function i() {
              var r, l, s, m, d, c, g;
              return (0, a.default)().wrap(function (a) {
                while (1) switch (a.prev = a.next) {
                  case 0:
                    return r = o.length > 2 && void 0 !== o[2] ? o[2] : "", l = o.length > 3 && void 0 !== o[3] ? o[3] : "", s = o.length > 4 && void 0 !== o[4] ? o[4] : "", m = o.length > 5 && void 0 !== o[5] ? o[5] : "", d = o.length > 6 && void 0 !== o[6] ? o[6] : "", c = {}, c.user_id = e, c.user_name = n, c.portrait_url = r, c.phone = l, c.wx_openid = s, c.wx_unionid = m, c.app_user_token = d, a.next = 15, t.ydSignParams(c);
                  case 15:
                    return c = a.sent, a.next = 18, u.default.$api.appUserInit(c);
                  case 18:
                    return g = a.sent, a.abrupt("return", g);
                  case 20:
                  case "end":
                    return a.stop();
                }
              }, i);
            }))();
          },
          ydLogin: function () {
            var e = arguments,
              n = this;
            return (0, r.default)((0, a.default)().mark(function o() {
              var t;
              return (0, a.default)().wrap(function (o) {
                while (1) switch (o.prev = o.next) {
                  case 0:
                    if (t = e.length > 0 && void 0 !== e[0] ? e[0] : "", t) {
                      o.next = 3;
                      break;
                    }
                    return o.abrupt("return", !1);
                  case 3:
                    return o.abrupt("return", new Promise(function (e) {
                      p.default[t].getUserInfo(function () {
                        var o = (0, r.default)((0, a.default)().mark(function o(i) {
                          var r;
                          return (0, a.default)().wrap(function (o) {
                            while (1) switch (o.prev = o.next) {
                              case 0:
                                if (i) {
                                  o.next = 5;
                                  break;
                                }
                                return n.clearLoginInfo(), uni.removeStorageSync(m.default.localStorageKeys.thirdPrefix + t), e(!1), o.abrupt("return");
                              case 5:
                                return o.next = 7, n._thirdUserInfoInitBefore(t, i);
                              case 7:
                                r = o.sent, e(r);
                              case 9:
                              case "end":
                                return o.stop();
                            }
                          }, o);
                        }));
                        return function (e) {
                          return o.apply(this, arguments);
                        };
                      }());
                    }));
                  case 4:
                  case "end":
                    return o.stop();
                }
              }, o);
            }))();
          },
          _thirdUserInfoInitBefore: function (e, n) {
            var o = this;
            return (0, r.default)((0, a.default)().mark(function t() {
              var i;
              return (0, a.default)().wrap(function (t) {
                while (1) switch (t.prev = t.next) {
                  case 0:
                    if (!n) {
                      t.next = 13;
                      break;
                    }
                    return t.next = 3, o.ydUserInit(n.user_id, decodeURIComponent(n.user_name), n.portrait_url, n.phone, n.wx_openid, n.wx_unionid, n.app_user_token);
                  case 3:
                    if (i = t.sent, !i || "0" !== i.code) {
                      t.next = 10;
                      break;
                    }
                    return uni.setStorageSync(m.default.localStorageKeys.accessToken, i.data.access_token), o.setCache(m.default.localStorageKeys.thirdPrefix + e, n), t.abrupt("return", !0);
                  case 10:
                    return t.abrupt("return", !1);
                  case 11:
                    t.next = 16;
                    break;
                  case 13:
                    return o.clearLoginInfo(), uni.removeStorageSync(m.default.localStorageKeys.thirdPrefix + e), t.abrupt("return", !1);
                  case 16:
                  case "end":
                    return t.stop();
                }
              }, t);
            }))();
          },
          checkIsLoggedYd: function () {
            var e = arguments,
              n = this;
            return (0, r.default)((0, a.default)().mark(function o() {
              var t;
              return (0, a.default)().wrap(function (o) {
                while (1) switch (o.prev = o.next) {
                  case 0:
                    if (t = e.length > 0 && void 0 !== e[0] ? e[0] : "", t) {
                      o.next = 3;
                      break;
                    }
                    return o.abrupt("return", !1);
                  case 3:
                    return o.abrupt("return", new Promise(function (e) {
                      p.default[t].getUserInfo(function (o) {
                        if (o) {
                          var a = n._thirdGetUserInfoAfter(t, o);
                          e(a);
                        } else n.clearLoginInfo(), e(!1);
                      });
                    }));
                  case 4:
                  case "end":
                    return o.stop();
                }
              }, o);
            }))();
          },
          _thirdGetUserInfoAfter: function (e, n) {
            if (n) {
              var o = this.getUserInfoFromLocalStorage(!1);
              if (o) {
                var t = this.getCache(m.default.localStorageKeys.thirdPrefix + e);
                return t && t["app_user_token"] == n["app_user_token"] && t["user_id"] == n["user_id"] && t["user_name"] == n["user_name"] ? o : (this.clearLoginInfo(), !1);
              }
              return !1;
            }
            return this.clearLoginInfo(), !1;
          },
          tenantInitSetting: function () {
            var n = this;
            return (0, r.default)((0, a.default)().mark(function o() {
              var t, r, u, l, s;
              return (0, a.default)().wrap(function (o) {
                while (1) switch (o.prev = o.next) {
                  case 0:
                    if (o.prev = 0, t = n.getCache(m.default.localStorageKeys.tenantSettingInfo), !t) {
                      o.next = 6;
                      break;
                    }
                    getApp().globalData = (0, i.default)((0, i.default)({}, getApp().globalData), t), o.next = 14;
                    break;
                  case 6:
                    if (r = location.hostname.split("."), 4 !== r.length) {
                      o.next = 14;
                      break;
                    }
                    return u = r[0], u = u.split("-")[0], o.next = 12, (0, g.tenantH5Init)(u);
                  case 12:
                    l = o.sent, "0" === l.code && l.data && (s = JSON.parse(atob(l.data)), n.setCache(m.default.localStorageKeys.tenantSettingInfo, s, 2592000), getApp().globalData = (0, i.default)((0, i.default)({}, getApp().globalData), s));
                  case 14:
                    return o.abrupt("return", getApp().globalData);
                  case 17:
                    return o.prev = 17, o.t0 = o["catch"](0), e.log("err:" + o.t0), o.abrupt("return", getApp().globalData);
                  case 21:
                  case "end":
                    return o.stop();
                }
              }, o, null, [[0, 17]]);
            }))();
          },
          getWebsocketUrl: function (e) {
            var n = arguments,
              o = this;
            return (0, r.default)((0, a.default)().mark(function t() {
              var r, u, s, d, c;
              return (0, a.default)().wrap(function (t) {
                while (1) switch (t.prev = t.next) {
                  case 0:
                    return r = n.length > 1 && void 0 !== n[1] ? n[1] : {}, u = m.default.websocketUrls[e], s = uni.getSystemInfoSync(), d = o.getUserInfoFromLocalStorage(!1), c = (0, i.default)({
                      device_token: s.deviceId,
                      user_id: d && d.id || 0,
                      user_name: d && d.name || "",
                      longitude: 0,
                      latitude: 0,
                      locationtype: 2,
                      access_t_id: getApp().globalData.t_id
                    }, r), t.abrupt("return", u + (0, l.objToQueryParams)(c));
                  case 6:
                  case "end":
                    return t.stop();
                }
              }, t);
            }))();
          },
          checkIsShowFooterNav: function () {
            var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : null;
            return !this.checkIsInThirdBrowser() && !this.checkIsYdSdkBrowser() && (e ? !(!e.style || !e.style.app_download_boot) : getApp().globalData.app && 1 === getApp().globalData.app.open);
          },
          checkIsCanJoinActivity: function () {
            var e = this,
              n = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : [],
              o = !(arguments.length > 1 && void 0 !== arguments[1]) || arguments[1],
              t = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : "";
            if (this.checkIsInThirdBrowser() || this.checkIsYdSdkBrowser()) return !0;
            var a = getApp().globalData.app.android.app_name || "",
              i = !0,
              r = "\u8BF7\u5728".concat(a, "APP\u4E2D\u53C2\u4E0E\u6D3B\u52A8"),
              l = "\u8BF7\u524D\u5F80\u5E94\u7528\u5E02\u573A\u4E0B\u8F7D".concat(a, "APP\u53C2\u4E0E\u8BE5\u6D3B\u52A8\uFF01");
            return this.checkIsWechatBrowser() ? i = n.includes(1) : (i = n.includes(2), !i && n.includes(1) && (r = "\u8BF7\u5728".concat(a, "APP\u6216\u5FAE\u4FE1\u4E2D\u6253\u5F00\u53C2\u4E0E\u6D3B\u52A8"), l = "\u8BF7\u524D\u5F80\u5E94\u7528\u5E02\u573A\u4E0B\u8F7D".concat(a, "APP\u6216\u5728\u5FAE\u4FE1\u4E2D\u6253\u5F00\u53C2\u4E0E\u8BE5\u6D3B\u52A8\uFF01"))), i || uni.showModal({
              title: "\u53CB\u60C5\u63D0\u793A",
              content: r,
              showCancel: o,
              success: function (n) {
                var o = getApp().globalData.h5_domain + e.getCurrentPagePath(),
                  a = e.getProtocolLink(o);
                if (e.copyText(a), n.confirm) {
                  var i = getApp().globalData.app,
                    r = uni.getSystemInfoSync();
                  "ios" === r.platform ? t ? e.routeJump(e.getFilterAppDownloadUrl(t, o)) : i.ios.download_url ? e.routeJump(e.getFilterAppDownloadUrl(i.ios.download_url, o)) : u.default.$u.toast(l) : t ? e.routeJump(e.getFilterAppDownloadUrl(t, o)) : i.android.download_url ? e.routeJump(e.getFilterAppDownloadUrl(i.android.download_url, o)) : u.default.$u.toast(l);
                }
              }
            }), i;
          },
          getFilterAppDownloadUrl: function () {
            var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : "",
              n = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : "";
            if (!e) return "";
            var o = e;
            if (n) {
              if (o = o.replace("{link}", encodeURIComponent(n)), -1 != o.search("{title}")) {
                var t = getCurrentPages(),
                  a = t[t.length - 1];
                a && a.activityDetail && a.activityDetail.title && (o = o.replace("{title}", a.activityDetail.title));
              }
              "jsxww" == getApp().globalData.appid && (o = this.getInJsShareUrl(o, n));
            }
            return o;
          },
          getUserInfoFromLocalStorage: function () {
            var n = arguments.length > 0 && void 0 !== arguments[0] && arguments[0],
              o = arguments.length > 1 && void 0 !== arguments[1] && arguments[1],
              t = uni.getStorageSync(m.default.localStorageKeys.userInfo);
            t = t ? JSON.parse(t) : null;
            var a = this.checkIsInThirdBrowser();
            return !t && a && n && this.checkIsNeedLoginTip() && (o ? p.default[a].goToLoginPage() : uni.showModal({
              title: "\u53CB\u60C5\u63D0\u793A",
              content: "\u8BF7\u60A8\u5148\u767B\u5F55",
              success: function (n) {
                n.confirm ? p.default[a].goToLoginPage() : n.cancel && e.log("\u7528\u6237\u70B9\u51FB\u53D6\u6D88");
              }
            })), t;
          },
          checkIsNeedLoginTip: function () {
            var e = getCurrentPages(),
              n = e[e.length - 1];
            return !(n && n.options && n.options.no_need_login_tip);
          },
          getCollectedUserInfo: function () {
            var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : "",
              n = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0;
            if (!e || !n) return null;
            var o = m.default.localStorageKeys.userinfoCollection + "_" + e + "_" + n,
              t = this.getUserInfoFromLocalStorage(),
              a = 0;
            t && (a = t.id);
            var i = m.default.localStorageKeys.userinfoCollection + "_" + e + "_" + n + "_" + a,
              r = uni.getStorageSync(i);
            return r || (r = uni.getStorageSync(o), r) ? (r = JSON.parse(r), r.data) : null;
          },
          getMallCollectedUserInfo: function () {
            var e = m.default.localStorageKeys.mallOrderUserinfoCollection;
            return this.getCache(e);
          },
          checkIsPreviewMode: function () {
            var e = getCurrentPages(),
              n = e[e.length - 1];
            return n.options && n.options["_from_ydpreview"];
          },
          stringToArray: function () {
            var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : "",
              n = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : "|";
            return e ? e.split(n) : [];
          },
          getOssUploadInfo: function (e, n) {
            var o = arguments;
            return (0, r.default)((0, a.default)().mark(function t() {
              var i, r, u, s;
              return (0, a.default)().wrap(function (t) {
                while (1) switch (t.prev = t.next) {
                  case 0:
                    i = o.length > 2 && void 0 !== o[2] ? o[2] : {}, r = {
                      method: "post",
                      module_id: e.module_id,
                      content_folder: e.content_folder,
                      name: n.name,
                      size: n.size,
                      type: n.type
                    }, t.t0 = (0, l.getFileType)(n.name), t.next = "image" === t.t0 ? 5 : "video" === t.t0 ? 8 : "audio" === t.t0 ? 12 : 14;
                    break;
                  case 5:
                    return i.width && (r.width = i.width), i.height && (r.height = i.height), t.abrupt("break", 14);
                  case 8:
                    return r.duration = i.duration, r.width = i.width, r.height = i.height, t.abrupt("break", 14);
                  case 12:
                    return r.duration = i.duration, t.abrupt("break", 14);
                  case 14:
                    return t.next = 16, (0, g.getOssUploadUrl)(r);
                  case 16:
                    if (u = t.sent, "0" !== u.code) {
                      t.next = 22;
                      break;
                    }
                    return s = {
                      url: u.data.url,
                      formData: {
                        key: u.data.object,
                        AccessKeyId: u.data.accesskeyid,
                        Policy: u.data.policy,
                        Signature: u.data.signature,
                        "x-obs-acl": "public-read",
                        "content-type": n.type
                      },
                      object: u.data.object,
                      mdata: u.data.mdata
                    }, t.abrupt("return", s);
                  case 22:
                    return uni.showToast({
                      title: u.msg,
                      icon: "error",
                      duration: 2000
                    }), t.abrupt("return");
                  case 24:
                  case "end":
                    return t.stop();
                }
              }, t);
            }))();
          },
          wxTempFileToObject: function (e) {
            var n = e.tempFilePath.split("/").pop(),
              o = {},
              t = n.lastIndexOf("."),
              a = n.substr(t + 1);
            switch ((0, l.getFileType)(n)) {
              case "image":
                o.name = n, o.size = e.size, o.tempFile = {
                  name: n,
                  size: e.size,
                  type: "image/" + a
                };
                break;
              case "video":
                o.name = n, o.width = e.width, o.height = e.height, o.size = e.size, o.duration = e.duration, o.tempFile = {
                  name: n,
                  size: e.size,
                  type: "video/" + a
                };
                break;
              case "audio":
                o.name = n, o.size = e.size, o.duration = e.duration, o.tempFile = {
                  name: n,
                  size: e.size,
                  type: "audio" + a
                };
                break;
            }
            return o;
          },
          objectURLToFile: function (e) {
            return uni.showLoading({
              title: "\u538B\u7F29\u4E2D..."
            }), new Promise(function (n, o) {
              var t = new XMLHttpRequest();
              t.open("GET", e, !0), t.responseType = "blob", t.onload = function (o) {
                if (200 == this.status || 0 === this.status) {
                  var t = c.default.md5(e) + ".mp3",
                    a = new File([this.response], t, {
                      type: this.response.type
                    });
                  n(a), uni.hideLoading();
                }
              }, t.send();
            });
          },
          handleUserIsBindWechat: function () {
            var n = this;
            return (0, r.default)((0, a.default)().mark(function o() {
              var t, i, l, s, m;
              return (0, a.default)().wrap(function (o) {
                while (1) switch (o.prev = o.next) {
                  case 0:
                    return o.next = 2, n.checkUserIsBindWechat();
                  case 2:
                    return t = o.sent, i = !(!t || !t.bind), i || (l = getApp().globalData.app.android.app_name || "", s = "\u8BF7\u5728".concat(l, "APP\u4E2D\u7ED1\u5B9A\u5FAE\u4FE1\u8D26\u53F7"), m = n.checkIsInThirdBrowser(), m ? t && 1 == t.bind_type && !u.default.$u.test.isEmpty(t.bind_data) ? uni.showModal({
                      title: "\u53CB\u60C5\u63D0\u793A",
                      content: "\u60A8\u9700\u8981\u7ED1\u5B9A\u5FAE\u4FE1\u624D\u53EF\u53C2\u4E0E\u6D3B\u52A8",
                      confirmText: "\u53BB\u7ED1\u5B9A",
                      success: function () {
                        var e = (0, r.default)((0, a.default)().mark(function e(o) {
                          var i, r;
                          return (0, a.default)().wrap(function (e) {
                            while (1) switch (e.prev = e.next) {
                              case 0:
                                if (!o.confirm) {
                                  e.next = 6;
                                  break;
                                }
                                return i = {
                                  bind_t_id: t.bind_data.bind_t_id || "",
                                  bind_wx_user_id: t.bind_data.bind_wx_user_id || "",
                                  bind_wx_sign: t.bind_data.bind_wx_sign || ""
                                }, e.next = 4, n.getWeixinPayMiniProUrl(i);
                              case 4:
                                r = e.sent, r && (window.location.href = r);
                              case 6:
                              case "end":
                                return e.stop();
                            }
                          }, e);
                        }));
                        return function (n) {
                          return e.apply(this, arguments);
                        };
                      }()
                    }) : "hg" === m ? uni.showModal({
                      title: "\u53CB\u60C5\u63D0\u793A",
                      content: s,
                      success: function (n) {
                        if (n.confirm) {
                          var o = getApp().globalData.appid;
                          "wxbb" == o ? p.default[m].linkTo("goToLogin/my1/ModUserCenterStyle19UpdateInfo") : p.default[m].goUcenter();
                        } else n.cancel && e.log("\u7528\u6237\u70B9\u51FB\u53D6\u6D88");
                      }
                    }) : u.default.$u.toast(s) : u.default.$u.toast(s)), o.abrupt("return", i);
                  case 6:
                  case "end":
                    return o.stop();
                }
              }, o);
            }))();
          },
          checkUserIsBindWechat: function () {
            return (0, r.default)((0, a.default)().mark(function e() {
              var n;
              return (0, a.default)().wrap(function (e) {
                while (1) switch (e.prev = e.next) {
                  case 0:
                    return e.next = 2, u.default.$api.checkUserIsBindWechat();
                  case 2:
                    if (n = e.sent, "0" !== n.code) {
                      e.next = 7;
                      break;
                    }
                    return e.abrupt("return", n.data);
                  case 7:
                    return e.abrupt("return", !1);
                  case 8:
                  case "end":
                    return e.stop();
                }
              }, e);
            }))();
          },
          getWeixinPayMiniProUrl: function () {
            var e = arguments,
              n = this;
            return (0, r.default)((0, a.default)().mark(function o() {
              var t, i, r, s;
              return (0, a.default)().wrap(function (o) {
                while (1) switch (o.prev = o.next) {
                  case 0:
                    return t = e.length > 0 && void 0 !== e[0] ? e[0] : {}, i = e.length > 1 && void 0 !== e[1] ? e[1] : "bind", o.next = 4, n.tenantInitSetting();
                  case 4:
                    return r = o.sent, uni.showLoading({
                      title: "\u6B63\u5728\u8DF3\u8F6C\u5230\u5FAE\u4FE1..."
                    }), o.next = 8, u.default.$api.getWeixinMiniProUrl({
                      env_version: "release",
                      path: "/pages/".concat(i, "/").concat(i),
                      query: (0, l.objToQueryParams)(t, !1),
                      access_t_id: r.t_id,
                      access_t_id_in: r.t_id_in
                    });
                  case 8:
                    if (s = o.sent, uni.hideLoading(), "0" !== s.code || !s.data || !s.data.openlink) {
                      o.next = 14;
                      break;
                    }
                    return o.abrupt("return", s.data.openlink);
                  case 14:
                    return o.abrupt("return", "");
                  case 15:
                  case "end":
                    return o.stop();
                }
              }, o);
            }))();
          },
          initAppShareConfig: function () {
            var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {},
              n = this.checkIsInThirdBrowser();
            if (n) {
              var o = window.location.href.split("#")[0];
              p.default[n].shareTo({
                title: e.title || "",
                brief: e.desc || "",
                link_url: e.linkUrl || o,
                indexpic: e.imageUrl || ""
              });
            }
          },
          jumpToAppDownloadUrl: function () {
            var e = this,
              n = this.checkIsInThirdBrowser();
            if (!n) {
              var o = "\u8BF7\u524D\u5F80\u5E94\u7528\u5E02\u573A\u4E0B\u8F7DAPP\u53C2\u4E0E\u6D3B\u52A8\uFF01";
              uni.showModal({
                title: "\u53CB\u60C5\u63D0\u793A",
                content: o,
                showCancel: !1,
                success: function (n) {
                  var t = getApp().globalData.h5_domain + e.getCurrentPagePath(),
                    a = e.getProtocolLink(t);
                  if (e.copyText(a), n.confirm) {
                    var i = getApp().globalData.app,
                      r = uni.getSystemInfoSync();
                    "ios" === r.platform ? i.ios.download_url ? e.routeJump(e.getFilterAppDownloadUrl(i.ios.download_url, t)) : u.default.$u.toast(o) : i.android.download_url ? e.routeJump(e.getFilterAppDownloadUrl(i.android.download_url, t)) : u.default.$u.toast(o);
                  }
                }
              });
            }
          },
          jumpToWechat: function () {
            window.location.href = "weixin://";
          },
          openVConsole: function () {
            if (!w) {
              var e = getCurrentPages();
              if (!u.default.$u.test.isEmpty(e)) {
                var n = e[e.length - 1],
                  o = n.options && n.options["_vconsole"] ? parseInt(n.options["_vconsole"]) : 0;
                o && (w = new y.default());
              }
            }
          },
          getWeixinMiniProUrl: function () {
            var e = arguments;
            return (0, r.default)((0, a.default)().mark(function n() {
              var o, t, r, s;
              return (0, a.default)().wrap(function (n) {
                while (1) switch (n.prev = n.next) {
                  case 0:
                    return o = e.length > 0 && void 0 !== e[0] ? e[0] : {}, t = e.length > 1 && void 0 !== e[1] ? e[1] : "redpacket", r = (0, i.default)((0, i.default)({}, o), {}, {
                      hide_back: 1
                    }), uni.showLoading({
                      title: "\u6B63\u5728\u8DF3\u8F6C\u5230\u5FAE\u4FE1..."
                    }), n.next = 6, u.default.$api.getWeixinMiniProUrl({
                      env_version: "release",
                      path: "/module-" + t + "/home/home",
                      query: (0, l.objToQueryParams)(r, !1),
                      access_t_id: 1,
                      access_t_id_in: 1
                    });
                  case 6:
                    if (s = n.sent, uni.hideLoading(), "0" !== s.code || !s.data || !s.data.openlink) {
                      n.next = 12;
                      break;
                    }
                    return n.abrupt("return", s.data.openlink);
                  case 12:
                    return n.abrupt("return", "");
                  case 13:
                  case "end":
                    return n.stop();
                }
              }, n);
            }))();
          },
          checkIsFollowOfficialAccount: function () {
            return (0, r.default)((0, a.default)().mark(function e() {
              var n;
              return (0, a.default)().wrap(function (e) {
                while (1) switch (e.prev = e.next) {
                  case 0:
                    return uni.showLoading(), e.next = 3, u.default.$api.getUserInfoIsSubscribe();
                  case 3:
                    if (n = e.sent, uni.hideLoading(), "0" !== n.code || !n.data) {
                      e.next = 9;
                      break;
                    }
                    return e.abrupt("return", !(!n.data || !n.data.subscribe));
                  case 9:
                    return e.abrupt("return", !1);
                  case 10:
                  case "end":
                    return e.stop();
                }
              }, e);
            }))();
          },
          getProtocolLink: function () {
            var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : "";
            if (!e) return "";
            var n = getApp().globalData.ori_producer;
            return "hg" == n ? "[hogeLink]" + e + "[hogeLink]" : "jinhua" == n ? "[jinhuaapp]" + e + "[/jinhuaapp]" : "jincaiyun" == n ? "[jincaiyunjchjapp]" + e + "[/jincaiyunjchjapp]" : e;
          },
          clearTenantInfo: function () {
            var e = getCurrentPages();
            if (!u.default.$u.test.isEmpty(e)) {
              var n = e[e.length - 1],
                o = n.options && n.options["_clear_tenant"] ? parseInt(n.options["_clear_tenant"]) : 0;
              o && uni.removeStorageSync(m.default.localStorageKeys.tenantSettingInfo);
            }
          },
          getGeoLocationInfo: function () {
            var n = this;
            return (0, r.default)((0, a.default)().mark(function o() {
              var t;
              return (0, a.default)().wrap(function (o) {
                while (1) switch (o.prev = o.next) {
                  case 0:
                    return o.prev = 0, t = new qq.maps.Geolocation(n.getQQMapKey(), m.default.qqMapReferer), o.abrupt("return", new Promise(function (n) {
                      t.getLocation(function (e) {
                        n(e);
                      }, function () {
                        e.log("\u5B9A\u4F4D\u5931\u8D25"), n(!1);
                      }, {
                        timeout: 5000
                      });
                    }));
                  case 5:
                    return o.prev = 5, o.t0 = o["catch"](0), o.abrupt("return", !1);
                  case 8:
                  case "end":
                    return o.stop();
                }
              }, o, null, [[0, 5]]);
            }))();
          },
          getGeoLocationInfoByApp: function () {
            var n = this;
            return new Promise(function () {
              var o = (0, r.default)((0, a.default)().mark(function o(t) {
                var i, r, u;
                return (0, a.default)().wrap(function (o) {
                  while (1) switch (o.prev = o.next) {
                    case 0:
                      if (i = null, r = (0, l.checkIsInThirdBrowser)(), u = uni.getSystemInfoSync(), "hg" != r) {
                        o.next = 7;
                        break;
                      }
                      try {
                        p.default[r].getLocation(function (e) {
                          if (e.addr = e.address, i = e, i.latitude && i.longitude) {
                            if ("android" == u.platform) {
                              var n = h.default.bd2gcj(i.latitude, i.longitude);
                              i.longitude = n.longitude, i.latitude = n.latitude;
                            }
                            if ("ios" == u.platform) {
                              var o = h.default.wgs2gcj(i.latitude, i.longitude);
                              i.longitude = o.longitude, i.latitude = o.latitude;
                            }
                            t(i);
                          } else "ios" == u.platform ? setTimeout(function () {
                            t(!1);
                          }, 2000) : t(!1);
                        });
                      } catch (a) {
                        e.log("\u5B9A\u4F4D\u5931\u8D25"), t(!1);
                      }
                      o.next = 16;
                      break;
                    case 7:
                      if (!["tianmu", "trs", "xingkongyun"].includes(r)) {
                        o.next = 11;
                        break;
                      }
                      try {
                        p.default[r].getLocation(function (e) {
                          i = e, i.latitude && i.longitude ? t(i) : t(!1);
                        });
                      } catch (a) {
                        e.log("\u5B9A\u4F4D\u5931\u8D25"), t(!1);
                      }
                      o.next = 16;
                      break;
                    case 11:
                      return o.next = 13, n.getGeoLocationInfo();
                    case 13:
                      i = o.sent, i ? (i.latitude = i.lat, i.longitude = i.lng) : t(!1), t(i);
                    case 16:
                    case "end":
                      return o.stop();
                  }
                }, o);
              }));
              return function (e) {
                return o.apply(this, arguments);
              };
            }());
          },
          transPosition: function (e, n) {
            e = parseFloat(e), n = parseFloat(n);
            var o = 3000 * Math.PI / 180,
              t = e - 0.0065,
              a = n - 0.006,
              i = Math.sqrt(t * t + a * a) - 0.00002 * Math.sin(a * o),
              r = Math.atan2(a, t) - 0.000003 * Math.cos(t * o),
              u = i * Math.cos(r),
              l = i * Math.sin(r);
            return {
              longitude: u,
              latitude: l
            };
          },
          checkLocationIsAllow: function () {
            var e = arguments,
              n = this;
            return (0, r.default)((0, a.default)().mark(function o() {
              var t, i, r, u;
              return (0, a.default)().wrap(function (o) {
                while (1) switch (o.prev = o.next) {
                  case 0:
                    if (t = e.length > 0 && void 0 !== e[0] ? e[0] : "", t) {
                      o.next = 3;
                      break;
                    }
                    return o.abrupt("return", !0);
                  case 3:
                    return o.next = 5, n.getGeoLocationInfo();
                  case 5:
                    if (i = o.sent, i && i.city) {
                      o.next = 8;
                      break;
                    }
                    return o.abrupt("return", !1);
                  case 8:
                    return r = t.split(","), u = r.some(function (e) {
                      return -1 != i.city.search(e);
                    }), o.abrupt("return", u);
                  case 11:
                  case "end":
                    return o.stop();
                }
              }, o);
            }))();
          },
          clearLoginToken: function () {
            uni.removeStorageSync(m.default.localStorageKeys.accessToken), uni.removeStorageSync(m.default.localStorageKeys.userInfo), uni.removeStorageSync(m.default.localStorageKeys.tenantSettingInfo);
          },
          clearLoginInfo: function () {
            uni.removeStorageSync(m.default.localStorageKeys.accessToken), uni.removeStorageSync(m.default.localStorageKeys.userInfo);
          },
          getHeadAS: function () {
            var e = this;
            return (0, r.default)((0, a.default)().mark(function n() {
              var o, t, i, r, s, m, d;
              return (0, a.default)().wrap(function (n) {
                while (1) switch (n.prev = n.next) {
                  case 0:
                    return n.next = 2, e["tenantInitSetting"]();
                  case 2:
                    return o = n.sent, t = o["appid"], i = o["appkey"], r = u.default["$u"]["guid"](32, !1), s = new Date()["getTime"](), m = (0, l.getAASkey)(i), d = c.default["md5"](t + r + s + m), n.abrupt("return", [t, r, s, d]["join"](";"));
                  case 10:
                  case "end":
                    return n.stop();
                }
              }, n);
            }))();
          },
          convertImageUrl: function (e) {
            return (0, r.default)((0, a.default)().mark(function n() {
              var o;
              return (0, a.default)().wrap(function (n) {
                while (1) switch (n.prev = n.next) {
                  case 0:
                    if (e) {
                      n.next = 2;
                      break;
                    }
                    return n.abrupt("return", "");
                  case 2:
                    return n.next = 4, u.default.$api.convertImageUrl({
                      url: e
                    });
                  case 4:
                    if (o = n.sent, "0" !== o.code) {
                      n.next = 9;
                      break;
                    }
                    return n.abrupt("return", o.data);
                  case 9:
                    return n.abrupt("return", "");
                  case 10:
                  case "end":
                    return n.stop();
                }
              }, n);
            }))();
          },
          getTianMuStatId: function (e, n) {
            return e + "_" + n;
          },
          guideLogin: function () {
            this.getUserInfoFromLocalStorage(!0);
          },
          markUserValidateOk: function () {
            var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : "",
              n = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 1800,
              o = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 3,
              t = this.getUserInfoFromLocalStorage(!1);
            if (t && t.id) {
              var a = m.default.localStorageKeys.verifyCodePassOk + t.id + "_" + o;
              this.setCache(a, e, n);
            }
          },
          getUserValidatePassToken: function () {
            var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 3,
              n = this.getUserInfoFromLocalStorage(!1);
            if (!n || !n.id) return "";
            var o = m.default.localStorageKeys.verifyCodePassOk + n.id + "_" + e,
              t = this.getCache(o);
            return t || "";
          },
          getVerifyCodeType: function (e) {
            return e && e.rule && e.rule.prevent_cheat && e.rule.prevent_cheat.verif_type ? e.rule.prevent_cheat.verif_type : 3;
          },
          jumpToAppNewsPage: function (e) {
            var n = this.checkIsInThirdBrowser();
            n && p.default[n].jumpToNews(e);
          },
          getDomElementBaseInfo: function (e, n) {
            return (0, r.default)((0, a.default)().mark(function o() {
              return (0, a.default)().wrap(function (o) {
                while (1) switch (o.prev = o.next) {
                  case 0:
                    return o.abrupt("return", new Promise(function (o) {
                      var t = uni.createSelectorQuery().in(n);
                      t.select(e).boundingClientRect(), t.exec(function (e) {
                        e && e[0] ? o(e[0]) : o(!1);
                      });
                    }));
                  case 1:
                  case "end":
                    return o.stop();
                }
              }, o);
            }))();
          },
          getServerAuthDeviceToken: function () {
            var e = this;
            return (0, r.default)((0, a.default)().mark(function n() {
              var o, t, i, r;
              return (0, a.default)().wrap(function (n) {
                while (1) switch (n.prev = n.next) {
                  case 0:
                    if (o = m.default.localStorageKeys.localDeviceToken, t = 259200, i = e.getCache(o), !i) {
                      n.next = 7;
                      break;
                    }
                    return n.abrupt("return", e.filterDeviceToken(i));
                  case 7:
                    return n.next = 9, u.default.$api.getServerAuthDeviceToken();
                  case 9:
                    if (r = n.sent, "0" !== r.code || u.default.$u.test.isEmpty(r.data)) {
                      n.next = 15;
                      break;
                    }
                    return e.setCache(o, r.data, t), n.abrupt("return", e.filterDeviceToken(r.data));
                  case 15:
                    return n.abrupt("return", "");
                  case 16:
                  case "end":
                    return n.stop();
                }
              }, n);
            }))();
          },
          filterDeviceToken: function (e) {
            return e ? e.substr(32, 36) : "";
          },
          playAudioByApp: function () {
            var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : "";
            if (e) {
              var n = this.checkIsInThirdBrowser();
              n && p.default[n].playAudio(e);
            }
          },
          getInJsShareUrl: function (e, n) {
            var o = m.default.thirdPlatforms.injs.appid,
              t = m.default.thirdPlatforms.injs.appsecret,
              a = c.default.md5(o + n + t);
            return e = e.replace("{appid}", o), e = e.replace("{sign}", a), e;
          },
          getReqPayParams: function () {
            var e = this.getPayClient(),
              n = 0;
            n = e == m.default.paySettings.clients.app ? m.default.paySettings.payTypes.appMiniPro : e == m.default.paySettings.clients.official ? m.default.paySettings.payTypes.wxOfficial : m.default.paySettings.payTypes.wxWebH5;
            var o = {
              client: e,
              pay_type: n
            };
            return o;
          },
          handlePayOrder: function (e, n) {
            var o = arguments,
              t = this;
            return (0, r.default)((0, a.default)().mark(function i() {
              var r, l, s, d, c, g;
              return (0, a.default)().wrap(function (a) {
                while (1) switch (a.prev = a.next) {
                  case 0:
                    if (r = o.length > 2 && void 0 !== o[2] ? o[2] : null, e) {
                      a.next = 4;
                      break;
                    }
                    return uni.showToast({
                      title: "\u65E0\u652F\u4ED8\u53C2\u6570",
                      icon: "error"
                    }), a.abrupt("return");
                  case 4:
                    if (n != m.default.paySettings.payTypes.appMiniPro) {
                      a.next = 12;
                      break;
                    }
                    if (!e.pay_client_minipro || 1 != e.pay_client_minipro || u.default.$u.test.isEmpty(e.pay_client_minipro_params)) {
                      a.next = 10;
                      break;
                    }
                    return a.next = 8, t.getWeixinPayMiniProUrl(e.pay_client_minipro_params, "pay");
                  case 8:
                    l = a.sent, l ? (window.location.href = l, r && r(2)) : uni.showToast({
                      title: "\u652F\u4ED8\u5F02\u5E38",
                      icon: "error"
                    });
                  case 10:
                    a.next = 13;
                    break;
                  case 12:
                    n == m.default.paySettings.payTypes.wxOfficial ? e && e.params && (s = e.params, t.initWeixinSdkConfig(function () {
                      _.chooseWXPay({
                        timestamp: s.timeStamp || 0,
                        nonceStr: s.nonceStr || "",
                        package: s.package || "",
                        signType: s.signType || "",
                        paySign: s.paySign || "",
                        success: function () {
                          uni.showToast({
                            title: "\u652F\u4ED8\u6210\u529F",
                            icon: "success"
                          }), r && r(1);
                        },
                        fail: function () {
                          uni.showToast({
                            title: "\u652F\u4ED8\u5F02\u5E38",
                            icon: "error"
                          });
                        }
                      });
                    })) : n == m.default.paySettings.payTypes.wxWebH5 && (e && e.params ? (d = "", c = getApp().globalData.appid, g = t.checkIsInThirdBrowser(), g && c && m.default.thirdPlatforms[g] && m.default.thirdPlatforms[g]["payRedirectUrls"] && m.default.thirdPlatforms[g]["payRedirectUrls"][c] && (d = "&redirect_url=" + encodeURIComponent(m.default.thirdPlatforms[g]["payRedirectUrls"][c])), t.routeJump(e.params + d), r && r(2)) : uni.showToast({
                      title: "\u652F\u4ED8\u5F02\u5E38",
                      icon: "error"
                    }));
                  case 13:
                  case "end":
                    return a.stop();
                }
              }, i);
            }))();
          },
          checkActivityTimeIsInProgress: function (e) {
            var n = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : "\u6D3B\u52A8",
              o = (0, s.default)().unix();
            if (o >= e.start_time && o <= e.end_time) {
              var t = (0, s.default)().format("YYYY-MM-DD");
              if (e.day_start_time) {
                var a = (0, s.default)(t + " " + e.day_start_time, "YYYY-MM-DD HH:mm").unix();
                if (o < a) return uni.showToast({
                  title: n + "\u5C06\u5728" + e.day_start_time + "\u5F00\u59CB",
                  icon: "error"
                }), !1;
              }
              if (e.day_end_time) {
                var i = (0, s.default)(t + " " + e.day_end_time, "YYYY-MM-DD HH:mm").unix();
                if (o > i) return uni.showToast({
                  title: n + "\u5DF2\u5728" + e.day_end_time + "\u7ED3\u675F",
                  icon: "error"
                }), !1;
              }
              if (!u.default.$u.test.isEmpty(e.day_times) && Array.isArray(e.day_times) && e.day_times.length) {
                var r = [],
                  l = 0;
                e.day_times.map(function (e) {
                  l = (0, s.default)(t + " " + e.s, "YYYY-MM-DD HH:mm").unix(), r.push(l);
                }), r.push(r[0] + 86400);
                var m = !1;
                if (e.day_times.map(function (e) {
                  var n = (0, s.default)(t + " " + e.s, "YYYY-MM-DD HH:mm").unix(),
                    a = (0, s.default)(t + " " + e.e, "YYYY-MM-DD HH:mm").unix();
                  o >= n && o < a && (m = !0);
                }), !m) {
                  var d = 0;
                  return r.find(function (n) {
                    return n > o && n < e.end_time && (d = (0, s.default)(1000 * n).format("MM-DD HH:mm"), !0);
                  }), d ? uni.showToast({
                    title: n + "\u5C06\u5728" + d + "\u5F00\u59CB",
                    icon: "error"
                  }) : uni.showToast({
                    title: n + "\u5DF2\u7ED3\u675F",
                    icon: "error"
                  }), !1;
                }
              }
              return !0;
            }
            if (o < e.start_time) {
              var c = (0, s.default)(1000 * e.start_time).format("MM-DD HH:mm");
              return uni.showToast({
                title: n + "\u5C06\u5728" + c + "\u5F00\u59CB",
                icon: "error"
              }), !1;
            }
            if (o > e.end_time) return uni.showToast({
              title: n + "\u5DF2\u7ED3\u675F",
              icon: "error"
            }), !1;
          },
          getActivityDiffTime: function (e) {
            var n = (0, s.default)().unix();
            if (n >= e.start_time && n <= e.end_time) {
              var o = (0, s.default)().format("YYYY-MM-DD");
              if (e.day_start_time) {
                var t = (0, s.default)(o + " " + e.day_start_time, "YYYY-MM-DD HH:mm").unix();
                if (n < t) return t - n;
              }
              if (e.day_end_time) {
                var a = (0, s.default)(o + " " + e.day_end_time, "YYYY-MM-DD HH:mm").unix();
                return n >= a ? 0 : a - n;
              }
              return e.end_time - n;
            }
            return n < e.start_time ? e.start_time - n : n > e.end_time ? 0 : void 0;
          },
          deepCopy: function (e) {
            return JSON.parse(JSON.stringify(e));
          },
          getPayClient: function () {
            var e = this.checkIsInThirdBrowser();
            return e ? m.default.paySettings.clients.app : this.checkIsWechatBrowser() ? m.default.paySettings.clients.official : m.default.paySettings.clients.web;
          },
          getOrderPayParams: function () {
            var e = arguments;
            return (0, r.default)((0, a.default)().mark(function n() {
              var o, t;
              return (0, a.default)().wrap(function (n) {
                while (1) switch (n.prev = n.next) {
                  case 0:
                    if (o = e.length > 0 && void 0 !== e[0] ? e[0] : "", o) {
                      n.next = 3;
                      break;
                    }
                    return n.abrupt("return", null);
                  case 3:
                    return n.next = 5, u.default.$api.getOrderPayParams({
                      id: o
                    });
                  case 5:
                    if (t = n.sent, "0" !== t.code) {
                      n.next = 10;
                      break;
                    }
                    return n.abrupt("return", t.data);
                  case 10:
                    return n.abrupt("return", t);
                  case 11:
                  case "end":
                    return n.stop();
                }
              }, n);
            }))();
          },
          getMallStyleSetting: function () {
            var e = this;
            return (0, r.default)((0, a.default)().mark(function n() {
              var o, t;
              return (0, a.default)().wrap(function (n) {
                while (1) switch (n.prev = n.next) {
                  case 0:
                    return n.next = 2, e.tenantInitSetting();
                  case 2:
                    return o = n.sent, n.next = 5, u.default.$api.getMallStyleSetting(o.appid);
                  case 5:
                    if (t = n.sent, "0" !== t.code || u.default.$u.test.isEmpty(t.data)) {
                      n.next = 10;
                      break;
                    }
                    return n.abrupt("return", t.data);
                  case 10:
                    return n.abrupt("return", null);
                  case 11:
                  case "end":
                    return n.stop();
                }
              }, n);
            }))();
          },
          getMallPayType: function () {
            var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 0,
              n = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : "";
            if (!e) return m.default.paySettings.payTypes.integral;
            var o = this.getPayClient();
            return n == m.default.paySettings.cashPayTypes.wechatPay ? o == m.default.paySettings.clients.app ? m.default.paySettings.payTypes.appMiniPro : o == m.default.paySettings.clients.official ? m.default.paySettings.payTypes.wxOfficial : m.default.paySettings.payTypes.wxWebH5 : n == m.default.paySettings.cashPayTypes.aliPay ? m.default.paySettings.payTypes.alipayH5 : n == m.default.paySettings.cashPayTypes.abcEcnyPay ? m.default.paySettings.payTypes.abcEcny : n == m.default.paySettings.cashPayTypes.ytbankPay ? m.default.paySettings.payTypes.ytbank : void 0;
          },
          checkUserIsBindAppAccount: function () {
            var e = this.getUserInfoFromLocalStorage();
            return !(!e || !e.phone_num);
          },
          goToMallHomePage: function () {
            var e = this;
            return (0, r.default)((0, a.default)().mark(function n() {
              var o, t;
              return (0, a.default)().wrap(function (n) {
                while (1) switch (n.prev = n.next) {
                  case 0:
                    return o = "", n.next = 3, e.getMallStyleSetting();
                  case 3:
                    if (t = n.sent, !t) {
                      n.next = 16;
                      break;
                    }
                    n.t0 = t.style, n.next = 1 === n.t0 ? 8 : 2 === n.t0 ? 10 : 3 === n.t0 ? 12 : 4 === n.t0 ? 14 : 16;
                    break;
                  case 8:
                    return o = "/module-mall/home/home", n.abrupt("break", 16);
                  case 10:
                    return o = "/module-mall/home/home-style-two", n.abrupt("break", 16);
                  case 12:
                    return o = "/module-mall/home/home-style-three", n.abrupt("break", 16);
                  case 14:
                    return o = "/module-mall/home/home-style-four", n.abrupt("break", 16);
                  case 16:
                    o && e.routeJump(o);
                  case 17:
                  case "end":
                    return n.stop();
                }
              }, n);
            }))();
          },
          base64ImgtoFile: function (e, n) {
            var o = e.split(","),
              t = o[0].match(/:(.*?);/)[1],
              a = atob(o[1]),
              i = a.length,
              r = new Uint8Array(i);
            while (i--) r[i] = a.charCodeAt(i);
            var u = new Blob([r], {
                type: t
              }),
              l = new File([u], n, {
                type: t
              });
            return l.path = URL.createObjectURL(u), l;
          },
          getInnerImageUrl: function () {
            var e = arguments,
              n = this;
            return (0, r.default)((0, a.default)().mark(function o() {
              var t, i, r, s, m, d, g;
              return (0, a.default)().wrap(function (o) {
                while (1) switch (o.prev = o.next) {
                  case 0:
                    if (t = e.length > 0 && void 0 !== e[0] ? e[0] : {}, i = n.getUserInfoFromLocalStorage(), i && i.id) {
                      o.next = 4;
                      break;
                    }
                    return o.abrupt("return");
                  case 4:
                    return r = uni.getSystemInfoSync(), o.next = 7, n.tenantInitSetting();
                  case 7:
                    return s = o.sent, m = [s.t_id, t.moduleId, t.activityId, i.id, r.deviceId], d = c.default.md5(m.join("-")), m.push(d), g = (0, l.base64EncodeUnicode)(m.join("-")), o.next = 14, u.default.$api.getInnerImageUrl({
                      s: g
                    });
                  case 14:
                  case "end":
                    return o.stop();
                }
              }, o);
            }))();
          },
          getQQMapKey: function () {
            var e = Math.floor(Math.random() * m.default.qqMapKeyList.length);
            return m.default.qqMapKeyList[e];
          },
          getDistance: function (e, n, o, t) {
            e = e || 0, n = n || 0, o = o || 0, t = t || 0;
            var a = e * Math.PI / 180,
              i = o * Math.PI / 180,
              r = a - i,
              u = n * Math.PI / 180 - t * Math.PI / 180,
              l = 12756274 * Math.asin(Math.sqrt(Math.pow(Math.sin(r / 2), 2) + Math.cos(a) * Math.cos(i) * Math.pow(Math.sin(u / 2), 2)));
            return Math.round(l);
          }
        },
        k = v;
      n.default = k;
    }).call(this, o("ba7c")["default"]);
  },
  e3c0: function (e, n, o) {
    "use strict";

    o("6a54"), Object.defineProperty(n, "__esModule", {
      value: !0
    }), n.default = void 0;
    n.default = {
      integral_config: {
        title: "\u79EF\u5206",
        indexpic: null,
        expire_days: 0,
        rule_info: ""
      },
      gold_config: {
        title: "\u91D1\u5E01",
        indexpic: null,
        expire_days: 0,
        rule_info: ""
      },
      experience_config: {
        title: "\u6210\u957F\u503C",
        indexpic: null,
        expire_days: 0,
        rule_info: ""
      },
      grade_config: {
        info: ""
      }
    };
  },
  eb93: function (e, n, o) {
    "use strict";

    o("6a54");
    var t = o("f5bd").default;
    Object.defineProperty(n, "__esModule", {
      value: !0
    }), n.default = void 0, o("5c47"), o("0506");
    var a = t(o("08c5")),
      i = {
        isInApp: function () {
          var e = navigator.userAgent.toLowerCase();
          return !!/kxz/gi.test(e);
        },
        getSystemInfo: function (e) {},
        getUserInfo: function (e) {
          a.default.getUserInfo({
            success: function (n) {
              if (n && n.uid) {
                var o = {
                  user_id: n.uid || "",
                  user_name: n.nickname || "",
                  portrait_url: n.avatar || "",
                  phone: n.mobile || "",
                  wx_openid: "",
                  wx_unionid: "",
                  app_user_token: n.token || ""
                };
                e && e(o);
              } else e && e(!1);
            }
          });
        },
        getLocation: function (e) {
          a.default.getLocation({
            success: function (n) {
              e && e(n);
            }
          });
        },
        shareTo: function () {
          var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {};
          a.default.setShareData({
            title: e.title,
            description: e.brief,
            url: e.link_url,
            thumb: e.indexpic
          });
        },
        goToLoginPage: function () {
          a.default.goLogin({
            success: function () {
              window.location.reload();
            }
          });
        },
        goToBindPage: function () {},
        saveImage: function () {},
        linkTo: function () {},
        jumpToNews: function () {
          var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : "";
          a.default.goTo({
            url: e
          });
        },
        goUcenter: function () {},
        playAudio: function () {},
        showShare: function () {
          var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {};
          a.default.showShareDialog({
            title: e.title,
            description: e.brief,
            url: e.link_url,
            thumb: e.indexpic
          });
        },
        openpaper: function () {}
      },
      r = i;
    n.default = r;
  },
  f41d: function (e, n, o) {
    "use strict";

    o("6a54");
    var t = o("f5bd").default;
    Object.defineProperty(n, "__esModule", {
      value: !0
    }), n.getBookingLotteryUserIsSignup = n.getBookingLotteryProgress = n.getBookingLotteryAcDetail = n.getBagLuckyDraw = n.getAuthorSyntheticCards = n.getAuthorSendCards = n.getAuthorHaveCards = n.getAuthorGetCards = n.getAuthorDrawCards = n.getAuthorCompleteCards = n.getAnswerTimes = n.getAnswerQuestionList = n.getAnswerDetail = n.getActivityTypeList = n.getActivityTaskList = n.getActivityTaskDetail = n.getActivityShowList = n.getAQRecordList = n.getAQRecordDetail = n.getAQRankList = n.getAQOrgRankList = n.getAQMoreUserRankList = n.getAQMoreOrgRankTitle = n.getAQMoreOrgRankList = n.getAIFaceFusionDetail = n.focusOnUsers = n.focusOnRrankingSteps = n.fissionTake = n.finishFootmarkOptionTask = n.finishActivityTask = n.fertilizeFarmKindsAnimal = n.fertilizeFarmKind = n.exchangeSuccessUser = n.exchangeSignupTimes = n.exchangeMoney = n.exchangeLotteryTimes = n.exchangeFarmVeg = n.exchangeFarmKindsGoods = n.exchangeAnswerChance = n.deleteUserAddress = n.deleteOrder = n.deleteInfoPublishContent = n.createVoteFissionInviteTask = n.createUserAddress = n.createStepSportFissionInviteTask = n.createOrder = n.createOfflinePayOrder = n.createLotteryFissionInviteTask = n.createHelpFissionInviteTask = n.createDilateFissionInviteTask = n.createCheckersFissionInviteTask = n.createAnswerFissionInviteTask = n.createActivityTask = n.convertImageUrl = n.controlGoodsOpen = n.continuePayOrder = n.collectFarmKindsEnergy = n.collectFarmEnergy = n.checkVoteUserIsInner = n.checkVoteTaskDetailInfo = n.checkVerifyCodePassOkNoAuth = n.checkVerifyCodePassOk = n.checkUserIsBindWechat = n.checkSignupDetailInfo = n.checkSigninIsInLocation = n.checkScreenInteractUserIsInner = n.checkScreenInteractIsInLocation = n.checkPoetryDetailInfo = n.checkPhoneAuthIsPass = n.checkLotteryPassword = n.checkLotteryDetailInfo = n.checkGuanDanDetailInfo = n.checkFormUserIsInner = n.checkEcnyformIsInLocation = n.checkCollectCardTaskDetailInfo = n.checkClockinIsInLocation = n.checkCaptchaIsOk = n.checkBusinessWriteOffAccountIsLogin = n.checkBookingLotteryTaskIsFinish = n.checkAnswerTaskDetailInfo = n.checkAnswerOrgIsPass = n.cancelPlantFarmLand = n.cancelOrder = n.cancelLike = n.cancelFocusOnUsers = n.cancelCollection = n.buyPlayCheckersTimes = n.buyFarmKindsKind = n.buyFarmKind = n.businessApply = n.bindVoteJudge = n.bindFormWriteOffUser = n.bindBusinessWriteOffAccount = n.bindAppAccount = n.bindAccountOfficial = n.autoLoginByLoginParams = n.appUserInit = n.addUserDilateInviteRecord = n.acPicCheck = n.AllRrankingSteps = void 0, n.getGuessDetail = n.getGuessContestTimeList = n.getGuessContestList = n.getGuanDanUserInfo = n.getGuanDanSettingDetail = n.getGuanDanRankInfo = n.getGuanDanActivityList = n.getGoodsListByIds = n.getGoodsList = n.getGoodsDetail = n.getGoodsCommentList = n.getGoodsClassList = n.getFormStatList = n.getFormRecordDetail = n.getFormLogList = n.getFormDetail = n.getFormBookDateNumInfo = n.getFormActivityList = n.getFootmarkRankList = n.getFootmarkPassList = n.getFootmarkPassDetail = n.getFootmarkDetail = n.getFissionTakeProgress = n.getFissionHelpRecordlList = n.getFissionHelpDetail = n.getFissionDilateDetail = n.getFertilizeDayTimes = n.getFarmUserVegList = n.getFarmUserDetail = n.getFarmKindsUserDetail = n.getFarmKindsInviteLinkParams = n.getFarmKindsInviteDetailInfo = n.getFarmKindsGrowupLevelList = n.getFarmKindsFertilizeDayTimes = n.getFarmKindsExchangeLogList = n.getFarmKindsExchangeGoodsList = n.getFarmKindsEnergyUserList = n.getFarmKindsDetail = n.getFarmKindsAnimal = n.getFarmKindClassList = n.getFarmGrowupLevelList = n.getFarmExchangeLogList = n.getFarmExchangeGoodsList = n.getFarmExchangeGoodsDetail = n.getFarmEnergyUserList = n.getFarmDetail = n.getExpressInfo = n.getEcnyformDetail = n.getEcnyformBusinessList = n.getDilateCarouselInfo = n.getCurrentUserDetailStepsInfo = n.getCurrencyRecordList = n.getCouponWriteOffNoList = n.getCouponWriteOffHadList = n.getCouponWriteOffDetail = n.getCouponWriteOffCountData = n.getCouponList = n.getCouponGoodsList = n.getCouponDetail = n.getCouponClassList = n.getCouponCenterAllList = n.getCouponActivityDetail = n.getCommentList = n.getCommentDetail = n.getCommentDanmuList = n.getCollectActivityDetail = n.getCmsHomeData = n.getCmsContentList = n.getCmsContentDetail = n.getClockinVenueRankDetail = n.getClockinRankList = n.getClockinJoinList = n.getClockinDetail = n.getChouKaCount = n.getCheckersTaskContent = n.getCheckersDetail = n.getCardDetail = n.getCaptchaInfo = n.getBusinessmenOrderDetail = n.getBusinessWorkSheetId = n.getBusinessStoreShow = n.getBusinessRefundList = n.getBusinessOrdersList = n.getBusinessOrderStatistics = n.getBusinessOrderList = n.getBusinessOrderDetail = n.getBusinessList = n.getBusinessInfoBackstage = n.getBusinessInfo = n.getBusinessGoodsList = n.getBusinessGoodsClassList = n.getBusinessDetail = n.getBusinessCouponsList = n.getBusinessClassList = n.getBusinessClass = n.getBusinessByDistance = n.getBusinessApplyDetail = n.getBusinessAccountInfo = n.getBusienssBillList = n.getBookingSignupNum = void 0, n.getUserFormLogDetailByCode = n.getUserFormLogDetail = n.getUserEcnyformTimes = n.getUserEcnyformLogList = n.getUserEcnyformLogDetail = n.getUserDetailStepsInfo = n.getUserDayDetailInfo = n.getUserAddressList = n.getUserAddressDetail = n.getUploadFileUrl = n.getTodayAndThisMonthSteps = n.getTestCouponList = n.getTaskList = n.getTaskCenterActivityDetail = n.getSuperTopicDetail = n.getStudyUserTotalScore = n.getStudyUserRecordList = n.getStudyUserRankList = n.getStudyPassList = n.getStudyPassDetail = n.getStepsportDetail = n.getSigninRankList = n.getSigninCurrencyTotal = n.getSigninActivityDetail = n.getShortLinkUrl = n.getServerAuthDeviceToken = n.getScreenSigninTimes = n.getScreenLotteryLogDetail = n.getScreenLotteryLog = n.getScreenInteractDetail = n.getRefundList = n.getRefundDetail = n.getQueryField = n.getQueryActivityDetail = n.getPreSalesUserSessionInfoList = n.getPoetryTipTimes = n.getPoetryRankList = n.getPoetryPassQuestion = n.getPoetryHelpQuestionDetail = n.getPoetryHelpProgress = n.getPoetryDetail = n.getPhoneAuthToken = n.getPayDetail = n.getPageDesignAttrInfo = n.getOssUploadUrl = n.getOrderPayParams = n.getOrderList = n.getOrderDetail = n.getOfflinePayDetailList = n.getOfflinePayDetail = n.getOfflineBusinessClass = n.getOfflineBusinessByDistance = n.getOfficialAccountDetail = n.getNschoolsSubjectDetail = n.getNschoolsSignupList = n.getNschoolsSigninList = n.getNschoolsLessonList = n.getNschoolsDetailInfo = n.getNschoolSubjectListDetail = n.getNewsTaskList = n.getNewsTaskDetailInfo = n.getNewsActivityDetail = n.getMyGuessRecordList = n.getMyFormWriteOffList = n.getMyFarmTrendsList = n.getMyFarmKindsTrendsList = n.getMyCommentList = n.getMemberOfficialInfo = n.getMemberGlobalSetting = n.getMedalList = n.getMallStyleSetting = n.getMallHomeData = n.getMallHomeBusinessList = n.getMallBlockList = n.getMallAccountInfo = n.getLotteryWriteOffList = n.getLotteryWriteOffDetail = n.getLotteryWriteOffCountData = n.getLotteryDetail = n.getLocationInfo = n.getLiveReportList = n.getLiveReportClassList = n.getLiveGoodsList = n.getLiveFastActivityDetail = n.getLiveEventInfo = n.getLiveDetail = n.getLiveActivityOpMsg = n.getLiveActivityList = n.getLevelList = n.getLaunchContentList = n.getInviteUserDetail = n.getInviteRecord = n.getInviteDetail = n.getInnerImageUrl = n.getInfoPublishUserInfo = n.getInfoPublishList = n.getInfoPublishDetail = n.getInJsAccessToken = n.getHongbaoBill = n.getGuessRecordList = void 0, n.submitBookingLotterySignup = n.submitAnswer = n.submitAIFaceFusion = n.stepsExchangeIntegral = n.startWhippedGame = n.startPoetrySeekHelp = n.startCheckersGame = n.setOrderDone = n.sendWorkSheetMessage = n.sendSmsCodeNoAuth = n.sendSmsCode = n.sendEcnyformSmsCode = n.sendCommentDanmu = n.sendCardRecordList = n.senPreSalesUserWorkSheetMessage = n.reportStatData = n.reportActionEventData = n.refundsend = n.refundRefuse = n.recordUpdateSubmitForm = n.receiveTestCoupon = n.receiveFarmKindsEnergyEveryDay = n.receiveFarmEnergyEveryDay = n.receiveActivityCoupon = n.readPreSalesUserWorkSheetMessage = n.reSubmitPoetry = n.postWhippedIdVerify = n.postQueryContent = n.postPublishInfo = n.postNschoolsSignup = n.postNschoolsSignin = n.postContentInfoReport = n.pointsConsumed = n.pluckFarmVeg = n.pluckFarmKindsAnimal = n.payHongbao = n.makeWishCode = n.likeVenueClockin = n.joinFarmKindsInviteTeam = n.gitUserDilateInfo = n.getwxjsConfig = n.getWriteoffCountData = n.getWriteOffNoList = n.getWriteOffHadList = n.getWorkSheetMessageList = n.getWorkSheetId = n.getWordValidCustoms = n.getWordTakeuser = n.getWordStartgame = n.getWordGettaketime = n.getWordGettake = n.getWordExitgame = n.getWordDetail = n.getWordCustoms = n.getWithdrawLogList = n.getWithdrawConfig = n.getWishInfoByCode = n.getWishDetail = n.getWinRecordDetailByCode = n.getWinRecordDetail = n.getWinPrizeLogList = n.getWhippedWeekRankDetail = n.getWhippedMonthRankDetail = n.getWhippedHistoryRankDetail = n.getWhippedDayRankDetail = n.getWhippedActivityDetail = n.getWeixinMiniProUrl = n.getWealactList = n.getWealactGoodsList = n.getWealactDetail = n.getVoteOptionList = n.getVoteOptionDetail = n.getVoteJudgeScoreItemList = n.getVoteJudgeOptionList = n.getVoteJudgeOptionDetail = n.getVoteDetail = n.getVideoScreenShot = n.getVerifyCode = n.getVenueList = n.getVenueDetail = n.getVenueClockinRankDetail = n.getVenueClockinLogList = n.getVenueClockinInfo = n.getVenueClockinActivityDetail = n.getUserthisMonthSteps = n.getUserWinPrizeLog = n.getUserVoteTimes = n.getUserToApplets = n.getUserPurseInfo = n.getUserPlayCheckersTimes = n.getUserMsgList = n.getUserLotteryTimes = n.getUserInviteLogList = n.getUserInviteInfo = n.getUserInfoIsSubscribe = n.getUserInfoByCode = n.getUserInfo = n.getUserHongbaoDetail = n.getUserFormTimes = n.getUserFormLogList = void 0, n.wxwebLogin = n.wxoaLoginQrcodeCheck = n.wxoaLoginQrcode = n.wxoaLogin = n.wxminiLogin = n.writeoffOrder = n.writeOffLotteryPrize = n.writeOffLogin = n.writeOffFormLog = n.writeOffCoupon = n.userfocusOnIs = n.userPhoneLogin = n.updateUserInviteInfo = n.updateUserAddress = n.updateLotteryUserCollection = n.updateInfoPublishContent = n.todayRrankingSteps = n.tipUserIsHelpDilate = n.tenantH5Init = n.submitWithdraw = n.submitVoteJudgeScore = n.submitVote = n.submitVenueClockin = n.submitUserInvite = n.submitSuperTopicComment = n.submitSuperTopic = n.submitSignin = n.submitScreenSignin = n.submitRefundApply = n.submitPoetryPass = n.submitPoetryHelp = n.submitOrderComment = n.submitLottery = n.submitLiveFastActivity = n.submitLiveEvent = n.submitLike = n.submitGuessContest = n.submitForm = n.submitEcnyform = n.submitComment = n.submitCollection = n.submitClockin = n.submitCheckersGameOver = void 0, o("c223");
    var a = t(o("2cfc")),
      i = o("beb5"),
      r = "https://" + a.default.apiBaseDomain,
      u = "https://" + a.default.voteApiBaseDomain,
      l = "https://" + a.default.staticApiBaseDomain,
      s = "https://" + a.default.communityApiDomain,
      m = r + "/api",
      d = r + "/oss",
      c = u + "/api",
      g = l + "/api",
      f = s + "/api";
    n.tenantH5Init = function (e) {
      return (0, i.requestApiNoAuth)("".concat(g, "/aosbase/_auth_h5init/").concat(e, ".json"));
    };
    n.appUserInit = function (e) {
      return (0, i.requestApi)("".concat(m, "/aosbase/_auth_appuserinit"), e, "POST");
    };
    n.autoLoginByLoginParams = function (e) {
      return (0, i.requestApi)("".concat(m, "/aosbase/_auth_appautouserinit"), e, "POST");
    };
    n.wxminiLogin = function (e) {
      return (0, i.requestApi)("".concat(m, "/aosbase/_wx_minipro_auth_login"), e, "POST");
    };
    n.wxoaLogin = function (e) {
      return (0, i.requestApi)("".concat(m, "/aosbase/_wxauth_login"), e, "POST");
    };
    n.userPhoneLogin = function (e) {
      return (0, i.requestApi)("".concat(m, "/aosbase/_auth_login"), e, "POST");
    };
    n.wxoaLoginQrcode = function (e) {
      return (0, i.requestApi)("".concat(m, "/aosbase/_wxauth_qrcode"), e);
    };
    n.getwxjsConfig = function (e) {
      return (0, i.requestApi)("".concat(m, "/aosbase/_wxauth_getjsconfig"), e);
    };
    n.wxoaLoginQrcodeCheck = function (e) {
      return (0, i.requestApi)("".concat(m, "/aosbase/_wxauth_qrcodelogincheck"), e);
    };
    n.wxwebLogin = function (e) {
      return (0, i.requestApi)("".concat(m, "/aosbase/_wxwebauth_login"), e, "POST");
    };
    n.getUserInfo = function (e) {
      return (0, i.requestApi)("".concat(m, "/aosbase/user_info"), e);
    };
    n.getUserInfoByCode = function (e) {
      return (0, i.requestApi)("".concat(m, "/aosbase/user_info"), e);
    };
    n.getVerifyCode = function (e) {
      return (0, i.requestApi)("".concat(m, "/aosbase/_verifcode_show"), e);
    };
    n.reportStatData = function (e) {
      return (0, i.requestApi)("".concat(m, "/aosstat/_stat_sub"), e, "POST");
    };
    n.reportActionEventData = function (e) {
      return (0, i.requestApi)("".concat(m, "/aosstat/_event_sub"), e, "POST");
    };
    n.getUploadFileUrl = function () {
      return "".concat(d, "/filefront/upload");
    };
    n.getOssUploadUrl = function (e) {
      return (0, i.requestApi)("".concat(d, "/fileoss/getuploadurl"), e, "POST");
    };
    n.getVideoScreenShot = function (e) {
      return (0, i.requestApi)("".concat(d, "/fileoss/videoscreenshot"), e, "POST");
    };
    n.getCommentList = function (e) {
      return (0, i.requestApi)("".concat(m, "/aosbase/_comment_show"), e);
    };
    n.getMyCommentList = function (e) {
      return (0, i.requestApi)("".concat(m, "/aosbase/comment_showmy"), e);
    };
    n.getCommentDetail = function (e) {
      return (0, i.requestApi)("".concat(m, "/aosbase/_comment_detail"), e);
    };
    n.submitComment = function (e) {
      return (0, i.requestApi)("".concat(m, "/aosbase/comment_sub"), e, "POST");
    };
    n.submitLike = function (e) {
      return (0, i.requestApi)("".concat(m, "/aosbase/like_sub"), e, "POST");
    };
    n.cancelLike = function (e) {
      return (0, i.requestApi)("".concat(m, "/aosbase/like_delete"), e, "POST");
    };
    n.submitCollection = function (e) {
      return (0, i.requestApi)("".concat(m, "/aosbase/collection_sub"), e, "POST");
    };
    n.cancelCollection = function (e) {
      return (0, i.requestApi)("".concat(m, "/aosbase/collection_delete"), e, "POST");
    };
    n.getLocationInfo = function (e) {
      return (0, i.requestApi)("".concat(m, "/aosbase/_user_getlocationinfo"), e);
    };
    n.checkUserIsBindWechat = function (e) {
      return (0, i.requestApi)("".concat(m, "/aosbase/user_appbindwx"), e);
    };
    n.convertImageUrl = function (e) {
      return (0, i.requestApi)("".concat(d, "/filefront/imgdownload"), e, "POST");
    };
    n.getWeixinMiniProUrl = function (e) {
      return (0, i.requestApiNoAuth)("".concat(m, "/aosbase/_wxauth_miniprourl"), e);
    };
    n.getUserInfoIsSubscribe = function (e) {
      return (0, i.requestApi)("".concat(m, "/aosbase/wxauth_getuserinfo"), e);
    };
    n.getOfficialAccountDetail = function (e) {
      return (0, i.requestApi)("".concat(m, "/admin/_wechat_detail"), e);
    };
    n.checkVerifyCodePassOk = function (e) {
      return (0, i.requestApi)("".concat(m, "/aosbasemodule/intelverifcode_check"), e, "POST");
    };
    n.checkVerifyCodePassOkNoAuth = function (e) {
      return (0, i.requestApi)("".concat(m, "/aosbasemodule/_intelverifcode_check"), e, "POST");
    };
    n.sendSmsCode = function (e) {
      return (0, i.requestApi)("".concat(m, "/aosput/sms_sendcode"), e, "POST");
    };
    n.sendSmsCodeNoAuth = function (e) {
      return (0, i.requestApi)("".concat(m, "/aosput/_sms_sendcode"), e, "POST");
    };
    n.getPhoneAuthToken = function (e) {
      return (0, i.requestApi)("".concat(m, "/aosbasemodule/dypns_getauthtoken"), e);
    };
    n.checkPhoneAuthIsPass = function (e) {
      return (0, i.requestApi)("".concat(m, "/aosbasemodule/dypns_verify"), e, "POST");
    };
    n.getCommentDanmuList = function (e, n) {
      var o = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : {};
      return (0, i.requestApiNoAuth)("".concat(g, "/aosbase/_comment_danmu/").concat(e, "_").concat(n, ".json"), o);
    };
    n.sendCommentDanmu = function (e) {
      return (0, i.requestApi)("".concat(m, "/aosbase/danmu_sub"), e, "POST");
    };
    n.getServerAuthDeviceToken = function () {
      return (0, i.requestAuthDeviceToken)("".concat(m, "/aosbase/_auth_dt"));
    };
    n.getShortLinkUrl = function (e) {
      return (0, i.requestApi)("".concat(m, "/admin/_dl_create"), e);
    };
    n.getCaptchaInfo = function (e) {
      return (0, i.requestApi)("".concat(m, "/basemodule/_captcha_get"), e);
    };
    n.checkCaptchaIsOk = function (e) {
      return (0, i.requestApi)("".concat(m, "/basemodule/_captcha_check"), e, "POST");
    };
    n.bindAppAccount = function (e) {
      return (0, i.requestApi)("".concat(m, "/aosbase/wxauth_bind_phone"), e, "POST");
    };
    n.getUserPurseInfo = function (e) {
      return (0, i.requestApi)("".concat(m, "/aosbase/user_check_appwalletopen"), e);
    };
    n.getInnerImageUrl = function (e) {
      return (0, i.requestApiNoAuth)("".concat(m, "/aosstat/_ursa_4306d742dcb140499abd8598935d1c76.png"), e);
    };
    n.getTaskCenterActivityDetail = function (e) {
      return (0, i.requestApi)("".concat(m, "/aosbasemodule/_mission_detail"), e);
    };
    n.checkCollectCardTaskDetailInfo = function (e) {
      return (0, i.requestApi)("".concat(m, "/aoscollectcard/event_sub"), e, "POST");
    };
    n.checkVoteTaskDetailInfo = function (e) {
      return (0, i.requestApi)("".concat(m, "/aosvote/mission_sub"), e, "POST");
    };
    n.checkAnswerTaskDetailInfo = function (e) {
      return (0, i.requestApi)("".concat(m, "/aosanswer/mission_sub"), e, "POST");
    };
    n.checkSignupDetailInfo = function (e) {
      return (0, i.requestApi)("".concat(m, "/aosform/mission_sub"), e, "POST");
    };
    n.checkLotteryDetailInfo = function (e) {
      return (0, i.requestApi)("".concat(m, "/aoslottery/mission_sub"), e, "POST");
    };
    n.checkPoetryDetailInfo = function (e) {
      return (0, i.requestApi)("".concat(m, "/aospoetry/mission_sub"), e, "POST");
    };
    n.getCmsHomeData = function (e) {
      return (0, i.requestApi)("".concat(m, "/cms/page_getcontent/65.json"), e);
    };
    n.getCmsContentList = function (e) {
      return (0, i.requestApi)("".concat(m, "/cms/datasource_data/contentshow.json"), e);
    };
    n.getCmsContentDetail = function (e) {
      return (0, i.requestApi)("".concat(m, "/cms/datasource_data/contentdetail.json"), e);
    };
    n.getMallStyleSetting = function (e) {
      return (0, i.requestApi)("".concat(g, "/aosmall/_styleset_showv2/").concat(e, ".json"));
    };
    n.getMallHomeData = function (e) {
      return (0, i.requestApi)("".concat(m, "/cms/page_getcontent/mall_home.json"), e);
    };
    n.getGoodsList = function (e) {
      var n = getApp().globalData.appid;
      return (0, i.requestApiNoAuth)("".concat(g, "/aosmall/_goods_showv2/").concat(n, ".json"), e);
    };
    n.getGoodsClassList = function (e) {
      var n = getApp().globalData.appid;
      return (0, i.requestApiNoAuth)("".concat(g, "/aosmall/_goodsclass_showv2/").concat(n, ".json"), e);
    };
    n.getBusinessGoodsClassList = function (e) {
      var n = getApp().globalData.appid;
      return (0, i.requestApiNoAuth)("".concat(g, "/aosmall/_goodsclass_showv2/").concat(n, ".json"), e);
    };
    n.getWealactList = function (e) {
      return (0, i.requestApi)("".concat(m, "/aosbase/_wealact_show"), e);
    };
    n.getCouponGoodsList = function (e) {
      return (0, i.requestApi)("".concat(m, "/aosmall/_show_by_coupons"), e);
    };
    n.getGoodsListByIds = function (e) {
      return (0, i.requestApi)("".concat(m, "/aosmall/_goods_shows"), e);
    };
    n.getGoodsDetail = function (e) {
      return (0, i.requestApiNoAuth)("".concat(g, "/aosmall/_goods_detailv2/").concat(e.id, ".json"), e);
    };
    n.getOrderList = function (e) {
      return (0, i.requestApi)("".concat(m, "/aosbase/orders_show"), e);
    };
    n.getOrderDetail = function (e) {
      return (0, i.requestApi)("".concat(m, "/aosbase/orders_detail"), e);
    };
    n.getBusinessmenOrderDetail = function (e) {
      return (0, i.requestApi)("".concat(m, "/aosbase/mall_orders_detail"), e);
    };
    n.createOrder = function (e) {
      return (0, i.requestApi)("".concat(m, "/aosbase/orders_create"), e, "POST");
    };
    n.cancelOrder = function (e) {
      return (0, i.requestApi)("".concat(m, "/aosbase/orders_cancel"), e, "POST");
    };
    n.deleteOrder = function (e) {
      return (0, i.requestApi)("".concat(m, "/aosbase/orders_delete"), e, "POST");
    };
    n.setOrderDone = function (e) {
      return (0, i.requestApi)("".concat(m, "/aosbase/orders_done"), e);
    };
    n.getOrderPayParams = function (e) {
      return (0, i.requestApi)("".concat(m, "/aosbase/orderpay_do"), e);
    };
    n.getRefundList = function (e) {
      return (0, i.requestApi)("".concat(m, "/aosbase/ordersrefund_show"), e, "POST");
    };
    n.getUserAddressList = function (e) {
      return (0, i.requestApi)("".concat(m, "/aosbase/userdeliveryaddr_show"), e);
    };
    n.getUserAddressDetail = function (e) {
      return (0, i.requestApi)("".concat(m, "/aosbase/userdeliveryaddr_detail"), e);
    };
    n.createUserAddress = function (e) {
      return (0, i.requestApi)("".concat(m, "/aosbase/userdeliveryaddr_create"), e, "POST");
    };
    n.updateUserAddress = function (e) {
      return (0, i.requestApi)("".concat(m, "/aosbase/userdeliveryaddr_update"), e, "POST");
    };
    n.deleteUserAddress = function (e) {
      return (0, i.requestApi)("".concat(m, "/aosbase/userdeliveryaddr_delete"), e, "POST");
    };
    n.continuePayOrder = function (e) {
      return (0, i.requestApi)("".concat(m, "/aosbase/orders_pay_continue"), e, "POST");
    };
    n.getExpressInfo = function (e) {
      return (0, i.requestApi)("".concat(m, "/aosbase/express_show"), e);
    };
    n.writeOffLogin = function (e) {
      return (0, i.requestApi)("".concat(r, "/aos/mall-auth/login"), e, "POST");
    };
    n.getBusinessList = function (e) {
      return (0, i.requestApi)("".concat(m, "/aosmall/_business_show"), e);
    };
    n.getBusinessApplyDetail = function (e) {
      return (0, i.requestApi)("".concat(m, "/aosmall/business_apply_detail"), e);
    };
    n.businessApply = function (e) {
      return (0, i.requestApi)("".concat(m, "/aosmall/business_apply"), e, "POST");
    };
    n.getBusinessAccountInfo = function (e) {
      return (0, i.requestApi)("".concat(r, "/admin/auth/user"), e);
    };
    n.getBusinessStoreShow = function (e) {
      return (0, i.requestApi)("".concat(m, "/aosmall/_business_store_show"), e);
    };
    n.getBusinessClass = function (e) {
      return (0, i.requestApi)("".concat(m, "/aosmall/_businessclass_show"), e);
    };
    n.getBusinessByDistance = function (e) {
      return (0, i.requestApi)("".concat(m, "/aosmall/_business_showbusinessdistance"), e);
    };
    n.getOfflineBusinessClass = function (e) {
      return (0, i.requestApi)("".concat(m, "/aosmall/_offlinebusinessclass_show"), e);
    };
    n.getOfflineBusinessByDistance = function (e) {
      return (0, i.requestApi)("".concat(m, "/aosmall/_offlinebusiness_showdistance"), e);
    };
    n.getBusinessDetail = function (e) {
      return (0, i.requestApi)("".concat(m, "/aosmall/_business_detail"), e);
    };
    n.getBusinessCouponsList = function (e) {
      return (0, i.requestApi)("".concat(m, "/aosmall/_get_business_coupons"), e);
    };
    n.payHongbao = function (e) {
      return (0, i.requestApi)("".concat(m, "/aosbase/ordersmallhongbao_pay"), e, "POST");
    };
    n.getPayDetail = function (e) {
      return (0, i.requestApi)("".concat(m, "/aosbase/_ordersmallhongbao_pay_detail"), e, "POST");
    };
    n.getUserHongbaoDetail = function (e) {
      return (0, i.requestApi)("".concat(m, "/aosbase/ordersmallhongbao_detail"), e, "POST");
    };
    n.getHongbaoBill = function (e) {
      return (0, i.requestApi)("".concat(m, "/aosbase/ordersmallhongbao_writeoff_show"), e, "POST");
    };
    n.getBusienssBillList = function (e) {
      return (0, i.requestApi)("".concat(r, "/aos/baseordermallhongbaouserwriteoff/show"), e, "POST");
    };
    n.writeoffOrder = function (e) {
      return (0, i.requestApi)("".concat(r, "/aos/base-writeoff/writeoff"), e, "POST");
    };
    n.getWriteOffHadList = function (e) {
      return (0, i.requestApi)("".concat(r, "/aos/base-writeoff/show"), e);
    };
    n.getWriteOffNoList = function (e) {
      return (0, i.requestApi)("".concat(r, "/aos/base-writeoff/showno"), e);
    };
    n.getBusinessOrderDetail = function (e) {
      return (0, i.requestApi)("".concat(r, "/aos/baseorder/detail"), e);
    };
    n.getMallBlockList = function (e) {
      var n = getApp().globalData.appid;
      return (0, i.requestApiNoAuth)("".concat(g, "/aosmall/_blocks/").concat(n, ".json"), e);
    };
    n.getWriteoffCountData = function (e) {
      return (0, i.requestApi)("".concat(r, "/aos/base-writeoff/writeoffcount"), e);
    };
    n.submitRefundApply = function (e) {
      return (0, i.requestApi)("".concat(m, "/aosbase/orders_refund"), e, "POST");
    };
    n.getRefundDetail = function (e) {
      return (0, i.requestApi)("".concat(m, "/aosbase/orders_refund_detail"), e);
    };
    n.getBusinessInfoBackstage = function (e) {
      return (0, i.requestApi)("".concat(r, "/aos/mall-business/detail"), e);
    };
    n.getBusinessOrderList = function (e) {
      return (0, i.requestApi)("".concat(r, "/aos/baseorder/show"), e);
    };
    n.getBusinessOrderStatistics = function (e) {
      return (0, i.requestApi)("".concat(r, "/aos/baseorder/statistics"), e);
    };
    n.getBusinessGoodsList = function (e) {
      return (0, i.requestApi)("".concat(r, "/aos/mall-goods/show"), e);
    };
    n.controlGoodsOpen = function (e) {
      return (0, i.requestApi)("".concat(r, "/aos/mall-goods/open"), e);
    };
    n.getBusinessOrdersList = function (e) {
      return (0, i.requestApi)("".concat(r, "/aos/baseorder/show"), e);
    };
    n.getBusinessRefundList = function (e) {
      return (0, i.requestApi)("".concat(r, "/aos/baseorderrefund/show"), e);
    };
    n.refundsend = function (e) {
      return (0, i.requestApi)("".concat(r, "/aos/baseorderrefund/refundsend"), e);
    };
    n.refundRefuse = function (e) {
      return (0, i.requestApi)("".concat(r, "/aos/baseorderrefund/refundrefuse"), e);
    };
    n.getUserMsgList = function (e) {
      return (0, i.requestApi)("".concat(r, "/aos/mall-order-worksheet/show"), e);
    };
    n.getWealactDetail = function (e) {
      return (0, i.requestApi)("".concat(m, "/aosbase/_wealact_detail"), e);
    };
    n.getWealactGoodsList = function (e) {
      return (0, i.requestApi)("".concat(m, "/aosmall/_goods_show_by_wealid"), e);
    };
    n.getCouponWriteOffHadList = function (e) {
      return (0, i.requestApi)("".concat(r, "/aos/basecoupons-writeoff/show"), e);
    };
    n.getCouponWriteOffNoList = function (e) {
      return (0, i.requestApi)("".concat(r, "/aos/basecoupons-writeoff/showno"), e);
    };
    n.getCouponWriteOffDetail = function (e) {
      return (0, i.requestApi)("".concat(r, "/aos/basecoupons-writeoff/detail"), e);
    };
    n.getCouponWriteOffCountData = function (e) {
      return (0, i.requestApi)("".concat(r, "/aos/basecoupons-writeoff/writeoffcount"), e);
    };
    n.writeOffCoupon = function (e) {
      return (0, i.requestApi)("".concat(r, "/aos/basecoupons-writeoff/writeoff"), e, "POST");
    };
    n.getMallHomeBusinessList = function (e) {
      var n = getApp().globalData.appid;
      return (0, i.requestApiNoAuth)("".concat(g, "/aosmall/_business_showv2/").concat(n, ".json"), e);
    };
    n.getBusinessClassList = function () {
      var e = getApp().globalData.appid;
      return (0, i.requestApiNoAuth)("".concat(g, "/aosmall/_businessclass_showv2/").concat(e, ".json"));
    };
    n.bindBusinessWriteOffAccount = function (e) {
      return (0, i.requestApi)("".concat(m, "/aosmall/business_account_bind_user"), e, "POST");
    };
    n.checkBusinessWriteOffAccountIsLogin = function (e) {
      return (0, i.requestApi)("".concat(m, "/aosmall/business_account_is_login"), e, "POST");
    };
    n.getBusinessInfo = function (e) {
      return (0, i.requestApi)("".concat(m, "/aosmall/get_mall_info"), e);
    };
    n.getCouponClassList = function (e) {
      return (0, i.requestApi)("".concat(m, "/aosmall/_mall_coupons_get_class"), e);
    };
    n.getCouponCenterAllList = function (e) {
      return (0, i.requestApi)("".concat(m, "/aosmall/_mall_get_activity_coupons"), e);
    };
    n.getCouponActivityDetail = function (e) {
      return (0, i.requestApi)("".concat(m, "/aosmall/_ac_coupons_detail"), e);
    };
    n.receiveActivityCoupon = function (e) {
      return (0, i.requestApi)("".concat(m, "/aosmall/ac_coupons_sub"), e, "POST");
    };
    n.getGoodsCommentList = function (e) {
      return (0, i.requestApi)("".concat(m, "/aospay/_goods_comments_show"), e);
    };
    n.submitOrderComment = function (e) {
      return (0, i.requestApi)("".concat(c, "/aospay/order_comment_create"), e, "POST");
    };
    n.getMallAccountInfo = function (e) {
      return (0, i.requestApi)("".concat(m, "/aosmall/account_info"), e);
    };
    n.bindAccountOfficial = function (e) {
      return (0, i.requestApi)("".concat(m, "/aosmall/bind_account_official"), e);
    };
    n.getMemberOfficialInfo = function (e) {
      return (0, i.requestApi)("".concat(m, "/aosmall/member_official_info"), e);
    };
    n.createOfflinePayOrder = function (e) {
      return (0, i.requestApi)("".concat(m, "/aosbase/orderoffline_create"), e, "POST");
    };
    n.getOfflinePayDetailList = function (e) {
      return (0, i.requestApi)("".concat(m, "/aosbase/orderoffline_show"), e);
    };
    n.getOfflinePayDetail = function (e) {
      return (0, i.requestApi)("".concat(m, "/aosbase/orderoffline_detail"), e);
    };
    n.getWordDetail = function (e) {
      return (0, i.requestApi)("".concat(m, "/aosword/_detail"), e);
    };
    n.getWordStartgame = function (e) {
      return (0, i.requestApi)("".concat(m, "/aosword/start_game"), e);
    };
    n.getWordCustoms = function (e) {
      return (0, i.requestApi)("".concat(m, "/aosword/get_customs"), e);
    };
    n.getWordValidCustoms = function (e) {
      return (0, i.requestApi)("".concat(m, "/aosword/valid_customs"), e, "POST");
    };
    n.getWordExitgame = function (e) {
      return (0, i.requestApi)("".concat(m, "/aosword/exit_game"), e);
    };
    n.getWordTakeuser = function (e) {
      return (0, i.requestApi)("".concat(m, "/aosword/_take_user"), e);
    };
    n.getWordGettake = function (e) {
      return (0, i.requestApi)("".concat(m, "/aosword/get_take"), e);
    };
    n.getWordGettaketime = function (e) {
      return (0, i.requestApi)("".concat(m, "/aosword/add_take_time"), e);
    };
    n.getAnswerQuestionList = function (e) {
      return (0, i.requestApi)("".concat(m, "/aosanswer/ac_question"), e);
    };
    n.getAnswerDetail = function (e) {
      return (0, i.requestApi)("".concat(m, "/aosanswer/_ac_detail"), e);
    };
    n.submitAnswer = function (e) {
      return (0, i.requestApi)("".concat(m, "/aosanswer/ac_sub"), e, "POST");
    };
    n.getAQRankList = function (e) {
      return (0, i.requestApi)("".concat(m, "/aosanswer/ac_rank"), e);
    };
    n.getAQOrgRankList = function (e) {
      return (0, i.requestApi)("".concat(m, "/aosanswer/_ac_organ"), e);
    };
    n.getAQMoreOrgRankList = function (e) {
      return (0, i.requestApi)("".concat(m, "/aosanswer/_ac_organ_rank"), e);
    };
    n.getAQMoreUserRankList = function (e) {
      return (0, i.requestApi)("".concat(m, "/aosanswer/_ac_user_rank"), e);
    };
    n.getAQMoreOrgRankTitle = function (e) {
      return (0, i.requestApi)("".concat(m, "/aosanswer/ac_organ_title"), e);
    };
    n.getAQRecordList = function (e) {
      return (0, i.requestApi)("".concat(m, "/aosanswer/ac_record"), e);
    };
    n.getAQRecordDetail = function (e) {
      return (0, i.requestApi)("".concat(m, "/aosanswer/ac_record_detail"), e);
    };
    n.createAnswerFissionInviteTask = function (e) {
      return (0, i.requestApi)("".concat(m, "/aosanswer/ac_fissiontaskcreate"), e, "POST");
    };
    n.getAnswerTimes = function (e) {
      return (0, i.requestApi)("".concat(m, "/aosanswer/ac_times"), e, "GET", !0);
    };
    n.checkAnswerOrgIsPass = function (e) {
      return (0, i.requestApi)("".concat(m, "/aosanswer/ac_organcheckuser"), e);
    };
    n.exchangeAnswerChance = function (e) {
      return (0, i.requestApi)("".concat(m, "/aosanswer/ac_as_addtimes"), e);
    };
    n.getVoteDetail = function (e) {
      return (0, i.requestApi)("".concat(c, "/aosvote/_ac_detail"), e);
    };
    n.getVoteOptionList = function (e) {
      return (0, i.requestApi)("".concat(c, "/aosvote/_ac_options"), e);
    };
    n.getVoteOptionDetail = function (e) {
      return (0, i.requestApi)("".concat(c, "/aosvote/_ac_option_detail"), e);
    };
    n.submitVote = function (e) {
      return (0, i.requestApi)("".concat(c, "/aosvote/ac_sub"), e, "POST");
    };
    n.getUserVoteTimes = function (e) {
      return (0, i.requestApi)("".concat(c, "/aosvote/ac_vote_times"), e, "GET", !0);
    };
    n.createVoteFissionInviteTask = function (e) {
      return (0, i.requestApi)("".concat(c, "/aosvote/ac_fissiontaskcreate"), e, "POST");
    };
    n.getVoteJudgeOptionList = function (e) {
      return (0, i.requestApi)("".concat(c, "/aosvote/judge_show"), e);
    };
    n.getVoteJudgeOptionDetail = function (e) {
      return (0, i.requestApi)("".concat(c, "/aosvote/judge_optiondetail"), e);
    };
    n.getVoteJudgeScoreItemList = function (e) {
      return (0, i.requestApi)("".concat(c, "/aosvote/judge_getscoreitem"), e);
    };
    n.bindVoteJudge = function (e) {
      return (0, i.requestApi)("".concat(c, "/aosvote/judge_authbind"), e, "POST");
    };
    n.submitVoteJudgeScore = function (e) {
      return (0, i.requestApi)("".concat(c, "/aosvote/judge_sub"), e, "POST");
    };
    n.checkVoteUserIsInner = function (e) {
      return (0, i.requestApi)("".concat(m, "/aosvote/act_usercheck"), e);
    };
    n.getLotteryDetail = function (e) {
      return (0, i.requestApi)("".concat(m, "/aoslottery/_ac_detail"), e);
    };
    n.submitLottery = function (e) {
      return (0, i.requestApi)("".concat(m, "/aoslottery/ac_sub"), e, "POST");
    };
    n.getUserWinPrizeLog = function (e) {
      return (0, i.requestApi)("".concat(m, "/aoslottery/act_user"), e);
    };
    n.getWinPrizeLogList = function (e) {
      return (0, i.requestApi)("".concat(m, "/aoslottery/act_record"), e);
    };
    n.getWinRecordDetail = function (e) {
      return (0, i.requestApi)("".concat(m, "/aoslottery/record_detail"), e);
    };
    n.getUserLotteryTimes = function (e) {
      return (0, i.requestApi)("".concat(m, "/aoslottery/ac_lottery_times"), e, "GET", !0);
    };
    n.exchangeLotteryTimes = function (e) {
      return (0, i.requestApi)("".concat(m, "/aoslottery/ac_lottery_addtimes"), e, "POST");
    };
    n.writeOffLotteryPrize = function (e) {
      return (0, i.requestApi)("".concat(r, "/aos/lottery-writeoff/writeoff"), e, "POST");
    };
    n.getLotteryWriteOffList = function (e) {
      return (0, i.requestApi)("".concat(r, "/aos/lottery-writeoff/showmy"), e);
    };
    n.getLotteryWriteOffDetail = function (e) {
      return (0, i.requestApi)("".concat(r, "/aos/lottery-writeoff/detail"), e);
    };
    n.getLotteryWriteOffCountData = function (e) {
      return (0, i.requestApi)("".concat(r, "/aos/lottery-writeoff/writeoffcount"), e);
    };
    n.createLotteryFissionInviteTask = function (e) {
      return (0, i.requestApi)("".concat(m, "/aoslottery/ac_fissiontaskcreate"), e, "POST");
    };
    n.updateLotteryUserCollection = function (e) {
      return (0, i.requestApi)("".concat(m, "/aoslottery/ac_user_act_update"), e, "POST");
    };
    n.getWinRecordDetailByCode = function (e) {
      return (0, i.requestApi)("".concat(m, "/aoslottery/record_code_detail"), e);
    };
    n.checkLotteryPassword = function (e) {
      return (0, i.requestApi)("".concat(m, "/aoslottery/password_check"), e);
    };
    n.getFormDetail = function (e) {
      return (0, i.requestApi)("".concat(m, "/aosform/_ac_detail"), e);
    };
    n.getFormRecordDetail = function (e) {
      return (0, i.requestApi)("".concat(m, "/aosform/ac_record_detail"), e);
    };
    n.recordUpdateSubmitForm = function (e) {
      return (0, i.requestApi)("".concat(m, "/aosform/ac_record_update"), e);
    };
    n.submitForm = function (e) {
      return (0, i.requestApi)("".concat(m, "/aosform/ac_sub"), e, "POST");
    };
    n.getUserFormTimes = function (e) {
      return (0, i.requestApi)("".concat(m, "/aosform/ac_form_times"), e, "GET", !0);
    };
    n.getUserFormLogList = function (e) {
      return (0, i.requestApi)("".concat(m, "/aosform/act_user"), e);
    };
    n.getFormLogList = function (e) {
      return (0, i.requestApi)("".concat(m, "/aosform/act_record"), e);
    };
    n.getUserFormLogDetail = function (e) {
      return (0, i.requestApi)("".concat(m, "/aosform/ac_record_detail"), e);
    };
    n.acPicCheck = function (e) {
      return (0, i.requestApi)("".concat(m, "/aosform/ac_piccheck"), e);
    };
    n.checkFormUserIsInner = function (e) {
      return (0, i.requestApi)("".concat(m, "/aosform/act_usercheck"), e);
    };
    n.bindFormWriteOffUser = function (e) {
      return (0, i.requestApi)("".concat(m, "/aosform/auther_authbind"), e, "POST");
    };
    n.getUserFormLogDetailByCode = function (e) {
      return (0, i.requestApi)("".concat(m, "/aosform/auther_useractdetail"), e);
    };
    n.writeOffFormLog = function (e) {
      return (0, i.requestApi)("".concat(m, "/aosform/auther_useractwriteoff"), e, "POST");
    };
    n.getMyFormWriteOffList = function (e) {
      return (0, i.requestApi)("".concat(m, "/aosform/auther_showmy"), e);
    };
    n.getFormActivityList = function (e) {
      return (0, i.requestApi)("".concat(m, "/aosform/_ac_list"), e);
    };
    n.getFormStatList = function (e) {
      return (0, i.requestApi)("".concat(m, "/aosform/_option_stat"), e);
    };
    n.getFormBookDateNumInfo = function (e) {
      return (0, i.requestApi)("".concat(m, "/aosform/ac_getappointnum"), e);
    };
    n.exchangeSignupTimes = function (e) {
      return (0, i.requestApi)("".concat(m, "/aosform/ac_form_addtimes"), e, "POST");
    };
    n.getEcnyformDetail = function (e) {
      return (0, i.requestApi)("".concat(m, "/aosecnyform/_ac_detail"), e);
    };
    n.submitEcnyform = function (e) {
      return (0, i.requestApi)("".concat(m, "/aosecnyform/ac_sub"), e, "POST");
    };
    n.getUserEcnyformTimes = function (e) {
      return (0, i.requestApi)("".concat(m, "/aosecnyform/ac_form_times"), e, "GET", !0);
    };
    n.getUserEcnyformLogList = function (e) {
      return (0, i.requestApi)("".concat(m, "/aosecnyform/act_user"), e);
    };
    n.getUserEcnyformLogDetail = function (e) {
      return (0, i.requestApi)("".concat(m, "/aosecnyform/ac_record_detail"), e);
    };
    n.getEcnyformBusinessList = function (e) {
      return (0, i.requestApi)("".concat(m, "/aosecnyform/business_show"), e);
    };
    n.checkEcnyformIsInLocation = function (e) {
      return (0, i.requestApi)("".concat(m, "/aosecnyform/ac_rulecheck"), e);
    };
    n.sendEcnyformSmsCode = function (e) {
      return (0, i.requestApi)("".concat(m, "/aosecnyform/ac_sms_sendcode"), e, "POST");
    };
    n.getSuperTopicDetail = function (e) {
      return (0, i.requestApi)("".concat(m, "/aossupertopic/_ac_detail"), e);
    };
    n.submitSuperTopic = function (e) {
      return (0, i.requestApi)("".concat(m, "/aossupertopic/ac_sub"), e, "POST");
    };
    n.submitSuperTopicComment = function (e) {
      return (0, i.requestApi)("".concat(m, "/aossupertopic/ac_comment"), e, "POST");
    };
    n.getTaskList = function (e) {
      return (0, i.requestApi)("".concat(m, "/aosbase/_task_show"), e);
    };
    n.getMedalList = function (e) {
      return (0, i.requestApi)("".concat(m, "/aosbase/_medal_show"), e);
    };
    n.getLevelList = function (e) {
      return (0, i.requestApi)("".concat(m, "/aosbase/_level_show"), e);
    };
    n.getCouponList = function (e) {
      return (0, i.requestApi)("".concat(m, "/aosbase/coupons_show"), e);
    };
    n.getCouponDetail = function (e) {
      return (0, i.requestApi)("".concat(m, "/aosbase/coupons_detailmy"), e);
    };
    n.getCurrencyRecordList = function (e) {
      return (0, i.requestApi)("".concat(m, "/aosbase/currency_record"), e);
    };
    n.getMemberGlobalSetting = function (e) {
      return (0, i.requestApi)("".concat(g, "/aosbase/_set_showv2/").concat(e, ".json"));
    };
    n.getSigninActivityDetail = function (e) {
      return (0, i.requestApi)("".concat(m, "/aossignin/_ac_detail"), e);
    };
    n.submitSignin = function (e) {
      return (0, i.requestApi)("".concat(m, "/aossignin/ac_sub"), e, "POST");
    };
    n.getSigninRankList = function (e) {
      return (0, i.requestApi)("".concat(m, "/aossignin/show_rank"), e);
    };
    n.checkSigninIsInLocation = function (e) {
      return (0, i.requestApi)("".concat(m, "/aossignin/ac_rulecheck"), e);
    };
    n.getWithdrawConfig = function (e) {
      return (0, i.requestApi)("".concat(m, "/aosbase/withdraw_getconfig"), e);
    };
    n.submitWithdraw = function (e) {
      return (0, i.requestApi)("".concat(m, "/aosbase/withdraw_sub"), e, "POST");
    };
    n.getWithdrawLogList = function (e) {
      return (0, i.requestApi)("".concat(m, "/aosbase/withdraw_show"), e);
    };
    n.getSigninCurrencyTotal = function (e) {
      return (0, i.requestApi)("".concat(m, "/aosbase/currency_total"), e);
    };
    n.getLaunchContentList = function (e) {
      var n = getApp().globalData.appid;
      return (0, i.requestApiNoAuth)("".concat(g, "/aosput/_content_showv2/").concat(n, "/").concat(e.position_uuid, ".json"), e);
    };
    n.fissionTake = function (e) {
      return (0, i.requestApi)("".concat(m, "/aosfission/task_take"), e, "POST");
    };
    n.getFissionTakeProgress = function (e) {
      return (0, i.requestApi)("".concat(m, "/aosfission/gettaskprogress"), e);
    };
    n.getFissionHelpDetail = function (e) {
      return (0, i.requestApi)("".concat(m, "/aosfission/_help_detail"), e);
    };
    n.createHelpFissionInviteTask = function (e) {
      return (0, i.requestApi)("".concat(m, "/aosfission/help_fissiontaskcreate"), e, "POST");
    };
    n.getFissionHelpRecordlList = function (e) {
      return (0, i.requestApi)("".concat(m, "/aosfission/task_show"), e);
    };
    n.getFissionDilateDetail = function (e) {
      return (0, i.requestApi)("".concat(m, "/aosexpansive/_expansive_detail"), e);
    };
    n.createDilateFissionInviteTask = function (e) {
      return (0, i.requestApi)("".concat(m, "/aosexpansive/get_task"), e, "POST");
    };
    n.gitUserDilateInfo = function (e) {
      return (0, i.requestApi)("".concat(m, "/aosexpansive/expansive_user"), e, "POST");
    };
    n.addUserDilateInviteRecord = function (e) {
      return (0, i.requestApi)("".concat(m, "/aosexpansive/expansive_help_user"), e, "POST");
    };
    n.tipUserIsHelpDilate = function (e) {
      return (0, i.requestApi)("".concat(m, "/aosexpansive/get_task_user"), e, "POST");
    };
    n.getDilateCarouselInfo = function (e) {
      return (0, i.requestApi)("".concat(m, "/aosexpansive/_done_user_list"), e, "POST");
    };
    n.getBagLuckyDraw = function (e) {
      return (0, i.requestApi)("".concat(m, "/aosexpansive/expansive_get_options"), e, "POST");
    };
    n.getInviteRecord = function (e) {
      return (0, i.requestApi)("".concat(m, "/aosexpansive/get_invite_list"), e, "POST");
    };
    n.getStepsportDetail = function (e) {
      return (0, i.requestApi)("".concat(m, "/aosstepsport/_ac_detail"), e);
    };
    n.getTodayAndThisMonthSteps = function (e) {
      return (0, i.requestApi)("".concat(m, "/aosstepsport/usersteps"), e, "POST");
    };
    n.getUserToApplets = function (e) {
      return (0, i.requestApi)("".concat(m, "/aosstepsport/ac_getmini"), e, "POST");
    };
    n.todayRrankingSteps = function (e) {
      return (0, i.requestApi)("".concat(m, "/aosstepsport/_useractday_rank"), e);
    };
    n.AllRrankingSteps = function (e) {
      return (0, i.requestApi)("".concat(m, "/aosstepsport/_useract_rank"), e);
    };
    n.focusOnRrankingSteps = function (e) {
      return (0, i.requestApi)("".concat(m, "/aosstepsport/user_focus_list"), e);
    };
    n.getUserDetailStepsInfo = function (e) {
      return (0, i.requestApi)("".concat(m, "/aosstepsport/_useractday_all"), e);
    };
    n.getUserthisMonthSteps = function (e) {
      return (0, i.requestApi)("".concat(m, "/aosstepsport/_useract_all"), e);
    };
    n.focusOnUsers = function (e) {
      return (0, i.requestApi)("".concat(m, "/aosstepsport/userfocus_sub"), e);
    };
    n.userfocusOnIs = function (e) {
      return (0, i.requestApi)("".concat(m, "/aosstepsport/userfocus_is"), e);
    };
    n.cancelFocusOnUsers = function (e) {
      return (0, i.requestApi)("".concat(m, "/aosstepsport/userfocus_cancel"), e, "POST");
    };
    n.exchangeSuccessUser = function (e) {
      return (0, i.requestApi)("".concat(m, "/aosstepsport/_exchanged_list"), e, "POST");
    };
    n.stepsExchangeIntegral = function (e) {
      return (0, i.requestApi)("".concat(m, "/aosstepsport/useractday_exchange"), e, "POST");
    };
    n.getCurrentUserDetailStepsInfo = function (e) {
      return (0, i.requestApi)("".concat(m, "/aosstepsport/has_exchanged"), e);
    };
    n.getUserDayDetailInfo = function (e) {
      return (0, i.requestApi)("".concat(m, "/aosstepsport/_useract_days_rank"), e);
    };
    n.createStepSportFissionInviteTask = function (e) {
      return (0, i.requestApi)("".concat(m, "/aosstepsport/ac_fissiontaskcreate"), e, "POST");
    };
    n.getCheckersDetail = function (e) {
      return (0, i.requestApi)("".concat(m, "/aoscheckers/_ac_detail"), e);
    };
    n.createCheckersFissionInviteTask = function (e) {
      return (0, i.requestApi)("".concat(m, "/aoscheckers/ac_fissiontaskcreate"), e, "POST");
    };
    n.getUserPlayCheckersTimes = function (e) {
      return (0, i.requestApi)("".concat(m, "/aoscheckers/ac_checkers_times"), e, "GET", !0);
    };
    n.startCheckersGame = function (e) {
      return (0, i.requestApi)("".concat(m, "/aoscheckers/ac_start"), e, "POST");
    };
    n.getCheckersTaskContent = function (e) {
      return (0, i.requestApi)("".concat(m, "/aoscheckers/ac_gettaskcontent"), e);
    };
    n.buyPlayCheckersTimes = function (e) {
      return (0, i.requestApi)("".concat(m, "/aoscheckers/ac_cash"), e, "POST");
    };
    n.submitCheckersGameOver = function (e) {
      return (0, i.requestApi)("".concat(m, "/aoscheckers/ac_sub"), e, "POST");
    };
    n.getPoetryDetail = function (e) {
      return (0, i.requestApi)("".concat(m, "/aospoetry/_ac_detail"), e);
    };
    n.getPoetryPassQuestion = function (e) {
      return (0, i.requestApi)("".concat(m, "/aospoetry/ac_getnext"), e);
    };
    n.submitPoetryPass = function (e) {
      return (0, i.requestApi)("".concat(m, "/aospoetry/ac_sub"), e, "POST");
    };
    n.startPoetrySeekHelp = function (e) {
      return (0, i.requestApi)("".concat(m, "/aospoetry/ac_helpsend"), e, "POST");
    };
    n.getPoetryHelpProgress = function (e) {
      return (0, i.requestApi)("".concat(m, "/aospoetry/ac_checkhelp"), e);
    };
    n.submitPoetryHelp = function (e) {
      return (0, i.requestApi)("".concat(m, "/aospoetry/ac_helpsub"), e, "POST");
    };
    n.getPoetryHelpQuestionDetail = function (e) {
      return (0, i.requestApi)("".concat(m, "/aospoetry/ac_helpdetail"), e);
    };
    n.getPoetryRankList = function (e) {
      return (0, i.requestApi)("".concat(m, "/aospoetry/act_rank"), e);
    };
    n.getPoetryTipTimes = function (e) {
      return (0, i.requestApi)("".concat(m, "/aospoetry/ac_tiptimes"), e);
    };
    n.reSubmitPoetry = function (e) {
      return (0, i.requestApi)("".concat(m, "/aospoetry/ac_resub"), e, "POST");
    };
    n.getLiveDetail = function (e) {
      return (0, i.requestApi)("".concat(m, "/aoslive/_ac_detail"), e);
    };
    n.getLiveGoodsList = function (e) {
      return (0, i.requestApi)("".concat(m, "/aoslive/_goods_list"), e);
    };
    n.getLiveActivityList = function (e) {
      return (0, i.requestApi)("".concat(m, "/aoslive/_ac_show"), e);
    };
    n.getLiveActivityOpMsg = function (e) {
      return (0, i.requestApi)("".concat(m, "/aoslive/_msg"), e);
    };
    n.getLiveReportList = function (e) {
      return (0, i.requestApiNoAuth)("".concat(g, "/aoslive/_acreport_showv2/").concat(e.activity_id, ".json"), e);
    };
    n.getLiveReportClassList = function (e) {
      return (0, i.requestApiNoAuth)("".concat(g, "/aoslive/_acreportclass_showv2/").concat(e.activity_id, ".json"), e);
    };
    n.submitLiveEvent = function (e) {
      return (0, i.requestApi)("".concat(m, "/aosliveonline/sub_event"), e, "POST");
    };
    n.getLiveEventInfo = function (e) {
      return (0, i.requestApiNoAuth)("".concat(g, "/aosliveonline/_get_event/").concat(e, ".json"));
    };
    n.getLiveFastActivityDetail = function (e) {
      return (0, i.requestApi)("".concat(m, "/aoslive/_choose_detail"), e);
    };
    n.submitLiveFastActivity = function (e) {
      return (0, i.requestApi)("".concat(m, "/aoslive/choose_sub"), e, "POST");
    };
    n.getInviteDetail = function (e) {
      return (0, i.requestApi)("".concat(m, "/aosinvite/_ac_detail"), e);
    };
    n.getUserInviteInfo = function (e) {
      return (0, i.requestApi)("".concat(m, "/aosinvite/user_act"), e);
    };
    n.updateUserInviteInfo = function (e) {
      return (0, i.requestApi)("".concat(m, "/aosinvite/user_actupdate"), e, "POST");
    };
    n.submitUserInvite = function (e) {
      return (0, i.requestApi)("".concat(m, "/aosinvite/ac_sub"), e, "POST");
    };
    n.getUserInviteLogList = function (e) {
      return (0, i.requestApi)("".concat(m, "/aosinvite/act_record"), e);
    };
    n.getInviteUserDetail = function (e) {
      return (0, i.requestApi)("".concat(m, "/aosinvite/_user_detail"), e);
    };
    n.getFootmarkDetail = function (e) {
      return (0, i.requestApi)("".concat(m, "/aoslearnfoot/_ac_detail"), e);
    };
    n.getFootmarkPassList = function (e) {
      return (0, i.requestApi)("".concat(m, "/aoslearnfoot/_option_list"), e);
    };
    n.getFootmarkPassDetail = function (e) {
      return (0, i.requestApi)("".concat(m, "/aoslearnfoot/option_detail"), e);
    };
    n.getFootmarkRankList = function (e) {
      return (0, i.requestApi)("".concat(m, "/aoslearnfoot/_organ_rank"), e);
    };
    n.finishFootmarkOptionTask = function (e) {
      return (0, i.requestApi)("".concat(m, "/aoslearnfoot/option_taskdone"), e, "POST");
    };
    n.getActivityTaskList = function (e) {
      return (0, i.requestApi)("".concat(m, "/aosbasemodule/_task_list"), e);
    };
    n.createActivityTask = function (e) {
      return (0, i.requestApi)("".concat(m, "/aosbasemodule/task_create"), e, "POST");
    };
    n.finishActivityTask = function (e) {
      return (0, i.requestApi)("".concat(m, "/aosbasemodule/task_done"), e, "POST");
    };
    n.getActivityTaskDetail = function (e) {
      return (0, i.requestApi)("".concat(m, "/aosbasemodule/_task_detail"), e);
    };
    n.getWishDetail = function (e) {
      return (0, i.requestApi)("".concat(m, "/aoswish/_ac_detail"), e);
    };
    n.makeWishCode = function (e) {
      return (0, i.requestApi)("".concat(m, "/aoswish/ac_makecode"), e, "POST");
    };
    n.getWishInfoByCode = function (e) {
      return (0, i.requestApi)("".concat(m, "/aoswish/ac_getcode"), e);
    };
    n.getClockinDetail = function (e) {
      return (0, i.requestApi)("".concat(m, "/aosclockin/_ac_detail"), e);
    };
    n.submitClockin = function (e) {
      return (0, i.requestApi)("".concat(m, "/aosclockin/ac_sub"), e, "POST");
    };
    n.getClockinRankList = function (e) {
      return (0, i.requestApi)("".concat(m, "/aosclockin/show_rank"), e);
    };
    n.getClockinJoinList = function (e) {
      return (0, i.requestApi)("".concat(m, "/aosclockin/show_user"), e);
    };
    n.checkClockinIsInLocation = function (e) {
      return (0, i.requestApi)("".concat(m, "/aosclockin/ac_rulecheck"), e);
    };
    n.getGuessDetail = function (e) {
      return (0, i.requestApi)("".concat(m, "/aosguess/_ac_detail"), e);
    };
    n.getGuessContestTimeList = function (e) {
      return (0, i.requestApi)("".concat(m, "/aosguess/_contest_timecolumn"), e);
    };
    n.getGuessContestList = function (e) {
      return (0, i.requestApi)("".concat(m, "/aosguess/_contest_show"), e);
    };
    n.submitGuessContest = function (e) {
      return (0, i.requestApi)("".concat(m, "/aosguess/contest_sub"), e, "POST");
    };
    n.getGuessRecordList = function (e) {
      return (0, i.requestApi)("".concat(m, "/aosguess/_act_record"), e);
    };
    n.getMyGuessRecordList = function (e) {
      return (0, i.requestApi)("".concat(m, "/aosguess/act_user"), e);
    };
    n.getStudyPassList = function (e) {
      return (0, i.requestApi)("".concat(m, "/aoslearnfoot/_optionp_list"), e);
    };
    n.getStudyPassDetail = function (e) {
      return (0, i.requestApi)("".concat(m, "/aoslearnfoot/optionp_detail"), e);
    };
    n.getStudyUserRankList = function (e) {
      return (0, i.requestApi)("".concat(m, "/aoslearnfoot/_user_rank"), e);
    };
    n.getStudyUserRecordList = function (e) {
      return (0, i.requestApi)("".concat(m, "/aoslearnfoot/act_user_record"), e);
    };
    n.getStudyUserTotalScore = function (e) {
      return (0, i.requestApi)("".concat(m, "/aoslearnfoot/user_detail"), e);
    };
    n.getScreenInteractDetail = function (e) {
      return (0, i.requestApi)("".concat(m, "/aosscreeninteract/_ac_detail"), e);
    };
    n.getScreenSigninTimes = function (e) {
      return (0, i.requestApi)("".concat(m, "/aosscreeninteract/ac_signin_times"), e);
    };
    n.submitScreenSignin = function (e) {
      return (0, i.requestApi)("".concat(m, "/aosscreeninteract/ac_signin_sub"), e, "POST");
    };
    n.getScreenLotteryLog = function (e) {
      return (0, i.requestApi)("".concat(m, "/aosscreeninteract/act_lottery_user"), e);
    };
    n.getScreenLotteryLogDetail = function (e) {
      return (0, i.requestApi)("".concat(m, "/aosscreeninteract/act_lottery_record_detail"), e);
    };
    n.checkScreenInteractIsInLocation = function (e) {
      return (0, i.requestApi)("".concat(m, "/aosscreeninteract/ac_rulecheck"), e);
    };
    n.checkScreenInteractUserIsInner = function (e) {
      return (0, i.requestApi)("".concat(m, "/aosscreeninteract/act_usercheck"), e);
    };
    n.getPageDesignAttrInfo = function (e) {
      var n = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0,
        o = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 0,
        t = "".concat(g, "/cms/page_getattr/").concat(e, ".json");
      return o ? (t += "?preview=" + o, (0, i.requestApiNoAuth)(t)) : (n && (t += "?_pubid=" + n), (0, i.requestApiNoAuth)(t));
    };
    n.getAIFaceFusionDetail = function (e) {
      return (0, i.requestApi)("".concat(m, "/aosimageai/_ac_detail"), e);
    };
    n.submitAIFaceFusion = function (e) {
      return (0, i.requestApi)("".concat(m, "/aosimageai/imageai_facemerge"), e, "POST");
    };
    n.getFarmDetail = function (e) {
      return (0, i.requestApi)("".concat(m, "/aosfarm/_set_detail"), e);
    };
    n.getFarmUserDetail = function (e) {
      return (0, i.requestApi)("".concat(m, "/aosfarm/farm_user_detail"), e);
    };
    n.getFarmKindClassList = function (e) {
      return (0, i.requestApi)("".concat(m, "/aosfarm/kindclass_list"), e);
    };
    n.buyFarmKind = function (e) {
      return (0, i.requestApi)("".concat(m, "/aosfarm/kind_buy"), e, "POST");
    };
    n.fertilizeFarmKind = function (e) {
      return (0, i.requestApi)("".concat(m, "/aosfarm/kind_dose"), e, "POST");
    };
    n.getFarmUserVegList = function (e) {
      return (0, i.requestApi)("".concat(m, "/aosfarm/farm_user_act_list"), e);
    };
    n.receiveFarmEnergyEveryDay = function (e) {
      return (0, i.requestApi)("".concat(m, "/aosfarm/farm_energy_get"), e, "POST");
    };
    n.pointsConsumed = function (e) {
      return (0, i.requestApi)("".concat(m, "/aosfarm/farm_cousume_addenergy"), e, "POST");
    };
    n.getFarmEnergyUserList = function (e) {
      return (0, i.requestApi)("".concat(m, "/aosfarm/farm_user_get"), e);
    };
    n.collectFarmEnergy = function (e) {
      return (0, i.requestApi)("".concat(m, "/aosfarm/farm_energy_steal"), e, "POST");
    };
    n.getMyFarmTrendsList = function (e) {
      return (0, i.requestApi)("".concat(m, "/aosfarm/farm_energy_record_my"), e);
    };
    n.getFertilizeDayTimes = function (e) {
      return (0, i.requestApi)("".concat(m, "/aosfarm/farm_user_daytimes"), e);
    };
    n.getFarmExchangeLogList = function (e) {
      return (0, i.requestApi)("".concat(m, "/aosfarm/farm_exchange_list"), e);
    };
    n.cancelPlantFarmLand = function (e) {
      return (0, i.requestApi)("".concat(m, "/aosfarm/farm_user_act_discard"), e, "POST");
    };
    n.pluckFarmVeg = function (e) {
      return (0, i.requestApi)("".concat(m, "/aosfarm/farm_exchange_sub"), e, "POST");
    };
    n.getFarmExchangeGoodsList = function (e) {
      return (0, i.requestApi)("".concat(m, "/aosfarm/goods_list"), e);
    };
    n.getFarmExchangeGoodsDetail = function (e) {
      return (0, i.requestApi)("".concat(m, "/aosfarm/goods_detail"), e);
    };
    n.exchangeFarmVeg = function (e) {
      return (0, i.requestApi)("".concat(m, "/aosfarm/farm_exchange_do"), e, "POST");
    };
    n.getFarmGrowupLevelList = function (e) {
      return (0, i.requestApi)("".concat(m, "/aosfarm/kind_list"), e);
    };
    n.buyFarmKindsKind = function (e) {
      return (0, i.requestApi)("".concat(m, "/aosfarmers/kind_buy"), e, "POST");
    };
    n.getFarmKindsDetail = function (e) {
      return (0, i.requestApi)("".concat(m, "/aosfarmers/_activity_detail"), e);
    };
    n.getFarmKindsUserDetail = function (e) {
      return (0, i.requestApi)("".concat(m, "/aosfarmers/farmers_user_detail"), e);
    };
    n.receiveFarmKindsEnergyEveryDay = function (e) {
      return (0, i.requestApi)("".concat(m, "/aosfarmers/farmers_energy_get"), e, "POST");
    };
    n.fertilizeFarmKindsAnimal = function (e) {
      return (0, i.requestApi)("".concat(m, "/aosfarmers/kind_dose"), e, "POST");
    };
    n.getFarmKindsEnergyUserList = function (e) {
      return (0, i.requestApi)("".concat(m, "/aosfarmers/farmers_user_get"), e);
    };
    n.collectFarmKindsEnergy = function (e) {
      return (0, i.requestApi)("".concat(m, "/aosfarmers/farmers_energy_steal"), e, "POST");
    };
    n.getMyFarmKindsTrendsList = function (e) {
      return (0, i.requestApi)("".concat(m, "/aosfarmers/farmers_energy_record_my"), e);
    };
    n.getFarmKindsFertilizeDayTimes = function (e) {
      return (0, i.requestApi)("".concat(m, "/aosfarmers/farmers_user_daytimes"), e);
    };
    n.getFarmKindsExchangeLogList = function (e) {
      return (0, i.requestApi)("".concat(m, "/aosfarmers/farmers_exchange_list"), e);
    };
    n.getFarmKindsExchangeGoodsList = function (e) {
      return (0, i.requestApi)("".concat(m, "/aosfarmers/goods_list"), e);
    };
    n.exchangeFarmKindsGoods = function (e) {
      return (0, i.requestApi)("".concat(m, "/aosfarmers/farmers_exchange_do"), e, "POST");
    };
    n.getFarmKindsInviteLinkParams = function (e) {
      return (0, i.requestApi)("".concat(m, "/aosfarmers/invite_send"), e);
    };
    n.getFarmKindsInviteDetailInfo = function (e) {
      return (0, i.requestApi)("".concat(m, "/aosfarmers/_invite_detail"), e);
    };
    n.joinFarmKindsInviteTeam = function (e) {
      return (0, i.requestApi)("".concat(m, "/aosfarmers/invite_join"), e, "POST");
    };
    n.getFarmKindsAnimal = function (e) {
      return (0, i.requestApi)("".concat(m, "/aosfarmers/farmers_user_act_list"), e);
    };
    n.getFarmKindsGrowupLevelList = function (e) {
      return (0, i.requestApi)("".concat(m, "/aosfarmers/kind_list"), e);
    };
    n.pluckFarmKindsAnimal = function (e) {
      return (0, i.requestApi)("".concat(m, "/aosfarmers/farmers_exchange_sub"), e, "POST");
    };
    n.getNewsActivityDetail = function (e) {
      return (0, i.requestApi)("".concat(m, "/aosnewstask/_ac_detail"), e);
    };
    n.getNewsTaskList = function (e) {
      return (0, i.requestApi)("".concat(m, "/aosnewstask/_option_task"), e);
    };
    n.getNewsTaskDetailInfo = function (e) {
      return (0, i.requestApi)("".concat(m, "/aosnewstask/task_sub"), e);
    };
    n.getVenueClockinActivityDetail = function (e) {
      return (0, i.requestApi)("".concat(m, "/aosvenueclockin/_detail"), e);
    };
    n.likeVenueClockin = function (e) {
      return (0, i.requestApi)("".concat(m, "/aosvenueclockin/ac_like"), e, "POST");
    };
    n.getVenueList = function (e) {
      return (0, i.requestApi)("".concat(m, "/aosvenueclockin/_ac_venue_list"), e);
    };
    n.getVenueDetail = function (e) {
      return (0, i.requestApi)("".concat(m, "/aosvenueclockin/_venue_detail"), e);
    };
    n.getVenueClockinLogList = function (e) {
      return (0, i.requestApi)("".concat(m, "/aosvenueclockin/_venue_take_list"), e);
    };
    n.submitVenueClockin = function (e) {
      return (0, i.requestApi)("".concat(m, "/aosvenueclockin/venue_sub"), e, "POST");
    };
    n.getVenueClockinRankDetail = function (e) {
      return (0, i.requestApi)("".concat(m, "/aosvenueclockin/_user_rank"), e);
    };
    n.getVenueClockinInfo = function (e) {
      return (0, i.requestApi)("".concat(m, "/aosvenueclockin/_venue_my_take"), e);
    };
    n.getClockinVenueRankDetail = function (e) {
      return (0, i.requestApi)("".concat(m, "/aosvenueclockin/_user_venue_rank"), e);
    };
    n.getQueryActivityDetail = function (e) {
      return (0, i.requestApi)("".concat(m, "/aosquery/_detail"), e, "GET");
    };
    n.getQueryField = function (e) {
      return (0, i.requestApi)("".concat(m, "/aosquery/get_search"), e, "GET");
    };
    n.postQueryContent = function (e) {
      return (0, i.requestApi)("".concat(m, "/aosquery/search"), e, "POST");
    };
    n.getWorkSheetId = function (e) {
      return (0, i.requestApi)("".concat(m, "/aosmall/worksheet_detail"), e, "GET");
    };
    n.getBusinessWorkSheetId = function (e) {
      return (0, i.requestApi)("".concat(m, "/aosmall/business_worksheet_detail"), e, "GET");
    };
    n.getWorkSheetMessageList = function (e) {
      return (0, i.requestApi)("".concat(m, "/aosmall/worksheet_messages"), e, "GET");
    };
    n.sendWorkSheetMessage = function (e) {
      return (0, i.requestApi)("".concat(m, "/aosmall/worksheet_message_create"), e, "POST");
    };
    n.readPreSalesUserWorkSheetMessage = function (e) {
      return (0, i.requestApi)("".concat(r, "/aos/mall-order-worksheet/update"), e, "POST");
    };
    n.senPreSalesUserWorkSheetMessage = function (e) {
      return (0, i.requestApi)("".concat(r, "/aos/mall-order-worksheet-message/create"), e, "POST");
    };
    n.getPreSalesUserSessionInfoList = function (e) {
      return (0, i.requestApi)("".concat(r, "/aos/mall-order-worksheet-message/show"), e);
    };
    n.getActivityTypeList = function (e) {
      return (0, i.requestApi)("".concat(m, "/cms/datasource_data/huo_dong_lan_mu_lie_biao.json"), e);
    };
    n.getInJsAccessToken = function () {
      return (0, i.requestApiNoAuth)("".concat(m, "/admin/_service_custom_jsxww_getaccesstoken?access_t_id=1&access_t_id_in=1"));
    };
    n.getTestCouponList = function (e) {
      return (0, i.requestApi)("".concat(m, "/aosbase/_coupons_test_show"), e);
    };
    n.receiveTestCoupon = function (e) {
      return (0, i.requestApi)("".concat(m, "/aosbase/coupons_test_get"), e, "POST");
    };
    n.getCollectActivityDetail = function (e) {
      return (0, i.requestApi)("".concat(m, "/aoscollectcard/_detail"), e);
    };
    n.getAuthorHaveCards = function (e) {
      return (0, i.requestApi)("".concat(m, "/aoscollectcard/ac_have_card_list"), e);
    };
    n.getAuthorDrawCards = function (e) {
      return (0, i.requestApi)("".concat(m, "/aoscollectcard/ac_draw_card"), e);
    };
    n.getAuthorSyntheticCards = function (e) {
      return (0, i.requestApi)("".concat(m, "/aoscollectcard/ac_synthetic_card"), e);
    };
    n.getAuthorSendCards = function (e) {
      return (0, i.requestApi)("".concat(m, "/aoscollectcard/ac_send_card"), e);
    };
    n.getAuthorGetCards = function (e) {
      return (0, i.requestApi)("".concat(m, "/aoscollectcard/ac_get_user_card"), e);
    };
    n.getAuthorCompleteCards = function (e) {
      return (0, i.requestApi)("".concat(m, "/aoscollectcard/_complete_users"), e);
    };
    n.getCardDetail = function (e) {
      return (0, i.requestApi)("".concat(m, "/aoscollectcard/ac_get_card_detail"), e);
    };
    n.getChouKaCount = function (e) {
      return (0, i.requestApi)("".concat(m, "/aoscollectcard/get_user_times"), e);
    };
    n.sendCardRecordList = function (e) {
      return (0, i.requestApi)("".concat(m, "/aoscollectcard/ac_get_send_list"), e);
    };
    n.getBookingLotteryAcDetail = function (e) {
      return (0, i.requestApi)("".concat(m, "/aosreverse/_detail"), e);
    };
    n.getBookingSignupNum = function (e) {
      return (0, i.requestApi)("".concat(m, "/aosreverse/get_signup_num"), e);
    };
    n.getBookingLotteryProgress = function (e) {
      return (0, i.requestApi)("".concat(m, "/aosreverse/user_progress"), e);
    };
    n.submitBookingLotterySignup = function (e) {
      return (0, i.requestApi)("".concat(m, "/aosreverse/user_signup"), e, "POST");
    };
    n.getBookingLotteryUserIsSignup = function (e) {
      return (0, i.requestApi)("".concat(m, "/aosreverse/user_is_signup"), e);
    };
    n.checkBookingLotteryTaskIsFinish = function (e) {
      return (0, i.requestApi)("".concat(m, "/aosreverse/user_is_taskcomplete"), e);
    };
    n.getWhippedActivityDetail = function (e) {
      return (0, i.requestApi)("".concat(m, "/aoswhipped/_detail"), e);
    };
    n.startWhippedGame = function (e) {
      return (0, i.requestApi)("".concat(m, "/aoswhipped/start_game"), e);
    };
    n.postWhippedIdVerify = function (e) {
      return (0, i.requestApi)("".concat(m, "/aosbasemodule/idcard_adult_verify"), e, "POST");
    };
    n.getWhippedDayRankDetail = function (e) {
      return (0, i.requestApi)("".concat(m, "/aoswhipped/_get_day_rank"), e);
    };
    n.getWhippedWeekRankDetail = function (e) {
      return (0, i.requestApi)("".concat(m, "/aoswhipped/_get_week_rank"), e);
    };
    n.getWhippedMonthRankDetail = function (e) {
      return (0, i.requestApi)("".concat(m, "/aoswhipped/_get_month_rank"), e);
    };
    n.getWhippedHistoryRankDetail = function (e) {
      return (0, i.requestApi)("".concat(m, "/aoswhipped/_get_rank"), e);
    };
    n.getGuanDanSettingDetail = function (e) {
      return (0, i.requestApi)("".concat(m, "/aosguandan/_sets"), e);
    };
    n.getGuanDanRankInfo = function (e) {
      return (0, i.requestApi)("".concat(m, "/aosguandan/_rank"), e);
    };
    n.exchangeMoney = function (e) {
      return (0, i.requestApi)("".concat(m, "/aosguandan/integral_consume"), e);
    };
    n.checkGuanDanDetailInfo = function (e) {
      return (0, i.requestApi)("".concat(m, "/aosguandan/mission_sub"), e, "POST");
    };
    n.getGuanDanUserInfo = function (e) {
      return (0, i.requestApi)("".concat(m, "/aosguandan/user_info"), e);
    };
    n.getGuanDanActivityList = function (e) {
      return (0, i.requestApi)("".concat(m, "/aosguandan/_ac_list"), e);
    };
    n.getNschoolSubjectListDetail = function (e) {
      return (0, i.requestApi)("".concat(m, "/aosnschool/_discipline_show"), e);
    };
    n.getNschoolsDetailInfo = function (e) {
      return (0, i.requestApi)("".concat(m, "/aosnschool/_school_detail"), e);
    };
    n.getNschoolsSubjectDetail = function (e) {
      return (0, i.requestApi)("".concat(m, "/aosnschool/_discipline_detail"), e);
    };
    n.getNschoolsLessonList = function (e) {
      return (0, i.requestApi)("".concat(m, "/aosnschool/_course_show"), e);
    };
    n.getNschoolsSignupList = function (e) {
      return (0, i.requestApi)("".concat(m, "/aosnschool/signup_show"), e);
    };
    n.postNschoolsSignup = function (e) {
      return (0, i.requestApi)("".concat(m, "/aosnschool/signup_sub"), e, "POST");
    };
    n.getNschoolsSigninList = function (e) {
      return (0, i.requestApi)("".concat(m, "/aosnschool/signin_show"), e);
    };
    n.postNschoolsSignin = function (e) {
      return (0, i.requestApi)("".concat(m, "/aosnschool/signin_sub"), e);
    };
    n.postPublishInfo = function (e) {
      return (0, i.requestApi)("".concat(f, "/aosinfopub/info_publish"), e, "POST");
    };
    n.getInfoPublishDetail = function (e) {
      return (0, i.requestApi)("".concat(f, "/aosinfopub/_info_detail"), e);
    };
    n.getInfoPublishList = function (e) {
      return (0, i.requestApi)("".concat(f, "/aosinfopub/_info_show"), e);
    };
    n.updateInfoPublishContent = function (e) {
      return (0, i.requestApi)("".concat(f, "/aosinfopub/info_update"), e, "POST");
    };
    n.deleteInfoPublishContent = function (e) {
      return (0, i.requestApi)("".concat(f, "/aosinfopub/info_delete"), e, "POST");
    };
    n.getInfoPublishUserInfo = function (e) {
      return (0, i.requestApi)("".concat(f, "/aosinfopub/userinfo"), e);
    };
    n.postContentInfoReport = function (e) {
      return (0, i.requestApi)("".concat(f, "/aosinfopub/report_create"), e, "POST");
    };
    n.getActivityShowList = function (e) {
      return (0, i.requestApi)("".concat(m, "/aosbase/_activity_show"), e, "POST");
    };
  },
  f473: function (e, n, o) {
    "use strict";

    o("6a54");
    var t = o("f5bd").default;
    Object.defineProperty(n, "__esModule", {
      value: !0
    }), n.default = void 0, o("aa9c");
    var a = t(o("2634")),
      i = t(o("2fdc")),
      r = t(o("671e")),
      u = t(o("df56")),
      l = {
        init: function () {
          var e = this;
          return (0, i.default)((0, a.default)().mark(function n() {
            var o;
            return (0, a.default)().wrap(function (n) {
              while (1) switch (n.prev = n.next) {
                case 0:
                  return n.next = 2, u.default.tenantInitSetting();
                case 2:
                  o = n.sent, o && o.tianmu_open && o.tianmu_appid && e._initGetuiData({
                    sdk_url: "https://cdn-getuigw.getui.com/iopsdk/getuidata.min.js",
                    name: "GetuiDataSDK",
                    appId: o.tianmu_appid,
                    server_url: "https://bggt.tmuyun.com/iop-ps/sdk/data.gif",
                    show_log: !1
                  });
                case 4:
                case "end":
                  return n.stop();
              }
            }, n);
          }))();
        },
        _initGetuiData: function (e) {
          var n = window,
            o = e.name;
          n["GetuiData"] = o, n[o] = n[o] || function (e) {
            return function () {
              (n[o]._q = n[o]._q || []).push([e, arguments]);
            };
          };
          for (var t = ["init", "track", "autoTrack"], a = 0; a < t.length; a++) n[o][t[a]] = n[o].call(null, t[a]);
          var i = document.createElement("script");
          i.type = "text/javascript", i.async = !0, i.src = e.sdk_url;
          var r = document.getElementsByTagName("script")[0];
          n[o].customPara = e, r.parentNode.insertBefore(i, r);
        },
        autoTrack: function () {
          window.GetuiDataSDK && GetuiDataSDK.autoTrack();
        },
        track: function (e) {
          if (window.GetuiDataSDK && e.id && e.title) {
            var n = (0, r.default)(new Date().getTime()).format("YYYY-MM-DD HH:mm:ss");
            GetuiDataSDK.track("newsInfoPv", {
              NewsArticleID: e.id,
              NewsArticleTitle: e.title,
              SelfNewsArticleID: e.id,
              NewsArticlePubtime: n
            });
          }
        }
      },
      s = l;
    n.default = s;
  },
  f635: function (e, n, o) {
    "use strict";

    (function (e) {
      o("6a54");
      var t = o("f5bd").default;
      Object.defineProperty(n, "__esModule", {
        value: !0
      }), n.default = void 0;
      var a = t(o("9b1b")),
        i = t(o("9004"));
      o("5c47"), o("0506"), o("bf0f");
      var r = {
          tenantId: "T_JH",
          siteId: "S_JH"
        },
        u = !1,
        l = null;
      (function () {
        var n = navigator.userAgent.toLowerCase(),
          t = /trs_app/gi.test(n);
        t && Promise.resolve().then(function () {
          return (0, i.default)(o("9adf"));
        }).then(function (n) {
          window.CP = null, l = n.CP, l.ready({
            debug: !1,
            es6Require: !1,
            tenantId: r.tenantId,
            siteId: r.siteId,
            wxOption: {
              debug: !1,
              method: "getShareSign",
              uploadImage: "",
              redirect: window.location.href,
              siteId: r.siteId,
              tenantId: r.tenantId,
              jsApiList: ["onMenuShareTimeline", "onMenuShareQQ", "onMenuShareWeibo", "onMenuShareQZone", "startRecord", "stopRecord", "onVoiceRecordEnd", "onVoicePlayEnd", "uploadVoice", "playVoice", "getLocation", "chooseImage", "uploadImage", "stopVoice", "pauseVoice", "previewImage", "translateVoice", "updateAppMessageShareData", "updateTimelineShareData "]
            },
            ready: function (n) {
              e.log("======trs_client_info==========="), e.log(n), e.log("======trs_client_info==========="), n && "app_embed" == n.client_code && (u = !0);
            },
            error: function (n) {
              e.log("========error=========="), e.log(n), e.log("========error==========");
            }
          });
        });
      })();
      var s = {
          isInApp: function () {
            return u;
          },
          getSystemInfo: function (e) {},
          getUserInfo: function (e) {
            l && this.isInApp() ? l.getCustomerInfo({
              completed: function (n) {
                if (n && n.account_id && "-1" != n.account_id) {
                  var o = {
                    user_id: n.account_id || "",
                    user_name: n.username || n.nick_name || "",
                    portrait_url: n.head_img || "",
                    phone: n.mobile || "",
                    wx_openid: "",
                    wx_unionid: "",
                    app_user_token: n.accessToken || n.token || ""
                  };
                  e && e(o);
                } else e && e(!1);
              },
              cpIncompatible: function (n) {
                e && e(!1);
              }
            }) : e && e(!1);
          },
          getLocation: function (e) {
            var n = {
              latitude: 0,
              longitude: 0
            };
            l ? l.getLocationInfo({
              completed: function (o) {
                n.latitude = o.lat || 0, n.longitude = o.lon || 0, n = (0, a.default)((0, a.default)({}, n), o), e && e(n);
              },
              cpIncompatible: function (o) {
                e && e(n);
              }
            }) : e && e(n);
          },
          shareTo: function () {
            var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {};
            l && this.isInApp() && l.setShare({
              completed: function (e) {},
              cpIncompatible: function () {},
              title: e.title || "",
              shareTo: "",
              link: e.link_url || "",
              imgUrl: e.indexpic || "",
              shareSummary: e.brief || ""
            });
          },
          goToLoginPage: function () {
            l && this.isInApp() && l.showLogin({
              completed: function (n) {
                e.log("show_login", n);
              },
              cpIncompatible: function () {}
            });
          },
          goToBindPage: function () {
            uni.showToast({
              title: "\u8BF7\u524D\u5F80\u4E2A\u4EBA\u4E2D\u5FC3\u7ED1\u5B9A\u5FAE\u4FE1",
              duration: 2000
            });
          },
          saveImage: function () {},
          linkTo: function () {},
          jumpToNews: function () {
            var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : "";
            e && (window.location.href = e);
          },
          goUcenter: function () {},
          playAudio: function () {},
          showShare: function () {
            var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {};
            l && this.isInApp() && l.showShare({
              completed: function (e) {},
              cpIncompatible: function () {},
              title: e.title || "",
              shareTo: "",
              link: e.link_url || "",
              imgUrl: e.indexpic || "",
              shareSummary: e.brief || ""
            });
          },
          closePage: function () {
            l && this.isInApp() && l.closePage();
          },
          openpaper: function () {}
        },
        m = s;
      n.default = m;
    }).call(this, o("ba7c")["default"]);
  },
  fa1b: function (e, n, o) {
    "use strict";

    (function (e) {
      o("6a54");
      var t = o("f5bd").default;
      Object.defineProperty(n, "__esModule", {
        value: !0
      }), n.default = void 0;
      var a = t(o("9b1b")),
        i = t(o("2634")),
        r = t(o("2fdc"));
      o("5c47"), o("0506"), o("e966"), o("d4b5");
      var u = !1;
      (function () {
        var e = navigator.userAgent.toLowerCase();
        if (/ziyangapp/gi.test(e)) {
          var n = document.createElement("script");
          n.src = "https://liveshowoss.sobeylingyun.com/public/sdk_v2.js", document.body.appendChild(n), n.onload = function () {
            u = !0;
          };
        }
      })();
      var l = {
          isInApp: function () {
            return u;
          },
          getSystemInfo: function (e) {},
          getUserInfo: function (e) {
            return (0, r.default)((0, i.default)().mark(function n() {
              var o, t;
              return (0, i.default)().wrap(function (n) {
                while (1) switch (n.prev = n.next) {
                  case 0:
                    if (!window.publicApiObj) {
                      n.next = 7;
                      break;
                    }
                    return n.next = 3, window.publicApiObj.getUserInfo();
                  case 3:
                    o = n.sent, o && o.member_id ? (t = {
                      user_id: o.member_id || "",
                      user_name: o.member_name || "",
                      portrait_url: o.head_pic || "",
                      phone: o.mobile || "",
                      wx_openid: "",
                      wx_unionid: "",
                      app_user_token: o.token || ""
                    }, e && e(t)) : e && e(!1), n.next = 8;
                    break;
                  case 7:
                    e && e(!1);
                  case 8:
                  case "end":
                    return n.stop();
                }
              }, n);
            }))();
          },
          getLocation: function (e) {},
          shareTo: function () {
            var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {};
            if (window.publicApiObj) {
              var n = -1,
                o = getCurrentPages(),
                t = o[o.length - 1];
              t && t.options && t.options["id"] && (n = parseInt(t.options["id"])), window.publicApiObj.settingShare({
                id: n,
                title: e.title,
                description: e.brief,
                share_url: e.link_url,
                share_pic: e.indexpic,
                is_reprint: 1
              }), this.livePageShare((0, a.default)((0, a.default)({}, e), {}, {
                activity_id: n
              }));
            }
          },
          goToLoginPage: function () {
            window.publicApiObj && window.publicApiObj.userLogin();
          },
          goToBindPage: function () {},
          saveImage: function () {},
          linkTo: function () {},
          jumpToNews: function () {
            var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : "";
            e && (window.location.href = e);
          },
          goUcenter: function () {},
          playAudio: function () {},
          showShare: function () {
            var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {};
            window.publicApiObj && window.publicApiObj.openShare({
              title: e.title,
              description: e.brief,
              share_url: e.link_url,
              share_pic: e.indexpic
            });
          },
          livePageShare: function () {
            var n = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {},
              o = {
                news_id: n.activity_id || 0,
                star_id: 0,
                app_id: "videoa01",
                title: n.title,
                intro: n.brief,
                url: n.link_url,
                pic: n.indexpic,
                type: 2,
                hide_share: 0,
                is_reprint: 1,
                is_show_share: 1,
                information_id: 1
              };
            try {
              var t = uni.getSystemInfoSync();
              "android" == t.platform ? (window.tmObj && window.tmObj.livenewsCallback && window.tmObj.livenewsCallback(JSON.stringify(o)), window.tmObj && window.tmObj.informationCallback && window.tmObj.informationCallback(JSON.stringify(o))) : "ios" == t.platform && window.webkit && window.webkit.messageHandlers && window.webkit.messageHandlers.livenewsCallback && (window.webkit.messageHandlers.livenewsCallback.postMessage(o), window.webkit.messageHandlers.informationCallback.postMessage(o), window.livenewsCallback && window.livenewsCallback(JSON.stringify(o)), window.informationCallback && window.informationCallback(JSON.stringify(o)));
            } catch (a) {
              e.log(a);
            }
          },
          openpaper: function () {}
        },
        s = l;
      n.default = s;
    }).call(this, o("ba7c")["default"]);
  },
  fcef: function (e, n, o) {
    "use strict";

    o.r(n);
    var t = o("2d98"),
      a = o.n(t);
    for (var i in t) ["default"].indexOf(i) < 0 && function (e) {
      o.d(n, e, function () {
        return t[e];
      });
    }(i);
    n["default"] = a.a;
  },
  fd6f: function (e, n, o) {
    "use strict";

    function t(e) {
      if (e) {
        var n = JSON.parse(e);
        if (n) {
          var o = n.uid.replaceAll("#", "");
          if ("-1" == o) return !1;
          var t = {
            user_id: n.userid || o,
            user_name: n.username || n.nickname || "\u7528\u6237",
            portrait_url: n.head || "",
            phone: n.phone || "",
            wx_openid: "",
            wx_unionid: "",
            app_user_token: n.token || ""
          };
          return t;
        }
        return !1;
      }
      return !1;
    }
    o("6a54"), Object.defineProperty(n, "__esModule", {
      value: !0
    }), n.default = void 0, o("5c47"), o("a1c1"), o("45da"), o("0506");
    var a = null;
    window.syncUserInfo = function (e) {
      var n = t(e);
      n && (a = n);
    };
    var i = {
        isInApp: function () {
          var e = navigator.userAgent.toLowerCase();
          return !!/xyApp/gi.test(e);
        },
        getSystemInfo: function (e) {},
        getUserInfo: function (e) {
          a ? e && e(a) : (this.goToLoginPage(), window.syncUserInfo = function (n) {
            var o = t(n);
            o ? (a = o, e && e(a)) : e && e(!1);
          });
        },
        getLocation: function (e) {},
        shareTo: function () {},
        goToLoginPage: function () {
          window.syncUserInfo = function () {}, window.location.href = "login:///";
        },
        goToBindPage: function () {},
        saveImage: function () {},
        linkTo: function () {},
        jumpToNews: function () {},
        goUcenter: function () {},
        playAudio: function () {},
        showShare: function () {},
        openpaper: function () {}
      },
      r = i;
    n.default = r;
  }
});