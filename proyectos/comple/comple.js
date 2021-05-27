


function numerizar(inputID) {
	return parseInt (document.getElementById(inputID).value );

}

function botonHsl(h,s,l){
	var matiz = numerizar('h');
	var saturacion = numerizar('s');
	var iluminacion = numerizar('l');
	var rgb = hslargb(matiz,saturacion,iluminacion);
	var r = rgb.r
	var g = rgb.g
	var b = rgb.b
	CambiarCampoRgb(r,g,b);
	borrar();
	colorfondo(r,g,b);
	transformar ();
	armonizador();
		
}

//pasa de la funcion numerizar al conversor a hsl y devuelve el resultado
function transformar (){
	var r = numerizar('r');
	var g = numerizar('g');
	var b = numerizar('b');
	 imprimhsl(r,g,b);
}	 
	 
function imprimhsl(r,g,b){
var hsl = rgbahsl(r,g,b);
	sliders(hsl.matiz,hsl.saturacion,hsl.iluminacion);
	cambiarCampoHsl (hsl.matiz,hsl.saturacion,hsl.iluminacion);
	document.getElementById( 'resultado-h').innerHTML="matiz: " + hsl.matiz+ "\u00B0";
	document.getElementById('resultado-s').innerHTML="saturaci\u00F3n: " +hsl.saturacion+ "%";
	document.getElementById('resultado-l').innerHTML="iluminaci\u00F3n: " +hsl.iluminacion + "%";
}


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
	document.body.style.backgroundColor= 'rgb(' + r + ',' + g + ',' + b + ')';
}

//SLIDERS
// CAMBIA LA POSICION DE LOS SLIDERS
function sliders (h,s,l){

	document.getElementById("h2").value = h;
	document.getElementById("s2").value = s;
	document.getElementById("l2").value = l;
}

//crear lista
function crearLista(r,g,b,lista) {
	
	r = parseInt(r);
	g = parseInt(g);
	b = parseInt(b);
	
	var textoRGB = (" RGB("+r+","+g+","+b+")")
	
	if (lista==2) {
	var rowEl = document.createElement('div');
	var findId = 0;
	while(document.getElementById("fila"+findId)){
		findId ++
		}
	rowEl.className='favoritos';
	rowEl.id='fila'+findId;
	rowEl.innerHTML= textoRGB+ '<button onclick="CambiarCampoRgb (' + r + ',' + g + ',' + b + '),colorfondo(' + r + ',' + g + ',' + b + '), rgbahsl(' + r + ',' + g + ',' + b + '),imprimhsl(' + r + ',' + g + ',' + b + ');"><img src="gotero..png " alt="x"  /></button> <button onclick="removeFavorite('+findId+');"><img src="cross.png" alt="x" /></button>';
    rowEl.style.backgroundColor = 'rgb(' + r + ',' + g + ',' + b + ')';  
 
  document.getElementById("listafav").appendChild(rowEl);
		
	}
	
   	if (lista==1) {
	var rowEl = document.createElement('div');
	rowEl.className='color';
	rowEl.innerHTML= ''+textoRGB+ '<button onclick="CambiarCampoRgb (' + r + ',' + g + ',' + b + '),colorfondo(' + r + ',' + g + ',' + b + '), rgbahsl(' + r + ',' + g + ',' + b + '),imprimhsl(' + r + ',' + g + ',' + b + ');"><img src="gotero..png " alt="x" /></button> <button onclick="crearLista(' + r + ',' + g + ',' + b +',2);"><img src="estrella..png" alt="x" /></button>';
    rowEl.style.backgroundColor = 'rgb(' + r + ',' + g + ',' + b + ')';  
 
  document.getElementById("lista").appendChild(rowEl);
  
    }
}

function removeFavorite(id){
	var row=document.getElementById('fila'+id);
	
 document.getElementById("listafav").removeChild(row);
 
	}

