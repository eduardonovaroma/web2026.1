const botao = document.querySelector('#botaoTexto');

botao.addEventListener('click', function() {
    
    const titulo = document.querySelector('h1');
    titulo.textContent = 'Texto alterado com Javascript';
    titulo.style.color = 'red';
    
});

const titulo = document.querySelector('h1');

titulo.addEventListener('mouseover', function() {
    titulo.classList.remove('textoPadrao');
    titulo.classList.add('textoAzul');
});

titulo.addEventListener('mouseout', function() {
    titulo.classList.remove('textoAzul');
    titulo.classList.add('textoPadrao');
});

const botaoDados = document.querySelector('#botaoDados');
const caixa = document.querySelector('#caixa');

botaoDados.addEventListener('click', function() {
    // Buscar dados
    fetch('https://jsonplaceholder.typicode.com/users/1')
        .then(response => {
            // Verificar se a resposta foi bem-sucedida
            if (!response.ok) {
                throw new Error('Erro na requisição');
            }
            return response.json();
        })
        .then(data => {
            console.log(data);
            caixa.textContent = `Nome: ${data.name}, Email: ${data.email}`;
        })
        .catch(error => {
            console.error('Erro:', error);
        });
});
