(function () {
  'use strict';

  /* ---------- Dados (antes ficavam no banco SQLite) ---------- */
  var ROLES = [
    { id: 1, name: 'Desenvolvedor Front-end Júnior', description: 'Construa interfaces web modernas, acessíveis e responsivas.' },
    { id: 2, name: 'Desenvolvedor Back-end Júnior', description: 'Desenvolva APIs, regras de negócio, bancos e integrações.' },
    { id: 3, name: 'Analista de Dados Júnior', description: 'Transforme dados em análises, indicadores e decisões.' },
    { id: 4, name: 'QA / Testes Júnior', description: 'Garanta qualidade por meio de testes, automação e processos.' }
  ];

  var SKILLS = [
    { id: 1, name: 'HTML e Semântica', category: 'Front-end' },
    { id: 2, name: 'CSS e Responsividade', category: 'Front-end' },
    { id: 3, name: 'JavaScript', category: 'Front-end' },
    { id: 4, name: 'Git e GitHub', category: 'Ferramentas' },
    { id: 5, name: 'React', category: 'Front-end' },
    { id: 6, name: 'Acessibilidade Web', category: 'Front-end' },
    { id: 7, name: 'Lógica de Programação', category: 'Fundamentos' },
    { id: 8, name: 'Node.js', category: 'Back-end' },
    { id: 9, name: 'APIs REST', category: 'Back-end' },
    { id: 10, name: 'SQL', category: 'Dados' },
    { id: 11, name: 'Banco de Dados', category: 'Dados' },
    { id: 12, name: 'Python', category: 'Programação' },
    { id: 13, name: 'Testes de Software', category: 'Qualidade' },
    { id: 14, name: 'Postman', category: 'Qualidade' },
    { id: 15, name: 'Jest', category: 'Qualidade' },
    { id: 16, name: 'Excel / Planilhas', category: 'Dados' },
    { id: 17, name: 'Power BI', category: 'Dados' }
  ];

  // [skillId, nível exigido]
  var ROLE_SKILLS = {
    1: [[1, 3], [2, 3], [3, 4], [4, 3], [5, 3], [6, 2], [7, 3]],
    2: [[7, 4], [3, 3], [8, 3], [9, 3], [10, 3], [11, 3], [4, 3]],
    3: [[16, 3], [10, 3], [12, 3], [17, 3], [11, 2], [7, 2], [4, 1]],
    4: [[7, 3], [13, 4], [14, 3], [15, 2], [4, 2], [9, 2], [10, 2]]
  };

  var TIPS = {
    1: ['Fundamentos de HTML semântico (MDN ou freeCodeCamp).', 'Montar a estrutura de uma landing page só com HTML.'],
    2: ['Flexbox, Grid e media queries na documentação do MDN.', 'Deixar a landing page responsiva para celular e desktop.'],
    3: ['Lógica, funções e manipulação do DOM em JavaScript.', 'Criar um menu interativo e um formulário com validação.'],
    4: ['Comandos essenciais de Git: commit, branch, merge e pull request.', 'Subir um projeto pessoal no GitHub com commits organizados.'],
    5: ['Componentes, props e estado no tutorial oficial do React.', 'Recriar uma lista de tarefas em React.'],
    6: ['Contraste, navegação por teclado e noções de ARIA.', 'Revisar um projeto seu e corrigir 5 problemas de acessibilidade.'],
    7: ['Algoritmos, condicionais e laços de repetição com exercícios.', 'Resolver 10 desafios de lógica no Beecrowd.'],
    8: ['Fundamentos de Node.js: módulos, npm e servidor HTTP.', 'Criar um servidor simples com uma rota de cadastro.'],
    9: ['Métodos HTTP, códigos de status e boas práticas de API REST.', 'Consumir uma API pública e mostrar os dados em uma página.'],
    10: ['SELECT, JOIN, filtros e agrupamentos.', 'Escrever 10 consultas em um banco de exemplo.'],
    11: ['Modelagem relacional: tabelas, chaves e normalização.', 'Modelar e criar o banco de um sistema pequeno.'],
    12: ['Sintaxe básica, listas, funções e bibliotecas como pandas.', 'Limpar e analisar uma base de dados pública.'],
    13: ['Tipos de teste, casos de teste e relatório de bugs.', 'Escrever 10 casos de teste para um app que você usa.'],
    14: ['Criar requisições e coleções no Postman.', 'Testar todas as rotas de uma API pública.'],
    15: ['Testes unitários com Jest: describe, it e expect.', 'Cobrir com testes as funções de um projeto seu.'],
    16: ['Fórmulas, filtros e tabelas dinâmicas.', 'Montar um painel de indicadores a partir de uma base fictícia.'],
    17: ['Importação de dados, medidas e visuais no Power BI.', 'Criar um dashboard com 3 gráficos sobre um tema de interesse.']
  };

  // Material gratuito e oficial por competência: [título, link]
  var RES = {
    1: ['MDN: HTML', 'https://developer.mozilla.org/pt-BR/docs/Web/HTML'],
    2: ['web.dev: Learn CSS', 'https://web.dev/learn/css'],
    3: ['MDN: JavaScript', 'https://developer.mozilla.org/pt-BR/docs/Web/JavaScript'],
    4: ['Pro Git (PT-BR)', 'https://git-scm.com/book/pt-br/v2'],
    5: ['react.dev: Learn', 'https://react.dev/learn'],
    6: ['web.dev: Learn Accessibility', 'https://web.dev/learn/accessibility'],
    7: ['CS50 (Harvard)', 'https://cs50.harvard.edu/x/'],
    8: ['Node.js: Learn', 'https://nodejs.org/en/learn'],
    9: ['MDN: HTTP', 'https://developer.mozilla.org/pt-BR/docs/Web/HTTP'],
    10: ['SQLBolt', 'https://sqlbolt.com'],
    11: ['W3Schools: SQL', 'https://www.w3schools.com/sql/'],
    12: ['Python: tutorial oficial', 'https://docs.python.org/pt-br/3/tutorial/'],
    13: ['roadmap.sh: QA', 'https://roadmap.sh/qa'],
    14: ['Postman Learning Center', 'https://learning.postman.com'],
    15: ['Jest: primeiros passos', 'https://jestjs.io/pt-BR/docs/getting-started'],
    16: ['Suporte Microsoft: Excel', 'https://support.microsoft.com/pt-br/excel'],
    17: ['Microsoft Learn: Power BI', 'https://learn.microsoft.com/pt-br/training/powerbi/']
  };

  // Trilhas: fases ordenadas; cada passo = [skillId, horas estimadas, entrega prática]
  var TRACKS = {
    1: [
      { t: 'Base da web', d: 'Estrutura, estilo e versionamento', s: [[1, 12, 'Currículo online em HTML'], [2, 20, 'Landing page responsiva'], [4, 6, 'Projetos publicados no GitHub']] },
      { t: 'Interatividade', d: 'Lógica e JavaScript de verdade', s: [[7, 20, '10 desafios de lógica resolvidos'], [3, 40, 'App de tarefas com JavaScript']] },
      { t: 'Profissionalização', d: 'Framework e qualidade', s: [[5, 30, 'Catálogo de produtos em React'], [6, 10, 'Auditoria de acessibilidade do seu portfólio']] }
    ],
    2: [
      { t: 'Fundamentos', d: 'Pensar como programador', s: [[7, 30, '15 desafios de lógica'], [3, 30, 'Scripts que manipulam dados'], [4, 6, 'Fluxo com branches e pull requests']] },
      { t: 'Servidor e APIs', d: 'Do código à rota HTTP', s: [[8, 30, 'Servidor com rotas'], [9, 15, 'API de tarefas (CRUD)']] },
      { t: 'Dados', d: 'Persistência e modelagem', s: [[10, 20, '20 consultas em um banco de exemplo'], [11, 20, 'Modelagem de um sistema de reservas']] }
    ],
    3: [
      { t: 'Base analítica', d: 'Planilhas, lógica e versionamento', s: [[16, 20, 'Painel de indicadores em planilha'], [7, 15, 'Exercícios de lógica'], [4, 6, 'Portfólio de análises no GitHub']] },
      { t: 'Dados com SQL', d: 'Consultar e modelar', s: [[10, 25, 'Análise de vendas só com SQL'], [11, 15, 'Modelo relacional de um e-commerce']] },
      { t: 'Análise e visualização', d: 'Python e dashboards', s: [[12, 40, 'Limpeza e análise de uma base pública'], [17, 25, 'Dashboard publicado no Power BI']] }
    ],
    4: [
      { t: 'Fundamentos de teste', d: 'Pensar em qualidade', s: [[7, 20, 'Exercícios de lógica'], [13, 25, '10 casos de teste de um app real'], [4, 6, 'Relatório de bugs no GitHub']] },
      { t: 'APIs e dados', d: 'Testar o que o usuário não vê', s: [[9, 15, 'Mapa das rotas de uma API pública'], [14, 15, 'Coleção de testes no Postman'], [10, 15, 'Validação de dados com SQL']] },
      { t: 'Automação', d: 'Testes que rodam sozinhos', s: [[15, 20, 'Testes unitários de um projeto seu']] }
    ]
  };

  /* ---------- Ícones (SVG inline) ---------- */
  var ICONS = {
    dashboard: '<rect x="3" y="3" width="7" height="9"/><rect x="14" y="3" width="7" height="5"/><rect x="14" y="12" width="7" height="9"/><rect x="3" y="16" width="7" height="5"/>',
    target: '<circle cx="12" cy="12" r="10"/><circle cx="12" cy="12" r="6"/><circle cx="12" cy="12" r="2"/>',
    book: '<path d="M2 4h6a4 4 0 0 1 4 4v12a3 3 0 0 0-3-3H2z"/><path d="M22 4h-6a4 4 0 0 0-4 4v12a3 3 0 0 1 3-3h7z"/>',
    user: '<circle cx="12" cy="8" r="4"/><path d="M4 21a8 8 0 0 1 16 0"/>',
    logout: '<path d="M9 21H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h4"/><polyline points="16 17 21 12 16 7"/><line x1="21" y1="12" x2="9" y2="12"/>',
    chevron: '<polyline points="9 18 15 12 9 6"/>',
    check: '<circle cx="12" cy="12" r="10"/><polyline points="8 12 11 15 16 9"/>',
    alert: '<circle cx="12" cy="12" r="10"/><line x1="12" y1="8" x2="12" y2="12"/><line x1="12" y1="16" x2="12.01" y2="16"/>',
    clock: '<circle cx="12" cy="12" r="10"/><polyline points="12 6 12 12 16 14"/>',
    code: '<polyline points="16 18 22 12 16 6"/><polyline points="8 6 2 12 8 18"/>',
    menu: '<line x1="3" y1="6" x2="21" y2="6"/><line x1="3" y1="12" x2="21" y2="12"/><line x1="3" y1="18" x2="21" y2="18"/>',
    x: '<line x1="18" y1="6" x2="6" y2="18"/><line x1="6" y1="6" x2="18" y2="18"/>',
    arrow: '<line x1="5" y1="12" x2="19" y2="12"/><polyline points="12 5 19 12 12 19"/>',
    sun: '<circle cx="12" cy="12" r="4"/><path d="M12 2v2M12 20v2M4.9 4.9l1.4 1.4M17.7 17.7l1.4 1.4M2 12h2M20 12h2M4.9 19.1l1.4-1.4M17.7 6.3l1.4-1.4"/>',
    moon: '<path d="M21 12.8A9 9 0 1 1 11.2 3a7 7 0 0 0 9.8 9.8z"/>',
    map: '<polygon points="3 6 9 4 15 6 21 4 21 18 15 20 9 18 3 20"/><line x1="9" y1="4" x2="9" y2="18"/><line x1="15" y1="6" x2="15" y2="20"/>',
    ext: '<path d="M14 3h7v7"/><line x1="10" y1="14" x2="21" y2="3"/><path d="M19 14v5a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h5"/>',
    lock: '<rect x="3" y="11" width="18" height="11" rx="2"/><path d="M7 11V7a5 5 0 0 1 10 0v4"/>'
  };
  function icon(name, size) {
    size = size || 18;
    return '<svg xmlns="http://www.w3.org/2000/svg" width="' + size + '" height="' + size + '" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">' + ICONS[name] + '</svg>';
  }

  /* ---------- Utilitários ---------- */
  function esc(s) {
    return String(s == null ? '' : s).replace(/[&<>"']/g, function (c) {
      return { '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#39;' }[c];
    });
  }
  var store = {
    get: function (k, d) {
      try { var v = localStorage.getItem(k); return v ? JSON.parse(v) : d; } catch (e) { return d; }
    },
    set: function (k, v) {
      try { localStorage.setItem(k, JSON.stringify(v)); return true; } catch (e) { return false; }
    }
  };
  async function hashPassword(p) {
    var text = 'skillpath:' + p;
    try {
      if (window.crypto && window.crypto.subtle) {
        var buf = await window.crypto.subtle.digest('SHA-256', new TextEncoder().encode(text));
        return Array.from(new Uint8Array(buf)).map(function (b) { return b.toString(16).padStart(2, '0'); }).join('');
      }
    } catch (e) { /* usa alternativa abaixo */ }
    var h = 0;
    for (var i = 0; i < text.length; i++) { h = (h * 31 + text.charCodeAt(i)) | 0; }
    return 'f' + h;
  }

  /* ---------- Estado ---------- */
  var state = {
    user: null,
    view: 'dashboard',
    mode: 'login',
    error: '',
    busy: false,
    form: { name: '', email: '', password: '' },
    selectedRole: null,
    track: null,
    draft: {}
  };
  var appEl = document.getElementById('app');

  function currentTheme() { return document.documentElement.getAttribute('data-theme') === 'dark' ? 'dark' : 'light'; }
  function themeBtn(extra) {
    var dark = currentTheme() === 'dark';
    return '<button class="theme-btn' + (extra || '') + '" data-action="toggleTheme" aria-label="' + (dark ? 'Ativar tema claro' : 'Ativar tema escuro') + '" title="' + (dark ? 'Tema claro' : 'Tema escuro') + '">' + icon(dark ? 'sun' : 'moon', 19) + '</button>';
  }

  function getUsers() { return store.get('skillpath_users', []); }
  function getData() { return store.get('skillpath_data_' + state.user.id, { goalId: null, levels: {}, done: {} }); }
  function saveData(d) { store.set('skillpath_data_' + state.user.id, d); }

  function sortedSkills() {
    return SKILLS.slice().sort(function (a, b) {
      return a.category.localeCompare(b.category, 'pt') || a.name.localeCompare(b.name, 'pt');
    });
  }

  function analyze() {
    var data = getData();
    var goal = ROLES.filter(function (r) { return r.id === data.goalId; })[0] || null;
    if (!goal) return { goal: null, items: [], summary: { percentage: 0, mastered: 0, gaps: 0, inProgress: 0 } };
    var items = ROLE_SKILLS[goal.id].map(function (rs) {
      var skill = SKILLS.filter(function (s) { return s.id === rs[0]; })[0];
      var level = Number(data.levels[rs[0]] || 0);
      var status = level >= rs[1] ? 'Dominada' : level > 0 ? 'Em desenvolvimento' : 'Gap';
      return { id: skill.id, name: skill.name, category: skill.category, required_level: rs[1], level: level, status: status };
    });
    items.sort(function (a, b) {
      return (b.required_level - b.level) - (a.required_level - a.level) || a.name.localeCompare(b.name, 'pt');
    });
    var total = items.reduce(function (a, x) { return a + x.required_level; }, 0);
    var score = items.reduce(function (a, x) { return a + Math.min(x.level, x.required_level); }, 0);
    function count(st) { return items.filter(function (x) { return x.status === st; }).length; }
    return {
      goal: goal,
      items: items,
      summary: { percentage: total ? Math.round(score / total * 100) : 0, mastered: count('Dominada'), gaps: count('Gap'), inProgress: count('Em desenvolvimento') }
    };
  }

  /* ---------- Telas ---------- */
  function authView() {
    var reg = state.mode === 'register';
    return '<div class="auth-page">' + themeBtn(' auth-theme') + '<div class="auth-card">' +
      '<div class="brand"><div class="brand-mark">S</div><div><b>SkillPath</b><span>Seu caminho até a tecnologia</span></div></div>' +
      '<div class="auth-copy"><h1>' + (reg ? 'Comece sua jornada' : 'Bem-vindo de volta') + '</h1><p>' +
      (reg ? 'Crie seu perfil e transforme seu objetivo em um plano claro.' : 'Continue de onde parou e descubra seu próximo passo.') + '</p></div>' +
      '<form data-form="auth">' +
      (reg ? '<label>Nome<input name="name" value="' + esc(state.form.name) + '" placeholder="Seu nome" minlength="2" required /></label>' : '') +
      '<label>E-mail<input name="email" type="email" value="' + esc(state.form.email) + '" placeholder="voce@email.com" required /></label>' +
      '<label>Senha<input name="password" type="password" value="' + esc(state.form.password) + '" placeholder="Mínimo de 6 caracteres" minlength="6" required /></label>' +
      (state.error ? '<div class="error-box" role="alert">' + esc(state.error) + '</div>' : '') +
      '<button class="primary full" type="submit"' + (state.busy ? ' disabled' : '') + '>' + (state.busy ? 'Aguarde...' : reg ? 'Criar conta' : 'Entrar') + ' ' + icon('arrow', 17) + '</button>' +
      '</form>' +
      '<button class="switch" data-action="switchMode">' + (reg ? 'Já tenho uma conta' : 'Ainda não tenho uma conta') + '</button>' +
      '<div class="divider">ou</div>' +
      '<button class="secondary full" data-action="demo">Explorar com conta de demonstração</button>' +
      '<div class="security">' + icon('lock', 15) + ' Versão de demonstração: os dados ficam só neste navegador.</div>' +
      '</div></div>';
  }

  function shell(content) {
    var nav = [['dashboard', 'Visão geral', 'dashboard'], ['goal', 'Meu objetivo', 'target'], ['skills', 'Competências', 'code'], ['roadmap', 'Minha trilha', 'book'], ['tracks', 'Trilhas de estudo', 'map'], ['profile', 'Meu perfil', 'user']];
    return '<div class="app"><header class="topbar">' +
      '<div class="brand compact"><div class="brand-mark">S</div><div><b>SkillPath</b><span>Carreira com direção</span></div></div>' +
      '<button class="mobile-menu" data-action="toggleMenu" aria-label="Abrir ou fechar menu">' + icon('menu', 24) + '</button>' +
      '<div class="top-actions">' + themeBtn() + '<div class="top-user"><div class="avatar">' + esc(state.user.name.charAt(0).toUpperCase()) + '</div><span>' + esc(state.user.name) + '</span></div></div>' +
      '</header><div class="layout"><aside id="side"><nav>' +
      nav.map(function (n) {
        return '<button class="' + (state.view === n[0] ? 'active' : '') + '"' + (state.view === n[0] ? ' aria-current="page"' : '') + ' data-action="navigate" data-view="' + n[0] + '">' + icon(n[2], 19) + n[1] + '</button>';
      }).join('') +
      '</nav><button class="logout" data-action="logout">' + icon('logout', 18) + ' Sair</button></aside>' +
      '<main>' + content + '</main></div></div>';
  }

  function pageHead(eyebrow, title, description) {
    return '<div class="page-head"><div><span class="eyebrow">' + eyebrow + '</span><h1>' + title + '</h1><p>' + description + '</p></div></div>';
  }

  function stat(label, value, ic) {
    return '<div class="stat"><div class="stat-icon">' + icon(ic, 18) + '</div><div><span>' + label + '</span><strong>' + value + '</strong></div></div>';
  }

  function dashboardView() {
    var a = analyze();
    var has = !!a.goal;
    var first = esc(state.user.name.split(' ')[0]);
    var html = pageHead('VISÃO GERAL', 'Olá, ' + first + ' 👋', 'Veja exatamente onde você está e qual é o próximo passo da sua jornada.');
    html += '<section class="hero-card"><div><span class="pill">SKILLPATH</span>' +
      '<h2>' + (has ? 'Seu objetivo: ' + esc(a.goal.name) : 'Escolha um objetivo profissional') + '</h2>' +
      '<p>' + (has ? 'Agora podemos comparar suas competências com o que o mercado pede e montar sua trilha.' : 'Defina o cargo que você deseja conquistar para começar a análise personalizada.') + '</p>' +
      '<button class="primary" data-action="navigate" data-view="' + (has ? 'roadmap' : 'goal') + '">' + (has ? 'Ver minha trilha' : 'Definir objetivo') + ' ' + icon('arrow', 17) + '</button></div>' +
      '<div class="hero-orb">' + icon('target', 58) + '</div></section>';
    if (has) {
      html += '<div class="stats">' +
        stat('Compatibilidade', a.summary.percentage + '%', 'target') +
        stat('Competências dominadas', a.summary.mastered, 'check') +
        stat('Em desenvolvimento', a.summary.inProgress, 'clock') +
        stat('Gaps principais', a.summary.gaps, 'alert') + '</div>';
      var gaps = a.items.filter(function (x) { return x.status !== 'Dominada'; }).slice(0, 4);
      html += '<section class="panel"><div class="panel-title"><div><h3>Seus principais gaps</h3><p>Comece pelo que mais aproxima você do objetivo.</p></div>' +
        '<button class="link-btn" data-action="navigate" data-view="roadmap">Ver trilha ' + icon('chevron', 16) + '</button></div><div class="gap-list">';
      if (!gaps.length) {
        html += '<div class="gap"><div class="gap-main"><b>Nenhum gap encontrado</b><span>Você já atingiu todos os níveis exigidos para este objetivo.</span></div></div>';
      }
      gaps.forEach(function (x) {
        html += '<div class="gap"><div class="skill-icon">' + icon('code', 18) + '</div>' +
          '<div class="gap-main"><b>' + esc(x.name) + '</b><span>' + esc(x.category) + ' · nível atual ' + x.level + '/5</span></div>' +
          '<div class="bar"><i style="width:' + Math.min(100, x.level / x.required_level * 100) + '%"></i></div>' +
          '<span class="level">' + x.required_level + '/5</span></div>';
      });
      html += '</div></section>';
    } else {
      html += '<section class="empty-state">' + icon('target', 35) + '<h3>Seu diagnóstico começa aqui</h3><p>Escolha um cargo e cadastre o que você já sabe. O SkillPath cuida da comparação.</p>' +
        '<button class="secondary" data-action="navigate" data-view="goal">Começar diagnóstico</button></section>';
    }
    return html;
  }

  function goalView() {
    var html = pageHead('OBJETIVO PROFISSIONAL', 'Onde você quer chegar?', 'Escolha um objetivo. A partir dele, o SkillPath calcula quais competências você precisa desenvolver.');
    html += '<div class="role-grid">' + ROLES.map(function (r) {
      var sel = state.selectedRole === r.id;
      return '<button class="role-card' + (sel ? ' selected' : '') + '" data-action="pickRole" data-id="' + r.id + '" aria-pressed="' + sel + '">' +
        '<div class="role-icon">' + icon('target', 21) + '</div><h3>' + esc(r.name) + '</h3><p>' + esc(r.description) + '</p><span>Selecionar ' + icon('chevron', 15) + '</span></button>';
    }).join('') + '</div>';
    html += '<div class="sticky-action"><button class="primary" id="saveGoal" data-action="saveGoal"' + (state.selectedRole ? '' : ' disabled') + '>Salvar objetivo ' + icon('arrow', 17) + '</button></div>';
    return html;
  }

  function skillsView() {
    var html = pageHead('COMPETÊNCIAS', 'O que você já sabe?', 'Seja honesto com seu nível atual. Isso deixa seu diagnóstico muito mais útil.');
    html += '<div class="level-guide"><b>Como avaliar:</b><span>0 — Nunca vi</span><span>1 — Básico</span><span>2 — Inicial</span><span>3 — Intermediário</span><span>4 — Avançado</span><span>5 — Domino</span></div>';
    html += '<div class="skills-grid">' + sortedSkills().map(function (s) {
      var cur = Number(state.draft[s.id] || 0);
      var btns = [0, 1, 2, 3, 4, 5].map(function (n) {
        return '<button class="' + (cur === n ? 'chosen' : '') + '" data-action="setLevel" data-skill="' + s.id + '" data-level="' + n + '" aria-pressed="' + (cur === n) + '">' + n + '</button>';
      }).join('');
      return '<div class="skill-row"><div><b>' + esc(s.name) + '</b><span>' + esc(s.category) + '</span></div>' +
        '<div class="level-buttons" role="group" aria-label="Nível em ' + esc(s.name) + '">' + btns + '</div></div>';
    }).join('') + '</div>';
    html += '<div class="sticky-action"><button class="primary" id="saveSkills" data-action="saveSkills">Salvar competências ' + icon('arrow', 17) + '</button></div>';
    return html;
  }

  function roadmapView() {
    var a = analyze();
    var html = pageHead('TRILHA PERSONALIZADA', 'Seu próximo passo',
      a.goal ? 'Plano focado em ' + esc(a.goal.name) + '. Priorize os gaps antes de consumir conteúdo aleatório.' : 'Escolha um objetivo e cadastre suas competências para gerar a trilha.');
    if (!a.goal) {
      return html + '<div class="empty-state">' + icon('book', 35) + '<h3>Trilha ainda não disponível</h3><p>Defina seu objetivo profissional primeiro.</p>' +
        '<button class="secondary" data-action="navigate" data-view="goal">Definir objetivo</button></div>';
    }
    html += '<div class="roadmap">' + a.items.map(function (x, i) {
      var done = x.status === 'Dominada';
      var tip = TIPS[x.id];
      return '<div class="road-item' + (done ? ' done' : '') + '"><div class="road-line"><div class="road-dot">' + (done ? icon('check', 16) : (i + 1)) + '</div></div>' +
        '<div class="road-content"><div class="road-top"><div><span class="eyebrow">ETAPA ' + (i + 1) + ' · ' + esc(x.category) + '</span><h3>' + esc(x.name) + '</h3></div>' +
        '<span class="status ' + (done ? 'done' : x.status === 'Gap' ? 'gap' : '') + '">' + x.status + '</span></div>' +
        '<p>' + (done ? 'Você já atingiu o nível necessário para este objetivo.' : 'Desenvolva até o nível ' + x.required_level + '/5. Seu nível atual é ' + x.level + '/5.') + '</p>' +
        (done ? '' : '<div class="tips"><p><b>Estudar</b>' + esc(tip[0]) + '</p><p><b>Praticar</b>' + esc(tip[1]) + '</p><p><b>Material</b><a href="' + RES[x.id][1] + '" target="_blank" rel="noopener noreferrer">' + esc(RES[x.id][0]) + '</a></p></div>' +
          '<div class="progress-mini"><i style="width:' + Math.min(100, x.level / x.required_level * 100) + '%"></i></div>') +
        '</div></div>';
    }).join('') + '</div>';
    return html;
  }

  function tracksView() {
    var data = getData();
    var done = data.done || {};
    var tid = state.track || data.goalId || 1;
    var phases = TRACKS[tid];
    var total = 0, count = 0, hoursLeft = 0;
    phases.forEach(function (p) { p.s.forEach(function (st) { total++; if (done[tid + '-' + st[0]]) count++; else hoursLeft += st[1]; }); });
    var pct = Math.round(count / total * 100);
    var html = pageHead('TRILHAS DE ESTUDO', 'Um caminho passo a passo', 'Siga as fases em ordem, estude com material gratuito e marque cada entrega concluída. Seu progresso fica salvo.');
    html += '<div class="track-tabs" role="tablist">' + ROLES.map(function (r) {
      return '<button role="tab" class="' + (r.id === tid ? 'active' : '') + '" aria-selected="' + (r.id === tid) + '" data-action="pickTrack" data-id="' + r.id + '">' + esc(r.name.replace(' Júnior', '')) + '</button>';
    }).join('') + '</div>';
    html += '<div class="track-sum"><div><b>' + pct + '%</b><br><span>' + count + ' de ' + total + ' passos</span></div><div class="bar"><i style="width:' + pct + '%"></i></div><div><b>~' + hoursLeft + 'h</b><br><span>restantes (estimativa)</span></div></div>';
    html += phases.map(function (p, i) {
      return '<section class="phase"><h3>Fase ' + (i + 1) + ' · ' + esc(p.t) + '</h3><p>' + esc(p.d) + '</p>' + p.s.map(function (st) {
        var key = tid + '-' + st[0];
        var on = !!done[key];
        var skill = SKILLS.filter(function (k) { return k.id === st[0]; })[0];
        return '<div class="step' + (on ? ' done' : '') + '"><button class="check' + (on ? ' on' : '') + '" data-action="toggleStep" data-key="' + key + '" aria-pressed="' + on + '" aria-label="Marcar ' + esc(skill.name) + ' como concluído">' + (on ? icon('check', 15) : '') + '</button>' +
          '<div class="step-main"><b>' + esc(skill.name) + '</b><span>Entrega: ' + esc(st[2]) + ' · ~' + st[1] + 'h</span></div>' +
          '<a class="res" href="' + RES[st[0]][1] + '" target="_blank" rel="noopener noreferrer">' + esc(RES[st[0]][0]) + ' ' + icon('ext', 12) + '</a></div>';
      }).join('') + '</section>';
    }).join('');
    return html;
  }

  function profileView() {
    return pageHead('MEU PERFIL', 'Seus dados', 'Informações básicas da sua conta SkillPath.') +
      '<div class="profile-card"><div class="profile-avatar">' + esc(state.user.name.charAt(0).toUpperCase()) + '</div>' +
      '<div><span>Nome</span><h3>' + esc(state.user.name) + '</h3><span>E-mail</span><h3>' + esc(state.user.email) + '</h3></div></div>';
  }

  function render(keepScroll) {
    var y = window.pageYOffset;
    if (!state.user) {
      appEl.innerHTML = authView();
    } else {
      var views = { dashboard: dashboardView, goal: goalView, skills: skillsView, roadmap: roadmapView, tracks: tracksView, profile: profileView };
      appEl.innerHTML = shell(views[state.view]());
    }
    window.scrollTo(0, keepScroll ? y : 0);
  }

  /* ---------- Sessão ---------- */
  function startSession(user) {
    state.user = { id: user.id, name: user.name, email: user.email };
    state.view = 'dashboard';
    state.error = '';
    state.form = { name: '', email: '', password: '' };
    store.set('skillpath_session', user.id);
    render();
  }

  async function submitAuth() {
    var f = state.form;
    var name = f.name.trim();
    var email = f.email.trim().toLowerCase();
    var users = getUsers();
    state.error = '';
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) { state.error = 'Informe um e-mail válido.'; return render(true); }
    if (f.password.length < 6) { state.error = 'A senha precisa ter pelo menos 6 caracteres.'; return render(true); }
    var hash = await hashPassword(f.password);
    if (state.mode === 'register') {
      if (name.length < 2) { state.error = 'Informe seu nome.'; return render(true); }
      if (users.some(function (u) { return u.email === email; })) { state.error = 'Este e-mail já está cadastrado.'; return render(true); }
      var user = { id: 'u' + Date.now(), name: name, email: email, hash: hash };
      users.push(user);
      if (!store.set('skillpath_users', users)) { state.error = 'Não foi possível salvar no navegador. Verifique se o armazenamento local está liberado.'; return render(true); }
      return startSession(user);
    }
    var found = users.filter(function (u) { return u.email === email && u.hash === hash; })[0];
    if (!found) { state.error = 'E-mail ou senha incorretos.'; return render(true); }
    startSession(found);
  }

  async function startDemo() {
    var users = getUsers();
    var demo = users.filter(function (u) { return u.email === 'demo@skillpath.app'; })[0];
    if (!demo) {
      demo = { id: 'demo', name: 'Visitante Demo', email: 'demo@skillpath.app', hash: await hashPassword('demo123') };
      users.push(demo);
      store.set('skillpath_users', users);
      store.set('skillpath_data_demo', { goalId: 1, levels: { 1: 3, 2: 2, 3: 2, 4: 3, 7: 3 } });
    }
    startSession(demo);
  }

  /* ---------- Ações ---------- */
  var actions = {
    switchMode: function () {
      state.mode = state.mode === 'login' ? 'register' : 'login';
      state.error = '';
      render(true);
    },
    demo: function () { startDemo(); },
    toggleTheme: function () {
      var next = currentTheme() === 'dark' ? 'light' : 'dark';
      document.documentElement.setAttribute('data-theme', next);
      try { localStorage.setItem('skillpath_theme', next); } catch (e) {}
      render(true);
    },
    pickTrack: function (el) { state.track = Number(el.dataset.id); render(true); },
    toggleStep: function (el) {
      var d = getData();
      d.done = d.done || {};
      if (d.done[el.dataset.key]) delete d.done[el.dataset.key]; else d.done[el.dataset.key] = true;
      saveData(d);
      render(true);
    },
    toggleMenu: function () {
      var side = document.getElementById('side');
      if (side) side.classList.toggle('open');
    },
    navigate: function (el) {
      state.view = el.dataset.view;
      if (state.view === 'goal') state.selectedRole = getData().goalId;
      if (state.view === 'tracks') state.track = getData().goalId || state.track || 1;
      if (state.view === 'skills') state.draft = Object.assign({}, getData().levels);
      render();
    },
    logout: function () {
      store.set('skillpath_session', null);
      state.user = null;
      state.mode = 'login';
      render();
    },
    pickRole: function (el) {
      state.selectedRole = Number(el.dataset.id);
      document.querySelectorAll('.role-card').forEach(function (c) {
        var on = Number(c.dataset.id) === state.selectedRole;
        c.classList.toggle('selected', on);
        c.setAttribute('aria-pressed', String(on));
      });
      var btn = document.getElementById('saveGoal');
      if (btn) btn.disabled = false;
    },
    saveGoal: function () {
      if (!state.selectedRole) return;
      var d = getData();
      d.goalId = state.selectedRole;
      saveData(d);
      flash('saveGoal', 'Objetivo salvo ✓', 'Salvar objetivo');
    },
    setLevel: function (el) {
      var id = el.dataset.skill;
      var lvl = Number(el.dataset.level);
      state.draft[id] = lvl;
      Array.prototype.forEach.call(el.parentNode.children, function (b) {
        var on = Number(b.dataset.level) === lvl;
        b.classList.toggle('chosen', on);
        b.setAttribute('aria-pressed', String(on));
      });
    },
    saveSkills: function () {
      var d = getData();
      d.levels = Object.assign({}, state.draft);
      saveData(d);
      flash('saveSkills', 'Competências salvas ✓', 'Salvar competências');
    }
  };

  function flash(id, doneText, normalText) {
    var btn = document.getElementById(id);
    if (!btn) return;
    btn.innerHTML = doneText + ' ' + icon('arrow', 17);
    setTimeout(function () {
      var again = document.getElementById(id);
      if (again) again.innerHTML = normalText + ' ' + icon('arrow', 17);
    }, 1800);
  }

  appEl.addEventListener('click', function (e) {
    var el = e.target.closest('[data-action]');
    if (!el || !appEl.contains(el)) return;
    var fn = actions[el.dataset.action];
    if (fn) fn(el);
  });

  appEl.addEventListener('input', function (e) {
    var t = e.target;
    if (t && t.form && t.form.dataset.form === 'auth' && t.name in state.form) state.form[t.name] = t.value;
  });

  appEl.addEventListener('submit', function (e) {
    if (e.target.dataset.form === 'auth') {
      e.preventDefault();
      submitAuth();
    }
  });

  /* ---------- Início ---------- */
  var sessionId = store.get('skillpath_session', null);
  if (sessionId) {
    var saved = getUsers().filter(function (u) { return u.id === sessionId; })[0];
    if (saved) state.user = { id: saved.id, name: saved.name, email: saved.email };
  }
  render();
})();
