export const checkBoundaries = (
  num: number,
  left: number,
  right: number,
): boolean => left <= num && num <= right;

export const addClass = (el: HTMLElement, className: string): void => {
  el.classList.add(className);
};

export const removeClass = (el: HTMLElement, className: string): void => {
  el.classList.remove(className);
};

type CheckHandler = () => boolean;
export const addClassUntilTrue = (
  condition: CheckHandler,
  el: HTMLElement,
  className: string,
): void => {
  if (!condition()) {
    addClass(el, className);
    return;
  }
  removeClass(el, className);
};
