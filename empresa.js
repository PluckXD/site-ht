document.addEventListener('DOMContentLoaded', function() {
    // Inicialização das animações
    initScrollAnimations();
    
    // Formulário de newsletter
    initNewsletterForm();
    
    // Smooth scroll para links internos
    initSmoothScroll();
    
    // Animações da timeline
    initTimelineAnimations();
});

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
        '.quem-somos, .missao-visao-valores .item, .diferencial-item, .cta-final, .timeline-item'
    );
    
    animatedElements.forEach(el => {
        observer.observe(el);
    });
    
    // Adiciona classes CSS para animações
    const style = document.createElement('style');
    style.textContent = `
        .quem-somos,
        .missao-visao-valores .item,
        .diferencial-item,
        .cta-final,
        .timeline-item {
            opacity: 0;
            transform: translateY(30px);
            transition: opacity 0.6s ease, transform 0.6s ease;
        }
        
        .quem-somos.animate-in,
        .missao-visao-valores .item.animate-in,
        .diferencial-item.animate-in,
        .cta-final.animate-in,
        .timeline-item.animate-in {
            opacity: 1;
            transform: translateY(0);
        }
        
        .missao-visao-valores .item:nth-child(2).animate-in {
            transition-delay: 0.2s;
        }
        
        .missao-visao-valores .item:nth-child(3).animate-in {
            transition-delay: 0.4s;
        }
        
        .diferencial-item:nth-child(2).animate-in {
            transition-delay: 0.1s;
        }
        
        .diferencial-item:nth-child(3).animate-in {
            transition-delay: 0.2s;
        }
        
        .diferencial-item:nth-child(4).animate-in {
            transition-delay: 0.3s;
        }
        
        .diferencial-item:nth-child(5).animate-in {
            transition-delay: 0.4s;
        }
        
        .diferencial-item:nth-child(6).animate-in {
            transition-delay: 0.5s;
        }
        
        .timeline-item:nth-child(2).animate-in {
            transition-delay: 0.2s;
        }
        
        .timeline-item:nth-child(3).animate-in {
            transition-delay: 0.4s;
        }
        
        .timeline-item:nth-child(4).animate-in {
            transition-delay: 0.6s;
        }
    `;
    document.head.appendChild(style);
}

// Função para animações específicas da timeline
function initTimelineAnimations() {
    const timelineItems = document.querySelectorAll('.timeline-item');
    
    const timelineObserver = new IntersectionObserver(function(entries) {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('timeline-animate');
            }
        });
    }, {
        threshold: 0.3,
        rootMargin: '0px 0px -100px 0px'
    });
    
    timelineItems.forEach(item => {
        timelineObserver.observe(item);
    });
    
    // Adiciona estilos específicos para timeline
    const timelineStyle = document.createElement('style');
    timelineStyle.textContent = `
        .timeline-item {
            opacity: 0;
            transform: translateX(-50px);
        }
        
        .timeline-item:nth-child(even) {
            transform: translateX(50px);
        }
        
        .timeline-item.timeline-animate {
            opacity: 1;
            transform: translateX(0);
            transition: all 0.8s ease;
        }
        
        .timeline-year {
            transform: scale(0.8);
            transition: transform 0.6s ease;
        }
        
        .timeline-item.timeline-animate .timeline-year {
            transform: scale(1);
        }
        
        .timeline-content {
            transform: translateY(20px);
            transition: transform 0.6s ease 0.2s;
        }
        
        .timeline-item.timeline-animate .timeline-content {
            transform: translateY(0);
        }
        
        @media (max-width: 1024px) {
            .timeline-item,
            .timeline-item:nth-child(even) {
                transform: translateX(-30px);
            }
            
            .timeline-item.timeline-animate {
                transform: translateX(0);
            }
        }
    `;
    document.head.appendChild(timelineStyle);
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

// Função para efeitos de hover nos cards
function initCardHoverEffects() {
    const cards = document.querySelectorAll('.missao-visao-valores .item, .diferencial-item');
    
    cards.forEach(card => {
        card.addEventListener('mouseenter', function() {
            this.style.transform = 'translateY(-8px) scale(1.02)';
        });
        
        card.addEventListener('mouseleave', function() {
            this.style.transform = 'translateY(0) scale(1)';
        });
    });
}

// Função para contador animado (se necessário no futuro)
function initCounterAnimation() {
    const counters = document.querySelectorAll('.counter');
    
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
    }, { threshold: 0.5 });
    
    counters.forEach(counter => {
        counterObserver.observe(counter);
    });
}

// Inicializa efeitos adicionais
initCardHoverEffects();

// Preload de imagens importantes
function preloadImages() {
    const importantImages = [
        'img/logopaginaempresa.png'
    ];
    
    importantImages.forEach(src => {
        const img = new Image();
        img.src = src;
    });
}

// Executa preload após carregamento da página
window.addEventListener('load', preloadImages);

// Otimizações para performance
function optimizePerformance() {
    // Lazy loading para imagens (se necessário)
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

// Executa otimizações
optimizePerformance();

