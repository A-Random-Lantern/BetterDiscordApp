/**
 * BetterDiscord Client Core
 * Copyright (c) 2015-present JsSucks - https://github.com/JsSucks
 * All rights reserved.
 * https://github.com/JsSucks - https://betterdiscord.net
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree. 
*/

'use strict';

const { Logger } = require('./modules');

class BetterDiscord {

    constructor() {
        Logger.log('main', 'Init');
    }

}

if (window.BetterDiscord) {
    Logger.log('main', 'Attepting to inject again?');
} else {
    let bdInstance = new BetterDiscord();
    window.BetterDiscord = {};
}