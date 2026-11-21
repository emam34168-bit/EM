document.querySelectorAll('.reveal,.reveal-left,.reveal-right,.client').forEach(x=>x.classList.add('in'));
const burger=document.getElementById('burger'),nav=document.getElementById('navLinks');
burger.addEventListener('click',()=>{const open=nav.classList.toggle('open');burger.classList.toggle('open',open);burger.setAttribute('aria-expanded',String(open));});
nav.addEventListener('click',e=>{if(e.target.closest('a')){nav.classList.remove('open');burger.classList.remove('open');burger.setAttribute('aria-expanded','false');}});
  var PROJECTS = [
    ['Ocean Blue Hotel','255788455/Ocean-Blue-Hotel','57a307255788455.Y3JvcCwyMzkyLDE4NzAsNDEsMA.jpg','life','🏨','Design work for a hotel brand.',['Hospitality','Design']],
    ['Eighteen Plus (Hair) Advertising Campaign','255787947/Eighteen-Plus-(Hair)-Advertising-Campaign','e03278255787947.Y3JvcCwxMjAwLDkzOCwwLDI1OA.png','beauty','💇','Advertising campaign for a hair care line.',['Advertising','Hair care']],
    ['Skin Guard | Social Media','255787361/Skin-Guard-Social-Media','01e381255787361.Y3JvcCwxMDIyLDgwMCw0MzcsMA.jpg','beauty','🧴','Social media designs for the Skin Guard brand.',['Social media','Skin care']],
    ['Cordless | Social Media','255786627/Cordless-Social-Media','7abe6d255786627.Y3JvcCwxMDgwLDg0NCwwLDExNw.png','brand','📱','Social media designs for the Cordless brand.',['Social media','Branding']],
    ['Grand Egyptian Museum','253450965/Grand-Egyptian-Museum','352a72253450965.Y3JvcCwxMDgwLDg0NCwwLDUw.jpg','life','🏛️','Design work inspired by the Grand Egyptian Museum.',['Culture','Design']],
    ['Kovers For Covers','253450789/Kovers-For-Covers','233853253450789.Y3JvcCwxMjAwLDkzOCwwLDEzMA.jpg','brand','🎨','Brand visuals for Kovers For Covers.',['Branding','Design']],
    ['Moist 1 | Social Media Ads','253450675/Moist-1-Social-Media-Ads','e05d7d253450675.Y3JvcCwxMjAwLDkzOCwwLDE1Nw.png','brand','✨','Social media ads for the Moist 1 brand.',['Social media','Ads']],
    ['Khamato','253448775/Khamato','b1a438253448775.Y3JvcCwxMjAwLDkzOCwwLDIxOQ.png','brand','🎯','Brand and marketing visuals for Khamato.',['Branding','Marketing']],
    ['GenFX | Social Media Ads','253448551/GenFX-Social-Media-Ads','d6c9ea253448551.Y3JvcCwxMjAwLDkzOCwwLDIxMw.png','brand','⚡','Social media ads for the GenFX brand.',['Social media','Ads']],
    ['Fork Foods | Social Media','252560671/Fork-Foods-social-Media','898d59252560671.Y3JvcCwxMjAwLDkzOCwwLDI1OA.png','life','🍴','Social media creatives for a food brand.',['Social media','Food']],
    ['Perfume Social Media Ads Collection | Uncovered Perfume','251404095/Perfume-Social-Media-Ads-Collection-Uncovered-Perfume','117c21251404095.Y3JvcCwxMDIyLDgwMCw1MDEsMA.jpg','beauty','🌸','A collection of social media ads for a perfume brand.',['Social media','Fragrance']],
    ['HANSER Haircare Social Media Campaign 2026','251403861/HANSER-Haircare-Social-Media-Campaign-2026','a5bbb6251403861.Y3JvcCwxMjAwLDkzOCwwLDEzMA.jpg','beauty','💇','A 2026 social media campaign for a haircare brand.',['Social media','Haircare']],
    ['Cosmetic Marketing Campaign | Avuva','250632399/Cosmetic-Marketing-Campaign-Avuva','1286a3250632399.Y3JvcCwxMjAwLDkzOCwwLDEzMA.png','beauty','💄','Cosmetic marketing campaign for Avuva.',['Marketing','Cosmetics']],
    ['Product Marketing Ads | Loud Crush','250632075/Product-Marketing-Ads-Loud-Crush','648e10250632075.Y3JvcCwxMjAwLDkzOCwwLDEzMA.png','brand','📣','Product marketing ads for Loud Crush.',['Product ads','Marketing']],
    ['Industrial Marketing Design | Bavaria','250631313/Industrial-Marketing-Design-Bavaria','969120250631313.Y3JvcCwxMjAwLDkzOCwwLDEzMA.jpg','biz','🏭','Industrial marketing design for Bavaria.',['Marketing','Industrial']],
    ['Dermalake Skincare Advertising Campaign','250630971/Dermalake-Skincare-Advertising-Campaign','619256250630971.6a3b8e21620a5.png','beauty','🧴','Skincare advertising campaign for Dermalake.',['Advertising','Skin care']],
    ['Healthcare Marketing Ads | wellvive','250395915/Healthcare-Marketing-Ads-wellvive','ebbc82250395915.Y3JvcCwxMjAwLDkzOCwwLDEyMQ.png','life','🩺','Healthcare marketing ads for wellvive.',['Marketing','Healthcare']],
    ['Prego','247799497/Prego','8949c9247799497.Y3JvcCwzMjAwLDI1MDIsMCwxNTA.png','brand','🎨','Campaign visuals for Prego.',['Campaign','Design']],
    ['Tripoholic Tourism Marketing Ads','247798759/Tripoholic-Tourism-Marketing-Ads','8b0116247798759.Y3JvcCwyNTU2LDIwMDAsMjIxLDA.png','life','✈️','Tourism marketing ads for Tripoholic.',['Marketing','Tourism']],
    ['Real Estate Social Media Campaign | EDGE Residence','247797315/Real-Estate-Social-Media-Campaign-EDGE-Residence','12a184247797315.6a3b8ecfccf09.png','biz','🏢','Real estate social media campaign for EDGE Residence.',['Social media','Real estate']],
    ['Gorgona Cosmetics Ads Campaign','246534709/Gorgona-Cosmetics-Ads-Campaign','4c300e246534709.Y3JvcCwxMTU0LDkwMyw0MiwxMzc.png','beauty','💄','Cosmetics ad campaign for Gorgona.',['Advertising','Cosmetics']],
    ['Nano Treat Social Media Ads','239534689/Nano-Treat-Social-Media-Ads','91cca1239534689.Y3JvcCwzODM1LDMwMDAsODM1LDA.jpg','beauty','🧪','Social media ads for Nano Treat.',['Social media','Ads']],
    ['Beauty & Dermatology Social Media Ads | Egyskin','239532317/Beauty-Dermatology-Social-Media-Ads-Egyskin','dcc464239532317.Y3JvcCwzNDA4LDI2NjYsMjk1LDA.jpg','beauty','🌿','Beauty and dermatology social media ads for Egyskin.',['Social media','Dermatology']],
    ['Eighteen Plus Body Splash Advertising Campaign','239529509/Eighteen-Plus-Body-Splash-Advertising-Campaign','678e94239529509.6a3b8fda55f8b.png','beauty','💦','Advertising campaign for a body splash line.',['Advertising','Body care']],
    ['Hush Up Body Splash Advertising Campaign','239528235/Hush-Up-Body-Splash-Advertising-Campaign','9d4ca5239528235.Y3JvcCwxMjAwLDkzOCwwLDEyNw.png','beauty','💦','Advertising campaign for the Hush Up body splash.',['Advertising','Body care']],
    ['Aal Othman Auto','239526595/Aal-Osman-Auto','830307239526595.Y3JvcCwyNTQwLDE5ODcsMTQ3NywyMjA.jpg','biz','🚗','Marketing visuals for an automotive business.',['Marketing','Automotive']],
    ['FBS','239524097/FBS','8e1218239524097.Y3JvcCwxMjAwLDkzOCwwLDEzMA.jpg','brand','🎯','Brand and marketing visuals for FBS.',['Branding','Marketing']],
    ['Skincare Advertising Campaign | Hayah Laboratories','239523357/Skincare-Advertising-Campaign-Hayah-Laboratories','7cbc23239523357.Y3JvcCwxMjAwLDkzOCwwLDEwNg.png','beauty','🧴','Skincare advertising campaign for Hayah Laboratories.',['Advertising','Skin care']],
    ['Loglam social media ads','229001959/Loglam-social-media-ads','c178f3229001959.Y3JvcCwxMTk1LDkzNSw5NCww.jpg','brand','📱','Social media ads for Loglam.',['Social media','Ads']],
    ['Beauty Product Social Media Campaign | See-Lit','228997895/Beauty-Product-Social-Media-Campaign-See-Lit','518cb4228997895.Y3JvcCwxMzk0LDEwOTEsMyww.jpg','beauty','💅','Beauty product social media campaign for See-Lit.',['Social media','Beauty']]
  ];
  var CATS = {beauty:'Beauty & Care', life:'Food, Health & Travel', biz:'Property, Auto & Industry', brand:'More brands'};
  var IMG = 'https://mir-s3-cdn-cf.behance.net/projects/404/', GAL = 'https://www.behance.net/gallery/';
  var grid = document.getElementById('projectsGrid'), moreBtn = document.getElementById('moreBtn'), countEl = document.getElementById('projCount');
  var filterKey = 'all', shown = 0, STEP = 12;
  function esc(t){ return String(t).replace(/&/g,'&amp;').replace(/</g,'&lt;').replace(/>/g,'&gt;').replace(/"/g,'&quot;'); }
  function currentList(){ return PROJECTS.filter(function(p){ return filterKey === 'all' || p[3] === filterKey; }); }
  function renderProjects(reset){
    var items = currentList();
    if(reset){ grid.innerHTML = ''; shown = 0; }
    items.slice(shown, shown + STEP).forEach(function(p, i){
      var a = document.createElement('a');
      a.className = 'project'; a.href = GAL + p[1]; a.target = '_blank'; a.rel = 'noopener';
      a.setAttribute('data-c', p[3]);
      a.setAttribute('aria-label', p[0] + ' (opens on Behance)');
      a.style.transitionDelay = ((i % 3) * 0.12) + 's';
      a.innerHTML =
        '<div class="thumb">' +
        '<img loading="lazy" referrerpolicy="no-referrer" alt="' + esc(p[0]) + '" src="' + IMG + p[2] + '">' +
        '<span class="view">View project</span></div>' +
        '<div class="body"><h3>' + esc(p[0]) + '</h3><span class="cat">' + esc(CATS[p[3]]) + '</span></div>';
      var im = a.querySelector('img');
      im.addEventListener('error', function(){ im.remove(); });
      grid.appendChild(a);
      cardIO.observe(a);
    });
    shown = Math.min(items.length, shown + STEP);
    moreBtn.style.display = shown < items.length ? '' : 'none';
    countEl.textContent = 'Showing ' + shown + ' of ' + items.length + ' projects';
  }
  var cardIO = new IntersectionObserver(function(entries){
    entries.forEach(function(en){
      if(!en.isIntersecting) return;
      var el = en.target;
      el.classList.add('in');
      cardIO.unobserve(el);
      setTimeout(function(){ el.style.transitionDelay = ''; }, 1300);
    });
  }, {threshold: .1, rootMargin: '0px 0px -30px 0px'});
  moreBtn.addEventListener('click', function(){ renderProjects(false); });
  document.getElementById('filters').addEventListener('click', function(e){
    var b = e.target.closest('.fbtn'); if(!b) return;
    document.querySelectorAll('.fbtn').forEach(function(x){ x.classList.remove('active'); });
    b.classList.add('active'); filterKey = b.dataset.f; renderProjects(true);
  });
  renderProjects(true);


const src=document.querySelector('.about-photo img'),dst=document.getElementById('contactPhoto');if(src&&dst)dst.src=src.src;
document.getElementById('briefForm').addEventListener('submit',e=>{
 e.preventDefault();const f=e.currentTarget,d=new FormData(f);if(!f.reportValidity())return;
 const body='Name: '+d.get('name')+'\nEmail: '+d.get('email')+'\nService: '+d.get('service')+'\n\n'+d.get('brief');
 document.getElementById('draftText').value=body;
 document.getElementById('openDraft').href='mailto:emam34168@gmail.com?subject='+encodeURIComponent('Design enquiry: '+d.get('service'))+'&body='+encodeURIComponent(body);
 document.getElementById('draftPanel').hidden=false;
 document.getElementById('briefStatus').textContent='Draft prepared. Nothing has been sent.';
});
