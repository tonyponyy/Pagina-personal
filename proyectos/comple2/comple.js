

function verLista(){

if (numfav>0){

    if (document.getElementById("paleta").style.visibility === "visible"){

        document.getElementById("paleta").style.visibility = "hidden"
        }else
        document.getElementById("paleta").style.visibility = "visible"
    }
}

var numcol = 0;
var numfav = 0;
//inicio
window.onload = function() {
aleator()


};

function botonRGB(){

var r = numerizar("r")
var g = numerizar("g")
var b = numerizar("b")
var hsl = rgbahsl(r,g,b);
sliders (hsl.matiz,hsl.saturacion,hsl.iluminacion)
var hex = rgbhex(r,g,b);
document.getElementById("hex").value= hex;
cuadradocolor(r,g,b)
document.getElementById("h").value= hsl.matiz;
document.getElementById("s").value= hsl.saturacion;
document.getElementById("l").value= hsl.iluminacion;
document.getElementById("cpik").value = "#"+hex;
console.log('"#' +hex+ '"')
}

function cuadradocolor(r,g,b){
Cuadrado.style.backgroundColor = "rgb("+r+","+g+","+b+")";
var color = rgbhex(r,g,b)
document.getElementById( 'Cuadrado').innerHTML='<img src="gotero.png" onClick="cambiopik()" ><input type="color" id="cpik" value="'+color+'#">#'+color+'<button class="corazoncuadrado" onclick="crearLista(' + r + ',' + g + ',' + b +',2);"><img src="estrella..png" alt="x" /></button>';

}


function rgbhex(r,g,b){
    var n1
    var n2
    var n3
 n1= String(r.toString(16))
 if (r<16){ n1 ="0"+n1}
 n2= String(g.toString(16))
  if (g<16){ n2 ="0"+n2}
 n3= String(b.toString(16))
  if (b<16){ n3 ="0"+n3}
 return  (n1+n2+n3)
}

// codigo para reescribir
function hexToRgb(hex) {
  var result = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(hex);
  return result ? {
    r: parseInt(result[1], 16),
    g: parseInt(result[2], 16),
    b: parseInt(result[3], 16)
  } : null;
}


function botonhex(){
var hex = document.getElementById("hex").value
var rgb = hexToRgb(hex)
console.log(rgb)
var r = rgb.r
var g = rgb.g
var b = rgb.b
CambiarCampoRgb (r,g,b)
cuadradocolor(r,g,b);
var hsl = rgbahsl(r,g,b);
sliders (hsl.matiz,hsl.saturacion,hsl.iluminacion)
cambiarCampoHsl(hsl.matiz,hsl.saturacion,hsl.iluminacion)

}



function numerizar(inputID) {
	return parseInt (document.getElementById(inputID).value );

}

function botonHsl(h,s,l){
	var matiz = numerizar('h');
	var saturacion = numerizar('s');
	var iluminacion = numerizar('l');
	var rgb = hslargb(matiz,saturacion,iluminacion);
	console.log(rgb)
	var r = rgb.r
	var g = rgb.g
	var b = rgb.b
	CambiarCampoRgb(r,g,b);
	CambiarCampoHex(r,g,b);
	cuadradocolor(r,g,b);

}

//pasa de la funcion numerizar al conversor a hsl y devuelve el resultado



