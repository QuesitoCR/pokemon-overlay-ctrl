<!DOCTYPE html>
<html lang="es">
<head>
<meta charset="UTF-8">
<meta name="viewport" content="width=device-width, initial-scale=1.0">
<title>Pokemon Overlay — Panel de Control</title>
<link rel="preconnect" href="https://fonts.googleapis.com">
<link href="https://fonts.googleapis.com/css2?family=Space+Mono:wght@400;700&family=DM+Sans:wght@400;500;600&display=swap" rel="stylesheet">
<style>
:root {
  --accent: #e8364a;
  --accent2: #f5a623;
  --bg: #0f0f13;
  --surface: #18181f;
  --surface2: #22222c;
  --border: rgba(255,255,255,0.08);
  --border2: rgba(255,255,255,0.14);
  --text: #f0f0f0;
  --muted: #888;
  --slot-size: 110px;
  --gap: 12px;
}
* { box-sizing: border-box; margin: 0; padding: 0; }
body { background: var(--bg); color: var(--text); font-family: 'DM Sans', sans-serif; min-height: 100vh; }

header {
  border-bottom: 1px solid var(--border);
  padding: 16px 28px;
  display: flex; align-items: center; gap: 12px;
  background: var(--surface);
  position: sticky; top: 0; z-index: 100;
}
.logo { font-family: 'Space Mono', monospace; font-size: 14px; font-weight: 700; color: var(--accent); }
.logo span { color: var(--text); }
.tag { font-size: 10px; background: rgba(232,54,74,0.15); color: var(--accent); border: 1px solid rgba(232,54,74,0.3); border-radius: 4px; padding: 2px 8px; font-family: 'Space Mono', monospace; }
.hdr-right { margin-left: auto; display: flex; align-items: center; gap: 8px; }
.dot { width: 7px; height: 7px; border-radius: 50%; background: #2ecc71; animation: pulse 2s infinite; }
.dot.error { background: var(--accent); animation: none; }
@keyframes pulse { 0%,100% { box-shadow: 0 0 0 3px rgba(46,204,113,0.2); } 50% { box-shadow: 0 0 0 6px rgba(46,204,113,0.04); } }
.status-text { font-size: 12px; color: var(--muted); }

.layout { display: grid; grid-template-columns: 1fr 360px; min-height: calc(100vh - 57px); }
.main { padding: 28px; border-right: 1px solid var(--border); }
.sidebar { padding: 22px; background: var(--surface); overflow-y: auto; }

.section-label { font-family: 'Space Mono', monospace; font-size: 10px; letter-spacing: 1.5px; text-transform: uppercase; color: var(--muted); margin-bottom: 16px; }

/* preview */
.preview-stage {
  background: repeating-conic-gradient(#2a2a35 0% 25%, #1d1d26 0% 50%) 0 0 / 18px 18px;
  border-radius: 12px; border: 1px solid var(--border2);
  padding: 24px 20px; overflow-x: auto; margin-bottom: 36px;
}
.inv { display: flex; gap: var(--gap); align-items: flex-start; }
.slot { width: var(--slot-size); user-select: none; flex-shrink: 0; }
.card {
  width: var(--slot-size); height: var(--slot-size);
  border-radius: 12px; border: 1px solid rgba(255,255,255,.15);
  background: rgba(0,0,0,.15); overflow: hidden; position: relative;
  display: flex; align-items: center; justify-content: center;
  transition: border-color .2s, box-shadow .2s;
}
.card.hl { border-color: var(--accent); box-shadow: 0 0 0 3px rgba(232,54,74,0.22); }
.card img { width:100%; height:100%; object-fit:contain; display:none; image-rendering:pixelated; }
.ph { opacity:.5; font-size:11px; padding:8px; text-align:center; color:var(--text); }
.poke-name {
  margin-top:7px; width:100%; font-size:12px; text-align:center;
  color:#fff; background:rgba(0,0,0,.55); border-radius:8px;
  padding:5px 6px; min-height:24px; overflow:hidden; text-overflow:ellipsis; white-space:nowrap;
}
.slot-num { font-family:'Space Mono',monospace; font-size:9px; color:var(--muted); text-align:center; margin-top:5px; }

/* slot rows */
.slots-grid { display:flex; flex-direction:column; gap:10px; }
.slot-row {
  background: var(--surface2); border: 1px solid var(--border);
  border-radius: 10px; padding: 12px 14px;
  display: grid; grid-template-columns: 32px 1fr 1fr auto;
  gap: 10px; align-items: center; transition: border-color .2s;
}
.slot-row.hl { border-color: var(--accent); background: rgba(232,54,74,0.05); }
.slot-badge {
  font-family:'Space Mono',monospace; font-size:11px; font-weight:700;
  color:var(--accent); background:rgba(232,54,74,0.1); border-radius:6px;
  width:32px; height:32px; display:flex; align-items:center; justify-content:center;
}
.input-wrap { position:relative; display:flex; flex-direction:column; gap:3px; }
.input-wrap label { font-size:10px; color:var(--muted); }
input[type=text] {
  background:var(--surface); border:1px solid var(--border2); border-radius:7px;
  color:var(--text); font-family:'DM Sans',sans-serif; font-size:13px;
  padding:6px 9px; width:100%; outline:none; transition:border-color .15s;
}
input[type=text]:focus { border-color:var(--accent); }

/* autocomplete */
.ac-list {
  position:absolute; top:calc(100% + 3px); left:0; right:0;
  background:#28283a; border:1px solid var(--border2); border-radius:8px;
  z-index:300; max-height:170px; overflow-y:auto; display:none;
}
.ac-list.open { display:block; }
.ac-item {
  padding:7px 10px; font-size:12px; cursor:pointer;
  display:flex; align-items:center; gap:8px; transition:background .1s;
}
.ac-item:hover, .ac-item.sel { background:rgba(232,54,74,0.15); }
.ac-item img { width:26px; height:26px; object-fit:contain; image-rendering:pixelated; flex-shrink:0; }
.ac-name { flex:1; }
.ac-num { font-size:10px; color:var(--muted); font-family:'Space Mono',monospace; }

/* buttons */
.btn-sm {
  background:rgba(255,255,255,0.05); border:1px solid var(--border2);
  border-radius:6px; color:var(--muted); font-size:11px; padding:6px 10px;
  cursor:pointer; font-family:'DM Sans',sans-serif; white-space:nowrap;
  transition:background .15s, color .15s; display:block; width:100%; margin-bottom:4px;
}
.btn-sm:hover { background:rgba(232,54,74,0.1); color:var(--accent); border-color:rgba(232,54,74,0.3); }
.btn-sm.danger:hover { background:rgba(232,54,74,0.2); }
.bulk-row { display:flex; gap:10px; margin-top:18px; padding-top:18px; border-top:1px solid var(--border); }
.btn-primary {
  background:var(--accent); border:none; border-radius:8px; color:#fff;
  font-family:'DM Sans',sans-serif; font-size:13px; font-weight:600;
  padding:10px 18px; cursor:pointer; flex:1; transition:opacity .15s;
}
.btn-primary:hover { opacity:.88; }
.btn-ghost {
  background:transparent; border:1px solid var(--border2); border-radius:8px;
  color:var(--muted); font-family:'DM Sans',sans-serif; font-size:13px;
  padding:10px 14px; cursor:pointer; transition:background .15s;
}
.btn-ghost:hover { background:var(--surface2); color:var(--text); }

/* sidebar */
.sidebar-section { margin-bottom:26px; }
.cmd-list { display:flex; flex-direction:column; gap:7px; }
.cmd-item { background:var(--surface2); border-radius:7px; padding:9px 11px; font-size:12px; border:1px solid var(--border); }
.cmd-item code { font-family:'Space Mono',monospace; color:var(--accent2); display:block; margin-bottom:3px; font-size:10px; }
.cmd-item p { color:var(--muted); line-height:1.4; }

/* toast */
#toast {
  position:fixed; bottom:22px; right:22px;
  background:#2ecc71; color:#0a2e18;
  font-size:13px; font-weight:600; padding:9px 16px;
  border-radius:8px; opacity:0; transform:translateY(8px);
  transition:opacity .2s, transform .2s; pointer-events:none; z-index:999;
  font-family:'DM Sans',sans-serif;
}
#toast.show { opacity:1; transform:translateY(0); }
#toast.err { background:var(--accent); color:#fff; }

::-webkit-scrollbar { width:5px; }
::-webkit-scrollbar-thumb { background:rgba(255,255,255,0.1); border-radius:3px; }

@media(max-width:820px){
  .layout { grid-template-columns:1fr; }
  .main { border-right:none; border-bottom:1px solid var(--border); }
}
@media(max-width:560px){
  .slot-row { grid-template-columns:1fr 1fr; }
  .slot-badge { display:none; }
  header { padding:12px 16px; }
  .main,.sidebar { padding:16px; }
}
</style>
</head>
<body>

<header>
  <div class="logo">POKEMON<span>CTRL</span></div>
  <div class="tag">LIVE</div>
  <div class="hdr-right">
    <div class="dot" id="dot"></div>
    <span class="status-text" id="status-text">Conectando...</span>
  </div>
</header>

<div class="layout">
  <main class="main">
    <p class="section-label" style="margin-bottom:12px;">Vista previa del overlay</p>
    <div class="preview-stage">
      <div class="inv" id="inv"></div>
    </div>
    <p class="section-label">Editar slots del party</p>
    <div class="slots-grid" id="slots-grid"></div>
    <div class="bulk-row">
      <button class="btn-primary" onclick="applyAll()">Aplicar todo</button>
      <button class="btn-ghost" onclick="resetAll()">Limpiar todo</button>
    </div>
  </main>

  <aside class="sidebar">
    <div class="sidebar-section">
      <p class="section-label">Comandos del chat</p>
      <div class="cmd-list">
        <div class="cmd-item"><code>!slot1 pikachu</code><p>Pone Pikachu en el slot 1 (del 1 al 6)</p></div>
        <div class="cmd-item"><code>!borrar slot1</code><p>Deja el slot 1 vacío</p></div>
        <div class="cmd-item"><code>!reset</code><p>Limpia todos los slots</p></div>
      </div>
    </div>
    <div class="sidebar-section">
      <p class="section-label">Instrucciones</p>
      <div style="font-size:12px;color:var(--muted);line-height:1.7;display:flex;flex-direction:column;gap:7px;">
        <p>1. Escribí el nombre del Pokémon — el autocomplete sugiere mientras escribís.</p>
        <p>2. Opcionalmente añadí un apodo que se muestra bajo la imagen.</p>
        <p>3. Usá <strong style="color:var(--text)">Aplicar</strong> por slot o <strong style="color:var(--text)">Aplicar todo</strong> para actualizar el overlay.</p>
        <p>4. Para dejar un slot vacío usá el botón Vaciar.</p>
        <p style="color:var(--accent2);">Los cambios se reflejan en el overlay en tiempo real.</p>
      </div>
    </div>
  </aside>
</div>

<div id="toast"></div>

<script>
const SLOT_COUNT = 6;
const BASE_IMG = "https://cdn.jsdelivr.net/gh/QuesitoCR/pokemon-letsgo-overlay@main/images2";
const EXT = ".png";

// El backend está en el mismo servidor que sirve esta página
const API = "";  // vacío = mismo origen

const state = Array.from({ length: SLOT_COUNT }, () => ({ species: "", nick: "", img: "" }));
let activeRow = -1;
let pollTimer = null;

// ── Pokemon list ────────────────────────────────────────────────────────────
const POKEMON = [
  {id:1,n:"bulbasaur"},{id:2,n:"ivysaur"},{id:3,n:"venusaur"},
  {id:4,n:"charmander"},{id:5,n:"charmeleon"},{id:6,n:"charizard"},
  {id:7,n:"squirtle"},{id:8,n:"wartortle"},{id:9,n:"blastoise"},
  {id:10,n:"caterpie"},{id:11,n:"metapod"},{id:12,n:"butterfree"},
  {id:13,n:"weedle"},{id:14,n:"kakuna"},{id:15,n:"beedrill"},
  {id:16,n:"pidgey"},{id:17,n:"pidgeotto"},{id:18,n:"pidgeot"},
  {id:19,n:"rattata"},{id:20,n:"raticate"},{id:21,n:"spearow"},
  {id:22,n:"fearow"},{id:23,n:"ekans"},{id:24,n:"arbok"},
  {id:25,n:"pikachu"},{id:26,n:"raichu"},{id:27,n:"sandshrew"},
  {id:28,n:"sandslash"},{id:29,n:"nidoran-f"},{id:30,n:"nidorina"},
  {id:31,n:"nidoqueen"},{id:32,n:"nidoran-m"},{id:33,n:"nidorino"},
  {id:34,n:"nidoking"},{id:35,n:"clefairy"},{id:36,n:"clefable"},
  {id:37,n:"vulpix"},{id:38,n:"ninetales"},{id:39,n:"jigglypuff"},
  {id:40,n:"wigglytuff"},{id:41,n:"zubat"},{id:42,n:"golbat"},
  {id:43,n:"oddish"},{id:44,n:"gloom"},{id:45,n:"vileplume"},
  {id:46,n:"paras"},{id:47,n:"parasect"},{id:48,n:"venonat"},
  {id:49,n:"venomoth"},{id:50,n:"diglett"},{id:51,n:"dugtrio"},
  {id:52,n:"meowth"},{id:53,n:"persian"},{id:54,n:"psyduck"},
  {id:55,n:"golduck"},{id:56,n:"mankey"},{id:57,n:"primeape"},
  {id:58,n:"growlithe"},{id:59,n:"arcanine"},{id:60,n:"poliwag"},
  {id:61,n:"poliwhirl"},{id:62,n:"poliwrath"},{id:63,n:"abra"},
  {id:64,n:"kadabra"},{id:65,n:"alakazam"},{id:66,n:"machop"},
  {id:67,n:"machoke"},{id:68,n:"machamp"},{id:69,n:"bellsprout"},
  {id:70,n:"weepinbell"},{id:71,n:"victreebel"},{id:72,n:"tentacool"},
  {id:73,n:"tentacruel"},{id:74,n:"geodude"},{id:75,n:"graveler"},
  {id:76,n:"golem"},{id:77,n:"ponyta"},{id:78,n:"rapidash"},
  {id:79,n:"slowpoke"},{id:80,n:"slowbro"},{id:81,n:"magnemite"},
  {id:82,n:"magneton"},{id:83,n:"farfetchd"},{id:84,n:"doduo"},
  {id:85,n:"dodrio"},{id:86,n:"seel"},{id:87,n:"dewgong"},
  {id:88,n:"grimer"},{id:89,n:"muk"},{id:90,n:"shellder"},
  {id:91,n:"cloyster"},{id:92,n:"gastly"},{id:93,n:"haunter"},
  {id:94,n:"gengar"},{id:95,n:"onix"},{id:96,n:"drowzee"},
  {id:97,n:"hypno"},{id:98,n:"krabby"},{id:99,n:"kingler"},
  {id:100,n:"voltorb"},{id:101,n:"electrode"},{id:102,n:"exeggcute"},
  {id:103,n:"exeggutor"},{id:104,n:"cubone"},{id:105,n:"marowak"},
  {id:106,n:"hitmonlee"},{id:107,n:"hitmonchan"},{id:108,n:"lickitung"},
  {id:109,n:"koffing"},{id:110,n:"weezing"},{id:111,n:"rhyhorn"},
  {id:112,n:"rhydon"},{id:113,n:"chansey"},{id:114,n:"tangela"},
  {id:115,n:"kangaskhan"},{id:116,n:"horsea"},{id:117,n:"seadra"},
  {id:118,n:"goldeen"},{id:119,n:"seaking"},{id:120,n:"staryu"},
  {id:121,n:"starmie"},{id:122,n:"mr-mime"},{id:123,n:"scyther"},
  {id:124,n:"jynx"},{id:125,n:"electabuzz"},{id:126,n:"magmar"},
  {id:127,n:"pinsir"},{id:128,n:"tauros"},{id:129,n:"magikarp"},
  {id:130,n:"gyarados"},{id:131,n:"lapras"},{id:132,n:"ditto"},
  {id:133,n:"eevee"},{id:134,n:"vaporeon"},{id:135,n:"jolteon"},
  {id:136,n:"flareon"},{id:137,n:"porygon"},{id:138,n:"omanyte"},
  {id:139,n:"omastar"},{id:140,n:"kabuto"},{id:141,n:"kabutops"},
  {id:142,n:"aerodactyl"},{id:143,n:"snorlax"},{id:144,n:"articuno"},
  {id:145,n:"zapdos"},{id:146,n:"moltres"},{id:147,n:"dratini"},
  {id:148,n:"dragonair"},{id:149,n:"dragonite"},{id:150,n:"mewtwo"},
  {id:151,n:"mew"},
  {id:152,n:"chikorita"},{id:153,n:"bayleef"},{id:154,n:"meganium"},
  {id:155,n:"cyndaquil"},{id:156,n:"quilava"},{id:157,n:"typhlosion"},
  {id:158,n:"totodile"},{id:159,n:"croconaw"},{id:160,n:"feraligatr"},
  {id:172,n:"pichu"},{id:173,n:"cleffa"},{id:174,n:"igglybuff"},
  {id:175,n:"togepi"},{id:176,n:"togetic"},{id:196,n:"espeon"},
  {id:197,n:"umbreon"},{id:243,n:"raikou"},{id:244,n:"entei"},
  {id:245,n:"suicune"},{id:246,n:"larvitar"},{id:247,n:"pupitar"},
  {id:248,n:"tyranitar"},{id:249,n:"lugia"},{id:250,n:"ho-oh"},{id:251,n:"celebi"},
  {id:252,n:"treecko"},{id:253,n:"grovyle"},{id:254,n:"sceptile"},
  {id:255,n:"torchic"},{id:256,n:"combusken"},{id:257,n:"blaziken"},
  {id:258,n:"mudkip"},{id:259,n:"marshtomp"},{id:260,n:"swampert"},
  {id:261,n:"poochyena"},{id:262,n:"mightyena"},{id:263,n:"zigzagoon"},
  {id:264,n:"linoone"},{id:270,n:"lotad"},{id:271,n:"lombre"},{id:272,n:"ludicolo"},
  {id:273,n:"seedot"},{id:274,n:"nuzleaf"},{id:275,n:"shiftry"},
  {id:276,n:"taillow"},{id:277,n:"swellow"},{id:278,n:"wingull"},{id:279,n:"pelipper"},
  {id:280,n:"ralts"},{id:281,n:"kirlia"},{id:282,n:"gardevoir"},
  {id:283,n:"surskit"},{id:284,n:"masquerain"},{id:285,n:"shroomish"},{id:286,n:"breloom"},
  {id:287,n:"slakoth"},{id:288,n:"vigoroth"},{id:289,n:"slaking"},
  {id:290,n:"nincada"},{id:291,n:"ninjask"},{id:292,n:"shedinja"},
  {id:293,n:"whismur"},{id:294,n:"loudred"},{id:295,n:"exploud"},
  {id:296,n:"makuhita"},{id:297,n:"hariyama"},{id:299,n:"nosepass"},
  {id:300,n:"skitty"},{id:301,n:"delcatty"},{id:302,n:"sableye"},{id:303,n:"mawile"},
  {id:304,n:"aron"},{id:305,n:"lairon"},{id:306,n:"aggron"},
  {id:307,n:"meditite"},{id:308,n:"medicham"},{id:309,n:"electrike"},{id:310,n:"manectric"},
  {id:311,n:"plusle"},{id:312,n:"minun"},{id:315,n:"roselia"},
  {id:318,n:"carvanha"},{id:319,n:"sharpedo"},{id:320,n:"wailmer"},{id:321,n:"wailord"},
  {id:322,n:"numel"},{id:323,n:"camerupt"},{id:324,n:"torkoal"},
  {id:325,n:"spoink"},{id:326,n:"grumpig"},{id:328,n:"trapinch"},
  {id:329,n:"vibrava"},{id:330,n:"flygon"},{id:331,n:"cacnea"},{id:332,n:"cacturne"},
  {id:333,n:"swablu"},{id:334,n:"altaria"},{id:335,n:"zangoose"},{id:336,n:"seviper"},
  {id:337,n:"lunatone"},{id:338,n:"solrock"},{id:341,n:"corphish"},{id:342,n:"crawdaunt"},
  {id:343,n:"baltoy"},{id:344,n:"claydol"},{id:345,n:"lileep"},{id:346,n:"cradily"},
  {id:347,n:"anorith"},{id:348,n:"armaldo"},{id:349,n:"feebas"},{id:350,n:"milotic"},
  {id:351,n:"castform"},{id:352,n:"kecleon"},{id:353,n:"shuppet"},{id:354,n:"banette"},
  {id:355,n:"duskull"},{id:356,n:"dusclops"},{id:357,n:"tropius"},
  {id:358,n:"chimecho"},{id:359,n:"absol"},{id:360,n:"wynaut"},
  {id:361,n:"snorunt"},{id:362,n:"glalie"},{id:363,n:"spheal"},
  {id:364,n:"sealeo"},{id:365,n:"walrein"},{id:371,n:"bagon"},
  {id:372,n:"shelgon"},{id:373,n:"salamence"},{id:374,n:"beldum"},
  {id:375,n:"metang"},{id:376,n:"metagross"},{id:377,n:"regirock"},
  {id:378,n:"regice"},{id:379,n:"registeel"},{id:380,n:"latias"},{id:381,n:"latios"},
  {id:382,n:"kyogre"},{id:383,n:"groudon"},{id:384,n:"rayquaza"},
  {id:385,n:"jirachi"},{id:386,n:"deoxys"},
];

function norm(s) {
  return (s||"").trim().toLowerCase().replace(/\s+/g,"-").replace(/[^a-z0-9\-_.]/g,"");
}

function imgUrl(species) {
  if (!species) return "";
  const s = norm(species);
  return `${BASE_IMG}/${encodeURIComponent(s)}${EXT}`;
}

function filterPoke(q) {
  const n = norm(q);
  if (!n) return [];
  return POKEMON.filter(p => p.n.startsWith(n) || p.n.includes(n)).slice(0, 8);
}

// ── Preview ────────────────────────────────────────────────────────────────
function buildPreview() {
  const inv = document.getElementById("inv");
  inv.innerHTML = "";
  for (let i = 0; i < SLOT_COUNT; i++) {
    const s = document.createElement("div");
    s.className = "slot";
    s.innerHTML = `
      <div class="card" id="pc-${i}">
        <img id="pi-${i}" alt="">
        <div class="ph" id="pp-${i}">Vacío</div>
      </div>
      <div class="poke-name" id="pn-${i}"></div>
      <div class="slot-num">Slot ${i+1}</div>`;
    inv.appendChild(s);
  }
}

function renderPreviewSlot(i) {
  const img = document.getElementById(`pi-${i}`);
  const ph  = document.getElementById(`pp-${i}`);
  const nm  = document.getElementById(`pn-${i}`);
  const card= document.getElementById(`pc-${i}`);
  const s   = state[i];

  nm.textContent = s.nick || s.species || "";

  document.querySelectorAll(".card").forEach(c => c.classList.remove("hl"));
  if (activeRow === i) card.classList.add("hl");

  if (!s.img) {
    img.src=""; img.style.display="none";
    ph.style.display="block"; ph.textContent="Vacío";
    return;
  }

  ph.style.display="block"; ph.textContent="Cargando..."; img.style.display="none";
  img.src = s.img;
  img.onload = () => { img.style.display="block"; ph.style.display="none"; };
  img.onerror= () => { ph.textContent="No carga"; };
}

// ── Autocomplete ───────────────────────────────────────────────────────────
let acSelIdx = -1;

function openAC(i, results) {
  const list = document.getElementById(`ac-${i}`);
  if (!list) return;
  acSelIdx = -1;
  list.innerHTML = "";
  results.forEach(p => {
    const el = document.createElement("div");
    el.className = "ac-item";
    el.innerHTML = `<img src="${imgUrl(p.n)}" onerror="this.style.opacity=0"><span class="ac-name">${p.n}</span><span class="ac-num">#${String(p.id).padStart(3,"0")}</span>`;
    el.addEventListener("mousedown", ev => { ev.preventDefault(); pickAC(i, p.n); });
    list.appendChild(el);
  });
  list.classList.toggle("open", results.length > 0);
}

function closeAC(i) {
  const l = document.getElementById(`ac-${i}`);
  if (l) l.classList.remove("open");
  acSelIdx = -1;
}

function pickAC(i, name) {
  document.getElementById(`sp-${i}`).value = name;
  closeAC(i);
  state[i].species = name;
  state[i].img = imgUrl(name);
  renderPreviewSlot(i);
}

// ── Slot rows ──────────────────────────────────────────────────────────────
function buildSlotRows() {
  const grid = document.getElementById("slots-grid");
  grid.innerHTML = "";
  for (let i = 0; i < SLOT_COUNT; i++) {
    const row = document.createElement("div");
    row.className = "slot-row";
    row.id = `row-${i}`;
    row.innerHTML = `
      <div class="slot-badge">S${i+1}</div>
      <div class="input-wrap">
        <label>Pokémon</label>
        <input type="text" id="sp-${i}" placeholder="Ej: pikachu" autocomplete="off">
        <div class="ac-list" id="ac-${i}"></div>
      </div>
      <div class="input-wrap">
        <label>Apodo (opcional)</label>
        <input type="text" id="nk-${i}" placeholder="Ej: Pika">
      </div>
      <div>
        <button class="btn-sm" onclick="applySlot(${i})">Aplicar</button>
        <button class="btn-sm danger" onclick="clearSlot(${i})">Vaciar</button>
      </div>`;
    grid.appendChild(row);

    const sp = row.querySelector(`#sp-${i}`);
    const nk = row.querySelector(`#nk-${i}`);

    sp.addEventListener("focus", () => {
      activeRow = i; renderPreviewSlot(i);
      if (sp.value) openAC(i, filterPoke(sp.value));
    });
    sp.addEventListener("blur", () => setTimeout(() => closeAC(i), 150));
    sp.addEventListener("input", e => openAC(i, filterPoke(e.target.value)));
    sp.addEventListener("keydown", e => {
      const list = document.getElementById(`ac-${i}`);
      const items = list.querySelectorAll(".ac-item");
      if (!list.classList.contains("open") || !items.length) return;
      if (e.key === "ArrowDown") {
        e.preventDefault();
        acSelIdx = Math.min(acSelIdx + 1, items.length - 1);
        items.forEach((el, j) => el.classList.toggle("sel", j === acSelIdx));
      } else if (e.key === "ArrowUp") {
        e.preventDefault();
        acSelIdx = Math.max(acSelIdx - 1, 0);
        items.forEach((el, j) => el.classList.toggle("sel", j === acSelIdx));
      } else if (e.key === "Enter") {
        e.preventDefault();
        if (acSelIdx >= 0 && items[acSelIdx]) {
          pickAC(i, items[acSelIdx].querySelector(".ac-name").textContent);
        } else { closeAC(i); applySlot(i); }
      } else if (e.key === "Escape") closeAC(i);
    });

    nk.addEventListener("focus", () => { activeRow = i; renderPreviewSlot(i); });
    nk.addEventListener("input", e => { state[i].nick = e.target.value; renderPreviewSlot(i); });

    row.addEventListener("click", () => {
      activeRow = i;
      document.querySelectorAll(".slot-row").forEach(r => r.classList.remove("hl"));
      row.classList.add("hl");
      renderPreviewSlot(i);
    });
  }
}

// ── API calls ──────────────────────────────────────────────────────────────
async function fetchSlots() {
  try {
    const r = await fetch(`${API}/slots`);
    if (!r.ok) throw new Error();
    const data = await r.json();
    setStatus("Conectado", false);
    return data;
  } catch {
    setStatus("Sin conexión", true);
    return null;
  }
}

async function postSlots(payload) {
  try {
    const r = await fetch(`${API}/slots`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(payload)
    });
    if (!r.ok) throw new Error();
    setStatus("Guardado", false);
    return true;
  } catch {
    setStatus("Error al guardar", true);
    return false;
  }
}

