import Player from '@vimeo/player';
import throttle from 'lodash.throttle';

const LOCALSTORAGE = 'videoplayer-current-time';
const iframe = document.querySelector('iframe');
const player = new Player(iframe);

player.on(
  'timeupdate',
  throttle(function (time) {
    localStorage.setItem(LOCALSTORAGE, JSON.stringify(time.seconds));
  }, 1000)
);

player
  .setCurrentTime(localStorage.getItem(LOCALSTORAGE))
  .then(function (seconds) {})
  .catch(function (error) {
    switch (error.name) {
      case 'RangeError':
        break;

      default:
        break;
    }
  });

player.on('ended', function (time) {
  setTimeout(() => {
    localStorage.setItem(LOCALSTORAGE, '0.0');
  }, 1000);
});
