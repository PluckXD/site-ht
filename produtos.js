document.addEventListener('DOMContentLoaded', function() {
    // Inicialização das funcionalidades
    initProdutos();
    initFiltros();
    initBusca();
    initCategorias();
    initModal();
    initNewsletterForm();
    initSmoothScroll();
    initScrollAnimations();
});

// Base de dados dos produtos
const produtosData = [
    // Bombas
    {
        id: 1,
        nome: "Bomba Vickers V20",
        categoria: "bombas",
        marca: "Vickers",
        descricao: "Bomba de palhetas de alta performance para aplicações industriais",
        especificacoes: ["Pressão máxima: 175 bar", "Vazão: 10-25 L/min", "Rotação: 1800 rpm", "Fluido: Óleo hidráulico"],
        imagem: "img/produtos/bomba-vickers-v20.jpg"
    },
    {
        id: 2,
        nome: "Bomba Danfoss Série L",
        categoria: "bombas",
        marca: "Danfoss",
        descricao: "Bomba de pistões axiais com controle de vazão variável",
        especificacoes: ["Pressão máxima: 280 bar", "Vazão: 25-30 L/min", "Controle: Servo", "Aplicação: Industrial"],
        imagem: "img/produtos/bomba-danfoss-l.jpg"
    },
    {
        id: 3,
        nome: "Bomba Hidraultec ENGR S10",
        categoria: "bombas",
        marca: "Hidraultec",
        descricao: "Bomba de engrenagem externa para aplicações de média pressão",
        especificacoes: ["Pressão máxima: 200 bar", "Vazão: 10-15 L/min", "Material: Ferro fundido", "Vedação: NBR"],
        imagem: "img/produtos/bomba-hidraultec-s10.jpg"
    },
    
    // Cilindros
    {
        id: 4,
        nome: "Cilindro Vickers TV",
        categoria: "cilindros",
        marca: "Vickers",
        descricao: "Cilindro hidráulico de dupla ação para trabalho pesado",
        especificacoes: ["Pressão máxima: 210 bar", "Diâmetro: 32-200 mm", "Curso: Sob consulta", "Vedação: Polypack"],
        imagem: "img/produtos/cilindro-vickers-tv.jpg"
    },
    {
        id: 5,
        nome: "Cilindro Rexroth CDT3",
        categoria: "cilindros",
        marca: "Rexroth",
        descricao: "Cilindro compacto para aplicações de automação",
        especificacoes: ["Pressão máxima: 160 bar", "Diâmetro: 25-100 mm", "Montagem: ISO 6432", "Material: Alumínio"],
        imagem: "img/produtos/cilindro-rexroth-cdt3.jpg"
    },
    {
        id: 6,
        nome: "Cilindro Especial Quadrado",
        categoria: "cilindros",
        marca: "Hidraultec",
        descricao: "Cilindro de perfil quadrado para aplicações especiais",
        especificacoes: ["Pressão máxima: 180 bar", "Perfil: Quadrado", "Guias: Integradas", "Personalizado: Sim"],
        imagem: "img/produtos/cilindro-quadrado.jpg"
    },
    
    // Válvulas
    {
        id: 7,
        nome: "Válvula Direcional Vickers TN06",
        categoria: "valvulas",
        marca: "Vickers",
        descricao: "Válvula direcional 4/3 vias com comando elétrico",
        especificacoes: ["Pressão máxima: 315 bar", "Vazão: 60 L/min", "Tensão: 24V DC", "Conexão: NG6"],
        imagem: "img/produtos/valvula-vickers-tn06.jpg"
    },
    {
        id: 8,
        nome: "Válvula de Pressão CT06",
        categoria: "valvulas",
        marca: "Vickers",
        descricao: "Válvula limitadora de pressão com ajuste externo",
        especificacoes: ["Pressão: 50-315 bar", "Vazão: 60 L/min", "Ajuste: Manual", "Conexão: NG6"],
        imagem: "img/produtos/valvula-pressao-ct06.jpg"
    },
    {
        id: 9,
        nome: "Válvula Modular DGMFN",
        categoria: "valvulas",
        marca: "Vickers",
        descricao: "Válvula modular para montagem em bloco",
        especificacoes: ["Pressão máxima: 315 bar", "Vazão: 100 L/min", "Montagem: Modular", "Comando: Piloto"],
        imagem: "img/produtos/valvula-modular-dgmfn.jpg"
    },
    
    // Filtros
    {
        id: 10,
        nome: "Filtro de Ar BE761",
        categoria: "filtros",
        marca: "Vickers",
        descricao: "Filtro respirador para tanques hidráulicos",
        especificacoes: ["Filtragem: 10 microns", "Vazão: 100 L/min", "Material: Alumínio", "Vedação: Viton"],
        imagem: "img/produtos/filtro-ar-be761.jpg"
    },
    {
        id: 11,
        nome: "Filtro de Retorno",
        categoria: "filtros",
        marca: "Hidraultec",
        descricao: "Filtro de linha de retorno com indicador visual",
        especificacoes: ["Filtragem: 25 microns", "Vazão: 200 L/min", "Indicador: Visual", "Bypass: Automático"],
        imagem: "img/produtos/filtro-retorno.jpg"
    },
    {
        id: 12,
        nome: "Filtro de Sucção",
        categoria: "filtros",
        marca: "Hidraultec",
        descricao: "Filtro de sucção para proteção da bomba",
        especificacoes: ["Filtragem: 100 microns", "Material: Inox", "Conexão: Flangeada", "Limpeza: Lavável"],
        imagem: "img/produtos/filtro-succao.jpg"
    },
    
    // Acessórios
    {
        id: 13,
        nome: "Acoplamento Flexível",
        categoria: "acessorios",
        marca: "Hidraultec",
        descricao: "Acoplamento para conexão bomba-motor",
        especificacoes: ["Torque: 500 Nm", "Desalinhamento: ±2°", "Material: Aço", "Borracha: NBR"],
        imagem: "img/produtos/acoplamento-flexivel.jpg"
    },
    {
        id: 14,
        nome: "Trocador de Calor Ar-Óleo",
        categoria: "acessorios",
        marca: "Hidraultec",
        descricao: "Resfriador de óleo hidráulico a ar forçado",
        especificacoes: ["Potência: 50 kW", "Vazão: 100 L/min", "Ventilador: 24V", "Material: Alumínio"],
        imagem: "img/produtos/trocador-ar-oleo.jpg"
    },
    {
        id: 15,
        nome: "Manômetro Vertical",
        categoria: "acessorios",
        marca: "Hidraultec",
        descricao: "Manômetro para medição de pressão hidráulica",
        especificacoes: ["Escala: 0-400 bar", "Diâmetro: 100 mm", "Conexão: 1/4 BSP", "Glicerina: Sim"],
        imagem: "img/produtos/manometro-vertical.jpg"
    },
    
    // Produtos adicionais para demonstração
    {
        id: 16,
        nome: "Bomba Vickers PVQ",
        categoria: "bombas",
        marca: "Vickers",
        descricao: "Bomba de palhetas de alta eficiência energética",
        especificacoes: ["Pressão máxima: 210 bar", "Vazão: 13-45 L/min", "Eficiência: 90%", "Ruído: Baixo"],
        imagem: "img/produtos/bomba-vickers-pvq.jpg"
    },
    {
        id: 17,
        nome: "Cilindro MOBIL CDL1",
        categoria: "cilindros",
        marca: "MOBIL",
        descricao: "Cilindro leve para automação móbil",
        especificacoes: ["Pressão máxima: 140 bar", "Peso: Reduzido", "Montagem: Múltipla", "Vedação: PU"],
        imagem: "img/produtos/cilindro-mobil-cdl1.jpg"
    },
    {
        id: 18,
        nome: "Válvula Proporcional",
        categoria: "valvulas",
        marca: "Vickers",
        descricao: "Válvula proporcional para controle preciso",
        especificacoes: ["Controle: Proporcional", "Sinal: 4-20mA", "Resposta: 50ms", "Precisão: ±1%"],
        imagem: "img/produtos/valvula-proporcional.jpg"
    }
];

