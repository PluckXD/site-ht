document.addEventListener('DOMContentLoaded', function() {
    // Inicialização dos carrosséis
    initCarousels();
    
    // Smooth scroll para links internos
    initSmoothScroll();
    
    // Animações ao scroll
    initScrollAnimations();
    
    // Formulário de newsletter
    initNewsletterForm();
});

// Função para inicializar os carrosséis
function initCarousels() {
    const carousels = document.querySelectorAll('.carousel-track');
    
    carousels.forEach(carousel => {
        // Pausa a animação quando o mouse está sobre o carrossel
        carousel.addEventListener('mouseenter', function() {
            this.style.animationPlayState = 'paused';
        });
        
        // Retoma a animação quando o mouse sai do carrossel
        carousel.addEventListener('mouseleave', function() {
            this.style.animationPlayState = 'running';
        });
        
        // Clona as imagens para garantir loop infinito suave
        const images = carousel.querySelectorAll('img');
        if (images.length > 0) {
            // Remove duplicatas existentes
            const originalImages = Array.from(images).slice(0, images.length / 2);
            
            // Limpa o carrossel
            carousel.innerHTML = '';
            
            // Adiciona imagens originais
            originalImages.forEach(img => {
                carousel.appendChild(img.cloneNode(true));
            });
            
            // Adiciona duplicatas para loop infinito
            originalImages.forEach(img => {
                carousel.appendChild(img.cloneNode(true));
            });
        }
    });
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
                const targetPosition = target.offsetTop - headerHeight - 20;
                
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
    const animatedElements = document.querySelectorAll('.servico-item, .bloco-logo, .cta-conteudo');
    animatedElements.forEach(el => {
        observer.observe(el);
    });
    
    // Adiciona classes CSS para animações
    const style = document.createElement('style');
    style.textContent = `
        .servico-item,
        .bloco-logo,
        .cta-conteudo {
            opacity: 0;
            transform: translateY(30px);
            transition: opacity 0.6s ease, transform 0.6s ease;
        }
        
        .servico-item.animate-in,
        .bloco-logo.animate-in,
        .cta-conteudo.animate-in {
            opacity: 1;
            transform: translateY(0);
        }
        
        .servico-item:nth-child(2).animate-in {
            transition-delay: 0.2s;
        }
        
        .servico-item:nth-child(3).animate-in {
            transition-delay: 0.4s;
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
    const existingMessage = document.querySelector('.newsletter-message');
    if (existingMessage) {
        existingMessage.remove();
    }
    
    // Cria nova mensagem
    const messageDiv = document.createElement('div');
    messageDiv.className = `newsletter-message ${type}`;
    messageDiv.textContent = message;
    
    // Estilos da mensagem
    messageDiv.style.cssText = `
        position: fixed;
        top: 20px;
        right: 20px;
        padding: 15px 20px;
        border-radius: 8px;
        color: white;
        font-weight: bold;
        z-index: 1000;
        animation: slideIn 0.3s ease;
        ${type === 'success' ? 'background: #25d366;' : 'background: #e74c3c;'}
    `;
    
    document.body.appendChild(messageDiv);
    
    // Remove a mensagem após 5 segundos
    setTimeout(() => {
        messageDiv.style.animation = 'slideOut 0.3s ease';
        setTimeout(() => {
            if (messageDiv.parentNode) {
                messageDiv.remove();
            }
        }, 300);
    }, 5000);
    
    // Adiciona animações CSS se não existirem
    if (!document.querySelector('#message-animations')) {
        const style = document.createElement('style');
        style.id = 'message-animations';
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

// Função para otimizar performance em dispositivos móveis
function optimizeForMobile() {
    if (window.innerWidth <= 768) {
        // Reduz a velocidade da animação do carrossel em dispositivos móveis
        const carousels = document.querySelectorAll('.carousel-track');
        carousels.forEach(carousel => {
            carousel.style.animationDuration = '30s';
        });
    }
}

// Executa otimizações ao redimensionar a janela
window.addEventListener('resize', function() {
    optimizeForMobile();
});

// Executa otimizações iniciais
optimizeForMobile();

// Preload de imagens importantes
function preloadImages() {
    const importantImages = [
        'img/BannerHomePage.png',
        'img/BannerInferiorHomePage.png',
        'img/Logoprodutos.png'
    ];
    
    importantImages.forEach(src => {
        const img = new Image();
        img.src = src;
    });
}

// Executa preload após carregamento da página
window.addEventListener('load', preloadImages);

