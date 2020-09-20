import Vue from 'vue'
import Router from 'vue-router'
import { interopDefault } from './utils'
import scrollBehavior from './router.scrollBehavior.js'

const _4970e674 = () => interopDefault(import('..\\pages\\layout' /* webpackChunkName: "" */))
const _f8e5850a = () => interopDefault(import('..\\pages\\home' /* webpackChunkName: "" */))
const _235a8b66 = () => interopDefault(import('..\\pages\\login' /* webpackChunkName: "" */))
const _7db42b8d = () => interopDefault(import('..\\pages\\profile' /* webpackChunkName: "" */))
const _6bdd5282 = () => interopDefault(import('..\\pages\\settings' /* webpackChunkName: "" */))
const _647e6eda = () => interopDefault(import('..\\pages\\article' /* webpackChunkName: "" */))
const _610e99ee = () => interopDefault(import('..\\pages\\editor' /* webpackChunkName: "" */))
const _b8747c98 = () => interopDefault(import('..\\pages\\404.vue' /* webpackChunkName: "" */))

// TODO: remove in Nuxt 3
const emptyFn = () => {}
const originalPush = Router.prototype.push
Router.prototype.push = function push (location, onComplete = emptyFn, onAbort) {
  return originalPush.call(this, location, onComplete, onAbort)
}

Vue.use(Router)

export const routerOptions = {
  mode: 'history',
  base: decodeURI('/'),
  linkActiveClass: 'active',
  linkExactActiveClass: 'nuxt-link-exact-active',
  scrollBehavior,

  routes: [{
    path: "/",
    component: _4970e674,
    children: [{
      path: "/",
      component: _f8e5850a,
      name: "home"
    }, {
      path: "/login",
      component: _235a8b66,
      name: "login"
    }, {
      path: "/register",
      component: _235a8b66,
      name: "register"
    }, {
      path: "/profile/:username",
      component: _7db42b8d,
      name: "profile"
    }, {
      path: "/profile/:username/favorites",
      component: _7db42b8d,
      name: "profileFavorites"
    }, {
      path: "/settings",
      component: _6bdd5282,
      name: "settings"
    }, {
      path: "/article/:slug",
      component: _647e6eda,
      name: "article"
    }, {
      path: "/editor",
      component: _610e99ee,
      name: "articleCreate"
    }, {
      path: "/editor/:slug",
      component: _610e99ee,
      name: "articleEdit"
    }]
  }, {
    path: "*",
    component: _b8747c98,
    name: "custom"
  }],

  fallback: false
}

export function createRouter () {
  return new Router(routerOptions)
}