// Variáveis globais
let produtosFiltrados = [...produtosData];
let categoriaAtiva = 'todos';
let termoBusca = '';

// Função principal de inicialização dos produtos
function initProdutos() {
    renderizarProdutos(produtosData);
    atualizarContadorResultados();
}

// Função para renderizar produtos no grid
function renderizarProdutos(produtos) {
    const grid = document.getElementById('produtosGrid');
    const loading = document.getElementById('loading');
    const noResults = document.getElementById('noResults');
    
    // Mostrar loading
    loading.style.display = 'flex';
    grid.innerHTML = '';
    noResults.style.display = 'none';
    
    // Simular delay de carregamento
    setTimeout(() => {
        loading.style.display = 'none';
        
        if (produtos.length === 0) {
            noResults.style.display = 'block';
            return;
        }
        
        produtos.forEach(produto => {
            const produtoCard = criarCardProduto(produto);
            grid.appendChild(produtoCard);
        });
        
        // Animar entrada dos cards
        animarEntradaCards();
    }, 500);
}

// Função para criar card de produto
function criarCardProduto(produto) {
    const card = document.createElement('div');
    card.className = 'produto-card';
    card.dataset.produtoId = produto.id;
    
    card.innerHTML = `
        <div class="produto-image">
            <img src="${produto.imagem}" alt="${produto.nome}" onerror="this.style.display='none'; this.nextElementSibling.style.display='flex';">
            <div class="placeholder-icon" style="display: none;">
                <i class="fas fa-cog"></i>
            </div>
        </div>
        <div class="produto-info">
            <div class="produto-categoria">${produto.categoria}</div>
            <h3 class="produto-titulo">${produto.nome}</h3>
            <div class="produto-marca">${produto.marca}</div>
            <p class="produto-descricao">${produto.descricao}</p>
            <div class="produto-actions">
                <button class="btn-detalhes" onclick="abrirModal(${produto.id})">
                    Ver Detalhes
                </button>
                <button class="btn-orcamento-card" onclick="solicitarOrcamento(${produto.id})">
                    <i class="fas fa-calculator"></i>
                </button>
            </div>
        </div>
    `;
    
    return card;
}

