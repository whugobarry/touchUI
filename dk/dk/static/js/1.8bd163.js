webpackJsonp([1],{

/***/ 175:
/***/ (function(module, exports, __webpack_require__) {

function injectStyle (ssrContext) {
  __webpack_require__(343)
  __webpack_require__(345)
}
var Component = __webpack_require__(86)(
  /* script */
  __webpack_require__(347),
  /* template */
  __webpack_require__(348),
  /* styles */
  injectStyle,
  /* scopeId */
  null,
  /* moduleIdentifier (server only) */
  null
)

module.exports = Component.exports


/***/ }),

/***/ 181:
/***/ (function(module, exports) {

module.exports = "data:image/svg+xml;base64,PHN2ZyB2aWV3Qm94PScwIDAgMTIwIDEyMCcgeG1sbnM9J2h0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnJyB4bWxuczp4bGluaz0naHR0cDovL3d3dy53My5vcmcvMTk5OS94bGluayc+PGRlZnM+PGxpbmUgaWQ9J2wnIHgxPSc2MCcgeDI9JzYwJyB5MT0nNycgeTI9JzI3JyBzdHJva2U9JyNkOGQ4ZDgnIHN0cm9rZS13aWR0aD0nMTEnIHN0cm9rZS1saW5lY2FwPSdyb3VuZCcvPjwvZGVmcz48Zz48dXNlIHhsaW5rOmhyZWY9JyNsJyBvcGFjaXR5PScuMjcnLz48dXNlIHhsaW5rOmhyZWY9JyNsJyBvcGFjaXR5PScuMjcnIHRyYW5zZm9ybT0ncm90YXRlKDMwIDYwLDYwKScvPjx1c2UgeGxpbms6aHJlZj0nI2wnIG9wYWNpdHk9Jy4yNycgdHJhbnNmb3JtPSdyb3RhdGUoNjAgNjAsNjApJy8+PHVzZSB4bGluazpocmVmPScjbCcgb3BhY2l0eT0nLjI3JyB0cmFuc2Zvcm09J3JvdGF0ZSg5MCA2MCw2MCknLz48dXNlIHhsaW5rOmhyZWY9JyNsJyBvcGFjaXR5PScuMjcnIHRyYW5zZm9ybT0ncm90YXRlKDEyMCA2MCw2MCknLz48dXNlIHhsaW5rOmhyZWY9JyNsJyBvcGFjaXR5PScuMjcnIHRyYW5zZm9ybT0ncm90YXRlKDE1MCA2MCw2MCknLz48dXNlIHhsaW5rOmhyZWY9JyNsJyBvcGFjaXR5PScuMzcnIHRyYW5zZm9ybT0ncm90YXRlKDE4MCA2MCw2MCknLz48dXNlIHhsaW5rOmhyZWY9JyNsJyBvcGFjaXR5PScuNDYnIHRyYW5zZm9ybT0ncm90YXRlKDIxMCA2MCw2MCknLz48dXNlIHhsaW5rOmhyZWY9JyNsJyBvcGFjaXR5PScuNTYnIHRyYW5zZm9ybT0ncm90YXRlKDI0MCA2MCw2MCknLz48dXNlIHhsaW5rOmhyZWY9JyNsJyBvcGFjaXR5PScuNjYnIHRyYW5zZm9ybT0ncm90YXRlKDI3MCA2MCw2MCknLz48dXNlIHhsaW5rOmhyZWY9JyNsJyBvcGFjaXR5PScuNzUnIHRyYW5zZm9ybT0ncm90YXRlKDMwMCA2MCw2MCknLz48dXNlIHhsaW5rOmhyZWY9JyNsJyBvcGFjaXR5PScuODUnIHRyYW5zZm9ybT0ncm90YXRlKDMzMCA2MCw2MCknLz48L2c+PC9zdmc+DQo="

/***/ }),

/***/ 182:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";

// EXTERNAL MODULE: ../touchui/dist/components/icon.js
var icon = __webpack_require__(55);

// CONCATENATED MODULE: ../touchui/dist/libs/mixin_find.js
var InterruptLookupComponents = ["UiSmsInput"];/* harmony default export */ var mixin_find = ({ methods: {
    findAncestor: function findAncestor(n, t) {
      if (t = t || this.$parent) {
        if (t.$options.name === n) return t;if (t.$parent) return this.findAncestor(n, t.$parent);
      }
    },
    findDescendants: function findDescendants(n, t) {
      var e = [];if (t = t || this.$children) for (var i = 0; i < t.length; i++) {
        n.indexOf(t[i].$options.name) > -1 && e.push(t[i]), t[i].$children && InterruptLookupComponents.indexOf(t[i].$options.name) < 0 && (e = e.concat(this.findDescendants(n, t[i].$children)));
      }return e;
    }
  } });
// CONCATENATED MODULE: ../touchui/dist/components/button.js
var index = { render: function render() {
    var t = this,
        i = t.$createElement,
        e = t._self._c || i;return e("button", { class: t.classes, attrs: { type: "button", "hover-class": t.hoverClass, disabled: t.disabled }, on: { touchstart: t.handleTouchStart, touchend: t.handleTouchEnd, tap: t.handleTap } }, [t.loading ? e("i", { staticClass: "ui-icon-loading" }) : t._e(), t._v(" "), t.icon && !t.loading ? e("icon", { attrs: { type: t.icon } }) : t._e(), t._v(" "), t.$slots.default ? e("span", [t.$slots.default ? t._t("default") : t._e()], 2) : t._e()], 1);
  }, staticRenderFns: [], name: "UiButton", mixins: [mixin_find], props: { size: { type: String, default: "default" }, type: { type: String, default: "default" }, disabled: Boolean, plain: Boolean, loading: Boolean, formType: String, icon: { type: String, default: "" }, hoverClass: { type: String }, hoverStartTime: { type: [Number, String], default: 20 }, hoverStayTime: { type: [Number, String], default: 70 }, hoverStopPropagation: { type: Boolean, default: !1 }, fullWidth: { type: Boolean, default: !0 } }, components: { Icon: icon["a" /* default */] }, data: function data() {
    return { isActive: !1, sto: null, selfHoverClass: "", stopPropagation: this.hoverStopPropagation };
  }, computed: { hover: function hover() {
      return this.hoverClass && "none" !== this.hoverClass;
    }, classes: function classes() {
      var t = ["ui-button"];return this.type && "default" !== this.type && t.push("ui-button-" + this.type), this.size && "default" !== this.size && t.push("ui-button-" + this.size), "none" !== this.hoverClass && this.hoverClass || t.push("no-hover-class"), t.push({ "is-disabled": this.disabled, "is-loading": this.loading, "is-plain": this.plain, "is-full-width": this.fullWidth }), t.push(this.selfHoverClass), t;
    } }, watch: { hoverStopPropagation: function hoverStopPropagation(t) {
      this.stopPropagation = t;
    } }, mounted: function mounted() {
    this.formType && (this.form = this.findAncestor("UiForm"));
  }, methods: { handleTouchStart: function handleTouchStart() {
      var t = this;this.hover && (this.isActive = !0, window.setTimeout(function () {
        t.isActive && (t.selfHoverClass = t.hoverClass);
      }, Number(this.hoverStartTime)));
    }, handleTouchEnd: function handleTouchEnd() {
      var t = this;this.hover && (this.isActive = !1, window.setTimeout(function () {
        t.selfHoverClass = "";
      }, Number(this.hoverStayTime)));
    }, handleTap: function handleTap(t) {
      this.disabled || (this.hoverStopPropagation && t.stopPropagation(), this.$emit("tap"), this.form && ("submit" === this.formType ? this.form.submitForm() : "reset" === this.formType && this.form.resetForm()));
    } } };/* harmony default export */ var components_button = __webpack_exports__["a"] = (index);

/***/ }),

/***/ 183:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
var rAF = window.requestAnimationFrame || window.webkitRequestAnimationFrame || window.mozRequestAnimationFrame || function (e) {
  window.setTimeout(e, 1e3 / 60);
};/* harmony default export */ __webpack_exports__["a"] = (rAF);

/***/ }),

/***/ 184:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";

// EXTERNAL MODULE: ../touchui/dist/libs/rAF.js
var rAF = __webpack_require__(183);

// EXTERNAL MODULE: ../touchui/dist/libs/dom.js
var dom = __webpack_require__(56);

// CONCATENATED MODULE: ../touchui/dist/libs/pageScrollForInput.js
var DEFAULT_OFFSET = 5;/* harmony default export */ var pageScrollForInput = (function (t) {
  var e = t.$el,
      o = t.page,
      i = o.$el,
      n = o.container,
      l = "UiVirtualInput" === t.$options.name,
      p = n === document.body;l && (p ? n.style.paddingBottom = ui.KEYBOARD_HEIGHT + "px" : n.style.bottom = ui.KEYBOARD_HEIGHT + "px");var d = void 0,
      g = Object(dom["a" /* getRect */])(e),
      u = l ? window.innerHeight - ui.KEYBOARD_HEIGHT : window.innerHeight,
      a = g.top,
      c = e.clientHeight,
      r = p ? Object(dom["c" /* getStyleValue */])(i, "paddingTop") : n.offsetTop,
      s = o.scrollPosition;a + c > u && (d = s + a - u + c + 5), a < r && (d = s - (r - a) - 5), void 0 !== d && o.scrollTo(d, 200);
});;
// CONCATENATED MODULE: ../touchui/dist/core/elements/input/androidInputScroll.js
/* harmony default export */ var androidInputScroll = __webpack_exports__["a"] = (function (r) {
  var e = 0,
      o = new Date(),
      l = function l() {
    var t = new Date();(e = ui.WIN_HEIGHT - window.innerHeight) < 200 && t - o < 1e3 ? Object(rAF["a" /* default */])(l) : (r.pageScrollByFocus = !1, pageScrollForInput(r));
  };l();
});;

/***/ }),

/***/ 186:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__components_icon__ = __webpack_require__(55);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__components_x_icon__ = __webpack_require__(57);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__libs_mixin_uuid__ = __webpack_require__(89);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__libs_mixin_page__ = __webpack_require__(90);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__core_elements_input_androidInputScroll__ = __webpack_require__(184);
var commonRegexes = { digit: /^(-?\d+)(\.\d+)?$/, chinese: /^[\u4e00-\u9fa5]{0,}$/, zipcode: /[1-9]\d{5}(?!\d)/, email: /^[\w-]+(\.[\w-]+)*@[\w-]+(\.[\w-]+)+$/, mobile: /^1[3|4|5|7|8][0-9]{9}$/ },
    commonValidators = { required: function required(e) {
    return "" !== e && void 0 !== e;
  }, minlength: function minlength(e, t) {
    var i = t.minlength;return e.length >= i;
  } },
    specialValidators = { idcard: function idcard(e) {
    var t,
        i,
        n,
        s = [7, 9, 10, 5, 8, 4, 2, 1, 6, 3, 7, 9, 10, 5, 8, 4, 2],
        a = function a(e, t, i) {
      var n, s, a, l;return n = (l = new Date(e, t - 1, i)).getFullYear(), s = l.getMonth() + 1, a = l.getDate(), e == n && t == s && i == a;
    };if (/^\d{15}$/.test(e)) return a(t = "19" + e.substr(6, 2), i = e.substr(8, 2), n = e.substr(10, 2));if (/^\d{17}\d|x$/i.test(e)) {
      for (var l, r = 0, o = 0; o < e.length - 1; o++) {
        r += parseInt(e.substr(o, 1), 10) * s[o];
      }return l = r % 11, t = e.substr(6, 4), i = e.substr(10, 2), n = e.substr(12, 2), [1, 0, "X", 9, 8, 7, 6, 5, 4, 3, 2][l] == e.substr(17, 1).toUpperCase() && a(t, i, n);
    }return !1;
  } },
    regexValidator = { regex: function regex(e, t) {
    return new RegExp(t).test(e);
  } },
    validator = { validate: function validate(e, t) {
    var i = t.name,
        n = t.required,
        s = t.minlength,
        a = t.regex;commonRegexes[i] && (a = a || commonRegexes[i]);var l = [];n && l.push({ type: "common", name: "required" }), s > 0 && l.push({ type: "common", name: "minlength", data: { minlength: s } }), specialValidators[i] && l.push({ type: "special", name: i }), a && l.push({ type: "regex", name: "regex", regex: a });for (var r = 0; r < l.length; r++) {
      var o = l[r];"common" === o.type ? o.valid = commonValidators[o.name].call(this, e, o.data) : "special" === o.type ? o.valid = specialValidators[o.name].call(this, e) : "regex" === o.type && (o.valid = regexValidator.regex(e, o.regex));
    }return l.map(function (e) {
      return e.valid;
    }).indexOf(!1) < 0;
  } },
    nativeInputMixin = { watch: { isFocus: function isFocus(e) {
      e ? (this.page && this.handleFocusScroll(), this.$emit("focus", this.$refs.input)) : (this.$emit("blur", this.$refs.input), this.page && this.handleBlurScroll());
    } }, methods: { handleFocus: function handleFocus() {
      this.isFocus = !0, this.page && (this.page.currentInput = this);
    }, handleBlur: function handleBlur(e) {
      var t = this;window.setTimeout(function () {
        t.repaintOnBlur && ui.__repaint(), t.clickClearIcon ? t.clickClearIcon = !1 : t.isFocus = !1;
      }, 200);
    }, handleFocusScroll: function handleFocusScroll() {
      this.pageScrollByFocus = !0, ui.IS_ANDROID && Object(__WEBPACK_IMPORTED_MODULE_4__core_elements_input_androidInputScroll__["a" /* default */])(this);
    }, handleBlurScroll: function handleBlurScroll() {} } },
    index = { render: function render() {
    var e = this,
        t = e.$createElement,
        i = e._self._c || t;return i("div", { class: ["ui-input", e.disabled ? "ui-input-disabled" : ""], attrs: { id: e.id } }, [e._t("left"), e._v(" "), i("input", { ref: "input", staticClass: "ui-input-inner", class: [e.placeholderClass], attrs: { pattern: e.pattern, type: e.selfType, placeholder: e.placeholder, maxlength: e.selfMaxLength, disabled: e.disabled }, domProps: { value: e.selfValue }, on: { input: function input(t) {
          e.selfValue = t.target.value;
        }, focus: e.handleFocus, blur: e.handleBlur } }), e._v(" "), e.showEyeIcon ? i("x-icon", { attrs: { type: e.passwordOn ? "show" : "hide" }, nativeOn: { click: function click(t) {
          e.handleViewPassword(t);
        } } }) : e._e(), e._v(" "), e.showClearIcon ? i("icon", { attrs: { mode: "wechat", type: "clear" }, nativeOn: { click: function click(t) {
          e.handleClearValue(t);
        } } }) : e._e(), e._v(" "), e._t("right")], 2);
  }, staticRenderFns: [], name: "UiInput", mixins: [__WEBPACK_IMPORTED_MODULE_2__libs_mixin_uuid__["a" /* default */], __WEBPACK_IMPORTED_MODULE_3__libs_mixin_page__["a" /* default */], nativeInputMixin], components: { Icon: __WEBPACK_IMPORTED_MODULE_0__components_icon__["a" /* default */], XIcon: __WEBPACK_IMPORTED_MODULE_1__components_x_icon__["a" /* default */] }, props: { name: String, value: [String, Number], type: { type: String, default: "text" }, placeholder: String, placeholderStyle: String, placeholderClass: { type: String, default: "input-placeholder" }, disabled: Boolean, required: Boolean, minlength: [String, Number], maxlength: { type: [Number, String], default: 140 }, focus: Boolean, cursor: Number, regex: String, enableValidation: { type: Boolean, default: !1 }, centered: Boolean, offsetTop: { type: [Number, String], default: 10 }, offsetBottom: { type: [Number, String], default: 10 }, showClear: { type: Boolean, default: !0 }, repaintOnBlur: Boolean }, computed: { showEyeIcon: function showEyeIcon() {
      return "password" === this.type && this.selfValue;
    }, showClearIcon: function showClearIcon() {
      return "password" !== this.type && this.showClear && this.selfValue && this.isFocus;
    }, showSuccessIcon: function showSuccessIcon() {
      return this.enableValidation && !this.customValidation && this.valid;
    }, showWarnIcon: function showWarnIcon() {
      return this.enableValidation && !this.customValidation && !1 === this.valid;
    }, selfMaxLength: function selfMaxLength() {
      return "mobile" === this.type ? 11 : "zipcode" === this.type ? 6 : this.maxlength > 0 ? this.maxlength : void 0;
    }, pattern: function pattern() {
      return "number" === this.selfType ? "[0-9]*" : null;
    } }, data: function data() {
    return { id: "", selfValue: this.value, valid: void 0, isFocus: !1, pageScrollByFocus: !1, clickClearIcon: !1, isFixedInput: !1, passwordOn: !1, selfType: "" };
  }, watch: { valid: function valid() {
      this.$emit("validate", this.valid);
    }, selfValue: function selfValue() {
      this.$emit("input", this.selfValue);
    }, value: function value() {
      this.selfValue = this.value;
    }, focus: function focus() {
      this.focus ? this.$refs.input.focus() : this.$refs.input.blur();
    } }, created: function created() {
    this.init();
  }, mounted: function mounted() {
    (this.isFixedInput = "UiFixedInput" === this.$parent.$options.name, this.placeholderStyle) && (document.head.appendChild(document.createElement("style")).innerHTML = "#" + this.id + " input::-webkit-input-placeholder{" + this.placeholderStyle + "}");
  }, methods: { init: function init() {
      this.id = "ui-input-" + this.uuid, this.initSelfType();
    }, initSelfType: function initSelfType() {
      ["tel", "number", "password", "search", "email"].indexOf(this.type) > -1 ? this.selfType = this.type : this.selfType = "text";
    }, validateValue: function validateValue(e) {
      this.valid = validator.validate(e, { name: this.type, required: this.required, minlength: this.minlength, maxlength: this.maxlength, regex: this.regex });
    }, handleClearValue: function handleClearValue() {
      this.clickClearIcon = !0, this.selfValue = "", this.isFocus = !0, this.$refs.input.focus();
    }, handleViewPassword: function handleViewPassword() {
      this.passwordOn = !this.passwordOn, this.selfType = "text", this.selfType = this.passwordOn ? "input" : "password";
    } } };/* harmony default export */ __webpack_exports__["a"] = (index);

/***/ }),

/***/ 187:
/***/ (function(module, exports) {

function formatTime (time) {
  if (typeof time !== 'number' || time < 0) {
    return time
  }

  var hour = parseInt(time / 3600)
  time = time % 3600
  var minute = parseInt(time / 60)
  time = time % 60
  var second = time

  return ([hour, minute, second]).map(function (n) {
    n = n.toString()
    return n[1] ? n : '0' + n
  }).join(':')
}

function formatLocation (longitude, latitude) {
  if (typeof longitude === 'string' && typeof latitude === 'string') {
    longitude = parseFloat(longitude)
    latitude = parseFloat(latitude)
  }

  longitude = longitude.toFixed(2)
  latitude = latitude.toFixed(2)

  return {
    longitude: longitude.toString().split('.'),
    latitude: latitude.toString().split('.')
  }
}

function wx (url,data=[]){
  console.log(data)
  return new Promise((resolve,reject) => {
    ui.request({
      url:'https://server.agamchain.com/api'+url,
      header:{
        "Content-Type":"application/json"
      },
      data:data,
      method:'post',
      success(res){
        resolve(res.data)
      },
      fail(res){
        reject(res)
      }
    })
  })
}
var params = query();
function query() {
  var url = window.location.href;
  console.log(url)
}

module.exports = {
  formatTime: formatTime,
  formatLocation: formatLocation,
  wx:wx,
  $_GET:params
}


/***/ }),

/***/ 190:
/***/ (function(module, exports) {

/* globals __VUE_SSR_CONTEXT__ */

// IMPORTANT: Do NOT use ES2015 features in this file.
// This module is a runtime utility for cleaner component module output and will
// be included in the final webpack user bundle.

module.exports = function normalizeComponent (
  rawScriptExports,
  compiledTemplate,
  functionalTemplate,
  injectStyles,
  scopeId,
  moduleIdentifier /* server only */
) {
  var esModule
  var scriptExports = rawScriptExports = rawScriptExports || {}

  // ES6 modules interop
  var type = typeof rawScriptExports.default
  if (type === 'object' || type === 'function') {
    esModule = rawScriptExports
    scriptExports = rawScriptExports.default
  }

  // Vue.extend constructor export interop
  var options = typeof scriptExports === 'function'
    ? scriptExports.options
    : scriptExports

  // render functions
  if (compiledTemplate) {
    options.render = compiledTemplate.render
    options.staticRenderFns = compiledTemplate.staticRenderFns
    options._compiled = true
  }

  // functional template
  if (functionalTemplate) {
    options.functional = true
  }

  // scopedId
  if (scopeId) {
    options._scopeId = scopeId
  }

  var hook
  if (moduleIdentifier) { // server build
    hook = function (context) {
      // 2.3 injection
      context =
        context || // cached call
        (this.$vnode && this.$vnode.ssrContext) || // stateful
        (this.parent && this.parent.$vnode && this.parent.$vnode.ssrContext) // functional
      // 2.2 with runInNewContext: true
      if (!context && typeof __VUE_SSR_CONTEXT__ !== 'undefined') {
        context = __VUE_SSR_CONTEXT__
      }
      // inject component styles
      if (injectStyles) {
        injectStyles.call(this, context)
      }
      // register component module identifier for async chunk inferrence
      if (context && context._registeredComponents) {
        context._registeredComponents.add(moduleIdentifier)
      }
    }
    // used by ssr in case component is cached and beforeCreate
    // never gets called
    options._ssrRegister = hook
  } else if (injectStyles) {
    hook = injectStyles
  }

  if (hook) {
    var functional = options.functional
    var existing = functional
      ? options.render
      : options.beforeCreate

    if (!functional) {
      // inject component registration as beforeCreate hook
      options.beforeCreate = existing
        ? [].concat(existing, hook)
        : [hook]
    } else {
      // for template-only hot-reload because in that case the render fn doesn't
      // go through the normalizer
      options._injectStyles = hook
      // register for functioal component in vue file
      options.render = function renderWithStyleInjection (h, context) {
        hook.call(context)
        return existing(h, context)
      }
    }
  }

  return {
    esModule: esModule,
    exports: scriptExports,
    options: options
  }
}


/***/ }),

