// Data from the provided JSON
const multasData = {
  "multas": [
    {
      "data": "2012-08-10",
      "empresa": "Facebook",
      "pais": "Estados Unidos",
      "autoridade": "FTC",
      "valor_usd": 0,
      "valor_original": "US$ 0",
      "motivo": "Acordo de consentimento por violações de privacidade (supervisão por 20 anos)",
      "detalhes": "Primeiro marco regulatório sem multa monetária"
    },
    {
      "data": "2015-02-12",
      "empresa": "Facebook",
      "pais": "França",
      "autoridade": "CNIL",
      "valor_usd": 180000,
      "valor_original": "€ 150.000",
      "motivo": "Rastreamento ilegal via cookies",
      "detalhes": "Primeira multa monetária substancial na Europa"
    },
    {
      "data": "2016-07-28",
      "empresa": "Facebook",
      "pais": "Brasil",
      "autoridade": "Justiça do Amazonas",
      "valor_usd": 11700000,
      "valor_original": "R$ 38 milhões",
      "motivo": "Descumprimento de ordens judiciais",
      "detalhes": "Bloqueio de contas por não cooperar em investigações"
    },
    {
      "data": "2017-09-15",
      "empresa": "Facebook",
      "pais": "Espanha",
      "autoridade": "AEPD",
      "valor_usd": 1400000,
      "valor_original": "€ 1,2 milhão",
      "motivo": "Coleta de dados sensíveis sem consentimento",
      "detalhes": "Violação de leis de proteção de dados espanholas"
    },
    {
      "data": "2018-10-25",
      "empresa": "Facebook",
      "pais": "Reino Unido",
      "autoridade": "ICO",
      "valor_usd": 645000,
      "valor_original": "£ 500.000",
      "motivo": "Escândalo Cambridge Analytica",
      "detalhes": "Penalidade máxima permitida pela legislação pré-GDPR"
    },
    {
      "data": "2019-06-15",
      "empresa": "Facebook",
      "pais": "Brasil",
      "autoridade": "TRF4",
      "valor_usd": 7100000,
      "valor_original": "R$ 23 milhões",
      "motivo": "Falhas na interceptação de comunicações no WhatsApp (Operação Malote)",
      "detalhes": "Descumprimento de ordens judiciais"
    },
    {
      "data": "2019-07-24",
      "empresa": "Facebook",
      "pais": "Estados Unidos",
      "autoridade": "FTC",
      "valor_usd": 5000000000,
      "valor_original": "US$ 5 bilhões",
      "motivo": "Violações múltiplas do acordo de 2012, incluindo Cambridge Analytica",
      "detalhes": "Maior multa de privacidade da história americana até então"
    },
    {
      "data": "2019-07-24",
      "empresa": "Facebook",
      "pais": "Estados Unidos",
      "autoridade": "SEC",
      "valor_usd": 100000000,
      "valor_original": "US$ 100 milhões",
      "motivo": "Falha em comunicação apropriada a investidores sobre Cambridge Analytica",
      "detalhes": "Violação de transparência para acionistas"
    },
    {
      "data": "2019-12-30",
      "empresa": "Facebook",
      "pais": "Brasil",
      "autoridade": "MJSP",
      "valor_usd": 2000000,
      "valor_original": "R$ 6,6 milhões",
      "motivo": "Vazamento de dados de 443 mil usuários brasileiros no caso Cambridge Analytica",
      "detalhes": "Primeira multa brasileira significativa por privacidade"
    },
    {
      "data": "2020-03-15",
      "empresa": "Facebook",
      "pais": "Estados Unidos",
      "autoridade": "Tribunal de Illinois",
      "valor_usd": 650000000,
      "valor_original": "US$ 650 milhões",
      "motivo": "Violação da lei BIPA por uso não autorizado de reconhecimento facial",
      "detalhes": "Maior acordo de classe da história americana para privacidade biométrica"
    },
    {
      "data": "2021-09-02",
      "empresa": "WhatsApp",
      "pais": "Irlanda/UE",
      "autoridade": "DPC",
      "valor_usd": 267000000,
      "valor_original": "€ 225 milhões",
      "motivo": "Falhas de transparência no processamento de dados",
      "detalhes": "Segunda maior sanção GDPR até então"
    },
    {
      "data": "2021-12-06",
      "empresa": "Facebook",
      "pais": "Brasil",
      "autoridade": "Procon-SP",
      "valor_usd": 3500000,
      "valor_original": "R$ 11,28 milhões",
      "motivo": "Apagão de serviços em outubro de 2021 e cláusulas abusivas",
      "detalhes": "Penalidade por instabilidade de serviços"
    },
    {
      "data": "2022-03-15",
      "empresa": "Instagram",
      "pais": "Irlanda/UE",
      "autoridade": "DPC",
      "valor_usd": 18000000,
      "valor_original": "€ 17 milhões",
      "motivo": "Falhas na proteção de dados de usuários",
      "detalhes": "Violação de notificação de brechas de dados"
    },
    {
      "data": "2022-09-05",
      "empresa": "Instagram",
      "pais": "Irlanda/UE",
      "autoridade": "DPC",
      "valor_usd": 425000000,
      "valor_original": "€ 405 milhões",
      "motivo": "Violações relacionadas à privacidade de dados de crianças",
      "detalhes": "Contas de menores configuradas como públicas por padrão"
    },
    {
      "data": "2022-11-28",
      "empresa": "Facebook",
      "pais": "Irlanda/UE",
      "autoridade": "DPC",
      "valor_usd": 280000000,
      "valor_original": "€ 265 milhões",
      "motivo": "Falha em prevenir violação de dados de mais de 500 milhões de usuários",
      "detalhes": "Vazamento massivo de dados pessoais"
    },
    {
      "data": "2022-12-23",
      "empresa": "Facebook",
      "pais": "Estados Unidos",
      "autoridade": "Acordo de Classe",
      "valor_usd": 725000000,
      "valor_original": "US$ 725 milhões",
      "motivo": "Acordo para encerrar ação coletiva do caso Cambridge Analytica",
      "detalhes": "Maior recuperação em ação coletiva de privacidade de dados"
    },
    {
      "data": "2023-01-04",
      "empresa": "Facebook",
      "pais": "Irlanda/UE",
      "autoridade": "DPC",
      "valor_usd": 220000000,
      "valor_original": "€ 210 milhões",
      "motivo": "Processamento inadequado de dados para publicidade comportamental",
      "detalhes": "Violação de base legal para publicidade direcionada"
    },
    {
      "data": "2023-01-04",
      "empresa": "Instagram",
      "pais": "Irlanda/UE",
      "autoridade": "DPC",
      "valor_usd": 190000000,
      "valor_original": "€ 180 milhões",
      "motivo": "Processamento inadequado de dados para publicidade comportamental",
      "detalhes": "Coordenada com multa do Facebook"
    },
    {
      "data": "2023-05-22",
      "empresa": "Facebook",
      "pais": "Irlanda/UE",
      "autoridade": "DPC",
      "valor_usd": 1300000000,
      "valor_original": "€ 1,2 bilhão",
      "motivo": "Transferências ilegais de dados europeus para os Estados Unidos",
      "detalhes": "Maior multa GDPR da história"
    },
    {
      "data": "2023-09-13",
      "empresa": "WhatsApp",
      "pais": "Irlanda/UE",
      "autoridade": "DPC",
      "valor_usd": 6000000,
      "valor_original": "€ 5,5 milhões",
      "motivo": "Processamento de dados sem base legal adequada",
      "detalhes": "Violação de princípios fundamentais do GDPR"
    },
    {
      "data": "2024-07-02",
      "empresa": "Meta",
      "pais": "Brasil",
      "autoridade": "ANPD",
      "valor_usd": 15500,
      "valor_original": "R$ 50 mil/dia",
      "motivo": "Uso de dados para treinar IA sem consentimento",
      "detalhes": "Primeira sanção LGPD significativa - multa diária"
    },
    {
      "data": "2024-08-15",
      "empresa": "Meta",
      "pais": "Brasil",
      "autoridade": "STJ",
      "valor_usd": 650000,
      "valor_original": "R$ 2,1 milhões",
      "motivo": "Descumprimento na Operação Simon",
      "detalhes": "Confirmação de multa por descumprimento judicial"
    },
    {
      "data": "2024-11-05",
      "empresa": "Meta",
      "pais": "Coreia do Sul",
      "autoridade": "PIPC",
      "valor_usd": 15600000,
      "valor_original": "₩ 21,6 bilhões",
      "motivo": "Coleta não autorizada de dados comportamentais para publicidade direcionada",
      "detalhes": "Dados sensíveis de 980 mil usuários compartilhados com 4 mil anunciantes"
    },
    {
      "data": "2024-12-17",
      "empresa": "Meta",
      "pais": "Irlanda/UE",
      "autoridade": "DPC",
      "valor_usd": 265000000,
      "valor_original": "€ 251 milhões",
      "motivo": "Violação de dados de 2018 afetando 29 milhões de usuários",
      "detalhes": "Falha em implementar proteção de dados por design"
    },
    {
      "data": "2025-05-02",
      "empresa": "Meta",
      "pais": "Nigéria",
      "autoridade": "FCCPC/NDPC",
      "valor_usd": 290000000,
      "valor_original": "US$ 290 milhões",
      "motivo": "Práticas anticompetitivas e violações de dados",
      "detalhes": "Maior multa africana - Meta ameaça suspender serviços"
    }
  ]
};

