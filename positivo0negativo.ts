/*
Almacene en un arreglo de dimensión N números (la
cantidad es ingresada por el usuario)
• Muestre cuántos números son positivos, cuántos son
negativos y cuántos ceros hay

*/

import * as readlineSync from "readline-sync";
let indice,cantElement, positivos,negativos,ceros:number;
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
// funcion destinada a encontrar valores positivos, negativos o ceros; recibe un arreglo y un numero
// si el numero es -1 encuentra negativos, si es 1 encuentra positivos y si es 0, encuentra ceros!!
function Posi0Nega(n:number,datos:number[]):number
{
let cantidadPosi0Nega:number; 
let limite,index:number;
cantidadPosi0Nega=0;
limite=datos.length;
switch (n) 
    {
    case 1:
        for (index = 0; index < limite; index=index +1) 
            {
             if (datos[index]>0)
                {
                 cantidadPosi0Nega=cantidadPosi0Nega+1;   
                }
            }
        break;
    case -1:
        for (index = 0; index < limite; index=index +1) 
            {
             if (datos[index]<0)
                {
                 cantidadPosi0Nega=cantidadPosi0Nega+1;   
                }
            }    
        break;
    case 0:
        for (index = 0; index < limite; index=index +1) 
            {
             if (datos[index]==0)
                {
                 cantidadPosi0Nega=cantidadPosi0Nega+1;   
                }
            }
        
        break;
    }

return cantidadPosi0Nega;
}
console.clear();
DibujarGuiones(60,"");
DibujarGuiones(60,"Positivos - CERO - Negativos");
DibujarGuiones(60,"");
positivos=0;
negativos=0;
ceros=0;
cantElement=readlineSync.questionInt("Ingrese la cantidad de elementos del arreglo: ");
for (indice = 0; indice < cantElement; indice=indice+1) 
{
    num[indice]=readlineSync.questionInt(`Ingrese el elemento ${indice+1} del arreglo: `);
}
//la funcion Posi0Nega recibe como parametros:
// un valor numerico que representa la busqueda mayor a cero (1), menor a cero (-1); o los ceros (0)
// y el arreglo donde buscar esos valores
positivos=Posi0Nega(1,num);
negativos=Posi0Nega(-1,num);
ceros=Posi0Nega(0,num);
DibujarGuiones(60);
DibujarGuiones(60,"Cantidad de positivos, Negativos y CEROS");
console.log(`         Positivos: ${positivos}  Negativos: ${negativos}  Ceros: ${ceros}  `);
DibujarGuiones(60);
