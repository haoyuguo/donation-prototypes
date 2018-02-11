# SPA with multiple routes (with Vue Router)

Now let's get more real.  An application usually needs to have more than one route.  Vue Router does that, but 

1. We don't want hash (#) in the URL
2. How does work together with Laravel routes ?

Thanks to the great people from Vue.js and Laravel community (see [references](##references)), we now know how to do this.

## Start with a set of tests

Let's create two new tests for routes "/donate" (public page) and "/admin" (admin home page, which later should be set up with proper authentication).

- Create `donate_spec.js` and `admin_spec.js`
- Run them -- of course they would fail


## References: 
- [`HTML5 History Mode`](https://router.vuejs.org/en/essentials/history-mode.html) (Vue.js documentation)
- `Building a Vue SPA with Laravel` ([Part 1](https://laravel-news.com/using-vue-router-laravel), [Part 2](https://laravel-news.com/building-vue-spa-laravel-part-2/)) (by [Paul Redmond](https://github.com/paulredmond))