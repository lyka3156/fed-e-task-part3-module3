import Vue from 'vue'
import Router from 'vue-router'
import { interopDefault } from './utils'
import scrollBehavior from './router.scrollBehavior.js'

const _5cd243ce = () => interopDefault(import('..\\pages\\layout' /* webpackChunkName: "" */))
const _2e2bd2fa = () => interopDefault(import('..\\pages\\home' /* webpackChunkName: "" */))
const _34910245 = () => interopDefault(import('..\\pages\\login' /* webpackChunkName: "" */))
const _2d805585 = () => interopDefault(import('..\\pages\\profile' /* webpackChunkName: "" */))
const _13ca6bc7 = () => interopDefault(import('..\\pages\\settings' /* webpackChunkName: "" */))
const _144a98d2 = () => interopDefault(import('..\\pages\\article' /* webpackChunkName: "" */))
const _51036a11 = () => interopDefault(import('..\\pages\\editor' /* webpackChunkName: "" */))
const _5391ebac = () => interopDefault(import('..\\pages\\404.vue' /* webpackChunkName: "" */))

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
    component: _5cd243ce,
    children: [{
      path: "/",
      component: _2e2bd2fa,
      name: "home"
    }, {
      path: "/login",
      component: _34910245,
      name: "login"
    }, {
      path: "/register",
      component: _34910245,
      name: "register"
    }, {
      path: "/profile/:username",
      component: _2d805585,
      name: "profile"
    }, {
      path: "/profile/:username/favorites",
      component: _2d805585,
      name: "profileFavorites"
    }, {
      path: "/settings",
      component: _13ca6bc7,
      name: "settings"
    }, {
      path: "/article/:id",
      component: _144a98d2,
      name: "article"
    }, {
      path: "/editor",
      component: _51036a11,
      name: "articleCreate"
    }, {
      path: "/editor/:id",
      component: _51036a11,
      name: "articleEdit"
    }]
  }, {
    path: "*",
    component: _5391ebac,
    name: "custom"
  }],

  fallback: false
}

export function createRouter () {
  return new Router(routerOptions)
}
