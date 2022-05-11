var largura = 0
var altura = 0
var vidas = 1
var tempo = 0
var nivel = window.location.search
nivel = nivel.replace('?','')
var criarMosquitoTempo = 1500


if(nivel === 'Normal'){
    //1500
    criarMosquitoTempo = 1500
    tempo = 45
}else if(nivel === 'Dificil'){
    criarMosquitoTempo = 1000
    tempo = 30
}else if (nivel === 'ChuckNorris'){
    criarMosquitoTempo = 750
    tempo = 15
}

function ajustaTamanhoPalco(){
    altura = window.innerHeight
    largura =window.innerWidth
    //console.log(altura, largura)
}
ajustaTamanhoPalco()

var cronometro = setInterval(function(){
    tempo -= 1
    if(tempo< 0 ){
        clearInterval(cronometro)
        clearInterval(criaMosca)
        window.location.href="Vitoria.html"

    }else{
        document.getElementById('cronometro').innerHTML = tempo
    }
},1000)

function posRandom(){

//Remover o mosquito anterior(caso exista)
if(document.getElementById('mosquito')){
    document.getElementById('mosquito').remove()

    if(vidas > 3){
        window.location.href="fimDeJogo.html"
    }else{
        document.getElementById('v' + vidas).src='imagens/coracao_vazio.png'


        vidas++
    }
}


var PosX = Math.floor(Math.random() * largura)-90
var PosY = Math.floor(Math.random() * altura)-90

PosX = PosX <0 ? 0 : PosX
PosY = PosY <0 ? 0 : PosY

//criar o elemento html

var mosquito = document.createElement('img')
mosquito.src = 'imagens/mosca.png'
mosquito.className =tamanhoAleatorio() +  ' '  + LadoAleatorio()
mosquito.style.left = PosX + 'px'
mosquito.style.top = PosY + 'px'
mosquito.style.position= 'absolute'
mosquito.id = 'mosquito'
document.body.appendChild(mosquito)
mosquito.onclick = function(){
    this.remove()
}


}

function tamanhoAleatorio(){
    var classe = Math.floor(Math.random()*3)

    switch(classe){
        case 0:
            return 'mosquito1'

        case 1:
            return 'mosquito2'

        case 2:
            return 'mosquito3'

    }

}

function LadoAleatorio(){
    var classe = Math.floor(Math.random()*2)

    switch(classe){
        case 0:
            return 'LadoA'

        case 1:
            return 'LadoB'

    }
}


//Controlando a vida