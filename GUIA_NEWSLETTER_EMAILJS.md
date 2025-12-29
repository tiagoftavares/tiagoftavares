# Guia de Configuração - Newsletter com EmailJS

## O que foi implementado

A newsletter do seu blog agora está integrada com **EmailJS**, um serviço que permite enviar emails diretamente do frontend sem necessidade de backend.

## Como Configurar (3 passos simples)

### Passo 1: Criar Conta no EmailJS

1. Acesse [emailjs.com](https://www.emailjs.com/)
2. Clique em "Sign Up" e crie uma conta gratuita
3. Confirme seu email

### Passo 2: Configurar Serviço de Email

1. No painel do EmailJS, vá para **"Email Services"**
2. Clique em **"Add New Service"**
3. Escolha seu provedor de email (Gmail, Outlook, etc.)
4. Siga as instruções para conectar sua conta de email
5. **Copie o Service ID** (exemplo: `service_abc123xyz`)

### Passo 3: Criar Template de Email

1. Vá para **"Email Templates"**
2. Clique em **"Create New Template"**
3. Configure o template com as seguintes variáveis:
   - `{{to_email}}` - Email do subscriber
   - `{{subscriber_email}}` - Email do subscriber (cópia)
   - `{{message}}` - Mensagem de boas-vindas

**Exemplo de template:**
```
Assunto: Bem-vindo à Newsletter de Tiago Tavares!

Olá,

{{message}}

Atenciosamente,
Tiago Tavares
```

4. **Copie o Template ID** (exemplo: `template_abc123xyz`)

### Passo 4: Obter Public Key

1. Vá para **"Account"** → **"API Keys"**
2. **Copie sua Public Key** (começa com `YOUR_PUBLIC_KEY`)

### Passo 5: Atualizar o Código

Abra o arquivo `blog-script.js` e substitua:

```javascript
emailjs.init('YOUR_PUBLIC_KEY');
```

Por:

```javascript
emailjs.init('sua_public_key_aqui');
```

E também atualize:

```javascript
emailjs.send('service_newsletter', 'template_newsletter', {
```

Por:

```javascript
emailjs.send('seu_service_id_aqui', 'seu_template_id_aqui', {
```

## Resultado Final

Quando alguém preencher a newsletter:

✓ O email será enviado para o seu email configurado  
✓ Um email de confirmação será enviado para o subscriber  
✓ O botão mostrará "✓ Inscrito!" por 3 segundos  
✓ Tudo funcionará automaticamente sem backend

## Suporte

- Documentação EmailJS: [emailjs.com/docs](https://www.emailjs.com/docs)
- FAQ: [emailjs.com/help](https://www.emailjs.com/help)

## Versão Gratuita

O plano gratuito do EmailJS permite:
- Até 200 emails por mês
- Ilimitado de templates
- Suporte por email

Se precisar de mais, há planos pagos disponíveis.

---

**Pronto! Sua newsletter agora está funcional!** 🎉