// Application state
let currentMultas = [...multasData.multas];
let selectedMulta = null;
let sortByValue = false;

// DOM elements
const timeline = document.getElementById('timeline');
const detailsPanel = document.getElementById('details-panel');
const panelContent = document.getElementById('panel-content');

// Filter elements
const filterPais = document.getElementById('filter-pais');
const filterEmpresa = document.getElementById('filter-empresa');
const filterAnoInicio = document.getElementById('filter-ano-inicio');
const filterAnoFim = document.getElementById('filter-ano-fim');
const filterBusca = document.getElementById('filter-busca');
const btnLimparFiltros = document.getElementById('btn-limpar-filtros');
const btnOrdenacao = document.getElementById('btn-ordenacao');
const btnFecharDetalhes = document.getElementById('btn-fechar-detalhes');

// Utility functions
function formatCurrency(value) {
  if (value === 0) return 'Sem multa monetária';
  if (value >= 1000000000) {
    return `US$ ${(value / 1000000000).toFixed(1)} bi`;
  }
  if (value >= 1000000) {
    return `US$ ${(value / 1000000).toFixed(1)} mi`;
  }
  if (value >= 1000) {
    return `US$ ${(value / 1000).toFixed(0)} mil`;
  }
  return `US$ ${value.toLocaleString()}`;
}

