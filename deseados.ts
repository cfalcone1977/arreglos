/*
• Construya un algoritmo que tenga un arreglo de

dimensión 5 y llénelo con los números que el usuario

desee.

• Muestre los números del arreglo al usuario
*/

import * as readlineSync from "readline-sync";
let indice,ultimoElemento:number;
let num: number[]=new Array(5);

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
console.clear();
DibujarGuiones(50,"");
DibujarGuiones(50,"Numeros Deseados");
DibujarGuiones(50,"");

for (let indice = 0; indice < 5; indice=indice+1) 
{
    num[indice]=readlineSync.questionFloat(`Ingrese el numero ${indice+1} de 5: `);
}
console.log("\n\n");
DibujarGuiones(80);
for (let indice = 0; indice < 5; indice=indice+1) 
    {
        console.log(`En la posicion ${indice} del arreglo se agrego el numero ${num[indice]} `);
    }
