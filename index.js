// Seleciona os elementos necessários
const button = document.querySelector('.add-task-btn');
const input = document.querySelector('.input-task');
const inputEtiqueta = document.querySelector(".input-task2");

const listaCompleta = document.querySelector('.list-tasks');

// Lista para armazenar as tarefas
let minhaListaDeItens = [];

// Função para adicionar novas tarefas
function adicionarNovaTarefa() {
    const valorTarefa = input.value;
    const valorEtiqueta = inputEtiqueta.value;

    if (valorTarefa === '') return; // Evita adicionar tarefas vazias

    minhaListaDeItens.push({
        tarefa: valorTarefa,
        etiqueta: valorEtiqueta,
        concluida: false
    });

    input.value = ''; // Limpa o input após adicionar
    inputEtiqueta.value = ''; // Limpa o input da etiqueta

    mostrarTarefa();
}

// Função para mostrar as tarefas
function mostrarTarefa() {
    let novaLi = '';
    minhaListaDeItens.forEach((item, posicao) => {
        novaLi += `
            <div id="task-style">
                <li class="task">
                    <h2 id="title-end">
                        <span style="text-decoration: ${item.concluida ? 'line-through' : 'none'};">
                            ${item.tarefa}
                        </span>
                    </h2>
                    <div id="flex-section">
                        <div id="flex">
                            <p class="end">${item.etiqueta}</p>
                        </div>
                        <p class="data">Criado em: 21/08/2024</p>

                        <!-- Botão de concluir ou imagem substituindo o botão -->
                        <button class="concluir" onclick="itemConcluido(${posicao})" style="display: ${item.concluida ? 'none' : 'inline-block'};">
                            Concluir
                        </button>

                        <!-- A imagem vai substituir o botão quando a tarefa for concluída -->
                        <img class="img" src="img/feito.png" alt="Tarefa concluída" style="display: ${item.concluida ? 'inline-block' : 'none'};">
                    </div>
                </li>
            </div>
        `;
    });

    // Atualiza o conteúdo da lista de tarefas
    listaCompleta.innerHTML = novaLi;

    // Lógica para esconder o botão e mostrar a imagem ao clicar no botão do frontend1
    document.querySelectorAll('.btn-mostrar').forEach(botao => {
        botao.addEventListener('click', (evento) => {
            // Esconde o botão
            evento.target.style.display = 'none';
            
            // Exibe a imagem correspondente
            const divFrontend = evento.target.closest('div'); // Usa closest para garantir que a imagem correta seja selecionada
            const imagem = divFrontend.querySelector('.img-frontend');
            if (imagem) {
                imagem.style.display = 'block'; // Mostra a imagem
                
            }
        });
    });
}

// Função para marcar a tarefa como concluída
function itemConcluido(posicao) {
    minhaListaDeItens[posicao].concluida = true;
    mostrarTarefa();
}

// Adiciona o evento de clique para adicionar a tarefa
button.addEventListener('click', adicionarNovaTarefa);

// Função de clique no backend
// Função para alternar a exibição da imagem ao clicar no botão de concluir (Backend)
function toggleBackendImage(event) {
    const botaoBackend = event.target; // Obtém o botão que foi clicado
    const divTarefa = botaoBackend.closest('.gap'); // Encontra a div correta onde a imagem está localizada
    const imagemBackend = divTarefa.querySelector('.img-frontend'); // Seleciona a imagem dentro da div

    if (imagemBackend) {
        botaoBackend.style.display = 'none'; // Esconde o botão
        imagemBackend.style.display = 'inline-block'; // Exibe a imagem
    }
}

// Adiciona o evento de clique ao botão de concluir (Backend)
document.querySelectorAll('.concluir').forEach(botao => {
    botao.addEventListener('click', toggleBackendImage);

    mostrarTarefa();
});

