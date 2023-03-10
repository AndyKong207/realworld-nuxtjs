import Vue from 'vue'
import Router from 'vue-router'
import { normalizeURL, decode } from 'ufo'
import { interopDefault } from './utils'
import scrollBehavior from './router.scrollBehavior.js'

const _46fc841a = () => interopDefault(import('../pages/layout' /* webpackChunkName: "" */))
const _2a0bd5e8 = () => interopDefault(import('../pages/home' /* webpackChunkName: "" */))
const _17a72f80 = () => interopDefault(import('../pages/login' /* webpackChunkName: "" */))
const _b87fc000 = () => interopDefault(import('../pages/profile' /* webpackChunkName: "" */))
const _6583f0ac = () => interopDefault(import('../pages/settings' /* webpackChunkName: "" */))
const _5e9a3794 = () => interopDefault(import('../pages/editor' /* webpackChunkName: "" */))
const _eaeb3966 = () => interopDefault(import('../pages/article' /* webpackChunkName: "" */))

const emptyFn = () => {}

Vue.use(Router)

export const routerOptions = {
  mode: 'history',
  base: '/',
  linkActiveClass: 'active',
  linkExactActiveClass: 'nuxt-link-exact-active',
  scrollBehavior,

  routes: [{
    path: "/",
    component: _46fc841a,
    children: [{
      path: "",
      component: _2a0bd5e8,
      name: "home"
    }, {
      path: "/login",
      component: _17a72f80,
      name: "login"
    }, {
      path: "/register",
      component: _17a72f80,
      name: "register"
    }, {
      path: "/profile/:username",
      component: _b87fc000,
      name: "profile"
    }, {
      path: "/settings",
      component: _6583f0ac,
      name: "settings"
    }, {
      path: "/editor",
      component: _5e9a3794,
      name: "editor"
    }, {
      path: "/article/:slug",
      component: _eaeb3966,
      name: "article"
    }]
  }],

  fallback: false
}

export function createRouter (ssrContext, config) {
  const base = (config._app && config._app.basePath) || routerOptions.base
  const router = new Router({ ...routerOptions, base  })

  // TODO: remove in Nuxt 3
  const originalPush = router.push
  router.push = function push (location, onComplete = emptyFn, onAbort) {
    return originalPush.call(this, location, onComplete, onAbort)
  }

  const resolve = router.resolve.bind(router)
  router.resolve = (to, current, append) => {
    if (typeof to === 'string') {
      to = normalizeURL(to)
    }
    return resolve(to, current, append)
  }

  return router
}
