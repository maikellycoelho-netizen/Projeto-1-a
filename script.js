/**
 * ==========================================================================
 * BANCO DE DADOS LOCAL
 * Armazena as informações de cada prática sustentável.
 * ==========================================================================
 */
const sustentabilidadeDados = {
    'ilpf': {
        title: "🌱 Integração Lavoura-Pecuária-Floresta (ILPF)",
        text: "Estratégia que combina produção agrícola, pecuária e florestal em uma mesma área. As árvores plantadas absorvem uma quantidade massiva de gás carbônico (CO₂) da atmosfera enquanto crescem, neutralizando os gases emitidos pelo gado e protegendo o solo contra a erosão.",
        badge: "Impacto Principal: Alta captura de Carbono e conservação do solo."
    },
    'plantio-direto': {
        title: "🚜 Plantio Direto na Palha",
        text: "Técnica onde o solo não é revirado antes do plantio. A semente é colocada diretamente sob os restos da colheita anterior. Isso mantém o carbono preso na terra (evitando que ele vá para a atmosfera como CO₂), economiza água e reduz drasticamente o uso de combustíveis fósseis nos tratores.",
        badge: "Impacto Principal: Evita a liberação de carbono do solo e economiza água."
    },
    'biodigestores': {
        title: "🔋 Uso de Biodigestores",
        text: "Equipamentos que reutilizam o esterco dos animais para produzir biogás e biofertilizantes. Em vez de o gás metano (CH₄) — que é muito poluente — escapar para a atmosfera, ele é capturado e transformado em energia limpa para a própria fazenda.",
        badge: "Impacto Principal: Redução extrema de emissões de Metano (CH₄)."
    },
    'pastejo': {
        title: "🐄 Pastejo Rotacionado",
        text: "O pasto é dividido em piquetes e os animais mudam de área periodicamente. Isso dá tempo para a grama se recuperar e crescer com raízes mais profundas. Raízes fortes puxam mais carbono para o solo e impedem a degradação da terra, tornando a pastagem um 'sumidouro' de poluição.",
        badge: "Impacto Principal: Recuperação de pastagens e solo fértil."
    }
};

/**
 * ==========================================================================
 * FUNÇÃO DE INTERATIVIDADE
 * Altera o conteúdo do painel lateral e gerencia a classe ativa dos botões.
 * ==========================================================================
 */
function showDetails(chavePratica) {
    // 1. Seleciona os elementos do HTML que serão atualizados
    const elementoTitulo = document.getElementById('info-title');
    const elementoTexto = document.getElementById('info-text');
    const elementoBadge = document.getElementById('info-badge');
    const painelDisplay = document.getElementById('display-container');

    // 2. Verifica se a chave existe no nosso banco de dados para evitar erros
    if (sustentabilidadeDados[chavePratica]) {
        
        // Efeito visual opcional: Suaviza a troca de conteúdo diminuindo a opacidade temporariamente
        painelDisplay.style.opacity = '0.3';

        setTimeout(() => {
            // Atualiza os textos internos com base na chave clicada
            elementoTitulo.innerText = sustentabilidadeDados[chavePratica].title;
            elementoTexto.innerText = sustentabilidadeDados[chavePratica].text;
            elementoBadge.innerText = sustentabilidadeDados[chavePratica].badge;
            
            // Restaura a opacidade
            painelDisplay.style.opacity = '1';
        }, 150);
    }

    // 3. Gerenciamento Visual dos Botões (Classe Active)
    // Remove a classe 'active' de todos os botões para que eles voltem ao estado normal
    const todosBotoes = document.querySelectorAll('.practice-btn');
    todosBotoes.forEach(botao => botao.classList.remove('active'));

    // Adiciona a classe 'active' apenas no botão que disparou o evento de clique
    if (event && event.currentTarget) {
        event.currentTarget.classList.add('active');
    }
}
