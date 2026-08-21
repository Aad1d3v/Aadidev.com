/* ============================================================
   Aadidev site behaviour
   ============================================================ */

/* Edit these project details and links whenever a project changes. */
const FEATURED = {
  title: "Aadidev GPT",
  icon: "✦",
  status: "live",
  problem:
    "Students and learners need a simple, approachable AI assistant that helps them understand concepts, brainstorm ideas, and get unstuck, without the complexity of enterprise tools.",
  role:
    "I built the full frontend and integrated the AI backend. This was one of my first public projects and taught me how to ship something real to the web.",
  stack: ["JavaScript", "React", "Node.js", "AI/ML"],
  challenges:
    "Learning how to connect a frontend to an AI model, handling loading states, and making the interface feel natural were the biggest hurdles. Debugging API responses at this scale was a great learning experience.",
  learned:
    "How to go from idea to deployed product. I learned about API integration, responsive design, and the importance of making something people actually want to use.",
  url: "https://aadidevgpt-0-2.onrender.com/welcome",
  github: "https://github.com/Aad1d3v/Aadidev.com",
  review: {
    score: 90,
    source: "Stork.ai",
    url: "https://www.stork.ai/en/aadidevgpt",
  },
};

const IMPAIRCHECK = {
  title: "ImpairCheck",
  icon: "⚠",
  status: "live",
  problem:
    "People often can't reliably tell whether they're too impaired to drive after drinking. ImpairCheck is a screening tool that measures observable signals to help people make safer choices.",
  role:
    "I designed and built the full stack: the Flask backend that talks to the Groq AI models, and the in-browser test engines that use the camera, microphone, and reaction timing.",
  stack: ["Python", "Flask", "JavaScript", "AI/ML", "Groq API"],
  challenges:
    "Building three real-time signal tests, face, voice, and reaction, and keeping all raw camera and audio data local so nothing sensitive ever leaves the device was the biggest challenge.",
  learned:
    "How to build a privacy-first AI product, integrate vision, speech, and text models, and present medical-adjacent results responsibly with clear disclaimers.",
  url: "https://impaircheck.onrender.com/",
  github: "https://github.com/Aad1d3v/ImpairCheck",
};

const PROJECTS = [
  {
    title: "Hirely AI",
    problem:
      "Job seekers struggle to write resumes that stand out. Hirely AI helps people improve their resumes and get ready for job applications using AI.",
    desc: "An AI resume studio that helps people improve their resumes and get ready for job applications.",
    tags: ["AI", "Resume tool"],
    stack: ["Python", "React", "AI/ML"],
    icon: "▦",
    status: "live",
    url: "https://hirely-p3ar.onrender.com/",
    github: "https://github.com/aadidevprasanth12-rgb",
  },
  {
    title: "Grow a Tree Game",
    problem:
      "Sometimes you just need a fun, low-stakes way to relax. Grow a Tree lets you plant and nurture your own virtual tree.",
    desc: "A fun game where you grow and look after your own tree.",
    tags: ["Game", "Web"],
    stack: ["JavaScript", "HTML/CSS", "Game Dev"],
    icon: "▲",
    status: "live",
    url: "https://grow-a-tree.onrender.com/",
    github: "https://github.com/aadidevprasanth12-rgb",
  },
];

const SKILLS = [
  "JavaScript",
  "TypeScript",
  "Python",
  "React",
  "Node.js",
  "HTML and CSS",
  "Git",
  "UI Design",
];

/* ---------- Render featured project ---------- */
const featuredEl = document.getElementById("featured-project");
if (featuredEl) {
  featuredEl.innerHTML = `
    <div class="featured-inner container">
      <div class="featured-content">
        <div class="featured-header">
          <span class="featured-icon" aria-hidden="true">${FEATURED.icon}</span>
          <span class="status-badge status-${FEATURED.status}">${FEATURED.status}</span>
          ${FEATURED.review ? `<a class="review-badge" href="${FEATURED.review.url}" target="_blank" rel="noopener noreferrer">
            <span class="review-score">${FEATURED.review.score}</span>
            <span class="review-source">${FEATURED.review.source}</span>
          </a>` : ''}
        </div>
        <h2 class="featured-title">${FEATURED.title}</h2>

        <div class="featured-detail">
          <h3 class="featured-label">The problem</h3>
          <p class="featured-text">${FEATURED.problem}</p>
        </div>

        <div class="featured-detail">
          <h3 class="featured-label">My role</h3>
          <p class="featured-text">${FEATURED.role}</p>
        </div>

        <div class="featured-detail">
          <h3 class="featured-label">Tech stack</h3>
          <div class="featured-stack">
            ${FEATURED.stack.map((s) => `<span class="tag">${s}</span>`).join("")}
          </div>
        </div>

        <div class="featured-detail">
          <h3 class="featured-label">Major challenges</h3>
          <p class="featured-text">${FEATURED.challenges}</p>
        </div>

        <div class="featured-detail">
          <h3 class="featured-label">What I learned</h3>
          <p class="featured-text">${FEATURED.learned}</p>
        </div>

        <div class="featured-actions">
          <a class="btn btn-primary" href="${FEATURED.url}" target="_blank" rel="noopener noreferrer">
            View project <span aria-hidden="true">→</span>
          </a>
          <a class="btn btn-outline" href="${FEATURED.github}" target="_blank" rel="noopener noreferrer">
            View source <span aria-hidden="true">↗</span>
          </a>
        </div>
      </div>

      <div class="featured-visual">
        <div class="featured-screenshot" id="featured-screenshot">
          <img src="assets/images/aadidev-gpt-screenshot.png" alt="AadidevGPT chat interface showing welcome screen with quick action buttons" class="featured-img" />
          <p class="screenshot-caption">Updated monthly with new features and improvements.</p>
        </div>
      </div>
    </div>
  `;
}

