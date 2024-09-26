/*
• Crear un arreglo llamado num que almacene los siguientes datos:
20, 14, 8, 0, 5, 19 y 24 y se los muestre al usuario
• Al utilizar arreglos en base cero los elementos validos van de 0 a
n-1, donde n es el tamaño del arreglo
• En el ejemplo 1 las posiciones/indice del num entonces van desde
0 a 7-1, es decir de 0 a 6
*/

import * as readlineSync from "readline-sync";
let indice,ultimoElemento:number;
let num: number[]=new Array;
num=[20,14,8,0,5,19,24];

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
DibujarGuiones(80,"");
DibujarGuiones(80,"Identificacion Mes");
ultimoElemento= num.length-1;
for (let indice = 0; indice <= ultimoElemento; indice=indice+1) 
{
    console.log(num[indice]);
}
DibujarGuiones(80);
