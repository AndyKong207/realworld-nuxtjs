exports.ids = [4];
exports.modules = {

/***/ 31:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--2-0!./node_modules/vue-loader/lib/loaders/templateLoader.js??ref--6!./node_modules/vue-loader/lib??vue-loader-options!./pages/layout/index.vue?vue&type=template&id=6e22edc9&scoped=true&
var render = function render() {
  var _vm = this,
    _c = _vm._self._c;
  return _c('div', [_vm._ssrNode("<nav class=\"navbar navbar-light\" data-v-6e22edc9>", "</nav>", [_vm._ssrNode("<div class=\"container\" data-v-6e22edc9>", "</div>", [_c('nuxt-link', {
    staticClass: "navbar-brand",
    attrs: {
      "to": "index.html"
    }
  }, [_vm._v("conduit")]), _vm._ssrNode(" "), _vm._ssrNode("<ul class=\"nav navbar-nav pull-xs-right\" data-v-6e22edc9>", "</ul>", [_vm._ssrNode("<li class=\"nav-item\" data-v-6e22edc9>", "</li>", [_c('nuxt-link', {
    staticClass: "nav-link",
    attrs: {
      "to": "/",
      "exact": ""
    }
  }, [_vm._v("Home")])], 1), _vm._ssrNode(" "), _vm.user ? [_vm._ssrNode("<li class=\"nav-item\" data-v-6e22edc9>", "</li>", [_c('nuxt-link', {
    staticClass: "nav-link",
    attrs: {
      "to": "/editor"
    }
  }, [_c('i', {
    staticClass: "ion-compose"
  }), _vm._v(" New Article ")])], 1), _vm._ssrNode(" "), _vm._ssrNode("<li class=\"nav-item\" data-v-6e22edc9>", "</li>", [_c('nuxt-link', {
    staticClass: "nav-link",
    attrs: {
      "to": "/settings"
    }
  }, [_c('i', {
    staticClass: "ion-gear-nuxt-link"
  }), _vm._v(" Settings ")])], 1), _vm._ssrNode(" "), _vm._ssrNode("<li class=\"nav-item\" data-v-6e22edc9>", "</li>", [_c('nuxt-link', {
    staticClass: "nav-link",
    attrs: {
      "to": "/settings"
    }
  }, [_c('img', {
    staticClass: "user-pic",
    attrs: {
      "src": _vm.user.image
    }
  }), _vm._v("\n              " + _vm._s(_vm.user.username) + "\n            ")])], 1)] : [_vm._ssrNode("<li class=\"nav-item\" data-v-6e22edc9>", "</li>", [_c('nuxt-link', {
    staticClass: "nav-link",
    attrs: {
      "to": "/login"
    }
  }, [_vm._v("Sign in")])], 1), _vm._ssrNode(" "), _vm._ssrNode("<li class=\"nav-item\" data-v-6e22edc9>", "</li>", [_c('nuxt-link', {
    staticClass: "nav-link",
    attrs: {
      "to": "/register"
    }
  }, [_vm._v("Sign up")])], 1)]], 2)], 2)]), _vm._ssrNode(" "), _c('nuxt-child'), _vm._ssrNode(" "), _vm._ssrNode("<footer data-v-6e22edc9>", "</footer>", [_vm._ssrNode("<div class=\"container\" data-v-6e22edc9>", "</div>", [_c('nuxt-link', {
    staticClass: "logo-font",
    attrs: {
      "to": "/"
    }
  }, [_vm._v("conduit")]), _vm._ssrNode(" "), _vm._ssrNode("<span class=\"attribution\" data-v-6e22edc9>", "</span>", [_vm._ssrNode("\n        An interactive learning project from "), _c('nuxt-link', {
    attrs: {
      "to": "https://thinkster.io"
    }
  }, [_vm._v("Thinkster")]), _vm._ssrNode(". Code &amp;\n        design licensed under MIT.\n      ")], 2)], 2)])], 2);
};
var staticRenderFns = [];

// CONCATENATED MODULE: ./pages/layout/index.vue?vue&type=template&id=6e22edc9&scoped=true&

// EXTERNAL MODULE: external "vuex"
var external_vuex_ = __webpack_require__(3);

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--2-0!./node_modules/vue-loader/lib??vue-loader-options!./pages/layout/index.vue?vue&type=script&lang=js&

/* harmony default export */ var layoutvue_type_script_lang_js_ = ({
  name: 'LayoutIndex',
  computed: {
    ...Object(external_vuex_["mapState"])(['user'])
  }
});
// CONCATENATED MODULE: ./pages/layout/index.vue?vue&type=script&lang=js&
 /* harmony default export */ var pages_layoutvue_type_script_lang_js_ = (layoutvue_type_script_lang_js_); 
// EXTERNAL MODULE: ./node_modules/vue-loader/lib/runtime/componentNormalizer.js
var componentNormalizer = __webpack_require__(2);

// CONCATENATED MODULE: ./pages/layout/index.vue



function injectStyles (context) {
  
  
}

/* normalize component */

var component = Object(componentNormalizer["a" /* default */])(
  pages_layoutvue_type_script_lang_js_,
  render,
  staticRenderFns,
  false,
  injectStyles,
  "6e22edc9",
  "5a0b3d2a"
  
)

/* harmony default export */ var layout = __webpack_exports__["default"] = (component.exports);

/***/ })

};;
//# sourceMappingURL=4.js.map