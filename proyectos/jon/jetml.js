
//Jon eat too much Lasagna  (jetml)

function seleccionarTrama (){
	
	var numero = numero = Math.floor( Math.random() * (6 - 1) + 1);
//Trama totalmente aleatoria
	if (  numero == 1) {
		
			jetml (1,1,1)
		kepasa ("totalmente aleatorio");
	}
//Trama con solo soliloquios
	if (  numero == 2) {
		
			jetml (2,2,2)
		
		kepasa ("trama con solo dialogos");
		
	}
// Dialogo con desarollo y conclusión dialogada
	if (  numero == 3) {
		
			jetml (2,3,2)
			
		kepasa ("dialogos en todas menos en la del medio");
		
	}
// Presentacion dialogada, desarollo dialogada y silencio ( final introspectivo )
	if (  numero == 4) {
		
			jetml (2,2,3)
			kepasa ("introspectivo");
		
	}
// Silencio, silencio y dialogo.
	if (  numero == 5) {
		
			jetml (3,3,2)
			kepasa (" silencio silencio y dialogo");
		
		}

function jetml (A,B,C){
	//primera viñeta
	if (  A == 1) {
		
		numero = Math.floor (Math.random() * (50 - 1) + 1);
		InsertarImagen(numero,1)
	}
	if (  A == 2) {
		
		numero = Math.floor (Math.random() * (39 - 1) + 1);
		InsertarImagen(numero,1)
	}
	if (  A == 3) {
		
		numero = Math.floor ( Math.random() * (50 - 39) + 39);
		InsertarImagen(numero,1)
	}
	
	//segunda viñeta	
	if (  B == 1) {
		
		numero = Math.floor (Math.random() * (50 - 1) + 1);
		InsertarImagen(numero,2)
	}
	if (  B == 2) {
		
		numero = Math.floor( Math.random() * (22 - 1) + 1);
		InsertarImagen(numero,2)
	}
	if (  B == 3) {
		
		numero = Math.floor (Math.random() * (50 - 22) + 22);
		InsertarImagen(numero,2)
	}
	// tercera viñeta	
	if (  C == 1) {
		
		numero =Math.floor( Math.random() * (50 - 1) + 1);
		InsertarImagen(numero,3)
	}
	if (  C == 2) {
		
		numero = Math.floor( Math.random() * (19 - 1) + 1);
		InsertarImagen(numero,3)
	}
	if (  C == 3) {
		
		numero =Math.floor( Math.random() * (50 - 19) + 19);
		InsertarImagen(numero,3)
	}

	
}}

function InsertarImagen(num,posicion){

	var imagen = document.getElementById('comic');
    imagen.insertAdjacentHTML('beforeend', '<img src="'+posicion+'/'+num+'.jpg">');


}

function kepasa(titulo) {
	
	var rowEl = document.createElement('div');
	rowEl.className='titulos';
	rowEl.innerHTML= ''+titulo+ '';
    rowEl.style.backgroundColor = 'rgb(255,255,255)';  
    document.getElementById("comic").appendChild( rowEl);
}