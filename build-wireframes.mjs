import { writeFileSync } from 'node:fs';

const pages = [
  ['inicio.html', 'Inicio', 'home'],
  ['bots.html', 'Bots', 'bots'],
  ['clientes.html', 'Clientes', 'clients'],
  ['chat.html', 'Chats', 'chat'],
  ['configuracion.html', 'Configuración', 'settings'],
  ['multimedia.html', 'Multimedia', 'media'],
  ['envio-masivo.html', 'Envíos Masivos', 'massive'],
  ['catalogo.html', 'Catálogo', 'catalog'],
  ['pedidos.html', 'Pedidos', 'orders'],
  ['reservas.html', 'Reservas', 'reservations'],
];

const asset = (name) => `assets/${name}`;

const imgIcon = (file, alt) => `<img src="${asset(file)}" alt="${alt}">`;
const iconSvg = (name) => ({
  bots: '<svg viewBox="0 0 24 24"><rect x="5" y="7" width="14" height="12" rx="2"/><path d="M12 7V4"/><path d="M8.5 12h.01"/><path d="M15.5 12h.01"/><path d="M9 16h6"/></svg>',
  chat: '<svg viewBox="0 0 24 24"><path d="M21 15a4 4 0 0 1-4 4H8l-5 3V7a4 4 0 0 1 4-4h10a4 4 0 0 1 4 4Z"/><path d="M8 9h8"/><path d="M8 13h5"/></svg>',
  media: '<svg viewBox="0 0 24 24"><rect x="3" y="5" width="18" height="14" rx="2"/><circle cx="8.5" cy="10.5" r="1.5"/><path d="m21 15-5-5L5 19"/></svg>',
  clients: '<svg viewBox="0 0 24 24"><path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2"/><circle cx="9" cy="7" r="4"/><path d="M22 21v-2a4 4 0 0 0-3-3.87"/><path d="M16 3.13a4 4 0 0 1 0 7.75"/></svg>',
  settings: '<svg viewBox="0 0 24 24"><path d="M12 15.5a3.5 3.5 0 1 0 0-7 3.5 3.5 0 0 0 0 7Z"/><path d="M19.4 15a1.8 1.8 0 0 0 .36 1.98l.06.06a2 2 0 1 1-2.83 2.83l-.06-.06A1.8 1.8 0 0 0 15 19.4a1.8 1.8 0 0 0-1 .6 1.8 1.8 0 0 0-.5 1.3V21a2 2 0 1 1-4 0v-.1a1.8 1.8 0 0 0-1.4-1.76 1.8 1.8 0 0 0-1.98.36l-.06.06a2 2 0 1 1-2.83-2.83l.06-.06A1.8 1.8 0 0 0 4.6 15a1.8 1.8 0 0 0-.6-1 1.8 1.8 0 0 0-1.3-.5H2.6a2 2 0 1 1 0-4h.1A1.8 1.8 0 0 0 4.46 8.1 1.8 1.8 0 0 0 4.1 6.12l-.06-.06A2 2 0 1 1 6.87 3.23l.06.06A1.8 1.8 0 0 0 9 4.6c.4-.17.73-.4 1-.7.3-.36.5-.8.5-1.3V2.5a2 2 0 1 1 4 0v.1A1.8 1.8 0 0 0 15.9 4.36a1.8 1.8 0 0 0 1.98-.36l.06-.06a2 2 0 1 1 2.83 2.83l-.06.06A1.8 1.8 0 0 0 19.4 9c.17.4.4.73.7 1 .36.3.8.5 1.3.5h.1a2 2 0 1 1 0 4h-.1A1.8 1.8 0 0 0 19.4 15Z"/></svg>',
  massive: '<svg viewBox="0 0 24 24"><path d="m22 2-7 20-4-9-9-4Z"/><path d="M22 2 11 13"/></svg>',
  catalog: '<svg viewBox="0 0 24 24"><path d="m21 16-9 5-9-5V8l9-5 9 5Z"/><path d="m3.3 7.3 8.7 4.9 8.7-4.9"/><path d="M12 22V12"/></svg>',
  orders: '<svg viewBox="0 0 24 24"><path d="M4 2v20l2-1 2 1 2-1 2 1 2-1 2 1 2-1 2 1V2Z"/><path d="M8 7h8"/><path d="M8 11h8"/><path d="M8 15h5"/></svg>',
  reservations: '<svg viewBox="0 0 24 24"><rect x="3" y="4" width="18" height="18" rx="2"/><path d="M16 2v4"/><path d="M8 2v4"/><path d="M3 10h18"/><path d="m9 16 2 2 4-4"/></svg>',
}[name]);

const navItems = [
  ['inicio.html', 'Inicio', 'home', imgIcon('ic-real-estate-stairs-BIHfu12I.svg', 'Inicio')],
  ['bots.html', 'Bots', 'bots', imgIcon('ic-actions-emultiple-edit-Dnx9HjSL.svg', 'Administrar Bots')],
  ['clientes.html', 'Clientes', 'clients', iconSvg('clients')],
  ['chat.html', 'Chats', 'chat', imgIcon('ic-contact-message-cUWXr3ZC.svg', 'Chat en Vivo')],
  ['configuracion.html', 'Configuración', 'settings', iconSvg('settings')],
  ['multimedia.html', 'Multimedia', 'media', imgIcon('ic-contact-browser-NDtLyHKt.svg', 'Administrar Medios')],
  ['envio-masivo.html', 'Envíos Masivos', 'massive', iconSvg('massive')],
  ['catalogo.html', 'Catálogo', 'catalog', iconSvg('catalog')],
  ['pedidos.html', 'Pedidos', 'orders', iconSvg('orders')],
  ['reservas.html', 'Reservas', 'reservations', iconSvg('reservations')],
];

const nav = (active) => navItems.map(([href, label, key, icon]) =>
  `<a class="nav-link ${active === key ? 'active' : ''}" href="${href}" title="${label}"><span class="nav-icon">${icon}</span><span>${label}</span></a>`
).join('');

const layout = (title, active, content) => `<!doctype html>
<html lang="es">
<head>
  <meta charset="utf-8">
  <meta name="viewport" content="width=device-width, initial-scale=1">
  <title>Wireframe - ${title}</title>
  <link rel="stylesheet" href="wireframes.css">
</head>
<body>
  <div class="admin-layout">
    <div class="mobile-shell-header">
      <div class="mobile-logo"><img src="${asset('halcon-bot-name-D5OTKe0g.png')}" alt="Halcon Bot"></div>
      <button class="mobile-menu-button" type="button" data-mobile-menu-open title="Abrir menú" aria-label="Abrir menú">⋮</button>
    </div>
    <aside class="sidebar">
      <div class="logo-wrap"><img class="logo-desk" src="${asset('halconbot-v2-CBI-gcTb.png')}" alt="Halcon Bot Logo"><img class="logo-collapsed" src="${asset('logo-halcon-wzQ-BK1s.png')}" alt="Halcon Bot"></div>
      <button class="language-selector" type="button" data-toggle-class="open" data-target="#language-menu"><span>ES</span><strong>Español</strong><span class="chevron">⌄</span></button>
      <div id="language-menu" class="dropdown-panel"><button>ES Español</button><button>EN English</button></div>
      <nav class="nav" aria-label="Navegación principal">${nav(active)}</nav>
      <a class="tenant-card" href="inicio.html"><span>Vanity</span><span class="avatar">V</span></a>
      <button class="sidebar-toggle" type="button" data-sidebar-toggle>‹</button>
    </aside>
    <div class="mobile-menu-overlay" data-mobile-menu-overlay>
      <div class="mobile-menu-content">
        <button class="mobile-menu-close" type="button" data-mobile-menu-close title="Cerrar menú" aria-label="Cerrar menú">×</button>
        <div class="mobile-menu-scroll">
          <button class="language-selector" type="button" data-toggle-class="open" data-target="#mobile-language-menu"><span>ES</span><strong>Español</strong><span class="chevron">⌄</span></button>
          <div id="mobile-language-menu" class="dropdown-panel"><button>ES Español</button><button>EN English</button></div>
          <nav class="nav mobile-nav" aria-label="Navegación móvil">${nav(active)}</nav>
          <a class="tenant-card mobile-tenant" href="inicio.html"><span>Vanity</span><span class="avatar">V</span></a>
        </div>
      </div>
    </div>
    <main class="main-content">${content}</main>
  </div>
  <script src="wireframes.js"></script>
</body>
</html>`;

const btn = (label, kind = 'primary', attrs = '') => `<button class="btn ${kind}" type="button" ${attrs}>${label}</button>`;

const controls = (cols, actions = { del: 'Eliminar', edit: 'Editar' }) => `
  <div class="table-controls">
    <input class="filter-input" type="text" placeholder="Filtrar por palabra clave...">
    <div class="table-actions">
      ${actions.del ? `<button class="action-btn" type="button" disabled>⌫ <span>${actions.del}</span></button>` : ''}
      ${actions.edit ? `<button class="action-btn" type="button" disabled>□ <span>${actions.edit}</span></button>` : ''}
      <select class="sort-select"><option>Ordenar por</option>${cols.map(c => `<option>${c}</option>`).join('')}</select>
    </div>
  </div>`;

const dataTable = (cols, rows, options = {}) => `
  ${controls(cols, options.actions)}
  <div class="table-wrap">
    <table class="data-table" style="min-width:${options.minWidth || '980px'}">
      <thead><tr><th class="select-col"><input type="checkbox" data-check-all></th>${cols.map(c => `<th>${c}</th>`).join('')}</tr></thead>
      <tbody>${rows.map(row => `<tr><td class="select-col"><input type="checkbox"></td>${row.map(cell => `<td>${cell}</td>`).join('')}</tr>`).join('')}</tbody>
    </table>
  </div>
  <div class="pagination"><button class="page-btn" disabled>‹</button><span>Pag 1 | ${options.pages || 1}</span><button class="page-btn">›</button><span>Mostrar</span><select class="rows-select"><option>20</option><option>5</option><option>10</option><option>50</option><option>100</option><option>500</option></select>${options.total ? `<span class="total">${options.total}</span>` : ''}</div>`;

const modal = (id, title, body, wide = '') => `
  <div class="modal-layer" id="${id}" aria-hidden="true">
    <div class="modal-card ${wide}">
      <header class="modal-header"><h2>${title}</h2><button type="button" class="modal-close" data-close-modal>×</button></header>
      <div class="modal-body">${body}</div>
    </div>
  </div>`;

const field = (label, input) => `<label class="field"><span>${label}</span>${input}</label>`;
const input = (attrs = '') => `<input class="input" ${attrs}>`;
const select = (options, attrs = '') => `<select class="select" ${attrs}>${options.map(o => `<option>${o}</option>`).join('')}</select>`;
const textarea = (attrs = '') => `<textarea class="textarea" ${attrs}></textarea>`;

const reservationTabs = (active) => `
  <nav class="tabs">
    <button class="tab ${active === 'agenda' ? 'active' : ''}" type="button" data-tab="agenda">Agenda</button>
    <button class="tab ${active === 'settings' ? 'active' : ''}" type="button" data-tab="settings">Configuración</button>
    <button class="tab ${active === 'blocks' ? 'active' : ''}" type="button" data-tab="blocks">Bloqueos</button>
    <button class="tab ${active === 'payments' ? 'active' : ''}" type="button" data-tab="payments">Pagos</button>
  </nav>`;

const status = (text, variant = 'success') => `<span class="pill ${variant}">${text}</span>`;
const strong = (text, sub = '') => `<span class="strong-text">${text}</span>${sub ? `<span class="muted-text">${sub}</span>` : ''}`;
const cardIcon = (name) => `<span class="dashboard-icon">${iconSvg(name) || '<svg viewBox="0 0 24 24"><path d="M4 4h16v16H4z"/></svg>'}</span>`;
const botCard = (name, active = true) => `
  <article class="real-bot-card ${active ? 'selected' : ''}">
    <button class="bot-delete" type="button" aria-label="Eliminar">x</button>
    <div class="bot-card-row">
      <input type="checkbox" ${active ? 'checked' : ''}>
      <div class="bot-copy"><strong>${name}</strong><button class="bot-edit" type="button">Editar</button></div>
      <div class="bot-state"><span class="bot-play">${active ? '||' : '>'}</span><small class="${active ? 'on' : 'off'}">${active ? 'Activo' : 'Inactivo'}</small></div>
    </div>
  </article>`;
const chatClient = (name, phone, last, time, initials, active = false, unread = '') => `
  <div class="client-line">
    <button class="real-client-item ${active ? 'active' : ''}" type="button">
      <span class="client-avatar">${initials}</span>
      <span class="client-copy"><strong>${name}</strong><small>${last}</small></span>
      <span class="client-meta"><time>${time}</time>${unread ? `<b>${unread}</b>` : ''}</span>
    </button>
    <button class="client-pause" type="button" aria-label="Pausar bot">||</button>
  </div>`;
const mediaCard = (type, name, size, visibility = 'Público') => `<article class="media-card" data-open-modal="#media-modal"><div class="media-thumb">${type}<button class="delete-chip" type="button">x</button></div><div class="media-info"><strong>${name}</strong><span>${size}</span>${status(visibility,'success')}</div></article>`;
const listChip = (name) => `<span class="massive-list-chip"><button type="button">${name}</button><button type="button" aria-label="Eliminar ${name}">x</button></span>`;
const searchable = (label, placeholder, searchPlaceholder, value = '') => `
  <div class="field">
    <span>${label}</span>
    <div class="searchable-select" data-toggle-class="open" data-target="#searchable-${label.toLowerCase().replaceAll(' ', '-').replaceAll('ó', 'o')}">
      <span>${value || placeholder}</span>
    </div>
    <div class="searchable-dropdown" id="searchable-${label.toLowerCase().replaceAll(' ', '-').replaceAll('ó', 'o')}">
      <input placeholder="${searchPlaceholder}">
      <button type="button">${value || 'Cliente muestra - 573200000000'}</button>
      <button type="button">Sin resultados</button>
    </div>
  </div>`;
