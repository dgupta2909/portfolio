window.addEventListener("load",()=>setTimeout(()=>document.querySelector(".loader").classList.add("hide"),450));
document.getElementById("year").textContent=new Date().getFullYear();
const cursor=document.querySelector(".cursor"),dot=document.querySelector(".cursor-dot");
if(matchMedia("(pointer:fine)").matches){document.addEventListener("mousemove",e=>{cursor.style.left=e.clientX+"px";cursor.style.top=e.clientY+"px";dot.style.left=e.clientX+"px";dot.style.top=e.clientY+"px"});document.querySelectorAll("a,button,.tilt").forEach(x=>{x.onmouseenter=()=>{cursor.style.width="52px";cursor.style.height="52px"};x.onmouseleave=()=>{cursor.style.width="34px";cursor.style.height="34px"}});document.querySelectorAll(".tilt").forEach(x=>{x.onmousemove=e=>{let r=x.getBoundingClientRect(),a=e.clientX/r.width-r.left/r.width-.5,b=e.clientY/r.height-r.top/r.height-.5;x.style.transform=`perspective(800px) rotateY(${a*5}deg) rotateX(${-b*5}deg) translateY(-5px)`};x.onmouseleave=()=>x.style.transform=""})}
document.getElementById("menu").onclick=()=>document.querySelector(".links").classList.toggle("open");
document.querySelectorAll(".links a").forEach(a=>a.onclick=()=>document.querySelector(".links").classList.remove("open"));
addEventListener("scroll",()=>{let m=document.documentElement.scrollHeight-innerHeight;document.querySelector(".scrollbar").style.width=(scrollY/m*100)+"%"});
const io=new IntersectionObserver(es=>es.forEach(e=>{if(e.isIntersecting){e.target.classList.add("show");io.unobserve(e.target)}}),{threshold:.12});document.querySelectorAll(".reveal").forEach(x=>io.observe(x));
document.querySelectorAll(".filters button").forEach(b=>b.onclick=()=>{document.querySelectorAll(".filters button").forEach(x=>x.classList.remove("active"));b.classList.add("active");let f=b.dataset.filter;document.querySelectorAll(".project").forEach(p=>p.classList.toggle("hide",f!="all"&&p.dataset.cat!=f))});
const modal=document.getElementById("modal");document.querySelectorAll(".view").forEach(b=>b.onclick=()=>{let p=b.closest(".project");document.getElementById("mtype").textContent=p.dataset.type;document.getElementById("mtitle").textContent=p.dataset.title;document.getElementById("mtext").textContent=p.dataset.text;modal.classList.add("open");document.body.style.overflow="hidden"});function closeModal(){modal.classList.remove("open");document.body.style.overflow=""}document.getElementById("close").onclick=closeModal;document.querySelector(".backdrop").onclick=closeModal;document.addEventListener("keydown",e=>e.key=="Escape"&&closeModal());
// Problem-solving stats: dynamic years-since-2022 + count-up animation
(function(){
  const startDate = new Date(2022,0,1);
  const yearsEl = document.getElementById("yearsStat");
  if(yearsEl){
    const years = (Date.now() - startDate) / (1000*60*60*24*365.25);
    yearsEl.dataset.target = years.toFixed(1);
  }
  const counters = document.querySelectorAll(".cstat strong[data-target]");
  if(!counters.length) return;
  const animate = el => {
    const target = parseFloat(el.dataset.target) || 0;
    const isDecimal = el.hasAttribute("data-count-decimal");
    const dur = 1400, start = performance.now();
    const step = now => {
      const p = Math.min((now-start)/dur,1);
      const eased = 1 - Math.pow(1-p,3);
      const val = target*eased;
      el.textContent = isDecimal ? val.toFixed(1) : Math.round(val);
      if(p<1) requestAnimationFrame(step); else el.textContent = isDecimal ? target.toFixed(1) : target;
    };
    requestAnimationFrame(step);
  };
  const cio = new IntersectionObserver(es=>es.forEach(e=>{
    if(e.isIntersecting){ animate(e.target); cio.unobserve(e.target); }
  }),{threshold:.4});
  counters.forEach(c=>cio.observe(c));
})();


// GitHub CTA hard-link
document.addEventListener('DOMContentLoaded', function () {
  const githubUrl = 'https://github.com/dgupta2909';
  const cta = Array.from(document.querySelectorAll('a')).find(a =>
    a.textContent.trim().toLowerCase().includes('explore my work')
  );
  if (cta) {
    cta.href = githubUrl;
    cta.target = '_blank';
    cta.rel = 'noopener noreferrer';
    cta.addEventListener('click', function (e) {
      e.preventDefault();
      window.open(githubUrl, '_blank', 'noopener,noreferrer');
    });
  }
});
document.addEventListener('DOMContentLoaded', function () {
  const github = 'https://github.com/dgupta2909';
  const email = 'mailto:dgupta290906@gmail.com?subject=Portfolio%20Contact%20-%20Devanshu%20Gupta';

  const links = Array.from(document.querySelectorAll('a'));
  const explore = links.find(a => a.textContent.trim().toLowerCase().includes('explore my work'));
  const conversation = links.find(a => a.textContent.trim().toLowerCase().includes('start a conversation'));

  if (explore) {
    explore.href = github;
    explore.target = '_blank';
    explore.rel = 'noopener noreferrer';
  }

  if (conversation) {
    conversation.href = email;
  }
});


// Ensure email CTA remains functional
document.addEventListener('DOMContentLoaded', function () {
  const emailUrl = 'mailto:dgupta290906@gmail.com?subject=Portfolio%20Contact%20-%20Devanshu%20Gupta&body=Hi%20Devanshu%2C%0A%0AI%20visited%20your%20portfolio%20and%20would%20like%20to%20connect.';
  const conversation = Array.from(document.querySelectorAll('a')).find(a =>
    a.textContent.trim().toLowerCase() === 'start a conversation'
  );
  if (conversation) {
    conversation.href = emailUrl;
    conversation.removeAttribute('target');
  }
});


// Exact lower hero email button
document.addEventListener('DOMContentLoaded', function () {
  const emailUrl = 'mailto:dgupta290906@gmail.com?subject=Portfolio%20Contact%20-%20Devanshu%20Gupta&body=Hi%20Devanshu%2C%0A%0AI%20visited%20your%20portfolio%20and%20would%20like%20to%20connect.';
  document.querySelectorAll('a.btn.ghost').forEach(function (button) {
    if (button.textContent.trim().toLowerCase() === 'start a conversation') {
      button.href = emailUrl;
      button.removeAttribute('target');
    }
  });
});