/***/ 196:
/***/ (function(module, exports) {

module.exports = "data:image/svg+xml;base64,PHN2ZyB2aWV3Qm94PScwIDAgMTIwIDEyMCcgeG1sbnM9J2h0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnJyB4bWxuczp4bGluaz0naHR0cDovL3d3dy53My5vcmcvMTk5OS94bGluayc+PGRlZnM+PGxpbmUgaWQ9J2wnIHgxPSc2MCcgeDI9JzYwJyB5MT0nNycgeTI9JzI3JyBzdHJva2U9JyM2YzZjNmMnIHN0cm9rZS13aWR0aD0nMTEnIHN0cm9rZS1saW5lY2FwPSdyb3VuZCcvPjwvZGVmcz48Zz48dXNlIHhsaW5rOmhyZWY9JyNsJyBvcGFjaXR5PScuMjcnLz48dXNlIHhsaW5rOmhyZWY9JyNsJyBvcGFjaXR5PScuMjcnIHRyYW5zZm9ybT0ncm90YXRlKDMwIDYwLDYwKScvPjx1c2UgeGxpbms6aHJlZj0nI2wnIG9wYWNpdHk9Jy4yNycgdHJhbnNmb3JtPSdyb3RhdGUoNjAgNjAsNjApJy8+PHVzZSB4bGluazpocmVmPScjbCcgb3BhY2l0eT0nLjI3JyB0cmFuc2Zvcm09J3JvdGF0ZSg5MCA2MCw2MCknLz48dXNlIHhsaW5rOmhyZWY9JyNsJyBvcGFjaXR5PScuMjcnIHRyYW5zZm9ybT0ncm90YXRlKDEyMCA2MCw2MCknLz48dXNlIHhsaW5rOmhyZWY9JyNsJyBvcGFjaXR5PScuMjcnIHRyYW5zZm9ybT0ncm90YXRlKDE1MCA2MCw2MCknLz48dXNlIHhsaW5rOmhyZWY9JyNsJyBvcGFjaXR5PScuMzcnIHRyYW5zZm9ybT0ncm90YXRlKDE4MCA2MCw2MCknLz48dXNlIHhsaW5rOmhyZWY9JyNsJyBvcGFjaXR5PScuNDYnIHRyYW5zZm9ybT0ncm90YXRlKDIxMCA2MCw2MCknLz48dXNlIHhsaW5rOmhyZWY9JyNsJyBvcGFjaXR5PScuNTYnIHRyYW5zZm9ybT0ncm90YXRlKDI0MCA2MCw2MCknLz48dXNlIHhsaW5rOmhyZWY9JyNsJyBvcGFjaXR5PScuNjYnIHRyYW5zZm9ybT0ncm90YXRlKDI3MCA2MCw2MCknLz48dXNlIHhsaW5rOmhyZWY9JyNsJyBvcGFjaXR5PScuNzUnIHRyYW5zZm9ybT0ncm90YXRlKDMwMCA2MCw2MCknLz48dXNlIHhsaW5rOmhyZWY9JyNsJyBvcGFjaXR5PScuODUnIHRyYW5zZm9ybT0ncm90YXRlKDMzMCA2MCw2MCknLz48L2c+PC9zdmc+DQo="

/***/ }),

/***/ 197:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";

// EXTERNAL MODULE: ../babel-runtime/core-js/promise.js
var core_js_promise = __webpack_require__(59);
var promise_default = /*#__PURE__*/__webpack_require__.n(core_js_promise);

// EXTERNAL MODULE: ../babel-runtime/core-js/array/from.js
var from = __webpack_require__(7);
var from_default = /*#__PURE__*/__webpack_require__.n(from);

// EXTERNAL MODULE: ../babel-runtime/core-js/object/keys.js
var keys = __webpack_require__(11);
var keys_default = /*#__PURE__*/__webpack_require__.n(keys);

// EXTERNAL MODULE: ../babel-runtime/core-js/object/assign.js
var object_assign = __webpack_require__(10);
var assign_default = /*#__PURE__*/__webpack_require__.n(object_assign);

// EXTERNAL MODULE: ../touchui/dist/components/transfer-dom.js
var transfer_dom = __webpack_require__(34);

// CONCATENATED MODULE: ../touchui/dist/components/spinner.js
for (var lastTime = 0, vendors = ["webkit", "moz"], x = 0; x < vendors.length && !window.requestAnimationFrame; ++x) {
  window.requestAnimationFrame = window[vendors[x] + "RequestAnimationFrame"], window.cancelAnimationFrame = window[vendors[x] + "CancelAnimationFrame"] || window[vendors[x] + "CancelRequestAnimationFrame"];
}window.requestAnimationFrame || (window.requestAnimationFrame = function (t, n) {
  var e = new Date().getTime(),
      i = Math.max(0, 16 - (e - lastTime)),
      r = window.setTimeout(function () {
    t(e + i);
  }, i);return lastTime = e + i, r;
}), window.cancelAnimationFrame || (window.cancelAnimationFrame = function (t) {
  clearTimeout(t);
});var TRANSLATE32 = "translate(32,32)",
    STROKE_OPACITY = "stroke-opacity",
    ROUND = "round",
    INDEFINITE = "indefinite",
    DURATION = "750ms",
    NONE = "none",
    SHORTCUTS = { a: "animate", an: "attributeName", at: "animateTransform", c: "circle", da: "stroke-dasharray", os: "stroke-dashoffset", f: "fill", lc: "stroke-linecap", rc: "repeatCount", sw: "stroke-width", t: "transform", v: "values" },
    SPIN_ANIMATION = { v: "0,32,32;360,32,32", an: "transform", type: "rotate", rc: INDEFINITE, dur: DURATION };function createSvgElement(t, n, e, i, r) {
  var a,
      s,
      o,
      c = document.createElement(SHORTCUTS[t] || t);for (a in n) {
    if ("[object Array]" === Object.prototype.toString.call(n[a])) for (s = 0; s < n[a].length; s++) {
      if (n[a][s].fn) for (o = 0; o < n[a][s].t; o++) {
        createSvgElement(a, n[a][s].fn(o, i), c, i);
      } else createSvgElement(a, n[a][s], c, i);
    } else setSvgAttribute(c, a, n[a]);
  }r && "28px" !== r && setSvgAttribute(c, "style", "width: " + r + "; height: " + r), e.appendChild(c);
}function setSvgAttribute(t, n, e) {
  t.setAttribute(SHORTCUTS[n] || n, e);
}function animationValues(t, n) {
  var e = t.split(";"),
      i = e.slice(n),
      r = e.slice(0, e.length - i.length);return (e = i.concat(r).reverse()).join(";") + ";" + e[0];
}var IOS_SPINNER = { sw: 4, lc: ROUND, line: [{ fn: function fn(t, n) {
      return { y1: "ios" === n ? 17 : 12, y2: "ios" === n ? 29 : 20, t: TRANSLATE32 + " rotate(" + (30 * t + (t < 6 ? 180 : -180)) + ")", a: [{ fn: function fn() {
            return { an: STROKE_OPACITY, dur: DURATION, v: animationValues("0;.1;.15;.25;.35;.45;.55;.65;.7;.85;1", t), rc: INDEFINITE };
          }, t: 1 }] };
    }, t: 12 }] },
    spinners = { android: { c: [{ sw: 6, da: 128, os: 82, r: 26, cx: 32, cy: 32, f: NONE }] }, ios: IOS_SPINNER, "ios-small": IOS_SPINNER, bubbles: { sw: 0, c: [{ fn: function fn(t) {
        return { cx: 24 * Math.cos(2 * Math.PI * t / 8), cy: 24 * Math.sin(2 * Math.PI * t / 8), t: TRANSLATE32, a: [{ fn: function fn() {
              return { an: "r", dur: DURATION, v: animationValues("1;2;3;4;5;6;7;8", t), rc: INDEFINITE };
            }, t: 1 }] };
      }, t: 8 }] }, circles: { c: [{ fn: function fn(t) {
        return { r: 5, cx: 24 * Math.cos(2 * Math.PI * t / 8), cy: 24 * Math.sin(2 * Math.PI * t / 8), t: TRANSLATE32, sw: 0, a: [{ fn: function fn() {
              return { an: "fill-opacity", dur: DURATION, v: animationValues(".3;.3;.3;.4;.7;.85;.9;1", t), rc: INDEFINITE };
            }, t: 1 }] };
      }, t: 8 }] }, crescent: { c: [{ sw: 4, da: 128, os: 82, r: 26, cx: 32, cy: 32, f: NONE, at: [SPIN_ANIMATION] }] }, dots: { c: [{ fn: function fn(t) {
        return { cx: 16 + 16 * t, cy: 32, sw: 0, a: [{ fn: function fn() {
              return { an: "fill-opacity", dur: DURATION, v: animationValues(".5;.6;.8;1;.8;.6;.5", t), rc: INDEFINITE };
            }, t: 1 }, { fn: function fn() {
              return { an: "r", dur: DURATION, v: animationValues("4;5;6;5;4;3;3", t), rc: INDEFINITE };
            }, t: 1 }] };
      }, t: 3 }] }, lines: { sw: 7, lc: ROUND, line: [{ fn: function fn(t) {
        return { x1: 10 + 14 * t, x2: 10 + 14 * t, a: [{ fn: function fn() {
              return { an: "y1", dur: DURATION, v: animationValues("16;18;28;18;16", t), rc: INDEFINITE };
            }, t: 1 }, { fn: function fn() {
              return { an: "y2", dur: DURATION, v: animationValues("48;44;36;46;48", t), rc: INDEFINITE };
            }, t: 1 }, { fn: function fn() {
              return { an: STROKE_OPACITY, dur: DURATION, v: animationValues("1;.8;.5;.4;1", t), rc: INDEFINITE };
            }, t: 1 }] };
      }, t: 4 }] }, ripple: { f: NONE, "fill-rule": "evenodd", sw: 3, circle: [{ fn: function fn(t) {
        return { cx: 32, cy: 32, a: [{ fn: function fn() {
              return { an: "r", begin: -1 * t + "s", dur: "2s", v: "0;24", keyTimes: "0;1", keySplines: "0.1,0.2,0.3,1", calcMode: "spline", rc: INDEFINITE };
            }, t: 1 }, { fn: function fn() {
              return { an: STROKE_OPACITY, begin: -1 * t + "s", dur: "2s", v: ".2;1;.2;0", rc: INDEFINITE };
            }, t: 1 }] };
      }, t: 2 }] }, spiral: { defs: [{ linearGradient: [{ id: "sGD", gradientUnits: "userSpaceOnUse", x1: 55, y1: 46, x2: 2, y2: 46, stop: [{ offset: .1, class: "stop1" }, { offset: 1, class: "stop2" }] }] }], g: [{ sw: 4, lc: ROUND, f: NONE, path: [{ stroke: "url(#sGD)", d: "M4,32 c0,15,12,28,28,28c8,0,16-4,21-9" }, { d: "M60,32 C60,16,47.464,4,32,4S4,16,4,32" }], at: [SPIN_ANIMATION] }] } },
    animations = { android: function android(t) {
    var n = this;this.stop = !1;var e,
        i = 0,
        r = 0,
        a = t.querySelector("g"),
        s = t.querySelector("circle");function o() {
      if (!n.stop) {
        var t = easeInOutCubic(Date.now() - e, 650),
            c = 1,
            u = 0,
            l = 188 - 58 * t,
            f = 182 - 182 * t;i % 2 && (c = -1, u = -64, l = 128 - -58 * t, f = 182 * t);var I = [0, -101, -90, -11, -180, 79, -270, -191][i];setSvgAttribute(s, "da", Math.max(Math.min(l, 188), 128)), setSvgAttribute(s, "os", Math.max(Math.min(f, 182), 0)), setSvgAttribute(s, "t", "scale(" + c + ",1) translate(" + u + ",0) rotate(" + I + ",32,32)"), (r += 4.1) > 359 && (r = 0), setSvgAttribute(a, "t", "rotate(" + r + ",32,32)"), t >= 1 && (++i > 7 && (i = 0), e = Date.now()), window.requestAnimationFrame(o);
      }
    }return function () {
      return e = Date.now(), o(), n;
    };
  } };function easeInOutCubic(t, n) {
  return (t /= n / 2) < 1 ? .5 * t * t * t : .5 * ((t -= 2) * t * t + 2);
}var Spinner = function Spinner(t, n, e) {
  var i;i = n;var r = document.createElement("div");return createSvgElement("svg", { viewBox: "0 0 64 64", g: [spinners[i]] }, r, i, e), t.innerHTML = r.innerHTML, animations[i] && animations[i](t)(), t;
},
    types = ["android", "ios", "ios-small", "bubbles", "circles", "crescent", "dots", "lines", "ripple", "spiral"],
    index = { render: function render() {
    var t = this.$createElement;return (this._self._c || t)("span", { staticClass: "ui-spinner", class: this.className, style: this.styles });
  }, staticRenderFns: [], name: "UiSpinner", mounted: function mounted() {
    var t = this;this.$nextTick(function () {
      Spinner(t.$el, t.type, t.size);
    });
  }, props: { type: { type: String, default: "ios" }, size: String }, computed: { styles: function styles() {
      if (void 0 !== this.size && "28px" !== this.size) return { width: this.size, height: this.size };
    }, className: function className() {
      for (var t = {}, n = 0; n < types.length; n++) {
        t["ui-spinner-" + types[n]] = this.type === types[n];
      }return t;
    } } };/* harmony default export */ var spinner = (index);
// CONCATENATED MODULE: ../babel-loader/lib!../vue-loader/lib/selector.js?type=script&index=0!../touchui/dist/core/elements/pull/material-pull-hook.vue
//
//
//
//
//
//
//
//
//
//
//
//
//
//

var CLASS_MAP = {
  'pull-down': 'pull-down-content',
  'pull-up': 'pull-up-content'

  /**
   * material-pull-hook组件只负责处理svg动画，该元素的transform则由Pull类处理
   */
};/* harmony default export */ var material_pull_hook = ({
  props: {
    state: {
      type: Number
    },
    translate: {
      type: Number
    },
    type: String
  },
  computed: {
    classes: function classes() {
      return CLASS_MAP[this.type];
    }
  },
  data: function data() {
    return {
      turn: null,
      svg: null,
      background: null,
      primary: null,
      secondary: null,
      selfTranslate: 0
    };
  },
  mounted: function mounted() {
    this.turn = this.$el.querySelector('.material-progress-circular');
    this.svg = this.$el.querySelector('.progress-circular');
    this.background = this.$el.querySelector('.progress-circular__background');
    this.primary = this.$el.querySelector('.progress-circular__primary');
    this.secondary = this.$el.querySelector('.progress-circular__secondary');
  },

  watch: {
    state: function state() {
      this.handleProgress();
    },
    translate: function translate(val) {
      this.handleProgress();
    }
  },
  methods: {
    handleProgress: function handleProgress() {
      if (this.state === 1 || this.state === 2) {
        this.$el.style.webkitTransition = 'none';
        var rate = Math.abs(this.translate) / 84;
        var dash = Math.floor(rate * 252);
        this.turn.style.transform = 'rotate(' + rate + 'turn)';

        if (dash >= 252) {
          dash = 252;
        }

        this.primary.style.strokeDasharray = dash + '%, 251.32%';
        this.primary.style.webkitTransition = 'none';
      } else if (this.state === 3 || this.state === 4) {
        this.turn.style.tranform = 'rotate(1turn)';
      } else {
        this.primary.style.strokeDasharray = '0%, 251.32%';
      }
    }
  }
});
// CONCATENATED MODULE: ../babel-loader/lib!../touchui-pre-loader/src/script-loader.js!../vue-loader/lib/selector.js?type=script&index=0!../touchui/dist/core/elements/pull/material-pull-hook.vue
//
//
//
//
//
//
//
//
//
//
//
//
//
//

var material_pull_hook_CLASS_MAP = {
  'pull-down': 'pull-down-content',
  'pull-up': 'pull-up-content'

  /**
   * material-pull-hook组件只负责处理svg动画，该元素的transform则由Pull类处理
   */
};/* harmony default export */ var pull_material_pull_hook = ({
  props: {
    state: {
      type: Number
    },
    translate: {
      type: Number
    },
    type: String
  },
  computed: {
    classes: function classes() {
      return material_pull_hook_CLASS_MAP[this.type];
    }
  },
  data: function data() {
    return {
      turn: null,
      svg: null,
      background: null,
      primary: null,
      secondary: null,
      selfTranslate: 0
    };
  },
  mounted: function mounted() {
    this.turn = this.$el.querySelector('.material-progress-circular');
    this.svg = this.$el.querySelector('.progress-circular');
    this.background = this.$el.querySelector('.progress-circular__background');
    this.primary = this.$el.querySelector('.progress-circular__primary');
    this.secondary = this.$el.querySelector('.progress-circular__secondary');
  },

  watch: {
    state: function state() {
      this.handleProgress();
    },
    translate: function translate(val) {
      this.handleProgress();
    }
  },
  methods: {
    handleProgress: function handleProgress() {
      if (this.state === 1 || this.state === 2) {
        this.$el.style.webkitTransition = 'none';
        var rate = Math.abs(this.translate) / 84;
        var dash = Math.floor(rate * 252);
        this.turn.style.transform = 'rotate(' + rate + 'turn)';

        if (dash >= 252) {
          dash = 252;
        }

        this.primary.style.strokeDasharray = dash + '%, 251.32%';
        this.primary.style.webkitTransition = 'none';
      } else if (this.state === 3 || this.state === 4) {
        this.turn.style.tranform = 'rotate(1turn)';
      } else {
        this.primary.style.strokeDasharray = '0%, 251.32%';
      }
    }
  }
});
// CONCATENATED MODULE: ../vue-loader/lib/template-compiler?{"id":"data-v-762e9f62","hasScoped":false,"transformToRequire":{"video":"src","source":"src","img":"src","image":"xlink:href"},"buble":{"transforms":{}}}!../touchui-pre-loader/src/before-template-compiler-loader.js!../touchui-pre-loader/src/template-loader.js!../vue-loader/lib/selector.js?type=template&index=0!../touchui/dist/core/elements/pull/material-pull-hook.vue
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{staticClass:"material-pull-hook",class:_vm.classes},[_c('div',{staticClass:"pull-hook-progress"},[_c('div',{staticClass:"material-progress-circular"},[_c('svg',{staticClass:"progress-circular",class:{ 'progress-circular--indeterminate': _vm.state >= 3}},[_c('circle',{staticClass:"progress-circular__background",class:{ 'progress-circular--indeterminate__background': _vm.state >= 3}}),_vm._v(" "),_c('circle',{staticClass:"progress-circular__secondary",class:{ 'progress-circular--indeterminate__secondary': _vm.state >= 3},staticStyle:{"display":"none"}}),_vm._v(" "),_c('circle',{staticClass:"progress-circular__primary",class:{ 'progress-circular--indeterminate__primary': _vm.state >= 3}})])])])])}
var staticRenderFns = []
var esExports = { render: render, staticRenderFns: staticRenderFns }
/* harmony default export */ var elements_pull_material_pull_hook = (esExports);
// CONCATENATED MODULE: ../touchui/dist/core/elements/pull/material-pull-hook.vue
var normalizeComponent = __webpack_require__(190)
/* script */


/* template */

/* template functional */
var __vue_template_functional__ = false
/* styles */
var __vue_styles__ = null
/* scopeId */
var __vue_scopeId__ = null
/* moduleIdentifier (server only) */
var __vue_module_identifier__ = null
var Component = normalizeComponent(
  pull_material_pull_hook,
  elements_pull_material_pull_hook,
  __vue_template_functional__,
  __vue_styles__,
  __vue_scopeId__,
  __vue_module_identifier__
)

/* harmony default export */ var core_elements_pull_material_pull_hook = (Component.exports);

// CONCATENATED MODULE: ../babel-loader/lib!../vue-loader/lib/selector.js?type=script&index=0!../touchui/dist/core/elements/pull/pull-hook.vue
//
//
//
//
//
//
//
//
//
//
//
//


var PullText = {
  'pull-down': {
    1: 'ui.pulldownrefresh.pull',
    2: 'ui.pulldownrefresh.release',
    3: 'ui.pulldownrefresh.refreshing',
    4: 'ui.pulldownrefresh.success',
    5: 'ui.pulldownrefresh.cancel'
  },
  'pull-up': {
    0: 'ui.pullupload.pull_load_more',
    1: 'ui.pullupload.pull',
    2: 'ui.pullupload.release',
    3: 'ui.pullupload.refreshing',
    4: 'ui.pullupload.success',
    5: 'ui.pullupload.cancel'
  }
};

var PullIcon = {
  'pull-down': {
    1: 'arrow down',
    2: 'arrow up',
    3: 'loading',
    4: 'none'
  },
  'pull-up': {
    1: 'arrow up',
    2: 'arrow down',
    3: 'loading',
    4: 'none'
  }
};



/* harmony default export */ var pull_hook = ({
  props: {
    type: {
      type: String,
      default: 'pull-down'
    },
    state: {
      type: Number,
      default: 0
    },
    translate: {
      type: Number,
      default: 0
    },
    pullStyle: {
      type: String,
      default: 'ios'
    }
  },
  components: {
    MaterialPullHook: core_elements_pull_material_pull_hook
  },
  computed: {
    text: function text() {
      return this.$t(PullText[this.type][this.state]);
    },
    contentClasses: function contentClasses() {
      return [this.type + '-content'];
    },
    iconClasses: function iconClasses() {
      return [this.type + '-icon', PullIcon[this.type][this.state]];
    }
  }
});
// CONCATENATED MODULE: ../babel-loader/lib!../touchui-pre-loader/src/script-loader.js!../vue-loader/lib/selector.js?type=script&index=0!../touchui/dist/core/elements/pull/pull-hook.vue
//
//
//
//
//
//
//
//
//
//
//
//


var pull_hook_PullText = {
  'pull-down': {
    1: 'ui.pulldownrefresh.pull',
    2: 'ui.pulldownrefresh.release',
    3: 'ui.pulldownrefresh.refreshing',
    4: 'ui.pulldownrefresh.success',
    5: 'ui.pulldownrefresh.cancel'
  },
  'pull-up': {
    0: 'ui.pullupload.pull_load_more',
    1: 'ui.pullupload.pull',
    2: 'ui.pullupload.release',
    3: 'ui.pullupload.refreshing',
    4: 'ui.pullupload.success',
    5: 'ui.pullupload.cancel'
  }
};

var pull_hook_PullIcon = {
  'pull-down': {
    1: 'arrow down',
    2: 'arrow up',
    3: 'loading',
    4: 'none'
  },
  'pull-up': {
    1: 'arrow up',
    2: 'arrow down',
    3: 'loading',
    4: 'none'
  }
};



/* harmony default export */ var pull_pull_hook = ({
  props: {
    type: {
      type: String,
      default: 'pull-down'
    },
    state: {
      type: Number,
      default: 0
    },
    translate: {
      type: Number,
      default: 0
    },
    pullStyle: {
      type: String,
      default: 'ios'
    }
  },
  components: {
    MaterialPullHook: core_elements_pull_material_pull_hook
  },
  computed: {
    text: function text() {
      return this.$t(pull_hook_PullText[this.type][this.state]);
    },
    contentClasses: function contentClasses() {
      return [this.type + '-content'];
    },
    iconClasses: function iconClasses() {
      return [this.type + '-icon', pull_hook_PullIcon[this.type][this.state]];
    }
  }
});
// CONCATENATED MODULE: ../vue-loader/lib/template-compiler?{"id":"data-v-732b728c","hasScoped":false,"transformToRequire":{"video":"src","source":"src","img":"src","image":"xlink:href"},"buble":{"transforms":{}}}!../touchui-pre-loader/src/before-template-compiler-loader.js!../touchui-pre-loader/src/template-loader.js!../vue-loader/lib/selector.js?type=template&index=0!../touchui/dist/core/elements/pull/pull-hook.vue
var pull_hook_render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return (_vm.pullStyle === 'ios')?_c('div',{class:_vm.contentClasses},[_c('div',{class:_vm.iconClasses}),_vm._v(" "),_c('span',[_vm._v(_vm._s(_vm.text))])]):_c('material-pull-hook',{attrs:{"state":_vm.state,"translate":_vm.translate,"type":_vm.type}})}
var pull_hook_staticRenderFns = []
var pull_hook_esExports = { render: pull_hook_render, staticRenderFns: pull_hook_staticRenderFns }
/* harmony default export */ var elements_pull_pull_hook = (pull_hook_esExports);
// CONCATENATED MODULE: ../touchui/dist/core/elements/pull/pull-hook.vue
var pull_hook_normalizeComponent = __webpack_require__(190)
/* script */


