import Pieza from './objects/piece.js';

import Puntuak from './UI/uiControler.js';

import Probabilitateak from './obekuntzak/probabilitate.js';

/* Audio */
var audio = new Audio('../soundtrack/tetris.mp3');
audio.play();

let x = 10;
const y = 21;


let keyName;
 
const lista =["H", "I", "S", "Z", "L", "J", "T"];
let horaingoa =[];




/* PUNTUAK */
let puntuak = new Puntuak();

/* OBEKUNTZAK */
let probabili = new Probabilitateak();

let kuadro = [];
for (let i = 0; i < y; i++) {
    kuadro[i] = new Array(x).fill(0);
    //kuadro[i] = new Array(x);
}
//console.log(kuadro);

let pie = new Pieza(piezaBerria()); 

gehituPieza(pie);

function gehituPieza(pie){
    let mat = pie.getIrudia();
    for(let i=0;i<mat.length;i++){
        for(let e=0;e<mat[i].length;e++){
            if(mat[i][e] ==1){
                kuadro[i][e+4]=2;
            }
        }
    }
}

function piezaBerria(){
    
    if(horaingoa.length <=0){
        horaingoa = lista.slice();
    }

    //console.log(horaingoa);
    let z = horaingoa.length;
    //console.log("Luzeera: "+z);

    let pos = Math.floor(Math.random() * z);
    //console.log("pos: "+pos);

    let izena = horaingoa[pos];

    horaingoa.splice(pos,1);

    if(horaingoa.length <=0){
        horaingoa = lista.slice();
    }

    probabili.probabilitatea(horaingoa);

    return izena;
}


function behera(){
    //console.log(111);
    if(libre("s")){
        for(let i = kuadro.length - 1; i >= 0; i--){
            for(let e = 0; e < kuadro[i].length; e++){
                if(kuadro[i][e] == 2){
                    kuadro[i+1][e] = 2;
                    kuadro[i][e] = 0;
                }
            }
        }
    } else {
        gelditu();
    }
}

function eskubi(){
    console.log(libre("d"));
    
    if(libre("d")){
        
        for(let i = 0; i < kuadro.length; i++){
            for(let e = kuadro[i].length;e>=0;e--){

                if (kuadro[i][e] == 2) {
                    kuadro[i][e+1] = 2;
                    kuadro[i][e] = 0;
                }
                
            }
            
           
        }
    }
}

function ezker(){
    console.log(libre("a"));
    
    if (libre("a")) {
        for (let i = 0; i < kuadro.length; i++) {
            for (let e = 0; e < kuadro[i].length; e++) {

                if (kuadro[i][e] == 2) {
                    kuadro[i][e-1] = 2;
                    kuadro[i][e] = 0;  
                }
            }
        }
    }
}


function azkar(){
    puntuak.lerroGehitiz();
    behera();
}


function rotatu90() {
    let pos = [];
    let pivot = null;

    // Encontrar las posiciones de la pieza (celdas con valor 2) y definir un pivote (por ejemplo, la primera celda)
    for (let i = 0; i < kuadro.length; i++) {
        for (let e = 0; e < kuadro[i].length; e++) {
            if (kuadro[i][e] == 2) {
                let temp = [i, e];
                pos.push(temp);
                if (pivot === null) {
                    pivot = [i, e]; // Tomamos la primera celda encontrada como pivote
                }
            }
        }
    }

    let newPos = [];
    let px = pivot[0];
    let py = pivot[1];

    for (let i = 0; i < pos.length; i++) {
        let a = pos[i][0]; // Coordenada x
        let b = pos[i][1]; // Coordenada y

        // Fórmula para rotación alrededor del pivote (90 grados)
        let newA = px + (b - py);
        let newB = py - (a - px);

        let te = [newA, newB];
        newPos.push(te);
    }

    console.log("Posiciones originales:", pos);
    console.log("Posiciones después de rotar:", newPos);

    // Verificar si la rotación es válida (espacios libres)
    if (libreRot(newPos)) {
        // Limpiar las posiciones antiguas
        for (let i = 0; i < pos.length; i++) {
            let temp = pos[i];
            kuadro[temp[0]][temp[1]] = 0;
        }

        // Colocar las nuevas posiciones en la matriz
        for (let i = 0; i < newPos.length; i++) {
            let temp = newPos[i];
            kuadro[temp[0]][temp[1]] = 2;
        }
    }

    impMatriz();
}

function rotatu_90() {
    let pos = [];
    let pivot = null;

    
    for (let i = 0; i < kuadro.length; i++) {
        for (let e = 0; e < kuadro[i].length; e++) {
            if (kuadro[i][e] == 2) {
                let temp = [i, e];
                pos.push(temp);
                if (pivot === null) {
                    pivot = [i, e]; 
                }
            }
        }
    }

    let newPos = [];
    let px = pivot[0];
    let py = pivot[1];

    for (let i = 0; i < pos.length; i++) {
        let a = pos[i][0]; 
        let b = pos[i][1]; 

        

        let newA = px - (b - py);
        let newB = py + (a - px);

        let te = [newA, newB];
        newPos.push(te);
    }

    console.log("Posiciones originales:", pos);
    console.log("Posiciones después de rotar:", newPos);

    
    if (libreRot(newPos)) {

        for (let i = 0; i < pos.length; i++) {
            let temp = pos[i];
            kuadro[temp[0]][temp[1]] = 0;
        }


        for (let i = 0; i < newPos.length; i++) {
            let temp = newPos[i];
            kuadro[temp[0]][temp[1]] = 2;
        }
    }

    impMatriz();
}

