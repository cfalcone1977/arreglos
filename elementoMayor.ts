/*
Dado el siguiente arreglo
[4,7,9,3,1,45,67,23,29,78,11,16]
- Crear un programa que encuentre cual es el número
más grande del arreglo e imprimirlo por consola
- Almacenar el número más grande en una variable
global y pasarlo a una función para determinar si el
número es par o impar

*/


import * as readlineSync from "readline-sync";
let indice, mayor, posicion:number;
let ispar:boolean;
let numeros: number[]=new Array(12);
numeros=[4,7,9,3,1,45,67,23,29,78,11,16];


function DibujarGuiones(cantidad:number,mensaje:string="") 
{
  let cantOrig, cantletras, indice: number;
  let guiones:string;
  cantOrig = cantidad;
  /*
  agregue la posibilidad de enviar un mensaje adaptativo entre los guiones!!. si envio mensaje a la funcion, 
  esta centra entre los guiones el mensaje (cantidades pares de guiones).
  */
  if (mensaje!="") {
                    cantletras = mensaje.length;  
                    cantidad=(cantidad - cantletras) / 2;
                    guiones = "";
                    for (indice = 1; indice <=cantidad; indice=indice +1) 
                      {
                      guiones = guiones + "-";
                      }
                    if (cantletras % 2 != 0) {
                                             console.log(`${guiones}${mensaje}${guiones}-`);
                                             } else {
                                                     console.log(`${guiones}${mensaje}${guiones}`); 
                                                    }
                  } else {
                          guiones = ""  ;
                          for (indice = 1; indice <=cantidad; indice=indice +1) 
                                              {
                                              guiones = guiones + "-";
                                              } 
                                            console.log(guiones);
                         }
}

function Isparimpar(n:number):boolean
{
    let resultado:boolean;
    let parimpar:number;
    parimpar = n % 2;
    if (parimpar == 0) {
                 resultado=true;
                }
                else {
                     resultado=false;
                     }
    return resultado;
}

console.clear();
DibujarGuiones(60,"");
DibujarGuiones(60,"Determinar el mayor numero de un arreglo");
DibujarGuiones(60,"");
console.log("\n");
mayor=numeros[0];
posicion=0;
for (indice = 0; indice < 12; indice=indice+1) 
{
 if (numeros[indice]>mayor) {
                            mayor=numeros[indice];
                            posicion=indice;
                           }
}
console.log(`El mayor elemento dentro del arreglo es ${mayor} y se encuentra en el lugar ${posicion+1}`);
if (Isparimpar(mayor)) {
                   console.log("**Es un numero PAR**");
                  } else {
                         console.log("**Es un numero IMPAR**");
                         }
DibujarGuiones(60);