/* template */

/* template functional */
var pull_hook___vue_template_functional__ = false
/* styles */
var pull_hook___vue_styles__ = null
/* scopeId */
var pull_hook___vue_scopeId__ = null
/* moduleIdentifier (server only) */
var pull_hook___vue_module_identifier__ = null
var pull_hook_Component = pull_hook_normalizeComponent(
  pull_pull_hook,
  elements_pull_pull_hook,
  pull_hook___vue_template_functional__,
  pull_hook___vue_styles__,
  pull_hook___vue_scopeId__,
  pull_hook___vue_module_identifier__
)

/* harmony default export */ var core_elements_pull_pull_hook = (pull_hook_Component.exports);

// EXTERNAL MODULE: ../babel-runtime/helpers/classCallCheck.js
var classCallCheck = __webpack_require__(35);
var classCallCheck_default = /*#__PURE__*/__webpack_require__.n(classCallCheck);

// EXTERNAL MODULE: ../babel-runtime/helpers/createClass.js
var createClass = __webpack_require__(58);
var createClass_default = /*#__PURE__*/__webpack_require__.n(createClass);

// EXTERNAL MODULE: ../touchui/dist/libs/util.js
var util = __webpack_require__(16);

// CONCATENATED MODULE: ../touchui/dist/core/elements/pull/index.js


var PULL_STATE = { UNSET: 0, BEGIN: 1, PREPARE: 2, PROCESS: 3, FINISH: 4, CANCEL: 5 },
    PULL_DIRECTION = { UNSET: 0, DOWN: 1, LEFT: 2, UP: 3, RIGHT: 4 },
    pull_util = {
  getBoundary: function getBoundary(t, e) {
    if (e) {
      var _e = t.scrollTop,
          i = t.clientHeight,
          s = t.scrollHeight;
      if (t === document.body) {
        if (0 === (_e = document.documentElement.scrollTop || document.body.scrollTop)) return "down";if (_e + window.innerHeight === i) return "up";
      } else {
        if (0 === _e) return "down";if (_e + i === s) return "up";
      }
    } else {
      var _e2 = t.scrollLeft,
          _i = t.clientWidth,
          _s = t.scrollWidth;
      if (0 === _e2) return "right";if (_e2 + _i === _s) return "left";
    }
  },
  getDirection: function getDirection(_ref) {
    var t = _ref.vertical,
        e = _ref.p1,
        i = _ref.p2;
    return t ? i.y - e.y > 0 ? PULL_DIRECTION.DOWN : PULL_DIRECTION.UP : i.x - e.x > 0 ? PULL_DIRECTION.RIGHT : PULL_DIRECTION.LEFT;
  }, getAngle: function getAngle(t, e) {
    return 180 * Math.atan2(Math.abs(e.y - t.y), Math.abs(e.x - t.x)) / Math.PI;
  }, calPercentage: function calPercentage(_ref2) {
    var t = _ref2.el,
        e = _ref2.vertical,
        i = _ref2.p1,
        s = _ref2.p2;
    return e ? t === document.body ? (s.y - i.y) / window.innerHeight : (s.y - i.y) / Math.min(t.clientHeight, window.innerHeight) : (s.x - i.x) / t.clientWidth;
  } },
    MOVE_COUNT = 200,
    TARGET_DIRECTION_MAP = { down: "pullDown", up: "pullUp", right: "pullRight", left: "pullLeft" },
    DIRECTION_BOUNDARY_MAP = { down: PULL_DIRECTION.DOWN, up: PULL_DIRECTION.UP, left: PULL_DIRECTION.LEFT, right: PULL_DIRECTION.RIGHT };
var pull_Pull = function () {
  function Pull(t) {
    var _this = this;

    classCallCheck_default()(this, Pull);

    if (this.options = t, this.outerEl = t.outerEl, this.innerEl = t.innerEl, this.isDragging = !1, (t.pullDown || t.pullUp) && (this.vertical = !0), this.vertical) {
      if (t.pullDown) {
        var e = t.pullDown.disableContentMove;e && e.indexOf(t.pullDown.scene) > -1 ? (this.innerEl.addEventListener("drag", function (t) {
          return _this.drag(t);
        }), this.innerEl.addEventListener("dragend", function (t) {
          return _this.dragend(t);
        })) : (this.innerEl.addEventListener("touchstart", function (t) {
          return _this.touchStart(t);
        }), this.innerEl.addEventListener("touchmove", function (t) {
          return _this.touchMove(t);
        }), this.innerEl.addEventListener("touchend", function (t) {
          return _this.touchEnd(t);
        }));
      } else this.innerEl.addEventListener("touchstart", function (t) {
        return _this.touchStart(t);
      }), this.innerEl.addEventListener("touchmove", function (t) {
        return _this.touchMove(t);
      }), this.innerEl.addEventListener("touchend", function (t) {
        return _this.touchEnd(t);
      });
    } else this.innerEl.addEventListener("touchstart", function (t) {
      return _this.touchStart(t);
    }), this.innerEl.addEventListener("touchmove", function (t) {
      return _this.touchMove(t);
    }), this.innerEl.addEventListener("touchend", function (t) {
      return _this.touchEnd(t);
    });
  }

  createClass_default()(Pull, [{
    key: "setPullTarget",
    value: function setPullTarget(t) {
      this.startDirection = t, this.pullTarget = this.options[TARGET_DIRECTION_MAP[t]], this.targetDirection = DIRECTION_BOUNDARY_MAP[t], this.pullTarget && (this.transformEl = this.getTransformEl());
    }
  }, {
    key: "getTransformEl",
    value: function getTransformEl() {
      if (this.vertical) {
        var t = this.pullTarget.disableContentMove;return t && t.indexOf(this.pullTarget.scene) > -1 ? this.pullTarget.pullEl : this.innerEl;
      }return this.outerEl;
    }
  }, {
    key: "drag",
    value: function drag(t) {
      var e = t.detail;if (this.isDragging || ("down" === e.direction && this._canPullDown() && (this.isDragging = !0, this.startDeltaY = e.deltaY, this.startDirection = e.direction, this.setPullTarget(e.direction)), "up" === e.direction && this._canPullUp() && (this.isDragging = !0, this.startDeltaY = e.deltaY, this.startDirection = e.direction, this.setPullTarget(e.direction))), this.isDragging && (t.stopPropagation(), t.detail.gesture.preventDefault(), !this.state || this.state < PULL_STATE.PROCESS)) {
        var _t = e.deltaY - this.startDeltaY;Math.abs(_t) >= this.pullTarget.distance ? this.state = PULL_STATE.PREPARE : this.state = PULL_STATE.BEGIN, "down" === this.startDirection && (_t = Math.min(_t, 1.5 * this.pullTarget.distance)), "up" === this.startDirection && (_t = Math.max(_t, -1.5 * this.pullTarget.distance)), this.deltaY = _t, this.__handleBegin(_t, this.startDirection), this.__setTranslate(_t);
      }
    }
  }, {
    key: "dragend",
    value: function dragend(t) {
      this.pullTarget && (this.state !== PULL_STATE.PROCESS ? (this.state === PULL_STATE.PREPARE && this.__handleOnActive(), this.state === PULL_STATE.BEGIN && this.__handleOnAfter()) : t.preventDefault());
    }
  }, {
    key: "_canPullDown",
    value: function _canPullDown() {
      var t = this.outerEl.scrollTop;return this.outerEl === document.body && (t = document.documentElement.scrollTop || document.body.scrollTop), this.options.pullDown && 0 === t;
    }
  }, {
    key: "_canPullUp",
    value: function _canPullUp() {
      var _outerEl = this.outerEl,
          t = _outerEl.scrollTop,
          e = _outerEl.clientHeight,
          i = _outerEl.scrollHeight,
          s = !1;
      return this.outerEl === document.body ? (t = document.documentElement.scrollTop || document.body.scrollTop) + window.innerHeight === e && (s = !0) : t + e === i && (s = !0), this.options.pullUp && s;
    }
  }, {
    key: "touchStart",
    value: function touchStart(t) {
      this.state >= PULL_STATE.PROCESS && t.preventDefault(), this.startScrollTop = this.outerEl.scrollTop, this.startScrollLeft = this.outerEl.scrollLeft, this.startPoint = Object(util["b" /* getTouchPoint */])(t), this.innerEl.style.webkitTransition = "none";
    }
  }, {
    key: "touchMove",
    value: function touchMove(t) {
      if (this.state >= PULL_STATE.PROCESS) return void t.preventDefault();this.endPoint = Object(util["b" /* getTouchPoint */])(t);var e = pull_util.getDirection({ vertical: this.vertical, p1: this.startPoint, p2: this.endPoint });this.initDirection || (this.initDirection = e), this.direction = e;var _outerEl2 = this.outerEl,
          i = _outerEl2.scrollTop,
          s = _outerEl2.scrollLeft,
          n = _outerEl2.scrollWidth,
          r = _outerEl2.scrollHeight,
          l = _outerEl2.clientWidth,
          h = _outerEl2.clientHeight;
      if (this.outerEl === document.body) {
        if (i = document.body.scrollTop || document.documentElement.scrollTop, !(e === PULL_DIRECTION.DOWN && 0 === i || e === PULL_DIRECTION.UP && i > 0 && i + window.innerHeight === h)) return;t.preventDefault();
      } else (e === PULL_DIRECTION.DOWN && 0 === i && this.options.pullDown || e === PULL_DIRECTION.UP && i + h === r && this.options.pullUp || e === PULL_DIRECTION.RIGHT && 0 === s && this.options.pullRight || e === PULL_DIRECTION.LEFT && s + l === n && this.options.pullLeft) && t.preventDefault();var a = pull_util.getBoundary(this.outerEl, this.vertical);if (a && (this.lastBoundary || (this.lastBoundary = a), this.pullTarget && this.lastBoundary === a || (this.lastBoundary = a, this.setPullTarget(a)), this.__canTriggerTouchMove() && (this.percentage = pull_util.calPercentage({ el: this.outerEl, vertical: this.vertical, p1: this.startPoint, p2: this.endPoint }), this.__canTouchMoveTranslate(a)))) {
        var o = this.percentage * MOVE_COUNT;this.currentTranslate = o, this.lastTranslate || (this.lastTranslate = o), this.__handleBegin(o, this.startDirection), this.targetDirection === PULL_DIRECTION.DOWN || this.targetDirection === PULL_DIRECTION.RIGHT ? o <= this.pullTarget.distance ? this.state = PULL_STATE.BEGIN : this.state = PULL_STATE.PREPARE : this.targetDirection !== PULL_DIRECTION.UP && this.targetDirection !== PULL_DIRECTION.LEFT || (Math.abs(o) <= this.pullTarget.distance ? this.state = PULL_STATE.BEGIN : this.state = PULL_STATE.PREPARE), this.__setTranslate(o);
      }
    }
  }, {
    key: "__handleBegin",
    value: function __handleBegin(t, e) {
      this.pullTarget.onBegin && (this.vertical, this.pullTarget.onBegin({ distance: t, direction: e }));
    }
  }, {
    key: "touchEnd",
    value: function touchEnd(t) {
      this.pullTarget && (this.state !== PULL_STATE.PROCESS ? (this.state === PULL_STATE.PREPARE && this.__handleOnActive(), this.state === PULL_STATE.BEGIN && this.__handleOnAfter()) : t.preventDefault());
    }
  }, {
    key: "__canTriggerTouchMove",
    value: function __canTriggerTouchMove() {
      if (this.targetDirection === PULL_DIRECTION.DOWN) {
        if (!this.startPoint || !this.startPoint.y) return !1;if (ui.IS_ANDROID && this.startScrollTop > 0) return !1;
      }return !0;
    }
  }, {
    key: "__canTouchMoveTranslate",
    value: function __canTouchMoveTranslate(t) {
      if (!this.pullTarget) return !1;var e = pull_util.getAngle(this.endPoint, this.startPoint);return !(this.vertical && e < 45) && !(!this.vertical && e >= 45) && (this.targetDirection === PULL_DIRECTION.DOWN ? this.direction === PULL_DIRECTION.DOWN ? this.percentage > 0 && "up" !== t : this.initDirection === PULL_DIRECTION.DOWN && this.percentage < 0 : this.targetDirection === PULL_DIRECTION.UP ? this.direction === PULL_DIRECTION.UP ? this.percentage < 0 && "down" !== t : this.initDirection === PULL_DIRECTION.UP && this.percentage > 0 : this.targetDirection === PULL_DIRECTION.RIGHT ? this.direction === PULL_DIRECTION.RIGHT ? this.percentage > 0 && "left" !== t : this.initDirection === PULL_DIRECTION.RIGHT && this.percentage < 0 : this.targetDirection === PULL_DIRECTION.LEFT ? this.direction === PULL_DIRECTION.LEFT ? this.percentage < 0 && "right" !== t : this.initDirection === PULL_DIRECTION.LEFT && this.percentage > 0 : void 0);
    }
  }, {
    key: "__canTriggerTouchEnd",
    value: function __canTriggerTouchEnd() {
      return !!this.pullTarget && 0 !== this.percentage && !(this.targetDirection === PULL_DIRECTION.DOWN && this.outerEl.scrollTop > 0) && !("left" === this.targetDirection && this.outerEl.scrollLeft + this.outerEl.clientWidth < this.outerEl.scrollWidth);
    }
  }, {
    key: "__setTranslate",
    value: function __setTranslate(t) {
      var _this2 = this;

      var e = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : null;
      Object(util["f" /* rafThrottle */])(function () {
        _this2.vertical ? (_this2.transformEl.style.webkitTransition = e, _this2.transformEl.style.webkitTransform = "translate3d(0," + t + "px,0)", _this2.pullTarget.disableContentMove && _this2.pullTarget.onMove(t, _this2.state)) : (_this2.transformEl.style.webkitTransition = e, _this2.transformEl.style.webkitTransform = "translate3d(" + t + "px, 0, 0)");
      });
    }
  }, {
    key: "triggerPullDown",
    value: function triggerPullDown() {
      this.startDirection = "down", !this.state && this.options.pullDown && (this.setPullTarget("down"), this.__handleBegin(this.pullTarget.distance, "down"), this.__handleOnActive());
    }
  }, {
    key: "triggerPullUp",
    value: function triggerPullUp() {
      this.startDirection = "up", this.options.pullUp && (this.setPullTarget("up"), this.__handleOnActive());
    }
  }, {
    key: "__handleOnActive",
    value: function __handleOnActive() {
      var _this3 = this;

      this.state = PULL_STATE.PROCESS;var t = this.startDirection;if ("down" === t || "right" === t ? this.__setTranslate(this.pullTarget.distance, "330ms") : "left" === this.direction ? this.__setTranslate(-this.pullTarget.distance, "330ms") : this.__setTranslate(0, "330ms"), this.pullTarget.onActive) {
        var _t2 = this.pullTarget.onActive();Object(util["e" /* isPromise */])(_t2) ? Object(util["h" /* tickRequest */])({ promise: _t2, tick: 1e3, callback: this.__handleOnAfter.bind(this, 1, _t2) }) : setTimeout(function () {
          _this3.__handleOnAfter();
        }, 1e3);
      } else this.__handleOnAfter();
    }
  }, {
    key: "__handleOnAfter",
    value: function __handleOnAfter(t, e) {
      var _this4 = this;

      this.__setTranslate(0, "330ms"), this.state = t ? PULL_STATE.FINISH : PULL_STATE.CANCEL, setTimeout(function () {
        _this4.pullTarget && _this4.pullTarget.onAfter && _this4.pullTarget.onAfter(t, e), _this4.__resetPull();
      }, 300);
    }
  }, {
    key: "__resetPull",
    value: function __resetPull() {
      this.state = PULL_STATE.UNSET, this.endPoint = null, this.pullTarget = null, this.reachBoundary = !1, this.isDragging = !1, this.percentage = 0, this.direction = null, this.initDirection = null;
    }
  }, {
    key: "state",
    set: function set(t) {
      this.pullTarget && this.pullTarget.onStateChange && this.pullTarget.onStateChange(t), this._state = t;
    },
    get: function get() {
      return this._state;
    }
  }]);

  return Pull;
}();

/* harmony default export */ var pull = (pull_Pull);
;
// EXTERNAL MODULE: ../touchui/dist/libs/vueUtil.js
var vueUtil = __webpack_require__(36);

// EXTERNAL MODULE: ../touchui/dist/core/elements/input/androidInputScroll.js + 1 modules
var androidInputScroll = __webpack_require__(184);

// EXTERNAL MODULE: ../touchui/dist/libs/dom.js
var dom = __webpack_require__(56);

// EXTERNAL MODULE: ../touchui/dist/libs/rAF.js
var rAF = __webpack_require__(183);

// CONCATENATED MODULE: ../touchui/dist/libs/animateScroll.js
/* harmony default export */ var animateScroll = (function (_ref) {
  var e = _ref.el,
      _ref$scrollTarget = _ref.scrollTarget,
      t = _ref$scrollTarget === undefined ? 0 : _ref$scrollTarget,
      _ref$scrollAttr = _ref.scrollAttr,
      o = _ref$scrollAttr === undefined ? "scrollTop" : _ref$scrollAttr,
      _ref$speed = _ref.speed,
      l = _ref$speed === undefined ? 500 : _ref$speed;
  var n = void 0,
      c = e === document.body;n = c ? e[o] || document.documentElement[o] : e[o];var d = 0,
      m = l / 1e3;!function l() {
    var u = (d += 1 / 60) / m,
        r = Math.sin(u * (Math.PI / 2));if (u < 1) {
      Object(rAF["a" /* default */])(l);var _d = n + (t - n) * r;c ? (document.body[o] = _d, document.documentElement[o] = _d) : e[o] = _d;
    } else c ? (document.body[o] = t, document.documentElement[o] = t) : e[o] = t;
  }();
});;
// CONCATENATED MODULE: ../touchui/dist/components/page.js














var PullFactory = function PullFactory() {};

PullFactory.create = function create(vm) {
  var options = {
    outerEl: vm.container,
    innerEl: vm.transformContainer
  };

  if (vm.pullDown) {
    options.pullDown = assign_default()({}, { scene: vm.scene,
      pullEl: PullFactory.getPullEl(vm, 'pull-down'),
      onStateChange: vm.handlePullStateChange,
      onMove: vm.handlePullMove }, vm.pullDown);

    vm.$watch('pullDown', function (val) {
      vm.pull.options.pullDown = val;
    });
  }

  if (vm.pullUp) {
    options.pullUp = assign_default()({}, { scene: vm.scene,
      pullEl: PullFactory.getPullEl(vm, 'pull-up'),
      onStateChange: vm.handlePullStateChange,
      onMove: vm.handlePullMove }, vm.pullUp);

    vm.$watch('pullUp', function (val) {
      vm.pull.options.pullUp = val;
    });
  }

  if (keys_default()(options).length >= 3) {
    return new pull(options);
  }
};
PullFactory.getPullEl = function getPullEl(vm, slotName) {
  if (vm.$slots[slotName]) {
    return vm.$slots[slotName][0].elm;
  } else {
    return vm.$el.querySelector("." + slotName + "-content");
  }
};

/**
 * 前置条件：
 * Android键盘弹起/收起后，文本框仍然处于焦点状态
 * 解决问题：
 * 1. 键盘收起状态：点击文本框，键盘再次弹出
 * 2. 键盘弹起状态：点击向下箭头，键盘收起
 * 除此之外，键盘的弹出和收起基于ui-input组件的focus和blur事件进行处理。
 */
var page_handleResizeForAndroid = {
  methods: {
    handleResizeForAndroid: function handleResizeForAndroid() {
      var this$1 = this;

      if (ui.IS_ANDROID) {
        window.addEventListener('resize', function () {
          var input = this$1.currentInput;
          if (input && !input.pageScrollByFocus && window.innerHeight < ui.WIN_HEIGHT) {
            Object(androidInputScroll["a" /* default */])(input);
          }
        });
      }
    }
  }
};

/**
 * 页面生命周期mixin
 */
var STATUS = {
  LOADING: 0,
  SUCCESS: 1,
  ERROR: -1
};

function isDialog(vm) {
  var classList = from_default()(vm.$el.parentNode.classList);
  return classList.some(function (cls) {
    return cls.indexOf('ui-dialog-content') > -1;
  });
}

function getTabPageClass(el) {
  while (from_default()(el.classList).indexOf('ui-tab-page') < 0) {
    if (el.parentNode && el.parentNode.classList) {
      el = el.parentNode;
    } else {
      break;
    }
  }
  return Object(vueUtil["c" /* getPageClass */])(el);
}

