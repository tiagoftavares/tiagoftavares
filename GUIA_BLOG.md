# Guia Completo: Como Publicar Artigos no Seu Blog e Integrar com LinkedIn

## 📋 Índice

1. [Estrutura do Blog](#estrutura-do-blog)
2. [Como Criar um Novo Artigo](#como-criar-um-novo-artigo)
3. [Otimização para SEO](#otimização-para-seo)
4. [Integração com LinkedIn](#integração-com-linkedin)
5. [Publicar no GitHub Pages](#publicar-no-github-pages)
6. [Melhores Práticas](#melhores-práticas)

---

## 📁 Estrutura do Blog

```
portfolio_site/
├── blog.html                 # Página principal do blog
├── blog-styles.css          # Estilos do blog
├── blog-script.js           # JavaScript do blog
├── blog/
│   ├── artigo-1.html        # Artigo 1
│   ├── artigo-2.html        # Artigo 2
│   ├── artigo-template.html # Template para novos artigos
│   ├── article-styles.css   # Estilos dos artigos
│   └── article-script.js    # JavaScript dos artigos
```

---

## 🚀 Como Criar um Novo Artigo

### Passo 1: Copiar o Template

1. Abra o arquivo `blog/artigo-template.html`
2. Copie todo o conteúdo
3. Crie um novo arquivo: `blog/artigo-X.html` (onde X é o número do artigo)
4. Cole o conteúdo do template

### Passo 2: Editar Metadados

Substitua os placeholders no `<head>`:

```html
<!-- Exemplo de como preencher -->
<meta name="description" content="Seu resumo do artigo em até 160 caracteres">
<meta name="keywords" content="palavra-chave1, palavra-chave2, palavra-chave3">
<meta name="date" content="2024-12-26">

<meta property="og:title" content="Título do seu artigo">
<meta property="og:description" content="Descrição para compartilhar no LinkedIn">
<meta property="og:url" content="https://seu-dominio.com/blog/artigo-X.html">

<title>Título do Artigo - Tiago Tavares</title>
```

### Passo 3: Editar Conteúdo

Substitua os placeholders no corpo do artigo:

```html
<!-- Título -->
<h1>[TÍTULO DO ARTIGO]</h1>

<!-- Meta informações -->
<span class="date"><i class="fas fa-calendar"></i> 15 de Dezembro, 2024</span>
<span class="reading-time"><i class="fas fa-clock"></i> 5 min</span>
<span class="category"><i class="fas fa-tag"></i> [CATEGORIA]</span>

<!-- Tags -->
<span class="tag">[TAG 1]</span>
<span class="tag">[TAG 2]</span>

<!-- Conteúdo -->
<p class="intro-paragraph">
    [PARÁGRAFO INTRODUTÓRIO]
</p>

<h2>[TÍTULO DA SEÇÃO]</h2>
<p>[CONTEÚDO DA SEÇÃO]</p>
```

### Passo 4: Adicionar ao Blog Principal

Abra `blog.html` e adicione um novo artigo na seção `<main class="blog-content">`:

```html
<article class="blog-post" data-category="[CATEGORIA]">
    <div class="post-header">
        <h2><a href="blog/artigo-X.html">Título do Seu Artigo</a></h2>
        <div class="post-meta">
            <span class="post-date"><i class="fas fa-calendar"></i> 26 de Dezembro, 2024</span>
            <span class="post-category"><i class="fas fa-tag"></i> [CATEGORIA]</span>
            <span class="post-author"><i class="fas fa-user"></i> Tiago Tavares</span>
        </div>
    </div>
    <div class="post-excerpt">
        <p>Resumo do artigo em uma ou duas linhas...</p>
    </div>
    <div class="post-tags">
        <span class="tag">[TAG 1]</span>
        <span class="tag">[TAG 2]</span>
    </div>
    <a href="blog/artigo-X.html" class="read-more">Ler Artigo Completo <i class="fas fa-arrow-right"></i></a>
</article>
```

---

## 🔍 Otimização para SEO

### Palavras-Chave Estratégicas

Use palavras-chave que recrutadores buscam:

- **Auditoria Interna:** auditoria interna, auditor interno, auditoria operacional, auditoria de conformidade
- **Tecnologia:** automação de controles, data analytics, IA em auditoria, GCP, Snowflake
- **Liderança:** liderança em auditoria, gestão de equipes, desenvolvimento de talentos
- **Conformidade:** SOX, LGPD, ISO 31000, COSO, compliance

### Meta Descrição

- Máximo 160 caracteres
- Inclua a palavra-chave principal
- Seja descritivo e atrativo

**Exemplo:**
```
"Descubra os 5 pilares que definem uma auditoria interna moderna e estratégica. Independência, conformidade, dados, tecnologia e liderança."
```

### Título (H1)

- Um único H1 por página
- Inclua a palavra-chave principal
- Máximo 60 caracteres

### Headings (H2, H3)

- Use H2 para seções principais
- Use H3 para subseções
- Inclua palavras-chave naturalmente

### Links Internos

Adicione links para outros artigos:

```html
<p>Para saber mais, leia nosso artigo sobre <a href="artigo-2.html">Automação de Controles</a>.</p>
```

### Open Graph (para LinkedIn)

Preencha corretamente para melhor compartilhamento:

```html
<meta property="og:title" content="Título do Artigo">
<meta property="og:description" content="Descrição atrativa">
<meta property="og:type" content="article">
<meta property="og:url" content="URL completa do artigo">
<meta property="og:image" content="URL da imagem (opcional)">
```

---

## 🔗 Integração com LinkedIn

### Estratégia de Publicação

**Passo 1: Publicar no Blog**
1. Crie o artigo em `blog/artigo-X.html`
2. Adicione à página `blog.html`
3. Publique no GitHub Pages

**Passo 2: Compartilhar no LinkedIn**
1. Copie a URL completa do artigo
2. Acesse LinkedIn
3. Clique em "Escrever artigo"
4. Cole o link do artigo na descrição
5. Adicione um resumo atrativo
6. Inclua 3-5 hashtags relevantes

### Hashtags Recomendadas

```
#AuditoriaInterna
#GRC
#Compliance
#DataAnalytics
#Liderança
#TransformaçãoDigital
#Inovação
#Automação
#LGPD
#SOX
```

### Texto de Introdução para LinkedIn

**Exemplo:**
```
Acabei de publicar um novo artigo no meu blog sobre os 5 pilares da auditoria interna moderna.

Neste artigo, exploro como a auditoria interna está evoluindo para ser mais estratégica, orientada por dados e focada em criar valor.

Os 5 pilares são:
1️⃣ Independência e Objetividade
2️⃣ Conformidade e Frameworks
3️⃣ Dados e Analytics
4️⃣ Tecnologia e Inovação
5️⃣ Liderança e Desenvolvimento

Leia o artigo completo no link abaixo e compartilhe com seus colegas!

[Link do artigo]

#AuditoriaInterna #GRC #Compliance #Inovação
```

### Botão de Compartilhamento

O artigo já tem um botão de compartilhamento no LinkedIn:

```html
<a href="#" class="btn btn-primary" onclick="shareOnLinkedIn('Título', window.location.href); return false;">
    <i class="fab fa-linkedin"></i> Compartilhar no LinkedIn
</a>
```

---

## 📤 Publicar no GitHub Pages

### Passo 1: Adicionar Arquivos ao Git

```bash
cd portfolio_site
git add blog/artigo-X.html
git add blog.html
git commit -m "Adicionar novo artigo: Título do Artigo"
```

### Passo 2: Enviar para GitHub

```bash
git push origin main
```

### Passo 3: Verificar Publicação

1. Acesse `https://seu-username.github.io/blog.html`
2. Verifique se o novo artigo aparece
3. Clique para abrir e testar os links

---

## 💡 Melhores Práticas

### Estrutura de Conteúdo

✅ **Faça:**
- Comece com uma introdução atrativa
- Use subtítulos (H2) para organizar o conteúdo
- Inclua exemplos práticos e casos de uso
- Termine com uma conclusão e call-to-action
- Use listas para facilitar a leitura

❌ **Não Faça:**
- Parágrafos muito longos (máximo 3-4 linhas)
- Sem estrutura ou headings
- Sem links internos
- Sem call-to-action

### Frequência de Publicação

**Recomendado:** 1 artigo por semana

**Temas Sugeridos:**
- Semana 1: Auditoria Interna (Categoria: Auditoria)
- Semana 2: Tecnologia/Inovação (Categoria: Tecnologia)
- Semana 3: Liderança (Categoria: Liderança)
- Semana 4: Compliance/Conformidade (Categoria: Auditoria)

### Promoção

1. **LinkedIn:** Compartilhe o artigo com resumo atrativo
2. **Email:** Se tiver newsletter, inclua o link
3. **Redes Sociais:** Compartilhe em outras plataformas
4. **Networking:** Mencione em conversas profissionais

### Análise

Monitore:
- Visualizações do blog
- Cliques nos artigos
- Compartilhamentos no LinkedIn
- Engajamento

---

## 📝 Checklist para Novo Artigo

- [ ] Copiar template
- [ ] Preencher metadados (description, keywords, og:tags)
- [ ] Escrever título atrativo (H1)
- [ ] Escrever introdução
- [ ] Criar seções com H2
- [ ] Adicionar exemplos práticos
- [ ] Adicionar links internos
- [ ] Escrever conclusão
- [ ] Adicionar tags
- [ ] Adicionar call-to-action
- [ ] Adicionar ao blog.html
- [ ] Testar links
- [ ] Fazer commit e push
- [ ] Compartilhar no LinkedIn

---

## 🎯 Estratégia de Contratação

**Quando alguém buscar por você na internet:**

1. **Google encontra seu site** → Seu domínio pessoal
2. **Vê seus artigos** → Prova de expertise
3. **Vê seu portfólio** → Prova de experiência
4. **Vê seu perfil** → Prova de liderança
5. **Clica em contato** → Você é contratado! 🎉

**Resultado:** Você vira uma autoridade em Auditoria Interna + Inovação em Tecnologia

---

## 📞 Suporte

Para dúvidas sobre:
- **SEO:** Consulte Google Search Console
- **LinkedIn:** Veja LinkedIn Creator Mode
- **GitHub Pages:** Consulte documentação oficial

---

**Boa sorte com seu blog! 🚀**
