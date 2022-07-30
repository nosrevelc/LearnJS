
const form = document.querySelector('.form');

function verifica(evento) {
    evento.preventDefault();
    const peso = Number((document.querySelector('.peso').value).replace(/,/g, "."));
    const altura = Number((document.querySelector('.altura').value).replace(/,/g, "."));
    const msg = document.querySelector('.msg');
    let displayMsg;
    imc = (peso / (altura * altura)).toFixed(2);
    const msgImc = `Seu indice IMc é : ${imc}<br/>`

    if (isNaN(peso) || peso == false) {
        displayMsg = `<p class="alertaErro">Por favor coloque um valor válido para "Peso"</p>`;
    } else if (isNaN(altura) || altura == false) {
        displayMsg = `<p class="alertaErro">Por favor coloque um valor válido para "Altura"</p>`;
    } else if (imc <= 18.50) {
        displayMsg = `<p class="alertaAtencao">${msgImc} Atenção seu peso está abaixo da normalidade!</p>`;
    } else if (imc >= 18.51 && imc <= 24.99) {
        displayMsg = `<p class="alertaCerto">${msgImc}O seu peso se encontra dentro da normalidade</p>`;
    } else if (imc >= 25 && imc <= 29.99) {
        displayMsg = `<p class="alertaAtencao">${msgImc} Você demonstra um quadro de Sobrepeso</p>`;
    } else if (imc >= 30 && imc <= 34.99) {
        displayMsg = `<p class="alertaAtencao1">${msgImc} Você demonstra um quadro de Obesidade Grau 1</p>`;
    } else if (imc >= 35 && imc <= 39.99) {
        displayMsg = `<p class="alertaAtencao2">${msgImc} Você demonstra um quadro de Obesidade Grau 2</p>`;
    } else if (imc >= 40) {
        displayMsg = `<p class="alertaAtencao2">${msgImc} Você demonstra um quadro de Obesidade Grau 3</p>`;
    } else {
        displayMsg = "";
    }

    msg.innerHTML = displayMsg;
}

form.addEventListener('submit', verifica);