import Render from './components/render/render';
import Handlers from './components/handlers/handlers';
import RequestForJSON from './components/request/request';

new Render({
    el: document.querySelector('body')
});

new Handlers({
    el: document.querySelector('.twitchAPI')
});

new RequestForJSON({
    arr: ["ESL_SC2", "OgamingSC2", "cretetion", "freecodecamp", "storbeck", "habathcx", "RobotCaleb", "noobs2ninjas"]
});