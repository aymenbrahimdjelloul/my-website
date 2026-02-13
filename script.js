// Mobile Menu Toggle
const mobileMenuToggle = document.querySelector('.mobile-menu-toggle');
const navMenu = document.querySelector('.nav-menu');

if (mobileMenuToggle) {
    mobileMenuToggle.addEventListener('click', () => {
        navMenu.classList.toggle('active');
    });

    // Close menu when clicking outside
    document.addEventListener('click', (e) => {
        if (!mobileMenuToggle.contains(e.target) && !navMenu.contains(e.target)) {
            navMenu.classList.remove('active');
        }
    });

    // Close menu when clicking a link
    const navLinks = document.querySelectorAll('.nav-menu a');
    navLinks.forEach(link => {
        link.addEventListener('click', () => {
            navMenu.classList.remove('active');
        });
    });
}

// Intersection Observer for scroll animations
const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -50px 0px'
};

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('visible');
        }
    });
}, observerOptions);

// Observe all fade-in elements
document.querySelectorAll('.fade-in-up').forEach(el => {
    observer.observe(el);
});

// Smooth scroll with offset for fixed header
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        
        if (target) {
            const headerOffset = 80;
            const elementPosition = target.getBoundingClientRect().top;
            const offsetPosition = elementPosition + window.pageYOffset - headerOffset;

            window.scrollTo({
                top: offsetPosition,
                behavior: 'smooth'
            });
        }
    });
});

// Parallax effect on scroll
window.addEventListener('scroll', () => {
    const scrolled = window.pageYOffset;
    const heroCode = document.querySelector('.hero-code');
    
    if (heroCode && scrolled < 1000) {
        heroCode.style.transform = `translateY(${scrolled * 0.3}px)`;
    }
});

// Code typing effect is handled by CSS animation

// Typing and Deleting Effect for Code
const codeElement = document.getElementById('typing-code');

if (codeElement) {
    const codeLines = [
        // First code block
        `<span class="code-keyword">struct</span> <span class="code-type">Developer</span> {
    <span class="code-type">char</span>* name;
    <span class="code-type">bool</span> coffee;
};

<span class="code-type">struct</span> <span class="code-type">Developer</span> dev = {
    <span class="code-string">"Aymen"</span>,
    <span class="code-keyword">true</span>
};

<span class="code-keyword">if</span> (dev.coffee)
    <span class="code-function">printf</span>(<span class="code-string">"Fuel: coffee\\n"</span>);`,
        
        // Second code block
        `<span class="code-type">char</span>* skills[] = {
    <span class="code-string">"C"</span>,
    <span class="code-string">"Python"</span>,
    <span class="code-string">"JavaScript"</span>
};

<span class="code-keyword">for</span> (<span class="code-type">int</span> i = <span class="code-number">0</span>; i < <span class="code-number">3</span>; i++)
    <span class="code-function">printf</span>(<span class="code-string">"%s "</span>, skills[i]);`,
        
        // Third code block
        `<span class="code-function">printf</span>(<span class="code-string">"\\nHello, %s!"</span>, dev.name);

<span class="code-comment">// Building the future</span>
<span class="code-keyword">while</span> (<span class="code-keyword">true</span>) {
    <span class="code-function">code</span>();
    <span class="code-function">learn</span>();
    <span class="code-function">innovate</span>();
}`
    ];

    let currentBlockIndex = 0;
    let currentText = '';
    let isDeleting = false;
    let charIndex = 0;
    
    function typeEffect() {
        const currentBlock = codeLines[currentBlockIndex];
        const strippedBlock = stripHTML(currentBlock);
        
        if (isDeleting) {
            // Deleting
            currentText = strippedBlock.substring(0, charIndex - 1);
            charIndex--;
        } else {
            // Typing
            currentText = strippedBlock.substring(0, charIndex + 1);
            charIndex++;
        }
        
        // Apply HTML formatting to the current text
        codeElement.innerHTML = applyFormatting(currentText, currentBlock);
        
        let typingSpeed = isDeleting ? 10 : 30;
        
        if (!isDeleting && charIndex === strippedBlock.length) {
            // Pause at end before deleting
            typingSpeed = 3000;
            isDeleting = true;
        } else if (isDeleting && charIndex === 0) {
            // Move to next block
            isDeleting = false;
            currentBlockIndex = (currentBlockIndex + 1) % codeLines.length;
            typingSpeed = 500;
        }
        
        setTimeout(typeEffect, typingSpeed);
    }
    
    function stripHTML(html) {
        const temp = document.createElement('div');
        temp.innerHTML = html;
        return temp.textContent || temp.innerText || '';
    }
    
    function applyFormatting(plainText, fullHTML) {
        // This rebuilds the HTML with syntax highlighting
        // by matching the plain text length to the formatted version
        const temp = document.createElement('div');
        temp.innerHTML = fullHTML;
        const fullText = temp.textContent || temp.innerText || '';
        
        if (plainText.length >= fullText.length) {
            return fullHTML;
        }
        
        // Gradually build the formatted version
        let result = '';
        let plainIndex = 0;
        let htmlIndex = 0;
        let inTag = false;
        
        while (plainIndex < plainText.length && htmlIndex < fullHTML.length) {
            if (fullHTML[htmlIndex] === '<') {
                inTag = true;
            }
            
            if (inTag) {
                result += fullHTML[htmlIndex];
                if (fullHTML[htmlIndex] === '>') {
                    inTag = false;
                }
            } else {
                result += fullHTML[htmlIndex];
                plainIndex++;
            }
            htmlIndex++;
        }
        
        // Close any open tags
        let openTags = [];
        let tempResult = result;
        const tagRegex = /<\/?span[^>]*>/g;
        let match;
        
        while ((match = tagRegex.exec(tempResult)) !== null) {
            if (match[0].startsWith('</')) {
                openTags.pop();
            } else {
                openTags.push(match[0]);
            }
        }
        
        // Close remaining open tags
        while (openTags.length > 0) {
            result += '</span>';
            openTags.pop();
        }
        
        return result;
    }
    
    // Start typing after page loads
    setTimeout(() => {
        typeEffect();
    }, 1500);
}

