(function() {
    // ===== UPDATE COPYRIGHT YEAR =====
    document.getElementById('currentYear').textContent = new Date().getFullYear();

    // ===== TYPED TEXT EFFECT =====
    const typedTextElement = document.getElementById('typed-text');
    const phrases = [
        'Data Analyst',
        'MIS Specialist',
        'Power BI Expert',
        'Garments Industry Professional',
        'Reporting Specialist',
        'ERP Consultant'
    ];
    
    let phraseIndex = 0;
    let charIndex = 0;
    let isDeleting = false;
    
    function typeEffect() {
        const currentPhrase = phrases[phraseIndex];
        
        if (isDeleting) {
            typedTextElement.textContent = currentPhrase.substring(0, charIndex - 1);
            charIndex--;
        } else {
            typedTextElement.textContent = currentPhrase.substring(0, charIndex + 1);
            charIndex++;
        }
        
        if (!isDeleting && charIndex === currentPhrase.length) {
            isDeleting = true;
            setTimeout(typeEffect, 2000);
        } else if (isDeleting && charIndex === 0) {
            isDeleting = false;
            phraseIndex = (phraseIndex + 1) % phrases.length;
            setTimeout(typeEffect, 500);
        } else {
            setTimeout(typeEffect, isDeleting ? 50 : 100);
        }
    }
    
    if (typedTextElement) {
        typeEffect();
    }

    // ===== THEME TOGGLE =====
    const themeToggle = document.getElementById('themeToggle');
    themeToggle.addEventListener('click', () => {
        document.body.classList.toggle('dark');
        themeToggle.innerHTML = document.body.classList.contains('dark') 
            ? '<i class="fas fa-sun"></i>' 
            : '<i class="fas fa-moon"></i>';
    });

    // ===== MOBILE MENU =====
    const mobileToggle = document.getElementById('mobileToggle');
    const mobileMenu = document.getElementById('mobileMenu');
    
    mobileToggle.addEventListener('click', () => {
        mobileMenu.classList.toggle('active');
        mobileToggle.innerHTML = mobileMenu.classList.contains('active')
            ? '<i class="fas fa-times"></i>'
            : '<i class="fas fa-bars"></i>';
    });

    // ===== ACTIVE NAV LINK =====
    const sections = document.querySelectorAll('section');
    const navLinks = document.querySelectorAll('.nav-links a');

    window.addEventListener('scroll', () => {
        let current = '';
        sections.forEach(section => {
            const sectionTop = section.offsetTop;
            const sectionHeight = section.clientHeight;
            if (window.scrollY >= sectionTop - 200) {
                current = section.getAttribute('id');
            }
        });

        navLinks.forEach(link => {
            link.classList.remove('active');
            if (link.getAttribute('href') === `#${current}`) {
                link.classList.add('active');
            }
        });

        // Back to top button
        const backToTop = document.getElementById('backToTop');
        if (window.scrollY > 500) {
            backToTop.classList.add('show');
        } else {
            backToTop.classList.remove('show');
        }
    });

    // ===== SKILLS DATA =====
    const skills = [
        { name: 'MIS Reporting', level: 96, icon: 'fa-chart-line' },
        { name: 'Advanced Excel', level: 94, icon: 'fa-file-excel' },
        { name: 'Power BI', level: 92, icon: 'fa-chart-simple' },
        { name: 'ERP Systems', level: 88, icon: 'fa-database' },
        { name: 'SQL', level: 89, icon: 'fa-code' },
        { name: 'Production Analytics', level: 95, icon: 'fa-industry' }
    ];

    const skillsContainer = document.getElementById('skillsContainer');
    if (skillsContainer) {
        skillsContainer.innerHTML = skills.map(skill => `
            <div class="skill-card">
                <div class="skill-header">
                    <i class="fas ${skill.icon}"></i>
                    <span class="skill-percent counter" data-target="${skill.level}">0</span><span>%</span>
                </div>
                <h4>${skill.name}</h4>
                <div class="skill-bar">
                    <div class="skill-bar-fill" style="width: 0%"></div>
                </div>
            </div>
        `).join('');
    }

    // ===== PROJECTS DATA WITH 3-IMAGE SLIDER =====
    const projects = [
        {
            title: 'Production OEE Dashboard',
            tools: 'Power BI, SQL Server, Excel',
            impact: '+12% OEE',
            badge: 'LIVE',
            kpi1: '98%',
            kpi2: '3s refresh',
            desc: 'Line-wise efficiency, downtime alerts, and production tracking in real-time.',
            fullDesc: 'Comprehensive OEE dashboard tracking 5 production lines across 3 shifts. Includes downtime analysis, top loss reasons, and predictive maintenance alerts. Reduced manual reporting time by 95%.',
            icon: 'fa-chart-line',
            images: [
                'https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=600&h=400&fit=crop',
                'https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=600&h=400&fit=crop',
                'https://images.unsplash.com/photo-1543286386-713bdd548da4?w=600&h=400&fit=crop'
            ]
        },
        {
            title: 'Inventory Early Warning',
            tools: 'Excel VBA, ERP, Power Query',
            impact: '18% stock cut',
            badge: 'AUTO',
            kpi1: 'reorder',
            kpi2: 'aging',
            desc: 'Automated fabric monitoring with reorder alerts and aging analysis.',
            fullDesc: 'Smart inventory system that monitors 500+ fabric SKUs with automated reorder points. Includes aging analysis, supplier performance tracking, and demand forecasting. Reduced stockouts by 65%.',
            icon: 'fa-boxes',
            images: [
                'https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?w=600&h=400&fit=crop',
                'https://images.unsplash.com/photo-1566576912321-d58ddd7a6088?w=600&h=400&fit=crop',
                'https://images.unsplash.com/photo-1553413077-190dd305871a?w=600&h=400&fit=crop'
            ]
        },
        {
            title: 'Order Tracking Portal',
            tools: 'PowerApps, SharePoint, Power Automate',
            impact: '99% OTIF',
            badge: 'ongoing',
            kpi1: 'real-time',
            kpi2: 'delay pred.',
            desc: 'End-to-end visibility from order placement to shipment delivery.',
            fullDesc: 'Real-time order tracking system covering 50+ international buyers. Features automated delay predictions, shipment tracking, and customer notifications. Improved on-time delivery from 82% to 99%.',
            icon: 'fa-truck',
            images: [
                'https://images.unsplash.com/photo-1566576912321-d58ddd7a6088?w=600&h=400&fit=crop',
                'https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?w=600&h=400&fit=crop',
                'https://images.unsplash.com/photo-1553413077-190dd305871a?w=600&h=400&fit=crop'
            ]
        },
        {
            title: 'Labor Efficiency Analyzer',
            tools: 'Python, Google Sheets, Data Studio',
            impact: '7% productivity',
            badge: 'completed',
            kpi1: 'daily feed',
            kpi2: 'line view',
            desc: 'Operator-level dashboard tracking individual and team performance.',
            fullDesc: 'Granular labor efficiency system tracking 200+ operators across 20 production lines. Includes skill matrix, incentive calculations, and productivity trends. Increased overall labor efficiency by 7%.',
            icon: 'fa-users',
            images: [
                'https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=600&h=400&fit=crop',
                'https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=600&h=400&fit=crop',
                'https://images.unsplash.com/photo-1543286386-713bdd548da4?w=600&h=400&fit=crop'
            ]
        }
    ];

    const projectsContainer = document.getElementById('projectsContainer');
    if (projectsContainer) {
        projectsContainer.innerHTML = projects.map((p, projectIndex) => {
            const sliderImages = p.images.map((imgPath, idx) => `
                <div class="slider-image">
                    <img src="${imgPath}" 
                         alt="${p.title} - View ${idx + 1}"
                         loading="lazy">
                </div>
            `).join('');
            
            const dots = p.images.map((_, idx) => `
                <span class="slider-dot ${idx === 0 ? 'active' : ''}" data-index="${idx}"></span>
            `).join('');
            
            return `
                <div class="project-card" data-project="${projectIndex}">
                    <div class="project-image-slider">
                        <div class="slider-container">
                            <div class="slider-wrapper" id="slider-${projectIndex}">
                                ${sliderImages}
                            </div>
                            <button class="slider-btn prev" onclick="event.stopPropagation(); moveSlider(${projectIndex}, -1)">❮</button>
                            <button class="slider-btn next" onclick="event.stopPropagation(); moveSlider(${projectIndex}, 1)">❯</button>
                        </div>
                        <div class="slider-dots" id="dots-${projectIndex}">
                            ${dots}
                        </div>
                    </div>
                    
                    <div class="project-content">
                        <div class="project-title">
                            <h3>${p.title}</h3>
                            <span class="project-badge ${p.badge.toLowerCase()}">${p.badge}</span>
                        </div>
                        <p class="project-desc">${p.desc}</p>
                        
                        <div class="project-full-desc" id="fullDesc-${projectIndex}">
                            <p>${p.fullDesc}</p>
                        </div>
                        
                        <button class="read-more-btn" onclick="toggleReadMore(${projectIndex})">
                            <span class="btn-text">Read More</span>
                            <i class="fas fa-chevron-down"></i>
                        </button>
                        
                        <div class="project-meta">
                            <span>${p.kpi1}</span>
                            <span>${p.kpi2}</span>
                        </div>
                        <div class="project-tools">
                            <i class="fas fa-cog"></i> ${p.tools}
                        </div>
                        <div class="project-impact">
                            <strong>Impact:</strong> ${p.impact}
                        </div>
                    </div>
                </div>
            `;
        }).join('');

        // Slider functionality
        window.sliderStates = {};
        
        window.moveSlider = function(projectIndex, direction) {
            const slider = document.getElementById(`slider-${projectIndex}`);
            if (!slider) return;
            
            const totalImages = slider.children.length;
            const currentIndex = window.sliderStates[projectIndex]?.currentIndex || 0;
            let newIndex = currentIndex + direction;
            
            if (newIndex < 0) newIndex = totalImages - 1;
            if (newIndex >= totalImages) newIndex = 0;
            
            slider.style.transform = `translateX(-${newIndex * 100}%)`;
            
            const dots = document.querySelectorAll(`#dots-${projectIndex} .slider-dot`);
            dots.forEach((dot, idx) => {
                if (idx === newIndex) {
                    dot.classList.add('active');
                } else {
                    dot.classList.remove('active');
                }
            });
            
            if (!window.sliderStates[projectIndex]) window.sliderStates[projectIndex] = {};
            window.sliderStates[projectIndex].currentIndex = newIndex;
        };

        document.querySelectorAll('[id^="slider-"]').forEach((slider, index) => {
            const projectIndex = index;
            window.sliderStates[projectIndex] = { currentIndex: 0 };
            
            const dots = document.querySelectorAll(`#dots-${projectIndex} .slider-dot`);
            dots.forEach((dot, dotIndex) => {
                dot.addEventListener('click', (e) => {
                    e.stopPropagation();
                    const slider = document.getElementById(`slider-${projectIndex}`);
                    slider.style.transform = `translateX(-${dotIndex * 100}%)`;
                    
                    dots.forEach(d => d.classList.remove('active'));
                    dot.classList.add('active');
                    
                    window.sliderStates[projectIndex].currentIndex = dotIndex;
                });
            });
        });

        window.toggleReadMore = function(projectIndex) {
            const fullDesc = document.getElementById(`fullDesc-${projectIndex}`);
            const button = event.currentTarget;
            const buttonText = button.querySelector('.btn-text');
            const icon = button.querySelector('i');
            
            if (fullDesc.classList.contains('show')) {
                fullDesc.classList.remove('show');
                buttonText.textContent = 'Read More';
                icon.className = 'fas fa-chevron-down';
            } else {
                fullDesc.classList.add('show');
                buttonText.textContent = 'Read Less';
                icon.className = 'fas fa-chevron-up';
            }
        };
    }

    // ===== COUNTER ANIMATION =====
    const counters = document.querySelectorAll('.counter');
    const skillBars = document.querySelectorAll('.skill-bar-fill');
    const statProgressBars = document.querySelectorAll('.stats-progress-bar');
    
    const animateCounter = (element, target) => {
        let current = 0;
        const increment = target / 50;
        const updateCounter = () => {
            current += increment;
            if (current < target) {
                element.innerText = Math.ceil(current);
                setTimeout(updateCounter, 20);
            } else {
                element.innerText = target;
            }
        };
        updateCounter();
    };

    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                const element = entry.target;
                
                if (element.classList.contains('counter')) {
                    const target = parseInt(element.getAttribute('data-target'));
                    if (!isNaN(target)) {
                        animateCounter(element, target);
                    }
                }
                
                if (element.closest('.skill-card')) {
                    const skillCard = element.closest('.skill-card');
                    const bar = skillCard.querySelector('.skill-bar-fill');
                    const percent = skillCard.querySelector('.skill-percent');
                    if (bar && percent) {
                        const target = parseInt(percent.getAttribute('data-target'));
                        bar.style.width = target + '%';
                    }
                }
                
                observer.unobserve(element);
            }
        });
    }, { threshold: 0.3 });

    counters.forEach(counter => observer.observe(counter));

    const statsSection = document.getElementById('statsSection');
    if (statsSection) {
        const statsObserver = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    const progressBars = entry.target.querySelectorAll('.stats-progress-bar');
                    const statNumbers = entry.target.querySelectorAll('.stats-number .counter');
                    
                    progressBars.forEach((bar, index) => {
                        const target = parseInt(statNumbers[index]?.getAttribute('data-target') || '0');
                        bar.style.width = Math.min(target, 100) + '%';
                    });
                    
                    statsObserver.unobserve(entry.target);
                }
            });
        }, { threshold: 0.3 });
        
        statsObserver.observe(statsSection);
    }

    // ===== TRANSACTION TOAST =====
    const toast = document.getElementById('transactionToast');
    const toastContent = document.getElementById('toastContent');
    
    const transactions = [
        'New report generated: OEE Dashboard',
        'Data request from Apex Garments',
        'Inventory alert: Reorder point reached',
        'Dashboard access granted to Square Fashions',
        'Monthly MIS report completed',
        'New project: Labor Efficiency Analysis'
    ];
    
    let toastIndex = 0;
    
    setInterval(() => {
        const message = transactions[toastIndex % transactions.length];
        const time = new Date().toLocaleTimeString('en-US', { 
            hour: '2-digit', 
            minute: '2-digit' 
        });
        
        toastContent.innerHTML = `
            <span class="toast-message">${message}</span>
            <span class="toast-time">${time}</span>
        `;
        
        toast.classList.add('show');
        
        setTimeout(() => {
            toast.classList.remove('show');
        }, 3000);
        
        toastIndex++;
    }, 10000);

    // ===== FORM SUBMISSION =====
    const submitBtn = document.getElementById('submitForm');
    const formStatus = document.getElementById('formStatus');
    
    if (submitBtn) {
        submitBtn.addEventListener('click', (e) => {
            e.preventDefault();
            
            const name = document.getElementById('name').value.trim();
            const email = document.getElementById('email').value.trim();
            const message = document.getElementById('message').value.trim();
            
            if (!name || !email || !message) {
                formStatus.className = 'form-status error';
                formStatus.textContent = 'Please fill in all required fields';
                return;
            }
            
            if (!email.includes('@') || !email.includes('.')) {
                formStatus.className = 'form-status error';
                formStatus.textContent = 'Please enter a valid email address';
                return;
            }
            
            formStatus.className = 'form-status success';
            formStatus.textContent = 'Message sent successfully! Hasibur will respond shortly.';
            
            document.getElementById('name').value = '';
            document.getElementById('email').value = '';
            document.getElementById('subject').value = '';
            document.getElementById('message').value = '';
            
            setTimeout(() => {
                formStatus.style.display = 'none';
            }, 5000);
        });
    }

    // ===== SMOOTH SCROLL =====
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function(e) {
            e.preventDefault();
            const target = document.querySelector(this.getAttribute('href'));
            if (target) {
                target.scrollIntoView({ behavior: 'smooth' });
                mobileMenu.classList.remove('active');
                if (mobileToggle) {
                    mobileToggle.innerHTML = '<i class="fas fa-bars"></i>';
                }
            }
        });
    });

    // ===== BACK TO TOP =====
    document.getElementById('backToTop').addEventListener('click', () => {
        window.scrollTo({ top: 0, behavior: 'smooth' });
    });

    // ===== DOWNLOAD CV =====
    document.getElementById('downloadCV').addEventListener('click', (e) => {
        e.preventDefault();
        alert('CV will be downloaded: Hasibur_Rahman_MIS.pdf');
    });

    // ===== CLOSE MOBILE MENU ON RESIZE =====
    window.addEventListener('resize', () => {
        if (window.innerWidth > 768) {
            mobileMenu.classList.remove('active');
            mobileToggle.innerHTML = '<i class="fas fa-bars"></i>';
        }
    });
})();
