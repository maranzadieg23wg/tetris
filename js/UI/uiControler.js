class Puntuak{


    constructor() {
        this.score =0;
        this.lerro=0;
        this.maxScore = this.getCookie();
        this.erakutsi=0;

        if(this.maxScore ==null){
            this.maxScore =0;
        }
    }


    gehituPuntuak(zenbat) {
        this.score+=zenbat;
        this.hilda();
    }

    kenduPuntuak(zenbat){
        this.score-=zenbat;
    }

    lerroKenduta(zenbat){
        this.lerro+=zenbat;
        if(zenbat ==1){
            this.gehituPuntuak(100);
        }else{
            this.gehituPuntuak(300*zenbat);
        }
    }


    lerroGehitiz(){
        this.gehituPuntuak(this.lerro*0.1+1);
    }


    puntuakIdatzi(){
        const container = document.getElementById("puntuak");
        container.innerHTML = "Score: "+this.score;
    }

    maxScoreIdatzi(){
        const container = document.getElementById("puntuak_max");
        container.innerHTML = "Max Score: "+this.maxScore;
    }


    hilda(){
        //console.log(this.maxScore);
        if(this.maxScore< this.score){
            this.maxScore = this.score;
            this.setCookie();
        }
    }




    setCookie() {
        let name = "puntuak";
        let days = 9999;
        let value = this.maxScore
        let expires = "";
        if (days) {
            const date = new Date();
            date.setTime(date.getTime() + (days * 24 * 60 * 60 * 1000));
            expires = "; expires=" + date.toUTCString();
        }
        document.cookie = name + "=" + (value || "") + expires + "; path=/";
    }


    getCookie() {
        let name = "puntuak";
        const nameEQ = name + "=";
        const ca = document.cookie.split(';');
        for (let i = 0; i < ca.length; i++) {
            let c = ca[i];
            while (c.charAt(0) === ' ') c = c.substring(1, c.length);
            if (c.indexOf(nameEQ) === 0) return c.substring(nameEQ.length, c.length);
        }
        return null;
    }



    erakutsiGehiago(){
        this.erakutsi++;
    }



    probabilitateak(lista){

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

    probalitate(lista, pieza){
        if(lista.includes(pieza)){
            let z = 1/lista.length;
            
            return Math.round(z * 100) / 100;
        }else{
            return 0;
        }
    }


}


export default Puntuak;