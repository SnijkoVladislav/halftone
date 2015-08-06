(function() {
	"use strict";

	angular
		.module("halftone")
		.controller("recentNewsCtrl", recentNewsCtrl);

		/** @ngInject*/

		function recentNewsCtrl () {
			var vm = this;

			vm.posts = [
				{
					date: "May 12, 2015",
					title: "Pellentesque Bibendum",
					link: "blog/pellentesque_bibendum"
				},
				{
					date: "May 11, 2015",
					title: "Quisque Tincidunt",
					link: "blog/quisque_tincidunt"
				},
				{
					date: "May 10, 2015",
					title: "Sed massa nunc",
					link: "blog/sed_massa_nunc"
				}
			];

		}


})();