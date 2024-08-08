const textArea= document.querySelector(".text-area");
const mensaje= document.querySelector(".desencriptador");

function btnEncriptar(){
    const textoEncriptado= encriptar(textArea.value);
    mensaje.value = textoEncriptado;
}

function encriptar(stringEncriptada){
    let matrizCodigo= [["a", "ai"],["e", "enter"],["i", "imes"],["o", "ober"],["u", "ufat"]];
    stringEncriptada = stringEncriptada.toLowercase();

    for(let i=0; i<matrizCodigo.length; i++){
        if(stringEncriptada.includes(matrizCodigo[i][0])){
            stringEncriptada = stringEncriptada.replaceAll(matrizCodigo[i][0], matrizCodigo[i][1]);
        }
    }
    return stringEncriptada;
}