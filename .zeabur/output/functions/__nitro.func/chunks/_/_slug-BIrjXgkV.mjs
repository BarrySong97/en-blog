import { jsx, jsxs } from "react/jsx-runtime";
import { R as Route$2, c as createSsrRpc } from "./router-Cg6pBZHi.mjs";
import { Link, useLocation } from "@tanstack/react-router";
import { useSuspenseQuery, queryOptions } from "@tanstack/react-query";
import { R as Right } from "./right-C07iTDah.mjs";
import { motion } from "motion/react";
import { RichText } from "@payloadcms/richtext-lexical/react";
import * as e from "react";
import e__default, { useRef, useMemo, createContext, useContext, useImperativeHandle, useEffect, Children, cloneElement, useReducer, useState, useLayoutEffect, useCallback, forwardRef, isValidElement } from "react";
import { Image } from "@unpic/react";
import { I as ImageWithFallback, i as isObject, c as cn } from "./ImageWithFallback-JZsbMWov.mjs";
import { Icon } from "@iconify/react";
import * as ScrollAreaPrimitive from "@radix-ui/react-scroll-area";
import { cva } from "class-variance-authority";
import { useShiki } from "fumadocs-core/highlight/client";
import { createPortal } from "react-dom";
import { b as blogService } from "./blogs-Cd-pRNEC.mjs";
import { c as createServerFn } from "./server.mjs";
import { c as createLucideIcon } from "./createLucideIcon.mjs";
import "@tanstack/react-router-ssr-query";
import "@tanstack/react-router-devtools";
import "@tanstack/react-devtools";
import "@tanstack/react-query-devtools";
import "lenis";
import "node:async_hooks";
import "@tanstack/react-router/ssr/server";
import "qs-esm";
import "blurhash";
import "clsx";
import "tailwind-merge";
const __iconNode$2 = [
  ["path", { d: "m12 19-7-7 7-7", key: "1l729n" }],
  ["path", { d: "M19 12H5", key: "x3x0zl" }]
];
const ArrowLeft = createLucideIcon("arrow-left", __iconNode$2);
const __iconNode$1 = [["path", { d: "M20 6 9 17l-5-5", key: "1gmf2c" }]];
const Check = createLucideIcon("check", __iconNode$1);
const __iconNode = [
  ["rect", { width: "14", height: "14", x: "8", y: "8", rx: "2", ry: "2", key: "17jyea" }],
  ["path", { d: "M4 16c-1.1 0-2-.9-2-2V4c0-1.1.9-2 2-2h10c1.1 0 2 .9 2 2", key: "zix9uf" }]
];
const Copy = createLucideIcon("copy", __iconNode);
function h() {
  return h = Object.assign ? Object.assign.bind() : function(e2) {
    for (var n = 1; n < arguments.length; n++) {
      var t = arguments[n];
      for (var r in t) ({}).hasOwnProperty.call(t, r) && (e2[r] = t[r]);
    }
    return e2;
  }, h.apply(null, arguments);
}
function m(e2, n) {
  if (null == e2) return {};
  var t = {};
  for (var r in e2) if ({}.hasOwnProperty.call(e2, r)) {
    if (n.includes(r)) continue;
    t[r] = e2[r];
  }
  return t;
}
function g(e2) {
  var t = useRef({ fn: e2, curr: void 0 }).current;
  if (t.fn = e2, !t.curr) {
    var r = /* @__PURE__ */ Object.create(null);
    Object.keys(e2).forEach(function(e3) {
      r[e3] = function() {
        var n;
        return (n = t.fn[e3]).call.apply(n, [t.fn].concat([].slice.call(arguments)));
      };
    }), t.curr = r;
  }
  return t.curr;
}
function p(e2) {
  return useReducer(function(e3, n) {
    return h({}, e3, "function" == typeof n ? n(e3) : n);
  }, e2);
}
var w = createContext(void 0), y = "cubic-bezier(0.25, 0.8, 0.25, 1)", x = 20, C = "undefined" != typeof window && "ontouchstart" in window, b = function(e2, n, t) {
  return Math.max(Math.min(e2, t), n);
}, E = function(e2, n, t) {
  return void 0 === n && (n = 0), void 0 === t && (t = 0), b(e2, 1 * (1 - t), Math.max(6, n) * (1 + t));
}, k = "undefined" == typeof window || /ServerSideRendering/.test(navigator && navigator.userAgent) ? useEffect : useLayoutEffect;
function P(e2, t, r) {
  var o = useRef(t);
  o.current = t, useEffect(function() {
    function n(e3) {
      o.current(e3);
    }
    return e2 && window.addEventListener(e2, n, r), function() {
      e2 && window.removeEventListener(e2, n);
    };
  }, [e2]);
}
var _ = ["container"];
function M(n) {
  var t = n.container, r = void 0 === t ? document.body : t, i = m(n, _);
  return createPortal(e__default.createElement("div", h({}, i)), r);
}
function Y(n) {
  return e__default.createElement("svg", h({ width: "44", height: "44", viewBox: "0 0 768 768" }, n), e__default.createElement("path", { d: "M607.5 205.5l-178.5 178.5 178.5 178.5-45 45-178.5-178.5-178.5 178.5-45-45 178.5-178.5-178.5-178.5 45-45 178.5 178.5 178.5-178.5z" }));
}
function X(n) {
  return e__default.createElement("svg", h({ width: "44", height: "44", viewBox: "0 0 768 768" }, n), e__default.createElement("path", { d: "M640.5 352.5v63h-390l178.5 180-45 45-256.5-256.5 256.5-256.5 45 45-178.5 180h390z" }));
}
function N(n) {
  return e__default.createElement("svg", h({ width: "44", height: "44", viewBox: "0 0 768 768" }, n), e__default.createElement("path", { d: "M384 127.5l256.5 256.5-256.5 256.5-45-45 178.5-180h-390v-63h390l-178.5-180z" }));
}
function W() {
  return useEffect(function() {
    var e2 = document.body.style, n = e2.overflow;
    return e2.overflow = "hidden", function() {
      e2.overflow = n;
    };
  }, []), null;
}
function S(e2) {
  var n = e2.touches[0], t = n.clientX, r = n.clientY;
  if (e2.touches.length >= 2) {
    var i = e2.touches[1], o = i.clientX, a = i.clientY;
    return [(t + o) / 2, (r + a) / 2, Math.sqrt(Math.pow(o - t, 2) + Math.pow(a - r, 2))];
  }
  return [t, r, 0];
}
var T = function(e2, n, t, r) {
  var i, o = t * n, a = (o - r) / 2, c = e2;
  return o <= r ? (i = 1, c = 0) : e2 > 0 && a - e2 <= 0 ? (i = 2, c = a) : e2 < 0 && a + e2 <= 0 && (i = 3, c = -a), [i, c];
};
function V(e2, n, t, r, i, o, a, c, u, l) {
  void 0 === a && (a = innerWidth / 2), void 0 === c && (c = innerHeight / 2), void 0 === u && (u = 0), void 0 === l && (l = 0);
  var s = T(e2, o, t, innerWidth)[0], d = T(n, o, r, innerHeight), v = innerWidth / 2, f = innerHeight / 2;
  return { x: a - o / i * (a - (v + e2)) - v + (r / t >= 3 && t * o === innerWidth ? 0 : s ? u / 2 : u), y: c - o / i * (c - (f + n)) - f + (d[0] ? l / 2 : l), lastCX: a, lastCY: c };
}
function R(e2, n, t) {
  var r = e2 % 180 != 0;
  return r ? [t, n, r] : [n, t, r];
}
function A(e2, n, t) {
  var r = R(t, innerWidth, innerHeight), i = r[0], o = r[1], a = 0, c = i, u = o, l = e2 / n * o, s = n / e2 * i;
  return e2 < i && n < o ? (c = e2, u = n) : e2 < i && n >= o ? c = l : e2 >= i && n < o || e2 / n > i / o ? u = s : n / e2 >= 3 && !r[2] ? a = ((u = s) - o) / 2 : c = l, { width: c, height: u, x: 0, y: a, pause: true };
}
function I(e2, t) {
  var r = t.leading, i = void 0 !== r && r, o = t.maxWait, a = t.wait, u = void 0 === a ? o || 0 : a, l = useRef(e2);
  l.current = e2;
  var s = useRef(0), d = useRef(), v = function() {
    return d.current && clearTimeout(d.current);
  }, f = useCallback(function() {
    var e3 = [].slice.call(arguments), n = Date.now();
    function t2() {
      s.current = n, v(), l.current.apply(null, e3);
    }
    var r2 = s.current, a2 = n - r2;
    if (0 === r2 && (i && t2(), s.current = n), void 0 !== o) {
      if (a2 > o) return void t2();
    } else a2 < u && (s.current = n);
    v(), d.current = setTimeout(function() {
      t2(), s.current = 0;
    }, u);
  }, [u, o, i]);
  return f.cancel = v, f;
}
var H = function(e2, n, t) {
  return F(e2, n, t, 100, function(e3) {
    return e3;
  }, function() {
    return F(n, e2, t);
  });
}, L = function(e2) {
  return 1 - Math.pow(1 - e2, 4);
};
function F(e2, n, t, r, i, o) {
  void 0 === r && (r = 400), void 0 === i && (i = L);
  var a = n - e2;
  if (0 !== a) {
    var c = Date.now(), u = 0, l = function() {
      var n2 = Math.min(1, (Date.now() - c) / r);
      t(e2 + i(n2) * a) && n2 < 1 ? s() : (cancelAnimationFrame(u), n2 >= 1 && o && o());
    };
    s();
  }
  function s() {
    u = requestAnimationFrame(l);
  }
}
var D = { T: 0, L: 0, W: 0, H: 0, FIT: void 0 }, B = function() {
  var e2 = useRef(false);
  return useEffect(function() {
    return e2.current = true, function() {
      e2.current = false;
    };
  }, []), e2;
}, O = ["className"];
function z(n) {
  var t = n.className, r = void 0 === t ? "" : t, i = m(n, O);
  return e__default.createElement("div", h({ className: "PhotoView__Spinner " + r }, i), e__default.createElement("svg", { viewBox: "0 0 32 32", width: "36", height: "36", fill: "white" }, e__default.createElement("path", { opacity: ".25", d: "M16 0 A16 16 0 0 0 16 32 A16 16 0 0 0 16 0 M16 4 A12 12 0 0 1 16 28 A12 12 0 0 1 16 4" }), e__default.createElement("path", { d: "M16 0 A16 16 0 0 1 32 16 L28 16 A12 12 0 0 0 16 4z" })));
}
var j = ["src", "loaded", "broken", "className", "onPhotoLoad", "loadingElement", "brokenElement"];
function q(n) {
  var t = n.src, r = n.loaded, i = n.broken, o = n.className, a = n.onPhotoLoad, c = n.loadingElement, u = n.brokenElement, l = m(n, j), s = B();
  return t && !i ? e__default.createElement(e__default.Fragment, null, e__default.createElement("img", h({ className: "PhotoView__Photo" + (o ? " " + o : ""), src: t, onLoad: function(e2) {
    var n2 = e2.target;
    s.current && a({ loaded: true, naturalWidth: n2.naturalWidth, naturalHeight: n2.naturalHeight });
  }, onError: function() {
    s.current && a({ broken: true });
  }, draggable: false, alt: "" }, l)), !r && (c ? e__default.createElement("span", { className: "PhotoView__icon" }, c) : e__default.createElement(z, { className: "PhotoView__icon" }))) : u ? e__default.createElement("span", { className: "PhotoView__icon" }, "function" == typeof u ? u({ src: t }) : u) : null;
}
var K = { naturalWidth: void 0, naturalHeight: void 0, width: void 0, height: void 0, loaded: void 0, broken: false, x: 0, y: 0, touched: false, maskTouched: false, rotate: 0, scale: 1, CX: 0, CY: 0, lastX: 0, lastY: 0, lastCX: 0, lastCY: 0, lastScale: 1, touchTime: 0, touchLength: 0, pause: true, stopRaf: true, reach: void 0 };
function U(t) {
  var r = t.item, o = r.src, a = r.render, c = r.width, l = void 0 === c ? 0 : c, s = r.height, d = void 0 === s ? 0 : s, v = r.originRef, f = t.visible, m2 = t.speed, w2 = t.easing, y2 = t.wrapClassName, x2 = t.className, b2 = t.style, _2 = t.loadingElement, M2 = t.brokenElement, Y2 = t.onPhotoTap, X2 = t.onMaskTap, N2 = t.onReachMove, W2 = t.onReachUp, L2 = t.onPhotoResize, O2 = t.isActive, z2 = t.expose, j2 = p(K), U2 = j2[0], G2 = j2[1], J2 = useRef(0), Q2 = B(), Z2 = U2.naturalWidth, $2 = void 0 === Z2 ? l : Z2, ee2 = U2.naturalHeight, ne = void 0 === ee2 ? d : ee2, te = U2.width, re = void 0 === te ? l : te, ie = U2.height, oe = void 0 === ie ? d : ie, ae = U2.loaded, ce = void 0 === ae ? !o : ae, ue = U2.broken, le = U2.x, se = U2.y, de = U2.touched, ve = U2.stopRaf, fe = U2.maskTouched, he = U2.rotate, me = U2.scale, ge = U2.CX, pe = U2.CY, we = U2.lastX, ye = U2.lastY, xe = U2.lastCX, Ce = U2.lastCY, be = U2.lastScale, Ee = U2.touchTime, ke = U2.touchLength, Pe = U2.pause, _e = U2.reach, Me = g({ onScale: function(e2) {
    return Ye(E(e2));
  }, onRotate: function(e2) {
    he !== e2 && (z2({ rotate: e2 }), G2(h({ rotate: e2 }, A($2, ne, e2))));
  } });
  function Ye(e2, n, t2) {
    me !== e2 && (z2({ scale: e2 }), G2(h({ scale: e2 }, V(le, se, re, oe, me, e2, n, t2), e2 <= 1 && { x: 0, y: 0 })));
  }
  var Xe = I(function(e2, n, t2) {
    if (void 0 === t2 && (t2 = 0), (de || fe) && O2) {
      var r2 = R(he, re, oe), i = r2[0], o2 = r2[1];
      if (0 === t2 && 0 === J2.current) {
        var a2 = Math.abs(e2 - ge) <= 20, c2 = Math.abs(n - pe) <= 20;
        if (a2 && c2) return void G2({ lastCX: e2, lastCY: n });
        J2.current = a2 ? n > pe ? 3 : 2 : 1;
      }
      var u, l2 = e2 - xe, s2 = n - Ce;
      if (0 === t2) {
        var d2 = T(l2 + we, me, i, innerWidth)[0], v2 = T(s2 + ye, me, o2, innerHeight);
        u = (function(e3, n2, t3, r3) {
          return n2 && 1 === e3 || "x" === r3 ? "x" : t3 && e3 > 1 || "y" === r3 ? "y" : void 0;
        })(J2.current, d2, v2[0], _e), void 0 !== u && N2(u, e2, n, me);
      }
      if ("x" === u || fe) return void G2({ reach: "x" });
      var f2 = E(me + (t2 - ke) / 100 / 2 * me, $2 / re, 0.2);
      z2({ scale: f2 }), G2(h({ touchLength: t2, reach: u, scale: f2 }, V(le, se, re, oe, me, f2, e2, n, l2, s2)));
    }
  }, { maxWait: 8 });
  function Ne(e2) {
    return !ve && !de && (Q2.current && G2(h({}, e2, { pause: f })), Q2.current);
  }
  var We, Se, Te, Ve, Re, Ae, Ie, He, Le = (Re = function(e2) {
    return Ne({ x: e2 });
  }, Ae = function(e2) {
    return Ne({ y: e2 });
  }, Ie = function(e2) {
    return Q2.current && (z2({ scale: e2 }), G2({ scale: e2 })), !de && Q2.current;
  }, He = g({ X: function(e2) {
    return Re(e2);
  }, Y: function(e2) {
    return Ae(e2);
  }, S: function(e2) {
    return Ie(e2);
  } }), function(e2, n, t2, r2, i, o2, a2, c2, u, l2, s2) {
    var d2 = R(l2, i, o2), v2 = d2[0], f2 = d2[1], h2 = T(e2, c2, v2, innerWidth), m3 = h2[0], g2 = h2[1], p2 = T(n, c2, f2, innerHeight), w3 = p2[0], y3 = p2[1], x3 = Date.now() - s2;
    if (x3 >= 200 || c2 !== a2 || Math.abs(u - a2) > 1) {
      var C2 = V(e2, n, i, o2, a2, c2), b3 = C2.x, E2 = C2.y, k2 = m3 ? g2 : b3 !== e2 ? b3 : null, P2 = w3 ? y3 : E2 !== n ? E2 : null;
      return null !== k2 && F(e2, k2, He.X), null !== P2 && F(n, P2, He.Y), void (c2 !== a2 && F(a2, c2, He.S));
    }
    var _3 = (e2 - t2) / x3, M3 = (n - r2) / x3, Y3 = Math.sqrt(Math.pow(_3, 2) + Math.pow(M3, 2)), X3 = false, N3 = false;
    !(function(e3, n2) {
      var t3, r3 = e3, i2 = 0, o3 = 0, a3 = function(o4) {
        t3 || (t3 = o4);
        var a4 = o4 - t3, l3 = Math.sign(e3), s3 = -1e-3 * l3, d3 = Math.sign(-r3) * Math.pow(r3, 2) * 2e-4, v3 = r3 * a4 + (s3 + d3) * Math.pow(a4, 2) / 2;
        i2 += v3, t3 = o4, l3 * (r3 += (s3 + d3) * a4) <= 0 ? u2() : n2(i2) ? c3() : u2();
      };
      function c3() {
        o3 = requestAnimationFrame(a3);
      }
      function u2() {
        cancelAnimationFrame(o3);
      }
      c3();
    })(Y3, function(t3) {
      var r3 = e2 + t3 * (_3 / Y3), i2 = n + t3 * (M3 / Y3), o3 = T(r3, a2, v2, innerWidth), c3 = o3[0], u2 = o3[1], l3 = T(i2, a2, f2, innerHeight), s3 = l3[0], d3 = l3[1];
      if (c3 && !X3 && (X3 = true, m3 ? F(r3, u2, He.X) : H(u2, r3 + (r3 - u2), He.X)), s3 && !N3 && (N3 = true, w3 ? F(i2, d3, He.Y) : H(d3, i2 + (i2 - d3), He.Y)), X3 && N3) return false;
      var h3 = X3 || He.X(u2), g3 = N3 || He.Y(d3);
      return h3 && g3;
    });
  }), Fe = (We = Y2, Se = function(e2, n) {
    _e || Ye(1 !== me ? 1 : Math.max(2, $2 / re), e2, n);
  }, Te = useRef(0), Ve = I(function() {
    Te.current = 0, We.apply(void 0, [].slice.call(arguments));
  }, { wait: 300 }), function() {
    var e2 = [].slice.call(arguments);
    Te.current += 1, Ve.apply(void 0, e2), Te.current >= 2 && (Ve.cancel(), Te.current = 0, Se.apply(void 0, e2));
  });
  function De(e2, n) {
    if (J2.current = 0, (de || fe) && O2) {
      G2({ touched: false, maskTouched: false, pause: false, stopRaf: false, reach: void 0 });
      var t2 = E(me, $2 / re);
      if (Le(le, se, we, ye, re, oe, me, t2, be, he, Ee), W2(e2, n), ge === e2 && pe === n) {
        if (de) return void Fe(e2, n);
        fe && X2(e2, n);
      }
    }
  }
  function Be(e2, n, t2) {
    void 0 === t2 && (t2 = 0), G2({ touched: true, CX: e2, CY: n, lastCX: e2, lastCY: n, lastX: le, lastY: se, lastScale: me, touchLength: t2, touchTime: Date.now() });
  }
  function Oe(e2) {
    G2({ maskTouched: true, CX: e2.clientX, CY: e2.clientY, lastX: le, lastY: se });
  }
  P(C ? void 0 : "mousemove", function(e2) {
    e2.preventDefault(), Xe(e2.clientX, e2.clientY);
  }), P(C ? void 0 : "mouseup", function(e2) {
    De(e2.clientX, e2.clientY);
  }), P(C ? "touchmove" : void 0, function(e2) {
    e2.preventDefault();
    var n = S(e2);
    Xe.apply(void 0, n);
  }, { passive: false }), P(C ? "touchend" : void 0, function(e2) {
    var n = e2.changedTouches[0];
    De(n.clientX, n.clientY);
  }, { passive: false }), P("resize", I(function() {
    ce && !de && (G2(A($2, ne, he)), L2());
  }, { maxWait: 8 })), k(function() {
    O2 && z2(h({ scale: me, rotate: he }, Me));
  }, [O2]);
  var ze = (function(e2, t2, r2, o2, a2, c2, l2, s2, d2, v2) {
    var f2 = (function(e3, t3, r3, i, o3) {
      var a3 = useRef(false), c3 = p({ lead: true, scale: r3 }), u = c3[0], l3 = u.lead, s3 = u.scale, d3 = c3[1], v3 = I(function(e4) {
        try {
          return o3(true), d3({ lead: false, scale: e4 }), Promise.resolve();
        } catch (e5) {
          return Promise.reject(e5);
        }
      }, { wait: i });
      return k(function() {
        a3.current ? (o3(false), d3({ lead: true }), v3(r3)) : a3.current = true;
      }, [r3]), l3 ? [e3 * s3, t3 * s3, r3 / s3] : [e3 * r3, t3 * r3, 1];
    })(c2, l2, s2, d2, v2), h2 = f2[0], m3 = f2[1], w3 = f2[2], y3 = (function(e3, t3, r3, o3, a3) {
      var c3 = useState(D), l3 = c3[0], s3 = c3[1], d3 = useState(0), v3 = d3[0], f3 = d3[1], h3 = useRef(), m4 = g({ OK: function() {
        return e3 && f3(4);
      } });
      function p2(e4) {
        a3(false), f3(e4);
      }
      return useEffect(function() {
        if (h3.current || (h3.current = Date.now()), r3) {
          if ((function(e4, n) {
            var t4 = e4 && e4.current;
            if (t4 && 1 === t4.nodeType) {
              var r4 = t4.getBoundingClientRect();
              n({ T: r4.top, L: r4.left, W: r4.width, H: r4.height, FIT: "IMG" === t4.tagName ? getComputedStyle(t4).objectFit : void 0 });
            }
          })(t3, s3), e3) return Date.now() - h3.current < 250 ? (f3(1), requestAnimationFrame(function() {
            f3(2), requestAnimationFrame(function() {
              return p2(3);
            });
          }), void setTimeout(m4.OK, o3)) : void f3(4);
          p2(5);
        }
      }, [e3, r3]), [v3, l3];
    })(e2, t2, r2, d2, v2), x3 = y3[0], C2 = y3[1], b3 = C2.W, E2 = C2.FIT, P2 = innerWidth / 2, _3 = innerHeight / 2, M3 = x3 < 3 || x3 > 4;
    return [M3 ? b3 ? C2.L : P2 : o2 + (P2 - c2 * s2 / 2), M3 ? b3 ? C2.T : _3 : a2 + (_3 - l2 * s2 / 2), h2, M3 && E2 ? h2 * (C2.H / b3) : m3, 0 === x3 ? w3 : M3 ? b3 / (c2 * s2) || 0.01 : w3, M3 ? E2 ? 1 : 0 : 1, x3, E2];
  })(f, v, ce, le, se, re, oe, me, m2, function(e2) {
    return G2({ pause: e2 });
  }), je = ze[4], qe = ze[6], Ke = "transform " + m2 + "ms " + w2, Ue = { className: x2, onMouseDown: C ? void 0 : function(e2) {
    e2.stopPropagation(), 0 === e2.button && Be(e2.clientX, e2.clientY, 0);
  }, onTouchStart: C ? function(e2) {
    e2.stopPropagation(), Be.apply(void 0, S(e2));
  } : void 0, onWheel: function(e2) {
    if (!_e) {
      var n = E(me - e2.deltaY / 100 / 2, $2 / re);
      G2({ stopRaf: true }), Ye(n, e2.clientX, e2.clientY);
    }
  }, style: { width: ze[2] + "px", height: ze[3] + "px", opacity: ze[5], objectFit: 4 === qe ? void 0 : ze[7], transform: he ? "rotate(" + he + "deg)" : void 0, transition: qe > 2 ? Ke + ", opacity " + m2 + "ms ease, height " + (qe < 4 ? m2 / 2 : qe > 4 ? m2 : 0) + "ms " + w2 : void 0 } };
  return e__default.createElement("div", { className: "PhotoView__PhotoWrap" + (y2 ? " " + y2 : ""), style: b2, onMouseDown: !C && O2 ? Oe : void 0, onTouchStart: C && O2 ? function(e2) {
    return Oe(e2.touches[0]);
  } : void 0 }, e__default.createElement("div", { className: "PhotoView__PhotoBox", style: { transform: "matrix(" + je + ", 0, 0, " + je + ", " + ze[0] + ", " + ze[1] + ")", transition: de || Pe ? void 0 : Ke, willChange: O2 ? "transform" : void 0 } }, o ? e__default.createElement(q, h({ src: o, loaded: ce, broken: ue }, Ue, { onPhotoLoad: function(e2) {
    G2(h({}, e2, e2.loaded && A(e2.naturalWidth || 0, e2.naturalHeight || 0, he)));
  }, loadingElement: _2, brokenElement: M2 })) : a && a({ attrs: Ue, scale: je, rotate: he })));
}
var G = { x: 0, touched: false, pause: false, lastCX: void 0, lastCY: void 0, bg: void 0, lastBg: void 0, overlay: true, minimal: true, scale: 1, rotate: 0 };
function J(r) {
  var i = r.loop, o = void 0 === i ? 3 : i, c = r.speed, l = r.easing, s = r.photoClosable, d = r.maskClosable, v = void 0 === d || d, f = r.maskOpacity, h2 = void 0 === f ? 1 : f, m2 = r.pullClosable, w2 = void 0 === m2 || m2, E2 = r.bannerVisible, _2 = void 0 === E2 || E2, S2 = r.overlayRender, T2 = r.toolbarRender, V2 = r.className, R2 = r.maskClassName, A2 = r.photoClassName, I2 = r.photoWrapClassName, H2 = r.loadingElement, L2 = r.brokenElement, F2 = r.images, D2 = r.index, B2 = void 0 === D2 ? 0 : D2, O2 = r.onIndexChange, z2 = r.visible, j2 = r.onClose, q2 = r.afterClose, K2 = r.portalContainer, J2 = p(G), Q2 = J2[0], Z2 = J2[1], $2 = useState(0), ee2 = $2[0], ne = $2[1], te = Q2.x, re = Q2.touched, ie = Q2.pause, oe = Q2.lastCX, ae = Q2.lastCY, ce = Q2.bg, ue = void 0 === ce ? h2 : ce, le = Q2.lastBg, se = Q2.overlay, de = Q2.minimal, ve = Q2.scale, fe = Q2.rotate, he = Q2.onScale, me = Q2.onRotate, ge = r.hasOwnProperty("index"), pe = ge ? B2 : ee2, we = ge ? O2 : ne, ye = useRef(pe), xe = F2.length, Ce = F2[pe], be = "boolean" == typeof o ? o : xe > o, Ee = (function(e2, r2) {
    var i2 = useReducer(function(e3) {
      return !e3;
    }, false)[1], o2 = useRef(0), c2 = (function(t) {
      var r3 = useRef(t);
      function i3(e3) {
        r3.current = e3;
      }
      return useMemo(function() {
        !(function(n) {
          e2 ? (n(e2), o2.current = 1) : o2.current = 2;
        })(i3);
      }, [t]), [r3.current, i3];
    })(e2), u = c2[1];
    return [c2[0], o2.current, function() {
      i2(), 2 === o2.current && (u(false), r2 && r2()), o2.current = 0;
    }];
  })(z2, q2), ke = Ee[0], Pe = Ee[1], _e = Ee[2];
  k(function() {
    if (ke) return Z2({ pause: true, x: pe * -(innerWidth + x) }), void (ye.current = pe);
    Z2(G);
  }, [ke]);
  var Me = g({ close: function(e2) {
    me && me(0), Z2({ overlay: true, lastBg: ue }), j2(e2);
  }, changeIndex: function(e2, n) {
    void 0 === n && (n = false);
    var t = be ? ye.current + (e2 - pe) : e2, r2 = xe - 1, i2 = b(t, 0, r2), o2 = be ? t : i2, a = innerWidth + x;
    Z2({ touched: false, lastCX: void 0, lastCY: void 0, x: -a * o2, pause: n }), ye.current = o2, we && we(be ? e2 < 0 ? r2 : e2 > r2 ? 0 : e2 : i2);
  } }), Ye = Me.close, Xe = Me.changeIndex;
  function Ne(e2) {
    return e2 ? Ye() : Z2({ overlay: !se });
  }
  function We() {
    Z2({ x: -(innerWidth + x) * pe, lastCX: void 0, lastCY: void 0, pause: true }), ye.current = pe;
  }
  function Se(e2, n, t, r2) {
    "x" === e2 ? (function(e3) {
      if (void 0 !== oe) {
        var n2 = e3 - oe, t2 = n2;
        !be && (0 === pe && n2 > 0 || pe === xe - 1 && n2 < 0) && (t2 = n2 / 2), Z2({ touched: true, lastCX: oe, x: -(innerWidth + x) * ye.current + t2, pause: false });
      } else Z2({ touched: true, lastCX: e3, x: te, pause: false });
    })(n) : "y" === e2 && (function(e3, n2) {
      if (void 0 !== ae) {
        var t2 = null === h2 ? null : b(h2, 0.01, h2 - Math.abs(e3 - ae) / 100 / 4);
        Z2({ touched: true, lastCY: ae, bg: 1 === n2 ? t2 : h2, minimal: 1 === n2 });
      } else Z2({ touched: true, lastCY: e3, bg: ue, minimal: true });
    })(t, r2);
  }
  function Te(e2, n) {
    var t = e2 - (null != oe ? oe : e2), r2 = n - (null != ae ? ae : n), i2 = false;
    if (t < -40) Xe(pe + 1);
    else if (t > 40) Xe(pe - 1);
    else {
      var o2 = -(innerWidth + x) * ye.current;
      Math.abs(r2) > 100 && de && w2 && (i2 = true, Ye()), Z2({ touched: false, x: o2, lastCX: void 0, lastCY: void 0, bg: h2, overlay: !!i2 || se });
    }
  }
  P("keydown", function(e2) {
    if (z2) switch (e2.key) {
      case "ArrowLeft":
        Xe(pe - 1, true);
        break;
      case "ArrowRight":
        Xe(pe + 1, true);
        break;
      case "Escape":
        Ye();
    }
  });
  var Ve = (function(e2, n, t) {
    return useMemo(function() {
      var r2 = e2.length;
      return t ? e2.concat(e2).concat(e2).slice(r2 + n - 1, r2 + n + 2) : e2.slice(Math.max(n - 1, 0), Math.min(n + 2, r2 + 1));
    }, [e2, n, t]);
  })(F2, pe, be);
  if (!ke) return null;
  var Re = se && !Pe, Ae = z2 ? ue : le, Ie = he && me && { images: F2, index: pe, visible: z2, onClose: Ye, onIndexChange: Xe, overlayVisible: Re, overlay: Ce && Ce.overlay, scale: ve, rotate: fe, onScale: he, onRotate: me }, He = c ? c(Pe) : 400, Le = l ? l(Pe) : y, Fe = c ? c(3) : 600, De = l ? l(3) : y;
  return e__default.createElement(M, { className: "PhotoView-Portal" + (Re ? "" : " PhotoView-Slider__clean") + (z2 ? "" : " PhotoView-Slider__willClose") + (V2 ? " " + V2 : ""), role: "dialog", onClick: function(e2) {
    return e2.stopPropagation();
  }, container: K2 }, z2 && e__default.createElement(W, null), e__default.createElement("div", { className: "PhotoView-Slider__Backdrop" + (R2 ? " " + R2 : "") + (1 === Pe ? " PhotoView-Slider__fadeIn" : 2 === Pe ? " PhotoView-Slider__fadeOut" : ""), style: { background: Ae ? "rgba(0, 0, 0, " + Ae + ")" : void 0, transitionTimingFunction: Le, transitionDuration: (re ? 0 : He) + "ms", animationDuration: He + "ms" }, onAnimationEnd: _e }), _2 && e__default.createElement("div", { className: "PhotoView-Slider__BannerWrap" }, e__default.createElement("div", { className: "PhotoView-Slider__Counter" }, pe + 1, " / ", xe), e__default.createElement("div", { className: "PhotoView-Slider__BannerRight" }, T2 && Ie && T2(Ie), e__default.createElement(Y, { className: "PhotoView-Slider__toolbarIcon", onClick: Ye }))), Ve.map(function(n, t) {
    var r2 = be || 0 !== pe ? ye.current - 1 + t : pe + t;
    return e__default.createElement(U, { key: be ? n.key + "/" + n.src + "/" + r2 : n.key, item: n, speed: He, easing: Le, visible: z2, onReachMove: Se, onReachUp: Te, onPhotoTap: function() {
      return Ne(s);
    }, onMaskTap: function() {
      return Ne(v);
    }, wrapClassName: I2, className: A2, style: { left: (innerWidth + x) * r2 + "px", transform: "translate3d(" + te + "px, 0px, 0)", transition: re || ie ? void 0 : "transform " + Fe + "ms " + De }, loadingElement: H2, brokenElement: L2, onPhotoResize: We, isActive: ye.current === r2, expose: Z2 });
  }), !C && _2 && e__default.createElement(e__default.Fragment, null, (be || 0 !== pe) && e__default.createElement("div", { className: "PhotoView-Slider__ArrowLeft", onClick: function() {
    return Xe(pe - 1, true);
  } }, e__default.createElement(X, null)), (be || pe + 1 < xe) && e__default.createElement("div", { className: "PhotoView-Slider__ArrowRight", onClick: function() {
    return Xe(pe + 1, true);
  } }, e__default.createElement(N, null))), S2 && Ie && e__default.createElement("div", { className: "PhotoView-Slider__Overlay" }, S2(Ie)));
}
var Q = ["children", "onIndexChange", "onVisibleChange"], Z = { images: [], visible: false, index: 0 };
function $(t) {
  var r = t.children, i = t.onIndexChange, o = t.onVisibleChange, c = m(t, Q), u = p(Z), l = u[0], s = u[1], d = useRef(0), v = l.images, f = l.visible, y2 = l.index, x2 = g({ nextId: function() {
    return d.current += 1;
  }, update: function(e2) {
    var n = v.findIndex(function(n2) {
      return n2.key === e2.key;
    });
    if (n > -1) {
      var t2 = v.slice();
      return t2.splice(n, 1, e2), void s({ images: t2 });
    }
    s(function(n2) {
      return { images: n2.images.concat(e2) };
    });
  }, remove: function(e2) {
    s(function(n) {
      var t2 = n.images.filter(function(n2) {
        return n2.key !== e2;
      });
      return { images: t2, index: Math.min(t2.length - 1, y2) };
    });
  }, show: function(e2) {
    var n = v.findIndex(function(n2) {
      return n2.key === e2;
    });
    s({ visible: true, index: n }), o && o(true, n, l);
  } }), C2 = g({ close: function() {
    s({ visible: false }), o && o(false, y2, l);
  }, changeIndex: function(e2) {
    s({ index: e2 }), i && i(e2, l);
  } }), b2 = useMemo(function() {
    return h({}, l, x2);
  }, [l, x2]);
  return e__default.createElement(w.Provider, { value: b2 }, r, e__default.createElement(J, h({ images: v, visible: f, index: y2, onIndexChange: C2.changeIndex, onClose: C2.close }, c)));
}
var ee = function(e2) {
  var t, r, o = e2.src, c = e2.render, u = e2.overlay, f = e2.width, m2 = e2.height, p2 = e2.triggers, y2 = void 0 === p2 ? ["onClick"] : p2, x2 = e2.children, C2 = useContext(w), b2 = (t = function() {
    return C2.nextId();
  }, (r = useRef({ sign: false, fn: void 0 }).current).sign || (r.sign = true, r.fn = t()), r.fn), E2 = useRef(null);
  useImperativeHandle(null == x2 ? void 0 : x2.ref, function() {
    return E2.current;
  }), useEffect(function() {
    return function() {
      C2.remove(b2);
    };
  }, []);
  var k2 = g({ render: function(e3) {
    return c && c(e3);
  }, show: function(e3, n) {
    C2.show(b2), (function(e4, n2) {
      if (x2) {
        var t2 = x2.props[e4];
        t2 && t2(n2);
      }
    })(e3, n);
  } }), P2 = useMemo(function() {
    var e3 = {};
    return y2.forEach(function(n) {
      e3[n] = k2.show.bind(null, n);
    }), e3;
  }, []);
  return useEffect(function() {
    C2.update({ key: b2, src: o, originRef: E2, render: k2.render, overlay: u, width: f, height: m2 });
  }, [o]), x2 ? Children.only(cloneElement(x2, h({}, P2, { ref: E2 }))) : null;
};
const RichTextContext = createContext({
  addHeading: () => null,
  toc: []
});
const useRichText = () => useContext(RichTextContext);
const Context = createContext({
  dispatch: () => null,
  items: {},
  lastActive: void 0,
  setLastActive: () => null
});
const useJumplist = () => useContext(Context);
const elements = {
  h1: "h1",
  h2: "h2",
  h3: "h3",
  h4: "h4",
  h5: "h5",
  h6: "h6"
};
const JumplistNode = ({ id, type, children }) => {
  const ref = useRef(null);
  const { dispatch, setLastActive } = useJumplist();
  const location = useLocation();
  const pathname = location.pathname;
  useEffect(() => {
    if (ref?.current) {
      const el = ref.current;
      const observer = new IntersectionObserver(
        (entries) => {
          entries.forEach((entry) => {
            dispatch({ id, active: entry.isIntersecting });
            if (entry.isIntersecting) {
              setLastActive(id);
            }
          });
        },
        {
          rootMargin: "0px",
          threshold: 0.5
        }
      );
      observer.observe(el);
      return () => observer.unobserve(el);
    }
    return () => null;
  }, [dispatch, id, setLastActive]);
  const Element = elements[type];
  const handleClick = (e2) => {
    e2.preventDefault();
    document.querySelector(`#${id}`)?.scrollIntoView({
      behavior: "smooth",
      block: "start"
    });
    window.history.pushState({}, "", `${pathname}#${id}`);
  };
  return /* @__PURE__ */ jsx(
    Link,
    {
      style: { textDecoration: "none" },
      to: `${pathname}/#${id}`,
      id,
      replace: true,
      className: "scroll-mt-[60px]",
      onClick: handleClick,
      children: /* @__PURE__ */ jsx(Element, { ref, children })
    }
  );
};
function extractChildren(node) {
  if (node.props && node.props.children) {
    if (typeof node.props.children === "string") {
      return node.props.children;
    } else if (typeof node.props.children === "object") {
      return extractChildren(node.props.children);
    }
  }
  return "";
}
const flattenChildren = (value) => {
  if (typeof value === "string") {
    return value;
  }
  const stringValue = extractChildren(value);
  if (typeof stringValue === "string") {
    return stringValue;
  }
  return value.props.children;
};
const formatAnchor = (children) => {
  if (Array.isArray(children)) {
    return {
      label: children.map(flattenChildren).join("")
    };
  }
  if (typeof children === "string" && children.includes("#")) {
    return {
      label: children.split("#")[0],
      tag: children.split("#")[1]
    };
  }
  return { label: flattenChildren(children) };
};
const Heading = ({ node, nodesToJSX }) => {
  const children = nodesToJSX({
    nodes: node.children
  });
  const childrenText = node.children?.[0]?.text;
  const { label } = formatAnchor(childrenText);
  const { addHeading } = useRichText();
  const anchor = childrenText.split(" ").join("-");
  useEffect(() => {
    addHeading(anchor, childrenText, "secondary");
  }, [addHeading, anchor, childrenText]);
  return /* @__PURE__ */ jsx(JumplistNode, { id: anchor, type: node.tag.toLowerCase(), children: children.length > 1 ? children : label });
};
const YoutubeJSXConverter = {
  youtube: ({ node }) => {
    return /* @__PURE__ */ jsx(
      "iframe",
      {
        src: `https://www.youtube-nocookie.com/embed/${node.id}?modestbranding=1&rel=0`,
        width: "100%",
        style: { aspectRatio: "16/9" },
        allow: "accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture",
        allowFullScreen: true
      }
    );
  }
};
const LinkWithLoc = ({
  href,
  children,
  ...props
}) => {
  return /* @__PURE__ */ jsx(Link, { to: `/${href}`, ...props, children });
};
function BlogRelationship({ blog }) {
  if (!blog.slug || !blog.title) {
    return null;
  }
  const coverImage = blog.coverImage;
  return /* @__PURE__ */ jsx("div", { className: "my-6 not-prose flex justify-center", children: /* @__PURE__ */ jsx(
    LinkWithLoc,
    {
      href: `/blogs/${blog.slug}`,
      className: "block lg:max-w-sm  w-full border  overflow-hidden hover:shadow-lg transition-shadow duration-300 group",
      children: /* @__PURE__ */ jsxs("div", { className: "flex flex-col md:flex-row", children: [
        coverImage?.url && /* @__PURE__ */ jsx("div", { className: "w-1/2 relative ", children: /* @__PURE__ */ jsx(
          Image,
          {
            src: coverImage.url,
            alt: coverImage.alt || blog.title,
            layout: "fullWidth",
            className: "object-cover  transition-transform duration-300"
          }
        ) }),
        /* @__PURE__ */ jsxs("div", { className: "flex-1 p-4 flex flex-col justify-center", children: [
          /* @__PURE__ */ jsx("h4", { className: "font-bold text-lg mb-2 group-hover:text-primary transition-colors !no-underline", children: blog.title }),
          blog.excerpt && /* @__PURE__ */ jsx(
            "p",
            {
              style: {
                textDecoration: "none"
              },
              className: "text-muted-foreground text-sm line-clamp-2 !no-underline",
              children: blog.excerpt
            }
          )
        ] })
      ] })
    }
  ) });
}
const ScrollArea = e.forwardRef(({ className, children, ...props }, ref) => /* @__PURE__ */ jsxs(
  ScrollAreaPrimitive.Root,
  {
    ref,
    className: cn("overflow-hidden", className),
    ...props,
    children: [
      children,
      /* @__PURE__ */ jsx(ScrollAreaPrimitive.Corner, {}),
      /* @__PURE__ */ jsx(ScrollBar, { orientation: "vertical" })
    ]
  }
));
ScrollArea.displayName = ScrollAreaPrimitive.Root.displayName;
const ScrollViewport = e.forwardRef(({ className, children, ...props }, ref) => /* @__PURE__ */ jsx(
  ScrollAreaPrimitive.Viewport,
  {
    ref,
    className: cn("size-full rounded-[inherit]", className),
    ...props,
    children
  }
));
ScrollViewport.displayName = ScrollAreaPrimitive.Viewport.displayName;
const ScrollBar = e.forwardRef(({ className, orientation = "vertical", ...props }, ref) => /* @__PURE__ */ jsx(
  ScrollAreaPrimitive.Scrollbar,
  {
    ref,
    orientation,
    className: cn(
      "flex select-none data-[state=hidden]:animate-fd-fade-out",
      orientation === "vertical" && "h-full w-1.5",
      orientation === "horizontal" && "h-1.5 flex-col",
      className
    ),
    ...props,
    children: /* @__PURE__ */ jsx(ScrollAreaPrimitive.ScrollAreaThumb, { className: "relative flex-1 rounded-full bg-fd-border" })
  }
));
ScrollBar.displayName = ScrollAreaPrimitive.Scrollbar.displayName;
const buttonVariants = cva(
  "inline-flex items-center justify-center rounded-md p-2 text-sm font-medium transition-colors duration-100 disabled:pointer-events-none disabled:opacity-50",
  {
    variants: {
      color: {
        primary: "bg-fd-primary text-fd-primary-foreground hover:bg-fd-primary/80",
        outline: "border hover:bg-fd-accent hover:text-fd-accent-foreground",
        ghost: "hover:bg-fd-accent hover:text-fd-accent-foreground",
        secondary: "border bg-fd-secondary text-fd-secondary-foreground hover:bg-fd-accent hover:text-fd-accent-foreground"
      },
      size: {
        sm: "gap-1 p-0.5 text-xs",
        icon: "p-1.5 [&_svg]:size-5",
        "icon-sm": "p-1.5 [&_svg]:size-4.5"
      }
    }
  }
);
function useCopyButton(onCopy) {
  const [checked, setChecked] = useState(false);
  const timeoutRef = useRef(null);
  const callbackRef = useRef(onCopy);
  callbackRef.current = onCopy;
  const onClick = useCallback(() => {
    if (timeoutRef.current) window.clearTimeout(timeoutRef.current);
    timeoutRef.current = window.setTimeout(() => {
      setChecked(false);
    }, 1500);
    callbackRef.current();
    setChecked(true);
  }, []);
  useEffect(() => {
    return () => {
      if (timeoutRef.current) window.clearTimeout(timeoutRef.current);
    };
  }, []);
  return [checked, onClick];
}
const Pre = forwardRef(
  ({ className, ...props }, ref) => {
    return /* @__PURE__ */ jsx(
      "pre",
      {
        ref,
        className: cn("p-4 focus-visible:outline-none", className),
        ...props,
        children: props.children
      }
    );
  }
);
Pre.displayName = "Pre";
const CodeBlock$1 = forwardRef(
  ({
    title,
    allowCopy = true,
    keepBackground = false,
    icon,
    viewportProps,
    children,
    ...props
  }, ref) => {
    const areaRef = useRef(null);
    const contentRef = useRef(null);
    const [isExpanded, setIsExpanded] = useState(false);
    const [shouldCollapse, setShouldCollapse] = useState(true);
    const onCopy = useCallback(() => {
      const pre = areaRef.current?.getElementsByTagName("pre").item(0);
      if (!pre) return;
      const clone = pre.cloneNode(true);
      clone.querySelectorAll(".nd-copy-ignore").forEach((node) => {
        node.remove();
      });
      void navigator.clipboard.writeText(clone.textContent ?? "");
    }, []);
    const toggleExpanded = useCallback(() => {
      setIsExpanded(!isExpanded);
    }, [isExpanded]);
    useLayoutEffect(() => {
      if (contentRef.current) {
        const height = contentRef.current.scrollHeight;
        setShouldCollapse(height > 300);
      }
    }, [children]);
    const childWithRef = Children.map(children, (child) => {
      if (isValidElement(child)) {
        return cloneElement(
          child,
          { ref: contentRef }
        );
      }
      return child;
    });
    return /* @__PURE__ */ jsxs(
      "figure",
      {
        ref,
        ...props,
        className: cn(
          "not-prose group bg-[#f5f5f5] p-2 border-[#9e9e9e33]  outline-none not-prose relative my-6 overflow-hidden border  text-sm",
          keepBackground && "bg-(--shiki-light-bg) dark:bg-(--shiki-dark-bg)",
          props.className
        ),
        children: [
          title ? /* @__PURE__ */ jsxs("div", { className: "flex flex-row items-center gap-2 border-b bg-fd-muted px-2 py-1.5", children: [
            /* @__PURE__ */ jsx("figcaption", { className: "flex-1 truncate text-fd-muted-foreground", children: title }),
            /* @__PURE__ */ jsxs("div", { className: "flex flex-row items-center gap-2", children: [
              /* @__PURE__ */ jsx(CopyButton, { className: "-me-2", onCopy }),
              shouldCollapse && /* @__PURE__ */ jsx(
                ExpandButton,
                {
                  isExpanded,
                  toggleExpanded
                }
              )
            ] })
          ] }) : allowCopy && /* @__PURE__ */ jsx(
            CopyButton,
            {
              className: "absolute right-2 top-2 z-[2] backdrop-blur-md",
              onCopy
            }
          ),
          /* @__PURE__ */ jsx(
            motion.div,
            {
              className: "overflow-hidden bg-[#EDEDED] border border-[#9e9e9e33]",
              initial: false,
              animate: {
                height: shouldCollapse && !isExpanded ? 300 : contentRef.current?.scrollHeight
              },
              transition: {
                duration: 0.3,
                ease: "easeInOut"
              },
              children: /* @__PURE__ */ jsxs(ScrollArea, { ref: areaRef, dir: "ltr", children: [
                /* @__PURE__ */ jsx(ScrollViewport, { ...viewportProps, children: childWithRef }),
                /* @__PURE__ */ jsx(ScrollBar, { orientation: "horizontal" })
              ] })
            }
          ),
          shouldCollapse && /* @__PURE__ */ jsxs(
            "div",
            {
              className: cn(
                "absolute bottom-0 z-10  left-0 right-0 flex justify-center p-1 pt-8",
                !isExpanded && "pointer-events-none"
              ),
              children: [
                /* @__PURE__ */ jsx(
                  "div",
                  {
                    className: cn(
                      "absolute inset-0 bg-gradient-to-t h-[100px] from-[#EDEDED] via-[#EDEDED]/80 to-transparent",
                      "transition-opacity duration-300",
                      isExpanded ? "opacity-0" : "opacity-100"
                    )
                  }
                ),
                /* @__PURE__ */ jsxs(
                  "button",
                  {
                    onClick: toggleExpanded,
                    className: cn(
                      buttonVariants({ color: "ghost", size: "sm" }),
                      "w-fit relative mb-3  z-10 pointer-events-auto backdrop-blur-sm px-2 py-1",
                      !isExpanded && "bg-white/60 hover:bg-white/80"
                    ),
                    children: [
                      /* @__PURE__ */ jsx(
                        Icon,
                        {
                          icon: isExpanded ? "tabler:chevron-up" : "tabler:chevron-down",
                          className: " "
                        }
                      ),
                      isExpanded ? "折叠" : "展开"
                    ]
                  }
                )
              ]
            }
          )
        ]
      }
    );
  }
);
CodeBlock$1.displayName = "CodeBlock";
function CopyButton({
  className,
  onCopy,
  ...props
}) {
  const [checked, onClick] = useCopyButton(onCopy);
  return /* @__PURE__ */ jsxs(
    "button",
    {
      type: "button",
      className: cn(
        buttonVariants({
          color: "ghost"
        }),
        "transition-opacity group-hover:opacity-100 [&_svg]:size-3.5",
        // !checked && "[@media(hover:hover)]:opacity-0",
        className
      ),
      "aria-label": checked ? "Copied Text" : "Copy Text",
      onClick,
      ...props,
      children: [
        /* @__PURE__ */ jsx(Check, { className: cn("transition-transform", !checked && "scale-0") }),
        /* @__PURE__ */ jsx(
          Copy,
          {
            className: cn("absolute transition-transform", checked && "scale-0")
          }
        )
      ]
    }
  );
}
function ExpandButton({
  isExpanded,
  toggleExpanded
}) {
  return /* @__PURE__ */ jsx("button", { onClick: toggleExpanded, children: /* @__PURE__ */ jsx(
    Icon,
    {
      icon: isExpanded ? "tabler:chevron-up" : "tabler:chevron-down",
      className: "mr-1 h-4 w-4"
    }
  ) });
}
const components = {
  pre(props) {
    return /* @__PURE__ */ jsx(CodeBlock$1, { ...props, className: cn("my-0", props.className), children: /* @__PURE__ */ jsx(Pre, { children: props.children }) });
  }
};
function DynamicCodeBlock({
  lang,
  code,
  filename,
  options
}) {
  const componentsWithTitle = {
    pre(props) {
      return /* @__PURE__ */ jsx(
        CodeBlock$1,
        {
          ...props,
          className: cn("my-0", props.className),
          title: filename,
          children: /* @__PURE__ */ jsx(Pre, { children: props.children })
        }
      );
    }
  };
  return useShiki(code, {
    lang,
    ...options,
    components: {
      ...filename ? componentsWithTitle : components,
      ...options?.components
    },
    withPrerenderScript: true
  });
}
const Code = ({ code, language = "", filename }) => {
  if (!code) return null;
  return /* @__PURE__ */ jsx(
    DynamicCodeBlock,
    {
      lang: language,
      code,
      filename,
      options: {
        themes: {
          light: "catppuccin-latte",
          dark: "catppuccin-mocha"
        }
      }
    }
  );
};
const CodeBlock = ({
  className,
  code,
  language,
  filename
}) => {
  return /* @__PURE__ */ jsx("div", { className: `${[className].filter(Boolean).join(" ")}`, children: /* @__PURE__ */ jsx(Code, { code, language, filename }) });
};
const HorizentalImages = ({
  filename,
  images,
  className
}) => {
  const scrollContainerRef = useRef(null);
  const [canScrollLeft, setCanScrollLeft] = useState(false);
  const [canScrollRight, setCanScrollRight] = useState(true);
  const [needsScroll, setNeedsScroll] = useState(true);
  const checkScrollButtons = () => {
    if (scrollContainerRef.current) {
      const { scrollLeft, scrollWidth, clientWidth } = scrollContainerRef.current;
      const hasOverflow = scrollWidth > clientWidth;
      setNeedsScroll(hasOverflow);
      setCanScrollLeft(scrollLeft > 0);
      setCanScrollRight(scrollLeft < scrollWidth - clientWidth - 1);
    }
  };
  useEffect(() => {
    checkScrollButtons();
    const container = scrollContainerRef.current;
    if (container) {
      const handleScroll = () => {
        checkScrollButtons();
      };
      container.addEventListener("scroll", handleScroll);
      window.addEventListener("resize", checkScrollButtons);
      const resizeObserver = new ResizeObserver(checkScrollButtons);
      resizeObserver.observe(container);
      return () => {
        container.removeEventListener("scroll", handleScroll);
        window.removeEventListener("resize", checkScrollButtons);
        resizeObserver.disconnect();
      };
    }
  }, [images]);
  const scroll = (direction) => {
    if (scrollContainerRef.current) {
      const container = scrollContainerRef.current;
      const scrollAmount = container.clientWidth * 0.8;
      const targetScroll = direction === "left" ? container.scrollLeft - scrollAmount : container.scrollLeft + scrollAmount;
      container.scrollTo({
        left: targetScroll,
        behavior: "smooth"
      });
    }
  };
  if (!images || images.length === 0) return null;
  return /* @__PURE__ */ jsxs("div", { className: cn("relative group", className), children: [
    /* @__PURE__ */ jsxs("div", { className: "py-4", children: [
      needsScroll && /* @__PURE__ */ jsx(
        "button",
        {
          onClick: () => scroll("left"),
          className: cn(
            "absolute left-2 top-1/2 -translate-y-1/2 z-10",
            "bg-white/80 dark:bg-black/80 backdrop-blur-sm",
            "rounded-full p-2 shadow-lg",
            "transition-all duration-200",
            "hover:bg-white dark:hover:bg-black",
            "disabled:opacity-0 disabled:pointer-events-none",
            "md:opacity-0 md:group-hover:opacity-100"
          ),
          disabled: !canScrollLeft,
          "aria-label": "Scroll left",
          children: /* @__PURE__ */ jsx(Icon, { icon: "lucide:chevron-left", className: "w-5 h-5" })
        }
      ),
      needsScroll && /* @__PURE__ */ jsx(
        "button",
        {
          onClick: () => scroll("right"),
          className: cn(
            "absolute right-2 top-1/2 -translate-y-1/2 z-10",
            "bg-white/80 dark:bg-black/80 backdrop-blur-sm",
            "rounded-full p-2 shadow-lg",
            "transition-all duration-200",
            "hover:bg-white dark:hover:bg-black",
            "disabled:opacity-0 disabled:pointer-events-none",
            "md:opacity-0 md:group-hover:opacity-100"
          ),
          disabled: !canScrollRight,
          "aria-label": "Scroll right",
          children: /* @__PURE__ */ jsx(Icon, { icon: "lucide:chevron-right", className: "w-5 h-5" })
        }
      ),
      /* @__PURE__ */ jsx(
        "div",
        {
          ref: scrollContainerRef,
          className: cn(
            "flex gap-4 overflow-x-auto items-center",
            "scroll-smooth scrollbar-hide",
            needsScroll ? "snap-x snap-mandatory" : "",
            !needsScroll && "justify-center"
            // 当不需要滚动时居中
          ),
          style: {
            scrollbarWidth: "none",
            msOverflowStyle: "none",
            WebkitOverflowScrolling: "touch"
          },
          children: images.map((item, index) => {
            const image = item.image;
            const isPortrait = (image.height || 0) > (image.width || 0);
            return /* @__PURE__ */ jsx(
              "div",
              {
                className: cn(
                  "flex-shrink-0",
                  needsScroll && "snap-start",
                  "relative overflow-hidden ",
                  "bg-gray-100 dark:bg-gray-800",
                  "flex items-center justify-center",
                  // 添加flex居中
                  isPortrait ? "h-[400px]" : "h-[300px]"
                ),
                style: {
                  aspectRatio: `${image.width || 1} / ${image.height || 1}`
                },
                children: /* @__PURE__ */ jsx($, { children: /* @__PURE__ */ jsx(ee, { src: image.url, children: /* @__PURE__ */ jsx(
                  ImageWithFallback,
                  {
                    image,
                    alt: image.alt || `Image ${index + 1}`,
                    width: image.width || 0,
                    height: image.height || 0,
                    className: "w-full h-full object-contain cursor-pointer",
                    loading: "lazy"
                  }
                ) }) })
              },
              image.id || index
            );
          })
        }
      )
    ] }),
    filename && /* @__PURE__ */ jsx("div", { className: "text-center mt-2 text-sm text-gray-600 dark:text-gray-400", children: filename })
  ] });
};
const GithubLinkCard = ({
  url,
  title,
  description,
  avatar,
  stars,
  className
}) => {
  return /* @__PURE__ */ jsx("div", { className: "flex justify-center not-prose", children: /* @__PURE__ */ jsxs(
    "a",
    {
      href: url,
      target: "_blank",
      rel: "noopener noreferrer",
      className: cn(
        "flex items-center justify-between my-4 max-w-xs md:max-w-md lg:mx-w-xl 2xl:max-w-2xl gap-4",
        "border bg-slate-100/50 p-4 shadow-sm transition-shadow hover:shadow-md",
        className
      ),
      children: [
        /* @__PURE__ */ jsx("div", { className: "flex flex-col items-end gap-2", children: avatar && /* @__PURE__ */ jsx("div", { className: "h-12 w-12 flex-shrink-0", children: /* @__PURE__ */ jsx(
          "img",
          {
            src: avatar,
            alt: title || "avatar",
            width: 48,
            height: 48,
            className: "object-cover"
          }
        ) }) }),
        /* @__PURE__ */ jsxs("div", { className: "flex-1 ", children: [
          /* @__PURE__ */ jsxs("div", { className: "flex items-center justify-between", children: [
            /* @__PURE__ */ jsx("div", { className: "font-semibold truncate max-w-[250px]", children: title }),
            /* @__PURE__ */ jsxs("div", { className: "hidden md:flex flex-shrink-0 items-center", children: [
              /* @__PURE__ */ jsx(Icon, { icon: "ph:star-duotone", className: "text-orange-400" }),
              /* @__PURE__ */ jsx("span", { className: "ml-1 text-sm font-medium text-gray-800 dark:text-gray-300", children: stars })
            ] })
          ] }),
          /* @__PURE__ */ jsx("p", { className: " truncate w-[230px] md:w-[300px]  text-sm text-gray-500 dark:text-gray-400", children: description })
        ] })
      ]
    }
  ) });
};
const CustomUploadComponent = ({ node }) => {
  if (node.relationTo === "media") {
    const uploadDoc = node.value;
    if (typeof uploadDoc !== "object") {
      return null;
    }
    const { alt, height, url, width } = uploadDoc;
    return /* @__PURE__ */ jsx($, { children: /* @__PURE__ */ jsx(ee, { src: url, children: /* @__PURE__ */ jsx(
      ImageWithFallback,
      {
        className: "cursor-pointer",
        alt: alt ?? "img",
        height,
        image: uploadDoc,
        width
      }
    ) }) });
  }
  return null;
};
const jsxConverters = () => ({ defaultConverters }) => {
  if (defaultConverters.heading) {
    defaultConverters.heading = Heading;
  }
  return {
    ...defaultConverters,
    ...YoutubeJSXConverter,
    relationship: ({ node }) => {
      if (node.relationTo === "blogs" && isObject(node.value) && "id" in node.value) {
        return /* @__PURE__ */ jsx(BlogRelationship, { blog: node.value });
      }
      return null;
    },
    upload: ({ node }) => {
      return /* @__PURE__ */ jsx(CustomUploadComponent, { node });
    },
    blocks: {
      // @ts-ignore
      code: ({ node }) => /* @__PURE__ */ jsx(CodeBlock, { className: `col-start-2`, ...node.fields }),
      // @ts-ignore
      "hotizontal-image": ({ node }) => /* @__PURE__ */ jsx(HorizentalImages, { ...node.fields }),
      // @ts-ignore
      "github-link": ({ node }) => /* @__PURE__ */ jsx(GithubLinkCard, { ...node.fields })
    }
  };
};
const BlogContent = ({ blog, toc: initialToc }) => {
  if (!blog) {
    return null;
  }
  const [toc, setTOC] = useState(/* @__PURE__ */ new Map());
  const addHeading = useCallback(
    (anchor, heading, type) => {
      if (!toc.has(anchor)) {
        const newTOC = new Map(toc);
        newTOC.set(anchor, { type, anchor, heading });
        setTOC(newTOC);
      }
    },
    [toc]
  );
  const context = {
    addHeading,
    toc: Array.from(toc).reverse()
  };
  return /* @__PURE__ */ jsx("div", { className: "prose prose-md", children: /* @__PURE__ */ jsx(RichTextContext.Provider, { value: context, children: /* @__PURE__ */ jsx(
    RichText,
    {
      converters: jsxConverters(),
      data: blog?.content
    }
  ) }) });
};
function getHeadings(nodes, level = 1) {
  const headings = [];
  for (const node of nodes) {
    if (node.type === "heading") {
      const text = node.children?.[0]?.text || "";
      const headingLevel = parseInt(node.tag.substring(1));
      headings.push({
        text,
        anchor: text.split(" ").join("-"),
        level: headingLevel,
        tag: node.tag
      });
    }
    if (node.children && Array.isArray(node.children)) {
      headings.push(...getHeadings(node.children, level + 1));
    }
  }
  return headings;
}
const getBlogBySlugInSeverFn_createServerFn_handler = createSsrRpc("3419118dd18f50840fb043ae235978305367f084dd422cb752b6eaf1baf4a91a");
const getBlogBySlugInSeverFn = createServerFn().inputValidator((data) => data).handler(getBlogBySlugInSeverFn_createServerFn_handler, ({
  data
}) => {
  return blogService.getBlogBySlug(data.slug);
});
const blogQueryOptions = (slug) => queryOptions({
  queryKey: ["blogs", "detail", slug],
  queryFn: () => getBlogBySlugInSeverFn({
    data: {
      slug
    }
  })
});
function BlogPost() {
  const {
    slug
  } = Route$2.useParams();
  const {
    data
  } = useSuspenseQuery(blogQueryOptions(slug));
  const article = data.docs[0];
  if (!article) {
    return /* @__PURE__ */ jsx("div", { children: "Article not found" });
  }
  const headings = getHeadings(article?.content?.root?.children);
  const coverUrl = typeof article.coverImage === "object" && article.coverImage?.url ? article.coverImage.url : "";
  return /* @__PURE__ */ jsxs("div", { className: "h-screen grid grid-cols-12 overflow-hidden", children: [
    /* @__PURE__ */ jsxs(motion.div, { className: "col-span-4 h-screen sticky top-0 p-12 flex flex-col justify-between border-r border-gray-200 bg-[#f2f2f2] z-10", initial: {
      opacity: 0
    }, animate: {
      opacity: 1
    }, transition: {
      duration: 0.5,
      ease: "easeOut"
    }, children: [
      /* @__PURE__ */ jsxs("div", { className: "flex flex-col gap-8", children: [
        /* @__PURE__ */ jsxs(Link, { to: "/", className: "flex items-center gap-2 text-gray-500 hover:text-black transition-colors w-fit", children: [
          /* @__PURE__ */ jsx(ArrowLeft, { size: 20 }),
          /* @__PURE__ */ jsx("span", { className: "font-medium", children: "Back" })
        ] }),
        /* @__PURE__ */ jsx(motion.div, { className: "w-full aspect-video rounded-xl overflow-hidden bg-gray-200 shadow-sm", initial: {
          opacity: 0,
          scale: 0.95
        }, animate: {
          opacity: 1,
          scale: 1
        }, transition: {
          delay: 0.2,
          duration: 0.5,
          ease: "easeOut"
        }, children: coverUrl && /* @__PURE__ */ jsx(ImageWithFallback, { image: article.coverImage, alt: article.title, className: "w-full h-full object-cover", layout: "fullWidth" }) }),
        /* @__PURE__ */ jsx(motion.h1, { className: "text-3xl font-bold leading-tight text-gray-900", initial: {
          opacity: 0,
          y: 10
        }, animate: {
          opacity: 1,
          y: 0
        }, transition: {
          delay: 0.3,
          duration: 0.5,
          ease: "easeOut"
        }, children: article.title })
      ] }),
      /* @__PURE__ */ jsx("div", { className: "flex flex-col gap-6", children: /* @__PURE__ */ jsxs(motion.div, { className: "flex items-center justify-between border-t border-gray-300 pt-8", initial: {
        opacity: 0,
        y: 20
      }, animate: {
        opacity: 1,
        y: 0
      }, transition: {
        delay: 0.4,
        duration: 0.5,
        ease: "easeOut"
      }, children: [
        /* @__PURE__ */ jsxs("div", { className: "flex items-center gap-3", children: [
          /* @__PURE__ */ jsx("div", { className: "w-12 h-12 rounded-full bg-gray-200 overflow-hidden", children: /* @__PURE__ */ jsx("img", { src: "https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?auto=format&fit=crop&q=80&w=1760", alt: "Author", className: "w-full h-full object-cover" }) }),
          /* @__PURE__ */ jsxs("div", { children: [
            /* @__PURE__ */ jsx("p", { className: "text-sm text-gray-500 uppercase tracking-wider font-semibold", children: "Author" }),
            /* @__PURE__ */ jsx("p", { className: "font-medium", children: "Barry Song" })
          ] })
        ] }),
        /* @__PURE__ */ jsxs("div", { className: "text-right", children: [
          /* @__PURE__ */ jsx("p", { className: "text-sm text-gray-500 uppercase tracking-wider font-semibold", children: "Date" }),
          /* @__PURE__ */ jsx("p", { className: "font-medium", children: new Date(article.date).toLocaleDateString("en-US", {
            year: "numeric",
            month: "short",
            day: "numeric"
          }) })
        ] })
      ] }) })
    ] }),
    /* @__PURE__ */ jsx(Right, { children: /* @__PURE__ */ jsx("div", { className: "max-w-3xl mx-auto flex flex-col gap-12 pb-20", children: /* @__PURE__ */ jsx(motion.div, { className: "prose prose-lg max-w-none pt-8", initial: {
      opacity: 0,
      y: 20
    }, animate: {
      opacity: 1,
      y: 0
    }, transition: {
      delay: 0.4
    }, children: /* @__PURE__ */ jsx(BlogContent, { blog: article, toc: new Map(headings.map((heading) => [heading.anchor, heading])) }) }) }) })
  ] });
}
export {
  BlogPost as component
};
