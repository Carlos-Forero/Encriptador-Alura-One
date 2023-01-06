
function encriptar(){

    if (document.getElementById('ingresaTexto').value.length>0){
        //document.write("hay texto")
        /* let t=document.getElementById('ingresaTexto') */
        
        var t=document.getElementById('ingresaTexto').value;
        if (/[A-Z]/g.test(t)||/[áéíóúÁÉÍÓÚ]/g.test(t)){
            console.log("A incertado mayusculas");
            alert("Recuerde solo ingresar texto en minuscula y sin acentos");
        }else{

        var tamano=document.getElementById('ingresaTexto').value.length;
        t=t.replace(/\n/g, "<br>");
        var letra=t.split("");
        console.log(tamano);
        for (var i=0;i<tamano;i++){
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
        document.getElementById('textoSalida').innerHTML = nt;
        }
    }
}
function desencriptar(){
    if (document.getElementById('ingresaTexto').value.length>0){
        //document.write("hay texto")
        /* let t=document.getElementById('ingresaTexto') */
        
        var t=document.getElementById('ingresaTexto').value;
        if (/[A-Z]/g.test(t)||/[áéíóúÁÉÍÓÚ]/g.test(t)){
            console.log("A incertado mayusculas");
            alert("Recuerde solo ingresar texto en minuscula y sin acentos");
        }else{

        var tamano=document.getElementById('ingresaTexto').value.length;
       // document.getElementById('ingresaTexto').textContent = t.replace(/\n/g, "<br>")
       // t=t.replace(/\n/g, "<br>");
        var nt= t.replace(/ai/g,"a").replace(/enter/g,"e").replace(/imes/g,"i").replace(/ober/g,"o").replace(/ufat/g,"u").replace(/\n/g, "<br>");
        //var posicion=t.indexOf("enter");
       // 
        
        /* while (posicion>=0)
        {
            t=t.slice(0,posicion)+"e"+t.slice(posicion+5);
            posicion=t.indexOf("enter");
        } */
       
        document.getElementById('textoSalida').innerHTML = nt;
        //document.write(nt);
        }
    }
}
function copiar(Copia){
      // Crea un campo de texto "oculto", este por un textarea

  var aux = document.createElement("textarea");

  // Asigna el contenido del elemento especificado al valor del campo
  // este para vaciar el contenido

  aux.innerHTML = document.getElementById('textoSalida').innerHTML

  // Añade el campo a la página
  document.body.appendChild(aux);

  // Selecciona el contenido del campo
  aux.select();

  // Copia el texto seleccionado
  document.execCommand("copy");

  // Elimina el campo de la página
  document.body.removeChild(aux);


}

function ocultarMuneco(){
    
    document.getElementById('rectangulo').style.display ='none';
    document.getElementById('rectangulo2').style.display ='flex';
    console.log("esta en zona");
}

/* REGLAS:
La letra "e" es convertida para "enter"
La letra "i" es convertida para "imes"
La letra "a" es convertida para "ai"
La letra "o" es convertida para "ober"
La letra "u" es convertida para "ufat" */