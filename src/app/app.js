'use strict';

angular.module('app', [
  'app.templates',
  'w11k.slides',
  'w11k.slides.template'
]);

angular.module('app').constant('slidesConfig', {
  slides: [
    'title',
    'about-me',
    'about-us',

    'step-one/how-to-start',
    'step-one/one-night-of-coding',
    'step-one/too-many-files',
    'step-one/3-month-project',
    'step-one/problems',
    'step-one/solution',

    'step-one/bower-installation',
    'step-one/bower-usage',

    'step-one/grunt-installation',
    'step-one/grunt-usage',
    'step-one/grunt-example-livereload',
    'step-one/grunt-example-include-js',
    'step-one/jshint',

    'step-two/more-problems',
    'step-two/solution',
    'step-two/still-more-to-do',
    'step-two/the-real-problems',

    'fabs/about',
    'fabs/features',
    'fabs/demo',

    'perspective/gulp',
    'perspective/broccoli',

    'conclusion',

    'meet-the-speaker',
    'end',
    'blank'
  ],
  slideTemplatePrefix: '@@cacheBustingDir/slides/',
  slideTemplateSuffix: '.html'
});
