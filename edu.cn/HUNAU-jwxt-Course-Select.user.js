// ==UserScript==
// @name         hunau-jwxt-course-select
// @namespace    https://github.com/lcandy2/hunau-jwxt-course-select
// @version      3.3.3
// @author       monkey
// @description  qiangzhi-course-select
// @license      None
// @icon         http://www.qzdatasoft.com/favicon.ico
// @match        *://*.edu.cn/*
// @require      https://registry.npmmirror.com/preact/10.19.3/files/dist/preact.min.js
// @run-at       document-start
// ==/UserScript==

(function (preact) {
    'use strict';

    var u, d, f, p, _ = 0, h = [], m = [], v = preact.options.__b, y = preact.options.__r, b = preact.options.diffed, x = preact.options.__c, g = preact.options.unmount;

    function N(n, t) {
        preact.options.__h && preact.options.__h(d, n, _ || t), _ = 0;
        var r = d.__H || (d.__H = {
            __: [],
            __h: []
        });
        return n >= r.__.length && r.__.push({
            __V: m
        }), r.__[n];
    }

    function k(e) {
        return _ = 1, E(F, e);
    }

    function E(e, n, t) {
        var r = N(u++, 2);
        if (r.t = e, !r.__c && (r.__ = [ t ? t(n) : F(void 0, n), function(e) {
            var n = r.__N ? r.__N[0] : r.__[0], t = r.t(n, e);
            n !== t && (r.__N = [ t, r.__[1] ], r.__c.setState({}));
        } ], r.__c = d, !d.u)) {
            var o = function(e, n, t) {
                if (!r.__c.__H) return !0;
                var o = r.__c.__H.__.filter((function(e) {
                    return e.__c;
                }));
                if (o.every((function(e) {
                    return !e.__N;
                }))) return !i || i.call(this, e, n, t);
                var a = !1;
                return o.forEach((function(e) {
                    if (e.__N) {
                        var n = e.__[0];
                        e.__ = e.__N, e.__N = void 0, n !== e.__[0] && (a = !0);
                    }
                })), !(!a && r.__c.props === e) && (!i || i.call(this, e, n, t));
            };
            d.u = !0;
            var i = d.shouldComponentUpdate, a = d.componentWillUpdate;
            d.componentWillUpdate = function(e, n, t) {
                if (this.__e) {
                    var r = i;
                    i = void 0, o(e, n, t), i = r;
                }
                a && a.call(this, e, n, t);
            }, d.shouldComponentUpdate = o;
        }
        return r.__N || r.__;
    }

    function w(n, t) {
        var r = N(u++, 3);
        !preact.options.__s && I(r.__H, t) && (r.__ = n, r.i = t, d.__H.__h.push(r));
    }

    function C(n, t) {
        var r = N(u++, 4);
        !preact.options.__s && I(r.__H, t) && (r.__ = n, r.i = t, d.__h.push(r));
    }

    function O(e) {
        return _ = 5, j((function() {
            return {
                current: e
            };
        }), []);
    }

    function j(e, n) {
        var t = N(u++, 7);
        return I(t.__H, n) ? (t.__V = e(), t.i = n, t.__h = e, t.__V) : t.__;
    }

    function P(e, n) {
        return _ = 8, j((function() {
            return e;
        }), n);
    }

    function $(e) {
        var n = d.context[e.__c], t = N(u++, 9);
        return t.c = e, n ? (null == t.__ && (t.__ = !0, n.sub(d)), n.props.value) : e.__;
    }

    function S() {
        for (var n; n = h.shift(); ) if (n.__P && n.__H) try {
            n.__H.__h.forEach(D), n.__H.__h.forEach(R), n.__H.__h = [];
        } catch (t) {
            n.__H.__h = [], preact.options.__e(t, n.__v);
        }
    }

    preact.options.__b = function(e) {
        d = null, v && v(e);
    }, preact.options.__r = function(e) {
        y && y(e), u = 0;
        var n = (d = e.__c).__H;
        n && (f === d ? (n.__h = [], d.__h = [], n.__.forEach((function(e) {
            e.__N && (e.__ = e.__N), e.__V = m, e.__N = e.i = void 0;
        }))) : (n.__h.forEach(D), n.__h.forEach(R), n.__h = [], u = 0)), f = d;
    }, preact.options.diffed = function(n) {
        b && b(n);
        var t = n.__c;
        t && t.__H && (t.__H.__h.length && (1 !== h.push(t) && p === preact.options.requestAnimationFrame || ((p = preact.options.requestAnimationFrame) || L)(S)), 
        t.__H.__.forEach((function(e) {
            e.i && (e.__H = e.i), e.__V !== m && (e.__ = e.__V), e.i = void 0, e.__V = m;
        }))), f = d = null;
    }, preact.options.__c = function(n, t) {
        t.some((function(n) {
            try {
                n.__h.forEach(D), n.__h = n.__h.filter((function(e) {
                    return !e.__ || R(e);
                }));
            } catch (r) {
                t.some((function(e) {
                    e.__h && (e.__h = []);
                })), t = [], preact.options.__e(r, n.__v);
            }
        })), x && x(n, t);
    }, preact.options.unmount = function(n) {
        g && g(n);
        var t, r = n.__c;
        r && r.__H && (r.__H.__.forEach((function(e) {
            try {
                D(e);
            } catch (n) {
                t = n;
            }
        })), r.__H = void 0, t && preact.options.__e(t, r.__v));
    };

    var T = "function" == typeof requestAnimationFrame;

    function L(e) {
        var n, t = function() {
            clearTimeout(r), T && cancelAnimationFrame(n), setTimeout(e);
        }, r = setTimeout(t, 100);
        T && (n = requestAnimationFrame(t));
    }

    function D(e) {
        var n = d, t = e.__c;
        "function" == typeof t && (e.__c = void 0, t()), d = n;
    }

    function R(e) {
        var n = d;
        e.__c = e.__(), d = n;
    }

    function I(e, n) {
        return !e || e.length !== n.length || n.some((function(n, t) {
            return n !== e[t];
        }));
    }

    function F(e, n) {
        return "function" == typeof n ? n(e) : n;
    }

    function U(e) {
        return e && e.__esModule && Object.prototype.hasOwnProperty.call(e, "default") ? e.default : e;
    }

    var H, A = {
        exports: {}
    };

    H = A, function() {
        var e = {}.hasOwnProperty;
        function n() {
            for (var e = "", n = 0; n < arguments.length; n++) {
                var o = arguments[n];
                o && (e = r(e, t(o)));
            }
            return e;
        }
        function t(t) {
            if ("string" == typeof t || "number" == typeof t) return t;
            if ("object" != typeof t) return "";
            if (Array.isArray(t)) return n.apply(null, t);
            if (t.toString !== Object.prototype.toString && !t.toString.toString().includes("[native code]")) return t.toString();
            var o = "";
            for (var i in t) e.call(t, i) && t[i] && (o = r(o, i));
            return o;
        }
        function r(e, n) {
            return n ? e ? e + " " + n : e + n : e;
        }
        H.exports ? (n.default = n, H.exports = n) : window.classNames = n;
    }();

    const V = U(A.exports);

    function z(e, n) {
        for (var t in n) e[t] = n[t];
        return e;
    }

    function M(e, n) {
        for (var t in e) if ("__source" !== t && !(t in n)) return !0;
        for (var r in n) if ("__source" !== r && e[r] !== n[r]) return !0;
        return !1;
    }

    function B(e) {
        this.props = e;
    }

    (B.prototype = new preact.Component).isPureReactComponent = !0, B.prototype.shouldComponentUpdate = function(e, n) {
        return M(this.props, e) || M(this.state, n);
    };

    var G = preact.options.__b;

    preact.options.__b = function(e) {
        e.type && e.type.__f && e.ref && (e.props.ref = e.ref, e.ref = null), G && G(e);
    };

    var W = "undefined" != typeof Symbol && Symbol.for && Symbol.for("react.forward_ref") || 3911;

    function q(e) {
        function n(n) {
            var t = z({}, n);
            return delete t.ref, e(t, n.ref || null);
        }
        return n.$$typeof = W, n.render = n, n.prototype.isReactComponent = n.__f = !0, 
        n.displayName = "ForwardRef(" + (e.displayName || e.name) + ")", n;
    }

    var X = function(e, n) {
        return null == e ? null : preact.toChildArray(preact.toChildArray(e).map(n));
    }, K = {
        map: X,
        forEach: X,
        count: function(e) {
            return e ? preact.toChildArray(e).length : 0;
        },
        only: function(e) {
            var n = preact.toChildArray(e);
            if (1 !== n.length) throw "Children.only";
            return n[0];
        },
        toArray: preact.toChildArray
    }, Y = preact.options.__e;

    preact.options.__e = function(e, n, t, r) {
        if (e.then) for (var o, i = n; i = i.__; ) if ((o = i.__c) && o.__c) return null == n.__e && (n.__e = t.__e, 
        n.__k = t.__k), o.__c(e, n);
        Y(e, n, t, r);
    };

    var Z = preact.options.unmount;

    function J(e, n, t) {
        return e && (e.__c && e.__c.__H && (e.__c.__H.__.forEach((function(e) {
            "function" == typeof e.__c && e.__c();
        })), e.__c.__H = null), null != (e = z({}, e)).__c && (e.__c.__P === t && (e.__c.__P = n), 
        e.__c = null), e.__k = e.__k && e.__k.map((function(e) {
            return J(e, n, t);
        }))), e;
    }

    function Q(e, n, t) {
        return e && t && (e.__v = null, e.__k = e.__k && e.__k.map((function(e) {
            return Q(e, n, t);
        })), e.__c && e.__c.__P === n && (e.__e && t.appendChild(e.__e), e.__c.__e = !0, 
        e.__c.__P = t)), e;
    }

    function ee() {
        this.__u = 0, this.t = null, this.__b = null;
    }

    function ne(e) {
        var n = e.__.__c;
        return n && n.__a && n.__a(e);
    }

    function te() {
        this.u = null, this.o = null;
    }

    preact.options.unmount = function(e) {
        var n = e.__c;
        n && n.__R && n.__R(), n && 32 & e.__u && (e.type = null), Z && Z(e);
    }, (ee.prototype = new preact.Component).__c = function(e, n) {
        var t = n.__c, r = this;
        null == r.t && (r.t = []), r.t.push(t);
        var o = ne(r.__v), i = !1, a = function() {
            i || (i = !0, t.__R = null, o ? o(s) : s());
        };
        t.__R = a;
        var s = function() {
            if (! --r.__u) {
                if (r.state.__a) {
                    var e = r.state.__a;
                    r.__v.__k[0] = Q(e, e.__c.__P, e.__c.__O);
                }
                var n;
                for (r.setState({
                    __a: r.__b = null
                }); n = r.t.pop(); ) n.forceUpdate();
            }
        };
        r.__u++ || 32 & n.__u || r.setState({
            __a: r.__b = r.__v.__k[0]
        }), e.then(a, a);
    }, ee.prototype.componentWillUnmount = function() {
        this.t = [];
    }, ee.prototype.render = function(e, n) {
        if (this.__b) {
            if (this.__v.__k) {
                var o = document.createElement("div"), i = this.__v.__k[0].__c;
                this.__v.__k[0] = J(this.__b, o, i.__O = i.__P);
            }
            this.__b = null;
        }
        var a = n.__a && preact.createElement(preact.Fragment, null, e.fallback);
        return a && (a.__u &= -33), [ preact.createElement(preact.Fragment, null, n.__a ? null : e.children), a ];
    };

    var re = function(e, n, t) {
        if (++t[1] === t[0] && e.o.delete(n), e.props.revealOrder && ("t" !== e.props.revealOrder[0] || !e.o.size)) for (t = e.u; t; ) {
            for (;t.length > 3; ) t.pop()();
            if (t[1] < t[0]) break;
            e.u = t = t[2];
        }
    };

    function oe(e) {
        return this.getChildContext = function() {
            return e.context;
        }, e.children;
    }

    function ie(e) {
        var n = this, r = e.i;
        n.componentWillUnmount = function() {
            preact.render(null, n.l), n.l = null, n.i = null;
        }, n.i && n.i !== r && n.componentWillUnmount(), n.l || (n.i = r, n.l = {
            nodeType: 1,
            parentNode: r,
            childNodes: [],
            appendChild: function(e) {
                this.childNodes.push(e), n.i.appendChild(e);
            },
            insertBefore: function(e, t) {
                this.childNodes.push(e), n.i.appendChild(e);
            },
            removeChild: function(e) {
                this.childNodes.splice(this.childNodes.indexOf(e) >>> 1, 1), n.i.removeChild(e);
            }
        }), preact.render(preact.createElement(oe, {
            context: n.context
        }, e.__v), n.l);
    }

    (te.prototype = new preact.Component).__a = function(e) {
        var n = this, t = ne(n.__v), r = n.o.get(e);
        return r[0]++, function(o) {
            var i = function() {
                n.props.revealOrder ? (r.push(o), re(n, e, r)) : o();
            };
            t ? t(i) : i();
        };
    }, te.prototype.render = function(e) {
        this.u = null, this.o = new Map;
        var n = preact.toChildArray(e.children);
        e.revealOrder && "b" === e.revealOrder[0] && n.reverse();
        for (var t = n.length; t--; ) this.o.set(n[t], this.u = [ 1, 0, this.u ]);
        return e.children;
    }, te.prototype.componentDidUpdate = te.prototype.componentDidMount = function() {
        var e = this;
        this.o.forEach((function(n, t) {
            re(e, t, n);
        }));
    };

    var ae = "undefined" != typeof Symbol && Symbol.for && Symbol.for("react.element") || 60103, se = /^(?:accent|alignment|arabic|baseline|cap|clip(?!PathU)|color|dominant|fill|flood|font|glyph(?!R)|horiz|image(!S)|letter|lighting|marker(?!H|W|U)|overline|paint|pointer|shape|stop|strikethrough|stroke|text(?!L)|transform|underline|unicode|units|v|vector|vert|word|writing|x(?!C))[A-Z]/, ce = /^on(Ani|Tra|Tou|BeforeInp|Compo)/, le = /[A-Z0-9]/g, ue = "undefined" != typeof document, de = function(e) {
        return ("undefined" != typeof Symbol && "symbol" == typeof Symbol() ? /fil|che|rad/ : /fil|che|ra/).test(e);
    };

    preact.Component.prototype.isReactComponent = {}, [ "componentWillMount", "componentWillReceiveProps", "componentWillUpdate" ].forEach((function(e) {
        Object.defineProperty(preact.Component.prototype, e, {
            configurable: !0,
            get: function() {
                return this["UNSAFE_" + e];
            },
            set: function(n) {
                Object.defineProperty(this, e, {
                    configurable: !0,
                    writable: !0,
                    value: n
                });
            }
        });
    }));

    var fe = preact.options.event;

    function pe() {}

    function _e() {
        return this.cancelBubble;
    }

    function he() {
        return this.defaultPrevented;
    }

    preact.options.event = function(e) {
        return fe && (e = fe(e)), e.persist = pe, e.isPropagationStopped = _e, e.isDefaultPrevented = he, 
        e.nativeEvent = e;
    };

    var me, ve = {
        enumerable: !1,
        configurable: !0,
        get: function() {
            return this.class;
        }
    }, ye = preact.options.vnode;

    preact.options.vnode = function(e) {
        "string" == typeof e.type && function(e) {
            var n = e.props, t = e.type, r = {};
            for (var i in n) {
                var a = n[i];
                if (!("value" === i && "defaultValue" in n && null == a || ue && "children" === i && "noscript" === t || "class" === i || "className" === i)) {
                    var s = i.toLowerCase();
                    "defaultValue" === i && "value" in n && null == n.value ? i = "value" : "download" === i && !0 === a ? a = "" : "ondoubleclick" === s ? i = "ondblclick" : "onchange" !== s || "input" !== t && "textarea" !== t || de(n.type) ? "onfocus" === s ? i = "onfocusin" : "onblur" === s ? i = "onfocusout" : ce.test(i) ? i = s : -1 === t.indexOf("-") && se.test(i) ? i = i.replace(le, "-$&").toLowerCase() : null === a && (a = void 0) : s = i = "oninput", 
                    "oninput" === s && r[i = s] && (i = "oninputCapture"), r[i] = a;
                }
            }
            "select" == t && r.multiple && Array.isArray(r.value) && (r.value = preact.toChildArray(n.children).forEach((function(e) {
                e.props.selected = -1 != r.value.indexOf(e.props.value);
            }))), "select" == t && null != r.defaultValue && (r.value = preact.toChildArray(n.children).forEach((function(e) {
                e.props.selected = r.multiple ? -1 != r.defaultValue.indexOf(e.props.value) : r.defaultValue == e.props.value;
            }))), n.class && !n.className ? (r.class = n.class, Object.defineProperty(r, "className", ve)) : (n.className && !n.class || n.class && n.className) && (r.class = r.className = n.className), 
            e.props = r;
        }(e), e.$$typeof = ae, ye && ye(e);
    };

    var be = preact.options.__r;

    preact.options.__r = function(e) {
        be && be(e), me = e.__c;
    };

    var xe = preact.options.diffed;

    function ge(e) {
        return !!e && e.$$typeof === ae;
    }

    function Ne(e) {
        return ge(e) ? preact.cloneElement.apply(null, arguments) : e;
    }

    preact.options.diffed = function(e) {
        xe && xe(e);
        var n = e.props, t = e.__e;
        null != t && "textarea" === e.type && "value" in n && n.value !== t.value && (t.value = null == n.value ? "" : n.value), 
        me = null;
    };

    function ke(e) {
        e();
    }

    function Ee(e) {
        var n, t, r = e.v, o = e.__;
        try {
            var i = r();
            return !((n = o) === (t = i) && (0 !== n || 1 / n == 1 / t) || n != n && t != t);
        } catch (a) {
            return !0;
        }
    }

    var we = {
        useState: k,
        useId: function() {
            var e = N(u++, 11);
            if (!e.__) {
                for (var n = d.__v; null !== n && !n.__m && null !== n.__; ) n = n.__;
                var t = n.__m || (n.__m = [ 0, 0 ]);
                e.__ = "P" + t[0] + "-" + t[1]++;
            }
            return e.__;
        },
        useReducer: E,
        useEffect: w,
        useLayoutEffect: C,
        useInsertionEffect: C,
        useTransition: function() {
            return [ !1, ke ];
        },
        useDeferredValue: function(e) {
            return e;
        },
        useSyncExternalStore: function(e, n) {
            var t = n(), r = k({
                h: {
                    __: t,
                    v: n
                }
            }), o = r[0].h, i = r[1];
            return C((function() {
                o.__ = t, o.v = n, Ee(o) && i({
                    h: o
                });
            }), [ e, t, n ]), w((function() {
                return Ee(o) && i({
                    h: o
                }), e((function() {
                    Ee(o) && i({
                        h: o
                    });
                }));
            }), [ e ]), t;
        },
        startTransition: ke,
        useRef: O,
        useImperativeHandle: function(e, n, t) {
            _ = 6, C((function() {
                return "function" == typeof e ? (e(n()), function() {
                    return e(null);
                }) : e ? (e.current = n(), function() {
                    return e.current = null;
                }) : void 0;
            }), null == t ? t : t.concat(e));
        },
        useMemo: j,
        useCallback: P,
        useContext: $,
        useDebugValue: function(n, t) {
            preact.options.useDebugValue && preact.options.useDebugValue(t ? t(n) : n);
        },
        version: "17.0.2",
        Children: K,
        render: function(e, n, t) {
            return null == n.__k && (n.textContent = ""), preact.render(e, n), "function" == typeof t && t(), 
            e ? e.__c : null;
        },
        hydrate: function(e, n, t) {
            return preact.hydrate(e, n), "function" == typeof t && t(), e ? e.__c : null;
        },
        unmountComponentAtNode: function(e) {
            return !!e.__k && (preact.render(null, e), !0);
        },
        createPortal: function(e, n) {
            var r = preact.createElement(ie, {
                __v: e,
                i: n
            });
            return r.containerInfo = n, r;
        },
        createElement: preact.createElement,
        createContext: preact.createContext,
        createFactory: function(e) {
            return preact.createElement.bind(null, e);
        },
        cloneElement: Ne,
        createRef: preact.createRef,
        Fragment: preact.Fragment,
        isValidElement: ge,
        isElement: ge,
        isFragment: function(e) {
            return ge(e) && e.type === preact.Fragment;
        },
        findDOMNode: function(e) {
            return e && (e.base || 1 === e.nodeType && e) || null;
        },
        Component: preact.Component,
        PureComponent: B,
        memo: function(e, n) {
            function r(e) {
                var t = this.props.ref, r = t == e.ref;
                return !r && t && (t.call ? t(null) : t.current = null), n ? !n(this.props, e) || !r : M(this.props, e);
            }
            function o(n) {
                return this.shouldComponentUpdate = r, preact.createElement(e, n);
            }
            return o.displayName = "Memo(" + (e.displayName || e.name) + ")", o.prototype.isReactComponent = !0, 
            o.__f = !0, o;
        },
        forwardRef: q,
        flushSync: function(e, n) {
            return e(n);
        },
        unstable_batchedUpdates: function(e, n) {
            return e(n);
        },
        StrictMode: preact.Fragment,
        Suspense: ee,
        SuspenseList: te,
        lazy: function(e) {
            var n, r, o;
            function i(i) {
                if (n || (n = e()).then((function(e) {
                    r = e.default || e;
                }), (function(e) {
                    o = e;
                })), o) throw o;
                if (!r) throw n;
                return preact.createElement(r, i);
            }
            return i.displayName = "Lazy", i.__f = !0, i;
        },
        __SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED: {
            ReactCurrentDispatcher: {
                current: {
                    readContext: function(e) {
                        return me.__n[e.__c].props.value;
                    }
                }
            }
        }
    };

    function Ce() {
        return Ce = Object.assign ? Object.assign.bind() : function(e) {
            for (var n = 1; n < arguments.length; n++) {
                var t = arguments[n];
                for (var r in t) Object.prototype.hasOwnProperty.call(t, r) && (e[r] = t[r]);
            }
            return e;
        }, Ce.apply(this, arguments);
    }

    function Oe(e, n) {
        if (null == e) return {};
        var t, r, o = {}, i = Object.keys(e);
        for (r = 0; r < i.length; r++) t = i[r], n.indexOf(t) >= 0 || (o[t] = e[t]);
        return o;
    }

    function je(e) {
        return "default" + e.charAt(0).toUpperCase() + e.substr(1);
    }

    function Pe(e) {
        var n = function(e, n) {
            if ("object" != typeof e || null === e) return e;
            var t = e[Symbol.toPrimitive];
            if (void 0 !== t) {
                var r = t.call(e, n || "default");
                if ("object" != typeof r) return r;
                throw new TypeError("@@toPrimitive must return a primitive value.");
            }
            return ("string" === n ? String : Number)(e);
        }(e, "string");
        return "symbol" == typeof n ? n : String(n);
    }

    function $e(e, n) {
        return Object.keys(n).reduce((function(t, r) {
            var o, i = t, a = i[je(r)], s = i[r], c = Oe(i, [ je(r), r ].map(Pe)), l = n[r], u = function(e, n, t) {
                var r = O(void 0 !== e), o = k(n), i = o[0], a = o[1], s = void 0 !== e, c = r.current;
                return r.current = s, !s && c && i !== n && a(n), [ s ? e : i, P((function(e) {
                    for (var n = arguments.length, r = new Array(n > 1 ? n - 1 : 0), o = 1; o < n; o++) r[o - 1] = arguments[o];
                    t && t.apply(void 0, [ e ].concat(r)), a(e);
                }), [ t ]) ];
            }(s, a, e[l]), d = u[0], f = u[1];
            return Ce({}, c, ((o = {})[r] = d, o[l] = f, o));
        }), e);
    }

    function Se(e, n) {
        return (Se = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function(e, n) {
            return e.__proto__ = n, e;
        })(e, n);
    }

    var Te = 0;

    function Le(n, t, r, o, i, a) {
        var s, c, l = {};
        for (c in t) "ref" == c ? s = t[c] : l[c] = t[c];
        var u = {
            type: n,
            props: l,
            key: r,
            ref: s,
            __k: null,
            __: null,
            __b: 0,
            __e: null,
            __d: void 0,
            __c: null,
            constructor: void 0,
            __v: --Te,
            __i: -1,
            __u: 0,
            __source: i,
            __self: a
        };
        if ("function" == typeof n && (s = n.defaultProps)) for (c in s) void 0 === l[c] && (l[c] = s[c]);
        return preact.options.vnode && preact.options.vnode(u), u;
    }

    const De = preact.createContext({
        prefixes: {},
        breakpoints: [ "xxl", "xl", "lg", "md", "sm", "xs" ],
        minBreakpoint: "xs"
    });

    function Re(e, n) {
        const {prefixes: t} = $(De);
        return e || t[n] || n;
    }

    function Ie() {
        const {breakpoints: e} = $(De);
        return e;
    }

    function Fe() {
        const {minBreakpoint: e} = $(De);
        return e;
    }

    function Ue(e) {
        var n = function(e) {
            return e && e.ownerDocument || document;
        }(e);
        return n && n.defaultView || window;
    }

    var He = /([A-Z])/g;

    var Ae = /^ms-/;

    function Ve(e) {
        return function(e) {
            return e.replace(He, "-$1").toLowerCase();
        }(e).replace(Ae, "-ms-");
    }

    var ze = /^((translate|rotate|scale)(X|Y|Z|3d)?|matrix(3d)?|perspective|skew(X|Y)?)$/i;

    function Me(e, n) {
        var t = "", r = "";
        if ("string" == typeof n) return e.style.getPropertyValue(Ve(n)) || function(e, n) {
            return Ue(e).getComputedStyle(e, n);
        }(e).getPropertyValue(Ve(n));
        Object.keys(n).forEach((function(o) {
            var i = n[o];
            i || 0 === i ? !function(e) {
                return !(!e || !ze.test(e));
            }(o) ? t += Ve(o) + ": " + i + ";" : r += o + "(" + i + ") " : e.style.removeProperty(Ve(o));
        })), r && (t += "transform: " + r + ";"), e.style.cssText += ";" + t;
    }

    var Be = {
        exports: {}
    };

    function Ge() {}

    function We() {}

    We.resetWarningCache = Ge;

    Be.exports = function() {
        function e(e, n, t, r, o, i) {
            if ("SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED" !== i) {
                var a = new Error("Calling PropTypes validators directly is not supported by the `prop-types` package. Use PropTypes.checkPropTypes() to call them. Read more at http://fb.me/use-check-prop-types");
                throw a.name = "Invariant Violation", a;
            }
        }
        function n() {
            return e;
        }
        e.isRequired = e;
        var t = {
            array: e,
            bigint: e,
            bool: e,
            func: e,
            number: e,
            object: e,
            string: e,
            symbol: e,
            any: e,
            arrayOf: n,
            element: e,
            elementType: e,
            instanceOf: n,
            node: e,
            objectOf: n,
            oneOf: n,
            oneOfType: n,
            shape: n,
            exact: n,
            checkPropTypes: We,
            resetWarningCache: Ge
        };
        return t.PropTypes = t, t;
    }();

    const qe = U(Be.exports), Xe = !1, Ke = we.createContext(null);

    var Ye = "unmounted", Ze = "exited", Je = "entering", Qe = "entered", en = "exiting", nn = function(e) {
        var n, t;
        function r(n, t) {
            var r;
            r = e.call(this, n, t) || this;
            var o, i = t && !t.isMounting ? n.enter : n.appear;
            return r.appearStatus = null, n.in ? i ? (o = Ze, r.appearStatus = Je) : o = Qe : o = n.unmountOnExit || n.mountOnEnter ? Ye : Ze, 
            r.state = {
                status: o
            }, r.nextCallback = null, r;
        }
        t = e, (n = r).prototype = Object.create(t.prototype), n.prototype.constructor = n, 
        Se(n, t), r.getDerivedStateFromProps = function(e, n) {
            return e.in && n.status === Ye ? {
                status: Ze
            } : null;
        };
        var o = r.prototype;
        return o.componentDidMount = function() {
            this.updateStatus(!0, this.appearStatus);
        }, o.componentDidUpdate = function(e) {
            var n = null;
            if (e !== this.props) {
                var t = this.state.status;
                this.props.in ? t !== Je && t !== Qe && (n = Je) : t !== Je && t !== Qe || (n = en);
            }
            this.updateStatus(!1, n);
        }, o.componentWillUnmount = function() {
            this.cancelNextCallback();
        }, o.getTimeouts = function() {
            var e, n, t, r = this.props.timeout;
            return e = n = t = r, null != r && "number" != typeof r && (e = r.exit, n = r.enter, 
            t = void 0 !== r.appear ? r.appear : n), {
                exit: e,
                enter: n,
                appear: t
            };
        }, o.updateStatus = function(e, n) {
            if (void 0 === e && (e = !1), null !== n) if (this.cancelNextCallback(), n === Je) {
                if (this.props.unmountOnExit || this.props.mountOnEnter) {
                    var t = this.props.nodeRef ? this.props.nodeRef.current : we.findDOMNode(this);
                    t && function(e) {
                        e.scrollTop;
                    }(t);
                }
                this.performEnter(e);
            } else this.performExit(); else this.props.unmountOnExit && this.state.status === Ze && this.setState({
                status: Ye
            });
        }, o.performEnter = function(e) {
            var n = this, t = this.props.enter, r = this.context ? this.context.isMounting : e, o = this.props.nodeRef ? [ r ] : [ we.findDOMNode(this), r ], i = o[0], a = o[1], s = this.getTimeouts(), c = r ? s.appear : s.enter;
            !e && !t || Xe ? this.safeSetState({
                status: Qe
            }, (function() {
                n.props.onEntered(i);
            })) : (this.props.onEnter(i, a), this.safeSetState({
                status: Je
            }, (function() {
                n.props.onEntering(i, a), n.onTransitionEnd(c, (function() {
                    n.safeSetState({
                        status: Qe
                    }, (function() {
                        n.props.onEntered(i, a);
                    }));
                }));
            })));
        }, o.performExit = function() {
            var e = this, n = this.props.exit, t = this.getTimeouts(), r = this.props.nodeRef ? void 0 : we.findDOMNode(this);
            n && !Xe ? (this.props.onExit(r), this.safeSetState({
                status: en
            }, (function() {
                e.props.onExiting(r), e.onTransitionEnd(t.exit, (function() {
                    e.safeSetState({
                        status: Ze
                    }, (function() {
                        e.props.onExited(r);
                    }));
                }));
            }))) : this.safeSetState({
                status: Ze
            }, (function() {
                e.props.onExited(r);
            }));
        }, o.cancelNextCallback = function() {
            null !== this.nextCallback && (this.nextCallback.cancel(), this.nextCallback = null);
        }, o.safeSetState = function(e, n) {
            n = this.setNextCallback(n), this.setState(e, n);
        }, o.setNextCallback = function(e) {
            var n = this, t = !0;
            return this.nextCallback = function(r) {
                t && (t = !1, n.nextCallback = null, e(r));
            }, this.nextCallback.cancel = function() {
                t = !1;
            }, this.nextCallback;
        }, o.onTransitionEnd = function(e, n) {
            this.setNextCallback(n);
            var t = this.props.nodeRef ? this.props.nodeRef.current : we.findDOMNode(this), r = null == e && !this.props.addEndListener;
            if (t && !r) {
                if (this.props.addEndListener) {
                    var o = this.props.nodeRef ? [ this.nextCallback ] : [ t, this.nextCallback ], i = o[0], a = o[1];
                    this.props.addEndListener(i, a);
                }
                null != e && setTimeout(this.nextCallback, e);
            } else setTimeout(this.nextCallback, 0);
        }, o.render = function() {
            var e = this.state.status;
            if (e === Ye) return null;
            var n = this.props, t = n.children;
            n.in, n.mountOnEnter, n.unmountOnExit, n.appear, n.enter, n.exit, n.timeout, n.addEndListener, 
            n.onEnter, n.onEntering, n.onEntered, n.onExit, n.onExiting, n.onExited, n.nodeRef;
            var r = Oe(n, [ "children", "in", "mountOnEnter", "unmountOnExit", "appear", "enter", "exit", "timeout", "addEndListener", "onEnter", "onEntering", "onEntered", "onExit", "onExiting", "onExited", "nodeRef" ]);
            return we.createElement(Ke.Provider, {
                value: null
            }, "function" == typeof t ? t(e, r) : we.cloneElement(we.Children.only(t), r));
        }, r;
    }(we.Component);

    function tn() {}

    nn.contextType = Ke, nn.propTypes = {}, nn.defaultProps = {
        in: !1,
        mountOnEnter: !1,
        unmountOnExit: !1,
        appear: !1,
        enter: !0,
        exit: !0,
        onEnter: tn,
        onEntering: tn,
        onEntered: tn,
        onExit: tn,
        onExiting: tn,
        onExited: tn
    }, nn.UNMOUNTED = Ye, nn.EXITED = Ze, nn.ENTERING = Je, nn.ENTERED = Qe, nn.EXITING = en;

    const rn = nn, on = !("undefined" == typeof window || !window.document || !window.document.createElement);

    var an = !1, sn = !1;

    try {
        var cn = {
            get passive() {
                return an = !0;
            },
            get once() {
                return sn = an = !0;
            }
        };
        on && (window.addEventListener("test", cn, cn), window.removeEventListener("test", cn, !0));
    } catch (Gt) {}

    function ln(e, n, t, r) {
        return function(e, n, t, r) {
            if (r && "boolean" != typeof r && !sn) {
                var o = r.once, i = r.capture, a = t;
                !sn && o && (a = t.__once || function e(r) {
                    this.removeEventListener(n, e, i), t.call(this, r);
                }, t.__once = a), e.addEventListener(n, a, an ? r : i);
            }
            e.addEventListener(n, t, r);
        }(e, n, t, r), function() {
            !function(e, n, t, r) {
                var o = r && "boolean" != typeof r ? r.capture : r;
                e.removeEventListener(n, t, o), t.__once && e.removeEventListener(n, t.__once, o);
            }(e, n, t, r);
        };
    }

    function un(e, n, t) {
        void 0 === t && (t = 5);
        var r = !1, o = setTimeout((function() {
            r || function(e, n, t, r) {
                if (void 0 === t && (t = !1), void 0 === r && (r = !0), e) {
                    var o = document.createEvent("HTMLEvents");
                    o.initEvent(n, t, r), e.dispatchEvent(o);
                }
            }(e, "transitionend", !0);
        }), n + t), i = ln(e, "transitionend", (function() {
            r = !0;
        }), {
            once: !0
        });
        return function() {
            clearTimeout(o), i();
        };
    }

    function dn(e, n, t, r) {
        var o, i;
        null == t && (o = Me(e, "transitionDuration") || "", i = -1 === o.indexOf("ms") ? 1e3 : 1, 
        t = parseFloat(o) * i || 0);
        var a = un(e, t, r), s = ln(e, "transitionend", n);
        return function() {
            a(), s();
        };
    }

    function fn(e, n) {
        const t = Me(e, n) || "", r = -1 === t.indexOf("ms") ? 1e3 : 1;
        return parseFloat(t) * r;
    }

    function pn(e, n) {
        const t = fn(e, "transitionDuration"), r = fn(e, "transitionDelay"), o = dn(e, (t => {
            t.target === e && (o(), n(t));
        }), t + r);
    }

    const _n = e => e && "function" != typeof e ? n => {
        e.current = n;
    } : e;

    function hn(e, n) {
        return j((() => function(e, n) {
            const t = _n(e), r = _n(n);
            return e => {
                t && t(e), r && r(e);
            };
        }(e, n)), [ e, n ]);
    }

    const mn = we.forwardRef((({onEnter: e, onEntering: n, onEntered: t, onExit: r, onExiting: o, onExited: i, addEndListener: a, children: s, childRef: c, ...l}, u) => {
        const d = O(null), f = hn(d, c), p = e => {
            var n;
            f((n = e) && "setState" in n ? we.findDOMNode(n) : null != n ? n : null);
        }, _ = e => n => {
            e && d.current && e(d.current, n);
        }, h = P(_(e), [ e ]), m = P(_(n), [ n ]), v = P(_(t), [ t ]), y = P(_(r), [ r ]), b = P(_(o), [ o ]), x = P(_(i), [ i ]), g = P(_(a), [ a ]);
        return Le(rn, {
            ref: u,
            ...l,
            onEnter: h,
            onEntered: v,
            onEntering: m,
            onExit: y,
            onExited: x,
            onExiting: b,
            addEndListener: g,
            nodeRef: d,
            children: "function" == typeof s ? (e, n) => s(e, {
                ...n,
                ref: p
            }) : we.cloneElement(s, {
                ref: p
            })
        });
    }));

    function vn(e) {
        const n = function(e) {
            const n = O(e);
            return w((() => {
                n.current = e;
            }), [ e ]), n;
        }(e);
        return P((function(...e) {
            return n.current && n.current(...e);
        }), [ n ]);
    }

    const yn = (bn = "h4", q(((e, n) => Le("div", {
        ...e,
        ref: n,
        className: V(e.className, bn)
    }))));

    var bn;

    yn.displayName = "DivStyledAsH4";

    const xn = q((({className: e, bsPrefix: n, as: t = yn, ...r}, o) => (n = Re(n, "alert-heading"), 
    Le(t, {
        ref: o,
        className: V(e, n),
        ...r
    }))));

    xn.displayName = "AlertHeading";

    const gn = xn, Nn = [ "as", "disabled" ];

    function kn({tagName: e, disabled: n, href: t, target: r, rel: o, role: i, onClick: a, tabIndex: s = 0, type: c}) {
        e || (e = null != t || null != r || null != o ? "a" : "button");
        const l = {
            tagName: e
        };
        if ("button" === e) return [ {
            type: c || "button",
            disabled: n
        }, l ];
        const u = r => {
            (n || "a" === e && function(e) {
                return !e || "#" === e.trim();
            }(t)) && r.preventDefault(), n ? r.stopPropagation() : null == a || a(r);
        };
        return "a" === e && (t || (t = "#"), n && (t = void 0)), [ {
            role: null != i ? i : "button",
            disabled: void 0,
            tabIndex: n ? void 0 : s,
            href: t,
            target: "a" === e ? r : void 0,
            "aria-disabled": n || void 0,
            rel: "a" === e ? o : void 0,
            onClick: u,
            onKeyDown: e => {
                " " === e.key && (e.preventDefault(), u(e));
            }
        }, l ];
    }

    q(((e, n) => {
        let {as: t, disabled: r} = e, o = function(e, n) {
            if (null == e) return {};
            var t, r, o = {}, i = Object.keys(e);
            for (r = 0; r < i.length; r++) t = i[r], n.indexOf(t) >= 0 || (o[t] = e[t]);
            return o;
        }(e, Nn);
        const [i, {tagName: a}] = kn(Object.assign({
            tagName: t,
            disabled: r
        }, o));
        return Le(a, Object.assign({}, o, i, {
            ref: n
        }));
    })).displayName = "Button";

    const En = [ "onKeyDown" ];

    const wn = q(((e, n) => {
        let {onKeyDown: t} = e, r = function(e, n) {
            if (null == e) return {};
            var t, r, o = {}, i = Object.keys(e);
            for (r = 0; r < i.length; r++) t = i[r], n.indexOf(t) >= 0 || (o[t] = e[t]);
            return o;
        }(e, En);
        const [o] = kn(Object.assign({
            tagName: "a"
        }, r)), i = vn((e => {
            o.onKeyDown(e), null == t || t(e);
        }));
        return (a = r.href) && "#" !== a.trim() && "button" !== r.role ? Le("a", Object.assign({
            ref: n
        }, r, {
            onKeyDown: t
        })) : Le("a", Object.assign({
            ref: n
        }, r, o, {
            onKeyDown: i
        }));
        var a;
    }));

    wn.displayName = "Anchor";

    const Cn = wn, On = q((({className: e, bsPrefix: n, as: t = Cn, ...r}, o) => (n = Re(n, "alert-link"), 
    Le(t, {
        ref: o,
        className: V(e, n),
        ...r
    }))));

    On.displayName = "AlertLink";

    const jn = On, Pn = {
        [Je]: "show",
        [Qe]: "show"
    }, $n = q((({className: e, children: n, transitionClasses: t = {}, onEnter: r, ...o}, i) => {
        const a = {
            in: !1,
            timeout: 300,
            mountOnEnter: !1,
            unmountOnExit: !1,
            appear: !1,
            ...o
        }, s = P(((e, n) => {
            !function(e) {
                e.offsetHeight;
            }(e), null == r || r(e, n);
        }), [ r ]);
        return Le(mn, {
            ref: i,
            addEndListener: pn,
            ...a,
            onEnter: s,
            childRef: n.ref,
            children: (r, o) => Ne(n, {
                ...o,
                className: V("fade", e, n.props.className, Pn[r], t[r])
            })
        });
    }));

    $n.displayName = "Fade";

    const Sn = $n, Tn = {
        "aria-label": qe.string,
        onClick: qe.func,
        variant: qe.oneOf([ "white" ])
    }, Ln = q((({className: e, variant: n, "aria-label": t = "Close", ...r}, o) => Le("button", {
        ref: o,
        type: "button",
        className: V("btn-close", n && `btn-close-${n}`, e),
        "aria-label": t,
        ...r
    })));

    Ln.displayName = "CloseButton", Ln.propTypes = Tn;

    const Dn = Ln, Rn = q(((e, n) => {
        const {bsPrefix: t, show: r = !0, closeLabel: o = "Close alert", closeVariant: i, className: a, children: s, variant: c = "primary", onClose: l, dismissible: u, transition: d = Sn, ...f} = $e(e, {
            show: "onClose"
        }), p = Re(t, "alert"), _ = vn((e => {
            l && l(!1, e);
        })), h = !0 === d ? Sn : d, m = Le("div", {
            role: "alert",
            ...h ? void 0 : f,
            ref: n,
            className: V(a, p, c && `${p}-${c}`, u && `${p}-dismissible`),
            children: [ u && Le(Dn, {
                onClick: _,
                "aria-label": o,
                variant: i
            }), s ]
        });
        return h ? Le(h, {
            unmountOnExit: !0,
            ...f,
            ref: void 0,
            in: r,
            children: m
        }) : r ? m : null;
    }));

    Rn.displayName = "Alert";

    const In = Object.assign(Rn, {
        Link: jn,
        Heading: gn
    }), Fn = q((({as: e, bsPrefix: n, variant: t = "primary", size: r, active: o = !1, disabled: i = !1, className: a, ...s}, c) => {
        const l = Re(n, "btn"), [u, {tagName: d}] = kn({
            tagName: e,
            disabled: i,
            ...s
        });
        return Le(d, {
            ...u,
            ...s,
            ref: c,
            disabled: i,
            className: V(a, l, o && "active", t && `${l}-${t}`, r && `${l}-${r}`, s.href && i && "disabled")
        });
    }));

    Fn.displayName = "Button";

    const Un = Fn;

    const Hn = q(((e, n) => {
        const [{className: t, ...r}, {as: o = "div", bsPrefix: i, spans: a}] = function({as: e, bsPrefix: n, className: t, ...r}) {
            n = Re(n, "col");
            const o = Ie(), i = Fe(), a = [], s = [];
            return o.forEach((e => {
                const t = r[e];
                let o, c, l;
                delete r[e], "object" == typeof t && null != t ? ({span: o, offset: c, order: l} = t) : o = t;
                const u = e !== i ? `-${e}` : "";
                o && a.push(!0 === o ? `${n}${u}` : `${n}${u}-${o}`), null != l && s.push(`order${u}-${l}`), 
                null != c && s.push(`offset${u}-${c}`);
            })), [ {
                ...r,
                className: V(t, ...a, ...s)
            }, {
                as: e,
                bsPrefix: n,
                spans: a
            } ];
        }(e);
        return Le(o, {
            ...r,
            ref: n,
            className: V(t, !a.length && i)
        });
    }));

    Hn.displayName = "Col";

    const An = Hn, Vn = preact.createContext(null);

    Vn.displayName = "InputGroupContext";

    const zn = Vn, Mn = {
        type: qe.string,
        tooltip: qe.bool,
        as: qe.elementType
    }, Bn = q((({as: e = "div", className: n, type: t = "valid", tooltip: r = !1, ...o}, i) => Le(e, {
        ...o,
        ref: i,
        className: V(n, `${t}-${r ? "tooltip" : "feedback"}`)
    })));

    Bn.displayName = "Feedback", Bn.propTypes = Mn;

    const Gn = Bn, Wn = preact.createContext({}), qn = q((({id: e, bsPrefix: n, className: t, type: r = "checkbox", isValid: o = !1, isInvalid: i = !1, as: a = "input", ...s}, c) => {
        const {controlId: l} = $(Wn);
        return n = Re(n, "form-check-input"), Le(a, {
            ...s,
            ref: c,
            type: r,
            id: e || l,
            className: V(t, n, o && "is-valid", i && "is-invalid")
        });
    }));

    qn.displayName = "FormCheckInput";

    const Xn = qn, Kn = q((({bsPrefix: e, className: n, htmlFor: t, ...r}, o) => {
        const {controlId: i} = $(Wn);
        return e = Re(e, "form-check-label"), Le("label", {
            ...r,
            ref: o,
            htmlFor: t || i,
            className: V(n, e)
        });
    }));

    Kn.displayName = "FormCheckLabel";

    const Yn = Kn, Zn = q((({id: e, bsPrefix: n, bsSwitchPrefix: t, inline: o = !1, reverse: i = !1, disabled: a = !1, isValid: s = !1, isInvalid: c = !1, feedbackTooltip: l = !1, feedback: u, feedbackType: d, className: f, style: p, title: _ = "", type: h = "checkbox", label: m, children: v, as: y = "input", ...b}, x) => {
        n = Re(n, "form-check"), t = Re(t, "form-switch");
        const {controlId: g} = $(Wn), N = j((() => ({
            controlId: e || g
        })), [ g, e ]), k = !v && null != m && !1 !== m || function(e, n) {
            return K.toArray(e).some((e => ge(e) && e.type === n));
        }(v, Yn), E = Le(Xn, {
            ...b,
            type: "switch" === h ? "checkbox" : h,
            ref: x,
            isValid: s,
            isInvalid: c,
            disabled: a,
            as: y
        });
        return Le(Wn.Provider, {
            value: N,
            children: Le("div", {
                style: p,
                className: V(f, k && n, o && `${n}-inline`, i && `${n}-reverse`, "switch" === h && t),
                children: v || Le(preact.Fragment, {
                    children: [ E, k && Le(Yn, {
                        title: _,
                        children: m
                    }), u && Le(Gn, {
                        type: d,
                        tooltip: l,
                        children: u
                    }) ]
                })
            })
        });
    }));

    Zn.displayName = "FormCheck";

    const Jn = Object.assign(Zn, {
        Input: Xn,
        Label: Yn
    }), Qn = q((({bsPrefix: e, type: n, size: t, htmlSize: r, id: o, className: i, isValid: a = !1, isInvalid: s = !1, plaintext: c, readOnly: l, as: u = "input", ...d}, f) => {
        const {controlId: p} = $(Wn);
        return e = Re(e, "form-control"), Le(u, {
            ...d,
            type: n,
            size: r,
            ref: f,
            readOnly: l,
            id: o || p,
            className: V(i, c ? `${e}-plaintext` : e, t && `${e}-${t}`, "color" === n && `${e}-color`, a && "is-valid", s && "is-invalid")
        });
    }));

    Qn.displayName = "FormControl";

    const et = Object.assign(Qn, {
        Feedback: Gn
    }), nt = q((({className: e, bsPrefix: n, as: t = "div", ...r}, o) => (n = Re(n, "form-floating"), 
    Le(t, {
        ref: o,
        className: V(e, n),
        ...r
    }))));

    nt.displayName = "FormFloating";

    const tt = nt, rt = q((({controlId: e, as: n = "div", ...t}, r) => {
        const o = j((() => ({
            controlId: e
        })), [ e ]);
        return Le(Wn.Provider, {
            value: o,
            children: Le(n, {
                ...t,
                ref: r
            })
        });
    }));

    rt.displayName = "FormGroup";

    const ot = rt, it = q((({as: e = "label", bsPrefix: n, column: t = !1, visuallyHidden: r = !1, className: o, htmlFor: i, ...a}, s) => {
        const {controlId: c} = $(Wn);
        n = Re(n, "form-label");
        let l = "col-form-label";
        "string" == typeof t && (l = `${l} ${l}-${t}`);
        const u = V(o, n, r && "visually-hidden", t && l);
        return i = i || c, t ? Le(An, {
            ref: s,
            as: "label",
            className: u,
            htmlFor: i,
            ...a
        }) : Le(e, {
            ref: s,
            className: u,
            htmlFor: i,
            ...a
        });
    }));

    it.displayName = "FormLabel";

    const at = it, st = q((({bsPrefix: e, className: n, id: t, ...r}, o) => {
        const {controlId: i} = $(Wn);
        return e = Re(e, "form-range"), Le("input", {
            ...r,
            type: "range",
            ref: o,
            className: V(n, e),
            id: t || i
        });
    }));

    st.displayName = "FormRange";

    const ct = st, lt = q((({bsPrefix: e, size: n, htmlSize: t, className: r, isValid: o = !1, isInvalid: i = !1, id: a, ...s}, c) => {
        const {controlId: l} = $(Wn);
        return e = Re(e, "form-select"), Le("select", {
            ...s,
            size: t,
            ref: c,
            className: V(r, e, n && `${e}-${n}`, o && "is-valid", i && "is-invalid"),
            id: a || l
        });
    }));

    lt.displayName = "FormSelect";

    const ut = lt, dt = q((({bsPrefix: e, className: n, as: t = "small", muted: r, ...o}, i) => (e = Re(e, "form-text"), 
    Le(t, {
        ...o,
        ref: i,
        className: V(n, e, r && "text-muted")
    }))));

    dt.displayName = "FormText";

    const ft = dt, pt = q(((e, n) => Le(Jn, {
        ...e,
        ref: n,
        type: "switch"
    })));

    pt.displayName = "Switch";

    const _t = Object.assign(pt, {
        Input: Jn.Input,
        Label: Jn.Label
    }), ht = q((({bsPrefix: e, className: n, children: t, controlId: r, label: o, ...i}, a) => (e = Re(e, "form-floating"), 
    Le(ot, {
        ref: a,
        className: V(n, e),
        controlId: r,
        ...i,
        children: [ t, Le("label", {
            htmlFor: r,
            children: o
        }) ]
    }))));

    ht.displayName = "FloatingLabel";

    const mt = ht, vt = {
        _ref: qe.any,
        validated: qe.bool,
        as: qe.elementType
    }, yt = q((({className: e, validated: n, as: t = "form", ...r}, o) => Le(t, {
        ...r,
        ref: o,
        className: V(e, n && "was-validated")
    })));

    yt.displayName = "Form", yt.propTypes = vt;

    const bt = Object.assign(yt, {
        Group: ot,
        Control: et,
        Floating: tt,
        Check: Jn,
        Switch: _t,
        Label: at,
        Text: ft,
        Range: ct,
        Select: ut,
        FloatingLabel: mt
    }), xt = q((({className: e, bsPrefix: n, as: t = "span", ...r}, o) => (n = Re(n, "input-group-text"), 
    Le(t, {
        ref: o,
        className: V(e, n),
        ...r
    }))));

    xt.displayName = "InputGroupText";

    const gt = xt, Nt = q((({bsPrefix: e, size: n, hasValidation: t, className: r, as: o = "div", ...i}, a) => {
        e = Re(e, "input-group");
        const s = j((() => ({})), []);
        return Le(zn.Provider, {
            value: s,
            children: Le(o, {
                ref: a,
                ...i,
                className: V(r, e, n && `${e}-${n}`, t && "has-validation")
            })
        });
    }));

    Nt.displayName = "InputGroup";

    const kt = Object.assign(Nt, {
        Text: gt,
        Radio: e => Le(gt, {
            children: Le(Xn, {
                type: "radio",
                ...e
            })
        }),
        Checkbox: e => Le(gt, {
            children: Le(Xn, {
                type: "checkbox",
                ...e
            })
        })
    }), Et = q((({bsPrefix: e, className: n, as: t = "div", ...r}, o) => {
        const i = Re(e, "row"), a = Ie(), s = Fe(), c = `${i}-cols`, l = [];
        return a.forEach((e => {
            const n = r[e];
            let t;
            delete r[e], null != n && "object" == typeof n ? ({cols: t} = n) : t = n;
            const o = e !== s ? `-${e}` : "";
            null != t && l.push(`${c}${o}-${t}`);
        })), Le(t, {
            ref: o,
            ...r,
            className: V(n, i, ...l)
        });
    }));

    Et.displayName = "Row";

    const wt = Et, Ct = q((({bsPrefix: e, className: n, striped: t, bordered: r, borderless: o, hover: i, size: a, variant: s, responsive: c, ...l}, u) => {
        const d = Re(e, "table"), f = Le("table", {
            ...l,
            className: V(n, d, s && `${d}-${s}`, a && `${d}-${a}`, t && `${d}-${"string" == typeof t ? `striped-${t}` : "striped"}`, r && `${d}-bordered`, o && `${d}-borderless`, i && `${d}-hover`),
            ref: u
        });
        if (c) {
            let e = `${d}-responsive`;
            return "string" == typeof c && (e = `${e}-${c}`), Le("div", {
                className: e,
                children: f
            });
        }
        return f;
    })), Ot = Ct, jt = {
        sEcho: "1",
        iColumns: "1",
        sColumns: "",
        iDisplayStart: "0",
        iDisplayLength: "1",
        mDataProp_0: "kch",
        mDataProp_1: "kcmc",
        mDataProp_2: "fzmc",
        mDataProp_3: "slks",
        mDataProp_4: "xf",
        mDataProp_5: "skls",
        mDataProp_6: "sksj",
        mDataProp_7: "skdd",
        mDataProp_8: "xqmc",
        mDataProp_9: "syrs",
        mDataProp_10: "ctsm",
        mDataProp_11: "czOper",
        mDataProp_12: "cstm"
    }, Pt = "jsxsd", $t = () => {
        const e = window.location.href, n = e.indexOf(Pt);
        if (-1 !== n) {
            const t = e.slice(0, n + 5 + 1) + "xsxkkc/";
            return new URL(t);
        }
        return !1;
    }, St = () => {
        const e = $t();
        return !!e && new URL(e + "xsxkBxxk?1=1&kcxx=&skls=&skfs=");
    }, Tt = () => {
        const e = $t();
        return !!e && new URL(e + "xsxkGgxxkxk?kcxx=&skls=&skxq=&skjc=&sfym=false&sfct=true&szjylb=&sfxx=true&skfs=");
    }, Lt = () => {
        const e = $t();
        return !!e && new URL(e + "xsxkXxxk?1=1&kcxx=&skls=&skfs=");
    }, Dt = e => Object.keys(e).map((n => `${encodeURIComponent(n)}=${encodeURIComponent(e[n])}`)).join("&"), Rt = (e, n) => fetch(e, {
        method: "POST",
        headers: {
            "Content-Type": "application/x-www-form-urlencoded",
            "X-Requested-With": "XMLHttpRequest"
        },
        body: n
    }), It = e => fetch(e, {
        method: "GET",
        headers: {
            "Content-Type": "application/x-www-form-urlencoded",
            "X-Requested-With": "XMLHttpRequest"
        }
    }), Ft = async (e, n, t) => {
        const r = new URL(e), o = n;
        try {
            console.log(r, Dt(o));
            const e = await Rt(r, Dt(o));
            if (200 !== e.status) throw new Error("获取选课列表失败，可能是选课未开放，或者是网络错误");
            const n = await e.json();
            if (console.log(n), 0 === n.iTotalRecords) return void t(n);
            try {
                o.iColumns = n.iTotalRecords, o.iDisplayLength = n.iTotalRecords;
                const e = await Rt(r, Dt(o)), i = await e.json(), a = await i.aaData.map(((e, n) => ({
                    ...e,
                    lcandy2Index: n,
                    lcandy2Name: e.kcmc + (e.fzmc ? ` - ${e.fzmc}` : "")
                })));
                i.aaData = a, t(i);
            } catch (i) {
                return void console.error(i);
            }
        } catch (i) {
            return void console.error(i);
        }
    }, Ut = async (e, n, t) => {
        const r = e, o = r.searchParams;
        o.append("kcid", n), o.append("jx0404id", t), r.search = o;
        try {
            const e = await It(r);
            return await e.json();
        } catch (i) {
            console.error(i);
        }
    }, Ht = async e => new Promise((n => setTimeout(n, e)));

    function At() {
        const [e, n] = k(""), [t, o] = k(""), [i, a] = k(""), [s, c] = k(""), [l, u] = k(""), [d, f] = k(""), [p, _] = k(""), [h, m] = k({}), [v, y] = k({}), [b, x] = k({}), [g, N] = k(1), [E, C] = k([]);
        k([]);
        const [O, j] = k(!1), [P, $] = k(!1), [S, T] = k(0), [L, D] = k(""), [R, I] = k(""), [F, U] = k("primary"), [H, A] = k(!1);
        k(!1);
        const [V, z] = k([ 1, 1 ]), M = jt;
        w((() => {
            z([ 1, 1 ]);
        }), [ H ]), w((() => {
            O && !P && G(), !O && P && q();
        }), [ O, S, P ]), w((() => {
            B();
        }), [ "", g ]);
        const B = async () => {
            const e = St();
            e && Ft(e, M, m);
            const n = Lt();
            n && Ft(n, M, y);
            const t = Tt();
            t && Ft(t, M, x);
        };
        w((() => {
            let n;
            if (1 === g && (n = h.aaData || []), 2 === g && (n = v.aaData || []), 3 === g && (n = b.aaData || []), 
            !n || !n[0]) return void C([]);
            const t = n.filter(((n, t) => {
                let r = n;
                return e && (r = r.lcandy2Name.includes(e)), i && (r = r.skls.includes(i)), s && (r = r.jx02id.includes(s)), 
                l && (r = r.jx0404id.includes(l)), r;
            }));
            C(t), console.log(t);
        }), [ e, t, i, s, l, g, h, v, b ]);
        const G = async () => {
            let e, n = [], t = [];
            if (1 !== g && 2 !== g || (e = (() => {
                const e = $t();
                return !!e && new URL(e + "xxxkOper?cfbs=null&xkzy=&trjf=");
            })()), 3 === g && (e = (() => {
                const e = $t();
                return !!e && new URL(e + "ggxxkxkOper");
            })()), !e) return;
            const r = `第 ${S} 次`;
            if (s && l) n.push(s), t.push(l), I(`正在使用 kcid 和 jx0404id 抢课 | ${r}`); else {
                for (let e = V[0] - 1; e < V[1]; e++) n.push(E[e].jx02id), t.push(E[e].jx0404id);
                I(`正在使用选中的课程抢课 | ${r}`);
            }
            const o = n.length > 1;
            let i = "", a = "";
            for (const [s, c] of n.entries()) {
                const n = await Ut(e, c, t[s]), r = JSON.stringify(n), l = n.success && !r.includes("失败") && !r.includes("稍后"), u = r.includes("冲突"), d = r.includes("登录"), f = r.includes("已选"), p = r.includes("类型"), _ = `《${E[V[0] - 1 + s].lcandy2Name}（${E[V[0] - 1 + s].skls}）》`;
                console.log(n), o && (i += `课程${_}`), l ? (i += "抢课成功：", j(!1), a = "success", i += o ? `\n\n 由于 课程${_}【抢课成功】，停止抢课。` : n.message) : (i += "抢课失败：", 
                a = "danger"), n.message ? i += n.message + "\n" : i += r + "<br>" || "未知错误", (u || d || f || p) && (i += `\n\n 由于 课程${_}【冲突、未登陆、已选或类型错误】，停止抢课。`, 
                j(!1)), o && await Ht(100), i.includes("成功") && (a = "success"), U("success" === a ? "success" : "danger"), 
                D(i);
            }
            setTimeout((() => {
                O && T(S + 1);
            }), 300);
        }, W = !E[0] && !(s || l) || H && !(p && d) || O || P, q = async () => {
            let e, n = "", t = "", r = "正在保留冲突课程并抢课 | 第 " + S + " 次";
            if (1 === g) {
                const n = St();
                n && (e = n);
            } else if (2 === g) {
                const n = Lt();
                n && (e = n);
            } else if (3 === g) {
                const n = Tt();
                n && (e = n);
            }
            const o = E[0].lcandy2Index, i = await (async (e, n, t) => {
                new URL(e);
                const r = n;
                r.iColumns = 1, r.iDisplayLength = 1, r.iDisplayStart = t;
                try {
                    const n = e, t = await Rt(n, Dt(r)), o = await t.json();
                    return console.log(o), o;
                } catch (o) {
                    console.error(o);
                }
            })(e, M, o), a = Number(i.aaData[0].syrs || 0);
            if (console.log(S, "剩余人数", a, i), a >= 1) {
                $(!1);
                const r = (() => {
                    const e = window.location.href, n = e.indexOf(Pt);
                    if (-1 !== n) {
                        const t = e.slice(0, n + 5 + 1) + "xsxkjg/xstkOper";
                        return new URL(t);
                    }
                    return !1;
                })(), o = await (async (e, n) => {
                    const t = e, r = t.searchParams;
                    r.append("jx0404id", n), t.search = r;
                    try {
                        const e = await It(t);
                        return await e.json();
                    } catch (o) {
                        console.error(o);
                    }
                })(r, p);
                console.log("【已退课】", o);
                const i = JSON.stringify(o);
                if (o.success && !i.includes("失败") && !i.includes("稍后")) {
                    n += `退课成功：${o.message || i || "未知错误"}\n`, t = "success";
                    const r = await Ut(e, E[0].jx02id, E[0].jx0404id), a = JSON.stringify(r), s = r.success && !a.includes("失败") && !a.includes("稍后"), c = a.includes("冲突"), l = a.includes("登录"), u = a.includes("已选"), d = a.includes("类型");
                    if (!s || c || l || u || d) {
                        n += `抢课失败：${r.message || a || "未知错误"}\n尝试选回已退课原课程`, t = "danger";
                        const r = await Ut(e, E[0].jx02id, p), o = r.success && !a.includes("失败") && !a.includes("稍后"), i = a.includes("冲突"), s = a.includes("登录"), c = a.includes("已选"), l = a.includes("类型");
                        !o || i || s || c || l ? (n += `选回已退课原课程失败：${r.message || a || "未知错误"}\n\n请尽快执行相关操作，以保证你的课程。`, 
                        t = "danger") : (n += `已选回原课程已退课课程：${r.message || a || "未知错误"}\n`, t = "success");
                    } else n += `抢课成功：${r.message || a || "未知错误"}`, t = "success";
                } else n += `退课失败：${o.message || i || "未知错误"}\n\n其他操作未执行`, t = "danger";
            } else n += `课程 ${E[0].lcandy2Name} 剩余人数为 0\n(${E[0].jx02id},${E[0].jx0404id})\n\n其他操作未执行`, 
            t = "danger";
            U("success" === t ? "success" : "danger"), I(r), D(n), setTimeout((() => {
                P && T(S + 1);
            }), 300);
        };
        return Le(preact.Fragment, {
            children: Le("div", {
                style: {
                    paddingBlock: 16
                },
                children: [ Le("h2", {
                    children: "自动抢课"
                }), Le(bt, {
                    children: [ Le(bt.Check, {
                        inline: !0,
                        label: 1 === g ? Le("b", {
                            children: "公共必修课"
                        }) : "公共必修课",
                        name: "--lcandy2-jwxt-course-select-radio",
                        type: "radio",
                        id: "--lcandy2-jwxt-course-select-radio-1",
                        value: 1,
                        disabled: O,
                        checked: 1 === g,
                        onChange: () => N(1)
                    }), Le(bt.Check, {
                        inline: !0,
                        label: 2 === g ? Le("b", {
                            children: "专业选修课"
                        }) : "专业选修课",
                        name: "--lcandy2-jwxt-course-select-radio",
                        type: "radio",
                        id: "--lcandy2-jwxt-course-select-radio-2",
                        value: 2,
                        checked: 2 === g,
                        disabled: O,
                        onChange: () => N(2)
                    }), Le(bt.Check, {
                        inline: !0,
                        label: 3 === g ? Le("b", {
                            children: "公共选修课"
                        }) : "公共选修课",
                        name: "--lcandy2-jwxt-course-select-radio",
                        type: "radio",
                        id: "--lcandy2-jwxt-course-select-radio-3",
                        value: 3,
                        disabled: O,
                        checked: 3 === g,
                        onChange: () => N(3)
                    }) ]
                }), Le("h6", {
                    className: "mt-3",
                    children: "请输入课程相关信息："
                }), Le(bt, {
                    children: Le(wt, {
                        children: [ Le(An, {
                            children: Le(bt.Group, {
                                className: "mb-3",
                                controlId: "--lcandy2-jwxt-course-select-courseName",
                                children: [ Le(bt.Label, {
                                    children: "课程名称"
                                }), Le(bt.Control, {
                                    placeholder: "请输入课程名称",
                                    value: e,
                                    onChange: e => n(e.target.value),
                                    disabled: O
                                }) ]
                            })
                        }), Le(An, {
                            children: Le(bt.Group, {
                                className: "mb-3",
                                controlId: "--lcandy2-jwxt-course-select-teacherName",
                                children: [ Le(bt.Label, {
                                    children: "授课教师"
                                }), Le(bt.Control, {
                                    placeholder: "请输入授课教师",
                                    value: i,
                                    onChange: e => a(e.target.value),
                                    disabled: O
                                }) ]
                            })
                        }), Le(An, {
                            children: Le(bt.Group, {
                                className: "mb-3",
                                controlId: "--lcandy2-jwxt-course-select-range",
                                children: [ Le(bt.Label, {
                                    children: [ "选中范围 ", V[0] > V[1] && Le("b", {
                                        children: "输入不合法：左侧需小于右侧"
                                    }), " ", H && Le("b", {
                                        children: "保留冲突课程不支持多个课程"
                                    }) ]
                                }), Le(kt, {
                                    className: "mb-3",
                                    children: [ Le(bt.Control, {
                                        type: "number",
                                        "aria-label": "启始选中",
                                        min: "1",
                                        max: "100",
                                        value: V[0],
                                        disabled: O || H,
                                        onChange: e => z([ e.target.value, V[1] ])
                                    }), Le(kt.Text, {
                                        children: "-"
                                    }), Le(bt.Control, {
                                        type: "number",
                                        "aria-label": "最后选中",
                                        min: "1",
                                        max: "100",
                                        disabled: O || H,
                                        value: V[1],
                                        onChange: e => z([ V[0], e.target.value ])
                                    }) ]
                                }) ]
                            })
                        }) ]
                    })
                }), Le("h6", {
                    className: "lh-base",
                    children: Le(preact.Fragment, H ? {
                        children: [ Le("s", {
                            children: "或者，如果你知道 kcid 和 jx0404id 的话..."
                        }), Le("br", {}), Le("b", {
                            children: "保留冲突课程并抢课不支持使用 kcid 和 jx0404id"
                        }) ]
                    } : {
                        children: "或者，如果你知道 kcid 和 jx0404id 的话..."
                    })
                }), Le(bt, {
                    children: Le(wt, {
                        children: [ Le(An, {
                            children: Le(bt.Group, {
                                size: "sm",
                                className: "mb-3",
                                controlId: "--lcandy2-jwxt-course-select-kcid",
                                children: [ Le(bt.Label, {
                                    children: H ? "kcid (暂不支持)" : "kcid"
                                }), Le(bt.Control, {
                                    placeholder: H ? "保留冲突课程抢课开启时暂不支持" : "kcid",
                                    value: s,
                                    onChange: e => c(e.target.value),
                                    disabled: H || O
                                }) ]
                            })
                        }), Le(An, {
                            children: Le(bt.Group, {
                                className: "mb-3",
                                controlId: "--lcandy2-jwxt-course-select-jx0404id",
                                children: [ Le(bt.Label, {
                                    children: H ? "jx0404id (暂不支持)" : "jx0404id"
                                }), Le(bt.Control, {
                                    placeholder: H ? "保留冲突课程抢课开启时暂不支持" : "kcid",
                                    value: l,
                                    onChange: e => u(e.target.value),
                                    disabled: H || O
                                }) ]
                            })
                        }) ]
                    })
                }), Le(bt.Check, {
                    type: "switch",
                    id: "--lcandy2-jwxt-course-select-switch-reserve-course",
                    label: Le(preact.Fragment, {
                        children: [ "已选冲突课程？", Le("br", {}), Le("b", {
                            children: "警告：这可能会导致你已选的课程被退课，如果你不知道这意味着什么，请勿打开"
                        }) ]
                    }),
                    checked: H,
                    disabled: O || P,
                    onChange: e => A(e.target.checked),
                    className: "pb-3"
                }), H && Le(bt, {
                    children: Le(wt, {
                        children: [ Le(An, {
                            children: Le("p", {
                                children: [ "如果你已经选了一个时间冲突课程*，并希望在保留当前课程的情况下去抢新的课程，则打开此开关，并在右侧填入 jx0404id", Le("p", {
                                    className: "w-100 lh-sm text-secondary",
                                    children: [ "*时间冲突课程：不同老师的必修课，相同时间的公共选修课等因课程冲突无法选择的课程。", Le("br", {}), Le("br", {}), "例如：你已经选了A老师的体育课，但是你想要选B老师的体育课，此时B老师的体育课又没有名额，那么你可以打开此开关，填入A老师体育课的jx0404id，然后点击抢课按钮，当检测到B老师的体育课有名额时，系统会自动退掉A老师的体育课，并选择B老师的体育课。" ]
                                }) ]
                            })
                        }), Le(An, {
                            children: [ Le(wt, {
                                children: Le(bt.Group, {
                                    className: "mb-3",
                                    controlId: "--lcandy2-jwxt-course-select-conflict-jx0404id",
                                    children: [ Le(bt.Label, {
                                        children: [ "冲突课程的 kcid", Le("br", {}), Le("b", {
                                            children: "警告：这可能导致这门课程被退课"
                                        }) ]
                                    }), Le(bt.Control, {
                                        placeholder: "冲突课程的 kcid",
                                        value: d,
                                        onChange: e => f(e.target.value)
                                    }) ]
                                })
                            }), Le(wt, {
                                children: Le(bt.Group, {
                                    className: "mb-3",
                                    controlId: "--lcandy2-jwxt-course-select-conflict-jx0404id",
                                    children: [ Le(bt.Label, {
                                        children: [ "冲突课程的 jx0404id", Le("br", {}), Le("b", {
                                            children: "警告：这可能导致这门课程被退课"
                                        }) ]
                                    }), Le(bt.Control, {
                                        placeholder: "冲突课程的 jx0404id",
                                        value: p,
                                        onChange: e => _(e.target.value)
                                    }) ]
                                })
                            }) ]
                        }) ]
                    })
                }), Le(wt, {
                    children: [ Le(An, {
                        children: [ Le(Un, {
                            variant: "primary",
                            disabled: W,
                            onClick: () => {
                                H ? ($(!0), j(!1)) : (j(!0), $(!1)), T(1);
                            },
                            children: "执行抢课"
                        }), (O || P) && Le(Un, {
                            className: "ms-2",
                            variant: "outline-secondary",
                            disabled: !(E[0] || s && l),
                            onClick: () => {
                                j(!1), $(!1);
                            },
                            children: "取消抢课"
                        }) ]
                    }), Le(An, {
                        xs: 8,
                        children: L && Le(In, {
                            variant: F,
                            children: [ R && Le(In.Heading, {
                                children: R
                            }), L.split("\n").map((e => Le("p", {
                                className: "mb-1",
                                children: e
                            }))), L.includes("登录") && "danger" === F && Le(Un, {
                                className: "ms-2",
                                variant: "outline-danger",
                                onClick: () => {
                                    window.location.href = (() => {
                                        const e = window.location.href, n = e.indexOf(Pt), t = e.slice(0, n + 5 + 1);
                                        return !!t && new URL(t + "xk/LoginToXk?method=exit");
                                    })();
                                },
                                children: "重新登录"
                            }) ]
                        }, F)
                    }) ]
                }), Le(wt, {
                    children: [ Le("caption", {
                        children: "表格中的第一个课程将被选中。想要选中你希望选择的课程？尝试上方的搜索功能。"
                    }), Le(Ot, {
                        striped: !0,
                        hover: !0,
                        children: [ Le("thead", {
                            children: Le("tr", {
                                children: [ Le("th", {}), Le("th", {
                                    children: "序号"
                                }), Le("th", {
                                    children: "课程名称"
                                }), Le("th", {
                                    children: "授课教师"
                                }), Le("th", {
                                    children: "剩余容量"
                                }), Le("th", {
                                    children: "kcid"
                                }), Le("th", {
                                    children: "jx0404id"
                                }) ]
                            })
                        }), Le("tbody", {
                            children: E.map(((e, n) => Le("tr", {
                                className: n <= V[1] - 1 && n >= V[0] - 1 && "table-primary",
                                children: [ Le("td", {
                                    children: n <= V[1] - 1 && n >= V[0] - 1 && Le(bt.Check, {
                                        disabled: !0,
                                        type: "checkbox",
                                        checked: !0
                                    })
                                }), Le("td", {
                                    children: e.lcandy2Index
                                }), Le("td", {
                                    children: e.lcandy2Name
                                }), Le("td", {
                                    children: e.skls
                                }), Le("td", {
                                    children: e.syrs
                                }), Le("td", {
                                    children: e.jx02id
                                }), Le("td", {
                                    children: e.jx0404id
                                }) ]
                            }, n)))
                        }) ]
                    }) ]
                }) ]
            })
        });
    }

    const Vt = {
        name: "hunau-jwxt-course-select",
        description: "qiangzhi-course-select",
        private: !0,
        version: "3.3.3",
        type: "module",
        scripts: {
            dev: "vite",
            build: "vite build",
            preview: "vite preview"
        },
        dependencies: {
            bootstrap: "^5.3.2",
            preact: "^10.19.3",
            "react-bootstrap": "^2.9.2"
        },
        devDependencies: {
            "@preact/preset-vite": "^2.8.1",
            terser: "^5.26.0",
            vite: "^5.0.10",
            "vite-plugin-monkey": "^3.5.1"
        }
    }, zt = window.location.href;

    zt.includes(Pt);

    const Mt = zt.includes("xsrkxz"), Bt = zt.includes("xklc_list");

    document.addEventListener("DOMContentLoaded", (function() {
        if (Mt || Bt) {
            const e = document.createElement("link");
            e.href = `https://registry.npmmirror.com/bootstrap/${Vt.dependencies.bootstrap.slice(1)}/files/dist/css/bootstrap.min.css`, 
            e.rel = "stylesheet", document.head.append(e);
            const n = Bt ? document.querySelector("form > div:first-of-type") : document.querySelector("body > div:first-of-type");
            console.log(n), preact.render(Le(At, {}), (() => {
                const e = document.createElement("div");
                return n.prepend(e), e;
            })());
        }
    }));

})(preact);