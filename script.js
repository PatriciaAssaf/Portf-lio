// Função para validar o formulário de contato
document.querySelector('.contato__formulario').addEventListener('submit', function(event) {
    const nome = document.querySelector('input[type="text"]').value;
    const email = document.querySelector('input[type="email"]').value;
    const mensagem = document.querySelector('textarea').value;

    if (!nome || !email || !mensagem) {
        event.preventDefault();
        alert('Por favor, preencha todos os campos!');
    } else {
        alert('Formulário enviado com sucesso!');
    }
});
