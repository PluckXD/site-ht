document.addEventListener('DOMContentLoaded', function() {
    // Inicialização das funcionalidades
    initFormValidation();
    initFAQ();
    initScrollAnimations();
    initNewsletterForm();
    initSmoothScroll();
    initPhoneMask();
});

// Função para validação e envio do formulário
function initFormValidation() {
    const form = document.getElementById('contatoForm');
    
    if (form) {
        form.addEventListener('submit', function(e) {
            e.preventDefault();
            
            // Validação dos campos
            if (validateForm()) {
                submitForm();
            }
        });
        
        // Validação em tempo real
        const inputs = form.querySelectorAll('input, select, textarea');
        inputs.forEach(input => {
            input.addEventListener('blur', function() {
                validateField(this);
            });
            
            input.addEventListener('input', function() {
                clearFieldError(this);
            });
        });
    }
}

// Função para validar o formulário
function validateForm() {
    const form = document.getElementById('contatoForm');
    const nome = form.querySelector('#nome');
    const email = form.querySelector('#email');
    const assunto = form.querySelector('#assunto');
    const mensagem = form.querySelector('#mensagem');
    
    let isValid = true;
    
    // Validar nome
    if (!nome.value.trim()) {
        showFieldError(nome, 'Nome é obrigatório');
        isValid = false;
    } else if (nome.value.trim().length < 2) {
        showFieldError(nome, 'Nome deve ter pelo menos 2 caracteres');
        isValid = false;
    }
    
    // Validar email
    if (!email.value.trim()) {
        showFieldError(email, 'E-mail é obrigatório');
        isValid = false;
    } else if (!isValidEmail(email.value)) {
        showFieldError(email, 'E-mail inválido');
        isValid = false;
    }
    
    // Validar assunto
    if (!assunto.value) {
        showFieldError(assunto, 'Selecione um assunto');
        isValid = false;
    }
    
    // Validar mensagem
    if (!mensagem.value.trim()) {
        showFieldError(mensagem, 'Mensagem é obrigatória');
        isValid = false;
    } else if (mensagem.value.trim().length < 10) {
        showFieldError(mensagem, 'Mensagem deve ter pelo menos 10 caracteres');
        isValid = false;
    }
    
    return isValid;
}

// Função para validar campo individual
function validateField(field) {
    const value = field.value.trim();
    
    switch (field.id) {
        case 'nome':
            if (!value) {
                showFieldError(field, 'Nome é obrigatório');
                return false;
            } else if (value.length < 2) {
                showFieldError(field, 'Nome deve ter pelo menos 2 caracteres');
                return false;
            }
            break;
            
        case 'email':
            if (!value) {
                showFieldError(field, 'E-mail é obrigatório');
                return false;
            } else if (!isValidEmail(value)) {
                showFieldError(field, 'E-mail inválido');
                return false;
            }
            break;
            
        case 'telefone':
            if (value && !isValidPhone(value)) {
                showFieldError(field, 'Telefone inválido');
                return false;
            }
            break;
            
        case 'assunto':
            if (!value) {
                showFieldError(field, 'Selecione um assunto');
                return false;
            }
            break;
            
        case 'mensagem':
            if (!value) {
                showFieldError(field, 'Mensagem é obrigatória');
                return false;
            } else if (value.length < 10) {
                showFieldError(field, 'Mensagem deve ter pelo menos 10 caracteres');
                return false;
            }
            break;
    }
    
    clearFieldError(field);
    return true;
}

// Função para mostrar erro no campo
function showFieldError(field, message) {
    clearFieldError(field);
    
    field.style.borderColor = '#e74c3c';
    field.style.background = '#fdf2f2';
    
    const errorDiv = document.createElement('div');
    errorDiv.className = 'field-error';
    errorDiv.textContent = message;
    errorDiv.style.cssText = `
        color: #e74c3c;
        font-size: 0.85rem;
        margin-top: 5px;
        display: flex;
        align-items: center;
        gap: 5px;
    `;
    
    const icon = document.createElement('i');
    icon.className = 'fas fa-exclamation-circle';
    errorDiv.insertBefore(icon, errorDiv.firstChild);
    
    field.parentNode.appendChild(errorDiv);
}

// Função para limpar erro do campo
function clearFieldError(field) {
    const existingError = field.parentNode.querySelector('.field-error');
    if (existingError) {
        existingError.remove();
    }
    
    field.style.borderColor = '#e1e5e9';
    field.style.background = '#f8f9fc';
}

// Função para enviar o formulário
function submitForm() {
    const submitButton = document.querySelector('.btn-enviar');
    const originalText = submitButton.innerHTML;
    
    // Mostrar loading
    submitButton.innerHTML = '<i class="fas fa-spinner fa-spin"></i> Enviando...';
    submitButton.disabled = true;
    
    // Simular envio (substituir por integração real)
    setTimeout(() => {
        showMessage('Mensagem enviada com sucesso! Entraremos em contato em breve.', 'success');
        
        // Resetar formulário
        document.getElementById('contatoForm').reset();
        
        // Restaurar botão
        submitButton.innerHTML = originalText;
        submitButton.disabled = false;
        
        // Scroll para o topo
        window.scrollTo({ top: 0, behavior: 'smooth' });
    }, 2000);
}

