import './index.scss';
import {createEl,appendTo,log} from '../../helpers'

const header = (links=[]) => {
    const element = createEl('header');
    const list = createEl('ul');
    list.innerHTML = (links.map(({path,name})=>`
        <li>
            <a href="${path}">${name}</a>
        </li>
    `).join(''));
    appendTo(element,list);
    return element;
};


export {header}