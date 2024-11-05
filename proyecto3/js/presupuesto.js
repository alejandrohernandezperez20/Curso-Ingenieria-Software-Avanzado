function presupuesto() {
    const java=7500;
    const python=6000;
    const c=6000;
    const php=500;
    var valor1=0;
    var descricion;
    var factura;
    factura=prompt("numero de factura: ");
    document.getElementById("demo").innerHTML=factura;
    valor1=prompt("cantidad de curso a vender:  ");
    document.getElementById("demo1").innerHTML=valor1;
    descricion=prompt("describa el servicio a vender: ");
    document.getElementById("demo2").innerHTML=descricion;
    let curso;
    curso=prompt("elija el curso java, python,C,php");
    switch(curso){
        case "java":
            document.getElementById("demo3").innerHTML=java;
            break;
        case "python":
            document.getElementById("demo3").innerHTML=python;
            break;
        case "C":
            document.getElementById("demo3").innerHTML=c;
            break;
        case "php":
            document.getElementById("demo3").innerHTML=php;
            break;
        default:
           document.get("demo3").innerHTML="curso no disponible";
           break;
    }
    total=curso;
    switch(total){
        case "java":
            document.getElementById("demo4").innerHTML=java*valor1;
            document.getElementById("demo5").innerHTML=java*valor1;
            document.getElementById("demo6").innerHTML=(java*valor1)*0.21;
            document.getElementById("demo7").innerHTML=((java*valor1)*0.21)+Number(java*valor1);
            break;
        case "python":
            document.getElementById("demo3").innerHTML=python;
            document.getElementById("demo5").innerHTML=python*valor1;
            document.getElementById("demo6").innerHTML=(python*valor1)*0.21;
            document.getElementById("demo7").innerHTML=((python*valor1)*0.21)+Number(python*valor1);
            break;
        case "C":
            document.getElementById("demo3").innerHTML=c;
            document.getElementById("demo5").innerHTML=c*valor1;
            document.getElementById("demo6").innerHTML=(c*valor1)*0.21;
            document.getElementById("demo7").innerHTML=((c*valor1)*0.21)+Number(c*valor1);
            break;
        case "php":
            document.getElementById("demo3").innerHTML=php;
            document.getElementById("demo5").innerHTML=php*valor1;
            document.getElementById("demo6").innerHTML=(php*valor1)*0.21;
            document.getElementById("demo7").innerHTML=((php*valor1)*0.21)+Number(php*valor1);
            break;
        default:
            document.get("demo3").innerHTML="curso no disponible";
            break;
    }
}


function presupuesto2() {
    const java=7500,python=6000,c=6000,php=500;   
    var factura=0,descricion,factura; 
}