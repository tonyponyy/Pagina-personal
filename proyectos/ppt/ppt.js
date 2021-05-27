const net = new brain.NeuralNetwork();
var entrenamiento =[ ]
var n_partidas =0;
var humano_ultima;
var brain_ultima;
var ahora_humano;
var ahora_brain= Math.floor(Math.random() * 3);
var partidas_ganadas_humano=0; var partidas_ganadas_brain=0;
var siguiente_texto;
var historico_counter =0;
// 0-piedra 1-papel 2-tijera

function partida(arg) {
ahora_humano=arg;
n_partidas++
cambia_partidas = document.getElementById("numpartida").innerHTML = "Partida #"+n_partidas;

//cambiamos imagenes

imagenes =["piedra.png","papel.png","tijeras.png"]

cambia_imagen = document.getElementById("human_hand").innerHTML = '<img src="'+imagenes[ahora_humano]+'">'
cambia_imagen = document.getElementById("brain_hand").innerHTML = '<img src="'+imagenes[ahora_brain]+'">'



//comparacion resultados
if (ahora_humano == ahora_brain){
 // empate
 titulo("empate");
 historico("<b>empate<b>")
 if (n_partidas>6){historico(siguiente_texto)}else historico("Aún no hay partidas suficientes para entrenar a brain , faltan <b>"+ (6-n_partidas)+" partidas.")
 }
if (ahora_humano == 0 && ahora_brain == 2){
 // gana humano
 titulo("gana humano");
  historico("<b>Gana humano<b>")
 if (n_partidas>6){historico(siguiente_texto)}else historico("Aún no hay partidas suficientes para entrenar a brain , faltan <b>"+ (6-n_partidas)+" partidas.")
 partidas_ganadas_humano++;
 }
if (ahora_humano == 1 && ahora_brain == 0){
 // gana humano
 titulo("gana humano");
 historico("<b>Gana humano<b>")
  if (n_partidas>6){historico(siguiente_texto)}else historico("Aún no hay partidas suficientes para entrenar a brain , faltan <b>"+ (6-n_partidas)+" partidas.")
  partidas_ganadas_humano++;
 }
 if (ahora_humano == 2 && ahora_brain == 1){
  // gana humano
  titulo("gana humano");
  historico("<b>Gana humano<b>")
   if (n_partidas>6){historico(siguiente_texto)} else historico("Aún no hay partidas suficientes para entrenar a brain , faltan <b>"+ (6-n_partidas)+" partidas.")
   partidas_ganadas_humano++;
  }
  if (ahora_brain == 0 && ahora_humano == 2){
   // gana brain
   titulo("gana brain");
   historico("<b>Gana brain<b>")
    if (n_partidas>6){historico(siguiente_texto)} else historico("Aún no hay partidas suficientes para entrenar a brain , faltan <b>"+ (6-n_partidas)+" partidas.")
    partidas_ganadas_brain++;
   }
    if (ahora_brain == 1 && ahora_humano == 0){
     // gana brain
     titulo("gana brain");
     historico("<b>Gana brain<b>")
      if (n_partidas>6){historico(siguiente_texto)} else historico("Aún no hay partidas suficientes para entrenar a brain , faltan <b>"+ (6-n_partidas)+" partidas.")
     partidas_ganadas_brain++;
     }
    if (ahora_brain == 2 && ahora_humano == 1){
     // gana brain
     document.getElementById('titulo_marcador').style = 'opacity:1';
     titulo("gana brain");
     historico("<b>Gana brain<b>")
      if (n_partidas>6){historico(siguiente_texto)} else historico("Aún no hay partidas suficientes para entrenar a brain , faltan <b>"+ (6-n_partidas)+" partidas.")
     partidas_ganadas_brain++;
     }

document.getElementById('titulo_marcador').style = '  animation-name: slidein';


cambia_puntuacion = document.getElementById("m_humano").innerHTML = "Humano -"+partidas_ganadas_humano;
cambia_puntuacion = document.getElementById("m_brain").innerHTML = "Brain -"+partidas_ganadas_brain;

if (partidas_ganadas_humano> partidas_ganadas_brain){
cambia_puntuacion = document.getElementById("m_humano").innerHTML +='<img src="corona.png">'
}
if (partidas_ganadas_humano< partidas_ganadas_brain){
cambia_puntuacion = document.getElementById("m_brain").innerHTML +='<img src="corona.png">'
}



//añade lo aprendido al entrenamiento (excepto si es la primera partida):
    if (n_partidas !=1){

     var jugadas_anteriores = [0,0,0,0,0,0]
          jugadas_anteriores[brain_ultima]=1;
          jugadas_anteriores[humano_ultima+3]=1;
     var ahora_humano_array = [0,0,0]
         ahora_humano_array[ahora_humano]=1;
         console.log(jugadas_anteriores)
         console.log(ahora_humano_array)


         entrenamiento.push({input: jugadas_anteriores , output: ahora_humano_array})

    }
    //entrenamos el cerebro si la es mayor de 5
    if (n_partidas>5){
    historico("Haciendo la prediccion...")
    net.train( entrenamiento);
    var valor_a_predecir = [0,0,0,0,0,0];
        valor_a_predecir[ahora_brain]=1
        valor_a_predecir[ahora_humano+3]=1

    var prediccion = net.run(valor_a_predecir)
    console.log(prediccion)
        if (prediccion[0]>prediccion[1]&&prediccion[0]>prediccion[2]){ /* el humano sacara piedra*/
        ahora_brain = 1
        siguiente_texto = "Se ha predicho que el humano sacaría piedra con una probabilidad del <b>"+(prediccion[0]*100).toFixed(2)+"%"
        }
        if (prediccion[1]>prediccion[0]&&prediccion[1]>prediccion[2]){ /* el humano sacara papel*/
        ahora_brain = 2
         siguiente_texto = "Se ha predicho que el humano sacaría papel con una probabilidad del <b>"+(prediccion[1]*100).toFixed(2)+"%"
        }
        if (prediccion[2]>prediccion[0]&&prediccion[2]>prediccion[1]){ /* el humano sacara tijera*/
        ahora_brain = 0
        siguiente_texto = "Se ha predicho que el humano sacaría tijera con una probabilidad del <b>"+(prediccion[2]*100).toFixed(2)+"%"
        }
        historico("Ya se ha hecho la predicción para la siguiente partida.")
    } else ahora_brain= Math.floor(Math.random() * 3);


    humano_ultima =ahora_humano
    brain_ultima = ahora_brain

    document.getElementById("historico").scrollTop =  document.getElementById("historico").scrollTopMax
}


function titulo(texto){
text = document.getElementById("titulo_marcador").innerHTML = texto;

}

function historico(texto){
historico_counter++

if (historico_counter%2 ==0 ){
text = document.getElementById("historico").innerHTML += "<span class='historico_impar'>"+texto+"</span> <br>";

} else text = document.getElementById("historico").innerHTML +=texto+"<br>";

}




//pruevas

/*

var arr =
 entrenamiento.push({input: [0,1,0,0,1,0], output: [0,1,0]})
 entrenamiento.push({input: [1,0,0,0,1,0], output: [0,0,1]})
 entrenamiento.push({input: [0,1,0,0,0,1], output: [1,0,0]})
 entrenamiento.push({input: [0,1,0,0,0,1], output: [0,0,1]})
net.train( entrenamiento);

const output = net.run([1,0,0,1,0,0]); // [0.987]
console.log("eha : "+output)

*/