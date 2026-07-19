"use strict";

const state = { search:"", genders:new Set(), families:new Set(), brand:"todas", price:"todas", tags:new Set(), sort:"destaques" };
const LABELS = {
  gender:{ feminino:"Feminino", masculino:"Masculino", unissex:"Unissex" },
  family:{ doce:"Doce", amadeirado:"Amadeirado", floral:"Floral", oriental:"Oriental", citrico:"Cítrico", aquatico:"Fresco / Aquático", especiado:"Especiado", frutado:"Frutado" },
  tag:{ "mais-vendido":"Mais vendidos", novo:"Lançamentos" }
};
const money = new Intl.NumberFormat("pt-BR",{style:"currency",currency:"BRL"});
let products=[];
let lastModalTrigger=null;

document.addEventListener("DOMContentLoaded", init);

async function init(){
  products=await loadProducts();
  buildFilters();
  bindEvents();
  document.getElementById("currentYear").textContent=new Date().getFullYear();
  route(false);
}

async function loadProducts(){
  if(location.protocol!=="file:"){
    try{const response=await fetch("perfumes.json",{cache:"no-store"});if(response.ok)return validate(await response.json())}catch(error){console.warn("Catálogo remoto indisponível; usando cópia local.",error)}
  }
  return validate(typeof CATALOGO_LOCAL!=="undefined"?CATALOGO_LOCAL:[]);
}

function validate(data){return Array.isArray(data)?data.filter(p=>p&&p.id&&p.nome&&p.marca&&Number.isFinite(Number(p.preco_venda))):[]}

function buildFilters(){
  const genders=[...new Set(products.map(p=>p.genero).filter(Boolean))];
  const families=[...new Set(products.flatMap(p=>p.familias_olfativas||[]))];
  fillChecks("genderFilters",genders,LABELS.gender,"gender");
  fillChecks("familyFilters",families,LABELS.family,"family");
  const select=document.getElementById("brandSelect");
  [...new Set(products.map(p=>p.marca))].sort((a,b)=>a.localeCompare(b,"pt-BR")).forEach(brand=>select.add(new Option(brand,slug(brand))));
}

function fillChecks(id,values,labels,kind){
  const root=document.getElementById(id);
  values.forEach(value=>{const label=document.createElement("label");label.innerHTML=`<input type="checkbox" value="${value}" data-filter-kind="${kind}"> ${labels[value]||value}`;root.append(label)});
}

function bindEvents(){
  addEventListener("hashchange",()=>route(true));
  document.querySelectorAll("a[href^='#/']").forEach(a=>a.addEventListener("click",closeMenu));
  const menu=document.getElementById("mainNav"),toggle=document.getElementById("menuToggle");
  toggle.addEventListener("click",()=>{const open=menu.classList.toggle("is-open");toggle.setAttribute("aria-expanded",String(open));document.body.classList.toggle("is-locked",open)});
  document.getElementById("searchInput").addEventListener("input",e=>{state.search=e.target.value.trim();renderCatalog()});
  document.getElementById("brandSelect").addEventListener("change",e=>{state.brand=e.target.value;renderCatalog()});
  document.getElementById("priceSelect").addEventListener("change",e=>{state.price=e.target.value;renderCatalog()});
  document.getElementById("sortSelect").addEventListener("change",e=>{state.sort=e.target.value;renderCatalog()});
  document.querySelectorAll("[data-filter-kind]").forEach(input=>input.addEventListener("change",()=>{const set=input.dataset.filterKind==="gender"?state.genders:state.families;input.checked?set.add(input.value):set.delete(input.value);renderCatalog()}));
  document.querySelectorAll("#tagFilters input").forEach(input=>input.addEventListener("change",()=>{input.checked?state.tags.add(input.value):state.tags.delete(input.value);renderCatalog()}));
  document.getElementById("clearFilters").addEventListener("click",clearFilters);
  document.querySelector("[data-clear-all]").addEventListener("click",clearFilters);
  document.getElementById("activeFilters").addEventListener("click",e=>{const b=e.target.closest("[data-remove]");if(b)removeFilter(b.dataset.remove,b.dataset.value)});
  document.getElementById("productGrid").addEventListener("click",e=>{const b=e.target.closest("[data-product-id]");if(b)openModal(Number(b.dataset.productId),b)});
  document.getElementById("mobileFilterButton").addEventListener("click",openFilters);
  document.getElementById("closeFilters").addEventListener("click",closeFilters);
  document.getElementById("filterScrim").addEventListener("click",closeFilters);
  const modal=document.getElementById("productModal");
  document.getElementById("modalClose").addEventListener("click",()=>modal.close());
  modal.addEventListener("click",e=>{if(e.target===modal)modal.close()});
  modal.addEventListener("close",()=>lastModalTrigger?.focus());
}

