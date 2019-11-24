import './stylesheets/main.scss';

import '@babel/polyfill';

import {log, createEl, appendTo, text, css} from "./js/helpers";
import {} from './js/functions'; // Empty
import './js/packedges';

import Interface from './js/classes/Interface';

Interface.activate(); // Empty

import {header} from "./js/components/header";

const links = [
    {
        path: "/",
        name: "home"
    },
    {
        path: "/about",
        name: "about as"
    },
];

appendTo(document.body, header(links));
