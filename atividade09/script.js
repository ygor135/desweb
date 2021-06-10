let inputAdultos = document.getElementById("adultos");
let inputCriancas = document.getElementById("criancas");
let inputDuracao = document.getElementById("duracao");

let resultado = document.getElementById("resultado");

function calcular(){
    let adultos = inputAdultos.value;
    let criancas = inputCriancas.value;
    let duracao = inputDuracao.value;

    let qtdTotalBolo = (totalBolo(duracao) * adultos) + (totalBolo(duracao) /2 * criancas);
    let qtdTotalSalg = (totalSalg(duracao) * adultos) + (totalSalg(duracao) /2 * criancas);
    let qtdTotalBeb = (totalBeb(duracao) * adultos) + (totalBeb(duracao) /2 * criancas);

    console.log(qtdTotalBolo, qtdTotalSalg, qtdTotalBeb);

    resultado.innerHTML = `<p>${Math.ceil(qtdTotalBolo / 1000)} kg de bolo</p>`;
    resultado.innerHTML += `<p>${Math.ceil(qtdTotalSalg / 100)} centos de salgado</p>`;
    resultado.innerHTML += `<p>${Math.ceil(qtdTotalBeb / 2000)} garrafas de bebida(2L)</p>`;
   
}

function totalBolo(duracao){
    if (duracao >= 6){
        return 500;
    } else{
        return 300;
    }
}

function totalSalg(duracao){
    if (duracao >= 6){
        return 50;
    } else{
        return 30;
    }
}

function totalBeb(duracao){
    if (duracao >= 6){
        return 1500;
    } else{
        return 1000;
    }
}