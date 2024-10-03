class Puntuak{


    constructor() {
        this.score =0;
        this.lerro=0;
        this.maxScore = this.getCookie();

        this.tetris =0;
       

        if(this.maxScore ==null){
            this.maxScore =0;
        }
    }

    getScore(){
        return Math.round(this.score);
    }

    gehituPuntuak(zenbat) {
        this.score+=zenbat;
        
        this.hilda();
    }

    kenduPuntuak(zenbat){
        this.score-=zenbat;
    }

    lerroKenduta(zenbat){
        console.log("zenbat"+zenbat);
        this.lerro+=zenbat;
        if(zenbat ==1){
            this.gehituPuntuak(100);
        }else{
            this.gehituPuntuak(300*zenbat);
        }

        
    }

    gehituTeti(z){
        if(z ==4){
            this.tetris++;
            this.tetrisEginda();
        }
    }

    tetrisEginda(){
        for(let i=0;i<=this.tetris;i++){
            this.createFlyingGif();
        }
    }


    createFlyingGif() {
        const gif = document.createElement('img');
        gif.src = './img/nyan-cat-poptart-cat.gif'; 
        gif.classList.add('flying-gif');
    
        document.body.appendChild(gif);
    
        const randomHeight = Math.random() * 70;
        gif.style.top = randomHeight + 'vh';
    
        const randomSpeed = Math.random() * 5 + 5;
        gif.style.animationDuration = randomSpeed + 's';
    
        gif.addEventListener('animationend', () => {
            gif.remove();
        });
    }


    lerroGehitiz(){
        this.gehituPuntuak(this.lerro*0.1+1);
    }


    getLerro(){
        return this.lerro;
    }

    puntuakIdatzi(){
        const container = document.getElementById("puntuak");
        container.innerHTML = "Score: "+Math.round(this.score);
    }

    maxScoreIdatzi(){
        const container = document.getElementById("puntuak_max");
        container.innerHTML = "Max Score: "+this.maxScore;
    }


    hilda(){
        //console.log(this.maxScore);
        if(this.maxScore< this.score){
            this.maxScore = this.score;
            this.maxScore = Math.round(this.maxScore);
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



    


}


export default Puntuak;