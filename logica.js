
function encriptar(){
    var t1=document.getElementById('ingresaTexto').value;
    var tamano=document.getElementById('ingresaTexto').value.length;
    var t;
    if (tamano>0){
         t=(document.getElementById('ingresaTexto2').value=t1);
        var borrar='';
        document.getElementById('ingresaTexto').value=borrar;
    }
     t=document.getElementById('ingresaTexto2').value;
    var tamano2=document.getElementById('ingresaTexto2').value.length;
    
    
    if(tamano==0 && tamano2==0){
        document.getElementById('textoSalida').value = '';
    }
    if (tamano2>0){
     
        if (/[A-Z]/g.test(t)||/[áéíóúÁÉÍÓÚ]/g.test(t)){
            console.log("A incertado mayusculas");
            alert("Recuerde solo ingresar texto en minuscula y sin acentos");
        }else{

        //t=t.replace(/\n/g, "<br>");
        var letra=t.split("");
        console.log(tamano);
        for (var i=0;i<tamano2;i++){
            if (letra[i]=="a"){
                letra[i] = "ai";
                console.log(letra[i]);
            }
            if (letra[i]=="e"){
                letra[i] = "enter";
                console.log(letra[i]);
            }
            if (letra[i]=="i"){
                letra[i] = "imes";
                console.log(letra[i]);
            }
            if (letra[i]=="o"){
                letra[i] = "ober";
                console.log(letra[i]);
            }
            if (letra[i]=="u"){
                letra[i] = "ufat";
                console.log(letra[i]);
            }
        }
        var nt=letra.join("");
        document.getElementById('textoSalida').value = nt;
        }
    }
}
function desencriptar(){

    var t1=document.getElementById('ingresaTexto').value;
    var tamano=document.getElementById('ingresaTexto').value.length;
    var t;
    if (tamano>0){
         t=(document.getElementById('ingresaTexto2').value=t1);
        var borrar='';
        document.getElementById('ingresaTexto').value=borrar;
    }
     t=document.getElementById('ingresaTexto2').value;
    var tamano2=document.getElementById('ingresaTexto2').value.length;
    
    
    if(tamano==0 && tamano2==0){
        document.getElementById('textoSalida').value = '';
    }
    if (tamano2>0){
    
        if (/[A-Z]/g.test(t)||/[áéíóúÁÉÍÓÚ]/g.test(t)){
            console.log("A incertado mayusculas");
            alert("Recuerde solo ingresar texto en minuscula y sin acentos");
        }else{

       // document.getElementById('ingresaTexto').textContent = t.replace(/\n/g, "<br>")
       // t=t.replace(/\n/g, "<br>");
        var nt= t.replace(/ai/g,"a").replace(/enter/g,"e").replace(/imes/g,"i").replace(/ober/g,"o").replace(/ufat/g,"u");
        //var posicion=t.indexOf("enter");
    
        /* while (posicion>=0)
        {
            t=t.slice(0,posicion)+"e"+t.slice(posicion+5);
            posicion=t.indexOf("enter");
        } */
       
        document.getElementById('textoSalida').value = nt;
        //document.write(nt);
        }
    }
}
function copiar(Copia){

  var aux = document.createElement("textarea");

  aux.innerHTML = document.getElementById('textoSalida').value
  document.body.appendChild(aux);
  aux.select();
  document.execCommand("copy");
  document.body.removeChild(aux);


}

function ocultarMuneco(){
    
    document.getElementById('rectangulo').style.display ='none';
    document.getElementById('rectangulo2').style.display ='flex';
    //document.getElementById('ingresaTexto').style.height ='288px';
    document.getElementById('ingresaTexto').style.display ='none';
    document.getElementById('ingresaTexto2').style.display ='flex';
    let tamVentana=window.screen.availWidth;
    if(tamVentana <= 375){
    document.querySelector('.botones').style.top = '874px';
    document.querySelector('.instruccion').style.top ='840px';
    console.log('Movil');
    }
    if(tamVentana > 375 && tamVentana < 768){
    document.querySelector('.botones').style.top = '870px';
    document.querySelector('.instruccion').style.top ='836px';
    console.log('Tablet');
    }
    if(tamVentana >= 769){
    document.querySelector('.botones').style.top = '885px';
    document.querySelector('.instruccion').style.top ='851px';
    console.log('PC');
    }
    
}


/* REGLAS:
La letra "e" es convertida para "enter"
La letra "i" es convertida para "imes"
La letra "a" es convertida para "ai"
La letra "o" es convertida para "ober"
La letra "u" es convertida para "ufat" */