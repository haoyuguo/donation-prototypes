# SPA with multiple routes (with Vue Router)

Now let's get more real.  An application usually needs to have more than one route.  Vue Router does that, but 

1. We don't want hash (#) in the URL
2. How does work together with Laravel routes ?

Thanks to the great people from Vue.js and Laravel community (see [references](##references)), we now know how to do this.

## Start with a set of tests

Let's create two new tests for routes "/donate" (public page) and "/admin" (admin home page, which later should be set up with proper authentication).

- Create `donate_spec.js` and `admin_spec.js`
- Run them -- of course they would fail because neither route is in place yet

## Set up Vue Router

### Install Vue Router 

Run `npm install vue-router`

### Set up Vue Router

#### Import Vue Router in `app.js` 

```
import VueRouter from 'vue-router'
Vue.use(VueRouter)
```

#### Structure the components

- Use a main component `App.vue` to contain `<router-view></router-view>`, that'll serve as the SPA container that allow switching components inside of it 
- Create `router` in `app.js` like this 
```
import Home from './components/Home.vue';
import Admin from './components/Admin.vue';
import Donate from './components/Donate.vue';

const router = new VueRouter({
  mode: 'history',
  routes: [
    { path: '/', name: 'home', component: Home },
    { path: '/donate', name: 'donate', component: Donate },
    { path: '/admin', name: 'admin', component: Admin }
  ],
});
```
- Use the main component and router in `app.js` like this
```
const app = new Vue({
  el: '#app',
  components: { App },
  router,
});
```
 
## Set up Laravel "catch-all" route

```
Route::get('/{any}', function () {
    return view('index');
})->where('any', '.*');
```

## Compile and run 

Now run `npm run dev` and run the tests.  Now we have all GREEN.

## References: 
- [`HTML5 History Mode`](https://router.vuejs.org/en/essentials/history-mode.html) (Vue.js documentation)
- `Building a Vue SPA with Laravel` ([Part 1](https://laravel-news.com/using-vue-router-laravel), [Part 2](https://laravel-news.com/building-vue-spa-laravel-part-2/)) (by [Paul Redmond](https://github.com/paulredmond))