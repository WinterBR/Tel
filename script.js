const form = document.getElementById('FormTel');
let linhas = '';
const nomes = [];
const num = [];

form.addEventListener('submit', function(e) {
    e.preventDefault();

    adicionaLinha();
    atualizaTabela();
});

function adicionaLinha() {
    const inputNome = document.getElementById('Nome');
    const inputNum = document.getElementById('Num');

    if (inputNum.value.length < 10 || inputNum.value.length > 11) {
        alert('O número de celular deve ter entre 10 e 11 dígitos.');
        return; 
    }

    if (nomes.includes(inputNome.value)) {
        alert(`O nome ${inputNome.value} já existe.`);
        return; 
    }

    if (num.includes(inputNum.value)) {
        alert(`O número de telefone: ${inputNum.value} já existe.`);
        return;
    }

    nomes.push(inputNome.value);
    num.push(inputNum.value);

    let linha = '<tr>';
    linha += `<td>${inputNome.value}</td>`;

    if (inputNum.value.length === 10) {
        linha += `<td>${inputNum.value[0]}${inputNum.value[1]} ${inputNum.value[2]}${inputNum.value[3]}${inputNum.value[4]}${inputNum.value[5]}-${inputNum.value[6]}${inputNum.value[7]}${inputNum.value[8]}${inputNum.value[9]}</td>`;
    }
     if (inputNum.value.length === 11) {
        linha += `<td>${inputNum.value[0]}${inputNum.value[1]} ${inputNum.value[2]}${inputNum.value[3]}${inputNum.value[4]}${inputNum.value[5]}${inputNum.value[6]}-${inputNum.value[7]}${inputNum.value[8]}${inputNum.value[9]}${inputNum.value[10]}</td>`;
    }

    linha += '</tr>';
    linhas += linha;

    inputNome.value = '';
    inputNum.value = '';
}

function atualizaTabela() {
    const corpoTabela = document.querySelector('tbody');
    corpoTabela.innerHTML = linhas;
}
