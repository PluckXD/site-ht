document.addEventListener('DOMContentLoaded', function() {
    // Inicialização das funcionalidades
    initCounterAnimation();
    initCarousels();
    initScrollAnimations();
    initNewsletterForm();
    initSmoothScroll();
    initPerformanceOptimizations();
});

// Função para animação dos contadores
function initCounterAnimation() {
    const counters = document.querySelectorAll('.stat-number');
    const observerOptions = {
        threshold: 0.5,
        rootMargin: '0px 0px -50px 0px'
    };
    
    const counterObserver = new IntersectionObserver(function(entries) {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                const counter = entry.target;
                const target = parseInt(counter.getAttribute('data-target'));
                const duration = 2000; // 2 segundos
                const increment = target / (duration / 16); // 60fps
                let current = 0;
                
                const updateCounter = () => {
                    current += increment;
                    if (current < target) {
                        counter.textContent = Math.floor(current);
                        requestAnimationFrame(updateCounter);
                    } else {
                        counter.textContent = target;
                    }
                };
                
                updateCounter();
                counterObserver.unobserve(counter);
            }
        });
    }, observerOptions);
    
    counters.forEach(counter => {
        counterObserver.observe(counter);
    });
}

// Função para inicializar carrosséis
function initCarousels() {
    const carousels = document.querySelectorAll('.carrossel-track');
    
    carousels.forEach(carousel => {
        // Pausar animação ao hover
        carousel.addEventListener('mouseenter', function() {
            this.style.animationPlayState = 'paused';
        });
        
        carousel.addEventListener('mouseleave', function() {
            this.style.animationPlayState = 'running';
        });
        
        // Duplicar logos para scroll infinito suave
        const logos = carousel.querySelectorAll('.logo-item');
        logos.forEach(logo => {
            const clone = logo.cloneNode(true);
            carousel.appendChild(clone);
        });
        
        // Adicionar mais clones para garantir fluidez
        logos.forEach(logo => {
            const clone2 = logo.cloneNode(true);
            carousel.appendChild(clone2);
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
                
                // Animação escalonada para cards
                if (entry.target.classList.contains('aplicacoes-grid')) {
                    const cards = entry.target.querySelectorAll('.aplicacao-card');
                    cards.forEach((card, index) => {
                        setTimeout(() => {
                            card.classList.add('animate-in');
                        }, index * 100);
                    });
                }
                
                // Animação para círculos de tecnologia
                if (entry.target.classList.contains('tecnologia-visual')) {
                    const circles = entry.target.querySelectorAll('.tech-circle');
                    circles.forEach((circle, index) => {
                        setTimeout(() => {
                            circle.classList.add('animate-in');
                        }, index * 200);
                    });
                }
                
                // Animação para cards visuais
                if (entry.target.classList.contains('visual-container')) {
                    const cards = entry.target.querySelectorAll('.visual-card');
                    cards.forEach((card, index) => {
                        setTimeout(() => {
                            card.classList.add('animate-in');
                        }, index * 150);
                    });
                }
            }
        });
    }, observerOptions);
    
    // Observar elementos que devem ser animados
    const animatedElements = document.querySelectorAll(`
        .carroseis-integrados,
        .destaque-principal,
        .aplicacoes-section,
        .tecnologia-section,
        .cta-home,
        .aplicacoes-grid,
        .tecnologia-visual,
        .visual-container,
        .destaque-stats
    `);
    
    animatedElements.forEach(el => {
        observer.observe(el);
    });
    
    // Adicionar classes CSS para animações
    addAnimationStyles();
}

