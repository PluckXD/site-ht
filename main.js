document.addEventListener("DOMContentLoaded", function () {
  // Verifica se estamos na página de produtos
  const isProdutosPage = document.body.classList.contains('produtos-page');
  
  if (isProdutosPage) {
    // Manipulação do menu de categorias
    document.querySelectorAll('.menu-categorias > li > a').forEach(link => {
      // Verifica se o link tem submenu (se tiver, deve expandir em vez de navegar)
      const parent = link.parentElement;
      const submenu = parent.querySelector('.submenu');
      
      if (submenu) {
        link.addEventListener('click', function(e) {
          e.preventDefault();
          
          const arrow = this.querySelector('.arrow');
          
          // Fecha outros menus do mesmo nível
          const siblings = Array.from(parent.parentElement.children).filter(el => el !== parent);
          siblings.forEach(sibling => {
            const siblingSubmenu = sibling.querySelector('.submenu');
            const siblingArrow = sibling.querySelector('a .arrow');
            if (siblingSubmenu) {
              siblingSubmenu.classList.remove('active');
              siblingSubmenu.style.maxHeight = '0';
            }
            if (siblingArrow) {
              siblingArrow.classList.remove('active');
            }
          });
          
          // Alterna o estado do menu atual
          submenu.classList.toggle('active');
          if (arrow) arrow.classList.toggle('active');
          
          if (submenu.classList.contains('active')) {
            submenu.style.maxHeight = submenu.scrollHeight + 'px';
          } else {
            submenu.style.maxHeight = '0';
          }
        });
      }
      // Se não tiver submenu, deixa o comportamento padrão do link (navegar para a página)
    });
    
    // Manipulação dos submenus - CORRIGIDO PARA EVITAR TRAVAMENTO
    document.querySelectorAll('.menu-categorias .submenu li > a').forEach(link => {
      // Verifica se o link tem submenu (se tiver, deve expandir em vez de navegar)
      const parent = link.parentElement;
      const submenu = parent.querySelector('.submenu');
      
      if (submenu) {
        link.addEventListener('click', function(e) {
          e.preventDefault();
          e.stopPropagation();
          
          const arrow = this.querySelector('.arrow');
          
          // Fecha outros submenus do mesmo nível
          const siblings = Array.from(parent.parentElement.children).filter(el => el !== parent);
          siblings.forEach(sibling => {
            const siblingSubmenu = sibling.querySelector('.submenu');
            const siblingArrow = sibling.querySelector('a .arrow');
            if (siblingSubmenu) {
              siblingSubmenu.classList.remove('active');
              siblingSubmenu.style.maxHeight = '0';
            }
            if (siblingArrow) {
              siblingArrow.classList.remove('active');
            }
          });
          
          // Alterna o estado do submenu atual
          submenu.classList.toggle('active');
          if (arrow) arrow.classList.toggle('active');
          
          if (submenu.classList.contains('active')) {
            submenu.style.maxHeight = submenu.scrollHeight + 'px';
            
            // Ajusta a altura do menu pai para acomodar o submenu aberto
            let parentMenu = parent.closest('.submenu');
            if (parentMenu) {
              const totalHeight = parentMenu.scrollHeight + submenu.scrollHeight;
              parentMenu.style.maxHeight = totalHeight + 'px';
              
              // Ajusta também o menu avô se existir
              const grandParentMenu = parentMenu.closest('.submenu');
              if (grandParentMenu) {
                grandParentMenu.style.maxHeight = (grandParentMenu.scrollHeight + submenu.scrollHeight) + 'px';
              }
            }
          } else {
            submenu.style.maxHeight = '0';
          }
        });
      }
      // Se não tiver submenu, deixa o comportamento padrão do link (navegar para a página)
    });
    
    // Ajusta a altura dos submenus quando a janela é redimensionada
    window.addEventListener('resize', function() {
      document.querySelectorAll('.menu-categorias .submenu.active').forEach(submenu => {
        if (!submenu) return; // Evita erro se submenu for null
        submenu.style.maxHeight = submenu.scrollHeight + 'px';
        
        // Ajusta também os menus pais
        let parentMenu = submenu.closest('.submenu');
        while (parentMenu && parentMenu.classList.contains('active')) {
          const childrenHeight = Array.from(parentMenu.querySelectorAll('.submenu.active'))
            .reduce((total, el) => total + el.scrollHeight, 0);
          parentMenu.style.maxHeight = (parentMenu.scrollHeight + childrenHeight) + 'px';
          parentMenu = parentMenu.closest('.submenu');
        }
      });
    });
  }
  
  // Código original para outras páginas
  document.querySelectorAll('.submenu-toggle').forEach(toggle => {
    toggle.addEventListener('click', e => {
      if (!isProdutosPage) {
        e.preventDefault();
        const parent = toggle.closest('.has-submenu');
        parent.classList.toggle('open');
        
        // Muda a seta ⬇️ para ⬆️
        const icon = toggle.querySelector('.toggle');
        if (icon) {
          icon.textContent = parent.classList.contains('open') ? '▲' : '▼';
        }
      }
    });
  });
  
  // Paginação de produtos (mantido para compatibilidade)
  const cards = document.querySelectorAll('.produto-card');
  const pagination = document.getElementById('pagination');
  
  if (cards.length > 0 && pagination) {
    const itemsPerPage = 16;
    const totalPages = Math.ceil(cards.length / itemsPerPage);
    
    function showPage(page) {
      const start = (page - 1) * itemsPerPage;
      const end = start + itemsPerPage;
    
      cards.forEach((card, index) => {
        card.style.display = index >= start && index < end ? 'block' : 'none';
      });
    
      updatePagination(page);
    }
    
    function updatePagination(currentPage) {
      pagination.innerHTML = '';
    
      if (totalPages <= 1) return;
    
      // Adiciona botão "Anterior" se não estiver na primeira página
      if (currentPage > 1) {
        const prevBtn = document.createElement('button');
        prevBtn.innerHTML = '<i class="fas fa-chevron-left"></i>';
        prevBtn.addEventListener('click', () => showPage(currentPage - 1));
        pagination.appendChild(prevBtn);
      }
    
      // Lógica para mostrar um número limitado de botões de página
      let startPage = Math.max(1, currentPage - 2);
      let endPage = Math.min(totalPages, startPage + 4);
      
      if (endPage - startPage < 4) {
        startPage = Math.max(1, endPage - 4);
      }
    
      // Adiciona botão para primeira página se necessário
      if (startPage > 1) {
        const firstBtn = document.createElement('button');
        firstBtn.textContent = '1';
        firstBtn.addEventListener('click', () => showPage(1));
        pagination.appendChild(firstBtn);
        
        if (startPage > 2) {
          const ellipsis = document.createElement('span');
          ellipsis.textContent = '...';
          ellipsis.className = 'pagination-ellipsis';
          pagination.appendChild(ellipsis);
        }
      }
    
      // Adiciona botões de página
      for (let i = startPage; i <= endPage; i++) {
        const btn = document.createElement('button');
        btn.textContent = i;
        btn.className = i === currentPage ? 'active' : '';
        btn.addEventListener('click', () => showPage(i));
        pagination.appendChild(btn);
      }
    
      // Adiciona ellipsis e último botão se necessário
      if (endPage < totalPages) {
        if (endPage < totalPages - 1) {
          const ellipsis = document.createElement('span');
          ellipsis.textContent = '...';
          ellipsis.className = 'pagination-ellipsis';
          pagination.appendChild(ellipsis);
        }
        
        const lastBtn = document.createElement('button');
        lastBtn.textContent = totalPages;
        lastBtn.addEventListener('click', () => showPage(totalPages));
        pagination.appendChild(lastBtn);
      }
    
      // Adiciona botão "Próximo" se não estiver na última página
      if (currentPage < totalPages) {
        const nextBtn = document.createElement('button');
        nextBtn.innerHTML = '<i class="fas fa-chevron-right"></i>';
        nextBtn.addEventListener('click', () => showPage(currentPage + 1));
        pagination.appendChild(nextBtn);
      }
    }
    
    // Inicializa a primeira página
    showPage(1);
  }
});
