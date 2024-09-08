import {checkBoundaries, addClassUntilTrue} from "./functions.js";
import {
    x_container, y_container, r_container,
    x_select, y_input, r_options, form
} from "./variables.js";


const checkY = (): boolean => {
    const value: number = y_input.valueAsNumber;

    if (isNaN(value)) return false;

    return checkBoundaries(value, -3, 3);
}

const checkX = (): boolean => {
    const value: number = Number(x_select.value);

    if (isNaN(value)) return false;

    return checkBoundaries(value, -2, 2);
}

const checkR = (): boolean => {
    if (!r_options.some(el => el.checked)) {
        return false;
    }

    for (const el of r_options) {
        if (el.checked) {
            const value: number = Number(el.value);

            if (isNaN(value)) return false;

            return checkBoundaries(value, 1, 3);
        }
    }
}

const markX = () => {
    addClassUntilTrue(checkX, x_container, "incorrect_input");
}

const markY = () => {
    addClassUntilTrue(checkY, y_container, "incorrect_input")
}

const markR = () => {
    addClassUntilTrue(checkR, r_container, "incorrect_input")
}

const markAll = () => {
    markX();
    markY();
    markR();
}


x_select.addEventListener("change", markX);

y_input.addEventListener("blur", markY);


form.addEventListener("submit", (e) => {
    if (!(checkR() && checkX() && checkY())) {
        e.preventDefault();
        markAll()
    }
})