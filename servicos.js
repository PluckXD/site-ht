document.addEventListener('DOMContentLoaded', function() {
    // Inicialização das animações
    initScrollAnimations();
    
    // Contador animado
    initCounterAnimation();
    
    // Formulário de newsletter
    initNewsletterForm();
    
    // Smooth scroll para links internos
    initSmoothScroll();
    
    // Animações específicas do processo
    initProcessAnimations();
    
    // Efeitos de hover avançados
    initAdvancedHoverEffects();
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
        '.servicos-intro, .servico-card, .area-item, .diferencial-tech, .cta-final, .processo-step'
    );
    
    animatedElements.forEach(el => {
        observer.observe(el);
    });
    
    // Adiciona classes CSS para animações
    const style = document.createElement('style');
    style.textContent = `
        .servicos-intro,
        .servico-card,
        .area-item,
        .diferencial-tech,
        .cta-final,
        .processo-step {
            opacity: 0;
            transform: translateY(30px);
            transition: opacity 0.6s ease, transform 0.6s ease;
        }
        
        .servicos-intro.animate-in,
        .servico-card.animate-in,
        .area-item.animate-in,
        .diferencial-tech.animate-in,
        .cta-final.animate-in,
        .processo-step.animate-in {
            opacity: 1;
            transform: translateY(0);
        }
        
        .servico-card:nth-child(2).animate-in {
            transition-delay: 0.2s;
        }
        
        .servico-card:nth-child(3).animate-in {
            transition-delay: 0.4s;
        }
        
        .servico-card:nth-child(4).animate-in {
            transition-delay: 0.6s;
        }
        
        .area-item:nth-child(2).animate-in {
            transition-delay: 0.1s;
        }
        
        .area-item:nth-child(3).animate-in {
            transition-delay: 0.2s;
        }
        
        .area-item:nth-child(4).animate-in {
            transition-delay: 0.3s;
        }
        
        .area-item:nth-child(5).animate-in {
            transition-delay: 0.4s;
        }
        
        .area-item:nth-child(6).animate-in {
            transition-delay: 0.5s;
        }
        
        .diferencial-tech:nth-child(2).animate-in {
            transition-delay: 0.2s;
        }
        
        .diferencial-tech:nth-child(3).animate-in {
            transition-delay: 0.4s;
        }
        
        .diferencial-tech:nth-child(4).animate-in {
            transition-delay: 0.6s;
        }
        
        .processo-step:nth-child(2).animate-in {
            transition-delay: 0.2s;
        }
        
        .processo-step:nth-child(3).animate-in {
            transition-delay: 0.4s;
        }
        
        .processo-step:nth-child(4).animate-in {
            transition-delay: 0.6s;
        }
        
        .processo-step:nth-child(5).animate-in {
            transition-delay: 0.8s;
        }
    `;
    document.head.appendChild(style);
}

// Função para contador animado
function initCounterAnimation() {
    const counters = document.querySelectorAll('.stat-number');
    
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
                        // Adiciona o símbolo + para alguns números
                        if (target === 500 || target === 100) {
                            counter.textContent = target + '+';
                        }
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

// Função para animações específicas do processo
function initProcessAnimations() {
    const processSteps = document.querySelectorAll('.processo-step');
    
    const processObserver = new IntersectionObserver(function(entries) {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('process-animate');
            }
        });
    }, {
        threshold: 0.3,
        rootMargin: '0px 0px -100px 0px'
    });
    
    processSteps.forEach(step => {
        processObserver.observe(step);
    });
    
    // Adiciona estilos específicos para processo
    const processStyle = document.createElement('style');
    processStyle.textContent = `
        .processo-step {
            opacity: 0;
            transform: translateX(-50px);
        }
        
        .processo-step:nth-child(even) {
            transform: translateX(50px);
        }
        
        .processo-step.process-animate {
            opacity: 1;
            transform: translateX(0);
            transition: all 0.8s ease;
        }
        
        .step-number {
            transform: scale(0.8) rotate(-10deg);
            transition: transform 0.6s ease;
        }
        
        .processo-step.process-animate .step-number {
            transform: scale(1) rotate(0deg);
        }
        
        .step-content {
            transform: translateY(20px);
            transition: transform 0.6s ease 0.2s;
        }
        
        .processo-step.process-animate .step-content {
            transform: translateY(0);
        }
        
        @media (max-width: 1024px) {
            .processo-step,
            .processo-step:nth-child(even) {
                transform: translateX(-30px);
            }
            
            .processo-step.process-animate {
                transform: translateX(0);
            }
        }
    `;
    document.head.appendChild(processStyle);
}

