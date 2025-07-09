// Base de dados completa com todos os 95 produtos
const produtosDatabase = [
    // BOMBAS HIDRÁULICAS (7 produtos)
    // Bombas VICKERS - Palhetas (2 produtos)
    {
        id: 'bomba-vickers-v10-1p',
        nome: 'Bomba de palhetas V10, V20, V2010, V2020',
        marca: 'VICKERS',
        categoria: 'teste',
        subcategoria: '1',
        tipo: 'produto-normal',
        descricao: 'Com uma ampla gama de deslocamentos, as bombas de palhetas quadradas Vickers-Danfoss são projetadas para operar em uma variedade de aplicações industriais e móveis de baixa a média pressão. Oferecendo opções de bomba simples e dupla, nossas bombas de palhetas quadradas são amplamente utilizadas como bombas piloto e auxiliares em sistemas industriais complexos, sendo também comuns em caminhões pesados e ônibus interestaduais.',
        especificacoes: [
            'Tecnologia - Palhetas',
            'Deslocamento – 3 - 42 cm³/rot',
            'Classificação de pressão contínua – V10/V20 até 172 bar',
        ],
        aplicacoes: [
            'Máquinas industriais',
            'Sistemas de movimentação',
            'Equipamentos de construção',
            'Prensas hidráulicas'
        ],
        imagem: 'img/produtos/bomba-vickers-v10.jpg',
        documentacao: 'https://assets.danfoss.com/documents/latest/238666/BC443078226453en-000101.pdf'
    },
    {
        id: 'bomba-vickers-v10-1p',
        nome: 'Bomba de palhetas V10, V20, V2010, V2020',
        marca: 'VICKERS',
        categoria: 'bombas',
        subcategoria: 'bombas-vickers-palhetas',
        tipo: 'produto-normal',
        descricao: 'Com uma ampla gama de deslocamentos, as bombas de palhetas quadradas Vickers-Danfoss são projetadas para operar em uma variedade de aplicações industriais e móveis de baixa a média pressão. Oferecendo opções de bomba simples e dupla, nossas bombas de palhetas quadradas são amplamente utilizadas como bombas piloto e auxiliares em sistemas industriais complexos, sendo também comuns em caminhões pesados e ônibus interestaduais.',
        especificacoes: [
            'Tecnologia - Palhetas',
            'Deslocamento – 3 - 42 cm³/rot',
            'Classificação de pressão contínua – V10/V20 até 172 bar',
        ],
        aplicacoes: [
            'Máquinas industriais',
            'Sistemas de movimentação',
            'Equipamentos de construção',
            'Prensas hidráulicas'
        ],
        imagem: 'img/produtos/bomba-vickers-v10.jpg',
        documentacao: 'https://assets.danfoss.com/documents/latest/238666/BC443078226453en-000101.pdf'
    },
    {
        id: 'bomba-vickers-v20-1p',
        nome: 'Bomba de palhetas 20V, 25V, 35V... 4520V, 4525V, 4535V',
        marca: 'VICKERS',
        categoria: 'bombas',
        subcategoria: 'bombas-vickers-palhetas',
        tipo: 'produto-normal',
        descricao: 'Com uma ampla gama de deslocamentos, as bombas de palhetas 20V, 25V, 35V, 45V, 2520V, 3520V, 3525V, 4520V, 4525V e 4535V são projetadas para trabalhar em uma variedade de aplicações móveis e industriais de baixa a média pressão.',
        especificacoes: [
            'Tecnologia - Palhetas',
            'Tamanhos de quadro: 20 V, 25 V, 35 V, 45 V, 50 V',
            'Acionamento direto: 25VT, 35VT, 45VT',
            'Deslocamento –  7 - 193 cc (1,1 a 11,6 pol³ )',
            'Classificação de pressão contínua – Até 207 bar'
        ],
        aplicacoes: [
            'Injetoras de plástico',
            'Máquinas-ferramenta',
            'Sistemas de alta pressão',
            'Equipamentos móveis'
        ],
        imagem: 'img/produtos/bomba-vickers-v20.jpg',
        documentacao: 'https://assets.danfoss.com/documents/latest/238665/BC443076030451en-000101.pdf'
    },

    // Bombas VICKERS - Pistões (2 produtos)
    {
        id: 'bomba-vickers-pv046',
        nome: 'Bomba de pistões PVQ',
        marca: 'VICKERS',
        categoria: 'bombas',
        subcategoria: 'bombas-vickers-pistoes',
        tipo: 'produto-normal',
        descricao: 'As bombas de pistão PVQ são unidades em linha de deslocamento variável e operam com baixos níveis de ruído, normalmente inferiores ao ruído do motor elétrico que as aciona. O deslocamento é variado por meio de controles de pressão e/ou compensação de fluxo, enquanto uma variedade de opções de controle oferece máxima flexibilidade operacional.',
        especificacoes: [
            'O ruído é reduzido por um arranjo de tempo patenteado que também produz “pulsos” de baixa pressão no fluxo',
            'Capaz de operar com fluidos aquosos e de éster de fosfato, além dos fluidos sintéticos e à base de petróleo típicos.',
            'Disponível em uma configuração de acionamento direto para acomodar uma infinidade de aplicações',
            'Tecnologia- Pistão',
            'Deslocamentos de 10 a 45 cm³/rev.',
            'Classificações de pressão contínua de até 210 bar.'
        ],
        aplicacoes: [
            'Sistemas de alta pressão',
            'Máquinas de moldagem',
            'Equipamentos de teste',
            'Sistemas de potência'
        ],
        imagem: 'img/produtos/bomba-vickers-pv046.jpg',
        documentacao: 'https://assets.danfoss.com/documents/359050/BC473461235761en-000101.pdf'
    },
    {
        id: 'bomba-vickers-pv092',
        nome: 'Bomba de pistões PVH',
        marca: 'VICKERS',
        categoria: 'bombas',
        subcategoria: 'bombas-vickers-pistoes',
        tipo: 'produto-normal',
        descricao: 'A bomba de pistão da série PVH da Vickers-Danfoss é uma bomba de deslocamento positivo projetada para aplicações de alta pressão. Ela apresenta um design compacto e leve, facilitando a instalação em espaços apertados. A bomba tem uma pressão operacional máxima de 350 bar e uma faixa de deslocamento de 57 a 141 cc/rev. Uma das características mais notáveis da bomba de pistão da série PVH da Vickers é seu design avançado. A bomba apresenta um design exclusivo de placa oscilante que permite o controle preciso da vazão, tornando-a ideal para aplicações que exigem controle preciso da vazão. Ela também tem uma estrutura modular que facilita a manutenção e o reparo.',
        especificacoes: [
            'Alta Eficiência',
            'Controle Preciso',
            'Design Compacto'
        ],
        aplicacoes: [
            'Grandes prensas',
            'Equipamentos de mineração',
            'Sistemas navais',
            'Usinas siderúrgicas'
        ],
        imagem: 'img/produtos/bomba-vickers-pv092.jpg',
        documentacao: 'https://www.cmhydraulic.it/wp-content/uploads/catalogo-pompe-oleodinamiche-PVH.pdf'
    },

    // Produtos de submenu - Bombas (3 produtos)
    {
        id: 'bomba-danfoss-s45',
        nome: 'Bombas DANFOSS série S45',
        marca: 'DANFOSS',
        categoria: 'bombas',
        subcategoria: 'bombas-danfoss',
        tipo: 'produto-submenu',
        descricao: 'As bombas da Série 45 são uma alternativa de alta eficiência às bombas de circuito aberto tradicionais. Cada tamanho é exclusivamente projetado para otimizar o desempenho, o tamanho e o custo, ao mesmo tempo em que atende aos exigentes requisitos do mercado de equipamentos móveis e industriais.',
        especificacoes: [
            'Deslocamentos de 25 à 147 cm³/ver',
            'Rotações até 3600 rpm',
            'Pressões Máximas de até 400 bar',
            'Pressões Continuas de até 310 bar (4500 psi)'
        ],
        aplicacoes: [
            'Máquinas móveis',
            'Equipamentos agrícolas',
            'Máquinas de construção',
            'Sistemas hidrostáticos'
        ],
        imagem: 'img/produtos/bomba-danfoss-s45.jpg',
        documentacao: 'https://www.bibus.hu/fileadmin/editors/countries/bihun/product_data/hydraulics/documents/Danfoss_Series_45_Technical_Information.pdf'
    },
    {
        id: 'bomba-a10vso',
        nome: 'Bombas de pistões série A10VSO',
        marca: 'REXROTH',
        categoria: 'bombas',
        subcategoria: 'bombas-rexroth',
        tipo: 'produto-submenu',
        descricao: 'Bombas de pistões de vazão variável.',
        especificacoes: [
            'Deslocamento de 18 à 140 cm³',
            'Pressões de até 200 bar'
        ],
        aplicacoes: [
            'Máquinas industriais',
            'Equipamentos móveis',
            'Sistemas de potência',
            'Aplicações navais'
        ],
        imagem: 'img/produtos/bomba-a10vso.jpg',
        documentacao: 'https://midia.automaxautomacao.com.br/2018/03/rp_92711.pdf'
    },
    {
        id: 'bomba-engrenagens-s',
        nome: 'Bombas Engrenagens série "S"',
        marca: 'HIDRAULTEC',
        categoria: 'bombas',
        subcategoria: 'bombas-engrenagens',
        tipo: 'produto-submenu',
        descricao: 'Bombas de engrenagens série Aluminibeta, deslocamentos de 2 à 26 cm³, pressões máximas de 280 bar. Flange fixação SAE A2, eixo diâmetro 18 mm, rotação horária, pórticos 3/4"NPT. Para outros deslocamentos e características construtivas consultar Hidraultec.',
        especificacoes: [
            'Pressão máxima: 250 bar',
            'Vazão: 1 a 100 l/min',
            'Construção robusta',
            'Baixa manutenção',
            'Custo-benefício excelente'
        ],
        aplicacoes: [
            'Sistemas auxiliares',
            'Equipamentos agrícolas',
            'Máquinas simples',
            'Aplicações de baixa pressão'
        ],
        imagem: 'img/produtos/bomba-engrenagens-s.jpg'
    },

    // CILINDROS HIDRÁULICOS (9 produtos)
    // Cilindros VICKERS (4 produtos)
    {
        id: 'cilindro-vickers-mh',
        nome: 'Cilindro série TV',
        marca: 'VICKERS',
        categoria: 'cilindros',
        subcategoria: 'cilindros-vickers',
        tipo: 'produto-normal',
        fabricante: 'HIDRAULTEC',
        descricao: 'Cilindro hidráulico de haste simples para aplicações industriais gerais.',
        especificacoes: [
            'Intercambiáveis conforme ISO 6020-2 e DIN 24554',
            'Pressão nominal: 160 bar Hidráulica',
            'Pressão de trabalho: Até 210 bar Hidráulica'
        ],
        aplicacoes: [
            'Prensas hidráulicas',
            'Máquinas industriais',
            'Equipamentos de movimentação',
            'Sistemas de automação'
        ],
        imagem: 'img/produtos/cilindro-vickers-mh.jpg',
        documentacao: 'https://www.jahidraulica.com.br/pdf/serie-tv.pdf'
    },
    {
        id: 'cilindro-vickers-mhp',
        nome: 'Cilindro série TZ',
        marca: 'VICKERS',
        categoria: 'cilindros',
        subcategoria: 'cilindros-vickers',
        tipo: 'produto-normal',
        fabricante: 'HIDRAULTEC',
        descricao: 'Cilindro hidráulico de alta pressão para aplicações exigentes.',
        especificacoes: [
            'ANSI B93.15/NFPA Intercambiável',
            'Pressão nominal: 3000 psi (210 bar)'
        ],
        aplicacoes: [
            'Prensas de alta pressão',
            'Equipamentos pesados',
            'Sistemas de teste',
            'Aplicações críticas'
        ],
        imagem: 'img/produtos/cilindro-vickers-mhp.jpg',
        documentacao: 'https://www.jahidraulica.com.br/pdf/serie-tz.pdf'
    },
    {
        id: 'cilindro-vickers-mht',
        nome: 'Cilindro série W30',
        marca: 'VICKERS',
        categoria: 'cilindros',
        subcategoria: 'cilindros-vickers',
        tipo: 'produto-normal',
        fabricante: 'HIDRAULTEC',
        descricao: 'Cilindro hidráulico telescópico para aplicações com grande curso.',
        especificacoes: [
            'Pressão máxima: 210 bar',
            'Estágios: 2 a 5',
            'Curso total: até 8000 mm',
            'Construção compacta',
            'Sincronização automática'
        ],
        aplicacoes: [
            'Caminhões basculantes',
            'Elevadores hidráulicos',
            'Equipamentos móveis',
            'Sistemas de elevação'
        ],
        imagem: 'img/produtos/cilindro-vickers-mht.jpg',
        documentacao: 'docs/cilindro-vickers-mht.pdf'
    },
    {
        id: 'cilindro-vickers-mhd',
        nome: 'Cilindro série W32',
        marca: 'VICKERS',
        categoria: 'cilindros',
        subcategoria: 'cilindros-vickers',
        tipo: 'produto-normal',
        fabricante: 'HIDRAULTEC',
        descricao: 'Cilindro hidráulico de dupla ação para aplicações reversíveis.',
        especificacoes: [
            'Pressão máxima: 250 bar',
            'Diâmetro: 25 a 200 mm',
            'Curso: até 2500 mm',
            'Dupla ação',
            'Amortecimento disponível'
        ],
        aplicacoes: [
            'Máquinas-ferramenta',
            'Sistemas de posicionamento',
            'Equipamentos de automação',
            'Aplicações reversíveis'
        ],
        imagem: 'img/produtos/cilindro-vickers-mhd.jpg',
        documentacao: 'docs/cilindro-vickers-mhd.pdf'
    },
    {
        id: 'cilindro-vickers-mh',
        nome: 'Cilindro série W34',
        marca: 'VICKERS',
        categoria: 'cilindros',
        subcategoria: 'cilindros-vickers',
        tipo: 'produto-normal',
        fabricante: 'HIDRAULTEC',
        descricao: 'Cilindro hidráulico de haste simples para aplicações industriais gerais.',
        especificacoes: [
            'Intercambiáveis conforme ISO 6020-2 e DIN 24554',
            'Pressão nominal: 160 bar Hidráulica',
            'Pressão de trabalho: Até 210 bar Hidráulica'
        ],
        aplicacoes: [
            'Prensas hidráulicas',
            'Máquinas industriais',
            'Equipamentos de movimentação',
            'Sistemas de automação'
        ],
        imagem: 'img/produtos/cilindro-vickers-mh.jpg',
        documentacao: 'https://www.jahidraulica.com.br/pdf/serie-tv.pdf'
    },

    // Cilindros Rexroth (4 produtos)
    {
        id: 'cilindro-rexroth-cdt3',
        nome: 'Cilindro CDT3',
        marca: 'Tipo REXROTH',
        categoria: 'cilindros',
        subcategoria: 'cilindros-rexroth',
        tipo: 'produto-normal',
        fabricante: 'HIDRAULTEC',
        descricao: 'Cilindro hidráulico compacto para aplicações industriais.',
        especificacoes: [
            'Norma ISO6022',
            'Pressão nominal: 160 bar',
            'Diâmetro do pistão: 25 a 200 mm',
            'Curso máximo: 3000 mm'
        ],
        aplicacoes: [
            'Máquinas compactas',
            'Equipamentos leves',
            'Sistemas de automação',
            'Aplicações móveis'
        ],
        imagem: 'img/produtos/cilindro-rexroth-cdt3.jpg',
        documentacao: 'https://midia.automaxautomacao.com.br/2018/03/rp_17032_05_00_11-09.pdf'
    },
    {
        id: 'cilindro-rexroth-cdt4',
        nome: 'Cilindro CDH2',
        marca: 'Tipo REXROTH',
        categoria: 'cilindros',
        subcategoria: 'cilindros-rexroth',
        tipo: 'produto-normal',
        fabricante: 'HIDRAULTEC',
        descricao: 'Cilindro hidráulico de média pressão para uso geral.',
        especificacoes: [
            'Normas: DIN 24333, ISO 6022',
            'Pressão nominal: 250 bar',
            'Diâmetro do êmbolo: 40 a 320 mm',
            'Curso máximo : 6000 mm'
        ],
        aplicacoes: [
            'Equipamentos industriais',
            'Máquinas de produção',
            'Sistemas hidráulicos',
            'Aplicações gerais'
        ],
        imagem: 'img/produtos/cilindro-rexroth-cdt4.jpg',
        documentacao: 'https://midia.automaxautomacao.com.br/2018/03/rp17334_2007-10.pdf'
    },
    {
        id: 'cilindro-rexroth-cdt5',
        nome: 'Cilindro CDL1',
        marca: 'Tipo REXROTH',
        categoria: 'cilindros',
        subcategoria: 'cilindros-rexroth',
        tipo: 'produto-normal',
        fabricante: 'HIDRAULTEC',
        descricao: 'Cilindro hidráulico de alta pressão para aplicações pesadas.',
        especificacoes: [
            'Norma ISSO 3320',
            'Pressão nominal: 160 bar e 240 bar',
            'Diâmetro do pistão: 25 a 200 mm',
            'Curso máximo: 6000 mm'
        ],
        aplicacoes: [
            'Equipamentos pesados',
            'Prensas industriais',
            'Sistemas de alta pressão',
            'Aplicações críticas'
        ],
        imagem: 'img/produtos/cilindro-rexroth-cdt5.jpg',
        documentacao: 'https://www.cmafh.com/images/Master%20PDFs/BRH%20CYL/Rexroth%20CDL1%20(160%20Bar)%20(ISO%203320)%20-%20%20re17325_2009-07.pdf'
    },

    // Produto de submenu - Cilindros (1 produto)
    {
        id: 'cilindros-especiais',
        nome: 'Cilindros especiais',
        marca: 'HIDRAULTEC',
        categoria: 'cilindros',
        subcategoria: 'cilindros-especiais',
        tipo: 'produto-submenu',
        fabricante: 'HIDRAULTEC',
        descricao: 'Projetamos e desenvolvemos projetos especiais, para os mais diversos segmentos industriais, siderúrgicos e navais; em inox, magnéticos, sensores de posição e pressão, quadrados HPS), com acessórios especiais.',
        especificacoes: [
            'Projeto sob medida',
            'Pressão: até 500 bar',
            'Diâmetros especiais',
            'Materiais especiais',
            'Vedações customizadas'
        ],
        aplicacoes: [
            'Projetos especiais',
            'Aplicações únicas',
            'Equipamentos customizados',
            'Soluções sob medida'
        ],
        imagem: 'img/produtos/cilindros-especiais.jpg'
    },

    // VÁLVULAS HIDRÁULICAS (42 produtos)
    // Direcionais VICKERS (4 produtos)
    {
        id: 'valvula-direcional-dg4v-3',
        nome: 'Válvula direcional DG4V-3 (TN06)',
        marca: 'VICKERS',
        categoria: 'valvulas',
        subcategoria: 'direcionais-vickers',
        tipo: 'produto-normal',
        descricao: 'Válvula direcional 4/3 vias para controle de direção de cilindros.',
        especificacoes: [
            'Pressão máxima: 315 bar',
            'Vazão: até 60 l/min',
            'Acionamento: solenóide',
            'Posições: 4/3 vias',
            'Montagem: subplaca'
        ],
        aplicacoes: [
            'Controle de cilindros',
            'Sistemas direcionais',
            'Máquinas industriais',
            'Equipamentos móveis'
        ],
        imagem: 'img/produtos/valvula-dg4v-3.jpg',
        documentacao: 'https://assets.danfoss.com/documents/latest/431712/BC427967366368en-000102.pdf'
    },
    {
        id: 'valvula-direcional-dg4v-5',
        nome: 'Válvula direcional DG4V-5 (TN10)',
        marca: 'VICKERS',
        categoria: 'valvulas',
        subcategoria: 'direcionais-vickers',
        tipo: 'produto-normal',
        descricao: 'Válvula direcional de alta vazão para aplicações industriais.',
        especificacoes: [
            'Pressão máxima: 315 bar',
            'Vazão: até 120 l/min',
            'Acionamento: solenóide/piloto',
            'Resposta rápida',
            'Baixo vazamento interno'
        ],
        aplicacoes: [
            'Sistemas de alta vazão',
            'Prensas hidráulicas',
            'Equipamentos pesados',
            'Aplicações industriais'
        ],
        imagem: 'img/produtos/valvula-dg4v-5.jpg',
        documentacao: 'https://assets.danfoss.com/documents/latest/429457/BC442274655179en-000102.pdf'
    },
    {
        id: 'valvula-direcional-dg5v',
        nome: 'Válvula direcional DG5V-7 (TN16)',
        marca: 'VICKERS',
        categoria: 'valvulas',
        subcategoria: 'direcionais-vickers',
        tipo: 'produto-normal',
        descricao: 'Válvula direcional servo-controlada de alta performance.',
        especificacoes: [
            'Pressão máxima: 350 bar',
            'Vazão: até 200 l/min',
            'Controle servo',
            'Alta precisão',
            'Resposta dinâmica'
        ],
        aplicacoes: [
            'Sistemas servo',
            'Controle preciso',
            'Máquinas CNC',
            'Aplicações críticas'
        ],
        imagem: 'img/produtos/valvula-dg5v.jpg',
        documentacao: 'https://assets.danfoss.com/documents/latest/431707/BC439478752116en-000103.pdf'
    },
    {
        id: 'valvula-direcional-dg17v',
        nome: 'Válvula direcional DG5V-8 (TN25)',
        marca: 'VICKERS',
        categoria: 'valvulas',
        subcategoria: 'direcionais-vickers',
        tipo: 'produto-normal',
        descricao: 'Válvula direcional de grande porte para alta vazão.',
        especificacoes: [
            'Pressão máxima: 315 bar',
            'Vazão: até 400 l/min',
            'Acionamento piloto',
            'Construção robusta',
            'Longa vida útil'
        ],
        aplicacoes: [
            'Sistemas de grande porte',
            'Equipamentos pesados',
            'Aplicações industriais',
            'Alta vazão'
        ],
        imagem: 'img/produtos/valvula-dg17v.jpg',
        documentacao: 'https://assets.danfoss.com/documents/latest/354035/BC439577031919en-000103.pdf'
    },

    // Modulares VICKERS (6 produtos)
    {
        id: 'valvula-modular-sm4-10',
        nome: 'Controles de Fluxo',
        marca: 'VICKERS',
        categoria: 'valvulas',
        subcategoria: 'modulares-vickers',
        tipo: 'produto-normal',
        descricao: 'Válvula modular empilhável para sistemas flexíveis.',
        especificacoes: [
            'Pressão máxima: 315 bar',
            'Vazão: até 60 l/min',
            'Montagem empilhável',
            'Múltiplas funções',
            'Configuração flexível'
        ],
        aplicacoes: [
            'Sistemas modulares',
            'Configurações flexíveis',
            'Máquinas especiais',
            'Aplicações customizadas'
        ],
        imagem: 'img/produtos/valvula-sm4-10.jpg',
        documentacao: 'https://assets.danfoss.com/documents/latest/211890/BC430856919687en-000101.pdf'
    },
    {
        id: 'valvula-modular-sm4-20',
        nome: 'Retenções Pilotadas',
        marca: 'VICKERS',
        categoria: 'valvulas',
        subcategoria: 'modulares-vickers',
        tipo: 'produto-normal',
        descricao: 'Válvula modular de média vazão para aplicações industriais.',
        especificacoes: [
            'Pressão máxima: 315 bar',
            'Vazão: até 120 l/min',
            'Sistema modular',
            'Fácil manutenção',
            'Versatilidade'
        ],
        aplicacoes: [
            'Sistemas industriais',
            'Máquinas de produção',
            'Equipamentos móveis',
            'Aplicações versáteis'
        ],
        imagem: 'img/produtos/valvula-sm4-20.jpg',
        documentacao: 'https://assets.danfoss.com/documents/latest/211890/BC430856919687en-000101.pdf'
    },
    {
        id: 'valvula-modular-sm4-30',
        nome: 'Redutoras de Pressão',
        marca: 'VICKERS',
        categoria: 'valvulas',
        subcategoria: 'modulares-vickers',
        tipo: 'produto-normal',
        descricao: 'Válvula modular de alta vazão para sistemas complexos.',
        especificacoes: [
            'Pressão máxima: 315 bar',
            'Vazão: até 200 l/min',
            'Alta vazão',
            'Modularidade',
            'Confiabilidade'
        ],
        aplicacoes: [
            'Sistemas complexos',
            'Alta vazão',
            'Equipamentos pesados',
            'Aplicações industriais'
        ],
        imagem: 'img/produtos/valvula-sm4-30.jpg',
        documentacao: 'https://assets.danfoss.com/documents/latest/211890/BC430856919687en-000101.pdf'
    },

    // Pressão VICKERS (6 produtos)
    {
        id: 'valvula-pressao-ct-06',
        nome: 'Reguladoras/Limitadores',
        marca: 'VICKERS',
        categoria: 'valvulas',
        subcategoria: 'pressao-vickers',
        tipo: 'produto-normal',
        descricao: 'Válvula de alívio de pressão para proteção do sistema.',
        especificacoes: [
            'Pressão de ajuste: 10-315 bar',
            'Vazão: até 60 l/min',
            'Ajuste externo',
            'Resposta rápida',
            'Vedação confiável'
        ],
        aplicacoes: [
            'Proteção de sistema',
            'Controle de pressão',
            'Segurança hidráulica',
            'Aplicações gerais'
        ],
        imagem: 'img/produtos/valvula-ct-06.jpg',
        documentacao: 'https://assets.danfoss.com/documents/latest/283350/AX456959557997en-000101.pdf'
    },
    {
        id: 'valvula-pressao-ct-10',
        nome: 'Redutoras de pressão',
        marca: 'VICKERS',
        categoria: 'valvulas',
        subcategoria: 'pressao-vickers',
        tipo: 'produto-normal',
        descricao: 'Válvula de alívio de pressão de média vazão.',
        especificacoes: [
            'Pressão de ajuste: 10-315 bar',
            'Vazão: até 120 l/min',
            'Piloto interno',
            'Estabilidade',
            'Baixo vazamento'
        ],
        aplicacoes: [
            'Sistemas médios',
            'Proteção de circuito',
            'Controle de pressão',
            'Aplicações industriais'
        ],
        imagem: 'img/produtos/valvula-ct-10.jpg',
        documentacao: 'https://assets.danfoss.com/documents/latest/239904/BC444178469051en-000101.pdf'
    },
    {
        id: 'valvula-pressao-ct-16',
        nome: 'Seqüênciais',
        marca: 'VICKERS',
        categoria: 'valvulas',
        subcategoria: 'pressao-vickers',
        tipo: 'produto-normal',
        descricao: 'Válvula de alívio de pressão de alta vazão.',
        especificacoes: [
            'Pressão de ajuste: 10-315 bar',
            'Vazão: até 200 l/min',
            'Alta vazão',
            'Controle preciso',
            'Durabilidade'
        ],
        aplicacoes: [
            'Sistemas de alta vazão',
            'Equipamentos pesados',
            'Proteção principal',
            'Aplicações críticas'
        ],
        imagem: 'img/produtos/valvula-ct-16.jpg',
        documentacao: 'https://assets.danfoss.com/documents/latest/239904/BC444178469051en-000101.pdf'
    },
    {
        id: 'valvula-pressao-cg-06',
        nome: 'Cartuchos screw-in',
        marca: 'VICKERS',
        categoria: 'valvulas',
        subcategoria: 'pressao-vickers',
        tipo: 'produto-normal',
        descricao: 'Válvula de pressão cartucho para montagem em bloco.',
        especificacoes: [
            'Pressão de ajuste: 10-350 bar',
            'Vazão: até 60 l/min',
            'Montagem cartucho',
            'Compacta',
            'Fácil manutenção'
        ],
        aplicacoes: [
            'Blocos hidráulicos',
            'Sistemas compactos',
            'Montagem especial',
            'Aplicações móveis'
        ],
        imagem: 'img/produtos/valvula-cg-06.jpg',
        documentacao: 'https://www.atphydraulik.ch/uploads/downloads/ventile/Screw-In_Cartridge_Valves_E1-VLSC_Complete.pdf'
    },

    // Vazão VICKERS (6 produtos)
    {
        id: 'valvula-vazao-fcg-02',
        nome: 'Série FN',
        marca: 'VICKERS',
        categoria: 'valvulas',
        subcategoria: 'vazao-vickers',
        tipo: 'produto-normal',
        descricao: 'Válvula reguladora de vazão para controle de velocidade.',
        especificacoes: [
            'Vazão: 1 a 20 l/min',
            'Pressão máxima: 315 bar',
            'Ajuste manual',
            'Compensação de pressão',
            'Precisão de controle'
        ],
        aplicacoes: [
            'Controle de velocidade',
            'Sistemas de posicionamento',
            'Máquinas-ferramenta',
            'Aplicações precisas'
        ],
        imagem: 'img/produtos/valvula-fcg-02.jpg',
        documentacao: 'https://assets.danfoss.com/documents/latest/284598/BC459500904161en-000101.pdf'
    },
    {
        id: 'valvula-vazao-fcg-03',
        nome: 'Série FCG',
        marca: 'VICKERS',
        categoria: 'valvulas',
        subcategoria: 'vazao-vickers',
        tipo: 'produto-normal',
        descricao: 'Válvula reguladora de vazão de tamanho médio.',
        especificacoes: [
            'Vazão: 5 a 60 l/min',
            'Pressão máxima: 315 bar',
            'Compensação automática',
            'Estabilidade',
            'Baixa histerese'
        ],
        aplicacoes: [
            'Sistemas médios',
            'Controle de velocidade',
            'Equipamentos industriais',
            'Aplicações gerais'
        ],
        imagem: 'img/produtos/valvula-fcg-03.jpg',
        documentacao: 'https://assets.danfoss.com/documents/latest/242728/BC446160385224en-000101.pdf'
    },

    // Produto de submenu - Retenções (1 produto)
    {
        id: 'retencoes-dt8p1',
        nome: 'Retenções VICKERS série DT8P1',
        marca: 'VICKERS',
        categoria: 'valvulas',
        subcategoria: 'retencoes-vickers',
        tipo: 'produto-submenu',
        descricao: 'Válvulas de retenção para evitar refluxo em sistemas hidráulicos.',
        especificacoes: [
            'Pressão máxima: 350 bar',
            'Vazão: até 200 l/min',
            'Abertura: 0,5 bar',
            'Vedação total',
            'Baixa perda de carga'
        ],
        aplicacoes: [
            'Prevenção de refluxo',
            'Proteção de bomba',
            'Sistemas de segurança',
            'Circuitos hidráulicos'
        ],
        imagem: 'img/produtos/retencoes-dt8p1.jpg',
        documentacao: 'https://assets.danfoss.com/documents/latest/238595/BC442660888291en-000101.pdf'
    },

    // Proporcionais VICKERS (4 produtos)
    {
        id: 'valvula-proporcional-kbdg4v',
        nome: 'Proporcionais pressão KCG-3',
        marca: 'VICKERS',
        categoria: 'valvulas',
        subcategoria: 'proporcionais-vickers',
        tipo: 'produto-normal',
        descricao: 'Válvula direcional proporcional para controle preciso.',
        especificacoes: [
            'Pressão máxima: 315 bar',
            'Vazão: até 60 l/min',
            'Controle proporcional',
            'Resposta linear',
            'Alta precisão'
        ],
        aplicacoes: [
            'Controle preciso',
            'Sistemas servo',
            'Máquinas CNC',
            'Aplicações críticas'
        ],
        imagem: 'img/produtos/valvula-kbdg4v.jpg',
        documentacao: 'https://assets.danfoss.com/documents/latest/418270/BC451879228794en-000201.pdf'
    },
    {
        id: 'valvula-proporcional-kbdg5v',
        nome: 'Proporcionais pressão KCG-6/8',
        marca: 'VICKERS',
        categoria: 'valvulas',
        subcategoria: 'proporcionais-vickers',
        tipo: 'produto-normal',
        descricao: 'Válvula direcional proporcional de alta vazão.',
        especificacoes: [
            'Pressão máxima: 315 bar',
            'Vazão: até 120 l/min',
            'Alta vazão',
            'Controle eletrônico',
            'Resposta dinâmica'
        ],
        aplicacoes: [
            'Sistemas de alta vazão',
            'Controle avançado',
            'Equipamentos pesados',
            'Aplicações industriais'
        ],
        imagem: 'img/produtos/valvula-kbdg5v.jpg',
        documentacao: 'https://assets.danfoss.com/documents/latest/437920/BC457577804425en-000201.pdf'
    },
    {
        id: 'valvula-proporcional-kbcg-06',
        nome: 'Proporcionais KDG4V-3',
        marca: 'VICKERS',
        categoria: 'valvulas',
        subcategoria: 'proporcionais-vickers',
        tipo: 'produto-normal',
        descricao: 'Válvula de pressão proporcional para controle de força.',
        especificacoes: [
            'Pressão: 10-315 bar',
            'Vazão: até 60 l/min',
            'Controle de pressão',
            'Resposta rápida',
            'Precisão elevada'
        ],
        aplicacoes: [
            'Controle de força',
            'Sistemas de pressão',
            'Aplicações precisas',
            'Equipamentos especiais'
        ],
        imagem: 'img/produtos/valvula-kbcg-06.jpg',
        documentacao: 'https://assets.danfoss.com/documents/latest/283353/BC456076143594en-000101.pdf'
    },
    {
        id: 'valvula-proporcional-kbfcg-06',
        nome: 'Proporcionais KBDG4V-3',
        marca: 'VICKERS',
        categoria: 'valvulas',
        subcategoria: 'proporcionais-vickers',
        tipo: 'produto-normal',
        descricao: 'Válvula de vazão proporcional para controle de velocidade.',
        especificacoes: [
            'Vazão: 1-60 l/min',
            'Pressão máxima: 315 bar',
            'Controle de velocidade',
            'Compensação automática',
            'Linearidade'
        ],
        aplicacoes: [
            'Controle de velocidade',
            'Sistemas precisos',
            'Máquinas especiais',
            'Aplicações avançadas'
        ],
        imagem: 'img/produtos/valvula-kbfcg-06.jpg',
        documentacao: 'https://assets.danfoss.com/documents/latest/239896/BC444157381041en-000101.pdf'
    },
    {
        id: 'valvula-proporcional-kbfcg-06',
        nome: 'Proporcionais KBFDG4V-3',
        marca: 'VICKERS',
        categoria: 'valvulas',
        subcategoria: 'proporcionais-vickers',
        tipo: 'produto-normal',
        descricao: 'Válvula de vazão proporcional para controle de velocidade.',
        especificacoes: [
            'Vazão: 1-60 l/min',
            'Pressão máxima: 315 bar',
            'Controle de velocidade',
            'Compensação automática',
            'Linearidade'
        ],
        aplicacoes: [
            'Controle de velocidade',
            'Sistemas precisos',
            'Máquinas especiais',
            'Aplicações avançadas'
        ],
        imagem: 'img/produtos/valvula-kbfcg-06.jpg',
        documentacao: 'https://assets.danfoss.com/documents/latest/465370/BC444061850959en-000102.pdf'
    },
    {
        id: 'valvula-proporcional-kbfcg-06',
        nome: 'Proporcionais KDG4V-5',
        marca: 'VICKERS',
        categoria: 'valvulas',
        subcategoria: 'proporcionais-vickers',
        tipo: 'produto-normal',
        descricao: 'Válvula de vazão proporcional para controle de velocidade.',
        especificacoes: [
            'Vazão: 1-60 l/min',
            'Pressão máxima: 315 bar',
            'Controle de velocidade',
            'Compensação automática',
            'Linearidade'
        ],
        aplicacoes: [
            'Controle de velocidade',
            'Sistemas precisos',
            'Máquinas especiais',
            'Aplicações avançadas'
        ],
        imagem: 'img/produtos/valvula-kbfcg-06.jpg',
        documentacao: 'https://assets.danfoss.com/documents/latest/248900/BC449667374161en-000101.pdf'
    },
    {
        id: 'valvula-proporcional-kbfcg-06',
        nome: 'Proporcionais KBDG4V-5',
        marca: 'VICKERS',
        categoria: 'valvulas',
        subcategoria: 'proporcionais-vickers',
        tipo: 'produto-normal',
        descricao: 'Válvula de vazão proporcional para controle de velocidade.',
        especificacoes: [
            'Vazão: 1-60 l/min',
            'Pressão máxima: 315 bar',
            'Controle de velocidade',
            'Compensação automática',
            'Linearidade'
        ],
        aplicacoes: [
            'Controle de velocidade',
            'Sistemas precisos',
            'Máquinas especiais',
            'Aplicações avançadas'
        ],
        imagem: 'img/produtos/valvula-kbfcg-06.jpg',
        documentacao: 'https://assets.danfoss.com/documents/latest/283863/BC446960925173en-000103.pdf'
    },
    {
        id: 'valvula-proporcional-kbfcg-06',
        nome: 'Proporcionais KBFDG4V-5',
        marca: 'VICKERS',
        categoria: 'valvulas',
        subcategoria: 'proporcionais-vickers',
        tipo: 'produto-normal',
        descricao: 'Válvula de vazão proporcional para controle de velocidade.',
        especificacoes: [
            'Vazão: 1-60 l/min',
            'Pressão máxima: 315 bar',
            'Controle de velocidade',
            'Compensação automática',
            'Linearidade'
        ],
        aplicacoes: [
            'Controle de velocidade',
            'Sistemas precisos',
            'Máquinas especiais',
            'Aplicações avançadas'
        ],
        imagem: 'img/produtos/valvula-kbfcg-06.jpg',
        documentacao: 'https://assets.danfoss.com/documents/latest/465370/BC444061850959en-000102.pdf'
    },
        {
        id: 'valvula-proporcional-kbfcg-06',
        nome: 'Plugs eletrônicos',
        marca: 'VICKERS',
        categoria: 'valvulas',
        subcategoria: 'proporcionais-vickers',
        tipo: 'produto-normal',
        descricao: 'Válvula de vazão proporcional para controle de velocidade.',
        especificacoes: [
            'Vazão: 1-60 l/min',
            'Pressão máxima: 315 bar',
            'Controle de velocidade',
            'Compensação automática',
            'Linearidade'
        ],
        aplicacoes: [
            'Controle de velocidade',
            'Sistemas precisos',
            'Máquinas especiais',
            'Aplicações avançadas'
        ],
        imagem: 'img/produtos/valvula-kbfcg-06.jpg',
        documentacao: 'https://assets.danfoss.com/documents/latest/284583/BC459466554133en-000101.pdf'
    },
        {
        id: 'valvula-proporcional-kbfcg-06',
        nome: 'Cartelas eletrônicas',
        marca: 'VICKERS',
        categoria: 'valvulas',
        subcategoria: 'proporcionais-vickers',
        tipo: 'produto-normal',
        descricao: 'Válvula de vazão proporcional para controle de velocidade.',
        especificacoes: [
            'Vazão: 1-60 l/min',
            'Pressão máxima: 315 bar',
            'Controle de velocidade',
            'Compensação automática',
            'Linearidade'
        ],
        aplicacoes: [
            'Controle de velocidade',
            'Sistemas precisos',
            'Máquinas especiais',
            'Aplicações avançadas'
        ],
        imagem: 'img/produtos/valvula-kbfcg-06.jpg',
        documentacao: '\\hidraultec-srv\COMERCIAL\Catálogos\Teknimas'
    },

    // Comandos DANFOSS (4 produtos)
    {
        id: 'comando-danfoss-ospc',
        nome: 'Comandos PVG032',
        marca: 'DANFOSS',
        categoria: 'valvulas',
        subcategoria: 'comandos-danfoss',
        tipo: 'produto-normal',
        descricao: 'Comando hidráulico orbital para máquinas móveis.',
        especificacoes: [
            'Pressão máxima: 250 bar',
            'Vazão: até 80 l/min',
            'Controle orbital',
            'Múltiplas seções',
            'Baixo esforço'
        ],
        aplicacoes: [
            'Máquinas móveis',
            'Equipamentos agrícolas',
            'Máquinas de construção',
            'Veículos especiais'
        ],
        imagem: 'img/produtos/comando-ospc.jpg',
        documentacao: 'https://assets.danfoss.com/documents/latest/406946/BC152886483664en-001602.pdf'
    },
    {
        id: 'comando-danfoss-osqc',
        nome: 'Comandos PVG100',
        marca: 'DANFOSS',
        categoria: 'valvulas',
        subcategoria: 'comandos-danfoss',
        tipo: 'produto-normal',
        descricao: 'Comando hidráulico compacto para aplicações leves.',
        especificacoes: [
            'Pressão máxima: 200 bar',
            'Vazão: até 40 l/min',
            'Compacto',
            'Econômico',
            'Fácil instalação'
        ],
        aplicacoes: [
            'Aplicações leves',
            'Máquinas pequenas',
            'Equipamentos compactos',
            'Sistemas simples'
        ],
        imagem: 'img/produtos/comando-osqc.jpg',
        documentacao: 'https://assets.danfoss.com/documents/177108/BC152886483475en-000606.pdf'
    },
    {
        id: 'comando-danfoss-ospb',
        nome: 'Comandos ECO80',
        marca: 'DANFOSS',
        categoria: 'valvulas',
        subcategoria: 'comandos-danfoss',
        tipo: 'produto-normal',
        descricao: 'Comando hidráulico de alta pressão para aplicações pesadas.',
        especificacoes: [
            'Pressão máxima: 350 bar',
            'Vazão: até 120 l/min',
            'Alta pressão',
            'Robustez',
            'Múltiplas funções'
        ],
        aplicacoes: [
            'Aplicações pesadas',
            'Equipamentos industriais',
            'Máquinas de grande porte',
            'Sistemas críticos'
        ],
        imagem: 'img/produtos/comando-ospb.jpg',
        documentacao: 'https://assets.danfoss.com/documents/149589/BC199786485316en-000301.pdf'
    },

    // Linha HIDRAULTEC - Direcionais (2 produtos)
    {
        id: 'valvula-direcional-4wd06',
        nome: 'Direcional 4WE6 (TN06)',
        marca: 'HIDRAULTEC',
        categoria: 'valvulas',
        subcategoria: 'direcionais-hidraultec',
        tipo: 'produto-normal',
        descricao: 'Válvula direcional nacional para aplicações gerais.',
        especificacoes: [
            'Pressão máxima: 250 bar',
            'Vazão: até 60 l/min',
            'Acionamento solenóide',
            'Fabricação nacional',
            'Custo competitivo'
        ],
        aplicacoes: [
            'Aplicações gerais',
            'Sistemas nacionais',
            'Equipamentos padrão',
            'Soluções econômicas'
       ],
        imagem: 'img/produtos/comando-ospb.jpg',
        documentacao: 'https://www.huade.com.br/wp-content/themes/bombas-hidraulicas/motores-hidraulicos/catalogo/valvulas-direcionais/RE23188.pdf'
    },
    {
        id: 'valvula-direcional-4wd10',
        nome: 'Direcional 4WE10 (TN10)',
        marca: 'HIDRAULTEC',
        categoria: 'valvulas',
        subcategoria: 'direcionais-hidraultec',
        tipo: 'produto-normal',
        descricao: 'Válvula direcional nacional de média vazão.',
        especificacoes: [
            'Pressão máxima: 250 bar',
            'Vazão: até 100 l/min',
            'Média vazão',
            'Qualidade nacional',
            'Suporte local'
        ],
        aplicacoes: [
            'Sistemas médios',
            'Aplicações industriais',
            'Equipamentos nacionais',
            'Projetos locais'
        ],
        imagem: 'img/produtos/comando-ospb.jpg',
        documentacao: 'https://www.huade.com.br/wp-content/themes/bombas-hidraulicas/motores-hidraulicos/catalogo/valvulas-direcionais/RE23316.pdf'
    },
    {
        id: 'valvula-direcional-4wd10',
        nome: 'Direcional pilotadas TN10/TN16/TN25',
        marca: 'HIDRAULTEC',
        categoria: 'valvulas',
        subcategoria: 'direcionais-hidraultec',
        tipo: 'produto-normal',
        descricao: 'Válvula direcional nacional de média vazão.',
        especificacoes: [
            'Pressão máxima: 250 bar',
            'Vazão: até 100 l/min',
            'Média vazão',
            'Qualidade nacional',
            'Suporte local'
        ],
        aplicacoes: [
            'Sistemas médios',
            'Aplicações industriais',
            'Equipamentos nacionais',
            'Projetos locais'
        ],
        imagem: 'img/produtos/comando-ospb.jpg',
        documentacao: 'https://www.huade.com.br/wp-content/themes/bombas-hidraulicas/motores-hidraulicos/catalogo/valvulas-direcionais/RE24751.pdf'
    },
    // Linha HIDRAULTEC - Modulares (2 produtos)
    {
        id: 'valvula-modular-sm06',
        nome: 'Controles de Fluxo',
        marca: 'HIDRAULTEC',
        categoria: 'valvulas',
        subcategoria: 'modulares-hidraultec',
        tipo: 'produto-normal',
        descricao: 'Válvula modular nacional para sistemas flexíveis.',
        especificacoes: [
            'Pressão máxima: 250 bar',
            'Vazão: até 60 l/min',
            'Sistema modular',
            'Fabricação nacional',
            'Flexibilidade'
        ],
        aplicacoes: [
            'Sistemas modulares',
            'Projetos nacionais',
            'Configurações flexíveis',
            'Soluções customizadas'
        ],
        imagem: 'img/produtos/comando-ospb.jpg',
        documentacao: 'https://www.huade.com.br/wp-content/themes/bombas-hidraulicas/motores-hidraulicos/catalogo/valvulas-direcionais/RE24751.pdf'
    },
    {
        id: 'valvula-modular-sm10',
        nome: 'Retenções Pilotadas',
        marca: 'HIDRAULTEC',
        categoria: 'valvulas',
        subcategoria: 'modulares-hidraultec',
        tipo: 'produto-normal',
        descricao: 'Válvula modular nacional de média vazão.',
        especificacoes: [
            'Pressão máxima: 250 bar',
            'Vazão: até 100 l/min',
            'Modularidade',
            'Qualidade nacional',
            'Suporte técnico'
        ],
        aplicacoes: [
            'Sistemas nacionais',
            'Aplicações modulares',
            'Projetos especiais',
            'Equipamentos locais'
       ],
        imagem: 'img/produtos/comando-ospb.jpg',
        documentacao: 'https://www.ragi.com.br/img/layout/produtos/arquivos/arquivo_produto_256.pdf'
    },
    {
        id: 'valvula-modular-sm10',
        nome: 'Redutoras de pressão',
        marca: 'HIDRAULTEC',
        categoria: 'valvulas',
        subcategoria: 'modulares-hidraultec',
        tipo: 'produto-normal',
        descricao: 'Válvula modular nacional de média vazão.',
        especificacoes: [
            'Pressão máxima: 250 bar',
            'Vazão: até 100 l/min',
            'Modularidade',
            'Qualidade nacional',
            'Suporte técnico'
        ],
        aplicacoes: [
            'Sistemas nacionais',
            'Aplicações modulares',
            'Projetos especiais',
            'Equipamentos locais'
       ],
        imagem: 'img/produtos/comando-ospb.jpg',
        documentacao: 'https://www.ragi.com.br/img/layout/produtos/arquivos/arquivo_produto_259.pdf'
    },

    // Produtos de submenu - Linha HIDRAULTEC (3 produtos)
    {
        id: 'reguladoras-danfoss-h',
        nome: 'Reguladoras Danfoss "H"',
        marca: 'DANFOSS',
        categoria: 'valvulas',
        subcategoria: 'linha-hidraultec',
        tipo: 'produto-submenu',
        descricao: 'Válvulas reguladoras de pressão da linha H para aplicações especiais.',
        especificacoes: [
            'Pressão: 10-350 bar',
            'Vazão: até 200 l/min',
            'Série H',
            'Alta precisão',
            'Durabilidade superior'
        ],
        aplicacoes: [
            'Controle de pressão',
            'Sistemas especiais',
            'Aplicações críticas',
            'Equipamentos avançados'
        ],
        imagem: 'img/produtos/reguladoras-danfoss-h.jpg',
        documentacao: 'docs/reguladoras-danfoss-h.pdf'
    },
    {
        id: 'vazao-drv',
        nome: 'Vazão série DRV',
        marca: 'HIDRAULTEC',
        categoria: 'valvulas',
        subcategoria: 'linha-hidraultec',
        tipo: 'produto-submenu',
        descricao: 'Válvulas reguladoras de vazão da série DRV nacional.',
        especificacoes: [
            'Vazão: 1-120 l/min',
            'Pressão máxima: 250 bar',
            'Série DRV',
            'Fabricação nacional',
            'Controle preciso'
        ],
        aplicacoes: [
            'Controle de velocidade',
            'Sistemas nacionais',
            'Aplicações industriais',
            'Projetos locais'
        ],
        imagem: 'img/produtos/reguladoras-danfoss-h.jpg',
        documentacao: 'https://midia.automaxautomacao.com.br/2018/03/rp_32502.pdf'
    },
    {
        id: 'retencoes-s10a',
        nome: 'Retenções S10A',
        marca: 'HIDRAULTEC',
        categoria: 'valvulas',
        subcategoria: 'linha-hidraultec',
        tipo: 'produto-submenu',
        descricao: 'Válvulas de retenção da série S10A para sistemas hidráulicos.',
        especificacoes: [
            'Pressão máxima: 250 bar',
            'Vazão: até 100 l/min',
            'Abertura: 0,3 bar',
            'Fabricação nacional',
            'Vedação eficiente'
        ],
        aplicacoes: [
            'Prevenção de refluxo',
            'Sistemas nacionais',
            'Proteção de circuito',
            'Aplicações gerais'
        ],
        imagem: 'https://www.cmafh.com/WebsiteCatalog/Data%20Sheets/BRH%20S/Rexroth%20S%20Check%20Valve%20re20375_2006-12.pdf'
    },

    // Comandos manuais (2 produtos)
    {
        id: 'comando-manual-4wm06',
        nome: 'Comandos P40',
        marca: 'HIDRAULTEC',
        categoria: 'valvulas',
        subcategoria: 'comandos-manuais',
        tipo: 'produto-normal',
        descricao: 'Comando manual para acionamento direto de válvulas.',
        especificacoes: [
            'Pressão máxima: 250 bar',
            'Vazão: até 60 l/min',
            'Acionamento manual',
            'Construção robusta',
            'Operação simples'
        ],
        aplicacoes: [
            'Acionamento manual',
            'Sistemas simples',
            'Operação direta',
            'Aplicações básicas'
        ],
        imagem: 'img/produtos/comando-4wm06.jpg'
    },
    {
        id: 'comando-manual-4wm10',
        nome: 'Comandos P80',
        marca: 'HIDRAULTEC',
        categoria: 'valvulas',
        subcategoria: 'comandos-manuais',
        tipo: 'produto-normal',
        descricao: 'Comando manual de média vazão para aplicações industriais.',
        especificacoes: [
            'Pressão máxima: 250 bar',
            'Vazão: até 100 l/min',
            'Média vazão',
            'Durabilidade',
            'Facilidade de operação'
        ],
        aplicacoes: [
            'Sistemas industriais',
            'Operação manual',
            'Aplicações médias',
            'Controle direto'
        ],
        imagem: 'img/produtos/comando-4wm10.jpg'
    },
      {
        id: 'comando-manual-4wm10',
        nome: 'Comandos P120',
        marca: 'HIDRAULTEC',
        categoria: 'valvulas',
        subcategoria: 'comandos-manuais',
        tipo: 'produto-normal',
        descricao: 'Comando manual de média vazão para aplicações industriais.',
        especificacoes: [
            'Pressão máxima: 250 bar',
            'Vazão: até 100 l/min',
            'Média vazão',
            'Durabilidade',
            'Facilidade de operação'
        ],
        aplicacoes: [
            'Sistemas industriais',
            'Operação manual',
            'Aplicações médias',
            'Controle direto'
        ],
        imagem: 'img/produtos/comando-4wm10.jpg'
    },
      {
        id: 'comando-manual-4wm10',
        nome: 'Comandos Z50 - Elétricos',
        marca: 'HIDRAULTEC',
        categoria: 'valvulas',
        subcategoria: 'comandos-manuais',
        tipo: 'produto-normal',
        descricao: 'Comando manual de média vazão para aplicações industriais.',
        especificacoes: [
            'Pressão máxima: 250 bar',
            'Vazão: até 100 l/min',
            'Média vazão',
            'Durabilidade',
            'Facilidade de operação'
        ],
        aplicacoes: [
            'Sistemas industriais',
            'Operação manual',
            'Aplicações médias',
            'Controle direto'
        ],
        imagem: 'img/produtos/comando-4wm10.jpg'
    },

    // BLOCOS HIDRÁULICOS (3 produtos - todos de submenu)
    {
        id: 'blocos-tn06',
        nome: 'Blocos TN06',
        marca: 'HIDRAULTEC',
        categoria: 'blocos',
        subcategoria: 'blocos-tn06',
        tipo: 'produto-submenu',
        descricao: 'Blocos hidráulicos TN06 para montagem de válvulas de tamanho 06.',
        especificacoes: [
            'Tamanho: TN06',
            'Material: Ferro fundido',
            'Pressão máxima: 315 bar',
            'Usinagem de precisão',
            'Múltiplas configurações'
        ],
        aplicacoes: [
            'Montagem de válvulas',
            'Sistemas compactos',
            'Blocos customizados',
            'Aplicações industriais'
        ],
        imagem: 'img/produtos/blocos-tn06.jpg'
    },
    {
        id: 'blocos-tn10',
        nome: 'Blocos TN10',
        marca: 'HIDRAULTEC',
        categoria: 'blocos',
        subcategoria: 'blocos-tn10',
        tipo: 'produto-submenu',
        descricao: 'Blocos hidráulicos TN10 para montagem de válvulas de tamanho 10.',
        especificacoes: [
            'Tamanho: TN10',
            'Material: Ferro fundido',
            'Pressão máxima: 315 bar',
            'Alta qualidade',
            'Projeto customizado'
        ],
        aplicacoes: [
            'Sistemas de média vazão',
            'Montagem de válvulas',
            'Blocos especiais',
            'Aplicações industriais'
        ],
        imagem: 'img/produtos/blocos-tn10.jpg'
    },
    {
        id: 'blocos-especiais',
        nome: 'Blocos e Placas Especiais',
        marca: 'HIDRAULTEC',
        categoria: 'blocos',
        subcategoria: 'blocos-especiais',
        tipo: 'produto-submenu',
        descricao: 'Blocos e placas hidráulicas customizadas para projetos especiais.',
        especificacoes: [
            'Projeto sob medida',
            'Múltiplos materiais',
            'Pressão: até 500 bar',
            'Usinagem CNC',
            'Testes de qualidade'
        ],
        aplicacoes: [
            'Projetos especiais',
            'Sistemas customizados',
            'Aplicações únicas',
            'Soluções sob medida'
        ],
        imagem: 'img/produtos/blocos-especiais.jpg'
    },

    // FILTROS INDUSTRIAIS (8 produtos)
    // Produtos de submenu - Filtros (4 produtos)
    {
        id: 'filtros-ar',
        nome: 'Filtros de ar e Enchimento',
        marca: 'HIDRAULTEC',
        categoria: 'filtros',
        subcategoria: 'filtros-ar',
        tipo: 'produto-submenu',
        descricao: 'Filtros de ar e enchimento para reservatórios hidráulicos.',
        especificacoes: [
            'Filtragem: 10 a 100 microns',
            'Vazão de ar: até 200 l/min',
            'Elemento lavável',
            'Indicador visual',
            'Fácil manutenção'
        ],
        aplicacoes: [
            'Reservatórios hidráulicos',
            'Sistemas de enchimento',
            'Proteção contra contaminação',
            'Aplicações industriais'
        ],
        imagem: 'img/produtos/filtros-ar.jpg'
    },
    {
        id: 'filtros-retorno',
        nome: 'Filtros de Retorno',
        marca: 'HIDRAULTEC',
        categoria: 'filtros',
        subcategoria: 'filtros-retorno',
        tipo: 'produto-submenu',
        descricao: 'Filtros de retorno para limpeza do óleo hidráulico.',
        especificacoes: [
            'Filtragem: 3 a 25 microns',
            'Vazão: até 400 l/min',
            'Indicador de saturação',
            'By-pass de segurança',
            'Elemento substituível'
        ],
        aplicacoes: [
            'Linha de retorno',
            'Limpeza do óleo',
            'Proteção do sistema',
            'Aplicações industriais'
        ],
        imagem: 'img/produtos/filtros-retorno.jpg'
    },
    {
        id: 'filtros-succao',
        nome: 'Filtros de Sucção',
        marca: 'HIDRAULTEC',
        categoria: 'filtros',
        subcategoria: 'filtros-succao',
        tipo: 'produto-submenu',
        descricao: 'Filtros de sucção para proteção de bombas hidráulicas.',
        especificacoes: [
            'Filtragem: 100 a 200 microns',
            'Baixa perda de carga',
            'Elemento metálico',
            'Limpeza fácil',
            'Proteção da bomba'
        ],
        aplicacoes: [
            'Proteção de bombas',
            'Linha de sucção',
            'Filtragem grosseira',
            'Sistemas hidráulicos'
        ],
        imagem: 'img/produtos/filtros-succao.jpg'
    },
    {
        id: 'filtros-pressao',
        nome: 'Filtros de Pressão',
        marca: 'HIDRAULTEC',
        categoria: 'filtros',
        subcategoria: 'filtros-pressao',
        tipo: 'produto-submenu',
        descricao: 'Filtros de pressão para filtragem fina em linha de pressão.',
        especificacoes: [
            'Filtragem: 3 a 10 microns',
            'Pressão: até 350 bar',
            'Alta eficiência',
            'Indicador visual',
            'Construção robusta'
        ],
        aplicacoes: [
            'Linha de pressão',
            'Filtragem fina',
            'Proteção de componentes',
            'Sistemas críticos'
        ],
        imagem: 'img/produtos/filtros-pressao.jpg'
    },

    // Acessórios para filtros (4 produtos)
    {
        id: 'elemento-filtrante-retorno',
        nome: 'Manômetros',
        marca: 'HIDRAULTEC',
        categoria: 'filtros',
        subcategoria: 'acessorios-filtros',
        tipo: 'produto-normal',
        descricao: 'Elemento filtrante de reposição para filtros de retorno.',
        especificacoes: [
            'Filtragem: 3 a 25 microns',
            'Material: Celulose/Sintético',
            'Alta capacidade',
            'Longa vida útil',
            'Múltiplos tamanhos'
        ],
        aplicacoes: [
            'Reposição de elementos',
            'Manutenção preventiva',
            'Filtros de retorno',
            'Sistemas hidráulicos'
        ],
        imagem: 'img/produtos/elemento-retorno.jpg'
    },
    {
        id: 'elemento-filtrante-pressao',
        nome: 'Vacuômetros',
        marca: 'HIDRAULTEC',
        categoria: 'filtros',
        subcategoria: 'acessorios-filtros',
        tipo: 'produto-normal',
        descricao: 'Elemento filtrante de alta pressão para filtros de linha.',
        especificacoes: [
            'Filtragem: 3 a 10 microns',
            'Pressão: até 350 bar',
            'Material especial',
            'Resistência superior',
            'Eficiência elevada'
        ],
        aplicacoes: [
            'Filtros de pressão',
            'Reposição de elementos',
            'Sistemas de alta pressão',
            'Aplicações críticas'
        ],
        imagem: 'img/produtos/elemento-pressao.jpg'
    },
    {
        id: 'indicador-saturacao',
        nome: 'Pressostatos',
        marca: 'HIDRAULTEC',
        categoria: 'filtros',
        subcategoria: 'acessorios-filtros',
        tipo: 'produto-normal',
        descricao: 'Indicador visual de saturação para filtros hidráulicos.',
        especificacoes: [
            'Indicação visual',
            'Ajuste de pressão',
            'Montagem fácil',
            'Durabilidade',
            'Múltiplas faixas'
        ],
        aplicacoes: [
            'Monitoramento de filtros',
            'Manutenção preventiva',
            'Indicação de troca',
            'Sistemas hidráulicos'
        ],
        imagem: 'img/produtos/indicador-saturacao.jpg'
    },
    {
        id: 'valvula-bypass',
        nome: 'Vacuostatos',
        marca: 'HIDRAULTEC',
        categoria: 'filtros',
        subcategoria: 'acessorios-filtros',
        tipo: 'produto-normal',
        descricao: 'Válvula de by-pass de segurança para filtros hidráulicos.',
        especificacoes: [
            'Pressão de abertura: ajustável',
            'Proteção do sistema',
            'Montagem integrada',
            'Funcionamento automático',
            'Segurança operacional'
        ],
        aplicacoes: [
            'Proteção de filtros',
            'Segurança do sistema',
            'Prevenção de danos',
            'Operação contínua'
        ],
        imagem: 'img/produtos/valvula-bypass.jpg'
    },

    // INSTRUMENTAÇÃO (12 produtos)
    // Manômetros (3 produtos)
    {
        id: 'manometro-glicerina-63mm',
        nome: 'Verticais',
        marca: 'HIDRAULTEC',
        categoria: 'instrumentacao',
        subcategoria: 'manometros',
        tipo: 'produto-normal',
        descricao: 'Manômetro com glicerina para medição de pressão em sistemas hidráulicos.',
        especificacoes: [
            'Diâmetro: 63mm',
            'Faixa: 0-400 bar',
            'Preenchimento: Glicerina',
            'Conexão: 1/4" NPT',
            'Classe de precisão: 1,6%'
        ],
        aplicacoes: [
            'Medição de pressão',
            'Sistemas hidráulicos',
            'Monitoramento',
            'Aplicações industriais'
        ],
        imagem: 'img/produtos/manometro-63mm.jpg'
    },
    {
        id: 'manometro-glicerina-100mm',
        nome: 'Horizontais',
        marca: 'HIDRAULTEC',
        categoria: 'instrumentacao',
        subcategoria: 'manometros',
        tipo: 'produto-normal',
        descricao: 'Manômetro de grande diâmetro para melhor visualização.',
        especificacoes: [
            'Diâmetro: 100mm',
            'Faixa: 0-600 bar',
            'Preenchimento: Glicerina',
            'Conexão: 1/2" NPT',
            'Classe de precisão: 1,0%'
        ],
        aplicacoes: [
            'Painéis de controle',
            'Medição precisa',
            'Sistemas principais',
            'Monitoramento visual'
        ],
        imagem: 'img/produtos/manometro-100mm.jpg'
    },
    {
        id: 'manometro-digital',
        nome: 'Painel',
        marca: 'HIDRAULTEC',
        categoria: 'instrumentacao',
        subcategoria: 'manometros',
        tipo: 'produto-normal',
        descricao: 'Manômetro digital com display LCD para medição precisa.',
        especificacoes: [
            'Display: LCD',
            'Faixa: 0-1000 bar',
            'Precisão: 0,1%',
            'Alimentação: Bateria',
            'Saída: 4-20mA opcional'
        ],
        aplicacoes: [
            'Medição precisa',
            'Sistemas automatizados',
            'Calibração',
            'Aplicações críticas'
        ],
        imagem: 'img/produtos/manometro-digital.jpg'
    },

    // Sensores de pressão (3 produtos)
    {
        id: 'sensor-pressao-4-20ma',
        nome: 'Transmissores Pressão 0-10 V',
        marca: 'HIDRAULTEC',
        categoria: 'instrumentacao',
        subcategoria: 'sensores-pressao',
        tipo: 'produto-normal',
        descricao: 'Sensor de pressão com saída analógica 4-20mA.',
        especificacoes: [
            'Saída: 4-20mA',
            'Faixa: 0-400 bar',
            'Alimentação: 24VDC',
            'Precisão: 0,5%',
            'Proteção: IP65'
        ],
        aplicacoes: [
            'Automação industrial',
            'Controle de processo',
            'Monitoramento remoto',
            'Sistemas SCADA'
        ],
        imagem: 'img/produtos/sensor-4-20ma.jpg'
    },
    {
        id: 'sensor-pressao-0-10v',
        nome: 'Transmissores Pressão 4-20 mA',
        marca: 'HIDRAULTEC',
        categoria: 'instrumentacao',
        subcategoria: 'sensores-pressao',
        tipo: 'produto-normal',
        descricao: 'Sensor de pressão com saída analógica 0-10V.',
        especificacoes: [
            'Saída: 0-10V',
            'Faixa: 0-600 bar',
            'Alimentação: 24VDC',
            'Linearidade: ±0,3%',
            'Temperatura: -40 a +125°C'
        ],
        aplicacoes: [
            'Sistemas de controle',
            'Aquisição de dados',
            'Monitoramento',
            'Aplicações industriais'
        ],
        imagem: 'img/produtos/sensor-0-10v.jpg'
    },

    // Pressostatos (3 produtos)
    {
        id: 'pressostato-mecanico',
        nome: 'Pressostatos FOX',
        marca: 'HIDRAULTEC',
        categoria: 'instrumentacao',
        subcategoria: 'pressostatos',
        tipo: 'produto-normal',
        descricao: 'Pressostato mecânico para controle on/off de pressão.',
        especificacoes: [
            'Faixa: 10-300 bar',
            'Contato: SPDT',
            'Corrente: 10A/250VAC',
            'Ajuste: Parafuso',
            'Histerese: Fixa'
        ],
        aplicacoes: [
            'Controle de pressão',
            'Proteção de sistema',
            'Acionamento de alarmes',
            'Aplicações simples'
        ],
        imagem: 'img/produtos/pressostato-mecanico.jpg'
    },
    {
        id: 'pressostato-eletronico',
        nome: 'Pressostatos Série V',
        marca: 'HIDRAULTEC',
        categoria: 'instrumentacao',
        subcategoria: 'pressostatos',
        tipo: 'produto-normal',
        descricao: 'Pressostato eletrônico com display e ajuste digital.',
        especificacoes: [
            'Display: LED',
            'Faixa: 0-400 bar',
            'Saída: PNP/NPN',
            'Ajuste: Digital',
            'Histerese: Ajustável'
        ],
        aplicacoes: [
            'Controle preciso',
            'Sistemas automatizados',
            'Monitoramento digital',
            'Aplicações avançadas'
        ],
        imagem: 'img/produtos/pressostato-eletronico.jpg'
    },
    {
        id: 'pressostato-diferencial',
        nome: 'Pressostatos HED8',
        marca: 'HIDRAULTEC',
        categoria: 'instrumentacao',
        subcategoria: 'pressostatos',
        tipo: 'produto-normal',
        descricao: 'Pressostato para monitoramento de pressão diferencial.',
        especificacoes: [
            'Diferencial: 0,5-50 bar',
            'Duas entradas',
            'Contato: SPDT',
            'Aplicação: Filtros',
            'Montagem: DIN rail'
        ],
        aplicacoes: [
            'Monitoramento de filtros',
            'Controle diferencial',
            'Sistemas de filtragem',
            'Manutenção preventiva'
        ],
        imagem: 'img/produtos/pressostato-diferencial.jpg'
    },

    // Produto de submenu - Termostatos (1 produto)
    {
        id: 'termostatos',
        nome: 'Termostatos',
        marca: 'HIDRAULTEC',
        categoria: 'instrumentacao',
        subcategoria: 'termostatos',
        tipo: 'produto-submenu',
        descricao: 'Termostatos para controle de temperatura em sistemas hidráulicos.',
        especificacoes: [
            'Faixa: -20 a +150°C',
            'Contato: SPDT',
            'Bulbo: Remoto ou local',
            'Ajuste: Manual',
            'Proteção: IP65'
        ],
        aplicacoes: [
            'Controle de temperatura',
            'Proteção térmica',
            'Sistemas de resfriamento',
            'Monitoramento térmico'
        ],
        imagem: 'img/produtos/termostatos.jpg'
    },

    // Sensores de nível (2 produtos)
    {
        id: 'sensor-nivel-capacitivo',
        nome: 'Verticais',
        marca: 'HIDRAULTEC',
        categoria: 'instrumentacao',
        subcategoria: 'sensores-nivel',
        tipo: 'produto-normal',
        descricao: 'Sensor de nível capacitivo para reservatórios hidráulicos.',
        especificacoes: [
            'Princípio: Capacitivo',
            'Saída: PNP/NPN',
            'Alcance: 0-2000mm',
            'Alimentação: 24VDC',
            'Material: Inox 316L'
        ],
        aplicacoes: [
            'Monitoramento de nível',
            'Reservatórios',
            'Controle de enchimento',
            'Sistemas automatizados'
        ],
        imagem: 'img/produtos/sensor-nivel-capacitivo.jpg'
    },
    {
        id: 'sensor-nivel-ultrassonico',
        nome: 'Horizontais',
        marca: 'HIDRAULTEC',
        categoria: 'instrumentacao',
        subcategoria: 'sensores-nivel',
        tipo: 'produto-normal',
        descricao: 'Sensor de nível ultrassônico sem contato com o fluido.',
        especificacoes: [
            'Princípio: Ultrassônico',
            'Alcance: 0-5000mm',
            'Saída: 4-20mA',
            'Precisão: ±1mm',
            'Sem contato'
        ],
        aplicacoes: [
            'Medição sem contato',
            'Tanques grandes',
            'Fluidos agressivos',
            'Aplicações higiênicas'
        ],
        imagem: 'img/produtos/sensor-nivel-ultrassonico.jpg'
    },

    // Produto de submenu - Termopares PT100 (1 produto)
    {
        id: 'termopares-pt100',
        nome: 'Termopares PT100',
        marca: 'HIDRAULTEC',
        categoria: 'instrumentacao',
        subcategoria: 'termopares',
        tipo: 'produto-submenu',
        descricao: 'Sensores de temperatura PT100 para medição precisa.',
        especificacoes: [
            'Tipo: PT100',
            'Faixa: -50 a +200°C',
            'Precisão: Classe A',
            'Conexão: 2, 3 ou 4 fios',
            'Proteção: IP65'
        ],
        aplicacoes: [
            'Medição de temperatura',
            'Controle térmico',
            'Sistemas de resfriamento',
            'Monitoramento preciso'
        ],
        imagem: 'img/produtos/termopares-pt100.jpg'
    },

    // ACESSÓRIOS (6 produtos)
    // Produtos de submenu - Acessórios (4 produtos)
    {
        id: 'isoladoras-manometros',
        nome: 'Isoladoras de Manômetros',
        marca: 'HIDRAULTEC',
        categoria: 'acessorios',
        subcategoria: 'isoladoras',
        tipo: 'produto-submenu',
        descricao: 'Válvulas isoladoras para proteção de manômetros.',
        especificacoes: [
            'Pressão máxima: 400 bar',
            'Conexões: 1/4" e 1/2"',
            'Material: Latão/Inox',
            'Operação: Manual',
            'Vedação: O-ring'
        ],
        aplicacoes: [
            'Proteção de manômetros',
            'Isolamento para manutenção',
            'Sistemas de medição',
            'Aplicações industriais'
        ],
        imagem: 'img/produtos/isoladoras-manometros.jpg'
    },
    {
        id: 'flanges-ligacao',
        nome: 'Flanges de Ligação',
        marca: 'HIDRAULTEC',
        categoria: 'acessorios',
        subcategoria: 'flanges',
        tipo: 'produto-submenu',
        descricao: 'Flanges para conexão de componentes hidráulicos.',
        especificacoes: [
            'Normas: SAE, ISO',
            'Material: Aço carbono',
            'Pressão: até 350 bar',
            'Tamanhos: 1/2" a 2"',
            'Acabamento: Zincado'
        ],
        aplicacoes: [
            'Conexão de componentes',
            'Montagem de válvulas',
            'Sistemas hidráulicos',
            'Aplicações industriais'
        ],
        imagem: 'img/produtos/flanges-ligacao.jpg'
    },
    {
        id: 'acoplamentos',
        nome: 'Acoplamentos',
        marca: 'HIDRAULTEC',
        categoria: 'acessorios',
        subcategoria: 'acoplamentos',
        tipo: 'produto-submenu',
        descricao: 'Acoplamentos para conexão rápida de mangueiras.',
        especificacoes: [
            'Tipos: Engate rápido',
            'Material: Aço inox',
            'Pressão: até 250 bar',
            'Vedação: O-ring',
            'Operação: Manual'
        ],
        aplicacoes: [
            'Conexão rápida',
            'Mangueiras hidráulicas',
            'Sistemas móveis',
            'Manutenção rápida'
        ],
        imagem: 'img/produtos/acoplamentos.jpg'
    },
    {
        id: 'coxins',
        nome: 'Coxins',
        marca: 'HIDRAULTEC',
        categoria: 'acessorios',
        subcategoria: 'coxins',
        tipo: 'produto-submenu',
        descricao: 'Coxins anti-vibração para bombas e motores hidráulicos.',
        especificacoes: [
            'Material: Borracha',
            'Dureza: 55-70 Shore A',
            'Temperatura: -40 a +100°C',
            'Múltiplos tamanhos',
            'Resistência a óleo'
        ],
        aplicacoes: [
            'Isolamento de vibração',
            'Bombas hidráulicas',
            'Motores',
            'Redução de ruído'
        ],
        imagem: 'img/produtos/coxins.jpg'
    },

    // Trocadores de calor (2 produtos)
    {
        id: 'trocador-calor-ar',
        nome: 'Trocadores Ar/Óleo',
        marca: 'HIDRAULTEC',
        categoria: 'acessorios',
        subcategoria: 'trocadores-calor',
        tipo: 'produto-normal',
        descricao: 'Trocador de calor ar/óleo para resfriamento de sistemas hidráulicos.',
        especificacoes: [
            'Tipo: Ar/Óleo',
            'Capacidade: 10-100 kW',
            'Pressão: até 25 bar',
            'Ventilador: 12/24VDC',
            'Material: Alumínio'
        ],
        aplicacoes: [
            'Resfriamento de óleo',
            'Sistemas hidráulicos',
            'Máquinas móveis',
            'Controle térmico'
        ],
        imagem: 'img/produtos/trocador-ar-oleo.jpg'
    },
    {
        id: 'trocador-calor-agua',
        nome: 'Trocadores Água/Óleo',
        marca: 'HIDRAULTEC',
        categoria: 'acessorios',
        subcategoria: 'trocadores-calor',
        tipo: 'produto-normal',
        descricao: 'Trocador de calor água/óleo para resfriamento eficiente.',
        especificacoes: [
            'Tipo: Água/Óleo',
            'Capacidade: 20-200 kW',
            'Pressão óleo: até 35 bar',
            'Pressão água: até 10 bar',
            'Material: Inox/Latão'
        ],
        aplicacoes: [
            'Resfriamento industrial',
            'Sistemas estacionários',
            'Alta eficiência',
            'Aplicações pesadas'
        ],
        imagem: 'img/produtos/trocador-agua-oleo.jpg'
    },

    // UNIDADES HIDRÁULICAS (3 produtos - todos de submenu)
    {
        id: 'unidades-compactas',
        nome: 'Unidades hidr. Compactas',
        marca: 'HIDRAULTEC',
        categoria: 'unidades',
        subcategoria: 'unidades-compactas',
        tipo: 'produto-submenu',
        descricao: 'Unidades hidráulicas compactas para aplicações de pequeno porte.',
        especificacoes: [
            'Potência: 1-15 HP',
            'Pressão: até 210 bar',
            'Reservatório: 20-100 litros',
            'Montagem: Compacta',
            'Controle: Manual/Automático'
        ],
        aplicacoes: [
            'Máquinas pequenas',
            'Aplicações móveis',
            'Sistemas compactos',
            'Equipamentos leves'
        ],
        imagem: 'img/produtos/unidades-compactas.jpg'
    },
    {
        id: 'unidades-industriais',
        nome: 'Unidades hidr. Industriais',
        marca: 'HIDRAULTEC',
        categoria: 'unidades',
        subcategoria: 'unidades-industriais',
        tipo: 'produto-submenu',
        descricao: 'Unidades hidráulicas industriais para aplicações de grande porte.',
        especificacoes: [
            'Potência: 20-200 HP',
            'Pressão: até 350 bar',
            'Reservatório: 200-2000 litros',
            'Controle: PLC',
            'Monitoramento: Completo'
        ],
        aplicacoes: [
            'Indústria pesada',
            'Grandes prensas',
            'Sistemas industriais',
            'Aplicações críticas'
        ],
        imagem: 'img/produtos/unidades-industriais.jpg'
    },
    {
        id: 'projetos-especiais',
        nome: 'Projetos especiais',
        marca: 'HIDRAULTEC',
        categoria: 'unidades',
        subcategoria: 'projetos-especiais',
        tipo: 'produto-submenu',
        descricao: 'Unidades hidráulicas customizadas para projetos especiais.',
        especificacoes: [
            'Projeto sob medida',
            'Múltiplas configurações',
            'Pressão: até 500 bar',
            'Controle avançado',
            'Integração completa'
        ],
        aplicacoes: [
            'Projetos únicos',
            'Aplicações especiais',
            'Sistemas customizados',
            'Soluções sob medida'
        ],
        imagem: 'img/produtos/projetos-especiais.jpg'
    }
];