var lifeCycle = {
  mixins: [page_handleResizeForAndroid],
  data: function data() {
    return {
      // 页面配置
      pageConfig: {},
      // 页面加载状态，结合pageLoad使用
      STATUS: STATUS,
      status: STATUS.LOADING,
      // 是否初始化完成（也可用于是否首次进入页面）
      isInit: false,
      scrollType: null,
      pageClasses: [],
      insetBottom: 0
    };
  },
  created: function created() {
    this.setPageConfig();
  },
  mounted: function mounted() {
    var this$1 = this;

    var ref = this.pageConfig;
    var scrollType = ref.scrollType;
    var isTabBar = ref.isTabBar;
    var delay = ref.delay;

    this.isDialog = isDialog(this);
    this.delay = delay;
    this.container = scrollType === 'div' ? this.$refs.container : document.body;

    var currentClassList = from_default()(this.$el.classList);
    var classList = [];

    if (this.isDialog) {
      var dialogVm = this.$el.closest('.dialog-backdrop').__vue__;
      if (dialogVm) {
        classList.push("ui-page-" + dialogVm.scrollType + "-scroll");
      }
    } else {
      classList.push("ui-page-" + this.pageConfig.scrollType + "-scroll");
    }

    // 判定class是否包含/page-\w{6}/
    if (!Object(util["c" /* isArryStringMatchPattern */])(currentClassList, /page-\w{6}/)) {
      if (isTabBar) {
        classList.push(getTabPageClass(this.$el));
      } else {
        classList.push(window.__$uiPageConfig.pageClass);
      }
    }

    if (false) {
      classList.push('windows-scrollbar');
    }

    this.pageClasses = classList;

    // **容器高度是固定的，内容高度不固定**
    if (scrollType === 'body') {
      this.height = window.innerHeight;
    } else {
      this.height = this.container.clientHeight;
    }

    // **tab页面的初始化由外部触发**
    if (!isTabBar || this.isDialog) {
      this.init();
    }

    this.$nextTick(function () {
      // 模拟onSafeAreaInsetsChange
      // window.setTimeout(() => {
      //   this.insetBottom = 34
      // }, 100)

      var insetBottom = ui.getSafeAreaInsetBottom();

      if (insetBottom === 34) {
        this$1.insetBottom = 26;
      } else {
        this$1.insetBottom = insetBottom;
      }

      ui.onSafeAreaInsetsChange(function () {
        var bottom = ui.getSafeAreaInsetBottom();
        if (bottom === 34) {
          this$1.insetBottom = 26;
        } else {
          this$1.insetBottom = bottom;
        }
      });

      var handleBack = function handleBack() {
        if (this$1.pageLoad && this$1.pageLoad.trigger === 'always') {
          this$1.handlePageLoad();
        }
      };
      if (ui.IS_APP && ui.on) {
        ui.on('UI_PAGE_BACK', handleBack);
      }
    });
  },
  activated: function activated() {
    if (this.isInit) {
      this.bindScroll();
      this.setBodyStyle();
      this.setStatusBarColor();

      if (this.pageLoad && this.pageLoad.trigger === 'always') {
        this.handlePageLoad();
      }
    }
  },
  deactivated: function deactivated() {
    this.restore();
  },
  beforeDestroy: function beforeDestroy() {
    this.restore();
  },
  methods: {
    // 处理页面的初始化，和handlePageLoad不同的是，此函数只执行一次
    init: function init() {
      var this$1 = this;

      var handle = function handle() {
        this$1.handlePageLoad().then(function () {
          this$1.setBodyStyle();
          this$1.setStatusBarColor();
          this$1.bindScroll();
          // 使用$nextTick，避免初始化时执行activated的逻辑
          this$1.$nextTick(function () {
            this$1.transformContainer = this$1.$refs.content;
            this$1.initPull();
            this$1.isInit = true;
            this$1.handleResizeForAndroid();
          });
        });
      };

      if (ui.IS_APP && this.delay) {
        ui.onPageShow(handle);
      } else {
        handle();
      }

      // waitHandle(() => {
      //   this.handlePageLoad()
      //     .then(() => {
      //       this.transformContainer = this.$refs.content
      //       this.initPull()
      //
      //       this.setBodyStyle()
      //       this.setStatusBarColor()
      //       this.bindScroll()
      //       // 使用$nextTick，避免初始化时执行activated的逻辑
      //       this.$nextTick(() => {
      //         this.isInit = true
      //         this.handleResizeForAndroid()
      //       })
      //     })
      // }, this.delay)
    },

    /**
     * 处理页面加载
     * 1. pageLoad.handle为Promise函数，则显示loading状态
     * 2. 其他情况为加载成功
     */
    handlePageLoad: function handlePageLoad() {
      var this$1 = this;

      var promise = null;

      if (!this.pageLoad || !this.pageLoad.handle || !Object(util["e" /* isPromise */])(promise = this.pageLoad.handle())) {
        this.status = STATUS.SUCCESS;
        return promise_default.a.resolve(promise);
      }

      // 初始化时才显示loading
      if (!this.isInit) {
        this.status = STATUS.LOADING;
      }

      promise.then(function (data) {
        this$1.status = STATUS.SUCCESS;
      }).catch(function () {
        this$1.status = STATUS.ERROR;
      });

      return promise;
    },
    /**
     * 外部触发tabLoad，只在tab-bar页面使用此方法
     */
    triggerTabLoad: function triggerTabLoad() {
      this.setPageConfig();

      this.setBodyStyle();

      if (this.isInit) {
        if (this.pageLoad && this.pageLoad.trigger === 'always') {
          this.handlePageLoad();
        }
        this.setStatusBarColor();
      } else {
        this.init();
      }
    },
    /**
     * 设置pageConfig和scrollType
     */
    setPageConfig: function setPageConfig() {
      this.pageConfig = Object(vueUtil["d" /* getPageConfig */])();
      this.scrollType = this.pageConfig.scrollType;
    },
    /**
     * 还原页面状态
     */
    restore: function restore() {
      if (ui.IS_APP && ui.emit) {
        ui.emit('UI_PAGE_BACK');
      }
      this.unbindScroll();
      this.restoreBodyStyle();
      this.restoreStatusBarColor();
    }
  }
};

/**
 * 页面样式计算mixin
 */
var style = {
  computed: {
    styles: function styles() {
      var styles = {};

      var page = {};
      var content = {};

      var ref = this.pageConfig;
      var scrollType = ref.scrollType;
      var disableScroll = ref.disableScroll;
      var isTabBar = ref.isTabBar;
      var tabBarPosition = ref.tabBarPosition;
      var backgroundColor = ref.backgroundColor;

      var tabBarHeight = 55 + this.insetBottom;

      if (isTabBar) {
        if (backgroundColor) {
          page.backgroundColor = backgroundColor;
        } else {
          page.backgroundColor = null;
        }
      }

      var top = 0;
      var bottom = 0;
      var contentPaddingBottom = 0;
      // minHeight处理
      // iOS: minHeight = page高度 + 0.5 (出弹性滚动)
      // Android: minHeight = page高度
      var minHeight = ui.IS_IOS && !this.isDialog ? window.innerHeight + 0.5 : window.innerHeight;

      if (this.top !== undefined) {
        top = Number(this.top);
      } else {
        top += ui.DEFAULT_HEADER_HEIGHT;
      }

      if (isTabBar) {
        if (tabBarPosition === 'top') {
          top += tabBarHeight;
        } else {
          bottom += tabBarHeight;

          if (scrollType === 'body') {
            contentPaddingBottom += tabBarHeight;
          }
        }
      }

      // 当作为dialog使用时
      if (this.isDialog) {
        bottom = 0;

        if (this.top !== undefined) {
          minHeight -= Number(this.top);
        } else {
          minHeight -= ui.DEFAULT_HEADER_HEIGHT;
        }
      } else {
        minHeight += -(top + bottom);
      }

      // 整页滚动时设置page的paddingTop, paddingBottom
      if (scrollType === 'body' || this.isDialog) {
        page.paddingTop = top + 'px';
        page.paddingBottom = bottom + 'px';
      } else {
        // 区域滚动时设置page的top, bottom
        page.top = top + 'px';
        page.bottom = bottom + 'px';
        if (disableScroll) {
          page.overflowY = 'hidden';
          page.webkitOverflowScrolling = 'auto';
          document.body.style.overflowY = null;
        }
      }

      if (this.enableReachBottomLoad) {
        contentPaddingBottom += 50;
      }

      // dialog不需要paddingBottom
      if (this.isDialog) {
        contentPaddingBottom = 0;
      }

      content.paddingBottom = contentPaddingBottom ? contentPaddingBottom + 'px' : null;

      if (scrollType === 'div') {
        content.minHeight = minHeight + 'px';
        this.contentHeight = minHeight;
      }

      content = assign_default()({}, content, this.contentStyle);

      styles.page = page;
      styles.content = content;

      return styles;
    }
  }
};

/**
 * document.body样式计算mixin
 */
var bodyStyle = {
  methods: {
    setBodyStyle: function setBodyStyle() {
      var ref = this.pageConfig;
      var isTabBar = ref.isTabBar;
      var disableScroll = ref.disableScroll;
      var backgroundColor = ref.backgroundColor;
      var backgroundTextStyle = ref.backgroundTextStyle;
      var scrollType = ref.scrollType;
      var showScroller = ref.showScroller;
      var title = ref.title;

      this.disableScroll = disableScroll;

      if (!isTabBar) {
        document.body.style.backgroundColor = backgroundColor;
      }
      document.body.style.color = backgroundTextStyle === 'light' ? '#ccc' : '#333';

      if (scrollType === 'body') {
        if (showScroller) {
          ui.showScrollIndicator();
        }
        document.body.style.overflowY = disableScroll ? 'hidden' : null;
      } else {
        document.body.style.overflowY = 'hidden';
      }
      document.title = title || window.__$uiTitle;
    },
    restoreBodyStyle: function restoreBodyStyle() {
      var ref = this.pageConfig;
      var isTabBar = ref.isTabBar;
      var disableScroll = ref.disableScroll;
      var scrollType = ref.scrollType;
      var showScroller = ref.showScroller;

      this.disableScroll = disableScroll;

      if (!isTabBar) {
        document.body.style.backgroundColor = null;
      }
      document.body.style.color = null;

      if (scrollType === 'body') {
        if (showScroller) {
          ui.hideScrollIndicator();
        }
        if (disableScroll) {
          document.body.style.overflowY = null;
        }
      } else {
        document.body.style.overflowY = null;
      }
    }
  }
};

/**
 * 页面滚动处理mixin
 */
var page_scroll = {
  methods: {
    bindScroll: function bindScroll() {
      /**
       * 监听scroll事件
       * 区域滚动
       *  - 监听container滚动事件
       * 全屏滚动
       *  - 在web下监听window滚动事件
       *  - 在app下监听ui.onScroll事件
       */
      this.__initScrollEvent();
      if (this.scrollType === 'div') {
        this.container.addEventListener('scroll', this.__divScroll);
      } else {
        window.addEventListener('scroll', this.__bodyScroll);
      }

      // 处理初始滚动位置
      if (this.scrollTop) {
        this.scrollTo(this.scrollTop);
      }

      /**
       * 监听iOS返回顶部
       */
      if (this.enableBackToTop) {
        ui.onStatusbarTap(this.backToTop);
      }
    },
    unbindScroll: function unbindScroll() {
      if (this.scrollType === 'div') {
        this.container.removeEventListener('scroll', this.__divScroll);
      } else {
        window.removeEventListener('scroll', this.__bodyScroll);
      }
    },
    __initScrollEvent: function __initScrollEvent() {
      var this$1 = this;

      this.__divScroll = function () {
        this$1.scrollPosition = this$1.container.scrollTop;
        this$1.__emitScrollEvents();
      };

      this.__bodyScroll = function () {
        // Chrome 61不认document.body.scrollTop，一直都是0
        // Safari不认document.documentElement.scrollTop，一直都是0
        this$1.scrollPosition = document.body.scrollTop || document.documentElement.scrollTop;

        this$1.__emitScrollEvents();
      };
    },
    __emitScrollEvents: function __emitScrollEvents() {
      if (this.scrollState === 0) {
        this.scrollState = 1;
        this.$emit('scrollstart', this.scrollPosition);
      }

      if (this.scrollState === 1) {
        this.$emit('scroll', this.scrollPosition);
      }

      this.__detectScrollEnd();
    },
    __detectScrollEnd: function __detectScrollEnd() {
      var this$1 = this;

      window.clearTimeout(this.scrollEndTimeout);
      this.scrollEndTimeout = window.setTimeout(function () {
        this$1.scrollState = 0;
        this$1.$emit('scrollend', this$1.scrollPosition);

        if (this$1.handleInnerScrollEnd) {
          this$1.handleInnerScrollEnd();
        }
      }, this.scrollEndDelay);
    },
    /**
     * 返回顶部
     */
    backToTop: function backToTop() {
      this.__scroll(0, 500);
    },
    /**
     * 滚动到指定位置或元素
     */
    scrollTo: function scrollTo(target, time) {
      if (time === void 0) time = 500;

      if (/^\d+$/.test(target)) {
        this.__scroll(target, time);
      } else if (/^#.*/.test(target)) {
        var el = document.querySelector(target);
        var offsetTop = Object(dom["b" /* getRelativeOffset */])(el, this.container)['scrollTop'];
        this.__scroll(offsetTop, time);
      }
    },
    /**
     * 动画滚动
     */
    __scroll: function __scroll(target, speed) {
      if (target === void 0) target = 0;
      if (speed === void 0) speed = 0;

      var container = this.container;
      container.style.webkitOverflowScrolling = 'auto';
      animateScroll({
        el: container,
        scrollTarget: target,
        speed: speed
      });
      window.setTimeout(function () {
        container.style.webkitOverflowScrolling = 'touch';
      }, speed);
    }
  }
};

/**
 * app状态栏设置mixin
 */
var statusBar = {
  data: function data() {
    return {
      statusBarColor: null
    };
  },
  methods: {
    // 设置状态栏字体颜色
    setStatusBarColor: function setStatusBarColor() {
      var this$1 = this;

      if (ui.IS_APP && this.pageConfig.navigationBarTextStyle && !this.isDialog) {
        ui.getStatusBarStyle({
          // 使用箭头函数，保留this引用
          success: function success(data) {
            this$1.statusBarColor = data.style;
          }
        });

        ui.setStatusBarStyle({
          style: this.pageConfig.navigationBarTextStyle
        });

        // 访问tabBar的第一个页面时，记住当前的状态栏颜色
        if (this.pageConfig.isTabBar && !window.__$uiRemStatusColor) {
          window.__$uiRemStatusColor = this.statusBarColor;
        }
      }
    },
    // 还原状态栏字体颜色
    restoreStatusBarColor: function restoreStatusBarColor() {
      if (ui.IS_APP && this.statusBarColor && !this.isDialog) {
        if (this.pageConfig.isTabBar) {
          // tabBar页面后退时，对处于活动状态的页面执行重置，其他tabBar页面不重置
          if (this.isTabBarActive) {
            var statusBarColor = window.__$uiRemStatusColor || this.statusBarColor;
            window.__$uiRemStatusColor = '';
            ui.setStatusBarStyle({
              style: statusBarColor
            });
          }
        } else {
          ui.setStatusBarStyle({
            style: this.statusBarColor
          });
        }
      }
    }
  }
};

var Mixins = {
  mixins: [lifeCycle, style, bodyStyle, page_scroll, statusBar]
};

var page_index = { render: function render() {
    var _vm = this;var _h = _vm.$createElement;var _c = _vm._self._c || _h;return _c('div', { ref: "container", staticClass: "ui-page", class: _vm.pageClasses, style: _vm.styles.page, on: { "click": _vm.handlePageClick } }, [_vm.$slots['nav-bar'] ? _c('transfer-dom', { directives: [{ name: "show", rawName: "v-show", value: _vm.selfShowCustomNavBar, expression: "selfShowCustomNavBar" }], style: _vm.transformNavBarStyle }, [_vm._t("nav-bar")], 2) : _vm._e(), _vm._v(" "), _vm.selfShowLoading ? _vm._t("loading", [_vm.loadingTemplate ? _c('div', { staticClass: "ui-page-loading", style: { top: this.contentHeight / 2 - 30 + 'px' }, domProps: { "innerHTML": _vm._s(_vm.loadingTemplate) } }) : _c('div', { staticClass: "ui-page-loading", style: { top: this.contentHeight / 2 - 30 + 'px' } }, [_vm._m(0)])]) : _vm._e(), _vm._v(" "), _vm.status === _vm.STATUS.ERROR ? _vm._t("retry", [_c('div', { staticClass: "retry" }, [_vm._v("轻触重试...")])]) : _vm._e(), _vm._v(" "), _vm.status === _vm.STATUS.SUCCESS ? _c('div', { ref: "content", staticClass: "ui-page-content", class: { 'disable-scroll': _vm.disableScroll }, style: _vm.styles.content }, [_vm.pullDown ? _vm._t("pull-down", [_c('pull-hook', { attrs: { "pull-style": _vm.pullDownStyle, "state": _vm.pullState, "translate": _vm.pullTranslate, "type": "pull-down" } })]) : _vm._e(), _vm._v(" "), _vm._t("default"), _vm._v(" "), _vm.pullUp ? _vm._t("pull-up", [_c('pull-hook', { attrs: { "pull-style": _vm.pullUpStyle, "state": _vm.pullState, "translate": _vm.pullTranslate, "type": "pull-up" } })]) : _vm._e(), _vm._v(" "), _vm.enableReachBottomLoad && _vm.showLoadMore ? _vm._t("load-more", [_vm._m(1)]) : _vm._e()], 2) : _vm._e()], 2);
  }, staticRenderFns: [function () {
    var _vm = this;var _h = _vm.$createElement;var _c = _vm._self._c || _h;return _c('div', { staticStyle: { "position": "relative", "width": "34px", "height": "34px", "margin": "0 auto" } }, [_c('div', { staticClass: "ui-page-loading-spinner ui-page-loading-spinner-max" }, [_c('div', { staticClass: "ui-page-loading-spinner ui-page-loading-spinner-mid" }, [_c('div', { staticClass: "ui-page-loading-spinner ui-page-loading-spinner-min" })])]), _vm._v(" "), _c('div', { staticClass: "ui-page-loading-timer" }, [_vm._v("Loading…")])]);
  }, function () {
    var _vm = this;var _h = _vm.$createElement;var _c = _vm._self._c || _h;return _c('div', { staticClass: "load-more-content" }, [_c('div', { staticClass: "load-more-icon loading" }), _vm._v(" "), _c('span', [_vm._v("正在加载...")])]);
  }],
  name: 'UiPage',
  mixins: [Mixins],
  props: {
    enableAndroidPullDown: Boolean,
    enableReachBottomLoad: Boolean,
    // 滚动到底加载触发距离
    reachBottomLoadDistance: {
      type: Number,
      default: 0
    },
    pullDown: Object,
    pullUp: Object,
    onLoadMore: {
      type: Function,
      default: function _default() {}
    },
    // 页面加载
    pageLoad: {
      type: Object
    },
    // top定位
    top: [Number, String],
    // 滚动位置
    scrollTop: {
      type: [Number, String],
      default: 0
    },
    // 内容样式
    contentStyle: Object,
    // 是否启用回到顶部功能
    enableBackToTop: {
      type: Boolean,
      default: true
    },
    showLoading: {
      type: Boolean,
      default: true
    },
    autoHideLoading: {
      type: Boolean,
      default: true
    }
  },
  components: {
    Spinner: spinner,
    TransferDom: transfer_dom["a" /* default */],
    PullHook: core_elements_pull_pull_hook
  },
  data: function data() {
    var scene = '';
    if (ui.IS_APP) {
      scene = ui.IS_IOS ? 'ios' : 'android';
    } else {
      scene = 'web';
    }

    return {
      pullState: 0,
      pullTranslate: 0,
      // 到容器顶部的距离
      scrollPosition: 0,
      // 是否显示“加载更多”
      showLoadMore: false,
      // 容器高度
      height: 0,
      // 内容高度
      contentHeight: ui.DEFAULT_CONTENT_HEIGHT,
      // 滚动事件截流时间
      throttleTime: 0,
      // 滚动状态
      scrollState: 0,
      // 是否显示自定义nav-bar（用于tab-bar切换时）
      showCustomNavBar: true,
      // 检测scrollend的定时器
      scrollEndTimeout: null,
      // 检测scrollend的时间
      scrollEndDelay: 100,
      // 是否为dialog页面
      isDialog: false,
      // 作为dialog页面时，dialog的显示状态
      isDialogShow: false,
      // android, ios, web
      scene: scene,
      loadingTemplate: window.__$uiTemplate.loading || '',
      isTabBarActive: false,
      disableScroll: false
    };
  },
  computed: {
    transformNavBarStyle: function transformNavBarStyle() {
      var style = {};
      if (this.isDialog) {
        style.position = 'fixed';
        style.top = 0;
        style.left = 0;
        style.zIndex = 505;
      }
      return style;
    },
    selfShowCustomNavBar: function selfShowCustomNavBar() {
      return this.isDialog ? this.isDialogShow : this.showCustomNavBar;
    },
    selfShowLoading: function selfShowLoading() {
      if (!this.showLoading) {
        return false;
      }

      if (this.showLoading && !this.autoHideLoading) {
        return true;
      }

      return this.status === this.STATUS.LOADING;
    },
    // pageClasses () {

    //   let classList = ['ui-page', `ui-page-${this.pageConfig.scrollType}-scroll`, window.__$uiPageConfig.pageClass]
    //   if (process.env.NODE_ENV !== 'production' && window.navigator.userAgent.match(/windows/i)) {
    //     classList.push('windows-scrollbar')
    //   }
    //   return classList
    // },
    pullDownStyle: function pullDownStyle() {
      return this.pullDown.disableContentMove && this.pullDown.disableContentMove.indexOf(this.scene) > -1 && !this.$slots['pull-down'] ? 'android' : 'ios';
    },
    pullUpStyle: function pullUpStyle() {
      return this.pullUp.disableContentMove && this.pullUp.disableContentMove.indexOf(this.scene) > -1 && !this.$slots['pull-up'] ? 'android' : 'ios';
    }
  },
  watch: {
    scrollPosition: function scrollPosition(val) {
      if (this.container) {
        var totalDistance = val + window.innerHeight + this.reachBottomLoadDistance;
        var height = this.container.scrollHeight;

        this.showLoadMore = totalDistance >= height;
      }
    },
    scrollTop: function scrollTop(val) {
      if (val >= 0) {
        this.scrollTo(val);
      }
    },
    showLoadMore: function showLoadMore(val) {
      if (val && this.enableReachBottomLoad) {
        this.onLoadMore();
      }
    }
  },
  methods: {
    initPull: function initPull() {
      this.pull = PullFactory.create(this);
    },
    handlePullStateChange: function handlePullStateChange(state) {
      this.pullState = state;
    },
    handlePullMove: function handlePullMove(translate, state) {
      this.pullTranslate = translate;
      this.pullState = state;
    },
    triggerPullDown: function triggerPullDown() {
      this.pull.triggerPullDown();
    },
    triggerPullUp: function triggerPullUp() {
      this.pull.triggerPullUp();
    },
    handlePageClick: function handlePageClick() {}
  }
};

/* harmony default export */ var components_page = __webpack_exports__["a"] = (page_index);

/***/ }),

/***/ 343:
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(344);
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add the styles to the DOM
var update = __webpack_require__(172)("0f07adb0", content, true);

/***/ }),

/***/ 344:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(171)();
// imports


