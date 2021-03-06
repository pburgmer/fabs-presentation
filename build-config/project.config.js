'use strict';

module.exports = {

  build: {
    less: {
      enabled: false
    },
    bless: {
      enabled: false
    },
    spec: {
      runInPrepare: false
    },
    e2e: {
      runInDev: false,
      runInDist: false
    },
    server: {
      runInDist: true
    }
  },

  app: {
    files: {
      templates2js: [
        'slides/**/*.html'
      ],
      translations: [ ],
      translations2js: [ ]
    }
  },

  vendor: {
    files: {
      js: [
        'angular/angular.js',
        'google-code-prettify/src/prettify.js',
        'w11k-slides/dist/w11k-slides.js',
        'w11k-slides/dist/w11k-slides.tpl.js'
      ],
      js_mock: [
      ],
      js_spec: [
      ],
      js_e2e: [
      ],
      css: [
      ],
      assets: [
      ]
    }
  }
};
