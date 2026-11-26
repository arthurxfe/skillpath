# SkillPath (versão estática)

Plataforma que compara suas competências com a vaga desejada e gera uma trilha de estudos.
Roda direto no navegador, sem Node, sem build e sem backend.

## Como abrir
1. VS Code > File > Open Folder > esta pasta (confie na pasta quando perguntar).
2. Botão direito em `index.html` > **Open with Live Server** (ou "Go Live").

## Estrutura
- `index.html` — página e script de tema (evita "flash" branco no modo escuro)
- `styles.css` — estilos; todas as cores são variáveis (`:root` = claro, `[data-theme="dark"]` = escuro)
- `app.js` — dados (cargos, competências, trilhas), regras de análise e telas

## Funcionalidades
- Cadastro/login e conta de demonstração (dados no `localStorage` do navegador)
- Objetivo profissional, avaliação de competências (0 a 5) e análise de gaps
- Minha trilha: gaps priorizados com o que estudar, o que praticar e material gratuito
- Trilhas de estudo: 4 trilhas em fases, com entregas, horas estimadas e progresso salvo
- Modo escuro: segue o sistema na primeira visita e lembra a sua escolha

## Como editar o conteúdo
- Novas trilhas: objeto `TRACKS` em `app.js` (cada passo = `[idDaCompetência, horas, entrega]`)
- Novos links de estudo: objeto `RES` em `app.js`

## Limites desta versão
Senhas e dados ficam só no navegador (demonstração). Para contas reais, use o projeto completo com backend.
