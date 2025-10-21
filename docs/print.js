// print.js - otimizações para impressão: oculta controles e exibe resultado limpo
(function(){
  function beforePrint(){
    document.querySelectorAll('.btn').forEach(b => b.style.display = 'none');
    document.querySelectorAll('input[type="range"]').forEach(r => r.style.display = 'none');
    document.querySelectorAll('.pdf-progress').forEach(p => p.style.display = 'none');
  }
  function afterPrint(){
    document.querySelectorAll('.btn').forEach(b => b.style.display = '');
    document.querySelectorAll('input[type="range"]').forEach(r => r.style.display = '');
    document.querySelectorAll('.pdf-progress').forEach(p => p.style.display = '');
  }

  if (window.matchMedia) {
    const mql = window.matchMedia('print');
    mql.addListener(function(e){
      if(e.matches) beforePrint();
      else afterPrint();
    });
  }

  window.onbeforeprint = beforePrint;
  window.onafterprint = afterPrint;
})();
