// ============================================
// ARTICLE FUNCTIONALITY
// ============================================

// Share functions
function shareOnLinkedIn(title, url) {
    const linkedInUrl = `https://www.linkedin.com/sharing/share-offsite/?url=${encodeURIComponent(url)}`;
    window.open(linkedInUrl, '_blank', 'width=600,height=400');
}

function shareOnTwitter(title, url) {
    const twitterUrl = `https://twitter.com/intent/tweet?text=${encodeURIComponent(title)}&url=${encodeURIComponent(url)}`;
    window.open(twitterUrl, '_blank', 'width=600,height=400');
}

// Copy URL to clipboard
function copyToClipboard() {
    const url = window.location.href;
    navigator.clipboard.writeText(url).then(() => {
        alert('Link copiado para a área de transferência!');
    });
}

// ============================================
// READING TIME CALCULATION
// ============================================

function calculateReadingTime() {
    const content = document.querySelector('.article-content');
    if (!content) return;

    const text = content.innerText;
    const wordsPerMinute = 200;
    const words = text.split(/\s+/).length;
    const readingTime = Math.ceil(words / wordsPerMinute);

    const readingTimeElement = document.querySelector('.reading-time');
    if (readingTimeElement) {
        readingTimeElement.innerHTML = `<i class="fas fa-clock"></i> ${readingTime} min`;
    }
}

// ============================================
// TABLE OF CONTENTS (Opcional)
// ============================================

function generateTableOfContents() {
    const headings = document.querySelectorAll('.article-content h2');
    const toc = document.createElement('div');
    toc.className = 'table-of-contents';
    toc.innerHTML = '<h3>Índice</h3><ul></ul>';

    headings.forEach((heading, index) => {
        const id = `section-${index}`;
        heading.id = id;

        const li = document.createElement('li');
        const a = document.createElement('a');
        a.href = `#${id}`;
        a.textContent = heading.textContent;
        li.appendChild(a);

        toc.querySelector('ul').appendChild(li);
    });

    const content = document.querySelector('.article-content');
    if (content && headings.length > 0) {
        content.insertBefore(toc, content.firstChild);
    }
}

// ============================================
// NEWSLETTER FORM
// ============================================

const newsletterForms = document.querySelectorAll('.newsletter-form');

newsletterForms.forEach(form => {
    form.addEventListener('submit', (e) => {
        e.preventDefault();

        const email = form.querySelector('input[type="email"]').value;
        const button = form.querySelector('button');
        const originalText = button.innerHTML;

        // Show success message
        button.innerHTML = '<i class="fas fa-check"></i> Inscrito!';
        button.style.background = 'var(--success-color)';

        // Reset after 3 seconds
        setTimeout(() => {
            button.innerHTML = originalText;
            button.style.background = '';
            form.reset();
        }, 3000);

        // Here you would send the email to your backend
        console.log('Email inscrito:', email);
    });
});

// ============================================
// HIGHLIGHT CODE BLOCKS (Opcional)
// ============================================

function highlightCodeBlocks() {
    const codeBlocks = document.querySelectorAll('pre code');
    codeBlocks.forEach(block => {
        block.classList.add('language-javascript');
    });
}

// ============================================
// SMOOTH SCROLL
// ============================================

document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            target.scrollIntoView({
                behavior: 'smooth',
                block: 'start'
            });
        }
    });
});

// ============================================
// INITIALIZE ON PAGE LOAD
// ============================================

document.addEventListener('DOMContentLoaded', () => {
    calculateReadingTime();
    // generateTableOfContents(); // Comentado: índice removido conforme solicitado
    highlightCodeBlocks();
});

// ============================================
// CONSOLE MESSAGE
// ============================================

console.log('%c📝 Artigo de Tiago Tavares', 'color: #0066cc; font-size: 16px; font-weight: bold;');
console.log('%cCompartilhe este artigo no LinkedIn para ajudar outros profissionais!', 'color: #00d4ff; font-size: 14px;');
