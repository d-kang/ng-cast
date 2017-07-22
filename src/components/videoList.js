angular.module('video-player')
  .component('videoList', {
    controller: function myVideoListController() {
      this.videos = [];
      this.onClick = () => {};
    },
    templateUrl: 'src/templates/videoList.html'
  });
