// ==UserScript==
// @name         超兴学习通自动化 ——— Chaoxing Auto
// @namespace    https://github.com/lcandy2/Chaoxing-Auto
// @version      0.8.1
// @author       lcandy2 (甜檸Cirtron)
// @description  超兴学习通自动化脚本，能自动完成讨论，具备自动完成讨论任务、一键回复指定话题、批量回复和创建话题等功能，让讨论任务变得轻松简单。
// @license      None
// @homepage     https://greasyfork.org/scripts/489933
// @homepageURL  https://github.com/lcandy2/user.js
// @source       https://github.com/lcandy2/user.js
// @match        https://mooc1.chaoxing.com/bbscircle/grouptopic*
// @match        https://mooc1.chaoxing.com/mooc-ans/bbscircle/grouptopic*
// @match        https://mooc1.chaoxing.com/bbscircle/gettopicdetail*
// @match        https://mooc1.chaoxing.com/mooc-ans/bbscircle/gettopicdetail*
// @match        https://groupweb.chaoxing.com/course/topic/topicList*
// @match        https://groupweb.chaoxing.com/course/topic/v3/bbs*
// @require      https://registry.npmmirror.com/react/18.2.0/files/umd/react.production.min.js
// @require      https://registry.npmmirror.com/react-dom/18.2.0/files/umd/react-dom.production.min.js
// @require      https://registry.npmmirror.com/react-draggable/4.4.6/files/build/web/react-draggable.min.js
// @require      https://registry.npmmirror.com/@emotion/react/11.11.4/files/dist/emotion-react.umd.min.js
// @require      https://registry.npmmirror.com/@emotion/styled/11.11.0/files/dist/emotion-styled.umd.min.js
// @require      https://registry.npmmirror.com/@mui/material/5.15.13/files/umd/material-ui.production.min.js
// @grant        GM_addStyle
// @grant        GM_deleteValue
// @grant        GM_getValue
// @grant        GM_setValue
// ==/UserScript==

(t=>{if(typeof GM_addStyle=="function"){GM_addStyle(t);return}const o=document.createElement("style");o.textContent=t,document.head.append(o)})(' .floating-overlay{position:fixed;top:0;left:0;z-index:1001}.floating-overlay .MuiDialog-root{position:static}@font-face{font-family:Material Icons;font-style:normal;font-weight:400;src:url(https://fonts.gstatic.googlefonts.cn/s/materialicons/v141/flUhRq6tzZclQEJ-Vdg-IuiaDsNcIhQ8tQ.woff2) format("woff2")}.material-icons{font-family:Material Icons;font-weight:400;font-style:normal;font-size:24px;line-height:1;letter-spacing:normal;text-transform:none;display:inline-block;white-space:nowrap;word-wrap:normal;direction:ltr;-webkit-font-feature-settings:"liga";-webkit-font-smoothing:antialiased} ');

