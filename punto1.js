/* 1.	Pregunto si quiere el huevo frito.
Si me dice que si, lo frio, si me dice que no, lo hago hervido.
Una vez cocinado le pregunto si quiere sal en el huevo.
Si me dice que no lo sirvo en el Plato. Si me dice que si le hecho sal y después lo sirvo en el plato.
 */

let huevo=prompt("quiere el huevo frito \n SI \n NO").toUpperCase();
if (huevo=="SI") {
    console.log("frito");
}
else{
    console.log("hervido");
}

let sal=prompt("quiere sal en el huevo frito \n SI \n NO").toUpperCase();
if (sal=="SI") {
    console.log("hechar sal");
    console.log("servir en plato");

}
else{
    console.log("servir en plato");
}