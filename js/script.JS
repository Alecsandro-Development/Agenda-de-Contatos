/* Criação do Array para alocação dos registros herdados dos campos */
const listaContatos = [];

/*Atributo responsável por capturar os dados preenchidos pelo usuário, e imprimir em tela*/
const listaContatosContainer = document.querySelector('.secaolistaContatos__Lista'); 

/*Constante zerada*/
let id = 0; 

/*Declaração dos campos do formulário através do ID */

const campoNome = document.getElementById('campoNomeCompleto');
const campoEmail = document.getElementById('campoEmail');
const campoTelefone = document.getElementById('campoTelefone');
const botaoAdicionar = document.getElementById('botaoAdicionar');

/* Criação da Função para capturar os valores dos campos, e armazenar na array */
function adicionarNovoContato () {
    const valorNome = campoNome.value;
    const valorEmail = campoEmail.value;
    const valorTelefone = campoTelefone.value; 
  
    const novoContato = {
        id: id,
        nome: valorNome,
        email: valorEmail,
        telefone: valorTelefone, 
    };
        id++;
        listaContatos.push(novoContato); 

        renderizarLayout();     

    }

/*AQUI*/

function renderizarLayout () {
    listaContatosContainer.innerHTML = '';  /*Limpeza da lista para cadastro de novos contatos, pois estava duplicando */

    if(listaContatos.length !== 0){
        for(let i = 0; i < listaContatos.length; i++){
            criarLayout(listaContatos[i]);
        }
    } else{
        const listaContatosVazia = '<li> <p>Não há Contato(s) Cadastrado(s)!</p> </li>';

        listaContatosContainer.innerHTML = listaContatosVazia;
    }
 
}
        renderizarLayout();

/* Metodo para permitir a criação de elementos HTML dentro do JS */
function criarLayout (contato){
    const li = document.createElement('li');
    const button = document.createElement('button');
    const h2 = document.createElement('h2');
    const p = document.createElement('p');
    const span = document.createElement('span');

/*Atributo responsável por unir os elementos dos dados para impressão*/
    li.dataset.id = contato.id; /*Atributo utilizado para criar o ID do registro na array, dessa forma será possível identificar e remover o contato via ID */
    h2.innerText = contato.nome;
    p.innerText = contato.email;
    span.innerText = contato.telefone;
    
    button.id = "removerContato";
    button.addEventListener('click', removerContato);

/* Metodo responsável por inserir um elemento dentro de outro elemento, ou seja estamos inserindo os elementos abaixo, dentro da LI (Lista desordenada) */
    li.appendChild(button);
    li.appendChild(h2);
    li.appendChild(p);
    li.appendChild(span);

    listaContatosContainer.appendChild(li);
}

/*Função para remover os contatos da lista*/
function removerContato (evento) {
    const botaoClicado = evento.target; /*Atributo responsável por retornar qual elemento da lista que foi "clicado" */
    const contatoClicado = botaoClicado.parentElement; /*Atributo responsável por retornar o registro PAI do elemento clicado */
    const idContatoClicado = contatoClicado.dataset.id; /*Selecionando o campo ID, segundo o tipo de dado*/

    const contatoRemovido = listaContatos.find ((contato) => contato.id == idContatoClicado); /*Método responsável por identificar o registro dentro da array*/
    const posicaoContatoRemovido = listaContatos.indexOf(contatoRemovido); /*Posição do registro na array*/
    listaContatos.splice(posicaoContatoRemovido,1); /*Métoodo para exclusão de registro, segundo posição no array*/

    renderizarLayout();   

}

function ValidaCampos(){
    if(campoNome.value == "") {
        alert("Por favor, efetue o preenchimento do campo Nome");
        campoNome.focus();
        return;
    }

    if(campoEmail.value == "") {
        alert("Por favor, efetue o preenchimento do campo E-mail");
        campoEmail.focus();
        return;
    }

    if(campoTelefone.value == "") {
        alert("Por favor, efetue o preenchimento do campo Telefone");
        campoTelefone.focus();
        return;
    } 

    else {
        botaoAdicionar.addEventListener('click',adicionarNovoContato);
        return;
    } 

  
}

