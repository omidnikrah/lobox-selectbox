import { jsxs as p, jsx as c } from "react/jsx-runtime";
import { createContext as I, useContext as A, forwardRef as O, createElement as w, useRef as B, useEffect as q, useState as b, useMemo as E } from "react";
const k = I(void 0), m = () => {
  const e = A(k);
  if (!e)
    throw new Error("SelectBox components must be used within a SelectBox.Root");
  return e;
};
function S(e) {
  var t, n, o = "";
  if (typeof e == "string" || typeof e == "number") o += e;
  else if (typeof e == "object") if (Array.isArray(e)) {
    var s = e.length;
    for (t = 0; t < s; t++) e[t] && (n = S(e[t])) && (o && (o += " "), o += n);
  } else for (n in e) e[n] && (o && (o += " "), o += n);
  return o;
}
function R() {
  for (var e, t, n = 0, o = "", s = arguments.length; n < s; n++) (e = arguments[n]) && (t = S(e)) && (o && (o += " "), o += t);
  return o;
}
/**
 * @license lucide-react v0.452.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const T = (e) => e.replace(/([a-z0-9])([A-Z])/g, "$1-$2").toLowerCase(), j = (...e) => e.filter((t, n, o) => !!t && o.indexOf(t) === n).join(" ");
/**
 * @license lucide-react v0.452.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
var $ = {
  xmlns: "http://www.w3.org/2000/svg",
  width: 24,
  height: 24,
  viewBox: "0 0 24 24",
  fill: "none",
  stroke: "currentColor",
  strokeWidth: 2,
  strokeLinecap: "round",
  strokeLinejoin: "round"
};
/**
 * @license lucide-react v0.452.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const V = O(
  ({
    color: e = "currentColor",
    size: t = 24,
    strokeWidth: n = 2,
    absoluteStrokeWidth: o,
    className: s = "",
    children: r,
    iconNode: _,
    ...i
  }, u) => w(
    "svg",
    {
      ref: u,
      ...$,
      width: t,
      height: t,
      stroke: e,
      strokeWidth: o ? Number(n) * 24 / Number(t) : n,
      className: j("lucide", s),
      ...i
    },
    [
      ..._.map(([x, h]) => w(x, h)),
      ...Array.isArray(r) ? r : [r]
    ]
  )
);
/**
 * @license lucide-react v0.452.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const D = (e, t) => {
  const n = O(
    ({ className: o, ...s }, r) => w(V, {
      ref: r,
      iconNode: t,
      className: j(`lucide-${T(e)}`, o),
      ...s
    })
  );
  return n.displayName = `${e}`, n;
};
/**
 * @license lucide-react v0.452.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const M = D("Check", [["path", { d: "M20 6 9 17l-5-5", key: "1gmf2c" }]]);
/**
 * @license lucide-react v0.452.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const P = D("ChevronDown", [
  ["path", { d: "m6 9 6 6 6-6", key: "qrunsl" }]
]), W = "_selectbox__wrapper_1fejq_1", Z = "_selectbox__trigger_1fejq_9", z = "_selectbox__options_1fejq_45", G = "_selectbox__option_1fejq_45", a = {
  selectbox__wrapper: W,
  selectbox__trigger: Z,
  "selectbox__search-input": "_selectbox__search-input_1fejq_19",
  "selectbox__trigger-icon": "_selectbox__trigger-icon_1fejq_31",
  selectbox__options: z,
  selectbox__option: G,
  "selectbox__option--selected": "_selectbox__option--selected_1fejq_68"
}, H = ({ option: e }) => {
  const { selectedOptions: t, handleOptionClick: n, handleKeyDown: o } = m(), s = t.includes(e.value);
  return /* @__PURE__ */ p(
    "li",
    {
      className: R(a.selectbox__option, {
        [a["selectbox__option--selected"]]: s
      }),
      onClick: () => n(e),
      onKeyDown: o,
      tabIndex: 0,
      role: "option",
      "aria-selected": s ? "true" : "false",
      children: [
        e.label,
        s && /* @__PURE__ */ c(M, { width: 16, height: 16 })
      ]
    }
  );
}, J = () => {
  const { isOpen: e, filteredOptions: t, handleAddNewItem: n, handleKeyDown: o } = m();
  return e ? /* @__PURE__ */ p("ul", { className: a.selectbox__options, role: "listbox", "aria-multiselectable": "true", children: [
    !t.length && /* @__PURE__ */ c(
      "li",
      {
        className: a.selectbox__option,
        onClick: n,
        onKeyDown: o,
        tabIndex: 0,
        role: "option",
        "aria-selected": "false",
        children: "Add new option"
      }
    ),
    t.map((s) => /* @__PURE__ */ c(H, { option: s }, s.value))
  ] }) : null;
}, Q = (e) => {
  const t = B(null);
  return q(() => {
    const n = (o) => {
      t.current && !t.current.contains(o.target) && e();
    };
    return document.addEventListener("click", n), () => {
      document.removeEventListener("click", n);
    };
  }, [e]), t;
}, U = ({ children: e, options: t, onAddNewItem: n }) => {
  const [o, s] = b(!1), [r, _] = b(""), [i, u] = b([]), x = Q(() => {
    s(!1);
  }), h = E(() => t.filter(
    (l) => l.label.toLowerCase().includes(r.toLowerCase()) || l.value.toLowerCase().includes(r.toLowerCase())
  ), [t, r]), C = () => s((l) => !l), N = (l) => {
    o || s(!0), _(l.target.value);
  }, K = (l) => {
    if (l.key === "Enter" && r) {
      const d = t.find((f) => f.value === r);
      d ? v(d) : y();
    }
  }, v = (l) => {
    if (i.includes(l.value)) {
      const d = i.filter((f) => f !== l.value);
      u(d);
    } else
      u([...i, l.value]);
    s(!1);
  }, y = () => {
    n({ value: r, label: r }), u([...i, r]), _(""), s(!1);
  }, L = (l) => {
    (l.key === "Enter" || l.key === " ") && (C(), l.preventDefault());
  };
  return /* @__PURE__ */ c(
    k.Provider,
    {
      value: {
        isOpen: o,
        searchValue: r,
        selectedOptions: i,
        options: t,
        filteredOptions: h,
        handleToggle: C,
        handleSearchChange: N,
        handleSearchInputKeyDown: K,
        handleOptionClick: v,
        handleAddNewItem: y,
        handleKeyDown: L
      },
      children: /* @__PURE__ */ c(
        "div",
        {
          className: a.selectbox__wrapper,
          ref: x,
          role: "combobox",
          "aria-expanded": o ? "true" : "false",
          "aria-haspopup": "listbox",
          "aria-owns": "selectbox__options",
          "aria-controls": "selectbox__options",
          children: e
        }
      )
    }
  );
}, X = () => {
  const { searchValue: e, handleToggle: t, handleSearchChange: n, handleKeyDown: o, handleSearchInputKeyDown: s, isOpen: r } = m();
  return /* @__PURE__ */ p(
    "div",
    {
      className: a.selectbox__trigger,
      onClick: t,
      role: "button",
      tabIndex: 0,
      "aria-expanded": r ? "true" : "false",
      onKeyDown: o,
      children: [
        /* @__PURE__ */ c(
          "input",
          {
            type: "text",
            value: e,
            placeholder: "Type something",
            className: a["selectbox__search-input"],
            onChange: n,
            onKeyDown: s,
            "aria-autocomplete": "none",
            "aria-controls": "selectbox__options"
          }
        ),
        /* @__PURE__ */ c(P, { className: a["selectbox__trigger-icon"], width: 20, height: 20 })
      ]
    }
  );
}, g = Object.freeze({
  Root: U,
  Trigger: X,
  Options: J
}), ee = ({ name: e, options: t, onAddNewItem: n }) => /* @__PURE__ */ p(g.Root, { name: e, options: t, onAddNewItem: n, children: [
  /* @__PURE__ */ c(g.Trigger, {}),
  /* @__PURE__ */ c(g.Options, {})
] });
export {
  ee as SelectBox
};
//# sourceMappingURL=lobox-selectbox.es.js.map
