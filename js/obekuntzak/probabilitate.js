class Probabilitateak{



    constructor(){
        this.erakutsi=0;
        this.prezioa = 250; //← Esartzen dugu zenbat izango den hasierako prezioa.

        this.zenbatBalio(); // ← Sortu bezain pronto, esaten diogu jartzeko zenbat balio duten objetu bakoitzek.
    }



    // ↓ Lortzen dugu zenbat balio duen objetu bakoitzak, momentu honetan, zenbat pieza erosi diren arabera.
    getPrezioa(){
        return this.prezioa*(this.erakutsi+1);
    }

    // ↓ Esaten digu zenbat kostatu egingo den pieza bat teorian
    getTeorialPrezioa(z){
        return this.prezioa*(z+1);
    }

    // ↓ Erosi dugula bat esan nahi du
    erakutsiGehiago(){
        this.erakutsi++;
    }

    // ↓ Reseteatu egin da, esan nahi du ez dela ezta bat erosi.
    erakutsiReset(){
        this.erakutsi =0;
    }


    // ↓ Imprimatzen du irudi bakoitzaren azpian zenbat balio duen pieza bakoitzak
    zenbatBalio(){
        // H
        const containerH = document.getElementById("H");
        containerH.innerHTML = this.getTeorialPrezioa(0)+"P";

        // J
        const containerJ = document.getElementById("J");
        containerJ.innerHTML = this.getTeorialPrezioa(1)+"P";

        // S
        const containerS = document.getElementById("S");
        containerS.innerHTML = this.getTeorialPrezioa(2)+"P";

        // L
        const containerL = document.getElementById("L");
        containerL.innerHTML = this.getTeorialPrezioa(3)+"P";

        // Z
        const containerZ = document.getElementById("Z");
        containerZ.innerHTML = this.getTeorialPrezioa(4)+"P";

        // I
        const containerI = document.getElementById("I");
        containerI.innerHTML = this.getTeorialPrezioa(5)+"P";

        // T
        const containerT = document.getElementById("T");
        containerT.innerHTML = this.getTeorialPrezioa(6)+"P";
    }

    // ↓ Erosten den bakoitzean, esaten du zein izango den probabilitatea pieza bat edo beste tokatzekoa.
    probabilitatea(lista){

        console.log(lista);
        if (this.erakutsi>=1){
            const container = document.getElementById("H");
            container.innerHTML = this.probalitate(lista, "H")*100+"%";
        }
        if (this.erakutsi>=2){
            const container = document.getElementById("J");
            container.innerHTML = this.probalitate(lista, "J")*100+"%";
        }
        if (this.erakutsi>=3){
            const container = document.getElementById("S");
            container.innerHTML = this.probalitate(lista, "S")*100+"%";
        }
        if (this.erakutsi>=4){
            const container = document.getElementById("L");
            container.innerHTML = this.probalitate(lista, "L")*100+"%";
        }
        if (this.erakutsi>=5){
            const container = document.getElementById("Z");
            container.innerHTML = this.probalitate(lista, "Z")*100+"%";
        }
        if (this.erakutsi>=6){
            const container = document.getElementById("I");
            container.innerHTML = this.probalitate(lista, "I")*100+"%";
        }
        if (this.erakutsi>=7){
            const container = document.getElementById("T");
            container.innerHTML = this.probalitate(lista, "T")*100+"%";
        }


        
    }

    // ↓ Begiratzen du listan pieza dagoen a la ez. Ez badako ateratzeko probabilitatea 0 izango da
    // Bestela, egiten da 1/ pieza kopurua, eta hau ondoren borobiltzen da eta lortzen dugu bere eunekoa.
    probalitate(lista, pieza){
        if(lista.includes(pieza)){
            let z = 1/lista.length;
            
            return Math.round(z * 100) / 100;
        }else{
            return 0;
        }
    }

    
}

export default Probabilitateak;