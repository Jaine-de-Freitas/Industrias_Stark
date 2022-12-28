function texto(){
    var textoI=document.getElementById('textos')
    var formulario=document.getElementById('formulario')
    textoI.style.display='none'
    formulario.style.display='block'
}
function player(){
    img=document.getElementById('cadeado1')
    var audio=document.getElementById('audio')
    audio.play()
    img.src='imagens/cad.png'
    setTimeout(texto,3050)
}
function site(){
    window.location.href="html/existe.html"
}
function tentativa(){
    var audioN=document.getElementById('audioN')
    var senha=(document.getElementById('senha').value).toUpperCase()
    var msg=document.getElementById('msg')
    if(senha=='PLAYBOYZINHO'){
        img2.src='imagens/cad.png'
        audioP.play()
        setTimeout(site,2800)
    }else{
        audioN.play()
        msg.innerHTML='Tente o diminutivo de playboy!'
    }
}
function senhA(){
    var senha=(document.getElementById('senha').value).toUpperCase()
    var audioN=document.getElementById('audioN')
    var audioP=document.getElementById('audioP')
    img2=document.getElementById('cadeado2')
    if(senha=='PLAYBOYZINHO'){
        img2.src='imagens/cad.png'
        audioP.play()
        setTimeout(site,2800)
    }else{
        audioN.play()
        tentativa()
    }
}