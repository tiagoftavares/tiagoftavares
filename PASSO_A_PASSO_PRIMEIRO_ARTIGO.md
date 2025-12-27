# 📝 Passo a Passo Exato: Publicar Seu Primeiro Artigo

## 🎯 Objetivo
Publicar seu primeiro artigo no blog e compartilhá-lo no LinkedIn.

**Tempo estimado:** 30-45 minutos

---

## 📋 Pré-requisitos

✅ Você tem o repositório Git clonado localmente  
✅ Você tem acesso ao terminal/command prompt  
✅ Você tem um editor de texto (VS Code, Sublime, Notepad++)  
✅ Você tem conta no GitHub e LinkedIn  

---

## 🚀 PASSO A PASSO COMPLETO

### PASSO 1: Preparar o Tema do Artigo

**Escolha um tema** que você tenha experiência e possa falar com propriedade.

**Exemplos de temas:**
- "Como Implementar Data Analytics em Auditoria Interna"
- "Melhores Práticas em Investigações Internas"
- "Liderança em Tempos de Transformação Digital"
- "LGPD e Auditoria Interna: O Que Você Precisa Saber"
- "Automação de Testes SOX: Reduzindo Tempo em 50%"

**Para este guia, vamos usar:**
```
Tema: "Data Analytics em Auditoria Interna: Transformando Dados em Insights"
Arquivo: artigo-3.html
Categoria: Tecnologia & Inovação
```

---

### PASSO 2: Copiar o Template

**2.1 Abra seu editor de texto (VS Code, por exemplo)**

**2.2 Abra o arquivo:** `portfolio_site/blog/artigo-template.html`

**2.3 Copie TODO o conteúdo do arquivo**

**2.4 Crie um novo arquivo:** `portfolio_site/blog/artigo-3.html`

**2.5 Cole o conteúdo do template neste novo arquivo**

**2.6 Salve o arquivo**

---

### PASSO 3: Editar Metadados (SEO)

Abra `portfolio_site/blog/artigo-3.html` e edite a seção `<head>`:

**Encontre esta linha:**
```html
<meta name="description" content="[DESCRIÇÃO DO ARTIGO - 160 caracteres]">
```

**Substitua por:**
```html
<meta name="description" content="Descubra como usar Data Analytics para modernizar a auditoria interna. Aprenda técnicas práticas, ferramentas e como aumentar cobertura de testes em 50%.">
```

**Encontre esta linha:**
```html
<meta name="keywords" content="[PALAVRAS-CHAVE SEPARADAS POR VÍRGULA]">
```

**Substitua por:**
```html
<meta name="keywords" content="Data Analytics, Auditoria Interna, BI, Business Intelligence, Análise de Dados, Inovação">
```

**Encontre esta linha:**
```html
<meta name="date" content="[DATA: YYYY-MM-DD]">
```

**Substitua por (use a data de hoje):**
```html
<meta name="date" content="2024-12-26">
```

**Encontre esta linha:**
```html
<meta property="og:title" content="[TÍTULO DO ARTIGO]">
```

**Substitua por:**
```html
<meta property="og:title" content="Data Analytics em Auditoria Interna: Transformando Dados em Insights">
```

**Encontre esta linha:**
```html
<meta property="og:description" content="[DESCRIÇÃO DO ARTIGO]">
```

**Substitua por:**
```html
<meta property="og:description" content="Descubra como usar Data Analytics para modernizar a auditoria interna e aumentar a cobertura de testes em 50%.">
```

**Encontre esta linha:**
```html
<meta property="og:url" content="https://seu-site.com/blog/artigo-nome.html">
```

**Substitua por:**
```html
<meta property="og:url" content="https://seu-username.github.io/blog/artigo-3.html">
```

**Encontre esta linha:**
```html
<title>[TÍTULO DO ARTIGO] - Tiago Tavares</title>
```

**Substitua por:**
```html
<title>Data Analytics em Auditoria Interna: Transformando Dados em Insights - Tiago Tavares</title>
```

---

### PASSO 4: Editar o Conteúdo do Artigo