// module
exports.push([module.i, "/* 1px解决方案 */\n/* 清除1px */\n/*\n * 清除浮动\n */\n/* 垂直居中 */\n/* 水平居中 */\n/* 水平垂直居中 */\n/* 超出部分出省略号 */\n/* 多行文本超出部分省略号 */\n/* TouchUI Scoped Styles */\n.page-2bdaef .ui-input-tip {\n  font-size: 0.48rem;\n  font-family: \"PingFang\";\n  padding: 0.4rem 0;\n}\n.page-2bdaef .ui-input-tip::-webkit-input-placeholder {\n  color: #b9c5e2;\n}\n.page-2bdaef.page-2bdaef.register {\n  width: 100%;\n  height: 100%;\n  background: url('https://www.agamchain.com/static/9c1385517cbc8860981a2e72e3ad310f') repeat;\n  top: 0!important;\n}\n.page-2bdaef.page-2bdaef.register .banner {\n  width: 100%;\n  height: 5.626666666666667rem;\n  background: url('https://www.agamchain.com/static/ffb1d5cfdf7630431cb542a997229f27') no-repeat center center / 10rem 5.62666667rem;\n}\n.page-2bdaef.page-2bdaef.register .bottom {\n  width: 100%;\n  margin-top: 0.8rem;\n}\n.page-2bdaef.page-2bdaef.register .bottom .main {\n  width: 7.6rem;\n  margin: 0 auto;\n}\n.page-2bdaef.page-2bdaef.register .bottom .main .ui-input {\n  border: none;\n  border-bottom: 1px solid #eee;\n  padding: 0.4rem 0;\n}\n.page-2bdaef.page-2bdaef.register .bottom .main .ui-sms-input {\n  border-bottom: 1px solid #eee;\n}\n.page-2bdaef.page-2bdaef.register .bottom .main .ui-sms-input .cell-right {\n  padding: 0;\n}\n.page-2bdaef.page-2bdaef.register .bottom .main .ui-sms-input .ui-input {\n  border: none;\n}\n.page-2bdaef.page-2bdaef.register .bottom .main .ui-sms-input button {\n  height: 0.88rem;\n}\n.page-2bdaef.page-2bdaef.register .bottom .main .submit {\n  margin-top: 1.0666666666666667rem;\n}\n.page-2bdaef.page-2bdaef.register .bottom .main .ui-text {\n  font-size: 0.3466666666666667rem;\n  font-family: \"PingFang\";\n  color: #b9c5e2;\n}\n", "", {"version":3,"sources":["/Users/wangxiaoxue/.vscode/extensions/uileader.vstouchuifree-1.4.12/node_modules/touchui-pack/src/pages/login_register/login.ui"],"names":[],"mappings":"AAAA,aAAa;AACb,WAAW;AACX;;GAEG;AACH,UAAU;AACV,UAAU;AACV,YAAY;AACZ,cAAc;AACd,iBAAiB;AACjB,2BAA2B;AAC3B;EACE,mBAAmB;EACnB,wBAAwB;EACxB,kBAAkB;CACnB;AACD;EACE,eAAe;CAChB;AACD;EACE,YAAY;EACZ,aAAa;EACb,4FAA4F;EAC5F,iBAAiB;CAClB;AACD;EACE,YAAY;EACZ,6BAA6B;EAC7B,mIAAmI;CACpI;AACD;EACE,YAAY;EACZ,mBAAmB;CACpB;AACD;EACE,cAAc;EACd,eAAe;CAChB;AACD;EACE,aAAa;EACb,8BAA8B;EAC9B,kBAAkB;CACnB;AACD;EACE,8BAA8B;CAC/B;AACD;EACE,WAAW;CACZ;AACD;EACE,aAAa;CACd;AACD;EACE,gBAAgB;CACjB;AACD;EACE,kCAAkC;CACnC;AACD;EACE,iCAAiC;EACjC,wBAAwB;EACxB,eAAe;CAChB","file":"login.ui","sourcesContent":["/* 1px解决方案 */\n/* 清除1px */\n/*\n * 清除浮动\n */\n/* 垂直居中 */\n/* 水平居中 */\n/* 水平垂直居中 */\n/* 超出部分出省略号 */\n/* 多行文本超出部分省略号 */\n/* TouchUI Scoped Styles */\n.page-2bdaef .ui-input-tip {\n  font-size: 0.48rem;\n  font-family: \"PingFang\";\n  padding: 0.4rem 0;\n}\n.page-2bdaef .ui-input-tip::-webkit-input-placeholder {\n  color: #b9c5e2;\n}\n.page-2bdaef.page-2bdaef.register {\n  width: 100%;\n  height: 100%;\n  background: url('https://www.agamchain.com/static/9c1385517cbc8860981a2e72e3ad310f') repeat;\n  top: 0!important;\n}\n.page-2bdaef.page-2bdaef.register .banner {\n  width: 100%;\n  height: 5.626666666666667rem;\n  background: url('https://www.agamchain.com/static/ffb1d5cfdf7630431cb542a997229f27') no-repeat center center / 10rem 5.62666667rem;\n}\n.page-2bdaef.page-2bdaef.register .bottom {\n  width: 100%;\n  margin-top: 0.8rem;\n}\n.page-2bdaef.page-2bdaef.register .bottom .main {\n  width: 7.6rem;\n  margin: 0 auto;\n}\n.page-2bdaef.page-2bdaef.register .bottom .main .ui-input {\n  border: none;\n  border-bottom: 1px solid #eee;\n  padding: 0.4rem 0;\n}\n.page-2bdaef.page-2bdaef.register .bottom .main .ui-sms-input {\n  border-bottom: 1px solid #eee;\n}\n.page-2bdaef.page-2bdaef.register .bottom .main .ui-sms-input .cell-right {\n  padding: 0;\n}\n.page-2bdaef.page-2bdaef.register .bottom .main .ui-sms-input .ui-input {\n  border: none;\n}\n.page-2bdaef.page-2bdaef.register .bottom .main .ui-sms-input button {\n  height: 0.88rem;\n}\n.page-2bdaef.page-2bdaef.register .bottom .main .submit {\n  margin-top: 1.0666666666666667rem;\n}\n.page-2bdaef.page-2bdaef.register .bottom .main .ui-text {\n  font-size: 0.3466666666666667rem;\n  font-family: \"PingFang\";\n  color: #b9c5e2;\n}\n"],"sourceRoot":""}]);

// exports


/***/ }),

/***/ 345:
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(346);
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add the styles to the DOM
var update = __webpack_require__(172)("04ea979e", content, true);

/***/ }),

/***/ 346:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(171)();
// imports


