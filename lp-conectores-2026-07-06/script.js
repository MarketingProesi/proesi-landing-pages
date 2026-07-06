/* LP Conectores - Proesi
   Vanilla JS: filtro por categoria + troca de imagem no hover (touch)

   ============================================================
   CONFIGURAÇÃO DE IMAGENS
   ------------------------------------------------------------
   Para publicar na Magazord (ou em qualquer CDN), altere apenas
   a constante IMG_BASE abaixo. Todas as URLs de imagens
   (banners e produtos) são derivadas dela.

   Exemplo:
     const IMG_BASE = "https://cdn.magazord.com.br/proesi/lp-conectores/assets/";
   ============================================================ */

const IMG_BASE = "assets/";

// Banners e imagens usadas diretamente no HTML
const IMAGES = {
  bannerDesktop: IMG_BASE + "banner-desktop.png",
  bannerMobile:  IMG_BASE + "banner-mobile.png",
  setaCta:       IMG_BASE + "seta-cta.svg",
};

// Pasta base dos produtos (dentro de IMG_BASE)
const PRODUCTS_BASE = IMG_BASE + "produtos/";

const CATEGORIES = [
  {
    id: "audio-video",
    label: "Áudio / Vídeo",
    products: [
      ["Mini Din", "Mini Din", "https://www.proesi.com.br/conectores-mini-din-para-cabos-e-placas"],
      ["Canon", "Canon", "https://www.proesi.com.br/conectores-canon-xlr-macho-e-femea"],
      ["HDMI", "HDMI", "https://www.proesi.com.br/conectores-hdmi"],
      ["DVI", "DVI", "https://www.proesi.com.br/conectores-dvi"],
      ["P1", "P1", "https://www.proesi.com.br/conectores-p1-para-audio"],
      ["P2", "P2", "https://www.proesi.com.br/plugs-conectores-adaptadores-e-jacks-p2"],
      ["P10", "P10", "https://www.proesi.com.br/plug-p10-conector-adaptador"],
      ["RCA", "RCA", "https://www.proesi.com.br/plugs-conectores-adaptadores-e-jacks-rca"],
      ["Speak-On", "Speak-on", "https://www.proesi.com.br/plugs-conectores-e-jacks-speakon"],
      ["DisplayPort", "DisplayPort", "https://www.proesi.com.br/conectores-displayport"],
    ],
  },
  {
    id: "coaxial-rf-cftv",
    label: "Coaxial, RF e CFTV",
    products: [
      ["Coaxial RG58, RG59 e RG6", "Coaxial (RG58, RG59, RG6)", "https://www.proesi.com.br/conectores-f-coaxial-para-cabos-rg6-e-rg59"],
      ["BNC", "BNC", "https://www.proesi.com.br/conectores-bnc-plugs-e-adaptadores"],
    ],
  },
  {
    id: "bornes-pci",
    label: "Bornes para PCI",
    products: [
      ["2EDG 3,81 mm", "2EDG 3,81", "https://www.proesi.com.br/borne-2edg-381mm-para-placa-eletronica"],
      ["2EDG 5,08 mm", "2EDG 5,08", "https://www.proesi.com.br/bornes-2edg-508mm-para-pci"],
      ["KRE 3,81 mm", "KRE 3,81", "https://www.proesi.com.br/borne-kre-381mm-para-placa-eletronica"],
      ["KRE 5,08 mm", "KRE 5,08", "https://www.proesi.com.br/borne-kre-508mm-para-placa-eletronica"],
      ["KRE 9,5 mm", "KRE 9,5", "https://www.proesi.com.br/bornes-kre-95mm-para-pci"],
    ],
  },
  {
    id: "bornes-emendas",
    label: "Bornes / Emendas",
    products: [
      ["Derivação", "Derivação", "https://www.proesi.com.br/conector-para-derivacao-de-fios"],
      ["Torção", "Torção", "https://www.proesi.com.br/conectores-de-torcao-para-fios"],
      ["CMK", "CMK", "https://www.proesi.com.br/conector-de-emenda-cmk-com-alavanca"],
      ["Barra H", "Barra H", "https://www.proesi.com.br/conector-barra-h-tipo-sindal"],
      ["Wago 221", "Wago 221", "https://www.proesi.com.br/conector-wago-221-com-alavanca"],
      ["Porcelana", "Porcelana", "https://www.proesi.com.br/conector-de-porcelana-para-fios"],
      ["CIS", "CIS", "https://www.proesi.com.br/borne-cis-para-reator-e-iluminacao"],
      ["Pressão", "Pressão", "https://www.proesi.com.br/bornes-de-pressao-para-audio"],
      ["Bendal", "Bendal", "https://www.proesi.com.br/bendal-para-placa-pci-e-chassi"],
      ["Bala", "Bala", "https://www.proesi.com.br/bala"],
      ["Bandeira", "Bandeira", "https://www.proesi.com.br/terminais-bandeira"],
      ["Faston", "Faston", "https://www.proesi.com.br/faston-terminal-eletrico"],
      ["Forquilha", "Forquilha", "https://www.proesi.com.br/forquilha"],
      ["Gancho", "Gancho", "https://www.proesi.com.br/gancho"],
      ["Luva", "Luva", "https://www.proesi.com.br/emenda-luva"],
      ["Olhal", "Olhal", "https://www.proesi.com.br/olhal"],
      ["Pino", "Pino", "https://www.proesi.com.br/pino"],
      ["Tubular", "Tubular", "https://www.proesi.com.br/tubular"],
      ["Emenda", "Emenda", "https://www.proesi.com.br/terminais-de-emenda-para-cabos-e-conexoes-eletricas"],
    ],
  },
  {
    id: "conectores-pci",
    label: "Conectores para PCI",
    products: [
      ["Barra Pino", "Barra Pino", "https://www.proesi.com.br/barra-de-pino-macho-e-femea"],
      ["KK 2,54mm", "KK 2,54", "https://www.proesi.com.br/conectores-kk-254mm"],
      ["KK 3,96mm", "KK 3,96", "https://www.proesi.com.br/conector-kk-396mm"],
      ["MLS", "MLS 2,54", "https://www.proesi.com.br/conectores-mls-mini-latch"],
      ["Mini Fit", "Mini Fit", "https://www.proesi.com.br/conectores-mini-fit"],
      ["Header", "Header", "https://www.proesi.com.br/conectores-header-para-placas-pci"],
      ["IDCT", "IDCT", "https://www.proesi.com.br/conectores-idct"],
      ["Latch", "Latch", "https://www.proesi.com.br/conectores-latch-idc"],
    ],
  },
  {
    id: "conectores-industrial",
    label: "Conectores Industrial",
    products: [
      ["Amp Tyco", "Amp Tyco", "https://www.proesi.com.br/conectores-amp-tyco"],
      ["ITC", "ITC", "https://www.proesi.com.br/conectores-itc-circulares"],
      ["Mike", "Mike", "https://www.proesi.com.br/conectores-mike-circulares"],
      ["SAK, Passagem e Poste", "SAK", "https://www.proesi.com.br/bornes-sak-de-passagem-e-poste-final-para-trilho-din"],
      ["Wago Winsta", "Wago Winsta", "https://www.proesi.com.br/conectores-wago-winsta"],
      ["Wago 0831", "Wago 0831", "https://www.proesi.com.br/conectores-wago-831"],
      ["Wago 0832", "Wago 0832", "https://www.proesi.com.br/busca?q=Wago+0832"],
    ],
  },
  {
    id: "dados-comunicacao",
    label: "Dados / Comunicação",
    products: [
      ["DB9", "DB9", "https://www.proesi.com.br/conectores-db9-macho-e-femea-cabo-painel-e-placa"],
      ["DB15", "DB15", "https://www.proesi.com.br/conectores-db15-macho-e-femea-para-cabo-painel-e-placa"],
      ["DB25", "DB25", "https://www.proesi.com.br/conectores-db25-macho-e-femea-para-cabo-painel-e-placa"],
      ["DB37", "DB37", "https://www.proesi.com.br/conectores-db37-macho-e-femea-para-cabo-painel-e-placa"],
      ["USB", "USB", "https://www.proesi.com.br/conectores-usb-para-placas-e-cabos"],
    ],
  },
  {
    id: "alimentacao-energia",
    label: "Alimentação / Energia",
    products: [
      ["P4", "P4", "https://www.proesi.com.br/plugs-jacks-e-adaptadores-p4"],
      ["XT60", "XT60", "https://www.proesi.com.br/conector-xt60-macho-e-femea"],
      ["Quadrado", "Quadrado", "https://www.proesi.com.br/conector-quadrado-macho-e-femea"],
      ["Banana", "Banana", "https://www.proesi.com.br/plugs-e-bornes-banana-4mm"],
      ["MC4", "MC4", "https://www.proesi.com.br/conectores-mc4-para-energia-solar"],
      ["Cigarreira", "Cigarreira", "https://www.proesi.com.br/plugs-e-tomadas-cigarreira"],
    ],
  },
  {
    id: "acessorios-protecao",
    label: "Acessórios de Proteção",
    products: [
      ["Case Gelbox", "Case Gelbox", "https://www.proesi.com.br/case-gelbox-para-protecao-de-emendas"],
    ],
  },
  {
    id: "conectores-montados",
    label: "Conectores Montados",
    products: [
      ["Rabicho", "Rabicho", "https://www.proesi.com.br/busca?q=Rabicho"],
      ["Chicote", "Chicote", "https://www.proesi.com.br/linha-para-cabo-chicote?categoria=6306"],
      ["Modelismo", "Modelismo", "https://www.proesi.com.br/linha-para-cabo-chicote?categoria=6734"],
      ["Garra Jacaré", "Garra Jacaré", "https://www.proesi.com.br/busca?q=Garra+Jacar%C3%A9"],
    ],
  },
];

