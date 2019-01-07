# How Vue Storefront extensions work?
Depending on needs Vue Storefront extensions can have two parts:
- **Client-side part** which is just a [Vue Storefront module](https://github.com/DivanteLtd/vue-storefront/blob/master/docs/guide/modules/introduction.md). It covers most of the use cases.
- **Server-side part** which is a [Vue Storefront API extension](https://github.com/DivanteLtd/vue-storefront/blob/master/docs/guide/extensions/extending-api.md) and should be used if you want to add some endpoints to `vue-storefront-api` or interact directly with server side code.

# Where extensions are located
- On the client side extension modules should be placed in `src/modules` folder of `vue-storefront` and registered in `src/modules/index.ts`
- On the server side extensions should be placed in `src/api/extensions` folder of `vue-storefront-api` and registered in config file

# Writing extensions
Here you can find two articles explaining how to create custom Vue Storefront extensions:
- [How to create an Instagram Feed module for Vue Storefront](https://itnext.io/how-to-create-an-instagram-feed-module-for-vue-storefront-eaa03019b288)
- [Developing a Vue Storefront payment module](https://www.develodesign.co.uk/news/development-of-the-paypal-module-for-vue-storefront/#.XCoa2h2Mmmo.twitter)