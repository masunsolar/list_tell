const form = document.getElementById('form_atv');
const contato = [];
const tel = [];
let contadorContatos = 0;

let linhas = '';

form.addEventListener('submit', function (e) {
    e.preventDefault();

    addline();
    atualizaTab();
    atualizaMF();
});

function addline() {
    const inputNomeContato = document.getElementById('nomeContato');
    const inputTelefone = document.getElementById('telefone');

    const telefoneValido = /^(\+\d+|\d+)$/.test(inputTelefone.value);

    if (!telefoneValido) {
        alert('Por favor, insira um número de telefone válido.');
        return;
    }

    if (contato.includes(inputNomeContato.value)) {
        alert(`O contato: ${inputNomeContato.value} já foi inserido!`);
    } else {
        contato.push(inputNomeContato.value);
        tel.push(parseFloat(inputTelefone.value));
        contadorContatos++;

        let linha = '<tr>';
        linha += `<td>${inputNomeContato.value}</td>`;
        linha += `<td>${inputTelefone.value}</td>`;
        linha += '</tr>';

        linhas += linha;
    }

    inputNomeContato.value = '';
    inputTelefone.value = '';
}

function atualizaTab() {
    const corpoTabela = document.querySelector('tbody');
    corpoTabela.innerHTML = linhas;

    const rodapeTabela = document.querySelector('tfoot #value-media');
    rodapeTabela.textContent = `${contadorContatos} pessoa${contadorContatos !== 1 ? 's' : ''}`;
}