// module
exports.push([module.i, "/* 1px解决方案 */\n/* 清除1px */\n/*\n * 清除浮动\n */\n/* 垂直居中 */\n/* 水平居中 */\n/* 水平垂直居中 */\n/* 超出部分出省略号 */\n/* 多行文本超出部分省略号 */\n/* TouchUI Components Styles */\n.loading-content {\n  height: 50px;\n  display: -webkit-flex;\n  display: flex;\n  -webkit-justify-content: center;\n          justify-content: center;\n  -webkit-align-items: center;\n          align-items: center;\n}\n.loading-content .loading-text {\n  font-size: 12px;\n  color: #666;\n  padding-left: 1em;\n}\n.loading {\n  display: inline-block;\n  width: 20px;\n  height: 20px;\n  vertical-align: middle;\n  margin-right: .3em;\n  background: url(" + __webpack_require__(196) + ") no-repeat;\n  background-size: cover;\n  -webkit-animation: LoadingAnimate 1s steps(12, end) infinite;\n          animation: LoadingAnimate 1s steps(12, end) infinite;\n}\n.loading.light {\n  background: url(" + __webpack_require__(181) + ") no-repeat;\n}\n/* 使用绝对定位脱离ui-page的高度计算，避免showLoadMore反复触发带来的问题 */\n.load-more-content {\n  position: absolute;\n  bottom: 0;\n  left: 0;\n  width: 100%;\n  height: 50px;\n  text-align: center;\n  line-height: 50px;\n  font-size: 14px;\n  background-color: #fff;\n}\n.pull-down-content,\n.pull-up-content {\n  width: 100%;\n  height: 50px;\n  text-align: center;\n  line-height: 50px;\n  font-size: 12px;\n  color: #666;\n}\n.pull-down-content .spinner,\n.pull-up-content .spinner {\n  display: inline-block;\n  margin-right: 8px;\n}\n.pull-down-content {\n  margin-top: -50px;\n}\n.load-more-icon {\n  display: inline-block;\n  width: 20px;\n  height: 20px;\n  vertical-align: middle;\n}\n.pull-up-icon.arrow,\n.pull-down-icon.arrow {\n  width: 10px;\n  height: 30px;\n  display: inline-block;\n  vertical-align: middle;\n  background-image: url(\"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAB4AAABQBAMAAAD8TNiNAAAAJ1BMVEUAAACqqqplZWVnZ2doaGhqampoaGhpaWlnZ2dmZmZlZWVmZmZnZ2duD78kAAAADHRSTlMAA6CYqZOlnI+Kg/B86E+1AAAAhklEQVQ4y+2LvQ3CQAxGLSHEBSg8AAX0jECTnhFosgcjZKr8StE3VHz5EkeRMkF0rzk/P58k9rgOW78j+TE99OoeKpEbCvcPVDJ0OvsJ9bQs6Jxs26h5HCrlr9w8vi8zHphfmI0fcvO/ZXJG8wDzcvDFO2Y/AJj9ADE7gXmlxFMIyVpJ7DECzC9J2EC2ECAAAAAASUVORK5CYII=\");\n  background-size: 100% 100%;\n  margin-right: 8px;\n  margin-bottom: 3px;\n}\n.pull-down-icon.up {\n  -webkit-transform: rotate(180deg);\n          transform: rotate(180deg);\n  transition: -webkit-transform .35s;\n  transition: transform .35s;\n  transition: transform .35s, -webkit-transform .35s;\n}\n.pull-down-icon.none {\n  display: none;\n}\n.pull-up-icon {\n  -webkit-transform: rotate(180deg);\n          transform: rotate(180deg);\n}\n.pull-up-icon.down {\n  -webkit-transform: rotate(0deg);\n          transform: rotate(0deg);\n  transition: -webkit-transform .35s;\n  transition: transform .35s;\n  transition: transform .35s, -webkit-transform .35s;\n}\n.pull-up-icon.loading {\n  -webkit-transform: rotate(0deg);\n          transform: rotate(0deg);\n}\n.pull-up-icon.none {\n  display: none;\n}\n.material-pull-hook {\n  position: relative;\n  display: block;\n  margin: auto;\n  text-align: center;\n  z-index: 200;\n  height: 84px;\n  line-height: 84px;\n  margin-top: -84px;\n}\n.pull-hook-progress {\n  background-color: #fff;\n  width: 32px;\n  height: 32px;\n  margin: 30px auto 0;\n  border-radius: 100%;\n  position: relative;\n  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.12), 0 1px 2px rgba(0, 0, 0, 0.24);\n  display: inline-block;\n  line-height: 0;\n}\n.material-progress-circular {\n  position: relative;\n  display: inline-block;\n  width: 32px;\n  height: 32px;\n}\n.progress-circular {\n  position: absolute;\n  top: 4px;\n  left: 0;\n  height: 24px;\n  width: 24px;\n  -webkit-transform: rotate(270deg);\n  transform: rotate(270deg);\n  -webkit-animation: none;\n  animation: none;\n  position: relative;\n}\n.progress-circular--indeterminate {\n  -webkit-animation: progress__rotate 2s linear infinite;\n          animation: progress__rotate 2s linear infinite;\n  -webkit-transform: none;\n          transform: none;\n}\n.progress-circular__background,\n.progress-circular__primary,\n.progress-circular__secondary {\n  cx: 50%;\n  cy: 50%;\n  r: 40%;\n  -webkit-animation: none;\n          animation: none;\n  fill: none;\n  stroke-width: 6%;\n  stroke-miterlimit: 10;\n}\n.progress-circular__background {\n  stroke: #ddd;\n}\n.progress-circular__secondary {\n  stroke: rgba(24, 103, 194, 0.81);\n}\n.progress-circular--indeterminate__secondary {\n  display: none;\n}\n.progress-circular__primary {\n  stroke-dasharray: 1,200;\n  stroke-dashoffset: 0;\n  stroke: rgba(24, 103, 194, 0.81);\n  transition: all 1s cubic-bezier(0.4, 0, 0.2, 1);\n}\n.progress-circular--indeterminate__primary {\n  -webkit-animation: progress__dash 1.5s ease-in-out infinite;\n          animation: progress__dash 1.5s ease-in-out infinite;\n}\n@-webkit-keyframes progress__rotate {\nto {\n    -webkit-transform: rotate(1turn);\n    transform: rotate(1turn);\n}\n}\n@keyframes progress__rotate {\nto {\n    -webkit-transform: rotate(1turn);\n    transform: rotate(1turn);\n}\n}\n@-webkit-keyframes progress__dash {\n0% {\n    stroke-dasharray: 10%,241.32%;\n    stroke-dashoffset: 0;\n}\n50% {\n    stroke-dasharray: 201%,50.322%;\n    stroke-dashoffset: -100%;\n}\nto {\n    stroke-dasharray: 10%,241.32%;\n    stroke-dashoffset: -251.32%;\n}\n}\n@keyframes progress__dash {\n0% {\n    stroke-dasharray: 10%,241.32%;\n    stroke-dashoffset: 0;\n}\n50% {\n    stroke-dasharray: 201%,50.322%;\n    stroke-dashoffset: -100%;\n}\nto {\n    stroke-dasharray: 10%,241.32%;\n    stroke-dashoffset: -251.32%;\n}\n}\n.ui-page-div-scroll {\n  position: absolute;\n  top: 0;\n  bottom: 0;\n  left: 0;\n  right: 0;\n  width: 100%;\n  overflow-x: hidden;\n  overflow-y: auto;\n  -webkit-overflow-scrolling: touch;\n}\n.ui-page-body-scroll {\n  position: relative;\n}\n.ui-page.windows-scrollbar::-webkit-scrollbar {\n  position: fixed;\n  width: 4px;\n  margin-left: 10px;\n  -webkit-transform: translateX(6px);\n          transform: translateX(6px);\n  background-color: #F5F5F5;\n}\n.ui-page.windows-scrollbar::-webkit-scrollbar-track {\n  -webkit-box-shadow: inset 0 0 6px rgba(102, 102, 102, 0.3);\n  border-radius: 10px;\n  background-color: #F5F5F5;\n}\n.ui-page.windows-scrollbar::-webkit-scrollbar-thumb {\n  background-color: #888;\n  border-radius: 4px;\n}\n.ui-page-loading {\n  position: absolute;\n  width: 100%;\n  height: 62px;\n  text-align: center;\n  z-index: 999;\n}\n.ui-page-loading .ui-page-loading-spinner {\n  -webkit-align-items: center;\n          align-items: center;\n  border-radius: 100%;\n  display: -webkit-flex;\n  display: flex;\n  -webkit-justify-content: center;\n          justify-content: center;\n}\n.ui-page-loading .ui-page-loading-spinner.ui-page-loading-spinner-max {\n  -webkit-animation: pageLoadingSpinner 2s linear infinite;\n          animation: pageLoadingSpinner 2s linear infinite;\n  border-right: 0.1em solid rgba(51, 153, 255, 0.4);\n  border-top: 0.1em solid rgba(51, 153, 255, 0.4);\n  height: 3em;\n  width: 3em;\n}\n.ui-page-loading .ui-page-loading-spinner.ui-page-loading-spinner-mid {\n  -webkit-animation: pageLoadingSpinner 2s linear infinite;\n          animation: pageLoadingSpinner 2s linear infinite;\n  border-right: 0.1em solid rgba(51, 153, 255, 0.7);\n  border-top: 0.1em solid rgba(51, 153, 255, 0.7);\n  height: 2.4em;\n  width: 2.4em;\n}\n.ui-page-loading .ui-page-loading-spinner.ui-page-loading-spinner-min {\n  -webkit-animation: pageLoadingSpinner 2s linear infinite;\n          animation: pageLoadingSpinner 2s linear infinite;\n  border-right: 0.1em solid #3399ff;\n  border-top: 0.1em solid #3399ff;\n  height: 1.8em;\n  width: 1.8em;\n}\n@-webkit-keyframes pageLoadingSpinner {\n0% {\n    -webkit-transform: rotate(0deg);\n            transform: rotate(0deg);\n}\n100% {\n    -webkit-transform: rotate(360deg);\n            transform: rotate(360deg);\n}\n}\n@keyframes pageLoadingSpinner {\n0% {\n    -webkit-transform: rotate(0deg);\n            transform: rotate(0deg);\n}\n100% {\n    -webkit-transform: rotate(360deg);\n            transform: rotate(360deg);\n}\n}\n.ui-page-loading-timer:not(:required) {\n  border-radius: 24px;\n  box-sizing: border-box;\n  display: inline-block;\n  overflow: hidden;\n  position: relative;\n  text-indent: -9999px;\n  width: 34px;\n  height: 34px;\n  position: absolute;\n  top: 7px;\n  left: 6px;\n}\n.ui-page-loading-timer:not(:required)::before {\n  -webkit-animation: pageLoadingTimer 500ms infinite linear;\n  animation: pageLoadingTimer 500ms infinite linear;\n  -webkit-transform-origin: 0 0;\n  transform-origin: 0 0;\n  background: #39f;\n  border-radius: 3px;\n  content: '';\n  display: block;\n  position: absolute;\n  width: 1px;\n  height: 9.2px;\n  left: 15px;\n  top: 15px;\n}\n.ui-page-loading-timer:not(:required)::after {\n  -webkit-animation: pageLoadingTimer 6000ms infinite linear;\n  animation: pageLoadingTimer 6000ms infinite linear;\n  -webkit-transform-origin: 0 0;\n  transform-origin: 0 0;\n  background: #39f;\n  border-radius: 3px;\n  content: '';\n  display: block;\n  position: absolute;\n  width: 1px;\n  height: 6px;\n  left: 15px;\n  top: 15px;\n}\n@-webkit-keyframes pageLoadingTimer {\n0% {\n    -webkit-transform: rotate(0deg);\n    transform: rotate(0deg);\n}\n100% {\n    -webkit-transform: rotate(360deg);\n    transform: rotate(360deg);\n}\n}\n@keyframes pageLoadingTimer {\n0% {\n    -webkit-transform: rotate(0deg);\n    transform: rotate(0deg);\n}\n100% {\n    -webkit-transform: rotate(360deg);\n    transform: rotate(360deg);\n}\n}\n.ui-page-content {\n  position: relative;\n}\n.ui-page-content.disable-scroll {\n  overflow-y: hidden;\n}\n.ui-input-disabled {\n  background-color: #f9f9f9 !important;\n  border: 1px solid #eaeaea !important;\n}\n.ui-input-disabled input {\n  color: #ccc !important;\n}\n.ui-input {\n  display: -webkit-flex;\n  display: flex;\n  -webkit-align-items: center;\n          align-items: center;\n  padding-left: 12px;\n  padding-right: 12px;\n  width: 100%;\n  border: 1px solid #ccc;\n  border-radius: 5px;\n  background-color: #fff;\n}\n.ui-input .weui-icon {\n  font-size: 20px;\n  margin-top: 8px;\n  cursor: pointer;\n}\n.ui-input .weui-icon:before {\n  margin-left: .1em;\n  margin-right: .1em;\n}\n.ui-input .weui-icon-clear {\n  font-size: 16px;\n  margin-top: 0;\n}\n.ui-input-inner {\n  position: relative;\n  -webkit-flex: 1;\n          flex: 1;\n  -webkit-align-items: center;\n          align-items: center;\n  width: 100%;\n  height: 36px;\n  line-height: 1;\n  outline: 0;\n  font-size: 14px;\n  background-color: inherit;\n}\n.ui-input-inner span {\n  display: inline-block;\n}\n.x-icon-show,\n.x-icon-hide {\n  color: #0e29fb;\n  font-size: 20px;\n}\ninput[type=\"search\"]::-webkit-search-cancel-button {\n  display: none;\n}\n/* Colors\n  -------------------------- */\n/* #3cc51f */\n/* Link\n  @@@@@@@@@@@@@ */\n/* Border\n  @@@@@@@@@@@@@ */\n/* Box-shadow\n  @@@@@@@@@@@@@ */\n/* Fill\n  @@@@@@@@@@@@@ */\n/* Font\n  @@@@@@@@@@@@@ */\n/* Size\n  @@@@@@@@@@@@@ */\n/* z-index\n  @@@@@@@@@@@@@ */\n/* Disable base\n  @@@@@@@@@@@@@ */\n/* Icon\n  @@@@@@@@@@@@@ */\n/* Input\n  @@@@@@@@@@@@@ */\n/* Button\n  @@@@@@@@@@@@@ */\n@-webkit-keyframes LoadingAnimate {\n100% {\n    -webkit-transform: rotate(360deg);\n            transform: rotate(360deg);\n}\n}\n@keyframes LoadingAnimate {\n100% {\n    -webkit-transform: rotate(360deg);\n            transform: rotate(360deg);\n}\n}\n.ui-button {\n  display: inline-block;\n  position: relative;\n  white-space: nowrap;\n  line-height: 2.5555556;\n  cursor: pointer;\n  line-height: 2.75555556;\n  background: #f8f8f8;\n  border: 1px solid #c0ccda;\n  color: #1F2D3D;\n  box-sizing: border-box;\n  outline: none;\n  margin: 0;\n  -webkit-appearance: none;\n  -webkit-user-select: none;\n          user-select: none;\n  -webkit-tap-highlight-color: rgba(192, 204, 218, 0.3);\n  margin: 6px 0;\n  text-align: center;\n  padding: 0 15px;\n  font-size: 14px;\n  border-radius: 4px;\n}\n.ui-button span {\n  pointer-events: none;\n}\n.ui-button.is-plain {\n  background: transparent;\n}\n.ui-button.is-full-width {\n  width: 100%;\n}\n.ui-button.is-disabled,\n.ui-button.is-disabled:hover,\n.ui-button.is-disabled:focus {\n  color: #ccc;\n  cursor: not-allowed;\n  background-image: none;\n  opacity: 0.7;\n}\n.ui-button.is-disabled.ui-button-text {\n  background-color: transparent;\n}\n.ui-button-info {\n  color: #f8f8f8;\n  background-color: #50bfff;\n  border-color: #50bfff;\n  -webkit-tap-highlight-color: rgba(80, 191, 255, 0.1);\n}\n.ui-button-info.is-active {\n  background: rgba(80, 191, 255, 0.9);\n  border-color: rgba(80, 191, 255, 0.9);\n  color: #f8f8f8;\n}\n.ui-button-info.is-plain {\n  background: transparent;\n  border-color: #50bfff;\n  color: #50bfff;\n  -webkit-tap-highlight-color: rgba(80, 191, 255, 0.3);\n}\n.ui-button-info.is-plain:hover,\n.ui-button-info.is-plain:focus {\n  border-color: #50bfff;\n  color: #50bfff;\n}\n.ui-button-info.is-plain:active {\n  border-color: rgba(80, 191, 255, 0.9);\n  color: rgba(80, 191, 255, 0.9);\n  outline: none;\n}\n.ui-button-info.no-hover-class {\n  color: #f8f8f8;\n  background-color: #50bfff;\n  border-color: #50bfff;\n  -webkit-tap-highlight-color: rgba(80, 191, 255, 0.1);\n}\n.ui-button-info.no-hover-class:hover,\n.ui-button-info.no-hover-class:focus {\n  color: #f8f8f8;\n}\n.ui-button-info.no-hover-class:active {\n  color: #f8f8f8;\n  outline: none;\n}\n.ui-button-info.no-hover-class.is-active {\n  background: rgba(80, 191, 255, 0.9);\n  border-color: rgba(80, 191, 255, 0.9);\n  color: #f8f8f8;\n}\n.ui-button-info.no-hover-class.is-plain {\n  background: transparent;\n  border-color: #50bfff;\n  color: #50bfff;\n  -webkit-tap-highlight-color: rgba(80, 191, 255, 0.3);\n}\n.ui-button-info.no-hover-class.is-plain:hover,\n.ui-button-info.no-hover-class.is-plain:focus {\n  border-color: #50bfff;\n  color: #50bfff;\n}\n.ui-button-info.no-hover-class.is-plain:active {\n  border-color: rgba(80, 191, 255, 0.9);\n  color: rgba(80, 191, 255, 0.9);\n  outline: none;\n}\n.ui-button-info.is-disabled,\n.ui-button-info.is-disabled:hover,\n.ui-button-info.is-disabled:focus {\n  color: #eee;\n}\n.ui-button-primary {\n  color: #f8f8f8;\n  background-color: #0e29fb;\n  border-color: #0e29fb;\n  -webkit-tap-highlight-color: rgba(14, 41, 251, 0.1);\n}\n.ui-button-primary.is-active {\n  background: rgba(14, 41, 251, 0.9);\n  border-color: rgba(14, 41, 251, 0.9);\n  color: #f8f8f8;\n}\n.ui-button-primary.is-plain {\n  background: transparent;\n  border-color: #0e29fb;\n  color: #0e29fb;\n  -webkit-tap-highlight-color: rgba(14, 41, 251, 0.3);\n}\n.ui-button-primary.is-plain:hover,\n.ui-button-primary.is-plain:focus {\n  border-color: #0e29fb;\n  color: #0e29fb;\n}\n.ui-button-primary.is-plain:active {\n  border-color: rgba(14, 41, 251, 0.9);\n  color: rgba(14, 41, 251, 0.9);\n  outline: none;\n}\n.ui-button-primary.no-hover-class {\n  color: #f8f8f8;\n  background-color: #0e29fb;\n  border-color: #0e29fb;\n  -webkit-tap-highlight-color: rgba(14, 41, 251, 0.1);\n}\n.ui-button-primary.no-hover-class:hover,\n.ui-button-primary.no-hover-class:focus {\n  color: #f8f8f8;\n}\n.ui-button-primary.no-hover-class:active {\n  color: #f8f8f8;\n  outline: none;\n}\n.ui-button-primary.no-hover-class.is-active {\n  background: rgba(14, 41, 251, 0.9);\n  border-color: rgba(14, 41, 251, 0.9);\n  color: #f8f8f8;\n}\n.ui-button-primary.no-hover-class.is-plain {\n  background: transparent;\n  border-color: #0e29fb;\n  color: #0e29fb;\n  -webkit-tap-highlight-color: rgba(14, 41, 251, 0.3);\n}\n.ui-button-primary.no-hover-class.is-plain:hover,\n.ui-button-primary.no-hover-class.is-plain:focus {\n  border-color: #0e29fb;\n  color: #0e29fb;\n}\n.ui-button-primary.no-hover-class.is-plain:active {\n  border-color: rgba(14, 41, 251, 0.9);\n  color: rgba(14, 41, 251, 0.9);\n  outline: none;\n}\n.ui-button-primary.is-disabled,\n.ui-button-primary.is-disabled:hover,\n.ui-button-primary.is-disabled:focus {\n  color: #eee;\n}\n.ui-button-success {\n  color: #f8f8f8;\n  background-color: #13ce66;\n  border-color: #13ce66;\n  -webkit-tap-highlight-color: rgba(19, 206, 102, 0.1);\n}\n.ui-button-success.is-active {\n  background: rgba(19, 206, 102, 0.9);\n  border-color: rgba(19, 206, 102, 0.9);\n  color: #f8f8f8;\n}\n.ui-button-success.is-plain {\n  background: transparent;\n  border-color: #13ce66;\n  color: #13ce66;\n  -webkit-tap-highlight-color: rgba(19, 206, 102, 0.3);\n}\n.ui-button-success.is-plain:hover,\n.ui-button-success.is-plain:focus {\n  border-color: #13ce66;\n  color: #13ce66;\n}\n.ui-button-success.is-plain:active {\n  border-color: rgba(19, 206, 102, 0.9);\n  color: rgba(19, 206, 102, 0.9);\n  outline: none;\n}\n.ui-button-success.no-hover-class {\n  color: #f8f8f8;\n  background-color: #13ce66;\n  border-color: #13ce66;\n  -webkit-tap-highlight-color: rgba(19, 206, 102, 0.1);\n}\n.ui-button-success.no-hover-class:hover,\n.ui-button-success.no-hover-class:focus {\n  color: #f8f8f8;\n}\n.ui-button-success.no-hover-class:active {\n  color: #f8f8f8;\n  outline: none;\n}\n.ui-button-success.no-hover-class.is-active {\n  background: rgba(19, 206, 102, 0.9);\n  border-color: rgba(19, 206, 102, 0.9);\n  color: #f8f8f8;\n}\n.ui-button-success.no-hover-class.is-plain {\n  background: transparent;\n  border-color: #13ce66;\n  color: #13ce66;\n  -webkit-tap-highlight-color: rgba(19, 206, 102, 0.3);\n}\n.ui-button-success.no-hover-class.is-plain:hover,\n.ui-button-success.no-hover-class.is-plain:focus {\n  border-color: #13ce66;\n  color: #13ce66;\n}\n.ui-button-success.no-hover-class.is-plain:active {\n  border-color: rgba(19, 206, 102, 0.9);\n  color: rgba(19, 206, 102, 0.9);\n  outline: none;\n}\n.ui-button-success.is-disabled,\n.ui-button-success.is-disabled:hover,\n.ui-button-success.is-disabled:focus {\n  color: #eee;\n}\n.ui-button-warn {\n  color: #f8f8f8;\n  background-color: #ff4949;\n  border-color: #ff4949;\n  -webkit-tap-highlight-color: rgba(255, 73, 73, 0.1);\n}\n.ui-button-warn.is-active {\n  background: rgba(255, 73, 73, 0.9);\n  border-color: rgba(255, 73, 73, 0.9);\n  color: #f8f8f8;\n}\n.ui-button-warn.is-plain {\n  background: transparent;\n  border-color: #ff4949;\n  color: #ff4949;\n  -webkit-tap-highlight-color: rgba(255, 73, 73, 0.3);\n}\n.ui-button-warn.is-plain:hover,\n.ui-button-warn.is-plain:focus {\n  border-color: #ff4949;\n  color: #ff4949;\n}\n.ui-button-warn.is-plain:active {\n  border-color: rgba(255, 73, 73, 0.9);\n  color: rgba(255, 73, 73, 0.9);\n  outline: none;\n}\n.ui-button-warn.no-hover-class {\n  color: #f8f8f8;\n  background-color: #ff4949;\n  border-color: #ff4949;\n  -webkit-tap-highlight-color: rgba(255, 73, 73, 0.1);\n}\n.ui-button-warn.no-hover-class:hover,\n.ui-button-warn.no-hover-class:focus {\n  color: #f8f8f8;\n}\n.ui-button-warn.no-hover-class:active {\n  color: #f8f8f8;\n  outline: none;\n}\n.ui-button-warn.no-hover-class.is-active {\n  background: rgba(255, 73, 73, 0.9);\n  border-color: rgba(255, 73, 73, 0.9);\n  color: #f8f8f8;\n}\n.ui-button-warn.no-hover-class.is-plain {\n  background: transparent;\n  border-color: #ff4949;\n  color: #ff4949;\n  -webkit-tap-highlight-color: rgba(255, 73, 73, 0.3);\n}\n.ui-button-warn.no-hover-class.is-plain:hover,\n.ui-button-warn.no-hover-class.is-plain:focus {\n  border-color: #ff4949;\n  color: #ff4949;\n}\n.ui-button-warn.no-hover-class.is-plain:active {\n  border-color: rgba(255, 73, 73, 0.9);\n  color: rgba(255, 73, 73, 0.9);\n  outline: none;\n}\n.ui-button-warn.is-disabled,\n.ui-button-warn.is-disabled:hover,\n.ui-button-warn.is-disabled:focus {\n  color: #eee;\n}\n.ui-button-danger {\n  color: #f8f8f8;\n  background-color: #ff4949;\n  border-color: #ff4949;\n  -webkit-tap-highlight-color: rgba(255, 73, 73, 0.1);\n}\n.ui-button-danger.is-active {\n  background: rgba(255, 73, 73, 0.9);\n  border-color: rgba(255, 73, 73, 0.9);\n  color: #f8f8f8;\n}\n.ui-button-danger.is-plain {\n  background: transparent;\n  border-color: #ff4949;\n  color: #ff4949;\n  -webkit-tap-highlight-color: rgba(255, 73, 73, 0.3);\n}\n.ui-button-danger.is-plain:hover,\n.ui-button-danger.is-plain:focus {\n  border-color: #ff4949;\n  color: #ff4949;\n}\n.ui-button-danger.is-plain:active {\n  border-color: rgba(255, 73, 73, 0.9);\n  color: rgba(255, 73, 73, 0.9);\n  outline: none;\n}\n.ui-button-danger.no-hover-class {\n  color: #f8f8f8;\n  background-color: #ff4949;\n  border-color: #ff4949;\n  -webkit-tap-highlight-color: rgba(255, 73, 73, 0.1);\n}\n.ui-button-danger.no-hover-class:hover,\n.ui-button-danger.no-hover-class:focus {\n  color: #f8f8f8;\n}\n.ui-button-danger.no-hover-class:active {\n  color: #f8f8f8;\n  outline: none;\n}\n.ui-button-danger.no-hover-class.is-active {\n  background: rgba(255, 73, 73, 0.9);\n  border-color: rgba(255, 73, 73, 0.9);\n  color: #f8f8f8;\n}\n.ui-button-danger.no-hover-class.is-plain {\n  background: transparent;\n  border-color: #ff4949;\n  color: #ff4949;\n  -webkit-tap-highlight-color: rgba(255, 73, 73, 0.3);\n}\n.ui-button-danger.no-hover-class.is-plain:hover,\n.ui-button-danger.no-hover-class.is-plain:focus {\n  border-color: #ff4949;\n  color: #ff4949;\n}\n.ui-button-danger.no-hover-class.is-plain:active {\n  border-color: rgba(255, 73, 73, 0.9);\n  color: rgba(255, 73, 73, 0.9);\n  outline: none;\n}\n.ui-button-danger.is-disabled,\n.ui-button-danger.is-disabled:hover,\n.ui-button-danger.is-disabled:focus {\n  color: #eee;\n}\n.ui-button-large {\n  padding: 0 19px;\n  font-size: 16px;\n  border-radius: 4px;\n}\n.ui-button-small {\n  padding: 0 9px;\n  font-size: 12px;\n  border-radius: 4px;\n}\n.ui-button-mini {\n  padding: 0 4px;\n  font-size: 11px;\n  border-radius: 4px;\n}\n.ui-button-mini.is-full-width {\n  width: auto;\n}\n.ui-icon-loading {\n  display: inline-block;\n  width: 12px;\n  height: 12px;\n  margin-right: .3em;\n  background-image: url(" + __webpack_require__(181) + ");\n  background-position: 0% 50%;\n  background-repeat: no-repeat;\n  -webkit-animation: LoadingAnimate 1s steps(12, end) infinite;\n          animation: LoadingAnimate 1s steps(12, end) infinite;\n}\n.ui-button-mini {\n  line-height: 2.3;\n}\n/* 1像素解决方案 */\n/*\n * 清除1px\n */\n/*\n * 清除浮动\n */\n/*\n * mobile\n */\n/*\n * 1px\n */\n/*\n * text\n */\n.ui-row {\n  position: relative;\n  -webkit-flex: 1;\n          flex: 1;\n  display: -webkit-flex;\n  display: flex;\n  -webkit-justify-content: center;\n          justify-content: center;\n}\n.ui-row-border-top:before {\n  content: \" \";\n  position: absolute;\n  left: 0;\n  top: 0;\n  right: 0;\n  height: 1px;\n  border-top: 1px solid #C7C7C7;\n  color: #C7C7C7;\n  -webkit-transform-origin: 0 0;\n          transform-origin: 0 0;\n  -webkit-transform: scaleY(0.5);\n          transform: scaleY(0.5);\n}\n.ui-row-border-bottom:after {\n  content: \" \";\n  position: absolute;\n  left: 0;\n  bottom: 0;\n  right: 0;\n  height: 1px;\n  border-bottom: 1px solid #C7C7C7;\n  color: #C7C7C7;\n  -webkit-transform-origin: 0 100%;\n          transform-origin: 0 100%;\n  -webkit-transform: scaleY(0.5);\n          transform: scaleY(0.5);\n}\n.ui-row-img img,\n.ui-row-icon i {\n  position: absolute;\n  top: 50%;\n  left: 50%;\n  -webkit-transform: translate(-50%, -50%);\n          transform: translate(-50%, -50%);\n}\n.ui-col {\n  position: relative;\n  min-width: 0;\n  display: -webkit-flex;\n  display: flex;\n  -webkit-flex: 1;\n          flex: 1;\n}\n.ui-col.valign-top {\n  -webkit-align-items: flex-start;\n          align-items: flex-start;\n}\n.ui-col.valign-bottom {\n  -webkit-align-items: flex-end;\n          align-items: flex-end;\n}\n.ui-col.valign-middle {\n  -webkit-align-items: center;\n          align-items: center;\n}\n.ui-col.align-left {\n  -webkit-justify-content: flex-start;\n          justify-content: flex-start;\n}\n.ui-col.align-center {\n  -webkit-justify-content: center;\n          justify-content: center;\n}\n.ui-col.align-right {\n  -webkit-justify-content: flex-end;\n          justify-content: flex-end;\n}\n.ui-col .ui-col-content {\n  height: 100%;\n  min-width: 0;\n  -webkit-flex-direction: column;\n          flex-direction: column;\n  width: 100%;\n  display: -webkit-flex;\n  display: flex;\n}\n.ui-col .ui-col-content.flex-row {\n  -webkit-flex-direction: row;\n          flex-direction: row;\n  -webkit-justify-content: center;\n          justify-content: center;\n}\n.ui-col .ui-col-content.flex-column {\n  -webkit-flex-direction: column;\n          flex-direction: column;\n}\n.ui-col .ui-col-content.valign-top {\n  -webkit-justify-content: flex-start;\n          justify-content: flex-start;\n}\n.ui-col .ui-col-content.valign-bottom {\n  -webkit-justify-content: flex-end;\n          justify-content: flex-end;\n}\n.ui-col .ui-col-content.valign-middle {\n  -webkit-justify-content: center;\n          justify-content: center;\n}\n.ui-col .ui-col-content.align-left {\n  -webkit-align-items: flex-start;\n          align-items: flex-start;\n}\n.ui-col .ui-col-content.align-center {\n  -webkit-align-items: center;\n          align-items: center;\n}\n.ui-col .ui-col-content.align-right {\n  -webkit-align-items: flex-end;\n          align-items: flex-end;\n}\n.ui-col .ui-col-content.tap-effect:active {\n  background-color: rgba(231, 231, 231, 0.5);\n}\n.ui-col-border-left:before {\n  content: \" \";\n  position: absolute;\n  left: 0;\n  top: 0;\n  width: 1px;\n  bottom: 0;\n  border-left: 1px solid #C7C7C7;\n  color: #C7C7C7;\n  -webkit-transform-origin: 0 0;\n          transform-origin: 0 0;\n  -webkit-transform: scaleX(0.5);\n          transform: scaleX(0.5);\n}\n.ui-col-border-right:after {\n  content: \" \";\n  position: absolute;\n  right: 0;\n  top: 0;\n  width: 1px;\n  bottom: 0;\n  border-right: 1px solid #C7C7C7;\n  color: #C7C7C7;\n  -webkit-transform-origin: 100% 0;\n          transform-origin: 100% 0;\n  -webkit-transform: scaleX(0.5);\n          transform: scaleX(0.5);\n}\n.ui-col-align-center {\n  text-align: center;\n}\n.ui-col-align-right {\n  text-align: right;\n}\n.ui-col-12 {\n  float: left;\n  height: 100%;\n  width: 100%;\n  -webkit-flex: 0 0 100%;\n          flex: 0 0 100%;\n}\n.ui-col-11 {\n  float: left;\n  height: 100%;\n  width: 91.66666667%;\n  -webkit-flex: 0 0 91.66666667%;\n          flex: 0 0 91.66666667%;\n}\n.ui-col-10 {\n  float: left;\n  height: 100%;\n  width: 83.33333333%;\n  -webkit-flex: 0 0 83.33333333%;\n          flex: 0 0 83.33333333%;\n}\n.ui-col-9 {\n  float: left;\n  height: 100%;\n  width: 75%;\n  -webkit-flex: 0 0 75%;\n          flex: 0 0 75%;\n}\n.ui-col-8 {\n  float: left;\n  height: 100%;\n  width: 66.66666667%;\n  -webkit-flex: 0 0 66.66666667%;\n          flex: 0 0 66.66666667%;\n}\n.ui-col-7 {\n  float: left;\n  height: 100%;\n  width: 58.33333333%;\n  -webkit-flex: 0 0 58.33333333%;\n          flex: 0 0 58.33333333%;\n}\n.ui-col-6 {\n  float: left;\n  height: 100%;\n  width: 50%;\n  -webkit-flex: 0 0 50%;\n          flex: 0 0 50%;\n}\n.ui-col-5 {\n  float: left;\n  height: 100%;\n  width: 41.66666667%;\n  -webkit-flex: 0 0 41.66666667%;\n          flex: 0 0 41.66666667%;\n}\n.ui-col-4 {\n  float: left;\n  height: 100%;\n  width: 33.33333333%;\n  -webkit-flex: 0 0 33.33333333%;\n          flex: 0 0 33.33333333%;\n}\n.ui-col-3 {\n  float: left;\n  height: 100%;\n  width: 25%;\n  -webkit-flex: 0 0 25%;\n          flex: 0 0 25%;\n}\n.ui-col-2 {\n  float: left;\n  height: 100%;\n  width: 16.66666667%;\n  -webkit-flex: 0 0 16.66666667%;\n          flex: 0 0 16.66666667%;\n}\n.ui-col-1 {\n  float: left;\n  height: 100%;\n  width: 8.33333333%;\n  -webkit-flex: 0 0 8.33333333%;\n          flex: 0 0 8.33333333%;\n}\n.ui-text.selectable {\n  -webkit-user-select: all;\n          user-select: all;\n}\n/* TouchUI Scoped Styles */\n", "", {"version":3,"sources":["/Users/wangxiaoxue/.vscode/extensions/uileader.vstouchuifree-1.4.12/node_modules/touchui-pack/src/pages/login_register/login.ui"],"names":[],"mappings":"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B;AACD;IACI,kCAAkC;IAClC,0BAA0B;CAC7B;CACA;AACD;EACE,mBAAmB;CACpB;AACD;EACE,mBAAmB;CACpB;AACD;EACE,qCAAqC;EACrC,qCAAqC;CACtC;AACD;EACE,uBAAuB;CACxB;AACD;EACE,sBAAsB;EACtB,cAAc;EACd,4BAA4B;UACpB,oBAAoB;EAC5B,mBAAmB;EACnB,oBAAoB;EACpB,YAAY;EACZ,uBAAuB;EACvB,mBAAmB;EACnB,uBAAuB;CACxB;AACD;EACE,gBAAgB;EAChB,gBAAgB;EAChB,gBAAgB;CACjB;AACD;EACE,kBAAkB;EAClB,mBAAmB;CACpB;AACD;EACE,gBAAgB;EAChB,cAAc;CACf;AACD;EACE,mBAAmB;EACnB,gBAAgB;UACR,QAAQ;EAChB,4BAA4B;UACpB,oBAAoB;EAC5B,YAAY;EACZ,aAAa;EACb,eAAe;EACf,WAAW;EACX,gBAAgB;EAChB,0BAA0B;CAC3B;AACD;EACE,sBAAsB;CACvB;AACD;;EAEE,eAAe;EACf,gBAAgB;CACjB;AACD;EACE,cAAc;CACf;AACD;+BAC+B;AAC/B,aAAa;AACb;kBACkB;AAClB;kBACkB;AAClB;kBACkB;AAClB;kBACkB;AAClB;kBACkB;AAClB;kBACkB;AAClB;kBACkB;AAClB;kBACkB;AAClB;kBACkB;AAClB;kBACkB;AAClB;kBACkB;AAClB;AACA;IACI,kCAAkC;YAC1B,0BAA0B;CACrC;CACA;AACD;AACA;IACI,kCAAkC;YAC1B,0BAA0B;CACrC;CACA;AACD;EACE,sBAAsB;EACtB,mBAAmB;EACnB,oBAAoB;EACpB,uBAAuB;EACvB,gBAAgB;EAChB,wBAAwB;EACxB,oBAAoB;EACpB,0BAA0B;EAC1B,eAAe;EACf,uBAAuB;EACvB,cAAc;EACd,UAAU;EACV,yBAAyB;EACzB,0BAA0B;UAClB,kBAAkB;EAC1B,sDAAsD;EACtD,cAAc;EACd,mBAAmB;EACnB,gBAAgB;EAChB,gBAAgB;EAChB,mBAAmB;CACpB;AACD;EACE,qBAAqB;CACtB;AACD;EACE,wBAAwB;CACzB;AACD;EACE,YAAY;CACb;AACD;;;EAGE,YAAY;EACZ,oBAAoB;EACpB,uBAAuB;EACvB,aAAa;CACd;AACD;EACE,8BAA8B;CAC/B;AACD;EACE,eAAe;EACf,0BAA0B;EAC1B,sBAAsB;EACtB,qDAAqD;CACtD;AACD;EACE,oCAAoC;EACpC,sCAAsC;EACtC,eAAe;CAChB;AACD;EACE,wBAAwB;EACxB,sBAAsB;EACtB,eAAe;EACf,qDAAqD;CACtD;AACD;;EAEE,sBAAsB;EACtB,eAAe;CAChB;AACD;EACE,sCAAsC;EACtC,+BAA+B;EAC/B,cAAc;CACf;AACD;EACE,eAAe;EACf,0BAA0B;EAC1B,sBAAsB;EACtB,qDAAqD;CACtD;AACD;;EAEE,eAAe;CAChB;AACD;EACE,eAAe;EACf,cAAc;CACf;AACD;EACE,oCAAoC;EACpC,sCAAsC;EACtC,eAAe;CAChB;AACD;EACE,wBAAwB;EACxB,sBAAsB;EACtB,eAAe;EACf,qDAAqD;CACtD;AACD;;EAEE,sBAAsB;EACtB,eAAe;CAChB;AACD;EACE,sCAAsC;EACtC,+BAA+B;EAC/B,cAAc;CACf;AACD;;;EAGE,YAAY;CACb;AACD;EACE,eAAe;EACf,0BAA0B;EAC1B,sBAAsB;EACtB,oDAAoD;CACrD;AACD;EACE,mCAAmC;EACnC,qCAAqC;EACrC,eAAe;CAChB;AACD;EACE,wBAAwB;EACxB,sBAAsB;EACtB,eAAe;EACf,oDAAoD;CACrD;AACD;;EAEE,sBAAsB;EACtB,eAAe;CAChB;AACD;EACE,qCAAqC;EACrC,8BAA8B;EAC9B,cAAc;CACf;AACD;EACE,eAAe;EACf,0BAA0B;EAC1B,sBAAsB;EACtB,oDAAoD;CACrD;AACD;;EAEE,eAAe;CAChB;AACD;EACE,eAAe;EACf,cAAc;CACf;AACD;EACE,mCAAmC;EACnC,qCAAqC;EACrC,eAAe;CAChB;AACD;EACE,wBAAwB;EACxB,sBAAsB;EACtB,eAAe;EACf,oDAAoD;CACrD;AACD;;EAEE,sBAAsB;EACtB,eAAe;CAChB;AACD;EACE,qCAAqC;EACrC,8BAA8B;EAC9B,cAAc;CACf;AACD;;;EAGE,YAAY;CACb;AACD;EACE,eAAe;EACf,0BAA0B;EAC1B,sBAAsB;EACtB,qDAAqD;CACtD;AACD;EACE,oCAAoC;EACpC,sCAAsC;EACtC,eAAe;CAChB;AACD;EACE,wBAAwB;EACxB,sBAAsB;EACtB,eAAe;EACf,qDAAqD;CACtD;AACD;;EAEE,sBAAsB;EACtB,eAAe;CAChB;AACD;EACE,sCAAsC;EACtC,+BAA+B;EAC/B,cAAc;CACf;AACD;EACE,eAAe;EACf,0BAA0B;EAC1B,sBAAsB;EACtB,qDAAqD;CACtD;AACD;;EAEE,eAAe;CAChB;AACD;EACE,eAAe;EACf,cAAc;CACf;AACD;EACE,oCAAoC;EACpC,sCAAsC;EACtC,eAAe;CAChB;AACD;EACE,wBAAwB;EACxB,sBAAsB;EACtB,eAAe;EACf,qDAAqD;CACtD;AACD;;EAEE,sBAAsB;EACtB,eAAe;CAChB;AACD;EACE,sCAAsC;EACtC,+BAA+B;EAC/B,cAAc;CACf;AACD;;;EAGE,YAAY;CACb;AACD;EACE,eAAe;EACf,0BAA0B;EAC1B,sBAAsB;EACtB,oDAAoD;CACrD;AACD;EACE,mCAAmC;EACnC,qCAAqC;EACrC,eAAe;CAChB;AACD;EACE,wBAAwB;EACxB,sBAAsB;EACtB,eAAe;EACf,oDAAoD;CACrD;AACD;;EAEE,sBAAsB;EACtB,eAAe;CAChB;AACD;EACE,qCAAqC;EACrC,8BAA8B;EAC9B,cAAc;CACf;AACD;EACE,eAAe;EACf,0BAA0B;EAC1B,sBAAsB;EACtB,oDAAoD;CACrD;AACD;;EAEE,eAAe;CAChB;AACD;EACE,eAAe;EACf,cAAc;CACf;AACD;EACE,mCAAmC;EACnC,qCAAqC;EACrC,eAAe;CAChB;AACD;EACE,wBAAwB;EACxB,sBAAsB;EACtB,eAAe;EACf,oDAAoD;CACrD;AACD;;EAEE,sBAAsB;EACtB,eAAe;CAChB;AACD;EACE,qCAAqC;EACrC,8BAA8B;EAC9B,cAAc;CACf;AACD;;;EAGE,YAAY;CACb;AACD;EACE,eAAe;EACf,0BAA0B;EAC1B,sBAAsB;EACtB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","file":"login.ui","sourcesContent":["/* 1px解决方案 */\n/* 清除1px */\n/*\n * 清除浮动\n */\n/* 垂直居中 */\n/* 水平居中 */\n/* 水平垂直居中 */\n/* 超出部分出省略号 */\n/* 多行文本超出部分省略号 */\n/* TouchUI Components Styles */\n.loading-content {\n  height: 50px;\n  display: -webkit-flex;\n  display: flex;\n  -webkit-justify-content: center;\n          justify-content: center;\n  -webkit-align-items: center;\n          align-items: center;\n}\n.loading-content .loading-text {\n  font-size: 12px;\n  color: #666;\n  padding-left: 1em;\n}\n.loading {\n  display: inline-block;\n  width: 20px;\n  height: 20px;\n  vertical-align: middle;\n  margin-right: .3em;\n  background: url(\"../../../../touchui/dist/styles/touchui/loading.svg\") no-repeat;\n  background-size: cover;\n  -webkit-animation: LoadingAnimate 1s steps(12, end) infinite;\n          animation: LoadingAnimate 1s steps(12, end) infinite;\n}\n.loading.light {\n  background: url(\"../../../../touchui/dist/styles/touchui/loading-light.svg\") no-repeat;\n}\n/* 使用绝对定位脱离ui-page的高度计算，避免showLoadMore反复触发带来的问题 */\n.load-more-content {\n  position: absolute;\n  bottom: 0;\n  left: 0;\n  width: 100%;\n  height: 50px;\n  text-align: center;\n  line-height: 50px;\n  font-size: 14px;\n  background-color: #fff;\n}\n.pull-down-content,\n.pull-up-content {\n  width: 100%;\n  height: 50px;\n  text-align: center;\n  line-height: 50px;\n  font-size: 12px;\n  color: #666;\n}\n.pull-down-content .spinner,\n.pull-up-content .spinner {\n  display: inline-block;\n  margin-right: 8px;\n}\n.pull-down-content {\n  margin-top: -50px;\n}\n.load-more-icon {\n  display: inline-block;\n  width: 20px;\n  height: 20px;\n  vertical-align: middle;\n}\n.pull-up-icon.arrow,\n.pull-down-icon.arrow {\n  width: 10px;\n  height: 30px;\n  display: inline-block;\n  vertical-align: middle;\n  background-image: url(\"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAB4AAABQBAMAAAD8TNiNAAAAJ1BMVEUAAACqqqplZWVnZ2doaGhqampoaGhpaWlnZ2dmZmZlZWVmZmZnZ2duD78kAAAADHRSTlMAA6CYqZOlnI+Kg/B86E+1AAAAhklEQVQ4y+2LvQ3CQAxGLSHEBSg8AAX0jECTnhFosgcjZKr8StE3VHz5EkeRMkF0rzk/P58k9rgOW78j+TE99OoeKpEbCvcPVDJ0OvsJ9bQs6Jxs26h5HCrlr9w8vi8zHphfmI0fcvO/ZXJG8wDzcvDFO2Y/AJj9ADE7gXmlxFMIyVpJ7DECzC9J2EC2ECAAAAAASUVORK5CYII=\");\n  background-size: 100% 100%;\n  margin-right: 8px;\n  margin-bottom: 3px;\n}\n.pull-down-icon.up {\n  -webkit-transform: rotate(180deg);\n          transform: rotate(180deg);\n  transition: -webkit-transform .35s;\n  transition: transform .35s;\n  transition: transform .35s, -webkit-transform .35s;\n}\n.pull-down-icon.none {\n  display: none;\n}\n.pull-up-icon {\n  -webkit-transform: rotate(180deg);\n          transform: rotate(180deg);\n}\n.pull-up-icon.down {\n  -webkit-transform: rotate(0deg);\n          transform: rotate(0deg);\n  transition: -webkit-transform .35s;\n  transition: transform .35s;\n  transition: transform .35s, -webkit-transform .35s;\n}\n.pull-up-icon.loading {\n  -webkit-transform: rotate(0deg);\n          transform: rotate(0deg);\n}\n.pull-up-icon.none {\n  display: none;\n}\n.material-pull-hook {\n  position: relative;\n  display: block;\n  margin: auto;\n  text-align: center;\n  z-index: 200;\n  height: 84px;\n  line-height: 84px;\n  margin-top: -84px;\n}\n.pull-hook-progress {\n  background-color: #fff;\n  width: 32px;\n  height: 32px;\n  margin: 30px auto 0;\n  border-radius: 100%;\n  position: relative;\n  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.12), 0 1px 2px rgba(0, 0, 0, 0.24);\n  display: inline-block;\n  line-height: 0;\n}\n.material-progress-circular {\n  position: relative;\n  display: inline-block;\n  width: 32px;\n  height: 32px;\n}\n.progress-circular {\n  position: absolute;\n  top: 4px;\n  left: 0;\n  height: 24px;\n  width: 24px;\n  -webkit-transform: rotate(270deg);\n  transform: rotate(270deg);\n  -webkit-animation: none;\n  animation: none;\n  position: relative;\n}\n.progress-circular--indeterminate {\n  -webkit-animation: progress__rotate 2s linear infinite;\n          animation: progress__rotate 2s linear infinite;\n  -webkit-transform: none;\n          transform: none;\n}\n.progress-circular__background,\n.progress-circular__primary,\n.progress-circular__secondary {\n  cx: 50%;\n  cy: 50%;\n  r: 40%;\n  -webkit-animation: none;\n          animation: none;\n  fill: none;\n  stroke-width: 6%;\n  stroke-miterlimit: 10;\n}\n.progress-circular__background {\n  stroke: #ddd;\n}\n.progress-circular__secondary {\n  stroke: rgba(24, 103, 194, 0.81);\n}\n.progress-circular--indeterminate__secondary {\n  display: none;\n}\n.progress-circular__primary {\n  stroke-dasharray: 1,200;\n  stroke-dashoffset: 0;\n  stroke: rgba(24, 103, 194, 0.81);\n  transition: all 1s cubic-bezier(0.4, 0, 0.2, 1);\n}\n.progress-circular--indeterminate__primary {\n  -webkit-animation: progress__dash 1.5s ease-in-out infinite;\n          animation: progress__dash 1.5s ease-in-out infinite;\n}\n@-webkit-keyframes progress__rotate {\nto {\n    -webkit-transform: rotate(1turn);\n    transform: rotate(1turn);\n}\n}\n@keyframes progress__rotate {\nto {\n    -webkit-transform: rotate(1turn);\n    transform: rotate(1turn);\n}\n}\n@-webkit-keyframes progress__dash {\n0% {\n    stroke-dasharray: 10%,241.32%;\n    stroke-dashoffset: 0;\n}\n50% {\n    stroke-dasharray: 201%,50.322%;\n    stroke-dashoffset: -100%;\n}\nto {\n    stroke-dasharray: 10%,241.32%;\n    stroke-dashoffset: -251.32%;\n}\n}\n@keyframes progress__dash {\n0% {\n    stroke-dasharray: 10%,241.32%;\n    stroke-dashoffset: 0;\n}\n50% {\n    stroke-dasharray: 201%,50.322%;\n    stroke-dashoffset: -100%;\n}\nto {\n    stroke-dasharray: 10%,241.32%;\n    stroke-dashoffset: -251.32%;\n}\n}\n.ui-page-div-scroll {\n  position: absolute;\n  top: 0;\n  bottom: 0;\n  left: 0;\n  right: 0;\n  width: 100%;\n  overflow-x: hidden;\n  overflow-y: auto;\n  -webkit-overflow-scrolling: touch;\n}\n.ui-page-body-scroll {\n  position: relative;\n}\n.ui-page.windows-scrollbar::-webkit-scrollbar {\n  position: fixed;\n  width: 4px;\n  margin-left: 10px;\n  -webkit-transform: translateX(6px);\n          transform: translateX(6px);\n  background-color: #F5F5F5;\n}\n.ui-page.windows-scrollbar::-webkit-scrollbar-track {\n  -webkit-box-shadow: inset 0 0 6px rgba(102, 102, 102, 0.3);\n  border-radius: 10px;\n  background-color: #F5F5F5;\n}\n.ui-page.windows-scrollbar::-webkit-scrollbar-thumb {\n  background-color: #888;\n  border-radius: 4px;\n}\n.ui-page-loading {\n  position: absolute;\n  width: 100%;\n  height: 62px;\n  text-align: center;\n  z-index: 999;\n}\n.ui-page-loading .ui-page-loading-spinner {\n  -webkit-align-items: center;\n          align-items: center;\n  border-radius: 100%;\n  display: -webkit-flex;\n  display: flex;\n  -webkit-justify-content: center;\n          justify-content: center;\n}\n.ui-page-loading .ui-page-loading-spinner.ui-page-loading-spinner-max {\n  -webkit-animation: pageLoadingSpinner 2s linear infinite;\n          animation: pageLoadingSpinner 2s linear infinite;\n  border-right: 0.1em solid rgba(51, 153, 255, 0.4);\n  border-top: 0.1em solid rgba(51, 153, 255, 0.4);\n  height: 3em;\n  width: 3em;\n}\n.ui-page-loading .ui-page-loading-spinner.ui-page-loading-spinner-mid {\n  -webkit-animation: pageLoadingSpinner 2s linear infinite;\n          animation: pageLoadingSpinner 2s linear infinite;\n  border-right: 0.1em solid rgba(51, 153, 255, 0.7);\n  border-top: 0.1em solid rgba(51, 153, 255, 0.7);\n  height: 2.4em;\n  width: 2.4em;\n}\n.ui-page-loading .ui-page-loading-spinner.ui-page-loading-spinner-min {\n  -webkit-animation: pageLoadingSpinner 2s linear infinite;\n          animation: pageLoadingSpinner 2s linear infinite;\n  border-right: 0.1em solid #3399ff;\n  border-top: 0.1em solid #3399ff;\n  height: 1.8em;\n  width: 1.8em;\n}\n@-webkit-keyframes pageLoadingSpinner {\n0% {\n    -webkit-transform: rotate(0deg);\n            transform: rotate(0deg);\n}\n100% {\n    -webkit-transform: rotate(360deg);\n            transform: rotate(360deg);\n}\n}\n@keyframes pageLoadingSpinner {\n0% {\n    -webkit-transform: rotate(0deg);\n            transform: rotate(0deg);\n}\n100% {\n    -webkit-transform: rotate(360deg);\n            transform: rotate(360deg);\n}\n}\n.ui-page-loading-timer:not(:required) {\n  border-radius: 24px;\n  box-sizing: border-box;\n  display: inline-block;\n  overflow: hidden;\n  position: relative;\n  text-indent: -9999px;\n  width: 34px;\n  height: 34px;\n  position: absolute;\n  top: 7px;\n  left: 6px;\n}\n.ui-page-loading-timer:not(:required)::before {\n  -webkit-animation: pageLoadingTimer 500ms infinite linear;\n  animation: pageLoadingTimer 500ms infinite linear;\n  -webkit-transform-origin: 0 0;\n  transform-origin: 0 0;\n  background: #39f;\n  border-radius: 3px;\n  content: '';\n  display: block;\n  position: absolute;\n  width: 1px;\n  height: 9.2px;\n  left: 15px;\n  top: 15px;\n}\n.ui-page-loading-timer:not(:required)::after {\n  -webkit-animation: pageLoadingTimer 6000ms infinite linear;\n  animation: pageLoadingTimer 6000ms infinite linear;\n  -webkit-transform-origin: 0 0;\n  transform-origin: 0 0;\n  background: #39f;\n  border-radius: 3px;\n  content: '';\n  display: block;\n  position: absolute;\n  width: 1px;\n  height: 6px;\n  left: 15px;\n  top: 15px;\n}\n@-webkit-keyframes pageLoadingTimer {\n0% {\n    -webkit-transform: rotate(0deg);\n    transform: rotate(0deg);\n}\n100% {\n    -webkit-transform: rotate(360deg);\n    transform: rotate(360deg);\n}\n}\n@keyframes pageLoadingTimer {\n0% {\n    -webkit-transform: rotate(0deg);\n    transform: rotate(0deg);\n}\n100% {\n    -webkit-transform: rotate(360deg);\n    transform: rotate(360deg);\n}\n}\n.ui-page-content {\n  position: relative;\n}\n.ui-page-content.disable-scroll {\n  overflow-y: hidden;\n}\n.ui-input-disabled {\n  background-color: #f9f9f9 !important;\n  border: 1px solid #eaeaea !important;\n}\n.ui-input-disabled input {\n  color: #ccc !important;\n}\n.ui-input {\n  display: -webkit-flex;\n  display: flex;\n  -webkit-align-items: center;\n          align-items: center;\n  padding-left: 12px;\n  padding-right: 12px;\n  width: 100%;\n  border: 1px solid #ccc;\n  border-radius: 5px;\n  background-color: #fff;\n}\n.ui-input .weui-icon {\n  font-size: 20px;\n  margin-top: 8px;\n  cursor: pointer;\n}\n.ui-input .weui-icon:before {\n  margin-left: .1em;\n  margin-right: .1em;\n}\n.ui-input .weui-icon-clear {\n  font-size: 16px;\n  margin-top: 0;\n}\n.ui-input-inner {\n  position: relative;\n  -webkit-flex: 1;\n          flex: 1;\n  -webkit-align-items: center;\n          align-items: center;\n  width: 100%;\n  height: 36px;\n  line-height: 1;\n  outline: 0;\n  font-size: 14px;\n  background-color: inherit;\n}\n.ui-input-inner span {\n  display: inline-block;\n}\n.x-icon-show,\n.x-icon-hide {\n  color: #0e29fb;\n  font-size: 20px;\n}\ninput[type=\"search\"]::-webkit-search-cancel-button {\n  display: none;\n}\n/* Colors\n  -------------------------- */\n/* #3cc51f */\n/* Link\n  @@@@@@@@@@@@@ */\n/* Border\n  @@@@@@@@@@@@@ */\n/* Box-shadow\n  @@@@@@@@@@@@@ */\n/* Fill\n  @@@@@@@@@@@@@ */\n/* Font\n  @@@@@@@@@@@@@ */\n/* Size\n  @@@@@@@@@@@@@ */\n/* z-index\n  @@@@@@@@@@@@@ */\n/* Disable base\n  @@@@@@@@@@@@@ */\n/* Icon\n  @@@@@@@@@@@@@ */\n/* Input\n  @@@@@@@@@@@@@ */\n/* Button\n  @@@@@@@@@@@@@ */\n@-webkit-keyframes LoadingAnimate {\n100% {\n    -webkit-transform: rotate(360deg);\n            transform: rotate(360deg);\n}\n}\n@keyframes LoadingAnimate {\n100% {\n    -webkit-transform: rotate(360deg);\n            transform: rotate(360deg);\n}\n}\n.ui-button {\n  display: inline-block;\n  position: relative;\n  white-space: nowrap;\n  line-height: 2.5555556;\n  cursor: pointer;\n  line-height: 2.75555556;\n  background: #f8f8f8;\n  border: 1px solid #c0ccda;\n  color: #1F2D3D;\n  box-sizing: border-box;\n  outline: none;\n  margin: 0;\n  -webkit-appearance: none;\n  -webkit-user-select: none;\n          user-select: none;\n  -webkit-tap-highlight-color: rgba(192, 204, 218, 0.3);\n  margin: 6px 0;\n  text-align: center;\n  padding: 0 15px;\n  font-size: 14px;\n  border-radius: 4px;\n}\n.ui-button span {\n  pointer-events: none;\n}\n.ui-button.is-plain {\n  background: transparent;\n}\n.ui-button.is-full-width {\n  width: 100%;\n}\n.ui-button.is-disabled,\n.ui-button.is-disabled:hover,\n.ui-button.is-disabled:focus {\n  color: #ccc;\n  cursor: not-allowed;\n  background-image: none;\n  opacity: 0.7;\n}\n.ui-button.is-disabled.ui-button-text {\n  background-color: transparent;\n}\n.ui-button-info {\n  color: #f8f8f8;\n  background-color: #50bfff;\n  border-color: #50bfff;\n  -webkit-tap-highlight-color: rgba(80, 191, 255, 0.1);\n}\n.ui-button-info.is-active {\n  background: rgba(80, 191, 255, 0.9);\n  border-color: rgba(80, 191, 255, 0.9);\n  color: #f8f8f8;\n}\n.ui-button-info.is-plain {\n  background: transparent;\n  border-color: #50bfff;\n  color: #50bfff;\n  -webkit-tap-highlight-color: rgba(80, 191, 255, 0.3);\n}\n.ui-button-info.is-plain:hover,\n.ui-button-info.is-plain:focus {\n  border-color: #50bfff;\n  color: #50bfff;\n}\n.ui-button-info.is-plain:active {\n  border-color: rgba(80, 191, 255, 0.9);\n  color: rgba(80, 191, 255, 0.9);\n  outline: none;\n}\n.ui-button-info.no-hover-class {\n  color: #f8f8f8;\n  background-color: #50bfff;\n  border-color: #50bfff;\n  -webkit-tap-highlight-color: rgba(80, 191, 255, 0.1);\n}\n.ui-button-info.no-hover-class:hover,\n.ui-button-info.no-hover-class:focus {\n  color: #f8f8f8;\n}\n.ui-button-info.no-hover-class:active {\n  color: #f8f8f8;\n  outline: none;\n}\n.ui-button-info.no-hover-class.is-active {\n  background: rgba(80, 191, 255, 0.9);\n  border-color: rgba(80, 191, 255, 0.9);\n  color: #f8f8f8;\n}\n.ui-button-info.no-hover-class.is-plain {\n  background: transparent;\n  border-color: #50bfff;\n  color: #50bfff;\n  -webkit-tap-highlight-color: rgba(80, 191, 255, 0.3);\n}\n.ui-button-info.no-hover-class.is-plain:hover,\n.ui-button-info.no-hover-class.is-plain:focus {\n  border-color: #50bfff;\n  color: #50bfff;\n}\n.ui-button-info.no-hover-class.is-plain:active {\n  border-color: rgba(80, 191, 255, 0.9);\n  color: rgba(80, 191, 255, 0.9);\n  outline: none;\n}\n.ui-button-info.is-disabled,\n.ui-button-info.is-disabled:hover,\n.ui-button-info.is-disabled:focus {\n  color: #eee;\n}\n.ui-button-primary {\n  color: #f8f8f8;\n  background-color: #0e29fb;\n  border-color: #0e29fb;\n  -webkit-tap-highlight-color: rgba(14, 41, 251, 0.1);\n}\n.ui-button-primary.is-active {\n  background: rgba(14, 41, 251, 0.9);\n  border-color: rgba(14, 41, 251, 0.9);\n  color: #f8f8f8;\n}\n.ui-button-primary.is-plain {\n  background: transparent;\n  border-color: #0e29fb;\n  color: #0e29fb;\n  -webkit-tap-highlight-color: rgba(14, 41, 251, 0.3);\n}\n.ui-button-primary.is-plain:hover,\n.ui-button-primary.is-plain:focus {\n  border-color: #0e29fb;\n  color: #0e29fb;\n}\n.ui-button-primary.is-plain:active {\n  border-color: rgba(14, 41, 251, 0.9);\n  color: rgba(14, 41, 251, 0.9);\n  outline: none;\n}\n.ui-button-primary.no-hover-class {\n  color: #f8f8f8;\n  background-color: #0e29fb;\n  border-color: #0e29fb;\n  -webkit-tap-highlight-color: rgba(14, 41, 251, 0.1);\n}\n.ui-button-primary.no-hover-class:hover,\n.ui-button-primary.no-hover-class:focus {\n  color: #f8f8f8;\n}\n.ui-button-primary.no-hover-class:active {\n  color: #f8f8f8;\n  outline: none;\n}\n.ui-button-primary.no-hover-class.is-active {\n  background: rgba(14, 41, 251, 0.9);\n  border-color: rgba(14, 41, 251, 0.9);\n  color: #f8f8f8;\n}\n.ui-button-primary.no-hover-class.is-plain {\n  background: transparent;\n  border-color: #0e29fb;\n  color: #0e29fb;\n  -webkit-tap-highlight-color: rgba(14, 41, 251, 0.3);\n}\n.ui-button-primary.no-hover-class.is-plain:hover,\n.ui-button-primary.no-hover-class.is-plain:focus {\n  border-color: #0e29fb;\n  color: #0e29fb;\n}\n.ui-button-primary.no-hover-class.is-plain:active {\n  border-color: rgba(14, 41, 251, 0.9);\n  color: rgba(14, 41, 251, 0.9);\n  outline: none;\n}\n.ui-button-primary.is-disabled,\n.ui-button-primary.is-disabled:hover,\n.ui-button-primary.is-disabled:focus {\n  color: #eee;\n}\n.ui-button-success {\n  color: #f8f8f8;\n  background-color: #13ce66;\n  border-color: #13ce66;\n  -webkit-tap-highlight-color: rgba(19, 206, 102, 0.1);\n}\n.ui-button-success.is-active {\n  background: rgba(19, 206, 102, 0.9);\n  border-color: rgba(19, 206, 102, 0.9);\n  color: #f8f8f8;\n}\n.ui-button-success.is-plain {\n  background: transparent;\n  border-color: #13ce66;\n  color: #13ce66;\n  -webkit-tap-highlight-color: rgba(19, 206, 102, 0.3);\n}\n.ui-button-success.is-plain:hover,\n.ui-button-success.is-plain:focus {\n  border-color: #13ce66;\n  color: #13ce66;\n}\n.ui-button-success.is-plain:active {\n  border-color: rgba(19, 206, 102, 0.9);\n  color: rgba(19, 206, 102, 0.9);\n  outline: none;\n}\n.ui-button-success.no-hover-class {\n  color: #f8f8f8;\n  background-color: #13ce66;\n  border-color: #13ce66;\n  -webkit-tap-highlight-color: rgba(19, 206, 102, 0.1);\n}\n.ui-button-success.no-hover-class:hover,\n.ui-button-success.no-hover-class:focus {\n  color: #f8f8f8;\n}\n.ui-button-success.no-hover-class:active {\n  color: #f8f8f8;\n  outline: none;\n}\n.ui-button-success.no-hover-class.is-active {\n  background: rgba(19, 206, 102, 0.9);\n  border-color: rgba(19, 206, 102, 0.9);\n  color: #f8f8f8;\n}\n.ui-button-success.no-hover-class.is-plain {\n  background: transparent;\n  border-color: #13ce66;\n  color: #13ce66;\n  -webkit-tap-highlight-color: rgba(19, 206, 102, 0.3);\n}\n.ui-button-success.no-hover-class.is-plain:hover,\n.ui-button-success.no-hover-class.is-plain:focus {\n  border-color: #13ce66;\n  color: #13ce66;\n}\n.ui-button-success.no-hover-class.is-plain:active {\n  border-color: rgba(19, 206, 102, 0.9);\n  color: rgba(19, 206, 102, 0.9);\n  outline: none;\n}\n.ui-button-success.is-disabled,\n.ui-button-success.is-disabled:hover,\n.ui-button-success.is-disabled:focus {\n  color: #eee;\n}\n.ui-button-warn {\n  color: #f8f8f8;\n  background-color: #ff4949;\n  border-color: #ff4949;\n  -webkit-tap-highlight-color: rgba(255, 73, 73, 0.1);\n}\n.ui-button-warn.is-active {\n  background: rgba(255, 73, 73, 0.9);\n  border-color: rgba(255, 73, 73, 0.9);\n  color: #f8f8f8;\n}\n.ui-button-warn.is-plain {\n  background: transparent;\n  border-color: #ff4949;\n  color: #ff4949;\n  -webkit-tap-highlight-color: rgba(255, 73, 73, 0.3);\n}\n.ui-button-warn.is-plain:hover,\n.ui-button-warn.is-plain:focus {\n  border-color: #ff4949;\n  color: #ff4949;\n}\n.ui-button-warn.is-plain:active {\n  border-color: rgba(255, 73, 73, 0.9);\n  color: rgba(255, 73, 73, 0.9);\n  outline: none;\n}\n.ui-button-warn.no-hover-class {\n  color: #f8f8f8;\n  background-color: #ff4949;\n  border-color: #ff4949;\n  -webkit-tap-highlight-color: rgba(255, 73, 73, 0.1);\n}\n.ui-button-warn.no-hover-class:hover,\n.ui-button-warn.no-hover-class:focus {\n  color: #f8f8f8;\n}\n.ui-button-warn.no-hover-class:active {\n  color: #f8f8f8;\n  outline: none;\n}\n.ui-button-warn.no-hover-class.is-active {\n  background: rgba(255, 73, 73, 0.9);\n  border-color: rgba(255, 73, 73, 0.9);\n  color: #f8f8f8;\n}\n.ui-button-warn.no-hover-class.is-plain {\n  background: transparent;\n  border-color: #ff4949;\n  color: #ff4949;\n  -webkit-tap-highlight-color: rgba(255, 73, 73, 0.3);\n}\n.ui-button-warn.no-hover-class.is-plain:hover,\n.ui-button-warn.no-hover-class.is-plain:focus {\n  border-color: #ff4949;\n  color: #ff4949;\n}\n.ui-button-warn.no-hover-class.is-plain:active {\n  border-color: rgba(255, 73, 73, 0.9);\n  color: rgba(255, 73, 73, 0.9);\n  outline: none;\n}\n.ui-button-warn.is-disabled,\n.ui-button-warn.is-disabled:hover,\n.ui-button-warn.is-disabled:focus {\n  color: #eee;\n}\n.ui-button-danger {\n  color: #f8f8f8;\n  background-color: #ff4949;\n  border-color: #ff4949;\n  -webkit-tap-highlight-color: rgba(255, 73, 73, 0.1);\n}\n.ui-button-danger.is-active {\n  background: rgba(255, 73, 73, 0.9);\n  border-color: rgba(255, 73, 73, 0.9);\n  color: #f8f8f8;\n}\n.ui-button-danger.is-plain {\n  background: transparent;\n  border-color: #ff4949;\n  color: #ff4949;\n  -webkit-tap-highlight-color: rgba(255, 73, 73, 0.3);\n}\n.ui-button-danger.is-plain:hover,\n.ui-button-danger.is-plain:focus {\n  border-color: #ff4949;\n  color: #ff4949;\n}\n.ui-button-danger.is-plain:active {\n  border-color: rgba(255, 73, 73, 0.9);\n  color: rgba(255, 73, 73, 0.9);\n  outline: none;\n}\n.ui-button-danger.no-hover-class {\n  color: #f8f8f8;\n  background-color: #ff4949;\n  border-color: #ff4949;\n  -webkit-tap-highlight-color: rgba(255, 73, 73, 0.1);\n}\n.ui-button-danger.no-hover-class:hover,\n.ui-button-danger.no-hover-class:focus {\n  color: #f8f8f8;\n}\n.ui-button-danger.no-hover-class:active {\n  color: #f8f8f8;\n  outline: none;\n}\n.ui-button-danger.no-hover-class.is-active {\n  background: rgba(255, 73, 73, 0.9);\n  border-color: rgba(255, 73, 73, 0.9);\n  color: #f8f8f8;\n}\n.ui-button-danger.no-hover-class.is-plain {\n  background: transparent;\n  border-color: #ff4949;\n  color: #ff4949;\n  -webkit-tap-highlight-color: rgba(255, 73, 73, 0.3);\n}\n.ui-button-danger.no-hover-class.is-plain:hover,\n.ui-button-danger.no-hover-class.is-plain:focus {\n  border-color: #ff4949;\n  color: #ff4949;\n}\n.ui-button-danger.no-hover-class.is-plain:active {\n  border-color: rgba(255, 73, 73, 0.9);\n  color: rgba(255, 73, 73, 0.9);\n  outline: none;\n}\n.ui-button-danger.is-disabled,\n.ui-button-danger.is-disabled:hover,\n.ui-button-danger.is-disabled:focus {\n  color: #eee;\n}\n.ui-button-large {\n  padding: 0 19px;\n  font-size: 16px;\n  border-radius: 4px;\n}\n.ui-button-small {\n  padding: 0 9px;\n  font-size: 12px;\n  border-radius: 4px;\n}\n.ui-button-mini {\n  padding: 0 4px;\n  font-size: 11px;\n  border-radius: 4px;\n}\n.ui-button-mini.is-full-width {\n  width: auto;\n}\n.ui-icon-loading {\n  display: inline-block;\n  width: 12px;\n  height: 12px;\n  margin-right: .3em;\n  background-image: url(\"../../../../touchui/dist/styles/touchui/loading-light.svg\");\n  background-position: 0% 50%;\n  background-repeat: no-repeat;\n  -webkit-animation: LoadingAnimate 1s steps(12, end) infinite;\n          animation: LoadingAnimate 1s steps(12, end) infinite;\n}\n.ui-button-mini {\n  line-height: 2.3;\n}\n/* 1像素解决方案 */\n/*\n * 清除1px\n */\n/*\n * 清除浮动\n */\n/*\n * mobile\n */\n/*\n * 1px\n */\n/*\n * text\n */\n.ui-row {\n  position: relative;\n  -webkit-flex: 1;\n          flex: 1;\n  display: -webkit-flex;\n  display: flex;\n  -webkit-justify-content: center;\n          justify-content: center;\n}\n.ui-row-border-top:before {\n  content: \" \";\n  position: absolute;\n  left: 0;\n  top: 0;\n  right: 0;\n  height: 1px;\n  border-top: 1px solid #C7C7C7;\n  color: #C7C7C7;\n  -webkit-transform-origin: 0 0;\n          transform-origin: 0 0;\n  -webkit-transform: scaleY(0.5);\n          transform: scaleY(0.5);\n}\n.ui-row-border-bottom:after {\n  content: \" \";\n  position: absolute;\n  left: 0;\n  bottom: 0;\n  right: 0;\n  height: 1px;\n  border-bottom: 1px solid #C7C7C7;\n  color: #C7C7C7;\n  -webkit-transform-origin: 0 100%;\n          transform-origin: 0 100%;\n  -webkit-transform: scaleY(0.5);\n          transform: scaleY(0.5);\n}\n.ui-row-img img,\n.ui-row-icon i {\n  position: absolute;\n  top: 50%;\n  left: 50%;\n  -webkit-transform: translate(-50%, -50%);\n          transform: translate(-50%, -50%);\n}\n.ui-col {\n  position: relative;\n  min-width: 0;\n  display: -webkit-flex;\n  display: flex;\n  -webkit-flex: 1;\n          flex: 1;\n}\n.ui-col.valign-top {\n  -webkit-align-items: flex-start;\n          align-items: flex-start;\n}\n.ui-col.valign-bottom {\n  -webkit-align-items: flex-end;\n          align-items: flex-end;\n}\n.ui-col.valign-middle {\n  -webkit-align-items: center;\n          align-items: center;\n}\n.ui-col.align-left {\n  -webkit-justify-content: flex-start;\n          justify-content: flex-start;\n}\n.ui-col.align-center {\n  -webkit-justify-content: center;\n          justify-content: center;\n}\n.ui-col.align-right {\n  -webkit-justify-content: flex-end;\n          justify-content: flex-end;\n}\n.ui-col .ui-col-content {\n  height: 100%;\n  min-width: 0;\n  -webkit-flex-direction: column;\n          flex-direction: column;\n  width: 100%;\n  display: -webkit-flex;\n  display: flex;\n}\n.ui-col .ui-col-content.flex-row {\n  -webkit-flex-direction: row;\n          flex-direction: row;\n  -webkit-justify-content: center;\n          justify-content: center;\n}\n.ui-col .ui-col-content.flex-column {\n  -webkit-flex-direction: column;\n          flex-direction: column;\n}\n.ui-col .ui-col-content.valign-top {\n  -webkit-justify-content: flex-start;\n          justify-content: flex-start;\n}\n.ui-col .ui-col-content.valign-bottom {\n  -webkit-justify-content: flex-end;\n          justify-content: flex-end;\n}\n.ui-col .ui-col-content.valign-middle {\n  -webkit-justify-content: center;\n          justify-content: center;\n}\n.ui-col .ui-col-content.align-left {\n  -webkit-align-items: flex-start;\n          align-items: flex-start;\n}\n.ui-col .ui-col-content.align-center {\n  -webkit-align-items: center;\n          align-items: center;\n}\n.ui-col .ui-col-content.align-right {\n  -webkit-align-items: flex-end;\n          align-items: flex-end;\n}\n.ui-col .ui-col-content.tap-effect:active {\n  background-color: rgba(231, 231, 231, 0.5);\n}\n.ui-col-border-left:before {\n  content: \" \";\n  position: absolute;\n  left: 0;\n  top: 0;\n  width: 1px;\n  bottom: 0;\n  border-left: 1px solid #C7C7C7;\n  color: #C7C7C7;\n  -webkit-transform-origin: 0 0;\n          transform-origin: 0 0;\n  -webkit-transform: scaleX(0.5);\n          transform: scaleX(0.5);\n}\n.ui-col-border-right:after {\n  content: \" \";\n  position: absolute;\n  right: 0;\n  top: 0;\n  width: 1px;\n  bottom: 0;\n  border-right: 1px solid #C7C7C7;\n  color: #C7C7C7;\n  -webkit-transform-origin: 100% 0;\n          transform-origin: 100% 0;\n  -webkit-transform: scaleX(0.5);\n          transform: scaleX(0.5);\n}\n.ui-col-align-center {\n  text-align: center;\n}\n.ui-col-align-right {\n  text-align: right;\n}\n.ui-col-12 {\n  float: left;\n  height: 100%;\n  width: 100%;\n  -webkit-flex: 0 0 100%;\n          flex: 0 0 100%;\n}\n.ui-col-11 {\n  float: left;\n  height: 100%;\n  width: 91.66666667%;\n  -webkit-flex: 0 0 91.66666667%;\n          flex: 0 0 91.66666667%;\n}\n.ui-col-10 {\n  float: left;\n  height: 100%;\n  width: 83.33333333%;\n  -webkit-flex: 0 0 83.33333333%;\n          flex: 0 0 83.33333333%;\n}\n.ui-col-9 {\n  float: left;\n  height: 100%;\n  width: 75%;\n  -webkit-flex: 0 0 75%;\n          flex: 0 0 75%;\n}\n.ui-col-8 {\n  float: left;\n  height: 100%;\n  width: 66.66666667%;\n  -webkit-flex: 0 0 66.66666667%;\n          flex: 0 0 66.66666667%;\n}\n.ui-col-7 {\n  float: left;\n  height: 100%;\n  width: 58.33333333%;\n  -webkit-flex: 0 0 58.33333333%;\n          flex: 0 0 58.33333333%;\n}\n.ui-col-6 {\n  float: left;\n  height: 100%;\n  width: 50%;\n  -webkit-flex: 0 0 50%;\n          flex: 0 0 50%;\n}\n.ui-col-5 {\n  float: left;\n  height: 100%;\n  width: 41.66666667%;\n  -webkit-flex: 0 0 41.66666667%;\n          flex: 0 0 41.66666667%;\n}\n.ui-col-4 {\n  float: left;\n  height: 100%;\n  width: 33.33333333%;\n  -webkit-flex: 0 0 33.33333333%;\n          flex: 0 0 33.33333333%;\n}\n.ui-col-3 {\n  float: left;\n  height: 100%;\n  width: 25%;\n  -webkit-flex: 0 0 25%;\n          flex: 0 0 25%;\n}\n.ui-col-2 {\n  float: left;\n  height: 100%;\n  width: 16.66666667%;\n  -webkit-flex: 0 0 16.66666667%;\n          flex: 0 0 16.66666667%;\n}\n.ui-col-1 {\n  float: left;\n  height: 100%;\n  width: 8.33333333%;\n  -webkit-flex: 0 0 8.33333333%;\n          flex: 0 0 8.33333333%;\n}\n.ui-text.selectable {\n  -webkit-user-select: all;\n          user-select: all;\n}\n/* TouchUI Scoped Styles */\n"],"sourceRoot":""}]);

