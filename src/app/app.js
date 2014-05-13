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

    'end',
    'blank'
  ],
  slideTemplatePrefix: '@@cacheBustingDir/slides/',
  slideTemplateSuffix: '.html'
});