function libreRot(lista) {
    // Verificar si las nuevas posiciones están dentro de la matriz y libres
    for (let i = 0; i < lista.length; i++) {
        let temp = lista[i];
        if (temp[0] < 0 || temp[0] >= kuadro.length || temp[1] < 0 || temp[1] >= kuadro[0].length || kuadro[temp[0]][temp[1]] == 1) {
            return false;
        }
    }
    return true;
}


function libre(nora){
    for(let i = 0; i < kuadro.length; i++){
        for(let e = 0; e < kuadro[i].length; e++){
            if(kuadro[i][e] == 2){
                if (i == kuadro.length - 1 || kuadro[i+1][e] == 1){
                    return false;
                }

                if(nora == "a" && (e == 0 || kuadro[i][e-1] == 1)){
                    return false;
                }

                if(nora == "d" && (e == x - 1 || kuadro[i][e+1] == 1)){
                    return false;
                }
            }
        }
    }
    return true;
}




function gelditu(){
    for(let i=0;i<kuadro.length;i++){
        let total=0;
        for(let e=0;e<kuadro[i].length;e++){
            if(kuadro[i][e]==2){

                kuadro[i][e]=1;
                
            }

            total+=kuadro[i][e];
        }
        if(total>=x){
            puntuak.lerroKenduta(total/10);
            garbitu(i);
        }
    }
    let pie = new Pieza(piezaBerria()); 
    gehituPieza(pie);
}

function garbitu(lin){
    for(let e=0;e<kuadro[lin].length;e++){
        kuadro[lin][e]=0;
    }

    garbiBehera(lin);
}

function garbiBehera(lin){
    for(let i = lin; i > 0; i--){
        for(let e = 0; e < kuadro[i].length; e++){
            kuadro[i][e] = kuadro[i-1][e];
            //kuadro[i-1][e] = kuadro[i-2][e];
        }
    }
}

impMatriz();


setInterval(() => {
    behera();
    impMatriz();
}, 1000);
 //Deitzeko funtzio bateri nahi den bakoitzean

document.addEventListener('keydown', (event) => {

    audio.play();
    audio.loop = true;
    keyName = event.key;
    console.log(`Sakatutako tekla: ${keyName}`);




    if(keyName == "a" || keyName == "ArrowLeft"){
        ezker();
        //pie.rotatu90;
        impMatriz(); 
    }
    if(keyName == "d" || keyName == "ArrowRight"){
        //pie.rotatu90();
        eskubi();
        impMatriz(); 
    }
    if(keyName == "s" || keyName == "ArrowDown"){
        azkar();
        impMatriz(); 
    }
    if(keyName == "c"){
        rotatu90();
        impMatriz(); 
    }
    if(keyName == "z"){
        rotatu_90();
        
        impMatriz(); 
    }


    
}); 


function impMatriz() {
    const container = document.getElementById("proba");
    container.innerHTML = "";
    puntuak.puntuakIdatzi();
    puntuak.maxScoreIdatzi();

    for (let i = 1; i < kuadro.length; i++) {
        const row = document.createElement("div");
        row.classList.add("row"); 

        
        for (let j = 0; j < kuadro[i].length; j++) {
            const cell = document.createElement("span");
            cell.classList.add("cell");
            if(kuadro[i][j] !=0){
                cell.textContent = kuadro[i][j]; 
            }else{
                cell.textContent = ""; 
            }
            row.appendChild(cell);
        }
        container.appendChild(row);
    }
}

let a= document.getElementById("tamaina_handitu");
a.addEventListener("click", handitu_matrizea());

document.getElementById("tamaina_handitu").addEventListener("click", handitu_matrizea);

function handitu_matrizea(){
    if(puntuak.getScore()>=100){
        puntuak.kenduPuntuak(100);
        x+=1;
        for (let i = 0; i < kuadro.length; i++) {
            kuadro[i].push(0); 
        }
        impMatriz();
    }
}











let probabilitateBotoia = document.getElementById("portzentaila");
probabilitateBotoia.addEventListener("click", erakutsiHurrengoa);
function erakutsiHurrengoa(){
    if(puntuak.getScore()>= probabili.getPrezioa()){
        console.log("Erosita");
        puntuak.kenduPuntuak(probabili.getPrezioa());
        probabili.erakutsiGehiago();
    }
    
}


document.getElementById("fondo-G").addEventListener("click", fondo_G);
document.getElementById("fondo-B").addEventListener("click", fondo_B);
document.getElementById("fondo-Normal").addEventListener("click", fondo_Normal);

function fondo_G(){
    document.body.style.backgroundImage = "url('../img/giga-chad.png')";
    document.body.style.backgroundSize = "cover";
    document.body.style.backgroundPosition = "center";
    document.body.style.backgroundRepeat = "no-repeat";
}
function fondo_B(){
    document.body.style.backgroundImage = "url('../img/berserk.png')";
    document.body.style.backgroundSize = "cover";
    document.body.style.backgroundPosition = "center";
    document.body.style.backgroundRepeat = "no-repeat";
}
function fondo_Normal(){
    document.body.style.background = "linear-gradient(180deg, rgba(113,113,113,1) 30%, rgba(0,0,0,1) 100%)";
}