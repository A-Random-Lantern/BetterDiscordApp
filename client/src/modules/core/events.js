/**
 * BetterDiscord Events
 * Copyright (c) 2015-present JsSucks - https://github.com/JsSucks
 * All rights reserved.
 * https://github.com/JsSucks - https://betterdiscord.net
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree. 
*/


const { EventEmitter } = require('events');
const emitter = new EventEmitter();

class Events {

    static on(eventName, callBack) {
        emitter.on(eventName, callBack);
    }

    static off(eventName, callBack) {
        emitter.removeListener(eventName, callBack);
    }

    static emit(...args) {
        emitter.emit(...args);
    }

}

module.exports = { Events }