// exports


/***/ }),

/***/ 347:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_babel_runtime_core_js_json_stringify__ = __webpack_require__(60);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_babel_runtime_core_js_json_stringify___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_babel_runtime_core_js_json_stringify__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_touchui_dist_components_text__ = __webpack_require__(88);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_touchui_dist_components_col__ = __webpack_require__(91);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_touchui_dist_components_row__ = __webpack_require__(92);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_touchui_dist_components_button__ = __webpack_require__(182);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_touchui_dist_components_input__ = __webpack_require__(186);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_touchui_dist_components_view__ = __webpack_require__(87);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7_touchui_dist_components_page__ = __webpack_require__(197);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8_static_utils_util__ = __webpack_require__(187);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8_static_utils_util___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_8_static_utils_util__);

//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//









/* harmony default export */ __webpack_exports__["default"] = ({
  components: {
    UiPage: __WEBPACK_IMPORTED_MODULE_7_touchui_dist_components_page__["a" /* default */],
    UiView: __WEBPACK_IMPORTED_MODULE_6_touchui_dist_components_view__["a" /* default */],
    UiInput: __WEBPACK_IMPORTED_MODULE_5_touchui_dist_components_input__["a" /* default */],
    UiButton: __WEBPACK_IMPORTED_MODULE_4_touchui_dist_components_button__["a" /* default */],
    UiRow: __WEBPACK_IMPORTED_MODULE_3_touchui_dist_components_row__["a" /* default */],
    UiCol: __WEBPACK_IMPORTED_MODULE_2_touchui_dist_components_col__["a" /* default */],
    UiText: __WEBPACK_IMPORTED_MODULE_1_touchui_dist_components_text__["a" /* default */]
  },

  config: {
    "navigationStyle": "custom"
  },
  data: function data() {
    return {
      phone: '', //手机号
      password: '' //密码
    };
  },
  created: function created() {
    var key = localStorage.getItem('auth_key');
    // if(key != null){
    //     ui.redirectTo({
    //         url:'/pages/layout/home'
    //     })
    // }
  },

  methods: {
    // 跳转到注册页面
    register: function register() {
      ui.redirectTo({
        url: '/pages/login_register/register'
      });
    },

    // 跳转到忘记密码页面
    forget: function forget() {
      ui.redirectTo({
        url: '/pages/login_register/forget'
      });
    },

    // 提交登录
    submit: function submit() {
      var app = this;
      if (this.phone == '') {
        ui.showAlert({
          title: '温馨提示',
          content: "手机号不能为空"
        });
      } else if (this.phone.length != 11) {
        ui.showAlert({
          title: '温馨提示',
          content: "手机号长度不符，请重新输入",
          buttonText: '重新输入',
          success: function success() {
            app.phone = '';
          }
        });
      } else if (!/^1(3|4|5|6|7|8|9)\d{9}$/.test(this.phone)) {
        ui.showAlert({
          title: '温馨提示',
          content: "手机号不符合要求，请重新输入",
          buttonText: '重新输入',
          success: function success() {
            app.phone = '';
          }
        });
      } else if (this.password == '') {
        ui.showAlert({
          title: '温馨提示',
          content: "密码不能为空"
        });
      } else if (this.password.length < 6 || this.password.length > 12) {
        ui.showAlert({
          title: '温馨提示',
          content: "密码长度不符，请重新输入",
          buttonText: '重新输入',
          success: function success() {
            app.password = '';
          }
        });
      } else if (!/^(?![0-9]+$)(?![a-zA-Z]+$)[0-9A-Za-z]{6,12}$/.test(this.password)) {
        ui.showAlert({
          title: '温馨提示',
          content: "密码不符合要求，请重新输入",
          buttonText: '重新输入',
          success: function success() {
            app.password = '';
          }
        });
      } else {
        console.log(__WEBPACK_IMPORTED_MODULE_8_static_utils_util__["wx"]);
        Object(__WEBPACK_IMPORTED_MODULE_8_static_utils_util__["wx"])('/user/login', {
          "mobile": app.phone,
          "password": app.password
        }).then(function (data) {
          console.log(data);
          if (data.code == 200) {
            ui.showToast({ title: '登录成功', icon: 'success' });
            localStorage.setItem('auth_key', data.res.auth_key);
            localStorage.setItem('info', __WEBPACK_IMPORTED_MODULE_0_babel_runtime_core_js_json_stringify___default()({ phone: data.res.mobile, invite: data.res.invitation_code }));
            // setTimeout(()=>{
            ui.redirectTo({
              url: '/pages/layout/home'
            });
            // },1500)
          } else if (data.code == 403) {
            ui.showAlert({
              title: '温馨提示',
              content: data.msg,
              buttonText: '重新输入',
              success: function success() {
                app.password = '';
              }
            });
          }
        });
      }
    }
  }
});

