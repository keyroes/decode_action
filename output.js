//Sun Dec 22 2024 02:42:15 GMT+0000 (Coordinated Universal Time)
//Base:https://github.com/echo094/decode-js
//Modify:https://github.com/smallfawn/decode_action
import { _ as K } from "./b34caaffbce1c8a2.js";
import { _ as G } from "./31ba4e7307c43b24.js";
import { d as Q, c6 as W, u as X, s as Y, j as r, ai as Z, k as x, be as ee, l as se, ca as j, aT as te, cb as z, b5 as ae, cc as oe, cd as ne, ce as le, _ as ie, c as v, b as t, t as c, f as S, h as I, w as D, F as P, a as A, e as E, n as O, o as u, i as ue, I as re, v as ce, x as de } from "./01bed8508463a043.js";
import { S as pe } from "./2c2cc12bebcc4890.js";
import "./e2f26fd05c190691.js";
import "./2715bb3facb689de.js";
import "./c62e412a8c239fbd.js";
const me = {
    1: {
      key: "read",
      label: "\u9605\u8BFB"
    },
    2: {
      key: "praise",
      label: "\u70B9\u8D5E"
    },
    3: {
      key: "comment",
      label: "\u8BC4\u8BBA"
    },
    4: {
      key: "share",
      label: "\u5206\u4EAB"
    }
  },
  ve = "https://op-api.cloud.jinhua.com.cn",
  ye = Q({
    name: "\u4EFB\u52A1\u8BE6\u60C5",
    setup() {
      let e;
      const n = W(),
        o = X(),
        {
          studyStyle: C,
          lotteryConfig: L,
          rule: d
        } = Y(n),
        k = ae(),
        h = r(),
        B = k.query,
        p = r(!1),
        a = r(!1),
        y = r(),
        f = r(),
        _ = r(null),
        w = Z(),
        m = x({
          name: "",
          nums: 0,
          isNum: 0,
          noIsNum: 0,
          count: "",
          headerImage: "",
          bgImg: "",
          bgColor: C.value.primaryColor,
          isStudyPeople: C.value.finishedNum === 1
        }),
        g = r([]),
        F = r([]);
      ee(s => {
        const l = "/m-".concat(o.module, "-").concat(o.provider, "/home");
        return s.path == l ? !0 : "".concat(l, "?id=").concat(o.activityId);
      });
      const H = () => {
          a.value = !1, M(_.value);
        },
        M = s => {
          oe({
            activityId: o.activityId
          }).then(() => {
            switch (e && clearTimeout(e), p.value = !1, f.value = s, s.type) {
              case 1:
                w.href({
                  type: "news",
                  id: s.content_id
                }), e = setTimeout(() => {
                  p.value = !0, (o.provider == "jd" || o.provider == "wucheng") && o.systemInfo.system == "android" && T(s);
                }, d.value.taskDuration * 1000);
                break;
              case 5:
                o.env == "app" ? w.href({
                  type: "outterLink",
                  url: s.link
                }) : location.href = s.link, e = setTimeout(() => {
                  p.value = !0;
                }, d.value.taskDuration * 1000);
                break;
              case 6:
                w.href({
                  type: "innerLink",
                  url: s.link
                }), e = setTimeout(() => {
                  p.value = !0;
                }, d.value.taskDuration * 1000);
                break;
              case 7:
                T(s).then(() => {
                  location.href = s.link;
                });
                break;
            }
          }).catch(() => {
            _.value = s, a.value = !0;
          });
        },
        T = s => new Promise(l => {
          (g.value || []).some(i => i.task_id == s.id) ? l(null) : ne({
            id: s.id
          }).then(i => {
            var b;
            R(), n.isReward = i.isReward, n.isReward && ((b = h.value) == null || b.openIfHasLotteryCount()), l(null);
          }).catch(i => {
            i == 10000 && (y.value = s, a.value = !0);
          });
        }),
        J = s => g.value.length > 0 ? g.value.findIndex(i => i.task_id == s) : -1,
        R = () => {
          le({
            id: B.levelId,
            aid: o.activityId
          }).then(s => {
            const {
              tasks: l,
              completedTasks: i
            } = s;
            for (const $ of l) try {
              $.operation = JSON.parse($.operation);
            } catch (Ve) {
              $.operation = [];
            }
            F.value = l, g.value = i, m.nums = s.tasks.length, m.isNum = s.completedTasks.length, m.noIsNum = Math.max(s.tasks.length - s.completedTasks.length, 0);
            const {
              level: {
                name: b,
                cover_img: U,
                study_num: q
              }
            } = s;
            m.name = b, document.title = b, m.headerImage = U, m.count = q;
          });
        },
        V = () => {
          document.visibilityState == "visible" ? e && !p.value ? (clearTimeout(e), j({
            type: "warning",
            message: "\u81F3\u5C11\u9700\u8981\u9605\u8BFB".concat(d.value.taskDuration, "\u79D2\u5B8C\u6210\u4EFB\u52A1")
          })) : T(f.value) : z();
        };
      return se(() => {
        var s;
        document.addEventListener("visibilitychange", V), d.value.taskDuration > 0 && o.env != "wx" && j({
          message: "\u6BCF\u4E2A\u4EFB\u52A1\u9700\u9605\u8BFB".concat(d.value.taskDuration, "\u79D2\u5B8C\u6210"),
          duration: 2000,
          type: "primary"
        }), R(), (n.taskPageReady || n.isReward) && ((s = h.value) == null || s.openIfHasLotteryCount());
      }), te(() => {
        document.removeEventListener("visibilitychange", V), z(), e && clearTimeout(e), n.taskPageReady = !1, e && clearTimeout(e);
      }), {
        taskNums: m,
        list: F,
        completeTask: M,
        checkBtnStatus: J,
        onVerifySuccess: H,
        obj: g,
        host: ve,
        lotteryConfig: L,
        lottery: h,
        verifyModal: a,
        store: o,
        studyOptMap: me
      };
    }
  });
