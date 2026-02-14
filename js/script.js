// ========== js/script.js ==========
(function() {
  // ----- DARK/LIGHT MODE TOGGLE -----
  const themeBtn = document.getElementById('themeBtn');
  const body = document.body;
  themeBtn.addEventListener('click', ()=>{
    body.classList.toggle('dark');
    const icon = themeBtn.querySelector('i');
    icon.classList.toggle('fa-moon');
    icon.classList.toggle('fa-sun');
  });

  // ----- MOBILE MENU (HAMBURGER) -----
  const menuBtn = document.getElementById('menuToggle');
  const navLinks = document.getElementById('navLinks');
  menuBtn.addEventListener('click', ()=>{
    navLinks.classList.toggle('show');
    const icon = menuBtn.querySelector('i');
    icon.classList.toggle('fa-bars');
    icon.classList.toggle('fa-times');
  });
  // close menu after clicking a link
  document.querySelectorAll('.nav-links a').forEach(link => {
    link.addEventListener('click', ()=>{
      navLinks.classList.remove('show');
      menuBtn.querySelector('i').classList.add('fa-bars');
      menuBtn.querySelector('i').classList.remove('fa-times');
    });
  });

  // ----- TYPING ANIMATION -----
  const words = ["MIS Expert", "Data Analyst", "ERP Specialist", "RMG Professional"];
  const el = document.getElementById('typingLine');
  let i=0, j=0, del=false;
  function type(){
    if(i>=words.length) i=0;
    const full = words[i];
    if(del) j--; else j++;
    el.innerHTML = full.substring(0,j) + '<span style="border-right:3px solid var(--blue); margin-left:4px;"> </span>';
    if(!del && j===full.length){ del=true; setTimeout(type,1500); return; }
    if(del && j===0){ del=false; i++; }
    setTimeout(type, del?60:100);
  }
  type();

  // ----- KPI COUNTERS (intersection observer) -----
  const nums = document.querySelectorAll('.kpi-num');
  const obs = new IntersectionObserver((entries)=>{
    entries.forEach(e=>{
      if(e.isIntersecting){
        const el = e.target;
        const target = +el.getAttribute('data-target');
        if(el.dataset.done) return;
        el.dataset.done = 'true';
        let c=0;
        const step = target/40;
        function up(){
          c+=step;
          if(c<target){ el.innerText = Math.ceil(c); requestAnimationFrame(up); }
          else el.innerText = target;
        }
        up();
      }
    });
  }, {threshold:0.3});
  nums.forEach(n=> obs.observe(n));

  // ----- BACK TO TOP BUTTON -----
  const btt = document.getElementById('backTop');
  window.addEventListener('scroll', ()=>{
    btt.classList.toggle('show', window.scrollY>500);
  });
  btt.addEventListener('click', ()=> window.scrollTo({top:0,behavior:'smooth'}));

  // ----- PROJECT FILTER -----
  const filterBtns = document.querySelectorAll('.filter-btn');
  const cards = document.querySelectorAll('.project-card');
  filterBtns.forEach(btn=>{
    btn.addEventListener('click', ()=>{
      filterBtns.forEach(b=>b.classList.remove('active'));
      btn.classList.add('active');
      const f = btn.dataset.filter;
      cards.forEach(c=>{
        const cat = c.dataset.cat;
        c.style.display = (f==='all' || cat.includes(f)) ? 'block' : 'none';
      });
    });
  });

  // ----- DYNAMIC CONTACT FORM (mailto) -----
  const contactForm = document.getElementById('dynamicContactForm');
  const formStatus = document.getElementById('formStatus');

  contactForm.addEventListener('submit', async function(e) {
    e.preventDefault();
    
    const name = document.getElementById('name').value.trim();
    const email = document.getElementById('email').value.trim();
    const message = document.getElementById('message').value.trim();

    if (!name || !email || !message) {
      formStatus.className = 'form-status error';
      formStatus.textContent = 'Please fill in all fields';
      return;
    }

    // Prepare email content
    const subject = `Portfolio contact from ${name}`;
    const body = `Name: ${name}%0AEmail: ${email}%0A%0AMessage:%0A${message}`;
    
    // mailto link (opens default email client)
    const mailtoLink = `mailto:mdhasibur109@gmail.com?subject=${encodeURIComponent(subject)}&body=${body}`;
    
    // Try to open email client
    window.location.href = mailtoLink;
    
    // Show success message
    formStatus.className = 'form-status success';
    formStatus.textContent = 'Opening your email app...';
    
    // Reset form
    contactForm.reset();
    
    // Clear status after 5 seconds
    setTimeout(() => {
      formStatus.style.display = 'none';
      formStatus.className = 'form-status';
    }, 5000);
  });
})();