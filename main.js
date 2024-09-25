$(document).ready(function(){
    // Previne o comportamento padrão de recarregar a página ao enviar o formulário
    $('#task-form').on('submit', function(e) {
        e.preventDefault();

        // Obtém o valor do input
        const taskText = $('#atividade').val().trim();

        // Verifica se o input não está vazio
        if (taskText !== "") {
            // Cria um novo elemento <li> com a atividade
            const newTask = $('<li></li>').text(taskText);

            // Adiciona a classe "task" ao <p>
            newTask.addClass('task');

            // Função para riscar o texto ao clicar
            newTask.on('click', function() {
                $(this).toggleClass('completed');
            });

            // Adiciona a nova tarefa ao div #message
            $('#task-list').append(newTask);

            // Limpa o input
            $('#atividade').val('');
        }
    });
});