//Creatitulos
function crearTitulo(titulo) {
	
	var rowEl = document.createElement('div');
	rowEl.className='titulos';
	rowEl.innerHTML= ''+titulo+ '';
    rowEl.style.backgroundColor = 'rgb(255,255,255)';  
    document.getElementById("lista").appendChild( rowEl);
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
	crearTitulo('Color original')
	crearLista(r,g,b,1);
	//color inverso
	crearTitulo('Color inverso')
	crearLista(inv1,inv2,inv3,1);
	//complementario
	crearTitulo('Color complementario')
	crearLista(resultado1.r,resultado1.g,resultado1.b,1);
	//triada
	crearTitulo('Triada')
	crearLista(r,g,b,1);
	crearLista(resultado2.r,resultado2.g,resultado2.b,1);
	crearLista(resultado3.r,resultado3.g,resultado3.b,1);
	//colores analogos
	crearTitulo('Colores analogos')
	crearLista(resultado4.r,resultado4.g,resultado4.b,1);
	crearLista(resultado5.r,resultado5.g,resultado5.b,1);
	//analogo del complementario
	crearTitulo('Analogos del complementario')
	crearLista(resultado6.r,resultado6.g,resultado6.b,1);
	crearLista(resultado7.r,resultado7.g,resultado7.b,1);
	//variaciones por matiz
	var OpcionesM = document.getElementById('opcionesMatiz').checked;
		if(OpcionesM){
			crearTitulo('Variaciones por matiz')
			crearLista(matiz1.r,matiz1.g,matiz1.b,1);
			crearLista(matiz2.r,matiz2.g,matiz2.b,1);
			crearLista(matiz3.r,matiz3.g,matiz3.b,1);
			crearLista(matiz4.r,matiz4.g,matiz4.b,1);
			crearLista(matiz5.r,matiz5.g,matiz5.b,1);
			crearLista(matiz6.r,matiz6.g,matiz6.b,1);
			crearLista(matiz7.r,matiz7.g,matiz7.b,1);
			crearLista(matiz8.r,matiz8.g,matiz8.b,1);
			crearLista(matiz9.r,matiz9.g,matiz9.b,1);
			crearLista(matiz10.r,matiz10.g,matiz10.b,1);
	}
	
	//Sombras
	var OpcionesI = document.getElementById('opcionesIluminacion').checked;
		if(OpcionesI){
			crearTitulo('Variaciones por iluminacion')
			crearLista(iluminacion1.r,iluminacion1.g,iluminacion1.b,1);
			crearLista(iluminacion2.r,iluminacion2.g,iluminacion2.b,1);
			crearLista(iluminacion3.r,iluminacion3.g,iluminacion3.b,1);
			crearLista(iluminacion4.r,iluminacion4.g,iluminacion4.b,1);
			crearLista(iluminacion5.r,iluminacion5.g,iluminacion5.b,1);
			crearLista(iluminacion6.r,iluminacion6.g,iluminacion6.b,1);
			crearLista(iluminacion7.r,iluminacion7.g,iluminacion7.b,1);
			crearLista(iluminacion8.r,iluminacion8.g,iluminacion8.b,1);
			crearLista(iluminacion9.r,iluminacion9.g,iluminacion9.b,1);
	}
	//variaciones por saturacion
	var OpcionesS = document.getElementById('opcionesSaturacion').checked;
		if(OpcionesS){
		crearTitulo('Variaciones por saturacion')
		crearLista(saturacion1.r,saturacion1.g,saturacion1.b,1);
		crearLista(saturacion2.r,saturacion2.g,saturacion2.b,1);
		crearLista(saturacion3.r,saturacion3.g,saturacion3.b,1);
		crearLista(saturacion4.r,saturacion4.g,saturacion4.b,1);
		crearLista(saturacion5.r,saturacion5.g,saturacion5.b,1);
		crearLista(saturacion6.r,saturacion6.g,saturacion6.b,1);
		crearLista(saturacion7.r,saturacion7.g,saturacion7.b,1);
		crearLista(saturacion8.r,saturacion8.g,saturacion8.b,1);
		crearLista(saturacion9.r,saturacion9.g,saturacion9.b,1);
		crearLista(saturacion10.r,saturacion10.g,saturacion10.b,1);
		crearLista(saturacion11.r,saturacion11.g,saturacion11.b,1);
	}
}

