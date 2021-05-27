var peces =0;
var iniciado = false;

function creaPez(){
    document.body.innerHTML +=' <div class ="pez"> <img  id=pez'+peces+' src="./images/acuario/pez'+parseInt(creaRandom(1,10))+'.png" alt="" /> </img></div>'
    var pez =  document.getElementById('pez'+peces+'');
    pez.style.width = ""+creaRandom(32,320)+"px";
    pez.style.transition= ""+creaRandom(4,10)+"s"; ;
    pez.style.top=""+creaRandom(0,document.body.scrollHeight)+"px";
    pez.style.zIndex="2;"
        if (chance(5)){
            pez.style.left="1300px"
            pez.style.transform="scaleX(-1)";
        } else pez.style.left="-45px";
    peces++
}

function creaRandom(min, max) {
  return Math.random() * (max - min) + min;
}

function inicia(){
    var root = document.documentElement;
    colorfondo="#9aa3f9"
    root.style.setProperty("--fondo_pagina", "#9aa3f9");
for (var i = 0; i < 10; i++) {
    creaPez();
    }
    if (!iniciado){
        iniciado = true;
        muevePeces()
    }
}

function muevePeces(){
    for (var i = 0; i < peces; i++) {
    if (chance(2)){
       var pez =  document.getElementById('pez'+i+'');

       //proxima posicion horizontal.
       pp_h = creaRandom(-200,200)
       pp_v = creaRandom(-200,200)
        // movimiento vertical
         var pos_h = parseInt(pez.style.top)
        if (pos_h<0) {

        pp_h =  creaRandom(0,200)
        }
        if (pos_h>document.body.scrollWidth) {

        pp_h = creaRandom(-200,0)
        }

        pez.style.top=""+(pp_h+pos_h) +"px";

        // movimiento horizontal

        var pos_v = parseInt(pez.style.left)
        var pp_v = creaRandom(-200,200)
        if (pos_v<0){
        pp_v = creaRandom(100,200)
        }

        if (pos_v>document.body.scrollHeight){
         pp_v = creaRandom(-400,-200)
        }
        pez.style.left=""+(pp_v+pos_v) +"px";

    }

    }
    setTimeout(muevePeces, 700);
 }

function chance(numero){
    ra=creaRandom(0,10)
    resultado =false
    if (ra <numero){
    resultado = true
    }
    return resultado;
}

function separador(string){
    var resultado = string.split("px");
     return parseInt( resultado[0] )

}

