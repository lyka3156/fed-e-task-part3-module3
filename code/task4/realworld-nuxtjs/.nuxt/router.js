import Vue from 'vue'
import Router from 'vue-router'
import { interopDefault } from './utils'
import scrollBehavior from './router.scrollBehavior.js'

const _10f1bdac = () => interopDefault(import('..\\pages\\layout' /* webpackChunkName: "" */))
const _0fba6fe1 = () => interopDefault(import('..\\pages\\home' /* webpackChunkName: "" */))
const _306856b2 = () => interopDefault(import('..\\pages\\login' /* webpackChunkName: "" */))
const _055fd132 = () => interopDefault(import('..\\pages\\profile' /* webpackChunkName: "" */))
const _3df2e625 = () => interopDefault(import('..\\pages\\settings' /* webpackChunkName: "" */))
const _37cb4a98 = () => interopDefault(import('..\\pages\\article' /* webpackChunkName: "" */))
const _0522e3ef = () => interopDefault(import('..\\pages\\editor' /* webpackChunkName: "" */))
const _2361ad8e = () => interopDefault(import('..\\pages\\404.vue' /* webpackChunkName: "" */))

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
    component: _10f1bdac,
    children: [{
      path: "/",
      component: _0fba6fe1,
      name: "home"
    }, {
      path: "/login",
      component: _306856b2,
      name: "login"
    }, {
      path: "/register",
      component: _306856b2,
      name: "register"
    }, {
      path: "/profile/:username",
      component: _055fd132,
      name: "profile"
    }, {
      path: "/profile/:username/favorites",
      component: _055fd132,
      name: "profileFavorites"
    }, {
      path: "/settings",
      component: _3df2e625,
      name: "settings"
    }, {
      path: "/article/:slug",
      component: _37cb4a98,
      name: "article"
    }, {
      path: "/editor",
      component: _0522e3ef,
      name: "articleCreate"
    }, {
      path: "/editor/:slug",
      component: _0522e3ef,
      name: "articleEdit"
    }]
  }, {
    path: "*",
    component: _2361ad8e,
    name: "custom"
  }],

  fallback: false
}

export function createRouter () {
  return new Router(routerOptions)
}
