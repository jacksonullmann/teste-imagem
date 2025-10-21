// app.js
// Versão final: sliders 0-4 com mensagens motivacionais e acionáveis por faixa de percentual
// Salve este arquivo em UTF-8 sem BOM

const instagramItems = [
  { id:'ig-visual', question:'O visual da imagem salta no feed (alto contraste, cor ou composição)?', why:'Porque é importante: imagens que se destacam aumentam tempo de visualização e engajamento, ampliando alcance orgânico.', source:'Instagram Business' },
  { id:'ig-rosto', question:'A foto inclui pessoas ou rostos quando aplicável?', why:'Porque é importante: rostos geram empatia e ajudam o seguidor a se imaginar usando o produto; 64% dos vendedores relatam que usar rostos/modelos cria conexão emocional com o consumidor.', source:'Photoroom (pesquisa NV / Photoroom 2025)' },
  { id:'ig-paleta', question:'A paleta de cores e o tratamento (filtros, contraste) são consistentes com a identidade da marca?', why:'Porque é importante: consistência visual aumenta reconhecimento e recall da marca, fortalecendo percepção de valor.', source:'Adobe (insights sobre branding)' },
  { id:'ig-iluminacao', question:'A iluminação reproduz fielmente as cores do produto e a edição é sutil?', why:'Porque é importante: fidelidade de cor reduz frustrações pós‑compra e devoluções; 47% das marcas apontam preferência por luz natural por valorizar cores e texturas.', source:'Photoroom (pesquisa NV / Photoroom 2025)' },
  { id:'ig-area', question:'Existe área limpa na imagem para sobreposição de texto/CTA quando necessário?', why:'Porque é importante: áreas limpas facilitam a inclusão de CTA ou preço sem poluir a imagem, aumentando cliques e conversões em anúncios.', source:'Facebook Ads Guide' },
  { id:'ig-formato', question:'O formato usado é adequado ao objetivo (post único, carrossel, Reels)?', why:'Porque é importante: Reels e vídeos costumam gerar maior alcance e engajamento; carrosséis aumentam tempo de interação quando usados para detalhar o produto.', source:'Instagram Business' },
  { id:'ig-thumbnail', question:'A miniatura (thumbnail) comunica o benefício principal em 1-2 segundos?', why:'Porque é importante: thumbnails claros elevam CTR e atraem mais visualizações.', source:'HubSpot' },
  { id:'ig-testes', question:'Você testa variações visuais e reaproveita conteúdos que performam melhor?', why:'Porque é importante: testes e iteração em criativos aumentam ROI; ferramentas de A/B testing mostram que iterar criativos melhora performance de campanhas.', source:'Optimizely' }
];

