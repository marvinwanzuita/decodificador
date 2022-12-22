
var criptografado
var descriptografado

var botaoCriptografar = document.querySelector("#btnCriptografar")
var apresentacaoTexto = document.querySelector("#apresentacaoTexto")
var botaoDescriptografar = document.querySelector("#btnDescriptografar")
var botaoCopiar = document.querySelector("#btnCopiar")

function criptografar(){
    criptografado = document.getElementById("caixaTexto").value

    let criptografadoSeparado = criptografado.split('')

    let vogais = ['a', 'e', 'i', 'o', 'u']

    let novoTexto = []

    criptografadoSeparado.forEach((e) => {
        if(vogais.includes(e)){
            switch(e){
            case 'a':
                novoTexto.push('ai')
                break
            case 'e':
                novoTexto.push('enter')
                break
            case 'i':
                novoTexto.push('imes')
                break
            case 'o':
                novoTexto.push('ober')
                break
            case 'u':
                novoTexto.push('ufat')
                break
            } 
        } else {
            novoTexto.push(e)
        }
    })

    criptografado = novoTexto.join('')

    apresentacaoTexto.innerHTML = criptografado
}

function descriptografar(){

    descriptografado = document.getElementById("caixaTexto").value

    descriptografado = descriptografado.replace(/ai/g,'a')
    descriptografado = descriptografado.replace(/enter/g, 'e')
    descriptografado = descriptografado.replace(/imes/g, 'i')
    descriptografado = descriptografado.replace(/ober/g, 'o')
    descriptografado = descriptografado.replace(/ufat/g, 'u')

    apresentacaoTexto.innerHTML = descriptografado

}

function copiar(){
    var texto = document.getElementById("apresentacaoTexto")
    texto.select()
    document.execCommand("copy")
}

botaoCriptografar.onclick = criptografar
botaoDescriptografar.onclick = descriptografar
botaoCopiar.onclick = copiar

