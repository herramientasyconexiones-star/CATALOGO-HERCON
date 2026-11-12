/* ═══════════════════════════════════════════════════════════
   🎄 NAVIDAD – Capa decorativa para el Catálogo de Pedidos
   No modifica la lógica de la app. Para quitarla, elimina
   la línea <script src="navidad.js"></script> de tu HTML.
═══════════════════════════════════════════════════════════ */
(function () {
  'use strict';

  const css = `
  :root{
    --naranja:#c62828; --naranja-d:#8f1b1b;
    --verde:#1f8a43; --verde-d:#156b32; --verde-ll:#e6f6ec;
    --amarillo:#ffd54a;
  }
  header{ border-top:4px solid #c62828; background:linear-gradient(180deg,#1a1a1a,#211a1a); }
  .tabs-outer{ border-bottom-color:#ffd54a; }
  .brand-sub{ color:#ffd54a; }
  .brand-name::before{ content:'🎄 '; }
  .cart-btn{ box-shadow:0 3px 10px rgba(198,40,40,.45); }
  .cat-badge{ background:rgba(143,27,27,.85); }
  .card:hover{ border-color:#c62828; }
  .card.in-cart{ border-color:#1f8a43; box-shadow:0 0 0 2px rgba(31,138,67,.2), var(--shadow); }
  .add-btn:not(.added){ background:linear-gradient(135deg,#c62828,#e53935); }
  .add-btn:not(.added):hover{ background:#8f1b1b; }
  .drawer-head, .faq-head{ border-bottom-color:#ffd54a; }
  .drawer-title::after{ content:' 🎁'; }
  .toast{ border-left-color:#c62828; }
  .mascot-bubble{ border-color:#c62828; }
  .mascot-bubble::after{ border-top-color:#c62828; }

  /* Luces */
  .xmas-lights{
    position:absolute; left:0; right:0; top:100%; height:46px;
    display:flex; justify-content:space-around; align-items:flex-start;
    pointer-events:none; overflow:hidden; z-index:-1;
  }
  .xmas-lights::before{
    content:''; position:absolute; top:-10px; left:-2%; right:-2%; height:22px;
    border-bottom:3px solid #1a1a1a; border-radius:0 0 50% 50% / 0 0 100% 100%;
  }
  .xmas-lights span{
    display:block; width:16px; height:24px; margin-top:8px;
    border-radius:50% 50% 50% 50% / 35% 35% 65% 65%;
    border:1.5px solid rgba(255,255,255,.55);
    animation:xtwinkle 1.4s ease-in-out infinite;
  }
  .xmas-lights span:nth-child(even){ margin-top:17px; }
  .xmas-lights span:nth-child(4n+1){ background:#ff3b3b; color:#ff3b3b; }
  .xmas-lights span:nth-child(4n+2){ background:#ffd54a; color:#ffd54a; animation-delay:.4s; }
  .xmas-lights span:nth-child(4n+3){ background:#3ddc6a; color:#3ddc6a; animation-delay:.8s; }
  .xmas-lights span:nth-child(4n){   background:#4aa8ff; color:#4aa8ff; animation-delay:1.2s; }
  @keyframes xtwinkle{
    0%,100%{ opacity:1; box-shadow:0 0 16px 5px currentColor; }
    50%{ opacity:.45; box-shadow:0 0 5px 1px currentColor; }
  }

  /* Banner */
  .xmas-banner{
    margin:0 0 16px; padding:10px 14px; border-radius:12px; text-align:center;
    background:linear-gradient(90deg,#b71c1c,#1f8a43); color:#fff;
    font-weight:700; font-size:.88rem; border:2px dashed #ffd54a;
    box-shadow:var(--shadow-sm);
  }
  .xmas-foot{ text-align:center; padding:22px 10px 30px; color:#888; font-size:.8rem; font-weight:600; }

  /* Nieve */
  .xmas-snow{ position:fixed; inset:0; pointer-events:none; z-index:120; overflow:hidden; }
  .xmas-flake{
    position:absolute; top:-6%; color:#fff; user-select:none;
    text-shadow:0 0 3px rgba(60,110,170,.9), 0 0 1px rgba(60,110,170,.9);
    animation:xfall linear infinite;
  }
  @keyframes xfall{
    0%{ transform:translate3d(0,-6vh,0) rotate(0deg); }
    100%{ transform:translate3d(var(--dx),108vh,0) rotate(360deg); }
  }

  @media (max-width:600px){
    .xmas-banner{ font-size:.72rem; padding:8px 10px; margin-bottom:10px; }
    .xmas-lights{ height:40px; }
    .xmas-lights span{ width:13px; height:20px; }
    .xmas-lights span:nth-child(even){ margin-top:15px; }
  }
  @media (prefers-reduced-motion:reduce){
    .xmas-snow{ display:none; }
    .xmas-lights span{ animation:none; }
  }`;

  const st = document.createElement('style');
  st.textContent = css;
  document.head.appendChild(st);

  /* 💡 Luces colgando bajo las pestañas */
  const sticky = document.querySelector('.sticky-top');
  if (sticky) {
    const lights = document.createElement('div');
    lights.className = 'xmas-lights';
    const n = Math.min(90, Math.max(20, Math.ceil(window.innerWidth / 24)));
    lights.innerHTML = '<span></span>'.repeat(n);
    sticky.appendChild(lights);
  }

  /* 🎁 Banner y pie de página */
  const main = document.querySelector('.main');
  if (main) {
    const banner = document.createElement('div');
    banner.className = 'xmas-banner';
    banner.textContent = '🎄 ¡Felices Fiestas! Herramientas y Conexiones les desea una Feliz Navidad 🎅';
    main.insertBefore(banner, main.firstChild);

    const foot = document.createElement('div');
    foot.className = 'xmas-foot';
    foot.textContent = '🎁 ¡Feliz Navidad y próspero Año Nuevo! ✨';
    main.appendChild(foot);
  }

  /* ❄️ Nieve cayendo */
  const snow = document.createElement('div');
  snow.className = 'xmas-snow';
  const flakes = window.innerWidth < 600 ? 18 : 40;
  const symbols = ['❄', '❅', '❆', '•'];
  for (let i = 0; i < flakes; i++) {
    const f = document.createElement('span');
    f.className = 'xmas-flake';
    f.textContent = symbols[i % symbols.length];
    f.style.left = (Math.random() * 100) + 'vw';
    f.style.fontSize = (10 + Math.random() * 14) + 'px';
    f.style.opacity = (0.55 + Math.random() * 0.45).toFixed(2);
    f.style.animationDuration = (8 + Math.random() * 10) + 's';
    f.style.animationDelay = (-Math.random() * 15) + 's';
    f.style.setProperty('--dx', ((Math.random() * 120) - 60) + 'px');
    snow.appendChild(f);
  }
  document.body.appendChild(snow);

  /* 🎅 Mensajes navideños para la mascota (se suman a los existentes) */
  try {
    if (typeof MASCOT_MESSAGES !== 'undefined') {
      MASCOT_MESSAGES.push(
        '¡Feliz Navidad! 🎄',
        'Prepárate para la temporada, arma tu pedido 🎁',
        '¡Felices fiestas de parte de todo el equipo! 🎅',
        'Que tu Navidad esté llena de buenas ventas ✨'
      );
    }
  } catch (e) { /* sin efecto si no existe */ }
})();
