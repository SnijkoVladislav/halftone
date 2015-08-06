(function() {
	"use strict";

	angular
		.module("halftone")
		.controller("quickFaqCtrl", quickFaqCtrl);

		/** @ngInject*/

		function quickFaqCtrl () {
			var vm = this;

			vm.posts = [
				{
					title: "Cras sollicitudin enim?",
					text: "Mauris vulputate lacus id lacus vehicula at dapibus odio posuere. Cras sollicitudin.",
				},
				{
					title: "Vestibulum ante ipsum?",
					text: "Ut dolor elit, rutrum ac ornare eu, sagittis a enim. Donec cursus tempor risus, at pulvinar nibh lacinia.",
				}
			];

		}


})();