const reservationHeader = (title, subtitle, actions = '') => `
  <header class="page-header reservation-header">
    <div><h1 class="heading-primary">${title}</h1><p class="subtitle">${subtitle}</p></div>
    ${actions ? `<div class="header-actions">${actions}</div>` : ''}
  </header>`;
const reservationFilters = (id, count, fields) => `
  <div class="filter-bar">
    <button class="filter-toggle" type="button" data-toggle-class="open" data-target="#${id}">Filtros${count ? ` <span class="filter-badge">${count}</span>` : ''}</button>
    ${count ? '<button class="clear-btn" type="button">Limpiar filtros</button>' : ''}
  </div>
  <div id="${id}" class="filter-panel reservation-filter-panel"><div class="filter-row reservation-filter-row">${fields}</div></div>`;
const activeCheckbox = `<label class="checkbox-row"><input checked type="checkbox">Activo</label>`;

const home = layout('Inicio', 'home', `
  <section class="dashboard">
    <h1 class="page-title">Panel de Administración</h1>
    <p class="loading-text">Cargando estadísticas...</p>
    <div class="stats-grid">
      <article class="stat-card"><span class="stat-icon blue">☻</span><div><strong>1.284</strong><span>Clientes</span></div></article>
      <article class="stat-card"><span class="stat-icon green">✓</span><div><strong>18</strong><span>Conversaciones activas</span></div></article>
      <article class="stat-card"><span class="stat-icon yellow">!</span><div><strong>6</strong><span>Sin segmento</span></div></article>
      <article class="stat-card"><span class="stat-icon blue">✉</span><div><strong>248</strong><span>Respuestas del bot</span></div></article>
    </div>
    <div class="nav-divider"></div>
    <div class="nav-grid">
      <a href="bots.html" class="nav-card">${cardIcon('bots')}<strong>Administrar Bots</strong></a>
      <a href="clientes.html" class="nav-card">${cardIcon('clients')}<strong>Administrar Clientes</strong></a>
      <a href="chat.html" class="nav-card">${cardIcon('chat')}<strong>Ir al Chat</strong></a>
      <a href="configuracion.html" class="nav-card">${cardIcon('settings')}<strong>Configuraciones</strong></a>
      <a href="multimedia.html" class="nav-card">${cardIcon('media')}<strong>Administrar Medios</strong></a>
      <a href="envio-masivo.html" class="nav-card">${cardIcon('massive')}<strong>Envios Masivos WatsApp</strong></a>
      <a href="pedidos.html" class="nav-card">${cardIcon('orders')}<strong>Administrar Pedidos</strong></a>
    </div>
  </section>`);

const bots = layout('Bots', 'bots', `
  <section class="bots-page">
    <aside class="bots-left">
      <h1 class="heading-primary">Todos los Bots</h1>
      <div class="container-buttons real-bot-actions"><div></div>${btn('Crear Bot', 'secondary', 'data-open-modal="#bot-modal"')}</div>
      <div class="real-bot-list">
        ${botCard('Claudia', true)}
        ${botCard('Ventas', false)}
      </div>
    </aside>
    <section class="bots-right">
      <div class="container-buttons real-instruction-actions"><h2 class="heading-primary small">Instrucciones del Bot: Claudia</h2>${btn('Crear Instrucción', 'primary', 'data-open-modal="#instruction-modal"')}</div>
      ${dataTable(['Instrucción','Segmentos','Creado'], [
        ['Eres Claudia, asesora de Vanity Beauty. Responde de forma amable, clara y orientada a la venta.', status('InterésProducto','blue'), '12/04/2026'],
        ['Antes de cotizar un envío solicita ciudad, producto y cantidad para validar disponibilidad.', status('SeguimientoPedido','blue'), '18/04/2026'],
        ['Si el cliente pide hablar con un asesor, registra el segmento RequiereContacto.', status('RequiereContacto','blue'), '21/04/2026'],
      ], {minWidth:'800px'})}
    </section>
  </section>
  ${modal('bot-modal','Crear Bot', `<div class="form-grid">${field('Nombre', input('placeholder="Nombre del bot"'))}${field('Estado', select(['Activo','Inactivo']))}</div>${btn('Crear','primary')}`)}
  ${modal('instruction-modal','Crear Instrucción', `${field('Instrucción', textarea('rows="4"'))}<div class="form-grid">${field('Segmento', select(['InterésProducto','SeguimientoPedido','RequiereContacto']))}${field('Prioridad', select(['Alta','Media','Baja']))}</div>${btn('Crear','primary')}`)}
`);

const clients = layout('Clientes', 'clients', `
  <h1 class="heading-primary">Todos los Segmentos</h1>
  <div class="segment-row"><button>InterésProducto</button><button>RequiereContacto</button><button>ClientasListasCompra</button><button>SeguimientoPedido</button><button>SeguimientoCliente</button><button>EmprendedoraBelleza</button></div>
  <div class="section-header"><h2 class="heading-primary small">Todos los Clientes</h2><div class="header-actions">${btn('Crear Cliente','primary','data-open-modal="#client-modal"')}${btn('Exportar','secondary')}${btn('Importar','secondary','data-open-modal="#import-modal"')}</div></div>
  <div class="filter-bar"><button class="filter-toggle" data-toggle-class="open" data-target="#client-filters">Filtros</button></div>
  <div id="client-filters" class="filter-panel"><div class="filter-row">${field('Segmento', select(['Todos','InterésProducto','SeguimientoPedido']))}${field('Registro desde', input('type="date"'))}${field('Registro hasta', input('type="date"'))}</div></div>
  ${dataTable(['Nombre','Segmento','WhatsApp','Registro','Chat'], [
    [strong('Juan Carlos Garcia','Cliente frecuente'), status('SeguimientoPedido','blue'), '573212345467', '26/06/2026', '<a class="inline-link" href="chat.html">Abrir chat</a>'],
    [strong('Yanidy Miranda','Interés en producto'), status('InterésProducto','blue'), '573216236735', '26/06/2026', '<a class="inline-link" href="chat.html">Abrir chat</a>'],
    [strong('Aleja Nails','Emprendedora belleza'), status('EmprendedoraBelleza','blue'), '573142135346', '25/06/2026', '<a class="inline-link" href="chat.html">Abrir chat</a>'],
  ], {pages:64,total:'1.284 registros',minWidth:'980px'})}
  ${modal('client-modal','Crear Cliente', `<div class="form-grid">${field('Nombre', input())}${field('Apellidos', input())}${field('WhatsApp', input())}${field('Segmento', select(['InterésProducto','SeguimientoPedido','EmprendedoraBelleza']))}</div>${btn('Crear','primary')}`)}
  ${modal('import-modal','Importar clientes', `<div class="empty-state">Selecciona un archivo CSV o XLSX para previsualizar clientes antes de importarlos.</div>${btn('Importar','primary')}`)}
`);

const chat = layout('Chat', 'chat', `
  <section class="chat-page">
    <div class="top-filters">
      <button class="filter-toggle" type="button" data-toggle-class="open" data-target="#chat-top-filters">Filtros <span class="filter-badge">2</span></button>
      <div id="chat-top-filters" class="filter-panel chat-top-panel"><div class="filter-row">${field('Segmento', select(['Todos','SeguimientoPedido','InterésProducto']))}${field('Estado', select(['Todos','Con mensajes sin leer','Bot pausado']))}</div></div>
    </div>
    <div class="chat-shell real-chat-shell">
      <aside class="conversation-list real-conversation-list">
        <label class="real-search"><span>⌕</span><input placeholder="Buscar clientes..."></label>
        <div class="client-scroll">
          ${chatClient('Juan Carlos Garcia','573212345467','Quiero saber si tienen disponible la Tina Eléctrica Pedicure.','10:34','JG',true,'3')}
          ${chatClient('Yanidy Miranda','573216236735','Cotización pendiente para el combo pedicure.','Ayer','YM',false,'1')}
          ${chatClient('Aleja Nails','573142135346','Nuevo pedido detectado desde catálogo.','Lun','AN')}
          ${chatClient('Laura Vanessa','573205551200','Gracias, quedo atenta al envío.','Dom','LV')}
          ${chatClient('Tatiana Ruiz','573187774433','¿El pago puede ser contra entrega?','Sáb','TR','')}
          ${chatClient('Diana Paola','573003332211','Necesito el catálogo actualizado.','Vie','DP')}
        </div>
      </aside>
      <section class="chat-panel real-chat-panel">
        <header class="chat-header real-chat-header">
          <div class="chat-head-row">
            <button class="chat-icon-btn" type="button" data-chat-back>‹</button>
            <span class="chat-avatar">JG</span>
            <div class="chat-person"><strong>Juan Carlos Garcia</strong><span>+573212345467</span></div>
          </div>
          <button class="orders-trigger" type="button" data-toggle-class="open" data-target="#orders-quick">▣ <span>Pedidos</span><b>2</b></button>
        </header>
        <div class="chat-segments">
          <span>Segmentos</span><button type="button">SeguimientoPedido</button><button type="button">InterésProducto</button><button type="button">+</button>
        </div>
        <div class="messages real-messages">
          <button class="load-more" type="button">Cargar más ⟳</button>
          <div class="bubble incoming">Hola, quiero saber si tienen disponible la Tina Eléctrica Pedicure.<span>10:32 a. m.</span></div>
          <div class="bubble outgoing">Claro, tenemos disponibilidad. ¿En qué ciudad te encuentras para validar el envío?<span>10:33 a. m.</span></div>
          <span class="unread-marker">Mensajes sin leer</span>
          <div class="bubble incoming">Estoy en Cúcuta. También quiero saber cuánto tarda el envío.<span>10:34 a. m.</span></div>
          <div class="bubble outgoing">A Cúcuta el envío sale por transportadora y normalmente tarda entre 2 y 4 días hábiles.<span>10:35 a. m.</span></div>
        </div>
        <div id="orders-quick" class="orders-quick-panel">
          <strong>Pedidos recientes</strong>
          <span>#1042 - Pendiente</span>
          <span>#1037 - Enviado</span>
        </div>
        <footer class="composer real-composer">
          <button class="chat-icon-btn" type="button" data-toggle-class="open" data-target="#chat-popup">+</button>
          <div id="chat-popup" class="chat-popup"><button>Crear pedido</button><button>Asignar segmento</button><button>Enviar plantilla</button></div>
          <button class="chat-icon-btn" type="button">⌘</button>
          <textarea placeholder="Escribe un mensaje..." rows="1"></textarea>
          <button class="send-round" type="button">➤</button>
        </footer>
      </section>
    </div>
  </section>
`);

