//Sun Sep 29 2024 11:50:31 GMT+0000 (Coordinated Universal Time)
//Base:https://github.com/echo094/decode-js
//Modify:https://github.com/smallfawn/decode_action
(function (e) {
  function n(n) {
    for (var o, r, u = n[0], l = n[1], s = n[2], d = 0, c = []; d < u.length; d++) r = u[d], Object.prototype.hasOwnProperty.call(i, r) && i[r] && c.push(i[r][0]), i[r] = 0;
    for (o in l) Object.prototype.hasOwnProperty.call(l, o) && (e[o] = l[o]);
    m && m(n);
    while (c.length) c.shift()();
    return a.push.apply(a, s || []), t();
  }
  function t() {
    for (var e, n = 0; n < a.length; n++) {
      for (var t = a[n], o = !0, u = 1; u < t.length; u++) {
        var l = t[u];
        0 !== i[l] && (o = !1);
      }
      o && (a.splice(n--, 1), e = r(r.s = t[0]));
    }
    return e;
  }
  var o = {},
    i = {
      index: 0
    },
    a = [];
  function r(n) {
    if (o[n]) return o[n].exports;
    var t = o[n] = {
      i: n,
      l: !1,
      exports: {}
    };
    return e[n].call(t.exports, t, t.exports, r), t.l = !0, t.exports;
  }
  r.e = function (e) {
    var n = [],
      t = i[e];
    if (0 !== t) if (t) n.push(t[2]);else {
      var o = new Promise(function (n, o) {
        t = i[e] = [n, o];
      });
      n.push(t[2] = o);
      var a,
        u = document.createElement("script");
      u.charset = "utf-8", u.timeout = 120, r.nc && u.setAttribute("nonce", r.nc), u.src = function (e) {
        return r.p + "static/js/" + ({
          "module-activity-home-home~module-answer-home-home~module-answer-question-question~module-article-tas~d29a41ac": "module-activity-home-home~module-answer-home-home~module-answer-question-question~module-article-tas~d29a41ac",
          "module-activity-home-home~module-answer-home-home~module-answer-question-question~module-article-tas~be372959": "module-activity-home-home~module-answer-home-home~module-answer-question-question~module-article-tas~be372959",
          "module-activity-home-home~module-answer-home-home~module-answer-question-question~module-article-tas~0b8a7094": "module-activity-home-home~module-answer-home-home~module-answer-question-question~module-article-tas~0b8a7094",
          "module-activity-home-home~module-answer-home-home~module-answer-question-question~module-article-tas~ef19aba9": "module-activity-home-home~module-answer-home-home~module-answer-question-question~module-article-tas~ef19aba9",
          "module-activity-home-home": "module-activity-home-home",
          "module-answer-home-home": "module-answer-home-home",
          "module-answer-question-question": "module-answer-question-question",
          "module-article-task-home-home": "module-article-task-home-home",
          "module-bobing-home-home": "module-bobing-home-home",
          "module-bobing-room-room-detail": "module-bobing-room-room-detail",
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
          "module-lottery-home-home": "module-lottery-home-home",
          "module-mall-business-business-detail": "module-mall-business-business-detail",
          "module-mall-business-business-home": "module-mall-business-business-home",
          "module-mall-business-business-home-style-three": "module-mall-business-business-home-style-three",
          "module-mall-coupon-coupon-center": "module-mall-coupon-coupon-center",
          "module-mall-goods-auction-goods-list": "module-mall-goods-auction-goods-list",
          "module-mall-goods-detail-goods-detail": "module-mall-goods-detail-goods-detail",
          "module-mall-goods-detail-goods-detail-style-three": "module-mall-goods-detail-goods-detail-style-three",
          "module-mall-goodslist-goodslist": "module-mall-goodslist-goodslist",
          "module-mall-home-home": "module-mall-home-home",
          "module-mall-home-home-style-four": "module-mall-home-home-style-four",
          "module-mall-home-home-style-three": "module-mall-home-home-style-three",
          "module-mall-home-home-style-two": "module-mall-home-home-style-two",
          "module-mall-home-mall-home": "module-mall-home-mall-home",
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
          "module-venue-clockin-group-group-list": "module-venue-clockin-group-group-list",
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
          "module-answer-answer-log-answer-detail~module-customer-fhtvn-no-rank-list~module-customer-fhtvn-rank~d5a9cb9a": "module-answer-answer-log-answer-detail~module-customer-fhtvn-no-rank-list~module-customer-fhtvn-rank~d5a9cb9a",
          "module-live-detail-detail": "module-live-detail-detail",
          "module-clockin-cert-get-cert~module-cms-news-detail~module-cms-video-detail~module-customer-fjdaily-~4f8830ac": "module-clockin-cert-get-cert~module-cms-news-detail~module-cms-video-detail~module-customer-fjdaily-~4f8830ac",
          "module-clockin-cert-get-cert~module-cms-news-detail~module-cms-video-detail~module-customer-fjdaily-~aa7fb99f": "module-clockin-cert-get-cert~module-cms-news-detail~module-cms-video-detail~module-customer-fjdaily-~aa7fb99f",
          "module-screen-interact-home-home": "module-screen-interact-home-home",
          "module-farm-game-game~module-farm-goods-exchange-goods-exchange~module-farm-goods-list-goods-list": "module-farm-game-game~module-farm-goods-exchange-goods-exchange~module-farm-goods-list-goods-list",
          "module-booking-lottery-task-task~module-farm-game-game": "module-booking-lottery-task-task~module-farm-game-game",
          "module-farm-game-game": "module-farm-game-game",
          "module-clockin-log-log~module-cms-news-detail~module-cms-video-detail~module-customer-fjdaily-clocki~654be37c": "module-clockin-log-log~module-cms-news-detail~module-cms-video-detail~module-customer-fjdaily-clocki~654be37c",
          "module-cms-news-detail": "module-cms-news-detail",
          "module-cms-video-detail": "module-cms-video-detail",
          "module-customer-fjdaily-clockin": "module-customer-fjdaily-clockin",
          "module-neurocat-game-game": "module-neurocat-game-game",
          "module-venue-clockin-detail-detail": "module-venue-clockin-detail-detail",
          "module-word-game-game": "module-word-game-game",
          "module-mall-confirm-order-confirm-order~module-mall-confirm-order-confirm-order-cart~module-mall-goo~0e644f91": "module-mall-confirm-order-confirm-order~module-mall-confirm-order-confirm-order-cart~module-mall-goo~0e644f91",
          "module-mall-confirm-order-confirm-order": "module-mall-confirm-order-confirm-order",
          "module-mall-confirm-order-confirm-order-cart": "module-mall-confirm-order-confirm-order-cart",
          "module-member-cashout-cashout": "module-member-cashout-cashout",
          "module-ai-face-fusion-home-home": "module-ai-face-fusion-home-home",
          "module-answer-answer-log-answer-detail": "module-answer-answer-log-answer-detail",
          "module-clockin-cert-get-cert~module-customer-xmtv-flowers~module-guandan-rank-rank-detail~module-lot~3a7f0b09": "module-clockin-cert-get-cert~module-customer-xmtv-flowers~module-guandan-rank-rank-detail~module-lot~3a7f0b09",
          "module-guandan-rank-rank-detail": "module-guandan-rank-rank-detail",
          "module-ecnyform-activity-log-my-log-list~module-ecnyform-business-list~module-guess-log-pk-log~modul~87d9fdef": "module-ecnyform-activity-log-my-log-list~module-ecnyform-business-list~module-guess-log-pk-log~modul~87d9fdef",
          "module-mall-writeoff-manage-refund": "module-mall-writeoff-manage-refund",
          "module-customer-fhtvn-no-rank-list~module-customer-fhtvn-rank-list": "module-customer-fhtvn-no-rank-list~module-customer-fhtvn-rank-list",
          "module-customer-fhtvn-no-rank-list": "module-customer-fhtvn-no-rank-list",
          "module-customer-fhtvn-rank-list": "module-customer-fhtvn-rank-list",
          "module-mall-business-offline-business": "module-mall-business-offline-business",
          "module-mall-comment-comment-center": "module-mall-comment-comment-center",
          "module-mall-writeoff-manage-goods": "module-mall-writeoff-manage-goods",
          "module-mall-writeoff-manage-order": "module-mall-writeoff-manage-order",
          "module-live-home-home": "module-live-home-home",
          "module-lottery-win-record-detail-win-record-detail~module-lottery-writeoff-confirm~module-lottery-wr~345e859a": "module-lottery-win-record-detail-win-record-detail~module-lottery-writeoff-confirm~module-lottery-wr~345e859a",
          "module-mall-order-detail-order-detail~module-mall-order-detail-order-detail-businessmen": "module-mall-order-detail-order-detail~module-mall-order-detail-order-detail-businessmen",
          "module-mall-order-detail-order-detail": "module-mall-order-detail-order-detail",
          "module-lottery-writeoff-loglist": "module-lottery-writeoff-loglist",
          "module-mall-coupon-coupon-list": "module-mall-coupon-coupon-list",
          "module-mall-exchange-log-exchange-log": "module-mall-exchange-log-exchange-log",
          "module-mall-exchange-log-exchange-log-style-four": "module-mall-exchange-log-exchange-log-style-four",
          "module-mall-goods-auction-my-order-list": "module-mall-goods-auction-my-order-list",
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
          "module-article-task-single-single-task": "module-article-task-single-single-task",
          "module-bobing-rank-rank-detail": "module-bobing-rank-rank-detail",
          "module-bobing-rule-activity-rule": "module-bobing-rule-activity-rule",
          "module-booking-lottery-task-task": "module-booking-lottery-task-task",
          "module-clockin-cert-get-cert~module-lottery-win-record-win-record": "module-clockin-cert-get-cert~module-lottery-win-record-win-record",
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
          "module-info-pub-report-report~module-live-report-report~module-mall-business-apply~module-mall-comme~3b1de550": "module-info-pub-report-report~module-live-report-report~module-mall-business-apply~module-mall-comme~3b1de550",
          "module-mall-address-address-detail~module-mall-business-apply": "module-mall-address-address-detail~module-mall-business-apply",
          "module-mall-business-apply": "module-mall-business-apply",
          "module-mall-address-address-detail": "module-mall-address-address-detail",
          "module-clockin-log-log": "module-clockin-log-log",
          "module-mall-goodslist-goods-channel-list~module-mall-goodslist-goods-class-list~module-mall-home-search-home": "module-mall-goodslist-goods-channel-list~module-mall-goodslist-goods-class-list~module-mall-home-search-home",
          "module-mall-home-search-home": "module-mall-home-search-home",
          "module-supertopic-detail-mylog": "module-supertopic-detail-mylog",
          "module-clockin-member-join-list": "module-clockin-member-join-list",
          "module-clockin-member-rank-list": "module-clockin-member-rank-list",
          "module-cms-atlas-detail": "module-cms-atlas-detail",
          "module-customer-fhtvn-main-map": "module-customer-fhtvn-main-map",
          "module-customer-fjdaily-guide": "module-customer-fjdaily-guide",
          "module-customer-kannh-game": "module-customer-kannh-game",
          "module-customer-retirement-index": "module-customer-retirement-index",
          "module-customer-xmtv-publicize~module-customer-xmtv-short-videos": "module-customer-xmtv-publicize~module-customer-xmtv-short-videos",
          "module-customer-xmtv-publicize": "module-customer-xmtv-publicize",
          "module-customer-xmtv-short-videos": "module-customer-xmtv-short-videos",
          "module-customer-xstv-guide": "module-customer-xstv-guide",
          "module-ecnyform-activity-log-my-log-list": "module-ecnyform-activity-log-my-log-list",
          "module-ecnyform-business-list": "module-ecnyform-business-list",
          "module-guess-log-pk-log": "module-guess-log-pk-log",
          "module-mall-business-business": "module-mall-business-business",
          "module-mall-business-business-new": "module-mall-business-business-new",
          "module-mall-business-business-new-style-four": "module-mall-business-business-new-style-four",
          "module-mall-comment-comment": "module-mall-comment-comment",
          "module-mall-writeoff-manage-customer": "module-mall-writeoff-manage-customer",
          "module-mall-writeoff-manage-offline": "module-mall-writeoff-manage-offline",
          "module-farm-goods-list-goods-list": "module-farm-goods-list-goods-list",
          "module-farm-kinds-goods-list-goods-list": "module-farm-kinds-goods-list-goods-list",
          "module-footmark-log-detail-log-detail": "module-footmark-log-detail-log-detail",
          "module-guess-log-activity-log": "module-guess-log-activity-log",
          "module-info-pub-report-report": "module-info-pub-report-report",
          "module-live-report-report": "module-live-report-report",
          "module-mall-comment-comment-create": "module-mall-comment-comment-create",
          "module-mall-refund-apply~module-mall-refund-shoppingmall-apply": "module-mall-refund-apply~module-mall-refund-shoppingmall-apply",
          "module-mall-refund-apply": "module-mall-refund-apply",
          "module-mall-refund-shoppingmall-apply": "module-mall-refund-shoppingmall-apply",
          "module-mall-goods-auction-goods-detail~module-signup-activity-log-log-detail": "module-mall-goods-auction-goods-detail~module-signup-activity-log-log-detail",
          "module-signup-activity-log-log-detail": "module-signup-activity-log-log-detail",
          "module-signup-writeoff-confirm": "module-signup-writeoff-confirm",
          "module-lottery-win-record-detail-win-record-detail": "module-lottery-win-record-detail-win-record-detail",
          "module-lottery-writeoff-confirm": "module-lottery-writeoff-confirm",
          "module-lottery-writeoff-logdetail": "module-lottery-writeoff-logdetail",
          "module-mall-order-detail-order-detail-businessmen": "module-mall-order-detail-order-detail-businessmen",
          "module-mall-coupon-coupon-detail": "module-mall-coupon-coupon-detail",
          "module-mall-hongbao-pay-detail": "module-mall-hongbao-pay-detail",
          "module-mall-writeoff-confirm": "module-mall-writeoff-confirm",
          "module-mall-writeoff-coupon-confirm": "module-mall-writeoff-coupon-confirm",
          "module-mall-writeoff-coupon-logdetail": "module-mall-writeoff-coupon-logdetail",
          "module-mall-writeoff-logdetail": "module-mall-writeoff-logdetail",
          "module-mall-writeoff-receive-money": "module-mall-writeoff-receive-money",
          "module-lottery-writeoff-home": "module-lottery-writeoff-home",
          "module-lottery-writeoff-success": "module-lottery-writeoff-success",
          "module-mall-bind-auth-bind": "module-mall-bind-auth-bind",
          "module-mall-bind-login": "module-mall-bind-login",
          "module-mall-cart-cart": "module-mall-cart-cart",
          "module-mall-goods-auction-goods-detail": "module-mall-goods-auction-goods-detail",
          "module-mall-coupon-coupon-show-list": "module-mall-coupon-coupon-show-list",
          "module-mall-customer-business-customer~module-mall-customer-customer": "module-mall-customer-business-customer~module-mall-customer-customer",
          "module-mall-customer-business-customer": "module-mall-customer-business-customer",
          "module-mall-customer-customer": "module-mall-customer-customer",
          "module-mall-customer-pre-sales-customer": "module-mall-customer-pre-sales-customer",
          "module-mall-goods-activity-goods-activity": "module-mall-goods-activity-goods-activity",
          "module-mall-goods-auction-bidding-log": "module-mall-goods-auction-bidding-log",
          "module-mall-goodslist-goods-channel-list~module-mall-goodslist-goods-class-list": "module-mall-goodslist-goods-channel-list~module-mall-goodslist-goods-class-list",
          "module-mall-goodslist-goods-channel-list": "module-mall-goodslist-goods-channel-list",
          "module-mall-goodslist-goods-class-list": "module-mall-goodslist-goods-class-list",
          "module-mall-offline-pay-log-detail": "module-mall-offline-pay-log-detail",
          "module-mall-offline-pay-log-list": "module-mall-offline-pay-log-list",
          "module-mall-order-detail-no-order-deatil": "module-mall-order-detail-no-order-deatil",
          "module-mall-order-result-order-result": "module-mall-order-result-order-result",
          "module-mall-refund-detail": "module-mall-refund-detail",
          "module-mall-user-user-center": "module-mall-user-user-center",
          "module-mall-user-user-center-style-four": "module-mall-user-user-center-style-four",
          "module-mall-writeoff-coupon-home": "module-mall-writeoff-coupon-home",
          "module-mall-writeoff-coupon-success": "module-mall-writeoff-coupon-success",
          "module-mall-writeoff-home": "module-mall-writeoff-home",
          "module-mall-writeoff-login": "module-mall-writeoff-login",
          "module-mall-writeoff-manage-home": "module-mall-writeoff-manage-home",
          "module-mall-writeoff-order-detail": "module-mall-writeoff-order-detail",
          "module-mall-writeoff-pay-detail": "module-mall-writeoff-pay-detail",
          "module-mall-writeoff-success": "module-mall-writeoff-success",
          "module-mall-writeoff-type-select": "module-mall-writeoff-type-select",
          "module-member-bind-bind-wechat": "module-member-bind-bind-wechat",
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
          "module-sdk-demo-cmstopnewsdk": "module-sdk-demo-cmstopnewsdk",
          "module-sdk-demo-cmstopsdk": "module-sdk-demo-cmstopsdk",
          "module-sdk-demo-cmstopv3sdk": "module-sdk-demo-cmstopv3sdk",
          "module-sdk-demo-fangzhengsdk": "module-sdk-demo-fangzhengsdk",
          "module-sdk-demo-fluttersdk": "module-sdk-demo-fluttersdk",
          "module-sdk-demo-injssdk": "module-sdk-demo-injssdk",
          "module-sdk-demo-jingmaishansdk": "module-sdk-demo-jingmaishansdk",
          "module-sdk-demo-jssdk": "module-sdk-demo-jssdk",
          "module-sdk-demo-nbtvsdk": "module-sdk-demo-nbtvsdk",
          "module-sdk-demo-smartcitysdk": "module-sdk-demo-smartcitysdk",
          "module-sdk-demo-tianmasdk": "module-sdk-demo-tianmasdk",
          "module-sdk-demo-tianmusdk": "module-sdk-demo-tianmusdk",
          "module-sdk-demo-trssdk": "module-sdk-demo-trssdk",
          "module-sdk-demo-unisdk": "module-sdk-demo-unisdk",
          "module-sdk-demo-xingkongyunsdk": "module-sdk-demo-xingkongyunsdk",
          "module-sdk-demo-xiuzhousdk": "module-sdk-demo-xiuzhousdk",
          "module-sdk-demo-yantaisdk": "module-sdk-demo-yantaisdk",
          "module-sdk-demo-yongpaisdk": "module-sdk-demo-yongpaisdk",
          "module-sdk-demo-ziyangsdk": "module-sdk-demo-ziyangsdk",
          "module-signup-activity-log-log-list": "module-signup-activity-log-log-list",
          "module-signup-activity-log-my-log-list": "module-signup-activity-log-my-log-list",
          "module-signup-writeoff-auth-bind": "module-signup-writeoff-auth-bind",
          "module-signup-writeoff-writeoff-list": "module-signup-writeoff-writeoff-list",
          "pages-activity-help-rank": "pages-activity-help-rank",
          "pages-download-close-page": "pages-download-close-page",
          "pages-download-tianmu-download": "pages-download-tianmu-download",
          "pages-home-callback": "pages-home-callback",
          "pages-home-error": "pages-home-error",
          "pages-home-sdk": "pages-home-sdk",
          "pages-home-sdk-activity": "pages-home-sdk-activity",
          "pages-home-sdk-me": "pages-home-sdk-me",
          "pages-setting-clear": "pages-setting-clear"
        }[e] || e) + "." + {
          "module-activity-home-home~module-answer-home-home~module-answer-question-question~module-article-tas~d29a41ac": "9077f111",
          "module-activity-home-home~module-answer-home-home~module-answer-question-question~module-article-tas~be372959": "aed17d62",
          "module-activity-home-home~module-answer-home-home~module-answer-question-question~module-article-tas~0b8a7094": "3cfdca06",
          "module-activity-home-home~module-answer-home-home~module-answer-question-question~module-article-tas~ef19aba9": "7ecd7f71",
          "module-activity-home-home": "e63ab3dd",
          "module-answer-home-home": "8823e9d8",
          "module-answer-question-question": "cdeb74fb",
          "module-article-task-home-home": "2a216f4e",
          "module-bobing-home-home": "e0756d75",
          "module-bobing-room-room-detail": "dca704db",
          "module-booking-lottery-home-home": "490b931d",
          "module-checkers-home-home": "8f698b4f",
          "module-clockin-home-home": "a9182d4d",
          "module-collect-card-home-home": "6e3692b9",
          "module-customer-fjdaily-home": "7f2bf584",
          "module-dilate-home-home": "8d636b43",
          "module-ecnyform-home-home": "d7e6ddbe",
          "module-farm-home-home": "2a59599b",
          "module-farm-kinds-home-home": "3b60cc3f",
          "module-footmark-home-home": "3b42806c",
          "module-guandan-home-home": "5b06ace5",
          "module-guandan-home-home-two": "20e103f9",
          "module-guess-home-home": "86fddce0",
          "module-guess-home-pk": "2a61037f",
          "module-help-home-home": "547456b2",
          "module-info-pub-home-detail": "5e61db46",
          "module-info-pub-home-mine": "78575672",
          "module-info-pub-home-publish": "cc57a785",
          "module-invite-home-home": "bfff9e8c",
          "module-invite-invite-invite": "8f53be63",
          "module-lottery-home-home": "e6197666",
          "module-mall-business-business-detail": "6656ebb7",
          "module-mall-business-business-home": "321f8425",
          "module-mall-business-business-home-style-three": "54e2e22c",
          "module-mall-coupon-coupon-center": "d06eb904",
          "module-mall-goods-auction-goods-list": "ff100554",
          "module-mall-goods-detail-goods-detail": "e9fd7305",
          "module-mall-goods-detail-goods-detail-style-three": "6d052d72",
          "module-mall-goodslist-goodslist": "ad05ed7f",
          "module-mall-home-home": "fef3599e",
          "module-mall-home-home-style-four": "ea5a816a",
          "module-mall-home-home-style-three": "27fe1fd8",
          "module-mall-home-home-style-two": "54bb8024",
          "module-mall-home-mall-home": "d0e07ec7",
          "module-mall-hongbao-bill": "95a6cf24",
          "module-mall-hongbao-pay": "85c9a573",
          "module-mall-notify-wechat-notify": "01c21a53",
          "module-mall-offline-pay": "24564d04",
          "module-mall-seckill-seckill": "efed5dcf",
          "module-mall-writeoff-bill": "0cc2fb42",
          "module-neurocat-home-home": "8ed335d6",
          "module-nschool-home-home": "d581c157",
          "module-nschool-subject-subject-info-detail": "21a7a738",
          "module-page-home-home": "b21cd8c8",
          "module-photo-home-home": "3aa6c01e",
          "module-poetry-home-home": "6303499c",
          "module-poetry-home-home-two": "09700e55",
          "module-poetry-question-question": "db82a536",
          "module-poetry-question-question-two": "51369ac8",
          "module-query-home-home": "90d41c84",
          "module-signin-home-home": "084d74a8",
          "module-signup-home-home": "803e0226",
          "module-signup-home-update-home": "251a397d",
          "module-stepsport-home-home": "4aefcbcb",
          "module-study-home-home": "a84caa16",
          "module-study-pass-detail-pass-detail": "b377ce3b",
          "module-supertopic-detail-detail": "83d282ff",
          "module-supertopic-home-home": "3dc9e96a",
          "module-venue-clockin-group-group-list": "2cef914a",
          "module-venue-clockin-home-home": "7912ab53",
          "module-vote-home-home": "28beeba7",
          "module-vote-score-detail": "67450115",
          "module-vote-score-home": "0b945c12",
          "module-vote-vote-detail-vote-detail": "67f24bcc",
          "module-whipped-eggs-home-home": "f116f9e1",
          "module-wish-home-home": "e40bf3ee",
          "module-word-home-home": "ff6ad974",
          "pages-home-index": "0cefcb29",
          "pages-member-task-center": "61c57785",
          "pages-member-user-center": "cfe5080d",
          "pages-shopping-mall-home": "e9927549",
          "module-answer-answer-log-answer-detail~module-customer-fhtvn-no-rank-list~module-customer-fhtvn-rank~d5a9cb9a": "5b311cf1",
          "module-live-detail-detail": "d56448e4",
          "module-clockin-cert-get-cert~module-cms-news-detail~module-cms-video-detail~module-customer-fjdaily-~4f8830ac": "17320262",
          "module-clockin-cert-get-cert~module-cms-news-detail~module-cms-video-detail~module-customer-fjdaily-~aa7fb99f": "c3939adc",
          "module-screen-interact-home-home": "3c58215d",
          "module-farm-game-game~module-farm-goods-exchange-goods-exchange~module-farm-goods-list-goods-list": "ec9d40ad",
          "module-booking-lottery-task-task~module-farm-game-game": "a446cb7e",
          "module-farm-game-game": "2b29a821",
          "module-clockin-log-log~module-cms-news-detail~module-cms-video-detail~module-customer-fjdaily-clocki~654be37c": "49c1eea8",
          "module-cms-news-detail": "a26bafe2",
          "module-cms-video-detail": "505da1a1",
          "module-customer-fjdaily-clockin": "3f5505b7",
          "module-neurocat-game-game": "d186cd8c",
          "module-venue-clockin-detail-detail": "b0955838",
          "module-word-game-game": "7a6d3ab3",
          "module-mall-confirm-order-confirm-order~module-mall-confirm-order-confirm-order-cart~module-mall-goo~0e644f91": "66e89f42",
          "module-mall-confirm-order-confirm-order": "1d95fecb",
          "module-mall-confirm-order-confirm-order-cart": "2157c9e0",
          "module-member-cashout-cashout": "2d1c2b40",
          "module-ai-face-fusion-home-home": "234768ea",
          "module-answer-answer-log-answer-detail": "9a01e4ce",
          "module-clockin-cert-get-cert~module-customer-xmtv-flowers~module-guandan-rank-rank-detail~module-lot~3a7f0b09": "8d61f9fb",
          "module-guandan-rank-rank-detail": "f5b9d3e0",
          "module-ecnyform-activity-log-my-log-list~module-ecnyform-business-list~module-guess-log-pk-log~modul~87d9fdef": "7eebd691",
          "module-mall-writeoff-manage-refund": "f2d2b0ef",
          "module-customer-fhtvn-no-rank-list~module-customer-fhtvn-rank-list": "b8c75d7b",
          "module-customer-fhtvn-no-rank-list": "53e76fe9",
          "module-customer-fhtvn-rank-list": "30aae016",
          "module-mall-business-offline-business": "aab4a74b",
          "module-mall-comment-comment-center": "ef5af703",
          "module-mall-writeoff-manage-goods": "b279c013",
          "module-mall-writeoff-manage-order": "edea6a02",
          "module-live-home-home": "b1404851",
          "module-lottery-win-record-detail-win-record-detail~module-lottery-writeoff-confirm~module-lottery-wr~345e859a": "c7f74fae",
          "module-mall-order-detail-order-detail~module-mall-order-detail-order-detail-businessmen": "8d7997db",
          "module-mall-order-detail-order-detail": "011ce43a",
          "module-lottery-writeoff-loglist": "042470ef",
          "module-mall-coupon-coupon-list": "7561a320",
          "module-mall-exchange-log-exchange-log": "1a4276d5",
          "module-mall-exchange-log-exchange-log-style-four": "24e27cff",
          "module-mall-goods-auction-my-order-list": "fc1a23cc",
          "module-mall-refund-list": "5401ece6",
          "module-mall-writeoff-coupon-loglist": "ca1a8c82",
          "module-mall-writeoff-loglist": "d3125a34",
          "module-mall-writeoff-order-list": "73bec274",
          "module-mall-zone-home": "fb4c9f0f",
          "module-member-integral-detail-integral-detail": "5bcff8a7",
          "module-member-integral-rank-integral-rank": "b3f05299",
          "module-member-message-message": "46a971bb",
          "module-vote-result-result": "8a79e316",
          "module-whipped-eggs-rank-history-rank": "22f57f5c",
          "pages-activity-list": "ab9e73fa",
          "module-answer-answer-log-answer-log": "30f17884",
          "module-article-task-single-single-task": "1ef2e317",
          "module-bobing-rank-rank-detail": "9efff229",
          "module-bobing-rule-activity-rule": "e1ca5192",
          "module-booking-lottery-task-task": "9c1668d7",
          "module-clockin-cert-get-cert~module-lottery-win-record-win-record": "5c23ed8a",
          "module-clockin-cert-get-cert": "778720bd",
          "module-lottery-win-record-win-record": "3c320c70",
          "module-customer-xmtv-flowers": "80ce00ad",
          "module-farm-goods-exchange-goods-exchange~module-farm-goods-list-goods-list": "79c0f859",
          "module-farm-goods-exchange-goods-exchange": "aafac50d",
          "module-farm-kinds-goods-exchange-goods-exchange~module-farm-kinds-goods-list-goods-list": "e6179e20",
          "module-farm-kinds-goods-exchange-goods-exchange": "a6285e81",
          "module-mall-address-address-list": "7eef704e",
          "module-supertopic-detail-mylog~module-supertopic-me-me": "4e71e9ae",
          "module-supertopic-me-me": "761a5c6b",
          "module-info-pub-report-report~module-live-report-report~module-mall-business-apply~module-mall-comme~3b1de550": "060178ef",
          "module-mall-address-address-detail~module-mall-business-apply": "bef22eb9",
          "module-mall-business-apply": "b520a925",
          "module-mall-address-address-detail": "d6d3c5ff",
          "module-clockin-log-log": "68764015",
          "module-mall-goodslist-goods-channel-list~module-mall-goodslist-goods-class-list~module-mall-home-search-home": "098dc57d",
          "module-mall-home-search-home": "0789463c",
          "module-supertopic-detail-mylog": "5ca6c692",
          "module-clockin-member-join-list": "b570a856",
          "module-clockin-member-rank-list": "b4863b63",
          "module-cms-atlas-detail": "2c8fc4c9",
          "module-customer-fhtvn-main-map": "7611e96d",
          "module-customer-fjdaily-guide": "1d3cb35f",
          "module-customer-kannh-game": "69d15b4c",
          "module-customer-retirement-index": "804746d0",
          "module-customer-xmtv-publicize~module-customer-xmtv-short-videos": "bdfd1ddc",
          "module-customer-xmtv-publicize": "70411b9c",
          "module-customer-xmtv-short-videos": "1f690e1b",
          "module-customer-xstv-guide": "923bb69c",
          "module-ecnyform-activity-log-my-log-list": "a24403a5",
          "module-ecnyform-business-list": "8da59b76",
          "module-guess-log-pk-log": "38e9fc11",
          "module-mall-business-business": "2cdf9f4c",
          "module-mall-business-business-new": "3761933f",
          "module-mall-business-business-new-style-four": "b9cb18b8",
          "module-mall-comment-comment": "40d5894d",
          "module-mall-writeoff-manage-customer": "f41059e1",
          "module-mall-writeoff-manage-offline": "b0480625",
          "module-farm-goods-list-goods-list": "7e7cce55",
          "module-farm-kinds-goods-list-goods-list": "b15cb8c0",
          "module-footmark-log-detail-log-detail": "3fb29e8a",
          "module-guess-log-activity-log": "dbca4f02",
          "module-info-pub-report-report": "bb108cf8",
          "module-live-report-report": "3edf0267",
          "module-mall-comment-comment-create": "c9bdc710",
          "module-mall-refund-apply~module-mall-refund-shoppingmall-apply": "ce5cd4fb",
          "module-mall-refund-apply": "2b7b392a",
          "module-mall-refund-shoppingmall-apply": "99a71846",
          "module-mall-goods-auction-goods-detail~module-signup-activity-log-log-detail": "d000941e",
          "module-signup-activity-log-log-detail": "f9d9a815",
          "module-signup-writeoff-confirm": "6a9e9568",
          "module-lottery-win-record-detail-win-record-detail": "85afebd2",
          "module-lottery-writeoff-confirm": "916f73e9",
          "module-lottery-writeoff-logdetail": "f895a4ae",
          "module-mall-order-detail-order-detail-businessmen": "5577419c",
          "module-mall-coupon-coupon-detail": "c428d07f",
          "module-mall-hongbao-pay-detail": "376d738d",
          "module-mall-writeoff-confirm": "24e892db",
          "module-mall-writeoff-coupon-confirm": "468102a8",
          "module-mall-writeoff-coupon-logdetail": "b14fae45",
          "module-mall-writeoff-logdetail": "3df74d70",
          "module-mall-writeoff-receive-money": "1f2fde7a",
          "module-lottery-writeoff-home": "56e3e38e",
          "module-lottery-writeoff-success": "322b7fdb",
          "module-mall-bind-auth-bind": "371fcfa3",
          "module-mall-bind-login": "fcb561da",
          "module-mall-cart-cart": "cb2c5879",
          "module-mall-goods-auction-goods-detail": "198a828b",
          "module-mall-coupon-coupon-show-list": "5bc74a1f",
          "module-mall-customer-business-customer~module-mall-customer-customer": "f2a213f7",
          "module-mall-customer-business-customer": "4ec17df5",
          "module-mall-customer-customer": "3cc8cef0",
          "module-mall-customer-pre-sales-customer": "738173e4",
          "module-mall-goods-activity-goods-activity": "da2058ff",
          "module-mall-goods-auction-bidding-log": "78df61eb",
          "module-mall-goodslist-goods-channel-list~module-mall-goodslist-goods-class-list": "1afee52f",
          "module-mall-goodslist-goods-channel-list": "1a7e6eaa",
          "module-mall-goodslist-goods-class-list": "86f93cd1",
          "module-mall-offline-pay-log-detail": "42a01906",
          "module-mall-offline-pay-log-list": "ed20b198",
          "module-mall-order-detail-no-order-deatil": "6f6f61de",
          "module-mall-order-result-order-result": "68423cd1",
          "module-mall-refund-detail": "b49aff90",
          "module-mall-user-user-center": "5030a7da",
          "module-mall-user-user-center-style-four": "6a002a6a",
          "module-mall-writeoff-coupon-home": "0b63530c",
          "module-mall-writeoff-coupon-success": "1fef94c4",
          "module-mall-writeoff-home": "82871ee0",
          "module-mall-writeoff-login": "60ce1a1e",
          "module-mall-writeoff-manage-home": "6b9c9c69",
          "module-mall-writeoff-order-detail": "c2f91eb3",
          "module-mall-writeoff-pay-detail": "914b3a1f",
          "module-mall-writeoff-success": "4d01ff9c",
          "module-mall-writeoff-type-select": "39811666",
          "module-member-bind-bind-wechat": "ba706a4a",
          "module-member-cashout-cashout-log": "5e6adde2",
          "module-member-currency-rule-currency-rule": "e8f7e882",
          "module-member-level-info-level-info": "d344d2d7",
          "module-member-medal-medal": "2c3eb8e1",
          "module-member-medal-medal-detail": "2444142f",
          "module-member-message-message-sort": "973389f8",
          "module-member-signin-signin-rule": "17d49b10",
          "module-member-welfare-welfare": "1f072dec",
          "module-poetry-rank-list-rank-list": "bc4c9cfe",
          "module-query-search-search-results": "4723005e",
          "module-screen-interact-win-record-detail-win-record-detail": "e86b22ae",
          "module-sdk-demo-cmstopnewsdk": "aa91b821",
          "module-sdk-demo-cmstopsdk": "037d6a5b",
          "module-sdk-demo-cmstopv3sdk": "98cbb181",
          "module-sdk-demo-fangzhengsdk": "8050d3ef",
          "module-sdk-demo-fluttersdk": "e202b56f",
          "module-sdk-demo-injssdk": "8a920b14",
          "module-sdk-demo-jingmaishansdk": "c447efc4",
          "module-sdk-demo-jssdk": "44118693",
          "module-sdk-demo-nbtvsdk": "9a3bd2b4",
          "module-sdk-demo-smartcitysdk": "ae0e3beb",
          "module-sdk-demo-tianmasdk": "cc0083c4",
          "module-sdk-demo-tianmusdk": "610af670",
          "module-sdk-demo-trssdk": "22853b1f",
          "module-sdk-demo-unisdk": "1482bd4d",
          "module-sdk-demo-xingkongyunsdk": "72ab99a4",
          "module-sdk-demo-xiuzhousdk": "97f158a3",
          "module-sdk-demo-yantaisdk": "dc694402",
          "module-sdk-demo-yongpaisdk": "50225761",
          "module-sdk-demo-ziyangsdk": "ab1bc95c",
          "module-signup-activity-log-log-list": "76461ded",
          "module-signup-activity-log-my-log-list": "2b9888b5",
          "module-signup-writeoff-auth-bind": "5333f286",
          "module-signup-writeoff-writeoff-list": "ede959eb",
          "pages-activity-help-rank": "0fe0ae4c",
          "pages-download-close-page": "a0fccc4e",
          "pages-download-tianmu-download": "aeffdf5d",
          "pages-home-callback": "05517cd5",
          "pages-home-error": "3c963e93",
          "pages-home-sdk": "5dd08c4e",
          "pages-home-sdk-activity": "b7cc505d",
          "pages-home-sdk-me": "06761554",
          "pages-setting-clear": "7a183a11"
        }[e] + ".js";
      }(e);
      var l = new Error();
      a = function (n) {
        u.onerror = u.onload = null, clearTimeout(s);
        var t = i[e];
        if (0 !== t) {
          if (t) {
            var o = n && ("load" === n.type ? "missing" : n.type),
              a = n && n.target && n.target.src;
            l.message = "Loading chunk " + e + " failed.\n(" + o + ": " + a + ")", l.name = "ChunkLoadError", l.type = o, l.request = a, t[1](l);
          }
          i[e] = void 0;
        }
      };
      var s = setTimeout(function () {
        a({
          type: "timeout",
          target: u
        });
      }, 120000);
      u.onerror = u.onload = a, document.head.appendChild(u);
    }
    return Promise.all(n);
  }, r.m = e, r.c = o, r.d = function (e, n, t) {
    r.o(e, n) || Object.defineProperty(e, n, {
      enumerable: !0,
      get: t
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
    var t = Object.create(null);
    if (r.r(t), Object.defineProperty(t, "default", {
      enumerable: !0,
      value: e
    }), 2 & n && "string" != typeof e) for (var o in e) r.d(t, o, function (n) {
      return e[n];
    }.bind(null, o));
    return t;
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
  a.push([0, "chunk-vendors"]), t();
})({
  0: function (e, n, t) {
    e.exports = t("c753");
  },
  "0043": function (e, n, t) {
    "use strict";

    t("6a54");
    var o = t("f5bd").default;
    Object.defineProperty(n, "__esModule", {
      value: !0
    }), n.default = void 0;
    var i = o(t("b7c7"));
    t("5c47"), t("a1c1"), t("e966"), t("64aa"), t("c9b5"), t("bf0f"), t("ab80");
    var a = t("96a9"),
      r = o(t("a957")),
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
            t = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 0,
            o = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : "",
            i = arguments.length > 4 && void 0 !== arguments[4] && arguments[4];
          try {
            return e ? ("string" === typeof e && (e = JSON.parse(e)), Array.isArray(e) && e.length && e[0] && (e = e[0]), e ? (0, a.getImageUrl)(e, n, t, o, i) : "") : "";
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
          var t = (0, i.default)(n.split(":")),
            o = t[0],
            a = t[1];
          o = parseInt(o), a = parseInt(a);
          var r = parseInt(e * a / o);
          return r;
        },
        filterDateFormat: u,
        filterTimeStamp: l,
        filterTimeFrom: function () {
          var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : null,
            n = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : "YYYY-MM-DD";
          "string" == typeof e && (e = l(e)), null == e && (e = Number(new Date())), e = parseInt(e), 10 == e.toString().length && (e *= 1000);
          var t = new Date().getTime() - e;
          t = parseInt(t / 1000);
          var o = "";
          switch (!0) {
            case t < 300:
              o = "\u521A\u521A";
              break;
            case t >= 300 && t < 3600:
              o = "".concat(parseInt(t / 60), "\u5206\u949F\u524D");
              break;
            case t >= 3600 && t < 86400:
              o = "".concat(parseInt(t / 3600), "\u5C0F\u65F6\u524D");
              break;
            case t >= 86400 && t < 2592000:
              o = "".concat(parseInt(t / 86400), "\u5929\u524D");
              break;
            default:
              o = !1 === n ? t >= 2592000 && t < 31536000 ? "".concat(parseInt(t / 2592000), "\u4E2A\u6708\u524D") : "".concat(parseInt(t / 31536000), "\u5E74\u524D") : u(e / 1000, n);
          }
          return o;
        }
      };
    n.default = s;
  },
  "025d": function (e, n, t) {
    "use strict";

    (function (e) {
      t("6a54");
      var o = t("f5bd").default;
      Object.defineProperty(n, "__esModule", {
        value: !0
      }), n.requestAuthDeviceToken = n.requestApiNoAuth = n.requestApi = n.getBusinessAccessApiHeaders = n.getAccessApiHeaders = void 0;
      var i = o(t("9b1b")),
        a = o(t("2634")),
        r = o(t("2fdc"));
      t("bf0f");
      var u = o(t("c5fd")),
        l = o(t("c41c"));
      n.requestApi = function (n) {
        var t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {},
          o = arguments.length > 2 ? arguments[2] : void 0,
          i = arguments.length > 3 && void 0 !== arguments[3] && arguments[3];
        if (i) {
          var d = u.default.getUserInfoFromLocalStorage();
          if (!d) return {
            code: "1001",
            msg: "\u672A\u767B\u5F55",
            data: []
          };
        }
        return new Promise(function () {
          var i = (0, r.default)((0, a.default)().mark(function i(r) {
            var d, c, g;
            return (0, a.default)().wrap(function (i) {
              while (1) switch (i.prev = i.next) {
                case 0:
                  if (u.default.openVConsole(), u.default.checkIsPreviewMode() && (t["_from_ydpreview"] = 1), d = {}, c = u.default.checkIsInBusinessWriteOffEnv(), !c) {
                    i.next = 12;
                    break;
                  }
                  return g = u.default.getMallBusinessAccess(), g && g.sign && (t.sign = g.sign), i.next = 9, m();
                case 9:
                  d = i.sent, i.next = 15;
                  break;
                case 12:
                  return i.next = 14, s();
                case 14:
                  d = i.sent;
                case 15:
                  uni.request({
                    url: n,
                    data: t || {},
                    method: o || "GET",
                    header: d,
                    success: function (n) {
                      if (n.data && "1001" === n.data.code) {
                        if (u.default.clearLoginToken(), u.default.checkIsNeedLoginTip()) {
                          var t = u.default.checkIsInThirdBrowser();
                          t ? uni.showModal({
                            title: "\u53CB\u60C5\u63D0\u793A",
                            content: "\u8BF7\u60A8\u5148\u767B\u5F55",
                            success: function (n) {
                              n.confirm ? l.default[t].goToLoginPage() : n.cancel && e.log("\u7528\u6237\u70B9\u51FB\u53D6\u6D88");
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
                  return i.stop();
              }
            }, i);
          }));
          return function (e) {
            return i.apply(this, arguments);
          };
        }());
      };
      n.requestApiNoAuth = function (e) {
        var n = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {},
          t = arguments.length > 2 ? arguments[2] : void 0;
        return new Promise(function (o) {
          uni.request({
            url: e,
            data: n || {},
            method: t || "GET",
            success: function (e) {
              o(e.data);
            },
            fail: function (e) {
              var n = {
                code: -1,
                msg: "\u54CE\u5440\uFF0C\u7F51\u7EDC\u5F02\u5E38\u5566\uFF01",
                data: e
              };
              o(n);
            }
          });
        });
      };
      var s = function () {
        var e = (0, r.default)((0, a.default)().mark(function e() {
          var n, t, o, r, l, s, m, d;
          return (0, a.default)().wrap(function (e) {
            while (1) switch (e.prev = e.next) {
              case 0:
                return n = uni.getStorageSync("access_token"), t = uni.getStorageSync("_user_info"), o = 0, t && (t = JSON.parse(t), o = t.id), e.next = 6, u.default.tenantInitSetting();
              case 6:
                return r = e.sent, l = {
                  "Access-Token": n || "",
                  "Access-User-Id": o,
                  "Access-T-Id": r.t_id || "",
                  "Access-T-Id-In": r.t_id_in || "",
                  "Access-Api-Unique-Token": 1
                }, s = u.default.getWechatReqClientType(), e.next = 11, u.default.getHeadAS();
              case 11:
                return m = e.sent, e.next = 14, u.default.getServerAuthDeviceToken();
              case 14:
                return d = e.sent, l = (0, i.default)((0, i.default)({}, l), {}, {
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
        var e = (0, r.default)((0, a.default)().mark(function e() {
          var n, t, o, i;
          return (0, a.default)().wrap(function (e) {
            while (1) switch (e.prev = e.next) {
              case 0:
                return n = u.default.getMallBusinessAccess(), t = u.default.getWechatReqClientType(), e.next = 4, u.default.getHeadAS();
              case 4:
                return o = e.sent, i = {
                  "Access-Token": n && n.access_token ? n.access_token : "",
                  "Access-User-Id": n && n.user_id ? n.user_id : 0,
                  "Access-T-Id": n && n.t_id ? n.t_id : 1,
                  "Access-T-Id-In": n && n.t_id_in ? n.t_id_in : 1,
                  "Access-Api-Unique-Token": 1,
                  "Access-Wxclient-Type": t,
                  "Access-Api-Signature": o
                }, e.abrupt("return", i);
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
        var e = (0, r.default)((0, a.default)().mark(function e(n) {
          var t, o, i;
          return (0, a.default)().wrap(function (e) {
            while (1) switch (e.prev = e.next) {
              case 0:
                return e.next = 2, u.default.tenantInitSetting();
              case 2:
                return t = e.sent, o = uni.getSystemInfoSync(), i = {
                  "Access-T-Id": t.t_id || "",
                  "Access-T-Id-In": t.t_id_in || "",
                  "Access-Api-Unique-Token": 1,
                  "Access-Api-Dt": o.deviceId
                }, e.abrupt("return", new Promise(function (e) {
                  uni.request({
                    url: n,
                    method: "GET",
                    header: i,
                    success: function (n) {
                      e(n.data);
                    },
                    fail: function (n) {
                      var t = {
                        code: -1,
                        msg: "\u54CE\u5440\uFF0C\u7F51\u7EDC\u5F02\u5E38\u5566\uFF01",
                        data: n
                      };
                      e(t);
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
    }).call(this, t("ba7c")["default"]);
  },
  "0574": function (e, n, t) {
    e.exports = t.p + "static/iconfont/iconfont.woff";
  },
  "0652": function (e, n, t) {
    t("23f4"), t("7d2f"), t("5c47"), t("9c4e"), t("ab80"), t("0506"), t("7a76"), t("c9b5"), t("aa9c"), window.qq = window.qq || {}, qq.maps = qq.maps || {}, window.soso || (window.soso = qq), soso.maps || (soso.maps = qq.maps), qq.maps.Geolocation = function () {
      "use strict";

      var e = [],
        n = null,
        t = 0,
        o = "_geoIframe_" + Math.ceil(10000000 * Math.random()),
        i = document.createElement("iframe"),
        a = null,
        r = null,
        u = null,
        l = null,
        s = function (s, m) {
          if (s) {
            if (m) {
              var d = document.getElementById(o);
              if (!d) {
                i.setAttribute("id", o), i.setAttribute("allow", "geolocation");
                i.setAttribute("src", "https://apis.map.qq.com/tools/geolocation?key=" + s + "&referer=" + m), i.setAttribute("style", "display: none; width: 100%; height: 30%"), document.body ? document.body.appendChild(i) : document.write(i.outerHTML);
                var c = this;
                window.addEventListener("message", function (o) {
                  var i = o.data;
                  if (i && "geolocation" == i.module) {
                    if (clearTimeout(l), e.length > 0) {
                      var s = e.shift();
                      s.sucCb && s.sucCb(i);
                    }
                    t = 2, c.executeNextGeo(), n && n(i);
                  } else {
                    r = new Date().getTime();
                    var m = r - a;
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
                      clearTimeout(l), t = -1, c.executeNextGeo();
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
        1 !== t && e.length > 0 && (t = 1, e[0].geoprocess());
      }, s.prototype.getLocation = function (n, o, i) {
        if (i && i.timeout) {
          var a = new RegExp("^[0-9]*$");
          if (!a.test(i.timeout)) return void alert("timeout \u8BF7\u8F93\u5165\u6570\u5B57");
        }
        if (e.length > 10) throw new Error("geolocation queue must be lass than 10");
        e.push({
          sucCb: n,
          errCb: o,
          option: i,
          geoprocess: this.getOnceLocation,
          type: "geo"
        }), 1 !== t && (t = 1, this.getOnceLocation());
      }, s.prototype.getOnceLocation = function () {
        var n = e[0] && e[0].option;
        a = new Date().getTime(), u = n && n.timeout ? +n.timeout : 10000, clearTimeout(l), l = setTimeout(function () {
          if (e.length > 0) {
            var n = e.shift();
            n.errCb && n.errCb();
          }
        }, u), document.getElementById(o).contentWindow.postMessage("getLocation", "*");
      }, s.prototype.getIpLocation = function (n, o) {
        if (e.length > 10) throw new Error("geolocation queue mast be lass than 10");
        e.push({
          sucCb: n,
          errCb: o,
          geoprocess: this.getOnceIpLocation,
          type: "ip"
        }), 1 !== t && (t = 1, this.getOnceIpLocation());
      }, s.prototype.getOnceIpLocation = function () {
        document.getElementById(o).contentWindow.postMessage("getLocation.robust", "*");
      }, s.prototype.watchPosition = function (e) {
        n = e, document.getElementById(o).contentWindow.postMessage("watchPosition", "*");
      }, s.prototype.clearWatch = function () {
        n = null, document.getElementById(o).contentWindow.postMessage("clearWatch", "*");
      }, s;
    }();
  },
  "08dc": function (e, n, t) {
    "use strict";

    t("6a54");
    var o = t("f5bd").default;
    Object.defineProperty(n, "__esModule", {
      value: !0
    }), n.default = void 0;
    var i = o(t("9b1b"));
    function a(e) {
      if (e) {
        var n = JSON.parse(e);
        if (n) {
          var t = {
            user_id: n.userID || 0,
            user_name: n.nickName || "",
            portrait_url: n.faceUrl || "",
            phone: n.userPhone || "",
            wx_openid: n.openID || "",
            wx_unionid: "",
            app_user_token: ""
          };
          return t;
        }
        return !1;
      }
      return !1;
    }
    t("5c47"), t("0506"), t("c223");
    var r = null;
    window.postUserInfo = function (e) {
      var n = a(e);
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
            var t = a(n);
            t ? (r = t, e && e(r)) : e && e(!1);
          });
        },
        getLocation: function (e) {
          window.location.href = "getLocationInfo:///";
          var n = {
            latitude: 0,
            longitude: 0
          };
          window.getLocationInfo = function (t) {
            var o = JSON.parse(t);
            o ? (n.latitude = o.lat || 0, n.longitude = o.lon || 0, n = (0, i.default)((0, i.default)({}, n), o), e && e(n)) : e && e(n);
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
            t = "xkyApp://appShare?xky_ti=".concat(e.title, "&xky_des=").concat(e.brief, "&xky_img=").concat(e.indexpic, "&xky_url=").concat(n);
          window.location.href = t;
        },
        openpaper: function () {}
      },
      l = u;
    n.default = l;
  },
  "0a99": function (e, n, t) {
    "use strict";

    (function (e) {
      t("6a54");
      var o = t("f5bd").default;
      Object.defineProperty(n, "__esModule", {
        value: !0
      }), n.default = void 0;
      var i = o(t("9b1b")),
        a = o(t("2634")),
        r = o(t("2fdc"));
      t("bf0f"), t("5c47"), t("af8f"), t("e966"), t("a1c1");
      var u = o(t("4b9b")),
        l = !1,
        s = "";
      (function () {
        var n = navigator.userAgent.toLowerCase(),
          t = u.default.thirdPlatforms.tianmu.apps.some(function (e) {
            return -1 != n.search(e) && (s = e, l = !0, !0);
          });
        if (t) {
          var o = document.createElement("script");
          o.async = "async", o.src = "https://cdn-cp.tmuyun.com/jssdk/v1/zjrb-cp.v1.min.js", document.body.appendChild(o), o.onload = function () {
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
                  var t = (0, r.default)((0, a.default)().mark(function t(o) {
                    var i, r;
                    return (0, a.default)().wrap(function (t) {
                      while (1) switch (t.prev = t.next) {
                        case 0:
                          if (!o || !o.account_id || "-1" == o.account_id) {
                            t.next = 8;
                            break;
                          }
                          return t.next = 3, n.getUniqueId();
                        case 3:
                          i = t.sent, r = {
                            user_id: o.account_id || "",
                            user_name: o.nick_name || "",
                            portrait_url: o.head_img || "",
                            phone: o.mobile || "",
                            wx_openid: "",
                            wx_unionid: "",
                            app_user_token: i
                          }, e && e(r), t.next = 9;
                          break;
                        case 8:
                          e && e(!1);
                        case 9:
                        case "end":
                          return t.stop();
                      }
                    }, t);
                  }));
                  return function (e) {
                    return t.apply(this, arguments);
                  };
                }(),
                cpIncompatible: function (n) {
                  e && e(!1);
                }
              });
            } else e && e(!1);
          },
          getUniqueId: function () {
            return (0, r.default)((0, a.default)().mark(function e() {
              return (0, a.default)().wrap(function (e) {
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
              completed: function (t) {
                n.latitude = t.lat || 0, n.longitude = t.lon || 0, n = (0, i.default)((0, i.default)({}, n), t), e && e(n);
              },
              cpIncompatible: function (t) {
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
              e += "";
              var n = e.split("#"),
                t = "news",
                o = 0;
              n[0] && (o = n[0]), n[1] && (t = n[1]);
              var i = u.default.thirdPlatforms.tianmu.newsDetailPage.replace("{page_type}", t),
                a = u.default.thirdPlatforms.tianmu.sharePageDomains.default;
              u.default.thirdPlatforms.tianmu.sharePageDomains[s] && (a = u.default.thirdPlatforms.tianmu.sharePageDomains[s]), i = a + i;
              var r = i + o + "&tenantId=" + u.default.thirdPlatforms.tianmu.tenantIds[s] + "&gaze_open=1";
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
    }).call(this, t("ba7c")["default"]);
  },
  "0bba": function (e, n, t) {
    "use strict";

    t("6a54"), Object.defineProperty(n, "__esModule", {
      value: !0
    }), n.default = void 0, t("aa9c"), t("5c47"), t("2c10");
    var o = !1;
    function i(e) {
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
    function a() {
      return "yunxh-ydapp" == navigator.userAgent.toLowerCase().match(/YUNXH-YDAPP/i);
    }
    function r(e) {
      var n = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : null,
        t = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : null;
      a() ? i(function (i) {
        "undefined" != typeof i.init && i.init instanceof Function && (o || (i.init(function (e, n) {}), o = !0)), "getLocation" == e && i.registerHandler("getLocation", function (e, n) {
          e = "string" === typeof e ? JSON.parse(e) : e, t && t(e), n("success");
        }), i.callHandler(e, n, function (e) {
          e = "string" === typeof e ? JSON.parse(e) : e, t && t(e);
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
  1: function (e, n) {},
  "12f9": function (e, n, t) {
    var o = t("c359");
    o.__esModule && (o = o.default), "string" === typeof o && (o = [[e.i, o, ""]]), o.locals && (e.exports = o.locals);
    var i = t("967dd").default;
    i("43a117a0", o, !0, {
      sourceMap: !1,
      shadowMode: !1
    });
  },
  "1bed": function (e, n, t) {
    "use strict";

    function o(e) {
      if (e) {
        var n = JSON.parse(e);
        if (n) {
          var t = n.uid.replaceAll("#", "");
          if ("-1" == t) return !1;
          var o = {
            user_id: n.userid || t,
            user_name: n.username || n.nickname || "\u7528\u6237",
            portrait_url: n.head || "",
            phone: n.phone || "",
            wx_openid: "",
            wx_unionid: "",
            app_user_token: n.token || ""
          };
          return o;
        }
        return !1;
      }
      return !1;
    }
    t("6a54"), Object.defineProperty(n, "__esModule", {
      value: !0
    }), n.default = void 0, t("5c47"), t("a1c1"), t("45da"), t("0506");
    var i = null;
    window.syncUserInfo = function (e) {
      var n = o(e);
      n && (i = n);
    };
    var a = {
        isInApp: function () {
          var e = navigator.userAgent.toLowerCase();
          return !!/xyApp/gi.test(e);
        },
        getSystemInfo: function (e) {},
        getUserInfo: function (e) {
          i ? e && e(i) : (this.goToLoginPage(), window.syncUserInfo = function (n) {
            var t = o(n);
            t ? (i = t, e && e(i)) : e && e(!1);
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
      r = a;
    n.default = r;
  },
  "244a": function (e, n, t) {
    t("aa9c"), t("d4b5"), t("8f71"), t("bf0f"), t("c9b5"), t("ab80"), t("23f4"), t("7d2f"), t("5c47"), t("9c4e"), t("0506"), t("2c10"), function () {
      var e, n, t;
      function o(e, n, t) {
        e.off(n).on(n, function (o) {
          t(o), e.off(n);
        });
      }
      e = function () {
        var e,
          o = this;
        if (this.debug = !1, this._shakeEnable = !1, this._event = new n(), this._request = function (n, t) {
          var i = "cloudjs://" + n,
            a = {};
          for (var r in t) a[r] = t[r];
          if (a) {
            for (var u in a) if (a.hasOwnProperty(u)) if ("thumbs" == u) {
              for (var l = [], s = 0; s < a[u].length; s++) l.push(encodeURIComponent(a[u][s]));
              a[u] = l;
            } else a[u] = "url" == u ? decodeURIComponent(a[u]) : encodeURIComponent(a[u]);
            i += "?params=" + JSON.stringify(a);
          }
          e.src = i, o._event.trigger("request");
        }, this._callback = function (e) {
          if (0 !== +e.errId) return o._event.trigger("error", e.errId), void (o.debug && alert("errId:" + e.errId));
          o._event.trigger(e.method, e.data);
        }, this._transStatusWatch = new t(this._event), e = document.createElement("iframe"), e.style.position = "fixed", e.style.left = "-9999px", e.style.width = "0", e.style.height = "0", document.body) document.body.appendChild(e);else {
          var i = window.onload || function () {};
          window.onload = function () {
            document.body.appendChild(e), i();
          };
        }
      }, n = function () {
        var e = {},
          n = this;
        this.on = function (t, o) {
          t = t.toLocaleLowerCase().split(".");
          return type = t[1] || "default", t = t[0], e[t] || (e[t] = []), e[t].push({
            type: type,
            func: o
          }), n;
        }, this.off = function (t) {
          var o;
          t = t.toLocaleLowerCase().split(".");
          if (type = t[1] || "default", t = t[0], e[t] && e[t].length) for (o in e) o === t && (e[o] = e[o].filter(function (e, n) {
            return type && type !== e;
          }), e[o].length && delete e[o]);
          return n;
        }, this.trigger = function (t, o) {
          var i, a;
          if (t = t.toLocaleLowerCase(), e[t]) {
            for (a = e[t].length, i = a - 1; i >= 0; i--) e[t][i].func.call(null, o);
            return n;
          }
        };
      }, t = function (e) {
        var n = {};
        e.on("transStatusQuery", function (e) {
          "function" === typeof n[e.id] && (n[e.id]({
            status: e.status
          }), delete n[e.id]);
        }), this.add = function (e, t) {
          n[e] = t;
        };
      }, e.prototype.userGetInfo = function (e) {
        o(this._event, "userGetInfo", e), this._request("userGetInfo");
      }, e.prototype.userLogin = function (e) {
        o(this._event, "userLogin", e), this._request("userLogin");
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
        o(this._event, "locationGetInfo", e), this._request("locationGetInfo");
      }, e.prototype.locationMap = function (e, n, t, o) {
        e = e.toString(), n = n.toString(), this._request("locationMap", {
          latitude: e,
          longitude: n,
          address: t || ""
        });
      }, e.prototype.deviceGetInfo = function (e) {
        o(this._event, "deviceGetInfo", e), this._request("deviceGetInfo");
      }, e.prototype.networkGetInfo = function (e) {
        o(this._event, "networkGetInfo", e), this._request("networkGetInfo");
      }, e.prototype.networkWatch = function (e) {
        this._event.on("networkWatch", e);
      }, e.prototype.qrcodeScan = function (e) {
        o(this._event, "qrcodeScan", e), this._request("qrcodeScan");
      }, e.prototype.photoPreview = function (e, n) {
        this._request("photoPreview", {
          imgs: e,
          id: n || 0
        });
      }, e.prototype.photoSelect = function (e, n) {
        e = Math.min(9, Math.max(1, +e)), o(this._event, "photoSelect", n), this._request("photoSelect", {
          max: e
        });
      }, e.prototype.audioRecord = function (e) {
        o(this._event, "audioRecord", e), this._request("audioRecord");
      }, e.prototype.audioStatusQuery = function (e, n) {
        this._transStatusWatch.add(e, n), this._request("transStatusQuery", {
          id: e
        });
      }, e.prototype.videoSelect = function (e) {
        var n = e;
        e = function (e) {
          e && "complete" === e.status && (e.thumb = "data:image/*;base64," + e.thumb), n(e);
        }, o(this._event, "videoSelect", e), this._request("videoSelect");
      }, e.prototype.videoStatusQuery = function (e, n) {
        this._transStatusWatch.add(e, n), this._request("transStatusQuery", {
          id: e
        });
      }, e.prototype.shakeWatch = function (e) {
        this._event.on("shakeEnable", function (n) {
          e(n.status);
        }), this._shakeEnable || (this._request("shakeEnable"), this._shakeEnable = !0);
      }, e.prototype.pushLiveViewController = function (e, n, t) {
        this._request("pushLiveViewController", {
          contentid: e,
          title: n || "",
          sharesiteid: t || 0
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
        o(this._event, "userGetEncryptInfo", e), this._request("userGetEncryptInfo");
      }, e.prototype.readContentController = function (e) {
        this._request("readContentController", {
          op: e || 1
        });
      }, e.prototype.reLogin = function (e) {
        o(this._event, "reLogin", e), this._request("reLogin");
      }, e.prototype.openContentView = function (e) {
        e = e || {}, this._request("openContentView", e);
      }, e.prototype.getMobileParams = function (e) {
        o(this._event, "getMobileParams", e), this._request("getMobileParams");
      }, e.prototype.downloadResource = function (e, n) {
        var t = navigator.userAgent,
          o = !!t.match(/\(i[^;]+;( U;)? CPU.+Mac OS X/);
        if (this.isClient() && o) this._request("downloadResource", {
          url: e,
          alias: n
        });else {
          var i = document.createElement("a");
          i.style.display = "none", i.setAttribute("download", n), i.setAttribute("href", e), i.click();
        }
      }, window.mc = new e(), window.mediaCloudCallback = mc._callback;
    }();
  },
  "28bc": function (e, n, t) {
    "use strict";

    (function (e) {
      t("6a54");
      var o = t("f5bd").default;
      Object.defineProperty(n, "__esModule", {
        value: !0
      }), n.default = void 0, t("bf0f");
      var i = o(t("6eb4")),
        a = {
          isInApp: function () {
            return !!i.default.isInApp();
          },
          getSystemInfo: function (e) {},
          getUserInfo: function (e) {
            i.default.getUserInfo(function (n) {
              if (n && n.data) {
                var t = n.data.id ? n.data.thirdToken + "|" + n.data.token : n.data.token,
                  o = {
                    user_id: n.data.userId || n.data.id || "",
                    user_name: n.data.name || n.data.nickName || "",
                    portrait_url: n.data.icon || n.data.avatar || "",
                    phone: n.data.phone || "",
                    wx_openid: "",
                    wx_unionid: "",
                    app_user_token: t || ""
                  };
                e && e(o);
              } else e && e(!1);
            });
          },
          getLocation: function (e) {},
          shareTo: function () {
            var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {};
            i.default.shareTo({
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
            }, i.default.goToLoginPage();
          },
          goToBindPage: function () {},
          saveImage: function () {},
          linkTo: function () {},
          jumpToNews: function () {
            var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : "";
            if (e) {
              var n = e.split("#"),
                t = 0;
              n[0] && (t = n[0]);
              var o = "";
              n[1] && (o = n[1]), i.default.jumpToNews(t, o);
            }
          },
          goUcenter: function () {},
          playAudio: function () {},
          showShare: function () {
            var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {};
            i.default.shareTo({
              is_set: 0,
              title: e.title,
              brief: e.brief,
              link_url: e.link_url,
              indexpic: e.indexpic
            });
          },
          loadPayUrl: function (e) {
            i.default.loadPayUrl(e.oid, e.payUrl, e.callbackUrl);
          },
          goToRealnamePage: function () {
            i.default.goToRealnamePage();
          },
          checkUserIsRealname: function () {
            return new Promise(function (n) {
              i.default.getUserInfo(function (t) {
                if (t && t.data) {
                  e.log("======userinfo======="), e.log(t.data), e.log("======userinfo=======");
                  var o = !!t.data.verifyStatus;
                  n(o);
                } else n(!1);
              });
            });
          },
          openpaper: function () {}
        },
        r = a;
      n.default = r;
    }).call(this, t("ba7c")["default"]);
  },
  "2a74": function (e, n, t) {
    "use strict";

    t("6a54"), Object.defineProperty(n, "__esModule", {
      value: !0
    }), n.default = void 0;
    var o = 52.35987755982988,
      i = 3.141592653589793,
      a = 6378245,
      r = 0.006693421622965943,
      u = {
        transformLon: function (e, n) {
          var t = 300 + e + 2 * n + 0.1 * e * e + 0.1 * e * n + 0.1 * Math.sqrt(Math.abs(e));
          return t += 2 * (20 * Math.sin(6 * e * i) + 20 * Math.sin(2 * e * i)) / 3, t += 2 * (20 * Math.sin(e * i) + 40 * Math.sin(e / 3 * i)) / 3, t += 2 * (150 * Math.sin(e / 12 * i) + 300 * Math.sin(e / 30 * i)) / 3, t;
        },
        transformLat: function (e, n) {
          var t = 2 * e - 100 + 3 * n + 0.2 * n * n + 0.1 * e * n + 0.2 * Math.sqrt(Math.abs(e));
          return t += 2 * (20 * Math.sin(6 * e * i) + 20 * Math.sin(2 * e * i)) / 3, t += 2 * (20 * Math.sin(n * i) + 40 * Math.sin(n / 3 * i)) / 3, t += 2 * (160 * Math.sin(n / 12 * i) + 320 * Math.sin(n * i / 30)) / 3, t;
        },
        outOfChina: function (e, n) {
          return n < 72.004 || n > 137.8347 || e < 0.8293 || e > 55.8271;
        },
        wgs2gcj: function (e, n) {
          var t = {};
          if (this.outOfChina(e, n)) return t.latitude = e, t.lng = n, t;
          var o = this.transformLat(n - 105, e - 35),
            u = this.transformLon(n - 105, e - 35),
            l = e / 180 * i,
            s = Math.sin(l);
          s = 1 - r * s * s;
          var m = Math.sqrt(s);
          o = 180 * o / (a * (1 - r) / (s * m) * i), u = 180 * u / (a / m * Math.cos(l) * i);
          var d = e + o,
            c = n + u;
          return t.latitude = d, t.longitude = c, t;
        },
        bd2gcj: function (e, n) {
          var t = {},
            i = n - 0.0065,
            a = e - 0.006,
            r = Math.sqrt(i * i + a * a) - 0.00002 * Math.sin(a * o),
            u = Math.atan2(a, i) - 0.000003 * Math.cos(i * o),
            l = r * Math.cos(u),
            s = r * Math.sin(u);
          return t.latitude = s, t.longitude = l, t;
        },
        gcj2bd: function (e, n) {
          var t = {},
            i = n,
            a = e,
            r = Math.sqrt(i * i + a * a) + 0.00002 * Math.sin(a * o),
            u = Math.atan2(a, i) + 0.000003 * Math.cos(i * o),
            l = r * Math.cos(u) + 0.0065,
            s = r * Math.sin(u) + 0.006;
          return t.latitude = s, t.longitude = l, t;
        },
        gcj2wgs: function (e, n) {
          var t = {};
          if (this.outOfChina(e, n)) return t.latitude = e, t.lng = n, t;
          var o = this.transformLat(n - 105, e - 35),
            u = this.transformLon(n - 105, e - 35),
            l = e / 180 * i,
            s = Math.sin(l);
          s = 1 - r * s * s;
          var m = Math.sqrt(s);
          o = 180 * o / (a * (1 - r) / (s * m) * i), u = 180 * u / (a / m * Math.cos(l) * i);
          var d = o,
            c = u;
          return t.latitude = d, t.longitude = c, t;
        }
      },
      l = u;
    n.default = l;
  },
  "2ac5": function (e, n, t) {
    var o = {
      "./af": "f8b5",
      "./af.js": "f8b5",
      "./ar": "219f",
      "./ar-dz": "cece",
      "./ar-dz.js": "cece",
      "./ar-kw": "2136",
      "./ar-kw.js": "2136",
      "./ar-ly": "ca3d",
      "./ar-ly.js": "ca3d",
      "./ar-ma": "948d",
      "./ar-ma.js": "948d",
      "./ar-sa": "1e41",
      "./ar-sa.js": "1e41",
      "./ar-tn": "32a8",
      "./ar-tn.js": "32a8",
      "./ar.js": "219f",
      "./az": "a2be",
      "./az.js": "a2be",
      "./be": "5d59",
      "./be.js": "5d59",
      "./bg": "2f6d",
      "./bg.js": "2f6d",
      "./bm": "7ac5",
      "./bm.js": "7ac5",
      "./bn": "5a35",
      "./bn-bd": "6c62",
      "./bn-bd.js": "6c62",
      "./bn.js": "5a35",
      "./bo": "a0da",
      "./bo.js": "a0da",
      "./br": "b3a0",
      "./br.js": "b3a0",
      "./bs": "a9d5",
      "./bs.js": "a9d5",
      "./ca": "1e70",
      "./ca.js": "1e70",
      "./cs": "7ef8",
      "./cs.js": "7ef8",
      "./cv": "e4c4",
      "./cv.js": "e4c4",
      "./cy": "8e5e",
      "./cy.js": "8e5e",
      "./da": "f24a",
      "./da.js": "f24a",
      "./de": "1d97",
      "./de-at": "6dd7",
      "./de-at.js": "6dd7",
      "./de-ch": "0f5f",
      "./de-ch.js": "0f5f",
      "./de.js": "1d97",
      "./dv": "1444",
      "./dv.js": "1444",
      "./el": "6168",
      "./el.js": "6168",
      "./en-au": "e1f41",
      "./en-au.js": "e1f41",
      "./en-ca": "2f4c",
      "./en-ca.js": "2f4c",
      "./en-gb": "b64f",
      "./en-gb.js": "b64f",
      "./en-ie": "0c6c",
      "./en-ie.js": "0c6c",
      "./en-il": "6243",
      "./en-il.js": "6243",
      "./en-in": "3f40",
      "./en-in.js": "3f40",
      "./en-nz": "bb53",
      "./en-nz.js": "bb53",
      "./en-sg": "0ac1",
      "./en-sg.js": "0ac1",
      "./eo": "9bd4",
      "./eo.js": "9bd4",
      "./es": "bb00",
      "./es-do": "4f7a",
      "./es-do.js": "4f7a",
      "./es-mx": "9dec",
      "./es-mx.js": "9dec",
      "./es-us": "621a",
      "./es-us.js": "621a",
      "./es.js": "bb00",
      "./et": "5b78",
      "./et.js": "5b78",
      "./eu": "848b",
      "./eu.js": "848b",
      "./fa": "f0b9",
      "./fa.js": "f0b9",
      "./fi": "04dc",
      "./fi.js": "04dc",
      "./fil": "d0c9",
      "./fil.js": "d0c9",
      "./fo": "5593",
      "./fo.js": "5593",
      "./fr": "9049",
      "./fr-ca": "5022",
      "./fr-ca.js": "5022",
      "./fr-ch": "d305",
      "./fr-ch.js": "d305",
      "./fr.js": "9049",
      "./fy": "f5d9",
      "./fy.js": "f5d9",
      "./ga": "2457",
      "./ga.js": "2457",
      "./gd": "ce86",
      "./gd.js": "ce86",
      "./gl": "7803",
      "./gl.js": "7803",
      "./gom-deva": "03dc5",
      "./gom-deva.js": "03dc5",
      "./gom-latn": "4e46",
      "./gom-latn.js": "4e46",
      "./gu": "56a5",
      "./gu.js": "56a5",
      "./he": "8d62",
      "./he.js": "8d62",
      "./hi": "6c88",
      "./hi.js": "6c88",
      "./hr": "1d4e",
      "./hr.js": "1d4e",
      "./hu": "1616",
      "./hu.js": "1616",
      "./hy-am": "d0f7",
      "./hy-am.js": "d0f7",
      "./id": "4bb9",
      "./id.js": "4bb9",
      "./is": "ff3b",
      "./is.js": "ff3b",
      "./it": "605e",
      "./it-ch": "bda2",
      "./it-ch.js": "bda2",
      "./it.js": "605e",
      "./ja": "18a7",
      "./ja.js": "18a7",
      "./jv": "4fd8",
      "./jv.js": "4fd8",
      "./ka": "8fda",
      "./ka.js": "8fda",
      "./kk": "bff2",
      "./kk.js": "bff2",
      "./km": "843a",
      "./km.js": "843a",
      "./kn": "bb20",
      "./kn.js": "bb20",
      "./ko": "9ae4",
      "./ko.js": "9ae4",
      "./ku": "dea0",
      "./ku.js": "dea0",
      "./ky": "54f8",
      "./ky.js": "54f8",
      "./lb": "52b4",
      "./lb.js": "52b4",
      "./lo": "9567",
      "./lo.js": "9567",
      "./lt": "1169",
      "./lt.js": "1169",
      "./lv": "d4f6",
      "./lv.js": "d4f6",
      "./me": "a266",
      "./me.js": "a266",
      "./mi": "f736",
      "./mi.js": "f736",
      "./mk": "87d1",
      "./mk.js": "87d1",
      "./ml": "cd98",
      "./ml.js": "cd98",
      "./mn": "7fe8",
      "./mn.js": "7fe8",
      "./mr": "9afd",
      "./mr.js": "9afd",
      "./ms": "55a3",
      "./ms-my": "e824",
      "./ms-my.js": "e824",
      "./ms.js": "55a3",
      "./mt": "7c5a",
      "./mt.js": "7c5a",
      "./my": "810e",
      "./my.js": "810e",
      "./nb": "279f",
      "./nb.js": "279f",
      "./ne": "1b75",
      "./ne.js": "1b75",
      "./nl": "9aa6",
      "./nl-be": "467a",
      "./nl-be.js": "467a",
      "./nl.js": "9aa6",
      "./nn": "d552",
      "./nn.js": "d552",
      "./oc-lnc": "ba4d",
      "./oc-lnc.js": "ba4d",
      "./pa-in": "fdc7",
      "./pa-in.js": "fdc7",
      "./pl": "001d",
      "./pl.js": "001d",
      "./pt": "6232",
      "./pt-br": "f381",
      "./pt-br.js": "f381",
      "./pt.js": "6232",
      "./ro": "b6f2",
      "./ro.js": "b6f2",
      "./ru": "23b0",
      "./ru.js": "23b0",
      "./sd": "6785",
      "./sd.js": "6785",
      "./se": "6333",
      "./se.js": "6333",
      "./si": "0ab1",
      "./si.js": "0ab1",
      "./sk": "c269",
      "./sk.js": "c269",
      "./sl": "2705",
      "./sl.js": "2705",
      "./sq": "7e58",
      "./sq.js": "7e58",
      "./sr": "0fc1",
      "./sr-cyrl": "d763",
      "./sr-cyrl.js": "d763",
      "./sr.js": "0fc1",
      "./ss": "7b50",
      "./ss.js": "7b50",
      "./sv": "bc40",
      "./sv.js": "bc40",
      "./sw": "3e3e",
      "./sw.js": "3e3e",
      "./ta": "b09b",
      "./ta.js": "b09b",
      "./te": "fa41",
      "./te.js": "fa41",
      "./tet": "bfcd",
      "./tet.js": "bfcd",
      "./tg": "d045",
      "./tg.js": "d045",
      "./th": "f9e9",
      "./th.js": "f9e9",
      "./tk": "2312",
      "./tk.js": "2312",
      "./tl-ph": "2dc4",
      "./tl-ph.js": "2dc4",
      "./tlh": "0184",
      "./tlh.js": "0184",
      "./tr": "668af",
      "./tr.js": "668af",
      "./tzl": "891d",
      "./tzl.js": "891d",
      "./tzm": "2f01",
      "./tzm-latn": "7172",
      "./tzm-latn.js": "7172",
      "./tzm.js": "2f01",
      "./ug-cn": "41e5",
      "./ug-cn.js": "41e5",
      "./uk": "9b0c",
      "./uk.js": "9b0c",
      "./ur": "d40b",
      "./ur.js": "d40b",
      "./uz": "ab1a",
      "./uz-latn": "876a",
      "./uz-latn.js": "876a",
      "./uz.js": "ab1a",
      "./vi": "b923",
      "./vi.js": "b923",
      "./x-pseudo": "0212",
      "./x-pseudo.js": "0212",
      "./yo": "4603",
      "./yo.js": "4603",
      "./zh-cn": "7959",
      "./zh-cn.js": "7959",
      "./zh-hk": "786e",
      "./zh-hk.js": "786e",
      "./zh-mo": "64cf",
      "./zh-mo.js": "64cf",
      "./zh-tw": "0221",
      "./zh-tw.js": "0221"
    };
    function i(e) {
      var n = a(e);
      return t(n);
    }
    function a(e) {
      if (!t.o(o, e)) {
        var n = new Error("Cannot find module '" + e + "'");
        throw n.code = "MODULE_NOT_FOUND", n;
      }
      return o[e];
    }
    i.keys = function () {
      return Object.keys(o);
    }, i.resolve = a, e.exports = i, i.id = "2ac5";
  },
  "31c7": function (e, n, t) {
    "use strict";

    t.d(n, "b", function () {
      return o;
    }), t.d(n, "c", function () {
      return i;
    }), t.d(n, "a", function () {});
    var o = function () {
        var e = this.$createElement,
          n = this._self._c || e;
        return n("App", {
          attrs: {
            keepAliveInclude: this.keepAliveInclude
          }
        });
      },
      i = [];
  },
  "32b7": function (e, n, t) {
    "use strict";

    t("6a54");
    var o = t("f5bd").default;
    Object.defineProperty(n, "__esModule", {
      value: !0
    }), n.default = void 0, t("5c47"), t("0506");
    var i = o(t("f055")),
      a = {
        isInApp: function () {
          var e = navigator.userAgent.toLowerCase();
          return !!/kxz/gi.test(e);
        },
        getSystemInfo: function (e) {},
        getUserInfo: function (e) {
          i.default.getUserInfo({
            success: function (n) {
              if (n && n.uid) {
                var t = {
                  user_id: n.uid || "",
                  user_name: n.nickname || "",
                  portrait_url: n.avatar || "",
                  phone: n.mobile || "",
                  wx_openid: "",
                  wx_unionid: "",
                  app_user_token: n.token || ""
                };
                e && e(t);
              } else e && e(!1);
            }
          });
        },
        getLocation: function (e) {
          i.default.getLocation({
            success: function (n) {
              e && e(n);
            }
          });
        },
        shareTo: function () {
          var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {};
          i.default.setShareData({
            title: e.title,
            description: e.brief,
            url: e.link_url,
            thumb: e.indexpic
          });
        },
        goToLoginPage: function () {
          i.default.goLogin({
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
          i.default.goTo({
            url: e
          });
        },
        goUcenter: function () {},
        playAudio: function () {},
        showShare: function () {
          var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {};
          i.default.showShareDialog({
            title: e.title,
            description: e.brief,
            url: e.link_url,
            thumb: e.indexpic
          });
        },
        openpaper: function () {}
      },
      r = a;
    n.default = r;
  },
  "33dd": function (e, n, t) {
    "use strict";

    var o = t("12f9"),
      i = t.n(o);
    i.a;
  },
  "3ace": function (e, n, t) {
    "use strict";

    t("6a54"), Object.defineProperty(n, "__esModule", {
      value: !0
    }), n.default = void 0, t("244a");
    var o = {
        isInApp: function () {
          return mc.isClient();
        },
        getSystemInfo: function (e) {},
        getUserInfo: function (e) {
          mc.userGetInfo(function (n) {
            if (n && n.data) {
              var t = {
                user_id: n.data.id || "",
                user_name: n.data.nickname || "",
                portrait_url: n.data.profileImage || "",
                phone: "",
                wx_openid: "",
                wx_unionid: "",
                app_user_token: ""
              };
              e && e(t);
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
      i = o;
    n.default = i;
  },
  "3c00": function (e, n, t) {
    "use strict";

    t("6a54"), Object.defineProperty(n, "__esModule", {
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
  4012: function (e, n, t) {
    "use strict";

    t("6a54");
    var o = t("f5bd").default;
    Object.defineProperty(n, "__esModule", {
      value: !0
    }), n.default = void 0, t("5ef2");
    var i = o(t("fcc0")),
      a = {
        isInApp: function () {
          return navigator.userAgent.indexOf("TMAppName") > -1;
        },
        getSystemInfo: function (e) {},
        getUserInfo: function (e) {
          this.isInApp() ? i.default.getTMUserInfo(function (n) {
            var t = n ? JSON.parse(n) : null;
            if (t) {
              var o = {
                user_id: t.member_id || "",
                user_name: t.member_name || t.member_nickname || "",
                portrait_url: t.head_pic || "",
                phone: t.mobile || "",
                wx_openid: t.wxopenid || "",
                wx_unionid: "",
                app_user_token: t.token || ""
              };
              e && e(o);
            } else e && e(!1);
          }) : e && e(!1);
        },
        getLocation: function (e) {},
        shareTo: function () {
          var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {};
          this.isInApp() && i.default.createShareFunctionButton({
            title: e.title,
            content: e.brief,
            url: e.link_url || "",
            thumbna: e.indexpic || ""
          });
        },
        goToLoginPage: function () {
          this.isInApp() && i.default.goToLogin();
        },
        goToBindPage: function () {},
        saveImage: function () {},
        linkTo: function () {},
        jumpToNews: function () {},
        goUcenter: function () {},
        playAudio: function () {},
        showShare: function () {
          var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {};
          this.isInApp() && i.default.goToShare({
            title: e.title,
            content: e.brief,
            url: e.link_url || "",
            thumbna: e.indexpic || ""
          });
        },
        openpaper: function () {}
      },
      r = a;
    n.default = r;
  },
  4824: function (e, n, t) {
    "use strict";

    t("6a54"), Object.defineProperty(n, "__esModule", {
      value: !0
    }), n.default = void 0, t("d4b5");
    var o = {
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
                var t = {
                  user_id: n.uid || "",
                  user_name: n.nickname || "",
                  portrait_url: n.avatar || "",
                  phone: "",
                  wx_openid: "",
                  wx_unionid: "",
                  app_user_token: ""
                };
                e && e(t);
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
      i = o;
    n.default = i;
  },
  "4b9b": function (e, n, t) {
    "use strict";

    t("6a54");
    var o = t("f5bd").default;
    Object.defineProperty(n, "__esModule", {
      value: !0
    }), n.default = void 0;
    var i = o(t("c5c6"));
    var a = {
        communityApiDomain: "ya-community.iyunxh.com",
        apiBaseDomain: "yapi.y-h5.iyunxh.com",
        voteApiBaseDomain: "yapi.y-h5.iyunxh.com",
        gameApiBaseDomain: "https://game-api.iyunxh.com",
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
              xsb_jiaojiang: "https://app.jiaojiangnews.com",
              xsb_fenghua: "https://app.fhtv.net.cn"
            },
            newsDetailPage: "/webDetails/{page_type}?id="
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
          },
          jingmaishan: {
            sdk: "jingmaishan-jssdk.js"
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
          pageDesignLoadMore: "pageDesignLoadMore",
          refreshAuctionInfo: "refreshAuctionInfo"
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
          mallHomePath: "_mall_home_path",
          mallStyleSetting: "_mall_style_setting_"
        },
        actionEvents: i.default,
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
          smallgame: "44302",
          bobing: "44402",
          auctionactivity: "40230",
          auctiongoods: "40231",
          auctionorder: "40232"
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
            ytbank: 12,
            chinaumspayUac: 13
          },
          cashPayTypes: {
            wechatPay: "wechat_pay",
            aliPay: "alipay",
            abcEcnyPay: "abc_ecny",
            ytbankPay: "ytbank",
            chinaumspayUacPay: "chinaumspay_uac"
          }
        },
        exchangeUnit: {
          1: "\u79EF\u5206",
          2: "\u91D1\u5E01"
        }
      },
      r = a;
    n.default = r;
  },
  "4c18": function (e, n, t) {
    var o = t("8a25");
    o.__esModule && (o = o.default), "string" === typeof o && (o = [[e.i, o, ""]]), o.locals && (e.exports = o.locals);
    var i = t("967dd").default;
    i("a387e1d4", o, !0, {
      sourceMap: !1,
      shadowMode: !1
    });
  },
  "508a": function (e, n, t) {
    "use strict";

    (function (e) {
      t("6a54"), Object.defineProperty(n, "__esModule", {
        value: !0
      }), n.default = void 0, t("5c47"), t("0506"), t("5ef2"), t("aa9c");
      var o = {
        isAndroid: !1,
        init: function () {
          var e = navigator.userAgent.toLowerCase();
          if (/wjxmediax/gi.test(e)) {
            var n = e.indexOf("android") > -1 || e.indexOf("linux") > -1;
            n && (this.isAndroid = !0, this.connectWebViewJavascriptBridge(function (e) {
              e.init(function (e, n) {
                n(e);
              });
            }));
          }
        },
        exe: function (n, t, o) {
          var i,
            a = "setupWebViewJavascriptBridge";
          return this.isAndroid && (a = "connectWebViewJavascriptBridge"), this[a](function (a) {
            a.callHandler(n, t, function (n) {
              if ("function" === typeof o) {
                try {
                  i = "string" === typeof n ? JSON.parse(n) : n;
                } catch (t) {
                  e.log(" ~ error:", t);
                }
                o(i);
              }
            });
          }), i;
        },
        registerHandler: function (e, n) {
          this.setupWebViewJavascriptBridge(function (t) {
            t.registerHandler(e, function (e, t) {
              n(e, t);
            });
          });
        },
        setupWebViewJavascriptBridge: function (e) {
          if (window.WebViewJavascriptBridge) return e(WebViewJavascriptBridge);
          if (window.WVJBCallbacks) return window.WVJBCallbacks.push(e);
          window.WVJBCallbacks = [e];
          var n = document.createElement("iframe");
          n.style.display = "none", n.src = "https://__bridge_loaded__", document.documentElement.appendChild(n), setTimeout(function () {
            document.documentElement.removeChild(n);
          }, 0);
        },
        connectWebViewJavascriptBridge: function (e) {
          window.WebViewJavascriptBridge ? e(WebViewJavascriptBridge) : document.addEventListener("WebViewJavascriptBridgeReady", function () {
            e(WebViewJavascriptBridge);
          }, !1);
        }
      };
      (function () {
        o.init();
      })();
      var i = o;
      n.default = i;
    }).call(this, t("ba7c")["default"]);
  },
  5524: function (e, n, t) {
    "use strict";

    t.r(n);
    var o = t("31c7"),
      i = t("d0cc");
    for (var a in i) ["default"].indexOf(a) < 0 && function (e) {
      t.d(n, e, function () {
        return i[e];
      });
    }(a);
    t("73a8");
    var r = t("828b"),
      u = Object(r["a"])(i["default"], o["b"], o["c"], !1, null, null, null, !1, o["a"], void 0);
    n["default"] = u.exports;
  },
  5615: function (e, n, t) {
    "use strict";

    (function (e) {
      t("6a54");
      var o = t("f5bd").default;
      Object.defineProperty(n, "__esModule", {
        value: !0
      }), n.default = void 0;
      var i = o(t("9b1b")),
        a = o(t("2634")),
        r = o(t("2fdc"));
      t("5c47"), t("0506"), t("e966"), t("d4b5");
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
            return (0, r.default)((0, a.default)().mark(function n() {
              var t, o;
              return (0, a.default)().wrap(function (n) {
                while (1) switch (n.prev = n.next) {
                  case 0:
                    if (!window.publicApiObj) {
                      n.next = 7;
                      break;
                    }
                    return n.next = 3, window.publicApiObj.getUserInfo();
                  case 3:
                    t = n.sent, t && t.member_id ? (o = {
                      user_id: t.member_id || "",
                      user_name: t.member_name || "",
                      portrait_url: t.head_pic || "",
                      phone: t.mobile || "",
                      wx_openid: "",
                      wx_unionid: "",
                      app_user_token: t.token || ""
                    }, e && e(o)) : e && e(!1), n.next = 8;
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
                t = getCurrentPages(),
                o = t[t.length - 1];
              o && o.options && o.options["id"] && (n = parseInt(o.options["id"])), window.publicApiObj.settingShare({
                id: n,
                title: e.title,
                description: e.brief,
                share_url: e.link_url,
                share_pic: e.indexpic,
                is_reprint: 1
              }), this.livePageShare((0, i.default)((0, i.default)({}, e), {}, {
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
              content: e.brief,
              share_url: e.link_url,
              url: e.link_url,
              share_pic: e.indexpic,
              icon: e.indexpic
            });
          },
          livePageShare: function () {
            var n = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {},
              t = {
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
              var o = uni.getSystemInfoSync();
              "android" == o.platform ? (window.tmObj && window.tmObj.livenewsCallback && window.tmObj.livenewsCallback(JSON.stringify(t)), window.tmObj && window.tmObj.informationCallback && window.tmObj.informationCallback(JSON.stringify(t))) : "ios" == o.platform && window.webkit && window.webkit.messageHandlers && window.webkit.messageHandlers.livenewsCallback && (window.webkit.messageHandlers.livenewsCallback.postMessage(t), window.webkit.messageHandlers.informationCallback.postMessage(t), window.livenewsCallback && window.livenewsCallback(JSON.stringify(t)), window.informationCallback && window.informationCallback(JSON.stringify(t)));
            } catch (i) {
              e.log(i);
            }
          },
          openpaper: function () {}
        },
        s = l;
      n.default = s;
    }).call(this, t("ba7c")["default"]);
  },
  "56cd": function (e, n, t) {
    "use strict";

    t("6a54"), Object.defineProperty(n, "__esModule", {
      value: !0
    }), n.default = void 0, t("f26e");
    var o = {
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
              var t = {
                user_id: n.userInfo.userid || "",
                user_name: n.userInfo.username || "",
                portrait_url: n.userInfo.picurl || "",
                phone: n.userInfo.telephone || "",
                wx_openid: n.userInfo.weixin_open_id || "",
                wx_unionid: "",
                app_user_token: n.userInfo.userTokenKey || ""
              };
              e && e(t);
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
            title: e.title || "",
            brief: e.brief || "",
            contentURL: e.link_url || "",
            imageLink: e.indexpic || ""
          });
        },
        openpaper: function () {}
      },
      i = o;
    n.default = i;
  },
  "6eb4": function (e, n, t) {
    "use strict";

    t("6a54");
    var o = t("f5bd").default;
    Object.defineProperty(n, "__esModule", {
      value: !0
    }), n.default = void 0;
    var i = o(t("9b1b"));
    t("5c47"), t("0506");
    var a = {
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
          a.resultcallback(e, a.isappback);
        },
        resultcallback: function (e, n) {
          null != e && e && n ? ("Android" == this.phoneType() && (e = JSON.parse(e)), n((0, i.default)((0, i.default)({}, a.successinfo), {}, {
            data: e
          }))) : n && n(a.errorinfo);
        },
        getUserInfo: function (e) {
          if ("IOS" == this.phoneType()) window.webkit.messageHandlers.getUserInfo.postMessage({
            functionName: "getUserInfoCallBack"
          }), window.getUserInfoCallBack = a.getUserInfoCallBack, a.huiyuanback = e;else {
            if ("Android" != this.phoneType()) return e(a.errorinfo);
            var n = window.app.getUserInfo();
            a.resultcallback(n, e);
          }
        },
        getUserInfoCallBack: function (e) {
          null != e.phone && e.phone && 0 != e.phone.length || (e = null), a.resultcallback(e, a.huiyuanback);
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
          }), window.getSystemInfoCallBack = a.getSystemInfoCallBack, a.shebeiback = e;else {
            if ("Android" != this.phoneType()) return e(a.errorinfo);
            var n = window.app.getSystemInfo();
            a.resultcallback(n, e);
          }
        },
        getSystemInfoCallBack: function (e) {
          a.resultcallback(e, a.shebeiback);
        },
        jumpToNews: function (e, n) {
          var t = {
            newsId: e,
            newsJsonUrl: n
          };
          "IOS" == this.phoneType() ? window.webkit.messageHandlers.jumpToNews.postMessage(t) : "Android" == this.phoneType() && window.app.jumpToNews(e, n);
        },
        jumpToWxApp: function (e, n) {
          var t = {
            appId: e,
            path: n
          };
          "IOS" == this.phoneType() ? window.webkit.messageHandlers.jumpToWxApp.postMessage(t) : "Android" == this.phoneType() && window.app.jumpToWxApp(e, n);
        },
        jumpToRealnameVerify: function () {
          "IOS" == this.phoneType() ? window.webkit.messageHandlers.jumpToRealnameVerify.postMessage({}) : "Android" == this.phoneType() && window.app.jumpToRealnameVerify();
        },
        loadPayUrl: function (e, n, t) {
          var o = {
            pay_seq_num: e,
            url: n,
            callback_url: t
          };
          "IOS" == this.phoneType() ? window.webkit.messageHandlers.loadPayUrl.postMessage(o) : "Android" == this.phoneType() && window.app.loadPayUrl(e, n, t);
        },
        goToRealnamePage: function () {
          "IOS" == this.phoneType() ? window.webkit.messageHandlers.goToRealnamePage.postMessage({}) : "Android" == this.phoneType() && window.app.goToRealnamePage();
        }
      },
      r = a;
    n.default = r;
  },
  "6eff": function (e, n, t) {
    "use strict";

    t("6a54"), Object.defineProperty(n, "__esModule", {
      value: !0
    }), n.default = void 0, t("5c47"), t("0506");
    var o = !1;
    window.addEventListener("flutterInAppWebViewPlatformReady", function () {
      o = !0;
    }), window.init = function () {
      o = !0;
    };
    var i = {
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
          window.flutter_inappwebview && o ? window.flutter_inappwebview.callHandler("getUserInfo", {
            isShowLoginDialog: "0"
          }).then(function (n) {
            if (n) {
              "string" == typeof n && (n = JSON.parse(n));
              var t = {
                user_id: n.user_id || "",
                user_name: n.user_name || "",
                portrait_url: n.avatar_url || "",
                phone: n.phone || "",
                wx_openid: n.wx_openid || "",
                wx_unionid: n.wx_unionid || "",
                app_user_token: n.token || ""
              };
              e && e(t);
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
      a = i;
    n.default = a;
  },
  "6fa1": function (e, n, t) {
    "use strict";

    t.r(n);
    var o = t("e505"),
      i = t("e65e");
    for (var a in i) ["default"].indexOf(a) < 0 && function (e) {
      t.d(n, e, function () {
        return i[e];
      });
    }(a);
    t("33dd");
    var r = t("828b"),
      u = Object(r["a"])(i["default"], o["b"], o["c"], !1, null, "48abcc36", null, !1, o["a"], void 0);
    n["default"] = u.exports;
  },
  "73a8": function (e, n, t) {
    "use strict";

    var o = t("4c18"),
      i = t.n(o);
    i.a;
  },
  "7a98": function (e, n, t) {
    e.exports = t.p + "static/iconfont/iconfont.woff2";
  },
  "7aab": function (e, n, t) {
    e.exports = t.p + "static/iconfont/iconfont.eot";
  },
  "7d56": function (e, n, t) {
    "use strict";

    t("6a54");
    var o = t("f5bd").default;
    Object.defineProperty(n, "__esModule", {
      value: !0
    }), n.default = void 0, t("5c47"), t("a1c1");
    var i = o(t("e299")),
      a = o(t("4b9b")),
      r = t("96a9"),
      u = {
        isInApp: function () {
          return !!i.default.checkUserAgent();
        },
        getSystemInfo: function (e) {},
        getUserInfo: function (e) {
          i.default.dkAccessToken("nbtvAccessTokenCallback"), window.nbtvAccessTokenCallback = function (n) {
            if (n) {
              var t = JSON.parse(n),
                o = t.accesstoken;
              if (o && "0" != o) {
                var r = getApp().globalData.h5_domain.replace("http://", "");
                r = r.replace("https://", ""), i.default.thirdLogin(a.default.thirdPlatforms.nbtv.appkey, a.default.thirdPlatforms.nbtv.appsecret, o, r).then(function (n) {
                  if (n.success && n.result) {
                    var t = {
                      user_id: n.result.id || "",
                      user_name: n.result.nickname || "",
                      portrait_url: n.result.avatar || "",
                      phone: n.result.cellphone || "",
                      wx_openid: "",
                      wx_unionid: n.result.wx_unionid || "",
                      app_user_token: o
                    };
                    e && e(t);
                  } else e && e(!1);
                });
              } else e && e(!1);
            } else e && e(!1);
          };
        },
        getLocation: function (e) {},
        shareTo: function () {
          var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {};
          i.default.dkShare({
            title: e.title || "",
            img: e.indexpic || "",
            description: e.brief || "",
            url: e.link_url || ""
          });
        },
        goToLoginPage: function () {
          var e = getApp().globalData.h5_domain + (0, r.getCurrentPagePath)();
          e = (0, r.removeURLParameter)(e, "access_token"), e = (0, r.removeURLParameter)(e, "timestamp"), i.default.dkLogin(e);
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
  8085: function (e, n, t) {
    "use strict";

    (function (e) {
      var n = t("f5bd").default;
      t("473f"), t("bf0f"), t("de6c"), t("5c47"), t("a1c1");
      var o = n(t("9b8e")),
        i = {
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
            pagePath: "module-mall/home/mall-home",
            iconPath: "static/tabbar/home.png",
            selectedIconPath: "static/tabbar/home-selected.png",
            text: "\u9996\u9875",
            visible: !1,
            redDot: !1,
            badge: ""
          }, {
            current: 1,
            pagePath: "module-mall/home/home-style-four",
            iconPath: "static/tabbar/home.png",
            selectedIconPath: "static/tabbar/home-selected.png",
            text: "\u9996\u9875",
            visible: !1,
            redDot: !1,
            badge: ""
          }, {
            current: 2,
            pagePath: "module-mall/business/business-new-style-four",
            iconPath: "static/tabbar/business.png",
            selectedIconPath: "static/tabbar/business-selected.png",
            text: "\u5546\u5BB6",
            visible: !1,
            redDot: !1,
            badge: ""
          }, {
            current: 3,
            pagePath: "module-mall/exchange-log/exchange-log-style-four",
            iconPath: "static/tabbar/order.png",
            selectedIconPath: "static/tabbar/order-selected.png",
            text: "\u8BA2\u5355",
            visible: !1,
            redDot: !1,
            badge: ""
          }, {
            current: 4,
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
      }, e.__uniConfig.compilerVersion = "4.23", e.__uniConfig.darkmode = !1, e.__uniConfig.themeConfig = {}, e.__uniConfig.uniPlatform = "h5", e.__uniConfig.appId = "__UNI__7B8F155", e.__uniConfig.appName = "", e.__uniConfig.appVersion = "1.0.0", e.__uniConfig.appVersionCode = "100", e.__uniConfig.router = {
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
      }, e.__uniConfig.sdkConfigs = {}, e.__uniConfig.qqMapKey = void 0, e.__uniConfig.googleMapKey = void 0, e.__uniConfig.aMapKey = void 0, e.__uniConfig.aMapSecurityJsCode = void 0, e.__uniConfig.aMapServiceHost = void 0, e.__uniConfig.locale = "", e.__uniConfig.fallbackLocale = void 0, e.__uniConfig.locales = i.keys().reduce(function (e, n) {
        var t = n.replace(/\.\/(uni-app.)?(.*).json/, "$2"),
          o = i(n);
        return Object.assign(e[t] || (e[t] = {}), o.common || o), e;
      }, {}), e.__uniConfig.nvue = {
        "flex-direction": "column"
      }, e.__uniConfig.__webpack_chunk_load__ = t.e, o.default.component("pages-home-sdk", function (e) {
        var n = {
          component: t.e("pages-home-sdk").then(function () {
            return e(t("2a8a"));
          }.bind(null, t)).catch(t.oe),
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
      }), o.default.component("pages-home-index", function (e) {
        var n = {
          component: Promise.all([t.e("module-activity-home-home~module-answer-home-home~module-answer-question-question~module-article-tas~d29a41ac"), t.e("module-activity-home-home~module-answer-home-home~module-answer-question-question~module-article-tas~be372959"), t.e("module-activity-home-home~module-answer-home-home~module-answer-question-question~module-article-tas~0b8a7094"), t.e("module-activity-home-home~module-answer-home-home~module-answer-question-question~module-article-tas~ef19aba9"), t.e("pages-home-index")]).then(function () {
            return e(t("4e51"));
          }.bind(null, t)).catch(t.oe),
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
      }), o.default.component("pages-home-callback", function (e) {
        var n = {
          component: t.e("pages-home-callback").then(function () {
            return e(t("4a27"));
          }.bind(null, t)).catch(t.oe),
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
      }), o.default.component("pages-activity-list", function (e) {
        var n = {
          component: Promise.all([t.e("module-answer-answer-log-answer-detail~module-customer-fhtvn-no-rank-list~module-customer-fhtvn-rank~d5a9cb9a"), t.e("pages-activity-list")]).then(function () {
            return e(t("a053"));
          }.bind(null, t)).catch(t.oe),
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
      }), o.default.component("pages-activity-help-rank", function (e) {
        var n = {
          component: t.e("pages-activity-help-rank").then(function () {
            return e(t("ecee"));
          }.bind(null, t)).catch(t.oe),
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
      }), o.default.component("pages-member-task-center", function (e) {
        var n = {
          component: Promise.all([t.e("module-activity-home-home~module-answer-home-home~module-answer-question-question~module-article-tas~d29a41ac"), t.e("module-activity-home-home~module-answer-home-home~module-answer-question-question~module-article-tas~be372959"), t.e("module-activity-home-home~module-answer-home-home~module-answer-question-question~module-article-tas~0b8a7094"), t.e("module-activity-home-home~module-answer-home-home~module-answer-question-question~module-article-tas~ef19aba9"), t.e("pages-member-task-center")]).then(function () {
            return e(t("09d2"));
          }.bind(null, t)).catch(t.oe),
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
      }), o.default.component("pages-shopping-mall-home", function (e) {
        var n = {
          component: Promise.all([t.e("module-activity-home-home~module-answer-home-home~module-answer-question-question~module-article-tas~d29a41ac"), t.e("module-activity-home-home~module-answer-home-home~module-answer-question-question~module-article-tas~be372959"), t.e("module-activity-home-home~module-answer-home-home~module-answer-question-question~module-article-tas~0b8a7094"), t.e("module-activity-home-home~module-answer-home-home~module-answer-question-question~module-article-tas~ef19aba9"), t.e("pages-shopping-mall-home")]).then(function () {
            return e(t("c116"));
          }.bind(null, t)).catch(t.oe),
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
      }), o.default.component("module-mall-home-mall-home", function (e) {
        var n = {
          component: Promise.all([t.e("module-activity-home-home~module-answer-home-home~module-answer-question-question~module-article-tas~d29a41ac"), t.e("module-activity-home-home~module-answer-home-home~module-answer-question-question~module-article-tas~be372959"), t.e("module-activity-home-home~module-answer-home-home~module-answer-question-question~module-article-tas~0b8a7094"), t.e("module-activity-home-home~module-answer-home-home~module-answer-question-question~module-article-tas~ef19aba9"), t.e("module-mall-home-mall-home")]).then(function () {
            return e(t("5db7"));
          }.bind(null, t)).catch(t.oe),
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
      }), o.default.component("pages-member-user-center", function (e) {
        var n = {
          component: Promise.all([t.e("module-activity-home-home~module-answer-home-home~module-answer-question-question~module-article-tas~d29a41ac"), t.e("module-activity-home-home~module-answer-home-home~module-answer-question-question~module-article-tas~be372959"), t.e("module-activity-home-home~module-answer-home-home~module-answer-question-question~module-article-tas~0b8a7094"), t.e("module-activity-home-home~module-answer-home-home~module-answer-question-question~module-article-tas~ef19aba9"), t.e("pages-member-user-center")]).then(function () {
            return e(t("7f4a"));
          }.bind(null, t)).catch(t.oe),
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
      }), o.default.component("pages-home-sdk-activity", function (e) {
        var n = {
          component: t.e("pages-home-sdk-activity").then(function () {
            return e(t("cd2b"));
          }.bind(null, t)).catch(t.oe),
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
      }), o.default.component("pages-home-sdk-me", function (e) {
        var n = {
          component: t.e("pages-home-sdk-me").then(function () {
            return e(t("35d54"));
          }.bind(null, t)).catch(t.oe),
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
      }), o.default.component("pages-home-error", function (e) {
        var n = {
          component: t.e("pages-home-error").then(function () {
            return e(t("ce0b"));
          }.bind(null, t)).catch(t.oe),
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
      }), o.default.component("pages-download-tianmu-download", function (e) {
        var n = {
          component: t.e("pages-download-tianmu-download").then(function () {
            return e(t("856b"));
          }.bind(null, t)).catch(t.oe),
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
      }), o.default.component("pages-setting-clear", function (e) {
        var n = {
          component: t.e("pages-setting-clear").then(function () {
            return e(t("6e9c"));
          }.bind(null, t)).catch(t.oe),
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
      }), o.default.component("pages-download-close-page", function (e) {
        var n = {
          component: t.e("pages-download-close-page").then(function () {
            return e(t("997a"));
          }.bind(null, t)).catch(t.oe),
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
      }), o.default.component("module-mall-home-home", function (e) {
        var n = {
          component: Promise.all([t.e("module-activity-home-home~module-answer-home-home~module-answer-question-question~module-article-tas~d29a41ac"), t.e("module-activity-home-home~module-answer-home-home~module-answer-question-question~module-article-tas~be372959"), t.e("module-activity-home-home~module-answer-home-home~module-answer-question-question~module-article-tas~0b8a7094"), t.e("module-activity-home-home~module-answer-home-home~module-answer-question-question~module-article-tas~ef19aba9"), t.e("module-mall-home-home")]).then(function () {
            return e(t("1930"));
          }.bind(null, t)).catch(t.oe),
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
      }), o.default.component("module-mall-home-search-home", function (e) {
        var n = {
          component: Promise.all([t.e("module-clockin-log-log~module-cms-news-detail~module-cms-video-detail~module-customer-fjdaily-clocki~654be37c"), t.e("module-mall-goodslist-goods-channel-list~module-mall-goodslist-goods-class-list~module-mall-home-search-home"), t.e("module-mall-home-search-home")]).then(function () {
            return e(t("7c53"));
          }.bind(null, t)).catch(t.oe),
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
      }), o.default.component("module-mall-home-mall-home", function (e) {
        var n = {
          component: Promise.all([t.e("module-activity-home-home~module-answer-home-home~module-answer-question-question~module-article-tas~d29a41ac"), t.e("module-activity-home-home~module-answer-home-home~module-answer-question-question~module-article-tas~be372959"), t.e("module-activity-home-home~module-answer-home-home~module-answer-question-question~module-article-tas~0b8a7094"), t.e("module-activity-home-home~module-answer-home-home~module-answer-question-question~module-article-tas~ef19aba9"), t.e("module-mall-home-mall-home")]).then(function () {
            return e(t("5db7"));
          }.bind(null, t)).catch(t.oe),
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
      }), o.default.component("module-mall-customer-customer", function (e) {
        var n = {
          component: Promise.all([t.e("module-mall-customer-business-customer~module-mall-customer-customer"), t.e("module-mall-customer-customer")]).then(function () {
            return e(t("7c31"));
          }.bind(null, t)).catch(t.oe),
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
      }), o.default.component("module-mall-customer-business-customer", function (e) {
        var n = {
          component: Promise.all([t.e("module-mall-customer-business-customer~module-mall-customer-customer"), t.e("module-mall-customer-business-customer")]).then(function () {
            return e(t("8daa"));
          }.bind(null, t)).catch(t.oe),
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
      }), o.default.component("module-mall-customer-pre-sales-customer", function (e) {
        var n = {
          component: t.e("module-mall-customer-pre-sales-customer").then(function () {
            return e(t("ee58"));
          }.bind(null, t)).catch(t.oe),
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
      }), o.default.component("module-mall-home-home-style-two", function (e) {
        var n = {
          component: Promise.all([t.e("module-activity-home-home~module-answer-home-home~module-answer-question-question~module-article-tas~d29a41ac"), t.e("module-activity-home-home~module-answer-home-home~module-answer-question-question~module-article-tas~be372959"), t.e("module-activity-home-home~module-answer-home-home~module-answer-question-question~module-article-tas~0b8a7094"), t.e("module-activity-home-home~module-answer-home-home~module-answer-question-question~module-article-tas~ef19aba9"), t.e("module-mall-home-home-style-two")]).then(function () {
            return e(t("4b42"));
          }.bind(null, t)).catch(t.oe),
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
      }), o.default.component("module-mall-business-offline-business", function (e) {
        var n = {
          component: Promise.all([t.e("module-answer-answer-log-answer-detail~module-customer-fhtvn-no-rank-list~module-customer-fhtvn-rank~d5a9cb9a"), t.e("module-ecnyform-activity-log-my-log-list~module-ecnyform-business-list~module-guess-log-pk-log~modul~87d9fdef"), t.e("module-mall-business-offline-business")]).then(function () {
            return e(t("e238"));
          }.bind(null, t)).catch(t.oe),
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
      }), o.default.component("module-mall-business-business", function (e) {
        var n = {
          component: Promise.all([t.e("module-ecnyform-activity-log-my-log-list~module-ecnyform-business-list~module-guess-log-pk-log~modul~87d9fdef"), t.e("module-mall-business-business")]).then(function () {
            return e(t("6c5e"));
          }.bind(null, t)).catch(t.oe),
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
      }), o.default.component("module-mall-business-business-new", function (e) {
        var n = {
          component: Promise.all([t.e("module-ecnyform-activity-log-my-log-list~module-ecnyform-business-list~module-guess-log-pk-log~modul~87d9fdef"), t.e("module-mall-business-business-new")]).then(function () {
            return e(t("b833"));
          }.bind(null, t)).catch(t.oe),
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
      }), o.default.component("module-mall-business-business-new-style-four", function (e) {
        var n = {
          component: Promise.all([t.e("module-ecnyform-activity-log-my-log-list~module-ecnyform-business-list~module-guess-log-pk-log~modul~87d9fdef"), t.e("module-mall-business-business-new-style-four")]).then(function () {
            return e(t("fbdd"));
          }.bind(null, t)).catch(t.oe),
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
      }), o.default.component("module-mall-business-apply", function (e) {
        var n = {
          component: Promise.all([t.e("module-clockin-cert-get-cert~module-customer-xmtv-flowers~module-guandan-rank-rank-detail~module-lot~3a7f0b09"), t.e("module-info-pub-report-report~module-live-report-report~module-mall-business-apply~module-mall-comme~3b1de550"), t.e("module-mall-address-address-detail~module-mall-business-apply"), t.e("module-mall-business-apply")]).then(function () {
            return e(t("4aaf"));
          }.bind(null, t)).catch(t.oe),
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
      }), o.default.component("module-mall-goodslist-goodslist", function (e) {
        var n = {
          component: Promise.all([t.e("module-activity-home-home~module-answer-home-home~module-answer-question-question~module-article-tas~d29a41ac"), t.e("module-activity-home-home~module-answer-home-home~module-answer-question-question~module-article-tas~be372959"), t.e("module-activity-home-home~module-answer-home-home~module-answer-question-question~module-article-tas~0b8a7094"), t.e("module-activity-home-home~module-answer-home-home~module-answer-question-question~module-article-tas~ef19aba9"), t.e("module-mall-goodslist-goodslist")]).then(function () {
            return e(t("d6a8"));
          }.bind(null, t)).catch(t.oe),
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
      }), o.default.component("module-mall-goodslist-goods-channel-list", function (e) {
        var n = {
          component: Promise.all([t.e("module-mall-goodslist-goods-channel-list~module-mall-goodslist-goods-class-list~module-mall-home-search-home"), t.e("module-mall-goodslist-goods-channel-list~module-mall-goodslist-goods-class-list"), t.e("module-mall-goodslist-goods-channel-list")]).then(function () {
            return e(t("9b96"));
          }.bind(null, t)).catch(t.oe),
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
      }), o.default.component("module-mall-goodslist-goods-class-list", function (e) {
        var n = {
          component: Promise.all([t.e("module-mall-goodslist-goods-channel-list~module-mall-goodslist-goods-class-list~module-mall-home-search-home"), t.e("module-mall-goodslist-goods-channel-list~module-mall-goodslist-goods-class-list"), t.e("module-mall-goodslist-goods-class-list")]).then(function () {
            return e(t("f74d"));
          }.bind(null, t)).catch(t.oe),
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
      }), o.default.component("module-mall-goods-detail-goods-detail", function (e) {
        var n = {
          component: Promise.all([t.e("module-activity-home-home~module-answer-home-home~module-answer-question-question~module-article-tas~d29a41ac"), t.e("module-activity-home-home~module-answer-home-home~module-answer-question-question~module-article-tas~be372959"), t.e("module-activity-home-home~module-answer-home-home~module-answer-question-question~module-article-tas~0b8a7094"), t.e("module-activity-home-home~module-answer-home-home~module-answer-question-question~module-article-tas~ef19aba9"), t.e("module-mall-goods-detail-goods-detail")]).then(function () {
            return e(t("5510"));
          }.bind(null, t)).catch(t.oe),
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
      }), o.default.component("module-mall-goods-detail-goods-detail-style-three", function (e) {
        var n = {
          component: Promise.all([t.e("module-activity-home-home~module-answer-home-home~module-answer-question-question~module-article-tas~d29a41ac"), t.e("module-activity-home-home~module-answer-home-home~module-answer-question-question~module-article-tas~be372959"), t.e("module-activity-home-home~module-answer-home-home~module-answer-question-question~module-article-tas~0b8a7094"), t.e("module-activity-home-home~module-answer-home-home~module-answer-question-question~module-article-tas~ef19aba9"), t.e("module-mall-goods-detail-goods-detail-style-three")]).then(function () {
            return e(t("0d4e"));
          }.bind(null, t)).catch(t.oe),
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
      }), o.default.component("module-mall-goods-activity-goods-activity", function (e) {
        var n = {
          component: t.e("module-mall-goods-activity-goods-activity").then(function () {
            return e(t("2184"));
          }.bind(null, t)).catch(t.oe),
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
      }), o.default.component("module-mall-confirm-order-confirm-order", function (e) {
        var n = {
          component: Promise.all([t.e("module-activity-home-home~module-answer-home-home~module-answer-question-question~module-article-tas~d29a41ac"), t.e("module-clockin-cert-get-cert~module-cms-news-detail~module-cms-video-detail~module-customer-fjdaily-~4f8830ac"), t.e("module-clockin-log-log~module-cms-news-detail~module-cms-video-detail~module-customer-fjdaily-clocki~654be37c"), t.e("module-mall-confirm-order-confirm-order~module-mall-confirm-order-confirm-order-cart~module-mall-goo~0e644f91"), t.e("module-mall-confirm-order-confirm-order")]).then(function () {
            return e(t("8c7a"));
          }.bind(null, t)).catch(t.oe),
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
      }), o.default.component("module-mall-confirm-order-confirm-order-cart", function (e) {
        var n = {
          component: Promise.all([t.e("module-activity-home-home~module-answer-home-home~module-answer-question-question~module-article-tas~d29a41ac"), t.e("module-clockin-cert-get-cert~module-cms-news-detail~module-cms-video-detail~module-customer-fjdaily-~4f8830ac"), t.e("module-clockin-log-log~module-cms-news-detail~module-cms-video-detail~module-customer-fjdaily-clocki~654be37c"), t.e("module-mall-confirm-order-confirm-order~module-mall-confirm-order-confirm-order-cart~module-mall-goo~0e644f91"), t.e("module-mall-confirm-order-confirm-order-cart")]).then(function () {
            return e(t("83f3"));
          }.bind(null, t)).catch(t.oe),
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
      }), o.default.component("module-mall-exchange-log-exchange-log", function (e) {
        var n = {
          component: Promise.all([t.e("module-answer-answer-log-answer-detail~module-customer-fhtvn-no-rank-list~module-customer-fhtvn-rank~d5a9cb9a"), t.e("module-mall-exchange-log-exchange-log")]).then(function () {
            return e(t("e5c0"));
          }.bind(null, t)).catch(t.oe),
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
      }), o.default.component("module-mall-exchange-log-exchange-log-style-four", function (e) {
        var n = {
          component: Promise.all([t.e("module-answer-answer-log-answer-detail~module-customer-fhtvn-no-rank-list~module-customer-fhtvn-rank~d5a9cb9a"), t.e("module-mall-exchange-log-exchange-log-style-four")]).then(function () {
            return e(t("97e8"));
          }.bind(null, t)).catch(t.oe),
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
      }), o.default.component("module-mall-order-detail-order-detail", function (e) {
        var n = {
          component: Promise.all([t.e("module-answer-answer-log-answer-detail~module-customer-fhtvn-no-rank-list~module-customer-fhtvn-rank~d5a9cb9a"), t.e("module-lottery-win-record-detail-win-record-detail~module-lottery-writeoff-confirm~module-lottery-wr~345e859a"), t.e("module-mall-confirm-order-confirm-order~module-mall-confirm-order-confirm-order-cart~module-mall-goo~0e644f91"), t.e("module-mall-order-detail-order-detail~module-mall-order-detail-order-detail-businessmen"), t.e("module-mall-order-detail-order-detail")]).then(function () {
            return e(t("b810"));
          }.bind(null, t)).catch(t.oe),
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
      }), o.default.component("module-mall-order-detail-order-detail-businessmen", function (e) {
        var n = {
          component: Promise.all([t.e("module-lottery-win-record-detail-win-record-detail~module-lottery-writeoff-confirm~module-lottery-wr~345e859a"), t.e("module-mall-confirm-order-confirm-order~module-mall-confirm-order-confirm-order-cart~module-mall-goo~0e644f91"), t.e("module-mall-order-detail-order-detail~module-mall-order-detail-order-detail-businessmen"), t.e("module-mall-order-detail-order-detail-businessmen")]).then(function () {
            return e(t("4d59"));
          }.bind(null, t)).catch(t.oe),
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
      }), o.default.component("module-mall-order-detail-order-detail-businessmen", function (e) {
        var n = {
          component: Promise.all([t.e("module-lottery-win-record-detail-win-record-detail~module-lottery-writeoff-confirm~module-lottery-wr~345e859a"), t.e("module-mall-confirm-order-confirm-order~module-mall-confirm-order-confirm-order-cart~module-mall-goo~0e644f91"), t.e("module-mall-order-detail-order-detail~module-mall-order-detail-order-detail-businessmen"), t.e("module-mall-order-detail-order-detail-businessmen")]).then(function () {
            return e(t("4d59"));
          }.bind(null, t)).catch(t.oe),
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
      }), o.default.component("module-mall-order-detail-no-order-deatil", function (e) {
        var n = {
          component: t.e("module-mall-order-detail-no-order-deatil").then(function () {
            return e(t("85d7"));
          }.bind(null, t)).catch(t.oe),
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
      }), o.default.component("module-mall-order-result-order-result", function (e) {
        var n = {
          component: t.e("module-mall-order-result-order-result").then(function () {
            return e(t("e439"));
          }.bind(null, t)).catch(t.oe),
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
      }), o.default.component("module-mall-address-address-list", function (e) {
        var n = {
          component: Promise.all([t.e("module-clockin-cert-get-cert~module-cms-news-detail~module-cms-video-detail~module-customer-fjdaily-~4f8830ac"), t.e("module-mall-address-address-list")]).then(function () {
            return e(t("4cec"));
          }.bind(null, t)).catch(t.oe),
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
      }), o.default.component("module-mall-address-address-detail", function (e) {
        var n = {
          component: Promise.all([t.e("module-clockin-log-log~module-cms-news-detail~module-cms-video-detail~module-customer-fjdaily-clocki~654be37c"), t.e("module-clockin-cert-get-cert~module-customer-xmtv-flowers~module-guandan-rank-rank-detail~module-lot~3a7f0b09"), t.e("module-mall-address-address-detail~module-mall-business-apply"), t.e("module-mall-address-address-detail")]).then(function () {
            return e(t("43d4"));
          }.bind(null, t)).catch(t.oe),
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
      }), o.default.component("module-mall-coupon-coupon-list", function (e) {
        var n = {
          component: Promise.all([t.e("module-answer-answer-log-answer-detail~module-customer-fhtvn-no-rank-list~module-customer-fhtvn-rank~d5a9cb9a"), t.e("module-mall-coupon-coupon-list")]).then(function () {
            return e(t("d881"));
          }.bind(null, t)).catch(t.oe),
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
      }), o.default.component("module-mall-coupon-coupon-detail", function (e) {
        var n = {
          component: Promise.all([t.e("module-lottery-win-record-detail-win-record-detail~module-lottery-writeoff-confirm~module-lottery-wr~345e859a"), t.e("module-mall-coupon-coupon-detail")]).then(function () {
            return e(t("e8de"));
          }.bind(null, t)).catch(t.oe),
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
      }), o.default.component("module-mall-coupon-coupon-show-list", function (e) {
        var n = {
          component: t.e("module-mall-coupon-coupon-show-list").then(function () {
            return e(t("2b0a"));
          }.bind(null, t)).catch(t.oe),
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
      }), o.default.component("module-mall-coupon-coupon-center", function (e) {
        var n = {
          component: Promise.all([t.e("module-activity-home-home~module-answer-home-home~module-answer-question-question~module-article-tas~d29a41ac"), t.e("module-activity-home-home~module-answer-home-home~module-answer-question-question~module-article-tas~be372959"), t.e("module-activity-home-home~module-answer-home-home~module-answer-question-question~module-article-tas~0b8a7094"), t.e("module-activity-home-home~module-answer-home-home~module-answer-question-question~module-article-tas~ef19aba9"), t.e("module-mall-coupon-coupon-center")]).then(function () {
            return e(t("da66"));
          }.bind(null, t)).catch(t.oe),
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
      }), o.default.component("module-mall-cart-cart", function (e) {
        var n = {
          component: t.e("module-mall-cart-cart").then(function () {
            return e(t("2082"));
          }.bind(null, t)).catch(t.oe),
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
      }), o.default.component("module-mall-writeoff-login", function (e) {
        var n = {
          component: t.e("module-mall-writeoff-login").then(function () {
            return e(t("35aa"));
          }.bind(null, t)).catch(t.oe),
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
      }), o.default.component("module-mall-writeoff-type-select", function (e) {
        var n = {
          component: t.e("module-mall-writeoff-type-select").then(function () {
            return e(t("b889"));
          }.bind(null, t)).catch(t.oe),
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
      }), o.default.component("module-mall-writeoff-home", function (e) {
        var n = {
          component: t.e("module-mall-writeoff-home").then(function () {
            return e(t("afae"));
          }.bind(null, t)).catch(t.oe),
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
      }), o.default.component("module-mall-writeoff-confirm", function (e) {
        var n = {
          component: Promise.all([t.e("module-lottery-win-record-detail-win-record-detail~module-lottery-writeoff-confirm~module-lottery-wr~345e859a"), t.e("module-mall-writeoff-confirm")]).then(function () {
            return e(t("aa62"));
          }.bind(null, t)).catch(t.oe),
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
      }), o.default.component("module-mall-writeoff-logdetail", function (e) {
        var n = {
          component: Promise.all([t.e("module-lottery-win-record-detail-win-record-detail~module-lottery-writeoff-confirm~module-lottery-wr~345e859a"), t.e("module-mall-writeoff-logdetail")]).then(function () {
            return e(t("3ce5"));
          }.bind(null, t)).catch(t.oe),
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
      }), o.default.component("module-mall-writeoff-success", function (e) {
        var n = {
          component: t.e("module-mall-writeoff-success").then(function () {
            return e(t("5d32"));
          }.bind(null, t)).catch(t.oe),
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
      }), o.default.component("module-mall-writeoff-loglist", function (e) {
        var n = {
          component: Promise.all([t.e("module-answer-answer-log-answer-detail~module-customer-fhtvn-no-rank-list~module-customer-fhtvn-rank~d5a9cb9a"), t.e("module-mall-writeoff-loglist")]).then(function () {
            return e(t("d42b"));
          }.bind(null, t)).catch(t.oe),
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
      }), o.default.component("module-mall-writeoff-order-list", function (e) {
        var n = {
          component: Promise.all([t.e("module-answer-answer-log-answer-detail~module-customer-fhtvn-no-rank-list~module-customer-fhtvn-rank~d5a9cb9a"), t.e("module-mall-writeoff-order-list")]).then(function () {
            return e(t("4ee5"));
          }.bind(null, t)).catch(t.oe),
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
      }), o.default.component("module-mall-writeoff-order-detail", function (e) {
        var n = {
          component: t.e("module-mall-writeoff-order-detail").then(function () {
            return e(t("e312"));
          }.bind(null, t)).catch(t.oe),
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
      }), o.default.component("module-mall-refund-apply", function (e) {
        var n = {
          component: Promise.all([t.e("module-info-pub-report-report~module-live-report-report~module-mall-business-apply~module-mall-comme~3b1de550"), t.e("module-mall-refund-apply~module-mall-refund-shoppingmall-apply"), t.e("module-mall-refund-apply")]).then(function () {
            return e(t("76cd"));
          }.bind(null, t)).catch(t.oe),
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
      }), o.default.component("module-mall-refund-shoppingmall-apply", function (e) {
        var n = {
          component: Promise.all([t.e("module-info-pub-report-report~module-live-report-report~module-mall-business-apply~module-mall-comme~3b1de550"), t.e("module-mall-refund-apply~module-mall-refund-shoppingmall-apply"), t.e("module-mall-refund-shoppingmall-apply")]).then(function () {
            return e(t("101a"));
          }.bind(null, t)).catch(t.oe),
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
      }), o.default.component("module-mall-refund-list", function (e) {
        var n = {
          component: Promise.all([t.e("module-answer-answer-log-answer-detail~module-customer-fhtvn-no-rank-list~module-customer-fhtvn-rank~d5a9cb9a"), t.e("module-mall-refund-list")]).then(function () {
            return e(t("3ad9"));
          }.bind(null, t)).catch(t.oe),
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
      }), o.default.component("module-mall-refund-detail", function (e) {
        var n = {
          component: t.e("module-mall-refund-detail").then(function () {
            return e(t("cc12"));
          }.bind(null, t)).catch(t.oe),
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
      }), o.default.component("module-mall-writeoff-coupon-home", function (e) {
        var n = {
          component: t.e("module-mall-writeoff-coupon-home").then(function () {
            return e(t("50e6"));
          }.bind(null, t)).catch(t.oe),
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
      }), o.default.component("module-mall-writeoff-coupon-confirm", function (e) {
        var n = {
          component: Promise.all([t.e("module-lottery-win-record-detail-win-record-detail~module-lottery-writeoff-confirm~module-lottery-wr~345e859a"), t.e("module-mall-writeoff-coupon-confirm")]).then(function () {
            return e(t("6f8e"));
          }.bind(null, t)).catch(t.oe),
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
      }), o.default.component("module-mall-writeoff-coupon-logdetail", function (e) {
        var n = {
          component: Promise.all([t.e("module-lottery-win-record-detail-win-record-detail~module-lottery-writeoff-confirm~module-lottery-wr~345e859a"), t.e("module-mall-writeoff-coupon-logdetail")]).then(function () {
            return e(t("d209"));
          }.bind(null, t)).catch(t.oe),
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
      }), o.default.component("module-mall-writeoff-coupon-success", function (e) {
        var n = {
          component: t.e("module-mall-writeoff-coupon-success").then(function () {
            return e(t("7007"));
          }.bind(null, t)).catch(t.oe),
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
      }), o.default.component("module-mall-writeoff-coupon-loglist", function (e) {
        var n = {
          component: Promise.all([t.e("module-answer-answer-log-answer-detail~module-customer-fhtvn-no-rank-list~module-customer-fhtvn-rank~d5a9cb9a"), t.e("module-mall-writeoff-coupon-loglist")]).then(function () {
            return e(t("1592"));
          }.bind(null, t)).catch(t.oe),
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
      }), o.default.component("module-mall-home-home-style-three", function (e) {
        var n = {
          component: Promise.all([t.e("module-activity-home-home~module-answer-home-home~module-answer-question-question~module-article-tas~d29a41ac"), t.e("module-activity-home-home~module-answer-home-home~module-answer-question-question~module-article-tas~be372959"), t.e("module-activity-home-home~module-answer-home-home~module-answer-question-question~module-article-tas~0b8a7094"), t.e("module-activity-home-home~module-answer-home-home~module-answer-question-question~module-article-tas~ef19aba9"), t.e("module-mall-home-home-style-three")]).then(function () {
            return e(t("81f1"));
          }.bind(null, t)).catch(t.oe),
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
      }), o.default.component("module-mall-home-home-style-four", function (e) {
        var n = {
          component: Promise.all([t.e("module-activity-home-home~module-answer-home-home~module-answer-question-question~module-article-tas~d29a41ac"), t.e("module-activity-home-home~module-answer-home-home~module-answer-question-question~module-article-tas~be372959"), t.e("module-activity-home-home~module-answer-home-home~module-answer-question-question~module-article-tas~0b8a7094"), t.e("module-activity-home-home~module-answer-home-home~module-answer-question-question~module-article-tas~ef19aba9"), t.e("module-mall-home-home-style-four")]).then(function () {
            return e(t("144a"));
          }.bind(null, t)).catch(t.oe),
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
      }), o.default.component("module-mall-business-business-home", function (e) {
        var n = {
          component: Promise.all([t.e("module-activity-home-home~module-answer-home-home~module-answer-question-question~module-article-tas~d29a41ac"), t.e("module-activity-home-home~module-answer-home-home~module-answer-question-question~module-article-tas~be372959"), t.e("module-activity-home-home~module-answer-home-home~module-answer-question-question~module-article-tas~0b8a7094"), t.e("module-activity-home-home~module-answer-home-home~module-answer-question-question~module-article-tas~ef19aba9"), t.e("module-mall-business-business-home")]).then(function () {
            return e(t("a123"));
          }.bind(null, t)).catch(t.oe),
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
      }), o.default.component("module-mall-business-business-home-style-three", function (e) {
        var n = {
          component: Promise.all([t.e("module-activity-home-home~module-answer-home-home~module-answer-question-question~module-article-tas~d29a41ac"), t.e("module-activity-home-home~module-answer-home-home~module-answer-question-question~module-article-tas~be372959"), t.e("module-activity-home-home~module-answer-home-home~module-answer-question-question~module-article-tas~0b8a7094"), t.e("module-activity-home-home~module-answer-home-home~module-answer-question-question~module-article-tas~ef19aba9"), t.e("module-mall-business-business-home-style-three")]).then(function () {
            return e(t("b3ff"));
          }.bind(null, t)).catch(t.oe),
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
      }), o.default.component("module-mall-business-business-detail", function (e) {
        var n = {
          component: Promise.all([t.e("module-activity-home-home~module-answer-home-home~module-answer-question-question~module-article-tas~d29a41ac"), t.e("module-activity-home-home~module-answer-home-home~module-answer-question-question~module-article-tas~be372959"), t.e("module-activity-home-home~module-answer-home-home~module-answer-question-question~module-article-tas~0b8a7094"), t.e("module-activity-home-home~module-answer-home-home~module-answer-question-question~module-article-tas~ef19aba9"), t.e("module-mall-business-business-detail")]).then(function () {
            return e(t("dfb3"));
          }.bind(null, t)).catch(t.oe),
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
      }), o.default.component("module-mall-user-user-center", function (e) {
        var n = {
          component: t.e("module-mall-user-user-center").then(function () {
            return e(t("569b8"));
          }.bind(null, t)).catch(t.oe),
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
      }), o.default.component("module-mall-user-user-center-style-four", function (e) {
        var n = {
          component: t.e("module-mall-user-user-center-style-four").then(function () {
            return e(t("8d42"));
          }.bind(null, t)).catch(t.oe),
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
      }), o.default.component("module-mall-bind-auth-bind", function (e) {
        var n = {
          component: t.e("module-mall-bind-auth-bind").then(function () {
            return e(t("87a1"));
          }.bind(null, t)).catch(t.oe),
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
      }), o.default.component("module-mall-bind-login", function (e) {
        var n = {
          component: t.e("module-mall-bind-login").then(function () {
            return e(t("09bf"));
          }.bind(null, t)).catch(t.oe),
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
      }), o.default.component("module-mall-zone-home", function (e) {
        var n = {
          component: Promise.all([t.e("module-answer-answer-log-answer-detail~module-customer-fhtvn-no-rank-list~module-customer-fhtvn-rank~d5a9cb9a"), t.e("module-mall-zone-home")]).then(function () {
            return e(t("1387"));
          }.bind(null, t)).catch(t.oe),
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
      }), o.default.component("module-mall-seckill-seckill", function (e) {
        var n = {
          component: Promise.all([t.e("module-activity-home-home~module-answer-home-home~module-answer-question-question~module-article-tas~d29a41ac"), t.e("module-activity-home-home~module-answer-home-home~module-answer-question-question~module-article-tas~be372959"), t.e("module-activity-home-home~module-answer-home-home~module-answer-question-question~module-article-tas~0b8a7094"), t.e("module-activity-home-home~module-answer-home-home~module-answer-question-question~module-article-tas~ef19aba9"), t.e("module-mall-seckill-seckill")]).then(function () {
            return e(t("bd6a"));
          }.bind(null, t)).catch(t.oe),
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
      }), o.default.component("module-mall-comment-comment", function (e) {
        var n = {
          component: Promise.all([t.e("module-ecnyform-activity-log-my-log-list~module-ecnyform-business-list~module-guess-log-pk-log~modul~87d9fdef"), t.e("module-mall-comment-comment")]).then(function () {
            return e(t("0c04"));
          }.bind(null, t)).catch(t.oe),
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
      }), o.default.component("module-mall-comment-comment-center", function (e) {
        var n = {
          component: Promise.all([t.e("module-answer-answer-log-answer-detail~module-customer-fhtvn-no-rank-list~module-customer-fhtvn-rank~d5a9cb9a"), t.e("module-ecnyform-activity-log-my-log-list~module-ecnyform-business-list~module-guess-log-pk-log~modul~87d9fdef"), t.e("module-mall-comment-comment-center")]).then(function () {
            return e(t("c2ff"));
          }.bind(null, t)).catch(t.oe),
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
      }), o.default.component("module-mall-comment-comment-create", function (e) {
        var n = {
          component: Promise.all([t.e("module-info-pub-report-report~module-live-report-report~module-mall-business-apply~module-mall-comme~3b1de550"), t.e("module-mall-comment-comment-create")]).then(function () {
            return e(t("d924"));
          }.bind(null, t)).catch(t.oe),
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
      }), o.default.component("module-mall-notify-wechat-notify", function (e) {
        var n = {
          component: Promise.all([t.e("module-activity-home-home~module-answer-home-home~module-answer-question-question~module-article-tas~d29a41ac"), t.e("module-activity-home-home~module-answer-home-home~module-answer-question-question~module-article-tas~be372959"), t.e("module-activity-home-home~module-answer-home-home~module-answer-question-question~module-article-tas~0b8a7094"), t.e("module-activity-home-home~module-answer-home-home~module-answer-question-question~module-article-tas~ef19aba9"), t.e("module-mall-notify-wechat-notify")]).then(function () {
            return e(t("f45b"));
          }.bind(null, t)).catch(t.oe),
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
      }), o.default.component("module-mall-hongbao-pay", function (e) {
        var n = {
          component: Promise.all([t.e("module-activity-home-home~module-answer-home-home~module-answer-question-question~module-article-tas~d29a41ac"), t.e("module-activity-home-home~module-answer-home-home~module-answer-question-question~module-article-tas~be372959"), t.e("module-activity-home-home~module-answer-home-home~module-answer-question-question~module-article-tas~0b8a7094"), t.e("module-activity-home-home~module-answer-home-home~module-answer-question-question~module-article-tas~ef19aba9"), t.e("module-mall-hongbao-pay")]).then(function () {
            return e(t("4695"));
          }.bind(null, t)).catch(t.oe),
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
      }), o.default.component("module-mall-hongbao-bill", function (e) {
        var n = {
          component: Promise.all([t.e("module-activity-home-home~module-answer-home-home~module-answer-question-question~module-article-tas~d29a41ac"), t.e("module-activity-home-home~module-answer-home-home~module-answer-question-question~module-article-tas~be372959"), t.e("module-activity-home-home~module-answer-home-home~module-answer-question-question~module-article-tas~0b8a7094"), t.e("module-activity-home-home~module-answer-home-home~module-answer-question-question~module-article-tas~ef19aba9"), t.e("module-mall-hongbao-bill")]).then(function () {
            return e(t("fafa"));
          }.bind(null, t)).catch(t.oe),
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
      }), o.default.component("module-mall-hongbao-pay-detail", function (e) {
        var n = {
          component: Promise.all([t.e("module-lottery-win-record-detail-win-record-detail~module-lottery-writeoff-confirm~module-lottery-wr~345e859a"), t.e("module-mall-hongbao-pay-detail")]).then(function () {
            return e(t("1c4e"));
          }.bind(null, t)).catch(t.oe),
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
      }), o.default.component("module-mall-writeoff-pay-detail", function (e) {
        var n = {
          component: t.e("module-mall-writeoff-pay-detail").then(function () {
            return e(t("b9cc"));
          }.bind(null, t)).catch(t.oe),
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
      }), o.default.component("module-mall-writeoff-receive-money", function (e) {
        var n = {
          component: Promise.all([t.e("module-lottery-win-record-detail-win-record-detail~module-lottery-writeoff-confirm~module-lottery-wr~345e859a"), t.e("module-mall-writeoff-receive-money")]).then(function () {
            return e(t("85ee"));
          }.bind(null, t)).catch(t.oe),
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
      }), o.default.component("module-mall-writeoff-bill", function (e) {
        var n = {
          component: Promise.all([t.e("module-activity-home-home~module-answer-home-home~module-answer-question-question~module-article-tas~d29a41ac"), t.e("module-activity-home-home~module-answer-home-home~module-answer-question-question~module-article-tas~be372959"), t.e("module-activity-home-home~module-answer-home-home~module-answer-question-question~module-article-tas~0b8a7094"), t.e("module-activity-home-home~module-answer-home-home~module-answer-question-question~module-article-tas~ef19aba9"), t.e("module-mall-writeoff-bill")]).then(function () {
            return e(t("a5d6"));
          }.bind(null, t)).catch(t.oe),
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
      }), o.default.component("module-mall-writeoff-manage-goods", function (e) {
        var n = {
          component: Promise.all([t.e("module-answer-answer-log-answer-detail~module-customer-fhtvn-no-rank-list~module-customer-fhtvn-rank~d5a9cb9a"), t.e("module-ecnyform-activity-log-my-log-list~module-ecnyform-business-list~module-guess-log-pk-log~modul~87d9fdef"), t.e("module-mall-writeoff-manage-goods")]).then(function () {
            return e(t("5747"));
          }.bind(null, t)).catch(t.oe),
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
      }), o.default.component("module-mall-writeoff-manage-order", function (e) {
        var n = {
          component: Promise.all([t.e("module-answer-answer-log-answer-detail~module-customer-fhtvn-no-rank-list~module-customer-fhtvn-rank~d5a9cb9a"), t.e("module-ecnyform-activity-log-my-log-list~module-ecnyform-business-list~module-guess-log-pk-log~modul~87d9fdef"), t.e("module-mall-writeoff-manage-order")]).then(function () {
            return e(t("e270"));
          }.bind(null, t)).catch(t.oe),
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
      }), o.default.component("module-mall-writeoff-manage-refund", function (e) {
        var n = {
          component: Promise.all([t.e("module-answer-answer-log-answer-detail~module-customer-fhtvn-no-rank-list~module-customer-fhtvn-rank~d5a9cb9a"), t.e("module-clockin-log-log~module-cms-news-detail~module-cms-video-detail~module-customer-fjdaily-clocki~654be37c"), t.e("module-ecnyform-activity-log-my-log-list~module-ecnyform-business-list~module-guess-log-pk-log~modul~87d9fdef"), t.e("module-mall-writeoff-manage-refund")]).then(function () {
            return e(t("d202"));
          }.bind(null, t)).catch(t.oe),
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
      }), o.default.component("module-mall-writeoff-manage-customer", function (e) {
        var n = {
          component: Promise.all([t.e("module-ecnyform-activity-log-my-log-list~module-ecnyform-business-list~module-guess-log-pk-log~modul~87d9fdef"), t.e("module-mall-writeoff-manage-customer")]).then(function () {
            return e(t("d9d0"));
          }.bind(null, t)).catch(t.oe),
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
      }), o.default.component("module-mall-writeoff-manage-offline", function (e) {
        var n = {
          component: Promise.all([t.e("module-ecnyform-activity-log-my-log-list~module-ecnyform-business-list~module-guess-log-pk-log~modul~87d9fdef"), t.e("module-mall-writeoff-manage-offline")]).then(function () {
            return e(t("710a"));
          }.bind(null, t)).catch(t.oe),
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
      }), o.default.component("module-mall-writeoff-manage-home", function (e) {
        var n = {
          component: t.e("module-mall-writeoff-manage-home").then(function () {
            return e(t("6df57"));
          }.bind(null, t)).catch(t.oe),
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
      }), o.default.component("module-mall-offline-pay", function (e) {
        var n = {
          component: Promise.all([t.e("module-activity-home-home~module-answer-home-home~module-answer-question-question~module-article-tas~d29a41ac"), t.e("module-activity-home-home~module-answer-home-home~module-answer-question-question~module-article-tas~be372959"), t.e("module-activity-home-home~module-answer-home-home~module-answer-question-question~module-article-tas~0b8a7094"), t.e("module-activity-home-home~module-answer-home-home~module-answer-question-question~module-article-tas~ef19aba9"), t.e("module-mall-offline-pay")]).then(function () {
            return e(t("3009"));
          }.bind(null, t)).catch(t.oe),
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
      }), o.default.component("module-mall-offline-pay-log-list", function (e) {
        var n = {
          component: t.e("module-mall-offline-pay-log-list").then(function () {
            return e(t("89c1"));
          }.bind(null, t)).catch(t.oe),
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
      }), o.default.component("module-mall-offline-pay-log-detail", function (e) {
        var n = {
          component: t.e("module-mall-offline-pay-log-detail").then(function () {
            return e(t("89ae"));
          }.bind(null, t)).catch(t.oe),
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
      }), o.default.component("module-mall-goods-auction-goods-list", function (e) {
        var n = {
          component: Promise.all([t.e("module-activity-home-home~module-answer-home-home~module-answer-question-question~module-article-tas~d29a41ac"), t.e("module-activity-home-home~module-answer-home-home~module-answer-question-question~module-article-tas~be372959"), t.e("module-activity-home-home~module-answer-home-home~module-answer-question-question~module-article-tas~0b8a7094"), t.e("module-activity-home-home~module-answer-home-home~module-answer-question-question~module-article-tas~ef19aba9"), t.e("module-mall-goods-auction-goods-list")]).then(function () {
            return e(t("3651"));
          }.bind(null, t)).catch(t.oe),
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
      }), o.default.component("module-mall-goods-auction-goods-detail", function (e) {
        var n = {
          component: Promise.all([t.e("module-mall-confirm-order-confirm-order~module-mall-confirm-order-confirm-order-cart~module-mall-goo~0e644f91"), t.e("module-mall-goods-auction-goods-detail~module-signup-activity-log-log-detail"), t.e("module-mall-goods-auction-goods-detail")]).then(function () {
            return e(t("9558"));
          }.bind(null, t)).catch(t.oe),
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
      }), o.default.component("module-mall-goods-auction-bidding-log", function (e) {
        var n = {
          component: t.e("module-mall-goods-auction-bidding-log").then(function () {
            return e(t("9b69"));
          }.bind(null, t)).catch(t.oe),
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
      }), o.default.component("module-mall-goods-auction-my-order-list", function (e) {
        var n = {
          component: Promise.all([t.e("module-answer-answer-log-answer-detail~module-customer-fhtvn-no-rank-list~module-customer-fhtvn-rank~d5a9cb9a"), t.e("module-mall-goods-auction-my-order-list")]).then(function () {
            return e(t("d06e"));
          }.bind(null, t)).catch(t.oe),
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
      }), o.default.component("module-member-level-info-level-info", function (e) {
        var n = {
          component: t.e("module-member-level-info-level-info").then(function () {
            return e(t("c4ec"));
          }.bind(null, t)).catch(t.oe),
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
      }), o.default.component("module-member-integral-detail-integral-detail", function (e) {
        var n = {
          component: Promise.all([t.e("module-answer-answer-log-answer-detail~module-customer-fhtvn-no-rank-list~module-customer-fhtvn-rank~d5a9cb9a"), t.e("module-member-integral-detail-integral-detail")]).then(function () {
            return e(t("da36"));
          }.bind(null, t)).catch(t.oe),
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
      }), o.default.component("module-member-integral-rank-integral-rank", function (e) {
        var n = {
          component: Promise.all([t.e("module-answer-answer-log-answer-detail~module-customer-fhtvn-no-rank-list~module-customer-fhtvn-rank~d5a9cb9a"), t.e("module-member-integral-rank-integral-rank")]).then(function () {
            return e(t("801f"));
          }.bind(null, t)).catch(t.oe),
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
      }), o.default.component("module-member-medal-medal", function (e) {
        var n = {
          component: t.e("module-member-medal-medal").then(function () {
            return e(t("a253"));
          }.bind(null, t)).catch(t.oe),
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
      }), o.default.component("module-member-medal-medal-detail", function (e) {
        var n = {
          component: t.e("module-member-medal-medal-detail").then(function () {
            return e(t("9640"));
          }.bind(null, t)).catch(t.oe),
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
      }), o.default.component("module-member-message-message-sort", function (e) {
        var n = {
          component: t.e("module-member-message-message-sort").then(function () {
            return e(t("22c3"));
          }.bind(null, t)).catch(t.oe),
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
      }), o.default.component("module-member-message-message", function (e) {
        var n = {
          component: Promise.all([t.e("module-answer-answer-log-answer-detail~module-customer-fhtvn-no-rank-list~module-customer-fhtvn-rank~d5a9cb9a"), t.e("module-member-message-message")]).then(function () {
            return e(t("4bc1"));
          }.bind(null, t)).catch(t.oe),
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
      }), o.default.component("module-member-welfare-welfare", function (e) {
        var n = {
          component: t.e("module-member-welfare-welfare").then(function () {
            return e(t("b441"));
          }.bind(null, t)).catch(t.oe),
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
      }), o.default.component("module-member-currency-rule-currency-rule", function (e) {
        var n = {
          component: t.e("module-member-currency-rule-currency-rule").then(function () {
            return e(t("9b04"));
          }.bind(null, t)).catch(t.oe),
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
      }), o.default.component("module-member-signin-signin-rule", function (e) {
        var n = {
          component: t.e("module-member-signin-signin-rule").then(function () {
            return e(t("d3d9"));
          }.bind(null, t)).catch(t.oe),
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
      }), o.default.component("module-member-cashout-cashout", function (e) {
        var n = {
          component: Promise.all([t.e("module-activity-home-home~module-answer-home-home~module-answer-question-question~module-article-tas~d29a41ac"), t.e("module-member-cashout-cashout")]).then(function () {
            return e(t("6f94"));
          }.bind(null, t)).catch(t.oe),
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
      }), o.default.component("module-member-cashout-cashout-log", function (e) {
        var n = {
          component: t.e("module-member-cashout-cashout-log").then(function () {
            return e(t("9aec"));
          }.bind(null, t)).catch(t.oe),
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
      }), o.default.component("module-member-bind-bind-wechat", function (e) {
        var n = {
          component: t.e("module-member-bind-bind-wechat").then(function () {
            return e(t("718c"));
          }.bind(null, t)).catch(t.oe),
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
      }), o.default.component("module-answer-home-home", function (e) {
        var n = {
          component: Promise.all([t.e("module-activity-home-home~module-answer-home-home~module-answer-question-question~module-article-tas~d29a41ac"), t.e("module-activity-home-home~module-answer-home-home~module-answer-question-question~module-article-tas~be372959"), t.e("module-activity-home-home~module-answer-home-home~module-answer-question-question~module-article-tas~0b8a7094"), t.e("module-activity-home-home~module-answer-home-home~module-answer-question-question~module-article-tas~ef19aba9"), t.e("module-answer-home-home")]).then(function () {
            return e(t("ca05"));
          }.bind(null, t)).catch(t.oe),
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
      }), o.default.component("module-answer-question-question", function (e) {
        var n = {
          component: Promise.all([t.e("module-activity-home-home~module-answer-home-home~module-answer-question-question~module-article-tas~d29a41ac"), t.e("module-activity-home-home~module-answer-home-home~module-answer-question-question~module-article-tas~be372959"), t.e("module-activity-home-home~module-answer-home-home~module-answer-question-question~module-article-tas~0b8a7094"), t.e("module-activity-home-home~module-answer-home-home~module-answer-question-question~module-article-tas~ef19aba9"), t.e("module-answer-question-question")]).then(function () {
            return e(t("061a"));
          }.bind(null, t)).catch(t.oe),
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
      }), o.default.component("module-answer-answer-log-answer-log", function (e) {
        var n = {
          component: t.e("module-answer-answer-log-answer-log").then(function () {
            return e(t("2927"));
          }.bind(null, t)).catch(t.oe),
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
      }), o.default.component("module-answer-answer-log-answer-detail", function (e) {
        var n = {
          component: Promise.all([t.e("module-answer-answer-log-answer-detail~module-customer-fhtvn-no-rank-list~module-customer-fhtvn-rank~d5a9cb9a"), t.e("module-answer-answer-log-answer-detail")]).then(function () {
            return e(t("6c43"));
          }.bind(null, t)).catch(t.oe),
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
      }), o.default.component("module-live-home-home", function (e) {
        var n = {
          component: Promise.all([t.e("module-answer-answer-log-answer-detail~module-customer-fhtvn-no-rank-list~module-customer-fhtvn-rank~d5a9cb9a"), t.e("module-live-home-home")]).then(function () {
            return e(t("116a"));
          }.bind(null, t)).catch(t.oe),
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
      }), o.default.component("module-live-detail-detail", function (e) {
        var n = {
          component: Promise.all([t.e("module-activity-home-home~module-answer-home-home~module-answer-question-question~module-article-tas~d29a41ac"), t.e("module-activity-home-home~module-answer-home-home~module-answer-question-question~module-article-tas~be372959"), t.e("module-activity-home-home~module-answer-home-home~module-answer-question-question~module-article-tas~0b8a7094"), t.e("module-answer-answer-log-answer-detail~module-customer-fhtvn-no-rank-list~module-customer-fhtvn-rank~d5a9cb9a"), t.e("module-live-detail-detail")]).then(function () {
            return e(t("c990"));
          }.bind(null, t)).catch(t.oe),
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
      }), o.default.component("module-live-report-report", function (e) {
        var n = {
          component: Promise.all([t.e("module-info-pub-report-report~module-live-report-report~module-mall-business-apply~module-mall-comme~3b1de550"), t.e("module-live-report-report")]).then(function () {
            return e(t("4d39"));
          }.bind(null, t)).catch(t.oe),
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
      }), o.default.component("module-activity-home-home", function (e) {
        var n = {
          component: Promise.all([t.e("module-activity-home-home~module-answer-home-home~module-answer-question-question~module-article-tas~d29a41ac"), t.e("module-activity-home-home~module-answer-home-home~module-answer-question-question~module-article-tas~be372959"), t.e("module-activity-home-home~module-answer-home-home~module-answer-question-question~module-article-tas~0b8a7094"), t.e("module-activity-home-home~module-answer-home-home~module-answer-question-question~module-article-tas~ef19aba9"), t.e("module-activity-home-home")]).then(function () {
            return e(t("f6f8"));
          }.bind(null, t)).catch(t.oe),
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
      }), o.default.component("module-vote-home-home", function (e) {
        var n = {
          component: Promise.all([t.e("module-activity-home-home~module-answer-home-home~module-answer-question-question~module-article-tas~d29a41ac"), t.e("module-activity-home-home~module-answer-home-home~module-answer-question-question~module-article-tas~be372959"), t.e("module-activity-home-home~module-answer-home-home~module-answer-question-question~module-article-tas~0b8a7094"), t.e("module-activity-home-home~module-answer-home-home~module-answer-question-question~module-article-tas~ef19aba9"), t.e("module-vote-home-home")]).then(function () {
            return e(t("b9ed"));
          }.bind(null, t)).catch(t.oe),
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
      }), o.default.component("module-vote-vote-detail-vote-detail", function (e) {
        var n = {
          component: Promise.all([t.e("module-activity-home-home~module-answer-home-home~module-answer-question-question~module-article-tas~d29a41ac"), t.e("module-activity-home-home~module-answer-home-home~module-answer-question-question~module-article-tas~be372959"), t.e("module-activity-home-home~module-answer-home-home~module-answer-question-question~module-article-tas~0b8a7094"), t.e("module-activity-home-home~module-answer-home-home~module-answer-question-question~module-article-tas~ef19aba9"), t.e("module-vote-vote-detail-vote-detail")]).then(function () {
            return e(t("3e66"));
          }.bind(null, t)).catch(t.oe),
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
      }), o.default.component("module-vote-result-result", function (e) {
        var n = {
          component: Promise.all([t.e("module-answer-answer-log-answer-detail~module-customer-fhtvn-no-rank-list~module-customer-fhtvn-rank~d5a9cb9a"), t.e("module-vote-result-result")]).then(function () {
            return e(t("274b"));
          }.bind(null, t)).catch(t.oe),
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
      }), o.default.component("module-vote-score-home", function (e) {
        var n = {
          component: Promise.all([t.e("module-activity-home-home~module-answer-home-home~module-answer-question-question~module-article-tas~d29a41ac"), t.e("module-activity-home-home~module-answer-home-home~module-answer-question-question~module-article-tas~be372959"), t.e("module-activity-home-home~module-answer-home-home~module-answer-question-question~module-article-tas~0b8a7094"), t.e("module-activity-home-home~module-answer-home-home~module-answer-question-question~module-article-tas~ef19aba9"), t.e("module-vote-score-home")]).then(function () {
            return e(t("c9b8"));
          }.bind(null, t)).catch(t.oe),
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
      }), o.default.component("module-vote-score-detail", function (e) {
        var n = {
          component: Promise.all([t.e("module-activity-home-home~module-answer-home-home~module-answer-question-question~module-article-tas~d29a41ac"), t.e("module-activity-home-home~module-answer-home-home~module-answer-question-question~module-article-tas~be372959"), t.e("module-activity-home-home~module-answer-home-home~module-answer-question-question~module-article-tas~0b8a7094"), t.e("module-activity-home-home~module-answer-home-home~module-answer-question-question~module-article-tas~ef19aba9"), t.e("module-vote-score-detail")]).then(function () {
            return e(t("f196"));
          }.bind(null, t)).catch(t.oe),
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
      }), o.default.component("module-lottery-home-home", function (e) {
        var n = {
          component: Promise.all([t.e("module-activity-home-home~module-answer-home-home~module-answer-question-question~module-article-tas~d29a41ac"), t.e("module-activity-home-home~module-answer-home-home~module-answer-question-question~module-article-tas~be372959"), t.e("module-activity-home-home~module-answer-home-home~module-answer-question-question~module-article-tas~0b8a7094"), t.e("module-activity-home-home~module-answer-home-home~module-answer-question-question~module-article-tas~ef19aba9"), t.e("module-lottery-home-home")]).then(function () {
            return e(t("7a6a"));
          }.bind(null, t)).catch(t.oe),
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
      }), o.default.component("module-lottery-win-record-win-record", function (e) {
        var n = {
          component: Promise.all([t.e("module-clockin-cert-get-cert~module-cms-news-detail~module-cms-video-detail~module-customer-fjdaily-~4f8830ac"), t.e("module-clockin-cert-get-cert~module-cms-news-detail~module-cms-video-detail~module-customer-fjdaily-~aa7fb99f"), t.e("module-clockin-cert-get-cert~module-customer-xmtv-flowers~module-guandan-rank-rank-detail~module-lot~3a7f0b09"), t.e("module-clockin-cert-get-cert~module-lottery-win-record-win-record"), t.e("module-lottery-win-record-win-record")]).then(function () {
            return e(t("d7f4"));
          }.bind(null, t)).catch(t.oe),
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
      }), o.default.component("module-lottery-win-record-detail-win-record-detail", function (e) {
        var n = {
          component: Promise.all([t.e("module-lottery-win-record-detail-win-record-detail~module-lottery-writeoff-confirm~module-lottery-wr~345e859a"), t.e("module-lottery-win-record-detail-win-record-detail")]).then(function () {
            return e(t("257b"));
          }.bind(null, t)).catch(t.oe),
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
      }), o.default.component("module-lottery-writeoff-home", function (e) {
        var n = {
          component: t.e("module-lottery-writeoff-home").then(function () {
            return e(t("ef5a"));
          }.bind(null, t)).catch(t.oe),
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
      }), o.default.component("module-lottery-writeoff-confirm", function (e) {
        var n = {
          component: Promise.all([t.e("module-lottery-win-record-detail-win-record-detail~module-lottery-writeoff-confirm~module-lottery-wr~345e859a"), t.e("module-lottery-writeoff-confirm")]).then(function () {
            return e(t("bcfe"));
          }.bind(null, t)).catch(t.oe),
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
      }), o.default.component("module-lottery-writeoff-logdetail", function (e) {
        var n = {
          component: Promise.all([t.e("module-lottery-win-record-detail-win-record-detail~module-lottery-writeoff-confirm~module-lottery-wr~345e859a"), t.e("module-lottery-writeoff-logdetail")]).then(function () {
            return e(t("5e98"));
          }.bind(null, t)).catch(t.oe),
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
      }), o.default.component("module-lottery-writeoff-success", function (e) {
        var n = {
          component: t.e("module-lottery-writeoff-success").then(function () {
            return e(t("56da"));
          }.bind(null, t)).catch(t.oe),
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
      }), o.default.component("module-lottery-writeoff-loglist", function (e) {
        var n = {
          component: Promise.all([t.e("module-answer-answer-log-answer-detail~module-customer-fhtvn-no-rank-list~module-customer-fhtvn-rank~d5a9cb9a"), t.e("module-lottery-writeoff-loglist")]).then(function () {
            return e(t("a440"));
          }.bind(null, t)).catch(t.oe),
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
      }), o.default.component("module-signup-home-home", function (e) {
        var n = {
          component: Promise.all([t.e("module-activity-home-home~module-answer-home-home~module-answer-question-question~module-article-tas~d29a41ac"), t.e("module-activity-home-home~module-answer-home-home~module-answer-question-question~module-article-tas~be372959"), t.e("module-activity-home-home~module-answer-home-home~module-answer-question-question~module-article-tas~0b8a7094"), t.e("module-activity-home-home~module-answer-home-home~module-answer-question-question~module-article-tas~ef19aba9"), t.e("module-signup-home-home")]).then(function () {
            return e(t("990c"));
          }.bind(null, t)).catch(t.oe),
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
      }), o.default.component("module-signup-home-update-home", function (e) {
        var n = {
          component: Promise.all([t.e("module-activity-home-home~module-answer-home-home~module-answer-question-question~module-article-tas~d29a41ac"), t.e("module-activity-home-home~module-answer-home-home~module-answer-question-question~module-article-tas~be372959"), t.e("module-activity-home-home~module-answer-home-home~module-answer-question-question~module-article-tas~0b8a7094"), t.e("module-activity-home-home~module-answer-home-home~module-answer-question-question~module-article-tas~ef19aba9"), t.e("module-signup-home-update-home")]).then(function () {
            return e(t("37ca9"));
          }.bind(null, t)).catch(t.oe),
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
      }), o.default.component("module-signup-activity-log-my-log-list", function (e) {
        var n = {
          component: t.e("module-signup-activity-log-my-log-list").then(function () {
            return e(t("e7af"));
          }.bind(null, t)).catch(t.oe),
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
      }), o.default.component("module-signup-activity-log-log-list", function (e) {
        var n = {
          component: t.e("module-signup-activity-log-log-list").then(function () {
            return e(t("3920"));
          }.bind(null, t)).catch(t.oe),
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
      }), o.default.component("module-signup-activity-log-log-detail", function (e) {
        var n = {
          component: Promise.all([t.e("module-lottery-win-record-detail-win-record-detail~module-lottery-writeoff-confirm~module-lottery-wr~345e859a"), t.e("module-clockin-cert-get-cert~module-cms-news-detail~module-cms-video-detail~module-customer-fjdaily-~aa7fb99f"), t.e("module-mall-goods-auction-goods-detail~module-signup-activity-log-log-detail"), t.e("module-signup-activity-log-log-detail")]).then(function () {
            return e(t("d782"));
          }.bind(null, t)).catch(t.oe),
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
      }), o.default.component("module-signup-writeoff-auth-bind", function (e) {
        var n = {
          component: t.e("module-signup-writeoff-auth-bind").then(function () {
            return e(t("e2cb"));
          }.bind(null, t)).catch(t.oe),
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
      }), o.default.component("module-signup-writeoff-confirm", function (e) {
        var n = {
          component: Promise.all([t.e("module-lottery-win-record-detail-win-record-detail~module-lottery-writeoff-confirm~module-lottery-wr~345e859a"), t.e("module-clockin-cert-get-cert~module-cms-news-detail~module-cms-video-detail~module-customer-fjdaily-~aa7fb99f"), t.e("module-signup-writeoff-confirm")]).then(function () {
            return e(t("4ba6"));
          }.bind(null, t)).catch(t.oe),
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
      }), o.default.component("module-signup-writeoff-writeoff-list", function (e) {
        var n = {
          component: t.e("module-signup-writeoff-writeoff-list").then(function () {
            return e(t("4b45"));
          }.bind(null, t)).catch(t.oe),
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
      }), o.default.component("module-supertopic-home-home", function (e) {
        var n = {
          component: Promise.all([t.e("module-activity-home-home~module-answer-home-home~module-answer-question-question~module-article-tas~d29a41ac"), t.e("module-activity-home-home~module-answer-home-home~module-answer-question-question~module-article-tas~be372959"), t.e("module-activity-home-home~module-answer-home-home~module-answer-question-question~module-article-tas~0b8a7094"), t.e("module-activity-home-home~module-answer-home-home~module-answer-question-question~module-article-tas~ef19aba9"), t.e("module-supertopic-home-home")]).then(function () {
            return e(t("5d03"));
          }.bind(null, t)).catch(t.oe),
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
      }), o.default.component("module-supertopic-detail-detail", function (e) {
        var n = {
          component: Promise.all([t.e("module-activity-home-home~module-answer-home-home~module-answer-question-question~module-article-tas~d29a41ac"), t.e("module-activity-home-home~module-answer-home-home~module-answer-question-question~module-article-tas~be372959"), t.e("module-activity-home-home~module-answer-home-home~module-answer-question-question~module-article-tas~0b8a7094"), t.e("module-activity-home-home~module-answer-home-home~module-answer-question-question~module-article-tas~ef19aba9"), t.e("module-supertopic-detail-detail")]).then(function () {
            return e(t("2b1e"));
          }.bind(null, t)).catch(t.oe),
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
      }), o.default.component("module-supertopic-detail-mylog", function (e) {
        var n = {
          component: Promise.all([t.e("module-clockin-log-log~module-cms-news-detail~module-cms-video-detail~module-customer-fjdaily-clocki~654be37c"), t.e("module-supertopic-detail-mylog~module-supertopic-me-me"), t.e("module-supertopic-detail-mylog")]).then(function () {
            return e(t("291c"));
          }.bind(null, t)).catch(t.oe),
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
      }), o.default.component("module-supertopic-me-me", function (e) {
        var n = {
          component: Promise.all([t.e("module-clockin-cert-get-cert~module-cms-news-detail~module-cms-video-detail~module-customer-fjdaily-~aa7fb99f"), t.e("module-supertopic-detail-mylog~module-supertopic-me-me"), t.e("module-supertopic-me-me")]).then(function () {
            return e(t("1621"));
          }.bind(null, t)).catch(t.oe),
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
      }), o.default.component("module-checkers-home-home", function (e) {
        var n = {
          component: Promise.all([t.e("module-activity-home-home~module-answer-home-home~module-answer-question-question~module-article-tas~d29a41ac"), t.e("module-activity-home-home~module-answer-home-home~module-answer-question-question~module-article-tas~be372959"), t.e("module-activity-home-home~module-answer-home-home~module-answer-question-question~module-article-tas~0b8a7094"), t.e("module-activity-home-home~module-answer-home-home~module-answer-question-question~module-article-tas~ef19aba9"), t.e("module-checkers-home-home")]).then(function () {
            return e(t("0bab"));
          }.bind(null, t)).catch(t.oe),
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
      }), o.default.component("module-help-home-home", function (e) {
        var n = {
          component: Promise.all([t.e("module-activity-home-home~module-answer-home-home~module-answer-question-question~module-article-tas~d29a41ac"), t.e("module-activity-home-home~module-answer-home-home~module-answer-question-question~module-article-tas~be372959"), t.e("module-activity-home-home~module-answer-home-home~module-answer-question-question~module-article-tas~0b8a7094"), t.e("module-activity-home-home~module-answer-home-home~module-answer-question-question~module-article-tas~ef19aba9"), t.e("module-help-home-home")]).then(function () {
            return e(t("e2e0"));
          }.bind(null, t)).catch(t.oe),
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
      }), o.default.component("module-poetry-home-home", function (e) {
        var n = {
          component: Promise.all([t.e("module-activity-home-home~module-answer-home-home~module-answer-question-question~module-article-tas~d29a41ac"), t.e("module-activity-home-home~module-answer-home-home~module-answer-question-question~module-article-tas~be372959"), t.e("module-activity-home-home~module-answer-home-home~module-answer-question-question~module-article-tas~0b8a7094"), t.e("module-activity-home-home~module-answer-home-home~module-answer-question-question~module-article-tas~ef19aba9"), t.e("module-poetry-home-home")]).then(function () {
            return e(t("6466"));
          }.bind(null, t)).catch(t.oe),
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
      }), o.default.component("module-poetry-question-question", function (e) {
        var n = {
          component: Promise.all([t.e("module-activity-home-home~module-answer-home-home~module-answer-question-question~module-article-tas~d29a41ac"), t.e("module-activity-home-home~module-answer-home-home~module-answer-question-question~module-article-tas~be372959"), t.e("module-activity-home-home~module-answer-home-home~module-answer-question-question~module-article-tas~0b8a7094"), t.e("module-activity-home-home~module-answer-home-home~module-answer-question-question~module-article-tas~ef19aba9"), t.e("module-poetry-question-question")]).then(function () {
            return e(t("1c8c"));
          }.bind(null, t)).catch(t.oe),
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
      }), o.default.component("module-poetry-rank-list-rank-list", function (e) {
        var n = {
          component: t.e("module-poetry-rank-list-rank-list").then(function () {
            return e(t("0be0"));
          }.bind(null, t)).catch(t.oe),
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
      }), o.default.component("module-poetry-question-question-two", function (e) {
        var n = {
          component: Promise.all([t.e("module-activity-home-home~module-answer-home-home~module-answer-question-question~module-article-tas~d29a41ac"), t.e("module-activity-home-home~module-answer-home-home~module-answer-question-question~module-article-tas~be372959"), t.e("module-activity-home-home~module-answer-home-home~module-answer-question-question~module-article-tas~0b8a7094"), t.e("module-activity-home-home~module-answer-home-home~module-answer-question-question~module-article-tas~ef19aba9"), t.e("module-poetry-question-question-two")]).then(function () {
            return e(t("4d2a"));
          }.bind(null, t)).catch(t.oe),
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
      }), o.default.component("module-poetry-home-home-two", function (e) {
        var n = {
          component: Promise.all([t.e("module-activity-home-home~module-answer-home-home~module-answer-question-question~module-article-tas~d29a41ac"), t.e("module-activity-home-home~module-answer-home-home~module-answer-question-question~module-article-tas~be372959"), t.e("module-activity-home-home~module-answer-home-home~module-answer-question-question~module-article-tas~0b8a7094"), t.e("module-activity-home-home~module-answer-home-home~module-answer-question-question~module-article-tas~ef19aba9"), t.e("module-poetry-home-home-two")]).then(function () {
            return e(t("7708"));
          }.bind(null, t)).catch(t.oe),
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
      }), o.default.component("module-cms-news-detail", function (e) {
        var n = {
          component: Promise.all([t.e("module-activity-home-home~module-answer-home-home~module-answer-question-question~module-article-tas~d29a41ac"), t.e("module-clockin-cert-get-cert~module-cms-news-detail~module-cms-video-detail~module-customer-fjdaily-~4f8830ac"), t.e("module-clockin-log-log~module-cms-news-detail~module-cms-video-detail~module-customer-fjdaily-clocki~654be37c"), t.e("module-clockin-cert-get-cert~module-cms-news-detail~module-cms-video-detail~module-customer-fjdaily-~aa7fb99f"), t.e("module-cms-news-detail")]).then(function () {
            return e(t("7a34"));
          }.bind(null, t)).catch(t.oe),
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
      }), o.default.component("module-cms-atlas-detail", function (e) {
        var n = {
          component: t.e("module-cms-atlas-detail").then(function () {
            return e(t("da27"));
          }.bind(null, t)).catch(t.oe),
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
      }), o.default.component("module-cms-video-detail", function (e) {
        var n = {
          component: Promise.all([t.e("module-activity-home-home~module-answer-home-home~module-answer-question-question~module-article-tas~d29a41ac"), t.e("module-clockin-cert-get-cert~module-cms-news-detail~module-cms-video-detail~module-customer-fjdaily-~4f8830ac"), t.e("module-clockin-log-log~module-cms-news-detail~module-cms-video-detail~module-customer-fjdaily-clocki~654be37c"), t.e("module-clockin-cert-get-cert~module-cms-news-detail~module-cms-video-detail~module-customer-fjdaily-~aa7fb99f"), t.e("module-cms-video-detail")]).then(function () {
            return e(t("b066"));
          }.bind(null, t)).catch(t.oe),
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
      }), o.default.component("module-page-home-home", function (e) {
        var n = {
          component: Promise.all([t.e("module-activity-home-home~module-answer-home-home~module-answer-question-question~module-article-tas~d29a41ac"), t.e("module-activity-home-home~module-answer-home-home~module-answer-question-question~module-article-tas~be372959"), t.e("module-activity-home-home~module-answer-home-home~module-answer-question-question~module-article-tas~0b8a7094"), t.e("module-activity-home-home~module-answer-home-home~module-answer-question-question~module-article-tas~ef19aba9"), t.e("module-page-home-home")]).then(function () {
            return e(t("6a90"));
          }.bind(null, t)).catch(t.oe),
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
      }), o.default.component("module-invite-home-home", function (e) {
        var n = {
          component: Promise.all([t.e("module-activity-home-home~module-answer-home-home~module-answer-question-question~module-article-tas~d29a41ac"), t.e("module-activity-home-home~module-answer-home-home~module-answer-question-question~module-article-tas~be372959"), t.e("module-activity-home-home~module-answer-home-home~module-answer-question-question~module-article-tas~0b8a7094"), t.e("module-activity-home-home~module-answer-home-home~module-answer-question-question~module-article-tas~ef19aba9"), t.e("module-invite-home-home")]).then(function () {
            return e(t("b8d6"));
          }.bind(null, t)).catch(t.oe),
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
      }), o.default.component("module-invite-invite-invite", function (e) {
        var n = {
          component: Promise.all([t.e("module-activity-home-home~module-answer-home-home~module-answer-question-question~module-article-tas~d29a41ac"), t.e("module-activity-home-home~module-answer-home-home~module-answer-question-question~module-article-tas~be372959"), t.e("module-activity-home-home~module-answer-home-home~module-answer-question-question~module-article-tas~0b8a7094"), t.e("module-activity-home-home~module-answer-home-home~module-answer-question-question~module-article-tas~ef19aba9"), t.e("module-invite-invite-invite")]).then(function () {
            return e(t("609f"));
          }.bind(null, t)).catch(t.oe),
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
      }), o.default.component("module-footmark-home-home", function (e) {
        var n = {
          component: Promise.all([t.e("module-activity-home-home~module-answer-home-home~module-answer-question-question~module-article-tas~d29a41ac"), t.e("module-activity-home-home~module-answer-home-home~module-answer-question-question~module-article-tas~be372959"), t.e("module-activity-home-home~module-answer-home-home~module-answer-question-question~module-article-tas~0b8a7094"), t.e("module-activity-home-home~module-answer-home-home~module-answer-question-question~module-article-tas~ef19aba9"), t.e("module-footmark-home-home")]).then(function () {
            return e(t("00ab"));
          }.bind(null, t)).catch(t.oe),
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
      }), o.default.component("module-footmark-log-detail-log-detail", function (e) {
        var n = {
          component: t.e("module-footmark-log-detail-log-detail").then(function () {
            return e(t("13e1"));
          }.bind(null, t)).catch(t.oe),
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
      }), o.default.component("module-signin-home-home", function (e) {
        var n = {
          component: Promise.all([t.e("module-activity-home-home~module-answer-home-home~module-answer-question-question~module-article-tas~d29a41ac"), t.e("module-activity-home-home~module-answer-home-home~module-answer-question-question~module-article-tas~be372959"), t.e("module-activity-home-home~module-answer-home-home~module-answer-question-question~module-article-tas~0b8a7094"), t.e("module-activity-home-home~module-answer-home-home~module-answer-question-question~module-article-tas~ef19aba9"), t.e("module-signin-home-home")]).then(function () {
            return e(t("9554"));
          }.bind(null, t)).catch(t.oe),
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
      }), o.default.component("module-wish-home-home", function (e) {
        var n = {
          component: Promise.all([t.e("module-activity-home-home~module-answer-home-home~module-answer-question-question~module-article-tas~d29a41ac"), t.e("module-activity-home-home~module-answer-home-home~module-answer-question-question~module-article-tas~be372959"), t.e("module-activity-home-home~module-answer-home-home~module-answer-question-question~module-article-tas~0b8a7094"), t.e("module-activity-home-home~module-answer-home-home~module-answer-question-question~module-article-tas~ef19aba9"), t.e("module-wish-home-home")]).then(function () {
            return e(t("0ea1"));
          }.bind(null, t)).catch(t.oe),
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
      }), o.default.component("module-clockin-home-home", function (e) {
        var n = {
          component: Promise.all([t.e("module-activity-home-home~module-answer-home-home~module-answer-question-question~module-article-tas~d29a41ac"), t.e("module-activity-home-home~module-answer-home-home~module-answer-question-question~module-article-tas~be372959"), t.e("module-activity-home-home~module-answer-home-home~module-answer-question-question~module-article-tas~0b8a7094"), t.e("module-activity-home-home~module-answer-home-home~module-answer-question-question~module-article-tas~ef19aba9"), t.e("module-clockin-home-home")]).then(function () {
            return e(t("6ce8"));
          }.bind(null, t)).catch(t.oe),
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
      }), o.default.component("module-clockin-member-join-list", function (e) {
        var n = {
          component: t.e("module-clockin-member-join-list").then(function () {
            return e(t("d57e"));
          }.bind(null, t)).catch(t.oe),
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
      }), o.default.component("module-clockin-member-rank-list", function (e) {
        var n = {
          component: t.e("module-clockin-member-rank-list").then(function () {
            return e(t("f5ab"));
          }.bind(null, t)).catch(t.oe),
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
      }), o.default.component("module-clockin-log-log", function (e) {
        var n = {
          component: Promise.all([t.e("module-clockin-log-log~module-cms-news-detail~module-cms-video-detail~module-customer-fjdaily-clocki~654be37c"), t.e("module-clockin-log-log")]).then(function () {
            return e(t("91e3"));
          }.bind(null, t)).catch(t.oe),
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
      }), o.default.component("module-clockin-cert-get-cert", function (e) {
        var n = {
          component: Promise.all([t.e("module-clockin-cert-get-cert~module-cms-news-detail~module-cms-video-detail~module-customer-fjdaily-~4f8830ac"), t.e("module-clockin-cert-get-cert~module-cms-news-detail~module-cms-video-detail~module-customer-fjdaily-~aa7fb99f"), t.e("module-clockin-cert-get-cert~module-customer-xmtv-flowers~module-guandan-rank-rank-detail~module-lot~3a7f0b09"), t.e("module-clockin-cert-get-cert~module-lottery-win-record-win-record"), t.e("module-clockin-cert-get-cert")]).then(function () {
            return e(t("3cae"));
          }.bind(null, t)).catch(t.oe),
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
      }), o.default.component("module-study-home-home", function (e) {
        var n = {
          component: Promise.all([t.e("module-activity-home-home~module-answer-home-home~module-answer-question-question~module-article-tas~d29a41ac"), t.e("module-activity-home-home~module-answer-home-home~module-answer-question-question~module-article-tas~be372959"), t.e("module-activity-home-home~module-answer-home-home~module-answer-question-question~module-article-tas~0b8a7094"), t.e("module-activity-home-home~module-answer-home-home~module-answer-question-question~module-article-tas~ef19aba9"), t.e("module-study-home-home")]).then(function () {
            return e(t("6080"));
          }.bind(null, t)).catch(t.oe),
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
      }), o.default.component("module-study-pass-detail-pass-detail", function (e) {
        var n = {
          component: Promise.all([t.e("module-activity-home-home~module-answer-home-home~module-answer-question-question~module-article-tas~d29a41ac"), t.e("module-activity-home-home~module-answer-home-home~module-answer-question-question~module-article-tas~be372959"), t.e("module-activity-home-home~module-answer-home-home~module-answer-question-question~module-article-tas~0b8a7094"), t.e("module-activity-home-home~module-answer-home-home~module-answer-question-question~module-article-tas~ef19aba9"), t.e("module-study-pass-detail-pass-detail")]).then(function () {
            return e(t("2c86"));
          }.bind(null, t)).catch(t.oe),
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
      }), o.default.component("module-guess-home-home", function (e) {
        var n = {
          component: Promise.all([t.e("module-activity-home-home~module-answer-home-home~module-answer-question-question~module-article-tas~d29a41ac"), t.e("module-activity-home-home~module-answer-home-home~module-answer-question-question~module-article-tas~be372959"), t.e("module-activity-home-home~module-answer-home-home~module-answer-question-question~module-article-tas~0b8a7094"), t.e("module-activity-home-home~module-answer-home-home~module-answer-question-question~module-article-tas~ef19aba9"), t.e("module-guess-home-home")]).then(function () {
            return e(t("52d8"));
          }.bind(null, t)).catch(t.oe),
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
      }), o.default.component("module-guess-log-activity-log", function (e) {
        var n = {
          component: t.e("module-guess-log-activity-log").then(function () {
            return e(t("85e7"));
          }.bind(null, t)).catch(t.oe),
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
      }), o.default.component("module-guess-home-pk", function (e) {
        var n = {
          component: Promise.all([t.e("module-activity-home-home~module-answer-home-home~module-answer-question-question~module-article-tas~d29a41ac"), t.e("module-activity-home-home~module-answer-home-home~module-answer-question-question~module-article-tas~be372959"), t.e("module-activity-home-home~module-answer-home-home~module-answer-question-question~module-article-tas~0b8a7094"), t.e("module-activity-home-home~module-answer-home-home~module-answer-question-question~module-article-tas~ef19aba9"), t.e("module-guess-home-pk")]).then(function () {
            return e(t("6a64"));
          }.bind(null, t)).catch(t.oe),
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
      }), o.default.component("module-guess-log-pk-log", function (e) {
        var n = {
          component: Promise.all([t.e("module-ecnyform-activity-log-my-log-list~module-ecnyform-business-list~module-guess-log-pk-log~modul~87d9fdef"), t.e("module-guess-log-pk-log")]).then(function () {
            return e(t("cbe1"));
          }.bind(null, t)).catch(t.oe),
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
      }), o.default.component("module-photo-home-home", function (e) {
        var n = {
          component: Promise.all([t.e("module-activity-home-home~module-answer-home-home~module-answer-question-question~module-article-tas~d29a41ac"), t.e("module-activity-home-home~module-answer-home-home~module-answer-question-question~module-article-tas~be372959"), t.e("module-activity-home-home~module-answer-home-home~module-answer-question-question~module-article-tas~0b8a7094"), t.e("module-activity-home-home~module-answer-home-home~module-answer-question-question~module-article-tas~ef19aba9"), t.e("module-photo-home-home")]).then(function () {
            return e(t("fcf9"));
          }.bind(null, t)).catch(t.oe),
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
      }), o.default.component("module-ecnyform-home-home", function (e) {
        var n = {
          component: Promise.all([t.e("module-activity-home-home~module-answer-home-home~module-answer-question-question~module-article-tas~d29a41ac"), t.e("module-activity-home-home~module-answer-home-home~module-answer-question-question~module-article-tas~be372959"), t.e("module-activity-home-home~module-answer-home-home~module-answer-question-question~module-article-tas~0b8a7094"), t.e("module-activity-home-home~module-answer-home-home~module-answer-question-question~module-article-tas~ef19aba9"), t.e("module-ecnyform-home-home")]).then(function () {
            return e(t("6d86"));
          }.bind(null, t)).catch(t.oe),
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
      }), o.default.component("module-ecnyform-business-list", function (e) {
        var n = {
          component: Promise.all([t.e("module-ecnyform-activity-log-my-log-list~module-ecnyform-business-list~module-guess-log-pk-log~modul~87d9fdef"), t.e("module-ecnyform-business-list")]).then(function () {
            return e(t("2d2f"));
          }.bind(null, t)).catch(t.oe),
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
      }), o.default.component("module-ecnyform-activity-log-my-log-list", function (e) {
        var n = {
          component: Promise.all([t.e("module-ecnyform-activity-log-my-log-list~module-ecnyform-business-list~module-guess-log-pk-log~modul~87d9fdef"), t.e("module-ecnyform-activity-log-my-log-list")]).then(function () {
            return e(t("4f23"));
          }.bind(null, t)).catch(t.oe),
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
      }), o.default.component("module-screen-interact-home-home", function (e) {
        var n = {
          component: Promise.all([t.e("module-activity-home-home~module-answer-home-home~module-answer-question-question~module-article-tas~d29a41ac"), t.e("module-activity-home-home~module-answer-home-home~module-answer-question-question~module-article-tas~be372959"), t.e("module-clockin-cert-get-cert~module-cms-news-detail~module-cms-video-detail~module-customer-fjdaily-~4f8830ac"), t.e("module-clockin-cert-get-cert~module-cms-news-detail~module-cms-video-detail~module-customer-fjdaily-~aa7fb99f"), t.e("module-screen-interact-home-home")]).then(function () {
            return e(t("9c17"));
          }.bind(null, t)).catch(t.oe),
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
      }), o.default.component("module-screen-interact-win-record-detail-win-record-detail", function (e) {
        var n = {
          component: t.e("module-screen-interact-win-record-detail-win-record-detail").then(function () {
            return e(t("27ca"));
          }.bind(null, t)).catch(t.oe),
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
      }), o.default.component("module-ai-face-fusion-home-home", function (e) {
        var n = {
          component: t.e("module-ai-face-fusion-home-home").then(function () {
            return e(t("3c5dd"));
          }.bind(null, t)).catch(t.oe),
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
      }), o.default.component("module-farm-home-home", function (e) {
        var n = {
          component: Promise.all([t.e("module-activity-home-home~module-answer-home-home~module-answer-question-question~module-article-tas~d29a41ac"), t.e("module-activity-home-home~module-answer-home-home~module-answer-question-question~module-article-tas~be372959"), t.e("module-activity-home-home~module-answer-home-home~module-answer-question-question~module-article-tas~0b8a7094"), t.e("module-activity-home-home~module-answer-home-home~module-answer-question-question~module-article-tas~ef19aba9"), t.e("module-farm-home-home")]).then(function () {
            return e(t("4110e"));
          }.bind(null, t)).catch(t.oe),
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
      }), o.default.component("module-farm-game-game", function (e) {
        var n = {
          component: Promise.all([t.e("module-activity-home-home~module-answer-home-home~module-answer-question-question~module-article-tas~d29a41ac"), t.e("module-answer-answer-log-answer-detail~module-customer-fhtvn-no-rank-list~module-customer-fhtvn-rank~d5a9cb9a"), t.e("module-farm-game-game~module-farm-goods-exchange-goods-exchange~module-farm-goods-list-goods-list"), t.e("module-booking-lottery-task-task~module-farm-game-game"), t.e("module-farm-game-game")]).then(function () {
            return e(t("7238"));
          }.bind(null, t)).catch(t.oe),
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
      }), o.default.component("module-farm-goods-list-goods-list", function (e) {
        var n = {
          component: Promise.all([t.e("module-farm-game-game~module-farm-goods-exchange-goods-exchange~module-farm-goods-list-goods-list"), t.e("module-farm-goods-exchange-goods-exchange~module-farm-goods-list-goods-list"), t.e("module-farm-goods-list-goods-list")]).then(function () {
            return e(t("e772"));
          }.bind(null, t)).catch(t.oe),
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
      }), o.default.component("module-farm-goods-exchange-goods-exchange", function (e) {
        var n = {
          component: Promise.all([t.e("module-clockin-cert-get-cert~module-cms-news-detail~module-cms-video-detail~module-customer-fjdaily-~4f8830ac"), t.e("module-farm-game-game~module-farm-goods-exchange-goods-exchange~module-farm-goods-list-goods-list"), t.e("module-farm-goods-exchange-goods-exchange~module-farm-goods-list-goods-list"), t.e("module-farm-goods-exchange-goods-exchange")]).then(function () {
            return e(t("a833"));
          }.bind(null, t)).catch(t.oe),
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
      }), o.default.component("module-farm-kinds-home-home", function (e) {
        var n = {
          component: Promise.all([t.e("module-activity-home-home~module-answer-home-home~module-answer-question-question~module-article-tas~d29a41ac"), t.e("module-activity-home-home~module-answer-home-home~module-answer-question-question~module-article-tas~be372959"), t.e("module-activity-home-home~module-answer-home-home~module-answer-question-question~module-article-tas~0b8a7094"), t.e("module-activity-home-home~module-answer-home-home~module-answer-question-question~module-article-tas~ef19aba9"), t.e("module-farm-kinds-home-home")]).then(function () {
            return e(t("fef0"));
          }.bind(null, t)).catch(t.oe),
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
      }), o.default.component("module-farm-kinds-goods-list-goods-list", function (e) {
        var n = {
          component: Promise.all([t.e("module-farm-kinds-goods-exchange-goods-exchange~module-farm-kinds-goods-list-goods-list"), t.e("module-farm-kinds-goods-list-goods-list")]).then(function () {
            return e(t("9b51"));
          }.bind(null, t)).catch(t.oe),
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
      }), o.default.component("module-farm-kinds-goods-exchange-goods-exchange", function (e) {
        var n = {
          component: Promise.all([t.e("module-clockin-cert-get-cert~module-cms-news-detail~module-cms-video-detail~module-customer-fjdaily-~4f8830ac"), t.e("module-farm-kinds-goods-exchange-goods-exchange~module-farm-kinds-goods-list-goods-list"), t.e("module-farm-kinds-goods-exchange-goods-exchange")]).then(function () {
            return e(t("786b"));
          }.bind(null, t)).catch(t.oe),
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
      }), o.default.component("module-word-home-home", function (e) {
        var n = {
          component: Promise.all([t.e("module-activity-home-home~module-answer-home-home~module-answer-question-question~module-article-tas~d29a41ac"), t.e("module-activity-home-home~module-answer-home-home~module-answer-question-question~module-article-tas~be372959"), t.e("module-activity-home-home~module-answer-home-home~module-answer-question-question~module-article-tas~0b8a7094"), t.e("module-activity-home-home~module-answer-home-home~module-answer-question-question~module-article-tas~ef19aba9"), t.e("module-word-home-home")]).then(function () {
            return e(t("a824"));
          }.bind(null, t)).catch(t.oe),
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
      }), o.default.component("module-word-game-game", function (e) {
        var n = {
          component: Promise.all([t.e("module-activity-home-home~module-answer-home-home~module-answer-question-question~module-article-tas~d29a41ac"), t.e("module-clockin-cert-get-cert~module-cms-news-detail~module-cms-video-detail~module-customer-fjdaily-~4f8830ac"), t.e("module-clockin-log-log~module-cms-news-detail~module-cms-video-detail~module-customer-fjdaily-clocki~654be37c"), t.e("module-clockin-cert-get-cert~module-cms-news-detail~module-cms-video-detail~module-customer-fjdaily-~aa7fb99f"), t.e("module-word-game-game")]).then(function () {
            return e(t("cbe9"));
          }.bind(null, t)).catch(t.oe),
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
      }), o.default.component("module-article-task-home-home", function (e) {
        var n = {
          component: Promise.all([t.e("module-activity-home-home~module-answer-home-home~module-answer-question-question~module-article-tas~d29a41ac"), t.e("module-activity-home-home~module-answer-home-home~module-answer-question-question~module-article-tas~be372959"), t.e("module-activity-home-home~module-answer-home-home~module-answer-question-question~module-article-tas~0b8a7094"), t.e("module-activity-home-home~module-answer-home-home~module-answer-question-question~module-article-tas~ef19aba9"), t.e("module-article-task-home-home")]).then(function () {
            return e(t("aa4a"));
          }.bind(null, t)).catch(t.oe),
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
      }), o.default.component("module-article-task-single-single-task", function (e) {
        var n = {
          component: t.e("module-article-task-single-single-task").then(function () {
            return e(t("2c86b"));
          }.bind(null, t)).catch(t.oe),
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
      }), o.default.component("module-venue-clockin-home-home", function (e) {
        var n = {
          component: Promise.all([t.e("module-activity-home-home~module-answer-home-home~module-answer-question-question~module-article-tas~d29a41ac"), t.e("module-activity-home-home~module-answer-home-home~module-answer-question-question~module-article-tas~be372959"), t.e("module-activity-home-home~module-answer-home-home~module-answer-question-question~module-article-tas~0b8a7094"), t.e("module-activity-home-home~module-answer-home-home~module-answer-question-question~module-article-tas~ef19aba9"), t.e("module-venue-clockin-home-home")]).then(function () {
            return e(t("462dd"));
          }.bind(null, t)).catch(t.oe),
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
      }), o.default.component("module-venue-clockin-detail-detail", function (e) {
        var n = {
          component: Promise.all([t.e("module-activity-home-home~module-answer-home-home~module-answer-question-question~module-article-tas~d29a41ac"), t.e("module-clockin-cert-get-cert~module-cms-news-detail~module-cms-video-detail~module-customer-fjdaily-~4f8830ac"), t.e("module-clockin-log-log~module-cms-news-detail~module-cms-video-detail~module-customer-fjdaily-clocki~654be37c"), t.e("module-clockin-cert-get-cert~module-cms-news-detail~module-cms-video-detail~module-customer-fjdaily-~aa7fb99f"), t.e("module-venue-clockin-detail-detail")]).then(function () {
            return e(t("e13f"));
          }.bind(null, t)).catch(t.oe),
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
      }), o.default.component("module-venue-clockin-group-group-list", function (e) {
        var n = {
          component: Promise.all([t.e("module-activity-home-home~module-answer-home-home~module-answer-question-question~module-article-tas~d29a41ac"), t.e("module-activity-home-home~module-answer-home-home~module-answer-question-question~module-article-tas~be372959"), t.e("module-activity-home-home~module-answer-home-home~module-answer-question-question~module-article-tas~0b8a7094"), t.e("module-activity-home-home~module-answer-home-home~module-answer-question-question~module-article-tas~ef19aba9"), t.e("module-venue-clockin-group-group-list")]).then(function () {
            return e(t("3a56"));
          }.bind(null, t)).catch(t.oe),
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
      }), o.default.component("module-booking-lottery-home-home", function (e) {
        var n = {
          component: Promise.all([t.e("module-activity-home-home~module-answer-home-home~module-answer-question-question~module-article-tas~d29a41ac"), t.e("module-activity-home-home~module-answer-home-home~module-answer-question-question~module-article-tas~be372959"), t.e("module-activity-home-home~module-answer-home-home~module-answer-question-question~module-article-tas~0b8a7094"), t.e("module-activity-home-home~module-answer-home-home~module-answer-question-question~module-article-tas~ef19aba9"), t.e("module-booking-lottery-home-home")]).then(function () {
            return e(t("ba93"));
          }.bind(null, t)).catch(t.oe),
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
      }), o.default.component("module-booking-lottery-task-task", function (e) {
        var n = {
          component: Promise.all([t.e("module-booking-lottery-task-task~module-farm-game-game"), t.e("module-booking-lottery-task-task")]).then(function () {
            return e(t("183c"));
          }.bind(null, t)).catch(t.oe),
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
      }), o.default.component("module-sdk-demo-unisdk", function (e) {
        var n = {
          component: t.e("module-sdk-demo-unisdk").then(function () {
            return e(t("7d25"));
          }.bind(null, t)).catch(t.oe),
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
      }), o.default.component("module-sdk-demo-jssdk", function (e) {
        var n = {
          component: t.e("module-sdk-demo-jssdk").then(function () {
            return e(t("087b"));
          }.bind(null, t)).catch(t.oe),
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
      }), o.default.component("module-sdk-demo-smartcitysdk", function (e) {
        var n = {
          component: t.e("module-sdk-demo-smartcitysdk").then(function () {
            return e(t("f3c8"));
          }.bind(null, t)).catch(t.oe),
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
      }), o.default.component("module-sdk-demo-cmstopsdk", function (e) {
        var n = {
          component: t.e("module-sdk-demo-cmstopsdk").then(function () {
            return e(t("570d"));
          }.bind(null, t)).catch(t.oe),
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
      }), o.default.component("module-sdk-demo-cmstopnewsdk", function (e) {
        var n = {
          component: t.e("module-sdk-demo-cmstopnewsdk").then(function () {
            return e(t("b97a"));
          }.bind(null, t)).catch(t.oe),
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
      }), o.default.component("module-sdk-demo-fluttersdk", function (e) {
        var n = {
          component: t.e("module-sdk-demo-fluttersdk").then(function () {
            return e(t("1652"));
          }.bind(null, t)).catch(t.oe),
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
      }), o.default.component("module-sdk-demo-yongpaisdk", function (e) {
        var n = {
          component: t.e("module-sdk-demo-yongpaisdk").then(function () {
            return e(t("0a5d"));
          }.bind(null, t)).catch(t.oe),
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
      }), o.default.component("module-sdk-demo-nbtvsdk", function (e) {
        var n = {
          component: t.e("module-sdk-demo-nbtvsdk").then(function () {
            return e(t("9448"));
          }.bind(null, t)).catch(t.oe),
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
      }), o.default.component("module-sdk-demo-tianmusdk", function (e) {
        var n = {
          component: t.e("module-sdk-demo-tianmusdk").then(function () {
            return e(t("32be"));
          }.bind(null, t)).catch(t.oe),
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
      }), o.default.component("module-sdk-demo-trssdk", function (e) {
        var n = {
          component: t.e("module-sdk-demo-trssdk").then(function () {
            return e(t("0428"));
          }.bind(null, t)).catch(t.oe),
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
      }), o.default.component("module-sdk-demo-tianmasdk", function (e) {
        var n = {
          component: t.e("module-sdk-demo-tianmasdk").then(function () {
            return e(t("39e3"));
          }.bind(null, t)).catch(t.oe),
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
      }), o.default.component("module-sdk-demo-injssdk", function (e) {
        var n = {
          component: t.e("module-sdk-demo-injssdk").then(function () {
            return e(t("57a8"));
          }.bind(null, t)).catch(t.oe),
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
      }), o.default.component("module-sdk-demo-fangzhengsdk", function (e) {
        var n = {
          component: t.e("module-sdk-demo-fangzhengsdk").then(function () {
            return e(t("9680"));
          }.bind(null, t)).catch(t.oe),
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
      }), o.default.component("module-sdk-demo-xingkongyunsdk", function (e) {
        var n = {
          component: t.e("module-sdk-demo-xingkongyunsdk").then(function () {
            return e(t("2e68"));
          }.bind(null, t)).catch(t.oe),
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
      }), o.default.component("module-sdk-demo-cmstopv3sdk", function (e) {
        var n = {
          component: t.e("module-sdk-demo-cmstopv3sdk").then(function () {
            return e(t("cd52"));
          }.bind(null, t)).catch(t.oe),
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
      }), o.default.component("module-sdk-demo-xiuzhousdk", function (e) {
        var n = {
          component: t.e("module-sdk-demo-xiuzhousdk").then(function () {
            return e(t("1fb4"));
          }.bind(null, t)).catch(t.oe),
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
      }), o.default.component("module-sdk-demo-ziyangsdk", function (e) {
        var n = {
          component: t.e("module-sdk-demo-ziyangsdk").then(function () {
            return e(t("2a3c"));
          }.bind(null, t)).catch(t.oe),
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
      }), o.default.component("module-sdk-demo-yantaisdk", function (e) {
        var n = {
          component: t.e("module-sdk-demo-yantaisdk").then(function () {
            return e(t("4ea3"));
          }.bind(null, t)).catch(t.oe),
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
      }), o.default.component("module-sdk-demo-jingmaishansdk", function (e) {
        var n = {
          component: t.e("module-sdk-demo-jingmaishansdk").then(function () {
            return e(t("438f"));
          }.bind(null, t)).catch(t.oe),
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
      }), o.default.component("module-customer-xmtv-flowers", function (e) {
        var n = {
          component: Promise.all([t.e("module-clockin-cert-get-cert~module-cms-news-detail~module-cms-video-detail~module-customer-fjdaily-~4f8830ac"), t.e("module-clockin-log-log~module-cms-news-detail~module-cms-video-detail~module-customer-fjdaily-clocki~654be37c"), t.e("module-clockin-cert-get-cert~module-cms-news-detail~module-cms-video-detail~module-customer-fjdaily-~aa7fb99f"), t.e("module-clockin-cert-get-cert~module-customer-xmtv-flowers~module-guandan-rank-rank-detail~module-lot~3a7f0b09"), t.e("module-customer-xmtv-flowers")]).then(function () {
            return e(t("0f95"));
          }.bind(null, t)).catch(t.oe),
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
      }), o.default.component("module-customer-xmtv-short-videos", function (e) {
        var n = {
          component: Promise.all([t.e("module-customer-xmtv-publicize~module-customer-xmtv-short-videos"), t.e("module-customer-xmtv-short-videos")]).then(function () {
            return e(t("529c5"));
          }.bind(null, t)).catch(t.oe),
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
      }), o.default.component("module-customer-xmtv-publicize", function (e) {
        var n = {
          component: Promise.all([t.e("module-customer-xmtv-publicize~module-customer-xmtv-short-videos"), t.e("module-customer-xmtv-publicize")]).then(function () {
            return e(t("bbca"));
          }.bind(null, t)).catch(t.oe),
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
      }), o.default.component("module-customer-kannh-game", function (e) {
        var n = {
          component: t.e("module-customer-kannh-game").then(function () {
            return e(t("77c8"));
          }.bind(null, t)).catch(t.oe),
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
      }), o.default.component("module-customer-fjdaily-guide", function (e) {
        var n = {
          component: t.e("module-customer-fjdaily-guide").then(function () {
            return e(t("8733"));
          }.bind(null, t)).catch(t.oe),
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
      }), o.default.component("module-customer-fjdaily-home", function (e) {
        var n = {
          component: Promise.all([t.e("module-activity-home-home~module-answer-home-home~module-answer-question-question~module-article-tas~d29a41ac"), t.e("module-activity-home-home~module-answer-home-home~module-answer-question-question~module-article-tas~be372959"), t.e("module-activity-home-home~module-answer-home-home~module-answer-question-question~module-article-tas~0b8a7094"), t.e("module-activity-home-home~module-answer-home-home~module-answer-question-question~module-article-tas~ef19aba9"), t.e("module-customer-fjdaily-home")]).then(function () {
            return e(t("70c5"));
          }.bind(null, t)).catch(t.oe),
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
      }), o.default.component("module-customer-fjdaily-clockin", function (e) {
        var n = {
          component: Promise.all([t.e("module-activity-home-home~module-answer-home-home~module-answer-question-question~module-article-tas~d29a41ac"), t.e("module-clockin-cert-get-cert~module-cms-news-detail~module-cms-video-detail~module-customer-fjdaily-~4f8830ac"), t.e("module-clockin-log-log~module-cms-news-detail~module-cms-video-detail~module-customer-fjdaily-clocki~654be37c"), t.e("module-clockin-cert-get-cert~module-cms-news-detail~module-cms-video-detail~module-customer-fjdaily-~aa7fb99f"), t.e("module-customer-fjdaily-clockin")]).then(function () {
            return e(t("8e61"));
          }.bind(null, t)).catch(t.oe),
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
      }), o.default.component("module-customer-fhtvn-rank-list", function (e) {
        var n = {
          component: Promise.all([t.e("module-answer-answer-log-answer-detail~module-customer-fhtvn-no-rank-list~module-customer-fhtvn-rank~d5a9cb9a"), t.e("module-customer-fhtvn-no-rank-list~module-customer-fhtvn-rank-list"), t.e("module-customer-fhtvn-rank-list")]).then(function () {
            return e(t("c7b4"));
          }.bind(null, t)).catch(t.oe),
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
      }), o.default.component("module-customer-fhtvn-no-rank-list", function (e) {
        var n = {
          component: Promise.all([t.e("module-answer-answer-log-answer-detail~module-customer-fhtvn-no-rank-list~module-customer-fhtvn-rank~d5a9cb9a"), t.e("module-customer-fhtvn-no-rank-list~module-customer-fhtvn-rank-list"), t.e("module-customer-fhtvn-no-rank-list")]).then(function () {
            return e(t("8656"));
          }.bind(null, t)).catch(t.oe),
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
      }), o.default.component("module-customer-fhtvn-main-map", function (e) {
        var n = {
          component: t.e("module-customer-fhtvn-main-map").then(function () {
            return e(t("519b"));
          }.bind(null, t)).catch(t.oe),
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
      }), o.default.component("module-customer-xstv-guide", function (e) {
        var n = {
          component: t.e("module-customer-xstv-guide").then(function () {
            return e(t("3f96"));
          }.bind(null, t)).catch(t.oe),
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
      }), o.default.component("module-customer-retirement-index", function (e) {
        var n = {
          component: t.e("module-customer-retirement-index").then(function () {
            return e(t("a44c"));
          }.bind(null, t)).catch(t.oe),
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
      }), o.default.component("module-dilate-home-home", function (e) {
        var n = {
          component: Promise.all([t.e("module-activity-home-home~module-answer-home-home~module-answer-question-question~module-article-tas~d29a41ac"), t.e("module-activity-home-home~module-answer-home-home~module-answer-question-question~module-article-tas~be372959"), t.e("module-activity-home-home~module-answer-home-home~module-answer-question-question~module-article-tas~0b8a7094"), t.e("module-activity-home-home~module-answer-home-home~module-answer-question-question~module-article-tas~ef19aba9"), t.e("module-dilate-home-home")]).then(function () {
            return e(t("e1e3"));
          }.bind(null, t)).catch(t.oe),
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
      }), o.default.component("module-query-home-home", function (e) {
        var n = {
          component: Promise.all([t.e("module-activity-home-home~module-answer-home-home~module-answer-question-question~module-article-tas~d29a41ac"), t.e("module-activity-home-home~module-answer-home-home~module-answer-question-question~module-article-tas~be372959"), t.e("module-activity-home-home~module-answer-home-home~module-answer-question-question~module-article-tas~0b8a7094"), t.e("module-activity-home-home~module-answer-home-home~module-answer-question-question~module-article-tas~ef19aba9"), t.e("module-query-home-home")]).then(function () {
            return e(t("e5be"));
          }.bind(null, t)).catch(t.oe),
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
      }), o.default.component("module-query-search-search-results", function (e) {
        var n = {
          component: t.e("module-query-search-search-results").then(function () {
            return e(t("0160c"));
          }.bind(null, t)).catch(t.oe),
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
      }), o.default.component("module-collect-card-home-home", function (e) {
        var n = {
          component: Promise.all([t.e("module-activity-home-home~module-answer-home-home~module-answer-question-question~module-article-tas~d29a41ac"), t.e("module-activity-home-home~module-answer-home-home~module-answer-question-question~module-article-tas~be372959"), t.e("module-activity-home-home~module-answer-home-home~module-answer-question-question~module-article-tas~0b8a7094"), t.e("module-activity-home-home~module-answer-home-home~module-answer-question-question~module-article-tas~ef19aba9"), t.e("module-collect-card-home-home")]).then(function () {
            return e(t("48c1"));
          }.bind(null, t)).catch(t.oe),
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
      }), o.default.component("module-stepsport-home-home", function (e) {
        var n = {
          component: Promise.all([t.e("module-activity-home-home~module-answer-home-home~module-answer-question-question~module-article-tas~d29a41ac"), t.e("module-activity-home-home~module-answer-home-home~module-answer-question-question~module-article-tas~be372959"), t.e("module-activity-home-home~module-answer-home-home~module-answer-question-question~module-article-tas~0b8a7094"), t.e("module-activity-home-home~module-answer-home-home~module-answer-question-question~module-article-tas~ef19aba9"), t.e("module-stepsport-home-home")]).then(function () {
            return e(t("a2bf4"));
          }.bind(null, t)).catch(t.oe),
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
      }), o.default.component("module-whipped-eggs-home-home", function (e) {
        var n = {
          component: Promise.all([t.e("module-activity-home-home~module-answer-home-home~module-answer-question-question~module-article-tas~d29a41ac"), t.e("module-activity-home-home~module-answer-home-home~module-answer-question-question~module-article-tas~be372959"), t.e("module-activity-home-home~module-answer-home-home~module-answer-question-question~module-article-tas~0b8a7094"), t.e("module-activity-home-home~module-answer-home-home~module-answer-question-question~module-article-tas~ef19aba9"), t.e("module-whipped-eggs-home-home")]).then(function () {
            return e(t("f5e6"));
          }.bind(null, t)).catch(t.oe),
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
      }), o.default.component("module-whipped-eggs-rank-history-rank", function (e) {
        var n = {
          component: Promise.all([t.e("module-answer-answer-log-answer-detail~module-customer-fhtvn-no-rank-list~module-customer-fhtvn-rank~d5a9cb9a"), t.e("module-whipped-eggs-rank-history-rank")]).then(function () {
            return e(t("2d1e"));
          }.bind(null, t)).catch(t.oe),
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
      }), o.default.component("module-nschool-home-home", function (e) {
        var n = {
          component: Promise.all([t.e("module-activity-home-home~module-answer-home-home~module-answer-question-question~module-article-tas~d29a41ac"), t.e("module-activity-home-home~module-answer-home-home~module-answer-question-question~module-article-tas~be372959"), t.e("module-activity-home-home~module-answer-home-home~module-answer-question-question~module-article-tas~0b8a7094"), t.e("module-activity-home-home~module-answer-home-home~module-answer-question-question~module-article-tas~ef19aba9"), t.e("module-nschool-home-home")]).then(function () {
            return e(t("3477"));
          }.bind(null, t)).catch(t.oe),
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
      }), o.default.component("module-nschool-subject-subject-info-detail", function (e) {
        var n = {
          component: Promise.all([t.e("module-activity-home-home~module-answer-home-home~module-answer-question-question~module-article-tas~d29a41ac"), t.e("module-activity-home-home~module-answer-home-home~module-answer-question-question~module-article-tas~be372959"), t.e("module-activity-home-home~module-answer-home-home~module-answer-question-question~module-article-tas~0b8a7094"), t.e("module-activity-home-home~module-answer-home-home~module-answer-question-question~module-article-tas~ef19aba9"), t.e("module-nschool-subject-subject-info-detail")]).then(function () {
            return e(t("62c2"));
          }.bind(null, t)).catch(t.oe),
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
      }), o.default.component("module-guandan-home-home", function (e) {
        var n = {
          component: Promise.all([t.e("module-activity-home-home~module-answer-home-home~module-answer-question-question~module-article-tas~d29a41ac"), t.e("module-activity-home-home~module-answer-home-home~module-answer-question-question~module-article-tas~be372959"), t.e("module-activity-home-home~module-answer-home-home~module-answer-question-question~module-article-tas~0b8a7094"), t.e("module-activity-home-home~module-answer-home-home~module-answer-question-question~module-article-tas~ef19aba9"), t.e("module-guandan-home-home")]).then(function () {
            return e(t("3c62"));
          }.bind(null, t)).catch(t.oe),
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
      }), o.default.component("module-guandan-home-home-two", function (e) {
        var n = {
          component: Promise.all([t.e("module-activity-home-home~module-answer-home-home~module-answer-question-question~module-article-tas~d29a41ac"), t.e("module-activity-home-home~module-answer-home-home~module-answer-question-question~module-article-tas~be372959"), t.e("module-activity-home-home~module-answer-home-home~module-answer-question-question~module-article-tas~0b8a7094"), t.e("module-activity-home-home~module-answer-home-home~module-answer-question-question~module-article-tas~ef19aba9"), t.e("module-guandan-home-home-two")]).then(function () {
            return e(t("da64"));
          }.bind(null, t)).catch(t.oe),
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
      }), o.default.component("module-guandan-rank-rank-detail", function (e) {
        var n = {
          component: Promise.all([t.e("module-answer-answer-log-answer-detail~module-customer-fhtvn-no-rank-list~module-customer-fhtvn-rank~d5a9cb9a"), t.e("module-clockin-cert-get-cert~module-cms-news-detail~module-cms-video-detail~module-customer-fjdaily-~4f8830ac"), t.e("module-clockin-cert-get-cert~module-cms-news-detail~module-cms-video-detail~module-customer-fjdaily-~aa7fb99f"), t.e("module-clockin-cert-get-cert~module-customer-xmtv-flowers~module-guandan-rank-rank-detail~module-lot~3a7f0b09"), t.e("module-guandan-rank-rank-detail")]).then(function () {
            return e(t("a565"));
          }.bind(null, t)).catch(t.oe),
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
      }), o.default.component("module-neurocat-home-home", function (e) {
        var n = {
          component: Promise.all([t.e("module-activity-home-home~module-answer-home-home~module-answer-question-question~module-article-tas~d29a41ac"), t.e("module-activity-home-home~module-answer-home-home~module-answer-question-question~module-article-tas~be372959"), t.e("module-activity-home-home~module-answer-home-home~module-answer-question-question~module-article-tas~0b8a7094"), t.e("module-activity-home-home~module-answer-home-home~module-answer-question-question~module-article-tas~ef19aba9"), t.e("module-neurocat-home-home")]).then(function () {
            return e(t("3da7"));
          }.bind(null, t)).catch(t.oe),
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
      }), o.default.component("module-neurocat-game-game", function (e) {
        var n = {
          component: Promise.all([t.e("module-activity-home-home~module-answer-home-home~module-answer-question-question~module-article-tas~d29a41ac"), t.e("module-clockin-cert-get-cert~module-cms-news-detail~module-cms-video-detail~module-customer-fjdaily-~4f8830ac"), t.e("module-clockin-log-log~module-cms-news-detail~module-cms-video-detail~module-customer-fjdaily-clocki~654be37c"), t.e("module-clockin-cert-get-cert~module-cms-news-detail~module-cms-video-detail~module-customer-fjdaily-~aa7fb99f"), t.e("module-neurocat-game-game")]).then(function () {
            return e(t("3e5eb"));
          }.bind(null, t)).catch(t.oe),
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
      }), o.default.component("module-info-pub-home-detail", function (e) {
        var n = {
          component: Promise.all([t.e("module-activity-home-home~module-answer-home-home~module-answer-question-question~module-article-tas~d29a41ac"), t.e("module-activity-home-home~module-answer-home-home~module-answer-question-question~module-article-tas~be372959"), t.e("module-activity-home-home~module-answer-home-home~module-answer-question-question~module-article-tas~0b8a7094"), t.e("module-activity-home-home~module-answer-home-home~module-answer-question-question~module-article-tas~ef19aba9"), t.e("module-info-pub-home-detail")]).then(function () {
            return e(t("2d85"));
          }.bind(null, t)).catch(t.oe),
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
      }), o.default.component("module-info-pub-home-publish", function (e) {
        var n = {
          component: Promise.all([t.e("module-activity-home-home~module-answer-home-home~module-answer-question-question~module-article-tas~d29a41ac"), t.e("module-activity-home-home~module-answer-home-home~module-answer-question-question~module-article-tas~be372959"), t.e("module-activity-home-home~module-answer-home-home~module-answer-question-question~module-article-tas~0b8a7094"), t.e("module-activity-home-home~module-answer-home-home~module-answer-question-question~module-article-tas~ef19aba9"), t.e("module-info-pub-home-publish")]).then(function () {
            return e(t("10fb"));
          }.bind(null, t)).catch(t.oe),
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
      }), o.default.component("module-info-pub-home-mine", function (e) {
        var n = {
          component: Promise.all([t.e("module-activity-home-home~module-answer-home-home~module-answer-question-question~module-article-tas~d29a41ac"), t.e("module-activity-home-home~module-answer-home-home~module-answer-question-question~module-article-tas~be372959"), t.e("module-activity-home-home~module-answer-home-home~module-answer-question-question~module-article-tas~0b8a7094"), t.e("module-activity-home-home~module-answer-home-home~module-answer-question-question~module-article-tas~ef19aba9"), t.e("module-info-pub-home-mine")]).then(function () {
            return e(t("0445"));
          }.bind(null, t)).catch(t.oe),
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
      }), o.default.component("module-info-pub-report-report", function (e) {
        var n = {
          component: Promise.all([t.e("module-info-pub-report-report~module-live-report-report~module-mall-business-apply~module-mall-comme~3b1de550"), t.e("module-info-pub-report-report")]).then(function () {
            return e(t("cddb"));
          }.bind(null, t)).catch(t.oe),
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
      }), o.default.component("module-bobing-home-home", function (e) {
        var n = {
          component: Promise.all([t.e("module-activity-home-home~module-answer-home-home~module-answer-question-question~module-article-tas~d29a41ac"), t.e("module-activity-home-home~module-answer-home-home~module-answer-question-question~module-article-tas~be372959"), t.e("module-activity-home-home~module-answer-home-home~module-answer-question-question~module-article-tas~0b8a7094"), t.e("module-activity-home-home~module-answer-home-home~module-answer-question-question~module-article-tas~ef19aba9"), t.e("module-bobing-home-home")]).then(function () {
            return e(t("0426"));
          }.bind(null, t)).catch(t.oe),
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
      }), o.default.component("module-bobing-room-room-detail", function (e) {
        var n = {
          component: Promise.all([t.e("module-activity-home-home~module-answer-home-home~module-answer-question-question~module-article-tas~d29a41ac"), t.e("module-activity-home-home~module-answer-home-home~module-answer-question-question~module-article-tas~be372959"), t.e("module-activity-home-home~module-answer-home-home~module-answer-question-question~module-article-tas~0b8a7094"), t.e("module-activity-home-home~module-answer-home-home~module-answer-question-question~module-article-tas~ef19aba9"), t.e("module-bobing-room-room-detail")]).then(function () {
            return e(t("2bb5"));
          }.bind(null, t)).catch(t.oe),
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
      }), o.default.component("module-bobing-rule-activity-rule", function (e) {
        var n = {
          component: t.e("module-bobing-rule-activity-rule").then(function () {
            return e(t("4a87"));
          }.bind(null, t)).catch(t.oe),
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
      }), o.default.component("module-bobing-rank-rank-detail", function (e) {
        var n = {
          component: t.e("module-bobing-rank-rank-detail").then(function () {
            return e(t("9d1e"));
          }.bind(null, t)).catch(t.oe),
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
        path: "/pages/activity/help-rank",
        component: {
          render: function (e) {
            return e("Page", {
              props: Object.assign({}, __uniConfig.globalStyle, {
                navigationBarTitleText: "\u9080\u8BF7\u6392\u884C",
                navigationStyle: "custom"
              })
            }, [e("pages-activity-help-rank", {
              slot: "page"
            })]);
          }
        },
        meta: {
          name: "pages-activity-help-rank",
          isNVue: !1,
          maxWidth: 0,
          pagePath: "pages/activity/help-rank",
          windowTop: 0
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
        path: "/module-mall/home/mall-home",
        component: {
          render: function (e) {
            return e("Page", {
              props: Object.assign({
                isQuit: !0,
                isTabBar: !0,
                tabBarIndex: 0
              }, __uniConfig.globalStyle, {
                navigationBarTitleText: "",
                navigationBarBackgroundColor: "#f85d68",
                navigationBarTextStyle: "white",
                enablePullDownRefresh: !0,
                navigationStyle: "custom"
              })
            }, [e("module-mall-home-mall-home", {
              slot: "page"
            })]);
          }
        },
        meta: {
          id: 2,
          name: "module-mall-home-mall-home",
          isNVue: !1,
          maxWidth: 0,
          pagePath: "module-mall/home/mall-home",
          isQuit: !0,
          isTabBar: !0,
          tabBarIndex: 0,
          windowTop: 0
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
        path: "/module-mall/home/search-home",
        component: {
          render: function (e) {
            return e("Page", {
              props: Object.assign({}, __uniConfig.globalStyle, {
                navigationBarTitleText: "",
                enablePullDownRefresh: !0,
                navigationStyle: "custom"
              })
            }, [e("module-mall-home-search-home", {
              slot: "page"
            })]);
          }
        },
        meta: {
          name: "module-mall-home-search-home",
          isNVue: !1,
          maxWidth: 0,
          pagePath: "module-mall/home/search-home",
          windowTop: 0
        }
      }, {
        path: "/module-mall/home/mall-home",
        component: {
          render: function (e) {
            return e("Page", {
              props: Object.assign({
                isQuit: !0,
                isTabBar: !0,
                tabBarIndex: 0
              }, __uniConfig.globalStyle, {
                navigationBarTitleText: "",
                enablePullDownRefresh: !0,
                navigationStyle: "custom"
              })
            }, [e("module-mall-home-mall-home", {
              slot: "page"
            })]);
          }
        },
        meta: {
          id: 3,
          name: "module-mall-home-mall-home",
          isNVue: !1,
          maxWidth: 0,
          pagePath: "module-mall/home/mall-home",
          isQuit: !0,
          isTabBar: !0,
          tabBarIndex: 0,
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
                tabBarIndex: 2
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
          id: 4,
          name: "module-mall-business-business-new-style-four",
          isNVue: !1,
          maxWidth: 0,
          pagePath: "module-mall/business/business-new-style-four",
          isQuit: !0,
          isTabBar: !0,
          tabBarIndex: 2,
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
                enablePullDownRefresh: !1,
                navigationStyle: "custom"
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
          windowTop: 0
        }
      }, {
        path: "/module-mall/goodslist/goods-channel-list",
        component: {
          render: function (e) {
            return e("Page", {
              props: Object.assign({}, __uniConfig.globalStyle, {
                navigationBarTitleText: "\u5546\u54C1\u9891\u9053\u5217\u8868",
                enablePullDownRefresh: !1,
                navigationStyle: "custom"
              })
            }, [e("module-mall-goodslist-goods-channel-list", {
              slot: "page"
            })]);
          }
        },
        meta: {
          name: "module-mall-goodslist-goods-channel-list",
          isNVue: !1,
          maxWidth: 0,
          pagePath: "module-mall/goodslist/goods-channel-list",
          windowTop: 0
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
                enablePullDownRefresh: !1,
                navigationStyle: "custom"
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
          windowTop: 0
        }
      }, {
        path: "/module-mall/goods-detail/goods-detail-style-three",
        component: {
          render: function (e) {
            return e("Page", {
              props: Object.assign({}, __uniConfig.globalStyle, {
                navigationBarTitleText: "\u5546\u54C1\u8BE6\u60C5",
                enablePullDownRefresh: !1,
                navigationStyle: "custom"
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
          windowTop: 0
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
                enablePullDownRefresh: !1,
                navigationStyle: "custom"
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
          windowTop: 0
        }
      }, {
        path: "/module-mall/confirm-order/confirm-order-cart",
        component: {
          render: function (e) {
            return e("Page", {
              props: Object.assign({}, __uniConfig.globalStyle, {
                navigationBarTitleText: "\u786E\u8BA4\u8BA2\u5355",
                enablePullDownRefresh: !1,
                navigationStyle: "custom"
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
          windowTop: 0
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
                tabBarIndex: 3
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
          id: 5,
          name: "module-mall-exchange-log-exchange-log-style-four",
          isNVue: !1,
          maxWidth: 0,
          pagePath: "module-mall/exchange-log/exchange-log-style-four",
          isQuit: !0,
          isTabBar: !0,
          tabBarIndex: 3,
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
                enablePullDownRefresh: !1,
                navigationStyle: "custom"
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
          windowTop: 0
        }
      }, {
        path: "/module-mall/address/address-detail",
        component: {
          render: function (e) {
            return e("Page", {
              props: Object.assign({}, __uniConfig.globalStyle, {
                navigationBarTitleText: "\u5730\u5740\u8BE6\u60C5",
                enablePullDownRefresh: !1,
                navigationStyle: "custom"
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
          windowTop: 0
        }
      }, {
        path: "/module-mall/coupon/coupon-list",
        component: {
          render: function (e) {
            return e("Page", {
              props: Object.assign({}, __uniConfig.globalStyle, {
                navigationBarTitleText: "\u4F18\u60E0\u5238",
                enablePullDownRefresh: !1,
                navigationStyle: "custom"
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
          windowTop: 0
        }
      }, {
        path: "/module-mall/coupon/coupon-detail",
        component: {
          render: function (e) {
            return e("Page", {
              props: Object.assign({}, __uniConfig.globalStyle, {
                navigationBarTitleText: "\u4F18\u60E0\u5238",
                enablePullDownRefresh: !1,
                navigationStyle: "custom"
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
          windowTop: 0
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
                enablePullDownRefresh: !0,
                navigationStyle: "custom"
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
          windowTop: 0
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
        path: "/module-mall/refund/shoppingmall-apply",
        component: {
          render: function (e) {
            return e("Page", {
              props: Object.assign({}, __uniConfig.globalStyle, {
                navigationBarTitleText: "\u7533\u8BF7\u9000\u6B3E",
                enablePullDownRefresh: !1,
                navigationStyle: "custom"
              })
            }, [e("module-mall-refund-shoppingmall-apply", {
              slot: "page"
            })]);
          }
        },
        meta: {
          name: "module-mall-refund-shoppingmall-apply",
          isNVue: !1,
          maxWidth: 0,
          pagePath: "module-mall/refund/shoppingmall-apply",
          windowTop: 0
        }
      }, {
        path: "/module-mall/refund/list",
        component: {
          render: function (e) {
            return e("Page", {
              props: Object.assign({}, __uniConfig.globalStyle, {
                navigationBarTitleText: "\u9000\u6B3E\u8BB0\u5F55",
                enablePullDownRefresh: !0,
                navigationStyle: "custom"
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
          windowTop: 0
        }
      }, {
        path: "/module-mall/refund/detail",
        component: {
          render: function (e) {
            return e("Page", {
              props: Object.assign({}, __uniConfig.globalStyle, {
                navigationBarTitleText: "\u9000\u6B3E\u8BE6\u60C5",
                enablePullDownRefresh: !1,
                navigationStyle: "custom"
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
          windowTop: 0
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
                tabBarIndex: 1
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
          id: 6,
          name: "module-mall-home-home-style-four",
          isNVue: !1,
          maxWidth: 0,
          pagePath: "module-mall/home/home-style-four",
          isQuit: !0,
          isTabBar: !0,
          tabBarIndex: 1,
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
                tabBarIndex: 4
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
          id: 7,
          name: "module-mall-user-user-center-style-four",
          isNVue: !1,
          maxWidth: 0,
          pagePath: "module-mall/user/user-center-style-four",
          isQuit: !0,
          isTabBar: !0,
          tabBarIndex: 4,
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
        path: "/module-mall/writeoff/manage/offline",
        component: {
          render: function (e) {
            return e("Page", {
              props: Object.assign({}, __uniConfig.globalStyle, {
                navigationBarTitleText: "\u7EBF\u4E0B\u8BA2\u5355",
                enablePullDownRefresh: !0
              })
            }, [e("module-mall-writeoff-manage-offline", {
              slot: "page"
            })]);
          }
        },
        meta: {
          name: "module-mall-writeoff-manage-offline",
          isNVue: !1,
          maxWidth: 0,
          pagePath: "module-mall/writeoff/manage/offline",
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
                enablePullDownRefresh: !0,
                navigationStyle: "custom"
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
          windowTop: 0
        }
      }, {
        path: "/module-mall/offline/pay-log-detail",
        component: {
          render: function (e) {
            return e("Page", {
              props: Object.assign({}, __uniConfig.globalStyle, {
                navigationBarTitleText: "\u4EA4\u6613\u660E\u7EC6\u8BE6\u60C5",
                enablePullDownRefresh: !1,
                navigationStyle: "custom"
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
          windowTop: 0
        }
      }, {
        path: "/module-mall/goods-auction/goods-list",
        component: {
          render: function (e) {
            return e("Page", {
              props: Object.assign({}, __uniConfig.globalStyle, {
                navigationBarTitleText: "\u62CD\u5356\u5217\u8868",
                enablePullDownRefresh: !1,
                navigationStyle: "custom"
              })
            }, [e("module-mall-goods-auction-goods-list", {
              slot: "page"
            })]);
          }
        },
        meta: {
          name: "module-mall-goods-auction-goods-list",
          isNVue: !1,
          maxWidth: 0,
          pagePath: "module-mall/goods-auction/goods-list",
          windowTop: 0
        }
      }, {
        path: "/module-mall/goods-auction/goods-detail",
        component: {
          render: function (e) {
            return e("Page", {
              props: Object.assign({}, __uniConfig.globalStyle, {
                navigationBarTitleText: "\u62CD\u5356\u5546\u54C1\u8BE6\u60C5",
                enablePullDownRefresh: !0,
                navigationStyle: "custom"
              })
            }, [e("module-mall-goods-auction-goods-detail", {
              slot: "page"
            })]);
          }
        },
        meta: {
          name: "module-mall-goods-auction-goods-detail",
          isNVue: !1,
          maxWidth: 0,
          pagePath: "module-mall/goods-auction/goods-detail",
          windowTop: 0
        }
      }, {
        path: "/module-mall/goods-auction/bidding-log",
        component: {
          render: function (e) {
            return e("Page", {
              props: Object.assign({}, __uniConfig.globalStyle, {
                navigationBarTitleText: "\u7ADE\u4EF7\u8BB0\u5F55",
                enablePullDownRefresh: !1,
                navigationStyle: "custom"
              })
            }, [e("module-mall-goods-auction-bidding-log", {
              slot: "page"
            })]);
          }
        },
        meta: {
          name: "module-mall-goods-auction-bidding-log",
          isNVue: !1,
          maxWidth: 0,
          pagePath: "module-mall/goods-auction/bidding-log",
          windowTop: 0
        }
      }, {
        path: "/module-mall/goods-auction/my-order-list",
        component: {
          render: function (e) {
            return e("Page", {
              props: Object.assign({}, __uniConfig.globalStyle, {
                navigationBarTitleText: "\u6211\u7684\u7ADE\u62CD",
                enablePullDownRefresh: !0,
                navigationStyle: "custom"
              })
            }, [e("module-mall-goods-auction-my-order-list", {
              slot: "page"
            })]);
          }
        },
        meta: {
          name: "module-mall-goods-auction-my-order-list",
          isNVue: !1,
          maxWidth: 0,
          pagePath: "module-mall/goods-auction/my-order-list",
          windowTop: 0
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
        path: "/module-venue-clockin/group/group-list",
        component: {
          render: function (e) {
            return e("Page", {
              props: Object.assign({}, __uniConfig.globalStyle, {
                navigationBarTitleText: "\u573A\u9986\u5217\u8868",
                navigationBarBackgroundColor: "#212D45",
                navigationBarTextStyle: "white",
                enablePullDownRefresh: !0
              })
            }, [e("module-venue-clockin-group-group-list", {
              slot: "page"
            })]);
          }
        },
        meta: {
          name: "module-venue-clockin-group-group-list",
          isNVue: !1,
          maxWidth: 0,
          pagePath: "module-venue-clockin/group/group-list",
          windowTop: 44
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
        path: "/module-sdk/demo/jingmaishansdk",
        component: {
          render: function (e) {
            return e("Page", {
              props: Object.assign({}, __uniConfig.globalStyle, {
                navigationBarTitleText: "YD-JINGMAISHAN-SDK DEMO",
                enablePullDownRefresh: !1
              })
            }, [e("module-sdk-demo-jingmaishansdk", {
              slot: "page"
            })]);
          }
        },
        meta: {
          name: "module-sdk-demo-jingmaishansdk",
          isNVue: !1,
          maxWidth: 0,
          pagePath: "module-sdk/demo/jingmaishansdk",
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
        path: "/module-customer/retirement/index",
        component: {
          render: function (e) {
            return e("Page", {
              props: Object.assign({}, __uniConfig.globalStyle, {
                navigationBarTitleText: "\u9000\u4F11\u5E74\u9F84\u8BA1\u7B97",
                enablePullDownRefresh: !1,
                navigationStyle: "custom"
              })
            }, [e("module-customer-retirement-index", {
              slot: "page"
            })]);
          }
        },
        meta: {
          name: "module-customer-retirement-index",
          isNVue: !1,
          maxWidth: 0,
          pagePath: "module-customer/retirement/index",
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
                navigationBarTitleText: "",
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
                navigationBarTitleText: "",
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
        path: "/module-bobing/home/home",
        component: {
          render: function (e) {
            return e("Page", {
              props: Object.assign({}, __uniConfig.globalStyle, {
                navigationBarTitleText: "",
                enablePullDownRefresh: !1,
                navigationStyle: "custom"
              })
            }, [e("module-bobing-home-home", {
              slot: "page"
            })]);
          }
        },
        meta: {
          name: "module-bobing-home-home",
          isNVue: !1,
          maxWidth: 0,
          pagePath: "module-bobing/home/home",
          windowTop: 0
        }
      }, {
        path: "/module-bobing/room/room-detail",
        component: {
          render: function (e) {
            return e("Page", {
              props: Object.assign({}, __uniConfig.globalStyle, {
                navigationBarTitleText: "",
                enablePullDownRefresh: !1,
                navigationStyle: "custom"
              })
            }, [e("module-bobing-room-room-detail", {
              slot: "page"
            })]);
          }
        },
        meta: {
          name: "module-bobing-room-room-detail",
          isNVue: !1,
          maxWidth: 0,
          pagePath: "module-bobing/room/room-detail",
          windowTop: 0
        }
      }, {
        path: "/module-bobing/rule/activity-rule",
        component: {
          render: function (e) {
            return e("Page", {
              props: Object.assign({}, __uniConfig.globalStyle, {
                navigationBarTitleText: "\u6D3B\u52A8\u89C4\u5219",
                enablePullDownRefresh: !1,
                navigationStyle: "custom"
              })
            }, [e("module-bobing-rule-activity-rule", {
              slot: "page"
            })]);
          }
        },
        meta: {
          name: "module-bobing-rule-activity-rule",
          isNVue: !1,
          maxWidth: 0,
          pagePath: "module-bobing/rule/activity-rule",
          windowTop: 0
        }
      }, {
        path: "/module-bobing/rank/rank-detail",
        component: {
          render: function (e) {
            return e("Page", {
              props: Object.assign({}, __uniConfig.globalStyle, {
                navigationBarTitleText: "\u6392\u884C\u699C",
                enablePullDownRefresh: !1,
                navigationStyle: "custom"
              })
            }, [e("module-bobing-rank-rank-detail", {
              slot: "page"
            })]);
          }
        },
        meta: {
          name: "module-bobing-rank-rank-detail",
          isNVue: !1,
          maxWidth: 0,
          pagePath: "module-bobing/rank/rank-detail",
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
    }).call(this, t("0ee4"));
  },
  "81c3": function (e, n, t) {
    "use strict";

    (function (e) {
      t("6a54");
      var o = t("f5bd").default;
      Object.defineProperty(n, "__esModule", {
        value: !0
      }), n.default = void 0;
      var i = o(t("2634")),
        a = o(t("2fdc")),
        r = o(t("c5fd")),
        u = o(t("83a2")),
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
            return (0, a.default)((0, i.default)().mark(function n() {
              var t;
              return (0, i.default)().wrap(function (n) {
                while (1) switch (n.prev = n.next) {
                  case 0:
                    return n.prev = 0, n.next = 3, r.default.tenantInitSetting();
                  case 3:
                    t = n.sent, t && t.style && t.style.is_grayscale && (document.getElementsByTagName("html")[0].className = "global-gray"), n.next = 10;
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
            return (0, a.default)((0, i.default)().mark(function e() {
              return (0, i.default)().wrap(function (e) {
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
    }).call(this, t("ba7c")["default"]);
  },
  "83a2": function (e, n, t) {
    "use strict";

    t("6a54");
    var o = t("f5bd").default;
    Object.defineProperty(n, "__esModule", {
      value: !0
    }), n.default = void 0, t("aa9c");
    var i = o(t("2634")),
      a = o(t("2fdc")),
      r = o(t("a957")),
      u = o(t("c5fd")),
      l = {
        init: function () {
          var e = this;
          return (0, a.default)((0, i.default)().mark(function n() {
            var t;
            return (0, i.default)().wrap(function (n) {
              while (1) switch (n.prev = n.next) {
                case 0:
                  return n.next = 2, u.default.tenantInitSetting();
                case 2:
                  t = n.sent, t && t.tianmu_open && t.tianmu_appid && e._initGetuiData({
                    sdk_url: "https://cdn-getuigw.getui.com/iopsdk/getuidata.min.js",
                    name: "GetuiDataSDK",
                    appId: t.tianmu_appid,
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
            t = e.name;
          n["GetuiData"] = t, n[t] = n[t] || function (e) {
            return function () {
              (n[t]._q = n[t]._q || []).push([e, arguments]);
            };
          };
          for (var o = ["init", "track", "autoTrack"], i = 0; i < o.length; i++) n[t][o[i]] = n[t].call(null, o[i]);
          var a = document.createElement("script");
          a.type = "text/javascript", a.async = !0, a.src = e.sdk_url;
          var r = document.getElementsByTagName("script")[0];
          n[t].customPara = e, r.parentNode.insertBefore(a, r);
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
  "865e": function (e, n, t) {
    "use strict";

    t("6a54");
    var o = t("f5bd").default;
    Object.defineProperty(n, "__esModule", {
      value: !0
    }), n.default = void 0, t("5c47"), t("0506");
    var i = o(t("508a")),
      a = {
        isInApp: function () {
          var e = navigator.userAgent.toLowerCase();
          return !!/wjxmediax/gi.test(e);
        },
        getSystemInfo: function (e) {},
        getUserInfo: function (e) {
          i.default.exe("getBasicUserInfo", {}, function (n) {
            if (n && n.data) {
              var t = {
                user_id: n.data.memberid || "",
                user_name: n.data.nickname || "",
                portrait_url: n.data.avatar || "",
                phone: n.data.phone || "",
                wx_openid: "",
                wx_unionid: "",
                app_user_token: n.data.tempToken || ""
              };
              e && e(t);
            } else e && e(!1);
          });
        },
        getLocation: function (e) {},
        shareTo: function () {},
        goToLoginPage: function () {
          i.default.exe("doUserLogin");
        },
        goToBindPage: function () {},
        saveImage: function () {},
        linkTo: function () {},
        jumpToNews: function () {},
        goUcenter: function () {},
        playAudio: function () {},
        showShare: function () {
          var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {};
          i.default.exe("doSharePanel", {
            title: e.title,
            content: e.brief,
            url: e.link_url,
            image: e.indexpic
          });
        },
        openpaper: function () {}
      },
      r = a;
    n.default = r;
  },
  "8a25": function (e, n, t) {
    var o = t("c86c"),
      i = t("2ec5"),
      a = t("7aab"),
      r = t("7a98"),
      u = t("0574"),
      l = t("ec45"),
      s = t("c450");
    n = o(!1);
    var m = i(a),
      d = i(a, {
        hash: "#iefix"
      }),
      c = i(r),
      g = i(u),
      f = i(l),
      p = i(s, {
        hash: "#yd"
      });
    n.push([e.i, "@charset \"UTF-8\";\n/**\n * \u8FD9\u91CC\u662Funi-app\u5185\u7F6E\u7684\u5E38\u7528\u6837\u5F0F\u53D8\u91CF\n *\n * uni-app \u5B98\u65B9\u6269\u5C55\u63D2\u4EF6\u53CA\u63D2\u4EF6\u5E02\u573A\uFF08https://ext.dcloud.net.cn\uFF09\u4E0A\u5F88\u591A\u4E09\u65B9\u63D2\u4EF6\u5747\u4F7F\u7528\u4E86\u8FD9\u4E9B\u6837\u5F0F\u53D8\u91CF\n * \u5982\u679C\u4F60\u662F\u63D2\u4EF6\u5F00\u53D1\u8005\uFF0C\u5EFA\u8BAE\u4F60\u4F7F\u7528scss\u9884\u5904\u7406\uFF0C\u5E76\u5728\u63D2\u4EF6\u4EE3\u7801\u4E2D\u76F4\u63A5\u4F7F\u7528\u8FD9\u4E9B\u53D8\u91CF\uFF08\u65E0\u9700 import \u8FD9\u4E2A\u6587\u4EF6\uFF09\uFF0C\u65B9\u4FBF\u7528\u6237\u901A\u8FC7\u642D\u79EF\u6728\u7684\u65B9\u5F0F\u5F00\u53D1\u6574\u4F53\u98CE\u683C\u4E00\u81F4\u7684App\n *\n */\n/**\n * \u5982\u679C\u4F60\u662FApp\u5F00\u53D1\u8005\uFF08\u63D2\u4EF6\u4F7F\u7528\u8005\uFF09\uFF0C\u4F60\u53EF\u4EE5\u901A\u8FC7\u4FEE\u6539\u8FD9\u4E9B\u53D8\u91CF\u6765\u5B9A\u5236\u81EA\u5DF1\u7684\u63D2\u4EF6\u4E3B\u9898\uFF0C\u5B9E\u73B0\u81EA\u5B9A\u4E49\u4E3B\u9898\u529F\u80FD\n *\n * \u5982\u679C\u4F60\u7684\u9879\u76EE\u540C\u6837\u4F7F\u7528\u4E86scss\u9884\u5904\u7406\uFF0C\u4F60\u4E5F\u53EF\u4EE5\u76F4\u63A5\u5728\u4F60\u7684 scss \u4EE3\u7801\u4E2D\u4F7F\u7528\u5982\u4E0B\u53D8\u91CF\uFF0C\u540C\u65F6\u65E0\u9700 import \u8FD9\u4E2A\u6587\u4EF6\n */\n/* \u989C\u8272\u53D8\u91CF */\n/* \u884C\u4E3A\u76F8\u5173\u989C\u8272 */\n/* \u6587\u5B57\u57FA\u672C\u989C\u8272 */\n/* \u80CC\u666F\u989C\u8272 */\n/* \u8FB9\u6846\u989C\u8272 */\n/* \u5C3A\u5BF8\u53D8\u91CF */\n/* \u6587\u5B57\u5C3A\u5BF8 */\n/* \u56FE\u7247\u5C3A\u5BF8 */\n/* Border Radius */\n/* \u6C34\u5E73\u95F4\u8DDD */\n/* \u5782\u76F4\u95F4\u8DDD */\n/* \u900F\u660E\u5EA6 */\n/* \u6587\u7AE0\u573A\u666F\u76F8\u5173 */\n/* \u81EA\u5B9A\u4E49\u76F8\u5173\u53D8\u91CF */\n/* uview-ui */@font-face{font-family:yd; /* Project id 2651695 */src:url(" + m + "); /* IE9 */src:url(" + d + ") format(\"embedded-opentype\"),url(" + c + ") format(\"woff2\"),url(" + g + ") format(\"woff\"),url(" + f + ") format(\"truetype\"),url(" + p + ") format(\"svg\")}.yd{font-family:yd!important;font-size:16px;font-style:normal;-webkit-font-smoothing:antialiased;-moz-osx-font-smoothing:grayscale}.yd-gouwuche:before{content:\"\\e64b\"}.yd-a-05-xiaomao:before{content:\"\\e64a\"}.yd-rizhi:before{content:\"\\e649\"}.yd-dengji:before{content:\"\\e679\"}.yd-yirenzheng:before{content:\"\\e66d\"}.yd-zhuanti:before{content:\"\\e66c\"}.yd-pinglunguanli:before{content:\"\\e6d0\"}.yd-fenyuan:before{content:\"\\e648\"}.yd-xuexiao:before{content:\"\\e659\"}.yd-lunbotu:before{content:\"\\e700\"}.yd-zhengshu:before{content:\"\\e646\"}.yd-datumoshi:before{content:\"\\e647\"}.yd-yihangliangge:before{content:\"\\e644\"}.yd-yihangyige:before{content:\"\\e645\"}.yd-shouhuiban:before{content:\"\\eab4\"}.yd-guaguaka:before{content:\"\\e642\"}.yd-guaguaka1:before{content:\"\\e643\"}.yd-playing:before{content:\"\\e641\"}.yd-renwuzhongxin1:before{content:\"\\e640\"}.yd-renwuzhongxin:before{content:\"\\e671\"}.yd-weixinyaoyiyaoicon:before{content:\"\\e63d\"}.yd-jinbi1:before{content:\"\\e63e\"}.yd-duihuanweijihuo-:before{content:\"\\e63c\"}.yd-xianshizhekou:before{content:\"\\e63a\"}.yd-ip:before{content:\"\\e63b\"}.yd-fudai2:before{content:\"\\e71d\"}.yd-guanliyuan:before{content:\"\\e639\"}.yd-tuijian:before{content:\"\\e656\"}.yd-yanxuan:before{content:\"\\e6b4\"}.yd-huawei:before{content:\"\\e638\"}.yd-refund:before{content:\"\\e66b\"}.yd-marketingactivity:before{content:\"\\e637\"}.yd-order:before{content:\"\\e787\"}.yd-farm:before{content:\"\\e633\"}.yd-ai:before{content:\"\\ec5f\"}.yd-wallet:before{content:\"\\e602\"}.yd-game:before{content:\"\\e63f\"}.yd-richtext:before{content:\"\\e66f\"}.yd-wish:before{content:\"\\e635\"}.yd-shijiebei:before{content:\"\\e672\"}.yd-sync:before{content:\"\\e6de\"}.yd-paimingbiaoqian:before{content:\"\\e77e\"}.yd-zuji:before{content:\"\\e601\"}.yd-image-swiper:before{content:\"\\e634\"}.yd-waimai:before{content:\"\\fac1\"}.yd-double-down1:before{content:\"\\e624\"}.yd-double-down:before{content:\"\\e8c2\"}.yd-chouhongbao:before{content:\"\\e657\"}.yd-juhe:before{content:\"\\e632\"}.yd-huafeichongzhi:before{content:\"\\e627\"}.yd-hongbao:before{content:\"\\e629\"}.yd-shici:before{content:\"\\e7a7\"}.yd-yanzhengma:before{content:\"\\e626\"}.yd-yuedu:before{content:\"\\e622\"}.yd-dati:before{content:\"\\e67a\"}.yd-toufang:before{content:\"\\e636\"}.yd-toupiao:before{content:\"\\e61d\"}.yd-jiugongge:before{content:\"\\e661\"}.yd-dazhuanpan:before{content:\"\\e6e1\"}.yd-card:before{content:\"\\e669\"}.yd-haoyouzhuli:before{content:\"\\e631\"}.yd-yunying:before{content:\"\\e652\"}.yd-app:before{content:\"\\e619\"}.yd-xianjin:before{content:\"\\e630\"}.yd-leijiyonghu:before{content:\"\\e613\"}.yd-yonghukaihu:before{content:\"\\e618\"}.yd-yonghu:before{content:\"\\e603\"}.yd-dianji:before{content:\"\\e600\"}.yd-zhifubao:before{content:\"\\e62f\"}.yd-weixin:before{content:\"\\e62e\"}.yd-ketang:before{content:\"\\e62d\"}.yd-hongbaoyu:before{content:\"\\e62c\"}.yd-tiaoqi:before{content:\"\\e62b\"}.yd-huati:before{content:\"\\e62a\"}.yd-top5:before{content:\"\\e628\"}.yd-gold:before{content:\"\\e625\"}.yd-integral1:before{content:\"\\e623\"}.yd-zhifu:before{content:\"\\e621\"}.yd-xiadan:before{content:\"\\e620\"}.yd-fangke:before{content:\"\\e61f\"}.yd-user:before{content:\"\\e61e\"}.yd-shangpin:before{content:\"\\e683\"}.yd-jinbi:before{content:\"\\e611\"}.yd-jifen:before{content:\"\\e70c\"}.yd-delete:before{content:\"\\e61c\"}.yd-sort:before{content:\"\\e61b\"}.yd-white-black:before{content:\"\\e61a\"}.yd-coupon-line:before{content:\"\\e617\"}.yd-coupon:before{content:\"\\e616\"}.yd-integral:before{content:\"\\e615\"}.yd-member-card:before{content:\"\\e614\"}.yd-drag-handle:before{content:\"\\e612\"}.yd-music:before{content:\"\\e610\"}.yd-wait-publish:before{content:\"\\e60f\"}.yd-audit:before{content:\"\\e60e\"}.yd-play:before{content:\"\\e60d\"}.yd-block:before{content:\"\\e60c\"}.yd-flex:before{content:\"\\e60b\"}.yd-nodisplay:before{content:\"\\e60a\"}.yd-loadmore:before{content:\"\\e609\"}.yd-layout4:before{content:\"\\e608\"}.yd-container:before{content:\"\\e607\"}.yd-layout3:before{content:\"\\e604\"}.yd-layout2:before{content:\"\\e605\"}.yd-layout1:before{content:\"\\e606\"}body{max-width:750px;margin:auto!important}.u-relative,\n.u-rela{position:relative}.u-absolute,\n.u-abso{position:absolute}uni-image{display:inline-block}uni-view,\nuni-text{box-sizing:border-box}.u-font-xs{font-size:%?22?%}.u-font-sm{font-size:%?26?%}.u-font-md{font-size:%?28?%}.u-font-lg{font-size:%?30?%}.u-font-xl{font-size:%?34?%}.u-flex{display:flex;flex-direction:row;align-items:center}.u-flex-wrap{flex-wrap:wrap}.u-flex-nowrap{flex-wrap:nowrap}.u-col-center{align-items:center}.u-col-top{align-items:flex-start}.u-col-bottom{align-items:flex-end}.u-row-center{justify-content:center}.u-row-left{justify-content:flex-start}.u-row-right{justify-content:flex-end}.u-row-between{justify-content:space-between}.u-row-around{justify-content:space-around}.u-text-left{text-align:left}.u-text-center{text-align:center}.u-text-right{text-align:right}.u-flex-col{display:flex;flex-direction:column}.u-flex-0{flex:0}.u-flex-1{flex:1}.u-flex-2{flex:2}.u-flex-3{flex:3}.u-flex-4{flex:4}.u-flex-5{flex:5}.u-flex-6{flex:6}.u-flex-7{flex:7}.u-flex-8{flex:8}.u-flex-9{flex:9}.u-flex-10{flex:10}.u-flex-11{flex:11}.u-flex-12{flex:12}.u-font-9{font-size:9px}.u-font-10{font-size:10px}.u-font-11{font-size:11px}.u-font-12{font-size:12px}.u-font-13{font-size:13px}.u-font-14{font-size:14px}.u-font-15{font-size:15px}.u-font-16{font-size:16px}.u-font-17{font-size:17px}.u-font-18{font-size:18px}.u-font-19{font-size:19px}.u-font-20{font-size:%?20?%}.u-font-21{font-size:%?21?%}.u-font-22{font-size:%?22?%}.u-font-23{font-size:%?23?%}.u-font-24{font-size:%?24?%}.u-font-25{font-size:%?25?%}.u-font-26{font-size:%?26?%}.u-font-27{font-size:%?27?%}.u-font-28{font-size:%?28?%}.u-font-29{font-size:%?29?%}.u-font-30{font-size:%?30?%}.u-font-31{font-size:%?31?%}.u-font-32{font-size:%?32?%}.u-font-33{font-size:%?33?%}.u-font-34{font-size:%?34?%}.u-font-35{font-size:%?35?%}.u-font-36{font-size:%?36?%}.u-font-37{font-size:%?37?%}.u-font-38{font-size:%?38?%}.u-font-39{font-size:%?39?%}.u-font-40{font-size:%?40?%}.u-margin-0, .u-m-0{margin:%?0?%!important}.u-padding-0, .u-p-0{padding:%?0?%!important}.u-m-l-0{margin-left:%?0?%!important}.u-p-l-0{padding-left:%?0?%!important}.u-margin-left-0{margin-left:%?0?%!important}.u-padding-left-0{padding-left:%?0?%!important}.u-m-t-0{margin-top:%?0?%!important}.u-p-t-0{padding-top:%?0?%!important}.u-margin-top-0{margin-top:%?0?%!important}.u-padding-top-0{padding-top:%?0?%!important}.u-m-r-0{margin-right:%?0?%!important}.u-p-r-0{padding-right:%?0?%!important}.u-margin-right-0{margin-right:%?0?%!important}.u-padding-right-0{padding-right:%?0?%!important}.u-m-b-0{margin-bottom:%?0?%!important}.u-p-b-0{padding-bottom:%?0?%!important}.u-margin-bottom-0{margin-bottom:%?0?%!important}.u-padding-bottom-0{padding-bottom:%?0?%!important}.u-margin-2, .u-m-2{margin:%?2?%!important}.u-padding-2, .u-p-2{padding:%?2?%!important}.u-m-l-2{margin-left:%?2?%!important}.u-p-l-2{padding-left:%?2?%!important}.u-margin-left-2{margin-left:%?2?%!important}.u-padding-left-2{padding-left:%?2?%!important}.u-m-t-2{margin-top:%?2?%!important}.u-p-t-2{padding-top:%?2?%!important}.u-margin-top-2{margin-top:%?2?%!important}.u-padding-top-2{padding-top:%?2?%!important}.u-m-r-2{margin-right:%?2?%!important}.u-p-r-2{padding-right:%?2?%!important}.u-margin-right-2{margin-right:%?2?%!important}.u-padding-right-2{padding-right:%?2?%!important}.u-m-b-2{margin-bottom:%?2?%!important}.u-p-b-2{padding-bottom:%?2?%!important}.u-margin-bottom-2{margin-bottom:%?2?%!important}.u-padding-bottom-2{padding-bottom:%?2?%!important}.u-margin-4, .u-m-4{margin:%?4?%!important}.u-padding-4, .u-p-4{padding:%?4?%!important}.u-m-l-4{margin-left:%?4?%!important}.u-p-l-4{padding-left:%?4?%!important}.u-margin-left-4{margin-left:%?4?%!important}.u-padding-left-4{padding-left:%?4?%!important}.u-m-t-4{margin-top:%?4?%!important}.u-p-t-4{padding-top:%?4?%!important}.u-margin-top-4{margin-top:%?4?%!important}.u-padding-top-4{padding-top:%?4?%!important}.u-m-r-4{margin-right:%?4?%!important}.u-p-r-4{padding-right:%?4?%!important}.u-margin-right-4{margin-right:%?4?%!important}.u-padding-right-4{padding-right:%?4?%!important}.u-m-b-4{margin-bottom:%?4?%!important}.u-p-b-4{padding-bottom:%?4?%!important}.u-margin-bottom-4{margin-bottom:%?4?%!important}.u-padding-bottom-4{padding-bottom:%?4?%!important}.u-margin-5, .u-m-5{margin:%?5?%!important}.u-padding-5, .u-p-5{padding:%?5?%!important}.u-m-l-5{margin-left:%?5?%!important}.u-p-l-5{padding-left:%?5?%!important}.u-margin-left-5{margin-left:%?5?%!important}.u-padding-left-5{padding-left:%?5?%!important}.u-m-t-5{margin-top:%?5?%!important}.u-p-t-5{padding-top:%?5?%!important}.u-margin-top-5{margin-top:%?5?%!important}.u-padding-top-5{padding-top:%?5?%!important}.u-m-r-5{margin-right:%?5?%!important}.u-p-r-5{padding-right:%?5?%!important}.u-margin-right-5{margin-right:%?5?%!important}.u-padding-right-5{padding-right:%?5?%!important}.u-m-b-5{margin-bottom:%?5?%!important}.u-p-b-5{padding-bottom:%?5?%!important}.u-margin-bottom-5{margin-bottom:%?5?%!important}.u-padding-bottom-5{padding-bottom:%?5?%!important}.u-margin-6, .u-m-6{margin:%?6?%!important}.u-padding-6, .u-p-6{padding:%?6?%!important}.u-m-l-6{margin-left:%?6?%!important}.u-p-l-6{padding-left:%?6?%!important}.u-margin-left-6{margin-left:%?6?%!important}.u-padding-left-6{padding-left:%?6?%!important}.u-m-t-6{margin-top:%?6?%!important}.u-p-t-6{padding-top:%?6?%!important}.u-margin-top-6{margin-top:%?6?%!important}.u-padding-top-6{padding-top:%?6?%!important}.u-m-r-6{margin-right:%?6?%!important}.u-p-r-6{padding-right:%?6?%!important}.u-margin-right-6{margin-right:%?6?%!important}.u-padding-right-6{padding-right:%?6?%!important}.u-m-b-6{margin-bottom:%?6?%!important}.u-p-b-6{padding-bottom:%?6?%!important}.u-margin-bottom-6{margin-bottom:%?6?%!important}.u-padding-bottom-6{padding-bottom:%?6?%!important}.u-margin-8, .u-m-8{margin:%?8?%!important}.u-padding-8, .u-p-8{padding:%?8?%!important}.u-m-l-8{margin-left:%?8?%!important}.u-p-l-8{padding-left:%?8?%!important}.u-margin-left-8{margin-left:%?8?%!important}.u-padding-left-8{padding-left:%?8?%!important}.u-m-t-8{margin-top:%?8?%!important}.u-p-t-8{padding-top:%?8?%!important}.u-margin-top-8{margin-top:%?8?%!important}.u-padding-top-8{padding-top:%?8?%!important}.u-m-r-8{margin-right:%?8?%!important}.u-p-r-8{padding-right:%?8?%!important}.u-margin-right-8{margin-right:%?8?%!important}.u-padding-right-8{padding-right:%?8?%!important}.u-m-b-8{margin-bottom:%?8?%!important}.u-p-b-8{padding-bottom:%?8?%!important}.u-margin-bottom-8{margin-bottom:%?8?%!important}.u-padding-bottom-8{padding-bottom:%?8?%!important}.u-margin-10, .u-m-10{margin:%?10?%!important}.u-padding-10, .u-p-10{padding:%?10?%!important}.u-m-l-10{margin-left:%?10?%!important}.u-p-l-10{padding-left:%?10?%!important}.u-margin-left-10{margin-left:%?10?%!important}.u-padding-left-10{padding-left:%?10?%!important}.u-m-t-10{margin-top:%?10?%!important}.u-p-t-10{padding-top:%?10?%!important}.u-margin-top-10{margin-top:%?10?%!important}.u-padding-top-10{padding-top:%?10?%!important}.u-m-r-10{margin-right:%?10?%!important}.u-p-r-10{padding-right:%?10?%!important}.u-margin-right-10{margin-right:%?10?%!important}.u-padding-right-10{padding-right:%?10?%!important}.u-m-b-10{margin-bottom:%?10?%!important}.u-p-b-10{padding-bottom:%?10?%!important}.u-margin-bottom-10{margin-bottom:%?10?%!important}.u-padding-bottom-10{padding-bottom:%?10?%!important}.u-margin-12, .u-m-12{margin:%?12?%!important}.u-padding-12, .u-p-12{padding:%?12?%!important}.u-m-l-12{margin-left:%?12?%!important}.u-p-l-12{padding-left:%?12?%!important}.u-margin-left-12{margin-left:%?12?%!important}.u-padding-left-12{padding-left:%?12?%!important}.u-m-t-12{margin-top:%?12?%!important}.u-p-t-12{padding-top:%?12?%!important}.u-margin-top-12{margin-top:%?12?%!important}.u-padding-top-12{padding-top:%?12?%!important}.u-m-r-12{margin-right:%?12?%!important}.u-p-r-12{padding-right:%?12?%!important}.u-margin-right-12{margin-right:%?12?%!important}.u-padding-right-12{padding-right:%?12?%!important}.u-m-b-12{margin-bottom:%?12?%!important}.u-p-b-12{padding-bottom:%?12?%!important}.u-margin-bottom-12{margin-bottom:%?12?%!important}.u-padding-bottom-12{padding-bottom:%?12?%!important}.u-margin-14, .u-m-14{margin:%?14?%!important}.u-padding-14, .u-p-14{padding:%?14?%!important}.u-m-l-14{margin-left:%?14?%!important}.u-p-l-14{padding-left:%?14?%!important}.u-margin-left-14{margin-left:%?14?%!important}.u-padding-left-14{padding-left:%?14?%!important}.u-m-t-14{margin-top:%?14?%!important}.u-p-t-14{padding-top:%?14?%!important}.u-margin-top-14{margin-top:%?14?%!important}.u-padding-top-14{padding-top:%?14?%!important}.u-m-r-14{margin-right:%?14?%!important}.u-p-r-14{padding-right:%?14?%!important}.u-margin-right-14{margin-right:%?14?%!important}.u-padding-right-14{padding-right:%?14?%!important}.u-m-b-14{margin-bottom:%?14?%!important}.u-p-b-14{padding-bottom:%?14?%!important}.u-margin-bottom-14{margin-bottom:%?14?%!important}.u-padding-bottom-14{padding-bottom:%?14?%!important}.u-margin-15, .u-m-15{margin:%?15?%!important}.u-padding-15, .u-p-15{padding:%?15?%!important}.u-m-l-15{margin-left:%?15?%!important}.u-p-l-15{padding-left:%?15?%!important}.u-margin-left-15{margin-left:%?15?%!important}.u-padding-left-15{padding-left:%?15?%!important}.u-m-t-15{margin-top:%?15?%!important}.u-p-t-15{padding-top:%?15?%!important}.u-margin-top-15{margin-top:%?15?%!important}.u-padding-top-15{padding-top:%?15?%!important}.u-m-r-15{margin-right:%?15?%!important}.u-p-r-15{padding-right:%?15?%!important}.u-margin-right-15{margin-right:%?15?%!important}.u-padding-right-15{padding-right:%?15?%!important}.u-m-b-15{margin-bottom:%?15?%!important}.u-p-b-15{padding-bottom:%?15?%!important}.u-margin-bottom-15{margin-bottom:%?15?%!important}.u-padding-bottom-15{padding-bottom:%?15?%!important}.u-margin-16, .u-m-16{margin:%?16?%!important}.u-padding-16, .u-p-16{padding:%?16?%!important}.u-m-l-16{margin-left:%?16?%!important}.u-p-l-16{padding-left:%?16?%!important}.u-margin-left-16{margin-left:%?16?%!important}.u-padding-left-16{padding-left:%?16?%!important}.u-m-t-16{margin-top:%?16?%!important}.u-p-t-16{padding-top:%?16?%!important}.u-margin-top-16{margin-top:%?16?%!important}.u-padding-top-16{padding-top:%?16?%!important}.u-m-r-16{margin-right:%?16?%!important}.u-p-r-16{padding-right:%?16?%!important}.u-margin-right-16{margin-right:%?16?%!important}.u-padding-right-16{padding-right:%?16?%!important}.u-m-b-16{margin-bottom:%?16?%!important}.u-p-b-16{padding-bottom:%?16?%!important}.u-margin-bottom-16{margin-bottom:%?16?%!important}.u-padding-bottom-16{padding-bottom:%?16?%!important}.u-margin-18, .u-m-18{margin:%?18?%!important}.u-padding-18, .u-p-18{padding:%?18?%!important}.u-m-l-18{margin-left:%?18?%!important}.u-p-l-18{padding-left:%?18?%!important}.u-margin-left-18{margin-left:%?18?%!important}.u-padding-left-18{padding-left:%?18?%!important}.u-m-t-18{margin-top:%?18?%!important}.u-p-t-18{padding-top:%?18?%!important}.u-margin-top-18{margin-top:%?18?%!important}.u-padding-top-18{padding-top:%?18?%!important}.u-m-r-18{margin-right:%?18?%!important}.u-p-r-18{padding-right:%?18?%!important}.u-margin-right-18{margin-right:%?18?%!important}.u-padding-right-18{padding-right:%?18?%!important}.u-m-b-18{margin-bottom:%?18?%!important}.u-p-b-18{padding-bottom:%?18?%!important}.u-margin-bottom-18{margin-bottom:%?18?%!important}.u-padding-bottom-18{padding-bottom:%?18?%!important}.u-margin-20, .u-m-20{margin:%?20?%!important}.u-padding-20, .u-p-20{padding:%?20?%!important}.u-m-l-20{margin-left:%?20?%!important}.u-p-l-20{padding-left:%?20?%!important}.u-margin-left-20{margin-left:%?20?%!important}.u-padding-left-20{padding-left:%?20?%!important}.u-m-t-20{margin-top:%?20?%!important}.u-p-t-20{padding-top:%?20?%!important}.u-margin-top-20{margin-top:%?20?%!important}.u-padding-top-20{padding-top:%?20?%!important}.u-m-r-20{margin-right:%?20?%!important}.u-p-r-20{padding-right:%?20?%!important}.u-margin-right-20{margin-right:%?20?%!important}.u-padding-right-20{padding-right:%?20?%!important}.u-m-b-20{margin-bottom:%?20?%!important}.u-p-b-20{padding-bottom:%?20?%!important}.u-margin-bottom-20{margin-bottom:%?20?%!important}.u-padding-bottom-20{padding-bottom:%?20?%!important}.u-margin-22, .u-m-22{margin:%?22?%!important}.u-padding-22, .u-p-22{padding:%?22?%!important}.u-m-l-22{margin-left:%?22?%!important}.u-p-l-22{padding-left:%?22?%!important}.u-margin-left-22{margin-left:%?22?%!important}.u-padding-left-22{padding-left:%?22?%!important}.u-m-t-22{margin-top:%?22?%!important}.u-p-t-22{padding-top:%?22?%!important}.u-margin-top-22{margin-top:%?22?%!important}.u-padding-top-22{padding-top:%?22?%!important}.u-m-r-22{margin-right:%?22?%!important}.u-p-r-22{padding-right:%?22?%!important}.u-margin-right-22{margin-right:%?22?%!important}.u-padding-right-22{padding-right:%?22?%!important}.u-m-b-22{margin-bottom:%?22?%!important}.u-p-b-22{padding-bottom:%?22?%!important}.u-margin-bottom-22{margin-bottom:%?22?%!important}.u-padding-bottom-22{padding-bottom:%?22?%!important}.u-margin-24, .u-m-24{margin:%?24?%!important}.u-padding-24, .u-p-24{padding:%?24?%!important}.u-m-l-24{margin-left:%?24?%!important}.u-p-l-24{padding-left:%?24?%!important}.u-margin-left-24{margin-left:%?24?%!important}.u-padding-left-24{padding-left:%?24?%!important}.u-m-t-24{margin-top:%?24?%!important}.u-p-t-24{padding-top:%?24?%!important}.u-margin-top-24{margin-top:%?24?%!important}.u-padding-top-24{padding-top:%?24?%!important}.u-m-r-24{margin-right:%?24?%!important}.u-p-r-24{padding-right:%?24?%!important}.u-margin-right-24{margin-right:%?24?%!important}.u-padding-right-24{padding-right:%?24?%!important}.u-m-b-24{margin-bottom:%?24?%!important}.u-p-b-24{padding-bottom:%?24?%!important}.u-margin-bottom-24{margin-bottom:%?24?%!important}.u-padding-bottom-24{padding-bottom:%?24?%!important}.u-margin-25, .u-m-25{margin:%?25?%!important}.u-padding-25, .u-p-25{padding:%?25?%!important}.u-m-l-25{margin-left:%?25?%!important}.u-p-l-25{padding-left:%?25?%!important}.u-margin-left-25{margin-left:%?25?%!important}.u-padding-left-25{padding-left:%?25?%!important}.u-m-t-25{margin-top:%?25?%!important}.u-p-t-25{padding-top:%?25?%!important}.u-margin-top-25{margin-top:%?25?%!important}.u-padding-top-25{padding-top:%?25?%!important}.u-m-r-25{margin-right:%?25?%!important}.u-p-r-25{padding-right:%?25?%!important}.u-margin-right-25{margin-right:%?25?%!important}.u-padding-right-25{padding-right:%?25?%!important}.u-m-b-25{margin-bottom:%?25?%!important}.u-p-b-25{padding-bottom:%?25?%!important}.u-margin-bottom-25{margin-bottom:%?25?%!important}.u-padding-bottom-25{padding-bottom:%?25?%!important}.u-margin-26, .u-m-26{margin:%?26?%!important}.u-padding-26, .u-p-26{padding:%?26?%!important}.u-m-l-26{margin-left:%?26?%!important}.u-p-l-26{padding-left:%?26?%!important}.u-margin-left-26{margin-left:%?26?%!important}.u-padding-left-26{padding-left:%?26?%!important}.u-m-t-26{margin-top:%?26?%!important}.u-p-t-26{padding-top:%?26?%!important}.u-margin-top-26{margin-top:%?26?%!important}.u-padding-top-26{padding-top:%?26?%!important}.u-m-r-26{margin-right:%?26?%!important}.u-p-r-26{padding-right:%?26?%!important}.u-margin-right-26{margin-right:%?26?%!important}.u-padding-right-26{padding-right:%?26?%!important}.u-m-b-26{margin-bottom:%?26?%!important}.u-p-b-26{padding-bottom:%?26?%!important}.u-margin-bottom-26{margin-bottom:%?26?%!important}.u-padding-bottom-26{padding-bottom:%?26?%!important}.u-margin-28, .u-m-28{margin:%?28?%!important}.u-padding-28, .u-p-28{padding:%?28?%!important}.u-m-l-28{margin-left:%?28?%!important}.u-p-l-28{padding-left:%?28?%!important}.u-margin-left-28{margin-left:%?28?%!important}.u-padding-left-28{padding-left:%?28?%!important}.u-m-t-28{margin-top:%?28?%!important}.u-p-t-28{padding-top:%?28?%!important}.u-margin-top-28{margin-top:%?28?%!important}.u-padding-top-28{padding-top:%?28?%!important}.u-m-r-28{margin-right:%?28?%!important}.u-p-r-28{padding-right:%?28?%!important}.u-margin-right-28{margin-right:%?28?%!important}.u-padding-right-28{padding-right:%?28?%!important}.u-m-b-28{margin-bottom:%?28?%!important}.u-p-b-28{padding-bottom:%?28?%!important}.u-margin-bottom-28{margin-bottom:%?28?%!important}.u-padding-bottom-28{padding-bottom:%?28?%!important}.u-margin-30, .u-m-30{margin:%?30?%!important}.u-padding-30, .u-p-30{padding:%?30?%!important}.u-m-l-30{margin-left:%?30?%!important}.u-p-l-30{padding-left:%?30?%!important}.u-margin-left-30{margin-left:%?30?%!important}.u-padding-left-30{padding-left:%?30?%!important}.u-m-t-30{margin-top:%?30?%!important}.u-p-t-30{padding-top:%?30?%!important}.u-margin-top-30{margin-top:%?30?%!important}.u-padding-top-30{padding-top:%?30?%!important}.u-m-r-30{margin-right:%?30?%!important}.u-p-r-30{padding-right:%?30?%!important}.u-margin-right-30{margin-right:%?30?%!important}.u-padding-right-30{padding-right:%?30?%!important}.u-m-b-30{margin-bottom:%?30?%!important}.u-p-b-30{padding-bottom:%?30?%!important}.u-margin-bottom-30{margin-bottom:%?30?%!important}.u-padding-bottom-30{padding-bottom:%?30?%!important}.u-margin-32, .u-m-32{margin:%?32?%!important}.u-padding-32, .u-p-32{padding:%?32?%!important}.u-m-l-32{margin-left:%?32?%!important}.u-p-l-32{padding-left:%?32?%!important}.u-margin-left-32{margin-left:%?32?%!important}.u-padding-left-32{padding-left:%?32?%!important}.u-m-t-32{margin-top:%?32?%!important}.u-p-t-32{padding-top:%?32?%!important}.u-margin-top-32{margin-top:%?32?%!important}.u-padding-top-32{padding-top:%?32?%!important}.u-m-r-32{margin-right:%?32?%!important}.u-p-r-32{padding-right:%?32?%!important}.u-margin-right-32{margin-right:%?32?%!important}.u-padding-right-32{padding-right:%?32?%!important}.u-m-b-32{margin-bottom:%?32?%!important}.u-p-b-32{padding-bottom:%?32?%!important}.u-margin-bottom-32{margin-bottom:%?32?%!important}.u-padding-bottom-32{padding-bottom:%?32?%!important}.u-margin-34, .u-m-34{margin:%?34?%!important}.u-padding-34, .u-p-34{padding:%?34?%!important}.u-m-l-34{margin-left:%?34?%!important}.u-p-l-34{padding-left:%?34?%!important}.u-margin-left-34{margin-left:%?34?%!important}.u-padding-left-34{padding-left:%?34?%!important}.u-m-t-34{margin-top:%?34?%!important}.u-p-t-34{padding-top:%?34?%!important}.u-margin-top-34{margin-top:%?34?%!important}.u-padding-top-34{padding-top:%?34?%!important}.u-m-r-34{margin-right:%?34?%!important}.u-p-r-34{padding-right:%?34?%!important}.u-margin-right-34{margin-right:%?34?%!important}.u-padding-right-34{padding-right:%?34?%!important}.u-m-b-34{margin-bottom:%?34?%!important}.u-p-b-34{padding-bottom:%?34?%!important}.u-margin-bottom-34{margin-bottom:%?34?%!important}.u-padding-bottom-34{padding-bottom:%?34?%!important}.u-margin-35, .u-m-35{margin:%?35?%!important}.u-padding-35, .u-p-35{padding:%?35?%!important}.u-m-l-35{margin-left:%?35?%!important}.u-p-l-35{padding-left:%?35?%!important}.u-margin-left-35{margin-left:%?35?%!important}.u-padding-left-35{padding-left:%?35?%!important}.u-m-t-35{margin-top:%?35?%!important}.u-p-t-35{padding-top:%?35?%!important}.u-margin-top-35{margin-top:%?35?%!important}.u-padding-top-35{padding-top:%?35?%!important}.u-m-r-35{margin-right:%?35?%!important}.u-p-r-35{padding-right:%?35?%!important}.u-margin-right-35{margin-right:%?35?%!important}.u-padding-right-35{padding-right:%?35?%!important}.u-m-b-35{margin-bottom:%?35?%!important}.u-p-b-35{padding-bottom:%?35?%!important}.u-margin-bottom-35{margin-bottom:%?35?%!important}.u-padding-bottom-35{padding-bottom:%?35?%!important}.u-margin-36, .u-m-36{margin:%?36?%!important}.u-padding-36, .u-p-36{padding:%?36?%!important}.u-m-l-36{margin-left:%?36?%!important}.u-p-l-36{padding-left:%?36?%!important}.u-margin-left-36{margin-left:%?36?%!important}.u-padding-left-36{padding-left:%?36?%!important}.u-m-t-36{margin-top:%?36?%!important}.u-p-t-36{padding-top:%?36?%!important}.u-margin-top-36{margin-top:%?36?%!important}.u-padding-top-36{padding-top:%?36?%!important}.u-m-r-36{margin-right:%?36?%!important}.u-p-r-36{padding-right:%?36?%!important}.u-margin-right-36{margin-right:%?36?%!important}.u-padding-right-36{padding-right:%?36?%!important}.u-m-b-36{margin-bottom:%?36?%!important}.u-p-b-36{padding-bottom:%?36?%!important}.u-margin-bottom-36{margin-bottom:%?36?%!important}.u-padding-bottom-36{padding-bottom:%?36?%!important}.u-margin-38, .u-m-38{margin:%?38?%!important}.u-padding-38, .u-p-38{padding:%?38?%!important}.u-m-l-38{margin-left:%?38?%!important}.u-p-l-38{padding-left:%?38?%!important}.u-margin-left-38{margin-left:%?38?%!important}.u-padding-left-38{padding-left:%?38?%!important}.u-m-t-38{margin-top:%?38?%!important}.u-p-t-38{padding-top:%?38?%!important}.u-margin-top-38{margin-top:%?38?%!important}.u-padding-top-38{padding-top:%?38?%!important}.u-m-r-38{margin-right:%?38?%!important}.u-p-r-38{padding-right:%?38?%!important}.u-margin-right-38{margin-right:%?38?%!important}.u-padding-right-38{padding-right:%?38?%!important}.u-m-b-38{margin-bottom:%?38?%!important}.u-p-b-38{padding-bottom:%?38?%!important}.u-margin-bottom-38{margin-bottom:%?38?%!important}.u-padding-bottom-38{padding-bottom:%?38?%!important}.u-margin-40, .u-m-40{margin:%?40?%!important}.u-padding-40, .u-p-40{padding:%?40?%!important}.u-m-l-40{margin-left:%?40?%!important}.u-p-l-40{padding-left:%?40?%!important}.u-margin-left-40{margin-left:%?40?%!important}.u-padding-left-40{padding-left:%?40?%!important}.u-m-t-40{margin-top:%?40?%!important}.u-p-t-40{padding-top:%?40?%!important}.u-margin-top-40{margin-top:%?40?%!important}.u-padding-top-40{padding-top:%?40?%!important}.u-m-r-40{margin-right:%?40?%!important}.u-p-r-40{padding-right:%?40?%!important}.u-margin-right-40{margin-right:%?40?%!important}.u-padding-right-40{padding-right:%?40?%!important}.u-m-b-40{margin-bottom:%?40?%!important}.u-p-b-40{padding-bottom:%?40?%!important}.u-margin-bottom-40{margin-bottom:%?40?%!important}.u-padding-bottom-40{padding-bottom:%?40?%!important}.u-margin-42, .u-m-42{margin:%?42?%!important}.u-padding-42, .u-p-42{padding:%?42?%!important}.u-m-l-42{margin-left:%?42?%!important}.u-p-l-42{padding-left:%?42?%!important}.u-margin-left-42{margin-left:%?42?%!important}.u-padding-left-42{padding-left:%?42?%!important}.u-m-t-42{margin-top:%?42?%!important}.u-p-t-42{padding-top:%?42?%!important}.u-margin-top-42{margin-top:%?42?%!important}.u-padding-top-42{padding-top:%?42?%!important}.u-m-r-42{margin-right:%?42?%!important}.u-p-r-42{padding-right:%?42?%!important}.u-margin-right-42{margin-right:%?42?%!important}.u-padding-right-42{padding-right:%?42?%!important}.u-m-b-42{margin-bottom:%?42?%!important}.u-p-b-42{padding-bottom:%?42?%!important}.u-margin-bottom-42{margin-bottom:%?42?%!important}.u-padding-bottom-42{padding-bottom:%?42?%!important}.u-margin-44, .u-m-44{margin:%?44?%!important}.u-padding-44, .u-p-44{padding:%?44?%!important}.u-m-l-44{margin-left:%?44?%!important}.u-p-l-44{padding-left:%?44?%!important}.u-margin-left-44{margin-left:%?44?%!important}.u-padding-left-44{padding-left:%?44?%!important}.u-m-t-44{margin-top:%?44?%!important}.u-p-t-44{padding-top:%?44?%!important}.u-margin-top-44{margin-top:%?44?%!important}.u-padding-top-44{padding-top:%?44?%!important}.u-m-r-44{margin-right:%?44?%!important}.u-p-r-44{padding-right:%?44?%!important}.u-margin-right-44{margin-right:%?44?%!important}.u-padding-right-44{padding-right:%?44?%!important}.u-m-b-44{margin-bottom:%?44?%!important}.u-p-b-44{padding-bottom:%?44?%!important}.u-margin-bottom-44{margin-bottom:%?44?%!important}.u-padding-bottom-44{padding-bottom:%?44?%!important}.u-margin-45, .u-m-45{margin:%?45?%!important}.u-padding-45, .u-p-45{padding:%?45?%!important}.u-m-l-45{margin-left:%?45?%!important}.u-p-l-45{padding-left:%?45?%!important}.u-margin-left-45{margin-left:%?45?%!important}.u-padding-left-45{padding-left:%?45?%!important}.u-m-t-45{margin-top:%?45?%!important}.u-p-t-45{padding-top:%?45?%!important}.u-margin-top-45{margin-top:%?45?%!important}.u-padding-top-45{padding-top:%?45?%!important}.u-m-r-45{margin-right:%?45?%!important}.u-p-r-45{padding-right:%?45?%!important}.u-margin-right-45{margin-right:%?45?%!important}.u-padding-right-45{padding-right:%?45?%!important}.u-m-b-45{margin-bottom:%?45?%!important}.u-p-b-45{padding-bottom:%?45?%!important}.u-margin-bottom-45{margin-bottom:%?45?%!important}.u-padding-bottom-45{padding-bottom:%?45?%!important}.u-margin-46, .u-m-46{margin:%?46?%!important}.u-padding-46, .u-p-46{padding:%?46?%!important}.u-m-l-46{margin-left:%?46?%!important}.u-p-l-46{padding-left:%?46?%!important}.u-margin-left-46{margin-left:%?46?%!important}.u-padding-left-46{padding-left:%?46?%!important}.u-m-t-46{margin-top:%?46?%!important}.u-p-t-46{padding-top:%?46?%!important}.u-margin-top-46{margin-top:%?46?%!important}.u-padding-top-46{padding-top:%?46?%!important}.u-m-r-46{margin-right:%?46?%!important}.u-p-r-46{padding-right:%?46?%!important}.u-margin-right-46{margin-right:%?46?%!important}.u-padding-right-46{padding-right:%?46?%!important}.u-m-b-46{margin-bottom:%?46?%!important}.u-p-b-46{padding-bottom:%?46?%!important}.u-margin-bottom-46{margin-bottom:%?46?%!important}.u-padding-bottom-46{padding-bottom:%?46?%!important}.u-margin-48, .u-m-48{margin:%?48?%!important}.u-padding-48, .u-p-48{padding:%?48?%!important}.u-m-l-48{margin-left:%?48?%!important}.u-p-l-48{padding-left:%?48?%!important}.u-margin-left-48{margin-left:%?48?%!important}.u-padding-left-48{padding-left:%?48?%!important}.u-m-t-48{margin-top:%?48?%!important}.u-p-t-48{padding-top:%?48?%!important}.u-margin-top-48{margin-top:%?48?%!important}.u-padding-top-48{padding-top:%?48?%!important}.u-m-r-48{margin-right:%?48?%!important}.u-p-r-48{padding-right:%?48?%!important}.u-margin-right-48{margin-right:%?48?%!important}.u-padding-right-48{padding-right:%?48?%!important}.u-m-b-48{margin-bottom:%?48?%!important}.u-p-b-48{padding-bottom:%?48?%!important}.u-margin-bottom-48{margin-bottom:%?48?%!important}.u-padding-bottom-48{padding-bottom:%?48?%!important}.u-margin-50, .u-m-50{margin:%?50?%!important}.u-padding-50, .u-p-50{padding:%?50?%!important}.u-m-l-50{margin-left:%?50?%!important}.u-p-l-50{padding-left:%?50?%!important}.u-margin-left-50{margin-left:%?50?%!important}.u-padding-left-50{padding-left:%?50?%!important}.u-m-t-50{margin-top:%?50?%!important}.u-p-t-50{padding-top:%?50?%!important}.u-margin-top-50{margin-top:%?50?%!important}.u-padding-top-50{padding-top:%?50?%!important}.u-m-r-50{margin-right:%?50?%!important}.u-p-r-50{padding-right:%?50?%!important}.u-margin-right-50{margin-right:%?50?%!important}.u-padding-right-50{padding-right:%?50?%!important}.u-m-b-50{margin-bottom:%?50?%!important}.u-p-b-50{padding-bottom:%?50?%!important}.u-margin-bottom-50{margin-bottom:%?50?%!important}.u-padding-bottom-50{padding-bottom:%?50?%!important}.u-margin-52, .u-m-52{margin:%?52?%!important}.u-padding-52, .u-p-52{padding:%?52?%!important}.u-m-l-52{margin-left:%?52?%!important}.u-p-l-52{padding-left:%?52?%!important}.u-margin-left-52{margin-left:%?52?%!important}.u-padding-left-52{padding-left:%?52?%!important}.u-m-t-52{margin-top:%?52?%!important}.u-p-t-52{padding-top:%?52?%!important}.u-margin-top-52{margin-top:%?52?%!important}.u-padding-top-52{padding-top:%?52?%!important}.u-m-r-52{margin-right:%?52?%!important}.u-p-r-52{padding-right:%?52?%!important}.u-margin-right-52{margin-right:%?52?%!important}.u-padding-right-52{padding-right:%?52?%!important}.u-m-b-52{margin-bottom:%?52?%!important}.u-p-b-52{padding-bottom:%?52?%!important}.u-margin-bottom-52{margin-bottom:%?52?%!important}.u-padding-bottom-52{padding-bottom:%?52?%!important}.u-margin-54, .u-m-54{margin:%?54?%!important}.u-padding-54, .u-p-54{padding:%?54?%!important}.u-m-l-54{margin-left:%?54?%!important}.u-p-l-54{padding-left:%?54?%!important}.u-margin-left-54{margin-left:%?54?%!important}.u-padding-left-54{padding-left:%?54?%!important}.u-m-t-54{margin-top:%?54?%!important}.u-p-t-54{padding-top:%?54?%!important}.u-margin-top-54{margin-top:%?54?%!important}.u-padding-top-54{padding-top:%?54?%!important}.u-m-r-54{margin-right:%?54?%!important}.u-p-r-54{padding-right:%?54?%!important}.u-margin-right-54{margin-right:%?54?%!important}.u-padding-right-54{padding-right:%?54?%!important}.u-m-b-54{margin-bottom:%?54?%!important}.u-p-b-54{padding-bottom:%?54?%!important}.u-margin-bottom-54{margin-bottom:%?54?%!important}.u-padding-bottom-54{padding-bottom:%?54?%!important}.u-margin-55, .u-m-55{margin:%?55?%!important}.u-padding-55, .u-p-55{padding:%?55?%!important}.u-m-l-55{margin-left:%?55?%!important}.u-p-l-55{padding-left:%?55?%!important}.u-margin-left-55{margin-left:%?55?%!important}.u-padding-left-55{padding-left:%?55?%!important}.u-m-t-55{margin-top:%?55?%!important}.u-p-t-55{padding-top:%?55?%!important}.u-margin-top-55{margin-top:%?55?%!important}.u-padding-top-55{padding-top:%?55?%!important}.u-m-r-55{margin-right:%?55?%!important}.u-p-r-55{padding-right:%?55?%!important}.u-margin-right-55{margin-right:%?55?%!important}.u-padding-right-55{padding-right:%?55?%!important}.u-m-b-55{margin-bottom:%?55?%!important}.u-p-b-55{padding-bottom:%?55?%!important}.u-margin-bottom-55{margin-bottom:%?55?%!important}.u-padding-bottom-55{padding-bottom:%?55?%!important}.u-margin-56, .u-m-56{margin:%?56?%!important}.u-padding-56, .u-p-56{padding:%?56?%!important}.u-m-l-56{margin-left:%?56?%!important}.u-p-l-56{padding-left:%?56?%!important}.u-margin-left-56{margin-left:%?56?%!important}.u-padding-left-56{padding-left:%?56?%!important}.u-m-t-56{margin-top:%?56?%!important}.u-p-t-56{padding-top:%?56?%!important}.u-margin-top-56{margin-top:%?56?%!important}.u-padding-top-56{padding-top:%?56?%!important}.u-m-r-56{margin-right:%?56?%!important}.u-p-r-56{padding-right:%?56?%!important}.u-margin-right-56{margin-right:%?56?%!important}.u-padding-right-56{padding-right:%?56?%!important}.u-m-b-56{margin-bottom:%?56?%!important}.u-p-b-56{padding-bottom:%?56?%!important}.u-margin-bottom-56{margin-bottom:%?56?%!important}.u-padding-bottom-56{padding-bottom:%?56?%!important}.u-margin-58, .u-m-58{margin:%?58?%!important}.u-padding-58, .u-p-58{padding:%?58?%!important}.u-m-l-58{margin-left:%?58?%!important}.u-p-l-58{padding-left:%?58?%!important}.u-margin-left-58{margin-left:%?58?%!important}.u-padding-left-58{padding-left:%?58?%!important}.u-m-t-58{margin-top:%?58?%!important}.u-p-t-58{padding-top:%?58?%!important}.u-margin-top-58{margin-top:%?58?%!important}.u-padding-top-58{padding-top:%?58?%!important}.u-m-r-58{margin-right:%?58?%!important}.u-p-r-58{padding-right:%?58?%!important}.u-margin-right-58{margin-right:%?58?%!important}.u-padding-right-58{padding-right:%?58?%!important}.u-m-b-58{margin-bottom:%?58?%!important}.u-p-b-58{padding-bottom:%?58?%!important}.u-margin-bottom-58{margin-bottom:%?58?%!important}.u-padding-bottom-58{padding-bottom:%?58?%!important}.u-margin-60, .u-m-60{margin:%?60?%!important}.u-padding-60, .u-p-60{padding:%?60?%!important}.u-m-l-60{margin-left:%?60?%!important}.u-p-l-60{padding-left:%?60?%!important}.u-margin-left-60{margin-left:%?60?%!important}.u-padding-left-60{padding-left:%?60?%!important}.u-m-t-60{margin-top:%?60?%!important}.u-p-t-60{padding-top:%?60?%!important}.u-margin-top-60{margin-top:%?60?%!important}.u-padding-top-60{padding-top:%?60?%!important}.u-m-r-60{margin-right:%?60?%!important}.u-p-r-60{padding-right:%?60?%!important}.u-margin-right-60{margin-right:%?60?%!important}.u-padding-right-60{padding-right:%?60?%!important}.u-m-b-60{margin-bottom:%?60?%!important}.u-p-b-60{padding-bottom:%?60?%!important}.u-margin-bottom-60{margin-bottom:%?60?%!important}.u-padding-bottom-60{padding-bottom:%?60?%!important}.u-margin-62, .u-m-62{margin:%?62?%!important}.u-padding-62, .u-p-62{padding:%?62?%!important}.u-m-l-62{margin-left:%?62?%!important}.u-p-l-62{padding-left:%?62?%!important}.u-margin-left-62{margin-left:%?62?%!important}.u-padding-left-62{padding-left:%?62?%!important}.u-m-t-62{margin-top:%?62?%!important}.u-p-t-62{padding-top:%?62?%!important}.u-margin-top-62{margin-top:%?62?%!important}.u-padding-top-62{padding-top:%?62?%!important}.u-m-r-62{margin-right:%?62?%!important}.u-p-r-62{padding-right:%?62?%!important}.u-margin-right-62{margin-right:%?62?%!important}.u-padding-right-62{padding-right:%?62?%!important}.u-m-b-62{margin-bottom:%?62?%!important}.u-p-b-62{padding-bottom:%?62?%!important}.u-margin-bottom-62{margin-bottom:%?62?%!important}.u-padding-bottom-62{padding-bottom:%?62?%!important}.u-margin-64, .u-m-64{margin:%?64?%!important}.u-padding-64, .u-p-64{padding:%?64?%!important}.u-m-l-64{margin-left:%?64?%!important}.u-p-l-64{padding-left:%?64?%!important}.u-margin-left-64{margin-left:%?64?%!important}.u-padding-left-64{padding-left:%?64?%!important}.u-m-t-64{margin-top:%?64?%!important}.u-p-t-64{padding-top:%?64?%!important}.u-margin-top-64{margin-top:%?64?%!important}.u-padding-top-64{padding-top:%?64?%!important}.u-m-r-64{margin-right:%?64?%!important}.u-p-r-64{padding-right:%?64?%!important}.u-margin-right-64{margin-right:%?64?%!important}.u-padding-right-64{padding-right:%?64?%!important}.u-m-b-64{margin-bottom:%?64?%!important}.u-p-b-64{padding-bottom:%?64?%!important}.u-margin-bottom-64{margin-bottom:%?64?%!important}.u-padding-bottom-64{padding-bottom:%?64?%!important}.u-margin-65, .u-m-65{margin:%?65?%!important}.u-padding-65, .u-p-65{padding:%?65?%!important}.u-m-l-65{margin-left:%?65?%!important}.u-p-l-65{padding-left:%?65?%!important}.u-margin-left-65{margin-left:%?65?%!important}.u-padding-left-65{padding-left:%?65?%!important}.u-m-t-65{margin-top:%?65?%!important}.u-p-t-65{padding-top:%?65?%!important}.u-margin-top-65{margin-top:%?65?%!important}.u-padding-top-65{padding-top:%?65?%!important}.u-m-r-65{margin-right:%?65?%!important}.u-p-r-65{padding-right:%?65?%!important}.u-margin-right-65{margin-right:%?65?%!important}.u-padding-right-65{padding-right:%?65?%!important}.u-m-b-65{margin-bottom:%?65?%!important}.u-p-b-65{padding-bottom:%?65?%!important}.u-margin-bottom-65{margin-bottom:%?65?%!important}.u-padding-bottom-65{padding-bottom:%?65?%!important}.u-margin-66, .u-m-66{margin:%?66?%!important}.u-padding-66, .u-p-66{padding:%?66?%!important}.u-m-l-66{margin-left:%?66?%!important}.u-p-l-66{padding-left:%?66?%!important}.u-margin-left-66{margin-left:%?66?%!important}.u-padding-left-66{padding-left:%?66?%!important}.u-m-t-66{margin-top:%?66?%!important}.u-p-t-66{padding-top:%?66?%!important}.u-margin-top-66{margin-top:%?66?%!important}.u-padding-top-66{padding-top:%?66?%!important}.u-m-r-66{margin-right:%?66?%!important}.u-p-r-66{padding-right:%?66?%!important}.u-margin-right-66{margin-right:%?66?%!important}.u-padding-right-66{padding-right:%?66?%!important}.u-m-b-66{margin-bottom:%?66?%!important}.u-p-b-66{padding-bottom:%?66?%!important}.u-margin-bottom-66{margin-bottom:%?66?%!important}.u-padding-bottom-66{padding-bottom:%?66?%!important}.u-margin-68, .u-m-68{margin:%?68?%!important}.u-padding-68, .u-p-68{padding:%?68?%!important}.u-m-l-68{margin-left:%?68?%!important}.u-p-l-68{padding-left:%?68?%!important}.u-margin-left-68{margin-left:%?68?%!important}.u-padding-left-68{padding-left:%?68?%!important}.u-m-t-68{margin-top:%?68?%!important}.u-p-t-68{padding-top:%?68?%!important}.u-margin-top-68{margin-top:%?68?%!important}.u-padding-top-68{padding-top:%?68?%!important}.u-m-r-68{margin-right:%?68?%!important}.u-p-r-68{padding-right:%?68?%!important}.u-margin-right-68{margin-right:%?68?%!important}.u-padding-right-68{padding-right:%?68?%!important}.u-m-b-68{margin-bottom:%?68?%!important}.u-p-b-68{padding-bottom:%?68?%!important}.u-margin-bottom-68{margin-bottom:%?68?%!important}.u-padding-bottom-68{padding-bottom:%?68?%!important}.u-margin-70, .u-m-70{margin:%?70?%!important}.u-padding-70, .u-p-70{padding:%?70?%!important}.u-m-l-70{margin-left:%?70?%!important}.u-p-l-70{padding-left:%?70?%!important}.u-margin-left-70{margin-left:%?70?%!important}.u-padding-left-70{padding-left:%?70?%!important}.u-m-t-70{margin-top:%?70?%!important}.u-p-t-70{padding-top:%?70?%!important}.u-margin-top-70{margin-top:%?70?%!important}.u-padding-top-70{padding-top:%?70?%!important}.u-m-r-70{margin-right:%?70?%!important}.u-p-r-70{padding-right:%?70?%!important}.u-margin-right-70{margin-right:%?70?%!important}.u-padding-right-70{padding-right:%?70?%!important}.u-m-b-70{margin-bottom:%?70?%!important}.u-p-b-70{padding-bottom:%?70?%!important}.u-margin-bottom-70{margin-bottom:%?70?%!important}.u-padding-bottom-70{padding-bottom:%?70?%!important}.u-margin-72, .u-m-72{margin:%?72?%!important}.u-padding-72, .u-p-72{padding:%?72?%!important}.u-m-l-72{margin-left:%?72?%!important}.u-p-l-72{padding-left:%?72?%!important}.u-margin-left-72{margin-left:%?72?%!important}.u-padding-left-72{padding-left:%?72?%!important}.u-m-t-72{margin-top:%?72?%!important}.u-p-t-72{padding-top:%?72?%!important}.u-margin-top-72{margin-top:%?72?%!important}.u-padding-top-72{padding-top:%?72?%!important}.u-m-r-72{margin-right:%?72?%!important}.u-p-r-72{padding-right:%?72?%!important}.u-margin-right-72{margin-right:%?72?%!important}.u-padding-right-72{padding-right:%?72?%!important}.u-m-b-72{margin-bottom:%?72?%!important}.u-p-b-72{padding-bottom:%?72?%!important}.u-margin-bottom-72{margin-bottom:%?72?%!important}.u-padding-bottom-72{padding-bottom:%?72?%!important}.u-margin-74, .u-m-74{margin:%?74?%!important}.u-padding-74, .u-p-74{padding:%?74?%!important}.u-m-l-74{margin-left:%?74?%!important}.u-p-l-74{padding-left:%?74?%!important}.u-margin-left-74{margin-left:%?74?%!important}.u-padding-left-74{padding-left:%?74?%!important}.u-m-t-74{margin-top:%?74?%!important}.u-p-t-74{padding-top:%?74?%!important}.u-margin-top-74{margin-top:%?74?%!important}.u-padding-top-74{padding-top:%?74?%!important}.u-m-r-74{margin-right:%?74?%!important}.u-p-r-74{padding-right:%?74?%!important}.u-margin-right-74{margin-right:%?74?%!important}.u-padding-right-74{padding-right:%?74?%!important}.u-m-b-74{margin-bottom:%?74?%!important}.u-p-b-74{padding-bottom:%?74?%!important}.u-margin-bottom-74{margin-bottom:%?74?%!important}.u-padding-bottom-74{padding-bottom:%?74?%!important}.u-margin-75, .u-m-75{margin:%?75?%!important}.u-padding-75, .u-p-75{padding:%?75?%!important}.u-m-l-75{margin-left:%?75?%!important}.u-p-l-75{padding-left:%?75?%!important}.u-margin-left-75{margin-left:%?75?%!important}.u-padding-left-75{padding-left:%?75?%!important}.u-m-t-75{margin-top:%?75?%!important}.u-p-t-75{padding-top:%?75?%!important}.u-margin-top-75{margin-top:%?75?%!important}.u-padding-top-75{padding-top:%?75?%!important}.u-m-r-75{margin-right:%?75?%!important}.u-p-r-75{padding-right:%?75?%!important}.u-margin-right-75{margin-right:%?75?%!important}.u-padding-right-75{padding-right:%?75?%!important}.u-m-b-75{margin-bottom:%?75?%!important}.u-p-b-75{padding-bottom:%?75?%!important}.u-margin-bottom-75{margin-bottom:%?75?%!important}.u-padding-bottom-75{padding-bottom:%?75?%!important}.u-margin-76, .u-m-76{margin:%?76?%!important}.u-padding-76, .u-p-76{padding:%?76?%!important}.u-m-l-76{margin-left:%?76?%!important}.u-p-l-76{padding-left:%?76?%!important}.u-margin-left-76{margin-left:%?76?%!important}.u-padding-left-76{padding-left:%?76?%!important}.u-m-t-76{margin-top:%?76?%!important}.u-p-t-76{padding-top:%?76?%!important}.u-margin-top-76{margin-top:%?76?%!important}.u-padding-top-76{padding-top:%?76?%!important}.u-m-r-76{margin-right:%?76?%!important}.u-p-r-76{padding-right:%?76?%!important}.u-margin-right-76{margin-right:%?76?%!important}.u-padding-right-76{padding-right:%?76?%!important}.u-m-b-76{margin-bottom:%?76?%!important}.u-p-b-76{padding-bottom:%?76?%!important}.u-margin-bottom-76{margin-bottom:%?76?%!important}.u-padding-bottom-76{padding-bottom:%?76?%!important}.u-margin-78, .u-m-78{margin:%?78?%!important}.u-padding-78, .u-p-78{padding:%?78?%!important}.u-m-l-78{margin-left:%?78?%!important}.u-p-l-78{padding-left:%?78?%!important}.u-margin-left-78{margin-left:%?78?%!important}.u-padding-left-78{padding-left:%?78?%!important}.u-m-t-78{margin-top:%?78?%!important}.u-p-t-78{padding-top:%?78?%!important}.u-margin-top-78{margin-top:%?78?%!important}.u-padding-top-78{padding-top:%?78?%!important}.u-m-r-78{margin-right:%?78?%!important}.u-p-r-78{padding-right:%?78?%!important}.u-margin-right-78{margin-right:%?78?%!important}.u-padding-right-78{padding-right:%?78?%!important}.u-m-b-78{margin-bottom:%?78?%!important}.u-p-b-78{padding-bottom:%?78?%!important}.u-margin-bottom-78{margin-bottom:%?78?%!important}.u-padding-bottom-78{padding-bottom:%?78?%!important}.u-margin-80, .u-m-80{margin:%?80?%!important}.u-padding-80, .u-p-80{padding:%?80?%!important}.u-m-l-80{margin-left:%?80?%!important}.u-p-l-80{padding-left:%?80?%!important}.u-margin-left-80{margin-left:%?80?%!important}.u-padding-left-80{padding-left:%?80?%!important}.u-m-t-80{margin-top:%?80?%!important}.u-p-t-80{padding-top:%?80?%!important}.u-margin-top-80{margin-top:%?80?%!important}.u-padding-top-80{padding-top:%?80?%!important}.u-m-r-80{margin-right:%?80?%!important}.u-p-r-80{padding-right:%?80?%!important}.u-margin-right-80{margin-right:%?80?%!important}.u-padding-right-80{padding-right:%?80?%!important}.u-m-b-80{margin-bottom:%?80?%!important}.u-p-b-80{padding-bottom:%?80?%!important}.u-margin-bottom-80{margin-bottom:%?80?%!important}.u-padding-bottom-80{padding-bottom:%?80?%!important}.u-reset-nvue{flex-direction:row;align-items:center}.u-type-primary-light{color:#ecf5ff}.u-type-warning-light{color:#fdf6ec}.u-type-success-light{color:#dbf1e1}.u-type-error-light{color:#fef0f0}.u-type-info-light{color:#f4f4f5}.u-type-primary-light-bg{background-color:#ecf5ff}.u-type-warning-light-bg{background-color:#fdf6ec}.u-type-success-light-bg{background-color:#dbf1e1}.u-type-error-light-bg{background-color:#fef0f0}.u-type-info-light-bg{background-color:#f4f4f5}.u-type-primary-dark{color:#2b85e4}.u-type-warning-dark{color:#f29100}.u-type-success-dark{color:#18b566}.u-type-error-dark{color:#dd6161}.u-type-info-dark{color:#82848a}.u-type-primary-dark-bg{background-color:#2b85e4}.u-type-warning-dark-bg{background-color:#f29100}.u-type-success-dark-bg{background-color:#18b566}.u-type-error-dark-bg{background-color:#dd6161}.u-type-info-dark-bg{background-color:#82848a}.u-type-primary-disabled{color:#a0cfff}.u-type-warning-disabled{color:#fcbd71}.u-type-success-disabled{color:#71d5a1}.u-type-error-disabled{color:#fab6b6}.u-type-info-disabled{color:#c8c9cc}.u-type-primary{color:#2979ff}.u-type-warning{color:#f90}.u-type-success{color:#19be6b}.u-type-error{color:#fa3534}.u-type-info{color:#909399}.u-type-primary-bg{background-color:#2979ff}.u-type-warning-bg{background-color:#f90}.u-type-success-bg{background-color:#19be6b}.u-type-error-bg{background-color:#fa3534}.u-type-info-bg{background-color:#909399}.u-main-color{color:#303133}.u-content-color{color:#606266}.u-tips-color{color:#909399}.u-light-color{color:#c0c4cc}uni-page-body{color:#303133;font-size:%?28?%}\n/* start--\u53BB\u9664webkit\u7684\u9ED8\u8BA4\u6837\u5F0F--start */.u-fix-ios-appearance{-webkit-appearance:none}\n/* end--\u53BB\u9664webkit\u7684\u9ED8\u8BA4\u6837\u5F0F--end */\n/* start--icon\u56FE\u6807\u5916\u5C42\u5957\u4E00\u4E2Aview\uFF0C\u8BA9\u5176\u8FBE\u5230\u66F4\u597D\u7684\u5782\u76F4\u5C45\u4E2D\u7684\u6548\u679C--start */.u-icon-wrap{display:flex;align-items:center}\n/* end-icon\u56FE\u6807\u5916\u5C42\u5957\u4E00\u4E2Aview\uFF0C\u8BA9\u5176\u8FBE\u5230\u66F4\u597D\u7684\u5782\u76F4\u5C45\u4E2D\u7684\u6548\u679C--end */\n/* start--iPhoneX\u5E95\u90E8\u5B89\u5168\u533A\u5B9A\u4E49--start */.safe-area-inset-bottom{padding-bottom:0;padding-bottom:constant(safe-area-inset-bottom);padding-bottom:env(safe-area-inset-bottom)}\n/* end-iPhoneX\u5E95\u90E8\u5B89\u5168\u533A\u5B9A\u4E49--end */\n/* start--\u5404\u79CDhover\u70B9\u51FB\u53CD\u9988\u76F8\u5173\u7684\u7C7B\u540D-start */.u-hover-class{opacity:.6}.u-cell-hover{background-color:#f7f8f9!important}\n/* end--\u5404\u79CDhover\u70B9\u51FB\u53CD\u9988\u76F8\u5173\u7684\u7C7B\u540D--end */\n/* start--\u6587\u672C\u884C\u6570\u9650\u5236--start */.u-line-1{overflow:hidden;white-space:nowrap;text-overflow:ellipsis}.u-line-2{-webkit-line-clamp:2}.u-line-3{-webkit-line-clamp:3}.u-line-4{-webkit-line-clamp:4}.u-line-5{-webkit-line-clamp:5}.u-line-2, .u-line-3, .u-line-4, .u-line-5{overflow:hidden;word-break:break-all;text-overflow:ellipsis;display:-webkit-box;-webkit-box-orient:vertical}\n/* end--\u6587\u672C\u884C\u6570\u9650\u5236--end */\n/* start--Retina \u5C4F\u5E55\u4E0B\u7684 1px \u8FB9\u6846--start */.u-border,\n.u-border-bottom,\n.u-border-left,\n.u-border-right,\n.u-border-top,\n.u-border-top-bottom{position:relative}.u-border-bottom:after,\n.u-border-left:after,\n.u-border-right:after,\n.u-border-top-bottom:after,\n.u-border-top:after,\n.u-border:after{content:\" \";position:absolute;left:0;top:0;pointer-events:none;box-sizing:border-box;-webkit-transform-origin:0 0;transform-origin:0 0;width:199.8%;height:199.7%;-webkit-transform:scale(.5);transform:scale(.5);border:0 solid #e4e7ed;z-index:2}.u-border-top:after{border-top-width:1px}.u-border-left:after{border-left-width:1px}.u-border-right:after{border-right-width:1px}.u-border-bottom:after{border-bottom-width:1px}.u-border-top-bottom:after{border-width:1px 0}.u-border:after{border-width:1px}\n/* end--Retina \u5C4F\u5E55\u4E0B\u7684 1px \u8FB9\u6846--end */\n/* start--clearfix--start */.u-clearfix:after,\n.clearfix:after{content:\"\";display:table;clear:both}\n/* end--clearfix--end */\n/* start--\u9AD8\u65AF\u6A21\u7CCAtabbar\u5E95\u90E8\u5904\u7406--start */.u-blur-effect-inset{width:%?750?%;height:var(--window-bottom);background-color:#fff}\n/* end--\u9AD8\u65AF\u6A21\u7CCAtabbar\u5E95\u90E8\u5904\u7406--end */\n/* start--\u63D0\u5347H5\u7AEFuni.toast()\u7684\u5C42\u7EA7\uFF0C\u907F\u514D\u88ABuView\u7684modal\u7B49\u906E\u76D6--start */uni-toast{z-index:10090}uni-toast .uni-toast{z-index:10090}\n/* end--\u63D0\u5347H5\u7AEFuni.toast()\u7684\u5C42\u7EA7\uFF0C\u907F\u514D\u88ABuView\u7684modal\u7B49\u906E\u76D6--end */\n/* start--\u53BB\u9664button\u7684\u6240\u6709\u9ED8\u8BA4\u6837\u5F0F--start */.u-reset-button{padding:0;font-size:inherit;line-height:inherit;background-color:initial;color:inherit}.u-reset-button::after{border:none}\n/* end--\u53BB\u9664button\u7684\u6240\u6709\u9ED8\u8BA4\u6837\u5F0F--end */\n/* H5\u7684\u65F6\u5019\uFF0C\u9690\u85CF\u6EDA\u52A8\u6761 */::-webkit-scrollbar{display:none;width:0!important;height:0!important;-webkit-appearance:none;background:transparent}\n/*\u6BCF\u4E2A\u9875\u9762\u516C\u5171css */.w-20{width:%?40?%!important}.w-30{width:%?60?%!important}.w-40{width:%?80?%!important}.w-50{width:%?100?%!important}.w-60{width:%?120?%!important}.w-70{width:%?140?%!important}.w-80{width:%?160?%!important}.w-90{width:%?180?%!important}.w-100{width:%?200?%!important}.w-120{width:%?240?%!important}.w-130{width:%?260?%!important}.w-140{width:%?280?%!important}.w-150{width:%?300?%!important}.w-160{width:%?320?%!important}.w-180{width:%?360?%!important}.w-200{width:%?400?%!important}.w-220{width:%?440?%!important}.w-240{width:%?480?%!important}.w-300{width:%?600?%!important}.h30{height:%?60?%!important}.h40{height:%?80?%!important}.h45{height:%?90?%!important}.h60{height:%?120?%!important}.h80{height:%?160?%!important}.ml5{margin-left:%?10?%!important}.ml10{margin-left:%?20?%!important}.ml20{margin-left:%?40?%!important}.mr0{margin-right:%?0?%!important}.mr2{margin-right:%?4?%!important}.mr4{margin-right:%?8?%!important}.mr5{margin-right:%?10?%!important}.mr8{margin-right:%?8?%!important}.mr10{margin-right:%?20?%!important}.mr20{margin-right:%?40?%!important}.mr25{margin-right:%?50?%!important}.mr30{margin-right:%?60?%!important}.mr40{margin-right:%?80?%!important}.mr50{margin-right:%?100?%!important}.mt5{margin-top:%?10?%!important}.mt10{margin-top:%?20?%!important}.mt15{margin-top:%?30?%!important}.mt20{margin-top:%?40?%!important}.mt50{margin-top:%?100?%!important}.mb5{margin-bottom:%?10?%!important}.mb10{margin-bottom:%?20?%!important}.mb15{margin-bottom:%?30?%!important}.mb16{margin-bottom:%?32?%!important}.mb20{margin-bottom:%?40?%!important}.mb24{margin-bottom:%?48?%!important}.mb40{margin-bottom:%?80?%!important}.mb50{margin-bottom:%?100?%!important}.mb100{margin-bottom:%?200?%!important}.d-none{display:none!important}.d-inline{display:inline!important}.d-inline-block{display:inline-block!important}.d-block{display:block!important}.d-table{display:table!important}.d-table-cell{display:table-cell!important}.d-flex{display:flex!important}.d-inline-flex{display:inline-flex!important}.fl{float:left!important}.fr{float:right!important}.fn{float:none!important}.bold{font-weight:700}.pd25{padding:%?50?%}.text-center{text-align:center!important}.text-right{text-align:right!important}.hide{display:none}.show{display:block}.vertical-middle{display:inline-block;vertical-align:middle}.flex{display:flex!important}.flex-column{display:flex;flex-direction:column}.flex-center{display:flex!important;justify-content:center!important;align-items:center!important}.flex-h-center{display:flex!important;justify-content:center!important}.flex-v-center{display:flex!important;align-items:center!important}.flex-no-grow{flex-grow:0!important}.flex-between{display:flex;justify-content:space-between!important}.flex-around{justify-content:space-around!important}.flex-no-shrink{flex-shrink:0!important}.flex-start{display:flex;justify-content:flex-start!important}.flex-end{display:flex;justify-content:flex-end!important}.align-end{display:flex;align-items:flex-end!important}.flex-one{flex:1!important;min-width:0!important;min-height:0!important}.flex-wrap{flex-wrap:wrap}.full-width{width:100%!important}.full-height{height:100%!important}.pointer{cursor:pointer}.disabled{pointer-events:none;cursor:default}.ellipsis{overflow:hidden;text-overflow:ellipsis;display:-webkit-box;-webkit-line-clamp:1;-webkit-box-orient:vertical}.ellipsis-2{overflow:hidden;text-overflow:ellipsis;display:-webkit-box;-webkit-line-clamp:2;-webkit-box-orient:vertical}.required:before{display:inline-block;margin-right:4px;color:#f5222d;font-size:14px;font-family:SimSun,sans-serif;line-height:1;content:\"*\"}.pre{white-space:pre}.round{border-radius:50%}.pr{position:relative}.pa{position:absolute}.f12{font-size:%?24?%!important}.f13{font-size:%?26?%!important}.f14{font-size:%?28?%!important}.f15{font-size:%?30?%!important}.f16{font-size:%?32?%!important}.f17{font-size:%?34?%!important}.f18{font-size:%?36?%!important}.overhidden{white-space:nowrap;overflow:hidden;text-overflow:ellipsis}.no-border-t{border-top:0!important}.no-border-r{border-right:0!important}.no-border-b{border-bottom:0!important}.no-border-l{border-left:0!important}.gray-bg{background:#a9a9a9!important}.gray-color{color:#a9a9a9!important}.view-disabled{pointer-events:none;color:rgba(0,0,0,.3)!important;background-color:#f7f7f7!important}.uni-system-preview-image{z-index:999999}uni-modal{z-index:999999!important}uni-toast{z-index:999999!important}.global-gray{-webkit-filter:grayscale(100%)!important;filter:grayscale(100%)!important}", ""]), e.exports = n;
  },
  "8fb8": function (e, n, t) {
    "use strict";

    t("6a54"), Object.defineProperty(n, "__esModule", {
      value: !0
    }), n.default = void 0, t("5ef2");
    var o = {
        isInApp: function () {
          return navigator.userAgent.indexOf("LinyiTong") > -1;
        },
        getSystemInfo: function (e) {},
        getUserInfo: function (e) {
          e && e(!1);
        },
        getLocation: function (e) {},
        shareTo: function () {},
        goToLoginPage: function () {},
        goToBindPage: function () {
          window.location.href = "langyanews://uc/login/";
        },
        saveImage: function () {},
        linkTo: function () {},
        jumpToNews: function () {},
        goUcenter: function () {},
        playAudio: function () {},
        showShare: function () {},
        openpaper: function () {}
      },
      i = o;
    n.default = i;
  },
  "96a9": function (e, n, t) {
    "use strict";

    t("6a54");
    var o = t("f5bd").default;
    Object.defineProperty(n, "__esModule", {
      value: !0
    }), n.urlencode = n.strToTimeStamp = n.sleep = n.removeURLParameter = n.randomString = n.pxToRpx = n.objToQueryParams = n.mergeObject = n.kSort = n.isShowMallNav = n.hidePhoneNum = n.hidePageNavInBrowser = n.hideIdCardNum = n.hideFormatUserName = n.hexToRgba = n.getYdModulePath = n.getWechatReqClientType = n.getUrlLinkParams = n.getTenantId = n.getRandomElementFromArray = n.getPlatform = n.getObsImageUrl = n.getLocalImageUrl = n.getImageUrl = n.getImageSize = n.getFileType = n.getCurrentPagePath = n.getAASkey = n.durationFormat = n.diffTimeFormat = n.copyText = n.checkTimeState = n.checkIsYdSdkBrowser = n.checkIsWechatMiniProgram = n.checkIsWechatBrowser = n.checkIsShowShoppingMallNav = n.checkIsInThirdBrowser = n.checkIsInApp = n.checkIsHidePageNavBack = n.calcTimer = n.base64EncodeUnicode = n.aesEncrypt = n.addParamsToCurrentPageLink = void 0, t("e966"), t("c223"), t("5c47"), t("a1c1"), t("2c10"), t("bf0f"), t("af8f"), t("aa9c"), t("f7a5"), t("dc8a"), t("4100"), t("2797"), t("c9b5"), t("ab80"), t("20f3"), t("5ef2"), t("23f4"), t("7d2f"), t("9c4e"), t("d4b5"), t("dfcf"), t("dd2b"), t("0506"), t("d5c6"), t("5a56"), t("f074"), t("4db2"), t("c976"), t("4d8f"), t("7b97"), t("668a"), t("c5b7"), t("8ff5"), t("2378"), t("641a"), t("64e0"), t("cce3"), t("efba"), t("d009"), t("bd7d"), t("7edd"), t("d798"), t("f547"), t("5e54"), t("b60a"), t("8c18"), t("12973"), t("f991"), t("198e"), t("8557"), t("63b1"), t("1954"), t("1cf1");
    var i = o(t("2634")),
      a = o(t("2fdc")),
      r = o(t("b7c7")),
      u = o(t("c753")),
      l = t("c41c"),
      s = o(t("7ff1")),
      m = o(t("9036")),
      d = o(t("4b9b")),
      c = o(t("a4b9"));
    n.getImageUrl = function () {
      var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {},
        n = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0,
        t = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 0,
        o = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : "",
        i = arguments.length > 4 && void 0 !== arguments[4] && arguments[4];
      return "obs" === getApp().globalData.oss_platform ? g(e, n, t, o, i) : f(e, n, t, o, i);
    };
    var g = function (e, n, t, o, i) {
      if (!e || !e.host && !e.hostp) return "";
      if (o && n) {
        var a = (0, r.default)(o.split(":")),
          u = a[0],
          l = a[1];
        u = parseInt(u), l = parseInt(l), t = parseInt(n * l / u);
      }
      var s = "",
        m = "?x-image-process=image/resize,limit_0";
      return n && t ? s = m + ",m_fill,w_".concat(n, ",h_").concat(t) : n ? s = m + ",w_".concat(n) : t && (s = m + ",h_".concat(t)), e["hostp"] && (e["host"] = e["hostp"].replace("${@I}", "").replace("${@M}", "").replace("${@F}", "")), i && (s = s ? s + ",gs_1" : "?gs_1"), e["host"] + e["file"] + s;
    };
    n.getObsImageUrl = g;
    var f = function (e, n, t, o, i) {
      if (!e || !e.host && !e.hostp) return "";
      if (o && n) {
        var a = (0, r.default)(o.split(":")),
          u = a[0],
          l = a[1];
        u = parseInt(u), l = parseInt(l), t = parseInt(n * l / u);
      }
      var s = n && t ? "?x-image-process=w_".concat(n, ",h_").concat(t) : "";
      return e["hostp"] && (e["host"] = e["hostp"].replace("${@I}", "").replace("${@M}", "").replace("${@F}", "")), i && (s = s ? s + ",gs_1" : "?gs_1"), e["host"] + e["file"] + s;
    };
    n.getLocalImageUrl = f;
    n.diffTimeFormat = function (e) {
      var n = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0,
        t = arguments.length > 2 && void 0 !== arguments[2] && arguments[2];
      n || (n = parseInt(new Date().getTime() / 1000));
      var o = Math.abs(n - e);
      return p(o, t);
    };
    var p = function (e) {
      var n = arguments.length > 1 && void 0 !== arguments[1] && arguments[1],
        t = parseInt(e / 86400),
        o = parseInt(e / 3600) - 24 * t,
        i = parseInt(e % 3600 / 60),
        a = parseInt(e % 60),
        r = "";
      return t && (r += t + "\u5929"), o ? r += o + "\u65F6" : r && (r += "0\u65F6"), i ? r += i + "\u5206" : r && n && a && (r += "0\u5206"), n && a && (r += a + "\u79D2"), r;
    };
    n.durationFormat = p;
    n.calcTimer = function (e) {
      if (0 === e || "number" !== typeof e) return "00:00";
      var n = Math.floor(e / 60),
        t = Math.floor(e % 60);
      return n < 10 && (n = "0" + n), t < 10 && (t = "0" + t), n + ":" + t;
    };
    var h = function () {
      return 3, 3;
    };
    n.getPlatform = h;
    n.getWechatReqClientType = function () {
      return v() || w() || b() ? "wx_app" : "wx_official";
    };
    var y = function () {
      var e = h();
      return 3 === e && "micromessenger" == navigator.userAgent.toLowerCase().match(/MicroMessenger/i);
    };
    n.checkIsWechatBrowser = y;
    var _ = function () {
      var e = (0, a.default)((0, i.default)().mark(function e() {
        var n;
        return (0, i.default)().wrap(function (e) {
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
    var b = function () {
      var e = h();
      return 3 === e && "yunxh-ydapp" == navigator.userAgent.toLowerCase().match(/YUNXH-YDAPP/i);
    };
    n.checkIsYdSdkBrowser = b;
    var w = function () {
      var e = h();
      return 3 === e && (0, l.getThirdAppMark)();
    };
    n.checkIsInThirdBrowser = w;
    var v = function () {
      var e = h();
      return 1 === e || 2 === e;
    };
    n.checkIsInApp = v;
    n.checkIsHidePageNavBack = function () {
      var e = w();
      return "yongpai" == e || !k() && !(!y() && !w());
    };
    n.isShowMallNav = function () {
      if (w()) {
        var e = getCurrentPages(),
          n = e[e.length - 1];
        if (-1 != n.route.search("module-mall")) {
          var t = uni.getStorageSync(d.default.localStorageKeys.shoppingMallOpenNav);
          if (t) {
            var o = JSON.parse(t);
            if (o.data) return !0;
          }
        }
        return !1;
      }
      return !y();
    };
    var k = function () {
      if (w()) {
        var e = getCurrentPages(),
          n = e[e.length - 1];
        if (-1 != n.route.search("module-mall")) {
          var t = uni.getStorageSync(d.default.localStorageKeys.shoppingMallOpenNav);
          if (t) {
            var o = JSON.parse(t);
            if (o.data) return !0;
          }
        }
      }
      return !1;
    };
    n.checkIsShowShoppingMallNav = k;
    n.hidePageNavInBrowser = function () {
      var e = w();
      if ((!k() || "yongpai" == e) && (y() || w())) {
        var n = document.getElementsByTagName("uni-page-head");
        n && n[0] && (n[0].style.display = "none");
      }
    };
    n.getTenantId = function () {
      var e = h();
      if (3 === e) {
        var n = location.hostname.split(".");
        if (4 === n.length) {
          for (var t = {
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
            }, o = n[0], i = [], a = 0; a < o.length; a++) {
            if (!t[o[a]]) return 0;
            i.push(t[o[a]]);
          }
          return parseInt(i.join(""));
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
      for (var n = "ABCDEFGHJKMNPQRSTWXYZabcdefhijkmnprstwxyz2345678", t = n.length, o = "", i = 0; i < e; i++) o += n.charAt(Math.floor(Math.random() * t));
      return o;
    };
    n.kSort = function (e) {
      var n = {},
        t = Object.keys(e);
      return t.sort(), t.forEach(function (t) {
        n[t] = e[t];
      }), n;
    };
    var C = function () {
      var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {},
        n = !(arguments.length > 1 && void 0 !== arguments[1]) || arguments[1],
        t = n ? "?" : "",
        o = [];
      for (var i in e) {
        var a = e[i];
        o.push(i + "=" + S(a));
      }
      return o.length ? t + o.join("&") : "";
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
      var t = Date.parse(new Date()) / 1000,
        o = {};
      return t < e ? (o["state"] = 1, o["msg"] = "\u6D3B\u52A8\u672A\u5F00\u59CB\uFF01") : t >= e && t < n ? (o["state"] = 2, o["msg"] = "\u6D3B\u52A8\u8FDB\u884C\u4E2D") : (o["state"] = 3, o["msg"] = "\u6D3B\u52A8\u5DF2\u7ED3\u675F\uFF01"), o;
    };
    n.strToTimeStamp = function () {
      var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : "";
      return e ? (e = e.replace(/-/g, "/"), new Date(e).getTime() / 1000) : Date.parse(new Date()) / 1000;
    };
    n.getFileType = function (e) {
      var n,
        t = e.lastIndexOf(".");
      return n = e.substr(t + 1), -1 !== ["gif", "jpg", "png", "bmp", "jpeg", "ico", "webp"].indexOf(n.toLowerCase()) ? "image" : -1 !== ["wmv", "asf", "asx", "rm", "rmvb", "mp4", "3gp", "mov", "m4v", "avi", "dat", "mkv", "flv", "vob"].indexOf(n.toLowerCase()) ? "video" : -1 !== ["mp3", "aac", "flac", "wav", "wma", "vqf", "cda", "cd"].indexOf(n.toLowerCase()) ? "audio" : void 0;
    };
    n.getUrlLinkParams = function () {
      var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : "",
        n = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : "";
      if (!e || !n) return "";
      var t = new RegExp("^.*[?&]" + n + "=([^&=?]*)&?.*$", ""),
        o = e.replace(t, "$1");
      return o;
    };
    n.copyText = function () {
      var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : "",
        n = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : null;
      if (e) {
        var t = uni.getSystemInfoSync();
        "ios" === t.platform ? setTimeout(function () {
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
        t = e / (uni.upx2px(100) / 100);
      return n && (t += "rpx"), t;
    };
    n.mergeObject = function e() {
      var n = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {},
        t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {},
        o = JSON.parse(JSON.stringify(n));
      for (var i in t) try {
        t[i].constructor == Object ? o[i] = e(o[i], t[i]) : o[i] = t[i];
      } catch (a) {
        o[i] = t[i];
      }
      return o;
    };
    n.getAASkey = function () {
      var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : "";
      if (!e) return "";
      for (var n = [], t = [], o = 0; o < e["length"]; o++) o % 2 == 0 ? t["push"](e[o]) : n["push"](e[o]);
      return s.default["md5"](t["join"]("") + n["join"](""));
    };
    n.hidePhoneNum = function (e) {
      var n = e.replace(/(\d{3})\d{4}(\d{4})/, "$1****$2");
      return n;
    };
    n.hideIdCardNum = function (e) {
      var n = e.replace(/(\d{3})\d{11}(\d{4})/, "$1***********$2");
      return n;
    };
    var x = function (e, n) {
      var t = e.split("?");
      if (t.length >= 2) {
        for (var o = encodeURIComponent(n) + "=", i = t[1].split(/[&;]/g), a = i.length; a-- > 0;) -1 !== i[a].lastIndexOf(o, 0) && i.splice(a, 1);
        return t[0] + (i.length > 0 ? "?" + i.join("&") : "");
      }
      return e;
    };
    n.removeURLParameter = x;
    var T = function () {
      var e = (0, a.default)((0, i.default)().mark(function e(n) {
        return (0, i.default)().wrap(function (e) {
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
    var P = function () {
      var e = (0, a.default)((0, i.default)().mark(function e(n) {
        return (0, i.default)().wrap(function (e) {
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
    n.getImageSize = P;
    var A = function () {
      var e = "",
        n = getCurrentPages(),
        t = n[n.length - 1];
      return t && t.route && (e = "/" + t.route, u.default.$u.test.isEmpty(t.options) || (e += C(t.options, !0))), e;
    };
    n.getCurrentPagePath = A;
    n.hideFormatUserName = function (e) {
      var n;
      if (2 === e.length) n = e.substr(0, 1) + "*";else if (e.length > 2) {
        for (var t = "", o = 0, i = e.length - 2; o < i; o++) t += "*";
        n = e.substr(0, 1) + t + e.substr(-1, 1);
      } else n = e;
      return n;
    };
    n.addParamsToCurrentPageLink = function (e, n) {
      var t = A();
      t = x(t, e);
      var o = getCurrentPages(),
        i = o[o.length - 1];
      return u.default.$u.test.isEmpty(i.options) ? t + "?" + e + "=" + n : t + "&" + e + "=" + n;
    };
    n.aesEncrypt = function (e, n, t) {
      var o = m.default.enc.Utf8.parse(n),
        i = m.default.enc.Utf8.parse(t),
        a = m.default.enc.Utf8.parse(e),
        r = m.default.AES.encrypt(a, o, {
          iv: i,
          mode: m.default.mode.CBC,
          padding: m.default.pad.Pkcs7
        });
      return m.default.enc.Base64.stringify(r.ciphertext);
    };
    n.getRandomElementFromArray = function (e) {
      if (0 === e.length) return null;
      var n = Math.floor(Math.random() * e.length),
        t = e[n];
      return e.splice(n, 1), t;
    };
    n.base64EncodeUnicode = function (e) {
      var n = new TextEncoder(),
        t = n.encode(e);
      return btoa(String.fromCharCode.apply(null, new Uint8Array(t)));
    };
  },
  "9d8a": function (e, n, t) {
    "use strict";

    t("6a54");
    var o = t("f5bd").default;
    Object.defineProperty(n, "__esModule", {
      value: !0
    }), n.default = void 0, t("bf0f"), t("5c47"), t("0506");
    var i = o(t("2634")),
      a = o(t("2fdc")),
      r = t("9f8f"),
      u = t("f86c"),
      l = {
        _accessToken: "",
        _isInitOk: !1,
        getAppAccessToken: function () {
          return (0, a.default)((0, i.default)().mark(function e() {
            var n;
            return (0, i.default)().wrap(function (e) {
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
          return (0, a.default)((0, i.default)().mark(function e() {
            return (0, i.default)().wrap(function (e) {
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
          return (0, a.default)((0, i.default)().mark(function n() {
            return (0, i.default)().wrap(function (n) {
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
          return (0, a.default)((0, i.default)().mark(function t() {
            var o, a;
            return (0, i.default)().wrap(function (t) {
              while (1) switch (t.prev = t.next) {
                case 0:
                  return t.next = 2, n.initJssdk();
                case 2:
                  if (o = t.sent, !o) {
                    t.next = 10;
                    break;
                  }
                  return t.next = 6, n.getAppOpenId();
                case 6:
                  a = t.sent, u.getUserInfo().then(function (n) {
                    if (0 == n.code && n.data) {
                      var t = n.data,
                        o = {
                          user_id: t.id || 0,
                          user_name: t.nickname || "",
                          portrait_url: t.avatarUrl || "",
                          phone: t.phoneNumber || "",
                          wx_openid: "",
                          wx_unionid: "",
                          app_user_token: a
                        };
                      e && e(o);
                    } else e && e(!1);
                  }).catch(function (n) {
                    e && e(!1);
                  }), t.next = 11;
                  break;
                case 10:
                  e && e(!1);
                case 11:
                case "end":
                  return t.stop();
              }
            }, t);
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
  "9f8f": function (e, n, t) {
    "use strict";

    t("6a54");
    var o = t("f5bd").default;
    Object.defineProperty(n, "__esModule", {
      value: !0
    }), n.getAuctionGoodsBidPriceList = n.getAuctionActivityDetail = n.getAnswerTimes = n.getAnswerQuestionList = n.getAnswerDetail = n.getActivityTypeList = n.getActivityTaskList = n.getActivityTaskDetail = n.getActivityShowList = n.getActivityInit = n.getAQRecordList = n.getAQRecordDetail = n.getAQRankList = n.getAQOrgRankList = n.getAQMoreUserRankList = n.getAQMoreOrgRankTitle = n.getAQMoreOrgRankList = n.getAIFaceFusionDetail = n.focusOnUsers = n.focusOnRrankingSteps = n.fissionTake = n.finishFootmarkOptionTask = n.finishActivityTask = n.fertilizeFarmKindsAnimal = n.fertilizeFarmKind = n.exchangeSuccessUser = n.exchangeSmallGamePlayNum = n.exchangeSignupTimes = n.exchangeMoney = n.exchangeLotteryTimes = n.exchangeFarmVeg = n.exchangeFarmKindsGoods = n.exchangeAnswerChance = n.deleteUserAddress = n.deleteOrder = n.deleteInfoPublishContent = n.createVoteFissionInviteTask = n.createUserAddress = n.createStepSportFissionInviteTask = n.createOrder = n.createOfflinePayOrder = n.createLotteryFissionInviteTask = n.createHelpFissionInviteTask = n.createDilateFissionInviteTask = n.createCheckersFissionInviteTask = n.createBobingFissionInviteTask = n.createAnswerFissionInviteTask = n.createActivityTask = n.convertImageUrl = n.controlGoodsOpen = n.continuePayOrder = n.collectFarmKindsEnergy = n.collectFarmEnergy = n.checkWordDetailInfo = n.checkVoteUserIsInner = n.checkVoteTaskDetailInfo = n.checkVerifyCodePassOkNoAuth = n.checkVerifyCodePassOk = n.checkUserIsBindWechat = n.checkSmallGameDetailInfo = n.checkSignupDetailInfo = n.checkSigninIsInLocation = n.checkScreenInteractUserIsInner = n.checkScreenInteractIsInLocation = n.checkPoetryDetailInfo = n.checkPhoneAuthIsPass = n.checkLotteryPassword = n.checkLotteryDetailInfo = n.checkGuanDanDetailInfo = n.checkFormUserIsInner = n.checkEcnyformIsInLocation = n.checkCollectCardTaskDetailInfo = n.checkClockinIsInLocation = n.checkCaptchaIsOk = n.checkBusinessWriteOffAccountIsLogin = n.checkBookingLotteryTaskIsFinish = n.checkAnswerTaskDetailInfo = n.checkAnswerOrgIsPass = n.cancelPlantFarmLand = n.cancelOrder = n.cancelLike = n.cancelFocusOnUsers = n.cancelCollection = n.buyPlayCheckersTimes = n.buyFarmKindsKind = n.buyFarmKind = n.businessApply = n.bindVoteUserInfo = n.bindVoteJudge = n.bindLotteryWinnerUser = n.bindFormWriteOffUser = n.bindBusinessWriteOffAccount = n.bindAppAccount = n.bindAccountOfficial = n.autoLoginByLoginParams = n.appUserInit = n.addUserDilateInviteRecord = n.addAuctionGoodsBidPrice = n.acPicCheck = n.AllRrankingSteps = void 0, n.getFootmarkPassList = n.getFootmarkPassDetail = n.getFootmarkDetail = n.getFissionTakeProgress = n.getFissionHelpRecordlList = n.getFissionHelpDetail = n.getFissionDilateDetail = n.getFertilizeDayTimes = n.getFarmUserVegList = n.getFarmUserDetail = n.getFarmKindsUserDetail = n.getFarmKindsInviteLinkParams = n.getFarmKindsInviteDetailInfo = n.getFarmKindsGrowupLevelList = n.getFarmKindsFertilizeDayTimes = n.getFarmKindsExchangeLogList = n.getFarmKindsExchangeGoodsList = n.getFarmKindsEnergyUserList = n.getFarmKindsDetail = n.getFarmKindsAnimal = n.getFarmKindClassList = n.getFarmGrowupLevelList = n.getFarmExchangeLogList = n.getFarmExchangeGoodsList = n.getFarmExchangeGoodsDetail = n.getFarmEnergyUserList = n.getFarmDetail = n.getExpressInfo = n.getExchangeStateInfo = n.getEcnyformDetail = n.getEcnyformBusinessList = n.getDilateCarouselInfo = n.getCurrentUserDetailStepsInfo = n.getCurrencyRecordList = n.getCouponWriteOffNoList = n.getCouponWriteOffHadList = n.getCouponWriteOffDetail = n.getCouponWriteOffCountData = n.getCouponList = n.getCouponGoodsList = n.getCouponDetail = n.getCouponClassList = n.getCouponCenterAllList = n.getCouponActivityDetail = n.getCommentList = n.getCommentDetail = n.getCommentDanmuList = n.getCollectActivityDetail = n.getCmsHomeData = n.getCmsContentList = n.getCmsContentDetail = n.getClockinVenueRankDetail = n.getClockinRankList = n.getClockinJoinList = n.getClockinDetail = n.getChouKaCount = n.getCheckersTaskContent = n.getCheckersDetail = n.getCardDetail = n.getCaptchaInfo = n.getBusinessmenOrderDetail = n.getBusinessWorkSheetId = n.getBusinessStoreShow = n.getBusinessRefundList = n.getBusinessRefundDetail = n.getBusinessOrdersList = n.getBusinessOrderStatistics = n.getBusinessOrderList = n.getBusinessOrderDetail = n.getBusinessList = n.getBusinessInfoBackstage = n.getBusinessInfo = n.getBusinessGoodsList = n.getBusinessGoodsClassList = n.getBusinessDetail = n.getBusinessCouponsList = n.getBusinessClassList = n.getBusinessClass = n.getBusinessByDistance = n.getBusinessApplyDetail = n.getBusinessAccountInfo = n.getBusienssBillList = n.getBookingSignupNum = n.getBookingLotteryUserIsSignup = n.getBookingLotteryProgress = n.getBookingLotteryAcDetail = n.getBobingRoomRankList = n.getBobingChances = n.getBagStatus = n.getBagLuckyDraw = n.getAuthorSyntheticCards = n.getAuthorSendCards = n.getAuthorHaveCards = n.getAuthorGetCards = n.getAuthorDrawCards = n.getAuthorCompleteCards = n.getAuctionGoodsList = n.getAuctionGoodsDetail = n.getAuctionGoodsCurrentPrice = n.getAuctionGoodsBidState = void 0, n.getScreenLotteryLogDetail = n.getScreenLotteryLog = n.getScreenInteractDetail = n.getRoomDetailList = n.getRoomDetail = n.getRoomBobingRecordList = n.getRefundList = n.getRefundDetail = n.getQueryField = n.getQueryActivityDetail = n.getPreSalesUserSessionInfoList = n.getPoetryTipTimes = n.getPoetryRankList = n.getPoetryPassQuestion = n.getPoetryHelpQuestionDetail = n.getPoetryHelpProgress = n.getPoetryDetail = n.getPhoneAuthToken = n.getPayDetail = n.getPageDesignConfig = n.getPageDesignAttrInfo = n.getOssUploadUrl = n.getOrderPayParams = n.getOrderList = n.getOrderDetail = n.getOfflinePayDetailList = n.getOfflinePayDetail = n.getOfflineBusinessClass = n.getOfflineBusinessByDistance = n.getOfficialAccountDetail = n.getNschoolsSubjectDetail = n.getNschoolsSignupList = n.getNschoolsSigninList = n.getNschoolsLessonList = n.getNschoolsDetailInfo = n.getNschoolSubjectListDetail = n.getNewsTaskList = n.getNewsTaskDetailInfo = n.getNewsActivityDetail = n.getMyGuessRecordList = n.getMyFormWriteOffList = n.getMyFarmTrendsList = n.getMyFarmKindsTrendsList = n.getMyCommentList = n.getMyAuctionGoodsBidPriceList = n.getMemberOfficialInfo = n.getMemberGlobalSetting = n.getMedalList = n.getMallStyleSetting = n.getMallHomeData = n.getMallHomeBusinessList = n.getMallBlockList = n.getMallAccountInfo = n.getLotteryWriteOffList = n.getLotteryWriteOffDetail = n.getLotteryWriteOffCountData = n.getLotteryDetail = n.getLocationInfo = n.getLiveReportList = n.getLiveReportClassList = n.getLiveGoodsList = n.getLiveFastActivityDetail = n.getLiveEventInfo = n.getLiveDetail = n.getLiveActivityOpMsg = n.getLiveActivityList = n.getLevelList = n.getLaunchContentList = n.getInviteUserDetail = n.getInviteRecord = n.getInviteDetail = n.getInnerImageUrl = n.getInfoPublishUserInfo = n.getInfoPublishList = n.getInfoPublishDetail = n.getInJsAccessToken = n.getHongbaoBill = n.getHelpRankList = n.getGuessRecordList = n.getGuessDetail = n.getGuessContestTimeList = n.getGuessContestList = n.getGuanDanUserInfo = n.getGuanDanSettingDetail = n.getGuanDanRankInfo = n.getGuanDanActivityList = n.getGroupGoodsList = n.getGoodsListByIds = n.getGoodsList = n.getGoodsDetail = n.getGoodsCommentList = n.getGoodsClassList = n.getFormWriteOffLogList = n.getFormStatList = n.getFormRecordDetail = n.getFormLogList = n.getFormDetail = n.getFormBookDateNumInfo = n.getFormActivityList = n.getFootmarkRankList = void 0, n.offlineRefundsend = n.makeWishCode = n.likeVenueClockin = n.joinFarmKindsInviteTeam = n.joinAuctionGoodsBid = n.initSmallGame = n.gitUserDilateInfo = n.getwxjsConfig = n.getbobingActivityDetail = n.getWriteoffCountData = n.getWriteOffNoList = n.getWriteOffHadList = n.getWorkSheetMessageList = n.getWorkSheetId = n.getWordValidCustoms = n.getWordTakeuser = n.getWordStartgame = n.getWordGettaketime = n.getWordGettake = n.getWordExitgame = n.getWordDetail = n.getWordCustoms = n.getWithdrawLogList = n.getWithdrawConfig = n.getWishInfoByCode = n.getWishDetail = n.getWinRecordDetailByCode = n.getWinRecordDetail = n.getWinPrizeLogList = n.getWhippedWeekRankDetail = n.getWhippedMonthRankDetail = n.getWhippedHistoryRankDetail = n.getWhippedDayRankDetail = n.getWhippedActivityDetail = n.getWeixinMiniProUrl = n.getWealactList = n.getWealactGoodsList = n.getWealactDetail = n.getVoteOptionList = n.getVoteOptionDetail = n.getVoteJudgeScoreItemList = n.getVoteJudgeOptionList = n.getVoteJudgeOptionDetail = n.getVoteDetail = n.getVideoScreenShot = n.getVerifyCode = n.getVenueList = n.getVenueDetail = n.getVenueClockinRankDetail = n.getVenueClockinLogList = n.getVenueClockinInfo = n.getVenueClockinGroupList = n.getVenueClockinGroupDetail = n.getVenueClockinActivityDetail = n.getUserthisMonthSteps = n.getUserWinPrizeLog = n.getUserVoteTimes = n.getUserToApplets = n.getUserPurseInfo = n.getUserPlayCheckersTimes = n.getUserMsgList = n.getUserLotteryTimes = n.getUserInviteLogList = n.getUserInviteInfo = n.getUserInfoIsSubscribe = n.getUserInfoByCode = n.getUserInfo = n.getUserHongbaoDetail = n.getUserFormTimes = n.getUserFormLogList = n.getUserFormLogDetailByCode = n.getUserFormLogDetail = n.getUserEcnyformTimes = n.getUserEcnyformLogList = n.getUserEcnyformLogDetail = n.getUserDetailStepsInfo = n.getUserDayDetailInfo = n.getUserAddressList = n.getUserAddressDetail = n.getUploadFileUrl = n.getTodayAndThisMonthSteps = n.getTestCouponList = n.getTaskList = n.getTaskCenterActivityDetail = n.getSuperTopicDetail = n.getStudyUserTotalScore = n.getStudyUserRecordList = n.getStudyUserRankList = n.getStudyPassList = n.getStudyPassDetail = n.getStepsportDetail = n.getSmallGameRankList = n.getSmallGamePlayNum = n.getSmallGameDetail = n.getSigninRankList = n.getSigninCurrencyTotal = n.getSigninActivityDetail = n.getShortLinkUrl = n.getServerAuthDeviceToken = n.getScreenSigninTimes = void 0, n.wxwebLogin = n.wxoaLoginQrcodeCheck = n.wxoaLoginQrcode = n.wxoaLogin = n.wxminiLogin = n.writeoffOrder = n.writeOffLotteryPrize = n.writeOffLogin = n.writeOffFormLog = n.writeOffCoupon = n.validateSmallGame = n.validateNeurocatStep = n.userfocusOnIs = n.userPhoneLogin = n.updateUserInviteInfo = n.updateUserAddress = n.updateLotteryUserCollection = n.updateInfoPublishContent = n.todayRrankingSteps = n.tipUserIsHelpDilate = n.tenantH5Init = n.submitWithdraw = n.submitVoteJudgeScore = n.submitVote = n.submitVenueClockin = n.submitUserInvite = n.submitSuperTopicComment = n.submitSuperTopic = n.submitSignin = n.submitScreenSignin = n.submitRefundApply = n.submitPoetryPass = n.submitPoetryHelp = n.submitOrderComment = n.submitLottery = n.submitLiveFastActivity = n.submitLiveEvent = n.submitLike = n.submitGuessContest = n.submitForm = n.submitEcnyform = n.submitComment = n.submitCollection = n.submitClockin = n.submitCheckersGameOver = n.submitBookingLotterySignup = n.submitAnswer = n.submitAIFaceFusion = n.stepsExchangeIntegral = n.startWhippedGame = n.startPoetrySeekHelp = n.startCheckersGame = n.setOrderDone = n.sendWorkSheetMessage = n.sendSmsCodeNoAuth = n.sendSmsCode = n.sendEcnyformSmsCode = n.sendCommentDanmu = n.sendCardRecordList = n.senPreSalesUserWorkSheetMessage = n.reportStatData = n.reportLog = n.reportActionEventData = n.refundsend = n.refundRefuse = n.recordUpdateSubmitForm = n.receiveTestCoupon = n.receiveFarmKindsEnergyEveryDay = n.receiveFarmEnergyEveryDay = n.receiveActivityCoupon = n.readPreSalesUserWorkSheetMessage = n.reSubmitPoetry = n.postWhippedIdVerify = n.postVenueClockinExchange = n.postQueryContent = n.postPublishInfo = n.postNschoolsSignup = n.postNschoolsSignin = n.postContentInfoReport = n.postBobingSubmit = n.pointsConsumed = n.pluckFarmVeg = n.pluckFarmKindsAnimal = n.payHongbao = n.payAuctionGoodsFinal = void 0, t("c223");
    var i = o(t("4b9b")),
      a = t("025d"),
      r = "https://" + i.default.apiBaseDomain,
      u = "https://" + i.default.voteApiBaseDomain,
      l = i.default.gameApiBaseDomain,
      s = "https://" + i.default.staticApiBaseDomain,
      m = "https://" + i.default.communityApiDomain,
      d = r + "/api",
      c = r + "/oss",
      g = u + "/api",
      f = l + "/api",
      p = s + "/api",
      h = m + "/api";
    n.tenantH5Init = function (e) {
      return (0, a.requestApiNoAuth)("".concat(p, "/aosbase/_auth_h5init/").concat(e, ".json"));
    };
    n.appUserInit = function (e) {
      return (0, a.requestApi)("".concat(d, "/aosbase/_auth_appuserinit"), e, "POST");
    };
    n.autoLoginByLoginParams = function (e) {
      return (0, a.requestApi)("".concat(d, "/aosbase/_auth_appautouserinit"), e, "POST");
    };
    n.wxminiLogin = function (e) {
      return (0, a.requestApi)("".concat(d, "/aosbase/_wx_minipro_auth_login"), e, "POST");
    };
    n.wxoaLogin = function (e) {
      return (0, a.requestApi)("".concat(d, "/aosbase/_wxauth_login"), e, "POST");
    };
    n.userPhoneLogin = function (e) {
      return (0, a.requestApi)("".concat(d, "/aosbase/_auth_login"), e, "POST");
    };
    n.wxoaLoginQrcode = function (e) {
      return (0, a.requestApi)("".concat(d, "/aosbase/_wxauth_qrcode"), e);
    };
    n.getwxjsConfig = function (e) {
      return (0, a.requestApi)("".concat(d, "/aosbase/_wxauth_getjsconfig"), e);
    };
    n.wxoaLoginQrcodeCheck = function (e) {
      return (0, a.requestApi)("".concat(d, "/aosbase/_wxauth_qrcodelogincheck"), e);
    };
    n.wxwebLogin = function (e) {
      return (0, a.requestApi)("".concat(d, "/aosbase/_wxwebauth_login"), e, "POST");
    };
    n.getUserInfo = function (e) {
      return (0, a.requestApi)("".concat(d, "/aosbase/user_info"), e);
    };
    n.getUserInfoByCode = function (e) {
      return (0, a.requestApi)("".concat(d, "/aosbase/user_info"), e);
    };
    n.getVerifyCode = function (e) {
      return (0, a.requestApi)("".concat(d, "/aosbase/_verifcode_show"), e);
    };
    n.reportStatData = function (e) {
      return (0, a.requestApi)("".concat(d, "/aosstat/_stat_sub"), e, "POST");
    };
    n.reportActionEventData = function (e) {
      return (0, a.requestApi)("".concat(d, "/aosstat/_event_sub"), e, "POST");
    };
    n.getUploadFileUrl = function () {
      return "".concat(c, "/filefront/upload");
    };
    n.getOssUploadUrl = function (e) {
      return (0, a.requestApi)("".concat(c, "/fileoss/getuploadurl"), e, "POST");
    };
    n.getVideoScreenShot = function (e) {
      return (0, a.requestApi)("".concat(c, "/fileoss/videoscreenshot"), e, "POST");
    };
    n.getCommentList = function (e) {
      return (0, a.requestApi)("".concat(d, "/aosbase/_comment_show"), e);
    };
    n.getMyCommentList = function (e) {
      return (0, a.requestApi)("".concat(d, "/aosbase/comment_showmy"), e);
    };
    n.getCommentDetail = function (e) {
      return (0, a.requestApi)("".concat(d, "/aosbase/_comment_detail"), e);
    };
    n.submitComment = function (e) {
      return (0, a.requestApi)("".concat(d, "/aosbase/comment_sub"), e, "POST");
    };
    n.submitLike = function (e) {
      return (0, a.requestApi)("".concat(d, "/aosbase/like_sub"), e, "POST");
    };
    n.cancelLike = function (e) {
      return (0, a.requestApi)("".concat(d, "/aosbase/like_delete"), e, "POST");
    };
    n.submitCollection = function (e) {
      return (0, a.requestApi)("".concat(d, "/aosbase/collection_sub"), e, "POST");
    };
    n.cancelCollection = function (e) {
      return (0, a.requestApi)("".concat(d, "/aosbase/collection_delete"), e, "POST");
    };
    n.getLocationInfo = function (e) {
      return (0, a.requestApi)("".concat(d, "/aosbase/_user_getlocationinfo"), e);
    };
    n.checkUserIsBindWechat = function (e) {
      return (0, a.requestApi)("".concat(d, "/aosbase/user_appbindwx"), e);
    };
    n.convertImageUrl = function (e) {
      return (0, a.requestApi)("".concat(c, "/filefront/imgdownload"), e, "POST");
    };
    n.getWeixinMiniProUrl = function (e) {
      return (0, a.requestApiNoAuth)("".concat(d, "/aosbase/_wxauth_miniprourl"), e);
    };
    n.getUserInfoIsSubscribe = function (e) {
      return (0, a.requestApi)("".concat(d, "/aosbase/wxauth_getuserinfo"), e);
    };
    n.getOfficialAccountDetail = function (e) {
      return (0, a.requestApi)("".concat(d, "/admin/_wechat_detail"), e);
    };
    n.checkVerifyCodePassOk = function (e) {
      return (0, a.requestApi)("".concat(d, "/aosbasemodule/intelverifcode_check"), e, "POST");
    };
    n.checkVerifyCodePassOkNoAuth = function (e) {
      return (0, a.requestApi)("".concat(d, "/aosbasemodule/_intelverifcode_check"), e, "POST");
    };
    n.sendSmsCode = function (e) {
      return (0, a.requestApi)("".concat(d, "/aosput/sms_sendcode"), e, "POST");
    };
    n.sendSmsCodeNoAuth = function (e) {
      return (0, a.requestApi)("".concat(d, "/aosput/_sms_sendcode"), e, "POST");
    };
    n.getPhoneAuthToken = function (e) {
      return (0, a.requestApi)("".concat(d, "/aosbasemodule/dypns_getauthtoken"), e);
    };
    n.checkPhoneAuthIsPass = function (e) {
      return (0, a.requestApi)("".concat(d, "/aosbasemodule/dypns_verify"), e, "POST");
    };
    n.getCommentDanmuList = function (e, n) {
      var t = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : {};
      return (0, a.requestApiNoAuth)("".concat(p, "/aosbase/_comment_danmu/").concat(e, "_").concat(n, ".json"), t);
    };
    n.sendCommentDanmu = function (e) {
      return (0, a.requestApi)("".concat(d, "/aosbase/danmu_sub"), e, "POST");
    };
    n.getServerAuthDeviceToken = function () {
      return (0, a.requestAuthDeviceToken)("".concat(d, "/aosbase/_auth_dt"));
    };
    n.getShortLinkUrl = function (e) {
      return (0, a.requestApi)("".concat(d, "/admin/_dl_create"), e);
    };
    n.getCaptchaInfo = function (e) {
      return (0, a.requestApi)("".concat(d, "/basemodule/_captcha_get"), e);
    };
    n.checkCaptchaIsOk = function (e) {
      return (0, a.requestApi)("".concat(d, "/basemodule/_captcha_check"), e, "POST");
    };
    n.bindAppAccount = function (e) {
      return (0, a.requestApi)("".concat(d, "/aosbase/wxauth_bind_phone"), e, "POST");
    };
    n.getUserPurseInfo = function (e) {
      return (0, a.requestApi)("".concat(d, "/aosbase/user_check_appwalletopen"), e);
    };
    n.getInnerImageUrl = function (e) {
      return (0, a.requestApiNoAuth)("".concat(d, "/aosstat/_ursa_4306d742dcb140499abd8598935d1c76.png"), e);
    };
    n.reportLog = function (e) {
      return (0, a.requestApi)("".concat(d, "/aosbase/_slog"), e, "POST");
    };
    n.getTaskCenterActivityDetail = function (e) {
      return (0, a.requestApi)("".concat(d, "/aosbasemodule/_mission_detail"), e);
    };
    n.checkCollectCardTaskDetailInfo = function (e) {
      return (0, a.requestApi)("".concat(d, "/aoscollectcard/event_sub"), e, "POST");
    };
    n.checkVoteTaskDetailInfo = function (e) {
      return (0, a.requestApi)("".concat(d, "/aosvote/mission_sub"), e, "POST");
    };
    n.checkAnswerTaskDetailInfo = function (e) {
      return (0, a.requestApi)("".concat(d, "/aosanswer/mission_sub"), e, "POST");
    };
    n.checkSignupDetailInfo = function (e) {
      return (0, a.requestApi)("".concat(d, "/aosform/mission_sub"), e, "POST");
    };
    n.checkLotteryDetailInfo = function (e) {
      return (0, a.requestApi)("".concat(d, "/aoslottery/mission_sub"), e, "POST");
    };
    n.checkPoetryDetailInfo = function (e) {
      return (0, a.requestApi)("".concat(d, "/aospoetry/mission_sub"), e, "POST");
    };
    n.checkSmallGameDetailInfo = function (e) {
      return (0, a.requestApi)("".concat(d, "/aosgame/mission_sub"), e, "POST");
    };
    n.checkWordDetailInfo = function (e) {
      return (0, a.requestApi)("".concat(d, "/aosword/mission_sub"), e, "POST");
    };
    n.getCmsHomeData = function (e) {
      return (0, a.requestApi)("".concat(d, "/cms/page_getcontent/65.json"), e);
    };
    n.getCmsContentList = function (e) {
      return (0, a.requestApi)("".concat(d, "/cms/datasource_data/contentshow.json"), e);
    };
    n.getCmsContentDetail = function (e) {
      return (0, a.requestApi)("".concat(d, "/cms/datasource_data/contentdetail.json"), e);
    };
    n.getMallStyleSetting = function (e) {
      return (0, a.requestApi)("".concat(p, "/aosmall/_styleset_showv2/").concat(e, ".json"));
    };
    n.getMallHomeData = function (e) {
      return (0, a.requestApi)("".concat(d, "/cms/page_getcontent/mall_home.json"), e);
    };
    n.getGoodsList = function (e) {
      var n = getApp().globalData.appid;
      return (0, a.requestApiNoAuth)("".concat(p, "/aosmall/_goods_showv2/").concat(n, ".json"), e);
    };
    n.getGoodsClassList = function (e) {
      var n = getApp().globalData.appid;
      return (0, a.requestApiNoAuth)("".concat(p, "/aosmall/_goodsclass_showv2/").concat(n, ".json"), e);
    };
    n.getBusinessGoodsClassList = function (e) {
      var n = getApp().globalData.appid;
      return (0, a.requestApiNoAuth)("".concat(p, "/aosmall/_goodsclass_showv2/").concat(n, ".json"), e);
    };
    n.getWealactList = function (e) {
      return (0, a.requestApi)("".concat(d, "/aosbase/_wealact_show"), e);
    };
    n.getCouponGoodsList = function (e) {
      return (0, a.requestApi)("".concat(d, "/aosmall/_show_by_coupons"), e);
    };
    n.getGoodsListByIds = function (e) {
      return (0, a.requestApi)("".concat(d, "/aosmall/_goods_shows"), e);
    };
    n.getGoodsDetail = function (e) {
      return (0, a.requestApiNoAuth)("".concat(p, "/aosmall/_goods_detailv2/").concat(e.id, ".json"), e);
    };
    n.getOrderList = function (e) {
      return (0, a.requestApi)("".concat(d, "/aosbase/orders_show"), e);
    };
    n.getOrderDetail = function (e) {
      return (0, a.requestApi)("".concat(d, "/aosbase/orders_detail"), e);
    };
    n.getBusinessmenOrderDetail = function (e) {
      return (0, a.requestApi)("".concat(d, "/aosbase/mall_orders_detail"), e);
    };
    n.createOrder = function (e) {
      return (0, a.requestApi)("".concat(d, "/aosbase/orders_create"), e, "POST");
    };
    n.cancelOrder = function (e) {
      return (0, a.requestApi)("".concat(d, "/aosbase/orders_cancel"), e, "POST");
    };
    n.deleteOrder = function (e) {
      return (0, a.requestApi)("".concat(d, "/aosbase/orders_delete"), e, "POST");
    };
    n.setOrderDone = function (e) {
      return (0, a.requestApi)("".concat(d, "/aosbase/orders_done"), e);
    };
    n.getOrderPayParams = function (e) {
      return (0, a.requestApi)("".concat(d, "/aosbase/orderpay_do"), e);
    };
    n.getRefundList = function (e) {
      return (0, a.requestApi)("".concat(d, "/aosbase/ordersrefund_show"), e, "POST");
    };
    n.getUserAddressList = function (e) {
      return (0, a.requestApi)("".concat(d, "/aosbase/userdeliveryaddr_show"), e);
    };
    n.getUserAddressDetail = function (e) {
      return (0, a.requestApi)("".concat(d, "/aosbase/userdeliveryaddr_detail"), e);
    };
    n.createUserAddress = function (e) {
      return (0, a.requestApi)("".concat(d, "/aosbase/userdeliveryaddr_create"), e, "POST");
    };
    n.updateUserAddress = function (e) {
      return (0, a.requestApi)("".concat(d, "/aosbase/userdeliveryaddr_update"), e, "POST");
    };
    n.deleteUserAddress = function (e) {
      return (0, a.requestApi)("".concat(d, "/aosbase/userdeliveryaddr_delete"), e, "POST");
    };
    n.continuePayOrder = function (e) {
      return (0, a.requestApi)("".concat(d, "/aosbase/orders_pay_continue"), e, "POST");
    };
    n.getExpressInfo = function (e) {
      return (0, a.requestApi)("".concat(d, "/aosbase/express_show"), e);
    };
    n.writeOffLogin = function (e) {
      return (0, a.requestApi)("".concat(r, "/aos/mall-auth/login"), e, "POST");
    };
    n.getBusinessList = function (e) {
      return (0, a.requestApi)("".concat(d, "/aosmall/_business_show"), e);
    };
    n.getBusinessApplyDetail = function (e) {
      return (0, a.requestApi)("".concat(d, "/aosmall/business_apply_detail"), e);
    };
    n.businessApply = function (e) {
      return (0, a.requestApi)("".concat(d, "/aosmall/business_apply"), e, "POST");
    };
    n.getBusinessAccountInfo = function (e) {
      return (0, a.requestApi)("".concat(r, "/admin/auth/user"), e);
    };
    n.getBusinessStoreShow = function (e) {
      return (0, a.requestApi)("".concat(d, "/aosmall/_business_store_show"), e);
    };
    n.getBusinessClass = function (e) {
      return (0, a.requestApi)("".concat(d, "/aosmall/_businessclass_show"), e);
    };
    n.getBusinessByDistance = function (e) {
      return (0, a.requestApi)("".concat(d, "/aosmall/_business_showbusinessdistance"), e);
    };
    n.getOfflineBusinessClass = function (e) {
      return (0, a.requestApi)("".concat(d, "/aosmall/_offlinebusinessclass_show"), e);
    };
    n.getOfflineBusinessByDistance = function (e) {
      return (0, a.requestApi)("".concat(d, "/aosmall/_offlinebusiness_showdistance"), e);
    };
    n.getBusinessDetail = function (e) {
      return (0, a.requestApi)("".concat(d, "/aosmall/_business_detail"), e);
    };
    n.getBusinessCouponsList = function (e) {
      return (0, a.requestApi)("".concat(d, "/aosmall/_get_business_coupons"), e);
    };
    n.payHongbao = function (e) {
      return (0, a.requestApi)("".concat(d, "/aosbase/ordersmallhongbao_pay"), e, "POST");
    };
    n.getPayDetail = function (e) {
      return (0, a.requestApi)("".concat(d, "/aosbase/_ordersmallhongbao_pay_detail"), e, "POST");
    };
    n.getUserHongbaoDetail = function (e) {
      return (0, a.requestApi)("".concat(d, "/aosbase/ordersmallhongbao_detail"), e, "POST");
    };
    n.getHongbaoBill = function (e) {
      return (0, a.requestApi)("".concat(d, "/aosbase/ordersmallhongbao_writeoff_show"), e, "POST");
    };
    n.getBusienssBillList = function (e) {
      return (0, a.requestApi)("".concat(r, "/aos/baseordermallhongbaouserwriteoff/show"), e, "POST");
    };
    n.writeoffOrder = function (e) {
      return (0, a.requestApi)("".concat(r, "/aos/base-writeoff/writeoff"), e, "POST");
    };
    n.getWriteOffHadList = function (e) {
      return (0, a.requestApi)("".concat(r, "/aos/base-writeoff/show"), e);
    };
    n.getWriteOffNoList = function (e) {
      return (0, a.requestApi)("".concat(r, "/aos/base-writeoff/showno"), e);
    };
    n.getBusinessOrderDetail = function (e) {
      return (0, a.requestApi)("".concat(r, "/aos/baseorder/detail"), e);
    };
    n.getMallBlockList = function (e) {
      var n = getApp().globalData.appid;
      return (0, a.requestApiNoAuth)("".concat(p, "/aosmall/_blocks/").concat(n, ".json"), e);
    };
    n.getWriteoffCountData = function (e) {
      return (0, a.requestApi)("".concat(r, "/aos/base-writeoff/writeoffcount"), e);
    };
    n.submitRefundApply = function (e) {
      return (0, a.requestApi)("".concat(d, "/aosbase/orders_refund"), e, "POST");
    };
    n.getRefundDetail = function (e) {
      return (0, a.requestApi)("".concat(d, "/aosbase/orders_refund_detail"), e);
    };
    n.getBusinessInfoBackstage = function (e) {
      return (0, a.requestApi)("".concat(r, "/aos/mall-business/detail"), e);
    };
    n.getBusinessOrderList = function (e) {
      return (0, a.requestApi)("".concat(r, "/aos/baseorder/show"), e);
    };
    n.getBusinessOrderStatistics = function (e) {
      return (0, a.requestApi)("".concat(r, "/aos/baseorder/statistics"), e);
    };
    n.getBusinessGoodsList = function (e) {
      return (0, a.requestApi)("".concat(r, "/aos/mall-goods/show"), e);
    };
    n.controlGoodsOpen = function (e) {
      return (0, a.requestApi)("".concat(r, "/aos/mall-goods/open"), e);
    };
    n.getBusinessOrdersList = function (e) {
      return (0, a.requestApi)("".concat(r, "/aos/baseorder/show"), e);
    };
    n.getBusinessRefundList = function (e) {
      return (0, a.requestApi)("".concat(r, "/aos/baseorderrefund/show"), e);
    };
    n.getBusinessRefundDetail = function (e) {
      return (0, a.requestApi)("".concat(r, "/aos/baseorderrefund/detail"), e);
    };
    n.refundsend = function (e) {
      return (0, a.requestApi)("".concat(r, "/aos/baseorderrefund/refundsend"), e);
    };
    n.offlineRefundsend = function (e) {
      return (0, a.requestApi)("".concat(r, "/aos/baseorderrefund/refund"), e);
    };
    n.refundRefuse = function (e) {
      return (0, a.requestApi)("".concat(r, "/aos/baseorderrefund/refundrefuse"), e);
    };
    n.getUserMsgList = function (e) {
      return (0, a.requestApi)("".concat(r, "/aos/mall-order-worksheet/show"), e);
    };
    n.getWealactDetail = function (e) {
      return (0, a.requestApi)("".concat(d, "/aosbase/_wealact_detail"), e);
    };
    n.getWealactGoodsList = function (e) {
      return (0, a.requestApi)("".concat(d, "/aosmall/_goods_show_by_wealid"), e);
    };
    n.getCouponWriteOffHadList = function (e) {
      return (0, a.requestApi)("".concat(r, "/aos/basecoupons-writeoff/show"), e);
    };
    n.getCouponWriteOffNoList = function (e) {
      return (0, a.requestApi)("".concat(r, "/aos/basecoupons-writeoff/showno"), e);
    };
    n.getCouponWriteOffDetail = function (e) {
      return (0, a.requestApi)("".concat(r, "/aos/basecoupons-writeoff/detail"), e);
    };
    n.getCouponWriteOffCountData = function (e) {
      return (0, a.requestApi)("".concat(r, "/aos/basecoupons-writeoff/writeoffcount"), e);
    };
    n.writeOffCoupon = function (e) {
      return (0, a.requestApi)("".concat(r, "/aos/basecoupons-writeoff/writeoff"), e, "POST");
    };
    n.getMallHomeBusinessList = function (e) {
      var n = getApp().globalData.appid;
      return (0, a.requestApiNoAuth)("".concat(p, "/aosmall/_business_showv2/").concat(n, ".json"), e);
    };
    n.getBusinessClassList = function () {
      var e = getApp().globalData.appid;
      return (0, a.requestApiNoAuth)("".concat(p, "/aosmall/_businessclass_showv2/").concat(e, ".json"));
    };
    n.bindBusinessWriteOffAccount = function (e) {
      return (0, a.requestApi)("".concat(d, "/aosmall/business_account_bind_user"), e, "POST");
    };
    n.checkBusinessWriteOffAccountIsLogin = function (e) {
      return (0, a.requestApi)("".concat(d, "/aosmall/business_account_is_login"), e, "POST");
    };
    n.getBusinessInfo = function (e) {
      return (0, a.requestApi)("".concat(d, "/aosmall/get_mall_info"), e);
    };
    n.getCouponClassList = function (e) {
      return (0, a.requestApi)("".concat(d, "/aosmall/_mall_coupons_get_class"), e);
    };
    n.getCouponCenterAllList = function (e) {
      return (0, a.requestApi)("".concat(d, "/aosmall/_mall_get_activity_coupons"), e);
    };
    n.getCouponActivityDetail = function (e) {
      return (0, a.requestApi)("".concat(d, "/aosmall/_ac_coupons_detail"), e);
    };
    n.receiveActivityCoupon = function (e) {
      return (0, a.requestApi)("".concat(d, "/aosmall/ac_coupons_sub"), e, "POST");
    };
    n.getGoodsCommentList = function (e) {
      return (0, a.requestApi)("".concat(d, "/aospay/_goods_comments_show"), e);
    };
    n.submitOrderComment = function (e) {
      return (0, a.requestApi)("".concat(g, "/aospay/order_comment_create"), e, "POST");
    };
    n.getGroupGoodsList = function (e) {
      return (0, a.requestApi)("".concat(d, "/aosmall/_group_goods_show"), e);
    };
    n.getMallAccountInfo = function (e) {
      return (0, a.requestApi)("".concat(d, "/aosmall/account_info"), e);
    };
    n.bindAccountOfficial = function (e) {
      return (0, a.requestApi)("".concat(d, "/aosmall/bind_account_official"), e);
    };
    n.getMemberOfficialInfo = function (e) {
      return (0, a.requestApi)("".concat(d, "/aosmall/member_official_info"), e);
    };
    n.createOfflinePayOrder = function (e) {
      return (0, a.requestApi)("".concat(d, "/aosbase/orderoffline_create"), e, "POST");
    };
    n.getOfflinePayDetailList = function (e) {
      return (0, a.requestApi)("".concat(d, "/aosbase/orderoffline_show"), e);
    };
    n.getOfflinePayDetail = function (e) {
      return (0, a.requestApi)("".concat(d, "/aosbase/orderoffline_detail"), e);
    };
    n.getAuctionActivityDetail = function (e) {
      return (0, a.requestApi)("".concat(d, "/aosmall/auction-activity/_detail"), e);
    };
    n.getAuctionGoodsList = function (e) {
      return (0, a.requestApi)("".concat(d, "/aosmall/auction-goods/_list"), e);
    };
    n.getAuctionGoodsDetail = function (e) {
      return (0, a.requestApi)("".concat(d, "/aosmall/auction-goods/_detail"), e);
    };
    n.getAuctionGoodsBidPriceList = function (e) {
      return (0, a.requestApi)("".concat(d, "/aosmall/auction-goods/_take_info"), e);
    };
    n.getMyAuctionGoodsBidPriceList = function (e) {
      return (0, a.requestApi)("".concat(d, "/aosmall/auction-user/my_record"), e);
    };
    n.getAuctionGoodsBidState = function (e) {
      return (0, a.requestApi)("".concat(d, "/aosmall/auction-user/user_take_state"), e);
    };
    n.joinAuctionGoodsBid = function (e) {
      return (0, a.requestApi)("".concat(d, "/aosmall/auction-user/take_auction"), e, "POST");
    };
    n.payAuctionGoodsFinal = function (e) {
      return (0, a.requestApi)("".concat(d, "/aosmall/auction-user/pay_auction"), e, "POST");
    };
    n.addAuctionGoodsBidPrice = function (e) {
      return (0, a.requestApi)("".concat(d, "/aosmall/auction-user/add_price"), e, "POST");
    };
    n.getAuctionGoodsCurrentPrice = function (e) {
      return (0, a.requestApi)("".concat(d, "/aosmall/auction-goods/_price"), e);
    };
    n.getWordDetail = function (e) {
      return (0, a.requestApi)("".concat(d, "/aosword/_detail"), e);
    };
    n.getWordStartgame = function (e) {
      return (0, a.requestApi)("".concat(d, "/aosword/start_game"), e);
    };
    n.getWordCustoms = function (e) {
      return (0, a.requestApi)("".concat(d, "/aosword/get_customs"), e);
    };
    n.getWordValidCustoms = function (e) {
      return (0, a.requestApi)("".concat(d, "/aosword/valid_customs"), e, "POST");
    };
    n.getWordExitgame = function (e) {
      return (0, a.requestApi)("".concat(d, "/aosword/exit_game"), e);
    };
    n.getWordTakeuser = function (e) {
      return (0, a.requestApi)("".concat(d, "/aosword/_take_user"), e);
    };
    n.getWordGettake = function (e) {
      return (0, a.requestApi)("".concat(d, "/aosword/get_take"), e);
    };
    n.getWordGettaketime = function (e) {
      return (0, a.requestApi)("".concat(d, "/aosword/add_take_time"), e);
    };
    n.getAnswerQuestionList = function (e) {
      return (0, a.requestApi)("".concat(d, "/aosanswer/ac_question"), e);
    };
    n.getAnswerDetail = function (e) {
      return (0, a.requestApi)("".concat(d, "/aosanswer/_ac_detail"), e);
    };
    n.submitAnswer = function (e) {
      return (0, a.requestApi)("".concat(d, "/aosanswer/ac_sub"), e, "POST");
    };
    n.getAQRankList = function (e) {
      return (0, a.requestApi)("".concat(d, "/aosanswer/ac_rank"), e);
    };
    n.getAQOrgRankList = function (e) {
      return (0, a.requestApi)("".concat(d, "/aosanswer/_ac_organ"), e);
    };
    n.getAQMoreOrgRankList = function (e) {
      return (0, a.requestApi)("".concat(d, "/aosanswer/_ac_organ_rank"), e);
    };
    n.getAQMoreUserRankList = function (e) {
      return (0, a.requestApi)("".concat(d, "/aosanswer/_ac_user_rank"), e);
    };
    n.getAQMoreOrgRankTitle = function (e) {
      return (0, a.requestApi)("".concat(d, "/aosanswer/ac_organ_title"), e);
    };
    n.getAQRecordList = function (e) {
      return (0, a.requestApi)("".concat(d, "/aosanswer/ac_record"), e);
    };
    n.getAQRecordDetail = function (e) {
      return (0, a.requestApi)("".concat(d, "/aosanswer/ac_record_detail"), e);
    };
    n.createAnswerFissionInviteTask = function (e) {
      return (0, a.requestApi)("".concat(d, "/aosanswer/ac_fissiontaskcreate"), e, "POST");
    };
    n.getAnswerTimes = function (e) {
      return (0, a.requestApi)("".concat(d, "/aosanswer/ac_times"), e, "GET", !0);
    };
    n.checkAnswerOrgIsPass = function (e) {
      return (0, a.requestApi)("".concat(d, "/aosanswer/ac_organcheckuser"), e);
    };
    n.exchangeAnswerChance = function (e) {
      return (0, a.requestApi)("".concat(d, "/aosanswer/ac_as_addtimes"), e);
    };
    n.getVoteDetail = function (e) {
      return (0, a.requestApi)("".concat(g, "/aosvote/_ac_detail"), e);
    };
    n.getVoteOptionList = function (e) {
      return (0, a.requestApi)("".concat(g, "/aosvote/_ac_options"), e);
    };
    n.getVoteOptionDetail = function (e) {
      return (0, a.requestApi)("".concat(g, "/aosvote/_ac_option_detail"), e);
    };
    n.submitVote = function (e) {
      return (0, a.requestApi)("".concat(g, "/aosvote/ac_sub"), e, "POST");
    };
    n.getUserVoteTimes = function (e) {
      return (0, a.requestApi)("".concat(g, "/aosvote/ac_vote_times"), e, "GET", !0);
    };
    n.createVoteFissionInviteTask = function (e) {
      return (0, a.requestApi)("".concat(g, "/aosvote/ac_fissiontaskcreate"), e, "POST");
    };
    n.getVoteJudgeOptionList = function (e) {
      return (0, a.requestApi)("".concat(g, "/aosvote/judge_show"), e);
    };
    n.getVoteJudgeOptionDetail = function (e) {
      return (0, a.requestApi)("".concat(g, "/aosvote/judge_optiondetail"), e);
    };
    n.getVoteJudgeScoreItemList = function (e) {
      return (0, a.requestApi)("".concat(g, "/aosvote/judge_getscoreitem"), e);
    };
    n.bindVoteJudge = function (e) {
      return (0, a.requestApi)("".concat(g, "/aosvote/judge_authbind"), e, "POST");
    };
    n.submitVoteJudgeScore = function (e) {
      return (0, a.requestApi)("".concat(g, "/aosvote/judge_sub"), e, "POST");
    };
    n.checkVoteUserIsInner = function (e) {
      return (0, a.requestApi)("".concat(d, "/aosvote/act_usercheck"), e);
    };
    n.bindVoteUserInfo = function (e) {
      return (0, a.requestApi)("".concat(g, "/aosvote/offline_bind"), e);
    };
    n.getLotteryDetail = function (e) {
      return (0, a.requestApi)("".concat(d, "/aoslottery/_ac_detail"), e);
    };
    n.submitLottery = function (e) {
      return (0, a.requestApi)("".concat(d, "/aoslottery/ac_sub"), e, "POST");
    };
    n.getUserWinPrizeLog = function (e) {
      return (0, a.requestApi)("".concat(d, "/aoslottery/act_user"), e);
    };
    n.getWinPrizeLogList = function (e) {
      return (0, a.requestApi)("".concat(d, "/aoslottery/act_record"), e);
    };
    n.getWinRecordDetail = function (e) {
      return (0, a.requestApi)("".concat(d, "/aoslottery/record_detail"), e);
    };
    n.getUserLotteryTimes = function (e) {
      return (0, a.requestApi)("".concat(d, "/aoslottery/ac_lottery_times"), e, "GET", !0);
    };
    n.exchangeLotteryTimes = function (e) {
      return (0, a.requestApi)("".concat(d, "/aoslottery/ac_lottery_addtimes"), e, "POST");
    };
    n.writeOffLotteryPrize = function (e) {
      return (0, a.requestApi)("".concat(r, "/aos/lottery-writeoff/writeoff"), e, "POST");
    };
    n.bindLotteryWinnerUser = function (e) {
      return (0, a.requestApi)("".concat(d, "/aoslottery/auth_prepare_bind"), e);
    };
    n.getLotteryWriteOffList = function (e) {
      return (0, a.requestApi)("".concat(r, "/aos/lottery-writeoff/showmy"), e);
    };
    n.getLotteryWriteOffDetail = function (e) {
      return (0, a.requestApi)("".concat(r, "/aos/lottery-writeoff/detail"), e);
    };
    n.getLotteryWriteOffCountData = function (e) {
      return (0, a.requestApi)("".concat(r, "/aos/lottery-writeoff/writeoffcount"), e);
    };
    n.createLotteryFissionInviteTask = function (e) {
      return (0, a.requestApi)("".concat(d, "/aoslottery/ac_fissiontaskcreate"), e, "POST");
    };
    n.updateLotteryUserCollection = function (e) {
      return (0, a.requestApi)("".concat(d, "/aoslottery/ac_user_act_update"), e, "POST");
    };
    n.getWinRecordDetailByCode = function (e) {
      return (0, a.requestApi)("".concat(d, "/aoslottery/record_code_detail"), e);
    };
    n.checkLotteryPassword = function (e) {
      return (0, a.requestApi)("".concat(d, "/aoslottery/password_check"), e);
    };
    n.getFormDetail = function (e) {
      return (0, a.requestApi)("".concat(d, "/aosform/_ac_detail"), e);
    };
    n.getFormRecordDetail = function (e) {
      return (0, a.requestApi)("".concat(d, "/aosform/ac_record_detail"), e);
    };
    n.recordUpdateSubmitForm = function (e) {
      return (0, a.requestApi)("".concat(d, "/aosform/ac_record_update"), e);
    };
    n.submitForm = function (e) {
      return (0, a.requestApi)("".concat(d, "/aosform/ac_sub"), e, "POST");
    };
    n.getUserFormTimes = function (e) {
      return (0, a.requestApi)("".concat(d, "/aosform/ac_form_times"), e, "GET", !0);
    };
    n.getUserFormLogList = function (e) {
      return (0, a.requestApi)("".concat(d, "/aosform/act_user"), e);
    };
    n.getFormLogList = function (e) {
      return (0, a.requestApi)("".concat(d, "/aosform/act_record"), e);
    };
    n.getUserFormLogDetail = function (e) {
      return (0, a.requestApi)("".concat(d, "/aosform/ac_record_detail"), e);
    };
    n.acPicCheck = function (e) {
      return (0, a.requestApi)("".concat(d, "/aosform/ac_piccheck"), e);
    };
    n.checkFormUserIsInner = function (e) {
      return (0, a.requestApi)("".concat(d, "/aosform/act_usercheck"), e);
    };
    n.bindFormWriteOffUser = function (e) {
      return (0, a.requestApi)("".concat(d, "/aosform/auther_authbind"), e, "POST");
    };
    n.getUserFormLogDetailByCode = function (e) {
      return (0, a.requestApi)("".concat(d, "/aosform/auther_useractdetail"), e);
    };
    n.writeOffFormLog = function (e) {
      return (0, a.requestApi)("".concat(d, "/aosform/auther_useractwriteoff"), e, "POST");
    };
    n.getMyFormWriteOffList = function (e) {
      return (0, a.requestApi)("".concat(d, "/aosform/auther_showmy"), e);
    };
    n.getFormActivityList = function (e) {
      return (0, a.requestApi)("".concat(d, "/aosform/_ac_list"), e);
    };
    n.getFormStatList = function (e) {
      return (0, a.requestApi)("".concat(d, "/aosform/_option_stat"), e);
    };
    n.getFormBookDateNumInfo = function (e) {
      return (0, a.requestApi)("".concat(d, "/aosform/ac_getappointnum"), e);
    };
    n.exchangeSignupTimes = function (e) {
      return (0, a.requestApi)("".concat(d, "/aosform/ac_form_addtimes"), e, "POST");
    };
    n.getFormWriteOffLogList = function (e) {
      return (0, a.requestApi)("".concat(d, "/aosform/user_writeoff_list"), e);
    };
    n.getEcnyformDetail = function (e) {
      return (0, a.requestApi)("".concat(d, "/aosecnyform/_ac_detail"), e);
    };
    n.submitEcnyform = function (e) {
      return (0, a.requestApi)("".concat(d, "/aosecnyform/ac_sub"), e, "POST");
    };
    n.getUserEcnyformTimes = function (e) {
      return (0, a.requestApi)("".concat(d, "/aosecnyform/ac_form_times"), e, "GET", !0);
    };
    n.getUserEcnyformLogList = function (e) {
      return (0, a.requestApi)("".concat(d, "/aosecnyform/act_user"), e);
    };
    n.getUserEcnyformLogDetail = function (e) {
      return (0, a.requestApi)("".concat(d, "/aosecnyform/ac_record_detail"), e);
    };
    n.getEcnyformBusinessList = function (e) {
      return (0, a.requestApi)("".concat(d, "/aosecnyform/business_show"), e);
    };
    n.checkEcnyformIsInLocation = function (e) {
      return (0, a.requestApi)("".concat(d, "/aosecnyform/ac_rulecheck"), e);
    };
    n.sendEcnyformSmsCode = function (e) {
      return (0, a.requestApi)("".concat(d, "/aosecnyform/ac_sms_sendcode"), e, "POST");
    };
    n.getSuperTopicDetail = function (e) {
      return (0, a.requestApi)("".concat(d, "/aossupertopic/_ac_detail"), e);
    };
    n.submitSuperTopic = function (e) {
      return (0, a.requestApi)("".concat(d, "/aossupertopic/ac_sub"), e, "POST");
    };
    n.submitSuperTopicComment = function (e) {
      return (0, a.requestApi)("".concat(d, "/aossupertopic/ac_comment"), e, "POST");
    };
    n.getTaskList = function (e) {
      return (0, a.requestApi)("".concat(d, "/aosbase/_task_show"), e);
    };
    n.getMedalList = function (e) {
      return (0, a.requestApi)("".concat(d, "/aosbase/_medal_show"), e);
    };
    n.getLevelList = function (e) {
      return (0, a.requestApi)("".concat(d, "/aosbase/_level_show"), e);
    };
    n.getCouponList = function (e) {
      return (0, a.requestApi)("".concat(d, "/aosbase/coupons_show"), e);
    };
    n.getCouponDetail = function (e) {
      return (0, a.requestApi)("".concat(d, "/aosbase/coupons_detailmy"), e);
    };
    n.getCurrencyRecordList = function (e) {
      return (0, a.requestApi)("".concat(d, "/aosbase/currency_record"), e);
    };
    n.getMemberGlobalSetting = function (e) {
      return (0, a.requestApi)("".concat(p, "/aosbase/_set_showv2/").concat(e, ".json"));
    };
    n.getSigninActivityDetail = function (e) {
      return (0, a.requestApi)("".concat(d, "/aossignin/_ac_detail"), e);
    };
    n.submitSignin = function (e) {
      return (0, a.requestApi)("".concat(d, "/aossignin/ac_sub"), e, "POST");
    };
    n.getSigninRankList = function (e) {
      return (0, a.requestApi)("".concat(d, "/aossignin/show_rank"), e);
    };
    n.checkSigninIsInLocation = function (e) {
      return (0, a.requestApi)("".concat(d, "/aossignin/ac_rulecheck"), e);
    };
    n.getWithdrawConfig = function (e) {
      return (0, a.requestApi)("".concat(d, "/aosbase/withdraw_getconfig"), e);
    };
    n.submitWithdraw = function (e) {
      return (0, a.requestApi)("".concat(d, "/aosbase/withdraw_sub"), e, "POST");
    };
    n.getWithdrawLogList = function (e) {
      return (0, a.requestApi)("".concat(d, "/aosbase/withdraw_show"), e);
    };
    n.getSigninCurrencyTotal = function (e) {
      return (0, a.requestApi)("".concat(d, "/aosbase/currency_total"), e);
    };
    n.getLaunchContentList = function (e) {
      var n = getApp().globalData.appid;
      return (0, a.requestApiNoAuth)("".concat(p, "/aosput/_content_showv2/").concat(n, "/").concat(e.position_uuid, ".json"), e);
    };
    n.fissionTake = function (e) {
      return (0, a.requestApi)("".concat(d, "/aosfission/task_take"), e, "POST");
    };
    n.getFissionTakeProgress = function (e) {
      return (0, a.requestApi)("".concat(d, "/aosfission/gettaskprogress"), e);
    };
    n.getFissionHelpDetail = function (e) {
      return (0, a.requestApi)("".concat(d, "/aosfission/_help_detail"), e);
    };
    n.createHelpFissionInviteTask = function (e) {
      return (0, a.requestApi)("".concat(d, "/aosfission/help_fissiontaskcreate"), e, "POST");
    };
    n.getFissionHelpRecordlList = function (e) {
      return (0, a.requestApi)("".concat(d, "/aosfission/task_show"), e);
    };
    n.getHelpRankList = function (e) {
      return (0, a.requestApi)("".concat(d, "/aosfission/_act_rank"), e);
    };
    n.getBagStatus = function (e) {
      return (0, a.requestApi)("".concat(d, "/aosexpansive/options_get_state"), e, "POST");
    };
    n.getFissionDilateDetail = function (e) {
      return (0, a.requestApi)("".concat(d, "/aosexpansive/_expansive_detail"), e);
    };
    n.createDilateFissionInviteTask = function (e) {
      return (0, a.requestApi)("".concat(d, "/aosexpansive/get_task"), e, "POST");
    };
    n.gitUserDilateInfo = function (e) {
      return (0, a.requestApi)("".concat(d, "/aosexpansive/expansive_user"), e, "POST");
    };
    n.addUserDilateInviteRecord = function (e) {
      return (0, a.requestApi)("".concat(d, "/aosexpansive/expansive_help_user"), e, "POST");
    };
    n.tipUserIsHelpDilate = function (e) {
      return (0, a.requestApi)("".concat(d, "/aosexpansive/get_task_user"), e, "POST");
    };
    n.getDilateCarouselInfo = function (e) {
      return (0, a.requestApi)("".concat(d, "/aosexpansive/_done_user_list"), e, "POST");
    };
    n.getBagLuckyDraw = function (e) {
      return (0, a.requestApi)("".concat(d, "/aosexpansive/expansive_get_options"), e, "POST");
    };
    n.getInviteRecord = function (e) {
      return (0, a.requestApi)("".concat(d, "/aosexpansive/get_invite_list"), e, "POST");
    };
    n.getStepsportDetail = function (e) {
      return (0, a.requestApi)("".concat(d, "/aosstepsport/_ac_detail"), e);
    };
    n.getTodayAndThisMonthSteps = function (e) {
      return (0, a.requestApi)("".concat(d, "/aosstepsport/usersteps"), e, "POST");
    };
    n.getUserToApplets = function (e) {
      return (0, a.requestApi)("".concat(d, "/aosstepsport/ac_getmini"), e, "POST");
    };
    n.todayRrankingSteps = function (e) {
      return (0, a.requestApi)("".concat(d, "/aosstepsport/_useractday_rank"), e);
    };
    n.AllRrankingSteps = function (e) {
      return (0, a.requestApi)("".concat(d, "/aosstepsport/_useract_rank"), e);
    };
    n.focusOnRrankingSteps = function (e) {
      return (0, a.requestApi)("".concat(d, "/aosstepsport/user_focus_list"), e);
    };
    n.getUserDetailStepsInfo = function (e) {
      return (0, a.requestApi)("".concat(d, "/aosstepsport/_useractday_all"), e);
    };
    n.getUserthisMonthSteps = function (e) {
      return (0, a.requestApi)("".concat(d, "/aosstepsport/_useract_all"), e);
    };
    n.focusOnUsers = function (e) {
      return (0, a.requestApi)("".concat(d, "/aosstepsport/userfocus_sub"), e);
    };
    n.userfocusOnIs = function (e) {
      return (0, a.requestApi)("".concat(d, "/aosstepsport/userfocus_is"), e);
    };
    n.cancelFocusOnUsers = function (e) {
      return (0, a.requestApi)("".concat(d, "/aosstepsport/userfocus_cancel"), e, "POST");
    };
    n.exchangeSuccessUser = function (e) {
      return (0, a.requestApi)("".concat(d, "/aosstepsport/_exchanged_list"), e, "POST");
    };
    n.stepsExchangeIntegral = function (e) {
      return (0, a.requestApi)("".concat(d, "/aosstepsport/useractday_exchange"), e, "POST");
    };
    n.getCurrentUserDetailStepsInfo = function (e) {
      return (0, a.requestApi)("".concat(d, "/aosstepsport/has_exchanged"), e);
    };
    n.getUserDayDetailInfo = function (e) {
      return (0, a.requestApi)("".concat(d, "/aosstepsport/_useract_days_rank"), e);
    };
    n.createStepSportFissionInviteTask = function (e) {
      return (0, a.requestApi)("".concat(d, "/aosstepsport/ac_fissiontaskcreate"), e, "POST");
    };
    n.getCheckersDetail = function (e) {
      return (0, a.requestApi)("".concat(d, "/aoscheckers/_ac_detail"), e);
    };
    n.createCheckersFissionInviteTask = function (e) {
      return (0, a.requestApi)("".concat(d, "/aoscheckers/ac_fissiontaskcreate"), e, "POST");
    };
    n.getUserPlayCheckersTimes = function (e) {
      return (0, a.requestApi)("".concat(d, "/aoscheckers/ac_checkers_times"), e, "GET", !0);
    };
    n.startCheckersGame = function (e) {
      return (0, a.requestApi)("".concat(d, "/aoscheckers/ac_start"), e, "POST");
    };
    n.getCheckersTaskContent = function (e) {
      return (0, a.requestApi)("".concat(d, "/aoscheckers/ac_gettaskcontent"), e);
    };
    n.buyPlayCheckersTimes = function (e) {
      return (0, a.requestApi)("".concat(d, "/aoscheckers/ac_cash"), e, "POST");
    };
    n.submitCheckersGameOver = function (e) {
      return (0, a.requestApi)("".concat(d, "/aoscheckers/ac_sub"), e, "POST");
    };
    n.getPoetryDetail = function (e) {
      return (0, a.requestApi)("".concat(d, "/aospoetry/_ac_detail"), e);
    };
    n.getPoetryPassQuestion = function (e) {
      return (0, a.requestApi)("".concat(d, "/aospoetry/ac_getnext"), e);
    };
    n.submitPoetryPass = function (e) {
      return (0, a.requestApi)("".concat(d, "/aospoetry/ac_sub"), e, "POST");
    };
    n.startPoetrySeekHelp = function (e) {
      return (0, a.requestApi)("".concat(d, "/aospoetry/ac_helpsend"), e, "POST");
    };
    n.getPoetryHelpProgress = function (e) {
      return (0, a.requestApi)("".concat(d, "/aospoetry/ac_checkhelp"), e);
    };
    n.submitPoetryHelp = function (e) {
      return (0, a.requestApi)("".concat(d, "/aospoetry/ac_helpsub"), e, "POST");
    };
    n.getPoetryHelpQuestionDetail = function (e) {
      return (0, a.requestApi)("".concat(d, "/aospoetry/ac_helpdetail"), e);
    };
    n.getPoetryRankList = function (e) {
      return (0, a.requestApi)("".concat(d, "/aospoetry/act_rank"), e);
    };
    n.getPoetryTipTimes = function (e) {
      return (0, a.requestApi)("".concat(d, "/aospoetry/ac_tiptimes"), e);
    };
    n.reSubmitPoetry = function (e) {
      return (0, a.requestApi)("".concat(d, "/aospoetry/ac_resub"), e, "POST");
    };
    n.getLiveDetail = function (e) {
      return (0, a.requestApi)("".concat(d, "/aoslive/_ac_detail"), e);
    };
    n.getLiveGoodsList = function (e) {
      return (0, a.requestApi)("".concat(d, "/aoslive/_goods_list"), e);
    };
    n.getLiveActivityList = function (e) {
      return (0, a.requestApi)("".concat(d, "/aoslive/_ac_show"), e);
    };
    n.getLiveActivityOpMsg = function (e) {
      return (0, a.requestApi)("".concat(d, "/aoslive/_msg"), e);
    };
    n.getLiveReportList = function (e) {
      return (0, a.requestApiNoAuth)("".concat(p, "/aoslive/_acreport_showv2/").concat(e.activity_id, ".json"), e);
    };
    n.getLiveReportClassList = function (e) {
      return (0, a.requestApiNoAuth)("".concat(p, "/aoslive/_acreportclass_showv2/").concat(e.activity_id, ".json"), e);
    };
    n.submitLiveEvent = function (e) {
      return (0, a.requestApi)("".concat(d, "/aosliveonline/sub_event"), e, "POST");
    };
    n.getLiveEventInfo = function (e) {
      return (0, a.requestApiNoAuth)("".concat(p, "/aosliveonline/_get_event/").concat(e, ".json"));
    };
    n.getLiveFastActivityDetail = function (e) {
      return (0, a.requestApi)("".concat(d, "/aoslive/_choose_detail"), e);
    };
    n.submitLiveFastActivity = function (e) {
      return (0, a.requestApi)("".concat(d, "/aoslive/choose_sub"), e, "POST");
    };
    n.getInviteDetail = function (e) {
      return (0, a.requestApi)("".concat(d, "/aosinvite/_ac_detail"), e);
    };
    n.getUserInviteInfo = function (e) {
      return (0, a.requestApi)("".concat(d, "/aosinvite/user_act"), e);
    };
    n.updateUserInviteInfo = function (e) {
      return (0, a.requestApi)("".concat(d, "/aosinvite/user_actupdate"), e, "POST");
    };
    n.submitUserInvite = function (e) {
      return (0, a.requestApi)("".concat(d, "/aosinvite/ac_sub"), e, "POST");
    };
    n.getUserInviteLogList = function (e) {
      return (0, a.requestApi)("".concat(d, "/aosinvite/act_record"), e);
    };
    n.getInviteUserDetail = function (e) {
      return (0, a.requestApi)("".concat(d, "/aosinvite/_user_detail"), e);
    };
    n.getFootmarkDetail = function (e) {
      return (0, a.requestApi)("".concat(d, "/aoslearnfoot/_ac_detail"), e);
    };
    n.getFootmarkPassList = function (e) {
      return (0, a.requestApi)("".concat(d, "/aoslearnfoot/_option_list"), e);
    };
    n.getFootmarkPassDetail = function (e) {
      return (0, a.requestApi)("".concat(d, "/aoslearnfoot/option_detail"), e);
    };
    n.getFootmarkRankList = function (e) {
      return (0, a.requestApi)("".concat(d, "/aoslearnfoot/_organ_rank"), e);
    };
    n.finishFootmarkOptionTask = function (e) {
      return (0, a.requestApi)("".concat(d, "/aoslearnfoot/option_taskdone"), e, "POST");
    };
    n.getActivityTaskList = function (e) {
      return (0, a.requestApi)("".concat(d, "/aosbasemodule/_task_list"), e);
    };
    n.createActivityTask = function (e) {
      return (0, a.requestApi)("".concat(d, "/aosbasemodule/task_create"), e, "POST");
    };
    n.finishActivityTask = function (e) {
      return (0, a.requestApi)("".concat(d, "/aosbasemodule/task_done"), e, "POST");
    };
    n.getActivityTaskDetail = function (e) {
      return (0, a.requestApi)("".concat(d, "/aosbasemodule/_task_detail"), e);
    };
    n.getWishDetail = function (e) {
      return (0, a.requestApi)("".concat(d, "/aoswish/_ac_detail"), e);
    };
    n.makeWishCode = function (e) {
      return (0, a.requestApi)("".concat(d, "/aoswish/ac_makecode"), e, "POST");
    };
    n.getWishInfoByCode = function (e) {
      return (0, a.requestApi)("".concat(d, "/aoswish/ac_getcode"), e);
    };
    n.getClockinDetail = function (e) {
      return (0, a.requestApi)("".concat(d, "/aosclockin/_ac_detail"), e);
    };
    n.submitClockin = function (e) {
      return (0, a.requestApi)("".concat(d, "/aosclockin/ac_sub"), e, "POST");
    };
    n.getClockinRankList = function (e) {
      return (0, a.requestApi)("".concat(d, "/aosclockin/show_rank"), e);
    };
    n.getClockinJoinList = function (e) {
      return (0, a.requestApi)("".concat(d, "/aosclockin/show_user"), e);
    };
    n.checkClockinIsInLocation = function (e) {
      return (0, a.requestApi)("".concat(d, "/aosclockin/ac_rulecheck"), e);
    };
    n.getGuessDetail = function (e) {
      return (0, a.requestApi)("".concat(d, "/aosguess/_ac_detail"), e);
    };
    n.getGuessContestTimeList = function (e) {
      return (0, a.requestApi)("".concat(d, "/aosguess/_contest_timecolumn"), e);
    };
    n.getGuessContestList = function (e) {
      return (0, a.requestApi)("".concat(d, "/aosguess/_contest_show"), e);
    };
    n.submitGuessContest = function (e) {
      return (0, a.requestApi)("".concat(d, "/aosguess/contest_sub"), e, "POST");
    };
    n.getGuessRecordList = function (e) {
      return (0, a.requestApi)("".concat(d, "/aosguess/_act_record"), e);
    };
    n.getMyGuessRecordList = function (e) {
      return (0, a.requestApi)("".concat(d, "/aosguess/act_user"), e);
    };
    n.getStudyPassList = function (e) {
      return (0, a.requestApi)("".concat(d, "/aoslearnfoot/_optionp_list"), e);
    };
    n.getStudyPassDetail = function (e) {
      return (0, a.requestApi)("".concat(d, "/aoslearnfoot/optionp_detail"), e);
    };
    n.getStudyUserRankList = function (e) {
      return (0, a.requestApi)("".concat(d, "/aoslearnfoot/_user_rank"), e);
    };
    n.getStudyUserRecordList = function (e) {
      return (0, a.requestApi)("".concat(d, "/aoslearnfoot/act_user_record"), e);
    };
    n.getStudyUserTotalScore = function (e) {
      return (0, a.requestApi)("".concat(d, "/aoslearnfoot/user_detail"), e);
    };
    n.getScreenInteractDetail = function (e) {
      return (0, a.requestApi)("".concat(d, "/aosscreeninteract/_ac_detail"), e);
    };
    n.getScreenSigninTimes = function (e) {
      return (0, a.requestApi)("".concat(d, "/aosscreeninteract/ac_signin_times"), e);
    };
    n.submitScreenSignin = function (e) {
      return (0, a.requestApi)("".concat(d, "/aosscreeninteract/ac_signin_sub"), e, "POST");
    };
    n.getScreenLotteryLog = function (e) {
      return (0, a.requestApi)("".concat(d, "/aosscreeninteract/act_lottery_user"), e);
    };
    n.getScreenLotteryLogDetail = function (e) {
      return (0, a.requestApi)("".concat(d, "/aosscreeninteract/act_lottery_record_detail"), e);
    };
    n.checkScreenInteractIsInLocation = function (e) {
      return (0, a.requestApi)("".concat(d, "/aosscreeninteract/ac_rulecheck"), e);
    };
    n.checkScreenInteractUserIsInner = function (e) {
      return (0, a.requestApi)("".concat(d, "/aosscreeninteract/act_usercheck"), e);
    };
    n.getPageDesignAttrInfo = function (e) {
      var n = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0,
        t = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 0,
        o = "".concat(p, "/cms/page_getattr/").concat(e, ".json");
      return t ? (o += "?preview=" + t, (0, a.requestApiNoAuth)(o)) : (n && (o += "?_pubid=" + n), (0, a.requestApiNoAuth)(o));
    };
    n.getPageDesignConfig = function (e) {
      return (0, a.requestApi)("".concat(p, "/cms/page_getattr/_page_attr"), e);
    };
    n.getAIFaceFusionDetail = function (e) {
      return (0, a.requestApi)("".concat(d, "/aosimageai/_ac_detail"), e);
    };
    n.submitAIFaceFusion = function (e) {
      return (0, a.requestApi)("".concat(d, "/aosimageai/imageai_facemerge"), e, "POST");
    };
    n.getFarmDetail = function (e) {
      return (0, a.requestApi)("".concat(d, "/aosfarm/_set_detail"), e);
    };
    n.getFarmUserDetail = function (e) {
      return (0, a.requestApi)("".concat(d, "/aosfarm/farm_user_detail"), e);
    };
    n.getFarmKindClassList = function (e) {
      return (0, a.requestApi)("".concat(d, "/aosfarm/kindclass_list"), e);
    };
    n.buyFarmKind = function (e) {
      return (0, a.requestApi)("".concat(d, "/aosfarm/kind_buy"), e, "POST");
    };
    n.fertilizeFarmKind = function (e) {
      return (0, a.requestApi)("".concat(d, "/aosfarm/kind_dose"), e, "POST");
    };
    n.getFarmUserVegList = function (e) {
      return (0, a.requestApi)("".concat(d, "/aosfarm/farm_user_act_list"), e);
    };
    n.receiveFarmEnergyEveryDay = function (e) {
      return (0, a.requestApi)("".concat(d, "/aosfarm/farm_energy_get"), e, "POST");
    };
    n.pointsConsumed = function (e) {
      return (0, a.requestApi)("".concat(d, "/aosfarm/farm_cousume_addenergy"), e, "POST");
    };
    n.getFarmEnergyUserList = function (e) {
      return (0, a.requestApi)("".concat(d, "/aosfarm/farm_user_get"), e);
    };
    n.collectFarmEnergy = function (e) {
      return (0, a.requestApi)("".concat(d, "/aosfarm/farm_energy_steal"), e, "POST");
    };
    n.getMyFarmTrendsList = function (e) {
      return (0, a.requestApi)("".concat(d, "/aosfarm/farm_energy_record_my"), e);
    };
    n.getFertilizeDayTimes = function (e) {
      return (0, a.requestApi)("".concat(d, "/aosfarm/farm_user_daytimes"), e);
    };
    n.getFarmExchangeLogList = function (e) {
      return (0, a.requestApi)("".concat(d, "/aosfarm/farm_exchange_list"), e);
    };
    n.cancelPlantFarmLand = function (e) {
      return (0, a.requestApi)("".concat(d, "/aosfarm/farm_user_act_discard"), e, "POST");
    };
    n.pluckFarmVeg = function (e) {
      return (0, a.requestApi)("".concat(d, "/aosfarm/farm_exchange_sub"), e, "POST");
    };
    n.getFarmExchangeGoodsList = function (e) {
      return (0, a.requestApi)("".concat(d, "/aosfarm/goods_list"), e);
    };
    n.getFarmExchangeGoodsDetail = function (e) {
      return (0, a.requestApi)("".concat(d, "/aosfarm/goods_detail"), e);
    };
    n.exchangeFarmVeg = function (e) {
      return (0, a.requestApi)("".concat(d, "/aosfarm/farm_exchange_do"), e, "POST");
    };
    n.getFarmGrowupLevelList = function (e) {
      return (0, a.requestApi)("".concat(d, "/aosfarm/kind_list"), e);
    };
    n.buyFarmKindsKind = function (e) {
      return (0, a.requestApi)("".concat(d, "/aosfarmers/kind_buy"), e, "POST");
    };
    n.getFarmKindsDetail = function (e) {
      return (0, a.requestApi)("".concat(d, "/aosfarmers/_activity_detail"), e);
    };
    n.getFarmKindsUserDetail = function (e) {
      return (0, a.requestApi)("".concat(d, "/aosfarmers/farmers_user_detail"), e);
    };
    n.receiveFarmKindsEnergyEveryDay = function (e) {
      return (0, a.requestApi)("".concat(d, "/aosfarmers/farmers_energy_get"), e, "POST");
    };
    n.fertilizeFarmKindsAnimal = function (e) {
      return (0, a.requestApi)("".concat(d, "/aosfarmers/kind_dose"), e, "POST");
    };
    n.getFarmKindsEnergyUserList = function (e) {
      return (0, a.requestApi)("".concat(d, "/aosfarmers/farmers_user_get"), e);
    };
    n.collectFarmKindsEnergy = function (e) {
      return (0, a.requestApi)("".concat(d, "/aosfarmers/farmers_energy_steal"), e, "POST");
    };
    n.getMyFarmKindsTrendsList = function (e) {
      return (0, a.requestApi)("".concat(d, "/aosfarmers/farmers_energy_record_my"), e);
    };
    n.getFarmKindsFertilizeDayTimes = function (e) {
      return (0, a.requestApi)("".concat(d, "/aosfarmers/farmers_user_daytimes"), e);
    };
    n.getFarmKindsExchangeLogList = function (e) {
      return (0, a.requestApi)("".concat(d, "/aosfarmers/farmers_exchange_list"), e);
    };
    n.getFarmKindsExchangeGoodsList = function (e) {
      return (0, a.requestApi)("".concat(d, "/aosfarmers/goods_list"), e);
    };
    n.exchangeFarmKindsGoods = function (e) {
      return (0, a.requestApi)("".concat(d, "/aosfarmers/farmers_exchange_do"), e, "POST");
    };
    n.getFarmKindsInviteLinkParams = function (e) {
      return (0, a.requestApi)("".concat(d, "/aosfarmers/invite_send"), e);
    };
    n.getFarmKindsInviteDetailInfo = function (e) {
      return (0, a.requestApi)("".concat(d, "/aosfarmers/_invite_detail"), e);
    };
    n.joinFarmKindsInviteTeam = function (e) {
      return (0, a.requestApi)("".concat(d, "/aosfarmers/invite_join"), e, "POST");
    };
    n.getFarmKindsAnimal = function (e) {
      return (0, a.requestApi)("".concat(d, "/aosfarmers/farmers_user_act_list"), e);
    };
    n.getFarmKindsGrowupLevelList = function (e) {
      return (0, a.requestApi)("".concat(d, "/aosfarmers/kind_list"), e);
    };
    n.pluckFarmKindsAnimal = function (e) {
      return (0, a.requestApi)("".concat(d, "/aosfarmers/farmers_exchange_sub"), e, "POST");
    };
    n.getNewsActivityDetail = function (e) {
      return (0, a.requestApi)("".concat(d, "/aosnewstask/_ac_detail"), e);
    };
    n.getNewsTaskList = function (e) {
      return (0, a.requestApi)("".concat(d, "/aosnewstask/_option_task"), e);
    };
    n.getNewsTaskDetailInfo = function (e) {
      return (0, a.requestApi)("".concat(d, "/aosnewstask/task_sub"), e);
    };
    n.getVenueClockinActivityDetail = function (e) {
      return (0, a.requestApi)("".concat(d, "/aosvenueclockin/_detail"), e);
    };
    n.likeVenueClockin = function (e) {
      return (0, a.requestApi)("".concat(d, "/aosvenueclockin/ac_like"), e, "POST");
    };
    n.getVenueList = function (e) {
      return (0, a.requestApi)("".concat(d, "/aosvenueclockin/_ac_venue_list"), e);
    };
    n.getVenueDetail = function (e) {
      return (0, a.requestApi)("".concat(d, "/aosvenueclockin/_venue_detail"), e);
    };
    n.getVenueClockinLogList = function (e) {
      return (0, a.requestApi)("".concat(d, "/aosvenueclockin/_venue_take_list"), e);
    };
    n.submitVenueClockin = function (e) {
      return (0, a.requestApi)("".concat(d, "/aosvenueclockin/venue_sub"), e, "POST");
    };
    n.getVenueClockinRankDetail = function (e) {
      return (0, a.requestApi)("".concat(d, "/aosvenueclockin/_user_rank"), e);
    };
    n.getVenueClockinInfo = function (e) {
      return (0, a.requestApi)("".concat(d, "/aosvenueclockin/_venue_my_take"), e);
    };
    n.getClockinVenueRankDetail = function (e) {
      return (0, a.requestApi)("".concat(d, "/aosvenueclockin/_user_venue_rank"), e);
    };
    n.getVenueClockinGroupList = function (e) {
      return (0, a.requestApi)("".concat(d, "/aosvenueclockin/_group_list"), e);
    };
    n.getVenueClockinGroupDetail = function (e) {
      return (0, a.requestApi)("".concat(d, "/aosvenueclockin/_group_detail"), e);
    };
    n.postVenueClockinExchange = function (e) {
      return (0, a.requestApi)("".concat(d, "/aosvenueclockin/exchange"), e);
    };
    n.getExchangeStateInfo = function (e) {
      return (0, a.requestApi)("".concat(d, "/aosvenueclockin/exchange_state"), e);
    };
    n.getQueryActivityDetail = function (e) {
      return (0, a.requestApi)("".concat(d, "/aosquery/_detail"), e, "GET");
    };
    n.getQueryField = function (e) {
      return (0, a.requestApi)("".concat(d, "/aosquery/get_search"), e, "GET");
    };
    n.postQueryContent = function (e) {
      return (0, a.requestApi)("".concat(d, "/aosquery/search"), e, "POST");
    };
    n.getWorkSheetId = function (e) {
      return (0, a.requestApi)("".concat(d, "/aosmall/worksheet_detail"), e, "GET");
    };
    n.getBusinessWorkSheetId = function (e) {
      return (0, a.requestApi)("".concat(d, "/aosmall/business_worksheet_detail"), e, "GET");
    };
    n.getWorkSheetMessageList = function (e) {
      return (0, a.requestApi)("".concat(d, "/aosmall/worksheet_messages"), e, "GET");
    };
    n.sendWorkSheetMessage = function (e) {
      return (0, a.requestApi)("".concat(d, "/aosmall/worksheet_message_create"), e, "POST");
    };
    n.readPreSalesUserWorkSheetMessage = function (e) {
      return (0, a.requestApi)("".concat(r, "/aos/mall-order-worksheet/update"), e, "POST");
    };
    n.senPreSalesUserWorkSheetMessage = function (e) {
      return (0, a.requestApi)("".concat(r, "/aos/mall-order-worksheet-message/create"), e, "POST");
    };
    n.getPreSalesUserSessionInfoList = function (e) {
      return (0, a.requestApi)("".concat(r, "/aos/mall-order-worksheet-message/show"), e);
    };
    n.getActivityTypeList = function (e) {
      return (0, a.requestApi)("".concat(d, "/cms/datasource_data/huo_dong_lan_mu_lie_biao.json"), e);
    };
    n.getInJsAccessToken = function () {
      return (0, a.requestApiNoAuth)("".concat(d, "/admin/_service_custom_jsxww_getaccesstoken?access_t_id=1&access_t_id_in=1"));
    };
    n.getTestCouponList = function (e) {
      return (0, a.requestApi)("".concat(d, "/aosbase/_coupons_test_show"), e);
    };
    n.receiveTestCoupon = function (e) {
      return (0, a.requestApi)("".concat(d, "/aosbase/coupons_test_get"), e, "POST");
    };
    n.getCollectActivityDetail = function (e) {
      return (0, a.requestApi)("".concat(d, "/aoscollectcard/_detail"), e);
    };
    n.getAuthorHaveCards = function (e) {
      return (0, a.requestApi)("".concat(d, "/aoscollectcard/ac_have_card_list"), e);
    };
    n.getAuthorDrawCards = function (e) {
      return (0, a.requestApi)("".concat(d, "/aoscollectcard/ac_draw_card"), e);
    };
    n.getAuthorSyntheticCards = function (e) {
      return (0, a.requestApi)("".concat(d, "/aoscollectcard/ac_synthetic_card"), e);
    };
    n.getAuthorSendCards = function (e) {
      return (0, a.requestApi)("".concat(d, "/aoscollectcard/ac_send_card"), e);
    };
    n.getAuthorGetCards = function (e) {
      return (0, a.requestApi)("".concat(d, "/aoscollectcard/ac_get_user_card"), e);
    };
    n.getAuthorCompleteCards = function (e) {
      return (0, a.requestApi)("".concat(d, "/aoscollectcard/_complete_users"), e);
    };
    n.getCardDetail = function (e) {
      return (0, a.requestApi)("".concat(d, "/aoscollectcard/ac_get_card_detail"), e);
    };
    n.getChouKaCount = function (e) {
      return (0, a.requestApi)("".concat(d, "/aoscollectcard/get_user_times"), e);
    };
    n.sendCardRecordList = function (e) {
      return (0, a.requestApi)("".concat(d, "/aoscollectcard/ac_get_send_list"), e);
    };
    n.getBookingLotteryAcDetail = function (e) {
      return (0, a.requestApi)("".concat(d, "/aosreverse/_detail"), e);
    };
    n.getBookingSignupNum = function (e) {
      return (0, a.requestApi)("".concat(d, "/aosreverse/get_signup_num"), e);
    };
    n.getBookingLotteryProgress = function (e) {
      return (0, a.requestApi)("".concat(d, "/aosreverse/user_progress"), e);
    };
    n.submitBookingLotterySignup = function (e) {
      return (0, a.requestApi)("".concat(d, "/aosreverse/user_signup"), e, "POST");
    };
    n.getBookingLotteryUserIsSignup = function (e) {
      return (0, a.requestApi)("".concat(d, "/aosreverse/user_is_signup"), e);
    };
    n.checkBookingLotteryTaskIsFinish = function (e) {
      return (0, a.requestApi)("".concat(d, "/aosreverse/user_is_taskcomplete"), e);
    };
    n.getWhippedActivityDetail = function (e) {
      return (0, a.requestApi)("".concat(d, "/aoswhipped/_detail"), e);
    };
    n.startWhippedGame = function (e) {
      return (0, a.requestApi)("".concat(d, "/aoswhipped/start_game"), e);
    };
    n.postWhippedIdVerify = function (e) {
      return (0, a.requestApi)("".concat(d, "/aosbasemodule/idcard_adult_verify"), e, "POST");
    };
    n.getWhippedDayRankDetail = function (e) {
      return (0, a.requestApi)("".concat(d, "/aoswhipped/_get_day_rank"), e);
    };
    n.getWhippedWeekRankDetail = function (e) {
      return (0, a.requestApi)("".concat(d, "/aoswhipped/_get_week_rank"), e);
    };
    n.getWhippedMonthRankDetail = function (e) {
      return (0, a.requestApi)("".concat(d, "/aoswhipped/_get_month_rank"), e);
    };
    n.getWhippedHistoryRankDetail = function (e) {
      return (0, a.requestApi)("".concat(d, "/aoswhipped/_get_rank"), e);
    };
    n.getGuanDanSettingDetail = function (e) {
      return (0, a.requestApi)("".concat(d, "/aosguandan/_sets"), e);
    };
    n.getGuanDanRankInfo = function (e) {
      return (0, a.requestApi)("".concat(d, "/aosguandan/_rank"), e);
    };
    n.exchangeMoney = function (e) {
      return (0, a.requestApi)("".concat(d, "/aosguandan/integral_consume"), e);
    };
    n.checkGuanDanDetailInfo = function (e) {
      return (0, a.requestApi)("".concat(d, "/aosguandan/mission_sub"), e, "POST");
    };
    n.getGuanDanUserInfo = function (e) {
      return (0, a.requestApi)("".concat(d, "/aosguandan/user_info"), e);
    };
    n.getGuanDanActivityList = function (e) {
      return (0, a.requestApi)("".concat(d, "/aosguandan/_ac_list"), e);
    };
    n.getNschoolSubjectListDetail = function (e) {
      return (0, a.requestApi)("".concat(d, "/aosnschool/_discipline_show"), e);
    };
    n.getNschoolsDetailInfo = function (e) {
      return (0, a.requestApi)("".concat(d, "/aosnschool/_school_detail"), e);
    };
    n.getNschoolsSubjectDetail = function (e) {
      return (0, a.requestApi)("".concat(d, "/aosnschool/_discipline_detail"), e);
    };
    n.getNschoolsLessonList = function (e) {
      return (0, a.requestApi)("".concat(d, "/aosnschool/_course_show"), e);
    };
    n.getNschoolsSignupList = function (e) {
      return (0, a.requestApi)("".concat(d, "/aosnschool/signup_show"), e);
    };
    n.postNschoolsSignup = function (e) {
      return (0, a.requestApi)("".concat(d, "/aosnschool/signup_sub"), e, "POST");
    };
    n.getNschoolsSigninList = function (e) {
      return (0, a.requestApi)("".concat(d, "/aosnschool/signin_show"), e);
    };
    n.postNschoolsSignin = function (e) {
      return (0, a.requestApi)("".concat(d, "/aosnschool/signin_sub"), e);
    };
    n.postPublishInfo = function (e) {
      return (0, a.requestApi)("".concat(h, "/aosinfopub/info_publish"), e, "POST");
    };
    n.getInfoPublishDetail = function (e) {
      return (0, a.requestApi)("".concat(h, "/aosinfopub/_info_detail"), e);
    };
    n.getInfoPublishList = function (e) {
      return (0, a.requestApi)("".concat(h, "/aosinfopub/_info_show"), e);
    };
    n.updateInfoPublishContent = function (e) {
      return (0, a.requestApi)("".concat(h, "/aosinfopub/info_update"), e, "POST");
    };
    n.deleteInfoPublishContent = function (e) {
      return (0, a.requestApi)("".concat(h, "/aosinfopub/info_delete"), e, "POST");
    };
    n.getInfoPublishUserInfo = function (e) {
      return (0, a.requestApi)("".concat(h, "/aosinfopub/userinfo"), e);
    };
    n.postContentInfoReport = function (e) {
      return (0, a.requestApi)("".concat(h, "/aosinfopub/report_create"), e, "POST");
    };
    n.getActivityShowList = function (e) {
      return (0, a.requestApi)("".concat(d, "/aosbase/_activity_show"), e, "POST");
    };
    n.getSmallGameDetail = function (e) {
      return (0, a.requestApi)("".concat(d, "/aosgame/_detail"), e);
    };
    n.initSmallGame = function (e) {
      return (0, a.requestApi)("".concat(d, "/aosgame/init_game"), e, "POST");
    };
    n.getSmallGamePlayNum = function (e) {
      return (0, a.requestApi)("".concat(d, "/aosgame/get_take"), e);
    };
    n.validateSmallGame = function (e) {
      return (0, a.requestApi)("".concat(d, "/aosgame/valid_customs"), e, "POST");
    };
    n.exchangeSmallGamePlayNum = function (e) {
      return (0, a.requestApi)("".concat(d, "/aosgame/add_take_time"), e, "POST");
    };
    n.validateNeurocatStep = function (e) {
      return (0, a.requestApi)("".concat(d, "/aosgame/valid_customs"), e, "POST");
    };
    n.getSmallGameRankList = function (e) {
      return (0, a.requestApi)("".concat(d, "/aosgame/user_rank"), e);
    };
    n.getbobingActivityDetail = function (e) {
      return (0, a.requestApi)("".concat(f, "/bobing-activity/_detail"), e);
    };
    n.getRoomDetailList = function (e) {
      return (0, a.requestApi)("".concat(f, "/bobing-room/_list"), e);
    };
    n.getRoomDetail = function (e) {
      return (0, a.requestApi)("".concat(f, "/bobing-room/_detail"), e);
    };
    n.getActivityInit = function (e) {
      return (0, a.requestApi)("".concat(f, "/bobing-user/init"), e);
    };
    n.getRoomBobingRecordList = function (e) {
      return (0, a.requestApi)("".concat(f, "/bobing-user/_record"), e);
    };
    n.postBobingSubmit = function (e) {
      return (0, a.requestApi)("".concat(f, "/bobing-activity/ac_sub"), e, "POST");
    };
    n.getBobingChances = function (e) {
      return (0, a.requestApi)("".concat(f, "/bobing-activity/ac_times"), e);
    };
    n.getBobingRoomRankList = function (e) {
      return (0, a.requestApi)("".concat(f, "/bobing-user/_rank"), e);
    };
    n.createBobingFissionInviteTask = function (e) {
      return (0, a.requestApi)("".concat(d, "/aosbobing/ac_fissiontaskcreate"), e, "POST");
    };
  },
  "9ff1": function (e, n, t) {
    t("5c47"), t("2c10"), t("5ef2"), function () {
      var e = navigator.userAgent;
      (!e.match(/AppleWebKit.*Mobile.*/) || e.indexOf("iPad") > -1) && (window.innerWidth = 750);
    }();
  },
  b2ee: function (e, n, t) {
    (function (e) {
      var n = t("883d").default,
        o = t("4db6").default,
        i = t("bdbb").default;
      t("6a54"), t("aa9c"), t("8f71"), t("bf0f"), t("2797"), t("5c47"), t("0506"), t("c223"), t("d4b5");
      var a = Object.defineProperty,
        r = function (e, n, t) {
          return function (e, n, t) {
            n in e ? a(e, n, {
              enumerable: !0,
              configurable: !0,
              writable: !0,
              value: t
            }) : e[n] = t;
          }(e, "symbol" != i(n) ? n + "" : n, t), t;
        },
        u = function () {
          "use strict";

          function e() {
            n(this, e), r(this, "handlers", {});
          }
          return o(e, [{
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
              var t = this.handlers[e];
              t && t.forEach(function (e) {
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

          function t() {
            n(this, t), r(this, "i", 0), r(this, "e", new u()), r(this, "completes", []), r(this, "state", 0), r(this, "c");
          }
          return o(t, [{
            key: "config",
            value: function (n) {
              var t = this;
              this.c = n, this.mcJssdkBridgeReady(this.c, {
                success: function () {
                  var n;
                  t.state = 1, t.completes.forEach(function (e) {
                    e();
                  }), null != (n = t.c) && n.debug && e.log("McJSBridgeReady::success");
                },
                fail: function (n) {
                  var o;
                  null != (o = t.c) && o.debug && e.log("McJSBridgeReady::fail", n);
                },
                complete: function () {
                  var n;
                  null != (n = t.c) && n.debug && e.log("McJSBridgeReady::complete");
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
            value: function (e, n, t) {
              var o = "".concat(e, "::").concat(++this.i);
              return this.on(o, t, !0), this.send(e, n, o), o;
            }
          }, {
            key: "send",
            value: function (n, t, o) {
              var i;
              null != (i = this.c) && i.debug && e.log("invoke send::", n, t, o);
              var a = JSON.stringify(t);
              try {
                d ? window.MediaClient.__mcJssdkBridge(n, a, o) : c && window.webkit.messageHandlers.__mcJssdkBridge.postMessage({
                  method: n,
                  params: a,
                  callback: o
                });
              } catch (r) {
                e.error(r);
              }
            }
          }, {
            key: "on",
            value: function (n, t, o) {
              var i,
                a = this;
              null != (i = this.c) && i.debug && e.log("listen on::", n), this.e.on(n, function (i) {
                var r;
                null != (r = a.c) && r.debug && e.log("callback on::", n, i);
                try {
                  var u;
                  u = "string" == typeof i ? JSON.parse(i) : i, ~~u.code && 200 !== ~~u.code ? t && t.fail && t.fail(u.msg) : t && t.success && t.success(u.data);
                } catch (u) {
                  e.error(u), t && t.fail && t.fail(u);
                } finally {
                  t && t.complete && t.complete(i), o && a.e.clear(n);
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
          }]), t;
        }(),
        y = {};
      for (var _ in f) Object.prototype.hasOwnProperty.call(h.prototype, _) || function () {
        var e = f[_];
        y[e] = function (n) {
          var t = n.params,
            o = n.callbacks;
          return this.invoke(e, t, o);
        };
      }();
      Object.assign(h.prototype, y);
      var b = {};
      for (var w in p) Object.prototype.hasOwnProperty.call(h.prototype, w) || function () {
        var e = p[w];
        b[e] = function (n) {
          this.on(e, n);
        };
      }();
      Object.assign(h.prototype, b), window.mcSdk = new h();
    }).call(this, t("ba7c")["default"]);
  },
  bced: function (e, n, t) {
    "use strict";

    var o = t("f5bd").default;
    o(t("9b8e"));
  },
  bf99: function (e, n, t) {
    "use strict";

    t("6a54");
    var o = t("f5bd").default;
    Object.defineProperty(n, "__esModule", {
      value: !0
    }), n.default = void 0, t("5ef2"), t("bf0f"), t("5c47"), t("af8f"), t("d4b5"), t("0506");
    var i = o(t("4b9b"));
    function a(e) {
      var n = uni.getSystemInfoSync();
      return "harmony" === e ? navigator.userAgent.indexOf("HarmonyOS") > -1 || navigator.userAgent.indexOf("ArkWeb") > -1 : n.platform === e;
    }
    var r = {
        isInApp: function () {
          var e = navigator.userAgent.toLowerCase(),
            n = i.default.thirdPlatforms.yongpai.apps.some(function (n) {
              return -1 != e.search(n);
            });
          return n;
        },
        getSystemInfo: function (e) {},
        getUserInfo: function (e) {
          var n = a("android"),
            t = a("ios"),
            o = a("harmony"),
            i = JSON.stringify({
              method: "userJson",
              data: {
                isLogin: !0
              }
            });
          t ? window.webkit.messageHandlers.Native.postMessage({
            method: "userJson",
            data: {
              isLogin: "true"
            }
          }) : o ? window.Native.postMessage(i) : n && window.Native.postMessage("{\"method\":\"userJson\",data:{\"isLogin\":\"true\"}}"), window.callBack = function (n) {
            if (n) {
              "string" == typeof n && (n = JSON.parse(n)), n && (n.nickname = n.nickname || n.nikeName);
              var t = {
                user_id: n.userId || "",
                user_name: n.nickname || "",
                portrait_url: "",
                phone: "",
                wx_openid: "",
                wx_unionid: "",
                app_user_token: n.token || ""
              };
              e && e(t);
            } else e && e(!1);
          };
        },
        getLocation: function (e) {},
        shareTo: function () {
          var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {},
            n = a("android"),
            t = a("ios"),
            o = a("harmony"),
            i = {
              method: "webShare",
              data: {
                shareUrl: e.link_url,
                title: e.title,
                subTilte: e.brief,
                imageUrl: e.indexpic,
                shareTitle: e.title,
                shareSubTitle: e.brief,
                shareIcon: e.indexpic
              }
            },
            r = JSON.stringify(i),
            u = JSON.stringify(i);
          t ? window.webkit.messageHandlers.Native.postMessage(i) : o ? window.Native.postMessage(u) : n && window.Native.postMessage(r);
        },
        goToLoginPage: function () {},
        goToBindPage: function () {},
        saveImage: function () {},
        linkTo: function () {},
        openpaper: function () {
          var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : "";
          if (e) {
            var n = a("android"),
              t = a("ios"),
              o = a("harmony"),
              i = getApp().globalData.appid,
              r = "",
              u = /^(http|https):\/\//;
            r = u.test(e) ? "kannh" == i ? "yp://app?type=web&webUrl=" + encodeURIComponent(e) + "&bodyUrl=" + e : "yp://app?type=web&webUrl=" + encodeURIComponent(e) : e;
            var l = {
                method: "openPaper",
                data: {
                  to: r
                }
              },
              s = JSON.stringify(l),
              m = JSON.stringify(l);
            t ? window.webkit.messageHandlers.Native.postMessage(l) : o ? window.Native.postMessage(m) : n && window.Native.postMessage(s);
          }
        },
        jumpToNews: function () {
          var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : "";
          if (e) {
            var n = "",
              t = e.indexOf("yp://");
            n = -1 != t ? e : "yp://app?type=news&modetype=0&id=" + e, this.openpaper(n);
          }
        },
        goUcenter: function () {},
        playAudio: function () {},
        showShare: function () {
          var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {},
            n = a("android"),
            t = a("ios"),
            o = a("harmony"),
            i = {
              method: "webShare",
              data: {
                isOpenBoard: !0,
                shareUrl: e.link_url,
                title: e.title,
                subTilte: e.brief,
                imageUrl: e.indexpic,
                shareTitle: e.title,
                shareSubTitle: e.brief,
                shareIcon: e.indexpic
              }
            },
            r = JSON.stringify(i),
            u = JSON.stringify(i);
          t ? window.webkit.messageHandlers.Native.postMessage(i) : o ? window.Native.postMessage(u) : n && window.Native.postMessage(r);
        }
      },
      u = r;
    n.default = u;
  },
  c130: function (e, n, t) {
    "use strict";

    t("6a54");
    var o = t("f5bd").default;
    Object.defineProperty(n, "__esModule", {
      value: !0
    }), n.default = void 0;
    var i = o(t("2634")),
      a = o(t("2fdc"));
    t("64aa");
    var r = uni.getSystemInfoSync(),
      u = {},
      l = {
        name: "yd-navbar",
        props: {
          height: {
            type: [String, Number],
            default: ""
          },
          backIconColor: {
            type: String,
            default: "#606266"
          },
          backIconName: {
            type: String,
            default: "nav-back"
          },
          backIconSize: {
            type: [String, Number],
            default: "44"
          },
          backText: {
            type: String,
            default: ""
          },
          backTextStyle: {
            type: Object,
            default: function () {
              return {
                color: "#333333"
              };
            }
          },
          title: {
            type: String,
            default: ""
          },
          titleWidth: {
            type: [String, Number],
            default: "250"
          },
          titleColor: {
            type: String,
            default: "#333333"
          },
          titleBold: {
            type: Boolean,
            default: !1
          },
          titleSize: {
            type: [String, Number],
            default: 32
          },
          isBack: {
            type: [Boolean, String],
            default: !0
          },
          background: {
            type: Object,
            default: function () {
              return {
                background: "#ffffff"
              };
            }
          },
          isFixed: {
            type: Boolean,
            default: !0
          },
          immersive: {
            type: Boolean,
            default: !1
          },
          borderBottom: {
            type: Boolean,
            default: !0
          },
          zIndex: {
            type: [String, Number],
            default: ""
          },
          customBack: {
            type: Function,
            default: null
          }
        },
        data: function () {
          return {
            menuButtonInfo: u,
            statusBarHeight: r.statusBarHeight,
            defaultStatusBarHeight: 0
          };
        },
        computed: {
          statusHeight: function () {
            return this.statusBarHeight ? this.statusBarHeight : this.defaultStatusBarHeight;
          },
          navbarInnerStyle: function () {
            var e = {};
            return e.height = this.navbarHeight + "px", e;
          },
          navbarStyle: function () {
            var e = {};
            return e.zIndex = this.zIndex ? this.zIndex : this.$u.zIndex.navbar, Object.assign(e, this.background), e;
          },
          titleStyle: function () {
            var e = {};
            return e.left = (r.windowWidth - uni.upx2px(this.titleWidth)) / 2 + "px", e.right = (r.windowWidth - uni.upx2px(this.titleWidth)) / 2 + "px", e.width = uni.upx2px(this.titleWidth) + "px", e;
          },
          navbarHeight: function () {
            return this.height ? this.height : 44;
          }
        },
        created: function () {
          var e = this;
          return (0, a.default)((0, i.default)().mark(function n() {
            var t, o, a;
            return (0, i.default)().wrap(function (n) {
              while (1) switch (n.prev = n.next) {
                case 0:
                  return n.next = 2, e.$sys.getMallStyleSetting();
                case 2:
                  t = n.sent, o = 0, t.style >= 3 ? (o = t.style3.enable_nav, e.defaultStatusBarHeight = o ? t.style3.status_bar_height : 0) : (o = t.enable_nav, e.defaultStatusBarHeight = o ? t.status_bar_height : 0), a = e.$sys.getCache(e.$cnf.localStorageKeys.shoppingMallOpenNav), a != o && e.$sys.setCache(e.$cnf.localStorageKeys.shoppingMallOpenNav, o);
                case 7:
                case "end":
                  return n.stop();
              }
            }, n);
          }))();
        },
        methods: {
          goBack: function () {
            "function" === typeof this.customBack ? this.customBack.bind(this.$u.$parent.call(this))() : uni.navigateBack();
          }
        }
      };
    n.default = l;
  },
  c359: function (e, n, t) {
    var o = t("c86c");
    n = o(!1), n.push([e.i, "@charset \"UTF-8\";\n/**\n * \u8FD9\u91CC\u662Funi-app\u5185\u7F6E\u7684\u5E38\u7528\u6837\u5F0F\u53D8\u91CF\n *\n * uni-app \u5B98\u65B9\u6269\u5C55\u63D2\u4EF6\u53CA\u63D2\u4EF6\u5E02\u573A\uFF08https://ext.dcloud.net.cn\uFF09\u4E0A\u5F88\u591A\u4E09\u65B9\u63D2\u4EF6\u5747\u4F7F\u7528\u4E86\u8FD9\u4E9B\u6837\u5F0F\u53D8\u91CF\n * \u5982\u679C\u4F60\u662F\u63D2\u4EF6\u5F00\u53D1\u8005\uFF0C\u5EFA\u8BAE\u4F60\u4F7F\u7528scss\u9884\u5904\u7406\uFF0C\u5E76\u5728\u63D2\u4EF6\u4EE3\u7801\u4E2D\u76F4\u63A5\u4F7F\u7528\u8FD9\u4E9B\u53D8\u91CF\uFF08\u65E0\u9700 import \u8FD9\u4E2A\u6587\u4EF6\uFF09\uFF0C\u65B9\u4FBF\u7528\u6237\u901A\u8FC7\u642D\u79EF\u6728\u7684\u65B9\u5F0F\u5F00\u53D1\u6574\u4F53\u98CE\u683C\u4E00\u81F4\u7684App\n *\n */\n/**\n * \u5982\u679C\u4F60\u662FApp\u5F00\u53D1\u8005\uFF08\u63D2\u4EF6\u4F7F\u7528\u8005\uFF09\uFF0C\u4F60\u53EF\u4EE5\u901A\u8FC7\u4FEE\u6539\u8FD9\u4E9B\u53D8\u91CF\u6765\u5B9A\u5236\u81EA\u5DF1\u7684\u63D2\u4EF6\u4E3B\u9898\uFF0C\u5B9E\u73B0\u81EA\u5B9A\u4E49\u4E3B\u9898\u529F\u80FD\n *\n * \u5982\u679C\u4F60\u7684\u9879\u76EE\u540C\u6837\u4F7F\u7528\u4E86scss\u9884\u5904\u7406\uFF0C\u4F60\u4E5F\u53EF\u4EE5\u76F4\u63A5\u5728\u4F60\u7684 scss \u4EE3\u7801\u4E2D\u4F7F\u7528\u5982\u4E0B\u53D8\u91CF\uFF0C\u540C\u65F6\u65E0\u9700 import \u8FD9\u4E2A\u6587\u4EF6\n */\n/* \u989C\u8272\u53D8\u91CF */\n/* \u884C\u4E3A\u76F8\u5173\u989C\u8272 */\n/* \u6587\u5B57\u57FA\u672C\u989C\u8272 */\n/* \u80CC\u666F\u989C\u8272 */\n/* \u8FB9\u6846\u989C\u8272 */\n/* \u5C3A\u5BF8\u53D8\u91CF */\n/* \u6587\u5B57\u5C3A\u5BF8 */\n/* \u56FE\u7247\u5C3A\u5BF8 */\n/* Border Radius */\n/* \u6C34\u5E73\u95F4\u8DDD */\n/* \u5782\u76F4\u95F4\u8DDD */\n/* \u900F\u660E\u5EA6 */\n/* \u6587\u7AE0\u573A\u666F\u76F8\u5173 */\n/* \u81EA\u5B9A\u4E49\u76F8\u5173\u53D8\u91CF */\n/* uview-ui */.u-navbar[data-v-48abcc36]{width:100%}.u-navbar-fixed[data-v-48abcc36]{position:fixed;left:0;right:0;top:0;z-index:991}.u-status-bar[data-v-48abcc36]{width:100%}.u-navbar-inner[data-v-48abcc36]{display:flex;flex-direction:row;justify-content:space-between;position:relative;align-items:center}.u-back-wrap[data-v-48abcc36]{display:flex;flex-direction:row;align-items:center;flex:1;flex-grow:0;padding:%?14?% %?14?% %?14?% %?24?%}.u-back-text[data-v-48abcc36]{padding-left:%?4?%;font-size:%?30?%}.u-navbar-content-title[data-v-48abcc36]{display:flex;flex-direction:row;align-items:center;justify-content:center;flex:1;position:absolute;left:0;right:0;height:%?60?%;text-align:center;flex-shrink:0}.u-navbar-centent-slot[data-v-48abcc36]{flex:1}.u-title[data-v-48abcc36]{line-height:%?60?%;font-size:%?32?%;flex:1}.u-navbar-right[data-v-48abcc36]{flex:1;display:flex;flex-direction:row;align-items:center;justify-content:flex-end}.u-slot-content[data-v-48abcc36]{flex:1;display:flex;flex-direction:row;align-items:center}", ""]), e.exports = n;
  },
  c41c: function (e, n, t) {
    "use strict";

    t("6a54");
    var o = t("f5bd").default;
    Object.defineProperty(n, "__esModule", {
      value: !0
    }), n.getThirdAppMark = n.default = void 0, t("5c47"), t("2c10");
    var i = o(t("56cd")),
      a = o(t("3ace")),
      r = o(t("6eff")),
      u = o(t("bf99")),
      l = o(t("7d56")),
      s = o(t("0a99")),
      m = o(t("4824")),
      d = o(t("e61b")),
      c = o(t("9d8a")),
      g = o(t("1bed")),
      f = o(t("08dc")),
      p = o(t("f542")),
      h = o(t("32b7")),
      y = o(t("5615")),
      _ = o(t("28bc")),
      b = o(t("4012")),
      w = o(t("8fb8")),
      v = o(t("865e"));
    n.getThirdAppMark = function () {
      var e = navigator.userAgent.toLowerCase();
      return "micromessenger" != e.match(/MicroMessenger/i) && (i.default.isInApp() ? "hg" : a.default.isInApp() ? p.default.isInApp() ? "cmstopv3" : m.default.isInApp() ? "newcmstop" : "cmstop" : u.default.isInApp() ? "yongpai" : l.default.isInApp() ? "nbtv" : r.default.isInApp() ? "jinhua" : s.default.isInApp() ? "tianmu" : d.default.isInApp() ? "trs" : c.default.isInApp() ? "injs" : g.default.isInApp() ? "fangzheng" : f.default.isInApp() ? "xingkongyun" : h.default.isInApp() ? "xiuzhou" : y.default.isInApp() ? "ziyang" : _.default.isInApp() ? "yantai" : b.default.isInApp() ? "tianma" : w.default.isInApp() ? "linyi" : !!v.default.isInApp() && "jingmaishan");
    };
    var k = {
        hg: i.default,
        cmstop: a.default,
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
        tianma: b.default,
        linyi: w.default,
        jingmaishan: v.default
      },
      C = k;
    n.default = C;
  },
  c450: function (e, n, t) {
    e.exports = t.p + "static/img/iconfont.f377e7b3.svg";
  },
  c5c6: function (e, n, t) {
    "use strict";

    t("6a54"), Object.defineProperty(n, "__esModule", {
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
      bobingClick: {
        event: "bobingClick",
        title: "\u535A\u997C\u6D4F\u89C8",
        action: "click"
      },
      bobingShare: {
        event: "bobingShare",
        title: "\u535A\u997C\u623F\u95F4\u5206\u4EAB",
        action: "share"
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
      },
      auctionActivityClick: {
        event: "auctionActivityClick",
        title: "\u62CD\u5356\u6D3B\u52A8\u6D4F\u89C8",
        action: "click"
      },
      auctionGoodsClick: {
        event: "auctionGoodsClick",
        title: "\u62CD\u5356\u5546\u54C1\u6D4F\u89C8",
        action: "click"
      }
    };
  },
  c5fd: function (e, n, t) {
    "use strict";

    (function (e) {
      t("6a54");
      var o = t("f5bd").default;
      Object.defineProperty(n, "__esModule", {
        value: !0
      }), n.default = void 0, t("5c47"), t("0506"), t("d4b5"), t("bf0f"), t("a1c1"), t("f7a5"), t("af8f"), t("4626"), t("5ac7"), t("5ef2"), t("9db6"), t("22b6"), t("aa9c"), t("e838"), t("e966"), t("c9b5"), t("15d1"), t("d5c6"), t("5a56"), t("f074"), t("dfcf"), t("20f3"), t("c223"), t("fd3c"), t("aa77"), t("2c10"), t("4db2"), t("c976"), t("4d8f"), t("7b97"), t("668a"), t("c5b7"), t("8ff5"), t("2378"), t("641a"), t("64e0"), t("cce3"), t("efba"), t("d009"), t("bd7d"), t("7edd"), t("d798"), t("f547"), t("5e54"), t("b60a"), t("8c18"), t("12973"), t("f991"), t("198e"), t("8557"), t("63b1"), t("1954"), t("1cf1"), t("18f7"), t("de6c"), t("dc89"), t("2425");
      var i = o(t("2634")),
        a = o(t("9b1b")),
        r = o(t("2fdc")),
        u = o(t("c753")),
        l = t("96a9"),
        s = o(t("a957")),
        m = o(t("4b9b")),
        d = o(t("3c00")),
        c = o(t("7ff1")),
        g = t("9f8f"),
        f = o(t("0bba")),
        p = o(t("c41c")),
        h = o(t("2a74"));
      t("0652");
      var y = o(t("4e53")),
        _ = t("ae2a"),
        b = null,
        w = 0,
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
          checkIsShowShoppingMallNav: l.checkIsShowShoppingMallNav,
          isShowMallNav: l.isShowMallNav,
          mergeObject: l.mergeObject,
          moduleMap: m.default.moduleMap,
          routeMap: m.default.routeMap,
          getMemberGlobalSetting: function () {
            var e = arguments,
              n = this;
            return (0, r.default)((0, i.default)().mark(function t() {
              var o, r, l, s;
              return (0, i.default)().wrap(function (t) {
                while (1) switch (t.prev = t.next) {
                  case 0:
                    if (o = e.length > 0 && void 0 !== e[0] && e[0], o) {
                      t.next = 5;
                      break;
                    }
                    if (r = n.getCache(m.default.localStorageKeys.memberSetting), u.default.$u.test.isEmpty(r)) {
                      t.next = 5;
                      break;
                    }
                    return t.abrupt("return", r);
                  case 5:
                    if (w++, 1 != w) {
                      t.next = 25;
                      break;
                    }
                    return t.next = 9, n.tenantInitSetting();
                  case 9:
                    return l = t.sent, t.next = 12, u.default.$api.getMemberGlobalSetting(l.appid);
                  case 12:
                    if (s = t.sent, "0" !== s.code || u.default.$u.test.isEmpty(s.data)) {
                      t.next = 21;
                      break;
                    }
                    return s.data.integral_config && s.data.integral_config.title || (s.data.integral_config = (0, a.default)({}, d.default.integral_config)), s.data.gold_config && s.data.gold_config.title || (s.data.gold_config = (0, a.default)({}, d.default.gold_config)), s.data.experience_config && s.data.experience_config.title || (s.data.experience_config = (0, a.default)({}, d.default.experience_config)), n.setCache(m.default.localStorageKeys.memberSetting, s.data, 86400), t.abrupt("return", s.data);
                  case 21:
                    return n.setCache(m.default.localStorageKeys.memberSetting, d.default, 86400), t.abrupt("return", d.default);
                  case 23:
                    t.next = 26;
                    break;
                  case 25:
                    return t.abrupt("return", d.default);
                  case 26:
                  case "end":
                    return t.stop();
                }
              }, t);
            }))();
          },
          checkUser: function () {
            var e = arguments,
              n = this;
            return (0, r.default)((0, i.default)().mark(function t() {
              var o, a, r, u;
              return (0, i.default)().wrap(function (t) {
                while (1) switch (t.prev = t.next) {
                  case 0:
                    return o = !(e.length > 0 && void 0 !== e[0]) || e[0], a = e.length > 1 && void 0 !== e[1] && e[1], t.next = 4, n.getUserInfo(o, "", a);
                  case 4:
                    if (r = t.sent, !r) {
                      t.next = 9;
                      break;
                    }
                    return t.abrupt("return", r);
                  case 9:
                    return t.next = 11, n.weixinOALoginFlow();
                  case 11:
                    return u = t.sent, setTimeout(function () {
                      n.reportActionEventData({
                        event: "userLogin",
                        content_type: "login"
                      });
                    }, 500), t.abrupt("return", u);
                  case 14:
                  case "end":
                    return t.stop();
                }
              }, t);
            }))();
          },
          getUserInfo: function () {
            var e = arguments,
              n = this;
            return (0, r.default)((0, i.default)().mark(function t() {
              var o, a, r, l, s, d, c;
              return (0, i.default)().wrap(function (t) {
                while (1) switch (t.prev = t.next) {
                  case 0:
                    if (o = !(e.length > 0 && void 0 !== e[0]) || e[0], a = e.length > 1 && void 0 !== e[1] ? e[1] : "", r = e.length > 2 && void 0 !== e[2] && e[2], l = n.checkIsInThirdBrowser(), !l || !m.default.thirdPlatforms[l]) {
                      t.next = 11;
                      break;
                    }
                    if (!o) {
                      t.next = 9;
                      break;
                    }
                    return t.next = 8, n.checkIsLoggedYd(l);
                  case 8:
                    return t.abrupt("return", t.sent);
                  case 9:
                    t.next = 12;
                    break;
                  case 11:
                    o = !1;
                  case 12:
                    if (o) {
                      t.next = 16;
                      break;
                    }
                    if (s = uni.getStorageSync(m.default.localStorageKeys.userInfo), !s) {
                      t.next = 16;
                      break;
                    }
                    return t.abrupt("return", JSON.parse(s));
                  case 16:
                    if (d = a || uni.getStorageSync(m.default.localStorageKeys.accessToken), d) {
                      t.next = 19;
                      break;
                    }
                    return t.abrupt("return", !1);
                  case 19:
                    return t.next = 21, u.default.$api.getUserInfo({
                      access_token: d,
                      infos: r ? 1 : 0
                    });
                  case 21:
                    if (c = t.sent, "0" !== c.code) {
                      t.next = 27;
                      break;
                    }
                    return uni.setStorageSync(m.default.localStorageKeys.userInfo, JSON.stringify(c.data)), t.abrupt("return", c.data);
                  case 27:
                    return uni.removeStorageSync(m.default.localStorageKeys.accessToken), uni.removeStorageSync(m.default.localStorageKeys.userInfo), t.abrupt("return", !1);
                  case 30:
                  case "end":
                    return t.stop();
                }
              }, t);
            }))();
          },
          getUserAllInfo: function () {
            return (0, r.default)((0, i.default)().mark(function e() {
              var n, t;
              return (0, i.default)().wrap(function (e) {
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
                    if (t = e.sent, "0" !== t.code) {
                      e.next = 11;
                      break;
                    }
                    return uni.setStorageSync(m.default.localStorageKeys.userInfo, JSON.stringify(t.data)), e.abrupt("return", t.data);
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
            return (0, r.default)((0, i.default)().mark(function n() {
              var t, o, a, u;
              return (0, i.default)().wrap(function (n) {
                while (1) switch (n.prev = n.next) {
                  case 0:
                    if (t = uni.getStorageSync(m.default.localStorageKeys.accessToken), t) {
                      n.next = 7;
                      break;
                    }
                    return o = e, a = {}, n.abrupt("return", new Promise(function (e) {
                      uni.login({
                        provider: "weixin",
                        success: function (n) {
                          return (0, r.default)((0, i.default)().mark(function t() {
                            return (0, i.default)().wrap(function (t) {
                              while (1) switch (t.prev = t.next) {
                                case 0:
                                  a.code = n.code, uni.showModal({
                                    title: "\u6E29\u99A8\u63D0\u793A",
                                    content: "\u4EB2\uFF0C\u6388\u6743\u5FAE\u4FE1\u767B\u5F55\u540E\u624D\u80FD\u6B63\u5E38\u4F7F\u7528\u5C0F\u7A0B\u5E8F\u529F\u80FD",
                                    success: function (n) {
                                      return (0, r.default)((0, i.default)().mark(function t() {
                                        return (0, i.default)().wrap(function (t) {
                                          while (1) switch (t.prev = t.next) {
                                            case 0:
                                              n.confirm ? uni.getUserProfile({
                                                desc: "\u83B7\u53D6\u60A8\u7684\u6635\u79F0\u3001\u5934\u50CF\u3001\u5730\u533A\u53CA\u6027\u522B",
                                                success: function (n) {
                                                  return (0, r.default)((0, i.default)().mark(function t() {
                                                    var r, u;
                                                    return (0, i.default)().wrap(function (t) {
                                                      while (1) switch (t.prev = t.next) {
                                                        case 0:
                                                          return a.data = n, t.next = 3, o.weixinMiniLogin(a);
                                                        case 3:
                                                          if (r = t.sent, !r) {
                                                            t.next = 11;
                                                            break;
                                                          }
                                                          return t.next = 7, o.getUserInfo();
                                                        case 7:
                                                          u = t.sent, e(u), t.next = 13;
                                                          break;
                                                        case 11:
                                                          uni.showToast({
                                                            title: "\u767B\u5F55\u5931\u8D25",
                                                            icon: "error",
                                                            duration: 2000
                                                          }), e(!1);
                                                        case 13:
                                                        case "end":
                                                          return t.stop();
                                                      }
                                                    }, t);
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
                                              return t.stop();
                                          }
                                        }, t);
                                      }))();
                                    }
                                  });
                                case 2:
                                case "end":
                                  return t.stop();
                              }
                            }, t);
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
            return (0, r.default)((0, i.default)().mark(function n() {
              var t, o;
              return (0, i.default)().wrap(function (n) {
                while (1) switch (n.prev = n.next) {
                  case 0:
                    return t = {
                      code: e.code,
                      profiledata: e.data.encryptedData,
                      profileiv: e.data.iv
                    }, n.next = 3, u.default.$api.wxminiLogin(t);
                  case 3:
                    if (o = n.sent, "0" !== o.code || !o.data.access_token) {
                      n.next = 9;
                      break;
                    }
                    return uni.setStorageSync(m.default.localStorageKeys.accessToken, o.data.access_token), n.abrupt("return", !0);
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
            return (0, r.default)((0, i.default)().mark(function n() {
              var t, o, a, r, u, s, d, c, g, f, p, h, y, _, b, w, v, k, C, S, x, T;
              return (0, i.default)().wrap(function (n) {
                while (1) switch (n.prev = n.next) {
                  case 0:
                    if (t = e.checkIsLoginByLinkParams(), !t) {
                      n.next = 16;
                      break;
                    }
                    if (o = !0, "app" == t && e.checkIsInThirdBrowser() && (o = !1), !o) {
                      n.next = 16;
                      break;
                    }
                    return n.next = 7, e.autoLoginByLoginParams(t);
                  case 7:
                    if (a = n.sent, !a) {
                      n.next = 15;
                      break;
                    }
                    return n.next = 11, e.getUserInfo(!1);
                  case 11:
                    return r = n.sent, n.abrupt("return", r);
                  case 15:
                    return n.abrupt("return", !1);
                  case 16:
                    if (u = "", s = (0, l.checkIsWechatBrowser)(), !s) {
                      n.next = 50;
                      break;
                    }
                    return n.next = 21, e.tenantInitSetting();
                  case 21:
                    if (d = n.sent, d.wx_official_appid) {
                      n.next = 24;
                      break;
                    }
                    return n.abrupt("return", !1);
                  case 24:
                    if (c = getCurrentPages(), g = c[c.length - 1], f = g.options.code || "", !f || !document.referrer) {
                      n.next = 42;
                      break;
                    }
                    return n.next = 30, e.weixinOALogin(f);
                  case 30:
                    if (p = n.sent, !p) {
                      n.next = 38;
                      break;
                    }
                    return n.next = 34, e.getUserInfo();
                  case 34:
                    return h = n.sent, n.abrupt("return", h);
                  case 38:
                    return uni.showToast({
                      title: "\u767B\u5F55\u5931\u8D25",
                      icon: "error",
                      duration: 2000
                    }), n.abrupt("return", !1);
                  case 40:
                    n.next = 48;
                    break;
                  case 42:
                    y = g.__page__.fullPath, y = y.replace(/[?&]code=[^&]*&?/g, "&"), "&" == y[y.length - 1] && (y = y.slice(0, y.length - 1)), _ = "", _ = y && "/" == y[0] ? window.location.protocol + "//" + location.hostname + y : window.location.protocol + "//" + location.hostname + "/" + y, e.jumpToWechatAuthorizePage(_, d.wx_official_appid, d.component_appid);
                  case 48:
                    n.next = 95;
                    break;
                  case 50:
                    if (!(u = e.checkIsInThirdBrowser())) {
                      n.next = 69;
                      break;
                    }
                    if (!m.default.thirdPlatforms[u]) {
                      n.next = 66;
                      break;
                    }
                    return n.next = 54, e.ydLogin(u);
                  case 54:
                    if (b = n.sent, !b) {
                      n.next = 62;
                      break;
                    }
                    return n.next = 58, e.getUserInfo(!1);
                  case 58:
                    return w = n.sent, n.abrupt("return", w);
                  case 62:
                    return uni.showToast({
                      title: "\u767B\u5F55\u5931\u8D25",
                      icon: "error",
                      duration: 2000
                    }), n.abrupt("return", !1);
                  case 64:
                    n.next = 67;
                    break;
                  case 66:
                    return n.abrupt("return", !1);
                  case 67:
                    n.next = 95;
                    break;
                  case 69:
                    return n.next = 71, e.tenantInitSetting();
                  case 71:
                    if (v = n.sent, 2 != v.pc_login_mode) {
                      n.next = 94;
                      break;
                    }
                    if (k = getCurrentPages(), C = k[k.length - 1], S = C.options.code || "", !S) {
                      n.next = 91;
                      break;
                    }
                    return n.next = 79, e.weixinWebLogin(S);
                  case 79:
                    if (x = n.sent, !x) {
                      n.next = 87;
                      break;
                    }
                    return n.next = 83, e.getUserInfo();
                  case 83:
                    return T = n.sent, n.abrupt("return", T);
                  case 87:
                    return uni.showToast({
                      title: "\u767B\u5F55\u5931\u8D25",
                      icon: "error",
                      duration: 2000
                    }), n.abrupt("return", !1);
                  case 89:
                    n.next = 92;
                    break;
                  case 91:
                    return n.abrupt("return", 0);
                  case 92:
                    n.next = 95;
                    break;
                  case 94:
                    return n.abrupt("return", 0);
                  case 95:
                  case "end":
                    return n.stop();
                }
              }, n);
            }))();
          },
          weixinOALogin: function (e) {
            return (0, r.default)((0, i.default)().mark(function n() {
              var t;
              return (0, i.default)().wrap(function (n) {
                while (1) switch (n.prev = n.next) {
                  case 0:
                    return n.next = 2, u.default.$api.wxoaLogin({
                      code: e
                    });
                  case 2:
                    if (t = n.sent, "0" !== t.code || !t.data.access_token) {
                      n.next = 8;
                      break;
                    }
                    return uni.setStorageSync(m.default.localStorageKeys.accessToken, t.data.access_token), n.abrupt("return", !0);
                  case 8:
                    return n.abrupt("return", !1);
                  case 9:
                  case "end":
                    return n.stop();
                }
              }, n);
            }))();
          },
          jumpToWechatAuthorizePage: function (e, n, t) {
            var o = 1 == getApp().globalData.wx_official_auth_mode ? m.default.systemH5Domain : window.location.protocol + "//" + location.hostname,
              i = o + m.default.wechatCallbackPath + "?frompage=" + encodeURIComponent(e),
              a = m.default.wechatAuthorizeLink.replace("{APPID}", n).replace("{COMPONENT_APPID}", t).replace("{REDIRECT_URI}", encodeURIComponent(i));
            window.location.href = a;
          },
          jumpToWechatLoginAuthorizePage: function () {
            var e = this;
            return (0, r.default)((0, i.default)().mark(function n() {
              var t, o, a, r, u, l, s;
              return (0, i.default)().wrap(function (n) {
                while (1) switch (n.prev = n.next) {
                  case 0:
                    return n.next = 2, e.tenantInitSetting();
                  case 2:
                    t = n.sent, o = getCurrentPages(), a = o[o.length - 1], r = a.__page__.fullPath, u = "", u = r && "/" == r[0] ? window.location.protocol + "//" + location.hostname + r : window.location.protocol + "//" + location.hostname + "/" + r, l = window.location.protocol + "//" + location.hostname + m.default.wechatCallbackPath + "?frompage=" + encodeURIComponent(u), s = m.default.wechatLoginAuthorizeLink.replace("{APPID}", t.wx_web_appid).replace("{REDIRECT_URI}", encodeURIComponent(l)), window.location.href = s;
                  case 11:
                  case "end":
                    return n.stop();
                }
              }, n);
            }))();
          },
          weixinWebLogin: function (e) {
            return (0, r.default)((0, i.default)().mark(function n() {
              var t;
              return (0, i.default)().wrap(function (n) {
                while (1) switch (n.prev = n.next) {
                  case 0:
                    return n.next = 2, u.default.$api.wxwebLogin({
                      code: e
                    });
                  case 2:
                    if (t = n.sent, "0" !== t.code || !t.data.access_token) {
                      n.next = 8;
                      break;
                    }
                    return uni.setStorageSync(m.default.localStorageKeys.accessToken, t.data.access_token), n.abrupt("return", !0);
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
            return (0, r.default)((0, i.default)().mark(function n() {
              var t;
              return (0, i.default)().wrap(function (n) {
                while (1) switch (n.prev = n.next) {
                  case 0:
                    return n.next = 2, u.default.$api.autoLoginByLoginParams({
                      _ydautologin: e
                    });
                  case 2:
                    if (t = n.sent, "0" !== t.code || !t.data.access_token) {
                      n.next = 8;
                      break;
                    }
                    return uni.setStorageSync(m.default.localStorageKeys.accessToken, t.data.access_token), n.abrupt("return", !0);
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
              t = n.options._ydautologin || "";
            return t || !1;
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
              if (this.checkIsAllowOutLink(e)) {
                var t = this.checkIsInThirdBrowser();
                "yongpai" == t ? (e.includes("/module-mall/") && (e = this.urlAppendParam(e, "noShare", 1)), p.default[t].openpaper(e)) : window.location.href = e;
              } else if (n = this.checkIsThirdAppInnerLink(e)) {
                var o = this.checkIsInThirdBrowser();
                o && p.default[o].jumpToNews(n);
              } else if (this.checkIsThirdAppLink(e)) {
                var i = this.checkIsInThirdBrowser();
                i && p.default[i].openpaper(e);
              } else {
                var a = "",
                  r = "";
                if (0 === e.indexOf("yd://")) {
                  var u = e.slice(5),
                    s = u.split("?");
                  r = s[0];
                  var m = s[1] || "";
                  a = this.routeMap[r] && this.routeMap[r].url ? this.routeMap[r].url : "", a && m && (a = a + "?" + m);
                } else {
                  var d = e.split("#");
                  r = d[0];
                  var c = d[1] || "";
                  a = this.routeMap[r] && this.routeMap[r].url ? this.routeMap[r].url : "", a && c && (a = a + "?id=" + c);
                }
                a && r && this.routeMap[r] ? this.routeMap[r].is_tabbar ? uni.switchTab({
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
              t = e.startsWith(n);
            if (t) {
              var o = e.replace(n, "");
              return o;
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
            return (0, r.default)((0, i.default)().mark(function t() {
              var o, a, r, l, s, d, c, g, f, p, h, y, _;
              return (0, i.default)().wrap(function (t) {
                while (1) switch (t.prev = t.next) {
                  case 0:
                    if (o = e.length > 0 && void 0 !== e[0] ? e[0] : {}, a = e.length > 1 && void 0 !== e[1] ? e[1] : null, o.event) {
                      t.next = 4;
                      break;
                    }
                    return t.abrupt("return");
                  case 4:
                    return r = getCurrentPages(), l = r[r.length - 1], t.next = 8, n.getNetworkType();
                  case 8:
                    return s = t.sent, d = {
                      longitude: 0,
                      latitude: 0,
                      province: "",
                      city: "",
                      area: "",
                      street: "",
                      address: ""
                    }, c = n.getClientType(), g = uni.getSystemInfoSync(), f = {
                      id: 0,
                      name: "",
                      phone_num: ""
                    }, p = n.getUserInfoFromLocalStorage(!1), p && (f = p), h = n.moduleMap[o.content_type] || "", y = {
                      _need_stat: o.hasOwnProperty("_need_stat") ? o._need_stat : 1,
                      _need_task: o.hasOwnProperty("_need_task") ? o._need_task : 0,
                      _need_behavior: o.hasOwnProperty("_need_behavior") ? o._need_behavior : 1,
                      event: o.event,
                      action: o.action || m.default.actionEvents[o.event].action,
                      brief: o.brief || m.default.actionEvents[o.event].title,
                      client_type: c,
                      module_id: h,
                      content_id: o.content_id || 0,
                      num: o.num || 1,
                      duration: o.duration || 0,
                      column_id: o.column_id || 0,
                      column_title: o.column_title || "",
                      title: o.title || "",
                      device_token: g.deviceId,
                      user_id: f.id || 0,
                      user_name: f.name || "",
                      phone_num: f.phone_num || "",
                      page_path: l.route || "",
                      version: m.default.version,
                      network: s,
                      client_model: g.platform,
                      system_version: g.system,
                      resolution: "",
                      baidu_longitude: "",
                      baidu_latitude: "",
                      longitude: d.longitude,
                      latitude: d.latitude,
                      province: d.province,
                      city: d.city,
                      area: d.area,
                      street: d.street,
                      address: d.address
                    }, t.next = 19, u.default.$api.reportActionEventData(y);
                  case 19:
                    _ = t.sent, "0" === _.code && a && a(_.data);
                  case 21:
                  case "end":
                    return t.stop();
                }
              }, t);
            }))();
          },
          getNetworkType: function () {
            return (0, r.default)((0, i.default)().mark(function e() {
              return (0, i.default)().wrap(function (e) {
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
            return (0, r.default)((0, i.default)().mark(function n() {
              return (0, i.default)().wrap(function (n) {
                while (1) switch (n.prev = n.next) {
                  case 0:
                    return n.abrupt("return", new Promise(function (n) {
                      var t = {
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
                              t.longitude = e.longitude, t.latitude = e.latitude, n(t);
                            },
                            fail: function (e) {
                              n(t);
                            }
                          });
                        });
                      }) : navigator.geolocation.getCurrentPosition(function (e) {
                        t.longitude = e.coords.longitude, t.latitude = e.coords.latitude, n(t);
                      }, function (e) {
                        n(t);
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
              t = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 0;
            if (e && n && t) {
              var o = uni.getSystemInfoSync(),
                i = o.deviceId,
                a = [i, e, n].join(":"),
                r = uni.getStorageSync(a),
                u = {};
              r ? (u = JSON.parse(r), u[t] ? delete u[t] : u[t] = t) : u[t] = t, uni.setStorageSync(a, JSON.stringify(u));
            }
          },
          getMemberStatData: function () {
            var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : "",
              n = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : "",
              t = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 0;
            if (!e || !n) return 0;
            var o = uni.getSystemInfoSync(),
              i = o.deviceId,
              a = [i, e, n].join(":"),
              r = uni.getStorageSync(a);
            if (r) {
              var u = JSON.parse(r);
              return t ? u[t] ? u[t] : 0 : Object.values(u);
            }
            return t ? 0 : [];
          },
          hideWechatShare: function () {
            return (0, r.default)((0, i.default)().mark(function n() {
              var t, o;
              return (0, i.default)().wrap(function (n) {
                while (1) switch (n.prev = n.next) {
                  case 0:
                    if ((0, l.checkIsWechatBrowser)()) {
                      n.next = 2;
                      break;
                    }
                    return n.abrupt("return");
                  case 2:
                    return t = window.location.href.split("#")[0], n.next = 5, u.default.$api.getwxjsConfig({
                      url: encodeURIComponent(t)
                    });
                  case 5:
                    o = n.sent, o && (_.config({
                      debug: !1,
                      appId: o.appId,
                      timestamp: o.timestamp,
                      nonceStr: o.nonceStr,
                      signature: o.signature,
                      jsApiList: ["hideMenuItems"]
                    }), _.ready(function () {
                      _.hideMenuItems({
                        menuList: ["menuItem:share:appMessage", "menuItem:share:timeline", "menuItem:share:qq", "menuItem:favorite", "menuItem:share:QZone", "menuItem:openWithSafari", "menuItem:copyUrl"]
                      });
                    }), _.error(function (n) {
                      e.log(n);
                    }));
                  case 7:
                  case "end":
                    return n.stop();
                }
              }, n);
            }))();
          },
          initWeixinShareConfig: function () {
            var e = arguments,
              n = this;
            return (0, r.default)((0, i.default)().mark(function t() {
              var o, a;
              return (0, i.default)().wrap(function (t) {
                while (1) switch (t.prev = t.next) {
                  case 0:
                    if (o = e.length > 0 && void 0 !== e[0] ? e[0] : {}, a = e.length > 1 && void 0 !== e[1] ? e[1] : null, (0, l.checkIsWechatBrowser)()) {
                      t.next = 4;
                      break;
                    }
                    return t.abrupt("return");
                  case 4:
                    n.initWeixinSdkConfig(function () {
                      var e = window.location.href.split("#")[0];
                      _.ready(function () {
                        var n = {
                          title: o.title || "",
                          desc: o.desc || "",
                          link: o.linkUrl || e,
                          imgUrl: o.imageUrl || "",
                          success: function (e) {}
                        };
                        _.updateAppMessageShareData(n), _.updateTimelineShareData(n), a && a();
                      });
                    });
                  case 5:
                  case "end":
                    return t.stop();
                }
              }, t);
            }))();
          },
          initWeixinSdkConfig: function () {
            var e = arguments;
            return (0, r.default)((0, i.default)().mark(function n() {
              var t, o, a;
              return (0, i.default)().wrap(function (n) {
                while (1) switch (n.prev = n.next) {
                  case 0:
                    if (t = e.length > 0 && void 0 !== e[0] ? e[0] : null, (0, l.checkIsWechatBrowser)()) {
                      n.next = 3;
                      break;
                    }
                    return n.abrupt("return");
                  case 3:
                    return o = window.location.href.split("#")[0], n.next = 6, u.default.$api.getwxjsConfig({
                      url: encodeURIComponent(o)
                    });
                  case 6:
                    a = n.sent, a && (_.config({
                      debug: !!a.debug,
                      appId: a.appId,
                      timestamp: a.timestamp,
                      nonceStr: a.nonceStr,
                      signature: a.signature,
                      jsApiList: a.jsApiList,
                      openTagList: ["wx-open-launch-app"]
                    }), t && t(a));
                  case 8:
                  case "end":
                    return n.stop();
                }
              }, n);
            }))();
          },
          getHeaderInfoByYdJssdk: function () {
            return (0, r.default)((0, i.default)().mark(function e() {
              return (0, i.default)().wrap(function (e) {
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
            return (0, r.default)((0, i.default)().mark(function e() {
              return (0, i.default)().wrap(function (e) {
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
            return (0, r.default)((0, i.default)().mark(function e() {
              return (0, i.default)().wrap(function (e) {
                while (1) switch (e.prev = e.next) {
                  case 0:
                    return e.abrupt("return", new Promise(function (e) {
                      YDNativeSDK.getHeaderInfo(function (n) {
                        var t = n ? JSON.parse(n) : {};
                        e(t);
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
            return (0, r.default)((0, i.default)().mark(function e() {
              return (0, i.default)().wrap(function (e) {
                while (1) switch (e.prev = e.next) {
                  case 0:
                    return e.abrupt("return", new Promise(function (e) {
                      YDNativeSDK.getUserInfo({
                        needlogin: 1
                      }, function (n) {
                        if (n) {
                          var t = JSON.parse(n);
                          "0" === t.code ? e(t.data) : e(!1);
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
            var t = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 0,
              o = {
                data: n,
                time: Date.now() / 1000,
                expire: t
              };
            uni.setStorageSync(e, JSON.stringify(o));
          },
          getCache: function (e) {
            var n = uni.getStorageSync(e);
            return n ? (n = JSON.parse(n), n.expire && Date.now() / 1000 - n.time > n.expire ? (uni.removeStorageSync(e), null) : n.data) : null;
          },
          goodsPriceFormat: function (e) {
            var n = arguments.length > 1 && void 0 !== arguments[1] && arguments[1],
              t = arguments.length > 2 ? arguments[2] : void 0,
              o = [];
            e.integral && o.push(e.integral + t.integral_config.title), e.gold && o.push(e.gold + t.gold_config.title);
            var i = e.price ? parseFloat(e.price) : 0;
            return n && (i += parseFloat(e.courier_price)), i > 0 && o.push(i + "\u5143"), o.length ? o.join("+") : "0\u5143";
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
            return (0, r.default)((0, i.default)().mark(function n() {
              var t, o, a, r;
              return (0, i.default)().wrap(function (n) {
                while (1) switch (n.prev = n.next) {
                  case 0:
                    if (t = e.getMallBusinessAccess(), t) {
                      n.next = 3;
                      break;
                    }
                    return n.abrupt("return", !1);
                  case 3:
                    if (o = e.getCache(m.default.localStorageKeys.businessAccountInfo), !o) {
                      n.next = 6;
                      break;
                    }
                    return n.abrupt("return", o);
                  case 6:
                    return n.next = 8, u.default.$api.getBusinessAccountInfo({
                      access_token: t.access_token
                    });
                  case 8:
                    if (a = n.sent, "0" !== a.code) {
                      n.next = 15;
                      break;
                    }
                    return r = {
                      account: a.data,
                      access: t
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
            return (0, r.default)((0, i.default)().mark(function t() {
              var o, r, s, m;
              return (0, i.default)().wrap(function (t) {
                while (1) switch (t.prev = t.next) {
                  case 0:
                    return o = e.length > 0 && void 0 !== e[0] ? e[0] : {}, r = (0, a.default)({}, o), r.noncestr = u.default.$u.guid(6, !1), r.timestamp = parseInt(new Date().getTime() / 1000), t.next = 6, n.tenantInitSetting();
                  case 6:
                    return s = t.sent, r.appid = s.appid, r = (0, l.kSort)(r), m = c.default.md5((0, l.objToQueryParams)(r, !1) + "&appkey=" + s.appkey), r.signature = m, t.abrupt("return", r);
                  case 12:
                  case "end":
                    return t.stop();
                }
              }, t);
            }))();
          },
          ydUserInit: function (e, n) {
            var t = arguments,
              o = this;
            return (0, r.default)((0, i.default)().mark(function a() {
              var r, l, s, m, d, c, g;
              return (0, i.default)().wrap(function (i) {
                while (1) switch (i.prev = i.next) {
                  case 0:
                    return r = t.length > 2 && void 0 !== t[2] ? t[2] : "", l = t.length > 3 && void 0 !== t[3] ? t[3] : "", s = t.length > 4 && void 0 !== t[4] ? t[4] : "", m = t.length > 5 && void 0 !== t[5] ? t[5] : "", d = t.length > 6 && void 0 !== t[6] ? t[6] : "", c = {}, c.user_id = e, c.user_name = n, c.portrait_url = r, c.phone = l, c.wx_openid = s, c.wx_unionid = m, c.app_user_token = d, i.next = 15, o.ydSignParams(c);
                  case 15:
                    return c = i.sent, i.next = 18, u.default.$api.appUserInit(c);
                  case 18:
                    return g = i.sent, i.abrupt("return", g);
                  case 20:
                  case "end":
                    return i.stop();
                }
              }, a);
            }))();
          },
          ydLogin: function () {
            var e = arguments,
              n = this;
            return (0, r.default)((0, i.default)().mark(function t() {
              var o;
              return (0, i.default)().wrap(function (t) {
                while (1) switch (t.prev = t.next) {
                  case 0:
                    if (o = e.length > 0 && void 0 !== e[0] ? e[0] : "", o) {
                      t.next = 3;
                      break;
                    }
                    return t.abrupt("return", !1);
                  case 3:
                    return t.abrupt("return", new Promise(function (e) {
                      p.default[o].getUserInfo(function () {
                        var t = (0, r.default)((0, i.default)().mark(function t(a) {
                          var r;
                          return (0, i.default)().wrap(function (t) {
                            while (1) switch (t.prev = t.next) {
                              case 0:
                                if (a) {
                                  t.next = 5;
                                  break;
                                }
                                return n.clearLoginInfo(), uni.removeStorageSync(m.default.localStorageKeys.thirdPrefix + o), e(!1), t.abrupt("return");
                              case 5:
                                return t.next = 7, n._thirdUserInfoInitBefore(o, a);
                              case 7:
                                r = t.sent, e(r);
                              case 9:
                              case "end":
                                return t.stop();
                            }
                          }, t);
                        }));
                        return function (e) {
                          return t.apply(this, arguments);
                        };
                      }());
                    }));
                  case 4:
                  case "end":
                    return t.stop();
                }
              }, t);
            }))();
          },
          _thirdUserInfoInitBefore: function (e, n) {
            var t = this;
            return (0, r.default)((0, i.default)().mark(function o() {
              var a;
              return (0, i.default)().wrap(function (o) {
                while (1) switch (o.prev = o.next) {
                  case 0:
                    if (!n) {
                      o.next = 13;
                      break;
                    }
                    return o.next = 3, t.ydUserInit(n.user_id, decodeURIComponent(n.user_name), n.portrait_url, n.phone, n.wx_openid, n.wx_unionid, n.app_user_token);
                  case 3:
                    if (a = o.sent, !a || "0" !== a.code) {
                      o.next = 10;
                      break;
                    }
                    return uni.setStorageSync(m.default.localStorageKeys.accessToken, a.data.access_token), t.setCache(m.default.localStorageKeys.thirdPrefix + e, n), o.abrupt("return", !0);
                  case 10:
                    return o.abrupt("return", !1);
                  case 11:
                    o.next = 16;
                    break;
                  case 13:
                    return t.clearLoginInfo(), uni.removeStorageSync(m.default.localStorageKeys.thirdPrefix + e), o.abrupt("return", !1);
                  case 16:
                  case "end":
                    return o.stop();
                }
              }, o);
            }))();
          },
          checkIsLoggedYd: function () {
            var e = arguments,
              n = this;
            return (0, r.default)((0, i.default)().mark(function t() {
              var o;
              return (0, i.default)().wrap(function (t) {
                while (1) switch (t.prev = t.next) {
                  case 0:
                    if (o = e.length > 0 && void 0 !== e[0] ? e[0] : "", o) {
                      t.next = 3;
                      break;
                    }
                    return t.abrupt("return", !1);
                  case 3:
                    return t.abrupt("return", new Promise(function (e) {
                      p.default[o].getUserInfo(function (t) {
                        if (t) {
                          var i = n._thirdGetUserInfoAfter(o, t);
                          e(i);
                        } else n.clearLoginInfo(), e(!1);
                      });
                    }));
                  case 4:
                  case "end":
                    return t.stop();
                }
              }, t);
            }))();
          },
          _thirdGetUserInfoAfter: function (e, n) {
            if (n) {
              var t = this.getUserInfoFromLocalStorage(!1);
              if (t) {
                var o = this.getCache(m.default.localStorageKeys.thirdPrefix + e);
                return o && o["app_user_token"] == n["app_user_token"] && o["user_id"] == n["user_id"] && o["user_name"] == n["user_name"] ? t : (this.clearLoginInfo(), !1);
              }
              return !1;
            }
            return this.clearLoginInfo(), !1;
          },
          tenantInitSetting: function () {
            var n = this;
            return (0, r.default)((0, i.default)().mark(function t() {
              var o, r, u, l, s;
              return (0, i.default)().wrap(function (t) {
                while (1) switch (t.prev = t.next) {
                  case 0:
                    if (t.prev = 0, o = n.getCache(m.default.localStorageKeys.tenantSettingInfo), !o) {
                      t.next = 6;
                      break;
                    }
                    getApp().globalData = (0, a.default)((0, a.default)({}, getApp().globalData), o), t.next = 14;
                    break;
                  case 6:
                    if (r = location.hostname.split("."), 4 !== r.length) {
                      t.next = 14;
                      break;
                    }
                    return u = r[0], u = u.split("-")[0], t.next = 12, (0, g.tenantH5Init)(u);
                  case 12:
                    l = t.sent, "0" === l.code && l.data && (s = JSON.parse(atob(l.data)), n.setCache(m.default.localStorageKeys.tenantSettingInfo, s, 2592000), getApp().globalData = (0, a.default)((0, a.default)({}, getApp().globalData), s));
                  case 14:
                    return t.abrupt("return", getApp().globalData);
                  case 17:
                    return t.prev = 17, t.t0 = t["catch"](0), e.log("err:" + t.t0), t.abrupt("return", getApp().globalData);
                  case 21:
                  case "end":
                    return t.stop();
                }
              }, t, null, [[0, 17]]);
            }))();
          },
          getWebsocketUrl: function (e) {
            var n = arguments,
              t = this;
            return (0, r.default)((0, i.default)().mark(function o() {
              var r, u, s, d, c;
              return (0, i.default)().wrap(function (o) {
                while (1) switch (o.prev = o.next) {
                  case 0:
                    return r = n.length > 1 && void 0 !== n[1] ? n[1] : {}, u = m.default.websocketUrls[e], s = uni.getSystemInfoSync(), d = t.getUserInfoFromLocalStorage(!1), c = (0, a.default)({
                      device_token: s.deviceId,
                      user_id: d && d.id || 0,
                      user_name: d && d.name || "",
                      longitude: 0,
                      latitude: 0,
                      locationtype: 2,
                      access_t_id: getApp().globalData.t_id
                    }, r), o.abrupt("return", u + (0, l.objToQueryParams)(c));
                  case 6:
                  case "end":
                    return o.stop();
                }
              }, o);
            }))();
          },
          checkIsShowFooterNav: function () {
            var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : null;
            return !this.checkIsInThirdBrowser() && !this.checkIsYdSdkBrowser() && (e ? !(!e.style || !e.style.app_download_boot) : getApp().globalData.app && 1 === getApp().globalData.app.open);
          },
          checkIsCanJoinActivity: function () {
            var e = this,
              n = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : [],
              t = !(arguments.length > 1 && void 0 !== arguments[1]) || arguments[1],
              o = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : "";
            if (this.checkIsInThirdBrowser() || this.checkIsYdSdkBrowser()) return !0;
            var i = getApp().globalData.app.android.app_name || "",
              a = !0,
              r = "\u8BF7\u5728".concat(i, "APP\u4E2D\u53C2\u4E0E\u6D3B\u52A8"),
              l = "\u8BF7\u524D\u5F80\u5E94\u7528\u5E02\u573A\u4E0B\u8F7D".concat(i, "APP\u53C2\u4E0E\u8BE5\u6D3B\u52A8\uFF01");
            return this.checkIsWechatBrowser() ? a = n.includes(1) : (a = n.includes(2), !a && n.includes(1) && (r = "\u8BF7\u5728".concat(i, "APP\u6216\u5FAE\u4FE1\u4E2D\u6253\u5F00\u53C2\u4E0E\u6D3B\u52A8"), l = "\u8BF7\u524D\u5F80\u5E94\u7528\u5E02\u573A\u4E0B\u8F7D".concat(i, "APP\u6216\u5728\u5FAE\u4FE1\u4E2D\u6253\u5F00\u53C2\u4E0E\u8BE5\u6D3B\u52A8\uFF01"))), a || uni.showModal({
              title: "\u53CB\u60C5\u63D0\u793A",
              content: r,
              showCancel: t,
              success: function (n) {
                var t = getApp().globalData.h5_domain + e.getCurrentPagePath(),
                  i = e.getProtocolLink(t);
                if (e.copyText(i), n.confirm) {
                  var a = getApp().globalData.app,
                    r = uni.getSystemInfoSync();
                  "ios" === r.platform ? o ? e.routeJump(e.getFilterAppDownloadUrl(o, t)) : a.ios.download_url ? e.routeJump(e.getFilterAppDownloadUrl(a.ios.download_url, t)) : u.default.$u.toast(l) : o ? e.routeJump(e.getFilterAppDownloadUrl(o, t)) : a.android.download_url ? e.routeJump(e.getFilterAppDownloadUrl(a.android.download_url, t)) : u.default.$u.toast(l);
                }
              }
            }), a;
          },
          getFilterAppDownloadUrl: function () {
            var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : "",
              n = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : "";
            if (!e) return "";
            var t = e;
            if (n) {
              if (t = t.replace("{link}", encodeURIComponent(n)), -1 != t.search("{title}")) {
                var o = getCurrentPages(),
                  i = o[o.length - 1];
                i && i.activityDetail && i.activityDetail.title && (t = t.replace("{title}", i.activityDetail.title));
              }
              "jsxww" == getApp().globalData.appid && (t = this.getInJsShareUrl(t, n));
            }
            return t;
          },
          getUserInfoFromLocalStorage: function () {
            var n = arguments.length > 0 && void 0 !== arguments[0] && arguments[0],
              t = arguments.length > 1 && void 0 !== arguments[1] && arguments[1],
              o = uni.getStorageSync(m.default.localStorageKeys.userInfo);
            o = o ? JSON.parse(o) : null;
            var i = this.checkIsInThirdBrowser();
            return !o && i && n && this.checkIsNeedLoginTip() && (t ? p.default[i].goToLoginPage() : uni.showModal({
              title: "\u53CB\u60C5\u63D0\u793A",
              content: "\u8BF7\u60A8\u5148\u767B\u5F55",
              success: function (n) {
                n.confirm ? p.default[i].goToLoginPage() : n.cancel && e.log("\u7528\u6237\u70B9\u51FB\u53D6\u6D88");
              }
            })), o;
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
            var t = m.default.localStorageKeys.userinfoCollection + "_" + e + "_" + n,
              o = this.getUserInfoFromLocalStorage(),
              i = 0;
            o && (i = o.id);
            var a = m.default.localStorageKeys.userinfoCollection + "_" + e + "_" + n + "_" + i,
              r = uni.getStorageSync(a);
            return r || (r = uni.getStorageSync(t), r) ? (r = JSON.parse(r), r.data) : null;
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
            var t = arguments;
            return (0, r.default)((0, i.default)().mark(function o() {
              var a, r, u, s;
              return (0, i.default)().wrap(function (o) {
                while (1) switch (o.prev = o.next) {
                  case 0:
                    a = t.length > 2 && void 0 !== t[2] ? t[2] : {}, r = {
                      method: "post",
                      module_id: e.module_id,
                      content_folder: e.content_folder,
                      name: n.name,
                      size: n.size,
                      type: n.type
                    }, o.t0 = (0, l.getFileType)(n.name), o.next = "image" === o.t0 ? 5 : "video" === o.t0 ? 8 : "audio" === o.t0 ? 12 : 14;
                    break;
                  case 5:
                    return a.width && (r.width = a.width), a.height && (r.height = a.height), o.abrupt("break", 14);
                  case 8:
                    return r.duration = a.duration, r.width = a.width, r.height = a.height, o.abrupt("break", 14);
                  case 12:
                    return r.duration = a.duration, o.abrupt("break", 14);
                  case 14:
                    return o.next = 16, (0, g.getOssUploadUrl)(r);
                  case 16:
                    if (u = o.sent, "0" !== u.code) {
                      o.next = 22;
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
                    }, o.abrupt("return", s);
                  case 22:
                    return uni.showToast({
                      title: u.msg,
                      icon: "error",
                      duration: 2000
                    }), o.abrupt("return");
                  case 24:
                  case "end":
                    return o.stop();
                }
              }, o);
            }))();
          },
          wxTempFileToObject: function (e) {
            var n = e.tempFilePath.split("/").pop(),
              t = {},
              o = n.lastIndexOf("."),
              i = n.substr(o + 1);
            switch ((0, l.getFileType)(n)) {
              case "image":
                t.name = n, t.size = e.size, t.tempFile = {
                  name: n,
                  size: e.size,
                  type: "image/" + i
                };
                break;
              case "video":
                t.name = n, t.width = e.width, t.height = e.height, t.size = e.size, t.duration = e.duration, t.tempFile = {
                  name: n,
                  size: e.size,
                  type: "video/" + i
                };
                break;
              case "audio":
                t.name = n, t.size = e.size, t.duration = e.duration, t.tempFile = {
                  name: n,
                  size: e.size,
                  type: "audio" + i
                };
                break;
            }
            return t;
          },
          objectURLToFile: function (e) {
            return uni.showLoading({
              title: "\u538B\u7F29\u4E2D..."
            }), new Promise(function (n, t) {
              var o = new XMLHttpRequest();
              o.open("GET", e, !0), o.responseType = "blob", o.onload = function (t) {
                if (200 == this.status || 0 === this.status) {
                  var o = c.default.md5(e) + ".mp3",
                    i = new File([this.response], o, {
                      type: this.response.type
                    });
                  n(i), uni.hideLoading();
                }
              }, o.send();
            });
          },
          handleUserIsBindWechat: function () {
            var n = this;
            return (0, r.default)((0, i.default)().mark(function t() {
              var o, a, l, s, m;
              return (0, i.default)().wrap(function (t) {
                while (1) switch (t.prev = t.next) {
                  case 0:
                    if (!n.checkIsWechatBrowser()) {
                      t.next = 2;
                      break;
                    }
                    return t.abrupt("return", !0);
                  case 2:
                    return t.next = 4, n.checkUserIsBindWechat();
                  case 4:
                    return o = t.sent, a = !(!o || !o.bind), a || (l = getApp().globalData.app.android.app_name || "", s = "\u8BF7\u5728".concat(l, "APP\u4E2D\u7ED1\u5B9A\u5FAE\u4FE1\u8D26\u53F7"), m = n.checkIsInThirdBrowser(), m ? o && 1 == o.bind_type && !u.default.$u.test.isEmpty(o.bind_data) ? uni.showModal({
                      title: "\u53CB\u60C5\u63D0\u793A",
                      content: "\u60A8\u9700\u8981\u7ED1\u5B9A\u5FAE\u4FE1\u624D\u53EF\u53C2\u4E0E\u6D3B\u52A8",
                      confirmText: "\u53BB\u7ED1\u5B9A",
                      success: function () {
                        var e = (0, r.default)((0, i.default)().mark(function e(t) {
                          var a, r;
                          return (0, i.default)().wrap(function (e) {
                            while (1) switch (e.prev = e.next) {
                              case 0:
                                if (!t.confirm) {
                                  e.next = 6;
                                  break;
                                }
                                return a = {
                                  bind_t_id: o.bind_data.bind_t_id || "",
                                  bind_wx_user_id: o.bind_data.bind_wx_user_id || "",
                                  bind_wx_sign: o.bind_data.bind_wx_sign || ""
                                }, e.next = 4, n.getWeixinPayMiniProUrl(a);
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
                          var t = getApp().globalData.appid;
                          "wxbb" == t ? p.default[m].linkTo("goToLogin/my1/ModUserCenterStyle19UpdateInfo") : p.default[m].goUcenter();
                        } else n.cancel && e.log("\u7528\u6237\u70B9\u51FB\u53D6\u6D88");
                      }
                    }) : u.default.$u.toast(s) : u.default.$u.toast(s)), t.abrupt("return", a);
                  case 8:
                  case "end":
                    return t.stop();
                }
              }, t);
            }))();
          },
          checkUserIsBindWechat: function () {
            return (0, r.default)((0, i.default)().mark(function e() {
              var n;
              return (0, i.default)().wrap(function (e) {
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
            return (0, r.default)((0, i.default)().mark(function t() {
              var o, a, r, s;
              return (0, i.default)().wrap(function (t) {
                while (1) switch (t.prev = t.next) {
                  case 0:
                    return o = e.length > 0 && void 0 !== e[0] ? e[0] : {}, a = e.length > 1 && void 0 !== e[1] ? e[1] : "bind", t.next = 4, n.tenantInitSetting();
                  case 4:
                    return r = t.sent, uni.showLoading({
                      title: "\u6B63\u5728\u8DF3\u8F6C\u5230\u5FAE\u4FE1..."
                    }), t.next = 8, u.default.$api.getWeixinMiniProUrl({
                      env_version: "release",
                      path: "/pages/".concat(a, "/").concat(a),
                      query: (0, l.objToQueryParams)(o, !1),
                      access_t_id: r.t_id,
                      access_t_id_in: r.t_id_in
                    });
                  case 8:
                    if (s = t.sent, uni.hideLoading(), "0" !== s.code || !s.data || !s.data.openlink) {
                      t.next = 14;
                      break;
                    }
                    return t.abrupt("return", s.data.openlink);
                  case 14:
                    return t.abrupt("return", "");
                  case 15:
                  case "end":
                    return t.stop();
                }
              }, t);
            }))();
          },
          initAppShareConfig: function () {
            var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {},
              n = this.checkIsInThirdBrowser();
            if (n) {
              var t = window.location.href.split("#")[0];
              p.default[n].shareTo({
                title: e.title || "",
                brief: e.desc || "",
                link_url: e.linkUrl || t,
                indexpic: e.imageUrl || ""
              });
            }
          },
          jumpToAppDownloadUrl: function () {
            var e = this,
              n = this.checkIsInThirdBrowser();
            if (!n) {
              var t = "\u8BF7\u524D\u5F80\u5E94\u7528\u5E02\u573A\u4E0B\u8F7DAPP\u53C2\u4E0E\u6D3B\u52A8\uFF01";
              uni.showModal({
                title: "\u53CB\u60C5\u63D0\u793A",
                content: t,
                showCancel: !1,
                success: function (n) {
                  var o = getApp().globalData.h5_domain + e.getCurrentPagePath(),
                    i = e.getProtocolLink(o);
                  if (e.copyText(i), n.confirm) {
                    var a = getApp().globalData.app,
                      r = uni.getSystemInfoSync();
                    "ios" === r.platform ? a.ios.download_url ? e.routeJump(e.getFilterAppDownloadUrl(a.ios.download_url, o)) : u.default.$u.toast(t) : a.android.download_url ? e.routeJump(e.getFilterAppDownloadUrl(a.android.download_url, o)) : u.default.$u.toast(t);
                  }
                }
              });
            }
          },
          jumpToWechat: function () {
            window.location.href = "weixin://";
          },
          openVConsole: function () {
            b || this.isDebugMode() && (b = new y.default());
          },
          getWeixinMiniProUrl: function () {
            var e = arguments;
            return (0, r.default)((0, i.default)().mark(function n() {
              var t, o, r, s;
              return (0, i.default)().wrap(function (n) {
                while (1) switch (n.prev = n.next) {
                  case 0:
                    return t = e.length > 0 && void 0 !== e[0] ? e[0] : {}, o = e.length > 1 && void 0 !== e[1] ? e[1] : "redpacket", r = (0, a.default)((0, a.default)({}, t), {}, {
                      hide_back: 1
                    }), uni.showLoading({
                      title: "\u6B63\u5728\u8DF3\u8F6C\u5230\u5FAE\u4FE1..."
                    }), n.next = 6, u.default.$api.getWeixinMiniProUrl({
                      env_version: "release",
                      path: "/module-" + o + "/home/home",
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
            return (0, r.default)((0, i.default)().mark(function e() {
              var n;
              return (0, i.default)().wrap(function (e) {
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
                t = n.options && n.options["_clear_tenant"] ? parseInt(n.options["_clear_tenant"]) : 0;
              t && uni.removeStorageSync(m.default.localStorageKeys.tenantSettingInfo);
            }
          },
          getGeoLocationInfo: function () {
            var n = this;
            return (0, r.default)((0, i.default)().mark(function t() {
              var o;
              return (0, i.default)().wrap(function (t) {
                while (1) switch (t.prev = t.next) {
                  case 0:
                    return t.prev = 0, o = new qq.maps.Geolocation(n.getQQMapKey(), m.default.qqMapReferer), t.abrupt("return", new Promise(function (n) {
                      o.getLocation(function (e) {
                        n(e);
                      }, function () {
                        e.log("\u5B9A\u4F4D\u5931\u8D25"), n(!1);
                      }, {
                        timeout: 5000
                      });
                    }));
                  case 5:
                    return t.prev = 5, t.t0 = t["catch"](0), t.abrupt("return", !1);
                  case 8:
                  case "end":
                    return t.stop();
                }
              }, t, null, [[0, 5]]);
            }))();
          },
          getGeoLocationInfoByApp: function () {
            var n = this;
            return new Promise(function () {
              var t = (0, r.default)((0, i.default)().mark(function t(o) {
                var a, r, u;
                return (0, i.default)().wrap(function (t) {
                  while (1) switch (t.prev = t.next) {
                    case 0:
                      if (a = null, r = (0, l.checkIsInThirdBrowser)(), u = uni.getSystemInfoSync(), "hg" != r) {
                        t.next = 7;
                        break;
                      }
                      try {
                        p.default[r].getLocation(function (e) {
                          if (e.addr = e.address, a = e, a.latitude && a.longitude) {
                            if ("android" == u.platform) {
                              var n = h.default.bd2gcj(a.latitude, a.longitude);
                              a.longitude = n.longitude, a.latitude = n.latitude;
                            }
                            if ("ios" == u.platform) {
                              var t = h.default.wgs2gcj(a.latitude, a.longitude);
                              a.longitude = t.longitude, a.latitude = t.latitude;
                            }
                            o(a);
                          } else "ios" == u.platform ? setTimeout(function () {
                            o(!1);
                          }, 2000) : o(!1);
                        });
                      } catch (i) {
                        e.log("\u5B9A\u4F4D\u5931\u8D25"), o(!1);
                      }
                      t.next = 16;
                      break;
                    case 7:
                      if (!["tianmu", "trs", "xingkongyun"].includes(r)) {
                        t.next = 11;
                        break;
                      }
                      try {
                        p.default[r].getLocation(function (e) {
                          a = e, a.latitude && a.longitude ? o(a) : o(!1);
                        });
                      } catch (i) {
                        e.log("\u5B9A\u4F4D\u5931\u8D25"), o(!1);
                      }
                      t.next = 16;
                      break;
                    case 11:
                      return t.next = 13, n.getGeoLocationInfo();
                    case 13:
                      a = t.sent, a ? (a.latitude = a.lat, a.longitude = a.lng) : o(!1), o(a);
                    case 16:
                    case "end":
                      return t.stop();
                  }
                }, t);
              }));
              return function (e) {
                return t.apply(this, arguments);
              };
            }());
          },
          transPosition: function (e, n) {
            e = parseFloat(e), n = parseFloat(n);
            var t = 3000 * Math.PI / 180,
              o = e - 0.0065,
              i = n - 0.006,
              a = Math.sqrt(o * o + i * i) - 0.00002 * Math.sin(i * t),
              r = Math.atan2(i, o) - 0.000003 * Math.cos(o * t),
              u = a * Math.cos(r),
              l = a * Math.sin(r);
            return {
              longitude: u,
              latitude: l
            };
          },
          checkLocationIsAllow: function () {
            var e = arguments,
              n = this;
            return (0, r.default)((0, i.default)().mark(function t() {
              var o, a, r, u;
              return (0, i.default)().wrap(function (t) {
                while (1) switch (t.prev = t.next) {
                  case 0:
                    if (o = e.length > 0 && void 0 !== e[0] ? e[0] : "", o) {
                      t.next = 3;
                      break;
                    }
                    return t.abrupt("return", !0);
                  case 3:
                    return t.next = 5, n.getGeoLocationInfo();
                  case 5:
                    if (a = t.sent, a && a.city) {
                      t.next = 8;
                      break;
                    }
                    return t.abrupt("return", !1);
                  case 8:
                    return r = o.split(","), u = r.some(function (e) {
                      return -1 != a.city.search(e);
                    }), t.abrupt("return", u);
                  case 11:
                  case "end":
                    return t.stop();
                }
              }, t);
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
            return (0, r.default)((0, i.default)().mark(function n() {
              var t, o, a, r, s, m, d;
              return (0, i.default)().wrap(function (n) {
                while (1) switch (n.prev = n.next) {
                  case 0:
                    return n.next = 2, e["tenantInitSetting"]();
                  case 2:
                    return t = n.sent, o = t["appid"], a = t["appkey"], r = u.default["$u"]["guid"](32, !1), s = new Date()["getTime"](), m = (0, l.getAASkey)(a), d = c.default["md5"](o + r + s + m), n.abrupt("return", [o, r, s, d]["join"](";"));
                  case 10:
                  case "end":
                    return n.stop();
                }
              }, n);
            }))();
          },
          convertImageUrl: function (e) {
            return (0, r.default)((0, i.default)().mark(function n() {
              var t;
              return (0, i.default)().wrap(function (n) {
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
                    if (t = n.sent, "0" !== t.code) {
                      n.next = 9;
                      break;
                    }
                    return n.abrupt("return", t.data);
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
              t = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 3,
              o = this.getUserInfoFromLocalStorage(!1);
            if (o && o.id) {
              var i = m.default.localStorageKeys.verifyCodePassOk + o.id + "_" + t;
              this.setCache(i, e, n);
            }
          },
          getUserValidatePassToken: function () {
            var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 3,
              n = this.getUserInfoFromLocalStorage(!1);
            if (!n || !n.id) return "";
            var t = m.default.localStorageKeys.verifyCodePassOk + n.id + "_" + e,
              o = this.getCache(t);
            return o || "";
          },
          getVerifyCodeType: function (e) {
            return e && e.rule && e.rule.prevent_cheat && e.rule.prevent_cheat.verif_type ? e.rule.prevent_cheat.verif_type : 3;
          },
          jumpToAppNewsPage: function (e) {
            var n = this.checkIsInThirdBrowser();
            n && p.default[n].jumpToNews(e);
          },
          getDomElementBaseInfo: function (e, n) {
            return (0, r.default)((0, i.default)().mark(function t() {
              return (0, i.default)().wrap(function (t) {
                while (1) switch (t.prev = t.next) {
                  case 0:
                    return t.abrupt("return", new Promise(function (t) {
                      var o = uni.createSelectorQuery().in(n);
                      o.select(e).boundingClientRect(), o.exec(function (e) {
                        e && e[0] ? t(e[0]) : t(!1);
                      });
                    }));
                  case 1:
                  case "end":
                    return t.stop();
                }
              }, t);
            }))();
          },
          getServerAuthDeviceToken: function () {
            var e = this;
            return (0, r.default)((0, i.default)().mark(function n() {
              var t, o, a, r;
              return (0, i.default)().wrap(function (n) {
                while (1) switch (n.prev = n.next) {
                  case 0:
                    if (t = m.default.localStorageKeys.localDeviceToken, o = 259200, a = e.getCache(t), !a) {
                      n.next = 7;
                      break;
                    }
                    return n.abrupt("return", e.filterDeviceToken(a));
                  case 7:
                    return n.next = 9, u.default.$api.getServerAuthDeviceToken();
                  case 9:
                    if (r = n.sent, "0" !== r.code || u.default.$u.test.isEmpty(r.data)) {
                      n.next = 15;
                      break;
                    }
                    return e.setCache(t, r.data, o), n.abrupt("return", e.filterDeviceToken(r.data));
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
            var t = m.default.thirdPlatforms.injs.appid,
              o = m.default.thirdPlatforms.injs.appsecret,
              i = c.default.md5(t + n + o);
            return e = e.replace("{appid}", t), e = e.replace("{sign}", i), e;
          },
          getReqPayParams: function () {
            var e = this.getPayClient(),
              n = 0;
            if (e == m.default.paySettings.clients.app) {
              n = m.default.paySettings.payTypes.appMiniPro;
              var t = this.checkIsInThirdBrowser();
              t && "yantai" == t && (n = m.default.paySettings.payTypes.ytbank);
            } else n = e == m.default.paySettings.clients.official ? m.default.paySettings.payTypes.wxOfficial : m.default.paySettings.payTypes.wxWebH5;
            var o = {
              client: e,
              pay_type: n
            };
            return o;
          },
          handlePayOrder: function (e, n) {
            var t = arguments,
              o = this;
            return (0, r.default)((0, i.default)().mark(function a() {
              var r, l, s, d, c, g, f, h;
              return (0, i.default)().wrap(function (i) {
                while (1) switch (i.prev = i.next) {
                  case 0:
                    if (r = t.length > 2 && void 0 !== t[2] ? t[2] : null, l = t.length > 3 && void 0 !== t[3] ? t[3] : {}, e) {
                      i.next = 5;
                      break;
                    }
                    return uni.showToast({
                      title: "\u65E0\u652F\u4ED8\u53C2\u6570",
                      icon: "error"
                    }), i.abrupt("return");
                  case 5:
                    if (n != m.default.paySettings.payTypes.appMiniPro) {
                      i.next = 13;
                      break;
                    }
                    if (!e.pay_client_minipro || 1 != e.pay_client_minipro || u.default.$u.test.isEmpty(e.pay_client_minipro_params)) {
                      i.next = 11;
                      break;
                    }
                    return i.next = 9, o.getWeixinPayMiniProUrl(e.pay_client_minipro_params, "pay");
                  case 9:
                    s = i.sent, s ? (window.location.href = s, r && r(2)) : uni.showToast({
                      title: "\u652F\u4ED8\u5F02\u5E38",
                      icon: "error"
                    });
                  case 11:
                    i.next = 14;
                    break;
                  case 13:
                    n == m.default.paySettings.payTypes.wxOfficial ? e && e.params && (d = e.params, o.initWeixinSdkConfig(function () {
                      _.chooseWXPay({
                        timestamp: d.timeStamp || 0,
                        nonceStr: d.nonceStr || "",
                        package: d.package || "",
                        signType: d.signType || "",
                        paySign: d.paySign || "",
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
                    })) : n == m.default.paySettings.payTypes.wxWebH5 ? e && e.params ? (c = "", g = getApp().globalData.appid, f = o.checkIsInThirdBrowser(), f && g && m.default.thirdPlatforms[f] && m.default.thirdPlatforms[f]["payRedirectUrls"] && m.default.thirdPlatforms[f]["payRedirectUrls"][g] && (c = "&redirect_url=" + encodeURIComponent(m.default.thirdPlatforms[f]["payRedirectUrls"][g])), o.routeJump(e.params + c), r && r(2)) : uni.showToast({
                      title: "\u652F\u4ED8\u5F02\u5E38",
                      icon: "error"
                    }) : [m.default.paySettings.payTypes.abcEcny, m.default.paySettings.payTypes.ytbank].includes(n) && (h = o.checkIsInThirdBrowser(), e && e.params && e.params.url ? h && "yantai" == h ? p.default[h].loadPayUrl({
                      oid: l.oid || "",
                      payUrl: e.params.url,
                      callbackUrl: l.callbackUrl || ""
                    }) : window.location.href = e.params.url : h && "yantai" == h && e && "1000410" == e.code ? uni.showModal({
                      title: "\u53CB\u60C5\u63D0\u793A",
                      content: "\u60A8\u8FD8\u672A\u5B9E\u540D\u8BA4\u8BC1\uFF0C\u8BA4\u8BC1\u540E\u53EF\u8FDB\u884C\u652F\u4ED8",
                      confirmText: "\u53BB\u8BA4\u8BC1",
                      success: function (e) {
                        e.confirm && p.default[h].goToRealnamePage();
                      }
                    }) : uni.showToast({
                      title: e.msg || "\u4E0B\u5355\u5F02\u5E38",
                      icon: "error"
                    }));
                  case 14:
                  case "end":
                    return i.stop();
                }
              }, a);
            }))();
          },
          checkActivityTimeIsInProgress: function (e) {
            var n = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : "\u6D3B\u52A8",
              t = (0, s.default)().unix();
            if (t >= e.start_time && t <= e.end_time) {
              var o = (0, s.default)().format("YYYY-MM-DD");
              if (e.day_start_time) {
                var i = (0, s.default)(o + " " + e.day_start_time, "YYYY-MM-DD HH:mm").unix();
                if (t < i) return uni.showToast({
                  title: n + "\u5C06\u5728" + e.day_start_time + "\u5F00\u59CB",
                  icon: "error"
                }), !1;
              }
              if (e.day_end_time) {
                var a = (0, s.default)(o + " " + e.day_end_time, "YYYY-MM-DD HH:mm").unix();
                if (t > a) return uni.showToast({
                  title: n + "\u5DF2\u5728" + e.day_end_time + "\u7ED3\u675F",
                  icon: "error"
                }), !1;
              }
              if (!u.default.$u.test.isEmpty(e.day_times) && Array.isArray(e.day_times) && e.day_times.length) {
                var r = [],
                  l = 0;
                e.day_times.map(function (e) {
                  l = (0, s.default)(o + " " + e.s, "YYYY-MM-DD HH:mm").unix(), r.push(l);
                }), r.push(r[0] + 86400);
                var m = !1;
                if (e.day_times.map(function (e) {
                  var n = (0, s.default)(o + " " + e.s, "YYYY-MM-DD HH:mm").unix(),
                    i = (0, s.default)(o + " " + e.e, "YYYY-MM-DD HH:mm").unix();
                  t >= n && t < i && (m = !0);
                }), !m) {
                  var d = 0;
                  return r.find(function (n) {
                    return n > t && n < e.end_time && (d = (0, s.default)(1000 * n).format("MM-DD HH:mm"), !0);
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
            if (t < e.start_time) {
              var c = (0, s.default)(1000 * e.start_time).format("MM-DD HH:mm");
              return uni.showToast({
                title: n + "\u5C06\u5728" + c + "\u5F00\u59CB",
                icon: "error"
              }), !1;
            }
            if (t > e.end_time) return uni.showToast({
              title: n + "\u5DF2\u7ED3\u675F",
              icon: "error"
            }), !1;
          },
          getActivityDiffTime: function (e) {
            var n = (0, s.default)().unix();
            if (n >= e.start_time && n <= e.end_time) {
              var t = (0, s.default)().format("YYYY-MM-DD");
              if (e.day_start_time) {
                var o = (0, s.default)(t + " " + e.day_start_time, "YYYY-MM-DD HH:mm").unix();
                if (n < o) return o - n;
              }
              if (e.day_end_time) {
                var i = (0, s.default)(t + " " + e.day_end_time, "YYYY-MM-DD HH:mm").unix();
                return n >= i ? 0 : i - n;
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
          getClientType: function () {
            var e = this.checkIsWechatBrowser();
            if (e) return 4;
            var n = this.checkIsInThirdBrowser();
            if (!n) return 3;
            var t = uni.getSystemInfoSync();
            return "ios" === t.platform ? 2 : "android" === t.platform ? 1 : void 0;
          },
          getOrderPayParams: function () {
            var e = arguments;
            return (0, r.default)((0, i.default)().mark(function n() {
              var t, o;
              return (0, i.default)().wrap(function (n) {
                while (1) switch (n.prev = n.next) {
                  case 0:
                    if (t = e.length > 0 && void 0 !== e[0] ? e[0] : "", t) {
                      n.next = 3;
                      break;
                    }
                    return n.abrupt("return", null);
                  case 3:
                    return n.next = 5, u.default.$api.getOrderPayParams({
                      id: t
                    });
                  case 5:
                    if (o = n.sent, "0" !== o.code) {
                      n.next = 10;
                      break;
                    }
                    return n.abrupt("return", o.data);
                  case 10:
                    return n.abrupt("return", o);
                  case 11:
                  case "end":
                    return n.stop();
                }
              }, n);
            }))();
          },
          getMallStyleSetting: function () {
            var e = this;
            return (0, r.default)((0, i.default)().mark(function n() {
              var t, o, a, r;
              return (0, i.default)().wrap(function (n) {
                while (1) switch (n.prev = n.next) {
                  case 0:
                    return n.next = 2, e.tenantInitSetting();
                  case 2:
                    if (t = n.sent, o = m.default.localStorageKeys.mallStyleSetting + t.appid, a = e.getCache(o), a) {
                      n.next = 17;
                      break;
                    }
                    return n.next = 8, u.default.$api.getMallStyleSetting(t.appid);
                  case 8:
                    if (r = n.sent, "0" !== r.code || u.default.$u.test.isEmpty(r.data)) {
                      n.next = 14;
                      break;
                    }
                    return e.setCache(o, r.data, 600), n.abrupt("return", r.data);
                  case 14:
                    return n.abrupt("return", null);
                  case 15:
                    n.next = 18;
                    break;
                  case 17:
                    return n.abrupt("return", a);
                  case 18:
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
            var t = this.getPayClient();
            return n == m.default.paySettings.cashPayTypes.wechatPay ? t == m.default.paySettings.clients.app ? m.default.paySettings.payTypes.appMiniPro : t == m.default.paySettings.clients.official ? m.default.paySettings.payTypes.wxOfficial : m.default.paySettings.payTypes.wxWebH5 : n == m.default.paySettings.cashPayTypes.aliPay ? m.default.paySettings.payTypes.alipayH5 : n == m.default.paySettings.cashPayTypes.abcEcnyPay ? m.default.paySettings.payTypes.abcEcny : n == m.default.paySettings.cashPayTypes.ytbankPay ? m.default.paySettings.payTypes.ytbank : n == m.default.paySettings.cashPayTypes.chinaumspayUacPay ? m.default.paySettings.payTypes.chinaumspayUac : void 0;
          },
          checkUserIsBindAppAccount: function () {
            var e = this.getUserInfoFromLocalStorage();
            return !(!e || !e.phone_num);
          },
          goToMallHomePage: function () {
            var e = this;
            return (0, r.default)((0, i.default)().mark(function n() {
              var t, o;
              return (0, i.default)().wrap(function (n) {
                while (1) switch (n.prev = n.next) {
                  case 0:
                    return t = "", n.next = 3, e.getMallStyleSetting();
                  case 3:
                    if (o = n.sent, !o) {
                      n.next = 18;
                      break;
                    }
                    n.t0 = o.style, n.next = 1 === n.t0 ? 8 : 2 === n.t0 ? 10 : 3 === n.t0 ? 12 : 4 === n.t0 ? 14 : 5 === n.t0 ? 16 : 18;
                    break;
                  case 8:
                    return t = "/module-mall/home/home", n.abrupt("break", 18);
                  case 10:
                    return t = "/module-mall/home/home-style-two", n.abrupt("break", 18);
                  case 12:
                    return t = "/module-mall/home/home-style-three", n.abrupt("break", 18);
                  case 14:
                    return t = "/module-mall/home/home-style-four", n.abrupt("break", 18);
                  case 16:
                    return t = "/module-mall/home/mall-home", n.abrupt("break", 18);
                  case 18:
                    t && e.routeJump(t);
                  case 19:
                  case "end":
                    return n.stop();
                }
              }, n);
            }))();
          },
          base64ImgtoFile: function (e, n) {
            var t = e.split(","),
              o = t[0].match(/:(.*?);/)[1],
              i = atob(t[1]),
              a = i.length,
              r = new Uint8Array(a);
            while (a--) r[a] = i.charCodeAt(a);
            var u = new Blob([r], {
                type: o
              }),
              l = new File([u], n, {
                type: o
              });
            return l.path = URL.createObjectURL(u), l;
          },
          getInnerImageUrl: function () {
            var e = arguments,
              n = this;
            return (0, r.default)((0, i.default)().mark(function t() {
              var o, a, r, s, m, d, g;
              return (0, i.default)().wrap(function (t) {
                while (1) switch (t.prev = t.next) {
                  case 0:
                    if (o = e.length > 0 && void 0 !== e[0] ? e[0] : {}, a = n.getUserInfoFromLocalStorage(), a && a.id) {
                      t.next = 4;
                      break;
                    }
                    return t.abrupt("return");
                  case 4:
                    return r = uni.getSystemInfoSync(), t.next = 7, n.tenantInitSetting();
                  case 7:
                    return s = t.sent, m = [s.t_id, o.moduleId, o.activityId, a.id, r.deviceId], d = c.default.md5(m.join("-")), m.push(d), g = (0, l.base64EncodeUnicode)(m.join("-")), t.next = 14, u.default.$api.getInnerImageUrl({
                      s: g
                    });
                  case 14:
                  case "end":
                    return t.stop();
                }
              }, t);
            }))();
          },
          getQQMapKey: function () {
            var e = Math.floor(Math.random() * m.default.qqMapKeyList.length);
            return m.default.qqMapKeyList[e];
          },
          getDistance: function (e, n, t, o) {
            e = e || 0, n = n || 0, t = t || 0, o = o || 0;
            var i = e * Math.PI / 180,
              a = t * Math.PI / 180,
              r = i - a,
              u = n * Math.PI / 180 - o * Math.PI / 180,
              l = 12756274 * Math.asin(Math.sqrt(Math.pow(Math.sin(r / 2), 2) + Math.cos(i) * Math.cos(a) * Math.pow(Math.sin(u / 2), 2)));
            return Math.round(l);
          },
          isDebugMode: function () {
            var e = getCurrentPages();
            if (u.default.$u.test.isEmpty(e)) return !1;
            var n = e[e.length - 1],
              t = n.options && n.options["_vconsole"] ? parseInt(n.options["_vconsole"]) : 0;
            return !!t;
          },
          debugLog: function () {
            var e = arguments;
            return (0, r.default)((0, i.default)().mark(function n() {
              var t, o, a, r;
              return (0, i.default)().wrap(function (n) {
                while (1) switch (n.prev = n.next) {
                  case 0:
                    return t = e.length > 0 && void 0 !== e[0] ? e[0] : {}, o = t.content_id || "global", a = t.content_type + "_" + o, r = {
                      type: a,
                      content: t.content ? JSON.stringify(t.content) : ""
                    }, n.next = 6, u.default.$api.reportLog(r);
                  case 6:
                  case "end":
                    return n.stop();
                }
              }, n);
            }))();
          },
          urlAppendParam: function (e, n, t) {
            var o = -1 === e.indexOf("?") ? "?" : "&";
            return e + o + n + "=" + encodeURIComponent(t);
          }
        },
        k = v;
      n.default = k;
    }).call(this, t("ba7c")["default"]);
  },
  c753: function (e, n, t) {
    "use strict";

    t("6a54");
    var o = t("3639").default,
      i = t("f5bd").default;
    Object.defineProperty(n, "__esModule", {
      value: !0
    }), n.default = void 0;
    var a = i(t("9b1b"));
    t("3dde"), t("a8b2"), t("1480"), t("6e4a"), t("8085"), t("d6b2");
    var r = i(t("9b8e"));
    t("9ff1");
    var u = i(t("5524")),
      l = i(t("29fe")),
      s = o(t("9f8f")),
      m = i(t("4b9b")),
      d = i(t("c5fd"));
    t("d005"), t("bced");
    var c = i(t("83a2"));
    t("2470");
    var g = i(t("6fa1")),
      f = i(t("a935"));
    r.default.component("yd-navbar", g.default), r.default.use(f.default), r.default.use(l.default), r.default.config.productionTip = !1, u.default.mpType = "app", r.default.prototype.$api = s, r.default.prototype.$sys = d.default, r.default.prototype.$cnf = m.default, r.default.prototype.$tianmu = c.default;
    var p = new r.default((0, a.default)({}, u.default));
    p.$mount();
    var h = p;
    n.default = h;
  },
  cbcd: function (e, n, t) {
    var o = t("bdbb").default;
    t("0c26"), t("5c47"), t("a1c1"), t("473f"), t("bf0f"), t("7a76"), t("c9b5"), t("c223"), t("23f4"), t("7d2f"), t("9c4e"), t("ab80"), t("fd3c"), t("8f71"), t("64aa"), t("0506"), t("f7a5"), t("5ef2"), t("aa77"), t("2797"), t("aa9c"), t("4100"), t("dfcf"), t("e838"), t("2c10"), function (e) {
      String.prototype.trim === e && (String.prototype.trim = function () {
        return this.replace(/^\s+|\s+$/g, "");
      }), Array.prototype.reduce === e && (Array.prototype.reduce = function (n) {
        if (void 0 === this || null === this) throw new TypeError();
        var t,
          o = Object(this),
          i = o.length >>> 0,
          a = 0;
        if ("function" != typeof n) throw new TypeError();
        if (0 == i && 1 == arguments.length) throw new TypeError();
        if (arguments.length >= 2) t = arguments[1];else for (;;) {
          if (a in o) {
            t = o[a++];
            break;
          }
          if (++a >= i) throw new TypeError();
        }
        for (; i > a;) a in o && (t = n.call(e, t, o[a], a, o)), a++;
        return t;
      });
    }();
    var i = function () {
      function e(e) {
        return null == e ? String(e) : H[J.call(e)] || "object";
      }
      function n(n) {
        return "function" == e(n);
      }
      function t(e) {
        return null != e && e == e.window;
      }
      function i(e) {
        return null != e && e.nodeType == e.DOCUMENT_NODE;
      }
      function a(n) {
        return "object" == e(n);
      }
      function r(e) {
        return a(e) && !t(e) && e.__proto__ == Object.prototype;
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
        return "children" in e ? P.call(e.children) : k.map(e.childNodes, function (e) {
          return 1 == e.nodeType ? e : void 0;
        });
      }
      function g(e, n, t) {
        for (v in n) t && (r(n[v]) || u(n[v])) ? (r(n[v]) && !r(e[v]) && (e[v] = {}), u(n[v]) && !u(e[v]) && (e[v] = []), g(e[v], n[v], t)) : n[v] !== w && (e[v] = n[v]);
      }
      function f(e, n) {
        return n === w ? k(e) : k(e).filter(n);
      }
      function p(e, t, o, i) {
        return n(t) ? t.call(e, o, i) : t;
      }
      function h(e, n, t) {
        null == t ? e.removeAttribute(n) : e.setAttribute(n, t);
      }
      function y(e, n) {
        var t = e.className,
          o = t && t.baseVal !== w;
        return n === w ? o ? t.baseVal : t : void (o ? t.baseVal = n : e.className = n);
      }
      function _(e) {
        var n;
        try {
          return e ? "true" == e || "false" != e && ("null" == e ? null : isNaN(n = Number(e)) ? /^[\[\{]/.test(e) ? k.parseJSON(e) : e : n) : e;
        } catch (t) {
          return e;
        }
      }
      function b(e, n) {
        for (var t in n(e), e.childNodes) b(e.childNodes[t], n);
      }
      var w,
        v,
        k,
        C,
        S,
        x,
        T = [],
        P = T.slice,
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
        R = ["val", "css", "html", "text", "data", "width", "height", "offset"],
        M = q.createElement("table"),
        E = q.createElement("tr"),
        W = {
          tr: q.createElement("tbody"),
          tbody: M,
          thead: M,
          tfoot: M,
          td: E,
          th: E,
          "*": q.createElement("div")
        },
        U = /complete|loaded|interactive/,
        V = /^\.([\w-]+)$/,
        F = /^#([\w-]*)$/,
        z = /^[\w-]+$/,
        H = {},
        J = H.toString,
        G = {},
        K = q.createElement("div");
      return G.matches = function (e, n) {
        if (!e || 1 !== e.nodeType) return !1;
        var t = e.webkitMatchesSelector || e.mozMatchesSelector || e.oMatchesSelector || e.matchesSelector;
        if (t) return t.call(e, n);
        var o,
          i = e.parentNode,
          a = !i;
        return a && (i = K).appendChild(e), o = ~G.qsa(i, n).indexOf(e), a && K.removeChild(e), o;
      }, S = function (e) {
        return e.replace(/-+(.)?/g, function (e, n) {
          return n ? n.toUpperCase() : "";
        });
      }, x = function (e) {
        return A.call(e, function (n, t) {
          return e.indexOf(n) == t;
        });
      }, G.fragment = function (e, n, t) {
        e.replace && (e = e.replace(B, "<$1></$2>")), n === w && (n = D.test(e) && RegExp.$1), n in W || (n = "*");
        var o,
          i,
          a = W[n];
        return a.innerHTML = "" + e, i = k.each(P.call(a.childNodes), function () {
          a.removeChild(this);
        }), r(t) && (o = k(i), k.each(t, function (e, n) {
          R.indexOf(e) > -1 ? o[e](n) : o.attr(e, n);
        })), i;
      }, G.Z = function (e, n) {
        return e = e || [], e.__proto__ = k.fn, e.selector = n || "", e;
      }, G.isZ = function (e) {
        return e instanceof G.Z;
      }, G.init = function (e, t) {
        if (e) {
          if (n(e)) return k(q).ready(e);
          if (G.isZ(e)) return e;
          var o;
          if (u(e)) o = function (e) {
            return A.call(e, function (e) {
              return null != e;
            });
          }(e);else if (a(e)) o = [r(e) ? k.extend({}, e) : e], e = null;else if (D.test(e)) o = G.fragment(e.trim(), RegExp.$1, t), e = null;else {
            if (t !== w) return k(t).find(e);
            o = G.qsa(q, e);
          }
          return G.Z(o, e);
        }
        return G.Z();
      }, k = function (e, n) {
        return G.init(e, n);
      }, k.extend = function (e) {
        var n,
          t = P.call(arguments, 1);
        return "boolean" == typeof e && (n = e, e = t.shift()), t.forEach(function (t) {
          g(e, t, n);
        }), e;
      }, G.qsa = function (e, n) {
        var t;
        return i(e) && F.test(n) ? (t = e.getElementById(RegExp.$1)) ? [t] : [] : 1 !== e.nodeType && 9 !== e.nodeType ? [] : P.call(V.test(n) ? e.getElementsByClassName(RegExp.$1) : z.test(n) ? e.getElementsByTagName(n) : e.querySelectorAll(n));
      }, k.contains = function (e, n) {
        return e !== n && e.contains(n);
      }, k.type = e, k.isFunction = n, k.isWindow = t, k.isArray = u, k.isPlainObject = r, k.isEmptyObject = function (e) {
        var n;
        for (n in e) return !1;
        return !0;
      }, k.inArray = function (e, n, t) {
        return T.indexOf.call(n, e, t);
      }, k.camelCase = S, k.trim = function (e) {
        return e.trim();
      }, k.uuid = 0, k.support = {}, k.expr = {}, k.map = function (e, n) {
        var t,
          o,
          i,
          a = [];
        if (l(e)) for (o = 0; o < e.length; o++) t = n(e[o], o), null != t && a.push(t);else for (i in e) t = n(e[i], i), null != t && a.push(t);
        return function (e) {
          return e.length > 0 ? k.fn.concat.apply([], e) : e;
        }(a);
      }, k.each = function (e, n) {
        var t, o;
        if (l(e)) {
          for (t = 0; t < e.length; t++) if (!1 === n.call(e[t], t, e[t])) return e;
        } else for (o in e) if (!1 === n.call(e[o], o, e[o])) return e;
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
          return k(k.map(this, function (n, t) {
            return e.call(n, t, n);
          }));
        },
        slice: function () {
          return k(P.apply(this, arguments));
        },
        ready: function (e) {
          return U.test(q.readyState) ? e(k) : q.addEventListener("DOMContentLoaded", function () {
            e(k);
          }, !1), this;
        },
        get: function (e) {
          return e === w ? P.call(this) : this[e >= 0 ? e : e + this.length];
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
          return T.every.call(this, function (n, t) {
            return !1 !== e.call(n, t, n);
          }), this;
        },
        filter: function (e) {
          return n(e) ? this.not(this.not(e)) : k(A.call(this, function (n) {
            return G.matches(n, e);
          }));
        },
        add: function (e, n) {
          return k(x(this.concat(k(e, n))));
        },
        is: function (e) {
          return this.length > 0 && G.matches(this[0], e);
        },
        not: function (e) {
          var t = [];
          if (n(e) && e.call !== w) this.each(function (n) {
            e.call(this, n) || t.push(this);
          });else {
            var o = "string" == typeof e ? this.filter(e) : l(e) && n(e.item) ? P.call(e) : k(e);
            this.forEach(function (e) {
              o.indexOf(e) < 0 && t.push(e);
            });
          }
          return k(t);
        },
        has: function (e) {
          return this.filter(function () {
            return a(e) ? k.contains(this, e) : k(this).find(e).size();
          });
        },
        eq: function (e) {
          return -1 === e ? this.slice(e) : this.slice(e, +e + 1);
        },
        first: function () {
          var e = this[0];
          return e && !a(e) ? e : k(e);
        },
        last: function () {
          var e = this[this.length - 1];
          return e && !a(e) ? e : k(e);
        },
        find: function (e) {
          var n = this;
          return "object" == o(e) ? k(e).filter(function () {
            var e = this;
            return T.some.call(n, function (n) {
              return k.contains(n, e);
            });
          }) : 1 == this.length ? k(G.qsa(this[0], e)) : this.map(function () {
            return G.qsa(this, e);
          });
        },
        closest: function (e, n) {
          var t = this[0],
            a = !1;
          for ("object" == o(e) && (a = k(e)); t && !(a ? a.indexOf(t) >= 0 : G.matches(t, e));) t = t !== n && !i(t) && t.parentNode;
          return k(t);
        },
        parents: function (e) {
          for (var n = [], t = this; t.length > 0;) t = k.map(t, function (e) {
            return (e = e.parentNode) && !i(e) && n.indexOf(e) < 0 ? (n.push(e), e) : void 0;
          });
          return f(n, e);
        },
        parent: function (e) {
          return f(x(this.pluck("parentNode")), e);
        },
        children: function (e) {
          return f(this.map(function () {
            return c(this);
          }), e);
        },
        contents: function () {
          return this.map(function () {
            return P.call(this.childNodes);
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
              var n, t;
              return L[e] || (n = q.createElement(e), q.body.appendChild(n), t = O(n, "").getPropertyValue("display"), n.parentNode.removeChild(n), "none" == t && (t = "block"), L[e] = t), L[e];
            }(this.nodeName));
          });
        },
        replaceWith: function (e) {
          return this.before(e).remove();
        },
        wrap: function (e) {
          var t = n(e);
          if (this[0] && !t) var o = k(e).get(0),
            i = o.parentNode || this.length > 1;
          return this.each(function (n) {
            k(this).wrapAll(t ? e.call(this, n) : i ? o.cloneNode(!0) : o);
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
          var t = n(e);
          return this.each(function (n) {
            var o = k(this),
              i = o.contents(),
              a = t ? e.call(this, n) : e;
            i.length ? i.wrapAll(a) : o.append(a);
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
            (e === w ? "none" == n.css("display") : e) ? n.show() : n.hide();
          });
        },
        prev: function (e) {
          return k(this.pluck("previousElementSibling")).filter(e || "*");
        },
        next: function (e) {
          return k(this.pluck("nextElementSibling")).filter(e || "*");
        },
        html: function (e) {
          return e === w ? this.length > 0 ? this[0].innerHTML : null : this.each(function (n) {
            var t = this.innerHTML;
            k(this).empty().append(p(this, e, n, t));
          });
        },
        text: function (e) {
          return e === w ? this.length > 0 ? this[0].textContent : null : this.each(function () {
            this.textContent = e;
          });
        },
        attr: function (e, n) {
          var t;
          return "string" == typeof e && n === w ? 0 == this.length || 1 !== this[0].nodeType ? w : "value" == e && "INPUT" == this[0].nodeName ? this.val() : !(t = this[0].getAttribute(e)) && e in this[0] ? this[0][e] : t : this.each(function (t) {
            if (1 === this.nodeType) if (a(e)) for (v in e) h(this, v, e[v]);else h(this, e, p(this, n, t, this.getAttribute(e)));
          });
        },
        removeAttr: function (e) {
          return this.each(function () {
            1 === this.nodeType && h(this, e);
          });
        },
        prop: function (e, n) {
          return n === w ? this[0] && this[0][e] : this.each(function (t) {
            this[e] = p(this, n, t, this[e]);
          });
        },
        data: function (e, n) {
          var t = this.attr("data-" + s(e), n);
          return null !== t ? _(t) : w;
        },
        val: function (e) {
          return e === w ? this[0] && (this[0].multiple ? k(this[0]).find("option").filter(function () {
            return this.selected;
          }).pluck("value") : this[0].value) : this.each(function (n) {
            this.value = p(this, e, n, this.value);
          });
        },
        offset: function (e) {
          if (e) return this.each(function (n) {
            var t = k(this),
              o = p(this, e, n, t.offset()),
              i = t.offsetParent().offset(),
              a = {
                top: o.top - i.top,
                left: o.left - i.left
              };
            "static" == t.css("position") && (a.position = "relative"), t.css(a);
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
        css: function (n, t) {
          if (arguments.length < 2 && "string" == typeof n) return this[0] && (this[0].style[S(n)] || O(this[0], "").getPropertyValue(n));
          var o = "";
          if ("string" == e(n)) t || 0 === t ? o = s(n) + ":" + d(n, t) : this.each(function () {
            this.style.removeProperty(s(n));
          });else for (v in n) n[v] || 0 === n[v] ? o += s(v) + ":" + d(v, n[v]) + ";" : this.each(function () {
            this.style.removeProperty(s(v));
          });
          return this.each(function () {
            this.style.cssText += ";" + o;
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
            var t = y(this),
              o = p(this, e, n, t);
            o.split(/\s+/g).forEach(function (e) {
              k(this).hasClass(e) || C.push(e);
            }, this), C.length && y(this, t + (t ? " " : "") + C.join(" "));
          });
        },
        removeClass: function (e) {
          return this.each(function (n) {
            return e === w ? y(this, "") : (C = y(this), p(this, e, n, C).split(/\s+/g).forEach(function (e) {
              C = C.replace(m(e), " ");
            }), void y(this, C.trim()));
          });
        },
        toggleClass: function (e, n) {
          return this.each(function (t) {
            var o = k(this),
              i = p(this, e, t, y(this));
            i.split(/\s+/g).forEach(function (e) {
              (n === w ? !o.hasClass(e) : n) ? o.addClass(e) : o.removeClass(e);
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
              t = this.offset(),
              o = N.test(n[0].nodeName) ? {
                top: 0,
                left: 0
              } : n.offset();
            return t.top -= parseFloat(k(e).css("margin-top")) || 0, t.left -= parseFloat(k(e).css("margin-left")) || 0, o.top += parseFloat(k(n[0]).css("border-top-width")) || 0, o.left += parseFloat(k(n[0]).css("border-left-width")) || 0, {
              top: t.top - o.top,
              left: t.left - o.left
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
          var o,
            a = this[0],
            r = e.replace(/./, function (e) {
              return e[0].toUpperCase();
            });
          return n === w ? t(a) ? a["inner" + r] : i(a) ? a.documentElement["offset" + r] : (o = this.offset()) && o[e] : this.each(function (t) {
            a = k(this), a.css(e, p(this, n, t, a[e]()));
          });
        };
      }), ["after", "prepend", "before", "append"].forEach(function (n, t) {
        var o = t % 2;
        k.fn[n] = function () {
          var n,
            i,
            a = k.map(arguments, function (t) {
              return n = e(t), "object" == n || "array" == n || null == t ? t : G.fragment(t);
            }),
            r = this.length > 1;
          return a.length < 1 ? this : this.each(function (e, n) {
            i = o ? n : n.parentNode, n = 0 == t ? n.nextSibling : 1 == t ? n.firstChild : 2 == t ? n : null, a.forEach(function (e) {
              if (r) e = e.cloneNode(!0);else if (!i) return k(e).remove();
              b(i.insertBefore(e, n), function (e) {
                null == e.nodeName || "SCRIPT" !== e.nodeName.toUpperCase() || e.type && "text/javascript" !== e.type || e.src || window.eval.call(window, e.innerHTML);
              });
            });
          });
        }, k.fn[o ? n + "To" : "insert" + (t ? "Before" : "After")] = function (e) {
          return k(e)[n](this), this;
        };
      }), G.Z.prototype = k.fn, G.uniq = x, G.deserializeValue = _, k.zepto = G, k;
    }();
    window.Zepto = i, "$" in window || (window.$ = i), function (e) {
      function n(e) {
        var n = this.os = {},
          t = this.browser = {},
          o = e.match(/WebKit\/([\d.]+)/),
          i = e.match(/(Android)\s+([\d.]+)/),
          a = e.match(/(iPad).*OS\s([\d_]+)/),
          r = !a && e.match(/(iPhone\sOS)\s([\d_]+)/),
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
        (t.webkit = !!o) && (t.version = o[1]), i && (n.android = !0, n.version = i[2]), r && (n.ios = n.iphone = !0, n.version = r[2].replace(/_/g, ".")), a && (n.ios = n.ipad = !0, n.version = a[2].replace(/_/g, ".")), u && (n.webos = !0, n.version = u[2]), l && (n.touchpad = !0), d && (n.blackberry = !0, n.version = d[2]), c && (n.bb10 = !0, n.version = c[2]), g && (n.rimtabletos = !0, n.version = g[2]), f && (t.playbook = !0), s && (n.kindle = !0, n.version = s[1]), m && (t.silk = !0, t.version = m[1]), !m && n.android && e.match(/Kindle Fire/) && (t.silk = !0), p && (t.chrome = !0, t.version = p[1]), h && (t.firefox = !0, t.version = h[1]), n.tablet = !!(a || f || i && !e.match(/Mobile/) || h && e.match(/Tablet/)), n.phone = !(n.tablet || !(i || r || u || d || c || p && e.match(/Android/) || p && e.match(/CriOS\/([\d.]+)/) || h && e.match(/Mobile/)));
      }
      n.call(e, navigator.userAgent), e.__detect = n;
    }(i), function (e) {
      function n(e) {
        return e._zid || (e._zid = d++);
      }
      function t(e, t, i, a) {
        if (t = o(t), t.ns) var r = function (e) {
          return new RegExp("(?:^| )" + e.replace(" ", " .* ?") + "(?: |$)");
        }(t.ns);
        return (m[n(e)] || []).filter(function (e) {
          return !(!e || t.e && e.e != t.e || t.ns && !r.test(e.ns) || i && n(e.fn) !== n(i) || a && e.sel != a);
        });
      }
      function o(e) {
        var n = ("" + e).split(".");
        return {
          e: n[0],
          ns: n.slice(1).sort().join(" ")
        };
      }
      function i(n, t, o) {
        "string" != e.type(n) ? e.each(n, o) : n.split(/\s/).forEach(function (e) {
          o(e, t);
        });
      }
      function a(e, n) {
        return e.del && ("focus" == e.e || "blur" == e.e) || !!n;
      }
      function r(e) {
        return g[e] || e;
      }
      function u(t, u, l, s, d, c) {
        var f = n(t),
          p = m[f] || (m[f] = []);
        i(u, l, function (n, i) {
          var u = o(n);
          u.fn = i, u.sel = s, u.e in g && (i = function (n) {
            var t = n.relatedTarget;
            return !t || t !== this && !e.contains(this, t) ? u.fn.apply(this, arguments) : void 0;
          }), u.del = d && d(i, n);
          var l = u.del || i;
          u.proxy = function (e) {
            var n = l.apply(t, [e].concat(e.data));
            return !1 === n && (e.preventDefault(), e.stopPropagation()), n;
          }, u.i = p.length, p.push(u), t.addEventListener(r(u.e), u.proxy, a(u, c));
        });
      }
      function l(e, o, u, l, s) {
        var d = n(e);
        i(o || "", u, function (n, o) {
          t(e, n, o, l).forEach(function (n) {
            delete m[d][n.i], e.removeEventListener(r(n.e), n.proxy, a(n, s));
          });
        });
      }
      function s(n) {
        var t,
          o = {
            originalEvent: n
          };
        for (t in n) h.test(t) || void 0 === n[t] || (o[t] = n[t]);
        return e.each(y, function (e, t) {
          o[e] = function () {
            return this[t] = f, n[e].apply(n, arguments);
          }, o[t] = p;
        }), o;
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
      }, e.proxy = function (t, o) {
        if (e.isFunction(t)) {
          var i = function () {
            return t.apply(o, arguments);
          };
          return i._zid = n(t), i;
        }
        if ("string" == typeof o) return e.proxy(t[o], t);
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
        return this.each(function (t, o) {
          u(this, e, n, null, function (e, n) {
            return function () {
              var t = e.apply(o, arguments);
              return l(o, n, e), t;
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
      e.fn.delegate = function (n, t, o) {
        return this.each(function (i, a) {
          u(a, t, o, n, function (t) {
            return function (o) {
              var i,
                r = e(o.target).closest(n, a).get(0);
              return r ? (i = e.extend(s(o), {
                currentTarget: r,
                liveFired: a
              }), t.apply(r, [i].concat([].slice.call(arguments, 1)))) : void 0;
            };
          });
        });
      }, e.fn.undelegate = function (e, n, t) {
        return this.each(function () {
          l(this, n, t, e);
        });
      }, e.fn.live = function (n, t) {
        return e(document.body).delegate(this.selector, n, t), this;
      }, e.fn.die = function (n, t) {
        return e(document.body).undelegate(this.selector, n, t), this;
      }, e.fn.on = function (n, t, o) {
        return !t || e.isFunction(t) ? this.bind(n, t || o) : this.delegate(t, n, o);
      }, e.fn.off = function (n, t, o) {
        return !t || e.isFunction(t) ? this.unbind(n, t || o) : this.undelegate(t, n, o);
      }, e.fn.trigger = function (n, t) {
        return ("string" == typeof n || e.isPlainObject(n)) && (n = e.Event(n)), function (e) {
          if (!("defaultPrevented" in e)) {
            e.defaultPrevented = !1;
            var n = e.preventDefault;
            e.preventDefault = function () {
              this.defaultPrevented = !0, n.call(this);
            };
          }
        }(n), n.data = t, this.each(function () {
          "dispatchEvent" in this && this.dispatchEvent(n);
        });
      }, e.fn.triggerHandler = function (n, o) {
        var i, a;
        return this.each(function (r, u) {
          i = s("string" == typeof n ? e.Event(n) : n), i.data = o, i.target = u, e.each(t(u, n.type || n), function (e, n) {
            return a = n.proxy(i), !i.isImmediatePropagationStopped() && void 0;
          });
        }), a;
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
        var t = document.createEvent(c[e] || "Events"),
          o = !0;
        if (n) for (var i in n) "bubbles" == i ? o = !!n[i] : t[i] = n[i];
        return t.initEvent(e, o, !0, null, null, null, null, null, null, null, null, null, null, null, null), t.isDefaultPrevented = function () {
          return this.defaultPrevented;
        }, t;
      };
    }(i), function (e) {
      function n(n, t, o) {
        var i = e.Event(t);
        return e(n).trigger(i, o), !i.defaultPrevented;
      }
      function t(e, t, o, i) {
        return e.global ? n(t || y, o, i) : void 0;
      }
      function o(n) {
        n.global && 0 === e.active++ && t(n, null, "ajaxStart");
      }
      function i(n) {
        n.global && ! --e.active && t(n, null, "ajaxStop");
      }
      function a(e, n) {
        var o = n.context;
        return !1 !== n.beforeSend.call(o, e, n) && !1 !== t(n, o, "ajaxBeforeSend", [e, n]) && void t(n, o, "ajaxSend", [e, n]);
      }
      function r(e, n, o) {
        var i = o.context,
          a = "success";
        o.success.call(i, e, a, n), t(o, i, "ajaxSuccess", [n, o, e]), l(a, n, o);
      }
      function u(e, n, o, i) {
        var a = i.context;
        i.error.call(a, o, n, e), t(i, a, "ajaxError", [o, i, e]), l(n, o, i);
      }
      function l(e, n, o) {
        var a = o.context;
        o.complete.call(a, n, e), t(o, a, "ajaxComplete", [n, o]), i(o);
      }
      function s() {}
      function m(e) {
        return e && (e = e.split(";", 2)[0]), e && (e == k ? "html" : e == v ? "json" : b.test(e) ? "script" : w.test(e) && "xml") || "text";
      }
      function d(e, n) {
        return (e + "&" + n).replace(/[&?]{1,2}/, "?");
      }
      function c(n, t, o, i) {
        var a = !e.isFunction(t);
        return {
          url: n,
          data: a ? t : void 0,
          success: a ? e.isFunction(o) ? o : void 0 : t,
          dataType: a && i || o
        };
      }
      function g(n, t, o, i) {
        var a,
          r = e.isArray(t);
        e.each(t, function (t, u) {
          a = e.type(u), i && (t = o ? i : i + "[" + (r ? "" : t) + "]"), !i && r ? n.add(u.name, u.value) : "array" == a || !o && "object" == a ? g(n, u, o, t) : n.add(t, u);
        });
      }
      var f,
        p,
        h = 0,
        y = window.document,
        _ = /<script\b[^<]*(?:(?!<\/script>)<[^<]*)*<\/script>/gi,
        b = /^(?:text|application)\/javascript/i,
        w = /^(?:text|application)\/xml/i,
        v = "application/json",
        k = "text/html",
        C = /^\s*$/;
      e.active = 0, e.ajaxJSONP = function (n) {
        if (!("type" in n)) return e.ajax(n);
        var t,
          o = "jsonp" + ++h,
          i = y.createElement("script"),
          l = function () {
            clearTimeout(t), e(i).remove(), delete window[o];
          },
          m = function (e) {
            l(), e && "timeout" != e || (window[o] = s), u(null, e || "abort", d, n);
          },
          d = {
            abort: m
          };
        return !1 === a(d, n) ? (m("abort"), !1) : (window[o] = function (e) {
          l(), r(e, d, n);
        }, i.onerror = function () {
          m("error");
        }, i.src = n.url.replace(/=\?/, "=" + o), e("head").append(i), n.timeout > 0 && (t = setTimeout(function () {
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
        var t = e.extend({}, n || {});
        for (f in e.ajaxSettings) void 0 === t[f] && (t[f] = e.ajaxSettings[f]);
        o(t), t.crossDomain || (t.crossDomain = /^([\w-]+:)?\/\/([^\/]+)/.test(t.url) && RegExp.$2 != window.location.host), t.url || (t.url = window.location.toString()), function (n) {
          n.processData && n.data && "string" != e.type(n.data) && (n.data = e.param(n.data, n.traditional)), !n.data || n.type && "GET" != n.type.toUpperCase() || (n.url = d(n.url, n.data));
        }(t), !1 === t.cache && (t.url = d(t.url, "_=" + Date.now()));
        var i = t.dataType,
          l = /=\?/.test(t.url);
        if ("jsonp" == i || l) return l || (t.url = d(t.url, "callback=?")), e.ajaxJSONP(t);
        var c,
          g = t.accepts[i],
          h = {},
          y = /^([\w-]+:)\/\//.test(t.url) ? RegExp.$1 : window.location.protocol,
          _ = t.xhr();
        t.crossDomain || (h["X-Requested-With"] = "XMLHttpRequest"), g && (h.Accept = g, g.indexOf(",") > -1 && (g = g.split(",", 2)[0]), _.overrideMimeType && _.overrideMimeType(g)), (t.contentType || !1 !== t.contentType && t.data && "GET" != t.type.toUpperCase()) && (h["Content-Type"] = t.contentType || "application/x-www-form-urlencoded"), t.headers = e.extend(h, t.headers || {}), _.onreadystatechange = function () {
          if (4 == _.readyState) {
            _.onreadystatechange = s, clearTimeout(c);
            var n,
              o = !1;
            if (_.status >= 200 && _.status < 300 || 304 == _.status || 0 == _.status && "file:" == y) {
              i = i || m(_.getResponseHeader("content-type")), n = _.responseText;
              try {
                "script" == i ? (0, eval)(n) : "xml" == i ? n = _.responseXML : "json" == i && (n = C.test(n) ? null : e.parseJSON(n));
              } catch (a) {
                o = a;
              }
              o ? u(o, "parsererror", _, t) : r(n, _, t);
            } else u(null, _.status ? "error" : "abort", _, t);
          }
        };
        var b = !("async" in t) || t.async;
        for (p in _.open(t.type, t.url, b), t.headers) _.setRequestHeader(p, t.headers[p]);
        return !1 === a(_, t) ? (_.abort(), !1) : (t.timeout > 0 && (c = setTimeout(function () {
          _.onreadystatechange = s, _.abort(), u(null, "timeout", _, t);
        }, t.timeout)), _.send(t.data ? t.data : null), _);
      }, e.get = function () {
        return e.ajax(c.apply(null, arguments));
      }, e.post = function () {
        var n = c.apply(null, arguments);
        return n.type = "POST", e.ajax(n);
      }, e.getJSON = function () {
        var n = c.apply(null, arguments);
        return n.dataType = "json", e.ajax(n);
      }, e.fn.load = function (n, t, o) {
        if (!this.length) return this;
        var i,
          a = this,
          r = n.split(/\s/),
          u = c(n, t, o),
          l = u.success;
        return r.length > 1 && (u.url = r[0], i = r[1]), u.success = function (n) {
          a.html(i ? e("<div>").html(n.replace(_, "")).find(i) : n), l && l.apply(a, arguments);
        }, e.ajax(u), this;
      };
      var S = encodeURIComponent;
      e.param = function (e, n) {
        var t = [];
        return t.add = function (e, n) {
          this.push(S(e) + "=" + S(n));
        }, g(t, e, n), t.join("&").replace(/%20/g, "+");
      };
    }(i), function (e) {
      e.fn.serializeArray = function () {
        var n,
          t = [];
        return e(Array.prototype.slice.call(this.get(0).elements)).each(function () {
          n = e(this);
          var o = n.attr("type");
          "fieldset" != this.nodeName.toLowerCase() && !this.disabled && "submit" != o && "reset" != o && "button" != o && ("radio" != o && "checkbox" != o || this.checked) && t.push({
            name: n.attr("name"),
            value: n.val()
          });
        }), t;
      }, e.fn.serialize = function () {
        var e = [];
        return this.serializeArray().forEach(function (n) {
          e.push(encodeURIComponent(n.name) + "=" + encodeURIComponent(n.value));
        }), e.join("&");
      }, e.fn.submit = function (n) {
        if (n) this.bind("submit", n);else if (this.length) {
          var t = e.Event("submit");
          this.eq(0).trigger(t), t.defaultPrevented || this.get(0).submit();
        }
        return this;
      };
    }(i), function (e, n) {
      function t(e) {
        return i(e.replace(/([a-z])([A-Z])/, "$1-$2"));
      }
      function i(e) {
        return e.toLowerCase();
      }
      function a(e) {
        return r ? r + e : i(e);
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
      }, function (e, t) {
        return h.style[e + "TransitionProperty"] !== n ? (f = "-" + i(e) + "-", r = t, !1) : void 0;
      }), u = f + "transform", _[l = f + "transition-property"] = _[s = f + "transition-duration"] = _[m = f + "transition-timing-function"] = _[d = f + "animation-name"] = _[c = f + "animation-duration"] = _[g = f + "animation-timing-function"] = "", e.fx = {
        off: r === n && h.style.transitionProperty === n,
        speeds: {
          _default: 400,
          fast: 200,
          slow: 600
        },
        cssPrefix: f,
        transitionEnd: a("TransitionEnd"),
        animationEnd: a("AnimationEnd")
      }, e.fn.animate = function (n, t, o, i) {
        return e.isPlainObject(t) && (o = t.easing, i = t.complete, t = t.duration), t && (t = ("number" == typeof t ? t : e.fx.speeds[t] || e.fx.speeds._default) / 1000), this.anim(n, t, o, i);
      }, e.fn.anim = function (i, a, r, f) {
        var p,
          h,
          b,
          w = {},
          v = "",
          k = this,
          C = e.fx.transitionEnd;
        if (a === n && (a = 0.4), e.fx.off && (a = 0), "string" == typeof i) w[d] = i, w[c] = a + "s", w[g] = r || "linear", C = e.fx.animationEnd;else {
          for (p in h = [], i) y.test(p) ? v += p + "(" + i[p] + ") " : (w[p] = i[p], h.push(t(p)));
          v && (w[u] = v, h.push(u)), a > 0 && "object" == o(i) && (w[l] = h.join(", "), w[s] = a + "s", w[m] = r || "linear");
        }
        return b = function (n) {
          if ("undefined" != typeof n) {
            if (n.target !== n.currentTarget) return;
            e(n.target).unbind(C, b);
          }
          e(this).css(_), f && f.call(this);
        }, a > 0 && this.bind(C, b), this.size() && this.get(0).clientLeft, this.css(w), 0 >= a && setTimeout(function () {
          k.each(function () {
            b.call(this);
          });
        }, 0), this;
      }, h = null;
    }(i);
  },
  d005: function (e, n, t) {
    "use strict";

    var o = t("f5bd").default;
    t("bf0f"), t("2797"), t("dc8a"), t("8f71");
    var i = o(t("9b8e")),
      a = o(t("0043"));
    Object.keys(a.default).forEach(function (e) {
      i.default.filter(e, a.default[e]);
    });
  },
  d0cc: function (e, n, t) {
    "use strict";

    t.r(n);
    var o = t("81c3"),
      i = t.n(o);
    for (var a in o) ["default"].indexOf(a) < 0 && function (e) {
      t.d(n, e, function () {
        return o[e];
      });
    }(a);
    n["default"] = i.a;
  },
  e299: function (e, n, t) {
    "use strict";

    (function (e) {
      var o = t("f5bd").default;
      Object.defineProperty(n, "__esModule", {
        value: !0
      }), n.default = void 0, t("01a2"), t("e39c"), t("bf0f"), t("844d"), t("18f7"), t("de6c"), t("6a54"), t("7a76"), t("c9b5"), t("f7a5"), t("08eb"), t("5c47"), t("0506"), t("23f4"), t("7d2f"), t("9c4e"), t("ab80"), t("2c10"), t("af8f"), t("5ef2"), t("22b6"), t("d4b5"), t("aa9c"), t("cbcd");
      var i = o(t("9036"));
      function a(e) {
        return "function" === typeof Symbol && "symbol" === typeof Symbol.iterator ? function (e) {
          return typeof e;
        } : function (e) {
          return e && "function" === typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e;
        }, a(e);
      }
      function r(e, n, t) {
        return n in e ? Object.defineProperty(e, n, {
          value: t,
          enumerable: !0,
          configurable: !0,
          writable: !0
        }) : e[n] = t, e;
      }
      function u(e) {
        return function (e) {
          if (Array.isArray(e)) return l(e);
        }(e) || function (e) {
          if ("undefined" !== typeof Symbol && Symbol.iterator in Object(e)) return Array.from(e);
        }(e) || function (e, n) {
          if (!e) return;
          if ("string" === typeof e) return l(e, n);
          var t = Object.prototype.toString.call(e).slice(8, -1);
          "Object" === t && e.constructor && (t = e.constructor.name);
          if ("Map" === t || "Set" === t) return Array.from(e);
          if ("Arguments" === t || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t)) return l(e, n);
        }(e) || function () {
          throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
        }();
      }
      function l(e, n) {
        (null == n || n > e.length) && (n = e.length);
        for (var t = 0, o = new Array(n); t < n; t++) o[t] = e[t];
        return o;
      }
      function s(e) {
        var n = new RegExp("(^|&)" + e + "=([^&]*)(&|$)", "i"),
          t = window.location.search.substr(1).match(n);
        return null != t && 0 !== t[2] && unescape(t[2]);
      }
      function m() {
        var e = navigator.userAgent,
          n = e.indexOf("dknbandroid"),
          t = e.indexOf("dknbios");
        return t >= 0 ? 1 : n >= 0 ? 2 : 0;
      }
      function d(e, n) {
        n = n || null;
        var t = setTimeout(function () {
          if (function () {
            var e = navigator.userAgent,
              n = e.indexOf("njios");
            return n >= 0;
          }()) window.webkit.messageHandlers[e].postMessage(n);else if (n) {
            var o,
              i = Object.values(n);
            (o = native)[e].apply(o, u(i));
          } else native[e]();
          clearTimeout(t);
        }, 0);
      }
      var c = {
        getUrlParam: s,
        thirdLogin: function (e, n, t, o) {
          var a = Math.round(Date.now() / 1000),
            r = 9999 * Math.random();
          return new Promise(function (u, l) {
            $.ajax({
              type: "POST",
              url: "https://third.nj.nbtv.cn/v2/open/user/get",
              data: {
                access_token: t,
                host: o,
                timestamp: a
              },
              headers: {
                appkey: e,
                nonce: r,
                curtime: a,
                checksum: i.default.SHA1(n + r + a)
              },
              dataType: "json",
              success: function (e) {
                u(e);
              }
            });
          });
        },
        dkWeboauth: function (n) {
          var t = m();
          1 == t ? d("dkWeboauth", {
            url: n
          }) : 2 == t ? android.dkWeboauth(n) : e.log("dkWeboauth");
        },
        checkUserAgent: m,
        dkLogin: function (e, n) {
          e = void 0 == arguments[0] ? "" : e, n = void 0 == arguments[1] ? "1" : n;
          var t = m();
          1 == t ? d("dkLogin", r({
            url: e,
            type: n
          }, "type", n)) : 2 == t && android.dkLogin(e, n);
        },
        dkShare: function (e, n) {
          n = void 0 == arguments[1] ? 0 : n;
          var t = m();
          1 == t ? d("dkShare", r({
            info: e,
            type: n
          }, "type", n)) : 2 == t && android.dkShare(JSON.stringify(e), n);
        },
        dkAccessToken: function (e) {
          var n = m();
          1 == n ? d("dkAccessToken", {
            callback: e
          }) : 2 == n && android.dkAccessToken(e);
        }
      };
      n.default = c;
    }).call(this, t("ba7c")["default"]);
  },
  e505: function (e, n, t) {
    "use strict";

    t.d(n, "b", function () {
      return i;
    }), t.d(n, "c", function () {
      return a;
    }), t.d(n, "a", function () {
      return o;
    });
    var o = {
        uIcon: t("d434").default
      },
      i = function () {
        var e = this,
          n = e.$createElement,
          t = e._self._c || n;
        return t("v-uni-view", {}, [t("v-uni-view", {
          staticClass: "u-navbar",
          class: {
            "u-navbar-fixed": e.isFixed,
            "u-border-bottom": e.borderBottom
          },
          style: [e.navbarStyle]
        }, [t("v-uni-view", {
          staticClass: "u-status-bar",
          style: {
            height: e.statusHeight + "px"
          }
        }), t("v-uni-view", {
          staticClass: "u-navbar-inner",
          style: [e.navbarInnerStyle]
        }, [e.isBack ? t("v-uni-view", {
          staticClass: "u-back-wrap",
          on: {
            click: function (n) {
              arguments[0] = n = e.$handleEvent(n), e.goBack.apply(void 0, arguments);
            }
          }
        }, [t("v-uni-view", {
          staticClass: "u-icon-wrap"
        }, [t("u-icon", {
          attrs: {
            name: e.backIconName,
            color: e.backIconColor,
            size: e.backIconSize
          }
        })], 1), e.backText ? t("v-uni-view", {
          staticClass: "u-icon-wrap u-back-text u-line-1",
          style: [e.backTextStyle]
        }, [e._v(e._s(e.backText))]) : e._e()], 1) : e._e(), e.title ? t("v-uni-view", {
          staticClass: "u-navbar-content-title",
          style: [e.titleStyle]
        }, [t("v-uni-view", {
          staticClass: "u-title u-line-1",
          style: {
            color: e.titleColor,
            fontSize: e.titleSize + "rpx",
            fontWeight: e.titleBold ? "bold" : "normal"
          }
        }, [e._v(e._s(e.title))])], 1) : e._e(), t("v-uni-view", {
          staticClass: "u-slot-content"
        }, [e._t("default")], 2), t("v-uni-view", {
          staticClass: "u-slot-right"
        }, [e._t("right")], 2)], 1)], 1), e.isFixed && !e.immersive ? t("v-uni-view", {
          staticClass: "u-navbar-placeholder",
          style: {
            width: "100%",
            height: Number(e.navbarHeight) + e.statusHeight + "px"
          }
        }) : e._e()], 1);
      },
      a = [];
  },
  e61b: function (e, n, t) {
    "use strict";

    (function (e) {
      t("6a54");
      var o = t("f5bd").default;
      Object.defineProperty(n, "__esModule", {
        value: !0
      }), n.default = void 0;
      var i = o(t("9b1b")),
        a = o(t("9004"));
      t("5c47"), t("0506"), t("bf0f");
      var r = {
          tenantId: "T_JH",
          siteId: "S_JH"
        },
        u = !1,
        l = null;
      (function () {
        var n = navigator.userAgent.toLowerCase(),
          o = /trs_app/gi.test(n);
        o && Promise.resolve().then(function () {
          return (0, a.default)(t("2efd"));
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
                  var t = {
                    user_id: n.account_id || "",
                    user_name: n.username || n.nick_name || "",
                    portrait_url: n.head_img || "",
                    phone: n.mobile || "",
                    wx_openid: "",
                    wx_unionid: "",
                    app_user_token: n.accessToken || n.token || ""
                  };
                  e && e(t);
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
              completed: function (t) {
                n.latitude = t.lat || 0, n.longitude = t.lon || 0, n = (0, i.default)((0, i.default)({}, n), t), e && e(n);
              },
              cpIncompatible: function (t) {
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
    }).call(this, t("ba7c")["default"]);
  },
  e65e: function (e, n, t) {
    "use strict";

    t.r(n);
    var o = t("c130"),
      i = t.n(o);
    for (var a in o) ["default"].indexOf(a) < 0 && function (e) {
      t.d(n, e, function () {
        return o[e];
      });
    }(a);
    n["default"] = i.a;
  },
  ec45: function (e, n, t) {
    e.exports = t.p + "static/iconfont/iconfont.ttf";
  },
  f055: function (e, n, t) {
    "use strict";

    function o(e, n, t) {
      if ("kxzAppBridge" in window) {
        if (kxzAppBridge.checkJsApi(e)) {
          var o;
          if (n) {
            var i = "call_back_" + function () {
              var e = new Date().getTime(),
                n = "xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx".replace(/[xy]/g, function (n) {
                  var t = (e + 16 * Math.random()) % 16 | 0;
                  return e = Math.floor(e / 16), ("x" == n ? t : 3 & t | 8).toString(16);
                });
              return n;
            }();
            window[i] = n.success, n["call_back_name"] = i, o = kxzAppBridge[e](JSON.stringify(n));
          } else o = kxzAppBridge[e]();
          t(o);
        } else alert("\u5BA2\u6237\u7AEF\u7248\u672C\u8FC7\u4F4E\uFF0C\u8BF7\u5347\u7EA7\u5230\u6700\u65B0\u7248\u672C\uFF01"), t(!1);
      } else (function (e) {
        if (window.WebViewJavascriptBridge) return e(WebViewJavascriptBridge);
        if (window.WVJBCallbacks) return window.WVJBCallbacks.push(e);
        window.WVJBCallbacks = [e];
        var n = document.createElement("iframe");
        n.style.display = "none", n.src = "https://__bridge_loaded__", document.documentElement.appendChild(n), setTimeout(function () {
          document.documentElement.removeChild(n);
        }, 0);
      })(function (o) {
        o.callHandler("checkJsApi", {
          param: e
        }, function (i) {
          0 == i ? (alert("\u5BA2\u6237\u7AEF\u7248\u672C\u8FC7\u4F4E\uFF0C\u8BF7\u5347\u7EA7\u5230\u6700\u65B0\u7248\u672C\uFF01"), t(!1)) : o.callHandler("jsCallOC", {
            param: n,
            fun: e
          }, function (e) {
            t(e);
          });
        });
      });
    }
    t("6a54"), Object.defineProperty(n, "__esModule", {
      value: !0
    }), n.default = void 0, t("aa9c"), t("5c47"), t("a1c1"), t("c9b5"), t("bf0f"), t("ab80"), t("d4b5");
    var i = {
      getUserInfo: function (e) {
        o("getUserInfo", !1, function (n) {
          !1 !== n && e.success(JSON.parse(n));
        });
      },
      getLocation: function (e) {
        o("getLocation", e, function (n) {
          !1 !== n && ("kxzAppBridge" in window ? e : e.success(JSON.parse(n)));
        });
      },
      chooseImage: function (e) {
        o("chooseImage", e, function (n) {
          !1 !== n && ("kxzAppBridge" in window ? e : e.success(JSON.parse(n)));
        });
      },
      startRecord: function () {
        o("startRecord", !1, function (e) {});
      },
      stopRecord: function (e) {
        o("stopRecord", !1, function (n) {
          !1 !== n && ("kxzAppBridge" in window ? e : e.success(JSON.parse(n)));
        });
      },
      onVoiceRecordEnd: function (e) {
        e;
      },
      closeWindow: function () {
        o("closeWindow", !1, function (e) {});
      },
      setShareData: function (e) {
        o("setShareData", e, function (e) {});
      },
      showShareDialog: function (e) {
        o("showShareDialog", e, function (e) {});
      },
      goTo: function (e) {
        o("goTo", e, function (e) {});
      },
      scanQRCode: function (e) {
        o("scanQRCode", e, function (n) {
          !1 !== n && ("kxzAppBridge" in window ? e : e.success(JSON.parse(n)));
        });
      },
      goLogin: function (e) {
        o("goLogin", e, function (n) {
          !1 !== n && ("kxzAppBridge" in window ? e : e.success(JSON.parse(n)));
        });
      },
      playVoice: function (e) {
        o("playVoice", e, function (n) {
          !1 !== n && ("kxzAppBridge" in window ? e : e.success(JSON.parse(n)));
        });
      },
      setShareBtn: function (e) {
        o("setShareBtn", e, function (n) {
          !1 !== n && e.success(JSON.parse(n));
        });
      },
      pauseVoice: function (e) {
        o("pauseVoice", e, function (e) {});
      },
      resumeVoice: function (e) {
        o("resumeVoice", e, function (e) {});
      },
      muteVoice: function (e) {
        o("muteVoice", e, function (e) {});
      },
      unmuteVoice: function (e) {
        o("unmuteVoice", e, function (e) {});
      }
    };
    var a = i;
    n.default = a;
  },
  f26e: function (e, n, t) {
    var o = t("4550").default;
    t("aa9c"), t("5c47"), t("0506"), function (e) {
      var n,
        t = !1;
      function i() {}
      function a() {
        var e = navigator.userAgent.toLowerCase();
        return !!/m2osmartcity/gi.test(e);
      }
      function r(e, n, o) {
        a() && function (e) {
          if (window.WebViewJavascriptBridge) return e(WebViewJavascriptBridge);
          if (document.addEventListener("WebViewJavascriptBridgeReady", function () {
            return e(WebViewJavascriptBridge);
          }, !1), window.WVJBCallbacks) return window.WVJBCallbacks.push(e);
          window.WVJBCallbacks = [e];
          var n = document.createElement("iframe");
          n.style.display = "none", n.src = "https://__bridge_loaded__", document.documentElement.appendChild(n), setTimeout(function () {
            document.documentElement.removeChild(n);
          }, 0);
        }(function (i) {
          "undefined" != typeof i.init && i.init instanceof Function && (t || (i.init(function (e, n) {}), t = !0)), "getLocation" == e && i.registerHandler("getLocation", function (e, n) {
            e = "string" === typeof e ? JSON.parse(e) : e, o && o(e), n("success");
          }), i.callHandler(e, n, function (e) {
            e = "string" === typeof e ? JSON.parse(e) : e, o && o(e);
          });
        });
      }
      i.prototype = (n = {
        constructor: this,
        isSmartCityApp: function () {
          return a();
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
      }, o(n, "getPraiseNum", function (e) {
        r("getClickNum", null, function (n) {
          e && e(n);
        });
      }), o(n, "goToReward", function () {
        r("goToReward", null, null);
      }), o(n, "getViewPagerInfo", function (e) {
        r("getViewPagerInfo", e, null);
      }), o(n, "startRecord", function (e) {
        r("startRecord", null, function (n) {
          e && e(n);
        });
      }), o(n, "stopRecord", function (e) {
        r("stopRecord", null, function (n) {
          e && e(n);
        });
      }), o(n, "playVoice", function (e) {
        r("playVoice", e, null);
      }), o(n, "pauseVoice", function (e) {
        r("pauseVoice", e, null);
      }), o(n, "uploadFile", function (e, n) {
        r("uploadFile", e, function (e) {
          n && n(e);
        });
      }), o(n, "appTLUnifyAllinpay", function (e) {
        r("appTLUnifyAllinpay", e, null);
      }), o(n, "stopUnload", function (e, n) {
        r("stopUnload", e, function (e) {
          n && n(e);
        });
      }), o(n, "vibrateFeedback", function (e, n) {
        r("vibrateFeedback", e, function (e) {
          n && n(e);
        });
      }), o(n, "applicationState", function (e) {
        r("applicationState", null, function (n) {
          e && e(n);
        });
      }), o(n, "videoRecording", function (e, n) {
        r("videoRecording", e, function (e) {
          n && n(e);
        });
      }), o(n, "closeWebViewBounces", function (e) {
        r("closeWebViewBounces", e, null);
      }), o(n, "createShortCut", function (e) {
        r("createShortCut", e, null);
      }), o(n, "getServicePage", function (e) {
        r("getServicePage", e, null);
      }), o(n, "creditRulesUpdate", function (e) {
        r("creditRulesUpdate", e, null);
      }), o(n, "canScreenshot", function (e) {
        r("canScreenshot", e, null);
      }), o(n, "appCCBPay", function (e) {
        r("appCCBPay", e, null);
      }), n), window.SmartCity = new i();
    }();
  },
  f542: function (e, n, t) {
    "use strict";

    t("6a54"), Object.defineProperty(n, "__esModule", {
      value: !0
    }), n.default = void 0, t("5c47"), t("0506"), t("b2ee");
    var o = !1,
      i = navigator.userAgent.toLowerCase();
    /mediacloudclientv3/gi.test(i) && window.mcSdk && (window.mcSdk.config({}), window.mcSdk.ready(function () {
      o = !0;
    }));
    var a = {
        isInApp: function () {
          var e = navigator.userAgent.toLowerCase();
          return !!/mediacloudclientv3/gi.test(e);
        },
        getSystemInfo: function (e) {},
        getUserInfo: function (e) {
          var n = this;
          o ? window.mcSdk.getUserInfo({
            callbacks: {
              success: function (n) {
                if (n && n.user_id && "anonymous" != n.user_id) {
                  var t = {
                    user_id: n.user_id,
                    user_name: n.alias || "",
                    portrait_url: n.avatar || "",
                    phone: n.tel || "",
                    wx_openid: "",
                    wx_unionid: "",
                    app_user_token: n.token || ""
                  };
                  e && e(t);
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
              t = "article",
              o = 0;
            n[0] && (o = n[0]), n[1] && (t = n[1]), window.mcSdk.pushContent({
              params: {
                series: t,
                id: o,
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
      r = a;
    n.default = r;
  },
  f86c: function (e, n, t) {
    (function (o) {
      var i,
        a,
        r,
        u = t("bdbb").default;
      t("4085"), t("5c47"), t("a1c1"), t("5ef2"), t("2c10"), t("bf0f"), t("d4b5"), t("6a54"), function (t, o) {
        "object" === u(n) && "undefined" !== typeof e ? o(n) : (a = [n], i = o, r = "function" === typeof i ? i.apply(n, a) : i, void 0 === r || (e.exports = r));
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
            var t = e.match(/android:(\S*);version/);
            n.deviceVersion = t ? t[1] : "";
          } else if (-1 !== e.indexOf("ios")) {
            n.deviceType = "ios";
            t = e.match(/ios:(\S*);version/);
            n.deviceVersion = t ? t[1] : "";
          }
          var o = e.match(/version:(\S*);clientid/);
          n.appVersion = o ? o[1] : "";
          var i = e.match(/clientid:(\S*)/);
          return n.clientId = i ? i[1] : "", n;
        }
        function t(e, t) {
          var i = function () {
            for (var e = [], n = 0; n < 36; n++) e[n] = "0123456789abcdef".substr(Math.floor(16 * Math.random()), 1);
            return e[14] = "4", e[19] = "0123456789abcdef".substr(3 & e[19] | 8, 1), e[8] = e[13] = e[18] = e[23] = "-", e.join("").replace(/-/g, "");
          }();
          return new Promise(function (a, r) {
            window[e + "_" + i] = function (n) {
              try {
                n = JSON.parse(n);
              } catch (t) {
                o.error(t);
              }
              0 === n.code ? a(n) : r(n), delete window[e + "_" + i];
            };
            if ("ios" === n().deviceType) (function () {
              var n = window.webkit.messageHandlers.cloud_jiashan;
              n ? n.postMessage(JSON.stringify({
                ability: e,
                callId: i,
                args: t || {}
              })) : o.warn("[JSSDK:abilityInvoke->" + e + "] invoke native failed");
            })();else if ("android" === n().deviceType) (function () {
              var n = window.cloud_jiashan;
              n ? n.abilityInvoke(e, i, JSON.stringify(t || {})) : o.warn("[JSSDK:abilityInvoke->" + e + "] invoke native failed");
            })();else {
              o.warn("fail fallback >> ", e, i);
              window[e + "_" + i](JSON.stringify({
                code: 412,
                message: "fail",
                data: null
              }));
            }
          });
        }
        var i = {
          appAccessToken: ""
        };
        e.amapGps = function () {
          return t("amap_gps", {
            appAccessToken: i.appAccessToken
          });
        }, e.getAppAccessToken = function () {
          return i.appAccessToken;
        }, e.getOpenId = function () {
          return t("get_open_id", {
            appAccessToken: i.appAccessToken
          });
        }, e.getSafeAreaBottom = function () {
          return t("nav_bar_height", {
            appAccessToken: i.appAccessToken
          });
        }, e.getSafeAreaTop = function () {
          return t("status_bar_height", {
            appAccessToken: i.appAccessToken
          });
        }, e.getUserIdentityInfo = function () {
          return t("get_user_identity_info", {
            appAccessToken: i.appAccessToken
          });
        }, e.getUserInfo = function () {
          return t("get_user_info", {
            appAccessToken: i.appAccessToken
          });
        }, e.goShanHeadLine = function () {
          return t("shan_headline", {
            appAccessToken: i.appAccessToken
          });
        }, e.openAlipay = function (e) {
          return t("open_alipay", {
            appAccessToken: i.appAccessToken,
            alipay_parameter: e
          });
        }, e.openArticle = function (e) {
          return t("open_article", {
            appAccessToken: i.appAccessToken,
            id: e
          });
        }, e.openZjnxcode = function () {
          return t("open_zjnxcode", {
            appAccessToken: i.appAccessToken
          });
        }, e.openZjnxpay = function () {
          return t("open_zjnxpay", {
            appAccessToken: i.appAccessToken
          });
        }, e.saveImage = function (e) {
          return t("save_image", {
            appAccessToken: i.appAccessToken,
            imgurl: e
          });
        }, e.scanQrCode = function () {
          return t("scan_qr_code", {
            appAccessToken: i.appAccessToken
          });
        }, e.setAppAccessToken = function (e) {
          i.appAccessToken = e;
        }, e.setNavigationBarColor = function (e) {
          return t("set_navigation_bar_background_color", {
            appAccessToken: i.appAccessToken,
            navigationBarBackgroundColor: e
          });
        }, e.setStatusBarColor = function (e) {
          return t("set_status_bar_background_color", {
            appAccessToken: i.appAccessToken,
            statusBarBackgroundColor: e
          });
        }, e.share = function (e, n, o, a) {
          return t("share_tinyapp", {
            appAccessToken: i.appAccessToken,
            title: e,
            summary: n,
            link: o,
            picture: a
          });
        }, e.shareClose = function () {
          return t("share_tinyapp_close", {
            appAccessToken: i.appAccessToken
          });
        }, e.statusBarColorToDark = function (e) {
          return t("status_bar_text_color", {
            appAccessToken: i.appAccessToken,
            isDark: e
          });
        }, e.vibrate = function () {
          return t("vibrate", {
            appAccessToken: i.appAccessToken
          });
        }, Object.defineProperty(e, "__esModule", {
          value: !0
        });
      });
    }).call(this, t("ba7c")["default"]);
  },
  fcc0: function (e, n, t) {
    "use strict";

    (function (e) {
      t("6a54"), Object.defineProperty(n, "__esModule", {
        value: !0
      }), n.default = void 0, t("5ef2"), t("5c47"), t("2c10"), t("aa9c"), t("d4b5");
      var o = {
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
      navigator.userAgent.match(/\(i[^;]+;( U;)? CPU.+Mac OS X/) && o.browser.isTMApp && function (e) {
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
      var i = {
          ready: function (e) {
            var n = !1,
              t = null,
              o = 0;
            setTimeout(function () {
              (function a() {
                i.getHeadInfo(function () {
                  if (n) return !1;
                  clearTimeout(t), n = !0, e();
                }), t = setTimeout(function () {
                  if (o > 2) return !1;
                  a(), o++;
                }, 2000);
              })();
            }, 500);
          },
          exitApp: function () {
            if (e.log("call exitApp"), o.browser.android) {
              window.android && window.android.postMessage(JSON.stringify({
                fcName: "exitApp",
                data: {}
              }));
            } else window.ios && window.ios.callHandler("exitApp", {});
          },
          setNoticeFunName: function (n, t) {
            if (e.log("call setNoticeFunName"), o.browser.android) {
              window.setNoticeFunNameCallback = t;
              var i = {
                fcName: "setNoticeFunName",
                data: n
              };
              window.android && window.android.postMessage(JSON.stringify(i));
            } else window.ios && window.ios.callHandler("setNoticeFunName", n, t);
          },
          goToShare: function (n, t) {
            if (e.log("call goToShare"), o.browser.android) {
              window.goToShareCallback = t;
              var i = {
                fcName: "goToShare",
                data: n
              };
              window.android && window.android.postMessage(JSON.stringify(i));
            } else window.ios && window.ios.callHandler("goToShare", n, t);
          },
          homeBackClicked: function () {
            if (e.log("call homeBackClicked"), o.browser.android) {
              window.android && window.android.postMessage(JSON.stringify({
                fcName: "homeBackClicked",
                data: {}
              }));
            } else window.ios && window.ios.callHandler("homeBackClicked", {});
          },
          getTitleBarParam: function (n) {
            if (e.log("call getTitleBarParam"), o.browser.android) {
              window.getTitleBarParamCallback = n;
              window.android && window.android.postMessage(JSON.stringify({
                fcName: "getTitleBarParam",
                data: {}
              }));
            } else window.ios && window.ios.callHandler("getTitleBarParam", {}, n);
          },
          getHomePageLevel: function (n) {
            if (e.log("call getHomePageLevel"), o.browser.android) {
              window.getHomePageLevelCallback = n;
              window.android && window.android.postMessage(JSON.stringify({
                fcName: "getHomePageLevel",
                data: {}
              }));
            } else window.ios && window.ios.callHandler("getHomePageLevel", {}, n);
          },
          changePageLevel: function (n) {
            if (e.log("call changePageLevel:" + n), o.browser.android) {
              var t = {
                fcName: "changePageLevel",
                data: {
                  level: n
                }
              };
              window.android && window.android.postMessage(JSON.stringify(t));
            } else window.ios && window.ios.callHandler("changePageLevel", {
              level: n
            }, null);
          },
          getTMToken: function (n) {
            if (e.log("call getTMToken"), o.browser.android) {
              window.getTMTokenCallback = n;
              window.android && window.android.postMessage(JSON.stringify({
                fcName: "getTMToken",
                data: {}
              }));
            } else window.ios && window.ios.callHandler("getTMToken", {}, n);
          },
          goToLogin: function (n) {
            if (e.log("call goToLogin"), o.browser.android) {
              window.goToLoginCallback = n;
              window.android && window.android.postMessage(JSON.stringify({
                fcName: "goToLogin",
                data: {}
              }));
            } else window.ios && window.ios.callHandler("goToLogin", {}, n);
          },
          getTMUserInfo: function (n) {
            if (e.log("call getTMUserInfo"), o.browser.android) {
              window.getTMUserInfoCallback = n;
              window.android && window.android.postMessage(JSON.stringify({
                fcName: "getTMUserInfo",
                data: {}
              }));
            } else window.ios && window.ios.callHandler("getTMUserInfo", {}, n);
          },
          getTMLocationInfo: function (n) {
            if (e.log("call getTMLocationInfo"), o.browser.android) {
              window.getTMLocationInfoCallback = n;
              window.android && window.android.postMessage(JSON.stringify({
                fcName: "getTMLocationInfo",
                data: {}
              }));
            } else window.ios && window.ios.callHandler("getTMLocationInfo", {}, n);
          },
          checkTMLogin: function (n) {
            if (e.log("call checkTMLogin"), o.browser.android) {
              window.checkTMLoginCallback = n;
              window.android && window.android.postMessage(JSON.stringify({
                fcName: "checkTMLogin",
                data: {}
              }));
            } else window.ios && window.ios.callHandler("checkTMLogin", {}, n);
          },
          goToQRcode: function (n) {
            if (e.log("call goToQRcode"), o.browser.android) {
              window.goToQRcodeCallback = n;
              window.android && window.android.postMessage(JSON.stringify({
                fcName: "goToQRcode",
                data: {}
              }));
            } else window.ios && window.ios.callHandler("goToQRcode", {}, n);
          },
          goToNativeComponents: function (n, t) {
            if (e.log("call goToNativeComponents"), o.browser.android) {
              window.goToNativeComponentsCallback = t;
              var i = {
                fcName: "goToNativeComponents",
                data: n
              };
              window.android && window.android.postMessage(JSON.stringify(i));
            } else window.ios && window.ios.callHandler("goToNativeComponents", n, t);
          },
          getHeadInfo: function (e) {
            if (o.browser.android) {
              window.getHeadInfoCallback = e;
              window.android && window.android.postMessage(JSON.stringify({
                fcName: "getHeadInfo",
                data: {}
              }));
            } else window.ios && window.ios.callHandler("getHeadInfo", e);
          },
          gotoWXMiniProgram: function (n, t) {
            if (e.log("call gotoWXMiniProgram"), o.browser.android) {
              window.gotoWXMiniProgramCallback = t;
              var i = {
                fcName: "gotoWXMiniProgram",
                data: n
              };
              window.android && window.android.postMessage(JSON.stringify(i));
            } else window.ios && window.ios.callHandler("gotoWXMiniProgram", JSON.stringify(n), t);
          },
          startRecordAudio: function (n, t) {
            if (e.log("call startRecordAudio"), o.browser.android) {
              window.startRecordAudioCallback = t;
              var i = {
                fcName: "startRecordAudio",
                data: n
              };
              window.android && window.android.postMessage(JSON.stringify(i));
            } else window.ios && window.ios.callHandler("startRecordAudio", n, t);
          },
          stopRecordAudio: function (n) {
            if (e.log("call stopRecordAudio"), o.browser.android) {
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
          TMEncryptionData: function (n, t) {
            if (e.log("call TMEncryptionData"), o.browser.android) {
              window.encryptionDataCallback = t;
              var i = {
                fcName: "encryptionData",
                data: n
              };
              window.android && window.android.postMessage(JSON.stringify(i));
            } else window.ios && window.ios.callHandler("encryptionData", n, t);
          },
          TMDecryptData: function (n, t) {
            if (e.log("call TMDecryptData"), o.browser.android) {
              window.decryptDataCallback = t;
              var i = {
                fcName: "decryptData",
                data: n
              };
              window.android && window.android.postMessage(JSON.stringify(i));
            } else window.ios && window.ios.callHandler("decryptData", n, t);
          },
          TMOpenBrowser: function (n, t) {
            if (e.log("call TMOpenBrowser"), o.browser.android) {
              window.openBrowserCallback = t;
              var i = {
                fcName: "openBrowser",
                data: n
              };
              window.android && window.android.postMessage(JSON.stringify(i));
            } else window.ios && window.ios.callHandler("openBrowser", n, t);
          },
          tmScreenSecure: function (n, t) {
            if (e.log("call tmScreenSecure"), o.browser.android) {
              window.tmScreenSecureCallback = t;
              var i = {
                fcName: "tmScreenSecure",
                data: n
              };
              window.android && window.android.postMessage(JSON.stringify(i));
            } else window.ios && window.ios.callHandler("tmScreenSecure", n, t);
          },
          tmJumpNavigationAPP: function (n, t) {
            if (e.log("call tmJumpNavigationAPP"), o.browser.android) {
              window.tmJumpNavigationAPPCallback = t;
              var i = {
                fcName: "tmJumpNavigationAPP",
                data: n
              };
              window.android && window.android.postMessage(JSON.stringify(i));
            } else window.ios && window.ios.callHandler("tmJumpNavigationAPP", n, t);
          },
          tmBecomeActiveShowPage: function (n, t) {
            if (e.log("call tmBecomeActiveShowPage"), o.browser.android) {
              window.tmBecomeActiveShowPageCallback = t;
              var i = {
                fcName: "tmBecomeActiveShowPage",
                data: n
              };
              window.android && window.android.postMessage(JSON.stringify(i));
            } else window.ios && window.ios.callHandler("tmBecomeActiveShowPage", n, t);
          },
          createShareFunctionButton: function (n, t) {
            if (e.log("call createShareFunctionButton"), o.browser.android) {
              window.createShareFunctionButtonCallback = t;
              var i = {
                fcName: "createShareFunctionButton",
                data: n
              };
              window.android && window.android.postMessage(JSON.stringify(i));
            } else window.ios && window.ios.callHandler("createShareFunctionButton", n, t);
          },
          clearTMUserInfo: function (n) {
            if (e.log("call clearTMUserInfo"), o.browser.android) {
              window.clearTMUserInfoCallback = n;
              window.android && window.android.postMessage(JSON.stringify({
                fcName: "clearTMUserInfo",
                data: {}
              }));
            } else window.ios && window.ios.callHandler("clearTMUserInfo", {}, n);
          },
          tmInterceptScroll: function (n, t) {
            if (e.log("call tmInterceptScroll"), o.browser.android) {
              window.tmInterceptScrollCallback = t;
              var i = {
                fcName: "tmInterceptScroll",
                data: n
              };
              window.android && window.android.postMessage(JSON.stringify(i));
            } else window.ios && window.ios.callHandler("tmInterceptScroll", n, t);
          },
          tmSavePictureToAlbum: function (n, t) {
            if (e.log("call tmSavePictureToAlbum"), o.browser.android) {
              window.tmSavePictureToAlbumCallback = t;
              var i = {
                fcName: "tmSavePictureToAlbum",
                data: n
              };
              window.android && window.android.postMessage(JSON.stringify(i));
            } else window.ios && window.ios.callHandler("tmSavePictureToAlbum", n, t);
          }
        },
        a = i;
      n.default = a;
    }).call(this, t("ba7c")["default"]);
  }
});