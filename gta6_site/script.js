const intelCards = [
  {tag:'confirmed', title:'Release and platforms', body:'Rockstar currently lists GTA VI as coming 19 November 2026 for PlayStation 5 and Xbox Series X|S. Treat PC timing as unconfirmed until official.', source:'Rockstar official page / Newswire'},
  {tag:'confirmed', title:'Vice City, USA', body:'The story takes Jason and Lucia across Vice City and the wider state of Leonida after an easy score goes wrong.', source:'Rockstar official page'},
  {tag:'confirmed', title:'Jason and Lucia', body:'The lead duo are central to the story. Their relationship, survival and criminal conspiracy arc should be the core of future guide content.', source:'Rockstar official page'},
  {tag:'confirmed', title:'Ultimate Edition and pre-order bonus', body:'Rockstar has announced an Ultimate Edition and the Vintage Vice City Pack for eligible pre-orders/purchases before 20 November.', source:'Rockstar Newswire'},
  {tag:'trailer', title:'Modern Vice City culture', body:'Trailer footage points to social-media satire, beaches, clubs, highways, boats, crowds, viral police clips and Florida-inspired absurdity.', source:'Official trailers'},
  {tag:'trailer', title:'Wildlife and water', body:'The official footage strongly suggests richer wetlands, beaches and animal presence than GTA V. Keep guides ready for water travel and wildlife encounters.', source:'Official trailers'},
  {tag:'gtav', title:'Wanted-level discipline', body:'GTA V rewarded line-of-sight breaks, vehicle swaps, tunnels and off-road escapes. Expect similar principles to matter in VI unless the police system changes heavily.', source:'GTA V comparison'},
  {tag:'gtav', title:'Early money strategy', body:'Based on GTA V, smart players should delay cosmetic spending and prioritise assets that unlock travel, armour, weapons, vehicles and mission efficiency.', source:'GTA V comparison'},
  {tag:'gtav', title:'Vehicle class planning', body:'Prepare guides by vehicle role: fast road car, bike, off-road, boat, aircraft, emergency and utility. Final model names should wait for Rockstar confirmation.', source:'GTA V comparison'},
  {tag:'speculation', title:'Online mode evolution', body:'A GTA VI online world is likely given GTA Online’s success, but exact launch timing, structure and progression should not be stated as fact.', source:'Speculation'},
  {tag:'speculation', title:'Dual-protagonist strategy', body:'Jason and Lucia may have different strengths, contacts or mission angles. Build future guides around character-specific advantages once confirmed.', source:'Speculation'},
  {tag:'speculation', title:'Property and business systems', body:'Vice City’s setting makes nightclubs, music, real estate, strip clubs, garages and marine businesses plausible guide categories, but details remain unconfirmed.', source:'Speculation'}
];
const tagLabels={confirmed:'Confirmed',trailer:'Trailer-based',gtav:'GTA V carry-over',speculation:'Speculation'};
const cards=document.querySelector('#cards');
let activeFilter='all';
function renderCards(){
  const q=document.querySelector('#search').value.toLowerCase();
  const filtered=intelCards.filter(c=>(activeFilter==='all'||c.tag===activeFilter)&&(`${c.title} ${c.body} ${c.source}`.toLowerCase().includes(q)));
  cards.innerHTML=filtered.map(c=>`<article class="intel-card" data-tag="${c.tag}"><span class="tag ${c.tag}">${tagLabels[c.tag]}</span><h3>${c.title}</h3><p>${c.body}</p><small>Source status: ${c.source}</small></article>`).join('') || `<p>No cards found. Try a broader search.</p>`;
}
document.querySelectorAll('.filter').forEach(btn=>btn.addEventListener('click',()=>{document.querySelectorAll('.filter').forEach(b=>b.classList.remove('active'));btn.classList.add('active');activeFilter=btn.dataset.filter;renderCards()}));
document.querySelector('#search').addEventListener('input',renderCards);renderCards();