// Variáveis globais
let produtosFiltrados = [...produtosDatabase];
let paginaAtual = 1;
const produtosPorPagina = 12;

// Inicialização
document.addEventListener('DOMContentLoaded', function() {
    inicializarEventos();
    exibirProdutos();
    atualizarContador();
});

// Inicializar eventos
function inicializarEventos() {
    // Busca
    const campoBusca = document.getElementById('busca-produtos');
    if (campoBusca) {
        campoBusca.addEventListener('input', function() {
            buscarProdutos(this.value);
        });
    }

    // Filtros rápidos
    const filtrosRapidos = document.querySelectorAll('.filtro-rapido');
    filtrosRapidos.forEach(filtro => {
        filtro.addEventListener('click', function() {
            const categoria = this.dataset.categoria;
            filtrarPorCategoria(categoria);
            
            // Atualizar visual dos filtros
            filtrosRapidos.forEach(f => f.classList.remove('active'));
            this.classList.add('active');
        });
    });

    // Modal
    const modalOverlay = document.getElementById('modal-overlay');
    if (modalOverlay) {
        modalOverlay.addEventListener('click', function(e) {
            if (e.target === this) {
                fecharModal();
            }
        });
    }
}

// Funções do menu lateral
function toggleCategoria(categoriaId) {
    const header = document.querySelector(`[onclick="toggleCategoria('${categoriaId}')"]`);
    const content = document.getElementById(categoriaId);
    
    if (header && content) {
        const isActive = content.classList.contains('active');
        
        // Fechar todas as outras categorias
        document.querySelectorAll('.categoria-content.active').forEach(cat => {
            cat.classList.remove('active');
            cat.previousElementSibling.classList.remove('active');
        });
        
        // Toggle da categoria atual
        if (!isActive) {
            content.classList.add('active');
            header.classList.add('active');
        }
    }
}

