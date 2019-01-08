(window.webpackJsonp=window.webpackJsonp||[]).push([[44],{162:function(t,s,a){"use strict";a.r(s);var e=a(0),n=Object(e.a)({},function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("div",{staticClass:"content"},[t._m(0),t._v(" "),a("p",[t._v("Vue Storefront supports Magento Multistore installations")]),t._v(" "),t._m(1),t._v(" "),a("p",[t._v("Multiwebsite support starts with the ElasticSearch indexing. Basically - each store has it's own ElasticSearch index and should be populated separately using "),a("a",{attrs:{href:"https://github.com/DivanteLtd/mage2vuestorefront",target:"_blank",rel:"noopener noreferrer"}},[t._v("mage2vuestorefront"),a("OutboundLink")],1),t._v(" tool.")]),t._v(" "),a("p",[t._v("The simplest script to index multi site:")]),t._v(" "),t._m(2),t._m(3),t._v(" "),a("p",[t._v("In the result You should get:")]),t._v(" "),t._m(4),t._v(" "),t._m(5),t._v(" "),t._m(6),t._m(7),t._v(" "),t._m(8),t._v(" "),t._m(9),t._m(10),t._v(" "),t._m(11),t._m(12),t._v(" "),a("p",[t._v("By default the language / store is switched by the URL prefix:")]),t._v(" "),t._m(13),t._v(" "),t._m(14),t._v(" "),t._m(15),t._v(" "),t._m(16),t._v(" "),t._m(17),t._v(" "),t._m(18),t._v(" "),t._m(19),t._v(" "),t._m(20),t._m(21),t._v(" "),t._m(22),t._v(" "),t._m(23),t._v(" "),t._m(24),a("p",[t._v("or")]),t._v(" "),t._m(25)])},[function(){var t=this.$createElement,s=this._self._c||t;return s("h1",{attrs:{id:"multistore-magento2-support"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#multistore-magento2-support","aria-hidden":"true"}},[this._v("#")]),this._v(" Multistore Magento2 support")])},function(){var t=this.$createElement,s=this._self._c||t;return s("h2",{attrs:{id:"multiwebsite-indexing"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#multiwebsite-indexing","aria-hidden":"true"}},[this._v("#")]),this._v(" Multiwebsite indexing")])},function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("div",{staticClass:"language-bash extra-class"},[a("pre",{pre:!0,attrs:{class:"language-bash"}},[a("code",[a("span",{pre:!0,attrs:{class:"token function"}},[t._v("export")]),t._v(" TIME_TO_EXIT"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v("2000\n"),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("export")]),t._v(" MAGENTO_CONSUMER_KEY"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v("byv3730rhoulpopcq64don8ukb8lf2gq\n"),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("export")]),t._v(" MAGENTO_CONSUMER_SECRET"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v("u9q4fcobv7vfx9td80oupa6uhexc27rb\n"),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("export")]),t._v(" MAGENTO_ACCESS_TOKEN"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v("040xx3qy7s0j28o3q0exrfop579cy20m\n"),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("export")]),t._v(" MAGENTO_ACCESS_TOKEN_SECRET"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v("7qunl3p505rubmr7u1ijt7odyialnih9\n\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("echo")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'German store - de'")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("export")]),t._v(" MAGENTO_URL"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v("http://demo-magento2.vuestorefront.io/rest/de\n"),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("export")]),t._v(" INDEX_NAME"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v("vue_storefront_catalog_de\n\nnode --harmony cli.js categories --partitions"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v("1 --removeNonExistient"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v("true\nnode --harmony cli.js productcategories --partitions"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v("1\nnode --harmony cli.js attributes --partitions"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v("1 --removeNonExistient"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v("true\nnode --harmony cli.js taxrule --partitions"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v("1 --removeNonExistient"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v("true\nnode --harmony cli.js products --partitions"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v("1 --removeNonExistient"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v("true\n\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("echo")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'Italian store - it'")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("export")]),t._v(" MAGENTO_URL"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v("http://demo-magento2.vuestorefront.io/rest/it\n"),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("export")]),t._v(" INDEX_NAME"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v("vue_storefront_catalog_it\n\nnode --harmony cli.js categories --partitions"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v("1 --removeNonExistient"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v("true\nnode --harmony cli.js productcategories --partitions"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v("1\nnode --harmony cli.js attributes --partitions"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v("1 --removeNonExistient"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v("true\nnode --harmony cli.js taxrule --partitions"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v("1 --removeNonExistient"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v("true\nnode --harmony cli.js products --partitions"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v("1 --removeNonExistient"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v("true\n\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("echo")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'Default store - in our case United States / en'")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("export")]),t._v(" MAGENTO_URL"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v("http://demo-magento2.vuestorefront.io/rest\n"),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("export")]),t._v(" INDEX_NAME"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v("vue_storefront_catalog\n\nnode --harmony cli.js categories --partitions"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v("1 --removeNonExistient"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v("true\nnode --harmony cli.js productcategories --partitions"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v("1\nnode --harmony cli.js attributes --partitions"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v("1 --removeNonExistient"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v("true\nnode --harmony cli.js taxrule --partitions"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v("1 --removeNonExistient"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v("true\nnode --harmony cli.js products --partitions"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v("1 --removeNonExistient"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v("true\n")])])])},function(){var t=this.$createElement,s=this._self._c||t;return s("p",[this._v("As you may see it's just a "),s("strong",[this._v("it")]),this._v(" or "),s("strong",[this._v("de")]),this._v(" store code which is added to the base Magento2 REST API urls that makes the difference and then the "),s("strong",[this._v("INDEX_NAME")]),this._v(" set to the dedicated index name.")])},function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("ul",[a("li",[a("em",[t._v("vue_storefront_catalog_it")]),t._v(' - populated with the "it" store data')]),t._v(" "),a("li",[a("em",[t._v("vue_storefront_catalog_de")]),t._v(' - populated with the "it" store data')]),t._v(" "),a("li",[a("em",[t._v("vue_storefront_catalog")]),t._v(' - populated with the "default" store data')])])},function(){var t=this.$createElement,s=this._self._c||t;return s("p",[this._v("Then, to use these indexes in the Vue Storefront You should index the database schema using the "),s("code",[this._v("vue-storefront-api")]),this._v(" db tool:")])},function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("div",{staticClass:"language-bash extra-class"},[a("pre",{pre:!0,attrs:{class:"language-bash"}},[a("code",[a("span",{pre:!0,attrs:{class:"token function"}},[t._v("npm")]),t._v(" run db rebuild -- --indexName"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v("vue_storefront_catalog_it\n"),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("npm")]),t._v(" run db rebuild -- --indexName"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v("vue_storefront_catalog_de\n"),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("npm")]),t._v(" run db rebuild -- --indexName"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v("vue_storefront_catalog\n")])])])},function(){var t=this.$createElement,s=this._self._c||t;return s("h2",{attrs:{id:"vue-storefront-and-vue-storefront-api-configuration"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#vue-storefront-and-vue-storefront-api-configuration","aria-hidden":"true"}},[this._v("#")]),this._v(" Vue Storefront and Vue Storefront Api configuration")])},function(){var t=this.$createElement,s=this._self._c||t;return s("p",[this._v("After this sequence of command You may add the available ES index to Your "),s("code",[this._v("vue-storefront-api/config/local.json")]),this._v(":")])},function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("div",{staticClass:"language-json extra-class"},[a("pre",{pre:!0,attrs:{class:"language-json"}},[a("code",[a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token property"}},[t._v('"server"')]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n      "),a("span",{pre:!0,attrs:{class:"token property"}},[t._v('"host"')]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"localhost"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n      "),a("span",{pre:!0,attrs:{class:"token property"}},[t._v('"port"')]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("8080")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n\t"),a("span",{pre:!0,attrs:{class:"token property"}},[t._v('"esHost"')]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"localhost:9200"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n\t"),a("span",{pre:!0,attrs:{class:"token property"}},[t._v('"esIndexes"')]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("\n\t\t"),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"vue_storefront_catalog"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n\t\t"),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"vue_storefront_catalog_de"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n\t\t"),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"vue_storefront_catalog_it"')]),t._v("\n\t"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n\t"),a("span",{pre:!0,attrs:{class:"token property"}},[t._v('"availableStores"')]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("\n\t\t"),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"de"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"it"')]),t._v("\n\t"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n\n")])])])},function(){var t=this.$createElement,s=this._self._c||t;return s("p",[this._v("The last thing is to change the "),s("code",[this._v("vue-storefront/config/local.json")]),this._v(" to configure the storeViews which are available.")])},function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("div",{staticClass:"language-json extra-class"},[a("pre",{pre:!0,attrs:{class:"language-json"}},[a("code",[t._v("    "),a("span",{pre:!0,attrs:{class:"token property"}},[t._v('"storeViews"')]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n      "),a("span",{pre:!0,attrs:{class:"token property"}},[t._v('"multistore"')]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token boolean"}},[t._v("false")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n      "),a("span",{pre:!0,attrs:{class:"token property"}},[t._v('"mapStoreUrlsFor"')]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"de"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"it"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n      "),a("span",{pre:!0,attrs:{class:"token property"}},[t._v('"de"')]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n        "),a("span",{pre:!0,attrs:{class:"token property"}},[t._v('"storeCode"')]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"de"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n        "),a("span",{pre:!0,attrs:{class:"token property"}},[t._v('"disabled"')]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token boolean"}},[t._v("true")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n        "),a("span",{pre:!0,attrs:{class:"token property"}},[t._v('"storeId"')]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("3")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n        "),a("span",{pre:!0,attrs:{class:"token property"}},[t._v('"name"')]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"German Store"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n        "),a("span",{pre:!0,attrs:{class:"token property"}},[t._v('"url"')]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"/de"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n        "),a("span",{pre:!0,attrs:{class:"token property"}},[t._v('"elasticsearch"')]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n          "),a("span",{pre:!0,attrs:{class:"token property"}},[t._v('"host"')]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"localhost:8080/api/catalog"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n          "),a("span",{pre:!0,attrs:{class:"token property"}},[t._v('"index"')]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"vue_storefront_catalog_de"')]),t._v("\n        "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n        "),a("span",{pre:!0,attrs:{class:"token property"}},[t._v('"tax"')]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n          "),a("span",{pre:!0,attrs:{class:"token property"}},[t._v('"defaultCountry"')]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"DE"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n          "),a("span",{pre:!0,attrs:{class:"token property"}},[t._v('"defaultRegion"')]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('""')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n          "),a("span",{pre:!0,attrs:{class:"token property"}},[t._v('"calculateServerSide"')]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token boolean"}},[t._v("true")]),t._v("\n        "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n        "),a("span",{pre:!0,attrs:{class:"token property"}},[t._v('"i18n"')]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n          "),a("span",{pre:!0,attrs:{class:"token property"}},[t._v('"fullCountryName"')]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"Germany"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n          "),a("span",{pre:!0,attrs:{class:"token property"}},[t._v('"fullLanguageName"')]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"German"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n          "),a("span",{pre:!0,attrs:{class:"token property"}},[t._v('"defaultLanguage"')]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"DE"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n          "),a("span",{pre:!0,attrs:{class:"token property"}},[t._v('"defaultCountry"')]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"DE"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n          "),a("span",{pre:!0,attrs:{class:"token property"}},[t._v('"defaultLocale"')]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"de-DE"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n          "),a("span",{pre:!0,attrs:{class:"token property"}},[t._v('"currencyCode"')]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"EUR"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n          "),a("span",{pre:!0,attrs:{class:"token property"}},[t._v('"currencySign"')]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"EUR"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n          "),a("span",{pre:!0,attrs:{class:"token property"}},[t._v('"dateFormat"')]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"HH:mm D-M-YYYY"')]),t._v("\n        "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n      "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n      "),a("span",{pre:!0,attrs:{class:"token property"}},[t._v('"it"')]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n        "),a("span",{pre:!0,attrs:{class:"token property"}},[t._v('"storeCode"')]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"it"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n        "),a("span",{pre:!0,attrs:{class:"token property"}},[t._v('"disabled"')]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token boolean"}},[t._v("true")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n        "),a("span",{pre:!0,attrs:{class:"token property"}},[t._v('"storeId"')]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("4")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n        "),a("span",{pre:!0,attrs:{class:"token property"}},[t._v('"name"')]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"Italian Store"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n        "),a("span",{pre:!0,attrs:{class:"token property"}},[t._v('"url"')]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"/it"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n        "),a("span",{pre:!0,attrs:{class:"token property"}},[t._v('"elasticsearch"')]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n          "),a("span",{pre:!0,attrs:{class:"token property"}},[t._v('"host"')]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"localhost:8080/api/catalog"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n          "),a("span",{pre:!0,attrs:{class:"token property"}},[t._v('"index"')]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"vue_storefront_catalog_it"')]),t._v("\n        "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n        "),a("span",{pre:!0,attrs:{class:"token property"}},[t._v('"tax"')]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n          "),a("span",{pre:!0,attrs:{class:"token property"}},[t._v('"defaultCountry"')]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"DE"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n          "),a("span",{pre:!0,attrs:{class:"token property"}},[t._v('"defaultRegion"')]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('""')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n          "),a("span",{pre:!0,attrs:{class:"token property"}},[t._v('"calculateServerSide"')]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token boolean"}},[t._v("true")]),t._v("\n        "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n        "),a("span",{pre:!0,attrs:{class:"token property"}},[t._v('"i18n"')]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n          "),a("span",{pre:!0,attrs:{class:"token property"}},[t._v('"fullCountryName"')]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"Italy"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n          "),a("span",{pre:!0,attrs:{class:"token property"}},[t._v('"fullLanguageName"')]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"Italian"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n          "),a("span",{pre:!0,attrs:{class:"token property"}},[t._v('"defaultCountry"')]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"IT"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n          "),a("span",{pre:!0,attrs:{class:"token property"}},[t._v('"defaultLanguage"')]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"IT"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n          "),a("span",{pre:!0,attrs:{class:"token property"}},[t._v('"defaultLocale"')]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"it-IT"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n          "),a("span",{pre:!0,attrs:{class:"token property"}},[t._v('"currencyCode"')]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"EUR"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n          "),a("span",{pre:!0,attrs:{class:"token property"}},[t._v('"currencySign"')]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"EUR"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n          "),a("span",{pre:!0,attrs:{class:"token property"}},[t._v('"dateFormat"')]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"HH:mm D-M-YYYY"')]),t._v("\n        "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n      "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n")])])])},function(){var t=this.$createElement,s=this._self._c||t;return s("p",[this._v("After these changes you'll have a "),s("code",[this._v("LanguageSwitcher")]),this._v(" component visible in the bottom.")])},function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("ul",[a("li",[a("code",[t._v("http://localhost:3000")]),t._v(" is for the default store")]),t._v(" "),a("li",[a("code",[t._v("http://localhost:3000/it")]),t._v(" will switch the store to the Italian one")]),t._v(" "),a("li",[a("code",[t._v("http://localhost:3000/de")]),t._v(" will switch the store to the German one one")])])},function(){var t=this.$createElement,s=this._self._c||t;return s("p",[this._v("General URL format is:\n"),s("code",[this._v("http://localhost:3000/{storeCode}")])])},function(){var t=this.$createElement,s=this._self._c||t;return s("p",[this._v("The storeCode may be switched by ENV variable set before runing "),s("code",[this._v("npm run dev")]),this._v(" / "),s("code",[this._v("npm start")]),this._v(":")])},function(){var t=this.$createElement,s=this._self._c||t;return s("ul",[s("li",[s("code",[this._v("export STORE_CODE=de && npm run dev")]),this._v(" will run the shop with the "),s("code",[this._v("de")]),this._v(" shop loaded")])])},function(){var t=this.$createElement,s=this._self._c||t;return s("p",[this._v("Another option - usefull when using multistore mode with the nginx/varnish mode is to set the shop code by the "),s("code",[this._v("x-vs-store-code")]),this._v(" http reqeuest header.")])},function(){var t=this.$createElement,s=this._self._c||t;return s("h2",{attrs:{id:"changing-the-ui-for-specific-store-views"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#changing-the-ui-for-specific-store-views","aria-hidden":"true"}},[this._v("#")]),this._v(" Changing the UI for specific store views")])},function(){var t=this.$createElement,s=this._self._c||t;return s("p",[this._v("If you would like to modify the routes or change some particular components regarding the current locale (for example different Checkout in the German store) please take a look at: "),s("code",[this._v("src/themes/default/index.js")]),this._v(":")])},function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("div",{staticClass:"language-js extra-class"},[a("pre",{pre:!0,attrs:{class:"language-js"}},[a("code",[a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("export")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("default")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("function")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("app"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" router"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" store"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// if youre' runing multistore setup this is copying the routed above adding the 'storeCode' prefix to the urls and the names of the routes")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// You can do it on your own and then be able to customize the components used for example for German storeView checkout")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// To do so please execlude the desired storeView from the config.storeViews.mapStoreUrlsFor and map the urls by Your own like:")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// { name: 'de-checkout', path: '/checkout', component: CheckoutCustomized },")]),t._v("\n  router"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("addRoutes")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("routes"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("setupMultistoreRoutes")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("config"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" router"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" routes"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n  store"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("registerModule")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'ui'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" UIStore"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])])])},function(){var t=this.$createElement,s=this._self._c||t;return s("p",[this._v("Another option is to create a separate theme for specific storeview. Runtime theme changes are not possible as themes are compiled in the JS bundles by webpack during the page build process. In that case you should run separate instances of "),s("code",[this._v("vue-storefront")]),this._v(" having the proper theme set in "),s("code",[this._v("config/local.json")]),this._v(" file.")])},function(){var t=this.$createElement,s=this._self._c||t;return s("h2",{attrs:{id:"localized-routes"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#localized-routes","aria-hidden":"true"}},[this._v("#")]),this._v(" Localized routes")])},function(){var t=this.$createElement,s=this._self._c||t;return s("p",[this._v("Route switching mechanism by default works on the URL level. Please use the "),s("code",[this._v("localizedRoute")]),this._v(" mixin:")])},function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("div",{staticClass:"language-vue extra-class"},[a("pre",{pre:!0,attrs:{class:"language-vue"}},[a("code",[a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("<")]),t._v("router-link")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token attr-name"}},[t._v(":to")]),a("span",{pre:!0,attrs:{class:"token attr-value"}},[a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("=")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')]),t._v("localizedRoute(page.link)"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')])]),t._v(" "),a("span",{pre:!0,attrs:{class:"token attr-name"}},[t._v("class")]),a("span",{pre:!0,attrs:{class:"token attr-value"}},[a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("=")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')]),t._v("cl-accent relative"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')])]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("{{\n  page.title\n}}"),a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("</")]),t._v("router-link")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n")])])])},function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("div",{staticClass:"language-vue extra-class"},[a("pre",{pre:!0,attrs:{class:"language-vue"}},[a("code",[a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("<")]),t._v("router-link")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token attr-name"}},[t._v(":to")]),a("span",{pre:!0,attrs:{class:"token attr-value"}},[a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("=")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')]),t._v("\n    localizedRoute({\n      name: product.type_id + "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("'")]),t._v("-product"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("'")]),t._v(",\n      params: {\n        parentSku: product.parentSku ? product.parentSku : product.sku,\n        slug: product.slug,\n        childSku: product.sku,\n      },\n    })\n  "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')])]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("</")]),t._v("router-link")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n")])])])}],!1,null,null,null);n.options.__file="multistore.md";s.default=n.exports}}]);