"use strict";

export default class RequestForJSON {
    constructor(options) {
        this._arr = options.arr;

        this._request(this._arr);
    }

    _request() {
        return fetch('https://wind-bow.gomix.me/twitch-api/channels/freecodecamp')
            .then(result => {
                return result.json();
            })
            .then(data => {
                console.log(data);
            })
            .catch(err => {
                console.log(err);
            });
    }
}