function formatDate(dateString) {
  const date = new Date(dateString);
  return date.toLocaleDateString('pt-BR', {
    day: '2-digit',
    month: 'long',
    year: 'numeric'
  });
}

function getValueCategory(value) {
  if (value === 0) return 'low';
  if (value <= 1000000) return 'low';
  if (value <= 100000000) return 'medium';
  return 'high';
}

function initializeFilters() {
  // Populate country filter
  const paises = [...new Set(multasData.multas.map(m => m.pais))].sort();
  paises.forEach(pais => {
    const option = document.createElement('option');
    option.value = pais;
    option.textContent = pais;
    filterPais.appendChild(option);
  });
}

function renderTimeline() {
  timeline.innerHTML = '';
  
  if (currentMultas.length === 0) {
    timeline.innerHTML = `
      <div class="timeline-empty">
        <h3>Nenhuma multa encontrada</h3>
        <p>Tente ajustar os filtros para ver mais resultados</p>
      </div>
    `;
    return;
  }

  currentMultas.forEach((multa, index) => {
    const timelineItem = document.createElement('div');
    timelineItem.className = `timeline-item ${getValueCategory(multa.valor_usd)}`;
    timelineItem.setAttribute('data-index', index);
    
    timelineItem.innerHTML = `
      <div class="timeline-content">
        <div class="timeline-date">${formatDate(multa.data)}</div>
        <div class="timeline-title">
          <span>
            <span class="timeline-empresa">${multa.empresa}</span>
            ${multa.pais}
          </span>
          <span class="timeline-valor">${formatCurrency(multa.valor_usd)}</span>
        </div>
        <div class="timeline-motivo">${multa.motivo}</div>
      </div>
    `;
    
    timelineItem.addEventListener('click', () => showDetails(multa, timelineItem));
    timeline.appendChild(timelineItem);
  });
}