Agora vamos editar o corpo do artigo. Procure pela seção `<article class="article-container">` e substitua os placeholders:

**4.1 Editar o Título (H1)**

Encontre:
```html
<h1>[TÍTULO DO ARTIGO]</h1>
```

Substitua por:
```html
<h1>Data Analytics em Auditoria Interna: Transformando Dados em Insights</h1>
```

**4.2 Editar Meta Informações**

Encontre:
```html
<span class="date"><i class="fas fa-calendar"></i> [DATA: 15 de Dezembro, 2024]</span>
<span class="reading-time"><i class="fas fa-clock"></i> [TEMPO DE LEITURA: 5 min]</span>
<span class="category"><i class="fas fa-tag"></i> [CATEGORIA]</span>
```

Substitua por:
```html
<span class="date"><i class="fas fa-calendar"></i> 26 de Dezembro, 2024</span>
<span class="reading-time"><i class="fas fa-clock"></i> 6 min</span>
<span class="category"><i class="fas fa-tag"></i> Tecnologia & Inovação</span>
```

**4.3 Editar Tags**

Encontre:
```html
<span class="tag">[TAG 1]</span>
<span class="tag">[TAG 2]</span>
<span class="tag">[TAG 3]</span>
```

Substitua por:
```html
<span class="tag">Data Analytics</span>
<span class="tag">BI</span>
<span class="tag">Inovação</span>
```

**4.4 Editar Parágrafo Introdutório**

Encontre:
```html
<p class="intro-paragraph">
    [PARÁGRAFO INTRODUTÓRIO - Capture a atenção do leitor e apresente o tema do artigo]
</p>
```

Substitua por:
```html
<p class="intro-paragraph">
    Data Analytics não é mais um luxo na auditoria interna, é uma necessidade. Neste artigo, compartilho como implementar data analytics para modernizar sua auditoria, aumentar a cobertura de testes de 15% para 100% e detectar riscos 35% mais rápido.
</p>
```

**4.5 Editar Primeira Seção**

Encontre:
```html
<section>
    <h2>[TÍTULO DA SEÇÃO 1]</h2>
    <p>
        [CONTEÚDO DA SEÇÃO 1 - Desenvolva o tema com detalhes e exemplos práticos]
    </p>
    <ul>
        <li>[Ponto importante 1]</li>
        <li>[Ponto importante 2]</li>
        <li>[Ponto importante 3]</li>
    </ul>
</section>
```

Substitua por:
```html
<section>
    <h2>O Desafio: Auditoria Tradicional vs. Moderna</h2>
    <p>
        A auditoria tradicional utiliza amostragem estatística. Você testa 5-10% das transações e extrapola os resultados. Isso é rápido, mas deixa 90% das transações sem análise. Data Analytics muda isso completamente.
    </p>
    <ul>
        <li><strong>Auditoria Tradicional:</strong> Testa 10% das transações, 80% do tempo em tarefas manuais</li>
        <li><strong>Data Analytics:</strong> Testa 100% das transações, 80% do tempo em análises estratégicas</li>
        <li><strong>Resultado:</strong> Detecção de riscos 35% maior, cobertura 10x maior</li>
    </ul>
</section>
```

**4.6 Editar Segunda Seção**

Encontre:
```html
<section>
    <h2>[TÍTULO DA SEÇÃO 2]</h2>
    <p>
        [CONTEÚDO DA SEÇÃO 2 - Continue desenvolvendo o tema]
    </p>
    <blockquote>
        "[CITAÇÃO IMPORTANTE OU INSIGHT]"
    </blockquote>
</section>
```

Substitua por:
```html
<section>
    <h2>Ferramentas de Data Analytics para Auditoria</h2>
    <p>
        Você não precisa de um PhD em Data Science para começar. Existem ferramentas acessíveis que qualquer auditor pode aprender:
    </p>
    <blockquote>
        "Com Data Analytics, você deixa de ser reativo (encontrando problemas depois) para ser proativo (prevenindo problemas antes)."
    </blockquote>
</section>
```