const vehicleTabs={
  street:{title:'Street cars', text:'Use street cars for missions, pursuits and city exploration. Build guides around acceleration, braking, grip, durability and how easily a car can be replaced after police heat.'},
  offroad:{title:'Off-road and utility', text:'Leonida likely needs swamp, dirt-road and rural travel. Off-road vehicles should be rated for water depth, traction, hill climbing and escape usefulness.'},
  water:{title:'Boats and watercraft', text:'Vice City and the Keys make boats strategically important. Future guides should track docks, canals, island routes, police boat behaviour and fast getaway lines.'},
  air:{title:'Aircraft', text:'Aircraft are not fully detailed yet. Use this section later for helicopters, planes, landing zones, skyline routes and aerial mission tactics.'}
};
function renderTab(key){document.querySelector('#tabOutput').innerHTML=`<h3>${vehicleTabs[key].title}</h3><p>${vehicleTabs[key].text}</p><ul><li>Best use case</li><li>Weakness under police pressure</li><li>Upgrade priority</li><li>Where to find it once confirmed</li></ul>`}
document.querySelectorAll('.tab').forEach(btn=>btn.addEventListener('click',()=>{document.querySelectorAll('.tab').forEach(b=>b.classList.remove('active'));btn.classList.add('active');renderTab(btn.dataset.tab)}));renderTab('street');

const places={
  'Vice City':'Confirmed hub. Build guides for beaches, nightlife, dense traffic, police escape routes, shops, garages and story mission chains.',
  'Leonida Keys':'Trailer/official media area. Likely useful for boats, islands, bridges, tourism, coastal hideouts and scenic exploration.',
  'Port Gellhorn':'Officially named area in media packs. Good future category for coastal/rural contrast, low-key crime and getaway routes.',
  'Ambrosia':'Officially named area. Keep this as a region page until Rockstar confirms activities, businesses and mission relevance.',
  'Mount Kalaga':'Officially named area in media. Likely guide use: wilderness, off-road routes, viewpoints and possible hidden encounters.'
};
document.querySelectorAll('.pin').forEach(pin=>pin.addEventListener('click',()=>{const name=pin.dataset.place;document.querySelector('#placeCard').innerHTML=`<h3>${name}</h3><p>${places[name]}</p><span class="tag trailer">Map watch</span>`}));

const quizText={driver:'You are a getaway driver. Your guide priority should be handling, garages, shortcuts and police escape routes.',explorer:'You are an explorer. Your power comes from map knowledge, collectibles, hidden events and knowing every back road.',strategist:'You are a strategist. You will win by building cash, unlocking assets and avoiding stupid early spending.',chaos:'You are a chaos tester. Fun, but expensive. Learn the wanted system before turning Vice City into fireworks.'};
document.querySelectorAll('.quiz-options button').forEach(btn=>btn.addEventListener('click',()=>{document.querySelector('#quizResult').textContent=quizText[btn.dataset.type]}));

const galleryImages=['art-jason-and-lucia-01-landscape.jpg','art-jason-and-lucia-02-landscape.jpg','shot-vice-city-01.jpg','shot-leonida-keys-01.jpg','shot-ambrosia-01.jpg','shot-port-gellhorn-01.jpg','shot-grassrivers-01.jpg','shot-jason-duval-01.jpg','shot-lucia-caminos-01.jpg','shot-raul-bautista-01.jpg','shot-real-dimez-01.jpg','shot-boobie-ike-01.jpg'];
const gallery=document.querySelector('#galleryGrid');
gallery.innerHTML=galleryImages.map(img=>`<button class="gallery-item"><img loading="lazy" src="assets/images/${img}" alt="GTA VI media ${img.replaceAll('-',' ')}"></button>`).join('');
const lightbox=document.querySelector('#lightbox');const lightboxImg=lightbox.querySelector('img');
document.querySelectorAll('.gallery-item').forEach(item=>item.addEventListener('click',()=>{lightboxImg.src=item.querySelector('img').src;lightbox.showModal()}));
document.querySelector('.close').addEventListener('click',()=>lightbox.close());

function countdown(){
  const target=new Date('2026-11-19T00:00:00Z');
  const now=new Date();
  const diff=target-now;
  const el=document.querySelector('#countdown');
  if(diff<=0){el.textContent='Launch window reached';return}
  const days=Math.floor(diff/86400000);const hrs=Math.floor((diff%86400000)/3600000);const mins=Math.floor((diff%3600000)/60000);
  el.textContent=`${days} days • ${hrs} hrs • ${mins} mins`;
}
countdown();setInterval(countdown,60000);

const toggle=document.querySelector('.nav-toggle');const nav=document.querySelector('.nav');
toggle.addEventListener('click',()=>{const open=nav.classList.toggle('open');toggle.setAttribute('aria-expanded',open)});
nav.querySelectorAll('a').forEach(a=>a.addEventListener('click',()=>nav.classList.remove('open')));
