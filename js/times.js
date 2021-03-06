var tag = document.createElement('script');

tag.src = "https://www.youtube.com/iframe_api";
var firstScriptTag = document.getElementsByTagName('script')[0];
firstScriptTag.parentNode.insertBefore(tag, firstScriptTag);

// creates iframe and youtube player
var player;
function onYouTubeIframeAPIReady() {
  player = new YT.Player('player', {
    // video id you can get from youtube video url
    videoId: 'slSr8HzY5VQ',
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
  player.seekTo(18, true)
  event.target.playVideo();
  event.target.setVolume(60)
  event.target.getVolume();

  let getVolume = event.target.getVolume();
  console.log('volume when video is played:',getVolume);
}
