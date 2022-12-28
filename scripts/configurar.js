img=document.getElementById('exibe')
input=document.querySelector('#perfil')
img2=document.getElementById('imagem')
botao=document.getElementById('botao')
itens=document.getElementById('listaC')

function exibir() {
    if (this.files && this.files[0]) {
        var file = new FileReader();
        file.onload = function(evento) {
            img.style.display='block'
            img2.style.display='none'
            img.src = evento.target.result
            window.localStorage.setItem('CaminhoFoto',img.src)
        };       
        file.readAsDataURL(this.files[0])
    }
}
function pegarNome(){
    var nome=document.getElementById('nome').value
    var Name=nome.toUpperCase()
    console.log(Name)
    if(Name==''){
        alert('Você não digitou seu nome! :/')
    }else{
        window.localStorage.setItem('Nome',Name)
        window.location.href="../html/conta.html"
        console.log('teste')
    }
}
function verificar(){
    botao.addEventListener('click',pegarNome)
    var CaminhoFoto= window.localStorage.getItem('CaminhoFoto')
    var Nome= window.localStorage.getItem('Nome')
    var comparar=(Nome!=null)
    if(CaminhoFoto==null){
        input.addEventListener('change',exibir)
    }else{
        img2.style.display='none'
        img.style.display='block'
        img.src=CaminhoFoto
        input.addEventListener('change',exibir)
    }
    if(comparar==true){
        document.getElementById('nome').value=`${Nome}`
        alert('Você já tem uma conta! Aproveite para mudar alguma configuração do seu perfil :]')
    }
}
function menuSome(){
    itens.style.display='none'
}
function menuAparece(){
    itens.style.display='block'
}