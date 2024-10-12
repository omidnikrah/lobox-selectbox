import { jsxs as f, jsx as i } from "react/jsx-runtime";
import { createContext as q, useContext as E, forwardRef as k, createElement as m, useRef as R, useEffect as C, useState as h, useMemo as T } from "react";
const S = q(void 0), g = () => {
  const e = E(S);
  if (!e)
    throw new Error("SelectBox components must be used within a SelectBox.Root");
  return e;
};
function j(e) {
  var t, o, s = "";
  if (typeof e == "string" || typeof e == "number") s += e;
  else if (typeof e == "object") if (Array.isArray(e)) {
    var n = e.length;
    for (t = 0; t < n; t++) e[t] && (o = j(e[t])) && (s && (s += " "), s += o);
  } else for (o in e) e[o] && (s && (s += " "), s += o);
  return s;
}
function $() {
  for (var e, t, o = 0, s = "", n = arguments.length; o < n; o++) (e = arguments[o]) && (t = j(e)) && (s && (s += " "), s += t);
  return s;
}
/**
 * @license lucide-react v0.452.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const M = (e) => e.replace(/([a-z0-9])([A-Z])/g, "$1-$2").toLowerCase(), D = (...e) => e.filter((t, o, s) => !!t && s.indexOf(t) === o).join(" ");
/**
 * @license lucide-react v0.452.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
var P = {
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
const V = k(
  ({
    color: e = "currentColor",
    size: t = 24,
    strokeWidth: o = 2,
    absoluteStrokeWidth: s,
    className: n = "",
    children: l,
    iconNode: u,
    ...c
  }, p) => m(
    "svg",
    {
      ref: p,
      ...P,
      width: t,
      height: t,
      stroke: e,
      strokeWidth: s ? Number(o) * 24 / Number(t) : o,
      className: D("lucide", n),
      ...c
    },
    [
      ...u.map(([_, d]) => m(_, d)),
      ...Array.isArray(l) ? l : [l]
    ]
  )
);
/**
 * @license lucide-react v0.452.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const N = (e, t) => {
  const o = k(
    ({ className: s, ...n }, l) => m(V, {
      ref: l,
      iconNode: t,
      className: D(`lucide-${M(e)}`, s),
      ...n
    })
  );
  return o.displayName = `${e}`, o;
};
/**
 * @license lucide-react v0.452.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const W = N("Check", [["path", { d: "M20 6 9 17l-5-5", key: "1gmf2c" }]]);
/**
 * @license lucide-react v0.452.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const Z = N("ChevronDown", [
  ["path", { d: "m6 9 6 6 6-6", key: "qrunsl" }]
]), z = "_selectbox__wrapper_1fejq_1", G = "_selectbox__trigger_1fejq_9", H = "_selectbox__options_1fejq_45", J = "_selectbox__option_1fejq_45", a = {
  selectbox__wrapper: z,
  selectbox__trigger: G,
  "selectbox__search-input": "_selectbox__search-input_1fejq_19",
  "selectbox__trigger-icon": "_selectbox__trigger-icon_1fejq_31",
  selectbox__options: H,
  selectbox__option: J,
  "selectbox__option--selected": "_selectbox__option--selected_1fejq_68"
}, Q = ({ option: e }) => {
  const { selectedOptions: t, handleOptionClick: o, handleKeyDown: s } = g(), n = t.includes(e.value);
  return /* @__PURE__ */ f(
    "li",
    {
      className: $(a.selectbox__option, {
        [a["selectbox__option--selected"]]: n
      }),
      onClick: () => o(e),
      onKeyDown: s,
      tabIndex: 0,
      role: "option",
      "aria-selected": n ? "true" : "false",
      children: [
        e.label,
        n && /* @__PURE__ */ i(W, { width: 16, height: 16 })
      ]
    }
  );
}, U = () => {
  const { isOpen: e, filteredOptions: t, handleAddNewItem: o, handleKeyDown: s } = g();
  return e ? /* @__PURE__ */ f("ul", { className: a.selectbox__options, role: "listbox", "aria-multiselectable": "true", children: [
    !t.length && /* @__PURE__ */ i(
      "li",
      {
        className: a.selectbox__option,
        onClick: o,
        onKeyDown: s,
        tabIndex: 0,
        role: "option",
        "aria-selected": "false",
        children: "Add new option"
      }
    ),
    t.map((n) => /* @__PURE__ */ i(Q, { option: n }, n.value))
  ] }) : null;
}, X = (e) => {
  const t = R(null);
  return C(() => {
    const o = (s) => {
      t.current && !t.current.contains(s.target) && e();
    };
    return document.addEventListener("click", o), () => {
      document.removeEventListener("click", o);
    };
  }, [e]), t;
}, Y = ({ children: e, defaultValue: t, options: o, onAddNewItem: s, onChange: n }) => {
  const [l, u] = h(!1), [c, p] = h(""), [_, d] = h([]), I = X(() => {
    u(!1);
  });
  C(() => {
    t && d(t);
  }, [t]);
  const K = T(() => o.filter(
    (r) => r.label.toLowerCase().includes(c.toLowerCase()) || r.value.toLowerCase().includes(c.toLowerCase())
  ), [o, c]), v = () => u((r) => !r), L = (r) => {
    l || u(!0), p(r.target.value);
  }, A = (r) => {
    if (r.key === "Enter" && c) {
      const x = o.find((b) => b.value === c);
      x ? y(x) : O();
    }
  }, y = (r) => {
    if (_.includes(r.value)) {
      const x = _.filter((b) => b !== r.value);
      d(x);
    } else
      d([..._, r.value]);
    n == null || n(r), u(!1);
  }, O = () => {
    const r = { value: c, label: c };
    s(r), n == null || n(r), d([..._, c]), p(""), u(!1);
  }, B = (r) => {
    (r.key === "Enter" || r.key === " ") && (v(), r.preventDefault());
  };
  return /* @__PURE__ */ i(
    S.Provider,
    {
      value: {
        isOpen: l,
        searchValue: c,
        selectedOptions: _,
        options: o,
        filteredOptions: K,
        handleToggle: v,
        handleSearchChange: L,
        handleSearchInputKeyDown: A,
        handleOptionClick: y,
        handleAddNewItem: O,
        handleKeyDown: B
      },
      children: /* @__PURE__ */ i(
        "div",
        {
          className: a.selectbox__wrapper,
          ref: I,
          role: "combobox",
          "aria-expanded": l ? "true" : "false",
          "aria-haspopup": "listbox",
          "aria-owns": "selectbox__options",
          "aria-controls": "selectbox__options",
          children: e
        }
      )
    }
  );
}, F = () => {
  const { searchValue: e, handleToggle: t, handleSearchChange: o, handleKeyDown: s, handleSearchInputKeyDown: n, isOpen: l } = g();
  return /* @__PURE__ */ f(
    "div",
    {
      className: a.selectbox__trigger,
      onClick: t,
      role: "button",
      tabIndex: 0,
      "aria-expanded": l ? "true" : "false",
      onKeyDown: s,
      children: [
        /* @__PURE__ */ i(
          "input",
          {
            type: "text",
            value: e,
            placeholder: "Type something",
            className: a["selectbox__search-input"],
            onChange: o,
            onKeyDown: n,
            "aria-autocomplete": "none",
            "aria-controls": "selectbox__options"
          }
        ),
        /* @__PURE__ */ i(Z, { className: a["selectbox__trigger-icon"], width: 20, height: 20 })
      ]
    }
  );
}, w = Object.freeze({
  Root: Y,
  Trigger: F,
  Options: U
}), oe = ({ name: e, defaultValue: t, options: o, onAddNewItem: s, onChange: n }) => /* @__PURE__ */ f(
  w.Root,
  {
    name: e,
    defaultValue: t,
    options: o,
    onAddNewItem: s,
    onChange: n,
    children: [
      /* @__PURE__ */ i(w.Trigger, {}),
      /* @__PURE__ */ i(w.Options, {})
    ]
  }
);
export {
  oe as SelectBox
};
//# sourceMappingURL=lobox-selectbox.es.js.map
