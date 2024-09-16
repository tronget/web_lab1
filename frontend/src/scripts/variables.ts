export const x_container: HTMLElement = document.querySelector(".x_container");
export const y_container: HTMLElement = document.querySelector(".y_container");
export const r_container: HTMLElement = document.querySelector(".r_container");
export const x_select = document.getElementById("x_select") as HTMLSelectElement;
export const y_input = document.getElementById("y_input") as HTMLInputElement;
export const r_options: HTMLInputElement[] = Array.from(
    document.querySelectorAll("input[name='r_input']")
);
export const form = document.getElementById("form") as HTMLFormElement;
export const table = document.getElementById("myTable");