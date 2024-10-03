class Puntuak{


    constructor() {
        this.score =0;
        this.lerro=0; // ←Gorde egiten dugu zenbat lerro egin ditugun
        this.maxScore = this.getCookie(); // ←Coockiak erabili ditugunez, gordeta badago lortzen dugu zegoen balorea;

        this.tetris =0; // ←Esaten dugu zenbat aldiz egin den Tetris, hau da, zenbat aldiz garbitu egin diren 4 fila jarraian.
       

        //↓ Baldin eta ez dagoela Cookirik maxScorentzat, ezartzen dugu 0.
        if(this.maxScore ==null){ //← ez badago ezer gordeta, null izango da.
            this.maxScore =0;
        }
    }

    //↓ Bueltatzen dugu zenbat den gure puntuazioa, borobilduta. 
    getScore(){
        return Math.round(this.score);  // ← Ez bada borobiltzen, bueltatzen duen puntuak dira 10.0000000000000000000002;
    }

    //↓ Gehitu egiten dira egin diren puntu berriak
    gehituPuntuak(zenbat) {
        this.score+=zenbat;
        
        this.hilda(); // ← Begiratzen da, ea dagoen puntuazio maximoa den handiagoa a la maxScorena baino
    }

    // ↓ Erabiltzen da kentzeko puntuak
    kenduPuntuak(zenbat){
        this.score-=zenbat; 
        if(this.score<0){ //← Modu honetan puntuazioa ezin da izan negatiboa.
            this.score =0;
        }
    }

    //↓ Kalkulatzen da zenbat puntu heman behar diren kendu diren lerro bakoitzeko
    lerroKenduta(zenbat){
        console.log("zenbat"+zenbat);
        this.lerro+=zenbat;
        if(zenbat ==1){ // ← Lerro bat kenduz gero 100 puntu hemango dira
            this.gehituPuntuak(100);
        }else{
            this.gehituPuntuak(300*zenbat); //← Ordea, gehiago kentzen badira, *300 egingo da kendu diren lerroen gatik.
        }

        
    }

    //↓ Tetris egiten den bakoitzean, +1 egiten da kontagailuan
    gehituTeti(z){
        if(z ==4){
            this.tetris++;
            this.tetrisEginda(); // ← Tetris bat egitean, animazio ✨berezi✨ bat gertatzeko
        }
    }

    // ↓ Egin den tetris bakoitzeko, animazio bat agertuko da
    tetrisEginda(){
        for(let i=0;i<=this.tetris;i++){
            this.createFlyingGif();
        }
    }

    //↓ Sortu egiten da gif bat pasa egingo dena ezkerritik eskubira
    createFlyingGif() {
        const gif = document.createElement('img');
        gif.src = './img/nyan-cat-poptart-cat.gif'; 
        gif.classList.add('flying-gif');
    
        document.body.appendChild(gif);
    
        const randomHeight = Math.random() * 70; // ← Altura aleatorio batean egingo du agertzea, pantailaren goiko %70 zatian
        gif.style.top = randomHeight + 'vh';
    
        const randomSpeed = Math.random() * 5 + 5;
        gif.style.animationDuration = randomSpeed + 's';
    
        // ↓ Animazioa bukatzen denean, (pantailla bukaerara iristean) borratu egiten da
        gif.addEventListener('animationend', () => { 
            gif.remove();
        });
    }


    // ↓ Behera hematean, zenbat puntu heman behar diren esartzen da
    lerroGehitiz(){
        this.gehituPuntuak(this.lerro*0.1+1);
    }


    // ↓ Bueltatzen du zenbat lerro garbitu egin diren
    getLerro(){
        return this.lerro;
    }

    // ↓ Pantailan idazten dira zenbat puntu dituzu horain
    puntuakIdatzi(){
        const container = document.getElementById("puntuak");
        container.innerHTML = "Score: "+Math.round(this.score);
    }

    // ↓ Pantailan idazten dira zenbat den MaxScore dituzu horain
    maxScoreIdatzi(){
        const container = document.getElementById("puntuak_max");
        container.innerHTML = "Max Score: "+this.maxScore;
    }

    // ↓ Begiratzen da ea horaingo Scorea maxScore baino handiagoa den, eta baldin bada, maxScore berritzen du.
    hilda(){
        //console.log(this.maxScore);
        if(this.maxScore< this.score){
            this.maxScore = this.score;
            this.maxScore = Math.round(this.maxScore);
            this.setCookie();
        }
    }



    // ↓ Puntuak ez galtzeko horrialdea berritzean gure record-a
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


    // ↓ Cookiren bat egonez gure puntuazioarekin, bueltatzen du bertan dagoen informazioa
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

// ↓ JS objetuak eskatzen dute exportatzea objetua
export default Puntuak;