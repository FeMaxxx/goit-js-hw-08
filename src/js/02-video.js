import Player from "@vimeo/player";
import throttle from "lodash.throttle";

const iframe = document.querySelector("iframe");
const player = new Player(iframe);

const VIDEOPLAYER_TIME_KEY = "videoplayer-current-time";

const onPlayingVideo = (data) => {
  localStorage.setItem(VIDEOPLAYER_TIME_KEY, data.seconds);
};

player.setCurrentTime(localStorage.getItem(VIDEOPLAYER_TIME_KEY) || 0);

player.getEnded(localStorage.removeItem(VIDEOPLAYER_TIME_KEY));

player.on("timeupdate", throttle(onPlayingVideo, 1000));
