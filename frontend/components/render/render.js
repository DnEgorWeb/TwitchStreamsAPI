import compiledTemplate from './template.hbs';

export default class Render {
    constructor(options) {
        this._el = options.el;

        this._render();
    }

    _render() {
        this._el.innerHTML = compiledTemplate();
    }

    _renderLi(obj) {
        let name, logoSrc, status;

        if (obj.stream) {
            name = obj.stream.channel.display_name;
            logoSrc = obj.stream.channel.logo;
            status = obj.stream.channel.status;
        } else {
            name = obj.display_name;
            logoSrc = obj.logo;
            status = "offline";
        }

        const ul = document.querySelector('.streams-list');

        let li = document.createElement('li');
        li.className = (status === 'offline') ? "offline" : "online";
        li.innerHTML = '<img src="' + logoSrc + '"><div class="channel_name">' + name + '</div><div class="channel_status">' + status + '</div>';
        ul.append(li);
    }
}