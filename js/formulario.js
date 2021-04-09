// Variaveis do formulario ===============================
// Indentificação do usuario:
var nomeUsurio = document.getElementById('Cnome')
var senhaUsurio = document.getElementById('Csenha')
var emailUsurio = document.getElementById('Cemail')
var sexoUsuario = document.getElementById('Csex')
var nascUsurio = document.getElementById('Cnasc')
// Endereço do usuario:
// Menssagem do usuario:
// Quero um google grass:

function total(){
    var quant = parseInt(document.getElementById('Cquan').value);
    tot = quant * 1200;
    document.getElementById('Cvalor').value = tot + " $";
}
