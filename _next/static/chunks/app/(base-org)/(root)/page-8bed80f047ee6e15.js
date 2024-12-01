(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
  [8805],
  {
    8585: function (e, t, n) {
      Promise.resolve().then(n.bind(n, 87739)),
        Promise.resolve().then(n.bind(n, 86685)),
        Promise.resolve().then(n.t.bind(n, 65878, 23)),
        Promise.resolve().then(n.bind(n, 38038)),
        Promise.resolve().then(n.bind(n, 48318)),
        Promise.resolve().then(n.bind(n, 69301)),
        Promise.resolve().then(n.bind(n, 11234)),
        Promise.resolve().then(n.bind(n, 50267)),
        Promise.resolve().then(n.bind(n, 5876)),
        Promise.resolve().then(n.bind(n, 97400)),
        Promise.resolve().then(n.bind(n, 74905)),
        Promise.resolve().then(n.bind(n, 6224)),
        Promise.resolve().then(n.bind(n, 7962)),
        Promise.resolve().then(n.bind(n, 68518)),
        Promise.resolve().then(n.bind(n, 80108)),
        Promise.resolve().then(n.bind(n, 87424)),
        Promise.resolve().then(n.bind(n, 78316)),
        Promise.resolve().then(n.bind(n, 71031)),
        Promise.resolve().then(n.bind(n, 50236));
    },
    87739: function (e, t, n) {
      "use strict";
      n.r(t),
        n.d(t, {
          AnalyticsContext: function () {
            return a;
          },
          default: function () {
            return c;
          },
          useAnalytics: function () {
            return l;
          },
        });
      var r = n(60221),
        s = n(57437),
        i = n(81753),
        o = n(2265);
      const a = (0, o.createContext)({
        logEventWithContext: function () {},
        fullContext: "",
      });
      function l() {
        const e = (0, o.useContext)(a);
        if (void 0 === e)
          throw new Error(
            "useAnalytics must be used within a AnalyticsProvider",
          );
        return e;
      }
      function c(e) {
        let { children: t, context: n } = e;
        const { fullContext: c } = l(),
          u = [c, n].filter((e) => !!e).join("_"),
          d = (0, o.useCallback)(
            (e, t, n) => {
              const s = e.toLocaleLowerCase();
              (0, i.ZP)(
                s,
                (0, r._)(
                  {
                    action: t,
                    context: u,
                    page_path: window.location.pathname,
                  },
                  n,
                ),
                i.E3.high,
              );
            },
            [u],
          ),
          h = (0, o.useMemo)(
            () => ({ logEventWithContext: d, context: n, fullContext: u }),
            [n, u, d],
          );
        return (0, s.jsx)(a.Provider, { value: h, children: t });
      }
    },
    86685: function (e, t, n) {
      "use strict";
      n.d(t, {
        default: function () {
          return u;
        },
        p: function () {
          return c;
        },
      });
      var r = n(57437),
        s = n(27347),
        i = n(54916),
        o = n(47903),
        a = n(2265);
      const l = (0, a.createContext)({
        logError: function () {},
        fullContext: "",
      });
      function c() {
        const e = (0, a.useContext)(l);
        if (void 0 === e)
          throw new Error("useErrors must be used within a ErrorsProvider");
        return e;
      }
      function u(e) {
        let { children: t, context: n } = e;
        const { fullContext: u } = c(),
          d = [u, n].filter((e) => !!e).join("_"),
          h = (0, a.useCallback)(
            (e, t) => {
              i.yG ||
                (o.k.error('Error caught with message: "'.concat(t, '"'), e, {
                  context: d,
                  message: t,
                }),
                s.v.addError(e, { context: d, message: t }));
            },
            [d],
          ),
          f = (0, a.useMemo)(
            () => ({ logError: h, context: n, fullContext: d }),
            [n, d, h],
          );
        return (0, r.jsx)(l.Provider, { value: f, children: t });
      }
    },
    30166: function (e, t, n) {
      "use strict";
      n.d(t, {
        default: function () {
          return s.a;
        },
      });
      var r = n(55775),
        s = n.n(r);
    },
    33145: function (e, t, n) {
      "use strict";
      n.d(t, {
        default: function () {
          return s.a;
        },
      });
      var r = n(48461),
        s = n.n(r);
    },
    55775: function (e, t, n) {
      "use strict";
      Object.defineProperty(t, "__esModule", { value: !0 });
      const r = n(60221),
        s = n(88810);
      Object.defineProperty(t, "__esModule", { value: !0 }),
        Object.defineProperty(t, "default", {
          enumerable: !0,
          get: function () {
            return a;
          },
        });
      const i = n(63862),
        o = (n(57437), n(2265), i._(n(15602)));
      function a(e, t) {
        var n;
        let i = {
          loading: (e) => {
            let { error: t, isLoading: n, pastDelay: r } = e;
            return null;
          },
        };
        "function" === typeof e && (i.loader = e);
        const a = r._({}, i, t);
        return (0, o.default)(
          s._(r._({}, a), {
            modules: null == (n = a.loadableGenerated) ? void 0 : n.modules,
          }),
        );
      }
      ("function" === typeof t.default ||
        ("object" === typeof t.default && null !== t.default)) &&
        "undefined" === typeof t.default.__esModule &&
        (Object.defineProperty(t.default, "__esModule", { value: !0 }),
        Object.assign(t.default, t),
        (e.exports = t.default));
    },
    48461: function (e, t, n) {
      "use strict";
      Object.defineProperty(t, "__esModule", { value: !0 }),
        (function (e, t) {
          for (var n in t)
            Object.defineProperty(e, n, { enumerable: !0, get: t[n] });
        })(t, {
          default: function () {
            return l;
          },
          getImageProps: function () {
            return a;
          },
        });
      const r = n(63862),
        s = n(55346),
        i = n(65878),
        o = r._(n(5084));
      function a(e) {
        const { props: t } = (0, s.getImgProps)(e, {
          defaultLoader: o.default,
          imgConf: {
            deviceSizes: [640, 750, 828, 1080, 1200, 1920, 2048, 3840],
            imageSizes: [16, 32, 48, 64, 96, 128, 256, 384],
            path: "/_next/image",
            loader: "default",
            dangerouslyAllowSVG: !1,
            unoptimized: !1,
          },
        });
        for (const [n, r] of Object.entries(t)) void 0 === r && delete t[n];
        return { props: t };
      }
      const l = i.Image;
    },
    81523: function (e, t, n) {
      "use strict";
      Object.defineProperty(t, "__esModule", { value: !0 }),
        Object.defineProperty(t, "BailoutToCSR", {
          enumerable: !0,
          get: function () {
            return s;
          },
        });
      const r = n(18993);
      function s(e) {
        let { reason: t, children: n } = e;
        if ("undefined" === typeof window) throw new r.BailoutToCSRError(t);
        return n;
      }
    },
    15602: function (e, t, n) {
      "use strict";
      Object.defineProperty(t, "__esModule", { value: !0 });
      const r = n(60221);
      Object.defineProperty(t, "__esModule", { value: !0 }),
        Object.defineProperty(t, "default", {
          enumerable: !0,
          get: function () {
            return u;
          },
        });
      const s = n(57437),
        i = n(2265),
        o = n(81523),
        a = n(70049);
      function l(e) {
        return { default: e && "default" in e ? e.default : e };
      }
      const c = {
        loader: () => Promise.resolve(l(() => null)),
        loading: null,
        ssr: !0,
      };
      const u = function (e) {
        const t = r._({}, c, e),
          n = (0, i.lazy)(() => t.loader().then(l)),
          u = t.loading;
        function d(e) {
          const l = u
              ? (0, s.jsx)(u, { isLoading: !0, pastDelay: !0, error: null })
              : null,
            c = t.ssr
              ? (0, s.jsxs)(s.Fragment, {
                  children: [
                    "undefined" === typeof window
                      ? (0, s.jsx)(a.PreloadCss, { moduleIds: t.modules })
                      : null,
                    (0, s.jsx)(n, r._({}, e)),
                  ],
                })
              : (0, s.jsx)(o.BailoutToCSR, {
                  reason: "next/dynamic",
                  children: (0, s.jsx)(n, r._({}, e)),
                });
          return (0, s.jsx)(i.Suspense, { fallback: l, children: c });
        }
        return (d.displayName = "LoadableComponent"), d;
      };
    },
    70049: function (e, t, n) {
      "use strict";
      Object.defineProperty(t, "__esModule", { value: !0 }),
        Object.defineProperty(t, "PreloadCss", {
          enumerable: !0,
          get: function () {
            return i;
          },
        });
      const r = n(57437),
        s = n(20544);
      function i(e) {
        let { moduleIds: t } = e;
        if ("undefined" !== typeof window) return null;
        const n = (0, s.getExpectedRequestStore)("next/dynamic css"),
          i = [];
        if (n.reactLoadableManifest && t) {
          const e = n.reactLoadableManifest;
          for (const n of t) {
            if (!e[n]) continue;
            const t = e[n].files.filter((e) => e.endsWith(".css"));
            i.push(...t);
          }
        }
        return 0 === i.length
          ? null
          : (0, r.jsx)(r.Fragment, {
              children: i.map((e) =>
                (0, r.jsx)(
                  "link",
                  {
                    precedence: "dynamic",
                    rel: "stylesheet",
                    href: n.assetPrefix + "/_next/" + encodeURI(e),
                    as: "style",
                  },
                  e,
                ),
              ),
            });
      }
    },
    73919: function (e, t, n) {
      "use strict";
      n.d(t, {
        Z: function () {
          return l;
        },
      });
      var r = n(57437),
        s = n(33145),
        i = n(11595);
      function o(e) {
        let {
          src: t,
          alt: n,
          title: s,
          width: o,
          height: a,
          className: l,
          onLoad: c,
          style: u,
        } = e;
        const d = (0, i.e8)(t);
        return (0, r.jsx)("img", {
          src: d,
          className: l,
          alt: n,
          title: s,
          onLoad: c,
          width: o,
          height: a,
          style: u,
        });
      }
      var a = n(78316);
      function l(e) {
        let {
          priority: t,
          src: n,
          alt: l,
          title: c,
          width: u,
          height: d,
          className: h,
          onLoad: f,
          placeholder: p,
          quality: m,
          style: g,
          fill: b,
          useCloudinary: v = !0,
        } = e;
        return (0, i.FA)(n)
          ? (0, r.jsx)(s.default, {
              src: n,
              className: h,
              alt: l,
              title: c,
              placeholder: p,
              onLoad: f,
              width: u,
              height: d,
              quality: m,
              style: g,
              priority: t,
              fill: b,
            })
          : v
            ? (0, r.jsx)(a.default, {
                src: n,
                className: h,
                alt: l,
                title: c,
                onLoad: f,
                width: u,
                height: d,
                style: g,
              })
            : (0, r.jsx)(o, {
                src: n,
                className: h,
                alt: l,
                title: c,
                onLoad: f,
                width: u,
                height: d,
                style: g,
              });
      }
    },
    78316: function (e, t, n) {
      "use strict";
      n.d(t, {
        default: function () {
          return a;
        },
      });
      var r = n(57437),
        s = n(11595),
        i = n(63246),
        o = n(2265);
      function a(e) {
        let {
          src: t,
          alt: n,
          title: a,
          width: l = 1200,
          height: c,
          className: u,
          onLoad: d,
          onError: h,
          style: f,
        } = e;
        const p = (0, s.e8)(t),
          [m, g] = (0, o.useState)(null),
          b = (0, s.UK)({ media: p, width: Number(l) }),
          v =
            (0, i.pZ)(p) ||
            p.length > 255 ||
            p.includes("?image=") ||
            p.includes("?url=");
        if (
          ((0, o.useEffect)(() => {
            if (v) {
              async function e() {
                try {
                  const e = await fetch("/api/cloudinaryUrl", {
                    method: "POST",
                    headers: { "Content-Type": "application/json" },
                    body: JSON.stringify({ media: p, width: l }),
                  });
                  if (!e.ok) throw new Error("Failed to get Cloudinary URL");
                  const t = await e.json(),
                    n = null === t || void 0 === t ? void 0 : t.url;
                  n && g(n);
                } catch (e) {}
              }
              e()
                .then()
                .catch((e) => console.log(e));
            }
          }, [p, v, l]),
          v && !m)
        )
          return null;
        const y = null !== m && void 0 !== m ? m : b;
        return (0, r.jsx)("img", {
          src: y,
          className: u,
          alt: n,
          title: a,
          onLoad: d,
          onError: h,
          width: l,
          height: c,
          style: f,
        });
      }
    },
    71031: function (e, t, n) {
      "use strict";
      n.d(t, {
        default: function () {
          return d;
        },
      });
      var r = n(60221),
        s = n(88810),
        i = n(67085),
        o = n(57437),
        a = n(81753),
        l = n(27648),
        c = n(2265),
        u = n(87739);
      function d(e) {
        var { children: t, onClick: n } = e,
          d = (0, i._)(e, ["children", "onClick"]);
        const { logEventWithContext: h } = (0, u.useAnalytics)(),
          f = (0, c.useCallback)(
            (e) => {
              const t = e.currentTarget;
              try {
                const e = new URL(t.href),
                  {
                    href: n,
                    hostname: r,
                    origin: s,
                    pathname: i,
                    search: o,
                  } = e;
                h("link_clicked", a.Us.click, {
                  componentType: a.re.link,
                  href: n,
                  hostname: r,
                  origin: s,
                  pathname: i,
                  search: o,
                });
              } catch (r) {}
              n && n(e);
            },
            [n, h],
          );
        return (0, o.jsx)(
          l.default,
          (0, s._)((0, r._)({}, d), { onClick: f, children: t }),
        );
      }
    },
    50236: function (e, t, n) {
      "use strict";
      const r = (0, n(30166).default)(
        async () =>
          Promise.all([n.e(124), n.e(2732), n.e(7786), n.e(5901)])
            .then(n.bind(n, 85901))
            .then((e) => e.Scene),
        { loadableGenerated: { webpack: () => [85901] }, ssr: !1 },
      );
      t.default = r;
    },
    48318: function (e, t, n) {
      "use strict";
      n.r(t),
        n.d(t, {
          default: function () {
            return d;
          },
        });
      var r = n(57437),
        s = n(86855),
        i = n.n(s),
        o = n(85562),
        a = n(27560);
      const l = {
          [o.c.Primary]:
            "bg-blue text-white border border-blue hover:bg-blue-80 active:bg-[#06318E]",
          [o.c.Secondary]:
            "bg-white border border-white text-palette-foreground hover:bg-gray-15 active:bg-gray-30",
          [o.c.Outlined]:
            "bg-transparent text-white border border-white hover:bg-white hover:text-black active:bg-[#E3E7E9]",
        },
        c = {
          [o.P.Medium]: "text-md px-4 py-2 gap-3",
          [o.P.Large]: "text-lg px-6 py-4 gap-5",
        },
        u = { [o.P.Medium]: "0.75rem", [o.P.Large]: "1rem" };
      function d(e) {
        let {
          children: t,
          onClick: n,
          disabled: s,
          variant: d = o.c.Primary,
          size: h = o.P.Medium,
          iconName: f,
          roundedFull: p = !1,
          className: m,
          fullWidth: g = !1,
        } = e;
        const b = i()(
            "text-md px-4 py-2 whitespace-nowrap",
            "flex items-center justify-center",
            "disabled:opacity-40 disabled:pointer-events-none",
            "transition-all",
            l[d],
            c[h],
            p ? "rounded-full" : "rounded-lg",
            g ? "w-full" : "w-auto",
            m,
          ),
          v = u[h];
        return (0, r.jsxs)("button", {
          type: "button",
          onClick: n,
          disabled: s,
          className: b,
          children: [
            (0, r.jsx)("span", { children: t }),
            f &&
              (0, r.jsx)(a.J, {
                name: f,
                width: v,
                height: v,
                color: "currentColor",
              }),
          ],
        });
      }
    },
    85562: function (e, t, n) {
      "use strict";
      var r, s;
      n.d(t, {
        P: function () {
          return s;
        },
        c: function () {
          return r;
        },
      }),
        (function (e) {
          (e.Primary = "primary"),
            (e.Secondary = "secondary"),
            (e.Outlined = "outlined");
        })(r || (r = {})),
        (function (e) {
          (e.Medium = "medium"), (e.Large = "large");
        })(s || (s = {}));
    },
    99687: function (e, t, n) {
      "use strict";
      n.d(t, {
        K: function () {
          return c;
        },
        default: function () {
          return u;
        },
      });
      var r = n(60221),
        s = n(88810),
        i = n(57437),
        o = n(2265),
        a = n(72694);
      const l = (0, o.createContext)({
        registerCard: function () {},
        unregisterCard: function () {},
      });
      function c() {
        const e = (0, o.useContext)(l);
        if (void 0 === e)
          throw new Error("useCards must be used within a CardsProvider");
        return e;
      }
      function u(e) {
        let { children: t } = e;
        const [n, c] = (0, o.useState)({}),
          u = (0, a.ac)("(min-width: 768px)");
        (0, o.useEffect)(() => {
          if (!u) return;
          const e = (e) => {
            const t = "touches" in e ? e.touches[0].clientX : e.clientX,
              r = "touches" in e ? e.touches[0].clientY : e.clientY;
            Object.values(n).forEach((e) => {
              let { blobRef: n, fakeBlobRef: s } = e;
              if (n.current && s.current) {
                const e = s.current.getBoundingClientRect();
                n.current.animate(
                  [
                    {
                      transform: "translate("
                        .concat(t - e.left - e.width / 2, "px,")
                        .concat(r - e.top - e.height / 2, "px)"),
                    },
                  ],
                  { duration: 300, fill: "forwards" },
                ),
                  n.current.classList.remove("opacity-0");
              }
            });
          };
          return (
            window.addEventListener("mousemove", e),
            window.addEventListener("touchmove", e),
            () => {
              window.removeEventListener("mousemove", e),
                window.removeEventListener("touchmove", e);
            }
          );
        }, [n, u]);
        const d = (0, o.useCallback)((e, t) => {
            c((n) => (0, s._)((0, r._)({}, n), { [e]: t }));
          }, []),
          h = (0, o.useCallback)((e) => {
            c((t) => {
              const n = (0, r._)({}, t);
              return delete n[e], n;
            });
          }, []),
          f = (0, o.useMemo)(
            () => ({ registerCard: d, unregisterCard: h }),
            [d, h],
          );
        return (0, i.jsx)(l.Provider, { value: f, children: t });
      }
    },
    92399: function (e, t, n) {
      "use strict";
      n.d(t, {
        default: function () {
          return o;
        },
      });
      var r = n(57437),
        s = n(99687),
        i = n(2265);
      function o(e) {
        let {
          children: t,
          wrapperClassName: n,
          innerClassName: o,
          radius: a = 16,
        } = e;
        const l = (0, i.useRef)(null),
          c = (0, i.useRef)(null),
          u = (0, i.useRef)(null),
          { registerCard: d, unregisterCard: h } = (0, s.K)(),
          f = (0, i.useId)();
        (0, i.useEffect)(
          () => (d(f, { blobRef: c, fakeBlobRef: u }), () => h(f)),
          [d, h, f],
        );
        const p =
            "card overflow-hidden p-[1px] m-0 bg-white/20 relative ".concat(
              n,
              " w-full",
            ),
          m = { borderRadius: "".concat(a, "px") },
          g = "inner relative bg-black z-20 h-full ".concat(o),
          b = { borderRadius: "".concat(a - 1, "px") };
        return (0, r.jsxs)("div", {
          className: p,
          ref: l,
          style: m,
          children: [
            (0, r.jsx)("div", { className: g, style: b, children: t }),
            (0, r.jsx)("div", {
              className:
                "blob blur-[40px] z-10 absolute opacity-0 w-[30rem] h-[30rem] rounded-full bg-[rgb(255,255,255,0.2)]",
              ref: c,
            }),
            (0, r.jsx)("div", {
              className:
                "fake-blob absolute w-[30rem] h-[30rem] rounded-full opacity-0",
              ref: u,
            }),
          ],
        });
      }
    },
    69301: function (e, t, n) {
      "use strict";
      n.d(t, {
        default: function () {
          return a;
        },
      });
      var r = n(57437),
        s = n(92399),
        i = n(27560),
        o = n(71031);
      n(2265);
      function a(e) {
        let { children: t, href: n } = e;
        const a = n.startsWith("https://") ? "_blank" : void 0;
        return (0, r.jsx)(o.default, {
          href: n,
          target: a,
          className: "group w-full",
          children: (0, r.jsxs)(s.default, {
            innerClassName:
              "p-4 transition-all bg-[#181818] group-hover:bg-[#1C1C1C]",
            wrapperClassName: "transition-all",
            children: [
              t,
              (0, r.jsx)("i", {
                className:
                  "absolute right-4 top-4 opacity-50 transition-all group-hover:opacity-100",
                children: (0, r.jsx)(i.J, {
                  name: "baseOrgDiagonalUpArrow",
                  color: "currentColor",
                  height: "0.8rem",
                  width: "0.8rem",
                }),
              }),
            ],
          }),
        });
      }
    },
    11234: function (e, t, n) {
      "use strict";
      n.d(t, {
        default: function () {
          return b;
        },
      });
      var r = n(57437),
        s = n(2265),
        i = n(86855),
        o = n.n(i),
        a = n(73919),
        l = JSON.parse(
          '[{"title":"Summer never ends","url":"https://base.mirror.xyz/mNTd8oYnl6RJZNWM_5Nxig2g6er9TUDNTOYZYRHLXog","imageUrl":"https://images.mirror-media.xyz/publication-images/U6ffOmo6-8RJrUUz76nvq.png","publicImagePath":"/images/blog/summer-never-ends-cover.png"},{"title":"Scaling Base: Looking towards the upcoming Pectra upgrade","url":"https://base.mirror.xyz/6NDvVKw8x5obo3h1OgQx582hF73m81CnJabgbRneW2Q","imageUrl":"https://images.mirror-media.xyz/publication-images/busMgf5msKPumSDaXnxlT.png","publicImagePath":"/images/blog/scaling-base-looking-towards-the-upcoming-pectra-upgrade-cover.png"},{"title":"Build your onchain identity with Basenames","url":"https://base.mirror.xyz/ofu68-hGbQuf-_oNsMNTVM373lByUVjcHDh5CF2KSNQ","imageUrl":"https://images.mirror-media.xyz/publication-images/fGNciT-vIGdgZUehLol6P.png","publicImagePath":"/images/blog/build-your-onchain-identity-with-basenames-cover.png"},{"title":"Announcing the Onchain Summer Buildathon Winners","url":"https://base.mirror.xyz/p_A3ZxaBUEcpWwTf9_Yg-jnlOro8m8Ypc8LEDnA_ZRk","imageUrl":"https://images.mirror-media.xyz/publication-images/U4fz9OvwkECe7DIdswXjE.png","publicImagePath":"/images/blog/announcing-the-onchain-summer-buildathon-winners-cover.png"},{"title":"Introducing the Onchain Content Network","url":"https://base.mirror.xyz/fD9-3Bl_3PLoUw7T8St6a6UpDIiPxJ-itzmME-b5pwA","imageUrl":"https://images.mirror-media.xyz/publication-images/hvmtoI_4GVnlmTiDhFHrm.png","publicImagePath":"/images/blog/introducing-the-onchain-content-network-cover.png"},{"title":"Stage 1 Decentralization is Coming to Base","url":"https://base.mirror.xyz/Odr64Blt1YLjR2U-5iXr84dg00Bttz2jnYwvaLGoTY0","imageUrl":"https://images.mirror-media.xyz/publication-images/QlkofrR1_uVgDmLw8h7gQ.png","publicImagePath":"/images/blog/stage-1-decentralization-is-coming-to-base-cover.png"},{"title":"Introducing BaseCamp 001: onchain\u2013offgrid","url":"https://base.mirror.xyz/GL6dd2CfZuG3dVd_jZAZJLjYP8h7NRk0falVV6O7RqQ","imageUrl":"https://images.mirror-media.xyz/publication-images/pPSZUytFEk-ACzTlt1F6O.jpg","publicImagePath":"/images/blog/introducing-basecamp-001-onchain-offgrid-cover.png"}]',
        ),
        c = n(55197),
        u = n(10430),
        d = n(27560),
        h = n(48318),
        f = n(85562),
        p = n(71031);
      const m = 6;
      function g(e) {
        let {
          post: t,
          index: n,
          currentIndex: i,
          selectSlide: a,
          nextSlide: l,
          isInView: c,
        } = e;
        const u = (0, s.useCallback)(() => {
            a(n);
          }, [n, a]),
          d = (0, s.useCallback)(() => {
            l();
          }, [l]),
          h = o()("h-full bg-[#E3E7E9] will-change-[width]", {
            " animate-[progress_5s_linear] group-hover:[animation-play-state:paused]":
              n === i && c,
            "w-full": n < i,
            "w-0": n > i,
          });
        return (0, r.jsx)(
          "button",
          {
            "aria-label": "View blog post: ".concat(t.title),
            type: "button",
            className:
              "h-2 w-1/6 overflow-hidden rounded-full bg-black/20 backdrop-blur-[0.5rem] hover:h-4",
            onClick: u,
            children: (0, r.jsx)("div", {
              className: h,
              "data-index": n,
              onAnimationEnd: d,
            }),
          },
          t.url,
        );
      }
      function b() {
        const e = (0, s.useMemo)(() => l.slice(0, m), []),
          [t, n] = (0, s.useState)(0),
          i = (0, s.useRef)(null),
          [o, b] = (0, s.useState)(!1),
          v = (0, s.useCallback)(() => {
            n((t) => (t + 1) % e.length);
          }, [e.length]),
          y = (0, s.useCallback)((e) => {
            n(e);
          }, []);
        (0, s.useEffect)(() => {
          const e = new IntersectionObserver(
              (e) => {
                let [t] = e;
                b(t.isIntersecting);
              },
              { threshold: 0.5 },
            ),
            t = i.current;
          return (
            t && e.observe(t),
            () => {
              t && e.unobserve(t);
            }
          );
        }, []);
        const x = (0, s.useMemo)(
          () =>
            "url(\"data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noiseFilter'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.65' numOctaves='3' stitchTiles='stitch'/%3E%3CfeColorMatrix type='matrix' values='1 0 0 0 0 0 1 0 0 0 0 0 1 0 0 0 0 0 0.5 0'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noiseFilter)'/%3E%3C/svg%3E\")",
          [],
        );
        return (0, r.jsxs)("section", {
          ref: i,
          className: "group",
          children: [
            (0, r.jsx)(c.Z, {
              level: u.Y.Title1,
              className: "mb-6",
              children: "Read the latest from Base",
            }),
            (0, r.jsxs)("div", {
              className: "relative mx-auto w-full",
              children: [
                (0, r.jsxs)("div", {
                  className: "relative overflow-hidden rounded-xl",
                  children: [
                    (0, r.jsx)("div", {
                      className:
                        "absolute left-0 right-0 top-0 z-10 h-[10rem] bg-black/30 backdrop-blur-[3rem]",
                      style: {
                        maskImage:
                          "linear-gradient(to bottom, black, transparent)",
                        backgroundImage: "".concat(
                          x,
                          ", linear-gradient(to bottom, transparent, rgba(0,0,0,0.5))",
                        ),
                        WebkitMaskImage:
                          "linear-gradient(to bottom, black, transparent)",
                      },
                    }),
                    (0, r.jsx)("div", {
                      className:
                        "flex transition-transform duration-300 ease-in-out will-change-transform",
                      style: {
                        transform: "translateX(-".concat(100 * t, "%)"),
                      },
                      children: e.map((e) =>
                        (0, r.jsx)(
                          "div",
                          {
                            className: "relative h-auto w-full flex-shrink-0",
                            children: (0, r.jsx)("figure", {
                              className:
                                "relative h-full min-h-[20rem] w-full md:min-h-[40rem]",
                              children: (0, r.jsx)(a.Z, {
                                src: e.publicImagePath,
                                alt: e.title,
                                className: "object-cover",
                                fill: !0,
                              }),
                            }),
                          },
                          e.title,
                        ),
                      ),
                    }),
                    (0, r.jsx)("div", {
                      className:
                        "absolute bottom-0 left-0 right-0 z-10 h-[10rem] bg-black/30 backdrop-blur-[3rem]",
                      style: {
                        maskImage:
                          "linear-gradient(to top, black, transparent)",
                        backgroundImage: "".concat(
                          x,
                          ", linear-gradient(to top, transparent, rgba(0,0,0,0.5))",
                        ),
                        WebkitMaskImage:
                          "linear-gradient(to top, black, transparent)",
                      },
                    }),
                  ],
                }),
                (0, r.jsxs)("div", {
                  className:
                    "absolute left-0 top-0 z-20 flex min-h-[17rem] w-full flex-col justify-between gap-4 px-4 pt-4 md:min-h-0 md:flex-row md:px-8 md:pt-6",
                  children: [
                    (0, r.jsxs)(c.Z, {
                      level: u.Y.Title2,
                      className:
                        "flex w-full items-center gap-4 text-white drop-shadow-md",
                      children: [
                        (0, r.jsx)("span", {
                          className: "hidden md:inline-block",
                          children: (0, r.jsx)(d.J, {
                            name: "blueCircle",
                            color: "currentColor",
                            height: "1rem",
                            width: "1rem",
                          }),
                        }),
                        e[t].title,
                      ],
                    }),
                    (0, r.jsxs)("div", {
                      className: "ml-auto flex items-center gap-4",
                      children: [
                        (0, r.jsx)(p.default, {
                          href: e[t].url,
                          target: "_blank",
                          children: (0, r.jsx)(h.default, {
                            variant: f.c.Secondary,
                            children: "Read",
                          }),
                        }),
                        (0, r.jsx)(p.default, {
                          href: "https://base.mirror.xyz/",
                          target: "_blank",
                          children: (0, r.jsx)(h.default, {
                            variant: f.c.Outlined,
                            children: "Subscribe",
                          }),
                        }),
                      ],
                    }),
                  ],
                }),
                (0, r.jsx)("div", {
                  className:
                    "absolute bottom-0 left-1/2 z-20 mx-auto flex w-full -translate-x-1/2 items-end justify-center space-x-4 p-4 md:max-w-[66%]",
                  children: e.map((e, n) =>
                    (0, r.jsx)(
                      g,
                      {
                        post: e,
                        index: n,
                        currentIndex: t,
                        selectSlide: y,
                        nextSlide: v,
                        isInView: o,
                      },
                      e.url,
                    ),
                  ),
                }),
              ],
            }),
          ],
        });
      }
    },
    50267: function (e, t, n) {
      "use strict";
      n.d(t, {
        default: function () {
          return f;
        },
      });
      var r = n(57437),
        s = n(86685),
        i = n(55197),
        o = n(10430),
        a = n(30710),
        l = n(48318),
        c = n(85562),
        u = n(2265),
        d =
          "/_next/static/assets/webm/cubes57f696e2137ba255dbd8514a90c58f7c.webm",
        h = n(71031);
      function f() {
        const e = (0, u.useRef)(null),
          { logError: t } = (0, s.p)(),
          n = (0, u.useCallback)(() => {
            e.current &&
              e.current.play().catch((e) => {
                t(e, "failed to play video");
              });
          }, [t]);
        return (0, r.jsx)("section", {
          children: (0, r.jsxs)("div", {
            className:
              "mb-12 mt-8 flex w-full flex-col items-center gap-4 md:flex-row",
            children: [
              (0, r.jsx)("div", {
                className: "relative flex w-full flex-row gap-4",
                onMouseEnter: n,
                children: (0, r.jsx)("video", {
                  src: d,
                  muted: !0,
                  playsInline: !0,
                  className: "mx-auto p-2 motion-reduce:hidden",
                  autoPlay: !1,
                  ref: e,
                  preload: "auto",
                }),
              }),
              (0, r.jsxs)("div", {
                className: "flex w-full flex-col gap-4 md:pl-20",
                children: [
                  (0, r.jsx)(i.Z, {
                    level: o.Y.Display2,
                    className: "text-[#E3E7E9]",
                    children: "Build and you will be rewarded",
                  }),
                  (0, r.jsx)(a.Z, {
                    children:
                      "Base supports passionate builders making apps for everyday life with grants, marketing, and as part of the Superchain, Base builders are eligible for consideration in Optimism's retroactive public goods funding.",
                  }),
                  (0, r.jsx)("div", {
                    children: (0, r.jsx)(h.default, {
                      href: "https://rounds.wtf/base-builds",
                      target: "_blank",
                      children: (0, r.jsx)(l.default, {
                        variant: c.c.Primary,
                        iconName: "baseOrgDiagonalUpArrow",
                        children: "Get rewarded",
                      }),
                    }),
                  }),
                ],
              }),
            ],
          }),
        });
      }
    },
    7962: function (e, t, n) {
      "use strict";
      n.d(t, {
        default: function () {
          return c;
        },
      });
      var r = n(57437),
        s = n(55197),
        i = n(10430),
        o = n(2265),
        a = n(49453);
      const l = [
        "create a global economy",
        "drive innovation",
        "unleash creativity",
        "increase economic freedom",
      ];
      function c() {
        const e = (0, o.useRef)(null),
          t = (0, o.useRef)();
        return (
          (0, o.useEffect)(() => {
            e.current &&
              !t.current &&
              (t.current = new a.Z(e.current, {
                strings: l,
                typeSpeed: 50,
                backDelay: 3e3,
                backSpeed: 25,
                loop: !0,
                showCursor: !1,
                autoInsertCss: !1,
              }));
          }, []),
          (0, r.jsx)("section", {
            className:
              "min-h-[32rem] sm:min-h-[19rem] md:min-h-[16rem] lg:min-h-[18rem] xl:min-h-[12rem]",
            children: (0, r.jsxs)(s.Z, {
              level: i.Y.Display1,
              children: [
                "We are bringing the world onchain to ",
                (0, r.jsx)("p", { className: "inline text-blue", ref: e }),
                ".",
              ],
            }),
          })
        );
      }
    },
    68518: function (e, t, n) {
      "use strict";
      n.d(t, {
        default: function () {
          return c;
        },
      });
      var r = n(57437),
        s = n(55197),
        i = n(10430),
        o = n(86855),
        a = n.n(o),
        l = n(2265);
      function c() {
        const e = (0, l.useRef)(null),
          t =
            " Base is for everyone - \u0628\u0627\u06cc\u0633 \u0644\u0644\u062c\u0645\u06cc\u0639 - Base es para todos - \u57fa\u5730\u9002\u5408\u6240\u6709\u4eba - La Base \xe8 per tutti - Base est pour tout le monde - Base ni ya kila mtu - ",
          n = a()(
            "relative w-full overflow-hidden rounded-2xl bg-blue p-8",
            "after:absolute after:z-10 after:bottom-0 after:left-0 after:top-0 after:w-[4rem] after:content-['']",
            "after:bg-gradient-to-r after:from-blue after:to-transparent",
            "before:absolute before:z-10 before:bottom-0 before:right-0 before:w-[4rem] before:top-0 before:content-['']",
            "before:bg-gradient-to-r before:from-transparent before:to-blue",
          );
        return (0, r.jsx)("section", {
          children: (0, r.jsx)("div", {
            className: n,
            ref: e,
            children: (0, r.jsxs)("div", {
              className: "inline-block animate-slide-left whitespace-nowrap",
              style: { "--animation-duration": "20s" },
              children: [
                (0, r.jsx)(s.Z, {
                  level: i.Y.Display4,
                  className: "inline-block whitespace-nowrap text-white",
                  children: t,
                }),
                " ",
                (0, r.jsx)(s.Z, {
                  level: i.Y.Display4,
                  className: "inline-block whitespace-nowrap text-white",
                  children: t,
                }),
              ],
            }),
          }),
        });
      }
    },
    80108: function (e, t, n) {
      "use strict";
      n.d(t, {
        default: function () {
          return m;
        },
      });
      var r = n(57437),
        s = n(2265),
        i = n(55197),
        o = n(10430),
        a = n(30710);
      const l = 52,
        c = 6,
        u = 31,
        d = 3,
        h = 9;
      function f(e) {
        let { isBase: t = !1, color: n = "#4083CD", progress: i, title: o } = e;
        const a = (0, s.useRef)(null);
        return (
          (0, s.useEffect)(() => {
            const e = a.current;
            if (!e) return;
            const r = e.getContext("2d");
            if (!r) return;
            const s = t ? Math.round(l - i * (l - c)) : l,
              o = u * h,
              f = s * h;
            (e.width = o), (e.height = f), (r.fillStyle = n);
            for (let t = 0; t < s; t++)
              for (let e = 0; e < u; e++)
                r.beginPath(),
                  r.arc(e * h + d, t * h + d, d, 0, 2 * Math.PI),
                  r.fill();
          }, [t, n, i]),
          (0, r.jsx)("canvas", {
            ref: a,
            style: { width: "100%", height: "100%" },
            title: o,
          })
        );
      }
      var p = n(33044);
      function m() {
        const [e, t] = (0, s.useState)(!1),
          [n, l] = (0, s.useState)(0),
          [c, u] = (0, s.useState)(!1),
          d = (0, s.useRef)(null),
          h = (0, s.useRef)(0),
          m = (0, s.useRef)(null),
          g = (0, s.useCallback)(() => {
            if (!d.current || !c) return;
            const n = d.current.getBoundingClientRect(),
              r = window.innerHeight;
            let s;
            const i = 0.8 * r,
              o = 0.3 * r;
            (s = n.top >= i ? 0 : n.top <= o ? 1 : 1 - (n.top - o) / (i - o)),
              (s = Math.min(1, Math.max(0, s))),
              l((e) => e + 0.1 * (s - e)),
              s >= 0.99 && !e ? t(!0) : s < 0.99 && e && t(!1);
          }, [e, c]);
        return (
          (0, s.useEffect)(() => {
            const e = d.current,
              t = new IntersectionObserver(
                (e) => {
                  let [t] = e;
                  u(t.isIntersecting);
                },
                { threshold: 0.1 },
              );
            return (
              e && t.observe(e),
              () => {
                e && t.unobserve(e);
              }
            );
          }, []),
          (0, s.useEffect)(() => {
            const e = () => {
              c &&
                (m.current && cancelAnimationFrame(m.current),
                window.scrollY !== h.current &&
                  ((h.current = window.scrollY),
                  (m.current = requestAnimationFrame(g))));
            };
            return (
              c && (window.addEventListener("scroll", e), g()),
              () => {
                window.removeEventListener("scroll", e),
                  m.current && cancelAnimationFrame(m.current);
              }
            );
          }, [c, g]),
          (0, r.jsx)("section", {
            ref: d,
            children: (0, r.jsxs)("div", {
              className:
                "mb-12 mt-8 flex w-full flex-col items-center gap-8 md:flex-row",
              children: [
                (0, r.jsx)("div", {
                  className: "w-full",
                  children: (0, r.jsxs)(i.Z, {
                    level: o.Y.Display2,
                    className: "text-[#E3E7E9]",
                    children: [
                      "Transactions",
                      (0, r.jsx)("br", {}),
                      " below ",
                      (0, r.jsx)("span", {
                        className: "text-blue",
                        children: "one cent*",
                      }),
                    ],
                  }),
                }),
                (0, r.jsxs)("div", {
                  className: "flex w-full flex-row gap-2 md:gap-4",
                  children: [
                    (0, r.jsx)("div", {
                      className: "w-full",
                      children: (0, r.jsx)(f, {
                        color: "#656565",
                        progress: 1,
                        title: "Ethereum Mainnet Transactions fees are high",
                      }),
                    }),
                    (0, r.jsxs)("div", {
                      className: "w-full self-end",
                      children: [
                        (0, r.jsxs)(p.u, {
                          appear: !0,
                          show: e,
                          className: "transition-all md:inline-block",
                          enterFrom: "opacity-0",
                          enterTo: "opacity-100",
                          leaveFrom: "opacity-100",
                          leaveTo: "opacity-0",
                          children: [
                            (0, r.jsx)(a.Z, {
                              className: "mb-6 text-[#E3E7E9]",
                              children:
                                "Base is the best of Ethereum but 10-100x cheaper. To make onchain accessible for everyone, we're working to keep fees consistently below 1 cent.",
                            }),
                            (0, r.jsx)(a.Z, {
                              className: "mb-6 text-[#E3E7E9]",
                              children: "*Based on 90-day average",
                            }),
                          ],
                        }),
                        (0, r.jsx)(f, {
                          isBase: !0,
                          color: "#4083CD",
                          progress: n,
                          title: "Base Mainnet Transactions fees are low",
                        }),
                      ],
                    }),
                  ],
                }),
              ],
            }),
          })
        );
      }
    },
    87424: function (e, t, n) {
      "use strict";
      n.d(t, {
        default: function () {
          return m;
        },
      });
      var r = n(57437),
        s =
          "/_next/static/assets/webm/boltafffb945bbf3b926e8a3fcc5123231ab.webm",
        i =
          "/_next/static/assets/webm/ethd867d25a27b0f3a3782841845bff6215.webm",
        o =
          "/_next/static/assets/webm/globe9f039ff19208a49a282591ff20ce2d49.webm",
        a = n(86685),
        l = n(92399),
        c = n(30710),
        u = n(55197),
        d = n(10430),
        h = n(2265);
      function f(e) {
        let { title: t, description: n, src: s } = e;
        const i = (0, h.useRef)(null),
          { logError: o } = (0, a.p)(),
          f = (0, h.useCallback)(() => {
            i.current &&
              i.current.play().catch((e) => {
                o(e, "failed to play video");
              });
          }, [o]);
        return (0, r.jsx)("div", {
          onMouseEnter: f,
          className: "w-full",
          children: (0, r.jsxs)(l.default, {
            innerClassName:
              "p-6 transition-all bg-[#0A0B0C] group-hover:bg-[#111111]",
            children: [
              (0, r.jsx)("video", {
                src: s,
                muted: !0,
                playsInline: !0,
                className: "mx-auto mt-6 motion-reduce:hidden",
                autoPlay: !1,
                ref: i,
                preload: "auto",
              }),
              (0, r.jsx)(u.Z, {
                level: d.Y.Title1,
                className: "mb-4",
                children: t,
              }),
              (0, r.jsx)(c.Z, { className: "text-[#e3e7e9]", children: n }),
            ],
          }),
        });
      }
      var p = n(71031);
      function m() {
        return (0, r.jsxs)("section", {
          className: "my-section flex w-full flex-col gap-4 md:flex-row",
          children: [
            (0, r.jsx)(f, {
              title: "Built for Billions",
              description:
                "Our vision to keep fees low (below 1 cent) and transactions fast (below 1 second) will help bring the next billion people onchain.",
              src: s,
            }),
            (0, r.jsx)(f, {
              title: "Worldwide reach",
              description:
                "The Base economy is made up of millions of people, thousands of builders, and onramps in 190+ countries.",
              src: o,
            }),
            (0, r.jsx)(f, {
              title: "Open and trusted",
              description: (0, r.jsxs)("span", {
                children: [
                  "Base is built as an Ethereum L2, decentralized with the",
                  " ",
                  (0, r.jsx)(p.default, {
                    href: "https://optimism.io/vision",
                    target: "_blank",
                    rel: "noopener noreferrer",
                    className: "hover:underline",
                    children: "Optimism Superchain",
                  }),
                  ", and incubated by Coinbase.",
                ],
              }),
              src: i,
            }),
          ],
        });
      }
    },
    30710: function (e, t, n) {
      "use strict";
      n.d(t, {
        Z: function () {
          return c;
        },
      });
      var r,
        s = n(57437),
        i = n(86855),
        o = n.n(i);
      !(function (e) {
        (e.Body = "body"), (e.Label1 = "label-1"), (e.Label2 = "label-2");
      })(r || (r = {}));
      const a = { [r.Body]: "p", [r.Label1]: "p", [r.Label2]: "p" },
        l = {
          [r.Body]: "font-sans text-[1rem] leading-[1.6em]",
          [r.Label1]: "font-display text-[0.875rem] leading-[1.1em]",
          [r.Label2]: "font-sans text-[0.75rem] leading-[1.0625rem]",
        };
      function c(e) {
        let { variant: t = r.Body, children: n, as: i, className: c } = e;
        const u = null !== i && void 0 !== i ? i : a[t],
          d = o()("text-currentColor", l[t], c);
        return (0, s.jsx)(u, { className: d, children: n });
      }
    },
    55197: function (e, t, n) {
      "use strict";
      n.d(t, {
        Z: function () {
          return c;
        },
      });
      var r = n(57437),
        s = n(10430),
        i = n(86855),
        o = n.n(i);
      const a = {
          [s.Y.Display1]: "h1",
          [s.Y.Display2]: "h2",
          [s.Y.Display3]: "h3",
          [s.Y.Display4]: "h4",
          [s.Y.Title1]: "h1",
          [s.Y.Title2]: "h2",
          [s.Y.Title3]: "h3",
          [s.Y.Title4]: "h4",
          [s.Y.Headline]: "h5",
          [s.Y.Big]: "h1",
        },
        l = {
          [s.Y.Display1]:
            "font-display text-[3.8125rem] lg:text-[4.8125rem] leading-[1.2em] tracking-[-0.01em]",
          [s.Y.Display2]:
            "font-display text-[2.75rem] lg:text-[3.75rem] leading-[1.2em]",
          [s.Y.Display3]:
            "font-display text-[1.625rem] lg:text-[2.625rem] leading-[1.2em]",
          [s.Y.Display4]:
            "font-display text-[1.5rem] lg:text-[2rem] leading-[1.2em]",
          [s.Y.Title1]: "font-sans text-[1.75rem] leading-[1.2em] font-bold",
          [s.Y.Title2]:
            "font-sans text-[1.625rem] leading-[2.375rem] tracking-[-0.01em]",
          [s.Y.Title3]: "font-sans text-[1.25rem] leading-[1.75rem]",
          [s.Y.Title4]: "font-sans text-[1.125rem] leading-[1.625rem]",
          [s.Y.Headline]: "font-sans text-[1rem] leading-[1.4375rem] font-bold",
          [s.Y.Big]: "font-sans text-[2rem] leading-[1.2em] font-bold",
        };
      function c(e) {
        let { level: t = s.Y.Title1, children: n, as: i, className: c } = e;
        const u = null !== i && void 0 !== i ? i : a[t],
          d = o()("text-currentColor", l[t], c);
        return (0, r.jsx)(u, { className: d, children: n });
      }
    },
    10430: function (e, t, n) {
      "use strict";
      var r;
      n.d(t, {
        Y: function () {
          return r;
        },
      }),
        (function (e) {
          (e.Display1 = "display-1"),
            (e.Display2 = "display-2"),
            (e.Display3 = "display-3"),
            (e.Display4 = "display-4"),
            (e.Title1 = "title-1"),
            (e.Title2 = "title-2"),
            (e.Title3 = "title-3"),
            (e.Title4 = "title-5"),
            (e.Headline = "headline");
        })(r || (r = {}));
    },
    54916: function (e, t, n) {
      "use strict";
      n.d(t, {
        yG: function () {
          return d;
        },
      });
      var r = n(81460),
        s = n(90713),
        i = n(68571);
      var o;
      o = i.env.DOCS_URL;
      var a;
      a = i.env.BRIDGE_URL;
      var l;
      l = i.env.GREENHOUSE_HTTPS;
      var c;
      c = i.env.MAINNET_LAUNCH_BLOG_POST_URL;
      var u;
      u = i.env.MAINNET_LAUNCH_FLAG;
      const d = !1;
      var h;
      h = i.env.TRUSTED_SIGNER_ADDRESS;
      var f;
      (f = i.env.TRUSTED_SIGNER_PRIVATE_KEY),
        r.L.id,
        s.u.id,
        r.L.id,
        s.u.id,
        i.env.AMPLITUDE_API_KEY_DEVELOPMENT,
        i.env.AMPLITUDE_API_KEY_PRODUCTION;
      var p;
      !(function (e) {
        e.FARCASTER_FRAME_CONTEXT = "FARCASTER_FRAME_CONTEXT";
      })(p || (p = {}));
    },
    11595: function (e, t, n) {
      "use strict";
      n.d(t, {
        FA: function () {
          return i;
        },
        UK: function () {
          return o;
        },
        e8: function () {
          return s;
        },
      });
      const r = "base-web",
        s = (e) => ("string" === typeof e ? e : e.src),
        i = (e) => {
          const t = s(e);
          if (t.startsWith("/_next/static/")) return !0;
          return !!t.startsWith("/images/");
        };
      function o(e) {
        let { media: t, width: n, format: s = "webp" } = e;
        if (
          (function (e) {
            return /^data:image\/[a-zA-Z]+;base64,/.test(e);
          })(t)
        )
          return t;
        const i = [
          "w_".concat(2 * n),
          "f_".concat(s),
          encodeURIComponent(t),
        ].join("/");
        return "https://res.cloudinary.com/"
          .concat(r, "/image/fetch/")
          .concat(i);
      }
    },
    47903: function (e, t, n) {
      "use strict";
      n.d(t, {
        k: function () {
          return o;
        },
      });
      var r = n(60221),
        s = n(88810);
      class i {
        static getInstance(e) {
          return i.instance || (i.instance = new i(e)), i.instance;
        }
        createDatadogLog(e, t, n) {
          let s, i;
          JSON.stringify(
            (0, r._)(
              {
                message: "[".concat(this.service, "] ").concat(t),
                level: e,
                dd: { trace_id: s, span_id: i },
              },
              n,
            ),
          );
        }
        log(e, t, n) {
          this.createDatadogLog(e, t, n);
        }
        info(e, t) {
          this.log("info", e, t);
        }
        warn(e, t) {
          this.log("warn", e, t);
        }
        error(e, t, n) {
          const i =
            t instanceof Error
              ? {
                  name: t.name,
                  cause: t.cause,
                  message: t.message,
                  stack: t.stack,
                }
              : { message: JSON.stringify(t) };
          t && this.log("error", e, (0, s._)((0, r._)({}, n), { error: i })),
            this.log("error", e, n);
        }
        debug(e, t) {
          this.log("debug", e, t);
        }
        verbose(e, t) {
          this.log("verbose", e, t);
        }
        constructor(e) {
          this.service = e.service;
        }
      }
      const o = i.getInstance({ service: "base-org" });
    },
    63246: function (e, t, n) {
      "use strict";
      n.d(t, {
        EF: function () {
          return l;
        },
        aK: function () {
          return d;
        },
        dx: function () {
          return c;
        },
        jv: function () {
          return u;
        },
        pZ: function () {
          return p;
        },
        s7: function () {
          return h;
        },
        t$: function () {
          return f;
        },
      });
      var r = n(83052);
      var s;
      const i = null !== (s = "base.mypinata.cloud") ? s : void 0;
      var o;
      const a =
          null !==
          (o =
            "f6uqhE35YREDMuFqLvxFLqd-MBRlrJ1qWog8gyCF8T88-Tsiu2IX48F-kyVti78J")
            ? o
            : void 0,
        l = (e) =>
          Object.entries(e)
            .map((e) => e.map(encodeURIComponent).join("="))
            .join("&"),
        c = (e, t) => "".concat(e, "?").concat(l(t));
      function u(e) {
        if (!e) return !1;
        try {
          return new URL(e), !0;
        } catch (t) {
          return !1;
        }
      }
      const d = (e) => {
          try {
            const t = new URL(e);
            if ("ipfs:" !== t.protocol) return !1;
            const n = t.host;
            return (0, r.cid)(n);
          } catch (t) {
            return !1;
          }
        },
        h = (e) => {
          try {
            const t = new URL(e);
            return (
              "https:" === t.protocol &&
              "zku9gdedgba48lmr.public.blob.vercel-storage.com" === t.hostname
            );
          } catch (t) {
            return !1;
          }
        },
        f = (e) => {
          if (e && d(e))
            try {
              const t = new URL(e),
                n = t.host,
                r = t.pathname;
              return i && a
                ? "https://"
                    .concat(i, "/ipfs/")
                    .concat(n)
                    .concat(r, "?pinataGatewayToken=")
                    .concat(a)
                : "https://ipfs.io/ipfs/".concat(n).concat(r);
            } catch (t) {
              return;
            }
        };
      function p(e) {
        return e.startsWith("data:");
      }
    },
    50332: function (e, t, n) {
      "use strict";
      n.d(t, {
        IE: function () {
          return u;
        },
        yG: function () {
          return c;
        },
      });
      var r = n(68571);
      var s;
      s = r.env.DOCS_URL;
      var i;
      i = r.env.BRIDGE_URL;
      var o;
      o = r.env.GREENHOUSE_HTTPS;
      var a;
      a = r.env.MAINNET_LAUNCH_BLOG_POST_URL;
      var l;
      l = r.env.MAINNET_LAUNCH_FLAG;
      const c = !1,
        u = c
          ? "client-Wvf63OdaukDZyCBtwgbOvHgGTuASBZFG"
          : "client-agFoQg5AOvZ2ZiOChny9RrGk21jG3VrH";
    },
    81753: function (e, t, n) {
      "use strict";
      n.d(t, {
        E3: function () {
          return i;
        },
        Us: function () {
          return s;
        },
        ZP: function () {
          return a;
        },
        re: function () {
          return r;
        },
        yV: function () {
          return l;
        },
      });
      var r,
        s,
        i,
        o = n(50332);
      function a(e, t, n) {
        if (o.yG)
          return console.log("logEvent: ", {
            name: e,
            event: t,
            importance: n,
          });
        const r = window.ClientAnalytics;
        r && (null === r || void 0 === r || r.logEvent(e, t, n));
      }
      function l(e) {
        if (o.yG) return console.log("identify: ", { event: e });
        const t = window.ClientAnalytics;
        t && (null === t || void 0 === t || t.logEvent("identify", e, "low"));
      }
      !(function (e) {
        (e.unknown = "unknown"),
          (e.banner = "banner"),
          (e.button = "button"),
          (e.card = "card"),
          (e.chart = "chart"),
          (e.content_script = "content_script"),
          (e.dropdown = "dropdown"),
          (e.link = "link"),
          (e.page = "page"),
          (e.modal = "modal"),
          (e.table = "table"),
          (e.search_bar = "search_bar"),
          (e.service_worker = "service_worker"),
          (e.text = "text"),
          (e.text_input = "text_input"),
          (e.tray = "tray"),
          (e.checkbox = "checkbox"),
          (e.icon = "icon");
      })(r || (r = {})),
        (function (e) {
          (e.unknown = "unknown"),
            (e.blur = "blur"),
            (e.click = "click"),
            (e.change = "change"),
            (e.dismiss = "dismiss"),
            (e.focus = "focus"),
            (e.hover = "hover"),
            (e.select = "select"),
            (e.measurement = "measurement"),
            (e.move = "move"),
            (e.process = "process"),
            (e.render = "render"),
            (e.scroll = "scroll"),
            (e.view = "view"),
            (e.search = "search"),
            (e.keyPress = "keyPress"),
            (e.error = "error");
        })(s || (s = {})),
        (function (e) {
          (e.low = "low"), (e.high = "high");
        })(i || (i = {}));
    },
    38038: function (e, t, n) {
      "use strict";
      n.r(t),
        (t.default = {
          src: "/_next/static/media/op_logo.a490ad2d.svg",
          height: 24,
          width: 24,
          blurWidth: 0,
          blurHeight: 0,
        });
    },
    5876: function (e, t, n) {
      "use strict";
      n.r(t),
        (t.default = {
          src: "/_next/static/media/apps_illustration.1e4d524e.svg",
          height: 78,
          width: 73,
          blurWidth: 0,
          blurHeight: 0,
        });
    },
    97400: function (e, t, n) {
      "use strict";
      n.r(t),
        (t.default = {
          src: "/_next/static/media/bridge_illustration.a724cbc9.svg",
          height: 78,
          width: 68,
          blurWidth: 0,
          blurHeight: 0,
        });
    },
    74905: function (e, t, n) {
      "use strict";
      n.r(t),
        (t.default = {
          src: "/_next/static/media/docs_illustration.631492e3.svg",
          height: 78,
          width: 74,
          blurWidth: 0,
          blurHeight: 0,
        });
    },
    6224: function (e, t, n) {
      "use strict";
      n.r(t),
        (t.default = {
          src: "/_next/static/media/resources_illustration.352e384b.svg",
          height: 79,
          width: 95,
          blurWidth: 0,
          blurHeight: 0,
        });
    },
    49453: function (e, t, n) {
      "use strict";
      function r() {
        return (
          (r = Object.assign
            ? Object.assign.bind()
            : function (e) {
                for (var t = 1; t < arguments.length; t++) {
                  var n = arguments[t];
                  for (var r in n)
                    Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r]);
                }
                return e;
              }),
          r.apply(this, arguments)
        );
      }
      n.d(t, {
        Z: function () {
          return a;
        },
      });
      var s = {
          strings: [
            "These are the default values...",
            "You know what you should do?",
            "Use your own!",
            "Have a great day!",
          ],
          stringsElement: null,
          typeSpeed: 0,
          startDelay: 0,
          backSpeed: 0,
          smartBackspace: !0,
          shuffle: !1,
          backDelay: 700,
          fadeOut: !1,
          fadeOutClass: "typed-fade-out",
          fadeOutDelay: 500,
          loop: !1,
          loopCount: 1 / 0,
          showCursor: !0,
          cursorChar: "|",
          autoInsertCss: !0,
          attr: null,
          bindInputFocusEvents: !1,
          contentType: "html",
          onBegin: function (e) {},
          onComplete: function (e) {},
          preStringTyped: function (e, t) {},
          onStringTyped: function (e, t) {},
          onLastStringBackspaced: function (e) {},
          onTypingPaused: function (e, t) {},
          onTypingResumed: function (e, t) {},
          onReset: function (e) {},
          onStop: function (e, t) {},
          onStart: function (e, t) {},
          onDestroy: function (e) {},
        },
        i = new ((function () {
          function e() {}
          var t = e.prototype;
          return (
            (t.load = function (e, t, n) {
              if (
                ((e.el = "string" == typeof n ? document.querySelector(n) : n),
                (e.options = r({}, s, t)),
                (e.isInput = "input" === e.el.tagName.toLowerCase()),
                (e.attr = e.options.attr),
                (e.bindInputFocusEvents = e.options.bindInputFocusEvents),
                (e.showCursor = !e.isInput && e.options.showCursor),
                (e.cursorChar = e.options.cursorChar),
                (e.cursorBlinking = !0),
                (e.elContent = e.attr
                  ? e.el.getAttribute(e.attr)
                  : e.el.textContent),
                (e.contentType = e.options.contentType),
                (e.typeSpeed = e.options.typeSpeed),
                (e.startDelay = e.options.startDelay),
                (e.backSpeed = e.options.backSpeed),
                (e.smartBackspace = e.options.smartBackspace),
                (e.backDelay = e.options.backDelay),
                (e.fadeOut = e.options.fadeOut),
                (e.fadeOutClass = e.options.fadeOutClass),
                (e.fadeOutDelay = e.options.fadeOutDelay),
                (e.isPaused = !1),
                (e.strings = e.options.strings.map(function (e) {
                  return e.trim();
                })),
                (e.stringsElement =
                  "string" == typeof e.options.stringsElement
                    ? document.querySelector(e.options.stringsElement)
                    : e.options.stringsElement),
                e.stringsElement)
              ) {
                (e.strings = []),
                  (e.stringsElement.style.cssText =
                    "clip: rect(0 0 0 0);clip-path:inset(50%);height:1px;overflow:hidden;position:absolute;white-space:nowrap;width:1px;");
                var i = Array.prototype.slice.apply(e.stringsElement.children),
                  o = i.length;
                if (o)
                  for (var a = 0; a < o; a += 1)
                    e.strings.push(i[a].innerHTML.trim());
              }
              for (var l in ((e.strPos = 0),
              (e.currentElContent = this.getCurrentElContent(e)),
              e.currentElContent &&
                e.currentElContent.length > 0 &&
                ((e.strPos = e.currentElContent.length - 1),
                e.strings.unshift(e.currentElContent)),
              (e.sequence = []),
              e.strings))
                e.sequence[l] = l;
              (e.arrayPos = 0),
                (e.stopNum = 0),
                (e.loop = e.options.loop),
                (e.loopCount = e.options.loopCount),
                (e.curLoop = 0),
                (e.shuffle = e.options.shuffle),
                (e.pause = {
                  status: !1,
                  typewrite: !0,
                  curString: "",
                  curStrPos: 0,
                }),
                (e.typingComplete = !1),
                (e.autoInsertCss = e.options.autoInsertCss),
                e.autoInsertCss &&
                  (this.appendCursorAnimationCss(e),
                  this.appendFadeOutAnimationCss(e));
            }),
            (t.getCurrentElContent = function (e) {
              return e.attr
                ? e.el.getAttribute(e.attr)
                : e.isInput
                  ? e.el.value
                  : "html" === e.contentType
                    ? e.el.innerHTML
                    : e.el.textContent;
            }),
            (t.appendCursorAnimationCss = function (e) {
              var t = "data-typed-js-cursor-css";
              if (e.showCursor && !document.querySelector("[" + t + "]")) {
                var n = document.createElement("style");
                n.setAttribute(t, "true"),
                  (n.innerHTML =
                    "\n        .typed-cursor{\n          opacity: 1;\n        }\n        .typed-cursor.typed-cursor--blink{\n          animation: typedjsBlink 0.7s infinite;\n          -webkit-animation: typedjsBlink 0.7s infinite;\n                  animation: typedjsBlink 0.7s infinite;\n        }\n        @keyframes typedjsBlink{\n          50% { opacity: 0.0; }\n        }\n        @-webkit-keyframes typedjsBlink{\n          0% { opacity: 1; }\n          50% { opacity: 0.0; }\n          100% { opacity: 1; }\n        }\n      "),
                  document.body.appendChild(n);
              }
            }),
            (t.appendFadeOutAnimationCss = function (e) {
              var t = "data-typed-fadeout-js-css";
              if (e.fadeOut && !document.querySelector("[" + t + "]")) {
                var n = document.createElement("style");
                n.setAttribute(t, "true"),
                  (n.innerHTML =
                    "\n        .typed-fade-out{\n          opacity: 0;\n          transition: opacity .25s;\n        }\n        .typed-cursor.typed-cursor--blink.typed-fade-out{\n          -webkit-animation: 0;\n          animation: 0;\n        }\n      "),
                  document.body.appendChild(n);
              }
            }),
            e
          );
        })())(),
        o = new ((function () {
          function e() {}
          var t = e.prototype;
          return (
            (t.typeHtmlChars = function (e, t, n) {
              if ("html" !== n.contentType) return t;
              var r = e.substring(t).charAt(0);
              if ("<" === r || "&" === r) {
                var s;
                for (
                  s = "<" === r ? ">" : ";";
                  e.substring(t + 1).charAt(0) !== s && !(1 + ++t > e.length);

                );
                t++;
              }
              return t;
            }),
            (t.backSpaceHtmlChars = function (e, t, n) {
              if ("html" !== n.contentType) return t;
              var r = e.substring(t).charAt(0);
              if (">" === r || ";" === r) {
                var s;
                for (
                  s = ">" === r ? "<" : "&";
                  e.substring(t - 1).charAt(0) !== s && !(--t < 0);

                );
                t--;
              }
              return t;
            }),
            e
          );
        })())(),
        a = (function () {
          function e(e, t) {
            i.load(this, t, e), this.begin();
          }
          var t = e.prototype;
          return (
            (t.toggle = function () {
              this.pause.status ? this.start() : this.stop();
            }),
            (t.stop = function () {
              this.typingComplete ||
                this.pause.status ||
                (this.toggleBlinking(!0),
                (this.pause.status = !0),
                this.options.onStop(this.arrayPos, this));
            }),
            (t.start = function () {
              this.typingComplete ||
                (this.pause.status &&
                  ((this.pause.status = !1),
                  this.pause.typewrite
                    ? this.typewrite(this.pause.curString, this.pause.curStrPos)
                    : this.backspace(
                        this.pause.curString,
                        this.pause.curStrPos,
                      ),
                  this.options.onStart(this.arrayPos, this)));
            }),
            (t.destroy = function () {
              this.reset(!1), this.options.onDestroy(this);
            }),
            (t.reset = function (e) {
              void 0 === e && (e = !0),
                clearInterval(this.timeout),
                this.replaceText(""),
                this.cursor &&
                  this.cursor.parentNode &&
                  (this.cursor.parentNode.removeChild(this.cursor),
                  (this.cursor = null)),
                (this.strPos = 0),
                (this.arrayPos = 0),
                (this.curLoop = 0),
                e &&
                  (this.insertCursor(),
                  this.options.onReset(this),
                  this.begin());
            }),
            (t.begin = function () {
              var e = this;
              this.options.onBegin(this),
                (this.typingComplete = !1),
                this.shuffleStringsIfNeeded(this),
                this.insertCursor(),
                this.bindInputFocusEvents && this.bindFocusEvents(),
                (this.timeout = setTimeout(function () {
                  0 === e.strPos
                    ? e.typewrite(e.strings[e.sequence[e.arrayPos]], e.strPos)
                    : e.backspace(e.strings[e.sequence[e.arrayPos]], e.strPos);
                }, this.startDelay));
            }),
            (t.typewrite = function (e, t) {
              var n = this;
              this.fadeOut &&
                this.el.classList.contains(this.fadeOutClass) &&
                (this.el.classList.remove(this.fadeOutClass),
                this.cursor && this.cursor.classList.remove(this.fadeOutClass));
              var r = this.humanizer(this.typeSpeed),
                s = 1;
              !0 !== this.pause.status
                ? (this.timeout = setTimeout(function () {
                    t = o.typeHtmlChars(e, t, n);
                    var r = 0,
                      i = e.substring(t);
                    if ("^" === i.charAt(0) && /^\^\d+/.test(i)) {
                      var a = 1;
                      (a += (i = /\d+/.exec(i)[0]).length),
                        (r = parseInt(i)),
                        (n.temporaryPause = !0),
                        n.options.onTypingPaused(n.arrayPos, n),
                        (e = e.substring(0, t) + e.substring(t + a)),
                        n.toggleBlinking(!0);
                    }
                    if ("`" === i.charAt(0)) {
                      for (
                        ;
                        "`" !== e.substring(t + s).charAt(0) &&
                        (s++, !(t + s > e.length));

                      );
                      var l = e.substring(0, t),
                        c = e.substring(l.length + 1, t + s),
                        u = e.substring(t + s + 1);
                      (e = l + c + u), s--;
                    }
                    n.timeout = setTimeout(function () {
                      n.toggleBlinking(!1),
                        t >= e.length
                          ? n.doneTyping(e, t)
                          : n.keepTyping(e, t, s),
                        n.temporaryPause &&
                          ((n.temporaryPause = !1),
                          n.options.onTypingResumed(n.arrayPos, n));
                    }, r);
                  }, r))
                : this.setPauseStatus(e, t, !0);
            }),
            (t.keepTyping = function (e, t, n) {
              0 === t &&
                (this.toggleBlinking(!1),
                this.options.preStringTyped(this.arrayPos, this));
              var r = e.substring(0, (t += n));
              this.replaceText(r), this.typewrite(e, t);
            }),
            (t.doneTyping = function (e, t) {
              var n = this;
              this.options.onStringTyped(this.arrayPos, this),
                this.toggleBlinking(!0),
                (this.arrayPos === this.strings.length - 1 &&
                  (this.complete(),
                  !1 === this.loop || this.curLoop === this.loopCount)) ||
                  (this.timeout = setTimeout(function () {
                    n.backspace(e, t);
                  }, this.backDelay));
            }),
            (t.backspace = function (e, t) {
              var n = this;
              if (!0 !== this.pause.status) {
                if (this.fadeOut) return this.initFadeOut();
                this.toggleBlinking(!1);
                var r = this.humanizer(this.backSpeed);
                this.timeout = setTimeout(function () {
                  t = o.backSpaceHtmlChars(e, t, n);
                  var r = e.substring(0, t);
                  if ((n.replaceText(r), n.smartBackspace)) {
                    var s = n.strings[n.arrayPos + 1];
                    n.stopNum = s && r === s.substring(0, t) ? t : 0;
                  }
                  t > n.stopNum
                    ? (t--, n.backspace(e, t))
                    : t <= n.stopNum &&
                      (n.arrayPos++,
                      n.arrayPos === n.strings.length
                        ? ((n.arrayPos = 0),
                          n.options.onLastStringBackspaced(),
                          n.shuffleStringsIfNeeded(),
                          n.begin())
                        : n.typewrite(n.strings[n.sequence[n.arrayPos]], t));
                }, r);
              } else this.setPauseStatus(e, t, !1);
            }),
            (t.complete = function () {
              this.options.onComplete(this),
                this.loop ? this.curLoop++ : (this.typingComplete = !0);
            }),
            (t.setPauseStatus = function (e, t, n) {
              (this.pause.typewrite = n),
                (this.pause.curString = e),
                (this.pause.curStrPos = t);
            }),
            (t.toggleBlinking = function (e) {
              this.cursor &&
                (this.pause.status ||
                  (this.cursorBlinking !== e &&
                    ((this.cursorBlinking = e),
                    e
                      ? this.cursor.classList.add("typed-cursor--blink")
                      : this.cursor.classList.remove("typed-cursor--blink"))));
            }),
            (t.humanizer = function (e) {
              return Math.round((Math.random() * e) / 2) + e;
            }),
            (t.shuffleStringsIfNeeded = function () {
              this.shuffle &&
                (this.sequence = this.sequence.sort(function () {
                  return Math.random() - 0.5;
                }));
            }),
            (t.initFadeOut = function () {
              var e = this;
              return (
                (this.el.className += " " + this.fadeOutClass),
                this.cursor &&
                  (this.cursor.className += " " + this.fadeOutClass),
                setTimeout(function () {
                  e.arrayPos++,
                    e.replaceText(""),
                    e.strings.length > e.arrayPos
                      ? e.typewrite(e.strings[e.sequence[e.arrayPos]], 0)
                      : (e.typewrite(e.strings[0], 0), (e.arrayPos = 0));
                }, this.fadeOutDelay)
              );
            }),
            (t.replaceText = function (e) {
              this.attr
                ? this.el.setAttribute(this.attr, e)
                : this.isInput
                  ? (this.el.value = e)
                  : "html" === this.contentType
                    ? (this.el.innerHTML = e)
                    : (this.el.textContent = e);
            }),
            (t.bindFocusEvents = function () {
              var e = this;
              this.isInput &&
                (this.el.addEventListener("focus", function (t) {
                  e.stop();
                }),
                this.el.addEventListener("blur", function (t) {
                  (e.el.value && 0 !== e.el.value.length) || e.start();
                }));
            }),
            (t.insertCursor = function () {
              this.showCursor &&
                (this.cursor ||
                  ((this.cursor = document.createElement("span")),
                  (this.cursor.className = "typed-cursor"),
                  this.cursor.setAttribute("aria-hidden", !0),
                  (this.cursor.innerHTML = this.cursorChar),
                  this.el.parentNode &&
                    this.el.parentNode.insertBefore(
                      this.cursor,
                      this.el.nextSibling,
                    )));
            }),
            e
          );
        })();
    },
  },
  function (e) {
    e.O(
      0,
      [2972, 5878, 1226, 1165, 2694, 7347, 3044, 7560, 2971, 2117, 1744],
      function () {
        return (t = 8585), e((e.s = t));
        var t;
      },
    );
    var t = e.O();
    _N_E = t;
  },
]);
