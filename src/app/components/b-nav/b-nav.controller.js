(function() {

	"use strict";

	angular
		.module("halftone")
		.controller("navCtrl", navCtrl);

		/** @ngInject */

		function navCtrl () {
			var vm = this;

			vm.menuName = ["HOME", "CASES", "ABOUT US", "SERVICES", "GALLERY", "CONTACT"];
			vm.menuLink = ["home", "cases", "about", "services", "gallery", "contact"];

		}

})();




