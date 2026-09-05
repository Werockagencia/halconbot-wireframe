document.addEventListener('click',event=>{if(event.target.closest('.delete-chip')){event.preventDefault();event.stopPropagation();return;}if(event.target.closest('[data-mobile-menu-open]')){event.preventDefault();document.body.classList.add('mobile-menu-open');return;}if(event.target.closest('[data-mobile-menu-close]')||event.target.matches('[data-mobile-menu-overlay]')){event.preventDefault();document.body.classList.remove('mobile-menu-open');return;}if(event.target.closest('.mobile-nav a')){document.body.classList.remove('mobile-menu-open');}const open=event.target.closest('[data-open-modal]');if(open){event.preventDefault();document.querySelector(open.getAttribute('data-open-modal'))?.classList.add('open');}const close=event.target.closest('[data-close-modal],.modal-layer.open');if(close&&(!event.target.closest('.modal-card')||event.target.closest('[data-close-modal]'))){event.preventDefault();event.target.closest('.modal-layer')?.classList.remove('open');}const toggle=event.target.closest('[data-toggle-class]');if(toggle){event.preventDefault();document.querySelector(toggle.dataset.target)?.classList.toggle(toggle.dataset.toggleClass);}if(event.target.closest('[data-sidebar-toggle]')){document.body.classList.toggle('sidebar-collapsed');}const tab=event.target.closest('[data-tab]');if(tab){const root=tab.closest('[data-tabs]');if(root){event.preventDefault();const name=tab.dataset.tab;root.querySelectorAll(':scope > .tabs [data-tab]').forEach(b=>b.classList.toggle('active',b.dataset.tab===name));root.querySelectorAll(':scope > [data-tab-panel]').forEach(panel=>panel.classList.toggle('hidden',panel.dataset.tabPanel!==name));root.querySelectorAll(':scope > .reservation-panel-heads [data-reservation-head]').forEach(head=>head.classList.toggle('hidden',head.dataset.reservationHead!==name));}}const segmented=event.target.closest('[data-segmented] button');if(segmented){segmented.parentElement.querySelectorAll('button').forEach(btn=>btn.classList.toggle('active',btn===segmented));}const mediaFilter=event.target.closest('.real-media-filters button');if(mediaFilter){mediaFilter.parentElement.querySelectorAll('button').forEach(btn=>btn.classList.toggle('active',btn===mediaFilter));}const client=event.target.closest('.real-client-item');if(client){client.closest('.client-scroll').querySelectorAll('.real-client-item').forEach(btn=>btn.classList.toggle('active',btn===client));}const chip=event.target.closest('.massive-list-chip button:first-child');if(chip){chip.closest('.massive-list-row').querySelectorAll('.massive-list-chip').forEach(item=>item.classList.toggle('active',item.contains(chip)));}});document.addEventListener('change',event=>{const select=event.target.closest('[data-template-select]');if(select){const details=select.closest('.massive-form').querySelector('.massive-template-details');details?.classList.toggle('hidden',select.selectedIndex===0);}});document.querySelectorAll('[data-check-all]').forEach(box=>box.addEventListener('change',()=>{box.closest('table').querySelectorAll('tbody input[type=checkbox]').forEach(cb=>cb.checked=box.checked)}));document.addEventListener('keydown',event=>{if(event.key==='Escape'){document.body.classList.remove('mobile-menu-open');document.querySelectorAll('.modal-layer.open').forEach(m=>m.classList.remove('open'));}});if(window.innerWidth<=768&&document.querySelector('.real-chat-shell')){document.body.classList.add('chat-show-list');}window.addEventListener('resize',()=>{if(window.innerWidth>768){document.body.classList.remove('chat-show-list','mobile-menu-open');}});document.addEventListener('click',event=>{if(event.target.closest('[data-chat-back]')){event.preventDefault();document.body.classList.add('chat-show-list');}if(event.target.closest('.real-client-item')){document.body.classList.remove('chat-show-list');}});(function(){function paint(t){document.querySelectorAll('[data-theme-toggle]').forEach(function(g){g.querySelectorAll('[data-theme-set]').forEach(function(b){b.classList.toggle('active',b.dataset.themeSet===t);});});}paint(document.documentElement.getAttribute('data-theme')||'light');document.addEventListener('click',function(event){var b=event.target.closest('[data-theme-set]');if(!b)return;var t=b.dataset.themeSet;document.documentElement.setAttribute('data-theme',t);try{localStorage.setItem('halconbot-theme',t);}catch(e){}paint(t);});})();(function(){document.addEventListener('click',function(event){var sw=event.target.closest('[data-swatch]');if(!sw)return;var group=sw.closest('[data-swatch-group]');if(group)group.querySelectorAll('[data-swatch]').forEach(function(b){b.classList.toggle('active',b===sw);});var modal=sw.closest('.modal-card');var preview=modal&&modal.querySelector('[data-segment-preview]');if(preview)preview.className='pill '+sw.dataset.swatch;});document.addEventListener('input',function(event){var inp=event.target.closest('[data-segment-preview-name]');if(!inp)return;var modal=inp.closest('.modal-card');var preview=modal&&modal.querySelector('[data-segment-preview]');if(preview)preview.textContent=inp.value.trim()||'Nombre del segmento';});})();(function(){
  var START=8,END=19,TOTAL=(END-START)*2;
  function pad(n){return String(n).padStart(2,'0');}
  function timeLabel(row){var mins=START*60+row*30;return pad(Math.floor(mins/60))+':'+pad(mins%60);}
  function rowFromY(col,clientY){
    var rect=col.getBoundingClientRect();
    var ratio=(clientY-rect.top)/rect.height;
    ratio=Math.max(0,Math.min(1,ratio));
    return Math.round(ratio*TOTAL*2)/2;
  }
  var dragging=null;
  function ghostFor(col){
    var g=col.querySelector('.cal-selection');
    if(!g){g=document.createElement('div');g.className='cal-selection';g.innerHTML='<span></span>';col.appendChild(g);}
    return g;
  }
  function clearGhosts(){document.querySelectorAll('.cal-selection').forEach(function(g){g.remove();});}
  function paintGhost(d){
    var r1=Math.min(d.startRow,d.endRow),r2=Math.max(d.startRow,d.endRow);
    if(r2-r1<1)r2=r1+1;
    var g=ghostFor(d.col);
    g.style.top=(r1/TOTAL*100)+'%';
    g.style.height=((r2-r1)/TOTAL*100)+'%';
    g.querySelector('span').textContent=timeLabel(r1)+' – '+timeLabel(r2);
  }
  function openReservationFor(col,r1,r2){
    var modal=document.getElementById('reservation-modal');
    if(!modal)return;
    var iso=col.dataset.dayIso,label=col.dataset.dayLabel,date=col.dataset.dayDate;
    var dateInput=modal.querySelector('[data-reservation-date]');
    if(dateInput&&iso)dateInput.value=iso;
    var wrap=modal.querySelector('[data-slot-summary-wrap]');
    var summary=modal.querySelector('[data-slot-summary]');
    if(summary)summary.textContent=label+' '+date+' · '+timeLabel(r1)+' – '+timeLabel(r2)+' seleccionado en el calendario';
    if(wrap)wrap.classList.remove('hidden');
    modal.classList.add('open');
  }
  document.addEventListener('mousedown',function(e){
    var col=e.target.closest('.cal-day-col');
    if(!col)return;
    if(e.target.closest('.cal-event'))return;
    e.preventDefault();
    clearGhosts();
    var row=rowFromY(col,e.clientY);
    dragging={col:col,startRow:row,endRow:row};
    paintGhost(dragging);
  });
  document.addEventListener('mousemove',function(e){
    if(!dragging)return;
    dragging.endRow=rowFromY(dragging.col,e.clientY);
    paintGhost(dragging);
  });
  document.addEventListener('mouseup',function(){
    if(!dragging)return;
    var d=dragging;dragging=null;
    var r1=Math.min(d.startRow,d.endRow),r2=Math.max(d.startRow,d.endRow);
    if(r2-r1<1){r1=Math.max(0,Math.min(d.startRow,TOTAL-2));r2=r1+2;}
    openReservationFor(d.col,r1,r2);
    clearGhosts();
  });
})();(function(){
  var EVENTS = [{"date":"2026-08-31","from":[9,0],"to":[10,0],"title":"Pedicure","person":"Cliente muestra","meta":"David · Venecia 2","tone":"yellow"},{"date":"2026-08-31","from":[11,30],"to":[12,0],"title":"Manicure","person":"Laura Vanessa","meta":"David · Venecia 2","tone":"blue"},{"date":"2026-09-01","from":[10,0],"to":[10,30],"title":"Corte","person":"Tatiana Ruiz","meta":"Cabina principal · Sede Norte","tone":"success"},{"date":"2026-09-01","from":[15,0],"to":[16,0],"title":"Spa","person":"Juan Carlos Garcia","meta":"Cabina principal · Sede Norte","tone":"blue"},{"date":"2026-09-02","from":[9,30],"to":[10,30],"title":"Pedicure","person":"Diana Paola","meta":"David · Venecia 2","tone":"yellow"},{"date":"2026-09-03","from":[14,0],"to":[15,30],"title":"Spa","person":"Aleja Nails","meta":"Cabina principal · Sede Norte","tone":"blue"},{"date":"2026-09-04","from":[11,0],"to":[12,0],"title":"Facial","person":"Yanidy Miranda","meta":"David · Venecia 2","tone":"danger"},{"date":"2026-09-05","from":[10,0],"to":[11,0],"title":"Pedicure","person":"Cliente muestra","meta":"David · Venecia 2","tone":"success"}];
  var WEEK_START = '2026-08-31';
  var TODAY = '2026-09-01';
  var START_H = 8, END_H = 19;
  var DOW = ['Dom','Lun','Mar','Mié','Jue','Vie','Sáb'];
  var MON = ['ene','feb','mar','abr','may','jun','jul','ago','sep','oct','nov','dic'];
  function toDate(iso){var p=iso.split('-');return new Date(+p[0],+p[1]-1,+p[2]);}
  function fmtIso(d){return d.getFullYear()+'-'+String(d.getMonth()+1).padStart(2,'0')+'-'+String(d.getDate()).padStart(2,'0');}
  function addDays(iso,n){var d=toDate(iso);d.setDate(d.getDate()+n);return fmtIso(d);}
  function addMonths(iso,n){var d=toDate(iso);d.setMonth(d.getMonth()+n);return fmtIso(d);}
  function eventsOn(iso){return EVENTS.filter(function(e){return e.date===iso;});}
  function timeStr(t){return String(t[0]).padStart(2,'0')+':'+String(t[1]).padStart(2,'0');}
  function calRow(h,m){return (h-START_H)*2+(m===30?2:1);}
  function agendaRow(e){return '<button type="button" class="cal-agenda-row '+e.tone+'" data-open-modal="#reservation-modal"><b>'+timeStr(e.from)+'</b><div><strong>'+e.title+'</strong><span>'+e.person+' · '+e.meta+'</span></div></button>';}
  function agendaDay(iso,label,dateNum){
    var evs=eventsOn(iso).slice().sort(function(a,b){return (a.from[0]*60+a.from[1])-(b.from[0]*60+b.from[1]);});
    var rows=evs.length?evs.map(agendaRow).join(''):'<div class="cal-agenda-empty">Sin reservas</div>';
    var isToday=iso===TODAY;
    return '<div class="cal-agenda-day"><div class="cal-agenda-day-head'+(isToday?' today':'')+'"><span>'+label+'</span><b>'+dateNum+'</b>'+(isToday?'<i>Hoy</i>':'')+'</div>'+rows+'</div>';
  }
  var state={view:'week',weekOffset:0,dayOffset:0,monthOffset:0};

  function renderWeek(wrap){
    var monday=addDays(WEEK_START,state.weekOffset*7);
    var days=[];for(var i=0;i<7;i++)days.push(addDays(monday,i));
    var s=toDate(days[0]),e=toDate(days[6]);
    var range=s.getDate()+' '+MON[s.getMonth()]+' — '+e.getDate()+' '+MON[e.getMonth()]+' '+e.getFullYear();
    wrap.querySelectorAll('[data-cal-range]').forEach(function(el){el.textContent=range;});
    var heads=wrap.querySelectorAll('.cal-day-head'),cols=wrap.querySelectorAll('.cal-day-col');
    days.forEach(function(iso,i){
      var d=toDate(iso);
      if(heads[i]){heads[i].querySelector('span').textContent=DOW[d.getDay()];heads[i].querySelector('b').textContent=d.getDate();heads[i].classList.toggle('today',iso===TODAY);}
      if(cols[i]){cols[i].dataset.dayIso=iso;cols[i].dataset.dayDate=String(d.getDate());cols[i].dataset.dayLabel=DOW[d.getDay()];}
    });
    var body=wrap.querySelector('[data-cal-week-body]');
    if(body){
      body.querySelectorAll('.cal-event').forEach(function(ev){ev.remove();});
      days.forEach(function(iso,i){
        eventsOn(iso).forEach(function(e){
          var r1=calRow(e.from[0],e.from[1]),r2=calRow(e.to[0],e.to[1]);
          var btn=document.createElement('button');
          btn.type='button';btn.className='cal-event '+e.tone+(r2-r1<=1?' short':'');
          btn.setAttribute('data-open-modal','#reservation-modal');
          btn.title=timeStr(e.from)+' · '+e.title+' · '+e.person;
          btn.style.gridColumn=String(i+2);
          btn.style.gridRow=r1+' / '+r2;
          btn.innerHTML='<strong>'+timeStr(e.from)+' · '+e.title+'</strong><span>'+e.person+'</span><small>'+e.meta+'</small>';
          body.appendChild(btn);
        });
      });
    }
    var mobileList=wrap.querySelector('[data-cal-mobile-list]');
    if(mobileList)mobileList.innerHTML=days.map(function(iso){var d=toDate(iso);return agendaDay(iso,DOW[d.getDay()],d.getDate());}).join('');
  }

  function dayGridHtml(iso,label,dateNum){
    var evs=eventsOn(iso).slice().sort(function(a,b){return (a.from[0]*60+a.from[1])-(b.from[0]*60+b.from[1]);});
    var isToday=iso===TODAY;
    var total=(END_H-START_H)*2;
    var hours=[];for(var h=START_H;h<END_H;h++)hours.push(h);
    var html='<div class="cal-daybar" style="grid-template-columns:56px 1fr"><div class="cal-corner"></div><div class="cal-day-head'+(isToday?' today':'')+'"><span>'+label+'</span><b>'+dateNum+'</b></div></div>';
    html+='<div class="cal-body" style="grid-template-columns:56px 1fr;grid-template-rows:repeat('+total+',minmax(34px,1fr))">';
    html+='<div class="cal-time-col" style="grid-column:1;grid-row:1 / -1"></div>';
    hours.forEach(function(h){html+='<div class="cal-time-label" style="grid-column:1;grid-row:'+calRow(h,0)+' / span 2">'+String(h).padStart(2,'0')+':00</div>';});
    html+='<div class="cal-day-col" data-day-label="'+label+'" data-day-date="'+dateNum+'" data-day-iso="'+iso+'" style="grid-column:2;grid-row:1 / -1"></div>';
    evs.forEach(function(e){
      var r1=calRow(e.from[0],e.from[1]),r2=calRow(e.to[0],e.to[1]);
      var shortCls=(r2-r1<=1)?' short':'';
      html+='<button type="button" class="cal-event '+e.tone+shortCls+'" data-open-modal="#reservation-modal" title="'+timeStr(e.from)+' · '+e.title+' · '+e.person+'" style="grid-column:2;grid-row:'+r1+' / '+r2+'"><strong>'+timeStr(e.from)+' · '+e.title+'</strong><span>'+e.person+'</span><small>'+e.meta+'</small></button>';
    });
    html+='</div>';
    return html;
  }
  function renderDay(wrap){
    var iso=addDays(TODAY,state.dayOffset);
    var d=toDate(iso);
    wrap.querySelectorAll('[data-cal-range]').forEach(function(el){el.textContent=DOW[d.getDay()]+' '+d.getDate()+' '+MON[d.getMonth()]+' '+d.getFullYear();});
    var grid=wrap.querySelector('[data-cal-day-grid]');
    if(grid)grid.innerHTML=dayGridHtml(iso,DOW[d.getDay()],d.getDate());
    var mobile=wrap.querySelector('[data-cal-day-mobile]');
    if(mobile)mobile.innerHTML=agendaDay(iso,DOW[d.getDay()],d.getDate());
  }

  function renderMonth(wrap){
    var base=addMonths(TODAY,state.monthOffset);
    var bd=toDate(base),year=bd.getFullYear(),month=bd.getMonth();
    wrap.querySelectorAll('[data-cal-range]').forEach(function(el){el.textContent=MON[month].charAt(0).toUpperCase()+MON[month].slice(1)+' '+year;});
    var first=new Date(year,month,1);
    var firstDow=(first.getDay()+6)%7;
    var gridStart=new Date(year,month,1-firstDow);
    var host=wrap.querySelector('[data-cal-month-body]');
    if(!host)return;
    var html='<div class="cal-month-grid">';
    ['Lun','Mar','Mié','Jue','Vie','Sáb','Dom'].forEach(function(l){html+='<div class="cal-month-dow">'+l+'</div>';});
    for(var i=0;i<42;i++){
      var cd=new Date(gridStart);cd.setDate(gridStart.getDate()+i);
      var iso=fmtIso(cd),inMonth=cd.getMonth()===month,isToday=iso===TODAY;
      var evs=eventsOn(iso);
      var chips=evs.slice(0,2).map(function(e){return '<span class="cal-month-chip '+e.tone+'">'+timeStr(e.from)+' '+e.title+'</span>';}).join('');
      var more=evs.length>2?'<span class="cal-month-more">+'+(evs.length-2)+' más</span>':'';
      html+='<button type="button" class="cal-month-cell'+(inMonth?'':' outside')+(isToday?' today':'')+'" data-open-cal-day="'+iso+'"><b>'+cd.getDate()+'</b>'+chips+more+'</button>';
    }
    html+='</div>';
    host.innerHTML=html;
  }

  function render(wrap){
    if(state.view==='week')renderWeek(wrap);
    else if(state.view==='day')renderDay(wrap);
    else renderMonth(wrap);
  }

  document.addEventListener('click',function(e){
    var opener=e.target.closest('[data-open-modal="#reservation-modal"]');
    if(opener && !opener.classList.contains('cal-event') && !opener.classList.contains('cal-agenda-row')){
      var m=document.getElementById('reservation-modal');
      var w=m&&m.querySelector('[data-slot-summary-wrap]');
      if(w)w.classList.add('hidden');
    }
    var tabBtn=e.target.closest('[data-tab]');
    if(tabBtn){
      var wrap=tabBtn.closest('[data-cal-wrap]');
      if(wrap){
        state.view=tabBtn.dataset.tab;
        wrap.querySelectorAll('.segmented [data-tab]').forEach(function(b){b.classList.toggle('active',b===tabBtn);});
        render(wrap);
      }
      return;
    }
    var navBtn=e.target.closest('[data-cal-prev],[data-cal-next],[data-cal-today]');
    if(navBtn){
      var wrap2=navBtn.closest('[data-cal-wrap]');
      if(!wrap2)return;
      if(navBtn.hasAttribute('data-cal-today')){state.weekOffset=0;state.dayOffset=0;state.monthOffset=0;}
      else{
        var dir=navBtn.hasAttribute('data-cal-prev')?-1:1;
        if(state.view==='week')state.weekOffset+=dir;
        else if(state.view==='day')state.dayOffset+=dir;
        else state.monthOffset+=dir;
      }
      render(wrap2);
      return;
    }
    var monthCell=e.target.closest('[data-open-cal-day]');
    if(monthCell){
      var wrap3=monthCell.closest('[data-cal-wrap]');
      if(!wrap3)return;
      var iso2=monthCell.getAttribute('data-open-cal-day');
      state.view='day';
      state.dayOffset=Math.round((toDate(iso2)-toDate(TODAY))/86400000);
      wrap3.querySelectorAll('.segmented [data-tab]').forEach(function(b){b.classList.toggle('active',b.dataset.tab==='day');});
      wrap3.querySelectorAll(':scope > [data-tab-panel]').forEach(function(p){p.classList.toggle('hidden',p.dataset.tabPanel!=='day');});
      render(wrap3);
    }
  });

  document.querySelectorAll('[data-cal-wrap]').forEach(function(wrap){renderWeek(wrap);});
})();(function(){
  var CHECK_ICON = "<svg viewBox=\"0 0 24 24\"><path d=\"M20 6 9 17l-5-5\"/></svg>";
  var INFO_ICON = "<svg viewBox=\"0 0 24 24\"><path d=\"M6 8a6 6 0 0 1 12 0c0 5 2 6 2 6H4s2-1 2-6\"/><path d=\"M10 20a2 2 0 0 0 4 0\"/></svg>";
  var EYE_ICON = "<svg viewBox=\"0 0 24 24\"><path d=\"M1.5 12S5 5 12 5s10.5 7 10.5 7-3.5 7-10.5 7S1.5 12 1.5 12Z\"/><circle cx=\"12\" cy=\"12\" r=\"3\"/></svg>";
  var EYE_OFF_ICON = "<svg viewBox=\"0 0 24 24\"><path d=\"M3 3l18 18\"/><path d=\"M10.6 5.1A10.9 10.9 0 0 1 12 5c7 0 10.5 7 10.5 7a13.5 13.5 0 0 1-3.1 4\"/><path d=\"M6.5 6.6C3.4 8.5 1.5 12 1.5 12s3.5 7 10.5 7a10.5 10.5 0 0 0 4.2-.9\"/><path d=\"M9.9 10a3 3 0 0 0 4.1 4.1\"/></svg>";

  function showToast(msg,type){
    type = type || 'success';
    var stack = document.querySelector('[data-toast-stack]');
    if(!stack) return;
    var t = document.createElement('div');
    t.className = 'toast '+type;
    t.innerHTML = '<span class="toast-icon">'+(type==='success'?CHECK_ICON:INFO_ICON)+'</span><span>'+msg+'</span>';
    stack.appendChild(t);
    requestAnimationFrame(function(){t.classList.add('show');});
    setTimeout(function(){
      t.classList.remove('show');
      setTimeout(function(){t.remove();},250);
    },3400);
  }
  window.HBToast = showToast;

  var confirmAcceptCb = null;
  function openConfirm(opts){
    var modal = document.getElementById('confirm-modal');
    if(!modal) return;
    modal.querySelector('[data-confirm-title]').textContent = opts.title || '¿Confirmar acción?';
    modal.querySelector('[data-confirm-message]').textContent = opts.message || '';
    confirmAcceptCb = opts.onAccept || null;
    modal.classList.add('open');
  }
  window.HBConfirm = openConfirm;

  function fakeToken(prefix){
    return prefix+'_'+Math.random().toString(36).slice(2,10)+Math.random().toString(36).slice(2,10);
  }

  document.addEventListener('click',function(e){
    var accept = e.target.closest('[data-confirm-accept]');
    if(accept){
      var modal = document.getElementById('confirm-modal');
      if(modal) modal.classList.remove('open');
      var cb = confirmAcceptCb;
      confirmAcceptCb = null;
      if(cb) cb();
      return;
    }
    var toastBtn = e.target.closest('[data-toast]');
    if(toastBtn){
      showToast(toastBtn.getAttribute('data-toast'), toastBtn.getAttribute('data-toast-type')||'success');
    }
    var genBtn = e.target.closest('[data-generate]');
    if(genBtn){
      var targetId = genBtn.getAttribute('data-generate');
      var input = document.getElementById(targetId);
      if(input){
        input.value = fakeToken('hb');
        input.type = 'text';
        var wrap = input.closest('.secret-input-wrap');
        var toggle = wrap && wrap.querySelector('[data-secret-toggle]');
        if(toggle){toggle.innerHTML = EYE_OFF_ICON;toggle.title='Ocultar';}
      }
    }
    var secretToggle = e.target.closest('[data-secret-toggle]');
    if(secretToggle){
      var inp = secretToggle.closest('.secret-input-wrap').querySelector('[data-secret-input]');
      if(inp){
        var showing = inp.type==='text';
        inp.type = showing ? 'password' : 'text';
        secretToggle.innerHTML = showing ? EYE_ICON : EYE_OFF_ICON;
        secretToggle.title = showing ? 'Mostrar' : 'Ocultar';
      }
    }
    var langBtn = e.target.closest('[data-set-language]');
    if(langBtn){
      var code = langBtn.getAttribute('data-set-language');
      var label = code === 'EN' ? 'English' : 'Español';
      document.querySelectorAll('.language-selector').forEach(function(sel){
        var codeEl = sel.querySelector('span');
        var labelEl = sel.querySelector('strong');
        if(codeEl) codeEl.textContent = code;
        if(labelEl) labelEl.textContent = label;
      });
      var panel = langBtn.closest('.dropdown-panel');
      if(panel) panel.classList.remove('open');
      showToast('Idioma cambiado a ' + label, 'success');
    }
  });

  document.querySelectorAll('[data-secret-toggle]').forEach(function(b){b.innerHTML=EYE_ICON;});
})();(function(){
  var listCounts = {"Listas para comprar":214,"Seguimiento de pedido":187,"Emprendedora belleza":96,"Seguimiento de cliente":142,"Negocios con cita agendada":2,"Clientas VIP":3};
  var page = document.querySelector('.massive-page');
  if(!page) return;
  var sendBtn = document.querySelector('.massive-form [data-send-campaign]');
  var nameInput = document.querySelector('.massive-form input[placeholder="Ingresa el nombre del envío"]');
  var templateSelect = document.querySelector('.massive-form [data-template-select]');
  var listSelect = document.querySelectorAll('.massive-form select')[1];
  var tbody = document.querySelector('#massive-sends-block tbody');

  if(sendBtn){
    sendBtn.addEventListener('click',function(){
      var listName = listSelect ? listSelect.value : '';
      var count = listCounts[listName] || 0;
      if(!listSelect || listSelect.selectedIndex===0){
        window.HBToast('Selecciona una lista de clientes antes de enviar','info');
        return;
      }
      window.HBConfirm({
        title:'¿Enviar esta campaña?',
        message:'Vas a escribirle por WhatsApp a '+count+' personas de la lista "'+listName+'". Esta acción no se puede deshacer.',
        onAccept:function(){
          var name = (nameInput && nameInput.value.trim()) || 'Envío sin nombre';
          var tmpl = templateSelect ? templateSelect.value : '';
          if(tbody){
            var tr = document.createElement('tr');
            tr.innerHTML = '<td>'+name+'</td><td>'+tmpl+'</td><td>'+listName+'</td><td>Ahora</td><td><span class="pill success">Enviado</span></td>';
            tbody.insertBefore(tr, tbody.firstChild);
          }
          window.HBToast('Campaña enviada a '+count+' personas','success');
          if(nameInput) nameInput.value='';
        }
      });
    });
  }
})();(function(){
  var SEGMENT_VALUES = ["Interés en producto","Seguimiento de pedido","Requiere contacto","Emprendedora belleza","Listas para comprar","Seguimiento de cliente"];
  var PIPELINE_VALUES = ["Nuevo lead","Calificado","Cita agendada","Cotización enviada","Ganado"];
  var SEGMENT_COUNTS = {"Interés en producto":233,"Seguimiento de pedido":187,"Requiere contacto":58,"Emprendedora belleza":96,"Listas para comprar":214,"Seguimiento de cliente":142};
  var PIPELINE_COUNTS = {"Nuevo lead":2,"Calificado":2,"Cita agendada":2,"Cotización enviada":1,"Ganado":1};
  var listModal = document.getElementById('list-modal');
  if(listModal){
    var typeToggle = listModal.querySelector('[data-list-type-toggle]');
    var dynamicBlock = listModal.querySelector('[data-list-dynamic]');
    var manualBlock = listModal.querySelector('[data-list-manual]');
    var rulesWrap = listModal.querySelector('[data-list-rules]');
    var preview = listModal.querySelector('[data-rule-preview]');
    function valuesFor(source){ return source === 'Etapa de pipeline' ? PIPELINE_VALUES : SEGMENT_VALUES; }
    function countFor(source, value){ return (source === 'Etapa de pipeline' ? PIPELINE_COUNTS : SEGMENT_COUNTS)[value] || 0; }
    function refreshValueSelect(row){
      var sourceSel = row.querySelector('[data-rule-source]');
      var valueSel = row.querySelector('[data-rule-value]');
      if(!sourceSel || !valueSel) return;
      var vals = valuesFor(sourceSel.value);
      valueSel.innerHTML = vals.map(function(v){ return '<option>'+v+'</option>'; }).join('');
    }
    function updatePreview(){
      var rows = rulesWrap.querySelectorAll('.list-rule-row');
      var total = 0;
      rows.forEach(function(row){
        var sourceSel = row.querySelector('[data-rule-source]');
        var valueSel = row.querySelector('[data-rule-value]');
        if(sourceSel && valueSel) total += countFor(sourceSel.value, valueSel.value);
      });
      if(preview) preview.textContent = '≈ ' + total + ' cliente' + (total === 1 ? '' : 's') + ' coinciden';
    }
    if(typeToggle){
      typeToggle.addEventListener('click', function(e){
        var b = e.target.closest('[data-list-type]');
        if(!b) return;
        typeToggle.querySelectorAll('button').forEach(function(btn){ btn.classList.toggle('active', btn === b); });
        var isDynamic = b.dataset.listType === 'dinamica';
        if(dynamicBlock) dynamicBlock.classList.toggle('hidden', !isDynamic);
        if(manualBlock) manualBlock.classList.toggle('hidden', isDynamic);
      });
    }
    if(rulesWrap){
      rulesWrap.addEventListener('change', function(e){
        var row = e.target.closest('.list-rule-row');
        if(!row) return;
        if(e.target.matches('[data-rule-source]')) refreshValueSelect(row);
        updatePreview();
      });
    }
    var addRuleBtn = listModal.querySelector('[data-add-rule]');
    if(addRuleBtn){
      addRuleBtn.addEventListener('click', function(){
        var rows = rulesWrap.querySelectorAll('.list-rule-row');
        var clone = rows[rows.length - 1].cloneNode(true);
        rulesWrap.appendChild(clone);
        updatePreview();
      });
    }
    listModal.addEventListener('click', function(e){
      var removeBtn = e.target.closest('.list-rule-remove');
      if(!removeBtn) return;
      var rows = rulesWrap.querySelectorAll('.list-rule-row');
      if(rows.length > 1){ removeBtn.closest('.list-rule-row').remove(); updatePreview(); }
    });
    updatePreview();
  }
  var addListModal = document.getElementById('add-to-list-modal');
  var selectedCount = 0;
  document.addEventListener('click', function(e){
    var trigger = e.target.closest('[data-bulk-add-list]');
    if(trigger){
      var table = trigger.closest('[data-bulk-table]');
      selectedCount = table ? table.querySelectorAll('[data-bulk-row]:checked').length : 0;
      var countLabel = addListModal && addListModal.querySelector('[data-add-list-count]');
      if(countLabel) countLabel.textContent = 'Agregar ' + selectedCount + ' cliente' + (selectedCount === 1 ? '' : 's') + ' seleccionado' + (selectedCount === 1 ? '' : 's') + ' a una lista manual.';
      return;
    }
    var confirmBtn = e.target.closest('[data-confirm-add-list]');
    if(confirmBtn && addListModal){
      var select = addListModal.querySelector('[data-add-list-select]');
      var newNameInput = addListModal.querySelector('[data-add-list-new-name]');
      var listName = select && select.value === '__new__' ? ((newNameInput && newNameInput.value.trim()) || 'Nueva lista') : (select ? select.value : '');
      addListModal.classList.remove('open');
      if(window.HBToast) window.HBToast(selectedCount + ' cliente' + (selectedCount === 1 ? '' : 's') + ' agregado' + (selectedCount === 1 ? '' : 's') + ' a "' + listName + '"', 'success');
    }
  });
  document.addEventListener('change', function(e){
    var select = e.target.closest('[data-add-list-select]');
    if(!select || !addListModal) return;
    var newField = addListModal.querySelector('[data-add-list-new]');
    if(newField) newField.classList.toggle('hidden', select.value !== '__new__');
  });
})();(function(){
  document.addEventListener('click',function(e){
    var delBtn = e.target.closest('.row-action-btn.danger, .delete-chip');
    if(!delBtn || delBtn.hasAttribute('data-no-confirm')) return;
    e.preventDefault();
    var container = delBtn.closest('tr, .real-bot-card, .media-card, .cuenta-card, .payment-method-row');
    var label = '';
    if(container){
      var nameEl = container.querySelector('.strong-text, strong');
      if(nameEl) label = nameEl.textContent.trim();
    }
    var verb = delBtn.getAttribute('title') || 'Eliminar';
    window.HBConfirm({
      title: '¿'+verb+(label ? ' "'+label+'"' : '')+'?',
      message: 'Esta acción no se puede deshacer.',
      onAccept: function(){
        if(container){
          container.style.transition = 'opacity .2s ease, transform .2s ease';
          container.style.opacity = '0';
          container.style.transform = 'scale(.97)';
          setTimeout(function(){ container.remove(); }, 200);
        }
        window.HBToast((label || 'Elemento') + (verb.toLowerCase().indexOf('revocar')===0 ? ' revocado' : ' eliminado'), 'success');
      }
    });
  });
})();(function(){
  var ctx = document.getElementById('chat-context');
  var toggleBtn = document.querySelector('.chat-context-toggle');
  if(ctx){
    var KEY = 'halconbot-chat-context';
    var pref = null;
    try{ pref = localStorage.getItem(KEY); }catch(e){}
    var shouldOpen = pref ? pref === 'open' : window.innerWidth >= 1300;
    ctx.classList.toggle('open', shouldOpen);
    if(toggleBtn) toggleBtn.classList.toggle('active', shouldOpen);
    document.addEventListener('click', function(e){
      if(!e.target.closest('[data-toggle-class][data-target="#chat-context"]')) return;
      var isOpen = ctx.classList.contains('open');
      if(toggleBtn) toggleBtn.classList.toggle('active', isOpen);
      try{ localStorage.setItem(KEY, isOpen ? 'open' : 'closed'); }catch(err){}
    });
  }
  document.addEventListener('click', function(e){
    var card = e.target.closest('.chat-context-order');
    if(!card) return;
    var targetSel = card.getAttribute('data-open-modal');
    if(targetSel === '#chat-reservation-modal'){
      var apptModal = document.getElementById('chat-reservation-modal');
      if(!apptModal) return;
      var apptStatusEl = apptModal.querySelector('[data-chat-appt-status]');
      if(apptStatusEl){
        apptStatusEl.textContent = card.dataset.apptStatus || '';
        apptStatusEl.className = 'pill ' + (card.dataset.apptTone || 'neutral');
      }
      var apptDateEl = apptModal.querySelector('[data-chat-appt-date]'); if(apptDateEl) apptDateEl.textContent = card.dataset.apptDate || '';
      var apptProEl = apptModal.querySelector('[data-chat-appt-pro]'); if(apptProEl) apptProEl.textContent = card.dataset.apptPro || '';
      var apptServiceEl = apptModal.querySelector('[data-chat-appt-service]'); if(apptServiceEl) apptServiceEl.textContent = card.dataset.apptService || '';
      var apptFinanceEl = apptModal.querySelector('[data-chat-appt-finance]');
      if(apptFinanceEl) apptFinanceEl.textContent = 'Total ' + (card.dataset.apptTotal || '') + ' · Pagado ' + (card.dataset.apptPaid || '');
      return;
    }
    var modal = document.getElementById('chat-order-modal');
    if(!modal) return;
    var titleEl = modal.querySelector('.modal-header h2');
    var statusEl = modal.querySelector('[data-chat-order-status]');
    var dateEl = modal.querySelector('[data-chat-order-date]');
    var totalEl = modal.querySelector('[data-chat-order-total]');
    var productEl = modal.querySelector('[data-chat-order-product]');
    if(titleEl) titleEl.textContent = 'Pedido ' + (card.dataset.orderId || '');
    if(statusEl){
      statusEl.textContent = card.dataset.orderStatus || '';
      statusEl.className = 'pill ' + (card.dataset.orderTone || 'neutral');
    }
    if(dateEl) dateEl.textContent = card.dataset.orderDate || '';
    if(totalEl) totalEl.textContent = card.dataset.orderTotal || '';
    if(productEl) productEl.textContent = card.dataset.orderProduct || '';
  });
})();(function(){
  var board = document.querySelector('[data-pipeline-board]');
  if(!board) return;
  var STAGE_LINKS = {"nuevo":null,"calificado":null,"cita":{"module":"Reservas","href":"reservas.html","label":"Ver en Reservas","icon":"reservations"},"cotizacion":{"module":"Pedidos","href":"pedidos.html","label":"Ver cotización","icon":"orders"},"ganado":{"module":"Pedidos","href":"pedidos.html","label":"Crear pedido","icon":"orders"}};
  var STAGE_ICONS = {"reservations":"<svg viewBox=\"0 0 24 24\"><rect x=\"3\" y=\"4\" width=\"18\" height=\"18\" rx=\"2\"/><path d=\"M16 2v4\"/><path d=\"M8 2v4\"/><path d=\"M3 10h18\"/><path d=\"m9 16 2 2 4-4\"/></svg>","orders":"<svg viewBox=\"0 0 24 24\"><path d=\"M4 2v20l2-1 2 1 2-1 2 1 2-1 2 1 2-1 2 1V2Z\"/><path d=\"M8 7h8\"/><path d=\"M8 11h8\"/><path d=\"M8 15h5\"/></svg>"};
  function fmtCOP(n){return 'COP ' + String(Math.round(n)).replace(/\B(?=(\d{3})+(?!\d))/g, '.');}
  function fillText(modal, sel, val){ var el = modal.querySelector(sel); if(el) el.textContent = val || ''; }
  function openDetailModal(card){
    var modal = document.getElementById('pipeline-detail-modal');
    if(!modal) return;
    var stageKey = card.dataset.stage;
    var stageCol = card.closest('.pipe-col');
    var stageLabel = stageCol ? stageCol.querySelector('h4').textContent : '';
    fillText(modal, '[data-pd-name]', card.dataset.name);
    fillText(modal, '[data-pd-segment]', card.dataset.segment);
    fillText(modal, '[data-pd-stage]', stageLabel);
    fillText(modal, '[data-pd-value]', fmtCOP(Number(card.dataset.value || 0)));
    fillText(modal, '[data-pd-note]', card.dataset.note);
    var apptBlock = modal.querySelector('[data-pd-appt]');
    var orderBlock = modal.querySelector('[data-pd-order]');
    if(card.dataset.apptDate){
      apptBlock.classList.remove('hidden');
      var total = Number(card.dataset.value || 0);
      var paid = Number(card.dataset.apptPaid || 0);
      fillText(modal, '[data-pd-appt-date]', card.dataset.apptDate);
      fillText(modal, '[data-pd-appt-service]', card.dataset.apptService);
      fillText(modal, '[data-pd-appt-pro]', card.dataset.apptPro);
      fillText(modal, '[data-pd-appt-total]', fmtCOP(total));
      fillText(modal, '[data-pd-appt-paid]', fmtCOP(paid));
      fillText(modal, '[data-pd-appt-balance]', fmtCOP(total - paid));
    } else {
      apptBlock.classList.add('hidden');
    }
    if(card.dataset.orderProduct){
      orderBlock.classList.remove('hidden');
      fillText(modal, '[data-pd-order-product]', card.dataset.orderProduct);
      fillText(modal, '[data-pd-order-status]', card.dataset.orderStatus);
    } else {
      orderBlock.classList.add('hidden');
    }
    var linkWrap = modal.querySelector('[data-pd-link-wrap]');
    var linkEl = modal.querySelector('[data-pd-link]');
    var linkInfo = STAGE_LINKS[stageKey];
    if(linkInfo){
      linkWrap.classList.remove('hidden');
      linkEl.href = linkInfo.href;
      linkEl.textContent = linkInfo.label;
    } else {
      linkWrap.classList.add('hidden');
    }
    modal.classList.add('open');
  }
  board.addEventListener('click', function(e){
    if(e.target.closest('a')) return;
    var card = e.target.closest('.pipe-card');
    if(!card) return;
    openDetailModal(card);
  });
  function updateColumn(col){
    if(!col) return;
    var drop = col.querySelector('[data-stage-drop]');
    var cards = drop.querySelectorAll('.pipe-card');
    var total = 0;
    cards.forEach(function(c){ total += Number(c.dataset.value || 0); });
    col.querySelector('[data-stage-count]').textContent = cards.length;
    col.querySelector('[data-stage-total]').textContent = fmtCOP(total);
  }
  board.addEventListener('dragstart', function(e){
    var card = e.target.closest('.pipe-card');
    if(!card) return;
    card.classList.add('dragging');
    e.dataTransfer.effectAllowed = 'move';
    e.dataTransfer.setData('text/plain', '');
  });
  board.addEventListener('dragend', function(e){
    var card = e.target.closest('.pipe-card');
    if(card) card.classList.remove('dragging');
    board.querySelectorAll('.pipe-col-drop.drag-over').forEach(function(d){ d.classList.remove('drag-over'); });
  });
  board.addEventListener('dragover', function(e){
    var drop = e.target.closest('[data-stage-drop]');
    if(!drop) return;
    e.preventDefault();
    drop.classList.add('drag-over');
  });
  board.addEventListener('dragleave', function(e){
    var drop = e.target.closest('[data-stage-drop]');
    if(drop && !drop.contains(e.relatedTarget)) drop.classList.remove('drag-over');
  });
  board.addEventListener('drop', function(e){
    var drop = e.target.closest('[data-stage-drop]');
    if(!drop) return;
    e.preventDefault();
    drop.classList.remove('drag-over');
    var card = board.querySelector('.pipe-card.dragging');
    if(!card) return;
    var fromCol = card.closest('.pipe-col');
    var toCol = drop.closest('.pipe-col');
    if(toCol === fromCol){ drop.appendChild(card); return; }
    drop.appendChild(card);
    var stageKey = drop.dataset.stageDrop;
    card.dataset.stage = stageKey;
    updateColumn(fromCol);
    updateColumn(toCol);
    var existingLink = card.querySelector('.pipe-card-link');
    if(existingLink) existingLink.remove();
    var linkInfo = STAGE_LINKS[stageKey];
    if(linkInfo){
      var a = document.createElement('a');
      a.className = 'pipe-card-link';
      a.href = linkInfo.href;
      a.innerHTML = (STAGE_ICONS[linkInfo.icon] || '') + ' ' + linkInfo.label;
      card.appendChild(a);
    }
    var name = card.querySelector('.pipe-card-head strong');
    var stageName = toCol.querySelector('h4');
    if(window.HBToast && name && stageName){
      if(linkInfo){
        window.HBToast('<strong>' + name.textContent + '</strong> movido a "' + stageName.textContent + '" — <a href="' + linkInfo.href + '" style="color:inherit;text-decoration:underline">' + linkInfo.label.toLowerCase() + ' →</a>', 'success');
      } else {
        window.HBToast(name.textContent + ' movido a "' + stageName.textContent + '"', 'success');
      }
    }
  });
})();(function(){
  document.addEventListener('click', function(e){
    var trigger = e.target.closest('[data-plan-switch]');
    if(!trigger || !window.HBConfirm) return;
    var planName = trigger.dataset.planSwitch;
    window.HBConfirm({
      title: '¿Cambiar tu plan a "' + planName + '"?',
      message: 'El cambio se aplica de inmediato y se refleja en tu próxima factura.',
      onAccept: function(){
        document.querySelectorAll('.plan-card').forEach(function(card){
          var nameEl = card.querySelector('.plan-name');
          var ctaBtn = card.querySelector('.plan-cta');
          var badge = card.querySelector('.plan-badge');
          if(!nameEl || !ctaBtn) return;
          var isNew = nameEl.textContent.trim() === planName;
          if(isNew){
            if(!badge){ badge = document.createElement('span'); badge.className = 'plan-badge'; card.insertBefore(badge, card.firstChild); }
            badge.textContent = 'Tu plan actual';
            card.classList.add('featured');
            ctaBtn.textContent = 'Plan activo';
            ctaBtn.setAttribute('disabled', '');
            ctaBtn.removeAttribute('data-plan-switch');
          } else {
            if(badge) badge.remove();
            card.classList.remove('featured');
            if(ctaBtn.hasAttribute('disabled')){
              ctaBtn.removeAttribute('disabled');
              ctaBtn.setAttribute('data-plan-switch', nameEl.textContent.trim());
              ctaBtn.textContent = 'Cambiar a este plan';
            }
          }
        });
        window.HBToast('Tu plan ahora es "' + planName + '"', 'success');
      }
    });
  });
})();(function(){
  function getTable(el){ return el.closest('[data-bulk-table]'); }
  function updateBar(table){
    var checks = table.querySelectorAll('[data-bulk-row]');
    var checked = table.querySelectorAll('[data-bulk-row]:checked');
    var allBox = table.querySelector('[data-bulk-all]');
    var countEl = table.querySelector('[data-bulk-count]');
    var delBtn = table.querySelector('[data-bulk-delete]');
    var extraBtns = table.querySelectorAll('[data-bulk-extra]');
    if(countEl) countEl.textContent = checked.length + ' seleccionado' + (checked.length === 1 ? '' : 's');
    if(delBtn) delBtn.disabled = checked.length === 0;
    extraBtns.forEach(function(b){ b.disabled = checked.length === 0; });
    if(allBox){
      allBox.checked = checks.length > 0 && checked.length === checks.length;
      allBox.indeterminate = checked.length > 0 && checked.length < checks.length;
    }
  }
  function setMode(table, active){
    table.classList.toggle('bulk-mode', active);
    var bar = table.querySelector('[data-bulk-bar]');
    var dataTableEl = table.querySelector('table.data-table');
    if(bar) bar.classList.toggle('hidden', !active);
    if(dataTableEl) dataTableEl.classList.toggle('bulk-active', active);
    var toggleBtn = table.querySelector('[data-bulk-toggle]');
    if(toggleBtn) toggleBtn.textContent = active ? 'Cancelar selección' : 'Seleccionar';
    if(!active){
      table.querySelectorAll('[data-bulk-row], [data-bulk-all]').forEach(function(cb){ cb.checked = false; cb.indeterminate = false; });
      updateBar(table);
    }
  }
  document.addEventListener('click', function(e){
    var toggleBtn = e.target.closest('[data-bulk-toggle]');
    if(toggleBtn){
      var table = getTable(toggleBtn);
      if(table) setMode(table, !table.classList.contains('bulk-mode'));
      return;
    }
    var cancelBtn = e.target.closest('[data-bulk-cancel]');
    if(cancelBtn){
      var table2 = getTable(cancelBtn);
      if(table2) setMode(table2, false);
      return;
    }
    var delBtn = e.target.closest('[data-bulk-delete]');
    if(delBtn){
      if(delBtn.disabled || !window.HBConfirm) return;
      var table3 = getTable(delBtn);
      if(!table3) return;
      var checkedRows = Array.prototype.map.call(table3.querySelectorAll('[data-bulk-row]:checked'), function(cb){ return cb.closest('tr'); });
      if(!checkedRows.length) return;
      var n = checkedRows.length;
      window.HBConfirm({
        title: '¿Eliminar ' + n + ' elemento' + (n === 1 ? '' : 's') + '?',
        message: 'Esta acción no se puede deshacer.',
        onAccept: function(){
          checkedRows.forEach(function(tr){
            tr.style.transition = 'opacity .2s ease, transform .2s ease';
            tr.style.opacity = '0';
            tr.style.transform = 'scale(.97)';
            setTimeout(function(){ tr.remove(); }, 200);
          });
          if(window.HBToast) window.HBToast(n + ' elemento' + (n === 1 ? '' : 's') + ' eliminado' + (n === 1 ? '' : 's'), 'success');
          setTimeout(function(){ updateBar(table3); }, 210);
        }
      });
    }
  });
  document.addEventListener('change', function(e){
    var allBox = e.target.closest('[data-bulk-all]');
    if(allBox){
      var table = getTable(allBox);
      if(!table) return;
      table.querySelectorAll('[data-bulk-row]').forEach(function(cb){ cb.checked = allBox.checked; });
      updateBar(table);
      return;
    }
    var rowBox = e.target.closest('[data-bulk-row]');
    if(rowBox){
      var table2 = getTable(rowBox);
      if(table2) updateBar(table2);
    }
  });
})();(function(){
  document.addEventListener('click', function(e){
    var toggle = e.target.closest('[data-payment-type-toggle] button');
    if(toggle){
      var group = toggle.closest('[data-payment-type-toggle]');
      group.querySelectorAll('button').forEach(function(b){ b.classList.toggle('active', b === toggle); });
      var modal = toggle.closest('.modal-card');
      if(modal){
        var isCard = toggle.dataset.paymentType === 'tarjeta';
        var cardBlock = modal.querySelector('[data-payment-card]');
        var transferBlock = modal.querySelector('[data-payment-transfer]');
        if(cardBlock) cardBlock.classList.toggle('hidden', !isCard);
        if(transferBlock) transferBlock.classList.toggle('hidden', isCard);
      }
      return;
    }
    var connectBtn = e.target.closest('[data-close-modal][data-toast]');
    if(connectBtn){
      var modalLayer = connectBtn.closest('.modal-layer');
      if(!modalLayer) return;
      var opener = document.querySelector('[data-open-modal="#' + modalLayer.id + '"]');
      var card = opener && opener.closest('.channel-card');
      if(card){
        var pill = card.querySelector('.pill');
        if(pill){ pill.textContent = 'Conectado'; pill.className = 'pill success'; }
        opener.textContent = 'Configurar';
      }
    }
  });
})();
