/*
Autor: Jorge Marcelo
Data de Criação: 14/08/2023
Github: https://github.com/Jorge-Marcelo
Linkedin: https://www.linkedin.com/in/jorge-marcelo-067a5017b/
Instagram: https://www.instagram.com/10_stronger/
Threads: https://www.threads.net/@10_stronger
*/ 

/*Pegando elementos pelo DOM*/
let numero = document.getElementById("numero");
let buttonAvancar = document.getElementById("avancar");
let buttonVoltar = document.getElementById("voltar");
let buttonReset = document.getElementById("reset");

/*Contador*/
let contador = 0;


/*Função para adicionar um numero */
function avancar(evento){
evento.preventDefault();
contador++;
numero.textContent = contador;
}

/*Função para remover um numero*/
function voltar(evento){
evento.preventDefault();
contador--;
numero.textContent = contador;
}

/*Função de resst*/
function reset(evento){
evento.preventDefault();
contador = 0;
numero.textContent = contador;
}


buttonAvancar.addEventListener("click", avancar);
buttonVoltar.addEventListener("click", voltar);
buttonReset.addEventListener("click", reset);

/*Redes Sociais*/

/*Função que vai abrir o link do instagram*/
const instgramLink = "https://www.instagram.com/10_stronger/";
const instagramButton = document.getElementById("instagram");

function instagram(instgramLink){
const newTableInstagram = window.open(instgramLink, "_blank");
newTableInstagram.focus();
}

instagramButton.addEventListener("click", function(){
instagram(instgramLink);
})

/*Função que vai abrir o link do Threads*/
const threadsLink = "https://www.threads.net/@10_stronger";
const threadsButton = document.getElementById("threads");

function threads(threadsLink){
const newTableThreads = window.open(threadsLink, "_blank");
newTableThreads.focus();
}

threadsButton.addEventListener("click", function(){
threads(threadsLink);
})


/*Função que vai abrir o link do linkedin*/
const linkedinLink = "https://www.linkedin.com/in/jorge-marcelo-067a5017b/";
const linkedinButton = document.getElementById("linkedin");

function linkedin(linkedinLink){
const newTableLinkedin = window.open(linkedinLink, "_blank");
newTableLinkedin.focus();
}

linkedinButton.addEventListener("click", function(){
linkedin(linkedinLink);    
})


/*Função que vai abrir o link do Github*/
const githubLink = "https://github.com/Jorge-Marcelo";
const githubButton = document.getElementById("github");

function github(githubLink){
const newTableGithub = window.open(githubLink, "_blank");
newTableGithub.focus();
}

githubButton.addEventListener("click", function(){
github(githubLink);
})