**4.7 Editar Terceira Seção**

Encontre:
```html
<section>
    <h2>[TÍTULO DA SEÇÃO 3]</h2>
    <p>
        [CONTEÚDO DA SEÇÃO 3 - Aprofunde ainda mais o tema]
    </p>
</section>
```

Substitua por:
```html
<section>
    <h2>Ferramentas Práticas para Começar</h2>
    <p>
        Comece com ferramentas acessíveis. Você pode usar SQL para extrair dados do SAP, Python para análise, e Power BI ou Tableau para visualização. A curva de aprendizado é menor do que você imagina.
    </p>
    <ul>
        <li><strong>SQL:</strong> Para extrair dados de bancos de dados</li>
        <li><strong>Python:</strong> Para análise avançada e automação</li>
        <li><strong>Power BI / Tableau:</strong> Para criar dashboards</li>
        <li><strong>GCP / Snowflake:</strong> Para processar grandes volumes</li>
    </ul>
</section>
```

**4.8 Editar Casos Práticos**

Encontre:
```html
<section>
    <h2>Casos Práticos</h2>
    <div class="case-study">
        <h3>[CASO 1: Título]</h3>
        <p>[Descrição do caso prático com resultados mensuráveis]</p>
    </div>
    <div class="case-study">
        <h3>[CASO 2: Título]</h3>
        <p>[Descrição do caso prático com resultados mensuráveis]</p>
    </div>
</section>
```

Substitua por:
```html
<section>
    <h2>Caso Prático: Análise de Dados em SAP</h2>
    <div class="case-study">
        <h3>Desafio</h3>
        <p>Uma empresa tinha 50 mil transações de vendas por mês. A auditoria testava apenas 500 (1%) manualmente. Precisavam aumentar a cobertura sem aumentar o tamanho da equipe.</p>
        <h3>Solução</h3>
        <p>Implementei um script Python que extraía dados do SAP, analisava 100% das transações e criava um dashboard em Power BI com anomalias destacadas.</p>
        <h3>Resultados</h3>
        <ul>
            <li>Cobertura de testes: 1% → 100%</li>
            <li>Tempo de análise: 40 horas/mês → 8 horas/mês</li>
            <li>Detecção de riscos: 5 por mês → 35 por mês</li>
            <li>Economia: 32 horas/mês liberadas para análises estratégicas</li>
        </ul>
    </div>
</section>
```

**4.9 Editar Conclusão**

Encontre:
```html
<section>
    <h2>Conclusão</h2>
    <p>
        [PARÁGRAFO DE CONCLUSÃO - Resuma os pontos principais e convide o leitor à ação]
    </p>
</section>
```

Substitua por:
```html
<section>
    <h2>Conclusão</h2>
    <p>
        Data Analytics é o futuro da auditoria interna. Não é mais uma questão de "se" implementar, mas "quando". Comece pequeno, com um projeto piloto, e escale gradualmente. Os benefícios em eficiência, cobertura de testes e detecção de riscos são imensos.
    </p>
    <p>
        A jornada para uma auditoria moderna orientada por dados começa hoje. Qual será seu primeiro passo?
    </p>
</section>
```

**4.10 Editar Artigos Relacionados**

Encontre:
```html
<div class="related-articles">
    <h4>Artigos Relacionados</h4>
    <ul>
        <li><a href="artigo-1.html">[Artigo Relacionado 1]</a></li>
        <li><a href="artigo-2.html">[Artigo Relacionado 2]</a></li>
        <li><a href="artigo-3.html">[Artigo Relacionado 3]</a></li>
    </ul>
</div>
```

Substitua por:
```html
<div class="related-articles">
    <h4>Artigos Relacionados</h4>
    <ul>
        <li><a href="artigo-1.html">Os 5 Pilares da Auditoria Interna Moderna</a></li>
        <li><a href="artigo-2.html">Automação de Controles: Como Aumentar Eficiência em 60%</a></li>
        <li><a href="artigo-5.html">Liderança em Auditoria Interna</a></li>
    </ul>
</div>
```

