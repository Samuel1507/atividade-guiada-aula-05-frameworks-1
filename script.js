const inputBusca = document.querySelector('#input-cep');
const btnBusca = document.querySelector('#btn-busca-cep');
const dadosBuscados = document.querySelector('.data-cep');

function procureCep() {
    const cep = inputBusca.value;

    fetch(`https://viacep.com.br/ws/${cep}/json/`)
    .then(data => {
        if(!data.ok) {
            throw new Error('Erro na conexão via Internet');
        }
        return data.json();
    })
    .then(data => {
        mostrarDadosNaTela(data);
    })
}

function mostrarDadosNaTela(dados) {
    inputBusca.value = '';
    dadosBuscados.innerHTML = '';

    dadosBuscados.innerHTML += `
    <ul>
        <li><b>RUA: </b> ${dados.logradouro}</li>
        <li><b>UF: </b> ${dados.uf}</li>
        <li><b>BAIRRO: </b> ${dados.bairro}</li>
        <li><b>DDD: </b> ${dados.ddd}</li>
    </ul>
    `

}