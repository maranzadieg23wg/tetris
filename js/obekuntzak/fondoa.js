class FondoaAl{

    constructor(){
        /*******************Fondoa aldatu*******************/
        document.getElementById("fondo-Normal").addEventListener("click", this.fondo_Normal);
        document.getElementById("fondo-G").addEventListener("click", this.fondo_G);
        document.getElementById("fondo-B").addEventListener("click", this.fondo_B);
        
    }


    
    fondo_Normal(){
        document.body.style.background = "linear-gradient(180deg, rgba(113,113,113,1) 30%, rgba(0,0,0,1) 100%)";
        document.getElementById("menu").style.backgroundColor="#000000";
    }

    fondo_G(){
        document.body.style.backgroundImage = "url('../../img/giga-chad.png')";
        document.body.style.backgroundSize = "cover";
        document.body.style.backgroundPosition = "center";
        document.body.style.backgroundRepeat = "no-repeat";
        document.getElementById("menu").style.backgroundColor="#000000";
    }

    fondo_B(){
        document.body.style.backgroundImage = "url('../../img/berserk.png')";
        document.body.style.backgroundSize = "cover";
        document.body.style.backgroundPosition = "center";
        document.body.style.backgroundRepeat = "no-repeat";
        document.getElementById("menu").style.backgroundColor= "#3b3b3b";
    }

    fondo_Perso(ur){
        document.body.style.backgroundImage = "url("+ur+")";
        document.body.style.backgroundSize = "cover";
        document.body.style.backgroundPosition = "center";
        document.body.style.backgroundRepeat = "no-repeat";
        document.getElementById("menu").style.backgroundColor= "#000000";
    }

    
}

export default FondoaAl;