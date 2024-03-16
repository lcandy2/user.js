// ==UserScript==
// @name         超兴学习通自动化 ——— Chaoxing Auto
// @namespace    https://github.com/lcandy2/Chaoxing-Auto
// @version      1.0.4
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

(function (e, material, E, react, P, M) {
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
          var n = function e() {
              return this instanceof e ? Reflect.construct(t, arguments, this.constructor) : t.apply(this, arguments);
          };
          n.prototype = t.prototype;
      } else n = {};
      return Object.defineProperty(n, "__esModule", {
          value: !0
      }), Object.keys(e).forEach((function(t) {
          var r = Object.getOwnPropertyDescriptor(e, t);
          Object.defineProperty(n, t, r.get ? r : {
              enumerable: !0,
              get: function() {
                  return e[t];
              }
          });
      })), n;
  }

  var F = {
      exports: {}
  }, N = {}, L = e, z = Symbol.for("react.element"), D = Symbol.for("react.fragment"), W = Object.prototype.hasOwnProperty, V = L.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner, H = {
      key: !0,
      ref: !0,
      __self: !0,
      __source: !0
  };

  function q(e, t, n) {
      var r, o = {}, i = null, a = null;
      for (r in void 0 !== n && (i = "" + n), void 0 !== t.key && (i = "" + t.key), void 0 !== t.ref && (a = t.ref), 
      t) W.call(t, r) && !H.hasOwnProperty(r) && (o[r] = t[r]);
      if (e && e.defaultProps) for (r in t = e.defaultProps) void 0 === o[r] && (o[r] = t[r]);
      return {
          $$typeof: z,
          type: e,
          key: i,
          ref: a,
          props: o,
          _owner: V.current
      };
  }

  N.Fragment = D, N.jsx = q, N.jsxs = q, F.exports = N;

  var K = F.exports;

  const X = new URL("https://mooc1.chaoxing.com/bbscircle/grouptopic"), U = new URL("https://mooc1.chaoxing.com/mooc-ans/bbscircle/grouptopic"), G = new URL("https://mooc1.chaoxing.com/bbscircle/gettopicdetail"), Y = new URL("https://mooc1.chaoxing.com/mooc-ans/bbscircle/gettopicdetail"), J = new URL("https://groupweb.chaoxing.com/course/topic/topicList"), Z = new URL("https://groupweb.chaoxing.com/course/topic/v3/bbs"), Q = window.location.href, ee = () => oe() || ae(), te = () => ie() || se(), ne = () => oe() || ie(), re = () => ae() || se(), oe = () => {
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
      const n = new Set, r = (e, r) => {
          const o = "function" == typeof e ? e(t) : e;
          if (!Object.is(o, t)) {
              const e = t;
              t = (null != r ? r : "object" != typeof o || null === o) ? o : Object.assign({}, t, o), 
              n.forEach((n => n(t, e)));
          }
      }, o = () => t, i = {
          setState: r,
          getState: o,
          getInitialState: () => a,
          subscribe: e => (n.add(e), () => n.delete(e)),
          destroy: () => {
              "production" !== (le ? "production" : void 0) && console.warn("[DEPRECATED] The `destroy` method will be unsupported in a future version. Instead use unsubscribe function returned by subscribe. Everything will be garbage-collected if store is garbage-collected."), 
              n.clear();
          }
      }, a = t = e(r, o, i);
      return i;
  };

  var ue = {
      exports: {}
  }, de = {}, pe = {
      exports: {}
  }, fe = {}, he = e;

  var me = "function" == typeof Object.is ? Object.is : function(e, t) {
      return e === t && (0 !== e || 1 / e == 1 / t) || e != e && t != t;
  }, ge = he.useState, ye = he.useEffect, be = he.useLayoutEffect, ve = he.useDebugValue;

  function xe(e) {
      var t = e.getSnapshot;
      e = e.value;
      try {
          var n = t();
          return !me(e, n);
      } catch (r) {
          return !0;
      }
  }

  var Se = "undefined" == typeof window || void 0 === window.document || void 0 === window.document.createElement ? function(e, t) {
      return t();
  } : function(e, t) {
      var n = t(), r = ge({
          inst: {
              value: n,
              getSnapshot: t
          }
      }), o = r[0].inst, i = r[1];
      return be((function() {
          o.value = n, o.getSnapshot = t, xe(o) && i({
              inst: o
          });
      }), [ e, n, t ]), ye((function() {
          return xe(o) && i({
              inst: o
          }), e((function() {
              xe(o) && i({
                  inst: o
              });
          }));
      }), [ e ]), ve(n), n;
  };

  fe.useSyncExternalStore = void 0 !== he.useSyncExternalStore ? he.useSyncExternalStore : Se, 
  pe.exports = fe;

  var we = pe.exports, Ce = e, ke = we;

  var je = "function" == typeof Object.is ? Object.is : function(e, t) {
      return e === t && (0 !== e || 1 / e == 1 / t) || e != e && t != t;
  }, Re = ke.useSyncExternalStore, Ee = Ce.useRef, Te = Ce.useEffect, Oe = Ce.useMemo, _e = Ce.useDebugValue;

  de.useSyncExternalStoreWithSelector = function(e, t, n, r, o) {
      var i = Ee(null);
      if (null === i.current) {
          var a = {
              hasValue: !1,
              value: null
          };
          i.current = a;
      } else a = i.current;
      i = Oe((function() {
          function e(e) {
              if (!l) {
                  if (l = !0, i = e, e = r(e), void 0 !== o && a.hasValue) {
                      var t = a.value;
                      if (o(t, e)) return s = t;
                  }
                  return s = e;
              }
              if (t = s, je(i, e)) return t;
              var n = r(e);
              return void 0 !== o && o(t, n) ? t : (i = e, s = n);
          }
          var i, s, l = !1, c = void 0 === n ? null : n;
          return [ function() {
              return e(t());
          }, null === c ? void 0 : function() {
              return e(c());
          } ];
      }), [ t, n, r, o ]);
      var s = Re(e, i[0], i[1]);
      return Te((function() {
          a.hasValue = !0, a.value = s;
      }), [ s ]), _e(s), s;
  }, ue.exports = de;

  const $e = I(ue.exports);

  var Ae = {
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
      "production" !== (Ae ? "production" : void 0) && "function" != typeof e && console.warn("[DEPRECATED] Passing a vanilla store will be unsupported in a future version. Instead use `import { useStore } from 'zustand'`.");
      const t = "function" == typeof e ? (e => e ? ce(e) : ce)(e) : e, n = (e, n) => function(e, t = Be, n) {
          "production" !== (Ae ? "production" : void 0) && n && !Ie && (console.warn("[DEPRECATED] Use `createWithEqualityFn` instead of `create` or use `useStoreWithEqualityFn` instead of `useStore`. They can be imported from 'zustand/traditional'. https://github.com/pmndrs/zustand/discussions/1937"), 
          Ie = !0);
          const r = Me(e.subscribe, e.getState, e.getServerState || e.getInitialState, t, n);
          return Pe(r), r;
      }(t, e, n);
      return Object.assign(n, t), n;
  }, Ne = e => e ? Fe(e) : Fe;

  var Le = {
      BASE_URL: "/",
      MODE: "production",
      DEV: !1,
      PROD: !0,
      SSR: !1
  };

  const ze = (e, t) => (...n) => Object.assign({}, e, t(...n));

  function De(e, t) {
      let n;
      try {
          n = e();
      } catch (r) {
          return;
      }
      return {
          getItem: e => {
              var r;
              const o = e => null === e ? null : JSON.parse(e, null == t ? void 0 : t.reviver), i = null != (r = n.getItem(e)) ? r : null;
              return i instanceof Promise ? i.then(o) : o(i);
          },
          setItem: (e, r) => n.setItem(e, JSON.stringify(r, null == t ? void 0 : t.replacer)),
          removeItem: e => n.removeItem(e)
      };
  }

  const We = e => t => {
      try {
          const n = e(t);
          return n instanceof Promise ? n : {
              then: e => We(e)(n),
              catch(e) {
                  return this;
              }
          };
      } catch (n) {
          return {
              then(e) {
                  return this;
              },
              catch: e => We(e)(n)
          };
      }
  }, Ve = (e, t) => "getStorage" in t || "serialize" in t || "deserialize" in t ? ("production" !== (Le ? "production" : void 0) && console.warn("[DEPRECATED] `getStorage`, `serialize` and `deserialize` options are deprecated. Use `storage` option instead."), 
  ((e, t) => (n, r, o) => {
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
          n(...e);
      }), r, o);
      const u = We(i.serialize), d = () => {
          const e = i.partialize({
              ...r()
          });
          let t;
          const n = u({
              state: e,
              version: i.version
          }).then((e => c.setItem(i.name, e))).catch((e => {
              t = e;
          }));
          if (t) throw t;
          return n;
      }, p = o.setState;
      o.setState = (e, t) => {
          p(e, t), d();
      };
      const f = e(((...e) => {
          n(...e), d();
      }), r, o);
      let h;
      const m = () => {
          var e;
          if (!c) return;
          a = !1, s.forEach((e => e(r())));
          const t = (null == (e = i.onRehydrateStorage) ? void 0 : e.call(i, r())) || void 0;
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
              return h = i.merge(e, null != (t = r()) ? t : f), n(h, !0), d();
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
      }, m(), h || f;
  })(e, t)) : ((e, t) => (n, r, o) => {
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
          n(...e);
      }), r, o);
      const u = () => {
          const e = i.partialize({
              ...r()
          });
          return c.setItem(i.name, {
              state: e,
              version: i.version
          });
      }, d = o.setState;
      o.setState = (e, t) => {
          d(e, t), u();
      };
      const p = e(((...e) => {
          n(...e), u();
      }), r, o);
      let f;
      o.getInitialState = () => p;
      const h = () => {
          var e, t;
          if (!c) return;
          a = !1, s.forEach((e => {
              var t;
              return e(null != (t = r()) ? t : p);
          }));
          const o = (null == (t = i.onRehydrateStorage) ? void 0 : t.call(i, null != (e = r()) ? e : p)) || void 0;
          return We(c.getItem.bind(c))(i.name).then((e => {
              if (e) {
                  if ("number" != typeof e.version || e.version === i.version) return e.state;
                  if (i.migrate) return i.migrate(e.state, e.version);
                  console.error("State loaded from storage couldn't be migrated since no migrate function was provided");
              }
          })).then((e => {
              var t;
              return f = i.merge(e, null != (t = r()) ? t : p), n(f, !0), u();
          })).then((() => {
              null == o || o(f, void 0), f = r(), a = !0, l.forEach((e => e(f)));
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
      }, i.skipHydration || h(), f || p;
  })(e, t);

  var He = (() => "undefined" != typeof GM_deleteValue ? GM_deleteValue : void 0)(), qe = (() => "undefined" != typeof GM_getValue ? GM_getValue : void 0)(), Ke = (() => "undefined" != typeof GM_setValue ? GM_setValue : void 0)();

  const Xe = {
      getItem: async e => await qe(e) || null,
      setItem: async (e, t) => {
          await Ke(e, t);
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
      standbyTime: 1e3,
      replyCountTimes: 1,
      newTopicCountTimes: 3,
      _hasHydrated: !1
  }, (e => ({
      setStandbyTime: t => {
          e({
              standbyTime: t
          });
      },
      setReplyCountTimes: t => {
          e({
              replyCountTimes: t
          });
      },
      setNewTopicCountTimes: t => {
          e({
              newTopicCountTimes: t
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
      actionNewTopicStatus: null,
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
      setActionNewTopicStatus: t => {
          e({
              actionNewTopicStatus: t
          });
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
      return new Promise((n => setTimeout(n, t * e)));
  }

  async function Ze() {
      const e = ae(), t = se(), n = Ue.getState().addLogItem, r = {
          title: void 0,
          content: void 0,
          replies: void 0
      };
      if (e && !t) try {
          const e = document.querySelector(".topicDetail_detail"), t = document.querySelector(".topicDetail_replyList");
          if (!e || !t) return;
          const n = Qe(e), o = tt(e), i = await nt(t);
          r.title = n, r.content = o, r.replies = i;
      } catch (o) {
          console.error(o), n(`获取讨论详情失败：${o}`);
      } else if (t && !e) try {
          const e = document.querySelectorAll("div");
          let t;
          for (let r = 0; r < e.length; r++) if (e[r].className.match(/content\d{4}/)) {
              t = e[r];
              break;
          }
          if (!t) return;
          const n = rt(t), o = ot(t), i = it(t);
          r.title = n, r.content = o, r.replies = i;
      } catch (o) {
          console.error(o), n(`获取讨论详情失败：${o}`);
      }
      return r;
  }

  const Qe = e => {
      var t;
      const n = e.querySelector(".topicDetail_title");
      return n ? null == (t = n.textContent) ? void 0 : t.trim() : void 0;
  }, et = e => {
      const t = document.querySelector(".topicDetail_replyList");
      if (!t) return void console.error("Element not found");
      if (t.children.length > 1) return void e();
      const n = new MutationObserver(((t, n) => {
          for (let r of t) "childList" === r.type && e();
      }));
      return n.observe(t, {
          attributes: !1,
          childList: !0,
          subtree: !0
      }), () => n.disconnect();
  }, tt = e => {
      const t = e.querySelector(".topicDetail_main");
      if (!t) return;
      return Array.from(t.children).filter((e => !e.classList.contains("topicDetail_info"))).map((e => {
          var t;
          return null == (t = e.textContent) ? void 0 : t.trim();
      })).join(" ");
  }, nt = async e => {
      const t = document.querySelector(".classReplyCount span"), n = Number((null == t ? void 0 : t.textContent) || 0);
      let r = (() => {
          Je(.5);
          return Array.from(e.querySelectorAll(".topicDetail_replyItem")).map((e => {
              var t, n;
              const r = e.querySelector(".author"), o = e.querySelector(".replyContent");
              return {
                  author: r ? null == (t = r.textContent) ? void 0 : t.trim() : "",
                  content: o ? null == (n = o.textContent) ? void 0 : n.trim() : ""
              };
          }));
      })();
      return 0 === n || r.length > 0 ? r : [ {
          content: "NEED_OBSERVE"
      } ];
  }, rt = e => {
      var t;
      const n = e.querySelector(".oneDiv");
      let r;
      if (n) {
          let e = n.querySelector("h3");
          if (e) {
              let n = e.querySelector("em");
              n && n.remove(), r = null == (t = e.textContent) ? void 0 : t.trim();
          }
      }
      return r;
  }, ot = e => {
      var t;
      const n = e.querySelector("#topicContent");
      return n ? null == (t = n.textContent) ? void 0 : t.trim() : void 0;
  }, it = e => {
      var t, n;
      let r, o = [];
      if (e && e.children.length > 1) {
          r = e.children[1];
          let i = r.querySelectorAll("div");
          for (let e = 0; e < i.length; e++) {
              if (i[e].parentElement !== r) continue;
              let a = {}, s = i[e].querySelector("p > span.name"), l = i[e].querySelector("h3");
              s && (a.author = null == (t = s.textContent) ? void 0 : t.trim()), l && (a.content = null == (n = l.textContent) ? void 0 : n.trim()), 
              a.content && o.push(a);
          }
      }
      return o;
  }, at = window.location.hash, st = "cxauto_success_", lt = "cxauto_action_trigger", ct = "cxauto_action_reply_index_", ut = e => {
      at.includes(e) || window.history.replaceState(null, "", `${at}#${e}`);
  }, dt = () => at.includes("cxauto_start"), pt = () => {
      const e = st, t = at.match(new RegExp(`${e}(\\w+)`));
      return t ? t[1] : at.includes(e.slice(0, -1));
  }, ft = () => {
      const e = lt;
      return at.includes(e);
  }, ht = () => {
      const e = ct, t = at.match(new RegExp(`${e}(\\d+)`));
      return t ? parseInt(t[1]) : 0;
  }, mt = (e, t) => {
      const n = st + e;
      return t ? `${t}#${n}` : (ut(n), !0);
  }, gt = e => e ? `${e}#${lt}` : (ut(lt), !0), yt = (e, t) => {
      const n = `${ct}${e}`;
      return t ? `${t}#${n}` : (ut(n), !0);
  }, bt = ee() && !te() ? "new" : te() && !ee() ? "legacy" : null;

  function vt(e) {
      const t = Ue.getState().addLogItem;
      t("----- 执行失败 -----"), t(e.toString()), t(`-v=${bt}`), console.error(e, bt);
  }

  const xt = () => Array.from(document.querySelectorAll("div#showTopics div.content1118")).filter((e => Array.from(e.children).some((e => e.classList.contains("oneRight"))))).map((e => {
      var t, n, r;
      const o = e.querySelector("h3 a"), i = (null == (t = null == o ? void 0 : o.textContent) ? void 0 : t.trim()) || "", a = e.querySelector("p.clearfix");
      return {
          title: i,
          author: (null == (n = null == a ? void 0 : a.children[0].textContent) ? void 0 : n.trim()) || "",
          replyCount: (null == (r = null == a ? void 0 : a.children[1].textContent) ? void 0 : r.trim()) || "",
          url: (null == o ? void 0 : o.getAttribute("href")) || ""
      };
  })), St = () => Array.from(document.querySelectorAll("div.dataCon ul.dataBody li.dataBody_topic")).map((e => {
      var t, n, r;
      const o = e.querySelector("span.author"), i = (null == (t = null == o ? void 0 : o.textContent) ? void 0 : t.trim()) || "", a = e.querySelector("div.topic_interactive div.comment span"), s = (null == (n = null == a ? void 0 : a.textContent) ? void 0 : n.trim()) || "", l = e.querySelector("a.topicli_link"), c = (null == l ? void 0 : l.getAttribute("href")) || "";
      return {
          title: (null == (r = null == l ? void 0 : l.textContent) ? void 0 : r.trim()) || "",
          author: i,
          replyCount: s,
          url: c
      };
  })), wt = ae() && !se() ? "new" : se() && !ae() ? "legacy" : null, Ct = "new" === wt, kt = Ue.getState().addLogItem;

  const jt = (e, t) => {
      if (!e.replies) throw new Error("topicDetail.replies is undefined");
      const n = e.replies.map((e => e.content || "")), r = [];
      if (n.length <= 0) {
          for (let n = 0; n < t; n++) r.push(e.content || e.title || "");
          return r;
      }
      let o = !0;
      n.length <= t && (o = !1);
      for (let i = 0; i < t; i++) {
          const e = Math.floor(Math.random() * n.length);
          r.push(n[e]), o && n.splice(e, 1);
      }
      return r;
  }, Rt = async e => {
      try {
          const t = document.querySelector(e);
          if (console.log(t, e), !t) throw new Error("无法找到进行回复的按钮。");
          return t.click(), kt("已点击进行回复的按钮，即将继续..."), await Je(.1), !0;
      } catch (t) {
          return vt(t), !1;
      }
  }, Et = async e => {
      try {
          const t = document.querySelector(e);
          if (!t) throw new Error("无法找到用于回复的文本区域。");
          return t.click(), t.focus(), kt("已找到用于回复的文本区域，等待回复..."), await Je(.1), t;
      } catch (t) {
          vt(t);
      }
  }, Tt = async ({selector: e, textarea: t, contextToReply: n}) => {
      try {
          const r = document.querySelector(e);
          if (!r || !t) throw new Error("Required elements not found.");
          for (let e = 0; e < n.length; e++) t.value = n[e], kt(`Reply ${n[e]} filled, waiting to submit...`), 
          "legacy" === wt && r.addEventListener("click", (function(e) {
              e.preventDefault();
          })), await Je(1), r.click(), t.value = "", e !== n.length - 1 && (kt("Reply submitted, waiting to continue..."), 
          await Je(1));
          return !0;
      } catch (r) {
          vt(r);
      }
  };

  const Ot = ({setCurrentStatus: e}) => async () => {
      e("triggered");
  }, _t = async ({setCurrentStatus: e}) => {
      e(await async function() {
          const {replyCountTimes: e} = Ge.getState(), {topicDetail: t} = Ye.getState(), n = jt(t, e);
          console.debug("currentVersion", wt);
          try {
              if (n.length <= 0) throw new Error("未获取到回复评论。");
              const e = Ct ? "div.topicDetail_detail div.replyBtn" : "div.oneDiv p.clearfix a.tl1", t = Ct ? "div.topicDetail_editContainer div.replyEdit textarea" : "div.plDiv div.hfpl textarea", r = Ct ? "div.replyEditBtnGroup div.addReply" : "div.plDiv div.hfpl input.grenBtn", o = await Rt(e), i = await Et(t), a = await Tt({
                  selector: r,
                  textarea: i,
                  contextToReply: n
              });
              if (o && i && a) return !0;
          } catch (r) {
              return vt(r), !1;
          }
      }() ? "success" : "failed");
  }, $t = e => {
      const t = {
          type: "cxauto_action_frame",
          status: "success",
          index: e
      };
      console.debug("PostMessageSuccess", t), window.parent.postMessage(t, "*");
  }, At = () => {
      window.addEventListener("message", (e => {
          if (console.debug("ReceiveMessage", e.data), "cxauto_action_frame" === e.data.type) {
              const t = Ye.getState().actionFrameStatus.status, n = Ye.getState().actionFrameStatus.index;
              "success" === e.data.status && "running" === t && n === e.data.index && Ye.getState().setActionFrameStatusStatus("success");
          }
      }));
  }, Pt = Ye.getState().setActionFrameStatusStatus, Mt = Ye.getState().setActionFrameStatusIndex, It = Ye.getState().setActionFrameStatusTotal, Bt = Ye.getState().setActionFrameStatusSrc, Ft = Ue.getState().addLogItem;

  const Nt = () => {
      const {topicList: e} = Ye.getState();
      return e.length, Mt(0), It(e.length), Bt(""), !0;
  }, Lt = async (e, t) => (Ft("等待继续..."), Bt(""), await Je(.5), e === t - 1 || (Mt(e + 1), 
  Pt("waitingToStart"), !1));

  const zt = Ue.getState().addLogItem, Dt = async e => {
      try {
          const t = document.querySelector(e);
          if (console.log(t, e), !t) throw new Error("无法找到发表讨论的按钮。");
          return t.click(), zt("已点击进行回复的按钮，即将继续..."), await Je(.3), !0;
      } catch (t) {
          return vt(t), !1;
      }
  }, Wt = async (e, t) => {
      try {
          const n = document.querySelector(e);
          if (!n) throw new Error("无法找到输入标题的输入框。");
          return n.click(), n.focus(), n.value = t, zt(`已输入标题：${t}，即将继续...`), await Je(1), 
          !0;
      } catch (n) {
          return vt(n), !1;
      }
  }, Vt = async e => {
      try {
          const t = document.querySelector(e);
          if (!t) throw new Error("无法找到发表讨论的按钮。");
          return t.click(), zt("已点击发表讨论的按钮，即将继续..."), await Je(1), !0;
      } catch (t) {
          return vt(t), !1;
      }
  }, Ht = async ({setCurrentStatus: e}) => {
      e(await async function() {
          let e, t, n;
          if (Ge.getState(), Ye.getState(), ee() ? (e = "div.bnt_group a.jb_btn", t = "div.edit_main div.edit_title input", 
          n = "div.edit_main div.edit_btn div.jb_btn") : (e = "div.operations a.addTopics", 
          t = "form#addGroupTopicForm input#c_title", n = "div.listBtn a.qdBtn"), await Dt(e) && await Wt(t, "如何学好该课程？") && await Vt(n)) return !0;
          return !1;
      }() ? "success" : "failed");
  };

  function qt() {
      const {currentPage: e$1, setCurrentPage: t} = Ye(), {topicDetail: o, setTopicDetail: i} = Ye(), {topicList: a, setTopicList: s} = Ye(), {currentStatus: p, setCurrentStatus: f} = Ye(), {isInActionFrame: h, setIsInActionFrame: m} = Ye(), [g, y] = e.useState(!0), {addLogItem: b} = Ue(), {actionFrameStatus: v, setActionFrameStatus: x, setActionFrameStatusStatus: S} = Ye(), w = v.status;
      e.useEffect((() => {
          const e = pt();
          !0 === e || "singleReply" === e || "newTopic" === e ? f("success") : "multiReply" === e && S("finished"), 
          ft() && m(!0), re() ? t("detail") : ne() && t("list");
      }), []), e.useEffect((() => {
          if ("list" === e$1 || "detail" === e$1) {
              let t;
              switch (e$1) {
                case "detail":
                  t = "讨论详情", (async () => {
                      const e = await Ze();
                      if (e) if (e.replies && e.replies[0] && e.replies[0].content && "NEED_OBSERVE" === e.replies[0].content) {
                          let e;
                          console.debug("NEED_OBSERVE"), e = et((async () => {
                              console.log("Replies changed"), e && e();
                              const t = await Ze();
                              t && (console.debug("topicDetail", t), i(t), p || f("idle"));
                          }));
                      } else i(e), p || f("idle");
                  })();
                  break;

                case "list":
                  t = "讨论列表";
                  const e = function() {
                      const e = "new" === (oe() && !ie() ? "new" : ie() && !oe() ? "legacy" : null);
                      try {
                          if (e) {
                              const e = St();
                              return console.debug("getNewItems", e), e;
                          }
                          {
                              const e = xt();
                              return console.debug("getLegacyItems", e), e;
                          }
                      } catch (t) {
                          vt(t);
                      }
                  }();
                  e && (s(e), w || p || S("idle"));
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
      const C = Ot({
          setCurrentStatus: f
      });
      !function({setCurrentStatus: e$1, currentStatus: t, setIsButtonDisabled: r, setIsInActionFrame: o, actionFrameStatusStatus: i}) {
          const {addLogItem: a} = Ue();
          e.useEffect((() => {
              switch (t) {
                case "running":
                default:
                  r(!0);
                  break;

                case "triggered":
                  r(!0), e$1("running"), re() ? _t({
                      setCurrentStatus: e$1
                  }) : ne() && Ht({
                      setCurrentStatus: e$1
                  });
                  break;

                case "success":
                  r(!1), re() ? mt("singleReply") : "finished" === i ? mt("multiReply") : ne() ? mt("newTopic") : mt(), 
                  a("All done!");
                  break;

                case "idle":
                  r(!1);
                  const t = ft();
                  (dt() || t) && e$1("triggered");
                  break;

                case "failed":
                  r(!1);
              }
          }), [ t ]);
      }({
          setCurrentStatus: f,
          currentStatus: p,
          setIsButtonDisabled: y,
          setIsInActionFrame: m,
          actionFrameStatusStatus: w
      }), e.useEffect((() => {
          a.length && b(`获取到发起的讨论：共 ${a.length} 条`);
      }), [ a ]), e.useEffect((() => {
          h && "success" === p && (console.debug("PostMessageSuccess"), $t(ht() || 0));
      }), [ h, p ]);
      return e.useEffect((() => {
          const e = w;
          e && console.debug("PanelActions useEffect actionFrameStatus", v);
          const t = async () => {
              if (e) {
                  const t = await async function(e) {
                      const {actionFrameStatus: t} = Ye.getState(), n = t.total, {topicList: r} = Ye.getState();
                      console.debug("RunningTopicListReply Status", e), "triggered" === e && (Nt(), Ft("开始：批量回复讨论"), 
                      await Je(.3), Pt("waitingToStart"));
                      const o = t.index || 0;
                      try {
                          if ("waitingToStart" === e) {
                              const e = r[o].url;
                              if (e) {
                                  const t = gt(e).toString(), n = yt(o, t).toString();
                                  Bt(n), Ft(`正在回复讨论：${r[o].title}`), await Je(.5), At(), Pt("running");
                              } else vt("未找到讨论链接"), Pt("failed");
                          }
                          if ("failed" === e && Pt("waitingToNext"), "success" === e) {
                              const e = r[o].title;
                              Ft(`已回复讨论：${e}`), await Je(1), Pt("waitingToNext");
                          }
                          const t = n || 0;
                          if ("waitingToNext" === e) return await Lt(o, t);
                      } catch (i) {
                          vt(i), Pt("failed");
                      }
                      return !1;
                  }(e);
                  t && S("finished");
              }
          };
          "triggered" === e || "waitingToStart" === e || "waitingToNext" === e || "failed" === e || "success" === e ? (t(), 
          f("running")) : "finished" === e ? f("success") : "idle" === e && f("idle");
      }), [ w ]), K.jsxs(K.Fragment, {
          children: [ g && K.jsx(material.CircularProgress, {
              size: "2em"
          }), "success" === p && "detail" === e$1 && K.jsxs(K.Fragment, {
              children: [ K.jsx(material.Icon, {
                  color: "success",
                  children: "done"
              }), K.jsx(material.Typography, {
                  variant: "body2",
                  children: "已完成"
              }) ]
          }), "failed" === p && K.jsxs(K.Fragment, {
              children: [ K.jsx(material.Icon, {
                  color: "error",
                  children: "error"
              }), K.jsx(material.Typography, {
                  variant: "body2",
                  children: "错误"
              }) ]
          }), "detail" === e$1 && !h && K.jsxs(material.Button, {
              autoFocus: "success" !== p,
              disabled: g,
              onClick: C,
              children: [ ("success" === p || "failed" === p) && "再次", "回复讨论" ]
          }), "list" === e$1 && K.jsxs(K.Fragment, {
              children: [ K.jsxs(material.Button, {
                  autoFocus: !0,
                  disabled: g,
                  onClick: async () => {
                      f("triggered");
                  },
                  children: [ "success" === p && "finished" !== w && K.jsx(material.Icon, {
                      color: "success",
                      children: "done"
                  }), "发起讨论" ]
              }), K.jsxs(material.Button, {
                  autoFocus: "success" !== p || "finished" !== w,
                  disabled: g,
                  onClick: async () => {
                      S("triggered");
                  },
                  children: [ "finished" === w && K.jsx(material.Icon, {
                      color: "success",
                      children: "done"
                  }), "finished" === w ? "再次批量回复" : "批量回复讨论" ]
              }) ]
          }) ]
      });
  }

  function Kt(e, t) {
      if (null == e) return {};
      var n, r, o = {}, i = Object.keys(e);
      for (r = 0; r < i.length; r++) n = i[r], t.indexOf(n) >= 0 || (o[n] = e[n]);
      return o;
  }

  function Xt() {
      return Xt = Object.assign ? Object.assign.bind() : function(e) {
          for (var t = 1; t < arguments.length; t++) {
              var n = arguments[t];
              for (var r in n) Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r]);
          }
          return e;
      }, Xt.apply(this, arguments);
  }

  var Ut, Gt = {
      exports: {}
  }, Yt = {}, Jt = Symbol.for("react.element"), Zt = Symbol.for("react.portal"), Qt = Symbol.for("react.fragment"), en = Symbol.for("react.strict_mode"), tn = Symbol.for("react.profiler"), nn = Symbol.for("react.provider"), rn = Symbol.for("react.context"), on = Symbol.for("react.server_context"), an = Symbol.for("react.forward_ref"), sn = Symbol.for("react.suspense"), ln = Symbol.for("react.suspense_list"), cn = Symbol.for("react.memo"), un = Symbol.for("react.lazy"), dn = Symbol.for("react.offscreen");

  function pn(e) {
      if ("object" == typeof e && null !== e) {
          var t = e.$$typeof;
          switch (t) {
            case Jt:
              switch (e = e.type) {
                case Qt:
                case tn:
                case en:
                case sn:
                case ln:
                  return e;

                default:
                  switch (e = e && e.$$typeof) {
                    case on:
                    case rn:
                    case an:
                    case un:
                    case cn:
                    case nn:
                      return e;

                    default:
                      return t;
                  }
              }

            case Zt:
              return t;
          }
      }
  }

  Ut = Symbol.for("react.module.reference"), Yt.ContextConsumer = rn, Yt.ContextProvider = nn, 
  Yt.Element = Jt, Yt.ForwardRef = an, Yt.Fragment = Qt, Yt.Lazy = un, Yt.Memo = cn, 
  Yt.Portal = Zt, Yt.Profiler = tn, Yt.StrictMode = en, Yt.Suspense = sn, Yt.SuspenseList = ln, 
  Yt.isAsyncMode = function() {
      return !1;
  }, Yt.isConcurrentMode = function() {
      return !1;
  }, Yt.isContextConsumer = function(e) {
      return pn(e) === rn;
  }, Yt.isContextProvider = function(e) {
      return pn(e) === nn;
  }, Yt.isElement = function(e) {
      return "object" == typeof e && null !== e && e.$$typeof === Jt;
  }, Yt.isForwardRef = function(e) {
      return pn(e) === an;
  }, Yt.isFragment = function(e) {
      return pn(e) === Qt;
  }, Yt.isLazy = function(e) {
      return pn(e) === un;
  }, Yt.isMemo = function(e) {
      return pn(e) === cn;
  }, Yt.isPortal = function(e) {
      return pn(e) === Zt;
  }, Yt.isProfiler = function(e) {
      return pn(e) === tn;
  }, Yt.isStrictMode = function(e) {
      return pn(e) === en;
  }, Yt.isSuspense = function(e) {
      return pn(e) === sn;
  }, Yt.isSuspenseList = function(e) {
      return pn(e) === ln;
  }, Yt.isValidElementType = function(e) {
      return "string" == typeof e || "function" == typeof e || e === Qt || e === tn || e === en || e === sn || e === ln || e === dn || "object" == typeof e && null !== e && (e.$$typeof === un || e.$$typeof === cn || e.$$typeof === nn || e.$$typeof === rn || e.$$typeof === an || e.$$typeof === Ut || void 0 !== e.getModuleId);
  }, Yt.typeOf = pn, Gt.exports = Yt;

  var fn = Gt.exports;

  function hn(e) {
      var t, n, r = "";
      if ("string" == typeof e || "number" == typeof e) r += e; else if ("object" == typeof e) if (Array.isArray(e)) {
          var o = e.length;
          for (t = 0; t < o; t++) e[t] && (n = hn(e[t])) && (r && (r += " "), r += n);
      } else for (n in e) e[n] && (r && (r += " "), r += n);
      return r;
  }

  function mn() {
      for (var e, t, n = 0, r = "", o = arguments.length; n < o; n++) (e = arguments[n]) && (t = hn(e)) && (r && (r += " "), 
      r += t);
      return r;
  }

  function gn(e) {
      if ("object" != typeof e || null === e) return !1;
      const t = Object.getPrototypeOf(e);
      return !(null !== t && t !== Object.prototype && null !== Object.getPrototypeOf(t) || Symbol.toStringTag in e || Symbol.iterator in e);
  }

  function yn(e) {
      if (!gn(e)) return e;
      const t = {};
      return Object.keys(e).forEach((n => {
          t[n] = yn(e[n]);
      })), t;
  }

  function bn(e, t, n = {
      clone: !0
  }) {
      const r = n.clone ? Xt({}, e) : e;
      return gn(e) && gn(t) && Object.keys(t).forEach((o => {
          "__proto__" !== o && (gn(t[o]) && o in e && gn(e[o]) ? r[o] = bn(e[o], t[o], n) : n.clone ? r[o] = gn(t[o]) ? yn(t[o]) : t[o] : r[o] = t[o]);
      })), r;
  }

  const vn = Object.freeze(Object.defineProperty({
      __proto__: null,
      default: bn,
      isPlainObject: gn
  }, Symbol.toStringTag, {
      value: "Module"
  }));

  function xn(e) {
      let t = "https://mui.com/production-error/?code=" + e;
      for (let n = 1; n < arguments.length; n += 1) t += "&args[]=" + encodeURIComponent(arguments[n]);
      return "Minified MUI error #" + e + "; visit " + t + " for the full message.";
  }

  const Sn = Object.freeze(Object.defineProperty({
      __proto__: null,
      default: xn
  }, Symbol.toStringTag, {
      value: "Module"
  })), wn = /^\s*function(?:\s|\s*\/\*.*\*\/\s*)+([^(\s/]*)\s*/;

  function Cn(e) {
      const t = `${e}`.match(wn);
      return t && t[1] || "";
  }

  function kn(e, t = "") {
      return e.displayName || e.name || Cn(e) || t;
  }

  function jn(e, t, n) {
      const r = kn(t);
      return e.displayName || ("" !== r ? `${n}(${r})` : n);
  }

  const Rn = Object.freeze(Object.defineProperty({
      __proto__: null,
      default: function(e) {
          if (null != e) {
              if ("string" == typeof e) return e;
              if ("function" == typeof e) return kn(e, "Component");
              if ("object" == typeof e) switch (e.$$typeof) {
                case fn.ForwardRef:
                  return jn(e, e.render, "ForwardRef");

                case fn.Memo:
                  return jn(e, e.type, "memo");

                default:
                  return;
              }
          }
      },
      getFunctionName: Cn
  }, Symbol.toStringTag, {
      value: "Module"
  }));

  function En(e) {
      if ("string" != typeof e) throw new Error(xn(7));
      return e.charAt(0).toUpperCase() + e.slice(1);
  }

  const Tn = Object.freeze(Object.defineProperty({
      __proto__: null,
      default: En
  }, Symbol.toStringTag, {
      value: "Module"
  }));

  function On(e, t = 166) {
      let n;
      function r(...r) {
          clearTimeout(n), n = setTimeout((() => {
              e.apply(this, r);
          }), t);
      }
      return r.clear = () => {
          clearTimeout(n);
      }, r;
  }

  function _n(e) {
      return e && e.ownerDocument || document;
  }

  function $n(e) {
      return _n(e).defaultView || window;
  }

  const An = "undefined" != typeof window ? e__namespace.useLayoutEffect : e__namespace.useEffect;

  function Pn(t) {
      const n = e__namespace.useRef(t);
      return An((() => {
          n.current = t;
      })), e__namespace.useRef(((...e) => (0, n.current)(...e))).current;
  }

  function Mn(...t) {
      return e__namespace.useMemo((() => t.every((e => null == e)) ? null : e => {
          t.forEach((t => {
              !function(e, t) {
                  "function" == typeof e ? e(t) : e && (e.current = t);
              }(t, e);
          }));
      }), t);
  }

  const In = {};

  const Bn = [];

  class Fn {
      constructor() {
          this.currentId = null, this.clear = () => {
              null !== this.currentId && (clearTimeout(this.currentId), this.currentId = null);
          }, this.disposeEffect = () => this.clear;
      }
      static create() {
          return new Fn;
      }
      start(e, t) {
          this.clear(), this.currentId = setTimeout((() => {
              this.currentId = null, t();
          }), e);
      }
  }

  function Nn() {
      const t = function(t, n) {
          const r = e__namespace.useRef(In);
          return r.current === In && (r.current = t(n)), r;
      }(Fn.create).current;
      var n;
      return n = t.disposeEffect, e__namespace.useEffect(n, Bn), t;
  }

  let Ln = !0, zn = !1;

  const Dn = new Fn, Wn = {
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

  function Vn(e) {
      e.metaKey || e.altKey || e.ctrlKey || (Ln = !0);
  }

  function Hn() {
      Ln = !1;
  }

  function qn() {
      "hidden" === this.visibilityState && zn && (Ln = !0);
  }

  function Kn(e) {
      const {target: t} = e;
      try {
          return t.matches(":focus-visible");
      } catch (n) {}
      return Ln || function(e) {
          const {type: t, tagName: n} = e;
          return !("INPUT" !== n || !Wn[t] || e.readOnly) || "TEXTAREA" === n && !e.readOnly || !!e.isContentEditable;
      }(t);
  }

  function Xn() {
      const t = e__namespace.useCallback((e => {
          var t;
          null != e && ((t = e.ownerDocument).addEventListener("keydown", Vn, !0), t.addEventListener("mousedown", Hn, !0), 
          t.addEventListener("pointerdown", Hn, !0), t.addEventListener("touchstart", Hn, !0), 
          t.addEventListener("visibilitychange", qn, !0));
      }), []), n = e__namespace.useRef(!1);
      return {
          isFocusVisibleRef: n,
          onFocus: function(e) {
              return !!Kn(e) && (n.current = !0, !0);
          },
          onBlur: function() {
              return !!n.current && (zn = !0, Dn.start(100, (() => {
                  zn = !1;
              })), n.current = !1, !0);
          },
          ref: t
      };
  }

  let Un;

  function Gn() {
      if (Un) return Un;
      const e = document.createElement("div"), t = document.createElement("div");
      return t.style.width = "10px", t.style.height = "1px", e.appendChild(t), e.dir = "rtl", 
      e.style.fontSize = "14px", e.style.width = "4px", e.style.height = "1px", e.style.position = "absolute", 
      e.style.top = "-1000px", e.style.overflow = "scroll", document.body.appendChild(e), 
      Un = "reverse", e.scrollLeft > 0 ? Un = "default" : (e.scrollLeft = 1, 0 === e.scrollLeft && (Un = "negative")), 
      document.body.removeChild(e), Un;
  }

  function Yn(e, t) {
      const n = e.scrollLeft;
      if ("rtl" !== t) return n;
      switch (Gn()) {
        case "negative":
          return e.scrollWidth - e.clientWidth + n;

        case "reverse":
          return e.scrollWidth - e.clientWidth - n;

        default:
          return n;
      }
  }

  function Jn(e, t) {
      const n = Xt({}, t);
      return Object.keys(e).forEach((r => {
          if (r.toString().match(/^(components|slots)$/)) n[r] = Xt({}, e[r], n[r]); else if (r.toString().match(/^(componentsProps|slotProps)$/)) {
              const o = e[r] || {}, i = t[r];
              n[r] = {}, i && Object.keys(i) ? o && Object.keys(o) ? (n[r] = Xt({}, i), Object.keys(o).forEach((e => {
                  n[r][e] = Jn(o[e], i[e]);
              }))) : n[r] = i : n[r] = o;
          } else void 0 === n[r] && (n[r] = e[r]);
      })), n;
  }

  function Zn(e, t, n = void 0) {
      const r = {};
      return Object.keys(e).forEach((o => {
          r[o] = e[o].reduce(((e, r) => {
              if (r) {
                  const o = t(r);
                  "" !== o && e.push(o), n && n[r] && e.push(n[r]);
              }
              return e;
          }), []).join(" ");
      })), r;
  }

  const Qn = e => e, er = (() => {
      let e = Qn;
      return {
          configure(t) {
              e = t;
          },
          generate: t => e(t),
          reset() {
              e = Qn;
          }
      };
  })(), tr = {
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

  function nr(e, t, n = "Mui") {
      const r = tr[t];
      return r ? `${n}-${r}` : `${er.generate(e)}-${t}`;
  }

  function rr(e, t, n = "Mui") {
      const r = {};
      return t.forEach((t => {
          r[t] = nr(e, t, n);
      })), r;
  }

  const or = Object.freeze(Object.defineProperty({
      __proto__: null,
      default: function(e, t = Number.MIN_SAFE_INTEGER, n = Number.MAX_SAFE_INTEGER) {
          return Math.max(t, Math.min(e, n));
      }
  }, Symbol.toStringTag, {
      value: "Module"
  }));

  function ir(e) {
      if (void 0 === e) return {};
      const t = {};
      return Object.keys(e).filter((t => !(t.match(/^on[A-Z]/) && "function" == typeof e[t]))).forEach((n => {
          t[n] = e[n];
      })), t;
  }

  function ar(e) {
      const {getSlotProps: t, additionalProps: n, externalSlotProps: r, externalForwardedProps: o, className: i} = e;
      if (!t) {
          const e = mn(null == n ? void 0 : n.className, i, null == o ? void 0 : o.className, null == r ? void 0 : r.className), t = Xt({}, null == n ? void 0 : n.style, null == o ? void 0 : o.style, null == r ? void 0 : r.style), a = Xt({}, n, o, r);
          return e.length > 0 && (a.className = e), Object.keys(t).length > 0 && (a.style = t), 
          {
              props: a,
              internalRef: void 0
          };
      }
      const a = function(e, t = []) {
          if (void 0 === e) return {};
          const n = {};
          return Object.keys(e).filter((n => n.match(/^on[A-Z]/) && "function" == typeof e[n] && !t.includes(n))).forEach((t => {
              n[t] = e[t];
          })), n;
      }(Xt({}, o, r)), s = ir(r), l = ir(o), c = t(a), u = mn(null == c ? void 0 : c.className, null == n ? void 0 : n.className, i, null == o ? void 0 : o.className, null == r ? void 0 : r.className), d = Xt({}, null == c ? void 0 : c.style, null == n ? void 0 : n.style, null == o ? void 0 : o.style, null == r ? void 0 : r.style), p = Xt({}, c, n, l, s);
      return u.length > 0 && (p.className = u), Object.keys(d).length > 0 && (p.style = d), 
      {
          props: p,
          internalRef: c.ref
      };
  }

  const sr = [ "elementType", "externalSlotProps", "ownerState", "skipResolvingSlotProps" ];

  function lr(e) {
      var t;
      const {elementType: n, externalSlotProps: r, ownerState: o, skipResolvingSlotProps: i = !1} = e, a = Kt(e, sr), s = i ? {} : function(e, t, n) {
          return "function" == typeof e ? e(t, n) : e;
      }(r, o), {props: l, internalRef: c} = ar(Xt({}, a, {
          externalSlotProps: s
      })), u = function(e, t, n) {
          return void 0 === e || "string" == typeof e ? t : Xt({}, t, {
              ownerState: Xt({}, t.ownerState, n)
          });
      }(n, Xt({}, l, {
          ref: Mn(c, null == s ? void 0 : s.ref, null == (t = e.additionalProps) ? void 0 : t.ref)
      }), o);
      return u;
  }

  const cr = e__namespace.createContext(), ur = () => {
      const t = e__namespace.useContext(cr);
      return null != t && t;
  };

  var dr, pr = {}, fr = {
      exports: {}
  };

  (dr = fr).exports = function(e) {
      return e && e.__esModule ? e : {
          default: e
      };
  }, dr.exports.__esModule = !0, dr.exports.default = dr.exports;

  var hr, mr = fr.exports, gr = {
      exports: {}
  };

  var yr, br = {
      exports: {}
  };

  var vr = function() {
      function e(e) {
          var t = this;
          this._insertTag = function(e) {
              var n;
              n = 0 === t.tags.length ? t.insertionPoint ? t.insertionPoint.nextSibling : t.prepend ? t.container.firstChild : t.before : t.tags[t.tags.length - 1].nextSibling, 
              t.container.insertBefore(e, n), t.tags.push(e);
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
              var n = function(e) {
                  if (e.sheet) return e.sheet;
                  for (var t = 0; t < document.styleSheets.length; t++) if (document.styleSheets[t].ownerNode === e) return document.styleSheets[t];
              }(t);
              try {
                  n.insertRule(e, n.cssRules.length);
              } catch (r) {}
          } else t.appendChild(document.createTextNode(e));
          this.ctr++;
      }, t.flush = function() {
          this.tags.forEach((function(e) {
              return e.parentNode && e.parentNode.removeChild(e);
          })), this.tags = [], this.ctr = 0;
      }, e;
  }(), xr = "-ms-", Sr = "-moz-", wr = "-webkit-", Cr = "comm", kr = "rule", jr = "decl", Rr = "@keyframes", Er = Math.abs, Tr = String.fromCharCode, Or = Object.assign;

  function _r(e) {
      return e.trim();
  }

  function $r(e, t, n) {
      return e.replace(t, n);
  }

  function Ar(e, t) {
      return e.indexOf(t);
  }

  function Pr(e, t) {
      return 0 | e.charCodeAt(t);
  }

  function Mr(e, t, n) {
      return e.slice(t, n);
  }

  function Ir(e) {
      return e.length;
  }

  function Br(e) {
      return e.length;
  }

  function Fr(e, t) {
      return t.push(e), e;
  }

  var Nr = 1, Lr = 1, zr = 0, Dr = 0, Wr = 0, Vr = "";

  function Hr(e, t, n, r, o, i, a) {
      return {
          value: e,
          root: t,
          parent: n,
          type: r,
          props: o,
          children: i,
          line: Nr,
          column: Lr,
          length: a,
          return: ""
      };
  }

  function qr(e, t) {
      return Or(Hr("", null, null, "", null, null, 0), e, {
          length: -e.length
      }, t);
  }

  function Kr() {
      return Wr = Dr < zr ? Pr(Vr, Dr++) : 0, Lr++, 10 === Wr && (Lr = 1, Nr++), Wr;
  }

  function Xr() {
      return Pr(Vr, Dr);
  }

  function Ur() {
      return Dr;
  }

  function Gr(e, t) {
      return Mr(Vr, e, t);
  }

  function Yr(e) {
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

  function Jr(e) {
      return Nr = Lr = 1, zr = Ir(Vr = e), Dr = 0, [];
  }

  function Zr(e) {
      return Vr = "", e;
  }

  function Qr(e) {
      return _r(Gr(Dr - 1, no(91 === e ? e + 2 : 40 === e ? e + 1 : e)));
  }

  function eo(e) {
      for (;(Wr = Xr()) && Wr < 33; ) Kr();
      return Yr(e) > 2 || Yr(Wr) > 3 ? "" : " ";
  }

  function to(e, t) {
      for (;--t && Kr() && !(Wr < 48 || Wr > 102 || Wr > 57 && Wr < 65 || Wr > 70 && Wr < 97); ) ;
      return Gr(e, Ur() + (t < 6 && 32 == Xr() && 32 == Kr()));
  }

  function no(e) {
      for (;Kr(); ) switch (Wr) {
        case e:
          return Dr;

        case 34:
        case 39:
          34 !== e && 39 !== e && no(Wr);
          break;

        case 40:
          41 === e && no(e);
          break;

        case 92:
          Kr();
      }
      return Dr;
  }

  function ro(e, t) {
      for (;Kr() && e + Wr !== 57 && (e + Wr !== 84 || 47 !== Xr()); ) ;
      return "/*" + Gr(t, Dr - 1) + "*" + Tr(47 === e ? e : Kr());
  }

  function oo(e) {
      for (;!Yr(Xr()); ) Kr();
      return Gr(e, Dr);
  }

  function io(e) {
      return Zr(ao("", null, null, null, [ "" ], e = Jr(e), 0, [ 0 ], e));
  }

  function ao(e, t, n, r, o, i, a, s, l) {
      for (var c = 0, u = 0, d = a, p = 0, f = 0, h = 0, m = 1, g = 1, y = 1, b = 0, v = "", x = o, S = i, w = r, C = v; g; ) switch (h = b, 
      b = Kr()) {
        case 40:
          if (108 != h && 58 == Pr(C, d - 1)) {
              -1 != Ar(C += $r(Qr(b), "&", "&\f"), "&\f") && (y = -1);
              break;
          }

        case 34:
        case 39:
        case 91:
          C += Qr(b);
          break;

        case 9:
        case 10:
        case 13:
        case 32:
          C += eo(h);
          break;

        case 92:
          C += to(Ur() - 1, 7);
          continue;

        case 47:
          switch (Xr()) {
            case 42:
            case 47:
              Fr(lo(ro(Kr(), Ur()), t, n), l);
              break;

            default:
              C += "/";
          }
          break;

        case 123 * m:
          s[c++] = Ir(C) * y;

        case 125 * m:
        case 59:
        case 0:
          switch (b) {
            case 0:
            case 125:
              g = 0;

            case 59 + u:
              -1 == y && (C = $r(C, /\f/g, "")), f > 0 && Ir(C) - d && Fr(f > 32 ? co(C + ";", r, n, d - 1) : co($r(C, " ", "") + ";", r, n, d - 2), l);
              break;

            case 59:
              C += ";";

            default:
              if (Fr(w = so(C, t, n, c, u, o, s, v, x = [], S = [], d), i), 123 === b) if (0 === u) ao(C, t, w, w, x, i, d, s, S); else switch (99 === p && 110 === Pr(C, 3) ? 100 : p) {
                case 100:
                case 108:
                case 109:
                case 115:
                  ao(e, w, w, r && Fr(so(e, w, w, 0, 0, o, s, v, o, x = [], d), S), o, S, d, s, r ? x : S);
                  break;

                default:
                  ao(C, w, w, w, [ "" ], S, 0, s, S);
              }
          }
          c = u = f = 0, m = y = 1, v = C = "", d = a;
          break;

        case 58:
          d = 1 + Ir(C), f = h;

        default:
          if (m < 1) if (123 == b) --m; else if (125 == b && 0 == m++ && 125 == (Wr = Dr > 0 ? Pr(Vr, --Dr) : 0, 
          Lr--, 10 === Wr && (Lr = 1, Nr--), Wr)) continue;
          switch (C += Tr(b), b * m) {
            case 38:
              y = u > 0 ? 1 : (C += "\f", -1);
              break;

            case 44:
              s[c++] = (Ir(C) - 1) * y, y = 1;
              break;

            case 64:
              45 === Xr() && (C += Qr(Kr())), p = Xr(), u = d = Ir(v = C += oo(Ur())), b++;
              break;

            case 45:
              45 === h && 2 == Ir(C) && (m = 0);
          }
      }
      return i;
  }

  function so(e, t, n, r, o, i, a, s, l, c, u) {
      for (var d = o - 1, p = 0 === o ? i : [ "" ], f = Br(p), h = 0, m = 0, g = 0; h < r; ++h) for (var y = 0, b = Mr(e, d + 1, d = Er(m = a[h])), v = e; y < f; ++y) (v = _r(m > 0 ? p[y] + " " + b : $r(b, /&\f/g, p[y]))) && (l[g++] = v);
      return Hr(e, t, n, 0 === o ? kr : s, l, c, u);
  }

  function lo(e, t, n) {
      return Hr(e, t, n, Cr, Tr(Wr), Mr(e, 2, -2), 0);
  }

  function co(e, t, n, r) {
      return Hr(e, t, n, jr, Mr(e, 0, r), Mr(e, r + 1, -1), r);
  }

  function uo(e, t) {
      for (var n = "", r = Br(e), o = 0; o < r; o++) n += t(e[o], o, e, t) || "";
      return n;
  }

  function po(e, t, n, r) {
      switch (e.type) {
        case "@layer":
          if (e.children.length) break;

        case "@import":
        case jr:
          return e.return = e.return || e.value;

        case Cr:
          return "";

        case Rr:
          return e.return = e.value + "{" + uo(e.children, r) + "}";

        case kr:
          e.value = e.props.join(",");
      }
      return Ir(n = uo(e.children, r)) ? e.return = e.value + "{" + n + "}" : "";
  }

  var fo = function(e, t, n) {
      for (var r = 0, o = 0; r = o, o = Xr(), 38 === r && 12 === o && (t[n] = 1), !Yr(o); ) Kr();
      return Gr(e, Dr);
  }, ho = function(e, t) {
      return Zr(function(e, t) {
          var n = -1, r = 44;
          do {
              switch (Yr(r)) {
                case 0:
                  38 === r && 12 === Xr() && (t[n] = 1), e[n] += fo(Dr - 1, t, n);
                  break;

                case 2:
                  e[n] += Qr(r);
                  break;

                case 4:
                  if (44 === r) {
                      e[++n] = 58 === Xr() ? "&\f" : "", t[n] = e[n].length;
                      break;
                  }

                default:
                  e[n] += Tr(r);
              }
          } while (r = Kr());
          return e;
      }(Jr(e), t));
  }, mo = new WeakMap, go = function(e) {
      if ("rule" === e.type && e.parent && !(e.length < 1)) {
          for (var t = e.value, n = e.parent, r = e.column === n.column && e.line === n.line; "rule" !== n.type; ) if (!(n = n.parent)) return;
          if ((1 !== e.props.length || 58 === t.charCodeAt(0) || mo.get(n)) && !r) {
              mo.set(e, !0);
              for (var o = [], i = ho(t, o), a = n.props, s = 0, l = 0; s < i.length; s++) for (var c = 0; c < a.length; c++, 
              l++) e.props[l] = o[s] ? i[s].replace(/&\f/g, a[c]) : a[c] + " " + i[s];
          }
      }
  }, yo = function(e) {
      if ("decl" === e.type) {
          var t = e.value;
          108 === t.charCodeAt(0) && 98 === t.charCodeAt(2) && (e.return = "", e.value = "");
      }
  };

  function bo(e, t) {
      switch (function(e, t) {
          return 45 ^ Pr(e, 0) ? (((t << 2 ^ Pr(e, 0)) << 2 ^ Pr(e, 1)) << 2 ^ Pr(e, 2)) << 2 ^ Pr(e, 3) : 0;
      }(e, t)) {
        case 5103:
          return wr + "print-" + e + e;

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
          return wr + e + e;

        case 5349:
        case 4246:
        case 4810:
        case 6968:
        case 2756:
          return wr + e + Sr + e + xr + e + e;

        case 6828:
        case 4268:
          return wr + e + xr + e + e;

        case 6165:
          return wr + e + xr + "flex-" + e + e;

        case 5187:
          return wr + e + $r(e, /(\w+).+(:[^]+)/, wr + "box-$1$2" + xr + "flex-$1$2") + e;

        case 5443:
          return wr + e + xr + "flex-item-" + $r(e, /flex-|-self/, "") + e;

        case 4675:
          return wr + e + xr + "flex-line-pack" + $r(e, /align-content|flex-|-self/, "") + e;

        case 5548:
          return wr + e + xr + $r(e, "shrink", "negative") + e;

        case 5292:
          return wr + e + xr + $r(e, "basis", "preferred-size") + e;

        case 6060:
          return wr + "box-" + $r(e, "-grow", "") + wr + e + xr + $r(e, "grow", "positive") + e;

        case 4554:
          return wr + $r(e, /([^-])(transform)/g, "$1" + wr + "$2") + e;

        case 6187:
          return $r($r($r(e, /(zoom-|grab)/, wr + "$1"), /(image-set)/, wr + "$1"), e, "") + e;

        case 5495:
        case 3959:
          return $r(e, /(image-set\([^]*)/, wr + "$1$`$1");

        case 4968:
          return $r($r(e, /(.+:)(flex-)?(.*)/, wr + "box-pack:$3" + xr + "flex-pack:$3"), /s.+-b[^;]+/, "justify") + wr + e + e;

        case 4095:
        case 3583:
        case 4068:
        case 2532:
          return $r(e, /(.+)-inline(.+)/, wr + "$1$2") + e;

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
          if (Ir(e) - 1 - t > 6) switch (Pr(e, t + 1)) {
            case 109:
              if (45 !== Pr(e, t + 4)) break;

            case 102:
              return $r(e, /(.+:)(.+)-([^]+)/, "$1" + wr + "$2-$3$1" + Sr + (108 == Pr(e, t + 3) ? "$3" : "$2-$3")) + e;

            case 115:
              return ~Ar(e, "stretch") ? bo($r(e, "stretch", "fill-available"), t) + e : e;
          }
          break;

        case 4949:
          if (115 !== Pr(e, t + 1)) break;

        case 6444:
          switch (Pr(e, Ir(e) - 3 - (~Ar(e, "!important") && 10))) {
            case 107:
              return $r(e, ":", ":" + wr) + e;

            case 101:
              return $r(e, /(.+:)([^;!]+)(;|!.+)?/, "$1" + wr + (45 === Pr(e, 14) ? "inline-" : "") + "box$3$1" + wr + "$2$3$1" + xr + "$2box$3") + e;
          }
          break;

        case 5936:
          switch (Pr(e, t + 11)) {
            case 114:
              return wr + e + xr + $r(e, /[svh]\w+-[tblr]{2}/, "tb") + e;

            case 108:
              return wr + e + xr + $r(e, /[svh]\w+-[tblr]{2}/, "tb-rl") + e;

            case 45:
              return wr + e + xr + $r(e, /[svh]\w+-[tblr]{2}/, "lr") + e;
          }
          return wr + e + xr + e + e;
      }
      return e;
  }

  var vo = [ function(e, t, n, r) {
      if (e.length > -1 && !e.return) switch (e.type) {
        case jr:
          e.return = bo(e.value, e.length);
          break;

        case Rr:
          return uo([ qr(e, {
              value: $r(e.value, "@", "@" + wr)
          }) ], r);

        case kr:
          if (e.length) return function(e, t) {
              return e.map(t).join("");
          }(e.props, (function(t) {
              switch (function(e, t) {
                  return (e = t.exec(e)) ? e[0] : e;
              }(t, /(::plac\w+|:read-\w+)/)) {
                case ":read-only":
                case ":read-write":
                  return uo([ qr(e, {
                      props: [ $r(t, /:(read-\w+)/, ":-moz-$1") ]
                  }) ], r);

                case "::placeholder":
                  return uo([ qr(e, {
                      props: [ $r(t, /:(plac\w+)/, ":" + wr + "input-$1") ]
                  }), qr(e, {
                      props: [ $r(t, /:(plac\w+)/, ":-moz-$1") ]
                  }), qr(e, {
                      props: [ $r(t, /:(plac\w+)/, xr + "input-$1") ]
                  }) ], r);
              }
              return "";
          }));
      }
  } ];

  let xo;

  function So(e, t) {
      return E(e, t);
  }

  "object" == typeof document && (xo = function(e) {
      var t = e.key;
      if ("css" === t) {
          var n = document.querySelectorAll("style[data-emotion]:not([data-s])");
          Array.prototype.forEach.call(n, (function(e) {
              -1 !== e.getAttribute("data-emotion").indexOf(" ") && (document.head.appendChild(e), 
              e.setAttribute("data-s", ""));
          }));
      }
      var r, o, i = e.stylisPlugins || vo, a = {}, s = [];
      r = e.container || document.head, Array.prototype.forEach.call(document.querySelectorAll('style[data-emotion^="' + t + ' "]'), (function(e) {
          for (var t = e.getAttribute("data-emotion").split(" "), n = 1; n < t.length; n++) a[t[n]] = !0;
          s.push(e);
      }));
      var l, c, u, d, p = [ po, (d = function(e) {
          l.insert(e);
      }, function(e) {
          e.root || (e = e.return) && d(e);
      }) ], f = (c = [ go, yo ].concat(i, p), u = Br(c), function(e, t, n, r) {
          for (var o = "", i = 0; i < u; i++) o += c[i](e, t, n, r) || "";
          return o;
      });
      o = function(e, t, n, r) {
          l = n, uo(io(e ? e + "{" + t.styles + "}" : t.styles), f), r && (h.inserted[t.name] = !0);
      };
      var h = {
          key: t,
          sheet: new vr({
              key: t,
              container: r,
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

  const wo = B(Object.freeze(Object.defineProperty({
      __proto__: null,
      GlobalStyles: function(e) {
          const {styles: t, defaultTheme: n = {}} = e, r = "function" == typeof t ? e => {
              return t(null == (r = e) || 0 === Object.keys(r).length ? n : e);
              var r;
          } : t;
          return K.jsx(react.Global, {
              styles: r
          });
      },
      StyledEngineProvider: function(e) {
          const {injectFirst: t, children: n} = e;
          return t && xo ? K.jsx(react.CacheProvider, {
              value: xo,
              children: n
          }) : n;
      },
      ThemeContext: react.ThemeContext,
      css: react.css,
      default: So,
      internal_processStyles: (e, t) => {
          Array.isArray(e.__emotion_styles) && (e.__emotion_styles = t(e.__emotion_styles));
      },
      keyframes: react.keyframes
  }, Symbol.toStringTag, {
      value: "Module"
  }))), Co = B(vn), ko = B(Tn), jo = B(Rn), Ro = [ "values", "unit", "step" ], Eo = e => {
      const t = Object.keys(e).map((t => ({
          key: t,
          val: e[t]
      }))) || [];
      return t.sort(((e, t) => e.val - t.val)), t.reduce(((e, t) => Xt({}, e, {
          [t.key]: t.val
      })), {});
  };

  function To(e) {
      const {values: t = {
          xs: 0,
          sm: 600,
          md: 900,
          lg: 1200,
          xl: 1536
      }, unit: n = "px", step: r = 5} = e, o = Kt(e, Ro), i = Eo(t), a = Object.keys(i);
      function s(e) {
          return `@media (min-width:${"number" == typeof t[e] ? t[e] : e}${n})`;
      }
      function l(e) {
          return `@media (max-width:${("number" == typeof t[e] ? t[e] : e) - r / 100}${n})`;
      }
      function c(e, o) {
          const i = a.indexOf(o);
          return `@media (min-width:${"number" == typeof t[e] ? t[e] : e}${n}) and (max-width:${(-1 !== i && "number" == typeof t[a[i]] ? t[a[i]] : o) - r / 100}${n})`;
      }
      return Xt({
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
          unit: n
      }, o);
  }

  const Oo = {
      borderRadius: 4
  };

  function _o(e, t) {
      return t ? bn(e, t, {
          clone: !1
      }) : e;
  }

  const $o = {
      xs: 0,
      sm: 600,
      md: 900,
      lg: 1200,
      xl: 1536
  }, Ao = {
      keys: [ "xs", "sm", "md", "lg", "xl" ],
      up: e => `@media (min-width:${$o[e]}px)`
  };

  function Po(e, t, n) {
      const r = e.theme || {};
      if (Array.isArray(t)) {
          const e = r.breakpoints || Ao;
          return t.reduce(((r, o, i) => (r[e.up(e.keys[i])] = n(t[i]), r)), {});
      }
      if ("object" == typeof t) {
          const e = r.breakpoints || Ao;
          return Object.keys(t).reduce(((r, o) => {
              if (-1 !== Object.keys(e.values || $o).indexOf(o)) {
                  r[e.up(o)] = n(t[o], o);
              } else {
                  const e = o;
                  r[e] = t[e];
              }
              return r;
          }), {});
      }
      return n(t);
  }

  function Mo(e, t, n = !0) {
      if (!t || "string" != typeof t) return null;
      if (e && e.vars && n) {
          const n = `vars.${t}`.split(".").reduce(((e, t) => e && e[t] ? e[t] : null), e);
          if (null != n) return n;
      }
      return t.split(".").reduce(((e, t) => e && null != e[t] ? e[t] : null), e);
  }

  function Io(e, t, n, r = n) {
      let o;
      return o = "function" == typeof e ? e(n) : Array.isArray(e) ? e[n] || r : Mo(e, n) || r, 
      t && (o = t(o, r, e)), o;
  }

  function Bo(e) {
      const {prop: t, cssProperty: n = e.prop, themeKey: r, transform: o} = e, i = e => {
          if (null == e[t]) return null;
          const i = e[t], a = Mo(e.theme, r) || {};
          return Po(e, i, (e => {
              let r = Io(a, o, e);
              return e === r && "string" == typeof e && (r = Io(a, o, `${t}${"default" === e ? "" : En(e)}`, e)), 
              !1 === n ? r : {
                  [n]: r
              };
          }));
      };
      return i.propTypes = {}, i.filterProps = [ t ], i;
  }

  const Fo = {
      m: "margin",
      p: "padding"
  }, No = {
      t: "Top",
      r: "Right",
      b: "Bottom",
      l: "Left",
      x: [ "Left", "Right" ],
      y: [ "Top", "Bottom" ]
  }, Lo = {
      marginX: "mx",
      marginY: "my",
      paddingX: "px",
      paddingY: "py"
  }, zo = function(e) {
      const t = {};
      return n => (void 0 === t[n] && (t[n] = e(n)), t[n]);
  }((e => {
      if (e.length > 2) {
          if (!Lo[e]) return [ e ];
          e = Lo[e];
      }
      const [t, n] = e.split(""), r = Fo[t], o = No[n] || "";
      return Array.isArray(o) ? o.map((e => r + e)) : [ r + o ];
  })), Do = [ "m", "mt", "mr", "mb", "ml", "mx", "my", "margin", "marginTop", "marginRight", "marginBottom", "marginLeft", "marginX", "marginY", "marginInline", "marginInlineStart", "marginInlineEnd", "marginBlock", "marginBlockStart", "marginBlockEnd" ], Wo = [ "p", "pt", "pr", "pb", "pl", "px", "py", "padding", "paddingTop", "paddingRight", "paddingBottom", "paddingLeft", "paddingX", "paddingY", "paddingInline", "paddingInlineStart", "paddingInlineEnd", "paddingBlock", "paddingBlockStart", "paddingBlockEnd" ];

  function Vo(e, t, n, r) {
      var o;
      const i = null != (o = Mo(e, t, !1)) ? o : n;
      return "number" == typeof i ? e => "string" == typeof e ? e : i * e : Array.isArray(i) ? e => "string" == typeof e ? e : i[e] : "function" == typeof i ? i : () => {};
  }

  function Ho(e) {
      return Vo(e, "spacing", 8);
  }

  function qo(e, t) {
      if ("string" == typeof t || null == t) return t;
      const n = e(Math.abs(t));
      return t >= 0 ? n : "number" == typeof n ? -n : `-${n}`;
  }

  function Ko(e, t, n, r) {
      if (-1 === t.indexOf(n)) return null;
      const o = function(e, t) {
          return n => e.reduce(((e, r) => (e[r] = qo(t, n), e)), {});
      }(zo(n), r);
      return Po(e, e[n], o);
  }

  function Xo(e, t) {
      const n = Ho(e.theme);
      return Object.keys(e).map((r => Ko(e, t, r, n))).reduce(_o, {});
  }

  function Uo(e) {
      return Xo(e, Do);
  }

  function Go(e) {
      return Xo(e, Wo);
  }

  function Yo(...e) {
      const t = e.reduce(((e, t) => (t.filterProps.forEach((n => {
          e[n] = t;
      })), e)), {}), n = e => Object.keys(e).reduce(((n, r) => t[r] ? _o(n, t[r](e)) : n), {});
      return n.propTypes = {}, n.filterProps = e.reduce(((e, t) => e.concat(t.filterProps)), []), 
      n;
  }

  function Jo(e) {
      return "number" != typeof e ? e : `${e}px solid`;
  }

  function Zo(e, t) {
      return Bo({
          prop: e,
          themeKey: "borders",
          transform: t
      });
  }

  Uo.propTypes = {}, Uo.filterProps = Do, Go.propTypes = {}, Go.filterProps = Wo;

  const Qo = Zo("border", Jo), ei = Zo("borderTop", Jo), ti = Zo("borderRight", Jo), ni = Zo("borderBottom", Jo), ri = Zo("borderLeft", Jo), oi = Zo("borderColor"), ii = Zo("borderTopColor"), ai = Zo("borderRightColor"), si = Zo("borderBottomColor"), li = Zo("borderLeftColor"), ci = Zo("outline", Jo), ui = Zo("outlineColor"), di = e => {
      if (void 0 !== e.borderRadius && null !== e.borderRadius) {
          const t = Vo(e.theme, "shape.borderRadius", 4), n = e => ({
              borderRadius: qo(t, e)
          });
          return Po(e, e.borderRadius, n);
      }
      return null;
  };

  di.propTypes = {}, di.filterProps = [ "borderRadius" ], Yo(Qo, ei, ti, ni, ri, oi, ii, ai, si, li, di, ci, ui);

  const pi = e => {
      if (void 0 !== e.gap && null !== e.gap) {
          const t = Vo(e.theme, "spacing", 8), n = e => ({
              gap: qo(t, e)
          });
          return Po(e, e.gap, n);
      }
      return null;
  };

  pi.propTypes = {}, pi.filterProps = [ "gap" ];

  const fi = e => {
      if (void 0 !== e.columnGap && null !== e.columnGap) {
          const t = Vo(e.theme, "spacing", 8), n = e => ({
              columnGap: qo(t, e)
          });
          return Po(e, e.columnGap, n);
      }
      return null;
  };

  fi.propTypes = {}, fi.filterProps = [ "columnGap" ];

  const hi = e => {
      if (void 0 !== e.rowGap && null !== e.rowGap) {
          const t = Vo(e.theme, "spacing", 8), n = e => ({
              rowGap: qo(t, e)
          });
          return Po(e, e.rowGap, n);
      }
      return null;
  };

  hi.propTypes = {}, hi.filterProps = [ "rowGap" ];

  function mi(e, t) {
      return "grey" === t ? t : e;
  }

  Yo(pi, fi, hi, Bo({
      prop: "gridColumn"
  }), Bo({
      prop: "gridRow"
  }), Bo({
      prop: "gridAutoFlow"
  }), Bo({
      prop: "gridAutoColumns"
  }), Bo({
      prop: "gridAutoRows"
  }), Bo({
      prop: "gridTemplateColumns"
  }), Bo({
      prop: "gridTemplateRows"
  }), Bo({
      prop: "gridTemplateAreas"
  }), Bo({
      prop: "gridArea"
  }));

  function gi(e) {
      return e <= 1 && 0 !== e ? 100 * e + "%" : e;
  }

  Yo(Bo({
      prop: "color",
      themeKey: "palette",
      transform: mi
  }), Bo({
      prop: "bgcolor",
      cssProperty: "backgroundColor",
      themeKey: "palette",
      transform: mi
  }), Bo({
      prop: "backgroundColor",
      themeKey: "palette",
      transform: mi
  }));

  const yi = Bo({
      prop: "width",
      transform: gi
  }), bi = e => {
      if (void 0 !== e.maxWidth && null !== e.maxWidth) {
          const t = t => {
              var n, r;
              const o = (null == (n = e.theme) || null == (n = n.breakpoints) || null == (n = n.values) ? void 0 : n[t]) || $o[t];
              return o ? "px" !== (null == (r = e.theme) || null == (r = r.breakpoints) ? void 0 : r.unit) ? {
                  maxWidth: `${o}${e.theme.breakpoints.unit}`
              } : {
                  maxWidth: o
              } : {
                  maxWidth: gi(t)
              };
          };
          return Po(e, e.maxWidth, t);
      }
      return null;
  };

  bi.filterProps = [ "maxWidth" ];

  const vi = Bo({
      prop: "minWidth",
      transform: gi
  }), xi = Bo({
      prop: "height",
      transform: gi
  }), Si = Bo({
      prop: "maxHeight",
      transform: gi
  }), wi = Bo({
      prop: "minHeight",
      transform: gi
  });

  Bo({
      prop: "size",
      cssProperty: "width",
      transform: gi
  }), Bo({
      prop: "size",
      cssProperty: "height",
      transform: gi
  });

  Yo(yi, bi, vi, xi, Si, wi, Bo({
      prop: "boxSizing"
  }));

  const Ci = {
      border: {
          themeKey: "borders",
          transform: Jo
      },
      borderTop: {
          themeKey: "borders",
          transform: Jo
      },
      borderRight: {
          themeKey: "borders",
          transform: Jo
      },
      borderBottom: {
          themeKey: "borders",
          transform: Jo
      },
      borderLeft: {
          themeKey: "borders",
          transform: Jo
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
          transform: Jo
      },
      outlineColor: {
          themeKey: "palette"
      },
      borderRadius: {
          themeKey: "shape.borderRadius",
          style: di
      },
      color: {
          themeKey: "palette",
          transform: mi
      },
      bgcolor: {
          themeKey: "palette",
          cssProperty: "backgroundColor",
          transform: mi
      },
      backgroundColor: {
          themeKey: "palette",
          transform: mi
      },
      p: {
          style: Go
      },
      pt: {
          style: Go
      },
      pr: {
          style: Go
      },
      pb: {
          style: Go
      },
      pl: {
          style: Go
      },
      px: {
          style: Go
      },
      py: {
          style: Go
      },
      padding: {
          style: Go
      },
      paddingTop: {
          style: Go
      },
      paddingRight: {
          style: Go
      },
      paddingBottom: {
          style: Go
      },
      paddingLeft: {
          style: Go
      },
      paddingX: {
          style: Go
      },
      paddingY: {
          style: Go
      },
      paddingInline: {
          style: Go
      },
      paddingInlineStart: {
          style: Go
      },
      paddingInlineEnd: {
          style: Go
      },
      paddingBlock: {
          style: Go
      },
      paddingBlockStart: {
          style: Go
      },
      paddingBlockEnd: {
          style: Go
      },
      m: {
          style: Uo
      },
      mt: {
          style: Uo
      },
      mr: {
          style: Uo
      },
      mb: {
          style: Uo
      },
      ml: {
          style: Uo
      },
      mx: {
          style: Uo
      },
      my: {
          style: Uo
      },
      margin: {
          style: Uo
      },
      marginTop: {
          style: Uo
      },
      marginRight: {
          style: Uo
      },
      marginBottom: {
          style: Uo
      },
      marginLeft: {
          style: Uo
      },
      marginX: {
          style: Uo
      },
      marginY: {
          style: Uo
      },
      marginInline: {
          style: Uo
      },
      marginInlineStart: {
          style: Uo
      },
      marginInlineEnd: {
          style: Uo
      },
      marginBlock: {
          style: Uo
      },
      marginBlockStart: {
          style: Uo
      },
      marginBlockEnd: {
          style: Uo
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
          style: pi
      },
      rowGap: {
          style: hi
      },
      columnGap: {
          style: fi
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
          transform: gi
      },
      maxWidth: {
          style: bi
      },
      minWidth: {
          transform: gi
      },
      height: {
          transform: gi
      },
      maxHeight: {
          transform: gi
      },
      minHeight: {
          transform: gi
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

  function ki() {
      function e(e, t, n, r) {
          const o = {
              [e]: t,
              theme: n
          }, i = r[e];
          if (!i) return {
              [e]: t
          };
          const {cssProperty: a = e, themeKey: s, transform: l, style: c} = i;
          if (null == t) return null;
          if ("typography" === s && "inherit" === t) return {
              [e]: t
          };
          const u = Mo(n, s) || {};
          if (c) return c(o);
          return Po(o, t, (t => {
              let n = Io(u, l, t);
              return t === n && "string" == typeof t && (n = Io(u, l, `${e}${"default" === t ? "" : En(t)}`, t)), 
              !1 === a ? n : {
                  [a]: n
              };
          }));
      }
      return function t(n) {
          var r;
          const {sx: o, theme: i = {}} = n || {};
          if (!o) return null;
          const a = null != (r = i.unstable_sxConfig) ? r : Ci;
          function s(n) {
              let r = n;
              if ("function" == typeof n) r = n(i); else if ("object" != typeof n) return n;
              if (!r) return null;
              const o = function(e = {}) {
                  var t;
                  return (null == (t = e.keys) ? void 0 : t.reduce(((t, n) => (t[e.up(n)] = {}, t)), {})) || {};
              }(i.breakpoints), s = Object.keys(o);
              let l = o;
              return Object.keys(r).forEach((n => {
                  const o = (s = r[n], c = i, "function" == typeof s ? s(c) : s);
                  var s, c;
                  if (null != o) if ("object" == typeof o) if (a[n]) l = _o(l, e(n, o, i, a)); else {
                      const e = Po({
                          theme: i
                      }, o, (e => ({
                          [n]: e
                      })));
                      !function(...e) {
                          const t = e.reduce(((e, t) => e.concat(Object.keys(t))), []), n = new Set(t);
                          return e.every((e => n.size === Object.keys(e).length));
                      }(e, o) ? l = _o(l, e) : l[n] = t({
                          sx: o,
                          theme: i
                      });
                  } else l = _o(l, e(n, o, i, a));
              })), c = l, s.reduce(((e, t) => {
                  const n = e[t];
                  return (!n || 0 === Object.keys(n).length) && delete e[t], e;
              }), c);
              var c;
          }
          return Array.isArray(o) ? o.map(s) : s(o);
      };
  }

  const ji = ki();

  ji.filterProps = [ "sx" ];

  const Ri = ji;

  function Ei(e, t) {
      const n = this;
      if (n.vars && "function" == typeof n.getColorSchemeSelector) {
          return {
              [n.getColorSchemeSelector(e).replace(/(\[[^\]]+\])/, "*:where($1)")]: t
          };
      }
      return n.palette.mode === e ? t : {};
  }

  const Ti = [ "breakpoints", "palette", "spacing", "shape" ];

  function Oi(e = {}, ...t) {
      const {breakpoints: n = {}, palette: r = {}, spacing: o, shape: i = {}} = e, a = Kt(e, Ti), s = To(n), l = function(e = 8) {
          if (e.mui) return e;
          const t = Ho({
              spacing: e
          }), n = (...e) => (0 === e.length ? [ 1 ] : e).map((e => {
              const n = t(e);
              return "number" == typeof n ? `${n}px` : n;
          })).join(" ");
          return n.mui = !0, n;
      }(o);
      let c = bn({
          breakpoints: s,
          direction: "ltr",
          components: {},
          palette: Xt({
              mode: "light"
          }, r),
          spacing: l,
          shape: Xt({}, Oo, i)
      }, a);
      return c.applyStyles = Ei, c = t.reduce(((e, t) => bn(e, t)), c), c.unstable_sxConfig = Xt({}, Ci, null == a ? void 0 : a.unstable_sxConfig), 
      c.unstable_sx = function(e) {
          return Ri({
              sx: e,
              theme: this
          });
      }, c;
  }

  const _i = B(Object.freeze(Object.defineProperty({
      __proto__: null,
      default: Oi,
      private_createBreakpoints: To,
      unstable_applyStyles: Ei
  }, Symbol.toStringTag, {
      value: "Module"
  }))), $i = [ "sx" ], Ai = e => {
      var t, n;
      const r = {
          systemProps: {},
          otherProps: {}
      }, o = null != (t = null == e || null == (n = e.theme) ? void 0 : n.unstable_sxConfig) ? t : Ci;
      return Object.keys(e).forEach((t => {
          o[t] ? r.systemProps[t] = e[t] : r.otherProps[t] = e[t];
      })), r;
  };

  function Pi(e) {
      const {sx: t} = e, n = Kt(e, $i), {systemProps: r, otherProps: o} = Ai(n);
      let i;
      return i = Array.isArray(t) ? [ r, ...t ] : "function" == typeof t ? (...e) => {
          const n = t(...e);
          return gn(n) ? Xt({}, r, n) : r;
      } : Xt({}, r, t), Xt({}, o, {
          sx: i
      });
  }

  const Mi = B(Object.freeze(Object.defineProperty({
      __proto__: null,
      default: Ri,
      extendSxProp: Pi,
      unstable_createStyleFunctionSx: ki,
      unstable_defaultSxConfig: Ci
  }, Symbol.toStringTag, {
      value: "Module"
  })));

  var Ii = mr;

  Object.defineProperty(pr, "__esModule", {
      value: !0
  });

  var Bi = pr.default = function(e = {}) {
      const {themeId: t, defaultTheme: n = Gi, rootShouldForwardProp: r = Ui, slotShouldForwardProp: o = Ui} = e, i = e => (0, Vi.default)((0, Ni.default)({}, e, {
          theme: Ji((0, Ni.default)({}, e, {
              defaultTheme: n,
              themeId: t
          }))
      }));
      return i.__mui_systemSx = !0, (e, a = {}) => {
          (0, zi.internal_processStyles)(e, (e => e.filter((e => !(null != e && e.__mui_systemSx)))));
          const {name: s, slot: l, skipVariantsResolver: c, skipSx: u, overridesResolver: d = Zi(Yi(l))} = a, p = (0, Li.default)(a, Ki), f = void 0 !== c ? c : l && "Root" !== l && "root" !== l || !1, h = u || !1;
          let m = Ui;
          "Root" === l || "root" === l ? m = r : l ? m = o : function(e) {
              return "string" == typeof e && e.charCodeAt(0) > 96;
          }(e) && (m = void 0);
          const g = (0, zi.default)(e, (0, Ni.default)({
              shouldForwardProp: m,
              label: undefined
          }, p)), y = e => "function" == typeof e && e.__emotion_real !== e || (0, Di.isPlainObject)(e) ? r => Qi(e, (0, Ni.default)({}, r, {
              theme: Ji({
                  theme: r.theme,
                  defaultTheme: n,
                  themeId: t
              })
          })) : e, b = (r, ...o) => {
              let a = y(r);
              const l = o ? o.map(y) : [];
              s && d && l.push((e => {
                  const r = Ji((0, Ni.default)({}, e, {
                      defaultTheme: n,
                      themeId: t
                  }));
                  if (!r.components || !r.components[s] || !r.components[s].styleOverrides) return null;
                  const o = r.components[s].styleOverrides, i = {};
                  return Object.entries(o).forEach((([t, n]) => {
                      i[t] = Qi(n, (0, Ni.default)({}, e, {
                          theme: r
                      }));
                  })), d(e, i);
              })), s && !f && l.push((e => {
                  var r;
                  const o = Ji((0, Ni.default)({}, e, {
                      defaultTheme: n,
                      themeId: t
                  }));
                  return Qi({
                      variants: null == o || null == (r = o.components) || null == (r = r[s]) ? void 0 : r.variants
                  }, (0, Ni.default)({}, e, {
                      theme: o
                  }));
              })), h || l.push(i);
              const c = l.length - o.length;
              if (Array.isArray(r) && c > 0) {
                  const e = new Array(c).fill("");
                  a = [ ...r, ...e ], a.raw = [ ...r.raw, ...e ];
              }
              const u = g(a, ...l);
              return e.muiName && (u.muiName = e.muiName), u;
          };
          return g.withConfig && (b.withConfig = g.withConfig), b;
      };
  }, Fi = pr.shouldForwardProp = Ui;

  pr.systemDefaultTheme = void 0;

  var Ni = Ii((hr || (hr = 1, function(e) {
      function t() {
          return e.exports = t = Object.assign ? Object.assign.bind() : function(e) {
              for (var t = 1; t < arguments.length; t++) {
                  var n = arguments[t];
                  for (var r in n) Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r]);
              }
              return e;
          }, e.exports.__esModule = !0, e.exports.default = e.exports, t.apply(this, arguments);
      }
      e.exports = t, e.exports.__esModule = !0, e.exports.default = e.exports;
  }(gr)), gr.exports)), Li = Ii((yr || (yr = 1, function(e) {
      e.exports = function(e, t) {
          if (null == e) return {};
          var n, r, o = {}, i = Object.keys(e);
          for (r = 0; r < i.length; r++) n = i[r], t.indexOf(n) >= 0 || (o[n] = e[n]);
          return o;
      }, e.exports.__esModule = !0, e.exports.default = e.exports;
  }(br)), br.exports)), zi = function(e, t) {
      if (!t && e && e.__esModule) return e;
      if (null === e || "object" != typeof e && "function" != typeof e) return {
          default: e
      };
      var n = Xi(t);
      if (n && n.has(e)) return n.get(e);
      var r = {
          __proto__: null
      }, o = Object.defineProperty && Object.getOwnPropertyDescriptor;
      for (var i in e) if ("default" !== i && Object.prototype.hasOwnProperty.call(e, i)) {
          var a = o ? Object.getOwnPropertyDescriptor(e, i) : null;
          a && (a.get || a.set) ? Object.defineProperty(r, i, a) : r[i] = e[i];
      }
      return r.default = e, n && n.set(e, r), r;
  }(wo), Di = Co;

  Ii(ko), Ii(jo);

  var Wi = Ii(_i), Vi = Ii(Mi);

  const Hi = [ "ownerState" ], qi = [ "variants" ], Ki = [ "name", "slot", "skipVariantsResolver", "skipSx", "overridesResolver" ];

  function Xi(e) {
      if ("function" != typeof WeakMap) return null;
      var t = new WeakMap, n = new WeakMap;
      return (Xi = function(e) {
          return e ? n : t;
      })(e);
  }

  function Ui(e) {
      return "ownerState" !== e && "theme" !== e && "sx" !== e && "as" !== e;
  }

  const Gi = pr.systemDefaultTheme = (0, Wi.default)(), Yi = e => e ? e.charAt(0).toLowerCase() + e.slice(1) : e;

  function Ji({defaultTheme: e, theme: t, themeId: n}) {
      return r = t, 0 === Object.keys(r).length ? e : t[n] || t;
      var r;
  }

  function Zi(e) {
      return e ? (t, n) => n[e] : null;
  }

  function Qi(e, t) {
      let {ownerState: n} = t, r = (0, Li.default)(t, Hi);
      const o = "function" == typeof e ? e((0, Ni.default)({
          ownerState: n
      }, r)) : e;
      if (Array.isArray(o)) return o.flatMap((e => Qi(e, (0, Ni.default)({
          ownerState: n
      }, r))));
      if (o && "object" == typeof o && Array.isArray(o.variants)) {
          const {variants: e = []} = o;
          let t = (0, Li.default)(o, qi);
          return e.forEach((e => {
              let o = !0;
              "function" == typeof e.props ? o = e.props((0, Ni.default)({
                  ownerState: n
              }, r, n)) : Object.keys(e.props).forEach((t => {
                  (null == n ? void 0 : n[t]) !== e.props[t] && r[t] !== e.props[t] && (o = !1);
              })), o && (Array.isArray(t) || (t = [ t ]), t.push("function" == typeof e.style ? e.style((0, Ni.default)({
                  ownerState: n
              }, r, n)) : e.style));
          })), t;
      }
      return o;
  }

  var ea = {};

  const ta = B(Sn), na = B(or);

  var ra = mr;

  Object.defineProperty(ea, "__esModule", {
      value: !0
  }), ea.alpha = ga, ea.blend = function(e, t, n, r = 1) {
      const o = (e, t) => Math.round((e ** (1 / r) * (1 - n) + t ** (1 / r) * n) ** r), i = da(e), a = da(t);
      return fa({
          type: "rgb",
          values: [ o(i.values[0], a.values[0]), o(i.values[1], a.values[1]), o(i.values[2], a.values[2]) ]
      });
  }, ea.colorChannel = void 0;

  var oa = ea.darken = ya;

  ea.decomposeColor = da, ea.emphasize = function(e, t = .15) {
      return ma(e) > .5 ? ya(e, t) : ba(e, t);
  };

  var ia = ea.getContrastRatio = function(e, t) {
      const n = ma(e), r = ma(t);
      return (Math.max(n, r) + .05) / (Math.min(n, r) + .05);
  };

  ea.getLuminance = ma, ea.hexToRgb = ua, ea.hslToRgb = ha;

  var aa = ea.lighten = ba;

  ea.private_safeAlpha = function(e, t, n) {
      try {
          return ga(e, t);
      } catch (r) {
          return e;
      }
  }, ea.private_safeColorChannel = void 0, ea.private_safeDarken = function(e, t, n) {
      try {
          return ya(e, t);
      } catch (r) {
          return e;
      }
  }, ea.private_safeEmphasize = function e(t, n, r) {
      try {
          return e(t, n);
      } catch (o) {
          return t;
      }
  }, ea.private_safeLighten = function(e, t, n) {
      try {
          return ba(e, t);
      } catch (r) {
          return e;
      }
  }, ea.recomposeColor = fa, ea.rgbToHex = function(e) {
      if (0 === e.indexOf("#")) return e;
      const {values: t} = da(e);
      return `#${t.map(((e, t) => function(e) {
        const t = e.toString(16);
        return 1 === t.length ? `0${t}` : t;
    }(3 === t ? Math.round(255 * e) : e))).join("")}`;
  };

  var sa = ra(ta), la = ra(na);

  function ca(e, t = 0, n = 1) {
      return (0, la.default)(e, t, n);
  }

  function ua(e) {
      e = e.slice(1);
      const t = new RegExp(`.{1,${e.length >= 6 ? 2 : 1}}`, "g");
      let n = e.match(t);
      return n && 1 === n[0].length && (n = n.map((e => e + e))), n ? `rgb${4 === n.length ? "a" : ""}(${n.map(((e, t) => t < 3 ? parseInt(e, 16) : Math.round(parseInt(e, 16) / 255 * 1e3) / 1e3)).join(", ")})` : "";
  }

  function da(e) {
      if (e.type) return e;
      if ("#" === e.charAt(0)) return da(ua(e));
      const t = e.indexOf("("), n = e.substring(0, t);
      if (-1 === [ "rgb", "rgba", "hsl", "hsla", "color" ].indexOf(n)) throw new Error((0, sa.default)(9, e));
      let r, o = e.substring(t + 1, e.length - 1);
      if ("color" === n) {
          if (o = o.split(" "), r = o.shift(), 4 === o.length && "/" === o[3].charAt(0) && (o[3] = o[3].slice(1)), 
          -1 === [ "srgb", "display-p3", "a98-rgb", "prophoto-rgb", "rec-2020" ].indexOf(r)) throw new Error((0, sa.default)(10, r));
      } else o = o.split(",");
      return o = o.map((e => parseFloat(e))), {
          type: n,
          values: o,
          colorSpace: r
      };
  }

  const pa = e => {
      const t = da(e);
      return t.values.slice(0, 3).map(((e, n) => -1 !== t.type.indexOf("hsl") && 0 !== n ? `${e}%` : e)).join(" ");
  };

  ea.colorChannel = pa;

  function fa(e) {
      const {type: t, colorSpace: n} = e;
      let {values: r} = e;
      return -1 !== t.indexOf("rgb") ? r = r.map(((e, t) => t < 3 ? parseInt(e, 10) : e)) : -1 !== t.indexOf("hsl") && (r[1] = `${r[1]}%`, 
      r[2] = `${r[2]}%`), r = -1 !== t.indexOf("color") ? `${n} ${r.join(" ")}` : `${r.join(", ")}`, 
      `${t}(${r})`;
  }

  function ha(e) {
      e = da(e);
      const {values: t} = e, n = t[0], r = t[1] / 100, o = t[2] / 100, i = r * Math.min(o, 1 - o), a = (e, t = (e + n / 30) % 12) => o - i * Math.max(Math.min(t - 3, 9 - t, 1), -1);
      let s = "rgb";
      const l = [ Math.round(255 * a(0)), Math.round(255 * a(8)), Math.round(255 * a(4)) ];
      return "hsla" === e.type && (s += "a", l.push(t[3])), fa({
          type: s,
          values: l
      });
  }

  function ma(e) {
      let t = "hsl" === (e = da(e)).type || "hsla" === e.type ? da(ha(e)).values : e.values;
      return t = t.map((t => ("color" !== e.type && (t /= 255), t <= .03928 ? t / 12.92 : ((t + .055) / 1.055) ** 2.4))), 
      Number((.2126 * t[0] + .7152 * t[1] + .0722 * t[2]).toFixed(3));
  }

  function ga(e, t) {
      return e = da(e), t = ca(t), "rgb" !== e.type && "hsl" !== e.type || (e.type += "a"), 
      "color" === e.type ? e.values[3] = `/${t}` : e.values[3] = t, fa(e);
  }

  function ya(e, t) {
      if (e = da(e), t = ca(t), -1 !== e.type.indexOf("hsl")) e.values[2] *= 1 - t; else if (-1 !== e.type.indexOf("rgb") || -1 !== e.type.indexOf("color")) for (let n = 0; n < 3; n += 1) e.values[n] *= 1 - t;
      return fa(e);
  }

  function ba(e, t) {
      if (e = da(e), t = ca(t), -1 !== e.type.indexOf("hsl")) e.values[2] += (100 - e.values[2]) * t; else if (-1 !== e.type.indexOf("rgb")) for (let n = 0; n < 3; n += 1) e.values[n] += (255 - e.values[n]) * t; else if (-1 !== e.type.indexOf("color")) for (let n = 0; n < 3; n += 1) e.values[n] += (1 - e.values[n]) * t;
      return fa(e);
  }

  ea.private_safeColorChannel = (e, t) => {
      try {
          return pa(e);
      } catch (n) {
          return e;
      }
  };

  const va = {
      black: "#000",
      white: "#fff"
  }, xa = {
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
  }, Sa = {
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
  }, wa = {
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
  }, Ca = {
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
  }, ka = {
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
  }, ja = {
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
  }, Ra = {
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
  }, Ea = [ "mode", "contrastThreshold", "tonalOffset" ], Ta = {
      text: {
          primary: "rgba(0, 0, 0, 0.87)",
          secondary: "rgba(0, 0, 0, 0.6)",
          disabled: "rgba(0, 0, 0, 0.38)"
      },
      divider: "rgba(0, 0, 0, 0.12)",
      background: {
          paper: va.white,
          default: va.white
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
  }, Oa = {
      text: {
          primary: va.white,
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
          active: va.white,
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

  function _a(e, t, n, r) {
      const o = r.light || r, i = r.dark || 1.5 * r;
      e[t] || (e.hasOwnProperty(n) ? e[t] = e[n] : "light" === t ? e.light = aa(e.main, o) : "dark" === t && (e.dark = oa(e.main, i)));
  }

  function $a(e) {
      const {mode: t = "light", contrastThreshold: n = 3, tonalOffset: r = .2} = e, o = Kt(e, Ea), i = e.primary || function(e = "light") {
          return "dark" === e ? {
              main: ka[200],
              light: ka[50],
              dark: ka[400]
          } : {
              main: ka[700],
              light: ka[400],
              dark: ka[800]
          };
      }(t), a = e.secondary || function(e = "light") {
          return "dark" === e ? {
              main: Sa[200],
              light: Sa[50],
              dark: Sa[400]
          } : {
              main: Sa[500],
              light: Sa[300],
              dark: Sa[700]
          };
      }(t), s = e.error || function(e = "light") {
          return "dark" === e ? {
              main: wa[500],
              light: wa[300],
              dark: wa[700]
          } : {
              main: wa[700],
              light: wa[400],
              dark: wa[800]
          };
      }(t), l = e.info || function(e = "light") {
          return "dark" === e ? {
              main: ja[400],
              light: ja[300],
              dark: ja[700]
          } : {
              main: ja[700],
              light: ja[500],
              dark: ja[900]
          };
      }(t), c = e.success || function(e = "light") {
          return "dark" === e ? {
              main: Ra[400],
              light: Ra[300],
              dark: Ra[700]
          } : {
              main: Ra[800],
              light: Ra[500],
              dark: Ra[900]
          };
      }(t), u = e.warning || function(e = "light") {
          return "dark" === e ? {
              main: Ca[400],
              light: Ca[300],
              dark: Ca[700]
          } : {
              main: "#ed6c02",
              light: Ca[500],
              dark: Ca[900]
          };
      }(t);
      function d(e) {
          return ia(e, Oa.text.primary) >= n ? Oa.text.primary : Ta.text.primary;
      }
      const p = ({color: e, name: t, mainShade: n = 500, lightShade: o = 300, darkShade: i = 700}) => {
          if (!(e = Xt({}, e)).main && e[n] && (e.main = e[n]), !e.hasOwnProperty("main")) throw new Error(xn(11, t ? ` (${t})` : "", n));
          if ("string" != typeof e.main) throw new Error(xn(12, t ? ` (${t})` : "", JSON.stringify(e.main)));
          return _a(e, "light", o, r), _a(e, "dark", i, r), e.contrastText || (e.contrastText = d(e.main)), 
          e;
      }, f = {
          dark: Oa,
          light: Ta
      };
      return bn(Xt({
          common: Xt({}, va),
          mode: t,
          primary: p({
              color: i,
              name: "primary"
          }),
          secondary: p({
              color: a,
              name: "secondary",
              mainShade: "A400",
              lightShade: "A200",
              darkShade: "A700"
          }),
          error: p({
              color: s,
              name: "error"
          }),
          warning: p({
              color: u,
              name: "warning"
          }),
          info: p({
              color: l,
              name: "info"
          }),
          success: p({
              color: c,
              name: "success"
          }),
          grey: xa,
          contrastThreshold: n,
          getContrastText: d,
          augmentColor: p,
          tonalOffset: r
      }, f[t]), o);
  }

  const Aa = [ "fontFamily", "fontSize", "fontWeightLight", "fontWeightRegular", "fontWeightMedium", "fontWeightBold", "htmlFontSize", "allVariants", "pxToRem" ];

  const Pa = {
      textTransform: "uppercase"
  }, Ma = '"Roboto", "Helvetica", "Arial", sans-serif';

  function Ia(e, t) {
      const n = "function" == typeof t ? t(e) : t, {fontFamily: r = Ma, fontSize: o = 14, fontWeightLight: i = 300, fontWeightRegular: a = 400, fontWeightMedium: s = 500, fontWeightBold: l = 700, htmlFontSize: c = 16, allVariants: u, pxToRem: d} = n, p = Kt(n, Aa), f = o / 14, h = d || (e => e / c * f + "rem"), m = (e, t, n, o, i) => {
          return Xt({
              fontFamily: r,
              fontWeight: e,
              fontSize: h(t),
              lineHeight: n
          }, r === Ma ? {
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
          button: m(s, 14, 1.75, .4, Pa),
          caption: m(a, 12, 1.66, .4),
          overline: m(a, 12, 2.66, 1, Pa),
          inherit: {
              fontFamily: "inherit",
              fontWeight: "inherit",
              fontSize: "inherit",
              lineHeight: "inherit",
              letterSpacing: "inherit"
          }
      };
      return bn(Xt({
          htmlFontSize: c,
          pxToRem: h,
          fontFamily: r,
          fontSize: o,
          fontWeightLight: i,
          fontWeightRegular: a,
          fontWeightMedium: s,
          fontWeightBold: l
      }, g), p, {
          clone: !1
      });
  }

  function Ba(...e) {
      return [ `${e[0]}px ${e[1]}px ${e[2]}px ${e[3]}px rgba(0,0,0,0.2)`, `${e[4]}px ${e[5]}px ${e[6]}px ${e[7]}px rgba(0,0,0,0.14)`, `${e[8]}px ${e[9]}px ${e[10]}px ${e[11]}px rgba(0,0,0,0.12)` ].join(",");
  }

  const Fa = [ "none", Ba(0, 2, 1, -1, 0, 1, 1, 0, 0, 1, 3, 0), Ba(0, 3, 1, -2, 0, 2, 2, 0, 0, 1, 5, 0), Ba(0, 3, 3, -2, 0, 3, 4, 0, 0, 1, 8, 0), Ba(0, 2, 4, -1, 0, 4, 5, 0, 0, 1, 10, 0), Ba(0, 3, 5, -1, 0, 5, 8, 0, 0, 1, 14, 0), Ba(0, 3, 5, -1, 0, 6, 10, 0, 0, 1, 18, 0), Ba(0, 4, 5, -2, 0, 7, 10, 1, 0, 2, 16, 1), Ba(0, 5, 5, -3, 0, 8, 10, 1, 0, 3, 14, 2), Ba(0, 5, 6, -3, 0, 9, 12, 1, 0, 3, 16, 2), Ba(0, 6, 6, -3, 0, 10, 14, 1, 0, 4, 18, 3), Ba(0, 6, 7, -4, 0, 11, 15, 1, 0, 4, 20, 3), Ba(0, 7, 8, -4, 0, 12, 17, 2, 0, 5, 22, 4), Ba(0, 7, 8, -4, 0, 13, 19, 2, 0, 5, 24, 4), Ba(0, 7, 9, -4, 0, 14, 21, 2, 0, 5, 26, 4), Ba(0, 8, 9, -5, 0, 15, 22, 2, 0, 6, 28, 5), Ba(0, 8, 10, -5, 0, 16, 24, 2, 0, 6, 30, 5), Ba(0, 8, 11, -5, 0, 17, 26, 2, 0, 6, 32, 5), Ba(0, 9, 11, -5, 0, 18, 28, 2, 0, 7, 34, 6), Ba(0, 9, 12, -6, 0, 19, 29, 2, 0, 7, 36, 6), Ba(0, 10, 13, -6, 0, 20, 31, 3, 0, 8, 38, 7), Ba(0, 10, 13, -6, 0, 21, 33, 3, 0, 8, 40, 7), Ba(0, 10, 14, -6, 0, 22, 35, 3, 0, 8, 42, 7), Ba(0, 11, 14, -7, 0, 23, 36, 3, 0, 9, 44, 8), Ba(0, 11, 15, -7, 0, 24, 38, 3, 0, 9, 46, 8) ], Na = [ "duration", "easing", "delay" ], La = {
      easeInOut: "cubic-bezier(0.4, 0, 0.2, 1)",
      easeOut: "cubic-bezier(0.0, 0, 0.2, 1)",
      easeIn: "cubic-bezier(0.4, 0, 1, 1)",
      sharp: "cubic-bezier(0.4, 0, 0.6, 1)"
  }, za = {
      shortest: 150,
      shorter: 200,
      short: 250,
      standard: 300,
      complex: 375,
      enteringScreen: 225,
      leavingScreen: 195
  };

  function Da(e) {
      return `${Math.round(e)}ms`;
  }

  function Wa(e) {
      if (!e) return 0;
      const t = e / 36;
      return Math.round(10 * (4 + 15 * t ** .25 + t / 5));
  }

  function Va(e) {
      const t = Xt({}, La, e.easing), n = Xt({}, za, e.duration);
      return Xt({
          getAutoHeightDuration: Wa,
          create: (e = [ "all" ], r = {}) => {
              const {duration: o = n.standard, easing: i = t.easeInOut, delay: a = 0} = r;
              return Kt(r, Na), (Array.isArray(e) ? e : [ e ]).map((e => `${e} ${"string" == typeof o ? o : Da(o)} ${i} ${"string" == typeof a ? a : Da(a)}`)).join(",");
          }
      }, e, {
          easing: t,
          duration: n
      });
  }

  const Ha = {
      mobileStepper: 1e3,
      fab: 1050,
      speedDial: 1050,
      appBar: 1100,
      drawer: 1200,
      modal: 1300,
      snackbar: 1400,
      tooltip: 1500
  }, qa = [ "breakpoints", "mixins", "spacing", "palette", "transitions", "typography", "shape" ];

  function Ka(e = {}, ...t) {
      const {mixins: n = {}, palette: r = {}, transitions: o = {}, typography: i = {}} = e, a = Kt(e, qa);
      if (e.vars) throw new Error(xn(18));
      const s = $a(r), l = Oi(e);
      let c = bn(l, {
          mixins: (u = l.breakpoints, d = n, Xt({
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
          shadows: Fa.slice(),
          typography: Ia(s, i),
          transitions: Va(o),
          zIndex: Xt({}, Ha)
      });
      var u, d;
      return c = bn(c, a), c = t.reduce(((e, t) => bn(e, t)), c), c.unstable_sxConfig = Xt({}, Ci, null == a ? void 0 : a.unstable_sxConfig), 
      c.unstable_sx = function(e) {
          return Ri({
              sx: e,
              theme: this
          });
      }, c;
  }

  const Xa = Ka(), Ua = "$$material", Ga = Bi({
      themeId: Ua,
      defaultTheme: Xa,
      rootShouldForwardProp: e => Fi(e) && "classes" !== e
  });

  function Ya(e) {
      const {theme: t, name: n, props: r} = e;
      return t && t.components && t.components[n] && t.components[n].defaultProps ? Jn(t.components[n].defaultProps, r) : r;
  }

  function Ja(t = null) {
      const n = e__namespace.useContext(react.ThemeContext);
      return n && (r = n, 0 !== Object.keys(r).length) ? n : t;
      var r;
  }

  const Za = Oi();

  function Qa(e = Za) {
      return Ja(e);
  }

  function es({props: e, name: t}) {
      return function({props: e, name: t, defaultTheme: n, themeId: r}) {
          let o = Qa(n);
          return r && (o = o[r] || o), Ya({
              theme: o,
              name: t,
              props: e
          });
      }({
          props: e,
          name: t,
          defaultTheme: Xa,
          themeId: Ua
      });
  }

  const ts = [ "className", "component" ];

  function ns(e) {
      return (1 + Math.sin(Math.PI * e - Math.PI / 2)) / 2;
  }

  function rs(e) {
      return nr("MuiSvgIcon", e);
  }

  rr("MuiSvgIcon", [ "root", "colorPrimary", "colorSecondary", "colorAction", "colorError", "colorDisabled", "fontSizeInherit", "fontSizeSmall", "fontSizeMedium", "fontSizeLarge" ]);

  const os = [ "children", "className", "color", "component", "fontSize", "htmlColor", "inheritViewBox", "titleAccess", "viewBox" ], is = Ga("svg", {
      name: "MuiSvgIcon",
      slot: "Root",
      overridesResolver: (e, t) => {
          const {ownerState: n} = e;
          return [ t.root, "inherit" !== n.color && t[`color${En(n.color)}`], t[`fontSize${En(n.fontSize)}`] ];
      }
  })((({theme: e, ownerState: t}) => {
      var n, r, o, i, a, s, l, c, u, d, p, f, h;
      return {
          userSelect: "none",
          width: "1em",
          height: "1em",
          display: "inline-block",
          fill: t.hasSvgAsChild ? void 0 : "currentColor",
          flexShrink: 0,
          transition: null == (n = e.transitions) || null == (r = n.create) ? void 0 : r.call(n, "fill", {
              duration: null == (o = e.transitions) || null == (o = o.duration) ? void 0 : o.shorter
          }),
          fontSize: {
              inherit: "inherit",
              small: (null == (i = e.typography) || null == (a = i.pxToRem) ? void 0 : a.call(i, 20)) || "1.25rem",
              medium: (null == (s = e.typography) || null == (l = s.pxToRem) ? void 0 : l.call(s, 24)) || "1.5rem",
              large: (null == (c = e.typography) || null == (u = c.pxToRem) ? void 0 : u.call(c, 35)) || "2.1875rem"
          }[t.fontSize],
          color: null != (d = null == (p = (e.vars || e).palette) || null == (p = p[t.color]) ? void 0 : p.main) ? d : {
              action: null == (f = (e.vars || e).palette) || null == (f = f.action) ? void 0 : f.active,
              disabled: null == (h = (e.vars || e).palette) || null == (h = h.action) ? void 0 : h.disabled,
              inherit: void 0
          }[t.color]
      };
  })), as = e__namespace.forwardRef((function(t, n) {
      const r = es({
          props: t,
          name: "MuiSvgIcon"
      }), {children: o, className: i, color: a = "inherit", component: s = "svg", fontSize: l = "medium", htmlColor: c, inheritViewBox: u = !1, titleAccess: d, viewBox: p = "0 0 24 24"} = r, f = Kt(r, os), h = e__namespace.isValidElement(o) && "svg" === o.type, m = Xt({}, r, {
          color: a,
          component: s,
          fontSize: l,
          instanceFontSize: t.fontSize,
          inheritViewBox: u,
          viewBox: p,
          hasSvgAsChild: h
      }), g = {};
      u || (g.viewBox = p);
      const y = (e => {
          const {color: t, fontSize: n, classes: r} = e;
          return Zn({
              root: [ "root", "inherit" !== t && `color${En(t)}`, `fontSize${En(n)}` ]
          }, rs, r);
      })(m);
      return K.jsxs(is, Xt({
          as: s,
          className: mn(y.root, i),
          focusable: "false",
          color: c,
          "aria-hidden": !d || void 0,
          role: d ? "img" : void 0,
          ref: n
      }, g, f, h && o.props, {
          ownerState: m,
          children: [ h ? o.props.children : o, d ? K.jsx("title", {
              children: d
          }) : null ]
      }));
  }));

  function ss(t, n) {
      function r(e, r) {
          return K.jsx(as, Xt({
              "data-testid": `${n}Icon`,
              ref: r
          }, e, {
              children: t
          }));
      }
      return r.muiName = as.muiName, e__namespace.memo(e__namespace.forwardRef(r));
  }

  as.muiName = "SvgIcon";

  const ls = [ "onChange" ], cs = {
      width: 99,
      height: 99,
      position: "absolute",
      top: -9999,
      overflow: "scroll"
  };

  const us = ss(K.jsx("path", {
      d: "M15.41 16.09l-4.58-4.59 4.58-4.59L14 5.5l-6 6 6 6z"
  }), "KeyboardArrowLeft"), ds = ss(K.jsx("path", {
      d: "M8.59 16.34l4.58-4.59-4.58-4.59L10 5.75l6 6-6 6z"
  }), "KeyboardArrowRight");

  function ps(e, t) {
      return (ps = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function(e, t) {
          return e.__proto__ = t, e;
      })(e, t);
  }

  const fs = e.createContext(null);

  function hs(e$1, t) {
      var n = Object.create(null);
      return e$1 && e.Children.map(e$1, (function(e) {
          return e;
      })).forEach((function(e$1) {
          n[e$1.key] = function(e$1) {
              return t && e.isValidElement(e$1) ? t(e$1) : e$1;
          }(e$1);
      })), n;
  }

  function ms(e, t, n) {
      return null != n[t] ? n[t] : e.props[t];
  }

  function gs(e$1, t, n) {
      var r = hs(e$1.children), o = function(e, t) {
          function n(n) {
              return n in t ? t[n] : e[n];
          }
          e = e || {}, t = t || {};
          var r, o = Object.create(null), i = [];
          for (var a in e) a in t ? i.length && (o[a] = i, i = []) : i.push(a);
          var s = {};
          for (var l in t) {
              if (o[l]) for (r = 0; r < o[l].length; r++) {
                  var c = o[l][r];
                  s[o[l][r]] = n(c);
              }
              s[l] = n(l);
          }
          for (r = 0; r < i.length; r++) s[i[r]] = n(i[r]);
          return s;
      }(t, r);
      return Object.keys(o).forEach((function(s) {
          var l = o[s];
          if (e.isValidElement(l)) {
              var c = s in t, u = s in r, d = t[s], p = e.isValidElement(d) && !d.props.in;
              !u || c && !p ? u || !c || p ? u && c && e.isValidElement(d) && (o[s] = e.cloneElement(l, {
                  onExited: n.bind(null, l),
                  in: d.props.in,
                  exit: ms(l, "exit", e$1),
                  enter: ms(l, "enter", e$1)
              })) : o[s] = e.cloneElement(l, {
                  in: !1
              }) : o[s] = e.cloneElement(l, {
                  onExited: n.bind(null, l),
                  in: !0,
                  exit: ms(l, "exit", e$1),
                  enter: ms(l, "enter", e$1)
              });
          }
      })), o;
  }

  var ys = Object.values || function(e) {
      return Object.keys(e).map((function(t) {
          return e[t];
      }));
  }, bs = function(e$1) {
      var n, r;
      function o(t, n) {
          var r, o = (r = e$1.call(this, t, n) || this).handleExited.bind(function(e) {
              if (void 0 === e) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
              return e;
          }(r));
          return r.state = {
              contextValue: {
                  isMounting: !0
              },
              handleExited: o,
              firstRender: !0
          }, r;
      }
      r = e$1, (n = o).prototype = Object.create(r.prototype), n.prototype.constructor = n, 
      ps(n, r);
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
          var n, r, o = t.children, i = t.handleExited;
          return {
              children: t.firstRender ? (n = e$1, r = i, hs(n.children, (function(e$1) {
                  return e.cloneElement(e$1, {
                      onExited: r.bind(null, e$1),
                      in: !0,
                      appear: ms(e$1, "appear", n),
                      enter: ms(e$1, "enter", n),
                      exit: ms(e$1, "exit", n)
                  });
              }))) : gs(e$1, o, i),
              firstRender: !1
          };
      }, i.handleExited = function(e, t) {
          var n = hs(this.props.children);
          e.key in n || (e.props.onExited && e.props.onExited(t), this.mounted && this.setState((function(t) {
              var n = Xt({}, t.children);
              return delete n[e.key], {
                  children: n
              };
          })));
      }, i.render = function() {
          var e$1 = this.props, n = e$1.component, r = e$1.childFactory, o = Kt(e$1, [ "component", "childFactory" ]), i = this.state.contextValue, a = ys(this.state.children).map(r);
          return delete o.appear, delete o.enter, delete o.exit, null === n ? e.createElement(fs.Provider, {
              value: i
          }, a) : e.createElement(fs.Provider, {
              value: i
          }, e.createElement(n, o, a));
      }, o;
  }(e.Component);

  bs.propTypes = {}, bs.defaultProps = {
      component: "div",
      childFactory: function(e) {
          return e;
      }
  };

  const vs = bs;

  const xs = rr("MuiTouchRipple", [ "root", "ripple", "rippleVisible", "ripplePulsate", "child", "childLeaving", "childPulsate" ]), Ss = [ "center", "classes", "className" ];

  let ws, Cs, ks, js, Rs = e => e;

  const Es = react.keyframes(ws || (ws = Rs`
  0% {
    transform: scale(0);
    opacity: 0.1;
  }

  100% {
    transform: scale(1);
    opacity: 0.3;
  }
`)), Ts = react.keyframes(Cs || (Cs = Rs`
  0% {
    opacity: 1;
  }

  100% {
    opacity: 0;
  }
`)), Os = react.keyframes(ks || (ks = Rs`
  0% {
    transform: scale(1);
  }

  50% {
    transform: scale(0.92);
  }

  100% {
    transform: scale(1);
  }
`)), _s = Ga("span", {
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
  }), $s = Ga((function(t) {
      const {className: n, classes: r, pulsate: o = !1, rippleX: i, rippleY: a, rippleSize: s, in: l, onExited: c, timeout: u} = t, [d, p] = e__namespace.useState(!1), f = mn(n, r.ripple, r.rippleVisible, o && r.ripplePulsate), h = {
          width: s,
          height: s,
          top: -s / 2 + a,
          left: -s / 2 + i
      }, m = mn(r.child, d && r.childLeaving, o && r.childPulsate);
      return l || d || p(!0), e__namespace.useEffect((() => {
          if (!l && null != c) {
              const e = setTimeout(c, u);
              return () => {
                  clearTimeout(e);
              };
          }
      }), [ c, l, u ]), K.jsx("span", {
          className: f,
          style: h,
          children: K.jsx("span", {
              className: m
          })
      });
  }), {
      name: "MuiTouchRipple",
      slot: "Ripple"
  })(js || (js = Rs`
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
`), xs.rippleVisible, Es, 550, (({theme: e}) => e.transitions.easing.easeInOut), xs.ripplePulsate, (({theme: e}) => e.transitions.duration.shorter), xs.child, xs.childLeaving, Ts, 550, (({theme: e}) => e.transitions.easing.easeInOut), xs.childPulsate, Os, (({theme: e}) => e.transitions.easing.easeInOut)), As = e__namespace.forwardRef((function(t, n) {
      const r = es({
          props: t,
          name: "MuiTouchRipple"
      }), {center: o = !1, classes: i = {}, className: a} = r, s = Kt(r, Ss), [l, c] = e__namespace.useState([]), u = e__namespace.useRef(0), d = e__namespace.useRef(null);
      e__namespace.useEffect((() => {
          d.current && (d.current(), d.current = null);
      }), [ l ]);
      const p = e__namespace.useRef(!1), f = Nn(), h = e__namespace.useRef(null), m = e__namespace.useRef(null), g = e__namespace.useCallback((e => {
          const {pulsate: t, rippleX: n, rippleY: r, rippleSize: o, cb: a} = e;
          c((e => [ ...e, K.jsx($s, {
              classes: {
                  ripple: mn(i.ripple, xs.ripple),
                  rippleVisible: mn(i.rippleVisible, xs.rippleVisible),
                  ripplePulsate: mn(i.ripplePulsate, xs.ripplePulsate),
                  child: mn(i.child, xs.child),
                  childLeaving: mn(i.childLeaving, xs.childLeaving),
                  childPulsate: mn(i.childPulsate, xs.childPulsate)
              },
              timeout: 550,
              pulsate: t,
              rippleX: n,
              rippleY: r,
              rippleSize: o
          }, u.current) ])), u.current += 1, d.current = a;
      }), [ i ]), y = e__namespace.useCallback(((e = {}, t = {}, n = (() => {})) => {
          const {pulsate: r = !1, center: i = o || t.pulsate, fakeElement: a = !1} = t;
          if ("mousedown" === (null == e ? void 0 : e.type) && p.current) return void (p.current = !1);
          "touchstart" === (null == e ? void 0 : e.type) && (p.current = !0);
          const s = a ? null : m.current, l = s ? s.getBoundingClientRect() : {
              width: 0,
              height: 0,
              left: 0,
              top: 0
          };
          let c, u, d;
          if (i || void 0 === e || 0 === e.clientX && 0 === e.clientY || !e.clientX && !e.touches) c = Math.round(l.width / 2), 
          u = Math.round(l.height / 2); else {
              const {clientX: t, clientY: n} = e.touches && e.touches.length > 0 ? e.touches[0] : e;
              c = Math.round(t - l.left), u = Math.round(n - l.top);
          }
          if (i) d = Math.sqrt((2 * l.width ** 2 + l.height ** 2) / 3), d % 2 == 0 && (d += 1); else {
              const e = 2 * Math.max(Math.abs((s ? s.clientWidth : 0) - c), c) + 2, t = 2 * Math.max(Math.abs((s ? s.clientHeight : 0) - u), u) + 2;
              d = Math.sqrt(e ** 2 + t ** 2);
          }
          null != e && e.touches ? null === h.current && (h.current = () => {
              g({
                  pulsate: r,
                  rippleX: c,
                  rippleY: u,
                  rippleSize: d,
                  cb: n
              });
          }, f.start(80, (() => {
              h.current && (h.current(), h.current = null);
          }))) : g({
              pulsate: r,
              rippleX: c,
              rippleY: u,
              rippleSize: d,
              cb: n
          });
      }), [ o, g, f ]), b = e__namespace.useCallback((() => {
          y({}, {
              pulsate: !0
          });
      }), [ y ]), v = e__namespace.useCallback(((e, t) => {
          if (f.clear(), "touchend" === (null == e ? void 0 : e.type) && h.current) return h.current(), 
          h.current = null, void f.start(0, (() => {
              v(e, t);
          }));
          h.current = null, c((e => e.length > 0 ? e.slice(1) : e)), d.current = t;
      }), [ f ]);
      return e__namespace.useImperativeHandle(n, (() => ({
          pulsate: b,
          start: y,
          stop: v
      })), [ b, y, v ]), K.jsx(_s, Xt({
          className: mn(xs.root, i.root, a),
          ref: m
      }, s, {
          children: K.jsx(vs, {
              component: null,
              exit: !0,
              children: l
          })
      }));
  }));

  function Ps(e) {
      return nr("MuiButtonBase", e);
  }

  const Ms = rr("MuiButtonBase", [ "root", "disabled", "focusVisible" ]), Is = [ "action", "centerRipple", "children", "className", "component", "disabled", "disableRipple", "disableTouchRipple", "focusRipple", "focusVisibleClassName", "LinkComponent", "onBlur", "onClick", "onContextMenu", "onDragLeave", "onFocus", "onFocusVisible", "onKeyDown", "onKeyUp", "onMouseDown", "onMouseLeave", "onMouseUp", "onTouchEnd", "onTouchMove", "onTouchStart", "tabIndex", "TouchRippleProps", "touchRippleRef", "type" ], Bs = Ga("button", {
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
      [`&.${Ms.disabled}`]: {
          pointerEvents: "none",
          cursor: "default"
      },
      "@media print": {
          colorAdjust: "exact"
      }
  }), Fs = e__namespace.forwardRef((function(t, n) {
      const r = es({
          props: t,
          name: "MuiButtonBase"
      }), {action: o, centerRipple: i = !1, children: a, className: s, component: l = "button", disabled: c = !1, disableRipple: u = !1, disableTouchRipple: d = !1, focusRipple: p = !1, LinkComponent: f = "a", onBlur: h, onClick: m, onContextMenu: g, onDragLeave: y, onFocus: b, onFocusVisible: v, onKeyDown: x, onKeyUp: S, onMouseDown: w, onMouseLeave: C, onMouseUp: k, onTouchEnd: j, onTouchMove: R, onTouchStart: E, tabIndex: T = 0, TouchRippleProps: O, touchRippleRef: _, type: $} = r, A = Kt(r, Is), P = e__namespace.useRef(null), M = e__namespace.useRef(null), I = Mn(M, _), {isFocusVisibleRef: B, onFocus: F, onBlur: N, ref: L} = Xn(), [z, D] = e__namespace.useState(!1);
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
      function q(e, t, n = d) {
          return Pn((r => {
              t && t(r);
              return !n && M.current && M.current[e](r), !0;
          }));
      }
      e__namespace.useEffect((() => {
          z && p && !u && W && M.current.pulsate();
      }), [ u, p, z, W ]);
      const X = q("start", w), U = q("stop", g), G = q("stop", y), Y = q("stop", k), J = q("stop", (e => {
          z && e.preventDefault(), C && C(e);
      })), Z = q("start", E), Q = q("stop", j), ee = q("stop", R), te = q("stop", (e => {
          N(e), !1 === B.current && D(!1), h && h(e);
      }), !1), ne = Pn((e => {
          P.current || (P.current = e.currentTarget), F(e), !0 === B.current && (D(!0), v && v(e)), 
          b && b(e);
      })), re = () => {
          const e = P.current;
          return l && "button" !== l && !("A" === e.tagName && e.href);
      }, oe = e__namespace.useRef(!1), ie = Pn((e => {
          p && !oe.current && z && M.current && " " === e.key && (oe.current = !0, M.current.stop(e, (() => {
              M.current.start(e);
          }))), e.target === e.currentTarget && re() && " " === e.key && e.preventDefault(), 
          x && x(e), e.target === e.currentTarget && re() && "Enter" === e.key && !c && (e.preventDefault(), 
          m && m(e));
      })), ae = Pn((e => {
          p && " " === e.key && M.current && z && !e.defaultPrevented && (oe.current = !1, 
          M.current.stop(e, (() => {
              M.current.pulsate(e);
          }))), S && S(e), m && e.target === e.currentTarget && re() && " " === e.key && !e.defaultPrevented && m(e);
      }));
      let se = l;
      "button" === se && (A.href || A.to) && (se = f);
      const le = {};
      "button" === se ? (le.type = void 0 === $ ? "button" : $, le.disabled = c) : (A.href || A.to || (le.role = "button"), 
      c && (le["aria-disabled"] = c));
      const ce = Mn(n, L, P), ue = Xt({}, r, {
          centerRipple: i,
          component: l,
          disabled: c,
          disableRipple: u,
          disableTouchRipple: d,
          focusRipple: p,
          tabIndex: T,
          focusVisible: z
      }), de = (e => {
          const {disabled: t, focusVisible: n, focusVisibleClassName: r, classes: o} = e, i = Zn({
              root: [ "root", t && "disabled", n && "focusVisible" ]
          }, Ps, o);
          return n && r && (i.root += ` ${r}`), i;
      })(ue);
      return K.jsxs(Bs, Xt({
          as: se,
          className: mn(de.root, s),
          ownerState: ue,
          onBlur: te,
          onClick: m,
          onContextMenu: U,
          onFocus: ne,
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
          tabIndex: c ? -1 : T,
          type: $
      }, le, A, {
          children: [ a, H ? K.jsx(As, Xt({
              ref: I,
              center: i
          }, O)) : null ]
      }));
  }));

  function Ns(e) {
      return nr("MuiTabScrollButton", e);
  }

  const Ls = rr("MuiTabScrollButton", [ "root", "vertical", "horizontal", "disabled" ]), zs = [ "className", "slots", "slotProps", "direction", "orientation", "disabled" ], Ds = Ga(Fs, {
      name: "MuiTabScrollButton",
      slot: "Root",
      overridesResolver: (e, t) => {
          const {ownerState: n} = e;
          return [ t.root, n.orientation && t[n.orientation] ];
      }
  })((({ownerState: e}) => Xt({
      width: 40,
      flexShrink: 0,
      opacity: .8,
      [`&.${Ls.disabled}`]: {
          opacity: 0
      }
  }, "vertical" === e.orientation && {
      width: "100%",
      height: 40,
      "& svg": {
          transform: `rotate(${e.isRtl ? -90 : 90}deg)`
      }
  }))), Ws = e__namespace.forwardRef((function(e, t) {
      var n, r;
      const o = es({
          props: e,
          name: "MuiTabScrollButton"
      }), {className: i, slots: a = {}, slotProps: s = {}, direction: l} = o, c = Kt(o, zs), u = Xt({
          isRtl: ur()
      }, o), d = (e => {
          const {classes: t, orientation: n, disabled: r} = e;
          return Zn({
              root: [ "root", n, r && "disabled" ]
          }, Ns, t);
      })(u), p = null != (n = a.StartScrollButtonIcon) ? n : us, f = null != (r = a.EndScrollButtonIcon) ? r : ds, h = lr({
          elementType: p,
          externalSlotProps: s.startScrollButtonIcon,
          additionalProps: {
              fontSize: "small"
          },
          ownerState: u
      }), m = lr({
          elementType: f,
          externalSlotProps: s.endScrollButtonIcon,
          additionalProps: {
              fontSize: "small"
          },
          ownerState: u
      });
      return K.jsx(Ds, Xt({
          component: "div",
          className: mn(d.root, i),
          ref: t,
          role: null,
          ownerState: u,
          tabIndex: null
      }, c, {
          children: "left" === l ? K.jsx(p, Xt({}, h)) : K.jsx(f, Xt({}, m))
      }));
  }));

  function Vs(e) {
      return nr("MuiTabs", e);
  }

  const Hs = rr("MuiTabs", [ "root", "vertical", "flexContainer", "flexContainerVertical", "centered", "scroller", "fixed", "scrollableX", "scrollableY", "hideScrollbar", "scrollButtons", "scrollButtonsHideMobile", "indicator" ]), qs = [ "aria-label", "aria-labelledby", "action", "centered", "children", "className", "component", "allowScrollButtonsMobile", "indicatorColor", "onChange", "orientation", "ScrollButtonComponent", "scrollButtons", "selectionFollowsFocus", "slots", "slotProps", "TabIndicatorProps", "TabScrollButtonProps", "textColor", "value", "variant", "visibleScrollbar" ], Ks = (e, t) => e === t ? e.firstChild : t && t.nextElementSibling ? t.nextElementSibling : e.firstChild, Xs = (e, t) => e === t ? e.lastChild : t && t.previousElementSibling ? t.previousElementSibling : e.lastChild, Us = (e, t, n) => {
      let r = !1, o = n(e, t);
      for (;o; ) {
          if (o === e.firstChild) {
              if (r) return;
              r = !0;
          }
          const t = o.disabled || "true" === o.getAttribute("aria-disabled");
          if (o.hasAttribute("tabindex") && !t) return void o.focus();
          o = n(e, o);
      }
  }, Gs = Ga("div", {
      name: "MuiTabs",
      slot: "Root",
      overridesResolver: (e, t) => {
          const {ownerState: n} = e;
          return [ {
              [`& .${Hs.scrollButtons}`]: t.scrollButtons
          }, {
              [`& .${Hs.scrollButtons}`]: n.scrollButtonsHideMobile && t.scrollButtonsHideMobile
          }, t.root, n.vertical && t.vertical ];
      }
  })((({ownerState: e, theme: t}) => Xt({
      overflow: "hidden",
      minHeight: 48,
      WebkitOverflowScrolling: "touch",
      display: "flex"
  }, e.vertical && {
      flexDirection: "column"
  }, e.scrollButtonsHideMobile && {
      [`& .${Hs.scrollButtons}`]: {
          [t.breakpoints.down("sm")]: {
              display: "none"
          }
      }
  }))), Ys = Ga("div", {
      name: "MuiTabs",
      slot: "Scroller",
      overridesResolver: (e, t) => {
          const {ownerState: n} = e;
          return [ t.scroller, n.fixed && t.fixed, n.hideScrollbar && t.hideScrollbar, n.scrollableX && t.scrollableX, n.scrollableY && t.scrollableY ];
      }
  })((({ownerState: e}) => Xt({
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
  }))), Js = Ga("div", {
      name: "MuiTabs",
      slot: "FlexContainer",
      overridesResolver: (e, t) => {
          const {ownerState: n} = e;
          return [ t.flexContainer, n.vertical && t.flexContainerVertical, n.centered && t.centered ];
      }
  })((({ownerState: e}) => Xt({
      display: "flex"
  }, e.vertical && {
      flexDirection: "column"
  }, e.centered && {
      justifyContent: "center"
  }))), Zs = Ga("span", {
      name: "MuiTabs",
      slot: "Indicator",
      overridesResolver: (e, t) => t.indicator
  })((({ownerState: e, theme: t}) => Xt({
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
  }))), Qs = Ga((function(t) {
      const {onChange: n} = t, r = Kt(t, ls), o = e__namespace.useRef(), i = e__namespace.useRef(null), a = () => {
          o.current = i.current.offsetHeight - i.current.clientHeight;
      };
      return An((() => {
          const e = On((() => {
              const e = o.current;
              a(), e !== o.current && n(o.current);
          })), t = $n(i.current);
          return t.addEventListener("resize", e), () => {
              e.clear(), t.removeEventListener("resize", e);
          };
      }), [ n ]), e__namespace.useEffect((() => {
          a(), n(o.current);
      }), [ n ]), K.jsx("div", Xt({
          style: cs,
          ref: i
      }, r));
  }))({
      overflowX: "auto",
      overflowY: "hidden",
      scrollbarWidth: "none",
      "&::-webkit-scrollbar": {
          display: "none"
      }
  }), el = {}, tl = e__namespace.forwardRef((function(t, n) {
      const r = es({
          props: t,
          name: "MuiTabs"
      }), o = function() {
          const e = Qa(Xa);
          return e[Ua] || e;
      }(), i = ur(), {"aria-label": a, "aria-labelledby": s, action: l, centered: c = !1, children: u, className: d, component: p = "div", allowScrollButtonsMobile: f = !1, indicatorColor: h = "primary", onChange: m, orientation: g = "horizontal", ScrollButtonComponent: y = Ws, scrollButtons: b = "auto", selectionFollowsFocus: v, slots: x = {}, slotProps: S = {}, TabIndicatorProps: w = {}, TabScrollButtonProps: C = {}, textColor: k = "primary", value: j, variant: R = "standard", visibleScrollbar: E = !1} = r, T = Kt(r, qs), O = "scrollable" === R, _ = "vertical" === g, $ = _ ? "scrollTop" : "scrollLeft", A = _ ? "top" : "left", P = _ ? "bottom" : "right", M = _ ? "clientHeight" : "clientWidth", I = _ ? "height" : "width", B = Xt({}, r, {
          component: p,
          allowScrollButtonsMobile: f,
          indicatorColor: h,
          orientation: g,
          vertical: _,
          scrollButtons: b,
          textColor: k,
          variant: R,
          visibleScrollbar: E,
          fixed: !O,
          hideScrollbar: O && !E,
          scrollableX: O && !_,
          scrollableY: O && _,
          centered: c && !O,
          scrollButtonsHideMobile: !f
      }), F = (e => {
          const {vertical: t, fixed: n, hideScrollbar: r, scrollableX: o, scrollableY: i, centered: a, scrollButtonsHideMobile: s, classes: l} = e;
          return Zn({
              root: [ "root", t && "vertical" ],
              scroller: [ "scroller", n && "fixed", r && "hideScrollbar", o && "scrollableX", i && "scrollableY" ],
              flexContainer: [ "flexContainer", t && "flexContainerVertical", a && "centered" ],
              indicator: [ "indicator" ],
              scrollButtons: [ "scrollButtons", s && "scrollButtonsHideMobile" ],
              scrollableX: [ o && "scrollableX" ],
              hideScrollbar: [ r && "hideScrollbar" ]
          }, Vs, l);
      })(B), N = lr({
          elementType: x.StartScrollButtonIcon,
          externalSlotProps: S.startScrollButtonIcon,
          ownerState: B
      }), L = lr({
          elementType: x.EndScrollButtonIcon,
          externalSlotProps: S.endScrollButtonIcon,
          ownerState: B
      }), [z, D] = e__namespace.useState(!1), [W, V] = e__namespace.useState(el), [H, q] = e__namespace.useState(!1), [X, U] = e__namespace.useState(!1), [G, Y] = e__namespace.useState(!1), [J, Z] = e__namespace.useState({
          overflow: "hidden",
          scrollbarWidth: 0
      }), Q = new Map, ee = e__namespace.useRef(null), te = e__namespace.useRef(null), ne = () => {
          const e = ee.current;
          let t, n;
          if (e) {
              const n = e.getBoundingClientRect();
              t = {
                  clientWidth: e.clientWidth,
                  scrollLeft: e.scrollLeft,
                  scrollTop: e.scrollTop,
                  scrollLeftNormalized: Yn(e, i ? "rtl" : "ltr"),
                  scrollWidth: e.scrollWidth,
                  top: n.top,
                  bottom: n.bottom,
                  left: n.left,
                  right: n.right
              };
          }
          if (e && !1 !== j) {
              const e = te.current.children;
              if (e.length > 0) {
                  const t = e[Q.get(j)];
                  n = t ? t.getBoundingClientRect() : null;
              }
          }
          return {
              tabsMeta: t,
              tabMeta: n
          };
      }, re = Pn((() => {
          const {tabsMeta: e, tabMeta: t} = ne();
          let n, r = 0;
          if (_) n = "top", t && e && (r = t.top - e.top + e.scrollTop); else if (n = i ? "right" : "left", 
          t && e) {
              const o = i ? e.scrollLeftNormalized + e.clientWidth - e.scrollWidth : e.scrollLeft;
              r = (i ? -1 : 1) * (t[n] - e[n] + o);
          }
          const o = {
              [n]: r,
              [I]: t ? t[I] : 0
          };
          if (isNaN(W[n]) || isNaN(W[I])) V(o); else {
              const e = Math.abs(W[n] - o[n]), t = Math.abs(W[I] - o[I]);
              (e >= 1 || t >= 1) && V(o);
          }
      })), oe = (e, {animation: t = !0} = {}) => {
          t ? function(e, t, n, r = {}, o = (() => {})) {
              const {ease: i = ns, duration: a = 300} = r;
              let s = null;
              const l = t[e];
              const d = r => {
                  null === s && (s = r);
                  const u = Math.min(1, (r - s) / a);
                  t[e] = i(u) * (n - l) + l, u >= 1 ? requestAnimationFrame((() => {
                      o(null);
                  })) : requestAnimationFrame(d);
              };
              l === n ? o(new Error("Element already at target position")) : requestAnimationFrame(d);
          }($, ee.current, e, {
              duration: o.transitions.duration.standard
          }) : ee.current[$] = e;
      }, ie = e => {
          let t = ee.current[$];
          _ ? t += e : (t += e * (i ? -1 : 1), t *= i && "reverse" === Gn() ? -1 : 1), oe(t);
      }, ae = () => {
          const e = ee.current[M];
          let t = 0;
          const n = Array.from(te.current.children);
          for (let r = 0; r < n.length; r += 1) {
              const o = n[r];
              if (t + o[M] > e) {
                  0 === r && (t = e);
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
      }), []), ue = Pn((e => {
          const {tabsMeta: t, tabMeta: n} = ne();
          if (n && t) if (n[A] < t[A]) {
              const r = t[$] + (n[A] - t[A]);
              oe(r, {
                  animation: e
              });
          } else if (n[P] > t[P]) {
              const r = t[$] + (n[P] - t[P]);
              oe(r, {
                  animation: e
              });
          }
      })), de = Pn((() => {
          O && !1 !== b && Y(!G);
      }));
      e__namespace.useEffect((() => {
          const e = On((() => {
              ee.current && re();
          }));
          let t;
          const n = n => {
              n.forEach((e => {
                  e.removedNodes.forEach((e => {
                      var n;
                      null == (n = t) || n.unobserve(e);
                  })), e.addedNodes.forEach((e => {
                      var n;
                      null == (n = t) || n.observe(e);
                  }));
              })), e(), de();
          }, r = $n(ee.current);
          let o;
          return r.addEventListener("resize", e), "undefined" != typeof ResizeObserver && (t = new ResizeObserver(e), 
          Array.from(te.current.children).forEach((e => {
              t.observe(e);
          }))), "undefined" != typeof MutationObserver && (o = new MutationObserver(n), o.observe(te.current, {
              childList: !0
          })), () => {
              var n, i;
              e.clear(), r.removeEventListener("resize", e), null == (n = o) || n.disconnect(), 
              null == (i = t) || i.disconnect();
          };
      }), [ re, de ]), e__namespace.useEffect((() => {
          const e = Array.from(te.current.children), t = e.length;
          if ("undefined" != typeof IntersectionObserver && t > 0 && O && !1 !== b) {
              const n = e[0], r = e[t - 1], o = {
                  root: ee.current,
                  threshold: .99
              }, i = new IntersectionObserver((e => {
                  q(!e[0].isIntersecting);
              }), o);
              i.observe(n);
              const a = new IntersectionObserver((e => {
                  U(!e[0].isIntersecting);
              }), o);
              return a.observe(r), () => {
                  i.disconnect(), a.disconnect();
              };
          }
      }), [ O, b, G, null == u ? void 0 : u.length ]), e__namespace.useEffect((() => {
          D(!0);
      }), []), e__namespace.useEffect((() => {
          re();
      })), e__namespace.useEffect((() => {
          ue(el !== W);
      }), [ ue, W ]), e__namespace.useImperativeHandle(l, (() => ({
          updateIndicator: re,
          updateScrollButtons: de
      })), [ re, de ]);
      const pe = K.jsx(Zs, Xt({}, w, {
          className: mn(F.indicator, w.className),
          ownerState: B,
          style: Xt({}, W, w.style)
      }));
      let fe = 0;
      const he = e__namespace.Children.map(u, (t => {
          if (!e__namespace.isValidElement(t)) return null;
          const n = void 0 === t.props.value ? fe : t.props.value;
          Q.set(n, fe);
          const r = n === j;
          return fe += 1, e__namespace.cloneElement(t, Xt({
              fullWidth: "fullWidth" === R,
              indicator: r && !z && pe,
              selected: r,
              selectionFollowsFocus: v,
              onChange: m,
              textColor: k,
              value: n
          }, 1 !== fe || !1 !== j || t.props.tabIndex ? {} : {
              tabIndex: 0
          }));
      })), me = (() => {
          const e = {};
          e.scrollbarSizeListener = O ? K.jsx(Qs, {
              onChange: ce,
              className: mn(F.scrollableX, F.hideScrollbar)
          }) : null;
          const t = O && ("auto" === b && (H || X) || !0 === b);
          return e.scrollButtonStart = t ? K.jsx(y, Xt({
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
              className: mn(F.scrollButtons, C.className)
          })) : null, e.scrollButtonEnd = t ? K.jsx(y, Xt({
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
              className: mn(F.scrollButtons, C.className)
          })) : null, e;
      })();
      return K.jsxs(Gs, Xt({
          className: mn(F.root, d),
          ownerState: B,
          ref: n,
          as: p
      }, T, {
          children: [ me.scrollButtonStart, me.scrollbarSizeListener, K.jsxs(Ys, {
              className: F.scroller,
              ownerState: B,
              style: {
                  overflow: J.overflow,
                  [_ ? "margin" + (i ? "Left" : "Right") : "marginBottom"]: E ? void 0 : -J.scrollbarWidth
              },
              ref: ee,
              children: [ K.jsx(Js, {
                  "aria-label": a,
                  "aria-labelledby": s,
                  "aria-orientation": "vertical" === g ? "vertical" : null,
                  className: F.flexContainer,
                  ownerState: B,
                  onKeyDown: e => {
                      const t = te.current, n = _n(t).activeElement;
                      if ("tab" !== n.getAttribute("role")) return;
                      let r = "horizontal" === g ? "ArrowLeft" : "ArrowUp", o = "horizontal" === g ? "ArrowRight" : "ArrowDown";
                      switch ("horizontal" === g && i && (r = "ArrowRight", o = "ArrowLeft"), e.key) {
                        case r:
                          e.preventDefault(), Us(t, n, Xs);
                          break;

                        case o:
                          e.preventDefault(), Us(t, n, Ks);
                          break;

                        case "Home":
                          e.preventDefault(), Us(t, null, Ks);
                          break;

                        case "End":
                          e.preventDefault(), Us(t, null, Xs);
                      }
                  },
                  ref: te,
                  role: "tablist",
                  children: he
              }), z && pe ]
          }), me.scrollButtonEnd ]
      }));
  }));

  function nl(e) {
      return nr("MuiTab", e);
  }

  const rl = rr("MuiTab", [ "root", "labelIcon", "textColorInherit", "textColorPrimary", "textColorSecondary", "selected", "disabled", "fullWidth", "wrapped", "iconWrapper" ]), ol = [ "className", "disabled", "disableFocusRipple", "fullWidth", "icon", "iconPosition", "indicator", "label", "onChange", "onClick", "onFocus", "selected", "selectionFollowsFocus", "textColor", "value", "wrapped" ], il = Ga(Fs, {
      name: "MuiTab",
      slot: "Root",
      overridesResolver: (e, t) => {
          const {ownerState: n} = e;
          return [ t.root, n.label && n.icon && t.labelIcon, t[`textColor${En(n.textColor)}`], n.fullWidth && t.fullWidth, n.wrapped && t.wrapped ];
      }
  })((({theme: e, ownerState: t}) => Xt({}, e.typography.button, {
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
      [`& > .${rl.iconWrapper}`]: Xt({}, "top" === t.iconPosition && {
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
      [`&.${rl.selected}`]: {
          opacity: 1
      },
      [`&.${rl.disabled}`]: {
          opacity: (e.vars || e).palette.action.disabledOpacity
      }
  }, "primary" === t.textColor && {
      color: (e.vars || e).palette.text.secondary,
      [`&.${rl.selected}`]: {
          color: (e.vars || e).palette.primary.main
      },
      [`&.${rl.disabled}`]: {
          color: (e.vars || e).palette.text.disabled
      }
  }, "secondary" === t.textColor && {
      color: (e.vars || e).palette.text.secondary,
      [`&.${rl.selected}`]: {
          color: (e.vars || e).palette.secondary.main
      },
      [`&.${rl.disabled}`]: {
          color: (e.vars || e).palette.text.disabled
      }
  }, t.fullWidth && {
      flexShrink: 1,
      flexGrow: 1,
      flexBasis: 0,
      maxWidth: "none"
  }, t.wrapped && {
      fontSize: e.typography.pxToRem(12)
  }))), al = e__namespace.forwardRef((function(t, n) {
      const r = es({
          props: t,
          name: "MuiTab"
      }), {className: o, disabled: i = !1, disableFocusRipple: a = !1, fullWidth: s, icon: l, iconPosition: c = "top", indicator: u, label: d, onChange: p, onClick: f, onFocus: h, selected: m, selectionFollowsFocus: g, textColor: y = "inherit", value: b, wrapped: v = !1} = r, x = Kt(r, ol), S = Xt({}, r, {
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
          const {classes: t, textColor: n, fullWidth: r, wrapped: o, icon: i, label: a, selected: s, disabled: l} = e;
          return Zn({
              root: [ "root", i && a && "labelIcon", `textColor${En(n)}`, r && "fullWidth", o && "wrapped", s && "selected", l && "disabled" ],
              iconWrapper: [ "iconWrapper" ]
          }, nl, t);
      })(S), C = l && d && e__namespace.isValidElement(l) ? e__namespace.cloneElement(l, {
          className: mn(w.iconWrapper, l.props.className)
      }) : l;
      return K.jsxs(il, Xt({
          focusRipple: !a,
          className: mn(w.root, o),
          ref: n,
          role: "tab",
          "aria-selected": m,
          disabled: i,
          onClick: e => {
              !m && p && p(e, b), f && f(e);
          },
          onFocus: e => {
              g && !m && p && p(e, b), h && h(e);
          },
          ownerState: S,
          tabIndex: m ? 0 : -1
      }, x, {
          children: [ "top" === c || "start" === c ? K.jsxs(e__namespace.Fragment, {
              children: [ C, d ]
          }) : K.jsxs(e__namespace.Fragment, {
              children: [ d, C ]
          }), u ]
      }));
  })), sl = rr("MuiBox", [ "root" ]), ll = Ka(), cl = function(t = {}) {
      const {themeId: n, defaultTheme: r, defaultClassName: o = "MuiBox-root", generateClassName: i} = t, a = So("div", {
          shouldForwardProp: e => "theme" !== e && "sx" !== e && "as" !== e
      })(Ri);
      return e__namespace.forwardRef((function(e, t) {
          const s = Qa(r), l = Pi(e), {className: c, component: u = "div"} = l, d = Kt(l, ts);
          return K.jsx(a, Xt({
              as: u,
              ref: t,
              className: mn(c, i ? i(o) : o),
              theme: n && s[n] || s
          }, d));
      }));
  }({
      themeId: Ua,
      defaultTheme: ll,
      defaultClassName: sl.root,
      generateClassName: er.generate
  });

  function ul() {
      const {logItems: e$1} = Ue(), t = e.useRef(null);
      return e.useEffect((() => {
          t.current && t.current.scrollIntoView({
              behavior: "smooth"
          });
      }), [ e$1 ]), K.jsxs(material.List, {
          dense: !0,
          sx: {},
          children: [ e$1.map(((e, t) => K.jsx(material.ListItem, {
              children: K.jsx(material.ListItemText, {
                  primary: e,
                  sx: {
                      typography: "overline",
                      lineHeight: "normal",
                      px: 0,
                      my: 0
                  },
                  disableTypography: !0
              })
          }, t))), K.jsx("div", {
              ref: t
          }) ]
      });
  }

  const dl = ({value: e$1, min: t = 0, max: n = 1 / 0, step: o = 1, decimalScale: i = 0, unit: a, singularUnit: s, helperText: l, textAlign: d = "center", hideActionButtons: p = !1, onChange: f, ...h}) => {
      var w, C;
      const [k, j] = e.useState(null == e$1 ? void 0 : e$1.toString()), R = Math.max(...[ t, n, o ].map((e => (e % 1 || 0).toString().length - 2)), 0), E = i > 0 || R > 0;
      i = i > 0 ? i : R;
      const T = fl(t, n, E), O = e => pl(e, t, n, i), _ = O(k).toString() === k && void 0 !== e$1 ? O(e$1).toString() : k, $ = e => {
          j(e);
          const t = O(e);
          t.toString() === e && (null == f || f(t));
      }, A = e => () => $(O(O(_) + e).toString());
      h ?? (h = {}), h.inputProps ?? (h.inputProps = {}), (w = h.inputProps).style ?? (w.style = {}), 
      (C = h.inputProps.style).textAlign ?? (C.textAlign = d), h.placeholder ?? (h.placeholder = Math.min(n, Math.max(t, 0)).toString());
      const P = hl(h);
      return p = p || h.readOnly || !1, s ?? (s = a), a ?? (a = s), K.jsx(material.Box, {
          children: K.jsxs(material.FormControl, {
              ...P,
              variant: "outlined",
              children: [ K.jsx(material.InputLabel, {
                  shrink: !0,
                  htmlFor: "number-input",
                  children: h.label
              }), K.jsx(material.OutlinedInput, {
                  notched: !0,
                  error: h.error || Number(k) < t || Number(k) > n,
                  ...h,
                  value: _,
                  id: "number-input",
                  onChange: e => $(e.target.value),
                  onBlur: e => $(O(e.target.value).toString()),
                  onKeyDown: e => {
                      const r = (e => {
                          if (e.ctrlKey || e.shiftKey || e.altKey) return;
                          if ("ArrowUp" === e.key) return void A(o)();
                          if ("ArrowDown" === e.key) return void A(-o)();
                          const t = e.key;
                          if (t.length > 1) return;
                          const n = t.charCodeAt(0);
                          return n < 32 || n > 126 && n < 160 || n > 255 ? void 0 : t;
                      })(e);
                      if (!r) return;
                      const i = e.target;
                      if (null == i.selectionStart || null == i.selectionEnd) return;
                      const a = i.value.substring(0, i.selectionStart) + r + i.value.substring(i.selectionEnd);
                      a.match(T) ? (Number(a) < t || Number(a) > n) && e.preventDefault() : e.preventDefault();
                  },
                  onPaste: e => {
                      var r;
                      const o = null == (r = e.clipboardData) ? void 0 : r.getData("Text");
                      (null == o ? void 0 : o.trim().match(T)) ? (Number(!(null == o ? void 0 : o.trim())) < t || Number(!(null == o ? void 0 : o.trim())) > n) && e.preventDefault() : e.preventDefault();
                  },
                  startAdornment: p ? void 0 : K.jsx(material.InputAdornment, {
                      position: "start",
                      children: K.jsx(material.IconButton, {
                          "aria-label": "decrease value",
                          onClick: A(-o),
                          edge: "start",
                          disabled: h.disabled || O(_) <= t,
                          children: K.jsx(material.Icon, {
                              children: "do_not_disturb_on"
                          })
                      })
                  }),
                  endAdornment: (a || !p) && K.jsxs(material.InputAdornment, {
                      position: "end",
                      children: [ a && K.jsx(material.Typography, {
                          className: "cursor-default select-none",
                          children: 1 === O(_) ? s : a
                      }), !p && K.jsx(material.IconButton, {
                          "aria-label": "increase value",
                          onClick: A(o),
                          edge: "end",
                          disabled: h.disabled || O(_) >= n,
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
                          children: K.jsx(material.Icon, {
                              children: "add_circle"
                          })
                      }) ]
                  })
              }), l && K.jsx(material.FormHelperText, {
                  children: l
              }) ]
          })
      });
  }, pl = (e, t = -1 / 0, n = 1 / 0, r = 0) => {
      let o = "number" == typeof e ? e : Number(e);
      return o = Math.min(n, Math.max(t, isNaN(o) ? 0 : o)), Number(o.toFixed(r));
  }, fl = (e, t, n) => {
      let r = "^";
      return r += t < 0 ? "-[0-9]*" : e > 0 ? "[0-9]+" : "-?[0-9]*", n && (r += "(\\.[0-9]*)?"), 
      r += "$", new RegExp(r);
  }, hl = e => ({
      color: e.color,
      disabled: e.disabled,
      error: e.error,
      fullWidth: e.fullWidth,
      required: e.required,
      variant: e.variant
  });

  function ml() {
      const {standbyTime: e, setStandbyTime: t} = Ge(), {replyCountTimes: n, setReplyCountTimes: r} = Ge();
      Ge();
      return Ge((e => e._hasHydrated)) ? K.jsxs(material.List, {
          sx: {},
          children: [ K.jsx(material.ListItem, {
              sx: {
                  pt: 3
              },
              children: K.jsx(dl, {
                  label: "评论数量",
                  min: 1,
                  max: 10,
                  value: n,
                  onChange: r,
                  size: "small",
                  style: {
                      width: 130
                  }
              })
          }), K.jsx(material.ListItem, {
              sx: {
                  pt: 3
              },
              children: K.jsx(dl, {
                  label: "间隔时间（ms）",
                  min: 100,
                  max: 1e4,
                  value: e,
                  step: 100,
                  onChange: t,
                  size: "small",
                  style: {
                      width: 200
                  }
              })
          }), K.jsx(material.ListItem, {
              sx: {
                  pt: 3
              }
          }) ]
      }) : K.jsx("p", {
          children: "Loading..."
      });
  }

  function gl() {
      return K.jsxs(K.Fragment, {
          children: [ K.jsx(material.Typography, {
              variant: "body1",
              gutterBottom: !0,
              children: "本脚本用于自动化学习通讨论区的评论操作。"
          }), K.jsxs(material.Typography, {
              variant: "body2",
              gutterBottom: !0,
              children: [ "作者：", K.jsx("a", {
                  href: "http://github.com/lcandy2",
                  target: "_blank",
                  children: "@lcandy2"
              }) ]
          }) ]
      });
  }

  function yl(e) {
      const {children: t, value: n, index: r, ...o} = e;
      return K.jsx("div", {
          role: "tabpanel",
          hidden: n !== r,
          id: `cx-auto-tabpanel-${r}`,
          "aria-labelledby": `cx-auto-tab-${r}`,
          ...o,
          children: n === r && K.jsx(cl, {
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

  function bl(e) {
      return {
          id: `cx-auto-tab-${e}`,
          "aria-controls": `cx-auto-tabpanel-${e}`
      };
  }

  function vl() {
      const [e$1, t] = e.useState(0), {isInActionFrame: n} = Ye();
      return K.jsxs(cl, {
          sx: {
              width: "100%"
          },
          children: [ !n && K.jsx(cl, {
              sx: {
                  borderBottom: 1,
                  borderColor: "divider"
              },
              children: K.jsxs(tl, {
                  value: e$1,
                  onChange: (e, n) => {
                      t(n);
                  },
                  "aria-label": "basic tabs example",
                  children: [ K.jsx(al, {
                      disabled: n,
                      label: "状态",
                      ...bl(0)
                  }), K.jsx(al, {
                      disabled: n,
                      label: "设定",
                      ...bl(1)
                  }), K.jsx(al, {
                      disabled: n,
                      label: "关于",
                      ...bl(2)
                  }) ]
              })
          }), K.jsx(yl, {
              value: e$1,
              index: 0,
              children: K.jsx(ul, {})
          }), !n && K.jsxs(K.Fragment, {
              children: [ K.jsx(yl, {
                  value: e$1,
                  index: 1,
                  children: K.jsx(ml, {})
              }), K.jsx(yl, {
                  value: e$1,
                  index: 2,
                  children: K.jsx(gl, {})
              }) ]
          }) ]
      });
  }

  function xl({title: e$1, canBeClosed: n = !0, handleClose: o, actions: i, draggableProps: a, dialogProps: s, maxWidth: l, children: u}) {
      const [d, p] = e.useState(!0), f = e.useRef(null);
      return d && K.jsx(P, {
          handle: "#draggable-dialog-title",
          cancel: '[class*="MuiDialogContent-root"]',
          nodeRef: f,
          ...a,
          children: K.jsx("div", {
              className: "floating-overlay",
              ref: f,
              children: K.jsxs(material.Dialog, {
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
                  children: [ K.jsx(material.DialogTitle, {
                      style: {
                          cursor: "move"
                      },
                      id: "draggable-dialog-title",
                      children: e$1
                  }), n && K.jsx(material.IconButton, {
                      "aria-label": "close",
                      onClick: () => {
                          p(!1), o && o();
                      },
                      sx: {
                          position: "absolute",
                          right: 8,
                          top: 8,
                          color: e => e.palette.grey[500]
                      },
                      children: K.jsx(material.Icon, {
                          children: "close"
                      })
                  }), K.jsx(material.DialogContent, {
                      dividers: !0,
                      sx: {
                          p: 0
                      },
                      children: K.jsx(material.DialogContentText, {
                          component: "div",
                          children: u
                      })
                  }), i && K.jsx(material.DialogActions, {
                      children: i
                  }) ]
              })
          })
      });
  }

  function Sl() {
      const [e$1, n] = e.useState(!0);
      e.useRef(null);
      const {isInActionFrame: o, actionFrameStatus: i, setCurrentStatus: a, setCurrentPage: s} = Ye(), l = i.src;
      return e$1 && K.jsxs(K.Fragment, {
          children: [ K.jsx(xl, {
              title: "学习通自动化",
              actions: K.jsx(qt, {}),
              canBeClosed: !o,
              handleClose: () => {
                  n(!1), a(null), s(null);
              },
              children: K.jsx(vl, {})
          }), l && K.jsxs(xl, {
              title: "--执行讨论回复中--",
              canBeClosed: !1,
              draggableProps: {
                  positionOffset: {
                      x: "300px",
                      y: "30px"
                  }
              },
              maxWidth: "sm",
              children: [ K.jsx("iframe", {
                  id: "cxauto_action",
                  src: l,
                  width: "600",
                  height: "460"
              }), K.jsx("div", {
                  id: "cxauto_action"
              }) ]
          }) ]
      });
  }

  var wl = {}, Cl = M;

  wl.createRoot = Cl.createRoot, wl.hydrateRoot = Cl.hydrateRoot, console.log("Chaoxing auto start!!!"), 
  (ee() || te()) && (console.log("Topic Match"), wl.createRoot((() => {
      const e = document.createElement("div");
      return document.body.append(e), e;
  })()).render(K.jsx(e.StrictMode, {
      children: K.jsx(Sl, {})
  })));

})(React, MaterialUI, emotionStyled, emotionReact, ReactDraggable, ReactDOM);