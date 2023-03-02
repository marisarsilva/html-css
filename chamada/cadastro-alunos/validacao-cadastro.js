function validarCadastroAluno() {
    let matricula = document.getElementById("matricula").value;
    let nome = document.getElementById("nome").value;
    let turma_aluno = document.getElementById("turma_aluno").value;

    if (matricula.trim() == "") {
        alert("A matrícula não pode estar em branco!");
        return false;
    }

    if (nome.trim() == "") {
        alert("O nome não pode estar em branco!");
        return false;
    }

    if (turma_aluno.trim() == "") {
        alert("A turma não pode estar em branco!");
        return false;
    }

    return true;
}

function validarCadastroProfessor() {
    let nome_professor = document.getElementById("nome_professor").value;
    let turma_professor = document.getElementById("turma_professor").value;

    if (nome_professor.trim() == "") {
        alert("O nome não pode estar em branco!");
        return false;
    }

    if (turma_professor.trim() == "") {
        alert("A turma não pode estar em branco!");
        return false;
    }

    return true;
}

function validarCadastroTurma() {
    let nome_turma = document.getElementById("nome_turma").value;
    let periodo = document.getElementById("periodo").value;

    if (nome_turma.trim() == "") {
        alert("O nome da turma não pode estar em branco!");
        return false;
    }

    if (periodo.trim() == "") {
        alert("O período não pode estar em branco!");
        return false;
    }

    return true;
}
