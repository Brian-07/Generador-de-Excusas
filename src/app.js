/* eslint-disable */
import "bootstrap";
import "./style.css";

import "./assets/img/rigo-baby.jpg";
import "./assets/img/4geeks.ico";

window.onload = () => {
  document.querySelector(`#btn`).addEventListener("click", () => {
    document.querySelector("#the-excuse").innerHTML = generateExcuse();
  });

  console.log("Hello Rigo from the console!");
};
let generateExcuse = () => {
  let pronombres = [`Un`];
  let sujeto = [
    `corredor`,
    `mapache`,
    `perro`,
    `gato`,
    `ave`,
    `conductor`,
    `comediante`
  ];
  let accion = [`tomó mi`, `comió mi`, `robó mi`, `se llevó mi`];
  let posesion = [`tarea`, `nariz`, `cartera`, `zapato`];
  let donde = [`en la calle.`, `en mi casa.`, `en la escuela.`, `en la disco.`];

  let proIndex = Math.floor(Math.random() * pronombres.length);
  let sujIndex = Math.floor(Math.random() * sujeto.length);
  let accIndex = Math.floor(Math.random() * accion.length);
  let poseIndex = Math.floor(Math.random() * posesion.length);
  let donIndex = Math.floor(Math.random() * donde.length);
  return (
    pronombres[proIndex] +
    ` ` +
    sujeto[sujIndex] +
    ` ` +
    accion[accIndex] +
    ` ` +
    posesion[poseIndex] +
    ` ` +
    donde[donIndex]
  );
};
