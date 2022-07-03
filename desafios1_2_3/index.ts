//DESAFIO 1: Como podemos rodar isso em um arquivo .ts sem causar erros? 

/* let employee = {};
employee.code = 10;
employee.name = "John"; */

//SOLUÇÃO
interface employee{
      code:number,
      name:string;
}
let employee_1:employee= {
      code:10,
      name:'lucio;'
}

//DESAFIO 2:// Como podemos melhorar o esse código usando TS? 
/* let pessoa1 = {};
pessoa1.nome = "maria";
pessoa1.idade = 29;
pessoa1.profissao = "atriz"

let pessoa2 = {}
pessoa2.nome = "roberto";
pessoa2.idade = 19;
pessoa2.profissao = "Padeiro";

let pessoa3 = {
    nome: "laura",
    idade: "32",
    profissao: "Atriz"
};

let pessoa4 = {
    nome = "carlos",
    idade = 19,
    profissao = "padeiro"
}
 */

//SOLUÇÃO
interface pessoa{
      nome: string;
      idade: number;
      profissao: string;
}

let pessoa1: pessoa = {
      nome : "maria",
      idade : 29,
      profissao : "atriz",
}

let pessoa2: pessoa = {
      nome: "roberto",
      idade: 19,
      profissao: "Padeiro",
}

let pessoa3: pessoa = {
      nome: "laura",
      idade: 32,
      profissao: "Atriz",
}

let pessoa4: pessoa = {
      nome : "carlos",
      idade : 19,
      profissao : "padeiro",
}

//DESAFIO 3: O código abaixo tem alguns erros e não funciona como deveria. Você pode identificar quais são e corrigi-los em um arquivo TS?
/* let botaoAtualizar = document.getElementById('atualizar-saldo');
let botaoLimpar = document.getElementById('limpar-saldo');
let soma = document.getElementById('soma');
let campoSaldo = document.getElementById('campo-saldo');
campoSaldo.innerHTML = 0
function somarAoSaldo(soma) {
    campoSaldo.innerHTML += soma;
}
function limparSaldo() {
    campoSaldo.innerHTML = '';
}
botaoAtualizar.addEventListener('click', function () {
    somarAoSaldo(soma.value);
});
botaoLimpar.addEventListener('click', function () {
    limparSaldo();
}); */
/**
    <h4>Valor a ser adicionado: <input id="soma"> </h4>
    <button id="atualizar-saldo">Atualizar saldo</button>
    <button id="limpar-saldo">Limpar seu saldo</button>
    <h1>"Seu saldo é: " <span id="campo-saldo"></span></h1>
 */


//SOLUÇÃO
let botaoAtualizar = document.getElementById('atualizar-saldo') as HTMLButtonElement;
let botaoLimpar = document.getElementById('limpar-saldo') as HTMLButtonElement;
let soma = document.getElementById('soma') as HTMLInputElement;
let campoSaldo = document.getElementById('campo-saldo') as HTMLSpanElement;

campoSaldo.innerHTML = '0';
let saldo = parseInt(campoSaldo.innerHTML)

function somarAoSaldo(soma:number) {
      saldo = parseInt(campoSaldo.innerHTML)+soma;
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


    





