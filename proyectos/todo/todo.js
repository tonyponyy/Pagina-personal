var recordatorios=[];
var n_notas=0;
var id_activo;
var color_activo ="yellow";
var modo=false ;

window.onload = function() {
cerrar_menu();
if (localStorage.myArray==null){
recordatorios=[];
creanota_objeto("Bienvenido !","Pulse el botón + para añadir notas, pulse X para eliminar la nota o pulse el lápiz para editar la nota","yellow",0,4);
n_notas=busca_num();
imprimenotas();
} else{
recordatorios=cargardatos();
n_notas=busca_num();
imprimenotas();
}

};

function cargardatos(){
x =localStorage.getItem('myArray');
 return JSON.parse(x);
}

function busca_num(){
    num =0
    for (var i = 0; i < recordatorios.length; i++) {
             if (recordatorios[i].id> num){num =recordatorios[i].id}
            }
            console.log(num)
            return num+1;
}


function imprimenotas(){

for (var i = 0; i < recordatorios.length; i++) {
creanota(recordatorios[i].titulo,recordatorios[i].texto,recordatorios[i].color,recordatorios[i].id,recordatorios[i].grados)
}

}

function nuevo(){
color_activo ="yellow";
modo=true;
var elem = document.getElementById("menu");
    elem.style.visibility="visible"
}



function creanota(titulo,texto,color,id,grados){

nota = corcho.innerHTML += '<div id='+id+' class="nota"> <img class ="cerrar" src="close.svg"  onclick="eliminar('+id+')"> <img class ="configurar" src="settings.svg" onclick="configurar('+id+')"> <h1>'+titulo+'</h1><h3>'+texto+'</h3> </div>'
var elem = document.getElementById(id);
elem.style.backgroundColor = color.toString();
console.log(grados);
elem.style.rotate=grados+"deg"

}

function creanota_objeto(titulo,texto,color,id,grados){
pushh =recordatorios.push(new recordatorio(titulo,texto,color,id,grados))
}


function eliminar(id){
    var elem = document.getElementById(id);
    elem.remove()

        for (var i = 0; i < recordatorios.length; i++) {
            if (id ==recordatorios[i].id){
            recordatorios.splice(i,1);
        }
    }
    localStorage.setItem('myArray', JSON.stringify(recordatorios));
}

function configurar(id){
id_activo =id;
modo=false;

for (var i = 0; i < recordatorios.length; i++) {
   if (id_activo == recordatorios[i].id){
document.getElementById("m_titulo").value= recordatorios[i].titulo;
document.getElementById("m_texto").value= recordatorios[i].texto;
document.getElementById("angulo").value= recordatorios[i].grados;
color_activo = recordatorios[i].color;
}}
var elem = document.getElementById("menu");
    elem.style.visibility="visible"

}

function cerrar_menu(){
document.getElementById("m_titulo").value= "";
document.getElementById("m_texto").value= "";
document.getElementById("angulo").value= "";
var elem = document.getElementById("menu");
    elem.style.visibility="hidden"
}

function crear_nota_nueva(){
titulo = document.getElementById("m_titulo").value;
texto  = document.getElementById("m_texto").value;
grados = 360 + parseInt( Math.random() * (12 - -12) -12);
if (grados>360){grados-=360}
creanota_objeto(titulo,texto,color_activo,n_notas,grados)
n_notas++;
cerrar_menu()
}

function okmenu(){
//modo_true : nota nueva
//modo_false: modificamos_nota
if (modo){
    crear_nota_nueva();
    document.getElementById("corcho").innerHTML="";
     imprimenotas();
} else{
        for (var i = 0; i < recordatorios.length; i++) {
            if (id_activo == recordatorios[i].id){
            recordatorios[i].titulo = document.getElementById("m_titulo").value;
            recordatorios[i].texto  = document.getElementById("m_texto").value;
            recordatorios[i].grados =  document.getElementById("angulo").value;
            recordatorios[i].color = color_activo;
            document.getElementById("corcho").innerHTML="";
            imprimenotas();
            cerrar_menu()
            }
        }
    }

localStorage.setItem('myArray', JSON.stringify(recordatorios));

}

function recto(){
document.getElementById("angulo").value = 0;
}


function cambiar_color(color){
color_activo= color;
}


class recordatorio {
  constructor(titulo, texto, color,id,grados) {
    this.titulo = titulo;
    this.texto = texto;
    this.color= color;
    this.id= id;
    this.grados =grados;
  }
}