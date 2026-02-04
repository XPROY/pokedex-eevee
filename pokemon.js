

const pokemon= {
   nome:"Eevee",
   tipo:"Normal",
   descricao:"Pokémon evolução",
   img:"animacao-poke/eevee.gif",
   evolucoes:[
    {nome:"Vaporion",tipo:"Água",img:"animacao-poke/vaporion.gif"},
    {nome:"Flareon",tipo:"Fogo",img:"animacao-poke/flareon.gif"},
    {nome:"Jolteon",tipo:"Eletrico",img: "animacao-poke/jolteon.gif"},
    {nome:"Umbreon",tipo:"Sombrio",img:"animacao-poke/umbreon.gif"},
   ]

};



let evoluindo= false;
function evoluir (indice)
{
    if (evoluindo) return;
    evoluindo = true;

    ligarLuz();
    iniciarEvolucao(() =>{
    const img= document.getElementById("pokemonImg");

    img.classList.add("evoluindo");

    setTimeout(()=> {
        const evo = pokemon.evolucoes[indice];

        img.src = evo.img;
        document.getElementById("pokemonNome").innerText = evo.nome;
        document.getElementById("pokemonTipo").innerText = "Tipo" + evo.tipo;
        document.getElementById("pokemonDesc").innerText = "Evolução de " + pokemon.nome;

        img.classList.remove("evoluindo");
        document.getElementById("progresso").style.width = "0%";

        desligarLuz();
        evoluindo = false;
    },500);
});
}
 let progressoAtual = 0;
 let intervalo = null;

 function iniciarEvolucao(callback) {
     progressoAtual =0;
     const barra = document.getElementById("progresso");
    
     intervalo = setInterval(() => {
        progressoAtual += 5;
         barra.style.width = progressoAtual +"%";
         if (progressoAtual>= 100) {
            clearInterval(intervalo);
            callback();
         }
     },50);
 }


 function evoluir (indice){
    if (evoluindo) return;
    evoluindo = true;

    

    tocarSom();
    ligarLuz();

    iniciarEvolucao((ligarLuz) => {
const img = document.getElementById("pokemonImg");
img.classList.add("evoluindo");
setTimeout((desligarLuz) => {
    const evo = pokemon.evolucoes[indice]

    img.src = evo.img
    document.getElementById("pokemonNome").innerText = evo.nome;
    document.getElementById("pokemonTipo").innerText = "Tipo:" + evo.tipo;
    document.getElementById("pokemonDesc").innerText = "Evolução de " +pokemon.nome;

    img.classList.remove("evoluindo");
    
    
    evoluindo = false;
    document.getElementById("progresso").style.width = "0%";

    alert("seu pokemon evoluiu");

 document.getElementById("msg").innerText= "Evolução concluída";
},500);
    });
 }

 function ligarLuz() {
  document.getElementById("luz").classList.add("luz-ativa");
}

function desligarLuz() {
  document.getElementById("luz").classList.remove("luz-ativa");
}



const somEvolucao = new Audio("sons/evolucao.mp3");


somEvolucao.volume = 0.6;

function tocarSom() {
    somEvolucao.currentTime = 0;
    somEvolucao.play();
}

function pararSom() {
    somEvolucao.pause();
    somEvolucao.currentTime =0;
}


{
 document.getElementById("telaInicial").style.display = "none";
  document.querySelector(".pokedex").style.display = "block";
};

document.body.addEventListener("click", () => {
  somEvolucao.play();
});

document.getElementById("btnStart").addEventListener("click", () => {
  document.getElementById("telaInicial").style.display = "none";
  document.querySelector(".pokedex").style.display = "block";
});



if ("serviceWorker" in navigator) {
  navigator.serviceWorker.register("service-worker.js")
    .then(() => console.log("Service Worker registrado"))
    .catch(err => console.log("Erro:", err));
}








 