function imgUrl(folder, n) {
  return PRODUCTS_BASE + encodeURIComponent(folder) + "/" + n + ".jpg";
}

function applyStaticImages() {
  const bd = document.getElementById("hero-banner-desktop");
  const bm = document.getElementById("hero-banner-mobile");
  if (bd) bd.src = IMAGES.bannerDesktop;
  if (bm) bm.src = IMAGES.bannerMobile;
}

function buildMenu() {
  const nav = document.getElementById("category-nav");
  const select = document.getElementById("category-select");

  CATEGORIES.forEach((cat, i) => {
    const btn = document.createElement("button");
    btn.type = "button";
    btn.className = "cat-btn" + (i === 0 ? " is-active" : "");
    btn.textContent = cat.label;
    btn.dataset.category = cat.id;
    btn.setAttribute("aria-label", "Ver produtos da categoria " + cat.label);
    btn.setAttribute("aria-pressed", i === 0 ? "true" : "false");
    btn.addEventListener("click", () => selectCategory(cat.id));
    nav.appendChild(btn);

    const opt = document.createElement("option");
    opt.value = cat.id;
    opt.textContent = cat.label;
    select.appendChild(opt);
  });

  select.addEventListener("change", (e) => {
    selectCategory(e.target.value);
  });
}

function buildGrid() {
  const grid = document.getElementById("product-grid");
  const frag = document.createDocumentFragment();
  CATEGORIES.forEach((cat) => {
    cat.products.forEach(([name, folder, link]) => {
      const card = document.createElement("article");
      card.className = "card";
      card.dataset.category = cat.id;

      const media = document.createElement("div");
      media.className = "card__media";

      const img1 = document.createElement("img");
      img1.className = "card__img card__img--primary";
      img1.src = imgUrl(folder, 1);
      img1.alt = name;
      img1.loading = "lazy";
      img1.decoding = "async";

      const img2 = document.createElement("img");
      img2.className = "card__img card__img--hover";
      img2.src = imgUrl(folder, 2);
      img2.alt = "";
      img2.setAttribute("aria-hidden", "true");
      img2.loading = "lazy";
      img2.decoding = "async";
      img2.addEventListener("error", () => img2.remove());

      media.appendChild(img1);
      media.appendChild(img2);

      const title = document.createElement("h3");
      title.className = "card__title";
      title.textContent = name;

      const cta = document.createElement("a");
      cta.className = "card__cta";
      cta.href = link;
      cta.target = "_blank";
      cta.rel = "noopener noreferrer";
      cta.setAttribute("aria-label", "Conferir produtos " + name + " na Proesi");
      cta.innerHTML = '<span>Conferir</span><svg class="card__arrow" viewBox="0 0 24 24" aria-hidden="true"><path d="M7 17L17 7M17 7H9M17 7V15" fill="none" stroke="currentColor" stroke-width="2.2" stroke-linecap="round" stroke-linejoin="round"/></svg>';

      card.appendChild(media);
      card.appendChild(title);
      card.appendChild(cta);
      frag.appendChild(card);
    });
  });
  grid.appendChild(frag);
}

