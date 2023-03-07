



// Função para limpar o formulário de cadastro de professores
function limparFormularioProfessor() {
    $("#nome-professor").val("");
    $("#email-professor").val("");
    $("#telefone-professor").val("");
    $("#horario-professor").val("");
}

// Função para limpar o formulário de cadastro de turmas
function limparFormularioTurma() {
    $("#nome-turma").val("");
    $("#periodo-turma").val("");
}

// Função para adicionar novo professor
function adicionarProfessor() {
    // Captura os valores dos campos do formulário
    var nome = $("#nome-professor").val();
    var email = $("#email-professor").val();
    var telefone = $("#telefone-professor").val();
    var horario = $("#horario-professor").val();

    // Valida se todos os campos foram preenchidos
    if (nome == "" || email == "" || telefone == "" || horario == "") {
        alert("Por favor, preencha todos os campos do formulário!");
        return;
    }

    // Cria o novo elemento de professor
    var novoProfessor = "<tr>" +
        "<td>" + nome + "</td>" +
        "<td>" + email + "</td>" +
        "<td>" + telefone + "</td>" +
        "<td>" + horario + "</td>" +
        "</tr>";

    // Adiciona o novo elemento na tabela de professores
    $("#tabela-professores").append(novoProfessor);

    // Limpa o formulário
    limparFormularioProfessor();

    // Exibe mensagem de sucesso
    alert("Professor adicionado com sucesso!");
}



Quero fazer um site com o nome "gerenciador de turmas"
Que tenha na página inicial um menu "página inicial".
Que tenha na página inicial um menu dropdown"cadastro" e submenu" Aluno, Professor, Turma".
Que tenha na página inicial um menu dropdown"cadastrados" e submenu" Aluno cadastrado(s), Professor(e)s cadastrados, Turma(s) cadastradas".
Que tenha na página inicial um menu "sobre".
Que tenha na página inicial um rodapé com as informações de "copyriting", "meu nome é Marisa Rodrigues da Silva, meu link para o github é marisarsilva, aplique o link ao meu nome.
Me forneça o HTML desse site.
Me forneça o CSS desse site com cores neutras.