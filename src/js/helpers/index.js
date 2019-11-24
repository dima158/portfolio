const {log} = console;
const createEl = element => document.createElement(element);
const appendTo = (parent, element) => parent.append(element);
const prependTo = (parent, element) => parent.prepend(element);
const text = (element, txt) => element.textContent = txt;
const css = (element, style = {}) => {
    let string = '';
    for (let key in style) {
        string += `${key}:${style[key]};`;
    }
    element.style.cssText = string;
};
export {
    log,
    createEl,
    appendTo,
    prependTo,
    text,
    css
}