import https from './https';

var jq = jQuery.noConflict();

document.addEventListener("DOMContentLoaded", () => {
    console.log("Le DOM est prêt !");
    loadScreenSize();
    window.addEventListener("resize", loadScreenSize);

    jq("#btnLog").on("click", function (event) {
        event.preventDefault(); 
        login();
    });
});

function loadScreenSize() {
    const largeur: number = window.innerWidth;
    const hauteur: number = window.innerHeight;
    jq('body').css('width', largeur+ "px")
    jq('body').css('height', hauteur+ "px")
}

async function login(){
    const mail = jq("#mail").val();
    const password = jq("#password").val();
    
    const body = {
        mail: mail,
        password: password
    }
    const res = await https.post("auth/signin", body, "")
    if(res){
        window.location.href = "/app.html"
    }
}


