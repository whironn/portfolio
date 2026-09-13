
const criacoes = [
  {
    titulo: "Instagram para Projetos",
    descricao: "Conta profissional criado com o intuito de compartilhar projetos, criar anúncios e se conectar com a área tech. Visite em @Vinicius_OFK.dev",
    imagem: {
      src: "images/instaviniciusofkdevperfil.png",
      legenda: "Posts divulgando projetos.",
    },
  },
  {
    titulo: "Estande de ADS - Feira de Empreendedorismo",
    descricao: "Feira de empreendedorismo realizada anualmente no colégio CEJAC, fui representante do ensino médio de Análise e Desenvolvimento de Sistemas durante os três anos de curso, montando apresentações, demonstrações digitais e mostrando a área de TI para o público. ",
    imagem: {
      src: "images/feiradevscejac.png",
      legenda: "Stand de ADS no CEJAC - 2025",
    },
  },
  {
    titulo: "Cursos Alura",
    descricao: "Trilhas primárias <br>• Integre Aplicações Java com Banco de Dados <br>• Java Web: Crie Aplicações com Servlets e MVC <br>• Aprenda a Programar em JavaScript com Foco no Back-end <br>• Formação Linguagem C - fundamentos de programação, lógica e desenvolvimento em C.",
    imagem: {
      src: "images/aluraperfilvk.png",
      legenda: "Trilhas de cursos realizados na Plataforma Alura",
    },
  },
  {
    titulo: "Getting Started With BTP",
    descricao: "Curso introdutório oferecido para estudantes pela iniciativa da SAP com foco em conhecer a arquitetura ERP e sistemas cloud da SAP.",
    imagem: {
      src: "images/sap-business-technology-platform-get-started-with-b.png",
      legenda: "Certificado BTP SAP",
    },
  },
];

function criarItemCriacao(item) {
  const linha = document.createElement("div");
  linha.className = "criacao-item";

  const legendaHtml = item.imagem.legenda
    ? `<p class="criacao-legenda">${item.imagem.legenda}</p>`
    : "";

  linha.innerHTML = `
    <div class="criacao-media">
      <img
        src="${item.imagem.src}"
        alt="${item.imagem.legenda || item.titulo}"
        class="criacao-imagem"
        onerror="this.style.display='none'; this.nextElementSibling.style.display='flex';"
      />
      <div class="criacao-imagem-fallback">${item.titulo}</div>
      ${legendaHtml}
    </div>
    <div class="criacao-texto">
      <h2 class="criacao-titulo">${item.titulo}</h2>
      <p class="criacao-descricao">${item.descricao}</p>
    </div>
  `;

  return linha;
}

function renderizarCriacoes() {
  const lista = document.getElementById("criacoes-lista");

  if (!criacoes.length) {
    lista.innerHTML = '<p class="criacoes-empty">Nenhuma criação adicionada ainda.</p>';
    return;
  }

  criacoes.forEach((item) => {
    lista.appendChild(criarItemCriacao(item));
  });
}

document.addEventListener("DOMContentLoaded", () => {
  renderizarCriacoes();
});
