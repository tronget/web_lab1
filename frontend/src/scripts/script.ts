import {addClassUntilTrue, checkBoundaries} from "./functions.js";
import {form, r_container, r_options, x_container, x_select, y_container, y_input} from "./variables.js";



const checkY = (): boolean => {
    const value: number = getY();

    if (isNaN(value)) return false;

    return checkBoundaries(value, -3, 3);
}

const checkX = (): boolean => {
    const value: number = getX();

    if (isNaN(value)) return false;

    return checkBoundaries(value, -2, 2);
}

const checkR = (): boolean => {
    const value: number = getR();

    if (isNaN(value)) return false;

    return checkBoundaries(value, 1, 3);
}

const markX = () => {
    addClassUntilTrue(checkX, x_container, "incorrect_input");
}

const markY = () => {
    addClassUntilTrue(checkY, y_container, "incorrect_input");
}

const markR = () => {
    addClassUntilTrue(checkR, r_container, "incorrect_input");
}

const getX = (): number => {
    return Number(x_select.value);
}

const getY = (): number => {
    return y_input.valueAsNumber
}

const getR = (): number => {
    for (const el of r_options) {
        if (el.checked) {
            return Number(el.value);
        }
    }
    return NaN;
}


const markAll = () => {
    markX();
    markY();
    markR();
}


x_select.addEventListener("change", markX);

y_input.addEventListener("blur", markY);


form.addEventListener("submit", async (e) => {

    e.preventDefault();

    if (!(checkR() && checkX() && checkY())) {
        markAll();
        return;
    }

    markAll();

    const request = new Request("http://localhost/api/", {
        method: "POST",
        headers: {
            "Content-type": "application/json; charset=UTF-8"
        },
        body: JSON.stringify({
            x: getX(),
            y: getY(),
            r: getR()
        })
    })

    const json = await sendRequest(request);

    console.log(json);

    form.reset();
})

const sendRequest = async (request: Request) => {

    try {
        const response = await fetch(request);

        if (!response.ok) {
            throw new Error(`Response status: ${response.status}`)
        }

        return await response.json();

    } catch (error) {
        console.error(error.message)
    }
}