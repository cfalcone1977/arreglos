/*
• Construya un algoritmo que tenga un arreglo
de dimensión deseada por el usuario y llénelo
con los nombres que el usuario desee

• Crear un arreglo de las posiciones que desee
el usuario y llenarlo con nombres de personas
*/

import * as readlineSync from "readline-sync";
let indice,dimension:number;
let nombres: string[]=new Array;

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
DibujarGuiones(50,"Nombres Deseados");
DibujarGuiones(50,"");
dimension = readlineSync.questionInt("Ingrese el numero de nombres a ingresar: ");
for (let indice = 0; indice < dimension; indice=indice+1) 
{
    nombres[indice]=readlineSync.question(`Ingrese el nombre ${indice+1} de ${dimension}: `);
}
console.log("\n\n");
DibujarGuiones(80);
for (let indice = 0; indice < dimension; indice=indice+1) 
    {
        console.log(`En la posicion ${indice} del arreglo ingreso el nombre: ${nombres[indice]} `);
    }