function showDetails(multa, element) {
  // Remove previous selection
  document.querySelectorAll('.timeline-item.selected').forEach(item => {
    item.classList.remove('selected');
  });
  
  // Add selection to clicked item
  element.classList.add('selected');
  
  selectedMulta = multa;
  
  panelContent.innerHTML = `
    <div class="detail-section">
      <div class="detail-label">Data</div>
      <div class="detail-value">${formatDate(multa.data)}</div>
    </div>
    
    <div class="detail-section">
      <div class="detail-label">Empresa</div>
      <div class="detail-value">${multa.empresa}</div>
    </div>
    
    <div class="detail-section">
      <div class="detail-label">País/Região</div>
      <div class="detail-value">${multa.pais}</div>
    </div>
    
    <div class="detail-section">
      <div class="detail-label">Autoridade</div>
      <div class="detail-value">${multa.autoridade}</div>
    </div>
    
    <div class="detail-section">
      <div class="detail-label">Valor</div>
      <div class="detail-value large">${formatCurrency(multa.valor_usd)}</div>
      <div class="detail-value" style="font-size: 12px; color: var(--color-text-secondary);">
        ${multa.valor_original}
      </div>
    </div>
    
    <div class="detail-section">
      <div class="detail-label">Motivo</div>
      <div class="detail-value">${multa.motivo}</div>
    </div>
    
    <div class="detail-section">
      <div class="detail-label">Detalhes</div>
      <div class="detail-value">${multa.detalhes}</div>
    </div>
  `;
  
  detailsPanel.classList.add('fade-in');
}

function applyFilters() {
  const paisFilter = filterPais.value;
  const empresaFilter = filterEmpresa.value;
  const anoInicioFilter = filterAnoInicio.value;
  const anoFimFilter = filterAnoFim.value;
  const buscaFilter = filterBusca.value.toLowerCase();
  
  currentMultas = multasData.multas.filter(multa => {
    // Country filter
    if (paisFilter && multa.pais !== paisFilter) return false;
    
    // Company filter
    if (empresaFilter && multa.empresa !== empresaFilter) return false;
    
    // Year range filter
    const ano = new Date(multa.data).getFullYear();
    if (anoInicioFilter && ano < parseInt(anoInicioFilter)) return false;
    if (anoFimFilter && ano > parseInt(anoFimFilter)) return false;
    
    // Search filter
    if (buscaFilter) {
      const searchText = `${multa.motivo} ${multa.detalhes} ${multa.autoridade}`.toLowerCase();
      if (!searchText.includes(buscaFilter)) return false;
    }
    
    return true;
  });
  
  // Apply sorting
  if (sortByValue) {
    currentMultas.sort((a, b) => b.valor_usd - a.valor_usd);
  } else {
    currentMultas.sort((a, b) => new Date(a.data) - new Date(b.data));
  }
  
  renderTimeline();
}

function clearFilters() {
  filterPais.value = '';
  filterEmpresa.value = '';
  filterAnoInicio.value = '';
  filterAnoFim.value = '';
  filterBusca.value = '';
  applyFilters();
}

function toggleSort() {
  sortByValue = !sortByValue;
  btnOrdenacao.textContent = sortByValue ? 'Ordenar por Data' : 'Ordenar por Valor';
  applyFilters();
}

function createPieChart() {
  const canvas = document.getElementById('chart-paises');
  const ctx = canvas.getContext('2d');
  const centerX = canvas.width / 2;
  const centerY = canvas.height / 2;
  const radius = 100;
  
  // Calculate country data
  const paisesData = {};
  multasData.multas.forEach(multa => {
    if (!paisesData[multa.pais]) {
      paisesData[multa.pais] = 0;
    }
    paisesData[multa.pais] += multa.valor_usd;
  });
  
  const total = Object.values(paisesData).reduce((sum, val) => sum + val, 0);
  const colors = ['#1FB8CD', '#FFC185', '#B4413C', '#ECEBD5', '#5D878F', '#DB4545', '#D2BA4C', '#964325'];
  
  let currentAngle = 0;
  Object.entries(paisesData).forEach(([pais, valor], index) => {
    const sliceAngle = (valor / total) * 2 * Math.PI;
    
    ctx.beginPath();
    ctx.moveTo(centerX, centerY);
    ctx.arc(centerX, centerY, radius, currentAngle, currentAngle + sliceAngle);
    ctx.closePath();
    ctx.fillStyle = colors[index % colors.length];
    ctx.fill();
    
    // Add labels for larger slices
    if (sliceAngle > 0.3) {
      const labelAngle = currentAngle + sliceAngle / 2;
      const labelX = centerX + Math.cos(labelAngle) * (radius * 0.7);
      const labelY = centerY + Math.sin(labelAngle) * (radius * 0.7);
      
      ctx.fillStyle = '#fff';
      ctx.font = '12px Arial';
      ctx.textAlign = 'center';
      ctx.fillText(pais.split('/')[0], labelX, labelY);
    }
    
    currentAngle += sliceAngle;
  });
}

