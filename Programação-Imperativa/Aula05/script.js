/*
            Alerts
            Documentação: https://developer.mozilla.org/pt-BR/docs/Web/API/Window/alert

            alert(texto|valor);

            Prompts
            Documentação: https://developer.mozilla.org/pt-BR/docs/Web/API/Window/prompt

            prompt(texto, valor);

            Confirm
            Documentação: https://developer.mozilla.org/pt-BR/docs/Web/API/Window/confirm

             
            Lidando com tempo
            Documentação: https://developer.mozilla.org/pt-BR/docs/Learn/JavaScript/Asynchronous/Timeouts_and_intervals

            confirm(mensagem);
        */
       
        // 1. Guarda o nome do usuário.
        function cotarDolar(nomeDoUsuario, quantidadeDolares) {
        var cotacaoDolarHoje = 5.3;
        var saudar = ""       
        // 4. Apresenta o resultado.
        // var saudar = alert('Olá' + ' ' + nomeDoUsuario + 'US$' + ' ' + quantidadeDolares + ' ' + 'valem' + ' ' + 'R$' + ' ' + quantidadeDolares *cotacaoDolarHoje + ' ' + 'hoje.');
        // Código melhorado...
        if (confirm("O Valor informado é de " + quantidadeDolares + ". Confirma?")) {
            return saudar = alert(`Olá ${nomeDoUsuario}. US$ ${parseFloat(quantidadeDolares).toFixed(2)} valem R$ ${(quantidadeDolares * cotacaoDolarHoje).toFixed(2)} hoje.`)
        } else {
            cotarDolar(nomeDoUsuario, prompt('Quantos dólares ele gostaria de cotar?')) }
        }

        cotarDolar(prompt('Qual o seu nome?'), prompt('Quantos dólares ele gostaria de cotar?'))