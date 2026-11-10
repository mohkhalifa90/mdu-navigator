const DATA = window.MDU_DATA;

/* ---------- i18n ---------- */
/* ---------- i18n: English and Swedish ---------- */
const T = {
 en:{appTitle:'MDU Navigator',appSub:'Campus Västerås · prototype',tNext:'Schedule',tSearch:'Search',tMap:'Map',tPlaces:'Places',
  next:'Next session',now:'Happening now',later:'Coming up',goTo:'Take me to',online:'Online in Canvas',
  notMapped:'This room isn’t on the map yet',example:'Example',yours:'Your schedule',uploadT:'Add your schedule',
  uploadB:'Upload an .ics file from KronoX',how1:'Open your course schedule in KronoX on the MDU website',how2:'Choose iCal and copy the link, or download the file',how3:'Paste the link or upload the file here. It stays on this device only',
  clear:'Clear schedule',noMore:'No upcoming sessions in this schedule',exampleNote:'These are sample times so you can see how the app works. Add your own schedule below.',
  today:'Today',tomorrow:'Tomorrow',inX:'in',min:'min',hr:'h',day:'d',endsIn:'ends in',
  qph:'Search a room: R2-142, Omega, WC…',floor:'Floor',bld:'Block',route:'Route',mapOnly:'Map only',
  from:'From',change:'Change',tapHint:'Tap any room on the map, or find it in Search.',
  startAt:'Start at',takeUp:'go up',takeDown:'go down',toFloor:'to floor',walkTo:'Walk along the corridor to',redMark:'the red circle on the map.',
  minsWalk:'About {n} min walk (estimate)',noRouteU:'Routes work in R Block only for now. This room is marked on the {b} Block map, floor {f}.',
  pickStart:'Where are you now?',entrances:'Entrances',nearRoom:'I’m next to room…',tapMap:'Pick my spot on the map',tapMapHint:'Tap the room closest to you',
  setStart:'I’m here',goHere:'Take me here',cancel:'Cancel',close:'Close',sameSpot:'You’re already there.',
  wc:'Toilets',food:'Food & café',quiet:'Quiet spaces',help:'Help',aed:'Defibrillators',halls:'Large lecture halls',
  stN:'the stairs by {r}',stC:'the spiral stairs in the middle',stS:'the stairs by {r}',
  ent_w:'Main entrance (floor 1)',ent_n:'Entrance by R1-121',ent_e:'Entrance by R1-452',ent_s:'Entrance by R1-152',ent_u:'From T/U Block (corridor, floor 3)',
  loaded:'Loaded {n} sessions from your schedule',badFile:'That file isn’t iCal. Download the schedule from KronoX as iCal (.ics) and try again.',
  dataNote:'Maps come from MDU’s official premises guide. Routes are approximate, so follow the signs too.',
  none:'No results. Try a room code like R2-142.',cafe:'Café',lunch:'Lunch area',exampleCourse:'Example course',
  linkT:'Subscription link',linkPh:'Paste your KronoX iCal link',linkSave:'Save and update',orFile:'or',
  linkFail:'Couldn’t load that link. Check the link and your internet connection.',
  linkWeb:'The web version can’t load KronoX links directly. Download the .ics file instead, or use the app.',
  updated:'Updated {t}',refresh:'Update now',otherLang:'Svenska'
 },
 sv:{appTitle:'MDU Navigator',appSub:'Campus Västerås · prototyp',tNext:'Schema',tSearch:'Sök',tMap:'Karta',tPlaces:'Platser',
  next:'Nästa pass',now:'Pågår nu',later:'Kommande',goTo:'Visa vägen till',online:'Online i Canvas',
  notMapped:'Salen finns inte på kartan än',example:'Exempel',yours:'Ditt schema',uploadT:'Lägg till ditt schema',
  uploadB:'Ladda upp en .ics-fil från KronoX',how1:'Öppna kursens schema i KronoX på MDU:s webbplats',how2:'Välj iCal och kopiera länken, eller ladda ner filen',how3:'Klistra in länken eller ladda upp filen här. Den sparas bara på den här enheten',
  clear:'Rensa schemat',noMore:'Inga kommande pass i schemat',exampleNote:'Det här är exempeltider så att du ser hur appen fungerar. Lägg till ditt eget schema nedan.',
  today:'Idag',tomorrow:'Imorgon',inX:'om',min:'min',hr:'tim',day:'d',endsIn:'slutar om',
  qph:'Sök sal: R2-142, Omega, WC…',floor:'Plan',bld:'Hus',route:'Väg',mapOnly:'Bara karta',
  from:'Från',change:'Ändra',tapHint:'Tryck på en sal på kartan, eller sök efter den under Sök.',
  startAt:'Börja vid',takeUp:'gå upp',takeDown:'gå ner',toFloor:'till plan',walkTo:'Gå längs korridoren till',redMark:'den röda ringen på kartan.',
  minsWalk:'Cirka {n} min promenad (uppskattning)',noRouteU:'Vägbeskrivning finns bara i hus R än så länge. Salen är markerad på kartan för hus {b}, plan {f}.',
  pickStart:'Var är du nu?',entrances:'Entréer',nearRoom:'Jag står vid sal…',tapMap:'Välj min plats på kartan',tapMapHint:'Tryck på salen närmast dig',
  setStart:'Jag är här',goHere:'Visa vägen hit',cancel:'Avbryt',close:'Stäng',sameSpot:'Du är redan där.',
  wc:'Toaletter',food:'Mat och café',quiet:'Lugna rum',help:'Hjälp',aed:'Hjärtstartare',halls:'Stora föreläsningssalar',
  stN:'trappan vid {r}',stC:'spiraltrappan i mitten',stS:'trappan vid {r}',
  ent_w:'Huvudentrén (plan 1)',ent_n:'Entrén vid R1-121',ent_e:'Entrén vid R1-452',ent_s:'Entrén vid R1-152',ent_u:'Från hus T/U (korridoren, plan 3)',
  loaded:'{n} pass hämtades från ditt schema',badFile:'Filen är inte en iCal-fil. Ladda ner schemat från KronoX som iCal (.ics) och försök igen.',
  dataNote:'Kartorna kommer från MDU:s officiella lokalguide. Vägarna är ungefärliga, så följ skyltarna också.',
  none:'Inga träffar. Prova en salskod som R2-142.',cafe:'Café',lunch:'Lunchplats',exampleCourse:'Exempelkurs',
  linkT:'Prenumerationslänk',linkPh:'Klistra in din iCal-länk från KronoX',linkSave:'Spara och uppdatera',orFile:'eller',
  linkFail:'Kunde inte hämta länken. Kontrollera länken och din internetanslutning.',
  linkWeb:'Webbversionen kan inte hämta KronoX-länkar direkt. Ladda ner .ics-filen i stället, eller använd appen.',
  updated:'Uppdaterat {t}',refresh:'Uppdatera nu',otherLang:'English'
 }
};
let lang='en';
const t=(k,v={})=>(T[lang][k]??k).replace(/\{(\w+)\}/g,(_,x)=>v[x]??'');
const esc=s=>String(s).replace(/[&<>"]/g,c=>({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;'}[c]));
const store={get(k){try{return JSON.parse(localStorage.getItem(k))}catch(e){return null}},set(k,v){try{localStorage.setItem(k,JSON.stringify(v))}catch(e){}}};

/* ---------- rooms index ---------- */
const BUILD={R:{label:'R',floors:['R1','R2','R3'],route:true},U:{label:'T/U',floors:['U1','U2','U3'],route:false}};
const ROOMS=[];
for(const fk of Object.keys(DATA)){
  for(const r of DATA[fk].rooms){
    ROOMS.push({...r,fk,b:fk[0],floor:+fk[1],key:r.id+'@'+fk+'@'+r.x});
  }
}
const norm=s=>String(s).toUpperCase().replace(/\s+/g,'');
const BYCODE=new Map();
for(const r of ROOMS){ if(!r.kind && !BYCODE.has(norm(r.id))) BYCODE.set(norm(r.id),r); }
const bName=r=>r.b==='R'?'R':(r.id[0]==='T'?'T':'U');

/* ---------- routing graph (R block) ---------- */
const POS=new Map(), ADJ=new Map();
const dist=(a,b)=>Math.hypot(a.x-b.x,a.y-b.y);
function addNode(id,fk,x,y){POS.set(id,{fk,x,y});if(!ADJ.has(id))ADJ.set(id,[]);}
function addEdge(a,b,w){w=w??dist(POS.get(a),POS.get(b));ADJ.get(a).push([b,w]);ADJ.get(b).push([a,w]);}
const EDGES={};
for(const fk of BUILD.R.floors){
  const g=DATA[fk].graph;EDGES[fk]=[];
  for(const [k,[x,y]] of Object.entries(g.nodes)) addNode(fk+':'+k,fk,x,y);
  for(const [a,b] of g.edges){addEdge(fk+':'+a,fk+':'+b);EDGES[fk].push([fk+':'+a,fk+':'+b]);}
}
for(const s of ['stN','stC','stS']){addEdge('R1:'+s,'R2:'+s,32);addEdge('R2:'+s,'R3:'+s,32);}
function project(p,a,b){const dx=b.x-a.x,dy=b.y-a.y,L=dx*dx+dy*dy;let u=L?((p.x-a.x)*dx+(p.y-a.y)*dy)/L:0;u=Math.max(0,Math.min(1,u));return{x:a.x+u*dx,y:a.y+u*dy};}
const ATT=new Map();
function attach(r){
  if(r.b!=='R') return null;
  if(ATT.has(r.key)) return ATT.get(r.key);
  const id='room:'+r.key; addNode(id,r.fk,r.x,r.y);
  if(r.door){addEdge(id,r.fk+':'+r.door);}
  else{
    let best=null;
    for(const [a,b] of EDGES[r.fk]){const q=project(r,POS.get(a),POS.get(b));const d=dist(q,r);if(!best||d<best.d)best={d,q,a,b};}
    const pid='proj:'+r.key; addNode(pid,r.fk,best.q.x,best.q.y);
    addEdge(pid,best.a);addEdge(pid,best.b);addEdge(id,pid);
  }
  ATT.set(r.key,id);return id;
}
function dijkstra(src,dst){
  const D=new Map([[src,0]]),P=new Map(),done=new Set();
  while(true){
    let u=null,du=Infinity;
    for(const [k,v] of D) if(!done.has(k)&&v<du){u=k;du=v;}
    if(u===null) return null;
    if(u===dst) break;
    done.add(u);
    for(const [v,w] of ADJ.get(u)){const nd=du+w;if(nd<(D.get(v)??Infinity)){D.set(v,nd);P.set(v,u);}}
  }
  const path=[dst];while(path[0]!==src)path.unshift(P.get(path[0]));
  return path;
}
const STAIR_REF={R1:{stN:'R1-302',stS:'R1-502'},R2:{stN:'R2-302',stS:'R2-502'},R3:{stN:'R3-122',stS:'R3-143'}};
const ENTR=[['R1:ent_w','ent_w'],['R1:ent_n','ent_n'],['R1:ent_e','ent_e'],['R1:ent_s','ent_s'],['R3:ent_u','ent_u']];

/* ---------- iCal ---------- */
function unfold(txt){return txt.replace(/\r\n/g,'\n').replace(/\n[ \t]/g,'');}
function tzOffsetMin(date,tz){
  const f=new Intl.DateTimeFormat('en-US',{timeZone:tz,hourCycle:'h23',year:'numeric',month:'2-digit',day:'2-digit',hour:'2-digit',minute:'2-digit',second:'2-digit'});
  const p=Object.fromEntries(f.formatToParts(date).map(x=>[x.type,x.value]));
  return (Date.UTC(+p.year,p.month-1,+p.day,+p.hour,+p.minute,+p.second)-date.getTime())/60000;
}
function parseDT(val,params){
  const m=val.match(/^(\d{4})(\d{2})(\d{2})(?:T(\d{2})(\d{2})(\d{2})?(Z)?)?$/);if(!m)return null;
  const [_,Y,Mo,Dd,h='0',mi='0',s='0',Z]=m;
  const utc=Date.UTC(+Y,Mo-1,+Dd,+h,+mi,+s);
  if(Z) return new Date(utc);
  const tz=(params.match(/TZID=([^;:]+)/)||[])[1]||'Europe/Stockholm';
  let d=new Date(utc);d=new Date(utc-tzOffsetMin(d,tz)*60000);return d;
}
function parseICS(txt){
  if(!/BEGIN:VCALENDAR/.test(txt)) return null;
  const ev=[];let cur=null;
  for(const line of unfold(txt).split('\n')){
    if(line==='BEGIN:VEVENT'){cur={};continue;}
    if(line==='END:VEVENT'){if(cur&&cur.start)ev.push(cur);cur=null;continue;}
    if(!cur) continue;
    const i=line.indexOf(':');if(i<0)continue;
    const head=line.slice(0,i),val=line.slice(i+1).replace(/\\,/g,',').replace(/\\n/gi,' ').replace(/\\;/g,';');
    const name=head.split(';')[0];
    if(name==='DTSTART') cur.start=parseDT(val,head);
    else if(name==='DTEND') cur.end=parseDT(val,head);
    else if(name==='SUMMARY') cur.summary=val;
    else if(name==='LOCATION') cur.location=val;
  }
  return ev.map(e=>({...e,start:e.start.getTime(),end:(e.end||e.start).getTime(),...splitSummary(e.summary||'')}));
}
function splitSummary(s){
  const course=(s.match(/Kurs\.grp:\s*(.*?)(?:\s+Sign:|\s+Moment:|\s+Aktivitetstyp:|$)/)||[])[1];
  const moment=(s.match(/Moment:\s*(.*?)(?:\s+Aktivitetstyp:|$)/)||[])[1];
  return {course:(course||s).replace(/\s+(Västerås|Eskilstuna)$/,'').trim(),moment:(moment||'').trim()};
}
function parseLoc(loc){
  if(!loc||!loc.trim()) return {type:'none',rooms:[]};
  if(/canvas|zoom|teams|online|distans/i.test(loc)) return {type:'online',rooms:[]};
  const rooms=[];
  for(const tok of loc.split(/[,;\/]/).map(s=>s.trim()).filter(Boolean)){
    const m=tok.match(/\b([RTU]\d-\d{3})\b/i);
    const key=m?norm(m[1]):norm(tok);
    rooms.push(BYCODE.get(key)||{id:m?m[1].toUpperCase():tok,unknown:true});
  }
  return {type:'rooms',rooms};
}
function demoEvents(){
  const base=new Date();const day=(n,h,m)=>{const d=new Date(base);d.setDate(d.getDate()+n);d.setHours(h,m,0,0);return d.getTime();};
  const mk=(n,h,m,dur,loc,mom)=>({start:day(n,h,m),end:day(n,h,m)+dur*60000,location:loc,course:t('exampleCourse'),moment:mom});
  return [mk(0,base.getHours()+1,15,105,'R2-142','Lecture'),mk(1,13,15,165,'R2-121','Seminar 1'),mk(2,8,0,540,'Canvas','Assignment'),mk(3,9,15,165,'Omega','Guest lecture'),mk(4,13,15,105,'U2-016','Lecture'),mk(6,10,15,120,'R3-122','Workshop')];
}

/* ---------- state ---------- */
let sched=store.get('mdu.sched'); // {events,source}
let view='next', bld='R', floor='R1';
let target=null, start=store.get('mdu.start')||{type:'node',id:'R1:ent_w',label:'ent_w'};
let route=null, tapMode=null, curStep=-1;

/* ---------- formatting ---------- */
const loc=()=>lang==='sv'?'sv-SE':'en-GB';
const TZ='Europe/Stockholm';
const dayKey=d=>new Intl.DateTimeFormat('en-CA',{timeZone:TZ}).format(d);
function fmtDay(ms){
  const d=new Date(ms),now=new Date(),tm=new Date(Date.now()+864e5);
  if(dayKey(d)===dayKey(now))return t('today');
  if(dayKey(d)===dayKey(tm))return t('tomorrow');
  return new Intl.DateTimeFormat(loc(),{timeZone:TZ,weekday:'long',day:'numeric',month:'short'}).format(d);
}
const fmtTime=ms=>new Intl.DateTimeFormat(loc(),{timeZone:TZ,hour:'2-digit',minute:'2-digit',hourCycle:'h23'}).format(new Date(ms));
function fmtRel(ms){
  let m=Math.round((ms-Date.now())/60000);
  if(m<60) return `${m} ${t('min')}`;
  const h=Math.round(m/60);if(h<48) return `${h} ${t('hr')}`;
  return `${Math.round(h/24)} ${t('day')}`;
}
const roomCode=r=>`<span class="code">${esc(r.id)}</span>`;
const placeLabel=r=>`${bName(r)} · ${t('floor')} ${r.floor}`;

/* ---------- views ---------- */
function setView(v){
  view=v;
  for(const s of document.querySelectorAll('.view')) s.classList.toggle('on',s.id==='v-'+v);
  for(const b of document.querySelectorAll('nav button')) b.setAttribute('aria-selected',b.dataset.v===v);
  if(v==='map'){renderMap();renderSheet();requestAnimationFrame(()=>{sizeMap();if(!vbInit)fitAll();})}
  if(v==='search') renderSearch();
}
document.querySelectorAll('nav button').forEach(b=>b.onclick=()=>setView(b.dataset.v));

function renderNext(){
  const el=document.getElementById('v-next');
  const src=sched?'yours':'example';
  const evs=(sched?sched.events:demoEvents()).filter(e=>e.end>Date.now()).sort((a,b)=>a.start-b.start);
  let h=`<div class="row"><span class="pill ${src==='example'?'warn':''}">${t(src)}</span><span class="muted small" style="flex:1">${sched&&sched.fetched?esc(t('updated',{t:fmtDay(sched.fetched)+' '+fmtTime(sched.fetched)})):''}</span>${sched&&sched.source==='link'?`<button class="ghost" id="icsRefresh" type="button">${t('refresh')}</button>`:''}${sched?`<button class="ghost" id="clr" type="button">${t('clear')}</button>`:''}</div>`;
  if(!evs.length){h+=`<div class="card muted">${t('noMore')}</div>`;}
  else{
    const e=evs[0],L=parseLoc(e.location),live=e.start<=Date.now();
    h+=`<article class="card next"><div class="row"><span class="eyebrow" style="flex:1">${live?t('now'):t('next')}</span>${live?`<span class="pill live">${t('endsIn')} ${fmtRel(e.end)}</span>`:`<span class="rel">${t('inX')} ${fmtRel(e.start)}</span>`}</div>
      <h2>${esc(e.moment||e.course)}</h2><div class="muted small">${esc(e.moment?e.course:'')}</div>
      <div class="when" style="margin-top:8px">${fmtDay(e.start)} · <span class="code" style="font-weight:500">${fmtTime(e.start)}–${fmtTime(e.end)}</span></div>
      <div style="margin-top:12px;display:flex;flex-direction:column;gap:10px">${locBlock(L,0)}</div></article>`;
    if(evs.length>1){
      h+=`<div class="eyebrow">${t('later')}</div><div class="card list" style="padding:2px 12px">`;
      evs.slice(1,9).forEach((e,i)=>{
        const L=parseLoc(e.location),r=L.rooms[0];
        const tag=L.type==='online'?`<span class="tag">Canvas</span>`:r?(r.unknown?`<span class="tag">${roomCode(r)}</span>`:`<span class="tag go">${roomCode(r)}</span>`):'';
        h+=`<button class="item" type="button" data-ev="${i+1}"><span class="date"><b>${fmtTime(e.start)}</b>${fmtDay(e.start)}</span><span><span class="t">${esc(e.moment||e.course)}</span><br><span class="s">${esc(e.moment?e.course:'')}</span></span>${tag}</button>`;
      });
      h+=`</div>`;
    }
  }
  h+=`<div class="card"><div class="eyebrow">${t('uploadT')}</div>
    ${!sched?`<p class="small muted" style="margin:6px 0 10px">${t('exampleNote')}</p>`:''}
    <label class="search" for="icsUrl" style="margin-top:8px"><input id="icsUrl" type="url" inputmode="url" autocomplete="off" placeholder="${t('linkPh')}" value="${esc(ICSURL)}" aria-label="${t('linkT')}"></label>
    <button class="btn" type="button" id="icsSave" style="width:100%;margin-top:8px">${t('linkSave')}</button>
    <div class="muted small" style="text-align:center;margin:8px 0 2px">${t('orFile')}</div>
    <label class="btn sec file" style="width:100%">${t('uploadB')}<input type="file" id="icsFile" accept=".ics,text/calendar"></label>
    <ol class="steps-how"><li>${t('how1')}</li><li>${t('how2')}</li><li>${t('how3')}</li></ol></div>
    <p class="note">${t('dataNote')}</p>`;
  el.innerHTML=h;
  el.querySelectorAll('[data-go]').forEach(b=>b.onclick=()=>goRoom(BYKEY.get(b.dataset.go)));
  el.querySelectorAll('[data-ev]').forEach(b=>b.onclick=()=>{const L=parseLoc(evs[+b.dataset.ev].location);const r=L.rooms.find(x=>!x.unknown);if(r)goRoom(r);});
  const f=el.querySelector('#icsFile');f&&(f.onchange=async()=>{const file=f.files[0];if(!file)return;const txt=await file.text();const ev=parseICS(txt);
    if(!ev){toast(t('badFile'));return;}sched={events:ev,source:file.name};store.set('mdu.sched',sched);toast(t('loaded',{n:ev.length}));renderNext();});
  el.querySelector('#icsSave').onclick=()=>{ICSURL=el.querySelector('#icsUrl').value.trim();store.set('mdu.icsurl',ICSURL);refreshLink(false);};
  const rf=el.querySelector('#icsRefresh');rf&&(rf.onclick=()=>refreshLink(false));
  const c=el.querySelector('#clr');c&&(c.onclick=()=>{sched=null;store.set('mdu.sched',null);renderNext();});
}
const BYKEY=new Map(ROOMS.map(r=>[r.key,r]));
function locBlock(L){
  if(L.type==='online') return `<div class="roomchip"><span>💻</span><span>${t('online')}</span></div>`;
  if(L.type==='none') return '';
  return L.rooms.map(r=>r.unknown?`<div class="roomchip">${roomCode(r)}<span class="muted small">${t('notMapped')}</span></div>`:
    `<div class="row" style="flex-wrap:wrap"><div class="roomchip">${roomCode(r)}<span class="muted small">${placeLabel(r)}</span></div><button class="btn" type="button" data-go="${esc(r.key)}" style="flex:1;min-width:150px">${t('goTo')} <span class="code">${esc(r.id)}</span></button></div>`).join('');
}

function renderSearch(){
  const q=document.getElementById('q');q.placeholder=t('qph');
  const s=norm(q.value);
  const kindName=r=>r.kind?({wc:t('wc'),cafe:t('cafe'),food:t('lunch'),quiet:t('quiet'),help:t('help'),aed:t('aed')}[r.kind]):'';
  let list=ROOMS.filter(r=>!s||norm(r.id).includes(s)||norm(r.id).replace('-','').includes(s)||(r.kind&&norm(kindName(r)).includes(s)));
  list.sort((a,b)=>(a.b>b.b?1:a.b<b.b?-1:0)||a.floor-b.floor||a.id.localeCompare(b.id));
  const res=document.getElementById('results');
  if(!list.length){res.innerHTML=`<p class="muted small" style="margin:6px">${t('none')}</p>`;return;}
  res.innerHTML=list.slice(0,80).map(r=>`<button class="item" type="button" data-k="${esc(r.key)}"><span class="code" style="min-width:70px">${esc(r.id)}</span><span class="s">${kindName(r)?esc(kindName(r))+' · ':''}${t('bld')} ${bName(r)} · ${t('floor')} ${r.floor}</span><span class="tag ${r.b==='R'?'go':''}">${r.b==='R'?t('route'):t('mapOnly')}</span></button>`).join('');
  res.querySelectorAll('[data-k]').forEach(b=>b.onclick=()=>goRoom(BYKEY.get(b.dataset.k)));
}
document.getElementById('q').addEventListener('input',renderSearch);

function renderPlaces(){
  const el=document.getElementById('v-places');
  const groups=[['wc',r=>r.kind==='wc'],['food',r=>r.kind==='cafe'||r.kind==='food'],['quiet',r=>r.kind==='quiet'],['help',r=>r.kind==='help'],['aed',r=>r.kind==='aed'],
    ['halls',r=>!r.kind&&/^[A-Z][a-z]/.test(r.id)]];
  el.innerHTML=groups.map(([k,f])=>{const L=ROOMS.filter(f);if(!L.length)return'';
    return `<div class="card cat"><h3>${t(k)}</h3><div class="list">${L.map(r=>`<button class="item" type="button" data-k="${esc(r.key)}"><span class="${r.kind?'':'code'}" style="min-width:70px">${esc(r.kind==='wc'?'WC':r.id)}</span><span class="s">${t('bld')} ${bName(r)} · ${t('floor')} ${r.floor}</span><span class="tag ${r.b==='R'?'go':''}">${r.b==='R'?t('route'):t('mapOnly')}</span></button>`).join('')}</div></div>`}).join('')
    +`<p class="note">${t('dataNote')}</p>`;
  el.querySelectorAll('[data-k]').forEach(b=>b.onclick=()=>goRoom(BYKEY.get(b.dataset.k)));
}

/* ---------- map ---------- */
const svg=document.getElementById('map');const NS='http://www.w3.org/2000/svg';
let vb={x:0,y:0,w:420,h:640},vbInit=false;
function sizeMap(){const W=svg.clientWidth,H=svg.clientHeight;if(!W||!H)return;const cx=vb.x+vb.w/2,cy=vb.y+vb.h/2;vb.h=vb.w*H/W;vb.y=cy-vb.h/2;applyVB();}
function applyVB(){svg.setAttribute('viewBox',`${vb.x} ${vb.y} ${vb.w} ${vb.h}`);}
function fitBox(x0,y0,x1,y1,pad=20){
  const W=svg.clientWidth||1,H=svg.clientHeight||1,sheetH=document.getElementById('sheet').offsetHeight,top=56;
  const availH=Math.max(120,H-sheetH-top);
  const bw=x1-x0+pad*2,bh=y1-y0+pad*2;
  const k=Math.max(bw/W,bh/availH);
  vb.w=W*k;vb.h=H*k;vb.x=(x0+x1)/2-vb.w/2;vb.y=(y0+y1)/2-(top+availH/2)*k;
  vbInit=true;applyVB();
}
function fitAll(){const f=DATA[floor];fitBox(0,0,f.w,f.h,4);}
function el(n,a={},p){const e=document.createElementNS(NS,n);for(const k in a)e.setAttribute(k,a[k]);p&&p.appendChild(e);return e;}
function renderMapBar(){
  const bs=document.getElementById('bldSeg'),fs=document.getElementById('floorSeg');
  bs.innerHTML=Object.entries(BUILD).map(([k,b])=>`<button type="button" data-b="${k}" aria-pressed="${k===bld}">${t('bld')} ${b.label}</button>`).join('');
  const rf=route?new Set(route.segs.map(s=>s.fk)):new Set();
  fs.innerHTML=BUILD[bld].floors.map(fk=>`<button type="button" data-f="${fk}" aria-pressed="${fk===floor}" class="${rf.has(fk)?'has-route':''}">${fk[1]}</button>`).join('');
  bs.querySelectorAll('button').forEach(b=>b.onclick=()=>{bld=b.dataset.b;floor=BUILD[bld].floors[target&&target.b===bld?target.floor-1:0];renderMap();fitAll();});
  fs.querySelectorAll('button').forEach(b=>b.onclick=()=>{floor=b.dataset.f;renderMap();});
}
function renderMap(){
  renderMapBar();
  const f=DATA[floor];svg.innerHTML='';
  el('rect',{x:-2000,y:-2000,width:5000,height:5000,fill:'#ffffff'},svg);
  const img=el('image',{href:f.img,x:0,y:0,width:f.w,height:f.h,preserveAspectRatio:'none'},svg);
  if(route){
    for(const s of route.segs.filter(s=>s.fk===floor)){
      const pts=s.pts.map(p=>p.x+','+p.y).join(' ');
      el('polyline',{points:pts,fill:'none',stroke:'#ffffff',"stroke-width":8,"stroke-linecap":"round","stroke-linejoin":"round",opacity:.9},svg);
      el('polyline',{points:pts,fill:'none',stroke:'var(--accent)',"stroke-width":4.5,"stroke-linecap":"round","stroke-linejoin":"round"},svg);
      el('polyline',{points:pts,fill:'none',stroke:'#ffffff',"stroke-width":1.6,"stroke-dasharray":"4 8","stroke-linecap":"round",class:'routeline'},svg);
    }
    for(const s of route.stairs.filter(s=>s.fk===floor)){
      el('circle',{cx:s.x,cy:s.y,r:8,fill:'var(--stair)',stroke:'#fff',"stroke-width":2},svg);
      const tx=el('text',{x:s.x,y:s.y+3.6,"text-anchor":"middle","font-size":10,"font-weight":700,fill:'#fff'},svg);tx.textContent=s.up?'↑':'↓';
    }
  }
  const sp=startPoint();
  if(sp&&sp.fk===floor){el('circle',{cx:sp.x,cy:sp.y,r:7,fill:'var(--start)',stroke:'#fff',"stroke-width":2.5},svg);}
  if(target&&target.fk===floor){
    el('circle',{cx:target.x,cy:target.y,r:16,fill:'var(--target)',opacity:.12},svg);
    el('circle',{cx:target.x,cy:target.y,r:16,fill:'none',stroke:'var(--target)',"stroke-width":3},svg);
    el('circle',{cx:target.x,cy:target.y,r:20,fill:'none',stroke:'var(--target)',"stroke-width":1.5,opacity:.5,class:'pulse2'},svg);
  }
  applyVB();
}
function startPoint(){
  if(!start)return null;
  if(start.type==='node'){const p=POS.get(start.id);return p&&{...p};}
  const r=BYKEY.get(start.key);return r&&{fk:r.fk,x:r.x,y:r.y};
}
function startLabel(){
  if(!start)return'';
  if(start.type==='node')return t(start.label);
  const r=BYKEY.get(start.key);return r?`<span class="code">${esc(r.id)}</span>`:'';
}

/* pan / zoom */
const ptrs=new Map();let gesture=null;
function toSvg(cx,cy){const r=svg.getBoundingClientRect();return{x:vb.x+(cx-r.left)/r.width*vb.w,y:vb.y+(cy-r.top)/r.height*vb.h};}
function zoomAt(k,cx,cy){const p=toSvg(cx,cy);vb.w*=k;vb.h*=k;const r=svg.getBoundingClientRect();vb.x=p.x-(cx-r.left)/r.width*vb.w;vb.y=p.y-(cy-r.top)/r.height*vb.h;applyVB();}
svg.addEventListener('pointerdown',e=>{svg.setPointerCapture(e.pointerId);ptrs.set(e.pointerId,{x:e.clientX,y:e.clientY});
  if(ptrs.size===1)gesture={type:'pan',sx:e.clientX,sy:e.clientY,vx:vb.x,vy:vb.y,t:Date.now(),moved:false};
  else if(ptrs.size===2){const [a,b]=[...ptrs.values()];gesture={type:'pinch',d:Math.hypot(a.x-b.x,a.y-b.y),w:vb.w,moved:true};}});
svg.addEventListener('pointermove',e=>{if(!ptrs.has(e.pointerId))return;ptrs.set(e.pointerId,{x:e.clientX,y:e.clientY});
  if(!gesture)return;const r=svg.getBoundingClientRect();
  if(gesture.type==='pan'&&ptrs.size===1){const dx=e.clientX-gesture.sx,dy=e.clientY-gesture.sy;if(Math.hypot(dx,dy)>6)gesture.moved=true;
    vb.x=gesture.vx-dx/r.width*vb.w;vb.y=gesture.vy-dy/r.height*vb.h;applyVB();}
  else if(gesture.type==='pinch'&&ptrs.size===2){const [a,b]=[...ptrs.values()];const d=Math.hypot(a.x-b.x,a.y-b.y);const k=(gesture.w*gesture.d/d)/vb.w;zoomAt(k,(a.x+b.x)/2,(a.y+b.y)/2);}});
function endPtr(e){const g=gesture;ptrs.delete(e.pointerId);
  if(g&&g.type==='pan'&&!g.moved&&Date.now()-g.t<500&&ptrs.size===0)onTap(toSvg(e.clientX,e.clientY));
  if(ptrs.size===0)gesture=null;else if(ptrs.size===1){const p=[...ptrs.values()][0];gesture={type:'pan',sx:p.x,sy:p.y,vx:vb.x,vy:vb.y,t:0,moved:true};}}
svg.addEventListener('pointerup',endPtr);svg.addEventListener('pointercancel',endPtr);
svg.addEventListener('wheel',e=>{e.preventDefault();zoomAt(Math.exp(e.deltaY*0.0015),e.clientX,e.clientY);},{passive:false});
const ctr=()=>{const r=svg.getBoundingClientRect();return[r.left+r.width/2,r.top+r.height/2]};
document.getElementById('zin').onclick=()=>zoomAt(0.7,...ctr());
document.getElementById('zout').onclick=()=>zoomAt(1/0.7,...ctr());
document.getElementById('zfit').onclick=()=>route?fitRoute():fitAll();
window.addEventListener('resize',()=>{if(view==='map')sizeMap();});

function onTap(p){
  let best=null;for(const r of ROOMS){if(r.fk!==floor)continue;const d=Math.hypot(r.x-p.x,r.y-p.y);if(d<22&&(!best||d<best.d))best={d,r};}
  if(!best)return;
  if(tapMode==='start'){tapMode=null;setStart({type:'room',key:best.r.key});return;}
  selectTarget(best.r,false);
}

/* ---------- route ---------- */
function setStart(s){start=s;store.set('mdu.start',s);computeRoute();renderMap();renderSheet();if(route)fitRoute();}
function goRoom(r){if(!r)return;target=r;bld=r.b;floor=r.fk;computeRoute();setView('map');requestAnimationFrame(()=>{renderSheet();route?fitRoute():focusTarget();});}
function selectTarget(r){target=r;computeRoute();renderMap();renderSheet();if(route)fitRoute();}
function focusTarget(){const f=DATA[floor];const k=0.35;fitBox(target.x-f.w*k/2,target.y-f.h*k/2,target.x+f.w*k/2,target.y+f.h*k/2,0);}
function computeRoute(){
  route=null;curStep=-1;
  if(!target||target.b!=='R'||!start)return;
  const src=start.type==='node'?start.id:attach(BYKEY.get(start.key));
  const dst=attach(target);if(!src||!dst)return;
  if(src===dst){route={same:true,segs:[],stairs:[],steps:[]};return;}
  const path=dijkstra(src,dst);if(!path)return;
  const segs=[],stairs=[];let flat=0,changes=0;
  for(let i=0;i<path.length;i++){
    const p=POS.get(path[i]);
    if(!segs.length||segs[segs.length-1].fk!==p.fk){
      if(segs.length){const prev=POS.get(path[i-1]);const up=+p.fk[1]>+prev.fk[1];
        stairs.push({fk:prev.fk,x:prev.x,y:prev.y,up,to:+p.fk[1],id:path[i-1].split(':')[1]});stairs.push({fk:p.fk,x:p.x,y:p.y,up,arrive:true});changes++;}
      segs.push({fk:p.fk,pts:[]});
    }else flat+=dist(POS.get(path[i-1]),p);
    segs[segs.length-1].pts.push({x:p.x,y:p.y});
  }
  const meters=flat*0.3+changes*12;
  const steps=[];
  steps.push({fk:segs[0].fk,html:`${t('startAt')}: <b>${startLabel()}</b> · ${t('floor')} ${segs[0].fk[1]}`});
  for(const s of stairs.filter(s=>!s.arrive)){
    const ref=STAIR_REF[s.fk][s.id];
    steps.push({fk:s.fk,html:`${t('walkTo')} ${t(s.id,{r:`<span class="code">${ref||''}</span>`})}${', '}${s.up?t('takeUp'):t('takeDown')} ${t('toFloor')} ${s.to}`});
  }
  steps.push({fk:target.fk,html:`${t('walkTo')} <span class="code">${esc(target.id)}</span>${', '}${t('redMark')}`});
  route={segs,stairs,steps,mins:Math.max(1,Math.round(meters/75))};
}
function fitRoute(){
  const s=route&&route.segs.find(s=>s.fk===floor)||route&&route.segs[0];
  if(!s){if(target)focusTarget();return;}
  if(s.fk!==floor){floor=s.fk;renderMap();}
  const xs=s.pts.map(p=>p.x),ys=s.pts.map(p=>p.y);
  fitBox(Math.min(...xs),Math.min(...ys),Math.max(...xs),Math.max(...ys),40);
}
function renderSheet(){
  const sh=document.getElementById('sheet');
  if(tapMode==='start'){sh.innerHTML=`<div class="grab"></div><div class="row"><span class="dot" style="background:var(--start)"></span><b style="flex:1">${t('tapMapHint')}</b><button class="ghost" type="button" id="cx">${t('cancel')}</button></div>`;
    sh.querySelector('#cx').onclick=()=>{tapMode=null;renderSheet();};setSheetH();return;}
  if(!target){sh.innerHTML=`<div class="grab"></div><p class="muted small" style="margin:4px 0">${t('tapHint')}</p><p class="note" style="margin:0">${t('dataNote')}</p>`;setSheetH();return;}
  const kind=target.kind?({wc:'WC',cafe:t('cafe'),food:t('lunch'),quiet:t('quiet'),help:t('help'),aed:t('aed')}[target.kind]):'';
  let h=`<div class="grab"></div><div class="row"><span class="dot" style="background:var(--target)"></span><h2 class="${target.kind?'':'code'}" style="flex:1">${esc(target.kind==='wc'?'WC':target.id)}</h2><span class="muted small">${kind?esc(kind)+' · ':''}${placeLabel(target)}</span></div>`;
  if(target.b!=='R'){h+=`<p class="small" style="margin:10px 0 0">${t('noRouteU',{b:bName(target),f:target.floor})}</p>`;}
  else{
    h+=`<button class="from" type="button" id="fromBtn"><span class="dot" style="background:var(--start)"></span><span style="flex:1"><span class="muted small">${t('from')}: </span>${startLabel()}</span><span class="small" style="color:var(--accent);font-weight:600">${t('change')}</span></button>`;
    if(route&&route.same) h+=`<p class="small">${t('sameSpot')}</p>`;
    else if(route){
      h+=`<ol class="steps">${route.steps.map((s,i)=>`<li class="${i===curStep?'cur':''}"><button type="button" data-step="${i}"><span class="n">${i+1}</span><span class="small">${s.html}</span></button></li>`).join('')}</ol>
      <div class="row" style="margin-top:8px"><span class="pill">${t('minsWalk',{n:route.mins})}</span></div>`;
    }
  }
  h+=`<div class="row" style="margin-top:10px;gap:8px">${target.b==='R'?`<button class="btn sec" type="button" id="setHere" style="flex:1">${t('setStart')}</button>`:''}</div>`;
  sh.innerHTML=h;setSheetH();
  const fb=sh.querySelector('#fromBtn');fb&&(fb.onclick=openStartPicker);
  const sh2=sh.querySelector('#setHere');sh2&&(sh2.onclick=()=>{const r=target;target=null;setStart({type:'room',key:r.key});});
  sh.querySelectorAll('[data-step]').forEach(b=>b.onclick=()=>{curStep=+b.dataset.step;const s=route.steps[curStep];floor=s.fk;renderMap();renderSheet();fitRoute();});
}
function setSheetH(){const sh=document.getElementById('sheet');document.querySelector('.mapwrap').style.setProperty('--sheet-h',sh.offsetHeight+'px');}

/* start picker */
function openStartPicker(){
  const ov=document.getElementById('ov'),d=document.getElementById('dlg');
  d.innerHTML=`<div class="row"><h3 style="flex:1">${t('pickStart')}</h3><button class="ghost" type="button" id="dx">${t('close')}</button></div>
   <button class="btn sec" type="button" id="tapm">${t('tapMap')}</button>
   <label class="search" for="sq"><input id="sq" type="search" placeholder="${t('nearRoom')}" autocomplete="off"></label>
   <div class="list" id="sl"></div>`;
  const fill=()=>{const s=norm(d.querySelector('#sq').value);
    let items='';
    if(!s){items+=`<div class="eyebrow" style="margin-top:4px">${t('entrances')}</div>`+ENTR.map(([id,l])=>`<button class="item" type="button" data-n="${id}" data-l="${l}"><span class="dot" style="background:var(--start)"></span><span class="t">${t(l)}</span><span></span></button>`).join('');}
    else items+=ROOMS.filter(r=>r.b==='R'&&!r.kind&&norm(r.id).includes(s)).slice(0,30).map(r=>`<button class="item" type="button" data-k="${esc(r.key)}"><span class="code" style="min-width:70px">${esc(r.id)}</span><span class="s">${t('floor')} ${r.floor}</span><span></span></button>`).join('');
    d.querySelector('#sl').innerHTML=items;
    d.querySelectorAll('[data-n]').forEach(b=>b.onclick=()=>{close();setStart({type:'node',id:b.dataset.n,label:b.dataset.l});});
    d.querySelectorAll('[data-k]').forEach(b=>b.onclick=()=>{close();setStart({type:'room',key:b.dataset.k});});};
  const close=()=>ov.classList.remove('on');
  d.querySelector('#sq').oninput=fill;d.querySelector('#dx').onclick=close;
  d.querySelector('#tapm').onclick=()=>{close();tapMode='start';const sp=startPoint();renderSheet();};
  ov.onclick=e=>{if(e.target===ov)close();};
  fill();ov.classList.add('on');
}

/* ---------- iCal subscription link ----------
   In the Android/iOS app, Capacitor's native HTTP handles fetch(), so KronoX links load without CORS limits.
   In a normal browser the request is usually blocked by CORS, so we explain and offer the file upload instead. */
const IS_NATIVE=!!(window.Capacitor&&window.Capacitor.isNativePlatform&&window.Capacitor.isNativePlatform());
let ICSURL=store.get('mdu.icsurl')||'';
async function refreshLink(quiet){
  if(!ICSURL)return;
  const url=ICSURL.replace(/^webcal:\/\//i,'https://').replace(/^http:\/\//i,'https://');
  try{
    const r=await fetch(url,{cache:'no-store'});
    const ev=r.ok?parseICS(await r.text()):null;
    if(!ev)throw new Error('bad');
    sched={events:ev,source:'link',fetched:Date.now()};store.set('mdu.sched',sched);
    if(!quiet)toast(t('loaded',{n:ev.length}));
    renderNext();
  }catch(e){ if(!quiet)toast(IS_NATIVE?t('linkFail'):t('linkWeb')); }
}
/* misc */
let toastT;function toast(m){const e=document.getElementById('toast');e.textContent=m;e.classList.add('on');clearTimeout(toastT);toastT=setTimeout(()=>e.classList.remove('on'),3200);}
function applyLang(){
  document.documentElement.lang=lang;document.documentElement.dir='ltr';
  document.querySelectorAll('[data-t]').forEach(e=>e.textContent=t(e.dataset.t));
  document.getElementById('langBtn').textContent=t('otherLang');
  if(target&&route)computeRoute();
  renderNext();renderPlaces();renderSearch();if(view==='map'){renderMap();renderSheet();}
}
document.getElementById('langBtn').onclick=()=>{lang=lang==='en'?'sv':'en';store.set('mdu.lang',lang);applyLang();};
lang=store.get('mdu.lang')||((navigator.language||'').toLowerCase().startsWith('sv')?'sv':'en');
applyLang();
setInterval(()=>{if(view==='next')renderNext();},60000);
refreshLink(true);
document.addEventListener('visibilitychange',()=>{if(!document.hidden&&sched&&sched.source==='link'&&Date.now()-(sched.fetched||0)>30*60000)refreshLink(true);});
if('serviceWorker' in navigator&&!IS_NATIVE&&(location.protocol==='https:'||location.hostname==='localhost')){navigator.serviceWorker.register('sw.js').catch(()=>{});}