function toggleSubcategoria(subcategoriaId) {
    const header = document.querySelector(`[onclick="toggleSubcategoria('${subcategoriaId}')"]`);
    const content = document.getElementById(subcategoriaId);
    
    if (header && content) {
        const isActive = content.classList.contains('active');
        
        // Toggle da subcategoria
        if (isActive) {
            content.classList.remove('active');
            header.classList.remove('active');
        } else {
            content.classList.add('active');
            header.classList.add('active');
        }
    }
}

function filtrarPorSubcategoria(subcategoria) {
    produtosFiltrados = produtosDatabase.filter(produto => 
        produto.subcategoria === subcategoria
    );
    
    paginaAtual = 1;
    exibirProdutos();
    atualizarContador();
    atualizarTitulo(subcategoria);
}

// Funções de filtro
function filtrarPorCategoria(categoria) {
    if (categoria === 'todos') {
        produtosFiltrados = [...produtosDatabase];
        atualizarTitulo('Todos os Produtos');
    } else {
        produtosFiltrados = produtosDatabase.filter(produto => 
            produto.categoria === categoria
        );
        atualizarTitulo(categoria.charAt(0).toUpperCase() + categoria.slice(1));
    }
    
    paginaAtual = 1;
    exibirProdutos();
    atualizarContador();
}

