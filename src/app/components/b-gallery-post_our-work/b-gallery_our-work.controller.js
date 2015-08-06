(function() {
	"use strict";

	angular
		.module("halftone")
		.controller("ourWorkCtrl", ourWorkCtrl);

		/** @ngInject*/

		function ourWorkCtrl () {
			var vm = this;

			vm.galleryPostData = [
				{img:1, text:"We take care of your teeth"},
				{img:2, text:"We take care of your teeth"},
				{img:3, text:"We take care of your teeth"},
				{img:4, text:"We take care of your teeth"},
				{img:5, text:"We take care of your teeth"},
				{img:6, text:"We take care of your teeth"},
			];

		}

})();