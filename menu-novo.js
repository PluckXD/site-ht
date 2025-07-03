// JavaScript para o novo menu de categorias
document.addEventListener('DOMContentLoaded', function() {
    // Seleciona todos os links do menu que têm submenus
    const menuItems = document.querySelectorAll('.menu-categorias a');
    
    // Função para alternar submenu
    function toggleSubmenu(event) {
        // Verifica se o clique foi na seta ou no link
        const isArrowClick = event.target.classList.contains('arrow');
        const link = isArrowClick ? event.target.parentElement : event.target;
        const parentLi = link.closest('li');
        const submenu = parentLi.querySelector('.submenu');
        
        // Se tem submenu, previne navegação e alterna
        if (submenu) {
            event.preventDefault();
            
            // Alterna a classe active
            if (parentLi.classList.contains('active')) {
                parentLi.classList.remove('active');
                
                // Fecha todos os submenus filhos quando fechar o pai
                const childActiveItems = parentLi.querySelectorAll('li.active');
                childActiveItems.forEach(item => {
                    item.classList.remove('active');
                });
            } else {
                // Fecha outros submenus do mesmo nível
                const siblings = parentLi.parentElement.children;
                Array.from(siblings).forEach(sibling => {
                    if (sibling !== parentLi) {
                        sibling.classList.remove('active');
                        
                        // Fecha todos os submenus filhos dos irmãos
                        const childActiveItems = sibling.querySelectorAll('li.active');
                        childActiveItems.forEach(item => {
                            item.classList.remove('active');
                        });
                    }
                });
                
                // Abre o submenu atual
                parentLi.classList.add('active');
            }
        }
    }
    
    // Adiciona event listeners para todos os links
    menuItems.forEach(item => {
        item.addEventListener('click', toggleSubmenu);
    });
    
    // Fecha submenus ao clicar fora
    document.addEventListener('click', function(event) {
        const isMenuClick = event.target.closest('.categorias-sidebar');
        if (!isMenuClick) {
            const allItems = document.querySelectorAll('.menu-categorias li.active');
            allItems.forEach(item => {
                item.classList.remove('active');
            });
        }
    });
});