function buscarProdutos(termo) {
    if (!termo.trim()) {
        produtosFiltrados = [...produtosDatabase];
    } else {
        const termoLower = termo.toLowerCase();
        produtosFiltrados = produtosDatabase.filter(produto =>
            produto.nome.toLowerCase().includes(termoLower) ||
            produto.marca.toLowerCase().includes(termoLower) ||
            produto.categoria.toLowerCase().includes(termoLower) ||
            produto.descricao.toLowerCase().includes(termoLower)
        );
    }
    
    paginaAtual = 1;
    exibirProdutos();
    atualizarContador();
    atualizarTitulo('Resultados da Busca');
}

// Função para exibir produtos
function exibirProdutos() {
    const grid = document.getElementById('produtos-grid');
    if (!grid) return;

    const inicio = (paginaAtual - 1) * produtosPorPagina;
    const fim = inicio + produtosPorPagina;
    const produtosPagina = produtosFiltrados.slice(inicio, fim);

    grid.innerHTML = '';

    produtosPagina.forEach(produto => {
        const card = criarCardProduto(produto);
        grid.appendChild(card);
    });

    criarPaginacao();
}

function criarCardProduto(produto) {
    const card = document.createElement('div');
    card.className = 'produto-card';
    card.onclick = () => abrirModal(produto.id);

    const categoriaNome = {
        'bombas': 'BOMBAS',
        'cilindros': 'CILINDROS',
        'valvulas': 'VÁLVULAS',
        'blocos': 'BLOCOS',
        'filtros': 'FILTROS',
        'instrumentacao': 'INSTRUMENTAÇÃO',
        'acessorios': 'ACESSÓRIOS',
        'unidades': 'UNIDADES'
    };

    card.innerHTML = `
        <div class="categoria-badge">${categoriaNome[produto.categoria] || produto.categoria.toUpperCase()}</div>
        <div class="produto-imagem">
            <img src="${produto.imagem}" alt="${produto.nome}" onerror="this.style.display='none'">
        </div>
        <div class="produto-info">
            <div class="produto-marca">${produto.marca}</div>
            <h3 class="produto-nome">${produto.nome}</h3>
            <p class="produto-descricao">${produto.descricao}</p>
            <div class="produto-actions">
                <button class="btn-detalhes">Ver Detalhes</button>
            </div>
        </div>
    `;

    return card;
}

