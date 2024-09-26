/*
Llenar un array de 10 posiciones con números
aleatorios entre 0 y 99

• Para obtener números aleatorios crear una función
Azar, que se base en las funciones disponibles en el
paquete Math:
-Math.random() devuelve un nro al azar entre 0 y 1.
*/

import * as readlineSync from "readline-sync";
let indice:number;
let num: number[]=new Array(10);

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

function Azar(limite:number):number
{
let numeroAlazar:number;
numeroAlazar=Math.round(Math.random()*limite);
return numeroAlazar;
}

console.clear();
DibujarGuiones(80,"");
DibujarGuiones(80,"Array Numero al AZAR");
for (let indice = 0; indice < 10; indice=indice+1) 
{
    num[indice]=Azar(100);
    console.log(`El numero en la posicion ${indice} es ${num[indice]}`);
}
DibujarGuiones(80);
