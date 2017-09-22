"use strict";

export default class RequestForJSON {
    constructor(options) {
        this._arr = options.arr;

        this._request(this._arr);
    }

    _request() {
        // return fetch('https://wind-bow.gomix.me/twitch-api/streams/freecodecamp?callback=?', {mode: 'cors'})
        //     .then(response => {
        //         return response.json();
        //     })
        //     .then(data => {
        //         console.log(data);
        //     })
        //     .catch(err => {
        //         console.log(err);
        //     });
        var xhr = new XMLHttpRequest();


        xhr.open('GET', 'https://wind-bow.gomix.me/twitch-api/streams/freecodecamp', false);

        xhr.send();


        if (xhr.status != 200) {
            alert( xhr.status + ': ' + xhr.statusText );
        } else {
            alert( xhr.responseText );
        }
    }
}