// Função para adicionar estilos de animação
function addAnimationStyles() {
    if (document.querySelector('#scroll-animations')) return;
    
    const style = document.createElement('style');
    style.id = 'scroll-animations';
    style.textContent = `
        .carroseis-integrados,
        .destaque-principal,
        .aplicacoes-section,
        .tecnologia-section,
        .cta-home {
            opacity: 0;
            transform: translateY(50px);
            transition: opacity 0.8s ease, transform 0.8s ease;
        }
        
        .carroseis-integrados.animate-in,
        .destaque-principal.animate-in,
        .aplicacoes-section.animate-in,
        .tecnologia-section.animate-in,
        .cta-home.animate-in {
            opacity: 1;
            transform: translateY(0);
        }
        
        .aplicacao-card,
        .visual-card,
        .tech-circle,
        .stat-box {
            opacity: 0;
            transform: translateY(30px);
            transition: opacity 0.6s ease, transform 0.6s ease;
        }
        
        .aplicacao-card.animate-in,
        .visual-card.animate-in,
        .tech-circle.animate-in,
        .stat-box.animate-in {
            opacity: 1;
            transform: translateY(0);
        }
        
        .carrossel-bloco {
            opacity: 0;
            transform: translateX(-30px);
            transition: opacity 0.8s ease, transform 0.8s ease;
        }
        
        .carrossel-bloco.clientes {
            transform: translateX(30px);
        }
        
        .carroseis-integrados.animate-in .carrossel-bloco {
            opacity: 1;
            transform: translateX(0);
        }
        
        .tech-circle.main.animate-in {
            transform: translate(-50%, -50%) scale(1);
        }
        
        .tech-circle.main {
            transform: translate(-50%, -50%) scale(0);
        }
    `;
    document.head.appendChild(style);
}

// Função para o formulário de newsletter
function initNewsletterForm() {
    const newsletterForm = document.getElementById('newsletterForm');
    
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
            const originalText = submitButton.textContent;
            submitButton.textContent = 'ENVIANDO...';
            submitButton.disabled = true;
            
            setTimeout(() => {
                showMessage('Obrigado! Você foi inscrito em nossa newsletter.', 'success');
                nameInput.value = '';
                emailInput.value = '';
                submitButton.textContent = originalText;
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

// Função para otimizações de performance
function initPerformanceOptimizations() {
    // Debounce para scroll
    let scrollTimeout;
    
    window.addEventListener('scroll', function() {
        clearTimeout(scrollTimeout);
        scrollTimeout = setTimeout(() => {
            // Otimizações de scroll aqui se necessário
        }, 16); // ~60fps
    });
    
    // Preload de imagens importantes
    const importantImages = [
        'img/logo_hidraultec.png'
    ];
    
    importantImages.forEach(src => {
        const img = new Image();
        img.src = src;
    });
    
    // Otimizar carrosséis para dispositivos móveis
    if (window.innerWidth <= 768) {
        const carousels = document.querySelectorAll('.carrossel-track');
        carousels.forEach(carousel => {
            carousel.style.animationDuration = '30s'; // Mais lento no mobile
        });
    }
}

// Função para efeitos visuais avançados
function initAdvancedEffects() {
    // Efeito de hover nos cards de aplicação
    const aplicacaoCards = document.querySelectorAll('.aplicacao-card');
    
    aplicacaoCards.forEach(card => {
        card.addEventListener('mouseenter', function() {
            this.style.transform = 'translateY(-10px) scale(1.02)';
        });
        
        card.addEventListener('mouseleave', function() {
            this.style.transform = 'translateY(0) scale(1)';
        });
    });
    
    // Efeito de brilho nos ícones
    const icons = document.querySelectorAll('.aplicacao-image, .card-icon, .tech-icon');
    
    icons.forEach(icon => {
        icon.addEventListener('mouseenter', function() {
            this.style.boxShadow = '0 0 30px rgba(47, 68, 107, 0.5)';
        });
        
        icon.addEventListener('mouseleave', function() {
            this.style.boxShadow = '';
        });
    });
    
    // Efeito parallax nos carrosséis
    let ticking = false;
    
    function updateParallax() {
        const scrolled = window.pageYOffset;
        const carrosselSection = document.querySelector('.carroseis-integrados');
        
        if (carrosselSection) {
            const speed = 0.3;
            const yPos = -(scrolled * speed);
            carrosselSection.style.transform = `translateY(${yPos}px)`;
        }
        
        ticking = false;
    }
    
    function requestTick() {
        if (!ticking) {
            requestAnimationFrame(updateParallax);
            ticking = true;
        }
    }
    
    window.addEventListener('scroll', requestTick);
}

// Função para acessibilidade
function initAccessibility() {
    // Adicionar navegação por teclado
    const interactiveElements = document.querySelectorAll('.btn-primary, .btn-secondary, .btn-destaque, .btn-tech, .btn-cta');
    
    interactiveElements.forEach(element => {
        element.addEventListener('keydown', function(e) {
            if (e.key === 'Enter' || e.key === ' ') {
                e.preventDefault();
                this.click();
            }
        });
    });
    
    // Melhorar contraste em foco
    const focusableElements = document.querySelectorAll('a, button, input, select, textarea');
    
    focusableElements.forEach(element => {
        element.addEventListener('focus', function() {
            this.style.outline = '3px solid #2F446B';
            this.style.outlineOffset = '2px';
        });
        
        element.addEventListener('blur', function() {
            this.style.outline = '';
            this.style.outlineOffset = '';
        });
    });
}

// Função para detectar dispositivos móveis
function isMobile() {
    return window.innerWidth <= 768;
}

// Função para otimizações específicas para mobile
function initMobileOptimizations() {
    if (isMobile()) {
        // Reduzir animações em dispositivos móveis
        const style = document.createElement('style');
        style.textContent = `
            @media (prefers-reduced-motion: reduce) {
                * {
                    animation-duration: 0.01ms !important;
                    animation-iteration-count: 1 !important;
                    transition-duration: 0.01ms !important;
                }
            }
        `;
        document.head.appendChild(style);
        
        // Otimizar carrosséis para touch
        const carousels = document.querySelectorAll('.carrossel-track');
        carousels.forEach(carousel => {
            carousel.style.animationDuration = '35s'; // Mais lento no mobile
        });
    }
}

// Função para monitorar performance
function initPerformanceMonitoring() {
    // Monitorar tempo de carregamento
    window.addEventListener('load', function() {
        const loadTime = performance.now();
        console.log(`Página carregada em ${Math.round(loadTime)}ms`);
        
        // Otimizar se necessário
        if (loadTime > 3000) {
            console.warn('Página carregando lentamente, aplicando otimizações...');
            // Aplicar otimizações adicionais se necessário
        }
    });
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
                img.classList.add('loaded');
                imageObserver.unobserve(img);
            }
        });
    });
    
    images.forEach(img => {
        imageObserver.observe(img);
    });
}

