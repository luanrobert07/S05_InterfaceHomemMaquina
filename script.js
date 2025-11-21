function openMenu() {
  document.getElementById("menu_aba").style.display = "block";
}

function closeMenu() {
  document.getElementById("menu_aba").style.display = "none";
}

function temaLim() {
  document.documentElement.style.setProperty('--cor-click', '#38184C');
  document.documentElement.style.setProperty('--cor-sombra', '#9b0a59');
  document.documentElement.style.setProperty('--cor-text', 'black');
  document.documentElement.style.setProperty('--cor-back1', '#CEF09D');
  document.documentElement.style.setProperty('--cor-back2', '#4f6a93');
  document.documentElement.style.setProperty('--md-sys-color-primary', '#38184C');
}

function temaInatel() {
  document.documentElement.style.setProperty('--cor-click', '#126ae2');
  document.documentElement.style.setProperty('--cor-sombra', '#0a599b');
  document.documentElement.style.setProperty('--cor-text', 'black');
  document.documentElement.style.setProperty('--cor-back1', '#edf2f4');
  document.documentElement.style.setProperty('--cor-back2', '#6a937a');
  document.documentElement.style.setProperty('--md-sys-color-primary', '#126ae2');
}

function temaDark() {
  const cores = {
      '--cor-click': '#CEF09D',
      '--cor-sombra': '#9b0a59',
      '--cor-text': 'white',
      '--cor-back1': '#38184C',
      '--cor-back2': '#4f6a93',
      '--md-sys-color-primary': '#CEF09D'
  };
  for (const [variavel, valor] of Object.entries(cores)) {
      document.documentElement.style.setProperty(variavel, valor);
  }
}

const eventos = [
  {
      id: 1,
      title: 'Semana do Software 2025',
      date: '12/05',
      time: '10:00',
      location: 'Salão de Eventos',
      type: 'tech',
      description: 'Uma semana inteira dedicada à tecnologia e inovação, com palestras, workshops e hackathons.',
      image: 'https://images.unsplash.com/photo-1504384308090-c894fdcc538d?auto=format&fit=crop&q=80&w=800&h=400'
  },
  {
      id: 2,
      title: 'Workshop de IoT',
      date: '12/01',
      time: '08:00',
      location: 'Laboratório CS&I',
      type: 'tech',
      description: 'Workshop prático sobre Internet das Coisas e suas aplicações na indústria 4.0.',
      image: 'https://images.unsplash.com/photo-1518770660439-4636190af475?auto=format&fit=crop&q=80&w=800&h=400'
  },
  {
      id: 3,
      title: 'Festa dos Alunos 2025',
      date: '18/05',
      time: '19:00',
      location: 'Área Esportiva',
      type: 'cultural',
      description: 'Venha comemorar a melhor Festa dos Alunos de todos os tempos!',
      image: 'https://images.unsplash.com/photo-1514525253161-7a46d19cd819?auto=format&fit=crop&q=80&w=800&h=400'
  },
  {
      id: 4,
      title: 'Feira de Oportunidades',
      date: '04/05',
      time: '10:00',
      location: 'Salão de Eventos',
      type: 'academic',
      description: 'Venha conhecer empresas e projetos com destaque na área da engenharia.',
      image: 'https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?auto=format&fit=crop&q=80&w=800&h=400'
  }
];

const carousel = document.querySelector('.carousel');

function createCards() {
  if (!carousel) return;
  eventos.forEach(event => {
      const card = document.createElement('div');
      card.classList.add('card');
      card.innerHTML = `
          <img src="${event.image}" alt="${event.title}">
          <div class="info">
              <h3>${event.title}</h3>
              <p>${event.description}</p>
              <p><span class="material-symbols-outlined icon">event</span> ${event.date} às ${event.time} <span class="material-symbols-outlined icon">pin_drop</span> ${event.location}</p>
          </div>
      `;
      carousel.appendChild(card);
  });
}

let index = 0;
function nextCard() {
  if (!carousel) return;
  index = (index + 1) % eventos.length;
  updateCarousel();
}

function prevCard() {
  if (!carousel) return;
  index = (index - 1 + eventos.length) % eventos.length;
  updateCarousel();
}

function updateCarousel() {
  if (!carousel) return;
  carousel.style.transform = `translateX(-${index * 100}%)`;
}

if (document.getElementById('nextBtn')) {
  document.getElementById('nextBtn').addEventListener('click', nextCard);
}
if (document.getElementById('prevBtn')) {
  document.getElementById('prevBtn').addEventListener('click', prevCard);
}
if (eventos.length > 0) {
    setInterval(nextCard, 5000);
    createCards();
}

