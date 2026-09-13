
const experiencias = [
  {
    cargo: "Estudante de Tecnologia em Análise e Desenvolvimento de Sistemas",
    empresa: "Universidade Federal do Paraná (UFPR)",
    periodo: "08/2026 – 08/2029",
    descricao: "Atualmente estudante do curso tecnólogo de Análise e Desenvolvimento de Sistemas na UFPR, concretizando os conhecimentos para a atuação na área e buscando novas oportunidades profissionais e acadêmicas nesse meio.",
  },
  {
    cargo: "Trainee Odox",
    empresa: "ODox Tecnologia",
    periodo: "06/2025 – 09/2025",
    descricao: "Formação prática com Odoo, plataforma de gestão empresarial (ERP), realizada em parceria entre a Odox Tecnologia e o Governo do Paraná para estudantes, com foco em desenvolvimento e configuração de soluções voltadas a gestão, vendas, projetos, finanças e comércio eletrônico. Criação e estruturação de sites e lojas virtuais. Aplicação de conhecimentos em desafios práticos baseados em problemas reais de municípios paranaenses. Experiência com integração entre tecnologia, gestão de processos e necessidades de negócio.",
  },
  {
    cargo: "Talento Tech-PR - Formação Profissional em TIC",
    empresa: "Governo do Paraná",
    periodo: "06/2024 – 06/2025",
    descricao: "Programa de formação e capacitação profissional em Tecnologia da Informação e Comunicação. Tivemos oportunidades de contato com empresas reais da área, com seminários semanais onde focamos em formação técnica, atividades práticas e desenvolvimento de projetos em parceria com essas empresas. Com formação abrangendo programação, fundamentos de computação, banco de dados, linguagem Python, desenvolvimento Web, engenharia de software, inglês técnico e soft skills.",
  },
  {
    cargo: "Formação concluída em Ensino Médio Técnico em Análise de Sistemas ",
    empresa: "CEJAC",
    periodo: "02/2023 – 11/2025",
    descricao: "O início da minha trajetória aonde concretizei os pilares para compreender a tecnologia ao nosso redor, pensamento lógico e comunicação com pessoa. A partir dessa oportunidade que pude ver as possibilidades futuras e decidi trabalhar com essa área.",
  },  
];

function criarItemExperiencia(experiencia) {
  const item = document.createElement("div");
  item.className = "experience-item";

  item.innerHTML = `
    <div class="experience-header">
      <span class="experience-cargo">${experiencia.cargo}</span>
      <span class="experience-periodo">${experiencia.periodo}</span>
    </div>
    <p class="experience-empresa">${experiencia.empresa}</p>
    <p class="experience-descricao">${experiencia.descricao}</p>
  `;

  return item;
}

function renderizarExperiencias() {
  const timeline = document.getElementById("experience-timeline");

  if (!experiencias.length) {
    timeline.innerHTML = '<p class="experience-empty">Nenhuma experiência adicionada ainda.</p>';
    return;
  }

  experiencias.forEach((experiencia) => {
    timeline.appendChild(criarItemExperiencia(experiencia));
  });
}

