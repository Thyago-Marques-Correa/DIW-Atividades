// taxas de cambio, estrutura de dados

var taxasDeCambio = {
    "USD": { "USD": 1, "EUR": 0.85, "GBP": 0.75, "JPY": 110.61, "BRL": 5.26 },
    "EUR": { "USD": 1.18, "EUR": 1, "GBP": 0.88, "JPY": 130.33, "BRL": 6.18 },
    "GBP": { "USD": 1.34, "EUR": 1.14, "GBP": 1, "JPY": 148.37, "BRL": 7.03 },
    "JPY": { "USD": 0.009, "EUR": 0.0077, "GBP": 0.0067, "JPY": 1, "BRL": 0.047 },
    "BRL": { "USD": 0.19, "EUR": 0.16, "GBP": 0.14, "JPY": 21.24, "BRL": 1 }
};

// define a interatividae da pagina

function converter() {
    var valor = document.getElementById("valor").value;
    var moedaOrigem = document.getElementById("moedaOrigem").value;
    var moedaDestino = document.getElementById("moedaDestino").value;

    if (valor === "" || isNaN(valor)) {
        alert("Por favor, insira um valor numérico válido.");
        return;
    }

    var valorConvertido = valor * taxasDeCambio[moedaOrigem][moedaDestino];
    document.getElementById("resultado").innerHTML = "O valor convertido é " + valorConvertido.toFixed(2) + " " + moedaDestino;
}

// define a função de voltar a ultima pagina carregada

function Voltar() {
    window.history.back();
}

