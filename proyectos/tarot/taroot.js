
var baraja = [];
// posicion de cada carta ( true --> del derecho false --> del reves )
var pos_baraja =[];

for (var i = 0; i < 22; i++) {
   baraja[i]=i+1;
}

shuffle(baraja);
giracartas(pos_baraja);

function Nrandom(min, max) {
  return Math.floor(Math.random() * (max - min)) + min;
}

function giro(){
    pos = false
    if (Nrandom(0,10)>5){ pos= true}
    return pos
}


function giracartas(cartas){
    for (var i = 0; i < 22; i++) {

       cartas[i]= giro();

    }
}


function shuffle(cartas){

    for (var i = 0; i < cartas.length; i++) {
    n_aleatorio = Nrandom(0,cartas.length)
    carta1 = cartas[i]
    carta2 = cartas[n_aleatorio]

    cartas[i]= carta2;
    cartas[n_aleatorio]=carta1;


    }




}

function iniciar(){
        shuffle(baraja);
        giracartas(pos_baraja);
        var boton =  document.getElementById("iniciaB");
        boton.disabled = true;

        for (var i = 0; i < 7; i++) {
        if (pos_baraja[i]){
        Carta = document.body.innerHTML +='<a onmousemove="muestradiv('+(i+1)+')">  <img class ="carta" id=carta'+(i+1)+' src="'+baraja[i]+'.jpg" alt="" /> </img></a>'
        } else  Carta = document.body.innerHTML +='<a onmousemove="muestradiv('+(i+1)+')"> <img class ="cartaI" id=carta'+(i+1)+' src="'+baraja[i]+'.jpg" alt="" /> </img></a>'


        }

        var classe = document.getElementsByClassName('titu_carta');
                for (var i = 0; i < classe.length; i++) {
                classe[i].style.visibility = 'visible'
                }


        for (var i = 1; i < 8; i++) {
        var posicion = document.getElementById("pos"+i);
        if (pos_baraja[i-1]){
        posicion = document.getElementById('pos'+i).innerHTML += "<b>Carta : "+nombrecarta[baraja[i-1]-1]+". </b><br>"+significado[(baraja[i-1]*2)-2]
        } else posicion = document.getElementById('pos'+i).innerHTML += "<b>Carta : "+nombrecarta[baraja[i-1]-1]+". </b><br>"+significado[(baraja[i-1]*2)-1]

        }
}



    function muestradiv(num){
    cabecera = ""

    switch (num) {
      case 1:
      cabecera = "Pasado"
      texto_leyenda = "Esta carta es la que muestra aquello que dio comienzo a la situación por la cual se está consultando."
            break;
      case 2:
      cabecera ="Presente"
      texto_leyenda= "Esta carta se refiere a cómo se encuentra la situación en el momento presente. Cuál es precisamente su estado en relación a la consulta al día de hoy."

      break;
      case 3:
      cabecera ="Futuro"
      texto_leyenda ="Este arcano es el que nos dirá cómo se ve la situación por la cual se está consultando en el futuro inmediato."
      break;
      case 4:
      cabecera ="Consejo"
      texto_leyenda ="Es el consejo que nos da el Tarot. Esta carta nos da una recomendación relacionada con la consulta que está realizando. Se ha de tener siempre presente que es un consejo y no una sentencia implacable."
      break;
      case 5:
      cabecera ="Entorno"
      texto_leyenda="Es el arcano que define cómo se encuentran los demás con respecto a esta situación. Su entorno cercano, sus circunstancias: amigos, familiares, enemigos, etc."
      break;
      case 6:
      cabecera ="Obstaculos"
      texto_leyenda ="Es la carta que nos muestra qué cosas, personas o influencias están afectando negativamente la situación."
      break;
      case 7:
      cabecera ="Resultados"
      texto_leyenda="Es la carta que nos muestra el desenlace que tendrá la situación o pregunta realizada y  debe leerse relacionada con las demás. Este desenlace, por supuesto, puede ser positivo o negativo, pero siempre hablamos de probabilidades, por tanto queda en manos del consultante hacer algo para cambiarlo si dichas probabilidades no son de su agrado."
      break;
}



    var divacopiar = document.getElementById("pos"+num);
    var tabla_titulo = document.getElementById("tabla_titulo").innerHTML = cabecera;
    var tabla = document.getElementById("tabla").innerHTML = divacopiar.textContent;
    var leyenda = document.getElementById("leyenda").innerHTML = texto_leyenda

    }


function leecarta(num){

    console.log("Nombre : "+nombrecarta[baraja[num]-1])
    console.log("carta numero : "+baraja[num])

        if (pos_baraja[num]){
        console.log("Posicion derecha")
        } else console.log("Posicion invertida");

        if (pos_baraja[num]){
        console.log(significado[baraja[num]*2]);
        } else console.log(significado[(baraja[num]*2)-1])


}

