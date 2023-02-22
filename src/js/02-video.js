import throttle from "lodash.throttle";

const iframe = document.querySelector("iframe");
const player = new Vimeo.Player(iframe);

const VIDEOPLAYER_TIME_KEY = "videoplayer-current-time";

const onPlayingVideo = () => {
  player.getCurrentTime().then(function (seconds) {
    localStorage.setItem(VIDEOPLAYER_TIME_KEY, seconds);
  });
};

player.setCurrentTime(localStorage.getItem(VIDEOPLAYER_TIME_KEY));

player.getEnded(localStorage.removeItem(VIDEOPLAYER_TIME_KEY));

player.on("timeupdate", throttle(onPlayingVideo, 2000));