function rgbahsl(cored,cogreen,coblue) {
	var rred = cored/255;
	var rblue = coblue/255;
	var rgreen = cogreen/255;
	//Encontramos el valor minimo y el maximo.
	var nmin = Math.min(rred, rblue, rgreen);
	var nmax = Math.max(rred, rblue, rgreen);
	//Calculamos la iluminaciÃ³n sumando el minimo y el maximo y dividiendo entre 2
	var iluminacion = Math.round ( (((nmin + nmax)/2)*1000))/10;
	// si la iluminaciÃ³n es mas pequeÃ±o que 0.5 Saturacion = ( max-min)/(max+min)
	// si es mas grande que 0.5 saturaciÃ³n =  (max-min)/(2.0-max-min)
	if ( iluminacion > 50) {
		var saturacion = Math.round((nmax-nmin)/(2.0-nmax-nmin) *1000) /10;

	} else {
	var saturacion = Math.round( ((nmax -nmin) / (nmax + nmin) *1000)) / 10;

	}

	if (  nmax == nmin) {
		var saturacion = 0;

	}
	// Para calcular el matiz dependerÃ¡ de que canal de color es el valor mas grande
	//si es rojo el matiz H = (G-B)/(max-min)
	//si es verde el matiz H = 2.0 + (B-R)/(max-min)
	// si es azul el matiz H = 4.0 + (R-G)/ (max-min)
	// rojo peta
	if ( nmax == rred) {
	  var prehue =  ( cogreen - coblue ) / ((nmax * 255 ) - (nmin * 255 ))
	}
	// verde peta
	if (  nmax == rgreen) {
	  var prehue = 2.0 + (coblue - cored ) / ((nmax * 255 ) - (nmin * 255 ))
	}
	// azul funciona
	if (  nmax == rblue) {
	  var prehue = 4.0 + (cored - cogreen ) / ((nmax * 255 ) - (nmin * 255 ))
	}
	// codigo aÃ±adido, puede fallar?Â¿
	if (  nmax == nmin) {
	  var prehue = 0
	}
	var hhue = Math.round(( prehue*60 ) )
	// limitar valores del matiz
	if (  hhue > 360) {
	  var hhue = hhue -360
	}
	if (  hhue < 0) {
	  var hhue = hhue +360
	}
	//Ahora se convierte en grados multiplicandolo por 60
	//H = N*60

	return {
		cored : cored,
		cogreen : cogreen,
		coblue : coblue,
		matiz: hhue,
		iluminacion : iluminacion,
		saturacion : saturacion
	}

}
function hslargb (h, s, l) {

    var r, g, b, m, c, x
// mira si el valor es NaN y si lo es, pasa a 0
    if (!isFinite(h)) h = 0
    if (!isFinite(s)) s = 0
    if (!isFinite(l)) l = 0

    h /= 60
    if (h < 0) h = 6 - (-h % 6)
    h %= 6

    s = Math.max(0, Math.min(1, s / 100))
    l = Math.max(0, Math.min(1, l / 100))

    c = (1 - Math.abs((2 * l) - 1)) * s
    x = c * (1 - Math.abs((h % 2) - 1))

    if (h < 1) {
        r = c
        g = x
        b = 0
    } else if (h < 2) {
        r = x
        g = c
        b = 0
    } else if (h < 3) {
        r = 0
        g = c
        b = x
    } else if (h < 4) {
        r = 0
        g = x
        b = c
    } else if (h < 5) {
        r = x
        g = 0
        b = c
    } else {
        r = c
        g = 0
        b = x
    }

    m = l - c / 2
    r = Math.round((r + m) * 255)
    g = Math.round((g + m) * 255)
    b = Math.round((b + m) * 255)

    return { r: r, g: g, b: b }

}

//cambia color fondo
function colorfondo(r,g,b){

	var r = numerizar('r');
	var g = numerizar('g');
	var b = numerizar('b');
	//document.body.style.backgroundColor= 'rgb(' + r + ',' + g + ',' + b + ')';
	//document.body.style.transition= " 4s";
}

//SLIDERS
// CAMBIA LA POSICION DE LOS SLIDERS
function sliders (h,s,l){

	document.getElementById("h2").value = h;
	document.getElementById("s2").value = s;
	document.getElementById("l2").value = l;
}

