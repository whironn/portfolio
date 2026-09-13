/* ==========================================================
   LÓGICA COMPARTILHADA ENTRE TODAS AS PÁGINAS DO SITE
   ==========================================================
   Modo escuro e o ano automático do rodapé. Esse arquivo é
   incluído em toda página do site (index.html, criacoes.html,
   projetos-interativos.html etc.) — não precisa duplicar essa
   lógica em cada página.
========================================================== */
document.addEventListener("DOMContentLoaded", () => {
  // Atualiza o ano no rodapé automaticamente
  const anoEl = document.getElementById("ano-atual");
  if (anoEl) {
    anoEl.textContent = new Date().getFullYear();
  }

  // ========================================================
  // MODO ESCURO
  // Lembra a escolha do visitante usando o localStorage do navegador,
  // então a preferência se mantém ao navegar entre as páginas.
  // ========================================================
  function aplicarTema(tema) {
    document.documentElement.setAttribute("data-theme", tema);
    const botao = document.getElementById("theme-toggle");
    if (botao) {
      botao.textContent = tema === "dark" ? "☀️" : "🌙";
    }
  }

  const temaSalvo = localStorage.getItem("tema-portfolio") || "light";
  aplicarTema(temaSalvo);

  const botaoTema = document.getElementById("theme-toggle");
  if (botaoTema) {
    botaoTema.addEventListener("click", () => {
      const temaAtual = document.documentElement.getAttribute("data-theme");
      const novoTema = temaAtual === "dark" ? "light" : "dark";
      localStorage.setItem("tema-portfolio", novoTema);
      aplicarTema(novoTema);
    });
  }
});
