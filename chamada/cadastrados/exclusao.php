<?php
// Verifica se foi recebida uma requisição POST
if ($_SERVER["REQUEST_METHOD"] == "POST") {
  // Obtém o tipo de registro a ser excluído (professor, aluno ou turma)
  $tipo = $_POST["tipo"];

  // Obtém o ID do registro a ser excluído
  $id = $_POST["id"];

  // Conecta ao banco de dados (substitua pelos dados do seu banco)
  $host = "localhost";
  $usuario = "root";
  $senha = "";
  $banco = "meu_banco";

  $conexao = mysqli_connect($host, $usuario, $senha, $banco);

  // Verifica se houve erro na conexão
  if (mysqli_connect_errno()) {
    echo "Erro ao conectar ao banco de dados: " . mysqli_connect_error();
  }

  // Prepara a consulta SQL de acordo com o tipo de registro a ser excluído
  if ($tipo == "professor") {
    $tabela = "professores";
    $campo_id = "id_professor";
  } else if ($tipo == "aluno") {
    $tabela = "alunos";
    $campo_id = "id_aluno";
  } else if ($tipo == "turma") {
    $tabela = "turmas";
    $campo_id = "id_turma";
  } else {
    echo "Tipo de registro inválido!";
    exit;
  }

  $sql = "DELETE FROM $tabela WHERE $campo_id=$id";

  // Executa a consulta SQL
  if (mysqli_query($conexao, $sql)) {
    echo "Registro excluído com sucesso!";
  } else {
    echo "Erro ao excluir registro: " . mysqli_error($conexao);
  }

  // Fecha a conexão com o banco de dados
  mysqli_close($conexao);
}
?>
