console.log('hi');
angular.module('video-player')
  .controller('video-controller', function($scope) {
    this.videos = [];
    console.log(this.videos);
    console.log($scope);
    this.searchVideo = function() {
      console.log('searchVideo ran');

    };
  })
  .component('', {
    bindings: {},
    controller: function() {
      this.searchVideo = function() {
        console.log('searchVideo ran');
      };
    },
    templateUrl: 'src/templates/app.html'
  });



  //   scope: {},
  //   controllerAs: 'ctrl',
  //   bindToController: true,
  //   controller: function($scope) {
  //     console.log($scope);
  //   },
  //   templateUrl: 'src/templates/app.html'
  // };

// .directive('app', function() {
//   return {
//     template:
//     `<div id="app container">
//       <nav class="navbar">
//         <div class="col-md-6 col-md-offset-3">
//           <search><h5><em>search</em> component goes here</h5></search>
//         </div>
//       </nav>
//       <div class="row">
//         <div class="col-md-7">
//           <video-player><h5><em>videoPlayer</em> component goes here</h5></video-player>
//         </div>
//         <div class="col-md-5">
//           <video-list><h5><em>videoList</em> component goes here</h5></video-list>
//         </div>
//       <div>
//     </div>`
//   };
// })
//
// .controller('StoreController', function() {
//   this.selectVideo = function() {};
// })
//
// .component('app', {
//
// });
