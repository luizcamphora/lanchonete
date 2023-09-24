var botoesEnviarAoCarrinho = document.querySelectorAll('.botao-enviar-ao-carrinho');
var modal = new bootstrap.Modal(document.getElementById('janelaModal'));

botoesEnviarAoCarrinho.forEach(function(botao) {
    botao.addEventListener('click', function(e) {
        e.preventDefault();
        modal.show();
        const numberInput = document.getElementById('number');
        const incrementButton = document.getElementById('increment');
        const decrementButton = document.getElementById('decrement');

        incrementButton.addEventListener('click', () => {
            // Incrementa o valor do input
            numberInput.value = parseInt(numberInput.value) + 1;
        });

        decrementButton.addEventListener('click', () => {
            // Decrementa o valor do input, mas não permite valores negativos
            numberInput.value = Math.max(parseInt(numberInput.value) - 1, 1);
        });
    });
});