// Função para animar entrada dos cards
function animarEntradaCards() {
    const cards = document.querySelectorAll('.produto-card');
    
    cards.forEach((card, index) => {
        card.style.opacity = '0';
        card.style.transform = 'translateY(30px)';
        
        setTimeout(() => {
            card.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
            card.style.opacity = '1';
            card.style.transform = 'translateY(0)';
        }, index * 100);
    });
}

// Função para inicializar filtros
function initFiltros() {
    const filtrosBtns = document.querySelectorAll('.filtro-btn');
    
    filtrosBtns.forEach(btn => {
        btn.addEventListener('click', function() {
            // Remover classe active de todos os botões
            filtrosBtns.forEach(b => b.classList.remove('active'));
            
            // Adicionar classe active ao botão clicado
            this.classList.add('active');
            
            // Aplicar filtro
            categoriaAtiva = this.dataset.categoria;
            aplicarFiltros();
        });
    });
    
    // Ordenação
    const selectOrdenacao = document.getElementById('ordenacao');
    selectOrdenacao.addEventListener('change', function() {
        ordenarProdutos(this.value);
    });
}

// Função para inicializar busca
function initBusca() {
    const searchInput = document.getElementById('searchInput');
    const searchBtn = document.getElementById('searchBtn');
    
    // Busca em tempo real
    searchInput.addEventListener('input', function() {
        termoBusca = this.value.toLowerCase();
        aplicarFiltros();
    });
    
    // Busca ao clicar no botão
    searchBtn.addEventListener('click', function() {
        termoBusca = searchInput.value.toLowerCase();
        aplicarFiltros();
    });
    
    // Busca ao pressionar Enter
    searchInput.addEventListener('keypress', function(e) {
        if (e.key === 'Enter') {
            termoBusca = this.value.toLowerCase();
            aplicarFiltros();
        }
    });
}

// Função para aplicar filtros
function aplicarFiltros() {
    let produtosFiltrados = [...produtosData];
    
    // Filtrar por categoria
    if (categoriaAtiva !== 'todos') {
        produtosFiltrados = produtosFiltrados.filter(produto => 
            produto.categoria === categoriaAtiva
        );
    }
    
    // Filtrar por termo de busca
    if (termoBusca) {
        produtosFiltrados = produtosFiltrados.filter(produto =>
            produto.nome.toLowerCase().includes(termoBusca) ||
            produto.marca.toLowerCase().includes(termoBusca) ||
            produto.descricao.toLowerCase().includes(termoBusca) ||
            produto.categoria.toLowerCase().includes(termoBusca)
        );
    }
    
    // Renderizar produtos filtrados
    renderizarProdutos(produtosFiltrados);
    atualizarContadorResultados(produtosFiltrados.length);
}