const ecommerceItems = [
  { id:'ec-fundo', question:'O produto tem imagem com fundo neutro e padronizado (ex.: branco)?', why:'Porque é importante: fundo neutro destaca o produto, facilita comparação entre SKUs e transmite profissionalismo; 39% dos profissionais apontam fundo branco como mais eficaz para conversão.', source:'Photoroom (pesquisa NV / Photoroom 2025)' },
  { id:'ec-multiplas', question:'Existem 3-5 (ou mais) imagens por produto cobrindo ângulos diferentes?', why:'Porque é importante: múltiplas imagens reduzem incerteza e aumentam confiança do comprador; 58% dos vendedores usam entre 3-5 fotos por listagem para melhorar transparência e conversão.', source:'Photoroom (pesquisa NV / Photoroom 2025)' },
  { id:'ec-resolucao', question:'As imagens têm alta resolução e suportam zoom sem perda de detalhe?', why:'Porque é importante: permitir inspeção de textura e acabamento aumenta confiança e reduz devoluções.', source:'Shopify Help Center' },
  { id:'ec-closeups', question:'Há close‑ups que mostram detalhes técnicos (costura, fecho, textura) e indicação de escala (medidas, modelo)?', why:'Porque é importante: close‑ups e escala eliminam dúvidas sobre tamanho e acabamento, reduzindo devoluções.', source:'Baymard Institute' },
  { id:'ec-consistencia', question:'O catálogo mantém consistência visual (mesma iluminação, angulação e proporção)?', why:'Porque é importante: padronização facilita comparação entre SKUs e transmite credibilidade profissional.', source:'Nielsen Norman Group' },
  { id:'ec-estudio', question:'Existem fotos de estúdio para clareza e imagens lifestyle para contextualizar uso?', why:'Porque é importante: estúdio traz clareza técnica; lifestyle cria aspiração — combinar ambos tende a aumentar conversão e percepção de valor.', source:'BigCommerce / Shopify' },
  { id:'ec-atualizacao', question:'As imagens são atualizadas periodicamente e submetidas a A/B tests quando possível?', why:'Porque é importante: renovar imagens a cada 3–6 meses mantém o catálogo atual; testes A/B de imagens já mostraram aumentos significativos em casos de estudo.', source:'Photoroom / VWO' },
  { id:'ec-carregamento', question:'O tempo de carregamento das imagens está otimizado para dispositivos móveis?', why:'Porque é importante: imagens pesadas degradam experiência mobile e aumentam abandono; otimização melhora velocidade e conversão.', source:'Google PageSpeed Insights' },
  { id:'ec-duvidas', question:'As imagens respondem às principais dúvidas do cliente sem que ele precise ler a descrição?', why:'Porque é importante: reduzir atrito acelera decisão de compra; consumidores preferem informações visuais claras e objetivas.', source:'Baymard Institute' },
  { id:'ec-variacoes', question:'Todas as variações de cor/tamanho estão fotografadas com o mesmo padrão?', why:'Porque é importante: mostrar todas as opções com o mesmo padrão evita discrepância entre expectativa e produto recebido, reduzindo devoluções.', source:'Amazon Seller Central' },
  { id:'ec-requisitos', question:'As imagens cumprem requisitos e boas práticas das plataformas e anúncios (cropping seguro, dimensões, fundo)?', why:'Porque é importante: seguir diretrizes evita rejeição de listagens e anúncios e garante melhor exibição e alcance.', source:'Facebook Ads Guide / Amazon Seller Central' }
];

const extrasItems = [
  { id:'ex-responde', question:'A imagem responde às principais dúvidas do cliente sem que ele precise ler a descrição?', why:'Porque é importante: consumidores tomam decisões rápidas; imagens que respondem dúvidas reduzem abandono e aumentam conversão.', source:'Baymard Institute' },
  { id:'ex-validation', question:'Você validou com clientes reais quais detalhes eles mais querem ver?', why:'Porque é importante: feedback direto prioriza produção visual com maior impacto nas conversões.', source:'Nielsen Norman Group' },
  { id:'ex-anuncios', question:'As imagens estão preparadas para anúncios (áreas limpas, CTA, variações de crop)?', why:'Porque é importante: criativos prontos evitam cortes indesejados e melhoram performance das campanhas.', source:'Facebook Ads Guide' },
  { id:'ex-metricas', question:'Você acompanha métricas visuais (CTR de thumbnails, taxa de cliques em carrossel, conversão por imagem)?', why:'Porque é importante: mensurar desempenho permite priorizar o que funciona e otimizar investimento em produção.', source:'Google Analytics' }
];

const instagramContainer = document.getElementById('instagram-questions');
const ecommerceContainer = document.getElementById('ecommerce-questions');
const extrasContainer = document.getElementById('extras-questions');
const totalScoreEl = document.getElementById('total-score');
const maxScoreEl = document.getElementById('max-score');
const percentScoreEl = document.getElementById('percent-score');
const scoreBox = document.getElementById('score-box');
const interpretationEl = document.getElementById('interpretation');

