// ==UserScript==
// @name         超兴学习通自动化 ——— Chaoxing Auto
// @namespace    https://github.com/lcandy2/Chaoxing-Auto
// @version      1.0.1
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

(function (e, material, R, react, P, M) {
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
  }, N = {}, L = e, z = Symbol.for("react.element"), D = Symbol.for("react.fragment"), W = Object.prototype.hasOwnProperty, V = L.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner, H = {
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
          $$typeof: z,
          type: e,
          key: i,
          ref: a,
          props: o,
          _owner: V.current
      };
  }

  N.Fragment = D, N.jsx = K, N.jsxs = K, F.exports = N;

  var q = F.exports;

  const X = new URL("https://mooc1.chaoxing.com/bbscircle/grouptopic"), U = new URL("https://mooc1.chaoxing.com/mooc-ans/bbscircle/grouptopic"), G = new URL("https://mooc1.chaoxing.com/bbscircle/gettopicdetail"), Y = new URL("https://mooc1.chaoxing.com/mooc-ans/bbscircle/gettopicdetail"), J = new URL("https://groupweb.chaoxing.com/course/topic/topicList"), Z = new URL("https://groupweb.chaoxing.com/course/topic/v3/bbs"), Q = window.location.href, ee = () => oe() || ae(), te = () => ie() || se(), re = () => oe() || ie(), ne = () => ae() || se(), oe = () => {
      const e = J.href;
      return Q.includes(e);
  }, ie = () => {
      const e = X.href, t = U.href;
      return Q.includes(e) || Q.includes(t);
  }, ae = () => {
      const e = Z.href;
      return Q.includes(e);
  }, se = () => {
      const e = G.href, t = Y.href;
      return Q.includes(e) || Q.includes(t);
  };

  var le = {
      BASE_URL: "/",
      MODE: "production",
      DEV: !1,
      PROD: !0,
      SSR: !1
  };

  const ce = e => {
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
              "production" !== (le ? "production" : void 0) && console.warn("[DEPRECATED] The `destroy` method will be unsupported in a future version. Instead use unsubscribe function returned by subscribe. Everything will be garbage-collected if store is garbage-collected."), 
              r.clear();
          }
      }, a = t = e(n, o, i);
      return i;
  };

  var ue = {
      exports: {}
  }, de = {}, fe = {
      exports: {}
  }, pe = {}, he = e;

  var me = "function" == typeof Object.is ? Object.is : function(e, t) {
      return e === t && (0 !== e || 1 / e == 1 / t) || e != e && t != t;
  }, ge = he.useState, ye = he.useEffect, be = he.useLayoutEffect, ve = he.useDebugValue;

  function xe(e) {
      var t = e.getSnapshot;
      e = e.value;
      try {
          var r = t();
          return !me(e, r);
      } catch (n) {
          return !0;
      }
  }

  var Se = "undefined" == typeof window || void 0 === window.document || void 0 === window.document.createElement ? function(e, t) {
      return t();
  } : function(e, t) {
      var r = t(), n = ge({
          inst: {
              value: r,
              getSnapshot: t
          }
      }), o = n[0].inst, i = n[1];
      return be((function() {
          o.value = r, o.getSnapshot = t, xe(o) && i({
              inst: o
          });
      }), [ e, r, t ]), ye((function() {
          return xe(o) && i({
              inst: o
          }), e((function() {
              xe(o) && i({
                  inst: o
              });
          }));
      }), [ e ]), ve(r), r;
  };

  pe.useSyncExternalStore = void 0 !== he.useSyncExternalStore ? he.useSyncExternalStore : Se, 
  fe.exports = pe;

  var we = fe.exports, Ce = e, ke = we;

  var je = "function" == typeof Object.is ? Object.is : function(e, t) {
      return e === t && (0 !== e || 1 / e == 1 / t) || e != e && t != t;
  }, Ee = ke.useSyncExternalStore, Re = Ce.useRef, Oe = Ce.useEffect, Te = Ce.useMemo, Ae = Ce.useDebugValue;

  de.useSyncExternalStoreWithSelector = function(e, t, r, n, o) {
      var i = Re(null);
      if (null === i.current) {
          var a = {
              hasValue: !1,
              value: null
          };
          i.current = a;
      } else a = i.current;
      i = Te((function() {
          function e(e) {
              if (!l) {
                  if (l = !0, i = e, e = n(e), void 0 !== o && a.hasValue) {
                      var t = a.value;
                      if (o(t, e)) return s = t;
                  }
                  return s = e;
              }
              if (t = s, je(i, e)) return t;
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
      var s = Ee(e, i[0], i[1]);
      return Oe((function() {
          a.hasValue = !0, a.value = s;
      }), [ s ]), Ae(s), s;
  }, ue.exports = de;

  const $e = I(ue.exports);

  var _e = {
      BASE_URL: "/",
      MODE: "production",
      DEV: !1,
      PROD: !0,
      SSR: !1
  };

  const {useDebugValue: Pe} = e, {useSyncExternalStoreWithSelector: Me} = $e;

  let Ie = !1;

  const Be = e => e;

  const Fe = e => {
      "production" !== (_e ? "production" : void 0) && "function" != typeof e && console.warn("[DEPRECATED] Passing a vanilla store will be unsupported in a future version. Instead use `import { useStore } from 'zustand'`.");
      const t = "function" == typeof e ? (e => e ? ce(e) : ce)(e) : e, r = (e, r) => function(e, t = Be, r) {
          "production" !== (_e ? "production" : void 0) && r && !Ie && (console.warn("[DEPRECATED] Use `createWithEqualityFn` instead of `create` or use `useStoreWithEqualityFn` instead of `useStore`. They can be imported from 'zustand/traditional'. https://github.com/pmndrs/zustand/discussions/1937"), 
          Ie = !0);
          const n = Me(e.subscribe, e.getState, e.getServerState || e.getInitialState, t, r);
          return Pe(n), n;
      }(t, e, r);
      return Object.assign(r, t), r;
  }, Ne = e => e ? Fe(e) : Fe;

  var Le = {
      BASE_URL: "/",
      MODE: "production",
      DEV: !1,
      PROD: !0,
      SSR: !1
  };

  const ze = (e, t) => (...r) => Object.assign({}, e, t(...r));

  function De(e, t) {
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

  const We = e => t => {
      try {
          const r = e(t);
          return r instanceof Promise ? r : {
              then: e => We(e)(r),
              catch(e) {
                  return this;
              }
          };
      } catch (r) {
          return {
              then(e) {
                  return this;
              },
              catch: e => We(e)(r)
          };
      }
  }, Ve = (e, t) => "getStorage" in t || "serialize" in t || "deserialize" in t ? ("production" !== (Le ? "production" : void 0) && console.warn("[DEPRECATED] `getStorage`, `serialize` and `deserialize` options are deprecated. Use `storage` option instead."), 
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
      const u = We(i.serialize), d = () => {
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
          return We(c.getItem.bind(c))(i.name).then((e => {
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
          storage: De((() => localStorage)),
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
          return We(c.getItem.bind(c))(i.name).then((e => {
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

  var He = (() => "undefined" != typeof GM_deleteValue ? GM_deleteValue : void 0)(), Ke = (() => "undefined" != typeof GM_getValue ? GM_getValue : void 0)(), qe = (() => "undefined" != typeof GM_setValue ? GM_setValue : void 0)();

  const Xe = {
      getItem: async e => await Ke(e) || null,
      setItem: async (e, t) => {
          await qe(e, t);
      },
      removeItem: async e => {
          await He(e);
      }
  }, Ue = Ne(ze({
      logItems: []
  }, (e => ({
      addLogItem: t => {
          e((e => ({
              logItems: [ ...e.logItems, t ]
          })));
      }
  })))), Ge = Ne(Ve(ze({
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
      storage: De((() => Xe)),
      onRehydrateStorage: () => e => {
          e && e.setHasHydrated(!0);
      }
  })), Ye = Ne(ze({
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

  async function Je(e = 1) {
      const t = await Ge.getState().standbyTime;
      return new Promise((r => setTimeout(r, t * e)));
  }

  async function Ze() {
      const e = ae(), t = se(), r = Ue.getState().addLogItem, n = {
          title: void 0,
          content: void 0,
          replies: void 0
      };
      if (e && !t) try {
          const e = document.querySelector(".topicDetail_detail"), t = document.querySelector(".topicDetail_replyList");
          if (!e || !t) return;
          const r = Qe(e), o = tt(e), i = await rt(t);
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
          const r = nt(t), o = ot(t), i = it(t);
          n.title = r, n.content = o, n.replies = i;
      } catch (o) {
          console.error(o), r(`获取讨论详情失败：${o}`);
      }
      return n;
  }

  const Qe = e => {
      var t;
      const r = e.querySelector(".topicDetail_title");
      return r ? null == (t = r.textContent) ? void 0 : t.trim() : void 0;
  }, et = e => {
      const t = document.querySelector(".topicDetail_replyList");
      if (!t) return void console.error("Element not found");
      if (t.children.length > 1) return void e();
      const r = new MutationObserver(((t, r) => {
          for (let n of t) "childList" === n.type && e();
      }));
      return r.observe(t, {
          attributes: !1,
          childList: !0,
          subtree: !0
      }), () => r.disconnect();
  }, tt = e => {
      const t = e.querySelector(".topicDetail_main");
      if (!t) return;
      return Array.from(t.children).filter((e => !e.classList.contains("topicDetail_info"))).map((e => {
          var t;
          return null == (t = e.textContent) ? void 0 : t.trim();
      })).join(" ");
  }, rt = async e => {
      const t = document.querySelector(".classReplyCount span"), r = Number((null == t ? void 0 : t.textContent) || 0);
      let n = (() => {
          Je(.5);
          return Array.from(e.querySelectorAll(".topicDetail_replyItem")).map((e => {
              var t, r;
              const n = e.querySelector(".author"), o = e.querySelector(".replyContent");
              return {
                  author: n ? null == (t = n.textContent) ? void 0 : t.trim() : "",
                  content: o ? null == (r = o.textContent) ? void 0 : r.trim() : ""
              };
          }));
      })();
      return 0 === r || n.length > 0 ? n : [ {
          content: "NEED_OBSERVE"
      } ];
  }, nt = e => {
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
  }, ot = e => {
      var t;
      const r = e.querySelector("#topicContent");
      return r ? null == (t = r.textContent) ? void 0 : t.trim() : void 0;
  }, it = e => {
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
  }, at = window.location.hash, st = e => {
      at.includes(e) || window.history.replaceState(null, "", `${at}#${e}`);
  }, lt = () => at.includes("cxauto_start"), ct = () => at.includes("cxauto_success"), ut = () => at.includes("cxauto_action"), dt = e => {
      const t = "cxauto_success";
      return e ? `${e}#${t}` : (st(t), !0);
  }, ft = e => {
      const t = "cxauto_action";
      return e ? `${e}#${t}` : (st(t), !0);
  }, pt = ee() && !te() ? "new" : te() && !ee() ? "legacy" : null;

  function ht(e) {
      const t = Ue.getState().addLogItem;
      t("----- 执行失败 -----"), t(e.toString()), t(`-v=${pt}`), console.error(e, pt);
  }

  const mt = () => Array.from(document.querySelectorAll("div#showTopics div.content1118")).filter((e => Array.from(e.children).some((e => e.classList.contains("oneRight"))))).map((e => {
      var t, r, n;
      const o = e.querySelector("h3 a"), i = (null == (t = null == o ? void 0 : o.textContent) ? void 0 : t.trim()) || "", a = e.querySelector("p.clearfix");
      return {
          title: i,
          author: (null == (r = null == a ? void 0 : a.children[0].textContent) ? void 0 : r.trim()) || "",
          replyCount: (null == (n = null == a ? void 0 : a.children[1].textContent) ? void 0 : n.trim()) || "",
          url: (null == o ? void 0 : o.getAttribute("href")) || ""
      };
  })), gt = () => Array.from(document.querySelectorAll("div.dataCon ul.dataBody li.dataBody_topic")).map((e => {
      var t, r, n;
      const o = e.querySelector("span.author"), i = (null == (t = null == o ? void 0 : o.textContent) ? void 0 : t.trim()) || "", a = e.querySelector("div.topic_interactive div.comment span"), s = (null == (r = null == a ? void 0 : a.textContent) ? void 0 : r.trim()) || "", l = e.querySelector("a.topicli_link"), c = (null == l ? void 0 : l.getAttribute("href")) || "";
      return {
          title: (null == (n = null == l ? void 0 : l.textContent) ? void 0 : n.trim()) || "",
          author: i,
          replyCount: s,
          url: c
      };
  })), yt = ae() && !se() ? "new" : se() && !ae() ? "legacy" : null, bt = "new" === yt, vt = Ue.getState().addLogItem;

  const xt = (e, t) => {
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
  }, St = async e => {
      try {
          const t = document.querySelector(e);
          if (console.log(t, e), !t) throw new Error("无法找到进行回复的按钮。");
          return t.click(), vt("已点击进行回复的按钮，即将继续..."), await Je(.1), !0;
      } catch (t) {
          return ht(t), !1;
      }
  }, wt = async e => {
      try {
          const t = document.querySelector(e);
          if (!t) throw new Error("无法找到用于回复的文本区域。");
          return t.click(), t.focus(), vt("已找到用于回复的文本区域，等待回复..."), await Je(.1), t;
      } catch (t) {
          ht(t);
      }
  }, Ct = async ({selector: e, textarea: t, contextToReply: r}) => {
      try {
          const n = document.querySelector(e);
          if (!n || !t) throw new Error("Required elements not found.");
          for (let e = 0; e < r.length; e++) t.value = r[e], vt(`Reply ${r[e]} filled, waiting to submit...`), 
          "legacy" === yt && n.addEventListener("click", (function(e) {
              e.preventDefault();
          })), await Je(2), n.click(), t.value = "", e !== r.length - 1 && (await Je(1), vt("Reply submitted, waiting to continue..."));
          return !0;
      } catch (n) {
          ht(n);
      }
  };

  const kt = ({setCurrentStatus: e}) => async () => {
      e("triggered");
  }, jt = async ({setCurrentStatus: e}) => {
      e(await async function() {
          const {countTimes: e} = Ge.getState(), {topicDetail: t} = Ye.getState(), r = xt(t, e);
          console.debug("currentVersion", yt);
          try {
              if (r.length <= 0) throw new Error("未获取到回复评论。");
              const e = bt ? "div.topicDetail_detail div.replyBtn" : "div.oneDiv p.clearfix a.tl1", t = bt ? "div.topicDetail_editContainer div.replyEdit textarea" : "div.plDiv div.hfpl textarea", n = bt ? "div.replyEditBtnGroup div.addReply" : "div.plDiv div.hfpl input.grenBtn", o = await St(e), i = await wt(t), a = await Ct({
                  selector: n,
                  textarea: i,
                  contextToReply: r
              });
              if (o && i && a) return !0;
          } catch (n) {
              return ht(n), !1;
          }
      }() ? "success" : "failed");
  }, Et = () => {
      console.debug("PostMessageSuccess"), window.parent.postMessage({
          type: "cxauto_action_frame",
          status: "success"
      }, "*");
  }, Rt = () => {
      window.addEventListener("message", (e => {
          if ("cxauto_action_frame" === e.data.type) {
              const t = Ye.getState().actionFrameStatus.status;
              "success" === e.data.status && "running" === t && Ye.getState().setActionFrameStatusStatus("success");
          }
      }));
  }, Ot = Ye.getState().setActionFrameStatusStatus, Tt = Ye.getState().setActionFrameStatusIndex, At = Ye.getState().setActionFrameStatusTotal, $t = Ye.getState().setActionFrameStatusSrc, _t = Ue.getState().addLogItem;

  const Pt = () => {
      const {topicList: e} = Ye.getState();
      return e.length, Tt(0), At(e.length), $t(""), !0;
  }, Mt = async (e, t) => ($t(""), e === t - 1 || (Tt(e + 1), Je(.5), Ot("waitingToStart"), 
  !1));

  function It() {
      const {currentPage: e$1, setCurrentPage: t} = Ye(), {topicDetail: o, setTopicDetail: i} = Ye(), {topicList: a, setTopicList: s} = Ye(), {currentStatus: f, setCurrentStatus: p} = Ye(), {isInActionFrame: h, setIsInActionFrame: m} = Ye(), [g, y] = e.useState(!0), {addLogItem: b} = Ue(), {actionFrameStatus: v, setActionFrameStatus: x, setActionFrameStatusStatus: S} = Ye(), w = v.status;
      e.useEffect((() => {
          ct() && p("success"), ne() ? t("detail") : re() && t("list");
      }), []), e.useEffect((() => {
          if ("list" === e$1 || "detail" === e$1) {
              let t;
              switch (e$1) {
                case "detail":
                  t = "讨论详情", (async () => {
                      const e = await Ze();
                      if (e) if (e.replies && "NEED_OBSERVE" === e.replies[0].content) {
                          let e;
                          console.debug("NEED_OBSERVE"), e = et((async () => {
                              console.log("Replies changed"), e && e();
                              const t = await Ze();
                              t && (console.debug("topicDetail", t), i(t), f || p("idle"));
                          }));
                      } else i(e), f || p("idle");
                  })();
                  break;

                case "list":
                  t = "讨论列表";
                  const e = function() {
                      const e = "new" === (oe() && !ie() ? "new" : ie() && !oe() ? "legacy" : null);
                      try {
                          if (e) {
                              const e = gt();
                              return console.debug("getNewItems", e), e;
                          }
                          {
                              const e = mt();
                              return console.debug("getLegacyItems", e), e;
                          }
                      } catch (t) {
                          ht(t);
                      }
                  }();
                  e && (s(e), w || f || S("idle"));
                  break;

                default:
                  t = "未知页面";
              }
              b(`检测到当前为 [${t}]`);
          }
      }), [ e$1 ]), function({topicDetail: e$1}) {
          const {addLogItem: t} = Ue();
          e.useEffect((() => {
              e$1 && (e$1.title && t(`获取到讨论标题：${e$1.title}`), e$1.content && t(`获取到讨论内容：${e$1.content}`), 
              e$1.replies && t(`获取到讨论回复：共 ${e$1.replies.length} 条`));
          }), [ e$1 ]);
      }({
          topicDetail: o
      });
      const C = kt({
          setCurrentStatus: p
      });
      !function({setCurrentStatus: e$1, currentStatus: t, setIsButtonDisabled: n, setIsInActionFrame: o}) {
          const {addLogItem: i} = Ue();
          e.useEffect((() => {
              switch (t) {
                case "running":
                default:
                  n(!0);
                  break;

                case "triggered":
                  n(!0), e$1("running"), jt({
                      setCurrentStatus: e$1
                  });
                  break;

                case "success":
                  n(!1), dt(), i("All done!");
                  break;

                case "idle":
                  n(!1);
                  const t = ut(), r = lt() || t;
                  t && o(!0), r && e$1("triggered");
                  break;

                case "failed":
                  n(!1);
              }
          }), [ t ]);
      }({
          setCurrentStatus: p,
          currentStatus: f,
          setIsButtonDisabled: y,
          setIsInActionFrame: m
      }), e.useEffect((() => {
          a.length && b(`获取到发起的讨论：共 ${a.length} 条`);
      }), [ a ]), e.useEffect((() => {
          h && "success" === f && (console.debug("PostMessageSuccess"), Et());
      }), [ h, f ]);
      return e.useEffect((() => {
          const e = w;
          e && console.debug("PanelActions useEffect actionFrameStatus", v);
          const t = async () => {
              if (e) {
                  const t = await async function(e) {
                      const {actionFrameStatus: t} = Ye.getState(), r = t.total, {topicList: n} = Ye.getState();
                      console.debug("RunningTopicListReply Status", e), "triggered" === e && (Pt(), _t("开始：批量回复讨论"), 
                      Je(.1), Ot("waitingToStart"));
                      const o = t.index || 0;
                      try {
                          if ("waitingToStart" === e) {
                              const e = n[o].url;
                              if (e) {
                                  const t = ft(e).toString();
                                  $t(t), _t(`正在回复讨论：${n[o].title}`), Je(.1), Rt(), Je(.3), Ot("running");
                              } else ht("未找到讨论链接"), Ot("failed");
                          }
                          if ("failed" === e && Ot("waitingToNext"), "success" === e) {
                              const e = n[o].title;
                              _t(`已回复讨论：${e}`), Je(.4), Ot("waitingToNext");
                          }
                          const t = r || 0;
                          if ("waitingToNext" === e) return await Mt(o, t);
                      } catch (i) {
                          ht(i), Ot("failed");
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
              onClick: C,
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

  function Bt(e, t) {
      if (null == e) return {};
      var r, n, o = {}, i = Object.keys(e);
      for (n = 0; n < i.length; n++) r = i[n], t.indexOf(r) >= 0 || (o[r] = e[r]);
      return o;
  }

  function Ft() {
      return Ft = Object.assign ? Object.assign.bind() : function(e) {
          for (var t = 1; t < arguments.length; t++) {
              var r = arguments[t];
              for (var n in r) Object.prototype.hasOwnProperty.call(r, n) && (e[n] = r[n]);
          }
          return e;
      }, Ft.apply(this, arguments);
  }

  var Nt, Lt = {
      exports: {}
  }, zt = {}, Dt = Symbol.for("react.element"), Wt = Symbol.for("react.portal"), Vt = Symbol.for("react.fragment"), Ht = Symbol.for("react.strict_mode"), Kt = Symbol.for("react.profiler"), qt = Symbol.for("react.provider"), Xt = Symbol.for("react.context"), Ut = Symbol.for("react.server_context"), Gt = Symbol.for("react.forward_ref"), Yt = Symbol.for("react.suspense"), Jt = Symbol.for("react.suspense_list"), Zt = Symbol.for("react.memo"), Qt = Symbol.for("react.lazy"), er = Symbol.for("react.offscreen");

  function tr(e) {
      if ("object" == typeof e && null !== e) {
          var t = e.$$typeof;
          switch (t) {
            case Dt:
              switch (e = e.type) {
                case Vt:
                case Kt:
                case Ht:
                case Yt:
                case Jt:
                  return e;

                default:
                  switch (e = e && e.$$typeof) {
                    case Ut:
                    case Xt:
                    case Gt:
                    case Qt:
                    case Zt:
                    case qt:
                      return e;

                    default:
                      return t;
                  }
              }

            case Wt:
              return t;
          }
      }
  }

  Nt = Symbol.for("react.module.reference"), zt.ContextConsumer = Xt, zt.ContextProvider = qt, 
  zt.Element = Dt, zt.ForwardRef = Gt, zt.Fragment = Vt, zt.Lazy = Qt, zt.Memo = Zt, 
  zt.Portal = Wt, zt.Profiler = Kt, zt.StrictMode = Ht, zt.Suspense = Yt, zt.SuspenseList = Jt, 
  zt.isAsyncMode = function() {
      return !1;
  }, zt.isConcurrentMode = function() {
      return !1;
  }, zt.isContextConsumer = function(e) {
      return tr(e) === Xt;
  }, zt.isContextProvider = function(e) {
      return tr(e) === qt;
  }, zt.isElement = function(e) {
      return "object" == typeof e && null !== e && e.$$typeof === Dt;
  }, zt.isForwardRef = function(e) {
      return tr(e) === Gt;
  }, zt.isFragment = function(e) {
      return tr(e) === Vt;
  }, zt.isLazy = function(e) {
      return tr(e) === Qt;
  }, zt.isMemo = function(e) {
      return tr(e) === Zt;
  }, zt.isPortal = function(e) {
      return tr(e) === Wt;
  }, zt.isProfiler = function(e) {
      return tr(e) === Kt;
  }, zt.isStrictMode = function(e) {
      return tr(e) === Ht;
  }, zt.isSuspense = function(e) {
      return tr(e) === Yt;
  }, zt.isSuspenseList = function(e) {
      return tr(e) === Jt;
  }, zt.isValidElementType = function(e) {
      return "string" == typeof e || "function" == typeof e || e === Vt || e === Kt || e === Ht || e === Yt || e === Jt || e === er || "object" == typeof e && null !== e && (e.$$typeof === Qt || e.$$typeof === Zt || e.$$typeof === qt || e.$$typeof === Xt || e.$$typeof === Gt || e.$$typeof === Nt || void 0 !== e.getModuleId);
  }, zt.typeOf = tr, Lt.exports = zt;

  var rr = Lt.exports;

  function nr(e) {
      var t, r, n = "";
      if ("string" == typeof e || "number" == typeof e) n += e; else if ("object" == typeof e) if (Array.isArray(e)) {
          var o = e.length;
          for (t = 0; t < o; t++) e[t] && (r = nr(e[t])) && (n && (n += " "), n += r);
      } else for (r in e) e[r] && (n && (n += " "), n += r);
      return n;
  }

  function or() {
      for (var e, t, r = 0, n = "", o = arguments.length; r < o; r++) (e = arguments[r]) && (t = nr(e)) && (n && (n += " "), 
      n += t);
      return n;
  }

  function ir(e) {
      if ("object" != typeof e || null === e) return !1;
      const t = Object.getPrototypeOf(e);
      return !(null !== t && t !== Object.prototype && null !== Object.getPrototypeOf(t) || Symbol.toStringTag in e || Symbol.iterator in e);
  }

  function ar(e) {
      if (!ir(e)) return e;
      const t = {};
      return Object.keys(e).forEach((r => {
          t[r] = ar(e[r]);
      })), t;
  }

  function sr(e, t, r = {
      clone: !0
  }) {
      const n = r.clone ? Ft({}, e) : e;
      return ir(e) && ir(t) && Object.keys(t).forEach((o => {
          "__proto__" !== o && (ir(t[o]) && o in e && ir(e[o]) ? n[o] = sr(e[o], t[o], r) : r.clone ? n[o] = ir(t[o]) ? ar(t[o]) : t[o] : n[o] = t[o]);
      })), n;
  }

  const lr = Object.freeze(Object.defineProperty({
      __proto__: null,
      default: sr,
      isPlainObject: ir
  }, Symbol.toStringTag, {
      value: "Module"
  }));

  function cr(e) {
      let t = "https://mui.com/production-error/?code=" + e;
      for (let r = 1; r < arguments.length; r += 1) t += "&args[]=" + encodeURIComponent(arguments[r]);
      return "Minified MUI error #" + e + "; visit " + t + " for the full message.";
  }

  const ur = Object.freeze(Object.defineProperty({
      __proto__: null,
      default: cr
  }, Symbol.toStringTag, {
      value: "Module"
  })), dr = /^\s*function(?:\s|\s*\/\*.*\*\/\s*)+([^(\s/]*)\s*/;

  function fr(e) {
      const t = `${e}`.match(dr);
      return t && t[1] || "";
  }

  function pr(e, t = "") {
      return e.displayName || e.name || fr(e) || t;
  }

  function hr(e, t, r) {
      const n = pr(t);
      return e.displayName || ("" !== n ? `${r}(${n})` : r);
  }

  const mr = Object.freeze(Object.defineProperty({
      __proto__: null,
      default: function(e) {
          if (null != e) {
              if ("string" == typeof e) return e;
              if ("function" == typeof e) return pr(e, "Component");
              if ("object" == typeof e) switch (e.$$typeof) {
                case rr.ForwardRef:
                  return hr(e, e.render, "ForwardRef");

                case rr.Memo:
                  return hr(e, e.type, "memo");

                default:
                  return;
              }
          }
      },
      getFunctionName: fr
  }, Symbol.toStringTag, {
      value: "Module"
  }));

  function gr(e) {
      if ("string" != typeof e) throw new Error(cr(7));
      return e.charAt(0).toUpperCase() + e.slice(1);
  }

  const yr = Object.freeze(Object.defineProperty({
      __proto__: null,
      default: gr
  }, Symbol.toStringTag, {
      value: "Module"
  }));

  function br(e, t = 166) {
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

  function vr(e) {
      return e && e.ownerDocument || document;
  }

  function xr(e) {
      return vr(e).defaultView || window;
  }

  const Sr = "undefined" != typeof window ? e__namespace.useLayoutEffect : e__namespace.useEffect;

  function wr(t) {
      const r = e__namespace.useRef(t);
      return Sr((() => {
          r.current = t;
      })), e__namespace.useRef(((...e) => (0, r.current)(...e))).current;
  }

  function Cr(...t) {
      return e__namespace.useMemo((() => t.every((e => null == e)) ? null : e => {
          t.forEach((t => {
              !function(e, t) {
                  "function" == typeof e ? e(t) : e && (e.current = t);
              }(t, e);
          }));
      }), t);
  }

  const kr = {};

  const jr = [];

  class Er {
      constructor() {
          this.currentId = null, this.clear = () => {
              null !== this.currentId && (clearTimeout(this.currentId), this.currentId = null);
          }, this.disposeEffect = () => this.clear;
      }
      static create() {
          return new Er;
      }
      start(e, t) {
          this.clear(), this.currentId = setTimeout((() => {
              this.currentId = null, t();
          }), e);
      }
  }

  function Rr() {
      const t = function(t, r) {
          const n = e__namespace.useRef(kr);
          return n.current === kr && (n.current = t(r)), n;
      }(Er.create).current;
      var r;
      return r = t.disposeEffect, e__namespace.useEffect(r, jr), t;
  }

  let Or = !0, Tr = !1;

  const Ar = new Er, $r = {
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

  function _r(e) {
      e.metaKey || e.altKey || e.ctrlKey || (Or = !0);
  }

  function Pr() {
      Or = !1;
  }

  function Mr() {
      "hidden" === this.visibilityState && Tr && (Or = !0);
  }

  function Ir(e) {
      const {target: t} = e;
      try {
          return t.matches(":focus-visible");
      } catch (r) {}
      return Or || function(e) {
          const {type: t, tagName: r} = e;
          return !("INPUT" !== r || !$r[t] || e.readOnly) || "TEXTAREA" === r && !e.readOnly || !!e.isContentEditable;
      }(t);
  }

  function Br() {
      const t = e__namespace.useCallback((e => {
          var t;
          null != e && ((t = e.ownerDocument).addEventListener("keydown", _r, !0), t.addEventListener("mousedown", Pr, !0), 
          t.addEventListener("pointerdown", Pr, !0), t.addEventListener("touchstart", Pr, !0), 
          t.addEventListener("visibilitychange", Mr, !0));
      }), []), r = e__namespace.useRef(!1);
      return {
          isFocusVisibleRef: r,
          onFocus: function(e) {
              return !!Ir(e) && (r.current = !0, !0);
          },
          onBlur: function() {
              return !!r.current && (Tr = !0, Ar.start(100, (() => {
                  Tr = !1;
              })), r.current = !1, !0);
          },
          ref: t
      };
  }

  let Fr;

  function Nr() {
      if (Fr) return Fr;
      const e = document.createElement("div"), t = document.createElement("div");
      return t.style.width = "10px", t.style.height = "1px", e.appendChild(t), e.dir = "rtl", 
      e.style.fontSize = "14px", e.style.width = "4px", e.style.height = "1px", e.style.position = "absolute", 
      e.style.top = "-1000px", e.style.overflow = "scroll", document.body.appendChild(e), 
      Fr = "reverse", e.scrollLeft > 0 ? Fr = "default" : (e.scrollLeft = 1, 0 === e.scrollLeft && (Fr = "negative")), 
      document.body.removeChild(e), Fr;
  }

  function Lr(e, t) {
      const r = e.scrollLeft;
      if ("rtl" !== t) return r;
      switch (Nr()) {
        case "negative":
          return e.scrollWidth - e.clientWidth + r;

        case "reverse":
          return e.scrollWidth - e.clientWidth - r;

        default:
          return r;
      }
  }

  function zr(e, t) {
      const r = Ft({}, t);
      return Object.keys(e).forEach((n => {
          if (n.toString().match(/^(components|slots)$/)) r[n] = Ft({}, e[n], r[n]); else if (n.toString().match(/^(componentsProps|slotProps)$/)) {
              const o = e[n] || {}, i = t[n];
              r[n] = {}, i && Object.keys(i) ? o && Object.keys(o) ? (r[n] = Ft({}, i), Object.keys(o).forEach((e => {
                  r[n][e] = zr(o[e], i[e]);
              }))) : r[n] = i : r[n] = o;
          } else void 0 === r[n] && (r[n] = e[n]);
      })), r;
  }

  function Dr(e, t, r = void 0) {
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

  const Wr = e => e, Vr = (() => {
      let e = Wr;
      return {
          configure(t) {
              e = t;
          },
          generate: t => e(t),
          reset() {
              e = Wr;
          }
      };
  })(), Hr = {
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

  function Kr(e, t, r = "Mui") {
      const n = Hr[t];
      return n ? `${r}-${n}` : `${Vr.generate(e)}-${t}`;
  }

  function qr(e, t, r = "Mui") {
      const n = {};
      return t.forEach((t => {
          n[t] = Kr(e, t, r);
      })), n;
  }

  const Xr = Object.freeze(Object.defineProperty({
      __proto__: null,
      default: function(e, t = Number.MIN_SAFE_INTEGER, r = Number.MAX_SAFE_INTEGER) {
          return Math.max(t, Math.min(e, r));
      }
  }, Symbol.toStringTag, {
      value: "Module"
  }));

  function Ur(e) {
      if (void 0 === e) return {};
      const t = {};
      return Object.keys(e).filter((t => !(t.match(/^on[A-Z]/) && "function" == typeof e[t]))).forEach((r => {
          t[r] = e[r];
      })), t;
  }

  function Gr(e) {
      const {getSlotProps: t, additionalProps: r, externalSlotProps: n, externalForwardedProps: o, className: i} = e;
      if (!t) {
          const e = or(null == r ? void 0 : r.className, i, null == o ? void 0 : o.className, null == n ? void 0 : n.className), t = Ft({}, null == r ? void 0 : r.style, null == o ? void 0 : o.style, null == n ? void 0 : n.style), a = Ft({}, r, o, n);
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
      }(Ft({}, o, n)), s = Ur(n), l = Ur(o), c = t(a), u = or(null == c ? void 0 : c.className, null == r ? void 0 : r.className, i, null == o ? void 0 : o.className, null == n ? void 0 : n.className), d = Ft({}, null == c ? void 0 : c.style, null == r ? void 0 : r.style, null == o ? void 0 : o.style, null == n ? void 0 : n.style), f = Ft({}, c, r, l, s);
      return u.length > 0 && (f.className = u), Object.keys(d).length > 0 && (f.style = d), 
      {
          props: f,
          internalRef: c.ref
      };
  }

  const Yr = [ "elementType", "externalSlotProps", "ownerState", "skipResolvingSlotProps" ];

  function Jr(e) {
      var t;
      const {elementType: r, externalSlotProps: n, ownerState: o, skipResolvingSlotProps: i = !1} = e, a = Bt(e, Yr), s = i ? {} : function(e, t, r) {
          return "function" == typeof e ? e(t, r) : e;
      }(n, o), {props: l, internalRef: c} = Gr(Ft({}, a, {
          externalSlotProps: s
      })), u = function(e, t, r) {
          return void 0 === e || "string" == typeof e ? t : Ft({}, t, {
              ownerState: Ft({}, t.ownerState, r)
          });
      }(r, Ft({}, l, {
          ref: Cr(c, null == s ? void 0 : s.ref, null == (t = e.additionalProps) ? void 0 : t.ref)
      }), o);
      return u;
  }

  const Zr = e__namespace.createContext(), Qr = () => {
      const t = e__namespace.useContext(Zr);
      return null != t && t;
  };

  var en, tn = {}, rn = {
      exports: {}
  };

  (en = rn).exports = function(e) {
      return e && e.__esModule ? e : {
          default: e
      };
  }, en.exports.__esModule = !0, en.exports.default = en.exports;

  var nn, on = rn.exports, an = {
      exports: {}
  };

  var sn, ln = {
      exports: {}
  };

  var cn = function() {
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
  }(), un = "-ms-", dn = "-moz-", fn = "-webkit-", pn = "comm", hn = "rule", mn = "decl", gn = "@keyframes", yn = Math.abs, bn = String.fromCharCode, vn = Object.assign;

  function xn(e) {
      return e.trim();
  }

  function Sn(e, t, r) {
      return e.replace(t, r);
  }

  function wn(e, t) {
      return e.indexOf(t);
  }

  function Cn(e, t) {
      return 0 | e.charCodeAt(t);
  }

  function kn(e, t, r) {
      return e.slice(t, r);
  }

  function jn(e) {
      return e.length;
  }

  function En(e) {
      return e.length;
  }

  function Rn(e, t) {
      return t.push(e), e;
  }

  var On = 1, Tn = 1, An = 0, $n = 0, _n = 0, Pn = "";

  function Mn(e, t, r, n, o, i, a) {
      return {
          value: e,
          root: t,
          parent: r,
          type: n,
          props: o,
          children: i,
          line: On,
          column: Tn,
          length: a,
          return: ""
      };
  }

  function In(e, t) {
      return vn(Mn("", null, null, "", null, null, 0), e, {
          length: -e.length
      }, t);
  }

  function Bn() {
      return _n = $n < An ? Cn(Pn, $n++) : 0, Tn++, 10 === _n && (Tn = 1, On++), _n;
  }

  function Fn() {
      return Cn(Pn, $n);
  }

  function Nn() {
      return $n;
  }

  function Ln(e, t) {
      return kn(Pn, e, t);
  }

  function zn(e) {
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

  function Dn(e) {
      return On = Tn = 1, An = jn(Pn = e), $n = 0, [];
  }

  function Wn(e) {
      return Pn = "", e;
  }

  function Vn(e) {
      return xn(Ln($n - 1, qn(91 === e ? e + 2 : 40 === e ? e + 1 : e)));
  }

  function Hn(e) {
      for (;(_n = Fn()) && _n < 33; ) Bn();
      return zn(e) > 2 || zn(_n) > 3 ? "" : " ";
  }

  function Kn(e, t) {
      for (;--t && Bn() && !(_n < 48 || _n > 102 || _n > 57 && _n < 65 || _n > 70 && _n < 97); ) ;
      return Ln(e, Nn() + (t < 6 && 32 == Fn() && 32 == Bn()));
  }

  function qn(e) {
      for (;Bn(); ) switch (_n) {
        case e:
          return $n;

        case 34:
        case 39:
          34 !== e && 39 !== e && qn(_n);
          break;

        case 40:
          41 === e && qn(e);
          break;

        case 92:
          Bn();
      }
      return $n;
  }

  function Xn(e, t) {
      for (;Bn() && e + _n !== 57 && (e + _n !== 84 || 47 !== Fn()); ) ;
      return "/*" + Ln(t, $n - 1) + "*" + bn(47 === e ? e : Bn());
  }

  function Un(e) {
      for (;!zn(Fn()); ) Bn();
      return Ln(e, $n);
  }

  function Gn(e) {
      return Wn(Yn("", null, null, null, [ "" ], e = Dn(e), 0, [ 0 ], e));
  }

  function Yn(e, t, r, n, o, i, a, s, l) {
      for (var c = 0, u = 0, d = a, f = 0, p = 0, h = 0, m = 1, g = 1, y = 1, b = 0, v = "", x = o, S = i, w = n, C = v; g; ) switch (h = b, 
      b = Bn()) {
        case 40:
          if (108 != h && 58 == Cn(C, d - 1)) {
              -1 != wn(C += Sn(Vn(b), "&", "&\f"), "&\f") && (y = -1);
              break;
          }

        case 34:
        case 39:
        case 91:
          C += Vn(b);
          break;

        case 9:
        case 10:
        case 13:
        case 32:
          C += Hn(h);
          break;

        case 92:
          C += Kn(Nn() - 1, 7);
          continue;

        case 47:
          switch (Fn()) {
            case 42:
            case 47:
              Rn(Zn(Xn(Bn(), Nn()), t, r), l);
              break;

            default:
              C += "/";
          }
          break;

        case 123 * m:
          s[c++] = jn(C) * y;

        case 125 * m:
        case 59:
        case 0:
          switch (b) {
            case 0:
            case 125:
              g = 0;

            case 59 + u:
              -1 == y && (C = Sn(C, /\f/g, "")), p > 0 && jn(C) - d && Rn(p > 32 ? Qn(C + ";", n, r, d - 1) : Qn(Sn(C, " ", "") + ";", n, r, d - 2), l);
              break;

            case 59:
              C += ";";

            default:
              if (Rn(w = Jn(C, t, r, c, u, o, s, v, x = [], S = [], d), i), 123 === b) if (0 === u) Yn(C, t, w, w, x, i, d, s, S); else switch (99 === f && 110 === Cn(C, 3) ? 100 : f) {
                case 100:
                case 108:
                case 109:
                case 115:
                  Yn(e, w, w, n && Rn(Jn(e, w, w, 0, 0, o, s, v, o, x = [], d), S), o, S, d, s, n ? x : S);
                  break;

                default:
                  Yn(C, w, w, w, [ "" ], S, 0, s, S);
              }
          }
          c = u = p = 0, m = y = 1, v = C = "", d = a;
          break;

        case 58:
          d = 1 + jn(C), p = h;

        default:
          if (m < 1) if (123 == b) --m; else if (125 == b && 0 == m++ && 125 == (_n = $n > 0 ? Cn(Pn, --$n) : 0, 
          Tn--, 10 === _n && (Tn = 1, On--), _n)) continue;
          switch (C += bn(b), b * m) {
            case 38:
              y = u > 0 ? 1 : (C += "\f", -1);
              break;

            case 44:
              s[c++] = (jn(C) - 1) * y, y = 1;
              break;

            case 64:
              45 === Fn() && (C += Vn(Bn())), f = Fn(), u = d = jn(v = C += Un(Nn())), b++;
              break;

            case 45:
              45 === h && 2 == jn(C) && (m = 0);
          }
      }
      return i;
  }

  function Jn(e, t, r, n, o, i, a, s, l, c, u) {
      for (var d = o - 1, f = 0 === o ? i : [ "" ], p = En(f), h = 0, m = 0, g = 0; h < n; ++h) for (var y = 0, b = kn(e, d + 1, d = yn(m = a[h])), v = e; y < p; ++y) (v = xn(m > 0 ? f[y] + " " + b : Sn(b, /&\f/g, f[y]))) && (l[g++] = v);
      return Mn(e, t, r, 0 === o ? hn : s, l, c, u);
  }

  function Zn(e, t, r) {
      return Mn(e, t, r, pn, bn(_n), kn(e, 2, -2), 0);
  }

  function Qn(e, t, r, n) {
      return Mn(e, t, r, mn, kn(e, 0, n), kn(e, n + 1, -1), n);
  }

  function eo(e, t) {
      for (var r = "", n = En(e), o = 0; o < n; o++) r += t(e[o], o, e, t) || "";
      return r;
  }

  function to(e, t, r, n) {
      switch (e.type) {
        case "@layer":
          if (e.children.length) break;

        case "@import":
        case mn:
          return e.return = e.return || e.value;

        case pn:
          return "";

        case gn:
          return e.return = e.value + "{" + eo(e.children, n) + "}";

        case hn:
          e.value = e.props.join(",");
      }
      return jn(r = eo(e.children, n)) ? e.return = e.value + "{" + r + "}" : "";
  }

  var ro = function(e, t, r) {
      for (var n = 0, o = 0; n = o, o = Fn(), 38 === n && 12 === o && (t[r] = 1), !zn(o); ) Bn();
      return Ln(e, $n);
  }, no = function(e, t) {
      return Wn(function(e, t) {
          var r = -1, n = 44;
          do {
              switch (zn(n)) {
                case 0:
                  38 === n && 12 === Fn() && (t[r] = 1), e[r] += ro($n - 1, t, r);
                  break;

                case 2:
                  e[r] += Vn(n);
                  break;

                case 4:
                  if (44 === n) {
                      e[++r] = 58 === Fn() ? "&\f" : "", t[r] = e[r].length;
                      break;
                  }

                default:
                  e[r] += bn(n);
              }
          } while (n = Bn());
          return e;
      }(Dn(e), t));
  }, oo = new WeakMap, io = function(e) {
      if ("rule" === e.type && e.parent && !(e.length < 1)) {
          for (var t = e.value, r = e.parent, n = e.column === r.column && e.line === r.line; "rule" !== r.type; ) if (!(r = r.parent)) return;
          if ((1 !== e.props.length || 58 === t.charCodeAt(0) || oo.get(r)) && !n) {
              oo.set(e, !0);
              for (var o = [], i = no(t, o), a = r.props, s = 0, l = 0; s < i.length; s++) for (var c = 0; c < a.length; c++, 
              l++) e.props[l] = o[s] ? i[s].replace(/&\f/g, a[c]) : a[c] + " " + i[s];
          }
      }
  }, ao = function(e) {
      if ("decl" === e.type) {
          var t = e.value;
          108 === t.charCodeAt(0) && 98 === t.charCodeAt(2) && (e.return = "", e.value = "");
      }
  };

  function so(e, t) {
      switch (function(e, t) {
          return 45 ^ Cn(e, 0) ? (((t << 2 ^ Cn(e, 0)) << 2 ^ Cn(e, 1)) << 2 ^ Cn(e, 2)) << 2 ^ Cn(e, 3) : 0;
      }(e, t)) {
        case 5103:
          return fn + "print-" + e + e;

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
          return fn + e + e;

        case 5349:
        case 4246:
        case 4810:
        case 6968:
        case 2756:
          return fn + e + dn + e + un + e + e;

        case 6828:
        case 4268:
          return fn + e + un + e + e;

        case 6165:
          return fn + e + un + "flex-" + e + e;

        case 5187:
          return fn + e + Sn(e, /(\w+).+(:[^]+)/, fn + "box-$1$2" + un + "flex-$1$2") + e;

        case 5443:
          return fn + e + un + "flex-item-" + Sn(e, /flex-|-self/, "") + e;

        case 4675:
          return fn + e + un + "flex-line-pack" + Sn(e, /align-content|flex-|-self/, "") + e;

        case 5548:
          return fn + e + un + Sn(e, "shrink", "negative") + e;

        case 5292:
          return fn + e + un + Sn(e, "basis", "preferred-size") + e;

        case 6060:
          return fn + "box-" + Sn(e, "-grow", "") + fn + e + un + Sn(e, "grow", "positive") + e;

        case 4554:
          return fn + Sn(e, /([^-])(transform)/g, "$1" + fn + "$2") + e;

        case 6187:
          return Sn(Sn(Sn(e, /(zoom-|grab)/, fn + "$1"), /(image-set)/, fn + "$1"), e, "") + e;

        case 5495:
        case 3959:
          return Sn(e, /(image-set\([^]*)/, fn + "$1$`$1");

        case 4968:
          return Sn(Sn(e, /(.+:)(flex-)?(.*)/, fn + "box-pack:$3" + un + "flex-pack:$3"), /s.+-b[^;]+/, "justify") + fn + e + e;

        case 4095:
        case 3583:
        case 4068:
        case 2532:
          return Sn(e, /(.+)-inline(.+)/, fn + "$1$2") + e;

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
          if (jn(e) - 1 - t > 6) switch (Cn(e, t + 1)) {
            case 109:
              if (45 !== Cn(e, t + 4)) break;

            case 102:
              return Sn(e, /(.+:)(.+)-([^]+)/, "$1" + fn + "$2-$3$1" + dn + (108 == Cn(e, t + 3) ? "$3" : "$2-$3")) + e;

            case 115:
              return ~wn(e, "stretch") ? so(Sn(e, "stretch", "fill-available"), t) + e : e;
          }
          break;

        case 4949:
          if (115 !== Cn(e, t + 1)) break;

        case 6444:
          switch (Cn(e, jn(e) - 3 - (~wn(e, "!important") && 10))) {
            case 107:
              return Sn(e, ":", ":" + fn) + e;

            case 101:
              return Sn(e, /(.+:)([^;!]+)(;|!.+)?/, "$1" + fn + (45 === Cn(e, 14) ? "inline-" : "") + "box$3$1" + fn + "$2$3$1" + un + "$2box$3") + e;
          }
          break;

        case 5936:
          switch (Cn(e, t + 11)) {
            case 114:
              return fn + e + un + Sn(e, /[svh]\w+-[tblr]{2}/, "tb") + e;

            case 108:
              return fn + e + un + Sn(e, /[svh]\w+-[tblr]{2}/, "tb-rl") + e;

            case 45:
              return fn + e + un + Sn(e, /[svh]\w+-[tblr]{2}/, "lr") + e;
          }
          return fn + e + un + e + e;
      }
      return e;
  }

  var lo = [ function(e, t, r, n) {
      if (e.length > -1 && !e.return) switch (e.type) {
        case mn:
          e.return = so(e.value, e.length);
          break;

        case gn:
          return eo([ In(e, {
              value: Sn(e.value, "@", "@" + fn)
          }) ], n);

        case hn:
          if (e.length) return function(e, t) {
              return e.map(t).join("");
          }(e.props, (function(t) {
              switch (function(e, t) {
                  return (e = t.exec(e)) ? e[0] : e;
              }(t, /(::plac\w+|:read-\w+)/)) {
                case ":read-only":
                case ":read-write":
                  return eo([ In(e, {
                      props: [ Sn(t, /:(read-\w+)/, ":-moz-$1") ]
                  }) ], n);

                case "::placeholder":
                  return eo([ In(e, {
                      props: [ Sn(t, /:(plac\w+)/, ":" + fn + "input-$1") ]
                  }), In(e, {
                      props: [ Sn(t, /:(plac\w+)/, ":-moz-$1") ]
                  }), In(e, {
                      props: [ Sn(t, /:(plac\w+)/, un + "input-$1") ]
                  }) ], n);
              }
              return "";
          }));
      }
  } ];

  let co;

  function uo(e, t) {
      return R(e, t);
  }

  "object" == typeof document && (co = function(e) {
      var t = e.key;
      if ("css" === t) {
          var r = document.querySelectorAll("style[data-emotion]:not([data-s])");
          Array.prototype.forEach.call(r, (function(e) {
              -1 !== e.getAttribute("data-emotion").indexOf(" ") && (document.head.appendChild(e), 
              e.setAttribute("data-s", ""));
          }));
      }
      var n, o, i = e.stylisPlugins || lo, a = {}, s = [];
      n = e.container || document.head, Array.prototype.forEach.call(document.querySelectorAll('style[data-emotion^="' + t + ' "]'), (function(e) {
          for (var t = e.getAttribute("data-emotion").split(" "), r = 1; r < t.length; r++) a[t[r]] = !0;
          s.push(e);
      }));
      var l, c, u, d, f = [ to, (d = function(e) {
          l.insert(e);
      }, function(e) {
          e.root || (e = e.return) && d(e);
      }) ], p = (c = [ io, ao ].concat(i, f), u = En(c), function(e, t, r, n) {
          for (var o = "", i = 0; i < u; i++) o += c[i](e, t, r, n) || "";
          return o;
      });
      o = function(e, t, r, n) {
          l = r, eo(Gn(e ? e + "{" + t.styles + "}" : t.styles), p), n && (h.inserted[t.name] = !0);
      };
      var h = {
          key: t,
          sheet: new cn({
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

  const fo = B(Object.freeze(Object.defineProperty({
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
          return t && co ? q.jsx(react.CacheProvider, {
              value: co,
              children: r
          }) : r;
      },
      ThemeContext: react.ThemeContext,
      css: react.css,
      default: uo,
      internal_processStyles: (e, t) => {
          Array.isArray(e.__emotion_styles) && (e.__emotion_styles = t(e.__emotion_styles));
      },
      keyframes: react.keyframes
  }, Symbol.toStringTag, {
      value: "Module"
  }))), po = B(lr), ho = B(yr), mo = B(mr), go = [ "values", "unit", "step" ], yo = e => {
      const t = Object.keys(e).map((t => ({
          key: t,
          val: e[t]
      }))) || [];
      return t.sort(((e, t) => e.val - t.val)), t.reduce(((e, t) => Ft({}, e, {
          [t.key]: t.val
      })), {});
  };

  function bo(e) {
      const {values: t = {
          xs: 0,
          sm: 600,
          md: 900,
          lg: 1200,
          xl: 1536
      }, unit: r = "px", step: n = 5} = e, o = Bt(e, go), i = yo(t), a = Object.keys(i);
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
      return Ft({
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

  const vo = {
      borderRadius: 4
  };

  function xo(e, t) {
      return t ? sr(e, t, {
          clone: !1
      }) : e;
  }

  const So = {
      xs: 0,
      sm: 600,
      md: 900,
      lg: 1200,
      xl: 1536
  }, wo = {
      keys: [ "xs", "sm", "md", "lg", "xl" ],
      up: e => `@media (min-width:${So[e]}px)`
  };

  function Co(e, t, r) {
      const n = e.theme || {};
      if (Array.isArray(t)) {
          const e = n.breakpoints || wo;
          return t.reduce(((n, o, i) => (n[e.up(e.keys[i])] = r(t[i]), n)), {});
      }
      if ("object" == typeof t) {
          const e = n.breakpoints || wo;
          return Object.keys(t).reduce(((n, o) => {
              if (-1 !== Object.keys(e.values || So).indexOf(o)) {
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

  function ko(e, t, r = !0) {
      if (!t || "string" != typeof t) return null;
      if (e && e.vars && r) {
          const r = `vars.${t}`.split(".").reduce(((e, t) => e && e[t] ? e[t] : null), e);
          if (null != r) return r;
      }
      return t.split(".").reduce(((e, t) => e && null != e[t] ? e[t] : null), e);
  }

  function jo(e, t, r, n = r) {
      let o;
      return o = "function" == typeof e ? e(r) : Array.isArray(e) ? e[r] || n : ko(e, r) || n, 
      t && (o = t(o, n, e)), o;
  }

  function Eo(e) {
      const {prop: t, cssProperty: r = e.prop, themeKey: n, transform: o} = e, i = e => {
          if (null == e[t]) return null;
          const i = e[t], a = ko(e.theme, n) || {};
          return Co(e, i, (e => {
              let n = jo(a, o, e);
              return e === n && "string" == typeof e && (n = jo(a, o, `${t}${"default" === e ? "" : gr(e)}`, e)), 
              !1 === r ? n : {
                  [r]: n
              };
          }));
      };
      return i.propTypes = {}, i.filterProps = [ t ], i;
  }

  const Ro = {
      m: "margin",
      p: "padding"
  }, Oo = {
      t: "Top",
      r: "Right",
      b: "Bottom",
      l: "Left",
      x: [ "Left", "Right" ],
      y: [ "Top", "Bottom" ]
  }, To = {
      marginX: "mx",
      marginY: "my",
      paddingX: "px",
      paddingY: "py"
  }, Ao = function(e) {
      const t = {};
      return r => (void 0 === t[r] && (t[r] = e(r)), t[r]);
  }((e => {
      if (e.length > 2) {
          if (!To[e]) return [ e ];
          e = To[e];
      }
      const [t, r] = e.split(""), n = Ro[t], o = Oo[r] || "";
      return Array.isArray(o) ? o.map((e => n + e)) : [ n + o ];
  })), $o = [ "m", "mt", "mr", "mb", "ml", "mx", "my", "margin", "marginTop", "marginRight", "marginBottom", "marginLeft", "marginX", "marginY", "marginInline", "marginInlineStart", "marginInlineEnd", "marginBlock", "marginBlockStart", "marginBlockEnd" ], _o = [ "p", "pt", "pr", "pb", "pl", "px", "py", "padding", "paddingTop", "paddingRight", "paddingBottom", "paddingLeft", "paddingX", "paddingY", "paddingInline", "paddingInlineStart", "paddingInlineEnd", "paddingBlock", "paddingBlockStart", "paddingBlockEnd" ];

  function Po(e, t, r, n) {
      var o;
      const i = null != (o = ko(e, t, !1)) ? o : r;
      return "number" == typeof i ? e => "string" == typeof e ? e : i * e : Array.isArray(i) ? e => "string" == typeof e ? e : i[e] : "function" == typeof i ? i : () => {};
  }

  function Mo(e) {
      return Po(e, "spacing", 8);
  }

  function Io(e, t) {
      if ("string" == typeof t || null == t) return t;
      const r = e(Math.abs(t));
      return t >= 0 ? r : "number" == typeof r ? -r : `-${r}`;
  }

  function Bo(e, t, r, n) {
      if (-1 === t.indexOf(r)) return null;
      const o = function(e, t) {
          return r => e.reduce(((e, n) => (e[n] = Io(t, r), e)), {});
      }(Ao(r), n);
      return Co(e, e[r], o);
  }

  function Fo(e, t) {
      const r = Mo(e.theme);
      return Object.keys(e).map((n => Bo(e, t, n, r))).reduce(xo, {});
  }

  function No(e) {
      return Fo(e, $o);
  }

  function Lo(e) {
      return Fo(e, _o);
  }

  function zo(...e) {
      const t = e.reduce(((e, t) => (t.filterProps.forEach((r => {
          e[r] = t;
      })), e)), {}), r = e => Object.keys(e).reduce(((r, n) => t[n] ? xo(r, t[n](e)) : r), {});
      return r.propTypes = {}, r.filterProps = e.reduce(((e, t) => e.concat(t.filterProps)), []), 
      r;
  }

  function Do(e) {
      return "number" != typeof e ? e : `${e}px solid`;
  }

  function Wo(e, t) {
      return Eo({
          prop: e,
          themeKey: "borders",
          transform: t
      });
  }

  No.propTypes = {}, No.filterProps = $o, Lo.propTypes = {}, Lo.filterProps = _o;

  const Vo = Wo("border", Do), Ho = Wo("borderTop", Do), Ko = Wo("borderRight", Do), qo = Wo("borderBottom", Do), Xo = Wo("borderLeft", Do), Uo = Wo("borderColor"), Go = Wo("borderTopColor"), Yo = Wo("borderRightColor"), Jo = Wo("borderBottomColor"), Zo = Wo("borderLeftColor"), Qo = Wo("outline", Do), ei = Wo("outlineColor"), ti = e => {
      if (void 0 !== e.borderRadius && null !== e.borderRadius) {
          const t = Po(e.theme, "shape.borderRadius", 4), r = e => ({
              borderRadius: Io(t, e)
          });
          return Co(e, e.borderRadius, r);
      }
      return null;
  };

  ti.propTypes = {}, ti.filterProps = [ "borderRadius" ], zo(Vo, Ho, Ko, qo, Xo, Uo, Go, Yo, Jo, Zo, ti, Qo, ei);

  const ri = e => {
      if (void 0 !== e.gap && null !== e.gap) {
          const t = Po(e.theme, "spacing", 8), r = e => ({
              gap: Io(t, e)
          });
          return Co(e, e.gap, r);
      }
      return null;
  };

  ri.propTypes = {}, ri.filterProps = [ "gap" ];

  const ni = e => {
      if (void 0 !== e.columnGap && null !== e.columnGap) {
          const t = Po(e.theme, "spacing", 8), r = e => ({
              columnGap: Io(t, e)
          });
          return Co(e, e.columnGap, r);
      }
      return null;
  };

  ni.propTypes = {}, ni.filterProps = [ "columnGap" ];

  const oi = e => {
      if (void 0 !== e.rowGap && null !== e.rowGap) {
          const t = Po(e.theme, "spacing", 8), r = e => ({
              rowGap: Io(t, e)
          });
          return Co(e, e.rowGap, r);
      }
      return null;
  };

  oi.propTypes = {}, oi.filterProps = [ "rowGap" ];

  function ii(e, t) {
      return "grey" === t ? t : e;
  }

  zo(ri, ni, oi, Eo({
      prop: "gridColumn"
  }), Eo({
      prop: "gridRow"
  }), Eo({
      prop: "gridAutoFlow"
  }), Eo({
      prop: "gridAutoColumns"
  }), Eo({
      prop: "gridAutoRows"
  }), Eo({
      prop: "gridTemplateColumns"
  }), Eo({
      prop: "gridTemplateRows"
  }), Eo({
      prop: "gridTemplateAreas"
  }), Eo({
      prop: "gridArea"
  }));

  function ai(e) {
      return e <= 1 && 0 !== e ? 100 * e + "%" : e;
  }

  zo(Eo({
      prop: "color",
      themeKey: "palette",
      transform: ii
  }), Eo({
      prop: "bgcolor",
      cssProperty: "backgroundColor",
      themeKey: "palette",
      transform: ii
  }), Eo({
      prop: "backgroundColor",
      themeKey: "palette",
      transform: ii
  }));

  const si = Eo({
      prop: "width",
      transform: ai
  }), li = e => {
      if (void 0 !== e.maxWidth && null !== e.maxWidth) {
          const t = t => {
              var r, n;
              const o = (null == (r = e.theme) || null == (r = r.breakpoints) || null == (r = r.values) ? void 0 : r[t]) || So[t];
              return o ? "px" !== (null == (n = e.theme) || null == (n = n.breakpoints) ? void 0 : n.unit) ? {
                  maxWidth: `${o}${e.theme.breakpoints.unit}`
              } : {
                  maxWidth: o
              } : {
                  maxWidth: ai(t)
              };
          };
          return Co(e, e.maxWidth, t);
      }
      return null;
  };

  li.filterProps = [ "maxWidth" ];

  const ci = Eo({
      prop: "minWidth",
      transform: ai
  }), ui = Eo({
      prop: "height",
      transform: ai
  }), di = Eo({
      prop: "maxHeight",
      transform: ai
  }), fi = Eo({
      prop: "minHeight",
      transform: ai
  });

  Eo({
      prop: "size",
      cssProperty: "width",
      transform: ai
  }), Eo({
      prop: "size",
      cssProperty: "height",
      transform: ai
  });

  zo(si, li, ci, ui, di, fi, Eo({
      prop: "boxSizing"
  }));

  const pi = {
      border: {
          themeKey: "borders",
          transform: Do
      },
      borderTop: {
          themeKey: "borders",
          transform: Do
      },
      borderRight: {
          themeKey: "borders",
          transform: Do
      },
      borderBottom: {
          themeKey: "borders",
          transform: Do
      },
      borderLeft: {
          themeKey: "borders",
          transform: Do
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
          transform: Do
      },
      outlineColor: {
          themeKey: "palette"
      },
      borderRadius: {
          themeKey: "shape.borderRadius",
          style: ti
      },
      color: {
          themeKey: "palette",
          transform: ii
      },
      bgcolor: {
          themeKey: "palette",
          cssProperty: "backgroundColor",
          transform: ii
      },
      backgroundColor: {
          themeKey: "palette",
          transform: ii
      },
      p: {
          style: Lo
      },
      pt: {
          style: Lo
      },
      pr: {
          style: Lo
      },
      pb: {
          style: Lo
      },
      pl: {
          style: Lo
      },
      px: {
          style: Lo
      },
      py: {
          style: Lo
      },
      padding: {
          style: Lo
      },
      paddingTop: {
          style: Lo
      },
      paddingRight: {
          style: Lo
      },
      paddingBottom: {
          style: Lo
      },
      paddingLeft: {
          style: Lo
      },
      paddingX: {
          style: Lo
      },
      paddingY: {
          style: Lo
      },
      paddingInline: {
          style: Lo
      },
      paddingInlineStart: {
          style: Lo
      },
      paddingInlineEnd: {
          style: Lo
      },
      paddingBlock: {
          style: Lo
      },
      paddingBlockStart: {
          style: Lo
      },
      paddingBlockEnd: {
          style: Lo
      },
      m: {
          style: No
      },
      mt: {
          style: No
      },
      mr: {
          style: No
      },
      mb: {
          style: No
      },
      ml: {
          style: No
      },
      mx: {
          style: No
      },
      my: {
          style: No
      },
      margin: {
          style: No
      },
      marginTop: {
          style: No
      },
      marginRight: {
          style: No
      },
      marginBottom: {
          style: No
      },
      marginLeft: {
          style: No
      },
      marginX: {
          style: No
      },
      marginY: {
          style: No
      },
      marginInline: {
          style: No
      },
      marginInlineStart: {
          style: No
      },
      marginInlineEnd: {
          style: No
      },
      marginBlock: {
          style: No
      },
      marginBlockStart: {
          style: No
      },
      marginBlockEnd: {
          style: No
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
          style: ri
      },
      rowGap: {
          style: oi
      },
      columnGap: {
          style: ni
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
          transform: ai
      },
      maxWidth: {
          style: li
      },
      minWidth: {
          transform: ai
      },
      height: {
          transform: ai
      },
      maxHeight: {
          transform: ai
      },
      minHeight: {
          transform: ai
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

  function hi() {
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
          const u = ko(r, s) || {};
          if (c) return c(o);
          return Co(o, t, (t => {
              let r = jo(u, l, t);
              return t === r && "string" == typeof t && (r = jo(u, l, `${e}${"default" === t ? "" : gr(t)}`, t)), 
              !1 === a ? r : {
                  [a]: r
              };
          }));
      }
      return function t(r) {
          var n;
          const {sx: o, theme: i = {}} = r || {};
          if (!o) return null;
          const a = null != (n = i.unstable_sxConfig) ? n : pi;
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
                  if (null != o) if ("object" == typeof o) if (a[r]) l = xo(l, e(r, o, i, a)); else {
                      const e = Co({
                          theme: i
                      }, o, (e => ({
                          [r]: e
                      })));
                      !function(...e) {
                          const t = e.reduce(((e, t) => e.concat(Object.keys(t))), []), r = new Set(t);
                          return e.every((e => r.size === Object.keys(e).length));
                      }(e, o) ? l = xo(l, e) : l[r] = t({
                          sx: o,
                          theme: i
                      });
                  } else l = xo(l, e(r, o, i, a));
              })), c = l, s.reduce(((e, t) => {
                  const r = e[t];
                  return (!r || 0 === Object.keys(r).length) && delete e[t], e;
              }), c);
              var c;
          }
          return Array.isArray(o) ? o.map(s) : s(o);
      };
  }

  const mi = hi();

  mi.filterProps = [ "sx" ];

  const gi = mi;

  function yi(e, t) {
      const r = this;
      if (r.vars && "function" == typeof r.getColorSchemeSelector) {
          return {
              [r.getColorSchemeSelector(e).replace(/(\[[^\]]+\])/, "*:where($1)")]: t
          };
      }
      return r.palette.mode === e ? t : {};
  }

  const bi = [ "breakpoints", "palette", "spacing", "shape" ];

  function vi(e = {}, ...t) {
      const {breakpoints: r = {}, palette: n = {}, spacing: o, shape: i = {}} = e, a = Bt(e, bi), s = bo(r), l = function(e = 8) {
          if (e.mui) return e;
          const t = Mo({
              spacing: e
          }), r = (...e) => (0 === e.length ? [ 1 ] : e).map((e => {
              const r = t(e);
              return "number" == typeof r ? `${r}px` : r;
          })).join(" ");
          return r.mui = !0, r;
      }(o);
      let c = sr({
          breakpoints: s,
          direction: "ltr",
          components: {},
          palette: Ft({
              mode: "light"
          }, n),
          spacing: l,
          shape: Ft({}, vo, i)
      }, a);
      return c.applyStyles = yi, c = t.reduce(((e, t) => sr(e, t)), c), c.unstable_sxConfig = Ft({}, pi, null == a ? void 0 : a.unstable_sxConfig), 
      c.unstable_sx = function(e) {
          return gi({
              sx: e,
              theme: this
          });
      }, c;
  }

  const xi = B(Object.freeze(Object.defineProperty({
      __proto__: null,
      default: vi,
      private_createBreakpoints: bo,
      unstable_applyStyles: yi
  }, Symbol.toStringTag, {
      value: "Module"
  }))), Si = [ "sx" ], wi = e => {
      var t, r;
      const n = {
          systemProps: {},
          otherProps: {}
      }, o = null != (t = null == e || null == (r = e.theme) ? void 0 : r.unstable_sxConfig) ? t : pi;
      return Object.keys(e).forEach((t => {
          o[t] ? n.systemProps[t] = e[t] : n.otherProps[t] = e[t];
      })), n;
  };

  function Ci(e) {
      const {sx: t} = e, r = Bt(e, Si), {systemProps: n, otherProps: o} = wi(r);
      let i;
      return i = Array.isArray(t) ? [ n, ...t ] : "function" == typeof t ? (...e) => {
          const r = t(...e);
          return ir(r) ? Ft({}, n, r) : n;
      } : Ft({}, n, t), Ft({}, o, {
          sx: i
      });
  }

  const ki = B(Object.freeze(Object.defineProperty({
      __proto__: null,
      default: gi,
      extendSxProp: Ci,
      unstable_createStyleFunctionSx: hi,
      unstable_defaultSxConfig: pi
  }, Symbol.toStringTag, {
      value: "Module"
  })));

  var ji = on;

  Object.defineProperty(tn, "__esModule", {
      value: !0
  });

  var Ei = tn.default = function(e = {}) {
      const {themeId: t, defaultTheme: r = Li, rootShouldForwardProp: n = Ni, slotShouldForwardProp: o = Ni} = e, i = e => (0, Pi.default)((0, Oi.default)({}, e, {
          theme: Di((0, Oi.default)({}, e, {
              defaultTheme: r,
              themeId: t
          }))
      }));
      return i.__mui_systemSx = !0, (e, a = {}) => {
          (0, Ai.internal_processStyles)(e, (e => e.filter((e => !(null != e && e.__mui_systemSx)))));
          const {name: s, slot: l, skipVariantsResolver: c, skipSx: u, overridesResolver: d = Wi(zi(l))} = a, f = (0, Ti.default)(a, Bi), p = void 0 !== c ? c : l && "Root" !== l && "root" !== l || !1, h = u || !1;
          let m = Ni;
          "Root" === l || "root" === l ? m = n : l ? m = o : function(e) {
              return "string" == typeof e && e.charCodeAt(0) > 96;
          }(e) && (m = void 0);
          const g = (0, Ai.default)(e, (0, Oi.default)({
              shouldForwardProp: m,
              label: undefined
          }, f)), y = e => "function" == typeof e && e.__emotion_real !== e || (0, $i.isPlainObject)(e) ? n => Vi(e, (0, Oi.default)({}, n, {
              theme: Di({
                  theme: n.theme,
                  defaultTheme: r,
                  themeId: t
              })
          })) : e, b = (n, ...o) => {
              let a = y(n);
              const l = o ? o.map(y) : [];
              s && d && l.push((e => {
                  const n = Di((0, Oi.default)({}, e, {
                      defaultTheme: r,
                      themeId: t
                  }));
                  if (!n.components || !n.components[s] || !n.components[s].styleOverrides) return null;
                  const o = n.components[s].styleOverrides, i = {};
                  return Object.entries(o).forEach((([t, r]) => {
                      i[t] = Vi(r, (0, Oi.default)({}, e, {
                          theme: n
                      }));
                  })), d(e, i);
              })), s && !p && l.push((e => {
                  var n;
                  const o = Di((0, Oi.default)({}, e, {
                      defaultTheme: r,
                      themeId: t
                  }));
                  return Vi({
                      variants: null == o || null == (n = o.components) || null == (n = n[s]) ? void 0 : n.variants
                  }, (0, Oi.default)({}, e, {
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
  }, Ri = tn.shouldForwardProp = Ni;

  tn.systemDefaultTheme = void 0;

  var Oi = ji((nn || (nn = 1, function(e) {
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
  }(an)), an.exports)), Ti = ji((sn || (sn = 1, function(e) {
      e.exports = function(e, t) {
          if (null == e) return {};
          var r, n, o = {}, i = Object.keys(e);
          for (n = 0; n < i.length; n++) r = i[n], t.indexOf(r) >= 0 || (o[r] = e[r]);
          return o;
      }, e.exports.__esModule = !0, e.exports.default = e.exports;
  }(ln)), ln.exports)), Ai = function(e, t) {
      if (!t && e && e.__esModule) return e;
      if (null === e || "object" != typeof e && "function" != typeof e) return {
          default: e
      };
      var r = Fi(t);
      if (r && r.has(e)) return r.get(e);
      var n = {
          __proto__: null
      }, o = Object.defineProperty && Object.getOwnPropertyDescriptor;
      for (var i in e) if ("default" !== i && Object.prototype.hasOwnProperty.call(e, i)) {
          var a = o ? Object.getOwnPropertyDescriptor(e, i) : null;
          a && (a.get || a.set) ? Object.defineProperty(n, i, a) : n[i] = e[i];
      }
      return n.default = e, r && r.set(e, n), n;
  }(fo), $i = po;

  ji(ho), ji(mo);

  var _i = ji(xi), Pi = ji(ki);

  const Mi = [ "ownerState" ], Ii = [ "variants" ], Bi = [ "name", "slot", "skipVariantsResolver", "skipSx", "overridesResolver" ];

  function Fi(e) {
      if ("function" != typeof WeakMap) return null;
      var t = new WeakMap, r = new WeakMap;
      return (Fi = function(e) {
          return e ? r : t;
      })(e);
  }

  function Ni(e) {
      return "ownerState" !== e && "theme" !== e && "sx" !== e && "as" !== e;
  }

  const Li = tn.systemDefaultTheme = (0, _i.default)(), zi = e => e ? e.charAt(0).toLowerCase() + e.slice(1) : e;

  function Di({defaultTheme: e, theme: t, themeId: r}) {
      return n = t, 0 === Object.keys(n).length ? e : t[r] || t;
      var n;
  }

  function Wi(e) {
      return e ? (t, r) => r[e] : null;
  }

  function Vi(e, t) {
      let {ownerState: r} = t, n = (0, Ti.default)(t, Mi);
      const o = "function" == typeof e ? e((0, Oi.default)({
          ownerState: r
      }, n)) : e;
      if (Array.isArray(o)) return o.flatMap((e => Vi(e, (0, Oi.default)({
          ownerState: r
      }, n))));
      if (o && "object" == typeof o && Array.isArray(o.variants)) {
          const {variants: e = []} = o;
          let t = (0, Ti.default)(o, Ii);
          return e.forEach((e => {
              let o = !0;
              "function" == typeof e.props ? o = e.props((0, Oi.default)({
                  ownerState: r
              }, n, r)) : Object.keys(e.props).forEach((t => {
                  (null == r ? void 0 : r[t]) !== e.props[t] && n[t] !== e.props[t] && (o = !1);
              })), o && (Array.isArray(t) || (t = [ t ]), t.push("function" == typeof e.style ? e.style((0, Oi.default)({
                  ownerState: r
              }, n, r)) : e.style));
          })), t;
      }
      return o;
  }

  var Hi = {};

  const Ki = B(ur), qi = B(Xr);

  var Xi = on;

  Object.defineProperty(Hi, "__esModule", {
      value: !0
  }), Hi.alpha = aa, Hi.blend = function(e, t, r, n = 1) {
      const o = (e, t) => Math.round((e ** (1 / n) * (1 - r) + t ** (1 / n) * r) ** n), i = ta(e), a = ta(t);
      return na({
          type: "rgb",
          values: [ o(i.values[0], a.values[0]), o(i.values[1], a.values[1]), o(i.values[2], a.values[2]) ]
      });
  }, Hi.colorChannel = void 0;

  var Ui = Hi.darken = sa;

  Hi.decomposeColor = ta, Hi.emphasize = function(e, t = .15) {
      return ia(e) > .5 ? sa(e, t) : la(e, t);
  };

  var Gi = Hi.getContrastRatio = function(e, t) {
      const r = ia(e), n = ia(t);
      return (Math.max(r, n) + .05) / (Math.min(r, n) + .05);
  };

  Hi.getLuminance = ia, Hi.hexToRgb = ea, Hi.hslToRgb = oa;

  var Yi = Hi.lighten = la;

  Hi.private_safeAlpha = function(e, t, r) {
      try {
          return aa(e, t);
      } catch (n) {
          return e;
      }
  }, Hi.private_safeColorChannel = void 0, Hi.private_safeDarken = function(e, t, r) {
      try {
          return sa(e, t);
      } catch (n) {
          return e;
      }
  }, Hi.private_safeEmphasize = function e(t, r, n) {
      try {
          return e(t, r);
      } catch (o) {
          return t;
      }
  }, Hi.private_safeLighten = function(e, t, r) {
      try {
          return la(e, t);
      } catch (n) {
          return e;
      }
  }, Hi.recomposeColor = na, Hi.rgbToHex = function(e) {
      if (0 === e.indexOf("#")) return e;
      const {values: t} = ta(e);
      return `#${t.map(((e, t) => function(e) {
        const t = e.toString(16);
        return 1 === t.length ? `0${t}` : t;
    }(3 === t ? Math.round(255 * e) : e))).join("")}`;
  };

  var Ji = Xi(Ki), Zi = Xi(qi);

  function Qi(e, t = 0, r = 1) {
      return (0, Zi.default)(e, t, r);
  }

  function ea(e) {
      e = e.slice(1);
      const t = new RegExp(`.{1,${e.length >= 6 ? 2 : 1}}`, "g");
      let r = e.match(t);
      return r && 1 === r[0].length && (r = r.map((e => e + e))), r ? `rgb${4 === r.length ? "a" : ""}(${r.map(((e, t) => t < 3 ? parseInt(e, 16) : Math.round(parseInt(e, 16) / 255 * 1e3) / 1e3)).join(", ")})` : "";
  }

  function ta(e) {
      if (e.type) return e;
      if ("#" === e.charAt(0)) return ta(ea(e));
      const t = e.indexOf("("), r = e.substring(0, t);
      if (-1 === [ "rgb", "rgba", "hsl", "hsla", "color" ].indexOf(r)) throw new Error((0, Ji.default)(9, e));
      let n, o = e.substring(t + 1, e.length - 1);
      if ("color" === r) {
          if (o = o.split(" "), n = o.shift(), 4 === o.length && "/" === o[3].charAt(0) && (o[3] = o[3].slice(1)), 
          -1 === [ "srgb", "display-p3", "a98-rgb", "prophoto-rgb", "rec-2020" ].indexOf(n)) throw new Error((0, Ji.default)(10, n));
      } else o = o.split(",");
      return o = o.map((e => parseFloat(e))), {
          type: r,
          values: o,
          colorSpace: n
      };
  }

  const ra = e => {
      const t = ta(e);
      return t.values.slice(0, 3).map(((e, r) => -1 !== t.type.indexOf("hsl") && 0 !== r ? `${e}%` : e)).join(" ");
  };

  Hi.colorChannel = ra;

  function na(e) {
      const {type: t, colorSpace: r} = e;
      let {values: n} = e;
      return -1 !== t.indexOf("rgb") ? n = n.map(((e, t) => t < 3 ? parseInt(e, 10) : e)) : -1 !== t.indexOf("hsl") && (n[1] = `${n[1]}%`, 
      n[2] = `${n[2]}%`), n = -1 !== t.indexOf("color") ? `${r} ${n.join(" ")}` : `${n.join(", ")}`, 
      `${t}(${n})`;
  }

  function oa(e) {
      e = ta(e);
      const {values: t} = e, r = t[0], n = t[1] / 100, o = t[2] / 100, i = n * Math.min(o, 1 - o), a = (e, t = (e + r / 30) % 12) => o - i * Math.max(Math.min(t - 3, 9 - t, 1), -1);
      let s = "rgb";
      const l = [ Math.round(255 * a(0)), Math.round(255 * a(8)), Math.round(255 * a(4)) ];
      return "hsla" === e.type && (s += "a", l.push(t[3])), na({
          type: s,
          values: l
      });
  }

  function ia(e) {
      let t = "hsl" === (e = ta(e)).type || "hsla" === e.type ? ta(oa(e)).values : e.values;
      return t = t.map((t => ("color" !== e.type && (t /= 255), t <= .03928 ? t / 12.92 : ((t + .055) / 1.055) ** 2.4))), 
      Number((.2126 * t[0] + .7152 * t[1] + .0722 * t[2]).toFixed(3));
  }

  function aa(e, t) {
      return e = ta(e), t = Qi(t), "rgb" !== e.type && "hsl" !== e.type || (e.type += "a"), 
      "color" === e.type ? e.values[3] = `/${t}` : e.values[3] = t, na(e);
  }

  function sa(e, t) {
      if (e = ta(e), t = Qi(t), -1 !== e.type.indexOf("hsl")) e.values[2] *= 1 - t; else if (-1 !== e.type.indexOf("rgb") || -1 !== e.type.indexOf("color")) for (let r = 0; r < 3; r += 1) e.values[r] *= 1 - t;
      return na(e);
  }

  function la(e, t) {
      if (e = ta(e), t = Qi(t), -1 !== e.type.indexOf("hsl")) e.values[2] += (100 - e.values[2]) * t; else if (-1 !== e.type.indexOf("rgb")) for (let r = 0; r < 3; r += 1) e.values[r] += (255 - e.values[r]) * t; else if (-1 !== e.type.indexOf("color")) for (let r = 0; r < 3; r += 1) e.values[r] += (1 - e.values[r]) * t;
      return na(e);
  }

  Hi.private_safeColorChannel = (e, t) => {
      try {
          return ra(e);
      } catch (r) {
          return e;
      }
  };

  const ca = {
      black: "#000",
      white: "#fff"
  }, ua = {
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
  }, da = {
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
  }, fa = {
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
  }, pa = {
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
  }, ha = {
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
  }, ma = {
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
  }, ga = {
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
  }, ya = [ "mode", "contrastThreshold", "tonalOffset" ], ba = {
      text: {
          primary: "rgba(0, 0, 0, 0.87)",
          secondary: "rgba(0, 0, 0, 0.6)",
          disabled: "rgba(0, 0, 0, 0.38)"
      },
      divider: "rgba(0, 0, 0, 0.12)",
      background: {
          paper: ca.white,
          default: ca.white
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
  }, va = {
      text: {
          primary: ca.white,
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
          active: ca.white,
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

  function xa(e, t, r, n) {
      const o = n.light || n, i = n.dark || 1.5 * n;
      e[t] || (e.hasOwnProperty(r) ? e[t] = e[r] : "light" === t ? e.light = Yi(e.main, o) : "dark" === t && (e.dark = Ui(e.main, i)));
  }

  function Sa(e) {
      const {mode: t = "light", contrastThreshold: r = 3, tonalOffset: n = .2} = e, o = Bt(e, ya), i = e.primary || function(e = "light") {
          return "dark" === e ? {
              main: ha[200],
              light: ha[50],
              dark: ha[400]
          } : {
              main: ha[700],
              light: ha[400],
              dark: ha[800]
          };
      }(t), a = e.secondary || function(e = "light") {
          return "dark" === e ? {
              main: da[200],
              light: da[50],
              dark: da[400]
          } : {
              main: da[500],
              light: da[300],
              dark: da[700]
          };
      }(t), s = e.error || function(e = "light") {
          return "dark" === e ? {
              main: fa[500],
              light: fa[300],
              dark: fa[700]
          } : {
              main: fa[700],
              light: fa[400],
              dark: fa[800]
          };
      }(t), l = e.info || function(e = "light") {
          return "dark" === e ? {
              main: ma[400],
              light: ma[300],
              dark: ma[700]
          } : {
              main: ma[700],
              light: ma[500],
              dark: ma[900]
          };
      }(t), c = e.success || function(e = "light") {
          return "dark" === e ? {
              main: ga[400],
              light: ga[300],
              dark: ga[700]
          } : {
              main: ga[800],
              light: ga[500],
              dark: ga[900]
          };
      }(t), u = e.warning || function(e = "light") {
          return "dark" === e ? {
              main: pa[400],
              light: pa[300],
              dark: pa[700]
          } : {
              main: "#ed6c02",
              light: pa[500],
              dark: pa[900]
          };
      }(t);
      function d(e) {
          return Gi(e, va.text.primary) >= r ? va.text.primary : ba.text.primary;
      }
      const f = ({color: e, name: t, mainShade: r = 500, lightShade: o = 300, darkShade: i = 700}) => {
          if (!(e = Ft({}, e)).main && e[r] && (e.main = e[r]), !e.hasOwnProperty("main")) throw new Error(cr(11, t ? ` (${t})` : "", r));
          if ("string" != typeof e.main) throw new Error(cr(12, t ? ` (${t})` : "", JSON.stringify(e.main)));
          return xa(e, "light", o, n), xa(e, "dark", i, n), e.contrastText || (e.contrastText = d(e.main)), 
          e;
      }, p = {
          dark: va,
          light: ba
      };
      return sr(Ft({
          common: Ft({}, ca),
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
          grey: ua,
          contrastThreshold: r,
          getContrastText: d,
          augmentColor: f,
          tonalOffset: n
      }, p[t]), o);
  }

  const wa = [ "fontFamily", "fontSize", "fontWeightLight", "fontWeightRegular", "fontWeightMedium", "fontWeightBold", "htmlFontSize", "allVariants", "pxToRem" ];

  const Ca = {
      textTransform: "uppercase"
  }, ka = '"Roboto", "Helvetica", "Arial", sans-serif';

  function ja(e, t) {
      const r = "function" == typeof t ? t(e) : t, {fontFamily: n = ka, fontSize: o = 14, fontWeightLight: i = 300, fontWeightRegular: a = 400, fontWeightMedium: s = 500, fontWeightBold: l = 700, htmlFontSize: c = 16, allVariants: u, pxToRem: d} = r, f = Bt(r, wa), p = o / 14, h = d || (e => e / c * p + "rem"), m = (e, t, r, o, i) => {
          return Ft({
              fontFamily: n,
              fontWeight: e,
              fontSize: h(t),
              lineHeight: r
          }, n === ka ? {
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
          button: m(s, 14, 1.75, .4, Ca),
          caption: m(a, 12, 1.66, .4),
          overline: m(a, 12, 2.66, 1, Ca),
          inherit: {
              fontFamily: "inherit",
              fontWeight: "inherit",
              fontSize: "inherit",
              lineHeight: "inherit",
              letterSpacing: "inherit"
          }
      };
      return sr(Ft({
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

  function Ea(...e) {
      return [ `${e[0]}px ${e[1]}px ${e[2]}px ${e[3]}px rgba(0,0,0,0.2)`, `${e[4]}px ${e[5]}px ${e[6]}px ${e[7]}px rgba(0,0,0,0.14)`, `${e[8]}px ${e[9]}px ${e[10]}px ${e[11]}px rgba(0,0,0,0.12)` ].join(",");
  }

  const Ra = [ "none", Ea(0, 2, 1, -1, 0, 1, 1, 0, 0, 1, 3, 0), Ea(0, 3, 1, -2, 0, 2, 2, 0, 0, 1, 5, 0), Ea(0, 3, 3, -2, 0, 3, 4, 0, 0, 1, 8, 0), Ea(0, 2, 4, -1, 0, 4, 5, 0, 0, 1, 10, 0), Ea(0, 3, 5, -1, 0, 5, 8, 0, 0, 1, 14, 0), Ea(0, 3, 5, -1, 0, 6, 10, 0, 0, 1, 18, 0), Ea(0, 4, 5, -2, 0, 7, 10, 1, 0, 2, 16, 1), Ea(0, 5, 5, -3, 0, 8, 10, 1, 0, 3, 14, 2), Ea(0, 5, 6, -3, 0, 9, 12, 1, 0, 3, 16, 2), Ea(0, 6, 6, -3, 0, 10, 14, 1, 0, 4, 18, 3), Ea(0, 6, 7, -4, 0, 11, 15, 1, 0, 4, 20, 3), Ea(0, 7, 8, -4, 0, 12, 17, 2, 0, 5, 22, 4), Ea(0, 7, 8, -4, 0, 13, 19, 2, 0, 5, 24, 4), Ea(0, 7, 9, -4, 0, 14, 21, 2, 0, 5, 26, 4), Ea(0, 8, 9, -5, 0, 15, 22, 2, 0, 6, 28, 5), Ea(0, 8, 10, -5, 0, 16, 24, 2, 0, 6, 30, 5), Ea(0, 8, 11, -5, 0, 17, 26, 2, 0, 6, 32, 5), Ea(0, 9, 11, -5, 0, 18, 28, 2, 0, 7, 34, 6), Ea(0, 9, 12, -6, 0, 19, 29, 2, 0, 7, 36, 6), Ea(0, 10, 13, -6, 0, 20, 31, 3, 0, 8, 38, 7), Ea(0, 10, 13, -6, 0, 21, 33, 3, 0, 8, 40, 7), Ea(0, 10, 14, -6, 0, 22, 35, 3, 0, 8, 42, 7), Ea(0, 11, 14, -7, 0, 23, 36, 3, 0, 9, 44, 8), Ea(0, 11, 15, -7, 0, 24, 38, 3, 0, 9, 46, 8) ], Oa = [ "duration", "easing", "delay" ], Ta = {
      easeInOut: "cubic-bezier(0.4, 0, 0.2, 1)",
      easeOut: "cubic-bezier(0.0, 0, 0.2, 1)",
      easeIn: "cubic-bezier(0.4, 0, 1, 1)",
      sharp: "cubic-bezier(0.4, 0, 0.6, 1)"
  }, Aa = {
      shortest: 150,
      shorter: 200,
      short: 250,
      standard: 300,
      complex: 375,
      enteringScreen: 225,
      leavingScreen: 195
  };

  function $a(e) {
      return `${Math.round(e)}ms`;
  }

  function _a(e) {
      if (!e) return 0;
      const t = e / 36;
      return Math.round(10 * (4 + 15 * t ** .25 + t / 5));
  }

  function Pa(e) {
      const t = Ft({}, Ta, e.easing), r = Ft({}, Aa, e.duration);
      return Ft({
          getAutoHeightDuration: _a,
          create: (e = [ "all" ], n = {}) => {
              const {duration: o = r.standard, easing: i = t.easeInOut, delay: a = 0} = n;
              return Bt(n, Oa), (Array.isArray(e) ? e : [ e ]).map((e => `${e} ${"string" == typeof o ? o : $a(o)} ${i} ${"string" == typeof a ? a : $a(a)}`)).join(",");
          }
      }, e, {
          easing: t,
          duration: r
      });
  }

  const Ma = {
      mobileStepper: 1e3,
      fab: 1050,
      speedDial: 1050,
      appBar: 1100,
      drawer: 1200,
      modal: 1300,
      snackbar: 1400,
      tooltip: 1500
  }, Ia = [ "breakpoints", "mixins", "spacing", "palette", "transitions", "typography", "shape" ];

  function Ba(e = {}, ...t) {
      const {mixins: r = {}, palette: n = {}, transitions: o = {}, typography: i = {}} = e, a = Bt(e, Ia);
      if (e.vars) throw new Error(cr(18));
      const s = Sa(n), l = vi(e);
      let c = sr(l, {
          mixins: (u = l.breakpoints, d = r, Ft({
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
          shadows: Ra.slice(),
          typography: ja(s, i),
          transitions: Pa(o),
          zIndex: Ft({}, Ma)
      });
      var u, d;
      return c = sr(c, a), c = t.reduce(((e, t) => sr(e, t)), c), c.unstable_sxConfig = Ft({}, pi, null == a ? void 0 : a.unstable_sxConfig), 
      c.unstable_sx = function(e) {
          return gi({
              sx: e,
              theme: this
          });
      }, c;
  }

  const Fa = Ba(), Na = "$$material", La = Ei({
      themeId: Na,
      defaultTheme: Fa,
      rootShouldForwardProp: e => Ri(e) && "classes" !== e
  });

  function za(e) {
      const {theme: t, name: r, props: n} = e;
      return t && t.components && t.components[r] && t.components[r].defaultProps ? zr(t.components[r].defaultProps, n) : n;
  }

  function Da(t = null) {
      const r = e__namespace.useContext(react.ThemeContext);
      return r && (n = r, 0 !== Object.keys(n).length) ? r : t;
      var n;
  }

  const Wa = vi();

  function Va(e = Wa) {
      return Da(e);
  }

  function Ha({props: e, name: t}) {
      return function({props: e, name: t, defaultTheme: r, themeId: n}) {
          let o = Va(r);
          return n && (o = o[n] || o), za({
              theme: o,
              name: t,
              props: e
          });
      }({
          props: e,
          name: t,
          defaultTheme: Fa,
          themeId: Na
      });
  }

  const Ka = [ "className", "component" ];

  function qa(e) {
      return (1 + Math.sin(Math.PI * e - Math.PI / 2)) / 2;
  }

  function Xa(e) {
      return Kr("MuiSvgIcon", e);
  }

  qr("MuiSvgIcon", [ "root", "colorPrimary", "colorSecondary", "colorAction", "colorError", "colorDisabled", "fontSizeInherit", "fontSizeSmall", "fontSizeMedium", "fontSizeLarge" ]);

  const Ua = [ "children", "className", "color", "component", "fontSize", "htmlColor", "inheritViewBox", "titleAccess", "viewBox" ], Ga = La("svg", {
      name: "MuiSvgIcon",
      slot: "Root",
      overridesResolver: (e, t) => {
          const {ownerState: r} = e;
          return [ t.root, "inherit" !== r.color && t[`color${gr(r.color)}`], t[`fontSize${gr(r.fontSize)}`] ];
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
  })), Ya = e__namespace.forwardRef((function(t, r) {
      const n = Ha({
          props: t,
          name: "MuiSvgIcon"
      }), {children: o, className: i, color: a = "inherit", component: s = "svg", fontSize: l = "medium", htmlColor: c, inheritViewBox: u = !1, titleAccess: d, viewBox: f = "0 0 24 24"} = n, p = Bt(n, Ua), h = e__namespace.isValidElement(o) && "svg" === o.type, m = Ft({}, n, {
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
          return Dr({
              root: [ "root", "inherit" !== t && `color${gr(t)}`, `fontSize${gr(r)}` ]
          }, Xa, n);
      })(m);
      return q.jsxs(Ga, Ft({
          as: s,
          className: or(y.root, i),
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

  function Ja(t, r) {
      function n(e, n) {
          return q.jsx(Ya, Ft({
              "data-testid": `${r}Icon`,
              ref: n
          }, e, {
              children: t
          }));
      }
      return n.muiName = Ya.muiName, e__namespace.memo(e__namespace.forwardRef(n));
  }

  Ya.muiName = "SvgIcon";

  const Za = [ "onChange" ], Qa = {
      width: 99,
      height: 99,
      position: "absolute",
      top: -9999,
      overflow: "scroll"
  };

  const es = Ja(q.jsx("path", {
      d: "M15.41 16.09l-4.58-4.59 4.58-4.59L14 5.5l-6 6 6 6z"
  }), "KeyboardArrowLeft"), ts = Ja(q.jsx("path", {
      d: "M8.59 16.34l4.58-4.59-4.58-4.59L10 5.75l6 6-6 6z"
  }), "KeyboardArrowRight");

  function rs(e, t) {
      return (rs = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function(e, t) {
          return e.__proto__ = t, e;
      })(e, t);
  }

  const ns = e.createContext(null);

  function os(e$1, t) {
      var r = Object.create(null);
      return e$1 && e.Children.map(e$1, (function(e) {
          return e;
      })).forEach((function(e$1) {
          r[e$1.key] = function(e$1) {
              return t && e.isValidElement(e$1) ? t(e$1) : e$1;
          }(e$1);
      })), r;
  }

  function is(e, t, r) {
      return null != r[t] ? r[t] : e.props[t];
  }

  function as(e$1, t, r) {
      var n = os(e$1.children), o = function(e, t) {
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
                  exit: is(l, "exit", e$1),
                  enter: is(l, "enter", e$1)
              })) : o[s] = e.cloneElement(l, {
                  in: !1
              }) : o[s] = e.cloneElement(l, {
                  onExited: r.bind(null, l),
                  in: !0,
                  exit: is(l, "exit", e$1),
                  enter: is(l, "enter", e$1)
              });
          }
      })), o;
  }

  var ss = Object.values || function(e) {
      return Object.keys(e).map((function(t) {
          return e[t];
      }));
  }, ls = function(e$1) {
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
      rs(r, n);
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
              children: t.firstRender ? (r = e$1, n = i, os(r.children, (function(e$1) {
                  return e.cloneElement(e$1, {
                      onExited: n.bind(null, e$1),
                      in: !0,
                      appear: is(e$1, "appear", r),
                      enter: is(e$1, "enter", r),
                      exit: is(e$1, "exit", r)
                  });
              }))) : as(e$1, o, i),
              firstRender: !1
          };
      }, i.handleExited = function(e, t) {
          var r = os(this.props.children);
          e.key in r || (e.props.onExited && e.props.onExited(t), this.mounted && this.setState((function(t) {
              var r = Ft({}, t.children);
              return delete r[e.key], {
                  children: r
              };
          })));
      }, i.render = function() {
          var e$1 = this.props, r = e$1.component, n = e$1.childFactory, o = Bt(e$1, [ "component", "childFactory" ]), i = this.state.contextValue, a = ss(this.state.children).map(n);
          return delete o.appear, delete o.enter, delete o.exit, null === r ? e.createElement(ns.Provider, {
              value: i
          }, a) : e.createElement(ns.Provider, {
              value: i
          }, e.createElement(r, o, a));
      }, o;
  }(e.Component);

  ls.propTypes = {}, ls.defaultProps = {
      component: "div",
      childFactory: function(e) {
          return e;
      }
  };

  const cs = ls;

  const us = qr("MuiTouchRipple", [ "root", "ripple", "rippleVisible", "ripplePulsate", "child", "childLeaving", "childPulsate" ]), ds = [ "center", "classes", "className" ];

  let fs, ps, hs, ms, gs = e => e;

  const ys = react.keyframes(fs || (fs = gs`
  0% {
    transform: scale(0);
    opacity: 0.1;
  }

  100% {
    transform: scale(1);
    opacity: 0.3;
  }
`)), bs = react.keyframes(ps || (ps = gs`
  0% {
    opacity: 1;
  }

  100% {
    opacity: 0;
  }
`)), vs = react.keyframes(hs || (hs = gs`
  0% {
    transform: scale(1);
  }

  50% {
    transform: scale(0.92);
  }

  100% {
    transform: scale(1);
  }
`)), xs = La("span", {
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
  }), Ss = La((function(t) {
      const {className: r, classes: n, pulsate: o = !1, rippleX: i, rippleY: a, rippleSize: s, in: l, onExited: c, timeout: u} = t, [d, f] = e__namespace.useState(!1), p = or(r, n.ripple, n.rippleVisible, o && n.ripplePulsate), h = {
          width: s,
          height: s,
          top: -s / 2 + a,
          left: -s / 2 + i
      }, m = or(n.child, d && n.childLeaving, o && n.childPulsate);
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
  })(ms || (ms = gs`
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
`), us.rippleVisible, ys, 550, (({theme: e}) => e.transitions.easing.easeInOut), us.ripplePulsate, (({theme: e}) => e.transitions.duration.shorter), us.child, us.childLeaving, bs, 550, (({theme: e}) => e.transitions.easing.easeInOut), us.childPulsate, vs, (({theme: e}) => e.transitions.easing.easeInOut)), ws = e__namespace.forwardRef((function(t, r) {
      const n = Ha({
          props: t,
          name: "MuiTouchRipple"
      }), {center: o = !1, classes: i = {}, className: a} = n, s = Bt(n, ds), [l, c] = e__namespace.useState([]), u = e__namespace.useRef(0), d = e__namespace.useRef(null);
      e__namespace.useEffect((() => {
          d.current && (d.current(), d.current = null);
      }), [ l ]);
      const f = e__namespace.useRef(!1), p = Rr(), h = e__namespace.useRef(null), m = e__namespace.useRef(null), g = e__namespace.useCallback((e => {
          const {pulsate: t, rippleX: r, rippleY: n, rippleSize: o, cb: a} = e;
          c((e => [ ...e, q.jsx(Ss, {
              classes: {
                  ripple: or(i.ripple, us.ripple),
                  rippleVisible: or(i.rippleVisible, us.rippleVisible),
                  ripplePulsate: or(i.ripplePulsate, us.ripplePulsate),
                  child: or(i.child, us.child),
                  childLeaving: or(i.childLeaving, us.childLeaving),
                  childPulsate: or(i.childPulsate, us.childPulsate)
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
      })), [ b, y, v ]), q.jsx(xs, Ft({
          className: or(us.root, i.root, a),
          ref: m
      }, s, {
          children: q.jsx(cs, {
              component: null,
              exit: !0,
              children: l
          })
      }));
  }));

  function Cs(e) {
      return Kr("MuiButtonBase", e);
  }

  const ks = qr("MuiButtonBase", [ "root", "disabled", "focusVisible" ]), js = [ "action", "centerRipple", "children", "className", "component", "disabled", "disableRipple", "disableTouchRipple", "focusRipple", "focusVisibleClassName", "LinkComponent", "onBlur", "onClick", "onContextMenu", "onDragLeave", "onFocus", "onFocusVisible", "onKeyDown", "onKeyUp", "onMouseDown", "onMouseLeave", "onMouseUp", "onTouchEnd", "onTouchMove", "onTouchStart", "tabIndex", "TouchRippleProps", "touchRippleRef", "type" ], Es = La("button", {
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
      [`&.${ks.disabled}`]: {
          pointerEvents: "none",
          cursor: "default"
      },
      "@media print": {
          colorAdjust: "exact"
      }
  }), Rs = e__namespace.forwardRef((function(t, r) {
      const n = Ha({
          props: t,
          name: "MuiButtonBase"
      }), {action: o, centerRipple: i = !1, children: a, className: s, component: l = "button", disabled: c = !1, disableRipple: u = !1, disableTouchRipple: d = !1, focusRipple: f = !1, LinkComponent: p = "a", onBlur: h, onClick: m, onContextMenu: g, onDragLeave: y, onFocus: b, onFocusVisible: v, onKeyDown: x, onKeyUp: S, onMouseDown: w, onMouseLeave: C, onMouseUp: k, onTouchEnd: j, onTouchMove: E, onTouchStart: R, tabIndex: O = 0, TouchRippleProps: T, touchRippleRef: A, type: $} = n, _ = Bt(n, js), P = e__namespace.useRef(null), M = e__namespace.useRef(null), I = Cr(M, A), {isFocusVisibleRef: B, onFocus: F, onBlur: N, ref: L} = Br(), [z, D] = e__namespace.useState(!1);
      c && z && D(!1), e__namespace.useImperativeHandle(o, (() => ({
          focusVisible: () => {
              D(!0), P.current.focus();
          }
      })), []);
      const [W, V] = e__namespace.useState(!1);
      e__namespace.useEffect((() => {
          V(!0);
      }), []);
      const H = W && !u && !c;
      function K(e, t, r = d) {
          return wr((n => {
              t && t(n);
              return !r && M.current && M.current[e](n), !0;
          }));
      }
      e__namespace.useEffect((() => {
          z && f && !u && W && M.current.pulsate();
      }), [ u, f, z, W ]);
      const X = K("start", w), U = K("stop", g), G = K("stop", y), Y = K("stop", k), J = K("stop", (e => {
          z && e.preventDefault(), C && C(e);
      })), Z = K("start", R), Q = K("stop", j), ee = K("stop", E), te = K("stop", (e => {
          N(e), !1 === B.current && D(!1), h && h(e);
      }), !1), re = wr((e => {
          P.current || (P.current = e.currentTarget), F(e), !0 === B.current && (D(!0), v && v(e)), 
          b && b(e);
      })), ne = () => {
          const e = P.current;
          return l && "button" !== l && !("A" === e.tagName && e.href);
      }, oe = e__namespace.useRef(!1), ie = wr((e => {
          f && !oe.current && z && M.current && " " === e.key && (oe.current = !0, M.current.stop(e, (() => {
              M.current.start(e);
          }))), e.target === e.currentTarget && ne() && " " === e.key && e.preventDefault(), 
          x && x(e), e.target === e.currentTarget && ne() && "Enter" === e.key && !c && (e.preventDefault(), 
          m && m(e));
      })), ae = wr((e => {
          f && " " === e.key && M.current && z && !e.defaultPrevented && (oe.current = !1, 
          M.current.stop(e, (() => {
              M.current.pulsate(e);
          }))), S && S(e), m && e.target === e.currentTarget && ne() && " " === e.key && !e.defaultPrevented && m(e);
      }));
      let se = l;
      "button" === se && (_.href || _.to) && (se = p);
      const le = {};
      "button" === se ? (le.type = void 0 === $ ? "button" : $, le.disabled = c) : (_.href || _.to || (le.role = "button"), 
      c && (le["aria-disabled"] = c));
      const ce = Cr(r, L, P), ue = Ft({}, n, {
          centerRipple: i,
          component: l,
          disabled: c,
          disableRipple: u,
          disableTouchRipple: d,
          focusRipple: f,
          tabIndex: O,
          focusVisible: z
      }), de = (e => {
          const {disabled: t, focusVisible: r, focusVisibleClassName: n, classes: o} = e, i = Dr({
              root: [ "root", t && "disabled", r && "focusVisible" ]
          }, Cs, o);
          return r && n && (i.root += ` ${n}`), i;
      })(ue);
      return q.jsxs(Es, Ft({
          as: se,
          className: or(de.root, s),
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
          type: $
      }, le, _, {
          children: [ a, H ? q.jsx(ws, Ft({
              ref: I,
              center: i
          }, T)) : null ]
      }));
  }));

  function Os(e) {
      return Kr("MuiTabScrollButton", e);
  }

  const Ts = qr("MuiTabScrollButton", [ "root", "vertical", "horizontal", "disabled" ]), As = [ "className", "slots", "slotProps", "direction", "orientation", "disabled" ], $s = La(Rs, {
      name: "MuiTabScrollButton",
      slot: "Root",
      overridesResolver: (e, t) => {
          const {ownerState: r} = e;
          return [ t.root, r.orientation && t[r.orientation] ];
      }
  })((({ownerState: e}) => Ft({
      width: 40,
      flexShrink: 0,
      opacity: .8,
      [`&.${Ts.disabled}`]: {
          opacity: 0
      }
  }, "vertical" === e.orientation && {
      width: "100%",
      height: 40,
      "& svg": {
          transform: `rotate(${e.isRtl ? -90 : 90}deg)`
      }
  }))), _s = e__namespace.forwardRef((function(e, t) {
      var r, n;
      const o = Ha({
          props: e,
          name: "MuiTabScrollButton"
      }), {className: i, slots: a = {}, slotProps: s = {}, direction: l} = o, c = Bt(o, As), u = Ft({
          isRtl: Qr()
      }, o), d = (e => {
          const {classes: t, orientation: r, disabled: n} = e;
          return Dr({
              root: [ "root", r, n && "disabled" ]
          }, Os, t);
      })(u), f = null != (r = a.StartScrollButtonIcon) ? r : es, p = null != (n = a.EndScrollButtonIcon) ? n : ts, h = Jr({
          elementType: f,
          externalSlotProps: s.startScrollButtonIcon,
          additionalProps: {
              fontSize: "small"
          },
          ownerState: u
      }), m = Jr({
          elementType: p,
          externalSlotProps: s.endScrollButtonIcon,
          additionalProps: {
              fontSize: "small"
          },
          ownerState: u
      });
      return q.jsx($s, Ft({
          component: "div",
          className: or(d.root, i),
          ref: t,
          role: null,
          ownerState: u,
          tabIndex: null
      }, c, {
          children: "left" === l ? q.jsx(f, Ft({}, h)) : q.jsx(p, Ft({}, m))
      }));
  }));

  function Ps(e) {
      return Kr("MuiTabs", e);
  }

  const Ms = qr("MuiTabs", [ "root", "vertical", "flexContainer", "flexContainerVertical", "centered", "scroller", "fixed", "scrollableX", "scrollableY", "hideScrollbar", "scrollButtons", "scrollButtonsHideMobile", "indicator" ]), Is = [ "aria-label", "aria-labelledby", "action", "centered", "children", "className", "component", "allowScrollButtonsMobile", "indicatorColor", "onChange", "orientation", "ScrollButtonComponent", "scrollButtons", "selectionFollowsFocus", "slots", "slotProps", "TabIndicatorProps", "TabScrollButtonProps", "textColor", "value", "variant", "visibleScrollbar" ], Bs = (e, t) => e === t ? e.firstChild : t && t.nextElementSibling ? t.nextElementSibling : e.firstChild, Fs = (e, t) => e === t ? e.lastChild : t && t.previousElementSibling ? t.previousElementSibling : e.lastChild, Ns = (e, t, r) => {
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
  }, Ls = La("div", {
      name: "MuiTabs",
      slot: "Root",
      overridesResolver: (e, t) => {
          const {ownerState: r} = e;
          return [ {
              [`& .${Ms.scrollButtons}`]: t.scrollButtons
          }, {
              [`& .${Ms.scrollButtons}`]: r.scrollButtonsHideMobile && t.scrollButtonsHideMobile
          }, t.root, r.vertical && t.vertical ];
      }
  })((({ownerState: e, theme: t}) => Ft({
      overflow: "hidden",
      minHeight: 48,
      WebkitOverflowScrolling: "touch",
      display: "flex"
  }, e.vertical && {
      flexDirection: "column"
  }, e.scrollButtonsHideMobile && {
      [`& .${Ms.scrollButtons}`]: {
          [t.breakpoints.down("sm")]: {
              display: "none"
          }
      }
  }))), zs = La("div", {
      name: "MuiTabs",
      slot: "Scroller",
      overridesResolver: (e, t) => {
          const {ownerState: r} = e;
          return [ t.scroller, r.fixed && t.fixed, r.hideScrollbar && t.hideScrollbar, r.scrollableX && t.scrollableX, r.scrollableY && t.scrollableY ];
      }
  })((({ownerState: e}) => Ft({
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
  }))), Ds = La("div", {
      name: "MuiTabs",
      slot: "FlexContainer",
      overridesResolver: (e, t) => {
          const {ownerState: r} = e;
          return [ t.flexContainer, r.vertical && t.flexContainerVertical, r.centered && t.centered ];
      }
  })((({ownerState: e}) => Ft({
      display: "flex"
  }, e.vertical && {
      flexDirection: "column"
  }, e.centered && {
      justifyContent: "center"
  }))), Ws = La("span", {
      name: "MuiTabs",
      slot: "Indicator",
      overridesResolver: (e, t) => t.indicator
  })((({ownerState: e, theme: t}) => Ft({
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
  }))), Vs = La((function(t) {
      const {onChange: r} = t, n = Bt(t, Za), o = e__namespace.useRef(), i = e__namespace.useRef(null), a = () => {
          o.current = i.current.offsetHeight - i.current.clientHeight;
      };
      return Sr((() => {
          const e = br((() => {
              const e = o.current;
              a(), e !== o.current && r(o.current);
          })), t = xr(i.current);
          return t.addEventListener("resize", e), () => {
              e.clear(), t.removeEventListener("resize", e);
          };
      }), [ r ]), e__namespace.useEffect((() => {
          a(), r(o.current);
      }), [ r ]), q.jsx("div", Ft({
          style: Qa,
          ref: i
      }, n));
  }))({
      overflowX: "auto",
      overflowY: "hidden",
      scrollbarWidth: "none",
      "&::-webkit-scrollbar": {
          display: "none"
      }
  }), Hs = {}, Ks = e__namespace.forwardRef((function(t, r) {
      const n = Ha({
          props: t,
          name: "MuiTabs"
      }), o = function() {
          const e = Va(Fa);
          return e[Na] || e;
      }(), i = Qr(), {"aria-label": a, "aria-labelledby": s, action: l, centered: c = !1, children: u, className: d, component: f = "div", allowScrollButtonsMobile: p = !1, indicatorColor: h = "primary", onChange: m, orientation: g = "horizontal", ScrollButtonComponent: y = _s, scrollButtons: b = "auto", selectionFollowsFocus: v, slots: x = {}, slotProps: S = {}, TabIndicatorProps: w = {}, TabScrollButtonProps: C = {}, textColor: k = "primary", value: j, variant: E = "standard", visibleScrollbar: R = !1} = n, O = Bt(n, Is), T = "scrollable" === E, A = "vertical" === g, $ = A ? "scrollTop" : "scrollLeft", _ = A ? "top" : "left", P = A ? "bottom" : "right", M = A ? "clientHeight" : "clientWidth", I = A ? "height" : "width", B = Ft({}, n, {
          component: f,
          allowScrollButtonsMobile: p,
          indicatorColor: h,
          orientation: g,
          vertical: A,
          scrollButtons: b,
          textColor: k,
          variant: E,
          visibleScrollbar: R,
          fixed: !T,
          hideScrollbar: T && !R,
          scrollableX: T && !A,
          scrollableY: T && A,
          centered: c && !T,
          scrollButtonsHideMobile: !p
      }), F = (e => {
          const {vertical: t, fixed: r, hideScrollbar: n, scrollableX: o, scrollableY: i, centered: a, scrollButtonsHideMobile: s, classes: l} = e;
          return Dr({
              root: [ "root", t && "vertical" ],
              scroller: [ "scroller", r && "fixed", n && "hideScrollbar", o && "scrollableX", i && "scrollableY" ],
              flexContainer: [ "flexContainer", t && "flexContainerVertical", a && "centered" ],
              indicator: [ "indicator" ],
              scrollButtons: [ "scrollButtons", s && "scrollButtonsHideMobile" ],
              scrollableX: [ o && "scrollableX" ],
              hideScrollbar: [ n && "hideScrollbar" ]
          }, Ps, l);
      })(B), N = Jr({
          elementType: x.StartScrollButtonIcon,
          externalSlotProps: S.startScrollButtonIcon,
          ownerState: B
      }), L = Jr({
          elementType: x.EndScrollButtonIcon,
          externalSlotProps: S.endScrollButtonIcon,
          ownerState: B
      }), [z, D] = e__namespace.useState(!1), [W, V] = e__namespace.useState(Hs), [H, K] = e__namespace.useState(!1), [X, U] = e__namespace.useState(!1), [G, Y] = e__namespace.useState(!1), [J, Z] = e__namespace.useState({
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
                  scrollLeftNormalized: Lr(e, i ? "rtl" : "ltr"),
                  scrollWidth: e.scrollWidth,
                  top: r.top,
                  bottom: r.bottom,
                  left: r.left,
                  right: r.right
              };
          }
          if (e && !1 !== j) {
              const e = te.current.children;
              if (e.length > 0) {
                  const t = e[Q.get(j)];
                  r = t ? t.getBoundingClientRect() : null;
              }
          }
          return {
              tabsMeta: t,
              tabMeta: r
          };
      }, ne = wr((() => {
          const {tabsMeta: e, tabMeta: t} = re();
          let r, n = 0;
          if (A) r = "top", t && e && (n = t.top - e.top + e.scrollTop); else if (r = i ? "right" : "left", 
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
              const {ease: i = qa, duration: a = 300} = n;
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
          }($, ee.current, e, {
              duration: o.transitions.duration.standard
          }) : ee.current[$] = e;
      }, ie = e => {
          let t = ee.current[$];
          A ? t += e : (t += e * (i ? -1 : 1), t *= i && "reverse" === Nr() ? -1 : 1), oe(t);
      }, ae = () => {
          const e = ee.current[M];
          let t = 0;
          const r = Array.from(te.current.children);
          for (let n = 0; n < r.length; n += 1) {
              const o = r[n];
              if (t + o[M] > e) {
                  0 === n && (t = e);
                  break;
              }
              t += o[M];
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
      }), []), ue = wr((e => {
          const {tabsMeta: t, tabMeta: r} = re();
          if (r && t) if (r[_] < t[_]) {
              const n = t[$] + (r[_] - t[_]);
              oe(n, {
                  animation: e
              });
          } else if (r[P] > t[P]) {
              const n = t[$] + (r[P] - t[P]);
              oe(n, {
                  animation: e
              });
          }
      })), de = wr((() => {
          T && !1 !== b && Y(!G);
      }));
      e__namespace.useEffect((() => {
          const e = br((() => {
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
          }, n = xr(ee.current);
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
          ue(Hs !== W);
      }), [ ue, W ]), e__namespace.useImperativeHandle(l, (() => ({
          updateIndicator: ne,
          updateScrollButtons: de
      })), [ ne, de ]);
      const fe = q.jsx(Ws, Ft({}, w, {
          className: or(F.indicator, w.className),
          ownerState: B,
          style: Ft({}, W, w.style)
      }));
      let pe = 0;
      const he = e__namespace.Children.map(u, (t => {
          if (!e__namespace.isValidElement(t)) return null;
          const r = void 0 === t.props.value ? pe : t.props.value;
          Q.set(r, pe);
          const n = r === j;
          return pe += 1, e__namespace.cloneElement(t, Ft({
              fullWidth: "fullWidth" === E,
              indicator: n && !z && fe,
              selected: n,
              selectionFollowsFocus: v,
              onChange: m,
              textColor: k,
              value: r
          }, 1 !== pe || !1 !== j || t.props.tabIndex ? {} : {
              tabIndex: 0
          }));
      })), me = (() => {
          const e = {};
          e.scrollbarSizeListener = T ? q.jsx(Vs, {
              onChange: ce,
              className: or(F.scrollableX, F.hideScrollbar)
          }) : null;
          const t = T && ("auto" === b && (H || X) || !0 === b);
          return e.scrollButtonStart = t ? q.jsx(y, Ft({
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
          }, C, {
              className: or(F.scrollButtons, C.className)
          })) : null, e.scrollButtonEnd = t ? q.jsx(y, Ft({
              slots: {
                  EndScrollButtonIcon: x.EndScrollButtonIcon
              },
              slotProps: {
                  endScrollButtonIcon: L
              },
              orientation: g,
              direction: i ? "left" : "right",
              onClick: le,
              disabled: !X
          }, C, {
              className: or(F.scrollButtons, C.className)
          })) : null, e;
      })();
      return q.jsxs(Ls, Ft({
          className: or(F.root, d),
          ownerState: B,
          ref: r,
          as: f
      }, O, {
          children: [ me.scrollButtonStart, me.scrollbarSizeListener, q.jsxs(zs, {
              className: F.scroller,
              ownerState: B,
              style: {
                  overflow: J.overflow,
                  [A ? "margin" + (i ? "Left" : "Right") : "marginBottom"]: R ? void 0 : -J.scrollbarWidth
              },
              ref: ee,
              children: [ q.jsx(Ds, {
                  "aria-label": a,
                  "aria-labelledby": s,
                  "aria-orientation": "vertical" === g ? "vertical" : null,
                  className: F.flexContainer,
                  ownerState: B,
                  onKeyDown: e => {
                      const t = te.current, r = vr(t).activeElement;
                      if ("tab" !== r.getAttribute("role")) return;
                      let n = "horizontal" === g ? "ArrowLeft" : "ArrowUp", o = "horizontal" === g ? "ArrowRight" : "ArrowDown";
                      switch ("horizontal" === g && i && (n = "ArrowRight", o = "ArrowLeft"), e.key) {
                        case n:
                          e.preventDefault(), Ns(t, r, Fs);
                          break;

                        case o:
                          e.preventDefault(), Ns(t, r, Bs);
                          break;

                        case "Home":
                          e.preventDefault(), Ns(t, null, Bs);
                          break;

                        case "End":
                          e.preventDefault(), Ns(t, null, Fs);
                      }
                  },
                  ref: te,
                  role: "tablist",
                  children: he
              }), z && fe ]
          }), me.scrollButtonEnd ]
      }));
  }));

  function qs(e) {
      return Kr("MuiTab", e);
  }

  const Xs = qr("MuiTab", [ "root", "labelIcon", "textColorInherit", "textColorPrimary", "textColorSecondary", "selected", "disabled", "fullWidth", "wrapped", "iconWrapper" ]), Us = [ "className", "disabled", "disableFocusRipple", "fullWidth", "icon", "iconPosition", "indicator", "label", "onChange", "onClick", "onFocus", "selected", "selectionFollowsFocus", "textColor", "value", "wrapped" ], Gs = La(Rs, {
      name: "MuiTab",
      slot: "Root",
      overridesResolver: (e, t) => {
          const {ownerState: r} = e;
          return [ t.root, r.label && r.icon && t.labelIcon, t[`textColor${gr(r.textColor)}`], r.fullWidth && t.fullWidth, r.wrapped && t.wrapped ];
      }
  })((({theme: e, ownerState: t}) => Ft({}, e.typography.button, {
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
      [`& > .${Xs.iconWrapper}`]: Ft({}, "top" === t.iconPosition && {
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
      [`&.${Xs.selected}`]: {
          opacity: 1
      },
      [`&.${Xs.disabled}`]: {
          opacity: (e.vars || e).palette.action.disabledOpacity
      }
  }, "primary" === t.textColor && {
      color: (e.vars || e).palette.text.secondary,
      [`&.${Xs.selected}`]: {
          color: (e.vars || e).palette.primary.main
      },
      [`&.${Xs.disabled}`]: {
          color: (e.vars || e).palette.text.disabled
      }
  }, "secondary" === t.textColor && {
      color: (e.vars || e).palette.text.secondary,
      [`&.${Xs.selected}`]: {
          color: (e.vars || e).palette.secondary.main
      },
      [`&.${Xs.disabled}`]: {
          color: (e.vars || e).palette.text.disabled
      }
  }, t.fullWidth && {
      flexShrink: 1,
      flexGrow: 1,
      flexBasis: 0,
      maxWidth: "none"
  }, t.wrapped && {
      fontSize: e.typography.pxToRem(12)
  }))), Ys = e__namespace.forwardRef((function(t, r) {
      const n = Ha({
          props: t,
          name: "MuiTab"
      }), {className: o, disabled: i = !1, disableFocusRipple: a = !1, fullWidth: s, icon: l, iconPosition: c = "top", indicator: u, label: d, onChange: f, onClick: p, onFocus: h, selected: m, selectionFollowsFocus: g, textColor: y = "inherit", value: b, wrapped: v = !1} = n, x = Bt(n, Us), S = Ft({}, n, {
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
          return Dr({
              root: [ "root", i && a && "labelIcon", `textColor${gr(r)}`, n && "fullWidth", o && "wrapped", s && "selected", l && "disabled" ],
              iconWrapper: [ "iconWrapper" ]
          }, qs, t);
      })(S), C = l && d && e__namespace.isValidElement(l) ? e__namespace.cloneElement(l, {
          className: or(w.iconWrapper, l.props.className)
      }) : l;
      return q.jsxs(Gs, Ft({
          focusRipple: !a,
          className: or(w.root, o),
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
              children: [ C, d ]
          }) : q.jsxs(e__namespace.Fragment, {
              children: [ d, C ]
          }), u ]
      }));
  })), Js = qr("MuiBox", [ "root" ]), Zs = Ba(), Qs = function(t = {}) {
      const {themeId: r, defaultTheme: n, defaultClassName: o = "MuiBox-root", generateClassName: i} = t, a = uo("div", {
          shouldForwardProp: e => "theme" !== e && "sx" !== e && "as" !== e
      })(gi);
      return e__namespace.forwardRef((function(e, t) {
          const s = Va(n), l = Ci(e), {className: c, component: u = "div"} = l, d = Bt(l, Ka);
          return q.jsx(a, Ft({
              as: u,
              ref: t,
              className: or(c, i ? i(o) : o),
              theme: r && s[r] || s
          }, d));
      }));
  }({
      themeId: Na,
      defaultTheme: Zs,
      defaultClassName: Js.root,
      generateClassName: Vr.generate
  });

  function el() {
      const {logItems: e$1} = Ue(), t = e.useRef(null);
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

  const tl = ({value: e$1, min: t = 0, max: r = 1 / 0, step: o = 1, decimalScale: i = 0, unit: a, singularUnit: s, helperText: l, textAlign: d = "center", hideActionButtons: f = !1, onChange: p, ...h}) => {
      var w, C;
      const [k, j] = e.useState(null == e$1 ? void 0 : e$1.toString()), E = Math.max(...[ t, r, o ].map((e => (e % 1 || 0).toString().length - 2)), 0), R = i > 0 || E > 0;
      i = i > 0 ? i : E;
      const O = nl(t, r, R), T = e => rl(e, t, r, i), A = T(k).toString() === k && void 0 !== e$1 ? T(e$1).toString() : k, $ = e => {
          j(e);
          const t = T(e);
          t.toString() === e && (null == p || p(t));
      }, _ = e => () => $(T(T(A) + e).toString());
      h ?? (h = {}), h.inputProps ?? (h.inputProps = {}), (w = h.inputProps).style ?? (w.style = {}), 
      (C = h.inputProps.style).textAlign ?? (C.textAlign = d), h.placeholder ?? (h.placeholder = Math.min(r, Math.max(t, 0)).toString());
      const P = ol(h);
      return f = f || h.readOnly || !1, s ?? (s = a), a ?? (a = s), q.jsx(material.Box, {
          children: q.jsxs(material.FormControl, {
              ...P,
              variant: "outlined",
              children: [ q.jsx(material.InputLabel, {
                  shrink: !0,
                  htmlFor: "number-input",
                  children: h.label
              }), q.jsx(material.OutlinedInput, {
                  notched: !0,
                  error: h.error || Number(k) < t || Number(k) > r,
                  ...h,
                  value: A,
                  id: "number-input",
                  onChange: e => $(e.target.value),
                  onBlur: e => $(T(e.target.value).toString()),
                  onKeyDown: e => {
                      const n = (e => {
                          if (e.ctrlKey || e.shiftKey || e.altKey) return;
                          if ("ArrowUp" === e.key) return void _(o)();
                          if ("ArrowDown" === e.key) return void _(-o)();
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
                          onClick: _(-o),
                          edge: "start",
                          disabled: h.disabled || T(A) <= t,
                          children: q.jsx(material.Icon, {
                              children: "do_not_disturb_on"
                          })
                      })
                  }),
                  endAdornment: (a || !f) && q.jsxs(material.InputAdornment, {
                      position: "end",
                      children: [ a && q.jsx(material.Typography, {
                          className: "cursor-default select-none",
                          children: 1 === T(A) ? s : a
                      }), !f && q.jsx(material.IconButton, {
                          "aria-label": "increase value",
                          onClick: _(o),
                          edge: "end",
                          disabled: h.disabled || T(A) >= r,
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
  }, rl = (e, t = -1 / 0, r = 1 / 0, n = 0) => {
      let o = "number" == typeof e ? e : Number(e);
      return o = Math.min(r, Math.max(t, isNaN(o) ? 0 : o)), Number(o.toFixed(n));
  }, nl = (e, t, r) => {
      let n = "^";
      return n += t < 0 ? "-[0-9]*" : e > 0 ? "[0-9]+" : "-?[0-9]*", r && (n += "(\\.[0-9]*)?"), 
      n += "$", new RegExp(n);
  }, ol = e => ({
      color: e.color,
      disabled: e.disabled,
      error: e.error,
      fullWidth: e.fullWidth,
      required: e.required,
      variant: e.variant
  });

  function il() {
      const {countTimes: e, standbyTime: t, setCountTimes: r, setStandbyTime: n} = Ge();
      return Ge((e => e._hasHydrated)) ? q.jsxs(material.List, {
          sx: {},
          children: [ q.jsx(material.ListItem, {
              sx: {
                  pt: 3
              },
              children: q.jsx(tl, {
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
              children: q.jsx(tl, {
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

  function al() {
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

  function sl(e) {
      const {children: t, value: r, index: n, ...o} = e;
      return q.jsx("div", {
          role: "tabpanel",
          hidden: r !== n,
          id: `cx-auto-tabpanel-${n}`,
          "aria-labelledby": `cx-auto-tab-${n}`,
          ...o,
          children: r === n && q.jsx(Qs, {
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

  function ll(e) {
      return {
          id: `cx-auto-tab-${e}`,
          "aria-controls": `cx-auto-tabpanel-${e}`
      };
  }

  function cl() {
      const [e$1, t] = e.useState(0), {isInActionFrame: r} = Ye();
      return q.jsxs(Qs, {
          sx: {
              width: "100%"
          },
          children: [ q.jsx(Qs, {
              sx: {
                  borderBottom: 1,
                  borderColor: "divider"
              },
              children: q.jsxs(Ks, {
                  value: e$1,
                  onChange: (e, r) => {
                      t(r);
                  },
                  "aria-label": "basic tabs example",
                  children: [ q.jsx(Ys, {
                      disabled: r,
                      label: "状态",
                      ...ll(0)
                  }), q.jsx(Ys, {
                      disabled: r,
                      label: "设定",
                      ...ll(1)
                  }), q.jsx(Ys, {
                      disabled: r,
                      label: "关于",
                      ...ll(2)
                  }) ]
              })
          }), q.jsx(sl, {
              value: e$1,
              index: 0,
              children: q.jsx(el, {})
          }), q.jsx(sl, {
              value: e$1,
              index: 1,
              children: q.jsx(il, {})
          }), q.jsx(sl, {
              value: e$1,
              index: 2,
              children: q.jsx(al, {})
          }) ]
      });
  }

  function ul({title: e$1, canBeClosed: r = !0, handleClose: o, actions: i, draggableProps: a, dialogProps: s, maxWidth: l, children: u}) {
      const [d, f] = e.useState(!0), p = e.useRef(null);
      return d && q.jsx(P, {
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

  function dl() {
      const [e$1, r] = e.useState(!0);
      e.useRef(null);
      const {isInActionFrame: o, actionFrameStatus: i, setCurrentStatus: a, setCurrentPage: s} = Ye(), l = i.src;
      return e$1 && q.jsxs(q.Fragment, {
          children: [ q.jsx(ul, {
              title: "学习通自动化",
              actions: q.jsx(It, {}),
              canBeClosed: !o,
              handleClose: () => {
                  r(!1), a(null), s(null);
              },
              children: q.jsx(cl, {})
          }), l && q.jsxs(ul, {
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

  var fl = {}, pl = M;

  fl.createRoot = pl.createRoot, fl.hydrateRoot = pl.hydrateRoot, console.log("Chaoxing auto start!!!"), 
  (ee() || te()) && (console.log("Topic Match"), fl.createRoot((() => {
      const e = document.createElement("div");
      return document.body.append(e), e;
  })()).render(q.jsx(e.StrictMode, {
      children: q.jsx(dl, {})
  })));

})(React, MaterialUI, emotionStyled, emotionReact, ReactDraggable, ReactDOM);