//crear lista
function crearLista(r,g,b,lista,DIV) {

    cpik.addEventListener("change", watchColorPicker, false);
 
	r = parseInt(r);
	g = parseInt(g);
	b = parseInt(b);

	//quizá poner en hexadecimal ¿?
	var textoRGB = (" RGB("+r+","+g+","+b+")")



	if (lista==2) {
	//var rowEl = document.createElement('div');
	//var findId = 0;
	//while(document.getElementById("fila"+findId)){
	//	findId ++
	//	}
	//DIV.className='favoritos';
	//DIV.id='fila'+findId;
	//DIV.innerHTML= textoRGB+ '<button onclick="CambiarCampoRgb (' + r + ',' + g + ',' + b + '),colorfondo(' + r + ',' + g + ',' + b + '), rgbahsl(' + r + ',' + g + ',' + b + '),imprimhsl(' + r + ',' + g + ',' + b + ');"><img src="gotero..png " alt="x"  /></button> <button onclick="removeFavorite('+findId+');"><img src="cross.png" alt="x" /></button>';
    //DIV.style.backgroundColor = 'rgb(' + r + ',' + g + ',' + b + ')';

  //document.getElementById("listafav").appendChild(rowEl);
        hex = rgbhex(r,g,b)
		var newDiv = document.createElement("div");
		numfav++
		numcol++
    	newDiv.id = "fav"+numfav;

    	var NEWFAV = document.getElementById("favoritos");

    	NEWFAV.appendChild(newDiv);

        document.getElementById("fav"+numfav).className = "favs"
        document.getElementById("fav"+numfav).style.backgroundColor = 'rgb(' + r + ',' + g + ',' + b + ')'  ;
    	document.getElementById("fav"+numfav).innerHTML = 'Hex#'+hex+'<button id= "btn" button onclick=" CambiarCampoRgb('+r+','+g+','+b+');botonRGB();armonizador(); cuadradocolor() ">            <img src="gotero.png " alt="x" /></button><button id= "btn2" button onclick=" borradiv(fav'+numfav+'); borradiv2(pal'+numfav+');  "><img src="cruz.png " alt="x" /></button>';
	// crea los divs de la paleta

	    var newDiv2 = document.createElement("div");
	    newDiv2.id = "pal"+numfav;
        var NEWPAL = document.getElementById("paleta");

            	NEWPAL.appendChild(newDiv2);

                document.getElementById("pal"+numfav).className = "pal"
                document.getElementById("pal"+numfav).style.backgroundColor = 'rgb(' + r + ',' + g + ',' + b + ')'  ;
            	document.getElementById("pal"+numfav).innerHTML = 'Hex <b>#'+hex+'&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</b>';





	}

   	if (lista==1) {
	var rowEl = document.createElement('div');
	DIV.className='color';
	DIV.innerHTML= '<button class="gotero" onclick="CambiarCampoRgb (' + r + ',' + g + ',' + b + '),rgbahsl(' + r + ',' + g + ',' + b + '), botonRGB(), armonizador() ;"><img src="gotero.png " alt="x" /></button> <button class="corazon" onclick="crearLista(' + r + ',' + g + ',' + b +',2);"><img src="estrella..png" alt="x" /></button>'+textoRGB ;
    DIV.style.backgroundColor = 'rgb(' + r + ',' + g + ',' + b + ')';


    }
    counter()
}

//cambia el numero del contador en el html
function counter(){

document.getElementById("contador").innerHTML = numcol +" colores guardados";
}


//cambiarlo en algun momento para que sea solo una función
function borradiv(id){
var borrahijo = favoritos.removeChild(id);
numcol--
counter()
}

function borradiv2(id){
var borralista = paleta.removeChild(id);
}


function removeFavorite(id){
	var row=document.getElementById('fila'+id);

 document.getElementById("listafav").removeChild(row);

	}


function CambiarCampoHex (r,g,b){

document.getElementById("hex").value= rgbhex(r,g,b);
}



