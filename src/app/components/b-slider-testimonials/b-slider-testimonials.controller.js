(function() {
	"use strict";

	angular
		.module("halftone")
		.controller("sliderTestimonialsCtrl", sliderTestimonialsCtrl);

		/** @ngInject*/

		function sliderTestimonialsCtrl () {
			var vm = this;

			vm.slideData = [
				{
					text:"Duis iaculis gravida dolor, quis interdum massa varius seds aliquam erat volutpat. Morbi in libero libero. Maecenas pulvinar arcu ac erat facilisis nec facilisis nisi pharetra. Ut enim ad minim veniam laoreet dolore magna aliquam erat volutpat.",
					pic:"1",
					name:"Julia Doe",
					profession:"Assistant Manager"
				},
				{
					text:"Vivamus varius lorem vitae nisi posuere quis ullamcorper lorem hendrerit. Ut dolor elit, rutrum ac ornare eu, sagittis a enim. Donec cursus tempor risus, at pulvinar nibh lacinia nec. Nullam et velit elit, id suscipit mi. Pellentesque purus urna, gravida sit amet euismod eget.",
					pic:"2",
					name:"Eric Doe",
					profession:"Project Manager"
				},
				{
					text:"Aliquam sed eros urna. Donec mattis, erat ac ornare cursus, odio leo adipiscing neque, luctus egestas velit purus in ligula. Morbi mollis, neque sit amet convallis bibendum, leo purus commodo orci, eget viverra mi dui et nulla. Cum sociis natoque penatibus et magnis dis parturient.",
					pic:"3",
					name:"Alice Doe",
					profession:"Web Designer"
				},
			];

		}



})();