// Funções do modal
function abrirModal(produtoId) {
    const produto = produtosDatabase.find(p => p.id === produtoId);
    if (!produto) return;

    // Preencher dados do modal
    document.getElementById('modal-imagem').src = produto.imagem;
    document.getElementById('modal-marca').textContent = produto.marca;
    document.getElementById('modal-titulo').textContent = produto.nome;
    document.getElementById('modal-descricao').textContent = produto.descricao;

    // Especificações
    const especificacoesList = document.getElementById('modal-especificacoes-lista');
    especificacoesList.innerHTML = '';
    produto.especificacoes.forEach(spec => {
        const li = document.createElement('li');
        li.textContent = spec;
        especificacoesList.appendChild(li);
    });

    // Aplicações
    const aplicacoesList = document.getElementById('modal-aplicacoes-lista');
    aplicacoesList.innerHTML = '';
    produto.aplicacoes.forEach(app => {
        const li = document.createElement('li');
        li.textContent = app;
        aplicacoesList.appendChild(li);
    });

    // Botão de documentação
    const btnDocumentacao = document.getElementById('btn-documentacao');
    if (produto.documentacao) {
        btnDocumentacao.style.display = 'inline-flex';
        btnDocumentacao.href = produto.documentacao;
    } else {
        btnDocumentacao.style.display = 'none';
    }

    // Mostrar modal
    const modal = document.getElementById('modal-overlay');
    modal.classList.add('active');
    document.body.style.overflow = 'hidden';
}

