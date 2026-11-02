/**
 * Lógica Principal da Aplicação
 * Agência: ImpulsoWeb10
 */

document.addEventListener("DOMContentLoaded", () => {
  renderBeneficios();
  renderCardapio('salgadas');
  renderFAQ();
  initMobileMenu();
  initTabFilters();
});

// Helper para links dinâmicos de WhatsApp
function formatarLinkWhatsapp(mensagem) {
  const phone = SITE_CONFIG.empresa.whatsapp;
  const encodedMsg = encodeURIComponent(mensagem);
  return `https://wa.me/${phone}?text=${encodedMsg}`;
}

// 1. Renderiza os Benefícios
function renderBeneficios() {
  const container = document.getElementById("beneficiosGrid");
  if (!container) return;

  const icones = ["🔥", "🛵", "🍕", "⚡"];

  container.innerHTML = SITE_CONFIG.beneficios.map((beneficio, index) => `
    <div class="benefit-card text-center">
      <div class="benefit-icon">${icones[index % icones.length]}</div>
      <h3>Diferencial ${index + 1}</h3>
      <p>${beneficio}</p>
    </div>
  `).join('');
}

// 2. Renderiza o Cardápio por Categoria
function renderCardapio(categoria) {
  const grid = document.getElementById("menuGrid");
  if (!grid) return;

  let itens = [];

  if (categoria === 'salgadas') {
    itens = SITE_CONFIG.cardapio.salgadas;
  } else if (categoria === 'doces') {
    itens = SITE_CONFIG.cardapio.doces;
  } else if (categoria === 'bebidas') {
    itens = SITE_CONFIG.cardapio.bebidas;
  } else if (categoria === 'bordas') {
    itens = SITE_CONFIG.bordasRecheadas.map(b => ({
      nome: `Borda de ${b.nome}`,
      descricao: b.descricao
    }));
  }

  grid.innerHTML = itens.map(item => {
    const mensagemProd = `Olá! Vim pelo site da Pizzaria Juliana e Favorita e gostaria de pedir a ${item.nome}.`;
    const linkProd = formatarLinkWhatsapp(mensagemProd);

    return `
      <div class="product-card">
        <div class="product-info">
          <h3 class="product-title">${item.nome}</h3>
          <p class="product-desc">${item.descricao}</p>
          <div class="product-action">
            <a href="${linkProd}" target="_blank" rel="noopener noreferrer" class="btn btn-primary btn-sm" style="width: 100%;">
              <span>Consultar / Pedir</span>
            </a>
          </div>
        </div>
      </div>
    `;
  }).join('');
}

// 3. Inicializa os Filtros por Tab
function initTabFilters() {
  const tabs = document.querySelectorAll(".tab-btn");
  tabs.forEach(tab => {
    tab.addEventListener("click", () => {
      tabs.forEach(t => t.classList.remove("active"));
      tab.classList.add("active");
      const category = tab.getAttribute("data-category");
      renderCardapio(category);
    });
  });
}

// 4. Renderiza o FAQ Expansível
function renderFAQ() {
  const container = document.getElementById("faqList");
  if (!container) return;

  container.innerHTML = SITE_CONFIG.faq.map((item, index) => `
    <div class="faq-item">
      <button class="faq-question" onclick="toggleFAQ(${index})">
        <span>${item.pergunta}</span>
        <span class="faq-icon">+</span>
      </button>
      <div class="faq-answer">
        <p>${item.resposta}</p>
      </div>
    </div>
  `).join('');
}

// Toggle para FAQ
function toggleFAQ(index) {
  const items = document.querySelectorAll(".faq-item");
  items.forEach((item, i) => {
    if (i === index) {
      item.classList.toggle("active");
    } else {
      item.classList.remove("active");
    }
  });
}

// 5. Menu Mobile
function initMobileMenu() {
  const toggle = document.getElementById("mobileToggle");
  const nav = document.getElementById("mainNav");

  if (toggle && nav) {
    toggle.addEventListener("click", () => {
      nav.classList.toggle("active");
    });

    nav.querySelectorAll("a").forEach(link => {
      link.addEventListener("click", () => {
        nav.classList.remove("active");
      });
    });
  }
}