var nombrecarta =["El mago","La sacerdotisa","La emperatriz","El emperador","El sumo sacerdote","Los enamorados",
                  "El carro","La justicia","El ermitaño","La rueda de la fortuna","La fuerza","El colgado",
                  "La muerte","La templanza","El diablo","La torre", "La estrella","La luna","El sol", "El juicio",
                  "El mundo","El loco"]

var significado=[]
significado[0]="Originalidad. Iniciativa, centro de acción, inteligencia espontánea. Posesión de sí mismo, autonomía, emancipación de todo prejuicio. Elocuencia, destreza, habilidad, finura, diplomacia. Abogado, orador, diplomático o político. "
significado[1]="Carente de escrúpulos, arribista, intrigrante, embustero, pillo, estafador, charlatán. Indecisión, ineptitud, voluntad débil, retraso, inseguridad. Voluntad aplicada a malos fines. "
significado[2]="Paciencia, silencio, discreción, reserva, meditación, modestia, resignación y piedad. Decisión meditada. "
significado[3]="Disimulo, intenciones ocultas, rencor, pereza, intolerancia, fanatismo. Se vuelve pesada y pasiva, es como una carga. Retraso, tensión y torpeza en las relaciones. Decisión inmeditada."
significado[4]="Comprensión, inteligencia, instrucción. Encanto, afabilidad, elegancia, distinción. Cortesía, abundancia, riqueza. Matrimonio, fecundidad, dulzura. "
significado[5]="Afectación, pose, frivolidad, coquetería, vanidad. Desdén, presunción. Lujo innecesario. Sensible a los halagos. Falta de refinamiento. Discusiones en todos los planos. Esterilidad. "
significado[6]="Poder, voluntad, energía, certeza, constancia, firmeza, rigor, exactitud, equidad y positivismo. Realización. Protector poderoso."
significado[7]="Testarudez, falta de idealismo. Adversario obstinado. Caída, pérdida de los bienes. "
significado[8]="Sabiduría, perseverancia, enseñanzas, consejos equitativos, generosidad e indulgencia, mansedumbre. Ayuda de los superiores, organización. La carga que representa al consultante (usted), en la forma de la voz interior. Dogma."
significado[9]="Jefe sentencioso, excesivamente crítico, moralista estrecho de miras, profesor autoritario, teórico limitado, consejero desprovisto de sentido práctico, carencia de apoyo espiritual. Inconvencional, ilógico, supersticioso, incapaz de actuar coherente y racionalmente. "
significado[10]="Elección o decisión. Unión, matrimonio, amor, la unión de los opuestos, atracción, balance, apertura a la inspiración. Pruebas superadas. Armonía de la vida interior y el mundo exterior."
significado[11]="Desorden, fracaso, divorcio, amor desgraciado y contrariedades de todo tipo. Matrimonio frustrado, tentación peligrosa. Peligro de ser seducido. Inconducta, libertinaje y debilidad. Peleas, infidelidad. Inestabilidad emocional. "
significado[12]="Triunfo, victoria, superación de obstáculos, esperanza, conquista. Buena noticia inesperada. Gran autocontrol, habilidad para determinar el propio destino. Gran fuerza física y mental. Velocidad. Viaje. "
significado[13]="Desorden generalizado. Enfermedad. Peligroso descontrol. Peligro de un accidente violento. Malas noticias. Fatiga. Falta de tacto. Mala conducta. Actividad afiebrada y sin reposo. "
significado[14]="Justicia, armonía, equidad, integridad, regla de conducta, firme propósito, acción de juzgar, moderación en todas las cosas. Indepenencia de espíritu. Para mantener el balance ciertas cosas deben ser sacrificadas. Puede estar relacionada con asuntos legales, jucios, matrimonios, divorcios, etc. "
significado[15]="Fanatismo, injusticia, severidad en el juicio, abuso, acusaciones falsas. Inseguridad. Marañas legales. Inseguridad. Falta de un apropiado balance. "
significado[16]="Prudencia, sabiduría, paciencia, silencio, avance espiritual, inspiración divina, circunspección. Retiro del mundo, soledad. Peregrinaje. Puede ser un maestro. La realización de un balance y progresar. "
significado[17]="Inmadurez, vicios, oscuridad, testarudez, traición, engaño. Misantropía, misoginia, celibato. Persona excesivamente tímida e insociable. Enemigos ocultos. Prudencia que sobra o que falta. "
significado[18]="Cambio, evolución, éxito, buena fortuna, destino. Felicidad, abundancia. Nuevas condiciones. Abundancia, crecimiento. "
significado[19]="La transformación se efectuará dificultosamente pero se hará de todos modos. Progreso retardado, Retroceso. "
significado[20]="Sublimación o regulación de las pasiones y bajos instintos. Poder, energía, gran amor. El espíritu que domina la materia. Acción, coraje, éxito. Poderosa voluntad y gran fuerza física. La fuerza interior que domestica la bestia. Poder sobre los animales. "
significado[21]="Discordia, ruina. Debilidad, testarudez, abuso de poder. Impaciencia, temeridad, grosería, insensibilidad. dureza, crueldad, furor. "
significado[22]="Fortaleza, sabiduría. Limitaciones auto impuestas. Iniciación, prueba. Redención a través del sacrificio, pérdida. Poder profético. Decisiones suspendidas. Elección que requiere contemplación. "
significado[23]="Arrogancia, egotismo, resistencia a las influencias espirituales. Materialismo. Esfuerzo desperdiciado. Falsa profecía. Fracaso. Falta de límites, falta de franqueza, carencia de sacrificio. "
significado[24]="Transformación completa. Muerte y renacimiento. El fin de algo. Evolución desde un estado a otro superior. Cambio provechoso. "
significado[25]="Estancamiento, muerte, petrificación. Enfermedad incurable. Matrimonio roto. Falta de oportunidades, esperanza deshecha. "
significado[26]="Consideración cuidadosa, paciencia, moderación, adaptación, compostura, reflexión. Paciencia uniendo dos opuestos, combinándolos cuidadosamente. Buen matrimonio. Trabajando en armonía con otros, habilidad directiva. Algo se está preparando. Gran talento y creatividad. Luchando por trascendencia a través del trabajo. Alquimia. La unión de los opuestos refinada por el fuego de la voluntad. "
significado[27]="Desorden, conflicto, mala combinación, peleas. Posibilidad de naufragio. Desarreglos. "
significado[28]="Destino (bueno o malo). Poder de seducción, impulso ciego, tentación, obsesión. Desviación sexual. Un estado mental confusional. Las pasiones carnales descontroladas. "
significado[29]="Carta dañina, fatalidad, mal uso de la fuerza. Debilidad, ceguera, desorden. Efectos maléficos. La patética condición humana que prefiere la ilusión a la verdad. "
significado[30]="Cambios repentinos sin otra alternativa. Colapso, escape de la prisión o liberación de ataduras, accidente. Los planes fracasarán, las intenciones no se realizarán. El dedo de Dios. Bancarrota. Muerte súbita. "
significado[31]="Confusión completa. Ganar la libertad a un gran costo. Falsas acusaciones, opresión. Castigo que resulta de los excesos cometidos, enfermedad. Error presuntuoso que no sabe rectificarse a tiempo. "
significado[32]="Esperanza, ayuda inesperada, perspicacia y claridad de visión, inspiración, flexibilidad. Un gran amor será dado y recibido. Buena salud. Carta totalmente espiritual. "
significado[33]="Arrogancia, pesimismo, testarudez. enfermedad, error de juicio. Impotencia psíquica, reestructuración, privación y abandono. "
significado[34]="Intuición, umbral de un importante cambio, camino difícil y oscuro, desarrollo de poderes psíquicos. Navegación, experimentación, trabajo penoso. "
significado[35]="Peligros no vistos, enemigos ocultos, alucinación, autoengaño, histeria, desorientación. Inestabilidad, embustes, trampas, falso saber, carácter neurótico. Escándalo, secreto que se hace público, chantajista. "
significado[36]="Gloria. Felicidad material. Matrimonio o relación feliz, colaboración. Exito. Placer, energía, motivación, inspiración."
significado[37]="Molestias, disimulos, arrogancia, vanidad. Compromiso o trabajo perdido. Tanteo en la oscuridad, desorientación. Deseo de figurar. "
significado[38]="Cambio radical, resurección a una vida nueva. Trabajo (o vida) bien hecha. Voluntad para iniciar algo nuevo. Buen juicio y discernimiento. Poder creativo e influencia sobre la familia y la carrera laboral. Capacidad de perdonar. Despertar. Dictámen judiciale favorable."
significado[39]="Vacilación espiritual, debilidad, juicio o decisión equivocada. Enfermedad, separación. Dictamen juidicial adverso. Error sobre sí mismo y sobre los otros. Decisión postergada. "
significado[40]="Suceso garantizado. Recompensas recibidas. Viaje, emigración (dentro del mismo continente), cambio de lugar de residencia. Compra o venta de tierras. "
significado[41]="Obstáculos, estancamiento, estorbos. Necesidad de trabajar muy duro para alcanzar el éxito. "
significado[42]="Carencia de sentido común. Potencial fuerza de voluntad y destreza. El espíritu en busca de experiencia. Audacia, extravagancia. Negligencia, poca reflexión. Desorientación, inmadurez, desequilibrio. Ligereza. Indiscreción y superficialidad. "
significado[43]="Pasiones y obsesiones, indecisión, irracionalidad, apatía, complicaciones. Decisiones equivocadas, caída, abandono, inmovilización. Locura. Desborde psíquico y/o emocional. Viaje obstaculizado. "