function fecharModal() {
    const modal = document.getElementById('modal-overlay');
    modal.classList.remove('active');
    document.body.style.overflow = '';
}

// Funções auxiliares
function atualizarContador() {
    const contador = document.getElementById('produtos-contador');
    if (contador) {
        contador.textContent = `${produtosFiltrados.length} produtos`;
    }
}

function atualizarTitulo(titulo) {
    const tituloElement = document.getElementById('categoria-titulo');
    if (tituloElement) {
        tituloElement.textContent = titulo;
    }
}

function criarPaginacao() {
    const totalPaginas = Math.ceil(produtosFiltrados.length / produtosPorPagina);
    const paginacao = document.getElementById('paginacao');
    
    if (!paginacao || totalPaginas <= 1) {
        if (paginacao) paginacao.innerHTML = '';
        return;
    }

    let html = '';

    // Botão anterior
    html += `<button ${paginaAtual === 1 ? 'disabled' : ''} onclick="irParaPagina(${paginaAtual - 1})">
        <i class="fas fa-chevron-left"></i>
    </button>`;

    // Páginas
    for (let i = 1; i <= totalPaginas; i++) {
        if (i === 1 || i === totalPaginas || (i >= paginaAtual - 2 && i <= paginaAtual + 2)) {
            html += `<button class="${i === paginaAtual ? 'active' : ''}" onclick="irParaPagina(${i})">${i}</button>`;
        } else if (i === paginaAtual - 3 || i === paginaAtual + 3) {
            html += '<span>...</span>';
        }
    }

    // Botão próximo
    html += `<button ${paginaAtual === totalPaginas ? 'disabled' : ''} onclick="irParaPagina(${paginaAtual + 1})">
        <i class="fas fa-chevron-right"></i>
    </button>`;

    paginacao.innerHTML = html;
}

function irParaPagina(pagina) {
    const totalPaginas = Math.ceil(produtosFiltrados.length / produtosPorPagina);
    if (pagina >= 1 && pagina <= totalPaginas) {
        paginaAtual = pagina;
        exibirProdutos();
        
        // Scroll para o topo da área de produtos
        document.querySelector('.produtos-main').scrollIntoView({ 
            behavior: 'smooth',
            block: 'start'
        });
    }
}

function solicitarOrcamento() {
    const produto = document.getElementById('modal-titulo').textContent;
    const marca = document.getElementById('modal-marca').textContent;
    const mensagem = `Olá! Gostaria de solicitar um orçamento para o produto: ${marca} ${produto}`;
    const url = `https://wa.me/554734667777?text=${encodeURIComponent(mensagem)}`;
    window.open(url, '_blank');
}