const projetos = [
  {
    titulo: "Armazém do Sítio - Desafio Morretes ",
    imagens: [
      { src: "images/pitcharmazemdositio2.png", legenda: "Apresentação do Projeto." },
      { src: "images/pitcharmazemdositiovideo.mp4", legenda: "O fluxo da loja digital.", tipo: "video"},
      { src: "images/pitcharmazemdositio3.png", legenda: "Apresentação de cadastro como clientes ou comércio." },
    ],
    tags: ["Mobile Development", "Backend", "Firebase", "FlutterFlow", " E-commerce", "UX/UI"],
    linkDemo: "",
    linkRepo: "",
    contexto: "O Desafio Morretes foi desenvolvido como Trabalho de Conclusão de Curso no programa Talento Tech. Com intuito de aumentar a visibilidade de pequenos comércios e produtores agrícolas locais, buscando aproximá-los dos consumidores por meio de uma solução digital.",
    solucao: "Em equipe, desenvolvemos uma plataforma mobile voltada à divulgação e comercialização de produtos agrícolas locais. A aplicação reúne os comércios em um ambiente digital, permitindo que cada estabelecimento apresente seus produtos aos consumidores e tenha ferramentas para acompanhar seu próprio negócio. A plataforma contempla diferentes experiências para consumidores e comerciantes. O consumidor pode explorar os produtos disponíveis, conhecer os estabelecimentos e adicioná-los a um carrinho de compras. Já o comerciante pode cadastrar seu estabelecimento, gerenciar seus produtos e acompanhar estatísticas relacionadas à sua atividade na plataforma.",
    comoFunciona: "A aplicação foi construída utilizando FlutterFlow, com Firebase como base para o armazenamento e gerenciamento dos dados. A estrutura do sistema contempla informações de usuários, comerciantes, produtos e demais elementos necessários para conectar os diferentes fluxos da aplicação.",
    meuPapel: "Minha principal responsabilidade foi o desenvolvimento da lógica de backend e integração com o Firebase, estruturando a comunicação da aplicação com os dados e conectando os diferentes fluxos ao backend. O desenvolvimento, entretanto, foi colaborativo. Além da atuação no backend, participei diretamente da construção do front-end, contribuindo para diversas telas e fluxos da aplicação e auxiliando meu colega durante o desenvolvimento da interface.",
    tecnologias: "FlutterFlow | Firebase",
    aprendizados: "O projeto foi apresentado presencialmente na UEPG como parte da conclusão do Talento Tech e conquistou o 2º lugar na premiação.",
  },
  {
    titulo: "SilkTouch - Gestão de uma livraria digital",
    imagens: [
      { src: "images/silktouchinterface.png", legenda: "Apresentação da loja digital." },
      { src: "images/silktouchestoque.png", legenda: "Exemplo de itens gerenciados pelo estoque." },
    ],
    tags: ["Projeto Trainee", "oDox Tecnologia", "ERP", "Gestão"],
    linkDemo: "https://www.linkedin.com/posts/vinicius-kociolek_projeto-desenvolvimento-gestaeto-activity-7356517718298181632-oGmM?utm_source=share&utm_medium=member_desktop&rcm=ACoAAE7h90EBEs_9snTIXcvnQZX1O0bEGXh4Cpo",
    linkRepo: "",
    contexto: "Projeto de conclusão do programa trainee realizado em parceria com a oDox Tecnologia, participamos do Scale-up Game, uma simulação de gestão empresarial utilizando o Odoo ERP.",
    solucao: "Nossa equipe montou a SilkTouch, uma livraria online especializada em livros relacionados ao universo do famoso jogo Minecraft, criando uma operação integrada de compras, estoque, vendas e faturamento. O sistema contemplava o fluxo desde a compra e entrada de produtos no estoque até sua venda e faturamento, incluindo documentos e vias impressas gerados a partir das operações realizadas no sistema. Também foram utilizados fornecedores fictícios e movimentações simuladas para analisar o comportamento do estoque e os resultados das operações.",
    comoFunciona: "",
    meuPapel: "Atuei como Gerente de Logística e Produção, trabalhando diretamente na configuração e operação dos módulos relacionados ao estoque e à cadeia de suprimentos. Fui responsável pela criação e organização de produtos e categorias, além da configuração de regras de estoque e reposição, incluindo limites que acionavam novas necessidades de compra. Também acompanhei as baixas e movimentações de estoque e analisei os impactos das operações sobre a disponibilidade dos produtos.",
    tecnologias: "Odoo ERP | E-commerce | Gestão de Estoque | Compras | Vendas | Faturamento  Relatórios",
    aprendizados: "O projeto proporcionou experiência prática com ERP, logística, gestão de estoque, análise de dados e processos empresariais, além da experiência de decisões em equipe com informações produzidas pelo sistema.",
  },
  {
    titulo: "Integração de Tecnologia com Treinos",
    imagens: [
      { src: "images/vktreinos1.jpg", legenda: "Demonstração da plataforma de treinos." },
      { src: "images/vktreinos2.jpg", legenda: "Interface com o sistema de adicionar, criar ou ver recomendações de treino." },
      { src: "images/vktreinos3.png", legenda: "Chatbot idealizado para a plataforma, inicialmente com API do GPT." },
    ],
    tags: ["TCC", "Ensino Médio Técnico em Desenvolvimento de Sistemas", "Research/Pesquisa"],
    linkDemo: "",
    linkRepo: "",
    contexto: "Projeto desenvolvido como TCC a partir da investigação sobre como a tecnologia poderia contribuir para uma rotina de exercícios mais organizada, personalizada e consistente.",
    solucao: "Foram realizados estudos bibliográficos e uma pesquisa local para compreender dificuldades dos usuários e a relação entre tecnologia, acompanhamento de treinos e evolução física. Com uma proposta avaliada de solução digital, com uma plataforma viável de acompanhamento e dados de treino",
    comoFunciona: "A pesquisa deu origem ao conceito e layout de uma plataforma para centralizar registros de treinos, acompanhamento de progresso, sugestões personalizadas, e comunidade, incluindo a aplicação da proposta de um chatbot como assistente virtual.",
    meuPapel: "O projeto representou uma das mais importantes experiências em que apliquei e trabalhei com a transformação de um problema identificado por pesquisa e estudos em uma proposta de produto digital, explorando funcionalidades, experiência de uso e representação visual da solução.",
    tecnologias: "Pesquisa | Product Design | UX | Tecnologia | Prototipação | Análise de Problemas.",
    aprendizados: "",
  },
  {
    titulo: "Sistema de Cadastro de Afiliados",
    imagens: [
      { src: "images/pythontkinter.mp4", legenda: "Interface do programa sendo testada.", tipo: "video"},
    ],
    tags: ["Python", "Tkinter", "OOP", "Desktop Application", "CRUD", "CSS", "JavaScript"],
    linkDemo: "",
    linkRepo: "https://github.com/whironn/interfaceTKinter.git",
    contexto: "Um dos meus projetos iniciais de desenvolvimento, criado para aplicar conceitos fundamentais de Python, interfaces gráficas e Programação Orientada a Objetos na construção de uma aplicação de gerenciamento.",
    solucao: "Desenvolvi uma aplicação desktop para cadastro e gerenciamento de fornecedores e compradores, permitindo registrar informações como identificação, contato, filial, categoria, status e data de emissão. A aplicação possui uma interface gráfica organizada em diferentes abas, permitindo realizar os cadastros e visualizar os registros em uma tabela. Os dados podem ser atualizados e registros selecionados podem ser removidos diretamente pela interface.",
    comoFunciona: "",
    meuPapel: "Desenvolvimento integral da aplicação, desde a estruturação das classes e regras da aplicação até a construção da interface gráfica e implementação das operações de cadastro e gerenciamento.",
    tecnologias: "Python | Tkinter | Programação Orientada a Objetos",
    aprendizados: "Por ser um dos meus primeiros projetos, ele representa uma etapa importante da minha evolução em desenvolvimento de software, consolidando fundamentos de lógica de programação, orientação a objetos, interfaces gráficas e organização de aplicações.",
  },
];

