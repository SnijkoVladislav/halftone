(function() {
	"use strict";

	angular
		.module("halftone")
		.controller("casePostsCtrl", casePostsCtrl);

		/** @ngInject*/

		function casePostsCtrl () {
			var vm = this;

			vm.articleShowId = 1;

			vm.galleryPostData = [
				{img:1, title:"Duis iaculis gravida", text:"Lorem ipsum dolor sit amet, consectetur adipisc elit. Suspendisse euismod, lectus at ullamcorper faucibus, tellus", fullText:"  Lorem ipsum dolor sit amet, consectetur adipisicing elit. Id non repellat magnam tempora nam in eos totam aliquam quos tenetur quaerat, qui, a atque omnis iusto doloribus error necessitatibus ipsa? Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nulla, non quasi eligendi suscipit quod hic quo totam deserunt ipsum error!"},
				{img:2, title:"Varius seds aliquam erat", text:"Lorem ipsum dolor sit amet, consectetur adipisc elit. Suspendisse euismod, lectus at ullamcorper faucibus, tellus", fullText:"  Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ratione, adipisci non laudantium necessitatibus vero iusto, minus nam sequi aliquam fugit, excepturi quo ut laboriosam aliquid a consequatur at quibusdam rem. Lorem ipsum dolor sit amet, consectetur adipisicing elit. Rem, soluta officiis tempora ab nobis corporis voluptas molestias enim eius blanditiis."},
				{img:3, title:"Ante ipsum primis", text:"Lorem ipsum dolor sit amet, consectetur adipisc elit. Suspendisse euismod, lectus at ullamcorper faucibus, tellus", fullText:"  Lorem ipsum dolor sit amet, consectetur adipisicing elit. Odio, doloremque tenetur dolorem veritatis dignissimos nesciunt recusandae consequuntur libero, impedit laudantium debitis amet et est? Repudiandae quasi odit aliquam iure provident. Lorem ipsum dolor sit amet, consectetur adipisicing elit. Impedit iure consequuntur labore, aspernatur similique eaque natus doloremque, soluta perspiciatis in!"},
				{img:4, title:"Donec interdum eleifend", text:"Lorem ipsum dolor sit amet, consectetur adipisc elit. Suspendisse euismod, lectus at ullamcorper faucibus, tellus", fullText:"  Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aspernatur, eum incidunt sint modi quia quod culpa molestiae et. Architecto minus, necessitatibus placeat a quod assumenda incidunt repellat suscipit? Quis, magni. Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptatem rem, suscipit nobis enim iure iusto commodi iste soluta facere temporibus!"},
				{img:5, title:"Aliquam ac malesuada", text:"Lorem ipsum dolor sit amet, consectetur adipisc elit. Suspendisse euismod, lectus at ullamcorper faucibus, tellus", fullText:"  Lorem ipsum dolor sit amet, consectetur adipisicing elit. Fugiat impedit harum sed veritatis nostrum iusto repellendus rerum, quisquam provident ipsa quo error est amet deserunt eveniet in corrupti incidunt reprehenderit! Lorem ipsum dolor sit amet, consectetur adipisicing elit. Enim harum architecto quis culpa ducimus deleniti labore illum deserunt, nobis maxime."},
				{img:6, title:"Quis porttitor neque tempus", text:"Lorem ipsum dolor sit amet, consectetur adipisc elit. Suspendisse euismod, lectus at ullamcorper faucibus, tellus", fullText:"  Lorem ipsum dolor sit amet, consectetur adipisicing elit. Necessitatibus, magni, eveniet? Necessitatibus beatae aliquid facere molestiae modi assumenda, recusandae ullam! Reprehenderit libero, quibusdam amet quis distinctio. Obcaecati pariatur unde a. Lorem ipsum dolor sit amet, consectetur adipisicing elit. Possimus ipsum similique, sed in quae architecto deleniti, recusandae blanditiis tenetur laudantium!"},
			];

		}

})();