'use strict';

require('./index.html');
require('./app.css');
const Elm = require('./elm/Main');

Elm.Main.embed(document.getElementById('main'));
