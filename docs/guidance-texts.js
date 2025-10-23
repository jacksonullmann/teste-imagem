// js/guidance-texts.js
(function (global) {
  'use strict';

  // Textos em linguagem simples, voltados a usuários que fotografam produtos com celular.
  // Quando houver fonte conhecida, ela é indicada no campo sources.
  const GuidanceTexts = {
  // =========================
  // 📸 INSTAGRAM (8 itens)
  // =========================
  visual_feed: {
    title: 'Impacto visual no feed',
    why: 'Imagens que saltam no feed aumentam CTR e engajamento, pois competem com centenas de outros estímulos visuais.',
    suggestion: 'Use contraste forte, cores vibrantes ou composição centralizada. Teste thumbnails em 1:1 e valide em visualização reduzida.',
    sources: 'Guias de criativos para Instagram Ads; estudos de CTR em redes sociais'
  },
  rostos: {
    title: 'Uso de pessoas/rostos',
    why: 'Rostos geram empatia e ajudam o seguidor a se imaginar usando o produto, aumentando conexão emocional.',
    suggestion: 'Inclua ao menos uma foto com modelo por SKU prioritário; informe altura e tamanho usado para referência.',
    sources: 'Guias de fotografia de moda; estudos de conversão com lifestyle'
  },
  paleta: {
    title: 'Consistência de paleta e filtros',
    why: 'Consistência visual reforça identidade da marca e transmite profissionalismo.',
    suggestion: 'Defina presets de edição e paleta fixa; evite filtros exagerados e mantenha padrão de saturação e contraste.',
    sources: 'Brand books e guias de identidade visual'
  },
  fidelidade: {
    title: 'Fidelidade de cor',
    why: 'Cores diferentes entre foto e produto geram devoluções e insatisfação do cliente.',
    suggestion: 'Fotografe perto de janela em dia nublado ou use difusor; utilize cartão branco para balanço de branco.',
    sources: 'Recomendações de marketplaces; guias de fotografia de produto'
  },
  area_cta: {
    title: 'Área limpa para CTA',
    why: 'Áreas limpas permitem aplicar texto/CTA sem comprometer legibilidade ou esconder o produto.',
    suggestion: 'Reserve espaço lateral ou superior com fundo neutro; evite sobreposição em áreas com textura.',
    sources: 'Guias de anúncios para Instagram; boas práticas de zona segura'
  },
  formato: {
    title: 'Formato adequado ao objetivo',
    why: 'Cada formato (feed, carrossel, Reels) tem regras de corte e exibição; usar errado reduz impacto.',
    suggestion: 'Use 1:1 para feed, 9:16 para Reels/Stories; valide safe area antes de publicar.',
    sources: 'Especificações técnicas do Instagram'
  },
  thumbnail: {
    title: 'Thumbnail clara',
    why: 'A miniatura é o primeiro ponto de contato; se não comunicar o benefício, o usuário ignora.',
    suggestion: 'Mostre o diferencial visualmente; evite excesso de texto; valide em tamanho reduzido.',
    sources: 'Estudos de CTR em thumbnails'
  },
  testes: {
    title: 'Testes A/B visuais',
    why: 'Testes A/B ajudam a identificar criativos vencedores e escalar performance.',
    suggestion: 'Teste variações de cor, modelo, fundo e composição; reaproveite os que geram mais cliques.',
    sources: 'Práticas de otimização criativa em Meta Ads'
  },

  // =========================
  // 🛒 E-COMMERCE (11 itens)
  // =========================
  fundo: {
    title: 'Fundo neutro e padronizado',
    why: 'Fundo neutro destaca o produto, facilita comparação e transmite profissionalismo.',
    suggestion: 'Use papel branco/cartolina; mantenha distância do fundo e evite objetos de cena.',
    sources: 'Recomendações de Amazon e Mercado Livre'
  },
  multiplos: {
    title: 'Múltiplos ângulos',
    why: 'Ângulos diferentes ajudam o cliente a entender forma e proporção, reduzindo dúvidas.',
    suggestion: 'Fotografe frente, lateral, traseira e um close; para roupas, inclua modelo.',
    sources: 'Guias de apresentação de produto'
  },
  resolucao: {
    title: 'Alta resolução e zoom',
    why: 'Imagens de alta resolução transmitem profissionalismo e permitem zoom em detalhes, aumentando confiança.',
    suggestion: 'Use câmera de 12MP+; salve em JPEG de alta qualidade; otimize para web sem perder nitidez.',
    sources: 'E-commerce Brasil: impacto da qualidade visual'
  },
  closeup: {
    title: 'Close-ups técnicos e escala',
    why: 'Detalhes técnicos ajudam a avaliar qualidade e reduzem devoluções.',
    suggestion: 'Inclua close-up de costura, textura e etiqueta; mostre escala com régua ou modelo.',
    sources: 'Guias de moda e e-commerce técnico'
  },
  consistencia: {
    title: 'Consistência de catálogo',
    why: 'Consistência facilita navegação e comparação; evita sensação de amadorismo.',
    suggestion: 'Use setup fixo de luz, fundo e distância; documente processo para replicar.',
    sources: 'Brand books e guias de catálogo'
  },
  lifestyle: {
    title: 'Fotos de estúdio + lifestyle',
    why: 'Fotos de estúdio mostram clareza; lifestyle ajuda o cliente a imaginar uso.',
    suggestion: 'Combine fundo branco com fotos em ambiente real; use modelos e cenários representativos.',
    sources: 'Estúdios especializados em e-commerce'
  },
  atualizacao: {
    title: 'Atualização e A/B tests',
    why: 'Atualizações mantêm relevância; testes permitem otimizar conversão.',
    suggestion: 'Revise imagens a cada 6 meses; teste variações de fundo, ângulo e modelo.',
    sources: 'Práticas de CRO e otimização visual'
  },
  carregamento: {
    title: 'Otimização para mobile',
    why: 'Imagens pesadas prejudicam experiência mobile e aumentam rejeição.',
    suggestion: 'Comprima para <500KB; use WebP; habilite lazy loading.',
    sources: 'Guias de SEO e performance web'
  },
  duvidas: {
    title: 'Imagens respondem dúvidas',
    why: 'Imagens claras reduzem dependência de texto e aceleram decisão.',
    suggestion: 'Inclua medidas, composição e uso visual; fotografe etiqueta e embalagem.',
    sources: 'Estudos de UX em e-commerce'
  },
  variacoes: {
    title: 'Variações de cor/tamanho',
    why: 'Mostrar todas as variações evita dúvidas e aumenta conversão.',
    suggestion: 'Fotografe cada cor/tamanho com mesmo fundo, luz e ângulo.',
    sources: 'Práticas de catálogo e marketplaces'
  },
  requisitos: {
    title: 'Requisitos de plataformas',
    why: 'Imagens fora do padrão podem ser rejeitadas ou cortadas.',
    suggestion: 'Use dimensões recomendadas (ex.: 1024x1024px), fundo branco e margens seguras.',
    sources: 'Guias técnicos de marketplaces'
  },

  // =========================
  // 🚀 EXTRAS (4 itens)
  // =========================
  extras_duvidas: {
    title: 'Antecipar dúvidas',
    why: 'Imagens que antecipam dúvidas aceleram decisão e reduzem abandono.',
    suggestion: 'Inclua medidas, material, uso e escala visual; fotografe etiqueta e embalagem.',
    sources: 'Estudos de UX e comportamento de compra'
  },
  validacao: {
    title: 'Validação com clientes',
    why: 'Validar com clientes garante que as imagens mostram o que realmente importa para conversão.',
    suggestion: 'Use enquetes, entrevistas ou análise de cliques para entender o que destacar.',
    sources: 'Agência Rei: importância de fotos e descrições; GetCommerce: 63% priorizam qualidade visual'
  },
  anuncios: {
    title: 'Preparação para anúncios',
    why: 'Imagens otimizadas para anúncios aumentam CTR e evitam cortes.',
    suggestion: 'Crie versões com áreas limpas, CTAs e crops variados; valide em pré-visualização.',
    sources: 'Guias de anúncios e marketplaces'
  },
  metricas: {
    title: 'Acompanhamento de métricas visuais',
    why: 'Medir CTR, cliques em carrossel e conversão por imagem permite otimizar continuamente.',
    suggestion: 'Implemente tracking por criativo; compare CTR de thumbnails e ajuste produção.',
    sources: 'Estudos de CRO e analytics em e-commerce'
  }
};


  global.GuidanceTexts = GuidanceTexts;
})(window);