const carrosselEstado = {};

const secoesDescricao = [
  { campo: "contexto", titulo: "Contexto" },
  { campo: "solucao", titulo: "Solução" },
  { campo: "comoFunciona", titulo: "Como funciona" },
  { campo: "meuPapel", titulo: "Meu papel" },
  { campo: "tecnologias", titulo: "Tecnologias" },
  { campo: "aprendizados", titulo: "Aprendizados / evolução" },
];

function renderMidiaCarrossel(item, tituloProjeto) {
  if (item.tipo === "video") {
    return `
      <video
        class="project-carousel-image"
        src="${item.src}"
        controls
        playsinline
        preload="metadata"
        onerror="this.style.display='none'; this.parentElement.nextElementSibling.style.display='flex';"
      ></video>
    `;
  }

  return `
    <img
      src="${item.src}"
      alt="${item.legenda || tituloProjeto}"
      class="project-carousel-image"
      onerror="this.style.display='none'; this.parentElement.nextElementSibling.style.display='flex';"
    />
  `;
}

function criarCarrosselHtml(projeto, indiceProjeto) {
  const imagens = projeto.imagens || [];

  if (!imagens.length) {
    return `
      <div class="project-carousel">
        <div class="project-carousel-viewport">
          <div class="project-carousel-fallback" style="display:flex;">${projeto.titulo}</div>
        </div>
      </div>
    `;
  }

  const primeira = imagens[0];

  const setasHtml =
    imagens.length > 1
      ? `
        <button type="button" class="project-carousel-arrow project-carousel-prev" aria-label="Imagem anterior" onclick="mudarImagemCarrossel(${indiceProjeto}, -1)">&#8249;</button>
        <button type="button" class="project-carousel-arrow project-carousel-next" aria-label="Próxima imagem" onclick="mudarImagemCarrossel(${indiceProjeto}, 1)">&#8250;</button>
      `
      : "";

  const pontosHtml =
    imagens.length > 1
      ? `
        <div class="project-carousel-dots">
          ${imagens
            .map(
              (_, indiceImagem) => `
                <button
                  type="button"
                  class="project-carousel-dot${indiceImagem === 0 ? " active" : ""}"
                  aria-label="Ir para imagem ${indiceImagem + 1}"
                  onclick="irParaImagemCarrossel(${indiceProjeto}, ${indiceImagem})"
                ></button>
              `
            )
            .join("")}
        </div>
      `
      : "";

  return `
    <div class="project-carousel" data-carrossel="${indiceProjeto}">
      <div class="project-carousel-viewport">
        <div class="project-carousel-midia">${renderMidiaCarrossel(primeira, projeto.titulo)}</div>
        <div class="project-carousel-fallback">${projeto.titulo}</div>
        ${setasHtml}
      </div>
      ${pontosHtml}
      <p class="project-carousel-caption">${primeira.legenda || ""}</p>
    </div>
  `;
}

