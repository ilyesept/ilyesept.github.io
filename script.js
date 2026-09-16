const translations = {
  en: {
    "nav.about":"About","nav.projects":"Projects","nav.writeups":"Write-ups","nav.experience":"Experience","nav.contact":"Contact",
    "hero.status":"CURRENTLY LEARNING & BUILDING","hero.role":"Computer Science Student <b>·</b> Cybersecurity <b>·</b> Offensive Security",
    "hero.intro":"I build, break and learn. I'm developing my technical skills through hands-on labs, projects and practical cybersecurity work.","hero.cta":"View projects",
    "terminal.focus":"offensive-security","terminal.progress":"→ in progress",
    "labels.about":"ABOUT","labels.projects":"PROJECTS","labels.writeups":"WRITE-UPS","labels.experience":"EXPERIENCE","labels.certifications":"CERTIFICATIONS","labels.skills":"SKILLS","labels.contact":"CONTACT",
    "about.title":"Learning by <em>doing.</em>","about.lead":"I'm an L3 Computer Science student at Université Bourgogne Europe, gradually specializing in cybersecurity with a particular interest in offensive security and penetration testing.",
    "about.f1.title":"Computer Science","about.f1.text":"L3 · Université Bourgogne Europe","about.f2.title":"Offensive Security","about.f2.text":"Pentesting · Web Security · Linux","about.f3.title":"Hands-on Learning","about.f3.text":"Labs · CTFs · Personal projects",
    "projects.title":"Things I'm <em>building.</em>","projects.note":"// more coming soon","projects.p1.title":"Personal Cybersecurity Portfolio","projects.p1.text":"Portfolio designed and deployed from scratch with HTML, CSS and JavaScript, using GitHub Pages, Cloudflare DNS and a custom domain.","projects.source":"Source code ↗",
    "projects.p2.title":"eJPT Preparation","projects.p2.text":"Hands-on preparation for the eJPT certification through practical exercises covering reconnaissance, enumeration, networking and web security.",
    "projects.p3.title":"Security Labs & Write-ups","projects.p3.text":"Practical labs and challenges used to develop a structured methodology for enumeration, exploitation and post-exploitation.",
    "common.progress":"IN PROGRESS","common.soon":"COMING SOON",
    "writeups.title":"Notes from the <em>lab.</em>","writeups.empty.title":"Write-ups will live here.","writeups.empty.text":"Room for TryHackMe rooms, CTF challenges, vulnerability research and technical notes. Each write-up can later become its own page.",
    "experience.title":"Cybersecurity Discovery Internship","experience.text":"Discovery of professional cybersecurity environments, including audit, risk analysis and incident response. Co-designed, with another intern, a crisis-response toolkit intended for hospitals facing a cyberattack.",
    "cert.text":"eLearnSecurity Junior Penetration Tester",
    "skills.g1":"Security","skills.g2":"Systems & Networks","skills.g3":"Development","skills.note":"This section is intentionally kept honest and can grow as new tools and technologies are actually used.",
    "contact.title":"Let's build<br><em>something.</em>","contact.text":"For projects, opportunities or a conversation about cybersecurity."
  },
  fr: {
    "nav.about":"À propos","nav.projects":"Projets","nav.writeups":"Write-ups","nav.experience":"Expérience","nav.contact":"Contact",
    "hero.status":"J'APPRENDS & JE CONSTRUIS","hero.role":"Étudiant en informatique <b>·</b> Cybersécurité <b>·</b> Sécurité offensive",
    "hero.intro":"Je construis, je teste et j'apprends. Je développe mes compétences techniques à travers des labs, des projets et des mises en pratique en cybersécurité.","hero.cta":"Voir les projets",
    "terminal.focus":"securite-offensive","terminal.progress":"→ en préparation",
    "labels.about":"À PROPOS","labels.projects":"PROJETS","labels.writeups":"WRITE-UPS","labels.experience":"EXPÉRIENCE","labels.certifications":"CERTIFICATIONS","labels.skills":"COMPÉTENCES","labels.contact":"CONTACT",
    "about.title":"Apprendre en <em>pratiquant.</em>","about.lead":"Je suis étudiant en L3 Informatique à l'Université Bourgogne Europe et je m'oriente progressivement vers la cybersécurité, avec un intérêt particulier pour la sécurité offensive et le pentest.",
    "about.f1.title":"Informatique","about.f1.text":"L3 · Université Bourgogne Europe","about.f2.title":"Sécurité offensive","about.f2.text":"Pentest · Sécurité web · Linux","about.f3.title":"Mise en pratique","about.f3.text":"Labs · CTF · Projets personnels",
    "projects.title":"Ce que je <em>construis.</em>","projects.note":"// d'autres projets arrivent","projects.p1.title":"Portfolio personnel en cybersécurité","projects.p1.text":"Portfolio conçu et déployé from scratch en HTML, CSS et JavaScript, avec GitHub Pages, le DNS Cloudflare et un domaine personnalisé.","projects.source":"Code source ↗",
    "projects.p2.title":"Préparation eJPT","projects.p2.text":"Préparation pratique à la certification eJPT à travers des exercices couvrant la reconnaissance, l'énumération, les réseaux et la sécurité web.",
    "projects.p3.title":"Labs de sécurité & write-ups","projects.p3.text":"Labs et challenges pratiques pour développer une méthodologie structurée d'énumération, d'exploitation et de post-exploitation.",
    "common.progress":"EN COURS","common.soon":"BIENTÔT",
    "writeups.title":"Notes du <em>lab.</em>","writeups.empty.title":"Les write-ups seront ici.","writeups.empty.text":"Un espace pour les rooms TryHackMe, challenges CTF, recherches de vulnérabilités et notes techniques. Chaque write-up pourra ensuite devenir une page dédiée.",
    "experience.title":"Stage de découverte de la cybersécurité","experience.text":"Découverte de l'environnement professionnel de la cybersécurité, notamment l'audit, l'analyse des risques et la gestion d'incidents. Conception, avec un autre stagiaire, d'une mallette de crise destinée aux établissements hospitaliers en cas de cyberattaque.",
    "cert.text":"eLearnSecurity Junior Penetration Tester",
    "skills.g1":"Sécurité","skills.g2":"Systèmes & Réseaux","skills.g3":"Développement","skills.note":"Cette section reste volontairement honnête et pourra évoluer au fur et à mesure que de nouveaux outils et technologies seront réellement maîtrisés.",
    "contact.title":"Construisons<br><em>quelque chose.</em>","contact.text":"Pour un projet, une opportunité ou simplement échanger autour de la cybersécurité."
  }
};

function setLanguage(lang) {
  document.documentElement.lang = lang;
  document.querySelectorAll("[data-i18n]").forEach(el => {
    const key = el.dataset.i18n;
    if (translations[lang][key]) el.innerHTML = translations[lang][key];
  });
  document.querySelectorAll(".lang").forEach(btn => btn.classList.toggle("active", btn.dataset.lang === lang));
  localStorage.setItem("site-language", lang);
}

document.querySelectorAll(".lang").forEach(btn => btn.addEventListener("click", () => setLanguage(btn.dataset.lang)));
setLanguage(localStorage.getItem("site-language") || "en");

const revealItems = document.querySelectorAll(".section, .project-card, .experience-item, .cert-card, .skill-groups");
const observer = new IntersectionObserver(entries => {
  entries.forEach(entry => {
    if (entry.isIntersecting) { entry.target.classList.add("visible"); observer.unobserve(entry.target); }
  });
}, { threshold: 0.08 });
revealItems.forEach(el => { el.classList.add("reveal"); observer.observe(el); });
