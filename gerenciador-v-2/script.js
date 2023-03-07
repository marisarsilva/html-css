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
