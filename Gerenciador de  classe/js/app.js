$(document).ready(function () {
    // Configuração da API de armazenamento
    const apiUrl = "https://api.jsonbin.io/b/604a5d5fa1bde54a5bf10405";
    const headers = {
        "secret-key": "$2b$10$7QW/xDe8T3wqT3zweKvJY.i0vhwhm0OruxR9I9oJChsEaFD0oATwO",
    };

    // Função para validar o formulário de cadastro de professores
    function validarFormularioProfessor() {
        const nome = $("#nome-professor").val();
        const email = $("#email-professor").val();
        const horario = $("#horario-professor").val();

        // Verifica se todos os campos foram preenchidos
        if (nome === "" || email === "" || horario === "") {
            alert("Por favor, preencha todos os campos.");
            return false;
        }

        // Verifica se o horário está no formato correto
        if (!/^([01]\d|2[0-3]):([0-5]\d)$/.test(horario)) {
            alert("Por favor, preencha o horário no formato HH:MM.");
            return false;
        }

        // Verifica se o horário está dentro do intervalo permitido
        const hora = parseInt(horario.split(":")[0]);
        if (hora < 6 || hora >= 20) {
            alert("Por favor, preencha um horário entre 06:00 e 20:00.");
            return false;
        }

        return true;
    }

    // Função para validar o formulário de cadastro de alunos
    function validarFormularioAluno() {
        const nome = $("#nome-aluno").val();
        const email = $("#email-aluno").val();
        const turma = $("#turma-aluno").val();

        // Verifica se todos os campos foram preenchidos
        if (nome === "" || email === "" || turma === "") {
            alert("Por favor, preencha todos os campos.");
            return false;
        }

        return true;
    }

    // Função para validar o formulário de cadastro de turmas
    function validarFormularioTurma() {
        const nome = $("#nome-turma").val();
        const descricao = $("#descricao-turma").val();

        // Verifica se todos os campos foram preenchidos
        if (nome === "" || descricao === "") {
            alert("Por favor, preencha todos os campos.");
            return false;
        }

        return true;
    }

    // Função para validar o formulário de cadastro de atividades
    function validarFormularioAtividade() {
        const nome = $("#nome-atividade").val();
        const descricao = $("#descricao-atividade").val();
        const data = $("#data-atividade").val();

        // Verifica se todos os campos foram preenchidos
        if (nome === "" || descricao === "" || data === "") {
            alert("Por favor, preencha todos os campos.");
            return false;
        }

        return true;
    }

    // Função para limpar o formulário de cadastro de professores
    function limparFormularioProfessor() {
        $("#nome-professor").val("");
        $("#horario-professor").val("");
        $("#disciplina-professor").val("");
    }

    // Evento de clique no botão de cadastrar professor
    $("#btn-cadastrar-professor").click(function () {
        // Validar o formulário de cadastro de professores
        if (validarFormularioProfessor()) {
            // Criar um objeto com os dados do professor
            let professor = {
                nome: $("#nome-professor").val(),
                horario: $("#horario-professor").val(),
                disciplina: $("#disciplina-professor").val()
            };

            // Adicionar o professor à lista de professores
            professores.push(professor);

            // Limpar o formulário de cadastro de professores
            limparFormularioProfessor();

            // Exibir mensagem de sucesso
            exibirMensagem("success", "Professor cadastrado com sucesso!");
        }
    });

    // Função para validar o formulário de cadastro de professores
    function validarFormularioProfessor() {
        // Verificar se o nome do professor foi preenchido
        if ($("#nome-professor").val() === "") {
            exibirMensagem("error", "O nome do professor é obrigatório.");
            return false;
        }

        // Verificar se o horário do professor foi selecionado
        if ($("#horario-professor").val() === "") {
            exibirMensagem("error", "O horário do professor é obrigatório.");
            return false;
        }

        // Verificar se a disciplina do professor foi selecionada
        if ($("#disciplina-professor").val() === "") {
            exibirMensagem("error", "A disciplina do professor é obrigatória.");
            return false;
        }

        // Se todas as validações passaram, retornar true
        return true;
        
    }
}


// Função para limpar o formulário de cadastro de professores
function limparFormularioProfessor() {
        $("#nome-professor").val("");
        $("#email-professor").val("");
        $("#telefone-professor").val("");
        $("#horario-professor-hora").val("");
        $("#horario-professor-minutos").val("");
        $("#periodo-professor").val("");
    }

// Função para enviar os dados do formulário de cadastro de professores
$("#form-cadastrar-professor").submit(function (event) {
        event.preventDefault();
        var nome = $("#nome-professor").val();
        var email = $("#email-professor").val();
        var telefone = $("#telefone-professor").val();
        var horario = $("#horario-professor-hora").val() + ":" + $("#horario-professor-minutos").val();
        var periodo = $("#periodo-professor").val();

        // Validar campos obrigatórios
        if (nome == "" || email == "" || telefone == "" || horario == "" || periodo == "") {
            alert("Por favor, preencha todos os campos obrigatórios.");
            return false;
        }

        // Validar formato do email
        var re = /\S+@\S+\.\S+/;
        if (!re.test(email)) {
            alert("Por favor, insira um email válido.");
            return false;
        }

        // Validar horário
        if (horario < "06:00" || horario > "20:00") {
            alert("Por favor, insira um horário válido (entre 06:00 e 20:00).");
            return false;
        }

        // Enviar dados para o servidor
        $.post("cadastrar-professor.php", {
            nome: nome,
            email: email,
            telefone: telefone,
            horario: horario,
            periodo: periodo
        }, function (data) {
            alert("Professor cadastrado com sucesso!");
            limparFormularioProfessor();
        });

    });
