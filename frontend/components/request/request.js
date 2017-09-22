"use strict";

export default class RequestForJSON {
    constructor(options) {
        this._arr = options.arr;

        this._request(this._arr);
    }

    _request() {
        return fetch('https://api.twitch.tv/kraken/streams/freecodecamp&client_id=pkalnam3jd1vpqvy3y2kp11usqne5r')
            .then(response => {
                return response.json();
            })
            .then(data => {
                console.log(data);
            })
            .catch(err => {
                console.log(err);
            });
    }
}