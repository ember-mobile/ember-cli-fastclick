# Ember CLI FastClick

Drop-in FastClick support for Ember CLI apps.

For more information on FastClick visit http://ftlabs.github.io/fastclick.

*Note: As of late 2015 most mobile browsers - notably Chrome and Safari - no longer have a 300ms touch delay, so fastclick offers no benefit on newer browsers, and risks introducing [bugs](https://github.com/ftlabs/fastclick/issues) into your application. Consider carefully whether you really need to use it.*

## Installation

This is addon is installed in one simple step:

    ember install ember-cli-fastclick

When you now access your app from a mobile device you should see that the 300ms
touch delay was removed and the app feels more like a native app.

## Configuration

Sometimes you may want to use FastClick on specific browsers only. To do this, you can disable the automatic attachment of FastClick:

```js
// app/config/environment.js

ENV.fastclick.autoboot = false;
```

And now you can use your custom initializer for FastClick:

```js
// app/initializers/fastclick-safari.js

export function initialize() {
  if (typeof FastBoot === 'undefined' && isSafari && otherConditions) {
    schedule('afterRender', function() {
      FastClick.attach('body');
    });
  }
}
```
