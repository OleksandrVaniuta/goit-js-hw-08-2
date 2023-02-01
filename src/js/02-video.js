import Player from '@vimeo/player';
import throttle from 'lodash.throttle';

const iframe = document.querySelector('iframe');
const player = new Player(iframe);
const onPlay = function (time) {
  localStorage.setItem('videoplayer-current-time', JSON.stringify(time));
};
player.on('timeupdate', throttle(onPlay, 1000));

const savedTime = localStorage.getItem('videoplayer-current-time');
const parsedTime = JSON.parse(savedTime);

player.setCurrentTime(parsedTime.seconds);