const settings = layout('Configuración', 'settings', `
  <h1 class="heading-primary">Configuraciones</h1>
  <section class="settings-section"><h2>Idioma del sistema</h2><button class="language-selector inline"><span>ES</span><strong>Español</strong><span class="chevron">⌄</span></button></section>
  <section class="settings-section"><h2>Notificaciones Push</h2><div class="push-card"><strong>✓ Notificaciones Activas</strong><button class="btn secondary">↻ Renovar token</button></div><p class="muted-p">Recibirás notificaciones de nuevos mensajes. Activado el 12/04/2026, 06:05 p. m.</p></section>
  <section class="settings-section">${field('Correos adicionales de notificación', input('placeholder="ejemplo@correo.com, otro@correo.com"'))}</section>
  <section class="settings-section"><h2>Fallback de catálogo</h2><label class="checkbox-row"><input type="checkbox" checked>Activar envío automático de catálogo PDF cuando la búsqueda devuelva aproximados o ningún producto.</label>${field('Mensaje del fallback', textarea('rows="4" placeholder="Mensaje del fallback"'))}<div class="header-actions">${btn('Seleccionar PDF','secondary')}${btn('Restaurar mensaje por defecto','secondary')}${btn('Limpiar PDF','secondary')}<span class="muted-text">PDF configurado (79c49d07-60cf-4958-9ab2-ff51535a3f80)</span></div></section>
  <section class="settings-section" data-tabs><h2>WordPress</h2><nav class="tabs wrap"><button class="tab active" data-tab="api">Claves API</button><button class="tab" data-tab="identity">Identidad del Bot</button><button class="tab" data-tab="theme">Tema y Colores</button><button class="tab" data-tab="layout">Diseño y Layout</button><button class="tab" data-tab="header">Encabezado</button><button class="tab" data-tab="messages">Mensajes</button><button class="tab" data-tab="welcome">Botones de Bienvenida</button></nav><div data-tab-panel="api"><div class="form-grid">${field('Clave API WordPress', input('placeholder="Genera una clave API en WordPress segura"'))}${field('Clave Secreta WordPress', input('placeholder="Genera una clave secreta para WordPress"'))}</div><div class="header-actions top-space">${btn('Generar Clave API','secondary')}${btn('Generar Clave Secreta','secondary')}</div></div><div class="hidden" data-tab-panel="identity"><div class="form-grid">${field('Nombre del bot', input())}${field('Color primario', input('type="color" value="#0066ff"'))}</div></div></section>
  <section class="settings-section"><h2>WhatsApp</h2><div class="form-grid">${field('Clave API WhatsApp', input('placeholder="Ingresa la clave API WhatsApp"'))}${field('ID de teléfono WhatsApp', input('placeholder="Ingresa el ID de teléfono WhatsApp"'))}${field('ID de cuenta WhatsApp Business', input('placeholder="Ingresa el ID de cuenta WhatsApp Business"'))}${field('URL base WhatsApp', input('placeholder="Ingresa la URL base WhatsApp"'))}${field('Token de Verificación del Hub', input('placeholder="Ingresa el token de verificación del Hub"'))}</div><div class="top-space">${btn('Generar token Hub','secondary')}</div></section>
  <section class="settings-section"><h2>99envios</h2><p class="muted-p">Configura la autenticacion y los valores base del negocio para las cotizaciones desacopladas del chatbot.</p><div class="form-grid">${field('URL base 99envios', input('placeholder="https://integration1.99envios.app"'))}${field('Timeout 99envios (segundos)', input('placeholder="15"'))}${field('Email 99envios', input('placeholder="usuario@ejemplo.com"'))}${field('Password 99envios', input('type="password" placeholder="Ingresa la password de 99envios"'))}${field('Ciudad origen', select(['BOGOTA D.C. [11001000]']))}${field('Transportadora preferida', select(['Selecciona una transportadora preferida','Interrapidisimo','TCC','Servientrega','Coordinadora','Envia']))}</div><div class="checkbox-grid"><label><input type="checkbox" checked> Permitir fallback si la preferida falla</label><label><input type="checkbox" checked> Mostrar nombre de transportadora seleccionada</label><label><input type="checkbox"> Activar contrapago por defecto</label></div>${btn('Actualizar','primary')}</section>
  <section class="settings-section"><h2>Conexiones e-commerce</h2><p class="muted-p">Crea y administra las credenciales técnicas que usará el plugin WooCommerce para sincronizar el catálogo con el chatbot.</p><h3>Nueva conexión</h3><div class="form-grid">${field('Proveedor', select(['WooCommerce']))}${field('Nombre visible', input('placeholder="Tienda principal"'))}${field('URL de la tienda', input('placeholder="https://mitienda.com"'))}</div><div class="header-actions top-space">${btn('Crear conexión','primary')}${btn('Actualizar listado','secondary')}</div><h3>Conexiones existentes</h3><div class="table-wrap">${dataTable(['Proveedor','Nombre','URL','Estado','Última actividad','Última sincronización','Última rotación','Creada','Acciones'], [['WooCommerce','JuankaWeb','http://localhost:8080/juankaweb',status('Activa','success'),'17/8/2026','13/8/2026','13/8/2026','13/8/2026','Rotar token · Revocar'],['WooCommerce','Osy','https://osydistribuidores.com',status('Activa','success'),'Nunca','Nunca','12/8/2026','12/8/2026','Rotar token · Revocar']], {actions:{del:'',edit:''},minWidth:'1100px'})}</div></section>
`);

const media = layout('Multimedia', 'media', `
  <div class="media-page">
    <section class="media-section real-media-section">
      <h1 class="section-title">Subir media</h1>
      <form class="upload-form real-upload-form">
        <label class="file-picker">⌁ Seleccionar archivo</label>
        <div class="segmented" data-segmented><button class="active" type="button">Privado</button><button type="button">Público</button></div>
        ${btn('Subir archivo','primary')}
      </form>
    </section>
    <section class="media-section real-media-section">
      <header class="library-header real-library-header"><h2 class="section-title">Biblioteca de medios <span class="soft-badge">54</span></h2><label class="real-search media-search"><span>⌕</span><input placeholder="Buscar por nombre..."></label></header>
      <div class="media-filters real-media-filters"><button class="active" type="button">Todos</button><button type="button">Imágenes</button><button type="button">Videos</button><button type="button">Audio</button><button type="button">Documentos</button><button type="button">Otros</button></div>
      <div class="media-grid real-media-grid">${[
        ['PDF','ACRYSOFT CATALOGO 2026.pdf','34.0 MB'],
        ['AUD','WhatsApp Ptt 2026-08-25 at 12.41.43 PM.ogg','56.4 KB'],
        ['VID','Video-viaje-puente-cucuta.mp4','45.5 MB'],
        ['IMG','Nexus.png','345.3 KB'],
        ['IMG','Pantaloneta-Deportiva.jpeg','169.9 KB'],
        ['PDF','Catalogo.pdf','17.7 MB'],
        ['IMG','tina-electrica-pedicure.png','418.1 KB'],
        ['DOC','Brief_Catalogo.docx','112.6 KB']
      ].map(([type,name,size])=>mediaCard(type,name,size)).join('')}</div>
    </section>
  </div>
  ${modal('media-modal','Detalle de media', `<div class="media-preview">PREVIEW</div><p class="muted-p">Nombre, tamaño, visibilidad y enlace público del archivo seleccionado.</p>`)}
`);

const massive = layout('Envíos Masivos', 'massive', `
  <section class="massive-page">
    <div class="massive-lists-block">
      <h1 class="heading-primary">Lista de clientes</h1>
      <div class="massive-list-row">${listChip('ClientasListasCompra')}${listChip('SeguimientoPedido')}${listChip('EmprendedoraBelleza')}${listChip('SeguimientoCliente')}<button class="add-list" type="button" data-open-modal="#list-modal">+</button></div>
    </div>
    <hr class="massive-separator">
    <div class="massive-grid">
      <section class="massive-form">
        <h2 class="heading-primary small">Nuevo envío</h2>
        ${field('Nombre del envío', input('placeholder="Ingresa el nombre del envío"'))}
        ${field('Plantilla de mensaje', select(['Selecciona una plantilla','Promoción mensual','Seguimiento de pedido','Catálogo actualizado'], 'data-template-select'))}
        <div class="massive-template-details hidden">
          <div class="template-detail-head">
            <h3>Detalles de plantilla</h3>
            <button class="picker-toggle" type="button">Seleccionar media</button>
          </div>
          <div class="dynamic-values"><span>nombre_cliente</span><span>producto</span><span>ciudad</span></div>
          <div class="whatsapp-preview">
            <div class="wa-bubble"><strong>Hola {{nombre_cliente}}</strong><p>Tenemos novedades para ti sobre {{producto}}. Responde este mensaje y validamos disponibilidad en {{ciudad}}.</p><small>10:45 a. m.</small></div>
          </div>
        </div>
        ${field('Lista de clientes', select(['Selecciona la lista de clientes','ClientasListasCompra','SeguimientoPedido','EmprendedoraBelleza']))}
        ${field('Programar envío (opcional)', input('placeholder="Selecciona la fecha de envío"'))}
        ${btn('Enviar','primary')}
      </section>
      <section class="massive-table-block">
        <h2 class="heading-primary small">Todos los envíos</h2>
        ${dataTable(['Nombre','Plantilla','Lista','Programado','Estado'], [
          ['Campaña septiembre','Promoción mensual','ClientasListasCompra','2026-09-01 09:00',status('Programado','yellow')],
          ['Recordatorio pedido','Seguimiento de pedido','SeguimientoPedido','2026-08-28 15:30',status('Enviado','success')],
          ['Catálogo belleza','Catálogo actualizado','EmprendedoraBelleza','Sin programar',status('Borrador','neutral')]
        ], {minWidth:'800px'})}
      </section>
    </div>
  </section>
  ${modal('list-modal','Nueva lista de clientes', `<div class="form-grid">${field('Nombre', input('placeholder="Nombre de la lista"'))}${field('Segmento base', select(['InterésProducto','SeguimientoPedido','EmprendedoraBelleza']))}</div>${btn('Crear lista','primary')}`)}
`);

const catalog = layout('Catálogo', 'catalog', `
  <h1 class="heading-primary">Catálogo de Productos</h1><div class="container-buttons"><div>${btn('Crear Producto','primary','data-open-modal="#product-modal"')}</div><div class="header-actions">${btn('Exportar','secondary')}${btn('Importar','secondary','data-open-modal="#product-import-modal"')}</div></div>
  <div class="filter-bar"><button class="filter-toggle" data-toggle-class="open" data-target="#catalog-filters">Filtros</button></div><div id="catalog-filters" class="filter-panel"><div class="filter-row">${field('Estado', select(['Todos','Publicado','Borrador']))}${field('Stock', select(['Todos','En inventario','Agotado','Reserva']))}</div></div>
  ${dataTable(['Imagen','Nombre','Origen','Marca / SKU','Precio','Stock','Categorías','Estado'], [
    ['<span class="product-avatar">▧</span>', strong('Tina Eléctrica Pedicure','SKU TINA-001'), status('Manual','neutral'), strong('Vanity','TINA-001'), '<span class="price">COP 120.000</span>', `${status('En inventario','success')}<span class="muted-text">12 u.</span>`, status('Pedicure','blue'), status('Publicado','success')],
    ['<span class="product-avatar">▧</span>', strong('Combo pedicure pies','SKU COMBO-009'), status('WooCommerce','blue'), strong('Vanity','COMBO-009'), '<span class="price">COP 226.464,69</span>', `${status('En inventario','success')}<span class="muted-text">5 u.</span>`, status('Combos','blue'), status('Publicado','success')]
  ], {minWidth:'980px', total:'0 registros'})}
  ${modal('product-modal','Crear producto', `<div class="form-grid">${field('Nombre', input())}${field('SKU', input())}${field('Precio', input('type="number"'))}${field('Estado', select(['Publicado','Borrador']))}</div>${btn('Guardar','primary')}`, 'wide')}
  ${modal('product-import-modal','Importar productos', `<div class="empty-state">Selecciona un CSV o XLSX y revisa la previsualización antes de confirmar.</div>${btn('Importar','primary')}`)}
`);

