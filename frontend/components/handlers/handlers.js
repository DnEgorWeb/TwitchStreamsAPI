"use strict";

export default class Handlers {
    constructor(options) {
        this._el = options.el;

        this._el.addEventListener('click', this._handleClick.bind(this));
    }

    _handleClick(event) {
        let eventLink = event.target.closest('a');

        if (!eventLink) {
            return;
        }

        let activeLink = this._el.querySelector('.disabled');
        activeLink.classList.remove('disabled');
        eventLink.classList.add('disabled');


        if (eventLink.classList.contains('twitch-link-all')) {
            this._el.querySelectorAll('.streams-list>li').forEach(item => {
                item.style.display = 'flex';
            });
        } else if (eventLink.classList.contains('twitch-link-online')) {
            this._el.querySelectorAll('.streams-list>.offline').forEach(item => {
                item.style.display = 'none';
            });
            this._el.querySelectorAll('.streams-list>.online').forEach(item => {
                item.style.display = 'flex';
            });
        } else {
            this._el.querySelectorAll('.streams-list>.online').forEach(item => {
                item.style.display = 'none';
            });
            this._el.querySelectorAll('.streams-list>.offline').forEach(item => {
                item.style.display = 'flex';
            });
        }
    }
}