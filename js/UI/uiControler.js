class Puntuak{


    constructor() {
        this.score =0;
        this.lerro=0;
        this.maxScore = this.getCookie();

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
        if(this.maxScore< this.score){
            maxScore = this.score;
            this.setCookie();
        }
    }




    setCookie() {
        let name = "puntuak";
        let days = 9999;
        let value = maxScore
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





    probabilitateak(lista){
        
    }



}


export default Puntuak;