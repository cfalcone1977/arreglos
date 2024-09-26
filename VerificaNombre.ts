/*
Dado un array con nombres de tamaño 5, pedir
al usuario que ingrese un nombre y verificar si está
en el arreglo. Imprimir el arreglo y si está o no en
él.
*/

import * as readlineSync from "readline-sync";
let indice:number;
let encontrado:boolean;
let nameverif:string;
let nombres: string[]=new Array(5);
nombres=["Juan", "Pedro", "Daniel", "Marcelo", "Victor"];


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
DibujarGuiones(40,"");
DibujarGuiones(40,"Verificador de Nombres");
DibujarGuiones(40,"");
nameverif=readlineSync.question("Ingrese el nombre a verificar: ");
console.log("\n");
DibujarGuiones(40,"Listado");
encontrado=false;
for (indice = 0; indice < 5; indice=indice+1) 
{
    console.log(nombres[indice]);
    if (nameverif== nombres[indice]) {
                                      console.log(`**Encontrado** posicion: ${indice+1}`);
                                      encontrado=true;
                                     }
}
if (encontrado == false) {
                          console.log("NOMBRE NO ENCONTRADO")
                         }
DibujarGuiones(40);