// Inicializar funcionalidades adicionais
initAdvancedEffects();
initAccessibility();
initMobileOptimizations();
initPerformanceMonitoring();
initLazyLoading();

// Função para efeitos especiais nos carrosséis
function initCarouselEffects() {
    const carrosselBlocos = document.querySelectorAll('.carrossel-bloco');
    
    carrosselBlocos.forEach(bloco => {
        // Efeito de hover no bloco inteiro
        bloco.addEventListener('mouseenter', function() {
            this.style.transform = 'translateY(-5px) scale(1.02)';
        });
        
        bloco.addEventListener('mouseleave', function() {
            this.style.transform = 'translateY(0) scale(1)';
        });
        
        // Efeito de brilho na linha
        const linha = bloco.querySelector('.carrossel-line');
        if (linha) {
            bloco.addEventListener('mouseenter', function() {
                linha.style.boxShadow = '0 0 15px rgba(255, 255, 255, 0.5)';
            });
            
            bloco.addEventListener('mouseleave', function() {
                linha.style.boxShadow = '';
            });
        }
    });
}

// Executar efeitos especiais dos carrosséis
initCarouselEffects();

// Função para animação de entrada dos elementos
function initEntranceAnimations() {
    // Animar elementos do banner
    const bannerElements = document.querySelectorAll('.banner-text h1, .banner-text p, .banner-buttons');
    bannerElements.forEach((element, index) => {
        element.style.opacity = '0';
        element.style.transform = 'translateY(30px)';
        
        setTimeout(() => {
            element.style.transition = 'opacity 0.8s ease, transform 0.8s ease';
            element.style.opacity = '1';
            element.style.transform = 'translateY(0)';
        }, index * 200);
    });
    
    // Animar carrosséis na entrada
    setTimeout(() => {
        const carrosselBlocos = document.querySelectorAll('.carrossel-bloco');
        carrosselBlocos.forEach((bloco, index) => {
            setTimeout(() => {
                bloco.classList.add('animate-in');
            }, index * 300);
        });
    }, 1000);
}

// Executar animações de entrada
setTimeout(initEntranceAnimations, 100);

