/* =========================================================
   KAMIYA COFFEE — script.js
   Ubah data di bagian KONFIGURASI & DATA saja.
   ========================================================= */

/* ---------- KONFIGURASI ---------- */
// Isi nomor WhatsApp format internasional TANPA "+" / spasi, contoh: "6281234567890".
// Selama masih "62XXXXXXXXXX", tombol WhatsApp tidak menautkan ke nomor mana pun.
const WA_NUMBER = "62XXXXXXXXXX";
const WA_MESSAGE = "Halo Kamiya, saya mau pesan...";

/* ---------- DATA MENU (harga dalam ribuan rupiah) ---------- */
const MENU = [
  {
    id: "coffee",
    label: "Signature Coffee",
    note: "Tersedia Hot atau Iced · Regular / Large",
    photo: { src: "assets/img/iced-latte-splash.jpg", alt: "Kamiya Iced Latte dengan cipratan kopi susu", caption: "Feel the splash, taste the smooth." },
    sized: true,
    items: [
      { name: "Kamiya Latte", price: [18, 22], signature: true },
      { name: "Scoty", price: [20, 24] },
      { name: "Americano", price: [18, 22] },
      { name: "Misyu Latte", price: [28, 32] },
      { name: "Bericano", price: [19, 23] },
      { name: "Camelia", price: [20, 24] },
      { name: "Skimi", price: [10, 14] },
      { name: "Café Latte", price: [23, 27] },
      { name: "Vamiya", price: [20, 24] },
      { name: "Cappuccino", price: [23, 27] },
      { name: "Orenji", price: [24, 28], signature: true, desc: "Espresso bold + orange juice yang fresh",
        photo: { src: "assets/img/orenji.jpg", alt: "Perempuan memegang segelas Orenji, kopi dengan jus jeruk" } },
      { name: "Kamio", price: [20, 24] },
    ],
  },
  {
    id: "noncoffee",
    label: "Signature Non-Coffee",
    note: "Regular / Large",
    photo: { src: "assets/img/susu-pink.jpg", alt: "Minuman susu pink Kamiya dalam cup plastik", caption: "Refreshing drinks, cozy vibes." },
    sized: true,
    items: [
      { name: "Matcha Latte", price: [20, 24] },
      { name: "Misu Matcha", price: [28, 32] },
      { name: "Redvelvet Latte", price: [18, 22] },
      { name: "Cookies n Cream", price: [18, 22] },
      { name: "Chocolatte", price: [20, 24] },
    ],
  },
  {
    id: "pasta",
    label: "Pasta & Noodles",
    note: "Makanan berat yang bikin kenyang",
    photo: { src: "assets/img/dua-minuman-langit.jpg", alt: "Dua minuman Kamiya di bawah langit cerah", caption: "Teman makan paling pas." },
    items: [
      { name: "Mie Tek-Tek", price: [27] },
      { name: "Spaghetti Bolognese", price: [32] },
      { name: "Kamiya Laksa", price: [29] },
      { name: "Spaghetti Sambal Matah", price: [28] },
      { name: "Fusilli Carbonara", price: [32] },
    ],
  },
  {
    id: "dessert",
    label: "Dessert",
    note: "Penutup yang manis",
    photo: { src: "assets/img/soda-stroberi.jpg", alt: "Soda stroberi Kamiya dalam cup plastik", caption: "Sweet ending, every time." },
    items: [
      { name: "Matcha Tiramisu", price: [32] },
      { name: "Donut", price: [9] },
      { name: "Classic Tiramisu", price: [30] },
      { name: "Cheesecake", price: [26] },
      { name: "Matcha Cheesecake", price: [32] },
    ],
  },
];

// Happy Hours: semua Rp36.000 + Free Ice Tea
const HAPPY_HOURS = ["Nasi Ayam Teriyaki", "Nasi Goreng Kampung", "Ayam Geprek Mozza", "Chicken Matah Bowl", "Ricebowl Thailand"];

// Foto menu asli untuk lightbox "Lihat Menu Lengkap"
const FULL_MENU = [
  { src: "assets/img/menu-signature-coffee.jpg", alt: "Foto menu asli Kamiya: Signature Coffee dan Signature Non-Coffee" },
  { src: "assets/img/menu-dessert-pasta.jpg", alt: "Foto menu asli Kamiya: Dessert dan Pasta / Noodles" },
];