function atualizarCarrossel(indiceProjeto) {
  const projeto = projetos[indiceProjeto];
  const imagens = (projeto && projeto.imagens) || [];
  if (!imagens.length) return;

  const container = document.querySelector(`[data-carrossel="${indiceProjeto}"]`);
  if (!container) return;

  const atual = carrosselEstado[indiceProjeto] || 0;
  const imagemAtual = imagens[atual];

  const midia = container.querySelector(".project-carousel-midia");
  const fallback = container.querySelector(".project-carousel-fallback");
  const legenda = container.querySelector(".project-carousel-caption");

  if (midia) {
    midia.innerHTML = renderMidiaCarrossel(imagemAtual, projeto.titulo);
  }
  if (fallback) {
    fallback.style.display = "none";
  }
  if (legenda) {
    legenda.textContent = imagemAtual.legenda || "";
  }

  container.querySelectorAll(".project-carousel-dot").forEach((ponto, indiceImagem) => {
    ponto.classList.toggle("active", indiceImagem === atual);
  });
}

function mudarImagemCarrossel(indiceProjeto, direcao) {
  const projeto = projetos[indiceProjeto];
  const total = ((projeto && projeto.imagens) || []).length;
  if (!total) return;

  const atual = carrosselEstado[indiceProjeto] || 0;
  carrosselEstado[indiceProjeto] = (atual + direcao + total) % total;
  atualizarCarrossel(indiceProjeto);
}

function irParaImagemCarrossel(indiceProjeto, indiceImagem) {
  carrosselEstado[indiceProjeto] = indiceImagem;
  atualizarCarrossel(indiceProjeto);
}

function criarGavetaProjeto(projeto, indiceProjeto) {
  const gaveta = document.createElement("details");
  gaveta.className = "project-drawer";

  // Carrossel de imagens do projeto (com legenda e navegação, se houver mais de uma)
  const carrosselHtml = criarCarrosselHtml(projeto, indiceProjeto);

  // Tags de tecnologia
  const tagsHtml = (projeto.tags || [])
    .map((tag) => `<span class="project-tag">${tag}</span>`)
    .join("");

  // Links (só aparecem se foram preenchidos)
  const links = [];
  if (projeto.linkDemo) {
    links.push(`<a href="${projeto.linkDemo}" target="_blank" rel="noopener">Ver projeto</a>`);
  }
  if (projeto.linkRepo) {
    links.push(`<a href="${projeto.linkRepo}" target="_blank" rel="noopener">Código</a>`);
  }

  // Monta os subtítulos da descrição, pulando os campos deixados em branco
  const descricaoHtml = secoesDescricao
    .filter((secao) => projeto[secao.campo])
    .map(
      (secao) => `
        <h4 class="project-subtitle">${secao.titulo}</h4>
        <p class="project-text">${projeto[secao.campo]}</p>
      `
    )
    .join("");

  gaveta.innerHTML = `
    <summary class="project-summary">
      <span class="project-summary-title">${projeto.titulo}</span>
      <span class="project-summary-arrow" aria-hidden="true">&#9662;</span>
    </summary>
    <div class="project-drawer-body">
      <div class="project-drawer-media">${carrosselHtml}</div>
      <div class="project-drawer-text">
        <div class="project-tags">${tagsHtml}</div>
        ${descricaoHtml}
        <div class="project-links">${links.join("")}</div>
      </div>
    </div>
  `;

  return gaveta;
}

function renderizarProjetos() {
  const lista = document.getElementById("projects-grid");

  if (!projetos.length) {
    lista.innerHTML = '<p class="projects-empty">Nenhum projeto adicionado ainda.</p>';
    return;
  }

  projetos.forEach((projeto, indice) => {
    lista.appendChild(criarGavetaProjeto(projeto, indice));
  });
}

document.addEventListener("DOMContentLoaded", () => {
  renderizarExperiencias();
  renderizarProjetos();
});