if (carousel) {
  let startX;
  carousel.addEventListener('touchstart', (e) => { startX = e.touches[0].clientX; });
  carousel.addEventListener('touchend', (e) => {
      let endX = e.changedTouches[0].clientX;
      if (startX - endX > 50) nextCard();
      if (endX - startX > 50) prevCard();
  });
}

const inovacaoData = [
    {
        id: 1,
        tipo: 'conteudo',
        titulo: 'Artigo: O que é MVP e como construir o seu?',
        descricao: 'Aprenda o conceito de Produto Mínimo Viável para validar sua startup.',
        conteudoCompleto: 'O MVP (Minimum Viable Product) é uma versão de um produto com recursos suficientes para atrair clientes pioneiros e validar uma ideia de produto no início do ciclo de desenvolvimento. Esta estratégia pode ajudar a equipe do produto a receber feedback do usuário o mais rápido possível para iterar e melhorar o produto.',
        cor: '#126ae2', 
        status: 'novo', 
        rating: 0
    },
    {
        id: 2,
        tipo: 'evento',
        titulo: 'Inatel Startup Week',
        descricao: 'Participe da semana de palestras e workshops com fundadores de grandes startups.',
        conteudoCompleto: 'A Inatel Startup Week é um evento anual focado em empreendedorismo e inovação. Conecte-se com mentores, assista a palestras inspiradoras e participe de workshops práticos para tirar sua ideia do papel.',
        cor: '#e74c3c',
        status: 'novo',
        rating: 0
    },
    {
        id: 3,
        tipo: 'oportunidade',
        titulo: 'Vaga de Estágio - Dev Front-End Jr.',
        descricao: 'Startup parceira do Inatel busca estudante para desenvolver sua nova plataforma.',
        conteudoCompleto: 'Estamos procurando um estudante proativo e apaixonado por tecnologia para se juntar à nossa equipe. Requisitos: Conhecimento em HTML, CSS, JavaScript e React. Diferencial: TypeScript.',
        cor: '#2ecc71',
        status: 'novo'
    },
    {
        id: 4,
        tipo: 'conteudo',
        titulo: 'Vídeo: Pitch de Sucesso',
        descricao: 'Como apresentar sua ideia para investidores em 5 minutos.',
        conteudoCompleto: 'Neste vídeo, o CEO da StartApp S.A. compartilha dicas valiosas sobre como estruturar um pitch deck e apresentá-lo de forma convincente para conseguir seu primeiro investimento. Assista agora e aprenda com os melhores.',
        cor: '#126ae2', 
        status: 'novo',
        rating: 0
    },
    {
        id: 5,
        tipo: 'oportunidade',
        titulo: 'Edital de Inovação (Incubadora)',
        descricao: 'Inscreva seu projeto na incubadora do Inatel e ganhe mentoria.',
        conteudoCompleto: 'O processo seletivo para a Incubadora de Empresas do Inatel está aberto! Se você tem um projeto de base tecnológica, esta é sua chance. Oferecemos mentoria, espaço físico e conexão com o mercado. Inscreva-se abaixo.',
        cor: '#2ecc71',
        status: 'novo'
    }
];

const homeSection = document.getElementById('home_section');
const inovacaoSection = document.getElementById('inovacao_section');
const progressoSection = document.getElementById('progresso_section');

const inovacaoContainer = document.getElementById('inovacao_container');
const progressoContainer = document.getElementById('progresso_container');
const filtroButtons = document.querySelectorAll('.filtro_bot');

const modalOverlay = document.getElementById('modal_overlay');
const modalContent = document.getElementById('modal_content');
const toast = document.getElementById('toast_notification');

function showHome() {
    homeSection.style.display = 'block';
    inovacaoSection.style.display = 'none';
    progressoSection.style.display = 'none';
}

function showInovacao() {
    homeSection.style.display = 'none';
    inovacaoSection.style.display = 'block';
    progressoSection.style.display = 'none';
    renderInovacao('todos'); 
}

function showProgresso() {
    homeSection.style.display = 'none';
    inovacaoSection.style.display = 'none';
    progressoSection.style.display = 'block';
    renderProgresso(); 
}