// Galeri
const GALLERY = [
  { src: "assets/img/iced-latte-splash.jpg", alt: "Kamiya Iced Latte dengan cipratan kopi" },
  { src: "assets/img/orenji.jpg", alt: "Orenji, perpaduan espresso dan jus jeruk" },
  { src: "assets/img/susu-pink.jpg", alt: "Minuman susu pink Kamiya" },
  { src: "assets/img/soda-stroberi.jpg", alt: "Soda stroberi segar Kamiya" },
  { src: "assets/img/dua-minuman-langit.jpg", alt: "Dua minuman Kamiya di bawah langit biru" },
  { src: "assets/img/cup-maskot.jpg", alt: "Cup Kamiya bergambar maskot bunga" },
  { src: "assets/img/cup-logo-daun.jpg", alt: "Cup Kamiya dengan logo daun" },
  { src: "assets/img/platter-snack.jpg", alt: "Snack platter kentang, nugget, dan sosis" },
  { src: "assets/img/tiga-minuman.jpg", alt: "Tiga minuman Kamiya diangkat bersama" },
];

/* ---------- UTIL ---------- */
const rp = (k) => "Rp" + (k * 1000).toLocaleString("id-ID");
const $ = (s) => document.querySelector(s);

/* ---------- MASKOT SVG (semanggi bersepatu) ---------- */
const MASCOT_SVG = `<svg viewBox="0 0 100 120"><g fill="#2E8B34" stroke="#124A18" stroke-width="3">
<circle cx="50" cy="28" r="18"/><circle cx="28" cy="48" r="18"/><circle cx="72" cy="48" r="18"/><circle cx="50" cy="58" r="20"/></g>
<circle cx="43" cy="52" r="3" fill="#124A18"/><circle cx="57" cy="52" r="3" fill="#124A18"/>
<path d="M42 62 Q50 70 58 62" fill="none" stroke="#124A18" stroke-width="3" stroke-linecap="round"/>
<path d="M42 78 L38 100 M58 78 L62 100" stroke="#124A18" stroke-width="4" stroke-linecap="round"/>
<ellipse cx="34" cy="104" rx="10" ry="6" fill="#F28C1E" stroke="#124A18" stroke-width="3"/>
<ellipse cx="66" cy="104" rx="10" ry="6" fill="#F28C1E" stroke="#124A18" stroke-width="3"/></svg>`;
document.querySelectorAll("[data-mascot]").forEach((el) => (el.innerHTML = MASCOT_SVG));

/* ---------- WHATSAPP ---------- */
function setupWhatsApp() {
  const ready = /^\d{9,15}$/.test(WA_NUMBER);
  const url = `https://wa.me/${WA_NUMBER}?text=${encodeURIComponent(WA_MESSAGE)}`;
  document.querySelectorAll(".js-wa").forEach((a) => {
    if (ready) {
      a.href = url; a.target = "_blank"; a.rel = "noopener";
    } else {
      a.removeAttribute("href");
      a.setAttribute("role", "button");
      a.setAttribute("tabindex", "0");
      a.title = "Nomor WhatsApp segera hadir";
      a.addEventListener("click", (e) => { e.preventDefault(); alert("Nomor WhatsApp Kamiya segera hadir. Sementara, hubungi kami lewat Instagram @kamiya.coffee ya!"); });
    }
  });
  const note = $(".js-wa-note");
  if (note) note.hidden = ready;
}

