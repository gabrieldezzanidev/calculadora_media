const form = document.getElementById('form-atividade'); //chama o formulário
const imgAprovado = '<img src="./images/aprovado.png" alt="Emoji celebrando"/>';
const imgReprovado = '<img src="./images/reprovado.png" alt="Emoji decepcionado"/>';
const atividades = []; // cria um array vazio
const notas = [];
const spanAprovado = '<span class="resultado aprovado">Aprovado/>'
const spanReprovado = '<span class="resultado reprovado">Reprovado/>'


let linhas  = ''; // faz com que a tabela receba mais de uma linha 

form.addEventListener('submit', function(e) {    
    e.preventDefault();   //tira o reload da página
    
    adicionaLinha(); //chama a função após o evento
    atualizaTabela(); //chama a função após a adicionaLinha
    atualizaMediaFinal();
});

function adicionaLinha() { //tem a função de adicionar linha nova à variável linhas
    const inputNomeAtividade = document.getElementById('nome-atividade'); // cria uma constantes para os ids
    const inputNotaAtividade = document.getElementById('nota-atividade');

<<<<<<< HEAD
    if(atividades.includes(inputNomeAtividade.value)) { // diz se ja existe o elemento dentro da array
        alert(`A atividade: ${inputNomeAtividade.value} já foi inserida`)
    } else{

=======
>>>>>>> parent of 27a19a7 (consertando bug)
    atividades.push(inputNomeAtividade.value); // joga o valor fornecido pelo usuario na array vazia criada para no final gerar a média.
    notas.push(parseFloat(inputNotaAtividade.value)); // define que o valor será um numero e nao uma string 

    let linha = '<tr>';
    linha += `<td>${inputNomeAtividade.value}</td>`;
    linha += `<td>${inputNotaAtividade.value}</td>`;
    linha += `<td>${inputNotaAtividade.value >= 7 ? imgAprovado : imgReprovado}</td>`;  //? é o if e : é o else
    linha += `</tr>`;

    linhas += linha;
}
    inputNomeAtividade.value = '';
    inputNotaAtividade.value = '';  // limpa os campos apo o uso

function atualizaTabela(){
    const corpoTabela = document.querySelector('tbody'); //substitui o tbody pelo que foi escrito no js 
    corpoTabela.innerHTML = linhas;
}   

function atualizaMediaFinal() {  
    const mediaFinal = calculaMediaFinal();

    document.getElementById('media-final-valor').innerHTML = mediaFinal
    document.getElementById('media-final-resultado').innerHTML = mediaFinal >= 7 ? spanAprovado : spanReprovado;

}

function calculaMediaFinal() {
    let somaDasNotas = 0; // inicia a variavel com o valor 0

<<<<<<< HEAD
    for (let i = 0; i < notas.length; i++){ // a interação ira continuar enquanto i for maior que 0 e a cada interação i aumenta 1
        somaDasNotas += notas[i]; //soma todas as notas dentro da array
=======
    for (let i = 0; i < notas.length; i++);{
        somaDasNotas += notas[i];
>>>>>>> parent of 27a19a7 (consertando bug)
    }

    return somaDasNotas / notas.length; //calcula a media 
}