
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
      texto_leyenda = "Esta carta es la que muestra aquello que dio comienzo a la situaci??n por la cual se est?? consultando."
            break;
      case 2:
      cabecera ="Presente"
      texto_leyenda= "Esta carta se refiere a c??mo se encuentra la situaci??n en el momento presente. Cu??l es precisamente su estado en relaci??n a la consulta al d??a de hoy."

      break;
      case 3:
      cabecera ="Futuro"
      texto_leyenda ="Este arcano es el que nos dir?? c??mo se ve la situaci??n por la cual se est?? consultando en el futuro inmediato."
      break;
      case 4:
      cabecera ="Consejo"
      texto_leyenda ="Es el consejo que nos da el Tarot. Esta carta nos da una recomendaci??n relacionada con la consulta que est?? realizando. Se ha de tener siempre presente que es un consejo y no una sentencia implacable."
      break;
      case 5:
      cabecera ="Entorno"
      texto_leyenda="Es el arcano que define c??mo se encuentran los dem??s con respecto a esta situaci??n. Su entorno cercano, sus circunstancias: amigos, familiares, enemigos, etc."
      break;
      case 6:
      cabecera ="Obstaculos"
      texto_leyenda ="Es la carta que nos muestra qu?? cosas, personas o influencias est??n afectando negativamente la situaci??n."
      break;
      case 7:
      cabecera ="Resultados"
      texto_leyenda="Es la carta que nos muestra el desenlace que tendr?? la situaci??n o pregunta realizada y  debe leerse relacionada con las dem??s. Este desenlace, por supuesto, puede ser positivo o negativo, pero siempre hablamos de probabilidades, por tanto queda en manos del consultante hacer algo para cambiarlo si dichas probabilidades no son de su agrado."
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
                  "El carro","La justicia","El ermita??o","La rueda de la fortuna","La fuerza","El colgado",
                  "La muerte","La templanza","El diablo","La torre", "La estrella","La luna","El sol", "El juicio",
                  "El mundo","El loco"]

