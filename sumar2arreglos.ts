/*
Sumar los elementos de cada una de las posiciones
de dos arreglos y guardar el resultado en otro arreglo
• El arreglo tiene dimensión 6 y los números de los dos
vectores los carga el usuario
*/



import * as readlineSync from "readline-sync";
let indice:number;
let vector1: number[]= new Array(6);
let vector2: number[]= new Array(6);
let vectorR: number[]= new Array(6);


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
DibujarGuiones(60,"Sumar Dos Arreglos");
DibujarGuiones(60,"");
for (indice = 0; indice < 6; indice=indice+1) 
    {
        vector1[indice]=readlineSync.questionInt(`Ingrese el numero ${indice+1} de 6 en arreglo1: `);
    }
for (indice = 0; indice < 6; indice=indice+1) 
    {
        vector2[indice]=readlineSync.questionInt(`Ingrese el numero ${indice+1} de 6 en arreglo2: `);
    }      
for (indice = 0; indice < 6; indice=indice+1) 
{
    vectorR[indice]= vector1[indice] + vector2[indice];
}
DibujarGuiones(60);
console.log(vectorR);

