//  API
//  https://github.com/BrasilAPI/BrasilAPI
//


'use strict';
const xhr = new XMLHttpRequest();
let resultado;
function buscarCep(valor) {
    xhr.open('GET', `https://brasilapi.com.br/api/cep/v1/${document.getElementById('cep').value}`);
    xhr.send();

    xhr.onreadystatechange = () => {
        if (xhr.status == 200) {
           if (xhr.responseText != "") {
               exibe(JSON.parse(xhr.responseText))
            };
        }
    }
    
   
} 

let exibe = (result) => {
    document.getElementById('saida').value += `ENDEREÇO: ${result.street}\nBAIRRO: ${result.neighborhood}\nCIDADE: ${result.city}-${result.state}\nCEP: ${result.cep}\n`;
    console.log("pasou aqui");
}

let limpar = () => {
    document.getElementById('saida').value = "";
    console.clear();
}