var significado=[]
significado[0]="Originalidad. Iniciativa, centro de acci??n, inteligencia espont??nea. Posesi??n de s?? mismo, autonom??a, emancipaci??n de todo prejuicio. Elocuencia, destreza, habilidad, finura, diplomacia. Abogado, orador, diplom??tico o pol??tico. "
significado[1]="Carente de escr??pulos, arribista, intrigrante, embustero, pillo, estafador, charlat??n. Indecisi??n, ineptitud, voluntad d??bil, retraso, inseguridad. Voluntad aplicada a malos fines. "
significado[2]="Paciencia, silencio, discreci??n, reserva, meditaci??n, modestia, resignaci??n y piedad. Decisi??n meditada. "
significado[3]="Disimulo, intenciones ocultas, rencor, pereza, intolerancia, fanatismo. Se vuelve pesada y pasiva, es como una carga. Retraso, tensi??n y torpeza en las relaciones. Decisi??n inmeditada."
significado[4]="Comprensi??n, inteligencia, instrucci??n. Encanto, afabilidad, elegancia, distinci??n. Cortes??a, abundancia, riqueza. Matrimonio, fecundidad, dulzura. "
significado[5]="Afectaci??n, pose, frivolidad, coqueter??a, vanidad. Desd??n, presunci??n. Lujo innecesario. Sensible a los halagos. Falta de refinamiento. Discusiones en todos los planos. Esterilidad. "
significado[6]="Poder, voluntad, energ??a, certeza, constancia, firmeza, rigor, exactitud, equidad y positivismo. Realizaci??n. Protector poderoso."
significado[7]="Testarudez, falta de idealismo. Adversario obstinado. Ca??da, p??rdida de los bienes. "
significado[8]="Sabidur??a, perseverancia, ense??anzas, consejos equitativos, generosidad e indulgencia, mansedumbre. Ayuda de los superiores, organizaci??n. La carga que representa al consultante (usted), en la forma de la voz interior. Dogma."
significado[9]="Jefe sentencioso, excesivamente cr??tico, moralista estrecho de miras, profesor autoritario, te??rico limitado, consejero desprovisto de sentido pr??ctico, carencia de apoyo espiritual. Inconvencional, il??gico, supersticioso, incapaz de actuar coherente y racionalmente. "
significado[10]="Elecci??n o decisi??n. Uni??n, matrimonio, amor, la uni??n de los opuestos, atracci??n, balance, apertura a la inspiraci??n. Pruebas superadas. Armon??a de la vida interior y el mundo exterior."
significado[11]="Desorden, fracaso, divorcio, amor desgraciado y contrariedades de todo tipo. Matrimonio frustrado, tentaci??n peligrosa. Peligro de ser seducido. Inconducta, libertinaje y debilidad. Peleas, infidelidad. Inestabilidad emocional. "
significado[12]="Triunfo, victoria, superaci??n de obst??culos, esperanza, conquista. Buena noticia inesperada. Gran autocontrol, habilidad para determinar el propio destino. Gran fuerza f??sica y mental. Velocidad. Viaje. "
significado[13]="Desorden generalizado. Enfermedad. Peligroso descontrol. Peligro de un accidente violento. Malas noticias. Fatiga. Falta de tacto. Mala conducta. Actividad afiebrada y sin reposo. "
significado[14]="Justicia, armon??a, equidad, integridad, regla de conducta, firme prop??sito, acci??n de juzgar, moderaci??n en todas las cosas. Indepenencia de esp??ritu. Para mantener el balance ciertas cosas deben ser sacrificadas. Puede estar relacionada con asuntos legales, jucios, matrimonios, divorcios, etc. "
significado[15]="Fanatismo, injusticia, severidad en el juicio, abuso, acusaciones falsas. Inseguridad. Mara??as legales. Inseguridad. Falta de un apropiado balance. "
significado[16]="Prudencia, sabidur??a, paciencia, silencio, avance espiritual, inspiraci??n divina, circunspecci??n. Retiro del mundo, soledad. Peregrinaje. Puede ser un maestro. La realizaci??n de un balance y progresar. "
significado[17]="Inmadurez, vicios, oscuridad, testarudez, traici??n, enga??o. Misantrop??a, misoginia, celibato. Persona excesivamente t??mida e insociable. Enemigos ocultos. Prudencia que sobra o que falta. "
significado[18]="Cambio, evoluci??n, ??xito, buena fortuna, destino. Felicidad, abundancia. Nuevas condiciones. Abundancia, crecimiento. "
significado[19]="La transformaci??n se efectuar?? dificultosamente pero se har?? de todos modos. Progreso retardado, Retroceso. "
significado[20]="Sublimaci??n o regulaci??n de las pasiones y bajos instintos. Poder, energ??a, gran amor. El esp??ritu que domina la materia. Acci??n, coraje, ??xito. Poderosa voluntad y gran fuerza f??sica. La fuerza interior que domestica la bestia. Poder sobre los animales. "
significado[21]="Discordia, ruina. Debilidad, testarudez, abuso de poder. Impaciencia, temeridad, groser??a, insensibilidad. dureza, crueldad, furor. "
significado[22]="Fortaleza, sabidur??a. Limitaciones auto impuestas. Iniciaci??n, prueba. Redenci??n a trav??s del sacrificio, p??rdida. Poder prof??tico. Decisiones suspendidas. Elecci??n que requiere contemplaci??n. "
significado[23]="Arrogancia, egotismo, resistencia a las influencias espirituales. Materialismo. Esfuerzo desperdiciado. Falsa profec??a. Fracaso. Falta de l??mites, falta de franqueza, carencia de sacrificio. "
significado[24]="Transformaci??n completa. Muerte y renacimiento. El fin de algo. Evoluci??n desde un estado a otro superior. Cambio provechoso. "
significado[25]="Estancamiento, muerte, petrificaci??n. Enfermedad incurable. Matrimonio roto. Falta de oportunidades, esperanza deshecha. "
significado[26]="Consideraci??n cuidadosa, paciencia, moderaci??n, adaptaci??n, compostura, reflexi??n. Paciencia uniendo dos opuestos, combin??ndolos cuidadosamente. Buen matrimonio. Trabajando en armon??a con otros, habilidad directiva. Algo se est?? preparando. Gran talento y creatividad. Luchando por trascendencia a trav??s del trabajo. Alquimia. La uni??n de los opuestos refinada por el fuego de la voluntad. "
significado[27]="Desorden, conflicto, mala combinaci??n, peleas. Posibilidad de naufragio. Desarreglos. "
significado[28]="Destino (bueno o malo). Poder de seducci??n, impulso ciego, tentaci??n, obsesi??n. Desviaci??n sexual. Un estado mental confusional. Las pasiones carnales descontroladas. "
significado[29]="Carta da??ina, fatalidad, mal uso de la fuerza. Debilidad, ceguera, desorden. Efectos mal??ficos. La pat??tica condici??n humana que prefiere la ilusi??n a la verdad. "
significado[30]="Cambios repentinos sin otra alternativa. Colapso, escape de la prisi??n o liberaci??n de ataduras, accidente. Los planes fracasar??n, las intenciones no se realizar??n. El dedo de Dios. Bancarrota. Muerte s??bita. "
significado[31]="Confusi??n completa. Ganar la libertad a un gran costo. Falsas acusaciones, opresi??n. Castigo que resulta de los excesos cometidos, enfermedad. Error presuntuoso que no sabe rectificarse a tiempo. "
significado[32]="Esperanza, ayuda inesperada, perspicacia y claridad de visi??n, inspiraci??n, flexibilidad. Un gran amor ser?? dado y recibido. Buena salud. Carta totalmente espiritual. "
significado[33]="Arrogancia, pesimismo, testarudez. enfermedad, error de juicio. Impotencia ps??quica, reestructuraci??n, privaci??n y abandono. "
significado[34]="Intuici??n, umbral de un importante cambio, camino dif??cil y oscuro, desarrollo de poderes ps??quicos. Navegaci??n, experimentaci??n, trabajo penoso. "
significado[35]="Peligros no vistos, enemigos ocultos, alucinaci??n, autoenga??o, histeria, desorientaci??n. Inestabilidad, embustes, trampas, falso saber, car??cter neur??tico. Esc??ndalo, secreto que se hace p??blico, chantajista. "
significado[36]="Gloria. Felicidad material. Matrimonio o relaci??n feliz, colaboraci??n. Exito. Placer, energ??a, motivaci??n, inspiraci??n."
significado[37]="Molestias, disimulos, arrogancia, vanidad. Compromiso o trabajo perdido. Tanteo en la oscuridad, desorientaci??n. Deseo de figurar. "
significado[38]="Cambio radical, resurecci??n a una vida nueva. Trabajo (o vida) bien hecha. Voluntad para iniciar algo nuevo. Buen juicio y discernimiento. Poder creativo e influencia sobre la familia y la carrera laboral. Capacidad de perdonar. Despertar. Dict??men judiciale favorable."
significado[39]="Vacilaci??n espiritual, debilidad, juicio o decisi??n equivocada. Enfermedad, separaci??n. Dictamen juidicial adverso. Error sobre s?? mismo y sobre los otros. Decisi??n postergada. "
significado[40]="Suceso garantizado. Recompensas recibidas. Viaje, emigraci??n (dentro del mismo continente), cambio de lugar de residencia. Compra o venta de tierras. "
significado[41]="Obst??culos, estancamiento, estorbos. Necesidad de trabajar muy duro para alcanzar el ??xito. "
significado[42]="Carencia de sentido com??n. Potencial fuerza de voluntad y destreza. El esp??ritu en busca de experiencia. Audacia, extravagancia. Negligencia, poca reflexi??n. Desorientaci??n, inmadurez, desequilibrio. Ligereza. Indiscreci??n y superficialidad. "
significado[43]="Pasiones y obsesiones, indecisi??n, irracionalidad, apat??a, complicaciones. Decisiones equivocadas, ca??da, abandono, inmovilizaci??n. Locura. Desborde ps??quico y/o emocional. Viaje obstaculizado. "