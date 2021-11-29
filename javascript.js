const kopje = document.getElementById("kopje"); 
const mkBlauw = document.getElementById('mkBlauw'); 
const mkGroen = document.getElementById('mkGroen');


kopje.style.backgroundColor = "red"; 

kopje.addEventListener('click',voeruitKopje);
mkBlauw.addEventListener('click',voeruitBlauw); 
mkGroen.addEventListener('click',voeruitGroen);

function voeruitKopje(){ 
    kopje.style.backgroundColor = "yellow";
    kopje.style.color = "black"; 
} 

function voeruitBlauw(){
    document.body.style.backgroundColor = "blue";
    document.body.style.color = "white";
    kopje.style.backgroundColor = "white";
    kopje.style.color = "black";
}  

function voeruitGroen(){
     document.body.style.backgroundColor = "green" 
}
