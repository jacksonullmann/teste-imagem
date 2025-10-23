(function (global) {
  'use strict';

  // Tradução dos IDs do checklist → chaves do GuidanceTexts
  const idMap = {
    // Instagram
    'ig-visual': 'visual_feed',
    'ig-rosto': 'rostos',
    'ig-paleta': 'paleta',
    'ig-iluminacao': 'fidelidade',
    'ig-area': 'area_cta',
    'ig-formato': 'formato',
    'ig-thumbnail': 'thumbnail',
    'ig-testes': 'testes',

    // E-commerce
    'ec-fundo': 'fundo',
    'ec-multiplas': 'multiplos',
    'ec-resolucao': 'resolucao',
    'ec-closeups': 'closeup',
    'ec-consistencia': 'consistencia',
    'ec-estudio': 'lifestyle',
    'ec-atualizacao': 'atualizacao',
    'ec-carregamento': 'carregamento',
    'ec-duvidas': 'duvidas',
    'ec-variacoes': 'variacoes',
    'ec-requisitos': 'requisitos',

    // Extras
    'ex-responde': 'extras_duvidas',
    'ex-validation': 'validacao',
    'ex-anuncios': 'anuncios',
    'ex-metricas': 'metricas'
  };

  // --- Gera os blocos de diagnóstico ---
  function gerarBlocosDeDiagnostico(dados) {
    return dados.map(item => {
      const key = idMap[item.id] || item.id;
      const g = GuidanceTexts[key] || {};
      const level = item.score <= 1 ? 'precisa melhorar' :
                    item.score <= 3 ? 'está no caminho' : 'ok';
      const pillClass = level === 'precisa melhorar' ? 'pill low' :
                        level === 'está no caminho' ? 'pill mid' : 'pill ok';

      return `
        <div class="item">
          <div class="item-header">
            <div class="q-title">${g.title || key}</div>
            <div class="meta-right">
              <div class="${pillClass}">${level}</div>
              <div class="score-badge">${item.score}</div>
            </div>
          </div>
          <div class="item-desc">
            <dl>
              <div class="row">
                <div class="label">Por que é importante</div>
                <div class="value">${g.why || ''}</div>
              </div>
              <div class="row">
                <div class="label">Sugestão prática</div>
                <div class="value">${g.suggestion || ''}</div>
              </div>
              ${g.sources ? `
              <div class="row">
                <div class="label">Fonte</div>
                <div class="value">${g.sources}</div>
              </div>` : ''}
            </dl>
          </div>
        </div>
      `;
    }).join('\n');
  }

  // --- Gera o HTML completo do relatório ---
  function extrairHtmlParaEnvio(opts) {
    opts = opts || {};
    const user = opts.user || 'Usuário';
    const project = opts.project || 'Projeto';

    const respostas = (typeof window.getUserAnswers === 'function')
      ? window.getUserAnswers()
      : [];

    const itensHtml = gerarBlocosDeDiagnostico(respostas);

    const totalPoints = respostas.reduce((acc, it) => acc + (Number(it.score) || 0), 0);
    const maxPoints = respostas.length * 4;
    const percent = maxPoints ? Math.round((totalPoints / maxPoints) * 100) : 0;

    return `
      <!doctype html>
      <html lang="pt-BR">
      <head>
        <meta charset="utf-8">
        <title>Relatório — ${project}</title>
        <style>
         :root {
  --page-width:794px; --accent:#0b63d6; --muted:#6b7785;
  --card-bg:#ffffff; --page-bg:#f7f9fb; --text:#091216;
  --label-bg:#f1f6fb; --pill-ok:#e6f4ea; --pill-mid:#fff5ea; --pill-low:#fdecea;
}
html,body {
  margin:0;padding:0;background:var(--page-bg);
  font-family:Inter, "Helvetica Neue", Arial, sans-serif;
  color:var(--text); -webkit-print-color-adjust:exact; print-color-adjust:exact;
}
.pdf-wrap { width:var(--page-width);max-width:100%;margin:16px auto;padding:16px 18px 30px;box-sizing:border-box; }
.pdf-wrap .report-header{ margin-bottom:12px; }
.pdf-wrap .report-title{ font-size:20px;font-weight:800;color:var(--text);margin-bottom:4px; }
.pdf-wrap .report-sub{ font-size:12px;color:var(--muted);margin-bottom:10px; }
.pdf-wrap .report-summary{ margin-bottom:10px;font-size:13px;color:var(--muted);display:flex;gap:12px;flex-wrap:wrap; }
.pdf-wrap .items{ display:block; }
.pdf-wrap .item{ background:var(--card-bg); border-radius:10px; padding:10px;
       box-shadow:0 4px 14px rgba(10,20,30,0.04); margin-bottom:8px;
       page-break-inside: avoid; border:1px solid rgba(10,20,30,0.04); }
.pdf-wrap .item-header{ display:flex; align-items:flex-start; gap:12px; margin-bottom:8px; }
.pdf-wrap .q-title{ flex:1 1 auto; font-weight:700; font-size:15px; line-height:1.18; color:var(--text); }
.pdf-wrap .meta-right{ display:flex; align-items:center; gap:8px; }
.pdf-wrap .pill{ font-size:12px; padding:6px 8px; border-radius:999px; font-weight:600; min-width:86px; text-align:center; }
.pdf-wrap .pill.low{ background:var(--pill-low); color:#8a2b1b; }
.pdf-wrap .pill.mid{ background:var(--pill-mid); color:#8a5a1b; }
.pdf-wrap .pill.ok { background:var(--pill-ok);  color:#21693a; }
.pdf-wrap .score-badge{ font-weight:800; background:#fff; border-radius:6px; padding:6px 10px; font-size:13px; border:1px solid rgba(0,0,0,0.04); }
.pdf-wrap .item-desc{ font-size:13px; line-height:1.36; }
.pdf-wrap .item-desc .row{ display:flex; gap:12px; align-items:flex-start; margin-bottom:8px; }
.pdf-wrap .item-desc .label{ flex:0 0 140px; background:var(--label-bg); padding:6px 8px; border-radius:6px; font-weight:700; color:var(--accent); font-size:13px; }
.pdf-wrap .item-desc .value{ flex:1 1 auto; color:#122; font-size:13px; }
.pdf-wrap .report-footer{ margin-top:14px;border-top:1px solid rgba(6,18,28,0.06);padding-top:10px;color:var(--muted);font-size:12px;text-align:right; }

        </style>
      </head>
      <body>
        <div class="pdf-wrap">
          <div class="report-header">
            <div class="report-title">Diagnóstico Visual — ${project}</div>
            <div class="report-sub">Relatório gerado por ${user}</div>
          </div>
          <div class="report-summary">
            <strong>Total de pontos:</strong> ${totalPoints} / ${maxPoints} —
            <strong>Percentual:</strong> ${percent}%
          </div>
          <div class="items">${itensHtml}</div>
          <div class="report-footer">Gerado automaticamente</div>
        </div>
      </body>
      </html>
    `;
  }

  if (!global.PrintReport) global.PrintReport = {};
  global.PrintReport.extrairHtmlParaEnvio = extrairHtmlParaEnvio;

})(window);