function selectCategory(id) {
  document.querySelectorAll(".cat-btn").forEach((b) => {
    const active = b.dataset.category === id;
    b.classList.toggle("is-active", active);
    b.setAttribute("aria-pressed", active ? "true" : "false");
  });
  const select = document.getElementById("category-select");
  if (select) select.value = id;
  if (document.body.dataset.view === "todos") return;
  document.querySelectorAll(".card").forEach((c) => {
    c.hidden = c.dataset.category !== id;
  });
}

let currentCategory = null;

const VIEW_META = {
  categorias: { emoji: "📂", text: "Navegar por categorias" },
  todos:      { emoji: "📦", text: "Conferir todos os modelos" },
};

function updateViewSwitcher(view) {
  const label = document.getElementById("view-switcher-label");
  if (label) {
    const meta = VIEW_META[view] || VIEW_META.categorias;
    label.innerHTML = '<span class="view-switcher__emoji" aria-hidden="true">' + meta.emoji + '</span><span class="view-switcher__text">' + meta.text + '</span>';
  }
  document.querySelectorAll(".view-switcher__item").forEach((it) => {
    it.classList.toggle("is-active", it.dataset.view === view);
  });
}

function closeViewSwitcher() {
  const wrap = document.getElementById("view-switcher");
  const menu = document.getElementById("view-switcher-menu");
  const toggle = document.getElementById("view-switcher-toggle");
  if (wrap) wrap.classList.remove("is-open");
  if (menu) menu.hidden = true;
  if (toggle) toggle.setAttribute("aria-expanded", "false");
}