/* ---------- MENU ---------- */
function renderMenu(catId) {
  const cat = MENU.find((c) => c.id === catId);
  document.querySelectorAll(".tab").forEach((t) => t.setAttribute("aria-selected", t.dataset.id === catId));
  $("#menuNote").textContent = cat.note;
  const img = $("#menuPhoto img");
  img.src = cat.photo.src; img.alt = cat.photo.alt;
  $("#menuCaption").textContent = cat.photo.caption;

  const head = cat.sized ? `<li class="menu__row menu__row--head"><span></span><span>Regular</span><span>Large</span></li>` : "";
  $("#menuList").innerHTML = head + cat.items.map((it) => `
    <li class="menu__row ${cat.sized ? "" : "menu__row--single"}">
      <span class="menu__name">${it.name}${it.signature ? ' <em class="tag">Signature</em>' : ""}
        ${it.desc ? `<small>${it.desc}</small>` : ""}</span>
      ${it.price.map((p) => `<span class="price">${rp(p)}</span>`).join("")}
    </li>`).join("");
}
function setupMenu() {
  const tabs = $("#menuTabs");
  tabs.innerHTML = MENU.map((c) => `<button class="tab" role="tab" data-id="${c.id}">${c.label}</button>`).join("");
  tabs.addEventListener("click", (e) => { const b = e.target.closest(".tab"); if (b) renderMenu(b.dataset.id); });
  renderMenu(MENU[0].id);
  $("#happyList").innerHTML = HAPPY_HOURS.map((n) => `<li><span>${n}</span><span class="price">${rp(36)}</span></li>`).join("");
}

/* ---------- LIGHTBOX ---------- */
let lbItems = [], lbIndex = 0, lastFocus = null;
function openLightbox(items, i) {
  lbItems = items; lbIndex = i; lastFocus = document.activeElement;
  showLb(); $("#lightbox").hidden = false; document.body.style.overflow = "hidden"; $("#lbClose").focus();
}
function showLb() {
  const it = lbItems[lbIndex];
  $("#lbImg").src = it.src; $("#lbImg").alt = it.alt; $("#lbCap").textContent = it.alt;
  const multi = lbItems.length > 1;
  $("#lbPrev").hidden = !multi; $("#lbNext").hidden = !multi;
}
function closeLb() { $("#lightbox").hidden = true; document.body.style.overflow = ""; lastFocus && lastFocus.focus(); }
function stepLb(d) { lbIndex = (lbIndex + d + lbItems.length) % lbItems.length; showLb(); }
function setupLightbox() {
  $("#lbClose").onclick = closeLb;
  $("#lbPrev").onclick = () => stepLb(-1);
  $("#lbNext").onclick = () => stepLb(1);
  $("#lightbox").addEventListener("click", (e) => { if (e.target.id === "lightbox") closeLb(); });
  document.addEventListener("keydown", (e) => {
    if ($("#lightbox").hidden) return;
    if (e.key === "Escape") closeLb();
    if (e.key === "ArrowLeft") stepLb(-1);
    if (e.key === "ArrowRight") stepLb(1);
  });
  $("#openFullMenu").onclick = () => openLightbox(FULL_MENU, 0);

  $("#gallery").innerHTML = GALLERY.map((g, i) => `
    <button class="gallery__item" data-i="${i}" aria-label="Perbesar foto: ${g.alt}">
      <img src="${g.src}" alt="${g.alt}" loading="lazy" width="591" height="660" />
    </button>`).join("");
  $("#gallery").addEventListener("click", (e) => { const b = e.target.closest(".gallery__item"); if (b) openLightbox(GALLERY, +b.dataset.i); });
}

/* ---------- NAVBAR MOBILE ---------- */
function setupNav() {
  const btn = $("#navToggle"), menu = $("#navMenu");
  btn.onclick = () => { const open = menu.classList.toggle("is-open"); btn.setAttribute("aria-expanded", open); };
  menu.querySelectorAll("a").forEach((a) => a.addEventListener("click", () => { menu.classList.remove("is-open"); btn.setAttribute("aria-expanded", false); }));
  window.addEventListener("scroll", () => $("#nav").classList.toggle("is-scrolled", scrollY > 10), { passive: true });
}

/* ---------- ANIMASI SCROLL ---------- */
function setupReveal() {
  const els = document.querySelectorAll(".reveal");
  if (!("IntersectionObserver" in window)) return els.forEach((el) => el.classList.add("is-visible"));
  const io = new IntersectionObserver((entries) => entries.forEach((en) => {
    if (en.isIntersecting) { en.target.classList.add("is-visible"); io.unobserve(en.target); }
  }), { threshold: 0.12 });
  els.forEach((el) => io.observe(el));
}

/* ---------- INIT ---------- */
setupMenu();
setupLightbox();
setupWhatsApp();
setupNav();
setupReveal();
$("#year").textContent = new Date().getFullYear();
