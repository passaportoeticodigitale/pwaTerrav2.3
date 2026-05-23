(function () {

  /* =============================================
     TERRA v2.3 – Avviso Sito in Costruzione
     Da includere in tutte le pagine del sito.
     Inserire prima della chiusura </body>:
       <script src="wip-banner.js"></script>
     ============================================= */

  var CSS = [
    '#topbar-wip{width:100%;background:#c0dd97;color:#27500a;',
    'border-bottom:1px solid #97c459;',
    'display:-webkit-box;display:-ms-flexbox;display:flex;',
    '-webkit-box-align:center;-ms-flex-align:center;align-items:center;',
    '-webkit-box-pack:center;-ms-flex-pack:center;justify-content:center;',
    'padding:9px 50px;gap:12px;',
    'font-family:"Atkinson Hyperlegible",Verdana,Arial,sans-serif;',
    'font-size:13px;font-weight:400;line-height:1.4;',
    'box-sizing:border-box;text-align:center;position:relative;}',
    '#topbar-wip strong{font-weight:700;}',
    '#topbar-wip-close{background:none;border:none;cursor:pointer;',
    'font-size:20px;font-weight:700;line-height:1;color:#27500a;padding:0;',
    'position:absolute;right:16px;top:50%;',
    '-webkit-transform:translateY(-50%);-ms-transform:translateY(-50%);',
    'transform:translateY(-50%);',
    'font-family:"Atkinson Hyperlegible",Verdana,Arial,sans-serif;}',
    '@media screen and (max-width:600px){',
    '#topbar-wip{padding:9px 40px 9px 20px;font-size:12px;}}'
  ].join('');

  var style = document.createElement('style');
  style.textContent = CSS;
  document.head.appendChild(style);

  var topbar = document.createElement('div');
  topbar.id = 'topbar-wip';
  topbar.setAttribute('role', 'status');
  topbar.setAttribute('aria-live', 'polite');
  topbar.innerHTML =
    '<span>\uD83C\uDF31 <strong>Sito in costruzione</strong> \u2014 alcune sezioni potrebbero non essere ancora disponibili. Grazie.</span>' +
    '<button id="topbar-wip-close" aria-label="Chiudi avviso sito in costruzione">\u00D7</button>';
  document.body.insertBefore(topbar, document.body.firstChild);

  document.getElementById('topbar-wip-close').addEventListener('click', function () {
    topbar.style.display = 'none';
  });

})();
