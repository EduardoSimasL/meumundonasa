document.addEventListener('DOMContentLoaded', function () {
    // Função para suavizar o scroll
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();

            document.querySelector(this.getAttribute('href')).scrollIntoView({
                behavior: 'smooth'
            });
        });
    });

    // Encontrar os elementos de link
    var shareLink = document.querySelector('li a[href="#secao1"]');
    var interactivesLink = document.querySelector('li a[href="#secao2"]');
    var learningsLink = document.querySelector('li a[href="#secao3"]');
    var specialAgenciesLink = document.querySelector('li a[href="#secao4"]'); // Novo link adicionado

    // Adicionar um ouvinte de clique ao link "Share stories with the world"
    if (shareLink) {
        shareLink.addEventListener('click', function (event) {
            event.preventDefault();
            window.location.href = 'index.html';
        });
    }

    // Adicionar um ouvinte de clique ao link "Interactive content"
    if (interactivesLink) {
        interactivesLink.addEventListener('click', function (event) {
            event.preventDefault();
            window.location.href = 'https://www.nasa.gov/interactives/';
        });
    }

    // Adicionar um ouvinte de clique ao link "Learnings"
    if (learningsLink) {
        learningsLink.addEventListener('click', function (event) {
            event.preventDefault();
            window.location.href = 'Learnings.html';
        });
    }

    // Adicionar um ouvinte de clique ao link "Space agencies"
    if (SpaceagenciesLink) {
        SpaceagenciesLink.addEventListener('click', function (event) {
            event.preventDefault();
            // Substitua 'Spaceagencies.html' pelo caminho correto do seu arquivo
            window.location.href = 'Spaceagencies.html';
        });
    }

    // Adicionar evento de clique às clickable-content
    document.querySelectorAll('.clickable-content').forEach(clickableContent => {
        clickableContent.addEventListener('click', function () {
            // Obter o link dentro da clickable-content
            const link = this.querySelector('a');

            // Verificar se o link existe e simular o clique
            if (link) {
                link.click();
            }
        });
    });
});
