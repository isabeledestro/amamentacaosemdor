document.getElementById('formulario').addEventListener('submit', function(event) {
    event.preventDefault();

    // Coletando os dados do formulário
    const nome = document.getElementById('nome-completo').value;
    const contato = document.getElementById('contato').value;
    const email = document.getElementById('email').value;

    // Criando o objeto de dados para enviar
    const dados = {
        nome: nome,
        contato: contato,
        email: email
    };

    // Enviar os dados para o Webhook do Zapier (ou outro serviço)
    fetch('https://hooks.zapier.com/hooks/catch/22673288/2p4rfix/', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify(dados)
    })
    .then(response => response.json())
    .then(data => {
        console.log('Dados enviados com sucesso:', data);
        // Aqui você pode fazer algo como redirecionar ou exibir uma mensagem de sucesso
    })
    .catch((error) => {
        console.error('Erro ao enviar os dados:', error);
    });
});