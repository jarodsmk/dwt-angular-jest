# DwtAngularJest

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 14.0.1.

To demonstrate, after cloning -

- Run `npm i`
- Run `npm run test`

The following error will appear for the `app.component.spec.ts`

```
Zone.js has detected that ZoneAwarePromise `(window|global).Promise` has been overwritten.
    Most likely cause is that a Promise polyfill has been loaded after Zone.js (Polyfilling Promise api is not necessary when zone.js is loaded. If you must load one, do so before loading zone.js.)
```

This was introduced by importing the `dwt` module into `app.component.ts`, and by simply removing the `thisBreaks` variable and other imports, the tests will pass again.
