function funcion1() {
    var lunes, martes, miercoles, jueves, viernes, compra1, compra2, compra3, compra4, compra5;
    var resultado = 0;
    lunes = prompt("CUAL ES SU COMPRA DE PRODUCTOS DEL LUNES: ");
    compra1 = prompt("CUAL ES SU GASTO DEL DIA: ");
    martes = prompt("CUAL ES SU COMPRA DE PRODUCTOS DEL MARTES: ");
    compra2 = prompt("CUAL ES SU GASTO DEL DIA: ");
    miercoles = prompt("CUAL ES SU COMPRA DE PRODUCTOS DEL MIERCOLES: ");
    compra3 = prompt("CUAL ES SU GASTO DEL DIA: ");
    jueves = prompt("CUAL ES SU COMPRA DE PRODUCTOS DEL JUEVES: ");
    compra4 = prompt("CUAL ES SU GASTO DEL DIA: ");
    viernes = prompt("CUAL ES SU COMPRA DE PRODUCTOS VIERNES: ");
    compra5 = prompt("CUAL ES SU GASTO DEL DIA: ");
    document.getElementById("demo1").innerHTML = lunes;
    document.getElementById("demo2").innerHTML = martes;
    document.getElementById("demo3").innerHTML = miercoles;
    document.getElementById("demo4").innerHTML = jueves;
    document.getElementById("demo5").innerHTML = viernes;
    document.getElementById("demo6").innerHTML = compra1;
    document.getElementById("demo7").innerHTML = compra2;
    document.getElementById("demo8").innerHTML = compra3;
    document.getElementById("demo9").innerHTML = compra4;
    document.getElementById("demo10").innerHTML = compra5;
    //Este estoy usando parsefloat de si encargas por en ejemplo con decimales aunque seria mejor con parseInt para que sea entero
    //resultado = parseFloat(compra1) + parseFloat(compra2) + parseFloat(compra3) + parseFloat(compra4) + parseFloat(compra5);
    resultado=(Number(compra1) + Number(compra2) + Number(compra3) + Number(compra4) + Number(compra5));
    document.getElementById("resultado").innerHTML = resultado;
}
//Esta es una version hecha por mi pero corta y funciona
/*function funcion2() {
    var dias=Array("LUNES","MARTES","MIERCOLES","JUEVES","VIERNES");
    var gastodia=Array();
    var compra=Array();
    var resultado=0;
    for(let i=0;i<dias.length;i++){
        gastodia[i]=prompt("CUAL ES SU COMPRA DE PRODUCTOS DEL "+dias[i]+": ");
        compra[i]=prompt("CUAL ES SU GASTO DEL DIA: ");
        document.getElementById("demo"+(i+1)).innerHTML=gastodia[i];
        cont=Number(i)+6;
        document.getElementById("demo"+cont).innerHTML=compra[i];
        resultado+=Number(compra[i]);
    }
    document.getElementById("resultado").innerHTML = resultado;
}*/