const orders = layout('Pedidos', 'orders', `
  <h1 class="heading-primary">Pedidos</h1><div class="container-buttons"><div>${btn('Crear Pedido','primary','data-open-modal="#order-modal"')}</div></div>
  <div class="filter-bar"><button class="filter-toggle" data-toggle-class="open" data-target="#order-filters">Filtros</button></div><div id="order-filters" class="filter-panel"><div class="filter-row">${field('Estado', select(['Todos','Borrador','Confirmado','Procesando','Enviado','Entregado','Cancelado']))}${field('Canal', select(['Todos','WhatsApp','WordPress']))}${field('Desde', input('type="date"'))}${field('Hasta', input('type="date"'))}</div></div>
  ${dataTable(['ID','Cliente','Estado','Canal','Total','Fecha','Ciudad','Productos','Chat'], [
    ['<button class="inline-link" data-open-modal="#order-detail">#720</button>', strong('Juan','573221222142'), status('Cancelado','danger'), status('WordPress','blue'), '<span class="price">COP 198.900</span>', '25/8/2026', '—', strong('Soporte De Motor Mercedes Benz W124','Ver detalle (1)'), '<a class="inline-link" href="chat.html">Chat</a>'],
    ['<button class="inline-link" data-open-modal="#order-detail">#719</button>', strong('Melisa','573112837465'), status('Borrador','yellow'), status('WordPress','blue'), '<span class="price">COP 147.268,53</span>', '28/6/2026', 'POPAYAN', strong('Tina Eléctrica Pedicure','Ver detalle (1)'), '<a class="inline-link" href="chat.html">Chat</a>'],
    ['<button class="inline-link" data-open-modal="#order-detail">#718</button>', strong('Dario','573218737464'), status('Confirmado','blue'), status('WordPress','blue'), '<span class="price">COP 156.344,96</span>', '28/6/2026', 'Tarqui', strong('Tina Eléctrica Pedicure','Ver detalle (1)'), '<a class="inline-link" href="chat.html">Chat</a>']
  ], {minWidth:'1180px', pages:36, total:'708 registros'})}
  ${modal('order-modal','Crear pedido', `<div class="form-grid">${field('Cliente', select(['Selecciona un cliente','Juan','Melisa']))}${field('Estado', select(['Borrador','Confirmado']))}${field('Canal', select(['WhatsApp','WordPress']))}${field('Total', input('type="number"'))}</div>${btn('Guardar','primary')}`, 'wide')}
  ${modal('order-detail','Detalle del pedido', `<div class="summary-grid"><div class="summary-card"><span>ID</span><strong>#720</strong></div><div class="summary-card"><span>Cliente</span><strong>Juan</strong></div><div class="summary-card"><span>Total</span><strong>COP 198.900</strong></div></div><div class="empty-state">Productos, dirección y datos JSON del pedido.</div>`)}
`);

const reservations = layout('Reservas', 'reservations', `
  <div class="reservations-wireframe" data-tabs>
    <div class="reservation-panel-heads">
      <div data-reservation-head="agenda" class="hidden">${reservationHeader('Agenda de reservas', 'Consulta disponibilidad, crea citas y gestiona reservas por sede, profesional y servicio.', `${btn('Actualizar','secondary')}${btn('Crear reserva','primary','data-open-modal="#reservation-modal"' )}`)}</div>
      <div data-reservation-head="settings">${reservationHeader('Configuración de reservas', 'Configura sedes, servicios, profesionales y horarios base para que la agenda funcione correctamente.', btn('Actualizar','secondary'))}</div>
      <div data-reservation-head="blocks" class="hidden">${reservationHeader('Bloqueos y no disponibilidad', 'Registra cierres, pausas, vacaciones o mantenimientos para evitar reservas en horarios no disponibles.', `${btn('Actualizar','secondary')}${btn('Crear bloqueo','primary','data-open-modal="#block-modal"')}`)}</div>
      <div data-reservation-head="payments" class="hidden">${reservationHeader('Pagos y abonos', 'Consulta reservas, registra abonos y revisa saldo pagado o pendiente.', btn('Actualizar','secondary'))}</div>
    </div>
    ${reservationTabs('settings')}

    <section data-tab-panel="settings">
      <div data-tabs class="reservation-settings">
        <nav class="tabs reservation-subtabs"><button class="tab active" type="button" data-tab="locations">Sedes</button><button class="tab" type="button" data-tab="services">Servicios</button><button class="tab" type="button" data-tab="resources">Recursos</button><button class="tab" type="button" data-tab="schedules">Horarios</button></nav>
        <section data-tab-panel="locations">
          <div class="container-buttons reservations-create-row"><div>${btn('Crear Sedes','primary','data-open-modal="#location-modal"')}</div></div>
          ${dataTable(['Nombre','Tipo','Ciudad','Teléfono','Estado'], [[strong('QA Sede 332460'),'Sucursal','Bogota QA','3000000000',status('Activo','success')],[strong('Sede 2'),'Sucursal','Cucuta','3212312321312',status('Activo','success')],[strong('Sede Norte'),'Sucursal','Cucuta','32121231212',status('Activo','success')],[strong('Venecia'),'Sucursal','Bogota','32112312321',status('Activo','success')],[strong('Venecia 2'),'Salón de belleza','Bogota','312312312312',status('Activo','success')]], {minWidth:'980px'})}
        </section>
        <section class="hidden" data-tab-panel="services">
          <div class="container-buttons reservations-create-row"><div>${btn('Crear Servicios','primary','data-open-modal="#service-modal"')}</div></div>
          ${dataTable(['Nombre','Duración','Precio','Estado'], [[strong('Pedicure'),'60 min','COP 90.000',status('Activo','success')],[strong('Pedicure'),'40 min','COP 90.000',status('Activo','success')],[strong('QA Facial 332460'),'45 min','COP 50.000',status('Activo','success')],[strong('Spa'),'60 min','COP 90.000',status('Activo','success')]], {minWidth:'980px'})}
        </section>
        <section class="hidden" data-tab-panel="resources">
          <div class="container-buttons reservations-create-row"><div>${btn('Crear Recursos','primary','data-open-modal="#resource-modal"')}</div></div>
          ${dataTable(['Nombre','Tipo','Sedes','Servicios','Estado'], [[strong('David'),'Profesional','Venecia 2','Pedicure, Spa',status('Activo','success')],[strong('Cabina principal'),'Cabina','Sede Norte','QA Facial 332460',status('Activo','success')]], {minWidth:'980px'})}
        </section>
        <section class="hidden" data-tab-panel="schedules">
          <div class="container-buttons reservations-create-row"><div>${btn('Crear Horarios','primary','data-open-modal="#schedule-modal"')}</div></div>
          ${dataTable(['Día','Sede','Recurso','Horario','Estado'], [['Lunes','Venecia 2','David','09:00 - 17:00',status('Activo','success')],['Martes','General','General','08:00 - 18:00',status('Activo','success')]], {minWidth:'980px'})}
        </section>
      </div>
    </section>

    <section class="hidden" data-tab-panel="agenda">
      ${reservationFilters('reservation-filters', 2, `${field('Sede', select(['Todos','Venecia 2','Sede Norte']))}${field('Profesional o recurso', select(['Todos','David','Cabina principal']))}${field('Servicio', select(['Todos','Pedicure','Spa','QA Facial 332460']))}${field('Cliente', select(['Todos','Cliente muestra','Juan Carlos Garcia']))}${field('Estado', select(['Todos','Pendiente','Confirmada','Cancelada','Completada']))}${field('Canal', select(['Todos','WhatsApp','WordPress','Instagram','Messenger']))}${field('Desde', input('type="date" value="2026-09-01"'))}${field('Hasta', input('type="date" value="2026-09-01"'))}`)}
      ${dataTable(['Fecha','Cliente','Servicio','Profesional','Sede','Estado','Canal','Valor'], [[strong('2026-09-01','09:00 - 10:00'), strong('Cliente muestra','573200000000'),'Pedicure','David','Venecia 2',status('Pendiente','yellow'),status('WhatsApp','success'),'COP 90.000'],[strong('2026-09-01','15:00 - 16:00'), strong('Juan Carlos Garcia','573212345467'),'Spa','Cabina principal','Sede Norte',status('Confirmada','blue'),status('WordPress','blue'),'COP 120.000']], {minWidth:'1180px', total:'2 registros', actions:{del:'Cancelar',edit:'Reprogramar'}})}
    </section>

    <section class="hidden" data-tab-panel="blocks">
      ${reservationFilters('block-filters', 0, `${field('Sede', select(['Todos','Venecia 2','Sede Norte']))}${field('Recurso', select(['Todos','David','Cabina principal']))}${field('Tipo', select(['Todos','Manual','Pausa','Desayuno','Almuerzo','Cena','Vacaciones','Cierre','Mantenimiento','Reunión','Capacitación','Permiso personal']))}${field('Desde', input('type="date"'))}${field('Hasta', input('type="date"'))}`)}
      ${dataTable(['Rango','Alcance','Tipo','Motivo'], [[strong('2026-09-01 12:40','2026-09-02 14:35'),'Venecia 2 / David','Almuerzo','Almuerzo'],[strong('2026-09-04 08:00','2026-09-04 17:00'),'General','Mantenimiento','Cierre por mantenimiento']], {minWidth:'920px', actions:{del:'Eliminar',edit:'Editar'}})}
    </section>

    <section class="hidden" data-tab-panel="payments">
      ${reservationFilters('payment-filters', 0, `${field('Sede', select(['Todos','Venecia 2','Sede Norte']))}${field('Profesional o recurso', select(['Todos','David','Cabina principal']))}${field('Servicio', select(['Todos','Pedicure','Spa']))}${field('Cliente', select(['Todos','Cliente muestra','Juan Carlos Garcia']))}${field('Estado', select(['Todos','Pendiente','Confirmada','Completada','Cancelada']))}${field('Desde', input('type="date"'))}${field('Hasta', input('type="date"'))}`)}
      <div class="section-stack">
        <section class="form-section reservation-form-section">
          <h3>Reservas</h3>
          <span class="muted-text">Busca por cliente, teléfono, servicio, sede o profesional y selecciona una reserva para gestionar sus pagos.</span>
          ${dataTable(['Fecha','Cliente','Servicio','Profesional','Estado','Total'], [[strong('2026-09-01 09:00','Venecia 2'), strong('Cliente muestra','573200000000'),'Pedicure','David','Confirmada','COP 90.000'],[strong('2026-09-01 15:00','Sede Norte'), strong('Juan Carlos Garcia','573212345467'),'Spa','Cabina principal','Pendiente','COP 120.000']], {minWidth:'1100px', actions:{del:'',edit:'Gestionar pagos'}})}
        </section>
        <section class="form-section reservation-form-section">
          <h3>Detalle de pago</h3>
          <div class="summary-grid"><div class="summary-card"><span>Reserva</span><strong>Cliente muestra</strong><small>Pedicure</small></div><div class="summary-card"><span>Total</span><strong>COP 90.000</strong></div><div class="summary-card"><span>Pagado</span><strong>COP 30.000</strong></div><div class="summary-card"><span>Saldo</span><strong>COP 60.000</strong></div></div>
          <form class="reservation-real-form">
            <div class="form-grid reservation-form-grid">${field('Valor', input('type="number" min="0.01" step="0.01" value="30000"'))}${field('Moneda', select(['COP','USD','AUD','EUR','MXN']))}${field('Tipo de pago', select(['Abono','Saldo','Pago total','Ajuste']))}${field('Método', select(['Efectivo','Transferencia','Tarjeta','Nequi','Daviplata','Datáfono','Otro']))}${field('Estado', select(['Recibido','Pendiente','Fallido']))}${field('Fecha de pago', input('type="datetime-local"'))}</div>
            ${field('Notas', textarea('rows="3"'))}
            ${btn('Registrar pago','primary')}
          </form>
          <div class="table-wrap top-space"><table class="data-table simple-table" style="min-width:760px"><thead><tr><th>Fecha</th><th>Valor</th><th>Tipo</th><th>Método</th><th>Estado</th><th>Notas</th></tr></thead><tbody><tr><td>2026-09-01 08:45</td><td>COP 30.000</td><td>Abono</td><td>Nequi</td><td>Recibido</td><td>Abono inicial</td></tr></tbody></table></div>
        </section>
      </div>
    </section>
  </div>
  ${modal('location-modal','Crear Sedes', `<form class="reservation-real-form"><div class="form-grid reservation-form-grid">${field('Nombre', input('required value="Venecia 2"'))}${field('Slug', input('required value="venecia-2"'))}${field('Tipo', select(['Sucursal','Salón de belleza','Spa','Clínica','Restaurante','Alojamiento','Cabaña','Glamping','Cancha','Oficina']))}${field('Ciudad', input('value="Bogota"'))}${field('Teléfono', input('value="312312312312"'))}${field('Zona horaria', select(['Colombia - Bogotá','México - Ciudad de México','Venezuela - Caracas','España - Madrid','Italia - Roma','Australia - Sídney','Australia - Melbourne','Estados Unidos - Nueva York','Perú - Lima','Chile - Santiago']))}</div>${activeCheckbox}${btn('Crear','primary')}</form>`)}
  ${modal('service-modal','Crear Servicios', `<form class="reservation-real-form"><div class="form-grid reservation-form-grid">${field('Nombre', input('required value="Pedicure"'))}${field('Slug', input('required value="pedicure"'))}${field('Duración', input('type="number" min="1" required value="60"'))}${field('Precio', input('type="number" min="0" value="90000"'))}${field('Moneda', select(['COP - Peso colombiano','USD - Dólar estadounidense','AUD - Dólar australiano','EUR - Euro','MXN - Peso mexicano']))}</div>${field('Descripción', textarea('rows="3"'))}${activeCheckbox}${btn('Crear','primary')}</form>`)}
  ${modal('resource-modal','Crear Recursos', `<form class="reservation-real-form"><div class="form-grid reservation-form-grid">${field('Nombre', input('required value="David"'))}${field('Slug', input('required value="david"'))}${field('Tipo', select(['Profesional','Especialista','Habitación','Cabina','Mesa','Cabaña','Glamping','Cancha','Vehículo','Equipo']))}${field('Capacidad', input('type="number" min="1" value="1"'))}${field('Teléfono', input())}${field('Correo', input('type="email"'))}</div><section class="form-section inner reservation-form-section"><h4>Sedes habilitadas</h4><div class="multi-list"><label><input type="checkbox">QA Sede 332460</label><label><input type="checkbox">Sede 2</label><label><input checked type="checkbox">Sede Norte</label><label><input checked type="checkbox">Venecia 2</label></div></section><section class="form-section inner reservation-form-section"><h4>Servicios que ofrece</h4><div class="multi-list services-offered"><div class="mini-card"><label><input checked type="checkbox">Pedicure</label><div class="form-grid dense">${input('placeholder="Precio especial" type="number" min="0"')}${input('placeholder="Duración especial" type="number" min="1"')}${select(['Sin comisión','Porcentaje','Valor fijo'])}${input('placeholder="Valor comisión" type="number" min="0"')}</div></div><div class="mini-card"><label><input checked type="checkbox">Spa</label><div class="form-grid dense">${input('placeholder="Precio especial" type="number" min="0"')}${input('placeholder="Duración especial" type="number" min="1"')}${select(['Sin comisión','Porcentaje','Valor fijo'])}${input('placeholder="Valor comisión" type="number" min="0"')}</div></div></div></section>${activeCheckbox}${btn('Crear','primary')}</form>`, 'wide')}
  ${modal('schedule-modal','Crear Horarios', `<form class="reservation-real-form"><div class="form-grid reservation-form-grid">${field('Sede', select(['General','Venecia 2','Sede Norte']))}${field('Recurso', select(['General','David','Cabina principal']))}${field('Día', select(['Domingo','Lunes','Martes','Miércoles','Jueves','Viernes','Sábado']))}${field('Hora inicial', input('type="time" required value="09:00"'))}${field('Hora final', input('type="time" required value="17:00"'))}${field('Vigente desde', input('type="date"'))}${field('Vigente hasta', input('type="date"'))}</div>${activeCheckbox}${btn('Crear','primary')}</form>`)}
  ${modal('reservation-modal','Crear nueva reserva', `<form class="reservation-real-form">${`<div class="form-grid reservation-form-grid">${searchable('Cliente','Selecciona una opción','Buscar por nombre, teléfono o correo...','Cliente muestra - 573200000000')}${searchable('Sede','Selecciona una opción','Buscar sede...','Venecia 2 - Bogota')}${searchable('Profesional o recurso','Selecciona una opción','Buscar profesional o recurso...','David - Profesional')}${searchable('Servicio','Selecciona una opción','Buscar servicio...','Pedicure - 60 min - COP 90.000')}${field('Fecha', input('type="date" required value="2026-09-01"'))}${field('Canal', select(['WhatsApp','WordPress','Instagram','Messenger']))}${field('Asistentes', input('type="number" min="1" value="1"'))}</div>`}${field('Notas', textarea('rows="3"'))}<section class="form-section inner reservation-form-section"><h4>Opciones avanzadas</h4><div class="form-grid reservation-form-grid">${field('Intervalo para mostrar horarios', select(['5 min','10 min','15 min','20 min','30 min','45 min','60 min','90 min','120 min']))}</div><span class="muted-text">Solo define cada cuánto se muestran horarios disponibles. La duración real viene del servicio.</span></section><section class="form-section inner reservation-form-section"><h4>Horarios disponibles</h4><div class="inline-actions">${btn('Buscar horarios','secondary')}<span class="muted-text">Elige sede, profesional, servicio y fecha para consultar huecos reales.</span></div><div class="slot-grid"><button type="button">09:00</button><button type="button">10:00</button><button type="button">11:00</button><button type="button">14:00</button></div></section>${btn('Crear reserva','primary')}</form>`, 'wide')}
  ${modal('block-modal','Crear bloqueo', `<form class="reservation-real-form"><div class="form-grid reservation-form-grid">${field('Sede', select(['General','Venecia 2','Sede Norte']))}${field('Recurso', select(['General','David','Cabina principal']))}${field('Tipo', select(['Manual','Pausa','Desayuno','Almuerzo','Cena','Vacaciones','Cierre','Mantenimiento','Reunión','Capacitación','Permiso personal']))}${field('Inicio', input('type="datetime-local" required'))}${field('Fin', input('type="datetime-local" required'))}</div>${field('Motivo', textarea('rows="3"'))}${btn('Crear','primary')}</form>`)}
`);

const css = `*{box-sizing:border-box}body{margin:0;font-family:Poppins,Arial,sans-serif;color:#111;background:#fff}.admin-layout{display:flex;height:100vh}.sidebar{position:fixed;z-index:200;inset:0 auto 0 0;width:250px;height:100vh;background:#f7fafc;border-right:1px solid #e2e8f0;padding:16px;display:flex;flex-direction:column;transition:width .3s ease}.logo-wrap{display:flex;justify-content:center;margin-bottom:32px}.logo-wrap img{width:200px;height:auto}.language-selector{width:100%;height:44px;border:1px solid #e2e8f0;background:#fff;border-radius:8px;padding:8px 16px;display:flex;align-items:center;gap:8px;color:#000;font:400 16px/24px Poppins,Arial,sans-serif;text-align:left;cursor:pointer}.language-selector strong{font-weight:600}.chevron{margin-left:auto}.dropdown-panel{display:none;border:1px solid #e2e8f0;background:#fff;border-radius:8px;margin:8px 0;padding:6px}.dropdown-panel.open{display:block}.dropdown-panel button{display:block;width:100%;border:0;background:#fff;text-align:left;padding:8px;border-radius:6px}.nav{list-style:none;padding:16px 0 0;margin:0;display:flex;flex-direction:column;gap:8px;flex:1}.nav-link{display:flex;align-items:center;padding:12px 16px;margin-bottom:0;text-decoration:none;color:#4a4a4a;border-radius:8px;transition:all .3s ease;gap:16px;font:500 16px/24px Poppins,Arial,sans-serif}.nav-link:hover{background:#f0f7ff;color:#1e88e5;transform:translateX(4px);box-shadow:2px 2px 2px rgba(0,102,255,.36)}.nav-link.active{background:#e3f2fd;color:#1565c0;font-weight:600;transform:translateX(8px);box-shadow:2px 2px 2px rgba(0,102,255,.36)}.nav-icon{width:24px;height:24px;display:flex;align-items:center;justify-content:center;flex:0 0 24px}.nav-icon img{max-width:24px;max-height:24px}.nav-icon svg{width:24px;height:24px;fill:none;stroke:currentColor;stroke-width:1.8;stroke-linecap:round;stroke-linejoin:round}.tenant-card{height:61px;background:#1f2937;color:#fff;border-radius:8px;display:flex;align-items:center;justify-content:space-between;padding:9px 10px;text-decoration:none;font:500 18px/24px Poppins;margin-top:8px}.tenant-card .avatar{width:41px;height:41px;border-radius:999px;background:#0066ff;display:flex;align-items:center;justify-content:center;font-weight:700}.sidebar-toggle{background:none;border:0;color:#4a4a4a;font-size:24px;cursor:pointer;padding:14px}.main-content{flex:1;margin-left:250px;padding:32px;background:#fff;min-width:0;overflow:auto}.heading-primary{font:500 24px/28.8px Poppins,Arial,sans-serif;color:#212529;margin:0 0 24px}.heading-primary.small{font-size:24px;margin:0}.page-title{font-size:24px;font-weight:700;color:#111;margin:0 0 28px}.subtitle{margin:6px 0 0;color:#6b7280;font:400 14px/1.45 Poppins,Arial,sans-serif;max-width:760px}.muted-p{color:#6b7280;font-size:14px;line-height:1.45}.container-buttons{padding:20px 0;display:flex;flex-wrap:wrap;justify-content:space-between;gap:20px}.header-actions,.actions{display:flex;gap:10px;align-items:center;flex-wrap:wrap}.section-header,.page-header{display:flex;justify-content:space-between;align-items:flex-start;gap:16px;margin-bottom:18px;flex-wrap:wrap}.btn{padding:7px 24px;background:#0066ff;box-shadow:0 1px 3px #11111112;border-radius:10px;border:0;font:600 15px/22px Poppins,Arial,sans-serif;color:#fff;cursor:pointer}.btn:hover{background:#000}.btn.secondary{background:#000}.btn.secondary:hover{background:#0066ff}.tabs{display:flex;gap:8px;align-items:center;flex-wrap:wrap;margin-bottom:18px}.tabs.wrap{margin-top:8px}.tab{display:inline-flex;align-items:center;gap:8px;padding:8px 14px;border-radius:8px;border:1px solid #e2e8f0;background:#fff;color:#4a5568;font:600 13px/15.6px Poppins,Arial,sans-serif;text-decoration:none;cursor:pointer}.tab:hover{background:#f8fbff;color:#0066ff}.tab.active{border-color:#bfdbfe;background:#eff6ff;color:#1d4ed8}.filter-bar{display:flex;flex-wrap:wrap;align-items:center;gap:8px;margin-bottom:12px}.filter-toggle,.clear-btn{display:inline-flex;align-items:center;gap:6px;padding:6px 14px;background:#f7fafc;border:1px solid #e2e8f0;border-radius:8px;font:500 14px/1 Poppins,Arial,sans-serif;color:#4a5568;cursor:pointer;position:relative}.filter-toggle:hover{background:#edf2f7}.filter-badge{background:#0066ff;color:#fff;font-size:11px;font-weight:600;border-radius:50%;min-width:18px;height:18px;display:inline-flex;align-items:center;justify-content:center}.clear-btn{background:none;border:0;color:#e53e3e}.filter-panel{display:none;background:#f7fafc;border:1px solid #e2e8f0;border-radius:12px;padding:16px 20px;margin-bottom:16px}.filter-panel.open{display:block}.filter-panel.compact{padding:10px;margin:0 16px 10px}.filter-row{display:flex;flex-wrap:wrap;gap:16px;align-items:flex-end}.field{display:flex;flex-direction:column;gap:6px;min-width:160px;flex:1}.field span,.field>label,label.field span{font-size:13px;font-weight:500;color:#4a5568}.input,.select,.textarea,.filter-input,.sort-select,.rows-select{border:1px solid #e2e8f0;border-radius:8px;background:#fff;color:#2d3748;font:400 14px/1.4 Poppins,Arial,sans-serif;padding:7px 10px}.input:focus,.select:focus,.textarea:focus,.filter-input:focus,.sort-select:focus{border-color:#0066ff;outline:none}.textarea{min-height:84px;resize:vertical}.filter-input{min-width:150px;max-width:280px;padding:7px 12px}.table-controls{display:flex;justify-content:space-between;align-items:center;margin:16px 0;flex-wrap:wrap;gap:10px}.table-actions{display:flex;align-items:center;flex-wrap:wrap;gap:4px}.action-btn{padding:6px 14px;background:none;border:1px solid transparent;border-radius:8px;cursor:pointer;display:flex;align-items:center;gap:6px;font:500 14px/1.4 Poppins,Arial,sans-serif;color:#4a5568}.action-btn:not(:disabled):hover{background:#f7fafc;border-color:#e2e8f0}.action-btn:disabled{cursor:not-allowed;opacity:.4}.table-wrap{position:relative;width:100%;overflow:auto}.data-table{width:100%;border-collapse:collapse}.data-table thead{background:#f7fafc;border-bottom:2px solid #e2e8f0}.data-table th{padding:10px 12px;text-align:left;border-bottom:0;font:600 14px/14px Poppins,Arial,sans-serif;color:#4a5568;text-transform:uppercase;letter-spacing:.04em;white-space:nowrap}.data-table td{padding:12px;border-bottom:1px solid #e2e8f0;font:400 14px/1.4 Poppins,Arial,sans-serif;color:#2d3748;vertical-align:top}.data-table tr:nth-child(even){background:#f9f9f9}.data-table tr:hover{background:#edf2f7}.select-col{width:54px}.data-table input[type=checkbox],.checkbox-row input,.multi-list input{width:16px;height:16px;accent-color:#0066ff}.pagination{display:flex;justify-content:flex-end;align-items:center;flex-wrap:wrap;gap:6px 8px;margin-top:24px;font:500 14px/1.4 Poppins;color:#4a5568}.page-btn{padding:6px 10px;border-radius:8px;border:1px solid #e2e8f0;background:#f7fafc;cursor:pointer}.page-btn:disabled{opacity:.4;cursor:not-allowed}.total{margin-left:12px;color:#6b7280}.strong-text{display:block;color:#111;font:600 14px/1.35 Poppins,Arial,sans-serif}.muted-text{display:block;color:#6b7280;font:400 12px/1.35 Poppins,Arial,sans-serif}.pill{display:inline-flex;align-items:center;justify-content:center;padding:3px 10px;border-radius:999px;border:1px solid #e2e8f0;background:#f7fafc;color:#4a5568;font:600 12px/1 Poppins,Arial,sans-serif;white-space:nowrap}.pill.success{background:#f0fff4;color:#38a169;border-color:#c6f6d5}.pill.blue{background:#eff6ff;color:#1d4ed8;border-color:#bfdbfe}.pill.yellow{background:#fffbeb;color:#d69e2e;border-color:#f6d860}.pill.danger{background:#fff5f5;color:#e53e3e;border-color:#fed7d7}.pill.neutral{background:#f8fafc;color:#64748b;border-color:#e2e8f0}.inline-link{background:none;border:0;color:#0066ff;font:600 14px/1.4 Poppins,Arial,sans-serif;text-decoration:none;cursor:pointer;padding:0}.inline-link:hover{text-decoration:underline}.price{font:600 14px/1.2 Poppins;color:#111}.settings-section,.media-section,.form-section{background:#fff;border:1px solid #e2e8f0;border-radius:16px;padding:32px;margin-bottom:32px;transition:border-color .2s ease}.settings-section:hover,.media-section:hover,.form-section:hover{border-color:#0066ff}.settings-section h2,.media-section h2,.form-section h3{margin:0 0 18px;font-size:20px;font-weight:600}.form-grid{display:grid;grid-template-columns:repeat(auto-fit,minmax(210px,1fr));gap:12px}.form-grid.dense{grid-template-columns:repeat(auto-fit,minmax(150px,1fr))}.top-space{margin-top:12px}.checkbox-row{display:flex;align-items:center;gap:8px;color:#2d3748;font:500 13px/1.3 Poppins;margin:12px 0}.checkbox-grid{display:flex;flex-wrap:wrap;gap:14px;margin:14px 0;color:#4a5568}.push-card{background:#f0fff4;color:#38a169;border:1px solid #c6f6d5;border-radius:8px;padding:12px 16px;display:flex;align-items:center;justify-content:space-between;gap:12px;flex-wrap:wrap}.stats-grid{display:grid;grid-template-columns:repeat(auto-fit,minmax(200px,1fr));gap:14px;margin-bottom:24px}.stat-card{background:#fff;border:1px solid #e2e8f0;border-radius:12px;padding:16px 18px;display:flex;align-items:center;gap:14px}.stat-card:hover{border-color:#0066ff}.stat-card strong{font-size:22px;line-height:1;display:block}.stat-card span{color:#6b7280;font-size:14px}.stat-icon{width:44px;height:44px;border-radius:10px;display:flex;align-items:center;justify-content:center;font-weight:800}.stat-icon.blue{background:#eff6ff;color:#0066ff}.stat-icon.green{background:#f0fff4;color:#38a169}.stat-icon.yellow{background:#fffbeb;color:#d69e2e}.loading-text{color:#6b7280;font-size:14px;margin-bottom:20px}.nav-divider{border-top:1px solid #e2e8f0;margin:8px 0 24px}.nav-grid{display:grid;grid-template-columns:repeat(auto-fit,minmax(140px,1fr));gap:16px}.nav-card{background:#fff;border:1px solid #e2e8f0;border-radius:12px;display:flex;flex-direction:column;align-items:center;padding:20px 16px;text-decoration:none;color:#333;transition:transform .2s,border-color .2s}.nav-card:hover{transform:translateY(-4px);border-color:#0066ff}.nav-card span{font-size:28px;margin-bottom:10px}.nav-card strong{font-size:14px;font-weight:600;text-align:center;color:#4a5568}.bot-layout,.two-col{display:grid;grid-template-columns:280px minmax(0,1fr);gap:24px}.side-list{display:flex;flex-direction:column;gap:10px}.list-item,.conversation-item{border:1px solid #e2e8f0;border-radius:8px;background:#fff;padding:12px;text-align:left;color:#2d3748;cursor:pointer}.list-item.active,.conversation-item.active{background:#eff6ff;border-color:#bfdbfe;color:#1d4ed8}.list-item span,.conversation-item span,.conversation-item small{display:block;color:#6b7280;font-size:12px;margin-top:2px}.segment-row{display:flex;gap:10px;flex-wrap:wrap;margin-bottom:28px}.segment-row button,.media-filters button{border:1px solid #e2e8f0;background:#fff;border-radius:8px;padding:8px 14px;color:#4a5568;font:600 13px Poppins;cursor:pointer}.segment-row button:hover,.media-filters button.active{background:#eff6ff;border-color:#bfdbfe;color:#1d4ed8}.chat-shell{height:calc(100vh - 64px);display:grid;grid-template-columns:330px minmax(0,1fr);border:1px solid #e2e8f0;border-radius:12px;overflow:hidden}.conversation-list{border-right:1px solid #e2e8f0;background:#f8fafc;display:flex;flex-direction:column}.chat-search{padding:16px;border-bottom:1px solid #e2e8f0}.conversation-item{border-radius:0;border-width:0 0 1px;background:#fff;padding:14px 16px}.conversation-item.active{border-left:4px solid #0066ff}.chat-panel{display:flex;flex-direction:column;min-width:0}.chat-header{padding:18px 22px;border-bottom:1px solid #e2e8f0;display:flex;justify-content:space-between;align-items:center}.messages{flex:1;background:#f7fafc;padding:24px;overflow:auto}.bubble{max-width:68%;padding:12px 14px;border-radius:10px;margin-bottom:12px;font-size:14px;line-height:1.45}.bubble span{display:block;font-size:11px;opacity:.65;margin-top:4px}.incoming{background:#fff;border:1px solid #e2e8f0;color:#2d3748}.outgoing{background:#0066ff;color:#fff;margin-left:auto}.composer{border-top:1px solid #e2e8f0;padding:16px;display:flex;gap:10px}.composer .input{flex:1}.upload-form,.library-header{display:flex;gap:12px;align-items:center;justify-content:space-between;flex-wrap:wrap}.file-picker{border:1px dashed #cbd5e1;background:#f8fafc;border-radius:8px;padding:10px 16px;color:#4a5568;font-weight:500}.segmented{display:inline-flex;border:1px solid #e2e8f0;border-radius:10px;overflow:hidden}.segmented button{border:0;background:#fff;color:#4a5568;padding:9px 16px;font-weight:600}.segmented .active{background:#0066ff;color:#fff}.count-badge{background:#0066ff;color:#fff;border-radius:999px;padding:3px 9px;font-size:13px}.media-filters{display:flex;gap:8px;flex-wrap:wrap;margin:14px 0}.media-grid{display:grid;grid-template-columns:repeat(auto-fill,minmax(180px,1fr));gap:16px}.media-card{border:1px solid #e2e8f0;border-radius:10px;background:#fff;overflow:hidden;cursor:pointer}.media-thumb{height:118px;background:#f7fafc;display:flex;align-items:center;justify-content:center;color:#0066ff;font-weight:800;font-size:28px;position:relative}.delete-chip{position:absolute;top:8px;right:8px;border:0;background:#fff;color:#e53e3e;border-radius:8px;padding:5px 8px}.media-info{padding:12px}.media-info strong{display:block;font-size:13px;white-space:nowrap;overflow:hidden;text-overflow:ellipsis}.media-info span{display:block;color:#6b7280;font-size:12px;margin:6px 0}.product-avatar{width:38px;height:38px;border-radius:999px;display:inline-flex;align-items:center;justify-content:center;border:1px solid #e2e8f0;background:#f7fafc;color:#6b7280}.form-preview{border:1px solid #e2e8f0;border-radius:10px;background:#f8fafc;padding:16px;margin-top:14px;display:flex;flex-direction:column;gap:12px}.form-preview h3{margin:0;font-size:16px}.form-section.inner{border-radius:10px;padding:14px;margin:12px 0;background:#fff}.form-section.inner h4{margin:0 0 10px;font-size:16px}.multi-list{display:grid;grid-template-columns:repeat(auto-fit,minmax(180px,1fr));gap:8px}.multi-list label,.mini-card label{display:flex;gap:8px;align-items:center;font:500 13px Poppins;color:#2d3748}.mini-card{border:1px solid #e2e8f0;border-radius:8px;padding:10px;background:#f8fafc;display:flex;flex-direction:column;gap:8px}.summary-grid{display:grid;grid-template-columns:repeat(auto-fit,minmax(160px,1fr));gap:10px}.summary-card{border:1px solid #e2e8f0;border-radius:8px;background:#f8fafc;padding:12px}.summary-card span{display:block;color:#6b7280;font-size:12px}.summary-card strong{display:block;color:#111;font-size:18px;margin-top:4px}.empty-state{border:1px dashed #cbd5e1;border-radius:10px;background:#f8fafc;padding:16px;color:#64748b;font:400 14px/1.45 Poppins}.slot-grid{display:grid;grid-template-columns:repeat(auto-fill,minmax(120px,1fr));gap:8px;margin-top:12px}.slot-grid button{border:1px solid #e2e8f0;background:#fff;color:#2d3748;border-radius:8px;padding:9px 10px;font:600 13px Poppins}.media-preview{height:220px;border:1px solid #e2e8f0;border-radius:10px;background:#f7fafc;display:flex;align-items:center;justify-content:center;color:#0066ff;font-weight:800}.hidden{display:none!important}.modal-layer{position:fixed;inset:0;z-index:1000;background:rgba(0,0,0,.45);display:none;align-items:center;justify-content:center;padding:20px}.modal-layer.open{display:flex}.modal-card{background:#fff;width:min(720px,100%);max-height:88vh;border-radius:12px;box-shadow:0 20px 60px rgba(15,23,42,.22);overflow:hidden}.modal-card.wide{width:min(1100px,100%)}.modal-header{display:flex;align-items:center;justify-content:space-between;padding:16px 20px;border-bottom:1px solid #e2e8f0}.modal-header h2{margin:0;font:700 18px/1.2 Poppins;color:#111}.modal-close{width:34px;height:34px;border-radius:999px;border:1px solid #e2e8f0;background:#fff;color:#334155;font-size:22px;cursor:pointer}.modal-body{padding:20px;max-height:78vh;overflow:auto}body.sidebar-collapsed .sidebar{width:60px;padding:16px 10px}body.sidebar-collapsed .main-content{margin-left:60px}body.sidebar-collapsed .logo-wrap img{width:40px}body.sidebar-collapsed .language-selector strong,body.sidebar-collapsed .language-selector .chevron,body.sidebar-collapsed .nav-link span:last-child,body.sidebar-collapsed .tenant-card span:first-child{display:none}body.sidebar-collapsed .language-selector{justify-content:center;padding:8px}body.sidebar-collapsed .nav-link{justify-content:center;padding:12px 0;gap:0}body.sidebar-collapsed .tenant-card{justify-content:center;padding:8px}@media(max-width:900px){.admin-layout{display:block;height:auto}.sidebar{position:static;width:100%;height:auto}.main-content{margin-left:0;padding:16px}.nav{display:grid;grid-template-columns:repeat(2,minmax(0,1fr))}.nav-link.active{transform:none}.bot-layout,.two-col,.chat-shell{grid-template-columns:1fr;height:auto}.conversation-list{border-right:0}.settings-section,.media-section,.form-section{padding:18px;margin-bottom:18px}}`;

const js = `document.addEventListener('click',event=>{if(event.target.closest('.delete-chip')){event.preventDefault();event.stopPropagation();return;}if(event.target.closest('[data-mobile-menu-open]')){event.preventDefault();document.body.classList.add('mobile-menu-open');return;}if(event.target.closest('[data-mobile-menu-close]')||event.target.matches('[data-mobile-menu-overlay]')){event.preventDefault();document.body.classList.remove('mobile-menu-open');return;}if(event.target.closest('.mobile-nav a')){document.body.classList.remove('mobile-menu-open');}const open=event.target.closest('[data-open-modal]');if(open){event.preventDefault();document.querySelector(open.getAttribute('data-open-modal'))?.classList.add('open');}const close=event.target.closest('[data-close-modal],.modal-layer.open');if(close&&(!event.target.closest('.modal-card')||event.target.closest('[data-close-modal]'))){event.preventDefault();event.target.closest('.modal-layer')?.classList.remove('open');}const toggle=event.target.closest('[data-toggle-class]');if(toggle){event.preventDefault();document.querySelector(toggle.dataset.target)?.classList.toggle(toggle.dataset.toggleClass);}if(event.target.closest('[data-sidebar-toggle]')){document.body.classList.toggle('sidebar-collapsed');}const tab=event.target.closest('[data-tab]');if(tab){const root=tab.closest('[data-tabs]');if(root){event.preventDefault();const name=tab.dataset.tab;root.querySelectorAll(':scope > .tabs [data-tab]').forEach(b=>b.classList.toggle('active',b.dataset.tab===name));root.querySelectorAll(':scope > [data-tab-panel]').forEach(panel=>panel.classList.toggle('hidden',panel.dataset.tabPanel!==name));root.querySelectorAll(':scope > .reservation-panel-heads [data-reservation-head]').forEach(head=>head.classList.toggle('hidden',head.dataset.reservationHead!==name));}}const segmented=event.target.closest('[data-segmented] button');if(segmented){segmented.parentElement.querySelectorAll('button').forEach(btn=>btn.classList.toggle('active',btn===segmented));}const mediaFilter=event.target.closest('.real-media-filters button');if(mediaFilter){mediaFilter.parentElement.querySelectorAll('button').forEach(btn=>btn.classList.toggle('active',btn===mediaFilter));}const client=event.target.closest('.real-client-item');if(client){client.closest('.client-scroll').querySelectorAll('.real-client-item').forEach(btn=>btn.classList.toggle('active',btn===client));}const chip=event.target.closest('.massive-list-chip button:first-child');if(chip){chip.closest('.massive-list-row').querySelectorAll('.massive-list-chip').forEach(item=>item.classList.toggle('active',item.contains(chip)));}});document.addEventListener('change',event=>{const select=event.target.closest('[data-template-select]');if(select){const details=select.closest('.massive-form').querySelector('.massive-template-details');details?.classList.toggle('hidden',select.selectedIndex===0);}});document.querySelectorAll('[data-check-all]').forEach(box=>box.addEventListener('change',()=>{box.closest('table').querySelectorAll('tbody input[type=checkbox]').forEach(cb=>cb.checked=box.checked)}));document.addEventListener('keydown',event=>{if(event.key==='Escape'){document.body.classList.remove('mobile-menu-open');document.querySelectorAll('.modal-layer.open').forEach(m=>m.classList.remove('open'));}});`;

const extraCss = `.dashboard-icon{width:44px;height:44px;border-radius:10px;background:#eff6ff;color:#0066ff;display:flex;align-items:center;justify-content:center;margin-bottom:10px}.dashboard-icon svg{width:28px;height:28px;fill:none;stroke:currentColor;stroke-width:1.8;stroke-linecap:round;stroke-linejoin:round}.nav-card .dashboard-icon{font-size:initial}.bots-page{display:grid;grid-template-columns:minmax(300px,1fr) minmax(0,2fr);gap:24px;align-items:start}.bots-left .heading-primary{margin-bottom:0}.real-bot-actions,.real-instruction-actions{padding:40px 0}.real-bot-list{display:flex;flex-direction:column;gap:20px;align-items:flex-start}.real-bot-card{position:relative;width:100%;max-width:300px;background:#fff;border:1px solid #e2e8f0;border-radius:12px;padding:20px;transition:border-color .2s ease}.real-bot-card:hover,.real-bot-card.selected{border-color:#0066ff}.bot-delete{position:absolute;top:-15px;right:-15px;width:25px;height:25px;border:0;border-radius:999px;background:#e53e3e;color:#fff;font:700 13px/1 Poppins;cursor:pointer}.bot-card-row{display:flex;align-items:center;gap:12px}.bot-card-row input{width:16px;height:16px;accent-color:#0066ff}.bot-copy{min-width:0;flex:1}.bot-copy strong{display:block;color:#111;font:600 15px/1.3 Poppins}.bot-edit{margin-top:10px;background:transparent;border:1px solid #e2e8f0;border-radius:10px;padding:6px 30px;color:#111;font:600 13px/18px Poppins;cursor:pointer}.bot-edit:hover{border-color:#0066ff;color:#0066ff}.bot-state{display:flex;flex-direction:column;align-items:center;gap:6px}.bot-play{width:32px;height:32px;border-radius:999px;border:1px solid #e2e8f0;background:#f7fafc;color:#4a5568;display:flex;align-items:center;justify-content:center;font:700 12px/1 Poppins}.bot-state small{font:600 12px/1 Poppins}.bot-state .on{color:#45bf55}.bot-state .off{color:#a0aec0}.bots-right .table-controls{margin-top:0}.chat-page{display:flex;flex-direction:column;gap:12px}.top-filters{position:relative;display:flex;align-items:flex-start;gap:10px;min-height:32px}.chat-top-panel{position:absolute;top:38px;left:0;z-index:10;width:min(620px,100%);box-shadow:0 10px 30px rgba(15,23,42,.08)}.real-chat-shell{height:93vh;display:flex;border:0;border-radius:12px;box-shadow:0 2px 24px #11111126;overflow:hidden;background:#fff}.real-conversation-list{width:clamp(320px,28vw,400px);flex:0 0 clamp(320px,28vw,400px);border-right:1px solid #ddd;background:#fff;border-radius:10px 0 0 10px;padding:10px;overflow-y:auto}.real-search{display:flex;align-items:center;gap:.5rem;width:100%;border:1px solid #e2e8f0;border-radius:8px;background:#f7fafc;color:#718096;padding:.4rem .75rem;margin-bottom:10px}.real-search:focus-within{border-color:#0066ff}.real-search input{border:0;outline:0;background:transparent;min-width:0;width:100%;font:.85rem/1.4 Poppins;color:#2d3748}.client-scroll{display:flex;flex-direction:column}.client-line{display:flex;align-items:center;width:100%;margin:5px 0}.real-client-item{width:90%;min-height:64px;display:flex;align-items:center;gap:10px;padding:10px;background:#fff;border:1px solid #e2e8f0;border-radius:12px;box-shadow:0 1px 2px rgba(17,17,17,.06);cursor:pointer;text-align:left;color:#111}.real-client-item.active{background:#f0f5ff;border-color:#0066ff}.client-avatar,.chat-avatar{width:40px;height:40px;border-radius:50%;background:#0066ff;color:#fff;display:flex;align-items:center;justify-content:center;font:600 14px/1 Poppins;text-shadow:1px 1px 1px rgba(0,0,0,.2);flex-shrink:0}.client-copy{display:flex;flex-direction:column;gap:3px;min-width:0;flex:1}.client-copy strong{font:500 14px/1.3 Poppins;color:#111;white-space:nowrap;overflow:hidden;text-overflow:ellipsis}.client-copy small{font:400 12px/1.3 Poppins;color:#6b7280;white-space:nowrap;overflow:hidden;text-overflow:ellipsis}.client-meta{display:flex;flex-direction:column;align-items:flex-end;gap:7px}.client-meta time{font:400 12px/1 Poppins;color:#6b7280}.client-meta b{min-width:20px;height:20px;border-radius:999px;background:#0066ff;color:#fff;display:flex;align-items:center;justify-content:center;font:700 11px/1 Poppins}.client-pause{width:32px;height:32px;margin-left:6px;border:1px solid #e2e8f0;border-radius:8px;background:#f7fafc;color:#4a5568;font:700 11px/1 Poppins;cursor:pointer}.real-chat-panel{position:relative;flex:1;display:flex;flex-direction:column;min-width:0;background:#fff;padding:10px 10px 0}.real-chat-header{display:flex;flex-direction:column;gap:12px;padding:10px 0 14px;border-bottom:1px solid #e2e8f0;margin-bottom:0}.chat-head-row{display:flex;align-items:center;gap:10px;min-width:0}.chat-icon-btn{width:36px;height:36px;border:1px solid #e2e8f0;border-radius:8px;background:#f7fafc;color:#4a5568;display:flex;align-items:center;justify-content:center;cursor:pointer;flex-shrink:0}.chat-person{display:flex;flex-direction:column;gap:2px;min-width:0;flex:1}.chat-person strong{font:600 15px/1.35 Poppins;color:#111}.chat-person span{font:400 12px/1.3 Poppins;color:#6b7280}.orders-trigger{position:absolute;top:20px;right:10px;display:inline-flex;align-items:center;gap:8px;border:1px solid #e2e8f0;border-radius:999px;background:#f7fafc;color:#4a5568;padding:8px 12px;font:600 13px/1 Poppins;cursor:pointer}.orders-trigger b{min-width:20px;height:20px;padding:0 6px;border-radius:999px;background:#0066ff;color:#fff;display:inline-flex;align-items:center;justify-content:center;font:700 11px/1 Poppins}.chat-segments{display:flex;align-items:center;gap:8px;padding:10px 0 14px;border-bottom:1px solid #e2e8f0}.chat-segments span{font:600 12px/1 Poppins;color:#4a5568;text-transform:uppercase}.chat-segments button{border:1px solid #bfdbfe;background:#eff6ff;color:#1d4ed8;border-radius:999px;padding:5px 10px;font:600 12px/1 Poppins}.real-messages{flex:1;min-height:0;overflow:auto;background:#fff;padding:14px 10px 25px;display:flex;flex-direction:column}.load-more{align-self:center;margin:10px 0 20px;padding:6px 20px;border:1px solid #e2e8f0;border-radius:999px;background:#f7fafc;color:#4a5568;font:500 12.8px/1 Poppins}.real-messages .bubble{max-width:68%;padding:10px 13px;border-radius:10px;margin-bottom:12px;font:400 14px/1.45 Poppins}.real-messages .incoming{background:#fff;border:1px solid #e2e8f0;color:#2d3748}.real-messages .outgoing{background:#0066ff;color:#fff;margin-left:auto;border:0}.unread-marker{align-self:center;width:fit-content;margin:4px auto 18px;padding:4px 20px;background:rgba(0,102,255,.1);border:1px solid rgba(0,102,255,.2);color:#0066ff;border-radius:8px;font:400 13px/1 Poppins}.orders-quick-panel{display:none;position:absolute;right:12px;top:76px;z-index:9;width:220px;background:#fff;border:1px solid #e2e8f0;border-radius:10px;box-shadow:0 14px 30px rgba(15,23,42,.12);padding:12px}.orders-quick-panel.open{display:flex;flex-direction:column;gap:8px}.orders-quick-panel strong{font:600 13px/1.2 Poppins}.orders-quick-panel span{font:400 12px/1.3 Poppins;color:#4a5568}.real-composer{position:relative;display:flex;align-items:flex-end;gap:8px;border-top:1px solid #e2e8f0;background:#fff;padding:12px}.real-composer textarea{flex:1;min-height:44px;max-height:120px;resize:none;overflow:hidden;border:1px solid #e2e8f0;border-radius:24px;background:#f7fafc;padding:10px 14px;font:400 .9rem/1.5 Poppins}.real-composer textarea:focus{outline:0;border-color:#0066ff;background:#fff}.send-round{width:40px;height:40px;border-radius:50%;border:0;background:#0066ff;color:#fff;display:flex;align-items:center;justify-content:center;cursor:pointer}.chat-popup{display:none;position:absolute;left:12px;bottom:62px;z-index:8;background:#fff;border:1px solid #e2e8f0;border-radius:10px;box-shadow:0 14px 30px rgba(15,23,42,.12);padding:8px}.chat-popup.open{display:flex;flex-direction:column}.chat-popup button{border:0;background:#fff;padding:9px 12px;text-align:left;color:#2d3748;border-radius:8px;font:500 13px/1 Poppins}.chat-popup button:hover{background:#f7fafc}.media-page{display:flex;flex-direction:column;gap:1.5rem;padding:.5rem}.real-media-section{border-radius:12px;padding:1.5rem;margin-bottom:0}.real-media-section:hover{border-color:#e2e8f0}.section-title{display:flex;align-items:center;gap:.5rem;margin:0 0 1rem;color:#1a202c;font:600 1.05rem/1.3 Poppins}.real-upload-form{justify-content:flex-start;gap:.75rem}.file-picker{display:flex;align-items:center;gap:.5rem;padding:.5rem 1rem;border:1px dashed #cbd5e0;border-radius:8px;background:#f7fafc;font:500 .85rem/1.4 Poppins;color:#4a5568}.segmented{border-radius:8px;border-color:#e2e8f0}.segmented button{padding:.5rem .9rem;font:600 .78rem/1 Poppins}.segmented .active{background:#e3f2fd;color:#1565c0}.real-library-header{align-items:center}.soft-badge{display:inline-flex;align-items:center;border-radius:999px;background:#e3f2fd;color:#1565c0;padding:.1rem .5rem;font:600 .72rem/1 Poppins}.media-search{width:260px;margin:0}.real-media-filters{margin:0 0 1rem;gap:.45rem}.real-media-filters button{padding:.22rem .8rem;border-radius:999px;border:1px solid #e2e8f0;background:#fff;color:#4a5568;font:500 .78rem/1.4 Poppins}.real-media-filters button.active{border-color:#1e88e5;background:#e3f2fd;color:#1565c0}.real-media-grid{grid-template-columns:repeat(auto-fill,minmax(148px,1fr));gap:1rem}.real-media-grid .media-card{border-radius:10px;transition:box-shadow .15s ease,transform .15s ease}.real-media-grid .media-card:hover{box-shadow:0 4px 12px rgba(30,136,229,.15);transform:translateY(-2px)}.real-media-grid .media-thumb{height:108px;font-size:22px}.delete-chip{top:6px;right:6px;background:rgba(229,62,62,.88);color:#fff;border-radius:6px;padding:4px;opacity:0}.media-card:hover .delete-chip{opacity:1}.real-media-grid .media-info{padding:.45rem .6rem}.real-media-grid .media-info strong{font:.74rem/1.35 Poppins;font-weight:500}.real-media-grid .media-info span{font:.68rem/1.2 Poppins;color:#718096;margin:5px 0}.real-media-grid .pill{font-size:.65rem;padding:.15rem .5rem}.massive-page{display:block}.massive-lists-block .heading-primary{margin-bottom:8px}.massive-list-row{display:ruby}.massive-list-chip{display:inline-flex;align-items:center;margin-right:10px;margin-bottom:5px;gap:10px}.massive-list-chip button:first-child{padding:6px 25px 6px 10px;background:#0066ff22;border:1px solid #0066ff55;box-shadow:0 1px 3px #11111112;border-radius:20px;color:#0066ff;font:600 12px/18px Poppins}.massive-list-chip button:last-child{margin-left:-30px;border:0;background:transparent;border-radius:50%;color:#0066ff;font:700 16px/1 Poppins;cursor:pointer}.massive-list-chip.active button:first-child{background:#0066ff;color:#fff}.add-list{width:30px;height:30px;border:1px solid #0066ff55;border-radius:999px;background:#0066ff22;color:#0066ff;font:700 18px/1 Poppins}.massive-separator{border:0;border-top:1px solid #e2e8f0;margin:24px 8px 48px}.massive-grid{display:grid;grid-template-columns:minmax(300px,1fr) minmax(0,2fr);gap:24px;align-items:start}.massive-form{background:#fff;border:1px solid #e2e8f0;border-radius:20px;padding:20px;transition:border-color .2s ease}.massive-form:hover{border-color:#0066ff}.massive-form .heading-primary{text-align:center;margin-bottom:24px}.massive-form .field{margin-bottom:12px}.massive-table-block{padding-top:157px}.massive-table-block .heading-primary{margin-bottom:24px}.template-detail-head{display:flex;justify-content:space-between;gap:10px;align-items:center;margin-top:6px}.template-detail-head h3{font:600 13px/1 Poppins;color:#4a5568;text-transform:uppercase;letter-spacing:.04em;margin:0}.picker-toggle{border:1px dashed #cbd5e0;background:#f7fafc;border-radius:8px;color:#4a5568;padding:.45rem .8rem;font:500 .8rem Poppins}.dynamic-values{display:flex;flex-wrap:wrap;gap:6px;margin:10px 0}.dynamic-values span{border-radius:12px;background:#0066ff;color:#fff;padding:4px 8px;font:600 12px/1 Poppins}.whatsapp-preview{background:#e5ddd5;border-radius:12px;padding:16px;margin-bottom:12px}.wa-bubble{max-width:320px;background:#fff;border-radius:8px;padding:10px 12px;box-shadow:0 1px 2px rgba(0,0,0,.12);font:400 13px/1.45 Poppins;color:#111}.wa-bubble strong{display:block;margin-bottom:4px}.wa-bubble p{margin:0}.wa-bubble small{display:block;margin-top:6px;color:#6b7280;text-align:right}@media(max-width:900px){.bots-page,.massive-grid{grid-template-columns:1fr}.real-bot-actions,.real-instruction-actions{padding:20px 0}.real-chat-shell{height:auto;min-height:720px;display:grid;grid-template-columns:1fr}.real-conversation-list{width:100%;flex:auto;border-right:0;border-bottom:1px solid #ddd;border-radius:10px 10px 0 0}.massive-table-block{padding-top:0}.media-page{padding:0}.media-search{width:100%}}`;
const reservationCss = `.reservations-wireframe .reservation-header{margin-bottom:18px}.reservation-panel-heads .page-header{margin-bottom:18px}.reservation-subtabs{margin-bottom:18px}.reservations-create-row{padding:12px 0 18px;gap:12px}.reservation-filter-panel{border-radius:10px;padding:16px 20px}.reservation-filter-row{display:grid;grid-template-columns:repeat(auto-fit,minmax(170px,1fr));gap:14px;align-items:end}.reservations-wireframe .field,.modal-card .field{min-width:0;position:relative}.reservations-wireframe .field span{font:500 13px/1.3 Poppins,Arial,sans-serif;color:#4a5568}.reservations-wireframe .input,.reservations-wireframe .select,.reservations-wireframe .textarea{font:400 13px/1.4 Poppins,Arial,sans-serif;padding:9px 12px;width:100%}.reservation-real-form{display:flex;flex-direction:column;gap:16px}.reservation-form-grid{grid-template-columns:repeat(auto-fit,minmax(210px,1fr));gap:12px}.reservation-form-section{border-radius:10px;padding:14px;background:#fff;gap:12px}.reservation-form-section h4{margin:0;color:#111;font:700 16px/1.2 Poppins,Arial,sans-serif}.section-stack{display:flex;flex-direction:column;gap:22px}.inline-actions{display:flex;gap:8px;align-items:center;flex-wrap:wrap}.searchable-select{position:relative;min-height:40px;padding:9px 12px;border:1px solid #e2e8f0;background:#fff;border-radius:8px;display:flex;align-items:center;cursor:pointer}.searchable-select span{font:400 14px/1.4 Poppins,Arial,sans-serif!important;color:#2d3748!important}.searchable-select:focus,.searchable-select:hover{border-color:#0066ff}.searchable-dropdown{display:none;position:absolute;z-index:30;left:0;right:0;top:calc(100% + 6px);background:#fff;border:1px solid #e2e8f0;border-radius:10px;box-shadow:0 10px 24px rgba(15,23,42,.08);overflow:hidden}.searchable-dropdown.open{display:block}.searchable-dropdown input{width:100%;padding:10px 12px;border:0;border-bottom:1px solid #e2e8f0;font:400 14px/1.4 Poppins,Arial,sans-serif}.searchable-dropdown input:focus{outline:0}.searchable-dropdown button{width:100%;border:0;background:#fff;color:#2d3748;padding:10px 12px;text-align:left;cursor:pointer;font:400 14px/1.4 Poppins,Arial,sans-serif}.searchable-dropdown button:hover,.searchable-dropdown button:first-of-type{background:#eff6ff}.services-offered{grid-template-columns:1fr}.simple-table th{text-transform:none;font:700 13px/1.45 Poppins,Arial,sans-serif;color:#334155;background:#f8fafc}.simple-table td{font:400 13px/1.45 Poppins,Arial,sans-serif}.reservations-wireframe .summary-card strong{display:block;color:#111;font:700 18px/1.2 Poppins,Arial,sans-serif;margin-top:4px}.reservations-wireframe .summary-card small{display:block;color:#6b7280;font:400 12px/1.35 Poppins,Arial,sans-serif;margin-top:4px}@media(max-width:1200px){.reservation-form-grid{grid-template-columns:repeat(auto-fit,minmax(190px,1fr))}.reservation-filter-row{grid-template-columns:repeat(auto-fit,minmax(160px,1fr))}}@media(max-width:768px){.reservation-header{align-items:stretch}.reservation-header .header-actions{width:100%;justify-content:flex-start}.reservation-subtabs,.reservations-wireframe>.tabs{gap:6px;overflow-x:auto;flex-wrap:nowrap;padding-bottom:4px}.reservation-subtabs .tab,.reservations-wireframe>.tabs .tab{white-space:nowrap;flex:0 0 auto}.reservation-filter-panel{padding:14px}.reservation-filter-row,.reservation-form-grid{grid-template-columns:1fr}.modal-card.wide{width:calc(100% - 20px)}.summary-grid{grid-template-columns:1fr}.inline-actions{align-items:flex-start}}`;
const responsiveCss = `.mobile-shell-header,.mobile-menu-overlay{display:none}.logo-collapsed{display:none}body.sidebar-collapsed .logo-desk{display:none}body.sidebar-collapsed .logo-collapsed{display:block}@media(min-width:769px) and (max-width:1200px){.admin-layout{display:flex!important;height:100vh!important}.mobile-shell-header,.mobile-menu-overlay{display:none!important}.sidebar{position:fixed!important;inset:0 auto 0 0!important;width:60px!important;height:100vh!important;background:#f7fafc!important;border-right:1px solid #e2e8f0!important;padding:16px 10px!important;display:flex!important;flex-direction:column!important}.main-content{margin-left:60px!important;padding:32px!important;overflow:auto!important}.logo-wrap{margin-bottom:32px!important}.logo-desk{display:none!important}.logo-collapsed{display:block!important;width:40px!important;height:auto!important}.language-selector{justify-content:center!important;padding:8px!important}.language-selector strong,.language-selector .chevron,.nav-link span:last-child,.tenant-card span:first-child{display:none!important}.nav{display:flex!important;flex-direction:column!important;gap:8px!important;flex:1!important;padding:16px 0 0!important}.nav-link{justify-content:center!important;padding:12px 0!important;gap:0!important;transform:none!important;position:relative!important}.nav-link.active{transform:none!important}.nav-link:hover::after{content:attr(title);position:absolute;left:54px;top:50%;transform:translateY(-50%);background:#111;color:#fff;padding:6px 10px;border-radius:6px;white-space:nowrap;font:500 13px/1 Poppins,Arial,sans-serif;z-index:300;box-shadow:0 6px 18px rgba(0,0,0,.18)}.nav-link:hover::before{content:"";position:absolute;left:48px;top:50%;transform:translateY(-50%);border:6px solid transparent;border-right-color:#111;z-index:301}.tenant-card{justify-content:center!important;padding:8px!important}.sidebar-toggle{padding:14px 0!important}}@media(max-width:1199px){.massive-grid{grid-template-columns:1fr}.massive-table-block{padding-top:0}}@media(max-width:991px){.bots-page{grid-template-columns:1fr}.real-bot-actions,.real-instruction-actions{padding:20px 0}}@media(min-width:769px) and (max-width:1330px){.real-conversation-list{width:340px!important;flex-basis:340px!important}}@media(min-width:769px) and (max-width:1399px){.orders-quick-panel.open{position:absolute;top:0;right:0;bottom:0;width:min(360px,38vw);min-width:310px;border-radius:16px 0 0 16px;box-shadow:-12px 0 32px rgba(15,23,42,.16)}}@media(max-width:768px){.admin-layout{display:block!important;height:auto!important;min-height:100vh!important}.mobile-shell-header{height:60px;display:flex!important;align-items:center;justify-content:space-between;background:#f8f9fa;box-shadow:0 2px 5px rgba(0,0,0,.1);padding:10px 8px;position:relative;z-index:200}.mobile-logo{display:flex;align-items:center;min-width:0;flex:1}.mobile-logo img{width:60%;max-width:210px;height:auto;object-fit:contain}.mobile-menu-button{width:40px;height:40px;border:0;background:transparent;color:#4a4a4a;font-size:24px;line-height:1;display:flex;align-items:center;justify-content:center;cursor:pointer}.sidebar{display:none!important}.main-content{margin-left:0!important;padding:16px!important;overflow:visible!important}body.mobile-menu-open{overflow:hidden}body.mobile-menu-open .mobile-shell-header{display:none!important}.mobile-menu-overlay{position:fixed;inset:0;z-index:1000;background:rgba(0,0,0,.5);display:none;justify-content:center;align-items:center;padding:12px}body.mobile-menu-open .mobile-menu-overlay{display:flex}.mobile-menu-content{background:#fff;width:90%;max-width:400px;max-height:calc(100vh - 24px);padding:52px 20px 16px;border-radius:12px;position:relative;overflow:hidden;display:flex;flex-direction:column}.mobile-menu-close{position:absolute;top:12px;right:12px;width:40px;height:40px;border:1px solid #e2e8f0;border-radius:999px;background:#fff;color:#334155;box-shadow:0 6px 18px rgba(15,23,42,.12);font-size:24px;line-height:1;cursor:pointer}.mobile-menu-scroll{overflow-y:auto;overflow-x:hidden;min-height:0;padding-right:4px;display:flex;flex-direction:column}.mobile-nav{display:flex!important;flex-direction:column!important;gap:0!important;padding:16px 0 0!important;margin:0!important}.mobile-nav .nav-link{justify-content:flex-start!important;padding:.75rem 1rem!important;margin-bottom:1rem!important;gap:0!important;transform:none!important}.mobile-nav .nav-link .nav-icon{margin-right:1rem}.mobile-nav .nav-link span:last-child{display:inline!important;opacity:1}.mobile-nav .nav-link:hover{border-left:1px solid #000;transform:none!important}.mobile-nav .nav-link.active{transform:none!important}.mobile-tenant{margin-top:8px}.page-header,.section-header{align-items:stretch}.header-actions,.actions{width:100%;justify-content:flex-start}.container-buttons{padding:16px 0}.table-controls{align-items:stretch}.filter-input{max-width:none;width:100%}.table-actions{width:100%;justify-content:flex-start}.btn{white-space:nowrap}.settings-section,.media-section,.form-section{padding:18px;margin-bottom:18px}.stats-grid{grid-template-columns:1fr}.nav-grid{grid-template-columns:repeat(auto-fit,minmax(140px,1fr))}.form-grid,.form-grid.dense{grid-template-columns:1fr}.filter-panel{padding:14px}.filter-row{display:grid;grid-template-columns:1fr}.pagination{justify-content:flex-start}.modal-layer.open{align-items:flex-end;padding:0}.modal-card,.modal-card.wide{width:100%!important;max-height:90vh;border-radius:16px 16px 0 0}.modal-body{max-height:calc(90vh - 67px)}.top-filters{display:none!important}.real-chat-shell{display:block!important;height:auto!important;min-height:0!important;box-shadow:none!important;overflow:visible!important;background:transparent!important}.real-conversation-list{display:none!important}.real-chat-panel{display:flex!important;height:calc(100vh - 80px)!important;min-height:560px;background:#fff!important;padding:0!important;border-radius:0!important}.real-chat-header{padding:10px 0 14px!important;margin:0 10px!important}.orders-trigger{top:20px;right:10px;padding:8px}.orders-trigger span{display:none}.chat-segments{margin:0 10px;overflow-x:auto}.chat-segments button{white-space:nowrap}.real-messages{padding:14px 10px 25px}.real-messages .bubble{max-width:82%}.real-composer{padding:12px}.real-composer textarea{min-width:0}.orders-quick-panel.open{position:fixed!important;left:0!important;right:0!important;bottom:0!important;top:auto!important;width:100vw!important;min-width:0!important;height:min(84vh,720px);border-radius:18px 18px 0 0;box-shadow:0 -10px 30px rgba(15,23,42,.18);z-index:1200}.media-page{padding:0}.upload-form,.library-header{align-items:stretch}.real-upload-form{flex-direction:column}.media-search{width:100%}.real-media-grid{grid-template-columns:repeat(auto-fill,minmax(132px,1fr))}.massive-list-row{display:flex;flex-wrap:wrap}.massive-separator{margin:20px 0 28px}.massive-form{border-radius:16px;padding:16px}.template-detail-head{align-items:flex-start;flex-direction:column}.wa-bubble{max-width:100%}.reservation-subtabs,.tabs.wrap{overflow-x:auto;flex-wrap:nowrap;padding-bottom:4px}.reservation-subtabs .tab,.tabs.wrap .tab{white-space:nowrap;flex:0 0 auto}}@media(max-width:480px){.mobile-menu-overlay{align-items:flex-start;padding:8px}.mobile-menu-content{width:100%;max-width:none;border-radius:16px;padding:56px 16px 16px}.main-content{padding:14px!important}.heading-primary,.page-title{font-size:22px;line-height:1.25}.nav-card{padding:16px 10px}.table-actions{gap:6px}.action-btn span{display:none}.real-media-grid{grid-template-columns:repeat(2,minmax(0,1fr));gap:.75rem}.real-media-grid .media-thumb{height:92px}.real-bot-card{max-width:none}.chat-segments span{display:none}.real-composer{gap:6px}.chat-icon-btn{width:34px;height:34px}.send-round{width:38px;height:38px}.modal-header{padding:14px 16px}.modal-body{padding:16px}.tabs{gap:6px}.tab{padding:8px 12px}}`;
const responsiveInteractionCss = `@media(max-width:768px){body.chat-show-list .real-conversation-list{display:block!important;width:100%!important;flex:auto!important;border-right:0;border-bottom:1px solid #ddd;border-radius:10px 10px 0 0}body.chat-show-list .real-chat-panel{display:none!important}}`;
const responsiveShrinkCss = `.main-content,.main-content>*,.bots-page>*,.massive-grid>*,.two-col>*,.bot-layout>*,.chat-shell>*,.real-chat-shell>*,.reservation-form-grid>*,.form-grid>*,.summary-grid>*{min-width:0}@media(max-width:1199px){.massive-grid{grid-template-columns:minmax(0,1fr)!important}}@media(max-width:991px){.bots-page{grid-template-columns:minmax(0,1fr)!important}}@media(max-width:768px){.table-wrap{max-width:100%;min-width:0}.data-table{max-width:none}.massive-form,.massive-table-block,.bots-left,.bots-right,.settings-section,.media-section,.form-section{min-width:0;width:100%}.upload-form>*{min-width:0}.segmented{max-width:100%;overflow:auto}.real-client-item{min-width:0}.client-copy,.chat-person{min-width:0}}`;
const finalCss = css + extraCss + reservationCss + responsiveCss + responsiveInteractionCss + responsiveShrinkCss;
const responsiveJs = `if(window.innerWidth<=768&&document.querySelector('.real-chat-shell')){document.body.classList.add('chat-show-list');}window.addEventListener('resize',()=>{if(window.innerWidth>768){document.body.classList.remove('chat-show-list','mobile-menu-open');}});document.addEventListener('click',event=>{if(event.target.closest('[data-chat-back]')){event.preventDefault();document.body.classList.add('chat-show-list');}if(event.target.closest('.real-client-item')){document.body.classList.remove('chat-show-list');}});`;
const finalJs = js + responsiveJs;
const inlinePage = (html) => html
  .replace('<link rel="stylesheet" href="wireframes.css">', `<style>${finalCss}</style>`)
  .replace('<script src="wireframes.js"></script>', `<script>${finalJs}</script>`);

const files = {
  'wireframes.css': finalCss,
  'wireframes.js': finalJs,
  'inicio.html': inlinePage(home),
  'bots.html': inlinePage(bots),
  'clientes.html': inlinePage(clients),
  'chat.html': inlinePage(chat),
  'configuracion.html': inlinePage(settings),
  'multimedia.html': inlinePage(media),
  'envio-masivo.html': inlinePage(massive),
  'catalogo.html': inlinePage(catalog),
  'pedidos.html': inlinePage(orders),
  'reservas.html': inlinePage(reservations),
};

for (const [file, contents] of Object.entries(files)) {
  writeFileSync(new URL(file, import.meta.url), `${contents}\n`, 'utf8');
}