// Função para ordenar produtos
function ordenarProdutos(criterio) {
    const grid = document.getElementById('produtosGrid');
    const cards = Array.from(grid.children);
    
    cards.sort((a, b) => {
        const produtoA = produtosData.find(p => p.id == a.dataset.produtoId);
        const produtoB = produtosData.find(p => p.id == b.dataset.produtoId);
        
        switch (criterio) {
            case 'nome':
                return produtoA.nome.localeCompare(produtoB.nome);
            case 'categoria':
                return produtoA.categoria.localeCompare(produtoB.categoria);
            case 'marca':
                return produtoA.marca.localeCompare(produtoB.marca);
            default:
                return 0;
        }
    });
    
    // Reordenar no DOM
    cards.forEach(card => grid.appendChild(card));
}

// Função para atualizar contador de resultados
function atualizarContadorResultados(count = produtosData.length) {
    const contador = document.getElementById('resultadosCount');
    
    if (count === produtosData.length) {
        contador.textContent = 'Mostrando todos os produtos';
    } else {
        contador.textContent = `Mostrando ${count} produto${count !== 1 ? 's' : ''}`;
    }
}

// Função para inicializar categorias sidebar
function initCategorias() {
    const categoriaHeaders = document.querySelectorAll('.categoria-header');
    const sidebarToggle = document.getElementById('sidebarToggle');
    const sidebar = document.querySelector('.categorias-sidebar');
    
    // Toggle das categorias
    categoriaHeaders.forEach(header => {
        header.addEventListener('click', function() {
            const categoriaItem = this.parentElement;
            const isActive = categoriaItem.classList.contains('active');
            
            // Fechar todas as categorias
            document.querySelectorAll('.categoria-item').forEach(item => {
                item.classList.remove('active');
            });
            
            // Abrir a categoria clicada se não estava ativa
            if (!isActive) {
                categoriaItem.classList.add('active');
            }
            
            // Aplicar filtro se não for apenas toggle visual
            const categoria = this.dataset.categoria;
            if (categoria) {
                // Atualizar botões de filtro rápido
                document.querySelectorAll('.filtro-btn').forEach(btn => {
                    btn.classList.remove('active');
                    if (btn.dataset.categoria === categoria) {
                        btn.classList.add('active');
                    }
                });
                
                categoriaAtiva = categoria;
                aplicarFiltros();
            }
        });
    });
    
    // Toggle mobile da sidebar
    sidebarToggle.addEventListener('click', function() {
        sidebar.classList.toggle('mobile-open');
    });
}

// Função para inicializar modal
function initModal() {
    const modalOverlay = document.getElementById('modalOverlay');
    const modalClose = document.getElementById('modalClose');
    
    // Fechar modal
    modalClose.addEventListener('click', fecharModal);
    modalOverlay.addEventListener('click', function(e) {
        if (e.target === modalOverlay) {
            fecharModal();
        }
    });
    
    // Fechar modal com ESC
    document.addEventListener('keydown', function(e) {
        if (e.key === 'Escape' && modalOverlay.classList.contains('active')) {
            fecharModal();
        }
    });
}

// Função para abrir modal
function abrirModal(produtoId) {
    const produto = produtosData.find(p => p.id === produtoId);
    if (!produto) return;
    
    const modal = document.getElementById('modalOverlay');
    const modalImg = document.getElementById('modalImg');
    const modalTitulo = document.getElementById('modalTitulo');
    const modalCategoria = document.getElementById('modalCategoria');
    const modalMarca = document.getElementById('modalMarca');
    const modalDescricao = document.getElementById('modalDescricao');
    const modalEspecificacoes = document.getElementById('modalEspecificacoes');
    
    // Preencher dados do modal
    modalImg.src = produto.imagem;
    modalImg.alt = produto.nome;
    modalTitulo.textContent = produto.nome;
    modalCategoria.textContent = produto.categoria;
    modalMarca.textContent = produto.marca;
    modalDescricao.textContent = produto.descricao;
    
    // Especificações
    modalEspecificacoes.innerHTML = `
        <h4>Especificações Técnicas</h4>
        <ul>
            ${produto.especificacoes.map(spec => `<li>${spec}</li>`).join('')}
        </ul>
    `;
    
    // Configurar botões de ação
    const btnOrcamento = modal.querySelector('.btn-orcamento');
    const btnWhatsapp = modal.querySelector('.btn-whatsapp');
    
    btnOrcamento.onclick = () => solicitarOrcamento(produtoId);
    btnWhatsapp.onclick = () => contatarWhatsApp(produto);
    
    // Mostrar modal
    modal.classList.add('active');
    document.body.style.overflow = 'hidden';
}

// Função para fechar modal
function fecharModal() {
    const modal = document.getElementById('modalOverlay');
    modal.classList.remove('active');
    document.body.style.overflow = '';
}

