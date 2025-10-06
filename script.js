// --- Funções de Menu e Tema ---
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
      '--cor-text': 'white', // Alterado para 'white' para melhor contraste no tema escuro
      '--cor-back1': '#38184C',
      '--cor-back2': '#4f6a93',
      '--md-sys-color-primary': '#CEF09D'
  };

  for (const [variavel, valor] of Object.entries(cores)) {
      document.documentElement.style.setProperty(variavel, valor);
  }
}


// --- Lógica do Carrossel de Eventos ---

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
  index = (index + 1) % eventos.length;
  updateCarousel();
}

function prevCard() {
  index = (index - 1 + eventos.length) % eventos.length;
  updateCarousel();
}

function updateCarousel() {
  carousel.style.transform = `translateX(-${index * 100}%)`;
}

// Adicionando interatividade
if (document.getElementById('nextBtn')) {
  document.getElementById('nextBtn').addEventListener('click', nextCard);
}
if (document.getElementById('prevBtn')) {
  document.getElementById('prevBtn').addEventListener('click', prevCard);
}

// Auto avanço a cada 5 segundos
setInterval(nextCard, 5000);

// Arrastar no celular
if (carousel) {
  let startX;
  carousel.addEventListener('touchstart', (e) => {
      startX = e.touches[0].clientX;
  });
  carousel.addEventListener('touchend', (e) => {
      let endX = e.changedTouches[0].clientX;
      if (startX - endX > 50) nextCard();
      if (endX - startX > 50) prevCard();
  });
}

// Inicializando o carrossel
createCards();


// --- Componente Customizado Aulas (AulasComponent) ---

class AulasComponent extends HTMLElement {
  constructor() {
    super();
    this.attachShadow({ mode: 'open' }); // Cria o Shadow DOM
    this.hoje = "ter"; // Dia da semana para filtrar
  }

  connectedCallback() {
    this.loadData();
  }

  async loadData() {
    try {
      // 2º Passo - Carrega os dados do JSON
      const response = await fetch('aulas.json');
      const aulas = await response.json();
      this.render(aulas);
    } catch (error) {
      console.error('Erro ao carregar os dados das aulas:', error);
    }
  }

  render(aulas) {
    const aulasDia = aulas.filter(a => a.data === this.hoje); // Filtra as aulas para o dia de hoje
    
    // 3º Passo - Cria o link para o CSS do componente (styles_componente.css)
    const link = document.createElement('link');
    link.rel = 'stylesheet';
    link.href = 'styles_componente.css'; 
    this.shadowRoot.appendChild(link);
    
    // Adiciona estilos para os ícones Material Symbols (necessário no Shadow DOM)
    const iconStyles = document.createElement('style');
    iconStyles.textContent = `
      @import url('https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:opsz,wght,FILL,GRAD@20..48,100..700,0..1,-50..200');
      .material-symbols-outlined {
          font-variation-settings: 'FILL' 0, 'wght' 400, 'GRAD' 0, 'opsz' 24;
          color: white; /* Cor dos ícones dentro das etiquetas (opcional, mas bom para consistência) */
      }
    `;
    this.shadowRoot.appendChild(iconStyles);

    this.shadowRoot.innerHTML += `
      <div>
        ${aulasDia.map(a => {
          // Lógica para PROVA (4º Passo)
          let provaDisplay = a.prova_alert ? '' : 'display: none;';
          
          // Lógica para COR DINÂMICA do CR/NOTA (5º Passo - Implemente Melhorias)
          const nota = parseFloat(a.nota);
          let corNota;

          if (nota < 6) {
            corNota = '#e74c3c'; // Vermelho
          } else if (nota >= 6 && nota < 8) {
            corNota = '#f39c12'; // Laranja
          } else { // nota >= 8
            corNota = '#2ecc71'; // Verde
          }
          
          const estiloNota = `background-color: ${corNota};`;

          return `
            <div class="comp-aula">
              <div class="lable-prova p_lable" style="${provaDisplay}">PROVA: <b>${a.prova}</b></div>
              <div class="titulo_aula">${a.disciplina}</div>
              <p class="p">Local e Horário: <b>${a.local} - ${a.horario}</b></p>
              <div class="lables">
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

// Registrando o componente
customElements.define('aulas-component', AulasComponent);