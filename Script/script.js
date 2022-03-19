/* Regra de como funciona 

Carne - 400gr por pessoa se for + de 6hrs - 650gr
Cerveja - 1200ml por pessoa se for + de 6hrs - 2000ml
Refrigerante/agua - 1000ml por pessoa se for + de 6hrs 1500ml

Crianca vale por 1/2 pessoa

*/

let inputAdultos = document.getElementById("adultos"); /*linkando a variavel ao input adultos*/
let inputCriancas = document.getElementById("criancas");
let inputDuracao = document.getElementById("duracao");

let resultado = document.getElementById("resultado"); /*linkando na div resultado*/

function calcular(){
    console.log("calculando...")

    let adultos = inputAdultos.value;
    let criancas = inputCriancas.value;
    let duracao = inputDuracao.value;

    let qdtTotalCarne = carnePP(duracao) * adultos + (carnePP(duracao) / 2 * criancas);
    let qdtTotalCerveja = cervejaPP(duracao) * adultos;
    let qdtTotalBebidas = bebidasPP(duracao) * adultos + (bebidasPP(duracao) / 2 * criancas);

    resultado.innerHTML = `<p>${qdtTotalCarne/1000} Kg de Carne<p>`;
    resultado.innerHTML += `<p>${Math.ceil(qdtTotalCerveja/355)} Latas de Cerveja</p>`; /* 355 pq é o tamanho da lata, e math.ceil é para arredontar pra cima*/
    resultado.innerHTML += `<p>${Math.ceil(qdtTotalBebidas/2000)} Pets 2 litros de Bebidas</p>`;
}

function carnePP(duracao){
    
    if (duracao >= 6){
        return 650;
    }else{
        return 400;
    }

}

function cervejaPP(duracao){
    
    if (duracao >= 6){
        return 2000;
    }else{
        return 1200;
    }

}

function bebidasPP(duracao){
    
    if (duracao >= 6){
        return 1500;
    }else{
        return 1000;
    }

}