function openModal(itemId) {
    const item = inovacaoData.find(i => i.id === itemId);
    if (!item) return;

    let modalHTML = '';

    modalHTML += `
        <div class="modal-header">
            <h3>${item.titulo}</h3>
            <span class="close-btn" onclick="closeModal()">&times;</span>
        </div>
        <p class="font" style="font-size: 12px; line-height: 1.6;">${item.conteudoCompleto}</p>
    `;

    if (item.tipo === 'oportunidade' || item.tipo === 'evento') {
        modalHTML += `
            <div class="modal-form-group">
                <label for="nome">Nome Completo:</label>
                <input type="text" id="nome" placeholder="Seu nome">
            </div>
            <div class="modal-form-group">
                <label for="email">Email:</label>
                <input type="email" id="email" placeholder="seu.email@inatel.br">
            </div>
            <button class="modal-button" onclick="submitInscricao(${item.id})">
                ${item.status === 'inscrito' ? 'Atualizar Inscrição' : 'Inscrever-se'}
            </button>
        `;
    } else if (item.tipo === 'conteudo') {
        modalHTML += `
            <div class="modal-rating">
                <label class="font" style="font-weight: bold; font-size: 12px;">Avalie este conteúdo:</label>
                <div>
                    <span class="star ${item.rating >= 1 ? 'selected' : ''}" onclick="submitAvaliacao(${item.id}, 1)">&#9733;</span>
                    <span class="star ${item.rating >= 2 ? 'selected' : ''}" onclick="submitAvaliacao(${item.id}, 2)">&#9733;</span>
                    <span class="star ${item.rating >= 3 ? 'selected' : ''}" onclick="submitAvaliacao(${item.id}, 3)">&#9733;</span>
                    <span class="star ${item.rating >= 4 ? 'selected' : ''}" onclick="submitAvaliacao(${item.id}, 4)">&#9733;</span>
                    <span class="star ${item.rating >= 5 ? 'selected' : ''}" onclick="submitAvaliacao(${item.id}, 5)">&#9733;</span>
                </div>
            </div>
        `;
    }

    modalContent.innerHTML = modalHTML;
    modalOverlay.style.display = 'flex';
}

function closeModal() {
    modalOverlay.style.display = 'none';
    modalContent.innerHTML = '';
}

modalOverlay.addEventListener('click', function(event) {
    if (event.target === modalOverlay) {
        closeModal();
    }
});

function submitInscricao(itemId) {
    const item = inovacaoData.find(i => i.id === itemId);
    item.status = 'inscrito';
    closeModal();
    showToast(`Inscrição para "${item.titulo}" realizada!`);
    renderInovacao(document.querySelector('.filtro_bot.active').getAttribute('onclick').split("'")[1]);
}

function submitAvaliacao(itemId, rating) {
    const item = inovacaoData.find(i => i.id === itemId);
    item.status = 'avaliado';
    item.rating = rating;
    closeModal();
    showToast(`Avaliação de ${rating} estrelas enviada!`);
    renderInovacao(document.querySelector('.filtro_bot.active').getAttribute('onclick').split("'")[1]);
}

function showToast(message) {
    toast.textContent = message;
    toast.classList.add('active');
    setTimeout(() => {
        toast.classList.remove('active');
    }, 3000); 
}

function renderInovacao(filtro) {
    if (!inovacaoContainer) return;
    inovacaoContainer.innerHTML = ''; 
    
    filtroButtons.forEach(btn => {
        btn.classList.remove('active');
        if (btn.getAttribute('onclick').includes(`'${filtro}'`)) {
            btn.classList.add('active');
        }
    });

    const dadosFiltrados = inovacaoData.filter(item => filtro === 'todos' || item.tipo === filtro);

    if (dadosFiltrados.length === 0) {
        inovacaoContainer.innerHTML = '<p class="font" style="text-align: center; margin: 20px;">Nenhum item encontrado.</p>';
        return;
    }

    dadosFiltrados.forEach(item => {
        const card = document.createElement('div');
        card.classList.add('inovacao-card');
        
        let statusBadge = '';
        let buttonText = 'Ver Mais';

        if(item.tipo === 'oportunidade' || item.tipo === 'evento') {
            buttonText = 'Inscrever-se';
            if(item.status === 'inscrito') {
                statusBadge = '<span class="inovacao-status">INSCRITO</span>';
                buttonText = 'Ver Inscrição';
            }
        } else if (item.tipo === 'conteudo') {
            buttonText = 'Ler Conteúdo';
            if(item.status === 'avaliado') {
                statusBadge = `<span class="inovacao-status">AVALIADO &#9733; ${item.rating}</span>`;
                buttonText = 'Ver Avaliação';
            }
        }

        card.innerHTML = `
            <div>
                <span class="inovacao-tag" style="background-color: ${item.cor}">${item.tipo}</span>
                ${statusBadge}
            </div>
            <h3 style="margin-top: 10px;">${item.titulo}</h3>
            <p class="font">${item.descricao}</p>
            
            <div class="inovacao-actions">
                <button onclick="openModal(${item.id})">
                    ${buttonText}
                </button>
            </div>
        `;
        inovacaoContainer.appendChild(card);
    });
}