/* ---------- Render ImpairCheck highlight (big, in Projects) ---------- */
const highlightEl = document.getElementById("project-highlight");
if (highlightEl) {
  highlightEl.innerHTML = `
    <div class="featured-inner">
      <div class="featured-content">
        <div class="featured-header">
          <span class="featured-icon" aria-hidden="true">${IMPAIRCHECK.icon}</span>
          <span class="status-badge status-${IMPAIRCHECK.status}">${IMPAIRCHECK.status}</span>
        </div>
        <h2 class="featured-title">${IMPAIRCHECK.title}</h2>

        <div class="featured-detail">
          <h3 class="featured-label">The problem</h3>
          <p class="featured-text">${IMPAIRCHECK.problem}</p>
        </div>

        <div class="featured-detail">
          <h3 class="featured-label">My role</h3>
          <p class="featured-text">${IMPAIRCHECK.role}</p>
        </div>

        <div class="featured-detail">
          <h3 class="featured-label">Tech stack</h3>
          <div class="featured-stack">
            ${IMPAIRCHECK.stack.map((s) => `<span class="tag">${s}</span>`).join("")}
          </div>
        </div>

        <div class="featured-detail">
          <h3 class="featured-label">Major challenges</h3>
          <p class="featured-text">${IMPAIRCHECK.challenges}</p>
        </div>

        <div class="featured-detail">
          <h3 class="featured-label">What I learned</h3>
          <p class="featured-text">${IMPAIRCHECK.learned}</p>
        </div>

        <div class="featured-actions">
          <a class="btn btn-primary" href="${IMPAIRCHECK.url}" target="_blank" rel="noopener noreferrer">
            View project <span aria-hidden="true">→</span>
          </a>
          <a class="btn btn-outline" href="${IMPAIRCHECK.github}" target="_blank" rel="noopener noreferrer">
            View source <span aria-hidden="true">↗</span>
          </a>
        </div>
      </div>

      <div class="featured-visual">
        <div class="featured-screenshot">
          <img src="assets/images/impaircheck-screenshot.png" alt="ImpairCheck dashboard with Voice, Face, and Reaction screening tests" />
          <p class="screenshot-caption">Voice, face, and reaction screening in one dashboard.</p>
        </div>
      </div>
    </div>
  `;
}

/* ---------- Render project cards ---------- */
const grid = document.getElementById("project-grid");
grid.innerHTML = PROJECTS.map(
  (project) => `
  <article class="project-card reveal">
    <div class="project-top">
      <span class="project-icon" aria-hidden="true">${project.icon}</span>
      <div class="project-meta">
        <span class="status-badge status-${project.status}">${project.status}</span>
        <div class="project-tags">${project.tags.map((tag) => `<span class="tag">${tag}</span>`).join("")}</div>
      </div>
    </div>
    <h3 class="project-title">${project.title}</h3>
    <p class="project-problem">${project.problem}</p>
    <p class="project-desc">${project.desc}</p>
    <div class="project-stack">
      ${project.stack.map((s) => `<span class="stack-tag">${s}</span>`).join("")}
    </div>
    <div class="project-links">
      <a class="project-link" href="${project.url}" target="_blank" rel="noopener noreferrer">
        View project <span aria-hidden="true">→</span>
      </a>
      <a class="project-link project-link-secondary" href="${project.github}" target="_blank" rel="noopener noreferrer">
        Source <span aria-hidden="true">↗</span>
      </a>
    </div>
  </article>`
).join("");

/* ---------- Render skills ---------- */
const skillList = document.getElementById("skill-list");
skillList.innerHTML = SKILLS.map(
  (skill) => `<li class="skill-item">${skill}</li>`
).join("");

/* Footer year */
document.getElementById("year").textContent = new Date().getFullYear();

/* Mobile navigation */
const toggle = document.querySelector(".nav-toggle");
const nav = document.getElementById("site-nav");

