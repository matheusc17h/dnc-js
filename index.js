//1° passo

const button = document.querySelector('.add-task-btn')
const input = document.querySelector('.input-task')



const listaCompleta = document.querySelector('.list-tasks')



 // 4° passo
let minhaListaDeItens = []


// 3° passo

function adicionarNovaTarefa() {
        const valorTarefa = input.value;
        const valorEtiqueta = inputEtiqueta.value;
        
        
        if (valorTarefa === '') return; // evita adicionar tarefas vazias
        
        minhaListaDeItens.push({
            tarefa: valorTarefa,
            etiqueta: valorEtiqueta,
            concluida: false
        });
        
        input.value = ''; // limpa o input após adicionar
        inputEtiqueta.value = ''; // limpa o input da etiqueta
        
        mostrarTarefa();
        }
        
        





    function mostrarTarefa() {
        let novaLi = '';
        minhaListaDeItens.forEach((item, posicao) => {
        novaLi += <div id="task-style"> 
        <li class="task"> 
        <h2 id="title-end">${item.tarefa}</h2> 
        <div id="flex-section"> 
        <div id="flex"> <div> <p class="end">${item.etiqueta}</p> </div>
         <p class="data">Criado em: 21/08/2024</p> 
        <button class="concluir" onclick="itemConcluido(${posicao})"> Concluir </button> </div>
        </div> </li> </div> ;
});


listaCompleta.innerHTML = novaLi;
}


           
        

      


       

        function itemConcluido (posicao) {

              minhaListaDeItens[posicao].concluida = !minhaListaDeItens[posicao].concluida


              

                mostrarTarefa()
               
                
                
        }
        




//2° passo
button.addEventListener('click', adicionarNovaTarefa )

