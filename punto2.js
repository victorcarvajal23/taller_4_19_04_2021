/* 2.	3 usuarios entran a una heladería a comprar un helado,
 pero hay un problema: los precios no están al lado de cada estante
  con su respectivo helado. “Ellos quieren comprar el helado más caro
   que puedan con la plata que tienen.
Miguel tiene $1.000 
Carlos tiene $2.000 
Manuel tiene $500 
Los precios de helados son los siguientes:
Bonais: $400
Palito de helado de agua: $1.000 
Palito de helado de crema: $2.200
Bombón helado con arequipe: $1.500
Bombón helado con chispas de chocolate: $2.500
Bombón helado con fresas: $2.800
Medio litro de helado: $ 2.000
El programa tiene que pedir el ingreso de su dinero y el nombre de cliente
Si hay más de un helado con el mismo precio o por de bajo de precio del
usuario mostrar las opciones disponibles
El programa también tiene que poder dar los vueltos de su compra con su factura */
let inicio=true
let inicio2=true
let inicio3=true
let dinero
let cliente
let seleccion=[]
let seleccion2=[]
let valorF=[]
let conta=0
let codigo

let precios=[400,1000,2200,1500,2500,2800,2000]
let nombres=["1.bonais","2.Palito de helado de agua","3.Palito de helado de crema","4.Bombón helado con arequipe","5.Bombón helado con chispas de chocolate","6.Bombón helado con fresas","7.Medio litro de helado"]
let codigoHelados=[1,2,3,4,5,6,7]
while(inicio==true){
dinero=parseInt(prompt("Ingrese la cantidad de dinero"))
if (dinero==1000 || dinero==2000 || dinero==500) {
    inicio=false
}
else{
    alert("ingrese un valor valido")
    inicio=true
}
}
while(inicio2==true){
    cliente=prompt("Ingrese el nombre del cliente").toUpperCase() 
    if (cliente=="MIGUEL"|| cliente=="CARLOS" || cliente=="MANUEL") {
        inicio2=false
    }
    else{
        alert("ingrese un valor valido")
        inicio2=true
    }  
    }
    //validar cliente y dinero
if ((cliente=="MIGUEL"&&dinero==1000) || (cliente=="CARLOS"&&dinero==2000)||( cliente=="MANUEL"&&dinero==500)) {
    for (let i = 0; i < precios.length; i++) {
        if (precios[i]<=dinero) {
            conta++
            seleccion[conta]=nombres[i]
            valorF[conta]=precios[i]
            seleccion2[conta]=codigoHelados[i]
        }   
    }
}
else{
    alert("usuario invalido")
}
console.log("dinero "+dinero)
console.log("cliente "+cliente)
    //seleccionar helado

while(inicio3==true){

codigo=parseInt( prompt(`puede comprar  \n${seleccion}\nIngrese el codigo del producto que desea comprar`))
let valida2=Number.isInteger(codigo)
/* for (let i = 0; i < seleccion2.length; i++) {
    
   
} */
if (valida2==true ) {
    let vueltos
    vueltos=dinero-valorF[codigo]
    console.log(`compro un (${seleccion[codigo]}) por un valor de ${valorF[codigo]} y le sobro ${vueltos}`)

    inicio3=false
}
else {
alert("ingrese un codigo valido")
inicio3=true
}
}
