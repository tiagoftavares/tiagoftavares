# 🚀 Guia Completo: Publicar seu Site no GitHub Pages

## Pré-requisitos

Você precisa ter:
- ✅ Uma conta no GitHub (gratuita em https://github.com)
- ✅ Git instalado no seu computador (https://git-scm.com)
- ✅ Os arquivos do site (index.html, styles.css, script.js)

---

## Passo 1: Criar uma Conta no GitHub (se não tiver)

1. Acesse https://github.com
2. Clique em "Sign up"
3. Preencha seus dados e confirme o email
4. Pronto! Sua conta está criada

---

## Passo 2: Criar um Novo Repositório

1. Faça login no GitHub
2. Clique no ícone **+** no canto superior direito
3. Selecione **New repository**
4. Preencha os dados:
   - **Repository name:** `tiagoftavares.github.io` (IMPORTANTE: use seu username do GitHub no lugar de "tiagoftavares")
   - **Description:** "Portfólio Profissional - Tiago Tavares"
   - **Public:** Marque como público
   - **Add a README file:** Deixe desmarcado
5. Clique em **Create repository**

---

## Passo 3: Configurar Git no Seu Computador

### No Windows:

1. Abra o **Git Bash** (instalado junto com o Git)
2. Configure seu nome e email:
   ```bash
   git config --global user.name "Seu Nome"
   git config --global user.email "seu.email@gmail.com"
   ```

### No Mac/Linux:

1. Abra o **Terminal**
2. Configure seu nome e email:
   ```bash
   git config --global user.name "Seu Nome"
   git config --global user.email "seu.email@gmail.com"
   ```

---

## Passo 4: Clonar o Repositório

1. Abra o Git Bash (Windows) ou Terminal (Mac/Linux)
2. Navegue até a pasta onde deseja salvar o projeto:
   ```bash
   cd ~/Documents
   ```
3. Clone o repositório:
   ```bash
   git clone https://github.com/SEU_USERNAME/SEU_USERNAME.github.io.git
   ```
   (Substitua SEU_USERNAME pelo seu username do GitHub)

4. Entre na pasta do projeto:
   ```bash
   cd SEU_USERNAME.github.io
   ```

---

## Passo 5: Adicionar os Arquivos do Site

1. Copie os seguintes arquivos para a pasta do projeto:
   - `index.html`
   - `styles.css`
   - `script.js`

2. Verifique se os arquivos estão lá:
   ```bash
   ls -la
   ```
   Você deve ver os três arquivos listados.

---

## Passo 6: Fazer Upload para o GitHub

1. No Git Bash/Terminal, execute os seguintes comandos:

   ```bash
   # Adicionar todos os arquivos
   git add .
   ```

   ```bash
   # Confirmar as mudanças (commit)
   git commit -m "Adicionar site profissional"
   ```

   ```bash
   # Enviar para o GitHub (push)
   git push origin main
   ```

   Se pedir senha, use seu **Personal Access Token** (não a senha da conta):
   - Gere um token em: https://github.com/settings/tokens
   - Clique em "Generate new token"
   - Selecione "repo" e copie o token
   - Cole o token quando pedir a senha

---

## Passo 7: Ativar GitHub Pages

1. Vá para o repositório no GitHub
2. Clique em **Settings**
3. No menu lateral, clique em **Pages**
4. Em **Source**, selecione:
   - Branch: `main`
   - Folder: `/ (root)`
5. Clique em **Save**

---

## Passo 8: Acessar seu Site

Seu site estará disponível em:
```
https://SEU_USERNAME.github.io
```

**Exemplo:** Se seu username é "tiagoftavares", o site será:
```
https://tiagoftavares.github.io
```

⏱️ **Nota:** Pode levar até 10 minutos para o site ficar online. Se não aparecer, aguarde e recarregue a página.

---

## 🎉 Pronto! Seu Site Está Online!

Agora você pode:
- ✅ Compartilhar o link com recrutadores
- ✅ Adicionar o link no seu LinkedIn
- ✅ Incluir no seu CV
- ✅ Compartilhar em redes sociais

---

## 📝 Como Atualizar o Site

Sempre que quiser fazer mudanças no site:

1. Edite os arquivos (index.html, styles.css, script.js) no seu computador
2. Abra o Git Bash/Terminal
3. Execute:
   ```bash
   git add .
   git commit -m "Descrição das mudanças"
   git push origin main
   ```
4. Aguarde alguns minutos e recarregue seu site no navegador

---

## 🆘 Troubleshooting

### Problema: "git command not found"
**Solução:** Instale o Git em https://git-scm.com

### Problema: "Authentication failed"
**Solução:** Use um Personal Access Token ao invés de senha

### Problema: Site não aparece após 10 minutos
**Solução:** 
1. Verifique se o repositório é público
2. Verifique se GitHub Pages está ativado em Settings > Pages
3. Verifique se o arquivo é `index.html` (não `Index.html`)

### Problema: Site aparece mas está quebrado (sem CSS/JavaScript)
**Solução:** 
1. Verifique se os arquivos (styles.css e script.js) estão na mesma pasta que index.html
2. Recarregue a página (Ctrl+F5 ou Cmd+Shift+R)
3. Limpe o cache do navegador

---

## 💡 Dicas Extras

### 1. Adicionar um Domínio Personalizado (Opcional)
Se quiser usar um domínio próprio (ex: www.tiagotavares.com):
1. Compre um domínio em GoDaddy, Namecheap, etc.
2. Em GitHub > Settings > Pages > Custom domain
3. Digite seu domínio
4. Configure os DNS do seu domínio (instruções fornecidas pelo provedor)

### 2. Adicionar um README.md
Para documentar seu projeto:
1. Crie um arquivo `README.md` na raiz do projeto
2. Adicione descrição do seu site
3. Faça push para o GitHub

### 3. Usar um Tema (Opcional)
GitHub Pages oferece temas prontos. Para usar:
1. Settings > Pages > Theme chooser
2. Selecione um tema
3. Clique em "Select theme"

---

## 📞 Suporte

Se tiver dúvidas:
- Documentação GitHub Pages: https://pages.github.com
- Documentação Git: https://git-scm.com/doc
- Stack Overflow: https://stackoverflow.com/questions/tagged/github-pages

---

## ✅ Checklist Final

- [ ] Conta do GitHub criada
- [ ] Repositório `username.github.io` criado
- [ ] Git instalado e configurado
- [ ] Arquivos (index.html, styles.css, script.js) adicionados
- [ ] Arquivos enviados para GitHub (git push)
- [ ] GitHub Pages ativado em Settings
- [ ] Site acessível em https://username.github.io
- [ ] Link adicionado ao LinkedIn
- [ ] Link adicionado ao CV

---

**Parabéns! Seu site profissional está online!** 🎉
