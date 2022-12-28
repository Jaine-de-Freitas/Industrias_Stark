ola=document.getElementById('ola')
resposta=document.getElementById('resposta')
jogos=document.getElementById('jogos')
itens=document.getElementById('listaC')
seguinte=document.querySelector('.seguinte')
convP=document.querySelector('.bate-papoP')
convT=document.querySelector('.bate-papoT')
convNV=document.querySelector('.bate-papoNV')
retorno=document.getElementById('retorno')
primsg=document.getElementById('primsg')
restomsg=document.getElementById('restomsg')

function menuSome(){
    itens.style.display='none'
}
function menuAparece(){
    itens.style.display='block'
}
function pepper(){
    retorno.style.display='none'
    seguinte.style.display='none'
    convP.style.display='block'
    convT.style.display='none'
    convNV.style.display='none'
    ola.style.display='block'
    En=document.querySelector('.e')
    En.addEventListener('click',resp)
}
function resp(){
    var responde=document.querySelector('input[name=escolha]:checked').value
    str=document.getElementById('str')
    if(responde=='sim'){
        retorno.style.display='block'
        seguinte.style.display='block'
        ola.style.display='none'
        resposta.innerHTML="Sim :)"
        resposta.style.display="block"
        str.innerHTML="Legal!"
        jogos.style.display='block'
    }else{
        retorno.style.display='block'
        seguinte.style.display='block'
        ola.style.display='none'
        resposta.innerHTML="Não :/"
        resposta.style.display="block"
        str.innerHTML="Tudo bem! Talvez outro dia, mas se mudar de ideia:"
        jogos.style.display="block"
    }
}
function tony(){
    convT.style.display='block'
    convP.style.display='none'
    convNV.style.display='none'
}
function voltar(){
    ola.style.display='block'
    seguinte.style.display='none'
}
function vingadores(){
    convT.style.display='none'
    convP.style.display='none'
    convNV.style.display='block'
    document.getElementById()
}
function cima(){
    primsg.style.display='block'
    restomsg.style.display='none'
}
function baixo(){
    primsg.style.display='none'
    restomsg.style.display='block'
    document.getElementById('apresentar').innerHTML='Oi, sou '+window.localStorage.getItem('Nome')
    document.getElementById('nick').innerHTML=window.localStorage.getItem('Nome')
}
function reproduzir(){
    var audio=document.getElementById('sons')
    audio.play()
}