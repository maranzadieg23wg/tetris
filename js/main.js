import Pieza from './objects/piece.js';


const x = 10;
const y = 21;


let keyName;
 

let kuadro = [];
for (let i = 0; i < y; i++) {
    kuadro[i] = new Array(x).fill(0);
}
//console.log(kuadro);

let pie = new Pieza("H"); 

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
            for(let e = kuadro[i].length;e>0;e--){
                kuadro[i][e+1] = 2;
                kuadro[i][e] = 0;
            }
        }
    }
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
        for(let e=0;e<kuadro[i].length;e++){
            if(kuadro[i][e]==2){

                kuadro[i][e]=1;
                let pie = new Pieza("H"); 
                gehituPieza(pie);
            }
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
    keyName = event.key;
    console.log(`Sakatutako tekla: ${keyName}`);




    if(keyName == "a"){
        eskubi();
    }
    if(keyName == "d"){
        //pie.rotatu90();

        console.log("eskubira mugitu")
        eskubi();
    }

    
}); 


function impMatriz() {
    const container = document.getElementById("proba");
    container.innerHTML = "";

    for (let i = 1; i < kuadro.length; i++) {
        const row = document.createElement("div");
        row.classList.add("row"); 

        
        for (let j = 0; j < kuadro[i].length; j++) {
            const cell = document.createElement("span");
            cell.classList.add("cell");
            cell.textContent = kuadro[i][j]; 
            row.appendChild(cell);
        }
        container.appendChild(row);
    }
}