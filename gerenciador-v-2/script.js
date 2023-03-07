// Adiciona um ouvinte de eventos para quando a página carregar
window.addEventListener('load', () => {
    // Adiciona um ouvinte de eventos para quando a barra de navegação for clicada
    document.querySelector('nav ul').addEventListener('click', (event) => {
        // Verifica se o elemento clicado é um link da barra de navegação
        if (event.target.tagName === 'A') {
            // Previne o comportamento padrão do link
            event.preventDefault();

            // Obtém o caminho do link clicado
            const path = event.target.getAttribute('href');

            // Navega para o caminho correspondente usando o roteador do Angular
            router.navigate([path]);
        }
    });
});

// Define as rotas do site
const routes = [
    { path: 'professores', component: ProfessoresComponent },
    { path: 'alunos', component: AlunosComponent },
    { path: 'turmas', component: TurmasComponent },
    { path: '**', component: NotFoundComponent }
];

// Cria o roteador do Angular com as rotas definidas acima
const router = new Router(routes);

// Inicia o roteador do Angular
router.init();

// Função para buscar e renderizar o componente "turma-form"
async function renderTurmaForm() {
    const turmaForm = document.querySelector('turma-form');
  
    // Faz uma requisição para buscar o conteúdo do arquivo "turma-form.html"
    const response = await fetch('components/turma-form.html');
    const html = await response.text();
  
    // Define o conteúdo do componente "turma-form" como o HTML do arquivo "turma-form.html"
    turmaForm.innerHTML = html;
  }
  
  // Chama a função para renderizar o componente "turma-form"
  renderTurmaForm();
  