function renderProgresso() {
    if (!progressoContainer) return;
    progressoContainer.innerHTML = '';

    const dadosFiltrados = inovacaoData.filter(item => item.status !== 'novo');

    if (dadosFiltrados.length === 0) {
        progressoContainer.innerHTML = '<p class="font" style="text-align: center; margin: 20px;">Você ainda não interagiu com nenhuma atividade.</p>';
        return;
    }

    dadosFiltrados.forEach(item => {
        let statusText = `Status: ${item.status}`;
        if(item.status === 'avaliado') {
            statusText = `Você avaliou com ${item.rating} estrela(s) &#9733;`;
        }

        const card = document.createElement('div');
        card.classList.add('progresso-card');
        card.innerHTML = `
            <span class="inovacao-tag" style="background-color: ${item.cor}">${item.tipo}</span>
            <h3 style="margin-top: 10px;">${item.titulo}</h3>
            <p class="progresso-status">${statusText}</p>
        `;
        progressoContainer.appendChild(card);
    });
}

class AulasComponent extends HTMLElement {
  constructor() {
    super();
    this.attachShadow({ mode: 'open' });
    this.hoje = "ter";
  }

  connectedCallback() {
    this.loadData();
  }

  async loadData() {
    try {
      const response = await fetch('aulas.json');
      const aulas = await response.json();
      this.render(aulas);
    } catch (error) {
      console.error('Erro ao carregar os dados das aulas:', error);
    }
  }

  render(aulas) {
    const aulasDia = aulas.filter(a => a.data === this.hoje);
    
    const link = document.createElement('link');
    link.rel = 'stylesheet';
    link.href = 'styles_componente.css'; 
    this.shadowRoot.appendChild(link);
    
    const iconStyles = document.createElement('style');
    iconStyles.textContent = `
      @import url('https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:opsz,wght,FILL,GRAD@20..48,100..700,0..1,-50..200');
      .material-symbols-outlined {
          font-variation-settings: 'FILL' 0, 'wght' 400, 'GRAD' 0, 'opsz' 24;
          color: white;
      }
      /* (REQ C) Animação de fade-in para os cards de aula */
      .comp-aula {
          animation: fadeIn 0.5s ease-out;
      }
      @keyframes fadeIn {
          from { opacity: 0; transform: translateY(10px); }
          to { opacity: 1; transform: translateY(0); }
      }
    `;
    this.shadowRoot.appendChild(iconStyles);

    const fontLink = document.createElement('link');
    fontLink.rel = 'stylesheet';
    fontLink.href = 'https://fonts.googleapis.com/css2?family=Arimo:wght@400;700&display=swap';
    this.shadowRoot.appendChild(fontLink);
    
    this.shadowRoot.innerHTML += `
      <div>
        ${aulasDia.map(a => {
          let provaDisplay = a.prova_alert ? '' : 'display: none;';
          const nota = parseFloat(a.nota);
          let corNota;
          if (nota < 6) corNota = '#e74c3c';
          else if (nota >= 6 && nota < 8) corNota = '#f39c12';
          else corNota = '#2ecc71'; 
          const estiloNota = `background-color: ${corNota};`;

          return `
            <div class="comp-aula">
              <div class="lable-prova p_lable" style="${provaDisplay}">PROVA: <b>${a.prova}</b></div>
              <div class="titulo_aula">${a.disciplina}</div>
              <p class="p p_lable" style="color: var(--cor-text, black); font-weight: normal; font-size: 11px;">Local e Horário: <b>${a.local} - ${a.horario}</b></p>
              <div classs="lables">
                <div class="lable-frequencia p_lable">FALTAS: <b>${a.frequencia}</b></div>
                <div class="lable-nota p_lable" style="${estiloNota}">CR: <b>${a.nota}</b></div> 
              </div>
            </div>
          `;
        }).join('')}
      </div>
    `;
  }
}
customElements.define('aulas-component', AulasComponent);