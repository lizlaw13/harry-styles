var tag = document.createElement('script');

tag.src = "https://www.youtube.com/iframe_api";
var firstScriptTag = document.getElementsByTagName('script')[0];
firstScriptTag.parentNode.insertBefore(tag, firstScriptTag);

// creates iframe and youtube player
var player;
function onYouTubeIframeAPIReady() {
  player = new YT.Player('player', {
    // video id you can get from youtube video url
    videoId: '6uzIVI7pwiY',
    // removes the suggested videos
    playerVars: {'rel':0 },
    events: {
      'onReady': onPlayerReady,
    //   'onStateChange': onPlayerStateChange,
    }
  });
}

// when the player is ready it will fire the following events
function onPlayerReady(event) {
  player.seekTo(06, true)
  event.target.playVideo();
  event.target.setVolume(70)
  event.target.getVolume();

  let getVolume = event.target.getVolume();
  console.log('volume when video is played:',getVolume);
}