function CambiarCampoRgb (r,g,b){

	document.getElementById("r").value=r;
	document.getElementById("g").value=g;
	document.getElementById("b").value=b;
}

function cambiarCampoHsl (h,s,l){

	document.getElementById("h").value=h;
	document.getElementById("s").value=s;
	document.getElementById("l").value=l;
}


function aleator(){

	var r = Math.round(Math.random()*255);
	var g = Math.round(Math.random()*255);
	var b = Math.round(Math.random()*255);
	document.getElementById("r").value=r;
	document.getElementById("g").value=g;
	document.getElementById("b").value=b;
botonRGB();
armonizador();
cuadradocolor()
}


function borrar() {

	document.getElementById("lista").innerHTML = "";

}

//armonizador
function armonizador(){
	var r = numerizar('r');
	var g = numerizar('g');
	var b = numerizar('b');
	var hsl = rgbahsl(r,g,b);
	//INVERSO
	var inv1 = -(r - 255);
	var inv2 = -(g - 255);
	var inv3 = -(b - 255);

	// COMPLEMENTARIO
	var complementario1 = hsl.matiz + 180;
	if (  complementario1 > 360) {
		var complementario1 = complementario1 -360;
	}
	if (  complementario1 < 0) {
		var complementario1 = complementario1 +360;
	}
	var resultado1 = hslargb(complementario1,hsl.saturacion,hsl.iluminacion)
	// TRIADA
	var triada1 = hsl.matiz + 120;
	if (  triada1 > 360) {
			var triada1 = triada1 -360;
			}
	if (  triada1 < 0) {
			var triada1 = triada1 +360;
			}
	var resultado2 = hslargb(triada1,hsl.saturacion,hsl.iluminacion)
	var triada2 = hsl.matiz + 240;
	if (  triada2 > 360) {
			var triada2 = triada2 -360;
			}
	if (  triada1 < 0) {
			var triada2 = triada2 +360;
			}
	var resultado3 = hslargb(triada2,hsl.saturacion,hsl.iluminacion)
	//COLORES ANALOGOS
	var ano1 = hsl.matiz + 30;
	if (  ano1 > 360) {
			var ano1 = ano1 -360;
			}
	if (  ano1 < 0) {
			var ano1 = ano1 +360;
			}
	var resultado4 = hslargb(ano1,hsl.saturacion,hsl.iluminacion)
	var ano2 = hsl.matiz - 30;
	if (  ano2 > 360) {
			var ano2 = ano2 -360;
			}
	if (  ano2 < 0) {
			var ano2 = ano2 +360;
			}
	var resultado5 = hslargb(ano2,hsl.saturacion,hsl.iluminacion)
	// ANALOGO DEL COMPLEMENTARIO
	var anoc1 = hsl.matiz +150;
	if (  anoc1 > 360) {
			var anoc1 = anoc1 -360;
			}
	if (  anoc1 < 0) {
			var anoc1 = anoc1 +360;
			}
	var resultado6 = hslargb(anoc1,hsl.saturacion,hsl.iluminacion)

	var anoc2 = hsl.matiz +210;
	if (  anoc1 > 360) {
			var anoc1 = anoc1 -360;
			}
	if (  anoc1 < 0) {
			var anoc1 = anoc1 +360;
			}
	var resultado7 = hslargb(anoc2,hsl.saturacion,hsl.iluminacion)
	//Variaciones por iluminacion
	var iluminacion1 = hslargb(hsl.matiz,hsl.saturacion,90);
	var iluminacion2 = hslargb(hsl.matiz,hsl.saturacion,80);
	var iluminacion3 = hslargb(hsl.matiz,hsl.saturacion,70);
	var iluminacion4 = hslargb(hsl.matiz,hsl.saturacion,60);
	var iluminacion5 = hslargb(hsl.matiz,hsl.saturacion,50);
	var iluminacion6 = hslargb(hsl.matiz,hsl.saturacion,40);
	var iluminacion7 = hslargb(hsl.matiz,hsl.saturacion,30);
	var iluminacion8 = hslargb(hsl.matiz,hsl.saturacion,20);
	var iluminacion9 = hslargb(hsl.matiz,hsl.saturacion,10);
	//Variaciones por saturacion
	var saturacion1 = hslargb(hsl.matiz,100,hsl.iluminacion);
	var saturacion2 = hslargb(hsl.matiz,90,hsl.iluminacion);
	var saturacion3 = hslargb(hsl.matiz,80,hsl.iluminacion);
	var saturacion4 = hslargb(hsl.matiz,70,hsl.iluminacion);
	var saturacion5 = hslargb(hsl.matiz,60,hsl.iluminacion);
	var saturacion6 = hslargb(hsl.matiz,50,hsl.iluminacion);
	var saturacion7 = hslargb(hsl.matiz,40,hsl.iluminacion);
	var saturacion8 = hslargb(hsl.matiz,30,hsl.iluminacion);
	var saturacion9 = hslargb(hsl.matiz,20,hsl.iluminacion);
	var saturacion10 = hslargb(hsl.matiz,10,hsl.iluminacion);
	var saturacion11 = hslargb(hsl.matiz,0,hsl.iluminacion);
	// Variaciones por matiz
	var matiz1 = hslargb(0,hsl.saturacion,hsl.iluminacion);
	var matiz2 = hslargb(36,hsl.saturacion,hsl.iluminacion);
	var matiz3 = hslargb(72,hsl.saturacion,hsl.iluminacion);
	var matiz4 = hslargb(108,hsl.saturacion,hsl.iluminacion);
	var matiz5 = hslargb(144,hsl.saturacion,hsl.iluminacion);
	var matiz6 = hslargb(180,hsl.saturacion,hsl.iluminacion);
	var matiz7 = hslargb(216,hsl.saturacion,hsl.iluminacion);
	var matiz8 = hslargb(252,hsl.saturacion,hsl.iluminacion);
	var matiz9 = hslargb(288,hsl.saturacion,hsl.iluminacion);
	var matiz10 = hslargb(324,hsl.saturacion,hsl.iluminacion);
	// crear las tablas y el texto
	//ponemos valores del texto
	var text0 = "inverso"
	var text1 = "Color original"
	var text2 = "Complementario"
	var text3 = "Triada"
	var text4 = "Colores analogos"
	var text5 = "Analogos del complementario"
	var A = "color"
	var B = "favoritos"
	//color original
	crearLista(r,g,b,1,coriginal);
	//color inverso
	crearLista(inv1,inv2,inv3,1,cinverso);
	//complementario
	crearLista(resultado1.r,resultado1.g,resultado1.b,1,ccomplementario);
	//triada
	crearLista(r,g,b,1,ctriada1);
	crearLista(resultado2.r,resultado2.g,resultado2.b,1,ctriada2);
	crearLista(resultado3.r,resultado3.g,resultado3.b,1,ctriada3);
	//colores analogos
	crearLista(resultado4.r,resultado4.g,resultado4.b,1,canalogos1);
	crearLista(resultado5.r,resultado5.g,resultado5.b,1,canalogos2);
	//analogo del complementario
	crearLista(resultado6.r,resultado6.g,resultado6.b,1,canalogocomp1);
	crearLista(resultado7.r,resultado7.g,resultado7.b,1,canalogocomp2);

    colorfondo()



}

//piker

function watchColorPicker() {
    var piker =document.getElementById("cpik");
    var temp = piker.value
    var color= temp.split("#");
    console.log(color[1])
    colorRGB =hexToRgb(color[1]);
     	document.getElementById("r").value=colorRGB.r;
     	document.getElementById("g").value=colorRGB.g;
     	document.getElementById("b").value=colorRGB.b;
     botonRGB();
    armonizador();
    cuadradocolor()
  }



