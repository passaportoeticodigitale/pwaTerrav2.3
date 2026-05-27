(function () {

  /* =============================================
     TERRA v2.3 – Accessibilità
     Da includere in tutte le pagine del sito.
     Inserire prima della chiusura </body>:
       <script src="accessibilita.js"></script>
     ============================================= */

  var CSS = [
    /* SKIP TO CONTENT */
    '#skip-to-content{position:absolute;top:-100px;left:0;',
    'background:#2d4121;color:#f5f0e8;',
    'padding:10px 24px;',
    'font-family:"Atkinson Hyperlegible",Verdana,Arial,sans-serif;',
    'font-size:13px;font-weight:700;text-transform:uppercase;letter-spacing:1px;',
    'text-decoration:none;z-index:99999;',
    '-webkit-transition:top 0.2s;-o-transition:top 0.2s;transition:top 0.2s;}',
    '#skip-to-content:focus{top:0;}',

    /* FOCUS VISIBILE solo con tastiera - mai con mouse */
    'a:focus-visible{outline:4px solid #2d4121!important;outline-offset:4px!important;border-radius:2px!important;}',
    'button:focus-visible{outline:4px solid #2d4121!important;outline-offset:4px!important;border-radius:2px!important;}',
    'input:focus-visible,select:focus-visible,textarea:focus-visible{outline:4px solid #2d4121!important;outline-offset:4px!important;}',

    /* FOCUS bottoni pieni btn-green */
    '.btn-green:focus-visible{outline:4px solid #1a2710!important;outline-offset:4px!important;}',

    /* rimuove outline al click del mouse */
    'a:focus:not(:focus-visible){outline:none!important;}',
    'button:focus:not(:focus-visible){outline:none!important;}'
  ].join('');

  var style = document.createElement('style');
  style.textContent = CSS;
  document.head.appendChild(style);

  /* ---- SKIP TO CONTENT ---- */
  var skip = document.createElement('a');
  skip.id = 'skip-to-content';
  skip.href = '#contenuto-principale';
  skip.textContent = 'Salta il menu e vai al contenuto';
  document.body.insertBefore(skip, document.body.firstChild);

  var main = document.querySelector('main');
  if (main && !main.id) {
    main.id = 'contenuto-principale';
  }

})();