// ── Sync from server (populate UI with current server state) ───────────────
async function syncFromServer() {
  const data = await fetchSlots();
  if (!data) return;
  data.forEach((s, i) => {
    // Populate inputs only if they're empty (don't overwrite what user is typing)
    const spInput = document.getElementById(`sp-${i}`);
    const nkInput = document.getElementById(`nk-${i}`);
    if (spInput && !spInput.matches(":focus") && !nkInput.matches(":focus")) {
      // Derive species from img URL (last segment without extension)
      const imgPart = (s.img || "").split("/").pop().replace(/\.[^.]+$/, "");
      const species = decodeURIComponent(imgPart);
      if (spInput.value !== species) spInput.value = species;
      if (nkInput.value !== s.name) nkInput.value = s.name || "";
      state[i].species = species;
      state[i].nick = s.name || "";
      state[i].img = s.img || "";
      renderPreviewSlot(i);
    }
  });
}

// ── Actions ────────────────────────────────────────────────────────────────
async function applySlot(i) {
  const species = document.getElementById(`sp-${i}`).value.trim();
  const nick    = document.getElementById(`nk-${i}`).value.trim();
  state[i].species = species;
  state[i].nick    = nick;
  state[i].img     = species ? imgUrl(species) : "";
  renderPreviewSlot(i);
  await postSlots({ index: i, name: nick || species, img: state[i].img });
  toast(`Slot ${i+1} actualizado`);
}

