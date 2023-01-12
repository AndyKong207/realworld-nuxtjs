exports.ids = [5];
exports.modules = {

/***/ 30:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--2-0!./node_modules/vue-loader/lib/loaders/templateLoader.js??ref--6!./node_modules/vue-loader/lib??vue-loader-options!./pages/login/index.vue?vue&type=template&id=a84ae7fa&scoped=true&
var render = function render() {
  var _vm = this,
    _c = _vm._self._c;
  return _c('div', {
    staticClass: "auth-page"
  }, [_vm._ssrNode("<div class=\"container page\" data-v-a84ae7fa>", "</div>", [_vm._ssrNode("<div class=\"row\" data-v-a84ae7fa>", "</div>", [_vm._ssrNode("<div class=\"col-md-6 offset-md-3 col-xs-12\" data-v-a84ae7fa>", "</div>", [_vm._ssrNode("<h1 class=\"text-xs-center\" data-v-a84ae7fa>" + _vm._ssrEscape(_vm._s(_vm.isLogin ? 'Sign in' : 'Sign up')) + "</h1> "), _vm._ssrNode("<p class=\"text-xs-center\" data-v-a84ae7fa>", "</p>", [_vm.isLogin ? _c('nuxt-link', {
    attrs: {
      "to": "/register"
    }
  }, [_vm._v("Need an account?")]) : _c('nuxt-link', {
    attrs: {
      "to": "/login"
    }
  }, [_vm._v("Have an account?")])], 1), _vm._ssrNode(" <ul class=\"error-messages\" data-v-a84ae7fa>" + _vm._ssrList(_vm.errors, function (messages, field) {
    return _vm._ssrList(messages, function (message, index) {
      return "<li data-v-a84ae7fa>" + _vm._ssrEscape("\n              " + _vm._s(field) + " " + _vm._s(message) + "\n            ") + "</li>";
    });
  }) + "</ul> <form data-v-a84ae7fa>" + (!_vm.isLogin ? "<fieldset class=\"form-group\" data-v-a84ae7fa><input type=\"text\" placeholder=\"Your Name\" required=\"required\"" + _vm._ssrAttr("value", _vm.user.username) + " class=\"form-control form-control-lg\" data-v-a84ae7fa></fieldset>" : "<!---->") + " <fieldset class=\"form-group\" data-v-a84ae7fa><input type=\"email\" placeholder=\"Email\" required=\"required\"" + _vm._ssrAttr("value", _vm.user.email) + " class=\"form-control form-control-lg\" data-v-a84ae7fa></fieldset> <fieldset class=\"form-group\" data-v-a84ae7fa><input type=\"password\" placeholder=\"Password\" required=\"required\"" + _vm._ssrAttr("value", _vm.user.password) + " class=\"form-control form-control-lg\" data-v-a84ae7fa></fieldset> <button class=\"btn btn-lg btn-primary pull-xs-right\" data-v-a84ae7fa>" + _vm._ssrEscape(_vm._s(_vm.isLogin ? 'Sign in' : 'Sign up')) + "</button></form>")], 2)])])]);
};
var staticRenderFns = [];

// CONCATENATED MODULE: ./pages/login/index.vue?vue&type=template&id=a84ae7fa&scoped=true&

// EXTERNAL MODULE: ./plugins/request.js
var request = __webpack_require__(5);

// CONCATENATED MODULE: ./api/user.js


// 用户登录
const login = data => {
  return Object(request["b" /* request */])({
    method: 'POST',
    url: '/api/users/login',
    data
  });
};

// 用户注册
const register = data => {
  return Object(request["b" /* request */])({
    method: 'POST',
    url: '/api/users',
    data
  });
};
// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--2-0!./node_modules/vue-loader/lib??vue-loader-options!./pages/login/index.vue?vue&type=script&lang=js&


// 紧在客户端加载
const Cookie =  false ? undefined : undefined;
/* harmony default export */ var loginvue_type_script_lang_js_ = ({
  middleware: 'notAuthenticated',
  name: 'LoginPage',
  computed: {
    isLogin() {
      return this.$route.name === 'login';
    }
  },
  data() {
    return {
      user: {
        username: '',
        email: '',
        password: ''
      },
      errors: {}
    };
  },
  methods: {
    async onSubmit() {
      try {
        const {
          data
        } = this.isLogin ? await login({
          user: this.user
        }) : await register({
          user: this.user
        });
        console.log(data);
        // TODO: 保存用户登录状态
        this.$store.commit('setUser', data.user);
        // 防止刷新页面数据丢失，把数据持久化
        Cookie.set('user', JSON.stringify(data.user));
        // 跳转首页
        this.$router.push('/');
      } catch (error) {
        console.dir(error);
        this.errors = error.response.data.errors;
      }
    }
  }
});
// CONCATENATED MODULE: ./pages/login/index.vue?vue&type=script&lang=js&
 /* harmony default export */ var pages_loginvue_type_script_lang_js_ = (loginvue_type_script_lang_js_); 
// EXTERNAL MODULE: ./node_modules/vue-loader/lib/runtime/componentNormalizer.js
var componentNormalizer = __webpack_require__(2);

// CONCATENATED MODULE: ./pages/login/index.vue



function injectStyles (context) {
  
  
}

/* normalize component */

var component = Object(componentNormalizer["a" /* default */])(
  pages_loginvue_type_script_lang_js_,
  render,
  staticRenderFns,
  false,
  injectStyles,
  "a84ae7fa",
  "248f6ede"
  
)

/* harmony default export */ var pages_login = __webpack_exports__["default"] = (component.exports);

/***/ })

};;
//# sourceMappingURL=5.js.map