//DESAFIO 1: Como podemos rodar isso em um arquivo .ts sem causar erros? 
var employee_1 = {
    code: 10,
    name: 'lucio;'
};
var pessoa1 = {
    nome: "maria",
    idade: 29,
    profissao: "atriz"
};
var pessoa2 = {
    nome: "roberto",
    idade: 19,
    profissao: "Padeiro"
};
var pessoa3 = {
    nome: "laura",
    idade: 32,
    profissao: "Atriz"
};
var pessoa4 = {
    nome: "carlos",
    idade: 19,
    profissao: "padeiro"
};
//DESAFIO 3: O código abaixo tem alguns erros e não funciona como deveria. Você pode identificar quais são e corrigi-los em um arquivo TS?
var botaoAtualizar = document.getElementById('atualizar-saldo');
var botaoLimpar = document.getElementById('limpar-saldo');
var soma = document.getElementById('soma');
var campoSaldo = document.getElementById('campo-saldo');
campoSaldo.innerHTML = '0';
var saldo = parseInt(campoSaldo.innerHTML);
function somarAoSaldo(soma) {
    saldo = parseInt(campoSaldo.innerHTML) + soma;
    campoSaldo.innerHTML = '';
    campoSaldo.innerHTML = String(saldo);
}
function limparSaldo() {
    campoSaldo.innerHTML = '0';
}
botaoAtualizar.addEventListener('click', function () {
    somarAoSaldo(parseInt(soma.value));
});
botaoLimpar.addEventListener('click', function () {
    limparSaldo();
});
