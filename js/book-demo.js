/* ============================================================
   Book a demo page behaviour
   ============================================================ */

/* Keep this in sync with the project list in js/main.js */
const PROJECTS = [
  { title: "Aadidev GPT", icon: "✦" },
  { title: "ImpairCheck", icon: "⚠" },
  { title: "Atmos", icon: "☁" },
  { title: "Zelero", icon: "◈" },
  { title: "3-D Space Sim", icon: "🪐" },
  { title: "Numera", icon: "🧮" },
  { title: "Hirely AI", icon: "▦" },
  { title: "Grow a Tree Game", icon: "▲" },
];

const CHANNELS = [
  { value: "Recorded walkthrough video" },
  { value: "SMS text" },
  { value: "Reddit DM" },
  { value: "X (Twitter)" },
  { value: "Discord" },
];

const OWNER_EMAIL = "aadidevprasanth12@yahoo.com";

/* ---------- Render project picker ---------- */
const picker = document.getElementById("project-picker");
if (picker) {
  picker.innerHTML = PROJECTS.map(
    (project) => `
  <label class="picker-card">
    <input type="radio" name="project" value="${project.title}" required />
    <span class="picker-icon" aria-hidden="true">${project.icon}</span>
    <span class="picker-name">${project.title}</span>
  </label>`
  ).join("");
}

/* ---------- Render channel picker ---------- */
const channelPicker = document.getElementById("channel-picker");
if (channelPicker) {
  channelPicker.innerHTML = CHANNELS.map(
    (channel) => `
  <label class="channel-pill">
    <input type="radio" name="channel" value="${channel.value}" required />
    <span>${channel.value}</span>
  </label>`
  ).join("");
}

/* ---------- Pre-select project from ?project= URL param ---------- */
(() => {
  if (!picker) return;
  const wanted = new URLSearchParams(window.location.search).get("project");
  if (!wanted) return;
  picker.querySelectorAll('input[name="project"]').forEach((input) => {
    if (input.value.toLowerCase() === wanted.toLowerCase()) {
      input.checked = true;
    }
  });
})();

/* ---------- Compose the demo request email ---------- */
const form = document.getElementById("booking-form");
const okPanel = document.getElementById("booking-ok");

form.addEventListener("submit", (event) => {
  event.preventDefault();

  const project = form.elements["project"].value;
  const name = form.elements["name"].value.trim();
  const email = form.elements["email"].value.trim();
  const channel = form.elements["channel"].value;
  const bestTime = form.elements["best-time"].value.trim();
  const notes = form.elements["notes"].value.trim();

  const lines = [
    "Hi Aadidev,",
    "",
    `I found ${project} on your portfolio and I'd love to see it in action. A recorded walkthrough works for me whenever you have a moment.`,
    "",
    "Here's my info so you can follow up:",
    "",
    `Name: ${name}`,
    `Email: ${email}`,
    `Preferred channel: ${channel}`,
  ];
  if (bestTime) lines.push("", `Best time: ${bestTime}`);
  if (notes) lines.push(`Notes: ${notes}`);
  lines.push("", "Thanks so much,", name);

  const subject = `Demo request: ${project} — ${name}`;
  const mailto = `mailto:${OWNER_EMAIL}?subject=${encodeURIComponent(
    subject
  )}&body=${encodeURIComponent(lines.join("\n"))}`;

  window.location.href = mailto;

  okPanel.hidden = false;
  okPanel.scrollIntoView({ behavior: "smooth", block: "center" });
});

/* ---------- Footer year ---------- */
document.getElementById("year").textContent = new Date().getFullYear();

/* ---------- Mobile navigation ---------- */
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