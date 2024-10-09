import { addClassUntilTrue, checkBoundaries } from "./functions.js";
import {
  form,
  rContainer,
  rOptions,
  xContainer,
  xSelect,
  yContainer,
  yInput,
  table,
} from "./variables.js";

const getX = (): number => {
  return Number(xSelect.value);
};

const getY = (): number => {
  return yInput.valueAsNumber;
};

const getR = (): number => {
  // eslint-disable-next-line no-restricted-syntax
  for (const el of rOptions) {
    if (el.checked) {
      return Number(el.value);
    }
  }
  return NaN;
};

const checkY = (): boolean => {
  const value: number = getY();

  if (Number.isNaN(value)) return false;

  return checkBoundaries(value, -3, 3);
};

const checkX = (): boolean => {
  const value: number = getX();

  if (Number.isNaN(value)) return false;

  return checkBoundaries(value, -2, 2);
};

const checkR = (): boolean => {
  const value: number = getR();

  if (Number.isNaN(value)) return false;

  return checkBoundaries(value, 1, 3);
};

const markX = () => {
  addClassUntilTrue(checkX, xContainer, "incorrect_input");
};

const markY = () => {
  addClassUntilTrue(checkY, yContainer, "incorrect_input");
};

const markR = () => {
  addClassUntilTrue(checkR, rContainer, "incorrect_input");
};

const markAll = () => {
  markX();
  markY();
  markR();
};

xSelect.addEventListener("change", markX);

yInput.addEventListener("blur", markY);

const sendRequest = async (request: Request) => {
  try {
    const response = await fetch(request);

    if (!response.ok) {
      throw new Error(`Response status: ${response.status}`);
    }

    return await response.json();
  } catch (error) {
    console.error(error.message);
    return null;
  }
};

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
      "Content-type": "application/json; charset=UTF-8",
    },
    body: JSON.stringify({
      x: getX(),
      y: getY(),
      r: getR(),
    }),
  });

  const json = await sendRequest(request);
  if (json == null) {
    return;
  }

  table.innerHTML += `
        <tbody>
            <tr>
                <td>${json.x}</td>
                <td>${json.y}</td>
                <td>${json.r}</td>
                <td>${json.hit}</td>
                <td>${json.scriptTime}</td>
                <td>${json.time}</td>
            </tr>
        </tbody>
    `;

  form.reset();
});
