var canvas = document.getElementById('canvas'); 
var data = canvas.toDataURL(); 
var myElement = document.getElementById('quiensoy'); 
myElement.style.backgroundImage = 'url('+data+')'; 

function fondo(){
    data = canvas.toDataURL(); 
    myElement.style.backgroundImage = 'url('+data+')';
    setTimeout(fondo,60);
}