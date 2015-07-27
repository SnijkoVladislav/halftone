(function() {
  'use strict';

  angular
    .module('halftone')
    .run(runBlock);

  /** @ngInject */
  function runBlock($log) {

    $log.debug('runBlock end');
  }

})();