/***/ }),

/***/ 348:
/***/ (function(module, exports) {

module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('ui-page', {
    staticClass: "register page-2bdaef"
  }, [_c('div', {
    staticClass: "banner ui-view"
  }), _vm._v(" "), _c('div', {
    staticClass: "bottom ui-view"
  }, [_c('div', {
    staticClass: "main ui-view"
  }, [_c('ui-input', {
    attrs: {
      "type": "tel",
      "placeholder": "请输入手机号",
      "placeholder-class": "ui-input-tip",
      "maxlength": "11"
    },
    model: {
      value: (_vm.phone),
      callback: function($$v) {
        _vm.phone = $$v
      },
      expression: "phone"
    }
  }), _vm._v(" "), _c('ui-input', {
    attrs: {
      "type": "password",
      "placeholder": "请输入密码(6-12字母、数字组合)",
      "placeholder-class": "ui-input-tip",
      "maxlength": "12"
    },
    model: {
      value: (_vm.password),
      callback: function($$v) {
        _vm.password = $$v
      },
      expression: "password"
    }
  }), _vm._v(" "), _c('ui-button', {
    staticClass: "submit",
    attrs: {
      "type": "primary"
    },
    nativeOn: {
      "tap": function($event) {
        _vm.submit($event)
      }
    }
  }, [_vm._v("登 录")]), _vm._v(" "), _c('div', {
    staticClass: "ui-row",
    style: ({})
  }, [_c('div', {
    staticClass: "ui-col ui-col-6",
    style: ({
      'flex': '0 0 50%'
    })
  }, [_c('div', {
    staticClass: "ui-col-content"
  }, [_c('ui-text', {
    nativeOn: {
      "tap": function($event) {
        _vm.register($event)
      }
    }
  }, [_vm._v("立即注册")])], 1)]), _vm._v(" "), _c('div', {
    staticClass: "ui-col ui-col-6",
    staticStyle: {
      "text-align": "right"
    },
    style: ({
      'flex': '0 0 50%'
    })
  }, [_c('div', {
    staticClass: "ui-col-content"
  }, [_c('ui-text', {
    nativeOn: {
      "tap": function($event) {
        _vm.forget($event)
      }
    }
  }, [_vm._v("忘记密码")])], 1)])])], 1)])])
},staticRenderFns: []}

/***/ })

});