function route(scroll){
  const raw=location.hash.replace(/^#\//,"")||"inicio";
  const [path,query=""]=raw.split("?");
  const page=["inicio","perfumes","quem-somos","contato"].includes(path)?path:"inicio";
  document.querySelectorAll("[data-page]").forEach(el=>el.hidden=el.dataset.page!==page);
  document.querySelectorAll("[data-route-link]").forEach(a=>{const active=a.dataset.routeLink===page;a.classList.toggle("is-active",active);if(active)a.setAttribute("aria-current","page");else a.removeAttribute("aria-current")});
  if(page==="perfumes"){applyQuery(new URLSearchParams(query));renderCatalog()}
  document.title=page==="inicio"?"Amiráh Alta Perfumaria":`${page==="quem-somos"?"Quem Somos":titleCase(page)} | Amiráh`;
  closeMenu();closeFilters();
  if(scroll)scrollTo({top:0,behavior:matchMedia("(prefers-reduced-motion: reduce)").matches?"auto":"smooth"});
}

function applyQuery(params){
  if(!params.size)return;
  clearFilters(false);
  const gender=params.get("genero"),family=params.get("familia");
  if(gender&&LABELS.gender[gender])state.genders.add(gender);
  if(family&&LABELS.family[family])state.families.add(family);
  syncControls();
}

function getFiltered(){
  const term=normalize(state.search);
  let result=products.filter(p=>{
    const searchable=normalize([p.nome,p.marca,p.descricao,(p.familias_olfativas||[]).join(" ")].join(" "));
    const price=Number(p.preco_venda),range=state.price.split("-").map(Number);
    return (!term||searchable.includes(term))&&(!state.genders.size||state.genders.has(p.genero))&&(!state.families.size||(p.familias_olfativas||[]).some(f=>state.families.has(f)))&&(state.brand==="todas"||slug(p.marca)===state.brand)&&(state.price==="todas"||(price>=range[0]&&price<=range[1]))&&(!state.tags.size||[...state.tags].every(t=>(p.tags||[]).includes(t)));
  });
  return result.sort((a,b)=>state.sort==="preco-asc"?a.preco_venda-b.preco_venda:state.sort==="preco-desc"?b.preco_venda-a.preco_venda:state.sort==="nome"?a.nome.localeCompare(b.nome,"pt-BR"):score(b)-score(a)||a.id-b.id);
}

function score(p){return (p.tags||[]).includes("mais-vendido")?2:(p.tags||[]).includes("novo")?1:0}

function renderCatalog(){
  syncControls();
  const filtered=getFiltered(),grid=document.getElementById("productGrid"),empty=document.getElementById("emptyState");
  document.getElementById("resultCount").textContent=`${filtered.length} ${filtered.length===1?"perfume encontrado":"perfumes encontrados"}`;
  grid.replaceChildren(...filtered.map(card));
  grid.hidden=!filtered.length;empty.hidden=!!filtered.length;
  renderChips();
}

function card(p){
  const article=document.createElement("article");article.className="product-card";
  const badge=(p.tags||[])[0];
  article.innerHTML=`<div class="product-media">${badge?`<span class="product-badge">${LABELS.tag[badge]||badge}</span>`:""}<img src="${p.imagem}" alt="Perfume ${escapeHtml(p.nome)} da marca ${escapeHtml(p.marca)}" width="600" height="600" loading="lazy"></div><div class="product-info"><p class="product-brand">${escapeHtml(p.marca)}</p><h2 class="product-name" title="${escapeHtml(p.nome)}">${escapeHtml(p.nome)}</h2><p class="product-meta">${LABELS.gender[p.genero]||p.genero}</p><div class="product-bottom"><span class="product-price">${money.format(p.preco_venda)}</span><button class="details-button" type="button" data-product-id="${p.id}">Ver detalhes</button></div></div>`;
  const img=article.querySelector("img");img.addEventListener("error",()=>{img.removeAttribute("src");img.alt=`Imagem de ${p.nome} indisponível`});
  return article;
}

function renderChips(){
  const root=document.getElementById("activeFilters"),items=[];
  state.genders.forEach(v=>items.push(["gender",v,LABELS.gender[v]]));state.families.forEach(v=>items.push(["family",v,LABELS.family[v]]));state.tags.forEach(v=>items.push(["tag",v,LABELS.tag[v]]));
  if(state.brand!=="todas")items.push(["brand",state.brand,document.getElementById("brandSelect").selectedOptions[0]?.textContent]);
  if(state.price!=="todas")items.push(["price",state.price,document.getElementById("priceSelect").selectedOptions[0]?.textContent]);
  root.innerHTML=items.map(([kind,value,label])=>`<button class="filter-chip" type="button" data-remove="${kind}" data-value="${value}">${label} ×</button>`).join("");
  const count=items.length,badge=document.getElementById("filterBadge");badge.textContent=count?`(${count})`:"";
}

function removeFilter(kind,value){if(kind==="gender")state.genders.delete(value);if(kind==="family")state.families.delete(value);if(kind==="tag")state.tags.delete(value);if(kind==="brand")state.brand="todas";if(kind==="price")state.price="todas";renderCatalog()}
function clearFilters(render=true){state.search="";state.genders.clear();state.families.clear();state.brand="todas";state.price="todas";state.tags.clear();state.sort="destaques";syncControls();if(render)renderCatalog()}
function syncControls(){document.getElementById("searchInput").value=state.search;document.getElementById("brandSelect").value=state.brand;document.getElementById("priceSelect").value=state.price;document.getElementById("sortSelect").value=state.sort;document.querySelectorAll("[data-filter-kind='gender']").forEach(i=>i.checked=state.genders.has(i.value));document.querySelectorAll("[data-filter-kind='family']").forEach(i=>i.checked=state.families.has(i.value));document.querySelectorAll("#tagFilters input").forEach(i=>i.checked=state.tags.has(i.value))}

function openModal(id,trigger){const p=products.find(x=>Number(x.id)===id);if(!p)return;lastModalTrigger=trigger;setText("modalBrand",p.marca);setText("modalGender",LABELS.gender[p.genero]||p.genero);setText("modalTitle",p.nome);setText("modalDescription",p.descricao_completa||p.descricao||"");setText("modalTopNotes",p.notas?.topo||"Não informado");setText("modalHeartNotes",p.notas?.coracao||"Não informado");setText("modalBaseNotes",p.notas?.fundo||"Não informado");setText("modalVolume",p.volume?`${p.volume} ml`:"Volume sob consulta");setText("modalFamilies",(p.familias_olfativas||[]).map(f=>LABELS.family[f]||f).join(" · "));setText("modalRetailPrice",money.format(p.preco_venda));const img=document.getElementById("modalImage");img.src=p.imagem;img.alt=`Perfume ${p.nome} da marca ${p.marca}`;document.getElementById("modalTags").innerHTML=(p.tags||[]).map(t=>`<span>${LABELS.tag[t]||t}</span>`).join("");document.getElementById("modalBuyButton").href=whatsappUrl(p);document.getElementById("productModal").showModal()}
function whatsappUrl(p){const text=`Olá! Tenho interesse no perfume ${p.nome}, da ${p.marca}.`;return `https://wa.me/${typeof NUMERO_WHATSAPP!=="undefined"?NUMERO_WHATSAPP:""}?text=${encodeURIComponent(text)}`}
function openFilters(){document.getElementById("filters").classList.add("is-open");document.getElementById("filterScrim").classList.add("is-open");document.body.classList.add("is-locked");document.getElementById("mobileFilterButton").setAttribute("aria-expanded","true")}
function closeFilters(){document.getElementById("filters")?.classList.remove("is-open");document.getElementById("filterScrim")?.classList.remove("is-open");document.getElementById("mobileFilterButton")?.setAttribute("aria-expanded","false");if(!document.getElementById("mainNav")?.classList.contains("is-open"))document.body.classList.remove("is-locked")}
function closeMenu(){const menu=document.getElementById("mainNav"),toggle=document.getElementById("menuToggle");menu?.classList.remove("is-open");toggle?.setAttribute("aria-expanded","false");if(!document.getElementById("filters")?.classList.contains("is-open"))document.body.classList.remove("is-locked")}
function setText(id,text){document.getElementById(id).textContent=text}
function slug(value){return normalize(value).replace(/[^a-z0-9]+/g,"-").replace(/^-|-$/g,"")}
function normalize(value){return String(value||"").normalize("NFD").replace(/[\u0300-\u036f]/g,"").toLowerCase()}
function titleCase(value){return value.charAt(0).toUpperCase()+value.slice(1)}
function escapeHtml(value){return String(value).replace(/[&<>'"]/g,c=>({"&":"&amp;","<":"&lt;",">":"&gt;","'":"&#39;",'"':"&quot;"})[c])}
