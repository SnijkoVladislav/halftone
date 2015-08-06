(function () {

	'use strict';

	angular
		.module('halftone')
		.directive('sliderTestimonialsDir', SliderTestimonialsDir);

		/**@ngInject*/

		function SliderTestimonialsDir ($timeout, $interval) {
			return {
				restrict: 'A',
				link: function(scope, elem, attrs) {

					$timeout(function() {
						slideHolderLength = slideHolder.children().length;
						slide = angular.element(slideHolder.children()[currentIndex]);
						slide.addClass('_active');
					}, 10);

					 $interval(function(){
						slide.removeClass('_active');
						currentIndex < slideHolderLength-1 ? currentIndex++ : currentIndex=0;
						slide = angular.element(slideHolder.children()[currentIndex]);
						slide.addClass('_active');
					}, 5000);

					var slideHolder = angular.element(elem.children()[0]),
							currentIndex = 0,
							slideHolderLength = slideHolder.children().length,
							slide = angular.element(slideHolder.children()[currentIndex]);

					scope.next = function(){
						slide.removeClass('_active');
						currentIndex < slideHolderLength-1 ? currentIndex++ : currentIndex=0;
						slide = angular.element(slideHolder.children()[currentIndex]);
						slide.addClass('_active');
					};

					scope.prev = function(){
						slide.removeClass('_active');
						currentIndex > 0 ? currentIndex-- : currentIndex = slideHolderLength-1;
						slide = angular.element(slideHolder.children()[currentIndex]);
						slide.addClass('_active');
					};

				}
			};
		}

})();