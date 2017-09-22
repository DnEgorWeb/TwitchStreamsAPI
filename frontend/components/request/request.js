"use strict";

export default class RequestForJSON {
    constructor(options) {
        this._arr = options.arr;
        this._renderLi = options.renderLi;

        this._request(this._arr);
    }

    _request() {
        let renderLi = this._renderLi;

        this._arr.forEach(item => {
            return fetch('https://api.twitch.tv/kraken/streams/' + item + '?client_id=pkalnam3jd1vpqvy3y2kp11usqne5r')
                .then(response => {
                    return response.json();
                })
                .then(data => {
                    if (!data.stream) {
                        return fetch('https://api.twitch.tv/kraken/channels/' + item + '?client_id=pkalnam3jd1vpqvy3y2kp11usqne5r')
                            .then(response => {
                                return response.json();
                            })
                            .then(data => {
                                renderLi(data);
                            })
                            .catch(err => {
                                console.log(err);
                            })
                    } else {
                        renderLi(data);
                    }
                })
                .catch(err => {
                    console.log(err);
                });
        });
    }
}