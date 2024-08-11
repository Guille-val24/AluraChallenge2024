const textArea= document.querySelector(".text-area");
const mensaje= document.querySelector(".mensaje");
let matrizCodigo= [["a", "al"],["e", "enter"], ["i", "imes"], ["o", "ober"], ["u", "ufat"]];

function btnEncriptar(){
    const textoEncriptado= encriptar(textArea.value);
    mensaje.value = textoEncriptado;
    return mensaje;
}

function btnDesencriptar(){
    const textoDesencriptado= desencriptar(textArea.value);
    mensaje.value = textoDesencriptado;
    return mensaje;
}


function btncopiar(){
    navigator.clipboard.writeText(mensaje.value);
    alert("Texto copiado al portapapeles");
    mensaje.value = '';
    textArea.value = '';
}


function encriptar(stringEncriptada){
    for (let i = 0; i < stringEncriptada.length; i++) {
        if (stringEncriptada[i] >= 'A' && stringEncriptada[i] <= 'Z') {
            return "El texto no debe contener letras mayusculas ni acentos. Intenta de nuevo!";
        }else {
            for(let i=0; i<matrizCodigo.length; i++){

                if(stringEncriptada.includes(matrizCodigo[i][0])){
                    stringEncriptada = stringEncriptada.replaceAll(matrizCodigo[i][0], matrizCodigo[i][1]);
                }
            }
            return stringEncriptada;
        }
    }
    
}

function desencriptar(stringDesencriptada){
    for(let i=0; i<matrizCodigo.length; i++){
        if(stringDesencriptada.includes(matrizCodigo[i][1])){
            stringDesencriptada = stringDesencriptada.replaceAll(matrizCodigo[i][1], matrizCodigo[i][0]);
        }
    }
    return stringDesencriptada;
}