// Substitua sua createQuestionNode por esta versão
function createQuestionNode(item){
  const row = document.createElement('div');
  row.className = 'q-row';
  row.id = item.id;

  const top = document.createElement('div');
  top.className = 'q-top';

  const left = document.createElement('div');
  left.className = 'q-left';
  left.innerHTML = `<div class="q-title">${item.question}</div>
    <div class="q-explain">${item.why}</div>
    <div style="margin-top:8px;color:var(--muted);font-size:0.9rem">Fonte: ${item.source}</div>`;

  const right = document.createElement('div');
  right.className = 'q-right'; // sem largura fixa, CSS controla

  // range wrapper com ticks, labels e value (0..4)
  const wrap = document.createElement('div');
  wrap.className = 'range-wrap';

  const input = document.createElement('input');
  input.type = 'range';
  input.min = 0;
  input.max = 4;
  input.step = 1;
  input.value = 0;
  input.classList.add('range-control');
  input.setAttribute('aria-label', item.question);

  const trackMarks = document.createElement('div');
  trackMarks.className = 'range-track-marks';
  // cria 5 ticks
  for (let i = 0; i < 5; i++){
    const t = document.createElement('span');
    t.className = 'tick';
    trackMarks.appendChild(t);
  }

  const labelsDiv = document.createElement('div');
  labelsDiv.className = 'range-labels';
  // cria labels 0..4
  for (let i = 0; i <= 4; i++){
    const s = document.createElement('span');
    s.textContent = i.toString();
    labelsDiv.appendChild(s);
  }

  const val = document.createElement('div');
  val.className = 'range-value';
  val.setAttribute('aria-live', 'polite');
  val.textContent = '0';

  // monta a estrutura
  wrap.appendChild(input);
  wrap.appendChild(trackMarks);
  wrap.appendChild(labelsDiv);
  wrap.appendChild(val);

  right.appendChild(wrap);

  top.appendChild(left);
  top.appendChild(right);
  row.appendChild(top);

  // evento para atualizar valor e disparar cálculo
  input.addEventListener('input', function(e){
    val.textContent = e.target.value;
    calculateTotals();
  });

  // conecta destaque das labels e sincroniza valor (função definida abaixo)
  enhanceRange(input);

  return row;
}

// Função de apoio: destaca label ativa e sincroniza valor (chame enhanceRange após criar input)
function enhanceRange(rangeEl){
  if(!rangeEl) return;
  const wrap = rangeEl.closest('.range-wrap');
  if(!wrap) return;
  const labels = Array.from(wrap.querySelectorAll('.range-labels span'));
  const valueBox = wrap.querySelector('.range-value');

  function update(){
    const v = Number(rangeEl.value);
    if(valueBox) valueBox.textContent = v;
    labels.forEach((s, i) => {
      s.classList.toggle('active', i === v);
    });
  }

  // inicial
  update();
  // eventos
  rangeEl.addEventListener('input', update, { passive: true });
  rangeEl.addEventListener('change', update, { passive: true });
}


function mount(list, container){
  list.forEach(item => {
    container.appendChild(createQuestionNode(item));
  });
}

function calculateTotals(){
  const ranges = document.querySelectorAll('.q-row input[type="range"]');
  let total = 0;
  let max = 0;
  ranges.forEach(r => {
    total += parseInt(r.value, 10);
    max += parseInt(r.max, 10);
  });
  totalScoreEl.textContent = total;
  maxScoreEl.textContent = max;
  const percent = max === 0 ? 0 : Math.round((total / max) * 100);
  percentScoreEl.textContent = percent;
  scoreBox.textContent = percent + '%';

  scoreBox.classList.remove('good','mid','poor');
  if(percent >= 85) scoreBox.classList.add('good');
  else if(percent >= 65) scoreBox.classList.add('mid');
  else scoreBox.classList.add('poor');

  renderInterpretation(percent, total, max);
}