function createTemporalChart() {
  const canvas = document.getElementById('chart-temporal');
  const ctx = canvas.getContext('2d');
  const padding = 40;
  const chartWidth = canvas.width - 2 * padding;
  const chartHeight = canvas.height - 2 * padding;
  
  // Group by year
  const yearData = {};
  multasData.multas.forEach(multa => {
    const year = new Date(multa.data).getFullYear();
    if (!yearData[year]) {
      yearData[year] = 0;
    }
    yearData[year] += multa.valor_usd;
  });
  
  const years = Object.keys(yearData).sort();
  const values = years.map(year => yearData[year]);
  const maxValue = Math.max(...values);
  
  // Draw axes
  ctx.strokeStyle = '#ccc';
  ctx.beginPath();
  ctx.moveTo(padding, padding);
  ctx.lineTo(padding, canvas.height - padding);
  ctx.lineTo(canvas.width - padding, canvas.height - padding);
  ctx.stroke();
  
  // Draw line
  ctx.strokeStyle = '#1FB8CD';
  ctx.lineWidth = 2;
  ctx.beginPath();
  
  years.forEach((year, index) => {
    const x = padding + (index / (years.length - 1)) * chartWidth;
    const y = canvas.height - padding - (values[index] / maxValue) * chartHeight;
    
    if (index === 0) {
      ctx.moveTo(x, y);
    } else {
      ctx.lineTo(x, y);
    }
    
    // Draw points
    ctx.fillStyle = '#1FB8CD';
    ctx.beginPath();
    ctx.arc(x, y, 4, 0, 2 * Math.PI);
    ctx.fill();
  });
  
  ctx.stroke();
  
  // Add year labels
  ctx.fillStyle = '#666';
  ctx.font = '12px Arial';
  ctx.textAlign = 'center';
  years.forEach((year, index) => {
    const x = padding + (index / (years.length - 1)) * chartWidth;
    ctx.fillText(year, x, canvas.height - 10);
  });
}

function createTopMultas() {
  const topMultas = [...multasData.multas]
    .sort((a, b) => b.valor_usd - a.valor_usd)
    .slice(0, 5);
  
  const container = document.getElementById('top-multas-list');
  container.innerHTML = '';
  
  topMultas.forEach((multa, index) => {
    const item = document.createElement('div');
    item.className = 'top-item';
    item.innerHTML = `
      <div class="top-item-info">
        <div class="top-item-title">${multa.empresa} - ${multa.pais}</div>
        <div class="top-item-meta">${formatDate(multa.data)}</div>
      </div>
      <div class="top-item-value">${formatCurrency(multa.valor_usd)}</div>
    `;
    container.appendChild(item);
  });
}

function createEmpresasStats() {
  const empresasData = {};
  multasData.multas.forEach(multa => {
    if (!empresasData[multa.empresa]) {
      empresasData[multa.empresa] = { total: 0, quantidade: 0 };
    }
    empresasData[multa.empresa].total += multa.valor_usd;
    empresasData[multa.empresa].quantidade++;
  });
  
  const container = document.getElementById('empresas-stats-list');
  container.innerHTML = '';
  
  Object.entries(empresasData)
    .sort(([,a], [,b]) => b.total - a.total)
    .forEach(([empresa, data]) => {
      const item = document.createElement('div');
      item.className = 'stats-item';
      item.innerHTML = `
        <div class="stats-item-info">
          <div class="stats-item-title">${empresa}</div>
          <div class="stats-item-meta">${data.quantidade} multas</div>
        </div>
        <div class="stats-item-value">${formatCurrency(data.total)}</div>
      `;
      container.appendChild(item);
    });
}

// Event listeners
filterPais.addEventListener('change', applyFilters);
filterEmpresa.addEventListener('change', applyFilters);
filterAnoInicio.addEventListener('input', applyFilters);
filterAnoFim.addEventListener('input', applyFilters);
filterBusca.addEventListener('input', applyFilters);
btnLimparFiltros.addEventListener('click', clearFilters);
btnOrdenacao.addEventListener('click', toggleSort);

btnFecharDetalhes.addEventListener('click', () => {
  document.querySelectorAll('.timeline-item.selected').forEach(item => {
    item.classList.remove('selected');
  });
  panelContent.innerHTML = `
    <div class="empty-state">
      <p>Clique em um evento na timeline para ver os detalhes</p>
    </div>
  `;
});

// Initialize application
document.addEventListener('DOMContentLoaded', () => {
  initializeFilters();
  applyFilters();
  
  // Create charts
  setTimeout(() => {
    createPieChart();
    createTemporalChart();
    createTopMultas();
    createEmpresasStats();
  }, 100);
});