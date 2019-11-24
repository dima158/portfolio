import './stylesheets/main.scss';

import '@babel/polyfill';

import {log, createEl, appendTo, text, css} from "./js/helpers";
import './js/functions'; // Empty
import './js/packedges';

import Interface from './js/classes/Interface';

Interface.activate(); // Empty

const div = createEl('div');
text(div, 'myDIV');
css(div, {
    color: 'red',
    background: 'blue'
});
appendTo(document.body, div);
