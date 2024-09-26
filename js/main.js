import Pieza from './objects/piece.js';


const x = 10;
const y = 20;


let keyName;
 

let kuadro = [];
for (let i = 0; i < y; i++) {
    kuadro[i] = new Array(x).fill(0);
}
console.log(kuadro);

let pie = new Pieza("I"); 





impMatriz();


setInterval(impMatriz, 1000); //Deitzeko funtzio bateri nahi den bakoitzean

document.addEventListener('keydown', (event) => {
    keyName = event.key;
    console.log(`Sakatutako tekla: ${keyName}`);




    if(keyName == "a"){
        pie.rotatu_90();
    }
    if(keyName == "d"){
        pie.rotatu90();
    }

    
});


function impMatriz() {
    const container = document.getElementById("proba");
    container.innerHTML = "";

    for (let i = 0; i < kuadro.length; i++) {
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