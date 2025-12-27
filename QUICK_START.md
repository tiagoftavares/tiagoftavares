# ⚡ Quick Start - Seu Site em 5 Minutos

## 📦 Arquivos Inclusos

```
portfolio_site/
├── index.html                 ← Página principal (abra no navegador)
├── styles.css                 ← Estilos (não altere a menos que saiba CSS)
├── script.js                  ← JavaScript (não altere a menos que saiba JS)
├── README.md                  ← Documentação completa
├── GITHUB_PAGES_SETUP.md     ← Guia detalhado de publicação
├── QUICK_START.md             ← Este arquivo
└── .gitignore                 ← Arquivo do Git (ignore)
```

---

## 🚀 Opção 1: Testar Localmente (2 minutos)

1. Abra a pasta `portfolio_site`
2. Clique com botão direito em `index.html`
3. Selecione "Abrir com" → "Navegador"
4. ✅ Pronto! Seu site está funcionando

---

## 🌐 Opção 2: Publicar no GitHub Pages (5 minutos)

### Passo 1: Preparar
- [ ] Criar conta no GitHub (https://github.com)
- [ ] Instalar Git (https://git-scm.com)

### Passo 2: Criar Repositório
1. Faça login no GitHub
2. Clique em **+** → **New repository**
3. Nome: `SEU_USERNAME.github.io` (ex: tiagoftavares.github.io)
4. Clique em **Create repository**

### Passo 3: Fazer Upload
Abra o Git Bash/Terminal e execute:

```bash
# Navegar até a pasta
cd ~/Downloads/portfolio_site

# Configurar Git (primeira vez)
git config --global user.name "Seu Nome"
git config --global user.email "seu.email@gmail.com"

# Inicializar repositório
git init

# Adicionar todos os arquivos
git add .

# Fazer commit
git commit -m "Adicionar portfólio profissional"

# Adicionar origem remota (substitua SEU_USERNAME)
git remote add origin https://github.com/SEU_USERNAME/SEU_USERNAME.github.io.git

# Enviar para GitHub
git push -u origin main
```

### Passo 4: Ativar GitHub Pages
1. Vá para seu repositório no GitHub
2. Clique em **Settings**
3. Clique em **Pages** (no menu lateral)
4. Em **Source**, selecione `main` e `/root`
5. Clique em **Save**

### Passo 5: Acessar
Seu site estará em: `https://SEU_USERNAME.github.io`

---

## ✏️ Personalizar o Site

### 1. Alterar Nome e Informações
Abra `index.html` com um editor de texto (Notepad, VS Code, etc.) e procure por:

```html
<!-- Procure por estas linhas e altere -->
<h2>Olá! Sou Tiago Tavares</h2>
<p class="hero-subtitle">Especialista em Gestão de Riscos...</p>
<p><a href="tel:+5513981717711">(13) 98171-7711</a></p>
<p><a href="mailto:tiagoftavares@gmail.com">tiagoftavares@gmail.com</a></p>
```

### 2. Alterar Experiências
Procure por `<div class="timeline-item">` e edite as informações

### 3. Alterar Skills
Procure por `<div class="skill-item">` e edite as competências

### 4. Adicionar Foto
1. Salve sua foto profissional na pasta (ex: `foto.jpg`)
2. Procure por `.image-placeholder` no HTML
3. Substitua o ícone por: `<img src="foto.jpg" alt="Sua Foto">`

---

## 🎨 Alterar Cores (Opcional)

Abra `styles.css` e procure por `:root`:

```css
:root {
    --primary-color: #0066cc;      /* Azul - altere aqui */
    --secondary-color: #00d4ff;    /* Ciano - altere aqui */
    /* ... outras cores ... */
}
```

Cores populares:
- Azul profissional: `#0066cc`
- Verde moderno: `#00a86b`
- Roxo criativo: `#7851a9`
- Laranja dinâmico: `#ff6b35`

---

## 📱 Testar em Dispositivos

### No Navegador (F12)
1. Abra o site
2. Pressione **F12** (ou Cmd+Option+I no Mac)
3. Clique no ícone de celular
4. Teste em diferentes tamanhos

### Em Celular Real
1. Se está no GitHub Pages: abra `https://seu-username.github.io` no celular
2. Se está localmente: abra `index.html` no navegador do celular

---

## 🔗 Próximos Passos

### Depois de Publicar:

1. **Adicione ao LinkedIn:**
   - Vá ao seu perfil
   - Clique em "Editar perfil"
   - Procure por "Websites"
   - Adicione: `https://seu-username.github.io`

2. **Adicione ao CV:**
   - Inclua o link do site no seu CV
   - Mencione que tem portfólio online

3. **Compartilhe:**
   - Envie para recrutadores
   - Compartilhe em redes sociais
   - Mencione em emails

4. **Atualize Regularmente:**
   - Adicione novos projetos
   - Atualize skills
   - Mantenha informações atualizadas

---

## 🆘 Problemas Comuns

### "Não consigo fazer upload"
→ Verifique se o Git está instalado: `git --version`

### "Site não aparece após 10 minutos"
→ Verifique se GitHub Pages está ativado em Settings

### "Alterações não aparecem"
→ Limpe o cache: Pressione Ctrl+Shift+Delete (ou Cmd+Shift+Delete no Mac)

### "Arquivo não encontrado"
→ Verifique se `styles.css` e `script.js` estão na mesma pasta que `index.html`

---

## 📞 Suporte

- **GitHub Pages Docs:** https://pages.github.com
- **Git Tutorial:** https://git-scm.com/doc
- **HTML/CSS Help:** https://www.w3schools.com

---

## ✅ Checklist Final

- [ ] Site testado localmente
- [ ] Repositório criado no GitHub
- [ ] Arquivos enviados (git push)
- [ ] GitHub Pages ativado
- [ ] Site acessível em https://username.github.io
- [ ] Conteúdo personalizado (nome, experiências, skills)
- [ ] Link adicionado ao LinkedIn
- [ ] Link adicionado ao CV

---

**Pronto! Seu site profissional está online!** 🎉

Para mais detalhes, veja `GITHUB_PAGES_SETUP.md` ou `README.md`
