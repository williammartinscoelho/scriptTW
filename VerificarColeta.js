// ==UserScript==
// @name         Farm W.M.Coelho
// @namespace    http://tampermonkey.net/
// @version      0.1
// @description  try to take over the world!
// @author       W.M.Coelho
// @match        https://*mode=scavenge*
// @include      https://*mode=scavenge*
// @grant        none
// ==/UserScript==

(function () {
    'use strict';
    if ($('.btn-disabled')[0] == undefined) {
        alert('COLETAR');
    } else {
        setTimeout(
            function () {
                $('#village_switch_right')[0].click();
            }, 60000
        );
    }

    let voice = document.querySelectorAll('.acb');
})();