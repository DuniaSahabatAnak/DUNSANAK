(globalThis.TURBOPACK || (globalThis.TURBOPACK = [])).push(["object" == typeof document ? document.currentScript : void 0, 7087, a => {
    "use strict";
    let e = (0,
    a.i(17381).default)("sparkles", [["path", {
        d: "M11.017 2.814a1 1 0 0 1 1.966 0l1.051 5.558a2 2 0 0 0 1.594 1.594l5.558 1.051a1 1 0 0 1 0 1.966l-5.558 1.051a2 2 0 0 0-1.594 1.594l-1.051 5.558a1 1 0 0 1-1.966 0l-1.051-5.558a2 2 0 0 0-1.594-1.594l-5.558-1.051a1 1 0 0 1 0-1.966l5.558-1.051a2 2 0 0 0 1.594-1.594z",
        key: "1s2grr"
    }], ["path", {
        d: "M20 2v4",
        key: "1rf3ol"
    }], ["path", {
        d: "M22 4h-4",
        key: "gwowj6"
    }], ["circle", {
        cx: "4",
        cy: "20",
        r: "2",
        key: "6kqj1y"
    }]]);
    a.s(["Sparkles", 0, e], 7087)
}
, 98301, a => {
    "use strict";
    let e = (0,
    a.i(17381).default)("zap", [["path", {
        d: "M4 14a1 1 0 0 1-.78-1.63l9.9-10.2a.5.5 0 0 1 .86.46l-1.92 6.02A1 1 0 0 0 13 10h7a1 1 0 0 1 .78 1.63l-9.9 10.2a.5.5 0 0 1-.86-.46l1.92-6.02A1 1 0 0 0 11 14z",
        key: "1xq2db"
    }]]);
    a.s(["Zap", 0, e], 98301)
}
, 34485, (a, e, n) => {
    "use strict";
    Object.defineProperty(n, "__esModule", {
        value: !0
    });
    var l = {
        formatUrl: function() {
            return r
        },
        formatWithValidation: function() {
            return c
        },
        urlObjectKeys: function() {
            return d
        }
    };
    for (var i in l)
        Object.defineProperty(n, i, {
            enumerable: !0,
            get: l[i]
        });
    let s = a.r(61909)._(a.r(70077))
      , t = /https?|ftp|gopher|file/;
    function r(a) {
        let {auth: e, hostname: n} = a
          , l = a.protocol || ""
          , i = a.pathname || ""
          , r = a.hash || ""
          , d = a.query || ""
          , c = !1;
        e = e ? encodeURIComponent(e).replace(/%3A/i, ":") + "@" : "",
        a.host ? c = e + a.host : n && (c = e + (~n.indexOf(":") ? `[${n}]` : n),
        a.port && (c += ":" + a.port)),
        d && "object" == typeof d && (d = String(s.urlQueryToSearchParams(d)));
        let o = a.search || d && `?${d}` || "";
        return l && !l.endsWith(":") && (l += ":"),
        a.slashes || (!l || t.test(l)) && !1 !== c ? (c = "//" + (c || ""),
        i && "/" !== i[0] && (i = "/" + i)) : c || (c = ""),
        r && "#" !== r[0] && (r = "#" + r),
        o && "?" !== o[0] && (o = "?" + o),
        i = i.replace(/[?#]/g, encodeURIComponent),
        o = o.replace("#", "%23"),
        `${l}${c}${i}${o}${r}`
    }
    let d = ["auth", "hash", "host", "hostname", "href", "path", "pathname", "port", "protocol", "query", "search", "slashes"];
    function c(a) {
        return r(a)
    }
}
, 40067, (a, e, n) => {
    "use strict";
    Object.defineProperty(n, "__esModule", {
        value: !0
    }),
    Object.defineProperty(n, "useMergedRef", {
        enumerable: !0,
        get: function() {
            return i
        }
    });
    let l = a.r(30668);
    function i(a, e) {
        let n = (0,
        l.useRef)(null)
          , i = (0,
        l.useRef)(null);
        return (0,
        l.useCallback)(l => {
            if (null === l) {
                let a = n.current;
                a && (n.current = null,
                a());
                let e = i.current;
                e && (i.current = null,
                e())
            } else
                a && (n.current = s(a, l)),
                e && (i.current = s(e, l))
        }
        , [a, e])
    }
    function s(a, e) {
        if ("function" != typeof a)
            return a.current = e,
            () => {
                a.current = null
            }
            ;
        {
            let n = a(e);
            return "function" == typeof n ? n : () => a(null)
        }
    }
    ("function" == typeof n.default || "object" == typeof n.default && null !== n.default) && void 0 === n.default.__esModule && (Object.defineProperty(n.default, "__esModule", {
        value: !0
    }),
    Object.assign(n.default, n),
    e.exports = n.default)
}
, 23450, (a, e, n) => {
    "use strict";
    Object.defineProperty(n, "__esModule", {
        value: !0
    }),
    Object.defineProperty(n, "isLocalURL", {
        enumerable: !0,
        get: function() {
            return s
        }
    });
    let l = a.r(48911)
      , i = a.r(37023);
    function s(a) {
        if (!(0,
        l.isAbsoluteUrl)(a))
            return !0;
        try {
            let e = (0,
            l.getLocationOrigin)()
              , n = new URL(a,e);
            return n.origin === e && (0,
            i.hasBasePath)(n.pathname)
        } catch (a) {
            return !1
        }
    }
}
, 15553, (a, e, n) => {
    "use strict";
    Object.defineProperty(n, "__esModule", {
        value: !0
    }),
    Object.defineProperty(n, "errorOnce", {
        enumerable: !0,
        get: function() {
            return l
        }
    });
    let l = a => {}
}
, 16506, (a, e, n) => {
    "use strict";
    Object.defineProperty(n, "__esModule", {
        value: !0
    });
    var l = {
        default: function() {
            return k
        },
        useLinkStatus: function() {
            return _
        }
    };
    for (var i in l)
        Object.defineProperty(n, i, {
            enumerable: !0,
            get: l[i]
        });
    let s = a.r(61909)
      , t = a.r(48277)
      , r = s._(a.r(30668))
      , d = a.r(34485)
      , c = a.r(45243)
      , o = a.r(40067)
      , u = a.r(48911)
      , h = a.r(39940);
    a.r(86051);
    let g = a.r(98165)
      , m = a.r(79111)
      , p = a.r(23450)
      , b = a.r(24994);
    function k(e) {
        var n, l;
        let i, s, k, [_,y] = (0,
        r.useOptimistic)(m.IDLE_LINK_STATUS), j = (0,
        r.useRef)(null), {href: v, as: x, children: N, prefetch: M=null, passHref: A, replace: S, shallow: C, scroll: I, onClick: w, onMouseEnter: L, onTouchStart: P, legacyBehavior: O=!1, onNavigate: T, transitionTypes: E, ref: $, unstable_dynamicOnHover: R, ...z} = e;
        i = N,
        O && ("string" == typeof i || "number" == typeof i) && (i = (0,
        t.jsx)("a", {
            children: i
        }));
        let K = r.default.useContext(c.AppRouterContext)
          , q = !1 !== M
          , B = !1 !== M ? null === (l = M) || "auto" === l ? b.FetchStrategy.PPR : b.FetchStrategy.Full : b.FetchStrategy.PPR
          , D = "string" == typeof (n = x || v) ? n : (0,
        d.formatUrl)(n);
        if (O) {
            if (i?.$$typeof === Symbol.for("react.lazy"))
                throw Object.defineProperty(Error("`<Link legacyBehavior>` received a direct child that is either a Server Component, or JSX that was loaded with React.lazy(). This is not supported. Either remove legacyBehavior, or make the direct child a Client Component that renders the Link's `<a>` tag."), "__NEXT_ERROR_CODE", {
                    value: "E863",
                    enumerable: !1,
                    configurable: !0
                });
            s = r.default.Children.only(i)
        }
        let F = O ? s && "object" == typeof s && s.ref : $
          , U = r.default.useCallback(a => (null !== K && (j.current = (0,
        m.mountLinkInstance)(a, D, K, B, q, y)),
        () => {
            j.current && ((0,
            m.unmountLinkForCurrentNavigation)(j.current),
            j.current = null),
            (0,
            m.unmountPrefetchableInstance)(a)
        }
        ), [q, D, K, B, y])
          , G = {
            ref: (0,
            o.useMergedRef)(U, F),
            onClick(e) {
                O || "function" != typeof w || w(e),
                O && s.props && "function" == typeof s.props.onClick && s.props.onClick(e),
                !K || e.defaultPrevented || function(e, n, l, i, s, t, d) {
                    if ("u" > typeof window) {
                        let c, {nodeName: o} = e.currentTarget;
                        if ("A" === o.toUpperCase() && ((c = e.currentTarget.getAttribute("target")) && "_self" !== c || e.metaKey || e.ctrlKey || e.shiftKey || e.altKey || e.nativeEvent && 2 === e.nativeEvent.which) || e.currentTarget.hasAttribute("download"))
                            return;
                        if (!(0,
                        p.isLocalURL)(n)) {
                            i && (e.preventDefault(),
                            location.replace(n));
                            return
                        }
                        if (e.preventDefault(),
                        t) {
                            let a = !1;
                            if (t({
                                preventDefault: () => {
                                    a = !0
                                }
                            }),
                            a)
                                return
                        }
                        let {dispatchNavigateAction: u} = a.r(19998);
                        r.default.startTransition( () => {
                            u(n, i ? "replace" : "push", !1 === s ? g.ScrollBehavior.NoScroll : g.ScrollBehavior.Default, l.current, d)
                        }
                        )
                    }
                }(e, D, j, S, I, T, E)
            },
            onMouseEnter(a) {
                O || "function" != typeof L || L(a),
                O && s.props && "function" == typeof s.props.onMouseEnter && s.props.onMouseEnter(a),
                K && q && (0,
                m.onNavigationIntent)(a.currentTarget, !0 === R)
            },
            onTouchStart: function(a) {
                O || "function" != typeof P || P(a),
                O && s.props && "function" == typeof s.props.onTouchStart && s.props.onTouchStart(a),
                K && q && (0,
                m.onNavigationIntent)(a.currentTarget, !0 === R)
            }
        };
        return (0,
        u.isAbsoluteUrl)(D) ? G.href = D : O && !A && ("a" !== s.type || "href"in s.props) || (G.href = (0,
        h.addBasePath)(D)),
        k = O ? r.default.cloneElement(s, G) : (0,
        t.jsx)("a", {
            ...z,
            ...G,
            children: i
        }),
        (0,
        t.jsx)(f.Provider, {
            value: _,
            children: k
        })
    }
    a.r(15553);
    let f = (0,
    r.createContext)(m.IDLE_LINK_STATUS)
      , _ = () => (0,
    r.useContext)(f);
    ("function" == typeof n.default || "object" == typeof n.default && null !== n.default) && void 0 === n.default.__esModule && (Object.defineProperty(n.default, "__esModule", {
        value: !0
    }),
    Object.assign(n.default, n),
    e.exports = n.default)
}
, 95870, a => {
    "use strict";
    let e = (0,
    a.i(17381).default)("book-open", [["path", {
        d: "M12 7v14",
        key: "1akyts"
    }], ["path", {
        d: "M3 18a1 1 0 0 1-1-1V4a1 1 0 0 1 1-1h5a4 4 0 0 1 4 4 4 4 0 0 1 4-4h5a1 1 0 0 1 1 1v13a1 1 0 0 1-1 1h-6a3 3 0 0 0-3 3 3 3 0 0 0-3-3z",
        key: "ruj8y"
    }]]);
    a.s(["BookOpen", 0, e], 95870)
}
, 62165, a => {
    "use strict";
    let e = (0,
    a.i(17381).default)("bot", [["path", {
        d: "M12 8V4H8",
        key: "hb8ula"
    }], ["rect", {
        width: "16",
        height: "12",
        x: "4",
        y: "8",
        rx: "2",
        key: "enze0r"
    }], ["path", {
        d: "M2 14h2",
        key: "vft8re"
    }], ["path", {
        d: "M20 14h2",
        key: "4cs60a"
    }], ["path", {
        d: "M15 13v2",
        key: "1xurst"
    }], ["path", {
        d: "M9 13v2",
        key: "rq6x2g"
    }]]);
    a.s(["Bot", 0, e], 62165)
}
, 35363, a => {
    "use strict";
    let e = (0,
    a.i(17381).default)("trophy", [["path", {
        d: "M10 14.66v1.626a2 2 0 0 1-.976 1.696A5 5 0 0 0 7 21.978",
        key: "1n3hpd"
    }], ["path", {
        d: "M14 14.66v1.626a2 2 0 0 0 .976 1.696A5 5 0 0 1 17 21.978",
        key: "rfe1zi"
    }], ["path", {
        d: "M18 9h1.5a1 1 0 0 0 0-5H18",
        key: "7xy6bh"
    }], ["path", {
        d: "M4 22h16",
        key: "57wxv0"
    }], ["path", {
        d: "M6 9a6 6 0 0 0 12 0V3a1 1 0 0 0-1-1H7a1 1 0 0 0-1 1z",
        key: "1mhfuq"
    }], ["path", {
        d: "M6 9H4.5a1 1 0 0 1 0-5H6",
        key: "tex48p"
    }]]);
    a.s(["Trophy", 0, e], 35363)
}
, 1131, a => {
    "use strict";
    a.s(["mergeClasses", 0, (...a) => a.filter( (a, e, n) => !!a && "" !== a.trim() && n.indexOf(a) === e).join(" ").trim()])
}
, 91101, 66439, a => {
    "use strict";
    a.s(["default", 0, {
        xmlns: "http://www.w3.org/2000/svg",
        width: 24,
        height: 24,
        viewBox: "0 0 24 24",
        fill: "none",
        stroke: "currentColor",
        strokeWidth: 2,
        strokeLinecap: "round",
        strokeLinejoin: "round"
    }], 91101),
    a.s(["hasA11yProp", 0, a => {
        for (let e in a)
            if (e.startsWith("aria-") || "role" === e || "title" === e)
                return !0;
        return !1
    }
    ], 66439)
}
, 24499, a => {
    "use strict";
    var e = a.i(30668)
      , n = a.i(91101)
      , l = a.i(66439)
      , i = a.i(1131);
    let s = (0,
    e.createContext)({})
      , t = (0,
    e.forwardRef)( ({color: a, size: t, strokeWidth: r, absoluteStrokeWidth: d, className: c="", children: o, iconNode: u, ...h}, g) => {
        let {size: m=24, strokeWidth: p=2, absoluteStrokeWidth: b=!1, color: k="currentColor", className: f=""} = (0,
        e.useContext)(s) ?? {}
          , _ = d ?? b ? 24 * Number(r ?? p) / Number(t ?? m) : r ?? p;
        return (0,
        e.createElement)("svg", {
            ref: g,
            ...n.default,
            width: t ?? m ?? n.default.width,
            height: t ?? m ?? n.default.height,
            stroke: a ?? k,
            strokeWidth: _,
            className: (0,
            i.mergeClasses)("lucide", f, c),
            ...!o && !(0,
            l.hasA11yProp)(h) && {
                "aria-hidden": "true"
            },
            ...h
        }, [...u.map( ([a,n]) => (0,
        e.createElement)(a, n)), ...Array.isArray(o) ? o : [o]])
    }
    );
    a.s(["default", 0, t], 24499)
}
, 17381, a => {
    "use strict";
    var e = a.i(30668)
      , n = a.i(1131);
    let l = a => {
        let e = a.replace(/^([A-Z])|[\s-_]+(\w)/g, (a, e, n) => n ? n.toUpperCase() : e.toLowerCase());
        return e.charAt(0).toUpperCase() + e.slice(1)
    }
    ;
    var i = a.i(24499);
    a.s(["default", 0, (a, s) => {
        let t = (0,
        e.forwardRef)( ({className: t, ...r}, d) => (0,
        e.createElement)(i.default, {
            ref: d,
            iconNode: s,
            className: (0,
            n.mergeClasses)(`lucide-${l(a).replace(/([a-z0-9])([A-Z])/g, "$1-$2").toLowerCase()}`, `lucide-${a}`, t),
            ...r
        }));
        return t.displayName = l(a),
        t
    }
    ], 17381)
}
, 75449, a => {
    "use strict";
    let e = (0,
    a.i(17381).default)("wallet", [["path", {
        d: "M19 7V4a1 1 0 0 0-1-1H5a2 2 0 0 0 0 4h15a1 1 0 0 1 1 1v4h-3a2 2 0 0 0 0 4h3a1 1 0 0 0 1-1v-2a1 1 0 0 0-1-1",
        key: "18etb6"
    }], ["path", {
        d: "M3 5v14a2 2 0 0 0 2 2h15a1 1 0 0 0 1-1v-4",
        key: "xoc0q4"
    }]]);
    a.s(["Wallet", 0, e], 75449)
}
, 84785, a => {
    "use strict";
    let e = (0,
    a.i(17381).default)("trending-up", [["path", {
        d: "M16 7h6v6",
        key: "box55l"
    }], ["path", {
        d: "m22 7-8.5 8.5-5-5L2 17",
        key: "1t1m79"
    }]]);
    a.s(["TrendingUp", 0, e], 84785)
}
, 17340, a => {
    "use strict";
    let e = (0,
    a.i(17381).default)("shield-alert", [["path", {
        d: "M20 13c0 5-3.5 7.5-7.66 8.95a1 1 0 0 1-.67-.01C7.5 20.5 4 18 4 13V6a1 1 0 0 1 1-1c2 0 4.5-1.2 6.24-2.72a1.17 1.17 0 0 1 1.52 0C14.51 3.81 17 5 19 5a1 1 0 0 1 1 1z",
        key: "oel41y"
    }], ["path", {
        d: "M12 8v4",
        key: "1got3b"
    }], ["path", {
        d: "M12 16h.01",
        key: "1drbdi"
    }]]);
    a.s(["ShieldAlert", 0, e], 17340)
}
, 41452, 47664, a => {
    "use strict";
    var e = a.i(17381);
    let n = (0,
    e.default)("flame", [["path", {
        d: "M12 3q1 4 4 6.5t3 5.5a1 1 0 0 1-14 0 5 5 0 0 1 1-3 1 1 0 0 0 5 0c0-2-1.5-3-1.5-5q0-2 2.5-4",
        key: "1slcih"
    }]]);
    a.s(["Flame", 0, n], 41452);
    let l = (0,
    e.default)("target", [["circle", {
        cx: "12",
        cy: "12",
        r: "10",
        key: "1mglay"
    }], ["circle", {
        cx: "12",
        cy: "12",
        r: "6",
        key: "1vlfrh"
    }], ["circle", {
        cx: "12",
        cy: "12",
        r: "2",
        key: "1c9p78"
    }]]);
    a.s(["Target", 0, l], 47664)
}
, 50912, a => {
    "use strict";
    var e = a.i(48277)
      , n = a.i(16506)
      , l = a.i(75449)
      , i = a.i(7087)
      , s = a.i(35363)
      , t = a.i(41452)
      , r = a.i(62165)
      , d = a.i(95870)
      , c = a.i(84785)
      , o = a.i(47664)
      , u = a.i(98301)
      , h = a.i(17381);
    let g = (0,
    h.default)("eye", [["path", {
        d: "M2.062 12.348a1 1 0 0 1 0-.696 10.75 10.75 0 0 1 19.876 0 1 1 0 0 1 0 .696 10.75 10.75 0 0 1-19.876 0",
        key: "1nclc0"
    }], ["circle", {
        cx: "12",
        cy: "12",
        r: "3",
        key: "1v7zrd"
    }]])
      , m = (0,
    h.default)("piggy-bank", [["path", {
        d: "M11 17h3v2a1 1 0 0 0 1 1h2a1 1 0 0 0 1-1v-3a3.16 3.16 0 0 0 2-2h1a1 1 0 0 0 1-1v-2a1 1 0 0 0-1-1h-1a5 5 0 0 0-2-4V3a4 4 0 0 0-3.2 1.6l-.3.4H11a6 6 0 0 0-6 6v1a5 5 0 0 0 2 4v3a1 1 0 0 0 1 1h2a1 1 0 0 0 1-1z",
        key: "1piglc"
    }], ["path", {
        d: "M16 10h.01",
        key: "1m94wz"
    }], ["path", {
        d: "M2 8v1a2 2 0 0 0 2 2h1",
        key: "1env43"
    }]]);
    var p = a.i(17340);
    let b = (0,
    h.default)("graduation-cap", [["path", {
        d: "M21.42 10.922a1 1 0 0 0-.019-1.838L12.83 5.18a2 2 0 0 0-1.66 0L2.6 9.08a1 1 0 0 0 0 1.832l8.57 3.908a2 2 0 0 0 1.66 0z",
        key: "j76jl0"
    }], ["path", {
        d: "M22 10v6",
        key: "1lu8f3"
    }], ["path", {
        d: "M6 12.5V16a6 3 0 0 0 12 0v-3.5",
        key: "1r8lef"
    }]])
      , k = (0,
    h.default)("user-plus", [["path", {
        d: "M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2",
        key: "1yyitq"
    }], ["circle", {
        cx: "9",
        cy: "7",
        r: "4",
        key: "nufk8"
    }], ["line", {
        x1: "19",
        x2: "19",
        y1: "8",
        y2: "14",
        key: "1bvyxn"
    }], ["line", {
        x1: "22",
        x2: "16",
        y1: "11",
        y2: "11",
        key: "1shjgl"
    }]])
      , f = (0,
    h.default)("pen-line", [["path", {
        d: "M13 21h8",
        key: "1jsn5i"
    }], ["path", {
        d: "M21.174 6.812a1 1 0 0 0-3.986-3.987L3.842 16.174a2 2 0 0 0-.5.83l-1.321 4.352a.5.5 0 0 0 .623.622l4.353-1.32a2 2 0 0 0 .83-.497z",
        key: "1a8usu"
    }]])
      , _ = (0,
    h.default)("brain-circuit", [["path", {
        d: "M12 5a3 3 0 1 0-5.997.125 4 4 0 0 0-2.526 5.77 4 4 0 0 0 .556 6.588A4 4 0 1 0 12 18Z",
        key: "l5xja"
    }], ["path", {
        d: "M9 13a4.5 4.5 0 0 0 3-4",
        key: "10igwf"
    }], ["path", {
        d: "M6.003 5.125A3 3 0 0 0 6.401 6.5",
        key: "105sqy"
    }], ["path", {
        d: "M3.477 10.896a4 4 0 0 1 .585-.396",
        key: "ql3yin"
    }], ["path", {
        d: "M6 18a4 4 0 0 1-1.967-.516",
        key: "2e4loj"
    }], ["path", {
        d: "M12 13h4",
        key: "1ku699"
    }], ["path", {
        d: "M12 18h6a2 2 0 0 1 2 2v1",
        key: "105ag5"
    }], ["path", {
        d: "M12 8h8",
        key: "1lhi5i"
    }], ["path", {
        d: "M16 8V5a2 2 0 0 1 2-2",
        key: "u6izg6"
    }], ["circle", {
        cx: "16",
        cy: "13",
        r: ".5",
        key: "ry7gng"
    }], ["circle", {
        cx: "18",
        cy: "3",
        r: ".5",
        key: "1aiba7"
    }], ["circle", {
        cx: "20",
        cy: "21",
        r: ".5",
        key: "yhc1fs"
    }], ["circle", {
        cx: "20",
        cy: "8",
        r: ".5",
        key: "1e43v0"
    }]])
      , y = (0,
    h.default)("rocket", [["path", {
        d: "M12 15v5s3.03-.55 4-2c1.08-1.62 0-5 0-5",
        key: "qeys4"
    }], ["path", {
        d: "M4.5 16.5c-1.5 1.26-2 5-2 5s3.74-.5 5-2c.71-.84.7-2.13-.09-2.91a2.18 2.18 0 0 0-2.91-.09",
        key: "u4xsad"
    }], ["path", {
        d: "M9 12a22 22 0 0 1 2-3.95A12.88 12.88 0 0 1 22 2c0 2.72-.78 7.5-6 11a22.4 22.4 0 0 1-4 2z",
        key: "676m9"
    }], ["path", {
        d: "M9 12H4s.55-3.03 2-4c1.62-1.08 5 .05 5 .05",
        key: "92ym6u"
    }]]);
    var j = a.i(30668);
    let v = [{
        title: "Pencatatan Keuangan",
        desc: "Catat pemasukan, pengeluaran, dan utang-piutang dengan cepat. Digital Ledger yang rapi dan gampang dipahami.",
        icon: l.Wallet,
        color: "purple"
    }, {
        title: "AI Insight & XAI",
        desc: "Insight keuangan otomatis dari AI, plus penjelasan transparan (Explainable AI) yang mudah dipahami Gen-Z.",
        icon: i.Sparkles,
        color: "lime"
    }, {
        title: "Gamifikasi Seru",
        desc: "Daily Streak, Badge Achievement, dan Leaderboard. Makin rajin catat, makin banyak reward!",
        icon: s.Trophy,
        color: "orange"
    }, {
        title: "Gen-Z Warning System",
        desc: "Notifikasi sarkas & roasting kalau kamu kebanyakan impulsif. Dijamin bikin mikir sebelum checkout!",
        icon: t.Flame,
        color: "purple"
    }, {
        title: "Chatbot Finansial AI",
        desc: "Tanya apa aja soal keuangan! Chatbot AI yang paham bahasa Gen-Z dan kasih solusi praktis.",
        icon: r.Bot,
        color: "lime"
    }, {
        title: "Edukasi Adaptif",
        desc: "Materi edukasi finansial yang menyesuaikan level dan kebutuhan kamu. Belajar sambil main!",
        icon: d.BookOpen,
        color: "orange"
    }]
      , x = [{
        num: "01",
        title: "Daftar Akun",
        desc: "Buat akun gratis dalam 30 detik. Tanpa ribet, tanpa kartu kredit.",
        icon: k,
        color: "purple"
    }, {
        num: "02",
        title: "Catat Keuanganmu",
        desc: "Mulai catat pemasukan & pengeluaran harianmu dengan mudah.",
        icon: f,
        color: "lime"
    }, {
        num: "03",
        title: "Dapatkan Insight AI",
        desc: "AI kami analisis pola keuanganmu dan kasih rekomendasi cerdas.",
        icon: _,
        color: "orange"
    }, {
        num: "04",
        title: "Level Up!",
        desc: "Kumpulkan streak, badge, dan naik peringkat di leaderboard!",
        icon: y,
        color: "purple"
    }]
      , N = [{
        rank: 1,
        name: "Rina S.",
        streak: 45,
        badge: 12,
        score: 9800,
        medal: "gold"
    }, {
        rank: 2,
        name: "Budi P.",
        streak: 38,
        badge: 10,
        score: 8650,
        medal: "silver"
    }, {
        rank: 3,
        name: "Sari M.",
        streak: 32,
        badge: 9,
        score: 7920,
        medal: "bronze"
    }, {
        rank: 4,
        name: "Andi K.",
        streak: 28,
        badge: 7,
        score: 6540,
        medal: ""
    }, {
        rank: 5,
        name: "Dina W.",
        streak: 25,
        badge: 6,
        score: 5890,
        medal: ""
    }]
      , M = [{
        title: "Kenali Pola Pengeluaranmu",
        desc: "Riset menunjukkan 68% Gen-Z tidak melacak pengeluaran harian mereka. Dengan memahami ke mana uang pergi, kamu bisa mengidentifikasi kebocoran keuangan dan menghemat hingga 30% setiap bulannya.",
        icon: g,
        color: "purple",
        stat: "68%",
        statLabel: "Gen-Z tidak tracking"
    }, {
        title: "Bangun Kebiasaan Menabung Sejak Dini",
        desc: "Mulai menabung 10-20% dari penghasilan di usia muda memberi keuntungan besar berkat compound interest. Rp 500.000/bulan yang ditabung sejak usia 20 bisa menjadi ratusan juta di usia 30.",
        icon: m,
        color: "lime",
        stat: "10-20%",
        statLabel: "ideal untuk ditabung"
    }, {
        title: "Hindari Impulsive Spending",
        desc: "Fenomena FOMO dan flash sale menyebabkan 73% anak muda melakukan pembelian impulsif. Dengan 'aturan 24 jam' — tunda pembelian 24 jam sebelum checkout — kamu bisa mengurangi pengeluaran tidak perlu secara signifikan.",
        icon: p.ShieldAlert,
        color: "orange",
        stat: "73%",
        statLabel: "belanja impulsif"
    }, {
        title: "Literasi Keuangan = Masa Depan Cerah",
        desc: "Menurut OJK, tingkat literasi keuangan Gen-Z Indonesia masih di bawah 50%. Memahami konsep dasar seperti budgeting, investasi, dan manajemen utang adalah fondasi untuk kemandirian finansial.",
        icon: b,
        color: "purple",
        stat: "<50%",
        statLabel: "literasi keuangan"
    }]
      , A = [{
        text: "Sumpah, AI-nya jujur banget pas ngeroasting pengeluaran kopi gue. Sekarang tabungan gue jadi lebih sehat!",
        name: "Jessica A.",
        handle: "@jess_finance",
        color: "purple"
    }, {
        text: "Badge-nya bikin ketagihan nyatet. Berasa main game tapi dapet cuan karena pengeluaran jadi lebih terkontrol.",
        name: "Kevin R.",
        handle: "@kvn_mulyono",
        color: "lime"
    }, {
        text: "Dulu sering kena FOMO flash sale, sekarang ada CEAMIS yang selalu ngingetin buat mikir 24 jam. Mantap!",
        name: "Sari K.",
        handle: "@sari_kurnia",
        color: "navy"
    }]
      , S = [{
        q: "Apakah data keuanganku aman?",
        a: "Sangat aman! Kami menggunakan enkripsi tingkat bank dan tidak pernah membagikan data pribadimu ke pihak ketiga tanpa izin."
    }, {
        q: "Berapa biaya langganannya?",
        a: "CEAMIS bisa digunakan 100% gratis untuk fitur dasar. Kami juga punya fitur Premium untuk kamu yang mau analisis AI lebih mendalam."
    }, {
        q: "Gimana cara AI-nya ngeroasting aku?",
        a: "AI kami menganalisis pola transaksi kamu. Kalau kamu beli barang impulsif yang nggak perlu, AI bakal kasih notifikasi 'pedes' biar kamu sadar!"
    }];
    function C(a=.15) {
        let e = (0,
        j.useRef)(null)
          , [n,l] = (0,
        j.useState)(!1);
        return (0,
        j.useEffect)( () => {
            let n = e.current;
            if (!n)
                return;
            let i = new IntersectionObserver( ([a]) => {
                a.isIntersecting && l(!0)
            }
            ,{
                threshold: a
            });
            return i.observe(n),
            () => i.disconnect()
        }
        , [a]),
        {
            ref: e,
            visible: n
        }
    }
    a.s(["default", 0, function() {
        let a = C()
          , l = C()
          , i = C()
          , s = C()
          , t = C()
          , r = C()
          , d = C()
          , h = C()
          , g = C()
          , [m,p] = (0,
        j.useState)(null)
          , [b,k] = (0,
        j.useState)(!1);
        return (0,
        j.useEffect)( () => {
            k(!0)
        }
        , []),
        (0,
        e.jsxs)("div", {
            className: "landing-page",
            children: [(0,
            e.jsx)("div", {
                className: "landing-banner",
                children: (0,
                e.jsx)("div", {
                    className: "landing-banner__track",
                    children: [...Array(10)].map( (a, n) => (0,
                    e.jsxs)("div", {
                        className: "landing-banner__item",
                        children: [(0,
                        e.jsx)("span", {
                            className: "landing-banner__dot"
                        }), "Platform keuangan Gen-Z paling fun se-Indonesia"]
                    }, n))
                })
            }), (0,
            e.jsxs)("nav", {
                className: "landing-nav",
                children: [(0,
                e.jsxs)("div", {
                    className: "landing-nav__brand",
                    children: [(0,
                    e.jsx)("div", {
                        className: "landing-nav__logo",
                        children: "C"
                    }), (0,
                    e.jsx)("span", {
                        className: "landing-nav__name",
                        children: "CEAMIS"
                    })]
                }), (0,
                e.jsxs)("div", {
                    className: "landing-nav__links",
                    children: [(0,
                    e.jsx)(n.default, {
                        href: "/auth",
                        className: "btn-brutal btn-brutal--secondary btn-brutal--sm",
                        children: "Login"
                    }), (0,
                    e.jsx)(n.default, {
                        href: "/auth",
                        className: "btn-brutal btn-brutal--primary btn-brutal--sm",
                        children: "Daftar Gratis"
                    })]
                })]
            }), (0,
            e.jsx)("section", {
                ref: a.ref,
                className: `landing-hero ${a.visible ? "landing-hero--visible" : ""}`,
                children: (0,
                e.jsxs)("div", {
                    className: "landing-container landing-hero__wrapper",
                    children: [(0,
                    e.jsxs)("div", {
                        className: "landing-hero__content",
                        children: [(0,
                        e.jsx)("div", {
                            className: "badge-brutal badge-brutal--purple",
                            style: {
                                marginBottom: "1.5rem",
                                display: "inline-flex"
                            },
                            children: "Baru — Fitur Chatbot AI sudah tersedia!"
                        }), (0,
                        e.jsxs)("h1", {
                            className: "landing-hero__title",
                            children: ["Kontrol Impuls", (0,
                            e.jsx)("br", {}), "Keuanganmu,", " ", (0,
                            e.jsx)("span", {
                                className: "landing-hero__highlight",
                                children: "Level Up"
                            }), " ", "Tiap Hari"]
                        }), (0,
                        e.jsx)("p", {
                            className: "landing-hero__subtitle",
                            children: "CEAMIS bantu Gen-Z Indonesia catat keuangan dengan cara yang fun — AI insight, gamifikasi seru, dan notifikasi sarkas yang bikin kamu mikir dua kali sebelum checkout!"
                        }), (0,
                        e.jsxs)("div", {
                            className: "landing-hero__actions",
                            children: [(0,
                            e.jsx)(n.default, {
                                href: "/auth",
                                className: "btn-brutal btn-brutal--primary btn-brutal--lg",
                                children: "Mulai Sekarang — Gratis!"
                            }), (0,
                            e.jsx)(n.default, {
                                href: "#fitur",
                                className: "btn-brutal btn-brutal--secondary btn-brutal--lg",
                                children: "Lihat Fitur"
                            })]
                        })]
                    }), (0,
                    e.jsxs)("div", {
                        className: "landing-hero__visual",
                        children: [(0,
                        e.jsx)("div", {
                            className: "landing-hero__blob"
                        }), (0,
                        e.jsx)("img", {
                            src: "/images/hero.png",
                            alt: "CEAMIS Illustration",
                            className: "landing-hero__main-img"
                        }), (0,
                        e.jsxs)("div", {
                            className: "landing-hero__float landing-hero__float--1",
                            children: [(0,
                            e.jsx)(u.Zap, {
                                size: 18,
                                strokeWidth: 3
                            }), " Level 12 Reached"]
                        }), (0,
                        e.jsxs)("div", {
                            className: "landing-hero__float landing-hero__float--2",
                            children: [(0,
                            e.jsx)(c.TrendingUp, {
                                size: 18,
                                strokeWidth: 3
                            }), " 15 Day Streak"]
                        }), (0,
                        e.jsxs)("div", {
                            className: "landing-hero__float landing-hero__float--3",
                            children: [(0,
                            e.jsx)(o.Target, {
                                size: 18,
                                strokeWidth: 3
                            }), " Rp 500k Saved"]
                        })]
                    })]
                })
            }), (0,
            e.jsxs)("section", {
                ref: l.ref,
                className: `landing-stats ${l.visible ? "landing-stats--visible" : ""}`,
                children: [(0,
                e.jsxs)("div", {
                    className: "landing-stats__item card-brutal",
                    children: [(0,
                    e.jsx)("div", {
                        className: "landing-stats__value",
                        children: "10K+"
                    }), (0,
                    e.jsx)("div", {
                        className: "landing-stats__label",
                        children: "Impuls Terkontrol"
                    })]
                }), (0,
                e.jsxs)("div", {
                    className: "landing-stats__item card-brutal",
                    children: [(0,
                    e.jsx)("div", {
                        className: "landing-stats__value",
                        children: "Rp 1M+"
                    }), (0,
                    e.jsx)("div", {
                        className: "landing-stats__label",
                        children: "Tabungan Terselamatkan"
                    })]
                }), (0,
                e.jsxs)("div", {
                    className: "landing-stats__item card-brutal",
                    children: [(0,
                    e.jsx)("div", {
                        className: "landing-stats__value",
                        children: "4.9/5"
                    }), (0,
                    e.jsx)("div", {
                        className: "landing-stats__label",
                        children: "Rating Gen-Z"
                    })]
                })]
            }), (0,
            e.jsxs)("section", {
                id: "fitur",
                ref: i.ref,
                className: `landing-features ${i.visible ? "landing-features--visible" : ""}`,
                children: [(0,
                e.jsx)("div", {
                    className: "landing-section-label",
                    children: (0,
                    e.jsx)("span", {
                        className: "badge-brutal badge-brutal--purple",
                        children: "Fitur Unggulan"
                    })
                }), (0,
                e.jsxs)("h2", {
                    className: "landing-section-title",
                    children: ["Semua yang kamu butuhkan untuk ", (0,
                    e.jsx)("span", {
                        style: {
                            color: "var(--color-primary)"
                        },
                        children: "cerdas finansial"
                    })]
                }), (0,
                e.jsx)("p", {
                    className: "landing-section-subtitle",
                    children: "6 fitur canggih yang dirancang khusus buat Gen-Z Indonesia"
                }), (0,
                e.jsx)("div", {
                    className: "landing-features__grid",
                    children: v.map( (a, n) => (0,
                    e.jsxs)("div", {
                        className: `landing-feature-card card-brutal landing-feature-card--${a.color}`,
                        children: [(0,
                        e.jsx)("div", {
                            className: "landing-feature-card__icon-box",
                            children: (0,
                            e.jsx)(a.icon, {
                                size: 32,
                                strokeWidth: 2.5
                            })
                        }), (0,
                        e.jsxs)("div", {
                            className: "landing-feature-card__content",
                            children: [(0,
                            e.jsx)("h3", {
                                className: "landing-feature-card__title",
                                style: {
                                    color: "#0A192F",
                                    display: "block"
                                },
                                children: a.title
                            }), (0,
                            e.jsx)("p", {
                                className: "landing-feature-card__desc",
                                children: a.desc
                            })]
                        })]
                    }, n))
                })]
            }), (0,
            e.jsx)("section", {
                ref: s.ref,
                className: `landing-edukasi ${s.visible ? "landing-edukasi--visible" : ""}`,
                children: (0,
                e.jsxs)("div", {
                    className: "landing-container",
                    children: [(0,
                    e.jsx)("div", {
                        className: "landing-section-label",
                        children: (0,
                        e.jsx)("span", {
                            className: "badge-brutal badge-brutal--lime",
                            children: "Edukasi Finansial"
                        })
                    }), (0,
                    e.jsxs)("h2", {
                        className: "landing-section-title",
                        children: ["Mengapa ", (0,
                        e.jsx)("span", {
                            style: {
                                color: "var(--color-lime)"
                            },
                            children: "pengelolaan keuangan"
                        }), " itu penting?"]
                    }), (0,
                    e.jsx)("p", {
                        className: "landing-section-subtitle",
                        children: "Literasi keuangan adalah kunci menuju kemandirian finansial — terutama bagi generasi muda"
                    }), (0,
                    e.jsx)("div", {
                        className: "landing-edukasi__intro card-brutal",
                        children: (0,
                        e.jsxs)("p", {
                            children: ["Di era digital, godaan belanja online ada di ujung jari. ", (0,
                            e.jsx)("strong", {
                                children: "Gen-Z Indonesia"
                            }), " menghadapi tantangan unik: gaya hidup konsumtif, FOMO, dan kurangnya edukasi keuangan formal. CEAMIS hadir untuk mengubah cara pandang generasi muda terhadap uang — dari sekadar menghabiskan menjadi ", (0,
                            e.jsx)("strong", {
                                children: "mengelola dengan cerdas"
                            }), "."]
                        })
                    }), (0,
                    e.jsx)("div", {
                        className: "landing-edukasi__grid",
                        children: M.map( (a, n) => (0,
                        e.jsxs)("div", {
                            className: `landing-edukasi__card card-brutal landing-edukasi__card--${a.color}`,
                            children: [(0,
                            e.jsxs)("div", {
                                className: "landing-edukasi__card-header",
                                children: [(0,
                                e.jsx)("div", {
                                    className: `landing-edukasi__icon-box landing-edukasi__icon-box--${a.color}`,
                                    children: (0,
                                    e.jsx)(a.icon, {
                                        size: 24,
                                        strokeWidth: 2.5
                                    })
                                }), (0,
                                e.jsxs)("div", {
                                    className: "landing-edukasi__stat-badge",
                                    children: [(0,
                                    e.jsx)("span", {
                                        className: "landing-edukasi__stat-value",
                                        children: a.stat
                                    }), (0,
                                    e.jsx)("span", {
                                        className: "landing-edukasi__stat-label",
                                        children: a.statLabel
                                    })]
                                })]
                            }), (0,
                            e.jsx)("h3", {
                                className: "landing-edukasi__card-title",
                                children: a.title
                            }), (0,
                            e.jsx)("p", {
                                className: "landing-edukasi__card-desc",
                                children: a.desc
                            })]
                        }, n))
                    })]
                })
            }), (0,
            e.jsxs)("section", {
                ref: t.ref,
                className: `landing-leaderboard ${t.visible ? "landing-leaderboard--visible" : ""}`,
                children: [(0,
                e.jsx)("div", {
                    className: "landing-section-label",
                    children: (0,
                    e.jsx)("span", {
                        className: "badge-brutal badge-brutal--purple",
                        children: "Leaderboard"
                    })
                }), (0,
                e.jsxs)("h2", {
                    className: "landing-section-title",
                    children: ["Kompetisi sehat untuk ", (0,
                    e.jsx)("span", {
                        style: {
                            color: "var(--color-primary)"
                        },
                        children: "motivasi menabung"
                    })]
                }), (0,
                e.jsx)("p", {
                    className: "landing-section-subtitle",
                    children: "Lihat siapa yang paling konsisten dalam mengelola keuangan mereka"
                }), (0,
                e.jsxs)("div", {
                    className: "landing-leaderboard__table card-brutal",
                    children: [(0,
                    e.jsxs)("div", {
                        className: "landing-leaderboard__header",
                        children: [(0,
                        e.jsx)("span", {
                            className: "landing-leaderboard__col landing-leaderboard__col--rank",
                            children: "Rank"
                        }), (0,
                        e.jsx)("span", {
                            className: "landing-leaderboard__col landing-leaderboard__col--name",
                            children: "Pengguna"
                        }), (0,
                        e.jsx)("span", {
                            className: "landing-leaderboard__col",
                            children: "Streak"
                        }), (0,
                        e.jsx)("span", {
                            className: "landing-leaderboard__col",
                            children: "Badge"
                        }), (0,
                        e.jsx)("span", {
                            className: "landing-leaderboard__col landing-leaderboard__col--score",
                            children: "Skor"
                        })]
                    }), N.map(a => (0,
                    e.jsxs)("div", {
                        className: `landing-leaderboard__row ${a.medal ? `landing-leaderboard__row--${a.medal}` : ""}`,
                        children: [(0,
                        e.jsx)("span", {
                            className: "landing-leaderboard__col landing-leaderboard__col--rank",
                            children: (0,
                            e.jsx)("span", {
                                className: `landing-leaderboard__rank-num ${a.medal ? `landing-leaderboard__rank-num--${a.medal}` : ""}`,
                                children: a.rank
                            })
                        }), (0,
                        e.jsxs)("span", {
                            className: "landing-leaderboard__col landing-leaderboard__col--name",
                            children: [(0,
                            e.jsx)("span", {
                                className: "landing-leaderboard__avatar",
                                children: a.name.charAt(0)
                            }), a.name]
                        }), (0,
                        e.jsxs)("span", {
                            className: "landing-leaderboard__col",
                            children: [(0,
                            e.jsx)("strong", {
                                children: a.streak
                            }), " hari"]
                        }), (0,
                        e.jsxs)("span", {
                            className: "landing-leaderboard__col",
                            children: [(0,
                            e.jsx)("strong", {
                                children: a.badge
                            }), " badge"]
                        }), (0,
                        e.jsxs)("span", {
                            className: "landing-leaderboard__col landing-leaderboard__col--score",
                            children: [(0,
                            e.jsx)("strong", {
                                children: b ? a.score.toLocaleString() : "..."
                            }), " pts"]
                        })]
                    }, a.rank))]
                }), (0,
                e.jsx)("p", {
                    style: {
                        textAlign: "center",
                        fontFamily: "var(--font-body)",
                        fontSize: "0.875rem",
                        color: "var(--color-text-muted)",
                        marginTop: "1.5rem"
                    },
                    children: "* Data di atas merupakan contoh simulasi leaderboard CEAMIS"
                })]
            }), (0,
            e.jsx)("section", {
                ref: r.ref,
                className: `landing-testimonials ${r.visible ? "landing-testimonials--visible" : ""}`,
                children: (0,
                e.jsxs)("div", {
                    className: "landing-container",
                    children: [(0,
                    e.jsx)("div", {
                        className: "landing-section-label",
                        children: (0,
                        e.jsx)("span", {
                            className: "badge-brutal badge-brutal--purple",
                            children: "Apa Kata Mereka?"
                        })
                    }), (0,
                    e.jsxs)("h2", {
                        className: "landing-section-title",
                        style: {
                            color: "var(--color-navy)"
                        },
                        children: ["Ribuan Gen-Z sudah ", (0,
                        e.jsx)("span", {
                            style: {
                                color: "var(--color-primary)"
                            },
                            children: "level up"
                        }), " finansial"]
                    }), (0,
                    e.jsx)("p", {
                        className: "landing-section-subtitle",
                        style: {
                            color: "var(--color-navy)"
                        },
                        children: "Bukan cuma teori, tapi aksi nyata buat dompet lebih sehat"
                    }), (0,
                    e.jsx)("div", {
                        className: "landing-testimonials__grid",
                        children: A.map( (a, n) => (0,
                        e.jsxs)("div", {
                            className: `testimonial-bubble testimonial-bubble--${a.color}`,
                            children: [(0,
                            e.jsxs)("p", {
                                className: "testimonial-bubble__text",
                                children: ['"', a.text, '"']
                            }), (0,
                            e.jsxs)("div", {
                                className: "testimonial-bubble__user",
                                children: [(0,
                                e.jsx)("div", {
                                    className: "testimonial-bubble__avatar",
                                    children: a.name.charAt(0)
                                }), (0,
                                e.jsxs)("div", {
                                    className: "testimonial-bubble__info",
                                    children: [(0,
                                    e.jsx)("span", {
                                        className: "testimonial-bubble__name",
                                        children: a.name
                                    }), (0,
                                    e.jsx)("span", {
                                        className: "testimonial-bubble__handle",
                                        children: a.handle
                                    })]
                                })]
                            })]
                        }, n))
                    })]
                })
            }), (0,
            e.jsxs)("section", {
                ref: d.ref,
                className: `landing-steps ${d.visible ? "landing-steps--visible" : ""}`,
                children: [(0,
                e.jsx)("div", {
                    className: "landing-section-label",
                    children: (0,
                    e.jsx)("span", {
                        className: "badge-brutal badge-brutal--purple",
                        children: "Cara Kerja"
                    })
                }), (0,
                e.jsxs)("h2", {
                    className: "landing-section-title",
                    children: ["Mulai dalam ", (0,
                    e.jsx)("span", {
                        style: {
                            color: "var(--color-primary)"
                        },
                        children: "4 langkah"
                    }), " mudah"]
                }), (0,
                e.jsx)("div", {
                    className: "landing-steps__grid",
                    children: x.map( (a, n) => (0,
                    e.jsxs)("div", {
                        className: `landing-step-card card-brutal landing-step-card--${a.color}`,
                        children: [n < x.length - 1 && (0,
                        e.jsx)("div", {
                            className: "landing-step-card__connector"
                        }), (0,
                        e.jsx)("div", {
                            className: `landing-step-card__num-badge landing-step-card__num-badge--${a.color}`,
                            children: a.num
                        }), (0,
                        e.jsx)("div", {
                            className: `landing-step-card__icon-circle landing-step-card__icon-circle--${a.color}`,
                            children: (0,
                            e.jsx)(a.icon, {
                                size: 28,
                                strokeWidth: 2.5
                            })
                        }), (0,
                        e.jsx)("h3", {
                            className: "landing-step-card__title",
                            children: a.title
                        }), (0,
                        e.jsx)("p", {
                            className: "landing-step-card__desc",
                            children: a.desc
                        })]
                    }, n))
                })]
            }), (0,
            e.jsx)("section", {
                ref: h.ref,
                className: `landing-faq ${h.visible ? "landing-faq--visible" : ""}`,
                children: (0,
                e.jsxs)("div", {
                    className: "landing-container landing-container--narrow",
                    children: [(0,
                    e.jsx)("div", {
                        className: "landing-section-label",
                        children: (0,
                        e.jsx)("span", {
                            className: "badge-brutal badge-brutal--purple",
                            children: "FAQ"
                        })
                    }), (0,
                    e.jsx)("h2", {
                        className: "landing-section-title",
                        style: {
                            color: "var(--color-navy)"
                        },
                        children: "Pertanyaan yang Sering Muncul"
                    }), (0,
                    e.jsx)("p", {
                        className: "landing-section-subtitle",
                        style: {
                            color: "var(--color-navy)"
                        },
                        children: "Punya pertanyaan lain? Kami siap menjawab!"
                    }), (0,
                    e.jsx)("div", {
                        className: "landing-faq__list",
                        children: S.map( (a, n) => (0,
                        e.jsxs)("div", {
                            className: `faq-item ${m === n ? "faq-item--open" : ""}`,
                            onClick: () => p(m === n ? null : n),
                            children: [(0,
                            e.jsxs)("div", {
                                className: "faq-item__question",
                                children: [a.q, (0,
                                e.jsx)("div", {
                                    className: "faq-item__icon",
                                    children: "+"
                                })]
                            }), (0,
                            e.jsx)("div", {
                                className: "faq-item__answer",
                                children: (0,
                                e.jsx)("div", {
                                    className: "faq-item__answer-text",
                                    children: a.a
                                })
                            })]
                        }, n))
                    })]
                })
            }), (0,
            e.jsx)("section", {
                ref: g.ref,
                className: `landing-cta ${g.visible ? "landing-cta--visible" : ""}`,
                children: (0,
                e.jsxs)("div", {
                    className: "landing-cta__card",
                    children: [(0,
                    e.jsx)("div", {
                        className: "landing-cta__decoration"
                    }), (0,
                    e.jsx)("h2", {
                        className: "landing-cta__title",
                        children: "Siap Jadi Cerdas Finansial?"
                    }), (0,
                    e.jsx)("p", {
                        className: "landing-cta__desc",
                        children: "Bergabung dengan ribuan Gen-Z Indonesia yang sudah mulai kontrol keuangan mereka. Gratis, tanpa ribet!"
                    }), (0,
                    e.jsx)(n.default, {
                        href: "/auth",
                        className: "btn-brutal btn-brutal--primary btn-brutal--lg",
                        children: "Gabung Sekarang — Gratis!"
                    })]
                })
            }), (0,
            e.jsx)("footer", {
                className: "landing-footer",
                children: (0,
                e.jsxs)("div", {
                    className: "landing-footer__inner",
                    children: [(0,
                    e.jsxs)("div", {
                        className: "landing-footer__brand",
                        children: [(0,
                        e.jsx)("div", {
                            className: "landing-nav__logo",
                            style: {
                                width: 36,
                                height: 36,
                                fontSize: "1rem",
                                boxShadow: "3px 3px 0px var(--color-lime)"
                            },
                            children: "C"
                        }), (0,
                        e.jsxs)("div", {
                            children: [(0,
                            e.jsx)("div", {
                                style: {
                                    fontFamily: "var(--font-heading)",
                                    fontWeight: 700,
                                    fontSize: "1.125rem",
                                    color: "var(--color-white)"
                                },
                                children: "CEAMIS"
                            }), (0,
                            e.jsx)("div", {
                                style: {
                                    fontSize: "0.75rem",
                                    color: "rgba(255, 255, 255, 0.5)"
                                },
                                children: "Control Every Awful Money Impulse System"
                            })]
                        })]
                    }), (0,
                    e.jsxs)("div", {
                        className: "landing-footer__copy",
                        children: [(0,
                        e.jsx)("p", {
                            children: "© 2026 CEAMIS — Dibuat oleh Tim CEAMIS"
                        }), (0,
                        e.jsx)("p", {
                            children: "Cerdas Finansial, Kontrol Impuls, Raih Masa Depan"
                        })]
                    })]
                })
            })]
        })
    }
    ], 50912)
}
]);