// Project cards stagger animation on scroll
const projectCards = document.querySelectorAll('.project-card');
const projectObserver = new IntersectionObserver((entries) => {
    entries.forEach((entry, index) => {
        if (entry.isIntersecting) {
            setTimeout(() => {
                entry.target.style.animation = `slideUp 0.6s ease-out forwards`;
            }, index * 100);
        }
    });
}, { threshold: 0.1 });

projectCards.forEach(card => {
    card.style.opacity = '0';
    projectObserver.observe(card);
});

// Add active state to navigation on scroll
const sections = document.querySelectorAll('section[id]');

function highlightNavigation() {
    const scrollY = window.pageYOffset;

    sections.forEach(section => {
        const sectionHeight = section.offsetHeight;
        const sectionTop = section.offsetTop - 100;
        const sectionId = section.getAttribute('id');
        const navLink = document.querySelector(`.nav-menu a[href="#${sectionId}"]`);

        if (navLink && scrollY > sectionTop && scrollY <= sectionTop + sectionHeight) {
            document.querySelectorAll('.nav-menu a').forEach(link => {
                link.style.color = 'var(--text-secondary)';
            });
            navLink.style.color = 'var(--primary-color)';
        }
    });
}

window.addEventListener('scroll', highlightNavigation);

// Add hover effect for project cards
projectCards.forEach(card => {
    card.addEventListener('mouseenter', function() {
        this.style.transition = 'all 0.4s cubic-bezier(0.175, 0.885, 0.32, 1.275)';
    });
    
    card.addEventListener('mousemove', function(e) {
        const rect = this.getBoundingClientRect();
        const x = e.clientX - rect.left;
        const y = e.clientY - rect.top;
        
        const centerX = rect.width / 2;
        const centerY = rect.height / 2;
        
        const rotateX = (y - centerY) / 50;
        const rotateY = (centerX - x) / 50;
        
        this.style.transform = `perspective(1000px) rotateX(${rotateX}deg) rotateY(${rotateY}deg) translateY(-10px)`;
    });
    
    card.addEventListener('mouseleave', function() {
        this.style.transform = 'perspective(1000px) rotateX(0) rotateY(0) translateY(0)';
    });
});

// Page is ready

// Console Easter Egg
console.log('%c👋 Hello there!', 'font-size: 20px; font-weight: bold; color: #3b82f6;');
console.log('%cLooking at the code? I like your curiosity!', 'font-size: 14px; color: #8b5cf6;');
console.log('%cFeel free to reach out: brahimdjelloulaymen@gmail.com', 'font-size: 12px; color: #cbd5e1;');