const N = e => (ce("data-v-30495453"), e = e(), de(), e),
  ke = ["src"],
  he = {
    class: "card"
  },
  fe = ["src"],
  _e = {
    class: "taskName"
  },
  ge = {
    class: "taskName-left"
  },
  be = {
    key: 0,
    class: "taskName-right"
  },
  Se = {
    class: "taskCount"
  },
  Ie = N(() => t("span", null, "\u603B\u8BA1", -1)),
  Ne = {
    class: "task-num"
  },
  Ce = N(() => t("span", null, "\u5DF2\u5B8C\u6210", -1)),
  Be = {
    class: "task-num"
  },
  we = N(() => t("span", null, " \u672A\u5B8C\u6210", -1)),
  Te = {
    class: "task-num"
  },
  $e = ["onClick"],
  De = N(() => t("div", {
    class: "musk"
  }, null, -1)),
  Le = {
    style: {
      display: "flex",
      "align-items": "center",
      padding: "0 10px"
    }
  },
  Fe = {
    class: "list-line-left"
  },
  Me = {
    key: 0,
    class: "opt-group"
  };
function Re(e, n, o, C, L, d) {
  const k = pe,
    h = re,
    B = G,
    p = K;
  return u(), v("div", {
    class: "bg",
    style: O({
      "background-color": e.taskNums.bgColor
    })
  }, [t("img", {
    src: "".concat(e.host, "/api/base/image4163.png?uid=").concat(e.store.uid, "&aid=").concat(e.store.activityId),
    style: {
      visibility: "hidden",
      position: "absolute"
    }
  }, null, 8, ke), t("div", he, [t("img", {
    src: e.taskNums.headerImage,
    alt: "",
    class: "TaskImage"
  }, null, 8, fe), t("div", _e, [t("div", ge, c(e.taskNums.name), 1), e.taskNums.isStudyPeople ? (u(), v("div", be, " \u5DF2\u6709" + c(e.taskNums.count) + "\u4EBA\u5B8C\u6210\u9605\u8BFB ", 1)) : S("", !0)]), t("div", Se, [I(k, {
    size: 2
  }, {
    default: D(() => [Ie, t("span", Ne, c(e.taskNums.nums), 1)]),
    _: 1
  }), I(k, {
    size: 2
  }, {
    default: D(() => [Ce, t("span", Be, c(e.taskNums.isNum), 1)]),
    _: 1
  }), I(k, {
    size: 2
  }, {
    default: D(() => [we, t("span", Te, c(e.taskNums.noIsNum), 1)]),
    _: 1
  })])]), (u(!0), v(P, null, A(e.list, a => (u(), v("div", {
    key: a.id,
    class: "list-line",
    onClick: y => e.completeTask(a)
  }, [De, t("div", Le, [t("div", Fe, c(a.name), 1), t("button", {
    style: O({
      background: e.checkBtnStatus(a.id) > -1 ? "linear-gradient(180deg, #999 0%, #ccc 100%)" : "linear-gradient(180deg, #FFB185 0%, #FF5C00 100%)"
    }),
    class: "list-line-right"
  }, c(e.checkBtnStatus(a.id) > -1 ? "\u5DF2\u5B8C\u6210" : "\u672A\u5B8C\u6210"), 5)]), a.operation && a.operation.length ? (u(), v("div", Me, [(u(!0), v(P, null, A(a.operation, y => {
    var f, _;
    return u(), v("div", {
      key: y,
      class: ue(["opt", a[(f = e.studyOptMap[y]) == null ? void 0 : f.key] == 1 && "opt-active"])
    }, [I(h, {
      name: "checked"
    }), t("div", null, c((_ = e.studyOptMap[y]) == null ? void 0 : _.label), 1)], 2);
  }), 128))])) : S("", !0)], 8, $e))), 128)), e.lotteryConfig.lottery_id ? (u(), E(B, {
    key: 0,
    panel: !1,
    id: e.lotteryConfig.lottery_id,
    ref: "lottery"
  }, null, 8, ["id"])) : S("", !0), e.verifyModal ? (u(), E(p, {
    key: 1,
    id: 0,
    show: e.verifyModal,
    "onUpdate:show": n[0] || (n[0] = a => e.verifyModal = a),
    module: "study",
    onVerifySuccess: e.onVerifySuccess
  }, null, 8, ["show", "onVerifySuccess"])) : S("", !0)], 4);
}
const Je = ie(ye, [["render", Re], ["__scopeId", "data-v-30495453"]]);
export { Je as default };