var maxvelocidadx= 0.5;
var maxvelocidady= 0.5;
var max_particulas = 50;
var canvas_width = window.innerWidth;
var canvas_height= window.innerHeight;
var zoom = 1 ;
var distancia_optima =220;
var maxlinias = 140;
var linias = 0;
var margen = 120;
var tamanyo_maximo = 5;

var array_particulas=[];

function creaparticulas(){

for (var i = 0; i < max_particulas; i++) {
    velx = getRandom(-maxvelocidadx,maxvelocidadx);
    vely = getRandom(-maxvelocidady,maxvelocidady);
    xx= getRandom(0-margen,canvas_width+margen);
    yy= getRandom(0-margen,canvas_height+margen);
    particula = new Particula(xx,yy,velx,vely);
    array_particulas.push(particula);
    }

}

function getRandom(min, max) {
  return Math.random() * (max - min) + min;
}





window.addEventListener('load', function(){



canvas = document.getElementById("canvas");
ctx = canvas.getContext('2d');
canvas.setAttribute("width",canvas_width);
canvas.setAttribute("height", canvas_height);
canvas.style.width=canvas_width*zoom+'px';
canvas.style.height =canvas_height*zoom+'px';
creaparticulas();

ctx.fillStyle = '#000000';
ctx.fillRect(0, 0, canvas_width , canvas_height)

bucle()


}, false);




function bucle(){
//ctx.clearRect(0, 0, canvas_width , canvas_height)
ctx.fillStyle = '#000000';
ctx.fillRect(0, 0, canvas_width , canvas_height)


for (var i = 0; i < array_particulas.length; i++) {


array_particulas[i].x = array_particulas[i].x + array_particulas[i].vel_x;
array_particulas[i].y = array_particulas[i].y + array_particulas[i].vel_y;

if (array_particulas[i].x> canvas_width+margen){array_particulas[i].x = 0}
if (array_particulas[i].x< -margen){array_particulas[i].x = canvas_width}

if (array_particulas[i].y> canvas_height+margen){array_particulas[i].y = 0}
if (array_particulas[i].y< -margen){array_particulas[i].y = canvas_height}

ctx.fillStyle = '#ffffff';

size = tamanyo_maximo*(( (array_particulas[i].vel_x/maxvelocidadx) + (array_particulas[i].vel_y/maxvelocidady))/2)
ctx.fillRect(array_particulas[i].x,array_particulas[i].y,size,size);
//ctx.arc(array_particulas[i].x,array_particulas[i].y,5,0,2*Math.PI);





    for (var e = 0; e < array_particulas.length; e++) {

        if (linias<maxlinias){
        distancia = Cdistancia(array_particulas[i].x,array_particulas[i].y,array_particulas[e].x,array_particulas[e].y)

        if (distancia< distancia_optima){


            ancholinea = 1 - (distancia/distancia_optima)


            ctx.lineWidth = ancholinea;
             ctx.beginPath();
            ctx.moveTo(array_particulas[i].x+size/2,array_particulas[i].y+size/2);
            ctx.lineTo(array_particulas[e].x+size/2,array_particulas[e].y+size/2);
            ctx.strokeStyle = '#ffffff';
            ctx.stroke();
            linias++;

            }


        } }






}
linias =0;
//muevecuadrados();
window.requestAnimationFrame(bucle)
}

function Cdistancia(x1,y1,x2,y2){
resultado = Math.sqrt(((x2-x1)*(x2-x1))+ ((y2-y1)*(y2-y1)))

return parseInt(resultado);
}



class Particula {
  constructor(x, y, vel_x, vel_y) {
    this.x = x;
    this.y = y;
    this.vel_x= vel_x;
    this.vel_y= vel_y;
  }

  //function mover_particula(){
 // x += vel_x;
 // y += vel_y;
 // }


}





