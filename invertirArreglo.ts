/*
Almacene en un arreglo de tamaño N los números ingresados
por el usuario
• La dimensión N también es ingresada por el usuario
• Muestre los números del arreglo pero del último al primero
*/

import * as readlineSync from "readline-sync";
let indice,cantElement:number;
let num: number[]=new Array;

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
DibujarGuiones(60,"");
DibujarGuiones(60,"Invertir Arreglo");
DibujarGuiones(60,"");
cantElement=readlineSync.questionInt("Ingrese la cantidad de elementos del arreglo: ");
for (indice = 0; indice < cantElement; indice=indice+1) 
{
    num[indice]=readlineSync.questionInt(`Ingrese el elemento ${indice+1} del arreglo: `);
}
DibujarGuiones(60);
DibujarGuiones(60,"Elementos invertidos");
for (indice = cantElement; indice>0; indice=indice-1) 
    {
        console.log(num[indice-1]);
    }
DibujarGuiones(60);