toggle.addEventListener("click", () => {
  const open = nav.classList.toggle("open");
  toggle.setAttribute("aria-expanded", String(open));
});

nav.addEventListener("click", (event) => {
  if (event.target.tagName === "A") {
    nav.classList.remove("open");
    toggle.setAttribute("aria-expanded", "false");
  }
});

/* Reveal cards as they enter the viewport */
const observer = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add("is-visible");
        observer.unobserve(entry.target);
      }
    });
  },
  { threshold: 0.12 }
);

document
  .querySelectorAll(".reveal")
  .forEach((element) => observer.observe(element));

/* ---------- Easter egg: fireworks ---------- */
(function () {
  const brand = document.querySelector(".brand");
  if (!brand) return;

  let active = false;
  let canvas, ctx, particles, animId, timeoutId;
  const COLORS = ["#f94144", "#f3722c", "#f8961e", "#f9c74f", "#90be6d", "#43aa8b", "#577590", "#277da1"];

  function createCanvas() {
    canvas = document.createElement("canvas");
    canvas.style.cssText = "position:fixed;inset:0;z-index:9999;pointer-events:none;";
    document.body.appendChild(canvas);
    ctx = canvas.getContext("2d");
    resize();
    window.addEventListener("resize", resize);
  }

  function resize() {
    canvas.width = innerWidth;
    canvas.height = innerHeight;
  }

  class Particle {
    constructor(x, y) {
      const angle = Math.random() * Math.PI * 2;
      const speed = Math.random() * 5 + 2;
      this.x = x;
      this.y = y;
      this.vx = Math.cos(angle) * speed;
      this.vy = Math.sin(angle) * speed;
      this.alpha = 1;
      this.decay = Math.random() * 0.015 + 0.01;
      this.color = COLORS[Math.floor(Math.random() * COLORS.length)];
      this.size = Math.random() * 3 + 1.5;
    }
    update() {
      this.x += this.vx;
      this.y += this.vy;
      this.vy += 0.04;
      this.alpha -= this.decay;
    }
    draw() {
      ctx.globalAlpha = this.alpha;
      ctx.fillStyle = this.color;
      ctx.beginPath();
      ctx.arc(this.x, this.y, this.size, 0, Math.PI * 2);
      ctx.fill();
    }
  }

  function spawnBurst(x, y, count) {
    for (let i = 0; i < count; i++) particles.push(new Particle(x, y));
  }

  function showText() {
    const el = document.createElement("div");
    el.textContent = "Mark Zuckerberg is the best";
    el.style.cssText = [
      "position:fixed",
      "top:50%", "left:50%",
      "transform:translate(-50%,-50%)",
      "z-index:10000",
      "font-family:'Fraunces',Georgia,serif",
      "font-size:clamp(28px,5vw,56px)",
      "font-weight:700",
      "color:#fff",
      "text-shadow:0 0 20px rgba(0,0,0,.5)",
      "pointer-events:none",
      "opacity:0",
      "transition:opacity .4s",
      "text-align:center",
      "padding:0 24px",
    ].join(";");
    document.body.appendChild(el);
    requestAnimationFrame(() => { el.style.opacity = "1"; });
    return el;
  }

  function animate() {
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    particles = particles.filter((p) => p.alpha > 0);
    particles.forEach((p) => { p.update(); p.draw(); });
    ctx.globalAlpha = 1;
    if (particles.length > 0) animId = requestAnimationFrame(animate);
    else cleanup();
  }

  function cleanup() {
    cancelAnimationFrame(animId);
    clearTimeout(timeoutId);
    if (canvas && canvas.parentNode) canvas.remove();
    active = false;
  }

  brand.addEventListener("click", function (e) {
    e.preventDefault();
    e.stopPropagation();
    e.stopImmediatePropagation();
    if (active) return;
    active = true;
    particles = [];
    createCanvas();

    /* staggered bursts across the screen */
    const bursts = [
      { x: 0.2, y: 0.3, delay: 0 },
      { x: 0.8, y: 0.25, delay: 200 },
      { x: 0.5, y: 0.5, delay: 400 },
      { x: 0.3, y: 0.7, delay: 600 },
      { x: 0.7, y: 0.65, delay: 800 },
      { x: 0.15, y: 0.5, delay: 1000 },
      { x: 0.85, y: 0.45, delay: 1100 },
      { x: 0.5, y: 0.3, delay: 1300 },
    ];

    let textEl;
    bursts.forEach(({ x, y, delay }, i) => {
      setTimeout(() => {
        spawnBurst(canvas.width * x, canvas.height * y, 50 + Math.random() * 30);
        if (i === 0) textEl = showText();
      }, delay);
    });

    timeoutId = setTimeout(() => {
      if (textEl) textEl.style.opacity = "0";
      setTimeout(() => { if (textEl) textEl.remove(); }, 500);
    }, 3500);
  });
})();
