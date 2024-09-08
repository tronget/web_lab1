export const checkBoundaries = (num, left, right) => {
    return left <= num && num <= right;
};
export const addClass = (el, className) => {
    el.classList.add(className);
};
export const removeClass = (el, className) => {
    el.classList.remove(className);
};
export const addClassUntilTrue = (condition, el, className) => {
    if (!condition()) {
        addClass(el, className);
        return;
    }
    removeClass(el, className);
};
