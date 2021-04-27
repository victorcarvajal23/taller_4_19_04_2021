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
let contenedor
let contenedor2
let max
let max2=[]

let precios=[400,1000,2200,1500,2500,2800,2000]
//let nombres=["Bonais","Palito de helado de agua","Palito de helado de crema","Bombón helado con arequipe","Bombón helado con chispas de chocolate","Bombón helado con fresas","Medio litro de helado"]
let nombres=[" 1.Bonais"," 2.Palito de helado de agua"," 3.Palito de helado de crema"," 4.Bombón helado con arequipe"," 5.Bombón helado con chispas de chocolate"," 6.Bombón helado con fresas"," 7.Medio litro de helado"]
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
            seleccion[conta]=nombres[i]
            valorF[conta]=precios[i]
            seleccion2[conta]=codigoHelados[i]
            conta++
        }   
    }
    console.log("Dinero "+dinero)
    console.log("Cliente "+cliente)
    //console.log(seleccion)
    max=valorF[0]
    for (let i = 0; i < valorF.length; i++) {
        
        if (valorF[i] >= max) {
            max=valorF[i]
            max2=seleccion[i]
            
        }   
    }
    //console.log("max"+valorF)
        // console.log(`pudo comprar(${seleccion})`)
        // let vueltos
        // vueltos=dinero-max
        // console.log(`compro un (${max2}) por un valor de ${max} y le sobro ${vueltos}`)




        //seleccionar helado

    while(inicio3==true){

    codigo=parseInt( prompt(`Puede comprar \n${seleccion}\nIngrese el codigo del producto que desea comprar`))
    let valida2=Number.isInteger(codigo)
        if (valida2==true ) {
            for (let i = 0; i < seleccion2.length; i++) {
                if (codigo==seleccion2[i]) {
                    contenedor=seleccion2[i]
                    contenedor2=valorF[i]
                }
            }
            if (contenedor==codigo) {   
                let vueltos
                vueltos=dinero-contenedor2
                console.log(`compro un (${nombres[contenedor-1]}) por un valor de ${contenedor2} y le sobro ${vueltos}`)
                inicio3=false
            }
            else{
                alert("ingrese un codigo valido")
                valida2=true
            }         
        }
        else {
        alert("ingrese un codigo valido")
        inicio3=true
        }
    }
}
else{
    alert("Ese usurio no tiene ese dinero")
}

