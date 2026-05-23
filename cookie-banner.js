(function () {

  /* =============================================
     TERRA v2.3 – Cookie Banner
     Da includere in tutte le pagine del sito.
     Inserire prima della chiusura </body>:
       <script src="cookie-banner.js"></script>
     ============================================= */

  var CSS = [
    '#cookie-banner{position:fixed;bottom:0;left:0;right:0;background:#2d4121;color:#f5f0e8;',
    'padding:14px 40px;display:-webkit-box;display:-ms-flexbox;display:flex;',
    '-webkit-box-align:center;-ms-flex-align:center;align-items:center;',
    '-webkit-box-pack:justify;-ms-flex-pack:justify;justify-content:space-between;',
    'gap:20px;z-index:9999;font-family:"Atkinson Hyperlegible",Verdana,Arial,sans-serif;',
    'font-size:13px;line-height:1.6;box-sizing:border-box;}',
    '#cookie-banner a{color:#c0dd97;font-weight:700;text-decoration:underline;}',
    '.ck-btns{display:-webkit-box;display:-ms-flexbox;display:flex;gap:10px;',
    '-ms-flex-shrink:0;flex-shrink:0;}',
    '.ck-btn{padding:8px 20px;font-size:12px;font-weight:700;text-transform:uppercase;',
    'letter-spacing:1px;border:1.5px solid #f5f0e8;cursor:pointer;background:none;',
    'color:#f5f0e8;font-family:"Atkinson Hyperlegible",Verdana,Arial,sans-serif;',
    'white-space:nowrap;-webkit-appearance:none;appearance:none;}',
    '.ck-btn.filled{background:#f5f0e8;color:#2d4121;}',
    '#cookie-icon{position:fixed;bottom:20px;right:20px;width:44px;height:44px;',
    'background:#2d4121;color:#f5f0e8;border:none;cursor:pointer;font-size:22px;',
    'display:none;-webkit-box-align:center;-ms-flex-align:center;align-items:center;',
    '-webkit-box-pack:center;-ms-flex-pack:center;justify-content:center;',
    'z-index:9998;-webkit-transition:opacity 0.2s;-o-transition:opacity 0.2s;',
    'transition:opacity 0.2s;line-height:1;}',
    '#cookie-icon:hover{opacity:0.8;}',
    '@media screen and (max-width:600px){',
    '#cookie-banner{padding:14px 20px;',
    '-webkit-box-orient:vertical;-webkit-box-direction:normal;',
    '-ms-flex-direction:column;flex-direction:column;',
    '-webkit-box-align:start;-ms-flex-align:start;align-items:flex-start;}',
    '.ck-btns{width:100%;-webkit-box-pack:end;-ms-flex-pack:end;justify-content:flex-end;}}'
  ].join('');

  var style = document.createElement('style');
  style.textContent = CSS;
  document.head.appendChild(style);

  var icon = document.createElement('button');
  icon.id = 'cookie-icon';
  icon.setAttribute('aria-label', 'Riapri informativa cookie');
  icon.setAttribute('title', 'Informativa cookie');
  icon.textContent = '\uD83C\uDF6A';
  document.body.appendChild(icon);

  var banner = document.createElement('div');
  banner.id = 'cookie-banner';
  banner.setAttribute('role', 'dialog');
  banner.setAttribute('aria-label', 'Informativa cookie');
  banner.setAttribute('aria-describedby', 'ck-text');
  banner.innerHTML =
    '<p id="ck-text">Questo sito <strong>non utilizza cookie di tracciamento o profilazione</strong>. ' +
    'I link nella pagina <a href="sostieni.html">Sostieni</a> portano a siti esterni con proprie policy sui cookie. ' +
    '<a href="privacy.html">Leggi la Privacy Policy</a></p>' +
    '<div class="ck-btns">' +
    '<button class="ck-btn" id="ck-info">Maggiori info</button>' +
    '<button class="ck-btn filled" id="ck-ok">Ho capito</button>' +
    '</div>';
  document.body.appendChild(banner);

  function mostraIcona() {
    banner.style.display = 'none';
    icon.style.display = 'flex';
    try { localStorage.setItem('terra_cookie_ok', '1'); } catch (e) {}
  }

  function riapriBanner() {
    banner.style.display = 'flex';
    icon.style.display = 'none';
  }

  document.getElementById('ck-ok').addEventListener('click', mostraIcona);
  document.getElementById('ck-info').addEventListener('click', function () {
    window.location.href = 'privacy.html';
  });

  icon.addEventListener('click', riapriBanner);

  document.addEventListener('keydown', function (e) {
    if (e.key === 'Escape' && banner.style.display !== 'none') {
      mostraIcona();
    }
  });

  try {
    if (localStorage.getItem('terra_cookie_ok') === '1') {
      banner.style.display = 'none';
      icon.style.display = 'flex';
    }
  } catch (e) {}

})();