// Função para validar e-mail
function isValidEmail(email) {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
}

// Função para validar telefone
function isValidPhone(phone) {
    const phoneRegex = /^\(\d{2}\)\s\d{4,5}-\d{4}$/;
    return phoneRegex.test(phone);
}

// Função para máscara de telefone
function initPhoneMask() {
    const phoneInput = document.getElementById('telefone');
    
    if (phoneInput) {
        phoneInput.addEventListener('input', function(e) {
            let value = e.target.value.replace(/\D/g, '');
            
            if (value.length <= 11) {
                if (value.length <= 10) {
                    value = value.replace(/(\d{2})(\d{4})(\d{4})/, '($1) $2-$3');
                } else {
                    value = value.replace(/(\d{2})(\d{5})(\d{4})/, '($1) $2-$3');
                }
            }
            
            e.target.value = value;
        });
    }
}

// Função para FAQ
function initFAQ() {
    const faqItems = document.querySelectorAll('.faq-item');
    
    faqItems.forEach(item => {
        const question = item.querySelector('.faq-question');
        
        question.addEventListener('click', function() {
            const isActive = item.classList.contains('active');
            
            // Fechar todos os outros itens
            faqItems.forEach(otherItem => {
                otherItem.classList.remove('active');
            });
            
            // Abrir/fechar o item clicado
            if (!isActive) {
                item.classList.add('active');
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
        '.formulario-container, .info-container, .faq-item'
    );
    
    animatedElements.forEach(el => {
        observer.observe(el);
    });
    
    // Adiciona classes CSS para animações
    const style = document.createElement('style');
    style.textContent = `
        .formulario-container,
        .info-container,
        .faq-item {
            opacity: 0;
            transform: translateY(30px);
            transition: opacity 0.6s ease, transform 0.6s ease;
        }
        
        .formulario-container.animate-in,
        .info-container.animate-in,
        .faq-item.animate-in {
            opacity: 1;
            transform: translateY(0);
        }
        
        .info-container.animate-in {
            transition-delay: 0.2s;
        }
        
        .faq-item:nth-child(2).animate-in {
            transition-delay: 0.1s;
        }
        
        .faq-item:nth-child(3).animate-in {
            transition-delay: 0.2s;
        }
        
        .faq-item:nth-child(4).animate-in {
            transition-delay: 0.3s;
        }
        
        .faq-item:nth-child(5).animate-in {
            transition-delay: 0.4s;
        }
        
        .faq-item:nth-child(6).animate-in {
            transition-delay: 0.5s;
        }
    `;
    document.head.appendChild(style);
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
        z-index: 1000;
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

// Função para efeitos visuais avançados
function initAdvancedEffects() {
    // Efeito de digitação no banner
    const bannerText = document.querySelector('.texto-banner p');
    if (bannerText) {
        const text = bannerText.textContent;
        bannerText.textContent = '';
        
        let i = 0;
        const typeWriter = () => {
            if (i < text.length) {
                bannerText.textContent += text.charAt(i);
                i++;
                setTimeout(typeWriter, 50);
            }
        };
        
        setTimeout(typeWriter, 1000);
    }
    
    // Efeito parallax nos cards de informação
    const infoCards = document.querySelectorAll('.info-card');
    
    infoCards.forEach(card => {
        card.addEventListener('mouseenter', function() {
            this.style.transform = 'translateX(5px) scale(1.02)';
        });
        
        card.addEventListener('mouseleave', function() {
            this.style.transform = 'translateX(0) scale(1)';
        });
    });
}

// Função para validação de acessibilidade
function initAccessibility() {
    // Adiciona navegação por teclado no FAQ
    const faqQuestions = document.querySelectorAll('.faq-question');
    
    faqQuestions.forEach(question => {
        question.setAttribute('tabindex', '0');
        question.setAttribute('role', 'button');
        question.setAttribute('aria-expanded', 'false');
        
        question.addEventListener('keydown', function(e) {
            if (e.key === 'Enter' || e.key === ' ') {
                e.preventDefault();
                this.click();
            }
        });
    });
    
    // Atualiza aria-expanded quando FAQ é aberto/fechado
    const observer = new MutationObserver(function(mutations) {
        mutations.forEach(mutation => {
            if (mutation.type === 'attributes' && mutation.attributeName === 'class') {
                const faqItem = mutation.target;
                const question = faqItem.querySelector('.faq-question');
                const isActive = faqItem.classList.contains('active');
                
                question.setAttribute('aria-expanded', isActive.toString());
            }
        });
    });
    
    document.querySelectorAll('.faq-item').forEach(item => {
        observer.observe(item, { attributes: true });
    });
}

// Inicializa funcionalidades adicionais
initAdvancedEffects();
initAccessibility();

// Preload de imagens importantes
function preloadImages() {
    const importantImages = [
        'img/imgcontato.png'
    ];
    
    importantImages.forEach(src => {
        const img = new Image();
        img.src = src;
    });
}

// Executa preload após carregamento da página
window.addEventListener('load', preloadImages);