async function applyAll() {
  for (let i = 0; i < SLOT_COUNT; i++) {
    const species = document.getElementById(`sp-${i}`).value.trim();
    const nick    = document.getElementById(`nk-${i}`).value.trim();
    state[i].species = species;
    state[i].nick    = nick;
    state[i].img     = species ? imgUrl(species) : "";
    renderPreviewSlot(i);
  }
  const payload = state.map(s => ({ name: s.nick || s.species, img: s.img }));
  await postSlots(payload);
  toast("Todos los slots aplicados");
}

async function clearSlot(i) {
  document.getElementById(`sp-${i}`).value = "";
  document.getElementById(`nk-${i}`).value = "";
  state[i] = { species: "", nick: "", img: "" };
  renderPreviewSlot(i);
  await postSlots({ index: i, name: "", img: "" });
  toast(`Slot ${i+1} vaciado`);
}

async function resetAll() {
  for (let i = 0; i < SLOT_COUNT; i++) {
    document.getElementById(`sp-${i}`).value = "";
    document.getElementById(`nk-${i}`).value = "";
    state[i] = { species: "", nick: "", img: "" };
    renderPreviewSlot(i);
  }
  try {
    await fetch(`${API}/slots/reset`, { method: "POST" });
    toast("Todos los slots limpiados");
  } catch { toast("Error al resetear", true); }
}

// ── Status / toast ─────────────────────────────────────────────────────────
function setStatus(text, error) {
  document.getElementById("status-text").textContent = text;
  document.getElementById("dot").className = "dot" + (error ? " error" : "");
}

let toastTimer;
function toast(msg, err = false) {
  const el = document.getElementById("toast");
  el.textContent = msg;
  el.className = "show" + (err ? " err" : "");
  clearTimeout(toastTimer);
  toastTimer = setTimeout(() => el.className = "", 2200);
}

// ── Poll server for changes from other users ───────────────────────────────
function startPolling() {
  clearInterval(pollTimer);
  pollTimer = setInterval(syncFromServer, 4000);
}

// ── Init ───────────────────────────────────────────────────────────────────
buildPreview();
buildSlotRows();
syncFromServer().then(startPolling);
</script>
</body>
</html>
