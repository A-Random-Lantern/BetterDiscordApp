/**
 * BetterDiscord Settings Wrapper Component
 * Copyright (c) 2015-present Jiiks/JsSucks - https://github.com/Jiiks / https://github.com/JsSucks
 * All rights reserved.
 * https://betterdiscord.net
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
*/

<template>
    <div class="bd-settingswrap">
        <div v-if="noscroller" class="bd-flex bd-flexCol">
            <div class="bd-settingswrapHeader">
                <span class="bd-settingswrapHeaderText">{{ headertext }}</span>
                <slot name="header" />
            </div>
            <div class="bd-settingswrapContents bd-flex bd-flexGrow bd-flexCol">
                <slot />
            </div>
        </div>
        <ScrollerWrap v-else :scrollend="scrollend">
            <div class="bd-settingswrapHeader">
                <span class="bd-settingswrapHeaderText">{{ headertext }}</span>
                <slot name="header" />
            </div>
            <div class="bd-settingswrapContents">
                <slot />
            </div>
        </ScrollerWrap>
    </div>
</template>

<script>
    // Imports
    import { ScrollerWrap } from '../common';

    export default {
        props: ['headertext', 'scrollend', 'noscroller'],
        components: {
            ScrollerWrap
        }
    }
</script>
