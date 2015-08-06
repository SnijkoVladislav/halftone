(function() {
	"use strict";

	angular
		.module("halftone")
		.controller("sliderMainCtrl", sliderMainCtrl);

		/** @ngInject*/

		function sliderMainCtrl () {
			var vm = this;

			vm.slideData = [
				{img:1, desc:"We take care of your teeth"},
				{img:2, desc:"Best solution for beautiful and healthy teeth"},
				{img:3, desc:"Quality dental treatment performed by a team of experts"}
			];

		}



})();