(function (e, material, E, react, M, _) {
  'use strict';

  function _interopNamespaceDefault(e) {
    const n = Object.create(null, { [Symbol.toStringTag]: { value: 'Module' } });
    if (e) {
      for (const k in e) {
        if (k !== 'default') {
          const d = Object.getOwnPropertyDescriptor(e, k);
          Object.defineProperty(n, k, d.get ? d : {
            enumerable: true,
            get: () => e[k]
          });
        }
      }
    }
    n.default = e;
    return Object.freeze(n);
  }

  const e__namespace = /*#__PURE__*/_interopNamespaceDefault(e);

  function I(e) {
      return e && e.__esModule && Object.prototype.hasOwnProperty.call(e, "default") ? e.default : e;
  }

  function B(e) {
      if (e.__esModule) return e;
      var t = e.default;
      if ("function" == typeof t) {
          var r = function e() {
              return this instanceof e ? Reflect.construct(t, arguments, this.constructor) : t.apply(this, arguments);
          };
          r.prototype = t.prototype;
      } else r = {};
      return Object.defineProperty(r, "__esModule", {
          value: !0
      }), Object.keys(e).forEach((function(t) {
          var n = Object.getOwnPropertyDescriptor(e, t);
          Object.defineProperty(r, t, n.get ? n : {
              enumerable: !0,
              get: function() {
                  return e[t];
              }
          });
      })), r;
  }

  var F = {
      exports: {}
  }, N = {}, z = e, L = Symbol.for("react.element"), D = Symbol.for("react.fragment"), W = Object.prototype.hasOwnProperty, V = z.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner, H = {
      key: !0,
      ref: !0,
      __self: !0,
      __source: !0
  };

  function K(e, t, r) {
      var n, o = {}, i = null, a = null;
      for (n in void 0 !== r && (i = "" + r), void 0 !== t.key && (i = "" + t.key), void 0 !== t.ref && (a = t.ref), 
      t) W.call(t, n) && !H.hasOwnProperty(n) && (o[n] = t[n]);
      if (e && e.defaultProps) for (n in t = e.defaultProps) void 0 === o[n] && (o[n] = t[n]);
      return {
          $$typeof: L,
          type: e,
          key: i,
          ref: a,
          props: o,
          _owner: V.current
      };
  }

  N.Fragment = D, N.jsx = K, N.jsxs = K, F.exports = N;

  var q = F.exports;

  const X = new URL("https://mooc1.chaoxing.com/bbscircle/grouptopic"), U = new URL("https://mooc1.chaoxing.com/mooc-ans/bbscircle/grouptopic"), G = new URL("https://mooc1.chaoxing.com/bbscircle/gettopicdetail"), Y = new URL("https://mooc1.chaoxing.com/mooc-ans/bbscircle/gettopicdetail"), J = new URL("https://groupweb.chaoxing.com/course/topic/topicList"), Z = new URL("https://groupweb.chaoxing.com/course/topic/v3/bbs"), Q = "div.topicDetail_detail div.replyBtn", ee = "div.topicDetail_editContainer div.replyEdit textarea", te = "div.replyEditBtnGroup div.addReply", re = "div.oneDiv p.clearfix a.tl1", ne = "div.plDiv div.hfpl textarea", oe = "div.plDiv div.hfpl input.grenBtn", ie = window.location.href, ae = () => ue() || fe(), se = () => de() || pe(), le = () => ue() || de(), ce = () => fe() || pe(), ue = () => {
      const e = J.href;
      return ie.includes(e);
  }, de = () => {
      const e = X.href, t = U.href;
      return ie.includes(e) || ie.includes(t);
  }, fe = () => {
      const e = Z.href;
      return ie.includes(e);
  }, pe = () => {
      const e = G.href, t = Y.href;
      return ie.includes(e) || ie.includes(t);
  };

  var he = {
      BASE_URL: "/",
      MODE: "production",
      DEV: !1,
      PROD: !0,
      SSR: !1
  };

  const me = e => {
      let t;
      const r = new Set, n = (e, n) => {
          const o = "function" == typeof e ? e(t) : e;
          if (!Object.is(o, t)) {
              const e = t;
              t = (null != n ? n : "object" != typeof o || null === o) ? o : Object.assign({}, t, o), 
              r.forEach((r => r(t, e)));
          }
      }, o = () => t, i = {
          setState: n,
          getState: o,
          getInitialState: () => a,
          subscribe: e => (r.add(e), () => r.delete(e)),
          destroy: () => {
              "production" !== (he ? "production" : void 0) && console.warn("[DEPRECATED] The `destroy` method will be unsupported in a future version. Instead use unsubscribe function returned by subscribe. Everything will be garbage-collected if store is garbage-collected."), 
              r.clear();
          }
      }, a = t = e(n, o, i);
      return i;
  };

  var ge = {
      exports: {}
  }, ye = {}, be = {
      exports: {}
  }, ve = {}, xe = e;

  var Se = "function" == typeof Object.is ? Object.is : function(e, t) {
      return e === t && (0 !== e || 1 / e == 1 / t) || e != e && t != t;
  }, we = xe.useState, ke = xe.useEffect, je = xe.useLayoutEffect, Ce = xe.useDebugValue;

  function Re(e) {
      var t = e.getSnapshot;
      e = e.value;
      try {
          var r = t();
          return !Se(e, r);
      } catch (n) {
          return !0;
      }
  }

  var Ee = "undefined" == typeof window || void 0 === window.document || void 0 === window.document.createElement ? function(e, t) {
      return t();
  } : function(e, t) {
      var r = t(), n = we({
          inst: {
              value: r,
              getSnapshot: t
          }
      }), o = n[0].inst, i = n[1];
      return je((function() {
          o.value = r, o.getSnapshot = t, Re(o) && i({
              inst: o
          });
      }), [ e, r, t ]), ke((function() {
          return Re(o) && i({
              inst: o
          }), e((function() {
              Re(o) && i({
                  inst: o
              });
          }));
      }), [ e ]), Ce(r), r;
  };

  ve.useSyncExternalStore = void 0 !== xe.useSyncExternalStore ? xe.useSyncExternalStore : Ee, 
  be.exports = ve;

  var Oe = be.exports, Te = e, $e = Oe;

  var Ae = "function" == typeof Object.is ? Object.is : function(e, t) {
      return e === t && (0 !== e || 1 / e == 1 / t) || e != e && t != t;
  }, Pe = $e.useSyncExternalStore, Me = Te.useRef, _e = Te.useEffect, Ie = Te.useMemo, Be = Te.useDebugValue;

  ye.useSyncExternalStoreWithSelector = function(e, t, r, n, o) {
      var i = Me(null);
      if (null === i.current) {
          var a = {
              hasValue: !1,
              value: null
          };
          i.current = a;
      } else a = i.current;
      i = Ie((function() {
          function e(e) {
              if (!l) {
                  if (l = !0, i = e, e = n(e), void 0 !== o && a.hasValue) {
                      var t = a.value;
                      if (o(t, e)) return s = t;
                  }
                  return s = e;
              }
              if (t = s, Ae(i, e)) return t;
              var r = n(e);
              return void 0 !== o && o(t, r) ? t : (i = e, s = r);
          }
          var i, s, l = !1, c = void 0 === r ? null : r;
          return [ function() {
              return e(t());
          }, null === c ? void 0 : function() {
              return e(c());
          } ];
      }), [ t, r, n, o ]);
      var s = Pe(e, i[0], i[1]);
      return _e((function() {
          a.hasValue = !0, a.value = s;
      }), [ s ]), Be(s), s;
  }, ge.exports = ye;

  const Fe = I(ge.exports);

  var Ne = {
      BASE_URL: "/",
      MODE: "production",
      DEV: !1,
      PROD: !0,
      SSR: !1
  };

  const {useDebugValue: ze} = e, {useSyncExternalStoreWithSelector: Le} = Fe;

  let De = !1;

  const We = e => e;

  const Ve = e => {
      "production" !== (Ne ? "production" : void 0) && "function" != typeof e && console.warn("[DEPRECATED] Passing a vanilla store will be unsupported in a future version. Instead use `import { useStore } from 'zustand'`.");
      const t = "function" == typeof e ? (e => e ? me(e) : me)(e) : e, r = (e, r) => function(e, t = We, r) {
          "production" !== (Ne ? "production" : void 0) && r && !De && (console.warn("[DEPRECATED] Use `createWithEqualityFn` instead of `create` or use `useStoreWithEqualityFn` instead of `useStore`. They can be imported from 'zustand/traditional'. https://github.com/pmndrs/zustand/discussions/1937"), 
          De = !0);
          const n = Le(e.subscribe, e.getState, e.getServerState || e.getInitialState, t, r);
          return ze(n), n;
      }(t, e, r);
      return Object.assign(r, t), r;
  }, He = e => e ? Ve(e) : Ve;

  var Ke = {
      BASE_URL: "/",
      MODE: "production",
      DEV: !1,
      PROD: !0,
      SSR: !1
  };

  const qe = (e, t) => (...r) => Object.assign({}, e, t(...r));

  function Xe(e, t) {
      let r;
      try {
          r = e();
      } catch (n) {
          return;
      }
      return {
          getItem: e => {
              var n;
              const o = e => null === e ? null : JSON.parse(e, null == t ? void 0 : t.reviver), i = null != (n = r.getItem(e)) ? n : null;
              return i instanceof Promise ? i.then(o) : o(i);
          },
          setItem: (e, n) => r.setItem(e, JSON.stringify(n, null == t ? void 0 : t.replacer)),
          removeItem: e => r.removeItem(e)
      };
  }

  const Ue = e => t => {
      try {
          const r = e(t);
          return r instanceof Promise ? r : {
              then: e => Ue(e)(r),
              catch(e) {
                  return this;
              }
          };
      } catch (r) {
          return {
              then(e) {
                  return this;
              },
              catch: e => Ue(e)(r)
          };
      }
  }, Ge = (e, t) => "getStorage" in t || "serialize" in t || "deserialize" in t ? ("production" !== (Ke ? "production" : void 0) && console.warn("[DEPRECATED] `getStorage`, `serialize` and `deserialize` options are deprecated. Use `storage` option instead."), 
  ((e, t) => (r, n, o) => {
      let i = {
          getStorage: () => localStorage,
          serialize: JSON.stringify,
          deserialize: JSON.parse,
          partialize: e => e,
          version: 0,
          merge: (e, t) => ({
              ...t,
              ...e
          }),
          ...t
      }, a = !1;
      const s = new Set, l = new Set;
      let c;
      try {
          c = i.getStorage();
      } catch (g) {}
      if (!c) return e(((...e) => {
          console.warn(`[zustand persist middleware] Unable to update item '${i.name}', the given storage is currently unavailable.`), 
          r(...e);
      }), n, o);
      const u = Ue(i.serialize), d = () => {
          const e = i.partialize({
              ...n()
          });
          let t;
          const r = u({
              state: e,
              version: i.version
          }).then((e => c.setItem(i.name, e))).catch((e => {
              t = e;
          }));
          if (t) throw t;
          return r;
      }, f = o.setState;
      o.setState = (e, t) => {
          f(e, t), d();
      };
      const p = e(((...e) => {
          r(...e), d();
      }), n, o);
      let h;
      const m = () => {
          var e;
          if (!c) return;
          a = !1, s.forEach((e => e(n())));
          const t = (null == (e = i.onRehydrateStorage) ? void 0 : e.call(i, n())) || void 0;
          return Ue(c.getItem.bind(c))(i.name).then((e => {
              if (e) return i.deserialize(e);
          })).then((e => {
              if (e) {
                  if ("number" != typeof e.version || e.version === i.version) return e.state;
                  if (i.migrate) return i.migrate(e.state, e.version);
                  console.error("State loaded from storage couldn't be migrated since no migrate function was provided");
              }
          })).then((e => {
              var t;
              return h = i.merge(e, null != (t = n()) ? t : p), r(h, !0), d();
          })).then((() => {
              null == t || t(h, void 0), a = !0, l.forEach((e => e(h)));
          })).catch((e => {
              null == t || t(void 0, e);
          }));
      };
      return o.persist = {
          setOptions: e => {
              i = {
                  ...i,
                  ...e
              }, e.getStorage && (c = e.getStorage());
          },
          clearStorage: () => {
              null == c || c.removeItem(i.name);
          },
          getOptions: () => i,
          rehydrate: () => m(),
          hasHydrated: () => a,
          onHydrate: e => (s.add(e), () => {
              s.delete(e);
          }),
          onFinishHydration: e => (l.add(e), () => {
              l.delete(e);
          })
      }, m(), h || p;
  })(e, t)) : ((e, t) => (r, n, o) => {
      let i = {
          storage: Xe((() => localStorage)),
          partialize: e => e,
          version: 0,
          merge: (e, t) => ({
              ...t,
              ...e
          }),
          ...t
      }, a = !1;
      const s = new Set, l = new Set;
      let c = i.storage;
      if (!c) return e(((...e) => {
          console.warn(`[zustand persist middleware] Unable to update item '${i.name}', the given storage is currently unavailable.`), 
          r(...e);
      }), n, o);
      const u = () => {
          const e = i.partialize({
              ...n()
          });
          return c.setItem(i.name, {
              state: e,
              version: i.version
          });
      }, d = o.setState;
      o.setState = (e, t) => {
          d(e, t), u();
      };
      const f = e(((...e) => {
          r(...e), u();
      }), n, o);
      let p;
      o.getInitialState = () => f;
      const h = () => {
          var e, t;
          if (!c) return;
          a = !1, s.forEach((e => {
              var t;
              return e(null != (t = n()) ? t : f);
          }));
          const o = (null == (t = i.onRehydrateStorage) ? void 0 : t.call(i, null != (e = n()) ? e : f)) || void 0;
          return Ue(c.getItem.bind(c))(i.name).then((e => {
              if (e) {
                  if ("number" != typeof e.version || e.version === i.version) return e.state;
                  if (i.migrate) return i.migrate(e.state, e.version);
                  console.error("State loaded from storage couldn't be migrated since no migrate function was provided");
              }
          })).then((e => {
              var t;
              return p = i.merge(e, null != (t = n()) ? t : f), r(p, !0), u();
          })).then((() => {
              null == o || o(p, void 0), p = n(), a = !0, l.forEach((e => e(p)));
          })).catch((e => {
              null == o || o(void 0, e);
          }));
      };
      return o.persist = {
          setOptions: e => {
              i = {
                  ...i,
                  ...e
              }, e.storage && (c = e.storage);
          },
          clearStorage: () => {
              null == c || c.removeItem(i.name);
          },
          getOptions: () => i,
          rehydrate: () => h(),
          hasHydrated: () => a,
          onHydrate: e => (s.add(e), () => {
              s.delete(e);
          }),
          onFinishHydration: e => (l.add(e), () => {
              l.delete(e);
          })
      }, i.skipHydration || h(), p || f;
  })(e, t);

  var Ye = (() => "undefined" != typeof GM_deleteValue ? GM_deleteValue : void 0)(), Je = (() => "undefined" != typeof GM_getValue ? GM_getValue : void 0)(), Ze = (() => "undefined" != typeof GM_setValue ? GM_setValue : void 0)();

  const Qe = {
      getItem: async e => await Je(e) || null,
      setItem: async (e, t) => {
          await Ze(e, t);
      },
      removeItem: async e => {
          await Ye(e);
      }
  }, et = He(qe({
      logItems: []
  }, (e => ({
      addLogItem: t => {
          e((e => ({
              logItems: [ ...e.logItems, t ]
          })));
      }
  })))), tt = He(Ge(qe({
      standbyTime: 200,
      countTimes: 1,
      _hasHydrated: !1
  }, (e => ({
      setStandbyTime: t => {
          e({
              standbyTime: t
          });
      },
      setCountTimes: t => {
          e({
              countTimes: t
          });
      },
      setHasHydrated: t => {
          e({
              _hasHydrated: t
          });
      }
  }))), {
      name: "topic_settings",
      storage: Xe((() => Qe)),
      onRehydrateStorage: () => e => {
          e && e.setHasHydrated(!0);
      }
  })), rt = He(qe({
      currentStatus: null,
      currentPage: null,
      isInActionFrame: !1,
      actionFrameStatus: {},
      topicDetail: {},
      topicList: []
  }, (e => ({
      setCurrentStatus: t => {
          e({
              currentStatus: t
          });
      },
      setCurrentPage: t => {
          e({
              currentPage: t
          });
      },
      setIsInActionFrame: t => {
          e({
              isInActionFrame: t
          });
      },
      setActionFrameStatus: t => {
          e({
              actionFrameStatus: t
          });
      },
      setActionFrameStatusStatus: t => {
          e((e => ({
              actionFrameStatus: {
                  ...e.actionFrameStatus,
                  status: t
              }
          })));
      },
      setActionFrameStatusIndex: t => {
          e((e => ({
              actionFrameStatus: {
                  ...e.actionFrameStatus,
                  index: t
              }
          })));
      },
      setActionFrameStatusTotal: t => {
          e((e => ({
              actionFrameStatus: {
                  ...e.actionFrameStatus,
                  total: t
              }
          })));
      },
      setActionFrameStatusSrc: t => {
          e((e => ({
              actionFrameStatus: {
                  ...e.actionFrameStatus,
                  src: t
              }
          })));
      },
      setTopicDetail: t => {
          e({
              topicDetail: t
          });
      },
      setTopicList: t => {
          e({
              topicList: t
          });
      }
  }))));

  const nt = e => {
      var t;
      const r = e.querySelector(".topicDetail_title");
      return r ? null == (t = r.textContent) ? void 0 : t.trim() : void 0;
  }, ot = e => {
      const t = e.querySelector(".topicDetail_main");
      if (!t) return;
      return Array.from(t.children).filter((e => !e.classList.contains("topicDetail_info"))).map((e => {
          var t;
          return null == (t = e.textContent) ? void 0 : t.trim();
      })).join(" ");
  }, it = e => Array.from(e.querySelectorAll(".topicDetail_replyItem")).map((e => {
      var t, r;
      const n = e.querySelector(".author"), o = e.querySelector(".replyContent");
      return {
          author: n ? null == (t = n.textContent) ? void 0 : t.trim() : "",
          content: o ? null == (r = o.textContent) ? void 0 : r.trim() : ""
      };
  })), at = e => {
      var t;
      const r = e.querySelector(".oneDiv");
      let n;
      if (r) {
          let e = r.querySelector("h3");
          if (e) {
              let r = e.querySelector("em");
              r && r.remove(), n = null == (t = e.textContent) ? void 0 : t.trim();
          }
      }
      return n;
  }, st = e => {
      var t;
      const r = e.querySelector("#topicContent");
      return r ? null == (t = r.textContent) ? void 0 : t.trim() : void 0;
  }, lt = e => {
      var t, r;
      let n, o = [];
      if (e && e.children.length > 1) {
          n = e.children[1];
          let i = n.querySelectorAll("div");
          for (let e = 0; e < i.length; e++) {
              if (i[e].parentElement !== n) continue;
              let a = {}, s = i[e].querySelector("p > span.name"), l = i[e].querySelector("h3");
              s && (a.author = null == (t = s.textContent) ? void 0 : t.trim()), l && (a.content = null == (r = l.textContent) ? void 0 : r.trim()), 
              a.content && o.push(a);
          }
      }
      return o;
  }, ct = window.location.hash, ut = e => {
      ct.includes(e) || window.history.replaceState(null, "", `${ct}#${e}`);
  }, dt = () => ct.includes("cxauto_start"), ft = () => ct.includes("cxauto_success"), pt = () => ct.includes("cxauto_action"), ht = e => {
      const t = "cxauto_success";
      return e ? `${e}#${t}` : (ut(t), !0);
  }, mt = e => {
      const t = "cxauto_action";
      return e ? `${e}#${t}` : (ut(t), !0);
  }, gt = ae() && !se() ? "new" : se() && !ae() ? "legacy" : null;

  function yt(e) {
      const t = et.getState().addLogItem;
      t("----- 执行失败 -----"), t(e.toString()), t(`-v=${gt}`), console.error(e, gt);
  }

  const bt = () => Array.from(document.querySelectorAll("div#showTopics div.content1118")).filter((e => Array.from(e.children).some((e => e.classList.contains("oneRight"))))).map((e => {
      var t, r, n;
      const o = e.querySelector("h3 a"), i = (null == (t = null == o ? void 0 : o.textContent) ? void 0 : t.trim()) || "", a = e.querySelector("p.clearfix");
      return {
          title: i,
          author: (null == (r = null == a ? void 0 : a.children[0].textContent) ? void 0 : r.trim()) || "",
          replyCount: (null == (n = null == a ? void 0 : a.children[1].textContent) ? void 0 : n.trim()) || "",
          url: (null == o ? void 0 : o.getAttribute("href")) || ""
      };
  }));

  async function vt(e = 1) {
      const t = await tt.getState().standbyTime;
      return new Promise((r => setTimeout(r, t * e)));
  }

  const xt = fe() && !pe() ? "new" : pe() && !fe() ? "legacy" : null, St = "new" === xt, wt = et.getState().addLogItem;

  const kt = (e, t) => {
      if (!e.replies) throw new Error("topicDetail.replies is undefined");
      const r = e.replies.map((e => e.content || "")), n = [];
      if (r.length <= t) {
          for (let r = 0; r < t; r++) n.push(e.content || e.title || "");
          return n;
      }
      let o = !0;
      r.length <= t && (o = !1);
      for (let i = 0; i < t; i++) {
          const e = Math.floor(Math.random() * r.length);
          n.push(r[e]), o && r.splice(e, 1);
      }
      return n;
  }, jt = async e => {
      try {
          const t = document.querySelector(e);
          if (console.log(t, e), !t) throw new Error("无法找到进行回复的按钮。");
          return t.click(), wt("已点击进行回复的按钮，即将继续..."), await vt(.1), !0;
      } catch (t) {
          return yt(t), !1;
      }
  }, Ct = async e => {
      try {
          const t = document.querySelector(e);
          if (!t) throw new Error("无法找到用于回复的文本区域。");
          return t.click(), t.focus(), wt("已找到用于回复的文本区域，等待回复..."), await vt(.1), t;
      } catch (t) {
          yt(t);
      }
  }, Rt = async ({selector: e, textarea: t, contextToReply: r}) => {
      try {
          const n = document.querySelector(e);
          if (!n || !t) throw new Error("Required elements not found.");
          for (let e = 0; e < r.length; e++) t.value = r[e], wt(`Reply ${r[e]} filled, waiting to submit...`), 
          "legacy" === xt && n.addEventListener("click", (function(e) {
              e.preventDefault();
          })), await vt(.8), n.click(), t.value = "", e !== r.length - 1 && (await vt(1), 
          wt("Reply submitted, waiting to continue..."));
          return !0;
      } catch (n) {
          yt(n);
      }
  };

  function Et({topicDetail: e$1, setCurrentStatus: t, currentStatus: n, setIsButtonDisabled: o}) {
      const {addLogItem: i} = et();
      e.useEffect((() => {
          e$1 && (e$1.title && i(`获取到讨论标题：${e$1.title}`), e$1.content && i(`获取到讨论内容：${e$1.content}`), 
          e$1.replies && i(`获取到讨论回复：共 ${e$1.replies.length} 条`));
      }), [ e$1 ]), e.useEffect((() => {
          const e = async () => {
              const e = await async function() {
                  const {countTimes: e} = tt.getState(), {topicDetail: t} = rt.getState(), r = kt(t, e);
                  console.debug("currentVersion", xt);
                  try {
                      if (r.length <= 0) throw new Error("未获取到回复评论。");
                      const e = St ? Q : re, t = St ? ee : ne, n = St ? te : oe, o = await jt(e), i = await Ct(t), a = await Rt({
                          selector: n,
                          textarea: i,
                          contextToReply: r
                      });
                      if (o && i && a) return !0;
                  } catch (n) {
                      return yt(n), !1;
                  }
              }();
              t(e ? "success" : "failed");
          };
          switch (n) {
            case "running":
            default:
              o(!0);
              break;

            case "triggered":
              o(!0), t("running"), e();
              break;

            case "success":
              o(!1), ht(), i("All done!");
              break;

            case "idle":
            case "failed":
              o(!1);
          }
      }), [ n ]);
  }

  const Ot = ({setCurrentStatus: e}) => async () => {
      e("triggered");
  }, Tt = () => {
      console.debug("PostMessageSuccess"), window.parent.postMessage({
          type: "cxauto_action_frame",
          status: "success"
      }, "*");
  }, $t = () => {
      window.addEventListener("message", (e => {
          if ("cxauto_action_frame" === e.data.type) {
              const t = rt.getState().actionFrameStatus.status;
              "success" === e.data.status && "running" === t && rt.getState().setActionFrameStatusStatus("success");
          }
      }));
  }, At = rt.getState().setActionFrameStatusStatus, Pt = rt.getState().setActionFrameStatusIndex, Mt = rt.getState().setActionFrameStatusTotal, _t = rt.getState().setActionFrameStatusSrc, It = et.getState().addLogItem;

  const Bt = () => {
      const {topicList: e} = rt.getState();
      return e.length, Pt(0), Mt(e.length), _t(""), !0;
  }, Ft = async (e, t) => (_t(""), e === t - 1 || (Pt(e + 1), vt(.5), At("waitingToStart"), 
  !1));

  function Nt() {
      const {currentPage: e$1, setCurrentPage: t} = rt(), {topicDetail: o, setTopicDetail: i} = rt(), {topicList: a, setTopicList: s} = rt(), {currentStatus: f, setCurrentStatus: p} = rt(), {isInActionFrame: h, setIsInActionFrame: m} = rt(), [g, y] = e.useState(!0), {addLogItem: b} = et(), {actionFrameStatus: v, setActionFrameStatus: x, setActionFrameStatusStatus: S} = rt(), w = v.status;
      e.useEffect((() => {
          const e = ft(), r = pt(), n = dt() || r;
          ce() ? (t("detail"), r && m(!0), n && (e || p("triggered"))) : le() && t("list"), 
          e && p("success");
      }), []), e.useEffect((() => {
          if ("list" === e$1 || "detail" === e$1) {
              let t;
              switch (e$1) {
                case "detail":
                  t = "讨论详情";
                  const e = function() {
                      const e = fe(), t = pe(), r = et.getState().addLogItem, n = {
                          title: void 0,
                          content: void 0,
                          replies: void 0
                      };
                      if (e && !t) try {
                          const e = document.querySelector(".topicDetail_detail"), t = document.querySelector(".topicDetail_replyList");
                          if (!e || !t) return;
                          const r = nt(e), o = ot(e), i = it(t);
                          n.title = r, n.content = o, n.replies = i;
                      } catch (o) {
                          console.error(o), r(`获取讨论详情失败：${o}`);
                      } else if (t && !e) try {
                          const e = document.querySelectorAll("div");
                          let t;
                          for (let n = 0; n < e.length; n++) if (e[n].className.match(/content\d{4}/)) {
                              t = e[n];
                              break;
                          }
                          if (!t) return;
                          const r = at(t), o = st(t), i = lt(t);
                          n.title = r, n.content = o, n.replies = i;
                      } catch (o) {
                          console.error(o), r(`获取讨论详情失败：${o}`);
                      }
                      return n;
                  }();
                  e && (i(e), f || p("idle"));
                  break;

                case "list":
                  t = "讨论列表";
                  const r = function() {
                      const e = "new" === (ue() && !de() ? "new" : de() && !ue() ? "legacy" : null);
                      try {
                          if (!e) {
                              const e = bt();
                              return console.debug("getLegacyItems", e), e;
                          }
                      } catch (t) {
                          yt(t);
                      }
                  }();
                  r && (s(r), w || f || S("idle"));
                  break;

                default:
                  t = "未知页面";
              }
              b(`检测到当前为 [${t}]`);
          }
      }), [ e$1 ]), Et({
          topicDetail: o,
          setCurrentStatus: p,
          currentStatus: f,
          setIsButtonDisabled: y
      });
      const k = Ot({
          setCurrentStatus: p
      });
      e.useEffect((() => {
          a.length && b(`获取到发起的讨论：共 ${a.length} 条`);
      }), [ a ]), e.useEffect((() => {
          h && "success" === f && (console.debug("PostMessageSuccess"), Tt());
      }), [ h ]);
      return e.useEffect((() => {
          const e = w;
          e && console.debug("PanelActions useEffect actionFrameStatus", v);
          const t = async () => {
              if (e) {
                  const t = await async function(e) {
                      const {actionFrameStatus: t} = rt.getState(), r = t.total, {topicList: n} = rt.getState();
                      console.debug("RunningTopicListReply Status", e), "triggered" === e && (Bt(), It("开始：批量回复讨论"), 
                      vt(.1), At("waitingToStart"));
                      const o = t.index || 0;
                      try {
                          if ("waitingToStart" === e) {
                              const e = n[o].url;
                              if (e) {
                                  const t = mt(e).toString();
                                  _t(t), It(`正在回复讨论：${n[o].title}`), vt(.1), $t(), vt(.3), At("running");
                              } else yt("未找到讨论链接"), At("failed");
                          }
                          if ("failed" === e && At("waitingToNext"), "success" === e) {
                              const e = n[o].title;
                              It(`已回复讨论：${e}`), vt(.4), At("waitingToNext");
                          }
                          const t = r || 0;
                          if ("waitingToNext" === e) return await Ft(o, t);
                      } catch (i) {
                          yt(i), At("failed");
                      }
                      return !1;
                  }(e);
                  t && S("finished");
              }
          };
          "triggered" === e || "waitingToStart" === e || "waitingToNext" === e || "failed" === e || "success" === e ? (t(), 
          p("running")) : "finished" === e ? p("success") : "idle" === e && p("idle");
      }), [ w ]), q.jsxs(q.Fragment, {
          children: [ g && q.jsx(material.CircularProgress, {
              size: "2em"
          }), "success" === f && "detail" === e$1 && q.jsxs(q.Fragment, {
              children: [ q.jsx(material.Icon, {
                  color: "success",
                  children: "done"
              }), q.jsx(material.Typography, {
                  variant: "body2",
                  children: "已完成"
              }) ]
          }), "failed" === f && q.jsxs(q.Fragment, {
              children: [ q.jsx(material.Icon, {
                  color: "error",
                  children: "error"
              }), q.jsx(material.Typography, {
                  variant: "body2",
                  children: "错误"
              }) ]
          }), "detail" === e$1 && !h && q.jsxs(material.Button, {
              autoFocus: "success" !== f,
              disabled: g,
              onClick: k,
              children: [ ("success" === f || "failed" === f) && "再次", "回复讨论" ]
          }), "list" === e$1 && q.jsxs(q.Fragment, {
              children: [ q.jsx(material.Button, {
                  autoFocus: !0,
                  disabled: !0,
                  children: "批量发起讨论"
              }), q.jsxs(material.Button, {
                  autoFocus: "success" !== f,
                  disabled: g,
                  onClick: async () => {
                      S("triggered");
                  },
                  children: [ "success" === f && q.jsx(material.Icon, {
                      color: "success",
                      children: "done"
                  }), "success" === f || "failed" === f ? "再次批量回复" : "批量回复讨论" ]
              }) ]
          }) ]
      });
  }

  function zt(e, t) {
      if (null == e) return {};
      var r, n, o = {}, i = Object.keys(e);
      for (n = 0; n < i.length; n++) r = i[n], t.indexOf(r) >= 0 || (o[r] = e[r]);
      return o;
  }

  function Lt() {
      return Lt = Object.assign ? Object.assign.bind() : function(e) {
          for (var t = 1; t < arguments.length; t++) {
              var r = arguments[t];
              for (var n in r) Object.prototype.hasOwnProperty.call(r, n) && (e[n] = r[n]);
          }
          return e;
      }, Lt.apply(this, arguments);
  }

  var Dt, Wt = {
      exports: {}
  }, Vt = {}, Ht = Symbol.for("react.element"), Kt = Symbol.for("react.portal"), qt = Symbol.for("react.fragment"), Xt = Symbol.for("react.strict_mode"), Ut = Symbol.for("react.profiler"), Gt = Symbol.for("react.provider"), Yt = Symbol.for("react.context"), Jt = Symbol.for("react.server_context"), Zt = Symbol.for("react.forward_ref"), Qt = Symbol.for("react.suspense"), er = Symbol.for("react.suspense_list"), tr = Symbol.for("react.memo"), rr = Symbol.for("react.lazy"), nr = Symbol.for("react.offscreen");

  function or(e) {
      if ("object" == typeof e && null !== e) {
          var t = e.$$typeof;
          switch (t) {
            case Ht:
              switch (e = e.type) {
                case qt:
                case Ut:
                case Xt:
                case Qt:
                case er:
                  return e;

                default:
                  switch (e = e && e.$$typeof) {
                    case Jt:
                    case Yt:
                    case Zt:
                    case rr:
                    case tr:
                    case Gt:
                      return e;

                    default:
                      return t;
                  }
              }

            case Kt:
              return t;
          }
      }
  }

  Dt = Symbol.for("react.module.reference"), Vt.ContextConsumer = Yt, Vt.ContextProvider = Gt, 
  Vt.Element = Ht, Vt.ForwardRef = Zt, Vt.Fragment = qt, Vt.Lazy = rr, Vt.Memo = tr, 
  Vt.Portal = Kt, Vt.Profiler = Ut, Vt.StrictMode = Xt, Vt.Suspense = Qt, Vt.SuspenseList = er, 
  Vt.isAsyncMode = function() {
      return !1;
  }, Vt.isConcurrentMode = function() {
      return !1;
  }, Vt.isContextConsumer = function(e) {
      return or(e) === Yt;
  }, Vt.isContextProvider = function(e) {
      return or(e) === Gt;
  }, Vt.isElement = function(e) {
      return "object" == typeof e && null !== e && e.$$typeof === Ht;
  }, Vt.isForwardRef = function(e) {
      return or(e) === Zt;
  }, Vt.isFragment = function(e) {
      return or(e) === qt;
  }, Vt.isLazy = function(e) {
      return or(e) === rr;
  }, Vt.isMemo = function(e) {
      return or(e) === tr;
  }, Vt.isPortal = function(e) {
      return or(e) === Kt;
  }, Vt.isProfiler = function(e) {
      return or(e) === Ut;
  }, Vt.isStrictMode = function(e) {
      return or(e) === Xt;
  }, Vt.isSuspense = function(e) {
      return or(e) === Qt;
  }, Vt.isSuspenseList = function(e) {
      return or(e) === er;
  }, Vt.isValidElementType = function(e) {
      return "string" == typeof e || "function" == typeof e || e === qt || e === Ut || e === Xt || e === Qt || e === er || e === nr || "object" == typeof e && null !== e && (e.$$typeof === rr || e.$$typeof === tr || e.$$typeof === Gt || e.$$typeof === Yt || e.$$typeof === Zt || e.$$typeof === Dt || void 0 !== e.getModuleId);
  }, Vt.typeOf = or, Wt.exports = Vt;

  var ir = Wt.exports;

  function ar(e) {
      var t, r, n = "";
      if ("string" == typeof e || "number" == typeof e) n += e; else if ("object" == typeof e) if (Array.isArray(e)) {
          var o = e.length;
          for (t = 0; t < o; t++) e[t] && (r = ar(e[t])) && (n && (n += " "), n += r);
      } else for (r in e) e[r] && (n && (n += " "), n += r);
      return n;
  }

  function sr() {
      for (var e, t, r = 0, n = "", o = arguments.length; r < o; r++) (e = arguments[r]) && (t = ar(e)) && (n && (n += " "), 
      n += t);
      return n;
  }

  function lr(e) {
      if ("object" != typeof e || null === e) return !1;
      const t = Object.getPrototypeOf(e);
      return !(null !== t && t !== Object.prototype && null !== Object.getPrototypeOf(t) || Symbol.toStringTag in e || Symbol.iterator in e);
  }

  function cr(e) {
      if (!lr(e)) return e;
      const t = {};
      return Object.keys(e).forEach((r => {
          t[r] = cr(e[r]);
      })), t;
  }

  function ur(e, t, r = {
      clone: !0
  }) {
      const n = r.clone ? Lt({}, e) : e;
      return lr(e) && lr(t) && Object.keys(t).forEach((o => {
          "__proto__" !== o && (lr(t[o]) && o in e && lr(e[o]) ? n[o] = ur(e[o], t[o], r) : r.clone ? n[o] = lr(t[o]) ? cr(t[o]) : t[o] : n[o] = t[o]);
      })), n;
  }

  const dr = Object.freeze(Object.defineProperty({
      __proto__: null,
      default: ur,
      isPlainObject: lr
  }, Symbol.toStringTag, {
      value: "Module"
  }));

  function fr(e) {
      let t = "https://mui.com/production-error/?code=" + e;
      for (let r = 1; r < arguments.length; r += 1) t += "&args[]=" + encodeURIComponent(arguments[r]);
      return "Minified MUI error #" + e + "; visit " + t + " for the full message.";
  }

  const pr = Object.freeze(Object.defineProperty({
      __proto__: null,
      default: fr
  }, Symbol.toStringTag, {
      value: "Module"
  })), hr = /^\s*function(?:\s|\s*\/\*.*\*\/\s*)+([^(\s/]*)\s*/;

  function mr(e) {
      const t = `${e}`.match(hr);
      return t && t[1] || "";
  }

  function gr(e, t = "") {
      return e.displayName || e.name || mr(e) || t;
  }

  function yr(e, t, r) {
      const n = gr(t);
      return e.displayName || ("" !== n ? `${r}(${n})` : r);
  }

  const br = Object.freeze(Object.defineProperty({
      __proto__: null,
      default: function(e) {
          if (null != e) {
              if ("string" == typeof e) return e;
              if ("function" == typeof e) return gr(e, "Component");
              if ("object" == typeof e) switch (e.$$typeof) {
                case ir.ForwardRef:
                  return yr(e, e.render, "ForwardRef");

                case ir.Memo:
                  return yr(e, e.type, "memo");

                default:
                  return;
              }
          }
      },
      getFunctionName: mr
  }, Symbol.toStringTag, {
      value: "Module"
  }));

  function vr(e) {
      if ("string" != typeof e) throw new Error(fr(7));
      return e.charAt(0).toUpperCase() + e.slice(1);
  }

  const xr = Object.freeze(Object.defineProperty({
      __proto__: null,
      default: vr
  }, Symbol.toStringTag, {
      value: "Module"
  }));

  function Sr(e, t = 166) {
      let r;
      function n(...n) {
          clearTimeout(r), r = setTimeout((() => {
              e.apply(this, n);
          }), t);
      }
      return n.clear = () => {
          clearTimeout(r);
      }, n;
  }

  function wr(e) {
      return e && e.ownerDocument || document;
  }

  function kr(e) {
      return wr(e).defaultView || window;
  }

  const jr = "undefined" != typeof window ? e__namespace.useLayoutEffect : e__namespace.useEffect;

  function Cr(t) {
      const r = e__namespace.useRef(t);
      return jr((() => {
          r.current = t;
      })), e__namespace.useRef(((...e) => (0, r.current)(...e))).current;
  }

  function Rr(...t) {
      return e__namespace.useMemo((() => t.every((e => null == e)) ? null : e => {
          t.forEach((t => {
              !function(e, t) {
                  "function" == typeof e ? e(t) : e && (e.current = t);
              }(t, e);
          }));
      }), t);
  }

  const Er = {};

  const Or = [];

  class Tr {
      constructor() {
          this.currentId = null, this.clear = () => {
              null !== this.currentId && (clearTimeout(this.currentId), this.currentId = null);
          }, this.disposeEffect = () => this.clear;
      }
      static create() {
          return new Tr;
      }
      start(e, t) {
          this.clear(), this.currentId = setTimeout((() => {
              this.currentId = null, t();
          }), e);
      }
  }

  function $r() {
      const t = function(t, r) {
          const n = e__namespace.useRef(Er);
          return n.current === Er && (n.current = t(r)), n;
      }(Tr.create).current;
      var r;
      return r = t.disposeEffect, e__namespace.useEffect(r, Or), t;
  }

  let Ar = !0, Pr = !1;

  const Mr = new Tr, _r = {
      text: !0,
      search: !0,
      url: !0,
      tel: !0,
      email: !0,
      password: !0,
      number: !0,
      date: !0,
      month: !0,
      week: !0,
      time: !0,
      datetime: !0,
      "datetime-local": !0
  };

  function Ir(e) {
      e.metaKey || e.altKey || e.ctrlKey || (Ar = !0);
  }

  function Br() {
      Ar = !1;
  }

  function Fr() {
      "hidden" === this.visibilityState && Pr && (Ar = !0);
  }

  function Nr(e) {
      const {target: t} = e;
      try {
          return t.matches(":focus-visible");
      } catch (r) {}
      return Ar || function(e) {
          const {type: t, tagName: r} = e;
          return !("INPUT" !== r || !_r[t] || e.readOnly) || "TEXTAREA" === r && !e.readOnly || !!e.isContentEditable;
      }(t);
  }

  function zr() {
      const t = e__namespace.useCallback((e => {
          var t;
          null != e && ((t = e.ownerDocument).addEventListener("keydown", Ir, !0), t.addEventListener("mousedown", Br, !0), 
          t.addEventListener("pointerdown", Br, !0), t.addEventListener("touchstart", Br, !0), 
          t.addEventListener("visibilitychange", Fr, !0));
      }), []), r = e__namespace.useRef(!1);
      return {
          isFocusVisibleRef: r,
          onFocus: function(e) {
              return !!Nr(e) && (r.current = !0, !0);
          },
          onBlur: function() {
              return !!r.current && (Pr = !0, Mr.start(100, (() => {
                  Pr = !1;
              })), r.current = !1, !0);
          },
          ref: t
      };
  }

  let Lr;

  function Dr() {
      if (Lr) return Lr;
      const e = document.createElement("div"), t = document.createElement("div");
      return t.style.width = "10px", t.style.height = "1px", e.appendChild(t), e.dir = "rtl", 
      e.style.fontSize = "14px", e.style.width = "4px", e.style.height = "1px", e.style.position = "absolute", 
      e.style.top = "-1000px", e.style.overflow = "scroll", document.body.appendChild(e), 
      Lr = "reverse", e.scrollLeft > 0 ? Lr = "default" : (e.scrollLeft = 1, 0 === e.scrollLeft && (Lr = "negative")), 
      document.body.removeChild(e), Lr;
  }

  function Wr(e, t) {
      const r = e.scrollLeft;
      if ("rtl" !== t) return r;
      switch (Dr()) {
        case "negative":
          return e.scrollWidth - e.clientWidth + r;

        case "reverse":
          return e.scrollWidth - e.clientWidth - r;

        default:
          return r;
      }
  }

  function Vr(e, t) {
      const r = Lt({}, t);
      return Object.keys(e).forEach((n => {
          if (n.toString().match(/^(components|slots)$/)) r[n] = Lt({}, e[n], r[n]); else if (n.toString().match(/^(componentsProps|slotProps)$/)) {
              const o = e[n] || {}, i = t[n];
              r[n] = {}, i && Object.keys(i) ? o && Object.keys(o) ? (r[n] = Lt({}, i), Object.keys(o).forEach((e => {
                  r[n][e] = Vr(o[e], i[e]);
              }))) : r[n] = i : r[n] = o;
          } else void 0 === r[n] && (r[n] = e[n]);
      })), r;
  }

  function Hr(e, t, r = void 0) {
      const n = {};
      return Object.keys(e).forEach((o => {
          n[o] = e[o].reduce(((e, n) => {
              if (n) {
                  const o = t(n);
                  "" !== o && e.push(o), r && r[n] && e.push(r[n]);
              }
              return e;
          }), []).join(" ");
      })), n;
  }

  const Kr = e => e, qr = (() => {
      let e = Kr;
      return {
          configure(t) {
              e = t;
          },
          generate: t => e(t),
          reset() {
              e = Kr;
          }
      };
  })(), Xr = {
      active: "active",
      checked: "checked",
      completed: "completed",
      disabled: "disabled",
      error: "error",
      expanded: "expanded",
      focused: "focused",
      focusVisible: "focusVisible",
      open: "open",
      readOnly: "readOnly",
      required: "required",
      selected: "selected"
  };

  function Ur(e, t, r = "Mui") {
      const n = Xr[t];
      return n ? `${r}-${n}` : `${qr.generate(e)}-${t}`;
  }

  function Gr(e, t, r = "Mui") {
      const n = {};
      return t.forEach((t => {
          n[t] = Ur(e, t, r);
      })), n;
  }

  const Yr = Object.freeze(Object.defineProperty({
      __proto__: null,
      default: function(e, t = Number.MIN_SAFE_INTEGER, r = Number.MAX_SAFE_INTEGER) {
          return Math.max(t, Math.min(e, r));
      }
  }, Symbol.toStringTag, {
      value: "Module"
  }));

  function Jr(e) {
      if (void 0 === e) return {};
      const t = {};
      return Object.keys(e).filter((t => !(t.match(/^on[A-Z]/) && "function" == typeof e[t]))).forEach((r => {
          t[r] = e[r];
      })), t;
  }

  function Zr(e) {
      const {getSlotProps: t, additionalProps: r, externalSlotProps: n, externalForwardedProps: o, className: i} = e;
      if (!t) {
          const e = sr(null == r ? void 0 : r.className, i, null == o ? void 0 : o.className, null == n ? void 0 : n.className), t = Lt({}, null == r ? void 0 : r.style, null == o ? void 0 : o.style, null == n ? void 0 : n.style), a = Lt({}, r, o, n);
          return e.length > 0 && (a.className = e), Object.keys(t).length > 0 && (a.style = t), 
          {
              props: a,
              internalRef: void 0
          };
      }
      const a = function(e, t = []) {
          if (void 0 === e) return {};
          const r = {};
          return Object.keys(e).filter((r => r.match(/^on[A-Z]/) && "function" == typeof e[r] && !t.includes(r))).forEach((t => {
              r[t] = e[t];
          })), r;
      }(Lt({}, o, n)), s = Jr(n), l = Jr(o), c = t(a), u = sr(null == c ? void 0 : c.className, null == r ? void 0 : r.className, i, null == o ? void 0 : o.className, null == n ? void 0 : n.className), d = Lt({}, null == c ? void 0 : c.style, null == r ? void 0 : r.style, null == o ? void 0 : o.style, null == n ? void 0 : n.style), f = Lt({}, c, r, l, s);
      return u.length > 0 && (f.className = u), Object.keys(d).length > 0 && (f.style = d), 
      {
          props: f,
          internalRef: c.ref
      };
  }

  const Qr = [ "elementType", "externalSlotProps", "ownerState", "skipResolvingSlotProps" ];

  function en(e) {
      var t;
      const {elementType: r, externalSlotProps: n, ownerState: o, skipResolvingSlotProps: i = !1} = e, a = zt(e, Qr), s = i ? {} : function(e, t, r) {
          return "function" == typeof e ? e(t, r) : e;
      }(n, o), {props: l, internalRef: c} = Zr(Lt({}, a, {
          externalSlotProps: s
      })), u = function(e, t, r) {
          return void 0 === e || "string" == typeof e ? t : Lt({}, t, {
              ownerState: Lt({}, t.ownerState, r)
          });
      }(r, Lt({}, l, {
          ref: Rr(c, null == s ? void 0 : s.ref, null == (t = e.additionalProps) ? void 0 : t.ref)
      }), o);
      return u;
  }

  const tn = e__namespace.createContext(), rn = () => {
      const t = e__namespace.useContext(tn);
      return null != t && t;
  };

  var nn, on = {}, an = {
      exports: {}
  };

  (nn = an).exports = function(e) {
      return e && e.__esModule ? e : {
          default: e
      };
  }, nn.exports.__esModule = !0, nn.exports.default = nn.exports;

  var sn, ln = an.exports, cn = {
      exports: {}
  };

  var un, dn = {
      exports: {}
  };

  var fn = function() {
      function e(e) {
          var t = this;
          this._insertTag = function(e) {
              var r;
              r = 0 === t.tags.length ? t.insertionPoint ? t.insertionPoint.nextSibling : t.prepend ? t.container.firstChild : t.before : t.tags[t.tags.length - 1].nextSibling, 
              t.container.insertBefore(e, r), t.tags.push(e);
          }, this.isSpeedy = void 0 === e.speedy || e.speedy, this.tags = [], this.ctr = 0, 
          this.nonce = e.nonce, this.key = e.key, this.container = e.container, this.prepend = e.prepend, 
          this.insertionPoint = e.insertionPoint, this.before = null;
      }
      var t = e.prototype;
      return t.hydrate = function(e) {
          e.forEach(this._insertTag);
      }, t.insert = function(e) {
          this.ctr % (this.isSpeedy ? 65e3 : 1) == 0 && this._insertTag(function(e) {
              var t = document.createElement("style");
              return t.setAttribute("data-emotion", e.key), void 0 !== e.nonce && t.setAttribute("nonce", e.nonce), 
              t.appendChild(document.createTextNode("")), t.setAttribute("data-s", ""), t;
          }(this));
          var t = this.tags[this.tags.length - 1];
          if (this.isSpeedy) {
              var r = function(e) {
                  if (e.sheet) return e.sheet;
                  for (var t = 0; t < document.styleSheets.length; t++) if (document.styleSheets[t].ownerNode === e) return document.styleSheets[t];
              }(t);
              try {
                  r.insertRule(e, r.cssRules.length);
              } catch (n) {}
          } else t.appendChild(document.createTextNode(e));
          this.ctr++;
      }, t.flush = function() {
          this.tags.forEach((function(e) {
              return e.parentNode && e.parentNode.removeChild(e);
          })), this.tags = [], this.ctr = 0;
      }, e;
  }(), pn = "-ms-", hn = "-moz-", mn = "-webkit-", gn = "comm", yn = "rule", bn = "decl", vn = "@keyframes", xn = Math.abs, Sn = String.fromCharCode, wn = Object.assign;

  function kn(e) {
      return e.trim();
  }

  function jn(e, t, r) {
      return e.replace(t, r);
  }

  function Cn(e, t) {
      return e.indexOf(t);
  }

  function Rn(e, t) {
      return 0 | e.charCodeAt(t);
  }

  function En(e, t, r) {
      return e.slice(t, r);
  }

  function On(e) {
      return e.length;
  }

  function Tn(e) {
      return e.length;
  }

  function $n(e, t) {
      return t.push(e), e;
  }

  var An = 1, Pn = 1, Mn = 0, _n = 0, In = 0, Bn = "";

  function Fn(e, t, r, n, o, i, a) {
      return {
          value: e,
          root: t,
          parent: r,
          type: n,
          props: o,
          children: i,
          line: An,
          column: Pn,
          length: a,
          return: ""
      };
  }

  function Nn(e, t) {
      return wn(Fn("", null, null, "", null, null, 0), e, {
          length: -e.length
      }, t);
  }

  function zn() {
      return In = _n < Mn ? Rn(Bn, _n++) : 0, Pn++, 10 === In && (Pn = 1, An++), In;
  }

  function Ln() {
      return Rn(Bn, _n);
  }

  function Dn() {
      return _n;
  }

  function Wn(e, t) {
      return En(Bn, e, t);
  }

  function Vn(e) {
      switch (e) {
        case 0:
        case 9:
        case 10:
        case 13:
        case 32:
          return 5;

        case 33:
        case 43:
        case 44:
        case 47:
        case 62:
        case 64:
        case 126:
        case 59:
        case 123:
        case 125:
          return 4;

        case 58:
          return 3;

        case 34:
        case 39:
        case 40:
        case 91:
          return 2;

        case 41:
        case 93:
          return 1;
      }
      return 0;
  }

  function Hn(e) {
      return An = Pn = 1, Mn = On(Bn = e), _n = 0, [];
  }

  function Kn(e) {
      return Bn = "", e;
  }

  function qn(e) {
      return kn(Wn(_n - 1, Gn(91 === e ? e + 2 : 40 === e ? e + 1 : e)));
  }

  function Xn(e) {
      for (;(In = Ln()) && In < 33; ) zn();
      return Vn(e) > 2 || Vn(In) > 3 ? "" : " ";
  }

  function Un(e, t) {
      for (;--t && zn() && !(In < 48 || In > 102 || In > 57 && In < 65 || In > 70 && In < 97); ) ;
      return Wn(e, Dn() + (t < 6 && 32 == Ln() && 32 == zn()));
  }

  function Gn(e) {
      for (;zn(); ) switch (In) {
        case e:
          return _n;

        case 34:
        case 39:
          34 !== e && 39 !== e && Gn(In);
          break;

        case 40:
          41 === e && Gn(e);
          break;

        case 92:
          zn();
      }
      return _n;
  }

  function Yn(e, t) {
      for (;zn() && e + In !== 57 && (e + In !== 84 || 47 !== Ln()); ) ;
      return "/*" + Wn(t, _n - 1) + "*" + Sn(47 === e ? e : zn());
  }

  function Jn(e) {
      for (;!Vn(Ln()); ) zn();
      return Wn(e, _n);
  }

  function Zn(e) {
      return Kn(Qn("", null, null, null, [ "" ], e = Hn(e), 0, [ 0 ], e));
  }

  function Qn(e, t, r, n, o, i, a, s, l) {
      for (var c = 0, u = 0, d = a, f = 0, p = 0, h = 0, m = 1, g = 1, y = 1, b = 0, v = "", x = o, S = i, w = n, k = v; g; ) switch (h = b, 
      b = zn()) {
        case 40:
          if (108 != h && 58 == Rn(k, d - 1)) {
              -1 != Cn(k += jn(qn(b), "&", "&\f"), "&\f") && (y = -1);
              break;
          }

        case 34:
        case 39:
        case 91:
          k += qn(b);
          break;

        case 9:
        case 10:
        case 13:
        case 32:
          k += Xn(h);
          break;

        case 92:
          k += Un(Dn() - 1, 7);
          continue;

        case 47:
          switch (Ln()) {
            case 42:
            case 47:
              $n(to(Yn(zn(), Dn()), t, r), l);
              break;

            default:
              k += "/";
          }
          break;

        case 123 * m:
          s[c++] = On(k) * y;

        case 125 * m:
        case 59:
        case 0:
          switch (b) {
            case 0:
            case 125:
              g = 0;

            case 59 + u:
              -1 == y && (k = jn(k, /\f/g, "")), p > 0 && On(k) - d && $n(p > 32 ? ro(k + ";", n, r, d - 1) : ro(jn(k, " ", "") + ";", n, r, d - 2), l);
              break;

            case 59:
              k += ";";

            default:
              if ($n(w = eo(k, t, r, c, u, o, s, v, x = [], S = [], d), i), 123 === b) if (0 === u) Qn(k, t, w, w, x, i, d, s, S); else switch (99 === f && 110 === Rn(k, 3) ? 100 : f) {
                case 100:
                case 108:
                case 109:
                case 115:
                  Qn(e, w, w, n && $n(eo(e, w, w, 0, 0, o, s, v, o, x = [], d), S), o, S, d, s, n ? x : S);
                  break;

                default:
                  Qn(k, w, w, w, [ "" ], S, 0, s, S);
              }
          }
          c = u = p = 0, m = y = 1, v = k = "", d = a;
          break;

        case 58:
          d = 1 + On(k), p = h;

        default:
          if (m < 1) if (123 == b) --m; else if (125 == b && 0 == m++ && 125 == (In = _n > 0 ? Rn(Bn, --_n) : 0, 
          Pn--, 10 === In && (Pn = 1, An--), In)) continue;
          switch (k += Sn(b), b * m) {
            case 38:
              y = u > 0 ? 1 : (k += "\f", -1);
              break;

            case 44:
              s[c++] = (On(k) - 1) * y, y = 1;
              break;

            case 64:
              45 === Ln() && (k += qn(zn())), f = Ln(), u = d = On(v = k += Jn(Dn())), b++;
              break;

            case 45:
              45 === h && 2 == On(k) && (m = 0);
          }
      }
      return i;
  }

  function eo(e, t, r, n, o, i, a, s, l, c, u) {
      for (var d = o - 1, f = 0 === o ? i : [ "" ], p = Tn(f), h = 0, m = 0, g = 0; h < n; ++h) for (var y = 0, b = En(e, d + 1, d = xn(m = a[h])), v = e; y < p; ++y) (v = kn(m > 0 ? f[y] + " " + b : jn(b, /&\f/g, f[y]))) && (l[g++] = v);
      return Fn(e, t, r, 0 === o ? yn : s, l, c, u);
  }

  function to(e, t, r) {
      return Fn(e, t, r, gn, Sn(In), En(e, 2, -2), 0);
  }

  function ro(e, t, r, n) {
      return Fn(e, t, r, bn, En(e, 0, n), En(e, n + 1, -1), n);
  }

  function no(e, t) {
      for (var r = "", n = Tn(e), o = 0; o < n; o++) r += t(e[o], o, e, t) || "";
      return r;
  }

  function oo(e, t, r, n) {
      switch (e.type) {
        case "@layer":
          if (e.children.length) break;

        case "@import":
        case bn:
          return e.return = e.return || e.value;

        case gn:
          return "";

        case vn:
          return e.return = e.value + "{" + no(e.children, n) + "}";

        case yn:
          e.value = e.props.join(",");
      }
      return On(r = no(e.children, n)) ? e.return = e.value + "{" + r + "}" : "";
  }

  var io = function(e, t, r) {
      for (var n = 0, o = 0; n = o, o = Ln(), 38 === n && 12 === o && (t[r] = 1), !Vn(o); ) zn();
      return Wn(e, _n);
  }, ao = function(e, t) {
      return Kn(function(e, t) {
          var r = -1, n = 44;
          do {
              switch (Vn(n)) {
                case 0:
                  38 === n && 12 === Ln() && (t[r] = 1), e[r] += io(_n - 1, t, r);
                  break;

                case 2:
                  e[r] += qn(n);
                  break;

                case 4:
                  if (44 === n) {
                      e[++r] = 58 === Ln() ? "&\f" : "", t[r] = e[r].length;
                      break;
                  }

                default:
                  e[r] += Sn(n);
              }
          } while (n = zn());
          return e;
      }(Hn(e), t));
  }, so = new WeakMap, lo = function(e) {
      if ("rule" === e.type && e.parent && !(e.length < 1)) {
          for (var t = e.value, r = e.parent, n = e.column === r.column && e.line === r.line; "rule" !== r.type; ) if (!(r = r.parent)) return;
          if ((1 !== e.props.length || 58 === t.charCodeAt(0) || so.get(r)) && !n) {
              so.set(e, !0);
              for (var o = [], i = ao(t, o), a = r.props, s = 0, l = 0; s < i.length; s++) for (var c = 0; c < a.length; c++, 
              l++) e.props[l] = o[s] ? i[s].replace(/&\f/g, a[c]) : a[c] + " " + i[s];
          }
      }
  }, co = function(e) {
      if ("decl" === e.type) {
          var t = e.value;
          108 === t.charCodeAt(0) && 98 === t.charCodeAt(2) && (e.return = "", e.value = "");
      }
  };

  function uo(e, t) {
      switch (function(e, t) {
          return 45 ^ Rn(e, 0) ? (((t << 2 ^ Rn(e, 0)) << 2 ^ Rn(e, 1)) << 2 ^ Rn(e, 2)) << 2 ^ Rn(e, 3) : 0;
      }(e, t)) {
        case 5103:
          return mn + "print-" + e + e;

        case 5737:
        case 4201:
        case 3177:
        case 3433:
        case 1641:
        case 4457:
        case 2921:
        case 5572:
        case 6356:
        case 5844:
        case 3191:
        case 6645:
        case 3005:
        case 6391:
        case 5879:
        case 5623:
        case 6135:
        case 4599:
        case 4855:
        case 4215:
        case 6389:
        case 5109:
        case 5365:
        case 5621:
        case 3829:
          return mn + e + e;

        case 5349:
        case 4246:
        case 4810:
        case 6968:
        case 2756:
          return mn + e + hn + e + pn + e + e;

        case 6828:
        case 4268:
          return mn + e + pn + e + e;

        case 6165:
          return mn + e + pn + "flex-" + e + e;

        case 5187:
          return mn + e + jn(e, /(\w+).+(:[^]+)/, mn + "box-$1$2" + pn + "flex-$1$2") + e;

        case 5443:
          return mn + e + pn + "flex-item-" + jn(e, /flex-|-self/, "") + e;

        case 4675:
          return mn + e + pn + "flex-line-pack" + jn(e, /align-content|flex-|-self/, "") + e;

        case 5548:
          return mn + e + pn + jn(e, "shrink", "negative") + e;

        case 5292:
          return mn + e + pn + jn(e, "basis", "preferred-size") + e;

        case 6060:
          return mn + "box-" + jn(e, "-grow", "") + mn + e + pn + jn(e, "grow", "positive") + e;

        case 4554:
          return mn + jn(e, /([^-])(transform)/g, "$1" + mn + "$2") + e;

        case 6187:
          return jn(jn(jn(e, /(zoom-|grab)/, mn + "$1"), /(image-set)/, mn + "$1"), e, "") + e;

        case 5495:
        case 3959:
          return jn(e, /(image-set\([^]*)/, mn + "$1$`$1");

        case 4968:
          return jn(jn(e, /(.+:)(flex-)?(.*)/, mn + "box-pack:$3" + pn + "flex-pack:$3"), /s.+-b[^;]+/, "justify") + mn + e + e;

        case 4095:
        case 3583:
        case 4068:
        case 2532:
          return jn(e, /(.+)-inline(.+)/, mn + "$1$2") + e;

        case 8116:
        case 7059:
        case 5753:
        case 5535:
        case 5445:
        case 5701:
        case 4933:
        case 4677:
        case 5533:
        case 5789:
        case 5021:
        case 4765:
          if (On(e) - 1 - t > 6) switch (Rn(e, t + 1)) {
            case 109:
              if (45 !== Rn(e, t + 4)) break;

            case 102:
              return jn(e, /(.+:)(.+)-([^]+)/, "$1" + mn + "$2-$3$1" + hn + (108 == Rn(e, t + 3) ? "$3" : "$2-$3")) + e;

            case 115:
              return ~Cn(e, "stretch") ? uo(jn(e, "stretch", "fill-available"), t) + e : e;
          }
          break;

        case 4949:
          if (115 !== Rn(e, t + 1)) break;

        case 6444:
          switch (Rn(e, On(e) - 3 - (~Cn(e, "!important") && 10))) {
            case 107:
              return jn(e, ":", ":" + mn) + e;

            case 101:
              return jn(e, /(.+:)([^;!]+)(;|!.+)?/, "$1" + mn + (45 === Rn(e, 14) ? "inline-" : "") + "box$3$1" + mn + "$2$3$1" + pn + "$2box$3") + e;
          }
          break;

        case 5936:
          switch (Rn(e, t + 11)) {
            case 114:
              return mn + e + pn + jn(e, /[svh]\w+-[tblr]{2}/, "tb") + e;

            case 108:
              return mn + e + pn + jn(e, /[svh]\w+-[tblr]{2}/, "tb-rl") + e;

            case 45:
              return mn + e + pn + jn(e, /[svh]\w+-[tblr]{2}/, "lr") + e;
          }
          return mn + e + pn + e + e;
      }
      return e;
  }

  var fo = [ function(e, t, r, n) {
      if (e.length > -1 && !e.return) switch (e.type) {
        case bn:
          e.return = uo(e.value, e.length);
          break;

        case vn:
          return no([ Nn(e, {
              value: jn(e.value, "@", "@" + mn)
          }) ], n);

        case yn:
          if (e.length) return function(e, t) {
              return e.map(t).join("");
          }(e.props, (function(t) {
              switch (function(e, t) {
                  return (e = t.exec(e)) ? e[0] : e;
              }(t, /(::plac\w+|:read-\w+)/)) {
                case ":read-only":
                case ":read-write":
                  return no([ Nn(e, {
                      props: [ jn(t, /:(read-\w+)/, ":-moz-$1") ]
                  }) ], n);

                case "::placeholder":
                  return no([ Nn(e, {
                      props: [ jn(t, /:(plac\w+)/, ":" + mn + "input-$1") ]
                  }), Nn(e, {
                      props: [ jn(t, /:(plac\w+)/, ":-moz-$1") ]
                  }), Nn(e, {
                      props: [ jn(t, /:(plac\w+)/, pn + "input-$1") ]
                  }) ], n);
              }
              return "";
          }));
      }
  } ];

  let po;

  function ho(e, t) {
      return E(e, t);
  }

  "object" == typeof document && (po = function(e) {
      var t = e.key;
      if ("css" === t) {
          var r = document.querySelectorAll("style[data-emotion]:not([data-s])");
          Array.prototype.forEach.call(r, (function(e) {
              -1 !== e.getAttribute("data-emotion").indexOf(" ") && (document.head.appendChild(e), 
              e.setAttribute("data-s", ""));
          }));
      }
      var n, o, i = e.stylisPlugins || fo, a = {}, s = [];
      n = e.container || document.head, Array.prototype.forEach.call(document.querySelectorAll('style[data-emotion^="' + t + ' "]'), (function(e) {
          for (var t = e.getAttribute("data-emotion").split(" "), r = 1; r < t.length; r++) a[t[r]] = !0;
          s.push(e);
      }));
      var l, c, u, d, f = [ oo, (d = function(e) {
          l.insert(e);
      }, function(e) {
          e.root || (e = e.return) && d(e);
      }) ], p = (c = [ lo, co ].concat(i, f), u = Tn(c), function(e, t, r, n) {
          for (var o = "", i = 0; i < u; i++) o += c[i](e, t, r, n) || "";
          return o;
      });
      o = function(e, t, r, n) {
          l = r, no(Zn(e ? e + "{" + t.styles + "}" : t.styles), p), n && (h.inserted[t.name] = !0);
      };
      var h = {
          key: t,
          sheet: new fn({
              key: t,
              container: n,
              nonce: e.nonce,
              speedy: e.speedy,
              prepend: e.prepend,
              insertionPoint: e.insertionPoint
          }),
          nonce: e.nonce,
          inserted: a,
          registered: {},
          insert: o
      };
      return h.sheet.hydrate(s), h;
  }({
      key: "css",
      prepend: !0
  }));

  const mo = B(Object.freeze(Object.defineProperty({
      __proto__: null,
      GlobalStyles: function(e) {
          const {styles: t, defaultTheme: r = {}} = e, n = "function" == typeof t ? e => {
              return t(null == (n = e) || 0 === Object.keys(n).length ? r : e);
              var n;
          } : t;
          return q.jsx(react.Global, {
              styles: n
          });
      },
      StyledEngineProvider: function(e) {
          const {injectFirst: t, children: r} = e;
          return t && po ? q.jsx(react.CacheProvider, {
              value: po,
              children: r
          }) : r;
      },
      ThemeContext: react.ThemeContext,
      css: react.css,
      default: ho,
      internal_processStyles: (e, t) => {
          Array.isArray(e.__emotion_styles) && (e.__emotion_styles = t(e.__emotion_styles));
      },
      keyframes: react.keyframes
  }, Symbol.toStringTag, {
      value: "Module"
  }))), go = B(dr), yo = B(xr), bo = B(br), vo = [ "values", "unit", "step" ], xo = e => {
      const t = Object.keys(e).map((t => ({
          key: t,
          val: e[t]
      }))) || [];
      return t.sort(((e, t) => e.val - t.val)), t.reduce(((e, t) => Lt({}, e, {
          [t.key]: t.val
      })), {});
  };

  function So(e) {
      const {values: t = {
          xs: 0,
          sm: 600,
          md: 900,
          lg: 1200,
          xl: 1536
      }, unit: r = "px", step: n = 5} = e, o = zt(e, vo), i = xo(t), a = Object.keys(i);
      function s(e) {
          return `@media (min-width:${"number" == typeof t[e] ? t[e] : e}${r})`;
      }
      function l(e) {
          return `@media (max-width:${("number" == typeof t[e] ? t[e] : e) - n / 100}${r})`;
      }
      function c(e, o) {
          const i = a.indexOf(o);
          return `@media (min-width:${"number" == typeof t[e] ? t[e] : e}${r}) and (max-width:${(-1 !== i && "number" == typeof t[a[i]] ? t[a[i]] : o) - n / 100}${r})`;
      }
      return Lt({
          keys: a,
          values: i,
          up: s,
          down: l,
          between: c,
          only: function(e) {
              return a.indexOf(e) + 1 < a.length ? c(e, a[a.indexOf(e) + 1]) : s(e);
          },
          not: function(e) {
              const t = a.indexOf(e);
              return 0 === t ? s(a[1]) : t === a.length - 1 ? l(a[t]) : c(e, a[a.indexOf(e) + 1]).replace("@media", "@media not all and");
          },
          unit: r
      }, o);
  }

  const wo = {
      borderRadius: 4
  };

  function ko(e, t) {
      return t ? ur(e, t, {
          clone: !1
      }) : e;
  }

  const jo = {
      xs: 0,
      sm: 600,
      md: 900,
      lg: 1200,
      xl: 1536
  }, Co = {
      keys: [ "xs", "sm", "md", "lg", "xl" ],
      up: e => `@media (min-width:${jo[e]}px)`
  };

  function Ro(e, t, r) {
      const n = e.theme || {};
      if (Array.isArray(t)) {
          const e = n.breakpoints || Co;
          return t.reduce(((n, o, i) => (n[e.up(e.keys[i])] = r(t[i]), n)), {});
      }
      if ("object" == typeof t) {
          const e = n.breakpoints || Co;
          return Object.keys(t).reduce(((n, o) => {
              if (-1 !== Object.keys(e.values || jo).indexOf(o)) {
                  n[e.up(o)] = r(t[o], o);
              } else {
                  const e = o;
                  n[e] = t[e];
              }
              return n;
          }), {});
      }
      return r(t);
  }

  function Eo(e, t, r = !0) {
      if (!t || "string" != typeof t) return null;
      if (e && e.vars && r) {
          const r = `vars.${t}`.split(".").reduce(((e, t) => e && e[t] ? e[t] : null), e);
          if (null != r) return r;
      }
      return t.split(".").reduce(((e, t) => e && null != e[t] ? e[t] : null), e);
  }

  function Oo(e, t, r, n = r) {
      let o;
      return o = "function" == typeof e ? e(r) : Array.isArray(e) ? e[r] || n : Eo(e, r) || n, 
      t && (o = t(o, n, e)), o;
  }

  function To(e) {
      const {prop: t, cssProperty: r = e.prop, themeKey: n, transform: o} = e, i = e => {
          if (null == e[t]) return null;
          const i = e[t], a = Eo(e.theme, n) || {};
          return Ro(e, i, (e => {
              let n = Oo(a, o, e);
              return e === n && "string" == typeof e && (n = Oo(a, o, `${t}${"default" === e ? "" : vr(e)}`, e)), 
              !1 === r ? n : {
                  [r]: n
              };
          }));
      };
      return i.propTypes = {}, i.filterProps = [ t ], i;
  }

  const $o = {
      m: "margin",
      p: "padding"
  }, Ao = {
      t: "Top",
      r: "Right",
      b: "Bottom",
      l: "Left",
      x: [ "Left", "Right" ],
      y: [ "Top", "Bottom" ]
  }, Po = {
      marginX: "mx",
      marginY: "my",
      paddingX: "px",
      paddingY: "py"
  }, Mo = function(e) {
      const t = {};
      return r => (void 0 === t[r] && (t[r] = e(r)), t[r]);
  }((e => {
      if (e.length > 2) {
          if (!Po[e]) return [ e ];
          e = Po[e];
      }
      const [t, r] = e.split(""), n = $o[t], o = Ao[r] || "";
      return Array.isArray(o) ? o.map((e => n + e)) : [ n + o ];
  })), _o = [ "m", "mt", "mr", "mb", "ml", "mx", "my", "margin", "marginTop", "marginRight", "marginBottom", "marginLeft", "marginX", "marginY", "marginInline", "marginInlineStart", "marginInlineEnd", "marginBlock", "marginBlockStart", "marginBlockEnd" ], Io = [ "p", "pt", "pr", "pb", "pl", "px", "py", "padding", "paddingTop", "paddingRight", "paddingBottom", "paddingLeft", "paddingX", "paddingY", "paddingInline", "paddingInlineStart", "paddingInlineEnd", "paddingBlock", "paddingBlockStart", "paddingBlockEnd" ];

  function Bo(e, t, r, n) {
      var o;
      const i = null != (o = Eo(e, t, !1)) ? o : r;
      return "number" == typeof i ? e => "string" == typeof e ? e : i * e : Array.isArray(i) ? e => "string" == typeof e ? e : i[e] : "function" == typeof i ? i : () => {};
  }

  function Fo(e) {
      return Bo(e, "spacing", 8);
  }

  function No(e, t) {
      if ("string" == typeof t || null == t) return t;
      const r = e(Math.abs(t));
      return t >= 0 ? r : "number" == typeof r ? -r : `-${r}`;
  }

  function zo(e, t, r, n) {
      if (-1 === t.indexOf(r)) return null;
      const o = function(e, t) {
          return r => e.reduce(((e, n) => (e[n] = No(t, r), e)), {});
      }(Mo(r), n);
      return Ro(e, e[r], o);
  }

  function Lo(e, t) {
      const r = Fo(e.theme);
      return Object.keys(e).map((n => zo(e, t, n, r))).reduce(ko, {});
  }

  function Do(e) {
      return Lo(e, _o);
  }

  function Wo(e) {
      return Lo(e, Io);
  }

  function Vo(...e) {
      const t = e.reduce(((e, t) => (t.filterProps.forEach((r => {
          e[r] = t;
      })), e)), {}), r = e => Object.keys(e).reduce(((r, n) => t[n] ? ko(r, t[n](e)) : r), {});
      return r.propTypes = {}, r.filterProps = e.reduce(((e, t) => e.concat(t.filterProps)), []), 
      r;
  }

  function Ho(e) {
      return "number" != typeof e ? e : `${e}px solid`;
  }

  function Ko(e, t) {
      return To({
          prop: e,
          themeKey: "borders",
          transform: t
      });
  }

  Do.propTypes = {}, Do.filterProps = _o, Wo.propTypes = {}, Wo.filterProps = Io;

  const qo = Ko("border", Ho), Xo = Ko("borderTop", Ho), Uo = Ko("borderRight", Ho), Go = Ko("borderBottom", Ho), Yo = Ko("borderLeft", Ho), Jo = Ko("borderColor"), Zo = Ko("borderTopColor"), Qo = Ko("borderRightColor"), ei = Ko("borderBottomColor"), ti = Ko("borderLeftColor"), ri = Ko("outline", Ho), ni = Ko("outlineColor"), oi = e => {
      if (void 0 !== e.borderRadius && null !== e.borderRadius) {
          const t = Bo(e.theme, "shape.borderRadius", 4), r = e => ({
              borderRadius: No(t, e)
          });
          return Ro(e, e.borderRadius, r);
      }
      return null;
  };

  oi.propTypes = {}, oi.filterProps = [ "borderRadius" ], Vo(qo, Xo, Uo, Go, Yo, Jo, Zo, Qo, ei, ti, oi, ri, ni);

  const ii = e => {
      if (void 0 !== e.gap && null !== e.gap) {
          const t = Bo(e.theme, "spacing", 8), r = e => ({
              gap: No(t, e)
          });
          return Ro(e, e.gap, r);
      }
      return null;
  };

  ii.propTypes = {}, ii.filterProps = [ "gap" ];

  const ai = e => {
      if (void 0 !== e.columnGap && null !== e.columnGap) {
          const t = Bo(e.theme, "spacing", 8), r = e => ({
              columnGap: No(t, e)
          });
          return Ro(e, e.columnGap, r);
      }
      return null;
  };

  ai.propTypes = {}, ai.filterProps = [ "columnGap" ];

  const si = e => {
      if (void 0 !== e.rowGap && null !== e.rowGap) {
          const t = Bo(e.theme, "spacing", 8), r = e => ({
              rowGap: No(t, e)
          });
          return Ro(e, e.rowGap, r);
      }
      return null;
  };

  si.propTypes = {}, si.filterProps = [ "rowGap" ];

  function li(e, t) {
      return "grey" === t ? t : e;
  }

  Vo(ii, ai, si, To({
      prop: "gridColumn"
  }), To({
      prop: "gridRow"
  }), To({
      prop: "gridAutoFlow"
  }), To({
      prop: "gridAutoColumns"
  }), To({
      prop: "gridAutoRows"
  }), To({
      prop: "gridTemplateColumns"
  }), To({
      prop: "gridTemplateRows"
  }), To({
      prop: "gridTemplateAreas"
  }), To({
      prop: "gridArea"
  }));

  function ci(e) {
      return e <= 1 && 0 !== e ? 100 * e + "%" : e;
  }

  Vo(To({
      prop: "color",
      themeKey: "palette",
      transform: li
  }), To({
      prop: "bgcolor",
      cssProperty: "backgroundColor",
      themeKey: "palette",
      transform: li
  }), To({
      prop: "backgroundColor",
      themeKey: "palette",
      transform: li
  }));

  const ui = To({
      prop: "width",
      transform: ci
  }), di = e => {
      if (void 0 !== e.maxWidth && null !== e.maxWidth) {
          const t = t => {
              var r, n;
              const o = (null == (r = e.theme) || null == (r = r.breakpoints) || null == (r = r.values) ? void 0 : r[t]) || jo[t];
              return o ? "px" !== (null == (n = e.theme) || null == (n = n.breakpoints) ? void 0 : n.unit) ? {
                  maxWidth: `${o}${e.theme.breakpoints.unit}`
              } : {
                  maxWidth: o
              } : {
                  maxWidth: ci(t)
              };
          };
          return Ro(e, e.maxWidth, t);
      }
      return null;
  };

  di.filterProps = [ "maxWidth" ];

  const fi = To({
      prop: "minWidth",
      transform: ci
  }), pi = To({
      prop: "height",
      transform: ci
  }), hi = To({
      prop: "maxHeight",
      transform: ci
  }), mi = To({
      prop: "minHeight",
      transform: ci
  });

  To({
      prop: "size",
      cssProperty: "width",
      transform: ci
  }), To({
      prop: "size",
      cssProperty: "height",
      transform: ci
  });

  Vo(ui, di, fi, pi, hi, mi, To({
      prop: "boxSizing"
  }));

  const gi = {
      border: {
          themeKey: "borders",
          transform: Ho
      },
      borderTop: {
          themeKey: "borders",
          transform: Ho
      },
      borderRight: {
          themeKey: "borders",
          transform: Ho
      },
      borderBottom: {
          themeKey: "borders",
          transform: Ho
      },
      borderLeft: {
          themeKey: "borders",
          transform: Ho
      },
      borderColor: {
          themeKey: "palette"
      },
      borderTopColor: {
          themeKey: "palette"
      },
      borderRightColor: {
          themeKey: "palette"
      },
      borderBottomColor: {
          themeKey: "palette"
      },
      borderLeftColor: {
          themeKey: "palette"
      },
      outline: {
          themeKey: "borders",
          transform: Ho
      },
      outlineColor: {
          themeKey: "palette"
      },
      borderRadius: {
          themeKey: "shape.borderRadius",
          style: oi
      },
      color: {
          themeKey: "palette",
          transform: li
      },
      bgcolor: {
          themeKey: "palette",
          cssProperty: "backgroundColor",
          transform: li
      },
      backgroundColor: {
          themeKey: "palette",
          transform: li
      },
      p: {
          style: Wo
      },
      pt: {
          style: Wo
      },
      pr: {
          style: Wo
      },
      pb: {
          style: Wo
      },
      pl: {
          style: Wo
      },
      px: {
          style: Wo
      },
      py: {
          style: Wo
      },
      padding: {
          style: Wo
      },
      paddingTop: {
          style: Wo
      },
      paddingRight: {
          style: Wo
      },
      paddingBottom: {
          style: Wo
      },
      paddingLeft: {
          style: Wo
      },
      paddingX: {
          style: Wo
      },
      paddingY: {
          style: Wo
      },
      paddingInline: {
          style: Wo
      },
      paddingInlineStart: {
          style: Wo
      },
      paddingInlineEnd: {
          style: Wo
      },
      paddingBlock: {
          style: Wo
      },
      paddingBlockStart: {
          style: Wo
      },
      paddingBlockEnd: {
          style: Wo
      },
      m: {
          style: Do
      },
      mt: {
          style: Do
      },
      mr: {
          style: Do
      },
      mb: {
          style: Do
      },
      ml: {
          style: Do
      },
      mx: {
          style: Do
      },
      my: {
          style: Do
      },
      margin: {
          style: Do
      },
      marginTop: {
          style: Do
      },
      marginRight: {
          style: Do
      },
      marginBottom: {
          style: Do
      },
      marginLeft: {
          style: Do
      },
      marginX: {
          style: Do
      },
      marginY: {
          style: Do
      },
      marginInline: {
          style: Do
      },
      marginInlineStart: {
          style: Do
      },
      marginInlineEnd: {
          style: Do
      },
      marginBlock: {
          style: Do
      },
      marginBlockStart: {
          style: Do
      },
      marginBlockEnd: {
          style: Do
      },
      displayPrint: {
          cssProperty: !1,
          transform: e => ({
              "@media print": {
                  display: e
              }
          })
      },
      display: {},
      overflow: {},
      textOverflow: {},
      visibility: {},
      whiteSpace: {},
      flexBasis: {},
      flexDirection: {},
      flexWrap: {},
      justifyContent: {},
      alignItems: {},
      alignContent: {},
      order: {},
      flex: {},
      flexGrow: {},
      flexShrink: {},
      alignSelf: {},
      justifyItems: {},
      justifySelf: {},
      gap: {
          style: ii
      },
      rowGap: {
          style: si
      },
      columnGap: {
          style: ai
      },
      gridColumn: {},
      gridRow: {},
      gridAutoFlow: {},
      gridAutoColumns: {},
      gridAutoRows: {},
      gridTemplateColumns: {},
      gridTemplateRows: {},
      gridTemplateAreas: {},
      gridArea: {},
      position: {},
      zIndex: {
          themeKey: "zIndex"
      },
      top: {},
      right: {},
      bottom: {},
      left: {},
      boxShadow: {
          themeKey: "shadows"
      },
      width: {
          transform: ci
      },
      maxWidth: {
          style: di
      },
      minWidth: {
          transform: ci
      },
      height: {
          transform: ci
      },
      maxHeight: {
          transform: ci
      },
      minHeight: {
          transform: ci
      },
      boxSizing: {},
      fontFamily: {
          themeKey: "typography"
      },
      fontSize: {
          themeKey: "typography"
      },
      fontStyle: {
          themeKey: "typography"
      },
      fontWeight: {
          themeKey: "typography"
      },
      letterSpacing: {},
      textTransform: {},
      lineHeight: {},
      textAlign: {},
      typography: {
          cssProperty: !1,
          themeKey: "typography"
      }
  };

  function yi() {
      function e(e, t, r, n) {
          const o = {
              [e]: t,
              theme: r
          }, i = n[e];
          if (!i) return {
              [e]: t
          };
          const {cssProperty: a = e, themeKey: s, transform: l, style: c} = i;
          if (null == t) return null;
          if ("typography" === s && "inherit" === t) return {
              [e]: t
          };
          const u = Eo(r, s) || {};
          if (c) return c(o);
          return Ro(o, t, (t => {
              let r = Oo(u, l, t);
              return t === r && "string" == typeof t && (r = Oo(u, l, `${e}${"default" === t ? "" : vr(t)}`, t)), 
              !1 === a ? r : {
                  [a]: r
              };
          }));
      }
      return function t(r) {
          var n;
          const {sx: o, theme: i = {}} = r || {};
          if (!o) return null;
          const a = null != (n = i.unstable_sxConfig) ? n : gi;
          function s(r) {
              let n = r;
              if ("function" == typeof r) n = r(i); else if ("object" != typeof r) return r;
              if (!n) return null;
              const o = function(e = {}) {
                  var t;
                  return (null == (t = e.keys) ? void 0 : t.reduce(((t, r) => (t[e.up(r)] = {}, t)), {})) || {};
              }(i.breakpoints), s = Object.keys(o);
              let l = o;
              return Object.keys(n).forEach((r => {
                  const o = (s = n[r], c = i, "function" == typeof s ? s(c) : s);
                  var s, c;
                  if (null != o) if ("object" == typeof o) if (a[r]) l = ko(l, e(r, o, i, a)); else {
                      const e = Ro({
                          theme: i
                      }, o, (e => ({
                          [r]: e
                      })));
                      !function(...e) {
                          const t = e.reduce(((e, t) => e.concat(Object.keys(t))), []), r = new Set(t);
                          return e.every((e => r.size === Object.keys(e).length));
                      }(e, o) ? l = ko(l, e) : l[r] = t({
                          sx: o,
                          theme: i
                      });
                  } else l = ko(l, e(r, o, i, a));
              })), c = l, s.reduce(((e, t) => {
                  const r = e[t];
                  return (!r || 0 === Object.keys(r).length) && delete e[t], e;
              }), c);
              var c;
          }
          return Array.isArray(o) ? o.map(s) : s(o);
      };
  }

  const bi = yi();

  bi.filterProps = [ "sx" ];

  const vi = bi;

  function xi(e, t) {
      const r = this;
      if (r.vars && "function" == typeof r.getColorSchemeSelector) {
          return {
              [r.getColorSchemeSelector(e).replace(/(\[[^\]]+\])/, "*:where($1)")]: t
          };
      }
      return r.palette.mode === e ? t : {};
  }

  const Si = [ "breakpoints", "palette", "spacing", "shape" ];

  function wi(e = {}, ...t) {
      const {breakpoints: r = {}, palette: n = {}, spacing: o, shape: i = {}} = e, a = zt(e, Si), s = So(r), l = function(e = 8) {
          if (e.mui) return e;
          const t = Fo({
              spacing: e
          }), r = (...e) => (0 === e.length ? [ 1 ] : e).map((e => {
              const r = t(e);
              return "number" == typeof r ? `${r}px` : r;
          })).join(" ");
          return r.mui = !0, r;
      }(o);
      let c = ur({
          breakpoints: s,
          direction: "ltr",
          components: {},
          palette: Lt({
              mode: "light"
          }, n),
          spacing: l,
          shape: Lt({}, wo, i)
      }, a);
      return c.applyStyles = xi, c = t.reduce(((e, t) => ur(e, t)), c), c.unstable_sxConfig = Lt({}, gi, null == a ? void 0 : a.unstable_sxConfig), 
      c.unstable_sx = function(e) {
          return vi({
              sx: e,
              theme: this
          });
      }, c;
  }

  const ki = B(Object.freeze(Object.defineProperty({
      __proto__: null,
      default: wi,
      private_createBreakpoints: So,
      unstable_applyStyles: xi
  }, Symbol.toStringTag, {
      value: "Module"
  }))), ji = [ "sx" ], Ci = e => {
      var t, r;
      const n = {
          systemProps: {},
          otherProps: {}
      }, o = null != (t = null == e || null == (r = e.theme) ? void 0 : r.unstable_sxConfig) ? t : gi;
      return Object.keys(e).forEach((t => {
          o[t] ? n.systemProps[t] = e[t] : n.otherProps[t] = e[t];
      })), n;
  };

  function Ri(e) {
      const {sx: t} = e, r = zt(e, ji), {systemProps: n, otherProps: o} = Ci(r);
      let i;
      return i = Array.isArray(t) ? [ n, ...t ] : "function" == typeof t ? (...e) => {
          const r = t(...e);
          return lr(r) ? Lt({}, n, r) : n;
      } : Lt({}, n, t), Lt({}, o, {
          sx: i
      });
  }

  const Ei = B(Object.freeze(Object.defineProperty({
      __proto__: null,
      default: vi,
      extendSxProp: Ri,
      unstable_createStyleFunctionSx: yi,
      unstable_defaultSxConfig: gi
  }, Symbol.toStringTag, {
      value: "Module"
  })));

  var Oi = ln;

  Object.defineProperty(on, "__esModule", {
      value: !0
  });

  var Ti = on.default = function(e = {}) {
      const {themeId: t, defaultTheme: r = Wi, rootShouldForwardProp: n = Di, slotShouldForwardProp: o = Di} = e, i = e => (0, Bi.default)((0, Ai.default)({}, e, {
          theme: Hi((0, Ai.default)({}, e, {
              defaultTheme: r,
              themeId: t
          }))
      }));
      return i.__mui_systemSx = !0, (e, a = {}) => {
          (0, Mi.internal_processStyles)(e, (e => e.filter((e => !(null != e && e.__mui_systemSx)))));
          const {name: s, slot: l, skipVariantsResolver: c, skipSx: u, overridesResolver: d = Ki(Vi(l))} = a, f = (0, Pi.default)(a, zi), p = void 0 !== c ? c : l && "Root" !== l && "root" !== l || !1, h = u || !1;
          let m = Di;
          "Root" === l || "root" === l ? m = n : l ? m = o : function(e) {
              return "string" == typeof e && e.charCodeAt(0) > 96;
          }(e) && (m = void 0);
          const g = (0, Mi.default)(e, (0, Ai.default)({
              shouldForwardProp: m,
              label: undefined
          }, f)), y = e => "function" == typeof e && e.__emotion_real !== e || (0, _i.isPlainObject)(e) ? n => qi(e, (0, Ai.default)({}, n, {
              theme: Hi({
                  theme: n.theme,
                  defaultTheme: r,
                  themeId: t
              })
          })) : e, b = (n, ...o) => {
              let a = y(n);
              const l = o ? o.map(y) : [];
              s && d && l.push((e => {
                  const n = Hi((0, Ai.default)({}, e, {
                      defaultTheme: r,
                      themeId: t
                  }));
                  if (!n.components || !n.components[s] || !n.components[s].styleOverrides) return null;
                  const o = n.components[s].styleOverrides, i = {};
                  return Object.entries(o).forEach((([t, r]) => {
                      i[t] = qi(r, (0, Ai.default)({}, e, {
                          theme: n
                      }));
                  })), d(e, i);
              })), s && !p && l.push((e => {
                  var n;
                  const o = Hi((0, Ai.default)({}, e, {
                      defaultTheme: r,
                      themeId: t
                  }));
                  return qi({
                      variants: null == o || null == (n = o.components) || null == (n = n[s]) ? void 0 : n.variants
                  }, (0, Ai.default)({}, e, {
                      theme: o
                  }));
              })), h || l.push(i);
              const c = l.length - o.length;
              if (Array.isArray(n) && c > 0) {
                  const e = new Array(c).fill("");
                  a = [ ...n, ...e ], a.raw = [ ...n.raw, ...e ];
              }
              const u = g(a, ...l);
              return e.muiName && (u.muiName = e.muiName), u;
          };
          return g.withConfig && (b.withConfig = g.withConfig), b;
      };
  }, $i = on.shouldForwardProp = Di;

  on.systemDefaultTheme = void 0;

  var Ai = Oi((sn || (sn = 1, function(e) {
      function t() {
          return e.exports = t = Object.assign ? Object.assign.bind() : function(e) {
              for (var t = 1; t < arguments.length; t++) {
                  var r = arguments[t];
                  for (var n in r) Object.prototype.hasOwnProperty.call(r, n) && (e[n] = r[n]);
              }
              return e;
          }, e.exports.__esModule = !0, e.exports.default = e.exports, t.apply(this, arguments);
      }
      e.exports = t, e.exports.__esModule = !0, e.exports.default = e.exports;
  }(cn)), cn.exports)), Pi = Oi((un || (un = 1, function(e) {
      e.exports = function(e, t) {
          if (null == e) return {};
          var r, n, o = {}, i = Object.keys(e);
          for (n = 0; n < i.length; n++) r = i[n], t.indexOf(r) >= 0 || (o[r] = e[r]);
          return o;
      }, e.exports.__esModule = !0, e.exports.default = e.exports;
  }(dn)), dn.exports)), Mi = function(e, t) {
      if (!t && e && e.__esModule) return e;
      if (null === e || "object" != typeof e && "function" != typeof e) return {
          default: e
      };
      var r = Li(t);
      if (r && r.has(e)) return r.get(e);
      var n = {
          __proto__: null
      }, o = Object.defineProperty && Object.getOwnPropertyDescriptor;
      for (var i in e) if ("default" !== i && Object.prototype.hasOwnProperty.call(e, i)) {
          var a = o ? Object.getOwnPropertyDescriptor(e, i) : null;
          a && (a.get || a.set) ? Object.defineProperty(n, i, a) : n[i] = e[i];
      }
      return n.default = e, r && r.set(e, n), n;
  }(mo), _i = go;

  Oi(yo), Oi(bo);

  var Ii = Oi(ki), Bi = Oi(Ei);

  const Fi = [ "ownerState" ], Ni = [ "variants" ], zi = [ "name", "slot", "skipVariantsResolver", "skipSx", "overridesResolver" ];

  function Li(e) {
      if ("function" != typeof WeakMap) return null;
      var t = new WeakMap, r = new WeakMap;
      return (Li = function(e) {
          return e ? r : t;
      })(e);
  }

  function Di(e) {
      return "ownerState" !== e && "theme" !== e && "sx" !== e && "as" !== e;
  }

  const Wi = on.systemDefaultTheme = (0, Ii.default)(), Vi = e => e ? e.charAt(0).toLowerCase() + e.slice(1) : e;

  function Hi({defaultTheme: e, theme: t, themeId: r}) {
      return n = t, 0 === Object.keys(n).length ? e : t[r] || t;
      var n;
  }

  function Ki(e) {
      return e ? (t, r) => r[e] : null;
  }

  function qi(e, t) {
      let {ownerState: r} = t, n = (0, Pi.default)(t, Fi);
      const o = "function" == typeof e ? e((0, Ai.default)({
          ownerState: r
      }, n)) : e;
      if (Array.isArray(o)) return o.flatMap((e => qi(e, (0, Ai.default)({
          ownerState: r
      }, n))));
      if (o && "object" == typeof o && Array.isArray(o.variants)) {
          const {variants: e = []} = o;
          let t = (0, Pi.default)(o, Ni);
          return e.forEach((e => {
              let o = !0;
              "function" == typeof e.props ? o = e.props((0, Ai.default)({
                  ownerState: r
              }, n, r)) : Object.keys(e.props).forEach((t => {
                  (null == r ? void 0 : r[t]) !== e.props[t] && n[t] !== e.props[t] && (o = !1);
              })), o && (Array.isArray(t) || (t = [ t ]), t.push("function" == typeof e.style ? e.style((0, Ai.default)({
                  ownerState: r
              }, n, r)) : e.style));
          })), t;
      }
      return o;
  }

  var Xi = {};

  const Ui = B(pr), Gi = B(Yr);

  var Yi = ln;

  Object.defineProperty(Xi, "__esModule", {
      value: !0
  }), Xi.alpha = ca, Xi.blend = function(e, t, r, n = 1) {
      const o = (e, t) => Math.round((e ** (1 / n) * (1 - r) + t ** (1 / n) * r) ** n), i = oa(e), a = oa(t);
      return aa({
          type: "rgb",
          values: [ o(i.values[0], a.values[0]), o(i.values[1], a.values[1]), o(i.values[2], a.values[2]) ]
      });
  }, Xi.colorChannel = void 0;

  var Ji = Xi.darken = ua;

  Xi.decomposeColor = oa, Xi.emphasize = function(e, t = .15) {
      return la(e) > .5 ? ua(e, t) : da(e, t);
  };

  var Zi = Xi.getContrastRatio = function(e, t) {
      const r = la(e), n = la(t);
      return (Math.max(r, n) + .05) / (Math.min(r, n) + .05);
  };

  Xi.getLuminance = la, Xi.hexToRgb = na, Xi.hslToRgb = sa;

  var Qi = Xi.lighten = da;

  Xi.private_safeAlpha = function(e, t, r) {
      try {
          return ca(e, t);
      } catch (n) {
          return e;
      }
  }, Xi.private_safeColorChannel = void 0, Xi.private_safeDarken = function(e, t, r) {
      try {
          return ua(e, t);
      } catch (n) {
          return e;
      }
  }, Xi.private_safeEmphasize = function e(t, r, n) {
      try {
          return e(t, r);
      } catch (o) {
          return t;
      }
  }, Xi.private_safeLighten = function(e, t, r) {
      try {
          return da(e, t);
      } catch (n) {
          return e;
      }
  }, Xi.recomposeColor = aa, Xi.rgbToHex = function(e) {
      if (0 === e.indexOf("#")) return e;
      const {values: t} = oa(e);
      return `#${t.map(((e, t) => function(e) {
        const t = e.toString(16);
        return 1 === t.length ? `0${t}` : t;
    }(3 === t ? Math.round(255 * e) : e))).join("")}`;
  };

  var ea = Yi(Ui), ta = Yi(Gi);

  function ra(e, t = 0, r = 1) {
      return (0, ta.default)(e, t, r);
  }

  function na(e) {
      e = e.slice(1);
      const t = new RegExp(`.{1,${e.length >= 6 ? 2 : 1}}`, "g");
      let r = e.match(t);
      return r && 1 === r[0].length && (r = r.map((e => e + e))), r ? `rgb${4 === r.length ? "a" : ""}(${r.map(((e, t) => t < 3 ? parseInt(e, 16) : Math.round(parseInt(e, 16) / 255 * 1e3) / 1e3)).join(", ")})` : "";
  }

  function oa(e) {
      if (e.type) return e;
      if ("#" === e.charAt(0)) return oa(na(e));
      const t = e.indexOf("("), r = e.substring(0, t);
      if (-1 === [ "rgb", "rgba", "hsl", "hsla", "color" ].indexOf(r)) throw new Error((0, ea.default)(9, e));
      let n, o = e.substring(t + 1, e.length - 1);
      if ("color" === r) {
          if (o = o.split(" "), n = o.shift(), 4 === o.length && "/" === o[3].charAt(0) && (o[3] = o[3].slice(1)), 
          -1 === [ "srgb", "display-p3", "a98-rgb", "prophoto-rgb", "rec-2020" ].indexOf(n)) throw new Error((0, ea.default)(10, n));
      } else o = o.split(",");
      return o = o.map((e => parseFloat(e))), {
          type: r,
          values: o,
          colorSpace: n
      };
  }

  const ia = e => {
      const t = oa(e);
      return t.values.slice(0, 3).map(((e, r) => -1 !== t.type.indexOf("hsl") && 0 !== r ? `${e}%` : e)).join(" ");
  };

  Xi.colorChannel = ia;

  function aa(e) {
      const {type: t, colorSpace: r} = e;
      let {values: n} = e;
      return -1 !== t.indexOf("rgb") ? n = n.map(((e, t) => t < 3 ? parseInt(e, 10) : e)) : -1 !== t.indexOf("hsl") && (n[1] = `${n[1]}%`, 
      n[2] = `${n[2]}%`), n = -1 !== t.indexOf("color") ? `${r} ${n.join(" ")}` : `${n.join(", ")}`, 
      `${t}(${n})`;
  }

  function sa(e) {
      e = oa(e);
      const {values: t} = e, r = t[0], n = t[1] / 100, o = t[2] / 100, i = n * Math.min(o, 1 - o), a = (e, t = (e + r / 30) % 12) => o - i * Math.max(Math.min(t - 3, 9 - t, 1), -1);
      let s = "rgb";
      const l = [ Math.round(255 * a(0)), Math.round(255 * a(8)), Math.round(255 * a(4)) ];
      return "hsla" === e.type && (s += "a", l.push(t[3])), aa({
          type: s,
          values: l
      });
  }

  function la(e) {
      let t = "hsl" === (e = oa(e)).type || "hsla" === e.type ? oa(sa(e)).values : e.values;
      return t = t.map((t => ("color" !== e.type && (t /= 255), t <= .03928 ? t / 12.92 : ((t + .055) / 1.055) ** 2.4))), 
      Number((.2126 * t[0] + .7152 * t[1] + .0722 * t[2]).toFixed(3));
  }

  function ca(e, t) {
      return e = oa(e), t = ra(t), "rgb" !== e.type && "hsl" !== e.type || (e.type += "a"), 
      "color" === e.type ? e.values[3] = `/${t}` : e.values[3] = t, aa(e);
  }

  function ua(e, t) {
      if (e = oa(e), t = ra(t), -1 !== e.type.indexOf("hsl")) e.values[2] *= 1 - t; else if (-1 !== e.type.indexOf("rgb") || -1 !== e.type.indexOf("color")) for (let r = 0; r < 3; r += 1) e.values[r] *= 1 - t;
      return aa(e);
  }

  function da(e, t) {
      if (e = oa(e), t = ra(t), -1 !== e.type.indexOf("hsl")) e.values[2] += (100 - e.values[2]) * t; else if (-1 !== e.type.indexOf("rgb")) for (let r = 0; r < 3; r += 1) e.values[r] += (255 - e.values[r]) * t; else if (-1 !== e.type.indexOf("color")) for (let r = 0; r < 3; r += 1) e.values[r] += (1 - e.values[r]) * t;
      return aa(e);
  }

  Xi.private_safeColorChannel = (e, t) => {
      try {
          return ia(e);
      } catch (r) {
          return e;
      }
  };

  const fa = {
      black: "#000",
      white: "#fff"
  }, pa = {
      50: "#fafafa",
      100: "#f5f5f5",
      200: "#eeeeee",
      300: "#e0e0e0",
      400: "#bdbdbd",
      500: "#9e9e9e",
      600: "#757575",
      700: "#616161",
      800: "#424242",
      900: "#212121",
      A100: "#f5f5f5",
      A200: "#eeeeee",
      A400: "#bdbdbd",
      A700: "#616161"
  }, ha = {
      50: "#f3e5f5",
      100: "#e1bee7",
      200: "#ce93d8",
      300: "#ba68c8",
      400: "#ab47bc",
      500: "#9c27b0",
      600: "#8e24aa",
      700: "#7b1fa2",
      800: "#6a1b9a",
      900: "#4a148c",
      A100: "#ea80fc",
      A200: "#e040fb",
      A400: "#d500f9",
      A700: "#aa00ff"
  }, ma = {
      50: "#ffebee",
      100: "#ffcdd2",
      200: "#ef9a9a",
      300: "#e57373",
      400: "#ef5350",
      500: "#f44336",
      600: "#e53935",
      700: "#d32f2f",
      800: "#c62828",
      900: "#b71c1c",
      A100: "#ff8a80",
      A200: "#ff5252",
      A400: "#ff1744",
      A700: "#d50000"
  }, ga = {
      50: "#fff3e0",
      100: "#ffe0b2",
      200: "#ffcc80",
      300: "#ffb74d",
      400: "#ffa726",
      500: "#ff9800",
      600: "#fb8c00",
      700: "#f57c00",
      800: "#ef6c00",
      900: "#e65100",
      A100: "#ffd180",
      A200: "#ffab40",
      A400: "#ff9100",
      A700: "#ff6d00"
  }, ya = {
      50: "#e3f2fd",
      100: "#bbdefb",
      200: "#90caf9",
      300: "#64b5f6",
      400: "#42a5f5",
      500: "#2196f3",
      600: "#1e88e5",
      700: "#1976d2",
      800: "#1565c0",
      900: "#0d47a1",
      A100: "#82b1ff",
      A200: "#448aff",
      A400: "#2979ff",
      A700: "#2962ff"
  }, ba = {
      50: "#e1f5fe",
      100: "#b3e5fc",
      200: "#81d4fa",
      300: "#4fc3f7",
      400: "#29b6f6",
      500: "#03a9f4",
      600: "#039be5",
      700: "#0288d1",
      800: "#0277bd",
      900: "#01579b",
      A100: "#80d8ff",
      A200: "#40c4ff",
      A400: "#00b0ff",
      A700: "#0091ea"
  }, va = {
      50: "#e8f5e9",
      100: "#c8e6c9",
      200: "#a5d6a7",
      300: "#81c784",
      400: "#66bb6a",
      500: "#4caf50",
      600: "#43a047",
      700: "#388e3c",
      800: "#2e7d32",
      900: "#1b5e20",
      A100: "#b9f6ca",
      A200: "#69f0ae",
      A400: "#00e676",
      A700: "#00c853"
  }, xa = [ "mode", "contrastThreshold", "tonalOffset" ], Sa = {
      text: {
          primary: "rgba(0, 0, 0, 0.87)",
          secondary: "rgba(0, 0, 0, 0.6)",
          disabled: "rgba(0, 0, 0, 0.38)"
      },
      divider: "rgba(0, 0, 0, 0.12)",
      background: {
          paper: fa.white,
          default: fa.white
      },
      action: {
          active: "rgba(0, 0, 0, 0.54)",
          hover: "rgba(0, 0, 0, 0.04)",
          hoverOpacity: .04,
          selected: "rgba(0, 0, 0, 0.08)",
          selectedOpacity: .08,
          disabled: "rgba(0, 0, 0, 0.26)",
          disabledBackground: "rgba(0, 0, 0, 0.12)",
          disabledOpacity: .38,
          focus: "rgba(0, 0, 0, 0.12)",
          focusOpacity: .12,
          activatedOpacity: .12
      }
  }, wa = {
      text: {
          primary: fa.white,
          secondary: "rgba(255, 255, 255, 0.7)",
          disabled: "rgba(255, 255, 255, 0.5)",
          icon: "rgba(255, 255, 255, 0.5)"
      },
      divider: "rgba(255, 255, 255, 0.12)",
      background: {
          paper: "#121212",
          default: "#121212"
      },
      action: {
          active: fa.white,
          hover: "rgba(255, 255, 255, 0.08)",
          hoverOpacity: .08,
          selected: "rgba(255, 255, 255, 0.16)",
          selectedOpacity: .16,
          disabled: "rgba(255, 255, 255, 0.3)",
          disabledBackground: "rgba(255, 255, 255, 0.12)",
          disabledOpacity: .38,
          focus: "rgba(255, 255, 255, 0.12)",
          focusOpacity: .12,
          activatedOpacity: .24
      }
  };

  function ka(e, t, r, n) {
      const o = n.light || n, i = n.dark || 1.5 * n;
      e[t] || (e.hasOwnProperty(r) ? e[t] = e[r] : "light" === t ? e.light = Qi(e.main, o) : "dark" === t && (e.dark = Ji(e.main, i)));
  }

  function ja(e) {
      const {mode: t = "light", contrastThreshold: r = 3, tonalOffset: n = .2} = e, o = zt(e, xa), i = e.primary || function(e = "light") {
          return "dark" === e ? {
              main: ya[200],
              light: ya[50],
              dark: ya[400]
          } : {
              main: ya[700],
              light: ya[400],
              dark: ya[800]
          };
      }(t), a = e.secondary || function(e = "light") {
          return "dark" === e ? {
              main: ha[200],
              light: ha[50],
              dark: ha[400]
          } : {
              main: ha[500],
              light: ha[300],
              dark: ha[700]
          };
      }(t), s = e.error || function(e = "light") {
          return "dark" === e ? {
              main: ma[500],
              light: ma[300],
              dark: ma[700]
          } : {
              main: ma[700],
              light: ma[400],
              dark: ma[800]
          };
      }(t), l = e.info || function(e = "light") {
          return "dark" === e ? {
              main: ba[400],
              light: ba[300],
              dark: ba[700]
          } : {
              main: ba[700],
              light: ba[500],
              dark: ba[900]
          };
      }(t), c = e.success || function(e = "light") {
          return "dark" === e ? {
              main: va[400],
              light: va[300],
              dark: va[700]
          } : {
              main: va[800],
              light: va[500],
              dark: va[900]
          };
      }(t), u = e.warning || function(e = "light") {
          return "dark" === e ? {
              main: ga[400],
              light: ga[300],
              dark: ga[700]
          } : {
              main: "#ed6c02",
              light: ga[500],
              dark: ga[900]
          };
      }(t);
      function d(e) {
          return Zi(e, wa.text.primary) >= r ? wa.text.primary : Sa.text.primary;
      }
      const f = ({color: e, name: t, mainShade: r = 500, lightShade: o = 300, darkShade: i = 700}) => {
          if (!(e = Lt({}, e)).main && e[r] && (e.main = e[r]), !e.hasOwnProperty("main")) throw new Error(fr(11, t ? ` (${t})` : "", r));
          if ("string" != typeof e.main) throw new Error(fr(12, t ? ` (${t})` : "", JSON.stringify(e.main)));
          return ka(e, "light", o, n), ka(e, "dark", i, n), e.contrastText || (e.contrastText = d(e.main)), 
          e;
      }, p = {
          dark: wa,
          light: Sa
      };
      return ur(Lt({
          common: Lt({}, fa),
          mode: t,
          primary: f({
              color: i,
              name: "primary"
          }),
          secondary: f({
              color: a,
              name: "secondary",
              mainShade: "A400",
              lightShade: "A200",
              darkShade: "A700"
          }),
          error: f({
              color: s,
              name: "error"
          }),
          warning: f({
              color: u,
              name: "warning"
          }),
          info: f({
              color: l,
              name: "info"
          }),
          success: f({
              color: c,
              name: "success"
          }),
          grey: pa,
          contrastThreshold: r,
          getContrastText: d,
          augmentColor: f,
          tonalOffset: n
      }, p[t]), o);
  }

  const Ca = [ "fontFamily", "fontSize", "fontWeightLight", "fontWeightRegular", "fontWeightMedium", "fontWeightBold", "htmlFontSize", "allVariants", "pxToRem" ];

  const Ra = {
      textTransform: "uppercase"
  }, Ea = '"Roboto", "Helvetica", "Arial", sans-serif';

  function Oa(e, t) {
      const r = "function" == typeof t ? t(e) : t, {fontFamily: n = Ea, fontSize: o = 14, fontWeightLight: i = 300, fontWeightRegular: a = 400, fontWeightMedium: s = 500, fontWeightBold: l = 700, htmlFontSize: c = 16, allVariants: u, pxToRem: d} = r, f = zt(r, Ca), p = o / 14, h = d || (e => e / c * p + "rem"), m = (e, t, r, o, i) => {
          return Lt({
              fontFamily: n,
              fontWeight: e,
              fontSize: h(t),
              lineHeight: r
          }, n === Ea ? {
              letterSpacing: (a = o / t, Math.round(1e5 * a) / 1e5) + "em"
          } : {}, i, u);
          var a;
      }, g = {
          h1: m(i, 96, 1.167, -1.5),
          h2: m(i, 60, 1.2, -.5),
          h3: m(a, 48, 1.167, 0),
          h4: m(a, 34, 1.235, .25),
          h5: m(a, 24, 1.334, 0),
          h6: m(s, 20, 1.6, .15),
          subtitle1: m(a, 16, 1.75, .15),
          subtitle2: m(s, 14, 1.57, .1),
          body1: m(a, 16, 1.5, .15),
          body2: m(a, 14, 1.43, .15),
          button: m(s, 14, 1.75, .4, Ra),
          caption: m(a, 12, 1.66, .4),
          overline: m(a, 12, 2.66, 1, Ra),
          inherit: {
              fontFamily: "inherit",
              fontWeight: "inherit",
              fontSize: "inherit",
              lineHeight: "inherit",
              letterSpacing: "inherit"
          }
      };
      return ur(Lt({
          htmlFontSize: c,
          pxToRem: h,
          fontFamily: n,
          fontSize: o,
          fontWeightLight: i,
          fontWeightRegular: a,
          fontWeightMedium: s,
          fontWeightBold: l
      }, g), f, {
          clone: !1
      });
  }

  function Ta(...e) {
      return [ `${e[0]}px ${e[1]}px ${e[2]}px ${e[3]}px rgba(0,0,0,0.2)`, `${e[4]}px ${e[5]}px ${e[6]}px ${e[7]}px rgba(0,0,0,0.14)`, `${e[8]}px ${e[9]}px ${e[10]}px ${e[11]}px rgba(0,0,0,0.12)` ].join(",");
  }

  const $a = [ "none", Ta(0, 2, 1, -1, 0, 1, 1, 0, 0, 1, 3, 0), Ta(0, 3, 1, -2, 0, 2, 2, 0, 0, 1, 5, 0), Ta(0, 3, 3, -2, 0, 3, 4, 0, 0, 1, 8, 0), Ta(0, 2, 4, -1, 0, 4, 5, 0, 0, 1, 10, 0), Ta(0, 3, 5, -1, 0, 5, 8, 0, 0, 1, 14, 0), Ta(0, 3, 5, -1, 0, 6, 10, 0, 0, 1, 18, 0), Ta(0, 4, 5, -2, 0, 7, 10, 1, 0, 2, 16, 1), Ta(0, 5, 5, -3, 0, 8, 10, 1, 0, 3, 14, 2), Ta(0, 5, 6, -3, 0, 9, 12, 1, 0, 3, 16, 2), Ta(0, 6, 6, -3, 0, 10, 14, 1, 0, 4, 18, 3), Ta(0, 6, 7, -4, 0, 11, 15, 1, 0, 4, 20, 3), Ta(0, 7, 8, -4, 0, 12, 17, 2, 0, 5, 22, 4), Ta(0, 7, 8, -4, 0, 13, 19, 2, 0, 5, 24, 4), Ta(0, 7, 9, -4, 0, 14, 21, 2, 0, 5, 26, 4), Ta(0, 8, 9, -5, 0, 15, 22, 2, 0, 6, 28, 5), Ta(0, 8, 10, -5, 0, 16, 24, 2, 0, 6, 30, 5), Ta(0, 8, 11, -5, 0, 17, 26, 2, 0, 6, 32, 5), Ta(0, 9, 11, -5, 0, 18, 28, 2, 0, 7, 34, 6), Ta(0, 9, 12, -6, 0, 19, 29, 2, 0, 7, 36, 6), Ta(0, 10, 13, -6, 0, 20, 31, 3, 0, 8, 38, 7), Ta(0, 10, 13, -6, 0, 21, 33, 3, 0, 8, 40, 7), Ta(0, 10, 14, -6, 0, 22, 35, 3, 0, 8, 42, 7), Ta(0, 11, 14, -7, 0, 23, 36, 3, 0, 9, 44, 8), Ta(0, 11, 15, -7, 0, 24, 38, 3, 0, 9, 46, 8) ], Aa = [ "duration", "easing", "delay" ], Pa = {
      easeInOut: "cubic-bezier(0.4, 0, 0.2, 1)",
      easeOut: "cubic-bezier(0.0, 0, 0.2, 1)",
      easeIn: "cubic-bezier(0.4, 0, 1, 1)",
      sharp: "cubic-bezier(0.4, 0, 0.6, 1)"
  }, Ma = {
      shortest: 150,
      shorter: 200,
      short: 250,
      standard: 300,
      complex: 375,
      enteringScreen: 225,
      leavingScreen: 195
  };

  function _a(e) {
      return `${Math.round(e)}ms`;
  }

  function Ia(e) {
      if (!e) return 0;
      const t = e / 36;
      return Math.round(10 * (4 + 15 * t ** .25 + t / 5));
  }

  function Ba(e) {
      const t = Lt({}, Pa, e.easing), r = Lt({}, Ma, e.duration);
      return Lt({
          getAutoHeightDuration: Ia,
          create: (e = [ "all" ], n = {}) => {
              const {duration: o = r.standard, easing: i = t.easeInOut, delay: a = 0} = n;
              return zt(n, Aa), (Array.isArray(e) ? e : [ e ]).map((e => `${e} ${"string" == typeof o ? o : _a(o)} ${i} ${"string" == typeof a ? a : _a(a)}`)).join(",");
          }
      }, e, {
          easing: t,
          duration: r
      });
  }

  const Fa = {
      mobileStepper: 1e3,
      fab: 1050,
      speedDial: 1050,
      appBar: 1100,
      drawer: 1200,
      modal: 1300,
      snackbar: 1400,
      tooltip: 1500
  }, Na = [ "breakpoints", "mixins", "spacing", "palette", "transitions", "typography", "shape" ];

  function za(e = {}, ...t) {
      const {mixins: r = {}, palette: n = {}, transitions: o = {}, typography: i = {}} = e, a = zt(e, Na);
      if (e.vars) throw new Error(fr(18));
      const s = ja(n), l = wi(e);
      let c = ur(l, {
          mixins: (u = l.breakpoints, d = r, Lt({
              toolbar: {
                  minHeight: 56,
                  [u.up("xs")]: {
                      "@media (orientation: landscape)": {
                          minHeight: 48
                      }
                  },
                  [u.up("sm")]: {
                      minHeight: 64
                  }
              }
          }, d)),
          palette: s,
          shadows: $a.slice(),
          typography: Oa(s, i),
          transitions: Ba(o),
          zIndex: Lt({}, Fa)
      });
      var u, d;
      return c = ur(c, a), c = t.reduce(((e, t) => ur(e, t)), c), c.unstable_sxConfig = Lt({}, gi, null == a ? void 0 : a.unstable_sxConfig), 
      c.unstable_sx = function(e) {
          return vi({
              sx: e,
              theme: this
          });
      }, c;
  }

  const La = za(), Da = "$$material", Wa = Ti({
      themeId: Da,
      defaultTheme: La,
      rootShouldForwardProp: e => $i(e) && "classes" !== e
  });

  function Va(e) {
      const {theme: t, name: r, props: n} = e;
      return t && t.components && t.components[r] && t.components[r].defaultProps ? Vr(t.components[r].defaultProps, n) : n;
  }

  function Ha(t = null) {
      const r = e__namespace.useContext(react.ThemeContext);
      return r && (n = r, 0 !== Object.keys(n).length) ? r : t;
      var n;
  }

  const Ka = wi();

  function qa(e = Ka) {
      return Ha(e);
  }

  function Xa({props: e, name: t}) {
      return function({props: e, name: t, defaultTheme: r, themeId: n}) {
          let o = qa(r);
          return n && (o = o[n] || o), Va({
              theme: o,
              name: t,
              props: e
          });
      }({
          props: e,
          name: t,
          defaultTheme: La,
          themeId: Da
      });
  }

  const Ua = [ "className", "component" ];

  function Ga(e) {
      return (1 + Math.sin(Math.PI * e - Math.PI / 2)) / 2;
  }

  function Ya(e) {
      return Ur("MuiSvgIcon", e);
  }

  Gr("MuiSvgIcon", [ "root", "colorPrimary", "colorSecondary", "colorAction", "colorError", "colorDisabled", "fontSizeInherit", "fontSizeSmall", "fontSizeMedium", "fontSizeLarge" ]);

  const Ja = [ "children", "className", "color", "component", "fontSize", "htmlColor", "inheritViewBox", "titleAccess", "viewBox" ], Za = Wa("svg", {
      name: "MuiSvgIcon",
      slot: "Root",
      overridesResolver: (e, t) => {
          const {ownerState: r} = e;
          return [ t.root, "inherit" !== r.color && t[`color${vr(r.color)}`], t[`fontSize${vr(r.fontSize)}`] ];
      }
  })((({theme: e, ownerState: t}) => {
      var r, n, o, i, a, s, l, c, u, d, f, p, h;
      return {
          userSelect: "none",
          width: "1em",
          height: "1em",
          display: "inline-block",
          fill: t.hasSvgAsChild ? void 0 : "currentColor",
          flexShrink: 0,
          transition: null == (r = e.transitions) || null == (n = r.create) ? void 0 : n.call(r, "fill", {
              duration: null == (o = e.transitions) || null == (o = o.duration) ? void 0 : o.shorter
          }),
          fontSize: {
              inherit: "inherit",
              small: (null == (i = e.typography) || null == (a = i.pxToRem) ? void 0 : a.call(i, 20)) || "1.25rem",
              medium: (null == (s = e.typography) || null == (l = s.pxToRem) ? void 0 : l.call(s, 24)) || "1.5rem",
              large: (null == (c = e.typography) || null == (u = c.pxToRem) ? void 0 : u.call(c, 35)) || "2.1875rem"
          }[t.fontSize],
          color: null != (d = null == (f = (e.vars || e).palette) || null == (f = f[t.color]) ? void 0 : f.main) ? d : {
              action: null == (p = (e.vars || e).palette) || null == (p = p.action) ? void 0 : p.active,
              disabled: null == (h = (e.vars || e).palette) || null == (h = h.action) ? void 0 : h.disabled,
              inherit: void 0
          }[t.color]
      };
  })), Qa = e__namespace.forwardRef((function(t, r) {
      const n = Xa({
          props: t,
          name: "MuiSvgIcon"
      }), {children: o, className: i, color: a = "inherit", component: s = "svg", fontSize: l = "medium", htmlColor: c, inheritViewBox: u = !1, titleAccess: d, viewBox: f = "0 0 24 24"} = n, p = zt(n, Ja), h = e__namespace.isValidElement(o) && "svg" === o.type, m = Lt({}, n, {
          color: a,
          component: s,
          fontSize: l,
          instanceFontSize: t.fontSize,
          inheritViewBox: u,
          viewBox: f,
          hasSvgAsChild: h
      }), g = {};
      u || (g.viewBox = f);
      const y = (e => {
          const {color: t, fontSize: r, classes: n} = e;
          return Hr({
              root: [ "root", "inherit" !== t && `color${vr(t)}`, `fontSize${vr(r)}` ]
          }, Ya, n);
      })(m);
      return q.jsxs(Za, Lt({
          as: s,
          className: sr(y.root, i),
          focusable: "false",
          color: c,
          "aria-hidden": !d || void 0,
          role: d ? "img" : void 0,
          ref: r
      }, g, p, h && o.props, {
          ownerState: m,
          children: [ h ? o.props.children : o, d ? q.jsx("title", {
              children: d
          }) : null ]
      }));
  }));

  function es(t, r) {
      function n(e, n) {
          return q.jsx(Qa, Lt({
              "data-testid": `${r}Icon`,
              ref: n
          }, e, {
              children: t
          }));
      }
      return n.muiName = Qa.muiName, e__namespace.memo(e__namespace.forwardRef(n));
  }

  Qa.muiName = "SvgIcon";

  const ts = [ "onChange" ], rs = {
      width: 99,
      height: 99,
      position: "absolute",
      top: -9999,
      overflow: "scroll"
  };

  const ns = es(q.jsx("path", {
      d: "M15.41 16.09l-4.58-4.59 4.58-4.59L14 5.5l-6 6 6 6z"
  }), "KeyboardArrowLeft"), os = es(q.jsx("path", {
      d: "M8.59 16.34l4.58-4.59-4.58-4.59L10 5.75l6 6-6 6z"
  }), "KeyboardArrowRight");

  function is(e, t) {
      return (is = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function(e, t) {
          return e.__proto__ = t, e;
      })(e, t);
  }

  const as = e.createContext(null);

  function ss(e$1, t) {
      var r = Object.create(null);
      return e$1 && e.Children.map(e$1, (function(e) {
          return e;
      })).forEach((function(e$1) {
          r[e$1.key] = function(e$1) {
              return t && e.isValidElement(e$1) ? t(e$1) : e$1;
          }(e$1);
      })), r;
  }

  function ls(e, t, r) {
      return null != r[t] ? r[t] : e.props[t];
  }

  function cs(e$1, t, r) {
      var n = ss(e$1.children), o = function(e, t) {
          function r(r) {
              return r in t ? t[r] : e[r];
          }
          e = e || {}, t = t || {};
          var n, o = Object.create(null), i = [];
          for (var a in e) a in t ? i.length && (o[a] = i, i = []) : i.push(a);
          var s = {};
          for (var l in t) {
              if (o[l]) for (n = 0; n < o[l].length; n++) {
                  var c = o[l][n];
                  s[o[l][n]] = r(c);
              }
              s[l] = r(l);
          }
          for (n = 0; n < i.length; n++) s[i[n]] = r(i[n]);
          return s;
      }(t, n);
      return Object.keys(o).forEach((function(s) {
          var l = o[s];
          if (e.isValidElement(l)) {
              var c = s in t, u = s in n, d = t[s], f = e.isValidElement(d) && !d.props.in;
              !u || c && !f ? u || !c || f ? u && c && e.isValidElement(d) && (o[s] = e.cloneElement(l, {
                  onExited: r.bind(null, l),
                  in: d.props.in,
                  exit: ls(l, "exit", e$1),
                  enter: ls(l, "enter", e$1)
              })) : o[s] = e.cloneElement(l, {
                  in: !1
              }) : o[s] = e.cloneElement(l, {
                  onExited: r.bind(null, l),
                  in: !0,
                  exit: ls(l, "exit", e$1),
                  enter: ls(l, "enter", e$1)
              });
          }
      })), o;
  }

  var us = Object.values || function(e) {
      return Object.keys(e).map((function(t) {
          return e[t];
      }));
  }, ds = function(e$1) {
      var r, n;
      function o(t, r) {
          var n, o = (n = e$1.call(this, t, r) || this).handleExited.bind(function(e) {
              if (void 0 === e) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
              return e;
          }(n));
          return n.state = {
              contextValue: {
                  isMounting: !0
              },
              handleExited: o,
              firstRender: !0
          }, n;
      }
      n = e$1, (r = o).prototype = Object.create(n.prototype), r.prototype.constructor = r, 
      is(r, n);
      var i = o.prototype;
      return i.componentDidMount = function() {
          this.mounted = !0, this.setState({
              contextValue: {
                  isMounting: !1
              }
          });
      }, i.componentWillUnmount = function() {
          this.mounted = !1;
      }, o.getDerivedStateFromProps = function(e$1, t) {
          var r, n, o = t.children, i = t.handleExited;
          return {
              children: t.firstRender ? (r = e$1, n = i, ss(r.children, (function(e$1) {
                  return e.cloneElement(e$1, {
                      onExited: n.bind(null, e$1),
                      in: !0,
                      appear: ls(e$1, "appear", r),
                      enter: ls(e$1, "enter", r),
                      exit: ls(e$1, "exit", r)
                  });
              }))) : cs(e$1, o, i),
              firstRender: !1
          };
      }, i.handleExited = function(e, t) {
          var r = ss(this.props.children);
          e.key in r || (e.props.onExited && e.props.onExited(t), this.mounted && this.setState((function(t) {
              var r = Lt({}, t.children);
              return delete r[e.key], {
                  children: r
              };
          })));
      }, i.render = function() {
          var e$1 = this.props, r = e$1.component, n = e$1.childFactory, o = zt(e$1, [ "component", "childFactory" ]), i = this.state.contextValue, a = us(this.state.children).map(n);
          return delete o.appear, delete o.enter, delete o.exit, null === r ? e.createElement(as.Provider, {
              value: i
          }, a) : e.createElement(as.Provider, {
              value: i
          }, e.createElement(r, o, a));
      }, o;
  }(e.Component);

  ds.propTypes = {}, ds.defaultProps = {
      component: "div",
      childFactory: function(e) {
          return e;
      }
  };

  const fs = ds;

  const ps = Gr("MuiTouchRipple", [ "root", "ripple", "rippleVisible", "ripplePulsate", "child", "childLeaving", "childPulsate" ]), hs = [ "center", "classes", "className" ];

  let ms, gs, ys, bs, vs = e => e;

  const xs = react.keyframes(ms || (ms = vs`
  0% {
    transform: scale(0);
    opacity: 0.1;
  }

  100% {
    transform: scale(1);
    opacity: 0.3;
  }
`)), Ss = react.keyframes(gs || (gs = vs`
  0% {
    opacity: 1;
  }

  100% {
    opacity: 0;
  }
`)), ws = react.keyframes(ys || (ys = vs`
  0% {
    transform: scale(1);
  }

  50% {
    transform: scale(0.92);
  }

  100% {
    transform: scale(1);
  }
`)), ks = Wa("span", {
      name: "MuiTouchRipple",
      slot: "Root"
  })({
      overflow: "hidden",
      pointerEvents: "none",
      position: "absolute",
      zIndex: 0,
      top: 0,
      right: 0,
      bottom: 0,
      left: 0,
      borderRadius: "inherit"
  }), js = Wa((function(t) {
      const {className: r, classes: n, pulsate: o = !1, rippleX: i, rippleY: a, rippleSize: s, in: l, onExited: c, timeout: u} = t, [d, f] = e__namespace.useState(!1), p = sr(r, n.ripple, n.rippleVisible, o && n.ripplePulsate), h = {
          width: s,
          height: s,
          top: -s / 2 + a,
          left: -s / 2 + i
      }, m = sr(n.child, d && n.childLeaving, o && n.childPulsate);
      return l || d || f(!0), e__namespace.useEffect((() => {
          if (!l && null != c) {
              const e = setTimeout(c, u);
              return () => {
                  clearTimeout(e);
              };
          }
      }), [ c, l, u ]), q.jsx("span", {
          className: p,
          style: h,
          children: q.jsx("span", {
              className: m
          })
      });
  }), {
      name: "MuiTouchRipple",
      slot: "Ripple"
  })(bs || (bs = vs`
  opacity: 0;
  position: absolute;

  &.${0} {
    opacity: 0.3;
    transform: scale(1);
    animation-name: ${0};
    animation-duration: ${0}ms;
    animation-timing-function: ${0};
  }

  &.${0} {
    animation-duration: ${0}ms;
  }

  & .${0} {
    opacity: 1;
    display: block;
    width: 100%;
    height: 100%;
    border-radius: 50%;
    background-color: currentColor;
  }

  & .${0} {
    opacity: 0;
    animation-name: ${0};
    animation-duration: ${0}ms;
    animation-timing-function: ${0};
  }

  & .${0} {
    position: absolute;
    /* @noflip */
    left: 0px;
    top: 0;
    animation-name: ${0};
    animation-duration: 2500ms;
    animation-timing-function: ${0};
    animation-iteration-count: infinite;
    animation-delay: 200ms;
  }
`), ps.rippleVisible, xs, 550, (({theme: e}) => e.transitions.easing.easeInOut), ps.ripplePulsate, (({theme: e}) => e.transitions.duration.shorter), ps.child, ps.childLeaving, Ss, 550, (({theme: e}) => e.transitions.easing.easeInOut), ps.childPulsate, ws, (({theme: e}) => e.transitions.easing.easeInOut)), Cs = e__namespace.forwardRef((function(t, r) {
      const n = Xa({
          props: t,
          name: "MuiTouchRipple"
      }), {center: o = !1, classes: i = {}, className: a} = n, s = zt(n, hs), [l, c] = e__namespace.useState([]), u = e__namespace.useRef(0), d = e__namespace.useRef(null);
      e__namespace.useEffect((() => {
          d.current && (d.current(), d.current = null);
      }), [ l ]);
      const f = e__namespace.useRef(!1), p = $r(), h = e__namespace.useRef(null), m = e__namespace.useRef(null), g = e__namespace.useCallback((e => {
          const {pulsate: t, rippleX: r, rippleY: n, rippleSize: o, cb: a} = e;
          c((e => [ ...e, q.jsx(js, {
              classes: {
                  ripple: sr(i.ripple, ps.ripple),
                  rippleVisible: sr(i.rippleVisible, ps.rippleVisible),
                  ripplePulsate: sr(i.ripplePulsate, ps.ripplePulsate),
                  child: sr(i.child, ps.child),
                  childLeaving: sr(i.childLeaving, ps.childLeaving),
                  childPulsate: sr(i.childPulsate, ps.childPulsate)
              },
              timeout: 550,
              pulsate: t,
              rippleX: r,
              rippleY: n,
              rippleSize: o
          }, u.current) ])), u.current += 1, d.current = a;
      }), [ i ]), y = e__namespace.useCallback(((e = {}, t = {}, r = (() => {})) => {
          const {pulsate: n = !1, center: i = o || t.pulsate, fakeElement: a = !1} = t;
          if ("mousedown" === (null == e ? void 0 : e.type) && f.current) return void (f.current = !1);
          "touchstart" === (null == e ? void 0 : e.type) && (f.current = !0);
          const s = a ? null : m.current, l = s ? s.getBoundingClientRect() : {
              width: 0,
              height: 0,
              left: 0,
              top: 0
          };
          let c, u, d;
          if (i || void 0 === e || 0 === e.clientX && 0 === e.clientY || !e.clientX && !e.touches) c = Math.round(l.width / 2), 
          u = Math.round(l.height / 2); else {
              const {clientX: t, clientY: r} = e.touches && e.touches.length > 0 ? e.touches[0] : e;
              c = Math.round(t - l.left), u = Math.round(r - l.top);
          }
          if (i) d = Math.sqrt((2 * l.width ** 2 + l.height ** 2) / 3), d % 2 == 0 && (d += 1); else {
              const e = 2 * Math.max(Math.abs((s ? s.clientWidth : 0) - c), c) + 2, t = 2 * Math.max(Math.abs((s ? s.clientHeight : 0) - u), u) + 2;
              d = Math.sqrt(e ** 2 + t ** 2);
          }
          null != e && e.touches ? null === h.current && (h.current = () => {
              g({
                  pulsate: n,
                  rippleX: c,
                  rippleY: u,
                  rippleSize: d,
                  cb: r
              });
          }, p.start(80, (() => {
              h.current && (h.current(), h.current = null);
          }))) : g({
              pulsate: n,
              rippleX: c,
              rippleY: u,
              rippleSize: d,
              cb: r
          });
      }), [ o, g, p ]), b = e__namespace.useCallback((() => {
          y({}, {
              pulsate: !0
          });
      }), [ y ]), v = e__namespace.useCallback(((e, t) => {
          if (p.clear(), "touchend" === (null == e ? void 0 : e.type) && h.current) return h.current(), 
          h.current = null, void p.start(0, (() => {
              v(e, t);
          }));
          h.current = null, c((e => e.length > 0 ? e.slice(1) : e)), d.current = t;
      }), [ p ]);
      return e__namespace.useImperativeHandle(r, (() => ({
          pulsate: b,
          start: y,
          stop: v
      })), [ b, y, v ]), q.jsx(ks, Lt({
          className: sr(ps.root, i.root, a),
          ref: m
      }, s, {
          children: q.jsx(fs, {
              component: null,
              exit: !0,
              children: l
          })
      }));
  }));

  function Rs(e) {
      return Ur("MuiButtonBase", e);
  }

  const Es = Gr("MuiButtonBase", [ "root", "disabled", "focusVisible" ]), Os = [ "action", "centerRipple", "children", "className", "component", "disabled", "disableRipple", "disableTouchRipple", "focusRipple", "focusVisibleClassName", "LinkComponent", "onBlur", "onClick", "onContextMenu", "onDragLeave", "onFocus", "onFocusVisible", "onKeyDown", "onKeyUp", "onMouseDown", "onMouseLeave", "onMouseUp", "onTouchEnd", "onTouchMove", "onTouchStart", "tabIndex", "TouchRippleProps", "touchRippleRef", "type" ], Ts = Wa("button", {
      name: "MuiButtonBase",
      slot: "Root",
      overridesResolver: (e, t) => t.root
  })({
      display: "inline-flex",
      alignItems: "center",
      justifyContent: "center",
      position: "relative",
      boxSizing: "border-box",
      WebkitTapHighlightColor: "transparent",
      backgroundColor: "transparent",
      outline: 0,
      border: 0,
      margin: 0,
      borderRadius: 0,
      padding: 0,
      cursor: "pointer",
      userSelect: "none",
      verticalAlign: "middle",
      MozAppearance: "none",
      WebkitAppearance: "none",
      textDecoration: "none",
      color: "inherit",
      "&::-moz-focus-inner": {
          borderStyle: "none"
      },
      [`&.${Es.disabled}`]: {
          pointerEvents: "none",
          cursor: "default"
      },
      "@media print": {
          colorAdjust: "exact"
      }
  }), $s = e__namespace.forwardRef((function(t, r) {
      const n = Xa({
          props: t,
          name: "MuiButtonBase"
      }), {action: o, centerRipple: i = !1, children: a, className: s, component: l = "button", disabled: c = !1, disableRipple: u = !1, disableTouchRipple: d = !1, focusRipple: f = !1, LinkComponent: p = "a", onBlur: h, onClick: m, onContextMenu: g, onDragLeave: y, onFocus: b, onFocusVisible: v, onKeyDown: x, onKeyUp: S, onMouseDown: w, onMouseLeave: k, onMouseUp: j, onTouchEnd: C, onTouchMove: R, onTouchStart: E, tabIndex: O = 0, TouchRippleProps: T, touchRippleRef: $, type: A} = n, P = zt(n, Os), M = e__namespace.useRef(null), _ = e__namespace.useRef(null), I = Rr(_, $), {isFocusVisibleRef: B, onFocus: F, onBlur: N, ref: z} = zr(), [L, D] = e__namespace.useState(!1);
      c && L && D(!1), e__namespace.useImperativeHandle(o, (() => ({
          focusVisible: () => {
              D(!0), M.current.focus();
          }
      })), []);
      const [W, V] = e__namespace.useState(!1);
      e__namespace.useEffect((() => {
          V(!0);
      }), []);
      const H = W && !u && !c;
      function K(e, t, r = d) {
          return Cr((n => {
              t && t(n);
              return !r && _.current && _.current[e](n), !0;
          }));
      }
      e__namespace.useEffect((() => {
          L && f && !u && W && _.current.pulsate();
      }), [ u, f, L, W ]);
      const X = K("start", w), U = K("stop", g), G = K("stop", y), Y = K("stop", j), J = K("stop", (e => {
          L && e.preventDefault(), k && k(e);
      })), Z = K("start", E), Q = K("stop", C), ee = K("stop", R), te = K("stop", (e => {
          N(e), !1 === B.current && D(!1), h && h(e);
      }), !1), re = Cr((e => {
          M.current || (M.current = e.currentTarget), F(e), !0 === B.current && (D(!0), v && v(e)), 
          b && b(e);
      })), ne = () => {
          const e = M.current;
          return l && "button" !== l && !("A" === e.tagName && e.href);
      }, oe = e__namespace.useRef(!1), ie = Cr((e => {
          f && !oe.current && L && _.current && " " === e.key && (oe.current = !0, _.current.stop(e, (() => {
              _.current.start(e);
          }))), e.target === e.currentTarget && ne() && " " === e.key && e.preventDefault(), 
          x && x(e), e.target === e.currentTarget && ne() && "Enter" === e.key && !c && (e.preventDefault(), 
          m && m(e));
      })), ae = Cr((e => {
          f && " " === e.key && _.current && L && !e.defaultPrevented && (oe.current = !1, 
          _.current.stop(e, (() => {
              _.current.pulsate(e);
          }))), S && S(e), m && e.target === e.currentTarget && ne() && " " === e.key && !e.defaultPrevented && m(e);
      }));
      let se = l;
      "button" === se && (P.href || P.to) && (se = p);
      const le = {};
      "button" === se ? (le.type = void 0 === A ? "button" : A, le.disabled = c) : (P.href || P.to || (le.role = "button"), 
      c && (le["aria-disabled"] = c));
      const ce = Rr(r, z, M), ue = Lt({}, n, {
          centerRipple: i,
          component: l,
          disabled: c,
          disableRipple: u,
          disableTouchRipple: d,
          focusRipple: f,
          tabIndex: O,
          focusVisible: L
      }), de = (e => {
          const {disabled: t, focusVisible: r, focusVisibleClassName: n, classes: o} = e, i = Hr({
              root: [ "root", t && "disabled", r && "focusVisible" ]
          }, Rs, o);
          return r && n && (i.root += ` ${n}`), i;
      })(ue);
      return q.jsxs(Ts, Lt({
          as: se,
          className: sr(de.root, s),
          ownerState: ue,
          onBlur: te,
          onClick: m,
          onContextMenu: U,
          onFocus: re,
          onKeyDown: ie,
          onKeyUp: ae,
          onMouseDown: X,
          onMouseLeave: J,
          onMouseUp: Y,
          onDragLeave: G,
          onTouchEnd: Q,
          onTouchMove: ee,
          onTouchStart: Z,
          ref: ce,
          tabIndex: c ? -1 : O,
          type: A
      }, le, P, {
          children: [ a, H ? q.jsx(Cs, Lt({
              ref: I,
              center: i
          }, T)) : null ]
      }));
  }));

  function As(e) {
      return Ur("MuiTabScrollButton", e);
  }

  const Ps = Gr("MuiTabScrollButton", [ "root", "vertical", "horizontal", "disabled" ]), Ms = [ "className", "slots", "slotProps", "direction", "orientation", "disabled" ], _s = Wa($s, {
      name: "MuiTabScrollButton",
      slot: "Root",
      overridesResolver: (e, t) => {
          const {ownerState: r} = e;
          return [ t.root, r.orientation && t[r.orientation] ];
      }
  })((({ownerState: e}) => Lt({
      width: 40,
      flexShrink: 0,
      opacity: .8,
      [`&.${Ps.disabled}`]: {
          opacity: 0
      }
  }, "vertical" === e.orientation && {
      width: "100%",
      height: 40,
      "& svg": {
          transform: `rotate(${e.isRtl ? -90 : 90}deg)`
      }
  }))), Is = e__namespace.forwardRef((function(e, t) {
      var r, n;
      const o = Xa({
          props: e,
          name: "MuiTabScrollButton"
      }), {className: i, slots: a = {}, slotProps: s = {}, direction: l} = o, c = zt(o, Ms), u = Lt({
          isRtl: rn()
      }, o), d = (e => {
          const {classes: t, orientation: r, disabled: n} = e;
          return Hr({
              root: [ "root", r, n && "disabled" ]
          }, As, t);
      })(u), f = null != (r = a.StartScrollButtonIcon) ? r : ns, p = null != (n = a.EndScrollButtonIcon) ? n : os, h = en({
          elementType: f,
          externalSlotProps: s.startScrollButtonIcon,
          additionalProps: {
              fontSize: "small"
          },
          ownerState: u
      }), m = en({
          elementType: p,
          externalSlotProps: s.endScrollButtonIcon,
          additionalProps: {
              fontSize: "small"
          },
          ownerState: u
      });
      return q.jsx(_s, Lt({
          component: "div",
          className: sr(d.root, i),
          ref: t,
          role: null,
          ownerState: u,
          tabIndex: null
      }, c, {
          children: "left" === l ? q.jsx(f, Lt({}, h)) : q.jsx(p, Lt({}, m))
      }));
  }));

  function Bs(e) {
      return Ur("MuiTabs", e);
  }

  const Fs = Gr("MuiTabs", [ "root", "vertical", "flexContainer", "flexContainerVertical", "centered", "scroller", "fixed", "scrollableX", "scrollableY", "hideScrollbar", "scrollButtons", "scrollButtonsHideMobile", "indicator" ]), Ns = [ "aria-label", "aria-labelledby", "action", "centered", "children", "className", "component", "allowScrollButtonsMobile", "indicatorColor", "onChange", "orientation", "ScrollButtonComponent", "scrollButtons", "selectionFollowsFocus", "slots", "slotProps", "TabIndicatorProps", "TabScrollButtonProps", "textColor", "value", "variant", "visibleScrollbar" ], zs = (e, t) => e === t ? e.firstChild : t && t.nextElementSibling ? t.nextElementSibling : e.firstChild, Ls = (e, t) => e === t ? e.lastChild : t && t.previousElementSibling ? t.previousElementSibling : e.lastChild, Ds = (e, t, r) => {
      let n = !1, o = r(e, t);
      for (;o; ) {
          if (o === e.firstChild) {
              if (n) return;
              n = !0;
          }
          const t = o.disabled || "true" === o.getAttribute("aria-disabled");
          if (o.hasAttribute("tabindex") && !t) return void o.focus();
          o = r(e, o);
      }
  }, Ws = Wa("div", {
      name: "MuiTabs",
      slot: "Root",
      overridesResolver: (e, t) => {
          const {ownerState: r} = e;
          return [ {
              [`& .${Fs.scrollButtons}`]: t.scrollButtons
          }, {
              [`& .${Fs.scrollButtons}`]: r.scrollButtonsHideMobile && t.scrollButtonsHideMobile
          }, t.root, r.vertical && t.vertical ];
      }
  })((({ownerState: e, theme: t}) => Lt({
      overflow: "hidden",
      minHeight: 48,
      WebkitOverflowScrolling: "touch",
      display: "flex"
  }, e.vertical && {
      flexDirection: "column"
  }, e.scrollButtonsHideMobile && {
      [`& .${Fs.scrollButtons}`]: {
          [t.breakpoints.down("sm")]: {
              display: "none"
          }
      }
  }))), Vs = Wa("div", {
      name: "MuiTabs",
      slot: "Scroller",
      overridesResolver: (e, t) => {
          const {ownerState: r} = e;
          return [ t.scroller, r.fixed && t.fixed, r.hideScrollbar && t.hideScrollbar, r.scrollableX && t.scrollableX, r.scrollableY && t.scrollableY ];
      }
  })((({ownerState: e}) => Lt({
      position: "relative",
      display: "inline-block",
      flex: "1 1 auto",
      whiteSpace: "nowrap"
  }, e.fixed && {
      overflowX: "hidden",
      width: "100%"
  }, e.hideScrollbar && {
      scrollbarWidth: "none",
      "&::-webkit-scrollbar": {
          display: "none"
      }
  }, e.scrollableX && {
      overflowX: "auto",
      overflowY: "hidden"
  }, e.scrollableY && {
      overflowY: "auto",
      overflowX: "hidden"
  }))), Hs = Wa("div", {
      name: "MuiTabs",
      slot: "FlexContainer",
      overridesResolver: (e, t) => {
          const {ownerState: r} = e;
          return [ t.flexContainer, r.vertical && t.flexContainerVertical, r.centered && t.centered ];
      }
  })((({ownerState: e}) => Lt({
      display: "flex"
  }, e.vertical && {
      flexDirection: "column"
  }, e.centered && {
      justifyContent: "center"
  }))), Ks = Wa("span", {
      name: "MuiTabs",
      slot: "Indicator",
      overridesResolver: (e, t) => t.indicator
  })((({ownerState: e, theme: t}) => Lt({
      position: "absolute",
      height: 2,
      bottom: 0,
      width: "100%",
      transition: t.transitions.create()
  }, "primary" === e.indicatorColor && {
      backgroundColor: (t.vars || t).palette.primary.main
  }, "secondary" === e.indicatorColor && {
      backgroundColor: (t.vars || t).palette.secondary.main
  }, e.vertical && {
      height: "100%",
      width: 2,
      right: 0
  }))), qs = Wa((function(t) {
      const {onChange: r} = t, n = zt(t, ts), o = e__namespace.useRef(), i = e__namespace.useRef(null), a = () => {
          o.current = i.current.offsetHeight - i.current.clientHeight;
      };
      return jr((() => {
          const e = Sr((() => {
              const e = o.current;
              a(), e !== o.current && r(o.current);
          })), t = kr(i.current);
          return t.addEventListener("resize", e), () => {
              e.clear(), t.removeEventListener("resize", e);
          };
      }), [ r ]), e__namespace.useEffect((() => {
          a(), r(o.current);
      }), [ r ]), q.jsx("div", Lt({
          style: rs,
          ref: i
      }, n));
  }))({
      overflowX: "auto",
      overflowY: "hidden",
      scrollbarWidth: "none",
      "&::-webkit-scrollbar": {
          display: "none"
      }
  }), Xs = {}, Us = e__namespace.forwardRef((function(t, r) {
      const n = Xa({
          props: t,
          name: "MuiTabs"
      }), o = function() {
          const e = qa(La);
          return e[Da] || e;
      }(), i = rn(), {"aria-label": a, "aria-labelledby": s, action: l, centered: c = !1, children: u, className: d, component: f = "div", allowScrollButtonsMobile: p = !1, indicatorColor: h = "primary", onChange: m, orientation: g = "horizontal", ScrollButtonComponent: y = Is, scrollButtons: b = "auto", selectionFollowsFocus: v, slots: x = {}, slotProps: S = {}, TabIndicatorProps: w = {}, TabScrollButtonProps: k = {}, textColor: j = "primary", value: C, variant: R = "standard", visibleScrollbar: E = !1} = n, O = zt(n, Ns), T = "scrollable" === R, $ = "vertical" === g, A = $ ? "scrollTop" : "scrollLeft", P = $ ? "top" : "left", M = $ ? "bottom" : "right", _ = $ ? "clientHeight" : "clientWidth", I = $ ? "height" : "width", B = Lt({}, n, {
          component: f,
          allowScrollButtonsMobile: p,
          indicatorColor: h,
          orientation: g,
          vertical: $,
          scrollButtons: b,
          textColor: j,
          variant: R,
          visibleScrollbar: E,
          fixed: !T,
          hideScrollbar: T && !E,
          scrollableX: T && !$,
          scrollableY: T && $,
          centered: c && !T,
          scrollButtonsHideMobile: !p
      }), F = (e => {
          const {vertical: t, fixed: r, hideScrollbar: n, scrollableX: o, scrollableY: i, centered: a, scrollButtonsHideMobile: s, classes: l} = e;
          return Hr({
              root: [ "root", t && "vertical" ],
              scroller: [ "scroller", r && "fixed", n && "hideScrollbar", o && "scrollableX", i && "scrollableY" ],
              flexContainer: [ "flexContainer", t && "flexContainerVertical", a && "centered" ],
              indicator: [ "indicator" ],
              scrollButtons: [ "scrollButtons", s && "scrollButtonsHideMobile" ],
              scrollableX: [ o && "scrollableX" ],
              hideScrollbar: [ n && "hideScrollbar" ]
          }, Bs, l);
      })(B), N = en({
          elementType: x.StartScrollButtonIcon,
          externalSlotProps: S.startScrollButtonIcon,
          ownerState: B
      }), z = en({
          elementType: x.EndScrollButtonIcon,
          externalSlotProps: S.endScrollButtonIcon,
          ownerState: B
      }), [L, D] = e__namespace.useState(!1), [W, V] = e__namespace.useState(Xs), [H, K] = e__namespace.useState(!1), [X, U] = e__namespace.useState(!1), [G, Y] = e__namespace.useState(!1), [J, Z] = e__namespace.useState({
          overflow: "hidden",
          scrollbarWidth: 0
      }), Q = new Map, ee = e__namespace.useRef(null), te = e__namespace.useRef(null), re = () => {
          const e = ee.current;
          let t, r;
          if (e) {
              const r = e.getBoundingClientRect();
              t = {
                  clientWidth: e.clientWidth,
                  scrollLeft: e.scrollLeft,
                  scrollTop: e.scrollTop,
                  scrollLeftNormalized: Wr(e, i ? "rtl" : "ltr"),
                  scrollWidth: e.scrollWidth,
                  top: r.top,
                  bottom: r.bottom,
                  left: r.left,
                  right: r.right
              };
          }
          if (e && !1 !== C) {
              const e = te.current.children;
              if (e.length > 0) {
                  const t = e[Q.get(C)];
                  r = t ? t.getBoundingClientRect() : null;
              }
          }
          return {
              tabsMeta: t,
              tabMeta: r
          };
      }, ne = Cr((() => {
          const {tabsMeta: e, tabMeta: t} = re();
          let r, n = 0;
          if ($) r = "top", t && e && (n = t.top - e.top + e.scrollTop); else if (r = i ? "right" : "left", 
          t && e) {
              const o = i ? e.scrollLeftNormalized + e.clientWidth - e.scrollWidth : e.scrollLeft;
              n = (i ? -1 : 1) * (t[r] - e[r] + o);
          }
          const o = {
              [r]: n,
              [I]: t ? t[I] : 0
          };
          if (isNaN(W[r]) || isNaN(W[I])) V(o); else {
              const e = Math.abs(W[r] - o[r]), t = Math.abs(W[I] - o[I]);
              (e >= 1 || t >= 1) && V(o);
          }
      })), oe = (e, {animation: t = !0} = {}) => {
          t ? function(e, t, r, n = {}, o = (() => {})) {
              const {ease: i = Ga, duration: a = 300} = n;
              let s = null;
              const l = t[e];
              const d = n => {
                  null === s && (s = n);
                  const u = Math.min(1, (n - s) / a);
                  t[e] = i(u) * (r - l) + l, u >= 1 ? requestAnimationFrame((() => {
                      o(null);
                  })) : requestAnimationFrame(d);
              };
              l === r ? o(new Error("Element already at target position")) : requestAnimationFrame(d);
          }(A, ee.current, e, {
              duration: o.transitions.duration.standard
          }) : ee.current[A] = e;
      }, ie = e => {
          let t = ee.current[A];
          $ ? t += e : (t += e * (i ? -1 : 1), t *= i && "reverse" === Dr() ? -1 : 1), oe(t);
      }, ae = () => {
          const e = ee.current[_];
          let t = 0;
          const r = Array.from(te.current.children);
          for (let n = 0; n < r.length; n += 1) {
              const o = r[n];
              if (t + o[_] > e) {
                  0 === n && (t = e);
                  break;
              }
              t += o[_];
          }
          return t;
      }, se = () => {
          ie(-1 * ae());
      }, le = () => {
          ie(ae());
      }, ce = e__namespace.useCallback((e => {
          Z({
              overflow: null,
              scrollbarWidth: e
          });
      }), []), ue = Cr((e => {
          const {tabsMeta: t, tabMeta: r} = re();
          if (r && t) if (r[P] < t[P]) {
              const n = t[A] + (r[P] - t[P]);
              oe(n, {
                  animation: e
              });
          } else if (r[M] > t[M]) {
              const n = t[A] + (r[M] - t[M]);
              oe(n, {
                  animation: e
              });
          }
      })), de = Cr((() => {
          T && !1 !== b && Y(!G);
      }));
      e__namespace.useEffect((() => {
          const e = Sr((() => {
              ee.current && ne();
          }));
          let t;
          const r = r => {
              r.forEach((e => {
                  e.removedNodes.forEach((e => {
                      var r;
                      null == (r = t) || r.unobserve(e);
                  })), e.addedNodes.forEach((e => {
                      var r;
                      null == (r = t) || r.observe(e);
                  }));
              })), e(), de();
          }, n = kr(ee.current);
          let o;
          return n.addEventListener("resize", e), "undefined" != typeof ResizeObserver && (t = new ResizeObserver(e), 
          Array.from(te.current.children).forEach((e => {
              t.observe(e);
          }))), "undefined" != typeof MutationObserver && (o = new MutationObserver(r), o.observe(te.current, {
              childList: !0
          })), () => {
              var r, i;
              e.clear(), n.removeEventListener("resize", e), null == (r = o) || r.disconnect(), 
              null == (i = t) || i.disconnect();
          };
      }), [ ne, de ]), e__namespace.useEffect((() => {
          const e = Array.from(te.current.children), t = e.length;
          if ("undefined" != typeof IntersectionObserver && t > 0 && T && !1 !== b) {
              const r = e[0], n = e[t - 1], o = {
                  root: ee.current,
                  threshold: .99
              }, i = new IntersectionObserver((e => {
                  K(!e[0].isIntersecting);
              }), o);
              i.observe(r);
              const a = new IntersectionObserver((e => {
                  U(!e[0].isIntersecting);
              }), o);
              return a.observe(n), () => {
                  i.disconnect(), a.disconnect();
              };
          }
      }), [ T, b, G, null == u ? void 0 : u.length ]), e__namespace.useEffect((() => {
          D(!0);
      }), []), e__namespace.useEffect((() => {
          ne();
      })), e__namespace.useEffect((() => {
          ue(Xs !== W);
      }), [ ue, W ]), e__namespace.useImperativeHandle(l, (() => ({
          updateIndicator: ne,
          updateScrollButtons: de
      })), [ ne, de ]);
      const fe = q.jsx(Ks, Lt({}, w, {
          className: sr(F.indicator, w.className),
          ownerState: B,
          style: Lt({}, W, w.style)
      }));
      let pe = 0;
      const he = e__namespace.Children.map(u, (t => {
          if (!e__namespace.isValidElement(t)) return null;
          const r = void 0 === t.props.value ? pe : t.props.value;
          Q.set(r, pe);
          const n = r === C;
          return pe += 1, e__namespace.cloneElement(t, Lt({
              fullWidth: "fullWidth" === R,
              indicator: n && !L && fe,
              selected: n,
              selectionFollowsFocus: v,
              onChange: m,
              textColor: j,
              value: r
          }, 1 !== pe || !1 !== C || t.props.tabIndex ? {} : {
              tabIndex: 0
          }));
      })), me = (() => {
          const e = {};
          e.scrollbarSizeListener = T ? q.jsx(qs, {
              onChange: ce,
              className: sr(F.scrollableX, F.hideScrollbar)
          }) : null;
          const t = T && ("auto" === b && (H || X) || !0 === b);
          return e.scrollButtonStart = t ? q.jsx(y, Lt({
              slots: {
                  StartScrollButtonIcon: x.StartScrollButtonIcon
              },
              slotProps: {
                  startScrollButtonIcon: N
              },
              orientation: g,
              direction: i ? "right" : "left",
              onClick: se,
              disabled: !H
          }, k, {
              className: sr(F.scrollButtons, k.className)
          })) : null, e.scrollButtonEnd = t ? q.jsx(y, Lt({
              slots: {
                  EndScrollButtonIcon: x.EndScrollButtonIcon
              },
              slotProps: {
                  endScrollButtonIcon: z
              },
              orientation: g,
              direction: i ? "left" : "right",
              onClick: le,
              disabled: !X
          }, k, {
              className: sr(F.scrollButtons, k.className)
          })) : null, e;
      })();
      return q.jsxs(Ws, Lt({
          className: sr(F.root, d),
          ownerState: B,
          ref: r,
          as: f
      }, O, {
          children: [ me.scrollButtonStart, me.scrollbarSizeListener, q.jsxs(Vs, {
              className: F.scroller,
              ownerState: B,
              style: {
                  overflow: J.overflow,
                  [$ ? "margin" + (i ? "Left" : "Right") : "marginBottom"]: E ? void 0 : -J.scrollbarWidth
              },
              ref: ee,
              children: [ q.jsx(Hs, {
                  "aria-label": a,
                  "aria-labelledby": s,
                  "aria-orientation": "vertical" === g ? "vertical" : null,
                  className: F.flexContainer,
                  ownerState: B,
                  onKeyDown: e => {
                      const t = te.current, r = wr(t).activeElement;
                      if ("tab" !== r.getAttribute("role")) return;
                      let n = "horizontal" === g ? "ArrowLeft" : "ArrowUp", o = "horizontal" === g ? "ArrowRight" : "ArrowDown";
                      switch ("horizontal" === g && i && (n = "ArrowRight", o = "ArrowLeft"), e.key) {
                        case n:
                          e.preventDefault(), Ds(t, r, Ls);
                          break;

                        case o:
                          e.preventDefault(), Ds(t, r, zs);
                          break;

                        case "Home":
                          e.preventDefault(), Ds(t, null, zs);
                          break;

                        case "End":
                          e.preventDefault(), Ds(t, null, Ls);
                      }
                  },
                  ref: te,
                  role: "tablist",
                  children: he
              }), L && fe ]
          }), me.scrollButtonEnd ]
      }));
  }));

  function Gs(e) {
      return Ur("MuiTab", e);
  }

  const Ys = Gr("MuiTab", [ "root", "labelIcon", "textColorInherit", "textColorPrimary", "textColorSecondary", "selected", "disabled", "fullWidth", "wrapped", "iconWrapper" ]), Js = [ "className", "disabled", "disableFocusRipple", "fullWidth", "icon", "iconPosition", "indicator", "label", "onChange", "onClick", "onFocus", "selected", "selectionFollowsFocus", "textColor", "value", "wrapped" ], Zs = Wa($s, {
      name: "MuiTab",
      slot: "Root",
      overridesResolver: (e, t) => {
          const {ownerState: r} = e;
          return [ t.root, r.label && r.icon && t.labelIcon, t[`textColor${vr(r.textColor)}`], r.fullWidth && t.fullWidth, r.wrapped && t.wrapped ];
      }
  })((({theme: e, ownerState: t}) => Lt({}, e.typography.button, {
      maxWidth: 360,
      minWidth: 90,
      position: "relative",
      minHeight: 48,
      flexShrink: 0,
      padding: "12px 16px",
      overflow: "hidden",
      whiteSpace: "normal",
      textAlign: "center"
  }, t.label && {
      flexDirection: "top" === t.iconPosition || "bottom" === t.iconPosition ? "column" : "row"
  }, {
      lineHeight: 1.25
  }, t.icon && t.label && {
      minHeight: 72,
      paddingTop: 9,
      paddingBottom: 9,
      [`& > .${Ys.iconWrapper}`]: Lt({}, "top" === t.iconPosition && {
          marginBottom: 6
      }, "bottom" === t.iconPosition && {
          marginTop: 6
      }, "start" === t.iconPosition && {
          marginRight: e.spacing(1)
      }, "end" === t.iconPosition && {
          marginLeft: e.spacing(1)
      })
  }, "inherit" === t.textColor && {
      color: "inherit",
      opacity: .6,
      [`&.${Ys.selected}`]: {
          opacity: 1
      },
      [`&.${Ys.disabled}`]: {
          opacity: (e.vars || e).palette.action.disabledOpacity
      }
  }, "primary" === t.textColor && {
      color: (e.vars || e).palette.text.secondary,
      [`&.${Ys.selected}`]: {
          color: (e.vars || e).palette.primary.main
      },
      [`&.${Ys.disabled}`]: {
          color: (e.vars || e).palette.text.disabled
      }
  }, "secondary" === t.textColor && {
      color: (e.vars || e).palette.text.secondary,
      [`&.${Ys.selected}`]: {
          color: (e.vars || e).palette.secondary.main
      },
      [`&.${Ys.disabled}`]: {
          color: (e.vars || e).palette.text.disabled
      }
  }, t.fullWidth && {
      flexShrink: 1,
      flexGrow: 1,
      flexBasis: 0,
      maxWidth: "none"
  }, t.wrapped && {
      fontSize: e.typography.pxToRem(12)
  }))), Qs = e__namespace.forwardRef((function(t, r) {
      const n = Xa({
          props: t,
          name: "MuiTab"
      }), {className: o, disabled: i = !1, disableFocusRipple: a = !1, fullWidth: s, icon: l, iconPosition: c = "top", indicator: u, label: d, onChange: f, onClick: p, onFocus: h, selected: m, selectionFollowsFocus: g, textColor: y = "inherit", value: b, wrapped: v = !1} = n, x = zt(n, Js), S = Lt({}, n, {
          disabled: i,
          disableFocusRipple: a,
          selected: m,
          icon: !!l,
          iconPosition: c,
          label: !!d,
          fullWidth: s,
          textColor: y,
          wrapped: v
      }), w = (e => {
          const {classes: t, textColor: r, fullWidth: n, wrapped: o, icon: i, label: a, selected: s, disabled: l} = e;
          return Hr({
              root: [ "root", i && a && "labelIcon", `textColor${vr(r)}`, n && "fullWidth", o && "wrapped", s && "selected", l && "disabled" ],
              iconWrapper: [ "iconWrapper" ]
          }, Gs, t);
      })(S), k = l && d && e__namespace.isValidElement(l) ? e__namespace.cloneElement(l, {
          className: sr(w.iconWrapper, l.props.className)
      }) : l;
      return q.jsxs(Zs, Lt({
          focusRipple: !a,
          className: sr(w.root, o),
          ref: r,
          role: "tab",
          "aria-selected": m,
          disabled: i,
          onClick: e => {
              !m && f && f(e, b), p && p(e);
          },
          onFocus: e => {
              g && !m && f && f(e, b), h && h(e);
          },
          ownerState: S,
          tabIndex: m ? 0 : -1
      }, x, {
          children: [ "top" === c || "start" === c ? q.jsxs(e__namespace.Fragment, {
              children: [ k, d ]
          }) : q.jsxs(e__namespace.Fragment, {
              children: [ d, k ]
          }), u ]
      }));
  })), el = Gr("MuiBox", [ "root" ]), tl = za(), rl = function(t = {}) {
      const {themeId: r, defaultTheme: n, defaultClassName: o = "MuiBox-root", generateClassName: i} = t, a = ho("div", {
          shouldForwardProp: e => "theme" !== e && "sx" !== e && "as" !== e
      })(vi);
      return e__namespace.forwardRef((function(e, t) {
          const s = qa(n), l = Ri(e), {className: c, component: u = "div"} = l, d = zt(l, Ua);
          return q.jsx(a, Lt({
              as: u,
              ref: t,
              className: sr(c, i ? i(o) : o),
              theme: r && s[r] || s
          }, d));
      }));
  }({
      themeId: Da,
      defaultTheme: tl,
      defaultClassName: el.root,
      generateClassName: qr.generate
  });

  function nl() {
      const {logItems: e$1} = et(), t = e.useRef(null);
      return e.useEffect((() => {
          t.current && t.current.scrollIntoView({
              behavior: "smooth"
          });
      }), [ e$1 ]), q.jsxs(material.List, {
          dense: !0,
          sx: {},
          children: [ e$1.map(((e, t) => q.jsx(material.ListItem, {
              children: q.jsx(material.ListItemText, {
                  primary: e,
                  sx: {
                      typography: "overline",
                      lineHeight: "normal",
                      px: 0,
                      my: 0
                  },
                  disableTypography: !0
              })
          }, t))), q.jsx("div", {
              ref: t
          }) ]
      });
  }

  const ol = ({value: e$1, min: t = 0, max: r = 1 / 0, step: o = 1, decimalScale: i = 0, unit: a, singularUnit: s, helperText: l, textAlign: d = "center", hideActionButtons: f = !1, onChange: p, ...h}) => {
      var w, k;
      const [j, C] = e.useState(null == e$1 ? void 0 : e$1.toString()), R = Math.max(...[ t, r, o ].map((e => (e % 1 || 0).toString().length - 2)), 0), E = i > 0 || R > 0;
      i = i > 0 ? i : R;
      const O = al(t, r, E), T = e => il(e, t, r, i), $ = T(j).toString() === j && void 0 !== e$1 ? T(e$1).toString() : j, A = e => {
          C(e);
          const t = T(e);
          t.toString() === e && (null == p || p(t));
      }, P = e => () => A(T(T($) + e).toString());
      h ?? (h = {}), h.inputProps ?? (h.inputProps = {}), (w = h.inputProps).style ?? (w.style = {}), 
      (k = h.inputProps.style).textAlign ?? (k.textAlign = d), h.placeholder ?? (h.placeholder = Math.min(r, Math.max(t, 0)).toString());
      const M = sl(h);
      return f = f || h.readOnly || !1, s ?? (s = a), a ?? (a = s), q.jsx(material.Box, {
          children: q.jsxs(material.FormControl, {
              ...M,
              variant: "outlined",
              children: [ q.jsx(material.InputLabel, {
                  shrink: !0,
                  htmlFor: "number-input",
                  children: h.label
              }), q.jsx(material.OutlinedInput, {
                  notched: !0,
                  error: h.error || Number(j) < t || Number(j) > r,
                  ...h,
                  value: $,
                  id: "number-input",
                  onChange: e => A(e.target.value),
                  onBlur: e => A(T(e.target.value).toString()),
                  onKeyDown: e => {
                      const n = (e => {
                          if (e.ctrlKey || e.shiftKey || e.altKey) return;
                          if ("ArrowUp" === e.key) return void P(o)();
                          if ("ArrowDown" === e.key) return void P(-o)();
                          const t = e.key;
                          if (t.length > 1) return;
                          const r = t.charCodeAt(0);
                          return r < 32 || r > 126 && r < 160 || r > 255 ? void 0 : t;
                      })(e);
                      if (!n) return;
                      const i = e.target;
                      if (null == i.selectionStart || null == i.selectionEnd) return;
                      const a = i.value.substring(0, i.selectionStart) + n + i.value.substring(i.selectionEnd);
                      a.match(O) ? (Number(a) < t || Number(a) > r) && e.preventDefault() : e.preventDefault();
                  },
                  onPaste: e => {
                      var n;
                      const o = null == (n = e.clipboardData) ? void 0 : n.getData("Text");
                      (null == o ? void 0 : o.trim().match(O)) ? (Number(!(null == o ? void 0 : o.trim())) < t || Number(!(null == o ? void 0 : o.trim())) > r) && e.preventDefault() : e.preventDefault();
                  },
                  startAdornment: f ? void 0 : q.jsx(material.InputAdornment, {
                      position: "start",
                      children: q.jsx(material.IconButton, {
                          "aria-label": "decrease value",
                          onClick: P(-o),
                          edge: "start",
                          disabled: h.disabled || T($) <= t,
                          children: q.jsx(material.Icon, {
                              children: "do_not_disturb_on"
                          })
                      })
                  }),
                  endAdornment: (a || !f) && q.jsxs(material.InputAdornment, {
                      position: "end",
                      children: [ a && q.jsx(material.Typography, {
                          className: "cursor-default select-none",
                          children: 1 === T($) ? s : a
                      }), !f && q.jsx(material.IconButton, {
                          "aria-label": "increase value",
                          onClick: P(o),
                          edge: "end",
                          disabled: h.disabled || T($) >= r,
                          color: void 0,
                          sx: {
                              "&:hover": {
                                  color: e => h.color || e.palette.primary.main
                              },
                              "&:focus": {
                                  color: e => h.color || e.palette.primary.main
                              },
                              transition: e => e.transitions.create("color")
                          },
                          children: q.jsx(material.Icon, {
                              children: "add_circle"
                          })
                      }) ]
                  })
              }), l && q.jsx(material.FormHelperText, {
                  children: l
              }) ]
          })
      });
  }, il = (e, t = -1 / 0, r = 1 / 0, n = 0) => {
      let o = "number" == typeof e ? e : Number(e);
      return o = Math.min(r, Math.max(t, isNaN(o) ? 0 : o)), Number(o.toFixed(n));
  }, al = (e, t, r) => {
      let n = "^";
      return n += t < 0 ? "-[0-9]*" : e > 0 ? "[0-9]+" : "-?[0-9]*", r && (n += "(\\.[0-9]*)?"), 
      n += "$", new RegExp(n);
  }, sl = e => ({
      color: e.color,
      disabled: e.disabled,
      error: e.error,
      fullWidth: e.fullWidth,
      required: e.required,
      variant: e.variant
  });

  function ll() {
      const {countTimes: e, standbyTime: t, setCountTimes: r, setStandbyTime: n} = tt();
      return tt((e => e._hasHydrated)) ? q.jsxs(material.List, {
          sx: {},
          children: [ q.jsx(material.ListItem, {
              sx: {
                  pt: 3
              },
              children: q.jsx(ol, {
                  label: "评论数量",
                  min: 1,
                  max: 10,
                  value: e,
                  onChange: r,
                  size: "small",
                  style: {
                      width: 130
                  }
              })
          }), q.jsx(material.ListItem, {
              sx: {
                  pt: 3
              },
              children: q.jsx(ol, {
                  label: "间隔时间（ms）",
                  min: 100,
                  max: 1e4,
                  value: t,
                  step: 100,
                  onChange: n,
                  size: "small",
                  style: {
                      width: 200
                  }
              })
          }), q.jsx(material.ListItem, {
              sx: {
                  pt: 3
              }
          }) ]
      }) : q.jsx("p", {
          children: "Loading..."
      });
  }

  function cl() {
      return q.jsxs(q.Fragment, {
          children: [ q.jsx(material.Typography, {
              variant: "body1",
              gutterBottom: !0,
              children: "本脚本用于自动化学习通讨论区的评论操作。"
          }), q.jsxs(material.Typography, {
              variant: "body2",
              gutterBottom: !0,
              children: [ "作者：", q.jsx("a", {
                  href: "http://github.com/lcandy2",
                  target: "_blank",
                  children: "@lcandy2"
              }) ]
          }) ]
      });
  }

  function ul(e) {
      const {children: t, value: r, index: n, ...o} = e;
      return q.jsx("div", {
          role: "tabpanel",
          hidden: r !== n,
          id: `cx-auto-tabpanel-${n}`,
          "aria-labelledby": `cx-auto-tab-${n}`,
          ...o,
          children: r === n && q.jsx(rl, {
              sx: {
                  p: 0,
                  maxWidth: 280,
                  maxHeight: 300,
                  minWidth: 260,
                  minHeight: 200,
                  overflow: "auto"
              },
              children: t
          })
      });
  }

  function dl(e) {
      return {
          id: `cx-auto-tab-${e}`,
          "aria-controls": `cx-auto-tabpanel-${e}`
      };
  }

  function fl() {
      const [e$1, t] = e.useState(0), {isInActionFrame: r} = rt();
      return q.jsxs(rl, {
          sx: {
              width: "100%"
          },
          children: [ q.jsx(rl, {
              sx: {
                  borderBottom: 1,
                  borderColor: "divider"
              },
              children: q.jsxs(Us, {
                  value: e$1,
                  onChange: (e, r) => {
                      t(r);
                  },
                  "aria-label": "basic tabs example",
                  children: [ q.jsx(Qs, {
                      disabled: r,
                      label: "状态",
                      ...dl(0)
                  }), q.jsx(Qs, {
                      disabled: r,
                      label: "设定",
                      ...dl(1)
                  }), q.jsx(Qs, {
                      disabled: r,
                      label: "关于",
                      ...dl(2)
                  }) ]
              })
          }), q.jsx(ul, {
              value: e$1,
              index: 0,
              children: q.jsx(nl, {})
          }), q.jsx(ul, {
              value: e$1,
              index: 1,
              children: q.jsx(ll, {})
          }), q.jsx(ul, {
              value: e$1,
              index: 2,
              children: q.jsx(cl, {})
          }) ]
      });
  }

  function pl({title: e$1, canBeClosed: r = !0, handleClose: o, actions: i, draggableProps: a, dialogProps: s, maxWidth: l, children: u}) {
      const [d, f] = e.useState(!0), p = e.useRef(null);
      return d && q.jsx(M, {
          handle: "#draggable-dialog-title",
          cancel: '[class*="MuiDialogContent-root"]',
          nodeRef: p,
          ...a,
          children: q.jsx("div", {
              className: "floating-overlay",
              ref: p,
              children: q.jsxs(material.Dialog, {
                  open: !0,
                  hideBackdrop: !0,
                  disableEnforceFocus: !0,
                  disableAutoFocus: !0,
                  disableScrollLock: !0,
                  disablePortal: !0,
                  maxWidth: l || "xs",
                  "aria-labelledby": "draggable-dialog-title",
                  container: () => document.querySelector(".floating-overlay"),
                  ...s,
                  children: [ q.jsx(material.DialogTitle, {
                      style: {
                          cursor: "move"
                      },
                      id: "draggable-dialog-title",
                      children: e$1
                  }), r && q.jsx(material.IconButton, {
                      "aria-label": "close",
                      onClick: () => {
                          f(!1), o && o();
                      },
                      sx: {
                          position: "absolute",
                          right: 8,
                          top: 8,
                          color: e => e.palette.grey[500]
                      },
                      children: q.jsx(material.Icon, {
                          children: "close"
                      })
                  }), q.jsx(material.DialogContent, {
                      dividers: !0,
                      sx: {
                          p: 0
                      },
                      children: q.jsx(material.DialogContentText, {
                          component: "div",
                          children: u
                      })
                  }), i && q.jsx(material.DialogActions, {
                      children: i
                  }) ]
              })
          })
      });
  }

  function hl() {
      const [e$1, r] = e.useState(!0);
      e.useRef(null);
      const {isInActionFrame: o, actionFrameStatus: i, setCurrentStatus: a, setCurrentPage: s} = rt(), l = i.src;
      return e$1 && q.jsxs(q.Fragment, {
          children: [ q.jsx(pl, {
              title: "学习通自动化",
              actions: q.jsx(Nt, {}),
              canBeClosed: !o,
              handleClose: () => {
                  r(!1), a(null), s(null);
              },
              children: q.jsx(fl, {})
          }), l && q.jsxs(pl, {
              title: "--执行讨论回复中--",
              canBeClosed: !1,
              draggableProps: {
                  positionOffset: {
                      x: "300px",
                      y: "30px"
                  }
              },
              maxWidth: "sm",
              children: [ q.jsx("iframe", {
                  id: "cxauto_action",
                  src: l,
                  width: "600",
                  height: "460"
              }), q.jsx("div", {
                  id: "cxauto_action"
              }) ]
          }) ]
      });
  }

  var ml = {}, gl = _;

  ml.createRoot = gl.createRoot, ml.hydrateRoot = gl.hydrateRoot, console.log("Chaoxing auto start!!!"), 
  (ae() || se()) && (console.log("Topic Match"), ml.createRoot((() => {
      const e = document.createElement("div");
      return document.body.append(e), e;
  })()).render(q.jsx(e.StrictMode, {
      children: q.jsx(hl, {})
  })));

})(React, MaterialUI, emotionStyled, emotionReact, ReactDraggable, ReactDOM);