// Função para solicitar orçamento
function solicitarOrcamento(produtoId) {
    const produto = produtosData.find(p => p.id === produtoId);
    if (!produto) return;
    
    // Redirecionar para página de contato com parâmetros
    const params = new URLSearchParams({
        produto: produto.nome,
        categoria: produto.categoria,
        marca: produto.marca
    });
    
    window.location.href = `contato.html?${params.toString()}`;
}

// Função para contatar via WhatsApp
function contatarWhatsApp(produto) {
    const mensagem = `Olá! Gostaria de mais informações sobre o produto: ${produto.nome} (${produto.marca})`;
    const url = `https://wa.me/554734667777?text=${encodeURIComponent(mensagem)}`;
    window.open(url, '_blank');
}

// Função para smooth scroll
function initSmoothScroll() {
    const links = document.querySelectorAll('a[href^="#"]');
    
    links.forEach(link => {
        link.addEventListener('click', function(e) {
            const href = this.getAttribute('href');
            
            if (href === '#') return;
            
            const target = document.querySelector(href);
            
            if (target) {
                e.preventDefault();
                
                const headerHeight = document.querySelector('.header').offsetHeight;
                const filtrosHeight = document.querySelector('.filtros-section').offsetHeight;
                const targetPosition = target.offsetTop - headerHeight - filtrosHeight - 20;
                
                window.scrollTo({
                    top: targetPosition,
                    behavior: 'smooth'
                });
            }
        });
    });
}

// Função para animações ao scroll
function initScrollAnimations() {
    const observerOptions = {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px'
    };
    
    const observer = new IntersectionObserver(function(entries) {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('animate-in');
            }
        });
    }, observerOptions);
    
    // Observa elementos que devem ser animados
    const animatedElements = document.querySelectorAll(
        '.filtros-section, .categorias-sidebar, .cta-produtos'
    );
    
    animatedElements.forEach(el => {
        observer.observe(el);
    });
    
    // Adiciona classes CSS para animações
    const style = document.createElement('style');
    style.textContent = `
        .filtros-section,
        .categorias-sidebar,
        .cta-produtos {
            opacity: 0;
            transform: translateY(30px);
            transition: opacity 0.6s ease, transform 0.6s ease;
        }
        
        .filtros-section.animate-in,
        .categorias-sidebar.animate-in,
        .cta-produtos.animate-in {
            opacity: 1;
            transform: translateY(0);
        }
        
        .categorias-sidebar.animate-in {
            transition-delay: 0.2s;
        }
    `;
    document.head.appendChild(style);
}

// Função para o formulário de newsletter
function initNewsletterForm() {
    const newsletterForm = document.querySelector('.newsletter form');
    
    if (newsletterForm) {
        newsletterForm.addEventListener('submit', function(e) {
            e.preventDefault();
            
            const nameInput = this.querySelector('input[type="text"]');
            const emailInput = this.querySelector('input[type="email"]');
            const submitButton = this.querySelector('button');
            
            // Validação básica
            if (!nameInput.value.trim()) {
                showMessage('Por favor, digite seu nome.', 'error');
                nameInput.focus();
                return;
            }
            
            if (!emailInput.value.trim() || !isValidEmail(emailInput.value)) {
                showMessage('Por favor, digite um e-mail válido.', 'error');
                emailInput.focus();
                return;
            }
            
            // Simula envio
            submitButton.textContent = 'ENVIANDO...';
            submitButton.disabled = true;
            
            setTimeout(() => {
                showMessage('Obrigado! Você foi inscrito em nossa newsletter.', 'success');
                nameInput.value = '';
                emailInput.value = '';
                submitButton.textContent = 'ENVIAR';
                submitButton.disabled = false;
            }, 2000);
        });
    }
}

// Função para validar e-mail
function isValidEmail(email) {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
}