// Função para efeitos de hover avançados
function initAdvancedHoverEffects() {
    // Efeito parallax nos cards de serviço
    const servicoCards = document.querySelectorAll('.servico-card');
    
    servicoCards.forEach(card => {
        card.addEventListener('mousemove', function(e) {
            const rect = this.getBoundingClientRect();
            const x = e.clientX - rect.left;
            const y = e.clientY - rect.top;
            
            const centerX = rect.width / 2;
            const centerY = rect.height / 2;
            
            const rotateX = (y - centerY) / 10;
            const rotateY = (centerX - x) / 10;
            
            this.style.transform = `perspective(1000px) rotateX(${rotateX}deg) rotateY(${rotateY}deg) translateY(-8px)`;
        });
        
        card.addEventListener('mouseleave', function() {
            this.style.transform = 'perspective(1000px) rotateX(0deg) rotateY(0deg) translateY(0px)';
        });
    });
    
    // Efeito de brilho nos ícones
    const icons = document.querySelectorAll('.card-icon, .area-icon, .tech-icon');
    
    icons.forEach(icon => {
        icon.addEventListener('mouseenter', function() {
            this.style.boxShadow = '0 0 30px rgba(47, 68, 107, 0.6)';
            this.style.transform = 'scale(1.1) rotate(5deg)';
        });
        
        icon.addEventListener('mouseleave', function() {
            this.style.boxShadow = '0 8px 20px rgba(47, 68, 107, 0.3)';
            this.style.transform = 'scale(1) rotate(0deg)';
        });
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

// Função para efeito de digitação no banner
function initTypingEffect() {
    const typingElement = document.querySelector('.typing-text');
    
    if (typingElement) {
        const text = typingElement.textContent;
        typingElement.textContent = '';
        
        let i = 0;
        const typeWriter = () => {
            if (i < text.length) {
                typingElement.textContent += text.charAt(i);
                i++;
                setTimeout(typeWriter, 50);
            }
        };
        
        // Inicia o efeito após um pequeno delay
        setTimeout(typeWriter, 1000);
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

// Função para scroll progressivo
function initProgressiveScroll() {
    const progressBar = document.createElement('div');
    progressBar.style.cssText = `
        position: fixed;
        top: 0;
        left: 0;
        width: 0%;
        height: 4px;
        background: linear-gradient(90deg, #2F446B, #1d2b46);
        z-index: 1000;
        transition: width 0.3s ease;
    `;
    document.body.appendChild(progressBar);
    
    window.addEventListener('scroll', function() {
        const scrollTop = window.pageYOffset;
        const docHeight = document.body.scrollHeight - window.innerHeight;
        const scrollPercent = (scrollTop / docHeight) * 100;
        
        progressBar.style.width = scrollPercent + '%';
    });
}

// Preload de imagens importantes
function preloadImages() {
    const importantImages = [
        'img/banner-servicos.jpg'
    ];
    
    importantImages.forEach(src => {
        const img = new Image();
        img.src = src;
    });
}

// Inicializa funcionalidades adicionais
initTypingEffect();
initLazyLoading();
initProgressiveScroll();

// Executa preload após carregamento da página
window.addEventListener('load', preloadImages);

// Otimizações para performance
function optimizePerformance() {
    // Debounce para eventos de scroll
    let scrollTimeout;
    const originalScrollHandler = window.onscroll;
    
    window.onscroll = function() {
        clearTimeout(scrollTimeout);
        scrollTimeout = setTimeout(() => {
            if (originalScrollHandler) originalScrollHandler();
        }, 10);
    };
    
    // Reduz animações em dispositivos com pouca bateria
    if (navigator.getBattery) {
        navigator.getBattery().then(battery => {
            if (battery.level < 0.2) {
                document.body.classList.add('reduce-animations');
                
                const style = document.createElement('style');
                style.textContent = `
                    .reduce-animations * {
                        animation-duration: 0.1s !important;
                        transition-duration: 0.1s !important;
                    }
                `;
                document.head.appendChild(style);
            }
        });
    }
}

// Executa otimizações
optimizePerformance();

