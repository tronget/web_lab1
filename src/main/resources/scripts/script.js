var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
import { addClassUntilTrue, checkBoundaries } from "./functions.js";
import { form, r_container, r_options, x_container, x_select, y_container, y_input } from "./variables.js";
const checkY = () => {
    const value = getY();
    if (isNaN(value))
        return false;
    return checkBoundaries(value, -3, 3);
};
const checkX = () => {
    const value = getX();
    if (isNaN(value))
        return false;
    return checkBoundaries(value, -2, 2);
};
const checkR = () => {
    const value = getR();
    if (isNaN(value))
        return false;
    return checkBoundaries(value, 1, 3);
};
const markX = () => {
    addClassUntilTrue(checkX, x_container, "incorrect_input");
};
const markY = () => {
    addClassUntilTrue(checkY, y_container, "incorrect_input");
};
const markR = () => {
    addClassUntilTrue(checkR, r_container, "incorrect_input");
};
const getX = () => {
    return Number(x_select.value);
};
const getY = () => {
    return y_input.valueAsNumber;
};
const getR = () => {
    for (const el of r_options) {
        if (el.checked) {
            return Number(el.value);
        }
    }
    return NaN;
};
const markAll = () => {
    markX();
    markY();
    markR();
};
x_select.addEventListener("change", markX);
y_input.addEventListener("blur", markY);
form.addEventListener("submit", (e) => __awaiter(void 0, void 0, void 0, function* () {
    e.preventDefault();
    if (!(checkR() && checkX() && checkY())) {
        markAll();
        return;
    }
    form.reset();
    const request = new Request("https://localhost:8080", {
        method: "POST",
        headers: {
            "Content-type": "application/json; charset=UTF-8"
        },
        body: JSON.stringify({
            x: getX(),
            y: getY(),
            r: getR()
        })
    });
    const json = yield sendRequest(request);
    console.log(json);
}));
const sendRequest = (request) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const response = yield fetch(request);
        if (!response.ok) {
            throw new Error(`Response status: ${response.status}`);
        }
        return yield response.json();
    }
    catch (error) {
        console.error(error.message);
    }
});