**4.11 Salve o arquivo**

Pressione `Ctrl+S` (Windows/Linux) ou `Cmd+S` (Mac)

---

### PASSO 5: Adicionar o Artigo ao Blog Principal

Agora você precisa adicionar o novo artigo à página `blog.html` para que apareça na lista.

**5.1 Abra o arquivo:** `portfolio_site/blog.html`

**5.2 Procure pela seção `<main class="blog-content">`**

Você verá os artigos já existentes (artigo-1, artigo-2, etc.)

**5.3 Encontre o último artigo (artigo-5) e procure por:**
```html
                    </article>

                </main>
```

**5.4 Antes de `</main>`, adicione seu novo artigo:**

```html
                    <!-- Artigo 3 -->
                    <article class="blog-post" data-category="tecnologia">
                        <div class="post-header">
                            <h2><a href="blog/artigo-3.html">Data Analytics em Auditoria Interna: Transformando Dados em Insights</a></h2>
                            <div class="post-meta">
                                <span class="post-date"><i class="fas fa-calendar"></i> 26 de Dezembro, 2024</span>
                                <span class="post-category"><i class="fas fa-tag"></i> Tecnologia & Inovação</span>
                                <span class="post-author"><i class="fas fa-user"></i> Tiago Tavares</span>
                            </div>
                        </div>
                        <div class="post-excerpt">
                            <p>Como usar Data Analytics para modernizar a auditoria interna. Aprenda técnicas de análise de dados, ferramentas práticas e como aumentar a cobertura de testes em 50%.</p>
                        </div>
                        <div class="post-tags">
                            <span class="tag">Data Analytics</span>
                            <span class="tag">BI</span>
                            <span class="tag">Inovação</span>
                        </div>
                        <a href="blog/artigo-3.html" class="read-more">Ler Artigo Completo <i class="fas fa-arrow-right"></i></a>
                    </article>

```

**5.5 Salve o arquivo**

Pressione `Ctrl+S` (Windows/Linux) ou `Cmd+S` (Mac)

---

### PASSO 6: Atualizar a Contagem de Artigos na Sidebar

**6.1 No mesmo arquivo `blog.html`, procure pela seção de categorias:**

```html
                            <li><a href="#" class="category-link" data-category="tecnologia">
                                <i class="fas fa-robot"></i> Tecnologia & Inovação
                                <span class="category-count">2</span>
                            </a></li>
```

**6.2 Mude o número de `2` para `3`:**

```html
                            <li><a href="#" class="category-link" data-category="tecnologia">
                                <i class="fas fa-robot"></i> Tecnologia & Inovação
                                <span class="category-count">3</span>
                            </a></li>
```

**6.3 Atualize também o total de artigos:**

Encontre:
```html
                            <li><a href="#" class="category-link active" data-category="todos">
                                <i class="fas fa-folder"></i> Todos os Artigos
                                <span class="category-count">5</span>
                            </a></li>
```

Mude para:
```html
                            <li><a href="#" class="category-link active" data-category="todos">
                                <i class="fas fa-folder"></i> Todos os Artigos
                                <span class="category-count">6</span>
                            </a></li>
```

**6.4 Salve o arquivo**

---

### PASSO 7: Testar Localmente

**7.1 Abra `blog.html` no navegador**

Clique com botão direito em `blog.html` → "Abrir com" → Navegador

**7.2 Verifique se:**
- ✅ O novo artigo aparece na lista
- ✅ O filtro de categoria funciona
- ✅ Você consegue clicar e abrir o artigo
- ✅ Os links internos funcionam
- ✅ O botão de compartilhamento LinkedIn funciona

**7.3 Se algo não funcionar, volte e corrija**

---

### PASSO 8: Fazer Commit no Git

Agora vamos enviar os arquivos para o GitHub.

**8.1 Abra o terminal/command prompt**

**8.2 Navegue até a pasta do projeto:**

```bash
cd caminho/para/portfolio_site
```

**Exemplo (Windows):**
```bash
cd C:\Users\SeuUsuario\Documents\portfolio_site
```

