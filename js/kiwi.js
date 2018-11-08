// javascript for youtube player

var tag = document.createElement('script');

tag.src = "https://www.youtube.com/iframe_api";
var firstScriptTag = document.getElementsByTagName('script')[0];
firstScriptTag.parentNode.insertBefore(tag, firstScriptTag);

// creates iframe and youtube player
var player;
function onYouTubeIframeAPIReady() {
  player = new YT.Player('player', {
    // video id you can get from youtube video url
    videoId: '63m-pQRv_2w',
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
  player.seekTo(16, true)
  event.target.playVideo();
  event.target.setVolume(60)
  event.target.getVolume();
  player.getCurrentTime();


  let getVolume = event.target.getVolume();
  console.log('volume when video is played:',getVolume);

 
}

  // make a function that's going to check how much time has passed
  
  // function checkIfEnoughTimeHasPassed() {
  //   let condition = false; // you can update this - more time has passed than 2 minutes (liz calculate actual time)
  //   if(condition) {
  //       // stop the video
  //       // stop calling this function over and over
  //       let getTime = player.getCurrentTime();
       
  //       clearInterval(intervalId);
  //   }

  //   console.log('this is running');
  //   console.log('current time:', getTime);
    
  // }

  // use setInterval to make the function (line 34) to be called over and over again
  // let intervalId = setInterval(checkIfEnoughTimeHasPassed, 2000); // change back to 250

