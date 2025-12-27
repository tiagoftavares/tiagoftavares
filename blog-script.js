// ============================================
// BLOG FUNCTIONALITY
// ============================================

// Filter posts by category
const categoryLinks = document.querySelectorAll('.category-link');
const blogPosts = document.querySelectorAll('.blog-post');

categoryLinks.forEach(link => {
    link.addEventListener('click', (e) => {
        e.preventDefault();
        
        // Remove active class from all links
        categoryLinks.forEach(l => l.classList.remove('active'));
        
        // Add active class to clicked link
        link.classList.add('active');
        
        // Get selected category
        const selectedCategory = link.getAttribute('data-category');
        
        // Filter posts
        blogPosts.forEach(post => {
            const postCategory = post.getAttribute('data-category');
            
            if (selectedCategory === 'todos' || postCategory === selectedCategory) {
                post.classList.remove('hidden');
                post.style.animation = 'fadeIn 0.6s ease forwards';
            } else {
                post.classList.add('hidden');
            }
        });
    });
});

// ============================================
// NEWSLETTER FORM
// ============================================

const newsletterForm = document.querySelector('.newsletter-form');

if (newsletterForm) {
    newsletterForm.addEventListener('submit', (e) => {
        e.preventDefault();
        
        const email = newsletterForm.querySelector('input[type="email"]').value;
        const button = newsletterForm.querySelector('button');
        const originalText = button.innerHTML;
        
        // Show success message
        button.innerHTML = '<i class="fas fa-check"></i> Inscrito!';
        button.style.background = 'var(--success-color)';
        
        // Reset after 3 seconds
        setTimeout(() => {
            button.innerHTML = originalText;
            button.style.background = '';
            newsletterForm.reset();
        }, 3000);
        
        // Here you would send the email to your backend
        console.log('Email inscrito:', email);
    });
}

// ============================================
// SMOOTH SCROLL FOR ANCHOR LINKS
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
// SHARE POST ON SOCIAL MEDIA
// ============================================

function shareOnLinkedIn(title, url) {
    const linkedInUrl = `https://www.linkedin.com/sharing/share-offsite/?url=${encodeURIComponent(url)}`;
    window.open(linkedInUrl, '_blank', 'width=600,height=400');
}

function shareOnTwitter(title, url) {
    const twitterUrl = `https://twitter.com/intent/tweet?text=${encodeURIComponent(title)}&url=${encodeURIComponent(url)}`;
    window.open(twitterUrl, '_blank', 'width=600,height=400');
}

// ============================================
// CONSOLE MESSAGE
// ============================================

console.log('%c🚀 Bem-vindo ao Blog de Tiago Tavares!', 'color: #0066cc; font-size: 16px; font-weight: bold;');
console.log('%cArtigos sobre Auditoria Interna, GRC e Inovação em Tecnologia', 'color: #00d4ff; font-size: 14px;');
