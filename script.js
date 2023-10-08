document.addEventListener('DOMContentLoaded', function () {
    // Encontrar o elemento de link
    var shareLink = document.querySelector('li a[href="#secao1"]');

    // Adicionar um ouvinte de clique ao link
    if (shareLink) {
        shareLink.addEventListener('click', function (event) {
            // Impedir o comportamento padrão de seguir o link
            event.preventDefault();

            // Redirecionar para a página desejada
            window.location.href = 'Page.html';
        });
    }
});