**Exemplo (Mac/Linux):**
```bash
cd ~/Documents/portfolio_site
```

**8.3 Verifique o status do Git:**

```bash
git status
```

Você verá algo como:
```
On branch main
Changes not staged for commit:
  modified:   blog.html
  
Untracked files:
  blog/artigo-3.html
```

**8.4 Adicione os arquivos modificados:**

```bash
git add blog/artigo-3.html blog.html
```

**8.5 Crie um commit com mensagem descritiva:**

```bash
git commit -m "Adicionar novo artigo: Data Analytics em Auditoria Interna"
```

**8.6 Envie para o GitHub:**

```bash
git push origin main
```

Você verá algo como:
```
Enumerating objects: 5, done.
Counting objects: 100% (5/5), done.
...
To https://github.com/seu-username/seu-repositorio.git
   abc1234..def5678  main -> main
```

---

### PASSO 9: Verificar a Publicação

**9.1 Aguarde 1-2 minutos**

GitHub Pages leva alguns segundos para processar

**9.2 Acesse seu blog:**

```
https://seu-username.github.io/blog.html
```

**9.3 Verifique se:**
- ✅ O novo artigo aparece na lista
- ✅ Você consegue abrir o artigo
- ✅ Os links funcionam
- ✅ O design está correto

---

### PASSO 10: Compartilhar no LinkedIn

**10.1 Copie a URL do artigo:**

```
https://seu-username.github.io/blog/artigo-3.html
```

**10.2 Abra LinkedIn e clique em "Escrever artigo"**

**10.3 Cole o link e adicione um resumo:**

```
Acabei de publicar um novo artigo no meu blog sobre Data Analytics em Auditoria Interna.

Neste artigo, compartilho:
✅ Como usar Data Analytics para modernizar auditoria
✅ Ferramentas práticas para começar
✅ Caso real: aumentar cobertura de 1% para 100%

Leia o artigo completo no link abaixo!

[Link do artigo]

#AuditoriaInterna #DataAnalytics #GRC #Inovação #Compliance
```

**10.4 Clique em "Publicar"**

**10.5 Compartilhe também nos comentários:**

Vá para o artigo no seu site e clique no botão "Compartilhar no LinkedIn"

---

## ✅ Checklist Final

- [ ] Copiei o template para `artigo-3.html`
- [ ] Editei todos os metadados (description, keywords, og:tags)
- [ ] Editei o título H1
- [ ] Editei as meta informações (data, categoria)
- [ ] Editei as tags
- [ ] Editei o parágrafo introdutório
- [ ] Editei todas as seções de conteúdo
- [ ] Editei os casos práticos
- [ ] Editei a conclusão
- [ ] Editei os artigos relacionados
- [ ] Adicionei o artigo ao `blog.html`
- [ ] Atualizei a contagem de artigos
- [ ] Testei localmente
- [ ] Fiz o commit: `git add blog/artigo-3.html blog.html`
- [ ] Fiz o push: `git push origin main`
- [ ] Verifiquei no GitHub Pages
- [ ] Compartilhei no LinkedIn

---

## 🎉 Parabéns!

Você publicou seu primeiro artigo! 🚀

Agora você pode:
1. Criar novos artigos seguindo o mesmo processo
2. Compartilhar no LinkedIn regularmente
3. Construir sua autoridade online
4. Atrair recrutadores e oportunidades

---

## 📞 Dúvidas Comuns

**P: Quanto tempo leva para aparecer no Google?**
R: 1-2 semanas. Google precisa rastrear seu site e indexar o artigo.

**P: Posso editar um artigo já publicado?**
R: Sim! Edite o arquivo, faça commit e push. A mudança aparece em minutos.

**P: Como aumentar visualizações?**
R: Compartilhe no LinkedIn, use hashtags relevantes, e publique regularmente.

**P: Preciso de uma foto para cada artigo?**
R: Não é obrigatório, mas ajuda. Use imagens do Unsplash ou Pexels (grátis).

---

**Boa sorte com seu blog! 🚀**
