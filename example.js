'use strict';

const browser = require('./lib').browser('urn:schemas-upnp-org:device:MediaRenderer:1');

browser.on('available', d => console.log('available', d));
browser.on('unavailable', d => console.log('unavailable', d));

browser.start();