// Função para mostrar mensagens
function showMessage(message, type) {
    // Remove mensagem anterior se existir
    const existingMessage = document.querySelector('.toast-message');
    if (existingMessage) {
        existingMessage.remove();
    }
    
    // Cria nova mensagem
    const messageDiv = document.createElement('div');
    messageDiv.className = `toast-message ${type}`;
    messageDiv.innerHTML = `
        <div class="toast-content">
            <i class="fas ${type === 'success' ? 'fa-check-circle' : 'fa-exclamation-circle'}"></i>
            <span>${message}</span>
        </div>
        <button class="toast-close">
            <i class="fas fa-times"></i>
        </button>
    `;
    
    // Estilos da mensagem
    messageDiv.style.cssText = `
        position: fixed;
        top: 20px;
        right: 20px;
        padding: 20px;
        border-radius: 12px;
        color: white;
        font-weight: 600;
        z-index: 1001;
        animation: slideIn 0.3s ease;
        max-width: 400px;
        box-shadow: 0 8px 25px rgba(0, 0, 0, 0.2);
        ${type === 'success' ? 'background: linear-gradient(135deg, #25d366, #20b954);' : 'background: linear-gradient(135deg, #e74c3c, #c0392b);'}
    `;
    
    // Estilo do conteúdo
    const toastContent = messageDiv.querySelector('.toast-content');
    toastContent.style.cssText = `
        display: flex;
        align-items: center;
        gap: 10px;
        margin-bottom: 10px;
    `;
    
    // Estilo do botão fechar
    const closeButton = messageDiv.querySelector('.toast-close');
    closeButton.style.cssText = `
        background: none;
        border: none;
        color: white;
        cursor: pointer;
        padding: 5px;
        border-radius: 4px;
        transition: background 0.3s ease;
        position: absolute;
        top: 10px;
        right: 10px;
    `;
    
    closeButton.addEventListener('click', function() {
        messageDiv.style.animation = 'slideOut 0.3s ease';
        setTimeout(() => {
            if (messageDiv.parentNode) {
                messageDiv.remove();
            }
        }, 300);
    });
    
    document.body.appendChild(messageDiv);
    
    // Remove a mensagem após 5 segundos
    setTimeout(() => {
        if (messageDiv.parentNode) {
            messageDiv.style.animation = 'slideOut 0.3s ease';
            setTimeout(() => {
                if (messageDiv.parentNode) {
                    messageDiv.remove();
                }
            }, 300);
        }
    }, 5000);
    
    // Adiciona animações CSS se não existirem
    if (!document.querySelector('#toast-animations')) {
        const style = document.createElement('style');
        style.id = 'toast-animations';
        style.textContent = `
            @keyframes slideIn {
                from {
                    transform: translateX(100%);
                    opacity: 0;
                }
                to {
                    transform: translateX(0);
                    opacity: 1;
                }
            }
            
            @keyframes slideOut {
                from {
                    transform: translateX(0);
                    opacity: 1;
                }
                to {
                    transform: translateX(100%);
                    opacity: 0;
                }
            }
        `;
        document.head.appendChild(style);
    }
}

// Função para lazy loading de imagens
function initLazyLoading() {
    const images = document.querySelectorAll('img[data-src]');
    
    const imageObserver = new IntersectionObserver(function(entries) {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                const img = entry.target;
                img.src = img.getAttribute('data-src');
                img.removeAttribute('data-src');
                imageObserver.unobserve(img);
            }
        });
    });
    
    images.forEach(img => {
        imageObserver.observe(img);
    });
}

// Função para scroll infinito (se necessário no futuro)
function initInfiniteScroll() {
    let loading = false;
    let page = 1;
    
    window.addEventListener('scroll', function() {
        if (loading) return;
        
        const scrollTop = window.pageYOffset;
        const windowHeight = window.innerHeight;
        const docHeight = document.documentElement.scrollHeight;
        
        if (scrollTop + windowHeight >= docHeight - 1000) {
            loading = true;
            // Carregar mais produtos aqui
            setTimeout(() => {
                loading = false;
            }, 1000);
        }
    });
}

// Inicializa funcionalidades adicionais
initLazyLoading();

// Preload de imagens importantes
function preloadImages() {
    const importantImages = [
        'img/produtos/bomba-vickers-v20.jpg',
        'img/produtos/cilindro-vickers-tv.jpg',
        'img/produtos/valvula-vickers-tn06.jpg'
    ];
    
    importantImages.forEach(src => {
        const img = new Image();
        img.src = src;
    });
}

// Executa preload após carregamento da página
window.addEventListener('load', preloadImages);

// Função para otimizações de performance
function optimizePerformance() {
    // Debounce para busca
    let searchTimeout;
    const searchInput = document.getElementById('searchInput');
    
    if (searchInput) {
        searchInput.removeEventListener('input', aplicarFiltros);
        searchInput.addEventListener('input', function() {
            clearTimeout(searchTimeout);
            searchTimeout = setTimeout(() => {
                termoBusca = this.value.toLowerCase();
                aplicarFiltros();
            }, 300);
        });
    }
}

// Executa otimizações
optimizePerformance();