function renderInterpretation(percent, total, max){
  // Mensagens motivacionais e acionáveis por faixa de percentual
  let header = '';
  let actions = [];
  let incentive = '';

  if(percent >= 90){
    header = `Excelente — sua produção visual está em nível de referência.`;
    actions = [
      'Invista em conteúdo premium: editoriais, vídeos curtos e fotografia estilizada.',
      'Documente playbooks e presets para replicar a qualidade em escala.',
      'Monitore métricas por criativo e aloque orçamento para o que entrega maior ROAS.'
    ];
    incentive = 'Parabéns — mantenha a rotina de testes e transforme ganhos em vantagem competitiva.';
  } else if(percent >= 80){
    header = `Muito bom — imagens sólidas; foco em otimização contínua.`;
    actions = [
      'Planeje experimentos de alto impacto (mini‑campanhas A/B de thumbnails e criativos).',
      'Automatize presets e templates para reduzir variação entre peças.',
      'Analise CTR e conversão por criativo para priorizar investimentos.'
    ];
    incentive = 'Você está perto da excelência — pequenas melhorias estrategicamente aplicadas trarão grandes resultados.';
  } else if(percent >= 60){
    header = `Bom — boa base, vale escalar e padronizar processos.`;
    actions = [
      'Crie templates e presets para garantir consistência entre produtos e posts.',
      'Reaproveite variações vencedoras em anúncios e publique testes controlados.',
      'Invista em otimização técnica: compressão adequada e imagens com zoom de alta resolução.'
    ];
    incentive = 'Você tem tração — priorize processos e testes que ampliem resultados sem aumentar muito custo.';
  } else if(percent >= 40){
    header = `Regular — base existente, mas pontos importantes precisam atenção.`;
    actions = [
      'Refaça imagens de maior prioridade: iluminação, ângulos e close‑ups que respondam dúvidas.',
      'Otimize miniaturas e thumbnails; execute 1 teste A/B de thumbnail por produto.',
      'Garanta que variações de cor/tamanho estejam fotografadas de forma padronizada.'
    ];
    incentive = 'Comece com 1 ou 2 mudanças por semana; ganhos rápidos em iluminação e thumbnails costumam melhorar conversão visível.';
  } else if(percent >= 20){
    header = `Em início de melhoria — há boas intenções, falta consistência.`;
    actions = [
      'Escolha 3 produtos prioritários e refaça suas fotos (fundo neutro, modelo/uso, close).',
      'Padronize tratamento de cor e crie uma checklist de publicação.',
      'Valide com clientes quais detalhes mais influenciam a compra e direcione produção para esses pontos.'
    ];
    incentive = 'Pequenas iterações consistentes trazem resultados rápidos — foque em processos repetíveis.';
  } else {
    header = `Precisa melhorar — reconstrução recomendada para ver impacto real.`;
    actions = [
      'Revise iluminação e capture múltiplos ângulos (estúdio + lifestyle).',
      'Inclua close‑ups com escala (medidas/modelo) e imagens que respondam dúvidas sem ler a descrição.',
      'Padronize fundo, enquadramento e crie 1 sessão fotográfica por SKU prioritário.'
    ];
    incentive = 'Comece pelo básico: corrija 1 problema crítico esta semana e acompanhe a diferença na confiança do cliente.';
  }

  // Monta o HTML de interpretação com pontuação compacta
  let html = `<strong>${header}</strong>`;
  //const compactScore = `${total} / ${max} — ${percent}%`;
  //html += `<div class="summary" style="margin-top:8px"><strong>Pontuação:</strong> ${compactScore}.</div>`;
  html += `<div style="margin-top:25px"><strong>Próximas ações recomendadas:</strong><ul style="margin:8px 0 0 18px">`;
  actions.forEach(a => { html += `<li>${a}</li>`; });
  html += `</ul></div>`;
  html += `<div style="margin-top:8px;color:var(--muted)"><em>${incentive}</em></div>`;

  interpretationEl.innerHTML = html;
}

function resetAll(){
  document.querySelectorAll('.q-row input[type="range"]').forEach(r => {
    r.value = 0;
    const parent = r.closest('.q-row');
    const val = parent.querySelector('.range-value');
    if(val) val.textContent = '0';
  });
  calculateTotals();
}

// mount
mount(instagramItems, instagramContainer);
mount(ecommerceItems, ecommerceContainer);
mount(extrasItems, extrasContainer);

// initial calc
calculateTotals();

// actions
document.getElementById('reset-btn').addEventListener('click', resetAll);
document.getElementById('print-btn').addEventListener('click', () => {
  window.print();
});
