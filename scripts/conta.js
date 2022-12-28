function perfil(){
    var CaminhoFoto= window.localStorage.getItem('CaminhoFoto')
    var Nome= window.localStorage.getItem('Nome')
    var img=document.getElementById('perfil')
    var nome=document.getElementById('nome')
    var alerta=document.getElementById('alerta')
    var usuario=document.getElementById('usuario')
    if(Nome==null){
        usuario.style.display='none'
        alerta.style.display='block'
    }else{
        nome.innerHTML=Nome
    }
    if(CaminhoFoto==null){
        img.src='../imagens/avengersA.png'
    }else{
        img.src=CaminhoFoto
    }
}
function menuSome(){
    itens=document.getElementById('listaC')
    itens.style.display='none'
}
function menuAparece(){
    itens=document.getElementById('listaC')
    itens.style.display='block'
}