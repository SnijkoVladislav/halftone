(function() {
  "use strict";

  angular
    .module("halftone")
    .config(routeConfig);

  /** @ngInject */
  function routeConfig($stateProvider, $urlRouterProvider) {
    $stateProvider
      .state("home", {
        url: "/",
        views: {
          "header": {templateUrl: "app/views/l-header/l-header.html"},
          "content": {templateUrl: "app/views/l-home/l-home.html"},
          "footer": {templateUrl: "app/views/l-footer/l-footer.html"}
        }
      })
      .state("about", {
        url: "/about",
        views: {
          "header": {templateUrl: "app/views/l-header/l-header.html"},
          "content": {templateUrl: "app/views/l-about/l-about.html"},
          "footer": {templateUrl: "app/views/l-footer/l-footer.html"}
        }
      })
      .state("services", {
        url: "/services",
        views: {
          "header": {templateUrl: "app/views/l-header/l-header.html"},
          "content": {templateUrl: "app/views/l-services/l-services.html"},
          "footer": {templateUrl: "app/views/l-footer/l-footer.html"}
        }
      })
      .state("gallery", {
        url: "/gallery",
        views: {
          "header": {templateUrl: "app/views/l-header/l-header.html"},
          "content": {templateUrl: "app/views/l-gallery/l-gallery.html"},
          "footer": {templateUrl: "app/views/l-footer/l-footer.html"}
        }
      })
      .state("cases", {
        url: "/cases",
        views: {
          "header": {templateUrl: "app/views/l-header/l-header.html"},
          "content": {templateUrl: "app/views/l-cases/l-cases.html"},
          "footer": {templateUrl: "app/views/l-footer/l-footer.html"}
        }
      })
      .state("prices", {
        url: "/prices",
        views:{
          "header": {templateUrl: "app/views/l-header/l-header.html"},
          "content": {templateUrl: "app/views/l-prices/l-prices.html"},
          "footer": {templateUrl: "app/views/l-footer/l-footer.html"}
        }
      })
      .state("blog", {
        url: "/blog",
        views:{
          "header": {templateUrl: "app/views/l-header/l-header.html"},
          "content": {templateUrl: "app/views/l-blog/l-blog.html"},
          "footer": {templateUrl: "app/views/l-footer/l-footer.html"}
        }
      })
      .state("contact", {
        url: "/contact",
        views:{
          "header": {templateUrl: "app/views/l-header/l-header.html"},
          "content": {templateUrl: "app/views/l-contact/l-contact.html"},
          "footer": {templateUrl: "app/views/l-footer/l-footer.html"}
        }
      });

    $urlRouterProvider.otherwise("/");
  }

})();
