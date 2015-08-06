(function() {
	"use strict";

	angular
		.module("halftone")
		.controller("aboutTeamCtrl", aboutTeamCtrl);

		/** @ngInject*/

		function aboutTeamCtrl () {
			var vm = this;
			vm.ppp = "aaaaa";
			vm.galleryPostData = [
				{img: 1, name: "Dr. Marie Doe", rang: "Manager", desc: "Duis eu leo est, id dignissim enim. Vestibulum turpis ante, consequat id interdum sit amet, sollicitudin sit amet odio. Pellentesque placerat nulla at quam semper vitae ullamcorper eros lacinia."},
				{img: 2, name: "Dr. Olivia Doe", rang: "Dentist", desc: "Duis eu leo est, id dignissim enim. Vestibulum turpis ante, consequat id interdum sit amet, sollicitudin sit amet odio. Pellentesque placerat nulla at quam semper vitae ullamcorper eros lacinia."},
				{img: 3, name: "Dr. Michael Doe", rang: "Dentist", desc: "Duis eu leo est, id dignissim enim. Vestibulum turpis ante, consequat id interdum sit amet, sollicitudin sit amet odio. Pellentesque placerat nulla at quam semper vitae ullamcorper eros lacinia."},
				{img: 4, name: "Robin Doe", rang: "Dental assistant", desc: "Duis eu leo est, id dignissim enim. Vestibulum turpis ante, consequat id interdum sit amet, sollicitudin sit amet odio. Pellentesque placerat nulla at quam semper vitae ullamcorper eros lacinia."},
				{img: 5, name: "Dr. Olivia Doe", rang: "Dentist", desc: "Duis eu leo est, id dignissim enim. Vestibulum turpis ante, consequat id interdum sit amet, sollicitudin sit amet odio. Pellentesque placerat nulla at quam semper vitae ullamcorper eros lacinia."},
				{img: 6, name: "Dr. Michael Doe", rang: "Dentist", desc: "Duis eu leo est, id dignissim enim. Vestibulum turpis ante, consequat id interdum sit amet, sollicitudin sit amet odio. Pellentesque placerat nulla at quam semper vitae ullamcorper eros lacinia."},
			];

		}

})();