function setView(view) {
  document.body.dataset.view = view;
  document.querySelectorAll(".view-tab").forEach((t) => {
    const active = t.dataset.view === view;
    t.classList.toggle("is-active", active);
    t.setAttribute("aria-pressed", active ? "true" : "false");
  });
  updateViewSwitcher(view);
  const title = document.getElementById("categorias-titulo");
  const nav = document.getElementById("category-nav");
  const sel = document.getElementById("category-select");
  if (view === "todos") {
    if (title) title.textContent = "Modelos";
    if (nav) nav.hidden = true;
    if (sel) sel.hidden = true;
    document.querySelectorAll(".card").forEach((c) => { c.hidden = false; });
  } else {
    if (title) title.textContent = "Categorias";
    if (nav) nav.hidden = false;
    if (sel) sel.hidden = false;
    selectCategory(currentCategory || CATEGORIES[0].id);
  }
  sendHeight();
}


/* ============================================================
   Iframe auto-height (postMessage to parent)
   ============================================================ */
function sendHeight() {
  const h = Math.max(
    document.documentElement.scrollHeight,
    document.body ? document.body.scrollHeight : 0
  );
  try {
    parent.postMessage({ type: "lpHeight", height: h }, "*");
  } catch (e) { /* ignore */ }
}

document.addEventListener("DOMContentLoaded", () => {
  applyStaticImages();
  buildMenu();
  buildGrid();
  currentCategory = CATEGORIES[0].id;
  setView("categorias");

  document.querySelectorAll(".view-tab").forEach((tab) => {
    tab.addEventListener("click", () => setView(tab.dataset.view));
  });

  // Mobile dropdown switcher
  const swWrap = document.getElementById("view-switcher");
  const swToggle = document.getElementById("view-switcher-toggle");
  const swMenu = document.getElementById("view-switcher-menu");
  if (swToggle && swMenu && swWrap) {
    swToggle.addEventListener("click", (e) => {
      e.stopPropagation();
      const open = swWrap.classList.toggle("is-open");
      swMenu.hidden = !open;
      swToggle.setAttribute("aria-expanded", open ? "true" : "false");
    });
    swMenu.querySelectorAll(".view-switcher__item").forEach((it) => {
      it.addEventListener("click", () => {
        setView(it.dataset.view);
        closeViewSwitcher();
      });
    });
    document.addEventListener("click", (e) => {
      if (!swWrap.contains(e.target)) closeViewSwitcher();
    });
    document.addEventListener("keydown", (e) => {
      if (e.key === "Escape") closeViewSwitcher();
    });
  }


  // Track selected category from cat buttons
  document.querySelectorAll(".cat-btn").forEach((b) => {
    b.addEventListener("click", () => { currentCategory = b.dataset.category; });
  });
  const sel = document.getElementById("category-select");
  if (sel) sel.addEventListener("change", (e) => { currentCategory = e.target.value; });

  window.addEventListener("load", sendHeight);
  window.addEventListener("resize", sendHeight);
  if (typeof ResizeObserver !== "undefined") {
    const ro = new ResizeObserver(() => sendHeight());
    ro.observe(document.body);
  }
  document.querySelectorAll("img").forEach((img) => {
    img.addEventListener("load", sendHeight);
  });
  sendHeight();
});

